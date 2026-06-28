---
permalink: /35-Motion-Graphics-UI (User Interface)-Animation/Module-07-Lottie-Web-Animation/Reading/
title: "Module 7: Lottie & Web Animation"
---

# 🌐 Module 7: Lottie & Web Animation

## The Problem with GIFs

In 2015, Airbnb's design team had a problem. They'd built beautiful animations in After Effects for their iOS and Android apps. When they shipped them as GIF files, the animations looked terrible, blocky, degraded, massive file sizes. When they shipped them as MP4 videos, they couldn't control playback, pause, or respond to user interaction. When they tried to hire developers to recreate the animations in native iOS/Android code, the process took weeks and the results never matched the design.

They built Lottie to solve this. The framework converted AE animations to a JSON format that could be rendered natively by the device, at any resolution, with any playback speed, and with full programmatic control. It changed the industry.

---

## 🎯 What the Exam Tests: Lottie & Web Animation

> 🎯 **Exam Callout 1:** Lottie animations are exported from After Effects using the **Bodymovin** plugin (also called LottieFiles for After Effects). The output is a **.json** file. The exam tests: what file format does Lottie use? Answer: JSON.

> 🎯 **Exam Callout 2:** Lottie does NOT support: raster effects (Blur via the Effect menu), 3D camera animations, certain expressions, layer effects (glows, shadows via effects). It DOES support: shape layers, masks, trim paths, path animations. The exam presents a list and asks which one is NOT supported.

> 🎯 **Exam Callout 3:** The Airbnb engineering team built Lottie in **2015** to solve the problem of high-quality animations on mobile that couldn't be delivered via GIF (quality loss) or MP4 (no programmatic control). The exam may test the year or the specific problem Lottie was built to solve.

> 🎯 **Exam Callout 4:** In the GSAP ScrollTrigger API (Application Programming Interface), `scrub: true` links animation progress directly to scroll position. `scrub: 1` adds a 1-second lag between scroll position and animation progress, it smooths the animation. The exam tests: what does `scrub: true` do vs `scrub: 1`?

> 🎯 **Exam Callout 5:** The Web Animations API (WAAPI) is a **native browser API**, no library required. GSAP, Framer Motion, and React Spring are all libraries that sit on top of browser APIs. The exam may test: which animation approach requires no external library?

> 🎯 **Exam Callout 6:** Framer Motion uses `initial`, `animate`, and `exit` props for state-based animation. React Spring uses physics parameters (mass, tension, friction). The exam tests: which library uses spring physics parameters directly in the component API?

> 🎯 **Exam Callout 7:** GSAP's `gsap.timeline()` allows animations to be sequenced relative to each other using position parameters: `"-=0.2"` means overlap the previous animation by 200ms. The exam tests GSAP timeline position parameter syntax.

---

## ⚠️ Common Traps: Lottie & Web Animation

**Trap 1, Raster Effects in Lottie Exports:** A Gaussian Blur applied via Effect > Blur > Gaussian Blur will not export correctly to Lottie. The Lottie-compatible alternative is a Blur applied via the shape layer's built-in blur property, or by pre-rendering the blur as a separate PNG sequence. Students who add Blur effects through the Effect panel find their Lottie animations render blank layers.

**Trap 2, GSAP Licensing for Commercial Use:** GSAP is free for non-commercial use. For commercial projects, a paid "Business Green" or Club GSAP membership is required. The exam may test: is GSAP free for all projects? Answer: free for personal/non-commercial; paid license required for commercial.

**Trap 3 CSS `transition` vs `animation`:** `transition` responds to state changes (hover, class change). `animation` runs on load or via JavaScript class toggle. Students use `animation` when they want hover behavior `transition` is the correct tool. The exam may present a scenario where the correct choice between the two must be identified.

**Trap 4 React Spring Physics vs Duration:** React Spring uses mass/tension/friction not duration in milliseconds. There is no "duration: 300" in React Spring's default physics model. Students who move from GSAP to React Spring frequently try to set duration directly, which overrides the physics model and creates linear animation.

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

React Spring uses a physics-based model (spring mass/damping/stiffness), not duration-based keyframes.

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

## 📊 Web Animation Library Comparison Matrix

| Library | Paradigm | Bundle Size | Spring Physics | ScrollTrigger | React Integration | Learning Curve |
|---------|----------|-------------|----------------|---------------|-------------------|----------------|
| **GSAP** | Timeline / duration | ~67KB (core) | Via `Elastic` ease | Yes (plugin) | Works; not React-native | Medium |
| **Framer Motion** | State-based / spring | ~140KB | Yes (native) | Via `useScroll` | React-first | Low-Medium |
| **React Spring** | Physics (spring) | ~85KB | Yes (native) | Via `useScroll` | React-first | Medium |
| **CSS Keyframes** | Declarative | 0KB | No | No | Works everywhere | Low |
| **WAAPI** | Programmatic | 0KB | No | Manual | Works everywhere | Medium |
| **Lottie** | AE JSON playback | ~90KB | Via AE workflow | Manual | `lottie-react` | Low (if AE known) |
| **Motion One** | WAAPI wrapper | ~18KB | No | Yes | Works everywhere | Low |

---

## 🎬 Case Study: The Airbnb Lottie Origin, Engineering a Workflow

Lottie was not conceived as a product. It was an internal tool that escaped.

**The Problem (2015):**
Airbnb's design team had invested weeks building their iOS app onboarding animations in After Effects. The animations were subtle, physics-based, and brand-appropriate. The engineering team had three options for implementation: GIF (quality loss, large files), MP4 (no interactivity), or native code (expensive, imprecise, non-maintainable).

**The Solution:**
Brandon Withrow parsed the After Effects JSON output format (which AE uses internally). He wrote a renderer that could take that JSON and draw it frame-by-frame using Core Animation on iOS. The result: a pixel-perfect reproduction of the AE animation, rendered at 60fps, with full programmatic control.

**The Open-Source Decision:**
Airbnb released Lottie as open-source in 2015. The decision was competitive calculus: animation tooling was not Airbnb's competitive advantage; their product (travel bookings) was. Open-sourcing Lottie got them free engineering contributions from the community and built goodwill with designers and engineers globally.

**The Community's Response:**
Within 6 months, the open-source community had built Lottie renderers for Android, React Native, and the web (lottie-web). LottieFiles launched as a marketplace and hosting platform. By 2018, Lottie JSON had become a de facto standard for cross-platform animation.

**The 2024 State:**
Lottie is now maintained by LottieFiles (which acquired the original library from Airbnb). The dotLottie format (a zipped version of the JSON plus assets) reduces file sizes by 60–80% for complex animations. The format is supported in Figma, Rive, and Adobe products.

**What This Teaches:**
The motion/engineering boundary is where the most valuable skills live. A motion designer who understands the Lottie workflow (what exports cleanly, what doesn't, how programmatic control works) is 10x more valuable to a product team than one who only understands After Effects.

---

## 🗣️ Socratic Discussion Questions

1. Airbnb built Lottie in 2015 to solve the GIF/MP4 problem on mobile. But in 2026, native iOS and Android animation APIs are significantly more capable than in 2015. Under what circumstances would you still choose Lottie over native platform animation?

2. GSAP timelines allow precise control of animation sequences. Framer Motion uses a declarative, state-based model. Both can achieve the same visual result. Which paradigm is better for a team that includes both designers who prototype in Figma and developers who build in React?

3. The Web Animations API requires no library and is supported in all modern browsers. Yet most developers reach for GSAP or Framer Motion immediately. What is the legitimate case for using a library instead of the native WAAPI?

4. `prefers-reduced-motion` was covered in Module 6. How does it apply to Lottie animations specifically? LottieFiles provides a `speed` prop, setting it to 0 stops the animation, but doesn't fade out or replace it with a still. How would you correctly implement reduced-motion support for a Lottie animation?

5. GSAP requires a commercial license for commercial projects, but many studios use it without paying. What is the ethical position here, and how does using unlicensed tools affect your relationship with clients and your professional reputation?

---

## 📚 Further Reading

- [LottieFiles Documentation](https://docs.lottiefiles.com/), the full AE-to-Lottie workflow reference; covers Bodymovin options and supported/unsupported AE features
- [GSAP Documentation](https://gsap.com/docs/v3/), the best animation library documentation in frontend development; the ScrollTrigger and Timeline docs are particularly thorough
- [Framer Motion Documentation](https://www.framer.com/motion/), declarative API reference; the "gestures" and "transitions" sections are most exam-relevant
- [React Spring Documentation](https://www.react-spring.dev/), physics-based animation reference; the `useSpring` and `useTrail` hooks cover 80% of use cases
- [Web Animations API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) the native browser reference; understanding WAAPI makes all animation libraries make more sense
- *JavaScript for Web Designers* Mat Marquis (A Book Apart, 2016) the JavaScript fundamentals needed to understand GSAP and WAAPI without a full development background
