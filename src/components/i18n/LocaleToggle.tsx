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
      className={`inline-flex border border-[color:var(--theme-border)] bg-[var(--theme-surface)] ${className ?? ""}`}
      role="group"
    >
      {SUPPORTED_LOCALES.map((item) => (
        <button
          aria-label={getLocaleLabel(item)}
          aria-pressed={locale === item}
          className={`px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)] ${
            locale === item
              ? "bg-[var(--theme-accent-primary)] text-[var(--theme-background)]"
              : "text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]"
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
