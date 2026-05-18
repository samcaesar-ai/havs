# HAVS — Design Audit & Language Brief

## Site Status

### Done
- Nav: fixed header, mobile hamburger, DA/EN language toggle, contact CTA
- Footer
- Home page: Hero, AudienceTriage (3 columns), ProcessSteps (4 steps), MaterialsGrid, PartnersWall, AboutSnippet, ContactBand
- Inner pages: Practice, Materials, Partners, About, Contact
- Contact form → Google Sheets
- Cal.com scheduling embed
- Scroll-reveal animations
- Bilingual routing (DA default, EN available)
- SEO meta, sitemap, robots.txt

### Missing (blocking launch)
- No real photography — portrait of David Hav is a placeholder div
- No partner logos — Södra etc. are text-only placeholders
- No favicon
- No OG/social preview images
- Default Next.js assets still in /public (globe.svg, file.svg, window.svg)

---

## Current Design Tokens

### Colors
| Name   | Hex     | Usage                  |
|--------|---------|------------------------|
| Paper  | #f7f4ee | Background             |
| Ink    | #101418 | Body text              |
| Orange | #d9531e | CTAs, primary accent   |
| Navy   | #1b3a57 | Pullquotes, selection  |
| Stone  | #a89f92 | Secondary text         |
| Birch  | #e8e2d6 | Borders, subtle fills  |

### Typography
- **Display:** Fraunces, weight 300, italic for quotes — fluid 3rem → 5.5rem
- **Body:** Inter, weight 400/500/600 — fluid 1rem → 1.125rem
- **Eyebrow:** uppercase, 0.6875rem, letter-spaced, Stone color

### Spacing
- Section padding: clamp(4rem, 10vw, 8rem)
- Max content width: 72rem (1152px)
- Nav height: 4rem

---

## What Makes It Look Generic

1. **Inter** is the most-used font on the web right now
2. **Fraunces + Inter** is a very common pairing — dozens of agencies use it
3. **Warm neutral backgrounds** (#f7f4ee range) are everywhere in 2024–2026 design
4. **No tactile reference to timber** — wood, grain, Nordic craft, natural material
5. **No graphic system** — the orange CTA floats without anything to anchor it
6. **Plain white nav** — no visual weight or surface character
7. **Rounded rectangle buttons** — no distinctive form language

---

## Design Direction Options

### A — Nordic Craft
Lean into handcraft and material warmth.

- Add a fine woodgrain SVG texture overlay on hero and section backgrounds
- Switch display font to **Cormorant Garamond** (more distinctive than Fraunces)
- Introduce a thin horizontal rule system using Birch color between sections
- Give the nav a dark Ink-colored background for weight
- Keep Orange CTA as-is
- Add a secondary green: **#2d4a2e** (forest) for material tags/labels

### B — Brutalist Nordic
Timber as engineering, not craft. Structural, direct, confident.

- Reduce palette to 3: Paper, Ink, Orange only
- Use a condensed bold display font (e.g. **DM Serif Display** or **Instrument Serif**)
- All section labels uppercase, no decorative serifs
- Thick borders and clear column grid lines visible
- Buttons: rectangular, no border-radius, heavy stroke
- Tone: precision over warmth

### C — Refined Material
Premium consultancy feel, photography-forward.

- Add CSS noise/grain texture via `filter` or SVG feTurbulence on backgrounds
- Introduce **forest green #2d4a2e** as second accent alongside Orange
- Wider letter-spacing on all eyebrows and labels
- Angled or diagonal section dividers instead of flat horizontal cuts
- Once photography arrives, let images do most of the visual work
- Keep Fraunces but increase weight to 400

---

## Immediate Priorities

1. **Photography** — the site cannot feel premium without real images
2. **Partner logos** — SVGs from Södra and other manufacturers
3. **Favicon** — cut from the HAVS wordmark
4. **Pick a direction** (A, B, or C) and implement the graphic differentiator
5. **OG image** — 1200×630px for social sharing
6. **Clean up** `/public` — remove default Next.js placeholder assets

---

## How to Feed This Back

Once you have chosen a direction, reply to Claude Code with:

> "Go with Direction [A/B/C]. Here are my modifications: [any changes]."

Claude Code will update the design tokens, fonts, and graphic system in `globals.css`, `tailwind.config`, and the relevant components.
