# 📋 Module 4 Cheat Sheet: Multi-Modal Gemini

> Gemini is **natively** multi-modal. Trained jointly. One model, all modalities.

---

## 📦 Input Modalities + Limits

| Modality | Formats | Limit |
|----------|---------|-------|
| **Text** | UTF-8 | 1M (Flash) / 2M (Pro/Ultra) tokens |
| **Image** | PNG, JPEG, WebP, HEIC, HEIF | 3,600 images; ≤7MB recommended |
| **Audio** | MP3, WAV, AIFF, AAC, OGG, FLAC | ~9.5 hours per file |
| **Video** | MP4, MPEG, MOV, AVI, WebM, … | ~50 minutes per file at 1 fps |
| **PDF** | PDF | 1,000 pages |

---

## 💰 Tokenization Math

| Modality | Tokens |
|----------|--------|
| Text (English) | ~1 token per 4 chars |
| Image (low/med) | ~258 per image |
| Image (high-res tile) | ~258 per 768-px tile |
| Audio | **~32 tokens/sec** |
| Video | **~258 tokens/frame** at 1 fps + audio at 32/sec |

**Quick example:** 5-min video at 1 fps + audio ≈ 87,000 tokens.

---

## 📤 SDK Pattern (Vertex AI)

```python
from vertexai.generative_models import GenerativeModel, Part

model = GenerativeModel("gemini-2.5-pro")
img = Part.from_uri("gs://b/photo.jpg", mime_type="image/jpeg")
audio = Part.from_uri("gs://b/call.mp3", mime_type="audio/mpeg")
video = Part.from_uri("gs://b/demo.mp4", mime_type="video/mp4")
pdf = Part.from_uri("gs://b/c.pdf", mime_type="application/pdf")

r = model.generate_content(["Analyze:", img, audio, video, pdf])
```

### Files API (>20MB)

```python
import google.generativeai as genai
file = genai.upload_file(path="long.mp4")
model.generate_content([file, "Summarize."])
```

---

## 👁️ Vision Quick Reference

| Use case | Pattern |
|----------|---------|
| Describe scene | "Describe this image." |
| OCR | "Extract all visible text." |
| Chart-reading | "Read the chart; output JSON of data points." |
| Object detection | Structured schema with bbox normalized 0-1000 |
| VQA | "What color is the lampshade?" |
| Compare images | Pass 2 images + comparison prompt |

---

## 🎙️ Audio Quick Reference

| Use case | Pattern |
|----------|---------|
| Transcribe | "Transcribe with timestamps." |
| Diarize | "Identify and label speakers." |
| Summarize | "Summarize in 5 bullets." |
| Sentiment | "Output sentiment trajectory per minute." |
| Translate | "Transcribe and translate to French." |

---

## 🎬 Video Quick Reference

| Use case | Pattern |
|----------|---------|
| Chapter list | "Output timestamped chapters." |
| Action recognition | "When does the speaker point at the slide?" |
| Caption generation | "Generate SRT subtitles." |
| Compare 2 videos | Pass both videos + comparison prompt |
| Lower fps for cost | `VideoMetadata(fps=0.5)` |

---

## 🍔 Wendy's FreshAI Stack

```
Audio mic → Chirp + Gemini Flash (speech-to-intent in ONE call)
         ↓
Vertex AI Agent Builder Conversational Agent (state machine)
         ↓
Chirp TTS (brand voice) → speaker
         ↓
Vertex AI Search (menu/upsell grounding) + POS
```

🎯 Key win vs older arch: **no separate transcription model**.

---

## 🏥 Med-PaLM 2 Required Stack

- Vertex AI in HIPAA-eligible region
- Signed BAA
- CMEK + VPC-SC
- Audit logs
- Clinician-in-the-loop on every output

---

## 🎯 Power Phrases

✅ Often **right**:
- "Native multi-modal — joint training, one model, all modalities"
- "Image ≈ 258 tokens; audio ≈ 32 tokens/sec; video ≈ 290/sec at 1 fps"
- "Files API for >20MB or reused files"
- "Default video sampling = 1 fps + audio"
- "Bounding boxes = normalized 0-1000"
- "Gemini Pro/Ultra/Flash support multi-modal; Nano is text-mostly"
- "PDFs: rendered to images + text extracted"

❌ Often **wrong**:
- "Multi-modal tokens are free"
- "Video processed at 30 fps default"
- "Gemini vision is bolted on like GPT-4-Vision"
- "Bounding boxes in pixel coords"
- "Multi-modal not available on Vertex AI"

---

## ✏️ Quick Self-Check

1. Tokens per image / per second of audio / per video frame? ___
2. Default video fps? ___
3. Max PDF pages? ___
4. When use Files API? ___
5. Bounding-box coord system? ___

If all 5 in <90s, you own this module. ✅

---

➡️ [Module 5: RAG on Google Cloud](../Module-05-RAG-Google-Cloud/Reading.md)
