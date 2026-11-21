"use client";

import { getStatusById } from "@/lib/statuses";
import { getThemeCssVariables } from "@/lib/themes";
import { getLocalizedText } from "@/lib/i18n";
import type { MaturityLevel, StatusId, ThemeId } from "@/types/artifact";
import { useLocale } from "@/components/i18n/LocaleProvider";

type StatusBadgeVariant = "default" | "subtle";

type StatusBadgeProps = {
  statusId: StatusId;
  themeId?: ThemeId;
  variant?: StatusBadgeVariant;
};

const ringNumeral: Record<MaturityLevel, string> = { 1: "I", 2: "II", 3: "III", 4: "IV" };

/** The astrolabe ring the project sits on (I outer/early … IV centre/live); growing work in verdigris. */
export function MaturityTicks({ level }: { level: MaturityLevel }) {
  return (
    <span aria-hidden="true" className="maturity-ring" data-level={level}>
      {ringNumeral[level]}
    </span>
  );
}

export function StatusBadge({ statusId, themeId, variant = "default" }: StatusBadgeProps) {
  const { locale } = useLocale();
  const status = getStatusById(statusId);
  const themeStyle = themeId ? getThemeCssVariables(themeId) : undefined;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-[4px] border px-2.5 py-1 text-[13px] leading-none ${
        variant === "default"
          ? "border-[color:var(--hairline-strong)] text-[var(--theme-text-primary)]"
          : "border-[color:var(--hairline)] text-[var(--theme-text-secondary)]"
      }`}
      style={themeStyle}
    >
      <MaturityTicks level={status?.maturity ?? 1} />
      {status ? getLocalizedText(status.label, locale) : "Prototip"}
    </span>
  );
}
