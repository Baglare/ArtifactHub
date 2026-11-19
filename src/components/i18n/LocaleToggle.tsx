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
      className={`inline-flex rounded-full border border-[color:var(--hairline-strong)] bg-white/[0.03] p-0.5 ${className ?? ""}`}
      role="group"
    >
      {SUPPORTED_LOCALES.map((item) => (
        <button
          aria-label={getLocaleLabel(item)}
          aria-pressed={locale === item}
          className={`rounded-full px-3 py-1.5 font-mono text-[11px] font-medium tracking-wider transition-all duration-300 ${
            locale === item
              ? "bg-[var(--theme-text-primary)] text-[#0a0a10]"
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
