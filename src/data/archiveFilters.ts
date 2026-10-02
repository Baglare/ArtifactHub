import type { Artifact, CategoryId, FocusAreaId, LocalizedText, SeriesId } from "@/types/artifact";

export type ArchiveFilterId =
  | "all"
  | "developer-tooling"
  | "ai-infrastructure"
  | "localization-engineering"
  | "desktop-applications"
  | "game-systems"
  | "web-applications"
  | "forge-series"
  | "audio"
  | "voice"
  | "computer-vision"
  | "local-first";

type ArchiveFilter = {
  id: ArchiveFilterId;
  label: LocalizedText;
};

export const archiveFilters: ArchiveFilter[] = [
  { id: "all", label: { tr: "Tümü", en: "All" } },
  { id: "developer-tooling", label: { tr: "Geliştirici Araçları", en: "Developer Tooling" } },
  { id: "ai-infrastructure", label: { tr: "AI Altyapısı", en: "AI Infrastructure" } },
  { id: "localization-engineering", label: { tr: "Yerelleştirme Mühendisliği", en: "Localization Engineering" } },
  { id: "desktop-applications", label: { tr: "Masaüstü Uygulamaları", en: "Desktop Applications" } },
  { id: "game-systems", label: { tr: "Oyun Sistemleri", en: "Game Systems" } },
  { id: "web-applications", label: { tr: "Web Uygulamaları", en: "Web Applications" } },
  { id: "forge-series", label: { tr: "Forge Series", en: "Forge Series" } },
  { id: "audio", label: { tr: "Audio", en: "Audio" } },
  { id: "voice", label: { tr: "Voice", en: "Voice" } },
  { id: "computer-vision", label: { tr: "Computer Vision", en: "Computer Vision" } },
  { id: "local-first", label: { tr: "Local-first", en: "Local-first" } }
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
    case "developer-tooling":
      return artifacts.filter((artifact) => hasCategory(artifact, "developer-tooling"));
    case "ai-infrastructure":
      return artifacts.filter((artifact) => hasCategory(artifact, "ai-infrastructure"));
    case "localization-engineering":
      return artifacts.filter((artifact) => hasFocusArea(artifact, "localization-tooling"));
    case "desktop-applications":
      return artifacts.filter((artifact) => hasCategory(artifact, "desktop-applications") || hasFocusArea(artifact, "desktop-architecture"));
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
