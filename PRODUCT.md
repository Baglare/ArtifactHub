# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Mixed audience (confirmed 2026-11-20): employers/internship reviewers who arrive from a CV link and must grasp in seconds what the author can build, plus curious developers from GitHub/LinkedIn who want to dig into how each project works.

## Product Purpose

ArtifactHub is Batuhan Parıltı's personal project shelf: one place that shows every project (games, audio/vision tools, local-first apps, ML experiments), what stage it is honestly at, how it works and where it still falls short. Success: a first-time visitor is impressed in the first viewport and steps into at least one project.

## Positioning

Honesty about maturity is the mechanism: every project carries a status and maturity level (1 early … 4 live/released) from the registry, and the home page visualises the whole body of work by that maturity (mature work near the core, early work on the edge). Capabilities vs. limitations vs. planned extensions are kept separate and source-backed.

## Operating Context

Static Next.js export hosted on TurkHosting (Plesk) at a subdomain (default artifacthub.baglare.com.tr). TR/EN locale toggle; Turkish is primary.

## Capabilities and Constraints

- Content lives in registries under `src/data/**` (artifacts, series, categories, themes, statuses, focus areas, page text); route components must not duplicate it.
- TR/EN localized-text fallback contract must hold for all reusable content.
- Static export only (no server runtime). Routes: home, /artifacts, /artifacts/[slug], /series/[slug], /about, /roadmap.
- Private repos get no repo link; team projects name no other people.

## Brand Commitments

- Keep the maturity-orbit idea (projects arranged by maturity around a core); its form may change. (user, 2026-11-20)
- Keep first-person, casual, non-"AI-written" copy, including the "Merhaba, ben Batuhan Parıltı." intro. (user, 2026-11-20)
- Turkish mode must not show English headings.

## Evidence on Hand

Registry text for 14 projects, statuses, focus areas, tech stacks. Real images: MediaTracker live-build screenshot, Petglare brand banner, the author's portrait (hero). Other projects get generated theme covers, never fabricated screenshots. In-browser mini demos for PulseForge, TempoBlade and AgentVerse, each labelled as a small web take on the real project.

## Product Principles

1. Show real stage, never pretend something is finished.
2. The work leads; chrome recedes.
3. Fast first impression, deep second look.
