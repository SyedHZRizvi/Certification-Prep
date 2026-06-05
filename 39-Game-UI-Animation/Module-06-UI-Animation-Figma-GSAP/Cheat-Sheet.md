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
| `elastic.out` on 100+ stagger elements | Substitute `back.out(1.7)` — same visual, far less CPU |
| `filter: blur()` animation on mobile | Blur is CPU-rendered on Android/iOS WebView — animate opacity of pre-blurred version instead |

---

## 📊 GSAP Ease Function CPU Cost Reference

| Ease | Cost | Best For |
|---|---|---|
| `linear` | Very low | Progress bars, clock hands |
| `power1–4.out` | Very low | Most UI transitions |
| `expo.out` / `circ.out` | Low | Mobile sheets, drawers |
| `back.out(1.7)` | Low-medium | Playful menus, large stagger sets |
| `elastic.out(1, 0.3)` | Medium | Game UI, small element count (< 30) |
| `bounce.out` | Medium | Prefer `elastic` for smoother feel |

---

## 📊 GSAP ScrollTrigger Parameter Reference

```javascript
scrollTrigger: {
  trigger: '.element',      // element that triggers the animation
  start: 'top 80%',         // [trigger-edge] [viewport-edge]
  end: 'bottom 20%',        // when animation ends
  scrub: true,              // tie animation to scroll position (boolean or 0.5s lag)
  scrub: 0.5,               // 0.5s smoothing lag for scrub
  pin: true,                // pin the element during scroll
  pinSpacing: true,         // add space below pinned element
  toggleActions: 'play none none reverse',  // enter exit enterBack leaveBack
  toggleClass: 'active',    // add/remove CSS class instead of animation
  markers: true,            // debug markers (dev only)
  once: true,               // play once, never reverse
  id: 'hero-reveal',        // for debugging
}
```

**toggleActions values (in order):** onEnter, onLeave, onEnterBack, onLeaveBack
- `play` = play from current progress
- `pause` = pause at current progress
- `reverse` = play backwards
- `reset` = reset to start
- `none` = do nothing

---

## 📊 Framer Motion vs. GSAP — Full Comparison

| Feature | GSAP | Framer Motion |
|---|---|---|
| Framework | Vanilla JS | React only |
| Bundle size | ~30KB core | ~50KB |
| Scroll animation | ScrollTrigger plugin | `useScroll` + `useTransform` |
| Layout animation | Flip plugin | `layout` prop (auto) |
| Spring physics | `elastic.out` ease | `type: 'spring'` (first-class) |
| Stagger | `stagger: 0.06` | `staggerChildren` in variants |
| Timeline | `gsap.timeline()` | `useAnimate` hook |
| Exit animation | Manual reverse/remove | `exit` prop + `AnimatePresence` |
| Best for | Complex timelines, marketing sites | React component transitions |
