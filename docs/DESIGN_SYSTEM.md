# uxintoax Design System

> This is the single source of truth for all visual and structural decisions on uxintoax.com.
> Every page, component, and layout element must follow these rules.
> When in doubt, check here first.

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Color Tokens](#color-tokens)
3. [Typography](#typography)
4. [Spacing Scale](#spacing-scale)
5. [Layout & Grid](#layout--grid)
6. [Components](#components)
7. [Page Anatomy](#page-anatomy)
8. [Do / Don't](#do--dont)

---

## Design Principles

**1. Information first.** Every pixel earns its place. If it doesn't help the user understand or act, remove it.

**2. Consistent, not uniform.** Pages differ in content but share tokens, spacing, and component patterns. A user should never feel lost switching pages.

**3. Cream palette, always.** No dark backgrounds except the footer and the dark CTA strip. No random grays. Use only the tokens defined below.

**4. JetBrains Mono for structure, Open Sans for reading.** Headings, labels, badges, metadata = Mono. Body paragraphs = Sans. No exceptions.

**5. One interaction color.** Royal Blue (`#1C3FBD`) is the only accent. It appears on: active states, links, badges, buttons, focus rings, and border highlights. No secondary accent colors.

---

## Color Tokens

All colors are defined as CSS custom properties in `Base.astro`. Reference them by name — never hardcode a hex.

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#FAFAF8` | Page background |
| `--white` | `#FFFFFF` | Card surfaces, elevated sections |
| `--surface` | `#F4F2EE` | Section backgrounds (alternating) |
| `--raised` | `#EDEAE3` | Inactive tags, table row hover, avatar backgrounds |
| `--border` | `#E8E4DC` | All borders — cards, dividers, inputs |
| `--accent` | `#1C3FBD` | Primary blue — buttons, active badges, links, focus |
| `--accent-deep` | `#1532A8` | Button hover state only |
| `--accent-2` | `#2D4FCA` | Gradient midpoint, badge hover |
| `--al` | `#EEF1FB` | Badge background (blue tint) |
| `--alb` | `#C5CFEE` | Badge border |
| `--text` | `#1A1A1A` | Primary text, headings |
| `--muted` | `#6B6870` | Secondary text, descriptions, placeholders |
| `--subtle` | `#9A969E` | Timestamps, meta, tertiary info |
| `--green-text` | `#15803D` | Remote badge text |
| `--green-bg` | `#ECFDF3` | Remote badge background |
| `--green-border` | `#BBF7D0` | Remote badge border |
| `--amber-text` | `#92400E` | Hybrid badge text |
| `--amber-bg` | `#FFFBEB` | Hybrid badge background |
| `--amber-border` | `#FDE68A` | Hybrid badge border |
| `--dark-bg` | `#1A1A1A` | Dark CTA strip background |
| `--footer-bg` | `#111111` | Footer background |

### ❌ Never use
- Any gray not in this list
- Inline hex values not listed here
- `opacity` to create color variants
- Any purple, teal, or orange outside the badge system

---

## Typography

### Font families

```css
--font-mono: 'JetBrains Mono', monospace;
--font-sans: 'Open Sans', sans-serif;
```

### Type scale

| Name | Tag | Size | Weight | Font | Usage |
|---|---|---|---|---|---|
| Display | h1 (hero) | `clamp(2rem,5vw,3.25rem)` | 700 | Mono | Hero headline only |
| Heading 1 | h1 (inner) | `2rem` | 700 | Mono | Page titles |
| Heading 2 | h2 | `1.625rem` | 700 | Mono | Section titles |
| Heading 3 | h3 | `1.25rem` | 700 | Mono | Subsection titles |
| Heading 4 | h4 | `0.9375rem` | 700 | Mono | Card titles, list item titles |
| Body Large | p | `1.0625rem` | 400 | Sans | Hero subtext |
| Body | p | `1rem` (16px) | 400 | Sans | Regular body text |
| Body Small | p | `0.9375rem` | 400 | Sans | Card descriptions |
| Caption | span | `0.8125rem` | 400 | Sans | Secondary descriptions |
| Meta | span | `0.78rem` | 400 | Mono | Timestamps, author, location |
| Label | span | `0.72rem` | 600 | Mono | Eyebrow labels (uppercase + tracked) |
| Badge | span | `0.65–0.72rem` | 600 | Mono | Pill badges |
| Tiny | span | `0.625rem` | 600 | Mono | Avatar initials, micro labels |

### Letter spacing rules

- **Eyebrow labels** (uppercase): `letter-spacing: 0.08em`
- **Headings H1–H2**: `letter-spacing: -0.03em`
- **Headings H3–H4**: `letter-spacing: -0.02em`
- **Badges**: `letter-spacing: 0.04–0.06em`
- **Body text**: no letter-spacing

### Line height rules

- **Headings**: `1.08–1.2`
- **Body text**: `1.65–1.75`
- **Captions/meta**: `1.5`

---

## Spacing Scale

Use only these values. Never use arbitrary pixel values.

| Token | Value | Common usage |
|---|---|---|
| `4px` | `4px` | Gap between micro elements |
| `6px` | `6px` | Badge padding vertical |
| `8px` | `8px` | Small gaps, icon-text spacing |
| `10px` | `10px` | Button inner padding (sm) |
| `12px` | `12px` | Card inner gap, icon margins |
| `14px` | `14px` | Nav link padding, badge horizontal |
| `16px` | `16px` | Card padding small |
| `20px` | `20px` | Card padding standard |
| `24px` | `24px` | Page horizontal padding (mobile) |
| `28px` | `28px` | Section inner top/bottom |
| `32px` | `32px` | Header margin-bottom |
| `40px` | `40px` | Section padding (compact) |
| `48px` | `48px` | Section internal spacing |
| `56px` | `56px` | Section gap |
| `64px` | `64px` | Section padding (standard) |
| `72px` | `72px` | Section padding (generous) |
| `80px` | `80px` | Page bottom padding |

### ❌ Never use
- `padding: 15px`, `margin: 7px`, or any off-scale value
- Mixed px/rem units for spacing (pick one per context; prefer px for layout, rem for type)

---

## Layout & Grid

### Container

Every section uses the same container:

```html
<div style="max-width:1200px; margin:0 auto; padding:0 24px;">
```

**This applies to:** Nav, all page sections, Footer. No exceptions.

### Section padding

| Context | Top | Bottom |
|---|---|---|
| Hero section | `72px` | `80px` |
| Standard section | `64px` | `64px` |
| Compact section | `48px` | `48px` |
| Page main (inner pages) | `40px` | `80px` |

### Section background rhythm (homepage)

Sections alternate between `--white` and `--surface (#FAFAF8)` to create visual separation without borders:

```
Nav        → #FAFAF8 (sticky, blur)
Ticker     → #FFFFFF
Hero       → #FFFFFF
Features   → #FAFAF8
Stats      → #FFFFFF
Trending   → #FAFAF8
Skills     → #FFFFFF
Dark CTA   → #1A1A1A
FAQ        → #FFFFFF
Subscribe  → #1A1A1A
Footer     → #111111
```

### Dividers

Between sections: always `border-bottom: 1px solid #E8E4DC` on the section, **not** `border-top` on the next.

### Grid patterns

| Layout | Columns | Gap |
|---|---|---|
| 2-col (hero split) | `1fr 420px` | `64px` |
| 2-col (equal) | `1fr 1fr` | `1px` (divider grid) |
| 3-col features | `repeat(3,1fr)` | `1px` |
| 4-col cards | `repeat(4,1fr)` | `1px` |
| Auto-fill cards | `repeat(auto-fill, minmax(300px,1fr))` | `12px` |

When using `gap:1px` with a divider grid, set `background: #E8E4DC` on the grid container and `background: #FFFFFF` (or `--surface`) on each child. This creates the 1px divider lines without actual borders.

---

## Components

### Button

Two variants only:

```
btn-primary  →  bg:#1C3FBD  text:#fff   border:#1532A8
btn-ghost    →  bg:transparent  text:#1A1A1A  border:#E8E4DC
```

**Sizes:**

| Size | Font | Padding |
|---|---|---|
| Large | `0.9375rem` | `12px 28px` |
| Medium | `0.875–0.9rem` | `10px 22–24px` |
| Small | `0.78–0.8rem` | `7–8px 16–20px` |
| XSmall | `0.73–0.75rem` | `5–6px 14–16px` |

**Always:**
- `border-radius: 8px` on large/medium, `6px` on small/xsmall
- `font-family: JetBrains Mono`
- `font-weight: 600`
- Hover: primary darkens to `#1532A8`, ghost fills to `#F4F2EE`
- No box-shadow on ghost buttons

### Pill / Badge

```
pill-accent   →  color:#1C3FBD  bg:#EEF1FB  border:#C5CFEE
pill-neutral  →  color:#6B6870  bg:#EDEAE3  border:#E8E4DC
pill-green    →  color:#15803D  bg:#ECFDF3  border:#BBF7D0
pill-amber    →  color:#92400E  bg:#FFFBEB  border:#FDE68A
```

**Always:** `border-radius: 20px`, `font-family: Mono`, `font-weight: 600`

**Sizes:** `font-size: 0.65–0.75rem`, `padding: 2–3px 8–12px`

**Category labels:** `text-transform: uppercase`, `letter-spacing: 0.04–0.06em`

### Card

```
bg: #FFFFFF
border: 1px solid #E8E4DC
border-radius: 10px
padding: 20–22px
transition: border-color 0.15s, box-shadow 0.15s
```

**Hover state:**
```
border-color: #C5CFEE
box-shadow: none (no shadow on standard cards)
```

**Never:** `border-radius > 12px` on cards, `box-shadow` by default, background colors other than `#FFFFFF` or `#F4F2EE`

### Avatar / Company Logo

```
width: 36–40px
height: 36–40px
background: #EEF1FB
border: 1px solid #C5CFEE
border-radius: 8–9px
font: JetBrains Mono, 0.62–0.7rem, weight 700
color: #1C3FBD
content: first 2 letters of company name, uppercase
```

### Section header pattern

Every section uses this exact structure:

```html
<!-- Eyebrow -->
<p style="font-family:Mono; font-size:0.72rem; font-weight:600; color:#9A969E; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8–10px;">
  Category label
</p>
<!-- Title -->
<h2 style="font-family:Mono; font-size:1.625rem; font-weight:700; color:#1A1A1A; letter-spacing:-0.02em;">
  Section title
</h2>
<!-- Optional subtitle -->
<p style="font-size:0.875rem; color:#6B6870; margin-top:6px;">
  Supporting text
</p>
```

Paired with a `See all →` link right-aligned:
```html
<a style="font-family:Mono; font-size:0.8125rem; color:#1C3FBD; font-weight:600; text-decoration:none;">
  See all → (with SVG arrow icon)
</a>
```

### Nav

- Height: `56px`
- Background: `rgba(250,250,248,0.95)` + `backdrop-filter:blur(12px)`
- Border: `1px solid #E8E4DC`
- Position: `sticky top:0 z-index:50`
- Logo: `JetBrains Mono 700 1rem`, accent blue on arrow
- Links: `JetBrains Mono 0.8rem 500`, muted by default, active state = `#1C3FBD bg #EEF1FB border-radius:6px`

### Footer

- Background: `#111111`
- Top border: `1px solid rgba(255,255,255,0.08)`
- Text: `rgba(255,255,255,0.4)` default, `#fff` on hover
- Links: `0.8125rem`, no underline, hover color `#fff`

### Breadcrumb

```
font-family: Mono
font-size: 0.8rem
links: color #6B6870, hover #1C3FBD
separator: › color #E8E4DC margin:0 8px
current: color #1A1A1A
margin-bottom: 28px
```

### FAQ accordion

```
border-top: 1px solid #E8E4DC on each item
button: full width, flex, space-between, padding 18px 0
question: Mono 0.9375rem 600 #1A1A1A
icon: + SVG, rotates 45deg when open, color #6B6870
answer: Sans 0.9375rem #6B6870 line-height:1.7 padding-bottom:18px
```

### Table

```
border: 1px solid #E8E4DC, border-radius: 10px, overflow:hidden
header row: bg #EDEAE3, border-bottom: 1px solid #E8E4DC
header cells: Mono, 0.8rem, 600
body rows: alternate white / #F4F2EE (or hover to #EDEAE3)
body cells: 0.875–0.9rem, padding 12px 16px
accent column (% values): color #1C3FBD, font-weight 700
```

### Input

```
background: #FAFAF8 (light context) or rgba(255,255,255,0.08) (dark)
border: 1.5px solid #E8E4DC
border-radius: 8px
padding: 10–12px 16px
font-size: 1rem (16px)
color: #1A1A1A
focus: border-color #1C3FBD + box-shadow: 0 0 0 3px rgba(28,63,189,0.1)
```

---

## Page Anatomy

### Homepage

```
Nav (sticky)
├── Ticker (40px, #FFFFFF)
├── Hero (#FFFFFF, 72px top, 80px bottom)
│   ├── Left: headline + sub + CTAs + social proof
│   └── Right: live job preview cards
├── Platform overview (#FAFAF8, 72px)
│   └── 3×2 feature card grid (1px dividers)
├── Stats (#FFFFFF, 56px)
│   └── 4-col stats row (1px dividers)
├── Trending content (#FAFAF8, 72px)
│   ├── Tab bar (Jobs / Articles)
│   └── Numbered list rows
├── Skills chart (#FFFFFF, 72px)
├── Dark CTA (#1A1A1A, 72px)
├── FAQ accordion (#FFFFFF, 72px)
├── Subscribe dark (#1A1A1A, 72px)
└── Footer (#111111)
```

### Inner pages (Jobs, Skills, Blog, What is AX)

```
Nav (sticky)
├── Main (max-width:1200px, padding:40px 24px 80px)
│   ├── Breadcrumb (margin-bottom:28px)
│   ├── Page header (eyebrow pill + h1 + sub)
│   ├── [Page-specific content]
│   └── Subscribe form
└── Footer
```

### Blog post

```
Nav (sticky)
├── Main (max-width:740px for readable line-length)
│   ├── Breadcrumb
│   ├── Header (category badge + h1 + meta row)
│   ├── Article body (prose styles)
│   ├── FAQ (if present)
│   └── Subscribe form
└── Footer
```

---

## Do / Don't

### ✅ Do

- Use `max-width:1200px; margin:0 auto; padding:0 24px` for every container
- Use only spacing from the scale (4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80)
- Use `#E8E4DC` for all borders
- Use `border-bottom` on sections, never `border-top` on the next
- Write `font-size:1rem` (never `font-size:16px`) for body text
- Use `line-height:1.7` for body, `1.2` for headings
- Keep all badge/pill text uppercase with `letter-spacing:0.05em`
- Apply the same card hover pattern everywhere: `border-color:#C5CFEE`

### ❌ Don't

- Don't use `max-width:1100px` or any container width other than 1200px (or 740px for blog article)
- Don't use `box-shadow` on cards by default
- Don't mix padding like `padding: 40px 24px 80px` — use the anatomy table
- Don't add inline `border-radius` values that differ from the component spec
- Don't hardcode `#E8E4DC` inside JS event handlers — always reference the variable or use inline style directly
- Don't use `background:#EDEAE3` on cards — that's for table hover and raised elements only
- Don't add gradients or colored backgrounds to sections outside the rhythm defined above
- Don't use `font-size` below `0.65rem` — nothing should be smaller than badge text
- Don't create one-off color values for "muted" text — use `#6B6870` or `#9A969E` only
