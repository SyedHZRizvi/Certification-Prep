---
permalink: /35-Motion-Graphics-UI-Animation/Module-01-Motion-Design-Principles/Cheat-Sheet/
title: "Module 1 Cheat Sheet: Motion Design Principles"
---

# ⚡ Module 1 Cheat Sheet — Motion Design Principles

## Disney's 12 Principles (Motion Graphics Translation)

| # | Principle | Motion Graphics Application |
|---|-----------|----------------------------|
| 1 | Squash & Stretch | Scale overshoot; volume preserved |
| 2 | Anticipation | Brief reverse before main action (15–25% of total duration) |
| 3 | Staging | One primary motion at a time; eye always has a focus |
| 4 | Pose-to-Pose | Define keyframes; software fills in-betweens |
| 5 | Follow-Through | Stagger exits; secondary elements trail primary |
| 6 | Slow In/Out | Easing curves (ease-in-out for most motion) |
| 7 | Arcs | Curved motion paths, not straight-line diagonals |
| 8 | Secondary Action | Supporting detail that never upstages primary |
| 9 | Timing | Duration = weight; 200–300ms UI; 500ms+ brand |
| 10 | Exaggeration | Calibrate by context: UI < Brand < Broadcast |
| 11 | Solid Design | Every paused frame = well-composed still |
| 12 | Appeal | Purposeful motion worth watching |

---

## Core Easing Curves

| CSS Value | Bezier | Behavior | Use When |
|-----------|--------|----------|----------|
| `linear` | `(0,0,1,1)` | Constant velocity | Progress bars |
| `ease-in` | `(0.42,0,1,1)` | Slow start, fast end | Elements exiting |
| `ease-out` | `(0,0,0.58,1)` | Fast start, slow end | Elements entering |
| `ease-in-out` | `(0.42,0,0.58,1)` | Slow at both ends | Cross-screen movement |
| Spring | Physics sim | Overshoot + settle | iOS-style, playful UI |
| Bounce | Custom | Multiple overshoots | Gamification, high energy |

> **Rule:** Ease-Out for entrances, Ease-In for exits. Always.

---

## Duration Reference

| Duration | Perception | Context |
|----------|------------|---------|
| 50–100ms | Instant, snap | Micro-interactions, hover states |
| 100–200ms | Quick, responsive | Button clicks, tooltips |
| 200–400ms | Standard | Most UI transitions (Material/HIG sweet spot) |
| 400–700ms | Deliberate | Hero elements, onboarding |
| 700ms–1.5s | Cinematic | Brand intro, splash screens |
| 1.5s+ | Slow / wrong | Only meditative/art contexts |

---

## Spring Parameters

| Parameter | Low Value | High Value |
|-----------|-----------|------------|
| Mass | Lighter, faster | Heavier, slower |
| Stiffness | Loose, bouncy | Tight, snappy |
| Damping | More oscillation | Less oscillation, settles fast |

---

## Stagger Formula

```
delay(n) = total_duration × 0.15 × n
```
Example: 400ms animation → items stagger at 0ms, 60ms, 120ms, 180ms…

---

## Buck's 5 Principles

| Principle | One-Line |
|-----------|----------|
| Purpose | Why is this moving? If no answer, don't animate. |
| Clarity | Motion should reveal, not decorate |
| Character | How you move = who you are as a brand |
| Continuity | Related elements share motion vocabulary |
| Economy | Simplest motion that achieves goal |

---

## Industry Motion Languages

| Brand | Defining Motion | Vocabulary |
|-------|----------------|------------|
| Apple | Spring physics, staging | Natural, purposeful, one-at-a-time |
| Stripe | Slow organic orbs (brand); fast fade (product) | Premium, restrained, two-tier |
| Airbnb | Lottie-based; subtle | Physical, travel-emotional |
| Google | Material: 200–300ms ease, depth-layer | Systematic, hierarchical |
| Linear | Instant, minimal | Utility-first, zero delay |

---

## Squash Amount Guide

| Squash % | Perception |
|----------|------------|
| 0% | Dead, mechanical |
| 10–20% | Slightly alive, UI-appropriate |
| 30–50% | Playful, cartoon-adjacent |
| 60%+ | Character animation territory |

---

## Key Numbers to Memorize

- **Material Design standard UI transition:** 200–300ms
- **Apple HIG standard transition:** ~250ms
- **Anticipation timing:** 15–25% of total animation duration
- **24fps frame duration:** ~41.7ms per frame
- **12 frames at 24fps:** 500ms
- **Stagger coefficient:** 0.15 × total duration per item


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
