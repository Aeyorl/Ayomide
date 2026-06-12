# DESIGN.md — Portfolio Design System

> **Source**: [Refero Styles — Home](https://styles.refero.design/style/f9221afc-f5cb-4de8-89cd-40172e765124)
> **North Star**: Sunlit eucalyptus grove on warm parchment — the design rests on a cream page where ink-black type and a single electric yellow accent do all the talking.

---

## Color Palette

### Brand
| Token          | Hex       | Role |
|----------------|-----------|------|
| Electric Lemon | `#ffff48` | Filled CTA buttons, active states, standout badges — a single saturated yellow that breaks the cream/ink calm to signal action; contrast against #262d29 is 13.2:1 AAA |

### Neutrals
| Token          | Hex       | Role |
|----------------|-----------|------|
| Ink Black      | `#262d29` | Primary text, navigation, body copy, card borders, icon strokes — the only structural color |
| Parchment Cream| `#f7f6e3` | Page canvas, card surfaces, bordered containers — near-gray cream that warms the entire interface |

### Quick Color Reference
- Canvas / page background: `#f7f6e3`
- Primary text / ink: `#262d29`
- Card / content borders: `#f7f6e3` (on cream) or `#262d29` (on dark)
- Accent: `#ffff48` (sparingly)
- Primary action: `#ffff48` (filled action)

### Surfaces
| Level | Name           | Hex       | Purpose |
|-------|----------------|-----------|---------|
| 0     | Canvas         | `#f7f6e3` | Page background, section fills, card surfaces |
| 1     | Card Surface   | `#f7f6e3` | Portfolio cards, program cards — same tone as canvas, defined by radius and padding |
| 2     | Ink Surface    | `#262d29` | Dark mode blocks, footer on dark sections — used sparingly as full-bleed invert |
| 3     | Accent Surface | `#ffff48` | Filled CTA buttons only — never as a section or card background |

---

## Typography

### Font Stack
| Role    | Family         | Weight      | Sizes                                | Line Height | Fallback |
|---------|----------------|-------------|--------------------------------------|-------------|----------|
| Display | Prody          | 400         | 42px, 131px                          | 1.15        | GT Sectra Display, Tiempos Headline, Canela, Playfair Display |
| Body    | SuisseIntl     | 400, 500, 600 | 13–42px (7 values)                 | 1.15        | Inter, Söhne, Neue Haas Grotesk, Switzer |
| Caption | SuisseIntl Book| 400         | 13px, 28px                           | 1.15        | Inter, Söhne, Neue Haas Grotesk |

> **Note**: For the portfolio, use **Playfair Display** (Google Fonts) as a substitute for Prody, and **Inter** as a substitute for SuisseIntl/SuisseIntl Book.

### Type Scale (Minor Third — 1.2 ratio from 20px base)
| Role       | Size   | Weight | Line Height | Family       |
|------------|--------|--------|-------------|--------------|
| display    | 131px  | 400    | 1           | Prody        |
| heading-lg | 42px   | 400    | 1.15        | Prody        |
| heading    | 33px   | 400    | 1.15        | SuisseIntl   |
| 28px       | 28px   | 400    | 1.15        | SuisseIntl Book |
| heading-sm | 21px   | 400    | 1.15        | SuisseIntl   |
| subheading | 19px   | 400    | 1.15        | SuisseIntl   |
| body       | 16px   | 500    | 1.15        | SuisseIntl   |
| 14px       | 14px   | 400    | 1           | SuisseIntl   |
| caption    | 13px   | 400    | 1.15        | SuisseIntl   |

---

## Spacing & Shape

### Spacing
| Purpose    | Value     |
|------------|-----------|
| Density    | spacious  |
| Base unit  | 4px       |
| Max width  | 1280px    |
| Section gap| 75–112px  |
| Card padding| 37px     |
| Element gap| 9–20px   |

### Border Radius
| Context  | Value   |
|----------|---------|
| Nav      | 8px     |
| Cards    | 37px    |
| Pills    | 9999px  |
| Buttons  | 18px    |

---

## Components

### Hero Statement
Cream canvas (`#f7f6e3`) with optional sky-to-cream wash overlay. Centered headline: Prody 400 at 131px, line-height 1.15, color `#262d29`. Optional subtext: SuisseIntl 400 at 19px, `#262d29`. Max-width 960px, vertical padding 112px top/bottom.

### Portfolio Card
Image fills the card edge-to-edge, border-radius 37px, no border. Bottom-left label overlay: SuisseIntl 400 at 14px, `#f7f6e3` text with subtle shadow over photography. Cards sit in a horizontal scroll row, 28px gap.

### Pill CTA (Filled — Primary)
Background `#ffff48`, text `#262d29`, border-radius 9999px, padding 8px 18px, font SuisseIntl 400 at 14px. One per section maximum.

### Pill CTA (Ghost — Secondary)
Transparent background, 1px border in `#f7f6e3` or `#262d29` at low opacity, border-radius 9999px, padding 8px 18px, SuisseIntl Book 400 at 13px, text in `#262d29`.

### Testimonial Block
Centered, max-width 720px. Attribution line: SuisseIntl 400 at 13px `#262d29`. Quote: SuisseIntl Book 400 at 28px `#262d29` with curly typographic quotes. Company name + icon below in `#262d29`.

### Top Navigation
Fixed top bar, cream background, no border or shadow. Logo at far left in SuisseIntl 400 ~21px `#262d29`. Link group centered/right-aligned at 13px SuisseIntl Book 400, 9px gap. CTA button at far right.

### Footer
Cream background, 37px padding, single row of text links in 13px SuisseIntl Book 400 `#262d29`. No dividers, no social icons beyond simple text.

---

## Layout Rules

Max-width 1280px centered, with sections using 75–112px vertical gaps to create editorial breathing room. The hero is a full-bleed atmospheric band with a centered display headline at 131px. Navigation is a minimal top bar with a left-aligned wordmark, centered link group, and right-aligned pill CTA — no sidebar, no mega-menu, no sticky shadow.

---

## Do ✅

- Use `#ffff48` only for filled primary CTAs — its power comes from scarcity
- Set hero headlines in display font at large sizes with line-height 1.15; let size do the work, never bold the weight
- Apply 37px border-radius to content cards; 18px to buttons; 8px to inputs/nav — this three-tier radius IS the system
- Build all text-heavy pages on `#f7f6e3` canvas with `#262d29` type
- Space sections with 75–112px vertical gaps to let the cream breathe
- Keep all assets monochrome `#262d29` — color breaks the two-tone discipline

## Don't ❌

- Never introduce a second saturated color; if something needs emphasis, use yellow or a weight change, not a new hue
- Never use `#ffff48` for body text, icons, or decorative fills — it is a button color only
- Don't add box-shadow to cards or buttons; the system relies on border-radius and background contrast, not elevation
- Don't place imagery on a white background — always carry `#f7f6e3` warmth to maintain the paper feel
- Don't use gradients on buttons, cards, or page backgrounds
- Don't bold the display font — 400 weight is the voice; adding weight flattens contrast with body text

---

## CSS Variables

```css
:root {
  /* Colors */
  --color-parchment-cream: #f7f6e3;
  --color-ink-black: #262d29;
  --color-electric-lemon: #ffff48;

  /* Typography */
  --font-display: 'Playfair Display', 'GT Sectra Display', serif;
  --font-body: 'Inter', 'SuisseIntl', system-ui, sans-serif;
  --font-caption: 'Inter', 'SuisseIntl Book', system-ui, sans-serif;

  /* Font Sizes */
  --text-display: 131px;
  --text-heading-lg: 42px;
  --text-heading: 33px;
  --text-heading-sm: 21px;
  --text-subheading: 19px;
  --text-body: 16px;
  --text-caption: 13px;

  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-28: 28px;
  --spacing-37: 37px;
  --spacing-75: 75px;
  --spacing-112: 112px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 112px;
  --card-padding: 37px;
  --element-gap: 20px;

  /* Border Radius */
  --radius-nav: 8px;
  --radius-buttons: 18px;
  --radius-cards: 37px;
  --radius-pills: 9999px;

  /* Surfaces */
  --surface-canvas: #f7f6e3;
  --surface-card: #f7f6e3;
  --surface-ink: #262d29;
  --surface-accent: #ffff48;
}
```
