"use client";

import { getUiText } from "@/data/uiText";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getCategoryById } from "@/lib/categories";
import { getLocalizedText } from "@/lib/i18n";
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
  const { locale } = useLocale();
  const status = getStatusById(artifact.statusId);
  const category = getCategoryById(artifact.categoryId);
  const series = artifact.seriesId ? getSeriesById(artifact.seriesId) : undefined;

  const facts: QuickFact[] = [
    { label: getUiText("role", locale), value: getLocalizedText(artifact.positioning, locale) },
    { label: getUiText("status", locale), value: status ? getLocalizedText(status.label, locale) : "Prototip" },
    { label: getUiText("series", locale), value: series?.title ?? getUiText("independentArtifact", locale) },
    { label: getUiText("category", locale), value: category ? getLocalizedText(category.label, locale) : artifact.categoryId }
  ];

  if (artifact.transformation) {
    facts.push(
      { label: getUiText("mainInput", locale), value: getLocalizedText(artifact.transformation.input, locale) },
      { label: getUiText("mainOutput", locale), value: getLocalizedText(artifact.transformation.output, locale) }
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
