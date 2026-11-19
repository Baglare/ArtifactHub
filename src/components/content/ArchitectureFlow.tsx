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
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {architectureFlow.steps.map((step, index) => (
        <li
          className="glass-soft flex min-w-0 items-start gap-3 p-4 text-[var(--theme-text-secondary)] transition-colors hover:border-[color:color-mix(in_srgb,var(--theme-accent-primary)_40%,transparent)]"
          key={`${step.label}-${index}`}
        >
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[color:color-mix(in_srgb,var(--theme-accent-primary)_40%,transparent)] font-mono text-[11px] text-[var(--theme-accent-primary)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 pt-0.5">
            <p className={`text-[var(--theme-text-primary)] ${variant === "compact" ? "text-sm" : "text-[15px]"}`}>{step.label}</p>
            {step.description ? <p className="mt-1 text-sm text-[var(--theme-text-muted)]">{getLocalizedText(step.description, locale)}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
