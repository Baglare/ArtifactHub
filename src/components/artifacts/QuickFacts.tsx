import { getCategoryById } from "@/lib/categories";
import { getSeriesById } from "@/lib/series";
import { getStatusById } from "@/lib/statuses";
import type { Artifact } from "@/types/artifact";

type QuickFactsProps = {
  artifact: Artifact;
};

type QuickFact = {
  label: string;
  value: string;
};

export function QuickFacts({ artifact }: QuickFactsProps) {
  const status = getStatusById(artifact.statusId);
  const category = getCategoryById(artifact.categoryId);
  const series = artifact.seriesId ? getSeriesById(artifact.seriesId) : undefined;

  const facts: QuickFact[] = [
    { label: "Rol", value: artifact.positioning.tr },
    { label: "Durum", value: status?.label.tr ?? "Prototip" },
    { label: "Seri", value: series?.title ?? "Bağımsız artifact" },
    { label: "Kategori", value: category?.label.tr ?? artifact.categoryId }
  ];

  if (artifact.transformation) {
    facts.push(
      { label: "Ana Girdi", value: artifact.transformation.input.tr },
      { label: "Ana Çıktı", value: artifact.transformation.output.tr }
    );
  }

  return (
    <dl className="grid gap-3 md:grid-cols-2">
      {facts.map((fact) => (
        <div className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-4" key={fact.label}>
          <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--theme-text-muted)]">{fact.label}</dt>
          <dd className="mt-2 text-sm text-[var(--theme-text-secondary)]">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
