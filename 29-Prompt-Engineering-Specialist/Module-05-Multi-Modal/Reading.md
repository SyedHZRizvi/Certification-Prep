# Module 5: Multi-Modal Prompting 🖼️

> **Why this module matters:** 10% of the Final Mock. By 2026, "LLM" is a misnomer — the frontier models all see images and many also handle audio and video. The prompt patterns for multi-modal inputs are different enough from text that you need a fresh playbook, and the failure modes are uglier (OCR drift, chart misreads, multi-image confusion).

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1–4
> - Base64 encoding (we'll show one-liners)
> - Basic image concepts (resolution, aspect ratio, file formats)
>
> You do NOT need image-processing experience. We define everything.

---

## 🧾 A Story: The Insurance Claim That Was Settled in 11 Seconds

Meet Aaliyah, a claims adjuster at a regional auto insurer. Pre-2024, her team processed first-notice-of-loss (FNOL) claims through a 14-step manual flow: photos uploaded, claim form filled, adjuster opens 8 tabs (driver's license, registration, prior claims, damage photos, repair estimates, deductible lookup, policy validation, fraud-screen list). Median time from photo upload to first-decision: **6 days, 4 hours**.

In Q2 2024, Aaliyah's team piloted a multi-modal flow with Claude 3 Opus (then GPT-4V and later Gemini 2.0 Flash). The prompt looked like this:

```
You are an auto-claims first-pass triage assistant. Look at these photos of a vehicle and extract:
1. Vehicle make / model / year (from visible badges, license plate frame, or distinctive shape)
2. License plate (US format) — return UNREADABLE if illegible
3. Damage location (e.g., "rear-driver-side bumper")
4. Damage severity (LOW / MED / HIGH / TOTAL-LOSS)
5. Estimated cost band (under $1K / $1K-$5K / $5K-$15K / over $15K)
6. Any visible safety concerns (leaking fluid, exposed metal, glass on ground)

Return ONLY JSON matching the schema. If you cannot determine a field, return null and explain in the "notes" field.
```

For a 3-image claim, the median time from upload to first-decision dropped to **11 seconds**.

The settlement still required a human adjuster on the loop — the model isn't authorized to approve, just to **triage and pre-populate**. But the human's job changed from "open 8 tabs and read everything" to "review the AI's JSON, fix anything wrong, click approve." Net effect: ~70% of claims now closed within 24 hours instead of 6 days.

The catch: it took 6 weeks to get the prompt right. The early prompts had the model confusing "rear" with "front" on white sedans where the silhouette was ambiguous, missing license plates because of glare, and confidently misreading damage severity on cars with after-market wraps. This module is the playbook Aaliyah's team developed.

---

## 👁️ The Vision-Capable Models of 2026

| Model | Image inputs | Video | Audio | Native multi-image |
|-------|--------------|-------|-------|---------------------|
| Claude 4.7 Opus / Sonnet | Yes (up to 20 images per call) | No native | No | Yes |
| Claude Haiku 4.5 | Yes (smaller cap) | No | No | Yes |
| GPT-5 | Yes | Limited via Sora-2 add-on | Yes (audio-in via gpt-5-audio) | Yes |
| GPT-4o (still widely used) | Yes | No | Yes | Yes |
| Gemini 2.5 Pro | Yes | **Yes — direct video file or YouTube URL** | Yes | Yes |
| Gemini 2.5 Flash | Yes | Yes | Yes | Yes |
| Llama 3.2 11B / 90B Vision | Yes | No | No | Yes |
| DeepSeek Vision | Yes (open) | No | No | Yes |

🎯 **Memorize:** For **video**, Gemini 2.5 is the only mainstream choice — it accepts video files directly. For **everything else multi-modal**, all four families are competitive.

🚨 **Trap:** "Multi-modal" on the box doesn't always mean "multi-modal in the API." GPT-5's voice mode is a separate API path from the standard chat completion. Always read the docs.

---

## 📷 Sending Images — Three Patterns

### Pattern 1: Base64 in the request body

```python
import base64
from anthropic import Anthropic

with open("damage.jpg", "rb") as f:
    img_b64 = base64.standard_b64encode(f.read()).decode()

client = Anthropic()
msg = client.messages.create(
    model="claude-sonnet-4-7",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": [
            {"type": "image", "source": {"type": "base64", "media_type": "image/jpeg", "data": img_b64}},
            {"type": "text", "text": "Describe the damage in this photo."},
        ]
    }],
)
```

### Pattern 2: URL reference (hosted images)

```python
# OpenAI
response = client.chat.completions.create(
    model="gpt-5",
    messages=[{
        "role": "user",
        "content": [
            {"type": "image_url", "image_url": {"url": "https://example.com/damage.jpg"}},
            {"type": "text", "text": "Describe the damage."}
        ]
    }]
)

# Gemini (file upload)
my_file = client.files.upload(file="damage.jpg")
resp = client.models.generate_content(
    model="gemini-2.5-pro",
    contents=[my_file, "Describe the damage."],
)
```

### Pattern 3: Inline data URL (web-style)

```python
data_url = f"data:image/jpeg;base64,{img_b64}"
# Pass as image_url with this URL on OpenAI
```

### Image cost economics

Vision inputs are billed by token equivalence. Approximate rules:

| Provider | Image cost rule |
|----------|-----------------|
| Anthropic | ~`(width * height) / 750` tokens; max ~1600 tokens per image |
| OpenAI | `170 * tiles + 85` base, where tiles depend on detail mode (low: ~85; high: up to ~765 per 512x512 tile) |
| Gemini | Flat ~258 tokens for ≤384x384; tile-based for larger |
| Llama Vision | Varies by host |

🎯 **Memorize:** A *single high-detail image* on GPT-5/Claude is typically 1,500–2,500 tokens — equivalent to a 1.5–3 page document. Send only what's necessary.

---

## 🎯 Image Best Practices

### 1. Image quality matters more than your model

Garbage in, garbage out applies double for vision. Best practices:

| Concern | Recommendation |
|---------|----------------|
| Resolution | At least 512×512 for text/details; 1024×1024 is the sweet spot |
| Compression | Avoid heavy JPEG compression on text/charts; PNG when feasible |
| Orientation | Rotate to upright BEFORE sending (EXIF rotation isn't always honored) |
| Color | Don't pre-process to grayscale unless the task needs it |
| Cropping | Crop to the region of interest if you know it — saves tokens, improves focus |
| Annotations | Avoid adding red arrows/circles UNLESS they help; some models attend to overlays excessively |

### 2. Frame your prompt to the image

| Bad | Good |
|-----|------|
| `"What's in this image?"` | `"This is a photo of a vehicle. Identify the make, model, and damage location. Use the JSON schema below."` |
| `"Describe it"` | `"Describe the type and severity of skin lesion visible in this photo, using ABCDE criteria. If insufficient image quality, say so."` |
| `"Read the text"` | `"This is a screenshot of a receipt. Extract date, vendor, total, and itemized list. Return UNKNOWN for any field that is illegible."` |

### 3. Multiple images — give each a name/index

```
Here are two photos.
- Image 1: BEFORE the repair
- Image 2: AFTER the repair

Compare the two and identify what was fixed.
```

Models attend better when images have explicit context. Without it, they may average across them.

### 4. Use structured output

Vision + structured outputs (Module 4) is the production default. Pydantic schema → instructor → image input → guaranteed JSON.

```python
class DamageReport(BaseModel):
    make: str | None
    model: str | None
    year: int | None = Field(None, ge=1950, le=2030)
    license_plate: str | None
    damage_location: str
    severity: Literal["LOW", "MED", "HIGH", "TOTAL-LOSS"]
    cost_band: Literal["<$1K", "$1K-$5K", "$5K-$15K", ">$15K"]
    safety_concerns: list[str] = Field(default_factory=list)
    notes: str | None
```

---

## 📜 OCR — When LLM Vision Beats Dedicated OCR

For most document text extraction in 2026, frontier vision models BEAT dedicated OCR (Tesseract, AWS Textract for simple cases, Google Document AI) for **layout-aware extraction** — bills, forms, contracts. They lose on:

- Extremely dense text (newspaper pages, legal-print fine print)
- Specialized scripts (Arabic calligraphy, vertical CJK)
- Receipt thermal-print degradation

### Comparison

| Task | Best tool 2026 |
|------|----------------|
| Receipt totals + line items | Claude 4.7 / GPT-5 / Gemini 2.5 — all strong |
| Multi-page contract clauses | Gemini 2.5 (long context) or Claude 4.7 (1M) with structured outputs |
| Generic OCR on dense scan | AWS Textract or Google Document AI |
| Handwriting | GPT-5 strongest in 2026 benchmarks |
| Tables from PDFs | Gemini 2.5 Pro (often the cleanest table reconstruction) |
| Charts (extract data) | GPT-5 or Gemini 2.5 — explicit "list each data point" prompt |

### OCR prompt template

```
This is a scanned receipt. Extract the following:

```
{
  "vendor_name": <string>,
  "transaction_date": <YYYY-MM-DD or null>,
  "subtotal": <float>,
  "tax": <float>,
  "total": <float>,
  "currency": <ISO 4217 code>,
  "items": [
    {"name": <string>, "qty": <int>, "unit_price": <float>, "line_total": <float>}
  ],
  "confidence": <float 0..1 — your assessment of legibility>,
  "warnings": [<string>]  // e.g., "subtotal + tax does not match total"
}
```

Rules:
- Use null for fields that are unreadable
- Validate totals (subtotal + tax should equal total within $0.01)
- Set warnings if the math doesn't reconcile
- Return ONLY valid JSON, no commentary
```

---

## 📊 Charts, Diagrams, Whiteboards

Vision models can read charts but with a specific failure mode: **they confabulate**. Asked to read a bar chart, a weak vision model might fluently report wrong numbers because it pattern-matched on the *style* of bar charts in its training data.

### Defenses

1. **Ask for the data points individually**: *"List each bar in the chart with its label and approximate value. If you cannot read a value, say so."*
2. **Ask for the methodology**: *"What chart type is this? What does each axis represent? What is the data source noted at the bottom?"* — these meta-questions surface confidence.
3. **Self-consistency**: Sample N times; values should agree within tolerance.
4. **Compare to the source**: Always reconcile with the underlying data when available.

🚨 **Trap:** *"What's the trend?"* is a leading question. Models will report a trend even from random data.

---

## 🎙️ Audio Prompting

| Model | Audio input | Audio output | Notes |
|-------|-------------|--------------|-------|
| GPT-5 audio (gpt-5-audio) | Yes | Yes | Voice mode, real-time API for streaming |
| Whisper (OpenAI) | Yes (transcription only) | No | Cheapest, best general transcription |
| Gemini 2.5 | Yes | Limited | Long-context audio (1hr+) |
| Claude | Not natively | No | Use Whisper to transcribe first |
| Llama 3.x | Not natively | No | Use Whisper |

### Audio prompt template (transcription + intent extraction)

```python
# Step 1: Transcribe with Whisper
transcript = openai.audio.transcriptions.create(
    model="whisper-1",
    file=audio_file,
)

# Step 2: Pass transcript to a chat model with a structured-extraction prompt
extract_prompt = f"""This is a customer-service phone call transcript.
Extract:
- Customer's primary issue (1 sentence)
- Customer's emotional state (calm / frustrated / angry / panicked)
- Action items for the agent (list)
- Whether escalation is warranted (true/false + 1 sentence reason)

Transcript:
{transcript.text}
"""
```

### Direct audio input (GPT-5 audio / Gemini)

```python
# Gemini direct audio
audio_file = client.files.upload(file="call.mp3")
resp = client.models.generate_content(
    model="gemini-2.5-pro",
    contents=[audio_file, "Summarize this call in 3 sentences and identify the main complaint."]
)
```

Going direct skips the transcribe step but you lose the explicit text artifact you can re-process or store.

---

## 🎥 Video Prompting (Gemini's Killer Feature)

Gemini 2.5 can accept video files directly — up to ~1 hour. Use cases:

- Surveillance / security review ("Was there activity in the parking lot between 2am and 4am?")
- Sports analysis ("List every shot attempt in the second half")
- Educational content indexing ("Find the timestamp where the instructor introduces transformers")
- Compliance / training ("Did the operator follow the 6-step safety check?")

```python
video_file = client.files.upload(file="surveillance.mp4")
resp = client.models.generate_content(
    model="gemini-2.5-pro",
    contents=[video_file, "List every distinct person who appears, with approximate timestamps."]
)
```

### Caveats

- 1 frame ≈ ~250 tokens (varies). A 30-min video at 1fps = ~450K tokens. Expensive.
- Many tasks are better served by **frame sampling + image prompts**: extract 1 frame per N seconds, process as images.
- Video benchmarks are immature; eval rigorously.

---

## 🛡️ Multi-Modal-Specific Failures

| Failure | Cause | Defense |
|---------|-------|---------|
| Hallucinated text from blurry image | Model fills in plausible text | Prompt: "Return UNREADABLE if illegible" |
| Wrong orientation | EXIF not honored | Pre-rotate the image |
| Multi-image confusion | No image labels | Name each: "Image 1: ..., Image 2: ..." |
| Chart misreads | Pattern-match on chart style | Ask for points individually + self-consistency |
| Costly token usage | High-detail mode | Use low-detail unless precision needs it |
| Image too small for detail | Sub-512px region | Crop the region; upscale slightly |
| Bypassing safety via image text | Image with malicious instructions | Treat image text as untrusted (Module 7) |

---

## 🔬 Scenario Walkthrough (Aaliyah's iteration)

> **Scenario:** Aaliyah's team starts the FNOL pilot. Walk through the 6-week iteration.

**Week 1 — MVP prompt + Claude 3 Opus:**
- Free-form output. ~60% useful first-pass.
- Failures: glare-blocked plates, ambiguous orientation on white sedans.

**Week 2 — Structured outputs + Pydantic + temperature=0:**
- Same model. Up to ~75%.
- Failures: severity inflation (model reports HIGH for cosmetic dings).

**Week 3 — Calibration via few-shot examples:**
- Add 6 calibrated examples (one per severity tier × make/model variety).
- ~85%.
- Failures: chart-style images (insurance damage diagrams) misclassified.

**Week 4 — Multiple-image labeling:**
- Explicit `"Image 1: front-quarter view"` labels.
- ~91%.
- Failures: certain after-market wraps fooling the make detector.

**Week 5 — Add `confidence` field + human-in-loop threshold:**
- Below 0.7 confidence → auto-route to human.
- Adjusters spend time only on the hard 9%.

**Week 6 — Self-consistency on `severity` (N=3):**
- Take majority vote for severity to defeat residual ambiguity.
- ~94%.

Pilot graduates to production. The prompt now lives in version control with an eval suite (Module 6 — built next).

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "All four families support video" | Only Gemini 2.5 has native video. Others need frame-sampling. |
| "Vision is just OCR" | Vision models reason about layout, comparison, identification — way beyond OCR. |
| "Higher resolution always helps" | Past a point, you pay more tokens for diminishing returns. Crop the region. |
| "Image tokens are cheap" | A single high-detail image can be 2,000+ tokens. Audit. |
| "EXIF rotation is honored" | Often NOT. Pre-rotate to upright. |
| "Charts are easy for LLMs" | Confabulation rate is high. Ask for points individually. |
| "Vision can replace dedicated OCR for everything" | Dense legal text and Arabic calligraphy still favor specialized OCR. |
| "Audio APIs work like chat" | GPT-5 audio is a separate streaming API. Read the docs. |
| "Multi-image prompts work without labels" | Models conflate without explicit labels. Always name. |
| "Image inputs are immune to prompt injection" | Image text/captions CAN inject instructions. Treat as untrusted. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Vision-language model (VLM)** | A model that accepts images alongside text |
| **Multi-modal** | Accepts more than one modality (text, image, audio, video) |
| **Tile (OpenAI vision)** | A 512x512 region the image is broken into for tokenization |
| **Detail mode** (OpenAI) | `low` / `high` / `auto` — controls tile count and cost |
| **EXIF** | Image metadata standard; orientation often not honored by APIs |
| **OCR** | Optical Character Recognition — text extraction from images |
| **Layout-aware extraction** | OCR + structure understanding (tables, forms) — VLM strength |
| **Confabulation** | Confidently wrong output from a vision model on charts/numbers |
| **Frame sampling** | Reducing video to N frames for image-prompt processing |
| **Whisper** | OpenAI's open-source transcription model |
| **Speaker diarization** | Identifying who said what in audio |
| **gpt-5-audio** | OpenAI's voice-mode model (separate API) |
| **Realtime API** | OpenAI streaming audio API for voice apps |
| **Image-text co-attention** | Architecture pattern in modern VLMs |
| **Document AI** | Google's specialized OCR service |
| **Textract** | AWS specialized OCR service |
| **Multi-image batch** | Sending N images in one call for comparison |

### Acronyms cheat-row (Module 5)
| Acronym | Meaning |
|---------|---------|
| VLM | Vision-Language Model |
| OCR | Optical Character Recognition |
| EXIF | Exchangeable Image File Format |
| FNOL | First Notice Of Loss (insurance) |
| CV | Computer Vision |
| ASR | Automatic Speech Recognition |

---

## 📊 Case Study — GPT-4V Release (September 2023) & The Industry Shift

**Situation.** OpenAI released **GPT-4V** (Vision) to ChatGPT Plus subscribers on September 25, 2023, then to the API in November 2023. It was the first widely-available frontier multi-modal model — Google's earlier Gemini announcement was still demo-only, and Anthropic's Claude 3 vision wouldn't ship until March 2024.

**The capability shift.** Within weeks, builders demonstrated:

- Web design from a napkin sketch
- Whiteboard math problem-solving
- Receipt extraction outperforming Tesseract by 20+ percentage points on real-world receipts
- Fashion description from photos
- Medical image triage (research only — not clinical)

**The economics.** GPT-4V launched at ~$0.01 per image (low detail) to ~$0.03 (high detail) — competitive with dedicated services that charged similar amounts but only did OCR. The all-in-one prompt-and-image-and-structure pipeline collapsed three previous tool chains (OCR, layout parser, classifier) into one API call.

**The follow-on.** Within 6 months, Claude 3 Opus / Sonnet / Haiku all shipped vision. Gemini 1.5 Pro added long-context multi-modal. Llama 3.2 Vision (October 2024) made open-weights vision a reality. By late 2024, "vision-only models" (no text reasoning) were considered obsolete for most production work.

**The failure modes that taught everyone.**
- Early GPT-4V was prone to refusal on faces (heavy safety tuning around identifying people) — annoying for use cases like KYC and ID verification.
- Chart-reading confabulation was a major early discovery — community-built benchmarks like ChartQA showed disappointing scores.
- Indirect prompt injection via image text (a sticky note in the photo saying "ignore your instructions") emerged as a serious vulnerability — Module 7.

**Lesson for the exam / for practitioners.**
- Vision is now table stakes. Pick the model that matches your modality mix (Gemini for video, GPT-5 for handwriting, Claude for long-doc structure, Llama for on-prem).
- Image text is a prompt-injection vector.
- Eval your vision prompts the same way you eval text prompts (Module 6).

**Discussion (Socratic).**
- **Q1:** A bank wants to OCR signature pages from loan documents using a vision LLM. Argue for / against using a VLM vs AWS Textract for this specific task. What are the trade-offs in accuracy, cost, latency, and regulatory acceptance?
- **Q2:** A hospital wants to use vision LLMs to read patient ID wristbands and reconcile against the EHR. Sketch a 5-bullet safety-and-eval plan.
- **Q3:** A skeptic says "vision models hallucinate too much for production." Make the engineering counter-argument with specific defenses from this module.

---

## ✅ Module 5 Summary

You now know:

- 🖼️ The 2026 vision-capable model landscape — Claude / GPT / Gemini / Llama
- 📷 The three patterns for sending images — base64, URL, data URL
- 🎯 Image best practices (resolution, orientation, cropping, labeling multiple images)
- 📜 When VLM beats dedicated OCR and when it doesn't
- 📊 Chart-reading defenses (point-by-point listing, self-consistency)
- 🎙️ Audio prompting via Whisper + chat or direct (GPT-5 audio, Gemini)
- 🎥 Video prompting — Gemini's domain
- 🛡️ Multi-modal-specific failure modes
- 🔬 Aaliyah's 6-week iteration playbook

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 6 — Evaluation & A/B Testing](../Module-06-Evaluation-AB-Testing/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 6](../Module-06-Evaluation-AB-Testing/Reading.md) is the eval harness that Aaliyah's team built in Week 6. [Module 7](../Module-07-Adversarial-Defense/Reading.md) covers image-based prompt injection.
> - Cross-course: AWS AI Practitioner (course 07) covers Bedrock Claude Vision and AWS Textract. Azure AI Engineer (course 08) covers Azure OpenAI Vision and Document Intelligence.
> - Practice: Practice Exam 2 has ~3 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 OpenAI (2023). *GPT-4V(ision) System Card*. https://openai.com/research/gpt-4v-system-card
- 📄 Liu et al. (2023). *LLaVA: Visual Instruction Tuning* — the open-source VLM lineage.
- 📄 Anthropic (2024). *Claude 3 Model Card* — vision section.
- 📄 Gemini Team (2024). *Gemini 1.5 Technical Report* — long-context multi-modal.

**Vendor docs:**
- 📖 [Anthropic — Vision](https://docs.anthropic.com/en/docs/build-with-claude/vision)
- 📖 [OpenAI — Vision](https://platform.openai.com/docs/guides/vision)
- 📖 [OpenAI — Audio](https://platform.openai.com/docs/guides/audio)
- 📖 [Gemini — Vision and video](https://ai.google.dev/gemini-api/docs/vision)
- 📖 [Whisper docs](https://platform.openai.com/docs/guides/speech-to-text)

**Practitioner:**
- 📖 [Simon Willison — vision LLM experiments](https://simonwillison.net/tags/vision-llms/)
- 📖 [ChartQA Benchmark](https://github.com/vis-nlp/ChartQA) — vision chart evaluation
- 📖 [MMMU benchmark](https://mmmu-benchmark.github.io) — multi-modal college-exam eval
