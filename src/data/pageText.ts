import type { LocalizedText } from "@/types/artifact";

export const homePageText = {
  heroIntro: { tr: "Merhaba, ben", en: "Hi, I’m" },
  heroName: { tr: "Batuhan Parıltı.", en: "Batuhan Parıltı." },
  heroLead: {
    tr: "Kod yazıyorum, bir şeyleri bozup tekrar kuruyorum. Burası da yaptığım projelerin rafı.",
    en: "I write code, break things, and build them back up. This is the shelf where my projects live."
  },
  heroBody: {
    tr: "Oyunlar, ses ve görüntü işleyen araçlar, kendi bilgisayarımda çalışan uygulamalar… Her projede ne yaptığımı, nasıl çalıştığını ve henüz nerede eksik kaldığını dürüstçe yazdım. Bitmiş gibi göstermek yerine gerçekte nerede olduğunu görmen daha iyi.",
    en: "Games, tools that process audio and images, apps that run on my own machine… For every project I wrote down what I built, how it works, and where it still falls short. Better that you see where things really stand than pretend they’re finished."
  },
  orbitHint: {
    tr: "Her işaret bir proje. Merkeze yakın olanlar daha olgun. Sürükleyip çevir, bir işaretin üstüne gel, tıkla.",
    en: "Every pointer is a project. The closer to the centre, the more mature it is. Drag to turn it, hover a pointer, click."
  },
  orbitLegendMature: { tr: "Canlı / yayında", en: "Live / released" },
  orbitLegendGrowing: { tr: "Aktif gelişiyor", en: "Actively growing" },
  orbitLegendEarly: { tr: "Erken aşama", en: "Early stage" },
  statArtifacts: { tr: "Proje", en: "Projects" },
  statFeatured: { tr: "Öne çıkan", en: "Featured" },
  statLive: { tr: "Canlı ürün", en: "Live product" },
  statPublic: { tr: "Açık depo", en: "Public repos" },
  featuredEyebrow: { tr: "Vitrin", en: "Showcase" },
  featuredTitle: { tr: "En çok emek verdiklerim", en: "The ones I put the most into" },
  featuredDescription: {
    tr: "Canlıda çalışan bir uygulama, hızla büyüyen bir ses stüdyosu, bitirme projem olan çok oyunculu bir oyun, bir yerelleştirme aracı ve açık kaynak bir öğrenme deneyi.",
    en: "An app that is live, a fast-growing voice studio, the multiplayer game that is my capstone project, a localization tool, and an open-source learning experiment."
  },
  viewForgeSeries: { tr: "Forge Serisine bak", en: "See the Forge Series" },
  archiveEyebrow: { tr: "Arşiv", en: "Archive" },
  archiveDescription: {
    tr: "Geri kalan her şey burada. Bazıları prototip, bazıları bir dersin ödevi, bazıları da bir fikri denemek için yazdığım küçük araçlar.",
    en: "Everything else lives here. Some are prototypes, some started as course work, some are small tools I wrote to try out an idea."
  },
  viewAllArtifacts: { tr: "Hepsini gör", en: "See them all" },
  forgeEyebrow: { tr: "Seri", en: "Series" },
  transformationDescription: {
    tr: "Forge projelerinin ortak noktası basit: ham bir girdi alıyor (şarkı, ses kaydı, kamera görüntüsü), işliyor ve oynanabilir ya da etkileşimli bir şeye çeviriyor.",
    en: "The Forge projects share one simple idea: take a raw input (a song, a voice recording, a camera feed), process it, and turn it into something playable or interactive."
  },
  focusEyebrow: { tr: "Harita", en: "Map" },
  focusMapTitle: { tr: "Hangi alanlarda ne var?", en: "What lives where?" },
  focusMapDescription: {
    tr: "Projeleri dokundukları konulara göre grupladım; ilgini çeken alandan başlayabilirsin.",
    en: "I grouped the projects by the topics they touch, so you can start from whatever interests you."
  },
  directionEyebrow: { tr: "Sırada", en: "Up next" },
  developmentDirectionTitle: { tr: "Sırada ne var?", en: "What’s next?" },
  developmentDirectionDescription: {
    tr: "Bu site de projelerim gibi sürekli değişiyor. Yakın zamanda yapmak istediklerim:",
    en: "This site keeps changing just like my projects. Things I want to do soon:"
  },
  roadmapPreviewItems: [
    {
      tr: "VoxForge ile ilk sesli kitap bölümünü baştan sona çıkarmak",
      en: "Produce the first full audiobook chapter with VoxForge"
    },
    {
      tr: "Butterfly Effect’i iki gerçek oyuncuyla test etmek",
      en: "Playtest Butterfly Effect with two real players"
    },
    {
      tr: "Projelere ekran görüntüsü ve kısa demo videoları eklemek",
      en: "Add screenshots and short demo videos to the projects"
    }
  ]
} satisfies Record<string, LocalizedText | LocalizedText[]>;

export const artifactsPageText = {
  description: {
    tr: "Bütün projelerim tek sayfada. Filtrelerle alana göre daraltabilirsin; her kartta projenin şu an hangi aşamada olduğu yazıyor.",
    en: "All my projects on one page. Use the filters to narrow things down; every card says what stage the project is in right now."
  },
  registryNote: {
    tr: "Özel depolardaki projelerin kaynak kodunu paylaşamıyorum ama ne yaptıklarını anlattım.",
    en: "I can’t share the source of projects in private repos, but I’ve described what they do."
  },
  archiveNote: {
    tr: "Yeni bir şey bitirdikçe buraya ekliyorum.",
    en: "Whenever I finish something new, it ends up here."
  }
};

export const seriesPageText = {
  artifactsDescription: {
    tr: "Bu serideki her proje farklı bir ham girdiyle uğraşıyor.",
    en: "Each project in this series deals with a different kind of raw input."
  },
  transformationDescription: {
    tr: "Hepsi aynı yolu izliyor: girdiyi analiz et, ara veri üret, sonucu oyuna ya da demoya bağla.",
    en: "They all follow the same path: analyze the input, produce intermediate data, hook the result into a game or demo."
  }
};

export const roadmapPageText = {
  heroTitle: { tr: "Yol Haritası", en: "Roadmap" },
  heroDescription: {
    tr: "Projelerde sırada ne olduğunu burada topluyorum. Planlar plan olarak duruyor; bitenleri proje sayfalarına taşıyorum.",
    en: "This is where I collect what’s next for each project. Plans stay plans here; finished work moves to the project pages."
  },
  generalDirectionTitle: { tr: "Bu site için", en: "For this site" },
  generalRoadmapItems: [
    {
      tr: "Proje sayfalarına ekran görüntüsü ve kısa demo videoları eklemek",
      en: "Add screenshots and short demo videos to the project pages"
    },
    {
      tr: "Mimari akışları basit diyagramlarla göstermek",
      en: "Show architecture flows with simple diagrams"
    },
    {
      tr: "Projeler ilerledikçe kayıtları güncel tutmak",
      en: "Keep the entries up to date as the projects move forward"
    }
  ],
  artifactExtensionsTitle: { tr: "Projelerde sırada olanlar", en: "Next up in the projects" },
  seriesExtensionsTitle: { tr: "Seri için", en: "For the series" },
  visualPlanTitle: { tr: "Eklemek istediğim görseller", en: "Visuals I want to add" },
  visualPlanDescription: {
    tr: "Kişisel veri, ses kaydı ya da özel kaynak içermeyen ekran görüntüleri ve şemalar.",
    en: "Screenshots and diagrams that contain no personal data, voice recordings, or private sources."
  },
  visualMaterialItems: [
    { tr: "VoxForge Studio ve Quality Director ekranları", en: "VoxForge Studio and Quality Director screens" },
    { tr: "Butterfly Effect’ten iki dönemli Valenne görüntüleri", en: "Two-era Valenne shots from Butterfly Effect" },
    { tr: "MediaTracker’ın ana akışları", en: "MediaTracker’s main flows" },
    { tr: "GameLocalizer’ın güvenli patch akışı", en: "GameLocalizer’s safe patch flow" }
  ]
};

export const aboutPageText = {
  purposeTitle: { tr: "Bu site neden var?", en: "Why does this site exist?" },
  purposeDescription: {
    tr: "GitHub’da bir depo adı çok az şey anlatıyor. Burada her proje için ne denediğimi, hangi kararları neden verdiğimi ve nerede takıldığımı yazıyorum.",
    en: "A repo name on GitHub doesn’t say much. Here I write down what I tried in each project, why I made the calls I made, and where I got stuck."
  },
  purposeItems: [
    { tr: "Bitmemiş işi bitmiş gibi göstermemek", en: "Never dressing up unfinished work as finished" },
    { tr: "Kararların arkasındaki nedeni yazmak", en: "Writing down the reason behind decisions" },
    { tr: "Sınırları ve eksikleri açıkça söylemek", en: "Being upfront about limits and gaps" },
    { tr: "Yeni projelerle birlikte büyümek", en: "Growing along with new projects" }
  ],
  technicalFocusTitle: { tr: "Uğraştığım alanlar", en: "Areas I work in" },
  currentArtifactSetTitle: { tr: "Şu ana kadarki projeler", en: "Projects so far" },
  profilePanelItems: [
    { tr: "Oyun sistemleri ve Unity", en: "Game systems and Unity" },
    { tr: "Ses, TTS ve görüntü işleme", en: "Audio, TTS, and computer vision" },
    { tr: "Yerelde çalışan uygulamalar", en: "Apps that run locally" },
    { tr: "Yerelleştirme ve geliştirici araçları", en: "Localization and developer tooling" }
  ]
};
