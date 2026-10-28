---
title: Hallmark integration
source: https://github.com/Nutlope/hallmark
source-commit: 6033bab2a8051b5454552d2e8e6cb8f27c483a42
reviewed: 2026-10-28
---

# Hallmark integration

Read this when the masterclass routes a new page or screen to Hallmark, or the user
explicitly requests Hallmark redesign/audit. Keep the upstream skill intact and load
its references progressively instead of copying its theme library into this skill.

## Locate and load

The full checkout is `/home/cheta/git/hallmark`. The installed skill is:

`/home/cheta/code/custom-skills/hallmark/SKILL.md`

That link resolves to `/home/cheta/git/hallmark/skills/hallmark/SKILL.md`. Read the
installed entrypoint, then `references/flow.md` sections **Harnesses** and
**Framework projects** inside Hallmark. If this machine's path is unavailable,
resolve the installed `hallmark` skill from the harness roster. If it is absent,
report that dependency as unavailable and use the masterclass's own workflow;
never report Hallmark checks as passed.

## Select the scope

- **New site or page:** follow Hallmark's preflight, material inventory, theme deal
  (or custom direction when requested), page anatomy, hero-first build, and sweep.
- **New app screen:** use Hallmark's **App screens** branch and `--scope app`.
  Keep the screen's working density and established application system.
- **Existing design:** ordinary edits stay in the project's system. Only an explicit
  Hallmark request selects `redesign <target>` or `audit <target>`; read Hallmark's
  `references/redesign.md`. Record the before state and verify kept content/wiring.
- **Single component:** keep local conventions unless Hallmark is requested. When
  selected, use its **Component scope** branch and `--scope component`.

## One design owner, existing implementation stack

Hallmark owns the visual direction and its Floor/Reflex/Finish gates for its run.
The masterclass's older aesthetic recipes are alternatives, not additional gates.
In particular, do not force the masterclass's six-section limit, font bans, hero
textures, gradients, animated title, universal motion, or per-page font changes
onto a Hallmark theme or a locked product brand.

Use the masterclass's SvelteKit/Bun/Hono stack for new standalone work; preserve an
existing project's framework and runtime. Implement with its components and routes.
Consult masterclass chart, diagram, or interaction references only for the needed
implementation pattern, retaining Hallmark's tokens and motion choices.

Respect `design.md`/`DESIGN.md` and existing tokens. Read Hallmark's
`references/export-formats.md` before scaffolding into Tailwind or shadcn-svelte:
map existing semantic tokens, scope a new page's overrides, keep `base.css` in the
base layer, and avoid the documented shadcn accent/muted token collisions. Never
replace shared styles or an existing route merely to fit a theme.

For landing-page strategy, use masterclass `landing-pages.md` Section 5 to choose
which claims and objections need evidence. Hallmark's material inventory and the
visitor's job determine the page; a generic benefits/steps/FAQ sequence does not.
No invented customers, quotes, metrics, guarantees, or backend success states.

## Verification

Use the scripts from the installed skill directory. For a SvelteKit page, pass the
actual changed source and stylesheet paths and the route served by the project:

```bash
node /home/cheta/code/custom-skills/hallmark/scripts/sloplint.mjs src/routes/+page.svelte src/app.css --render --url http://localhost:5173/
```

Adapt the paths and URL to the actual application. Add `--stage hero` for the first
viewport check, `--scope app` for an app screen, or `--scope component` for a component.
For an explicit redesign, use `--before` before edits and `--kept` after them on the
same target. Run the project's declared build/check commands as well.

The static tier reads Svelte and other framework sources. The render tier needs a
running route, Puppeteer, and Chrome/Chromium. A skipped render is unverified,
never a browser pass. Use the gstack browse skill for interactive browser QA and
inspect the saved screenshots with vision before making visual claims. Hallmark's
mechanical findings supplement that inspection. Distinguish a fresh-context review
from a same-context review when the harness cannot provide an independent reviewer.

Hallmark's optional Together AI comp/image-generation branch is not enabled by
finding an API key alone. Follow the user's authorized image-generation tools and
spending scope. Do not install edit-time hooks or register global services as part
of a page build.
