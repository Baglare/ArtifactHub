"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getUiText } from "@/data/uiText";
import { getLocalizedText } from "@/lib/i18n";
import type { Artifact } from "@/types/artifact";

type SeriesTransformationTableProps = {
  artifacts: Artifact[];
};

export function SeriesTransformationTable({ artifacts }: SeriesTransformationTableProps) {
  const { locale } = useLocale();
  const rows = artifacts.filter((artifact) => artifact.transformation);

  if (!rows.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="glass hidden overflow-hidden md:block">
        <table className="w-full table-fixed border-collapse text-left text-sm">
          <thead className="bg-[var(--obsidian-high)] text-[var(--theme-text-primary)]">
            <tr>
              <th className="border-b border-[color:var(--hairline)] p-3">Artifact</th>
              <th className="border-b border-[color:var(--hairline)] p-3">{getUiText("input", locale)}</th>
              <th className="border-b border-[color:var(--hairline)] p-3">{getUiText("process", locale)}</th>
              <th className="border-b border-[color:var(--hairline)] p-3">{getUiText("output", locale)}</th>
            </tr>
          </thead>
          <tbody className="text-[var(--theme-text-secondary)]">
            {rows.map((artifact) => (
              <tr className="border-b border-[color:var(--hairline)] last:border-b-0" key={artifact.id}>
                <td className="p-3 align-top">
                  <Link
                    className="font-medium text-[var(--theme-text-primary)] hover:text-[var(--theme-accent-primary)]"
                    href={`/artifacts/${artifact.slug}`}
                  >
                    {artifact.title}
                  </Link>
                </td>
                <td className="p-3 align-top">{getLocalizedText(artifact.transformation?.input, locale)}</td>
                <td className="p-3 align-top">{getLocalizedText(artifact.transformation?.process, locale)}</td>
                <td className="p-3 align-top">{getLocalizedText(artifact.transformation?.output, locale)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 md:hidden">
        {rows.map((artifact) => (
          <article className="glass-soft min-w-0 p-5" key={artifact.id}>
            <Link
              className="font-medium text-[var(--theme-text-primary)]"
              href={`/artifacts/${artifact.slug}`}
            >
              {artifact.title}
            </Link>
            <dl className="mt-3 space-y-3 text-sm text-[var(--theme-text-secondary)]">
              <div>
                <dt className="font-medium text-[var(--theme-text-muted)]">{getUiText("input", locale)}</dt>
                <dd>{getLocalizedText(artifact.transformation?.input, locale)}</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--theme-text-muted)]">{getUiText("process", locale)}</dt>
                <dd>{getLocalizedText(artifact.transformation?.process, locale)}</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--theme-text-muted)]">{getUiText("output", locale)}</dt>
                <dd>{getLocalizedText(artifact.transformation?.output, locale)}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
