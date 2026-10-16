# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
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
