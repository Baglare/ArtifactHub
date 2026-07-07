import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NavLink } from "@/components/navigation/NavLink";

export function Header() {
  return (
    <header className="border-b border-[color:var(--theme-border)] bg-[var(--theme-surface)]">
      <ContentContainer className="flex flex-wrap items-center gap-4 py-4">
        <Link className="font-semibold text-[var(--theme-text-primary)]" href="/">
          {siteConfig.title}
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
