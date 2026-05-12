---
layout: post
title: "CSS Techniques Behind Vaporwave: Gradients, Glitch & Synthwave Grid"
date: 2024-01-22 09:00:00 +0000
tags: [css, gradients, animation, design, vaporwave]
description: "A breakdown of the CSS techniques powering Vaporwave Theme — gradient text, perspective grid, glitch clip-path, and CRT scanlines."
---

Vaporwave Theme is built almost entirely on CSS — no canvas, no WebGL, no heavy JS libraries. This post breaks down the four core techniques that create the aesthetic.

## 1. Gradient Text with `-webkit-background-clip`

The headline gradient fill uses a WebKit-era property that's now in the CSS spec:

```css
h1 {
  background: linear-gradient(90deg, #ff71ce, #01cdfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

The trick: set `color` to `transparent` so the background bleeds through the text shape. The `background-clip: text` (without prefix) is the spec version; `-webkit-background-clip` is the one that actually works in Chrome and Safari. Firefox needs both.

**Important:** `text-fill-color` (not `color`) must be transparent — `color: transparent` alone doesn't work in Safari.

## 2. Synthwave Perspective Grid

The animated grid in the hero is pure CSS:

```css
.vp-hero::before {
  content: '';
  position: absolute;
  bottom: 0; left: -50%; right: -50%;
  height: 60%;
  background-image:
    linear-gradient(rgba(1,205,254,0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,113,206,0.2) 1px, transparent 1px);
  background-size: 80px 80px;
  transform: perspective(300px) rotateX(60deg);
  transform-origin: bottom center;
  animation: grid-scroll 3s linear infinite;
  mask-image: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%);
}

@keyframes grid-scroll {
  from { background-position-y: 0; }
  to   { background-position-y: 80px; }
}
```

The `transform: perspective(300px) rotateX(60deg)` is what tilts the flat grid into the 3D floor illusion. `transform-origin: bottom center` anchors the rotation at the floor. The `mask-image` fades the grid to nothing at the top, so it blends into the hero background.

The animation (`background-position-y`) scrolls the grid towards the viewer — `80px` matches `background-size`, so it loops seamlessly.

## 3. Glitch Effect with `clip-path`

The glitch on post title hover uses two pseudo-elements that reveal different clipped slices at staggered offsets:

```css
@keyframes glitch-1 {
  0%   { clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
         transform: translate(-3px, 0); }
  25%  { clip-path: polygon(0 60%, 100% 60%, 100% 75%, 0 75%);
         transform: translate(3px, 0); }
  100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0);
         transform: translate(0, 0); }
}

.glitch::before {
  content: attr(data-text);  /* text copied from JS */
  position: absolute;
  top: 0; left: 0;
  color: #ff71ce;
  animation: glitch-1 0.3s steps(1) forwards;
}
```

`steps(1)` is the key — it makes the animation jump instantly between keyframes instead of interpolating. That's what produces the harsh digital glitch feel rather than a smooth transition.

JavaScript copies the text content into `data-text` so the pseudo-element can reference it with `attr(data-text)`.

## 4. CRT Scanlines

The subtle scanlines overlay is a `repeating-linear-gradient` on `body::after`:

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent, transparent 2px,
    rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px
  );
  pointer-events: none;
  z-index: 9999;
}
```

`repeating-linear-gradient(0deg, ...)` draws horizontal bands — 2px transparent, 2px dark. This sits above everything (`z-index: 9999`) with `pointer-events: none` so it doesn't block clicks. The opacity is deliberately low (`0.025`) so it reads as a texture rather than noise.

## Putting It Together

These four techniques combine to create the full aesthetic with under 150 lines of CSS. No images, no JS frameworks, no performance overhead — just geometry and color working together.
