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
  const series = artifact.seriesId ? getSeriesById(artifact.seriesId) : undefined;
  const isSpotlight = variant === "spotlight";
  const isFeatured = variant === "featured" || isSpotlight;
  const techLimit = variant === "compact" ? 3 : isSpotlight ? 7 : 5;

  return (
    <article
      className={`glass card-interactive group flex h-full min-w-0 flex-col overflow-hidden ${variantClasses[variant]} ${className ?? ""}`}
    >

      <div className="mt-2 flex items-start justify-between gap-4">
        <ThemeSymbol size={variant === "compact" ? "sm" : isSpotlight ? "lg" : "md"} themeId={artifact.themeId} />
        <div className="flex flex-wrap justify-end gap-2">
          <StatusBadge statusId={artifact.statusId} variant="subtle" />
        </div>
      </div>

      <div className="mt-6 min-w-0">
        <h3
          className={`text-[var(--theme-text-primary)] transition-colors duration-300 group-hover:text-[var(--brass-bright)] ${
            isSpotlight ? "text-[2rem] sm:text-5xl" : isFeatured ? "text-[1.65rem] sm:text-[1.9rem]" : "text-[1.4rem]"
          }`}
        >
          <Link className="after:absolute after:inset-0 after:content-['']" href={`/artifacts/${artifact.slug}`}>
            {artifact.title}
          </Link>
        </h3>
        <p
          className={`mt-3 leading-relaxed text-[var(--theme-text-secondary)] ${
            isSpotlight ? "max-w-2xl text-[17px] sm:text-lg" : "text-[15.5px]"
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
        <span className="inline-flex items-center gap-2 font-medium text-[var(--brass)]">
          {getUiText("viewArtifact", locale)}
          <svg aria-hidden="true" className="h-3 w-4 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" viewBox="0 0 16 12">
            <path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </svg>
        </span>
        {artifact.demoUrl ? (
          <a
            className="relative z-10 text-[var(--theme-accent-primary)] transition-colors hover:text-[var(--theme-text-primary)]"
            href={artifact.demoUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {getUiText("liveDemo", locale)}
          </a>
        ) : null}
        {showRepoLink && artifact.repoUrl ? (
          <a
            className="relative z-10 text-[var(--theme-text-secondary)] transition-colors hover:text-[var(--theme-text-primary)]"
            href={artifact.repoUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
