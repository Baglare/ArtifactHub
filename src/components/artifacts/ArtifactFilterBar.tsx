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
            className={`min-w-0 rounded-[4px] border px-3.5 py-2 text-[15px] leading-tight transition-colors duration-300 ${
              isActive
                ? "border-[color:var(--accent)] bg-[var(--accent)] text-[var(--ink)]"
                : "border-[color:var(--hairline-strong)] text-[var(--theme-text-secondary)] hover:border-[color:var(--accent)] hover:text-[var(--accent-bright)]"
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
