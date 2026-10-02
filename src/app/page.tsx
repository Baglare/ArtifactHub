import Image from "next/image";
import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { TechnicalFocusMap } from "@/components/artifacts/TechnicalFocusMap";
import { LocalizedTextValue } from "@/components/i18n/LocalizedTextValue";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { SeriesCard } from "@/components/series/SeriesCard";
import { SeriesTransformationTable } from "@/components/series/SeriesTransformationTable";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homePageText } from "@/data/pageText";
import { siteConfig } from "@/data/siteConfig";
import { uiText } from "@/data/uiText";
import { getAllArtifacts, getArtifactsBySeries, getArtifactsForHome, getFeaturedArtifacts } from "@/lib/artifacts";
import { getSeriesBySlug } from "@/lib/series";
import type { FocusAreaId } from "@/types/artifact";

const selectedFocusAreaIds: FocusAreaId[] = [
  "localization-tooling",
  "ai-governance",
  "release-engineering",
  "gameplay-systems",
  "local-first-apps",
  "audio-processing",
  "computer-vision",
  "pipeline-tooling"
];

export default function HomePage() {
  const artifacts = getAllArtifacts();
  const homeArtifacts = getArtifactsForHome();
  const featuredArtifacts = getFeaturedArtifacts("primary");
  const forgeSeries = getSeriesBySlug("forge");
  const forgeArtifacts = getArtifactsBySeries("forge");

  return (
    <PageShell themeId="relic-core" variant="archive">
      <SectionBlock>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="min-w-0">
            <div>
              <p className="text-sm font-medium leading-none text-[var(--theme-accent-primary)]">Baglare’s</p>
              <h1 className="mt-1 text-4xl font-semibold text-[var(--theme-text-primary)] md:text-5xl">{siteConfig.hero.title}</h1>
            </div>
            <p className="mt-3 text-sm text-[var(--theme-text-muted)]">
              <LocalizedTextValue text={siteConfig.hero.subtitle} />
            </p>
            <p className="mt-5 max-w-3xl text-[var(--theme-text-secondary)]">
              <LocalizedTextValue text={siteConfig.hero.description} />
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.hero.primaryCta.href}>
                <LocalizedTextValue text={siteConfig.hero.primaryCta.label} />
              </ButtonLink>
              <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="secondary">
                <LocalizedTextValue text={siteConfig.hero.secondaryCta.label} />
              </ButtonLink>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {siteConfig.hero.focusTags.map((tag) => (
                <li
                  className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] px-3 py-1 text-sm text-[var(--theme-text-secondary)]"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-4 sm:p-6">
            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
              <div className="shrink-0 self-start border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-2 sm:self-center">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-24 w-24 object-contain opacity-90 sm:h-28 sm:w-28"
                  height={160}
                  priority
                  src="/images/artifacthub-relic-core.png"
                  width={160}
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-[var(--theme-text-muted)]">
                  <LocalizedTextValue text={homePageText.heroPanelEyebrow} />
                </p>
                <p className="mt-2 text-lg font-medium text-[var(--theme-text-primary)]">
                  <LocalizedTextValue text={homePageText.heroPanelLead} />
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-[var(--theme-text-secondary)]">
              {homePageText.heroPanelItems.map((item) => (
                <div className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-3" key={item.tr}>
                  <LocalizedTextValue text={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-[var(--theme-text-primary)]">
            <LocalizedTextValue text={homePageText.featuredTitle} />
          </h2>
          <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">
            <LocalizedTextValue text={homePageText.featuredDescription} />
          </p>
        </div>

        <div className="grid gap-4">
          <ArtifactGrid artifacts={featuredArtifacts} showTransformation variant="featured" />
          {forgeSeries ? (
            <SeriesCard
              actionLabel={<LocalizedTextValue text={homePageText.viewForgeSeries} />}
              artifacts={forgeArtifacts}
              series={forgeSeries}
              variant="wide"
            />
          ) : null}
        </div>
      </SectionBlock>

      <SectionBlock>
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--theme-text-primary)]">
              <LocalizedTextValue text={uiText.artifactArchive} />
            </h2>
            <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">
              <LocalizedTextValue text={homePageText.archiveDescription} />
            </p>
          </div>
          <ButtonLink href="/artifacts" variant="secondary">
            <LocalizedTextValue text={homePageText.viewAllArtifacts} />
          </ButtonLink>
        </div>

        <ArtifactGrid artifacts={homeArtifacts} showRepoLink showSeriesBadge showTransformation variant="compact" />
      </SectionBlock>

      <SectionBlock>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-[var(--theme-text-primary)]">
            <LocalizedTextValue text={uiText.transformationFlow} />
          </h2>
          <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">
            <LocalizedTextValue text={homePageText.transformationDescription} />
          </p>
        </div>

        <SeriesTransformationTable artifacts={forgeArtifacts} />
      </SectionBlock>

      <SectionBlock>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-[var(--theme-text-primary)]">
            <LocalizedTextValue text={homePageText.focusMapTitle} />
          </h2>
          <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">
            <LocalizedTextValue text={homePageText.focusMapDescription} />
          </p>
        </div>

        <TechnicalFocusMap artifacts={artifacts} focusAreaIds={selectedFocusAreaIds} />
      </SectionBlock>

      <SectionBlock>
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--theme-text-primary)]">
              <LocalizedTextValue text={homePageText.developmentDirectionTitle} />
            </h2>
            <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">
              <LocalizedTextValue text={homePageText.developmentDirectionDescription} />
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
              {homePageText.roadmapPreviewItems.map((item) => (
                <li key={item.tr}>
                  <LocalizedTextValue text={item} />
                </li>
              ))}
            </ul>
          </div>
          <ButtonLink href="/roadmap" labelKey="roadmap" variant="secondary" />
        </div>
      </SectionBlock>
    </PageShell>
  );
}
