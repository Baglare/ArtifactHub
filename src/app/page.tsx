import { ArtifactLedger } from "@/components/artifacts/ArtifactLedger";
import { ArtifactGrid, FeaturedShowcase } from "@/components/artifacts/ArtifactGrid";
import { LocalizedTextValue } from "@/components/i18n/LocalizedTextValue";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock, SectionHeading } from "@/components/layout/SectionBlock";
import { SeriesCard } from "@/components/series/SeriesCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArtifactAstrolabe } from "@/components/visual/ArtifactAstrolabe";
import { homePageText } from "@/data/pageText";
import { siteConfig } from "@/data/siteConfig";
import { uiText } from "@/data/uiText";
import { getAllArtifacts, getArtifactsBySeries, getArtifactsForHome, getFeaturedArtifacts } from "@/lib/artifacts";
import { getSeriesBySlug } from "@/lib/series";

export default function HomePage() {
  const artifacts = getAllArtifacts();
  const featuredArtifacts = getFeaturedArtifacts("primary");
  const featuredIds = new Set(featuredArtifacts.map((artifact) => artifact.id));
  const archiveArtifacts = getArtifactsForHome().filter((artifact) => !featuredIds.has(artifact.id));
  const forgeSeries = getSeriesBySlug("forge");
  const forgeArtifacts = getArtifactsBySeries("forge");

  const demoArtifacts = artifacts.filter((artifact) => artifact.demo);
  const portrait = siteConfig.profile.portrait;

  const stats = [
    { value: artifacts.length, label: homePageText.statArtifacts },
    { value: artifacts.filter((artifact) => artifact.statusId === "live-product").length, label: homePageText.statLive },
    { value: artifacts.filter((artifact) => artifact.repoUrl).length, label: homePageText.statPublic }
  ];

  return (
    <PageShell themeId="relic-core" variant="archive">
      {/* First viewport: the person on the left (photo as light behind the name), the whole body of work on the right. */}
      <section className="relative grid min-w-0 gap-14 pb-20 pt-4 sm:pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:pb-28">
        <div className="relative min-w-0">
          {portrait ? (
            <div aria-hidden="true" className="hero-portrait reveal -right-[4%] -top-2 w-[46%] opacity-[0.4] sm:-right-[2%] sm:-top-10 sm:w-[44%] sm:opacity-[0.46] lg:-right-[29%] lg:-top-[150px] lg:w-[91%] lg:opacity-[0.5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" decoding="async" fetchPriority="high" src={portrait.src} />
            </div>
          ) : null}

          <div className="relative z-10">
            <h1 className="display reveal text-[3.1rem] text-[var(--theme-text-primary)] sm:text-[4.6rem] lg:text-[5.2rem]">
              <span className="block font-[family-name:var(--font-sans)] text-[0.36em] font-normal tracking-normal text-[var(--theme-text-secondary)]">
                <LocalizedTextValue text={homePageText.heroIntro} />
              </span>
              <span className="hero-name mt-3 block text-[var(--accent-bright)]">
                <LocalizedTextValue text={homePageText.heroName} />
              </span>
            </h1>

            <p className="reveal reveal-delay-1 mt-10 max-w-md text-[1.25rem] leading-snug text-[var(--theme-text-primary)] sm:text-[1.4rem]">
              <LocalizedTextValue text={homePageText.heroLead} />
            </p>
            <p className="reveal reveal-delay-2 mt-5 max-w-md text-[16.5px] leading-relaxed text-[var(--theme-text-secondary)]">
              <LocalizedTextValue text={homePageText.heroBody} />
            </p>

            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.hero.primaryCta.href}>
                <LocalizedTextValue text={siteConfig.hero.primaryCta.label} />
              </ButtonLink>
              <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="secondary">
                <LocalizedTextValue text={siteConfig.hero.secondaryCta.label} />
              </ButtonLink>
            </div>

            <dl className="reveal reveal-delay-3 mt-14 flex flex-wrap gap-x-10 gap-y-4">
              {stats.map((stat) => (
                <div className="flex flex-col gap-1" key={stat.label.tr}>
                  <dd className="tabular text-[1.9rem] font-medium leading-none text-[var(--theme-text-primary)]">{stat.value}</dd>
                  <dt className="text-[14px] text-[var(--theme-text-muted)]">
                    <LocalizedTextValue text={stat.label} />
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative z-10 mx-auto w-full max-w-[620px]">
          <ArtifactAstrolabe artifacts={artifacts} />
        </div>
      </section>

      <SectionBlock>
        <SectionHeading
          description={<LocalizedTextValue text={homePageText.featuredDescription} />}
          title={<LocalizedTextValue text={homePageText.featuredTitle} />}
        />
        <FeaturedShowcase artifacts={featuredArtifacts} />
      </SectionBlock>

      {demoArtifacts.length ? (
        <SectionBlock>
          <SectionHeading
            description={<LocalizedTextValue text={homePageText.demosDescription} />}
            title={<LocalizedTextValue text={homePageText.demosTitle} />}
          />
          <ArtifactGrid artifacts={demoArtifacts} />
        </SectionBlock>
      ) : null}

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
        <div className="glass relative overflow-hidden p-8 sm:p-12">
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
