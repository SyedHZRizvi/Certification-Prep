---
permalink: /35-Motion-Graphics-UI-Animation/Module-02-AE-Expressions-Scripts/Reading/
title: "Module 2: AE Expressions & Scripts"
---

# 🖥️ Module 2: AE Expressions & Scripts

## The Expression That Saved a Studio

In 2019, a motion designer at a mid-size agency in New York was handed a 3-minute broadcast package for a sports network — 47 lower-thirds, each with a different name, a different team color, and a different score. The creative director wanted them "done by morning." Manually keyframing 47 compositions would take days.

Instead, the designer opened the Expression Controls and spent 90 minutes building a Master Controller expression. One slider controlled animation timing across all 47 comps. One color picker fed team colors through the entire system. One null object drove every animation. The work that would have taken three days took one evening.

That designer got a raise. This module teaches you why.

---

## 🔬 The Expression Language: JavaScript in After Effects

After Effects expressions use a subset of JavaScript (ExtendScript, based on ECMAScript 3). Every property in AE — position, rotation, opacity, scale, color — can be driven by an expression instead of keyframes.

To add an expression: **Alt-click** (Windows) or **Option-click** (Mac) on any property stopwatch. The expression field appears. Everything you type replaces the static value with computed code.

---

## ⏱️ The `time` Variable

`time` is AE's built-in variable that returns the current composition time in seconds as a floating-point number.

```javascript
// Makes a layer rotate continuously at 90 degrees per second
rotation = time * 90;

// 360-degree rotation every 4 seconds
rotation = time * 90; // one full rotation every 4s

// Slower: one rotation every 10 seconds
rotation = time * 36;
```

**Common Pattern — Countdown Timer:**
```javascript
// Counts down from 60 to 0
totalSeconds = 60;
remaining = totalSeconds - time;
seconds = Math.floor(remaining % 60);
minutes = Math.floor(remaining / 60);
minutes + ":" + (seconds < 10 ? "0" : "") + seconds
```

> 🎯 **Exam Tip:** `time` is always in seconds, not frames. To convert to frames, multiply by `thisComp.frameRate`. If the comp is 24fps, `time * 24` gives the current frame number.

---

## 〜 The `wiggle()` Expression

`wiggle(frequency, amplitude)` generates random noise-based motion around the current value. It is the single most-used expression in professional motion graphics.

```javascript
// Position wiggle: 2 cycles/sec, ±30px
wiggle(2, 30)

// Slow, large camera shake
wiggle(0.5, 80)

// Fast, subtle vibration (phone notification)
wiggle(15, 5)
```

**Parameters:**

| Parameter | Type | Meaning |
|-----------|------|---------|
| `frequency` | Number | Wiggles per second |
| `amplitude` | Number | Maximum deviation from current value (in property units) |
| `octaves` | Number (optional) | Complexity layers; default = 1 |
| `amp_mult` | Number (optional) | Amplitude multiplier per octave; default = 0.5 |
| `t` | Number (optional) | Time offset; useful to de-sync multiple elements |

**Advanced — De-Syncing Wiggles:**
```javascript
// Different elements out of phase (use index to offset time)
seed = index * 100;
wiggle(2, 30, 1, 0.5, time + seed)
```

**The Wiggle Modifier Pattern:**
```javascript
// Start wiggling only after 2 seconds
t = Math.max(0, time - 2);
wiggle(3, 20, 1, 0.5, t)
```

---

## 🔁 The `loopOut()` Expression

`loopOut()` creates infinite loops from your existing keyframes. It is what turns a 2-second walk cycle into an infinite walk, or a 3-second loading animation into a permanent loop.

```javascript
// The four loop types:
loopOut("cycle")     // Repeats keyframes in sequence
loopOut("pingpong")  // Plays forward, then backward, alternating
loopOut("offset")    // Repeats but adds the delta of each loop (infinite drift)
loopOut("continue")  // Continues velocity of last keyframes forever
```

**`loopIn()` — for the other direction:**
```javascript
loopIn("cycle")  // Loops keyframes before the first keyframe
```

**Real-World Use Case — Infinite Loop Animation:**
```javascript
// On an icon that bounces up and down:
// 1. Keyframe position at 0s (y = 0) and 0.5s (y = -20px)
// 2. Add expression to Position property:
loopOut("pingpong")
// Result: icon bounces forever between 0 and -20
```

> 🚨 **Trap on the Exam:** `loopOut()` without parentheses is a syntax error. `loopOut("cycle")` is correct. The type parameter ("cycle", "pingpong", etc.) is a string — it needs quotes.

---

## 🔗 The `valueAtTime()` Expression

`valueAtTime(t)` returns the value of any property at any point in time — including past keyframes. This allows you to create **offset animations**, where one layer mirrors another layer's position but delayed by 0.5 seconds.

```javascript
// On Layer B's position: mimics Layer A's position, delayed by 0.3s
thisComp.layer("Layer A").transform.position.valueAtTime(time - 0.3)
```

**Key Use Cases:**

| Use Case | Expression |
|----------|------------|
| Shadow/Echo effect | `valueAtTime(time - 0.1)` on a duplicate layer |
| Motion trail | Multiple duplicate layers, each offset by more time |
| Anticipatory opposite | `valueAtTime(time + 0.2)` to see slightly ahead |
| Linked delayed animations | One controller drives many layers at different offsets |

**Real-World — Snake Trail:**
```javascript
// On the 5th layer in a snake animation (each layer follows the previous)
n = 5; // this is the nth layer
delay = n * 0.05; // each layer 50ms behind
thisComp.layer(1).transform.position.valueAtTime(time - delay)
```

---

## 📑 The `index` Property

`index` returns the layer's position in the layer stack (1 = top layer). It is the foundation of procedural animation systems where each layer's behavior depends on its position.

```javascript
// Stagger: each layer starts its animation 5 frames later
startTime = index * 5 / thisComp.frameRate;
// Then reference this in other expressions

// Scale: each layer is slightly larger than the one above it
scale = [100 + (index * 5), 100 + (index * 5)]

// Color cycling with index
hue = (index * 30) % 360;
// Use with Color Utilities to set fill color
```

**Classic Index Pattern — Staggered Entrance:**
```javascript
// On the Position property of each in a list of layers:
// (Keyframe: position animates from off-screen to on-screen between 0s and 0.5s)
// Expression offsets each layer's animation by its index:
delay = (index - 1) * 0.08;
// Apply to the keyframe time offset using timeRemap
```

---

## 🎛️ Expression Controls

Expression Controls are effects applied to a null object or control layer that expose easy-to-use sliders, checkboxes, angle controls, and color pickers. Any expression in the comp can link to these controls, creating a **Master Controller** system.

**Adding Expression Controls:**
`Effect > Expression Controls > Slider Control`
`Effect > Expression Controls > Checkbox Control`
`Effect > Expression Controls > Color Control`
`Effect > Expression Controls > Point Control`

**Linking an Expression to a Slider:**
```javascript
// On a layer's opacity property:
effect("Opacity Control")("Slider")
```

**Master Controller Pattern:**
```javascript
// On a null named "MASTER CONTROLLER"
// Add Slider Control named "Animation Progress" (0–100)

// On each animated layer's properties, link to master:
masterProgress = thisComp.layer("MASTER CONTROLLER").effect("Animation Progress")("Slider") / 100;
// Use masterProgress to drive animation timing
```

**Color Control Usage:**
```javascript
// Layer's fill color driven by Color Control on Master:
thisComp.layer("MASTER CONTROLLER").effect("Brand Color")("Color")
```

> 🎯 **Exam Tip:** Expression Controls never break when you rename a layer (as long as the effect name doesn't change). But hardcoded layer names in expressions (`thisComp.layer("My Layer")`) break when the layer is renamed. Use `index`-based references for robustness in template systems.

---

## 📐 Essential Expression Patterns

### The `ease()` Function

`ease(t, tMin, tMax, val1, val2)` creates smooth remapping between ranges.

```javascript
// Fade opacity from 0 to 100 as time goes from 0s to 0.5s
ease(time, 0, 0.5, 0, 100)

// Then hold at 100 until 3s, then fade to 0 by 3.5s
clamp(ease(time, 3.0, 3.5, 100, 0), 0, 100)
```

### The `linear()` Function

`linear(t, tMin, tMax, val1, val2)` remaps linearly (no easing).

```javascript
// Progress bar: position moves from 0 to 500px over 10 seconds
linear(time, 0, 10, 0, 500)
```

### The `clamp()` Function

`clamp(value, min, max)` keeps a value within bounds.

```javascript
// Prevent opacity from going below 0 or above 100
clamp(wiggle(2, 30), 0, 100)
```

### Connecting Properties Across Layers

```javascript
// On Layer B, mirror Layer A's rotation:
thisComp.layer("Layer A").transform.rotation
```

### Random Numbers

```javascript
// Deterministic random (same result every time for same seed + time):
seedRandom(index, true);
random(0, 100)

// True random (changes every frame):
random(0, 100)
```

---

## 🎯 What the Exam Tests: Expressions

> 🎯 **Exam Callout 1:** `time` is always in **seconds**, never frames. A common exam trap: "what does `time * 24` return in a 24fps comp?" Answer: the current frame number — but it's a calculation, not a built-in property.

> 🎯 **Exam Callout 2:** `wiggle(frequency, amplitude)` — the exam tests parameter order. Frequency FIRST, amplitude SECOND. Not the other way. `wiggle(2, 30)` = 2 cycles per second, ±30 units. `wiggle(30, 2)` = 30 cycles per second, ±2 units — a very fast, tiny vibration.

> 🎯 **Exam Callout 3:** `loopOut("cycle")` loops AFTER the last keyframe. `loopIn("cycle")` loops BEFORE the first keyframe. The exam may ask which function creates a loop before keyframes begin — it's `loopIn()`, not `loopOut()`.

> 🎯 **Exam Callout 4:** `valueAtTime(t)` evaluates a property at any composition time `t`. When `t = time - 0.3`, you get the value from 300ms ago — creating a delayed echo effect. The exam tests whether `t` is in seconds or frames: it's always **seconds**.

> 🎯 **Exam Callout 5:** The `index` property starts at **1**, not 0. The topmost layer in the AE stack has `index = 1`. This trips up developers who expect 0-based indexing.

> 🎯 **Exam Callout 6:** Expression Controls (Slider, Color, Checkbox, etc.) are applied as **Effects**, not as Properties. They live under the layer's Effect property in the timeline. Expressions reference them via `effect("Name")("attribute")`.

> 🎯 **Exam Callout 7:** `seedRandom(seed, timeless)` with `timeless = true` returns the same random value every frame. Without `timeless` (or with `false`), it returns a different value every frame. The exam tests: which parameter makes random values stable?

---

## ⚠️ Common Traps: Expressions

**Trap 1 — String Quotes in `loopOut()`:** `loopOut(cycle)` without quotes is a JavaScript error — AE will look for a variable named `cycle` and fail. Always quote the loop type: `loopOut("cycle")`.

**Trap 2 — The `rotation` vs `transform.rotation` distinction:** In expressions, you reference properties by their internal name. From another layer: `thisComp.layer("Name").transform.rotation`. On the same layer: just `rotation`. Students frequently write `transform.rotation` when referencing the current layer's own rotation, which fails.

**Trap 3 — `wiggle()` on Multi-Value Properties:** `wiggle(2, 30)` on a Position property returns a 2D array `[x, y]`. On a 1D property (Rotation, Opacity), it returns a single number. If you apply a 2D wiggle to a 1D property without unpacking it, you get an error.

**Trap 4 — Performance with Complex Expressions:** Expressions run on every frame during RAM preview and render. Complex expressions (especially those referencing many other layers via `thisComp.layer()`) can make previews extremely slow. The exam may ask how to improve expression performance — the answer is to bake expressions to keyframes once the animation is locked (Layer > Pre-compose or Keyframe Assistant > Convert Expressions to Keyframes).

---

## 🔨 Scriptlets for Animators

Scriptlets are AE scripts (ExtendScript) that automate repetitive tasks. Unlike expressions (which run live on every frame), scripts run once when executed.

**Essential Scripts Every Animator Should Know:**

| Script | Function |
|--------|---------|
| **Auto-Save** (built-in) | Set under Preferences — use it |
| **Copy Expression** | Copies expression text to clipboard; native is awkward |
| **Ease and Wizz** (free) | One-click Spring/Bounce easing — applied as expressions to keyframes |
| **Motion2** (free) | Graph editor + easing UI that makes the graph editor accessible |
| **Spring** (Jake In Motion, free) | Single spring expression preset applied with one click |
| **Keysmith** (paid) | Scriptlet-driven master controller builder |
| **Overlord** (Battleaxe, paid) | Send shapes between Illustrator and AE with expressions intact |

**Writing Your First Script (File → Scripts → Run Script File):**
```javascript
// Renames all selected layers to "Layer 01", "Layer 02", etc.
var layers = app.project.activeItem.selectedLayers;
for (var i = 0; i < layers.length; i++) {
    layers[i].name = "Layer " + (i < 9 ? "0" : "") + (i + 1);
}
```

---

## 🏆 3 Expressions That Power Real Showreels

### Expression 1: The Smooth Random Loop

Used for: ambient background elements, organic floating motion, brand films.

```javascript
// Perlin noise-based slow drift — set on Position
freq = 0.5;  // very slow
amp = 40;    // drift up to 40px
x = wiggle(freq, amp)[0];
y = wiggle(freq, amp)[1];
[x, y]
```

### Expression 2: The Master Progress System

Used for: corporate motion graphics, infographics, templated content.

```javascript
// On MASTER CONTROLLER null, add Slider named "Progress" (0–100)
// On each chart bar's scale (height):
p = thisComp.layer("MASTER CONTROLLER").effect("Progress")("Slider") / 100;
barHeight = 250;  // final height in px
[scale[0], barHeight * p]
```

### Expression 3: The Typewriter Counter

Used for: stats, data reveals, sports graphics.

```javascript
// On a text layer (the text expression):
start = 0;
end = 1234;  // target number
duration = 3; // seconds to count
t = Math.min(time / duration, 1);
// Ease the counter
t = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;  // ease-in-out
value = Math.round(start + (end - start) * t);
// Add commas for thousands
value.toLocaleString()
```

---

## 📊 Plugin and Script Matrix

| Tool | Type | Cost | Best For | Replaces |
|------|------|------|----------|---------|
| **Ease and Wizz** | Script | Free | One-click spring/bounce easing expressions | Manual graph editor work |
| **Motion2** | Script | Free | Graph editor UI overlay | AE's built-in graph editor |
| **Spring (Jake In Motion)** | Script | Free | Single spring expression application | Writing spring expressions manually |
| **aescripts Motion Tools** | Script | $49 | Keyframe management, graph editor | Multiple individual scripts |
| **Keysmith** | Script | $69 | Master controller builder with UI | Custom expression rigs |
| **Overlord** | Script | $45 | Illustrator → AE shape transfer | Manual recreation of AI artwork |
| **Flow** | Script | $39 | Custom easing curve library | Custom bezier expressions |
| **Rubberhose 3** | Script | $99 | Character rigging in AE | Manual IK rigging expressions |
| **Duik Ángela** | Script | Free | Full character rigging and IK | Manual rigging |
| **ButtCapper** | Script | Free | Stroke cap/join control | Expression-based stroke tricks |

---

## 🔗 Practical Expression Workflow

1. **Build first with keyframes.** Test the timing and feel before adding expressions. Expressions are harder to debug than keyframes.
2. **Add expression controls last.** Once the animation feels right, add the controller null and link properties to it.
3. **Comment your expressions.** Use `//` comments — your future self (and every collaborator) will thank you.
4. **Use the Expression Error viewer.** The red triangle on a layer with a bad expression shows the error. Read it carefully — AE expression errors are descriptive.
5. **Save expression presets.** In the Effects & Presets panel, you can save any animation preset including expressions. Build a library.

---

## 📋 Summary

| Expression | Core Function | Signature |
|------------|---------------|-----------|
| `time` | Current composition time in seconds | `time * 90` |
| `wiggle()` | Random noise-based motion | `wiggle(freq, amp)` |
| `loopOut()` | Infinite keyframe loops | `loopOut("cycle")` |
| `valueAtTime()` | Property value at any time | `valueAtTime(time - delay)` |
| `index` | Layer position in stack | `index * offset` |
| `ease()` | Smooth range remapping | `ease(time, t1, t2, v1, v2)` |
| `linear()` | Linear range remapping | `linear(time, t1, t2, v1, v2)` |

---

## 🔗 Next Steps

[Module 3: Typography & Text Animation →](../Module-03-Typography-Text-Animation/Reading.md)

---

## 🗣️ Socratic Discussion Questions

1. Expressions run on every frame during render. Keyframes are pre-computed. If you're building a 47-lower-third broadcast package, when would you choose to bake your expressions to keyframes vs keep them live?

2. The Master Controller pattern uses a single null object to drive dozens of layers. What happens when that null is accidentally deleted? How do you build expression systems that degrade gracefully?

3. `wiggle()` uses Perlin noise — deterministic pseudo-random numbers. If two elements use `wiggle(2, 30)` with no seed offset, they will wiggle identically. Is that a bug or a feature in most use cases?

4. The `index` property changes when layers are reordered. How does this affect index-based stagger systems? What happens to a 20-layer stagger system when you add a new layer in the middle?

5. Scripts run once; expressions run every frame. If you needed to build a system where 200 layers each respond to a different external data value (from a CSV), would you use scripts or expressions, and why?

---

## 📚 Further Reading

- [After Effects Expression Language Reference (Adobe)](https://ae-expressions.docsforadobe.dev/) — the canonical technical reference; bookmark it
- *After Effects Expressions* — Marcus Geduld (Focal Press, 2010) — the most comprehensive book on AE expressions; covers ECMAScript fundamentals as well as AE-specific APIs
- *The VES Handbook of Visual Effects* — Jeffrey A. Okun & Susan Zwerman (Focal Press) — covers technical compositing workflows that inform advanced expression use
- [Jake In Motion YouTube — Expression Series](https://www.youtube.com/@JakeinMotion) — the best free expression tutorials online; start with his loopOut and valueAtTime series
- [Mobox Graphics — Expression Essentials Playlist](https://www.youtube.com/@moboxgraphics) — dense, practical; each video covers one expression concept in under 10 minutes
- [Ease and Wizz Free Script](https://www.youtube.com/results?search_query=ease+and+wizz+after+effects+free+script) — the most-used free AE script; learn how its expressions work, not just how to apply them
