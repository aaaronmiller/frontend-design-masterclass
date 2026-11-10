# Motion Craft for Web Pages

Adapted from Emil Kowalski's `emil-design-eng` skill (github.com/emilkowalski/skills,
MIT License, Copyright (c) 2026 Emil Kowalski), reduced to the rules that change how an
HTML page looks and feels. Load this whenever a page gets transitions, reveals, hover or
press states. It sharpens the motion tokens in `microanimations.md`; where the two differ
on a value, this file wins.

## 1. Decide before animating

| How often the visitor sees it | Decision |
| --- | --- |
| Constantly (keyboard actions, repeated toggles) | No animation |
| Tens of times (hover, list navigation) | Remove or keep very small |
| Occasionally (menus, modals, reveals) | Standard animation |
| Once (page entrance, a hero moment) | Room for delight |

Every animation needs a purpose: spatial consistency (things leave the way they came),
state indication, explanation, press feedback, or softening a change that would otherwise
jump. "It looks cool" is only enough for something seen once.

## 2. Easing

- Entering or exiting: ease-out. Moving or morphing on screen: ease-in-out. Colour or
  opacity hover: ease. Constant motion (progress, marquee): linear.
- **Never ease-in for UI.** It delays the first movement, the moment the eye is watching.
- The built-in keywords are too weak. Use strong custom curves:

```css
:root {
  --ease-out-strong: cubic-bezier(0.23, 1, 0.32, 1);     /* UI enters, presses */
  --ease-in-out-strong: cubic-bezier(0.77, 0, 0.175, 1); /* on-screen movement */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);         /* drawers, sheets */
}
```

## 3. Duration

| Element | Duration |
| --- | --- |
| Press feedback | 100-160ms |
| Tooltips, small popovers | 125-200ms |
| Menus, dropdowns | 150-250ms |
| Modals, drawers | 200-500ms |
| Hero entrance, explanatory motion | may run longer |

UI motion stays under 300ms. Exit faster than enter: slow where the visitor decides, fast
where the page responds.

## 4. Techniques that read as craft

- **Press:** every pressable element gets `transform: scale(0.97)` on `:active` with a
  ~160ms ease-out transition (range 0.95-0.98).
- **Never from scale(0).** Enter from `scale(0.95)` with `opacity: 0`; nothing in the real
  world appears from nothing.
- **Origin-aware popovers:** menus and popovers scale from their trigger
  (`transform-origin` set to the trigger side). Modals stay centred.
- **Transitions over keyframes for anything interruptible.** Transitions retarget
  mid-flight; keyframes restart from zero. Keep keyframes for one-shot or looping motion.
- **Entry without JavaScript:** `@starting-style { opacity: 0; transform: translateY(8px); }`
  on the element, with a fallback class for older browsers.
- **clip-path reveals:** `clip-path: inset(0 0 100% 0)` to `inset(0)` reveals an image
  on scroll; `inset(0 100% 0 0)` wipes left to right. Hardware accelerated.
- **Blur masks a rough crossfade:** add `filter: blur(2px)` during a state swap so the
  eye reads one object morphing, not two overlapping. Keep blur under 20px.
- **Percent translates:** `translateY(100%)` moves an element by its own height, whatever
  its size.
- **Stagger:** 30-80ms between items, never blocking interaction while it plays.

## 5. Restraint and accessibility

- Animate only `transform`, `opacity` (and `clip-path`, `filter` sparingly). Never
  `width`, `height`, `top`, `left`, `margin`, `padding`.
- Gate hover motion to real pointers: `@media (hover: hover) and (pointer: fine)`.
  Touch screens fire hover on tap.
- `prefers-reduced-motion` means gentler, not zero: keep opacity and colour transitions
  that aid comprehension, remove movement and position animation.
- Update a transform on the element itself during scroll or pointer tracking, not a CSS
  variable on a parent (that recalculates every child).
- Pointer-following effects ease toward the target (a lerp or spring) instead of snapping
  to the raw pointer position.

## 6. Cohesion

Match motion to the page's personality. A professional reference page is crisp and fast;
a playful page can carry a little bounce (0.1-0.3, never on UI state). One motion
character for the whole page: the same curves and the same duration family everywhere.

## 7. Review checklist

| Issue | Fix |
| --- | --- |
| `transition: all` | Name the properties |
| Entry from `scale(0)` | `scale(0.95)` plus `opacity: 0` |
| `ease-in` on UI | Strong ease-out curve |
| Popover scales from centre | Origin at the trigger (modals exempt) |
| UI duration over 300ms | 150-250ms |
| Hover motion with no pointer media query | Gate with `(hover: hover) and (pointer: fine)` |
| Keyframes on a rapidly re-triggered element | CSS transition |
| Enter and exit at the same speed | Exit faster |
| Everything appears at once | 30-80ms stagger |
| No `:active` feedback on a button | `scale(0.97)` |
