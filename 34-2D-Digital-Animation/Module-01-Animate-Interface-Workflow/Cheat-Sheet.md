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

## Key Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Selection Tool | V | V |
| Free Transform | Q | Q |
| New Keyframe | F6 | F6 |
| Blank Keyframe | F7 | F7 |
| Extend Frame | F5 | F5 |
| Convert to Symbol | F8 | F8 |
| Break Apart | Ctrl+B | Cmd+B |
| Group | Ctrl+G | Cmd+G |
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

| FPS | Standard |
|-----|---------|
| 12 | "On twos" — anime / classic cartoon look |
| 24 | Cinema standard |
| 25 | PAL (Europe, Australia) |
| 30 | NTSC / YouTube standard |
| 60 | Games / UI animation |

**On twos at 24fps** = 12 unique drawings per second.

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

## Pasteboard Rule

Objects **entirely off Stage** = invisible in export.
Objects **partially overlapping Stage edge** = clipped at Stage boundary.
