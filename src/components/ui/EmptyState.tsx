import type { ReactNode } from "react";

type EmptyStateProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
};

export function EmptyState({
  title = "Bu arşiv rafında henüz artifact yok.",
  description,
  action
}: EmptyStateProps) {
  return (
    <div className="border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-6 text-[var(--theme-text-secondary)]">
      <p className="font-medium text-[var(--theme-text-primary)]">{title}</p>
      {description ? <p className="mt-2">{description}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
