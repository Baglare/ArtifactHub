import type { Series } from "@/types/artifact";

export const series: Series[] = [
  {
    id: "forge",
    slug: "forge",
    title: "Forge Series",
    themeId: "relic-forge",
    featuredArtifactId: "pulseforge",
    artifactIds: ["pulseforge", "voxforge", "visionforge"],
    summary: {
      tr: "Forge Series, ses, voice profile ve kamera girdisini işleyip oynanabilir veya etkileşimli çıktılara bağlayan üç prototipi toplar.",
      en: "Forge Series brings together three prototypes that process audio, voice profile, and camera input into playable or interactive outputs."
    },
    positioning: {
      tr: "Audio, voice ve vision tabanlı veri dönüşüm prototiplerini aynı sistem fikri altında toplar.",
      en: "It groups audio, voice, and vision prototypes around the same input → processing → output model."
    },
    techTags: ["Audio Analysis", "TTS", "Computer Vision", "Pipeline Design", "Local-first Labs"],
    transformationModel: {
      title: { tr: "Ortak Dönüşüm Modeli", en: "Shared Transformation Model" },
      description: {
        tr: "Serideki prototipler ham girdiyi analiz eder, ara veri üretir ve sonucu runtime ya da demo katmanına taşır.",
        en: "Each Forge artifact starts with raw input, passes through analysis or preprocessing, and ends in a runtime or demo output."
      },
      steps: [
        "Raw Input",
        "Analysis / Preprocessing",
        "Structured Intermediate Data",
        "Runtime / Demo Layer",
        "Interactive Output"
      ]
    },
    designDecisions: [
      {
        title: { tr: "Ham veri doğrudan efekt olarak kullanılmaz.", en: "Raw data is not used directly as an effect." },
        description: { tr: "Her Forge artifact’i önce analiz veya ön işleme katmanı kurar.", en: "Each Forge artifact first builds an analysis or preprocessing layer." }
      },
      {
        title: { tr: "Ara veri veya kontrol katmanı üretilir.", en: "An intermediate data or control layer is produced." },
        description: {
          tr: "PulseForge beatmap, VoxForge voice profile ve kalite raporu, VisionForge detection ve gesture eventleri üretir.",
          en: "PulseForge produces beatmaps, VoxForge produces voice profiles and quality reports, and VisionForge produces detection and gesture events."
        }
      },
      {
        title: { tr: "Local-first yaklaşım hassas girdilerde korunur.", en: "The local-first approach is kept for sensitive inputs." },
        description: {
          tr: "VoxForge ve VisionForge gibi ses/kamera projeleri production servis gibi değil, yerel ve kontrollü prototip olarak sunulur.",
          en: "Voice and camera projects such as VoxForge and VisionForge are presented as local, controlled prototypes, not production services."
        }
      },
      {
        title: { tr: "Forge teması yalnızca görsel ortaklık değildir.", en: "The Forge theme is not only visual." },
        description: { tr: "Ortak teknik fikir input → process → output dönüşümüdür.", en: "The shared technical idea is input → process → output transformation." }
      }
    ],
    limitations: [
      { tr: "Forge Series production servisler dizisi olarak sunulmaz.", en: "Forge Series is not presented as a set of production services." },
      { tr: "PulseForge final ritim oyunu değildir.", en: "PulseForge is not a finished rhythm game." },
      { tr: "VoxForge public voice cloning servisi değildir.", en: "VoxForge is not a public voice cloning service." },
      { tr: "VisionForge profesyonel güvenlik sistemi değildir.", en: "VisionForge is not a professional security system." },
      {
        tr: "Serinin amacı farklı veri türlerini sistem tasarımına dönüştüren teknik prototipleri belgelemektir.",
        en: "The series documents technical prototypes built around turning different data types into system design."
      }
    ],
    plannedExtensions: [
      { tr: "Forge Series için ortak dönüşüm diyagramı tasarlama", en: "Design a shared transformation diagram for Forge Series" },
      { tr: "Üç artifact için aynı formatta teknik akış kartları hazırlama", en: "Prepare technical flow cards in the same format for all three artifacts" },
      { tr: "PulseForge beatmap görseli ekleme", en: "Add a PulseForge beatmap visual" },
      { tr: "VoxForge kalite raporu görseli ekleme", en: "Add a VoxForge quality report visual" },
      { tr: "VisionForge detection frame görseli ekleme", en: "Add a VisionForge detection frame visual" },
      { tr: "İleride yeni Forge artifact eklenebilir yapıyı koruma", en: "Keep the structure ready for future Forge artifacts" }
    ],
    order: 1
  }
];
