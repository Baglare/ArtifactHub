"use client";

import type { ReactNode } from "react";
import { getUiText, type UiTextKey } from "@/data/uiText";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getThemeCssVariables } from "@/lib/themes";
import type { ThemeId } from "@/types/artifact";

type TechnicalPanelVariant = "default" | "technical" | "ethical" | "warning";

type TechnicalPanelProps = {
  title?: ReactNode;
  titleKey?: UiTextKey;
  description?: ReactNode;
  children?: ReactNode;
  variant?: TechnicalPanelVariant;
  themeId?: ThemeId;
};

const variantClasses: Record<TechnicalPanelVariant, string> = {
  default: "border-[color:var(--theme-border)]",
  technical: "border-[color:var(--theme-accent-primary)]",
  ethical: "border-[color:var(--theme-accent-tertiary)]",
  warning: "border-[color:var(--theme-accent-secondary)]"
};

export function TechnicalPanel({
  title,
  titleKey,
  description,
  children,
  variant = "default",
  themeId
}: TechnicalPanelProps) {
  const { locale } = useLocale();
  const themeStyle = themeId ? getThemeCssVariables(themeId) : undefined;
  const resolvedTitle = titleKey ? getUiText(titleKey, locale) : title;

  return (
    <section className={`min-w-0 border bg-[var(--theme-surface)] p-4 sm:p-5 ${variantClasses[variant]}`} style={themeStyle}>
      {resolvedTitle ? <h2 className="text-xl font-semibold text-[var(--theme-text-primary)]">{resolvedTitle}</h2> : null}
      {description ? <p className="mt-2 text-[var(--theme-text-secondary)]">{description}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
