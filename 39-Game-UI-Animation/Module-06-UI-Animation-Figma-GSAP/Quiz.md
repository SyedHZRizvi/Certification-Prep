---
title: "Module 6 Quiz: UI Animation — Figma, GSAP & Framer Motion"
---

# 🧪 Module 6 Quiz: UI Animation — Figma, GSAP & Framer Motion

> 24 questions. Answer all before checking the key.

---

### Q1. In Figma Smart Animate, which condition must be met for a layer to be automatically tweened between two frames?

A. The layer must be a component with auto-layout enabled
B. The layer must have the same name in both frames
C. The layer must use the same fill color in both frames
D. The layer must be inside a frame with a fixed aspect ratio

---

### Q2. In GSAP, what is the difference between `gsap.to()` and `gsap.from()`?

A. `.to()` animates forward in time; `.from()` animates backward
B. `.to()` animates from current values to target values; `.from()` animates from specified values to current values
C. `.to()` uses ease-out; `.from()` uses ease-in
D. `.to()` works on DOM elements; `.from()` works on SVG elements only

---

### Q3. In GSAP, the ease `'power2.out'` means:

A. The animation starts fast and ends slow (decelerates)
B. The animation starts slow and ends fast (accelerates)
C. The animation has equal speed throughout (linear)
D. The animation overshoots and bounces back

---

### Q4. Which GSAP ease should you use for a progress bar that always moves at constant speed?

A. `'power2.out'`
B. `'back.out(1.7)'`
C. `'linear'`
D. `'elastic.out(1, 0.3)'`

---

### Q5. In GSAP's Timeline API, what does `-=0.2` in the second argument of `.from()` mean?

A. The animation starts 0.2 seconds before the previous animation starts
B. The animation starts 0.2 seconds before the end of the previous animation (0.2s overlap)
C. The animation runs at 0.2× normal speed
D. The animation begins at the 0.2 second mark of the overall timeline

---

### Q6. Which CSS property, when animated, triggers full layout recalculation on every frame?

A. transform
B. opacity
C. top/left
D. will-change

---

### Q7. The correct GSAP approach for moving an element 200px to the right without causing layout recalculation is:

A. `gsap.to('.el', { left: '200px' })`
B. `gsap.to('.el', { marginLeft: '200px' })`
C. `gsap.to('.el', { x: 200 })`
D. `gsap.to('.el', { position: 'absolute', x: 200 })`

---

### Q8. The CSS property `will-change: transform` is used to:

A. Inform the browser to skip layout for that element during transforms
B. Promote the element to a GPU compositor layer before animation starts, reducing repaint cost
C. Force the element to use hardware acceleration permanently, regardless of animation state
D. Apply a GPU-composited transform at the time of property assignment

---

### Q9. GSAP's ScrollTrigger `scrub: true` setting means:

A. The animation plays at double speed during scrolling
B. The animation progress is directly tied to the scroll position (no independent play)
C. ScrollTrigger removes the animation after the user scrolls past the trigger point
D. The animation plays in reverse when the user scrolls upward

---

### Q10. What is the FLIP technique's name derived from?

A. Fast Layout Interpolation Protocol
B. First, Last, Invert, Play
C. Forward, Leap, Interpolate, Position
D. Flex Layout Inversion Point

---

### Q11. GSAP's Flip plugin is BEST used for:

A. Creating logo animations that flip horizontally
B. Animating between different layout states (grid reorder, card expand/collapse) by tracking element positions before and after DOM changes
C. Reversing all animations simultaneously on user interaction
D. Flipping CSS flex/grid direction with a smooth animation

---

### Q12. In Figma Smart Animate, which easing option produces a physically simulated spring effect with natural overshoot?

A. Ease In
B. Ease Out
C. Linear
D. Spring

---

### Q13. In Framer Motion for React, the `AnimatePresence` wrapper is required for:

A. Any component that uses the `animate` prop
B. Animating components when they unmount/exit from the React tree (exit animations)
C. Providing a motion context to child components
D. Enabling scroll-based animations in Framer Motion

---

### Q14. What does the `stagger: 0.06` option in GSAP's `.from()` tween do when targeting multiple elements?

A. Delays the entire animation by 0.06 seconds
B. Adds a 60ms delay between the start of each element's animation in the selection
C. Runs all elements' animations 6% faster
D. Sets the minimum time between two consecutive ScrollTrigger events

---

### Q15. Stripe's homepage gradient animation was primarily built using:

A. CSS `@keyframes` with `animation-fill-mode: forwards`
B. CSS custom property (`@property`) animation
C. GSAP animating SVG linearGradient elements on a requestAnimationFrame loop
D. WebGL vertex shader with Three.js

---

### Q16. In Framer Motion, the `layout` prop on a `motion.div` enables:

A. The component to use CSS grid layout automatically
B. Automatic layout animation when the element's position or size changes due to sibling/parent changes
C. The motion.div to be used as a layout context for child AnimatePresence components
D. GPU-composited layout calculations using the CSS Layout Worklet API

---

### Q17. For a UI modal that should appear with a gentle scale-and-fade entrance, the BEST ease choice is:

A. `elastic.out(1, 0.3)` — springy and bouncy
B. `power2.out` — starts fast, ends slow, feels deliberate
C. `expo.in` — starts very slow, ends very fast, like a swipe
D. `linear` — constant speed, mechanical feel

---

### Q18. What is the correct Figma easing for an exit animation (element leaving the screen)?

A. Ease In (starts slow, ends fast) — the element accelerates out
B. Ease Out (starts fast, ends slow) — the element decelerates as it exits
C. Spring — the element bounces as it leaves
D. Linear — consistent speed conveys professionalism

---

### Q19. In GSAP's ScrollTrigger, the `start: 'top 80%'` setting means:

A. The trigger fires when the top of the viewport is 80% scrolled
B. The trigger fires when the top of the element reaches 80% from the top of the viewport
C. The element starts at 80% opacity and fades in
D. The trigger begins when the user has scrolled 80% of the page

---

### Q20. Which Framer Motion hook is used to read scroll progress and map it to animation values?

A. `useAnimation` + `useEffect`
B. `useScroll` + `useTransform`
C. `useMotionValue` + `useSpring`
D. `useInView` + `useAnimate`

---

### Q21. For a list of 12 cards animating in on page load, the BEST GSAP approach is:

A. Create 12 separate `gsap.from()` calls with manually calculated delays
B. Target all cards with one `gsap.from('.card', { stagger: 0.05 })` call
C. Use a GSAP Timeline with 12 sequential `.from()` calls with no overlap
D. Use ScrollTrigger batch to fire all 12 animations simultaneously

---

### Q22. A developer is animating a dropdown menu's height from 0 to `auto`. Which approach is most reliable with GSAP?

A. Animate `height: 0 → height: 'auto'` directly — GSAP handles auto height
B. Use GSAP's `height: 0` to measure the full height first, then animate from 0 to the measured pixel value
C. Use CSS transition: height 0.3s ease on the element; trigger it by adding a class
D. Animate `max-height: 0 → max-height: 1000px` with ease — GSAP fixes the non-linear timing

---

### Q23. In a motion design system, which practice ensures consistent animation across a product?

A. Using GSAP for all animations, regardless of context
B. Defining motion tokens (duration, easing, stagger values) as CSS custom properties or design tokens, shared across CSS, GSAP, and Framer Motion
C. Documenting each animation separately in a spreadsheet with pixel-by-pixel measurements
D. Using the same animation duration (0.3 seconds) for every transition regardless of element size or distance

---

### Q24. Stripe's design philosophy — using animation to communicate engineering quality before any product features are shown — is an example of what UI motion principle?

A. Animation as distraction (draw attention away from weaknesses)
B. Animation as brand language (motion communicates institutional character before content does)
C. Animation as conversion optimization (more animation = more engagement)
D. Animation as accessibility feature (motion helps users understand the interface faster)

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  B — Matching layer names are required for Smart Animate to tween between frames
Q2:  B — .to() animates to targets; .from() animates FROM specified values to current
Q3:  A — power2.out: starts fast, ends slow (decelerates / ease-out)
Q4:  C — 'linear' for constant-speed progress bars and clock hands
Q5:  B — '-=0.2' creates a 0.2s overlap with the end of the previous animation
Q6:  C — top/left trigger layout recalculation; transform/opacity do not
Q7:  C — gsap.to('.el', { x: 200 }) → CSS translateX (GPU compositing)
Q8:  B — will-change: transform promotes element to GPU compositor layer before animation
Q9:  B — scrub: true ties animation progress directly to scroll position
Q10: B — FLIP = First, Last, Invert, Play (Paul Lewis, Google, 2015)
Q11: B — Flip plugin for animating between different layout states (DOM changes)
Q12: D — Spring easing in Figma produces physically simulated spring with overshoot
Q13: B — AnimatePresence enables exit animations when components unmount
Q14: B — stagger: 0.06 adds 60ms delay between each element's animation start
Q15: C — GSAP animating SVG linearGradient on rAF loop
Q16: B — layout prop enables automatic layout animation when size/position changes
Q17: B — power2.out for modal entrance: deliberate, starts fast, lands gently
Q18: B — Ease Out for exits: element starts fast and slows as it leaves
Q19: B — 'top 80%' = top of element reaches 80% from top of viewport
Q20: B — useScroll + useTransform for scroll-linked animations in Framer Motion
Q21: B — Single gsap.from('.card', { stagger: 0.05 }) for all 12 cards
Q22: B — Measure pixel height first; animate from 0 to measured value (GSAP can't tween 'auto')
Q23: B — Motion tokens as CSS custom properties / design tokens for consistency
Q24: B — Animation as brand language (Stripe communicates quality through motion)
```
