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
