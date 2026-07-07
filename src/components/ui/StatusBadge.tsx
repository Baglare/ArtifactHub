"use client";

import { getStatusById } from "@/lib/statuses";
import { getThemeCssVariables } from "@/lib/themes";
import { getLocalizedText } from "@/lib/i18n";
import type { StatusId, ThemeId } from "@/types/artifact";
import { useLocale } from "@/components/i18n/LocaleProvider";

type StatusBadgeVariant = "default" | "subtle";

type StatusBadgeProps = {
  statusId: StatusId;
  themeId?: ThemeId;
  variant?: StatusBadgeVariant;
};

const variantClasses: Record<StatusBadgeVariant, string> = {
  default: "border-[color:var(--theme-accent-primary)] text-[var(--theme-text-primary)]",
  subtle: "border-[color:var(--theme-border)] text-[var(--theme-text-secondary)]"
};

export function StatusBadge({ statusId, themeId, variant = "default" }: StatusBadgeProps) {
  const { locale } = useLocale();
  const status = getStatusById(statusId);
  const themeStyle = themeId ? getThemeCssVariables(themeId) : undefined;

  return (
    <span
      className={`inline-flex items-center border bg-[var(--theme-surface)] px-2 py-1 text-xs font-medium ${variantClasses[variant]}`}
      style={themeStyle}
    >
      {status ? getLocalizedText(status.label, locale) : "Prototip"}
    </span>
  );
}
