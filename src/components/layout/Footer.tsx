"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { getUiText } from "@/data/uiText";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { getLocalizedText } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10">
      <div className="divider" />
      <ContentContainer className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]">
        <div className="min-w-0">
          <p className="eyebrow">Baglare’s</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--theme-text-primary)]">
            {siteConfig.title}
            <span className="serif-accent ml-2 text-[var(--theme-accent-primary)]">
              {getUiText("footerTagline", locale)}
            </span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--theme-text-secondary)]">
            {getLocalizedText(siteConfig.description, locale)}
          </p>
        </div>

        <nav aria-label={getUiText("footerNavigation", locale)} className="grid grid-cols-2 gap-2 text-sm">
          {siteConfig.navigation.map((item) =>
            item.external ? (
              <a
                className="text-[var(--theme-text-secondary)] transition-colors hover:text-[var(--theme-text-primary)]"
                href={item.href}
                key={item.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {getLocalizedText(item.label, locale)} ↗
              </a>
            ) : (
              <Link
                className="text-[var(--theme-text-secondary)] transition-colors hover:text-[var(--theme-text-primary)]"
                href={item.href}
                key={item.href}
              >
                {getLocalizedText(item.label, locale)}
              </Link>
            )
          )}
        </nav>
      </ContentContainer>
      <ContentContainer className="flex flex-col gap-2 pb-10 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--theme-text-muted)] sm:flex-row sm:justify-between">
        <span>© {year} Baglare</span>
        <span>{getUiText("footerNote", locale)}</span>
      </ContentContainer>
    </footer>
  );
}
