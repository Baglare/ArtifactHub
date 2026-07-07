import type { Artifact } from "@/types/artifact";

const step = (label: string) => ({ label });

export const artifacts: Artifact[] = [
  {
    id: "tempoblade",
    slug: "tempoblade",
    title: "TempoBlade",
    statusId: "systems-prototype",
    categoryId: "game-systems",
    themeId: "neon-blade-relic",
    featuredLevel: "primary",
    order: 1,
    homeOrder: 4,
    repoUrl: "https://github.com/Baglare/TempoBlade",
    summary: {
      tr: "Tempo tabanlı combat, parry/deflect ve data-driven progression sistemleri üzerine kurulu Unity gameplay prototipi.",
      en: "A Unity gameplay prototype built around tempo-based combat, parry/deflect behavior, and data-driven progression systems."
    },
    positioning: {
      tr: "Gameplay systems ve combat architecture tarafını temsil eden Unity artifact’i.",
      en: "A Unity artifact representing gameplay systems and combat architecture."
    },
    techStack: ["Unity", "C#", "ScriptableObject", "URP", "Input System"],
    focusAreaIds: ["gameplay-systems", "combat-architecture", "unity-systems", "data-driven-design"],
    coreSystems: [
      "Run State",
      "Room / Encounter Flow",
      "Reward Doors",
      "Player Movement",
      "Player Combat",
      "WeaponSO",
      "ComboStepData",
      "Parry System",
      "IDeflectable Projectile Layer",
      "Tempo System",
      "Enemy Variants",
      "Hub / Blacksmith / Progression",
      "Skill Tree Skeleton"
    ],
    transformation: {
      input: { tr: "Oyuncu input’u, silah verisi ve düşman/oda verisi", en: "Player input, weapon data, and enemy/room data" },
      process: { tr: "Combat state, tempo tier, combo çözümleme, parry/deflect hesaplama", en: "Combat state, tempo tier, combo resolution, and parry/deflect calculation" },
      output: { tr: "Oynanabilir combat loop, oda akışı ve progression çıktısı", en: "Playable combat loop, room flow, and progression output" },
      compact: {
        tr: "Oyuncu input’u ve combat verisi → tempo/combo çözümleme → oynanabilir aksiyon döngüsü",
        en: "Player input and combat data → tempo/combo resolution → playable action loop"
      }
    },
    architectureFlow: {
      steps: [
        "MainMenu",
        "Hub",
        "RunManager",
        "Gameplay Scene",
        "RoomManager",
        "RoomSO / RoomLayout",
        "Enemy Waves",
        "PlayerCombat",
        "WeaponSO / ComboStepData",
        "ParrySystem / IDeflectable",
        "RewardDoor",
        "Next Room / Run Progression"
      ].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "TempoBlade, combat hissi ve sistem mimarisi üzerine odaklanan bir Unity gameplay prototipidir. Proje, oyuncu input’unu silah verisi, kombo adımları, tempo değeri, parry penceresi ve düşman davranışlarıyla birleştirerek oynanabilir bir aksiyon döngüsü üretir.\n\nArtifactHub içinde TempoBlade’in rolü final oyun sunmak değil; combat architecture, data-driven gameplay ve roguelite progression kararlarını belgelemektir.",
          en: "TempoBlade is a Unity gameplay prototype focused on combat feel and system architecture. It combines player input with weapon data, combo steps, tempo values, parry windows, and enemy behavior to produce a playable action loop.\n\nInside ArtifactHub, TempoBlade is not presented as a finished game. Its role is to document combat architecture, data-driven gameplay, and roguelite progression decisions."
        }
      },
      currentScope: {
        body: {
          tr: "Mevcut sürümde ana menü, hub ve gameplay sahneleri üzerinden ilerleyen bir oyun akışı bulunur. Oyuncu hub’dan run başlatabilir, gameplay sahnesinde oda bazlı encounter akışına girer, düşman dalgalarıyla savaşır ve oda temizlenince reward door üzerinden sonraki aşamaya geçer.\n\nCombat tarafında silah verisi, combo adımları, saldırı görselleştirmesi, parry/deflect davranışı, tempo tier sistemi ve düşman varyasyonları prototiplenmiştir. Progression tarafında hub, ekonomi, kalıcı kaynaklar, blacksmith ve skill tree iskeleti bulunur.",
          en: "The current version has a game flow through main menu, hub, and gameplay scenes. The player can start a run from the hub, enter room-based encounters in the gameplay scene, fight enemy waves, and move to the next stage through a reward door after a room is cleared.\n\nOn the combat side, weapon data, combo steps, attack visualization, parry/deflect behavior, tempo tiers, and enemy variants are prototyped. On the progression side, the project includes a hub, economy, persistent resources, blacksmith flow, and skill tree skeleton."
        }
      },
      designDecisions: [
        {
          title: { tr: "Silah davranışlarını ScriptableObject ile taşımak", en: "Carry weapon behavior through ScriptableObject data" },
          description: {
            tr: "Silah davranışlarının ScriptableObject verisiyle taşınması, combat sistemini yeni silah ve combo varyasyonları için genişletilebilir hale getirir.",
            en: "Keeping weapon behavior in ScriptableObject data makes the combat system easier to extend with new weapons and combo variations."
          }
        },
        {
          title: { tr: "ComboStepData ile weapon-specific combo kurmak", en: "Build weapon-specific combos with ComboStepData" },
          description: {
            tr: "ComboStepData kullanımı, saldırı davranışını tek bir sabit animasyon zinciri olmaktan çıkarıp weapon-specific combo dizilerine dönüştürür.",
            en: "Using ComboStepData turns attack behavior from one fixed animation chain into weapon-specific combo sequences."
          }
        },
        {
          title: { tr: "IDeflectable ile projectile davranışını genelleştirmek", en: "Generalize projectile behavior through IDeflectable" },
          description: {
            tr: "IDeflectable arayüzü, standart projectile ve boss projectile gibi farklı mermi tiplerini aynı deflect mantığı altında toplamaya yarar.",
            en: "The IDeflectable interface keeps standard projectiles and boss projectiles under the same deflect logic."
          }
        },
        {
          title: { tr: "Tempo tier sistemini combat feedback’e bağlamak", en: "Connect tempo tiers to combat feedback" },
          description: {
            tr: "Tempo tier sistemi, combat performansını yalnızca input hızına değil, oyuncunun ritim ve akış içindeki davranışına da bağlamayı hedefler.",
            en: "The tempo tier system aims to connect combat performance not only to input speed, but also to player behavior within rhythm and flow."
          }
        },
        {
          title: { tr: "Hub ve progression yapısıyla run döngüsü kurmak", en: "Build the run loop around hub and progression systems" },
          description: {
            tr: "Hub ve progression yapısı, tek seferlik combat sahnesi yerine roguelite döngüsüne uygun daha geniş bir sistem zemini kurar.",
            en: "The hub and progression structure create a broader system base for a roguelite loop instead of a one-off combat scene."
          }
        }
      ],
      limitations: [
        {
          tr: "TempoBlade final oyun olarak sunulmaz; combat, encounter ve progression sistemlerini test eden genişletilebilir bir gameplay prototipidir.",
          en: "TempoBlade is not presented as a finished game; it is an extensible gameplay prototype for testing combat, encounter, and progression systems."
        },
        { tr: "Görsel ve ses polish’i final seviyesinde değildir.", en: "Visual and audio polish are not at final quality." },
        { tr: "Balans değerleri deneysel kabul edilir.", en: "Balance values should be treated as experimental." },
        {
          tr: "Bazı sistemler prototip seviyesinde olduğu için ileride refactor, polish ve oynanış testi gerektirir.",
          en: "Some systems are still at prototype level and need future refactor, polish, and playtesting."
        },
        {
          tr: "Ana değer final içerik miktarında değil; combat mimarisi, veri odaklı sistem yapısı ve gameplay loop tasarımındadır.",
          en: "The main value is not final content volume; it is the combat architecture, data-driven system structure, and gameplay loop design."
        }
      ],
      plannedExtensions: [
        { tr: "Combat ekran görüntüleri ve kısa görsel materyal ekleme", en: "Add combat screenshots and short visual material" },
        { tr: "Build/release akışını daha temiz sunma", en: "Present the build and release flow more clearly" },
        { tr: "Enemy encounter polish", en: "Polish enemy encounters" },
        { tr: "Tempo feedback görsellerini iyileştirme", en: "Improve tempo feedback visuals" },
        { tr: "Progression sistemini daha tutarlı hale getirme", en: "Make the progression system more consistent" },
        { tr: "README ve ArtifactHub teknik dosyasını çapraz bağlama", en: "Cross-link the README and ArtifactHub technical entry" }
      ],
      visualNotes: {
        tr: "Kırık antik kılıç, siyah taş zemin, mor/kızıl/mavi neon çatlaklar ve kısa slash izi.",
        en: "Broken ancient blade, black stone ground, purple/red/blue neon cracks, and a short slash trail."
      }
    }
  },
  {
    id: "media-tracker",
    slug: "media-tracker",
    title: "MediaTracker",
    statusId: "product-prototype",
    categoryId: "web-application",
    themeId: "archive-terminal",
    featuredLevel: "primary",
    order: 2,
    homeOrder: 5,
    repoUrl: "https://github.com/Baglare/MediaTracker",
    summary: {
      tr: "Film, dizi, anime, manga ve kitap takibini local-first veri yapısıyla yöneten kişisel medya arşiv sistemi.",
      en: "A personal local-first media archive for tracking films, series, anime, manga, novels, and books."
    },
    positioning: {
      tr: "Local-first product design ve medya veri yönetimi tarafını temsil eden web application artifact’i.",
      en: "A web application artifact representing local-first product design and media data management."
    },
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "localStorage", "Supabase", "FastAPI"],
    focusAreaIds: [
      "local-first-apps",
      "product-ui",
      "api-integrations",
      "data-persistence",
      "recommendation-tooling"
    ],
    coreSystems: [
      "Local Media Library",
      "Dashboard",
      "Global Search",
      "Media Detail / Modal Flow",
      "Progress Tracking",
      "Watchlist / Favorites / Ratings",
      "JSON Import / Export",
      "External API Search",
      "Supabase-ready Auth / Cloud Flow",
      "AI Advisor",
      "Embedding Service",
      "Recommendation Tooling"
    ],
    transformation: {
      input: { tr: "Kullanıcı medya kayıtları, API arama sonuçları ve yerel arşiv verisi", en: "User media records, API search results, and local archive data" },
      process: { tr: "Filtreleme, arşivleme, progress tracking, JSON yönetimi, öneri hesaplama", en: "Filtering, archiving, progress tracking, JSON management, and recommendation scoring" },
      output: { tr: "Kişisel medya dashboard’u ve local-first medya kütüphanesi", en: "Personal media dashboard and local-first media library" },
      compact: {
        tr: "Medya kayıtları ve API sonuçları → arşivleme/progress takibi → kişisel medya dashboard’u",
        en: "Media records and API results → archiving/progress tracking → personal media dashboard"
      }
    },
    architectureFlow: {
      steps: [
        "User Interface",
        "Media Actions / UI State",
        "Local Storage Layer",
        "Media Library Logic",
        "External API Integrations",
        "Optional Supabase Layer",
        "Recommendation / Embedding Tools",
        "Dashboard / Library Output"
      ].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "MediaTracker, kişisel medya tüketimini tek bir local-first arşiv içinde düzenlemek için tasarlanmış ürün prototipidir. Varsayılan veri akışı kullanıcının tarayıcısında yerel olarak çalışır; medya kayıtları, ilerleme durumu, puanlar, listeler ve filtreleme davranışları bu yerel veri modeli üzerine kurulur.\n\nArtifactHub içinde MediaTracker’ın rolü, ürün tipi bir web uygulamasında veri sürekliliği, medya API entegrasyonu, local-first kararları ve genişletilebilir recommendation altyapısını temsil etmektir.",
          en: "MediaTracker is a product prototype for organizing personal media consumption in one local-first archive. The default data flow runs locally in the user’s browser; media records, progress state, ratings, lists, and filtering behavior are built on that local data model.\n\nInside ArtifactHub, MediaTracker represents data continuity, media API integration, local-first decisions, and extensible recommendation tooling in a product-style web application."
        }
      },
      currentScope: {
        body: {
          tr: "Mevcut sürümde kullanıcı medya kayıtlarını yerel olarak yönetebilir, farklı medya türleri üzerinde arama ve filtreleme yapabilir, izleme/okuma durumlarını takip edebilir, favori/watchlist/puan/not gibi kişisel arşiv verileri oluşturabilir.\n\nAPI entegrasyonları, medya arama ve zenginleştirme tarafını destekler. JSON import/export yapısı, yerel verinin taşınabilirliğini sağlar. Supabase katmanı ana akış değil; auth, cloud aktarım ve senkron hazırlıkları için opsiyonel genişletme yönüdür.",
          en: "The current version lets the user manage media records locally, search and filter across different media types, track watching/reading states, and create personal archive data such as favorites, watchlists, ratings, and notes.\n\nAPI integrations support media search and enrichment. JSON import/export keeps local data portable. The Supabase layer is not the main flow; it is an optional extension path for auth, cloud transfer, and sync preparation."
        }
      },
      designDecisions: [
        {
          title: { tr: "Local-first yaklaşımı ana akış yapmak", en: "Make local-first behavior the main flow" },
          description: {
            tr: "Local-first yaklaşım, uygulamanın temel kullanımını hesap veya sunucu bağımlılığına bağlamaz. Kullanıcı arşivi tarayıcıda yaşayabilir ve uygulama offline-first karakterini korur.",
            en: "The local-first approach keeps the core use case independent from accounts or servers. The user archive can live in the browser and the app keeps an offline-first character."
          }
        },
        {
          title: { tr: "Supabase’i ana veri kaynağı değil genişletme katmanı yapmak", en: "Use Supabase as an extension layer, not the primary data source" },
          description: {
            tr: "Supabase katmanı, ilk veri kaynağı olarak değil; cloud aktarım, hesap ve senkronizasyon genişletmesi olarak konumlandırılır. Bu, ürünün yerel kullanım değerini korurken büyüme alanı bırakır.",
            en: "The Supabase layer is positioned for cloud transfer, accounts, and synchronization, not as the first data source. This preserves local value while leaving room to grow."
          }
        },
        {
          title: { tr: "JSON import/export ile taşınabilir veri sağlamak", en: "Provide portable data through JSON import/export" },
          description: {
            tr: "JSON import/export, medya arşivini kapalı bir uygulama verisi olmaktan çıkarıp taşınabilir hale getirir.",
            en: "JSON import/export keeps the media archive from becoming closed application data and makes it portable."
          }
        },
        {
          title: { tr: "Harici API entegrasyonlarıyla kayıt oluşturmayı hafifletmek", en: "Reduce manual entry through external API integrations" },
          description: {
            tr: "Medya API entegrasyonları, kullanıcı girişiyle manuel veri yazma yükünü azaltır ve arşiv kaydını zenginleştirir.",
            en: "Media API integrations reduce manual data entry and enrich archive records."
          }
        },
        {
          title: { tr: "Öneri araçlarını genişletme potansiyeli olarak tutmak", en: "Keep recommendation tooling as an extension path" },
          description: {
            tr: "Embedding ve öneri araçları, medya takip uygulamasını sadece liste tutan bir sistemden kişisel keşif aracına genişletme potansiyeli taşır.",
            en: "Embedding and recommendation tools can extend the tracker from a list manager into a personal discovery tool."
          }
        }
      ],
      limitations: [
        {
          tr: "MediaTracker final SaaS ürünü olarak sunulmaz; local-first medya arşiv sistemi ve ürün prototipi olarak konumlanır.",
          en: "MediaTracker is not presented as a finished SaaS product; it is positioned as a local-first media archive and product prototype."
        },
        { tr: "Cloud sync ana akış değil, opsiyonel genişletme katmanıdır.", en: "Cloud sync is an optional extension layer, not the main flow." },
        { tr: "Öneri sistemi deneysel kabul edilir.", en: "The recommendation system should be treated as experimental." },
        { tr: "Harici API sonuçları kaynakların veri kalitesine ve erişilebilirliğine bağlıdır.", en: "External API results depend on source data quality and availability." },
        { tr: "Uygulama kapsamı geniş olduğu için ileride modüler refactor ve UI sadeleştirmesi gerekebilir.", en: "Because the app scope is broad, future modular refactor and UI simplification may be needed." }
      ],
      plannedExtensions: [
        { tr: "Dashboard ve arşiv ekranları için statik görseller ekleme", en: "Add static visuals for dashboard and archive screens" },
        { tr: "Local-first / Supabase akışını ArtifactHub üzerinde diyagramlaştırma", en: "Diagram the local-first / Supabase flow on ArtifactHub" },
        { tr: "Büyük UI/state parçalarını daha modüler hale getirme", en: "Make large UI/state sections more modular" },
        { tr: "Öneri sistemini daha net demo edilebilir hale getirme", en: "Make the recommendation system easier to demo clearly" },
        { tr: "İngilizce teknik dosya metnini ileride hazırlama", en: "Prepare the English technical entry text later" }
      ],
      visualNotes: {
        tr: "Koyu lacivert/grafit arka plan, cyan vurgu, medya kartları, progress ring ve arşiv terminali hissi.",
        en: "Dark navy/graphite background, cyan accents, media cards, progress rings, and an archive terminal feel."
      }
    }
  },
  {
    id: "pulseforge",
    slug: "pulseforge",
    title: "PulseForge",
    seriesId: "forge",
    statusId: "pipeline-prototype",
    categoryId: "audio-game-tooling",
    themeId: "forge-pulse",
    featuredLevel: "series-featured",
    order: 3,
    homeOrder: 1,
    repoUrl: "https://github.com/Baglare/PulseForge",
    summary: {
      tr: "Ses dosyasındaki ritmik vuruşları analiz edip beatmap verisine ve Unity ritim-combat eventlerine dönüştüren audio pipeline.",
      en: "An audio-to-beatmap pipeline that analyzes rhythmic hits in a WAV file and turns them into Unity rhythm-combat events."
    },
    positioning: {
      tr: "Audio pipeline ve procedural gameplay data tarafını temsil eden Forge artifact’i.",
      en: "A Forge artifact representing audio pipelines and procedural gameplay data."
    },
    techStack: ["Unity", "C#", "Python", "Audio Analysis", "JSON", "Rhythm Systems"],
    focusAreaIds: [
      "audio-processing",
      "pipeline-tooling",
      "rhythm-systems",
      "procedural-gameplay-data",
      "unity-systems"
    ],
    coreSystems: [
      "WAV Analyzer",
      "Raw Beatmap JSON",
      "Playable Beatmap Postprocessor",
      "Combat Style Variants",
      "Unity Beatmap Import",
      "Forge Preview / Beatmap Visualization",
      "Rhythm Judgement",
      "DSP Audio Clock",
      "Rhythm Combat Prototype"
    ],
    transformation: {
      input: { tr: "WAV ses dosyası", en: "WAV audio file" },
      process: { tr: "Ritim analizi, beatmap üretimi, postprocess ve combat style variant üretimi", en: "Rhythm analysis, beatmap generation, postprocessing, and combat style variant generation" },
      output: { tr: "Unity içinde kullanılabilir ritim-combat eventleri", en: "Rhythm-combat events usable inside Unity" },
      compact: {
        tr: "WAV ses dosyası → ritim analizi/beatmap üretimi → Unity ritim-combat eventleri",
        en: "WAV audio file → rhythm analysis/beatmap generation → Unity rhythm-combat events"
      }
    },
    architectureFlow: {
      steps: [
        "Audio File",
        "Python Analyzer",
        "Raw Beatmap Data",
        "Beatmap Postprocessor",
        "Playable Beatmap JSON",
        "Combat Style Variant Generator",
        "Unity Editor Preview",
        "Unity Runtime",
        "Rhythm Judgement / Combat Feedback"
      ].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "PulseForge, ham ses girdisini oynanabilir ritim verisine dönüştüren teknik pipeline artifact’idir. Proje, bir ses dosyasındaki ritmik yoğunlukları analiz eder, bunları beatmap formatına taşır, postprocess aşamasından geçirir ve Unity runtime içinde ritim-combat eventleri olarak kullanır.\n\nArtifactHub içinde PulseForge, Forge Series’in en net veri dönüşüm örneğidir: ses dosyası girer, yapılandırılmış beatmap verisi çıkar, bu veri runtime davranışına bağlanır.",
          en: "PulseForge is a technical pipeline artifact that turns raw audio input into playable rhythm data. It analyzes rhythmic density in an audio file, moves the result into a beatmap format, runs it through postprocessing, and uses it as rhythm-combat events inside Unity runtime.\n\nInside ArtifactHub, PulseForge is the clearest data transformation example in Forge Series: an audio file goes in, structured beatmap data comes out, and that data is connected to runtime behavior."
        }
      },
      currentScope: {
        body: {
          tr: "Mevcut kapsamda Python tarafında WAV analizi ve beatmap üretim akışı; Unity tarafında beatmap import/preview, prototip ritim-combat davranışı, judgement sistemi ve combat style variant üretimi bulunur.\n\nProje final ritim oyunu olarak değil, audio analysis → beatmap → Unity runtime zincirini test eden pipeline prototipi olarak sunulur.",
          en: "The current scope includes WAV analysis and beatmap generation on the Python side; on the Unity side it includes beatmap import/preview, prototype rhythm-combat behavior, a judgement system, and combat style variant generation.\n\nThe project is presented as a pipeline prototype for testing the audio analysis → beatmap → Unity runtime chain, not as a finished rhythm game."
        }
      },
      designDecisions: [
        {
          title: { tr: "Python analiz katmanını Unity runtime’dan ayırmak", en: "Separate the Python analysis layer from Unity runtime" },
          description: {
            tr: "Python analiz katmanının Unity runtime’dan ayrılması, ses işleme ve oyun davranışını farklı sorumluluklara böler.",
            en: "Separating the Python analysis layer from Unity runtime keeps audio processing and game behavior in different responsibilities."
          }
        },
        {
          title: { tr: "Beatmap verisini JSON olarak taşımak", en: "Carry beatmap data as JSON" },
          description: {
            tr: "Beatmap verisinin JSON olarak taşınması, analiz çıktısını okunabilir, test edilebilir ve Unity dışı araçlarla da işlenebilir hale getirir.",
            en: "Moving beatmap data as JSON makes the analysis output readable, testable, and usable by tools outside Unity."
          }
        },
        {
          title: { tr: "Raw ve playable beatmap ayrımı yapmak", en: "Separate raw and playable beatmaps" },
          description: {
            tr: "Raw beatmap ve playable beatmap ayrımı, analiz çıktısı ile gameplay için kullanılabilir veri arasında bilinçli bir postprocess katmanı kurar.",
            en: "The raw/playable beatmap split creates a deliberate postprocess layer between analysis output and gameplay-ready data."
          }
        },
        {
          title: { tr: "Combat style variants üretmek", en: "Generate combat style variants" },
          description: {
            tr: "Combat style variants, aynı beatmap temelinden farklı oynanış yorumları üretme alanı açar.",
            en: "Combat style variants leave room to produce different gameplay interpretations from the same beatmap base."
          }
        },
        {
          title: { tr: "Unity Editor preview kullanmak", en: "Use Unity Editor preview" },
          description: {
            tr: "Unity Editor preview, pipeline çıktısını runtime’a girmeden önce görsel olarak incelemeye yarar.",
            en: "Unity Editor preview makes it possible to inspect pipeline output visually before it enters runtime."
          }
        }
      ],
      limitations: [
        { tr: "PulseForge final ritim oyunu değildir.", en: "PulseForge is not a finished rhythm game." },
        { tr: "Runtime MP3 import veya gerçek zamanlı analiz iddiası taşımaz.", en: "It does not claim runtime MP3 import or real-time analysis." },
        { tr: "Beat detection sonuçları müzik türüne, ses kalitesine ve analiz parametrelerine bağlıdır.", en: "Beat detection results depend on music type, audio quality, and analysis parameters." },
        { tr: "Unity tarafındaki oynanış prototip seviyesindedir.", en: "The Unity-side gameplay remains at prototype level." },
        { tr: "Ana değer, ses analiziyle gameplay datası üretme zincirinin kurulmuş olmasıdır.", en: "The main value is the established chain for generating gameplay data from audio analysis." }
      ],
      plannedExtensions: [
        { tr: "Beatmap visualization çıktılarının ArtifactHub’a eklenmesi", en: "Add beatmap visualization outputs to ArtifactHub" },
        { tr: "Pipeline diyagramının görsel hale getirilmesi", en: "Turn the pipeline into a visual diagram" },
        { tr: "Farklı şarkı türleriyle analiz örnekleri hazırlanması", en: "Prepare analysis examples for different song types" },
        { tr: "Unity prototip UI iyileştirmesi", en: "Improve the Unity prototype UI" },
        { tr: "Combat style variant örneklerinin daha net belgelenmesi", en: "Document combat style variant examples more clearly" }
      ],
      visualNotes: {
        tr: "Kömür siyahı, amber/turuncu vurgu, waveform, beat marker ve örs üzerinde dövülen ses dalgası.",
        en: "Charcoal black, amber/orange accents, waveform, beat markers, and an audio wave forged on an anvil."
      }
    }
  },
  {
    id: "voxforge",
    slug: "voxforge",
    title: "VoxForge",
    seriesId: "forge",
    statusId: "experimental-lab-prototype",
    categoryId: "voice-audio-lab",
    themeId: "sealed-voice-relic",
    featuredLevel: "normal",
    order: 4,
    homeOrder: 2,
    repoUrl: "https://github.com/Baglare/VoxForge",
    summary: {
      tr: "İzinli referans seslerle yerel TTS, voice profile, ses ön işleme ve kalite değerlendirme akışlarını birleştiren audio lab.",
      en: "A local TTS and voice profile lab for consent-based reference audio, preprocessing, quality reports, and experimental evaluation."
    },
    positioning: {
      tr: "Local TTS, voice profile ve ses değerlendirme akışlarını temsil eden Forge lab artifact’i.",
      en: "A Forge lab artifact representing local TTS, voice profile, and audio evaluation workflows."
    },
    techStack: ["Python", "Gradio", "Coqui XTTS-v2", "FFmpeg", "TTS", "Audio Preprocessing"],
    focusAreaIds: ["voice-tools", "tts-experiments", "audio-preprocessing", "local-first-labs", "evaluation-workflow"],
    coreSystems: [
      "Local Gradio Interface",
      "Reference-based TTS",
      "Voice Profile Manager",
      "Speaker WAV Preprocessing",
      "Audio Quality Report",
      "Inference Presets",
      "Dataset Preparation",
      "Training Runner",
      "Checkpoint Control",
      "Evaluation Reports"
    ],
    transformation: {
      input: { tr: "Referans ses, metin ve dataset parçaları", en: "Reference audio, text, and dataset pieces" },
      process: { tr: "Ses ön işleme, profil oluşturma, TTS inference, kalite kontrol ve fine-tuning hazırlığı", en: "Audio preprocessing, profile creation, TTS inference, quality checks, and fine-tuning preparation" },
      output: { tr: "Yerel ses üretim çıktıları, kalite raporları ve deneysel değerlendirme sonuçları", en: "Local audio outputs, quality reports, and experimental evaluation results" },
      compact: {
        tr: "Referans ses ve metin → profil/TTS/kalite değerlendirme → yerel ses üretim çıktıları",
        en: "Reference audio and text → profile/TTS/quality evaluation → local audio outputs"
      }
    },
    architectureFlow: {
      steps: [
        "Reference Audio",
        "Preprocessing / Normalization",
        "Voice Profile",
        "Text Input",
        "XTTS Inference",
        "Generated Audio",
        "Quality Report / Evaluation",
        "Optional Dataset / Fine-tuning Prep"
      ].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "VoxForge, ses üretimi ve voice profile deneylerini kontrollü bir yerel çalışma alanında toplar. Sistem, referans sesin hazırlanması, profile dönüştürülmesi, TTS üretimi, kalite raporu, dataset hazırlığı ve fine-tuning değerlendirmesi gibi adımları tek bir deney akışı altında düzenler.\n\nArtifactHub içinde VoxForge’ün rolü, ses verisinin local-first, izinli ve değerlendirilebilir bir audio lab sürecine nasıl dönüştürülebileceğini göstermektir.",
          en: "VoxForge gathers voice generation and voice profile experiments inside a controlled local workspace. The system organizes reference audio preparation, profile creation, TTS generation, quality reporting, dataset preparation, and fine-tuning evaluation under one experimental workflow.\n\nInside ArtifactHub, VoxForge shows how voice data can become a local-first, consent-based, and evaluable audio lab process."
        }
      },
      currentScope: {
        body: {
          tr: "Mevcut kapsamda Gradio tabanlı yerel arayüz, XTTS tabanlı reference-based TTS üretimi, voice profile yönetimi, speaker WAV ön işleme, kalite raporu, inference presetleri, dataset hazırlığı ve deneysel fine-tuning değerlendirme adımları bulunur.\n\nProje bir public ses üretim servisi değildir. Kullanım çerçevesi yerel çalışma, izinli/kendi ses verisi ve deneysel değerlendirme üzerine kuruludur.",
          en: "The current scope includes a local Gradio interface, XTTS-based reference TTS generation, voice profile management, speaker WAV preprocessing, quality reports, inference presets, dataset preparation, and experimental fine-tuning evaluation steps.\n\nThe project is not a public voice generation service. Its use boundary is local execution, consent-based or self-owned voice data, and experimental evaluation."
        }
      },
      designDecisions: [
        {
          title: { tr: "Local-first çalışma düzeni kurmak", en: "Build a local-first working model" },
          description: { tr: "Local-first çalışma düzeni, ses verisinin uzak servislere taşınmadan deney yapılabilmesini sağlar.", en: "A local-first working model makes it possible to experiment with voice data without sending it to remote services." }
        },
        {
          title: { tr: "Reference-based TTS ve fine-tuning kavramlarını ayırmak", en: "Separate reference-based TTS from fine-tuning" },
          description: {
            tr: "Reference-based TTS ve fine-tuning kavramları birbirinden ayrılır; bu, projenin ne yaptığını ve ne iddia etmediğini daha net gösterir.",
            en: "Keeping reference-based TTS and fine-tuning separate makes the project’s actual behavior and non-claims clearer."
          }
        },
        {
          title: { tr: "Voice profile sistemini model eğitimiyle eşitlememek", en: "Do not equate voice profiles with model training" },
          description: {
            tr: "Voice profile sistemi, referans sesleri tekrar kullanılabilir yerel profiller olarak düzenler ama bunu doğrudan model eğitimiyle eşitlemez.",
            en: "The voice profile system organizes reference audio as reusable local profiles, but it does not present that as model training."
          }
        },
        {
          title: { tr: "Kalite raporu ve değerlendirme akışı eklemek", en: "Add quality reporting and evaluation flow" },
          description: {
            tr: "Kalite raporu ve değerlendirme akışı, ses üretimini sadece çıktı aldım seviyesinden çıkarıp karşılaştırılabilir deney sürecine taşır.",
            en: "Quality reporting and evaluation move voice generation beyond “output was produced” into a comparable experiment process."
          }
        },
        {
          title: { tr: "Gradio ile yerel lab prototipi sağlamak", en: "Provide a local lab prototype with Gradio" },
          description: { tr: "Gradio arayüzü, yerel lab prototipini hızlı test edilebilir hale getirir.", en: "The Gradio interface makes the local lab prototype quick to test." }
        }
      ],
      limitations: [
        { tr: "VoxForge production-grade TTS platformu değildir.", en: "VoxForge is not a production-grade TTS platform." },
        { tr: "Gerçek zamanlı voice changer kapsam dışıdır.", en: "A real-time voice changer is out of scope." },
        { tr: "Ses kalitesi referans sesin kalitesine, model davranışına ve ayarlara bağlıdır.", en: "Audio quality depends on reference audio quality, model behavior, and settings." },
        { tr: "Fine-tuning değerlendirmeleri deneysel kabul edilir.", en: "Fine-tuning evaluations should be treated as experimental." },
        { tr: "Proje, izinli veri ve yerel çalışma prensibi dışında pazarlanmaz.", en: "The project is not presented outside consent-based data and local execution principles." }
      ],
      plannedExtensions: [
        { tr: "Yerel arayüz ekran görüntülerinin ArtifactHub’a eklenmesi", en: "Add local UI screenshots to ArtifactHub" },
        { tr: "Voice profile akışını diyagramlaştırma", en: "Diagram the voice profile flow" },
        { tr: "Kalite raporu örneklerini daha okunabilir sunma", en: "Present quality report examples more clearly" },
        { tr: "Etik kullanım sınırlarını sayfada net görselleştirme", en: "Make ethical use boundaries clearly visible on the page" },
        { tr: "İngilizce teknik metin versiyonunu ileride hazırlama", en: "Prepare a future English technical text version" }
      ],
      ethicalNotes: [
        { tr: "VoxForge yalnızca kullanıcının kendi sesi veya açık izinli referans seslerle çalışacak şekilde konumlandırılır.", en: "VoxForge is positioned for use only with the user’s own voice or explicitly consent-based reference audio." },
        {
          tr: "İzinsiz ses taklidi, üçüncü kişilerin sesini çoğaltma veya public voice cloning servisi iddiası taşımaz.",
          en: "It does not claim unauthorized voice imitation, duplication of third-party voices, or a public voice cloning service."
        },
        {
          tr: "Ses kayıtları, profiller, datasetler, checkpointler, çıktılar ve raporlar yerel çalışma düzeninin parçası olarak ele alınır.",
          en: "Recordings, profiles, datasets, checkpoints, outputs, and reports are treated as part of the local working model."
        },
        {
          tr: "ArtifactHub üzerinde proje, üretim servisi değil; local-first deneysel audio lab olarak sunulur.",
          en: "On ArtifactHub, the project is presented as a local-first experimental audio lab, not a production service."
        }
      ],
      visualNotes: {
        tr: "Koyu mor, amber, mühürlü ses kristali, waveform halkaları ve küçük consent/kilit sembolü.",
        en: "Dark purple, amber, sealed voice crystal, waveform rings, and a small consent/lock symbol."
      }
    },
    riskProfile: {
      requiresEthicalNotes: true,
      dataSensitivity: "voice",
      publicClaimBoundary: {
        tr: "Public voice cloning servisi değil; izinli veriyle yerel çalışan deneysel audio lab prototipi.",
        en: "Not a public voice cloning service; an experimental audio lab prototype that runs locally with consent-based data."
      }
    }
  },
  {
    id: "visionforge",
    slug: "visionforge",
    title: "VisionForge",
    seriesId: "forge",
    statusId: "interactive-cv-prototype",
    categoryId: "computer-vision-interaction",
    themeId: "guild-lens",
    featuredLevel: "normal",
    order: 5,
    homeOrder: 3,
    repoUrl: "https://github.com/Baglare/VisionForge",
    summary: {
      tr: "Kamera girdisini yüz/el algılama, yerel doğrulama ve gesture komutlarıyla etkileşimli büyü arayüzüne dönüştüren computer vision prototipi.",
      en: "A computer vision interaction prototype that connects camera input, face/hand detection, local recognition, and gesture mapping to a gamified spell UI."
    },
    positioning: {
      tr: "Camera-to-interaction ve gesture tabanlı arayüz tarafını temsil eden Forge artifact’i.",
      en: "A Forge artifact representing camera-to-interaction systems and gesture-based interfaces."
    },
    techStack: ["Python", "OpenCV", "MediaPipe", "LBPH", "Computer Vision", "Gesture UI"],
    focusAreaIds: [
      "computer-vision",
      "gesture-interaction",
      "local-recognition",
      "real-time-camera-pipeline",
      "gamified-ui"
    ],
    coreSystems: [
      "Camera Stream",
      "Face Detection",
      "Local Face Recognition",
      "Guild Seal / QR Verification",
      "Hand Landmark Detection",
      "Gesture-to-Spell Mapping",
      "Spellbook UI",
      "Trial Mode",
      "Demo Guide",
      "System Status Panels",
      "System Status"
    ],
    transformation: {
      input: { tr: "Kamera görüntüsü, yüz/el verisi ve lonca mührü", en: "Camera image, face/hand data, and guild seal" },
      process: { tr: "Yüz algılama, yerel doğrulama, gesture çözümleme ve yetki kontrolü", en: "Face detection, local recognition, gesture resolution, and authorization checks" },
      output: { tr: "Büyü komutu, UI aksiyonu ve demo/sistem geri bildirimi", en: "Spell command, UI action, and demo/system feedback" },
      compact: {
        tr: "Kamera görüntüsü → algılama/doğrulama/gesture mapping → büyü komutu ve UI aksiyonu",
        en: "Camera image → detection/recognition/gesture mapping → spell command and UI action"
      }
    },
    architectureFlow: {
      steps: [
        "Camera Input",
        "Frame Capture",
        "Face Detection",
        "Local Recognition / Guild Seal Verification",
        "Hand Landmark Detection",
        "Gesture Classification",
        "Authorization Rules",
        "Spell Action / UI Feedback",
        "Trial Mode / System Output"
      ].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "VisionForge, canlı kamera girdisini algılama ve etkileşim katmanlarından geçirerek oyunlaştırılmış bir büyü arayüzüne dönüştürür. Sistem; yüz varlığı, yerel yüz tanıma, QR/lonca mührü doğrulaması, el landmark verisi ve gesture mapping akışlarını bir araya getirir.\n\nArtifactHub içinde VisionForge’ün rolü, computer vision çıktılarının yalnızca tespit sonucu olarak kalmayıp kullanıcı arayüzü ve etkileşim sistemine nasıl bağlanabileceğini göstermektir.",
          en: "VisionForge passes live camera input through detection and interaction layers, then maps it into a gamified spell interface. The system combines face presence, local face recognition, QR/guild seal verification, hand landmark data, and gesture mapping.\n\nInside ArtifactHub, VisionForge shows how computer vision output can be connected to interface and interaction systems instead of remaining only a detection result."
        }
      },
      currentScope: {
        body: {
          tr: "Mevcut kapsamda canlı kamera akışı, yüz algılama, yerel yüz tanıma, QR/lonca mührü doğrulama, el landmark algılama, büyü komutları, yetkiye göre kilitli/açık komut mantığı, Trial Mode, demo rehberi ve sistem durumu panelleri bulunur.\n\nProje profesyonel güvenlik sistemi olarak sunulmaz. Ana kapsam, local-first çalışan ve portfolyoda gösterilebilir bir computer vision interaction prototipi oluşturmaktır.",
          en: "The current scope includes live camera stream, face detection, local face recognition, QR/guild seal verification, hand landmark detection, spell commands, locked/unlocked command logic based on authorization, Trial Mode, demo guide, and system status panels.\n\nThe project is not presented as a professional security system. Its main scope is a local-first computer vision interaction prototype that can be shown in a portfolio context."
        }
      },
      designDecisions: [
        {
          title: { tr: "CV çıktısını UI event sistemine bağlamak", en: "Connect CV output to a UI event system" },
          description: {
            tr: "Computer vision çıktıları doğrudan UI efekti olarak değil, event ve interaction sisteminin girdisi olarak ele alınır.",
            en: "Computer vision output is treated as input for event and interaction systems, not as a direct visual effect."
          }
        },
        {
          title: { tr: "Authentication temasını güvenlik iddiasına dönüştürmemek", en: "Keep the authentication theme separate from security claims" },
          description: {
            tr: "Yerel yüz tanıma ve lonca mührü teması, projeye authentication hissi verir; ancak bu profesyonel güvenlik iddiasına dönüştürülmez.",
            en: "Local face recognition and the guild seal theme give the project an authentication feel, but this is not turned into a professional security claim."
          }
        },
        {
          title: { tr: "Gesture-to-spell mapping kullanmak", en: "Use gesture-to-spell mapping" },
          description: {
            tr: "Gesture-to-spell mapping, el landmark verisini daha anlaşılır ve gösterilebilir bir etkileşim metaforuna bağlar.",
            en: "Gesture-to-spell mapping connects hand landmark data to a clearer and more presentable interaction metaphor."
          }
        },
        {
          title: { tr: "Trial Mode ve demo rehberi eklemek", en: "Add Trial Mode and a demo guide" },
          description: {
            tr: "Trial Mode ve demo rehberi, projeyi portfolyo gösterimine uygun hale getirir; kullanıcı neye bakacağını uygulama içinde daha hızlı anlar.",
            en: "Trial Mode and the demo guide make the project easier to present in a portfolio and help users understand what to inspect."
          }
        },
        {
          title: { tr: "Sistem durumu panelleriyle algılama katmanını görünür yapmak", en: "Make detection layers visible through system status panels" },
          description: {
            tr: "Sistem durumu ve tanılama panelleri, prototipin yalnızca görsel efekt olmadığını; çalışan algılama katmanlarına dayandığını gösterir.",
            en: "System status and diagnostic panels show that the prototype is not just a visual effect; it depends on working detection layers."
          }
        }
      ],
      limitations: [
        { tr: "Algılama doğruluğu ışık, kamera kalitesi, açı ve ortam koşullarına bağlıdır.", en: "Detection accuracy depends on lighting, camera quality, angle, and environment conditions." },
        { tr: "LBPH tabanlı yerel yüz tanıma modern production-grade güvenlik sistemleriyle eşdeğer değildir.", en: "LBPH-based local face recognition is not equivalent to modern production-grade security systems." },
        { tr: "QR/lonca mührü doğrulama prototip ve tema katmanıdır.", en: "QR/guild seal verification is a prototype and theme layer." },
        { tr: "Proje güvenlik ürünü değil, local-first etkileşimli CV prototipidir.", en: "The project is not a security product; it is a local-first interactive CV prototype." },
        {
          tr: "Kamera erişimi ArtifactHub içinde canlı demo olarak kullanılmayacak; proje kendi repo ve görselleriyle sunulacak.",
          en: "Camera access will not be used as a live demo inside ArtifactHub; the project will be presented through its repo and visuals."
        }
      ],
      plannedExtensions: [
        { tr: "Detection UI görsellerini ArtifactHub’a ekleme", en: "Add detection UI visuals to ArtifactHub" },
        { tr: "Camera-to-spell akışını diyagramlaştırma", en: "Diagram the camera-to-spell flow" },
        { tr: "Trial Mode ekranını teknik dosyada öne çıkarma", en: "Feature the Trial Mode screen in the technical entry" },
        { tr: "Sistem durumu panel çıktılarından örnek görsel hazırlama", en: "Prepare example visuals from system status panel output" },
        { tr: "Gesture mapping sistemini daha açık belgelemek", en: "Document the gesture mapping system more clearly" }
      ],
      ethicalNotes: [
        { tr: "VisionForge profesyonel güvenlik sistemi veya biyometrik doğrulama ürünü olarak sunulmaz.", en: "VisionForge is not presented as a professional security system or biometric verification product." },
        { tr: "Yerel yüz tanıma ve doğrulama katmanları, portfolyo prototipi bağlamında değerlendirilir.", en: "Local face recognition and verification layers are evaluated in the context of a portfolio prototype." },
        { tr: "Biyometrik iddia şişirilmeyecek; proje computer vision interaction sistemi olarak konumlandırılacak.", en: "Biometric claims are not inflated; the project is positioned as a computer vision interaction system." },
        { tr: "Yüz ve kamera verisiyle ilgili kullanım dili kontrollü tutulacak.", en: "Language around face and camera data stays controlled." }
      ],
      visualNotes: {
        tr: "Obsidian zemin, yeşil/amber/mistik mavi vurgu, lens, detection frame, lonca mührü ve el landmark çizgileri.",
        en: "Obsidian ground, green/amber/mystic blue accents, lens, detection frame, guild seal, and hand landmark lines."
      }
    },
    riskProfile: {
      requiresEthicalNotes: true,
      dataSensitivity: "biometric-adjacent",
      publicClaimBoundary: {
        tr: "Profesyonel güvenlik veya biyometrik doğrulama ürünü değil; local-first etkileşimli computer vision prototipi.",
        en: "Not a professional security or biometric verification product; a local-first interactive computer vision prototype."
      }
    }
  }
];
