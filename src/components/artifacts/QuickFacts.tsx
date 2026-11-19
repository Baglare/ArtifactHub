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
    <dl className="grid gap-3 sm:grid-cols-2">
      {facts.map((fact) => (
        <div className="glass-soft min-w-0 p-5" key={fact.label}>
          <dt className="eyebrow !text-[var(--theme-text-muted)]">{fact.label}</dt>
          <dd className="mt-2 text-sm leading-relaxed text-[var(--theme-text-primary)]">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
