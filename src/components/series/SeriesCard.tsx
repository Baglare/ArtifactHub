import Link from "next/link";
import { TechStackList } from "@/components/artifacts/TechStackList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ThemeSymbol } from "@/components/visual/ThemeSymbol";
import { getThemeCssVariables } from "@/lib/themes";
import type { Artifact, Series } from "@/types/artifact";

type SeriesCardVariant = "default" | "wide";

type SeriesCardProps = {
  series: Series;
  artifacts: Artifact[];
  actionLabel?: string;
  variant?: SeriesCardVariant;
};

export function SeriesCard({
  series,
  artifacts,
  actionLabel = "Seriyi İncele",
  variant = "default"
}: SeriesCardProps) {
  const themeStyle = getThemeCssVariables(series.themeId);

  return (
    <article
      className={`border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-6 ${
        variant === "wide" ? "md:col-span-2" : ""
      }`}
      style={themeStyle}
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-4">
          <ThemeSymbol themeId={series.themeId} size="lg" />
          <div>
            <p className="text-sm text-[var(--theme-text-muted)]">Seri</p>
            <h2 className="mt-1 text-2xl font-semibold text-[var(--theme-text-primary)]">{series.title}</h2>
            <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">{series.summary.tr}</p>
          </div>
        </div>
        <ButtonLink href={`/series/${series.slug}`} variant="secondary">
          {actionLabel}
        </ButtonLink>
      </div>

      {series.techTags?.length ? (
        <div className="mt-5">
          <TechStackList items={series.techTags} variant="compact" />
        </div>
      ) : null}

      {artifacts.length ? (
        <div className="mt-5 border-t border-[color:var(--theme-border)] pt-4">
          <p className="text-sm font-medium text-[var(--theme-text-primary)]">Bağlı artifactler</p>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm text-[var(--theme-text-secondary)]">
            {artifacts.map((artifact) => (
              <li key={artifact.id}>
                <Link className="underline underline-offset-4 hover:text-[var(--theme-text-primary)]" href={`/artifacts/${artifact.slug}`}>
                  {artifact.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
