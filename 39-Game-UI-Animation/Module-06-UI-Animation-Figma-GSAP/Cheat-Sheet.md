---
title: "Module 6 Cheat Sheet: UI Animation — Figma, GSAP & Framer Motion"
---

# 🗒️ Module 6 Cheat Sheet: UI Animation — Figma, GSAP & Framer Motion

## 🎨 Figma Smart Animate — Quick Rules

| Rule | Detail |
|------|--------|
| Match requirement | Same layer name in both frames |
| Easing for entrances | **Ease In and Out** |
| Easing for exits | **Ease Out** (starts fast, slows at end) |
| Spring easing | Natural overshoot; use for playful UI |
| Handoff format | Duration + cubic-bezier from Figma's inspect |

---

## 🟩 GSAP Core API

```javascript
gsap.to(target, { x: 100, opacity: 0, duration: 0.5, ease: 'power2.out' });
gsap.from(target, { y: 30, opacity: 0, duration: 0.5, ease: 'power2.out' });
gsap.fromTo(target, { from }, { to, duration, ease });
```

### Ease Reference

| Ease | Effect | Use |
|------|--------|-----|
| `power1.out` | Gentle decel | Subtle hover |
| `power2.out` | Standard decel | Most UI |
| `power3.out` | Strong decel | Dramatic enter |
| `back.out(1.7)` | Overshoot | Playful, menus |
| `elastic.out(1,0.3)` | Bouncy spring | Game UI |
| `expo.out` | Very fast start | Mobile sheets |
| `linear` | Constant speed | Progress bars |

---

## ⏱️ GSAP Timeline

```javascript
const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.4 } });
tl.from('.title', { y: 40, opacity: 0 })
  .from('.sub', { y: 20, opacity: 0 }, '-=0.2')  // 0.2s overlap
  .from('.cta', { y: 20, opacity: 0 }, '<0.1');   // 0.1s after prev START
```

---

## 📜 ScrollTrigger

```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.from('.card', {
  y: 60, opacity: 0, duration: 0.8,
  scrollTrigger: {
    trigger: '.card',
    start: 'top 80%',    // top of element at 80% of viewport
    toggleActions: 'play none none reverse'
  }
});

// Scrub — tied directly to scroll
gsap.to('.bg', {
  yPercent: -20, ease: 'none',
  scrollTrigger: { trigger: '.section', scrub: true }
});
```

---

## 🔄 GSAP Flip

```javascript
gsap.registerPlugin(Flip);

const state = Flip.getState('.card');   // 1. Save state
container.classList.toggle('expanded'); // 2. DOM change
Flip.from(state, {                      // 3. Animate old → new
  duration: 0.6, ease: 'power2.inOut', stagger: 0.05
});
```

---

## ⚡ Performance Rules

| WRONG (triggers layout) | RIGHT (GPU only) |
|------------------------|-----------------|
| `top`, `left`, `width`, `height` | `transform` (`x`, `y`, `scaleX`, `rotate`) |
| `margin`, `padding` | `translateX`, `translateY` |

**Add `will-change: transform` before animation; remove after.**

---

## ⚛️ Framer Motion Essentials

```jsx
// Basic entrance/exit
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
/>

// Mount/unmount animation
<AnimatePresence>
  {visible && <motion.div key="modal" initial={{...}} exit={{...}} />}
</AnimatePresence>

// Layout animation
<motion.div layout />  // auto-animates when size/position changes
```

---

## 📊 GSAP vs. Framer Motion

| | GSAP | Framer Motion |
|--|------|---------------|
| Framework | Vanilla JS | React |
| Scroll | ScrollTrigger plugin | useScroll + useTransform |
| Layout | Flip plugin | layout prop |
| Bundle | ~30KB | ~50KB |
| Best for | Complex timelines | React UI components |

---

## ⚠️ Common Traps

| Trap | Fix |
|------|-----|
| Smart Animate without matching names | Rename layers identically in both frames |
| GSAP `left`/`top` animation | Use `x`/`y` (translates) instead |
| `height: 'auto'` in GSAP | Measure px height first; animate 0 → px value |
| Linear easing for UI | Use `power2.out` — linear reads as mechanical |
| Exit easing = entrance easing | Exits = ease-out; entrances = ease-in-out |
