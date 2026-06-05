---
permalink: /35-Motion-Graphics-UI-Animation/Module-05-Infographic-Data-Viz/Cheat-Sheet/
title: "Module 5 Cheat Sheet: Infographic & Data Viz"
---

# ⚡ Module 5 Cheat Sheet — Infographic & Data Viz

## Chart Type → AE Technique

| Chart | AE Technique | Key Setting |
|-------|-------------|-------------|
| Bar Chart | Scale Y from baseline | Anchor point = bottom center |
| Line Chart | Trim Paths End 0%→100% | Add moving dot for visual lead |
| Pie Chart | Stroke Dash offset | Stagger segments radially |
| Donut Chart | Pie + Track Matte (circle) | Alpha Matte cuts center |
| Waffle | Index expression grid | 10×10 = 100 cells |
| Map Route | Trim Paths on line layer | SVG import + shape conversion |
| Choropleth | Fill color per region | Color expression per shape |

---

## Bar Chart Setup

1. Create shape layer (bar)
2. Set Anchor Point: bottom center
3. Scale Y expression: `ease(time, startT, endT, 0, targetHeight)`
4. Stagger: offset each bar's start by 4–6 frames (using index)
5. Link label Y position to bar Scale Y via expression

---

## Data Storytelling Structure

| Stage | Position in Timeline | Purpose |
|-------|---------------------|---------|
| Establish | 0–33% | Introduce the metric and baseline |
| Change | 33–67% | Animate the data |
| Insight | ~67% | Highlight key moment or callout |
| Contextualize | 67–100% | Comparison, annotation, summary |

---

## Annotation Timing Rule

Text labels appear **simultaneously** with the data event they describe. Never before (confusing), never after (missed connection).

---

## Motion Bro / AEJuice Quick Reference

| Tool | What It Does | Cost |
|------|-------------|------|
| Motion Bro | AE panel for managing preset packs | Free (panel) |
| AEJuice Starter Pack | 900+ free transitions, text, elements | Free |
| AEJuice Full Packs | Categorized premium packs | Paid |

> Always customize AEJuice presets (timing, color, type) before client delivery.

---

## Color Rules

| Color Used For | Good | Bad |
|----------------|------|-----|
| Variable encoding | Profit green / loss red | Using green/red for arbitrary categories |
| Brand only | Brand chart = one accent color | Rainbow bars with no data meaning |
| Highlight | One call-out color for the insight | Multiple call-out colors (dilutes impact) |

---

## Bar Design Ratios

| Spec | Value |
|------|-------|
| Bar:Gap ratio | 2:1 (bar twice as wide as gap) |
| Min bars for bar chart | 2+ |
| Max categories for pie | 5 (beyond that, use bar chart) |
| Waffle cells | Always 100 (10×10) |

---

## Key Numbers

- Data insight appears at: ~67% of animation duration
- Bar stagger: 4–6 frames (at 24fps = 167–250ms)
- Proportional duration: 2× the value change = ~2× the animation time
- Line chart leading dot: match Trim Paths End % to dot position along path


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
Can make real-time decisions about when NOT to use the technique — knowing when a simpler or faster approach delivers equivalent results.

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

---

## 🏆 Exam Performance Standards

### Beginner Benchmark
Can identify the technique and explain it in 1 sentence.

### Intermediate Benchmark
Can demonstrate the technique correctly in a controlled exercise.

### Advanced Benchmark
Can apply the technique under production constraints (time pressure, client feedback, iteration cycles) and teach it to a junior.

### Professional Standard
Can make real-time decisions about when NOT to use the technique — knowing when a simpler or faster approach delivers equivalent results.

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
