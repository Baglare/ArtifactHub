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
  }
];
