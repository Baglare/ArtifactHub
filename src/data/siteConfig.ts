import type { SiteConfig } from "@/types/artifact";

export const siteConfig: SiteConfig = {
  title: "ArtifactHub",
  description: {
    tr: "Yazılım sistemleri, oyun prototipleri ve deneysel araçlar için teknik artifact arşivi."
  },
  defaultLocale: "tr",
  supportedLocales: ["tr", "en"],
  navigation: [
    { label: { tr: "Artifactler" }, href: "/artifacts" },
    { label: { tr: "Forge Serisi" }, href: "/series/forge" },
    { label: { tr: "Yol Haritası" }, href: "/roadmap" },
    { label: { tr: "Hakkında" }, href: "/about" },
    { label: { tr: "GitHub" }, href: "https://github.com/Baglare", external: true }
  ],
  links: {
    github: "https://github.com/Baglare"
  },
  hero: {
    title: "ArtifactHub",
    subtitle: {
      tr: "Yazılım sistemleri, oyun prototipleri ve deneysel araçlar için teknik artifact arşivi."
    },
    description: {
      tr: "ArtifactHub; oyun mekaniği, local-first web uygulaması, ses işleme, TTS ve bilgisayarlı görü prototiplerinden oluşan bağımsız bir arşivdir. Her artifact; ne yaptığı, nasıl çalıştığı, nerede sınırlı kaldığı ve sonraki yönüyle belgelenir."
    },
    primaryCta: {
      label: { tr: "Artifactleri İncele" },
      href: "/artifacts"
    },
    secondaryCta: {
      label: { tr: "Forge Serisini Gör" },
      href: "/series/forge"
    },
    focusTags: ["Unity Systems", "Local-first Apps", "Audio Pipelines", "Voice Tools", "Computer Vision"]
  },
  profile: {
    displayName: "Baglare",
    shortBio: {
      tr: "Baglare, oyun sistemleri, local-first uygulamalar, ses işleme, TTS ve bilgisayarlı görü prototipleri geliştirir. ArtifactHub bu projeleri çıktıdan ibaret görmez; kapsamı, mimari kararları ve bilinçli sınırları da kayda alır."
    }
  }
};
