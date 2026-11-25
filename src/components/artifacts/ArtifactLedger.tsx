"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getCategoryById } from "@/lib/categories";
import { getLocalizedText } from "@/lib/i18n";
import { getThemeCssVariables } from "@/lib/themes";
import type { Artifact } from "@/types/artifact";

type ArtifactLedgerProps = {
  artifacts: Artifact[];
  /** Full registry order, so inventory numbers match the astrolabe. */
  inventoryOrder: Artifact[];
};

/** The inventory book: one engraved line per project, numbered like a museum catalogue. */
export function ArtifactLedger({ artifacts, inventoryOrder }: ArtifactLedgerProps) {
  const { locale } = useLocale();

  return (
    <ol className="border-t border-[color:var(--hairline-strong)]">
      {artifacts.map((artifact) => {
        const inventory = `AH·${String(inventoryOrder.findIndex((item) => item.id === artifact.id) + 1).padStart(2, "0")}`;
        const category = getCategoryById(artifact.categoryId);
        return (
          <li className="ledger-row border-b border-[color:var(--hairline)]" key={artifact.id} style={getThemeCssVariables(artifact.themeId)}>
            <Link
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-2 px-1 py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto_1.5rem] sm:px-4"
              href={`/artifacts/${artifact.slug}/`}
            >
              <span className="tabular hidden text-[13px] text-[var(--fg-muted)] sm:block">{inventory}</span>
              <span className="min-w-0">
                <span className="block font-[family-name:var(--font-display)] text-[1.35rem] leading-tight text-[var(--fg)]">{artifact.title}</span>
                <span className="mt-1.5 block truncate text-[14.5px] text-[var(--fg-muted)]">
                  {category ? getLocalizedText(category.label, locale) : null}
                  {artifact.demo ? <span className="demo-tag ml-3">{locale === "tr" ? "Sitede dene" : "Try it"}</span> : null}
                </span>
              </span>
              <span className="justify-self-end">
                <StatusBadge statusId={artifact.statusId} variant="subtle" />
              </span>
              <svg aria-hidden="true" className="ledger-arrow hidden h-3 w-4 text-[var(--theme-accent-primary)] sm:block" fill="none" viewBox="0 0 16 12">
                <path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              </svg>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
