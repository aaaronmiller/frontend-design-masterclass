# Colour: OKLCH ramps, harmony, postures, dark mode

Read when choosing or extending a palette, or adding a second mode. This is a menu of
methods. The palette itself comes from the subject and the brief (SKILL.md), and the only
colour requirement is floor item 4, AA contrast.

Postures, layer ranges and the dark-mode derivation adapt Hallmark's `craft.md` and
`dark-mode.md` (MIT, see NOTICE).

## 1. From the plan to tokens

The plan in SKILL.md names four to six colours. Give each a name and a job there (hex is
fine as shorthand in the plan), then author the tokens in `oklch()`.

Why OKLCH: hex and HSL live in sRGB, which is not perceptually even. The same lightness
number looks far brighter in yellow than in blue, so a ramp built by hand comes out uneven.
In OKLCH a step in L is the same perceived step at any hue.

| Channel | Range | Meaning |
| --- | --- | --- |
| L | 0 to 1, or 0% to 100% | perceived lightness |
| C | 0 to about 0.4 (0 is grey) | chroma, how vivid |
| H | 0 to 360 | hue angle, the same number as in HSL |

```css
:root {
  --color-paper:      oklch(96% 0.012 95);
  --color-paper-2:    oklch(92% 0.018 95);
  --color-ink:        oklch(22% 0.02 260);
  --color-muted:      oklch(45% 0.02 260);
  --color-rule:       oklch(82% 0.015 95);
  --color-accent:     oklch(52% 0.17 150);
  --color-accent-ink: oklch(98% 0.01 150);   /* text that sits on the accent */
  --color-focus:      oklch(50% 0.2 150);
}
```

- **Support:** Chrome 111, Firefox 113, Safari 15.4 and later. If older browsers matter,
  write an `hsl()` declaration just before the `oklch()` one.
- **Wide gamut:** keep the base token sRGB-safe and raise chroma inside
  `@media (color-gamut: p3)`.
- **Tailwind v4** takes OKLCH directly in `@theme`.
- Keep every colour in the token block. Components read `var(--color-*)`.

## 2. Layers of a palette

A working palette has a few layers. These ranges are starting points, not limits.

| Layer | Light ground | Dark ground |
| --- | --- | --- |
| Paper | L 92 to 98%, chroma 0.005 to 0.015 toward the anchor hue | L 12 to 18%, chroma 0.008 to 0.015 |
| Ink | L 16 to 24%, lightly tinted | L 88 to 96%, lightly tinted |
| Neutrals | five to nine steps between paper and ink, each tinted toward the anchor | the same, re-spaced |
| Accent | chroma 0.12 to 0.22, with a paired `--color-accent-ink` | chroma a little lower, L a little higher |
| Focus | on the accent's hue or a clear contrast to it, 3:1 against every surface it crosses | the same test |

- Greys tinted toward the page's anchor hue read as part of the palette. Zero-chroma grey
  beside a coloured accent reads as a default.
- Pure `#fff` and `#000` are legitimate on some pages (a stark print look, a brief that
  asks for it). Elsewhere a slight tint is quieter. If you use an absolute surface, say so
  with `surface: absolute` (see `direction.md`).
- Every rule that paints a dark or coloured surface sets its text colour in the same rule.

## 3. Ramps

When a hue needs several steps (a data scale, hover and pressed states, tints for wells):
hold H roughly constant, step L evenly, and let C peak in the middle.

```css
:root {
  --blue-50:  oklch(97% 0.03 255);
  --blue-200: oklch(86% 0.10 255);
  --blue-500: oklch(55% 0.20 255);
  --blue-700: oklch(38% 0.17 255);
  --blue-950: oklch(15% 0.07 255);
}
```

Hover and pressed states are one step along the ramp, not a new colour.

## 4. Harmony models: finding a second or third hue

Use these when the page wants more than one hue and the subject does not hand you the
answer. Start from the hue the subject gives you (a material, a place, a brand), not from
the category.

| Model | Hues | Character | Suits |
| --- | --- | --- | --- |
| Analogous | two or three within 30 to 60 degrees | calm, tonal | long reading, one-mood pages |
| Complementary | two, 180 degrees apart | maximum tension | one field colour and one signal |
| Split-complementary | a base plus the two neighbours of its opposite | tension with nuance | a signal that needs a partner |
| Triadic | three, 120 degrees apart | lively, even | playful subjects, category colour |
| Tetradic | two complementary pairs | rich, hard to balance | full-palette pages with named roles |

Harmony fixes the hue angles only. Vary lightness and chroma between the hues so that one
leads; three hues at the same L and C fight each other.

**Categories.** When the content has real categories (plans, teams, lines on a map), a hue
per category can carry meaning. Keep each category's hue the same everywhere it appears,
pair it with a label or shape so colour is never the only signal, and check each against
its ground.

**Semantic colour.** Success, warning, error and info are roles. Derive them at the
palette's own lightness and chroma so they sit with it, and never rely on red against green
alone.

## 5. Postures: how much of the page the colour takes

Decide this on purpose. It is the most direct form of "spend your boldness in one place".

| Posture | The surface | The accent | Suits |
| --- | --- | --- | --- |
| Restrained | paper and ink carry the page | a signal under about 5% of any screen: the primary action, the active item, one chart series | dense tools, long reading, pages where the picture or the type is the bold thing |
| Committed | one colour carries 30 to 60% of the surface as a field | stays a small signal | a subject with a colour of its own |
| Full palette | three or four named roles (field, signal, seal, ink), each with a job and a footprint | one of the roles | playful or editorial subjects, category-rich content |
| Drenched | the whole surface is the colour; ink and rules derive from it | a lighter or darker step of the same hue | a single-idea page, a poster, a launch |

Name the posture in the direction comment (`/* design · posture: committed */`) so the
linter reads large colour as a decision.

## 6. A second mode

One designed mode is a complete page. Add dark or light as a second mode when the brief
asks for it, when the product already has one, or when the audience plainly works in both
(a developer tool, a dashboard used at night). A page whose theme is dark is not a
two-mode page.

When you ship two, derive the second; never invert:

| Token | Dark derivation from the light value |
| --- | --- |
| paper | L 12 to 18%, tinted toward the anchor; rarely pure black |
| paper-2, paper-3 | elevation gets lighter: about +3% L per level |
| ink | L 92 to 96%, tinted; rarely pure white |
| muted and neutrals | re-space the steps between the new paper and ink |
| rule | L about 26 to 34%, so hairlines survive |
| accent | chroma down 0.02 to 0.04, L up 5 to 10% (saturated colour glares on dark) |
| accent-ink, focus | re-check contrast against the new values |
| hue | does not move, on any token |

```css
[data-mode="dark"] { /* only the tokens that change */ }
@media (prefers-color-scheme: dark) {
  :root:not([data-mode]) { /* the same overrides, for visitors who follow the OS */ }
}
:root { color-scheme: light dark; }
```

- A toggle, if the page has one, sets `document.documentElement.dataset.mode`, stores it,
  and reads it in a short inline script before first paint.
- On dark, elevation is lightness or an inset hairline; a drop shadow reads as glow.
- A card is lighter than its ground. Headings share one colour.
- Do not invert or dim photographs in CSS. Choose pictures that hold on a dark ground, or
  set a light one in a lighter well.
- Text on dark reads heavier: body weight can drop by about 50 units.
- Check contrast in both modes. The render tier sees only the default mode.

## 7. Contrast (floor item 4)

| Pair | Minimum |
| --- | --- |
| Body text on its ground | 4.5:1 |
| Large text (24 px, or 18.66 px bold) | 3:1 |
| Icons, control edges, focus rings | 3:1 |

- WCAG contrast uses sRGB luminance, which is not OKLCH L. Even ramps make passing pairs
  easier to find, but measure each pair.
- Measure on the rendered result when texture, an image or a gradient sits behind the text.
  `lint.mjs --render` does this (gates 40 and 41).
- Usual misses: light grey text on white, accent-coloured text on a tinted ground, faint
  placeholder text, grey text on a coloured surface, a disabled control that looks enabled.
- Tools: browser devtools colour picker, oklch.com.

## 8. Calibration

Colour choices that currently read as unchosen. Each is right when the brief asks for it:

- A mid purple as the primary, and purple running into blue as a gradient.
- Cream paper with a terracotta accent; near-black with one acid accent (clusters 1 and 2
  in SKILL.md).
- A hue picked for the category: blue for software, green for health.
- Eight unrelated hues across chart series. A lightness ramp on one hue reads better
  (`data.md`).
- Full chroma everywhere, so nothing leads.
- Neutral greys with one blue link colour.
- A dark mode made by inverting the light one.
