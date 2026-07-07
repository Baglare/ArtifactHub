import { PageShell } from "@/components/layout/PageShell";
import { NotFoundBlock } from "@/components/ui/NotFoundBlock";

export default function NotFoundPage() {
  return (
    <PageShell themeId="relic-core" variant="archive">
      <NotFoundBlock
        actionLabel="Artifact Arşivi"
        description="Artifact arşivine dönerek mevcut kayıtları inceleyebilirsin."
        href="/artifacts"
        secondaryActionLabel="Ana Sayfa"
        secondaryHref="/"
        title="Bu kayıt arşivde bulunamadı."
      />
    </PageShell>
  );
}
