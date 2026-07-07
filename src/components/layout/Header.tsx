"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NavLink } from "@/components/navigation/NavLink";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[color:var(--theme-border)] bg-[var(--theme-surface)]">
      <ContentContainer className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link className="flex shrink-0 flex-col leading-none text-[var(--theme-text-primary)]" href="/">
            <span className="text-[10px] font-medium text-[var(--theme-accent-primary)]">Baglare’s</span>
            <span className="mt-0.5 font-semibold">{siteConfig.title}</span>
          </Link>

          <nav aria-label="Ana navigasyon" className="hidden items-center gap-4 md:flex">
            {siteConfig.navigation.map((item) => (
              <NavLink key={item.href} external={item.external} href={item.href} label={item.label.tr} />
            ))}
          </nav>

          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] px-3 py-2 text-sm font-medium text-[var(--theme-text-primary)] transition-colors hover:border-[color:var(--theme-accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)] md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            Menü
          </button>
        </div>

        <nav
          aria-label="Mobil navigasyon"
          className={`${isMenuOpen ? "grid" : "hidden"} mt-3 gap-2 border-t border-[color:var(--theme-border)] pt-3 md:hidden`}
        >
          {siteConfig.navigation.map((item) => (
            <NavLink
              className="border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] px-3 py-2"
              external={item.external}
              href={item.href}
              key={item.href}
              label={item.label.tr}
            />
          ))}
        </nav>
      </ContentContainer>
    </header>
  );
}
