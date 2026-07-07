"use client";

import { useMemo, useState } from "react";
import { ArtifactFilterBar } from "@/components/artifacts/ArtifactFilterBar";
import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { EmptyState } from "@/components/ui/EmptyState";
import { filterArtifactsByArchiveFilter, type ArchiveFilterId } from "@/data/archiveFilters";
import { getUiText } from "@/data/uiText";
import type { Artifact } from "@/types/artifact";

type ArtifactArchiveProps = {
  artifacts: Artifact[];
};

export function ArtifactArchive({ artifacts }: ArtifactArchiveProps) {
  const { locale } = useLocale();
  const [activeFilterId, setActiveFilterId] = useState<ArchiveFilterId>("all");
  const filteredArtifacts = useMemo(
    () => filterArtifactsByArchiveFilter(artifacts, activeFilterId),
    [activeFilterId, artifacts]
  );

  return (
    <section className="min-w-0 border-b border-[color:var(--theme-border)] py-8">
      <div className="flex flex-col gap-4">
        <ArtifactFilterBar activeFilterId={activeFilterId} onFilterChange={setActiveFilterId} />
        <p aria-live="polite" className="text-sm text-[var(--theme-text-muted)]">
          {filteredArtifacts.length} {getUiText(filteredArtifacts.length === 1 ? "artifactListedSingular" : "artifactListedPlural", locale)}
        </p>
      </div>

      <div className="mt-6">
        {filteredArtifacts.length ? (
          <ArtifactGrid artifacts={filteredArtifacts} showRepoLink showSeriesBadge showTransformation />
        ) : (
          <EmptyState description={getUiText("changeFilter", locale)} />
        )}
      </div>
    </section>
  );
}
