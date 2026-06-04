---
title: "Module 8 Cheat Sheet: Practical Digital FX"
---

# 🗒️ Module 8 Cheat Sheet: Practical Digital FX

## The Gareth Edwards Principle

> Always shoot something real, even if small, and build the digital around the physical.

More real-world elements → More photographic digital elements.

---

## Invisible VFX Categories

| Category | Example | Tool |
|----------|---------|------|
| Set extension | Expand a city exterior | DMP + Nuke / 3D render |
| Sky replacement | Wrong/overcast sky | Roto/key + replacement plate |
| Wire removal | Stunt rigging | Clean plate + RotoPaint |
| Beauty/cleanup | Blemish removal, de-aging | Nuke RotoPaint / Silhouette |
| Digital crowd | Add extras | CG crowd sim + comp |
| Atmospheric enhancement | Add depth haze | Fog element / blur |
| Invisible stitch | *1917*-style single take | Track + blend transition |

---

## Set Extension Integration Checklist

1. Match key light direction to plate shadows
2. Add atmospheric depth: haze, reduced contrast at distance
3. Reduce saturation and sharpness for distant elements
4. Add motion: wind-driven trees, bird sprites, parallax
5. Feather mask edge + color match
6. Apply sky light wrap at extension/plate boundary

---

## Wire Removal Methods

| Method | When | Speed |
|--------|------|-------|
| Clean plate + RotoPaint/clone | Clean plate available | Fast |
| Content-Aware Fill (AE) | No clean plate | Medium |
| Manual paint per frame | No clean plate, complex bg | Slow |

**Best prevention: always shoot clean plates on set.**

---

## Sky Replacement Workflow

1. Key/roto sky area
2. Place replacement sky below foreground
3. Color match sky to ambient light
4. Warm/cool foreground to match sky light
5. Apply light wrap at sky/foreground boundary
6. Match grain and noise

---

## Notable Invisible VFX

| Film | Effect | Studio |
|------|--------|-------|
| *Gravity* (2013) | All weightlessness + space | Framestore |
| *1917* (2019) | Invisible single-take stitches | DNEG |
| *The Revenant* (2015) | Digital breath steam, extensions | Rising Sun |
| *Mad Max: Fury Road* (2015) | Cloud replacement, crowd ext | Iloura |
| *Monsters* (2010) | Full feature VFX on consumer software | Edwards/James |
