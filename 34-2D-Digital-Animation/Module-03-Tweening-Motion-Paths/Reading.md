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
| Timeline indicator | Purple background with arrow | Blue/teal span |
| Use Case | Quick simple motion; legacy projects | Complex motion with precise timing control |

> 🚨 **Exam Trap:** Classic Tweens are applied to a range of frames between two keyframes. Motion Tweens are applied to a single span where the software tracks property changes. You cannot mix both types on the same layer. Converting a Classic Tween to a Motion Tween is possible but often changes easing behavior.

### When to Choose Which

| Scenario | Recommended |
|----------|-------------|
| Simple A-to-B position change | Classic Tween |
| Complex arc with per-property easing | Motion Tween |
| Legacy FLA compatibility required | Classic Tween |
| Object that needs to follow a drawn path | Classic Tween + Guide Layer |
| Character facial rig expressions | Motion Tween (for property flexibility) |
| Logo animation with custom timing per dimension | Motion Tween |
| Shape morphing (one shape into another) | Shape Tween |

---

## 📈 Ease Presets

Adobe Animate includes a library of built-in ease presets accessible from the Properties panel when a tween span is selected. These are pre-built easing curves that cover the most common motion scenarios.

| Preset Category | Examples | Best For |
|----------------|---------|---------|
| **Simple** | Ease In, Ease Out, Ease In-Out, None (linear) | General character animation |
| **Bounce** | Bounce In, Bounce Out, Bounce In-Out | Dropped objects, ball impacts |
| **Elastic** | Elastic In, Elastic Out, Elastic In-Out | Springs, coils, antenna wobble |
| **Sine** | Sine In, Sine Out, Sine In-Out | Gentle, organic character motion |
| **Back** | Back In (slight overshoot at start), Back Out (overshoot at end) | Logo settle, UI elements |

For most character animation, the most-used presets are Ease In, Ease Out, and variations of Sine. Bounce and Elastic are useful for secondary elements (a bag swinging on a character's shoulder, a spring coiling) but should be used sparingly for primary character motion.

> 🎯 **What the exam tests:** Know what each preset category does and when to apply it. "Elastic Out" creates an overshoot-and-oscillate pattern — appropriate for a cartoon spring but wrong for a human arm settling into a pose.

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

> 🎯 **What the exam tests:** The Motion Editor is only available for **Motion Tweens**, not Classic Tweens. Classic Tweens use a simpler ease slider in the Properties panel (a single positive or negative value from -100 to 100).

### Classic Tween Ease Slider

For Classic Tweens, easing is controlled by a single slider in the Properties panel:
- **Positive values (1 to 100):** Ease Out — the animation starts fast and slows down
- **Negative values (-1 to -100):** Ease In — the animation starts slow and speeds up
- **Zero:** Linear — constant speed throughout

> 🚨 **Exam Trap:** The Classic Tween ease slider direction is counterintuitive to many students. A **positive** value creates an Ease **Out** (fast start, slow finish). Negative = Ease In (slow start, fast finish). This is frequently tested because it seems backwards.

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
| Same speed start to finish | Apply Sine In-Out curve for organic deceleration |

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

> 🚨 **Exam Trap:** "Orient to Path" rotates the symbol based on the *direction* of the motion path tangent. If your symbol's natural facing direction doesn't align with the registration point axis, the orientation will appear wrong. You need to draw or set up the symbol so its "forward" direction aligns with the expected path orientation.

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

> 🎯 **What the exam tests:** Motion Guide layers are only available for Classic Tweens, not Motion Tweens. Motion Tweens have built-in editable bezier paths that replace this functionality.

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

### Hold Frame Duration Guide

| Hold Length | Frames at 24fps | Frames at 30fps | Audience Perception |
|-------------|-----------------|-----------------|---------------------|
| Very short | 2–4 frames | 2–5 frames | Subconscious register; beat before motion |
| Short | 6–8 frames | 7–10 frames | Clear pose read; brief rest |
| Medium | 12–18 frames | 15–22 frames | Strong pose hold; emotional beat |
| Long | 24+ frames | 30+ frames | Extended hold; comedic pause or dramatic stare |

### Anticipation via Tween

Anticipation (a preparatory motion before a major action) can be built entirely with tweens:
1. Main pose position: frame 1
2. Anticipation position (opposite direction): frame 6–8
3. Action position: frame 12–14

The tween between frame 1 and frame 6–8 moves the character into the anticipation; the tween from 6–8 to 12–14 executes the main action. The second tween should have a much stronger Ease In to convey the snap of the action.

---

## 🧩 Nested Tweens

Tweens can be nested inside symbols. A common pattern for character animation is:

- The **outer tween** moves the whole character across the Stage (walk cycle position)
- The **inner tween** (inside the character's Movie Clip) animates the walk cycle itself

This separation allows you to adjust the walk cycle's timing independently from the character's position on screen. If you want the character to slow down, you extend the outer tween; if you want the walk cycle to feel slower, you adjust the inner tween.

---

## 🔄 Shape Tweening: The Third Tween Type

Beyond Classic and Motion Tweens, Animate offers **Shape Tweening** — which morphs one vector shape into another, changing not just position/scale/rotation but the actual path points of the shape.

| Feature | Shape Tween |
|---------|------------|
| Works on | Raw vector shapes (not grouped, not symbols) |
| What it tweens | Path point positions, fill color, stroke color |
| Use cases | Logo morphing, abstract transitions, morphing text outlines |
| Control tool | Shape Hints (small circular markers that tell Animate which point maps to which) |
| Timeline color | Green span |

### Shape Hints

Without Shape Hints, Shape Tweens often produce garbled intermediate frames. Shape Hints are manually placed labels (a, b, c...) on the starting and ending shapes that tell Animate how to match points during the tween.

1. Start frame: place Shape Hint marker on a key point of the starting shape
2. End frame: place the corresponding Shape Hint marker on the matching point of the ending shape
3. Animate uses these pairs to produce clean interpolation between the two shapes

> 🚨 **Exam Trap:** Shape Tweens only work on **raw vector shapes** — not on symbols, groups, or bitmaps. If you try to Shape Tween a symbol, Animate will either refuse or produce unexpected results. You must Break Apart (Ctrl+B) a symbol to access its raw vector data before applying a Shape Tween.

---

## 🎬 Production Case Study: Gravity Falls & Avatar TLAB

**Gravity Falls** (Disney, 2012–2016) used a primarily tweened approach for its character animation, executed in Adobe Animate/Flash. The show's animators were known for:
- Heavy use of the Motion Editor to create per-property easing curves, giving characters a more fluid, weighted feel than typical TV animation
- Deliberately adding holds before any significant action (characters "settled" into poses before moving)
- Using overshoot curves on head turns and body snaps to add snap without losing weight

**Avatar: The Last Airbender** (Nickelodeon, 2005–2008) blended tweening and frame-by-frame in the same shots. Bending sequences that required precise martial arts timing used frame-by-frame key poses; connective motion between combat moments used tweens with strong easing curves. This hybrid approach allowed the show's relatively modest budget to achieve more complex action than pure frame-by-frame would have allowed.

> 🎯 **What the exam tests:** Knowing that professional productions combine tweening with frame-by-frame rather than treating them as mutually exclusive. The choice of technique is driven by the needs of the scene, not by dogma.

---

## 🎯 What the Exam Tests: Module 3 Checklist

1. What is the difference between a Classic Tween and a Motion Tween in terms of setup and easing tools?
2. Which tween type works with the Motion Editor?
3. What does a positive ease value (+100) do in a Classic Tween (Ease Out — starts fast, ends slow)?
4. What causes "floaty" animation and what are the fixes?
5. What is a Motion Guide Layer and which tween type uses it?
6. What does "Orient to Path" do and what can go wrong with it?
7. How do you create a hold within a Motion Tween?
8. Can you use both Classic and Motion Tweens on the same layer?
9. What is the Sine easing preset good for?
10. What does a flat section in the Motion Editor curve indicate?

---

## 🚨 Exam Trap Section

- **Classic Tween ease slider is inverted from what you'd expect:** Positive = Ease Out (faster at start). Negative = Ease In (faster at end). Students frequently get this backwards.
- **Motion Editor ≠ Classic Tween:** If a question asks about per-property bezier easing, the answer is always Motion Tween + Motion Editor.
- **Motion Guide layers are never exported:** A common trap question asks what happens to the Motion Guide path in the final render. It is invisible — guide layers don't export.
- **Shape Tweens are a third type:** Animate has a Shape Tween (for morphing vector shapes) in addition to Classic and Motion. All three appear separately on the exam.

---

## 🤔 Socratic Discussion Questions

- You're animating a character picking up a heavy box. The box goes from the floor to the character's arms in 12 frames. What easing curve would you apply and why?
- A director says the tweened walk cycle looks "robotic." Without redrawing a single frame, what adjustments can you make inside Animate to fix this?
- When would you deliberately use linear (no easing) motion? Give two examples where constant speed is the right choice.
- What's the tradeoff between using many short tweens with holds versus fewer long tweens with complex easing curves?

---

## 🎯 Easing in Practice: Scene Analysis

Let's analyze a simple scene to understand how easing choices translate to real animation decisions:

**Scene:** A character's hand reaches out to grab a falling book.

| Motion | Tween Type | Easing Choice | Reasoning |
|--------|-----------|--------------|-----------|
| Hand extends toward book | Classic or Motion | Ease In (slow start, fast end) | Builds up speed of reach as urgency increases |
| Hand grasps book | Classic | Ease Out (fast into contact, settle) | Contact is fast; settles into grip |
| Book falls before catch | Classic | Linear or slight Ease In | Gravity accelerates → Ease In is actually accurate |
| Character pulls book back | Motion | Sine In-Out | Natural comfortable motion with weight |
| Brief hold after catch | N/A — property keyframes flat | N/A | 4-frame hold for audience to register the catch |

This kind of scene analysis — choosing easing based on the physical and emotional quality of each motion — is what separates professional tween work from default, floaty animation.

---

## 📊 Tween Properties Reference

Understanding which properties can be tweened — and which can't — prevents wasted effort:

### Classic Tween — Tweeable Properties

| Property | Tweened? | Notes |
|---------|---------|-------|
| X/Y Position | Yes | Must be a symbol or grouped object |
| Scale X/Y | Yes | — |
| Rotation | Yes | CW or CCW direction selectable |
| Alpha (opacity) | Yes | Via Color Effect in Properties |
| Tint / Color effect | Yes | Via Color Effect |
| Skew | Yes | — |
| Filter effects | No | Filters are not Classic-tweened |

### Motion Tween — Tweeable Properties

| Property | Tweened? | Notes |
|---------|---------|-------|
| X/Y Position | Yes | Auto-generates motion path |
| Scale X/Y | Yes | Independent X/Y axes in Motion Editor |
| Rotation | Yes | Per-property bezier curve in Motion Editor |
| Alpha | Yes | — |
| Filter effects | Yes | Unlike Classic Tween — filters can be Motion-tweened |
| 3D rotation (Z-axis) | Yes | For HTML5 Canvas 3D transforms |

> 🎯 **What the exam tests:** Motion Tweens can animate filter properties (blur, glow, drop shadow); Classic Tweens cannot. This is a key capability difference.

---

## 💼 Industry Context: Tweening in Commercial Studios

| Production Type | Primary Tween Usage |
|----------------|-------------------|
| TV animation (cut-out) | Motion Tweens with Motion Editor for all body movement |
| Motion graphics | Motion Tweens with Sine easing; heavy Bounce/Elastic for UI |
| Explainer video | Classic Tweens for simple; Motion for branding motion |
| Game UI animation | Motion Tweens; Bounce/Back presets for responsive feel |
| Web/HTML5 ads | Classic or Motion depending on FLA target document type |

Professional Animate users rarely use default easing. Every tween in a polished production has been custom-tuned in the Motion Editor or via the ease slider.

---

## 📋 Summary

- Classic Tweens interpolate between two keyframes on the same layer; Motion Tweens track property changes on a single span.
- The Motion Editor (Motion Tweens only) provides per-property bezier easing curves.
- Classic Tweens use a simple ease slider (-100 to 100) in the Properties panel; positive = Ease Out, negative = Ease In.
- "Floaty" animation results from linear easing, no holds, no overshoot, and same-rate property timing.
- Motion paths are editable bezier curves that define trajectory; "Orient to Path" auto-rotates symbols to face their direction of travel.
- Guide layers provide drawn paths for Classic Tween objects to follow; Guide layers are never exported.

## ➡️ Next Steps

[Module 4: Character Rigging in Animate →](../Module-04-Character-Rigging-Animate/Reading.md)

With tweening mastered, Module 4 applies it to character rigs — symbol hierarchies, bone tools, IK and FK, and the cut-out animation workflow used in commercial production.

## 🏭 Tweening in the Broadcast Pipeline

Understanding how tweening fits into a broader production context prevents surprises when working with a team:

| Pipeline Stage | Tweening Role | Who Does It |
|---------------|--------------|------------|
| Rough animation | Motion tweens block major position changes | Key animator |
| In-between pass | Classic tweens fill intermediate positions | Assistant animator / in-betweener |
| Scene assembly | Tweens on background elements (camera, parallax) | Compositor |
| Effects animation | Tweens on particle positions, scale, alpha | FX artist |
| Finishing | Fine-tuned easing on approved scenes | Animator or lead |

In episodic TV animation, a scene might pass through multiple animators — the key animator blocks the major actions; the in-betweener applies Classic Tweens for the intermediate poses; the compositor adds environmental tweens. Each person must be fluent in the same tween vocabulary so handoffs are seamless.

---

## 🎬 Tween Efficiency: Working Fast Without Sacrificing Quality

Professional Animate animators develop techniques to create quality tweens efficiently:

| Technique | Time Saved | How |
|-----------|-----------|-----|
| Save custom ease presets | Significant | Create a preset for your most-used easing curves; apply in one click |
| Duplicate tweens | Moderate | Copy a working tween span and paste to reuse timing on different properties |
| Use Ease presets first, refine in Motion Editor | Moderate | Start with Ease In-Out; then open Motion Editor only for fine-tuning |
| Set default ease in Preferences | Small | Change the default ease value so new tweens start with your preferred setting |
| Group related tweens in folders | Navigation time | Layer folders keep the Timeline navigable on complex scenes |

**The 80/20 rule for easing:** 80% of the quality improvement comes from adding any easing at all (vs. linear). The remaining 20% — the fine-tuning in the Motion Editor — takes 80% of the time. Know when to stop.

---

## 📚 Further Reading

- Adobe Animate User Guide: Motion Tweens and the Motion Editor
- *The Animator's Survival Kit* — Richard Williams, Chapter 9: Timing for Animators
- School of Motion: "Motion Tween vs Classic Tween in Adobe Animate" — free article

---

## 📋 Exam Readiness Checklist

Before moving on, verify you can answer each of these without notes:

- [ ] Define the core concept of this module in one sentence
- [ ] Name three real-world productions that demonstrate it
- [ ] Identify the two most common mistakes students make
- [ ] Describe when you would use each major tool/technique covered
- [ ] Explain the trade-offs between the primary approaches discussed
- [ ] State the exam-relevant numbers, ratios, or standards from memory

## 🎯 Five High-Frequency Exam Questions

These patterns appear repeatedly in industry certification and portfolio assessments:

1. **"Why not X?"** — Every technique has a cheaper/faster alternative; know when NOT to use the primary approach.
2. **"What's the production order?"** — Many mistakes happen when steps are applied out of sequence; understand the dependency chain.
3. **"Name a production that did this differently."** — Spider-Verse, Cuphead, Arcane each broke conventions intentionally; knowing *why* shows mastery.
4. **"What file format and settings?"** — Every deliverable context has specific requirements; memorize the key numbers (frame rate, bit depth, codec).
5. **"What's the fastest way to fix [common problem]?"** — Troubleshooting speed is a professional skill; know the diagnostic hierarchy.

## 📚 Canonical Further Reading

**Essential:**
- *The Animator's Survival Kit* — Richard Williams (2001, revised 2012). The most-assigned animation reference in university curricula worldwide. Every principle in this module has a Williams illustration.
- *The Illusion of Life: Disney Animation* — Frank Thomas & Ollie Johnston (1981). The primary source for the 12 Principles. Expensive but irreplaceable.

**Industry-Standard:**
- *Computer Animation: Algorithms and Techniques* — Rick Parent (3rd ed., 2012). The mathematical foundation behind every digital animation system.
- *3D Art Essentials* — Ami Chopine (2011). Bridge between artistic intent and technical execution.

**Online:**
- Animation Career Review salary surveys — updated annually, the most-cited compensation benchmark for animation professionals
- School of Motion blog — free, research-backed articles on the business of motion design and animation

---

*Next module →*
