import type { Metadata } from "next";
import { ArtifactArchive } from "@/components/artifacts/ArtifactArchive";
import { LocalizedTextValue } from "@/components/i18n/LocalizedTextValue";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { artifactsPageText } from "@/data/pageText";
import { uiText } from "@/data/uiText";
import { getAllArtifacts } from "@/lib/artifacts";

export const metadata: Metadata = {
  title: "Artifact Arşivi"
};

export default function ArtifactsPage() {
  const artifacts = getAllArtifacts();

  return (
    <PageShell themeId="relic-core" variant="archive">
      <SectionBlock
        description={<LocalizedTextValue text={artifactsPageText.description} />}
        title={<LocalizedTextValue text={uiText.artifactArchive} />}
      >
        <p className="text-sm text-[var(--theme-text-muted)]">
          <LocalizedTextValue text={artifactsPageText.registryNote} />
        </p>
      </SectionBlock>

      <ArtifactArchive artifacts={artifacts} />

      <section className="py-8">
        <p className="min-w-0 border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-4 text-sm text-[var(--theme-text-muted)]">
          <LocalizedTextValue text={artifactsPageText.archiveNote} />
        </p>
      </section>
    </PageShell>
  );
}
