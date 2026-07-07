"use client";

import { useMemo, useState } from "react";
import { ArtifactFilterBar } from "@/components/artifacts/ArtifactFilterBar";
import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { filterArtifactsByArchiveFilter, type ArchiveFilterId } from "@/data/archiveFilters";
import type { Artifact } from "@/types/artifact";

type ArtifactArchiveProps = {
  artifacts: Artifact[];
};

export function ArtifactArchive({ artifacts }: ArtifactArchiveProps) {
  const [activeFilterId, setActiveFilterId] = useState<ArchiveFilterId>("all");
  const filteredArtifacts = useMemo(
    () => filterArtifactsByArchiveFilter(artifacts, activeFilterId),
    [activeFilterId, artifacts]
  );

  return (
    <section className="border-b border-[color:var(--theme-border)] py-8">
      <div className="flex flex-col gap-4">
        <ArtifactFilterBar activeFilterId={activeFilterId} onFilterChange={setActiveFilterId} />
        <p className="text-sm text-[var(--theme-text-muted)]">{filteredArtifacts.length} artifact listeleniyor.</p>
      </div>

      <div className="mt-6">
        {filteredArtifacts.length ? (
          <ArtifactGrid artifacts={filteredArtifacts} showRepoLink showSeriesBadge showTransformation />
        ) : (
          <EmptyState
            description="Filtreyi değiştirerek diğer artifactleri görüntüleyebilirsin."
            title="Bu arşiv rafında henüz artifact yok."
          />
        )}
      </div>
    </section>
  );
}
