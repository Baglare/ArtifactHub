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
    <dl className="border-t border-[color:var(--hairline-strong)]">
      {groups.map((group) => (
        <div
          className="ledger-row grid gap-x-8 gap-y-2 border-b border-[color:var(--hairline)] px-1 py-5 sm:px-3 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_minmax(0,1fr)] md:items-baseline"
          key={group.focusArea.id}
        >
          <dt className="font-[family-name:var(--font-display)] text-[1.35rem] leading-tight text-[var(--fg)]">
            {getLocalizedText(group.focusArea.label, locale)}
          </dt>
          <dd className="text-[15.5px] leading-relaxed text-[var(--theme-text-secondary)]">
            {group.focusArea.description ? getLocalizedText(group.focusArea.description, locale) : null}
          </dd>
          <dd>
            {group.artifacts.length ? (
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {group.artifacts.map((artifact) => (
                  <li key={artifact.id}>
                    <Link className="link-engraved text-[15.5px] text-[var(--accent)] hover:text-[var(--accent-bright)]" href={`/artifacts/${artifact.slug}/`}>
                      {artifact.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
