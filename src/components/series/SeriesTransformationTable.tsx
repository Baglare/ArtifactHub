import Link from "next/link";
import type { Artifact } from "@/types/artifact";

type SeriesTransformationTableProps = {
  artifacts: Artifact[];
};

export function SeriesTransformationTable({ artifacts }: SeriesTransformationTableProps) {
  const rows = artifacts.filter((artifact) => artifact.transformation);

  if (!rows.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="hidden overflow-hidden border border-[color:var(--theme-border)] md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-[var(--theme-surface-raised)] text-[var(--theme-text-primary)]">
            <tr>
              <th className="border-b border-[color:var(--theme-border)] p-3">Artifact</th>
              <th className="border-b border-[color:var(--theme-border)] p-3">Girdi</th>
              <th className="border-b border-[color:var(--theme-border)] p-3">İşleme</th>
              <th className="border-b border-[color:var(--theme-border)] p-3">Çıktı</th>
            </tr>
          </thead>
          <tbody className="text-[var(--theme-text-secondary)]">
            {rows.map((artifact) => (
              <tr className="border-b border-[color:var(--theme-border)] last:border-b-0" key={artifact.id}>
                <td className="p-3">
                  <Link className="font-medium text-[var(--theme-text-primary)] hover:text-[var(--theme-accent-primary)]" href={`/artifacts/${artifact.slug}`}>
                    {artifact.title}
                  </Link>
                </td>
                <td className="p-3">{artifact.transformation?.input.tr}</td>
                <td className="p-3">{artifact.transformation?.process.tr}</td>
                <td className="p-3">{artifact.transformation?.output.tr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 md:hidden">
        {rows.map((artifact) => (
          <article className="border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-4" key={artifact.id}>
            <Link className="font-medium text-[var(--theme-text-primary)]" href={`/artifacts/${artifact.slug}`}>
              {artifact.title}
            </Link>
            <dl className="mt-3 space-y-3 text-sm text-[var(--theme-text-secondary)]">
              <div>
                <dt className="font-medium text-[var(--theme-text-muted)]">Girdi</dt>
                <dd>{artifact.transformation?.input.tr}</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--theme-text-muted)]">İşleme</dt>
                <dd>{artifact.transformation?.process.tr}</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--theme-text-muted)]">Çıktı</dt>
                <dd>{artifact.transformation?.output.tr}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
