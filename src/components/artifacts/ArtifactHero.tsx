"use client";

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

  return (
    <section className="border-b border-[color:var(--theme-border)] py-8">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge statusId={artifact.statusId} />
            {series ? (
              <ButtonLink href={`/series/${series.slug}`} variant="ghost">
                {series.title}
              </ButtonLink>
            ) : null}
          </div>

          <h1 className="mt-4 text-4xl font-semibold text-[var(--theme-text-primary)] md:text-5xl">{artifact.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-[var(--theme-text-secondary)]">{getLocalizedText(artifact.summary, locale)}</p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--theme-text-muted)]">{getLocalizedText(artifact.positioning, locale)}</p>

          <div className="mt-6">
            <TechStackList items={artifact.techStack} />
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {artifact.repoUrl ? (
              <ButtonLink external href={artifact.repoUrl} labelKey="openOnGithub" />
            ) : null}
            <ButtonLink href="/artifacts" labelKey="backToArchive" variant="secondary" />
          </div>
        </div>

        <aside className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-4 sm:p-6">
          <div className="flex items-start gap-4">
            <ThemeSymbol themeId={artifact.themeId} size="lg" />
            <div>
              <p className="text-sm text-[var(--theme-text-muted)]">{getUiText("theme", locale)}</p>
              <p className="mt-1 text-lg font-medium text-[var(--theme-text-primary)]">{theme.name}</p>
              {theme.tone ? <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">{getLocalizedText(theme.tone, locale)}</p> : null}
            </div>
          </div>

          {artifact.transformation ? (
            <div className="mt-6 border-t border-[color:var(--theme-border)] pt-5">
              <p className="mb-2 text-sm font-medium text-[var(--theme-text-primary)]">{getUiText("systemFlow", locale)}</p>
              <TransformationFlow transformation={artifact.transformation} variant="mini" />
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
