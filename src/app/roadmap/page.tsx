import Link from "next/link";
import { PlannedExtensionsList } from "@/components/content/PlannedExtensionsList";
import { TechnicalPanel } from "@/components/content/TechnicalPanel";
import { LocalizedTextValue } from "@/components/i18n/LocalizedTextValue";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { roadmapPageText } from "@/data/pageText";
import { getAllArtifacts } from "@/lib/artifacts";
import { getAllSeries } from "@/lib/series";

export default function RoadmapPage() {
  const artifacts = getAllArtifacts().filter((artifact) => artifact.sections.plannedExtensions.length > 0);
  const series = getAllSeries().filter((seriesItem) => Boolean(seriesItem.plannedExtensions?.length));

  return (
    <PageShell themeId="relic-core" variant="archive">
      <SectionBlock
        eyebrow="Baglare’s ArtifactHub"
        title={<LocalizedTextValue text={roadmapPageText.heroTitle} />}
        description={<LocalizedTextValue text={roadmapPageText.heroDescription} />}
      />

      <div className="grid min-w-0 gap-5">
        <TechnicalPanel title={<LocalizedTextValue text={roadmapPageText.generalDirectionTitle} />} themeId="relic-core" variant="technical">
          <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
            {roadmapPageText.generalRoadmapItems.map((item) => (
              <li key={item.tr}>
                <LocalizedTextValue text={item} />
              </li>
            ))}
          </ul>
        </TechnicalPanel>

        <TechnicalPanel title={<LocalizedTextValue text={roadmapPageText.artifactExtensionsTitle} />} themeId="relic-core">
          <div className="grid gap-4">
            {artifacts.map((artifact) => (
              <section className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-4" key={artifact.id}>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    className="font-medium text-[var(--theme-text-primary)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)]"
                    href={`/artifacts/${artifact.slug}`}
                  >
                    {artifact.title}
                  </Link>
                  <StatusBadge statusId={artifact.statusId} variant="subtle" />
                </div>
                <div className="mt-4">
                  <PlannedExtensionsList plannedExtensions={artifact.sections.plannedExtensions} variant="compact" />
                </div>
              </section>
            ))}
          </div>
        </TechnicalPanel>

        <TechnicalPanel title={<LocalizedTextValue text={roadmapPageText.seriesExtensionsTitle} />} themeId="relic-core">
          <div className="grid gap-4">
            {series.map((seriesItem) => (
              <section className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-4" key={seriesItem.id}>
                <Link
                  className="font-medium text-[var(--theme-text-primary)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)]"
                  href={`/series/${seriesItem.slug}`}
                >
                  {seriesItem.title}
                </Link>
                {seriesItem.plannedExtensions?.length ? (
                  <div className="mt-4">
                    <PlannedExtensionsList plannedExtensions={seriesItem.plannedExtensions} variant="compact" />
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </TechnicalPanel>

        <TechnicalPanel
          title={<LocalizedTextValue text={roadmapPageText.visualPlanTitle} />}
          description={<LocalizedTextValue text={roadmapPageText.visualPlanDescription} />}
          themeId="relic-core"
        >
          <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
            {roadmapPageText.visualMaterialItems.map((item) => (
              <li key={item.tr}>
                <LocalizedTextValue text={item} />
              </li>
            ))}
          </ul>
        </TechnicalPanel>

        <TechnicalPanel
          title={<LocalizedTextValue text={roadmapPageText.languagePlanTitle} />}
          description={<LocalizedTextValue text={roadmapPageText.languagePlanDescription} />}
          themeId="relic-core"
        >
          <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
            {roadmapPageText.languageExpansionItems.map((item) => (
              <li key={item.tr}>
                <LocalizedTextValue text={item} />
              </li>
            ))}
          </ul>
        </TechnicalPanel>

        <TechnicalPanel
          title={<LocalizedTextValue text={roadmapPageText.registryStructureTitle} />}
          description={<LocalizedTextValue text={roadmapPageText.registryStructureDescription} />}
          themeId="relic-core"
          variant="technical"
        >
          <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
            {roadmapPageText.registryExpansionItems.map((item) => (
              <li key={item.tr}>
                <LocalizedTextValue text={item} />
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <ButtonLink href="/artifacts" labelKey="artifactArchive" variant="secondary" />
          </div>
        </TechnicalPanel>
      </div>
    </PageShell>
  );
}
