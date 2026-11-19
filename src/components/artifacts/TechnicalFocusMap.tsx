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
        <section className="glass-soft min-w-0 p-6 transition-colors hover:border-[color:var(--hairline-strong)]" key={group.focusArea.id}>
          <h3 className="text-lg font-semibold text-[var(--theme-text-primary)]">{getLocalizedText(group.focusArea.label, locale)}</h3>
          {group.focusArea.description ? (
            <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">
              {getLocalizedText(group.focusArea.description, locale)}
            </p>
          ) : null}

          {group.artifacts.length ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.artifacts.map((artifact) => (
                <li key={artifact.id}>
                  <Link
                    className="chip relative z-10 px-3 py-1.5 text-xs transition-colors hover:border-[color:color-mix(in_srgb,var(--theme-accent-primary)_45%,transparent)] hover:text-[var(--theme-text-primary)]"
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
