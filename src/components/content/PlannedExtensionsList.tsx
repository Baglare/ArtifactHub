import type { LocalizedText } from "@/types/artifact";

type PlannedExtensionsListProps = {
  plannedExtensions: LocalizedText[];
  variant?: "default" | "compact";
};

export function PlannedExtensionsList({ plannedExtensions, variant = "default" }: PlannedExtensionsListProps) {
  if (!plannedExtensions.length) {
    return null;
  }

  return (
    <ul className={variant === "compact" ? "space-y-1 text-sm text-[var(--theme-text-secondary)]" : "list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]"}>
      {plannedExtensions.map((plannedExtension) => (
        <li key={plannedExtension.tr}>{plannedExtension.tr}</li>
      ))}
    </ul>
  );
}
