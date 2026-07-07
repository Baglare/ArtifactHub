"use client";

import { archiveFilters, type ArchiveFilterId } from "@/data/archiveFilters";
import { getUiText } from "@/data/uiText";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";

type ArtifactFilterBarProps = {
  activeFilterId: ArchiveFilterId;
  onFilterChange: (filterId: ArchiveFilterId) => void;
};

export function ArtifactFilterBar({ activeFilterId, onFilterChange }: ArtifactFilterBarProps) {
  const { locale } = useLocale();

  return (
    <div aria-label={getUiText("archiveFilters", locale)} className="flex flex-wrap gap-2" role="group">
      {archiveFilters.map((filter) => {
        const isActive = filter.id === activeFilterId;

        return (
          <button
            aria-pressed={isActive}
            className={`min-w-0 border px-3 py-2 text-sm leading-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)] ${
              isActive
                ? "border-[color:var(--theme-accent-primary)] bg-[var(--theme-accent-primary)] font-semibold text-[var(--theme-background)]"
                : "border-[color:var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]"
            }`}
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            type="button"
          >
            {getLocalizedText(filter.label, locale)}
          </button>
        );
      })}
    </div>
  );
}
