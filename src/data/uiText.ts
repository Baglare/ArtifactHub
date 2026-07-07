import { getLocalizedText, type Locale } from "@/lib/i18n";
import type { LocalizedText } from "@/types/artifact";

export type UiTextKey =
  | "viewArtifact"
  | "viewSeries"
  | "github"
  | "openOnGithub"
  | "githubRepository"
  | "artifactArchive"
  | "backToArchive"
  | "home"
  | "forgeSeries"
  | "seriesPage"
  | "roadmap"
  | "about"
  | "links"
  | "systemOverview"
  | "currentScope"
  | "coreSystems"
  | "technicalTags"
  | "input"
  | "process"
  | "output"
  | "transformationFlow"
  | "architectureFlow"
  | "designDecisions"
  | "ethicalBoundaries"
  | "limitations"
  | "plannedExtensions"
  | "sameSeriesArtifacts"
  | "sharedTransformationModel"
  | "featuredArtifact"
  | "artifactsInSeries"
  | "sharedDesignDecisions"
  | "quickFacts"
  | "role"
  | "status"
  | "series"
  | "category"
  | "mainInput"
  | "mainOutput"
  | "independentArtifact"
  | "theme"
  | "systemFlow"
  | "artifactSeries"
  | "seriesTheme"
  | "connectedArtifacts"
  | "publicClaimBoundary"
  | "archiveFilters"
  | "artifactListedSingular"
  | "artifactListedPlural"
  | "emptyArchive"
  | "changeFilter"
  | "notFoundTitle"
  | "notFoundDescription"
  | "menu"
  | "openMenu"
  | "closeMenu"
  | "language"
  | "primaryAction";

export const uiText: Record<UiTextKey, LocalizedText> = {
  viewArtifact: { tr: "Artifact’i İncele", en: "View Artifact" },
  viewSeries: { tr: "Seriyi İncele", en: "View Series" },
  github: { tr: "GitHub", en: "GitHub" },
  openOnGithub: { tr: "GitHub’da Aç", en: "Open on GitHub" },
  githubRepository: { tr: "GitHub Repository", en: "GitHub Repository" },
  artifactArchive: { tr: "Artifact Arşivi", en: "Artifact Archive" },
  backToArchive: { tr: "Arşive Dön", en: "Back to Archive" },
  home: { tr: "Ana Sayfa", en: "Home" },
  forgeSeries: { tr: "Forge Serisi", en: "Forge Series" },
  seriesPage: { tr: "Seri Sayfası", en: "Series Page" },
  roadmap: { tr: "Yol Haritası", en: "Roadmap" },
  about: { tr: "Hakkında", en: "About" },
  links: { tr: "Bağlantılar", en: "Links" },
  systemOverview: { tr: "Sistem Özeti", en: "System Overview" },
  currentScope: { tr: "Mevcut Kapsam", en: "Current Scope" },
  coreSystems: { tr: "Ana Sistemler", en: "Core Systems" },
  technicalTags: { tr: "Teknik Etiketler", en: "Technical Tags" },
  input: { tr: "Girdi", en: "Input" },
  process: { tr: "İşleme", en: "Process" },
  output: { tr: "Çıktı", en: "Output" },
  transformationFlow: { tr: "Girdi → İşleme → Çıktı", en: "Input → Process → Output" },
  architectureFlow: { tr: "Mimari Akış", en: "Architecture Flow" },
  designDecisions: { tr: "Tasarım Kararları", en: "Design Decisions" },
  ethicalBoundaries: { tr: "Etik / Kullanım Sınırları", en: "Ethical / Use Boundaries" },
  limitations: { tr: "Sınırlar", en: "Limitations" },
  plannedExtensions: { tr: "Planlanan Genişletmeler", en: "Planned Extensions" },
  sameSeriesArtifacts: { tr: "Aynı Serideki Artifactler", en: "Artifacts in the Same Series" },
  sharedTransformationModel: { tr: "Ortak Dönüşüm Modeli", en: "Shared Transformation Model" },
  featuredArtifact: { tr: "Öne Çıkan Artifact", en: "Featured Artifact" },
  artifactsInSeries: { tr: "Serideki Artifactler", en: "Artifacts in This Series" },
  sharedDesignDecisions: { tr: "Ortak Tasarım Kararları", en: "Shared Design Decisions" },
  quickFacts: { tr: "Kısa Bilgiler", en: "Quick Facts" },
  role: { tr: "Rol", en: "Role" },
  status: { tr: "Durum", en: "Status" },
  series: { tr: "Seri", en: "Series" },
  category: { tr: "Kategori", en: "Category" },
  mainInput: { tr: "Ana Girdi", en: "Main Input" },
  mainOutput: { tr: "Ana Çıktı", en: "Main Output" },
  independentArtifact: { tr: "Bağımsız artifact", en: "Independent artifact" },
  theme: { tr: "Tema", en: "Theme" },
  systemFlow: { tr: "Sistem akışı", en: "System flow" },
  artifactSeries: { tr: "Artifact serisi", en: "Artifact series" },
  seriesTheme: { tr: "Seri teması", en: "Series theme" },
  connectedArtifacts: { tr: "Bağlı artifactler", en: "Linked artifacts" },
  publicClaimBoundary: { tr: "Public claim sınırı", en: "Public claim boundary" },
  archiveFilters: { tr: "Artifact filtreleri", en: "Artifact filters" },
  artifactListedSingular: { tr: "artifact listeleniyor.", en: "artifact listed." },
  artifactListedPlural: { tr: "artifact listeleniyor.", en: "artifacts listed." },
  emptyArchive: { tr: "Bu arşiv rafında henüz artifact yok.", en: "There are no artifacts on this archive shelf yet." },
  changeFilter: {
    tr: "Filtreyi değiştirerek diğer artifactleri görüntüleyebilirsin.",
    en: "Change the filter to view other artifacts."
  },
  notFoundTitle: { tr: "Bu kayıt arşivde bulunamadı.", en: "This record was not found in the archive." },
  notFoundDescription: {
    tr: "Artifact arşivine dönerek mevcut kayıtları inceleyebilirsin.",
    en: "Return to the artifact archive to browse the available records."
  },
  menu: { tr: "Menü", en: "Menu" },
  openMenu: { tr: "Menüyü aç", en: "Open menu" },
  closeMenu: { tr: "Menüyü kapat", en: "Close menu" },
  language: { tr: "Dil", en: "Language" },
  primaryAction: { tr: "Birincil aksiyon", en: "Primary action" }
};

export function getUiText(key: UiTextKey, locale: Locale): string {
  return getLocalizedText(uiText[key], locale);
}
