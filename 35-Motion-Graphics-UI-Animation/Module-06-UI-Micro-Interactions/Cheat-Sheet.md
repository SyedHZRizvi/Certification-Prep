---
permalink: /35-Motion-Graphics-UI (User Interface)-Animation/Module-06-UI-Micro-Interactions/Cheat-Sheet/
title: "Module 6 Cheat Sheet: UI Micro-Interactions"
---

# ⚡ Module 6 Cheat Sheet, UI Micro-Interactions

## Key Timing Reference

| Duration | Category | Use |
|----------|----------|-----|
| 50–100ms | Instant | Hover, focus, ripple effects |
| 100–200ms | Quick (Linear: 80–150ms) | Dropdown open, tooltip, button press |
| 200–300ms | Comfortable (Material Design sweet spot) | Modal open, panel slide |
| 300–500ms | Deliberate | Full-page transitions, large context switches |

---

## FLIP Technique

**Why:** Animating layout properties (width/height/top/left) is expensive. FLIP animates only transforms.

**Steps:**
1. **F**irst: `getBoundingClientRect()`, record start position
2. **L**ast: Apply end state to DOM
3. **I**nvert: Apply `translate(dx, dy) scale(dw, dh)` to place element visually at start
4. **P**lay: Animate transform to `none` (rAF or transition)

**Only ever animate:** `transform` and `opacity` for 60fps performance.

---

## GPU-Accelerated Properties (Safe to Animate)

| Property | Cost | Use For |
|----------|------|---------|
| `transform` | Cheap (GPU) | Move, scale, rotate |
| `opacity` | Cheap (GPU) | Fade in/out |
| `filter` | Medium | Blur, brightness |
| `width/height/top/left` | Expensive (Layout) | Avoid; use FLIP instead |

---

## Figma Smart Animate Requirements

- Elements must have **the same name** in both frames
- Connects frames via Prototype panel
- Set: Trigger → Animation → Easing → Duration
- Cannot interpolate: font family changes

**Trigger types:** On Click, Mouse Enter, While Hovering, On Drag, After Delay, Keyboard

---

## 12 UI Animation Principles (Quick List)

1. Don't animate for its own sake
2. Reinforce hierarchy with motion prominence
3. Reflect consistent interface physics
4. Animations should be reversible (matching entry/exit directions)
5. Use motion to guide focus
6. Speed signals relationship tightness
7. Support `prefers-reduced-motion`, non-optional
8. Animate between states, not elements
9. Instant is sometimes the right choice
10. Coordinate multiple animations with unified logic
11. Test at actual playback speed on real devices
12. Loading states are animations too

---

## Loading State Decision Tree

```
Do you know when it will finish?
├── YES → Use Progress Bar (determinate)
└── NO  → Use Spinner (indeterminate)
         └── Will it take >1s?
             ├── YES → Consider Skeleton Screen instead
             └── NO  → Spinner is fine
```

---

## Affordance Animation Patterns

| Signal | Animation | Meaning |
|--------|-----------|---------|
| Pressable | Scale 95% → 100% | "Tap this" |
| Draggable | Follow touch with lag | "Drag this" |
| Swipeable | Off-screen peek | "More this way" |
| Expandable | Chevron rotates 180° | "Opens/closes" |
| Deletable | Swipe reveals action | "Swipe to delete" |
| Loading | Skeleton / spinner | "Wait" |

---

## Case Study Quick Reference

| Product | Motion Philosophy |
|---------|--------------------|
| Notion | Extreme restraint; invisible; productivity |
| Linear | Motion as brand; speed-taxonomy published |
| Vercel | Separate marketing and dashboard motion |
| Material | 200–300ms; depth-based hierarchy |
| Apple HIG | Spring physics; staging; one at a time |

---

## CSS Reduced Motion Pattern

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
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
