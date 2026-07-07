import { notFound } from "next/navigation";
import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { ArtifactHero } from "@/components/artifacts/ArtifactHero";
import { QuickFacts } from "@/components/artifacts/QuickFacts";
import { ArchitectureFlow } from "@/components/content/ArchitectureFlow";
import { DecisionList } from "@/components/content/DecisionList";
import { LimitationList } from "@/components/content/LimitationList";
import { LocalizedTextBlock } from "@/components/content/LocalizedTextBlock";
import { PlannedExtensionsList } from "@/components/content/PlannedExtensionsList";
import { TechnicalPanel } from "@/components/content/TechnicalPanel";
import { TransformationFlow } from "@/components/content/TransformationFlow";
import { LocalizedTextValue } from "@/components/i18n/LocalizedTextValue";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TechTag } from "@/components/ui/TechTag";
import { uiText } from "@/data/uiText";
import { getAllArtifacts, getArtifactBySlug, getArtifactsBySeries } from "@/lib/artifacts";
import { getSeriesById } from "@/lib/series";

type ArtifactDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllArtifacts().map((artifact) => ({
    slug: artifact.slug
  }));
}

export default async function ArtifactDetailPage({ params }: ArtifactDetailPageProps) {
  const { slug } = await params;
  const artifact = getArtifactBySlug(slug);

  if (!artifact) {
    notFound();
  }

  const series = artifact.seriesId ? getSeriesById(artifact.seriesId) : undefined;
  const relatedArtifacts = artifact.seriesId
    ? getArtifactsBySeries(artifact.seriesId).filter((seriesArtifact) => seriesArtifact.id !== artifact.id)
    : [];
  const overviewText = artifact.sections.overview.body;
  const currentScopeText = artifact.sections.currentScope.body;
  const ethicalNotes = artifact.sections.ethicalNotes ?? [];

  return (
    <PageShell themeId={artifact.themeId} variant="artifact">
      <ArtifactHero artifact={artifact} />

      <div className="grid min-w-0 gap-5">
        <TechnicalPanel titleKey="quickFacts" themeId={artifact.themeId}>
          <QuickFacts artifact={artifact} />
        </TechnicalPanel>

        {overviewText.tr ? (
          <TechnicalPanel titleKey="systemOverview" themeId={artifact.themeId}>
            <LocalizedTextBlock text={overviewText} />
          </TechnicalPanel>
        ) : null}

        {currentScopeText.tr ? (
          <TechnicalPanel titleKey="currentScope" themeId={artifact.themeId}>
            <LocalizedTextBlock text={currentScopeText} />
          </TechnicalPanel>
        ) : null}

        {artifact.coreSystems.length ? (
          <TechnicalPanel titleKey="coreSystems" themeId={artifact.themeId} variant="technical">
            <ul className="flex flex-wrap gap-2">
              {artifact.coreSystems.map((system) => (
                <li key={system}>
                  <TechTag label={system} />
                </li>
              ))}
            </ul>
          </TechnicalPanel>
        ) : null}

        <TechnicalPanel titleKey="technicalTags" themeId={artifact.themeId} variant="technical">
          <ul className="flex flex-wrap gap-2">
            {artifact.techStack.map((tech) => (
              <li key={tech}>
                <TechTag label={tech} variant="compact" />
              </li>
            ))}
          </ul>
        </TechnicalPanel>

        {artifact.transformation ? (
          <TechnicalPanel titleKey="transformationFlow" themeId={artifact.themeId} variant="technical">
            <TransformationFlow transformation={artifact.transformation} />
          </TechnicalPanel>
        ) : null}

        {artifact.architectureFlow?.steps.length ? (
          <TechnicalPanel titleKey="architectureFlow" themeId={artifact.themeId} variant="technical">
            <ArchitectureFlow architectureFlow={artifact.architectureFlow} />
          </TechnicalPanel>
        ) : null}

        {artifact.sections.designDecisions.length ? (
          <TechnicalPanel titleKey="designDecisions" themeId={artifact.themeId}>
            <DecisionList decisions={artifact.sections.designDecisions} />
          </TechnicalPanel>
        ) : null}

        {ethicalNotes.length ? (
          <TechnicalPanel titleKey="ethicalBoundaries" themeId={artifact.themeId} variant="ethical">
            <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
              {ethicalNotes.map((note) => (
                <li key={note.tr}>
                  <LocalizedTextValue text={note} />
                </li>
              ))}
            </ul>
            {artifact.riskProfile?.publicClaimBoundary ? (
              <div className="mt-4 min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-4 text-sm text-[var(--theme-text-secondary)]">
                <span className="font-medium text-[var(--theme-text-primary)]">
                  <LocalizedTextValue text={uiText.publicClaimBoundary} />:{" "}
                </span>
                <LocalizedTextValue text={artifact.riskProfile.publicClaimBoundary} />
              </div>
            ) : null}
          </TechnicalPanel>
        ) : null}

        {artifact.sections.limitations.length ? (
          <TechnicalPanel titleKey="limitations" themeId={artifact.themeId} variant="warning">
            <LimitationList limitations={artifact.sections.limitations} />
          </TechnicalPanel>
        ) : null}

        {artifact.sections.plannedExtensions.length ? (
          <TechnicalPanel titleKey="plannedExtensions" themeId={artifact.themeId}>
            <PlannedExtensionsList plannedExtensions={artifact.sections.plannedExtensions} />
          </TechnicalPanel>
        ) : null}

        <TechnicalPanel titleKey="links" themeId={artifact.themeId}>
          <div className="flex flex-wrap gap-3">
            {artifact.repoUrl ? (
              <ButtonLink external href={artifact.repoUrl} labelKey="githubRepository" />
            ) : null}
            {series ? (
              <ButtonLink href={`/series/${series.slug}`} labelKey="seriesPage" variant="secondary" />
            ) : null}
            <ButtonLink href="/artifacts" labelKey="artifactArchive" variant="secondary" />
          </div>
        </TechnicalPanel>

        {relatedArtifacts.length ? (
          <TechnicalPanel titleKey="sameSeriesArtifacts" themeId={artifact.themeId}>
            <ArtifactGrid artifacts={relatedArtifacts} showTransformation variant="compact" />
          </TechnicalPanel>
        ) : null}
      </div>
    </PageShell>
  );
}
