import type { ReactNode } from "react";
import { getThemeCssVariables } from "@/lib/themes";
import type { ThemeId } from "@/types/artifact";
import type { PageShellVariant } from "@/components/layout/PageShell";

type SectionBlockProps = {
  children?: ReactNode;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  themeId?: ThemeId;
  variant?: PageShellVariant;
  className?: string;
};

export function SectionBlock({ children, eyebrow, title, description, themeId, className }: SectionBlockProps) {
  const themeStyle = themeId ? getThemeCssVariables(themeId) : undefined;

  return (
    <section className={`min-w-0 py-10 sm:py-14 ${className ?? ""}`} style={themeStyle}>
      {title ? (
        <h1 className="display reveal text-[2.75rem] text-[var(--theme-text-primary)] sm:text-6xl md:text-7xl">
          {title}
          {eyebrow ? <span className="sr-only"> · {eyebrow}</span> : null}
        </h1>
      ) : null}
      {description ? (
        <p className="reveal reveal-delay-2 mt-6 max-w-3xl text-lg leading-relaxed text-[var(--theme-text-secondary)]">{description}</p>
      ) : null}
      {children ? <div className={title || description ? "mt-10" : ""}>{children}</div> : null}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="min-w-0">
        <h2 className="text-[2rem] text-[var(--theme-text-primary)] sm:text-[2.6rem]">{title}</h2>
        {description ? <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[var(--theme-text-secondary)]">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
