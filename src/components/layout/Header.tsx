"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LocaleToggle } from "@/components/i18n/LocaleToggle";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { NavLink } from "@/components/navigation/NavLink";
import { BrandMark } from "@/components/visual/BrandMark";
import { siteConfig } from "@/data/siteConfig";
import { getUiText } from "@/data/uiText";
import { getLocalizedText } from "@/lib/i18n";

function isActivePath(pathname: string, href: string): boolean {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const target = href.replace(/\/+$/, "") || "/";
  return target === "/" ? normalized === "/" : normalized === target || normalized.startsWith(`${target}/`);
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname() ?? "/";
  const { locale } = useLocale();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-500 ${
        isScrolled || isMenuOpen ? "border-b border-[color:var(--hairline-strong)] bg-[rgba(12,11,10,0.94)]" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link className="group flex shrink-0 items-center gap-3 text-[var(--theme-text-primary)]" href="/">
          <BrandMark className="h-8 w-8 text-[var(--brass)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[24deg]" />
          <span className="flex flex-col leading-none">
            <span className="inscription text-[10px] text-[var(--theme-text-muted)]">Baglare’s</span>
            <span className="mt-1 font-[family-name:var(--font-display)] text-[19px] tracking-[0.02em]">{siteConfig.title}</span>
          </span>
        </Link>

        <nav aria-label={locale === "tr" ? "Ana navigasyon" : "Main navigation"} className="hidden items-center gap-1 md:flex">
          {siteConfig.navigation.map((item) => (
            <NavLink
              active={!item.external && isActivePath(pathname, item.href)}
              external={item.external}
              href={item.href}
              key={item.href}
              label={getLocalizedText(item.label, locale)}
            />
          ))}
          <span aria-hidden="true" className="mx-3 h-5 w-px bg-[var(--hairline-strong)]" />
          <LocaleToggle />
        </nav>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? getUiText("closeMenu", locale) : getUiText("openMenu", locale)}
          className="grid h-10 w-10 place-items-center rounded-md border border-[color:var(--hairline-strong)] text-[var(--theme-text-primary)] transition-colors hover:border-[color:var(--brass)] md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-300 ${isMenuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-300 ${isMenuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <nav
        aria-label={locale === "tr" ? "Mobil navigasyon" : "Mobile navigation"}
        className={`${isMenuOpen ? "grid" : "hidden"} gap-1 border-t border-[color:var(--hairline)] px-4 pb-5 pt-2 md:hidden`}
      >
        {siteConfig.navigation.map((item) => (
          <NavLink
            active={!item.external && isActivePath(pathname, item.href)}
            className="w-full py-3 text-lg"
            external={item.external}
            href={item.href}
            key={item.href}
            label={getLocalizedText(item.label, locale)}
          />
        ))}
        <LocaleToggle className="mt-3 w-fit" />
      </nav>
    </header>
  );
}
