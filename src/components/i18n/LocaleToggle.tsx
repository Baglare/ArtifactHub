"use client";

import { getLocaleLabel, SUPPORTED_LOCALES } from "@/lib/i18n";
import { getUiText } from "@/data/uiText";
import { useLocale } from "@/components/i18n/LocaleProvider";

type LocaleToggleProps = {
  className?: string;
};

export function LocaleToggle({ className }: LocaleToggleProps) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      aria-label={getUiText("language", locale)}
      className={`inline-flex rounded-md border border-[color:var(--hairline-strong)] p-0.5 ${className ?? ""}`}
      role="group"
    >
      {SUPPORTED_LOCALES.map((item) => (
        <button
          aria-label={getLocaleLabel(item)}
          aria-pressed={locale === item}
          className={`inscription rounded-[4px] px-2.5 py-1.5 text-[11px] transition-colors duration-300 ${
            locale === item ? "bg-[var(--brass)] text-[var(--obsidian)]" : "text-[var(--theme-text-secondary)] hover:text-[var(--brass-bright)]"
          }`}
          key={item}
          onClick={() => setLocale(item)}
          type="button"
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
