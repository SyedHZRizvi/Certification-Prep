---
permalink: /35-Motion-Graphics-UI-Animation/Module-06-UI-Micro-Interactions/Reading/
title: "Module 6: UI Micro-Interactions"
---

# 📱 Module 6: UI Micro-Interactions

## The 200ms That Made Everything Better

In 2014, Google released Material Design. Among its many innovations was a specific commitment: every interactive element on screen would respond to user input within 200ms. Not 190ms. Not 250ms. 200ms — the upper limit of what humans perceive as "instant response."

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
Consistent physical logic — same easing, same direction conventions — makes an interface feel coherent. Mixing spring and linear animations in the same product without reason creates cognitive friction.

### 4. Actions Should Be Reversible — and Animations Too
If a panel slides in from the right, it should slide out to the right. If a card scales up on tap, it should scale down on un-tap. Direction reversal should feel undoable.

### 5. Use Animation to Guide Focus
Animation draws the eye. Use this deliberately to guide users toward the next action — not to showcase motion for its own sake.

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
Skeleton screens, spinners, progress bars, and skeleton loaders are animations. They communicate "something is happening" — which is the most important thing to communicate when a user is waiting.

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

FLIP stands for **First, Last, Invert, Play** — a performance optimization technique for web animations developed by Paul Lewis at Google.

The problem: CSS properties like `width`, `height`, `top`, and `left` trigger expensive browser layout calculations. Animating them causes jank on low-powered devices.

The solution: instead of animating layout properties, FLIP uses `transform` (which is GPU-accelerated) to achieve the same visual result.

### FLIP Step-by-Step

1. **First:** Record the element's starting position/size (`getBoundingClientRect()`)
2. **Last:** Apply the end state (the layout the element should animate TO)
3. **Invert:** Apply a CSS transform that makes the element appear to still be in its starting position (despite being in the end state in the DOM)
4. **Play:** Animate the transform FROM the inverted state TO `transform: none` — the element appears to move from first to last, but the browser only animates a transform

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

## ⏳ Loading States in Detail

### The Three Loading Patterns

**Spinner:** Continuous rotation. Use for indeterminate durations (you don't know when it will finish).

**Progress Bar:** Linear fill from 0% to 100%. Use for determinate progress (upload, download with known size).

**Skeleton Screen:** Placeholder content in the shape of the real content. Shows the layout before data arrives. Reduces perceived load time by 20–40% (per Nielsen Norman Group research).

### Skeleton Screen Animation

The standard skeleton screen animation is a shimmer effect — a highlight that travels left to right across the placeholder shapes.

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

The Linear team published their motion spec: they define "quick" as 80–150ms, "comfortable" as 200–300ms, and "deliberate" as 300–500ms — and specify which interactions use which category.

### Vercel

Vercel's motion design is split by context:
- **Dashboard UI:** Subtle, 150–250ms, ease-out for entrances
- **Marketing/Homepage:** Physics-based, dramatic, used to demonstrate the product's speed metaphorically
- **Deployments list:** Real-time updates use a pulse animation on new items, instantly communicating "this just changed"

**The key insight from Vercel:** Dashboard motion and marketing motion serve different audiences with different goals. Never confuse them.

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

## 📚 Further Reading

- *Designing Interface Animation* — Val Head (Rosenfeld Media)
- *Animation at Work* — Rachel Nabors (A Book Apart)
- [Paul Lewis — FLIP Technique](https://www.youtube.com/results?search_query=FLIP+animation+technique+Paul+Lewis+Google)
- [Google Material Design Motion](https://m3.material.io/styles/motion)
- [Linear Design System Blog](https://linear.app/blog/design)
