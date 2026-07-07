"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";
import type { SeriesTransformationModel } from "@/types/artifact";

type SharedTransformationModelProps = {
  transformationModel?: SeriesTransformationModel;
};

export function SharedTransformationModel({ transformationModel }: SharedTransformationModelProps) {
  const { locale } = useLocale();

  if (!transformationModel?.steps.length) {
    return null;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--theme-text-primary)]">
        {getLocalizedText(transformationModel.title, locale)}
      </h3>
      <p className="mt-2 max-w-3xl text-[var(--theme-text-secondary)]">
        {getLocalizedText(transformationModel.description, locale)}
      </p>

      <ol className="mt-5 grid gap-3">
        {transformationModel.steps.map((step, index) => (
          <li className="flex min-w-0 items-center gap-3" key={`${step}-${index}`}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[color:var(--theme-border)] text-xs text-[var(--theme-text-muted)]">
              {index + 1}
            </span>
            <span className="min-w-0 flex-1 border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] px-3 py-2 text-sm text-[var(--theme-text-secondary)]">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
