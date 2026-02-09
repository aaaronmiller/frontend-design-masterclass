# Typography System

Typography is the single highest-leverage design decision. Before color, before layout, before animation. The right type sets the entire emotional register of a site.

## The Three-Role System

Every site needs exactly three typographic roles. No more, no less.

**Display** (H1-H2): The personality. Expressive, distinctive, memorable. This is where you take risks. Can be serif, sans, or decorative. Used sparingly at large sizes where legibility pressure is low.

**Body** (paragraphs, UI text): The workhorse. Optimized for reading at 16-20px. Must be crystal-clear at small sizes, on all screens, in all weights. Neutral without being boring.

**Mono** (code, data, timestamps): The utility player. Fixed-width for alignment. Used in technical contexts, data displays, and as a design accent (mono headings read as "technical authority").

## Font Selection Matrix

### Display Fonts (Personality-Forward)
Serif: Playfair Display, Instrument Serif, Fraunces, Newsreader, Crimson Pro, Lora, Bitter
Sans: Syne, Clash Display, Bricolage Grotesque, Cabinet Grotesk, Oswald, Chakra Petch, Space Grotesk, Archivo Black
Rounded: Nunito, Comfortaa, Varela Round
Slab: Roboto Slab, Zilla Slab, Rockwell (system)

### Body Fonts (Readability-First)
Geometric: DM Sans, Public Sans, Geist Sans, Manrope, Outfit
Humanist: Source Sans 3, Noto Sans, Switzer, TT Norms Pro
Neo-Grotesque: General Sans, Satoshi, Plus Jakarta Sans

### Mono Fonts (Precision)
JetBrains Mono, Fira Code (ligatures), IBM Plex Mono, Geist Mono, Source Code Pro

### BLACKLIST (Never Use Unless Heavily Modified)
Inter, Roboto, Open Sans, Lato, Arial, Helvetica (system), Poppins. These are the "gray hoodie" of web fonts. Using them signals zero design intention.

## Pairing Principles

**Contrast creates interest**: Pair fonts with opposing characteristics. Serif display + geometric sans body. Decorative display + clean mono accents. High-weight display + light-weight body.

**Shared skeleton**: Despite contrast, paired fonts should share similar x-heights, cap heights, or proportions. This creates subconscious harmony. Test: set both fonts at the same size and check if baselines feel aligned.

**Proven combinations**:
- Playfair Display (900) + DM Sans (400) = editorial luxury
- Syne (800) + Public Sans (400) = modern tech
- Instrument Serif (italic) + Geist Sans (400) = refined minimal
- Bricolage Grotesque (700) + Source Sans 3 (400) = quirky professional
- Oswald (600 uppercase) + IBM Plex Mono (400) = industrial utility
- Fraunces (900 italic) + Satoshi (400) = warm contemporary
- Cabinet Grotesk (800) + JetBrains Mono (400) = developer edge

## Modular Type Scale

Use a mathematical ratio for consistent sizing hierarchy. Define as CSS custom properties.

**Major Third (1.25x)** for conservative/professional sites:
`--fs-xs: 0.8rem; --fs-sm: 1rem; --fs-md: 1.25rem; --fs-lg: 1.563rem; --fs-xl: 1.953rem; --fs-2xl: 2.441rem; --fs-3xl: 3.052rem;`

**Perfect Fourth (1.333x)** for balanced sites:
`--fs-xs: 0.75rem; --fs-sm: 1rem; --fs-md: 1.333rem; --fs-lg: 1.777rem; --fs-xl: 2.369rem; --fs-2xl: 3.157rem; --fs-3xl: 4.209rem;`

**Perfect Fifth (1.5x)** for dramatic/editorial sites:
`--fs-xs: 0.667rem; --fs-sm: 1rem; --fs-md: 1.5rem; --fs-lg: 2.25rem; --fs-xl: 3.375rem; --fs-2xl: 5.063rem; --fs-3xl: 7.594rem;`

## Fluid Typography with clamp()

Eliminate breakpoint-based font resizing entirely. Use `clamp(min, preferred, max)`:

```css
:root {
  --fs-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --fs-h3: clamp(1.25rem, 1rem + 1vw, 1.75rem);
  --fs-h2: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem);
  --fs-h1: clamp(2rem, 1.5rem + 2.5vw, 4rem);
  --fs-display: clamp(2.5rem, 2rem + 3vw, 6rem);
}
```

Body text never drops below 16px (1rem). Display text scales from phone-friendly to desktop-dramatic without a single `@media` query.

## Weight Strategy

**Do**: Use weight extremes for contrast. H1 at 800-900, body at 400, captions at 300. The jump between 400 and 700 is boring. The jump between 200 and 900 is electric.

**Variable fonts**: Load a single variable font file covering the full weight axis (100-900). Enables precise control: `font-weight: 350` for slightly-lighter body, `font-weight: 850` for almost-black headings.

```css
@font-face {
  font-family: 'Display';
  src: url('/fonts/display-variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
}
```

## Spacing Rules

**Line height**: Body text at 1.5-1.7. Headings at 1.1-1.3 (tighter is more dramatic). Display text at 0.9-1.1 (can go negative for overlapping lines at huge sizes).

**Letter spacing**: Body at 0 (default). Uppercase text at `0.05-0.1em` (critical for readability). Large display text at `-0.02em` (optical tightening). Small caps at `0.05em`.

**Line length**: 50-75 characters optimal. Enforce with `max-width: 65ch` on paragraph containers.

**Paragraph spacing**: Use `margin-bottom` equal to line height for consistent rhythm. Never `<br>` for spacing.

## Font Loading Optimization

Fonts are the #1 performance killer for perceived load time. Strategy:

1. **Subset aggressively**: Strip unused glyphs. Latin-only = ~30KB per weight. Use `unicode-range` for multi-language.
2. **WOFF2 only**: Best compression. Universal browser support since 2020.
3. **Preload display font**: `<link rel="preload" href="/fonts/display.woff2" as="font" type="font/woff2" crossorigin>` in `<head>`.
4. **font-display: swap**: Show fallback instantly, swap when loaded. Prevents invisible text.
5. **System font stack as fallback**: `font-family: 'Display', system-ui, -apple-system, sans-serif;`
6. **Self-host**: Always faster than Google Fonts CDN. Download from google-webfonts-helper or Fontsource. Serve from same origin.
7. **Budget**: 2-3 font files max. Total font payload under 100KB.

## Anti-Patterns

- Same font for heading and body (lazy, no hierarchy)
- Font size increments under 1.5x between levels (weak hierarchy)
- Weight 400 vs 600 as your only contrast (invisible difference)
- Centered body text over 2 lines (destroys readability)
- ALL CAPS body text (hostile to readers)
- Decorative fonts at small sizes (illegible)
- More than 3 font families loaded (performance disaster)
