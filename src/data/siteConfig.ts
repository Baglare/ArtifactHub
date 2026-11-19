import type { SiteConfig } from "@/types/artifact";

export const siteConfig: SiteConfig = {
  title: "ArtifactHub",
  description: {
    tr: "Batuhan Parıltı’nın (Baglare) projeleri: oyunlar, ses ve görüntü araçları, yerelde çalışan uygulamalar; ne yaptıkları ve nerede kaldıklarıyla.",
    en: "Projects by Batuhan Parıltı (Baglare): games, audio and vision tools, apps that run locally; what they do and where they stand."
  },
  defaultLocale: "tr",
  supportedLocales: ["tr", "en"],
  navigation: [
    { label: { tr: "Projeler", en: "Projects" }, href: "/artifacts" },
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
      label: { tr: "Projelere göz at", en: "Browse the projects" },
      href: "/artifacts"
    },
    secondaryCta: {
      label: { tr: "Hakkımda", en: "About me" },
      href: "/about"
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
    displayName: "Batuhan Parıltı",
    shortBio: {
      tr: "Ben Batuhan, internette çoğunlukla Baglare olarak geçiyorum. İzmir Bakırçay Üniversitesi’nde okuyorum. Oyun sistemleri, ses ve görüntü işleyen araçlar, kendi bilgisayarımda çalışan uygulamalar ve yerelleştirme üzerine bir şeyler yapıyorum. Çoğunu kendim kullanmak için başlatıyorum; bazıları ders projesi olarak doğdu, bazıları büyüyüp kendi başına bir şeye dönüştü.",
      en: "I’m Batuhan, mostly known online as Baglare. I study at İzmir Bakırçay University. I build things around game systems, tools that process audio and images, apps that run on my own machine, and localization. I start most of them for my own use; some began as course projects, and some grew into something of their own."
    }
  }
};
