import { getStatusById } from "@/lib/statuses";
import { getThemeCssVariables } from "@/lib/themes";
import type { StatusId, ThemeId } from "@/types/artifact";

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
  const status = getStatusById(statusId);
  const themeStyle = themeId ? getThemeCssVariables(themeId) : undefined;

  return (
    <span
      className={`inline-flex items-center border bg-[var(--theme-surface)] px-2 py-1 text-xs font-medium ${variantClasses[variant]}`}
      style={themeStyle}
    >
      {status?.label.tr ?? "Prototip"}
    </span>
  );
}
