# Vaporwave Theme

[![License: csswitch Commercial](https://img.shields.io/badge/license-csswitch%20commercial-blue.svg)](./LICENSE)
[![Buy on Gumroad](https://img.shields.io/badge/Buy-%2449-brightgreen.svg)](https://csswitch.gumroad.com/l/csswitch-vaporwave)
[![Live Demo](https://img.shields.io/badge/demo-live-orange.svg)](https://csswitch.github.io/jekyll-vaporwave-theme/)

> **⚠️ License notice:** This theme is source-available but **not free to use**.  
> Viewing and learning from the code is welcome. Deploying it on any live site requires a [paid license](https://csswitch.gumroad.com/l/csswitch-vaporwave).  
> See [LICENSE](./LICENSE) for full terms.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-ready-brightgreen?logo=github)](https://csswitch.github.io/jekyll-vaporwave-theme/)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.x-red?logo=jekyll)](https://jekyllrb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

> Retro 80s/90s vaporwave aesthetic Jekyll theme — pastel neon gradients, synthwave perspective grid, chrome serif headlines, glitch hover effects, and CRT scanlines. Built for creative blogs and portfolios.

**[Live Demo →](https://csswitch.github.io/jekyll-vaporwave-theme/)**

---

## Features

- **Synthwave hero** — animated perspective CSS grid with cyan/pink lines, radial glow, floating CTA
- **Gradient text** — Playfair Display headings with `#ff71ce → #01cdfe` gradient fill
- **Glitch hover** — `clip-path` glitch on post titles (JS injects `data-text` for pseudo-elements)
- **CRT scanlines** — subtle repeating-linear-gradient overlay on `body::after`
- **Neon glow cards** — multi-layer `box-shadow` bloom on hover
- **Tag pills** — neon violet pills with glow on hover
- **Mobile nav drawer** — hamburger toggle for small screens
- **Copy-to-clipboard** — button auto-injected into every `<pre>` block
- **Zero dependencies** — vanilla JS only, no jQuery
- **GitHub Pages compatible** — safe plugins only

---

## Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `$pink` | `#ff71ce` | Primary accent, gradient, glow |
| `$cyan` | `#01cdfe` | Secondary accent, grid lines, dates |
| `$purple` | `#b967ff` | Tags, gradient secondary |
| `$yellow` | `#fffb96` | Pastel highlight |
| `$mint` | `#05ffa1` | Code text |
| `$bg` | `#0a0015` | Background |

---

## Quick Start

```bash
git clone https://github.com/csswitch/jekyll-vaporwave-theme.git my-site
cd my-site
bundle install
bundle exec jekyll serve
```

---

## Configuration

```yaml
vaporwave:
  grid: true          # synthwave perspective grid on hero
  scanlines: true     # CRT scanlines overlay
  glitch: true        # glitch effect on post titles
  gradient_text: true # gradient fills on headings
  neon_border: true   # neon glow on card borders
```

---

## License

MIT © [csswitch](https://github.com/csswitch)

Part of the **csswitch** premium Jekyll template pack.  
Browse all themes at [csswitch.github.io](https://csswitch.github.io)
