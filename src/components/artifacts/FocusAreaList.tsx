import { getFocusAreaById } from "@/lib/focusAreas";
import type { FocusArea, FocusAreaId } from "@/types/artifact";

type FocusAreaListProps = {
  focusAreaIds: FocusAreaId[];
  variant?: "default" | "compact";
};

export function FocusAreaList({ focusAreaIds, variant = "default" }: FocusAreaListProps) {
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
          className={`border border-[color:var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] ${
            variant === "compact" ? "px-2 py-0.5 text-xs" : "px-2 py-1 text-sm"
          }`}
          key={focusArea.id}
        >
          {focusArea.label.tr}
        </li>
      ))}
    </ul>
  );
}
