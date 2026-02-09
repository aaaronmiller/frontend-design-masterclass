# Kinetic Interactions & Microanimations

Motion is the difference between a page and an experience. Every interaction is an opportunity for feedback that makes the interface feel alive, responsive, and intentional.

## The Animation Stack (Choose the Right Level)

**Tier 1 - CSS Native**: `transition`, `@keyframes`, `animation-delay`. For hover effects, state changes, simple reveals. Zero JS overhead. Always start here.

**Tier 2 - Svelte Built-in**: `fade`, `fly`, `scale`, `slide`, `blur`, `draw` (transitions). `flip` (animate). `tweened`, `spring` (motion). For component mount/unmount, list reordering, value interpolation.

**Tier 3 - Svelte Motion** (`@humanspeak/svelte-motion`): `<motion.div>` with `animate`, `initial`, `exit`, `whileHover`, `whileTap`, `whileInView`. `AnimatePresence` for exit animations. For orchestrated sequences, gesture-driven effects, layout animations.

**Tier 4 - GSAP**: Timeline-based sequences, ScrollTrigger for scroll-pinned animations. Heavy. Use only for showcase/marketing pages. Never for app UI.

**Rule**: Use the lowest tier that accomplishes the goal. Tier 1 covers 70% of needs.

## Button Feedback Taxonomy

Buttons are the most-interacted element. Their feedback must be instantaneous and tactile.

### Hover State (150-200ms)
```css
.btn {
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-color);
  /* OR for neo-brutalist: */
  box-shadow: 6px 6px 0 var(--color-accent);
  transform: translate(-2px, -2px);
}
```

### Active/Click State (100ms, immediate)
```css
.btn:active {
  transform: scale(0.97) translateY(0);
  box-shadow: 0 1px 4px var(--shadow-color);
  transition-duration: 0.1s;
}
```
This `scale(0.97)` mimics a physical button press. The slight shrink + shadow reduction = "I pushed it and it went in."

### Loading State
Replace button text with spinner or progress. Disable to prevent double-submission. Maintain button dimensions (use `min-width`).

### Success/Error Feedback
Success: Brief green flash or checkmark icon morph. Scale bounce `1.0 -> 1.05 -> 1.0` over 300ms.
Error: Shake animation (translateX -4px, 4px, -4px, 0 over 400ms). Brief red border flash.

### Ripple Effect (Material-style)
On click, expand a circle from the click point:
```css
.btn { position: relative; overflow: hidden; }
.btn::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.15;
  transform: scale(0);
  animation: ripple 0.6s ease-out;
}
@keyframes ripple { to { transform: scale(4); opacity: 0; } }
```

### Border Animation
Pseudo-element border that draws itself on hover using `inset` property animation or `clip-path` reveal.

### Glow Effect (Dark Themes)
```css
.btn:hover::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at center, var(--color-accent), transparent 70%);
  opacity: 0.15;
  filter: blur(8px);
}
```

## Form Input Animations

### Focus States
```css
input:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-accent), transparent 85%);
}
```

### Floating Labels
Label starts inside the input. On focus or when filled, it animates up and shrinks:
```css
.label {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  transition: all 0.2s ease;
  color: var(--color-text-secondary);
}
input:focus ~ .label, input:not(:placeholder-shown) ~ .label {
  top: -8px; font-size: 0.75rem;
  color: var(--color-accent);
}
```

### Validation Feedback
Valid: Checkmark fades in at right edge. Green bottom border slides in from left.
Invalid: Input shakes (same pattern as error button). Red border, inline error slides down with `fly={{ y: -8 }}`.
Timing: Validate on blur or after 500ms pause. Never on every keystroke.

## Scroll-Triggered Reveals

Use Svelte action with `IntersectionObserver`:

```svelte
<script>
  function inView(node, params = {}) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('in-view');
        if (params.once !== false) observer.unobserve(node);
      }
    }, { threshold: params.threshold || 0.15 });
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }
</script>

<div use:inView class="reveal">Content</div>
```

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

Stagger children: `transition-delay: calc(var(--index) * 100ms)` applied via style attribute in `{#each}`.

## Page Load Entrance

Stagger hero elements for cinematic entrance:
- Title: `animation-delay: 0ms`, fly from bottom
- Subtitle: `animation-delay: 150ms`
- CTA: `animation-delay: 300ms`, scale from 0.9
- Hero image: `animation-delay: 200ms`, fade + slight zoom

Total entrance sequence: under 800ms. Longer feels sluggish.

## Fake 3D: Holographic Tilt Card

Track mouse position relative to card center. Apply perspective rotation:

```
rotateY = (mouseX - cardCenterX) / (cardWidth / 2) * maxRotation
rotateX = -(mouseY - cardCenterY) / (cardHeight / 2) * maxRotation
```

Transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`

Glare effect: `background: radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.25) 0%, transparent 60%)` with `mix-blend-mode: overlay`.

Reset to `rotateX(0) rotateY(0) scale3d(1, 1, 1)` on mouse leave with spring easing.

## Physics-Based Easing Curves

Standard `ease-in-out` is lifeless. Use curves that feel physical:

- **Smooth deceleration**: `cubic-bezier(0.22, 1, 0.36, 1)` - the default for most interactions
- **Bouncy overshoot**: `cubic-bezier(0.34, 1.56, 0.64, 1)` - for playful entrances
- **Snap**: `cubic-bezier(0.68, -0.55, 0.27, 1.55)` - for toggle switches
- **Elastic**: `cubic-bezier(0.68, -0.6, 0.32, 1.6)` - for attention-grabbing elements
- **Swift exit**: `cubic-bezier(0.55, 0, 1, 0.45)` - for elements leaving viewport

Or use Svelte `spring({ stiffness: 0.15, damping: 0.8 })` for real physics simulation.

## Navigation & Page Transitions

### SvelteKit Page Transitions
Wrap `+layout.svelte` content in keyed transition:
```svelte
{#key $page.url.pathname}
  <div in:fly={{ y: 8, duration: 300, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </div>
{/key}
```

### Navbar Scroll Behavior
- Shrink on scroll: Reduce padding, add `backdrop-filter: blur(12px)`, lower shadow
- Hide on scroll down, show on scroll up (track `scrollY` delta)
- Active link indicator: Underline that slides between items using absolute-positioned element with `left` and `width` animated

## Toggle & Switch Animations

Toggles should feel physical. The handle slides with spring easing, background color cross-fades, and a subtle bounce at the end position.

```css
.toggle-handle {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle[aria-checked="true"] .toggle-handle {
  transform: translateX(20px);
}
```

## Performance Budget

- Animate ONLY `transform` and `opacity` for 60fps. These bypass layout/paint.
- `will-change: transform` on elements about to animate. Remove after.
- `contain: layout paint` on card containers to isolate repaints.
- `requestAnimationFrame` for scroll-driven effects. Never animate in scroll event directly.
- Respect `prefers-reduced-motion`: Disable parallax, tilt, complex sequences. Keep simple fades.
- Total animation JS: under 10KB gzipped (Svelte Motion is ~6KB).
