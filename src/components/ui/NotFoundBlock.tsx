import { ButtonLink } from "@/components/ui/ButtonLink";

type NotFoundBlockProps = {
  title?: string;
  description?: string;
  href?: string;
  actionLabel?: string;
  secondaryHref?: string;
  secondaryActionLabel?: string;
};

export function NotFoundBlock({
  title = "Bu kayıt arşivde bulunamadı.",
  description = "Artifact arşivine dönerek mevcut kayıtları inceleyebilirsin.",
  href = "/artifacts",
  actionLabel = "Artifactlere Dön",
  secondaryHref,
  secondaryActionLabel
}: NotFoundBlockProps) {
  return (
    <div className="border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-6">
      <h1 className="text-2xl font-semibold text-[var(--theme-text-primary)]">{title}</h1>
      <p className="mt-3 text-[var(--theme-text-secondary)]">{description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <ButtonLink href={href}>
          {actionLabel}
        </ButtonLink>
        {secondaryHref && secondaryActionLabel ? (
          <ButtonLink href={secondaryHref} variant="secondary">
            {secondaryActionLabel}
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
}
