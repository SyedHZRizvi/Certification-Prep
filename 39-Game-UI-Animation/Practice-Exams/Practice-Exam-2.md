---
title: "Practice Exam 2: Game & UI Animation (Modules 5–7)"
---

# 🧪 Practice Exam 2: Game & UI Animation

**Scope:** Modules 5–7 (State Machines & Blend Trees, UI Animation/GSAP, CSS/Lottie/Rive)
**Length:** 30 questions · 45 minutes
**When to take:** After completing Modules 5–7

---

### 1. A "mushy" feeling walk-to-run transition is MOST likely caused by:

A. Too low a keyframe count in the run animation clip
B. Too long a blend duration for the transition
C. Using a Float parameter instead of a Trigger for the transition condition
D. The Blend Tree axes being normalized to different scales

---

### 2. In Unity's Animator, "Interruption Source: Current State" allows:

A. No transitions to interrupt the current blend
B. Transitions from the destination state to interrupt the current blend
C. Transitions from the source state to interrupt the current blend
D. Only AnyState transitions to interrupt the current blend

---

### 3. "Coyote Time" in animation state machine design refers to:

A. A slow blend time for the fall animation that delays the transition
B. A grace window after walking off a ledge during which the player can jump and the animation stays in an edge-peek state
C. An animation that plays when the character falls from a height greater than 10 meters
D. A transition from run to idle that completes before fall detection

---

### 4. An additive layer blend mode requires clips authored as:

A. Full-pose clips with all bones keyframed
B. Deltas from a reference pose (not the full pose)
C. Root Motion clips with world position baked
D. Clips captured from motion capture at real-world speed

---

### 5. An AnyState → Death transition may loop if:

A. The Death animation uses Root Motion
B. The trigger or condition that fires the AnyState transition remains true while the Death state is active
C. The Death animation has Has Exit Time enabled
D. The Animator layer is set to Override mode

---

### 6. In GSAP, `gsap.from('.card', { y: 30, opacity: 0, duration: 0.5 })` animates:

A. The element from its current position to y=30 and opacity=0
B. The element from y=30 and opacity=0 to its current CSS-defined position
C. The element from y=0 and opacity=1 to y=30 and opacity=0
D. The element backward through its previous keyframe states

---

### 7. The GSAP ease `'linear'` is BEST used for:

A. Modal dialog entrances
B. Button hover state transitions
C. Progress bars and clock hands requiring constant speed
D. Card entrance animations with stagger

---

### 8. In GSAP's ScrollTrigger, `scrub: true` means:

A. The animation plays at 2× speed during scrolling
B. The animation progress is directly tied to the scroll position
C. ScrollTrigger removes the element when the user scrolls past it
D. The animation plays in reverse on scroll-up

---

### 9. GSAP's Flip plugin implements the FLIP technique. "FLIP" stands for:

A. Fast Layout Interpolation Protocol
B. First, Last, Invert, Play
C. Forward, Leap, Interpolate, Position
D. Flex Layout Inversion Point

---

### 10. Animating `left: 200px` in CSS or GSAP instead of `transform: translateX(200px)` causes:

A. A GPU overdraw issue but no layout impact
B. Layout recalculation on every frame, which is expensive and causes dropped frames
C. The animation to be batched differently by the GPU compositor
D. The browser to use the CSS Paint API instead of the compositor

---

### 11. The CSS `will-change: transform` property should be:

A. Applied to all animating elements globally in the stylesheet
B. Applied only to elements that will definitely animate, and removed after animation ends for dynamic cases
C. Applied only in Firefox and Safari since Chrome handles it automatically
D. Applied at the same time as the animation starts, not before

---

### 12. In CSS, `animation-fill-mode: forwards` keeps the element:

A. In its pre-animation state during the `animation-delay` period
B. In the state of the final keyframe after the animation ends
C. Playing the animation indefinitely (alternative to `infinite`)
D. In its original CSS state regardless of the animation result

---

### 13. The CSS `animation-direction: alternate` causes a looping animation to:

A. Play simultaneously in two directions on two sibling elements
B. Play forward on odd iterations and backward on even iterations
C. Alternate between two different @keyframes definitions
D. Apply to alternating elements in a CSS list

---

### 14. LottieFiles was created by Airbnb to solve which problem?

A. Enabling interactive animation with state machines in the browser
B. Replacing GIF files in email marketing
C. Shipping complex After Effects animations as small, scalable, programmable files for mobile and web
D. Creating CSS animations without writing code

---

### 15. The recommended maximum production file size for a Lottie web animation is:

A. 200KB
B. 100KB
C. 50KB
D. 10KB

---

### 16. The Bodymovin plugin for After Effects is used to:

A. Reduce the AE project file size by removing unused compositions
B. Apply motion blur to exported Lottie animations
C. Export After Effects compositions as Lottie JSON files
D. Import Rive files into After Effects for editing

---

### 17. Rive differs from Lottie primarily because:

A. Rive files are always smaller than Lottie files
B. Rive has a built-in state machine that responds to JavaScript inputs at runtime
C. Rive supports After Effects as a source tool
D. Rive renders at higher resolution on Retina displays

---

### 18. The CSS `prefers-reduced-motion: reduce` media query responds to:

A. Low browser performance mode enabled by developer tools
B. The "Reduce Motion" setting in the operating system's accessibility preferences
C. Network speed below a threshold that prevents smooth animation
D. The device's refresh rate being below 60Hz

---

### 19. Which WCAG level requires providing users the ability to disable motion that lasts more than 5 seconds or repeats indefinitely?

A. A (minimum accessibility)
B. AA (standard)
C. AAA (enhanced)
D. Section 508 (US federal)

---

### 20. In Figma Smart Animate, for a layer to be automatically tweened between Frame A and Frame B, it must:

A. Be a component instance (not a frame or group)
B. Have the same name in both frames
C. Use the same fill color in both frames
D. Be inside an auto-layout frame in both frames

---

### 21. For a React application's modal that should animate in on mount and out on unmount, the BEST Framer Motion approach is:

A. `useEffect` with `gsap.fromTo()` on mount and unmount
B. `motion.div` with `initial`, `animate`, `exit` wrapped in `AnimatePresence`
C. CSS transition with class manipulation via `classList.toggle`
D. Framer Motion's `useAnimation()` hook with manual `start()` and `stop()` calls

---

### 22. A stagger in GSAP (e.g., `stagger: 0.08`) applied to `.card` elements:

A. Delays the entire animation group by 0.08 seconds
B. Applies a delay of 80ms between each element's animation start in the selection
C. Runs all elements 8% faster than the specified duration
D. Reverses the animation order of every 8th element

---

### 23. An element animated with `gsap.from('.title', { y: 40, opacity: 0 })` after the page loads does NOT stay visible. The MOST likely cause is:

A. GSAP's `from()` method plays the animation in reverse
B. The animation duration is too long for the browser to compute
C. `animation-fill-mode` is not set — apply `fill: 'both'` in the GSAP options
D. The element's z-index is too low

---

### 24. In a GSAP Timeline, `.from('.el', { y: 20 }, '-=0.15')` means:

A. The animation starts 0.15 seconds before the timeline begins
B. The animation starts 0.15 seconds before the end of the previous tween (0.15s overlap)
C. The animation plays at 0.15× normal speed
D. The animation starts at the 0.15 second mark of the overall timeline

---

### 25. The Lottie Web player's `svg` renderer is preferred over `canvas` for which reason?

A. SVG is faster for complex animations with thousands of path points
B. SVG is DOM-based, making it accessible and infinitely scalable on high-DPI displays
C. SVG renders at lower CPU cost than canvas on mobile devices
D. SVG supports interactive hit targets (mouseenter, click) that canvas cannot

---

### 26. For a locomotion blend tree, the "blend position lerp speed" controls:

A. The playback speed of the animation clips within the Blend Tree
B. How quickly the blend sample position moves toward the target parameter value (smoothing)
C. The maximum rate of change for the Speed parameter before clipping
D. The crossfade duration when transitioning from the Blend Tree state to another state

---

### 27. In Unity's Animator, a Sub-State Machine is used to:

A. Run a secondary Animator Controller in parallel with the main one
B. Group related states inside a nested state machine for organizational clarity
C. Create a Blend Tree that blends between other Blend Trees
D. Define which bones a specific group of states can affect

---

### 28. Framer Motion's `layout` prop on a `motion.div` enables:

A. The component to use CSS grid or flexbox layout automatically
B. Automatic animation when the element's size or position changes due to DOM changes
C. The element to be used as a layout provider for child motion components
D. GPU-composited layout recalculation via the CSS Layout Worklet

---

### 29. In CSS animation, animating `border-radius` falls into which performance category?

A. GPU-safe (compositor only) — equivalent to opacity
B. Requires Paint — may cause repaint on complex elements; use sparingly
C. Requires Layout — as expensive as animating width/height
D. Unsupported — border-radius cannot be animated with CSS animations

---

### 30. In Rive, a "Trigger" input type is used to:

A. Toggle a boolean state between true and false
B. Fire a one-shot event that the state machine responds to once
C. Drive a continuous blend between animation clips
D. Start and stop the Rive animation renderer

---

## 🎯 Answer Key (No Cheating!)

```
1.  B — Mushy transition = too-long blend duration
2.  C — Current State: source state transitions can interrupt
3.  B — Coyote time: grace window after ledge for jump + edge-peek animation
4.  B — Additive clips = deltas from reference pose
5.  B — Loop if trigger condition stays true while Death state is active
6.  B — gsap.from(): animates from specified values TO current CSS state
7.  C — linear for progress bars and constant-speed animations
8.  B — scrub: true ties animation progress to scroll position
9.  B — FLIP: First, Last, Invert, Play
10. B — top/left triggers layout recalculation each frame
11. B — will-change: applied only to definitely-animating elements; remove after
12. B — forwards: holds final keyframe state after animation ends
13. B — alternate: forward on odd, backward on even iterations
14. C — LottieFiles: AE animations as small, scalable JSON for mobile/web
15. C — 50KB is the production target for Lottie web animations
16. C — Bodymovin exports AE compositions as Lottie JSON
17. B — Rive has a real-time state machine for interactive animations
18. B — Responds to OS "Reduce Motion" accessibility setting
19. C — WCAG 2.3.3 is AAA level (disable motion > 5s or repeating)
20. B — Same layer name in both frames is required for Smart Animate tween
21. B — motion.div with initial/animate/exit wrapped in AnimatePresence
22. B — stagger: 0.08 → 80ms delay between each element's animation start
23. C — GSAP from() needs fill: 'both' (or forwards) to hold final state
24. B — '-=0.15' creates 0.15s overlap with end of previous tween
25. B — SVG: DOM-based, accessible, infinitely scalable on all DPIs
26. B — Blend position lerp speed: smoothing rate of sample position change
27. B — Sub-State Machine: groups related states for organizational clarity
28. B — layout prop: auto-animates when element size/position changes
29. B — border-radius: Paint stage (repaint); not as expensive as layout
30. B — Trigger input: one-shot event that state machine responds to once
```
