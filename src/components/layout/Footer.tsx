"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { getUiText } from "@/data/uiText";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { BrandMark } from "@/components/visual/BrandMark";
import { getLocalizedText } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16">
      <ContentContainer>
        <div className="divider" />
      </ContentContainer>
      <ContentContainer className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div className="flex min-w-0 gap-5">
          <BrandMark className="h-12 w-12 shrink-0 text-[var(--brass)]" />
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-display)] text-[1.75rem] leading-tight text-[var(--theme-text-primary)]">
              {siteConfig.title}
              <span className="ml-3 text-[var(--brass)]">{getUiText("footerTagline", locale)}</span>
            </p>
            <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-[var(--theme-text-secondary)]">
              {getLocalizedText(siteConfig.description, locale)}
            </p>
          </div>
        </div>

        <nav aria-label={getUiText("footerNavigation", locale)} className="grid grid-cols-2 content-start gap-x-6 gap-y-3 text-[15.5px]">
          {siteConfig.navigation.map((item) =>
            item.external ? (
              <a
                className="link-engraved w-fit text-[var(--theme-text-secondary)] hover:text-[var(--brass-bright)]"
                href={item.href}
                key={item.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {getLocalizedText(item.label, locale)}
              </a>
            ) : (
              <Link className="link-engraved w-fit text-[var(--theme-text-secondary)] hover:text-[var(--brass-bright)]" href={item.href} key={item.href}>
                {getLocalizedText(item.label, locale)}
              </Link>
            )
          )}
        </nav>
      </ContentContainer>
      <ContentContainer className="inscription flex flex-col gap-2 pb-10 text-[11px] text-[var(--theme-text-muted)] sm:flex-row sm:justify-between">
        <span>© {year} Baglare</span>
        <span>{getUiText("footerNote", locale)}</span>
      </ContentContainer>
    </footer>
  );
}
