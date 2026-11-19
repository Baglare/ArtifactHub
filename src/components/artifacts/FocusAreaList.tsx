"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { getFocusAreaById } from "@/lib/focusAreas";
import { getLocalizedText } from "@/lib/i18n";
import type { FocusArea, FocusAreaId } from "@/types/artifact";

type FocusAreaListProps = {
  focusAreaIds: FocusAreaId[];
  variant?: "default" | "compact";
};

export function FocusAreaList({ focusAreaIds, variant = "default" }: FocusAreaListProps) {
  const { locale } = useLocale();
  const focusAreas = focusAreaIds
    .map((focusAreaId) => getFocusAreaById(focusAreaId))
    .filter((focusArea): focusArea is FocusArea => Boolean(focusArea));

  if (!focusAreas.length) {
    return null;
  }

  return (
    <ul className="flex min-w-0 flex-wrap gap-2">
      {focusAreas.map((focusArea) => (
        <li
          className={`chip ${variant === "compact" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs"}`}
          key={focusArea.id}
        >
          {getLocalizedText(focusArea.label, locale)}
        </li>
      ))}
    </ul>
  );
}
