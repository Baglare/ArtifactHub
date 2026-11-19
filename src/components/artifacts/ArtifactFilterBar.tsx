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
    <div aria-label={getUiText("archiveFilters", locale)} className="glass flex flex-wrap gap-1.5 !rounded-[1.75rem] p-2" role="group">
      {archiveFilters.map((filter) => {
        const isActive = filter.id === activeFilterId;

        return (
          <button
            aria-pressed={isActive}
            className={`min-w-0 rounded-full px-4 py-2 text-sm leading-tight transition-all duration-300 ${
              isActive
                ? "bg-[var(--theme-text-primary)] font-medium text-[#0b0b12] shadow-[0_8px_24px_-12px_rgba(255,255,255,0.5)]"
                : "text-[var(--theme-text-secondary)] hover:bg-white/[0.06] hover:text-[var(--theme-text-primary)]"
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
