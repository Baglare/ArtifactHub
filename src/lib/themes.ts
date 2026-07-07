import { themes } from "@/data/themes";
import type { Theme, ThemeId } from "@/types/artifact";
import type { CSSProperties } from "react";

type ThemeCssVariable =
  | "--theme-background"
  | "--theme-surface"
  | "--theme-surface-raised"
  | "--theme-border"
  | "--theme-text-primary"
  | "--theme-text-secondary"
  | "--theme-text-muted"
  | "--theme-accent-primary"
  | "--theme-accent-secondary"
  | "--theme-accent-tertiary";

export type ThemeCssVariables = CSSProperties & Record<ThemeCssVariable, string>;

export function getAllThemes(): Theme[] {
  return [...themes];
}

export function getThemeById(themeId: ThemeId): Theme | undefined {
  return themes.find((theme) => theme.id === themeId);
}

export function getThemeOrDefault(themeId?: ThemeId): Theme {
  const theme = themeId ? getThemeById(themeId) : undefined;
  if (theme) {
    return theme;
  }

  const defaultTheme = getThemeById("relic-core") ?? themes[0];
  if (!defaultTheme) {
    throw new Error("Theme registry is empty.");
  }

  return defaultTheme;
}

export function getThemeCssVariables(themeId?: ThemeId): ThemeCssVariables {
  const theme = getThemeOrDefault(themeId);

  return {
    "--theme-background": theme.colors.background,
    "--theme-surface": theme.colors.surface,
    "--theme-surface-raised": theme.colors.surfaceRaised,
    "--theme-border": theme.colors.border,
    "--theme-text-primary": theme.colors.textPrimary,
    "--theme-text-secondary": theme.colors.textSecondary,
    "--theme-text-muted": theme.colors.textMuted,
    "--theme-accent-primary": theme.colors.accentPrimary,
    "--theme-accent-secondary": theme.colors.accentSecondary,
    "--theme-accent-tertiary": theme.colors.accentTertiary ?? theme.colors.accentSecondary
  };
}
