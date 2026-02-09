# Mermaid Diagram Theming

Diagrams should match the site's visual identity, not look like default documentation. Two approaches: `beautiful-mermaid` (primary) for pre-rendered SVG, and native Mermaid `themeVariables` for inline/runtime rendering.

## beautiful-mermaid (Primary)

A pure TypeScript library with 15 built-in themes and Shiki VS Code theme compatibility. Zero DOM dependencies. Ultra-fast: 100+ diagrams in <500ms.

### Setup
```bash
bun add beautiful-mermaid
```

### Basic Usage
```typescript
import { renderMermaid, THEMES } from 'beautiful-mermaid';
const svg = await renderMermaid(diagramCode, THEMES['tokyo-night']);
```

### Built-in Themes
Tokyo Night, Dracula, Nord, Catppuccin (Mocha, Latte, Frappe, Macchiato), GitHub (Light, Dark), Monokai, One Dark Pro, Solarized (Light, Dark), Gruvbox, Rose Pine.

### Custom Theme (Match Site Palette)
```typescript
const siteTheme = {
  bg: 'var(--color-canvas)',
  fg: 'var(--color-text)',
  accent: 'var(--color-accent)',
  muted: 'var(--color-text-secondary)',
};
const svg = await renderMermaid(diagram, siteTheme);
```

### Live Theme Switching
beautiful-mermaid uses CSS variables internally. Change them and the diagram updates without re-rendering:
```javascript
svg.style.setProperty('--bg', newBgColor);
svg.style.setProperty('--fg', newFgColor);
```

### Shiki Integration (VS Code Themes)
```typescript
import { extractShikiColors } from 'beautiful-mermaid';
import tokyoNight from 'shiki/themes/tokyo-night';
const theme = extractShikiColors(tokyoNight);
const svg = await renderMermaid(diagram, theme);
```

## SvelteKit Component Pattern

```svelte
<script lang="ts">
  import { renderMermaid } from 'beautiful-mermaid';
  let { code, theme = undefined }: { code: string; theme?: any } = $props();
  let svgHtml = $state('');

  $effect(() => {
    renderMermaid(code, theme).then((svg) => {
      svgHtml = svg.outerHTML;
    });
  });
</script>

<div class="mermaid-container rounded-xl border border-[var(--color-border)]
  bg-[var(--color-surface)] p-6 shadow-sm">
  {@html svgHtml}
</div>
```

## Native Mermaid (Fallback)

When beautiful-mermaid is not available or inline rendering is needed.

### Available Looks (v11+)
- `neo`: Modern, clean (current default)
- `handDrawn`: Sketch-style via RoughJS
- `classic`: Traditional Mermaid

### Theme Variables (base theme only)
Only the `base` theme accepts custom `themeVariables`. Resolve CSS variables to hex at runtime since Mermaid only accepts hex colors:

```javascript
mermaid.initialize({
  theme: 'base',
  look: 'neo',
  themeVariables: {
    primaryColor: getComputedStyle(root).getPropertyValue('--color-surface').trim(),
    primaryTextColor: getComputedStyle(root).getPropertyValue('--color-text').trim(),
    primaryBorderColor: getComputedStyle(root).getPropertyValue('--color-border').trim(),
    lineColor: getComputedStyle(root).getPropertyValue('--color-text-secondary').trim(),
    secondaryColor: getComputedStyle(root).getPropertyValue('--color-canvas').trim(),
    tertiaryColor: getComputedStyle(root).getPropertyValue('--color-surface').trim(),
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
  }
});
```

## SVG Post-Processing

### Texture Overlay
Wrap the rendered SVG in a container with a pseudo-element texture:
```css
.mermaid-container {
  position: relative;
}
.mermaid-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/textures/dot-pattern.svg');
  background-size: 20px;
  mix-blend-mode: overlay;
  opacity: 0.04;
  pointer-events: none;
  border-radius: inherit;
}
```

### Drop Shadow
`filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1))` on the SVG container. On dark themes: `drop-shadow(0 4px 20px rgba(var(--accent-rgb), 0.15))`.

### Border Treatment
Card wrapper with site tokens: `border: 1px solid var(--color-border)`, `border-radius: 0.75rem`, `padding: 2rem`, `background: var(--color-surface)`.

## Diagram-Type Specific Styling

### Flowcharts
`neo` look for professional. `handDrawn` for educational/whiteboard feel. Use directional flow: top-down for processes, left-right for timelines.

### Sequence Diagrams
Enable `rightAngles: true` for cleaner connector lines. Use `autonumber` for step numbering. Color-code actors by role using `themeVariables`.

### State Diagrams
Map colors semantically: green nodes = active/running, amber = transitional/pending, red = error/stopped, gray = inactive/completed.

### Gantt Charts
Section colors should map to team or workstream identity. Use site's accent for milestones. Keep date formats consistent.

### Architecture Diagrams
Group related nodes. Use subgraphs with labeled backgrounds. Maintain consistent flow direction within each subgraph.

## ASCII/Unicode Output

beautiful-mermaid supports dual output: SVG for web display, ASCII for terminal/documentation contexts. Use ASCII mode for `<pre>` blocks in technical docs or CLI output formatting.

## Print Considerations

- SVGs print cleanly at any DPI (vector)
- `-webkit-print-color-adjust: exact` to preserve diagram colors
- Remove texture overlays in `@media print`
- Set explicit `width` and `max-width` to prevent page overflow
- `break-inside: avoid` to keep diagrams intact across page breaks
- Consider light-theme rendering for print regardless of site theme
