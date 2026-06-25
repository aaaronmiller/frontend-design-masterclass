# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

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
