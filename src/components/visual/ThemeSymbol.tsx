import { getThemeOrDefault } from "@/lib/themes";
import type { SymbolId, ThemeId } from "@/types/artifact";

type ThemeSymbolSize = "sm" | "md" | "lg";

type ThemeSymbolProps = {
  themeId?: ThemeId;
  symbolId?: SymbolId;
  size?: ThemeSymbolSize;
  animated?: boolean;
  decorative?: boolean;
  className?: string;
};

type SymbolDefinition = {
  label: string;
  mark: string;
};

const symbolDefinitions: Record<string, SymbolDefinition> = {
  "relic-core": { label: "Relic Core", mark: "RC" },
  "neon-blade": { label: "Neon Blade", mark: "/" },
  "archive-terminal": { label: "Archive Terminal", mark: "AT" },
  "relic-forge": { label: "Relic Forge", mark: "RF" },
  "forge-pulse": { label: "Forge Pulse", mark: "~" },
  "sealed-voice": { label: "Sealed Voice", mark: "SV" },
  "guild-lens": { label: "Guild Lens", mark: "GL" }
};

const sizeClasses: Record<ThemeSymbolSize, string> = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-base",
  lg: "h-20 w-20 text-xl"
};

export function ThemeSymbol({
  themeId,
  symbolId,
  size = "md",
  animated = false,
  decorative = true,
  className
}: ThemeSymbolProps) {
  const resolvedSymbolId = symbolId ?? getThemeOrDefault(themeId).symbolId;
  const symbol = symbolDefinitions[resolvedSymbolId] ?? symbolDefinitions["relic-core"];

  return (
    <div
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : symbol.label}
      className={[
        "inline-flex shrink-0 items-center justify-center border border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] font-semibold text-[var(--theme-accent-primary)]",
        sizeClasses[size],
        className
      ]
        .filter(Boolean)
        .join(" ")}
      data-animated-placeholder={animated ? "true" : undefined}
      role={decorative ? undefined : "img"}
    >
      {/* TODO: Replace placeholder marks with final theme symbol artwork in a later milestone. */}
      <span>{symbol.mark}</span>
    </div>
  );
}
