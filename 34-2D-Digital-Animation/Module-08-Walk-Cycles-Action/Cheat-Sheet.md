---
permalink: /34-2D-Digital-Animation/Module-08-Walk-Cycles-Action/Cheat-Sheet/
title: "Module 8 Cheat Sheet: Walk Cycles & Action"
---

# ⚡ Module 8 Cheat Sheet — Walk Cycles & Action

---

## The Four Walk Cycle Poses

| Pose | Body Height | Key Feature |
|------|------------|-------------|
| **Contact** | Medium | Heel of lead foot hits ground; max extension |
| **Down** | Lowest | Knee bends, absorbs impact; head dips |
| **Passing** | Highest | Swinging foot passes planted foot; body peaks |
| **Up** | High | Body crests; lead foot extends forward toward heel |

**Frame order at 24fps:**
```
1: Contact (L) → 3: Down → 5: Passing → 7: Up → 9: Contact (R) → 11: Down → loop
```

---

## Walk Cycle Timing by Character

| Character Type | Frames (24fps) |
|---------------|---------------|
| Normal adult | 12 frames |
| Young child | 10–12 frames |
| Elderly | 16–20 frames |
| Heavy / large | 18–24 frames |
| Stealthy sneak | 20–24 frames |
| Energetic bounce | 10 frames |
| Exhausted shuffle | 18–20 frames |

---

## Walk vs. Run — Key Differences

| Feature | Walk | Run |
|---------|------|-----|
| One foot on ground | Always | Not always |
| Airborne phase | No | Yes (both feet off) |
| Cycle length | 12 frames | 8 frames |
| Body lean | Upright | Forward |
| Arm swing | Parallel, moderate | Exaggerated, cross-body |

**The defining difference:** Walk = at least one foot on ground at all times.

---

## Anticipation Rule

```
Main action direction → Anticipation goes OPPOSITE

Jump UP     → Anticipation goes DOWN
Punch RIGHT → Anticipation goes LEFT
Run LEFT    → Anticipation goes RIGHT
```

**Formula:**
```
Hold (8 frames) → Anticipation (4–8 frames) → Action (6–12 frames)
```

> No hold before anticipation = jerky, confusing to audience.

---

## Impact Sequence

| Frame | State |
|-------|-------|
| Just BEFORE impact | Maximum stretch |
| AT impact | Maximum squash |
| AFTER impact | Ripple / bounce / follow-through |

---

## Action Style Comparison

| Style | Timing | Shows |
|-------|--------|-------|
| **Snappy** | Long holds → 2–3 frame transitions | Cuphead, classic WB cartoons |
| **Fluid** | Many in-betweens, soft arcs | Gravity Falls, Steven Universe, Avatar |
| **Anime** | Holds + burst speed + smears | Demon Slayer, One Piece |
| **Squashy** | Extreme deformation on impact | Fleischer, Ren & Stimpy |

---

## Avatar Bending Styles — Martial Art Reference

| Bending | Martial Art | Key Quality |
|---------|------------|------------|
| Waterbending | Tai Chi Chuan | Flowing, circular, redirecting |
| Earthbending | Hung Gar Kung Fu | Rooted, powerful, stance-heavy |
| Firebending | Northern Shaolin | Aggressive, direct, linear |
| Airbending | Ba Gua Zhang | Evasive, constant motion, circular |

---

## Walk Personality Variations

| Walk Type | Key Characteristic |
|-----------|-------------------|
| Strut | Chest out; strong accent hold per step |
| Shuffle | Feet barely lift; heavy downward weight |
| Creep | Slow; exaggerated tiptoe; long passing hold |
| Bounce | High Up position; spring in step; joy |
| Heavy | Very low Down; long cycle; earth-shaking |
| Injured | Asymmetric; weight favors good leg |

---

## Cuphead Walk Cycle Stats

- 6 unique drawings on twos = 12 frames
- Strong squash on Down position
- Aggressive bounce on Up position
- 2–3 frame transitions between all major poses
- Long holds (8–12 frames) between fast transitions

---

## Anticipation Proportions by Action

| Action | Hold | Anticipation | Main Action |
|--------|------|-------------|-------------|
| Jump (telegraphed) | 4–6 | 6–8 | 8–12 |
| Punch (heroic) | 6–8 | 8–10 | 4–6 |
| Surprise flinch | 0 | 1–2 | 2–4 |
| Heavy lift | 4 | 4 | 12+ |


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.

---

## Secondary Motion in Walk Cycles

| Element | Walk Behavior |
|---------|--------------|
| Head | Bobs down on Down position |
| Hair | Trails and bounces with each step |
| Shoulders | Rotate opposite to hips |
| Arms | Counter-swing to leg swing |
| Spine | Slight forward lean on fast walks |

---

## Numbers to Memorize

| Value | Meaning |
|-------|---------|
| 12 frames | Standard walk cycle (24fps) |
| 8 frames | Standard run cycle (24fps) |
| 4 poses | Contact, Down, Passing, Up |
| OPPOSITE | Anticipation direction vs. main action |
| Max stretch BEFORE, max squash AT | Impact timing rule |
