import { notFound } from "next/navigation";
import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { ArtifactHero } from "@/components/artifacts/ArtifactHero";
import { QuickFacts } from "@/components/artifacts/QuickFacts";
import { ArchitectureFlow } from "@/components/content/ArchitectureFlow";
import { DecisionList } from "@/components/content/DecisionList";
import { LimitationList } from "@/components/content/LimitationList";
import { PlannedExtensionsList } from "@/components/content/PlannedExtensionsList";
import { TechnicalPanel } from "@/components/content/TechnicalPanel";
import { TransformationFlow } from "@/components/content/TransformationFlow";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TechTag } from "@/components/ui/TechTag";
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

type TextBlockProps = {
  text: string;
};

function TextBlock({ text }: TextBlockProps) {
  const paragraphs = text
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (!paragraphs.length) {
    return null;
  }

  return (
    <div className="space-y-4 text-[var(--theme-text-secondary)]">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
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
  const overviewText = artifact.sections.overview.body.tr;
  const currentScopeText = artifact.sections.currentScope.body.tr;
  const ethicalNotes = artifact.sections.ethicalNotes ?? [];

  return (
    <PageShell themeId={artifact.themeId} variant="artifact">
      <ArtifactHero artifact={artifact} />

      <div className="grid min-w-0 gap-5">
        <TechnicalPanel title="Kısa Bilgiler" themeId={artifact.themeId}>
          <QuickFacts artifact={artifact} />
        </TechnicalPanel>

        {overviewText ? (
          <TechnicalPanel title="Sistem Özeti" themeId={artifact.themeId}>
            <TextBlock text={overviewText} />
          </TechnicalPanel>
        ) : null}

        {currentScopeText ? (
          <TechnicalPanel title="Mevcut Kapsam" themeId={artifact.themeId}>
            <TextBlock text={currentScopeText} />
          </TechnicalPanel>
        ) : null}

        {artifact.coreSystems.length ? (
          <TechnicalPanel title="Ana Sistemler" themeId={artifact.themeId} variant="technical">
            <ul className="flex flex-wrap gap-2">
              {artifact.coreSystems.map((system) => (
                <li key={system}>
                  <TechTag label={system} />
                </li>
              ))}
            </ul>
          </TechnicalPanel>
        ) : null}

        <TechnicalPanel title="Teknik Etiketler" themeId={artifact.themeId} variant="technical">
          <ul className="flex flex-wrap gap-2">
            {artifact.techStack.map((tech) => (
              <li key={tech}>
                <TechTag label={tech} variant="compact" />
              </li>
            ))}
          </ul>
        </TechnicalPanel>

        {artifact.transformation ? (
          <TechnicalPanel title="Girdi → İşleme → Çıktı" themeId={artifact.themeId} variant="technical">
            <TransformationFlow transformation={artifact.transformation} />
          </TechnicalPanel>
        ) : null}

        {artifact.architectureFlow?.steps.length ? (
          <TechnicalPanel title="Mimari Akış" themeId={artifact.themeId} variant="technical">
            <ArchitectureFlow architectureFlow={artifact.architectureFlow} />
          </TechnicalPanel>
        ) : null}

        {artifact.sections.designDecisions.length ? (
          <TechnicalPanel title="Tasarım Kararları" themeId={artifact.themeId}>
            <DecisionList decisions={artifact.sections.designDecisions} />
          </TechnicalPanel>
        ) : null}

        {ethicalNotes.length ? (
          <TechnicalPanel title="Etik / Kullanım Sınırları" themeId={artifact.themeId} variant="ethical">
            <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
              {ethicalNotes.map((note) => (
                <li key={note.tr}>{note.tr}</li>
              ))}
            </ul>
            {artifact.riskProfile?.publicClaimBoundary ? (
              <div className="mt-4 min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-4 text-sm text-[var(--theme-text-secondary)]">
                <span className="font-medium text-[var(--theme-text-primary)]">Public claim sınırı: </span>
                {artifact.riskProfile.publicClaimBoundary.tr}
              </div>
            ) : null}
          </TechnicalPanel>
        ) : null}

        {artifact.sections.limitations.length ? (
          <TechnicalPanel title="Sınırlar" themeId={artifact.themeId} variant="warning">
            <LimitationList limitations={artifact.sections.limitations} />
          </TechnicalPanel>
        ) : null}

        {artifact.sections.plannedExtensions.length ? (
          <TechnicalPanel title="Planlanan Genişletmeler" themeId={artifact.themeId}>
            <PlannedExtensionsList plannedExtensions={artifact.sections.plannedExtensions} />
          </TechnicalPanel>
        ) : null}

        <TechnicalPanel title="Bağlantılar" themeId={artifact.themeId}>
          <div className="flex flex-wrap gap-3">
            {artifact.repoUrl ? (
              <ButtonLink external href={artifact.repoUrl}>
                GitHub Repository
              </ButtonLink>
            ) : null}
            {series ? (
              <ButtonLink href={`/series/${series.slug}`} variant="secondary">
                Seri Sayfası
              </ButtonLink>
            ) : null}
            <ButtonLink href="/artifacts" variant="secondary">
              Artifact Arşivi
            </ButtonLink>
          </div>
        </TechnicalPanel>

        {relatedArtifacts.length ? (
          <TechnicalPanel title="Aynı Serideki Artifactler" themeId={artifact.themeId}>
            <ArtifactGrid artifacts={relatedArtifacts} showTransformation variant="compact" />
          </TechnicalPanel>
        ) : null}
      </div>
    </PageShell>
  );
}
