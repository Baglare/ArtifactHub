import type { FocusArea } from "@/types/artifact";

export const focusAreas: FocusArea[] = [
  {
    id: "gameplay-systems",
    label: { tr: "Gameplay Systems", en: "Gameplay Systems" },
    description: { tr: "Combat loop, input tepkisi, oyuncu davranışı ve oyun sistemlerinin prototiplenmesi.", en: "Prototyping combat loops, input response, player behavior, and game systems." },
    order: 1
  },
  {
    id: "combat-architecture",
    label: { tr: "Combat Architecture", en: "Combat Architecture" },
    description: { tr: "Saldırı, parry, deflect, düşman davranışı ve oynanış geri bildirimi mimarisi.", en: "Architecture for attacks, parry, deflect, enemy behavior, and gameplay feedback." },
    order: 2
  },
  {
    id: "unity-systems",
    label: { tr: "Unity Systems", en: "Unity Systems" },
    description: { tr: "Unity runtime, sahne akışı, ScriptableObject ve oyun sistemi entegrasyonları.", en: "Unity runtime, scene flow, ScriptableObject, and game system integrations." },
    order: 3
  },
  {
    id: "data-driven-design",
    label: { tr: "Data-driven Design", en: "Data-driven Design" },
    description: { tr: "Davranışların sabit kod yerine veri yapılarıyla yönetilmesi.", en: "Managing behavior through data structures instead of hard-coded paths." },
    order: 4
  },
  {
    id: "local-first-apps",
    label: { tr: "Local-first Apps", en: "Local-first Apps" },
    description: { tr: "Verinin varsayılan olarak kullanıcının cihazında yaşadığı uygulama akışları.", en: "Application flows where user data lives on the device by default." },
    order: 5
  },
  {
    id: "product-ui",
    label: { tr: "Product UI", en: "Product UI" },
    description: { tr: "Kullanıcı akışı, dashboard, modal, filtreleme ve ürün arayüzü kararları.", en: "User flows, dashboards, modals, filtering, and product interface decisions." },
    order: 6
  },
  {
    id: "api-integrations",
    label: { tr: "API Integrations", en: "API Integrations" },
    description: { tr: "Harici veri kaynaklarıyla arama, zenginleştirme ve içerik çekme akışları.", en: "Search, enrichment, and content retrieval through external data sources." },
    order: 7
  },
  {
    id: "data-persistence",
    label: { tr: "Data Persistence", en: "Data Persistence" },
    description: { tr: "Yerel depolama, yedekleme, import/export ve veri sürekliliği.", en: "Local storage, backup, import/export, and data continuity." },
    order: 8
  },
  {
    id: "recommendation-tooling",
    label: { tr: "Recommendation Tooling", en: "Recommendation Tooling" },
    description: { tr: "Öneri, embedding, benzerlik skoru ve kişiselleştirme araçları.", en: "Recommendation, embedding, similarity scoring, and personalization tools." },
    order: 9
  },
  {
    id: "audio-processing",
    label: { tr: "Audio Processing", en: "Audio Processing" },
    description: { tr: "Ses girdisinin analiz, ön işleme veya üretim süreçlerinden geçirilmesi.", en: "Analysis, preprocessing, or generation workflows for audio input." },
    order: 10
  },
  {
    id: "pipeline-tooling",
    label: { tr: "Pipeline Tooling", en: "Pipeline Tooling" },
    description: { tr: "Ham girdiyi işleyip ara veri ve kullanılabilir çıktı üreten araç zincirleri.", en: "Toolchains that process raw input into intermediate data and usable output." },
    order: 11
  },
  {
    id: "rhythm-systems",
    label: { tr: "Rhythm Systems", en: "Rhythm Systems" },
    description: { tr: "Beat, timing, judgement ve ritim tabanlı oynanış sistemleri.", en: "Beat, timing, judgement, and rhythm-based gameplay systems." },
    order: 12
  },
  {
    id: "procedural-gameplay-data",
    label: { tr: "Procedural Gameplay Data", en: "Procedural Gameplay Data" },
    description: { tr: "Analiz edilmiş veriden gameplay eventleri veya oynanabilir veri üretme.", en: "Generating gameplay events or playable data from analyzed input." },
    order: 13
  },
  {
    id: "voice-tools",
    label: { tr: "Voice Tools", en: "Voice Tools" },
    description: { tr: "Ses profili, referans ses, TTS ve ses üretim araçları.", en: "Voice profile, reference audio, TTS, and voice generation tools." },
    order: 14
  },
  {
    id: "tts-experiments",
    label: { tr: "TTS Experiments", en: "TTS Experiments" },
    description: { tr: "Text-to-speech üretimi, model davranışı ve inference denemeleri.", en: "Text-to-speech generation, model behavior, and inference tests." },
    order: 15
  },
  {
    id: "audio-preprocessing",
    label: { tr: "Audio Preprocessing", en: "Audio Preprocessing" },
    description: { tr: "Ses temizleme, normalize etme, formatlama ve kalite hazırlığı.", en: "Audio cleanup, normalization, formatting, and quality preparation." },
    order: 16
  },
  {
    id: "local-first-labs",
    label: { tr: "Local-first Labs", en: "Local-first Labs" },
    description: { tr: "Deneysel araçların yerel veri ve yerel çalışma prensibiyle kurulması.", en: "Experimental tools built around local data and local execution." },
    order: 17
  },
  {
    id: "evaluation-workflow",
    label: { tr: "Evaluation Workflow", en: "Evaluation Workflow" },
    description: { tr: "Üretim çıktılarının kalite, karşılaştırma veya raporlama sürecinden geçirilmesi.", en: "Passing generated outputs through quality, comparison, or reporting steps." },
    order: 18
  },
  {
    id: "computer-vision",
    label: { tr: "Computer Vision", en: "Computer Vision" },
    description: { tr: "Kamera girdisinden yüz, el, nesne veya hareket algılama.", en: "Detecting faces, hands, objects, or motion from camera input." },
    order: 19
  },
  {
    id: "gesture-interaction",
    label: { tr: "Gesture Interaction", en: "Gesture Interaction" },
    description: { tr: "El landmark veya hareket verisini UI/komut akışına bağlama.", en: "Connecting hand landmarks or motion data to UI and command flows." },
    order: 20
  },
  {
    id: "local-recognition",
    label: { tr: "Local Recognition", en: "Local Recognition" },
    description: { tr: "Yerel doğrulama, tanıma ve profil eşleme prototipleri.", en: "Local verification, recognition, and profile matching prototypes." },
    order: 21
  },
  {
    id: "real-time-camera-pipeline",
    label: { tr: "Real-time Camera Pipeline", en: "Real-time Camera Pipeline" },
    description: { tr: "Canlı kamera girdisini frame, detection ve feedback zincirine bağlama.", en: "Connecting live camera input to frame, detection, and feedback chains." },
    order: 22
  },
  {
    id: "gamified-ui",
    label: { tr: "Gamified UI", en: "Gamified UI" },
    description: { tr: "Teknik çıktıları oyunlaştırılmış arayüz metaforlarıyla sunma.", en: "Presenting technical output through gamified interface metaphors." },
    order: 23
  }
];
