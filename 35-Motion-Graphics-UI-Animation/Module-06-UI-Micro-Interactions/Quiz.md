---
permalink: /35-Motion-Graphics-UI-Animation/Module-06-UI-Micro-Interactions/Quiz/
title: "Module 6 Quiz: UI Micro-Interactions"
---

# 🧠 Module 6 Quiz — UI Micro-Interactions

### Q1.
What is the upper limit of response time that humans perceive as "instant" in UI interactions, as defined by Google's Material Design research?

A. 100ms  
B. 200ms  
C. 300ms  
D. 500ms  

---

### Q2.
In Figma's Smart Animate, what condition must be met for elements to automatically interpolate between frames?

A. Elements must be on the same layer  
B. Elements must have the same name in both frames  
C. Elements must have the same fill color  
D. Elements must be identical groups with no modifications  

---

### Q3.
The FLIP animation technique was created to solve which problem?

A. Making CSS animations work across browsers  
B. Preventing layout-triggering property animations that cause jank; instead only animating GPU-accelerated transforms  
C. Creating smooth frame-by-frame animations without keyframes  
D. Enabling infinite looping without JavaScript  

---

### Q4.
What does FLIP stand for?

A. Forward, Loop, Interpolate, Play  
B. First, Last, Invert, Play  
C. Frame, Layout, Iterate, Position  
D. Fade, Layer, Index, Position  

---

### Q5.
Which CSS media query should be used to respect users with vestibular disorders or motion sensitivity preferences?

A. `@media (no-animation: true)`  
B. `@media (prefer-static: on)`  
C. `@media (prefers-reduced-motion: reduce)`  
D. `@media (animation-safe: false)`  

---

### Q6.
According to the 12 UI animation principles, when should instant (0ms) state changes be preferred over animated transitions?

A. Always — animation adds unnecessary complexity  
B. For decorative elements only  
C. For urgent alerts, error states, and destructive action confirmations  
D. When the user is on a slow network connection  

---

### Q7.
A card on screen scales from 100% to 95% when pressed, then back to 100% on release. This micro-interaction primarily communicates:

A. That the card is selected and will be deleted  
B. Affordance — the card is pressable and responds to touch  
C. That the card is loading new content  
D. That the card has been moved to a new position  

---

### Q8.
Skeleton screens (placeholder loading animations) reduce perceived load time because:

A. They speed up the actual network requests  
B. They provide something to look at while waiting, and show the layout before content arrives — reducing cognitive uncertainty  
C. They compress the content before it loads  
D. They use WebSockets to stream content faster  

---

### Q9.
Linear's published motion spec defines "quick" interactions as:

A. 0–80ms  
B. 80–150ms  
C. 200–300ms  
D. 300–500ms  

---

### Q10.
Notion's motion design philosophy is best characterized as:

A. Bold, expressive motion that reinforces brand identity  
B. Extreme restraint — animation is invisible and serves productivity  
C. Physics-based spring animations throughout the interface  
D. Scroll-driven animations tied to content reveal  

---

### Q11.
In the FLIP technique, the "Invert" step applies a CSS transform to make the element appear to still be in its first position. Which transform property achieves this?

A. `opacity: 0`  
B. `translate()` and `scale()` compensating for the difference between First and Last positions  
C. `display: none` on the element  
D. `z-index: -1` to hide it behind other elements  

---

### Q12.
When multiple elements animate in response to a single user action, which principle governs how their timing should be coordinated?

A. Each element should animate with completely random timing  
B. All elements should animate simultaneously with identical duration  
C. They should share unified timing logic — staggered if appropriate, but not random  
D. The largest element should animate first, then smaller ones simultaneously  

---

### Q13.
The CSS property for a skeleton shimmer effect that makes a gradient appear to travel across a placeholder is:

A. `animation: rotate`  
B. `background-position` animated in a keyframe  
C. `transform: scaleX()`  
D. `filter: brightness()`  

---

### Q14.
Vercel's motion design uses different approaches for dashboard UI vs marketing pages. Which of the following describes their dashboard UI motion?

A. Dramatic, physics-based animations that demonstrate speed metaphorically  
B. Subtle, 150–250ms ease-out entrances for functional state changes  
C. Scroll-triggered reveals with large-scale transformations  
D. No animation — the dashboard is completely static  

---

### Q15.
A spinning loading indicator (spinner) is appropriate for:

A. File uploads where you know the file size and can calculate progress  
B. Determinate operations where progress can be measured  
C. Indeterminate operations where duration is unknown  
D. Operations that complete in under 100ms  

---

### Q16.
Which CSS properties, when animated, trigger expensive browser layout recalculation and should be avoided in high-performance micro-interactions?

A. `transform` and `opacity`  
B. `width`, `height`, `top`, and `left`  
C. `background-color` and `border-color`  
D. `box-shadow` and `border-radius`  

---

### Q17.
In UI animation, "animations should reflect the interface's physics" means:

A. All animations must simulate real-world gravity  
B. The easing curves used throughout the product should share consistent physical logic — no mixing of spring and linear without reason  
C. All animations must use spring physics (not bezier curves)  
D. The animation direction should always follow downward gravity  

---

### Q18.
A dropdown menu in Notion opens with a 200ms fade. This timing choice communicates:

A. That the menu is loading from a server  
B. That the menu is a high-priority action requiring attention  
C. A subtle, non-distracting appearance that doesn't interrupt workflow  
D. That the menu contains many items  

---

### Q19.
Figma Smart Animate does NOT automatically interpolate which of the following properties?

A. Position  
B. Corner radius  
C. Fill color  
D. Font family / typeface change  

---

### Q20.
The principle "actions should be reversible — and animations too" means:

A. Users should always have an undo button  
B. If a panel slides in from the right, it should slide out to the right (not disappear or fade)  
C. All animations should use pingpong looping  
D. The duration of an exit animation should equal the entrance animation  

---

### Q21.
Which loading pattern is most associated with reducing perceived wait time by 20–40% according to Nielsen Norman Group research?

A. Progress bar  
B. Spinner  
C. Blank screen  
D. Skeleton screen  

---

### Q22.
A chevron/arrow icon rotates 180° when a section expands. This is an example of which affordance animation type?

A. Swipeable indication  
B. Expandable/collapsible signaling  
C. Drag affordance  
D. Loading state  

---

### Q23.
The "don't animate for its own sake" principle, applied to a marketing landing page, would suggest:

A. No animations whatsoever on marketing pages  
B. Every animation should serve to communicate the product's value, guide attention, or provide feedback — not to decorate  
C. Marketing pages are exempt from this principle; decoration is acceptable there  
D. Only scroll-driven animations are permitted on marketing pages  

---

### Q24.
Which of the following is the correct Figma prototype connection setup to create a Smart Animate transition on hover?

A. Set Trigger to "On Click", Animation to "Dissolve"  
B. Set Trigger to "Mouse enter" (or "While hovering"), Animation to "Smart Animate"  
C. Set Trigger to "After delay", Animation to "Smart Animate"  
D. Set Trigger to "Drag", Animation to "Smart Animate"  

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  B — 200ms. Google's Material Design spec and HIG research both converge on 200ms as the upper limit of "instant" response perception.

Q2:  B — Smart Animate requires elements to have the same name in both frames. Same-named elements are treated as the same element in two states.

Q3:  B — FLIP avoids layout-triggering property animations (width/height/top/left) by manipulating only GPU-accelerated transforms, preventing jank.

Q4:  B — First, Last, Invert, Play. Record starting state, apply end state to DOM, invert visually with transform, animate transform to zero.

Q5:  C — `@media (prefers-reduced-motion: reduce)` is the correct CSS media query. All production UI code should include this fallback.

Q6:  C — Error states, urgent alerts, and destructive action confirmations should often be instant. Animation introduces delay that can frustrate users in urgent situations.

Q7:  B — Scale-down on press communicates "this is pressable" — the classic affordance signal for touchable/clickable elements.

Q8:  B — Skeleton screens reduce cognitive uncertainty (the user knows the layout) and provide something to look at, making the wait feel shorter. They don't affect actual load speed.

Q9:  B — Linear defines "quick" as 80–150ms. "Comfortable" = 200–300ms. "Deliberate" = 300–500ms.

Q10: B — Notion uses extreme restraint. As a productivity tool, distraction is a cost. Almost no decorative animation; state changes are functional only.

Q11: B — The Invert step uses translate() and scale() to visually place the element back at its First position, even though the DOM has it in the Last position. Then animating to transform: none plays the transition.

Q12: C — Coordinated animation: unified timing logic. Stagger if appropriate, but not random timing across elements responding to the same action.

Q13: B — The shimmer is a gradient whose `background-position` is animated from -200% to 200% (or similar), making it appear to travel across the skeleton shape.

Q14: B — Vercel's dashboard uses subtle, 150–250ms ease-out animations for functional state changes. The dramatic physics-based animations are on the marketing/homepage.

Q15: C — Spinners indicate indeterminate operations (unknown duration). Determinate operations (known progress) use progress bars.

Q16: B — width, height, top, left trigger layout (the most expensive browser operation). transform and opacity are GPU-accelerated and should be used instead.

Q17: B — "Reflects the interface's physics" = consistent physical logic across the product. Mixing spring and linear without design reason creates cognitive dissonance.

Q18: C — A 200ms fade is subtle and non-distracting — it acknowledges the user's action without interrupting their workflow. Notion is a productivity tool; intrusive animation would be a bug.

Q19: D — Smart Animate cannot interpolate font family changes. Position, size, opacity, color, corner radius, and effect properties all interpolate. Typeface changes are instant.

Q20: B — Directional animation should reverse the direction on dismissal. Right-to-left entrance = right-to-right exit. This makes the interface feel spatially coherent and reversible.

Q21: D — Skeleton screens, per NNGroup research, reduce perceived wait time by 20–40% because they provide layout context and reduce uncertainty. Spinners provide no structural information.

Q22: B — Chevron rotating 180° is the universal expandable/collapsible affordance signal. "This section opens; this section closes."

Q23: B — "Don't animate for its own sake" applies everywhere, including marketing. Every animation should have a purpose: communicate value, guide attention, provide feedback.

Q24: B — On Figma prototype connection: Trigger = "Mouse enter" (or "While hovering"), Animation = "Smart Animate". This creates the hover state transition.
```
