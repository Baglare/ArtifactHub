import { notFound } from "next/navigation";
import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { PageShell } from "@/components/layout/PageShell";
import { SeriesHero } from "@/components/series/SeriesHero";
import { SeriesTransformationTable } from "@/components/series/SeriesTransformationTable";
import { SharedTransformationModel } from "@/components/series/SharedTransformationModel";
import { LocalizedTextValue } from "@/components/i18n/LocalizedTextValue";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DecisionList } from "@/components/content/DecisionList";
import { LimitationList } from "@/components/content/LimitationList";
import { PlannedExtensionsList } from "@/components/content/PlannedExtensionsList";
import { TechnicalPanel } from "@/components/content/TechnicalPanel";
import { seriesPageText } from "@/data/pageText";
import { getArtifactById } from "@/lib/artifacts";
import { getSeriesArtifacts, getAllSeries, getSeriesBySlug } from "@/lib/series";

type SeriesPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllSeries().map((seriesItem) => ({
    slug: seriesItem.slug
  }));
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);

  if (!series) {
    notFound();
  }

  const artifacts = getSeriesArtifacts(series.id);
  const featuredArtifact = series.featuredArtifactId ? getArtifactById(series.featuredArtifactId) : undefined;

  return (
    <PageShell themeId={series.themeId} variant="series">
      <SeriesHero series={series} />

      <div className="grid min-w-0 gap-5">
        {series.transformationModel ? (
          <TechnicalPanel titleKey="sharedTransformationModel" themeId={series.themeId} variant="technical">
            <SharedTransformationModel transformationModel={series.transformationModel} />
          </TechnicalPanel>
        ) : null}

        {featuredArtifact ? (
          <TechnicalPanel titleKey="featuredArtifact" themeId={series.themeId}>
            <ArtifactGrid artifacts={[featuredArtifact]} showRepoLink showTransformation variant="featured" />
          </TechnicalPanel>
        ) : null}

        <TechnicalPanel
          description={<LocalizedTextValue text={seriesPageText.artifactsDescription} />}
          titleKey="artifactsInSeries"
          themeId={series.themeId}
        >
          <ArtifactGrid artifacts={artifacts} showRepoLink showSeriesBadge showTransformation variant="series" />
        </TechnicalPanel>

        <TechnicalPanel
          description={<LocalizedTextValue text={seriesPageText.transformationDescription} />}
          titleKey="transformationFlow"
          themeId={series.themeId}
          variant="technical"
        >
          <SeriesTransformationTable artifacts={artifacts} />
        </TechnicalPanel>

        {series.designDecisions?.length ? (
          <TechnicalPanel titleKey="sharedDesignDecisions" themeId={series.themeId}>
            <DecisionList decisions={series.designDecisions} />
          </TechnicalPanel>
        ) : null}

        {series.limitations?.length ? (
          <TechnicalPanel titleKey="limitations" themeId={series.themeId} variant="warning">
            <LimitationList limitations={series.limitations} />
          </TechnicalPanel>
        ) : null}

        {series.plannedExtensions?.length ? (
          <TechnicalPanel titleKey="plannedExtensions" themeId={series.themeId}>
            <PlannedExtensionsList plannedExtensions={series.plannedExtensions} />
          </TechnicalPanel>
        ) : null}

        <TechnicalPanel titleKey="links" themeId={series.themeId}>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/artifacts" labelKey="artifactArchive" variant="secondary" />
            <ButtonLink href="/" labelKey="home" variant="secondary" />
          </div>
        </TechnicalPanel>
      </div>
    </PageShell>
  );
}
