import Link from "next/link";
import { getAllArtifacts } from "@/lib/artifacts";
import { getStatusById } from "@/lib/statuses";

export default function ArtifactsPage() {
  const artifacts = getAllArtifacts();

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-neutral-50">Artifactler</h1>
      <ul className="mt-6 space-y-4">
        {artifacts.map((artifact) => {
          const status = getStatusById(artifact.statusId);

          return (
            <li key={artifact.id} className="border-b border-neutral-800 pb-4">
              <Link className="text-lg font-medium text-neutral-100 underline underline-offset-4" href={`/artifacts/${artifact.slug}`}>
                {artifact.title}
              </Link>
              <p className="mt-1 text-sm text-neutral-400">{status?.label.tr ?? artifact.statusId}</p>
              <p className="mt-2 text-neutral-300">{artifact.summary.tr}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
