"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";
import type { ArchitectureFlow as ArchitectureFlowType } from "@/types/artifact";

type ArchitectureFlowProps = {
  architectureFlow?: ArchitectureFlowType;
  variant?: "default" | "compact";
};

export function ArchitectureFlow({ architectureFlow, variant = "default" }: ArchitectureFlowProps) {
  const { locale } = useLocale();

  if (!architectureFlow?.steps.length) {
    return null;
  }

  return (
    <ol className="space-y-2">
      {architectureFlow.steps.map((step, index) => (
        <li className="flex gap-3 text-[var(--theme-text-secondary)]" key={`${step.label}-${index}`}>
          <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-[color:var(--theme-border)] text-xs text-[var(--theme-text-muted)]">
            {index + 1}
          </span>
          <div className="min-w-0">
            <p className={variant === "compact" ? "text-sm" : "text-base"}>{step.label}</p>
            {step.description ? <p className="mt-1 text-sm text-[var(--theme-text-muted)]">{getLocalizedText(step.description, locale)}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
