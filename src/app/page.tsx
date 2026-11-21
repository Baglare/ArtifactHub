import { ArtifactLedger } from "@/components/artifacts/ArtifactLedger";
import { FeaturedShowcase } from "@/components/artifacts/ArtifactGrid";
import { TechnicalFocusMap } from "@/components/artifacts/TechnicalFocusMap";
import { LocalizedTextValue } from "@/components/i18n/LocalizedTextValue";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock, SectionHeading } from "@/components/layout/SectionBlock";
import { SeriesCard } from "@/components/series/SeriesCard";
import { SeriesTransformationTable } from "@/components/series/SeriesTransformationTable";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArtifactAstrolabe } from "@/components/visual/ArtifactAstrolabe";
import { homePageText } from "@/data/pageText";
import { siteConfig } from "@/data/siteConfig";
import { uiText } from "@/data/uiText";
import { getAllArtifacts, getArtifactsBySeries, getArtifactsForHome, getFeaturedArtifacts } from "@/lib/artifacts";
import { getSeriesBySlug } from "@/lib/series";
import type { FocusAreaId } from "@/types/artifact";

const selectedFocusAreaIds: FocusAreaId[] = [
  "voice-tools",
  "multiplayer-networking",
  "localization-tooling",
  "reinforcement-learning",
  "local-first-apps",
  "computer-vision",
  "gameplay-systems",
  "audio-processing"
];

export default function HomePage() {
  const artifacts = getAllArtifacts();
  const featuredArtifacts = getFeaturedArtifacts("primary");
  const featuredIds = new Set(featuredArtifacts.map((artifact) => artifact.id));
  const archiveArtifacts = getArtifactsForHome().filter((artifact) => !featuredIds.has(artifact.id));
  const forgeSeries = getSeriesBySlug("forge");
  const forgeArtifacts = getArtifactsBySeries("forge");

  const stats = [
    { value: artifacts.length, label: homePageText.statArtifacts },
    { value: featuredArtifacts.length, label: homePageText.statFeatured },
    { value: artifacts.filter((artifact) => artifact.statusId === "live-product").length, label: homePageText.statLive },
    { value: artifacts.filter((artifact) => artifact.repoUrl).length, label: homePageText.statPublic }
  ];

  return (
    <PageShell themeId="relic-core" variant="archive">
      {/* First viewport: the person on the left, the whole body of work as one instrument on the right. */}
      <section className="relative grid min-w-0 gap-10 pb-16 pt-2 sm:pt-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14 lg:pb-24">
        <div className="min-w-0">
          <h1 className="display reveal text-[3.1rem] text-[var(--theme-text-primary)] sm:text-[4.6rem] lg:text-[5.4rem]">
            <span className="block font-[family-name:var(--font-sans)] text-[0.36em] font-normal tracking-normal text-[var(--theme-text-secondary)]">
              <LocalizedTextValue text={homePageText.heroIntro} />
            </span>
            <span className="mt-3 block text-[var(--brass-bright)]">
              <LocalizedTextValue text={homePageText.heroName} />
            </span>
          </h1>

          <p className="reveal reveal-delay-1 mt-8 max-w-xl text-[1.3rem] leading-snug text-[var(--theme-text-primary)] sm:text-[1.5rem]">
            <LocalizedTextValue text={homePageText.heroLead} />
          </p>
          <p className="reveal reveal-delay-2 mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--theme-text-secondary)]">
            <LocalizedTextValue text={homePageText.heroBody} />
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.hero.primaryCta.href}>
              <LocalizedTextValue text={siteConfig.hero.primaryCta.label} />
            </ButtonLink>
            <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="secondary">
              <LocalizedTextValue text={siteConfig.hero.secondaryCta.label} />
            </ButtonLink>
          </div>

          <dl className="reveal reveal-delay-3 mt-12 grid grid-cols-2 gap-x-7 gap-y-3 sm:flex sm:flex-wrap border-t border-[color:var(--hairline)] pt-5">
            {stats.map((stat) => (
              <div className="flex items-baseline gap-2" key={stat.label.tr}>
                <dd className="tabular text-[1.75rem] font-medium leading-none text-[var(--brass)]">{stat.value}</dd>
                <dt className="text-[15px] text-[var(--theme-text-secondary)]">
                  <LocalizedTextValue text={stat.label} />
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal reveal-delay-2 mx-auto w-full max-w-[660px]">
          <ArtifactAstrolabe artifacts={artifacts} />
        </div>
      </section>

      <SectionBlock className="pt-16 sm:pt-24">
        <SectionHeading
          description={<LocalizedTextValue text={homePageText.featuredDescription} />}
          title={<LocalizedTextValue text={homePageText.featuredTitle} />}
        />
        <FeaturedShowcase artifacts={featuredArtifacts} />
      </SectionBlock>

      {forgeSeries ? (
        <SectionBlock>
          <SeriesCard
            actionLabel={<LocalizedTextValue text={homePageText.viewForgeSeries} />}
            artifacts={forgeArtifacts}
            series={forgeSeries}
            variant="wide"
          />
        </SectionBlock>
      ) : null}

      <SectionBlock>
        <SectionHeading
          action={
            <ButtonLink href="/artifacts" variant="secondary">
              <LocalizedTextValue text={homePageText.viewAllArtifacts} />
            </ButtonLink>
          }
          description={<LocalizedTextValue text={homePageText.archiveDescription} />}
          title={<LocalizedTextValue text={uiText.artifactArchive} />}
        />
        <ArtifactLedger artifacts={archiveArtifacts} inventoryOrder={artifacts} />
      </SectionBlock>

      <SectionBlock>
        <SectionHeading
          description={<LocalizedTextValue text={homePageText.transformationDescription} />}
          title={<LocalizedTextValue text={uiText.transformationFlow} />}
        />
        <SeriesTransformationTable artifacts={forgeArtifacts} />
      </SectionBlock>

      <SectionBlock>
        <SectionHeading
          description={<LocalizedTextValue text={homePageText.focusMapDescription} />}
          title={<LocalizedTextValue text={homePageText.focusMapTitle} />}
        />
        <TechnicalFocusMap artifacts={artifacts} focusAreaIds={selectedFocusAreaIds} />
      </SectionBlock>

      <SectionBlock>
        <div className="glass relative overflow-hidden p-8 sm:p-12">
          <span aria-hidden="true" className="accent-line" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-[2rem] text-[var(--theme-text-primary)] sm:text-[2.6rem]">
                <LocalizedTextValue text={homePageText.developmentDirectionTitle} />
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--theme-text-secondary)]">
                <LocalizedTextValue text={homePageText.developmentDirectionDescription} />
              </p>
              <ul className="bullet-list mt-6">
                {homePageText.roadmapPreviewItems.map((item) => (
                  <li key={item.tr}>
                    <LocalizedTextValue text={item} />
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink href="/roadmap" labelKey="roadmap" variant="secondary" />
          </div>
        </div>
      </SectionBlock>
    </PageShell>
  );
}
