"use client";

import { getLocalizedText } from "@/lib/i18n";
import type { LocalizedText } from "@/types/artifact";
import { useLocale } from "@/components/i18n/LocaleProvider";

type LocalizedTextValueProps = {
  text?: LocalizedText;
};

export function LocalizedTextValue({ text }: LocalizedTextValueProps) {
  const { locale } = useLocale();

  return <>{getLocalizedText(text, locale)}</>;
}
