"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";
import type { LocalizedText } from "@/types/artifact";

type LimitationListProps = {
  limitations: LocalizedText[];
};

export function LimitationList({ limitations }: LimitationListProps) {
  const { locale } = useLocale();

  if (!limitations.length) {
    return null;
  }

  return (
    <ul className="bullet-list">
      {limitations.map((limitation) => (
        <li key={limitation.tr}>{getLocalizedText(limitation, locale)}</li>
      ))}
    </ul>
  );
}
