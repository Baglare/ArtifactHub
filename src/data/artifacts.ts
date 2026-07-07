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
      tr: "Tempo tabanlı combat, parry/deflect ve data-driven progression sistemleri üzerine kurulu Unity gameplay prototipi."
    },
    positioning: {
      tr: "Gameplay systems ve combat architecture tarafını temsil eden Unity artifact’i."
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
      input: { tr: "Oyuncu input’u, silah verisi ve düşman/oda verisi" },
      process: { tr: "Combat state, tempo tier, combo çözümleme, parry/deflect hesaplama" },
      output: { tr: "Oynanabilir combat loop, oda akışı ve progression çıktısı" },
      compact: {
        tr: "Oyuncu input’u ve combat verisi → tempo/combo çözümleme → oynanabilir aksiyon döngüsü"
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
          tr: "TempoBlade, combat hissi ve sistem mimarisi üzerine odaklanan bir Unity gameplay prototipidir. Proje, oyuncu input’unu silah verisi, kombo adımları, tempo değeri, parry penceresi ve düşman davranışlarıyla birleştirerek oynanabilir bir aksiyon döngüsü üretir.\n\nArtifactHub içinde TempoBlade’in rolü final oyun sunmak değil; combat architecture, data-driven gameplay ve roguelite progression kararlarını belgelemektir."
        }
      },
      currentScope: {
        body: {
          tr: "Mevcut sürümde ana menü, hub ve gameplay sahneleri üzerinden ilerleyen bir oyun akışı bulunur. Oyuncu hub’dan run başlatabilir, gameplay sahnesinde oda bazlı encounter akışına girer, düşman dalgalarıyla savaşır ve oda temizlenince reward door üzerinden sonraki aşamaya geçer.\n\nCombat tarafında silah verisi, combo adımları, saldırı görselleştirmesi, parry/deflect davranışı, tempo tier sistemi ve düşman varyasyonları prototiplenmiştir. Progression tarafında hub, ekonomi, kalıcı kaynaklar, blacksmith ve skill tree iskeleti bulunur."
        }
      },
      designDecisions: [
        {
          title: { tr: "Silah davranışlarını ScriptableObject ile taşımak" },
          description: {
            tr: "Silah davranışlarının ScriptableObject verisiyle taşınması, combat sistemini yeni silah ve combo varyasyonları için genişletilebilir hale getirir."
          }
        },
        {
          title: { tr: "ComboStepData ile weapon-specific combo kurmak" },
          description: {
            tr: "ComboStepData kullanımı, saldırı davranışını tek bir sabit animasyon zinciri olmaktan çıkarıp weapon-specific combo dizilerine dönüştürür."
          }
        },
        {
          title: { tr: "IDeflectable ile projectile davranışını genelleştirmek" },
          description: {
            tr: "IDeflectable arayüzü, standart projectile ve boss projectile gibi farklı mermi tiplerini aynı deflect mantığı altında toplamaya yarar."
          }
        },
        {
          title: { tr: "Tempo tier sistemini combat feedback’e bağlamak" },
          description: {
            tr: "Tempo tier sistemi, combat performansını yalnızca input hızına değil, oyuncunun ritim ve akış içindeki davranışına da bağlamayı hedefler."
          }
        },
        {
          title: { tr: "Hub ve progression yapısıyla run döngüsü kurmak" },
          description: {
            tr: "Hub ve progression yapısı, tek seferlik combat sahnesi yerine roguelite döngüsüne uygun daha geniş bir sistem zemini kurar."
          }
        }
      ],
      limitations: [
        {
          tr: "TempoBlade final oyun olarak sunulmaz; combat, encounter ve progression sistemlerini test eden genişletilebilir bir gameplay prototipidir."
        },
        { tr: "Görsel ve ses polish’i final seviyesinde değildir." },
        { tr: "Balans değerleri deneysel kabul edilir." },
        {
          tr: "Bazı sistemler prototip seviyesinde olduğu için ileride refactor, polish ve oynanış testi gerektirir."
        },
        {
          tr: "Ana değer final içerik miktarında değil; combat mimarisi, veri odaklı sistem yapısı ve gameplay loop tasarımındadır."
        }
      ],
      plannedExtensions: [
        { tr: "Combat ekran görüntüleri ve kısa görsel materyal ekleme" },
        { tr: "Build/release akışını daha temiz sunma" },
        { tr: "Enemy encounter polish" },
        { tr: "Tempo feedback görsellerini iyileştirme" },
        { tr: "Progression sistemini daha tutarlı hale getirme" },
        { tr: "README ve ArtifactHub teknik dosyasını çapraz bağlama" }
      ],
      visualNotes: {
        tr: "Kırık antik kılıç, siyah taş zemin, mor/kızıl/mavi neon çatlaklar ve kısa slash izi."
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
      tr: "Film, dizi, anime, manga ve kitap takibini local-first veri yapısıyla yöneten kişisel medya arşiv sistemi."
    },
    positioning: {
      tr: "Local-first product design ve medya veri yönetimi tarafını temsil eden web application artifact’i."
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
      input: { tr: "Kullanıcı medya kayıtları, API arama sonuçları ve yerel arşiv verisi" },
      process: { tr: "Filtreleme, arşivleme, progress tracking, JSON yönetimi, öneri hesaplama" },
      output: { tr: "Kişisel medya dashboard’u ve local-first medya kütüphanesi" },
      compact: {
        tr: "Medya kayıtları ve API sonuçları → arşivleme/progress takibi → kişisel medya dashboard’u"
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
          tr: "MediaTracker, kişisel medya tüketimini tek bir local-first arşiv içinde düzenlemek için tasarlanmış ürün prototipidir. Varsayılan veri akışı kullanıcının tarayıcısında yerel olarak çalışır; medya kayıtları, ilerleme durumu, puanlar, listeler ve filtreleme davranışları bu yerel veri modeli üzerine kurulur.\n\nArtifactHub içinde MediaTracker’ın rolü, ürün tipi bir web uygulamasında veri sürekliliği, medya API entegrasyonu, local-first kararları ve genişletilebilir recommendation altyapısını temsil etmektir."
        }
      },
      currentScope: {
        body: {
          tr: "Mevcut sürümde kullanıcı medya kayıtlarını yerel olarak yönetebilir, farklı medya türleri üzerinde arama ve filtreleme yapabilir, izleme/okuma durumlarını takip edebilir, favori/watchlist/puan/not gibi kişisel arşiv verileri oluşturabilir.\n\nAPI entegrasyonları, medya arama ve zenginleştirme tarafını destekler. JSON import/export yapısı, yerel verinin taşınabilirliğini sağlar. Supabase katmanı ana akış değil; auth, cloud aktarım ve senkron hazırlıkları için opsiyonel genişletme yönüdür."
        }
      },
      designDecisions: [
        {
          title: { tr: "Local-first yaklaşımı ana akış yapmak" },
          description: {
            tr: "Local-first yaklaşım, uygulamanın temel kullanımını hesap veya sunucu bağımlılığına bağlamaz. Kullanıcı arşivi tarayıcıda yaşayabilir ve uygulama offline-first karakterini korur."
          }
        },
        {
          title: { tr: "Supabase’i ana veri kaynağı değil genişletme katmanı yapmak" },
          description: {
            tr: "Supabase katmanı, ilk veri kaynağı olarak değil; cloud aktarım, hesap ve senkronizasyon genişletmesi olarak konumlandırılır. Bu, ürünün yerel kullanım değerini korurken büyüme alanı bırakır."
          }
        },
        {
          title: { tr: "JSON import/export ile taşınabilir veri sağlamak" },
          description: {
            tr: "JSON import/export, medya arşivini kapalı bir uygulama verisi olmaktan çıkarıp taşınabilir hale getirir."
          }
        },
        {
          title: { tr: "Harici API entegrasyonlarıyla kayıt oluşturmayı hafifletmek" },
          description: {
            tr: "Medya API entegrasyonları, kullanıcı girişiyle manuel veri yazma yükünü azaltır ve arşiv kaydını zenginleştirir."
          }
        },
        {
          title: { tr: "Öneri araçlarını genişletme potansiyeli olarak tutmak" },
          description: {
            tr: "Embedding ve öneri araçları, medya takip uygulamasını sadece liste tutan bir sistemden kişisel keşif aracına genişletme potansiyeli taşır."
          }
        }
      ],
      limitations: [
        {
          tr: "MediaTracker final SaaS ürünü olarak sunulmaz; local-first medya arşiv sistemi ve ürün prototipi olarak konumlanır."
        },
        { tr: "Cloud sync ana akış değil, opsiyonel genişletme katmanıdır." },
        { tr: "Öneri sistemi deneysel kabul edilir." },
        { tr: "Harici API sonuçları kaynakların veri kalitesine ve erişilebilirliğine bağlıdır." },
        { tr: "Uygulama kapsamı geniş olduğu için ileride modüler refactor ve UI sadeleştirmesi gerekebilir." }
      ],
      plannedExtensions: [
        { tr: "Dashboard ve arşiv ekranları için statik görseller ekleme" },
        { tr: "Local-first / Supabase akışını ArtifactHub üzerinde diyagramlaştırma" },
        { tr: "Büyük UI/state parçalarını daha modüler hale getirme" },
        { tr: "Öneri sistemini daha net demo edilebilir hale getirme" },
        { tr: "İngilizce teknik dosya metnini ileride hazırlama" }
      ],
      visualNotes: {
        tr: "Koyu lacivert/grafit arka plan, cyan vurgu, medya kartları, progress ring ve arşiv terminali hissi."
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
      tr: "Ses dosyasındaki ritmik vuruşları analiz edip beatmap verisine ve Unity ritim-combat eventlerine dönüştüren audio pipeline."
    },
    positioning: {
      tr: "Audio pipeline ve procedural gameplay data tarafını temsil eden Forge artifact’i."
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
      input: { tr: "WAV ses dosyası" },
      process: { tr: "Ritim analizi, beatmap üretimi, postprocess ve combat style variant üretimi" },
      output: { tr: "Unity içinde kullanılabilir ritim-combat eventleri" },
      compact: {
        tr: "WAV ses dosyası → ritim analizi/beatmap üretimi → Unity ritim-combat eventleri"
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
          tr: "PulseForge, ham ses girdisini oynanabilir ritim verisine dönüştüren teknik pipeline artifact’idir. Proje, bir ses dosyasındaki ritmik yoğunlukları analiz eder, bunları beatmap formatına taşır, postprocess aşamasından geçirir ve Unity runtime içinde ritim-combat eventleri olarak kullanır.\n\nArtifactHub içinde PulseForge, Forge Series’in en net veri dönüşüm örneğidir: ses dosyası girer, yapılandırılmış beatmap verisi çıkar, bu veri runtime davranışına bağlanır."
        }
      },
      currentScope: {
        body: {
          tr: "Mevcut kapsamda Python tarafında WAV analizi ve beatmap üretim akışı; Unity tarafında beatmap import/preview, prototip ritim-combat davranışı, judgement sistemi ve combat style variant üretimi bulunur.\n\nProje final ritim oyunu olarak değil, audio analysis → beatmap → Unity runtime zincirini test eden pipeline prototipi olarak sunulur."
        }
      },
      designDecisions: [
        {
          title: { tr: "Python analiz katmanını Unity runtime’dan ayırmak" },
          description: {
            tr: "Python analiz katmanının Unity runtime’dan ayrılması, ses işleme ve oyun davranışını farklı sorumluluklara böler."
          }
        },
        {
          title: { tr: "Beatmap verisini JSON olarak taşımak" },
          description: {
            tr: "Beatmap verisinin JSON olarak taşınması, analiz çıktısını okunabilir, test edilebilir ve Unity dışı araçlarla da işlenebilir hale getirir."
          }
        },
        {
          title: { tr: "Raw ve playable beatmap ayrımı yapmak" },
          description: {
            tr: "Raw beatmap ve playable beatmap ayrımı, analiz çıktısı ile gameplay için kullanılabilir veri arasında bilinçli bir postprocess katmanı kurar."
          }
        },
        {
          title: { tr: "Combat style variants üretmek" },
          description: {
            tr: "Combat style variants, aynı beatmap temelinden farklı oynanış yorumları üretme alanı açar."
          }
        },
        {
          title: { tr: "Unity Editor preview kullanmak" },
          description: {
            tr: "Unity Editor preview, pipeline çıktısını runtime’a girmeden önce görsel olarak incelemeye yarar."
          }
        }
      ],
      limitations: [
        { tr: "PulseForge final ritim oyunu değildir." },
        { tr: "Runtime MP3 import veya gerçek zamanlı analiz iddiası taşımaz." },
        { tr: "Beat detection sonuçları müzik türüne, ses kalitesine ve analiz parametrelerine bağlıdır." },
        { tr: "Unity tarafındaki oynanış prototip seviyesindedir." },
        { tr: "Ana değer, ses analiziyle gameplay datası üretme zincirinin kurulmuş olmasıdır." }
      ],
      plannedExtensions: [
        { tr: "Beatmap visualization çıktılarının ArtifactHub’a eklenmesi" },
        { tr: "Pipeline diyagramının görsel hale getirilmesi" },
        { tr: "Farklı şarkı türleriyle analiz örnekleri hazırlanması" },
        { tr: "Unity prototip UI iyileştirmesi" },
        { tr: "Combat style variant örneklerinin daha net belgelenmesi" }
      ],
      visualNotes: {
        tr: "Kömür siyahı, amber/turuncu vurgu, waveform, beat marker ve örs üzerinde dövülen ses dalgası."
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
      tr: "İzinli referans seslerle yerel TTS, voice profile, ses ön işleme ve kalite değerlendirme akışlarını birleştiren audio lab."
    },
    positioning: {
      tr: "Local TTS, voice profile ve ses değerlendirme akışlarını temsil eden Forge lab artifact’i."
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
      input: { tr: "Referans ses, metin ve dataset parçaları" },
      process: { tr: "Ses ön işleme, profil oluşturma, TTS inference, kalite kontrol ve fine-tuning hazırlığı" },
      output: { tr: "Yerel ses üretim çıktıları, kalite raporları ve deneysel değerlendirme sonuçları" },
      compact: {
        tr: "Referans ses ve metin → profil/TTS/kalite değerlendirme → yerel ses üretim çıktıları"
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
          tr: "VoxForge, ses üretimi ve voice profile deneylerini kontrollü bir yerel çalışma alanında toplar. Sistem, referans sesin hazırlanması, profile dönüştürülmesi, TTS üretimi, kalite raporu, dataset hazırlığı ve fine-tuning değerlendirmesi gibi adımları tek bir deney akışı altında düzenler.\n\nArtifactHub içinde VoxForge’ün rolü, ses verisinin local-first, izinli ve değerlendirilebilir bir audio lab sürecine nasıl dönüştürülebileceğini göstermektir."
        }
      },
      currentScope: {
        body: {
          tr: "Mevcut kapsamda Gradio tabanlı yerel arayüz, XTTS tabanlı reference-based TTS üretimi, voice profile yönetimi, speaker WAV ön işleme, kalite raporu, inference presetleri, dataset hazırlığı ve deneysel fine-tuning değerlendirme adımları bulunur.\n\nProje bir public ses üretim servisi değildir. Kullanım çerçevesi yerel çalışma, izinli/kendi ses verisi ve deneysel değerlendirme üzerine kuruludur."
        }
      },
      designDecisions: [
        {
          title: { tr: "Local-first çalışma düzeni kurmak" },
          description: { tr: "Local-first çalışma düzeni, ses verisinin uzak servislere taşınmadan deney yapılabilmesini sağlar." }
        },
        {
          title: { tr: "Reference-based TTS ve fine-tuning kavramlarını ayırmak" },
          description: {
            tr: "Reference-based TTS ve fine-tuning kavramları birbirinden ayrılır; bu, projenin ne yaptığını ve ne iddia etmediğini daha net gösterir."
          }
        },
        {
          title: { tr: "Voice profile sistemini model eğitimiyle eşitlememek" },
          description: {
            tr: "Voice profile sistemi, referans sesleri tekrar kullanılabilir yerel profiller olarak düzenler ama bunu doğrudan model eğitimiyle eşitlemez."
          }
        },
        {
          title: { tr: "Kalite raporu ve değerlendirme akışı eklemek" },
          description: {
            tr: "Kalite raporu ve değerlendirme akışı, ses üretimini sadece çıktı aldım seviyesinden çıkarıp karşılaştırılabilir deney sürecine taşır."
          }
        },
        {
          title: { tr: "Gradio ile yerel lab prototipi sağlamak" },
          description: { tr: "Gradio arayüzü, yerel lab prototipini hızlı test edilebilir hale getirir." }
        }
      ],
      limitations: [
        { tr: "VoxForge production-grade TTS platformu değildir." },
        { tr: "Gerçek zamanlı voice changer kapsam dışıdır." },
        { tr: "Ses kalitesi referans sesin kalitesine, model davranışına ve ayarlara bağlıdır." },
        { tr: "Fine-tuning değerlendirmeleri deneysel kabul edilir." },
        { tr: "Proje, izinli veri ve yerel çalışma prensibi dışında pazarlanmaz." }
      ],
      plannedExtensions: [
        { tr: "Yerel arayüz ekran görüntülerinin ArtifactHub’a eklenmesi" },
        { tr: "Voice profile akışını diyagramlaştırma" },
        { tr: "Kalite raporu örneklerini daha okunabilir sunma" },
        { tr: "Etik kullanım sınırlarını sayfada net görselleştirme" },
        { tr: "İngilizce teknik metin versiyonunu ileride hazırlama" }
      ],
      ethicalNotes: [
        { tr: "VoxForge yalnızca kullanıcının kendi sesi veya açık izinli referans seslerle çalışacak şekilde konumlandırılır." },
        {
          tr: "İzinsiz ses taklidi, üçüncü kişilerin sesini çoğaltma veya public voice cloning servisi iddiası taşımaz."
        },
        {
          tr: "Ses kayıtları, profiller, datasetler, checkpointler, çıktılar ve raporlar yerel çalışma düzeninin parçası olarak ele alınır."
        },
        {
          tr: "ArtifactHub üzerinde proje, üretim servisi değil; local-first deneysel audio lab olarak sunulur."
        }
      ],
      visualNotes: {
        tr: "Koyu mor, amber, mühürlü ses kristali, waveform halkaları ve küçük consent/kilit sembolü."
      }
    },
    riskProfile: {
      requiresEthicalNotes: true,
      dataSensitivity: "voice",
      publicClaimBoundary: {
        tr: "Public voice cloning servisi değil; izinli veriyle yerel çalışan deneysel audio lab prototipi."
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
      tr: "Kamera girdisini yüz/el algılama, yerel doğrulama ve gesture komutlarıyla etkileşimli büyü arayüzüne dönüştüren computer vision prototipi."
    },
    positioning: {
      tr: "Camera-to-interaction ve gesture tabanlı arayüz tarafını temsil eden Forge artifact’i."
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
      input: { tr: "Kamera görüntüsü, yüz/el verisi ve lonca mührü" },
      process: { tr: "Yüz algılama, yerel doğrulama, gesture çözümleme ve yetki kontrolü" },
      output: { tr: "Büyü komutu, UI aksiyonu ve demo/sistem geri bildirimi" },
      compact: {
        tr: "Kamera görüntüsü → algılama/doğrulama/gesture mapping → büyü komutu ve UI aksiyonu"
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
          tr: "VisionForge, canlı kamera girdisini algılama ve etkileşim katmanlarından geçirerek oyunlaştırılmış bir büyü arayüzüne dönüştürür. Sistem; yüz varlığı, yerel yüz tanıma, QR/lonca mührü doğrulaması, el landmark verisi ve gesture mapping akışlarını bir araya getirir.\n\nArtifactHub içinde VisionForge’ün rolü, computer vision çıktılarının yalnızca tespit sonucu olarak kalmayıp kullanıcı arayüzü ve etkileşim sistemine nasıl bağlanabileceğini göstermektir."
        }
      },
      currentScope: {
        body: {
          tr: "Mevcut kapsamda canlı kamera akışı, yüz algılama, yerel yüz tanıma, QR/lonca mührü doğrulama, el landmark algılama, büyü komutları, yetkiye göre kilitli/açık komut mantığı, Trial Mode, demo rehberi ve sistem durumu panelleri bulunur.\n\nProje profesyonel güvenlik sistemi olarak sunulmaz. Ana kapsam, local-first çalışan ve portfolyoda gösterilebilir bir computer vision interaction prototipi oluşturmaktır."
        }
      },
      designDecisions: [
        {
          title: { tr: "CV çıktısını UI event sistemine bağlamak" },
          description: {
            tr: "Computer vision çıktıları doğrudan UI efekti olarak değil, event ve interaction sisteminin girdisi olarak ele alınır."
          }
        },
        {
          title: { tr: "Authentication temasını güvenlik iddiasına dönüştürmemek" },
          description: {
            tr: "Yerel yüz tanıma ve lonca mührü teması, projeye authentication hissi verir; ancak bu profesyonel güvenlik iddiasına dönüştürülmez."
          }
        },
        {
          title: { tr: "Gesture-to-spell mapping kullanmak" },
          description: {
            tr: "Gesture-to-spell mapping, el landmark verisini daha anlaşılır ve gösterilebilir bir etkileşim metaforuna bağlar."
          }
        },
        {
          title: { tr: "Trial Mode ve demo rehberi eklemek" },
          description: {
            tr: "Trial Mode ve demo rehberi, projeyi portfolyo gösterimine uygun hale getirir; kullanıcı neye bakacağını uygulama içinde daha hızlı anlar."
          }
        },
        {
          title: { tr: "Sistem durumu panelleriyle algılama katmanını görünür yapmak" },
          description: {
            tr: "Sistem durumu ve tanılama panelleri, prototipin yalnızca görsel efekt olmadığını; çalışan algılama katmanlarına dayandığını gösterir."
          }
        }
      ],
      limitations: [
        { tr: "Algılama doğruluğu ışık, kamera kalitesi, açı ve ortam koşullarına bağlıdır." },
        { tr: "LBPH tabanlı yerel yüz tanıma modern production-grade güvenlik sistemleriyle eşdeğer değildir." },
        { tr: "QR/lonca mührü doğrulama prototip ve tema katmanıdır." },
        { tr: "Proje güvenlik ürünü değil, local-first etkileşimli CV prototipidir." },
        {
          tr: "Kamera erişimi ArtifactHub içinde canlı demo olarak kullanılmayacak; proje kendi repo ve görselleriyle sunulacak."
        }
      ],
      plannedExtensions: [
        { tr: "Detection UI görsellerini ArtifactHub’a ekleme" },
        { tr: "Camera-to-spell akışını diyagramlaştırma" },
        { tr: "Trial Mode ekranını teknik dosyada öne çıkarma" },
        { tr: "Sistem durumu panel çıktılarından örnek görsel hazırlama" },
        { tr: "Gesture mapping sistemini daha açık belgelemek" }
      ],
      ethicalNotes: [
        { tr: "VisionForge profesyonel güvenlik sistemi veya biyometrik doğrulama ürünü olarak sunulmaz." },
        { tr: "Yerel yüz tanıma ve doğrulama katmanları, portfolyo prototipi bağlamında değerlendirilir." },
        { tr: "Biyometrik iddia şişirilmeyecek; proje computer vision interaction sistemi olarak konumlandırılacak." },
        { tr: "Yüz ve kamera verisiyle ilgili kullanım dili kontrollü tutulacak." }
      ],
      visualNotes: {
        tr: "Obsidian zemin, yeşil/amber/mistik mavi vurgu, lens, detection frame, lonca mührü ve el landmark çizgileri."
      }
    },
    riskProfile: {
      requiresEthicalNotes: true,
      dataSensitivity: "biometric-adjacent",
      publicClaimBoundary: {
        tr: "Profesyonel güvenlik veya biyometrik doğrulama ürünü değil; local-first etkileşimli computer vision prototipi."
      }
    }
  }
];
