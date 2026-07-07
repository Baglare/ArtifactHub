import type { Artifact, CategoryId, FocusAreaId, SeriesId } from "@/types/artifact";

export type ArchiveFilterId =
  | "all"
  | "game-systems"
  | "web-applications"
  | "forge-series"
  | "audio"
  | "voice"
  | "computer-vision"
  | "local-first";

type ArchiveFilter = {
  id: ArchiveFilterId;
  label: string;
};

export const archiveFilters: ArchiveFilter[] = [
  { id: "all", label: "Tümü" },
  { id: "game-systems", label: "Oyun Sistemleri" },
  { id: "web-applications", label: "Web Uygulamaları" },
  { id: "forge-series", label: "Forge Series" },
  { id: "audio", label: "Audio" },
  { id: "voice", label: "Voice" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "local-first", label: "Local-first" }
];

function hasCategory(artifact: Artifact, categoryId: CategoryId): boolean {
  return artifact.categoryId === categoryId;
}

function hasFocusArea(artifact: Artifact, focusAreaId: FocusAreaId): boolean {
  return artifact.focusAreaIds.includes(focusAreaId);
}

function hasSeries(artifact: Artifact, seriesId: SeriesId): boolean {
  return artifact.seriesId === seriesId;
}

export function filterArtifactsByArchiveFilter(artifacts: Artifact[], filterId: ArchiveFilterId): Artifact[] {
  switch (filterId) {
    case "all":
      return artifacts;
    case "game-systems":
      return artifacts.filter((artifact) => hasCategory(artifact, "game-systems") || hasFocusArea(artifact, "gameplay-systems"));
    case "web-applications":
      return artifacts.filter((artifact) => hasCategory(artifact, "web-application"));
    case "forge-series":
      return artifacts.filter((artifact) => hasSeries(artifact, "forge"));
    case "audio":
      return artifacts.filter((artifact) => hasFocusArea(artifact, "audio-processing"));
    case "voice":
      return artifacts.filter((artifact) => hasFocusArea(artifact, "voice-tools"));
    case "computer-vision":
      return artifacts.filter((artifact) => hasFocusArea(artifact, "computer-vision"));
    case "local-first":
      return artifacts.filter(
        (artifact) => hasFocusArea(artifact, "local-first-apps") || hasFocusArea(artifact, "local-first-labs")
      );
  }
}
