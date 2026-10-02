import type { Category } from "@/types/artifact";

export const categories: Category[] = [
  {
    id: "game-systems",
    label: { tr: "Oyun Sistemleri", en: "Game Systems" },
    description: { tr: "Gameplay, combat, progression ve oyun döngüsü prototipleri.", en: "Gameplay, combat, progression, and game loop prototypes." }
  },
  {
    id: "web-application",
    label: { tr: "Web Uygulaması", en: "Web Application" },
    description: { tr: "Kullanıcı arayüzü, veri modeli ve ürün akışı taşıyan web uygulamaları.", en: "Web applications with user interface, data model, and product flow." }
  },
  {
    id: "audio-game-tooling",
    label: { tr: "Audio / Gameplay Tooling", en: "Audio / Gameplay Tooling" },
    description: { tr: "Ses işleme ve oyun verisi üretimi arasında çalışan teknik araçlar.", en: "Technical tools that connect audio processing to gameplay data generation." }
  },
  {
    id: "voice-audio-lab",
    label: { tr: "Voice / Audio Lab", en: "Voice / Audio Lab" },
    description: { tr: "TTS, voice profile, ses ön işleme ve değerlendirme deneyleri.", en: "TTS, voice profile, audio preprocessing, and evaluation experiments." }
  },
  {
    id: "computer-vision-interaction",
    label: { tr: "Computer Vision Interaction", en: "Computer Vision Interaction" },
    description: { tr: "Kamera, algılama, gesture ve etkileşim sistemleri.", en: "Camera, detection, gesture, and interaction systems." }
  },
  {
    id: "developer-tooling",
    label: {
      tr: "Geliştirici Araçları",
      en: "Developer Tooling"
    },
    description: {
      tr: "Güvenli işleme, doğrulama ve geliştirici iş akışları.",
      en: "Safe processing, validation, and developer workflows."
    }
  },
  {
    id: "ai-infrastructure",
    label: {
      tr: "AI Sistemleri / Altyapı",
      en: "AI Systems / Infrastructure"
    },
    description: {
      tr: "Yapılandırılmış yetki, sözleşmeler ve kontrollü AI iş akışları.",
      en: "Structured authority, contracts, and controlled AI workflows."
    }
  },
  {
    id: "localization-engineering",
    label: {
      tr: "Yerelleştirme Mühendisliği",
      en: "Localization Engineering"
    },
    description: {
      tr: "Yerelleştirme pipeline’ları ve kaynak sınırları belirli mühendislik vaka çalışmaları.",
      en: "Localization pipelines and engineering case studies with explicit source boundaries."
    }
  },
  {
    id: "desktop-applications",
    label: {
      tr: "Masaüstü Uygulamaları",
      en: "Desktop Applications"
    },
    description: {
      tr: "Yerel servis, kalıcılık ve masaüstü istemci mimarisi.",
      en: "Local services, persistence, and desktop client architecture."
    }
  }
];
