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
  path: string;
};

// Minimal line glyphs per theme; drawn with currentColor so they inherit the artifact accent.
const symbolDefinitions: Record<string, SymbolDefinition> = {
  "relic-core": { label: "Relic Core", path: "M12 3 20 8v8l-8 5-8-5V8l8-5Zm0 5-4 2.5v3L12 16l4-2.5v-3L12 8Z" },
  "neon-blade": { label: "Neon Blade", path: "M5 19 19 5M14 5h5v5M8 13l3 3M6 15l3 3" },
  "archive-terminal": { label: "Archive Terminal", path: "M4 5h16v14H4zM7.5 9.5 10 12l-2.5 2.5M12 15h4.5" },
  "relic-forge": { label: "Relic Forge", path: "M12 3c2 3 5 4.5 5 9a5 5 0 0 1-10 0c0-2.2 1-3.6 2.2-4.8.3 1.8 1.2 2.8 2.3 3.3C11 8.5 11.3 5.6 12 3Z" },
  "forge-pulse": { label: "Forge Pulse", path: "M3 12h3.5l2-5 3.5 10 2.5-7 1.5 2H21" },
  "sealed-voice": { label: "Sealed Voice", path: "M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3Zm-6 8a6 6 0 0 0 12 0M12 18v2.5" },
  "guild-lens": { label: "Guild Lens", path: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Zm9.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" },
  "agent-grid": { label: "Agent Grid", path: "M4 4h16v16H4zM4 9.3h16M4 14.6h16M9.3 4v16M14.6 4v16M6.6 17.3l5.3-5.3 5.4-5.3" },
  "chrono-wing": { label: "Chrono Wing", path: "M12 7v12M12 9C9.5 4.5 4 4 3.5 7s1.8 5 5 5c-2.6 1-3.6 4-1.6 5.5S11 17 12 14c1 3 3.1 5 5.1 3.5s1-4.5-1.6-5.5c3.2 0 5.5-2 5-5S14.5 4.5 12 9Z" },
  "study-lumen": { label: "Study Lumen", path: "M3 6.5 12 3l9 3.5-9 3.5-9-3.5ZM7 8.3V13c0 1.6 2.2 3 5 3s5-1.4 5-3V8.3M21 6.5V12" },
  "fabric-lens": { label: "Fabric Lens", path: "M9 4 12 6l3-2 5 3-2 4-2-1v10H8V10l-2 1-2-4 5-3Z" },
  "pet-glow": { label: "Pet Glow", path: "M12 20c-4 0-7-2.4-7-5.6C5 11 8 8.5 12 8.5s7 2.5 7 5.9c0 3.2-3 5.6-7 5.6ZM7 9.5 6 4.5l4 3M17 9.5l1-5-4 3M9.7 14h.01M14.3 14h.01" }
};

const sizeClasses: Record<ThemeSymbolSize, string> = {
  sm: "h-10 w-10 rounded-xl [&>svg]:h-[18px] [&>svg]:w-[18px]",
  md: "h-12 w-12 rounded-2xl [&>svg]:h-5 [&>svg]:w-5",
  lg: "h-16 w-16 rounded-[1.25rem] [&>svg]:h-7 [&>svg]:w-7"
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
        "relative inline-grid shrink-0 place-items-center border border-[color:color-mix(in_srgb,var(--theme-accent-primary)_30%,transparent)] text-[var(--theme-accent-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_-14px_var(--theme-accent-primary)]",
        "bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--theme-accent-primary)_28%,transparent),color-mix(in_srgb,var(--theme-accent-secondary)_10%,transparent)_70%)]",
        sizeClasses[size],
        className
      ]
        .filter(Boolean)
        .join(" ")}
      data-symbol-animated={animated ? "true" : undefined}
      role={decorative ? undefined : "img"}
    >
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d={symbol.path} />
      </svg>
    </div>
  );
}
