import type { Theme } from "@/types/artifact";

export const themes: Theme[] = [
  {
    id: "relic-core",
    name: "Relic Core",
    symbolId: "relic-core",
    animationPreset: "relic-glow",
    texture: "stone-noise",
    tone: { tr: "Gece mavisi zemin, kalay rengi çizgiler ve sakin bir teknik arşiv hissi.", en: "Night-blue ground, pewter lines, and a calm technical archive feel." },
    colors: {
      background: "#0B0E13",
      surface: "#11151C",
      surfaceRaised: "#171C25",
      border: "#262D39",
      textPrimary: "#E6E8EC",
      textSecondary: "#A6AEBB",
      textMuted: "#737C8B",
      accentPrimary: "#93ACD3",
      accentSecondary: "#D3DFF1"
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
    tone: { tr: "Gece laciverti lens camı, koyu indigo yüzeyler, kontrollü elektrik moru ve lavanta ile modern arcane-tech algılama hissi.", en: "Night-navy lens glass, dark-indigo surfaces, controlled electric purple, and lavender create a modern arcane-tech detection feel." },
    colors: {
      background: "#05051A",
      surface: "#0B0A2A",
      surfaceRaised: "#15113B",
      border: "#493781",
      textPrimary: "#F5EEFF",
      textSecondary: "#C2B7D8",
      textMuted: "#8D82A8",
      accentPrimary: "#9568FF",
      accentSecondary: "#E8A84D",
      accentTertiary: "#58C7D9"
    }
  },
  {
    id: "agent-grid",
    name: "Agent Grid",
    symbolId: "agent-grid",
    animationPreset: "grid-pulse",
    texture: "fine-grid",
    tone: { tr: "Zümrüt ızgara, adım adım öğrenen ajan izleri ve sakin bir laboratuvar hissi.", en: "Emerald grid, step-by-step agent traces, and a calm laboratory feel." },
    colors: {
      background: "#04080A",
      surface: "#0C1517",
      surfaceRaised: "#122024",
      border: "#1E3438",
      textPrimary: "#E6F5F1",
      textSecondary: "#9CB9B3",
      textMuted: "#62807A",
      accentPrimary: "#34D399",
      accentSecondary: "#22D3EE",
      accentTertiary: "#A3E635"
    }
  },
  {
    id: "chrono-wing",
    name: "Chrono Wing",
    symbolId: "chrono-wing",
    animationPreset: "wing-flutter",
    texture: "paper-grain",
    tone: { tr: "Kehribar arşiv kâğıdı, indigo zaman katmanları ve kanat çırpışıyla değişen tarih.", en: "Amber archive paper, indigo time layers, and history shifting with a wingbeat." },
    colors: {
      background: "#06060E",
      surface: "#10101F",
      surfaceRaised: "#17172B",
      border: "#2A2944",
      textPrimary: "#F2EEFF",
      textSecondary: "#ABA6C8",
      textMuted: "#716C92",
      accentPrimary: "#F5B45B",
      accentSecondary: "#818CF8",
      accentTertiary: "#F472B6"
    }
  },
  {
    id: "study-lumen",
    name: "Study Lumen",
    symbolId: "study-lumen",
    animationPreset: "soft-glow",
    texture: "paper-grain",
    tone: { tr: "Gece çalışma lambası, gök mavisi vurgu ve odaklı öğrenme ritmi.", en: "A late-night study lamp, sky-blue accents, and a focused learning rhythm." },
    colors: {
      background: "#05070D",
      surface: "#0E1320",
      surfaceRaised: "#141B2C",
      border: "#24304A",
      textPrimary: "#EEF3FF",
      textSecondary: "#A2AEC8",
      textMuted: "#6A7692",
      accentPrimary: "#60A5FA",
      accentSecondary: "#FBBF24",
      accentTertiary: "#A78BFA"
    }
  },
  {
    id: "fabric-lens",
    name: "Fabric Lens",
    symbolId: "fabric-lens",
    animationPreset: "mask-sweep",
    texture: "weave",
    tone: { tr: "Gül kurusu kumaş dokusu, turkuaz segmentasyon maskeleri ve ölçülü bir model değerlendirmesi.", en: "Dusty-rose fabric texture, turquoise segmentation masks, and measured model evaluation." },
    colors: {
      background: "#09060A",
      surface: "#171018",
      surfaceRaised: "#201622",
      border: "#372637",
      textPrimary: "#FBEFF5",
      textSecondary: "#C2A9B6",
      textMuted: "#87707C",
      accentPrimary: "#F472B6",
      accentSecondary: "#2DD4BF",
      accentTertiary: "#FDBA74"
    }
  },
  {
    id: "pet-glow",
    name: "Pet Glow",
    symbolId: "pet-glow",
    animationPreset: "bounce",
    texture: "none",
    tone: { tr: "Sıcak mercan parıltısı, küçük bir masaüstü yol arkadaşı ve sakin durum bildirimleri.", en: "Warm coral glow, a small desktop companion, and calm status notifications." },
    colors: {
      background: "#0A0605",
      surface: "#18100E",
      surfaceRaised: "#221714",
      border: "#3A2823",
      textPrimary: "#FFF1EA",
      textSecondary: "#C9AEA3",
      textMuted: "#8E736A",
      accentPrimary: "#FB923C",
      accentSecondary: "#F87171",
      accentTertiary: "#FDE68A"
    }
  }
];
