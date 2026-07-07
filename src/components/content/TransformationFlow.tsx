"use client";

import { getUiText } from "@/data/uiText";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";
import type { TransformationFlow as TransformationFlowType } from "@/types/artifact";

type TransformationFlowVariant = "mini" | "full";

type TransformationFlowProps = {
  transformation?: TransformationFlowType;
  input?: TransformationFlowType["input"];
  process?: TransformationFlowType["process"];
  output?: TransformationFlowType["output"];
  variant?: TransformationFlowVariant;
};

export function TransformationFlow({
  transformation,
  input,
  process,
  output,
  variant = "full"
}: TransformationFlowProps) {
  const { locale } = useLocale();
  const resolvedInput = transformation?.input ?? input;
  const resolvedProcess = transformation?.process ?? process;
  const resolvedOutput = transformation?.output ?? output;

  if (!resolvedInput || !resolvedProcess || !resolvedOutput) {
    return null;
  }

  if (variant === "mini") {
    return (
      <p className="text-sm text-[var(--theme-text-secondary)]">
        {getLocalizedText(transformation?.compact, locale) ||
          `${getLocalizedText(resolvedInput, locale)} → ${getLocalizedText(resolvedProcess, locale)} → ${getLocalizedText(resolvedOutput, locale)}`}
      </p>
    );
  }

  const steps = [
    { label: getUiText("input", locale), body: getLocalizedText(resolvedInput, locale) },
    { label: getUiText("process", locale), body: getLocalizedText(resolvedProcess, locale) },
    { label: getUiText("output", locale), body: getLocalizedText(resolvedOutput, locale) }
  ];

  return (
    <div className="grid min-w-0 gap-3 md:grid-cols-3">
      {steps.map((step) => (
        <div className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-4" key={step.label}>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--theme-text-muted)]">{step.label}</p>
          <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">{step.body}</p>
        </div>
      ))}
    </div>
  );
}
