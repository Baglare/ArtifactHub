import type { Locale, LocalizedText } from "@/types/artifact";

export type { Locale };

export const DEFAULT_LOCALE: Locale = "tr";
export const SUPPORTED_LOCALES = ["tr", "en"] as const satisfies readonly Locale[];

export function isSupportedLocale(value: unknown): value is Locale {
  return typeof value === "string" && SUPPORTED_LOCALES.includes(value as Locale);
}

export function getLocaleLabel(locale: Locale): "Türkçe" | "English" {
  return locale === "tr" ? "Türkçe" : "English";
}

export function getLocalizedText(
  text: LocalizedText | undefined,
  locale: Locale,
  fallbackLocale: Locale = DEFAULT_LOCALE
): string {
  if (!text) {
    return "";
  }

  return text[locale] ?? text[fallbackLocale] ?? text.tr ?? "";
}
