import { series } from "@/data/series";
import { getArtifactsBySeries } from "@/lib/artifacts";
import type { Artifact, Series, SeriesId } from "@/types/artifact";

export function getAllSeries(): Series[] {
  return [...series].sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
}

export function getSeriesBySlug(slug: string): Series | undefined {
  return series.find((seriesItem) => seriesItem.slug === slug);
}

export function getSeriesById(id: SeriesId): Series | undefined {
  return series.find((seriesItem) => seriesItem.id === id);
}

export function getSeriesArtifacts(seriesId: SeriesId): Artifact[] {
  return getArtifactsBySeries(seriesId);
}
