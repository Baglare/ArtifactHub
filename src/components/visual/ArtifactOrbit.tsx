"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";
import { getStatusById } from "@/lib/statuses";
import { getThemeOrDefault } from "@/lib/themes";
import type { Artifact, MaturityLevel } from "@/types/artifact";

type ArtifactOrbitProps = {
  artifacts: Artifact[];
};

type OrbitBody = {
  artifact: Artifact;
  maturity: MaturityLevel;
  color: string;
  radius: number;
  phase: number;
  speed: number;
};

/** Orbit radius (as % of the container half-size) and angular speed per maturity level. Mature work sits closest to the core. */
const ringByMaturity: Record<MaturityLevel, { radius: number; period: number }> = {
  4: { radius: 30, period: 70 },
  3: { radius: 47, period: 95 },
  2: { radius: 64, period: 125 },
  1: { radius: 82, period: 160 }
};

const bodySize: Record<MaturityLevel, number> = { 4: 22, 3: 16, 2: 10, 1: 6 };

const hexPoints = "12,2.5 20.2,7.25 20.2,16.75 12,21.5 3.8,16.75 3.8,7.25";

/** Energy source glyph: spark + bloom for every artifact, a hex crystal for growing work, light rays for live work. */
function EnergyGlyph({ maturity }: { maturity: MaturityLevel }) {
  return (
    <span aria-hidden="true" className="orbit__planet">
      <span className="orbit__bloom" />
      {maturity === 4 ? (
        <svg className="orbit__rays" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="0.35" viewBox="0 0 24 24">
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <line key={angle} transform={`rotate(${angle} 12 12)`} x1="12" x2="12" y1="1" y2="23" />
          ))}
        </svg>
      ) : null}
      {maturity >= 3 ? (
        <svg className="orbit__crystal" fill="none" stroke="currentColor" strokeLinejoin="round" viewBox="0 0 24 24">
          <polygon fill="currentColor" fillOpacity={maturity === 4 ? 0.22 : 0.14} points={hexPoints} strokeWidth={maturity === 4 ? 1.6 : 1.3} />
          {maturity === 4 ? <polygon points={hexPoints} strokeOpacity="0.5" strokeWidth="0.8" transform="rotate(30 12 12) scale(0.62) translate(7.35 7.35)" /> : null}
        </svg>
      ) : null}
      <span className="orbit__spark" />
    </span>
  );
}

function buildBodies(artifacts: Artifact[]): OrbitBody[] {
  const groups = new Map<MaturityLevel, Artifact[]>();
  for (const artifact of artifacts) {
    const maturity = getStatusById(artifact.statusId)?.maturity ?? 1;
    groups.set(maturity, [...(groups.get(maturity) ?? []), artifact]);
  }

  const bodies: OrbitBody[] = [];
  for (const [maturity, members] of groups) {
    const ring = ringByMaturity[maturity];
    // Each ring starts at a different offset so the rings do not line up.
    const ringOffset = maturity * 0.9;
    members.forEach((artifact, index) => {
      bodies.push({
        artifact,
        maturity,
        color: getThemeOrDefault(artifact.themeId).colors.accentPrimary,
        radius: ring.radius,
        phase: ringOffset + (index / members.length) * Math.PI * 2,
        speed: ((Math.PI * 2) / ring.period) * (maturity % 2 === 0 ? 1 : -1)
      });
    });
  }
  return bodies;
}

export function ArtifactOrbit({ artifacts }: ArtifactOrbitProps) {
  const { locale } = useLocale();
  const bodies = useMemo(() => buildBodies(artifacts), [artifacts]);
  const nodeRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pausedRef = useRef(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const usedRings = useMemo(() => Array.from(new Set(bodies.map((body) => body.radius))), [bodies]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let elapsed = 0;
    let last = performance.now();
    let frame = 0;

    const place = () => {
      bodies.forEach((body, index) => {
        const node = nodeRefs.current[index];
        if (!node) return;
        const angle = body.phase + body.speed * elapsed;
        const x = 50 + (Math.cos(angle) * body.radius) / 2;
        const y = 50 + (Math.sin(angle) * body.radius) / 2;
        node.style.left = `${x}%`;
        node.style.top = `${y}%`;
      });
    };

    const tick = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      if (!pausedRef.current) elapsed += delta;
      place();
      frame = requestAnimationFrame(tick);
    };

    place();
    if (!reduceMotion) frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [bodies]);

  const setActive = (id: string | null) => {
    pausedRef.current = id !== null;
    setActiveId(id);
  };

  return (
    <div className="orbit" onMouseLeave={() => setActive(null)}>
      {usedRings.map((radius) => (
        <span aria-hidden="true" className="orbit__ring" key={radius} style={{ inset: `${50 - radius / 2}%` }} />
      ))}

      <div aria-hidden="true" className="orbit__core">
        <div className="orbit__core-glow" />
        <div className="orbit__core-disc">
          <Image
            alt=""
            className="h-full w-full scale-[1.7] object-cover mix-blend-screen"
            height={220}
            priority
            src="/images/artifacthub-relic-core.png"
            width={220}
          />
        </div>
      </div>

      {bodies.map((body, index) => {
        const status = getStatusById(body.artifact.statusId);
        const isActive = activeId === body.artifact.id;
        const size = bodySize[body.maturity];

        return (
          <Link
            aria-label={`${body.artifact.title} · ${status ? getLocalizedText(status.label, locale) : ""}`}
            className={`orbit__body orbit__body--m${body.maturity} ${isActive ? "is-active" : ""}`}
            href={`/artifacts/${body.artifact.slug}/`}
            key={body.artifact.id}
            onBlur={() => setActive(null)}
            onFocus={() => setActive(body.artifact.id)}
            onMouseEnter={() => setActive(body.artifact.id)}
            ref={(node) => {
              nodeRefs.current[index] = node;
            }}
            style={{ ["--body-color" as string]: body.color, ["--body-size" as string]: `${size}px`, ["--pulse-delay" as string]: `${-(index * 0.7)}s` }}
          >
            <EnergyGlyph maturity={body.maturity} />
            <span className="orbit__label" role="tooltip">
              <span className="block font-medium text-[var(--theme-text-primary)]">{body.artifact.title}</span>
              {status ? <span className="mt-0.5 block text-[11px] text-[var(--theme-text-muted)]">{getLocalizedText(status.label, locale)}</span> : null}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
