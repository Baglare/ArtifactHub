"use client";

import Link from "next/link";
import { TechStackList } from "@/components/artifacts/TechStackList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArtifactCover } from "@/components/media/ArtifactCover";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getUiText } from "@/data/uiText";
import { getLocalizedText } from "@/lib/i18n";
import { getSeriesById } from "@/lib/series";
import type { Artifact } from "@/types/artifact";

type ArtifactHeroProps = {
  artifact: Artifact;
};

export function ArtifactHero({ artifact }: ArtifactHeroProps) {
  const { locale } = useLocale();
  const series = artifact.seriesId ? getSeriesById(artifact.seriesId) : undefined;
  const isFeatured = artifact.featuredLevel === "primary";

  return (
    <section className="pb-12 pt-4 sm:pb-16">
      <Link
        className="reveal inline-flex items-center gap-2 text-sm text-[var(--theme-text-muted)] transition-colors hover:text-[var(--theme-text-primary)]"
        href="/artifacts"
      >
        <svg aria-hidden="true" className="h-3 w-4" fill="none" viewBox="0 0 16 12"><path d="M15 6H2M6.5 1.5 2 6l4.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" /></svg>
        {getUiText("backToArchive", locale)}
      </Link>

      <div className="mt-8 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <div className="reveal flex flex-wrap items-center gap-2">
            <StatusBadge statusId={artifact.statusId} />
            {isFeatured ? <span className="chip inscription px-2.5 py-1 text-[11px] !text-[var(--accent)]">{getUiText("featured", locale)}</span> : null}
            {series ? (
              <Link className="chip px-2.5 py-1 text-[11px] transition-colors hover:text-[var(--theme-text-primary)]" href={`/series/${series.slug}`}>
                {series.title}
              </Link>
            ) : null}
          </div>

          <h1 className="display reveal reveal-delay-1 mt-6 text-[3rem] text-[var(--theme-text-primary)] sm:text-7xl lg:text-[5.5rem]">
            {artifact.title}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-3xl text-lg leading-relaxed text-[var(--theme-text-secondary)] sm:text-xl">
            {getLocalizedText(artifact.summary, locale)}
          </p>
          <p className="reveal reveal-delay-2 mt-4 max-w-3xl text-sm text-[var(--theme-text-muted)]">
            <span className="serif-accent text-base text-[var(--accent)]">{getUiText("role", locale)} — </span>
            {getLocalizedText(artifact.positioning, locale)}
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            {artifact.demo ? <ButtonLink href="#demo">{locale === "tr" ? "Burada dene" : "Try it here"}</ButtonLink> : null}
            {artifact.demoUrl ? <ButtonLink external href={artifact.demoUrl} labelKey="liveDemo" variant={artifact.demo ? "secondary" : "primary"} /> : null}
            {artifact.repoUrl ? (
              <ButtonLink external href={artifact.repoUrl} labelKey="openOnGithub" variant={artifact.demoUrl || artifact.demo ? "secondary" : "primary"} />
            ) : (
              <span className="chip gap-2 px-4 py-2.5 text-[15px]">
                <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 14 14">
                  <rect height="6.5" rx="1" stroke="currentColor" strokeWidth="1.2" width="9" x="2.5" y="6" />
                  <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                {getUiText("privateRepository", locale)}
              </span>
            )}
          </div>
        </div>

        <div className="reveal reveal-delay-2 min-w-0">
          <ArtifactCover artifact={artifact} className="aspect-[4/3] rounded-[16px] border border-[color:var(--hairline-strong)]" priority />
          <div className="mt-5">
            <TechStackList items={artifact.techStack} limit={6} variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
