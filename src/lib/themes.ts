import { themes } from "@/data/themes";
import type { Theme, ThemeId } from "@/types/artifact";

export function getAllThemes(): Theme[] {
  return [...themes];
}

export function getThemeById(themeId: ThemeId): Theme | undefined {
  return themes.find((theme) => theme.id === themeId);
}

export function getThemeOrDefault(themeId: ThemeId): Theme {
  const theme = getThemeById(themeId);
  if (theme) {
    return theme;
  }

  const defaultTheme = themes[0];
  if (!defaultTheme) {
    throw new Error("Theme registry is empty.");
  }

  return defaultTheme;
}
