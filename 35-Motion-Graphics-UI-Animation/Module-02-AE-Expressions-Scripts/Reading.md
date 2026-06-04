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

## 📚 Further Reading

- [After Effects Expression Language Reference (Adobe)](https://ae-expressions.docsforadobe.dev/)
- *After Effects Expressions* — Marcus Geduld (Focal Press)
- [Jake In Motion YouTube — Expression Series](https://www.youtube.com/@JakeinMotion)
- [Mobox Graphics — Expression Essentials Playlist](https://www.youtube.com/@moboxgraphics)
- [Ease and Wizz Free Script (Vimeo)](https://www.youtube.com/results?search_query=ease+and+wizz+after+effects+free+script)
