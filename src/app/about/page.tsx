import Link from "next/link";
import { TechnicalPanel } from "@/components/content/TechnicalPanel";
import { LocalizedTextValue } from "@/components/i18n/LocalizedTextValue";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { aboutPageText } from "@/data/pageText";
import { siteConfig } from "@/data/siteConfig";
import { getAllArtifacts } from "@/lib/artifacts";
import { getFocusAreaById } from "@/lib/focusAreas";
import type { FocusArea, FocusAreaId } from "@/types/artifact";

const fallbackTechnicalInterestIds: FocusAreaId[] = [
  "gameplay-systems",
  "local-first-apps",
  "audio-processing",
  "voice-tools",
  "computer-vision"
];

export default function AboutPage() {
  const artifacts = getAllArtifacts();
  const technicalInterests = fallbackTechnicalInterestIds
    .map((focusAreaId) => getFocusAreaById(focusAreaId))
    .filter((focusArea): focusArea is FocusArea => Boolean(focusArea));

  return (
    <PageShell themeId="relic-core" variant="archive">
      <SectionBlock eyebrow="Baglare’s ArtifactHub" title="Baglare" description={<LocalizedTextValue text={siteConfig.profile.shortBio} />}>
        <div className="grid gap-3 md:grid-cols-4">
          {aboutPageText.profilePanelItems.map((item) => (
            <div className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-3 text-sm text-[var(--theme-text-secondary)]" key={item.tr}>
              <LocalizedTextValue text={item} />
            </div>
          ))}
        </div>
      </SectionBlock>

      <div className="grid min-w-0 gap-5">
        <TechnicalPanel
          title={<LocalizedTextValue text={aboutPageText.purposeTitle} />}
          description={<LocalizedTextValue text={aboutPageText.purposeDescription} />}
          themeId="relic-core"
          variant="technical"
        >
          <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
            {aboutPageText.purposeItems.map((item) => (
              <li key={item.tr}>
                <LocalizedTextValue text={item} />
              </li>
            ))}
          </ul>
        </TechnicalPanel>

        <TechnicalPanel title={<LocalizedTextValue text={aboutPageText.technicalFocusTitle} />} themeId="relic-core">
          <div className="grid gap-4 md:grid-cols-2">
            {technicalInterests.map((focusArea) => (
              <section className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-4" key={focusArea.id}>
                <h3 className="font-medium text-[var(--theme-text-primary)]">
                  <LocalizedTextValue text={focusArea.label} />
                </h3>
                {focusArea.description ? (
                  <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">
                    <LocalizedTextValue text={focusArea.description} />
                  </p>
                ) : null}
              </section>
            ))}
          </div>
        </TechnicalPanel>

        <TechnicalPanel title={<LocalizedTextValue text={aboutPageText.currentArtifactSetTitle} />} themeId="relic-core">
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
                <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">
                  <LocalizedTextValue text={artifact.summary} />
                </p>
              </section>
            ))}
          </div>
        </TechnicalPanel>

        <TechnicalPanel titleKey="links" themeId="relic-core">
          <div className="flex flex-wrap gap-3">
            <ButtonLink external href={siteConfig.links.github} labelKey="github" />
            <ButtonLink href="/artifacts" labelKey="artifactArchive" variant="secondary" />
            <ButtonLink href="/series/forge" labelKey="forgeSeries" variant="secondary" />
          </div>
        </TechnicalPanel>
      </div>
    </PageShell>
  );
}
