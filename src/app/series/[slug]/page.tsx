import { notFound } from "next/navigation";
import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
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

  return (
    <PageShell themeId={series.themeId} variant="series">
      <SectionBlock title={series.title} description={series.summary.tr} variant="series">
        <h2 className="text-xl font-semibold text-[var(--theme-text-primary)]">Seri artifactleri</h2>
        <div className="mt-4">
          <ArtifactGrid artifacts={artifacts} showTransformation variant="series" />
        </div>
      </SectionBlock>
    </PageShell>
  );
}
