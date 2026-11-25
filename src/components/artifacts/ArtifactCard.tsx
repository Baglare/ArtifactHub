"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { TechStackList } from "@/components/artifacts/TechStackList";
import { TransformationFlow } from "@/components/content/TransformationFlow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArtifactCover } from "@/components/media/ArtifactCover";
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
  default: "p-6 sm:p-7",
  featured: "p-7 sm:p-8",
  spotlight: "p-7 sm:p-10 lg:p-12",
  compact: "p-6",
  series: "p-6 sm:p-7"
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
  const techLimit = isSpotlight ? 4 : 3;

  const showCover = variant !== "compact";
  const tryLabel = artifact.demo ? <span className="demo-tag">{locale === "tr" ? "Sitede dene" : "Try it here"}</span> : null;

  return (
    <article
      className={`glass card-interactive group flex h-full min-w-0 overflow-hidden ${
        isSpotlight ? "flex-col lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]" : "flex-col"
      } ${className ?? ""}`}
    >
      {showCover ? (
        <ArtifactCover
          artifact={artifact}
          className={isSpotlight ? "aspect-[16/10] lg:order-2 lg:aspect-auto lg:min-h-[340px]" : `${isFeatured ? "aspect-[5/2]" : "aspect-[2/1]"} border-b border-[color:var(--hairline)]`}
          priority={isSpotlight}
        />
      ) : null}

      <div className={`flex min-w-0 flex-1 flex-col ${variantClasses[variant]}`}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <StatusBadge statusId={artifact.statusId} variant="subtle" />
          {tryLabel}
        </div>

        <h3
          className={`mt-5 text-[var(--theme-text-primary)] transition-colors duration-300 group-hover:text-[var(--accent-bright)] ${
            isSpotlight ? "text-[2.2rem] sm:text-[2.8rem]" : isFeatured ? "text-[1.6rem] sm:text-[1.75rem]" : "text-[1.35rem]"
          }`}
        >
          <Link className="after:absolute after:inset-0 after:content-['']" href={`/artifacts/${artifact.slug}`}>
            {artifact.title}
          </Link>
        </h3>
        <p
          className={`mt-3 leading-relaxed text-[var(--theme-text-secondary)] ${
            isSpotlight ? "max-w-xl text-[17px]" : "line-clamp-3 text-[15.5px]"
          }`}
        >
          {getLocalizedText(artifact.summary, locale)}
        </p>

        {variant !== "compact" ? (
          <div className="mt-5">
            <TechStackList items={artifact.techStack} limit={techLimit} variant="compact" />
          </div>
        ) : null}

        {showTransformation && artifact.transformation && !isSpotlight ? (
          <div className="mt-5 border-t border-[color:var(--hairline)] pt-4">
            <TransformationFlow transformation={artifact.transformation} variant="mini" />
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-7 text-[14.5px]">
          <span className="inline-flex items-center gap-2 font-medium text-[var(--accent)]">
            {getUiText("viewArtifact", locale)}
            <svg aria-hidden="true" className="h-3 w-4 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" viewBox="0 0 16 12">
              <path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            </svg>
          </span>
          {artifact.demoUrl ? (
            <a
              className="relative z-10 text-[var(--theme-text-secondary)] transition-colors hover:text-[var(--theme-text-primary)]"
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
      </div>
    </article>
  );
}
