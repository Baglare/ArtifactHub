"use client";

import { archiveFilters, type ArchiveFilterId } from "@/data/archiveFilters";

type ArtifactFilterBarProps = {
  activeFilterId: ArchiveFilterId;
  onFilterChange: (filterId: ArchiveFilterId) => void;
};

export function ArtifactFilterBar({ activeFilterId, onFilterChange }: ArtifactFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {archiveFilters.map((filter) => {
        const isActive = filter.id === activeFilterId;

        return (
          <button
            className={`border px-3 py-2 text-sm transition-colors ${
              isActive
                ? "border-[color:var(--theme-accent-primary)] bg-[var(--theme-accent-primary)] text-[var(--theme-background)]"
                : "border-[color:var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]"
            }`}
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            type="button"
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
