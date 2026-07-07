"use client";

import type { ReactNode } from "react";
import { getUiText } from "@/data/uiText";
import { useLocale } from "@/components/i18n/LocaleProvider";

type EmptyStateProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
};

export function EmptyState({
  title,
  description,
  action
}: EmptyStateProps) {
  const { locale } = useLocale();

  return (
    <div className="border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-6 text-[var(--theme-text-secondary)]">
      <p className="font-medium text-[var(--theme-text-primary)]">{title ?? getUiText("emptyArchive", locale)}</p>
      {description ? <p className="mt-2">{description}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
