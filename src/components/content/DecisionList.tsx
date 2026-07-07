"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";
import type { DesignDecision, LocalizedText } from "@/types/artifact";

type DecisionItem = DesignDecision & {
  impact?: LocalizedText;
};

type DecisionListProps = {
  decisions: DecisionItem[];
};

export function DecisionList({ decisions }: DecisionListProps) {
  const { locale } = useLocale();

  if (!decisions.length) {
    return null;
  }

  return (
    <ul className="space-y-4">
      {decisions.map((decision) => (
        <li className="border-b border-[color:var(--theme-border)] pb-4" key={decision.title.tr}>
          <h3 className="font-medium text-[var(--theme-text-primary)]">{getLocalizedText(decision.title, locale)}</h3>
          <p className="mt-1 text-[var(--theme-text-secondary)]">{getLocalizedText(decision.description, locale)}</p>
          {decision.impact ? <p className="mt-2 text-sm text-[var(--theme-text-muted)]">Etki: {getLocalizedText(decision.impact, locale)}</p> : null}
        </li>
      ))}
    </ul>
  );
}
