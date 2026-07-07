import type { ReactNode } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { getThemeCssVariables } from "@/lib/themes";
import type { ThemeId } from "@/types/artifact";

export type PageShellVariant = "default" | "artifact" | "series" | "archive";

type PageShellProps = {
  children: ReactNode;
  themeId?: ThemeId;
  variant?: PageShellVariant;
};

const variantClasses: Record<PageShellVariant, string> = {
  default: "",
  artifact: "border-x border-[color:var(--theme-border)]",
  series: "border-x border-[color:var(--theme-border)]",
  archive: ""
};

export function PageShell({ children, themeId, variant = "default" }: PageShellProps) {
  const themeStyle = getThemeCssVariables(themeId);

  return (
    <div
      className={`min-h-[calc(100vh-9rem)] bg-[var(--theme-background)] text-[var(--theme-text-primary)] ${variantClasses[variant]}`}
      style={themeStyle}
    >
      <ContentContainer className="py-10">{children}</ContentContainer>
    </div>
  );
}
