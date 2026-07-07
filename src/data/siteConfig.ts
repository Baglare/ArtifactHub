import type { SiteConfig } from "@/types/artifact";

export const siteConfig: SiteConfig = {
  title: "ArtifactHub",
  description: {
    tr: "Yazılım sistemleri, deneysel araçlar ve oyun prototipleri için dijital artifact arşivi."
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
      tr: "Yazılım sistemleri, deneysel araçlar ve oyun prototipleri için dijital artifact arşivi."
    },
    description: {
      tr: "ArtifactHub; oyun mekaniği, local-first web uygulaması, ses işleme, TTS ve bilgisayarlı görü prototiplerinden oluşan bağımsız proje arşividir. Her artifact yalnızca çıktısıyla değil; mevcut kapsamı, sistem akışı, teknik kararları ve sınırlarıyla birlikte sunulur."
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
      tr: "Baglare, oyun sistemleri, local-first uygulamalar, ses işleme, TTS ve bilgisayarlı görü prototipleri üzerinde çalışan bağımsız bir geliştirici kimliğiyle ArtifactHub’ı kullanır. Bu arşiv, projeleri yalnızca çıktılarıyla değil; mimari kararları, mevcut kapsamları ve bilinçli sınırlarıyla birlikte belgelemek için tasarlanmıştır."
    }
  }
};
