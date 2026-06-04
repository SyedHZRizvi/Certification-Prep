# Module 8: Advanced Graph Editor — Reading Curves Like a Pro 📈

> **A story to open.** A senior animator at Pixar once said: *"Show me a character's curve in the graph editor and I'll tell you what their personality is."* She wasn't being metaphorical. A curve is a direct representation of how a value changes over time — speed, angle, position. The shape of that curve is a direct representation of the physics, weight, and emotional intention behind the motion. An animator who reads curves fluently can diagnose a dead performance without playing back the animation. They can spot a floaty moment, a pop, an incorrect ease-in — in 200 keyframes of graph data — in under a minute. That fluency is what this module builds.

---

## 🎯 What You'll Master

- Read any animation curve and describe the motion it represents
- Control tangent handles for precise ease-in, ease-out, and linear motion
- Build the S-curve for natural, organic motion
- Apply the "stepped" workflow for blocking-to-spline transitions
- Build expression-driven secondary motion systems
- Diagnose and fix the most common curve errors

---

## 📚 Part 1 — Reading Curves: the Language of Motion

An animation curve in the graph editor is a graph of **value** (Y-axis) versus **time** (X-axis). Every curve represents a single channel — X translation, Y rotation, Z scale — of a single control.

### What Different Curve Shapes Tell You

| Curve Shape | Motion Description | Common Use |
|-------------|-------------------|-----------|
| Flat (horizontal line) | No change — the value is constant | Held poses; contact frames |
| Diagonal (linear, steep) | Fast, constant-speed change | Technical motion; mechanical objects |
| S-curve | Slow-in → fast middle → slow-out | All organic motion; the most natural shape |
| Convex curve (arches up) | Object accelerates and decelerates — peaks in the middle | Ball reaching apex of throw |
| Concave curve (dips down) | Anticipation followed by fast action | Crouch before jump |
| Spike (sharp peak) | Sudden impact or direction change | Contact frame; ball bounce |
| Oscillating curve | Back-and-forth motion around a center | Secondary follow-through; wiggle |

### Identifying Errors Visually

| Visual Pattern | Diagnosis | Fix |
|---------------|-----------|-----|
| Curve too flat at the end | Character stops before reaching the hold pose | Adjust ease-out tangent |
| Abrupt tangent break | Pop — value changes direction suddenly | Smooth the tangent or add an inbetween |
| Too-steep slope | Motion too fast — character moves unnaturally quickly | Extend the segment by adding frames |
| Perfectly linear (diagonal) | Robotic, mechanical motion — no ease | Add slow-in/slow-out (S-curve) |
| Overshoot too large | Follow-through is too extreme | Reduce tangent handle length on overshoot |

---

## 📚 Part 2 — Tangent Handle Mastery

Every keyframe in the graph editor has two tangent handles — the incoming (left) handle and the outgoing (right) handle. These handles control the speed of the interpolation entering and leaving the keyframe.

### The Five Tangent Types

| Type | Behavior | Visual | When to Use |
|------|----------|--------|-------------|
| Spline (Auto) | Software calculates smooth cubic bezier automatically | Smooth S-shape | Default; good starting point |
| Clamped | Like spline, but prevents overshoots past keyframe value | Smooth; no overshoot | When automatic overshoots cause problems |
| Linear | Straight line between keyframes | Triangular point | Mechanical motion; contact frames |
| Flat | Tangent is perfectly horizontal at the keyframe | Plateau | Extreme holds; cartoon snap |
| Stepped | No interpolation — value jumps at the keyframe | Staircase | Blocking phase |

> 🎯 **Exam tip:** Understanding the difference between **spline** tangents (smooth, can overshoot) and **clamped** tangents (smooth, no overshoot) is a common technical interview question at studios.

### The Tangent Handle Length Rule

The length of a tangent handle controls how strongly the curve is pulled toward the key's value:
- **Short handle:** The curve reaches the key's value quickly and holds near it
- **Long handle:** The curve eases very gradually; the motion is slow to begin or end

For an ease-in (slow start, fast finish): the outgoing handle is long; the incoming handle is short.
For an ease-out (fast start, slow finish): the outgoing handle is short; the incoming handle is long.

---

## 📚 Part 3 — The S-Curve for Natural Motion

The S-curve is the graph editor representation of Newton's First Law as it applies to character animation: objects resist changes to their state. Starting is hard (ease-in). Stopping is hard (ease-out). The middle is where maximum speed lives.

### Building a Perfect S-Curve

1. Place keyframes at the start position and end position
2. Set both tangent types to **Spline (Auto)** — this often produces a reasonable S automatically
3. Pull the outgoing handle of the first key **down** (extends ease-in) if the start needs to be slower
4. Pull the incoming handle of the second key **up** (extends ease-out) if the end needs to be slower
5. Check the derivative (slope) curve — the slope at the midpoint should be the steepest part of the curve

### When to Break the S-Curve

The S-curve is the default for organic motion, but it must be broken for:
- **Impact frames:** The contact with the ground, a wall, or another character should use a linear or flat tangent on the impact side — the object does not ease into a hard surface
- **Mechanical motion:** Robots and machines often move at constant speed (linear) between holds
- **Comedy snaps:** Fast, extreme movement from one held pose to another uses flat tangents at both keys

---

## 📚 Part 4 — Stepped Workflow: Blocking to Spline

The stepped workflow is the production-standard method for building complex animation in stages — it prevents "swimming" poses that occur when spline interpolation generates unexpected in-between positions.

### The Three-Phase Stepped Workflow

| Phase | Tangent Type | What You're Doing |
|-------|-------------|-------------------|
| Blocking | **Stepped** | Place poses at major beats; no interpolation yet |
| Spline (rough) | **Spline** | Switch to spline and observe what the software generates; fix major problems |
| Spline (refine) | **Spline + manual** | Adjust individual tangent handles; add inbetweens for secondary motion |

### Why Stepped Blocking Works

When you block in stepped mode, each pose holds exactly as you designed it until the next pose snaps in. You can evaluate the pose sequence and timing as a "pose-to-pose" without the interpolation confusing the review.

When you switch to spline, the software generates a smooth path between your blocked poses. This path is almost never correct — it will create "swimming" poses that you didn't design. The spline phase is about fixing these generated paths.

> ⚠️ **The spline switch moment:** This is the most terrifying moment in animation. Your clean stepped blocking becomes a squirming, swimming mess when you switch to spline. This is normal. The clean blocked poses are still there as keyframes — the curves connecting them just need to be shaped.

---

## 📚 Part 5 — Expression-Driven Secondary Motion

For complex rigs with many secondary elements (hair, clothing, tails, tentacles), manually keyframing every secondary element is impractical. Expressions — mathematical formulas that drive one control from another — provide the solution.

### The Three Expression Patterns for Secondary Motion

| Pattern | Formula Example | Application |
|---------|----------------|------------|
| Offset (delay) | `tailTip.tx = offset(tailBase.tx, 5)` | Tail tip follows tail base with 5-frame delay |
| Damped oscillation | `cloth.ry = cloth.ry * 0.85 + springForce * 0.15` | Clothing settles with damping after stop |
| Noise addition | `hairStrand.rx = primaryAction.rx + noise(time) * 0.3` | Organic variation in hair during wind |

### Building an Offset Expression

The simplest expression pattern for secondary motion: value B equals the value of value A, delayed by N frames.

In Maya's expression editor:
```
// Hair tip follows hair base with 5-frame delay
if (frame <= 5) {
    hairTip.rotateX = 0;
} else {
    hairTip.rotateX = `getAttr -t (frame - 5) hairBase.rotateX`;
}
```

### The Limit of Expressions

Expressions are deterministic — they always produce the same result from the same inputs. For true organic irregularity (the kind that makes performance feel alive), manual keyframe variation or noise layers must be added on top.

---

## 📚 Part 6 — Diagnosing Common Curve Errors

| Symptom | Curve Diagnosis | Fix |
|---------|----------------|-----|
| Character floats before landing | Curve is too slow-in on the Y-translation approaching the ground | Shorten incoming tangent or use linear near contact |
| Character pops to a new pose | Sharp break in the tangent at a keyframe | Add intermediate keyframe; smooth tangent |
| Secondary motion overshoots too far | Outgoing tangent handle on follow-through key is too long | Shorten the handle |
| Motion feels mechanical | All curves are linear | Add S-curve ease-in/ease-out throughout |
| Hold pose is not clean | Curve has a subtle drift during a held section | Add an additional keyframe to anchor the hold |
| Character appears to move before they should | Spline interpolation overshoots backward before the move | Switch to clamped tangent at the start key |

---

## 🎯 Summary

| Concept | One-Line Takeaway |
|---------|-------------------|
| S-curve | The default shape for all organic motion |
| Tangent handles | Length controls easing speed; type controls curve shape |
| Spline vs. clamped | Spline can overshoot; clamped cannot |
| Stepped workflow | Block in stepped; switch to spline; then refine |
| Expression offset | delay(valueA, nFrames) = secondary motion formula |
| Curve reading | Flat = hold; steep = fast; S = organic; spike = impact |
| Swimming poses | The inevitable result of switching from stepped to spline — fix through tangent work |

---

## 🚀 Next Steps

Module 9 takes you out of the software and into the production environment — the director's note, the feedback loop, the revision process, and how the best animators navigate studio politics to deliver their best work.

---

## 📖 Further Reading

- Williams, R. — *The Animator's Survival Kit* — Graph Editor chapters
- Pixar in a Box — Timing and Spacing module
- Autodesk Maya documentation — Graph Editor (autodesk.com)
- Animation Mentor — Graph Editor Mastery Workshop (animationmentor.com)
- Lango, K. — "Reading Curves" (keithlango.com blog series)
- Cotter, A. — "The Stepped Workflow" (Animation Career Review contributions)
