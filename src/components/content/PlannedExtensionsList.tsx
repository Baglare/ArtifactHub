"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";
import type { LocalizedText } from "@/types/artifact";

type PlannedExtensionsListProps = {
  plannedExtensions: LocalizedText[];
  variant?: "default" | "compact";
};

export function PlannedExtensionsList({ plannedExtensions, variant = "default" }: PlannedExtensionsListProps) {
  const { locale } = useLocale();

  if (!plannedExtensions.length) {
    return null;
  }

  return (
    <ul className={variant === "compact" ? "space-y-1 text-sm text-[var(--theme-text-secondary)]" : "list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]"}>
      {plannedExtensions.map((plannedExtension) => (
        <li key={plannedExtension.tr}>{getLocalizedText(plannedExtension, locale)}</li>
      ))}
    </ul>
  );
}
