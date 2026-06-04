---
title: "Module 6: UI Animation — Figma Smart Animate, GSAP & Framer Motion"
---

# 🖥️ Module 6: UI Animation — Figma, GSAP & Framer Motion

## How Stripe's Homepage Became a Portfolio Piece

In 2020, Stripe's design team made a decision that would be discussed in motion design circles for years: they redesigned their homepage with animated gradient meshes that continuously shift and breathe. No product features are demonstrated in the first 500 pixels of scroll. No CTAs. Just a slow, luminous color animation that communicates — before a single word is read — that Stripe's engineering is different.

The animation was built in GSAP (GreenSock Animation Platform) by Stripe's design engineering team. The gradient calculation runs on a requestAnimationFrame loop, with GSAP managing the easing and timing. The technique predated CSS `@property` animation (which would now be an alternative) and required JavaScript to interpolate between hue-rotation keyframes on SVG `<linearGradient>` elements.

When developers on Twitter/X reverse-engineered the animation in 2021, the most common observation was not "this is technically impressive" — it was "this makes me trust Stripe." Motion design, when done at this level, communicates institutional seriousness. This is why the UI motion designer at a company like Stripe commands a higher salary than a generic front-end engineer with similar JavaScript skill.

This module teaches you the tools to build at that level.

---

## 🎨 Figma Smart Animate: Prototyping UI Motion

**Smart Animate** is Figma's prototyping feature that automatically interpolates between two frames with matching named layers. Instead of specifying keyframes, you create two Frames — the "before" and "after" states — and Figma transitions between them by tweening matching layer properties.

### How Smart Animate Works

1. Create Frame A (e.g., a card collapsed)
2. Create Frame B (e.g., the same card expanded)
3. Ensure matching layers have the same names in both frames
4. In Prototype mode: add an interaction from Frame A → Frame B, set the Animation type to "Smart Animate"
5. Figma detects matching layers and tweens position, size, opacity, and corner radius

### What Smart Animate Can and Cannot Do

| Supported | Not Supported |
|-----------|--------------|
| Position (X, Y) | Path/shape morphing |
| Size (W, H) | Text content changes |
| Opacity | Clip/mask changes |
| Corner radius | Effects (blur, shadow) without exact match |
| Rotation | Component variant changes with structure diff |
| Fill color (same layer) | Layering order changes |

### Easing Options

Figma Smart Animate supports:
- **Ease In**: starts slow, ends fast
- **Ease Out**: starts fast, ends slow (preferred for exit animations)
- **Ease In and Out**: slow at both ends (preferred for large movements)
- **Linear**: constant speed (avoid for UI — unnatural feel)
- **Spring**: physically simulated spring (natural, overshoot behavior)
- **Custom cubic-bezier**: via the cubic-bezier curve editor

> 🎯 **Exam Tip:** For UI motion, the most important design principle is **ease out for exits, ease in/out for entrances**. Elements that are leaving the screen should ease out (start fast, end slow) because they're "running away." Elements entering should ease in/out (start slow, end slow) to feel deliberate. Linear easing in UI always reads as mechanical.

---

## 🎬 GSAP (GreenSock Animation Platform): Production Web Animation

**GSAP** is the most widely used JavaScript animation library for production web animation. It runs every animation on a ticker synced to `requestAnimationFrame`, applies easing with high precision, and handles browser inconsistencies that CSS transitions do not.

Used by: Google, Microsoft, Apple, Stripe, Mailchimp, Salesforce, NASA, Amazon.

### Core API

```javascript
// Import (ESModule)
import gsap from 'gsap';

// Tween: animate TO target values
gsap.to('.card', { x: 100, opacity: 0, duration: 0.5, ease: 'power2.out' });

// Tween: animate FROM starting values
gsap.from('.card', { y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' });

// Tween: animate FROM → TO (full control)
gsap.fromTo('.card', 
  { y: 30, opacity: 0 },   // from
  { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }  // to
);
```

### GSAP Ease Reference (Critical for Interviews)

| Ease | Behavior | Best For |
|------|----------|---------|
| `power1.out` | Gentle ease out | Subtle UI transitions |
| `power2.out` | Standard ease out | Most UI animations |
| `power3.out` | Strong ease out | Dramatic entrances |
| `back.out(1.7)` | Overshoot (spring-like) | Playful UI, menu items |
| `elastic.out(1, 0.3)` | Bouncy spring | Game UI, playful contexts |
| `expo.out` | Very fast start, very slow end | Mobile sheet swipe |
| `circ.out` | Fast ease out like a quarter circle | Navigation drawers |
| `linear` | No easing | Progress bars, clock hands |

---

## ⏱️ GSAP Timeline: Sequenced Animation

A `Timeline` orchestrates multiple tweens in sequence or with overlap:

```javascript
const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.4 } });

tl.from('.hero-title', { y: 40, opacity: 0 })
  .from('.hero-subtitle', { y: 20, opacity: 0 }, '-=0.2')  // 0.2s overlap
  .from('.hero-cta', { y: 20, opacity: 0, scale: 0.9 }, '-=0.1')
  .from('.hero-image', { x: 60, opacity: 0 }, '<0.1');  // '<' = same time as previous start + 0.1s
```

### Timeline Control

```javascript
tl.pause();
tl.play();
tl.restart();
tl.reverse();
tl.progress(0.5);  // jump to 50% of the timeline
```

---

## 📜 ScrollTrigger: Scroll-Driven Animation

**ScrollTrigger** is GSAP's plugin for connecting animations to scroll position. It is used in Stripe, Linear, Raycast, Vercel, and virtually every award-winning marketing site.

```javascript
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Animate in as element enters viewport
gsap.from('.feature-card', {
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.feature-card',
    start: 'top 80%',        // when top of element is 80% from top of viewport
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'  // play on enter, reverse on leave
  }
});

// Scrub — animation tied directly to scroll position
gsap.to('.parallax-bg', {
  yPercent: -30,
  ease: 'none',  // must be 'none' for scrub
  scrollTrigger: {
    trigger: '.parallax-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true  // ties animation progress to scroll progress
  }
});
```

---

## 🔄 GSAP Flip Plugin: Layout-Aware Animation

**Flip** (FLIP = First, Last, Invert, Play) is GSAP's plugin for animating elements between different layout states — grid reorder, expand/collapse, filter transitions — without the complexity of manual coordinate tracking.

```javascript
import Flip from 'gsap/Flip';
gsap.registerPlugin(Flip);

// Save state before DOM change
const state = Flip.getState('.card');

// Make the DOM change (filter, reorder, resize container, etc.)
container.classList.toggle('expanded');

// GSAP Flip animates from old state → new state automatically
Flip.from(state, {
  duration: 0.6,
  ease: 'power2.inOut',
  absolute: true,  // use absolute positioning during animation
  stagger: 0.05
});
```

The FLIP technique (originally named by Paul Lewis at Google in 2015) is the correct approach for animating layout changes without triggering layout recalculation on every frame.

---

## ⚡ Performance: The Golden Rules

> 🚨 **Trap on the exam:** Animating `top`, `left`, `width`, or `height` in GSAP or CSS triggers **layout recalculation** every frame. This is the single most common web animation performance mistake.

**Always animate with transforms and opacity:**

```javascript
// WRONG — triggers layout
gsap.to('.card', { top: '100px', left: '200px' });

// RIGHT — GPU compositing only
gsap.to('.card', { x: 200, y: 100 });  // GSAP x/y → CSS translateX/translateY
```

**will-change: transform** promotes the element to a GPU composite layer *before* the animation starts. Apply it when you know an element will animate:

```css
.will-animate {
  will-change: transform;  /* Promote before animation; remove after */
}
```

**Stagger for list animations:**

```javascript
gsap.from('.list-item', {
  y: 20,
  opacity: 0,
  duration: 0.4,
  stagger: 0.06,  // 60ms between each item
  ease: 'power2.out'
});
```

---

## ⚛️ Framer Motion: Animation in React

**Framer Motion** is the standard animation library for React. It uses a declarative API that aligns with React's component model.

```jsx
import { motion, AnimatePresence } from 'framer-motion';

// Basic transition
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
/>

// AnimatePresence for mount/unmount animations
<AnimatePresence>
  {isVisible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    />
  )}
</AnimatePresence>
```

### Framer Motion vs. GSAP

| | GSAP | Framer Motion |
|--|------|---------------|
| Framework | Vanilla JS (any framework) | React-first |
| Scroll animation | ScrollTrigger plugin | `useScroll` + `useTransform` |
| Layout animation | Flip plugin | `layout` prop |
| Spring physics | Configurable | First-class via `type: 'spring'` |
| Bundle size | ~30KB (core) | ~50KB |
| Best for | Complex timelines, marketing | React UI components |

---

## 🏢 Case Studies: Stripe, Linear, Raycast

| Company | Key Technique | GSAP/CSS Tool |
|---------|--------------|---------------|
| **Stripe** | Animated gradient mesh, scroll-triggered feature reveals | GSAP + custom WebGL shaders |
| **Linear** | Physics-spring navigation, staggered card entrances | Framer Motion |
| **Raycast** | Scroll-scrubbed feature demonstrations | GSAP ScrollTrigger + scrub |

---

## 🎨 Figma → Developer Handoff for Motion

1. **Prototype the motion in Figma** using Smart Animate + Spring easing
2. **Document the motion spec**: duration, easing (convert Spring to cubic-bezier via figma-to-gsap converters), stagger timing
3. **Translate to CSS** variables:
   ```css
   --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* overshoot */
   --duration-fast: 200ms;
   --duration-standard: 350ms;
   ```
4. **Implement in GSAP or Framer Motion** using the documented spec
5. **Add `prefers-reduced-motion`** media query (covered in Module 7)

---

## ⚠️ Common Misconceptions

> **Misconception 1: "Figma Smart Animate is the final product."**
> Reality: Smart Animate is a prototyping tool for communicating intent to developers. Production animation is built in CSS, GSAP, or Framer Motion.

> **Misconception 2: "CSS transitions are always worse than GSAP."**
> Reality: CSS transitions are excellent for simple, single-property transitions (button hover, color change). GSAP's advantage is in sequenced, multi-property, scroll-driven, or JS-triggered animations where CSS transitions become unmanageable.

> **Misconception 3: "The FLIP technique is only for advanced developers."**
> Reality: GSAP's Flip plugin makes FLIP accessible. Any layout-change animation (card expand, filter/sort, drag and drop) benefits from FLIP.

---

## 🔗 Next Steps

**Next Module:** [Module 7: CSS Animation, Lottie & Rive →](../Module-07-CSS-Lottie-Web/Reading.md)

We complete the web animation toolkit: CSS keyframes, GPU acceleration, LottieFiles workflow, the Lottie Web player API, and Rive as a next-generation alternative.

---

## 📚 Further Reading

- 🔗 [GSAP Documentation](https://gsap.com/docs/)
- 🔗 [GSAP ScrollTrigger Documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- 🔗 [GSAP Flip Plugin](https://gsap.com/docs/v3/Plugins/Flip/)
- 🔗 [Framer Motion Documentation](https://www.framer.com/motion/)
- 🔗 [Figma Smart Animate Guide](https://help.figma.com/hc/en-us/articles/360039818874)
- 📄 Paul Lewis, "FLIP Your Animations" (2015) — the original FLIP technique article (Google Developers blog)
- 🎬 GDC: "The Animation of Linear.app" — Twitter/X motion design threads from Linear's design team
