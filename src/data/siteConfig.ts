import type { SiteConfig } from "@/types/artifact";

export const siteConfig: SiteConfig = {
  title: "ArtifactHub",
  description: {
    tr: "Geliştirici araçları, AI altyapısı, local-first ürünler, yerelleştirme mühendisliği ve deneysel oyun/audio/vision sistemleri için teknik arşiv.",
    en: "A technical archive of developer tooling, AI infrastructure, local-first products, localization engineering, and experimental game/audio/vision systems."
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
      tr: "Geliştirici araçları, AI altyapısı, local-first ürünler, yerelleştirme mühendisliği ve deneysel oyun/audio/vision sistemleri için teknik arşiv.",
      en: "A technical archive of developer tooling, AI infrastructure, local-first products, localization engineering, and experimental game/audio/vision systems."
    },
    description: {
      tr: "Baglare’nin yazılım projeleri: ne yaptıkları, nasıl çalıştıkları ve hangi kapsamda doğrulandıkları.",
      en: "Baglare’s software projects: what they do, how they work, and the scope of their validation."
    },
    primaryCta: {
      label: { tr: "Artifactleri İncele", en: "Explore Artifacts" },
      href: "/artifacts"
    },
    secondaryCta: {
      label: { tr: "Forge Serisini Gör", en: "View Forge Series" },
      href: "/series/forge"
    },
    focusTags: [
      "Developer Tooling",
      "AI Infrastructure",
      "Local-first Products",
      "Localization Engineering",
      "Game / Audio / Vision"
    ]
  },
  profile: {
    displayName: "Baglare",
    shortBio: {
      tr: "Baglare; geliştirici araçları, AI sistemleri, local-first ürünler ve yerelleştirme mühendisliği üzerinde çalışır. Portföy, masaüstü uygulamaları ile oyun, ses ve bilgisayarlı görü sistemlerini de kapsar.",
      en: "Baglare works on developer tooling, AI systems, local-first products, and localization engineering. The portfolio also includes desktop applications and game, audio, and computer-vision systems."
    }
  }
};
