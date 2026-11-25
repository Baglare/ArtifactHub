import { ArtifactCard, type ArtifactCardVariant } from "@/components/artifacts/ArtifactCard";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Artifact } from "@/types/artifact";

type ArtifactGridProps = {
  artifacts: Artifact[];
  variant?: ArtifactCardVariant;
  emptyMessage?: string;
  showTransformation?: boolean;
  showRepoLink?: boolean;
  showSeriesBadge?: boolean;
};

export function ArtifactGrid({
  artifacts,
  variant = "default",
  emptyMessage,
  showTransformation = false,
  showRepoLink = false,
  showSeriesBadge = false
}: ArtifactGridProps) {
  if (!artifacts.length) {
    return <EmptyState title={emptyMessage} />;
  }

  return (
    <div className={variant === "featured" ? "grid min-w-0 gap-6 md:grid-cols-2" : "grid min-w-0 gap-6 md:grid-cols-2 xl:grid-cols-3"}>
      {artifacts.map((artifact) => (
        <ArtifactCard
          artifact={artifact}
          key={artifact.id}
          showRepoLink={showRepoLink}
          showSeriesBadge={showSeriesBadge}
          showTransformation={showTransformation}
          variant={variant}
        />
      ))}
    </div>
  );
}

type FeaturedShowcaseProps = {
  artifacts: Artifact[];
};

/** Bento layout: first artifact spans the full row as a spotlight, the rest sit beside each other. */
export function FeaturedShowcase({ artifacts }: FeaturedShowcaseProps) {
  if (!artifacts.length) {
    return null;
  }

  const [spotlight, ...rest] = artifacts;

  return (
    <div className="grid min-w-0 gap-6 lg:grid-cols-6">
      <ArtifactCard artifact={spotlight} className="lg:col-span-6" showRepoLink showTransformation variant="spotlight" />
      {rest.map((artifact, index) => (
        <ArtifactCard
          artifact={artifact}
          className={rest.length % 2 === 1 && index === rest.length - 1 ? "lg:col-span-6" : "lg:col-span-3"}
          key={artifact.id}
          showRepoLink
          variant="featured"
        />
      ))}
    </div>
  );
}
