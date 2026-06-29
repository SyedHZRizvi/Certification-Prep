---
permalink: /35-Motion-Graphics-UI (User Interface)-Animation/Module-02-AE-Expressions-Scripts/Cheat-Sheet/
title: "Module 2 Cheat Sheet: AE Expressions & Scripts"
---

# ⚡ Module 2 Cheat Sheet, AE Expressions & Scripts

## How to Add an Expression
`Option+Click` (Mac) / `Alt+Click` (Windows) the property stopwatch.

---

## Core Expression Reference

| Expression | Syntax | Use |
|------------|--------|-----|
| `time` | `time * 90` | Continuous rotation/movement |
| `wiggle()` | `wiggle(freq, amp)` | Random noise motion |
| `loopOut()` | `loopOut("cycle")` | Infinite keyframe loops |
| `valueAtTime()` | `valueAtTime(time - delay)` | Delayed mirror |
| `index` | `index * offset` | Per-layer stagger |
| `ease()` | `ease(t, t1, t2, v1, v2)` | Smooth range remapping |
| `linear()` | `linear(t, t1, t2, v1, v2)` | Linear range remapping |
| `clamp()` | `clamp(value, min, max)` | Constrain to range |
| `random()` | `random(min, max)` | Random per-frame value |

---

## time → Rotation Cheat Table

| Desired Period | Expression |
|----------------|------------|
| 1 rotation/sec | `time * 360` |
| 1 rotation/2s | `time * 180` |
| 1 rotation/4s | `time * 90` |
| 1 rotation/6s | `time * 60` |
| 1 rotation/10s | `time * 36` |

---

## wiggle() Quick Reference

```javascript
wiggle(freq, amp)             // basic
wiggle(freq, amp, octaves)    // more complexity
wiggle(freq, amp, 1, 0.5, time + index * 100)  // de-synced
```

| Freq | Amp | Result |
|------|-----|--------|
| 0.5 | 80 | Slow, large drift |
| 2 | 30 | Standard ambient wiggle |
| 5 | 15 | Medium vibration |
| 15 | 5 | Fast, subtle tremor |

---

## loopOut() Types

| Type | Behavior |
|------|----------|
| `"cycle"` | Repeats keyframes in order |
| `"pingpong"` | Forward, then backward, alternating |
| `"offset"` | Repeats + adds delta each cycle (infinite drift) |
| `"continue"` | Continues velocity of last keyframe forever |

---

## Expression Controls (on Null/Control Layer)

| Effect Name | Use |
|-------------|-----|
| Slider Control | Drive opacity, speed, scale |
| Color Control | Drive fill colors system-wide |
| Checkbox Control | Toggle states on/off |
| Angle Control | Drive rotation values |
| Point Control | Drive 2D position values |

**Link syntax:**
```javascript
thisComp.layer("MASTER").effect("Slider Name")("Slider")
thisComp.layer("MASTER").effect("Color Name")("Color")
```

---

## Three Showreel Expressions

**1. Smooth Random Drift:**
```javascript
[wiggle(0.5, 40)[0], wiggle(0.5, 40)[1]]
```

**2. Master Progress Bar:**
```javascript
p = thisComp.layer("CTRL").effect("Progress")("Slider") / 100;
[scale[0], 250 * p]
```

**3. Typewriter Counter:**
```javascript
end = 1234; dur = 3;
t = Math.min(time / dur, 1);
t = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
Math.round(end * t).toLocaleString()
```

---

## Key Script Tools

| Script | Cost | Function |
|--------|------|---------|
| Ease and Wizz | Free | Spring/bounce easing via expressions |
| Motion2 | Free | Graph editor UI |
| Spring (JiM) | Free | One-click spring expression |
| Overlord | Paid | AI → AE shape transfer |
| Keysmith | Paid | Master controller builder |

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| `loopOut(cycle)` | Must be string: `loopOut("cycle")` |
| Hard-coded layer name breaks | Use index-based reference or be careful with renaming |
| wiggle identical across layers | Add `seedRandom(index, true)` before wiggle |
| Expression red = broken | Read error in red triangle; usually a typo |


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
