import { siteConfig } from "@/data/siteConfig";
import { ContentContainer } from "@/components/layout/ContentContainer";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--theme-border)] bg-[var(--theme-surface)]">
      <ContentContainer className="flex flex-col gap-3 py-6 text-sm leading-relaxed text-[var(--theme-text-secondary)] sm:flex-row sm:items-center sm:justify-between">
        <p className="min-w-0">
          <span className="font-medium text-[var(--theme-text-primary)]">Baglare’s {siteConfig.title}</span>
          {" · "}
          {siteConfig.description.tr}
        </p>
        <a
          className="underline underline-offset-4 hover:text-[var(--theme-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)]"
          href={siteConfig.links.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </ContentContainer>
    </footer>
  );
}
