# Module 5 Cheat Sheet, Creature Animation 🐉

## Quadruped Gaits at a Glance

| Gait | Speed | Key Feature | Airborne? |
|------|-------|------------|-----------|
| Walk | Slowest | ≥2 feet always on ground | No |
| Trot | Medium | Diagonal pairs together | Brief |
| Canter | Fast | 3-beat rhythm; one lead foot | Yes |
| Gallop | Fastest | Full aerial phase | Yes, at GATHERED position |

**Gallop aerial phase = GATHERED (tucked), NOT stretched, the #1 error**

---

## Gallop Types

| Type | Pattern | Examples |
|------|---------|---------|
| Rotary | RF→LF→RH→LH | Cats, cheetahs |
| Transverse | RF→LF→LH→RH | Horses, dogs |

---

## Bird Flight

| Phase | Wing | Force |
|-------|------|-------|
| Downstroke | Open, sweep down-forward | Lift + thrust |
| Upstroke | Slightly folded, sweep up-back | Recovery only |

**Three flight patterns:** Soaring (no flap), Flapping (4–8f cycle), Undulating (flap-fold-flap)

**Feather hierarchy:** Primary (most individual) → Secondary (group) → Coverts (minimal; high-velocity only)

---

## Fish Locomotion Types

| Type | Wave Extent | Examples |
|------|------------|---------|
| Anguilliform | Full body (100%) | Eels |
| Subcarangiform | Rear 50% | Most fish |
| Carangiform | Rear 33% | Tuna, mackerel |
| Ostraciform | Fins only, rigid body | Boxfish |

**Wave direction: head → tail (posteriorly). Never reverse.**

---

## Behavioral Borrowing Framework

```
DECISION BEFORE FIRST KEY:
  "Which real animal's behavioral library does this creature use?"

Document in the CREATURE BIBLE.
All animators on the show use the same bible.
```

| Creature | Borrowed From | Key Behaviors |
|---------|-------------|--------------|
| Toothless (HTTYD) | Cat + Labrador | Slow blink, head-tilt, belly-flop |
| Nick Wilde (Zootropolis) | Crow | Side-eye, stillness, head bobs |
| Judy Hopps (Zootropolis) | Terrier | Head snaps, forward lean, ear position |

---

## Tail Animation Rules

```
BASE → MID → TIP (progressively more lag)
Tip = greatest lag + highest frequency in follow-through

Amplitude = Emotion:
  Large amplitude = Excited/Happy
  Low amplitude   = Submissive/Fearful
  Stiff/slow       = Aggressive
```

---

## Common Creature Animation Errors

| Error | Fix |
|-------|-----|
| Gallop aerial at stretch position | Move aerial to gathered (tucked) position |
| Anthropomorphic: all human body language | Use ears, tail, muzzle as primary expression |
| Fish head and tail opposing | Wave always travels head → tail |
| Pectoral fins extended at high speed | Fold fins flat at speed |
| No creature bible | Document behavioral vocabulary before production |

---

## Quadruped Gait Timing Charts (24-Frame Baseline)

### Walk (24f cycle, 6f offset per foot)
```
FRAME   LH (Left Hind)    RH (Right Hind)   LF (Left Front)   RF (Right Front)
1       Contact           Mid-swing         Follow-through    Mid-swing
7       Mid-swing         Contact           Mid-swing         Follow-through
13      Follow-through    Mid-swing         Contact           Mid-swing
19      Mid-swing         Follow-through    Mid-swing         Contact
≥2 feet on ground at all times  |  Spine oscillates: flexes 7–13, extends 1–7
```

### Gallop (8f cycle, aerial at GATHERED position, frame 4–5)
```
FRAME   RF     LF     RH     LH     PHASE
1       Con    Swing  Swing  Swing  Lead foot strike
2       Push   Con    Swing  Swing  Second foot
3       Swing  Push   Con    Swing  Hind sequence
4       AERIAL AERIAL Push   Con    Gathered aerial begins
5       AERIAL AERIAL AERIAL AERIAL FULL AERIAL, GATHERED (tucked)
6       App    AERIAL AERIAL Push   Stretch aerial
7       Con    App    AERIAL AERIAL Return
8       Push   Con    App    AERIAL Back to lead foot
```

**#1 error:** Placing aerial at frame 5 of a stretched pose. Correct: aerial at GATHERED.

---

## Mocap Cleanup Checklist for Creature Shots

```
PRE-RETARGET:
[ ] Confirm actor mass vs. character intended mass
[ ] Confirm foot type: plantigrade / digitigrade / unguligrade
[ ] Identify all contact events in raw data

RETARGETING:
[ ] Leg length ratio adjusted
[ ] Contact intent preserved at frame level
[ ] Foot type conversion applied (plantigrade → digitigrade adds heel lift)

POST-RETARGET:
[ ] Foot locking at all contact frames
[ ] No ground penetration in any frame
[ ] COG path reflects character mass (not actor mass)
[ ] Spine flexibility matches species (horse: rigid / cat: highly flexible)
[ ] All secondary (tail, ears, jowls) has appropriate lag + amplitude

PERFORMANCE:
[ ] Anticipation duration matches character mass
[ ] Behavioral library (creature bible) consulted
```

---

## Quadruped Expression Substitution Table

| FACS AU | Human Expression | Quadruped Equivalent |
|---------|----------------|---------------------|
| AU1 Inner brow | Concern/sadness | Ear rotation forward + head lowered |
| AU4 Brow lower | Anger | Ears back + muzzle wrinkle |
| AU6+12 Genuine smile | Happy | Soft eye + mouth open + panting rhythm |
| AU15 Depression | Sadness | Head lowered + weight back + tail low |
| AU5 Lid raise | Fear/surprise | Eyes wide + ears pinned back |

**Rule:** Ears, tail, and weight distribution are PRIMARY expression channels in quadrupeds. The muzzle is secondary.

---

## Module 5 Exam Rapid-Fire

| Question | Answer |
|---------|--------|
| Walk: minimum feet on ground | ≥2 at all times |
| Walk: foot phase offset (24f cycle) | 6 frames per foot (25% cycle) |
| Gallop aerial phase position | GATHERED (tucked), NOT stretched |
| Rotary gallop species | Cats, cheetahs |
| Transverse gallop species | Horses, dogs |
| Bird downstroke forces | Lift + forward thrust (upstroke = recovery only) |
| Fish wave direction | Head → tail (posteriorly) |
| Toothless primary reference | Domestic cat |
| Primary expression channels (quadruped) | Ears, tail, weight distribution, NOT muzzle first |
| Creature bible purpose | Document behavioral vocabulary before production starts |
