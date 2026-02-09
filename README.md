# Frontend Design Masterclass

Build distinctive, production-grade frontend interfaces that avoid generic AI aesthetics.

## What This Skill Does

Teaches Claude to produce bold, intentional web design using an opinionated modern stack (SvelteKit 5, Bun, Hono, shadcn-svelte, Tailwind CSS v4). Includes deep reference documentation on typography, color theory, layout composition, microanimations, imagery, data visualization, and Mermaid diagram theming.

## When Claude Uses This Skill

Activates automatically when you ask Claude to build or style any web interface: landing pages, dashboards, hero sections, components, artifacts, or applications. Also triggers on design-adjacent requests like font selection, color palette creation, animation work, chart styling, and dark/light theme construction.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | SvelteKit 5 (Runes) |
| Runtime | Bun |
| API | Hono |
| UI | shadcn-svelte |
| Charts | LayerChart |
| Animation | Svelte Motion |
| Styling | Tailwind CSS v4 |
| Diagrams | beautiful-mermaid |
| Images | Nano Banana |

## Structure

```
frontend-design-masterclass/
  SKILL.md                              # Main skill instructions (296 lines)
  README.md                             # This file
  LICENSE.txt                           # MIT License
  references/
    landing-pages.md                    # 8 timeless styles, hero anatomy, flow patterns
    typography.md                       # Font catalogs, pairing strategies, type scales
    color-system.md                     # 3-group palette, harmony models, theme construction
    imagery.md                          # Dithering, overlays, Nano Banana, AI prompting
    data-graphics.md                    # Tables, charts, infographics, Mermaid integration
    microanimations.md                  # 5-state buttons, scroll animations, haptic patterns
    visual-kinetics.md                  # Parallax, glassmorphism, kinetic typography
    data-visualization.md               # LayerChart, shadcn-svelte charts, bento grids
    mermaid-theming.md                  # beautiful-mermaid setup, Shiki integration
```

## Installation

### Claude Code (filesystem)
```bash
cp -r frontend-design-masterclass ~/.claude/skills/
```

### Claude Code (plugin marketplace)
```
/plugin add /path/to/frontend-design-masterclass
```

### Claude API
```python
from anthropic import Anthropic
client = Anthropic()
skill = client.beta.skills.create(
    display_title="Frontend Design Masterclass",
    files=[("skill.zip", open("frontend-design-masterclass.zip", "rb"))],
    betas=["skills-2025-10-02"]
)
```

## License

MIT
