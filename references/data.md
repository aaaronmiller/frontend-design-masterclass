# Data: charts, tables, dashboards, diagrams

Read when the page shows charts, tables, a dashboard or a diagram. A menu of forms and
techniques. The requirements that bite hardest here are floor items 4 and 5: contrast, and
no invented numbers.

Chart form and honesty rules adapt Hallmark's `data-viz.md` (MIT, see NOTICE).

## 1. Form first

Choose the form from the shape of the data, before any styling.

| The data is | A form that fits |
| --- | --- |
| one value | a figure set in type with a worded qualifier; not a one-bar chart |
| two to five values compared | horizontal bars, or a row of figures |
| many categories with short labels | vertical bars, sorted, so the set fits the width |
| a series over time | a line; a sparkline when it sits inside another component |
| more than about seven categories with detail | a table |
| parts of a whole | one stacked horizontal bar; a pie only for two or three parts |
| a distribution | a histogram or a dot strip |
| a relationship between two measures | a scatter |
| a process or a system | a diagram (section 7) |

Before building, answer three questions: what is the one thing this chart says, which
points deserve emphasis, and what would the reader do differently for knowing it. The most
underused form is emphasis: one series in the accent, everything else neutral.

A big number with a small label and a tinted tile is the default treatment (SKILL.md). Use
a figure tile when the number is the point, and set it in the page's own type voice.

## 2. Construction

For a handful of charts on a page, inline SVG written for the data is often the cleanest:
no dependency, full control, prints as vector.

| Part | Guide |
| --- | --- |
| Bars | 24 px thick or less, small gaps, baseline at zero, square or barely rounded at the data end |
| Lines | 2 px stroke; markers only at annotated points |
| Area under a line | optional: a flat tint, or a fade to transparent on a sparkline |
| Gridlines | few (three to five), 1 px, in the rule colour; or none, with direct labels |
| Axes | one y-axis; two measures with different units get two small charts |
| Labels | label lines and bars directly where there is room, instead of a legend |
| Numerals | `font-variant-numeric: tabular-nums` on every numeric surface |
| Marks | no shadows, no 3D, no glow |

**Sorting.** Sort comparison charts by the informative end, usually the largest. Average
lines mostly hide the ranking the reader came for; a reference line at a meaningful
threshold earns its place.

**Annotation** turns a chart into a statement:

```html
<g transform="translate(412 96)">
  <circle r="4" fill="var(--color-accent)" />
  <line y1="-8" y2="-30" stroke="var(--color-muted)" />
  <text y="-36" text-anchor="middle" fill="var(--color-ink)">Peak, 14 March</text>
</g>
```

**Sparklines:** no axes, no grid, one colour, 32 to 48 px tall, the last point optionally
marked.

```html
<svg viewBox="0 0 100 24" preserveAspectRatio="none" role="img" aria-label="Weekly orders, rising">
  <polyline fill="none" stroke="var(--color-accent)" stroke-width="1.5" points="0,20 20,16 40,18 60,9 80,11 100,4" />
</svg>
```

## 3. Colour in charts

- **One series:** the accent.
- **Several series:** a lightness ramp on one hue (steps of 12 to 15% L, chroma constant),
  assigned in a fixed order; reference and comparison series in the muted colour.
- **Named entities** (brands, teams, parties, transit lines) can take their own real
  colours, since the reader already knows them.
- **Categories:** a hue per category, the same everywhere it appears (`color.md`).
- Text does not wear the data colour. Identify a series with a swatch beside its label.
- More than four or five hues stops being readable. Past that, use a table or small
  multiples.
- State is never colour alone: pair it with a shape, an icon or a word.
- On a dark ground, lower the chroma and raise the lightness of marks; gridlines come from
  the dark rule colour.

## 4. Honesty (floor item 5)

- Real numbers, or a marked blank where a figure is missing. A fabricated series is worse
  than an empty slot.
- Bars start at zero. When the data lives in a narrow band, a zoomed axis is fine if it
  says so ("axis starts at 94%").
- Sample data appears only inside a built product sample, reads as a sample (totals sum,
  dates run in order), and is never something a visitor could take as a claim.
- A count-up animation is for real figures only, and announces only its final value.

## 5. Tables

A table is often the best chart. Let alignment and spacing make the structure.

```css
.data-table { width: 100%; border-collapse: collapse; font-variant-numeric: tabular-nums; }
.data-table th { text-align: left; font-weight: 600; color: var(--color-muted); padding: var(--space-sm) var(--space-md); border-bottom: 2px solid var(--color-rule); }
.data-table td { padding: var(--space-sm) var(--space-md); border-bottom: 1px solid var(--color-rule); }
.data-table td.num, .data-table th.num { text-align: right; }
.data-table tr:last-child td { border-bottom: 0; }
```

| Technique | Use |
| --- | --- |
| No vertical rules, light horizontal ones | the usual starting point |
| Column heads in the body face, sentence case, a step smaller | quiet heads that do not shout |
| The naming column a step heavier | helps the eye find a row |
| Right-aligned numerals | so digits line up |
| Sticky header on an opaque ground | long tables |
| Bar in cell | a faint horizontal bar behind the number shows magnitude |
| Heat tint | cell ground tinted by value, with the number still readable |
| Sparkline cell | a trend beside the latest value |
| Status as shape plus word | a filled, half or hollow mark with its label |
| Sortable heads | a real `<button>` in the `th`, with `aria-sort` |
| Row hover | a faint tint, only when rows are clickable or the table is wide |

On narrow screens a wide table scrolls inside its own container with a visible cue, or
turns into stacked records. It does not push the page sideways.

## 6. Dashboards and reports

- Fewer, truer figures: one figure that matters, one chart that argues, one table of
  detail. A wall of equal tiles, donuts and gauges is the usual tell.
- Open a report with the sentence that says what matters, then show the evidence.
- A mixed-span grid (bento) is one layout among several: a single column with a side
  panel, a table-first screen and a chart-first screen all work (`layout.md` section 7).
- **Interaction that helps:** a crosshair that reads all series at one x; focus mode that
  dims other series while one is hovered; a tooltip rendered as a styled element, placed
  so it does not cover the point; on comparison charts, hovering one item shows its gap to
  the selected baseline.
- Hover targets stay stable: feedback by colour and opacity, no layout change.
- **Live data:** append points and drop old ones on a fixed window, update on an interval
  the eye can follow, and never animate the whole chart on each tick.

**Infographic blocks** for a report or an explainer page:

| Block | What it is |
| --- | --- |
| Number block | a real figure in the display face, a plain-language label, one line of context |
| Timeline strip | a vertical or horizontal line with dated markers, as a real list |
| Comparison grid | two or three options side by side on the same rows |
| Process flow | stages joined by connectors, for a real sequence |

## 7. Chart libraries

Use the project's library when it has one. Otherwise pick by need:

| Need | Options |
| --- | --- |
| A few static charts in HTML | inline SVG by hand; Observable Plot; D3 for custom forms |
| Svelte | LayerChart (composable SVG, canvas and HTML layers; it underlies shadcn-svelte charts) |
| React | Recharts, visx, or the chart parts of the project's UI kit |
| Rich interaction (brush, zoom, large data) | Apache ECharts |
| Themed by CSS variables, framework-neutral | Unovis |
| Financial time series | TradingView Lightweight Charts |

Whatever the library, override its default palette, fonts and grid with the page's tokens.
A chart in the library's stock colours reads as pasted in.

## 8. Diagrams with Mermaid

Use a diagram for a real system or process, labelled, with a text alternative.

**Native Mermaid** accepts custom colours only on the `base` theme, and only as hex values,
so resolve the page's tokens at run time:

```js
import mermaid from 'mermaid';
const token = (name, fallback) => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  look: 'neo',
  themeVariables: {
    primaryColor: token('--mermaid-node', '#e8ede6'),
    primaryTextColor: token('--mermaid-text', '#1c2420'),
    primaryBorderColor: token('--mermaid-line', '#4a5a50'),
    lineColor: token('--mermaid-line', '#4a5a50'),
    secondaryColor: token('--mermaid-node-2', '#f4f1e8'),
    tertiaryColor: token('--mermaid-ground', '#fbfaf5'),
    fontFamily: token('--font-body', 'system-ui, sans-serif'),
  },
});
```

Keep a small set of hex `--mermaid-*` tokens beside the OKLCH palette for this purpose,
and re-initialise when the mode changes.

- **Looks** (Mermaid 11 and later): `neo` is clean, `handDrawn` is a sketch style that
  suits teaching and informal pages, `classic` is the older appearance. Set with
  `config: look:` in the diagram's frontmatter.
- **`beautiful-mermaid`** (Craft) is an alternative renderer that outputs SVG themed by CSS
  custom properties, so a diagram follows the page's tokens and mode without re-rendering,
  and it can take colours from a Shiki theme. Check its README for the current API before
  relying on it.
- **Post-processing:** the output is SVG. Give it a container on the page's surface with
  the page's rule and radius, set `width: 100%; height: auto`, and restyle text with the
  page's fonts.
- **By type:** flowcharts read best with few node shapes used consistently (rounded for
  steps, diamonds for decisions). Sequence diagrams take `autonumber` for documentation.
  State diagrams map colour to meaning and keep it consistent. Gantt sections take one
  colour per workstream.
- A diagram may be the page's lead image when the system is the subject.
- Hand-written SVG is often better than Mermaid for a single important diagram: you
  control every position.

## 9. Print

- SVG charts and diagrams print as vector. Give the SVG explicit `width` and `height`.
- `print-color-adjust: exact` on chart containers keeps their colours.
- `break-inside: avoid` on charts, tables and figure blocks; `thead { display: table-header-group; }`
  repeats table headers on each page.
- Hide tooltips and controls in `@media print`, and drop texture overlays.
- To export a graphic as an image, render it at a fixed width and capture it with the
  browser at twice the resolution.
