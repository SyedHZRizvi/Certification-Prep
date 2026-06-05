# Module 2 Cheat Sheet — Body Mechanics and Weight ⚖️

## COG Quick Facts

```
Location:  Pelvis, between hip joints (~55% of total height)
Base of support:  Ground area between feet
Rule:  COG must project to base of support or character falls/leaps
COG shifts BEFORE every major action (lift, jump, punch, push)
```

---

## Heavy vs. Light Character Properties

| Property | Heavy | Light |
|----------|-------|-------|
| Anticipation | Long, deep | Short, quick |
| Follow-through | Barely overshoots | Far overshoots |
| Secondary settle | Shudder → slow settle | Whip → spring |
| Recovery from impact | Absorbs, no spring | Springs back |
| Stride | Slow, deliberate | Fast, staccato |

---

## Punch — 7 Phases

```
1. ANTICIPATION    4-8f   COG drops back; shoulder rotates back
2. WEIGHT TRANSFER 2-4f   Weight forward to lead foot
3. HIP DRIVE       2-3f   HIPS rotate FIRST (power source)
4. TORSO           1-2f   Follows hips with 2-frame delay
5. SHOULDER        1f     Follows torso with 1-frame delay
6. ARM EXTENSION   2-4f   Fist arcs to target (last link)
7. IMPACT/SETTLE   4-10f  Squash on contact; COG stabilizes
```

**KEY:** Ground → foot → hip → torso → shoulder → arm. NEVER arm-only.

---

## Jump — 5 Phases

```
1. CROUCH/ANTICIPATION   COG drops; stores potential energy
2. LAUNCH                Legs straighten; arms drive up; COG rises
3. APEX                  STRETCH at peak; brief slow-in
4. DESCENT               Body curls for landing; COG falls
5. LANDING/RECOVERY      Knees absorb; follow-through; COG stabilizes
```

---

## Fall — Real vs. Staged

| | Real | Staged |
|-|------|--------|
| Duration | 200–400ms | 12–30 frames |
| Head | Drops with body | Trails 4–6 frames |
| Arms | Random flail | Symmetrical windmill |
| Impact | Instantaneous | 2–4f slow approach → snap |
| Settle | Final position | Head → hair → clothing |

**Pancake Error:** Character falls as rigid unit. Fix: HIPS LEAD, head trails.

---

## Real vs. Animated Physics

| Real | Animated |
|------|----------|
| Exact timing | Slower for emotion; faster for comedy |
| Linear freefall spacing | Slow-in / slow-out for felt weight |
| Exact parabolic arc | Flattened at apex for readability |
| Instant impact | 2–4f squash on contact |
| Simultaneous motion | Staggered overlap: body → appendages → tips |

---

## Animator's Weight Checklist

- [ ] COG traceable every frame?
- [ ] COG over base of support?
- [ ] Action originates from ground up?
- [ ] Anticipation proportional to weight/force?
- [ ] Secondary parts have appropriate drag/settle?
- [ ] Character reads as their intended mass?

---

## Key Terms

| Term | Definition |
|------|-----------|
| COG | Center of gravity — pelvis area in bipeds |
| Drag | Secondary parts resist start of motion |
| Follow-through | Secondary parts resist stop of motion |
| Pancake error | Rigid-unit fall without hip lead |
| Staged fall | Animated fall 2–3× longer than real |
| Animated physics | Exaggerated real physics for emotional feel |
| Ground reaction | Feet press harder into ground at force initiation |

---

## IK / FK Switching Reference

| Situation | Use IK | Use FK |
|-----------|--------|--------|
| Foot or hand on surface | YES — stays planted | No |
| Arm swinging freely | Rarely | YES — natural arc |
| Jump apex (mid-air) | Hip IK only for root | Limbs in FK |
| Picking up object | IK at contact frame | FK for reach arc |
| Quadruped walk | IK on contact frames | FK for swing phase |

**Switch rule:** Always switch on a HELD POSE, never during motion.

---

## Fur/Cloth Simulation Awareness (RenderMan / Brave)

```
SIMULATION ADDS:
  → Apparent delay in secondary motion
  → 10–20 frames of additional settle after contact
  → Amplification of any foot slides in base animation

COMPENSATE BY:
  → Reducing anticipation amplitude (sim adds its own pre-tension)
  → Ending settle frames cleanly (sim adds its own trailing settle)
  → Eliminating all foot slides BEFORE simulation (sim amplifies them)

BRAVE / MERIDA PIPELINE:
  1. Block with low-res proxy hair
  2. Run sim → review interpretation
  3. Return to animation to adjust timing
  4. Iterate 2–3 times before final
```

---

## Arcs vs. Straight Lines Reference

| Situation | Arc Required | Straight Line / Smear OK |
|-----------|-------------|------------------------|
| Naturalistic acting | Always | Never |
| Object in air (parabola) | Required | Never |
| Fast impact (speed lines) | Sometimes | 1–2 frames maximum |
| Stylized / Spider-Verse | Per style guide | Per style guide |
| Hand during fast swing | Arc visible throughout | Smear at peak speed |

---

## Module 2 Exam Rapid-Fire

| Question | Answer |
|---------|--------|
| COG location (biped) | Pelvis, ~55% of total body height |
| COG path during walk (vertical) | Inverted arc — rises at mid-stride, falls at contact |
| Most common COG miss in walk | Lateral translation without vertical arc |
| Drag vs. follow-through | Drag resists motion starting; follow-through resists motion stopping |
| Punch power source | Ground → foot → hip → torso → shoulder → arm (arm is LAST) |
| Gallop aerial error analogy | Placing aerial at stretched position not gathered |
| Pancake error | Rigid-unit fall; fix: hips lead, head trails 4–6f |
| RenderMan fur effect on animation | Adds apparent lag; amplifies foot slides; animator must compensate upstream |
| IK/FK switch timing | Always on a held pose, never during motion |
