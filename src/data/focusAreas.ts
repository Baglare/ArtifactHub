import type { FocusArea } from "@/types/artifact";

export const focusAreas: FocusArea[] = [
  {
    id: "gameplay-systems",
    label: { tr: "Oynanış Sistemleri", en: "Gameplay Systems" },
    description: { tr: "Dövüş döngüsü, tuşlara tepki, oyuncu davranışı ve oyun sistemlerinin prototiplenmesi.", en: "Prototyping combat loops, input response, player behavior, and game systems." },
    order: 1
  },
  {
    id: "combat-architecture",
    label: { tr: "Dövüş Mimarisi", en: "Combat Architecture" },
    description: { tr: "Saldırı, savuşturma, düşman davranışı ve vuruş hissinin kurgulanması.", en: "Architecture for attacks, parry, deflect, enemy behavior, and gameplay feedback." },
    order: 2
  },
  {
    id: "unity-systems",
    label: { tr: "Unity Sistemleri", en: "Unity Systems" },
    description: { tr: "Unity’de sahne akışı, ScriptableObject’ler ve oyun sistemlerinin birbirine bağlanması.", en: "Unity runtime, scene flow, ScriptableObject, and game system integrations." },
    order: 3
  },
  {
    id: "data-driven-design",
    label: { tr: "Veriyle Tanımlanan Tasarım", en: "Data-driven Design" },
    description: { tr: "Davranışların sabit kod yerine veri yapılarıyla yönetilmesi.", en: "Managing behavior through data structures instead of hard-coded paths." },
    order: 4
  },
  {
    id: "local-first-apps",
    label: { tr: "Yerelde Çalışan Uygulamalar", en: "Local-first Apps" },
    description: { tr: "Verinin varsayılan olarak kullanıcının cihazında yaşadığı uygulama akışları.", en: "Application flows where user data lives on the device by default." },
    order: 5
  },
  {
    id: "product-ui",
    label: { tr: "Ürün Arayüzü", en: "Product UI" },
    description: { tr: "Kullanıcı akışları, paneller, filtreler ve arayüz kararları.", en: "User flows, dashboards, modals, filtering, and product interface decisions." },
    order: 6
  },
  {
    id: "api-integrations",
    label: { tr: "API Entegrasyonları", en: "API Integrations" },
    description: { tr: "Dış kaynaklardan arama yapma ve içerik çekme.", en: "Search, enrichment, and content retrieval through external data sources." },
    order: 7
  },
  {
    id: "data-persistence",
    label: { tr: "Veri Saklama", en: "Data Persistence" },
    description: { tr: "Yerel depolama, yedekleme, içe/dışa aktarma ve verinin kaybolmaması.", en: "Local storage, backup, import/export, and data continuity." },
    order: 8
  },
  {
    id: "recommendation-tooling",
    label: { tr: "Öneri Sistemleri", en: "Recommendation Tooling" },
    description: { tr: "Öneri üretme, benzerlik hesaplama ve kişiselleştirme.", en: "Recommendation, embedding, similarity scoring, and personalization tools." },
    order: 9
  },
  {
    id: "audio-processing",
    label: { tr: "Ses İşleme", en: "Audio Processing" },
    description: { tr: "Ses girdisinin analiz, ön işleme veya üretim süreçlerinden geçirilmesi.", en: "Analysis, preprocessing, or generation workflows for audio input." },
    order: 10
  },
  {
    id: "pipeline-tooling",
    label: { tr: "İşleme Hatları", en: "Pipeline Tooling" },
    description: { tr: "Ham girdiyi adım adım işleyip kullanılabilir çıktıya çeviren araç zincirleri.", en: "Toolchains that process raw input into intermediate data and usable output." },
    order: 11
  },
  {
    id: "rhythm-systems",
    label: { tr: "Ritim Sistemleri", en: "Rhythm Systems" },
    description: { tr: "Vuruş zamanlaması, isabet değerlendirmesi ve ritme dayalı oynanış.", en: "Beat, timing, judgement, and rhythm-based gameplay systems." },
    order: 12
  },
  {
    id: "procedural-gameplay-data",
    label: { tr: "Üretilen Oynanış Verisi", en: "Procedural Gameplay Data" },
    description: { tr: "Analiz edilen sesten oynanabilir olaylar üretmek.", en: "Generating gameplay events or playable data from analyzed input." },
    order: 13
  },
  {
    id: "voice-tools",
    label: { tr: "Ses Araçları", en: "Voice Tools" },
    description: { tr: "Ses profilleri, referans kayıtlar ve ses üretim araçları.", en: "Voice profile, reference audio, TTS, and voice generation tools." },
    order: 14
  },
  {
    id: "tts-experiments",
    label: { tr: "Metinden Sese Denemeleri", en: "TTS Experiments" },
    description: { tr: "Metinden ses üretimi ve farklı modellerle yapılan denemeler.", en: "Text-to-speech generation, model behavior, and inference tests." },
    order: 15
  },
  {
    id: "audio-preprocessing",
    label: { tr: "Ses Ön İşleme", en: "Audio Preprocessing" },
    description: { tr: "Sesi temizleme, seviyesini eşitleme ve doğru formata getirme.", en: "Audio cleanup, normalization, formatting, and quality preparation." },
    order: 16
  },
  {
    id: "local-first-labs",
    label: { tr: "Yerel Deney Ortamları", en: "Local-first Labs" },
    description: { tr: "Verinin bilgisayardan çıkmadığı deneysel araçlar.", en: "Experimental tools built around local data and local execution." },
    order: 17
  },
  {
    id: "evaluation-workflow",
    label: {
      tr: "Doğrulama / Değerlendirme",
      en: "Validation / Evaluation"
    },
    description: {
      tr: "Yapısal QA, kalite raporları ve karşılaştırılabilir değerlendirme.",
      en: "Structural QA, quality reports, and comparable evaluation."
    },
    order: 18
  },
  {
    id: "computer-vision",
    label: { tr: "Bilgisayarlı Görü", en: "Computer Vision" },
    description: { tr: "Kamera girdisinden yüz, el, nesne veya hareket algılama.", en: "Detecting faces, hands, objects, or motion from camera input." },
    order: 19
  },
  {
    id: "gesture-interaction",
    label: { tr: "El Hareketiyle Etkileşim", en: "Gesture Interaction" },
    description: { tr: "El hareketlerini arayüz komutlarına çevirme.", en: "Connecting hand landmarks or motion data to UI and command flows." },
    order: 20
  },
  {
    id: "local-recognition",
    label: { tr: "Yerel Tanıma", en: "Local Recognition" },
    description: { tr: "Bilgisayarda çalışan yüz tanıma ve profil eşleme.", en: "Local verification, recognition, and profile matching prototypes." },
    order: 21
  },
  {
    id: "real-time-camera-pipeline",
    label: { tr: "Gerçek Zamanlı Kamera Akışı", en: "Real-time Camera Pipeline" },
    description: { tr: "Canlı kamera görüntüsünü kare kare işleyip anında geri bildirim verme.", en: "Connecting live camera input to frame, detection, and feedback chains." },
    order: 22
  },
  {
    id: "gamified-ui",
    label: { tr: "Oyunlaştırılmış Arayüz", en: "Gamified UI" },
    description: { tr: "Teknik çıktıları oyun gibi hissettiren bir arayüzle sunma.", en: "Presenting technical output through gamified interface metaphors." },
    order: 23
  },
  {
    id: "deterministic-pipelines",
    label: {
      tr: "Tekrarlanabilir İşleme Hatları",
      en: "Deterministic Pipelines"
    },
    description: {
      tr: "Sabit girdiden tekrar üretilebilir çıktı ve kanıt.",
      en: "Reproducible outputs and evidence from fixed inputs."
    },
    order: 24
  },
  {
    id: "transaction-safety",
    label: {
      tr: "İşlem Güvenliği",
      en: "Transaction Safety"
    },
    description: {
      tr: "Preimage, hash, doğrulama ve geri alma sınırları.",
      en: "Preimage, hash, verification, and rollback boundaries."
    },
    order: 25
  },
  {
    id: "ai-governance",
    label: {
      tr: "AI Yönetişimi",
      en: "AI Governance"
    },
    description: {
      tr: "Yapılandırılmış yetki ve açık görev/sonuç sözleşmeleri.",
      en: "Structured authority and explicit task/result contracts."
    },
    order: 26
  },
  {
    id: "provider-architecture",
    label: {
      tr: "Sağlayıcı Mimarisi",
      en: "Provider Architecture"
    },
    description: {
      tr: "Sağlayıcı sınırları, erişim kapıları ve deterministik fallback.",
      en: "Provider boundaries, access gates, and deterministic fallback."
    },
    order: 27
  },
  {
    id: "secure-credentials",
    label: {
      tr: "Güvenli Anahtar Saklama",
      en: "Secure Credential Handling"
    },
    description: {
      tr: "Backend sahipliği ve işletim sistemi secret store sınırı.",
      en: "Backend ownership and operating-system secret-store boundaries."
    },
    order: 28
  },
  {
    id: "localization-tooling",
    label: {
      tr: "Yerelleştirme Araçları",
      en: "Localization Tooling"
    },
    description: {
      tr: "Oyun kodunu bozmadan çeviri, terim tutarlılığı, çeviri hafızası ve hata kontrolü.",
      en: "Protected syntax, terminology, translation memory, and structural QA."
    },
    order: 29
  },
  {
    id: "release-engineering",
    label: {
      tr: "Sürüm Mühendisliği",
      en: "Release Engineering"
    },
    description: {
      tr: "Sürüm paketini doğrulama ve yayına çıkmadan önceki kontroller.",
      en: "Package validation, acceptance evidence, and explicit release gates."
    },
    order: 30
  },
  {
    id: "desktop-architecture",
    label: {
      tr: "Masaüstü Mimarisi",
      en: "Desktop Architecture"
    },
    description: {
      tr: "Arayüz ile çekirdeğin ayrılması ve yerelde çalışan masaüstü uygulamaları.",
      en: "Client/core separation and local execution contracts."
    },
    order: 31
  },
  {
    id: "reinforcement-learning",
    label: { tr: "Pekiştirmeli Öğrenme", en: "Reinforcement Learning" },
    description: {
      tr: "Tekrarlanabilir eğitim, rastgele ajanla karşılaştırma ve beceri aktarma denemeleri.",
      en: "Learning agents with seeded training, baseline comparison, and transfer experiments."
    },
    order: 32
  },
  {
    id: "multiplayer-networking",
    label: { tr: "Çok Oyunculu Ağ", en: "Multiplayer Networking" },
    description: {
      tr: "Oyuncuların aynı oturuma bağlanması, sunucunun tek doğru durumu tutması ve herkesin yalnız kendi bilgisini görmesi.",
      en: "Host/Client sessions, authoritative server state, and per-player information visibility."
    },
    order: 33
  },
  {
    id: "learning-design",
    label: { tr: "Öğrenme Tasarımı", en: "Learning Design" },
    description: {
      tr: "Soru bankası, ustalık eşiği, deneme sınavı ve ilerleme kaydı gibi öğrenme akışları.",
      en: "Learning flows such as question banks, mastery thresholds, practice exams, and progress saves."
    },
    order: 34
  },
  {
    id: "deep-learning-models",
    label: { tr: "Derin Öğrenme Modelleri", en: "Deep Learning Models" },
    description: {
      tr: "Görüntüde nesneleri ayırma, özellik tahmini ve modellerin karşılaştırılması.",
      en: "Segmentation, attribute classification, and controlled model comparison."
    },
    order: 35
  },
  {
    id: "ai-assistant-tooling",
    label: { tr: "AI Asistan Araçları", en: "AI Assistant Tooling" },
    description: {
      tr: "AI kodlama asistanlarıyla çalışırken işi kolaylaştıran küçük araçlar.",
      en: "Hooks, notifications, and workflow tools built around AI coding assistants."
    },
    order: 36
  }
];
