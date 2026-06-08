---
title: "Module 6 Cheat Sheet: Nuke Fundamentals"
---

# 🗒️ Module 6 Cheat Sheet: Nuke Fundamentals

## Core Node Quick Reference

| Node | Purpose | Key Input(s) |
|------|---------|-------------|
| Read | Load image sequences from disk | file, colorspace |
| Write | Render output sequences | file, colorspace, channels |
| Merge | Composite two image streams | A (foreground), B (background) |
| Grade | Primary color correction | Blackpoint, Whitepoint, Gain, Gamma |
| ColorCorrect | Shadow/midtone/highlight correction | Sat, Contrast, Gamma per zone |
| Blur | Gaussian blur | Size (px radius) |
| Keyer | Chroma keying + despill | Screen Colour |
| Transform | 2D translate/rotate/scale | Translate, Rotate, Scale, Filter |
| Shuffle | Extract/reroute EXR channels | in1, in2, in3 per output channel |
| Curves | Per-channel curve correction | Master, R, G, B, A curves |
| Backdrop | Organizational label | Label, tile_color |
| Dot | Wire routing without operation |, |
| Group | Encapsulate multi-node operation |, |

---

## Merge Operations Quick Reference

| Operation | Formula | Use Case |
|-----------|---------|---------|
| over | A + B × (1 − αA) | Standard compositing |
| plus (Add) | A + B | Fire, glow, lens flares |
| multiply | A × B | Shadows, darkening |
| screen | A + B − A × B | Brightening without clipping |
| from | B − A | Subtraction |
| difference | |A − B| | Difference matte generation |

**MEMORIZE: over = A + B × (1 − alpha_A). This is the mathematical foundation of compositing.**

---

## Grade Node Parameters

| Control | Effect |
|---------|--------|
| Blackpoint | Maps this input value → output black (0) |
| Whitepoint | Maps this input value → output white (1) |
| Lift | Adds offset to shadow values |
| Gain | Multiplies all values (brightens/darkens) |
| Multiply | Per-channel multiply |
| Offset | Adds constant to all values |
| Gamma | Midtone brightness curve |
| Reverse | Reverses the grade (for ungrading) |

---

## AOV Pass Reference

| Pass Name | Contents | Compositing Use |
|-----------|----------|----------------|
| beauty | Full final render | Starting point; can be overridden |
| diffuse_direct | Directly lit diffuse color | Recolor CG without losing lighting |
| diffuse_indirect | Indirect (bounce) diffuse | Adjust ambient contribution |
| specular | Specular highlights | Boost/reduce specularity independently |
| reflection | Ray-traced reflections | Remove/replace reflections |
| shadow | Shadow mask (0=lit, 1=shadowed) | Control shadow intensity |
| depth (Z) | Camera–surface distance | Depth-of-field simulation |
| normal | Surface normal direction | Relighting operations |
| ambient_occlusion | Contact shadow | Grounding elements |

---

## GPU vs CPU in Nuke

| Operation | GPU Accelerated | Notes |
|-----------|----------------|-------|
| Blur (Gaussian) | Yes | Substantial benefit at large radii |
| Merge | Yes | Benefit at 4K+ resolution |
| Grade / ColorCorrect | Yes | Simple math, bandwidth wins |
| Keyer | Yes | |
| ZDefocus | Yes | High VRAM requirement |
| Deep compositing | No (CPU) | CPU-bound regardless of GPU |
| Roto / RotoPaint | No (CPU) | Bezier math is CPU-bound |
| Python scripting | No (CPU) | All Python runs on CPU |

---

## Nuke Script Organization (Professional Standard)

| Convention | Standard |
|------------|---------|
| Backdrops | Color-coded sections: Inputs (blue), Keying (orange), CG (green), Grading (red), Output (white) |
| Dots | Route wires for readability, no image operation |
| Groups | Encapsulate complex operations into a single box |
| Gizmos | Reusable encapsulated tools shared across productions |
| Naming | `Read_plate_hero`, `Read_CG_beast_beauty`, descriptive names |
| Disabled nodes | Experimental nodes disabled, not deleted |

---

## Nuke vs After Effects

| Feature | After Effects | Nuke |
|---------|--------------|------|
| Paradigm | Layer-based (timeline) | Node graph (DAG) |
| Multi-channel EXR | Limited | Native (Shuffle node) |
| Film pipeline | Broadcast/commercial | Feature film standard |
| Python scripting | Limited ExtendScript | Full Python API |
| Deep compositing | No | Yes |
| Scene-linear workflow | Via OpenColorIO plugin | Native |
| Team collaboration | Single artist | 50+ artists simultaneously |
| Free version | No | Non-Commercial (watermarked renders) |
| Industry adoption | Broadcast/commercial | ILM, Weta, Framestore, MPC, Dneg |

---

## Color Correction Decision Tree

```
Is the image a live plate?
  └─ Yes → Is it log encoded?
       ├─ Yes → Apply IDT (Input Device Transform) to convert to scene-linear first
       └─ No → Apply Grade for exposure/color matching
Is the image a CG render?
  └─ Is it in ACEScg?
       ├─ Yes → Grade directly (already in working linear space)
       └─ No → Apply colorspace conversion node first
Are you matching elements?
  └─ Match shadows (Blackpoint/Lift) FIRST, then exposure (Gain), then color (per-channel)
```

---

## Viewer Shortcuts (Nuke)

| Key | Action |
|-----|--------|
| 1 | Connect hovered node to Viewer A input |
| 2 | Connect hovered node to Viewer B input |
| W | Wipe between A and B in Viewer |
| R / G / B / A | View individual RGBA channels |
| H | View all channels (RGBA combined) |
| F | Fit frame to Viewer |

---

## Key Shortcuts (Node Graph)

| Key | Action |
|-----|--------|
| M | Create Merge node |
| G | Create Grade node |
| B | Create Blur node |
| Tab | Open node search/create |
| Ctrl+G | Create Group from selected nodes |
| D | Disable/enable selected node |
| Ctrl+Shift+G | Enter selected Group |
