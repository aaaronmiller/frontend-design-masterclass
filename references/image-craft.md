# Image Craft & Visual Texture

Images are not decoration. They are structural elements that define spatial depth, establish mood, and guide attention. A site without intentional image strategy looks like a dressed-up wireframe.

## The Nano Banana Texture Protocol

Nano Banana generates AI imagery at arbitrary dimensions with controllable styles. Use it as a texture engine, not just an illustration tool.

### Background Textures
Generate abstract or geometric textures in assorted sizes (512x512, 1024x512, 2048x1024). Apply as CSS `background-image` with layering:

```css
.hero {
  background-image:
    url('/textures/grain-bayer-512.webp'),
    url('/textures/abstract-warm-1024.webp'),
    linear-gradient(to bottom, var(--color-canvas), transparent);
  background-blend-mode: overlay, soft-light, normal;
  background-size: 512px, cover, 100%;
}
```

**Opacity control**: Wrap texture in a pseudo-element for precise opacity without affecting content:
```css
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/textures/grain.webp');
  mix-blend-mode: overlay;
  opacity: 0.08;
  pointer-events: none;
}
```

Opacity ranges by context:
- Hero backgrounds: 0.05-0.15 (subtle atmosphere)
- Card surfaces: 0.03-0.08 (barely visible texture)
- Full-bleed sections: 0.10-0.20 (more pronounced)
- Accent bands/banners: 0.15-0.30 (intentionally visible)

## Dithering Algorithms

Dithering reduces color depth while preserving visual information through patterned noise. Each algorithm has a distinct aesthetic:

**Atkinson Dithering**: Diffuses only 6/8 of the error, creating high-contrast results with more white space. Classic Mac look. Best for: text-heavy backgrounds, subtle hero textures.

**Bayer (Ordered) Dithering**: Uses a fixed threshold matrix producing regular, grid-like patterns. Distinctly retro/digital feel. Best for: tech brands, developer sites, retro-futurism aesthetics. Can be generated live via WebGL shaders in under 0.2ms at 4K.

**Floyd-Steinberg Dithering**: Full error diffusion creates the smoothest gradients and most organic patterns. Best for: photographic content, natural themes, editorial sites.

**Halftone**: Simulates print with varying dot sizes. Strong editorial/newspaper feel. Best for: magazine-style layouts, print-inspired designs.

### Prompting for Dithered Images
When generating via Nano Banana, specify: "Abstract [subject] with [algorithm] dithering pattern, [color] palette, suitable for web background texture at low opacity overlay"

## Geometric Overlays & Structural Bounding

Images gain structure and intentionality when bounded by geometric elements.

### Diagonal Line Overlay
A large diagonal line across a background image creates a visual divide and implied movement:
```css
.section::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    transparent 49.5%,
    var(--color-accent) 49.5%,
    var(--color-accent) 50.5%,
    transparent 50.5%
  );
  pointer-events: none;
}
```

### Geometric Masks on Images
Use `clip-path` to give images non-rectangular shapes:
- Diamond: `clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`
- Angled: `clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)`
- Hexagon: `clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`
- Circle reveal: `clip-path: circle(40% at 50% 50%)`

### Grid Overlay Pattern
A subtle grid over images adds structure:
```css
.image-container::after {
  background-image:
    linear-gradient(var(--color-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.06;
}
```

### Corner Accents
Small geometric shapes at image corners imply framing:
```css
.image::before, .image::after {
  content: '';
  position: absolute;
  width: 24px; height: 24px;
  border: 2px solid var(--color-accent);
}
.image::before { top: -8px; left: -8px; border-right: none; border-bottom: none; }
.image::after { bottom: -8px; right: -8px; border-left: none; border-top: none; }
```

## Parallax Image Layering

Decompose a hero visual into 3 depth planes:

**Back layer** (z-0): Desaturated, heavily dithered (Atkinson), opacity 0.3-0.5, moves at `scrollY * 0.1`. This is atmosphere.

**Mid layer** (z-10): Main subject, sharp, full saturation, opacity 0.8-1.0, moves at `scrollY * 0.4`. This is content.

**Front layer** (z-20): Grain/noise overlay or floating geometric elements, opacity 0.1-0.3, moves at `scrollY * 0.8` or fixed. This is depth cue.

Use `position: absolute`, `will-change: transform`, `translate3d(0, calc(var(--scroll) * Xpx), 0)` for GPU compositing.

## Artistic Style Matching

Choose an image style that reinforces the site's aesthetic tone:

**Photographic Realism**: Actual product shots, real environments. Best for: SaaS, e-commerce. Apply subtle grain texture overlay to prevent "stock photo" feel.

**Illustrated / Vector**: Custom illustrations in brand palette. Best for: startups, education, creative tools. Adds personality stock photos lack.

**Abstract Generative**: AI-generated or procedural visuals with geometric forms, gradients, organic shapes. Best for: tech, fintech, creative portfolios. Unique per-site identity.

**Mixed Media Collage**: Layering photography with graphic overlays (doodles, shapes, text, icons). Best for: editorial, fashion, culture. Creates rich, textured depth.

**Retro / Pixel Art**: Low-resolution aesthetics, scanlines, CRT effects. Best for: gaming, developer tools, nostalgic brands. Pair with dithering.

**3D Rendered**: Floating objects, product renders, abstract 3D shapes. Best for: product launches, luxury, tech. Requires WebGL or pre-rendered assets.

## Responsive Image Strategy

Never serve a 2400px image to a phone.

```html
<picture>
  <source srcset="hero-400.avif 400w, hero-800.avif 800w, hero-1600.avif 1600w"
          type="image/avif" sizes="100vw">
  <source srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1600.webp 1600w"
          type="image/webp" sizes="100vw">
  <img src="hero-800.jpg" alt="..." loading="eager" decoding="async"
       width="1600" height="900">
</picture>
```

- Hero images: `loading="eager"`, `fetchpriority="high"`
- Below fold: `loading="lazy"`
- Always include `width`/`height` to prevent layout shift
- AVIF first (50% smaller than WebP), WebP fallback, JPEG safety net

## Button & Banner Imagery

Subtle image treatments inside interactive elements:

**Button texture**: Nano Banana micro-texture as `background-image` inside buttons at 0.05 opacity with `mix-blend-mode: overlay`. Adds tactile depth to flat buttons.

**Banner backgrounds**: Full-width section with dithered image, dark gradient overlay from left (`linear-gradient(90deg, var(--canvas) 40%, transparent)`), text positioned in the clear space. The image provides atmosphere while remaining readable.

**Card thumbnails**: Apply consistent aspect ratios (`aspect-ratio: 16/9` or `3/2`). Use `object-fit: cover` and `object-position: center`. Add a subtle `box-shadow` or border for separation.

## Anti-Patterns

- Stock photos with zero post-processing (screams "template")
- Flat solid-color backgrounds on hero sections (missed opportunity)
- Images without `alt` text (a11y violation)
- Oversized uncompressed images (performance killer)
- Background images that compete with text (readability failure)
- Same image treatment on every section (visual monotony)
