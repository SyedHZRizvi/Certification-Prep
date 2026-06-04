---
permalink: /34-2D-Digital-Animation/Module-02-Frame-by-Frame/Cheat-Sheet/
title: "Module 2 Cheat Sheet: Frame-by-Frame Animation"
---

# ⚡ Module 2 Cheat Sheet — Frame-by-Frame Animation

---

## Onion Skin Settings

| Setting | Purpose |
|---------|---------|
| Range | Frames visible before/after current (2–4 typical) |
| Tint | Blue = past frames, Orange = future frames |
| Outline Mode | Shows only stroke paths — less visual noise |
| Full Color Mode | Shows fills — more context, more clutter |

**Read onion skins:** clustered = slow; spread = fast.

---

## Rough-to-Cleanup Workflow

```
1. Key Poses (extremes) — loose, fast
2. Rough In-Betweens — establish arcs & spacing
3. Cleanup — clean lines on new layer above roughs
4. Color — fill after cleanup approved
5. Delete/hide roughs before export
```

---

## Layer Stack for Frame-by-Frame

| Layer (top → bottom) | Purpose |
|---------------------|---------|
| Cleanup | Final lines |
| Roughs | Guide drawings (hide/delete pre-export) |
| Color | Fills (if separate) |
| Background | Static or separately animated |

---

## Spacing & Timing

| Pattern | Effect |
|---------|--------|
| Even spacing | Linear/mechanical — constant speed |
| Clustered at start | Slow In — motion accelerates |
| Clustered at end | Slow Out — motion decelerates |
| Both ends clustered | Ease In+Out — natural organic feel |

---

## Common Animation Timing (24fps)

| Action | Frames |
|--------|--------|
| Fast blink | 2–3 |
| Normal blink | 6–8 |
| Head turn (fast) | 4–6 |
| Head turn (slow) | 12–16 |
| Walk step (on twos) | 12 |
| Jump anticipation | 4–8 |
| Snappy arm swing | 3–5 |

---

## Smear Frame Types

| Type | When to Use |
|------|------------|
| Elongated blur shape | Simple 1-direction fast action |
| Multiple limb ghost | Hands, fingers in fast complex motion |
| Abstract shape | Extremely fast head turns or spins |

**Rule:** Smear should feel invisible during playback. If it reads as a visible drawing, it's wrong.

---

## Arc Tracking

- Track tip of moving part across frames → should be smooth curve
- Jagged or kinked = broken arc → fix that frame
- Perfectly straight arc = mechanical → add subtle bow

---

## Pose-to-Pose vs. Straight-Ahead

| Method | Workflow | Best For |
|--------|---------|---------|
| **Pose-to-Pose** | Key poses first, fill in-betweens | Acting, dialogue, controlled motion |
| **Straight-Ahead** | Frame 1 → Frame 2 → Frame 3... | Effects, fire, water, organic chaos |

---

## On Twos Rule

- **On twos at 24fps** = new drawing every 2 frames = 12 drawings/second
- Gives the classic hand-drawn "cartoon" look
- Spider-Verse used it deliberately; anime uses it extensively
