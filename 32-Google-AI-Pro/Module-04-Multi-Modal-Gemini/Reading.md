# Module 4: Multi-Modal AI with Gemini 📸🎙️🎬

> **Why this module matters:** Multi-modal is Gemini's single most differentiating capability. Every other major LLM family (Claude, GPT, Llama) was text-trained first and had vision/audio adapters bolted on later. Gemini was trained on text + images + audio + video *jointly from scratch*, and the exam will test, repeatedly, whether you understand what that enables, what the file limits are, what the latency profile looks like, and *when to use one model call vs a multi-step pipeline*. This module is the difference between an architect who treats Gemini as "GPT with one extra knob" and one who genuinely exploits what makes it different.

> **Prerequisites for this module.** Modules 1–3 finished. A Google AI Studio account (free) and/or a Vertex AI project with billing enabled. A sample image (JPEG or PNG), short audio clip (MP3 or WAV), and short video clip (MP4 < 50MB) handy to test with.

---

## 📖 A Story: When Google Photos Got Smarter Overnight

It is May 2024. A Google Photos user types into the search bar: *"the night I made carbonara with Tony in 2019."* In the world before Gemini, this would have returned exactly zero results, Photos' old search indexed face tags (it knew Tony), some object labels (it knew "pasta"), and EXIF timestamps. It did not know that "the night I made carbonara" was a *visual scene* until a human told it.

In the post-Gemini Google Photos, the same query returns the right four photos. Why? Because Photos now uses **Gemini's native multi-modal understanding** to index every photo: it generates a free-form description ("Tony in the kitchen, plate of pasta, dim warm light, late evening"), extracts entities ("Tony," "pasta," "kitchen"), classifies scenes ("home cooking," "evening dinner"), reads any visible text (a wine label said "2019 Barbera"), and timestamps the activity. The search becomes a semantic query against this unified, model-generated index.

Google announced this Gemini-powered Photos upgrade at I/O 2024. The before-state separate face-detection, object-detection, scene-classification, OCR, and timestamp pipelines stitched together required five different models, five pipelines, five storage indices, and a complex ranking layer. The after-state was *one Gemini model, called once per photo, output stored as JSON, queried semantically*. The engineering team called this collapse "the carbonara moment."

The lesson generalizes far beyond Google Photos. Wendy's FreshAI drive-thru, Mercedes-Benz MBUX voice + camera assistant, Wayfair "upload your room photo + tell me what fits," Snap MyAI's photo-aware chat, and Verily's clinical-image triage all live on the same architectural pattern: *throw out the multi-step pipeline; let Gemini's native multi-modal handle the whole thing*. The exam tests whether you can recognize when that collapse is the right move.

---

## 🧠 What "Native Multi-Modal" Actually Means

Gemini's training data, during pre-training, was *interleaved*, a sequence might look like:

```
[text: "Here's a description of a sunset..."]
[image: <pixel tensor>]
[text: "The audio clip below captures the same moment..."]
[audio: <waveform tensor>]
[text: "And finally a 10-second video..."]
[video: <frame tensors + audio tensor>]
```

The model learns *cross-modal correlations directly*, that the word "carbonara" co-occurs with images of yellow-creamy-pasta, that the sound of frying pancetta co-occurs with the word "pancetta," that a kitchen scene at 7pm follows a "I'm cooking dinner" voice prompt. There is no separate encoder per modality stitched into a text model later; all modalities flow through a unified Transformer with modality-specific tokenizers feeding shared attention layers.

**Why this matters in practice:**

1. **Cross-modal reasoning is unified.** "Watch this 5-minute video. At what time stamp does the speaker contradict the slide on screen?" requires Gemini to align spoken audio + slide image content over time. With bolted-on multi-modal, that requires extracting transcripts + slide OCR separately and reasoning over the merge. With Gemini, it's one call.

2. **Output can be multi-modal.** Gemini 2.0+ can emit *images and audio* natively, not just text. (Gemini 2.0 Flash, Imagen 3 / 4, Veo, Chirp TTS all live under the same Vertex AI roof; some are Gemini-native output, others are dedicated models.)

3. **Cost amortizes across modalities.** Sending a video to Gemini bills you for its token-equivalent count (more on the math below). You pay once for understanding all the modalities, not once per modality processed by a separate pipeline.

---

## 📦 What Gemini Accepts (Input Modalities)

| Modality | Formats | Practical limits |
|----------|---------|------------------|
| **Text** | UTF-8 | Up to 1M tokens (Flash) / 2M tokens (Pro/Ultra) |
| **Images** | PNG, JPEG, WebP, HEIC, HEIF | Up to 3,600 images in a single prompt; recommended ≤7MB per image; 768×768 ideal resolution (lower = cheaper) |
| **Audio** | MP3, WAV, AIFF, AAC, OGG, FLAC | Up to ~9.5 hours per audio file (when tokenized); ~30 tokens/second of audio |
| **Video** | MP4, MPEG, MOV, AVI, FLV, MPG, WebM, WMV, 3GP | Up to ~50 minutes per video (when tokenized); resampled to 1 fps + audio track |
| **PDFs** | PDF | Up to 1,000 pages; rendered to images + text extracted |

### How Gemini Tokenizes Non-Text

This is exam-relevant because it tells you the cost:

| Modality | Approx tokens |
|----------|---------------|
| **Text** | ~1 token per 4 chars (English) |
| **Image (low/medium res)** | ~258 tokens per image |
| **Image (high res)** | ~258 + 258 per 768-px tile |
| **Audio** | ~32 tokens per second |
| **Video** | ~258 tokens per frame at 1 fps + audio at 32 tokens/sec |

A 5-minute video at 1 fps + audio = 5 × 60 × 258 + 5 × 60 × 32 ≈ **87,000 tokens**. A 30-second podcast clip = 30 × 32 ≈ **960 tokens**. A high-res product photo = ~258 tokens.

🎯 **Exam pattern:** *"How does Gemini bill a 10-minute video?"* → Tokens count: ~10 × 60 × (258 + 32) = ~174K tokens, billed at the model's input rate.

---

## 📤 How to Pass Multi-Modal Input

### Python (Gemini API)

```python
import google.generativeai as genai
import PIL.Image

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel("gemini-2.5-flash")

# Image from PIL
img = PIL.Image.open("product.jpg")
r = model.generate_content(["Describe this product in 2 sentences.", img])
print(r.text)
```

### Python (Vertex AI)

```python
from vertexai.generative_models import GenerativeModel, Part
import vertexai

vertexai.init(project="my-proj", location="us-central1")
model = GenerativeModel("gemini-2.5-flash")

# Image from URI in GCS
image_part = Part.from_uri("gs://my-bucket/product.jpg", mime_type="image/jpeg")
r = model.generate_content(["Describe this product.", image_part])
print(r.text)

# Audio
audio = Part.from_uri("gs://my-bucket/call.mp3", mime_type="audio/mpeg")
r = model.generate_content(["Transcribe and identify speakers.", audio])

# Video
video = Part.from_uri("gs://my-bucket/demo.mp4", mime_type="video/mp4")
r = model.generate_content(["Summarize the demo in 5 bullet points.", video])

# PDF
pdf = Part.from_uri("gs://my-bucket/contract.pdf", mime_type="application/pdf")
r = model.generate_content(["Extract the parties and effective date.", pdf])
```

### Files API (for large or reused files)

For files >20MB or used multiple times, use the **Files API** to upload once, reference by URI on subsequent calls:

```python
uploaded = genai.upload_file(path="long_lecture.mp4", display_name="Lecture")
print(uploaded.uri)   # files/...
r = model.generate_content([uploaded, "Summarize Chapter 3."])
```

Files API uploads persist for 48 hours by default (Gemini API surface), unlimited on Vertex if you keep them in GCS.

🎯 **Exam pattern:** *"A user uploads a 2-hour video and asks 30 questions about it across an hour-long session. Cheapest pattern?"* → **Upload once via Files API; reference URI on each question**, *and* enable **explicit context caching** so the model's processing of the video is reused.

---

## 👁️ Vision Capabilities Deep-Dive

Gemini Vision can:

1. **Describe scenes**, high-quality free-form description of an image
2. **Object detection + bounding boxes**, return `[x_min, y_min, x_max, y_max]` coords (normalized 0-1000) for objects you name
3. **OCR (text in images)**, read printed and handwritten text
4. **Chart understanding**, read axis labels, extract data points from a bar/line chart
5. **Document understanding**, invoices, receipts, forms; extract structured data
6. **Diagram interpretation**, flowcharts, network diagrams, architectural drawings
7. **Visual question answering (VQA)**, "What color is the lampshade in this photo?"
8. **Compare images**, "Are these two photos of the same person?" or "What's different between A and B?"

### Object detection with structured output

```python
schema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "label": {"type": "string"},
            "bbox": {"type": "array", "items": {"type": "integer"}, "minItems": 4, "maxItems": 4},
        },
    },
}

model = GenerativeModel("gemini-2.5-pro",
    generation_config={"response_mime_type":"application/json","response_schema":schema})

r = model.generate_content([
    Part.from_uri("gs://b/store.jpg", mime_type="image/jpeg"),
    "List every product visible in the image with bounding box [x_min,y_min,x_max,y_max] normalized 0-1000.",
])
import json
items = json.loads(r.text)
```

🎯 **Exam pattern:** *"Wayfair's image-search uploads a room photo and finds matching products. The Gemini call should..."* → Object detection + structured output → use Vertex AI Vector Search with the embeddings of detected products.

### OCR on receipts (a Google Photos / expense-tool classic)

```python
r = model.generate_content([
    Part.from_uri("gs://b/receipt.jpg", mime_type="image/jpeg"),
    "Extract merchant, date, total, and line items as JSON.",
])
```

### Chart-reading

```python
r = model.generate_content([
    Part.from_uri("gs://b/quarterly-bar-chart.png", mime_type="image/png"),
    "Read the chart and return Q1-Q4 revenue numbers in JSON.",
])
```

---

## 🎙️ Audio Capabilities

Gemini Audio can:

1. **Transcribe**, speech-to-text with timestamps
2. **Diarize**, identify and label speakers ("Speaker 1," "Speaker 2," or actual names if introduced)
3. **Summarize**, give high-level summary of a long recording
4. **Analyze tone/sentiment**, distinguish frustrated from happy callers
5. **Identify non-speech audio**, distinguish music from speech from background noise
6. **Translate**, speech in one language → text in another

### Example: call-center QA

```python
audio = Part.from_uri("gs://b/support-call-2026-05-30-3045.mp3", mime_type="audio/mpeg")

system = """You are a call-quality analyst. Output strict JSON with:
- speakers: list of speaker labels and detected role
- transcript: speaker-labeled turns with timestamps
- issues_detected: customer issues raised
- resolution_status: resolved / partial / unresolved
- sentiment_trajectory: array of sentiment per minute
- coaching_notes: feedback for the agent
"""

model = GenerativeModel("gemini-2.5-pro", system_instruction=system,
    generation_config={"response_mime_type":"application/json"})
r = model.generate_content([audio, "Analyze this support call."])
```

🎯 **Exam pattern:** *"Old architecture transcribes calls with Speech-to-Text, then sends transcripts to a separate LLM for analysis. New architecture..."* → **One Gemini call with the raw audio.** Eliminates the transcription model, saves cost and avoids transcript-quality drift.

---

## 🎬 Video Capabilities

Gemini Video samples frames at 1 frame per second (configurable for some endpoints) and also processes the audio track. It can:

1. **Summarize** the video
2. **Identify scenes / chapter boundaries**
3. **Extract spoken transcript with timestamps**
4. **Identify objects + people across frames**
5. **Action recognition** ("at 0:43 the speaker points at the slide")
6. **Compare two videos**
7. **Generate captions / subtitles**
8. **Answer specific questions** ("when does the demo show the dashboard?")

### Example: product demo extraction

```python
video = Part.from_uri("gs://b/product-demo-final.mp4", mime_type="video/mp4")

r = model.generate_content([
    video,
    """Watch the demo and produce:
    - timestamped chapter list (e.g. 0:00-0:42 "intro", 0:42-2:10 "feature A")
    - 3 key takeaways
    - any moments where the speaker contradicts the visible slide
    """
])
```

### Tuning video processing

Custom frame rate (Vertex AI):

```python
from vertexai.generative_models import Part, VideoMetadata

video = Part.from_uri("gs://b/long-lecture.mp4", mime_type="video/mp4",
                     video_metadata=VideoMetadata(fps=0.5))  # 1 frame / 2 seconds
```

Lower fps = fewer tokens = cheaper, but you may miss fast events.

🎯 **Exam pattern:** *"A team needs to process 50K hours of training video to index for search."* → Reduce fps (0.5 or lower), use Batch API, Flash tier, run nightly.

---

## 📄 PDF Capabilities

Gemini processes PDFs as text-extracted-where-possible + page-images-where-needed:

```python
pdf = Part.from_uri("gs://b/600-page-contract.pdf", mime_type="application/pdf")
r = model.generate_content([
    pdf,
    "Extract: parties, effective date, governing law, indemnification clauses (cite page numbers)."
])
```

Up to 1,000 pages per PDF. For larger, split + use Files API.

🎯 **Exam pattern:** *"Legal-tech startup ingests 600-page contracts and runs structured extraction with page citations."* → Gemini Pro + PDF input + structured output schema + page-citation prompting.

---

## 🍔 Wendy's FreshAI, A Real Multi-Modal Architecture

Wendy's launched **FreshAI** in 2023, partnering with Google Cloud to deploy AI-driven drive-thru voice ordering. (Note: this is a different architecture than McDonald's IBM-AI drive-thru, which McDonald's discontinued in 2024 due to accuracy issues.) Wendy's FreshAI runs on Vertex AI + Gemini and represents one of the most-cited real-world multi-modal deployments.

**The architecture (per Google Cloud Next 2024 + Wendy's IR disclosures):**

```
Customer speaks at drive-thru speaker
       ↓
[Audio capture: 16kHz mic stream]
       ↓
[Real-time transcription + intent detection: Chirp + Gemini Flash]
       ↓
[Conversational state machine: Vertex AI Agent Builder (Conversational Agents)]
   - Order construction (menu items + customizations + sides)
   - Disambiguation ("Did you mean Frosty or fries?")
   - Upsell recommendation (Gemini-generated, brand-tuned)
       ↓
[Validation: order matches menu schema; price computed]
       ↓
[Voice synthesis: Chirp TTS, brand-voice tuned]
       ↓
[Audio output: spoken to customer]
       ↓
[Handoff to human if escalation triggered]
       ↓
[POS integration: order to kitchen]
```

**Why multi-modal matters here:**
- Native audio understanding eliminates the transcribe-then-LLM pipeline (Wendy's CTO publicly cited this as the key win vs the McDonald's architecture)
- Latency budget is tight (drive-thru customer impatient at >2 seconds); Flash is the right tier
- Brand voice in Chirp TTS keeps "Wendy's" voice consistent
- Vertex AI Agent Builder + Conversational Agents handles the state machine deterministically, Gemini doesn't free-improvise orders

**What can go wrong (per public reporting):**
- Heavy ambient noise (semi truck idling next to drive-thru) confuses Chirp; fallback to human
- Strong regional accents can degrade transcription quality; FreshAI tunes against accented training data over time
- Menu changes require careful retrain of the Agent's understanding of customizations

**Lesson:** Even a "simple" drive-thru is a six-product Vertex AI architecture. The Module 7 deep-dive on Agent Builder picks this case up again.

---

## 🏥 Verily Med-PaLM 2, Specialized Medical Multi-Modal

**Verily** (Alphabet's life-sciences subsidiary) deploys **Med-PaLM 2** a Gemini/PaLM-family model fine-tuned on medical literature, clinical question banks, and medical imaging under Google Cloud Vertex AI.

**Why this is a multi-modal case study:**
- Clinical imaging (X-rays, CT, histopathology) requires native vision
- Patient history (text) + symptoms (text) + imaging (image) + lab results (structured) all fed to one model
- Output: triage recommendation + cited literature + confidence score

**Why on Vertex AI (not Google AI Studio):**
- HIPAA-eligible deployment requires signed BAA + CMEK + VPC-SC (not available on AI Studio)
- Audit logging for every clinical interaction
- Regional residency (US-only deployment for US patients)
- Med-PaLM 2 is NOT on the consumer Gemini app; only Vertex AI

🎯 **Exam pattern:** *"A US hospital network deploys Med-PaLM 2 for radiology triage. Required architecture..."* → **Vertex AI** + signed BAA + HIPAA-eligible region + CMEK + VPC-SC + audit logs + clinician-in-the-loop human review for every output.

---

## ⚠️ Multi-Modal Exam Traps

| Misconception | Reality |
|---------------|---------|
| "Gemini Vision works on every Gemini tier." | Yes for most; **Nano** is text-only on-device. |
| "Send images as base64 strings via the messages API." | You can, but GCS URIs are easier for files >5MB. |
| "Audio + text in one prompt isn't supported." | It is. Mix any modalities. |
| "Video is processed frame-by-frame at 30 fps." | Default is **1 fps** + audio track. Tunable. |
| "PDFs are processed as text only." | Gemini renders pages to images + extracts text, both. |
| "Multi-modal tokens are free." | They're not. Image ≈ 258 tokens; audio ≈ 32 tokens/sec; video ≈ 290 tokens/sec at 1 fps. |
| "Bounding boxes are returned in pixel coordinates." | Returned **normalized 0-1000** in the standard schema. |
| "Gemini can only output text." | Gemini 2.0+ can natively output **text + image + audio**. |
| "Files API uploads persist forever." | 48 hours on Gemini API surface; longer if in GCS for Vertex AI. |
| "Multi-modal eliminates the need for grounding." | No, multi-modal helps with *understanding* the input; grounding helps with *factual* output (Module 5). |

---

## 🎓 Key Terms

| Term | Definition |
|------|------------|
| **Native multi-modal** | Trained on multiple modalities jointly from scratch |
| **Tokens per modality** | Image ~258; audio ~32/sec; video ~290/sec at 1 fps |
| **Files API** | Upload large media once, reference by URI |
| **Part** | Vertex AI SDK class wrapping a single modality input |
| **VideoMetadata** | Class to configure video processing (fps) |
| **Diarization** | Speaker identification in audio |
| **OCR** | Optical Character Recognition (text in images) |
| **VQA** | Visual Question Answering |
| **Chirp** | Google's speech-to-text + text-to-speech model |
| **Imagen** | Google's text-to-image model family (3, 4) |
| **Veo** | Google's text-to-video model |
| **Med-PaLM 2** | Specialized medical model on Vertex AI |
| **MedLM** | Med-PaLM family models in Model Garden |

---

## ✅ Module 4 Summary

You now know:

- 📸 **Native multi-modal**, what it means and why it differs from bolted-on vision
- 📦 **Input modalities**, text, image, audio, video, PDF; limits + tokenization
- 📤 **How to pass each modality**, Python SDK examples for all five
- 👁️ **Vision**, describe, OCR, charts, bounding boxes, VQA, diagrams
- 🎙️ **Audio**, transcribe, diarize, summarize, sentiment, translation
- 🎬 **Video**, frames at 1 fps + audio; chapters, captions, action recognition
- 📄 **PDF**, up to 1,000 pages; page citations
- 🍔 **Wendy's FreshAI**, real drive-thru voice architecture
- 🏥 **Verily Med-PaLM 2**, clinical-grade deployment
- 💰 **Token math** for multi-modal cost estimation

**Next:** [Module 5, RAG on Google Cloud](../Module-05-RAG-Google-Cloud/Reading.md)

---

## 📚 Further Reading

- 📖 [Gemini Multi-modal docs](https://ai.google.dev/gemini-api/docs/vision)
- 📖 [Audio understanding](https://ai.google.dev/gemini-api/docs/audio)
- 📖 [Video understanding](https://ai.google.dev/gemini-api/docs/video)
- 📖 [Files API](https://ai.google.dev/gemini-api/docs/files)
- 📖 [Vertex AI multi-modal](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview)
- 📖 Wendy's FreshAI case study (Google Cloud blog)
- 📖 Verily / Med-PaLM 2 disclosures (Verily press)
