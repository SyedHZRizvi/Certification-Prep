# 📋 Module 8 Cheat Sheet: AI Content Production at Scale

> One page. Print it. Tape it to your monitor.

---

## 🏭 4-Stage Pipeline

```
1. STRATEGY (human)     → brief + insight + message variations
2. GENERATION (AI)      → text → image → video → voice → composite
3. REFINEMENT (human)   → QC, brand voice, legal
4. DISTRIBUTION (mixed) → ship, measure, feed winners back
```

🧠 Never single-shot complex outputs.

---

## ✍️ AI Models by Use Case (2026)

| Use case | Model |
|----------|-------|
| Long brand content | **Claude Sonnet 4.7** |
| Variants + structure | **ChatGPT GPT-5** |
| Multimodal (image-in) | **Gemini 2.5 Pro** |
| SEO w/ web research | ChatGPT (web search) |
| Brand voice fidelity | Claude Projects |

---

## 🎨 Brand Voice Project (Build Once)

```
PASTE INTO CLAUDE PROJECT / CUSTOM GPT:

1. Brand voice pillars (3-5)
2. NEVER USE words list
3. 3 tone examples (real founder writing)
4. ICP description
5. Product list
```

→ Reuse forever. Massive consistency gain.

---

## 🖼️ Midjourney v7 Cheat Card

```
[SUBJECT] [STYLE] [COMPOSITION] [LIGHTING] [TECH PARAMS]
```

### Key params

| Param | What |
|-------|------|
| `--ar 1:1` | aspect (1:1 / 9:16 / 4:5 / 16:9) |
| `--v 7` | version (always set) |
| `--style raw` | less stylized |
| `--s 50` | stylization 0-1000 |
| `--cref [URL]` | character ref (same person across) |
| `--sref [URL]` | style ref (mimic aesthetic) |
| `--no [x]` | negative prompt |

🚨 Always render 1:1 + 4:5 + 9:16 — not one and resize.

---

## 🎬 AI Video Stack

| Tool | Specialty |
|------|-----------|
| **Runway Gen-4** | Cinematic 5-10s clips |
| **Pika 2.0** | Stylized, character motion |
| **Sora** | Long-form realistic |
| **HeyGen** | AI avatar talking heads |
| **Synthesia** | Corporate explainer |
| **D-ID** | Animate still photos |

### Pipeline (Stage It)

```
Script → Storyboard → Animate each → Voice → Stitch → Captions → Export
(Claude)  (Midjourney) (Runway)     (EL)   (CapCut)  (Submagic) (3 aspects)
```

---

## 🎙️ ElevenLabs Voice

- Multilingual v3 standard
- Voice clone with 1-2 min sample
- 30+ languages, same character
- 🚨 Get written consent for cloning

---

## 🔁 Make.com vs Zapier vs n8n

| Tool | Cost | Best for |
|------|------|----------|
| **Make.com** | $9-29/mo | Solo marketers |
| Zapier | $20-$299+ | Easy setup, expensive at scale |
| n8n self-host | ~free + compute | Cheapest at scale |

---

## 💵 Solo Marketer Stack (~$180/mo)

```
Claude Pro          $20
ChatGPT Plus        $20
Midjourney          $30
Runway Standard     $35
HeyGen Pro          $39
ElevenLabs Starter  $11
Make.com Core       $9
Canva Pro           $15
─────────────────────
TOTAL              $179
```

→ Replaces ~$4K/mo of freelance design.

---

## ⚖️ Legal/Ethical Guardrails

- ✅ Get written voice/likeness consent
- ✅ Disclose AI deepfakes in EU
- ✅ FTC: disclose AI-influencer content
- ❌ Claim AI images as your photography
- ❌ Clone real voices without consent

US Copyright: AI-only output = NOT copyrightable.

---

## ⚠️ Top Mistakes

- ❌ No brand voice prompt = generic
- ❌ Single-shot complex outputs
- ❌ Skipping human QC
- ❌ No prompt library (reinvent daily)
- ❌ One aspect ratio
- ❌ Rendering text inside Midjourney
- ❌ No batch automation

---

## ✏️ Quick Self-Check

1. The 4 production stages?
2. Claude vs ChatGPT vs Gemini — when?
3. `--cref` does what?
4. HeyGen use case?
5. Solo stack monthly cost?

---

➡️ [Module 9: Marketing Automation + AI](../Module-09-Marketing-Automation-AI/Reading.md)
