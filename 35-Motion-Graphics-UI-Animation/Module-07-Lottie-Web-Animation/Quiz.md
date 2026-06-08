---
permalink: /35-Motion-Graphics-UI-Animation/Module-07-Lottie-Web-Animation/Quiz/
title: "Module 7 Quiz: Lottie & Web Animation"
---

# 🧠 Module 7 Quiz, Lottie & Web Animation

### Q1.
What company created Lottie, and what problem were they solving?

A. Adobe, to export AE animations directly to the web  
B. Airbnb, to ship high-quality animations on mobile without the quality/performance trade-offs of GIFs and MP4 video  
C. Google, to replace CSS animations in Android apps  
D. LottieFiles, to create a standard format for motion design  

---

### Q2.
Lottie animations are exported from After Effects as which file format?

A. `.svg`  
B. `.html`  
C. `.json`  
D. `.mp4`  

---

### Q3.
The After Effects plugin used to export Lottie animations is called:

A. AEJuice  
B. Overlord  
C. Bodymovin (now LottieFiles for After Effects)  
D. Motion Bro  

---

### Q4.
Which of the following AE features is NOT supported by Lottie?

A. Shape layers  
B. Trim Paths  
C. Masks  
D. 3D camera animations  

---

### Q5.
In GSAP ScrollTrigger, the `scrub: true` property means:

A. The animation plays at double speed  
B. The animation progress is tied to scroll position, scrubbing back and forth as the user scrolls  
C. The animation is cleaned up (scrubbed) when the trigger leaves the viewport  
D. ScrollTrigger refreshes its calculations on every scroll event  

---

### Q6.
What is the correct GSAP ScrollTrigger `start` value syntax?

A. A pixel number (`start: 500`)  
B. Two positions separated by a space: trigger-element-position + viewport-position (`"top center"`)  
C. A percentage of scroll completion (`"50%"`)  
D. A time in seconds  

---

### Q7.
Framer Motion's `whileHover` property applies which animation when the user hovers over an element?

A. A CSS hover pseudo-class transition  
B. A Framer Motion variant animation that plays while the element is being hovered  
C. A GSAP hover event handler  
D. A click animation that triggers on mouse-over  

---

### Q8.
React Spring's animation model is fundamentally different from GSAP because it uses:

A. CSS custom properties instead of inline styles  
B. Physics simulation (mass, tension, friction) instead of duration-based keyframes  
C. WebGL rendering instead of DOM manipulation  
D. Server-side rendering for all animations  

---

### Q9.
When should you use GSAP instead of Framer Motion for React animations?

A. When you need hover and tap interactions on buttons  
B. When you need simple fade-in animations  
C. When you need complex scroll-driven sequences, precise timing control, or non-React JavaScript contexts  
D. When the animation involves spring physics  

---

### Q10.
The Web Animations API (WAAPI) is:

A. A third-party library similar to GSAP  
B. A native browser API for creating and controlling animations without any external library  
C. An extension to CSS animations  
D. A Figma plugin for web animation export  

---

### Q11.
The most common cause of blank or incorrect Lottie rendering is:

A. The JSON file is too large  
B. The AE animation contains unsupported features (raster effects, 3D cameras, certain expressions)  
C. The Bodymovin version is outdated  
D. The animation contains more than 60 frames  

---

### Q12.
In Framer Motion, the `exit` property defines animation that plays:

A. When the user clicks outside the component  
B. When the component is removed from the React tree (unmounted)  
C. When the component reaches the end of its animation  
D. When the browser tab becomes inactive  

---

### Q13.
Which GSAP method creates a grouped sequence where animations play one after another?

A. `gsap.to()` with stagger  
B. `gsap.sequence()`  
C. `gsap.timeline()` with `.from()` and `.to()` chained on it  
D. `gsap.chain()`  

---

### Q14.
The CSS property `animation: float 3s ease-in-out infinite`, what does `infinite` specify?

A. The animation plays for an indefinite duration (very long)  
B. The animation repeats indefinitely, there is no end  
C. The animation's duration is flexible  
D. The animation uses infinite easing  

---

### Q15.
In the Lottie `loadAnimation()` configuration, what does `renderer: 'svg'` specify?

A. The animation should render as a GIF  
B. The animation uses SVG rendering (vs Canvas or HTML)  
C. The animation imports from an SVG file  
D. The animation uses hardware acceleration  

---

### Q16.
Which of the following is the correct way to make a Lottie animation play only frames 20–80, then loop?

A. `animation.loop = [20, 80]`  
B. `animation.playSegments([20, 80], true)`  
C. `animation.setStart(20); animation.setEnd(80);`  
D. `animation.setFrames(20, 80)`  

---

### Q17.
CSS Custom Properties (`--animation-duration`) in animations are useful because:

A. They allow animations to run without JavaScript  
B. They centralize animation timing values so they can be changed in one place and affect all animations using that variable  
C. They are faster than regular CSS properties  
D. They enable TypeScript type checking for animation values  

---

### Q18.
Framer Motion's `transition={{ type: 'spring', stiffness: 300, damping: 30 }}` creates animation that:

A. Uses a bezier curve with 300ms duration and 30% overshoot  
B. Uses a physics-based spring where 300 stiffness creates a snappy response and 30 damping limits oscillation  
C. Waits 300ms then plays a 30ms animation  
D. Uses linear easing with 300 frames and 30fps playback  

---

### Q19.
GSAP is preferred over CSS animations for complex sequences because:

A. GSAP supports more CSS properties  
B. GSAP timelines allow precise sequencing, reversing, seeking, and speed control that CSS animations don't provide  
C. GSAP renders faster in all browsers  
D. CSS animations are deprecated in modern browsers  

---

### Q20.
A Lottie animation that works in the LottieFiles web previewer but appears blank on mobile is most likely caused by:

A. The animation file is too large for mobile  
B. Mobile browsers don't support Lottie  
C. The Lottie player version on mobile doesn't support a specific feature used in the animation  
D. The animation requires WebGL which is not available on mobile  

---

### Q21.
In the Web Animations API, `fill: 'forwards'` means:

A. The animation plays forward (not backward)  
B. The element retains the animation's final state after it completes  
C. The element is pre-filled with the final state before the animation plays  
D. The animation fills the entire container  

---

### Q22.
Which library uses a `useSpring` hook and does NOT use duration-based animation?

A. GSAP  
B. Framer Motion  
C. React Spring  
D. Lottie React  

---

### Q23.
The primary advantage of Lottie over MP4 video for web animations is:

A. Lottie files are always smaller than MP4  
B. Lottie supports audio while MP4 does not  
C. Lottie is resolution-independent (scales to any size), is programmatically controllable, and supports interactivity  
D. Lottie renders faster than video on all devices  

---

### Q24.
In GSAP ScrollTrigger, `pin: true` causes:

A. The animation to be pinned to the top-left corner of the screen  
B. The trigger element to be fixed in place while the animation plays out during scroll  
C. The scroll speed to be reduced to create a parallax effect  
D. The trigger to fire only once even if the user scrolls back  

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  B, Airbnb created Lottie to solve the quality/performance/control trade-offs of using GIFs or video for mobile animations. The framework renders AE JSON natively on device.

Q2:  C, Lottie exports to .json format (the "Bodymovin JSON" format, sometimes called "Lottie JSON").

Q3:  C, Bodymovin (now branded as "LottieFiles for After Effects") is the AE plugin that renders compositions as Lottie JSON.

Q4:  D, 3D camera animations are not supported by Lottie. Shape layers, Trim Paths, and masks are all supported.

Q5:  B, scrub: true links animation progress directly to scroll position. Scroll forward = animation plays forward. Scroll backward = animation reverses. It "scrubs" the playhead.

Q6:  B, GSAP ScrollTrigger start syntax: two positions separated by a space. First = where on the trigger element; second = where on the viewport. E.g., "top center" = when the top of the trigger hits the center of the viewport.

Q7:  B, whileHover applies a Framer Motion animation variant that plays while the element is being hovered. It automatically reverses when hover ends.

Q8:  B, React Spring uses physics simulation (mass, tension/stiffness, friction) rather than duration + easing. The animation settles when the spring reaches equilibrium.

Q9:  C, GSAP is the choice for complex scroll sequences, precise timing control, and non-React (vanilla JS) contexts. Framer Motion is React-specific and optimized for UI state animations.

Q10: B, The Web Animations API is a native browser API, no library required. It provides timeline-based control similar to GSAP but built into the browser.

Q11: B, Unsupported AE features (raster effects, 3D cameras, certain expressions) cause blank or broken Lottie output. Always build with shape layers and test features before export.

Q12: B, Framer Motion's exit property animates when the component unmounts from the React tree. Requires an AnimatePresence wrapper to work.

Q13: C, gsap.timeline() creates a grouped sequence. Chain .from(), .to(), and .fromTo() on the timeline to play animations in sequence.

Q14: B, `infinite` as the iteration-count value causes the animation to repeat indefinitely with no endpoint.

Q15: B, renderer: 'svg' sets SVG as the rendering backend (vs 'canvas' or 'html'). SVG is most commonly used for Lottie on web.

Q16: B, animation.playSegments([startFrame, endFrame], forceFlag) plays specified frame range. `true` forces the immediate jump to the start of the segment.

Q17: B, CSS Custom Properties centralize values: change --animation-duration in one place and all elements using it update automatically. Ideal for design-token-based animation systems.

Q18: B, Spring stiffness 300 = snappy/quick response; damping 30 = moderate oscillation control. Higher stiffness = faster; higher damping = less bounce.

Q19: B, GSAP timelines support reversing, seeking to any time, variable playback speed, and complex sequencing. CSS animations are declarative and don't offer runtime timeline control.

Q20: C, Mobile Lottie player version mismatches can cause features to fail. Test with the same version on mobile as in the web previewer.

Q21: B, fill: 'forwards' keeps the element in its animation's final state after the animation completes. Without this, the element snaps back to its pre-animation state.

Q22: C, React Spring uses useSpring with physics parameters (mass, tension, friction). It's fundamentally duration-free, the spring settles naturally.

Q23: C, Lottie is resolution-independent (SVG-based), supports programmatic control (play/pause/seek/speed), and can respond to user interaction. MP4 is fixed-resolution and cannot be controlled programmatically.

Q24: B, pin: true fixes the trigger element in place (as if position: fixed) while the scroll-driven animation plays out. The element "unpins" when the animation completes.
```
