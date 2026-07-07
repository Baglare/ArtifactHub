import { notFound } from "next/navigation";
import { FocusAreaList } from "@/components/artifacts/FocusAreaList";
import { QuickFacts } from "@/components/artifacts/QuickFacts";
import { TechStackList } from "@/components/artifacts/TechStackList";
import { ArchitectureFlow } from "@/components/content/ArchitectureFlow";
import { DecisionList } from "@/components/content/DecisionList";
import { LimitationList } from "@/components/content/LimitationList";
import { PlannedExtensionsList } from "@/components/content/PlannedExtensionsList";
import { TechnicalPanel } from "@/components/content/TechnicalPanel";
import { TransformationFlow } from "@/components/content/TransformationFlow";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getAllArtifacts, getArtifactBySlug } from "@/lib/artifacts";

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

  return (
    <PageShell themeId={artifact.themeId} variant="artifact">
      <SectionBlock title={artifact.title} description={artifact.summary.tr} variant="artifact">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge statusId={artifact.statusId} />
          {artifact.repoUrl ? (
            <ButtonLink external href={artifact.repoUrl} variant="ghost">
              GitHub
            </ButtonLink>
          ) : null}
        </div>
      </SectionBlock>

      <div className="grid gap-5">
        <TechnicalPanel title="Kısa Bilgiler" themeId={artifact.themeId}>
          <QuickFacts artifact={artifact} />
        </TechnicalPanel>

        <TechnicalPanel title="Teknoloji ve Odak Alanları" themeId={artifact.themeId} variant="technical">
          <div className="space-y-4">
            <TechStackList items={artifact.techStack} />
            <FocusAreaList focusAreaIds={artifact.focusAreaIds} />
          </div>
        </TechnicalPanel>

        {artifact.transformation ? (
          <TechnicalPanel title="Dönüşüm Akışı" themeId={artifact.themeId} variant="technical">
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
      </div>
    </PageShell>
  );
}
