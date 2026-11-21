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
              className="grid grid-cols-[3.25rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-1 px-1 py-5 sm:grid-cols-[4.5rem_minmax(0,1.1fr)_minmax(0,1fr)_auto_1.5rem] sm:items-center sm:px-3"
              href={`/artifacts/${artifact.slug}/`}
            >
              <span className="inscription tabular text-[12px] text-[var(--parchment-muted)]">{inventory}</span>
              <span className="min-w-0">
                <span className="block font-[family-name:var(--font-display)] text-[1.4rem] leading-tight text-[var(--parchment)]">{artifact.title}</span>
                <span className="mt-1 block truncate text-[15px] text-[var(--parchment-soft)] sm:hidden">
                  {category ? getLocalizedText(category.label, locale) : null}
                </span>
              </span>
              <span className="hidden min-w-0 truncate text-[15px] text-[var(--parchment-soft)] sm:block">
                {getLocalizedText(artifact.summary, locale)}
              </span>
              <span className="col-start-2 mt-1 sm:col-auto sm:mt-0">
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
