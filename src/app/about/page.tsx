import { PageShell } from "@/components/layout/PageShell";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { siteConfig } from "@/data/siteConfig";

export default function AboutPage() {
  return (
    <PageShell themeId="relic-core" variant="archive">
      <SectionBlock title="Hakkında" description={siteConfig.profile.shortBio.tr} />
    </PageShell>
  );
}
