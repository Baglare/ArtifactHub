import type { LocalizedText } from "@/types/artifact";

export const homePageText = {
  heroPanelEyebrow: { tr: "Dijital artifact arşivi", en: "Digital artifact archive" },
  heroPanelLead: {
    tr: "Sistem kapsamı, akış, karar ve sınırları tek registry üzerinden okunur.",
    en: "System scope, flow, decisions, and boundaries are read from one registry."
  },
  heroPanelItems: [
    { tr: "Veri odaklı artifact kaydı", en: "Data-driven artifact records" },
    { tr: "Tema ve teknik rol üzerinden genişleyebilir yapı", en: "Expandable structure through themes and technical roles" }
  ],
  featuredTitle: { tr: "Öne Çıkan Girişler", en: "Featured Entries" },
  featuredDescription: {
    tr: "ArtifactHub iki bağımsız proje ve Forge Series etrafında şekillenir.",
    en: "ArtifactHub is organized around two independent projects and Forge Series."
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
    tr: "ArtifactHub ve bağlı artifactler; teknik diyagramlar, görsel materyaller, İngilizce içerik ve proje bazlı genişletmelerle genişletilecek.",
    en: "ArtifactHub and its artifacts will grow through technical diagrams, visual material, English content, and project-level extensions."
  },
  roadmapPreviewItems: [
    { tr: "TR ilk sürümün tamamlanması", en: "Completing the first Turkish version" },
    { tr: "Forge Series teknik diyagramları", en: "Technical diagrams for Forge Series" },
    { tr: "Proje görselleri / ekran çıktıları", en: "Project visuals / screen outputs" },
    { tr: "İngilizce içerik desteği", en: "English content support" },
    { tr: "Vercel yayını", en: "Vercel release" }
  ]
} satisfies Record<string, LocalizedText | LocalizedText[]>;

export const artifactsPageText = {
  description: {
    tr: "Bu arşiv; oyun sistemleri, local-first web uygulamaları, ses işleme araçları, TTS deneyleri ve bilgisayarlı görü prototiplerini bir arada tutar. Her artifact ne yaptığı, nasıl çalıştığı ve nerede sınırlı kaldığıyla belgelenir.",
    en: "This archive brings together game systems, local-first web applications, audio processing tools, TTS experiments, and computer vision prototypes. Each artifact documents what it does, how it works, and where it is limited."
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
    tr: "ArtifactHub için sıradaki iş; teknik diyagramlar, görsel materyaller, İngilizce içerik desteği, yayın hazırlığı ve proje bazlı genişletmeleri düzenli biçimde eklemek.",
    en: "ArtifactHub and its artifacts will grow through technical diagrams, visual material, English content, release polish, and project-level extensions."
  },
  generalDirectionTitle: { tr: "ArtifactHub Geliştirme Yönü", en: "ArtifactHub Development Direction" },
  generalRoadmapItems: [
    { tr: "TR ilk sürümün tamamlanması", en: "Completing the first Turkish version" },
    { tr: "Vercel yayını", en: "Vercel release" },
    { tr: "İngilizce içerik desteği için veri modelinin korunması", en: "Keeping the data model ready for English content" },
    { tr: "Logo / relic core sembolünün iyileştirilmesi", en: "Improving the logo / relic core symbol" },
    { tr: "Görsel tema polish", en: "Visual theme polish" },
    { tr: "Responsive ve erişilebilirlik kontrolü", en: "Responsive and accessibility review" }
  ],
  artifactExtensionsTitle: { tr: "Artifact Bazlı Genişletmeler", en: "Artifact-based Extensions" },
  seriesExtensionsTitle: { tr: "Seri Bazlı Genişletmeler", en: "Series-based Extensions" },
  visualPlanTitle: { tr: "Görsel Materyal Planı", en: "Visual Material Plan" },
  visualPlanDescription: {
    tr: "İlk sürüm video veya canlı demo kullanmadan çalışır. Sonraki adımda ekran görüntüleri, teknik diyagramlar ve kısa görsel çıktılar eklenecek.",
    en: "The first version works without video or live demos. Later extensions will add screenshots, technical diagrams, and short visual outputs."
  },
  visualMaterialItems: [
    { tr: "TempoBlade combat ekran görüntüleri", en: "TempoBlade combat screenshots" },
    { tr: "MediaTracker dashboard görselleri", en: "MediaTracker dashboard visuals" },
    { tr: "PulseForge beatmap visualization çıktıları", en: "PulseForge beatmap visualization outputs" },
    { tr: "VoxForge kalite raporu / local UI görselleri", en: "VoxForge quality report / local UI visuals" },
    { tr: "VisionForge detection UI görselleri", en: "VisionForge detection UI visuals" }
  ],
  languagePlanTitle: { tr: "Dil Genişletme Planı", en: "Language Expansion Plan" },
  languagePlanDescription: {
    tr: "İlk public sürüm Türkçe hazırlanır. Veri modeli, ileride İngilizce içerik alanları eklenebilecek şekilde korunur.",
    en: "The first public version is Turkish. The data model keeps room for English content."
  },
  languageExpansionItems: [
    { tr: "İlk sürüm: Türkçe", en: "First version: Turkish" },
    { tr: "Sonraki genişletme: İngilizce artifact metinleri", en: "Later extension: English artifact copy" },
    { tr: "Route veya language switch ilk sürüm kapsamında değildir", en: "Route-based i18n is not part of the first version" }
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
    tr: "ArtifactHub projeleri yalnızca sonuç ekranıyla anlatmaz. Her kayıt mevcut kapsamı, sistem akışını, mimari kararları, sınırları ve planlanan genişletmeleriyle tutulur.",
    en: "ArtifactHub does not describe projects only by their final screens. Each record keeps scope, system flow, architecture decisions, boundaries, and planned extensions visible."
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
    { tr: "Artifact arşivi", en: "Artifact archive" },
    { tr: "Oyun sistemleri", en: "Game systems" },
    { tr: "Local-first uygulamalar", en: "Local-first apps" },
    { tr: "Audio / vision prototipleri", en: "Audio / vision prototypes" }
  ]
};
