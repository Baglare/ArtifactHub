"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { ThemeSymbol } from "@/components/visual/ThemeSymbol";
import { getLocalizedText } from "@/lib/i18n";
import { getArtifactCover } from "@/lib/media";
import { getThemeOrDefault } from "@/lib/themes";
import type { Artifact } from "@/types/artifact";

type ArtifactCoverProps = {
  artifact: Artifact;
  className?: string;
  /** Eager-load covers above the fold. */
  priority?: boolean;
};

function hash(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i += 1) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}

/**
 * The project's picture: a real image from `artifact.media` when there is one,
 * otherwise a generated abstract plate in the project's own theme colours (never a fake screenshot).
 */
export function ArtifactCover({ artifact, className = "", priority = false }: ArtifactCoverProps) {
  const { locale } = useLocale();
  const cover = getArtifactCover(artifact);

  if (cover) {
    return (
      <div className={`cover relative overflow-hidden bg-[var(--ink-high)] ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={getLocalizedText(cover.alt, locale)}
          className="h-full w-full object-cover"
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          src={cover.src}
          style={{ objectPosition: cover.focus ?? "50% 50%" }}
        />
      </div>
    );
  }

  const theme = getThemeOrDefault(artifact.themeId);
  const seed = hash(artifact.slug);
  const a = theme.colors.accentPrimary;
  const b = theme.colors.accentSecondary;
  const rings = 3 + (seed % 3);
  const cx = 30 + (seed % 40);
  const cy = 30 + ((seed >> 5) % 40);
  const tilt = (seed >> 9) % 180;
  const id = `cv-${artifact.slug}`;

  return (
    <div aria-hidden="true" className={`cover relative overflow-hidden ${className}`} style={{ background: theme.colors.background }}>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 60">
        <defs>
          <radialGradient cx={`${cx}%`} cy={`${cy}%`} id={`${id}-g`} r="75%">
            <stop offset="0" stopColor={a} stopOpacity="0.34" />
            <stop offset="0.55" stopColor={b} stopOpacity="0.08" />
            <stop offset="1" stopColor={theme.colors.background} stopOpacity="0" />
          </radialGradient>
          <pattern height="4" id={`${id}-p`} patternTransform={`rotate(${tilt})`} patternUnits="userSpaceOnUse" width="4">
            <circle cx="1" cy="1" fill={a} fillOpacity="0.16" r="0.35" />
          </pattern>
        </defs>
        <rect fill={`url(#${id}-p)`} height="60" width="100" />
        <rect fill={`url(#${id}-g)`} height="60" width="100" />
        {Array.from({ length: rings }, (_, i) => (
          <circle
            cx={cx}
            cy={cy * 0.6}
            fill="none"
            key={i}
            r={10 + i * 9}
            stroke={i % 2 ? b : a}
            strokeDasharray={i % 2 ? "0.6 1.6" : undefined}
            strokeOpacity={0.32 - i * 0.04}
            strokeWidth={0.25}
          />
        ))}
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <ThemeSymbol size="lg" themeId={artifact.themeId} />
      </div>
    </div>
  );
}
