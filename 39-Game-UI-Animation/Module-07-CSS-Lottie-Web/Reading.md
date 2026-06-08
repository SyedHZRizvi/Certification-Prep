---
title: "Module 7: CSS Animation, Lottie & Rive, Web Animation Without JavaScript"
---

# 🌐 Module 7: CSS Animation, Lottie & Rive

## The LottieFiles Origin Story

In 2015, Airbnb's design engineering team led by Brandon Withrow faced a problem: their design team was creating complex animated illustrations in After Effects for the Airbnb app's onboarding screens, and the only way to ship those animations was as video files (.mp4). Video files were 500KB–2MB per animation, they couldn't be tinted or scaled dynamically, and they looked pixelated on high-DPI displays.

Withrow built **Lottie**, an open-source library that parses After Effects animations exported as JSON via the AE plugin **Bodymovin**, and renders them natively in iOS, Android, and the browser. The JSON file for the same animation was typically 20–80KB versus 500KB+ for video, it was infinitely scalable (vector-based), and it could be controlled programmatically (play, pause, seek, speed).

By 2018, Lottie was downloaded 40,000 times per day. By 2023, **LottieFiles** the marketplace and tooling platform built around the format hosted over 100 million animation files. Every major design app (Adobe After Effects, Adobe Animate, Figma Plugins, Haiku Animator) had an export pathway to Lottie.

The lesson is about more than a clever file format: it is about the power of choosing the right rendering primitive for the job. CSS handles stateless, declarative animation. Lottie handles complex After Effects exports. GSAP handles JavaScript-driven interactivity. Rive handles interactive, state-machine-driven illustrations. Each tool has its domain.

---

## 🎨 CSS Keyframe Animation: The Foundation

### @keyframes

```css
@keyframes slideInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.card {
  animation: slideInUp 0.5s ease-out both;
}
```

### Percentage-Based Keyframes

```css
@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.05); }
  100% { transform: scale(1); }
}
```

---

## ⚙️ Animation Properties Reference

| Property | Values | Notes |
|----------|--------|-------|
| `animation-name` | keyframe name | Links to @keyframes |
| `animation-duration` | `0.5s`, `300ms` | Required |
| `animation-timing-function` | `ease`, `ease-out`, `cubic-bezier()`, `steps()` | Easing |
| `animation-delay` | `0.2s`, `-0.1s` | Negative = already partway through |
| `animation-iteration-count` | `1`, `3`, `infinite` | How many times |
| `animation-direction` | `normal`, `reverse`, `alternate`, `alternate-reverse` | Playback direction |
| `animation-fill-mode` | `none`, `forwards`, `backwards`, `both` | State before/after |
| `animation-play-state` | `running`, `paused` | JS controllable |

### `animation-fill-mode`, Critical

| Value | Behavior |
|-------|----------|
| `none` | Returns to original state before/after animation |
| `forwards` | Holds the final keyframe state after animation ends |
| `backwards` | Applies first keyframe state during `animation-delay` |
| `both` | Applies backwards + forwards behavior |

> 🎯 **Exam Tip:** `animation-fill-mode: forwards` is required if you want an element to stay in its animated position after the animation completes. Without it, the element snaps back to its CSS-defined position when the animation ends.

---

## 🖥️ CSS Transitions vs. CSS Animations

| | CSS Transition | CSS Animation |
|--|---------------|---------------|
| Trigger | Property change (hover, class add) | Plays on attach (or delay) |
| Direction | A → B | Full keyframe sequence |
| Keyframes | No interpolates between states | Yes arbitrary keyframes |
| Loop | No | Yes, `infinite` |
| JS control | Via class manipulation | Via class + `animation-play-state` |
| Best for | Hover states, simple toggles | Complex sequences, looping |

---

## 🔧 GPU Acceleration: The Compositor Layer

The browser renders in three stages:
1. **Layout**: calculates box positions and sizes
2. **Paint**: fills pixels within each box
3. **Composite**: combines layers in order

Animating `transform` and `opacity` skips Layout and Paint, they go directly to Composite (GPU). This is why they are the only safe properties to animate for 60fps performance.

### Properties That Are GPU-Safe

| Property | Renderer Stage | 60fps Safe? |
|----------|---------------|------------|
| `transform` (translate, scale, rotate) | Composite | ✅ Yes |
| `opacity` | Composite | ✅ Yes |
| `filter` (blur, brightness) | Composite (on GPU) | ✅ Usually |
| `background-color` | Paint | ⚠️ No, triggers repaint |
| `width`, `height` | Layout | ❌ No, triggers layout |
| `top`, `left`, `margin` | Layout | ❌ No, triggers layout |
| `border-radius` | Paint | ⚠️ Depends |

### `will-change`

```css
.animated-card {
  will-change: transform;  /* Promote to GPU layer before animation */
}

/* After animation is done (remove with JS if dynamic): */
.animated-card {
  will-change: auto;  /* Restore normal layer */
}
```

> 🚨 **Trap on the exam:** Do NOT add `will-change: transform` to all elements as a "performance boost." Promoting too many elements to GPU layers consumes GPU memory and can actually reduce performance. Apply it only to elements you know will animate.

---

## 🎬 LottieFiles Workflow

### Step 1: Create in After Effects

Design the animation in After Effects. Best practices for Lottie export:
- Use **solid layers, shape layers, and text**, avoid raster effects, 3D layers, expressions that aren't Bodymovin-compatible
- Keep layers under 50 for reasonable JSON size
- No pre-compositions beyond 2 levels deep if possible
- Avoid `time` expressions (they don't export cleanly to Lottie JSON)

### Step 2: Export with Bodymovin

Install the Bodymovin plugin for After Effects. File → Scripts → Bodymovin. Export options:
- **Renderer**: Lottie JSON (standard) or SVG (for high-fidelity browser rendering)
- **Include hidden**: off (excludes hidden layers from JSON)
- **Compress**: on for production

### Step 3: Optimize

**Target: < 50KB** for a web animation (best practice; LottieFiles homepage states this as the production target).

Optimization techniques:
- **LottieFiles Optimizer**: online tool that lossily reduces keyframe precision (reduces file size 20–60%)
- **Remove hidden layers**: clean up AE project before export
- **Reduce keyframe count**: bake complex expressions to keyframes, then reduce in AE's Graph Editor
- **Simplify shapes**: fewer anchor points = smaller JSON

### Step 4: Implement with Lottie Web Player

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.x.x/lottie.min.js"></script>

<div id="animation-container"></div>

<script>
const animation = lottie.loadAnimation({
  container: document.getElementById('animation-container'),
  renderer: 'svg',          // 'svg', 'canvas', or 'html'
  loop: true,
  autoplay: true,
  path: '/animations/loading.json'
});

// Control API
animation.play();
animation.pause();
animation.stop();
animation.setSpeed(2);             // 2x speed
animation.goToAndStop(50, true);  // go to frame 50, paused
animation.playSegments([10, 50], true);  // play frames 10–50
</script>
```

### Lottie Renderer Types

| Renderer | Pros | Cons |
|---------|------|------|
| **SVG** | Best quality, scalable, DOM-inspectable | Slower for complex paths |
| **Canvas** | Faster for complex animations | Not accessible, pixel-based |
| **HTML** | DOM elements, best for text | Most complex, browser differences |

---

## 🎮 Rive: The Interactive Animation Platform

**Rive** (formerly 2Dimensions) is the next-generation alternative to Lottie, built specifically for interactive animation. Where Lottie plays back a pre-exported timeline, Rive has its own **state machine system** that works in the browser, iOS, Android, Unity, and Unreal.

### Rive vs. Lottie

| | Lottie | Rive |
|--|--------|------|
| Source tool | After Effects | Rive editor (web-based) |
| Runtime | Playback only | Interactive state machine |
| File size | JSON (20–80KB typical) | .riv binary (5–30KB typical) |
| Interactivity | None natively | First-class: inputs drive state machine |
| Animation type | Pre-exported timeline | Real-time, responsive to JS/game inputs |
| Best for | Icon animations, loaders, illustrations | Buttons, micro-interactions, game UI |

### Rive Web Runtime Example

```javascript
import Rive from '@rive-app/webgl';

const riveInstance = new Rive({
  src: '/animations/button.riv',
  canvas: document.getElementById('canvas'),
  autoplay: true,
  stateMachines: 'State Machine 1',
  onLoad: () => {
    // Get state machine inputs
    const inputs = riveInstance.stateMachineInputs('State Machine 1');
    const hoverInput = inputs.find(i => i.name === 'Hover');
    const pressInput = inputs.find(i => i.name === 'Press');
    
    canvas.addEventListener('mouseenter', () => { hoverInput.value = true; });
    canvas.addEventListener('mouseleave', () => { hoverInput.value = false; });
    canvas.addEventListener('click', () => { pressInput.fire(); });
  }
});
```

---

## ♿ Accessibility: `prefers-reduced-motion`

The **`prefers-reduced-motion`** CSS media query detects whether the user has enabled "Reduce Motion" in their operating system settings (macOS: Accessibility → Display; iOS: Accessibility → Motion; Windows: Ease of Access → Display).

```css
/* Default: full animation */
.card {
  animation: slideInUp 0.5s ease-out both;
  transition: transform 0.3s ease;
}

/* Reduce motion: disable or simplify */
@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
    transition: opacity 0.1s linear;  /* keep opacity but remove motion */
  }
}
```

### JavaScript Check

```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  gsap.from('.hero', { y: 40, opacity: 0, duration: 0.6 });
} else {
  gsap.from('.hero', { opacity: 0, duration: 0.2 });  // fade only
}
```

> 🎯 **Exam Tip:** The WCAG 2.1 guideline 2.3.3 (AAA level) states that users should be able to disable motion that lasts more than 5 seconds or that repeats. The 2.3.1 (AA level) guideline is about content that flashes more than 3 times per second. Implementing `prefers-reduced-motion` is the standard accessibility practice for motion designers.

---

## 📊 Lottie vs. Rive vs. CSS Animation, Full Comparison Matrix

Choosing the wrong animation tool for a given scenario is a common cause of both performance problems and unnecessary development complexity. This matrix covers the five key decision factors.

| Factor | CSS Animation | Lottie | Rive |
|---|---|---|---|
| **Source tool** | Code editor / Figma → CSS | After Effects + Bodymovin plugin | Rive editor (web-based) |
| **Runtime** | Browser native (zero library) | lottie-web JS library (~150KB) | @rive-app runtime (~40KB) |
| **File format** | CSS in stylesheet | JSON (text; 20–200KB typical) | .riv binary (5–30KB typical) |
| **File size** | N/A (CSS) | 20–80KB (optimized), 200KB+ (unoptimized) | 5–30KB |
| **Interactivity** | Via JS class manipulation | None natively | First-class state machine inputs |
| **Looping control** | `animation-iteration-count` | `loop: true/false` + `playSegments()` | State machine drives loop |
| **Scroll control** | Via JS + Intersection Observer | Manual frame seek with JS | Input values drive state machine |
| **Vector quality** | CSS-defined (always crisp) | Fully vector (SVG renderer) | Fully vector |
| **Text support** | Full | Limited (export restrictions) | Yes |
| **3D support** | CSS 3D transforms (not real 3D) | No | No |
| **Accessibility** | Full (ARIA, prefers-reduced-motion) | Partial (add aria-label to container) | Partial |
| **After Effects workflow** | No | Yes (primary use case) | No |
| **State machine** | No | No | Yes |
| **Best for** | Hover states, transitions, loaders | Complex AE illustrations, icon animation, onboarding | Interactive buttons, game UI, animated logos |
| **Performance risk** | Layout-triggering properties | Large/complex JSON files; SVG renderer on complex paths | Canvas rendering on very old browsers |

---

## ⚠️ Performance Trap: Particle Systems and Complex Filters on Mobile Web

Two specific web animation patterns that appear safe but cause severe mobile performance problems:

**1. CSS `filter: blur()` animation**

Animating `filter: blur()` is GPU-composited on Chrome desktop and Firefox desktop. On iOS (all browsers use WebKit) and most Android WebViews, `filter: blur()` is rendered by the CPU, the browser repaints the filtered layer every frame. A single animated blur element can consume 3–5ms per frame on mid-range Android, leaving only 11–13ms for the rest of the render pipeline.

Fix: Pre-render a blurred version of the element (as a separate DOM element or a background-image), then animate `opacity` to cross-fade between the sharp and blurred versions.

**2. Lottie SVG renderer with complex paths**

The Lottie SVG renderer draws paths to SVG elements in the DOM. Complex AE animations with 50+ shape layers generate 50+ SVG elements, each re-drawn every frame. On mobile Safari, SVG path rendering is significantly slower than Canvas 2D rendering.

Fix: For complex Lottie animations on mobile, switch to `renderer: 'canvas'` instead of `renderer: 'svg'`. Canvas rendering batches all draw operations into a single `<canvas>` element, dramatically reducing browser overhead. Tradeoff: Canvas output is not DOM-inspectable and cannot be styled with CSS.

| Renderer | DOM Elements | Mobile Performance | Accessibility | Crisp at HiDPI |
|---|---|---|---|---|
| SVG | N (one per layer) | Medium, struggles with complex paths | Yes (SVG is accessible) | Yes |
| Canvas | 1 (canvas element) | High, single bitmap draw target | No (use aria-label) | Requires `devicePixelRatio` scaling |
| HTML | N (div per layer) | Low, complex layout recalcs | Yes | Yes |

---

## 📊 Summary: Web Animation Tool Decision Matrix

| Scenario | Best Tool |
|---------|----------|
| Simple hover state, one property | CSS transition |
| Complex looping illustration exported from AE | Lottie |
| Interactive button / micro-interaction with states | Rive |
| Scroll-triggered reveal sequence | GSAP ScrollTrigger |
| React component entrance/exit | Framer Motion |
| Complex JavaScript-driven timeline | GSAP Timeline |
| Layout animation (card expand, grid reorder) | GSAP Flip or Framer Motion layout prop |
| Animated icon that responds to user input | Rive |

---

## 🎯 Exam Callouts: What the Test Checks

> 🎯 **What the exam tests 1:** What does `animation-fill-mode: forwards` do and why is it important? It holds the final keyframe values after the animation completes. Without it, the animated element snaps back to its original CSS-defined values. This is the most commonly tested CSS animation property after `animation-duration`.

> 🎯 **What the exam tests 2:** What is the rendering stage difference between `transform` and `top/left` in CSS animation? `transform` triggers only the Composite stage (GPU). `top`/`left` trigger Layout + Paint + Composite, three stages instead of one. This is why `transform` is always preferred for animations.

> 🎯 **What the exam tests 3:** What After Effects features cannot be exported to Lottie? 3D layers, 3D cameras, complex expressions (must be baked to keyframes), raster effects (Gaussian Blur in AE → use shape blur layer), and video footage layers.

> 🎯 **What the exam tests 4:** When should you use Lottie `renderer: 'canvas'` vs. `'svg'`? Canvas for mobile and complex animations, better performance, single DOM element. SVG for desktop and animations that need CSS styling or DOM accessibility. HTML renderer for text-heavy animations with browser typography requirements.

> 🎯 **What the exam tests 5:** What Rive input type maps to Unity's Trigger parameter concept? The **Trigger** input type in Rive, it fires once (`input.fire()`) and does not persist, equivalent to Unity's Trigger parameter that auto-resets after consuming a transition.

> 🎯 **What the exam tests 6:** What WCAG guideline covers `prefers-reduced-motion` implementation? WCAG 2.1 Guideline 2.3.3 (AAA level), users can disable motion lasting > 5 seconds or repeating motion. WCAG 2.3.1 (AA level) covers content flashing > 3× per second (seizure risk, stricter).

> 🎯 **What the exam tests 7:** What is `animation-delay: -0.5s` (negative delay) used for? It starts the animation 0.5 seconds **into** the clip immediately, the animation appears to have already been playing for 0.5 seconds when the element renders. Used for staggered entry of pre-playing looping animations (e.g., a waving flag that appears already in motion).

> 🎯 **What the exam tests 8:** What is the Lottie production target file size and how do you achieve it? Under 50KB. Achieved via: LottieFiles Optimizer (lossily reduces keyframe precision), removing hidden layers from AE before export, reducing keyframe count in AE's Graph Editor, simplifying shape paths (fewer anchor points).

> 🎯 **What the exam tests 9:** Why does `will-change: transform` hurt performance when applied globally? Each element with `will-change: transform` is promoted to a dedicated GPU compositing layer. GPU layers consume VRAM. Promoting every element on a page (via a global rule) can exhaust VRAM on mobile devices, causing the GPU to fall back to software rendering, the opposite of the intended effect.

> 🎯 **What the exam tests 10:** What is the key difference between `animation-direction: alternate` and `animation-direction: reverse`? `reverse` plays the keyframes from 100% to 0% on every iteration. `alternate` plays 0%→100% on odd iterations and 100%→0% on even iterations, creating a ping-pong effect that is smoother for looping animations like pulses and breathes.

---

## ⚠️ Common Misconceptions

> **Misconception 1: "Lottie files are always small."**
> Reality: Lottie files can be 200KB+ for complex AE animations. The 50KB target requires deliberate optimization. Run every Lottie file through LottieFiles Optimizer before shipping.

> **Misconception 2: "`animation-fill-mode: forwards` is the default."**
> Reality: The default is `none`. Without `forwards`, your animation element snaps back to its original CSS-defined state when the animation ends.

> **Misconception 3: "will-change improves performance for everything."**
> Reality: will-change consumes GPU memory. Apply it only to elements you know will animate; remove it after animation ends for dynamic cases.

> **Misconception 4: "Rive is just a better Lottie."**
> Reality: Rive and Lottie solve different problems. Lottie plays back AE exports. Rive is a real-time state machine for interactive illustrations. If your animation is purely playback, Lottie's AE integration is hard to beat; if you need interactivity, Rive is superior.

---

## 🔗 Next Steps

**Next Module:** [Module 8: Game VFX & Shaders →](../Module-08-Game-VFX-Shaders/Reading.md)

We return to game engines for the final module: Unity VFX Graph, Unreal Niagara, shader graphs for stylized effects, and the art of juice.

---

## 📚 Further Reading

- 🔗 [LottieFiles, Lottie Web Player Documentation](https://airbnb.io/lottie/#/web)
- 🔗 [Rive Documentation](https://rive.app/community/doc/)
- 🔗 [MDN Web Docs, CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- 🔗 [MDN Web Docs, prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- 📄 Brandon Withrow, "Lottie: Bringing Animations to Native Apps" (2017), Airbnb Engineering Blog
- 📄 Google Developers, "FLIP Your Animations: CSS Transforms vs JavaScript" (Paul Lewis)

*[Module complete, see README for next steps and related tracks.]*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*
