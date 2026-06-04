---
permalink: /36-3D-Animation-Blender/Module-07-Keyframe-Graph-Editor/
title: "Module 7: Keyframe Animation & Graph Editor"
---

# 🎞️ Module 7: Keyframe Animation & Graph Editor

## The Space Between Poses

Richard Williams, the director of animation for *Who Framed Roger Rabbit* and author of *The Animator's Survival Kit*, taught that the drawing between two key poses is where animation lives. The key poses define the storytelling. The inbetweens define the physics, the weight, the personality. In 3D animation, the "inbetweens" are computed by the software — but the curve that defines how the software interpolates between poses is entirely under the animator's control.

That curve is what the **Graph Editor** shows you. Learning to read and sculpt animation curves is the difference between an animation that feels mechanical and one that feels alive.

---

## 7.1 Keyframes: The Foundation

A **keyframe** stores the value of a property at a specific frame number. Blender can keyframe any animatable property: position, rotation, scale, material color, lamp strength, shape key value, custom properties.

**Inserting keyframes:**
- **I** (over the viewport or property): opens the Insert Keyframe menu
- **I → Location, Rotation, Scale (LocRotScale):** keyframes all three simultaneously
- **Right-click any property → Insert Keyframe:** keyframes that specific value
- **Auto Keying (record button in the header):** automatically inserts keyframes whenever you change a value while the timeline is playing or scrubbing

> 🎯 **Exam tip:** In production animation, **Auto Keying** is often enabled during blocking to capture poses quickly, then disabled during spline-polish to prevent accidental key insertion.

---

## 7.2 The Dope Sheet

The **Dope Sheet** shows keyframes as diamond shapes arranged on a timeline, grouped by object and property channel. It is used for:

- **Timing adjustments:** slide keyframes left/right to change timing
- **Selecting groups of keyframes:** box-select to grab a range
- **Scaling timing:** S to scale keyframe spacing (speeds up or slows down a range of motion)
- **Duplicating animation:** Shift+D on keyframes to copy; useful for cycle creation

**Dope Sheet editors:**
- **Dope Sheet:** All keyframes for all selected objects
- **Action Editor:** The keyframes of a single Action (see NLA section)
- **Shape Key Editor:** Keyframes for shape key values only
- **Grease Pencil (Dope Sheet context):** 2D animation frames

**Key Dope Sheet shortcuts:**

| Shortcut | Action |
|---|---|
| **A** | Select all keyframes |
| **G** | Grab (move) keyframes |
| **S** | Scale keyframe timing |
| **X / Delete** | Delete keyframes |
| **Shift+D** | Duplicate keyframes |
| **Ctrl+C / Ctrl+V** | Copy / Paste keyframes |

---

## 7.3 The Graph Editor

The **Graph Editor** displays animation as F-Curves (Function Curves) — mathematical curves that define how a value changes over time. The horizontal axis is time (frames), the vertical axis is the property value.

**Navigating the Graph Editor:**
- **MMB drag:** pan
- **Scroll:** zoom vertical; Ctrl+Scroll: zoom horizontal
- **V:** zoom to selected F-Curves
- **Home:** frame all F-Curves
- **G/S:** move/scale selected keyframe handles

**Anatomy of an F-Curve:**
- Each keyframe has a **left handle** and a **right handle**
- The handles determine the **interpolation** — how the curve approaches and leaves the keyframe
- **Bezier handles** (the default) can be dragged freely to sculpt the curve shape
- **Handle types:** Free (fully independent), Aligned (symmetrical), Vector (creates straight-line segments), Auto (automatic smooth handle)

---

## 7.4 Interpolation Modes

**Interpolation** is the mathematical function used to calculate values between keyframes.

| Mode | Behavior | Use Case |
|---|---|---|
| **Bezier** | Smooth curve, handle-controlled | Default for animation; natural motion |
| **Linear** | Straight line between keyframes | Machine motion, electronic movement |
| **Constant** | Jumps instantly at the keyframe | Light switches, frame-exact triggers |
| **Sine / Elastic / Bounce / Back** | Easing functions with oscillation | UI animation, bouncy characters |

**Setting interpolation:**
- Select keyframes in the Graph Editor
- **T** → Interpolation mode menu
- Or: right-click → Interpolation Mode

**The most important Graph Editor concept — "Ease In/Out":**

When a Bezier curve has flat handles at a keyframe (the curve is horizontal at the key point), the value changes slowly near that frame — this is called "ease in" (approaching) or "ease out" (departing). This is what separates mechanical, linear animation from organic, physical animation. The rule: **almost every physical object eases in and out of its poses.**

> 🚨 **Trap:** A common beginner mistake is setting all handles to "Auto" and trusting the automatic smooth. Auto handles often overshoot — especially when the values between two keyframes are very different. Always check for overshooting arcs in the viewport and manually adjust handles in the Graph Editor.

---

## 7.5 The Action Editor and NLA (Non-Linear Animation)

### Actions

An **Action** in Blender is a named collection of F-Curves that defines one "performance" of an animation — a walk cycle, an idle breathing animation, a wave, a jump. Actions are stored in the Action Editor (a context of the Dope Sheet).

**Creating Actions:**
1. In the Action Editor, click the action name dropdown → "+" to create a new Action
2. Animate the motion
3. The Action is saved in the .blend file under the armature's action list
4. Use the Fake User button (shield icon) to prevent orphan data cleanup from deleting unused Actions

### The NLA Editor (Non-Linear Animation)

The **NLA Editor** stacks Actions as "strips" on a timeline, allowing:
- **Repeating actions:** A walk cycle played 10 times back-to-back
- **Blending actions:** Overlay an arm wave on top of a body walk
- **Scaling time:** Slow down or speed up a specific strip without re-keying

**NLA workflow for a walk cycle:**
1. Animate one complete walk cycle (e.g., frames 1–24 at 24fps)
2. In the Action Editor, mark it as a Fake User (shield icon)
3. Open NLA Editor
4. Click the "Push Down" button on the action → becomes an NLA strip
5. In NLA, Alt+D to duplicate the strip → position end-to-end
6. Strip properties: Repeat = 10 to loop automatically

---

## 7.6 Cycling Actions

A **cyclic action** is one that loops seamlessly. The walk cycle is the most fundamental cycled animation in character work.

**Creating a seamless cycle in Blender:**
1. Animate the cycle so the last frame's pose matches the first frame's pose
2. Add the **Cycles modifier** to the F-Curves: Graph Editor → F-Curve → Cycles Modifier
3. Set **Mode → Repeat** for a perfect loop
4. The curve extends infinitely in both directions, repeating

**For a walk cycle specifically:**
- Frame 1: left foot forward, right foot back (contact pose)
- Frame 12 (half-cycle): right foot forward, left foot back (opposite contact pose)
- Frame 25: identical to Frame 1 (the one extra frame that makes it seamless at 24fps)
- Use the Cycles modifier on all channels to extend the animation

---

## 7.7 Case Study: Animation Workflow on *Charge* (Blender 2022)

The Blender Institute's 2022 short *Charge* (directed by Andy Goralczyk) documented its animation pipeline in unusual detail. Key observations:

**Blocking first, then spline:**
- Animators worked in **Stepped interpolation** (constant mode) for the first blocking pass — all keyframes jump to the next pose instantly. This allows the timing to be judged without the distraction of inbetween motion.
- After the director approved the blocking, animators switched to **Bezier/Spline mode** and began polishing the curves in the Graph Editor.
- This "blocking → spline" workflow is the industry standard at every studio from Pixar to individual freelancers.

**Graph Editor discipline:**
- Each animator was required to check every F-Curve for "rogue keys" — unexpected keyframes that the auto-key system inserted accidentally
- Channels that should be clean (like an object that only moves on frame 1 and frame 48) were cleaned manually to remove any stray intermediate keys

**Cycle efficiency:**
- The main character's gallop was animated as a 12-frame cycle (at 24fps = 0.5 seconds per stride)
- The Cycles modifier extended this for the full 3-minute film's action sequences
- The animators noted this saved approximately 80% of the keying time compared to hand-keying the entire sequence

---

## 7.8 Summary

| Concept | Key Point |
|---|---|
| Keyframes | I key to insert; auto-keying for blocking |
| Dope Sheet | Keyframes as diamonds; G to move, S to scale timing |
| Graph Editor | F-Curves; X=time, Y=value; sculpt curves for motion quality |
| Interpolation | Bezier (organic), Linear (machine), Constant (instant) |
| Ease in/out | Flat handles near keyframes = natural deceleration/acceleration |
| Actions | Named F-Curve sets; create in Action Editor; Fake User to preserve |
| NLA Editor | Stack Actions as strips; repeat/blend walk cycles and performances |
| Blocking workflow | Stepped → director approval → spline polish (industry standard) |

---

## 📚 Next Steps

Proceed to [Module 8: Physics & Simulations](../Module-08-Physics-Simulations/Reading.md) — your animated character needs a world with gravity, cloth, and physics.

---

## 📖 Further Reading

- 📖 **Williams, Richard (2009). *The Animator's Survival Kit.* Faber & Faber** — the definitive animation timing reference
- 📖 **Blender Manual — F-Curves** (docs.blender.org)
- 📖 **Blender Institute — *Charge* Production Blog** (blender.org/about/projects/)
- 📖 **Grant Abbitt — "Blender Animation for Beginners"** (YouTube, see Videos.md)
