import { notFound } from "next/navigation";
import { getAllArtifacts, getArtifactBySlug } from "@/lib/artifacts";
import { getStatusById } from "@/lib/statuses";

type ArtifactDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllArtifacts().map((artifact) => ({
    slug: artifact.slug
  }));
}

export default function ArtifactDetailPage({ params }: ArtifactDetailPageProps) {
  const artifact = getArtifactBySlug(params.slug);

  if (!artifact) {
    notFound();
  }

  const status = getStatusById(artifact.statusId);

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <p className="text-sm text-neutral-400">{status?.label.tr ?? artifact.statusId}</p>
      <h1 className="mt-2 text-3xl font-semibold text-neutral-50">{artifact.title}</h1>
      <p className="mt-4 max-w-3xl text-neutral-300">{artifact.summary.tr}</p>

      {artifact.repoUrl ? (
        <p className="mt-6">
          <a className="underline underline-offset-4" href={artifact.repoUrl} rel="noreferrer" target="_blank">
            GitHub reposu
          </a>
        </p>
      ) : null}
    </main>
  );
}
