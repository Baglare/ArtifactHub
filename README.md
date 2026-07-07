# Baglare’s ArtifactHub

ArtifactHub, Baglare’ın oyun sistemleri, local-first uygulamalar, ses işleme, TTS ve bilgisayarlı görü prototiplerini kapsamı, sistem akışı, kararları ve sınırlarıyla kayda alan teknik artifact arşividir.

Live: https://artifact-hub-xi.vercel.app/

## Current Artifact Set

- TempoBlade
- MediaTracker
- PulseForge
- VoxForge
- VisionForge

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Data-driven registry

## Local Development

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Deployment

İlk yayın hedefi Vercel’dir. Proje standart Next.js build akışı ile hazırlanır; ilk sürüm için custom domain, Vercel CLI zorunluluğu veya ek workflow tanımı yoktur.

## Scope

İlk public sürüm CMS, backend, auth, video/demo sistemi veya canlı kamera/ses demosu içermez. ArtifactHub merkezi registry üzerinden genişleyen teknik bir arşiv olarak tutulur.
