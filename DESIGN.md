---
name: ArtifactHub
description: Baglare's project shelf as a night-observatory astrolabe, with deep ink ground, pewter instrument, a soft steel-blue accent and sea-green for growing work.
colors:
  ink: "#0b0e13"
  ink-raised: "#11151c"
  ink-high: "#171c25"
  rim: "#262d39"
  accent: "#93acd3"
  accent-deep: "#3f4f6b"
  accent-bright: "#d3dff1"
  growth: "#6fb3a0"
  growth-dim: "#4a7d70"
  fg: "#e6e8ec"
  fg-soft: "#a6aebb"
  fg-muted: "#737c8b"
  hairline: "rgba(160, 176, 204, 0.1)"
  hairline-strong: "rgba(160, 176, 204, 0.2)"
typography:
  display:
    fontFamily: "Marcellus, ui-serif, Georgia, serif"
    fontSize: "clamp(3.1rem, 6vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Marcellus, ui-serif, Georgia, serif"
    fontSize: "2.6rem"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Marcellus, ui-serif, Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Alegreya Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"onum\""
  label:
    fontFamily: "Marcellus, ui-serif, Georgia, serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.16em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "6px"
  panel: "12px"
  plate: "14px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "40px"
  section: "56px"
  gutter: "16px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-bright}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-secondary-hover:
    textColor: "{colors.accent-bright}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg-soft}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  status-badge:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  status-badge-subtle:
    backgroundColor: "transparent"
    textColor: "{colors.fg-soft}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  maturity-ring:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    height: "1.55em"
  maturity-ring-live:
    textColor: "{colors.accent-bright}"
  maturity-ring-growing:
    textColor: "{colors.growth}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.fg-soft}"
    rounded: "{rounded.sm}"
  plate:
    backgroundColor: "{colors.ink-raised}"
    rounded: "{rounded.plate}"
  readout:
    backgroundColor: "{colors.ink-high}"
    rounded: "{rounded.panel}"
    padding: "20px 24px"
  nav-link:
    textColor: "{colors.fg-soft}"
    padding: "8px 12px"
  nav-link-active:
    textColor: "{colors.accent-bright}"
  locale-toggle-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
  ledger-row:
    textColor: "{colors.fg}"
    padding: "20px 12px"
  theme-medallion:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: "48px"
---

# Design System: ArtifactHub

## Overview

**Creative North Star: "The Night Observatory"** (revised 2026-11-25: the brass/yellow palette was retired as tiring to read)

The whole body of work is one instrument, now in pewter on a deep ink ground. A soft steel-blue accent marks interaction and mature work; sea-green marks work that is still growing. Text is a calm off-white, so the instrument and the work lead and the chrome stays back.

Density is calm. Panels are few, with one border each (no nested inner rims), generous padding and wide section spacing. Most structure comes from engraved hairlines, inventory numbers (`AH·01`) and a single ledger, not from stacked cards. Motion is slow and damped, like a heavy rete turning on a pin. Nothing bounces, nothing glows.

This world replaces an earlier dark-glass/aurora look. It refuses frosted glass, neon gradients, gradient text and glow halos. Legacy class names (`.glass`, `.text-gradient`) survive only so older routes inherit the new engraved treatment.

**Key Characteristics:**
- Obsidian ground with one warm radial brass wash at the top of the page.
- Brass is the only accent of the shell; verdigris appears only to mean "still growing".
- Engraved hairlines and double rules everywhere a border or divider is needed.
- Marcellus inscriptions for display and scale labels; Alegreya Sans for reading.
- Maturity is always shown honestly as the astrolabe's Roman ring numerals I–IV, on the instrument and in every status badge.
- Each project keeps its own accent theme, but it shows only inside that project's own scope (its detail page, its ledger row's hover). The shared shell and home cards stay brass.

## Colors

A low-key metal-on-stone palette: near-black obsidian, three brass tones, two verdigris tones and three parchment inks.

### Primary
- **Engraved Brass** (brass): The one accent. Primary buttons, active nav underline, ring lines, the ring numeral for level III, the featured pill and role line on project heroes, theme medallions outside a project's own page, and the text selection colour.
- **Polished Brass** (brass-bright): The highlight. Active nav text, hover state of buttons and links, the readout's project title, the ring numeral for level IV, the brand line of the home heading, focus outlines.
- **Shadowed Brass** (brass-deep): Brass in shade. Scrollbar thumb and decorative shadow edges only; never text (3.2:1 on obsidian).

### Secondary
- **Verdigris Patina** (verdigris): Work still growing. Ring numerals I and II in status badges, and level-II pointers on the astrolabe.
- **Deep Patina** (verdigris-dim): The earliest work. Level-I pointer fills on the astrolabe. Too dark for small text (3.3:1).

### Neutral
- **Obsidian** (obsidian): Page ground, `theme-color`, scrollbar track, label halos on the astrolabe.
- **Raised Obsidian** (obsidian-raised): Plate and soft panel fills.
- **High Obsidian** (obsidian-high): Top of plate and readout gradients.
- **Rim Bronze** (rim): The solid theme border for project scopes.
- **Parchment** (parchment): Primary text (15:1).
- **Faded Parchment** (parchment-soft): Secondary text, summaries, inactive nav (8.7:1).
- **Old Parchment** (parchment-muted): Muted text, inscriptions, inventory numbers (4.9:1). This is the floor for readable text.
- **Hairline / Strong Hairline** (hairline, hairline-strong): Brass at 14% and 30% opacity. Every border, divider and chip outline.

### Per-project accent themes
Each project has a theme in `src/data/themes.ts` (Relic Core, Neon Blade Relic, Archive Terminal, Relic Forge and others). Inside a project's own scope (its detail page, and the hover tint, rule and arrow of its ledger row) the `--theme-*` variables are swapped for that theme, so `--theme-accent-primary` becomes the project's own colour. Everywhere else, including home and series cards, theme medallions and hero pills, the variables fall back to brass on obsidian. Relic Core is the default theme and matches the world palette exactly.

### Named Rules
**The Patina Rule.** Verdigris means "still growing" and nothing else. Mature work is brass; early work is verdigris. Never use verdigris as decoration.

**The One Metal Rule.** The shell has one accent, brass. Other hues enter only through a project's own theme, inside that project's own scope. Cards that list many projects stay brass.

**The Legible Ink Rule.** Readable text uses parchment, parchment-soft, parchment-muted, brass or brass-bright. brass-deep and verdigris-dim are fills, not ink.

## Typography

**Display Font:** Marcellus (with ui-serif, Georgia)
**Body Font:** Alegreya Sans (with ui-sans-serif, system-ui)
**Data Font:** JetBrains Mono (with ui-monospace)

**Character:** Marcellus is an engraved Roman capital face, the voice of the instrument's inscriptions and headings. Alegreya Sans is a humanist sans with old-style figures, warm enough to sit next to it for long reading.

### Hierarchy
- **Display** (400, 3.1rem mobile to 5.4rem desktop, line-height 1, -0.02em): The home heading and page titles only.
- **Headline** (400, 2rem mobile to 2.6rem, line-height 1.08, -0.012em): Section headings (h2).
- **Title** (400, 1.4rem to 1.75rem, line-height ~1.25): Project names in the ledger and the readout.
- **Body** (400, 17px, line-height 1.6, old-style numerals): Reading text. Long text is capped at max-w-xl to max-w-3xl (about 36–48rem).
- **Label / Inscription** (Marcellus 400, 10–12px, letter-spacing 0.14–0.16em, uppercase): Inventory numbers, ring numerals (0.72rem, 0.08em inside the badge ring), the wordmark's "Baglare's" line, field labels inside panels, footer small print.
- **Data** (JetBrains Mono, 10–11.5px): Step numbers and code-like values only.

### Named Rules
**The Single Weight Rule.** Marcellus ships one weight (400). Headings never get a bold, and `font-synthesis: none` stays on so the browser can't fake one. Emphasis in display text comes from colour (brass-bright), not weight.

**The Figures Rule.** Running text uses old-style figures; tables and stats (`.tabular`) switch to tabular lining figures.

**The Inscription Rule.** Uppercase tracked Marcellus is for inscriptions: numbers, scale labels and field labels inside a panel. It never sits above a section heading as a kicker.

## Layout

The page uses one centred column: `max-w-6xl` (72rem) for content and `max-w-7xl` for the header, with side gutters of 16px, 24px from 640px and 32px from 1024px. Sections breathe on a 40px / 56px vertical rhythm (`py-10 sm:py-14`). Inside, spacing follows Tailwind's 4px scale, most often 8, 12, 16 and 20px gaps.

The home hero is an asymmetric two-column grid from 1024px (about 0.85fr intro, 1.15fr instrument). The astrolabe is capped at 660px and the readout plate sits under it. Below 1024px the intro stacks above a full-width astrolabe. Below 640px the pointer labels on the astrolabe are hidden; the readout carries names instead.

The inventory ledger is a numbered list, not a card grid: a 5-column row on desktop (number, title, summary, status, arrow) that collapses to 2 columns on mobile. Breakpoints are Tailwind defaults: 640, 768 and 1024px. The body never goes below 320px wide.

## Elevation & Depth

Depth is engraved, not lifted. Surfaces are flat obsidian that reads as set into the instrument: a 1px brass hairline rim plus an inner inset ring 4–5px inside it, with one long, soft dark shadow under the plate. The only real cast shadows are inside the astrolabe SVG, where the rete and alidade sit above the plate. Hover adds 3px of lift and warms the rim to the theme accent. There is no glass, no blur on surfaces and no coloured glow.

### Shadow Vocabulary
- **Plate rim** (`inset 0 0 0 4px var(--obsidian-raised), inset 0 0 0 5px var(--hairline), 0 18px 40px -24px rgba(0,0,0,0.9)`): The engraved plate: main panels and CTA blocks.
- **Plate rim, raised** (`inset 0 0 0 4px var(--obsidian-raised), inset 0 0 0 5px <accent 30%>, 0 28px 50px -26px rgba(0,0,0,0.95)`): Hover state of interactive plates.
- **Pressed plate** (`0 8px 18px -10px rgba(0,0,0,0.9)`): Under the primary button only. It is a dark cast shadow, not a coloured glow.
- **Medallion ring** (`inset 0 0 0 3px var(--obsidian), inset 0 0 0 4px <accent 22%>`): Inner ring of the round theme symbol.
- **Instrument shadow** (SVG `feDropShadow dy 7, blur 6, #000 at 65%`): Rete and alidade over the plate only.

### Named Rules
**The Engraved Not Lit Rule.** Depth comes from double rims and dark drop shadows. Brass never glows: no coloured box-shadows, no halos, no backdrop blur.

## Shapes

Corners are small and machined. Inscribed elements (badges, chips, toggle segments) use 4px, buttons 6px, panels 12px and the main plate 14px. Round forms are kept for things that are round on a real instrument: the astrolabe, the theme medallion and step numerals. Borders are always 1px hairlines; dividers are a 3px double rule (strong hairline on top, faint hairline below). The list bullet is a small rotated square outlined in brass, and the arrow and external-link glyphs are thin 1.4px stroke drawings.

## Components

### Buttons
Solid and machined, with a slow, heavy response.
- **Shape:** gently squared (6px), 1px border, 12px × 20px padding, 15px medium Alegreya Sans.
- **Primary:** brass fill, obsidian text, brass border, and the dark pressed-plate shadow underneath.
- **Hover / Focus:** lifts 2px and turns brass-bright over 500ms on the world easing. Focus shows a 1.5px brass-bright outline 3px out.
- **Secondary:** transparent with a strong hairline border and parchment text; on hover the border turns brass and the text brass-bright.
- **Ghost:** no border, parchment-soft text that turns brass-bright on hover.
- **External links** get a small diagonal arrow that nudges up and right on hover.

### Status badge and maturity ring
- **Style:** transparent, 1px hairline border (strong for default, faint for subtle), 4px corners, 13px text.
- **Ring mark:** before the label sits the astrolabe ring the project lives on, as a Roman numeral (I–IV) in Marcellus 0.72rem inside a pill-shaped ring drawn in currentColor (1.55em tall, at least 1.9em wide). IV is brass-bright, III brass, and I–II verdigris. The badge and the instrument use the same notation.

### Chips
- **Style:** transparent, strong hairline border, 4px corners, parchment-soft text. No filled or coloured chips.

### Plates / Containers
- **Corner Style:** 14px (main plate), 12px (soft panel, readout).
- **Background:** a vertical gradient from obsidian-high to obsidian-raised.
- **Shadow Strategy:** plate rim (see Elevation & Depth).
- **Border:** 1px strong hairline. The engraved double rule along the top edge (inset 18px) is reserved for single feature plates such as the readout and the closing CTA. Repeated cards in a grid don't carry it.
- **Internal Padding:** 20–24px for readouts, 32–48px for feature plates.

### Navigation
- **Header:** sticky and transparent at the top; after 12px of scroll it gets a 94% obsidian fill and a strong hairline bottom border. The brand mark turns 24° on hover.
- **Links:** 15px Alegreya Sans, parchment-soft. A 1px brass underline grows from the left on hover. The active link is brass-bright with the underline drawn.
- **Locale toggle:** a hairline-bordered pair of TR/EN inscriptions; the active one is filled brass with obsidian text.
- **Mobile:** a 40px square hairline button with two lines that cross into an X; the menu opens as a full-width list with 18px links.
- **Footer:** a double-rule divider, the wordmark with tagline in brass, links with an engraved underline that draws on hover, and a small inscription line.

### The Astrolabe (signature)
An SVG instrument: a brass limb engraved with a 360° degree scale numbered every 10°, an obsidian plate with hour lines and four maturity rings (IV nearest the centre pin, I at the edge), an openwork brass rete carrying one pointer per project, and an alidade sighting rule. Pointer size and fill follow maturity (brass-bright, brass, verdigris, deep patina). The rete drifts slowly (2.2°/s), can be dragged or turned with the arrow keys, and slows down with damped inertia. Hovering or focusing a pointer stops the drift and swings the alidade to it with a spring. With nothing selected, the alidade rests on the most mature project. The readout plate below always names a project: the title in brass-bright, then the status badge, then the inventory number and category as a muted inline note. Below that come the summary, an engraved link, and the orbit hint as a muted footer line under a hairline. Touch takes two taps: the first reads, the second opens. With reduced motion the drift stops and the alidade jumps.

### Inventory Ledger (signature)
One engraved line per project, numbered `AH·01`, `AH·02`… to match the astrolabe. Hover or focus tints the row with 6% of the project accent, draws a 1px accent rule from left to right over 700ms and slides the arrow 6px. The same ledger form is used for other lists of facts: the technical focus map is a definition list with one engraved row per focus area (Marcellus 1.35rem term, description, then brass engraved links to projects), not a card grid.

### Theme Medallion
A round obsidian medallion with a rim and an inner hairline ring in `--theme-accent-primary`. A thin line glyph (1.6px stroke) sits inside. On home, series and listing surfaces it reads brass; it takes the project's own hue only inside that project's detail page. Sizes are 40, 48 and 64px.

## Do's and Don'ts

### Do:
- **Do** keep the shell to brass on obsidian, and let a project's own theme colour only its own scope.
- **Do** show maturity honestly with the I–IV ring numerals, the same on the instrument and in badges; mature work goes nearest the centre.
- **Do** lay out lists of projects or facts as engraved ledger rows before reaching for cards.
- **Do** draw borders and dividers as brass hairlines (14% / 30%), and use the 3px double rule for section breaks.
- **Do** use the world easing `cubic-bezier(0.16, 1, 0.3, 1)` with slow durations (300–700ms, 1s for entrances), and respect reduced motion.
- **Do** set headings in Marcellus 400 and give them emphasis with brass-bright, not weight.
- **Do** keep readable text at parchment-muted (4.9:1) or brighter.

### Don't:
- **Don't** use frosted glass, backdrop blur, gradient text, neon or aurora gradients, or glow halos. This world replaced that look.
- **Don't** use verdigris for anything other than growing or early work.
- **Don't** tint shared surfaces (home and series cards, hero pills) with a project's theme hue; that hue belongs on the project's own page.
- **Don't** fake a bold Marcellus or put a tracked uppercase kicker above a section heading.
- **Don't** make bouncy or springy-overshoot motion. The instrument turns heavily and settles.
- **Don't** replace the ledger or astrolabe with a card-grid hero.
- **Don't** set small text in brass-deep or verdigris-dim.
