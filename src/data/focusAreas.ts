import type { FocusArea } from "@/types/artifact";

export const focusAreas: FocusArea[] = [
  {
    id: "gameplay-systems",
    label: { tr: "Gameplay Systems" },
    description: { tr: "Combat loop, input tepkisi, oyuncu davranışı ve oyun sistemlerinin prototiplenmesi." },
    order: 1
  },
  {
    id: "combat-architecture",
    label: { tr: "Combat Architecture" },
    description: { tr: "Saldırı, parry, deflect, düşman davranışı ve oynanış geri bildirimi mimarisi." },
    order: 2
  },
  {
    id: "unity-systems",
    label: { tr: "Unity Systems" },
    description: { tr: "Unity runtime, sahne akışı, ScriptableObject ve oyun sistemi entegrasyonları." },
    order: 3
  },
  {
    id: "data-driven-design",
    label: { tr: "Data-driven Design" },
    description: { tr: "Davranışların sabit kod yerine veri yapılarıyla yönetilmesi." },
    order: 4
  },
  {
    id: "local-first-apps",
    label: { tr: "Local-first Apps" },
    description: { tr: "Verinin varsayılan olarak kullanıcının cihazında yaşadığı uygulama akışları." },
    order: 5
  },
  {
    id: "product-ui",
    label: { tr: "Product UI" },
    description: { tr: "Kullanıcı akışı, dashboard, modal, filtreleme ve ürün arayüzü kararları." },
    order: 6
  },
  {
    id: "api-integrations",
    label: { tr: "API Integrations" },
    description: { tr: "Harici veri kaynaklarıyla arama, zenginleştirme ve içerik çekme akışları." },
    order: 7
  },
  {
    id: "data-persistence",
    label: { tr: "Data Persistence" },
    description: { tr: "Yerel depolama, yedekleme, import/export ve veri sürekliliği." },
    order: 8
  },
  {
    id: "recommendation-tooling",
    label: { tr: "Recommendation Tooling" },
    description: { tr: "Öneri, embedding, benzerlik skoru ve kişiselleştirme araçları." },
    order: 9
  },
  {
    id: "audio-processing",
    label: { tr: "Audio Processing" },
    description: { tr: "Ses girdisinin analiz, ön işleme veya üretim süreçlerinden geçirilmesi." },
    order: 10
  },
  {
    id: "pipeline-tooling",
    label: { tr: "Pipeline Tooling" },
    description: { tr: "Ham girdiyi işleyip ara veri ve kullanılabilir çıktı üreten araç zincirleri." },
    order: 11
  },
  {
    id: "rhythm-systems",
    label: { tr: "Rhythm Systems" },
    description: { tr: "Beat, timing, judgement ve ritim tabanlı oynanış sistemleri." },
    order: 12
  },
  {
    id: "procedural-gameplay-data",
    label: { tr: "Procedural Gameplay Data" },
    description: { tr: "Analiz edilmiş veriden gameplay eventleri veya oynanabilir veri üretme." },
    order: 13
  },
  {
    id: "voice-tools",
    label: { tr: "Voice Tools" },
    description: { tr: "Ses profili, referans ses, TTS ve ses üretim araçları." },
    order: 14
  },
  {
    id: "tts-experiments",
    label: { tr: "TTS Experiments" },
    description: { tr: "Text-to-speech üretimi, model davranışı ve inference denemeleri." },
    order: 15
  },
  {
    id: "audio-preprocessing",
    label: { tr: "Audio Preprocessing" },
    description: { tr: "Ses temizleme, normalize etme, formatlama ve kalite hazırlığı." },
    order: 16
  },
  {
    id: "local-first-labs",
    label: { tr: "Local-first Labs" },
    description: { tr: "Deneysel araçların yerel veri ve yerel çalışma prensibiyle kurulması." },
    order: 17
  },
  {
    id: "evaluation-workflow",
    label: { tr: "Evaluation Workflow" },
    description: { tr: "Üretim çıktılarının kalite, karşılaştırma veya raporlama sürecinden geçirilmesi." },
    order: 18
  },
  {
    id: "computer-vision",
    label: { tr: "Computer Vision" },
    description: { tr: "Kamera girdisinden yüz, el, nesne veya hareket algılama." },
    order: 19
  },
  {
    id: "gesture-interaction",
    label: { tr: "Gesture Interaction" },
    description: { tr: "El landmark veya hareket verisini UI/komut akışına bağlama." },
    order: 20
  },
  {
    id: "local-recognition",
    label: { tr: "Local Recognition" },
    description: { tr: "Yerel doğrulama, tanıma ve profil eşleme prototipleri." },
    order: 21
  },
  {
    id: "real-time-camera-pipeline",
    label: { tr: "Real-time Camera Pipeline" },
    description: { tr: "Canlı kamera girdisini frame, detection ve feedback zincirine bağlama." },
    order: 22
  },
  {
    id: "gamified-ui",
    label: { tr: "Gamified UI" },
    description: { tr: "Teknik çıktıları oyunlaştırılmış arayüz metaforlarıyla sunma." },
    order: 23
  }
];
