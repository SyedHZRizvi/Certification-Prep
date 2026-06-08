---
permalink: /36-3D-Animation-Blender/Module-07-Keyframe-Graph-Editor/Cheat-Sheet/
title: "Module 7 Cheat Sheet: Keyframe Animation & Graph Editor"
---

# 🗒️ Module 7 Cheat Sheet: Keyframe Animation & Graph Editor

---

## Keyframe Shortcuts

| Shortcut | Action |
|---|---|
| I | Insert keyframe menu |
| I → LocRotScale | Keyframe location, rotation, scale |
| Alt+I | Delete keyframe |
| Auto-keying | Enable in timeline header (record button) |

---

## Dope Sheet Shortcuts

| Shortcut | Action |
|---|---|
| A | Select all keyframes |
| G | Grab (move) keyframes |
| S | Scale timing |
| Shift+D | Duplicate keyframes |
| Ctrl+C / Ctrl+V | Copy / paste keyframes |
| X / Delete | Delete keyframes |

---

## Interpolation Modes (T in Graph Editor)

| Mode | Motion Type |
|---|---|
| Bezier | Smooth, organic (default) |
| Linear | Machine, even speed |
| Constant | Instant jump (blocking) |
| Bounce/Elastic | Stylized springy motion |

---

## Graph Editor Navigation

| Action | Shortcut |
|---|---|
| Pan | MMB drag |
| Zoom to selected | V |
| Frame all | Home |
| Move handles | G |
| Scale handles | S |
| Interpolation menu | T |

---

## F-Curve Handle Types

| Handle | Shape | Use |
|---|---|---|
| Auto | Automatic smooth | Quick; can overshoot |
| Aligned | Symmetrical tangent | Clean ease in/out |
| Free | Fully independent | Max control |
| Vector | Straight segment | Hard corner |

**Rule:** Flat handles at keyframe = ease in/out. Angled handles = continued momentum.

---

## NLA Workflow

1. Animate Action in Action Editor
2. Mark Fake User (shield icon) to preserve
3. NLA Editor → Push Down → becomes NLA strip
4. Alt+D to duplicate strip → position end-to-end
5. Strip → Repeat = N to auto-loop

---

## Walk Cycle Frame Structure (24fps)

| Frame | Pose |
|---|---|
| 1 | Contact (left foot forward) |
| 6 | Down |
| 12 | Contact opposite (right foot forward) |
| 18 | Down opposite |
| 25 | Same as Frame 1 (loop bridge) |

**Cycles modifier:** Graph Editor → F-Curve → Cycles → Repeat with Offset (for forward movement)

---

## Industry Workflow: Blocking → Spline

1. **Step 1, Blocking:** Use Constant interpolation; set key poses only; focus on timing
2. **Step 2, Director approval:** Timing and poses locked
3. **Step 3, Spline conversion:** Switch to Bezier; clean Graph Editor curves
4. **Step 4, Polish:** Adjust handles; add overlap, follow-through, secondary motion

---

## F-Curve Modifiers Reference

| Modifier | Key Use | Mode Options |
|---|---|---|
| **Cycles** | Loop walk cycles, repeat any action | Repeat / Repeat with Offset / Mirrored |
| **Noise** | Camera shake, organic jitter, cloth pre-sim | Scale, Strength, Phase |
| **Envelope** | Fade secondary motion in/out | Min/Max curve |
| **Stepped Interpolation** | Stop-motion aesthetic, stepped blocking view | Step Size (frames) |
| **Limits** | Clamp output to anatomical range | Min Value / Max Value |

**Cycles modifier, Repeat vs. Repeat with Offset:**
- **Repeat:** Character teleports back to start position each cycle
- **Repeat with Offset:** Character moves forward by stride distance each cycle (correct for locomotion)

---

## 12 Principles: Blender Tools

| Principle | Blender Implementation |
|---|---|
| Squash & Stretch | Scale keyframes on Y (up) / Y (down) |
| Anticipation | Small reverse key 4–8 frames before main action |
| Follow Through | Overshoot past final value → settle back |
| Overlapping Action | Secondary parts keyframed 4–8 frames later |
| Slow In / Slow Out | Flat handles at keyframes (Auto handle type) |
| Arcs | Review in viewport playback; use Onion Skin |
| Exaggeration | Push curve values 120–150% beyond realistic |
| Timing | Dope Sheet spacing: more frames = slower |

---

## NLA Track Priority Rule

Higher tracks override lower tracks (Blend Type: Replace).
- **Bottom tracks:** repeating cycles (breathing, idle)
- **Top tracks:** specific shot gestures and actions

---

## Gotcha Quick Reference

| Gotcha | Fix |
|---|---|
| Interpolation change only affects one key | Press A first (select all), then T |
| Cycles modifier moves character backward | Use Repeat with Offset, not Repeat |
| NLA track order wrong | Higher tracks have priority, reorder with drag |
| Auto Keying creates unexpected channels | Disable Auto Keying after blocking; clean Dope Sheet |
