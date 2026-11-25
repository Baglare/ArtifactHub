"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { fitCanvas, readThemeColors, withAlpha } from "./canvas";

type Judgement = "perfect" | "good" | "miss";
type Note = { t: number; lane: number; hit?: Judgement };
type Phase = "idle" | "analyzing" | "playing" | "done" | "error";
type Stats = { perfect: number; good: number; miss: number; maxCombo: number; score: number; total: number };

const LANES = 4;
const KEYS = ["d", "f", "j", "k"];
const LEAD = 1.6;
const PERFECT = 0.05;
const GOOD = 0.11;
const MAX_SECONDS = 75;
const HEIGHT = 380;

const emptyStats = (): Stats => ({ perfect: 0, good: 0, miss: 0, maxCombo: 0, score: 0, total: 0 });

/** A short synthetic loop (kick, snare, hats, bass, lead) so the demo works without a file. */
function synthDemoTrack(ctx: BaseAudioContext): AudioBuffer {
  const sr = ctx.sampleRate;
  const beat = 60 / 112;
  const bars = 12;
  const length = Math.ceil((bars * 4 * beat + 1.2) * sr);
  const buffer = ctx.createBuffer(1, length, sr);
  const data = buffer.getChannelData(0);
  let seed = 7;
  const noise = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 1073741823.5 - 1;
  };
  const add = (start: number, dur: number, fn: (x: number) => number) => {
    const s0 = Math.floor(start * sr);
    const n = Math.floor(dur * sr);
    for (let i = 0; i < n && s0 + i < length; i += 1) data[s0 + i] += fn(i / sr);
  };
  const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);
  const bassLine = [45, 45, 48, 43];
  const lead = [69, 72, 74, 76, 74, 72, 69, 67];

  for (let bar = 0; bar < bars; bar += 1) {
    for (let b = 0; b < 4; b += 1) {
      const t = (bar * 4 + b) * beat;
      if (b === 0 || b === 2 || (bar % 2 === 1 && b === 3)) {
        add(t, 0.3, (x) => Math.sin(2 * Math.PI * (48 * x + (130 * (1 - Math.exp(-28 * x))) / 28)) * Math.exp(-x * 9) * 0.9);
      }
      if (b === 1 || b === 3) {
        add(t, 0.25, (x) => (noise() * 0.38 + Math.sin(2 * Math.PI * 185 * x) * 0.2) * Math.exp(-x * 17));
      }
      if (bar >= 2) {
        add(t + beat / 2, 0.06, (x) => noise() * Math.exp(-x * 80) * 0.14);
      }
      const f = hz(bassLine[bar % 4] - 12);
      add(t, beat * 0.9, (x) => (Math.sin(2 * Math.PI * f * x) + 0.4 * Math.sin(4 * Math.PI * f * x)) * Math.exp(-x * 3) * 0.22);
      if (bar >= 4 && (b === 1 || b === 3 || bar % 4 === 3)) {
        const m = hz(lead[(bar * 2 + b) % lead.length]);
        add(t + (b === 3 ? beat / 2 : 0), beat * 0.45, (x) => Math.sign(Math.sin(2 * Math.PI * m * x)) * 0.06 * Math.exp(-x * 6));
      }
    }
  }
  let peak = 0;
  for (let i = 0; i < length; i += 1) peak = Math.max(peak, Math.abs(data[i]));
  for (let i = 0; i < length; i += 1) data[i] = (data[i] / (peak || 1)) * 0.8;
  return buffer;
}

/** Find onsets in three frequency bands and map them to four lanes. Runs fully offline in the browser. */
async function analyze(buffer: AudioBuffer): Promise<Note[]> {
  const sr = 22050;
  const duration = Math.min(buffer.duration, MAX_SECONDS);
  const off = new OfflineAudioContext(3, Math.floor(duration * sr), sr);
  const source = off.createBufferSource();
  source.buffer = buffer;
  const merger = off.createChannelMerger(3);
  const specs: { type: BiquadFilterType; freq: number; q?: number }[] = [
    { type: "lowpass", freq: 160 },
    { type: "bandpass", freq: 1400, q: 0.8 },
    { type: "highpass", freq: 6000 }
  ];
  specs.forEach((spec, index) => {
    const filter = off.createBiquadFilter();
    filter.type = spec.type;
    filter.frequency.value = spec.freq;
    if (spec.q) filter.Q.value = spec.q;
    source.connect(filter);
    filter.connect(merger, 0, index);
  });
  merger.connect(off.destination);
  source.start();
  const rendered = await off.startRendering();

  const hop = 512;
  const frameTime = hop / sr;
  const minGap = [0.2, 0.17, 0.24];
  const laneFor = [
    [0, 1],
    [2, 1],
    [3, 2]
  ];
  const notes: Note[] = [];

  for (let band = 0; band < 3; band += 1) {
    const data = rendered.getChannelData(band);
    const frames = Math.floor(data.length / hop);
    const env = new Float32Array(frames);
    let peak = 0;
    for (let f = 0; f < frames; f += 1) {
      let sum = 0;
      for (let i = f * hop; i < (f + 1) * hop; i += 1) sum += data[i] * data[i];
      env[f] = Math.sqrt(sum / hop);
      peak = Math.max(peak, env[f]);
    }
    const flux = new Float32Array(frames);
    for (let f = 1; f < frames; f += 1) flux[f] = Math.max(0, env[f] - env[f - 1]);
    let last = -1;
    let count = 0;
    for (let f = 2; f < frames - 1; f += 1) {
      let local = 0;
      const from = Math.max(0, f - 12);
      const to = Math.min(frames - 1, f + 12);
      for (let k = from; k <= to; k += 1) local += flux[k];
      local /= to - from + 1;
      const t = f * frameTime;
      const isPeak = flux[f] > local * 1.8 + peak * 0.015 && flux[f] >= flux[f - 1] && flux[f] >= flux[f + 1] && env[f] > peak * 0.12;
      if (isPeak && t - last >= minGap[band] && t > 0.6) {
        notes.push({ t, lane: laneFor[band][count % 2] });
        last = t;
        count += 1;
      }
    }
  }

  notes.sort((a, b) => a.t - b.t);
  const kept: Note[] = [];
  const lastInLane = new Array(LANES).fill(-1);
  for (const note of notes) {
    const prev = kept[kept.length - 1];
    const chord = prev && note.t - prev.t < 0.03;
    if (note.t - lastInLane[note.lane] < 0.16) continue;
    if (prev && !chord && note.t - prev.t < 0.1) continue;
    // Keep the chart playable: only an occasional two-note chord, never three.
    if (chord && (kept.length % 6 !== 0 || (kept.length > 1 && kept[kept.length - 2].t > note.t - 0.03))) continue;
    kept.push(note);
    lastInLane[note.lane] = note.t;
  }
  return kept;
}

export function PulseForgeDemo() {
  const { locale } = useLocale();
  const tr = locale === "tr";
  const [phase, setPhase] = useState<Phase>("idle");
  const [stats, setStats] = useState<Stats>(emptyStats);
  const [trackName, setTrackName] = useState<string>("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const game = useRef({
    ctx: null as AudioContext | null,
    source: null as AudioBufferSourceNode | null,
    notes: [] as Note[],
    startAt: 0,
    combo: 0,
    stats: emptyStats(),
    flash: new Array(LANES).fill(-10) as number[],
    pressed: new Array(LANES).fill(false) as boolean[],
    judgement: null as null | { text: Judgement; at: number },
    raf: 0
  });

  const audioContext = () => {
    const g = game.current;
    if (!g.ctx) g.ctx = new AudioContext();
    void g.ctx.resume();
    return g.ctx;
  };

  const stop = useCallback(() => {
    const g = game.current;
    cancelAnimationFrame(g.raf);
    try {
      g.source?.stop();
    } catch {
      /* already stopped */
    }
    g.source = null;
  }, []);

  useEffect(() => () => {
    stop();
    void game.current.ctx?.close();
  }, [stop]);

  const press = useCallback((lane: number) => {
    const g = game.current;
    if (!g.ctx || !g.source) return;
    const now = g.ctx.currentTime - g.startAt;
    g.flash[lane] = now;
    let best: Note | null = null;
    for (const note of g.notes) {
      if (note.hit || note.lane !== lane) continue;
      const diff = Math.abs(note.t - now);
      if (diff <= GOOD && (!best || diff < Math.abs(best.t - now))) best = note;
      if (note.t - now > GOOD) break;
    }
    if (!best) return;
    const diff = Math.abs(best.t - now);
    best.hit = diff <= PERFECT ? "perfect" : "good";
    g.combo += 1;
    g.stats[best.hit] += 1;
    g.stats.score += (best.hit === "perfect" ? 300 : 120) + Math.min(g.combo, 50) * 4;
    g.stats.maxCombo = Math.max(g.stats.maxCombo, g.combo);
    g.judgement = { text: best.hit, at: now };
  }, []);

  const loop = useCallback(() => {
    const g = game.current;
    const canvas = canvasRef.current;
    if (!canvas || !g.ctx) return;
    const { ctx2d, width, height } = fitCanvas(canvas, HEIGHT);
    const colors = readThemeColors(canvas);
    const now = g.ctx.currentTime - g.startAt;

    for (const note of g.notes) {
      if (!note.hit && note.t < now - GOOD) {
        note.hit = "miss";
        g.stats.miss += 1;
        g.combo = 0;
        g.judgement = { text: "miss", at: now };
      }
    }

    const laneWidth = Math.min(92, (width - 32) / LANES);
    const left = (width - laneWidth * LANES) / 2;
    const hitY = height - 64;
    ctx2d.clearRect(0, 0, width, height);

    for (let lane = 0; lane < LANES; lane += 1) {
      const x = left + lane * laneWidth;
      const glow = Math.min(1, Math.max(0, 1 - (now - g.flash[lane]) / 0.18));
      ctx2d.fillStyle = lane % 2 ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.045)";
      ctx2d.fillRect(x, 0, laneWidth, height);
      if (glow > 0) {
        const grad = ctx2d.createLinearGradient(0, hitY, 0, hitY - 160);
        grad.addColorStop(0, withAlpha(colors.accent, glow * 0.35));
        grad.addColorStop(1, withAlpha(colors.accent, 0));
        ctx2d.fillStyle = grad;
        ctx2d.fillRect(x, hitY - 160, laneWidth, 160);
      }
      ctx2d.fillStyle = colors.muted;
      ctx2d.font = "600 13px ui-sans-serif, system-ui";
      ctx2d.textAlign = "center";
      ctx2d.fillText(KEYS[lane].toUpperCase(), x + laneWidth / 2, height - 22);
    }
    ctx2d.fillStyle = colors.fg;
    ctx2d.globalAlpha = 0.7;
    ctx2d.fillRect(left, hitY, laneWidth * LANES, 2);
    ctx2d.globalAlpha = 1;

    for (const note of g.notes) {
      const dt = note.t - now;
      if (dt > LEAD + 0.1) break;
      if (note.hit && note.hit !== "miss") continue;
      if (dt < -0.4) continue;
      const y = hitY - (dt / LEAD) * (hitY + 20);
      const x = left + note.lane * laneWidth + 6;
      ctx2d.globalAlpha = note.hit === "miss" ? 0.25 : 1;
      ctx2d.fillStyle = note.lane === 0 || note.lane === 3 ? colors.accent : colors.accent2;
      ctx2d.beginPath();
      ctx2d.roundRect(x, y - 8, laneWidth - 12, 16, 6);
      ctx2d.fill();
      ctx2d.globalAlpha = 1;
    }

    ctx2d.textAlign = "left";
    ctx2d.fillStyle = colors.fg;
    ctx2d.font = "600 22px ui-sans-serif, system-ui";
    ctx2d.fillText(String(g.stats.score), 18, 34);
    ctx2d.font = "13px ui-sans-serif, system-ui";
    ctx2d.fillStyle = colors.muted;
    ctx2d.fillText(`${tr ? "Kombo" : "Combo"} ${g.combo}`, 18, 54);
    if (g.judgement && now - g.judgement.at < 0.5) {
      const labels = { perfect: tr ? "Kusursuz" : "Perfect", good: tr ? "İyi" : "Good", miss: tr ? "Kaçtı" : "Miss" };
      ctx2d.textAlign = "center";
      ctx2d.font = "600 20px ui-sans-serif, system-ui";
      ctx2d.fillStyle = g.judgement.text === "miss" ? colors.muted : colors.accent2;
      ctx2d.fillText(labels[g.judgement.text], width / 2, hitY - 40);
    }

    const lastNote = g.notes[g.notes.length - 1];
    if (!lastNote || now > lastNote.t + 1.2) {
      stop();
      setStats({ ...g.stats });
      setPhase("done");
      return;
    }
    g.raf = requestAnimationFrame(loop);
  }, [stop, tr]);

  const start = useCallback(
    async (getBuffer: (ctx: AudioContext) => Promise<AudioBuffer>, name: string) => {
      stop();
      setPhase("analyzing");
      setTrackName(name);
      try {
        const ctx = audioContext();
        const buffer = await getBuffer(ctx);
        const notes = await analyze(buffer);
        if (notes.length < 8) throw new Error("too few notes");
        const g = game.current;
        g.notes = notes;
        g.combo = 0;
        g.stats = { ...emptyStats(), total: notes.length };
        g.judgement = null;
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        g.startAt = ctx.currentTime + LEAD;
        source.start(g.startAt, 0, Math.min(buffer.duration, MAX_SECONDS));
        g.source = source;
        setPhase("playing");
        wrapRef.current?.focus();
        g.raf = requestAnimationFrame(loop);
      } catch {
        setPhase("error");
      }
    },
    [loop, stop]
  );

  useEffect(() => {
    if (phase !== "playing") return;
    const g = game.current;
    const down = (event: KeyboardEvent) => {
      const lane = KEYS.indexOf(event.key.toLowerCase());
      if (lane < 0 || event.repeat) return;
      event.preventDefault();
      g.pressed[lane] = true;
      press(lane);
    };
    const up = (event: KeyboardEvent) => {
      const lane = KEYS.indexOf(event.key.toLowerCase());
      if (lane >= 0) g.pressed[lane] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [phase, press]);

  const onCanvasPointer = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const laneWidth = Math.min(92, (rect.width - 32) / LANES);
    const left = (rect.width - laneWidth * LANES) / 2;
    const lane = Math.floor((event.clientX - rect.left - left) / laneWidth);
    if (lane >= 0 && lane < LANES) press(lane);
  };

  const playDemo = () => start(async (ctx) => synthDemoTrack(ctx), tr ? "Örnek ritim" : "Sample beat");
  const playFile = (file: File) => start(async (ctx) => ctx.decodeAudioData(await file.arrayBuffer()), file.name);

  const accuracy = stats.total ? Math.round(((stats.perfect + stats.good * 0.6) / stats.total) * 100) : 0;

  return (
    <div className="relative outline-none" ref={wrapRef} tabIndex={-1}>
      <canvas
        className={`block w-full touch-none ${phase === "playing" ? "" : "opacity-30"}`}
        onPointerDown={onCanvasPointer}
        ref={canvasRef}
        style={{ height: HEIGHT }}
      />
      {phase === "playing" ? (
        <div className="absolute right-4 top-3 flex items-center gap-3 text-[13px] text-[var(--theme-text-muted)]">
          <span className="max-w-[12rem] truncate">{trackName}</span>
          <button
            className="rounded-md border border-[color:var(--hairline-strong)] px-2.5 py-1 hover:text-[var(--theme-text-primary)]"
            onClick={() => {
              stop();
              setStats({ ...game.current.stats });
              setPhase("done");
            }}
            type="button"
          >
            {tr ? "Bitir" : "Stop"}
          </button>
        </div>
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div className="max-w-sm">
            {phase === "analyzing" ? (
              <p className="text-[15px] text-[var(--theme-text-secondary)]">{tr ? "Vuruşlar aranıyor…" : "Finding the beats…"}</p>
            ) : (
              <>
                {phase === "done" ? (
                  <div className="mb-6">
                    <p className="text-[2.4rem] leading-none text-[var(--theme-text-primary)] tabular">{stats.score}</p>
                    <p className="mt-2 text-[14px] text-[var(--theme-text-muted)]">
                      %{accuracy} · {tr ? "en uzun kombo" : "best combo"} {stats.maxCombo} · {stats.perfect}/{stats.good}/{stats.miss}
                    </p>
                  </div>
                ) : phase === "error" ? (
                  <p className="mb-5 text-[14px] text-[var(--theme-text-secondary)]">
                    {tr ? "Bu dosyadan ritim çıkaramadım. Başka bir şarkı dene." : "Couldn’t get a rhythm out of that file. Try another song."}
                  </p>
                ) : (
                  <p className="mb-5 text-[15px] leading-relaxed text-[var(--theme-text-secondary)]">
                    {tr
                      ? "Bir şarkı seç; tarayıcın vuruşları bulup notaya çevirsin. Dosya bilgisayarından çıkmaz."
                      : "Pick a song and your browser turns its beats into notes. The file never leaves your computer."}
                  </p>
                )}
                <div className="flex flex-wrap justify-center gap-3">
                  <button className="demo-button demo-button--primary" onClick={playDemo} type="button">
                    {tr ? "Örnek ritimle oyna" : "Play the sample beat"}
                  </button>
                  <button className="demo-button" onClick={() => fileRef.current?.click()} type="button">
                    {tr ? "Kendi şarkını seç" : "Use your own song"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <input
        accept="audio/*"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) void playFile(file);
          event.target.value = "";
        }}
        ref={fileRef}
        type="file"
      />
    </div>
  );
}
