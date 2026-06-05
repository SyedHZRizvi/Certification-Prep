---
title: "Module 7 Cheat Sheet: CSS Animation, Lottie & Rive"
---

# 🗒️ Module 7 Cheat Sheet: CSS Animation, Lottie & Rive

## 🎨 CSS Animation Properties

| Property | Key Values |
|----------|-----------|
| `animation-name` | keyframe name |
| `animation-duration` | `0.4s`, `400ms` |
| `animation-timing-function` | `ease`, `ease-out`, `cubic-bezier()`, `steps(N)` |
| `animation-delay` | `0.2s` (positive = wait; negative = start partway through) |
| `animation-iteration-count` | `1`, `3`, `infinite` |
| `animation-direction` | `normal`, `reverse`, `alternate` |
| `animation-fill-mode` | see below |
| `animation-play-state` | `running`, `paused` |

### fill-mode Values

| Value | Effect |
|-------|--------|
| `none` | Snaps back to original state — DEFAULT |
| `forwards` | **Holds final keyframe after animation ends** |
| `backwards` | Applies first keyframe during delay period |
| `both` | forwards + backwards behavior |

---

## ⚡ GPU Animation Rules

| SAFE (compositor only) | AVOID (triggers layout) |
|------------------------|------------------------|
| `transform` | `top`, `left`, `bottom`, `right` |
| `opacity` | `width`, `height`, `margin` |
| `filter` (usually) | `padding`, `border-width` |

**will-change: transform** — promotes to GPU layer BEFORE animation. Use sparingly; too many elements on GPU layers wastes VRAM.

---

## 🎬 Lottie Quick Reference

| Step | Tool / Command |
|------|---------------|
| Create | After Effects (shape layers, vectors, text) |
| Export | Bodymovin AE plugin → Lottie JSON |
| Optimize | LottieFiles Optimizer → target **< 50KB** |
| Implement | `lottie.loadAnimation({ renderer: 'svg', ... })` |

### Lottie API

```javascript
const anim = lottie.loadAnimation({
  container, renderer: 'svg', loop: true, autoplay: true, path: '/anim.json'
});
anim.play();
anim.pause();
anim.setSpeed(2);
anim.goToAndStop(50, true); // frame 50, paused
anim.playSegments([10, 50], true);
```

### AE Lottie Export Limitations

- ❌ AE 3D layers / 3D camera
- ❌ Complex expressions (bake to keyframes first)
- ❌ Raster effects (Gaussian Blur → use shape blur instead)
- ✅ Shape layers, solids, vectors, path animation, text

---

## 🎮 Lottie vs. Rive

| | Lottie | Rive |
|--|--------|------|
| Source | After Effects | Rive editor |
| Runtime | Playback only | Interactive state machine |
| File | JSON (20–80KB) | .riv binary (5–30KB) |
| Interactivity | None | First-class inputs |
| Best for | Illustrations, loaders | Buttons, game UI, micro-interactions |

### Rive JS Input Types

| Type | Usage | Access |
|------|-------|--------|
| Boolean | Toggle states | `input.value = true/false` |
| Number | Continuous values | `input.value = 0.5` |
| Trigger | One-shot events | `input.fire()` |

---

## ♿ prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  .animated { animation: none; transition: opacity 0.1s linear; }
}
```

```javascript
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced) { gsap.from('.hero', { y: 40, opacity: 0 }); }
```

- WCAG 2.3.3 (AAA): allow users to disable motion > 5s or repeating
- WCAG 2.3.1 (AA): no content flashing > 3× per second

---

## 📊 Tool Decision Matrix

| Scenario | Tool |
|---------|------|
| Hover state (1 property) | CSS transition |
| Complex AE illustration | Lottie |
| Interactive icon / button | Rive |
| Scroll-triggered reveal | GSAP ScrollTrigger |
| React entrance/exit | Framer Motion |
| Complex timeline | GSAP |

---

## ⚠️ Common Traps

| Trap | Fix |
|------|-----|
| fill-mode: none (default) — snaps back | Use `forwards` or `both` |
| Animating top/left | Use `transform: translateX/Y` |
| will-change on everything | Use sparingly — GPU memory cost |
| Lottie file > 50KB | Run LottieFiles optimizer |
| Lottie for interactive states | Use Rive (has state machine) |
| 3D AE layers in Lottie export | Flatten to 2D before export |
| SVG renderer for complex mobile Lottie | Switch to `renderer: 'canvas'` on mobile |
| `filter: blur()` animation on mobile | Animate opacity crossfade of pre-blurred element instead |
| Global `will-change: transform` CSS rule | Apply only to elements known to animate; mobile VRAM is limited |

---

## 📊 CSS Animation Property Quick Reference

```css
.element {
  /* Shorthand: name duration timing-function delay count direction fill-mode */
  animation: slideIn 0.5s ease-out 0.2s 1 normal forwards;

  /* Or individual properties: */
  animation-name: slideIn;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-delay: 0.2s;            /* positive = wait; negative = start partway through */
  animation-iteration-count: 1;     /* 1, 3, infinite */
  animation-direction: normal;      /* normal | reverse | alternate | alternate-reverse */
  animation-fill-mode: forwards;    /* none | forwards | backwards | both */
  animation-play-state: running;    /* running | paused (JS-controllable) */
}
```

---

## 📊 Lottie vs. Rive vs. CSS — Decision Matrix

| Factor | CSS | Lottie | Rive |
|---|---|---|---|
| Source tool | Code / Figma | After Effects | Rive editor |
| Runtime size | 0KB (native) | ~150KB (lottie-web) | ~40KB |
| File size | N/A (CSS) | 20–200KB JSON | 5–30KB .riv |
| Interactivity | Via JS only | None natively | First-class state machine |
| State machine | No | No | Yes |
| AE workflow | No | Yes | No |
| Mobile perf | High | Medium (use canvas renderer) | High |
| Accessibility | Full | Partial (aria-label container) | Partial |
| Best for | Hover / simple loops | AE illustrations, loaders | Interactive icons, game UI |

---

## 🎨 CSS Keyframe Patterns

```css
/* Slide in from bottom */
@keyframes slideInUp {
  from { transform: translateY(30px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

/* Pulse / breathe */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
}

/* Spin */
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* Steps (sprite sheet) */
@keyframes walk {
  from { background-position: 0px; }
  to   { background-position: -800px; }
}
.sprite { animation: walk 0.8s steps(8) infinite; }
```

---

## ♿ prefers-reduced-motion Full Pattern

```css
/* Default: full animation */
.card { animation: slideInUp 0.5s ease-out both; }
.spinner { animation: spin 1s linear infinite; }

/* Reduced: remove motion, keep opacity */
@media (prefers-reduced-motion: reduce) {
  .card    { animation: none; }
  .spinner { animation: none; opacity: 0.7; }
  *        { transition-duration: 0.001ms !important; } /* nuclear option */
}
```

```javascript
// GSAP reduced motion guard
const pref = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!pref.matches) {
  gsap.from('.hero', { y: 40, opacity: 0, duration: 0.6 });
} else {
  gsap.from('.hero', { opacity: 0, duration: 0.2 }); // fade only, no movement
}
// Also listen for runtime changes:
pref.addEventListener('change', () => location.reload());
```
