import type { SiteConfig } from "@/types/artifact";

export const siteConfig: SiteConfig = {
  title: "ArtifactHub",
  description: {
    tr: "Yazılım sistemleri, oyun prototipleri ve deneysel araçlar için teknik artifact arşivi.",
    en: "A technical artifact archive for software systems, experimental tools, and game prototypes."
  },
  defaultLocale: "tr",
  supportedLocales: ["tr", "en"],
  navigation: [
    { label: { tr: "Artifactler", en: "Artifacts" }, href: "/artifacts" },
    { label: { tr: "Forge Serisi", en: "Forge Series" }, href: "/series/forge" },
    { label: { tr: "Yol Haritası", en: "Roadmap" }, href: "/roadmap" },
    { label: { tr: "Hakkında", en: "About" }, href: "/about" },
    { label: { tr: "GitHub", en: "GitHub" }, href: "https://github.com/Baglare", external: true }
  ],
  links: {
    github: "https://github.com/Baglare"
  },
  hero: {
    title: "ArtifactHub",
    subtitle: {
      tr: "Yazılım sistemleri, oyun prototipleri ve deneysel araçlar için teknik artifact arşivi.",
      en: "A digital artifact archive for software systems, experimental tools, and game prototypes."
    },
    description: {
      tr: "ArtifactHub; oyun mekaniği, local-first web uygulaması, ses işleme, TTS ve bilgisayarlı görü prototiplerinden oluşan bağımsız bir arşivdir. Her artifact; ne yaptığı, nasıl çalıştığı, nerede sınırlı kaldığı ve sonraki yönüyle belgelenir.",
      en: "ArtifactHub collects Baglare’s game systems, local-first web tools, audio pipelines, TTS experiments, and computer vision prototypes. Each artifact documents what it does, how it works, where it is limited, and where it may go next."
    },
    primaryCta: {
      label: { tr: "Artifactleri İncele", en: "Explore Artifacts" },
      href: "/artifacts"
    },
    secondaryCta: {
      label: { tr: "Forge Serisini Gör", en: "View Forge Series" },
      href: "/series/forge"
    },
    focusTags: ["Unity Systems", "Local-first Apps", "Audio Pipelines", "Voice Tools", "Computer Vision"]
  },
  profile: {
    displayName: "Baglare",
    shortBio: {
      tr: "Baglare, oyun sistemleri, local-first uygulamalar, ses işleme, TTS ve bilgisayarlı görü prototipleri geliştirir. ArtifactHub bu projeleri çıktıdan ibaret görmez; kapsamı, mimari kararları ve bilinçli sınırları da kayda alır.",
      en: "Baglare uses ArtifactHub as a technical archive for game systems, local-first applications, audio processing, TTS, and computer vision prototypes. The archive focuses on system scope, architecture, design decisions, boundaries, and planned extensions."
    }
  }
};
