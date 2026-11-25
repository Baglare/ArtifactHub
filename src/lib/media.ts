import type { Artifact, MediaItem } from "@/types/artifact";

/** Images to show in an artifact's gallery, in registry order. */
export function getArtifactImages(artifact: Artifact): MediaItem[] {
  return (artifact.media ?? []).filter((item) => item.type === "image");
}

/** The cover image: the first image flagged `cover`, else the first image, else none (a generated cover is drawn). */
export function getArtifactCover(artifact: Artifact): MediaItem | undefined {
  const images = getArtifactImages(artifact);
  return images.find((item) => item.cover) ?? images[0];
}
