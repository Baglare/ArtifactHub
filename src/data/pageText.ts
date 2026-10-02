import type { LocalizedText } from "@/types/artifact";

export const homePageText = {
  heroPanelEyebrow: { tr: "Dijital artifact arşivi", en: "Digital artifact archive" },
  heroPanelLead: {
    tr: "Uygulanmış kapsam, mimari karar ve doğrulama sınırları her projede görünürdür.",
    en: "Implemented scope, architectural decisions, and validation boundaries are visible for each project."
  },
  heroPanelItems: [
    {
      tr: "Araçlar, ürünler ve mühendislik vaka çalışmaları",
      en: "Tools, products, and engineering case studies"
    },
    {
      tr: "Erken aşama ve deneysel çalışmalarda açık olgunluk sınırları",
      en: "Explicit maturity boundaries for early-stage and experimental work"
    }
  ],
  featuredTitle: { tr: "Öne Çıkan Girişler", en: "Featured Entries" },
  featuredDescription: {
    tr: "GameLocalizer, KnowledgeCompiler ve MediaTracker; yerelleştirme, AI yönetişimi ve ürün mühendisliği çalışmalarını temsil eder.",
    en: "GameLocalizer, KnowledgeCompiler, and MediaTracker represent localization, AI governance, and product engineering work."
  },
  viewForgeSeries: { tr: "Forge Serisini İncele", en: "View Forge Series" },
  archiveDescription: {
    tr: "Her kayıt, artifact’in amacı, çalışma biçimi, sınırları ve sonraki yönünü açıkça gösterir.",
    en: "Each record shows the artifact’s purpose, working model, limits, and next direction."
  },
  viewAllArtifacts: { tr: "Tüm Artifactleri Gör", en: "View All Artifacts" },
  transformationDescription: {
    tr: "Forge Series’in ortak mantığı, ham girdiyi analiz ve ön işleme katmanlarından geçirerek etkileşimli çıktıya dönüştürmektir.",
    en: "Forge Series follows a shared model: raw input passes through analysis and preprocessing layers, then becomes interactive output."
  },
  focusMapTitle: { tr: "Teknik Odak Haritası", en: "Technical Focus Map" },
  focusMapDescription: {
    tr: "ArtifactHub’daki kayıtlar, hangi sistem alanına dokunduklarına göre okunabilir.",
    en: "ArtifactHub records can be read by the system areas they touch."
  },
  developmentDirectionTitle: { tr: "Geliştirme Yönü", en: "Development Direction" },
  developmentDirectionDescription: {
    tr: "Sonraki içerik çalışmaları, proje durumlarını güncel tutmaya ve teknik kanıtları daha anlaşılır sunmaya odaklanır.",
    en: "Upcoming content work focuses on keeping project states current and making technical evidence easier to follow."
  },
  roadmapPreviewItems: [
    {
      tr: "Kaynak README ve kabul sınırlarıyla içerikleri güncel tutma",
      en: "Keep content aligned with source READMEs and acceptance boundaries"
    },
    {
      tr: "TR/EN kapsam ve olgunluk bilgisini birlikte koruma",
      en: "Maintain scope and maturity information in both TR/EN"
    },
    {
      tr: "Hassas veri içermeyen teknik diyagram ve release kanıtları ekleme",
      en: "Add technical diagrams and release evidence without sensitive data"
    }
  ]
} satisfies Record<string, LocalizedText | LocalizedText[]>;

export const artifactsPageText = {
  description: {
    tr: "Geliştirici araçları, AI altyapısı, local-first ürünler, masaüstü mimarisi ve yerelleştirme mühendisliği; oyun, ses ve bilgisayarlı görü çalışmalarıyla birlikte belgelenir. Her kayıt uygulanmış kapsamı ve kendi olgunluk sınırını gösterir.",
    en: "Developer tooling, AI infrastructure, local-first products, desktop architecture, and localization engineering are documented alongside game, audio, and computer-vision work. Each entry shows implemented scope and its own maturity boundary."
  },
  registryNote: {
    tr: "Baglare’s ArtifactHub içindeki kayıtlar merkezi artifact registry üzerinden okunur.",
    en: "Records inside Baglare’s ArtifactHub are read from the central artifact registry."
  },
  archiveNote: {
    tr: "Yeni artifactler registry’ye eklendiğinde arşiv sayfası otomatik olarak genişler.",
    en: "When new artifacts are added to the registry, the archive page expands automatically."
  }
};

export const seriesPageText = {
  artifactsDescription: {
    tr: "Bu seri içindeki artifactler, farklı ham girdi türlerini işlenebilir teknik akışlara dönüştürür.",
    en: "Artifacts in this series turn different raw input types into processable technical flows."
  },
  transformationDescription: {
    tr: "Her artifact farklı bir ham girdi türünü analiz veya ön işleme katmanından geçirerek etkileşimli çıktıya bağlar.",
    en: "Each artifact passes a different raw input type through analysis or preprocessing, then connects it to interactive output."
  }
};

export const roadmapPageText = {
  heroTitle: { tr: "Yol Haritası", en: "Roadmap" },
  heroDescription: {
    tr: "2026-10-02 itibarıyla planlanan içerik, teknik diyagram ve doğrulama çalışmaları. Proje bazlı sonraki adımlar aşağıda ayrı sunulur.",
    en: "Planned content, technical diagrams, and validation work as of 2026-10-02. Next steps for individual projects are listed separately below."
  },
  generalDirectionTitle: { tr: "ArtifactHub Geliştirme Yönü", en: "ArtifactHub Development Direction" },
  generalRoadmapItems: [
    {
      tr: "Kaynak projelerin scope ve release durumuyla registry’yi eşitleme",
      en: "Align the registry with source-project scope and release state"
    },
    {
      tr: "Deneysel, erken aşama ve kabul edilmiş kapsamı ayrı tutma",
      en: "Keep experimental, early-stage, and accepted scope distinct"
    },
    {
      tr: "TR/EN içerik ve taksonomi bütünlüğünü koruma",
      en: "Maintain TR/EN content and taxonomy integrity"
    },
    {
      tr: "Sistem mimarisi ve doğrulama akışlarını diyagramlaştırma",
      en: "Diagram system architecture and validation workflows"
    },
    {
      tr: "Responsive ve erişilebilirlik kontrolünü sürdürme",
      en: "Continue responsive and accessibility review"
    }
  ],
  artifactExtensionsTitle: { tr: "Artifact Bazlı Genişletmeler", en: "Artifact-based Extensions" },
  seriesExtensionsTitle: { tr: "Seri Bazlı Genişletmeler", en: "Series-based Extensions" },
  visualPlanTitle: { tr: "Görsel Materyal Planı", en: "Visual Material Plan" },
  visualPlanDescription: {
    tr: "Sonraki materyaller teknik akış, QA ve release kanıtını açıklamalıdır. Private kaynak içerik, ses/biometrik veri ve credential görselleri paylaşılmaz.",
    en: "Future material should explain technical flows, QA, and release evidence. Private source content, voice/biometric data, and credentials are excluded."
  },
  visualMaterialItems: [
    {
      tr: "GameLocalizer güvenli apply / patch akışı",
      en: "GameLocalizer safe apply / patch flow"
    },
    {
      tr: "KnowledgeCompiler authority / context / transaction diyagramı",
      en: "KnowledgeCompiler authority / context / transaction diagram"
    },
    {
      tr: "MediaTracker local-first / cloud / recommendation sınırları",
      en: "MediaTracker local-first / cloud / recommendation boundaries"
    },
    {
      tr: "PoD sentetik QA ve paket doğrulama örnekleri",
      en: "PoD synthetic QA and package verification examples"
    },
    {
      tr: "Forge Series için hassas veri içermeyen runtime/lab görselleri",
      en: "Forge Series runtime/lab visuals without sensitive data"
    }
  ],
  languagePlanTitle: {
    tr: "Dil Kapsamı ve Bakımı",
    en: "Language Coverage and Maintenance"
  },
  languagePlanDescription: {
    tr: "Türkçe ve İngilizce içeriklerde aynı kapsam, olgunluk ve sınırlama bilgisini koruma.",
    en: "Keep scope, maturity, and limitation information equivalent in Turkish and English."
  },
  languageExpansionItems: [
    {
      tr: "TR/EN artifact, status ve category metinleri mevcut",
      en: "TR/EN artifact, status, and category copy is present"
    },
    {
      tr: "Yeni içerikte iki dilde completeness kontrolü",
      en: "Check completeness in both languages for new content"
    },
    {
      tr: "Client-side locale seçimi; locale-aware route/SEO ayrı değerlendirme konusu",
      en: "Client-side locale selection; locale-aware routes/SEO remain a separate consideration"
    }
  ],
  registryStructureTitle: { tr: "Genişleyebilir Arşiv Yapısı", en: "Expandable Archive Structure" },
  registryStructureDescription: {
    tr: "Yeni artifact, seri veya tema eklendiğinde sayfalar merkezi registry üzerinden güncellenir.",
    en: "When a new artifact, series, or theme is added, pages can expand through the central registry."
  },
  registryExpansionItems: [
    { tr: "Yeni artifact: artifacts registry’ye eklenir", en: "New artifact: added to the artifacts registry" },
    { tr: "Yeni seri: series registry’ye eklenir", en: "New series: added to the series registry" },
    { tr: "Yeni tema: themes registry’ye eklenir", en: "New theme: added to the themes registry" },
    { tr: "Sayfalar veri üzerinden genişler", en: "Pages expand through data" }
  ]
};

export const aboutPageText = {
  purposeTitle: { tr: "ArtifactHub’ın Amacı", en: "Purpose of ArtifactHub" },
  purposeDescription: {
    tr: "Her proje kaydı; mimari kararları, uygulanmış kapsamı, doğrulama kanıtını ve bilinen sınırları bir araya getirir.",
    en: "Each project entry brings together architectural decisions, implemented scope, validation evidence, and known limitations."
  },
  purposeItems: [
    { tr: "Artifact odaklı sunum", en: "Artifact-focused presentation" },
    { tr: "Teknik kararların açık yazılması", en: "Visible technical decisions" },
    { tr: "Bilinçli sınırların açık yazılması", en: "Explicit boundaries" },
    { tr: "Yeni projelerle genişleyebilir registry yapısı", en: "Registry structure that can expand with new projects" }
  ],
  technicalFocusTitle: { tr: "Teknik Odaklar", en: "Technical Focus Areas" },
  currentArtifactSetTitle: { tr: "Mevcut Artifact Seti", en: "Current Artifact Set" },
  profilePanelItems: [
    {
      tr: "Yazılım sistemleri / geliştirici araçları",
      en: "Software systems / developer tooling"
    },
    {
      tr: "AI altyapısı / yerelleştirme mühendisliği",
      en: "AI infrastructure / localization engineering"
    },
    {
      tr: "Local-first ürünler / masaüstü uygulamaları",
      en: "Local-first products / desktop applications"
    },
    {
      tr: "Oyun / audio / vision prototipleri",
      en: "Game / audio / vision prototypes"
    }
  ]
};
