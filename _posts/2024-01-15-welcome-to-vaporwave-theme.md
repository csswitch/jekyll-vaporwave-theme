---
layout: post
title: "Welcome to Vaporwave Theme"
date: 2024-01-15 09:00:00 +0000
tags: [jekyll, theme, vaporwave, retro, aesthetics]
description: "Vaporwave Theme brings the iconic 80s/90s retro aesthetic to your Jekyll blog — pastel neon gradients, synthwave grid, and glitch typography."
---

Vaporwave Theme is a Jekyll theme built for creators who want their blog to feel less like a tech article and more like a late-night drive through a neon-lit city from an alternate 1989. Hot pinks, electric cyans, soft violets. A synthwave grid hero. Serif headlines with gradient fills. Glitch hover effects that trigger on every post title.

## The Aesthetic

Vaporwave as an art movement emerged in the early 2010s as a critique of hyper-commodified culture — pastel gradients, Japanese text fragments, Greek busts, Windows 95 interfaces reimagined as dreamscapes. As a visual aesthetic it combines:

- **Pastel neons** — hot pink, electric cyan, soft purple, pastel lemon
- **Retro typography** — chrome serif (Playfair Display), monospace Space Mono
- **CRT nostalgia** — scanlines, glitch effects, perspective grids
- **Dreamy darkness** — deep purple/black backgrounds that make pastels pop

## Installing the Theme

```bash
git clone https://github.com/csswitch/jekyll-vaporwave-theme.git my-site
cd my-site
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` — you'll have the full vaporwave aesthetic running locally.

## Configuration

Open `_config.yml` to customize:

```yaml
title: "My Blog"
description: "Your tagline here"

vaporwave:
  grid: true          # synthwave perspective grid on hero
  scanlines: true     # CRT scanlines overlay
  glitch: true        # glitch effect on post titles
  gradient_text: true # gradient fills on headings
  neon_border: true   # neon glow on card borders
```

Each effect can be toggled independently. Turn off `scanlines` for a cleaner look, or keep `glitch: false` if you want the headers to stay still.

## Typography Choices

The theme uses three Google Fonts:

| Font | Usage |
|------|-------|
| Playfair Display | Headlines — serif with high contrast strokes |
| Space Grotesk | Body text — geometric sans, very readable |
| Space Mono | Code, dates, tags — chunky monospace |

The Playfair Display headlines get a CSS gradient fill via `-webkit-background-clip: text`. This works in all modern browsers and degrades gracefully (shows solid pink) in older ones.

## Writing Your First Post

```markdown
---
layout: post
title: "My Post Title"
date: 2024-01-15
tags: [vaporwave, design, css]
---

Content goes here...
```

Tags appear as neon pills in the post header and in the full tag cloud at `/tags/`. The home page hero rotates the 6 most recent posts in a responsive card grid.
