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
    featuredLevel: "normal",
    order: 6,
    homeOrder: 6,
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
    statusId: "release-candidate",
    categoryId: "web-application",
    themeId: "archive-terminal",
    featuredLevel: "primary",
    order: 3,
    homeOrder: 3,
    repoUrl: "https://github.com/Baglare/MediaTracker",
    summary: {
      tr: "Local-first medya takibinden full-stack ürüne: kontrollü cloud sync, sosyal profil, deterministic öneri ve kapılı research; staging release hazırlığı mevcut.",
      en: "A local-first media tracker evolved into a full-stack product with controlled cloud sync, social profiles, deterministic recommendations, and gated research; staging release preparation is complete."
    },
    positioning: {
      tr: "Portföyün ana ürün mühendisliği çalışması; veri bütünlüğü, provider sınırları ve release hardening ile büyüyen local-first uygulama.",
      en: "Principal product engineering work: a local-first application developed through data integrity, provider boundaries, and release hardening."
    },
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase"
    ],
    focusAreaIds: [
      "local-first-apps",
      "product-ui",
      "api-integrations",
      "data-persistence",
      "recommendation-tooling",
      "provider-architecture",
      "transaction-safety",
      "release-engineering"
    ],
    coreSystems: [
      "Owner-scoped Local Library",
      "Portable Backup / Recovery",
      "Cloud Sync Queue / Revision / Idempotency",
      "Release Calendar / Goals",
      "Recommendation V2 / Deterministic Ranking",
      "Gated Grounded Research / Citations",
      "Public / Protected Social Profiles",
      "Server Authorization / RLS / RPC",
      "Personalization",
      "Staging / Preview Release Gates"
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
        {
          label: "Owner-scoped Local Library"
        },
        {
          label: "Dashboard / Calendar / Goals"
        },
        {
          label: "Normalized Source Providers"
        },
        {
          label: "Deterministic Recommendation V2"
        },
        {
          label: "Gated Provider Evidence / Research"
        },
        {
          label: "Optional Supabase Sync / Social"
        },
        {
          label: "Server Authorization / RLS / RPC"
        }
      ]
    },
    sections: {
      overview: {
        body: {
          tr: "MediaTracker, medya takibi ve keşfini veri bütünlüğü, ürün akışları ve opsiyonel cloud/sosyal katmanla birleştiren full-stack local-first uygulamadır. Tarayıcıdaki owner-scoped veri ana kaynaktır; Supabase yapılandırılmadığında yerel kullanım sürer. UI/state orkestrasyonu domain ve kalıcı tercih sorumluluklarına ayrılmıştır.",
          en: "MediaTracker combines media tracking and discovery with data integrity, product workflows, and optional cloud/social layers in a full-stack local-first application. Owner-scoped browser data remains the primary source; local use continues without Supabase. UI/state orchestration separates domain behavior from persistent preferences."
        }
      },
      currentScope: {
        body: {
          tr: "Dashboard, kütüphane, ilerleme, portable backup/recovery, Release Calendar, goals ve kişiselleştirme uygulanmıştır. Opsiyonel cloud; auth, upload/download/merge ve revision/idempotency/conflict kontrollü owner-scoped sync queue kullanır. Public/protected/personal profiller, takip/engel, feed, öneriler ve bildirim temelleri bulunur.\n\nRecommendation V2 provider-neutral structured evidence ile deterministic eligibility/ranking yapar; LLM final sıralama yapmaz. Grounded Research kaynak/citation/evidence işleme sağlar fakat explicit gate’e bağlıdır. Server authorization, same-origin kontrolleri, RPC/RLS ve profile projection sınırları staging kanıtıyla belgelenmiştir. D8-4A.5E code/Staging/Preview hazırlığı tamamlanmış; D8-4B Production cutover başlamamıştır.",
          en: "Implemented scope includes dashboard, library, progress, portable backup/recovery, Release Calendar, goals, and personalization. Optional cloud uses auth, upload/download/merge, and an owner-scoped sync queue with revision/idempotency/conflict handling. Public/protected/personal profiles, follow/block, feed, recommendations, and notification foundations exist.\n\nRecommendation V2 uses provider-neutral structured evidence and deterministic eligibility/ranking; the LLM does not perform final ranking. Grounded Research handles sources/citations/evidence behind an explicit gate. Server authorization, same-origin checks, RPC/RLS, and profile projection boundaries have documented staging evidence. D8-4A.5E code/Staging/Preview preparation is complete; D8-4B Production cutover has not started."
        }
      },
      designDecisions: [
        {
          title: {
            tr: "Yerel veriyi ana kaynak tutmak",
            en: "Keep local data primary"
          },
          description: {
            tr: "Cloud mutation readiness fail-closed durur; yerel kullanım devam eder. Cloud download/merge kullanıcı aksiyonudur.",
            en: "Cloud mutation readiness fails closed while local use continues. Cloud download/merge remains a user action."
          }
        },
        {
          title: {
            tr: "Öneri kararını deterministic tutmak",
            en: "Keep recommendation decisions deterministic"
          },
          description: {
            tr: "Provider evidence aday bilgisi sağlar; eligibility ve final ranking sözleşmeyle belirlenir.",
            en: "Provider evidence supplies candidate information; eligibility and final ranking follow explicit contracts."
          }
        },
        {
          title: {
            tr: "Public projection ve server yetkisini sınırlandırmak",
            en: "Bound public projections and server authority"
          },
          description: {
            tr: "Profil görünürlüğü ve owner erişimi server/RPC/RLS katmanında kontrol edilir; client isteği yetki üretmez.",
            en: "Profile visibility and owner access are checked through server/RPC/RLS boundaries; client requests cannot create authority."
          }
        }
      ],
      limitations: [
        {
          tr: "Production cutover/deployment doğrulanmış değildir; manuel/external D8 kapıları açıktır.",
          en: "Production cutover/deployment is not verified; manual/external D8 gates remain open."
        },
        {
          tr: "İlk Production release politikası server AI, Grounded Research ve persistent embedding cache’i kapalı tutar; anahtar eklemek erişim açmaz.",
          en: "The first Production release policy disables server AI, Grounded Research, and persistent embedding cache; adding keys does not enable access."
        },
        {
          tr: "TMDB/AniList enablement izin ve attribution kapılarına bağlıdır; Open Library contact/User-Agent gerektirir. OMDb yeni public aramada kapalıdır.",
          en: "TMDB/AniList enablement depends on permission and attribution gates; Open Library requires a contact/User-Agent. OMDb is disabled for new public searches."
        },
        {
          tr: "Cloud’dan otomatik realtime pull yoktur. Legacy Python embedding servisi Recommendation V2’nin aktif production karar hattı değildir.",
          en: "There is no automatic realtime cloud pull. The legacy Python embedding service is not the active production decision path for Recommendation V2."
        },
        {
          tr: "Repository’deki staging kabul kanıtı bu portföy güncellemesinde yeniden yürütülmedi.",
          en: "Repository staging acceptance evidence was not rerun for this portfolio refresh."
        }
      ],
      plannedExtensions: [
        {
          tr: "D8-4B production geçişini kalan manuel/external kapılar kapandıktan sonra ayrı yürütme.",
          en: "Run D8-4B production cutover separately after remaining manual/external gates close."
        },
        {
          tr: "AI/research ve izin kapılı provider enablement’ını ayrı post-release süreç olarak ele alma.",
          en: "Handle AI/research and permission-gated provider enablement as separate post-release work."
        }
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
    order: 5,
    homeOrder: 5,
    repoUrl: "https://github.com/Baglare/PulseForge",
    summary: {
      tr: "Runtime özel şarkı import’u, FFmpeg dönüşümü ve C# Radial V2 analiz/planner hattını DSP ritim oynanışına bağlayan Unity sistem prototipi.",
      en: "A Unity systems prototype linking runtime custom-song import, FFmpeg conversion, and the C# Radial V2 analysis/planner pipeline to DSP rhythm gameplay."
    },
    positioning: {
      tr: "Güçlü audio-to-gameplay sistem çalışması; güncel C# runtime ile tarihsel Python/Guard–Strike hattı ayrı sözleşmelerdir.",
      en: "A strong audio-to-gameplay systems artifact; current C# runtime and historical Python/Guard–Strike paths have separate contracts."
    },
    techStack: [
      "Unity",
      "C#",
      "FFmpeg",
      "Python (Legacy)",
      "DSP Timing",
      "JSON"
    ],
    focusAreaIds: [
      "audio-processing",
      "pipeline-tooling",
      "rhythm-systems",
      "procedural-gameplay-data",
      "unity-systems"
    ],
    coreSystems: [
      "Runtime Custom Song Import / FFmpeg",
      "RadialAudioAnalyzerV2",
      "RadialEncounterPlanner / Validation / Repair",
      "Radial Rhythm Session / DSP Timing",
      "Calibration / Training / Game Modes",
      "Track Library / Versioned Cache",
      "Legacy Guard / Strike Beatmaps",
      "Legacy Combat Style Variants",
      "Editor Pipeline Preview"
    ],
    transformation: {
      input: {
        tr: "Desteklenen özel ses dosyası",
        en: "Supported custom audio file"
      },
      process: {
        tr: "PCM WAV dönüşümü, runtime onset/beat/section analizi ve encounter planning",
        en: "PCM WAV conversion, runtime onset/beat/section analysis, and encounter planning"
      },
      output: {
        tr: "DSP zamanlı Radial ritim oturumu; ayrı legacy Guard/Strike yolu",
        en: "A DSP-timed Radial rhythm session; a separate legacy Guard/Strike path"
      },
      compact: {
        tr: "Ses → FFmpeg / C# analiz / planner → Radial ritim oturumu",
        en: "Audio → FFmpeg / C# analysis / planner → Radial rhythm session"
      }
    },
    architectureFlow: {
      steps: [
        {
          label: "Custom Audio File"
        },
        {
          label: "FFmpeg / PCM WAV"
        },
        {
          label: "RadialAudioAnalyzerV2"
        },
        {
          label: "RadialEncounterPlanner / Repair"
        },
        {
          label: "Versioned Beatmap Cache"
        },
        {
          label: "DSP Timing / Input"
        },
        {
          label: "Radial Session / Modes / UI"
        }
      ]
    },
    sections: {
      overview: {
        body: {
          tr: "PulseForge, ses analizinden oynanabilir ritim verisine uzanan Unity sistem prototipidir. Güncel C# Radial V2; onset/feature extraction, tempo/beat grid, section analizi ve seed tabanlı encounter planner’ı birleştirir. Tarihsel ilk altı milestone Python pipeline, Guard/Strike, combat variants ve Windows runtime import temelini oluşturmuştur.",
          en: "PulseForge is a Unity systems prototype connecting audio analysis to playable rhythm data. Current C# Radial V2 combines onset/feature extraction, tempo/beat grids, section analysis, and a seeded encounter planner. The first six historical milestones established the Python pipeline, Guard/Strike, combat variants, and Windows runtime import foundations."
        }
      },
      currentScope: {
        body: {
          tr: "Windows runtime özel şarkı seçimi ve MP3/WAV/M4A/AAC/FLAC/OGG/OPUS/WMA/AIFF için FFmpeg üzerinden PCM WAV dönüşümü vardır. Runtime analiz ve beatmap üretimi uygulanmıştır. Radial V2 planner validation/repair ve versioned fingerprint; DSP timing/input, calibration/training, Standard/Survival/OneLife modları, settings/profile ve track/audio/beatmap cache kalıcılığı bulunur.\n\nLegacy quick-import onset analizi Guard/Strike beatmap üretir. Legacy Python hattı Balanced/Defensive/Aggressive/Bursty varyantları, rapor ve Editor preview sağlar. Editor pipeline varsayılan Radial V2 ile ayrı LegacyPythonV1 seçimini korur; iki hattın çıktıları aynı contract değildir.",
          en: "Windows runtime custom-song selection and FFmpeg conversion to PCM WAV support MP3/WAV/M4A/AAC/FLAC/OGG/OPUS/WMA/AIFF. Runtime analysis and beatmap generation are implemented. Radial V2 includes planner validation/repair and versioned fingerprints, DSP timing/input, calibration/training, Standard/Survival/OneLife modes, settings/profiles, and persistent track/audio/beatmap caches.\n\nLegacy quick-import onset analysis generates Guard/Strike beatmaps. The legacy Python path provides Balanced/Defensive/Aggressive/Bursty variants, reports, and Editor previews. The Editor pipeline retains default Radial V2 and separate LegacyPythonV1 selection; their outputs do not share the same contract."
        }
      },
      designDecisions: [
        {
          title: {
            tr: "Analiz ve encounter planını ayırmak",
            en: "Separate analysis and encounter planning"
          },
          description: {
            tr: "C# analiz özelliklerini seed tabanlı planner validation/repair katmanı gameplay verisine dönüştürür.",
            en: "A seeded planner with validation/repair turns C# analysis features into gameplay data."
          }
        },
        {
          title: {
            tr: "Legacy kanıtı ayrı tutmak",
            en: "Keep legacy evidence separate"
          },
          description: {
            tr: "Python/Guard–Strike çıktıları Radial V2 sözleşmesi gibi sunulmaz; Editor seçimi ayrıdır.",
            en: "Python/Guard–Strike output is not presented as the Radial V2 contract; Editor selection is separate."
          }
        },
        {
          title: {
            tr: "Timing ve cache kimliğini doğrulamak",
            en: "Validate timing and cache identity"
          },
          description: {
            tr: "DSP timing/input, calibration ve versioned fingerprint/cache ilişkileri tekrarlanabilir sistem davranışını destekler.",
            en: "DSP timing/input, calibration, and versioned fingerprint/cache relationships support reproducible system behavior."
          }
        }
      ],
      limitations: [
        {
          tr: "Final ritim oyunu veya her şarkıda doğru BPM/kusursuz koreografi garantisi değildir.",
          en: "This is not a finished rhythm game or a guarantee of correct BPM/perfect choreography for every song."
        },
        {
          tr: "FFmpeg dönüşümü desteklenen Windows workflow’una bağlıdır; analiz kalitesi müzik ve parametrelere göre değişir.",
          en: "FFmpeg conversion depends on the supported Windows workflow; analysis quality varies with music and parameters."
        },
        {
          tr: "Dosya tabanlı runtime analiz canlı mikrofon/realtime streaming analizi anlamına gelmez.",
          en: "File-based runtime analysis does not establish live microphone/realtime streaming analysis."
        },
        {
          tr: "README/code kanıtı kullanıldı; Unity test/build ve gerçek custom-song kabulü yeniden çalıştırılmadı.",
          en: "README/code evidence was used; Unity tests/build and real custom-song acceptance were not rerun."
        }
      ],
      plannedExtensions: [
        {
          tr: "Farklı müzik türlerinde analiz ve oynanabilirlik kabulünü genişletme.",
          en: "Broaden analysis and playability acceptance across music genres."
        }
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
    order: 8,
    homeOrder: 8,
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
      "Reference-based TTS / Voice Profiles",
      "FFmpeg Preprocessing / Quality Report",
      "Long-text Chunking / Inference Presets",
      "Dataset Validation / Readiness / Export",
      "Experimental XTTS GPT Training Runner",
      "Checkpoint / Matrix Evaluation",
      "Parameter Sweep / Human Scorecard",
      "Blind Experiment A/B Comparison"
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
          tr: "Yerel Gradio arayüzü; reference-based XTTS-v2 üretimi, voice profile yönetimi, FFmpeg ön işleme, kalite raporu, inference presetleri, uzun metin chunking ve A/B kontrolleri sağlar. Dataset hazırlama/validation/readiness, export ve explicit local training runner uygulanmıştır; Gradio hazırlık paneli gerçek training başlatmaz.\n\nDeneysel checkpoint üretimi/inference, matrix evaluation, insan scorecard’ı, parameter sweep ve blind experiment A/B karşılaştırması vardır. Küçük dataset ile kalite artışı sınırlıdır; checkpoint veya teknik rapor başarılı ses kalitesi garantisi değildir. Veriler yerel ve izinli kalır.",
          en: "The local Gradio interface provides reference-based XTTS-v2 generation, voice profile management, FFmpeg preprocessing, quality reports, inference presets, long-text chunking, and A/B controls. Dataset preparation/validation/readiness, export, and explicit local training runners are implemented; the Gradio preparation panel does not start real training.\n\nExperimental checkpoint generation/inference, matrix evaluation, human scorecards, parameter sweeps, and blind experiment A/B comparison exist. Quality gains with a small dataset are limited; checkpoints or technical reports do not guarantee successful audio quality. Data remains local and consent-based."
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
        {
          tr: "Dataset çeşitliliği ve reference kayıt kalite yönergelerini geliştirme.",
          en: "Improve dataset diversity and reference-recording quality guidance."
        },
        {
          tr: "Checkpoint/parameter ve insan değerlendirme karşılaştırmalarını daha okunabilir sunma.",
          en: "Present checkpoint/parameter and human-evaluation comparisons more clearly."
        }
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
    order: 9,
    homeOrder: 9,
    repoUrl: "https://github.com/Baglare/VisionForge",
    summary: {
      tr: "Gerçek zamanlı kamera akışını yerel yüz tanıma, el takibi ve gesture tabanlı büyü komutlarıyla birleştiren local-first PySide6 masaüstü uygulaması.",
      en: "A local-first PySide6 desktop application that combines a real-time camera pipeline with local face recognition, hand tracking, and gesture-driven spell commands."
    },
    positioning: {
      tr: "Gerçek zamanlı camera-to-interaction akışını, yerel tanımayı ve masaüstü uygulama mimarisini tek bir gesture etkileşim sisteminde birleştiren Forge artifact’i.",
      en: "A Forge artifact that unifies a real-time camera-to-interaction pipeline, local recognition, and desktop application architecture in one gesture interaction system."
    },
    techStack: ["Python", "PySide6", "OpenCV", "MediaPipe Tasks", "OpenCV LBPH", "PyInstaller"],
    focusAreaIds: [
      "computer-vision",
      "gesture-interaction",
      "local-recognition",
      "real-time-camera-pipeline",
      "gamified-ui"
    ],
    coreSystems: [
      "CameraWorker / QThread",
      "Latest-frame Pipeline",
      "VisionEngine",
      "MediaPipe Face / Hand Detection",
      "OpenCV LBPH Recognition",
      "Guild Seal Verification",
      "VerificationSession",
      "HandStateTracker",
      "SpellEngine",
      "TrialEngine",
      "Native Qt Enrollment",
      "Runtime Paths / Portable Data"
    ],
    transformation: {
      input: { tr: "Canlı kamera karesi, yerel profil ve isteğe bağlı lonca mührü", en: "Live camera frame, local profile, and optional guild seal" },
      process: { tr: "Latest-frame işleme, yüz/el algılama, yerel doğrulama ve gesture durum takibi", en: "Latest-frame processing, face/hand detection, local verification, and gesture state tracking" },
      output: { tr: "Yetkili büyü komutu, Trial ilerlemesi ve PySide6 arayüz geri bildirimi", en: "Authorized spell command, Trial progress, and PySide6 interface feedback" },
      compact: {
        tr: "Kamera → latest-frame CV/doğrulama → gesture komutu ve masaüstü geri bildirimi",
        en: "Camera → latest-frame CV/verification → gesture command and desktop feedback"
      }
    },
    architectureFlow: {
      steps: [
        "Camera Input",
        "CameraWorker / QThread",
        "Latest Frame Pipeline",
        "VisionEngine",
        "Face / Hand Detection",
        "Local Recognition / Guild Seal",
        "VerificationSession",
        "HandStateTracker",
        "SpellEngine / TrialEngine",
        "PySide6 Interface",
        "Local Data / Portable Build"
      ].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "VisionForge, canlı kamera görüntüsünü ayrı bir worker thread’inde işleyip computer vision kararlarını modern bir PySide6 masaüstü arayüzüne taşıyan local-first bir etkileşim uygulamasıdır. VisionEngine; MediaPipe yüz/el algılama, OpenCV LBPH yerel yüz tanıma, QR tabanlı lonca mührü ve gesture durumunu tek karelik sonuçlarda birleştirir.\n\nCanlı Görüş, Büyü Kitabı, Trial, Kayıt, Ayarlar, Sistem Durumu ve Debug sayfaları; kamera pipeline’ını, yetki durumunu ve Donma, Ateş, Kalkan komutlarını aynı masaüstü uygulama mimarisinde görünür kılar.",
          en: "VisionForge is a local-first interaction application that processes live camera input on a separate worker thread and carries computer-vision decisions into a modern PySide6 desktop interface. VisionEngine combines MediaPipe face/hand detection, local OpenCV LBPH face recognition, QR-based guild seals, and gesture state in per-frame results.\n\nLive View, Spellbook, Trial, Enrollment, Settings, System Status, and Debug pages expose the camera pipeline, authorization state, and Freeze, Fire, and Shield commands within one desktop application architecture."
        }
      },
      currentScope: {
        body: {
          tr: "CameraWorker kamerayı ve VisionEngine’i UI thread’i dışında çalıştırır; kilit korumalı latest-frame alanı, yavaşlayan arayüzün eski kare kuyruğu biriktirmesini engeller. VerificationSession tam doğrulanmış profili yüz kaybından sonra en fazla 10 saniye korur; HandStateTracker ise yumuşatılmış hareket, kısa takip kaybı ve kalite ölçümlerini SpellEngine ile TrialEngine’e taşır.\n\nNative Qt kayıt akışı canlı kamera veya fotoğraf klasöründen örnek alır, yerel LBPH modelini eğitir ve kullanıcıya özel lonca mührünü üretir. PyInstaller onedir Windows build’i statik bundle kaynaklarını, EXE yanında tutulan yazılabilir profil/kamera/doğrulama verilerinden ayırır; bu kullanıcı verileri Git dışında kalır.",
          en: "CameraWorker runs the camera and VisionEngine outside the UI thread; a lock-protected latest-frame slot prevents a slowing interface from accumulating stale frames. VerificationSession retains a fully verified profile for up to 10 seconds after face loss, while HandStateTracker feeds smoothed motion, short tracking-loss tolerance, and quality measurements into SpellEngine and TrialEngine.\n\nThe native Qt enrollment flow collects samples from a live camera or photo directory, trains the local LBPH model, and creates a user-specific guild seal. The PyInstaller onedir Windows build separates static bundled resources from writable profile, camera, and verification data kept beside the executable; this user data remains outside Git."
        }
      },
      designDecisions: [
        {
          title: { tr: "VisionEngine’i UI’dan ayırmak", en: "Separate VisionEngine from the UI" },
          description: {
            tr: "Algılama ve etkileşim kararlarını Qt widget’larından ayırarak kare işleme çekirdeğini tek yerde tutar.",
            en: "Keeps detection and interaction decisions in one frame-processing core, separate from Qt widgets."
          }
        },
        {
          title: { tr: "Kamerayı worker thread’inde çalıştırmak", en: "Run the camera on a worker thread" },
          description: {
            tr: "OpenCV, MediaPipe, LBPH ve QR işlemlerini ana Qt thread’inden çıkararak arayüz yanıtını korur.",
            en: "Keeps the interface responsive by moving OpenCV, MediaPipe, LBPH, and QR work off the main Qt thread."
          }
        },
        {
          title: { tr: "Yalnızca en güncel kareyi taşımak", en: "Carry only the latest frame" },
          description: {
            tr: "Tek-slot latest-frame aktarımı, UI yavaşladığında eski karelerin gecikme kuyruğuna dönüşmesini önler.",
            en: "A single-slot latest-frame handoff prevents stale frames from becoming a latency queue when the UI slows down."
          }
        },
        {
          title: { tr: "Kısa doğrulama toleransı kullanmak", en: "Use a short verification tolerance" },
          description: {
            tr: "10 saniyelik grace period, kısa yüz kayıplarında yetkiyi korur; farklı kullanıcı veya süre sonu oturumu sıfırlar.",
            en: "A 10-second grace period preserves authorization through brief face loss; a different user or timeout clears it."
          }
        },
        {
          title: { tr: "Yerel doğrulamayı sınırlandırmak", en: "Bound local verification claims" },
          description: {
            tr: "LBPH ve lonca mührünü etkileşim yetkisi için kullanır; bunları profesyonel güvenlik veya biyometrik kimlik sistemi olarak sunmaz.",
            en: "Uses LBPH and guild seals for interaction authorization without presenting them as professional security or biometric identity systems."
          }
        },
        {
          title: { tr: "Gesture durumunu iki motora bağlamak", en: "Connect gesture state to two engines" },
          description: {
            tr: "HandStateTracker çıktısını SpellEngine ve TrialEngine’e vererek algılamayı komut ve görev ilerlemesine dönüştürür.",
            en: "Feeds HandStateTracker output into SpellEngine and TrialEngine to turn detection into commands and task progress."
          }
        },
        {
          title: { tr: "Source ve frozen yollarını ayırmak", en: "Separate source and frozen paths" },
          description: {
            tr: "Bundle kaynaklarını yazılabilir portable veriden ayırarak onedir dağıtımında kullanıcı verisini EXE yanında tutar.",
            en: "Separates bundled resources from writable portable data so user data stays beside the executable in onedir distributions."
          }
        }
      ],
      limitations: [
        { tr: "Algılama doğruluğu ışık, kamera kalitesi, açı ve ortam koşullarına bağlıdır.", en: "Detection accuracy depends on lighting, camera quality, angle, and environment conditions." },
        { tr: "LBPH tabanlı yerel yüz tanıma, production-grade biyometrik doğrulama değildir.", en: "Local LBPH face recognition is not production-grade biometric verification." },
        { tr: "QR/lonca mührü yerel bir prototip doğrulamasıdır; güvenli kimlik belgesi değildir.", en: "QR/guild-seal verification is a local prototype mechanism, not a secure identity credential." },
        { tr: "Gesture eşikleri farklı el, kamera ve ışık koşullarında kalibrasyon gerektirebilir.", en: "Gesture thresholds may require calibration across different hands, cameras, and lighting conditions." },
        {
          tr: "ArtifactHub sayfası canlı kameraya erişmez; uygulama yalnızca kaynak repo ve uygun, hassas veri içermeyen görsellerle temsil edilir.",
          en: "The ArtifactHub page does not access a live camera; the application is represented only through its source repository and suitable visuals without sensitive data."
        }
      ],
      plannedExtensions: [
        { tr: "Embedding tabanlı, daha dayanıklı yüz tanımaya geçmek.", en: "Move to more robust embedding-based face recognition." },
        { tr: "Kullanıcı ve kamera koşullarına göre gesture kalibrasyonu eklemek.", en: "Add gesture calibration for users and camera conditions." },
        { tr: "Daha gelişmiş sıralı hareket zincirleri geliştirmek.", en: "Develop more advanced chained motion sequences." },
        { tr: "Windows installer ve kod imzalama akışı hazırlamak.", en: "Prepare a Windows installer and code-signing flow." },
        { tr: "GUI, pipeline ve performans için otomatik test kapsamını genişletmek.", en: "Expand automated coverage for the GUI, pipeline, and performance." },
        { tr: "Hassas veri içermeyen demo ve release materyalleri üretmek.", en: "Produce demo and release materials without sensitive data." }
      ],
      ethicalNotes: [
        { tr: "VisionForge profesyonel güvenlik sistemi veya biyometrik doğrulama ürünü olarak sunulmaz.", en: "VisionForge is not presented as a professional security system or biometric verification product." },
        { tr: "Yüz görüntüleri, kamera kareleri, profil kayıtları ve doğrulama verileri cihaz üzerinde işlenir; bulut yüz servisi kullanılmaz.", en: "Face images, camera frames, profile records, and verification data are processed on-device; no cloud face service is used." },
        { tr: "Yüz galerisi, yerel profiller, LBPH modeli ve kullanıcıya özel lonca mühürleri Git dışında tutulur.", en: "The face gallery, local profiles, LBPH model, and user-specific guild seals remain outside Git." },
        { tr: "Paylaşılan demo ve ekran görüntüleri gerçek yüz, gerçek QR, kullanıcı yolu veya hassas profil bilgisi içermemelidir.", en: "Shared demos and screenshots must not expose real faces, real QR codes, user paths, or sensitive profile information." }
      ],
      visualNotes: {
        tr: "Gece laciverti zemin, koyu indigo kartlar, kontrollü elektrik moru ve lavanta vurguları; lens halkası, detection frame ve lonca mührünü modern arcane-tech çizgide birleştirir. Amber yalnız uyarı, serin camgöbeği ise etik/bilgi ayrımı için kullanılır.",
        en: "Night-navy ground, dark-indigo cards, and controlled electric-purple and lavender accents combine lens rings, detection frames, and guild seals in a modern arcane-tech direction. Amber is reserved for warnings, while cool cyan distinguishes ethical and informational context."
      }
    },
    riskProfile: {
      requiresEthicalNotes: true,
      dataSensitivity: "biometric-adjacent",
      publicClaimBoundary: {
        tr: "Profesyonel güvenlik veya production-grade biyometrik doğrulama ürünü değildir; yüz, kamera, profil ve doğrulama verilerini cihaz üzerinde işleyen local-first etkileşimli computer vision masaüstü uygulamasıdır.",
        en: "Not a professional security or production-grade biometric verification product; it is a local-first interactive computer-vision desktop application that processes face, camera, profile, and verification data on-device."
      }
    }
  },
  {
    id: "gamelocalizer",
    slug: "gamelocalizer",
    title: "GameLocalizer",
    statusId: "release-candidate",
    categoryId: "developer-tooling",
    themeId: "archive-terminal",
    featuredLevel: "primary",
    order: 1,
    homeOrder: 1,
    summary: {
      tr: "Güvenli format sahipliği, yapısal QA ve geri alınabilir patch paketleriyle oyun yerelleştirmesini yöneten Python geliştirici aracı.",
      en: "Python developer tooling for game localization, with safe format ownership, structural QA, and reversible patch packages."
    },
    positioning: {
      tr: "Portföyün ana yerelleştirme aracı: deterministic pipeline, masaüstü/CLI iş akışı ve sınırlı gerçek oyun kabul kanıtı.",
      en: "A principal localization tool: deterministic pipelines, shared desktop/CLI workflows, and bounded real-game acceptance evidence."
    },
    techStack: [
      "Python",
      "PySide6",
      "SQLite",
      "UnityPy",
      "OpenAI",
      "Ollama"
    ],
    focusAreaIds: [
      "localization-tooling",
      "deterministic-pipelines",
      "transaction-safety",
      "provider-architecture",
      "evaluation-workflow",
      "release-engineering",
      "desktop-architecture"
    ],
    coreSystems: [
      "Scan / Export / Translate / Quality / QA / Apply",
      "Format Adapter Registry",
      "Protected Syntax",
      "Context-aware Exact TM",
      "Deterministic Context",
      "Unity Inspect / Reopen Validation",
      "Patch Verify / Install / Backup / Restore",
      "Shared CLI / Desktop Services"
    ],
    architectureFlow: {
      steps: [
        {
          label: "Read-only Source Scan"
        },
        {
          label: "Portable Translation Bundle"
        },
        {
          label: "Context / Glossary / TM"
        },
        {
          label: "Mock / OpenAI / Ollama"
        },
        {
          label: "Quality + Structural QA"
        },
        {
          label: "Separate Apply Output / Reopen"
        },
        {
          label: "Verified Patch Package"
        },
        {
          label: "Explicit Install / Restore"
        }
      ]
    },
    sections: {
      overview: {
        body: {
          tr: "GameLocalizer, çeviriyi format bütünlüğü ve dağıtım güvenliğiyle birlikte ele alan geliştirici aracıdır. Provider yeni bundle üretir; apply ayrı çıktı kopyaları oluşturur. Oyun dosyası değişikliği yalnız açık patch install adımında gerçekleşir. CLI ve PySide6 arayüz aynı servisleri kullanır.",
          en: "GameLocalizer treats translation as a developer workflow with format integrity and distribution safety. Providers produce new bundles; apply creates separate output copies. Game files change only through explicit patch installation. The CLI and PySide6 interface share the same services."
        }
      },
      currentScope: {
        body: {
          tr: "JSON, CSV, INI, satır tabanlı TXT ve sınırlı Ren’Py; güvenli Unity TextAsset, tanınan existing-locale StringTable ve Smart String alt kümesi desteklenir. Placeholder koruması, glossary, exact SQLite TM, deterministic context, ayrı kalite/yapısal QA ve reopen doğrulaması uygulanmıştır. Hash/build kimlikli paketlerde verify, install, backup ve restore bulunur.\n\nM18 0.8.0 release candidate için belirli Sea of Stars build’inde install, sentinel ve restore/hash kabulü kullanıcı tarafından bildirilmiştir. M19 desktop kabulü ve M21 32 kayıtlık gerçek çeviri örneği README’de kayıtlıdır; bu portföy güncellemesi oyun kabulünü yeniden yürütmez.",
          en: "Supports JSON, CSV, INI, line-based TXT, limited Ren’Py, safe Unity TextAssets, recognized existing-locale StringTables, and a Smart String subset. Implemented systems include placeholder protection, glossary, exact SQLite TM, deterministic context, separate quality/structural QA, and reopen validation. Hash/build-bound packages support verify, install, backup, and restore.\n\nFor the M18 0.8.0 release candidate, install, sentinel, and restore/hash acceptance on a specific Sea of Stars build was user-reported. M19 desktop acceptance and the M21 32-entry real-translation sample are recorded in the README; this portfolio refresh does not rerun game acceptance."
        }
      },
      designDecisions: [
        {
          title: {
            tr: "Kaynağı ve apply çıktısını ayırmak",
            en: "Separate source and apply output"
          },
          description: {
            tr: "Provider, QA ve apply kaynak ağacını değiştirmez; install ayrı ve açık bir işlemdir.",
            en: "Provider, QA, and apply leave the source tree unchanged; installation is a separate explicit operation."
          }
        },
        {
          title: {
            tr: "Dil kalitesi ile yapısal bütünlüğü ayırmak",
            en: "Separate language quality from structural integrity"
          },
          description: {
            tr: "Kalite sinyalleri dilsel garanti değildir; desteklenmeyen format/syntax tahmin edilmeden kontrollü atlanır.",
            en: "Quality signals are not linguistic guarantees; unsupported formats/syntax are skipped without guessing."
          }
        }
      ],
      limitations: [
        {
          tr: "Genel Unity veya cross-build uyumluluğu doğrulanmış değildir. Bazaar incelemesi custom adapter desteği oluşturmadı.",
          en: "General Unity or cross-build compatibility is unverified. The Bazaar investigation did not implement a custom adapter."
        },
        {
          tr: "StringTable hattı mevcut locale’i değiştirir; native Türkçe locale eklemez. Arbitrary MonoBehaviour, Addressables rewrite ve runtime injection desteklenmez.",
          en: "The StringTable path replaces an existing locale; it does not add native Turkish locale support. Arbitrary MonoBehaviour translation, Addressables rewriting, and runtime injection are unsupported."
        },
        {
          tr: "M22 Türkçe kalite profili deneysel ve aynı 32 kayıtla kalibre edilmiştir; bağımsız insan kabulü, genel kalite veya gözetimsiz kullanım garantisi değildir.",
          en: "The M22 Turkish quality profile is experimental and calibrated on the same 32 entries; it provides no independent human acceptance, general quality, or unattended-use guarantee."
        },
        {
          tr: "Kaynak repository private olduğu için public GitHub bağlantısı gösterilmez.",
          en: "The source repository is private, so no public GitHub link is shown."
        }
      ],
      plannedExtensions: [
        {
          tr: "Kalite profilini bağımsız örnekler ve insan değerlendirmesiyle doğrulama.",
          en: "Validate the quality profile on independent samples with human evaluation."
        }
      ]
    },
    updatedAt: "2026-10-02"
  },
  {
    id: "knowledgecompiler",
    slug: "knowledgecompiler",
    title: "KnowledgeCompiler",
    statusId: "engineering-tool",
    categoryId: "ai-infrastructure",
    themeId: "relic-core",
    featuredLevel: "primary",
    order: 2,
    homeOrder: 2,
    summary: {
      tr: "Yapılandırılmış yetki, context derleme ve transactional proje bilgisi iş akışları için deterministic, provider-neutral AI yönetişim CLI’ı.",
      en: "A deterministic, provider-neutral AI governance CLI for structured authority, context compilation, and transactional project-knowledge workflows."
    },
    positioning: {
      tr: "Portföyün ana geliştirici altyapısı: kanıt ve sözleşmeleri doğrular; anlamsal kararı harici asistana bırakır.",
      en: "Principal developer infrastructure: validates evidence and contracts while leaving semantic judgment to an external assistant."
    },
    techStack: [
      "Python",
      "CLI",
      "JSON Contracts",
      "Markdown",
      "SHA-256",
      "Git"
    ],
    focusAreaIds: [
      "ai-governance",
      "deterministic-pipelines",
      "transaction-safety",
      "data-driven-design",
      "evaluation-workflow"
    ],
    coreSystems: [
      "Structured Authority",
      "Context Bundle V2",
      "Task Contract V1 / Result Contract V2",
      "Native Adapter Compilation",
      "Project-map Routing",
      "Transactional Promotion",
      "Observe-only Sync",
      "Opt-in Autopilot",
      "Vault Gateway"
    ],
    architectureFlow: {
      steps: [
        {
          label: "Validated Manifest"
        },
        {
          label: "Project-map / Adapter"
        },
        {
          label: "Frozen Context + Task Contract"
        },
        {
          label: "External Semantic Assessment"
        },
        {
          label: "Bound Result / Inert Plan"
        },
        {
          label: "Locked Check / Apply"
        },
        {
          label: "Post-verification / Audit"
        }
      ]
    },
    sections: {
      overview: {
        body: {
          tr: "KnowledgeCompiler, AI destekli çalışmada hangi kuralın yetki taşıdığını, hangi kanıtın güncel olduğunu ve hangi yazmanın izinli olduğunu sözleşmelerle sınırlar. .ai/project.md yapılandırılmış critical_rules sahibidir; prose ve retrieved context yetki değildir. Prompt yöneticisi veya otonom ajan platformu olarak konumlanmaz.",
          en: "KnowledgeCompiler constrains authority, evidence freshness, and permitted writes through explicit contracts. Structured critical_rules belong to .ai/project.md; prose and retrieved context are not authority. Its role is governance infrastructure rather than prompt management or an autonomous agent platform."
        }
      },
      currentScope: {
        body: {
          tr: "Context/task/result sözleşmeleri hash ve provenance ile bağlanır; stale kanıt fail-closed reddedilir. Project-map path/symbol/test/doc yönlendirmesi yapar, adapter derleme yerel talimatları üretir. Transactional promotion; lock, exact preimage, CREATE/UPDATE, post-verification ve ownership-aware rollback kullanır.\n\nSync check/prepare yalnız committed kanıtı gözlemler; record harici değerlendirmeyi doğrular. Controlled autopilot, opt-in policy ve owner prefix’leriyle inert planı working-tree snapshot’ına bağlar. Vault gateway kullanıcıya özel konum/kimlik kontrolü ve sınırlı offline retrieval sağlar.",
          en: "Context/task/result contracts bind hashes and provenance; stale evidence fails closed. Project maps route paths, symbols, tests, and docs; adapter compilation generates native instructions. Transactional promotion uses locks, exact preimages, CREATE/UPDATE checks, post-verification, and ownership-aware rollback.\n\nSync check/prepare only observe committed evidence; record validates an external assessment. Controlled autopilot binds inert plans to working-tree snapshots through opt-in policy and owner prefixes. The Vault gateway provides per-user location/identity checks and bounded offline retrieval."
        }
      },
      designDecisions: [
        {
          title: {
            tr: "Yetkiyi bağlamdan ayırmak",
            en: "Separate authority from context"
          },
          description: {
            tr: "Routing ve retrieved prose yeni kural üretmez; lexical scope manifest’e bağlı kalır.",
            en: "Routing and retrieved prose cannot create rules; lexical scope stays bound to the manifest."
          }
        },
        {
          title: {
            tr: "Yazmayı transaction sınırına almak",
            en: "Put writes inside a transaction boundary"
          },
          description: {
            tr: "Exact preimage ve post-check doğrulanmadan canonical işlem ilerlemez; policy yalnız sahip olunan Vault hedeflerini kapsar.",
            en: "Canonical operations require exact preimages and post-checks; policy covers only owned Vault targets."
          }
        }
      ],
      limitations: [
        {
          tr: "Model dispatcher, scheduler, daemon, dağıtık lock veya crash-recovery WAL yoktur; in-process rollback crash recovery değildir.",
          en: "There is no model dispatcher, scheduler, daemon, distributed lock, or crash-recovery WAL; in-process rollback is not crash recovery."
        },
        {
          tr: "Routine autopilot güvenli CREATE/additive UPDATE ile sınırlıdır. Correction/removal ve protected governance ayrı review/promotion yolunu gerektirir.",
          en: "Routine autopilot is limited to safe CREATE/additive UPDATE. Corrections, removals, and protected governance require a separate review/promotion path."
        },
        {
          tr: "Anlamsal doğruluk veya evrensel ajan güvenliği garanti edilmez. Private kaynak repository için public link gösterilmez.",
          en: "Semantic correctness and universal agent safety are not guaranteed. No public link is shown for the private source repository."
        }
      ],
      plannedExtensions: []
    },
    updatedAt: "2026-10-02"
  },
  {
    id: "aria-ai",
    slug: "aria-ai",
    title: "Aria AI",
    statusId: "early-stage-architecture",
    categoryId: "desktop-applications",
    themeId: "archive-terminal",
    featuredLevel: "normal",
    order: 7,
    homeOrder: 7,
    summary: {
      tr: "Erken aşama masaüstü AI mimari prototipi. S0–S2 istemci/core, streaming, persistence ve credential temelleri mevcut; tamamlanmış asistan değildir.",
      en: "Early-stage desktop AI architecture prototype. S0–S2 client/core, streaming, persistence, and credential foundations exist; this is not a complete assistant."
    },
    positioning: {
      tr: "Mimari ve güvenlik temeli çalışması; portföyün olgun araçlarından daha erken aşamadadır.",
      en: "Architecture and security foundation work, at an earlier stage than the portfolio’s established tools."
    },
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tauri",
      "FastAPI",
      "SQLite",
      "Alembic",
      "Ollama"
    ],
    focusAreaIds: [
      "desktop-architecture",
      "local-first-apps",
      "data-persistence",
      "provider-architecture",
      "secure-credentials"
    ],
    coreSystems: [
      "Typed Client / Core Boundary",
      "SSE Streaming / Cancellation",
      "SQLite / Alembic",
      "Deterministic Mock Provider",
      "Local Ollama Integration",
      "Backend-owned SecretStore",
      "Windows Credential Locker"
    ],
    architectureFlow: {
      steps: [
        {
          label: "React / Vite / Tauri Client"
        },
        {
          label: "Typed Local API"
        },
        {
          label: "FastAPI Core / Session Boundary"
        },
        {
          label: "Mock / Local Ollama"
        },
        {
          label: "SSE + Cancellation"
        },
        {
          label: "SQLite Persistence / Credential Locker"
        }
      ]
    },
    sections: {
      overview: {
        body: {
          tr: "Aria AI, Windows öncelikli local-first masaüstü AI mimarisinin erken aşama prototipidir. Mevcut çalışma ağırlıklı olarak S0–S2 temellerini kurar; özellikleri tamamlanmış bir asistan değildir. React/Tauri istemcisi provider’a doğrudan bağlanmaz, yalnız yerel FastAPI core ile konuşur.",
          en: "Aria AI is an early-stage prototype of a Windows-first, local-first desktop AI architecture. Current work mainly establishes S0–S2 foundations; it is not a feature-complete assistant. The React/Tauri client communicates only with the local FastAPI core, not directly with providers."
        }
      },
      currentScope: {
        body: {
          tr: "S0: typed frontend/backend sınırı, konuşma oluşturma, SSE streaming/cancellation, SQLite + Alembic, session sınırı ve deterministic Mock. S1: yerel Ollama health/model discovery, kalıcı provider/model seçimi ve native streaming/cancellation. S2: backend-owned SecretStore, Windows Credential Locker ve anahtarı geri göstermeyen ayarlar. Credential saklamak cloud provider execution anlamına gelmez.",
          en: "S0: a typed frontend/backend boundary, conversation creation, SSE streaming/cancellation, SQLite + Alembic, a session boundary, and deterministic Mock. S1: local Ollama health/model discovery, persisted provider/model selection, and native streaming/cancellation. S2: a backend-owned SecretStore, Windows Credential Locker, and settings that do not reveal stored keys. Credential storage does not establish cloud provider execution."
        }
      },
      designDecisions: [
        {
          title: {
            tr: "Secret sahipliğini core’da tutmak",
            en: "Keep secret ownership in the core"
          },
          description: {
            tr: "Anahtarlar frontend veya SQLite’a yazılmaz; secure store yoksa plaintext fallback yapılmaz.",
            en: "Keys are not stored in the frontend or SQLite; an unavailable secure store has no plaintext fallback."
          }
        }
      ],
      limitations: [
        {
          tr: "Cloud provider execution uygulanmadı; OpenAI/Gemini/Groq çağrısı yoktur.",
          en: "Cloud provider execution is unimplemented; there are no OpenAI/Gemini/Groq calls."
        },
        {
          tr: "RAG, tools, web search, dosya/shell iş akışları, MCP ve çoklu ajan uygulanmadı.",
          en: "RAG, tools, web search, file/shell workflows, MCP, and multi-agent workflows are unimplemented."
        },
        {
          tr: "Voice, image özellikleri, OAuth, cloud sync ve production Python sidecar paketlemesi yoktur.",
          en: "Voice, image features, OAuth, cloud sync, and production Python sidecar packaging are absent."
        },
        {
          tr: "Ollama/model kurulumu kullanıcıya aittir; remote Ollama desteklenmez. Kaynak repository private.",
          en: "Ollama/model installation is user-managed; remote Ollama is unsupported. The source repository is private."
        }
      ],
      plannedExtensions: [
        {
          tr: "Cloud provider execution, mevcut credential temelinden sonraki ayrı aşamadır; henüz uygulanmadı.",
          en: "Cloud provider execution is a separate next stage beyond the credential foundation; it is not implemented."
        }
      ]
    },
    updatedAt: "2026-10-02"
  },
  {
    id: "openai-image-studio",
    slug: "openai-image-studio",
    title: "OpenAI Image Studio",
    statusId: "product-prototype",
    categoryId: "web-application",
    themeId: "archive-terminal",
    featuredLevel: "normal",
    order: 10,
    homeOrder: 10,
    summary: {
      tr: "Tek kullanıcılı yerel Next.js görsel üretme/düzenleme aracı; server-side API, dosya tabanlı history ve kullanım/maliyet tahmini.",
      en: "A small single-user local Next.js image generation/editing tool with a server-side API boundary, file-based history, and usage/cost estimates."
    },
    positioning: {
      tr: "Daha küçük destekleyici araç; local development kapsamı ve açık güvenlik sınırlarıyla sunulur.",
      en: "A smaller supporting tool, presented within local-development scope and explicit security limits."
    },
    techStack: [
      "Next.js",
      "React",
      "OpenAI SDK",
      "File-based Storage"
    ],
    focusAreaIds: [
      "product-ui",
      "api-integrations",
      "data-persistence"
    ],
    coreSystems: [
      "Text-to-image",
      "Single Reference-image Edit",
      "Server-side API Routes",
      "Local Outputs / History",
      "Usage / Cost Reporting"
    ],
    architectureFlow: {
      steps: [
        {
          label: "Browser Controls / Reference Image"
        },
        {
          label: "Server Validation"
        },
        {
          label: "OpenAI SDK"
        },
        {
          label: "Local Image Files / History JSON"
        },
        {
          label: "Preview / Download / Usage Estimate"
        }
      ]
    },
    sections: {
      overview: {
        body: {
          tr: "OpenAI Image Studio, prompt ile görsel üretme ve tek referans görseli düzenleme için küçük bir Next.js/React arayüzüdür. Browser server route’larına istek gönderir; API anahtarı ve SDK çağrısı sunucuda kalır. Production SaaS veya çok kullanıcılı ürün değildir.",
          en: "OpenAI Image Studio is a small Next.js/React interface for prompt-based image generation and editing one reference image. The browser submits requests to server routes; API keys and SDK calls remain server-side. It is not a production SaaS or multi-user product."
        }
      },
      currentScope: {
        body: {
          tr: "Model/quality/dimension/background/output kontrolleri, server validation, preview/download ve yerel history uygulanmıştır. Görseller local public outputs altında, prompt/ayar/usage metadata’sı en fazla 100 kayıtlık JSON history’de tutulur. Token-rate tabanlı maliyet raporu tahmindir; güncel fiyat veya fatura kaydı değildir.",
          en: "Implemented controls cover model, quality, dimensions, background, and output, with server validation, preview/download, and local history. Images live in local public outputs; prompt/settings/usage metadata is kept in JSON history capped at 100 entries. Token-rate cost reporting is an estimate, not verified current pricing or billing."
        }
      },
      designDecisions: [
        {
          title: {
            tr: "API sınırını sunucuda tutmak",
            en: "Keep the API boundary server-side"
          },
          description: {
            tr: "Browser credential almaz; gönderilen prompt/reference provider’a, prompt ve çıktı yerel storage’a gider.",
            en: "The browser does not receive credentials; submitted prompts/references reach the provider, while prompts and outputs persist locally."
          }
        }
      ],
      limitations: [
        {
          tr: "Authentication, account isolation ve uygulama rate limit yoktur; output URL’leri public, history erişim kontrolsüzdür. Güvenilen tek kullanıcılı ortam gerekir.",
          en: "There is no authentication, account isolation, or application rate limiting; output URLs are public and history has no access control. A trusted single-user environment is required."
        },
        {
          tr: "History read-modify-write concurrency garantisi vermez; otomatik dosya temizliği veya portable/serverless persistence yoktur.",
          en: "History read-modify-write has no concurrency guarantee; automatic file cleanup and portable/serverless persistence are absent."
        },
        {
          tr: "Masked/inpainting edit yoktur. Kapsamlı error redaction doğrulanmış değildir; paid API/model erişimi ve fiyatlar yeniden test edilmedi.",
          en: "Masked/inpainting editing is absent. Comprehensive error redaction is unverified; paid API/model access and prices were not retested."
        },
        {
          tr: "Kaynak repository private olduğu için public GitHub bağlantısı gösterilmez.",
          en: "The source repository is private, so no public GitHub link is shown."
        }
      ],
      plannedExtensions: []
    },
    updatedAt: "2026-10-02"
  },
  {
    id: "pod-localization-engineering",
    slug: "pod-localization-engineering",
    title: "PoD Localization Engineering",
    statusId: "engineering-case-study",
    categoryId: "localization-engineering",
    themeId: "relic-core",
    featuredLevel: "normal",
    order: 4,
    homeOrder: 4,
    repoUrl: "https://github.com/Baglare/PoD-Localization-Engineering",
    summary: {
      tr: "Private Steam Workshop yerelleştirmesinden mühendislik vaka çalışması: public sentetik fixtures ile syntax koruması, QA ve deterministic paket doğrulama.",
      en: "An engineering case study from a private Steam Workshop localization project: public synthetic fixtures demonstrate syntax protection, QA, and deterministic package verification."
    },
    positioning: {
      tr: "Güçlü yerelleştirme mühendisliği kanıtı; public gösterim ile private üretim corpus’u açıkça ayrılır.",
      en: "A strong localization engineering case study with a clear separation between public demonstrations and the private production corpus."
    },
    techStack: [
      "Python",
      "CSV Translation Memory",
      "Protected Tokens",
      "SHA-256",
      "ZIP / CRC"
    ],
    focusAreaIds: [
      "localization-tooling",
      "deterministic-pipelines",
      "evaluation-workflow",
      "release-engineering"
    ],
    coreSystems: [
      "Protected Syntax / Token Validation",
      "Terminology Handling",
      "Structural QA",
      "Deterministic Packaging",
      "SHA-256 Manifest / CRC Checks",
      "Production Release Gates",
      "Synthetic Public Demonstration"
    ],
    architectureFlow: {
      steps: [
        {
          label: "Synthetic Fixtures / Terminology"
        },
        {
          label: "Deterministic Processing"
        },
        {
          label: "Protected Token / Key QA"
        },
        {
          label: "Sorted Localization Output"
        },
        {
          label: "Deterministic ZIP + SHA-256"
        },
        {
          label: "CRC / Member Verification"
        }
      ]
    },
    sections: {
      overview: {
        body: {
          tr: "Bu public showcase, Steam Workshop üzerinden dağıtılan gerçek Türkçe yerelleştirme çalışmasının mühendislik kavramlarını yeni yazılmış kod ve kurmaca fixtures ile gösterir. Gerçek localization corpus’u, TM ve game/mod assetleri içermez; production repository private kalır.",
          en: "This public showcase demonstrates engineering concepts from a real Turkish localization distributed through Steam Workshop, using newly written code and fictional fixtures. It contains no actual localization corpus, TM, or game/mod assets; the production repository remains private."
        }
      },
      currentScope: {
        body: {
          tr: "Public demo dört kurmaca kayıtta protected placeholder/reference/icon/formatting/escape, terminoloji değişimi, duplicate/malformed/token-loss QA, sıralı çıktı ve deterministic ZIP üretir. Ayrı SHA-256 manifest ve CRC/member kontrolleri artifact drift’ini denetler. Production release gates ve manual game smoke ayrı tarihsel kanıttır; demo bütün production pipeline’ını yeniden üretmez.\n\n2026-10-02 için private üretim projesi aggregate metrikleri: 87,865 translation-memory satırı; tüm dillerde 965 upstream localization dosyası; 460 aktif İngilizce kaynak / 460 üretilmiş Türkçe dosya. Bunlar showcase dataset’i veya yeni çevrilmiş cümle sayısı değildir.",
          en: "The public demo uses four fictional entries for protected placeholders/references/icons/formatting/escapes, terminology replacement, duplicate/malformed/token-loss QA, sorted output, and deterministic ZIP generation. A separate SHA-256 manifest and CRC/member checks detect artifact drift. Production release gates and manual game smoke are separate historical evidence; the demo does not reproduce the whole production pipeline.\n\nPrivate production aggregate metrics verified for 2026-10-02: 87,865 translation-memory rows; 965 upstream localization files across all languages; 460 active English source / 460 generated Turkish files. These are not the showcase dataset or counts of newly translated sentences."
        }
      },
      designDecisions: [
        {
          title: {
            tr: "Public kanıtı private corpus’tan ayırmak",
            en: "Separate public evidence from the private corpus"
          },
          description: {
            tr: "Yalnız özgün demonstration, sentetik fixtures ve aggregate metrikler paylaşılır; gerçek dağıtım Steam Workshop’tadır.",
            en: "Only original demonstrations, synthetic fixtures, and aggregate metrics are public; actual distribution is through Steam Workshop."
          }
        },
        {
          title: {
            tr: "Çeviri ve runtime syntax’ını ayrı doğrulamak",
            en: "Validate translation and runtime syntax separately"
          },
          description: {
            tr: "Doğal çeviri bile token veya key bozabilir; release öncesi yapısal QA ve paket bütünlüğü kapısı gerekir.",
            en: "Natural translation can still break tokens or keys; structural QA and package-integrity gates precede release."
          }
        }
      ],
      limitations: [
        {
          tr: "Public demo küçük bir alt kümeyi gösterir; oynanabilir mod veya production dil kalite sistemi değildir.",
          en: "The public demo demonstrates a small subset; it is neither a playable mod nor the production language-quality system."
        },
        {
          tr: "Private production verisi, upstream içerik ve Türkçe çıktı public repository’de bulunmaz. Metrikler private üretim kanıtına aittir.",
          en: "Private production data, upstream content, and Turkish output are absent from the public repository. Metrics belong to private production evidence."
        },
        {
          tr: "Game/mod/upstream PoD içeriği üzerinde sahiplik iddiası yoktur; showcase için henüz lisans uygulanmamıştır.",
          en: "No ownership is claimed over game/mod/upstream PoD content; the showcase has no applied license yet."
        }
      ],
      plannedExtensions: []
    },
    updatedAt: "2026-10-02"
  }
];
