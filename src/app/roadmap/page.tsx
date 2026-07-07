import Link from "next/link";
import { PlannedExtensionsList } from "@/components/content/PlannedExtensionsList";
import { TechnicalPanel } from "@/components/content/TechnicalPanel";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getAllArtifacts } from "@/lib/artifacts";
import { getAllSeries } from "@/lib/series";

const generalRoadmapItems = [
  "TR ilk sürümün tamamlanması",
  "Vercel yayını",
  "İngilizce içerik desteği için veri modelinin korunması",
  "Logo / relic core sembolünün iyileştirilmesi",
  "Görsel tema polish",
  "Responsive ve erişilebilirlik kontrolü"
];

const visualMaterialItems = [
  "TempoBlade combat ekran görüntüleri",
  "MediaTracker dashboard görselleri",
  "PulseForge beatmap visualization çıktıları",
  "VoxForge kalite raporu / local UI görselleri",
  "VisionForge detection UI görselleri"
];

const languageExpansionItems = [
  "İlk sürüm: Türkçe",
  "Sonraki genişletme: İngilizce artifact metinleri",
  "Route veya language switch ilk sürüm kapsamında değildir"
];

const registryExpansionItems = [
  "Yeni artifact: artifacts registry’ye eklenir",
  "Yeni seri: series registry’ye eklenir",
  "Yeni tema: themes registry’ye eklenir",
  "Sayfalar veri üzerinden genişler"
];

export default function RoadmapPage() {
  const artifacts = getAllArtifacts().filter((artifact) => artifact.sections.plannedExtensions.length > 0);
  const series = getAllSeries().filter((seriesItem) => Boolean(seriesItem.plannedExtensions?.length));

  return (
    <PageShell themeId="relic-core" variant="archive">
      <SectionBlock
        eyebrow="Baglare’s ArtifactHub"
        title="Yol Haritası"
        description="ArtifactHub ve bağlı artifactler; teknik diyagramlar, görsel materyaller, İngilizce içerik, yayın hazırlığı ve proje bazlı genişletmelerle zaman içinde büyütülecek."
      />

      <div className="grid gap-5">
        <TechnicalPanel title="ArtifactHub Geliştirme Yönü" themeId="relic-core" variant="technical">
          <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
            {generalRoadmapItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </TechnicalPanel>

        <TechnicalPanel title="Artifact Bazlı Genişletmeler" themeId="relic-core">
          <div className="grid gap-4">
            {artifacts.map((artifact) => (
              <section className="border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-4" key={artifact.id}>
                <div className="flex flex-wrap items-center gap-3">
                  <Link className="font-medium text-[var(--theme-text-primary)] underline underline-offset-4" href={`/artifacts/${artifact.slug}`}>
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

        <TechnicalPanel title="Seri Bazlı Genişletmeler" themeId="relic-core">
          <div className="grid gap-4">
            {series.map((seriesItem) => (
              <section className="border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] p-4" key={seriesItem.id}>
                <Link className="font-medium text-[var(--theme-text-primary)] underline underline-offset-4" href={`/series/${seriesItem.slug}`}>
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
          title="Görsel Materyal Planı"
          description="İlk sürüm video veya canlı demo kullanmadan çalışır. Sonraki genişletmelerde ekran görüntüleri, teknik diyagramlar ve kısa görsel çıktılar artifact sayfalarını güçlendirecek."
          themeId="relic-core"
        >
          <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
            {visualMaterialItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </TechnicalPanel>

        <TechnicalPanel
          title="Dil Genişletme Planı"
          description="İlk public sürüm Türkçe hazırlanır. Veri modeli, ileride İngilizce içerik alanları eklenebilecek şekilde korunur."
          themeId="relic-core"
        >
          <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
            {languageExpansionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </TechnicalPanel>

        <TechnicalPanel
          title="Genişleyebilir Arşiv Yapısı"
          description="Yeni artifact eklendiğinde arşiv, teknik odak haritası, seri ilişkileri ve detay sayfaları merkezi registry üzerinden genişleyebilir."
          themeId="relic-core"
          variant="technical"
        >
          <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
            {registryExpansionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-5">
            <ButtonLink href="/artifacts" variant="secondary">
              Artifact Arşivine Git
            </ButtonLink>
          </div>
        </TechnicalPanel>
      </div>
    </PageShell>
  );
}
