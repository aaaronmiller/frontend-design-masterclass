# Imagery and backgrounds

Read when the page needs a picture, a background or a texture. A menu of sources and
treatments. No page is required to have an image, a layered background or a texture: type
and colour can carry a whole page, and often should.

The priority order, the photo library and the texture budget adapt Hallmark's `imagery.md`
and `texture.md` (MIT, see NOTICE).

## 1. What the page shows

Take the first source that fits:

1. **The user's own images and recordings.** They win every slot.
2. **Screenshots of the real product,** whenever it can be reached: a URL, a dev server, an
   app on this machine. A real screen beats any picture of one.
3. **The product built in the page,** when nothing exists to capture yet. Label sample data
   as a sample.
4. **Licensed photographs** from the bundled library (section 2).
5. **Generated images** (section 3).
6. **Illustration or drawn graphics** in one consistent style, when the subject is one a
   drawing suits: a toy, a children's product, a concept with nothing to photograph.
7. **Type at full scale,** when the page is about words.

Which subjects want which:

| Subject | What leads |
| --- | --- |
| A place, food, an object, a craft, people at work, an event | photographs, few and large |
| Software, an app, a developer tool | the product's own interface; one or two photographs at most |
| Docs, an API, a manifesto, a letter | type and code; at most one picture |
| A toy, a game, a story | illustration, generated art, or the thing itself photographed |
| Data, a report | charts and figures (`data.md`) |

**The deletion test.** Take the picture away. If the page says the same thing without it,
the picture is too weak, too small or not needed. A picture for mood alone is the first
thing to cut when you "remove one accessory".

A photograph never stands in for a fact. A picture of a person never stands in for a
customer, a teammate or a testimonial (floor item 5).

## 2. Licensed photographs (755, bundled)

`vendor/hallmark/scripts/photos.json` indexes 755 photographs from Wikimedia Commons, each
CC0, public domain, CC BY or CC BY-SA, tagged by subject, tone and temperature.

```bash
node <skill-dir>/vendor/hallmark/scripts/theme.mjs photos "hands kneading dough" "bakery counter" --n 3 --orient landscape
node <skill-dir>/vendor/hallmark/scripts/theme.mjs photos "apple orchard" --save ./img     # download into the project
```

For each subject it prints what the photo shows, its size, a ready `<img>` with `srcset`,
and the credit line.

- Ask for the concrete subject. If nothing fits, ask again in other words (the place, the
  material, the action) before settling for a near miss. An off-subject picture is cut.
- **Use only URLs the script printed or the user supplied.** Do not write an image URL from
  memory, and do not take one from a stock site.
- **Credit every library photo on the page:** one line, usually in the footer,
  "Photographs:" followed by each printed credit, linked. CC BY and CC BY-SA require it,
  and the linter checks it (gate 76).
- For production use `--save`; a draft may link the Commons thumbnails.

## 3. Generated images

Use the `imagegen` skill when it is installed (it works headless from the terminal; pass
`-b agy` when the default backend is out of quota). Good for a hero image, a section
image, a texture, an abstract field, or illustration in a set style.

A prompt that works names five things:

```
subject      what is in the frame, concretely
style        photograph, gouache, risograph, 3D clay, line drawing: one style for the whole page
palette      the page's own colours by name and hex, so the image sits in the palette
composition  where the subject sits and where the calm space for text is
format       aspect ratio and size for the slot it fills
```

- Generate every image for one page in the same style, light and palette. Mixed styles are
  the usual giveaway.
- Leave text out of the image. Set words in HTML over it.
- Convert to WebP or AVIF and size it for its slot before embedding (section 4).
- Look at each result before placing it. Check hands, lettering and edges, and regenerate
  rather than hide a flaw under an overlay.
- Never present a generated person as a real customer or team member.

## 4. Sizing, format and crop

| Use | Format | Longest side | Target weight | Loading |
| --- | --- | --- | --- | --- |
| Full-bleed or first-screen image | WebP or AVIF | 2400 px | about 200 KB | eager, `fetchpriority="high"` |
| Content image | WebP | 1200 px | about 150 KB | lazy |
| Thumbnail in a set | WebP | 600 px | about 50 KB | lazy |
| Tiled texture | WebP, or an inline SVG filter | 256 to 512 px | 5 to 15 KB | eager |
| Icon, logo, diagram | SVG | | under 5 KB | inline |
| Screenshot with text | WebP lossless or PNG | native | | lazy |

```html
<img src="room-1200.webp"
     srcset="room-600.webp 600w, room-1200.webp 1200w, room-2400.webp 2400w"
     sizes="(min-width: 60rem) 50vw, 100vw"
     width="1200" height="800" alt="The counter at opening time, six stools and the open kitchen">
```

- Always set `width` and `height`, or `aspect-ratio` on the frame, so nothing shifts.
- Crop with the frame: `aspect-ratio` on the container, `object-fit: cover`, and an
  `object-position` that keeps the subject in view.
- **Check every crop in a screenshot,** at desktop and phone widths. Models misjudge crops
  constantly: a head cut off, empty sky where the subject should be, a 16:9 picture forced
  into a square.
- Big or not at all. A photograph at thumbnail size reads as clip art unless it is one of
  a true set.

## 5. Background options

A flat ground in a chosen colour is a legitimate background. The options below are for
when the subject wants more. Pick one. Two at once is rarely better.

| Option | What it is | Suits |
| --- | --- | --- |
| Flat field | one colour from the palette, perhaps a second as a band | most pages; anything where type or a picture leads |
| Colour posture | the ground itself is the bold thing (`color.md` section 5) | a single-idea page, a poster |
| Full-bleed photograph | one picture edge to edge, text on its calmest part over a scrim | a place, food, an event |
| Layered stack | a base colour, an image or gradient at reduced strength, a texture on top | an atmospheric first screen where no single photograph is right |
| Texture | one print artifact at low opacity (section 6) | print-lineage subjects: a press, a zine, a ticket, a film lab |
| Line or dot grid | a drawn grid behind content | technical subjects: plans, maps, instruments |
| Generated field | an abstract image made for the page (section 3) | subjects with no photographable thing |

**The layered stack** (one option among these, not a default):

```css
.stage { position: relative; isolation: isolate; background: var(--color-paper); }
.stage::before {                      /* the image or gradient layer */
  content: ""; position: absolute; inset: 0; z-index: -2;
  background: url("field.webp") center / cover;
  opacity: var(--stage-image-opacity, 0.35);
}
.stage::after {                       /* the texture layer, see section 6 */
  content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  opacity: var(--texture-opacity, 0.06);
  background-image: var(--texture-grain);
}
```

The base colour alone must leave the text readable, so the page survives a failed image.

**Text over a picture.** Put a scrim behind the text's side only, from the palette's ink,
and measure contrast on the result:

```css
.over-photo::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(to top, oklch(from var(--color-ink) l c h / 0.7), transparent 60%);
}
```

**A line grid:**

```css
.gridded {
  background-image:
    linear-gradient(var(--color-rule) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-rule) 1px, transparent 1px);
  background-size: var(--grid-step, 60px) var(--grid-step, 60px);
}
```

Movement in a background (drift, parallax, a field that follows the pointer) is motion and
is governed by `motion.md`: it has to be the page's one orchestrated moment to earn its
place, and it stops under reduced motion.

## 6. Texture: a budgeted vocabulary

Texture is a treatment with a budget. Used on a subject with a print lineage it reads as
craft; smeared over everything because the page felt flat, it reads as a habit.

- **One family per page:** grain, halftone, misregistration, scanline or deckle.
- **Opacity as a token:** about 0.08 or less page-wide, up to 0.15 inside one plate, 0.05
  or nothing under running text. Measure contrast on the textured result.
- **Still.** Texture does not animate.
- `pointer-events: none` and `aria-hidden="true"` on every overlay element.
- Pure CSS or a data-URI SVG filter, so texture costs no request.

**Grain** (specks, not haze):

```css
:root {
  --texture-opacity: 0.08;
  --texture-grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 -4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
}
.grained { position: relative; isolation: isolate; }
.grained::after {
  content: ""; position: absolute; inset: 0; pointer-events: none; z-index: 1;
  background: var(--texture-grain) 0 0 / 200px 200px; opacity: var(--texture-opacity);
}
```

The colour matrix turns noise into discrete specks. On a dark ground make the specks
light: change the matrix's first three rows to `0 0 0 0 1`.

**Halftone** (a dot screen for plates and bands, never under type):

```css
:root { --halftone-size: 12px; --halftone-dot: 1.5px; }
.halftone {
  background-image: radial-gradient(var(--color-ink) var(--halftone-dot), transparent var(--halftone-dot));
  background-size: var(--halftone-size) var(--halftone-size);
}
```

**Misregistration** (a risograph echo on one focal word; the copies print behind the ink):

```css
.misreg { position: relative; display: inline-block; isolation: isolate; }
.misreg::before, .misreg::after {
  content: attr(data-text); position: absolute; inset: 0; z-index: -1;
  white-space: nowrap; pointer-events: none;
}
.misreg::before { color: var(--color-accent); transform: translate(-2px, -2px); }
.misreg::after  { color: var(--color-accent-2, var(--color-focus)); transform: translate(2px, 2px); }
```

Keep the offset at 1 to 3 px. This sets one word apart, which SKILL.md lists as a tell, so
use it only when print is the page's idea, once, and waive gate 38iii with that reason.

**Scanline** (a CRT cue for arcade and terminal subjects):

```css
:root { --scanline: oklch(from var(--color-ink) l c h / 0.06); }
.crt::after {
  content: ""; position: fixed; inset: 0; pointer-events: none;
  background: repeating-linear-gradient(transparent 0 2px, var(--scanline) 2px 3px);
}
```

**Deckle** (a perforated edge for one ticket or stub):

```css
.deckled {
  mask-image: radial-gradient(6px at 0 50%, transparent 97%, black);
  mask-size: 12px 24px; mask-repeat: repeat-y; mask-position: left;
}
```

## 7. Image treatments

**Duotone** (a photograph pulled into two of the palette's colours):

```css
.duotone { position: relative; isolation: isolate; background: var(--duo-light, var(--color-paper)); }
.duotone img { display: block; filter: grayscale(1) contrast(1.1); mix-blend-mode: multiply; }
.duotone::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: var(--duo-dark, var(--color-ink)); mix-blend-mode: lighten;
}
```

A duotone flattens a pale subject into an empty field. Choose frames with tonal range and
look at each through the treatment.

**Dithering** (an image reduced to dots: a print or early-computer look, and small files):

| Algorithm | Look | Suits |
| --- | --- | --- |
| Atkinson | high contrast, open highlights, the early-Macintosh look | editorial, newsprint, bold subjects |
| Floyd-Steinberg | smooth, even diffusion | general use, backgrounds |
| Bayer (ordered) | a visible regular grid | geometric and retro-game looks, fine overlays |
| Jarvis-Judice-Ninke | soft, keeps a photograph recognisable | portraits and detailed subjects |

Dither at the display size (a dithered image blurs when scaled), in one or two palette
colours, and save as PNG or lossless WebP. ImageMagick covers two of them:
`magick in.jpg -resize 800x -colorspace Gray -dither FloydSteinberg -colors 2 out.png` and
`magick in.jpg -resize 800x -colorspace Gray -ordered-dither o8x8 out.png`. Atkinson and
Jarvis need a dedicated tool or a few lines of canvas code. Use one algorithm per page.

**Other single-treatment options:** `mono` (greyscale with a contrast lift), `tint` (one
palette colour over greyscale), `muted` (saturation down), `warm` (a slight sepia). Apply
the same treatment to every photograph on the page so pictures from different sources read
as one set.

**Frames and shapes:**

```css
.framed  { outline: 1px solid oklch(from var(--color-ink) l c h / 0.1); outline-offset: -1px; }
.double  { border: 1px solid var(--color-rule); outline: 1px solid var(--color-rule); outline-offset: 4px; }
.slant   { clip-path: polygon(8% 0, 100% 0, 92% 100%, 0 100%); }
.arch    { border-radius: 999px 999px 0 0; }
.hexagon { clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); }
```

- Corner marks (two L-shaped pseudo-elements in the accent) suit print and survey subjects.
- A diagonal band or split across an image divides it into two zones with different
  treatments.
- Choose a shape because the subject has it: an arch for a doorway, a slant for speed.
  One shape language per page. A frame takes a border or a shadow, not both.
- A `clip-path` reveal is a motion option (`motion.md`).

## 8. Icons, logos, video

- **Icons:** one library per page (Lucide, Phosphor or Heroicons, or the project's own),
  one stroke width, drawn at the set's grid size, `currentColor`. An emoji is not an icon.
- **Logos:** the user's own. Simple Icons (`https://cdn.simpleicons.org/<slug>/<hex>`)
  only for a platform or brand the page really names. No invented logo wall.
- **Video:** the user's recording. `autoplay muted loop playsinline` with a `poster`, a
  visible pause control on any loop over five seconds, captions when it speaks.
- **Decorative `svg` and `canvas`** carry `aria-hidden="true"`. Meaningful ones carry a
  label.
- Every content image has alt text that says what it shows.

## 9. Calibration

Picture habits that currently read as generated. Each has honest uses:

- Mesh blobs, blurred orbs or an aurora behind text.
- A gradient box where a picture should be.
- A row of identical marks standing for a number. Set the number in type.
- Illustration packs and mascots that appear on every site.
- Stock faces offered as proof.
- An image that zooms or rotates on hover.
- A drawn browser bar with traffic lights around a fake screenshot.
