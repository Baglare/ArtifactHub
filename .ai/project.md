---
{"critical_rules":[{"id":"locale-fallback-contract","kind":"invariant","scope":"src/components/i18n/**","severity":"error","statement":"Preserve the existing TR/EN locale and localized text fallback contract across reusable content."},{"id":"registry-source-of-truth","kind":"invariant","scope":"src/data/**","severity":"error","statement":"Keep artifact/series/category/theme/status/focus content in existing registries with valid unique IDs/slugs and foreign references; do not duplicate content in route components."},{"id":"source-backed-public-claims","kind":"invariant","scope":"src/data/**","severity":"error","statement":"Preserve source-backed capability/limitation statements and distinguish planned extensions from implemented behavior; keep sensitive voice/biometric data out of public assets."}],"manifest_version":1,"project_id":"artifacthub","project_name":"ArtifactHub","schema":"project-ai-manifest-v1"}
---
# Purpose

Data-driven Next.js technical artifact archive documenting five separate projects through scope, architecture, decisions, limitations and source evidence.

# Repository Map

- artifact-registry: src/data, src/types/artifact.ts, src/lib/artifacts.ts
- routing-metadata: src/app
- archive-filtering: src/components/artifacts, src/data/archiveFilters.ts
- forge-series: src/components/series, src/lib/series.ts, src/data/series.ts
- localization: src/components/i18n, src/lib/i18n.ts, src/data/uiText.ts, src/data/pageText.ts
- theme-presentation: src/components/layout, src/components/content, src/components/ui, src/components/visual, src/styles, src/lib/themes.ts, package.json

# Architecture

src/types/artifact.ts defines contracts; src/data registries own content and ID relationships; src/lib selectors/registry validation serve App Router pages; reusable src/components present localized themed content. Artifact and series dynamic routes share the registry. LocaleProvider and localized values provide TR/EN rendering.

# Validation Notes

npm run typecheck is the available targeted static check for executable changes. Registry relationships are checked by existing validateArtifactRegistry; no dedicated test script is currently declared. Full Next.js build, browser and deployment acceptance require separate authorization.

# Sensitive Areas

Preserve registry IDs/slugs/foreign references and localized text fallbacks. Claims about linked projects require current source evidence; biometric/voice data must not enter public assets.

# Non-goals

No CMS, account/auth backend or live camera/audio demo. This repository presents independent artifacts; it is not a source monorepo or proof of another project runtime acceptance.
