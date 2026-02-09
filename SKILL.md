---
name: frontend-design-masterclass
description: >
  Create distinctive, production-grade frontend interfaces using SvelteKit 5 (Runes),
  shadcn-svelte, Hono/Bun, Tailwind v4, and LayerChart. Enforces "Anti-Slop" aesthetics
  with custom color systems, typographic hierarchies, microanimations, fake-3D kinetics,
  stylized Mermaid diagrams, Nano Banana textures, and data visualization that pops.
  Triggers on: build a website, landing page, dashboard, web app, frontend, UI, layout,
  redesign, beautify, style, make it look good, visual polish, theme, component, page,
  hero section, color scheme, dark mode, charts, data viz, mermaid diagram, animation,
  microinteraction, responsive design, portfolio, SaaS page, marketing site, web design.
---

# Frontend Design Masterclass

Build interfaces that resonate, not just render. This skill enforces bold, intentional
design with a modern high-performance stack. Every pixel must justify its existence.

## 1. Core Stack (Mandatory)

- **Framework**: SvelteKit 5 with Runes (`$state`, `$derived`, `$effect`)
- **Runtime**: Bun
- **Backend/API**: Hono (edge-first API routes, middleware)
- **UI Primitives**: shadcn-svelte (headless, fully customizable). NEVER ship defaults.
- **Charts**: LayerChart (powers shadcn-svelte charts). Composable SVG/Canvas/HTML layers.
- **Animation**: Svelte Motion (`@humanspeak/svelte-motion`) for orchestration. Built-in `svelte/transition` and `svelte/animate` for standard motion. CSS keyframes for loops.
- **Mermaid**: `beautiful-mermaid` for themed SVG. Falls back to native Mermaid `themeVariables`.
- **Styling**: Tailwind CSS v4 extended with CSS custom properties
- **Testing**: Playwright for visual regression and print-layout validation
- **Assets**: Nano Banana for generative imagery and textures

### Deployment Targets
- **Static/GitHub Pages**: `@sveltejs/adapter-static` with prerendered routes
- **Production/Vercel**: `@sveltejs/adapter-vercel` for SSR, edge functions, ISR

## 2. Resource Loading Protocol

Before generating code, scan the user request for trigger keywords. Load the matching
reference file(s) from `references/`. Multiple files can load simultaneously when a
request spans domains.

**Trigger: Landing Pages & Hero Sections**
Keywords: "landing", "hero", "homepage", "above the fold", "first impression", "site title", "headline", "CTA", "conversion", "marketing page", "SaaS page"
Load: `references/landing-page-mastery.md`

**Trigger: Typography & Font Selection**
Keywords: "font", "typography", "typeface", "heading", "text style", "font pair", "display font", "body font", "type scale", "readable"
Load: `references/typography-system.md`

**Trigger: Color System & Theming**
Keywords: "color", "theme", "palette", "dark mode", "light mode", "accent", "brand color", "color scheme", "contrast", "gradient"
Load: `references/color-architecture.md`

**Trigger: Image Craft & Textures**
Keywords: "image", "background", "texture", "dither", "overlay", "photo", "illustration", "banner", "visual", "nano banana", "grain", "noise"
Load: `references/image-craft.md`

**Trigger: Data Visualization & Infographics**
Keywords: "table", "chart", "graph", "data", "dashboard", "analytics", "visualization", "layerchart", "metrics", "infographic"
Load: `references/data-visualization.md`

**Trigger: Motion & Microinteractions**
Keywords: "animation", "motion", "hover", "click", "button", "interaction", "feedback", "transition", "scroll", "parallax", "3d", "tilt", "kinetic", "microanimation", "snap"
Load: `references/kinetic-interactions.md`

**Trigger: Mermaid Diagrams**
Keywords: "mermaid", "flowchart", "sequence diagram", "architecture diagram", "graph viz", "state diagram", "gantt"
Load: `references/mermaid-theming.md`

When NO triggers are detected, apply the Universal Mandates below directly.

## 3. The Anti-Slop Mandate

LLMs converge toward high-probability "safe" patterns. Fight distributional convergence.

**REJECT**: Bootstrap/Tailwind defaults shipped as-is, Inter/Roboto/Arial, purple-on-white, predictable card grids, cookie-cutter heroes, centered-everything layouts.

**EMBRACE**: Intentional typography hierarchies, asymmetric compositions, atmospheric depth, kinetic feedback, editorial grids, geometric eye-guides, print-ready precision.

## 4. Design Thinking (Pre-Code)

1. **Purpose**: What does this solve? Who uses it?
2. **Aesthetic Tone**: Pick ONE and commit: brutalist, neo-brutalist, editorial luxury, retro-terminal, glassmorphism, organic/natural, industrial, art deco/geometric, soft/pastel, maximalist, Swiss modernist, Apple minimal, or any hybrid.
3. **The Memorable Detail**: ONE element the user will remember.
4. **Match Complexity**: Maximalist = elaborate code. Minimalist = surgical precision.

## 5. Universal Mandates (Quick Reference)

Condensed rules. Load reference files for deep implementation.

**Typography**: Distinctive pairings. Weight extremes (100/200 vs 800/900). Size jumps 3x+. Fluid `clamp()`. See `references/typography-system.md`.

**Color**: HSL-based palettes. Color theory harmonies. Semantic tokens for light/dark/custom. Accent at 5-10% viewport. See `references/color-architecture.md`.

**Images**: Never flat backgrounds. Texture layers at 0.05-0.15 opacity with blend modes. Dither for depth. See `references/image-craft.md`.

**Motion**: Every interactive element provides feedback. 150-300ms. Physics easing. See `references/kinetic-interactions.md`.

**Composition**: Vertical scaffolding, asymmetric grids, intentional negative space, grid-breaking bleeds.

**Accessibility**: Semantic HTML, visible focus (`outline: 2px solid var(--accent); outline-offset: 4px`), WCAG AA contrast, ARIA labels, `prefers-reduced-motion`.

**Print**: `@media print` hides nav/buttons, forces white bg, preserves SVG charts, `break-inside: avoid`, `-webkit-print-color-adjust: exact`.

## 6. Workflow

1. **Analyze**: Identify triggers. Load reference files.
2. **Research**: For complex builds, search award-winning sites and patterns.
3. **Architect**: Plan SvelteKit structure. Define CSS tokens.
4. **Code**: Semantic HTML, extended Tailwind, Svelte 5 Runes. Production-ready.
5. **Polish**: Microanimations, textures, hover states, scroll triggers.
6. **Validate**: Print, a11y, responsive.
7. **Iterate**: Playwright screenshots + deliberative refinement.

## 7. Constraint

FORBIDDEN from producing "default-looking" code. Everything must feel custom, bold, intentionally designed. No two designs should look alike. Vary themes, fonts, layouts, and animation approaches across every generation.
