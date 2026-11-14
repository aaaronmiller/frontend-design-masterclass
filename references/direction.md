# Direction: the deck, the choice, and the lint tiers

Read when a page starts with its look left free, or when a lint finding needs looking up.
Everything here is method and reference. The only requirements are the seven floor items
in SKILL.md.

Sections 1 to 5 adapt Hallmark's custom-run brief and theme deal (MIT, see NOTICE).
Sections 6 and 7 describe the vendored linter as this skill runs it.

## 1. When to deal, when to skip

Deal when the brief leaves the look open: a new page, a new site, an artifact, a restyle.

Skip the deck when any of these holds, and say which:

- The brief pins the look ("make it look like our docs", "brutalist, black and yellow").
- A design system, a brand or a `design.md` already exists. Inherit it.
- The job is one component or a change inside an existing screen.
- The user named a reference site or brand. Extract its system first (section 4).

## 2. Deal three, add one

```bash
node <skill-dir>/scripts/deal.mjs "<the brief in a sentence>"
node <skill-dir>/scripts/deal.mjs "<brief>" --avoid riso,ink     # skip themes already used this session
node <skill-dir>/scripts/deal.mjs --list                         # the whole catalog, one line each
```

The script reads the 50-theme catalog in `vendor/hallmark/references/themes/` and deals
three that sit far apart:

| Role | How it is chosen | Why it is in the hand |
| --- | --- | --- |
| fit | best keyword match with the brief | the direction a careful designer would expect |
| contrast | another paper band and another genre, still with the brief in view | the same subject seen from the other side |
| wildcard | far from both on two axes or more, fit ignored | the option you would never have reached for |

Then add a **fourth, custom direction** of your own. It comes from the subject alone (its
materials, its place, its numbers, the way its people talk) and shares no typeface and no
palette family with the three dealt.

Each run deals fresh. `--seed` repeats a deal. When the fit card is the same theme you used
on the last page, pass it to `--avoid`.

## 3. Reading a theme

Open the file printed after `read:`. A theme is a **material**: what the page is made of.
It never says what the page contains or in what order.

| Section of the file | What you take from it |
| --- | --- |
| Header | paper band, display class, accent hue, colour posture, photo treatment |
| Tokens | a ready `:root` block in OKLCH: paper, ink, rule, accent, focus, fonts, radius, shadow |
| Type | faces, weights, tracking and case for heads, body and labels |
| Surfaces | rule weight, radius, depth, which bands the page may use, texture if any |
| Range | what this material builds without a photograph |
| Controls, Motion, Voice | the button pair, how fast things move, the copy register |
| Do-nots | this theme's own failure modes |
| Build hint | up to 20 lines of CSS that make the material recognisable |

Notes for reading them here:

- Themes cite Hallmark's own files. "`layout.md` § 5" means the compositions in this
  skill's `layout.md`; a bare number in brackets, such as (83), is a gate id from section 7.
- A theme's sizes, spacing and section counts are Hallmark's house numbers. Take the
  material and set your own scale.
- You may bend a theme: move the accent, swap the body face, change the radius. Say what
  you changed. A theme followed to the letter on every page becomes its own template.
- The catalog's preview pictures are not vendored. Judge a theme from its tokens and text.

## 4. The custom direction, and reference extraction

Four steps produce the fourth card. They also serve a job where the deck was skipped.

1. **Learn the subject.** What only this client has: the name and what it means, the place
   and how it looks, what it does in one verb, its real numbers, its hours and rituals, what
   its world makes, prints or wears, the words its customers use.
2. **Set aside the page you would make anyway.** Picture the page this brief gets without
   trying, and its obvious twist. Usually that is a split hero with the head on the left and
   a picture on the right, three numbered steps, rows of label and value between hairlines,
   a closing band with a form, and a pale ground with one careful accent. Two of those in
   one plan means the plan is the template.
3. **Let one idea run the page.** One thought the whole page grows from, true of this
   client and no other. It can live in the type, the colour, the structure, the motion, the
   way the product is shown, or something the visitor does. An idea that stops at the hero
   is a template with a good hero.
4. **Let the content build the structure.** Decide what a visitor has to see, understand
   and do, and in what order. Then give each part the form that shows it best (`layout.md`).

**Already spent.** These are the first answers of every model. They are fine when the brief
asks for them, and weak as a free choice:

- cream paper with a high-contrast serif and a clay accent; near-black with one neon
  accent; a pale ground with one timid accent; purple into blue; a hue picked for the
  category, such as blue for software or green for health;
- the faces you reach for first (the saturated list in `type.md`);
- a centred head over three cards; the run of hero, features, call to action, footer;
- a subject painted on instead of known: paper grain as a surface for no reason, a stamp,
  a dial or a knob as ornament;
- an eyebrow, tracked capitals, mono labels, one coloured word in a head, middle-dot strings.

**When the user names a reference** (a site, an image, a brand): capture its real system
before designing. Take the actual palette roles, typefaces, radius, spacing rhythm and
motion character from the source itself: its stylesheet, a screenshot, the brand guide. A
colour or a face recalled from memory is a guess. If you cannot reach the source, say so
and ask for it.

## 5. Sketch, score, choose

Sketch each of the four directions in five lines:

```
palette   four to six named colours and what each is for
type      the face or pair, and the role of each
layout    the page in one sentence, plus the form of the first screen
picture   what the page shows: photograph, product, type, chart, nothing
signature the one thing a visitor will remember
```

Score each from 1 to 5 on five questions, and write the numbers down:

| Question | A 5 looks like |
| --- | --- |
| Subject | every large choice traces to something true of this subject |
| Audience | the people it is for would feel it was made for them |
| Job | the direction makes the page's one job easier to do |
| Distinct | put a competitor's name on it and it stops working |
| Material | it can be built with the content and pictures that really exist |

Pick the highest total. Break a tie toward the direction a design lead would fight for, not
the safest one. Write one line per loser saying why it lost. Your first idea may win, but
only after it has beaten three real alternatives. Borrow from the losers only what makes
the winner stronger.

Then write the SKILL.md token plan for the winner and review it against the brief.

**Lock the tokens.** On a page of several sections, write the token block before the
components: colour roles in OKLCH, the type scale, radii, the spacing scale, durations and
easings. Components read tokens only. This keeps the last section looking like the first,
and the linter checks it (gates 24a and 48).

**A second pair of eyes** (optional, worth it on a page that matters): give the screenshots
and the brief, without your working notes, to a subagent and ask what it would fix first.
The context that built the page is its weakest reviewer.

**Iterating with the user.** Show a screenshot with each change: a picture and a verdict
steer faster than a description. One change per turn lands better than a list of twenty.
Settle the layout first and treat the copy as its own pass. When a fix is uncertain, show
two or three small variants instead of describing options.

## 6. The linter: tiers, grades and what to do

`node <skill-dir>/scripts/lint.mjs <files> [--render]` wraps Hallmark's `sloplint`
(unmodified, in `vendor/hallmark/scripts/`). Every finding carries a gate id and a grade.

| Grade | Tier | What it means | What you do |
| --- | --- | --- | --- |
| `FAIL` | Floor | correctness, access, honesty, or a tell so reliable it is treated as a defect | fix it; a page with an open FAIL has not passed |
| `REFLEX` | Reflex | a default a model falls into; right on some pages | fix it, or waive it with a recorded reason |
| `WARN` | any | suspected, or a Finish detail (ids starting `F`) | read it; fix what is real |
| `ADVICE` | Hallmark's hero geometry and illustration rules | printed for information | weigh it; it never blocks |
| `WAIVED` `ANSWERED` `DISMISSED` `NOTE` | | recorded exceptions and bookkeeping | nothing |

Exit code 1 means an open `FAIL` or `REFLEX`.

**Off by default** (Hallmark's stamp and page budgets, which shaped every page the same way):

| Gate | What it enforced |
| --- | --- |
| 20 | a Hallmark stamp comment on the first line of the CSS |
| 58 | about 80 words per screen, 450 words per page, two text blocks in a hero |
| 59 | 120 px or more between sections; nine sections at most |
| 77 | each section body spanning ten of twelve columns with "mass"; five sections at least |
| 78 | section heads of 40 px or more |

**Advice only by default:** 44a to 44d (hero centred in its screen, everything above the
1280 x 800 fold, hero exactly one screen tall, container capped at 1920), 79 (empty band
under the hero), 80 (drawn illustration larger than an icon).

Flags: `--hallmark` restores upstream behaviour for a Hallmark run. `--on 58` restores one
gate. `--off 83` drops one. `--advise 83` demotes one. `--scope app` skips the gates that
only suit a landing page; `--scope component` skips page-level gates. `--tier floor` shows
Floor failures alone.

**When the brief disagrees with a gate, the brief wins.** If the user asks for uppercase
tracked labels, a pure white ground or Inter, that is their page. Waive the gate if it is a
Reflex, or pass `--off <gate>`, and name the gate and the reason in your report.

### Telling the linter what you chose

Put one comment in the first 40 lines of the stylesheet or `<style>` block. Fields are
separated by a middle dot. Include only the fields that apply.

```css
/* design · posture: committed · nav: masthead · footer: colophon · job: book */
```

| Field | Values | Effect |
| --- | --- | --- |
| `posture:` | `restrained`, `committed`, `full-palette`, `drenched` | colour beyond a small accent is a declared choice (23) |
| `nav:` and `footer:` | your own words | the page chrome is a named decision (42) |
| `job:` | subscribe, book, visit, attend, buy, try, sign up, hire, join, listen | an email sign-up close is native to some jobs (85) |
| `surface: absolute` | | permits a pure white or black surface token under a waiver of 7b |
| `copy: verbatim` | | the words are the user's own; copy gates 19 and 69 report as notes |
| `shape: app screen` | | same as `--scope app` for this file |

### Waiving a Reflex

A waiver is a comment in the same place. The prefix is literal because the vendored linter
parses it. Three fields follow the gate id: the evidence that makes it safe, then the reason.

```css
/* Hallmark · waive 64 · --font-body is IBM Plex Mono · the page is a manual for a command-line tool, so mono is its material */
```

- One waiver per gate, named by clause (`47b`, not `47`).
- The reason is 24 characters or more, is about this page, and shares a word with it.
  Boilerplate ("design choice", "looks better") is rejected.
- A Floor gate cannot be waived this way. Fix it, or use `--off` when the brief demands it.
- More than three waivers means you have a house style. Write it down as a design system
  instead of arguing it gate by gate.
- A `WARN` you checked and found wrong is dismissed the same way:
  `/* Hallmark · dismissed 46a · the figure is from the client's annual report, page 4 */`.

The linter's fix text cites Hallmark's own files and section numbers. Read it as advice.
The gate id is what you look up below.

## 7. Gate catalog

Tier as this skill runs it. `R` after the id means the render tier (`--render`) checks it.

### Colour and surface

| Gate | Tier | The tell |
| --- | --- | --- |
| 2a | Floor | purple to blue, purple to pink or cyan-on-dark gradient, gradient text included |
| 2b | Reflex | gradient text in any other hue |
| 7a | Floor | pure `#000` or `#fff` written outside the token block |
| 7b | Reflex | a surface token that resolves to pure black or white |
| 22 | Reflex | zero-chroma greys on a page that has an anchor hue |
| 23 R | Reflex | accent over about 5% of a viewport with no declared posture |
| 29 | Reflex | glow and wash: mesh blobs, blurred orbs, halos, coloured zero-offset shadows on dark |
| 65 | Reflex | cream paper, high-contrast serif and a clay accent together, unasked |
| 74 | Reflex | a framework's stock swatch (indigo-500, slate-900) used as is |

### Type

| Gate | Tier | The tell |
| --- | --- | --- |
| 1 | Reflex | Inter, Roboto, Open Sans, Poppins, Lato or a system face as the display |
| 25 R | Reflex | running prose wider than about 75 characters |
| 37 | Reflex | more than three font families |
| 38i | Floor | one italic word inside an otherwise roman heading |
| 38ii | Reflex | an italic display system without true italics loaded |
| 38iii | Reflex | one word or phrase in a heading set apart by colour, weight or highlight |
| 55a | Floor | an uppercase display head that can wrap with line-height under 1.0 |
| 64 | Reflex | monospace on labels and captions when the content is not code or a measurement |
| 67 | Floor | tracked or uppercase small labels (15 px or under, tracking past 0.03em) |
| 75 R | Reflex | running text under 12 px, or prose leaded under 1.3 |

### Structure and layout

| Gate | Tier | The tell |
| --- | --- | --- |
| 3 R | Reflex | three equal icon-above-heading tiles; an icon in a rounded tile; a thick side stripe on a card |
| 4 | Floor | a card inside a card |
| 6a | Floor | a hero sized in `vh` (use `dvh` or `svh`) |
| 24a | Floor | a raw padding, margin or gap where a `--space-*` token exists |
| 24b | Reflex | spacing off the scale |
| 34 R | Floor | horizontal scroll at any width from 320 to 1920; `overflow-x: clip` missing on `html` and `body` |
| 50 | Floor | an image grid track on bare `1fr`; a display head without `overflow-wrap: break-word; min-width: 0` |
| 53 | Floor | CSS-only radio tabs that make the page jump |
| 56 R | Floor | two elements stuck to `top: 0` |
| 71 R | Reflex | headings nearer to what precedes them than to what they head |
| 72 R | Reflex | text cramped against the edge of its box or of a phone screen |
| 81 R | Reflex | an empty picture: a slot or gradient block showing only its wash |
| 82 R | Reflex | 24 or more identical marks standing in for a number |
| 83 R | Reflex | photographs over about a third of the page below the first screen |
| 85 R | Reflex | the page closes on an email sign-up it has no reason for |

### Chrome and copy

| Gate | Tier | The tell |
| --- | --- | --- |
| 19 | Floor | placeholder names, startup clichés, buzzwords, the rebuttal cadence, em and en dashes in copy |
| 42 | Reflex | the default nav and four-column footer, undeclared |
| 46a | Floor | an invented metric, testimonial, logo wall or customer count |
| 47a | Floor | a hand-drawn browser bar or window title bar |
| 47b | Reflex | a phone, laptop, terminal or editor frame |
| 47c | Reflex | imitation material: a fake product UI of styled boxes, bevels faking an object |
| 54 | Floor | the eyebrow: short inert type before a heading that only announces it |
| 63 | Floor | middle-dot meta strings, an arrow glued to a label, decorative status dots |
| 66 | Reflex | decoration text: rotated labels, scroll cues, version pills, a locale strip |
| 68 | Reflex | more than five empty picture slots, or four in a row |
| 69 | Reflex | one fact printed in four or more sections |
| 70 | Floor | a form that prints success with no request behind it |

### Motion and interaction

| Gate | Tier | The tell |
| --- | --- | --- |
| 10a | Floor | `transition: all`; animating `width`, `height`, `top` or `left` |
| 10b | Reflex | transitioning `margin` or `padding` |
| 11 | Reflex | the same lift on every card; an image scaling on hover; hover on a non-interactive element |
| 12 | Reflex | bounce or overshoot easing on UI state |
| 15 | Floor | a focus ring that fades in |
| 17 | Floor | a tooltip that waits on focus as long as on hover |
| 18 | Floor | auto-rotating content with no pause on hover and focus |
| 26a R | Floor | no `:focus-visible` style, a ring under 3:1, or an outline removed with nothing in its place |
| 26b | Reflex | no `:active` or `:disabled` state |
| 27 | Floor | a keyframe or transform transition with no `prefers-reduced-motion` fallback |
| 28a | Floor | autoplay video without `muted`; `loading="lazy"` on the largest image |
| 39a | Floor | inputs whose border width shifts between states, or disabled by opacity alone |
| 39b R | Reflex | marketing-page controls outside 44 to 52 px tall |
| 62 R | Floor | content hidden at rest that needs JavaScript to appear |

### Assets and access

| Gate | Tier | The tell |
| --- | --- | --- |
| 30a | Floor | an emoji standing in for an icon |
| 30b | Reflex | two icon libraries on one page |
| 33 | Floor | a decorative `svg` or `canvas` with neither `aria-hidden` nor a label |
| 40 R | Floor | text, icon, ring or field edge under its contrast threshold |
| 41 R | Floor | button text too close to its fill; grey text on a coloured surface |
| 48 | Floor | a colour or `font-family` literal outside the token block |
| 49a | Floor | a button label or main nav link wrapping at any width |
| 73 R | Floor | text painted under another element |
| 76 R | Floor | a broken image; a library photo with no credit on the page |

Finish checks (`F1` to `F26`) are craft details: straight quotes, missing
`text-wrap: balance`, figures without tabular numerals, an unthemed `::selection`, a missing
meta description. They report as `WARN` and never block.
