import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NavLink } from "@/components/navigation/NavLink";

export function Header() {
  return (
    <header className="border-b border-[color:var(--theme-border)] bg-[var(--theme-surface)]">
      <ContentContainer className="flex flex-wrap items-center gap-x-4 gap-y-3 py-3">
        <Link
          className="flex shrink-0 flex-col leading-none text-[var(--theme-text-primary)]"
          href="/"
        >
          <span className="text-[10px] font-medium text-[var(--theme-accent-primary)]">Baglare’s</span>
          <span className="mt-0.5 font-semibold">{siteConfig.title}</span>
        </Link>
        <nav
          aria-label="Ana navigasyon"
          className="flex min-w-0 flex-1 flex-wrap items-center justify-start gap-x-3 gap-y-2 sm:justify-end"
        >
          {siteConfig.navigation.map((item) => (
            <NavLink key={item.href} external={item.external} href={item.href} label={item.label.tr} />
          ))}
        </nav>
      </ContentContainer>
    </header>
  );
}
