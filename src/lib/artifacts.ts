import { artifacts } from "@/data/artifacts";
import { categories } from "@/data/categories";
import { focusAreas } from "@/data/focusAreas";
import { series } from "@/data/series";
import { statuses } from "@/data/statuses";
import { themes } from "@/data/themes";
import type {
  Artifact,
  ArtifactId,
  ArtifactSlug,
  CategoryId,
  FeaturedLevel,
  FocusAreaId,
  SeriesId
} from "@/types/artifact";

type RegistryValidationResult = {
  valid: boolean;
  errors: string[];
};

function sortByOrder<T extends { order?: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
}

export function getAllArtifacts(): Artifact[] {
  return sortByOrder(artifacts);
}

export function getArtifactBySlug(slug: ArtifactSlug): Artifact | undefined {
  return artifacts.find((artifact) => artifact.slug === slug);
}

export function getArtifactById(id: ArtifactId): Artifact | undefined {
  return artifacts.find((artifact) => artifact.id === id);
}

export function getArtifactsBySeries(seriesId: SeriesId): Artifact[] {
  return sortByOrder(artifacts.filter((artifact) => artifact.seriesId === seriesId));
}

export function getFeaturedArtifacts(level?: FeaturedLevel): Artifact[] {
  const featuredArtifacts = artifacts.filter((artifact) => {
    if (level) {
      return artifact.featuredLevel === level;
    }

    return Boolean(artifact.featuredLevel);
  });

  return sortByOrder(featuredArtifacts);
}

export function getArtifactsForHome(): Artifact[] {
  return [...artifacts].sort((a, b) => {
    const aOrder = a.homeOrder ?? a.order ?? Number.MAX_SAFE_INTEGER;
    const bOrder = b.homeOrder ?? b.order ?? Number.MAX_SAFE_INTEGER;

    return aOrder - bOrder;
  });
}

export function getArtifactsByCategory(categoryId: CategoryId): Artifact[] {
  return sortByOrder(artifacts.filter((artifact) => artifact.categoryId === categoryId));
}

export function getArtifactsByFocusArea(focusAreaId: FocusAreaId): Artifact[] {
  return sortByOrder(artifacts.filter((artifact) => artifact.focusAreaIds.includes(focusAreaId)));
}

export function validateArtifactRegistry(): RegistryValidationResult {
  const errors: string[] = [];
  const artifactIds = new Set<ArtifactId>();
  const artifactSlugs = new Set<ArtifactSlug>();
  const categoryIds = new Set(categories.map((category) => category.id));
  const focusAreaIds = new Set(focusAreas.map((focusArea) => focusArea.id));
  const seriesIds = new Set(series.map((seriesItem) => seriesItem.id));
  const statusIds = new Set(statuses.map((status) => status.id));
  const themeIds = new Set(themes.map((theme) => theme.id));

  for (const artifact of artifacts) {
    if (!artifact.id) {
      errors.push(`Artifact is missing an id: ${artifact.title}`);
    }

    if (artifactIds.has(artifact.id)) {
      errors.push(`Duplicate artifact id: ${artifact.id}`);
    }
    artifactIds.add(artifact.id);

    if (artifactSlugs.has(artifact.slug)) {
      errors.push(`Duplicate artifact slug: ${artifact.slug}`);
    }
    artifactSlugs.add(artifact.slug);

    if (!artifact.title || !artifact.summary.tr || !artifact.positioning.tr) {
      errors.push(`Artifact is missing required text fields: ${artifact.id}`);
    }

    if (!statusIds.has(artifact.statusId)) {
      errors.push(`Artifact ${artifact.id} references an unknown status: ${artifact.statusId}`);
    }

    if (!categoryIds.has(artifact.categoryId)) {
      errors.push(`Artifact ${artifact.id} references an unknown category: ${artifact.categoryId}`);
    }

    if (!themeIds.has(artifact.themeId)) {
      errors.push(`Artifact ${artifact.id} references an unknown theme: ${artifact.themeId}`);
    }

    if (artifact.seriesId && !seriesIds.has(artifact.seriesId)) {
      errors.push(`Artifact ${artifact.id} references an unknown series: ${artifact.seriesId}`);
    }

    for (const focusAreaId of artifact.focusAreaIds) {
      if (!focusAreaIds.has(focusAreaId)) {
        errors.push(`Artifact ${artifact.id} references an unknown focus area: ${focusAreaId}`);
      }
    }

    if (artifact.seriesId === "forge" && !artifact.transformation) {
      errors.push(`Forge artifact ${artifact.id} is missing a transformation flow.`);
    }

    if (artifact.riskProfile?.requiresEthicalNotes && !artifact.sections.ethicalNotes?.length) {
      errors.push(`Artifact ${artifact.id} requires ethical notes but none were provided.`);
    }
  }

  for (const seriesItem of series) {
    if (seriesItem.featuredArtifactId && !artifactIds.has(seriesItem.featuredArtifactId)) {
      errors.push(`Series ${seriesItem.id} references an unknown featured artifact: ${seriesItem.featuredArtifactId}`);
    }

    for (const artifactId of seriesItem.artifactIds ?? []) {
      if (!artifactIds.has(artifactId)) {
        errors.push(`Series ${seriesItem.id} references an unknown artifact: ${artifactId}`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
