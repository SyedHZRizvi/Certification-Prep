# Module 8 Cheat Sheet — Advanced Graph Editor 📈

## Curve Shape → Motion Meaning

| Curve Shape | Motion |
|-------------|--------|
| Flat (horizontal) | Hold — no change |
| Steep diagonal | Fast constant speed |
| S-curve | Organic: slow-in → fast → slow-out |
| Convex (arch up) | Peaks in value (ball apex) |
| Concave (dip) | Anticipation then action |
| Spike (sharp peak) | Sudden impact / direction change |
| Oscillating | Follow-through / wiggle |

---

## Five Tangent Types

| Type | Visual | Use |
|------|--------|-----|
| Spline (Auto) | Smooth S | Default organic motion; can overshoot |
| Clamped | Smooth, contained | When overshoots cause problems |
| Linear | Triangle point | Mechanical; contact frames |
| Flat | Plateau | Extreme holds; comedy snap |
| Stepped | Staircase | Blocking phase only |

**Spline vs Clamped:** Spline can overshoot past key value; Clamped cannot.

---

## Tangent Handle Length Rules

```
EASE-IN (slow start → fast finish):
  Outgoing handle: LONG
  Incoming handle: SHORT

EASE-OUT (fast start → slow finish):
  Outgoing handle: SHORT
  Incoming handle: LONG

SHORT handle = reaches key value QUICKLY
LONG handle  = approaches key value SLOWLY
```

---

## S-Curve Construction

```
1. Key at start and end
2. Set both to Spline (Auto)
3. Pull outgoing handle down → more ease-in
4. Pull incoming handle up → more ease-out
5. Check: steepest slope at midpoint = correct
```

**Break S-curve for:** impacts (linear/flat), mechanical (linear), comedy snaps (flat at both keys)

---

## Stepped Workflow — 3 Phases

```
PHASE 1: BLOCKING (Stepped)
  → Place all major poses
  → Evaluate timing as pose-to-pose

PHASE 2: SPLINE ROUGH
  → Switch to Spline
  → "Swimming" appears — this is NORMAL
  → Fix major direction and overshoot errors

PHASE 3: SPLINE REFINE
  → Adjust individual tangent handles
  → Add secondary motion inbetweens
  → Expression layers
```

---

## Expression Patterns

| Pattern | Code (Maya) | Use |
|---------|-------------|-----|
| Offset delay | `getAttr -t (frame-N) attr` | Tail/hair follow-through |
| Damped oscillation | `value * 0.85 + spring * 0.15` | Clothing settle |
| Noise addition | `primaryAnim + noise(time) * 0.3` | Organic wind variation |

---

## Curve Error Diagnosis

| Symptom | Diagnosis | Fix |
|---------|-----------|-----|
| Float before landing | Too slow-in on Y approaching ground | Shorten incoming tangent |
| Pop to new pose | Tangent break at keyframe | Add inbetween; smooth tangent |
| Overshoot too large | Outgoing handle too long on follow-through | Shorten handle |
| Mechanical feeling | All curves linear | Add S-curve ease throughout |
| Hold drifts | Subtle curve movement during hold | Add anchor keyframe during hold |
| Moves before should | Spline overshoots backward | Switch to clamped at start key |
