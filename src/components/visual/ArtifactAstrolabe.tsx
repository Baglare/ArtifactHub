"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { homePageText } from "@/data/pageText";
import { getUiText } from "@/data/uiText";
import { getCategoryById } from "@/lib/categories";
import { getLocalizedText } from "@/lib/i18n";
import { getStatusById } from "@/lib/statuses";
import type { Artifact, MaturityLevel } from "@/types/artifact";

type ArtifactAstrolabeProps = {
  artifacts: Artifact[];
};

type Pointer = {
  artifact: Artifact;
  inventory: string;
  maturity: MaturityLevel;
  /** Angle on the rete in degrees, 0 = east, clockwise (SVG convention). */
  angle: number;
  radius: number;
};

const C = 500;
/** Mature work sits nearest the centre pin, early work on the outer rings. */
const ringRadius: Record<MaturityLevel, number> = { 4: 140, 3: 222, 2: 304, 1: 384 };
const roman: Record<MaturityLevel, string> = { 4: "IV", 3: "III", 2: "II", 1: "I" };
const pointerSize: Record<MaturityLevel, { length: number; width: number; star: number }> = {
  4: { length: 50, width: 18, star: 9 },
  3: { length: 42, width: 15, star: 7.5 },
  2: { length: 34, width: 12, star: 6 },
  1: { length: 28, width: 10, star: 5 }
};
const pointerColor: Record<MaturityLevel, string> = {
  4: "var(--accent-bright)",
  3: "var(--accent)",
  2: "var(--growth)",
  1: "var(--growth-dim)"
};

const toRad = (deg: number) => (deg * Math.PI) / 180;
// Rounded so server and client render identical attribute strings (avoids hydration mismatches).
const round = (value: number) => Math.round(value * 100) / 100;
const polar = (radius: number, deg: number) => ({ x: round(C + Math.cos(toRad(deg)) * radius), y: round(C + Math.sin(toRad(deg)) * radius) });
const wrap = (deg: number) => ((((deg + 180) % 360) + 360) % 360) - 180;

function buildPointers(artifacts: Artifact[]): Pointer[] {
  const groups = new Map<MaturityLevel, { artifact: Artifact; inventory: string }[]>();
  artifacts.forEach((artifact, index) => {
    const maturity = getStatusById(artifact.statusId)?.maturity ?? 1;
    const inventory = `AH·${String(index + 1).padStart(2, "0")}`;
    groups.set(maturity, [...(groups.get(maturity) ?? []), { artifact, inventory }]);
  });

  const pointers: Pointer[] = [];
  for (const [maturity, members] of groups) {
    const offset = maturity * 52 - 90;
    members.forEach((member, index) => {
      pointers.push({ ...member, maturity, radius: ringRadius[maturity], angle: offset + (index / members.length) * 360 });
    });
  }
  return pointers;
}

/** The limb: a degree scale engraved into the metal mater, numbered every ten degrees. */
function Limb() {
  const ticks = useMemo(() => {
    const lines: string[] = [];
    for (let deg = 0; deg < 360; deg += 1) {
      const length = deg % 10 === 0 ? 20 : deg % 5 === 0 ? 13 : 7;
      const a = polar(484, deg);
      const b = polar(484 - length, deg);
      lines.push(`M${a.x.toFixed(1)} ${a.y.toFixed(1)}L${b.x.toFixed(1)} ${b.y.toFixed(1)}`);
    }
    return lines.join("");
  }, []);

  return (
    <g>
      <circle cx={C} cy={C} fill="url(#ah-metal)" r={496} stroke="#1f252e" strokeWidth={2} />
      <circle cx={C} cy={C} fill="none" r={486} stroke="#1f252e" strokeOpacity={0.6} strokeWidth={1} />
      <path d={ticks} stroke="#1a1f27" strokeWidth={1.4} />
      {Array.from({ length: 36 }, (_, i) => i * 10).map((deg) => {
        const p = polar(446, deg);
        return (
          <text
            className="astrolabe__numeral"
            dominantBaseline="central"
            fontSize={17}
            key={deg}
            textAnchor="middle"
            transform={`rotate(${deg + 90} ${p.x} ${p.y})`}
            x={p.x}
            y={p.y}
          >
            {(deg + 90) % 360}
          </text>
        );
      })}
      <circle cx={C} cy={C} fill="none" r={430} stroke="#1a1f27" strokeWidth={3} />
    </g>
  );
}

/** The plate: obsidian, engraved with the four maturity rings and the hour lines. */
function Plate() {
  return (
    <g>
      <circle cx={C} cy={C} fill="url(#ah-plate)" r={428} />
      {Array.from({ length: 12 }, (_, i) => i * 30).map((deg) => {
        const a = polar(110, deg);
        const b = polar(428, deg);
        return <line key={deg} stroke="var(--accent)" strokeOpacity={0.12} strokeWidth={1} x1={a.x} x2={b.x} y1={a.y} y2={b.y} />;
      })}
      <line stroke="var(--accent)" strokeOpacity={0.28} x1={C - 428} x2={C + 428} y1={C} y2={C} />
      <line stroke="var(--accent)" strokeOpacity={0.28} x1={C} x2={C} y1={C - 428} y2={C + 428} />
      {([4, 3, 2, 1] as MaturityLevel[]).map((level) => (
        <g key={level}>
          <circle cx={C} cy={C} fill="none" r={ringRadius[level]} stroke="var(--accent)" strokeOpacity={0.42} strokeWidth={1.2} />
          <circle cx={C} cy={C} fill="none" r={ringRadius[level] + 6} stroke="var(--accent)" strokeOpacity={0.14} strokeWidth={1} />
          <text className="astrolabe__ring-label" fontSize={15} textAnchor="middle" x={C + 16} y={C - ringRadius[level] - 10}>
            {roman[level]}
          </text>
        </g>
      ))}
    </g>
  );
}

export function ArtifactAstrolabe({ artifacts }: ArtifactAstrolabeProps) {
  const { locale } = useLocale();
  const router = useRouter();
  const pointers = useMemo(() => buildPointers(artifacts), [artifacts]);
  // A click pins a project; hovering only previews it and falls back to the pinned one on leave.
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const activeId = hoverId ?? selectedId;
  const [isDragging, setIsDragging] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const reteRef = useRef<SVGGElement>(null);
  const alidadeRef = useRef<SVGGElement>(null);
  const labelLayerRef = useRef<SVGGElement>(null);
  const labelRefs = useRef<(SVGGElement | null)[]>([]);

  const motion = useRef({
    rete: -18,
    velocity: 0,
    alidade: -40,
    target: -40,
    reduce: false,
    active: null as Pointer | null,
    resting: null as Pointer | null,
    drag: null as null | { pointerId: number; last: number; lastTime: number; travel: number },
    suppressClick: false
  });

  const activePointer = pointers.find((pointer) => pointer.artifact.id === activeId) ?? null;
  // With nothing under the cursor the alidade rests on the most mature project and the readout names it.
  const restingPointer = useMemo(
    () => pointers.reduce<Pointer | null>((best, pointer) => (!best || pointer.maturity > best.maturity ? pointer : best), null),
    [pointers]
  );
  const shownPointer = activePointer ?? restingPointer;
  motion.current.active = activePointer;
  motion.current.resting = restingPointer;

  const angleAt = useCallback((clientX: number, clientY: number) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return 0;
    return (Math.atan2(clientY - (rect.top + rect.height / 2), clientX - (rect.left + rect.width / 2)) * 180) / Math.PI;
  }, []);

  useEffect(() => {
    const m = motion.current;
    m.reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let last = performance.now();
    let visible = true;

    const apply = () => {
      const rete = `rotate(${m.rete.toFixed(3)} ${C} ${C})`;
      reteRef.current?.setAttribute("transform", rete);
      labelLayerRef.current?.setAttribute("transform", rete);
      alidadeRef.current?.setAttribute("transform", `rotate(${m.alidade.toFixed(3)} ${C} ${C})`);
      pointers.forEach((pointer, index) => {
        const node = labelRefs.current[index];
        if (!node) return;
        const p = polar(pointer.radius, pointer.angle);
        node.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${(-m.rete).toFixed(3)})`);
      });
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!m.drag) {
        const drift = m.reduce || m.active ? 0 : 2.2;
        m.velocity *= Math.exp(-dt * 2.4);
        if (Math.abs(m.velocity) < 0.05) m.velocity = 0;
        m.rete += (m.velocity + drift) * dt;
      }
      const sighted = m.active ?? m.resting;
      if (sighted) m.target = sighted.angle + m.rete + 90;
      const delta = wrap(m.target - m.alidade);
      m.alidade += m.reduce ? delta : delta * (1 - Math.exp(-dt * 7));
      apply();
      if (visible) frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      const nowVisible = entry?.isIntersecting ?? true;
      if (nowVisible && !visible) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
      visible = nowVisible;
    });
    if (rootRef.current) observer.observe(rootRef.current);

    // Scrolling the page turns the rete a little, so the instrument answers the reader.
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const dy = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      if (!m.reduce) m.velocity += dy * 0.6;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    apply();
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pointers]);

  const onPointerDown = (event: PointerEvent<SVGSVGElement>) => {
    if (event.button !== 0) return;
    const m = motion.current;
    m.drag = { pointerId: event.pointerId, last: angleAt(event.clientX, event.clientY), lastTime: performance.now(), travel: 0 };
    m.velocity = 0;
    m.suppressClick = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<SVGSVGElement>) => {
    const m = motion.current;
    if (!m.drag || m.drag.pointerId !== event.pointerId) return;
    const angle = angleAt(event.clientX, event.clientY);
    const delta = wrap(angle - m.drag.last);
    const now = performance.now();
    const dt = Math.max(0.008, (now - m.drag.lastTime) / 1000);
    m.rete += delta;
    m.velocity = m.velocity * 0.6 + (delta / dt) * 0.4;
    m.drag.last = angle;
    m.drag.lastTime = now;
    m.drag.travel += Math.abs(delta);
    if (m.drag.travel > 4 && !m.suppressClick) {
      m.suppressClick = true;
      setIsDragging(true);
    }
  };

  const endDrag = (event: PointerEvent<SVGSVGElement>) => {
    const m = motion.current;
    if (!m.drag || m.drag.pointerId !== event.pointerId) return;
    if (m.reduce) m.velocity = 0;
    m.velocity = Math.max(-420, Math.min(420, m.velocity));
    m.drag = null;
    setIsDragging(false);
  };

  const openPointer = (pointer: Pointer) => {
    if (motion.current.suppressClick) return;
    // First click pins the project in the readout; clicking the pinned one again opens it.
    if (selectedId !== pointer.artifact.id) {
      setSelectedId(pointer.artifact.id);
      return;
    }
    router.push(`/artifacts/${pointer.artifact.slug}/`);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setSelectedId(null);
      return;
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      motion.current.velocity += event.key === "ArrowRight" ? 90 : -90;
    }
  };

  const category = shownPointer ? getCategoryById(shownPointer.artifact.categoryId) : undefined;

  return (
    <div className="flex flex-col gap-5" ref={rootRef}>
      <div className={`astrolabe ${isDragging ? "is-dragging" : ""}`} onKeyDown={onKeyDown}>
        <svg
          aria-label={locale === "tr" ? "Projeler usturlabı: sürükleyerek çevir, bir işarete gelip seç" : "Project astrolabe: drag to turn, pick a pointer"}
          onPointerCancel={endDrag}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          ref={svgRef}
          role="group"
          viewBox="-20 -40 1040 1060"
        >
          <defs>
            <radialGradient cx="38%" cy="30%" id="ah-metal" r="80%">
              <stop offset="0" stopColor="#a9b4c4" />
              <stop offset="0.45" stopColor="#6b7688" />
              <stop offset="1" stopColor="#2f3743" />
            </radialGradient>
            <radialGradient cx="45%" cy="40%" id="ah-plate" r="70%">
              <stop offset="0" stopColor="#141922" />
              <stop offset="1" stopColor="#080a0e" />
            </radialGradient>
            <linearGradient id="ah-rete" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#dce3ee" />
              <stop offset="0.5" stopColor="#98a4b6" />
              <stop offset="1" stopColor="#596477" />
            </linearGradient>
            <filter height="140%" id="ah-shadow" width="140%" x="-20%" y="-20%">
              <feDropShadow dx="0" dy="7" floodColor="#000" floodOpacity="0.65" stdDeviation="6" />
            </filter>
          </defs>

          {/* Throne and shackle ring */}
          <circle cx={C} cy={-6} fill="none" r={24} stroke="url(#ah-rete)" strokeWidth={9} />
          <path d={`M${C - 46} 18 Q${C} -24 ${C + 46} 18 L${C + 30} 40 L${C - 30} 40Z`} fill="url(#ah-metal)" stroke="#1f252e" strokeWidth={2} />

          <Limb />
          <Plate />

          {/* The rete: openwork that turns over the plate and carries the project pointers. */}
          <g filter="url(#ah-shadow)" ref={reteRef} transform={`rotate(-18 ${C} ${C})`}>
            <circle cx={C} cy={C} fill="none" r={408} stroke="url(#ah-rete)" strokeWidth={7} />
            <circle cx={C} cy={C} fill="none" r={400} stroke="#1f252e" strokeOpacity={0.6} strokeWidth={1} />
            <circle cx={C} cy={C - 64} fill="none" r={262} stroke="url(#ah-rete)" strokeWidth={5} />
            <circle cx={C} cy={C - 64} fill="none" r={248} stroke="url(#ah-rete)" strokeOpacity={0.55} strokeWidth={1.5} />
            {[45, 135, 225, 315].map((deg) => {
              const a = polar(46, deg);
              const b = polar(404, deg);
              return <line key={deg} stroke="url(#ah-rete)" strokeLinecap="round" strokeWidth={4} x1={a.x} x2={b.x} y1={a.y} y2={b.y} />;
            })}
            <circle cx={C} cy={C} fill="none" r={46} stroke="url(#ah-rete)" strokeWidth={6} />

            {pointers.map((pointer) => {
              const p = polar(pointer.radius, pointer.angle);
              const size = pointerSize[pointer.maturity];
              const isActive = pointer.artifact.id === activeId;
              const isSelected = pointer.artifact.id === selectedId;
              const status = getStatusById(pointer.artifact.statusId);
              return (
                <g
                  aria-label={`${pointer.artifact.title}, ${status ? getLocalizedText(status.label, locale) : ""}`}
                  className={`astrolabe__pointer ${isActive ? "is-active" : ""} ${isSelected ? "is-selected" : ""}`}
                  key={pointer.artifact.id}
                  aria-pressed={pointer.artifact.id === selectedId}
                  onClick={() => openPointer(pointer)}
                  onFocus={() => setSelectedId(pointer.artifact.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      router.push(`/artifacts/${pointer.artifact.slug}/`);
                    }
                  }}
                  onPointerEnter={(event) => event.pointerType === "mouse" && !motion.current.drag && setHoverId(pointer.artifact.id)}
                  onPointerLeave={(event) => event.pointerType === "mouse" && setHoverId(null)}
                  role="button"
                  tabIndex={0}
                  transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${pointer.angle + 90})`}
                >
                  <circle fill="transparent" r={size.length * 0.75} />
                  {isSelected ? <circle className="astrolabe__pin" fill="none" r={size.length * 0.62} stroke="var(--accent-bright)" strokeWidth={2} /> : null}
                  <circle className="astrolabe__focus" fill="none" r={size.length * 0.62} stroke="var(--accent-bright)" strokeDasharray="4 4" strokeWidth={1.5} />
                  <g className="astrolabe__pointer-shape">
                    <path
                      d={`M0 ${size.star} L${size.width / 2} ${size.length * 0.72} Q0 ${size.length * 1.05} ${-size.width / 2} ${size.length * 0.72} Z`}
                      fill="url(#ah-rete)"
                      stroke="#1f252e"
                      strokeWidth={1}
                    />
                    <circle fill={pointerColor[pointer.maturity]} r={size.star} stroke="#0b0e13" strokeWidth={2} />
                  </g>
                </g>
              );
            })}
          </g>

          {/* The alidade: a sighting rule that swings to whichever project you are reading. */}
          <g filter="url(#ah-shadow)" pointerEvents="none" ref={alidadeRef} transform={`rotate(-40 ${C} ${C})`}>
            <path d={`M${C} 92 L${C + 11} 150 L${C + 11} 850 L${C} 908 L${C - 11} 850 L${C - 11} 150Z`} fill="url(#ah-rete)" fillOpacity={0.92} stroke="#1f252e" strokeWidth={1.2} />
            <line stroke="#1f252e" strokeOpacity={0.8} strokeWidth={1} x1={C} x2={C} y1={100} y2={900} />
            <rect fill="url(#ah-metal)" height={10} rx={2} stroke="#1f252e" width={34} x={C - 17} y={196} />
            <rect fill="url(#ah-metal)" height={10} rx={2} stroke="#1f252e" width={34} x={C - 17} y={794} />
          </g>
          {/* Labels ride with their pointers but stay upright. */}
          <g aria-hidden="true">
            <g ref={labelLayerRef} transform={`rotate(-18 ${C} ${C})`}>
              {pointers.map((pointer, index) => (
                <g
                  key={pointer.artifact.id}
                  ref={(node) => {
                    labelRefs.current[index] = node;
                  }}
                >
                  <text
                    className={`astrolabe__label ${pointer.maturity >= 3 || pointer.artifact.id === shownPointer?.artifact.id ? "" : "astrolabe__label--quiet"}`}
                    fontSize={pointer.maturity >= 3 ? 24 : 21}
                    fontWeight={pointer.artifact.id === shownPointer?.artifact.id ? 700 : 500}
                    x={pointerSize[pointer.maturity].star + 10}
                    y={-pointerSize[pointer.maturity].star - 6}
                  >
                    {pointer.artifact.title}
                  </text>
                </g>
              ))}
            </g>
          </g>

          <circle cx={C} cy={C} fill="url(#ah-metal)" pointerEvents="none" r={20} stroke="#1f252e" strokeWidth={2} />
          <circle cx={C} cy={C} fill="#1a1f27" pointerEvents="none" r={6} />
        </svg>
      </div>

      <div aria-live="polite" className="readout px-6 py-5">
        {shownPointer ? (
          <div className="readout__body" key={shownPointer.artifact.id}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h3 className="text-[1.75rem] text-[var(--accent-bright)]">{shownPointer.artifact.title}</h3>
              <StatusBadge statusId={shownPointer.artifact.statusId} variant="subtle" />
              {selectedId === shownPointer.artifact.id ? (
                <button
                  className="ml-auto rounded-md px-2 py-1 text-[13px] text-[var(--theme-text-muted)] transition-colors hover:text-[var(--theme-text-primary)]"
                  onClick={() => setSelectedId(null)}
                  type="button"
                >
                  {locale === "tr" ? "Seçimi bırak" : "Unpin"} ×
                </button>
              ) : null}
            </div>
            <p className="mt-1 text-[14px] text-[var(--theme-text-muted)]">
              {shownPointer.inventory}
              {category ? ` · ${getLocalizedText(category.label, locale)}` : ""}
            </p>
            <p className="mt-3 line-clamp-2 text-[15.5px] leading-relaxed text-[var(--theme-text-secondary)]">
              {getLocalizedText(shownPointer.artifact.summary, locale)}
            </p>
            <Link className="link-engraved mt-3 inline-block text-[15px] font-medium text-[var(--accent)]" href={`/artifacts/${shownPointer.artifact.slug}/`}>
              {getUiText("viewArtifact", locale)}
            </Link>
          </div>
        ) : null}
        <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--theme-text-muted)]">
          {getLocalizedText(homePageText.orbitHint, locale)}
        </p>
      </div>
    </div>
  );
}
