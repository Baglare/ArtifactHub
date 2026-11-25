"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";
import type { Artifact } from "@/types/artifact";
import { demoRegistry } from "./registry";

/** The "try it here" block on a project page. Renders nothing for projects without a demo. */
export function DemoPanel({ artifact }: { artifact: Artifact }) {
  const { locale } = useLocale();
  if (!artifact.demo) return null;
  const demo = demoRegistry[artifact.demo.id];
  if (!demo) return null;
  const Demo = demo.component;

  return (
    <section className="glass min-w-0 overflow-hidden" id="demo">
      <header className="flex flex-col gap-2 px-6 pb-5 pt-6 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:pt-7">
        <div>
          <p className="demo-tag">{locale === "tr" ? "Sitede dene" : "Try it here"}</p>
          <h2 className="mt-2 text-[1.6rem] text-[var(--theme-text-primary)] sm:text-[1.9rem]">{getLocalizedText(demo.title, locale)}</h2>
        </div>
        <p className="text-[14px] text-[var(--theme-text-muted)]">{getLocalizedText(demo.controls, locale)}</p>
      </header>
      <div className="border-y border-[color:var(--hairline)] bg-[var(--ink)]">
        <Demo />
      </div>
      <p className="px-6 py-4 text-[14px] leading-relaxed text-[var(--theme-text-muted)] sm:px-8">{getLocalizedText(artifact.demo.note, locale)}</p>
    </section>
  );
}
