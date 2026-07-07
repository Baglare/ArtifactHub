import Link from "next/link";
import { TechStackList } from "@/components/artifacts/TechStackList";
import { TransformationFlow } from "@/components/content/TransformationFlow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ThemeSymbol } from "@/components/visual/ThemeSymbol";
import { getSeriesById } from "@/lib/series";
import { getThemeCssVariables } from "@/lib/themes";
import type { Artifact } from "@/types/artifact";

export type ArtifactCardVariant = "default" | "featured" | "compact" | "series";

type ArtifactCardProps = {
  artifact: Artifact;
  variant?: ArtifactCardVariant;
  showTransformation?: boolean;
  showRepoLink?: boolean;
  showSeriesBadge?: boolean;
};

const variantClasses: Record<ArtifactCardVariant, string> = {
  default: "p-5",
  featured: "p-6",
  compact: "p-4",
  series: "p-5"
};

export function ArtifactCard({
  artifact,
  variant = "default",
  showTransformation = false,
  showRepoLink = false,
  showSeriesBadge = false
}: ArtifactCardProps) {
  const themeStyle = getThemeCssVariables(artifact.themeId);
  const series = artifact.seriesId ? getSeriesById(artifact.seriesId) : undefined;
  const techLimit = variant === "compact" ? 3 : 5;

  return (
    <article
      className={`flex h-full min-w-0 flex-col border border-[color:var(--theme-border)] bg-[var(--theme-surface)] ${variantClasses[variant]}`}
      style={themeStyle}
    >
      <div className="flex items-start gap-4">
        <ThemeSymbol size={variant === "compact" ? "sm" : "md"} themeId={artifact.themeId} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge statusId={artifact.statusId} variant="subtle" />
            {showSeriesBadge && series ? (
              <span className="border border-[color:var(--theme-border)] px-2 py-1 text-xs text-[var(--theme-text-muted)]">
                {series.title}
              </span>
            ) : null}
          </div>

          <h2 className="mt-3 text-xl font-semibold text-[var(--theme-text-primary)]">
            <Link
              className="transition-colors hover:text-[var(--theme-accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)]"
              href={`/artifacts/${artifact.slug}`}
            >
              {artifact.title}
            </Link>
          </h2>
          <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">{artifact.summary.tr}</p>
        </div>
      </div>

      <div className="mt-4">
        <TechStackList items={artifact.techStack} limit={techLimit} variant={variant === "compact" ? "compact" : "default"} />
      </div>

      {showTransformation ? (
        <div className="mt-4">
          <TransformationFlow transformation={artifact.transformation} variant="mini" />
        </div>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <ButtonLink href={`/artifacts/${artifact.slug}`} variant="secondary">
          Artifact’i İncele
        </ButtonLink>
        {showRepoLink && artifact.repoUrl ? (
          <ButtonLink external href={artifact.repoUrl} variant="ghost">
            GitHub
          </ButtonLink>
        ) : null}
      </div>
    </article>
  );
}
