# Landing Page Mastery

The landing page is the handshake. It has 3 seconds to answer: What is this? Why should I care? What do I do next? Every element either advances or sabotages that mission.

## Hero Section Anatomy

Five components, strict hierarchy. Omit any that lack substance rather than faking it.

1. **Headline**: 3-8 words. Lead with what the user gains, not what the product does. Avoid "seamless", "transformative", "revolutionary" (instant AI tells). Test: can a stranger understand the value in under 2 seconds?
2. **Subheadline**: 1-2 sentences. Expand the mechanism or differentiate from alternatives.
3. **Primary CTA**: ONE action, specific verb. "Start building" beats "Get started". Style it as the loudest element on the page (accent color, scale, shadow).
4. **Secondary CTA**: Lower commitment ("See demo", "View docs"). Muted styling, text-link or ghost button.
5. **Hero Visual**: Product screenshot, video, or illustration. NEVER generic stock. Position to draw the eye toward the CTA.

**Eyebrow Text**: Small text above the headline for context: version announcements, funding rounds, award badges. Sets temporal relevance.

## The Typeframe Method

Before any visual design, nail the copy hierarchy in plain text with correct sizing and spacing. All text finalized, structured by importance. This prevents the common failure of beautiful layouts wrapping meaningless words. Design follows copy, never the reverse.

## 12 Timeless Design Archetypes

These styles have persisted across decades because they solve fundamental visual problems. Pick one as a starting point, then make it yours.

### 1. Apple Minimal
Giant product photography on clean white/black. Massive display type (often SF Pro or custom). Scroll-driven reveals where each section is a full viewport. Extreme negative space. Color is the product itself. Apple pioneered this in 2007 and every product company has chased it since.

### 2. Editorial / Magazine
Inspired by print: asymmetric grids, pull quotes, drop caps, serif headlines with sans-serif body. Vertical rules as section dividers. Think NYT, Bloomberg, or Stripe's editorial pages. Works for content-heavy sites that need visual rhythm.

### 3. Swiss / International Style
Grid-locked precision. Grotesque sans-serifs (Helvetica, Neue Haas Grotesk, Suisse Int'l). Left-aligned everything. Mathematical spacing. Minimal color. The beauty is in the system, not decoration. Timeless since the 1950s.

### 4. Brutalist / Neo-Brutalist
Raw HTML energy. System fonts or monospace. Thick black borders. Flat, clashing colors. No rounded corners. Hard shadows (`4px 4px 0 #000`). Visible grid. Anti-polish as a statement. Works for creative studios, culture brands, developer tools.

### 5. Glassmorphism
Frosted-glass panels over colorful backgrounds. `backdrop-filter: blur(16px) saturate(180%)`. Semi-transparent borders (`border: 1px solid rgba(255,255,255,0.1)`). Subtle colored shadows. Requires careful contrast management for text legibility.

### 6. Dark Immersive
Deep black/navy backgrounds. Neon or high-saturation accent glows. Dramatic lighting effects. Product floats in space. Common in gaming, crypto, creative tools. Requires careful handling of text contrast and surface layering.

### 7. Geometric / Art Deco
Strong diagonals, circles, triangles as compositional elements. Gold/brass accents on dark surfaces. Symmetrical layouts with repeating patterns. Gatsby-era elegance meets digital precision.

### 8. Organic / Natural
Rounded shapes, earth tones, organic curves for section dividers (SVG wave/blob). Hand-drawn illustrations. Warm typography (rounded sans or humanist serif). Feels approachable and human.

### 9. Retro-Futurism
Combines nostalgia with speculative aesthetics. Scanlines, CRT glow, pixel art elements, synth-wave gradients (pink-to-cyan). Monospace or bitmap fonts. Works for tech products wanting personality.

### 10. Bento Grid
Content organized in varied-size rectangular tiles like a bento box. Each tile is a self-contained story: a metric, a screenshot, an animation, a testimonial. Apple (product pages), Linear, and Vercel popularized this. Great for feature-rich products.

### 11. Split-Screen
Viewport divided into two columns: visual on one side, copy + CTA on the other. Clean separation of concerns. Animate one side on hover for dynamic feel. Good for product/service sites.

### 12. Full-Bleed Cinematic
Full-viewport background video or animated gradient. Minimal text overlay (white on dark). Single CTA. Maximum impact, minimal content. Requires fast-loading media and careful mobile handling.

## Visual Flow Engineering

The eye follows predictable scan patterns. Design to exploit them:

**F-Pattern**: Users scan horizontally across the top, then down the left side. Place headline top-left, CTA in the scan path, supporting content below.

**Z-Pattern**: For simple pages. Eye moves: top-left (logo) -> top-right (nav/CTA) -> diagonal to bottom-left -> bottom-right (final CTA). Place critical elements at the Z corners.

**Gutenberg Diagram**: Divides the page into quadrants. Top-left = primary optical area (headline). Top-right = strong fallow (nav). Bottom-left = weak fallow. Bottom-right = terminal area (CTA). Users naturally end at bottom-right.

**Diagonal/Geometric Guides**: Use diagonal lines, triangles, or perspective lines to lead the eye toward the CTA. A hero image with a person looking toward the CTA, a diagonal section divider pointing right, or converging lines all exploit this.

## Section Sequencing (Below the Fold)

The hero converts the curious. The rest of the page converts the skeptical.

1. **Social Proof**: Logos, testimonials, metrics (GitHub stars, user count, awards). Place immediately after hero. Format as auto-scrolling logo bar or grid.
2. **How It Works**: 3-step visual flow or animated product demo. Reduce cognitive load.
3. **Feature Showcase**: Bento grid or alternating image-text sections. Each feature is its own mini-hero with heading, description, and visual.
4. **Deeper Social Proof**: Full testimonials with photos, case studies, or video.
5. **Pricing/CTA**: Clear, comparable tiers. Highlight recommended plan. Final CTA.
6. **FAQ**: Collapsible accordion. Answers the objections that prevent conversion.
7. **Footer**: Sitemap, legal, social links. Not an afterthought.

## Site Title Strategy

The `<title>` tag and H1 are different beasts. The `<title>` follows the pattern: `[Benefit/Action] | [Brand Name]` for SEO. The visible H1 is pure value proposition, no brand name needed (the logo handles that).

Examples of strong H1s: "Ship faster with AI" (Cursor). "Write, plan, organize" (Notion). "Move money globally" (Wise). Short, active, benefit-first.

## Performance Rules

Hero must render in under 3 seconds. Every 100ms delay costs conversions.
- Inline critical CSS for above-the-fold content
- `<link rel="preload">` for hero fonts and images
- `loading="lazy"` on everything below the fold
- Optimize hero images: WebP/AVIF, correct sizing, `srcset` for responsive
- `font-display: swap` to prevent invisible text during font load
