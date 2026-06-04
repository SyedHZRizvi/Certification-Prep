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

---

## Illustrator → After Effects Workflow

```
1. Design in Illustrator — one layer per body part
2. File → Import → File
   "Import as: Composition — Retain Layer Sizes"
3. Select Illustrator layers in AE
4. Layer → Create → Create Shapes from Vector Layer
5. Original AI layer is auto-hidden; Shape Layer replaces it
6. Now animate natively in AE
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

## Parenting Shortcuts

| Action | Method |
|--------|--------|
| Pick Whip | Drag from child's Parent column to parent layer |
| Set parent via dropdown | Click Parent column dropdown; select layer name |
| Null Object | Layer → New → Null Object |

**Null Object:** Invisible at render time. Use as invisible rig controller.

---

## Easing Shortcuts

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

---

## Pre-Compose Shortcut

- **Windows:** Ctrl+Shift+C
- **Mac:** Cmd+Shift+C

---

## Key AE Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Pre-compose | Ctrl+Shift+C | Cmd+Shift+C |
| Easy Ease | F9 | F9 |
| Puppet Pin Tool | Ctrl+P | Cmd+P |
| RAM Preview | Space | Space |
| Toggle Graph Editor | Shift+F3 | Shift+F3 |
| New Null Object | Alt+Shift+Ctrl+Y | Opt+Shift+Cmd+Y |

---

## PNG Sequence Export (Animate → AE)

For frame-by-frame with transparency:
- Animate → File → Export → Export Movie → PNG Sequence
- In AE: File → Import → File → select first frame → check "PNG Sequence"
- Preserves alpha channel — essential for compositing
