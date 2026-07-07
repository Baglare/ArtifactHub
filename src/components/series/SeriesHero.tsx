"use client";

import { TechStackList } from "@/components/artifacts/TechStackList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ThemeSymbol } from "@/components/visual/ThemeSymbol";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getUiText } from "@/data/uiText";
import { getLocalizedText } from "@/lib/i18n";
import { getThemeOrDefault } from "@/lib/themes";
import type { Series } from "@/types/artifact";

type SeriesHeroProps = {
  series: Series;
};

export function SeriesHero({ series }: SeriesHeroProps) {
  const { locale } = useLocale();
  const theme = getThemeOrDefault(series.themeId);

  return (
    <section className="border-b border-[color:var(--theme-border)] py-8">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="min-w-0">
          <p className="text-sm text-[var(--theme-text-muted)]">{getUiText("artifactSeries", locale)}</p>
          <h1 className="mt-3 text-4xl font-semibold text-[var(--theme-text-primary)] md:text-5xl">{series.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-[var(--theme-text-secondary)]">{getLocalizedText(series.summary, locale)}</p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--theme-text-muted)]">{getLocalizedText(series.positioning, locale)}</p>

          {series.techTags?.length ? (
            <div className="mt-6">
              <TechStackList items={series.techTags} />
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/artifacts" labelKey="artifactArchive" />
            <ButtonLink href="/" labelKey="home" variant="secondary" />
          </div>
        </div>

        <aside className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-4 sm:p-6">
          <div className="flex items-start gap-4">
            <ThemeSymbol themeId={series.themeId} size="lg" />
            <div>
              <p className="text-sm text-[var(--theme-text-muted)]">{getUiText("seriesTheme", locale)}</p>
              <p className="mt-1 text-lg font-medium text-[var(--theme-text-primary)]">{theme.name}</p>
              {theme.tone ? <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">{getLocalizedText(theme.tone, locale)}</p> : null}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
