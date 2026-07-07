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
    <div className={variant === "compact" ? "grid gap-3 md:grid-cols-2" : "grid gap-4 md:grid-cols-2"}>
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
