# Frontend Design Masterclass

A skill for Claude Code and other CLI agents that designs and builds distinctive web
pages, UI and HTML output. Version 3.0.0.

It is a superset of Anthropic's `frontend-design` skill. The entry file keeps Anthropic's
2026-09-03 text as its spine (ground the design in the subject, plan tokens, check the plan
against the five AI-default clusters, spend boldness in one place, critique from
screenshots) and adds deeper resources as menus the agent picks from.

## What is in it

| Part | What it does |
| --- | --- |
| `SKILL.md` | The spine, a seven-item floor, the stack rule, and a table of menus. Under 15 KB. |
| `references/` | Eight menus: direction, colour, type, imagery, motion, layout, data, landing pages. Each is read only when the brief needs it. |
| `scripts/deal.mjs` | Deals three far-apart themes from a 50-theme catalog for a brief; the agent adds a fourth of its own, scores all four and picks one. |
| `scripts/lint.mjs` | Runs Hallmark's `sloplint` with its page budgets off. Static checks, and with `--render` a browser pass from 320 to 1920 px with screenshots. |
| `vendor/hallmark/` | Unmodified Hallmark assets (MIT): the linter, the theme catalog, and an index of 755 openly licensed photographs. |

## The floor

Seven requirements, and nothing else in the skill is mandatory: responsive from 320 to
1920 px, visible keyboard focus, reduced motion honoured, WCAG AA contrast, nothing
invented presented as fact, a screenshot critique before delivery, and a lint pass. None
of them dictates page shape.

## Stack

No default stack. Pages and artifacts are plain HTML and CSS. An existing project keeps
its own stack. SvelteKit 5 with Bun and Hono is offered as a default only when a user
starts a new app and names no stack.

## Commands

```bash
node scripts/deal.mjs "a neighbourhood noodle bar that takes walk-ins"
node scripts/lint.mjs path/to/page.html --render
node scripts/lint.mjs path/to/page.html --hallmark      # upstream Hallmark behaviour, every gate on
node vendor/hallmark/scripts/theme.mjs photos "hands kneading dough" --n 3
```

Requirements: Node 18 or later. The render tier also needs `puppeteer-core` and a Chrome or
Chromium; `lint.mjs` looks in the usual per-user caches, and `HALLMARK_PUPPETEER` and
`CHROME_PATH` override that. Without a browser the static tier still runs and the render
tier reports that it did not.

Gates 20, 58, 59, 77 and 78 (Hallmark's stamp and its word, section and size budgets) are
off by default. Gates 44a to 44d, 79 and 80 (hero geometry and drawn illustration) report
as advice. `references/direction.md` has the full gate catalog.

## Install

```bash
git clone https://github.com/aaaronmiller/frontend-design-masterclass.git \
  ~/.claude/skills/frontend-design-masterclass
```

Optional companions: the `imagegen` skill for generated images, and the standalone
`hallmark` skill for a full Hallmark run. Neither is required.

## Licence

The skill's own text and scripts are MIT, see [LICENSE.txt](LICENSE.txt). It includes
Apache-2.0 text from Anthropic and MIT material from Hallmark, Emil Kowalski, Elaya and
Leonxlnx. [NOTICE](NOTICE) lists each source, commit and change.
