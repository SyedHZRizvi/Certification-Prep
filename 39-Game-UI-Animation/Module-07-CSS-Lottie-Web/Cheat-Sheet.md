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
