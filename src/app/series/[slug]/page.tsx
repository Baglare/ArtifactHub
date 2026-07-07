import Link from "next/link";
import { notFound } from "next/navigation";
import { getSeriesArtifacts, getAllSeries, getSeriesBySlug } from "@/lib/series";

type SeriesPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllSeries().map((seriesItem) => ({
    slug: seriesItem.slug
  }));
}

export default function SeriesPage({ params }: SeriesPageProps) {
  const series = getSeriesBySlug(params.slug);

  if (!series) {
    notFound();
  }

  const artifacts = getSeriesArtifacts(series.id);

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-neutral-50">{series.title}</h1>
      <p className="mt-4 max-w-3xl text-neutral-300">{series.summary.tr}</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-neutral-100">Seri artifactleri</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
          {artifacts.map((artifact) => (
            <li key={artifact.id}>
              <Link className="underline underline-offset-4" href={`/artifacts/${artifact.slug}`}>
                {artifact.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
