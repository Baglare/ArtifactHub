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
  default: "",
  technical: "before:bg-[var(--theme-accent-primary)]",
  ethical: "before:bg-[var(--theme-accent-tertiary)]",
  warning: "before:bg-[var(--theme-accent-secondary)]"
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
    <section
      className={`glass min-w-0 p-6 sm:p-8 ${
        variant === "default" ? "" : "before:absolute before:left-0 before:top-8 before:h-8 before:w-[3px] before:rounded-r-full before:content-['']"
      } ${variantClasses[variant]}`}
      style={themeStyle}
    >
      {resolvedTitle ? <h2 className="text-xl font-semibold tracking-tight text-[var(--theme-text-primary)] sm:text-2xl">{resolvedTitle}</h2> : null}
      {description ? <p className="mt-2 text-[var(--theme-text-secondary)]">{description}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
