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
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[color:color-mix(in_srgb,var(--theme-accent-primary)_40%,transparent)] font-mono text-[11px] text-[var(--theme-accent-primary)]">
              {index + 1}
            </span>
            <span className="glass-soft min-w-0 flex-1 px-4 py-3 text-sm text-[var(--theme-text-secondary)]">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
