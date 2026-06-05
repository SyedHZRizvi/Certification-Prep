---
title: "Module 3 Cheat Sheet: Rotoscoping & Masking"
---

# 🗒️ Module 3 Cheat Sheet: Rotoscoping & Masking

## Roto Tool Selection Guide

| Situation | Best Tool |
|-----------|----------|
| Clean subject, simple background | Rotobrush 2.0 |
| Hair / fur / feathers | Rotobrush 2.0 + Refine Edge |
| Complex background / fast motion | Manual spline (cheat stack) |
| Feature film / large team | Silhouette FX |
| Stationary color isolation | Shape mask + Adjustment Layer |
| Key patch (local Keylight failure) | Combined Key + Roto |
| Archival footage (no other option) | Manual spline |
| De-aging face region | Per-frame manual roto with soft feather |

---

## Rotobrush 2.0 Workflow

| Step | Action |
|------|--------|
| 1 | Double-click layer → open in Layer panel |
| 2 | Green strokes = include / Red strokes = exclude |
| 3 | Propagate forward automatically |
| 4 | Review every 5–10 frames; correct errors |
| 5 | Use Refine Edge on hair/fine detail |
| 6 | Freeze to bake the matte |

**Cannot propagate backward — start from an earlier frame for corrections.**

---

## Rotobrush 2.0 Strengths and Limitations

| Strength | Limitation |
|----------|-----------|
| Fast for clean subjects | Fails on similar-color background overlap |
| ML-based edge preservation | Motion blur requires manual refinement |
| Automatic propagation | Backward propagation not available |
| Better translucent subjects vs keying | Review every few frames still required |

---

## Cheat Roto Stack

| Layer | Mode | Purpose |
|-------|------|---------|
| Base | Add | Body silhouette |
| Head addition | Add | Expand over hair/head |
| Interior negative | Subtract | Arm/leg gaps |
| Hand addition | Add | Fine hand coverage |
| Hair gaps | Subtract | Between hair strands |

**Use many simple shapes (few points each) — never one complex spline with 100+ points.**

---

## Roto Tool Comparison: AE vs Silhouette vs Nuke RotoPaint

| Feature | AE Rotobrush 2.0 | Silhouette | Nuke RotoPaint |
|---------|-----------------|-----------|----------------|
| Automation | High (ML) | Medium (tracking assist) | Low (manual) |
| Best scale | Commercial, TV | Feature film | Feature film |
| Team | Single artist | Multi-artist | Multi-artist |
| Spline control | Basic | Advanced (B-spline, Catmull-Rom) | Good |
| Pipeline | AE native | EXR/Nuke export | Nuke native |
| Cost | Included in AE | Separate license | Included in Nuke |

---

## Mask Feathering

| Feather Value | Result | Use |
|--------------|--------|-----|
| 0 (hard) | Cut-out edge | Rare — only for flat graphic elements |
| 8–20px uniform | Natural blend | Body and hair (acceptable approach) |
| Variable (vertex-level) | Hard on body, soft on hair | Professional approach |

---

## Track Matte Types

| Type | Uses Matte Layer's |
|------|--------------------|
| Alpha Matte | Alpha channel |
| Inverted Alpha Matte | Inverted alpha |
| Luma Matte | Brightness (luminance) |
| Inverted Luma Matte | Inverted brightness |

---

## Color Isolation Masking: Common Uses

| Task | Mask Approach |
|------|-------------|
| Darken sky behind building | Shape mask on sky area + Adjustment Layer |
| Change car color | Tracked shape mask on car |
| Isolate skin tones | Keylight key on skin → luma matte |
| Vignette | Ellipse mask, Subtract mode, feathered |
| Selective depth-of-field | Z-depth pass from 3D render as luma matte |

---

## Silhouette vs AE: Quick Reference

| Feature | After Effects | Silhouette |
|---------|--------------|-----------|
| Speed for complex roto | Slow (CPU) | Optimized roto engine |
| Spline stack management | Difficult at scale | Purpose-built |
| Nuke pipeline | Rendered back into AE | Direct Nuke output |
| Motion blur tools | Limited | Dedicated refine tools |
| Team/collaboration | Single artist | Multi-artist shots |

---

## Professional Roto Quality Metrics

| Good Technique | Amateur Technique |
|---------------|------------------|
| Sparse keyframes — shape holds for multiple frames | Dense keyframes — re-drawn every frame |
| Layered simple shapes (5–10 pts each) | Single complex spline (50–100+ pts) |
| Soft feather on hair/edge areas | Hard edge everywhere |
| Face roto with soft skin boundary | Face roto with hard outline |

---

## Key Shortcuts (After Effects)

| Key | Action |
|-----|--------|
| M | Reveal mask properties |
| Alt+W / Opt+W | Activate Rotobrush tool |
| G | Pen tool (mask drawing) |
| F | Mask Feather value |
| Ctrl+Shift+H | Hide mask outlines (view clean) |


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.
