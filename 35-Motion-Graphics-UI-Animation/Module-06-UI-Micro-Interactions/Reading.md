---
permalink: /35-Motion-Graphics-UI-Animation/Module-06-UI-Micro-Interactions/Reading/
title: "Module 6: UI Micro-Interactions"
---

# 📱 Module 6: UI Micro-Interactions

## The 200ms That Made Everything Better

In 2014, Google released Material Design. Among its many innovations was a specific commitment: every interactive element on screen would respond to user input within 200ms. Not 190ms. Not 250ms. 200ms, the upper limit of what humans perceive as "instant response."

The effect was immediate. Products built on Material Design felt *alive* in a way that previous Android interfaces hadn't. Users didn't consciously notice the animations; they just felt like the product understood them. That feeling is what micro-interactions deliver.

This module teaches you to design them deliberately.

---

## 🔬 The 12 Principles for Interface Animation

These principles extend Disney's 12 to the specific context of UI design. Credit to Val Head's work in *Designing Interface Animation* (Rosenfeld Media).

### 1. Don't Animate for Its Own Sake
Every UI animation must serve a purpose: communicate state, guide attention, provide feedback, or convey hierarchy. If you can't name the purpose, remove the animation.

### 2. Animations Should Reinforce Hierarchy
Larger, more important elements should have more prominent animations. Secondary elements should animate more subtly or later.

### 3. Reflect the Interface's Physics
Consistent physical logic same easing, same direction conventions makes an interface feel coherent. Mixing spring and linear animations in the same product without reason creates cognitive friction.

### 4. Actions Should Be Reversible, and Animations Too
If a panel slides in from the right, it should slide out to the right. If a card scales up on tap, it should scale down on un-tap. Direction reversal should feel undoable.

### 5. Use Animation to Guide Focus
Animation draws the eye. Use this deliberately to guide users toward the next action, not to showcase motion for its own sake.

### 6. Speed Signals Relationship
Fast animations (50–100ms) suggest the relationship between action and result is tight (button press → ripple). Slow animations (300–500ms) suggest the relationship is more distant or significant (modal open → new context).

### 7. Support Reduce Motion
`@media (prefers-reduced-motion: reduce)` is not optional. Users with vestibular disorders can experience motion sickness from UI animations. Always provide a reduced-motion fallback.

### 8. Animate Between States, Not Elements
Good UI animation communicates the transition between two states of the interface. Bad UI animation decorates elements independently.

### 9. Instant Is Sometimes Right
Not everything should animate. Error states, urgent alerts, and destructive action confirmations often work better as instant state changes than as animated reveals.

### 10. Coordinate Multiple Animations
When multiple elements animate in response to one action, they should share a unified timing logic. Stagger if appropriate, but don't let elements animate with random, independent timing.

### 11. Test at Actual Playback Speed
Animations look different in real usage than in after effects preview. Always test at real size on a real device. A 200ms animation looks instant on a 4K preview monitor but may feel fast on a phone.

### 12. Loading States Are Interface Animation Too
Skeleton screens, spinners, progress bars, and skeleton loaders are animations. They communicate "something is happening", which is the most important thing to communicate when a user is waiting.

---

## 🎯 What the Exam Tests: UI Micro-Interactions

> 🎯 **Exam Callout 1:** The Google Material Design specification defines standard UI transition duration as **200–300ms**. The Apple HIG specifies **~250ms**. Both derive from the same human-perception research. The exam tests: what is the Material Design-specified duration range for standard transitions? Answer: 200–300ms.

> 🎯 **Exam Callout 2:** `@media (prefers-reduced-motion: reduce)` is a CSS media query that detects when a user has enabled the system accessibility option for reduced motion. This is not optional for production UI, the exam tests whether you can identify which CSS mechanism enables reduced-motion fallbacks.

> 🎯 **Exam Callout 3:** The FLIP technique animates **only transform properties** (translate, scale), never layout properties (width, height, top, left, margin). The reason: transform is GPU-accelerated and doesn't trigger layout recalculation. The exam tests: which CSS properties does the FLIP technique specifically avoid animating?

> 🎯 **Exam Callout 4:** Skeleton screens reduce **perceived** load time by 20–40% according to Nielsen Norman Group research, they don't reduce actual load time. The exam may test: what does a skeleton screen improve? Answer: perceived load time, not actual load time.

> 🎯 **Exam Callout 5:** In Figma, Smart Animate works only when elements in both frames share **the same layer name**. Renamed layers do not animate, they appear to snap. The exam tests: what is the prerequisite for Figma Smart Animate to interpolate between two states?

> 🎯 **Exam Callout 6:** Linear's published motion specification defines three speed categories: quick (80–150ms), comfortable (200–300ms), and deliberate (300–500ms). The exam may use Linear's spec as a reference in questions about interaction speed taxonomy.

> 🎯 **Exam Callout 7:** A spinner is used for **indeterminate** loading (unknown duration). A progress bar is used for **determinate** loading (known size/duration). The exam tests: which loading animation is appropriate when the system cannot estimate completion time?

---

## ⚠️ Common Traps: UI Micro-Interactions

**Trap 1 Animating Layout Properties in CSS:** `transition: width 300ms ease` triggers an expensive layout recalculation on every frame it will cause jank on mid-range devices. The FLIP-compliant alternative: use `transform: scaleX()` to simulate a width change. Students who learn CSS animation from tutorials often learn the wrong approach first.

**Trap 2 The Reduced Motion Afterthought:** Many designers add `prefers-reduced-motion` as a final checklist item, replacing all animations with zero-duration versions. The correct approach: use `prefers-reduced-motion` as a design constraint from the start some animations communicate essential state and need a non-motion equivalent (color change, text label), not just removal.

**Trap 3 Figma Spring vs Real Spring:** Figma's "Spring" easing option approximates spring behavior using a bezier curve. It does not use physics parameters (mass, stiffness, damping). Designers who prototype in Figma with Spring easing and then hand off to developers who implement with React Spring (which uses actual physics parameters) will find the implementations feel different sometimes significantly so.

**Trap 4 Skeleton Screen Overuse:** Skeleton screens are appropriate for content that has a predictable shape (article, card list, feed). They are NOT appropriate for content whose shape is unknown if you show a skeleton with three lines but the content has seven, the skeleton is more jarring than a simple spinner.

---

## 🎨 Prototyping Motion in Figma

Figma's **Smart Animate** feature creates automatic transitions between frames that share elements with the same names.

### Smart Animate Setup

1. Create **Frame A** (initial state, e.g., button in default state)
2. Duplicate to **Frame B** (hover/pressed state, e.g., button scaled up and color changed)
3. In **Prototype panel**: draw a connection from Frame A to Frame B
4. Set Interaction: `On Click` (or `On Hover`, `Mouse Enter`)
5. Animation: `Smart Animate`
6. Set Easing and Duration (e.g., Spring, 300ms)

**Smart Animate interpolates:** Position, Size, Opacity, Rotation, Corner Radius, Fill Color, Stroke, and Effect (blur, shadow).

### Figma Prototype Limitations

| Limitation | Workaround |
|------------|-----------|
| No spring physics | Use cubic bezier that approximates spring |
| No scroll-driven animation | Use Figma's scroll prototype interactions |
| No stagger | Manually offset layer timing using Figma's delay feature |
| No looping animation | Create multiple frames and loop the flow |

---

## ⚡ The FLIP Technique

FLIP stands for **First, Last, Invert, Play**, a performance optimization technique for web animations developed by Paul Lewis at Google.

The problem: CSS properties like `width`, `height`, `top`, and `left` trigger expensive browser layout calculations. Animating them causes jank on low-powered devices.

The solution: instead of animating layout properties, FLIP uses `transform` (which is GPU-accelerated) to achieve the same visual result.

### FLIP Step-by-Step

1. **First:** Record the element's starting position/size (`getBoundingClientRect()`)
2. **Last:** Apply the end state (the layout the element should animate TO)
3. **Invert:** Apply a CSS transform that makes the element appear to still be in its starting position (despite being in the end state in the DOM)
4. **Play:** Animate the transform FROM the inverted state TO `transform: none`, the element appears to move from first to last, but the browser only animates a transform

```javascript
// FLIP implementation
const el = document.querySelector('.card');

// First
const first = el.getBoundingClientRect();

// Last (apply the new state)
el.classList.add('expanded');
const last = el.getBoundingClientRect();

// Invert
const dx = first.left - last.left;
const dy = first.top - last.top;
const dw = first.width / last.width;
const dh = first.height / last.height;

el.style.transform = `translate(${dx}px, ${dy}px) scale(${dw}, ${dh})`;
el.style.transformOrigin = 'top left';

// Play
requestAnimationFrame(() => {
  el.style.transition = 'transform 300ms cubic-bezier(0,0,.2,1)';
  el.style.transform = '';
});
```

---

## 🔔 Affordance Signaling

Affordance in design is the property of an object that suggests how it should be used. A door handle affords pulling; a flat plate affords pushing. In UI, animation is the primary way to communicate affordance.

### Common Affordance Animations

| Pattern | Animation | Message |
|---------|-----------|---------|
| Tap/click | Scale down (95%) then back up | "This is pressable" |
| Drag | Element follows cursor/touch with slight lag | "This is draggable" |
| Swipeable | Peek of content off-screen + hint swipe | "There is more content this way" |
| Expandable | Rotate arrow/chevron 180° | "This opens/closes" |
| Deletable | Swipe reveals delete action | "Swipe to delete" |
| Loading | Spinner, pulse, skeleton | "Something is happening; wait" |

---

## 🖱️ Hover States and State Machine Thinking

### The State Machine Model for UI Animation

Every UI component can be described as a finite state machine: a defined set of states, with defined transitions between them. For a button:

| State | Trigger In | Trigger Out | Visual Difference |
|-------|-----------|-------------|-------------------|
| Default | Page load | Any interaction | Rest appearance |
| Hover | Mouse enter | Mouse leave | Slight scale/color shift |
| Active/Pressed | Mouse down | Mouse up | Further scale down |
| Focused | Tab key | Blur | Ring/outline visible |
| Disabled | Prop change | Prop change | Reduced opacity |
| Loading | Click submit | Request resolves | Spinner replaces label |
| Success | Request resolves | Timer or user action | Checkmark, green color |
| Error | Request fails | User retry | Red, error message |

**The Animation Rule:** Each state transition needs its own animation. Not all transitions use the same duration or easing. Hover (fast, subtle) is different from Success (slightly slower, celebratory).

### CSS Implementation of State Transitions

```css
.button {
  /* Base state */
  background: #0066ff;
  transform: scale(1);
  transition:
    background 150ms ease-out,
    transform 100ms ease-out;
}

.button:hover {
  background: #0052cc;
  transform: scale(1.02);
}

.button:active {
  transform: scale(0.97);
  transition-duration: 50ms;  /* Faster response on press */
}

@media (prefers-reduced-motion: reduce) {
  .button {
    transition: background 150ms linear;  /* Color only, no scale */
  }
}
```

### The Figma → CSS Handoff

When a designer specifies a Figma Smart Animate transition for a button hover:
1. The duration in Figma maps directly to CSS `transition-duration`
2. The easing in Figma maps to CSS `transition-timing-function`
3. The properties animated in Figma identify which CSS properties need `transition` specified

The gap: Figma Spring easing has no direct CSS equivalent. The nearest approximation for a spring that overshoots slightly: `cubic-bezier(0.34, 1.56, 0.64, 1)`.

---

## ⏳ Loading States in Detail

### The Three Loading Patterns

**Spinner:** Continuous rotation. Use for indeterminate durations (you don't know when it will finish).

**Progress Bar:** Linear fill from 0% to 100%. Use for determinate progress (upload, download with known size).

**Skeleton Screen:** Placeholder content in the shape of the real content. Shows the layout before data arrives. Reduces perceived load time by 20–40% (per Nielsen Norman Group research).

### Skeleton Screen Animation

The standard skeleton screen animation is a shimmer effect, a highlight that travels left to right across the placeholder shapes.

**CSS Implementation:**
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## 🏢 Case Studies: Notion, Linear, Vercel

### Notion

Notion's motion design is characterized by **extreme restraint**. Almost nothing moves unless it's communicating a state change. The few animations that exist are:
- 200ms fade for dropdown menus
- Instant (0ms) state changes for toggle switches
- 150ms scale for emoji reactions

**Philosophy:** Notion is a productivity tool. Distraction costs users time and focus. Motion should be invisible.

### Linear

Linear uses motion as a **brand differentiator**. Their animations are fast (100–200ms), use custom cubic beziers that feel like spring without overshooting, and every major interface transition is animated with the same vocabulary.

The Linear team published their motion spec: they define "quick" as 80–150ms, "comfortable" as 200–300ms, and "deliberate" as 300–500ms, and specify which interactions use which category.

### Vercel

Vercel's motion design is split by context:
- **Dashboard UI:** Subtle, 150–250ms, ease-out for entrances
- **Marketing/Homepage:** Physics-based, dramatic, used to demonstrate the product's speed metaphorically
- **Deployments list:** Real-time updates use a pulse animation on new items, instantly communicating "this just changed"

**The key insight from Vercel:** Dashboard motion and marketing motion serve different audiences with different goals. Never confuse them.

---

## 🔬 The Neuroscience of Micro-Interactions

Why do micro-interactions matter? The answer is not aesthetic, it's neurological.

**The Prediction Machine:** The human brain is a prediction machine. At every moment, it generates a model of what the world will look like in the next 100–500ms. When the world matches the prediction, no conscious processing is required. When the world violates the prediction, the brain generates a conscious "alert", this is perceived as friction, surprise, or (in severe cases) confusion.

**How Good Micro-Interactions Work:** A well-designed button press animation confirms the brain's prediction: "I pressed this, and something happened." The animation is the confirmation signal. A button with no animation leaves the prediction unconfirmed, the brain must generate an "alert" to check whether the action registered. That alert is the friction users describe as "the interface felt unresponsive."

**The 200ms Threshold:** Human perception research (originally by Robert Miller in 1968, confirmed by countless subsequent studies) shows that responses within 200ms are perceived as "instant", the brain integrates them into the action rather than perceiving them as a separate response. Responses from 200–1000ms are perceived as a delay the user consciously notices but tolerates. Above 1000ms, users begin to doubt whether their action registered.

This is why Google Material Design chose 200ms as its standard: it's the upper limit of the "invisible response" zone.

---

## 📋 Summary

| Concept | Key Rule |
|---------|----------|
| 12 UI Animation Principles | Purpose over decoration; every animation has a reason |
| Figma Smart Animate | Same element names → automatic interpolation |
| FLIP Technique | First-Last-Invert-Play; only animate transforms, not layout |
| Affordance Signaling | Animation communicates HOW to interact |
| Loading States | Spinner = indeterminate; progress = determinate; skeleton = layout |
| Notion | Extreme restraint; productivity tools avoid distraction |
| Linear | Motion as brand differentiator; published speed taxonomy |
| Vercel | Dashboard vs marketing motion are separate languages |

---

## 🔗 Next Steps

[Module 7: Lottie & Web Animation →](../Module-07-Lottie-Web-Animation/Reading.md)

---

## 🎬 Case Study: Linear.app's Motion Philosophy in Practice

Linear is the project management tool most frequently cited by motion designers as "the best-animated product on the web." Their motion system is the result of deliberate, documented decisions made at the beginning of the product's design, not added later.

**The Published Taxonomy:**
Linear's motion team published their speed taxonomy externally: quick (80–150ms), comfortable (200–300ms), deliberate (300–500ms). Each interaction type maps to one category. Toggle switches are "quick." Modal dialogs are "comfortable." Feature introduction animations are "deliberate." No designer makes this decision individually, the taxonomy decides.

**The Easing Signature:**
Linear does not use standard ease-out. They use a custom cubic bezier that feels like a spring without the bounce: fast start, slight deceleration, no overshoot. The values are approximately `cubic-bezier(0.16, 1, 0.3, 1)`, giving the interface a "snappy" quality that feels physical without being playful.

**The Performance Constraint:**
Linear commits to 60fps animation on a 4-year-old MacBook. This is not a marketing claim, it's an engineering constraint that shapes every animation decision. Any micro-interaction that can't hit 60fps on target hardware is redesigned until it can. This constraint drives them toward transform-only animations (the FLIP technique from this module).

**The Brand Differentiator Argument:**
Linear's co-founder Karri Saarinen has said in interviews that motion is one of the primary reasons designers choose Linear over Jira. In a market where all project management tools have essentially the same features, motion quality is a competitive advantage. This is the strongest possible argument for investing in micro-interaction design.

**What This Means for Your Work:**
Before you build any UI animation system, define your taxonomy. Three speed categories with names, ranges, and example interactions, written down, shared with the team. Everything built after that point has a reference. Without a taxonomy, every animation decision is made in isolation and the interface feels incoherent.

---

## 📊 UI Animation Speed Taxonomy Comparison

| Product | Taxonomy | Fast Range | Standard Range | Slow Range |
|---------|----------|------------|----------------|------------|
| **Linear** | Quick / Comfortable / Deliberate | 80–150ms | 200–300ms | 300–500ms |
| **Google Material** | Short / Medium / Long | 100–200ms | 200–400ms | 400–700ms |
| **Apple HIG** | Instant / Standard / Extended | 0–100ms | 200–500ms | 500ms+ |
| **Airbnb (est.)** | Snap / Transition / Reveal | 100–200ms | 250–400ms | 350–600ms |
| **Notion** | Minimal / Minimal | 150–200ms | 200ms | Avoided |

---

## 🗣️ Socratic Discussion Questions

1. Notion's motion philosophy is "extreme restraint" almost nothing moves. Linear's philosophy is "motion as brand differentiator" everything that can animate does. Both products are successful. What product and audience factors explain why these opposite approaches are both correct in their respective contexts?

2. The FLIP technique is elegant but adds complexity. A developer who doesn't know FLIP might animate `width` directly and get a working result, just with some jank on low-end devices. At what traffic scale does jank become a meaningful business problem worth the FLIP implementation cost?

3. `prefers-reduced-motion` is a CSS media query for users with vestibular disorders. But some designers argue that all animations should be designed to respect this setting by default, making the no-motion version the primary design. Do you agree? What would be lost?

4. Google's 200ms target is based on research showing 200ms is the upper limit of "instant response" perception. But that research was conducted primarily on desktop devices. Does the same number apply on mobile, where touch response expectations may differ?

5. Skeleton screens show a placeholder shaped like the expected content. But social feeds (Twitter/X, Instagram) contain wildly variable content shapes. How do products with variable content shapes implement skeleton screens, or do they use a different loading state entirely?

---

## 📚 Further Reading

- *Designing Interface Animation* Val Head (Rosenfeld Media, 2016) the definitive book on UI animation principles; every principle in this module is developed further here with web-specific examples
- *Animation at Work* Rachel Nabors (A Book Apart, 2019) practical, concise; the best single resource on CSS and JavaScript animation for UI designers who code
- *CSS Animation Pocket Guide* Val Head (A Book Apart, 2015) 100 pages covering CSS keyframes, timing functions, and performance considerations; read it in one sitting
- [Paul Lewis FLIP Technique](https://www.youtube.com/results?search_query=FLIP+animation+technique+Paul+Lewis+Google) Paul Lewis's original presentation introducing the FLIP technique; foundational for any web animator
- [Google Material Design Motion](https://m3.material.io/styles/motion), the world's most comprehensive published UI motion specification; study the speed taxonomy and easing rationale
- [Linear Design System Blog](https://linear.app/blog/design), Linear's published articles on their motion design decisions; rare insight into how a top product team thinks about animation
