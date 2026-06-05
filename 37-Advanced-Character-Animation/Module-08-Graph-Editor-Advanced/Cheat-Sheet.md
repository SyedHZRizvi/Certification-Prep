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

---

## Curve Shape Reference: Common Motion Signatures

### Y-Translation Curve Shapes
| Motion | Curve Shape | Graph Signature |
|--------|------------|-----------------|
| Gravity fall | Concave — always accelerating | Exponentially steepening slope |
| Ball bounce contacts | Spike pattern | V-spikes; progressively smaller |
| Jump apex | Flat plateau at peak | Convex arch; near-zero slope 2–3f |
| Walk COG | Sinusoidal wave | Smooth oscillation; 1 cycle per 2 steps |
| Settling | Damped oscillation | Decreasing amplitude waves (each ~65% of previous) |

### Rotation Curve Shapes
| Motion | Graph Signature |
|--------|----------------|
| Torso breathing | Slow, low-amplitude sinusoid (36–72f period) |
| Blink (upper lid) | Asymmetric spike — steep close, gentler open |
| Head turn | S-curve (ease-in → peak speed → ease-out) |
| Eye saccade | Step function — instant jump, flat hold |
| Tail follow-through | Offset S-curve + secondary oscillation |

---

## Set Driven Key Reference

| Driver (Primary) | Driven (Secondary) | Behavior |
|-----------------|------------------|---------|
| Hip height (COG drops) | Cheek squash scale | Cheeks squash during crouch |
| Spine bend Y rotation | Shirt wrinkle blend shape | Wrinkles increase with bend |
| Arm raise rotation | Shoulder cloth tension | Tightens above shoulder level |
| Jaw open (AU26) | Cheek droop | Cheek sags as jaw drops |
| Brow raise (AU1) | Forehead skin wrinkle | Horizontal creases appear |

**SDK vs. Expression:** SDK uses animation curves (non-linear, arbitrary mapping). Expression uses math formulas (linear, predictable). SDK is more flexible; expression is more predictable.

---

## Graph Editor Pre-Submission Curve Audit

```
[ ] All holds are explicitly flat (no drift slopes)
[ ] All action frames have S-curve (except impacts)
[ ] Impact frames: linear or near-linear tangent on approach
[ ] Secondary channels (hair, cloth, tail) offset later than primary
[ ] No unconstrained spline tangents producing unintended overshoots
[ ] Scale channels: X/Z inverted to Y during squash/stretch
[ ] Eye rotation channels: stepped tangents for saccades
[ ] COG path is smooth and consistent with character mass
[ ] Minimum keyframes necessary — no dense, bumpy over-keyed sections
```

---

## Maya Graph Editor Key Shortcuts

| Action | Shortcut |
|--------|---------|
| Open Graph Editor | Shift+Alt+G |
| Frame all curves | A |
| Frame selected | F |
| Flat tangent | Shift+E |
| Spline tangent | Shift+S |
| Linear tangent | Shift+L |
| Isolate channel | Select in curve list |

---

## Module 8 Exam Rapid-Fire

| Question | Answer |
|---------|--------|
| What is an S-curve | Slow-in → fast middle → slow-out; Newton's First Law in curve form |
| Spline vs. clamped | Spline can overshoot key value; clamped cannot |
| Stepped workflow phases | Blocking (stepped) → Spline rough → Spline refine |
| Swimming poses | Inevitable after spline switch — fix through tangent work |
| Eye saccade tangent type | Stepped — instant jump to new value |
| Ball bounce signature | V-spike pattern on Y-translation; progressively smaller |
| Overshoot fix | Shorten the outgoing tangent handle on follow-through key |
| Set Driven Key vs. Expression | SDK = curve mapping (non-linear); Expression = math formula (linear) |
| Settling curve shape | Damped oscillation — each peak ~65% of previous peak |
| Hold drift fix | Add an anchor keyframe during the hold section |
