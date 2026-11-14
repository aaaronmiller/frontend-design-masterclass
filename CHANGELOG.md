# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [v3.0.0] - 2026-11-14 - Rebuilt on Anthropic's 2026-09-03 skill; menus, not mandates

Option A of `docs/frontend-design-masterclass-notes/2026-11-13-v3-proposal.md` in the
parent repository. A breaking change: the entry file, every reference and the stack rule
are new.

### Changed
- `SKILL.md` rebuilt on Anthropic's `frontend-design` skill at commit 41bbe19
  (Apache-2.0, attributed in `NOTICE`): subject grounding, the five AI-default clusters,
  the token plan, one orchestrated moment, restraint, copy, screenshot critique. 44.6 KB
  down to under 15 KB.
- Everything beyond that spine is a menu the agent picks from. Eight references replace
  twelve: `direction`, `color`, `type`, `imagery`, `motion`, `layout`, `data`, `landing`.
- The only mandates are a seven-item floor: responsive from 320 to 1920 px, visible focus,
  reduced motion, AA contrast, nothing invented, a screenshot critique, a lint pass. The
  floor does not dictate page shape.
- No default stack for HTML and artifacts; an existing project keeps its stack.
  SvelteKit, Bun and Hono are a stated default only for a new app with no stack named.
- Frontmatter description is one sentence containing "HTML"; `version: 3.0.0` added.

### Added
- `scripts/deal.mjs`: deals three far-apart themes (fit, contrast, wildcard) from the
  50-theme Hallmark catalog; the agent adds a custom fourth, scores all four, picks one.
- `scripts/lint.mjs`: wraps Hallmark's `sloplint`. Budget gates 20, 58, 59, 77 and 78 are
  off by default; hero-geometry and illustration gates 44a to 44d, 79 and 80 report as
  advice; `--hallmark` restores upstream behaviour. `--render` checks 320 to 1920 px in a
  browser and saves screenshots.
- `vendor/hallmark/`: unmodified `sloplint.mjs`, `sloplint-render.mjs`, `theme.mjs`,
  `photos.json` (755 openly licensed photographs) and 50 theme files with their index,
  from Nutlope/hallmark at 407fa68 (MIT).
- `NOTICE` and `licenses/APACHE-2.0.txt`.

### Removed
- The Visual Floor as a mandate (required hero image on a three-layer stack, dark and
  light toggle, sticky nav with backdrop, entrance moment, scroll reveals, hover motion on
  everything). The three-layer stack survives as one background option in `imagery.md`.
- Font bans, the six-section and one-accent defaults, the two-family minimum, the
  product-type style table, the Variety Test as a mandate, the mandate ledger.
- `references/web-design-themes.md` and `references/hallmark.md`. The theme catalog and
  direct use of the vendored assets replace them.
- Self-contradictions: per-section reveal variety against one orchestrated moment; the
  accented headline keyword against the accented-word tell; required dual themes and a
  fixed three-group palette; glow and gradient chart defaults; uppercase tracked labels
  in table and stat recipes.
- Duplicated catalogs: `microanimations.md`, `motion-craft.md` and `visual-kinetics.md`
  merged into `motion.md`; `data-graphics.md`, `data-visualization.md` and
  `mermaid-theming.md` merged into `data.md`; `color-system.md` into `color.md`;
  `typography.md` into `type.md`; `landing-pages.md` sections 5 and 8 into `landing.md`.

## [v2.7] - 2026-11-09 - Direction exploration, companion skills, motion craft

### Added
- Direction Exploration and System Lock: three scored direction sketches before code,
  reference extraction, a locked token block for pages with four or more sections,
  and a mandate ledger in the delivery report.
- Companion Skills table: taste-skill for the anti-slop audit, redesign-skill for
  existing pages, imagegen for hero and section imagery, imagegen-frontend-web for
  section references, GSAP skills only for scroll choreography. The Visual Floor wins
  any conflict.
- `references/motion-craft.md`: Emil Kowalski's motion rules (MIT, attributed).

### Evidence
- Blind A/B against v2.6 across three pages (an audit report, a simulator, and a
  four-option homepage redesign), eight builds, one independent grader per batch,
  eight criteria scored 1 to 10. v2.7 mean 7.63, v2.6 mean 7.44. v2.7 won two of the
  three pages and produced the top-ranked build on both of those.

## [v2.6] - 2026-11-09 - Masterclass owns new pages; Visual Floor

### Changed
- The masterclass owns visual direction for new pages; Hallmark runs only when named.
- Added the Visual Floor (three-layer hero, structured palette with both modes, motion
  tokens and five-state controls, cohesive navigation, all content visible) and a
  screenshot gate.

## [v2.5] - 2026-10-28 - Hallmark integration and landing-page strategy

### Added
- Route new websites, pages, and app screens to the separately installed Hallmark
  skill; retain the masterclass stack and technical patterns with one visual owner.
- Add `references/hallmark.md` for scope, existing-design boundaries, framework and
  token integration, callable lint commands, and honest verification reporting.
- Extend landing-page conversion guidance with traffic intent, visitor objections,
  evidence beside claims, conditional page shapes, and launch-readiness checks.
- Preserve pinned Elaya source provenance and Elaya/Leonxlnx MIT notices.
- Register the companion reference and dependency in marketplace metadata; update
  the README and package version to match the v2.5 skill.

### Changed
- Resolve Hallmark conflicts explicitly instead of stacking its design gates with
  older masterclass style mandates. Preserve existing application stacks and brands.
- Replace the repeated-nav heuristic with product-appropriate navigation guidance.

## [v2.4] — 2026-10-16 — Theo batch (10 transcripts, Oct 2–16 2026)

Source: 10 full transcripts (`/home/cheta/code/theo-transcripts/raw/`), mined one video at a
time with per-video notes + adversarial review after each set of 4
(`/home/cheta/code/theo-transcripts/notes/`, see INDEX.md). Zero-yield: vRS2leJLAI0,
ND_kRgU_WlY, nYA0yASgaZI (pricing/infra topics, no design content).

### Added
- AI-Generation Loop (§7): small prompts, screenshot verdicts, separate copy pass, tasteful-model draft one, model routing, fix-vs-mocks branch
- Design-Skill Lever (§7): unskilled failure signature (filler text + gross fonts + identical nav), one-skill-at-a-time, top-nav test
- Async-Agent Dashboards (§6): inbox-zero sidebar, dim-working/surface-waiting, queued-steer, disconnect-toggle vs destructive-remove
- No redundant title stacks (§5b + QA #5); bold-lead report copy (§5b)
- Flavor-of-slop + novel entrances (§9 Variety Test); decorative-AI-button ban (QA)
- `:root:has()` recalc ban (§8 checklist); streaming-render rules, 8ms/120Hz budget, docked-anchor (microanimations.md)
- Bar orientation, sort-by-extreme + brand series colors, hover-compare overlay (data-visualization.md)
- Inversion-is-not-dark-theme (color-system.md §5)


## [v2.3] — 2026-10-16

### Added (from official Anthropic `frontend-design` skill, Jun 2026 rewrite + outside critique)
- **Second-Wave Tell Audit** (SKILL.md §4): six banned-by-default patterns with brief-override rule — cream `#F4F1EA` + terracotta `#D97757`, tinted black + single acid accent, broadsheet cargo-cult, template chrome (eyebrows/`·` strings/`WORD — fragment`/default mono labels/`→` everywhere), single-word headline accent, numbered non-sequences. Includes pre-delivery hex audit. Sources: anthropics/skills + anthropics/claude-code plugin docs, HN thread 49330562, New Yorker "A.I.-Design Aesthetic," Ken Imoto rewrite analysis, capitalandcompute "fix-ai-slop" (DESIGN.md + ignore-comment practice).
- **Written-plan + self-similarity review** (§5): compact token system (Color/Type/Layout-ASCII-wireframe/Principles) mandatory before code; strip-nouns genericness test with stated what-changed-and-why before building.
- **§5b Copy Is Design**: user's-words/active-CTAs/no-cleverness/failure-directness rules + read-aloud copy audit.
- **Pre-Delivery Checklist**: second-wave tell + template-chrome items; Post-Generation QA gains Tell audit (#8) and Screenshot audit (#9, incl. motion-restraint check).
- **Fingerprinted Palette** anti-pattern (`references/color-system.md` §10).

### Ported (custom-skills copy was ahead — one-way sync source)
- OKLCH-first Color mandate (§6) + full `references/color-system.md` §1 foundation rewrite (ramps, one-axis dark mode, contrast caveat, fallback, P3).
- Front-End Checklist verifier section (§6) with on-demand curl + project-scoped MCP guidance.
- Off-white `oklch(0.92 0.005 285)` dark-mode text correction.


### Added
- **Card Sickness** subsection in Anti-Slop Mandate (SKILL.md Section 4) — explicit anti-card rules, the #1 LLM frontend failure mode
- **Pill & Clutter Sickness** subsection — rules against decorative pills, stat strips, eyebrow titles, and icon rows
- **Composition Rule** subsection — first viewport must be one composition, brand test, design constraint defaults (1 H1, 6 sections max, 2 fonts, 1 accent, 1 CTA)
- Retro Terminal warning in `references/landing-pages.md` — caveat that terminal style produces consistently poor results across all models
- 8 new anti-patterns in `references/landing-pages.md`: Card Sickness, Pill Cluster Slop, Stat Strip, Eyebrow Title Spam, Style-Name Copy Leakage, Aggressive Hover Inflation, Missing Hover States, Image Dimension Crimes
- Composition Rule + Brand Test + Design Constraints added to Hero Section Anatomy in `references/landing-pages.md`
- Image dimension verification guidance in SKILL.md Section 6 (Imagery and Texture)
- Hover state verification checklist items in Pre-Delivery Checklist
- Nav backdrop/blur scroll behavior check in Pre-Delivery Checklist
- Card sickness, pill, stat strip, eyebrow, image dimension, and copy leakage checks in Pre-Delivery Checklist
- **Animation Variety Mandate** in `references/microanimations.md` — warns against stacked text reveal overuse, uniform staggers, pop-in timing bugs
- **Fixed Nav Scroll Behavior** requirement in `references/microanimations.md` — transparent nav must add backdrop on scroll
- **Image Dimension Verification** section in `references/imagery.md` — checklist for aspect ratio, subject cutoff, visual weight, object-fit
- **Purple-Blue Gradient** anti-pattern in `references/color-system.md` — the #1 "AI-generated" color tell
- **Three Nav Items** and **Identical Layout Syndrome** anti-patterns in `references/landing-pages.md`
- **Variety Test** in SKILL.md Section 9 — each generation must differ in layout, fonts, animation, and flow
- **Post-Generation QA** checklist in SKILL.md Section 9 — 7-point vibe-check after every UI generation

- **Motion Token System** in `references/microanimations.md` — CSS custom properties for all durations and easing curves (`--duration-*`, `--ease-*`)
- **Asymmetric Timing** — enter animations are ~1.25-1.5x longer than exits (MD3 principle)
- **Emphasized Easing Curves** — `--ease-enter` (decelerate) and `--ease-exit` (accelerate) replacing generic `ease` throughout
- **Spring-Based Modal** pattern in `references/microanimations.md` — physically-modeled spring animation for dialogs with CSS-only and Svelte variants
- **Motion System** checklist section in SKILL.md Pre-Delivery Checklist — verifies token usage, asymmetric timing, spring modals

- Added 2026 web design theme reference material and linked it from the skill loading protocol.

### Changed
- Version bump to v2.2
- Anti-Slop REJECT list expanded with card-within-card nesting, decorative status bars, floating card clusters, style name copy leakage
- Anti-Slop EMBRACE list expanded with full-bleed sections and typography-driven hierarchy
- Design Thinking Section 5 now warns against Retro Terminal as default style choice
- Landing page resource description updated to reflect new content (composition rule, brand test, expanded anti-patterns)
- All CSS code examples in `references/microanimations.md` updated to use motion tokens instead of hardcoded values
- Easing reference table (Section 11) restructured around MD3 emphasized curves with asymmetric duration guidelines
- Duration guidelines table now shows separate Enter/Exit columns with token references
- Button, ghost button, nav, header, haptic pattern code examples all use `--duration-*` and `--ease-*` tokens
- Tilt card in `references/visual-kinetics.md` updated to use motion tokens
- SKILL.md Section 6 (Microanimations) updated to mandate motion tokens and asymmetric timing

### Fixed
- Normalized web design theme reference line endings for consistent sync diffs.
