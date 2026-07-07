import { PageShell } from "@/components/layout/PageShell";
import { NotFoundBlock } from "@/components/ui/NotFoundBlock";

export default function NotFoundPage() {
  return (
    <PageShell themeId="relic-core" variant="archive">
      <NotFoundBlock
        href="/artifacts"
        secondaryActionLabelKey="home"
        secondaryHref="/"
      />
    </PageShell>
  );
}
