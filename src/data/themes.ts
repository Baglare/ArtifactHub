import type { Theme } from "@/types/artifact";

export const themes: Theme[] = [
  {
    id: "relic-core",
    name: "Relic Core",
    symbolId: "relic-core",
    animationPreset: "relic-glow",
    texture: "stone-noise",
    tone: { tr: "Obsidian taş, kırık mühür, soluk altın çizgiler ve teknik arşiv hissi.", en: "Obsidian stone, broken seal marks, pale gold lines, and a technical archive feel." },
    colors: {
      background: "#07070A",
      surface: "#171720",
      surfaceRaised: "#20202A",
      border: "#34313D",
      textPrimary: "#E8E1D5",
      textSecondary: "#A8A29A",
      textMuted: "#6F6A75",
      accentPrimary: "#C9A45C",
      accentSecondary: "#E07A2F"
    }
  },
  {
    id: "neon-blade-relic",
    name: "Neon Blade Relic",
    symbolId: "neon-blade",
    animationPreset: "slash-reveal",
    texture: "stone-noise",
    tone: { tr: "Antik savaş artifact’i, neon çatlak enerjisi ve keskin combat hissi.", en: "Ancient combat artifact, neon crack energy, and a sharp combat feel." },
    colors: {
      background: "#06040A",
      surface: "#120B18",
      surfaceRaised: "#1B1024",
      border: "#2A1B35",
      textPrimary: "#F2E9FF",
      textSecondary: "#B8A9C9",
      textMuted: "#7C6A8F",
      accentPrimary: "#8B5CF6",
      accentSecondary: "#EF4444",
      accentTertiary: "#22D3EE"
    }
  },
  {
    id: "archive-terminal",
    name: "Archive Terminal",
    symbolId: "archive-terminal",
    animationPreset: "archive-shift",
    texture: "grid",
    tone: { tr: "Local-first medya arşivi, sakin dashboard ve teknik katalog hissi.", en: "Local-first media archive, quiet dashboard, and technical catalog feel." },
    colors: {
      background: "#07111F",
      surface: "#0E1A2B",
      surfaceRaised: "#152338",
      border: "#26364F",
      textPrimary: "#EAF2FF",
      textSecondary: "#9FB0C7",
      textMuted: "#6E7F96",
      accentPrimary: "#38BDF8",
      accentSecondary: "#2DD4BF",
      accentTertiary: "#D6B56D"
    }
  },
  {
    id: "relic-forge",
    name: "Relic Forge",
    symbolId: "relic-forge",
    animationPreset: "forge-spark",
    texture: "forge-embers",
    tone: { tr: "Obsidian forge, amber enerji, üç artifact yuvası ve veri dönüşüm atölyesi hissi.", en: "Obsidian forge, amber energy, three artifact sockets, and a data transformation workshop feel." },
    colors: {
      background: "#080604",
      surface: "#15100B",
      surfaceRaised: "#21160D",
      border: "#3A2818",
      textPrimary: "#FFF0D8",
      textSecondary: "#B8A48B",
      textMuted: "#7C6B58",
      accentPrimary: "#F59E0B",
      accentSecondary: "#F97316",
      accentTertiary: "#B45309"
    }
  },
  {
    id: "forge-pulse",
    name: "Forge Pulse",
    symbolId: "forge-pulse",
    animationPreset: "waveform-pulse",
    texture: "waveform",
    tone: { tr: "Ses dalgası, örs, beat marker ve ritim-combat pipeline hissi.", en: "Waveform, anvil, beat markers, and a rhythm-combat pipeline feel." },
    colors: {
      background: "#090604",
      surface: "#17100A",
      surfaceRaised: "#24170B",
      border: "#3B2714",
      textPrimary: "#FFF3DF",
      textSecondary: "#B9A48E",
      textMuted: "#7E6B56",
      accentPrimary: "#F59E0B",
      accentSecondary: "#A855F7",
      accentTertiary: "#FB7185"
    }
  },
  {
    id: "sealed-voice-relic",
    name: "Sealed Voice Relic",
    symbolId: "sealed-voice",
    animationPreset: "seal-pulse",
    texture: "waveform",
    tone: { tr: "Mühürlü ses kristali, kontrollü local TTS lab’i ve izinli veri hissi.", en: "Sealed voice crystal, controlled local TTS lab, and consent-based data feel." },
    colors: {
      background: "#0D0715",
      surface: "#171020",
      surfaceRaised: "#21142D",
      border: "#332142",
      textPrimary: "#F7ECFF",
      textSecondary: "#BAA7C7",
      textMuted: "#7C688B",
      accentPrimary: "#A855F7",
      accentSecondary: "#FBBF24",
      accentTertiary: "#F472B6"
    }
  },
  {
    id: "guild-lens",
    name: "Guild Lens",
    symbolId: "guild-lens",
    animationPreset: "detection-scan",
    texture: "scanlines",
    tone: { tr: "Kamera lensi, detection frame, lonca mührü ve gesture tabanlı etkileşim hissi.", en: "Camera lens, detection frame, guild seal, and gesture-based interaction feel." },
    colors: {
      background: "#04100D",
      surface: "#0B1A16",
      surfaceRaised: "#10251F",
      border: "#1E3A33",
      textPrimary: "#E9FFF8",
      textSecondary: "#9DBBB2",
      textMuted: "#6B837B",
      accentPrimary: "#34D399",
      accentSecondary: "#F59E0B",
      accentTertiary: "#60A5FA"
    }
  }
];
