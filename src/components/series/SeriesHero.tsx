import { TechStackList } from "@/components/artifacts/TechStackList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ThemeSymbol } from "@/components/visual/ThemeSymbol";
import { getThemeOrDefault } from "@/lib/themes";
import type { Series } from "@/types/artifact";

type SeriesHeroProps = {
  series: Series;
};

export function SeriesHero({ series }: SeriesHeroProps) {
  const theme = getThemeOrDefault(series.themeId);

  return (
    <section className="border-b border-[color:var(--theme-border)] py-8">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="text-sm text-[var(--theme-text-muted)]">Artifact serisi</p>
          <h1 className="mt-3 text-4xl font-semibold text-[var(--theme-text-primary)] md:text-5xl">{series.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-[var(--theme-text-secondary)]">{series.summary.tr}</p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--theme-text-muted)]">{series.positioning.tr}</p>

          {series.techTags?.length ? (
            <div className="mt-6">
              <TechStackList items={series.techTags} />
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/artifacts">Artifactleri Gör</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Ana Sayfa
            </ButtonLink>
          </div>
        </div>

        <aside className="border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-6">
          <div className="flex items-start gap-4">
            <ThemeSymbol themeId={series.themeId} size="lg" />
            <div>
              <p className="text-sm text-[var(--theme-text-muted)]">Seri teması</p>
              <p className="mt-1 text-lg font-medium text-[var(--theme-text-primary)]">{theme.name}</p>
              {theme.tone ? <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">{theme.tone.tr}</p> : null}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
