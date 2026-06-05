---
permalink: /34-2D-Digital-Animation/Module-01-Animate-Interface-Workflow/Cheat-Sheet/
title: "Module 1 Cheat Sheet: Animate Interface & Workflow"
---

# ⚡ Module 1 Cheat Sheet — Adobe Animate Interface & Workflow

---

## Workspace Zones

| Zone | Purpose |
|------|---------|
| Stage | The visible canvas; what the viewer sees |
| Pasteboard | Gray area outside Stage; objects here are invisible in exports |
| Timeline | Frame-by-frame control: frames, keyframes, layers |
| Properties | Context-sensitive settings for current selection |
| Library | All project assets: symbols, bitmaps, audio, video |
| Toolbar | Drawing and selection tools |

---

## Frame Types

| Frame | Appearance | Behavior |
|-------|-----------|---------|
| Keyframe | Filled circle ● | New pose or state defined here |
| Blank Keyframe | Hollow circle ○ | Empty; no artwork |
| Regular Frame | Rectangle | Extends the previous keyframe |

---

## Symbol Types — Quick Reference

| Type | Sync | Use For |
|------|------|---------|
| **Graphic** | Parent timeline | Character rigs, synced animation |
| **Movie Clip** | Independent | Looping FX, background elements |
| **Button** | 4-state (up/over/down/hit) | Interactive projects |

> 🚨 **Key rule:** For character rigs that must stay in sync with dialogue → always use **Graphic** symbols.

---

## Drawing Modes

| Mode | Shapes Merge? | Best For |
|------|--------------|---------|
| Merge Drawing (default) | Yes — same color merges; different cuts | Traditional cel-style work |
| Object Drawing (J to toggle) | No — each shape is self-contained | Character rigs, layered comps |

---

## Key Shortcuts — Complete Reference

| Action | Windows | Mac |
|--------|---------|-----|
| Selection Tool | V | V |
| Free Transform | Q | Q |
| Subselection Tool | A | A |
| Lasso Tool | L | L |
| Pen Tool | P | P |
| Text Tool | T | T |
| Toggle Object Drawing | J | J |
| Zoom In | Ctrl++ | Cmd++ |
| Zoom Out | Ctrl+- | Cmd+- |
| Fit Stage in Window | Ctrl+Shift+H | Cmd+Shift+H |
| New Keyframe | F6 | F6 |
| Blank Keyframe | F7 | F7 |
| Extend Frame | F5 | F5 |
| Remove Frame | Shift+F5 | Shift+F5 |
| Remove Keyframe | Shift+F6 | Shift+F6 |
| Convert to Symbol | F8 | F8 |
| Break Apart | Ctrl+B | Cmd+B |
| Group | Ctrl+G | Cmd+G |
| Ungroup | Ctrl+Shift+G | Cmd+Shift+G |
| Select All | Ctrl+A | Cmd+A |
| Undo | Ctrl+Z | Cmd+Z |
| Play/Stop | Enter | Return |
| Enter Symbol Edit | Dbl-click | Dbl-click |
| Exit Symbol Edit | Esc | Esc |

---

## Audio Sync Modes

| Mode | Behavior | Use When |
|------|---------|---------|
| **Event** | Plays to end regardless of timeline | SFX, background music |
| **Stream** | Locked to playhead position | Lip sync — ALWAYS use this |

---

## Common Frame Rates

| FPS | Standard | Productions |
|-----|---------|------------|
| 12 | "On twos" — anime / classic cartoon | Cuphead, classic anime |
| 24 | Cinema standard | Spider-Verse, Avatar TLAB |
| 25 | PAL (Europe, Australia) | BBC, European animation |
| 30 | NTSC / YouTube standard | US TV, YouTube |
| 60 | Games / UI animation | Game UI, web apps |

**On twos at 24fps** = 12 unique drawings per second.

---

## Software Comparison Quick Reference

| Software | Price | Industry Use | Best For |
|----------|-------|-------------|---------|
| Adobe Animate | CC subscription | Commercial, indie, YouTube | Cut-out, web animation |
| Toon Boom Harmony | $109–$239/mo | Major broadcast studios | Full pipeline, TV series |
| TVPaint | ~$600 perpetual | Boutique/feature studios | Hand-drawn frame-by-frame |
| Clip Studio Paint | ~$50 perpetual | Indie animators | Drawing, manga-style |
| Blender Grease Pencil | Free | Indie films | 2D-in-3D hybrid |

---

## Library Naming Conventions

```
hero_body
hero_arm_left
hero_arm_right
hero_leg_left
hero_leg_right
hero_head
hero_mouth_open
hero_mouth_closed
villain_body
villain_arm_left
...
```

Prefix = character name. Always use folders per character.

---

## Registration Points

- Set at the **rotation pivot joint**, not the bounding-box center
- Arm → register at shoulder
- Leg → register at hip
- Head → register at neck base
- Hand → register at wrist

---

## Properties Panel — Context Guide

| What Is Selected | Panel Shows |
|-----------------|------------|
| Nothing | Document settings (fps, stage size, background) |
| Frame | Label, tweening, sound, motion guide |
| Symbol instance | X/Y, W/H, color effect, alpha, tint |
| Shape/drawing | Fill color, stroke color, stroke width |

---

## Pasteboard Rule

Objects **entirely off Stage** = invisible in export.
Objects **partially overlapping Stage edge** = clipped at Stage boundary.
