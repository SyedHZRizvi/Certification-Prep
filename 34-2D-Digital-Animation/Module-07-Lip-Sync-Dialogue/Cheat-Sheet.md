---
permalink: /34-2D-Digital-Animation/Module-07-Lip-Sync-Dialogue/Cheat-Sheet/
title: "Module 7 Cheat Sheet: Lip Sync & Dialogue"
---

# ⚡ Module 7 Cheat Sheet — Lip Sync & Dialogue

---

## Preston Blair Phoneme Set — MEMORIZE

| Group | Sounds | Mouth Shape |
|-------|--------|-------------|
| **AI** | A, I (long) | Wide open, teeth visible |
| **E** | Long E | Wide smile, upper teeth |
| **O** | Oh, go | Round, pursed |
| **U** | You, do, oo | Small round, lips forward |
| **CDG** | C, D, G, S, T, Z | Slightly open, tongue active |
| **FV** | F, V | Upper teeth on lower lip |
| **L** | L | Open, tongue tip to palate |
| **MBP** | M, B, P | Closed or nearly closed |
| **REST** | Silence, exhale | Relaxed, slight opening |
| **WQ** | W, Q | Small round pucker |

**10 groups. Memorize all of them.**

---

## Audio Sync Modes (Animate)

| Mode | Use |
|------|-----|
| **Stream** | Lip sync — tied to playhead ← ALWAYS |
| **Event** | SFX, music — plays independently |

---

## Manual Lip Sync Workflow

```
1. Import audio — Stream sync
2. Listen 5+ times before touching animation
3. Mark syllable positions on waveform/dope sheet
4. Assign Preston Blair mouth shape per syllable
5. Block mouth shapes (rough pass)
6. Add body acting + head rotation
7. Add brow + eye animation
8. RAM Preview with audio — verify sync
9. Refine off-sync frames
10. Check: does the performance feel true?
```

---

## Character Animator Phoneme Groups

| Ch Label | Sounds |
|----------|--------|
| Open | AH sounds |
| D-G-K-Ch | Tongue consonants |
| EE | Long E |
| F-V | Labiodental |
| L | Lateral |
| M-B-P | Bilabial stops |
| Oh | Round vowels |
| Oh-Oo | Rounded back vowels |
| Qw-Oo | W, Q |
| Rest | Silence |

---

## Preston Blair vs. Character Animator

| | Preston Blair | Ch Equivalent |
|-|--------------|--------------|
| AI group | AI | Open |
| E group | E | EE |
| CDG group | CDG | D-G-K-Ch |
| REST | REST | Rest |

---

## Character Animator Puppet File Requirements

- Layered Photoshop (.psd) or Illustrator (.ai)
- Layer names must match Ch phoneme group names exactly
- Mouth layers set as **Exclusive** (only one shows at a time)
- All face features under a head group

---

## Phoneme Breakdown Examples

**"People":**
```
P  → MBP
ee → E
p  → MBP
l  → L
```

**"Animation":**
```
an  → AI
i   → E
may → AI
shun → U
```

---

## Performance Checklist (Beyond Technical Sync)

- Eyes react BEFORE mouth begins to speak
- Brows animate independently for emotion
- Body weight shifts during speech emphasis
- Held poses between words (no constant jiggle)
- Natural pause before answering
- Character "means" what they say — acting, not reciting

---

## Lip Sync by Production Type

| Type | Method |
|------|--------|
| Major TV (Disney, Nick) | Manual Preston Blair, frame-by-frame |
| YouTube animation | Mix of manual and Ch automation |
| Explainer / corporate | Character Animator (automation priority) |
| Game cinematics (2D) | Ch auto + manual cleanup |

---

## Dope Sheet Structure (Lip Sync)

| Frame | Sound | Mouth Shape |
|-------|-------|------------|
| 1–3 | breath | REST |
| 4–6 | stressed vowel | AI or E |
| 7–9 | transition | CDG or MBP |
| 10–12 | next syllable | per phoneme |
| 13+ | trailing off | REST |

Waveform amplitude peaks = stressed open sounds (AI, E, O).
Flat waveform = REST shape.


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.
