# Module 8: AI Content Production at Scale 🎨

> **Why this module matters:** In 2026, the difference between a $5K creative budget and a $500K creative budget is mostly skill, not money. AI lets you produce text, images, video, and voice at a fraction of the cost — IF you know the pipeline. This module builds the pipeline.

---

## 🎯 A Real Story: How a 2-Person Brand Out-Produced an Agency

In 2024, a 2-person DTC skincare brand called Bloom Hydration (the founder publicly shared their playbook on the [DTC Newsletter](https://dtcnews.com/) and on Demand Curve's blog) launched against Beauty competitors with 50-person marketing teams. Their entire creative output for the year:

- **180 image ads** for Meta + Google
- **60 video ads** for Reels + TikTok + YouTube Shorts
- **240 email creatives**
- **80 blog posts** (for SEO)
- **8 product launch landing pages**

Total content: ~570 assets in 12 months. By a 2-person team. Total annual creative budget: **$28,000**.

Their stack:

- **Claude + ChatGPT** for all copywriting
- **Midjourney v6 (now v7)** for images
- **Runway Gen-2 (now Gen-4)** for AI video
- **HeyGen** for AI avatar videos
- **ElevenLabs** for voiceovers
- **Make.com** (formerly Integromat) for batch automation
- **Notion** as the brain (prompt library, brand guidelines, asset tracker)

They beat 6 of their 8 direct competitors on Meta ad creative score (per Meta's Ad Library benchmarks) by Q4 2024. Customer acquisition cost: 34% lower than the average competitor.

This module teaches you their pipeline — adapted for 2026 tools. By the end, you can ship 50+ ad creatives a month, by yourself, for under $200 in tool costs.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The creative brief, insight, and proposition fields — covered in [Module 1](../Module-01-Campaign-Strategy-Brief-Writing/Reading.md)
> - The 3-second hook test and short-form video aspect ratios — covered in [Module 3](../Module-03-Google-Ads-PMax-Display-Video/Reading.md) and [Module 4](../Module-04-Meta-Ads-Mastery-FB-IG/Reading.md)
> - DCT (Hook × Body × CTA) creative test matrix — covered in [Module 4](../Module-04-Meta-Ads-Mastery-FB-IG/Reading.md)
> If any of these are shaky, pause and review before continuing.

---

## 🏭 The Content Production Pipeline (4 Stages)

Don't try to AI-everything-at-once. The pros work in stages.

```
STAGE 1 — STRATEGY (human-led)
  Brief → Insight → Message variations → AI prompt inputs

STAGE 2 — GENERATION (AI-led, human-supervised)
  Text → Image → Video → Voice → Composite
  In SERIES, not parallel. Each stage feeds the next.

STAGE 3 — REFINEMENT (human-led)
  Quality control, brand-voice check, legal/compliance check

STAGE 4 — DISTRIBUTION + ITERATION (mixed)
  Ship to platforms, measure, feed winners back into prompts
```

The mistake beginners make: trying to generate a video ad in one prompt. The pros generate the script first, then the storyboard, then the visuals, then the audio, then composite — with QC at each step.

---

## ✍️ Stage 1: AI Writing — Claude / ChatGPT / Gemini

### When to Use Each Model (2026)

| Use case | Best model |
|----------|------------|
| Long-form brand content (essays, threads, briefs) | Claude Sonnet 4.7 |
| Quick variants + structured outputs (50 headline variations) | ChatGPT GPT-5 |
| Multimodal (paste image, get copy reacting to it) | Gemini 2.5 Pro |
| SEO content with web research | ChatGPT (with web search) |
| Brand voice fidelity with custom instructions | Claude Projects |
| Code-heavy automation prompts | Claude |

### The "Brand Voice GPT" / Claude Project Pattern

Create ONE persistent context that holds your brand voice. Reuse it forever.

```
[YOUR BRAND VOICE PROJECT — paste once, reuse forever]

You are the in-house copywriter for Sunday Studio, a Pilates apparel
brand for women aged 28-45. Your job is to write copy that matches our
brand voice.

BRAND VOICE PILLARS:
- Calm authority (we know what we're doing, no hype)
- Specific (use real product details, not "amazing")
- Warm (talk like a friend, not a brand)
- Slightly witty (one well-placed joke per piece, not more)

NEVER USE THESE WORDS:
amazing, incredible, unlock, game-changer, supercharge,
revolutionize, perfect, ultimate, awesome

TONE EXAMPLES (mimic these — they were written by our founder):
1. "It took us 14 fabric samples to find one that doesn't ride up. 
   Try it for one class — if it does ride up, we'll refund you."
2. "Made in LA in a 6-person workshop. Limited runs because we don't
   want to compromise. Sign up below to get notified."
3. "Yes, our tops are $48. Lululemon's are $98 with worse stitching.
   You're welcome."

OUR PRODUCT:
[List of products, prices, key features]

OUR CUSTOMER:
[Detailed ICP from Module 1 brief]
```

Save this in **Claude Projects** (Claude.ai) or **Custom GPTs** (ChatGPT). Every future request: "Write 10 Meta ad headlines for our new spring collection" produces on-voice content immediately.

### Prompt Library — Build It Once

Create a Notion (or Google Docs) page called "Prompts." Save every prompt that worked. Categorize:

```
/Prompts
  /Headlines (Meta, Google, LinkedIn)
  /Body Copy (Reels scripts, Feed copy)
  /Email Subject Lines
  /SMS / Push Notification
  /Blog Outlines
  /Product Descriptions
  /Sales Page Sections
  /Landing Page Copy
  /Customer Service Replies
  /SEO Title Tags + Meta Descriptions
```

After 6 months, you'll have 200+ tested prompts. Asset velocity 10x's. This is what separates pros from people typing "write me a Facebook ad" each time.

---

## 🖼️ Stage 2: AI Image Generation — Midjourney v7

Midjourney remained the leader for marketing imagery through 2024–2025. **Midjourney v7** (released late 2025) is the current standard. DALL-E 3, Flux Pro, and Adobe Firefly 3 are strong alternatives for specific needs.

### The Midjourney Prompt Framework

```
[SUBJECT] [STYLE] [COMPOSITION] [LIGHTING] [TECHNICAL PARAMETERS]

Example:
A woman in her early 30s wearing a fitted Pilates top, mid-stretch on a
reformer machine in a sunlit Los Angeles studio, photorealistic, shot on
Leica Q3, golden hour soft light from west-facing windows, shallow depth
of field f/2.0, intimate angle, neutral color grading
--ar 1:1 --v 7 --style raw --s 50
```

### Parameter Cheat Sheet (Midjourney v7)

| Parameter | What it does |
|-----------|--------------|
| `--ar 1:1` | Aspect ratio (1:1 square, 9:16 vertical, 16:9 horizontal) |
| `--v 7` | Version (always specify v7 for current model) |
| `--style raw` | Less stylized; better for product photography |
| `--s 50` | Stylization (0-1000); lower = closer to prompt |
| `--c 0` | Chaos (0-100); creative variation |
| `--cref [URL]` | Character reference (consistent person across images) |
| `--sref [URL]` | Style reference (mimic a reference image's aesthetic) |
| `--no [thing]` | Negative prompt — exclude something |
| `--seed [number]` | Reproducibility — same prompt + seed = same image |

### Prompt Patterns by Use Case

```
PRODUCT PHOTOGRAPHY:
[Product] on [background], professional product photography, studio
lighting, sharp focus, [aspect ratio for placement]
--style raw --s 50 --ar 4:5

LIFESTYLE IMAGERY:
[Person] [activity] [environment], cinematic, [time of day], shot on
[camera], [aperture/depth], natural light, color graded warm/cool
--style raw --s 100 --ar 1:1

ABSTRACT BRAND VISUAL:
[Concept] visualized as [metaphor], minimalist, [color palette],
geometric shapes, modern editorial design
--s 750 --ar 16:9

FOUNDER PORTRAIT (use a real photo as --cref):
[Description of person from photo], [location], [outfit], [mood],
photorealistic
--cref [URL of founder photo] --style raw --ar 4:5
```

### Common Mistakes

- ❌ Single-shot prompts with no parameters — you'll get generic stock-looking images
- ❌ Not using `--cref` for repeating characters — your "founder" looks different each image
- ❌ Asking Midjourney to render text — STILL bad in v7. Use Canva/Figma for any text overlays
- ❌ Single aspect ratio — always render in 1:1, 4:5, AND 9:16 for full platform coverage

---

## 🎬 Stage 3: AI Video Generation

The 2026 AI video landscape:

| Tool | Best for | 2026 spec |
|------|----------|-----------|
| **Runway Gen-4** | Cinematic 5-10 sec clips | 4K, up to 10 sec, text+image-to-video |
| **Pika 2.0** | Stylized + character-driven | Up to 10 sec, strong character motion |
| **Sora (OpenAI)** | Long-form (60+ sec) realistic | Limited availability, very high quality |
| **HeyGen** | AI avatar talking heads | Multi-language, lip sync, custom avatars |
| **Synthesia** | Corporate explainer videos | Avatar library, B2B-friendly |
| **D-ID** | Animating still photos | Speak from a single image |

### The Smart Workflow (Not Single-Shot)

Don't ask Runway for a 30-second ad. Build it in segments.

```
1. SCRIPT (Claude)
   30-second script with timestamps:
   "0:00 - Hook line"
   "0:03 - Demonstration"
   "0:08 - Benefit 1"
   "0:13 - Benefit 2"
   "0:18 - Social proof"
   "0:23 - CTA"

2. STORYBOARD (Midjourney)
   One frame per segment (6 frames for 30-sec)
   Same character via --cref

3. ANIMATE EACH SEGMENT (Runway Gen-4)
   Image-to-video, 4-5 sec each
   Use storyboard frame as starting image

4. STITCH (CapCut, Premiere, DaVinci)
   Combine clips, add cuts, transitions

5. ADD VOICE (ElevenLabs)
   Generate voiceover from script

6. ADD CAPTIONS (CapCut auto-captions or Submagic)
   Burned-in for mute viewers

7. EXPORT IN ALL ASPECTS (9:16 + 1:1 + 16:9)
```

### HeyGen for Founder-Style Videos

HeyGen creates AI avatars that look and speak as a real person. For founder-led content where you don't want to be on camera every week:

1. Record yourself for 5 minutes (or upload existing footage)
2. HeyGen creates your "AI avatar"
3. Type any script — your avatar reads it on video
4. Multi-language: same avatar speaks Spanish, German, Japanese with lip sync

**Real example**: Mike Salguero, founder of ButcherBox, publicly shared at Shopify Editions 2024 that he uses a HeyGen avatar for 60% of their email video greetings. Customers don't notice. Open rates: same as his real recordings.

---

## 🎙️ Stage 4: AI Voice — ElevenLabs

ElevenLabs Multilingual v3 (2025) is the current standard for AI voiceover. Quality is indistinguishable from human voice for short-form content.

### Use Cases

| Use case | Approach |
|----------|----------|
| Ad voiceovers | Pick a voice from library, paste script, generate |
| Multi-language ads | Clone your founder's voice, generate in 30+ languages |
| Podcast intros | Generate consistent intro per episode |
| IVR / phone systems | Pre-record common responses |
| Audio articles | Convert blog posts to audio |

### Voice Cloning Workflow

```
1. Record yourself reading 1-2 minutes of varied text
2. Upload to ElevenLabs → Create Voice Clone
3. Wait ~5 minutes for processing
4. Now your "voice" speaks any text you paste
5. Adjust: speed, stability, clarity
```

🚨 **Ethics**: Get explicit written permission before cloning someone else's voice. Many jurisdictions are passing voice-cloning legislation (NY State already has, California and EU in progress). Bloom Hydration's founder publicly noted they have written voice consent from every employee whose voice they've cloned.

---

## 🔁 Batch Production: Make.com + n8n

The secret to producing 50+ assets per month isn't speed — it's automation. Make.com (formerly Integromat) and n8n let you chain AI tools into batch pipelines.

### Example: "Generate 30 Ad Variants" Pipeline

```
[Trigger: Google Sheet row added]
   ↓
[Step 1: Claude API]
   "Generate 10 headlines for product: {Product Name}, target: {Audience}"
   ↓
[Step 2: For each headline →]
   [Midjourney via API: Generate matching image]
   ↓
[Step 3: For each headline + image →]
   [Send to Slack for approval]
   ↓
[Step 4: On approval]
   [Save to Google Drive folder]
   [Auto-upload to Meta Ads Library via API]
```

### Make.com vs Zapier vs n8n

| Tool | Pros | Cons |
|------|------|------|
| **Zapier** | Easiest UI; biggest app library | Expensive at scale ($299+/mo for serious use) |
| **Make.com** | Visual flow builder; cheaper per operation | Steeper learning curve |
| **n8n** | Open source; self-hostable; cheapest at scale | Self-host = ops overhead |

For solo marketers: start with Make.com ($9/mo gets you 10,000 operations). Move to n8n self-hosted if you exceed that.

---

## 💵 The $200/Month Creative Tool Stack (Solo Marketer)

```
WRITING:
  Claude Pro:          $20/mo
  ChatGPT Plus:        $20/mo

IMAGES:
  Midjourney Standard: $30/mo (unlimited slow GPU)

VIDEO:
  Runway Standard:     $35/mo
  HeyGen Pro:          $39/mo (avatar generation)

VOICE:
  ElevenLabs Starter:  $11/mo

AUTOMATION:
  Make.com Core:        $9/mo

EDITING:
  CapCut:              FREE
  Canva Pro:           $15/mo

TOTAL: $179/mo
```

For that ~$2,150/year, you can produce:

- 200+ ad creatives
- 100+ blog posts
- 60+ video ads
- 240+ email designs
- Unlimited landing page variants

Compare to: hiring one freelance designer at $4K/mo. The math is obvious.

---

## 🚨 Common AI Production Mistakes

| Mistake | Why it hurts | Fix |
|---------|--------------|-----|
| **No brand voice prompt** | Every output sounds generic | Build Brand Voice Project once, reuse forever |
| **Single-shot complex outputs** | Quality degrades fast | Stage the pipeline: text → image → video |
| **Skipping QC pass** | AI hallucinates / says wrong things | Human review every asset before publishing |
| **No prompt library** | Reinventing prompts daily | Save every winning prompt in Notion |
| **One aspect ratio** | Can't run on Reels/Feed/Shorts | Always export 9:16 + 1:1 + 16:9 |
| **Trying to render text in images** | Still looks wrong | Use Canva/Figma overlay for text |
| **Ignoring batch automation** | Stays slow forever | Make.com pipelines for repeat tasks |
| **AI without strategy** | Volume of generic content | Brief → Insight → AI generation (Stage 1 matters) |

---

## ⚠️ Ethical & Legal Considerations (2026)

| Topic | Current state |
|-------|---------------|
| **Voice cloning** | Many jurisdictions require explicit consent; growing legislation |
| **AI-generated likeness** | EU AI Act (in force 2026) requires disclosure of AI deepfakes in ads |
| **Copyright on AI images** | US Copyright Office: AI-generated work is NOT copyrightable; human modifications can be |
| **Stock-trained models** | Some models (Stable Diffusion) trained on copyrighted images; legal status unsettled |
| **Influencer disclosure** | FTC requires disclosing AI-generated influencer content as such |
| **Synthetic media in political ads** | Banned in CA, IL, NY (and growing list) |

**Practical guardrails for marketers:**
1. Always disclose AI-generated avatars in customer-facing content where required by region
2. Get written consent for voice/likeness cloning
3. Don't claim AI-generated images as your original photography
4. Use AI to enhance human creativity, not impersonate real people without consent

---

## 🎓 Real Case Study: How Klarna Cut Marketing Costs 25% With AI

Klarna's CEO Sebastian Siemiatkowski publicly shared at the [Klarna Q3 2024 earnings call](https://www.klarna.com/) that AI tools reduced their marketing production costs by **$10M+ annually** — and headcount in marketing operations dropped by ~20%.

What they automated:

- Image generation: 80% of campaign images via Midjourney + DALL-E (cited specifically)
- Copy: 40% of email + ad copy drafted by AI (always human-reviewed)
- Translation: 100% of regional copy via AI (then native review)
- A/B test variant generation: 90% AI-generated

Sebastian's framing: "AI isn't replacing marketers. It's replacing the bottleneck that's been holding marketers back — production capacity. Our marketers now strategize and review, not produce."

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Brand Voice Project** | Persistent context in Claude Projects / Custom GPT that holds your brand voice |
| **Prompt Library** | Reusable, categorized collection of tested prompts |
| **Midjourney v7** | Current Midjourney model (late 2025) |
| `--cref` | Midjourney character reference parameter |
| `--sref` | Midjourney style reference parameter |
| **Runway Gen-4** | Current Runway video model (2026) |
| **Pika 2.0** | Pika's current video model |
| **Sora** | OpenAI's video model |
| **HeyGen** | AI avatar video platform (talking heads) |
| **Synthesia** | AI avatar for corporate B2B videos |
| **ElevenLabs Multilingual v3** | Current ElevenLabs voice model |
| **Voice Clone** | AI replica of a real person's voice |
| **Make.com** | Visual automation platform for chaining AI tools |
| **n8n** | Open-source automation alternative to Make.com |
| **Storyboard** | Visual sequence of frames planning a video |
| **Aspect Ratio** | Width:height (1:1 square, 9:16 vertical, 16:9 horizontal) |

---

## ✅ Module 8 Summary

You now know:

- 🏭 The 4-stage content pipeline (Strategy → Generation → Refinement → Distribution)
- ✍️ Which AI writing model to use when (Claude vs ChatGPT vs Gemini)
- 🎨 How to build a Brand Voice Project + Prompt Library
- 🖼️ Midjourney v7 prompt framework + parameters
- 🎬 The AI video stack (Runway, Pika, HeyGen, Synthesia)
- 🎙️ ElevenLabs for voiceover + voice cloning ethics
- 🔁 Make.com / n8n for batch automation
- 💵 The $200/mo solo marketer tool stack
- ⚖️ Ethical and legal guardrails

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`
3. 📋 Review `Cheat-Sheet.md`
4. ➡️ Move to [Module 9: Marketing Automation + AI Agents](../Module-09-Marketing-Automation-AI/Reading.md)

---

## Discussion — Socratic prompts

Each prompt has more than one defensible answer. Argue from the frameworks in this module.

1. Bloom Hydration's 2-person team out-produced an agency with $28K. A skeptic says they could have hired one mid-level designer for the same money and gotten better assets. Argue both sides — when does AI volume beat human craft, and when does the opposite hold?
2. The reading prescribes a STAGED pipeline (Strategy → Generation → Refinement → Distribution) and warns against "single-shotting" complex outputs. Defend the case that for a solo founder running a 14-day capstone, the discipline of staging is too slow — and the case that skipping stages is exactly why most beginner AI content looks generic.
3. The US Copyright Office's 2024 position is that AI output isn't copyrightable on its own; human modifications can be. Build the case for relying heavily on AI generation for fast-moving paid creative (where copyright matters less) and the case against (where original brand IP matters). Where does each apply?
4. EU AI Act (2026) requires disclosure of AI deepfakes / synthetic likenesses in ads. A growth team argues this kills HeyGen avatar ads entirely. A legal counsel argues a small disclosure badge is enough. Walk through the brand-trust and conversion-rate trade-offs.
5. Voice cloning legally requires consent in many jurisdictions. A founder wants to clone a famous podcaster's voice "just to test" an internal demo. Walk through where the legal, ethical, and brand-reputation lines actually fall — and what an honest internal review process looks like.

---

> **Where this leads.**
> - Inside this course: Module 9 wires the creative output into marketing-automation flows (email, push, retargeting); Module 10 (Capstone) runs your AI-produced creative in a live $200 campaign.
> - Cross-course: [16-AI-SEO-Specialist](../../16-AI-SEO-Specialist/) covers AI content for organic SEO (different optimization function); [18-AI-Marketing-Capstone-Portfolio](../../18-AI-Marketing-Capstone-Portfolio/) collects polished creative into a public portfolio.
> - Practice: Practice Exam 2 has ~7 questions from this module (4-stage pipeline, Brand Voice Project, Midjourney --cref, Runway, HeyGen, voice-clone ethics).

---

## 📚 Further Reading (Optional)

- 📖 [Midjourney Official Docs](https://docs.midjourney.com/) — current parameters + version notes
- 📖 [Runway Academy](https://academy.runwayml.com/) — free training on Runway Gen-4
- 📖 [ElevenLabs Voice Cloning Guide](https://elevenlabs.io/docs)
- 📖 [Demand Curve — AI Marketing Stack](https://www.demandcurve.com/playbooks)
- 📖 [Anthropic — Claude Projects Documentation](https://docs.anthropic.com/)
- 📖 [Klarna Annual Reports — AI Impact](https://www.klarna.com/) — earnings call disclosures
- 📖 [EU AI Act — Marketing Implications](https://artificialintelligenceact.eu/) — for compliance reading
