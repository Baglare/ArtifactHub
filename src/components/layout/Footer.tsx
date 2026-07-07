import { siteConfig } from "@/data/siteConfig";
import { ContentContainer } from "@/components/layout/ContentContainer";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--theme-border)] bg-[var(--theme-surface)]">
      <ContentContainer className="flex flex-col gap-3 py-6 text-sm text-[var(--theme-text-secondary)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-medium text-[var(--theme-text-primary)]">Baglare’s {siteConfig.title}</span>
          {" · "}
          {siteConfig.description.tr}
        </p>
        <a className="underline underline-offset-4 hover:text-[var(--theme-text-primary)]" href={siteConfig.links.github} rel="noreferrer" target="_blank">
          GitHub
        </a>
      </ContentContainer>
    </footer>
  );
}
