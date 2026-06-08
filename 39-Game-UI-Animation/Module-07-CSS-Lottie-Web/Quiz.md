---
title: "Module 7 Quiz: CSS Animation, Lottie & Rive"
---

# 🧪 Module 7 Quiz: CSS Animation, Lottie & Rive

> 24 questions. Answer all before checking the key.

---

### Q1. The CSS `animation-fill-mode: forwards` property causes the element to:

A. Return to its original state before the animation starts
B. Hold the state of the final keyframe after the animation ends
C. Apply the first keyframe values during the animation delay
D. Play the animation in reverse after it completes

---

### Q2. Which CSS `animation-fill-mode` value applies BOTH the "backwards" and "forwards" behaviors?

A. full
B. persistent
C. both
D. all

---

### Q3. A CSS animation that loops indefinitely uses which `animation-iteration-count` value?

A. `loop`
B. `0`
C. `forever`
D. `infinite`

---

### Q4. Animating `top: 100px` in CSS triggers which browser rendering stage?

A. Composite only, it's a GPU-safe animation
B. Paint only, no layout recalculation
C. Layout recalculation, a slow operation that should be avoided
D. None, CSS cannot animate the top property

---

### Q5. The `will-change: transform` CSS property is used to:

A. Tell the browser that this element will never change, improving caching
B. Promote the element to a GPU compositor layer before animation, reducing paint cost
C. Apply a CSS transform at the time the property is defined
D. Disable CSS transitions on the element during animation

---

### Q6. Lottie was created by Airbnb to solve which problem?

A. Enabling game-style physics in web browsers
B. Exporting complex After Effects animations as small, scalable, programmable files for mobile and web
C. Allowing CSS animations to be edited visually without code
D. Replacing WebGL for hardware-accelerated UI rendering

---

### Q7. The best practice maximum file size for a Lottie animation in web production is:

A. 200KB
B. 100KB
C. 50KB
D. 10KB

---

### Q8. The Bodymovin plugin for After Effects is used to:

A. Apply motion blur to Lottie animations during playback
B. Export After Effects compositions as Lottie JSON format
C. Import Rive animations into After Effects for editing
D. Reduce AE project file size by removing unused assets

---

### Q9. Which Lottie Web player `renderer` option provides the best visual quality and is most accessible?

A. canvas
B. html
C. webgl
D. svg

---

### Q10. In Rive, what is the key advantage over Lottie for interactive animations?

A. Rive files are always smaller than Lottie files
B. Rive has a built-in state machine that responds to JavaScript inputs at runtime
C. Rive supports After Effects export natively
D. Rive renders at higher DPI than Lottie on mobile devices

---

### Q11. The `prefers-reduced-motion: reduce` media query responds to:

A. Browser performance mode settings
B. The "Reduce Motion" setting in the operating system's accessibility preferences
C. The user's internet connection speed
D. The device's refresh rate

---

### Q12. According to WCAG guidelines, which level requires that users be able to disable motion that lasts more than 5 seconds or repeats?

A. A (minimum)
B. AA (standard)
C. AAA (enhanced)
D. Section 508 (US federal only)

---

### Q13. A CSS animation with `animation-direction: alternate` will:

A. Play the animation in two directions simultaneously on two elements
B. Play the animation forward on odd iterations and backward on even iterations
C. Alternate between two different @keyframes definitions
D. Apply the animation to alternating child elements in a list

---

### Q14. Which CSS property allows negative values for `animation-delay`?

A. No, negative delays are not valid CSS
B. Yes, a negative delay starts the animation partway through, as if it had already been playing
C. Yes, a negative delay plays the animation in reverse during the delay period
D. Yes, a negative delay causes the animation to play at double speed to catch up

---

### Q15. The `animation-play-state: paused` CSS property can be set via JavaScript to:

A. Reset the animation to frame 0
B. Pause the animation at its current frame, resumable by setting it to 'running'
C. Permanently stop the animation
D. Play the animation in slow motion at 0.5× speed

---

### Q16. In the Lottie Web player API, `animation.goToAndStop(50, true)` means:

A. Go to 50 seconds and stop
B. Go to frame 50 and stop (the `true` parameter specifies frame units vs milliseconds)
C. Skip 50 frames forward and stop
D. Go to 50% of the animation duration and stop

---

### Q17. Which of the following is NOT a supported feature when exporting from After Effects to Lottie via Bodymovin?

A. Shape layers and solid colors
B. Vector path animations
C. AE 3D layers (z-depth, 3D camera)
D. Text content with font embedding

---

### Q18. Which CSS `animation-timing-function` value is best for creating a sprite-sheet animation where each frame should jump instantly (no interpolation)?

A. `ease-in`
B. `linear`
C. `steps(8, start)`, where 8 is the number of frames
D. `ease-step`

---

### Q19. In the Rive JS runtime, how do you trigger a state machine transition driven by a "Boolean" input named "IsHovered"?

A. `riveInstance.trigger('IsHovered')`
B. `inputs.find(i => i.name === 'IsHovered').value = true`
C. `riveInstance.setState('IsHovered', true)`
D. `riveInstance.fire('IsHovered')`

---

### Q20. Over-using `will-change: transform` on many elements simultaneously can:

A. Cause CSS transitions to stop working on those elements
B. Consume excess GPU memory, potentially degrading overall rendering performance
C. Break CSS animations with `animation-fill-mode: both`
D. Prevent the browser from applying hardware acceleration

---

### Q21. The Lottie optimizer reduces file size primarily by:

A. Converting SVG shapes to PNG sprites
B. Reducing keyframe precision (lossy) and removing redundant animation data
C. Re-encoding the JSON as binary CBOR format
D. Removing animation event markers and expressions

---

### Q22. CSS animation's `animation-direction: reverse` causes:

A. The animation to play from the last keyframe to the first keyframe
B. The animation to alternate direction on repeat
C. The element to move in the opposite physical direction (mirror)
D. The animation to play at negative speed (backward in real time)

---

### Q23. A web developer is implementing a loading animation. The animation is a Lottie file at 85KB. What should they do before shipping?

A. Nothing, 85KB is within the acceptable range for production
B. Run it through the LottieFiles optimizer to target under 50KB, then re-test visual quality
C. Convert it to a CSS animation to eliminate the Lottie runtime dependency
D. Use the canvas renderer instead of svg to reduce file size

---

### Q24. For a React application, which tool is BEST for an animated icon button that responds to hover and click states with a state machine?

A. Lottie with multiple JSON files, one per state
B. CSS animations with three separate @keyframes (hover, click, default)
C. Rive, using its state machine with Boolean inputs connected to React event handlers
D. GSAP with a Timeline that plays different segments based on event type

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  B, forwards: holds final keyframe state after animation ends
Q2:  C, 'both' applies backwards behavior (delay) + forwards behavior (after)
Q3:  D, 'infinite' for endless looping
Q4:  C, top/left trigger layout recalculation (expensive)
Q5:  B, will-change: transform promotes to GPU compositor layer
Q6:  B, Lottie solves the AE animation → mobile/web problem (size + scalability)
Q7:  C, 50KB is the LottieFiles best practice maximum for web production
Q8:  B, Bodymovin exports AE compositions as Lottie JSON
Q9:  D, SVG renderer: best quality, scalable, accessible (DOM-based)
Q10: B, Rive has a real-time state machine that responds to runtime inputs
Q11: B, Responds to OS-level "Reduce Motion" accessibility setting
Q12: C, WCAG 2.1 guideline 2.3.3 is AAA level
Q13: B, alternate: plays forward odd iterations, backward even iterations
Q14: B, Negative delay starts the animation partway through (as if already playing)
Q15: B, paused freezes at current frame; 'running' resumes it
Q16: B, goToAndStop(50, true): go to frame 50 (true = frame units) and stop
Q17: C, AE 3D layers (z-depth, 3D camera) are NOT supported in Lottie export
Q18: C, steps(8, start): 8 discrete steps, instant frame jumps (sprite sheet)
Q19: B, Boolean input: inputs.find(i => i.name === 'IsHovered').value = true
Q20: B, Too many will-change elements consume excess GPU memory
Q21: B, Optimizer reduces keyframe precision and removes redundant data (lossy)
Q22: A, reverse: plays from last keyframe to first keyframe
Q23: B, Run through LottieFiles optimizer to target <50KB, verify quality
Q24: C, Rive with state machine + Boolean inputs for interactive icon button
```
