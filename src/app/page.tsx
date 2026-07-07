import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { siteConfig } from "@/data/siteConfig";
import { getAllArtifacts, getArtifactsForHome, validateArtifactRegistry } from "@/lib/artifacts";

export default function HomePage() {
  const artifacts = getAllArtifacts();
  const homeArtifacts = getArtifactsForHome();
  const validation = validateArtifactRegistry();

  return (
    <PageShell themeId="relic-core" variant="archive">
      <SectionBlock eyebrow={siteConfig.hero.subtitle.tr} title={siteConfig.hero.title} description={siteConfig.hero.description.tr}>
        <div className="space-y-2 text-[var(--theme-text-secondary)]">
          <p>Toplam artifact: {artifacts.length}</p>
          <p>Registry durumu: {validation.valid ? "Geçerli" : "Kontrol gerekli"}</p>
        </div>
      </SectionBlock>

      <SectionBlock title="Öncelikli artifact sırası">
        <ArtifactGrid artifacts={homeArtifacts} variant="compact" />
      </SectionBlock>
    </PageShell>
  );
}
