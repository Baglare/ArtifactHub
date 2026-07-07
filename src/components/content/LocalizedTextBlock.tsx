"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";
import type { LocalizedText } from "@/types/artifact";

type LocalizedTextBlockProps = {
  text?: LocalizedText;
};

export function LocalizedTextBlock({ text }: LocalizedTextBlockProps) {
  const { locale } = useLocale();
  const resolvedText = getLocalizedText(text, locale);
  const paragraphs = resolvedText
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (!paragraphs.length) {
    return null;
  }

  return (
    <div className="space-y-4 text-[var(--theme-text-secondary)]">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
