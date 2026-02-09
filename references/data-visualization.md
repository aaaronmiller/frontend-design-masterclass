# Data Visualization & Infographics

Data visualization is storytelling with numbers. A chart that merely displays data is a spreadsheet with extra steps. A chart that reveals insight is worth the code.

## LayerChart Architecture

LayerChart is the composable Svelte chart library built on Layer Cake. It is what shadcn-svelte's chart component wraps. Use it directly for maximum control.

Key concepts: Chart container defines data/scales. Child components (Area, Line, Bar, Points, Axis) compose freely. SVG, Canvas, and HTML layers stack independently.

```svelte
<Chart data={items} x="date" y="value" padding={{ top: 20, bottom: 30, left: 40 }}>
  <Svg>
    <AxisX />
    <AxisY />
    <Area class="fill-accent/20" line={{ class: 'stroke-accent stroke-2' }} />
    <Points class="fill-accent" />
  </Svg>
  <Html>
    <Tooltip let:data>
      <div class="bg-surface/80 backdrop-blur-sm p-2 rounded text-sm">{data.value}</div>
    </Tooltip>
  </Html>
</Chart>
```

### shadcn-svelte Chart Integration

shadcn-svelte provides `ChartTooltip`, `ChartLegend`, and theme-aware CSS variables (`--chart-1` through `--chart-5`). Override these to match the site palette:

```css
:root {
  --chart-1: hsl(var(--hue-primary), 70%, 50%);
  --chart-2: hsl(var(--hue-accent), 80%, 55%);
  --chart-3: hsl(var(--hue-primary), 40%, 65%);
  --chart-4: hsl(calc(var(--hue-primary) + 120), 50%, 50%);
  --chart-5: hsl(calc(var(--hue-primary) + 240), 45%, 55%);
}
```

## Chart Aesthetic Modes

### Neon (Dark Themes)
- Lines: `stroke-width: 2.5`, accent color, SVG glow filter (`<feGaussianBlur stdDeviation="3">` + `<feMerge>`)
- Area: Gradient from `accent/50` to `transparent`
- Grid: Dashed `stroke-dasharray="4 4"`, opacity 0.08
- Axis labels: Mono font, muted color
- Background: Deep charcoal/navy

### Editorial (Light Themes)
- Lines: `stroke: #000; stroke-width: 2`, solid
- Area: Solid muted fill or SVG hatching pattern
- Points: Custom shapes, white fill, thick black stroke
- Axis labels: Serif font
- Grid: Thin horizontal rules only

### Minimal (Any Theme)
- Single large number display + sparkline
- No axes, no grid, no labels on the sparkline
- Accent-color line only, no fills
- Maximum data-ink ratio

## Table Styling (shadcn-svelte)

Tables should feel like curated data, not Excel dumps.

- Remove vertical borders entirely. Keep horizontal as `border-b border-[var(--color-border)]`
- Sticky header: `backdrop-filter: blur(12px); background: color-mix(in srgb, var(--color-surface), transparent 20%)`
- Zebra striping: alternating rows with `color-mix(in srgb, var(--color-canvas), var(--color-text) 2%)`
- Row hover: `bg-[var(--color-accent)]/8`
- Cell padding: `px-4 py-3` minimum
- Status indicators as glowing dots, not text labels:
  - Active: `w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_theme(colors.emerald.500)]`
  - Pending: Same with `bg-amber-500 animate-pulse`
  - Error: `bg-red-500`, no glow
  - Inactive: `bg-zinc-600`, no glow

## Dashboard Layout: Bento Grids

```css
.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
/* Metric card: span 1 */
/* Main chart: grid-column: span 3; grid-row: span 2 */
/* Sidebar list: grid-column: span 1; grid-row: span 2 */
/* Wide table: grid-column: span 4 */
```

Card treatment: `border: 1px solid var(--color-border)`, `bg-gradient-to-br from-[var(--color-surface)] to-transparent`, `p-6`. Data hierarchy: big number in `text-4xl font-bold`, label in `text-xs uppercase tracking-widest text-[var(--color-text-secondary)]`.

## Advanced Techniques

### Gradient Area Fills
SVG `<linearGradient>` from accent at 50% opacity to transparent. Never solid fills under line charts.

### Custom Data Points
Replace circles with contextual SVG shapes: diamonds for financial, squares for categorical, custom icons for domain-specific.

### Grid Replacement
Remove standard grids. Replace with dot patterns (`stroke-dasharray="1 8"`, 0.1 opacity) or horizontal-only dashed lines.

### Crosshair Tooltip
Vertical line tracking mouse X. Custom `position: fixed` tooltip with `backdrop-filter: blur(8px)`. Dim other series to `opacity: 0.15` on hover (focus mode).

### Sparklines
Inline mini-charts at 32-48px height. LayerChart minimal config: no axes, no grid, no labels. Single SVG path with accent color, optional gradient.

### Real-Time Data
Svelte `$state` for data array. Push new points and shift old via `$effect`. "Heartbeat" sparkline: neon green on dark with scanline animation overlay.

## Infographic-Style Visuals

For maximum impact, combine charts with editorial design:

### Prompting Infographic Images (Nano Banana)
Prompt pattern: "Clean infographic illustration showing [concept], [style] style, [palette] color scheme, flat design with subtle shadows, suitable for web, transparent or solid [color] background"

Styles that work: isometric, flat design with long shadows, line art, geometric abstract, data-art (turning numbers into visual patterns).

### Chart + Text Composition
Surround charts with contextual annotations. Big insight number above the chart, trend arrow beside it, one-sentence summary below. The chart supports the story rather than being the story.

### Comparison Layouts
Side-by-side charts with shared axes. Use layered area charts for overlap comparison. Bar charts for direct A vs B. Avoid pie charts (humans are terrible at comparing angles).

### Progress/Metric Cards
Large stat + sparkline + trend indicator. Example structure:
```
[Icon]  Revenue
$1.2M   +12.3% ↑
[=====sparkline======]
```

## Print Considerations

- Charts render as SVG (vector, crisp at any DPI)
- `-webkit-print-color-adjust: exact` to preserve chart colors
- Remove interactive elements (tooltips, hover states) in `@media print`
- Set explicit `width` on chart containers to prevent overflow
- `break-inside: avoid` on chart + its caption as a unit
