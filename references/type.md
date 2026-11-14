# Type: choosing faces, pairing, scale, loading

Read when choosing typefaces or setting a type scale. A menu: SKILL.md already says the
essential thing (one family or two, chosen for this brief, with a clear scale). Nothing
here is required.

The face catalog and loading rules adapt Hallmark's `fonts.md` and `craft.md` (MIT, see
NOTICE).

## 1. How many families

- **One family** is a complete answer. Weight, size and width do the work of a second
  face. It suits pages where the body voice is the brand: a letter, a manual, a long
  document, a tool.
- **Two families** when the display and the body have different jobs. Make them clearly
  distinct: a serif with a sans, a condensed head over a wide body, a heavy slab over a
  light grotesk. Two similar sans faces read as a mistake.
- **An outlier** is a third face with exactly one role: a wordmark, a headline figure, or
  code. A second role makes it a third family in running use.
- Three weights across the page is usually enough, picked as extremes: 300 beside 800, or
  400 beside 700.

## 2. Choosing

1. Name the class the idea calls for (table in section 3), from the subject: what its world
   prints, signs, engraves or types.
2. Take two or three candidates from that class.
3. Set the real headline in each and judge by shape and colour on the page. A face's name,
   reputation or usual association is not a reason.
4. Check the distinguishing characters for the content you have: `a` and `g` (one storey
   or two), `1 l I` and `0 O` (must differ on data-heavy pages), `Q` (where a face shows
   its hand), and the figures if the page shows numbers.

Free faces unless the user has confirmed a licence. Prefer variable fonts.

**First reaches.** Every model picks these first, so on a free choice they read as
unchosen. Use one when the brief asks for it or the project already runs on it, and move
on without apology:

- As display or body: Inter, Roboto, Open Sans, Lato, Poppins, Source Sans, Nunito,
  Montserrat, Raleway, Work Sans, DM Sans, Plus Jakarta Sans, system-ui, Arial, Helvetica.
- As body serif: Merriweather, Lora, Georgia. As mono: Courier New, the system mono.
- Saturated, fine faces that want an argument: Playfair Display, Cormorant Garamond,
  DM Serif Display, Fraunces, Instrument Serif, Recoleta, Space Grotesk, Bebas Neue,
  Unbounded as display; Geist, Instrument Sans, Mona Sans as body.

To see whether a catalog theme already owns a display face (useful for the custom card in
the deck):

```bash
node <skill-dir>/vendor/hallmark/scripts/theme.mjs check --face "Gloock"
```

## 3. Faces by class

Display faces no catalog theme uses. A start, not a fence.

| Class | Faces (source) |
| --- | --- |
| Roman serif | EB Garamond, Cardo, Castoro, Piazzolla, Alegreya, Marcellus (Google); Gambetta, Recia (Fontshare) |
| High-contrast serif | Gloock, Libre Bodoni, Abril Fatface, Rozha One, Besley (Google); Erode, Melodrama (Fontshare) |
| Slab serif | Arvo, Hepta Slab, Domine, Alfa Slab One, Solway (Google); Bespoke Slab (Fontshare) |
| Grotesk sans | Rethink Sans, Reddit Sans, Albert Sans (Google); Clash Grotesk, Supreme (Fontshare) |
| Geometric sans | Lexend, League Spartan, Afacad (Google); Satoshi, Technor, Excon (Fontshare) |
| Rounded sans | Inclusive Sans, Varela Round (Google); Chubbo, Comico (Fontshare) |
| Condensed and heavy | Teko, Tektur, Michroma, Antonio (Google); Clash Display, Panchang, Khand, Telma, Stardom, Array (Fontshare) |
| Mono as display | Space Mono, Fragment Mono, Red Hat Mono, Spline Sans Mono, Sometype Mono (Google) |
| Pixel | Press Start 2P, VT323, Pixelify Sans, Tiny5, DotGothic16, Workbench (Google) |
| Handwritten | Shantell Sans, Caveat, Gochi Hand, Reenie Beanie (Google); Sharpie (Fontshare) |

**Body faces.** Sans: Hanken Grotesk, IBM Plex Sans, Figtree, Onest, Sofia Sans, Golos
Text, Karla, Chivo, Albert Sans, Public Sans, Archivo, Manrope (Google); Switzer, General
Sans, Satoshi (Fontshare). Serif: Newsreader, Source Serif 4, Literata, Spectral, Crimson
Pro, EB Garamond, Piazzolla (Google); Sentient (Fontshare).

**Mono, for code, figures and measurements.** Geist Mono, JetBrains Mono, IBM Plex Mono,
DM Mono, Fira Code, Azeret Mono, Chivo Mono, Overpass Mono (Google).

**Sources.** Google Fonts is free and served from a CDN. Fontshare is free for commercial
use: `<link href="https://api.fontshare.com/v2/css?f[]=<family>@<weights>&display=swap" rel="stylesheet">`.
A paid foundry only when the user has confirmed the licence.

## 4. Pairing

| Strategy | How | Example |
| --- | --- | --- |
| Structure contrast | serif display over sans body, or the reverse | Gloock over Hanken Grotesk |
| Width contrast | condensed head over a normal-width body | Antonio over Public Sans |
| Weight contrast | one family, far-apart weights | Rethink Sans 800 over 400 |
| Era contrast | an old-style serif with a plain modern sans | EB Garamond with Switzer |
| Voice contrast | a characterful display with a quiet body | Shantell Sans over Figtree |

**The wordmark** in the nav and footer may take a face of its own. On a page with a strong
tone it often should, since a wordmark in the body face at 600 is the un-designed default.
Collapse it into the body family when the body voice is the brand.

## 5. Scale and setting

Build sizes from a ratio on a 16 px base, and use few of them, far apart.

| Ratio | Sizes from 16 px | Feel |
| --- | --- | --- |
| 1.200 minor third | 16, 19, 23, 28, 33, 40 | gentle, dense interfaces |
| 1.250 major third | 16, 20, 25, 31, 39, 49 | balanced |
| 1.333 perfect fourth | 16, 21, 28, 38, 50, 67 | clear hierarchy |
| 1.414 augmented fourth | 16, 23, 32, 45, 64, 90 | dramatic, editorial |
| 1.618 golden | 16, 26, 42, 67, 109 | poster scale |

```css
:root {
  --text-body: 1rem;
  --text-lead: 1.25rem;
  --text-title: 1.5625rem;
  --text-section: clamp(1.75rem, 3vw + 0.75rem, 3rem);
  --text-display: clamp(2.5rem, 5vw + 1rem, 5.5rem);
}
```

| Setting | Guide |
| --- | --- |
| Display line-height | 1.0 to 1.15, tighter as the size grows; never under 1.0 on uppercase that can wrap |
| Heading line-height | 1.1 to 1.25 |
| Body line-height | 1.5 to 1.65; a little more for a serif |
| Display tracking | -0.02 to -0.04em on a normal-width face; 0 to -0.015em on a condensed or very heavy one |
| Body tracking | none |
| Measure | 45 to 75 characters for prose; `max-width: 65ch` is a safe start |
| Body size | 16 px or more |
| Headline by length | 20 characters or fewer can take full display size; 21 to 50 a step down; over 90, rewrite |

- **Labels, captions, table heads, tags, nav links:** the body face a step smaller, in
  sentence case, untracked. This is the quiet alternative to the tracked uppercase label
  and the mono label, which SKILL.md names as tells. Capitals belong to a wordmark and to a
  page whose display voice is uppercase.
- **Mono** for code, a figure or a measurement, or when mono is the page's material.
- Put the heading's measure on the element in `ch` (`h1 { max-width: 20ch }`), not on a
  wrapper.
- Break a headline only between phrases, and check the break at 375 px.

## 6. Details that show care

- `text-wrap: balance` on headings, `text-wrap: pretty` on body copy.
- `font-variant-numeric: tabular-nums` on figures that are compared in columns.
- Curly quotes, a true ellipsis, a multiplication sign in dimensions, a non-breaking space
  inside unit pairs (`10 MB`).
- `overflow-wrap: break-word; min-width: 0` on display heads so a long word cannot push
  the page sideways at 320 px.
- Hanging punctuation on a pull quote: `text-indent: -0.45em`.
- Optical alignment of a large head with the text under it: `margin-left: -0.04em`.
- Never justify without hyphenation. Never set body copy in capitals.

## 7. Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gloock&family=Hanken+Grotesk:wght@400;700&display=swap" rel="stylesheet">
```

- Load only the weights the page uses, one `<link>` per source, with `display=swap`.
- A self-hosted `@font-face` carries `font-display: swap` and, where published, metric
  overrides (`size-adjust`, `ascent-override`, `descent-override`) so the swap does not
  shift the layout.
- `font-synthesis: none`, and load the italic if a heading uses it. A faked bold or italic
  is visible.
- A variable font loads once and gives every weight.
- For production, self-host and subset to the characters in use (`pyftsubset` or
  `glyphhanger`, output woff2). Aim for three font files or fewer above the fold and under
  about 150 KB in total.
- The fallback stack names a system face of the same build: a grotesk falls back to
  `system-ui`, a serif to Georgia.
- A single-file artifact that must work offline can use a system stack on purpose. Say so
  in the plan, and choose the stack as carefully as a web font.
