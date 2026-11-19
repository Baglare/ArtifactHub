"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { TechStackList } from "@/components/artifacts/TechStackList";
import { TransformationFlow } from "@/components/content/TransformationFlow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ThemeSymbol } from "@/components/visual/ThemeSymbol";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getUiText } from "@/data/uiText";
import { getLocalizedText } from "@/lib/i18n";
import { getSeriesById } from "@/lib/series";
import { getThemeCssVariables } from "@/lib/themes";
import type { Artifact } from "@/types/artifact";

export type ArtifactCardVariant = "default" | "featured" | "spotlight" | "compact" | "series";

type ArtifactCardProps = {
  artifact: Artifact;
  variant?: ArtifactCardVariant;
  showTransformation?: boolean;
  showRepoLink?: boolean;
  showSeriesBadge?: boolean;
  className?: string;
};

const variantClasses: Record<ArtifactCardVariant, string> = {
  default: "p-6",
  featured: "p-7",
  spotlight: "p-7 sm:p-10",
  compact: "p-5",
  series: "p-6"
};

export function trackPointer(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export function ArtifactCard({
  artifact,
  variant = "default",
  showTransformation = false,
  showRepoLink = false,
  showSeriesBadge = false,
  className
}: ArtifactCardProps) {
  const { locale } = useLocale();
  const themeStyle = getThemeCssVariables(artifact.themeId);
  const series = artifact.seriesId ? getSeriesById(artifact.seriesId) : undefined;
  const isSpotlight = variant === "spotlight";
  const isFeatured = variant === "featured" || isSpotlight;
  const techLimit = variant === "compact" ? 3 : isSpotlight ? 7 : 5;

  return (
    <article
      className={`glass card-interactive group flex h-full min-w-0 flex-col overflow-hidden ${variantClasses[variant]} ${className ?? ""}`}
      onMouseMove={trackPointer}
      style={themeStyle}
    >
      <span aria-hidden="true" className="accent-line" />
      {isFeatured ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
          style={{ background: "radial-gradient(circle, var(--theme-accent-primary), transparent 65%)" }}
        />
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <ThemeSymbol size={variant === "compact" ? "sm" : isSpotlight ? "lg" : "md"} themeId={artifact.themeId} />
        <div className="flex flex-wrap justify-end gap-2">
          {isFeatured ? (
            <span className="chip border-[color:color-mix(in_srgb,var(--theme-accent-primary)_40%,transparent)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] !text-[var(--theme-accent-primary)]">
              ★ {getUiText("featured", locale)}
            </span>
          ) : null}
          <StatusBadge statusId={artifact.statusId} variant="subtle" />
        </div>
      </div>

      <div className="mt-6 min-w-0">
        {showSeriesBadge && series ? <p className="eyebrow mb-2 !text-[var(--theme-text-muted)]">{series.title}</p> : null}
        <h3
          className={`font-semibold tracking-tight text-[var(--theme-text-primary)] ${
            isSpotlight ? "text-3xl sm:text-5xl" : isFeatured ? "text-2xl sm:text-[1.7rem]" : "text-xl"
          }`}
        >
          <Link className="after:absolute after:inset-0 after:content-['']" href={`/artifacts/${artifact.slug}`}>
            {artifact.title}
          </Link>
        </h3>
        <p
          className={`mt-3 leading-relaxed text-[var(--theme-text-secondary)] ${
            isSpotlight ? "max-w-2xl text-base sm:text-lg" : "text-sm"
          }`}
        >
          {getLocalizedText(artifact.summary, locale)}
        </p>
      </div>

      <div className="mt-5">
        <TechStackList items={artifact.techStack} limit={techLimit} variant="compact" />
      </div>

      {showTransformation && artifact.transformation ? (
        <div className="mt-5 border-t border-[color:var(--hairline)] pt-4">
          <TransformationFlow transformation={artifact.transformation} variant="mini" />
        </div>
      ) : null}

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
        <span className="inline-flex items-center gap-1.5 font-medium text-[var(--theme-text-primary)]">
          {getUiText("viewArtifact", locale)}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
        {artifact.demoUrl ? (
          <a
            className="relative z-10 text-[var(--theme-accent-primary)] transition-colors hover:text-[var(--theme-text-primary)]"
            href={artifact.demoUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {getUiText("liveDemo", locale)} ↗
          </a>
        ) : null}
        {showRepoLink && artifact.repoUrl ? (
          <a
            className="relative z-10 text-[var(--theme-text-secondary)] transition-colors hover:text-[var(--theme-text-primary)]"
            href={artifact.repoUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
