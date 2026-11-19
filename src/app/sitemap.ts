import type { MetadataRoute } from "next";
import { getAllArtifacts } from "@/lib/artifacts";
import { getAllSeries } from "@/lib/series";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/artifacts/", "/roadmap/", "/about/"].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7
  }));

  const artifactRoutes = getAllArtifacts().map((artifact) => ({
    url: absoluteUrl(`/artifacts/${artifact.slug}/`),
    lastModified: artifact.updatedAt,
    changeFrequency: "monthly" as const,
    priority: artifact.featuredLevel === "primary" ? 0.9 : 0.6
  }));

  const seriesRoutes = getAllSeries().map((series) => ({
    url: absoluteUrl(`/series/${series.slug}/`),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...artifactRoutes, ...seriesRoutes];
}
