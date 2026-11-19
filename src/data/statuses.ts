import type { Status } from "@/types/artifact";

export const statuses: Status[] = [
  {
    id: "systems-prototype",
    label: { tr: "Sistem Prototipi", en: "Systems Prototype" },
    description: {
      tr: "Belirli oyun veya yazılım sistemlerini test eden çalışır prototip.",
      en: "A working prototype focused on specific game or software systems."
    },
    tone: "systems",
    maturity: 1
  },
  {
    id: "product-prototype",
    label: { tr: "Ürün Prototipi", en: "Product Prototype" },
    description: {
      tr: "Kullanıcı akışı, veri modeli ve arayüz davranışı olan uygulama prototipi.",
      en: "An application prototype with user flows, data behavior, and interface structure."
    },
    tone: "product",
    maturity: 1
  },
  {
    id: "pipeline-prototype",
    label: { tr: "İşleme Hattı Prototipi", en: "Pipeline Prototype" },
    description: {
      tr: "Ham girdiyi işleyip yapılandırılmış çıktı üreten teknik akış.",
      en: "A technical flow that turns raw input into structured output."
    },
    tone: "pipeline",
    maturity: 2
  },
  {
    id: "experimental-lab-prototype",
    label: { tr: "Deneysel Prototip", en: "Experimental Lab Prototype" },
    description: {
      tr: "Yerel çalışan, araştırma ve değerlendirme odaklı deney aracı.",
      en: "A local experimental tool for research, testing, and evaluation workflows."
    },
    tone: "lab",
    maturity: 1
  },
  {
    id: "interactive-cv-prototype",
    label: { tr: "Görüntü İşleme Prototipi", en: "Interactive CV Prototype" },
    description: {
      tr: "Kamera girdisini algılama ve etkileşim sistemine bağlayan prototip.",
      en: "A prototype that connects camera input to detection and interaction systems."
    },
    tone: "vision",
    maturity: 2
  },
  {
    id: "live-product",
    label: { tr: "Canlı Ürün (v1)", en: "Live Product (v1)" },
    description: {
      tr: "Production ortamına yayımlanmış ve temel kullanıcı akışları doğrulanmış uygulama; açık yasal ve operasyonel sınırlar ayrıca belirtilir.",
      en: "An application deployed to production with verified core user flows; outstanding legal and operational limits are documented separately."
    },
    tone: "product",
    maturity: 4
  },
  {
    id: "release-candidate",
    label: {
      tr: "Sürüm Adayı",
      en: "Release Candidate"
    },
    description: {
      tr: "Sürüm hazırlığı ve sınırlı kabul kanıtı olan araç veya ürün; release kapıları projeye özgüdür.",
      en: "A tool or product with release preparation and bounded acceptance evidence; release gates remain project-specific."
    },
    tone: "pipeline",
    maturity: 3
  },
  {
    id: "engineering-tool",
    label: {
      tr: "Mühendislik Aracı",
      en: "Engineering Tool"
    },
    description: {
      tr: "Uygulanmış sözleşmeler ve doğrulanabilir iş akışları; evrensel güvence iddiası yoktur.",
      en: "Implemented contracts and verifiable workflows without universal assurance claims."
    },
    tone: "systems",
    maturity: 2
  },
  {
    id: "early-stage-architecture",
    label: {
      tr: "Erken Aşama Mimari Prototipi",
      en: "Early-stage Architecture Prototype"
    },
    description: {
      tr: "Mimari ve temel iş akışları uygulanmış; ürün özellikleri henüz tamamlanmamış prototip.",
      en: "A prototype with architecture and foundational workflows implemented; product features remain incomplete."
    },
    tone: "lab",
    maturity: 1
  },
  {
    id: "engineering-case-study",
    label: {
      tr: "Mühendislik Vaka Çalışması",
      en: "Engineering Case Study"
    },
    description: {
      tr: "Uygulanmış mühendislik kararlarını, kanıtlarını ve sınırlarını belgeleyen çalışma.",
      en: "A study documenting implemented engineering decisions, evidence, and limitations."
    },
    tone: "pipeline",
    maturity: 2
  },
  {
    id: "active-development",
    label: { tr: "Aktif Geliştirme", en: "Active Development" },
    description: {
      tr: "Düzenli olarak yeni aşamaları birleştirilen, çalışan çekirdeği ve açık kabul sınırları olan proje.",
      en: "A project with a working core that regularly merges new milestones, with explicit acceptance boundaries."
    },
    tone: "product",
    maturity: 3
  },
  {
    id: "research-prototype",
    label: { tr: "Araştırma Prototipi", en: "Research Prototype" },
    description: {
      tr: "Tekrarlanabilir deneyler, baseline karşılaştırmaları ve olumsuz sonuçları da raporlayan araştırma kodu.",
      en: "Research code with reproducible experiments, baseline comparisons, and reported negative results."
    },
    tone: "lab",
    maturity: 2
  },
  {
    id: "graduation-project",
    label: { tr: "Bitirme Projesi · Geliştiriliyor", en: "Capstone Project · In Progress" },
    description: {
      tr: "Üniversite bitirme projesi olarak ekip halinde geliştirilen, vertical slice ve oyuncu kabulü henüz tamamlanmamış çalışma.",
      en: "A team-built university capstone project whose vertical slice and player acceptance are not yet complete."
    },
    tone: "systems",
    maturity: 2
  },
  {
    id: "course-project",
    label: { tr: "Ders Projesi · Ekip", en: "Course Project · Team" },
    description: {
      tr: "Bir üniversite dersi kapsamında ekip halinde yürütülen, ara sonuçları ve açık kapıları belgelenen proje.",
      en: "A team project run within a university course, with interim results and open gates documented."
    },
    tone: "vision",
    maturity: 2
  },
  {
    id: "released-tool",
    label: { tr: "Yayımlanmış Araç", en: "Released Tool" },
    description: {
      tr: "GitHub Releases üzerinden indirilebilir sürümü olan küçük, odaklı araç.",
      en: "A small, focused tool with a downloadable build on GitHub Releases."
    },
    tone: "product",
    maturity: 3
  }
];
