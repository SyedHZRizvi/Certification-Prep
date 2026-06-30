---
permalink: /35-Motion-Graphics-UI-Animation/Module-07-Lottie-Web-Animation/Cheat-Sheet/
title: "Module 7 Cheat Sheet: Lottie & Web Animation"
---

# ⚡ Module 7 Cheat Sheet, Lottie & Web Animation

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


---

## 📌 Quick Reference Summary

| Concept | Key Rule / Value | Why It Matters |
|---|---|---|
| Core tool | See module Reading.md | Foundation of the workflow |
| Common mistake | Check "⚠️ Gotcha" sections | Saves hours of debugging |
| Delivery standard | See platform spec table | Client/employer expectation |
| Career application | Salary range in README | Know your market value |

## ✅ Self-Assessment

Before marking this module complete:
- [ ] Core technique mastered (can do without reference)
- [ ] Understand *why* the technique works, not just how
- [ ] Familiar with at least two real productions that use it
- [ ] Know the common failure mode and how to diagnose it

---

## 🏆 Exam Performance Standards

### Beginner Benchmark
Can identify the technique and explain it in 1 sentence.

### Intermediate Benchmark
Can demonstrate the technique correctly in a controlled exercise.

### Advanced Benchmark
Can apply the technique under production constraints (time pressure, client feedback, iteration cycles) and teach it to a junior.

### Professional Standard
Can make real-time decisions about when NOT to use the technique, knowing when a simpler or faster approach delivers equivalent results.

---

## 🗂️ File Organization Reference

| Asset type | Recommended naming | Storage location |
|---|---|---|
| Project files | `YYYYMMDD_ProjectName_v001` | `/Projects/` |
| Final deliverables | `ProjectName_FINAL_v001` | `/Deliverables/` |
| Reference footage | `ref_topic_source` | `/Reference/` |
| Client feedback | `feedback_date_initials` | `/Admin/` |

---

## ⚡ 60-Second Review

If you can answer these in under 60 seconds, you're ready for the module quiz:

1. What is the primary technique covered in this module called?
2. Which real production demonstrates it most clearly?
3. What's the most common mistake beginners make?
4. What file format or setting is critical to get right?
5. How does this technique change when working at a professional studio vs. solo?
