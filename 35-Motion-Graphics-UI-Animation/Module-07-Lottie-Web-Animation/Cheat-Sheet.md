---
permalink: /35-Motion-Graphics-UI-Animation/Module-07-Lottie-Web-Animation/Cheat-Sheet/
title: "Module 7 Cheat Sheet: Lottie & Web Animation"
---

# ⚡ Module 7 Cheat Sheet — Lottie & Web Animation

## Lottie: Supported vs Not Supported

| Supported | NOT Supported |
|-----------|--------------|
| Shape layers | 3D camera animations |
| Trim Paths | Raster effects (Effect menu blurs) |
| Masks | Track mattes with complex blend modes |
| Text (as shapes) | Certain expressions |
| Path animations | Time remapping on pre-comps |
| Solids | Layer styles (glows, etc.) |

---

## Lottie Export Workflow

1. Build in AE using shape layers only
2. Install Bodymovin (LottieFiles for AE)
3. Window > Extensions > Bodymovin → Select comp → Render
4. Preview on lottiefiles.com → Optimize
5. Implement in HTML/React

---

## Lottie HTML Implementation

```html
<script src="lottie.min.js"></script>
<div id="container"></div>
<script>
var anim = lottie.loadAnimation({
  container: document.getElementById('container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation.json'
});
anim.play(); anim.pause(); anim.setSpeed(2);
anim.playSegments([20, 80], true);
</script>
```

---

## GSAP ScrollTrigger Essentials

```javascript
gsap.to(el, {
  y: -100, opacity: 0,
  scrollTrigger: {
    trigger: '.section',
    start: 'top center',  // trigger-pos viewport-pos
    end: 'bottom top',
    scrub: true,          // links to scroll position
    pin: true,            // fixes element during animation
    markers: true         // debug markers (remove for production)
  }
});
```

---

## Web Animation Library Comparison

| Library | Model | Context | Best For |
|---------|-------|---------|---------|
| GSAP | Timeline, duration | Vanilla JS + React | Complex sequences, scroll |
| Framer Motion | State-based | React only | UI transitions, hover/tap |
| React Spring | Physics | React only | Gesture response, spring feel |
| Lottie | AE JSON | Web + mobile | Complex brand/character animation |
| CSS | Declarative | Native | Simple loops, hover, performance-critical |
| WAAPI | Timeline | Native JS | Programmatic, no library |

---

## Framer Motion Cheat

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -50 }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

---

## React Spring Cheat

```jsx
const [styles, api] = useSpring(() => ({
  x: 0,
  config: { mass: 1, tension: 280, friction: 60 }
}));
<animated.div style={styles} onClick={() => api.start({ x: 100 })} />
```

---

## CSS Keyframe Template

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.el { animation: float 3s ease-in-out infinite; }
```

---

## WAAPI Quick Reference

```javascript
el.animate([
  { transform: 'translateX(0)', opacity: 1 },
  { transform: 'translateX(300px)', opacity: 0 }
], { duration: 500, easing: 'ease-out', fill: 'forwards' });
```
