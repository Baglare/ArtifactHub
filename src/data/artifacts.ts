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
    order: 11,
    homeOrder: 11,
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
    statusId: "live-product",
    categoryId: "web-application",
    themeId: "archive-terminal",
    featuredLevel: "primary",
    order: 1,
    homeOrder: 1,
    repoUrl: "https://github.com/Baglare/MediaTracker",
    demoUrl: "https://mediatracker.baglare.com.tr",
    updatedAt: "2026-10-16",
    summary: {
      tr: "Canlı local-first medya takip uygulaması: hesapsız yerel kütüphane, isteğe bağlı Cloud Sync, hedefler, takvim, sosyal özellikler ve deterministik öneriler.",
      en: "A live local-first media tracker with a guest library, optional Cloud Sync, goals, calendar, social features, and deterministic recommendations."
    },
    positioning: {
      tr: "Portfolyonun canlıya alınmış full-stack ürün mühendisliği çalışması; kullanıcı akışlarının yanında veri bütünlüğü, erişim yetkisi ve güvenli sürüm yönetimine odaklanır.",
      en: "A deployed full-stack product engineering case study focused on data integrity, access control, and safe releases as well as user workflows."
    },
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "PostgreSQL 18",
      "Better Auth",
      "Node.js / Passenger"
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
      "Owner-scoped Local Library / Guest Mode",
      "Portable JSON Backup / Recovery",
      "Verified Email / Better Auth Sessions",
      "Native PostgreSQL 18 / FORCE RLS",
      "Cloud Sync / Revision / Idempotency / Tombstones",
      "Release Calendar / Goals / Progress",
      "Deterministic Recommendation V2",
      "Profiles / Follow / Feed / Notifications",
      "Fail-closed Provider Policy",
      "GitHub Actions / Linux Artifact / Passenger Release"
    ],
    transformation: {
      input: {
        tr: "Kullanıcının medya girdileri ve izinli kaynaklardan katalog verisi",
        en: "User media entries and catalog data from permitted sources"
      },
      process: {
        tr: "Yerel kütüphane, ilerleme/hedef takibi, kontrollü eşitleme ve deterministik öneri sıralaması",
        en: "Local library, progress and goal tracking, controlled synchronization, and deterministic recommendation ranking"
      },
      output: {
        tr: "Cihazda kullanılabilen kişisel medya arşivi; istenirse hesap kapsamlı Cloud ve sosyal görünüm",
        en: "A personal media library usable on-device, with optional account-scoped Cloud and social views"
      },
      compact: {
        tr: "Medya girdileri → local-first takip / isteğe bağlı Cloud → kişisel arşiv ve takvim",
        en: "Media input → local-first tracking / optional Cloud → personal library and calendar"
      }
    },
    architectureFlow: {
      steps: [
        { label: "Owner-scoped Browser Library" },
        { label: "Next.js UI / Same-origin API" },
        { label: "Better Auth / Verified Session" },
        { label: "PostgreSQL 18 / Owner Context / FORCE RLS" },
        { label: "Cloud Revision / Idempotency / Conflicts" },
        { label: "Calendar / Social / Deterministic Recommendations" },
        { label: "Provider Policy / TVMaze Attribution" }
      ]
    },
    sections: {
      overview: {
        body: {
          tr: "MediaTracker; dizi, film, anime, manga ve kitapları tek kütüphanede izlemek için geliştirdiğim local-first web uygulamasıdır. Yerel mod hesap gerektirmez ve Cloud geçici olarak kullanılamadığında çalışmaya devam eder. İsteğe bağlı hesap ve eşitleme, kontrol edilen sosyal özellikler ve deterministik önerilerle genişler. 16 Ekim 2026'da yeni Production v1 sürümü Plesk/Passenger üzerinde yayımlanmış, temel sağlık, oturum, Cloud Sync, kayıt/e-posta ve gizlilik akışları operatör tarafından doğrulanmıştır.",
          en: "MediaTracker is a local-first web application I built to track series, films, anime, manga, and books in one library. Guest mode requires no account and local workflows remain usable when Cloud is unavailable. Optional authentication and synchronization extend it with social features and deterministic recommendations. The Production v1 update was deployed under Plesk/Passenger on October 16, 2026; the operator verified health, session, Cloud Sync, signup/email, and privacy flows."
        }
      },
      currentScope: {
        body: {
          tr: "Canlı uygulama; dashboard, kütüphane, ilerleme, hedefler, Release Calendar, kişiselleştirme, sürümlü portable JSON yedekleri ve veri içe aktarma içerir. Better Auth ile e-posta doğrulaması, native PostgreSQL 18 ve owner-scoped Cloud aktarımı kullanılır. Cloud queue, revision, idempotency, tombstone ve çakışma korumalarıyla yönetilir. Profil görünürlüğü, takip/engel, feed, yorumlar, öneri mesajları ve bildirimler sunucu yetkilendirmesiyle sınırlandırılır. Recommendation V2'nin aktif sıralaması deterministiktir. CI'da kaynak kontrolleri, regresyonlar, izole PG18 ispatları ve SHA'ya bağlı Linux artifact üretimi uygulanır. Supabase adapter'ı ayrı fallback'tir, canlı backend değildir.",
          en: "The live application includes a dashboard, library, progress, goals, Release Calendar, personalization, versioned portable JSON backups, and imports. Better Auth verifies email; native PostgreSQL 18 supports account-scoped Cloud operations. The sync queue uses revision, idempotency, tombstones, and conflict handling. Profile visibility, follow/block, feed, comments, recommendation messages, and notifications operate behind server authorization. Recommendation V2 uses deterministic ranking in production. CI runs source checks, regressions, isolated PG18 proofs, and SHA-bound Linux artifact packaging. The Supabase adapter is a separate fallback, not the live backend."
        }
      },
      designDecisions: [
        {
          title: { tr: "Local-first veri sahipliği", en: "Local-first data ownership" },
          description: {
            tr: "Hesapsız kullanım sürer; Cloud bakımında veya sürüm uyuşmazlığında gönderimler fail-closed durur, yerel kütüphane korunur.",
            en: "Guest use continues; Cloud writes fail closed during maintenance or version mismatches while the local library is preserved."
          }
        },
        {
          title: { tr: "Eşitlemeyi tekrar güvenli çalıştırmak", en: "Make synchronization retry-safe" },
          description: {
            tr: "Revision, idempotency, tombstone ve çatışma sınırları tekrar denenen işlemlerin tutarlılığını ve hesap izolasyonunu hedefler.",
            en: "Revision, idempotency, tombstone, and conflict contracts address retry safety, consistency, and account isolation."
          }
        },
        {
          title: { tr: "Yetkiyi sunucuda doğrulamak", en: "Enforce authority server-side" },
          description: {
            tr: "Better Auth oturumu, transaction-local owner context ve FORCE RLS birlikte çalışır; istemci kimlik iddiası tek başına yetki vermez.",
            en: "Better Auth sessions, transaction-local owner context, and FORCE RLS work together; client-supplied identity alone grants no authority."
          }
        },
        {
          title: { tr: "Kapalı sağlayıcı politikası ve kontrollü yayın", en: "Fail-closed providers and controlled releases" },
          description: {
            tr: "Lisans/izin açısından netleşmemiş sağlayıcılar Production'da kapalıdır; release, migration ve Linux artifact kanıtları ayrı değerlendirilir.",
            en: "Providers without completed permission review stay disabled in production; release, migration, and Linux artifact evidence is assessed separately."
          }
        }
      ],
      limitations: [
        {
          tr: "Ücretli AI, Grounded Research ve kalıcı embedding cache sunucu akışları Production v1'de kapalıdır; öneriler deterministik çalışır.",
          en: "Paid AI, Grounded Research, and persistent embedding caching are disabled in Production v1; recommendations are deterministic."
        },
        {
          tr: "TMDB/AniList ve yeni OMDb public aramaları kapalıdır. Open Library kimlik/izin koşullarına bağlıdır; dış kapak görüntüleri ayrıca değerlendirilmektedir.",
          en: "TMDB/AniList and new OMDb public searches are disabled. Open Library depends on provider conditions; external cover images remain subject to review."
        },
        {
          tr: "Cloud'dan otomatik gerçek zamanlı indirme yoktur; indirme/birleştirme kontrollü kullanıcı akışıdır.",
          en: "Cloud does not automatically pull remote changes in real time; download/merge is a controlled user action."
        },
        {
          tr: "Üretimde test edilen akışlar tüm güvenlik veya KVKK yükümlülüklerinin kapandığı anlamına gelmez; dış aktarım ve bazı silme/restore işletim kontrolleri açıktır.",
          en: "Production-tested flows do not establish complete security or KVKK compliance; external-transfer and some erasure/restore operations remain open."
        }
      ],
      plannedExtensions: [
        {
          tr: "Gerçek ekran görüntüleri, kısa demo ve mimari/CI kanıtlarını projeye ekleme.",
          en: "Add authentic screenshots, a short demo, and architectural/CI evidence."
        },
        {
          tr: "Üçüncü taraf içerik izinlerini ve gizlilik/veri yaşam döngüsü işletimini ayrı takip etme.",
          en: "Track third-party content permissions and privacy/data-lifecycle operations separately."
        },
        {
          tr: "Yeni sağlayıcı ve AI özelliklerini yalnız ayrı onay ve sürüm kapılarından sonra değerlendirme.",
          en: "Consider new providers and AI features only after separate permission and release gates."
        }
      ],
      visualNotes: {
        tr: "Koyu lacivert/grafit, cyan vurgu, medya kartları, ilerleme halkaları ve arşiv terminali estetiği.",
        en: "Dark navy/graphite, cyan accents, media cards, progress rings, and an archive-terminal aesthetic."
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
    order: 9,
    homeOrder: 9,
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
    statusId: "active-development",
    categoryId: "voice-audio-lab",
    themeId: "sealed-voice-relic",
    featuredLevel: "primary",
    order: 2,
    homeOrder: 2,
    repoUrl: "https://github.com/Baglare/VoxForge",
    summary: {
      tr: "Türkçe sesli kitap üretimine yönelen yerel TTS stüdyosu: VoxCPM2, XTTS-v2 ve Chatterbox V3 motorları, kitap içe aktarma, bölüm kuyruğu, Quality Director ve alternatif take seçimi.",
      en: "A local TTS studio moving toward Turkish audiobook production: VoxCPM2, XTTS-v2, and Chatterbox V3 engines, book import, chapter queues, a Quality Director, and alternative take selection."
    },
    positioning: {
      tr: "Forge serisinin en hızlı gelişen artifact’i; izinli ses verisiyle yerel çalışan çok motorlu ses üretim ve değerlendirme stüdyosu.",
      en: "The fastest-moving Forge artifact: a multi-engine voice generation and evaluation studio that runs locally with consent-based voice data."
    },
    techStack: ["Python", "Gradio", "VoxCPM2", "Coqui XTTS-v2", "Chatterbox V3", "faster-whisper", "FFmpeg", "SQLite", "CUDA"],
    focusAreaIds: ["voice-tools", "tts-experiments", "audio-preprocessing", "local-first-labs", "evaluation-workflow"],
    coreSystems: [
      "Studio Projects / Chapter Queue",
      "Book Import / Chapter Workflows",
      "Voice Playground (XTTS-v2 · Chatterbox V3 · VoxCPM2)",
      "Shared GPU Engine Worker",
      "Quality Director (ASR + Audio Checks)",
      "Voice Takes / Selection History",
      "VoxCPM2 Voice Design / Character Library",
      "Prosody Controls / Scene Narration",
      "Engine Benchmark (VF-Q1)",
      "Reference-based TTS / Voice Profiles",
      "Experimental XTTS Fine-tuning / Evaluation"
    ],
    transformation: {
      input: { tr: "Kitap metni, bölümler ve izinli referans sesler", en: "Book text, chapters, and consent-based reference audio" },
      process: {
        tr: "Bölüm ayrıştırma, motor seçimi, VoxCPM2/XTTS üretimi, ASR ve ses ölçümleriyle kalite denetimi, alternatif take üretimi",
        en: "Chapter parsing, engine selection, VoxCPM2/XTTS generation, ASR and audio-metric quality checks, alternative take generation"
      },
      output: { tr: "Seçili take’lerden birleştirilmiş bölüm WAV’ları ve açıklanabilir kalite raporları", en: "Chapter WAVs assembled from selected takes, with explainable quality reports" },
      compact: {
        tr: "Kitap metni + referans ses → çok motorlu TTS + Quality Director → seçili take’lerden bölüm WAV’ı",
        en: "Book text + reference audio → multi-engine TTS + Quality Director → chapter WAV from selected takes"
      }
    },
    architectureFlow: {
      steps: [
        "Book / Text Import",
        "Chapter & Scene Parsing",
        "Voice Profile / Voice Design",
        "Studio Queue",
        "Shared GPU Worker (VoxCPM2 · XTTS-v2)",
        "Quality Director (faster-whisper + audio checks)",
        "Alternative Takes / Selection",
        "Chapter WAV Export"
      ].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "VoxForge, Windows üzerinde yerel çalışan bir Türkçe TTS deney aracı olarak başladı ve Kasım 2026 itibarıyla sesli kitap üretimine yönelen bir stüdyoya dönüştü. Ana takip GitHub Issue #18 altında aşamalı PR’larla ilerler; her aşama ayrı birleştirilir.\n\nBirincil motor VoxCPM2’dir; XTTS-v2 ve Chatterbox V3 karşılaştırma için korunur. Studio ve Voice Playground aynı GPU worker’ını paylaşır, aynı anda yalnız bir motor süreci çalışır ve motor değişiminde CUDA belleği süreçle birlikte boşaltılır.",
          en: "VoxForge started as a local Turkish TTS experiment tool on Windows and, as of November 2026, has become a studio moving toward audiobook production. The main track advances through staged PRs under GitHub Issue #18; each stage is merged separately.\n\nVoxCPM2 is the primary engine; XTTS-v2 and Chatterbox V3 are kept for comparison. Studio and the Voice Playground share one GPU worker, only one engine process runs at a time, and CUDA memory is released with the process when switching engines."
        }
      },
      currentScope: {
        body: {
          tr: "Main dalında: Studio projeleri ve kuyruğu, kitap içe aktarma ve bölüm iş akışları (VF-020), VoxCPM2 Studio kuyruğu ve seçili take ile WAV dışa aktarımı (VF-019), Quality Director ve Voice Takes (VF-018), VoxCPM2 prosody kontrolleri ve sahne anlatımı (VF-016/017), VoxCPM2 voice design ve karakter kütüphanesi (VF-021). Quality Director; ses ölçümleri ve CPU üzerinde faster-whisper ASR kelime hizalamasıyla açıklanabilir bulgular üretir, şüpheli cümleler için farklı tohumlarla alternatif take önerir ve seçim geçmişini saklar.\n\nVF-Q1 benchmark’ı XTTS-v2, Chatterbox Multilingual V3 ve VoxCPM2’yi RTX 4060 Laptop (8 GB VRAM) hedefinde aynı koşullarla karşılaştırır. Önceki XTTS-v2 reference-based üretim, voice profile yönetimi, FFmpeg ön işleme ve deneysel fine-tuning/değerlendirme akışları korunur.",
          en: "On main: Studio projects and queue, book import and chapter workflows (VF-020), the VoxCPM2 Studio queue with selected-take WAV export (VF-019), Quality Director and Voice Takes (VF-018), VoxCPM2 prosody controls and scene narration (VF-016/017), and VoxCPM2 voice design with a character library (VF-021). The Quality Director produces explainable findings from audio metrics and CPU faster-whisper ASR word alignment, proposes alternative takes with different seeds for suspicious sentences, and keeps a selection history.\n\nThe VF-Q1 benchmark compares XTTS-v2, Chatterbox Multilingual V3, and VoxCPM2 under identical conditions on an RTX 4060 Laptop (8 GB VRAM) target. Earlier XTTS-v2 reference-based generation, voice profile management, FFmpeg preprocessing, and experimental fine-tuning/evaluation flows remain available."
        }
      },
      designDecisions: [
        {
          title: { tr: "Kalite denetimini üretimden ayırmak", en: "Separate quality checks from generation" },
          description: {
            tr: "Quality Director bağımsız bir servistir; Playground ve Studio aynı sözleşmeyi kullanır, böylece motor değişse de denetim kuralları aynı kalır.",
            en: "The Quality Director is an independent service; Playground and Studio share the same contract, so checks stay the same when the engine changes."
          }
        },
        {
          title: { tr: "Tek GPU worker, sessiz CPU fallback yok", en: "One GPU worker, no silent CPU fallback" },
          description: {
            tr: "Motorlar kendi izole ortamlarında kalıcı alt süreç olarak çalışır; aynı anda tek süreç 8 GB VRAM sınırına uyar ve GPU yoksa sessizce CPU’ya düşmek yerine açık hata verilir.",
            en: "Engines run as persistent subprocesses in isolated environments; one process at a time fits the 8 GB VRAM limit, and a missing GPU produces an explicit error instead of a silent CPU fallback."
          }
        },
        {
          title: { tr: "Take seçimini kullanıcıya bırakmak", en: "Leave take selection to the user" },
          description: {
            tr: "Otomatik denetim yalnız aday önerir; bölüm WAV’ı kullanıcının aktif seçtiği take’lerden kurulur ve önceki seçime geri dönülebilir.",
            en: "Automatic checks only propose candidates; chapter WAVs are assembled from the takes the user selects, and earlier choices can be restored."
          }
        },
        {
          title: { tr: "Motor kararını ölçümle vermek", en: "Decide engines through measurement" },
          description: {
            tr: "Yeni motorlar önce VF-Q1 benchmark’ında tam koşu ve eksiksiz kanıtla karşılaştırıldı; hız ayrı değerlendirildi.",
            en: "New engines were first compared in the VF-Q1 benchmark with full runs and complete evidence; speed was judged separately."
          }
        },
        {
          title: { tr: "Local-first çalışma düzeni", en: "Local-first working model" },
          description: {
            tr: "Ses kayıtları, profiller, projeler ve model önbellekleri kullanıcının makinesinde kalır; Git’e yalnız kaynak kod ve belgeler girer.",
            en: "Recordings, profiles, projects, and model caches stay on the user’s machine; only source code and documentation go into Git."
          }
        }
      ],
      limitations: [
        { tr: "VoxForge production-grade bir TTS servisi değildir; yerel bir stüdyo/deney ortamıdır.", en: "VoxForge is not a production-grade TTS service; it is a local studio and experiment environment." },
        { tr: "VoxCPM2 akışı CUDA destekli GPU ister; hedef donanım 8 GB VRAM’li tek bir Windows dizüstüdür.", en: "The VoxCPM2 flow requires a CUDA-capable GPU; the target hardware is a single Windows laptop with 8 GB VRAM." },
        { tr: "Quality Director bulguları açıklanabilir sezgilerdir; ses kalitesi garantisi değildir ve son karar dinleyerek verilir.", en: "Quality Director findings are explainable heuristics, not a guarantee of audio quality; the final call is made by listening." },
        { tr: "Emotion Lab (VF-022) ve ses editörü/export (VF-023) henüz uygulanmadı.", en: "Emotion Lab (VF-022) and the audio editor/export stage (VF-023) are not implemented yet." },
        { tr: "Fine-tuning değerlendirmeleri deneysel kabul edilir; küçük dataset ile kalite artışı sınırlı kaldı.", en: "Fine-tuning evaluations are experimental; quality gains with the small dataset were limited." }
      ],
      plannedExtensions: [
        { tr: "VF-022 Emotion Lab: sahne ve karakter duygusu için kontrollü denemeler.", en: "VF-022 Emotion Lab: controlled experiments for scene and character emotion." },
        { tr: "VF-023 ses editörü ve kitap düzeyinde export.", en: "VF-023 audio editor and book-level export." }
      ],
      ethicalNotes: [
        { tr: "VoxForge yalnızca kullanıcının kendi sesi, açık izinli referans sesler veya metinden tasarlanan sentetik seslerle çalışacak şekilde konumlandırılır.", en: "VoxForge is positioned for use only with the user’s own voice, explicitly consented reference audio, or synthetic voices designed from text." },
        {
          tr: "İzinsiz ses taklidi, üçüncü kişilerin sesini çoğaltma veya public voice cloning servisi iddiası taşımaz.",
          en: "It does not claim unauthorized voice imitation, duplication of third-party voices, or a public voice cloning service."
        },
        {
          tr: "Ses kayıtları, profiller, projeler, checkpointler ve çıktılar yerel çalışma düzeninin parçasıdır; ArtifactHub’da hiçbir ses örneği yayımlanmaz.",
          en: "Recordings, profiles, projects, checkpoints, and outputs are part of the local working model; no voice samples are published on ArtifactHub."
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
        tr: "Public voice cloning servisi değil; izinli veriyle yerel çalışan deneysel sesli kitap stüdyosu.",
        en: "Not a public voice cloning service; an experimental audiobook studio that runs locally with consent-based data."
      }
    },
    updatedAt: "2026-11-15"
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
    order: 12,
    homeOrder: 12,
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
    order: 4,
    homeOrder: 4,
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
    featuredLevel: "normal",
    order: 7,
    homeOrder: 7,
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
    order: 13,
    homeOrder: 13,
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
    order: 14,
    homeOrder: 14,
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
    order: 8,
    homeOrder: 8,
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
          tr: "Game/mod/upstream PoD içeriği üzerinde sahiplik iddiası yoktur; MIT lisansı yalnız showcase’in özgün kodunu ve sentetik fixture’larını kapsar.",
          en: "No ownership is claimed over game/mod/upstream PoD content; the MIT licence covers only the showcase’s original code and synthetic fixtures."
        },
        {
          tr: "GitHub Actions kapalıdır; doğrulama yerel olarak ve yalnız sentetik veriyle çalıştırılır.",
          en: "GitHub Actions is disabled; validation runs locally and only on synthetic data."
        }
      ],
      plannedExtensions: [
        {
          tr: "Public katkı rehberi ve issue şablonlarıyla sentetik fixture setini genişletme.",
          en: "Growing the synthetic fixture set through the public contribution guide and issue templates."
        }
      ]
    },
    updatedAt: "2026-11-13"
  },
  {
    id: "butterfly-effect",
    slug: "butterfly-effect",
    title: "Butterfly Effect",
    statusId: "graduation-project",
    categoryId: "game-systems",
    themeId: "chrono-wing",
    featuredLevel: "primary",
    order: 3,
    homeOrder: 3,
    summary: {
      tr: "İki oyuncunun 1812 ve 1912’deki aynı kasabayı araştırıp geçmişe müdahale ettiği, sonucun ortak bir tarih kapanışında belirlendiği Unity tabanlı co-op zaman yolculuğu oyunu.",
      en: "A Unity co-op time-travel game where two players investigate the same town in 1812 and 1912, intervene in the past, and see the result resolved at a shared history closure."
    },
    positioning: {
      tr: "İzmir Bakırçay Üniversitesi 2026 Güz bitirme projesi; deterministik tarih çözücüsü, oyuncuya özel bilgi ve çok oyunculu ağ mimarisini bir arada gösterir.",
      en: "An İzmir Bakırçay University 2026 Fall capstone project combining a deterministic history resolver, per-player information, and a multiplayer network architecture."
    },
    techStack: ["Unity 6", "C#", "Netcode for GameObjects", "Unity Transport", "URP", "Input System", "Pure C# Tests", "Jira"],
    focusAreaIds: ["gameplay-systems", "unity-systems", "multiplayer-networking", "data-driven-design", "evaluation-workflow"],
    coreSystems: [
      "Host / Client Session (NGO)",
      "Per-player Time Layers (W0 Archive · W1 1812 · W2 1912)",
      "Deterministic History Resolver",
      "Intervention Semantics / Causal Chain Schema",
      "Rule Graph Validator",
      "Private Agendas / Success Evaluation",
      "Personal Notebook / Topic Evidence Cards",
      "Information Visibility Contract",
      "Scenario Manifest CLI Validation",
      "Pure C# Smoke CI"
    ],
    transformation: {
      input: { tr: "Oyuncu gözlemleri, tanıklıklar, belgeler ve iki farklı dönemdeki müdahaleler", en: "Player observations, testimonies, documents, and interventions across two eras" },
      process: { tr: "Kural grafiği üzerinde deterministik tarih çözümü ve ajanda değerlendirmesi", en: "Deterministic history resolution and agenda evaluation over a rule graph" },
      output: { tr: "Dönem kapanışında değişen 1912 tarihi ve oyuncuya özel sonuç", en: "A changed 1912 history and per-player outcome at period closure" },
      compact: {
        tr: "Araştırma → çıkarım → müdahale → ortak tarih kapanışı → sonuç",
        en: "Research → inference → intervention → shared history closure → outcome"
      }
    },
    architectureFlow: {
      steps: [
        "Host + Client Ready",
        "Independent Time Layers",
        "Research / Notebook (F · J)",
        "Inference / Topic Cards",
        "Intervention in 1812",
        "Archive Closure (W0)",
        "Deterministic Resolver",
        "Agenda Outcomes / Next Period"
      ].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "Butterfly Effect’te iki oyuncu aynı oturumda Valenne kasabasının 1812 ve 1912 hâllerine ve karşılaştırma alanı olan Arşiv’e ayrı ayrı gider. Her oyuncunun kendi zaman katmanı, konumu ve kişisel defteri vardır; bir oyuncunun geçişi diğerini taşımaz.\n\nOyuncular tanıklık ve belgeleri okuyup çıkarım yapar, 1812’de kanal, yol, feribot veya su kaynağı gibi müdahaleler seçer. Müdahaleler sonucu anında değiştirmez; ortak dönem kapanışında tek yetkili sunucu tarihi üzerinden deterministik olarak çözülür ve her oyuncunun gizli ajandası ayrı değerlendirilir.",
          en: "In Butterfly Effect, two players in the same session separately visit the town of Valenne in 1812 and 1912, plus an Archive used for comparison. Each player has their own time layer, position, and personal notebook; one player’s travel never moves the other.\n\nPlayers read testimonies and documents, draw inferences, and choose interventions in 1812 such as a canal, road, ferry, or water source. Interventions do not change results immediately; they are resolved deterministically from a single authoritative server history at the shared period closure, and each player’s private agenda is evaluated separately."
        }
      },
      currentScope: {
        body: {
          tr: "Kaynakta Host/Client bağlantısı, oyuncu başına bağımsız zaman katmanları, kaynak kimliği ve tarih revizyonunu koruyan gözlem defteri, konu kanıt kartları, iki dönemlik oynanış döngüsü, müdahale semantiği, nedensel zincir şeması, kural grafiği doğrulayıcı, senaryo manifest CLI doğrulaması ve saf C# smoke CI bulunur. Kasım 2026’da kompakt oturum HUD’u, opt-in profiler sayaçları ve çift dönemli Valenne liman landmark’ları eklendi.\n\nVertical slice kapsam sözleşmesi ve Milestone 1 oyuncu kabul formu hazırdır; iki bağımsız insanla gerçek oyuncu kabulü henüz yapılmadı (NOT_RUN). Uyarlanabilir ipucu araştırmasında 12.288 simülasyon koşusu, bilgi kazancı politikasının kural tabanlı referansı geçmediğini gösterdi; entegrasyon önerisi NO-GO olarak raporlandı.",
          en: "The source includes a Host/Client connection, independent per-player time layers, an observation notebook that preserves source identity and history revision, topic evidence cards, a two-period gameplay loop, intervention semantics, a causal chain schema, a rule graph validator, scenario manifest CLI validation, and pure C# smoke CI. In November 2026 a compact session HUD, opt-in profiler counters, and dual-period Valenne harbour landmarks were added.\n\nThe vertical slice scope contract and the Milestone 1 player acceptance form are ready; real player acceptance with two independent people has not been run yet (NOT_RUN). In the adaptive hint research, 12,288 simulation runs showed the information-gain policy did not beat the rule-based reference; integration was reported as NO-GO."
        }
      },
      designDecisions: [
        {
          title: { tr: "Tek yetkili tarih, kapanışta çözüm", en: "One authoritative history, resolved at closure" },
          description: {
            tr: "Müdahaleler anında sonuç üretmez; tek sunucu tarihi kapanışta deterministik çözülür. Aynı başlangıç ve aynı müdahalelerle demo tekrarlanabilir.",
            en: "Interventions do not produce instant results; a single server history is resolved deterministically at closure. The demo is repeatable with the same start and interventions."
          }
        },
        {
          title: { tr: "Bilgiyi oyuncuya özel tutmak", en: "Keep information per player" },
          description: {
            tr: "Özel gözlemler ve hedefler yalnız yetkili oyuncuya teslim edilir; normal HUD keşfedilmemiş kanıtı veya debug bilgisini açığa çıkarmaz.",
            en: "Private observations and goals are delivered only to the authorized player; the normal HUD never exposes undiscovered evidence or debug information."
          }
        },
        {
          title: { tr: "Kanıt durumlarını ayırmak", en: "Separate evidence states" },
          description: {
            tr: "Kaynakta mevcut, Jira’da kabul kayıtlı ve bu oturumda test edildi durumları ayrı tutulur; PASS yalnız gözlemle verilir.",
            en: "“Present in source”, “accepted in Jira”, and “tested in this session” are tracked separately; PASS is only granted through observation."
          }
        },
        {
          title: { tr: "Oyun içi YZ’yi ölçerek seçmek", en: "Choose in-game AI by measurement" },
          description: {
            tr: "Uyarlanabilir ipucu fikri ön kayıtlı protokolle simüle edildi; kuralı geçemeyince entegre edilmedi.",
            en: "The adaptive hint idea was simulated under a pre-registered protocol; it was not integrated when it failed to beat the rule baseline."
          }
        }
      ],
      limitations: [
        { tr: "Bitirme projesi geliştirme aşamasındadır; vertical slice ve iki bağımsız oyunculu kabul henüz tamamlanmadı.", en: "The capstone project is in development; the vertical slice and two-independent-player acceptance are not complete yet." },
        { tr: "İlk kabul ortamı aynı bilgisayarda localhost bağlantısıdır; internet üzerinden eşleşme kapsam dışıdır.", en: "The first acceptance environment is a localhost connection on one machine; matchmaking over the internet is out of scope." },
        { tr: "Repository özeldir; kaynak kod ve build public değildir.", en: "The repository is private; source code and builds are not public." },
        { tr: "Proje iki geliştiriciyle yürütülür; bu kayıt ekip çalışmasının teknik özetidir.", en: "The project is built by two developers; this record is a technical summary of the team’s work." }
      ],
      plannedExtensions: [
        { tr: "Milestone 1 oyuncu kabul oturumu ve Windows demo build’i.", en: "Milestone 1 player acceptance session and a Windows demo build." },
        { tr: "Tekrar oynanabilirlik ve alternatif çözüm yolu deneylerinin oyuna yansıtılması.", en: "Bringing replayability and alternative-solution experiments into the game." }
      ]
    },
    updatedAt: "2026-11-08"
  },
  {
    id: "agentverse",
    slug: "agentverse",
    title: "AgentVerse",
    statusId: "research-prototype",
    categoryId: "ml-research",
    themeId: "agent-grid",
    featuredLevel: "primary",
    order: 5,
    homeOrder: 5,
    repoUrl: "https://github.com/Baglare/AgentVerse",
    summary: {
      tr: "Kimliği ve öğrendiği becerileri kalıcı olan ajanları simüle ortamlarda eğitmek için açık kaynak, local-first deney aracı; LLM, ücretli API veya GPU gerektirmez.",
      en: "An open-source, local-first toolkit for training agents with persistent identities and learned skills in simulated environments; no LLM, paid API, or GPU required."
    },
    positioning: {
      tr: "Tekrarlanabilir pekiştirmeli öğrenme deneyleri; olumlu ve olumsuz transfer sonuçlarını açıkça raporlayan araştırma prototipi.",
      en: "Reproducible reinforcement learning experiments; a research prototype that reports positive and negative transfer results openly."
    },
    techStack: ["Python 3.12", "Gymnasium", "NumPy", "Matplotlib", "Tabular Q-learning", "pytest"],
    focusAreaIds: ["reinforcement-learning", "evaluation-workflow", "local-first-labs", "deterministic-pipelines"],
    coreSystems: [
      "AgentCore Identity",
      "Seeded Tabular Q-learning",
      "5×5 Gymnasium Navigation World",
      "Resource Collection Skill (M2)",
      "Versioned / Checksummed Skill Snapshots",
      "Random-policy Baseline / Paired Evaluation",
      "Interactive Replay (Step · Play · Reset)",
      "Goal Relocation Transfer (M3-A)",
      "Navigation → Collection Transfer Adapter (M3-B)"
    ],
    transformation: {
      input: { tr: "Adlandırılmış ajan, seed ve ortam tanımı", en: "A named agent, a seed, and an environment definition" },
      process: { tr: "Seed’li Q-learning eğitimi, baseline ile eşli değerlendirme ve transfer deneyleri", en: "Seeded Q-learning training, paired evaluation against a baseline, and transfer experiments" },
      output: { tr: "Sürümlü beceri snapshot’ları, öğrenme eğrileri, raporlar ve replay", en: "Versioned skill snapshots, learning curves, reports, and replay" },
      compact: {
        tr: "Ajan + seed → Q-learning + baseline karşılaştırması → sürümlü beceri ve rapor",
        en: "Agent + seed → Q-learning + baseline comparison → versioned skill and report"
      }
    },
    architectureFlow: {
      steps: ["Create Named Agent", "Train (seeded)", "Evaluate vs Random Baseline", "Save Checksummed Skill", "Report / PNG Curves", "Replay Policy", "Transfer Experiments (M3)"].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "AgentVerse şu soruyu araştırır: bağımsız eğitilen ajanlar becerilerini koruyup ileride farklı görevlerde yeniden kullanabilir mi — bir LLM’e, ücretli API’ye veya merkezi bir çıkarım sunucusuna ihtiyaç duymadan?\n\nİlk prototip sabit bir 2B navigasyon dünyasında tabular Q-learning kullanır. Genel amaçlı bir zeki ajan veya hazır çok dünyalı bir platform değil; tekrarlanabilir bir öğrenme deneyidir.",
          en: "AgentVerse investigates a question: can independently trained agents preserve skills and eventually reuse them across tasks — without an LLM, a paid API, or a central inference server?\n\nThe first prototype uses tabular Q-learning in a fixed 2D navigation world. It is a reproducible learning experiment, not a general-purpose intelligent agent or an existing multi-world platform."
        }
      },
      currentScope: {
        body: {
          tr: "M1: kalıcı kimlikli adlandırılmış ajan, 5×5 Gymnasium navigasyon ortamı, seed’li Q-learning, rastgele politika baseline’ı ve eşli değerlendirme, sürümlü/checksum’lı beceri snapshot’ları, metrikler, PNG öğrenme eğrileri ve etkileşimli replay. M2: Navigation ve Resource Collection olmak üzere ajan başına birden fazla bağımsız beceri.\n\nDeneysel M3-A, navigasyon haritasında hedef yer değiştirme transferini test eder; olumlu ve olumsuz transfer gözlemlendi. M3-B, Navigation → Collection transfer adaptörünü ve kontrol gruplarını uygular; faydalı öğrenilmiş transfer kanıtlanmadı. Mevcut beceriden eğitime devam etmek henüz yoktur.",
          en: "M1: a named agent with a persistent identity, a 5×5 Gymnasium navigation environment, seeded Q-learning, a random-policy baseline with paired evaluation, versioned/checksummed skill snapshots, metrics, PNG learning curves, and interactive replay. M2: multiple independent skills per agent — Navigation and Resource Collection.\n\nExperimental M3-A tests goal-relocation transfer on the navigation map; both positive and negative transfer were observed. M3-B implements a Navigation → Collection transfer adapter with controls; useful learned transfer was not established. Continuing training from an existing skill is not implemented yet."
        }
      },
      designDecisions: [
        {
          title: { tr: "Önce tekrarlanabilirlik", en: "Reproducibility first" },
          description: {
            tr: "Her eğitim ve değerlendirme seed’lidir; aynı seed ile replay aynı başlangıcı yeniden oynatır.",
            en: "Every training and evaluation run is seeded; replay with the same seed reproduces the same start."
          }
        },
        {
          title: { tr: "Olumsuz sonucu da yayımlamak", en: "Publish negative results too" },
          description: {
            tr: "Transfer deneylerinde başarısız ya da olumsuz sonuçlar README’de açıkça yazılır; ortak bir ortam API’si becerinin otomatik transfer edildiği anlamına gelmez.",
            en: "Failed or negative transfer results are stated openly in the README; a shared environment API does not mean a skill transfers automatically."
          }
        },
        {
          title: { tr: "Altyapı gerektirmeyen başlangıç", en: "An entry point that needs no infrastructure" },
          description: {
            tr: "M1 yalnız Python 3.12 ile çalışır; GPU, hesap, API anahtarı veya barındırılan sunucu gerekmez.",
            en: "M1 runs with just Python 3.12; no GPU, account, API key, or hosted server is required."
          }
        }
      ],
      limitations: [
        { tr: "Erken prototiptir (v0.1.0); çok ajanlı rekabet, Arena ve topluluk dünyaları gelecek hedefleridir.", en: "Early prototype (v0.1.0); multi-agent competition, the Arena, and community worlds are future goals." },
        { tr: "`train` komutu şu an her seferinde yeni Q-table ile başlar; sürekli öğrenme gösterilmedi.", en: "The `train` command currently starts a new Q-table each time; continual learning has not been demonstrated." },
        { tr: "Genel çapraz beceri transferi kanıtlanmadı.", en: "General cross-skill transfer has not been demonstrated." }
      ],
      plannedExtensions: [
        { tr: "Mevcut beceriden eğitime devam etme ve sürekli öğrenme deneyleri.", en: "Continuing training from an existing skill and continual learning experiments." },
        { tr: "Training Grounds, Arena ve topluluk ortam arayüzü.", en: "Training Grounds, the Arena, and a community environment interface." }
      ]
    },
    updatedAt: "2026-10-26"
  },
  {
    id: "dersoyun",
    slug: "dersoyun",
    title: "DersOyun",
    statusId: "active-development",
    categoryId: "learning-platform",
    themeId: "study-lumen",
    featuredLevel: "normal",
    order: 6,
    homeOrder: 6,
    summary: {
      tr: "Sekiz üniversite dersini soru bankası, anlatım, atölye ve deneme sınavlarıyla çevrimdışı çalışabilen bir öğrenme uygulamasına dönüştüren React/TypeScript PWA’sı.",
      en: "A React/TypeScript PWA that turns eight university courses into an offline-capable study app with question banks, lessons, workshops, and practice exams."
    },
    positioning: {
      tr: "Ortak ders motoru, yoğun otomatik test kapsamı ve taşınabilir Windows paketiyle öğrenme deneyimi mühendisliği.",
      en: "Learning-experience engineering with a shared course engine, extensive automated test coverage, and a portable Windows package."
    },
    techStack: ["React 19", "TypeScript", "Vite", "PWA", "Vitest", "Playwright", "react-markdown", "PowerShell Packaging"],
    focusAreaIds: ["learning-design", "local-first-apps", "product-ui", "data-persistence", "evaluation-workflow"],
    coreSystems: [
      "Shared Course Engine",
      "Question Types / Mastery Threshold",
      "Practice & Architecture Exam Lifecycle",
      "Workshop Extensions",
      "Concept Bridge System",
      "Progress Save / Load (single file)",
      "Offline PWA / Static Build",
      "Portable Windows Package",
      "Legacy Save Compatibility"
    ],
    transformation: {
      input: { tr: "Ders kaynak paketleri: konu haritası, anlatım, soru bankası ve etkileşimler", en: "Course resource packs: topic map, lessons, question bank, and interactions" },
      process: { tr: "İçerik derleme, ortak ders motoru, ustalık kuralı ve deneme yaşam döngüsü", en: "Content compilation, a shared course engine, mastery rules, and exam lifecycle" },
      output: { tr: "Tarayıcıda ilerleme saklayan, çevrimdışı çalışan etkileşimli dersler", en: "Interactive, offline-capable courses that store progress in the browser" },
      compact: {
        tr: "Ders kaynakları → ortak ders motoru → çevrimdışı etkileşimli çalışma",
        en: "Course resources → shared course engine → offline interactive study"
      }
    },
    architectureFlow: {
      steps: ["Course Resource Packs", "Content Build", "Shared Course Engine", "Lessons / Questions / Workshops", "Practice Exams", "Local Progress (per course)", "PWA / Portable Package"].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "DersOyun; Yapay Zekâ Destekli Yazılım Geliştirme, Büyük Veri, Bilgisayar Mimarisi, Derin Öğrenme, Makine Öğrenmesi, Olasılık ve İstatistik, İSG ve İnkılap Tarihi derslerini tek uygulamada toplar. Her ders kendi kaynak paketinden derlenir; anlatım, soru, modül ve deneme akışları ortak bir ders motorunu kullanır.\n\nİlerleme tarayıcıda ders kimliğiyle saklanır; cihazlar arasında taşımak için tek dosyalık kaydet/yükle seçeneği vardır.",
          en: "DersOyun brings AI-assisted Software Development, Big Data, Computer Architecture, Deep Learning, Machine Learning, Probability and Statistics, Occupational Safety, and Turkish Revolution History into one app. Each course is compiled from its own resource pack; lessons, questions, modules, and exams share one course engine.\n\nProgress is stored in the browser per course ID, with a single-file save/load option to move it between devices."
        }
      },
      currentScope: {
        body: {
          tr: "Kasım 2026’da (PR #22) soru türleri, ustalık eşiği, tembel ders uzantıları, atölye seçimi ve deneme yaşam döngüsü ortak motora taşındı; sekiz dersin eski kayıt uyumluluğu testlerle kilitlendi. Son yerel kabulde 748 birim, 205 Edge tarayıcı ve 24 PWA testi ile normal/güvenli web build’leri başarılı oldu.\n\nÖnceki aşamalarda okuma düzeni, öğrenme tabloları, 198 kavramlık köprü sistemi, üç kalıcı tema ve tek dosya ilerleme kaydı eklendi. Uygulama statik çıktı ve taşınabilir Windows paketi olarak üretilebilir.",
          en: "In November 2026 (PR #22), question types, mastery thresholds, lazy course extensions, workshop selection, and the exam lifecycle moved into the shared engine; legacy save compatibility for all eight courses was locked down with tests. The latest local acceptance passed 748 unit, 205 Edge browser, and 24 PWA tests plus normal/safe web builds.\n\nEarlier stages added a reading layout, learning tables, a 198-concept bridge system, three persistent themes, and single-file progress saves. The app can be produced as a static build and a portable Windows package."
        }
      },
      designDecisions: [
        {
          title: { tr: "Dersleri ortak motora taşımak", en: "Move courses onto a shared engine" },
          description: {
            tr: "Önce sekiz dersin mevcut davranışı ve eski kayıtları sabitlendi, sonra ortak motora geçildi; dersler arası farklar bağdaştırıcılarda korunur.",
            en: "The current behaviour and legacy saves of all eight courses were pinned first, then moved to the shared engine; per-course differences stay in adapters."
          }
        },
        {
          title: { tr: "Çevrimdışı öncelikli dağıtım", en: "Offline-first distribution" },
          description: {
            tr: "PWA ve taşınabilir paket internet olmadan çalışır; kaynak PDF/görselleri statik çıktının dışında tutulur.",
            en: "The PWA and portable package work without internet; source PDFs/images are kept out of the static output."
          }
        }
      ],
      limitations: [
        { tr: "Repository özeldir; içerik kişisel çalışma amaçlıdır.", en: "The repository is private; content is intended for personal study." },
        { tr: "Firefox/Safari, fiziksel mobil cihaz ve ekran okuyucu testleri yapılmadı.", en: "Firefox/Safari, physical mobile devices, and screen readers have not been tested." },
        { tr: "İlerleme tarayıcıda yereldir; hesap veya bulut senkronizasyonu yoktur.", en: "Progress is local to the browser; there is no account or cloud sync." }
      ],
      plannedExtensions: [{ tr: "Ders içeriği bağdaştırıcılarının kalan derslere genişletilmesi.", en: "Extending course content adapters to the remaining courses." }]
    },
    updatedAt: "2026-11-04"
  },
  {
    id: "kiyafet-kategorilendirme",
    slug: "kiyafet-kategorilendirme",
    title: "Kıyafet Kategorilendirme",
    statusId: "course-project",
    categoryId: "computer-vision-interaction",
    themeId: "fabric-lens",
    featuredLevel: "normal",
    order: 10,
    homeOrder: 10,
    summary: {
      tr: "Fashionpedia üzerinde instance segmentation ve kıyafet attribute sınıflandırması yapan, YOLO ile RF-DETR’ı kontrollü karşılaştıran gerçek zamanlı kıyafet analizi projesi.",
      en: "A real-time clothing analysis project performing instance segmentation and garment attribute classification on Fashionpedia, with a controlled YOLO vs RF-DETR comparison."
    },
    positioning: {
      tr: "İzmir Bakırçay Üniversitesi Derin Öğrenme dersi kapsamında üç kişilik ekip projesi; sonuçlar ölçüm kaynağıyla birlikte raporlanır.",
      en: "A three-person team project for the İzmir Bakırçay University Deep Learning course; results are reported together with their measurement source."
    },
    techStack: ["Python", "PyTorch", "YOLO26s-Seg", "RF-DETR-Seg", "DINOv2 ViT-S/14", "EfficientNet-B0", "Fashionpedia"],
    focusAreaIds: ["deep-learning-models", "computer-vision", "evaluation-workflow", "real-time-camera-pipeline"],
    coreSystems: [
      "8-class Garment Instance Segmentation",
      "YOLO26s-Seg vs RF-DETR-Seg Small",
      "DINOv2 Attribute Classifier (30 attributes)",
      "EfficientNet-B0 Attribute Classifier (19 attributes)",
      "Garment Lab Photo Flow",
      "Webcam Prototype",
      "Dataset / License GO-NO-GO Gates",
      "Reproducible Evidence Exports"
    ],
    transformation: {
      input: { tr: "Fotoğraf veya webcam karesi", en: "A photo or webcam frame" },
      process: { tr: "Giysi segmentasyonu, maske kırpma ve iki attribute modeliyle sınıflandırma", en: "Garment segmentation, mask cropping, and classification with two attribute models" },
      output: { tr: "Segmentasyon maskeleri ve kıyafet attribute’ları gösteren arayüz", en: "A UI showing segmentation masks and garment attributes" },
      compact: { tr: "Görüntü → segmentasyon + attribute modelleri → kıyafet analizi", en: "Image → segmentation + attribute models → garment analysis" }
    },
    architectureFlow: {
      steps: ["Photo / Webcam Frame", "RF-DETR or YOLO Segmenter", "Garment Masks (8 classes)", "DINOv2 + EfficientNet Attributes", "Garment Lab UI"].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "Proje, Fashionpedia veri kümesinde seçilmiş 8 giysi sınıfı için instance segmentation, ardından kıyafet attribute sınıflandırması ve fotoğraf/webcam analizi hedefler. Amaç farklı mimarileri kontrollü biçimde karşılaştırmaktır.\n\nFashionpedia validation sonuçları (her kütüphanenin kendi evaluator’ı): YOLO26s-Seg mask mAP@50 0.848, RF-DETR-Seg Small mask mAP@50 0.872. 44.067 train ve 1.141 validation görüntüsü kullanıldı.",
          en: "The project targets instance segmentation for 8 selected garment classes on the Fashionpedia dataset, followed by garment attribute classification and photo/webcam analysis. The goal is a controlled comparison of different architectures.\n\nFashionpedia validation results (each library’s own evaluator): YOLO26s-Seg mask mAP@50 0.848, RF-DETR-Seg Small mask mAP@50 0.872. 44,067 training and 1,141 validation images were used."
        }
      },
      currentScope: {
        body: {
          tr: "İki segmentasyon modeli ve iki attribute modeli eğitildi. Bilgisayarda çalışan Garment Lab’de fotoğraf seçimi → RF-DETR → iki attribute modeli → segmentasyon/attribute arayüzü akışı ekran görüntüsüyle doğrulandı. İlk webcam oturumunda yaklaşık 35 model-tahmin FPS görüldü; bu uçtan uca ekran FPS’si değildir.\n\nİnce giysi türleri (tişört/sweatshirt/hoodie gibi) için dataset, etiket ve lisans uygunluğu GO/NO-GO kapısına bağlıdır. Proje tamamlanmadı; fotoğraf üç-model entegrasyonu, subtype eğitimi, canlı webcam ve nihai bağımsız değerlendirme açık kapılardır.",
          en: "Two segmentation models and two attribute models were trained. In the desktop Garment Lab, the photo selection → RF-DETR → two attribute models → segmentation/attribute UI flow was verified with a screenshot. About 35 model-prediction FPS was seen in the first webcam session; this is not end-to-end screen FPS.\n\nDataset, labelling, and licence feasibility for fine-grained garment types (t-shirt/sweatshirt/hoodie) is behind a GO/NO-GO gate. The project is not complete; three-model photo integration, subtype training, live webcam, and final independent evaluation remain open gates."
        }
      },
      designDecisions: [
        {
          title: { tr: "Ölçüm kaynağını açıkça yazmak", en: "State the measurement source explicitly" },
          description: {
            tr: "Metrikler iki kütüphanenin kendi evaluator’larından gelir; ortak evaluator ile doğrulanmadan doğrudan üstünlük iddia edilmez.",
            en: "Metrics come from each library’s own evaluator; no direct superiority is claimed until verified with a shared evaluator."
          }
        },
        {
          title: { tr: "Yeni eğitimi kapıya bağlamak", en: "Gate new training" },
          description: {
            tr: "İnce giysi türleri için yeni eğitim, veri/etiket/lisans uygunluğu GO kararı aldıktan sonra başlar.",
            en: "New training for fine-grained garment types only starts after a GO decision on data, labels, and licensing."
          }
        }
      ],
      limitations: [
        { tr: "Ders projesidir ve tamamlanmamıştır; ara demo paketi nihai rapor değildir.", en: "It is a course project and not complete; the interim demo package is not the final report." },
        { tr: "Üç kişilik ekip çalışmasıdır; bu kayıt ekibin teknik özetidir.", en: "It is a three-person team effort; this record is a technical summary of the team’s work." },
        { tr: "Repository özeldir; modeller ve veri kümesi yayımlanmaz.", en: "The repository is private; models and the dataset are not published." }
      ],
      plannedExtensions: [
        { tr: "Ortak evaluator ile segmentasyon modellerinin doğrudan karşılaştırılması.", en: "Direct comparison of segmentation models with a shared evaluator." },
        { tr: "Kontrollü webcam deneyi ve ince giysi türü sınıflandırması.", en: "A controlled webcam experiment and fine-grained garment type classification." }
      ]
    },
    updatedAt: "2026-11-12"
  },
  {
    id: "petglare",
    slug: "petglare",
    title: "Petglare",
    statusId: "released-tool",
    categoryId: "desktop-applications",
    themeId: "pet-glow",
    featuredLevel: "normal",
    order: 15,
    homeOrder: 15,
    repoUrl: "https://github.com/Baglare/ClaudePetGlare",
    summary: {
      tr: "Claude Desktop’taki Code oturumlarının durumunu —düşünme, dosya okuma, onay, komut, tamamlanma, hata— Windows masaüstünde küçük bir maskotla gösteren WPF uygulaması.",
      en: "A WPF app that shows the state of Claude Desktop Code sessions — thinking, reading files, approvals, commands, completion, errors — as a small mascot on the Windows desktop."
    },
    positioning: {
      tr: "AI kodlama asistanının hook olaylarını yerel bir named pipe ile görünür kılan, v1.0.0 olarak yayımlanmış küçük masaüstü aracı.",
      en: "A small desktop tool, released as v1.0.0, that surfaces an AI coding assistant’s hook events over a local named pipe."
    },
    techStack: ["C#", ".NET 10", "WPF", "Named Pipes", "Claude Code Hooks"],
    focusAreaIds: ["ai-assistant-tooling", "desktop-architecture", "product-ui"],
    coreSystems: ["Hook Installer / Uninstaller", "Local Named Pipe Listener", "Pet State Machine", "Speech Bubble / Completion Glow", "Position & Size Persistence", "Demo Mode"],
    architectureFlow: {
      steps: ["Claude Code Hook Event", "Local Named Pipe (same Windows user)", "Pet State Machine", "Mascot Animation / Bubble"].map(step)
    },
    sections: {
      overview: {
        body: {
          tr: "Petglare, Claude Desktop’ın Code → Local oturumlarından gelen hook olaylarını aynı Windows kullanıcısına ait yerel bir named pipe üzerinden alır ve maskotun balonunda gösterir. Sol tık Claude Desktop’ı açar, sürükleme konumu değiştirir; boyut %80–%150 arasında ayarlanabilir.",
          en: "Petglare receives hook events from Claude Desktop’s Code → Local sessions over a local named pipe owned by the same Windows user and shows them in the mascot’s bubble. Left-click opens Claude Desktop, dragging moves it, and size can be adjusted between 80% and 150%."
        }
      },
      currentScope: {
        body: {
          tr: "v1.0.0 GitHub Releases üzerinden ZIP olarak yayımlandı. Kurulum betiği Claude kullanıcı ayarlarına Petglare hook’larını diğer ayarları koruyarak ekler ve tekrar kurulumda çoğaltmaz; kaldırma betiği de vardır. `--demo` modu Claude olmadan tüm durumları sırayla gösterir.",
          en: "v1.0.0 is published as a ZIP on GitHub Releases. The install script adds Petglare hooks to Claude user settings while preserving other settings and avoids duplicates on reinstall; an uninstall script is included. A `--demo` mode cycles through every state without Claude."
        }
      },
      designDecisions: [
        {
          title: { tr: "İçerik değil yalnız durum", en: "State only, never content" },
          description: {
            tr: "Petglare prompt, dosya içeriği veya ham komut kaydetmez; yalnız konum, boyut ve parıltı tercihi yerelde saklanır.",
            en: "Petglare never records prompts, file contents, or raw commands; only position, size, and glow preference are stored locally."
          }
        },
        {
          title: { tr: "Ayarları koruyan kurulum", en: "Settings-preserving installation" },
          description: {
            tr: "Hook kurulumu mevcut ayarları ve diğer hook’ları korur; özel ayar dosyası için komut satırı seçenekleri vardır.",
            en: "Hook installation preserves existing settings and other hooks; command-line options support a custom settings file."
          }
        }
      ],
      limitations: [
        { tr: "Yalnız Windows 11 x64 ve .NET 10 Desktop Runtime ile çalışır.", en: "Runs only on Windows 11 x64 with the .NET 10 Desktop Runtime." },
        { tr: "Bağımsız bir yan projedir; Anthropic ile bağlantılı değildir.", en: "An independent side project; not affiliated with Anthropic." }
      ],
      plannedExtensions: []
    },
    updatedAt: "2026-11-18"
  }
];
