---
title: "Final Mock Exam: Game & UI Animation (All 8 Modules)"
---

# 🏆 Final Mock Exam: Game & UI Animation

**Scope:** All 8 Modules, complete course coverage
**Length:** 60 questions · 90 minutes
**When to take:** 2–3 days before your portfolio review or studio application
**Target:** Score 80%+ (48/60) before applying to game studios or motion design roles

---

### 1. At 60fps, the maximum time per frame is 16.67ms. The animation system typically gets which portion of this budget?

A. 8–10ms
B. 1–3ms
C. 14–16ms
D. 0.1–0.5ms

---

### 2. Steve Swink's three components of game feel are:

A. Graphics, Sound, Physics
B. Input, Response, Context
C. Frame Rate, Latency, Resolution
D. Animation, VFX, Haptics

---

### 3. A Unity Trigger parameter is DIFFERENT from a Bool parameter because:

A. Triggers work with AnyState transitions; Bools do not
B. Triggers reset automatically after being consumed by one transition; Bools persist until code sets them to false
C. Triggers support float values; Bools are binary only
D. Triggers require polling every 100ms; Bools are checked every frame

---

### 4. Root Motion in Unity should NOT be used alongside NavMeshAgent without:

A. Disabling the Animator component
B. Overriding OnAnimatorMove() to manually apply the root position
C. Setting the NavMeshAgent's speed to zero
D. Switching the rig type to Generic

---

### 5. An override Animator layer at weight 0.0 results in:

A. The layer overriding the base layer at 50% strength
B. The layer having no visual effect; the base layer controls fully
C. The layer using additive blending at zero intensity
D. The layer being removed from the Animator at runtime

---

### 6. The correct approach for a biped character that needs to share Mixamo clips with other biped characters in Unity is:

A. Use the Generic rig for both characters with the same bone naming convention
B. Use the Humanoid rig for both characters and create avatars from their models
C. Manually map each Mixamo bone to the custom character's bones in a C# script
D. Export the Mixamo clips as Individual FBX files, one per character

---

### 7. In Unreal's AnimGraph, which context is responsible for per-frame simulation logic (gravity, drag, turbulence)?

A. Spawn context (VFX Graph), not an AnimGraph concept
B. Event Graph, code runs here
C. AnimGraph state machine, states run per-frame
D. None of the above, AnimGraph uses a different architecture

---

### 8. In Unreal's Animation Blueprint, the "Event Graph" sets:

A. Keyframes for the animation clips in each state
B. Variables (Speed, IsGrounded, IsAiming) by reading from the owning pawn
C. The draw calls order for each animation layer
D. The frame budget for each state machine evaluation

---

### 9. Riot Games' Valorant animation system (GDC 2020) used Blend Spaces tuned primarily for:

A. Artistic realism for marketing materials
B. Silhouette clarity so players can identify agent actions at distance
C. Minimum bone count on all agents
D. Performance on low-end hardware only

---

### 10. Unreal's Animation Montage uses a "Slot" to:

A. Define which bones the montage affects via a bone mask
B. Mark the AnimGraph location where the montage overrides the base Animation Blueprint
C. Set the priority of the montage relative to the active state machine
D. Store multiple clips that cycle sequentially

---

### 11. Spine 2D is authored by:

A. Unity Technologies
B. Esoteric Software
C. Adobe
D. Spriter (Brashmonkey)

---

### 12. In Spine, which attachment type defines a polygon used for hit detection?

A. Region attachment
B. Mesh attachment
C. Bounding Box attachment
D. Path attachment

---

### 13. Dead Cells (Motion Twin) optimized Spine performance by:

A. Using 3D meshes re-projected to 2D
B. Using a hand-optimized C runtime with batched draw calls per skeleton and low bone counts
C. Pre-rendering all animations to sprite sheets at export time
D. Reducing the animation update rate to 30fps on all enemies

---

### 14. In Spine-Unity, playing an attack animation on Track 1 while walk plays on Track 0:

A. Is not supported, Spine-Unity supports one track only
B. Causes a runtime error because tracks conflict
C. Plays both animations simultaneously, blending or overriding based on alpha and mix settings
D. Automatically creates a new Animator layer for the attack

---

### 15. The maximum recommended Spine atlas page size for mobile (iOS/Android) is:

A. 256×256
B. 512×512
C. 1024×1024
D. 4096×4096

---

### 16. The three factors that determine animation state machine responsiveness are:

A. Frame rate, polygon count, texture quality
B. Transition latency, blend duration, interrupt conditions
C. Clip length, keyframe count, bone count
D. Animation type, layer count, parameter count

---

### 17. AnyState transitions in Unity should use Trigger parameters (rather than Bool) to:

A. Allow the transition to fire from sub-state machines
B. Prevent transition loops by auto-resetting the parameter after one use
C. Enable the transition to bypass Has Exit Time
D. Allow the transition to work without conditions

---

### 18. For a high-priority one-shot action like a dodge roll, the transition Interruption Source should be:

A. None, dodge is always committed
B. Next State, allow the destination to interrupt
C. Current State, allow source transitions to interrupt and fire immediately
D. Both, maximum flexibility

---

### 19. A 2D Blend Tree uses which normalization best practice?

A. Keep axes at their natural scales for maximum interpolation accuracy
B. Normalize both axes to the same range to prevent one axis dominating interpolation
C. Set one axis to 0–1 and the other to −1 to 1 for directional games
D. Normalization is not relevant for Freeform Directional blend trees

---

### 20. An additive animation layer clip must be different from an override layer clip in that:

A. Additive clips must use Root Motion; override clips must use In-Place
B. Additive clips are the delta from a reference pose; override clips are full poses
C. Additive clips require the Humanoid rig; override clips work with Generic
D. Additive clips only affect the spine and arm bones; override clips affect all bones

---

### 21. In GSAP, animating `top: 100px` instead of `y: 100` causes:

A. The animation to trigger a GPU overdraw pass
B. Layout recalculation on every animation frame, which is expensive
C. GSAP to fall back to CSS transitions internally
D. The animation to skip intermediate frames to maintain timing

---

### 22. GSAP's Timeline supports relative timing with the `-=0.2` syntax. What does it mean?

A. The tween starts 0.2 seconds before the timeline begins
B. The tween starts 0.2 seconds before the previous tween ends (0.2s overlap)
C. The tween plays at 0.2× speed
D. The tween starts at the 0.2 second mark

---

### 23. For a scroll-triggered section that animates as the user scrolls (tied to scroll position, not auto-playing), the GSAP setting is:

A. `toggleActions: 'play none none none'`
B. `scrub: true`
C. `pin: true`
D. `start: 'top center'`

---

### 24. The FLIP animation technique stands for:

A. Forward Layout Interpolation Process
B. First, Last, Invert, Play
C. Fast Layered Image Positioning
D. Frame-Level Interpolation Protocol

---

### 25. Framer Motion's `AnimatePresence` is required for:

A. All animations in a React application
B. Animating list reorders
C. Exit animations when components unmount from the React tree
D. Scroll-triggered animations

---

### 26. The CSS `animation-fill-mode: none` (default) causes:

A. The animation to hold its final keyframe state permanently
B. The element to return to its original CSS-defined state after the animation ends
C. The animation to apply its first keyframe during the delay period
D. The animation to loop infinitely

---

### 27. Animating `opacity` and `transform` in CSS is GPU-safe because:

A. They are handled by the browser's Layout stage efficiently
B. They skip Layout and Paint, going directly to the Compositor stage
C. The browser compiles them to WebGL shaders automatically
D. CSS animations are always GPU-accelerated regardless of property

---

### 28. LottieFiles was originally created by:

A. Adobe for Creative Cloud integration
B. Google for Material Design motion
C. Airbnb's design engineering team to ship AE animations in their mobile app
D. Framer for the Framer X animation platform

---

### 29. The Bodymovin AE plugin CANNOT export which After Effects feature to Lottie?

A. Shape layers and fill colors
B. Path animation with keyframes
C. AE 3D layers with a 3D camera
D. Nested compositions (2 levels deep)

---

### 30. Rive's key advantage over Lottie for an interactive button animation is:

A. Rive files are always smaller
B. Rive has a built-in state machine that responds to user inputs (hover, click) at runtime
C. Rive supports After Effects as a source tool
D. Rive integrates with the Unity Animator Controller

---

### 31. In CSS, a negative `animation-delay` (e.g., `-0.3s`) causes:

A. The animation to play in reverse for 0.3 seconds before playing forward
B. The animation to start as if it has already been playing for 0.3 seconds
C. A syntax error, negative delays are not valid CSS
D. The animation to play at 0.3× speed before normalizing

---

### 32. The CSS `steps(8, start)` timing function is most useful for:

A. Creating spring-physics easing without JavaScript
B. Sprite sheet animation, jumping between 8 discrete frames with no interpolation
C. Slowing the animation down in 8 equal increments
D. Creating an 8-second easing curve

---

### 33. Unity VFX Graph runs particle simulation on:

A. CPU, identical to Shuriken
B. GPU via compute shaders
C. CPU for small particle counts, GPU for counts above 10,000
D. The audio thread, decoupled from the render thread

---

### 34. Unity VFX Graph is NOT compatible with which Unity render pipeline?

A. URP
B. HDRP
C. Built-in Render Pipeline
D. LWRP (now URP)

---

### 35. In Unity Shader Graph, a dissolve effect uses which node to determine which pixels to clip?

A. Fresnel Effect
B. Sample Texture 2D (noise) + Step or Smoothstep
C. Screen Position + UV Rotation
D. Vertex Color + Lerp

---

### 36. A "hologram shader" in Unity Shader Graph typically uses:

A. Ray marching through a volume texture
B. Sine wave based on world Y position for scan lines + Fresnel rim + time-based flicker
C. Screen-space ambient occlusion baked into the UV map
D. A pre-rendered image sequence played as a texture animation

---

### 37. The "Juice It or Lose It" GDC 2012 talk demonstrated that:

A. Juice elements (screen shake, hit stop, particles) make games more satisfying without changing core mechanics
B. Screen shake is the most important single element of game feel
C. Games with complex mechanics need minimal juice
D. Juice elements should be subtle enough that players don't consciously notice them

---

### 38. Hit stop in Hades was tuned to approximately which duration?

A. 1–2 frames
B. 4–8 frames
C. 12–16 frames
D. 24–30 frames

---

### 39. Bungie's "first read" VFX design principle for Destiny 2 weapons means:

A. VFX play on the first frame of the weapon's fire animation
B. Each weapon's VFX communicates its archetype before the player reads damage numbers
C. VFX are optimized for players' first experience with each weapon
D. Each weapon has exactly one unique particle effect

---

### 40. Screen shake using Perlin noise is preferred over pure random because:

A. Perlin noise is faster to compute than random number generation
B. Perlin noise has spatial coherence, producing directional shake instead of random buzzing
C. Pure random shake causes audio de-sync
D. Perlin noise respects the `prefers-reduced-motion` media query automatically

---

### 41. Squash and stretch on a 3D object on impact compresses which axis?

A. The axis perpendicular to the impact direction (expands on impact axis)
B. The impact axis (compresses along the direction of force)
C. All axes equally
D. No axis, squash/stretch is 2D-only

---

### 42. In Unreal Niagara, "Simulation Stages" allow:

A. Defining the order of Emitter updates within a System
B. Custom GPU compute shader passes that run arbitrary logic on particle data
C. Pre-simulating particles for a fixed number of frames before display
D. Grouping particles into LOD bands for distance-based culling

---

### 43. Unity Shader Graph generates:

A. C# animation controller code that drives shader parameters
B. HLSL shader code that compiles to native GPU shaders
C. Blueprint scripts that control material parameters
D. JSON descriptions of shader programs interpreted at runtime

---

### 44. The art director's decision for Hades VFX high contrast, large individual particle sizes was driven by:

A. Performance constraints on early Nintendo Switch hardware
B. The need for VFX to read clearly at the camera's top-down distance from characters
C. Supergiant's stylistic preference for minimal visual noise
D. The limitation of Spine 2D's particle system capabilities

---

### 45. In GSAP, the `stagger` option applied to a selection of elements:

A. Plays all element animations simultaneously with identical timing
B. Applies a sequential delay between each element's animation start
C. Randomizes the animation order of elements in the selection
D. Runs alternate elements in opposite directions

---

### 46. For a Framer Motion layout animation that needs to animate when items are filtered out of a list, which component wraps the list?

A. `MotionConfig`
B. `AnimateSharedLayout`
C. `AnimatePresence` (with each item wrapped in `motion.li` with a `key` and `exit` prop)
D. `LazyMotion`

---

### 47. In CSS, `animation-direction: alternate-reverse` on an infinite animation means:

A. It plays backward on odd iterations and forward on even iterations
B. It plays forward on odd and backward on even (same as alternate)
C. It plays backward on every iteration
D. It plays forward and simultaneously backward on two separate elements

---

### 48. The Lottie Web player's `animation.playSegments([10, 50], true)` call plays:

A. Frames 10 through 50 of the animation, ignoring all other frames
B. The animation from 10% to 50% of the total duration
C. 10 segments, each 50 frames long
D. The animation from frame 50 to frame 10 (reverse)

---

### 49. In Spine, the "Path Constraint" is used for:

A. IK solving on arm and leg bone chains
B. Constraining bones to move along a defined curve path (tentacles, tails)
C. Defining the draw order path for layered slots
D. Constraining a bone's rotation to follow a circular path

---

### 50. For a mobile Spine game with 50 simultaneous animated characters, the most critical performance optimization is:

A. Reducing track count from 3 to 1 per skeleton
B. Using SkeletonGraphic instead of SkeletonAnimation
C. Limiting bone influences to 2 per vertex AND batching skeletons sharing the same atlas
D. Using the binary .skel export format instead of JSON

---

### 51. In Unity's Animator, the transition with the HIGHEST default priority from an AnyState is:

A. The transition at the bottom of the transition list
B. The transition with the longest blend time
C. The transition at the top of the transition list
D. The transition with Has Exit Time enabled

---

### 52. A Unity 2D Blend Tree uses which parameter axes type most appropriate for 8-directional locomotion?

A. Simple Directional
B. 1D (one speed axis)
C. Freeform Directional
D. Freeform Cartesian

---

### 53. "Inertialization" blending in Unreal Engine improves on standard crossfade blending by:

A. Reducing blend time to zero
B. Preserving the animation's velocity at the blend start for smoother transitions
C. Allowing blending between skeletons with different bone counts
D. Automatically setting blend time based on movement speed

---

### 54. In the Spine-Unity runtime, `skeletonAnim.AnimationState.SetAnimation(0, "walk", true)` sets:

A. Track 0 to play the "walk" animation once and stop
B. Track 0 to play the "walk" animation looping (third argument = loop)
C. Track 0 to blend to "walk" from the current animation over 0.3 seconds
D. Track 0 to play "walk" on all characters sharing this SkeletonAnimation

---

### 55. GSAP's `back.out(1.7)` ease is characterized by:

A. A constant-speed animation that accelerates at the end
B. An overshoot, the element goes slightly past its target then settles back
C. A bouncy spring effect that oscillates multiple times
D. A step function with 1.7 discrete steps

---

### 56. The CSS Compositor stage handles which property animations natively without triggering Layout or Paint?

A. `background-color` and `border-radius`
B. `transform` and `opacity`
C. `width` and `height`
D. `margin` and `padding`

---

### 57. WCAG 2.1 guideline 2.3.1 (AA level) applies to:

A. Providing text alternatives for motion-only content
B. Content that flashes more than 3 times per second (seizure risk)
C. Providing controls to pause or hide motion that lasts more than 5 seconds
D. Ensuring motion is not the only means of conveying information

---

### 58. Unity VFX Graph's "Output Particle" context defines:

A. Spawn rate and burst count
B. Starting position and velocity
C. Per-frame forces and drag
D. How particles are rendered (billboard, mesh, strip, line)

---

### 59. In the context of game VFX design, "overdraw" refers to:

A. Drawing more particles than the GPU can handle per frame
B. Rendering the same screen pixel multiple times in one frame due to overlapping transparent particles
C. An excessive particle count that exceeds the system's LOD limit
D. Drawing particles outside the camera frustum

---

### 60. A senior motion designer at a tech company (e.g., Stripe, Linear) needs to implement a scroll-triggered marketing page with complex GSAP timelines, staggered card animations, and a scroll-scrubbed hero section. After completing this course, which combination of skills covers this project entirely?

A. Unity VFX Graph + Unreal Niagara + Spine 2D
B. Module 6 (GSAP ScrollTrigger, Timeline, Flip) + Module 7 (CSS performance, will-change, prefers-reduced-motion)
C. Module 5 (State Machines) + Module 4 (Spine 2D) + Module 7 (Lottie)
D. Framer Motion + Unity Timeline + Spine-Unity runtime

---

## 🎯 Answer Key (No Cheating!)

```
1.  B — 1–3ms is the typical animation system budget within the 16.67ms frame
2.  B — Game feel: Input, Response, Context (Steve Swink)
3.  B — Triggers reset after one transition; Bools persist
4.  B — Override OnAnimatorMove() to apply root position to NavMeshAgent
5.  B — Weight 0.0 = layer has no visual effect; base layer controls fully
6.  B — Humanoid rig + avatars enables clip retargeting between bipeds
7.  D — AnimGraph uses States, Blend Spaces, IK nodes, not Spawn/Initialize contexts (those are VFX Graph)
8.  B — Event Graph: sets variables by reading the owning pawn
9.  B — Valorant: silhouette clarity for competitive reading at distance
10. B — Slot = AnimGraph location where Montage overrides base Animation Blueprint
11. B — Spine is made by Esoteric Software
12. C — Bounding Box attachment for hit detection/collision
13. B — Dead Cells: custom optimized C runtime + low bone count (~15–25)
14. C — Track 1 overlays on Track 0 based on alpha and mix settings
15. C — 1024×1024 is the recommended mobile Spine atlas page size
16. B — Responsiveness: transition latency, blend duration, interrupt conditions
17. B — Trigger auto-resets after one use; prevents AnyState transition loops
18. C — Current State interrupt: dodge fires immediately from any source state
19. B — Normalize both 2D Blend Tree axes to same range
20. B — Additive = delta from reference; override = full pose
21. B — top/left triggers layout recalculation every frame
22. B — '-=0.2': tween starts 0.2s before end of previous (0.2s overlap)
23. B — scrub: true ties animation to scroll position
24. B — FLIP: First, Last, Invert, Play
25. C — AnimatePresence: enables exit animations on component unmount
26. B — fill-mode: none (default) → returns to original state after animation
27. B — transform + opacity: Compositor only (no Layout or Paint)
28. C — Lottie: Airbnb's Brandon Withrow created it for their mobile app
29. C — AE 3D layers with 3D camera are NOT exportable to Lottie
30. B — Rive: state machine responds to hover/click at runtime
31. B — Negative delay: animation starts partway through as if already playing
32. B — steps(8, start): 8 discrete jumps; sprite sheet animation
33. B — VFX Graph: GPU via compute shaders
34. C — VFX Graph NOT supported on Built-in Render Pipeline
35. B — Dissolve: noise texture sampled → Step/Smoothstep → Alpha clip
36. B — Hologram: sine wave scan lines + Fresnel rim + time flicker
37. A — Juice makes games more satisfying without changing core mechanics
38. B — Hades hit stop: 4–8 frames
39. B — First read: VFX communicates archetype before damage numbers visible
40. B — Perlin noise: spatial coherence = directional shake, not buzzing
41. B — Squash compresses the impact axis, expands perpendicular axes
42. B — Simulation Stages: custom GPU compute shader passes on particle data
43. B — Shader Graph compiles to HLSL → native GPU shaders
44. B — High contrast/large particles for top-down camera distance readability
45. B — stagger: sequential delay between each element's animation start
46. C — AnimatePresence with motion.li items having key + exit props
47. A — alternate-reverse: backward on odd, forward on even iterations
48. A — playSegments([10, 50], true): plays frames 10–50
49. B — Path Constraint: bones constrained to move along a defined curve
50. C — 2-bone influence limit + shared atlas batching for mobile Spine
51. C — AnyState: highest priority = top of transition list
52. C — Freeform Directional for 8-directional locomotion (motion capture)
53. B — Inertialization preserves animation velocity at blend start → no pop
54. B — SetAnimation(0, "walk", true): Track 0, loop=true
55. B — back.out(1.7): overshoot + settle back (spring-like)
56. B — Compositor handles transform and opacity (GPU-safe)
57. B — WCAG 2.3.1 AA: content flashing >3× per second (seizure risk)
58. D — Output Particle: defines render type (billboard, mesh, strip, line)
59. B — Overdraw: same pixel rendered multiple times by overlapping transparent particles
60. B — Module 6 (GSAP ScrollTrigger, Timeline, Flip) + Module 7 (CSS, performance, accessibility)
```
