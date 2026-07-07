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
      tr: "Ham girdiyi analiz, ön işleme ve runtime katmanlarından geçirerek etkileşimli çıktılara dönüştüren deneysel artifact serisi."
    },
    positioning: {
      tr: "Audio, voice ve vision tabanlı veri dönüşüm prototiplerini aynı sistem fikri altında toplar."
    },
    techTags: ["Audio Analysis", "TTS", "Computer Vision", "Pipeline Design", "Local-first Labs"],
    transformationModel: {
      title: { tr: "Ortak Dönüşüm Modeli" },
      description: {
        tr: "Forge Series, farklı ham girdi türlerini analiz, ön işleme, ara veri ve runtime katmanları üzerinden etkileşimli çıktıya bağlar."
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
        title: { tr: "Ham veri doğrudan efekt olarak kullanılmaz." },
        description: { tr: "Her Forge artifact’i önce analiz veya ön işleme katmanı kurar." }
      },
      {
        title: { tr: "Ara veri veya kontrol katmanı üretilir." },
        description: {
          tr: "PulseForge beatmap, VoxForge voice profile ve kalite raporu, VisionForge detection ve gesture eventleri üretir."
        }
      },
      {
        title: { tr: "Local-first yaklaşım hassas girdilerde korunur." },
        description: {
          tr: "VoxForge ve VisionForge gibi ses/kamera projeleri production servis gibi değil, yerel ve kontrollü prototip olarak sunulur."
        }
      },
      {
        title: { tr: "Forge teması yalnızca görsel ortaklık değildir." },
        description: { tr: "Ortak teknik fikir input → process → output dönüşümüdür." }
      }
    ],
    limitations: [
      { tr: "Forge Series production servisler dizisi olarak sunulmaz." },
      { tr: "PulseForge final ritim oyunu değildir." },
      { tr: "VoxForge public voice cloning servisi değildir." },
      { tr: "VisionForge profesyonel güvenlik sistemi değildir." },
      {
        tr: "Serinin amacı farklı veri türlerini sistem tasarımına dönüştüren teknik prototipleri belgelemektir."
      }
    ],
    plannedExtensions: [
      { tr: "Forge Series için ortak dönüşüm diyagramı tasarlama" },
      { tr: "Üç artifact için aynı formatta teknik akış kartları hazırlama" },
      { tr: "PulseForge beatmap görseli ekleme" },
      { tr: "VoxForge kalite raporu görseli ekleme" },
      { tr: "VisionForge detection frame görseli ekleme" },
      { tr: "İleride yeni Forge artifact eklenebilir yapıyı koruma" }
    ],
    order: 1
  }
];
