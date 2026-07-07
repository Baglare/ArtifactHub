import type { Metadata } from "next";
import { ArtifactArchive } from "@/components/artifacts/ArtifactArchive";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { getAllArtifacts } from "@/lib/artifacts";

export const metadata: Metadata = {
  title: "Artifact Arşivi"
};

export default function ArtifactsPage() {
  const artifacts = getAllArtifacts();

  return (
    <PageShell themeId="relic-core" variant="archive">
      <SectionBlock
        description="Bu arşiv; oyun sistemleri, local-first web uygulamaları, ses işleme araçları, TTS deneyleri ve bilgisayarlı görü prototiplerini bir arada tutar. Her artifact ne yaptığı, nasıl çalıştığı ve nerede sınırlı kaldığıyla belgelenir."
        title="Artifact Arşivi"
      >
        <p className="text-sm text-[var(--theme-text-muted)]">
          Baglare’s ArtifactHub içindeki kayıtlar merkezi artifact registry üzerinden okunur.
        </p>
      </SectionBlock>

      <ArtifactArchive artifacts={artifacts} />

      <section className="py-8">
        <p className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-4 text-sm text-[var(--theme-text-muted)]">
          Yeni artifactler registry’ye eklendiğinde arşiv sayfası otomatik olarak genişler.
        </p>
      </section>
    </PageShell>
  );
}
