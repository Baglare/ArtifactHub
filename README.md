# Baglare’s ArtifactHub

ArtifactHub, Baglare’ın yazılım projelerini — geliştirici araçları, AI ve ses sistemleri, oyunlar, local-first ürünler ve bilgisayarlı görü çalışmaları — kapsamı, mimarisi, kararları ve sınırlarıyla kayda alan teknik portföydür.

Hedef yayın: **https://artifacthub.baglare.com.tr** (TurkHosting · Plesk alt alan adı, statik site).

## Projeler (14)

Öne çıkanlar: **MediaTracker**, **VoxForge**, **Butterfly Effect**, **GameLocalizer**, **AgentVerse**.

Diğerleri: PulseForge, Kıyafet Kategorilendirme, TempoBlade, VisionForge, Aria AI, OpenAI Image Studio, Petglare, PoD Localization Engineering, DersOyun.

Ana sayfadaki yörünge, her proje için bir nokta çizer. Noktanın yörüngesi ve görünümü durumun `maturity` değerinden gelir (`src/data/statuses.ts`: 4 canlı/yayında → merkeze en yakın, 1 erken aşama → en dış). Yeni proje eklendiğinde nokta kendiliğinden belirir.

Tüm içerik `src/data/` altındaki registry dosyalarından okunur (`artifacts.ts`, `themes.ts`, `statuses.ts`, `categories.ts`, `focusAreas.ts`, `series.ts`). Yeni proje eklemek için yalnız registry’ye kayıt eklemek yeterlidir; öne çıkarmak için `featuredLevel: "primary"`, sıralama için `order` kullanılır.

## Görseller, fotoğraf ve mini demolar

**Proje görseli eklemek:** dosyayı `public/images/artifacts/<slug>/` altına koy (webp önerilir), sonra `src/data/artifacts.ts` içindeki kayda `media` ekle:

```ts
media: [
  { type: "image", src: "/images/artifacts/<slug>/ekran.webp", alt: { tr: "…", en: "…" }, caption: { tr: "…" }, cover: true, focus: "50% 20%", kind: "screenshot" }
]
```

`cover: true` olan (yoksa ilk) görsel kartta ve proje sayfasının üstünde kapak olur; birden fazla görsel ya da açıklama varsa proje sayfasında galeri açılır. Görseli olmayan projelere kendi tema renkleriyle soyut bir kapak çizilir (sahte ekran görüntüsü değildir). Şu an gerçek görseller: MediaTracker (canlı sürümden ekran görüntüsü), Petglare (README banner'ı).

**Fotoğraf:** ana sayfadaki portre `src/data/siteConfig.ts` → `profile.portrait`. Değiştirmek için arka planı koyu/şeffaf bir görseli `public/images/profile/` altına koyup yolu güncelle.

**Mini demolar:** `src/components/demos/` altında, yalnız ilgili proje sayfasında yüklenir. Yeni demo için bileşeni yaz, `registry.tsx` içine kaydet, `DemoId` tipine ekle ve projenin kaydına `demo: { id, note }` ver. Mevcutlar: PulseForge (şarkıdan ritim oyunu; dosya tarayıcıda işlenir), TempoBlade (vuruşta savuşturma), AgentVerse (Q-learning ızgara ajanı).

## Teknoloji

- Next.js 16 (App Router, statik export)
- TypeScript, Tailwind CSS
- TR/EN yerelleştirme, veri odaklı registry

## Yerel geliştirme

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # statik çıktı: out/
npm run preview    # out/ klasörünü http://localhost:4173 üzerinde sunar
```

## TurkHosting’e yayınlama (Plesk)

Site tamamen statik HTML olarak derlenir; sunucuda Node.js gerekmez.

1. Plesk → **Websites & Domains** → **Add Subdomain**: ad `artifacthub`, ana alan `baglare.com.tr`. Plesk belge kökünü önerir (ör. `artifacthub.baglare.com.tr/`); DNS kaydı Plesk DNS’i kullanılıyorsa otomatik oluşur.
2. Alt alan adında **SSL/TLS Certificates** → Let’s Encrypt sertifikası al.
3. Paketi üret (varsayılan adres `https://artifacthub.baglare.com.tr`; canonical, sitemap ve Open Graph buna göre üretilir):
   ```bash
   npm run package
   ```
   Başka bir adres için: `$env:NEXT_PUBLIC_SITE_URL = "https://baska.baglare.com.tr"; npm run package`
4. **File Manager** → alt alan adının belge kökü. Varsayılan `index.html` dosyasını sil, `dist/artifacthub-site.zip` dosyasını yükle ve **Extract** ile aç. `index.html`, `_next/`, `artifacts/` ve `.htaccess` doğrudan belge kökünde olmalıdır.
5. SSL açıkken Plesk’in “HTTP → HTTPS 301” seçeneği açıksa `.htaccess` içindeki HTTPS kuralı zararsızdır, gerekirse silinebilir.
6. Kontrol: ana sayfa, `/artifacts/voxforge/`, var olmayan bir adres (404 sayfası) ve `/sitemap.xml`.

`.htaccess`; klasör tabanlı temiz URL’ler, 404 sayfası, gzip ve hash’li varlıklar için uzun süreli önbellek ayarlarını içerir. Güncelleme için aynı paketi yeniden üretip yüklemek yeterlidir.

## Kapsam

Site CMS, backend, kimlik doğrulama veya canlı kamera/ses demosu içermez; mini demolar tamamen tarayıcıda çalışır ve hiçbir veriyi bir yere göndermez. Özel depolardaki projeler kaynak bağlantısı verilmeden, yalnız doğrulanabilir kapsam ve sınırlarıyla anlatılır; hiçbir ses örneği veya hassas veri yayımlanmaz.
