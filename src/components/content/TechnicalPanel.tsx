import type { ReactNode } from "react";
import { getThemeCssVariables } from "@/lib/themes";
import type { ThemeId } from "@/types/artifact";

type TechnicalPanelVariant = "default" | "technical" | "ethical" | "warning";

type TechnicalPanelProps = {
  title: string;
  description?: string;
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
  description,
  children,
  variant = "default",
  themeId
}: TechnicalPanelProps) {
  const themeStyle = themeId ? getThemeCssVariables(themeId) : undefined;

  return (
    <section className={`border bg-[var(--theme-surface)] p-5 ${variantClasses[variant]}`} style={themeStyle}>
      <h2 className="text-xl font-semibold text-[var(--theme-text-primary)]">{title}</h2>
      {description ? <p className="mt-2 text-[var(--theme-text-secondary)]">{description}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
