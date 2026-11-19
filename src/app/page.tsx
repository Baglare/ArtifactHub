import { ArtifactGrid, FeaturedShowcase } from "@/components/artifacts/ArtifactGrid";
import { TechnicalFocusMap } from "@/components/artifacts/TechnicalFocusMap";
import { LocalizedTextValue } from "@/components/i18n/LocalizedTextValue";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock, SectionHeading } from "@/components/layout/SectionBlock";
import { SeriesCard } from "@/components/series/SeriesCard";
import { SeriesTransformationTable } from "@/components/series/SeriesTransformationTable";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArtifactOrbit } from "@/components/visual/ArtifactOrbit";
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
  const marqueeTags = Array.from(new Set(artifacts.flatMap((artifact) => artifact.techStack))).slice(0, 28);

  const stats = [
    { value: artifacts.length, label: homePageText.statArtifacts },
    { value: featuredArtifacts.length, label: homePageText.statFeatured },
    { value: artifacts.filter((artifact) => artifact.statusId === "live-product").length, label: homePageText.statLive },
    { value: artifacts.filter((artifact) => artifact.repoUrl).length, label: homePageText.statPublic }
  ];

  return (
    <PageShell themeId="relic-core" variant="archive">
      {/* Hero */}
      <section className="relative grid min-w-0 gap-12 pb-16 pt-6 sm:pt-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:pb-24">
        <div className="min-w-0">
          <h1 className="display reveal mt-2 text-[3.2rem] text-[var(--theme-text-primary)] sm:text-7xl lg:text-[5.4rem]">
            <span className="block text-[0.42em] font-medium tracking-tight text-[var(--theme-text-secondary)]">
              <LocalizedTextValue text={homePageText.heroIntro} />
            </span>
            <span className="serif-accent text-gradient mt-2 block pr-2 text-[1.08em] leading-[1.05]">
              <LocalizedTextValue text={homePageText.heroName} />
            </span>
          </h1>

          <p className="reveal reveal-delay-1 mt-8 max-w-2xl text-xl leading-relaxed text-[var(--theme-text-primary)] sm:text-2xl">
            <LocalizedTextValue text={homePageText.heroLead} />
          </p>
          <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-[var(--theme-text-secondary)]">
            <LocalizedTextValue text={homePageText.heroBody} />
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.hero.primaryCta.href}>
              <LocalizedTextValue text={siteConfig.hero.primaryCta.label} /> <span aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="secondary">
              <LocalizedTextValue text={siteConfig.hero.secondaryCta.label} />
            </ButtonLink>
          </div>

          <dl className="reveal reveal-delay-3 mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div className="flex min-w-0 flex-col-reverse" key={stat.label.tr}>
                <dt className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--theme-text-muted)]">
                  <LocalizedTextValue text={stat.label} />
                </dt>
                <dd className="text-4xl font-semibold tracking-tight text-[var(--theme-text-primary)]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal reveal-delay-2 mx-auto w-full max-w-[460px]">
          <ArtifactOrbit artifacts={artifacts} />
          <div className="mt-6 flex flex-col items-center gap-3 text-center">
            <p className="max-w-xs text-sm leading-snug text-[var(--theme-text-secondary)]">
              <LocalizedTextValue text={homePageText.orbitHint} />
            </p>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--theme-text-muted)]">
              <li className="inline-flex items-center gap-2">
                <span className="orbit-legend__dot h-3 w-3 shadow-[0_0_10px_var(--theme-accent-primary)]" />
                <LocalizedTextValue text={homePageText.orbitLegendMature} />
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="orbit-legend__dot h-2 w-2" />
                <LocalizedTextValue text={homePageText.orbitLegendGrowing} />
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="orbit-legend__dot h-1 w-1" />
                <LocalizedTextValue text={homePageText.orbitLegendEarly} />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech marquee */}
      <div aria-hidden="true" className="marquee -mx-4 overflow-hidden py-2 sm:-mx-6 lg:-mx-8">
        <div className="marquee__track">
          {[...marqueeTags, ...marqueeTags].map((tag, index) => (
            <span className="chip whitespace-nowrap px-4 py-2 text-sm" key={`${tag}-${index}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <SectionBlock className="pt-20 sm:pt-28">
        <SectionHeading
          description={<LocalizedTextValue text={homePageText.featuredDescription} />}
          eyebrow={<LocalizedTextValue text={homePageText.featuredEyebrow} />}
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
          eyebrow={<LocalizedTextValue text={homePageText.archiveEyebrow} />}
          title={<LocalizedTextValue text={uiText.artifactArchive} />}
        />
        <ArtifactGrid artifacts={archiveArtifacts} showSeriesBadge variant="compact" />
      </SectionBlock>

      <SectionBlock>
        <SectionHeading
          description={<LocalizedTextValue text={homePageText.transformationDescription} />}
          eyebrow={<LocalizedTextValue text={homePageText.forgeEyebrow} />}
          title={<LocalizedTextValue text={uiText.transformationFlow} />}
        />
        <SeriesTransformationTable artifacts={forgeArtifacts} />
      </SectionBlock>

      <SectionBlock>
        <SectionHeading
          description={<LocalizedTextValue text={homePageText.focusMapDescription} />}
          eyebrow={<LocalizedTextValue text={homePageText.focusEyebrow} />}
          title={<LocalizedTextValue text={homePageText.focusMapTitle} />}
        />
        <TechnicalFocusMap artifacts={artifacts} focusAreaIds={selectedFocusAreaIds} />
      </SectionBlock>

      <SectionBlock>
        <div className="glass relative overflow-hidden p-8 sm:p-12">
          <span aria-hidden="true" className="accent-line" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">
                <LocalizedTextValue text={homePageText.directionEyebrow} />
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--theme-text-primary)] sm:text-4xl">
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
