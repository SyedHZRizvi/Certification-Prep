---
title: "Module 6 Cheat Sheet: Nuke Fundamentals"
---

# 🗒️ Module 6 Cheat Sheet: Nuke Fundamentals

## Core Node Reference

| Node | Purpose |
|------|---------|
| Read | Load image sequences from disk |
| Write | Render output sequences |
| Merge | Composite two streams (over, plus, multiply, screen…) |
| Grade | Primary color correction |
| ColorCorrect | Shadow/midtone/highlight correction |
| Blur | Gaussian blur |
| Keyer | Chroma keying + despill |
| Transform | 2D translate/rotate/scale |
| Shuffle | Extract/reroute EXR channels |
| Curves | Per-channel curve color correction |
| Backdrop | Organizational label/grouping (no image effect) |

---

## Merge Operations

| Operation | Formula | Use Case |
|-----------|---------|---------|
| over | A + B × (1 − αA) | Standard compositing |
| plus (Add) | A + B | Fire, glow, lens flares |
| multiply | A × B | Shadows, darkening |
| screen | A + B − A×B | Brightening |
| from | B − A | Subtraction |
| difference | \|A − B\| | Difference mattes |

**MEMORIZE: over = A + B × (1 − alpha_A)**

---

## Grade Node Parameters

| Control | Effect |
|---------|--------|
| Blackpoint | Maps input value → black (0) |
| Whitepoint | Maps input value → white (1) |
| Lift | Shifts shadow values |
| Gain | Multiplies all values (brightens) |
| Offset | Adds constant to all values |
| Gamma | Midtone brightness curve |

---

## AOV Pass Reference

| Pass | Contents | Comp Use |
|------|----------|---------|
| beauty | Full final render | Starting point |
| diffuse_direct | Direct lit diffuse | Recolor CG lighting |
| specular | Specular highlights | Boost/reduce specularity |
| shadow | Shadow mask | Add shadows to plate |
| depth (Z) | Camera–surface distance | Depth-of-field |
| normal | Surface normals | Relighting |

---

## Nuke vs After Effects

| Feature | After Effects | Nuke |
|---------|--------------|------|
| Paradigm | Layer-based | Node graph (DAG) |
| Multi-channel EXR | Limited | Native (Shuffle) |
| Film pipeline | Broadcast/commercial | Feature film standard |
| Python scripting | Limited | Full API |
| Deep compositing | No | Yes |
| Free version | No | Non-Commercial (watermarked) |

---

## Key Shortcuts (Nuke)

| Key | Action |
|-----|--------|
| 1 | Connect hovered node to Viewer A |
| 2 | Connect hovered node to Viewer B |
| M | Create Merge node |
| G | Create Grade node |
| B | Create Blur node |
| Tab | Open node search |
| Ctrl+G | Create Group from selected |
