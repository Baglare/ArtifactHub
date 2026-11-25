"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";

const ROWS = 6;
const COLS = 9;
const START = 3 * COLS + 0;
const WALLS = new Set([1 * COLS + 2, 2 * COLS + 2, 3 * COLS + 2, 3 * COLS + 5, 4 * COLS + 5, 5 * COLS + 5, 1 * COLS + 6, 0 * COLS + 4]);
const TRAPS = new Set([2 * COLS + 4, 4 * COLS + 3, 2 * COLS + 7]);
const TASKS = [
  { goal: 0 * COLS + 8, name: { tr: "Kuzeydoğu çıkışı", en: "North-east exit" } },
  { goal: 5 * COLS + 8, name: { tr: "Güneydoğu çıkışı", en: "South-east exit" } }
];
const MOVES = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];
const ARROWS = ["↑", "→", "↓", "←"];
const MAX_STEPS = 90;

type Skill = { q: Float32Array; episodes: number; recent: boolean[] };

const newSkill = (): Skill => ({ q: new Float32Array(ROWS * COLS * 4), episodes: 0, recent: [] });

function step(state: number, action: number, goal: number) {
  const r = Math.floor(state / COLS) + MOVES[action][0];
  const c = (state % COLS) + MOVES[action][1];
  if (r < 0 || r >= ROWS || c < 0 || c >= COLS || WALLS.has(r * COLS + c)) return { next: state, reward: -0.05, done: false };
  const next = r * COLS + c;
  if (next === goal) return { next, reward: 1, done: true };
  if (TRAPS.has(next)) return { next, reward: -1, done: true };
  return { next, reward: -0.02, done: false };
}

const greedy = (q: Float32Array, s: number) => {
  let best = 0;
  for (let a = 1; a < 4; a += 1) if (q[s * 4 + a] > q[s * 4 + best]) best = a;
  return best;
};

/** Tabular Q-learning on a small grid; each exit is a separate skill the agent keeps when you switch tasks. */
function train(skill: Skill, goal: number, episodes: number) {
  const alpha = 0.5;
  const gamma = 0.93;
  for (let e = 0; e < episodes; e += 1) {
    const epsilon = Math.max(0.05, 0.6 * 0.97 ** skill.episodes);
    let s = START;
    let reached = false;
    for (let t = 0; t < MAX_STEPS; t += 1) {
      const a = Math.random() < epsilon ? Math.floor(Math.random() * 4) : greedy(skill.q, s);
      const { next, reward, done } = step(s, a, goal);
      const target = done ? reward : reward + gamma * skill.q[next * 4 + greedy(skill.q, next)];
      skill.q[s * 4 + a] += alpha * (target - skill.q[s * 4 + a]);
      s = next;
      if (done) {
        reached = next === goal;
        break;
      }
    }
    skill.episodes += 1;
    skill.recent = [...skill.recent.slice(-24), reached];
  }
}

export function AgentVerseDemo() {
  const { locale } = useLocale();
  const tr = locale === "tr";
  const skills = useRef<Skill[]>(TASKS.map(newSkill));
  const [task, setTask] = useState(0);
  const [, setVersion] = useState(0);
  const [agent, setAgent] = useState<number | null>(null);
  const [trail, setTrail] = useState<number[]>([]);
  const timer = useRef<number | null>(null);

  const skill = skills.current[task];
  const goal = TASKS[task].goal;
  const refresh = () => setVersion((v) => v + 1);

  const stopWalk = () => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
  };
  useEffect(() => stopWalk, []);

  const onTrain = (count: number) => {
    stopWalk();
    setAgent(null);
    setTrail([]);
    train(skill, goal, count);
    refresh();
  };

  const onWatch = () => {
    stopWalk();
    let s = START;
    let steps = 0;
    const path = [s];
    setAgent(s);
    setTrail(path.slice());
    timer.current = window.setInterval(() => {
      const { next, done } = step(s, greedy(skill.q, s), goal);
      steps += 1;
      s = next;
      path.push(s);
      setAgent(s);
      setTrail(path.slice());
      if (done || steps > 40) stopWalk();
    }, 140);
  };

  const onReset = () => {
    stopWalk();
    skills.current[task] = newSkill();
    setAgent(null);
    setTrail([]);
    refresh();
  };

  let maxV = 0.0001;
  const values = Array.from({ length: ROWS * COLS }, (_, s) => {
    const v = Math.max(...Array.from({ length: 4 }, (_, a) => skill.q[s * 4 + a]));
    if (v > maxV) maxV = v;
    return v;
  });
  const success = skill.recent.length ? Math.round((skill.recent.filter(Boolean).length / skill.recent.length) * 100) : 0;

  return (
    <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_15rem]">
      <div className="mx-auto grid w-full max-w-[520px] gap-[3px]" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
        {values.map((v, s) => {
          const isWall = WALLS.has(s);
          const isTrap = TRAPS.has(s);
          const isGoal = s === goal;
          const learned = skill.episodes > 0 && v > 0.02 && !isWall && !isTrap && !isGoal;
          const strength = Math.max(0, v / maxV);
          return (
            <div
              className="relative grid aspect-square place-items-center rounded-[5px] text-[13px]"
              key={s}
              style={{
                background: isWall
                  ? "rgba(255,255,255,0.08)"
                  : isTrap
                    ? "rgba(248,113,113,0.22)"
                    : isGoal
                      ? "color-mix(in srgb, var(--theme-accent-primary) 55%, transparent)"
                      : `color-mix(in srgb, var(--theme-accent-primary) ${Math.round(strength * 32)}%, rgba(255,255,255,0.03))`,
                outline: trail.includes(s) && !isGoal ? "1px solid color-mix(in srgb, var(--theme-accent-secondary) 50%, transparent)" : undefined
              }}
            >
              {isGoal ? <span className="text-[var(--ink)]">★</span> : null}
              {isTrap ? <span className="text-[#f87171]">×</span> : null}
              {s === START && agent === null ? <span className="text-[var(--theme-text-muted)]">○</span> : null}
              {learned && agent === null ? <span className="text-[var(--theme-text-secondary)] opacity-70">{ARROWS[greedy(skill.q, s)]}</span> : null}
              {agent === s ? <span className="absolute inset-[22%] rounded-full bg-[var(--theme-accent-secondary)]" /> : null}
            </div>
          );
        })}
      </div>

      <div className="flex min-w-0 flex-col gap-5">
        <div>
          <p className="text-[13px] text-[var(--theme-text-muted)]">{tr ? "Görev" : "Task"}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {TASKS.map((t, i) => (
              <button
                aria-pressed={i === task}
                className={`demo-chip ${i === task ? "is-on" : ""}`}
                key={t.goal}
                onClick={() => {
                  stopWalk();
                  setAgent(null);
                  setTrail([]);
                  setTask(i);
                }}
                type="button"
              >
                {tr ? t.name.tr : t.name.en}
                <span className="opacity-60"> · {skills.current[i].episodes}</span>
              </button>
            ))}
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-3">
          <div>
            <dt className="text-[13px] text-[var(--theme-text-muted)]">{tr ? "Bölüm" : "Episodes"}</dt>
            <dd className="tabular text-[1.5rem] text-[var(--theme-text-primary)]">{skill.episodes}</dd>
          </div>
          <div>
            <dt className="text-[13px] text-[var(--theme-text-muted)]">{tr ? "Son 25 başarı" : "Last 25 success"}</dt>
            <dd className="tabular text-[1.5rem] text-[var(--theme-text-primary)]">%{success}</dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-2">
          <button className="demo-button demo-button--primary" onClick={() => onTrain(25)} type="button">
            {tr ? "25 bölüm eğit" : "Train 25 episodes"}
          </button>
          <button className="demo-button" disabled={!skill.episodes} onClick={onWatch} type="button">
            {tr ? "İzle" : "Watch"}
          </button>
          <button className="demo-button" onClick={onReset} type="button">
            {tr ? "Unut" : "Forget"}
          </button>
        </div>
        <p className="text-[13.5px] leading-relaxed text-[var(--theme-text-muted)]">
          {tr
            ? "Görev değiştirince eski beceri silinmez; geri döndüğünde ajan yolu hâlâ biliyor."
            : "Switching tasks doesn’t wipe the old skill; come back and the agent still knows the way."}
        </p>
      </div>
    </div>
  );
}
