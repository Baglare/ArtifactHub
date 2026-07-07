export type Locale = "tr" | "en";

export type LocalizedText = {
  tr: string;
  en?: string;
};

export type ArtifactId = string;
export type ArtifactSlug = string;
export type SeriesId = string;
export type ThemeId = string;
export type StatusId = string;
export type FocusAreaId = string;
export type CategoryId = string;

export type FeaturedLevel = "primary" | "series-featured" | "normal";

export type TransformationFlow = {
  input: LocalizedText;
  process: LocalizedText;
  output: LocalizedText;
  compact?: LocalizedText;
};

export type ArchitectureStepKind =
  | "input"
  | "process"
  | "data"
  | "runtime"
  | "output"
  | "system";

export type ArchitectureStep = {
  label: string;
  kind?: ArchitectureStepKind;
  description?: LocalizedText;
};

export type ArchitectureFlow = {
  title?: LocalizedText;
  steps: ArchitectureStep[];
};

export type SectionContent = {
  title?: LocalizedText;
  body: LocalizedText;
};

export type DesignDecision = {
  title: LocalizedText;
  description: LocalizedText;
};

export type ArtifactSections = {
  overview: SectionContent;
  currentScope: SectionContent;
  coreSystems?: SectionContent;
  transformationDetails?: SectionContent;
  designDecisions: DesignDecision[];
  limitations: LocalizedText[];
  plannedExtensions: LocalizedText[];
  ethicalNotes?: LocalizedText[];
  visualNotes?: LocalizedText;
};

export type DataSensitivity = "none" | "voice" | "biometric-adjacent";

export type RiskProfile = {
  requiresEthicalNotes: boolean;
  dataSensitivity: DataSensitivity;
  publicClaimBoundary: LocalizedText;
};

export type ArtifactLinkType = "repository" | "demo" | "documentation" | "external";

export type ArtifactLink = {
  type: ArtifactLinkType;
  label: LocalizedText;
  href: string;
};

export type MediaType = "image" | "video" | "audio";

export type MediaItem = {
  type: MediaType;
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
};

export type Artifact = {
  id: ArtifactId;
  slug: ArtifactSlug;
  title: string;
  seriesId?: SeriesId;
  statusId: StatusId;
  categoryId: CategoryId;
  themeId: ThemeId;
  featuredLevel?: FeaturedLevel;
  order?: number;
  homeOrder?: number;
  summary: LocalizedText;
  positioning: LocalizedText;
  repoUrl?: string;
  demoUrl?: string;
  techStack: string[];
  focusAreaIds: FocusAreaId[];
  transformation?: TransformationFlow;
  coreSystems: string[];
  architectureFlow?: ArchitectureFlow;
  sections: ArtifactSections;
  riskProfile?: RiskProfile;
  links?: ArtifactLink[];
  media?: MediaItem[];
  createdAt?: string;
  updatedAt?: string;
};

export type SeriesTransformationModel = {
  title: LocalizedText;
  description: LocalizedText;
  steps: string[];
};

export type Series = {
  id: SeriesId;
  slug: string;
  title: string;
  summary: LocalizedText;
  positioning: LocalizedText;
  themeId: ThemeId;
  artifactIds?: ArtifactId[];
  featuredArtifactId?: ArtifactId;
  techTags?: string[];
  transformationModel?: SeriesTransformationModel;
  designDecisions?: DesignDecision[];
  limitations?: LocalizedText[];
  plannedExtensions?: LocalizedText[];
  order?: number;
};

export type ThemeColors = {
  background: string;
  surface: string;
  surfaceRaised: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentPrimary: string;
  accentSecondary: string;
  accentTertiary?: string;
};

export type SymbolId = string;
export type AnimationPresetId = string;
export type ThemeTexture = string;

export type Theme = {
  id: ThemeId;
  name: string;
  colors: ThemeColors;
  symbolId: SymbolId;
  animationPreset?: AnimationPresetId;
  texture?: ThemeTexture;
  tone?: LocalizedText;
};

export type StatusTone = "systems" | "product" | "pipeline" | "lab" | "vision";

export type Status = {
  id: StatusId;
  label: LocalizedText;
  description: LocalizedText;
  tone: StatusTone;
};

export type FocusArea = {
  id: FocusAreaId;
  label: LocalizedText;
  description?: LocalizedText;
  order?: number;
};

export type Category = {
  id: CategoryId;
  label: LocalizedText;
  description?: LocalizedText;
};

export type NavItem = {
  label: LocalizedText;
  href: string;
  external?: boolean;
};

export type SiteLinks = {
  github: string;
};

export type SiteHero = {
  title: string;
  subtitle: LocalizedText;
  description: LocalizedText;
  primaryCta: NavItem;
  secondaryCta: NavItem;
  focusTags: string[];
};

export type ProfileSummary = {
  displayName: string;
  shortBio: LocalizedText;
};

export type SiteConfig = {
  title: string;
  description: LocalizedText;
  defaultLocale: Locale;
  supportedLocales: Locale[];
  navigation: NavItem[];
  links: SiteLinks;
  hero: SiteHero;
  profile: ProfileSummary;
};
