# 📋 Module 5 Cheat Sheet: Multi-Modal Prompting

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🤖 2026 Multi-Modal Landscape

| Family | Image | Video | Audio In | Multi-image |
|--------|-------|-------|----------|-------------|
| Claude 4.7 | ✅ (up to 20 imgs) | ❌ | ❌ | ✅ |
| GPT-5 | ✅ | Limited (Sora-2) | ✅ (gpt-5-audio) | ✅ |
| Gemini 2.5 Pro/Flash | ✅ | ✅ **native** | ✅ | ✅ |
| Llama 3.2 Vision | ✅ (open) | ❌ | ❌ | ✅ |

🎯 *Video → Gemini. Everything else → all four are competitive.*

---

## 💰 Image Cost Quick Math

| Provider | Rule of thumb |
|----------|---------------|
| Anthropic | `(W × H) / 750` tokens, max ~1600/image |
| OpenAI | `170 × tiles + 85`; high-detail 1K×1K ≈ 1500–2500 tokens |
| Gemini | ~258 tokens for small; tiles for large |
| Llama (Together/Groq) | Varies by host |

🚨 *A high-detail 1024×1024 image ≈ 2 pages of text.*

---

## 📷 Sending Images, 3 Patterns

```python
# 1. Base64 (Anthropic style)
{"type": "image", "source": {"type": "base64",
  "media_type": "image/jpeg", "data": b64_str}}

# 2. URL (OpenAI style)
{"type": "image_url", "image_url": {"url": "https://...", "detail": "high"}}

# 3. File upload (Gemini)
my_file = client.files.upload(file="x.jpg")
```

---

## 🎯 Image Best Practices

| Rule | Why |
|------|-----|
| ≥512×512 resolution | Vision needs detail |
| Pre-rotate to upright | EXIF often ignored |
| Crop to ROI | Saves tokens, improves focus |
| Label multi-image (`Image 1: ...`) | Avoid conflation |
| Avoid adding red arrows | Some models over-attend overlays |
| Use structured outputs | Vision has many failure modes; schema models them |

---

## 📜 VLM vs Dedicated OCR

| Use case | Winner |
|----------|--------|
| Receipt totals + items | **VLM** |
| Multi-page contract clauses | **VLM** (long context) |
| Handwriting | **VLM** (GPT-5 strongest) |
| Charts → data extraction | VLM with self-consistency |
| Dense legal print | **Textract / Document AI** |
| Arabic calligraphy | **Specialized OCR** |
| Receipts (thermal degraded) | **Specialized OCR** |

---

## 📊 Chart-Reading Defenses

1. Enumerate points individually ("List each bar with label + value")
2. Ask meta-questions ("What chart type? What does each axis represent?")
3. Self-consistency (N=3-5 samples; check agreement)
4. Compare to source data when available
5. NEVER ask "what's the trend?" on novel data, leading question = confabulation

---

## 🎙️ Audio Pattern

```python
# Two-step (auditable transcript)
transcript = whisper.audio.transcriptions.create(model="whisper-1", file=audio)
analysis = chat.completions.create(model="claude-sonnet-4-7",
    messages=[{"role":"user","content":f"Analyze: {transcript.text}"}])

# Direct (lower latency, no text artifact)
resp = gemini.generate_content(model="gemini-2.5-pro",
    contents=[audio_file, "Summarize this call."])
```

---

## 🎥 Video (Gemini)

```python
video = client.files.upload(file="surveillance.mp4")
resp = client.models.generate_content(
    model="gemini-2.5-pro",
    contents=[video, "List timestamps of distinct activity events."]
)
```

🚨 *30-min @ 1fps ≈ 450K tokens. Frame-sample if cost-sensitive.*

---

## 🛡️ Multi-Modal Failures + Defenses

| Failure | Defense |
|---------|---------|
| Hallucinated text from blur | `"Return UNREADABLE if illegible"` |
| Wrong orientation | Pre-rotate |
| Multi-image confusion | Label each |
| Chart misreads | Point-by-point + self-consistency |
| Image-text injection | Treat image text as untrusted (Module 7) |
| High image cost | Crop; use low-detail when sufficient |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Pre-rotate images; EXIF is not always honored"
- "Label each image in multi-image prompts"
- "Use structured outputs to model unreadable/ambiguous cases"
- "Treat image text as untrusted input"
- "Gemini for native video; others need frame-sampling"

❌ Often **wrong**:

- "All vision models support video"
- "EXIF rotation always works"
- "Charts are easy for vision LLMs"
- "Image inputs are safe from prompt injection"
- "Vision replaces all dedicated OCR"

---

## 🗓️ Key Facts To Memorize Cold

- Video → Gemini 2.5
- Single high-detail image = 1500–2500 tokens
- EXIF often ignored → pre-rotate
- Chart confabulation real → enumerate points + self-consistency
- Whisper = OpenAI transcription
- Llama 3.2 Vision = open-weights VLM
- Multi-modal domain = **10% of Final Mock**

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Family with native video? ___
2. Image cost ballpark for high-detail 1024² ? ___
3. 3 defenses against chart confabulation? ___
4. EXIF rotation, honored or not? ___
5. Image text as injection vector, true or false? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

## 🛠️ Production Vision Templates

### Claude vision with structured output (Aaliyah's pattern)
```python
import base64
import instructor
from anthropic import Anthropic
from pydantic import BaseModel, Field
from typing import Literal

class DamageReport(BaseModel):
    make: str | None
    model: str | None
    year: int | None = Field(None, ge=1950, le=2030)
    license_plate: str | None
    damage_location: str
    severity: Literal["LOW", "MED", "HIGH", "TOTAL-LOSS"]
    cost_band: Literal["<$1K", "$1K-$5K", "$5K-$15K", ">$15K"]
    safety_concerns: list[str] = Field(default_factory=list)
    confidence: float = Field(..., ge=0.0, le=1.0)
    notes: str | None

client = instructor.from_anthropic(Anthropic())

with open("damage.jpg", "rb") as f:
    img_b64 = base64.standard_b64encode(f.read()).decode()

report = client.messages.create(
    model="claude-sonnet-4-7",
    max_tokens=1024,
    response_model=DamageReport,
    messages=[{
        "role": "user",
        "content": [
            {"type": "image", "source": {"type": "base64",
              "media_type": "image/jpeg", "data": img_b64}},
            {"type": "text", "text": "Image 1: vehicle damage photo. Extract per the schema. Use null for unreadable fields."},
        ]
    }],
)
```

### Multi-image labeled prompt
```python
messages = [{
    "role": "user",
    "content": [
        {"type": "text", "text": "Compare two photos:\n- Image 1: BEFORE the repair\n- Image 2: AFTER the repair\n\nList what was fixed."},
        {"type": "image", "source": {...before image...}},
        {"type": "image", "source": {...after image...}},
    ]
}]
```

### Whisper transcription + chat analysis
```python
from openai import OpenAI

client = OpenAI()
transcript = client.audio.transcriptions.create(
    model="whisper-1",
    file=open("call.mp3", "rb"),
)

analysis = client.chat.completions.create(
    model="gpt-5",
    response_format=CallAnalysis,
    messages=[
        {"role": "system", "content": "Analyze customer-service calls per the schema."},
        {"role": "user", "content": f"<<TRANSCRIPT>>\n{transcript.text}\n<<END>>"}
    ]
)
```

### Gemini direct video
```python
from google import genai

client = genai.Client()
video = client.files.upload(file="surveillance.mp4")

resp = client.models.generate_content(
    model="gemini-2.5-pro",
    contents=[video, "List every distinct activity event with timestamp."],
    config={"temperature": 0.1}
)
```

---

## 🚨 The Vision Anti-Pattern Catalog

| Anti-pattern | Fix |
|--------------|-----|
| Sending a photo without telling the model what it depicts | Always frame: "This is a photo of {X}" |
| Asking "What's in this image?" for OCR | Specify exactly what to extract + schema |
| Using a vision LLM for dense legal print | Use Textract / Document AI instead |
| Trusting "the trend" answer on a chart | Ask for individual data points + self-consistency |
| No `confidence` field in the schema | Add one; route low-confidence to human review |
| Sending 20 images with one generic prompt | Label each, scope task per image |
| Forgetting EXIF rotation | Pre-rotate before sending |
| Using high-detail for thumbnails | Use low-detail mode (saves 10-30× cost) |
| Trusting image text as user instructions | NEVER. Treat as untrusted (Module 7) |

---

➡️ [Module 6: Evaluation & A/B Testing](../Module-06-Evaluation-AB-Testing/Reading.md)
