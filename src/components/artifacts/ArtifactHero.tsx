"use client";

import Link from "next/link";
import { TechStackList } from "@/components/artifacts/TechStackList";
import { TransformationFlow } from "@/components/content/TransformationFlow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ThemeSymbol } from "@/components/visual/ThemeSymbol";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getUiText } from "@/data/uiText";
import { getLocalizedText } from "@/lib/i18n";
import { getSeriesById } from "@/lib/series";
import { getThemeOrDefault } from "@/lib/themes";
import type { Artifact } from "@/types/artifact";

type ArtifactHeroProps = {
  artifact: Artifact;
};

export function ArtifactHero({ artifact }: ArtifactHeroProps) {
  const { locale } = useLocale();
  const series = artifact.seriesId ? getSeriesById(artifact.seriesId) : undefined;
  const theme = getThemeOrDefault(artifact.themeId);
  const isFeatured = artifact.featuredLevel === "primary";

  return (
    <section className="pb-12 pt-4 sm:pb-16">
      <Link
        className="reveal inline-flex items-center gap-2 text-sm text-[var(--theme-text-muted)] transition-colors hover:text-[var(--theme-text-primary)]"
        href="/artifacts"
      >
        <span aria-hidden="true">←</span>
        {getUiText("backToArchive", locale)}
      </Link>

      <div className="mt-8 grid min-w-0 gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div className="min-w-0">
          <div className="reveal flex flex-wrap items-center gap-2">
            <StatusBadge statusId={artifact.statusId} />
            {isFeatured ? (
              <span className="chip px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] !text-[var(--theme-accent-primary)]">
                ★ {getUiText("featured", locale)}
              </span>
            ) : null}
            {series ? (
              <Link className="chip px-2.5 py-1 text-[11px] transition-colors hover:text-[var(--theme-text-primary)]" href={`/series/${series.slug}`}>
                {series.title}
              </Link>
            ) : null}
          </div>

          <h1 className="display reveal reveal-delay-1 mt-6 text-5xl text-[var(--theme-text-primary)] sm:text-7xl lg:text-8xl">
            {artifact.title}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-3xl text-lg leading-relaxed text-[var(--theme-text-secondary)] sm:text-xl">
            {getLocalizedText(artifact.summary, locale)}
          </p>
          <p className="reveal reveal-delay-2 mt-4 max-w-3xl text-sm text-[var(--theme-text-muted)]">
            <span className="serif-accent text-base text-[var(--theme-accent-primary)]">{getUiText("role", locale)} — </span>
            {getLocalizedText(artifact.positioning, locale)}
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            {artifact.demoUrl ? <ButtonLink external href={artifact.demoUrl} labelKey="liveDemo" /> : null}
            {artifact.repoUrl ? (
              <ButtonLink external href={artifact.repoUrl} labelKey="openOnGithub" variant={artifact.demoUrl ? "secondary" : "primary"} />
            ) : (
              <span className="chip px-4 py-2.5 text-sm">🔒 {getUiText("privateRepository", locale)}</span>
            )}
          </div>
        </div>

        <aside className="glass reveal reveal-delay-2 min-w-0 overflow-hidden p-6">
          <span aria-hidden="true" className="accent-line" />
          <div className="flex items-center gap-4">
            <ThemeSymbol size="lg" themeId={artifact.themeId} />
            <div className="min-w-0">
              <p className="eyebrow !text-[var(--theme-text-muted)]">{getUiText("theme", locale)}</p>
              <p className="mt-1 text-lg font-medium text-[var(--theme-text-primary)]">{theme.name}</p>
            </div>
          </div>
          {theme.tone ? <p className="mt-4 text-sm leading-relaxed text-[var(--theme-text-secondary)]">{getLocalizedText(theme.tone, locale)}</p> : null}

          <div className="mt-5">
            <TechStackList items={artifact.techStack} variant="compact" />
          </div>

          {artifact.transformation ? (
            <div className="mt-5 border-t border-[color:var(--hairline)] pt-4">
              <p className="eyebrow mb-2 !text-[var(--theme-text-muted)]">{getUiText("systemFlow", locale)}</p>
              <TransformationFlow transformation={artifact.transformation} variant="mini" />
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
