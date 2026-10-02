import type { Status } from "@/types/artifact";

export const statuses: Status[] = [
  {
    id: "systems-prototype",
    label: { tr: "Sistem Prototipi", en: "Systems Prototype" },
    description: {
      tr: "Belirli oyun veya yazılım sistemlerini test eden çalışır prototip.",
      en: "A working prototype focused on specific game or software systems."
    },
    tone: "systems"
  },
  {
    id: "product-prototype",
    label: { tr: "Ürün Prototipi", en: "Product Prototype" },
    description: {
      tr: "Kullanıcı akışı, veri modeli ve arayüz davranışı olan uygulama prototipi.",
      en: "An application prototype with user flows, data behavior, and interface structure."
    },
    tone: "product"
  },
  {
    id: "pipeline-prototype",
    label: { tr: "Pipeline Prototipi", en: "Pipeline Prototype" },
    description: {
      tr: "Ham girdiyi işleyip yapılandırılmış çıktı üreten teknik akış.",
      en: "A technical flow that turns raw input into structured output."
    },
    tone: "pipeline"
  },
  {
    id: "experimental-lab-prototype",
    label: { tr: "Deneysel Lab Prototipi", en: "Experimental Lab Prototype" },
    description: {
      tr: "Yerel çalışan, araştırma ve değerlendirme odaklı deney aracı.",
      en: "A local experimental tool for research, testing, and evaluation workflows."
    },
    tone: "lab"
  },
  {
    id: "interactive-cv-prototype",
    label: { tr: "Etkileşimli CV Prototipi", en: "Interactive CV Prototype" },
    description: {
      tr: "Kamera girdisini algılama ve etkileşim sistemine bağlayan prototip.",
      en: "A prototype that connects camera input to detection and interaction systems."
    },
    tone: "vision"
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
    tone: "pipeline"
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
    tone: "systems"
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
    tone: "lab"
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
    tone: "pipeline"
  }
];
