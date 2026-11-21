"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackPointer } from "@/components/artifacts/ArtifactCard";
import { TechStackList } from "@/components/artifacts/TechStackList";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ThemeSymbol } from "@/components/visual/ThemeSymbol";
import { getUiText, type UiTextKey } from "@/data/uiText";
import { getLocalizedText } from "@/lib/i18n";
import type { Artifact, Series } from "@/types/artifact";

type SeriesCardVariant = "default" | "wide";

type SeriesCardProps = {
  series: Series;
  artifacts: Artifact[];
  actionLabel?: ReactNode;
  actionLabelKey?: UiTextKey;
  variant?: SeriesCardVariant;
};

export function SeriesCard({
  series,
  artifacts,
  actionLabel,
  actionLabelKey,
  variant = "default"
}: SeriesCardProps) {
  const { locale } = useLocale();
  const resolvedActionLabel = actionLabel ?? (actionLabelKey ? getUiText(actionLabelKey, locale) : getUiText("viewSeries", locale));

  return (
    <article
      className={`glass card-interactive min-w-0 overflow-hidden p-6 sm:p-10 ${variant === "wide" ? "md:col-span-2" : ""}`}
      onMouseMove={trackPointer}
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex min-w-0 gap-4">
          <ThemeSymbol themeId={series.themeId} size="lg" />
          <div>
            <h2 className="text-[2rem] text-[var(--theme-text-primary)] sm:text-[2.4rem]">
              {series.title}
            </h2>
            <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">{getLocalizedText(series.summary, locale)}</p>
          </div>
        </div>
        <ButtonLink href={`/series/${series.slug}`} variant="secondary">
          {resolvedActionLabel}
        </ButtonLink>
      </div>

      {series.techTags?.length ? (
        <div className="mt-5">
          <TechStackList items={series.techTags} variant="compact" />
        </div>
      ) : null}

      {artifacts.length ? (
        <div className="mt-6 border-t border-[color:var(--hairline)] pt-5">
          <p className="inscription text-[11px] text-[var(--theme-text-muted)]">{getUiText("connectedArtifacts", locale)}</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {artifacts.map((artifact) => (
              <li key={artifact.id}>
                <Link
                  className="chip relative z-10 px-3 py-1.5 text-[14px] transition-colors hover:border-[color:color-mix(in_srgb,var(--theme-accent-primary)_45%,transparent)] hover:text-[var(--theme-text-primary)]"
                  href={`/artifacts/${artifact.slug}`}
                >
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
