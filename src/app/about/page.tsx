import Link from "next/link";
import { TechnicalPanel } from "@/components/content/TechnicalPanel";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { siteConfig } from "@/data/siteConfig";
import { getAllArtifacts } from "@/lib/artifacts";
import { getFocusAreaById } from "@/lib/focusAreas";
import type { FocusArea, FocusAreaId } from "@/types/artifact";

const purposeItems = [
  "Artifact odaklı sunum",
  "Teknik kararların açık yazılması",
  "Bilinçli sınırların açık yazılması",
  "Yeni projelerle genişleyebilir registry yapısı"
];

const fallbackTechnicalInterestIds: FocusAreaId[] = [
  "gameplay-systems",
  "local-first-apps",
  "audio-processing",
  "voice-tools",
  "computer-vision"
];

const profilePanelItems = ["Artifact archive", "Game systems", "Local-first apps", "Audio / vision prototypes"];

export default function AboutPage() {
  const artifacts = getAllArtifacts();
  const technicalInterests = fallbackTechnicalInterestIds
    .map((focusAreaId) => getFocusAreaById(focusAreaId))
    .filter((focusArea): focusArea is FocusArea => Boolean(focusArea));

  return (
    <PageShell themeId="relic-core" variant="archive">
      <SectionBlock eyebrow="Baglare’s ArtifactHub" title="Baglare" description={siteConfig.profile.shortBio.tr}>
        <div className="grid gap-3 md:grid-cols-4">
          {profilePanelItems.map((item) => (
            <div className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-3 text-sm text-[var(--theme-text-secondary)]" key={item}>
              {item}
            </div>
          ))}
        </div>
      </SectionBlock>

      <div className="grid min-w-0 gap-5">
        <TechnicalPanel
          title="ArtifactHub’ın Amacı"
          description="ArtifactHub projeleri yalnızca sonuç ekranıyla anlatmaz. Her kayıt mevcut kapsamı, sistem akışını, mimari kararları, sınırları ve planlanan genişletmeleriyle tutulur."
          themeId="relic-core"
          variant="technical"
        >
          <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
            {purposeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </TechnicalPanel>

        <TechnicalPanel title="Teknik Odaklar" themeId="relic-core">
          <div className="grid gap-4 md:grid-cols-2">
            {technicalInterests.map((focusArea) => (
              <section className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-4" key={focusArea.id}>
                <h3 className="font-medium text-[var(--theme-text-primary)]">{focusArea.label.tr}</h3>
                {focusArea.description ? <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">{focusArea.description.tr}</p> : null}
              </section>
            ))}
          </div>
        </TechnicalPanel>

        <TechnicalPanel title="Mevcut Artifact Seti" themeId="relic-core">
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
                <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">{artifact.summary.tr}</p>
              </section>
            ))}
          </div>
        </TechnicalPanel>

        <TechnicalPanel title="Bağlantılar" themeId="relic-core">
          <div className="flex flex-wrap gap-3">
            <ButtonLink external href={siteConfig.links.github}>
              GitHub
            </ButtonLink>
            <ButtonLink href="/artifacts" variant="secondary">
              Artifact Arşivi
            </ButtonLink>
            <ButtonLink href="/series/forge" variant="secondary">
              Forge Serisi
            </ButtonLink>
          </div>
        </TechnicalPanel>
      </div>
    </PageShell>
  );
}
