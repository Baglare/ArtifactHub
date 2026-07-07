import { ArtifactGrid } from "@/components/artifacts/ArtifactGrid";
import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { getAllArtifacts } from "@/lib/artifacts";

export default function ArtifactsPage() {
  const artifacts = getAllArtifacts();

  return (
    <PageShell themeId="relic-core" variant="archive">
      <SectionBlock title="Artifactler">
        <ArtifactGrid artifacts={artifacts} showSeriesBadge showTransformation />
      </SectionBlock>
    </PageShell>
  );
}
