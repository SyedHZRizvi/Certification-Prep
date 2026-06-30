# 📋 Module 3 Cheat Sheet: Computer Vision

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🗺️ Service Selection (the most important table)

| Need | Service |
|---|---|
| Pretrained image insights (tag, caption, OCR) | **Azure AI Vision (Image Analysis 4.0)** |
| OCR on a photo | Image Analysis 4.0 → `READ` feature |
| Structured data from invoice/receipt PDF | **Document Intelligence** (Module 5) |
| Train your own image classifier | **Custom Vision** (classification) |
| Detect custom objects + boxes | Custom Vision (object detection) |
| Edge / offline inference | Custom Vision Compact domain + export |
| Detect, verify, identify faces | **Face** (verify/identify = Limited Access) |
| Insights from video (transcript, OCR, faces, scenes) | **Video Indexer** |

---

## 🖼️ Image Analysis 4.0 Visual Features

```python
from azure.ai.vision.imageanalysis.models import VisualFeatures
features = [
    VisualFeatures.CAPTION,
    VisualFeatures.DENSE_CAPTIONS,
    VisualFeatures.TAGS,
    VisualFeatures.OBJECTS,
    VisualFeatures.PEOPLE,
    VisualFeatures.SMART_CROPS,
    VisualFeatures.READ,
]
```
🧠 **One call returns all of them.** Don't fall for "one call per feature."

```python
client.analyze(image_url=url, visual_features=features, gender_neutral_caption=True)
```

---

## 🎨 Custom Vision Quick Reference

| | |
|---|---|
| Project types | Classification (Multiclass / Multilabel), Object Detection |
| Resources | **Training** + **Prediction** (or unified CognitiveServices) |
| Min images | ~50 per tag |
| Metric (detection) | **mAP** |
| Metric (classification) | Precision · Recall |
| Edge export | Pick a **Compact** domain → export ONNX / TF / CoreML / Docker |
| Deployment | `train_project()` → `publish_iteration()` to prediction resource |

---

## 😀 Face Service Quick Reference

**Available (GA):**
- Detect (rectangle, landmarks)
- Attributes: Glasses, Mask, Head Pose, Blur, Exposure, Noise, Occlusion
- Find Similar, Group

**Limited Access (need approval):**
- Verify (1-to-1)
- Identify (1-to-N from person group)
- High-risk attributes

**Retired (don't use):**
- ❌ Emotion · Age · Gender · Smile · Facial Hair · Hair · Makeup

```
Identification workflow:
  Create PersonGroup → Add Persons + Faces → TRAIN → Identify
```

**Current models:** Detection_03 · Recognition_04

---

## 📄 Read OCR Hierarchy

```
Pages → Blocks → Lines → Words
        (8-point bounding polygons, not 4-point boxes)
```
Supports 100+ languages, printed + handwritten.

---

## 🎬 Video Indexer Insights

Transcript · OCR · Faces · Brands · Sentiment · Topics · Scenes · Translation

Custom models: **Language · Brands · Person · Logo**
(Custom Person needs Limited Access)

---

## 🏆 Exam Power Phrases

**Usually right**:

- ✅ "Use Image Analysis 4.0 with `VisualFeatures.READ`"
- ✅ "Train a person group first, then identify"
- ✅ "Compact domain to export"
- ✅ "Document Intelligence for structured invoices"

**Usually wrong**:

- ❌ "Use Face to detect emotion"
- ❌ "Image Analysis = invoice extraction"
- ❌ "One API call per visual feature"
- ❌ "Custom Vision exports any domain"

---

## ⚠️ Anti-Patterns

- ❌ Old 3.x API calls (separate /analyze, /describe, /tag endpoints)
- ❌ Using Face emotion attributes (retired)
- ❌ Using Image Analysis for invoices instead of Document Intelligence
- ❌ Skipping the "train" step before identification
- ❌ Picking General domain when you need to export

---

## ✏️ Quick Self-Check

1. Which visual feature returns thumbnail-friendly crops? ___
2. Two resources for Custom Vision? ___
3. Object detection metric? ___
4. Retired Face attributes (name 3)? ___
5. Document Intelligence vs Image Analysis Read, which for structured forms? ___

If you can answer all 5 in 60 seconds, you own Module 3. ✅

---

## 🧮 Metric Cheat, Classification vs Detection

| Metric | Classification | Object Detection |
|---|---|---|
| Precision | ✅ TP ÷ (TP+FP) | ✅ Per-class |
| Recall | ✅ TP ÷ (TP+FN) | ✅ Per-class |
| F1 | ✅ Harmonic mean | (rarely cited) |
| mAP | ❌ | ✅ Mean of per-class AP across IoU thresholds |
| IoU | ❌ | ✅ Intersection-over-Union for box overlap |

## 🛫 Compact Export Targets (memorize)

| Target | Use case |
|---|---|
| **ONNX** | Cross-platform inference (Python, .NET, JS) |
| **TensorFlow / SavedModel** | TF-based pipelines |
| **CoreML** | iOS / iPadOS apps |
| **Docker (Linux/Windows/ARM)** | Containerised edge devices, Raspberry Pi |

(PowerPoint and PDF are *not* export targets.)

## 🛡️ Regulatory Snapshot, Vision

| Regulation | What it does for Vision |
|---|---|
| **EU AI Act Article 5** (2024) | Bans untargeted biometric scraping; restricts public-space biometric surveillance |
| **EU AI Act Annex III** (2024) | "High-risk" tier: workplace biometric ID, emotion at work |
| **Microsoft RAI Standard v2** (2022) | Drove Face emotion / age / gender retirement |
| **GDPR Articles 9 + 22** | Biometric special-category data + automated-decision protection |
| **Illinois BIPA** (2008) | US state biometric consent law (referenced in US deployments) |

## 📐 Case-Study Pattern

| Scenario | Service combo |
|---|---|
| Factory defect QC (edge, low latency) | Custom Vision Compact + ONNX export |
| Retail shelf compliance | Custom Vision object detection |
| ID document KYC | Document Intelligence prebuilt ID |
| Dealer-bay service video | Video Indexer |
| Workplace PPE compliance (EU) | Custom Vision object detection (no Face) |
| Driver attention (cabin) | Speech + carefully scoped Vision (avoid biometrics) |

---

➡️ [Module 4: NLP](../Module-04-Natural-Language-Processing/Reading.md)
