---
permalink: /35-Motion-Graphics-UI-Animation/Module-07-Lottie-Web-Animation/Reading/
title: "Module 7: Lottie & Web Animation"
---

# 🌐 Module 7: Lottie & Web Animation

## The Problem with GIFs

In 2015, Airbnb's design team had a problem. They'd built beautiful animations in After Effects for their iOS and Android apps. When they shipped them as GIF files, the animations looked terrible — blocky, degraded, massive file sizes. When they shipped them as MP4 videos, they couldn't control playback, pause, or respond to user interaction. When they tried to hire developers to recreate the animations in native iOS/Android code, the process took weeks and the results never matched the design.

They built Lottie to solve this. The framework converted AE animations to a JSON format that could be rendered natively by the device — at any resolution, with any playback speed, and with full programmatic control. It changed the industry.

---

## 🔬 The LottieFiles Workflow: AE → JSON

### Step 1: Build the Animation in After Effects

Lottie supports most common AE features:

| Supported | Not Supported |
|-----------|--------------|
| Shape layers | Raster effects (Gaussian blur via Effect menu) |
| Solids | Track mattes with complex blending |
| Text (as shapes) | 3D camera animations |
| Masks | Certain expressions |
| Path animations | Layer effects (glows, etc.) |
| Trim Paths | Time Remapping on pre-comps |

> 🎯 **Exam Tip:** Always build Lottie animations using shape layers, not raster effects. Rasterize all effects before export or rebuild as shape-based equivalents. The most common Lottie export failure is an unsupported effect that renders blank.

### Step 2: Install Bodymovin

Bodymovin (now called LottieFiles for After Effects) is a free AE plugin.
1. Install via `aescripts.com/bodymovin` or ZXP Installer
2. In AE: `Window > Extensions > Bodymovin`
3. Select the composition to export
4. Set output path
5. Click `Render`

Output: a `.json` file (and optionally a folder of images if the animation uses rasters)

### Step 3: Preview and Optimize

1. Upload the `.json` to [LottieFiles.com](https://lottiefiles.com)
2. Preview in the web player
3. Use LottieFiles optimizer to reduce file size
4. Check all layers are rendering correctly
5. Download optimized `.json`

### Step 4: Implement

**In HTML:**
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"></script>
<div id="lottie-container"></div>
<script>
  var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation.json'
  });
</script>
```

**In React:**
```jsx
import Lottie from 'lottie-react';
import animationData from './animation.json';

function App() {
  return <Lottie animationData={animationData} loop={true} />;
}
```

---

## ⚡ Lottie Programmatic Control

```javascript
// Basic controls
animation.play();
animation.pause();
animation.stop();
animation.setSpeed(2); // 2x speed
animation.goToAndPlay(30, true); // go to frame 30, play forward

// Interactivity
animation.addEventListener('complete', () => {
  console.log('Animation finished');
});

// Segment playback (play frames 0–60, then loop 60–120)
animation.playSegments([0, 60], true);
animation.playSegments([60, 120], true);
```

---

## 🎯 GSAP ScrollTrigger

GSAP (GreenSock Animation Platform) is the industry-standard JavaScript animation library. ScrollTrigger is a GSAP plugin that ties animation playback to scroll position.

### Basic ScrollTrigger

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.hero-text', {
  y: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});
```

**Key ScrollTrigger Properties:**

| Property | Values | Meaning |
|----------|--------|---------|
| `trigger` | Element or selector | What element triggers the animation |
| `start` | `"top center"` | When does animation start (trigger position + viewport position) |
| `end` | `"bottom top"` | When does animation end |
| `scrub` | `true` / number | Links animation progress to scroll position |
| `pin` | `true` | Pins the trigger element during animation |
| `markers` | `true` | Shows debug markers |

### GSAP Timelines

```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1
  }
});

tl.from('.title', { opacity: 0, y: 50, duration: 0.5 })
  .from('.subtitle', { opacity: 0, y: 30, duration: 0.3 }, '-=0.2')
  .from('.cards', { opacity: 0, stagger: 0.1, duration: 0.4 });
```

---

## 🎨 CSS Keyframes and Custom Properties

CSS animations using `@keyframes` are powerful for looping animations and state transitions that don't require JavaScript.

### CSS Custom Properties for Animation

```css
:root {
  --animation-duration: 300ms;
  --animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
}

.card {
  transition: transform var(--animation-duration) var(--animation-easing);
}
```

Changing `--animation-duration` in JavaScript updates all animations using that variable:
```javascript
document.documentElement.style.setProperty('--animation-duration', '500ms');
```

### Complex CSS Keyframe Animation

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.floating-icon {
  animation: float 3s ease-in-out infinite;
}
```

---

## 🌊 The Web Animations API (WAAPI)

The Web Animations API brings timeline-based animation control to the browser natively (no library required).

```javascript
const element = document.querySelector('.box');

const animation = element.animate(
  [
    { transform: 'translateX(0)', opacity: 1 },
    { transform: 'translateX(300px)', opacity: 0 }
  ],
  {
    duration: 500,
    easing: 'ease-out',
    fill: 'forwards'
  }
);

// Control
animation.pause();
animation.play();
animation.reverse();
animation.playbackRate = 2;
```

---

## ⚛️ React Spring and Framer Motion

### React Spring

React Spring uses a physics-based model (spring mass/damping/stiffness) — not duration-based keyframes.

```jsx
import { useSpring, animated } from '@react-spring/web';

function Box() {
  const [styles, api] = useSpring(() => ({
    x: 0,
    opacity: 1,
    config: { mass: 1, tension: 280, friction: 60 }
  }));

  return (
    <animated.div
      style={styles}
      onClick={() => api.start({ x: 100, opacity: 0.5 })}
    />
  );
}
```

### Framer Motion

Framer Motion uses a declarative API with explicit `initial`, `animate`, and `exit` states.

```jsx
import { motion } from 'framer-motion';

function Card() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    />
  );
}
```

### Comparison

| Library | Model | Use When |
|---------|-------|----------|
| GSAP | Timeline, duration-based | Complex sequences, scroll, precise control |
| Framer Motion | State-based, spring | React UI, hover/tap states, page transitions |
| React Spring | Physics (spring) | Physics-feel interactions, gesture response |
| Lottie | AE-exported JSON | Complex character/brand animations |
| CSS | Native, declarative | Simple transitions, hover states, performance-critical |

---

## 📋 Summary

| Technology | Inputs | Outputs | Best For |
|-----------|--------|---------|---------|
| Lottie | AE JSON | SVG/Canvas rendered | Complex, multi-layer animations on web/mobile |
| GSAP ScrollTrigger | JS elements | Scroll-driven animation | Scroll storytelling, parallax |
| CSS Keyframes | CSS `@keyframes` | Native browser animation | Simple loops, hover, low-complexity |
| WAAPI | JS element | Browser timeline | Programmatic, no library needed |
| Framer Motion | React components | State-driven animation | React UI interactions |
| React Spring | React hooks | Physics animation | Gesture-responsive UI |

---

## 🔗 Next Steps

[Module 8: Social Media Animation →](../Module-08-Social-Media-Animation/Reading.md)

---

## 📚 Further Reading

- [LottieFiles Documentation](https://docs.lottiefiles.com/)
- [GSAP Documentation](https://gsap.com/docs/v3/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Spring Documentation](https://www.react-spring.dev/)
- [Web Animations API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
