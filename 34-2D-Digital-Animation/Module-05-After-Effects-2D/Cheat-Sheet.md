---
permalink: /34-2D-Digital-Animation/Module-05-After-Effects-2D/Cheat-Sheet/
title: "Module 5 Cheat Sheet: After Effects for 2D Animation"
---

# ⚡ Module 5 Cheat Sheet — After Effects for 2D Animation

---

## AE vs. Animate Terminology

| Animate Term | After Effects Equivalent |
|--------------|--------------------------|
| Stage | Composition (Comp) |
| Symbol | Pre-composition |
| Library | Project panel |
| Nested symbol | Pre-comp inside a layer |
| Layer | Layer (same concept) |
| Tween | Keyframes + Graph Editor easing |
| Guide layer | Guide layer (never renders) |
| Scene | Composition |

---

## Illustrator → After Effects Workflow

```
1. Design in Illustrator — one layer per body part
2. File → Import → File
   "Import as: Composition — Retain Layer Sizes"
3. Select Illustrator layers in AE
4. Layer → Create → Create Shapes from Vector Layer
5. Original AI layer is auto-HIDDEN (not deleted)
6. New Shape Layer replaces it — now fully editable in AE
7. Animate natively: Trim Paths, expressions, parenting
```

---

## Puppet Pin Types

| Pin Type | Use |
|----------|-----|
| **Deform Pin** | Primary; moving it deforms the mesh |
| **Stiff Pin** | Creates rigid area resisting deformation |
| **Advanced Pin** | Per-pin rotation and scale control |

> Puppet Pins work best on a **single flattened layer**. For articulated rigs, use parenting + DUIK (Module 6).

---

## Import Format Guide

| Source | Best Format | Preserves Alpha? | Preserves Layers? |
|--------|------------|-----------------|------------------|
| Illustrator | .ai as Comp | Yes | Yes (per AI layer) |
| Animate (frame-by-frame) | PNG Sequence | Yes | No (per frame) |
| Animate (compositing) | ProRes 4444 MOV | Yes | No (video) |
| Photoshop | .psd as Comp | Yes | Yes (per PSD layer) |

---

## Parenting Shortcuts

| Action | Method |
|--------|--------|
| Pick Whip | Drag from child's Parent column to parent layer |
| Set parent via dropdown | Click Parent column dropdown; select layer name |
| Null Object | Layer → New → Null Object |

**Null Object:** Invisible at render time. Use as invisible rig controller. **Essential for professional rigs.**

---

## Easing Shortcuts — Complete Reference

| Shortcut | Effect |
|----------|--------|
| F9 | Easy Ease (both sides) |
| Shift+F9 | Easy Ease In (incoming only) |
| Ctrl/Cmd+Shift+F9 | Easy Ease Out (outgoing only) |

**After F9:** Open Graph Editor → adjust handles manually. Default Easy Ease is always a starting point.

---

## Graph Editor — Speed vs. Value

| Graph | Shows |
|-------|-------|
| **Speed Graph** | Velocity — peaks = fast, valleys = slow/hold |
| **Value Graph** | Absolute property value over time |

Use **Speed Graph** for animation work. Value Graph is better for understanding position/rotation changes.

---

## Key After Effects Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Pre-compose | Ctrl+Shift+C | Cmd+Shift+C |
| Easy Ease | F9 | F9 |
| Puppet Pin Tool | Ctrl+P | Cmd+P |
| RAM Preview | Space | Space |
| Toggle Graph Editor | Shift+F3 | Shift+F3 |
| New Null Object | Alt+Shift+Ctrl+Y | Opt+Shift+Cmd+Y |
| New Solid | Ctrl+Y | Cmd+Y |
| Duplicate layer | Ctrl+D | Cmd+D |
| Split layer | Ctrl+Shift+D | Cmd+Shift+D |
| Solo layer | click S icon | click S icon |
| Fit comp to viewer | Shift+/ | Shift+/ |
| Toggle layer shy | click shy icon | click shy icon |
| Add keyframe | Alt+Shift+P/R/S/T | Opt+Shift+P/R/S/T |
| U — show keyframes | U | U |
| UU — show modified | UU | UU |

---

## PNG Sequence Export (Animate → AE)

For frame-by-frame with transparency:
- Animate → File → Export → Export Movie → PNG Sequence
- In AE: File → Import → File → select first frame → check "PNG Sequence"
- Preserves alpha channel — essential for compositing over backgrounds

---

## H.264 Export Rule

```
AE Render Queue → does NOT offer H.264/MP4
Composition → Add to Adobe Media Encoder Queue → H.264 ✓
```

> 🚨 This is frequently tested. H.264 always goes through Media Encoder.

---

## Pre-Comp Common Uses

| Scenario | Why Pre-Comp |
|----------|-------------|
| Character body part | Animate inside; use in main scene |
| Walk cycle loop | Pre-comp loops independently |
| Shared effect (color grade) | Apply effect once to pre-comp; affects all contents |
| Complex group of layers | Move/scale/rotate all as one unit |


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.
