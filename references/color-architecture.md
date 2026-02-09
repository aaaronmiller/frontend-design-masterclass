# Color Architecture

Color is emotion encoded in wavelengths. A structured color system prevents the two most common failures: "it looks like every other site" (safe purples and blues) and "it looks chaotic" (random hex values without relationship).

## Work in HSL, Not Hex

Hex codes (`#5C7AEA`) are opaque. You cannot mentally adjust them. HSL (Hue, Saturation, Lightness) makes relationships visible and manipulation trivial.

`hsl(H, S%, L%)` where H = 0-360 (color wheel position), S = 0-100% (vibrancy), L = 0-100% (brightness).

This means: to make a color lighter, increase L. To mute it, decrease S. To find its complement, add 180 to H. Every palette operation becomes arithmetic.

**Use OKLCH for perceptual uniformity**: Modern CSS supports `oklch(L C H)`. Two colors with the same L value actually look equally bright (unlike HSL where yellow at 50% looks brighter than blue at 50%). Use for accessible palettes.

## The Palette Architecture

Build every site palette from these 7 semantic layers:

### Layer 1: Canvas (Background)
The foundation everything sits on. Light theme: warm white (hsl(40, 20%, 97%)) or cool white (hsl(220, 15%, 97%)). Dark theme: deep charcoal (hsl(220, 15%, 10%)) or true navy (hsl(220, 40%, 8%)). NEVER pure white (#fff) or pure black (#000). They create harsh contrast that fatigues eyes.

### Layer 2: Surface (Cards, Panels)
Slightly elevated from canvas. Light: canvas L minus 3-5%. Dark: canvas L plus 3-5%. Creates depth without borders. Stack surfaces for elevation: surface-1, surface-2, surface-3, each a few percent lighter (dark) or darker (light).

### Layer 3: Border (Dividers, Outlines)
Light: hsl(H, 10%, 85%). Dark: hsl(H, 10%, 20%) or `rgba(255,255,255,0.1)`. Keep low-saturation. Borders should separate, not compete.

### Layer 4: Text (Primary, Secondary, Muted)
Primary: Light theme hsl(H, 15%, 10%), dark theme hsl(H, 10%, 90%). NEVER pure white on dark (#fff fatigues). Use #EAEAEA or hsl(0, 0%, 90%). Secondary: Primary at 70% opacity. Muted: Primary at 45% opacity.

### Layer 5: Primary Brand Color
The single hue that defines the brand. Chosen with intention. This is the seed from which the rest grows.

### Layer 6: Accent ("The Pop")
High-saturation derivative of or complement to primary. Restricted to 5-10% of viewport: CTAs, active states, notification badges, chart highlights, hover glows. If accent is everywhere, nothing pops.

### Layer 7: Semantic Status Colors
Success: green family. Warning: amber/orange. Error/Danger: red family. Info: blue family. These stay constant across themes.

## Color Theory Harmonies

Starting from a single brand hue (H), generate related colors mathematically:

**Complementary**: H + 180. Maximum contrast. Use for accent against primary. Bold, energetic.

**Split-Complementary**: H + 150 and H + 210. High contrast with less tension. Excellent for tricolor schemes.

**Triadic**: H + 120 and H + 240. Equilateral triangle on the wheel. Vibrant, balanced. Pick one dominant, two supporting.

**Analogous**: H - 30, H, H + 30. Adjacent hues. Harmonious, calm, sophisticated. Low contrast. Good for surface variations.

**Tetradic (Rectangle)**: H, H + 60, H + 180, H + 240. Four colors. Maximum diversity. Requires a clear dominant color or it becomes chaotic.

**Monochromatic**: Same H, vary S and L. The safest scheme. Elegant, cohesive, but can lack energy without a complementary accent.

## Building the Full Palette

Given a brand color `hsl(215, 70%, 50%)` (vivid blue):

```
Canvas Light:   hsl(215, 15%, 97%)   -- desaturated, very light
Canvas Dark:    hsl(215, 25%, 8%)    -- deep, slightly saturated
Surface Light:  hsl(215, 12%, 93%)   -- slightly darker than canvas
Surface Dark:   hsl(215, 20%, 13%)   -- slightly lighter than canvas
Border Light:   hsl(215, 10%, 85%)
Border Dark:    hsl(215, 15%, 20%)
Primary:        hsl(215, 70%, 50%)   -- the brand color itself
Accent:         hsl(35, 85%, 55%)    -- complement (H+180), warm amber
Error:          hsl(0, 70%, 55%)
Success:        hsl(145, 65%, 42%)
Warning:        hsl(40, 90%, 50%)
```

For extra themes (user-selectable), rotate the primary hue:
- "Sunset" theme: Primary at hsl(15, 75%, 50%), accent at hsl(195, 80%, 50%)
- "Forest" theme: Primary at hsl(150, 60%, 35%), accent at hsl(330, 70%, 55%)
- "Midnight" theme: Primary at hsl(260, 65%, 55%), accent at hsl(80, 80%, 55%)

Each rotation produces a fresh palette that remains internally coherent because the relationships (surface offsets, saturation curves) stay constant.

## CSS Custom Properties Architecture

```css
:root {
  color-scheme: light dark;
  --hue-primary: 215;
  --hue-accent: 35;

  /* Light theme (default) */
  --color-canvas: hsl(var(--hue-primary), 15%, 97%);
  --color-surface: hsl(var(--hue-primary), 12%, 93%);
  --color-border: hsl(var(--hue-primary), 10%, 85%);
  --color-text: hsl(var(--hue-primary), 15%, 10%);
  --color-text-secondary: hsl(var(--hue-primary), 10%, 35%);
  --color-primary: hsl(var(--hue-primary), 70%, 50%);
  --color-accent: hsl(var(--hue-accent), 85%, 55%);
  --shadow-color: hsl(var(--hue-primary), 15%, 60%);
}

.dark {
  --color-canvas: hsl(var(--hue-primary), 25%, 8%);
  --color-surface: hsl(var(--hue-primary), 20%, 13%);
  --color-border: hsl(var(--hue-primary), 15%, 20%);
  --color-text: hsl(var(--hue-primary), 10%, 90%);
  --color-text-secondary: hsl(var(--hue-primary), 8%, 60%);
  --color-primary: hsl(var(--hue-primary), 65%, 60%);
  --color-accent: hsl(var(--hue-accent), 80%, 60%);
  --shadow-color: hsl(var(--hue-primary), 50%, 3%);
}
```

Theme switching = changing `--hue-primary` and `--hue-accent`. The entire palette updates.

## Light Theme Rules

- Shadows: Use colored shadows from `--shadow-color` at low opacity. Sharp offsets for neo-brutalist (`4px 4px 0`), soft spreads for modern (`0 4px 20px`).
- Emphasis: Bold weight, darker color, or accent underline. NOT background highlight.
- Borders: Thin, desaturated. `1px solid var(--color-border)`.
- Images: Full saturation works. No adjustment needed.
- Text hierarchy through weight and size, not color variation.

## Dark Theme Rules

- Shadows: Nearly invisible. Use glow effects instead: `box-shadow: 0 0 20px rgba(accent, 0.15)`.
- Emphasis: Accent color text, subtle background tint (`hsl(accent, 80%, 50%, 0.1)`), or glow underline.
- Surfaces: Build depth through lightness steps, not shadows. Each layer is 3-5% lighter.
- Text: NEVER pure white. Use `hsl(0, 0%, 88-92%)`. Links and accents can be brighter.
- Images: Reduce brightness/contrast slightly. Add `filter: brightness(0.9)` on hero images. Dithered textures look better on dark at lower opacity.
- Borders: Use `rgba(255, 255, 255, 0.08-0.12)` instead of solid colors.
- Status colors: Increase lightness by 10-15% from light-theme values. Dark red is invisible on dark backgrounds.

## Theme Selector Implementation

For sites with user-selectable themes, store choice in `localStorage`, apply class to `<html>`, and respect `prefers-color-scheme` as default:

```js
const theme = localStorage.theme
  || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.className = theme;
```

Offer 2+ extra theme flavors beyond light/dark using hue rotation. Each theme only changes `--hue-primary` and `--hue-accent`. Everything else (surfaces, borders, text) derives automatically.

## Anti-Patterns

- Random hex values with no mathematical relationship
- Using pure saturated colors for large surfaces (eye fatigue)
- Same color for light and dark themes (dark needs lightness adjustments)
- Accent color on more than 10% of viewport (dilutes impact)
- Gray-only palette with no brand hue at all (institutional, cold)
- Purple as primary (the #1 LLM-generated "safe" color. Avoid unless specifically requested.)
