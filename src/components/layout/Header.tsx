import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NavLink } from "@/components/navigation/NavLink";

export function Header() {
  return (
    <header className="border-b border-[color:var(--theme-border)] bg-[var(--theme-surface)]">
      <ContentContainer className="flex flex-wrap items-center gap-4 py-3">
        <Link className="flex flex-col leading-none text-[var(--theme-text-primary)]" href="/">
          <span className="text-[10px] font-medium text-[var(--theme-accent-primary)]">Baglare’s</span>
          <span className="mt-0.5 font-semibold">{siteConfig.title}</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4">
          {siteConfig.navigation.map((item) => (
            <NavLink key={item.href} external={item.external} href={item.href} label={item.label.tr} />
          ))}
        </nav>
      </ContentContainer>
    </header>
  );
}
