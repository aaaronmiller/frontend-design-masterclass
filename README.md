# Frontend Design Masterclass

> A Claude Code / CLI-agent **skill** that builds distinctive, high-performance frontend UI — not generic boilerplate.

![Skill](https://img.shields.io/badge/Claude%20Code-Skill-8b5cf6?style=for-the-badge&logo=anthropic&logoColor=white)
![Svelte](https://img.shields.io/badge/SvelteKit%205-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000?style=for-the-badge&logo=bun&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-E36002?style=for-the-badge&logo=hono&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind%20v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A portable `SKILL.md` package that teaches an AI agent to design interfaces that **resonate, not just render** — enforcing bold, intentional design with a modern, opinionated stack. Triggers on web pages, dashboards, landing pages, apps, styling, theming, fonts, animations, charts, and dark/light modes.

## Stack it enforces

| Layer | Choice |
|---|---|
| Framework | **SvelteKit 5** with Runes (`$state`, `$derived`, `$effect`) |
| Runtime | **Bun** |
| Backend / API | **Hono** (edge-first routes & middleware) |
| UI primitives | **shadcn-svelte** (headless — overrides all defaults) |
| Charts | **LayerChart** (Layer Cake) |
| Animation | **Svelte Motion** + native `svelte/transition` & `svelte/animate` |
| Diagrams | **beautiful-mermaid** (themed SVG, Shiki-compatible) |
| Styling | **Tailwind CSS v4** + CSS custom properties |
| Testing | **Playwright** visual regression |
| Deploy | `adapter-static` / `adapter-vercel` |

## How it works

1. **Intent identification** — classifies each request across three dimensions before loading any reference, so the right design language is applied.
2. **Progressive disclosure** — pulls only the reference docs it needs from [`references/`](references/):

   `color-system` · `typography` · `landing-pages` · `data-visualization` · `data-graphics` · `imagery` · `microanimations` · `visual-kinetics` · `mermaid-theming` · `web-design-themes`

## Install

```bash
# Clone into your agent's skills directory
git clone https://github.com/aaaronmiller/frontend-design-masterclass.git \
  ~/.claude/skills/frontend-design-masterclass
```

The skill auto-activates when a frontend/design task matches its triggers. Also distributable via the included `marketplace.json`.

## License

MIT — see [LICENSE.txt](LICENSE.txt).
