# Motion

Read when anything on the page moves or responds. A menu of options and recipes under two
rules that come straight from SKILL.md. The only motion requirement is floor item 3:
`prefers-reduced-motion` is honoured.

Sources: easing, duration and technique rules adapted from Emil Kowalski's
`emil-design-eng` skill; the eight control states, interaction recipes and scroll patterns
adapted from Hallmark (both MIT, see NOTICE).

## 1. Two rules

1. **Motion nobody asked for is spent once.** One orchestrated moment per page: one
   page-load sequence, or one reveal, or one scroll-linked pattern. A page with none is
   complete. A fade-and-rise on every section and a hover lift on every card are the
   generic default, and giving each section a different reveal is the same default wearing
   more costumes.
2. **Motion that answers an action is welcome.** Opening, closing, pressing, switching,
   confirming, failing: show what changed, quickly, from where the person acted.

Everything below serves one rule or the other. Section 4 is the menu for rule 1. Section 5
is the menu for rule 2.

## 2. Decide before animating

| How often the visitor sees it | Decision |
| --- | --- |
| Constantly (typing, keyboard navigation, repeated toggles) | no animation |
| Tens of times (hover, moving through a list) | none, or very small |
| Occasionally (menus, dialogs, tabs) | a short standard transition |
| Once (the page's one moment) | room for craft |

Ask what would be lost if the change were instant. If nothing, it is instant. Legitimate
purposes: showing where something came from or went, marking a state, explaining a change,
confirming a press, softening a jump.

## 3. Tokens: one motion character per page

```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);          /* arrivals, presses, hover */
  --ease-in: cubic-bezier(0.55, 0, 0.8, 0.2);          /* exits */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);      /* things moving on screen, toggles */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);       /* drawers and sheets */
  --dur-micro: 120ms;                                  /* press, tick, colour */
  --dur-short: 220ms;                                  /* hover, tooltip, menu, tab */
  --dur-long: 420ms;                                   /* dialog, drawer, accordion, reveal */
}
```

| Motion | Duration | Curve |
| --- | --- | --- |
| Press feedback | 100 to 160 ms | `--ease-out` |
| Hover, tooltip, small popover | 125 to 220 ms | `--ease-out` |
| Menu, dropdown, tab indicator | 150 to 250 ms | `--ease-out` in, `--ease-in` out |
| Dialog, drawer, accordion | 200 to 420 ms | `--ease-out` or `--ease-drawer` |
| The page's one moment | 0.4 to 0.8 s in all, stagger included | `--ease-out` |
| Progress, scrubbing, marquee | as long as it takes | `linear` |

- Name a curve token everywhere. The bare keywords are too weak to read as intended.
- Exits run at 60 to 75% of the enter. Slow where the visitor decides, fast where the page
  responds.
- Arrivals never ease in: easing in delays the first movement, the moment the eye is
  watching.
- Overshoot and bounce do not belong on interface state. A playful page may spend a spring
  on its one moment or its primary action, and then it is the page's character, used once.
- A crisp reference page is fast and plain. A playful page can be slower and rounder. Pick
  one character and keep the same curves and duration family everywhere.

## 4. The one orchestrated moment: options

Pick one, or none. Whichever you pick: the content is visible by default, and under
reduced motion the page shows the finished state at once.

| Option | What happens | Suits |
| --- | --- | --- |
| Load settle | the first screen's parts arrive in a short stagger | most pages that want a moment at all |
| Image reveal | the lead picture wipes or unmasks once | a page led by one photograph or product shot |
| Headline reveal | the headline's lines rise from a mask, or one statement wipes in as it scrolls into view | a page led by type |
| Pinned chapter | a section holds while its steps change | a real sequence worth walking through |
| Sticky pair | a visual stays put while short panels scroll past and change it | a product shown in several states |
| Progress spine | a thin rule fills as the page is read | long documents |
| Signature interaction | one object answers the pointer: a tilt, a magnetic pull, a draggable thing | a subject with a physical object at its centre |
| Ambient loop | one slow loop or marquee | a subject that is itself in motion |

**Load settle** (survives a script failure):

```html
<script>document.documentElement.classList.add('js');</script>
```

```css
.js [data-reveal] {
  opacity: 0; transform: translateY(8px);
  transition: opacity var(--dur-long) var(--ease-out), transform var(--dur-long) var(--ease-out);
  transition-delay: calc(var(--i, 0) * 40ms);
}
.js [data-reveal].is-in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .js [data-reveal] { opacity: 1; transform: none; transition: none; } }
```

```js
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
}), { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
```

Put `data-reveal` on the parts of one group (the first screen, or one section), each with
`style="--i: 0"`, `1`, `2`. Keep the whole stagger under about half a second.

**Without JavaScript,** `@starting-style` animates an element in from its first render:

```css
.lead { transition: opacity var(--dur-long) var(--ease-out), transform var(--dur-long) var(--ease-out); }
@starting-style { .lead { opacity: 0; transform: translateY(8px); } }
```

**Image reveal:** `clip-path: inset(0 0 100% 0)` to `inset(0)` unmasks from the top;
`inset(0 100% 0 0)` wipes left to right. It is compositor-friendly.

**Headline reveal:** wrap each line in an `overflow: hidden` span and translate the inner
span from `100%` to `0`. Split by line or word, not by letter, and keep the text readable
by a screen reader (the real text in the heading, the animated copies `aria-hidden`).

**Scroll-linked patterns** (pinned chapter, statement wipe, progress spine) use CSS scroll
timelines. The finished layout is the base CSS. The motion lives inside a support and
preference check, so every other visitor gets the complete page:

```css
.spine { position: fixed; inset-block: 0; left: max(1rem, 2vw); width: 2px; background: var(--color-rule); }
.spine::after { content: ""; position: absolute; inset: 0; background: var(--color-accent); transform-origin: top; transform: scaleY(0); }
@supports (animation-timeline: scroll()) {
  @media (prefers-reduced-motion: no-preference) and (min-width: 40rem) {
    .spine::after { animation: spine-grow linear both; animation-timeline: scroll(root); }
    @keyframes spine-grow { to { transform: scaleY(1); } }
  }
}
```

```css
.chapter { min-height: 280vh; }                        /* track length sets how long it stays pinned */
.chapter__pin { position: sticky; top: var(--space-xl); }
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) and (min-width: 40rem) {
    .chapter { view-timeline: --chapter block; }
    .chapter__steps li { animation: chapter-step linear both; animation-timeline: --chapter; }
    .chapter__steps li:nth-child(1) { animation-range: contain 5% contain 30%; }
    .chapter__steps li:nth-child(2) { animation-range: contain 30% contain 55%; }
    .chapter__steps li:nth-child(3) { animation-range: contain 55% contain 80%; }
    @keyframes chapter-step { from { opacity: 0.2; transform: translateY(8px); } to { opacity: 1; transform: none; } }
  }
}
```

- Declare `animation-timeline` and `animation-range` after the `animation` shorthand,
  which resets them.
- `linear` is right for scrubbing: scroll distance maps to progress one to one.
- Prose never moves under the reader. Targets are structural: a pinned pane, one headline,
  a thin rule, figures.
- Reach for GSAP ScrollTrigger only when CSS timelines cannot express the sequence, and
  only in a project that accepts the dependency.

**Signature interaction, tilt** (one object, fine pointers only):

```js
const card = document.querySelector('[data-tilt]');
if (card && matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
  });
  card.addEventListener('pointerleave', () => { card.style.transform = ''; });
}
```

Give the element `transition: transform var(--dur-short) var(--ease-out)` so it eases
toward the pointer and settles back. A glare is a child with a radial gradient that moves
opposite the tilt. A magnetic button is the same idea with a 4 to 6 px translate.

**Ambient loop or marquee:** duplicate the content, translate by `-50%` with `linear`, and
make it pausable. Anything that moves for more than five seconds holds still until its
script runs, stops off screen and under reduced motion, pauses on hover and focus, and has
a visible pause control.

## 5. Motion that answers an action

### Control states

A control is finished when each state that applies to it is visibly distinct.

| State | When | Treatment |
| --- | --- | --- |
| Default | at rest | reads as interactive |
| Hover | pointer over, fine pointers only | one signal: a colour step, a border step or a 1 px lift |
| Focus | keyboard focus | the ring, at once, never faded in |
| Active | during the press | a 1 px drop, `scale(0.97)`, or one step darker |
| Disabled | not available | three channels together: lower opacity, `cursor: not-allowed`, and the native `disabled` attribute |
| Loading | working | inline progress; the label stays readable and the width does not jump |
| Error | failed | colour, a message and `aria-invalid`; never colour alone |
| Success | done | the result itself; no success state where no request was made |

The first five apply to every control. The last three apply to controls that submit.

```css
.btn {
  min-height: 44px; padding: var(--space-sm) var(--space-lg);
  background: var(--color-accent); color: var(--color-accent-ink);
  border: 1px solid transparent; border-radius: var(--radius-control, 6px);
  transition: background-color var(--dur-short) var(--ease-out), transform var(--dur-micro) var(--ease-out);
}
@media (hover: hover) and (pointer: fine) { .btn:hover { background: var(--color-accent-strong, var(--color-accent)); } }
.btn:active { transform: translateY(1px); }
.btn:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
.btn:disabled { opacity: 0.55; cursor: not-allowed; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }
```

- Hover is feedback for the thing that can be clicked. Not everything needs it: a hover
  effect on a static card says it is a link when it is not.
- Hover feedback uses colour, opacity or a small transform. It never changes layout.
- The focus ring needs 3:1 against whatever it is drawn over. Check it on coloured bands.
- Touch targets are 44 by 44 px. Enlarge a small control with a padded pseudo-element.
- Press feedback: pick the 1 px drop or the scale for the whole page.

### Recipes

| Interaction | How |
| --- | --- |
| Input focus | the outline appears at once; the border may deepen one step but never changes width |
| Field label | visible above the field; a placeholder shows a format, not the label |
| Validation | on blur once the field has been touched, then on every input; the error replaces the helper line in the same reserved space, with `aria-invalid` and `aria-describedby` |
| Toggle switch | the thumb moves by `transform` over `--dur-short` with `--ease-in-out`; `role="switch"` and `aria-checked` |
| Checkbox | the mark draws with `stroke-dashoffset` over `--dur-micro` |
| Tab change | one indicator slides by `transform` (translate and scaleX, never `width`); the outgoing panel fades at `--dur-micro`, the incoming follows |
| Menu, popover | the Popover API; scale from 0.95 with opacity, `transform-origin` at the trigger; closes faster than it opens |
| Dialog | `<dialog>` with `showModal()`; the backdrop fades, the panel scales from 0.96; first focus goes to the first control |
| Drawer, sheet | translate by `100%` of its own size with `--ease-drawer` |
| Accordion | animate `grid-template-rows: 0fr` to `1fr`, never `height` |
| Tooltip | waits 800 to 1000 ms on hover, appears at once on focus, leaves on Escape |
| Toast | for failures and effects the page cannot show; a visible result needs no toast |
| Copy to clipboard | the label changes to "Copied" for about 2.5 s; that is the feedback |
| Skeleton | grey blocks in the shape of the content; a slow shimmer is one loop, stopped under reduced motion |
| Content swap | crossfade; a brief `filter: blur(2px)` during the swap makes two states read as one object |
| Number tick | real figures only; count from the previous value over 400 to 800 ms; announce only the final value |
| Optimistic update | change the row at once, send the request behind it, roll back with a retry if it fails |
| Page change | the View Transitions API where supported; a plain navigation elsewhere |

Notes that apply across the recipes:

- **Nothing appears from nothing.** Enter from `scale(0.95)` with opacity, not from
  `scale(0)`.
- **Transitions for anything interruptible.** A transition retargets mid-flight; a
  keyframe animation restarts. Keep keyframes for one-shot and looping motion.
- **Percent translates** move an element by its own size: `translateY(100%)` hides a
  sheet of any height.
- **Streaming content** (an AI answer, a generated table): reveal tables and code blocks
  whole, not cell by cell. Hold a heading until its body is ready. Settle sibling rows in
  one paint, with reserved space or skeletons so late controls do not pop in.
- **Docked surfaces** (a composer, a sticky bar) anchor with fixed or sticky positioning,
  not with script that measures the page.

## 6. Which tool

Use the lowest tier that does the job, and the project's own library where it has one.

| Tier | Use for |
| --- | --- |
| CSS transitions, keyframes, `@starting-style`, scroll timelines | most of this file |
| Web Animations API, View Transitions API | sequenced or page-level changes in plain HTML |
| The framework's own (Svelte transitions and `flip`, Motion for React, Vue transitions) | enter and exit of components, list reordering |
| GSAP (and ScrollTrigger) | a long timeline or a pinned scene that is the page's one moment |

## 7. Performance

- Animate `transform` and `opacity`. `clip-path` and `filter` may join when they stay
  smooth. Never `width`, `height`, `top`, `left`, `margin` or `padding`, and never
  `transition: all`.
- Update a transform on the element itself during pointer or scroll tracking, not a custom
  property on a parent, which restyles every child.
- `IntersectionObserver` for reveals. A scroll listener only where direction matters, and
  then passive and throttled to a frame.
- `will-change` just before an animation and removed after it, never on a whole class.
- `contain: layout paint` on an animated tile keeps its repaints local.
- Budget 8 ms per frame for scroll and streaming paths, so 120 Hz screens stay smooth.
- Avoid selectors that force a full style recalculation on every change: `:root:has(...)`
  and unscoped `:has()` over large, busy subtrees.

## 8. Reduced motion and access

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
}
```

- The blanket rule above is the safe default. Better is to write each animation's reduced
  form: movement goes, and a short opacity or colour change may stay where it helps
  understanding.
- Every reveal shows its end state. Nothing stays hidden.
- Gate hover motion to real pointers: `@media (hover: hover) and (pointer: fine)`. Touch
  screens fire hover on tap.
- Every hover affordance has a focus equivalent.

## 9. Review

| If you see | Change it to |
| --- | --- |
| a reveal on every section | one moment, or none |
| the same hover lift on every card | hover only on what can be clicked, one signal |
| `transition: all` | the properties by name |
| entry from `scale(0)` | `scale(0.95)` with opacity |
| an arrival that eases in | `--ease-out` |
| a popover scaling from its centre | origin at the trigger (dialogs stay centred) |
| interface motion over 300 ms | 150 to 250 ms |
| enter and exit at the same speed | a faster exit |
| keyframes on something re-triggered quickly | a transition |
| content that needs script to become visible | visible by default, hidden only under `.js` |
| motion with no reduced-motion form | add it (floor item 3) |
