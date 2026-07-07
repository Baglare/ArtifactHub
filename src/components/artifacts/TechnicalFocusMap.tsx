"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getFocusAreaById } from "@/lib/focusAreas";
import { getLocalizedText } from "@/lib/i18n";
import type { Artifact, FocusArea, FocusAreaId } from "@/types/artifact";

type TechnicalFocusMapProps = {
  artifacts: Artifact[];
  focusAreaIds: FocusAreaId[];
};

type FocusAreaGroup = {
  focusArea: FocusArea;
  artifacts: Artifact[];
};

export function TechnicalFocusMap({ artifacts, focusAreaIds }: TechnicalFocusMapProps) {
  const { locale } = useLocale();
  const groups: FocusAreaGroup[] = focusAreaIds
    .map((focusAreaId) => {
      const focusArea = getFocusAreaById(focusAreaId);
      if (!focusArea) {
        return undefined;
      }

      return {
        focusArea,
        artifacts: artifacts.filter((artifact) => artifact.focusAreaIds.includes(focusAreaId))
      };
    })
    .filter((group): group is FocusAreaGroup => Boolean(group));

  if (!groups.length) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((group) => (
        <section className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-4 sm:p-5" key={group.focusArea.id}>
          <h3 className="text-lg font-semibold text-[var(--theme-text-primary)]">{getLocalizedText(group.focusArea.label, locale)}</h3>
          {group.focusArea.description ? (
            <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">
              {getLocalizedText(group.focusArea.description, locale)}
            </p>
          ) : null}

          {group.artifacts.length ? (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--theme-text-secondary)]">
              {group.artifacts.map((artifact) => (
                <li key={artifact.id}>
                  <Link
                    className="underline underline-offset-4 hover:text-[var(--theme-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)]"
                    href={`/artifacts/${artifact.slug}`}
                  >
                    {artifact.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
