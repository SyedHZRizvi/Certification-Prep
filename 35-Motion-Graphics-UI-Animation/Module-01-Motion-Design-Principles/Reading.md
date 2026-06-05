---
permalink: /35-Motion-Graphics-UI-Animation/Module-01-Motion-Design-Principles/Reading/
title: "Module 1: Motion Design Principles"
---

# 🎬 Module 1: Motion Design Principles

## The Day a Bouncing Ball Changed Everything

In 1981, Frank Thomas and Ollie Johnston — two of Disney's legendary "Nine Old Men" — published *The Illusion of Life*. The book documented twelve principles they and their colleagues had developed over fifty years of frame-by-frame animation. The principles were written for hand-drawn characters in feature films.

Forty-three years later, those same twelve principles govern every animation that ships at Apple, Stripe, and Airbnb. The vocabulary changed. The physics did not.

This module is about understanding *why* those principles work, not just *what* they are. Because once you understand the why — the perceptual psychology, the physics of real-world motion, the neuroscience of how the eye tracks moving objects — you can apply them to a loading spinner, a button hover state, or a 90-second broadcast open with equal confidence.

---

## 🔬 Disney's 12 Principles — Applied to Motion Graphics

### 1. Squash and Stretch

**The Disney Version:** A bouncing ball compresses when it hits the ground (squash) and elongates while in the air (stretch). Volume is preserved.

**The Motion Graphics Version:** A circle animating onto screen can scale from `0,0` to `100,120` before settling at `100,100`. It feels alive. At `0,0` to `100,100` with no overshoot, it feels mechanical.

**The Rule:** The faster an object moves, the more it should stretch in the direction of motion. At rest, it should feel solid (no distortion). The total volume (or visual weight) doesn't change even as shape changes.

**Applied:** Notification badges. The red dot that appears on an app icon in iOS squashes when it lands, then settles. Remove that squash/stretch and it feels dead. Add it and it feels like a living thing.

| Squash Amount | Perception |
|---------------|------------|
| 0% | Mechanical, digital, cold |
| 10–20% | Slightly physical, UI-appropriate |
| 30–50% | Cartoon, playful, high-energy |
| 60%+ | Rubbery, character animation territory |

### 2. Anticipation

**The Disney Version:** Before a character jumps, they crouch. The wind-up communicates what's coming. The brain prepares.

**The Motion Graphics Version:** Before a card slides in from the left, it moves slightly to the right first. Before a button scales up on hover, it scales down a hair first. This tiny movement signals: *something is about to happen.*

**Why It Works:** The visual cortex uses anticipatory motion to predict trajectory. When motion is telegraphed, the brain processes it faster and perceives it as more natural. Without anticipation, motion appears to "pop."

**Applied:** The Stripe homepage hero animation. Elements don't simply appear — they have a tiny pull-back before each entrance. Timing: anticipation is usually 15–25% of the total animation duration.

### 3. Staging

**The Disney Version:** Every scene is composed so the audience's eye is led to the most important element. The background doesn't compete with the foreground character.

**The Motion Graphics Version:** In a 30-second infographic, only one element moves at a time. The eye follows the motion. If two elements animate simultaneously and fight for attention, the viewer's eye doesn't know where to look and both messages are lost.

**The Rule:** One primary motion per scene. Supporting animations (secondary motion, environmental details) should be at least 40% smaller in scale or offset in time.

**Applied:** Apple keynote slide transitions. When a product image slides in, all text fades in *after* the image settles. The hierarchy is non-negotiable: product first, copy second.

### 4. Straight Ahead and Pose-to-Pose

**The Disney Version:** Straight-ahead = animate from frame 1 forward in sequence. Pose-to-pose = block out key poses first, then fill in the in-betweens.

**The Motion Graphics Version:** Every keyframe-based animation tool (After Effects, GSAP, CSS animations) is fundamentally pose-to-pose. You define the start state and the end state; the software fills in the in-betweens.

**The Practical Takeaway:** This is *why* easing matters. When software fills in the in-betweens with linear interpolation, the result looks mechanical because real-world objects don't move at constant velocity. The easing curve is how you tell the software what a *natural* in-between looks like.

### 5. Follow-Through and Overlapping Action

**The Disney Version:** When a character stops running, their coat tail keeps moving. Different parts of the body stop at different times. Heavy things stop later than light things.

**The Motion Graphics Version:** When a headline text block slides into position, the subhead follows with a 2-frame delay. When a list of items enters the frame, each item is offset by 50–80ms. Nothing starts or stops simultaneously.

**The Formula for Staggering:**
```
Stagger delay = total_animation_duration * 0.15 * item_index
```
For a 400ms animation, items would stagger at 0ms, 60ms, 120ms, 180ms, etc.

**Applied:** Every list, every set of cards, every navigation menu in good UI design. Linear stagger looks mechanical. Exponential stagger (each delay slightly shorter than the last) feels more natural.

### 6. Slow In and Slow Out (Easing)

**The Disney Version:** Objects in the real world accelerate to their top speed and decelerate before stopping. Nothing starts or stops at full velocity instantaneously (except light).

**The Motion Graphics Version:** This is the easing curve. In CSS: `ease-in-out`. In AE: the Graph Editor. In GSAP: `gsap.to(el, {ease: "power2.inOut"})`.

**The Four Core Curves:**

| Curve | CSS | Behavior | Use Case |
|-------|-----|----------|----------|
| Linear | `linear` | Constant velocity | Progress bars, countdowns |
| Ease-In | `ease-in` | Slow start, fast finish | Elements exiting the screen |
| Ease-Out | `ease-out` | Fast start, slow finish | Elements entering the screen |
| Ease-In-Out | `ease-in-out` | Slow at both ends | Elements moving across the screen |
| Spring | Custom bezier | Overshoot + settle | Playful, physical UI; iOS-style |
| Bounce | Custom | Multiple overshoots | Gamification, high-energy content |

> 🎯 **Exam Tip:** Ease-Out for entrances, Ease-In for exits. This rule is not a preference — it's physics. Things entering your view are decelerating (you perceive them arriving). Things leaving are accelerating away. Linear motion always looks wrong for directional movement.

### 7. Arcs

**The Disney Version:** Almost all natural motion follows arc trajectories, not straight lines. A thrown ball, a pendulum, a human arm — all arc.

**The Motion Graphics Version:** When an icon moves from corner to corner of the screen, it should follow a gentle arc, not a diagonal line. In AE, this means using the Motion Path and curving it.

**Why It Matters:** Straight-line motion reads as synthetic. Arc motion reads as physical. The eye has millions of years of experience with arc motion (projectiles, pendulums, living limbs). Straight-line motion exists almost only in machines.

**Applied:** Apple's iOS app icon grid animations. Every icon transition follows an arc. Remove the arc and the grid feels like a spreadsheet.

### 8. Secondary Action

**The Disney Version:** While a character walks (primary action), their arms swing and their hair bounces (secondary actions). Secondary action adds richness and believability.

**The Motion Graphics Version:** While a headline text slides in (primary), a subtle grain texture on the background gently shifts (secondary). While a chart bar grows (primary), a small percentage counter ticks up (secondary).

**The Trap:** Secondary action should never upstage primary action. If viewers look at the secondary action instead of the primary, you've staged it wrong.

### 9. Timing

**The Disney Version:** The number of frames an action takes determines its weight, speed, and emotional character. 8 frames for a quick action, 24 frames for a slow, heavy one.

**The Motion Graphics Version:** Duration in milliseconds maps directly to perceived weight.

| Duration | Perception |
|----------|------------|
| 50–100ms | Instant, snappy, lightweight |
| 100–200ms | Quick, responsive, UI-appropriate |
| 200–400ms | Comfortable, standard, most UI transitions |
| 400–700ms | Deliberate, prominent, hero animations |
| 700ms–1.5s | Cinematic, brand, intro sequences |
| 1.5s+ | Slow, meditative, or wrong |

> 🚨 **Trap on the Exam:** The Google Material Design guidelines specify 200–300ms for standard UI transitions. The Apple HIG specifies ~250ms for most transitions. Both are derived from the same human-perception research — it's not arbitrary.

### 10. Exaggeration

**The Disney Version:** Reality is boring. Push the extremes to make the key moments register emotionally.

**The Motion Graphics Version:** In broadcast motion graphics, everything is pushed 15–30% beyond what you'd use in UI design. Faster cuts, bigger scale changes, more contrast between states. The screen is competing with real life and other content for attention. You must earn the eye.

**The Calibration:**
- **UI/Product animation:** Minimal exaggeration. The product is the hero.
- **Brand animation:** Moderate exaggeration. The brand personality is expressed.
- **Broadcast/Title sequences:** High exaggeration. Competition for attention is maximum.

### 11. Solid Drawing (→ Solid Design)

**The Disney Version:** Characters must read as 3D forms with weight, even though they're drawn on flat paper.

**The Motion Graphics Version:** Every animated element must have clear visual hierarchy. If a shape doesn't read clearly when frozen on any given frame, the animation is failing. You should be able to pause a motion graphics piece on any frame and have it function as a well-designed still.

### 12. Appeal

**The Disney Version:** Characters must be compelling to watch — not necessarily beautiful, but interesting.

**The Motion Graphics Version:** This is taste. A motion graphic has appeal when it moves with purpose, when each animated element earns its screen time, when the pacing respects the viewer's attention. Appeal is the hardest principle to teach and the most important to develop.

---

## 🎯 What the Exam Tests: Disney's 12 Principles

> 🎯 **Exam Callout 1:** The exam frequently asks which principle explains why elements entering the screen should use **Ease-Out** (not Ease-In). The answer: Slow Out for entrances — the element is decelerating into view, mimicking the physics of an object arriving.

> 🎯 **Exam Callout 2:** Squash and Stretch is the one principle that is **always optional in UI design** but mandatory in character animation. The exam may test: which principle is MOST violated in pure typographic motion graphics? Answer: Squash and Stretch — most designers don't apply it to text.

> 🎯 **Exam Callout 3:** Staging, not Anticipation, is the principle that governs **how many things can move simultaneously**. Know the distinction: Anticipation = wind-up before an action. Staging = one primary motion at a time.

> 🎯 **Exam Callout 4:** The principle of **Follow-Through and Overlapping Action** is the foundation of stagger animation in CSS and GSAP. When you write `stagger: 0.1` in GSAP, you are applying Follow-Through to a list of elements.

> 🎯 **Exam Callout 5:** Appeal is the most subjective of the 12 principles and the only one with no formula. The exam will not ask you to define it quantitatively — it will ask you to identify which principle is being violated when a motion graphic "doesn't feel worth watching."

> 🎯 **Exam Callout 6:** The principle of **Arcs** is the most violated in digital motion work. CSS `transition: left 300ms ease` moves an element in a straight line. Creating true arc motion requires either Motion Path (AE) or transform-based JavaScript animation. The exam may ask which CSS property creates arc motion — the answer is `offset-path` (motion path spec), not `transition`.

> 🎯 **Exam Callout 7:** Secondary Action should never be added until the primary animation is locked. If secondary action distracts, the staging is wrong — not the secondary action itself.

---

## ⚠️ Common Traps: Principles in Practice

**Trap 1 — Easing Direction Confusion:** Ease-In accelerates INTO the motion (slow start, fast end). Ease-Out decelerates OUT of the motion (fast start, slow end). The names are counterintuitive: Ease-In *starts* slow, not ends slow. This trips up almost every exam-taker.

**Trap 2 — Exaggeration Calibration:** Students routinely over-exaggerate UI animations. Adding 40% squash to a button press creates a cartoon, not a product. The Module 1 calibration table (10–20% for UI) is the rule.

**Trap 3 — Timing Units:** Disney's principles were expressed in **frames**. Modern motion design uses **milliseconds**. 8 frames at 24fps = 333ms. 12 frames at 24fps = 500ms. The exam may present both; know the conversion.

**Trap 4 — Spring vs Bezier:** Spring animations can't be expressed as cubic bezier curves. When the exam asks for the CSS syntax for spring-based animation, there is no correct CSS answer — springs require JavaScript (GSAP Elastic, React Spring, Framer Motion). CSS has `linear()` function easing (CSS 2023) but not true spring physics.

---

## 🏢 Buck's 5 Principles of Motion Design

Buck (the studio behind Google's motion identity, Headspace, and Apple TV+) has articulated five principles that extend the Disney framework for the motion graphics context:

### 1. Purpose
Every animation must answer the question: *why is this moving?* If you can't answer that question, don't animate it. Motion draws attention. Attention is the user's most limited resource. Wasting it with decorative animation is a design failure.

### 2. Clarity
If the animation doesn't make the idea clearer, it's obscuring the idea. Animation should reveal relationships, demonstrate sequences, and guide attention — not decorate.

### 3. Character
The *how* of motion communicates the brand. A fast, sharp, geometric animation communicates precision and confidence. A slow, organic, curved animation communicates warmth and approachability. Buck's work for Headspace uses the second vocabulary deliberately.

### 4. Continuity
Related elements should move with related logic. If circles ease in with a spring, and squares ease in with a linear interpolation, the visual grammar is incoherent. Define a motion vocabulary and apply it consistently.

### 5. Economy
The simplest motion that achieves the goal is the right motion. Buck's work is notable for what it *doesn't* do — for the restraint that makes the moments of exaggeration land harder.

---

## 🍎 How Apple, Stripe, and Airbnb Think About Motion

### Apple's Motion Language

Apple's motion design is defined by two principles above all others: **physics-based spring animations** and **purposeful staging**.

Every iOS transition is a spring: it has mass, stiffness, and damping. The developer-facing API is `UISpringTimingParameters`. The design-facing vocabulary is "feel heavy/light" and "feel bouncy/stiff." This is not metaphor — there is a literal physics simulation running behind every animation in UIKit.

The staging rule: one thing at a time. In an iOS alert, the overlay fades in, then the card scales up. Never simultaneously. The hierarchy is always: context first, content second.

> **The Apple HIG on Motion:** "Use motion purposefully. Gratuitous animation can distract users and impede performance." The document then specifies exactly which transitions use which timing curves. Apple's self-imposed discipline is why their animations feel different from competitors.

### Stripe's Motion Language

Stripe's web animations are defined by **three gradient orbs** that have become the brand's most recognizable motion element. The orbs move slowly, blending and separating on a dark background, communicating "complex technology working quietly." The motion is:
- Slow (4–8 second cycles)
- Organic (Perlin noise-driven paths, not bezier curves)
- Non-functional (purely brand, not UI-communicative)

This is the rare case where decorative animation is appropriate: Stripe's homepage is establishing a brand feeling, not communicating feature information.

For their product UI (the dashboard), Stripe uses completely conventional motion: 200–300ms ease-in-out for all transitions, with a strong preference for opacity fades over positional movement. The contrast between hero/brand animation and product/functional animation is deliberate.

### Airbnb's Motion Language

Airbnb's motion work is defined by their open-source contribution: **Lottie**. The framework was built by their engineering team when they needed high-quality animations that could ship on mobile without destroying performance.

Airbnb's motion philosophy: **motion should feel like the product, not like a demo.** Their animations are subtle, their timings are short, and their vocabulary is consistent. The one area where they push: map animations and place thumbnails. Those transitions use slightly longer durations (350–450ms) and more pronounced easing because the subject matter (travel, places, discovery) warrants a more emotional quality.

### Linear.app's Motion Language

Linear has become one of the most-cited motion design references in product design circles. Their motion vocabulary is defined by three commitments: speed, consistency, and deliberate character expression.

Linear's published motion spec breaks all animations into three categories: **quick** (80–150ms, for hover states and micro-reactions), **comfortable** (200–300ms, for panel transitions and modal dialogs), and **deliberate** (300–500ms, for onboarding moments and feature discoveries). Every designer on their team is required to reference this taxonomy before specifying any animation.

Their easing signature is a custom cubic bezier that sits between ease-out and spring — fast start, slight overshoot, precise settle — giving the product a "snappy but physical" feel without the playfulness of a full spring.

### The Apple Keynote Motion System in Practice

The Apple keynote slide transition system is one of the most studied motion systems in the industry. Key rules observed across 2019–2025 keynotes:

- **Product photography enters before copy** — always. The rule is iron-clad across all slides.
- **Text enters per-word, not per-character** — character-by-character animation would be too slow for keynote pacing.
- **Exit animations are slower than entrances** — elements leaving get 30–40% more time than elements arriving.
- **No two slides use the same transition type consecutively** — alternating dissolves with slide transitions prevents monotony.
- **Color reveals always go from light to dark** — warm hues before cool, saturated before neutral.

> 🎯 **Exam Callout 8:** The Apple HIG (Human Interface Guidelines) specifies that reduced motion must be supported as a system setting. Any animation that cannot be replaced with a simple opacity fade when the user enables reduced motion is non-compliant. This is a design requirement, not an accessibility suggestion.

---

## 📊 Ease Curve Comparison Table

| Curve | CSS Syntax | AE Equivalent | GSAP Equivalent | Perceived Feel | Best Use Case |
|-------|-----------|---------------|-----------------|----------------|---------------|
| Linear | `linear` | Linear keyframe | `"none"` | Robotic, mechanical | Progress bars, countdowns |
| Ease | `ease` | Default AE | `"power1.inOut"` | Gentle, generic | Fallback when unsure |
| Ease-In | `ease-in` | Ease-In AE | `"power2.in"` | Accelerates away | Exit animations |
| Ease-Out | `ease-out` | Ease-Out AE | `"power2.out"` | Decelerates into | Entrance animations |
| Ease-In-Out | `ease-in-out` | Easy Ease AE | `"power2.inOut"` | Smooth, natural | Cross-screen movement |
| Spring (approx.) | `cubic-bezier(.34,1.56,.64,1)` | None (expression) | `"elastic.out(1,.75)"` | Bouncy, alive | Playful UI, app icons |
| Bounce | N/A (complex) | Expression only | `"bounce.out"` | Cartoon, playful | Gamification, rewards |
| Custom | `cubic-bezier(x1,y1,x2,y2)` | Graph Editor | `CustomEase.create()` | Variable | Brand signature |

---

## ⏱️ Timing Curves in Depth

### The Bezier Curve Explained

Every easing function is a cubic bezier curve defined by four points: the start (0,0), two control points (x1,y1) and (x2,y2), and the end (1,1). The x-axis is time; the y-axis is progress.

```
CSS cubic-bezier(x1, y1, x2, y2)

Examples:
linear:       cubic-bezier(0, 0, 1, 1)
ease:         cubic-bezier(0.25, 0.1, 0.25, 1.0)
ease-in:      cubic-bezier(0.42, 0, 1.0, 1.0)
ease-out:     cubic-bezier(0, 0, 0.58, 1.0)
ease-in-out:  cubic-bezier(0.42, 0, 0.58, 1.0)
```

The control points with values outside [0,1] create spring/bounce effects (the animation overshoots the target).

### Spring Physics

A spring animation is not a bezier curve — it's a physics simulation. The parameters:

| Parameter | Effect |
|-----------|--------|
| **Mass** | Heavier = slower oscillation |
| **Stiffness** | Stiffer = faster, less bounce |
| **Damping** | Higher = less oscillation, settles faster |
| **Initial velocity** | Adds momentum from a previous gesture |

CSS does not natively support spring physics (as of 2026). Spring animations in web contexts require GSAP (`Elastic` or `Back` eases), React Spring (`useSpring`), or Framer Motion (`type: "spring"`).

### Rhythm and Contrast in Motion

Rhythm in motion design works like rhythm in music: it's the relationship between the durations and pauses of animated events. A sequence where every element takes 300ms feels monotonous. A sequence that alternates 200ms and 500ms durations, with deliberate pauses, feels composed.

**Contrast** in motion works like contrast in design: you need dark values to make light values read, and you need slow/static moments to make fast/kinetic moments feel fast.

> 🎯 **Exam Tip:** If a motion piece feels "busy" or "flat," the fix is almost always introducing *more contrast* — making the fast moments faster and the slow moments slower — not reducing the total amount of motion.

### The Flow State in Motion Design

**Flow** in motion graphics is the perceptual experience of transitions between states that feel inevitable rather than arbitrary. A timeline of motion events has flow when:
1. Each element finishes before the next primary element begins (or overlaps in a way that feels intentional, not accidental)
2. The timing respects the viewer's perceptual speed — neither too fast to follow nor slow enough to wait for
3. The direction of motion is consistent with spatial relationships (elements from the left that appear to be "arriving" enter from the left)

---

## 🎬 Case Study: The Spotify Wrapped Motion System

Every December, Spotify Wrapped becomes the most-shared animated content on social media. The motion system behind it is a masterclass in applying the 12 principles at scale.

**The Core Motion Vocabulary:**
- **Squash and Stretch:** Every number reveal uses a scale-bounce (105% overshoot, settle to 100%)
- **Staging:** Each "your top artist" card reveals one stat at a time, never two simultaneously
- **Follow-Through:** Confetti elements continue moving after the card settles — heavy pieces fall slower
- **Slow In and Slow Out:** All transitions use ease-in-out; nothing is linear
- **Appeal:** The bold color system (oversaturated, high-contrast) makes every frame feel like a poster

**The Structural Decision:** Spotify Wrapped is designed for portrait orientation (9:16), scroll-driven, and built to be screen-recorded and shared. Every design decision optimizes for a 3-second viewership window. This is why the stats are enormous and typography is never subtle.

**What to Learn:** Large type + high contrast + one stat per screen + spring animations = sharable social content. The 12 principles don't change — only the calibration does.

**The Airbnb Lottie Origin Story — Full Case Study:**

In 2015, Airbnb's design team built a loading animation for their iOS app. When they shipped it:
- As a **GIF**: colors degraded to 256 colors; the animation looked nothing like the After Effects source
- As **MP4**: playback couldn't be paused, reversed, or speed-controlled; the animation played whether or not the user needed it
- **Native iOS code**: engineering rebuilt the animation from scratch; it took 2 weeks and still didn't match the design exactly

Brandon Withrow, an iOS engineer, proposed a different approach: parse the After Effects project file and render it natively. He built the first version of Bodymovin (the AE exporter) and the Lottie iOS renderer over a weekend. Within months, the entire Airbnb design team was using it. It shipped open-source in 2015.

**The key insight:** Lottie solved not just a technical problem but a **workflow problem**. The designer makes the decision in After Effects; the engineer implements it by dropping in a JSON file. No translation layer. No approximation. This is why Lottie adoption spread so rapidly — it eliminated an entire category of designer-developer friction.

---

## 🗣️ Socratic Discussion Questions

1. Disney's principle of Exaggeration tells you to push the extremes. Apple's motion philosophy tells you to be invisible. Are these contradictory? How do you reconcile them for a product launch video that needs both brand character and UI clarity?

2. The principle of Timing says 200–400ms is "comfortable" for most UI transitions. But Linear uses 80–150ms for the same interactions. What context factors would lead you to choose 80ms over 300ms for the same transition type?

3. Follow-Through and Overlapping Action was developed for character animation. How does it apply to a list of dashboard cards animating onto screen in a web app? What changes when the list has 100 items instead of 6?

4. Staging says one primary motion at a time. But modern UI often needs to animate a sidebar opening AND content loading simultaneously. Where is the line between "coordinated motion" and "violating staging"?

5. Appeal is the hardest principle to teach and the most important to develop. What is the relationship between studying other designers' work and developing appeal? Can it be taught, or only exposed to?

---

## 📋 Summary

| Principle | Core Idea | Motion Graphics Application |
|-----------|-----------|----------------------------|
| Squash & Stretch | Volume preserved, shape changes | Scale animations with overshoot |
| Anticipation | Wind-up before action | Micro-reverse before entrance |
| Staging | Guide the eye | One primary motion per moment |
| Pose-to-Pose | Key states, filled in | Every keyframe animation tool |
| Follow-Through | Parts stop at different times | Staggered exits, overlapping |
| Slow In/Out | Natural velocity change | Easing curves (ease-in-out) |
| Arcs | Natural trajectories curve | Motion paths |
| Secondary Action | Supporting detail | Background elements, secondary text |
| Timing | Duration = weight | 200–300ms for UI, 500ms+ for brand |
| Exaggeration | Push the extremes | Scale to medium: UI < Brand < Broadcast |
| Solid Design | Clear hierarchy on every frame | Every pause frame should work as still |
| Appeal | Worth watching | Taste; developed through study and iteration |

---

## 🔗 Next Steps

[Module 2: AE Expressions & Scripts →](../Module-02-AE-Expressions-Scripts/Reading.md)

---

## 📚 Further Reading

- *The Illusion of Life: Disney Animation* — Frank Thomas and Ollie Johnston (Disney Editions, 1981) — the original 12 principles documented from 50 years of Disney animation; the bible for any motion designer
- *The Animator's Survival Kit* — Richard Williams (Faber & Faber, 2001) — the most practical book ever written on timing and spacing; every principle covered with frame-by-frame diagrams
- *Designing Interface Animation* — Val Head (Rosenfeld Media, 2016) — the only book that applies Disney's principles directly to UI design with web-specific examples
- *CSS Animation Pocket Guide* — Val Head (A Book Apart, 2015) — concise, practical; covers CSS easing, keyframes, and performance in under 100 pages
- [Google Material Motion Guidelines](https://m3.material.io/styles/motion/overview) — the world's most comprehensive published UI motion specification; free to read and apply
- [Apple Human Interface Guidelines — Motion](https://developer.apple.com/design/human-interface-guidelines/motion) — Apple's principles, including the reduced-motion policy and specific timing recommendations
- [School of Motion — Principles of Animation Series](https://www.schoolofmotion.com/blog/principles-of-animation) — the best free text-based coverage of the 12 principles in a motion graphics context
