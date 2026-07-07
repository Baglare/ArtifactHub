"use client";

import Link from "next/link";
import { useState } from "react";
import { LocaleToggle } from "@/components/i18n/LocaleToggle";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { siteConfig } from "@/data/siteConfig";
import { getUiText } from "@/data/uiText";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NavLink } from "@/components/navigation/NavLink";
import { getLocalizedText } from "@/lib/i18n";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale } = useLocale();
  const menuLabel = getUiText("menu", locale);

  return (
    <header className="border-b border-[color:var(--theme-border)] bg-[var(--theme-surface)]">
      <ContentContainer className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link className="flex shrink-0 flex-col leading-none text-[var(--theme-text-primary)]" href="/">
            <span className="text-[10px] font-medium text-[var(--theme-accent-primary)]">Baglare’s</span>
            <span className="mt-0.5 font-semibold">{siteConfig.title}</span>
          </Link>

          <nav aria-label={locale === "tr" ? "Ana navigasyon" : "Main navigation"} className="hidden items-center gap-4 md:flex">
            {siteConfig.navigation.map((item) => (
              <NavLink key={item.href} external={item.external} href={item.href} label={getLocalizedText(item.label, locale)} />
            ))}
            <LocaleToggle />
          </nav>

          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? getUiText("closeMenu", locale) : getUiText("openMenu", locale)}
            className="border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] px-3 py-2 text-sm font-medium text-[var(--theme-text-primary)] transition-colors hover:border-[color:var(--theme-accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)] md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {menuLabel}
          </button>
        </div>

        <nav
          aria-label={locale === "tr" ? "Mobil navigasyon" : "Mobile navigation"}
          className={`${isMenuOpen ? "grid" : "hidden"} mt-3 gap-2 border-t border-[color:var(--theme-border)] pt-3 md:hidden`}
        >
          <LocaleToggle className="w-fit" />
          {siteConfig.navigation.map((item) => (
            <NavLink
              className="border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] px-3 py-2"
              external={item.external}
              href={item.href}
              key={item.href}
              label={getLocalizedText(item.label, locale)}
            />
          ))}
        </nav>
      </ContentContainer>
    </header>
  );
}
