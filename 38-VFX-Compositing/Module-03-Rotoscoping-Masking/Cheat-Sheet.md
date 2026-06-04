---
title: "Module 3 Cheat Sheet: Rotoscoping & Masking"
---

# 🗒️ Module 3 Cheat Sheet: Rotoscoping & Masking

## Tool Selection Guide

| Situation | Best Tool |
|-----------|----------|
| Clean subject, simple background | Rotobrush 2.0 |
| Hair / fur / feathers | Rotobrush 2.0 + Refine Edge |
| Complex background / fast motion | Manual spline (cheat stack) |
| Feature film / large team | Silhouette FX |
| Stationary color isolation | Shape mask + Adjustment Layer |
| Key patch (local Keylight failure) | Combined Key + Roto |

---

## Rotobrush 2.0 Workflow

1. Double-click layer → Layer panel
2. Green strokes = include / Red strokes = exclude
3. Propagate forward automatically
4. Review every 5–10 frames; correct errors
5. Refine Edge on hair/fine detail
6. Freeze to bake the matte

---

## Cheat Roto Stack

| Layer | Mode | Purpose |
|-------|------|---------|
| Base | Add | Body silhouette |
| Head addition | Add | Expand over hair/head |
| Interior negative | Subtract | Arm/leg gaps |
| Hand addition | Add | Fine hand coverage |
| Hair gaps | Subtract | Between hair strands |

---

## Mask Feathering

- **0 feather** = hard edge (cut-out look)
- **8–20px uniform feather** = natural blend
- **Variable feather** = hard on body, soft on hair (professional)

---

## Track Matte Types

| Type | Uses Matte Layer's |
|------|--------------------|
| Alpha Matte | Alpha channel |
| Inverted Alpha | Inverted alpha |
| Luma Matte | Brightness (grayscale) |
| Inverted Luma | Inverted brightness |

---

## Rotobrush vs Silhouette

| Feature | Rotobrush 2.0 | Silhouette |
|---------|--------------|-----------|
| Speed | Fast | Faster for heavy work |
| Pipeline | AE only | Nuke export, film pipeline |
| Team | Single artist | Multi-artist shots |
| Cost | Included in AE | Separate license |
| Best for | Broadcast/commercial | Feature film |

---

## Key Shortcuts (After Effects)

| Key | Action |
|-----|--------|
| M | Reveal mask properties |
| Alt+W / Opt+W | Activate Rotobrush tool |
| G | Pen tool (mask drawing) |
| F | Mask Feather value |
