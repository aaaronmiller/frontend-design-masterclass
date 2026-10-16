---
name: frontend-design-masterclass
description: "Builds distinctive frontend UI with SvelteKit/Bun/Hono. Triggers on: web pages, dashboards, landing pages, apps, artifacts, styling, theming, fonts, animations, charts, dark/light modes."
license: MIT
---

# Frontend Design Masterclass v2.3

Build interfaces that resonate, not just render. This skill enforces bold, intentional
design with a modern high-performance stack. Every pixel must justify its existence.

## 1. Core Stack

- **Framework**: SvelteKit 5 with Runes (`$state`, `$derived`, `$effect`)
- **Runtime**: Bun (server, packages)
- **Backend/API**: Hono (edge-first routes, middleware)
- **UI Primitives**: shadcn-svelte (headless, fully customizable). Override ALL defaults.
- **Charts**: LayerChart (built on Layer Cake, powers shadcn-svelte charts)
- **Animation**: Svelte Motion (`@humanspeak/svelte-motion`) for complex orchestration.
  Built-in `svelte/transition` and `svelte/animate` for standard motion. CSS keyframes
  for simple loops.
- **Mermaid**: `beautiful-mermaid` for themed SVG rendering with Shiki compatibility
- **Styling**: Tailwind CSS v4, extended with CSS custom properties
- **Testing**: Playwright for visual regression
- **Assets**: Nano Banana for generative imagery and textures
- **Deployment**: `@sveltejs/adapter-static` for static, `@sveltejs/adapter-vercel` for SSR

## 2. Intent Identification (Pre-Resource)

Before loading references, classify the request across three dimensions. This shapes
every subsequent design decision.

### A. Product Type
Identify what is being built. Each product type implies style, color, and layout norms.

| Product Category | Recommended Styles | Color Direction |
|---|---|---|
| SaaS / B2B / Productivity | Swiss Grid, Flat + Glassmorphism | Trust blue + accent contrast |
| E-commerce / Retail | Vibrant Block, Feature-Rich Showcase | Brand primary + success green |
| E-commerce Luxury | Liquid Glass, Cinematic | Dark neutrals + gold/champagne accent |
| Fintech / Crypto | Data-Dense, Dark Mode OLED | Deep navy/charcoal + neon accent |
| Healthcare / Wellness | Organic Flow, Soft UI | Soft teal/sage + warm neutral |
| Creative / Portfolio | Neo-Brutalist, Kinetic Typography | High-contrast + one bold accent |
| Gaming / Entertainment | Cyberpunk, HUD/Sci-Fi | Deep dark + neon multi-accent |
| Education / Docs | Editorial Broadsheet, Minimal | Warm paper + ink hierarchy |
| AI / ML Platform | Aurora UI, Motion-Driven | Gradient primary + dark surface |
| Dashboard / Analytics | Bento Grid, Data-Dense | Neutral surface + semantic data colors |

Use this table as a starting compass, not a constraint. Always customize.

### B. Style Intent
Determine the aesthetic target from context cues, explicit request, or product type.
See `references/landing-pages.md` Section 3 for 8 timeless styles with full specs.

### C. Audience and Context
Consider who uses this and where. Enterprise audiences tolerate density; consumer
audiences need breathing room. Mobile-first changes everything about touch targets,
typography scale, and animation intensity.

## 3. Resource Loading Protocol

After identifying intent, scan the request for trigger keywords. Load matching
reference files from `references/` to access deep implementation patterns.

### Landing Pages and Hero Sections
**Triggers**: "landing page", "hero", "above the fold", "homepage", "site title",
"headline", "CTA", "call to action", "conversion", "first impression"
**Load**: `references/landing-pages.md`
**Provides**: Hero section anatomy with composition rule and brand test, design
constraint defaults, 8 landing page styles (Apple Keynote, Editorial Broadsheet,
Geometric Playground, Cinematic Immersive, Swiss Grid, Neo-Brutalist, Organic Flow,
Retro Terminal — with caveat), visual flow patterns (Z/F/Golden/Diagonal), conversion
architecture, mobile-first hero strategy, expanded anti-patterns catalog, code patterns.

### Typography and Font Selection
**Triggers**: "font", "typography", "typeface", "heading", "text style", "font pairing",
"type scale", "letter spacing", "line height", "readable", "display font"
**Load**: `references/typography.md`
**Provides**: Display/body/mono font catalogs with pairing recommendations, type scale
construction (mathematical ratios), responsive typography with `clamp()`, variable fonts,
font loading and performance, typographic details (tracking, hanging punctuation, optical
alignment), the readability checklist.

### Color System and Theming
**Triggers**: "color", "palette", "theme", "dark mode", "light mode", "accent",
"color scheme", "brand colors", "contrast", "hue", "saturation"
**Load**: `references/color-system.md`
**Provides**: Structured 3-group palette architecture (Base Tones, Primary Tones,
Accent Tones), color theory harmony models, palette generation workflow, light theme
construction, dark theme construction (independent rules), theme selector with bonus
themes (warm/cool/mono/high-contrast variants), semantic color tokens, CSS custom
property system, WCAG contrast compliance.

### 2026 Web Design Theme Selection
**Triggers**: "theme direction", "visual theme", "web design theme", "2026 design",
"style options", "aesthetic options", "theme examples", "design themes"
**Load**: `references/web-design-themes.md`
**Provides**: 20 complete 2026 web design theme references with palettes, typography,
imagery, animation, navigation, layout, card, spacing, pattern, anti-pattern, variant,
and best-fit guidance.

### Imagery, Textures, and Backgrounds
**Triggers**: "image", "background", "texture", "photo", "illustration", "dithering",
"overlay", "parallax background", "hero image", "Nano Banana", "duotone", "pattern"
**Load**: `references/imagery.md`
**Provides**: Image role taxonomy, sizing and format strategy, three-layer background
composition, dithering algorithms (Atkinson/Floyd-Steinberg/Bayer), overlay and
geometric bounding (diagonal lines, clip-path shapes, corner marks, grid overlays),
movement in imagery, artistic style selection (photorealistic/illustrated/generative/
mixed media/duotone), button and banner imagery, Nano Banana integration, AI image
prompting guide.

### Data Graphics, Tables, Charts, and Infographics
**Triggers**: "table", "chart", "infographic", "data", "statistics", "metrics",
"dashboard KPI", "comparison", "timeline", "process flow", "number display"
**Load**: `references/data-graphics.md`
**Provides**: Table design beyond defaults (no-grid tables, status indicators, sparkline
cells, sticky headers, emphasis techniques), chart aesthetics and storytelling (gradient
fills, glow effects, annotations, grid replacements), Mermaid diagram integration,
infographic patterns (number blocks, timelines, comparison grids, process flows),
AI prompting for data visuals, print-ready data graphics.

### Microanimations and Interactive Controls
**Triggers**: "animation", "hover", "click", "button", "toggle", "feedback", "ripple",
"loading", "skeleton", "transition", "snap", "magnetic", "scroll animation",
"microinteraction", "responsive control", "state transition", "form animation"
**Load**: `references/microanimations.md`
**Provides**: Complete 5-state button system (default/hover/active/focus/disabled),
navigation feedback (menu items, hamburger, tab indicator), scroll-driven animations
(staggered reveal, progress bar, counter animation), form interactions (floating labels,
validation feedback, custom checkboxes), loading states (skeletons, success/error),
page transitions, haptic-feel patterns (press, bounce, card lift, ripple), snap and
magnetic behaviors, performance rules, easing and timing reference table.

### Visual Motion and Depth
**Triggers**: "3d", "depth", "parallax", "tilt", "fake 3d", "spatial", "kinetic",
"motion", "glassmorphism", "holographic"
**Load**: `references/visual-kinetics.md`
**Provides**: Animation tier system (CSS -> Svelte -> Svelte Motion -> GSAP), holographic
tilt card with glare, parallax hero with Nano Banana layers, glassmorphism 2.0, kinetic
typography (reveal mask, marquee, split text), scroll-triggered reveals, physics-based
easing, magnetic button, performance checklist.

### Data Visualization (Charts and Dashboards)
**Triggers**: "layerchart", "chart component", "dashboard layout", "bento grid",
"sparkline", "real-time", "neon chart", "editorial chart"
**Load**: `references/data-visualization.md`
**Provides**: LayerChart composable patterns, shadcn-svelte chart integration, chart
aesthetic modes (Neon/Editorial/Minimal), table styling recipes, Bento grid dashboard
layouts, sparklines, real-time data patterns, fallback libraries.

### Diagrams (Mermaid)
**Triggers**: "mermaid", "diagram", "flowchart", "sequence diagram", "architecture diagram"
**Load**: `references/mermaid-theming.md`
**Provides**: beautiful-mermaid setup and theming, Shiki integration, native Mermaid
`themeVariables` mapping, SVG post-processing (texture overlay, shadows, borders),
SvelteKit component pattern, diagram type styling notes, print considerations.

When **multiple triggers** are detected, load all relevant references.
When **no triggers** are detected, apply the Universal Mandates below directly.

## 4. The Anti-Slop Mandate

LLMs converge toward high-probability "safe" design patterns from training data.
This is distributional convergence. Fight it deliberately.

### Card Sickness (Critical)
The single most common LLM frontend failure: wrapping everything in rounded-corner
cards/boxes regardless of design necessity. Homepages are NOT dashboards.
- **Default to cardless layouts.** Sections should use full-bleed backgrounds,
  typographic hierarchy, and whitespace to create visual separation — not containers.
- Cards are acceptable ONLY for: repeated data items (product grids, team members),
  interactive elements that need visual affordance, or actual dashboard widgets.
- If you catch yourself generating cards on a landing page hero, STOP and restructure
  to full-bleed editorial layout.
- No hero cards. No center-column hero wrapped in a box with a brief CTA inside.

### Pill & Clutter Sickness
- **No pill clusters**: Do not use pill-shaped tags/badges for non-functional data.
  Status pills like "AI Powered" or "New" that serve no interactive purpose are clutter.
  Remove all decorative pills on first pass. Fix any layout shifts that result.
- **No stat strips**: Rows of meaningless metrics (e.g., "10K+ users | 99.9% uptime |
  50+ integrations") below the hero that add nothing and scream "AI-generated."
- **No eyebrow titles**: Small category labels above headlines ("Our Approach",
  "Why Choose Us") that add zero value. If the headline is strong, it needs no preface.
- **No icon rows**: Lines of icons with labels restating what the heading already said.

### Composition Rule
The first viewport must read as ONE composition — not a dashboard, not a collection
of cards. Unless you are literally building a dashboard.
- **Brand test**: If the first viewport could belong to any other brand after removing
  the nav, the branding is too weak. Redesign.
- **Design constraint defaults**: 1 H1 headline, no more than 6 sections total, 2
  typefaces maximum, 1 accent color, 1 primary CTA above the fold.

**REJECT**: Bootstrap/Tailwind defaults shipped as-is, Inter/Roboto/Arial/system fonts,
purple-on-white color schemes, predictable card grids, cookie-cutter hero sections,
centered-everything layouts, stock photography, generic gradients, emoji icons in UI,
magic number spacing, invisible hover states, layout-shifting scale transforms on hover,
light-mode glass cards with <30% opacity, muted text below gray-500 contrast,
card-within-card nesting, decorative status bars, floating card clusters in hero areas,
design style names leaking into copy (e.g., a "brutalist" page calling itself "brutal").

**EMBRACE**: Intentional typography hierarchies, asymmetric compositions, atmospheric
depth, kinetic feedback, editorial grids, geometric eye-guides, print-ready precision,
custom color palettes built from color theory, distinctive font pairings, SVG icon
systems (Lucide, Heroicons) with consistent viewBox, cursor-pointer on every clickable
element, stable hover states using color/opacity (not layout-disrupting transforms),
full-bleed sections with meaningful whitespace, typography-driven visual hierarchy.

### Second-Wave Tell Audit (post-Anthropic, Jun 2026)

The official Anthropic `frontend-design` skill (Jun 2026 rewrite) names the tells its own
models default to. These patterns are now *fingerprinted*: any reviewer — human or scanner —
reads them as "Claude made this" rather than as brand choices. Treat every one below as
banned-by-default. A ban is lifted only when the brief pins that exact look AND you record
the override (what the brief said, verbatim) next to the decision.

- **Cream + terracotta editorial**: warm cream background (near `#F4F1EA`) with high-contrast
  serif display and terracotta/warm-clay accent (near `#D97757`). The single most
  fingerprinted palette on the web. If the brief wants "warm editorial," spend the boldness
  elsewhere: pick ink-on-paper `#FFFFFF`/charcoal, or push the accent to ochre/olive/burgundy.
- **Near-black + single acid accent**: tinted near-black (`#0B0B0B`, `#111`) with one bright
  acid-green or vermilion highlight. Reads as "edgy AI startup" regardless of subject.
  Prefer deep navy/charcoal with a *two-stop* accent system (primary + supporting tone).
- **Broadsheet cargo-cult**: hairline rules, zero border-radius everywhere, dense
  newspaper-like columns on non-editorial content. Typography-driven layout is a technique,
  not a costume — earn it with real long-form content or drop it.
- **Template chrome**: tracked-out ALL-CAPS eyebrow label above *every* heading; meta strings
  joined with middle dots (`A · B · C`); labels built as `WORD — fragment` with a spaced em
  dash; a monospace face for small data labels by default; a `→` appended to every link and
  button. Each is legitimate once; all five together is a signature.
- **Single-word headline accent**: one word in italic/bold/a different color inside an
  otherwise neutral headline. The commonest typographic tell; style the whole line or use
  scale/weight contrast instead.
- **Sequential numbering of non-sequences**: `01 / 02 / 03` markers on content that is not
  actually a stepped process or timeline. Before numbering, check the content really is
  a sequence.

**Hex audit.** Before delivery, search the stylesheet for `#F4F1EA` ±3% (cream tell),
`#D97757` ±10% (terracotta tell), `#0B0B0B`/`#111111` (tinted-black tell). Any hit must
carry a recorded brief-override or be re-tokened.

**Why this section exists alongside the Variety Test (Section 9):** the Variety Test stops
*your own* outputs from converging; this audit stops your outputs from converging with
*every other Claude user's*. Both gates must pass.

full-bleed sections with meaningful whitespace, typography-driven visual hierarchy.

Before writing code, commit to a direction — **in writing, before code**:

1. **Purpose**: What does this solve? Who uses it?
2. **Product Type**: Classify using the table in Section 2A for initial direction.
3. **Aesthetic Tone**: Pick ONE and commit fully. See `references/landing-pages.md`
   Section 3 for proven styles. Or invent a hybrid. Avoid Retro Terminal unless
   explicitly requested — it almost always produces cringe results across all models.
4. **Color Direction**: Select primary hue, derive accent via color theory harmony.
   See `references/color-system.md` Section 3 for the full workflow.
5. **Typography**: Choose display + body + mono trio from
   `references/typography.md` catalogs.
6. **The Memorable Detail**: Identify ONE element the user will remember.
7. **Complexity Match**: Maximalist = elaborate code. Minimalist = surgical precision.

Write the plan down as a compact token system before touching code:
**Color** (4–6 named values), **Type** (faces and their roles), **Layout** (one-sentence
concept plus a quick ASCII wireframe with alignment guidance: left, center, or
justified — and why), **Principles** (what makes this page unique).
Then **review the plan against the brief before building**: if any part reads like the
generic default you would produce for a *similar* prompt (run the self-similarity test —
strip product nouns and ask whether the plan still fits; if yes, it is generic), revise
that part, state what changed and why, and only then write code. See the Second-Wave
Tell Audit above for the patterns this review must catch.

## 5. Design Thinking (Pre-Code)

## 5b. Copy Is Design (words are load-bearing)

Copy makes a page feel as templated as its palette. Bring the same minimalism to words
as to spacing: every string must earn its place, do exactly one job, and sound like the
product — never like the system that built it.

- **User's words, not the system's.** Name things by what users understand, not how the
  stack works. Plain verbs, sentence case, no filler. Match tone to brand and audience.
- **Active, specific CTAs.** A button says what happens: "Save changes," not "Submit."
  One action keeps one name through the whole flow ("Publish" → toast says "Published").
- **No cleverness tax.** Specific and legible beats witty. Never let a style name leak
  into copy (see REJECT list); never narrate the design to the reader.
- **Failure and emptiness direct, never decorate.** Errors state what went wrong and how
  to fix it, in the interface's voice — no apologies, no vagueness. Empty states invite
  the next action.
- **No redundant title stacks.** AI output ships filler subtext under headings and
  subtitle echoes of the title above them ("full of useless subtext"). Above the fold,
  every heading gets ONE line — title or subtitle, never both saying the same thing.
  Redundant stacks read as cringe, not completeness. Reclaim the vertical space for
  content (compress the top nav while there).
- **Copy audit (add to Post-Generation QA):** read every headline aloud. If any line could
  sit unchanged on a competitor's page, rewrite it with one concrete noun from the brief.



## 6. Universal Aesthetic Mandates

### Typography
Select distinctive, characterful pairings. Load from Google Fonts or Fontsource.
See `references/typography.md` for full font catalogs and pairing strategies.
NEVER use Inter, Roboto, Open Sans, Lato, or default system fonts unless heavily modified.
NEVER converge on Space Grotesk across generations.

**Font choice is the cheapest taste signal.** No cringe defaults is the minimum bar for shippable AI UI — a build can survive weak layout, but gross fonts mark it as slop instantly (Theo, Haiku test: "I like the fonts it chose. It's not picking cringe fonts as much as models used to"). Calibrate expectations honestly: cheap-model output is "usable, not great" — always budget a human taste pass on top.


### Color (The Structured Palette)
Build a 3-group palette: Base Tones, Primary Tones, Accent Tones.
**Author every token in `oklch()`, not hex or hsl.** sRGB is not perceptually uniform, so a
hand-built hsl ramp comes out visually uneven across hues; OKLCH's L channel is uniform, which
is what makes accessible ramps and one-axis dark mode possible.
See `references/color-system.md` for the complete system, the ramp recipe, the sRGB fallback,
and the P3 progressive enhancement.
Light themes: hard shadows, heavy typography, thin lines.
Dark themes: colored glows, off-white text `oklch(0.92 0.005 285)`, subtle surface gradients.
### Verify against the Front-End Checklist

483 rules across accessibility, SEO, performance, HTML, CSS, JavaScript, images, security,
testing, privacy and i18n. Use it rather than recalling best practice from memory, which is
where stale advice comes from.

**Call it on demand — do not register it globally.** It is a remote HTTP endpoint, so there
is no local process and nothing to keep resident. Invoking it directly costs nothing when
unused, whereas a global MCP registration puts 11 tool schemas in the context of every
session, frontend or not.

```bash
curl -sX POST https://mcp.frontendchecklist.io \
  -H 'Content-Type: application/json' -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call",
       "params":{"name":"review_code","arguments":{"code":"<paste>","language":"css"}}}'
```

Swap `review_code` for any of: `audit_url` (a running page), `get_workflow` (ordered
checklist for a phase), `search_rules`, `get_rule`, `check_rule`, `fix_rule`, `explain_rule`,
`list_categories`, `get_checklist_rules`, `get_quick_reference`.

If you would rather have it as tools, register it **project-scoped** in the frontend repo
only, so it is absent from every other session:

```bash
claude mcp add --scope project --transport http frontend-checklist https://mcp.frontendchecklist.io
```

Pick the workflow from the work in hand:

| situation | workflow slug |
| --- | --- |
| about to ship | `launch-checklist` |
| page feels slow | `core-web-vitals`, then `performance-quick-wins` |
| marketing or content page | `seo-audit` |
| any public-facing UI | `accessibility-essentials` |
| markup review | `html-foundations` |
| heavy imagery | `image-optimization` |
| forms, auth, user data | `security-audit`, `privacy-and-consent` |
| full pre-release sweep | `comprehensive-audit` |

Rules also render on the site, e.g. <https://frontendchecklist.io/rules/css/color-oklch>.

Colour tokens belong in `oklch()`, not hex or hsl: sRGB is not perceptually uniform, so an
hsl ramp is visually uneven across hues while OKLCH's L channel is not. Chrome 111+,
Firefox 113+, Safari 15.4+; emit an `hsl()` fallback first if older browsers are in scope.

This is a verifier, not a design system — it will not tell you a layout is generic. Run it
after the design decisions are made.

### Imagery and Texture
Never use flat, solid-color backgrounds for hero sections.
See `references/imagery.md` for the three-layer composition technique, dithering
algorithms, and Nano Banana integration patterns.
When placing images, verify dimensions and aspect ratios. LLMs consistently produce
bad image crops — wrong dimensions, subjects cut off, empty space where visual weight
should be. Manually check image placement and fix after generation.

### Microanimations (Mandatory)
Every interactive element must provide motion feedback.
See `references/microanimations.md` for the complete 5-state button system,
scroll-driven animations, haptic-feel patterns, and **motion token system**.
All durations and easing curves MUST use CSS custom property tokens (`--duration-*`,
`--ease-*`). NEVER hardcode `transition: 0.3s ease` — use the defined tokens.
Enter animations use `--ease-enter` (decelerate), exits use `--ease-exit` (accelerate).
Enters are always slightly longer than exits (asymmetric timing).

### Spatial Composition
Vertical scaffolding, asymmetry, negative space, grid-breaking elements.
See `references/landing-pages.md` Section 4 for visual flow patterns.

### Async-Agent Dashboards (sidebar, status, steering)

For UIs supervising long-running agents/threads (dev dashboards, queue sidebars),
attention is the scarce resource — design for triage, not surveillance (Theo,
agent-maxing setup, Oct 2026):

- **Inbox-zero sidebar.** A thread list is an inbox: settle/archive by default, never
  accumulate. Completed work must visibly leave the active list — and search must be
  trustworthy enough to retrieve it, or the sidebar becomes an un-triagable pile
  ("turn your sidebar into inbox zero... end your day with all your threads gone").
- **Dim the working, surface the waiting.** In-progress threads go semi-transparent;
  full emphasis only on needs-human states (done / waiting-for-input). "There are few
  worse uses of your time than watching an agent as it works" — never design UI that
  invites watching work happen.
- **Queued-steer control.** Long tasks need a visible pending slot: message shows as
  queued, auto-sends at the next tool-call boundary, with a steer-to-send-now override.
- **Disconnect is a toggle; remove is destructive.** Temporary-vs-permanent must be
  visually distinct: disconnect reads reversible (toggle), remove is always available
  and explicitly marked permanent. Never merge them into one ambiguous control.

### Accessibility (Non-Negotiable)
- Semantic HTML: `<article>`, `<section>`, `<nav>`, `<aside>`, `<main>`
- Focus states: NEVER `outline: none`. Style as `outline: 2px solid var(--accent); outline-offset: 4px`
- WCAG AA contrast minimum. See `references/color-system.md` Section 9.
- ARIA labels on all custom interactive components
- `prefers-reduced-motion`: disable parallax, tilt, complex animations
- Color must never be the sole indicator of state
- All images need alt text; form inputs need labels

### Print and PDF
Sites must double as printable reports when `@media print` is active.
Hide nav/footer/buttons, force white background, preserve SVG charts,
use `break-inside: avoid` on cards/charts/tables.

## 7. Implementation Workflow

1. **Identify**: Classify product type, style intent, audience (Section 2).
2. **Load**: Scan for resource triggers. Load relevant reference files (Section 3).
3. **Research**: For complex builds, conduct deep research (up to 10 web searches)
   on comparable award-winning sites, patterns, and library capabilities.
4. **Architect**: Plan SvelteKit file structure. Define CSS variable tokens.
5. **Code**: Write semantic HTML, extended Tailwind, Svelte 5 Runes.
   Production-ready, no placeholders.
6. **Polish**: Apply microanimations, texture layers, hover states, scroll triggers.
7. **Validate**: Run the Pre-Delivery Checklist (Section 8). Fix all failures.
8. **Iterate**: Compare against the aesthetic vision. Adjust until it pops.

### Design-Skill Lever (fix the system, not the symptoms)

Unskilled AI output has a recognizable failure signature: filler text everywhere, gross
default fonts, the same awful top nav on every generation (Theo, skill on/off test, Oct
2026: "If I turn it off, you get a lot more cringe... every single one of them" ships
the identical nav). Patching each symptom wastes turns — enable the design skill (this
one, or the official Anthropic `frontend-design` skill: "definitely try turning that on")
and the whole signature clears at once. One design skill at a time: stacking taste/style
skills regresses output back to the generic layout ("I don't recommend the taste skill...
back to... weird cringe top navs"). Verify with the top-nav test: generate twice; if
both share a nav, the skill isn't loaded.

### AI-Generation Loop (small prompts, screenshot verdicts)

When iterating UI with an AI model, many small steers beat one batched mega-prompt —
the loop matters more than the model's taste. A weaker model inside a tight human loop
out-designs a stronger model fired once and accepted (Theo, "Slopolytics" build, Oct 2026:
Astra is "way, way, way, way worse at design than the anthropic models," yet the
in-the-loop result was better — "design is all about how users interact with and
perceive things," and only the loop exercises perception).

- **Screenshot + blunt verdict.** The highest-bandwidth steering signal is a screenshot
  plus accept/reject ("not acceptable"; "vertical bars make it all fit fine on a normal
  screen"). Picture first, words second. For uncertain fixes, branch explicitly: fix it
  directly and send a screenshot back, or produce mocks for joint decision — never a
  wall of text describing options (Theo: "hand the screenshot to the agent and say 'Fix
  it'... make me a few mocks... and we can decide between them").
- **Shrink the batch.** Send one change at a time; watch it land before steering the next.
  Twenty-item change lists regress; single-issue turns compound.
- **Separate the copy pass.** Layout first, then a dedicated cheap pass: "make the copy
  better." Never bundle wording into structural prompts.
- **Reserve the tasteful model for draft one — route UI passes through taste, logic through anything.** Models differ in visual taste more than in correctness: one can be functionally right yet produce "sinfully ugly" generic UI from the same prompt another renders beautifully (Theo, Muse-vs-Claude test, Oct 2026). Refinement loop runs on the fastest/cheapest model that follows instructions.

## 8. Pre-Delivery Checklist

Run this before delivering any UI code. Every item is a known failure mode.

### Visual Quality
- [ ] No emojis used as UI icons (use Lucide or Heroicons SVGs)
- [ ] All icons from a single consistent set with matching viewBox (24x24)
- [ ] Brand logos verified against official sources (Simple Icons)
- [ ] Hover states cause NO layout shift (use opacity/color, not scale transforms)
- [ ] No default Tailwind color classes without customization
- [ ] Typography pairing is intentional and loaded (not system fallback)
- [ ] No card sickness: landing pages use full-bleed sections, NOT card wrappers
- [ ] No orphan pills: remove all decorative pill badges that serve no function
- [ ] No stat strips or eyebrow titles above headlines
- [ ] Images have correct dimensions and aspect ratios (no bad crops or cutoffs)
- [ ] No decorative AI buttons: every model-picker / "AI" entry point is functional and on-brand — a dead or cringe button damages trust more than its absence (Theo: "every time the Gemini button appears in some app... it scares me and is often not functional")
- [ ] Second-wave tells cleared: no cream `#F4F1EA` + terracotta `#D97757` default, no tinted-black `#0B0B0B`/`#111` + single acid accent, no broadsheet costume on non-editorial content

- [ ] Template chrome varied: not every heading carries an ALL-CAPS eyebrow; no `A · B · C` meta strings, `WORD — fragment` labels, default mono data labels, or `→` on every link by habit

### Interaction
- [ ] Every clickable element has `cursor-pointer`
- [ ] Every interactive element has visible hover feedback
- [ ] Hover states verified on ALL elements that visually suggest interactivity
  (if it looks clickable, it must have a hover state — missing hovers reveal AI slop)
- [ ] Transitions use 150-300ms duration (never >500ms for UI, never 0ms)
- [ ] Focus states are visible and styled (not browser defaults, never removed)
- [ ] Touch targets are minimum 44x44px on mobile
- [ ] Nav backdrop/blur appears on scroll so nav doesn't clash with content below

### Light/Dark Mode
- [ ] Light mode: text contrast passes WCAG AA (4.5:1 minimum)
- [ ] Light mode: glass/transparent elements use sufficient opacity (bg-white/80+)
- [ ] Light mode: borders use gray-200 or darker (not white/10)
- [ ] Dark mode: text uses off-white (#E8E8E8), not pure white
- [ ] Dark mode: surfaces use subtle gradients, not flat solid colors
- [ ] Both modes tested; no invisible elements in either

### Layout
- [ ] Floating nav has spacing from edges (not flush top-0 left-0 right-0)
- [ ] Content below fixed nav has compensating padding
- [ ] Consistent max-width container used throughout (max-w-6xl or max-w-7xl)
- [ ] No horizontal scroll on mobile (test at 320px)
- [ ] Responsive breakpoints tested: 320px, 768px, 1024px, 1440px

### Accessibility
- [ ] Semantic HTML elements used (`article`, `section`, `nav`, `main`)
- [ ] All images have descriptive alt text
- [ ] All form inputs have associated labels
- [ ] Color is never the only state indicator
- [ ] `prefers-reduced-motion` disables animations and parallax
- [ ] Keyboard navigation works for all interactive elements

### Motion System
- [ ] Motion tokens (`--duration-*`, `--ease-*`) defined in `:root`
- [ ] No bare `ease`, `ease-in-out`, or hardcoded durations — use tokens throughout
- [ ] Enter animations use `--ease-enter` (decelerate), exits use `--ease-exit` (accelerate)
- [ ] Enter durations are ~1.25-1.5x exit durations (asymmetric timing)
- [ ] Modals/dialogs use spring easing (`--ease-spring`) on enter
- [ ] Animations use GPU-composited properties only (transform, opacity)

### Performance
- [ ] Fonts loaded with `display: swap` or preloaded
- [ ] Images use modern formats (WebP/AVIF) with width/height set
- [ ] No layout thrashing from scroll event handlers
- [ ] Print stylesheet hides nav/footer, forces white background
- [ ] No broad selectors forcing full style recalc: never `:root:has(...)`, universal selectors, or unscoped `:has()` on mutation-heavy subtrees — one root `:has()` cost 24ms per DOM change in a real audit (Theo, Claude perf thread, Oct 2026). Scope selectors to the smallest subtree that needs them.

## 9. Constraint

You are FORBIDDEN from producing "default-looking" code. Everything must feel custom,
bold, and intentionally designed for the specific context. No two designs should look
alike. Vary themes, fonts, layouts, and animation approaches across every generation.

### The Variety Test
If you generate multiple pages or redesign within a session, each output MUST have:
- A different layout structure (not just a color swap)
- A different font pairing
- A different animation approach
- A different section flow (not the same hero -> 3-cards -> CTA -> footer)

Identical structure with different colors is the hallmark of a model with too few
internal templates. You have the capability to produce genuinely different designs.
Use it.
Reward genuinely novel entrances: a micro-entrance nobody has seen before is the mark of non-slop output ("I haven't seen anything like that in one of these demos before... It's different, but it's cool" — Theo, Haiku test). Clearing the bar is not the bar.
Novelty counts: a distinct visual flavor — even from a weaker hand — beats shipping the same recognizable "distillation" look every model converges on (Theo on a generic-but-novel UI: "a different flavor of slop... it doesn't taste like yet another claude distillation"). Different must mean *unrecognizable as AI output*, not just rearranged.

### Post-Generation QA
After generating any UI, run a quick vibe-check:
1. **Card audit**: Are there cards that shouldn't be cards? Remove them.
2. **Pill audit**: Are there decorative pills/badges? Remove them.
3. **Hover audit**: Does every clickable-looking element have a hover state?
4. **Nav audit**: Does the nav have exactly 3 items by default? Vary it.
5. **Copy audit**: Did the design style name leak into the copy? Could any headline sit unchanged on a competitor's page? Rewrite with a concrete noun from the brief. Any redundant title+subtitle stack saying the same thing? Cut to one line.
6. **Image audit**: Are images cropped correctly with good visual weight?
7. **Color audit**: Is it defaulting to purple-blue gradients?
8. **Tell audit**: Cream + terracotta? Tinted black + acid accent? Broadsheet costume? Template chrome (eyebrows everywhere, `·` strings, `→` on every link, single-word headline accent, numbered non-sequences)? Any hit needs a recorded brief-override.
9. **Screenshot audit**: Screenshot the page and review the image, not the code — a picture is worth 1000 tokens. Check motion restraint (one orchestrated moment, not scattered reveals) and confirm the memorable detail lands.

Claude is capable of extraordinary creative work. Commit fully to the vision.
