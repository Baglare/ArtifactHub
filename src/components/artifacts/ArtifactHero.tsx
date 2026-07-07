import { TechStackList } from "@/components/artifacts/TechStackList";
import { TransformationFlow } from "@/components/content/TransformationFlow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ThemeSymbol } from "@/components/visual/ThemeSymbol";
import { getSeriesById } from "@/lib/series";
import { getThemeOrDefault } from "@/lib/themes";
import type { Artifact } from "@/types/artifact";

type ArtifactHeroProps = {
  artifact: Artifact;
};

export function ArtifactHero({ artifact }: ArtifactHeroProps) {
  const series = artifact.seriesId ? getSeriesById(artifact.seriesId) : undefined;
  const theme = getThemeOrDefault(artifact.themeId);

  return (
    <section className="border-b border-[color:var(--theme-border)] py-8">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge statusId={artifact.statusId} />
            {series ? (
              <ButtonLink href={`/series/${series.slug}`} variant="ghost">
                {series.title}
              </ButtonLink>
            ) : null}
          </div>

          <h1 className="mt-4 text-4xl font-semibold text-[var(--theme-text-primary)] md:text-5xl">{artifact.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-[var(--theme-text-secondary)]">{artifact.summary.tr}</p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--theme-text-muted)]">{artifact.positioning.tr}</p>

          <div className="mt-6">
            <TechStackList items={artifact.techStack} />
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {artifact.repoUrl ? (
              <ButtonLink external href={artifact.repoUrl}>
                GitHub’da Aç
              </ButtonLink>
            ) : null}
            <ButtonLink href="/artifacts" variant="secondary">
              Arşive Dön
            </ButtonLink>
          </div>
        </div>

        <aside className="border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-6">
          <div className="flex items-start gap-4">
            <ThemeSymbol themeId={artifact.themeId} size="lg" />
            <div>
              <p className="text-sm text-[var(--theme-text-muted)]">Tema</p>
              <p className="mt-1 text-lg font-medium text-[var(--theme-text-primary)]">{theme.name}</p>
              {theme.tone ? <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">{theme.tone.tr}</p> : null}
            </div>
          </div>

          {artifact.transformation ? (
            <div className="mt-6 border-t border-[color:var(--theme-border)] pt-5">
              <p className="mb-2 text-sm font-medium text-[var(--theme-text-primary)]">Sistem akışı</p>
              <TransformationFlow transformation={artifact.transformation} variant="mini" />
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
