import type { ReactNode } from "react";
import { getThemeCssVariables } from "@/lib/themes";
import type { ThemeId } from "@/types/artifact";
import type { PageShellVariant } from "@/components/layout/PageShell";

type SectionBlockProps = {
  children?: ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
  themeId?: ThemeId;
  variant?: PageShellVariant;
};

const variantClasses: Record<PageShellVariant, string> = {
  default: "",
  artifact: "border-l-2 border-l-[color:var(--theme-accent-primary)] pl-4",
  series: "border-l-2 border-l-[color:var(--theme-accent-secondary)] pl-4",
  archive: ""
};

export function SectionBlock({
  children,
  eyebrow,
  title,
  description,
  themeId,
  variant = "default"
}: SectionBlockProps) {
  const themeStyle = themeId ? getThemeCssVariables(themeId) : undefined;

  return (
    <section className={`min-w-0 border-b border-[color:var(--theme-border)] py-8 ${variantClasses[variant]}`} style={themeStyle}>
      {eyebrow ? <p className="text-sm text-[var(--theme-text-muted)]">{eyebrow}</p> : null}
      {title ? <h1 className="mt-2 text-4xl font-semibold text-[var(--theme-text-primary)] md:text-5xl">{title}</h1> : null}
      {description ? <p className="mt-4 max-w-3xl text-[var(--theme-text-secondary)]">{description}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
