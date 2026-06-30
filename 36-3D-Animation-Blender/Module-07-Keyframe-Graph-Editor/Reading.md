---
permalink: /36-3D-Animation-Blender/Module-07-Keyframe-Graph-Editor/
title: "Module 7: Keyframe Animation & Graph Editor"
---

# 🎞️ Module 7: Keyframe Animation & Graph Editor

## The Space Between Poses

Richard Williams, the director of animation for *Who Framed Roger Rabbit* and author of *The Animator's Survival Kit*, taught that the drawing between two key poses is where animation lives. The key poses define the storytelling. The inbetweens define the physics, the weight, the personality. In 3D animation, the "inbetweens" are computed by the software, but the curve that defines how the software interpolates between poses is entirely under the animator's control.

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

## 7.2b NLA Editor: Full Production Workflow

The **Non-Linear Animation Editor** is the production backbone for any shot involving multiple layered performances. It sits between the Action Editor (single-action editing) and the Timeline (full-scene view).

**NLA terminology:**

| Term | Definition |
|---|---|
| **Action** | A named set of F-Curves defining one performance (walk, wave, breathe) |
| **Strip** | An instance of an Action placed on the NLA timeline |
| **Track** | A horizontal lane in the NLA Editor; one strip per frame position |
| **Push Down** | Commits current active action to NLA as a strip, freeing the action slot |
| **Stash** | Same as Push Down but the strip starts muted |
| **Tweak Mode** | Edit an NLA strip's internal keyframes in the Action Editor |
| **Extrapolation** | How the strip behaves beyond its start/end frames |
| **Blend In / Blend Out** | Frame count for fade from/to zero influence at strip edges |

**NLA workflow for a 30-second commercial:**
1. Animate idle breathing cycle (24 frames) → Push Down → "Breathe"
2. Animate walk cycle (24 frames) → Push Down → "Walk"
3. Animate hero arm-raise action (18 frames) → Push Down → "WaveArm"
4. In NLA: Breathe strip on Track 1, Repeat = 90 (covers all 30 seconds)
5. Walk strip on Track 2, Repeat = 20, placed at frame 1
6. WaveArm strip on Track 3, placed at frame 240, Blend In = 6 frames

This creates a 720-frame animated character from three short actions, the NLA handles all the compositing.

> ⚠️ **Gotcha, NLA Track Order Matters:** In the NLA Editor, tracks higher up the list have higher priority (they override lower tracks when Blend Type is Replace). Put the most specific, shot-specific actions on the top tracks; the repeating cycles on the bottom. If your walk cycle is above the specific gestures, the gestures will not show through.

---

## 7.3 The Graph Editor

The **Graph Editor** displays animation as F-Curves (Function Curves), mathematical curves that define how a value changes over time. The horizontal axis is time (frames), the vertical axis is the property value.

**Navigating the Graph Editor:**
- **MMB drag:** pan
- **Scroll:** zoom vertical; Ctrl+Scroll: zoom horizontal
- **V:** zoom to selected F-Curves
- **Home:** frame all F-Curves
- **G/S:** move/scale selected keyframe handles

**Anatomy of an F-Curve:**
- Each keyframe has a **left handle** and a **right handle**
- The handles determine the **interpolation**, how the curve approaches and leaves the keyframe
- **Bezier handles** (the default) can be dragged freely to sculpt the curve shape
- **Handle types:** Free (fully independent), Aligned (symmetrical), Vector (creates straight-line segments), Auto (automatic smooth handle)

---

## 7.3b Graph Editor: F-Curve Modifiers

F-Curve **modifiers** apply mathematical operations to a curve without adding individual keyframes. They sit on top of the underlying keyframe data and are applied additively.

**Available F-Curve modifiers (Graph Editor → Properties → F-Curve Modifiers):**

| Modifier | What It Does | Use Case |
|---|---|---|
| **Cycles** | Repeats the curve before/after the keyed range | Walk cycles, breathing, fan rotation |
| **Noise** | Adds random oscillation | Camera shake, organic jitter, cloth pre-sim |
| **Envelope** | Scales amplitude over time | Fade in/out secondary motion |
| **Generator** | Replaces the curve with a mathematical formula | Linear ramp, constant offset |
| **Stepped Interpolation** | Forces curve to step at n-frame intervals | Stop-motion aesthetic, stepped blocking preview |
| **Limits** | Clamps the output value to a min/max range | Prevent a rotation from exceeding anatomical limits |

**The Cycles modifier in depth:** The Cycles modifier has four modes per side (before/after the keyed range):

| Mode | Behavior |
|---|---|
| **Repeat** | Repeats the original keys verbatim |
| **Repeat with Offset** | Repeats but adds the delta from last-first key (for locomotion) |
| **Mirrored** | Ping-pong: repeats forward, then backward |
| **None** | No extrapolation (curve stays at end value) |

**Repeat with Offset** is essential for walk cycles: as the walk cycle repeats, the character's location X/Y progresses forward by the stride distance each cycle, rather than teleporting back to the start position.

> 🎯 **What the exam tests:** F-Curve modifiers (especially Cycles) are heavily tested. Know that a Cycles modifier with **Repeat** mode makes the curve loop but the position value resets to the start, causing the character to teleport. **Repeat with Offset** is the fix for locomotion cycles. Know how to add a modifier: Graph Editor → Properties panel (N) → F-Curve Modifiers → Add.

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

**The most important Graph Editor concept, "Ease In/Out":**

When a Bezier curve has flat handles at a keyframe (the curve is horizontal at the key point), the value changes slowly near that frame, this is called "ease in" (approaching) or "ease out" (departing). This is what separates mechanical, linear animation from organic, physical animation. The rule: **almost every physical object eases in and out of its poses.**

> 🚨 **Trap:** A common beginner mistake is setting all handles to "Auto" and trusting the automatic smooth. Auto handles often overshoot, especially when the values between two keyframes are very different. Always check for overshooting arcs in the viewport and manually adjust handles in the Graph Editor.

---

## 7.5 The Action Editor and NLA (Non-Linear Animation)

### Actions

An **Action** in Blender is a named collection of F-Curves that defines one "performance" of an animation, a walk cycle, an idle breathing animation, a wave, a jump. Actions are stored in the Action Editor (a context of the Dope Sheet).

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

## 7.6b Twelve Principles of Animation: Blender Implementation

The twelve principles of animation (Disney, 1981) map directly to Blender tools:

| Principle | Blender Tool | Implementation |
|---|---|---|
| **Squash and Stretch** | Scale keyframes on mesh or bone | Scale Y up on anticipation, Y down on impact |
| **Anticipation** | Keyframe in Graph Editor | Small reverse motion 4–8 frames before main action |
| **Staging** | Camera placement, lighting | Module 4 (light) + Module 10 (shot planning) |
| **Straight Ahead / Pose-to-Pose** | Stepped vs. Bezier interpolation | Stepped = straight ahead; Bezier = pose-to-pose |
| **Follow Through** | F-Curve shape after peak keyframe | Overshoot + settle using handle adjustment |
| **Overlapping Action** | Offset keyframes on secondary parts | Tail, cloth, hair keys offset 4–8 frames behind the primary motion |
| **Slow In / Slow Out** | F-Curve handle flatness | Flat handles at keyframes = ease; auto handles |
| **Arcs** | Graph Editor + viewport playback review | All limbs must trace curved arcs, check with onion skin |
| **Secondary Action** | Separate action or offset keys | Hair, clothing, props with their own F-curves |
| **Timing** | Dope Sheet spacing | More frames between keys = slower; fewer = faster |
| **Exaggeration** | Pose values pushed beyond realistic range | Scale transforms to 120–150% in Graph Editor |
| **Solid Drawing** | Mesh topology + rig quality | Good topology (Module 2) prevents deformation artifacts |

> 🎯 **What the exam tests:** The Blender Foundation certification may reference the twelve principles and ask which Blender feature implements them. Most commonly tested: **Slow In/Slow Out** (F-Curve handle type Auto → creates flat handles = natural ease), **Follow Through** (overshoot in Graph Editor past the final value before settling), and **Anticipation** (pre-action keyframe in opposite direction).

---

## 7.7 Case Study: Animation Workflow on *Charge* (Blender 2022)

The Blender Institute's 2022 short *Charge* (directed by Andy Goralczyk) documented its animation pipeline in unusual detail. Key observations:

**Blocking first, then spline:**
- Animators worked in **Stepped interpolation** (constant mode) for the first blocking pass, all keyframes jump to the next pose instantly. This allows the timing to be judged without the distraction of inbetween motion.
- After the director approved the blocking, animators switched to **Bezier/Spline mode** and began polishing the curves in the Graph Editor.
- This "blocking → spline" workflow is the industry standard at every studio from Pixar to individual freelancers.

**Graph Editor discipline:**
- Each animator was required to check every F-Curve for "rogue keys", unexpected keyframes that the auto-key system inserted accidentally
- Channels that should be clean (like an object that only moves on frame 1 and frame 48) were cleaned manually to remove any stray intermediate keys

**Cycle efficiency:**
- The main character's gallop was animated as a 12-frame cycle (at 24fps = 0.5 seconds per stride)
- The Cycles modifier extended this for the full 3-minute film's action sequences
- The animators noted this saved approximately 80% of the keying time compared to hand-keying the entire sequence

---

## 7.7b Sprite Fright Animation: Overlapping Action and Secondary Motion

The *Sprite Fright* making-of documentation identifies overlapping action and secondary motion as the highest-priority polish pass for all characters. Specific techniques documented:

**Overlapping action for character hair/ears:**
- The sprite characters' leaf-like ears were animated as separate bones with keyframes offset 4–6 frames behind the head rotation
- This means when the head turns right at frame 20, the ears reach the same rotation at frame 24–26, the "drag" delay creates the organic lag that communicates mass and flexibility

**Secondary motion for the forest environment:**
- Background tree branches used the **Noise F-Curve modifier** with Phase set to a random value per branch
- The same Noise settings on all branches create synchronized swaying (wrong, looks like a single plant)
- Different Phase values per branch create the natural visual complexity of independently moving vegetation

**The practical rule from the *Sprite Fright* animators:** "Anything that hangs, trails, or is attached at one end will move 4–8 frames behind whatever it's attached to. Hair, tails, loose fabric, ears, if you key them at the same frame as the head, they'll look glued on."

> ⚠️ **Gotcha Auto Keyframing in Blocking:** During the blocking pass, Auto Keying (the record button in the Timeline header) is convenient for capturing poses quickly. However, it inserts keyframes on ALL channels that change including Location Z if you accidentally nudge a character up while rotating. After blocking, always open the Dope Sheet and delete any unexpected channels (a clean blocking pass typically has Location X/Y/Z + Rotation XYZ on the root control, plus some key bone rotations, nothing else).

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

## 7.8b Camera Animation: The Missing Foundation

Character animation without camera animation is incomplete. The camera IS the story, it defines what the audience sees and when.

**Keyframing the camera:**
- Select the camera object → **I** key → **LocRotScale** → camera keyframes in the timeline
- Camera focal length (zoom) is animatable: Properties → Object Data → Lens → right-click → Insert Keyframe
- **Lock Camera to View** (N-Panel → View → Lock Camera to View): moves the camera in real time as you navigate in camera view (Numpad 0), enable only during camera placement, then disable to prevent accidental camera drift

**Animated camera vs. Static camera:**
| Approach | When to Use | Technical Consideration |
|---|---|---|
| Static camera | Emotional close-ups; establish stability | No keyframes needed except focus distance |
| Pan/tilt | Follow action across screen | Rotate camera: R → X/Z + keyframes |
| Dolly (track in/out) | Create depth; punch in for emphasis | G → Y + keyframes (Y=depth in camera local space) |
| Handheld (noise) | Live-action feel, tension | Add Noise F-Curve modifier to camera rotation |
| Crane (arc up) | Reveal scale; awe moment | G → Z while in camera-aligned space |

**Depth of Field animation:** The camera's F-Stop and Focus Distance can be keyframed to create a rack focus effect, where the focus shifts from one subject to another while the camera is static:
1. Object Data → Depth of Field → Focus Object: set to a target Empty or the character
2. Or: Focus Distance: set manually and keyframe from one value to another over 12–24 frames
3. F-Stop: 1.4–2.8 = cinematic shallow DoF; 11–22 = everything in focus

> 🎯 **What the exam tests:** Camera animation is covered in Blender certification as part of the animation module. Know that: (1) the camera is just another object, all G/R/S transforms work; (2) focal length is in the Object Data properties; (3) depth of field requires Focus Object or Focus Distance to be set; (4) F-Stop controls the blur amount (lower = more blur).

---

## 7.9 What the Exam Tests: Animation Module

| Topic | Tested Knowledge |
|---|---|
| Keyframe insertion | I key → menu; right-click property → Insert; Auto-Keying |
| Dope Sheet contexts | Dope Sheet (all), Action Editor (single action), Shape Key Editor |
| Graph Editor navigation | MMB pan; V zoom to selection; Home frame all |
| F-Curve handle types | Free, Aligned, Vector, Auto, and their visual behaviors |
| Interpolation modes | Bezier (default), Linear, Constant, Bounce/Elastic |
| Ease in/out | Flat handles at key = ease; angled = continued momentum |
| F-Curve Cycles modifier | Repeat (teleports) vs. Repeat with Offset (advances by stride) |
| NLA Push Down | Commits action to NLA, frees action slot for new action |
| NLA track priority | Higher tracks override lower tracks (Replace mode) |
| NLA Blend types | Replace / Combine (most useful for layering) / Add |
| Blocking workflow | Stepped → director review → Bezier spline → polish |
| 12 principles in Blender | Squash/stretch=scale keys; anticipation=pre-key; ease=flat handles |
| *Charge* cycle efficiency | 12-frame gallop cycle, Cycles modifier = 80% time saved |

---

## 7.9b Animation Troubleshooting Reference

| Problem | Symptom | Fix |
|---|---|---|
| Rotation flip (gimbal) | Character body snaps during rotation | Switch bone rotation mode to Quaternion; use Euler Filter on curves |
| Walk cycle character teleports | Character jumps back to start each cycle | Cycles modifier → Repeat with Offset (not Repeat) |
| Auto Keying creates extra channels | Unexpected Location Z keyframes | Disable Auto Keying after blocking; clean Dope Sheet manually |
| NLA strip overrides wrong | Higher-layer animation disappears | Check NLA track order: higher tracks = higher priority |
| Graph Editor curves invisible | Empty Graph Editor | Select an object/bone that has keyframes; Home to frame all |
| Ease in/out not working | Motion still linear despite Bezier mode | Check F-Curve handles: Vector type = linear; change to Auto or Aligned |
| Action lost after switching | Action disappears from list | Add Fake User (shield icon) in Action Editor before switching |
| IK/FK snap pops the character | Sudden position jump on switch | Use Rigify Snap IK→FK button before switching; key both pre and post |

---

## 7.10 Driven Keys and Constraints: Automation Beyond Keyframes

The full animation toolkit includes keyframes, but also systems that compute values automatically:

| System | How It Works | Use Case |
|---|---|---|
| **Driver** | Mathematical formula linking one property to another | IK/FK blend from slider; shape key from bone rotation |
| **Constraint** (animation) | Bone/object follows a target automatically | Eye tracking, camera track, foot plant |
| **F-Curve modifier** | Math applied to all keyframes on a channel | Noise, Cycles, Limits |
| **NLA strip** | Named action reused across multiple parts of the timeline | Walk cycle, breathing cycle |
| **Shape key animation** | Slider value keyframed directly | Facial expression performance |

**When to use each:**
- If the value should change based on *another property* → Driver
- If the value should follow *a target object or bone* → Constraint
- If the value should *repeat or cycle* indefinitely → F-Curve Cycles modifier or NLA strip
- If the value should *match geometry sculpted ahead of time* → Shape key keyframed

> ⚠️ **Gotcha Drivers vs. Keyframes:** A property cannot have both a Driver AND keyframes simultaneously they conflict. If you add a Driver to a property that already has keyframes, Blender will warn you that the keyframes will be ignored. Choose one system per property. Most production rigs use Drivers for procedural behaviors (shape keys driven by bones) and Keyframes for creative performance (the bone's own rotation, driven by the animator).

---

## 📚 Next Steps

Proceed to [Module 8: Physics & Simulations](../Module-08-Physics-Simulations/Reading.md), your animated character needs a world with gravity, cloth, and physics.

---

## 📖 Further Reading

- 📖 **Williams, Richard (2009). *The Animator's Survival Kit.* Faber & Faber**, the definitive animation timing reference
- 📖 **Blender Manual, F-Curves** (docs.blender.org)
- 📖 **Blender Institute, *Charge* Production Blog** (blender.org/about/projects/)
- 📖 **Grant Abbitt, "Blender Animation for Beginners"** (YouTube, see Videos.md)

*[Module complete, see README for next steps and related tracks.]*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*
