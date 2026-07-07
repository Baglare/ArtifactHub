import type { Status } from "@/types/artifact";

export const statuses: Status[] = [
  {
    id: "systems-prototype",
    label: { tr: "Sistem Prototipi" },
    description: { tr: "Belirli oyun veya yazılım sistemlerini test eden çalışır prototip." },
    tone: "systems"
  },
  {
    id: "product-prototype",
    label: { tr: "Ürün Prototipi" },
    description: { tr: "Kullanıcı akışı, veri modeli ve arayüz davranışı olan uygulama prototipi." },
    tone: "product"
  },
  {
    id: "pipeline-prototype",
    label: { tr: "Pipeline Prototipi" },
    description: { tr: "Ham girdiyi işleyip yapılandırılmış çıktı üreten teknik akış." },
    tone: "pipeline"
  },
  {
    id: "experimental-lab-prototype",
    label: { tr: "Deneysel Lab Prototipi" },
    description: { tr: "Yerel çalışan, araştırma ve değerlendirme odaklı deney aracı." },
    tone: "lab"
  },
  {
    id: "interactive-cv-prototype",
    label: { tr: "Etkileşimli CV Prototipi" },
    description: { tr: "Kamera girdisini algılama ve etkileşim sistemine bağlayan prototip." },
    tone: "vision"
  }
];
