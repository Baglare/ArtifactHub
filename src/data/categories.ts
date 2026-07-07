import type { Category } from "@/types/artifact";

export const categories: Category[] = [
  {
    id: "game-systems",
    label: { tr: "Oyun Sistemleri" },
    description: { tr: "Gameplay, combat, progression ve oyun döngüsü prototipleri." }
  },
  {
    id: "web-application",
    label: { tr: "Web Uygulaması" },
    description: { tr: "Kullanıcı arayüzü, veri modeli ve ürün akışı taşıyan web uygulamaları." }
  },
  {
    id: "audio-game-tooling",
    label: { tr: "Audio / Gameplay Tooling" },
    description: { tr: "Ses işleme ve oyun verisi üretimi arasında çalışan teknik araçlar." }
  },
  {
    id: "voice-audio-lab",
    label: { tr: "Voice / Audio Lab" },
    description: { tr: "TTS, voice profile, ses ön işleme ve değerlendirme deneyleri." }
  },
  {
    id: "computer-vision-interaction",
    label: { tr: "Computer Vision Interaction" },
    description: { tr: "Kamera, algılama, gesture ve etkileşim sistemleri." }
  }
];
