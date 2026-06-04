---
permalink: /34-2D-Digital-Animation/Module-03-Tweening-Motion-Paths/
title: "Module 3: Tweening & Motion Paths"
---

# ⚙️ Module 3: Tweening & Motion Paths

## The Elevator Pitch Problem

Imagine you're in an elevator with a senior producer at a major animation studio. She asks what your specialty is. You say "tweening." She frowns. "Anyone can tween. What do you *do* with tweens?"

Here's the trap: most beginners treat tweening as a labor-saving device. Set a start keyframe, set an end keyframe, apply a tween, done. The result is almost always what animators call "floaty" — smooth in a mathematical sense, but lifeless in an organic sense. Real animators use tweening as a scaffold, not a crutch. The tween gets you 60% of the way there. The other 40% is custom easing, motion path adjustment, and the judgment to know when to break the tween into a hand-drawn frame.

This module teaches you to be in the other 40%.

---

## 🔄 Classic Tween vs. Motion Tween

Animate has two types of tweening, and they are fundamentally different in how they work.

| Feature | Classic Tween | Motion Tween |
|---------|---------------|--------------|
| Requires | Two keyframes on the same layer | Symbol on a single keyframe; property keyframes added |
| Easing | Applied to the whole tween or per-property in limited ways | Per-property easing via the Motion Editor |
| Motion Path | Defined by shape-tweening or manual adjustments | Auto-generates a path; editable as a bezier curve |
| Compatibility | Older; compatible with ActionScript 2 | Newer; required for Motion Editor and advanced paths |
| Use Case | Quick simple motion; legacy projects | Complex motion with precise timing control |

> 🚨 **Trap on the exam:** Classic Tweens are applied to a range of frames between two keyframes. Motion Tweens are applied to a single span where the software tracks property changes. You cannot mix both types on the same layer. Converting a Classic Tween to a Motion Tween is possible but often changes easing behavior.

---

## 📈 Ease Presets

Adobe Animate includes a library of built-in ease presets accessible from the Properties panel when a tween span is selected. These are pre-built easing curves that cover the most common motion scenarios.

| Preset Category | Examples |
|----------------|---------|
| **Simple** | Ease In, Ease Out, Ease In-Out, None (linear) |
| **Bounce** | Bounce In, Bounce Out, Bounce In-Out |
| **Elastic** | Elastic In, Elastic Out, Elastic In-Out |
| **Sine** | Sine In, Sine Out, Sine In-Out |
| **Back** | Back In (slight overshoot at start), Back Out (overshoot at end) |

For most character animation, the most-used presets are Ease In, Ease Out, and variations of Sine. Bounce and Elastic are useful for secondary elements (a bag swinging on a character's shoulder, a spring coiling) but should be used sparingly for primary character motion.

---

## 🎛️ Custom Easing with the Motion Editor

The Motion Editor is Animate's graphical easing tool. It displays a curve graph for each animated property (X position, Y position, Rotation, Scale X, Scale Y, Alpha, etc.) with the horizontal axis representing time and the vertical axis representing the property value.

### Reading the Curve

- **Steep section of curve** = rapid change in that property = fast motion
- **Flat section of curve** = slow or no change in that property = slow motion or hold
- **S-curve** = ease in → ease out (slow start, fast middle, slow end)
- **Reverse S** = ease out → ease in (fast start, slow middle, fast end) — unusual but useful for secondary motion

### Editing the Curve

In the Motion Editor, you can:
- **Add control points** to the curve by clicking
- **Convert control points** between smooth (bezier handles) and corner (sharp break in curve)
- **Link all properties** to one master easing curve, or edit each property independently

> 🎯 **Exam tip:** The Motion Editor is only available for **Motion Tweens**, not Classic Tweens. Classic Tweens use a simpler ease slider in the Properties panel (a single positive or negative value from -100 to 100).

---

## 😴 The "Floaty" Tween Problem

The single most common complaint about computer-generated animation is that it looks "floaty." Floatiness is the result of a motion that:

1. Has linear or default ease applied (constant speed throughout)
2. Has no variation in secondary properties (rotation, scale, position Y all moving at the same rate)
3. Has no holds at the extremes (the character arrives at the final pose and immediately starts the next motion)
4. Has no overshoot or cushion at key poses

### Fixing Floatiness: A Checklist

| Problem | Fix |
|---------|-----|
| No acceleration or deceleration | Apply Ease In at start, Ease Out at approach to destination |
| No weight | Add a subtle Scale Y change (very slight squash when going fast) |
| No holds | Add a 2–4 frame hold keyframe at the end of each significant pose |
| No overshoot | Extend the motion slightly past the destination pose, then return |
| Identical timing for all properties | Break properties into independent curves in the Motion Editor |

---

## 🛤️ Motion Paths

When a Motion Tween is applied to a symbol, Animate automatically creates a motion path — a visible line on the Stage showing the trajectory of the object's position property over the tween's duration.

### Editing Motion Paths

The motion path in Animate is a bezier curve. To edit it:
1. Select the tween span in the Timeline.
2. Use the Selection Tool to click and drag segments of the path to create curves.
3. Use the Convert Anchor Point Tool to add or convert control points.
4. Enable the Snap to Objects option to snap path anchor points to other objects.

### Orient to Path

For objects that should face the direction they're moving (a fish swimming, a rocket flying), Animate offers an "Orient to Path" option in the Properties panel. When enabled, the symbol rotates automatically to align its registration point's axis with the direction of the motion path.

> 🚨 **Trap on the exam:** "Orient to Path" rotates the symbol based on the *direction* of the motion path tangent. If your symbol's natural facing direction doesn't align with the registration point axis, the orientation will appear wrong. You need to draw or set up the symbol so its "forward" direction aligns with the expected path orientation.

---

## 🔑 Guide Layers and Motion Guides (Classic Tween)

For Classic Tweens, motion paths are defined using a **Motion Guide Layer**. A Guide layer is a special layer type that is never exported; objects on it serve as paths that Classic Tween objects can snap to.

### Setting Up a Motion Guide

1. Right-click the layer containing your Classic Tween.
2. Add Classic Motion Guide.
3. Draw a path on the Guide layer using the Pencil or Brush tool.
4. In the Classic Tween keyframe, enable "Orient to Path" and "Snap" in the Properties panel.
5. Position the symbol so its registration point snaps to the start of the guide path.

The symbol will then follow the guide path exactly over the tween duration.

---

## ⏱️ Timing and Spacing in Tweens

Even with custom easing, tweens require attention to timing:

### Hold Frames

A **hold** is a period where the object appears at rest — no position change, no property change. In animation, holds are essential because they give the audience time to "read" a pose before the next motion begins.

To create a hold in a Motion Tween:
- Add a property keyframe at the start of the desired hold position.
- Move the playhead forward by the hold duration (e.g., 6 frames for a quarter-second hold at 24fps).
- Add another property keyframe.
- The curve between these two keyframes should be flat.

### Anticipation via Tween

Anticipation (a preparatory motion before a major action) can be built entirely with tweens:
1. Main pose position: frame 1
2. Anticipation position (opposite direction): frame 6–8
3. Action position: frame 12–14

The tween between frame 1 and frame 6–8 moves the character into the anticipation; the tween from 6–8 to 12–14 executes the main action. The second tween should have a much stronger Ease In to convey the snap of the action.

---

## 📊 Motion Tween vs. Classic Tween — Decision Matrix

| Scenario | Recommended |
|----------|-------------|
| Simple A-to-B position change | Classic Tween |
| Complex arc with per-property easing | Motion Tween |
| Legacy FLA compatibility required | Classic Tween |
| Object that needs to follow a drawn path | Classic Tween + Guide Layer |
| Character facial rig expressions | Motion Tween (for property flexibility) |
| Logo animation with custom timing per dimension | Motion Tween |

---

## 🧩 Nested Tweens

Tweens can be nested inside symbols. A common pattern for character animation is:

- The **outer tween** moves the whole character across the Stage (walk cycle position)
- The **inner tween** (inside the character's Movie Clip) animates the walk cycle itself

This separation allows you to adjust the walk cycle's timing independently from the character's position on screen. If you want the character to slow down, you extend the outer tween; if you want the walk cycle to feel slower, you adjust the inner tween.

---

## 📋 Summary

- Classic Tweens interpolate between two keyframes on the same layer; Motion Tweens track property changes on a single span.
- The Motion Editor (Motion Tweens only) provides per-property bezier easing curves.
- Classic Tweens use a simple ease slider (-100 to 100) in the Properties panel.
- "Floaty" animation results from linear easing, no holds, no overshoot, and same-rate property timing.
- Motion paths are editable bezier curves that define trajectory; "Orient to Path" auto-rotates symbols to face their direction of travel.
- Guide layers provide drawn paths for Classic Tween objects to follow.

## ➡️ Next Steps

[Module 4: Character Rigging in Animate →](../Module-04-Character-Rigging-Animate/Reading.md)

With tweening mastered, Module 4 applies it to character rigs — symbol hierarchies, bone tools, IK and FK, and the cut-out animation workflow used in commercial production.

## 📚 Further Reading

- Adobe Animate User Guide: Motion Tweens and the Motion Editor
- *The Animator's Survival Kit* — Richard Williams, Chapter 9: Timing for Animators
- School of Motion: "Motion Tween vs Classic Tween in Adobe Animate" — free article
- Mobox Graphics YouTube: "Custom Easing in Adobe Animate" — practical Motion Editor tutorial
