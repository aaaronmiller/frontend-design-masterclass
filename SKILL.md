---
name: frontend-design-masterclass
description: "Designs and builds distinctive web pages, UI and HTML output."
license: "MIT, with Apache-2.0 and MIT third-party portions (see NOTICE)"
version: 3.0.0
---

<!-- The five spine sections are Anthropic's frontend-design skill (anthropics/skills@41bbe19, Apache-2.0), modified. See NOTICE. -->

# Frontend Design Masterclass

Approach this as the design lead at a design studio known for giving every client a distinct visual identity that is not mistaken for anyone else's. This client has already rejected proposals that felt cliché or templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take aesthetic risk if justified.

This file has three parts. The spine (the next five sections) is how to think and applies to every job. The floor is the only list of requirements. The menus are optional depth: pick what this brief needs and leave the rest unread. `<skill-dir>` below is the folder that holds this file.

## Ground your designs in the subject matter

If the brief does not identify what the product or subject matter is, identify it yourself before designing, and confirm with the client. You can come up with one concrete subject, the design's audience, and the design's primary job, as a proposal. If there's any information in your memory about the client's preferences or context about what they're building, use that as a hint. The subject's industry, subject matter, materials, and vernacular are where distinctive visual choices come from: a design for a toy for girls aged 8 to 11 will be very aesthetically different from a dashboard for financial analysts. Build with the brief's real content and subject matter throughout.

## Design principles

For web designs, the hero is the first thing viewers will see. Open with the most characteristic thing in the subject's world, in the form that is most appropriate: a headline, an image, an animation, a live demo, an interactive moment, or other treatments. Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the default treatment, so only use it if that's truly the best option.

Typography carries the personality of the page. You don't need a different typeface for display or headline text and body content: use one family or two, and if two, make them clearly distinct.

Choose your typefaces deliberately, not the default families you would reach for on any other project, and set a clear type scale following the default guidance of The Elements of Typographic Style with intentional weights, widths, and spacing. When type is used as a headline or visual element, use the type treatment itself as an active part of the design, not a neutral delivery vehicle for the content.

Default to line lengths of less than 80 characters. Serif typefaces can have slightly longer line lengths; give serif body text slightly more line-height than a sans-serif.

Avoid these default typographic treatments; they are the commonest tells of a generated page:
- Accenting just a single word or phrase in a headline, like putting one word in italic/bold or a different color.
- Using all caps for labels.
- Adding unnecessary typographic labels above content.

Visual structure is information. Structural devices like outlines, borders, numbering, eyebrows, dividers, labels, etc., encode useful information about the content rather than decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence, like a stepped process or a timeline. Before adding numbered markers, check the content really is a sequence.

Use non-user-triggered motion sparingly and deliberately, only to draw attention. A single orchestrated moment (one page-load sequence or one reveal) lands better than scattered effects; fade-and-slide-up entrances on each section and hover transitions on every card are the generic default and read as AI-generated. Motion that answers a person's action (opening, expanding, confirming) is welcome when it shows what changed.

Consider written content carefully. Often a design brief may not contain real content, and it's up to you to come up with copy and placeholder content. Copy can make a design feel as templated as the design itself. See the below section on writing for more guidance.

## Process: plan, review against the brief, build, critique

For calibration, AI-generated design right now clusters around some traits:
1. a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta or warm-clay accent (often near #D97757, Anthropic's own Claude-interaction accent, so on a user's brief it reads as a tell);
2. a near-black background with a single bright acid-green or vermilion accent;
3. a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns;
4. the SaaS-card kit: content chopped into identical rounded cards, one border-radius on everything regardless of hierarchy, the same soft grey shadow (rgba(0,0,0,.1)) under each, and gradient washes as decoration;
5. template chrome that appears whatever the subject: a tracked-out ALL-CAPS eyebrow label above every heading; meta strings joined with middle dots ('A · B · C'); labels built as 'WORD — fragment' with a spaced em dash; tinted near-black (#0B0B0B, #111) standing in for black; a monospace face for small data labels; a '→' appended to link and button text.

All traits are legitimate for some briefs, but they are defaults rather than choices, and they appear regardless of subject. Where the brief pins down a visual direction, follow it exactly: the brief's own words always win, including when it asks for one of these looks. Where it leaves an axis free, don't spend that freedom on one of these defaults. As with a hired human designer, there's often a careful balance between doing what you're good at and taking each project as a chance to experiment and learn.

**Deal before you plan.** Your first idea is the median of your training data, and a ban only moves the median; choosing among far-apart options moves you off it. When the look is free, run `node <skill-dir>/scripts/deal.mjs "<the brief in a sentence>"`. It deals three themes from a catalog of 50 (best fit, contrast, wildcard). Add a fourth direction of your own, drawn from the subject alone. Sketch each in a few lines, score all four against the subject, the audience and the job, pick one, and say in a line why the others lost. A theme is a material (tokens, type voice, surfaces), never a layout, and you may bend it. Skip the deck when the brief or an existing design system already pins the look. Method and scoring: `references/direction.md`.

Work in two passes. First, brainstorm a short design plan based on the client's design brief: create a compact token system with color, type, layout, and principles.
- Color: describe the core base palette as 4 to 6 named hex values.
- Type: the typefaces and their roles.
- Layout: a layout concept, using one-sentence prose descriptions and ASCII wireframes to ideate and compare. Include alignment guidance; should the content be left aligned, center aligned, justified?
- Principles: the high-level guidance for what makes this page unique.

Then review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page (work through a similar prompt to see if you arrive somewhere similar) rather than a choice made for this specific brief, revise that part, say what you changed and why. Only after you've confirmed the relative uniqueness of your design plan should you start to write the code, following the revised plan.

When writing the code, be careful of structuring your CSS selector specificities. It's easy to generate CSS classes that cancel each other out (especially with a type-based selector like .section and an element-based selector like .cta). This can happen often with padding/margin between sections.

## Restraint and self-critique

Spend your boldness in one place. Let one element be the memorable thing, keep everything around it quiet and disciplined, and cut any decoration that does not serve the brief. Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected, visually accessible, harmonious color palettes. Critique your own work as you build, taking screenshots to review if your environment supports it: a picture is worth 1000 tokens. Consider Chanel's advice: before leaving the house, take a look in the mirror and remove one accessory. Human creatives have memory and always try to do something new, so if you have a space to quickly jot down notes about what you've tried, it can help you in future passes.

## More on writing in design

Words appear in a design for one reason: to make it easier to understand and use. They are design content, not decoration. Bring the same intentionality and minimalism to copywriting that you would bring to spacing and color. Before writing anything, ask what the design needs to say, and how it can best be said to help the person navigate the experience.

Write from the end user's perspective. Name things by what users will understand in simple language, not by how the system is built. A user manages notifications, not webhook config. Describe what something is or does in plain terms rather than selling it. Being specific and legible to new users is always better than being clever.

Use active voice as default. A CTA says exactly what happens when it is used: "Save changes," not "Submit." An action keeps the same name through the whole flow, so the button that says "Publish" produces a toast that says "Published." The vocabulary of an interface is the signposting for someone navigating the product. Cohesion and consistency are how people learn their way around.

Treat failure and emptiness as moments for direction, not mood. Explain what went wrong and how to fix it, in the interface's voice rather than a person's. Errors don't apologize, and they are never vague about what happened. An empty screen is an invitation to act.

Keep the tone conversational: plain verbs, sentence case, no filler, with tone matched to the brand and the audience. Let each written element do exactly one job.

## The floor

Every page you deliver meets these seven, and nothing else in this skill is a requirement:

1. **Responsive from 320 to 1920 px:** no sideways scroll, nothing clipped or overlapping.
2. **Keyboard focus is visible** on every interactive element.
3. **`prefers-reduced-motion` is honoured:** movement stops or softens; content stays visible.
4. **WCAG AA contrast:** 4.5:1 for body text, 3:1 for large text, icons and control edges.
5. **Nothing invented is presented as fact:** no made-up metrics, testimonials, customers, logos, prices or success messages. A missing fact is a marked blank.
6. **Screenshot critique before you call it done:** look at the rendered page at a desktop and a phone width, judge the pictures (not the code), fix what you see.
7. **A lint pass:** zero `FAIL`; every `REFLEX` fixed or waived with a recorded reason.

The floor never dictates page shape. No hero, nav form, theme toggle, reveal, section count, accent count or typeface is required or forbidden by this skill; the subject and the brief decide those.

## Checking the work

```bash
node <skill-dir>/scripts/lint.mjs <page.html or folder> --render
```

This runs Hallmark's `sloplint` (vendored, MIT) with its page budgets off: it reads the code for the tells named above and for floor items 2 to 5, and `--render` checks 320 to 1920 px in a real browser and saves screenshots beside the page in `.hallmark/shots/` (three desktop folds, a 1440 full page, a 375 full page). Read those pictures for item 6. Without a browser the render tier says so; report that, and do not claim a visual check you did not make. `ADVICE` lines never block. If the brief itself asks for something a gate flags, the brief wins: waive it or pass `--off <gate>`, and name it in your report. In an existing project, lint only what you wrote (`--scope component` or `--scope app`). Gate ids, tiers and the waiver comment: `references/direction.md`.

## Stack

There is no default stack. A page, report or artifact is plain HTML and CSS with only the JavaScript it needs, in one file unless asked otherwise. In an existing project, keep its framework, runtime, dependencies and conventions. Only when the user starts a new app and names no stack, propose SvelteKit 5 on Bun with Hono for the API, say that it is a default and not a rule, and switch if they prefer another.

## Menus

Options, never mandates. Each file is a catalog to choose from under the spine above: if a menu item and the brief disagree, the brief wins; if it and the spine disagree, the spine wins.

| Menu | What is on it | Read when |
| --- | --- | --- |
| `references/direction.md` | The deck method and scoring, lint tiers, waivers, the gate catalog | Starting a page with the look left free, or reading a lint finding |
| `references/color.md` | OKLCH ramps, harmony models, colour postures, dark mode, contrast | Choosing or extending a palette, or adding a second mode |
| `references/type.md` | Faces by class, one family or a pair, scale, loading | Choosing typefaces or setting a type scale |
| `references/imagery.md` | Generated images (`imagegen` skill), 755 licensed photos, textures, layered backgrounds, dithering, duotone, overlays, clip-path | The page needs a picture, a background or a texture |
| `references/motion.md` | The one orchestrated moment, easing and durations, control states, interaction recipes, scroll patterns | Anything on the page moves or responds |
| `references/layout.md` | Page anatomy by visitor job, 17 compositions, hero postures, nav and footer forms | Deciding what the sections are and how each is built |
| `references/data.md` | Chart form, tables, annotation, chart libraries, Mermaid theming, print | The page shows charts, tables, a dashboard or a diagram |
| `references/landing.md` | Conversion questions, evidence placement, launch checks | The page exists to get one action from a visitor |

When you build several pages in one session, pass the themes already used to `deal.mjs --avoid` so no two share a material, and vary the layout structure and type pair as well as the palette.
