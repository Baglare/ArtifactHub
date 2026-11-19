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
      <p className="font-mono text-[11.5px] leading-relaxed text-[var(--theme-text-muted)]">
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
      {steps.map((step, index) => (
        <div className="glass-soft relative min-w-0 p-5" key={step.label}>
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[color:color-mix(in_srgb,var(--theme-accent-primary)_18%,transparent)] font-mono text-[10px] text-[var(--theme-accent-primary)]">
              {index + 1}
            </span>
            <p className="eyebrow !text-[var(--theme-text-muted)]">{step.label}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[var(--theme-text-secondary)]">{step.body}</p>
          {index < steps.length - 1 ? (
            <span aria-hidden="true" className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-[var(--theme-accent-primary)] md:block">
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
