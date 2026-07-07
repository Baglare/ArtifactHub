import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { TechnicalFocusMap } from "@/components/artifacts/TechnicalFocusMap";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { SeriesCard } from "@/components/series/SeriesCard";
import { SeriesTransformationTable } from "@/components/series/SeriesTransformationTable";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ThemeSymbol } from "@/components/visual/ThemeSymbol";
import { siteConfig } from "@/data/siteConfig";
import { getAllArtifacts, getArtifactsBySeries, getArtifactsForHome, getFeaturedArtifacts } from "@/lib/artifacts";
import { getSeriesBySlug } from "@/lib/series";
import type { FocusAreaId } from "@/types/artifact";

const selectedFocusAreaIds: FocusAreaId[] = [
  "gameplay-systems",
  "local-first-apps",
  "audio-processing",
  "computer-vision",
  "pipeline-tooling"
];

const roadmapPreviewItems = [
  "TR ilk sürümün tamamlanması",
  "Forge Series teknik diyagramları",
  "Proje görselleri / ekran çıktıları",
  "İngilizce içerik desteği",
  "Vercel yayını"
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
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm text-[var(--theme-text-muted)]">{siteConfig.hero.subtitle.tr}</p>
            <h1 className="mt-3 text-4xl font-semibold text-[var(--theme-text-primary)] md:text-5xl">{siteConfig.hero.title}</h1>
            <p className="mt-5 max-w-3xl text-[var(--theme-text-secondary)]">{siteConfig.hero.description.tr}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.hero.primaryCta.href}>{siteConfig.hero.primaryCta.label.tr}</ButtonLink>
              <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="secondary">
                {siteConfig.hero.secondaryCta.label.tr}
              </ButtonLink>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {siteConfig.hero.focusTags.map((tag) => (
                <li
                  className="border border-[color:var(--theme-border)] bg-[var(--theme-surface)] px-3 py-1 text-sm text-[var(--theme-text-secondary)]"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-6">
            <div className="flex items-start gap-4">
              <ThemeSymbol themeId="relic-core" size="lg" />
              <div>
                <p className="text-sm text-[var(--theme-text-muted)]">Dijital artifact arşivi</p>
                <p className="mt-2 text-lg font-medium text-[var(--theme-text-primary)]">
                  Sistem kapsamı, akış, karar ve sınırları tek registry üzerinden okunur.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-[var(--theme-text-secondary)]">
              <div className="border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-3">
                Veri odaklı artifact kaydı
              </div>
              <div className="border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-3">
                Tema ve teknik rol üzerinden genişleyebilir yapı
              </div>
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-[var(--theme-text-primary)]">Öne Çıkan Girişler</h2>
          <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">
            ArtifactHub, iki bağımsız artifact ve Forge Series üzerinden farklı teknik sistemleri sergiler.
          </p>
        </div>

        <div className="grid gap-4">
          <ArtifactGrid artifacts={featuredArtifacts} showTransformation variant="featured" />
          {forgeSeries ? (
            <SeriesCard actionLabel="Forge Serisini İncele" artifacts={forgeArtifacts} series={forgeSeries} variant="wide" />
          ) : null}
        </div>
      </SectionBlock>

      <SectionBlock>
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--theme-text-primary)]">Artifact Arşivi</h2>
            <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">
              Her artifact; mevcut kapsamı, sistem akışı, teknik kararları ve sınırlarıyla birlikte sunulur.
            </p>
          </div>
          <ButtonLink href="/artifacts" variant="secondary">
            Tüm Artifactleri Gör
          </ButtonLink>
        </div>

        <ArtifactGrid artifacts={homeArtifacts} showRepoLink showSeriesBadge showTransformation variant="compact" />
      </SectionBlock>

      <SectionBlock>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-[var(--theme-text-primary)]">Girdi → İşleme → Çıktı</h2>
          <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">
            Forge Series’in ortak mantığı, ham girdiyi analiz ve ön işleme katmanlarından geçirerek etkileşimli çıktıya
            dönüştürmektir.
          </p>
        </div>

        <SeriesTransformationTable artifacts={forgeArtifacts} />
      </SectionBlock>

      <SectionBlock>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-[var(--theme-text-primary)]">Teknik Odak Haritası</h2>
          <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">
            ArtifactHub’daki artifactler, teknik rollerine göre farklı odak alanlarında gruplanır.
          </p>
        </div>

        <TechnicalFocusMap artifacts={artifacts} focusAreaIds={selectedFocusAreaIds} />
      </SectionBlock>

      <SectionBlock>
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--theme-text-primary)]">Geliştirme Yönü</h2>
            <p className="mt-3 max-w-3xl text-[var(--theme-text-secondary)]">
              ArtifactHub ve bağlı artifactler; teknik diyagramlar, görsel materyaller, İngilizce içerik ve proje bazlı
              genişletmelerle genişletilecek.
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
              {roadmapPreviewItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ButtonLink href="/roadmap" variant="secondary">
            Yol Haritasını Gör
          </ButtonLink>
        </div>
      </SectionBlock>
    </PageShell>
  );
}
