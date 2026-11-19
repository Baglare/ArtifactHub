"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LocaleToggle } from "@/components/i18n/LocaleToggle";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { siteConfig } from "@/data/siteConfig";
import { getUiText } from "@/data/uiText";
import { NavLink } from "@/components/navigation/NavLink";
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
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={`mx-auto max-w-6xl rounded-full border transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "border-[color:var(--hairline-strong)] bg-[rgba(10,10,16,0.72)] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        } ${isMenuOpen ? "rounded-[1.75rem]" : ""}`}
      >
        <div className="flex items-center justify-between gap-4 py-2 pl-4 pr-2 sm:pl-5">
          <Link className="group flex shrink-0 items-center gap-3 text-[var(--theme-text-primary)]" href="/">
            <span
              aria-hidden="true"
              className="relative grid h-9 w-9 place-items-center rounded-xl border border-[color:var(--hairline-strong)] bg-[linear-gradient(140deg,rgba(216,179,106,0.25),rgba(139,92,246,0.18))] transition-transform duration-500 group-hover:rotate-[8deg]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                <path d="M6 19 12 5l6 14" stroke="#f1ece4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
                <path d="M8.6 14h6.8" stroke="#ee8a45" strokeLinecap="round" strokeWidth="2.2" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--theme-accent-primary)]">Baglare’s</span>
              <span className="mt-1 text-[15px] font-semibold tracking-tight">{siteConfig.title}</span>
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
            <span aria-hidden="true" className="mx-2 h-5 w-px bg-[var(--hairline-strong)]" />
            <LocaleToggle />
          </nav>

          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? getUiText("closeMenu", locale) : getUiText("openMenu", locale)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--hairline-strong)] bg-white/[0.04] text-[var(--theme-text-primary)] transition-colors hover:bg-white/[0.08] md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-[1.5px] w-4 rounded bg-current transition-all duration-300 ${isMenuOpen ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-4 rounded bg-current transition-all duration-300 ${isMenuOpen ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>

        <nav
          aria-label={locale === "tr" ? "Mobil navigasyon" : "Mobile navigation"}
          className={`${isMenuOpen ? "grid" : "hidden"} gap-1 px-3 pb-4 pt-1 md:hidden`}
        >
          {siteConfig.navigation.map((item) => (
            <NavLink
              active={!item.external && isActivePath(pathname, item.href)}
              className="w-full px-4 py-3 text-base"
              external={item.external}
              href={item.href}
              key={item.href}
              label={getLocalizedText(item.label, locale)}
            />
          ))}
          <LocaleToggle className="mt-2 w-fit" />
        </nav>
      </div>
    </header>
  );
}
