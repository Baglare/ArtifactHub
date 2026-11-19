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
  default:
    "border-[color:color-mix(in_srgb,var(--theme-accent-primary)_45%,transparent)] bg-[color:color-mix(in_srgb,var(--theme-accent-primary)_12%,transparent)] text-[var(--theme-text-primary)]",
  subtle: "border-[color:var(--hairline-strong)] bg-white/[0.03] text-[var(--theme-text-secondary)]"
};

export function StatusBadge({ statusId, themeId, variant = "default" }: StatusBadgeProps) {
  const { locale } = useLocale();
  const status = getStatusById(statusId);
  const themeStyle = themeId ? getThemeCssVariables(themeId) : undefined;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide ${variantClasses[variant]}`}
      style={themeStyle}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full bg-[var(--theme-accent-primary)] ${
          status?.id === "live-product" ? "animate-pulse shadow-[0_0_10px_var(--theme-accent-primary)]" : "opacity-80"
        }`}
      />
      {status ? getLocalizedText(status.label, locale) : "Prototip"}
    </span>
  );
}
