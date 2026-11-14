# Vendored from Hallmark

Everything in this folder is copied without modification from
[Nutlope/hallmark](https://github.com/Nutlope/hallmark), `skills/hallmark/`, at commit
`407fa689f4a276f2fd389208d271d0fef08f5058` (2026-11-05, version 2.0.0). MIT License,
Copyright (c) 2026 Hallmark contributors; the full text is in `LICENSE` beside this file.

| Path here | Upstream path | What it is |
| --- | --- | --- |
| `scripts/sloplint.mjs` | `scripts/sloplint.mjs` | the static gate checker |
| `scripts/sloplint-render.mjs` | `scripts/sloplint-render.mjs` | the render tier, imported by `sloplint.mjs` |
| `scripts/theme.mjs` | `scripts/theme.mjs` | used here for `photos` and `check` |
| `scripts/photos.json` | `scripts/photos.json` | index of 755 Wikimedia Commons photographs, read by both scripts |
| `references/themes/*.md` | `references/themes/*.md` | 50 theme files |
| `references/themes/index.json` | `references/themes/index.json` | the compiled theme index |

Left out: the theme preview pictures (`references/themes/*.jpg`, 5.2 MB), the theme
authoring `README.md`, Hallmark's `SKILL.md` and its other references and scripts.

The folder layout matches upstream because the scripts find each other and the catalog by
relative path. Do not edit these files. Behaviour this skill changes lives in
`scripts/lint.mjs` and `scripts/deal.mjs` one level up, which call into this folder.

The photographs indexed by `photos.json` are not Hallmark's: each keeps its own licence
(CC0, public domain, CC BY or CC BY-SA) and is credited on any page that uses it.

To update: copy the same paths from a newer Hallmark checkout, change the commit above and
in the top-level `NOTICE`, then run `node scripts/lint.mjs <a page> --render` and
`node scripts/deal.mjs "<a brief>"` to confirm both wrappers still work.
