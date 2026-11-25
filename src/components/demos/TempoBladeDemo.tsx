"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { fitCanvas, readThemeColors, withAlpha } from "./canvas";

type Result = "parry" | "deflect" | "hit";
type Attack = { t: number; result?: Result; at?: number };
type Phase = "idle" | "playing" | "done";

const BPM = 100;
const BEAT = 60 / BPM;
const PARRY = 0.06;
const DEFLECT = 0.13;
const HEIGHT = 340;
const MAX_HP = 5;

/** Attack times in beats: a short wave that speeds up, with a few off-beat doubles. */
const PATTERN = [4, 6, 8, 9, 10, 12, 13, 14, 14.5, 16, 17, 18, 18.5, 19, 20, 22, 22.5, 23, 24, 25, 25.5, 26, 27, 28];

export function TempoBladeDemo() {
  const { locale } = useLocale();
  const tr = locale === "tr";
  const [phase, setPhase] = useState<Phase>("idle");
  const [summary, setSummary] = useState({ parry: 0, deflect: 0, hit: 0, survived: true });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const game = useRef({
    ctx: null as AudioContext | null,
    startAt: 0,
    attacks: [] as Attack[],
    hp: MAX_HP,
    combo: 0,
    swingAt: -10,
    hurtAt: -10,
    label: null as null | { text: string; at: number },
    scheduled: 0,
    raf: 0
  });

  const tone = (time: number, freq: number, dur: number, gain: number, type: OscillatorType = "sine") => {
    const ctx = game.current.ctx;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);
    amp.gain.setValueAtTime(gain, time);
    amp.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    osc.connect(amp).connect(ctx.destination);
    osc.start(time);
    osc.stop(time + dur + 0.02);
  };

  const finish = useCallback(() => {
    const g = game.current;
    cancelAnimationFrame(g.raf);
    const count = (r: Result) => g.attacks.filter((a) => a.result === r).length;
    setSummary({ parry: count("parry"), deflect: count("deflect"), hit: count("hit"), survived: g.hp > 0 });
    setPhase("done");
  }, []);

  const strike = useCallback(() => {
    const g = game.current;
    if (!g.ctx) return;
    const now = g.ctx.currentTime - g.startAt;
    g.swingAt = now;
    let best: Attack | null = null;
    for (const attack of g.attacks) {
      if (attack.result) continue;
      const diff = Math.abs(attack.t - now);
      if (diff <= DEFLECT && (!best || diff < Math.abs(best.t - now))) best = attack;
    }
    if (!best) {
      g.combo = 0;
      g.label = { text: tr ? "Erken" : "Early", at: now };
      return;
    }
    const diff = Math.abs(best.t - now);
    best.result = diff <= PARRY ? "parry" : "deflect";
    best.at = now;
    g.combo += 1;
    g.label = { text: best.result === "parry" ? (tr ? "Savuşturma!" : "Parry!") : tr ? "Saptırma" : "Deflect", at: now };
    tone(g.ctx.currentTime, best.result === "parry" ? 1320 : 880, 0.18, 0.18, "triangle");
  }, [tr]);

  const loop = useCallback(() => {
    const g = game.current;
    const canvas = canvasRef.current;
    if (!canvas || !g.ctx) return;
    const { ctx2d, width, height } = fitCanvas(canvas, HEIGHT);
    const colors = readThemeColors(canvas);
    const now = g.ctx.currentTime - g.startAt;

    // Schedule metronome ticks a little ahead of time.
    while (g.scheduled * BEAT < now + 0.5 && g.scheduled <= PATTERN[PATTERN.length - 1] + 1) {
      tone(g.startAt + g.scheduled * BEAT, g.scheduled % 4 === 0 ? 660 : 440, 0.05, 0.06);
      g.scheduled += 1;
    }

    for (const attack of g.attacks) {
      if (!attack.result && now > attack.t + DEFLECT) {
        attack.result = "hit";
        attack.at = now;
        g.hp -= 1;
        g.combo = 0;
        g.hurtAt = now;
        g.label = { text: tr ? "Isabet aldın" : "Hit", at: now };
        tone(g.ctx.currentTime, 110, 0.25, 0.25, "sawtooth");
      }
    }

    const px = width * 0.26;
    const ex = width * 0.78;
    const cy = height * 0.52;
    const beatPhase = ((now % BEAT) + BEAT) % BEAT;
    const pulse = Math.exp(-beatPhase * 9);

    ctx2d.clearRect(0, 0, width, height);
    ctx2d.fillStyle = withAlpha(colors.accent, 0.05 + pulse * 0.1);
    ctx2d.fillRect(0, cy - 1, width, 2);

    // Enemy: a pulsing diamond.
    ctx2d.save();
    ctx2d.translate(ex, cy);
    ctx2d.rotate(Math.PI / 4);
    ctx2d.strokeStyle = colors.accent2;
    ctx2d.lineWidth = 2;
    const es = 26 + pulse * 6;
    ctx2d.strokeRect(-es / 2, -es / 2, es, es);
    ctx2d.restore();

    // Incoming blades travel one beat from enemy to player and arrive exactly on the attack time.
    for (const attack of g.attacks) {
      const progress = 1 - (attack.t - now) / BEAT;
      if (progress < 0) continue;
      if (attack.result === "parry" || attack.result === "deflect") {
        const back = (now - (attack.at ?? now)) / 0.4;
        if (back > 1) continue;
        const x = px + (ex - px) * back;
        const y = cy - (attack.result === "deflect" ? back * 80 : 0);
        ctx2d.globalAlpha = 1 - back;
        ctx2d.fillStyle = colors.accent2;
        ctx2d.beginPath();
        ctx2d.arc(x, y, 6, 0, Math.PI * 2);
        ctx2d.fill();
        ctx2d.globalAlpha = 1;
        continue;
      }
      if (attack.result === "hit" || progress > 1.15) continue;
      const x = ex + (px - ex) * Math.min(progress, 1);
      ctx2d.strokeStyle = colors.accent;
      ctx2d.lineWidth = 3;
      ctx2d.beginPath();
      ctx2d.arc(x + 14, cy, 16, Math.PI * 0.65, Math.PI * 1.35);
      ctx2d.stroke();
      // Timing ring closing in on the player.
      ctx2d.globalAlpha = 0.5;
      ctx2d.lineWidth = 1.5;
      ctx2d.beginPath();
      ctx2d.arc(px, cy, 30 + (1 - Math.min(progress, 1)) * 70, 0, Math.PI * 2);
      ctx2d.stroke();
      ctx2d.globalAlpha = 1;
    }

    // Player: a circle with a blade that swings when you strike.
    const hurt = Math.max(0, 1 - (now - g.hurtAt) / 0.35);
    ctx2d.strokeStyle = hurt > 0 ? "#f87171" : colors.fg;
    ctx2d.lineWidth = 2;
    ctx2d.beginPath();
    ctx2d.arc(px, cy, 30, 0, Math.PI * 2);
    ctx2d.stroke();
    const swing = Math.max(0, 1 - (now - g.swingAt) / 0.16);
    ctx2d.save();
    ctx2d.translate(px, cy);
    ctx2d.rotate(-0.9 + swing * 1.8);
    ctx2d.strokeStyle = colors.accent2;
    ctx2d.lineWidth = 3;
    ctx2d.beginPath();
    ctx2d.moveTo(18, 0);
    ctx2d.lineTo(58, 0);
    ctx2d.stroke();
    ctx2d.restore();

    ctx2d.textAlign = "left";
    ctx2d.font = "13px ui-sans-serif, system-ui";
    ctx2d.fillStyle = colors.muted;
    ctx2d.fillText(`${tr ? "Can" : "HP"} ${"●".repeat(Math.max(g.hp, 0))}${"○".repeat(MAX_HP - Math.max(g.hp, 0))}`, 18, 30);
    ctx2d.fillText(`${tr ? "Seri" : "Streak"} ${g.combo}`, 18, 50);
    if (g.label && now - g.label.at < 0.55) {
      ctx2d.textAlign = "center";
      ctx2d.font = "600 20px ui-sans-serif, system-ui";
      ctx2d.fillStyle = colors.fg;
      ctx2d.fillText(g.label.text, px, cy - 64);
    }

    if (g.hp <= 0 || now > PATTERN[PATTERN.length - 1] * BEAT + 0.8) {
      finish();
      return;
    }
    g.raf = requestAnimationFrame(loop);
  }, [finish, tr]);

  const start = () => {
    const g = game.current;
    cancelAnimationFrame(g.raf);
    if (!g.ctx) g.ctx = new AudioContext();
    void g.ctx.resume();
    g.startAt = g.ctx.currentTime + 0.3;
    g.attacks = PATTERN.map((beat) => ({ t: beat * BEAT }));
    g.hp = MAX_HP;
    g.combo = 0;
    g.scheduled = 0;
    g.label = null;
    setPhase("playing");
    g.raf = requestAnimationFrame(loop);
  };

  useEffect(() => {
    const g = game.current;
    return () => {
      cancelAnimationFrame(g.raf);
      void g.ctx?.close();
    };
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    const down = (event: KeyboardEvent) => {
      if (event.code !== "Space" || event.repeat) return;
      event.preventDefault();
      strike();
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [phase, strike]);

  return (
    <div className="relative">
      <canvas
        className={`block w-full touch-none ${phase === "playing" ? "" : "opacity-30"}`}
        onPointerDown={() => phase === "playing" && strike()}
        ref={canvasRef}
        style={{ height: HEIGHT }}
      />
      {phase !== "playing" ? (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div className="max-w-sm">
            {phase === "done" ? (
              <div className="mb-6">
                <p className="text-[1.9rem] leading-tight text-[var(--theme-text-primary)]">
                  {summary.survived ? (tr ? "Dalgayı atlattın" : "You made it") : tr ? "Düştün" : "You fell"}
                </p>
                <p className="mt-2 text-[14px] text-[var(--theme-text-muted)]">
                  {summary.parry} {tr ? "savuşturma" : "parries"} · {summary.deflect} {tr ? "saptırma" : "deflects"} · {summary.hit} {tr ? "isabet" : "hits"}
                </p>
              </div>
            ) : (
              <p className="mb-5 text-[15px] leading-relaxed text-[var(--theme-text-secondary)]">
                {tr
                  ? "Bıçak tam vuruşta sana ulaşır. Halka kapanırken bas: tam zamanında savuşturur, biraz kaçırırsan saptırırsın."
                  : "Each blade reaches you right on the beat. Strike as the ring closes: on time is a parry, a little off is a deflect."}
              </p>
            )}
            <button className="demo-button demo-button--primary" onClick={start} type="button">
              {phase === "done" ? (tr ? "Tekrar" : "Again") : tr ? "Başla" : "Start"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
