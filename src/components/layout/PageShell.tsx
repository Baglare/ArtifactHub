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

export function PageShell({ children, themeId, variant = "default" }: PageShellProps) {
  const themeStyle = getThemeCssVariables(themeId);
  const hasThemeGlow = false;

  return (
    <div className="relative min-h-[calc(100vh-9rem)] text-[var(--theme-text-primary)]" style={themeStyle}>
      {hasThemeGlow ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-70"
          style={{
            background:
              "radial-gradient(60% 70% at 70% 0%, color-mix(in srgb, var(--theme-accent-primary) 22%, transparent), transparent 70%), radial-gradient(40% 60% at 15% 10%, color-mix(in srgb, var(--theme-accent-secondary) 14%, transparent), transparent 70%)"
          }}
        />
      ) : null}
      <ContentContainer className="relative pb-20 pt-10 sm:pt-14">{children}</ContentContainer>
    </div>
  );
}
