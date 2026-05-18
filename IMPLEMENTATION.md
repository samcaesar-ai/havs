# HAVS — Nordic Craft rebrand: implementation guide

The `public/prototypes/` folder contains finished HTML prototypes for all six pages. This guide maps every design decision to the corresponding file/component in the Next.js codebase so you can port it systematically.

---

## 1. Fonts

**File:** `app/fonts.ts`

Swap Fraunces for Cormorant Garamond. Both are available via `next/font/google`.

```ts
import { Cormorant_Garamond, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});
```

Then in `app/[locale]/layout.tsx`, add `cormorant.variable` to the `<html>` className alongside `inter.variable`.

---

## 2. Design tokens

**File:** `app/globals.css` — replace the `@theme inline` block with:

```css
@theme inline {
  /* Palette */
  --color-paper:    #f7f4ee;
  --color-surface:  #ffffff;
  --color-ink:      #101418;
  --color-forest:   #2c4a2e;
  --color-forest-l: #3d6640;
  --color-orange:   #d9531e;
  --color-orange-d: #bf4518;
  --color-stone:    #7a7168;
  --color-birch:    #e3ddd2;
  --color-nav-bg:   #131d12;
  --color-nav-fg:   #f3f0e8;

  /* Typography */
  --font-display: var(--font-cormorant);   /* was --font-fraunces */
  --font-sans:    var(--font-inter);
  --font-mono:    ui-monospace, 'JetBrains Mono', Menlo, monospace;

  /* Fluid type */
  --text-display:  clamp(3rem, 7vw, 5.5rem);
  --text-headline: clamp(1.875rem, 3.5vw, 3rem);
  --text-title:    clamp(1.25rem, 2vw, 1.875rem);

  /* Layout */
  --nav-height:       4.5rem;
  --spacing-section:  clamp(4rem, 10vw, 8rem);
  --spacing-gutter:   clamp(1rem, 4vw, 1.5rem);
  --width-content:    72rem;
  --radius-sm:        2px;
  --radius-md:        4px;
}
```

Key changes from current tokens:
- `--color-blue` removed → replaced by `--color-forest` / `--color-forest-l`
- `--color-stone` darkened: `#a89f92` → `#7a7168`
- `--color-birch` slightly darker: `#e8e2d6` → `#e3ddd2`
- `--nav-height` increased: `4rem` → `4.5rem`
- Two new nav tokens: `--color-nav-bg` (deep forest), `--color-nav-fg` (warm off-white)
- `--font-display` now points to `--font-cormorant`

---

## 3. Nav

**File:** `components/nav.tsx`

The nav flips from a light paper background to a deep forest dark background.

Key class changes:

| Current | New |
|---------|-----|
| `bg-paper border-birch` on `<header>` | `bg-nav-bg border-white/5` |
| `text-ink` on logo | `text-nav-fg` |
| `text-stone hover:text-ink` on links | `text-nav-fg/60 hover:text-nav-fg` |
| `border-orange text-orange hover:bg-orange hover:text-paper` on contact CTA | same — still works on dark bg |
| Mobile drawer: `bg-paper` | `bg-nav-bg` |
| Mobile drawer links: `text-ink` | `text-nav-fg/75 hover:text-nav-fg` |
| Mobile drawer contact link: `text-orange` | same |

The mobile drawer `<Link>` elements should also change their `border-b` from `border-birch` to `border-white/7`.

---

## 4. Hero

**File:** `components/hero.tsx`

The hero is a two-column CSS grid where the right column is a full-height grain/timber visual.

Layout:
```
grid-template-columns: 1fr minmax(280px, 44%)
min-height: calc(88vh - var(--nav-height))
```

Left column (content):
- Eyebrow in monospace uppercase, `text-forest`
- `<h1>` in `font-display`, `font-weight: 400`, `font-style: italic` for the second line (`<em>`)
- Subhead in `text-stone`
- Two CTAs: primary orange button + outline button

Right column (figure):
- Overflows to the viewport edge (full bleed right)
- Has a left-edge gradient fade: `linear-gradient(to right, var(--color-paper) 0%, transparent 12%)`
- Currently an SVG grain placeholder — swap for a real timber photograph when available

Responsive: below 768px, figure stacks above content at `aspect-ratio: 16/9`.

---

## 5. Services triage grid (`components/audience-triage.tsx`)

Three-column card grid with hairline `1px` gaps (the gap is the background showing through — `gap: 1px; background: birch`). Each card has:

- A small forest-tinted tag (`background: rgba(44,74,46,0.07); color: forest`)
- Display font h3
- Stone-colored body copy

Breakpoints: `→ 2-col at 1023px → 1-col at 599px`

---

## 6. Process steps (`components/process-steps.tsx`)

Four-column grid, `background: #f2ede4` (a slightly warmer variant of `--color-paper`).

Each step uses a CSS counter for the number (`01`, `02`, etc.) in orange mono. Top border is `2px solid birch`.

Breakpoints: `→ 2-col at 767px → 1-col at 479px`

---

## 7. Materials grid (`components/materials-grid.tsx`)

Three-column card grid. Each card:
- `aspect-ratio: 4/3` figure with `border-radius: var(--radius-md)`
- Eyebrow in forest
- Display font h3
- On hover: figure scales 1.04× with a 500ms ease

The grain SVG placeholders in the prototype should be replaced with real timber photography. Crop to `4:3`.

---

## 8. About snippet (`components/about-snippet.tsx`)

Asymmetric two-column grid: `5fr 7fr`. Left column is a portrait placeholder (`aspect-ratio: 3/4`).

Right column has:
- A pull-quote in italic display font with `border-left: 2px solid var(--color-orange)`
- Body copy in stone
- CTA button

The orange left-border blockquote is the **single decisive flourish** — don't replicate it elsewhere.

---

## 9. Partners wall (`components/partners-wall.tsx`)

Four-column hairline grid (same `gap: 1px` technique as triage). Background: `#f2ede4`.

One "featured" cell (Södra) spans 2 columns and uses a forest-tinted background. It includes a longer description and a link.

---

## 10. Eyebrow utility

The prototype uses a recurring `.eyebrow` style used on every section heading:

```css
font-family: var(--font-mono);
font-size: 0.6875rem;
letter-spacing: 0.13em;
text-transform: uppercase;
color: var(--color-forest);
```

Add this as a Tailwind component class in `globals.css`:

```css
@layer components {
  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--color-forest);
  }
}
```

---

## 11. Buttons

Two variants used throughout:

**Primary (orange):**
```
bg-orange text-white border border-orange hover:bg-orange-d hover:border-orange-d
padding: 0.75rem 1.5rem
font-size: 0.875rem font-weight: 500
border-radius: var(--radius-sm)  /* 2px — deliberately sharp */
```

**Outline:**
```
bg-transparent text-ink border border-birch hover:border-ink
same padding/size/radius as primary
```

---

## 12. Grain SVG placeholders → photography

The prototypes use inline SVG grain textures as honest placeholders. In production, replace each with a real `<Image>` using Next.js `next/image`:

| Placeholder location | Suggested photo |
|---------------------|-----------------|
| Hero right column | Timber construction site or CLT panel detail |
| Materials: CLT | CLT cross-section / factory |
| Materials: Glulam | Glulam beam close-up |
| Materials: Prefab | Prefab wall panel installation |
| About portrait | Portrait of David Hav |

All images should be desaturated slightly to stay within the warm paper palette. Avoid stock photography with visible brand logos.

---

## 13. Scroll reveal

**File:** `components/scroll-reveal.tsx` (already exists)

The prototype uses `IntersectionObserver` with a `translate-y` + `opacity` fade in. A `prefers-reduced-motion` media query disables the animation. The existing component likely already does this — verify it includes:

```css
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1 !important; transform: none !important; }
}
```

---

## 14. Page-by-page prototype map

| Page | Prototype file | App route |
|------|---------------|-----------|
| Homepage | `public/prototypes/havs-homepage.html` | `app/[locale]/page.tsx` |
| Practice | `public/prototypes/praksis.html` | `app/[locale]/praksis/page.tsx` |
| Materials | `public/prototypes/materialer.html` | `app/[locale]/materialer/page.tsx` |
| Partners | `public/prototypes/partnere.html` | `app/[locale]/partnere/page.tsx` |
| About | `public/prototypes/om.html` | `app/[locale]/om/page.tsx` |
| Contact | `public/prototypes/kontakt.html` | `app/[locale]/kontakt/page.tsx` |

---

## 15. Suggested implementation order

1. `fonts.ts` — swap font
2. `globals.css` — update all tokens
3. `nav.tsx` — dark nav
4. Homepage Hero section
5. Eyebrow utility + button variants
6. Triage / Services grid
7. Process steps
8. Materials grid (swap SVGs for real photos when ready)
9. About snippet
10. Partners wall
11. Inner pages (Praksis, Materialer, Om, Partnere, Kontakt)

Each step is independently deployable — you can preview the dark nav against the old hero immediately after step 3.
