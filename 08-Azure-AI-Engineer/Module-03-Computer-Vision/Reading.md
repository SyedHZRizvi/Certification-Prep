# Module 3: Computer Vision 👁️

> **Why this module matters:** Vision is 15–20% of AI-102 and the most code-heavy domain. You need to know FOUR services cold: Azure AI Vision (Image Analysis 4.0 + OCR/Read), Face, Custom Vision, and Video Indexer.

---

## 🍕 A Story: Maya Reads Receipts

Maya's startup pivots. They now build an expense-tracking app that lets users photograph receipts. She needs three things from each image:
1. **OCR** all the text (vendor name, line items, total)
2. **Classify** the photo (receipt vs not-a-receipt vs blurry-mess)
3. **Detect faces** in expense photos so she can blur them before storage (privacy compliance)

She opens Azure AI Vision for #1, **Custom Vision** for #2 (she'll train a model with 200 labeled examples), and **Face** for #3. By the end of Module 3, you'll have the same toolkit at your fingertips.

---

## 🗺️ The Four Services + What Each Does Best

| Service | Pretrained or custom? | Use it for |
|---|---|---|
| **Azure AI Vision** (Image Analysis 4.0) | Pretrained | Tagging, captioning, object detection, OCR (Read), smart crop, people detection |
| **Custom Vision** | Custom | Train your own image classifier OR object detector |
| **Face** | Pretrained | Detection, attributes, verification, identification (limited access) |
| **Azure AI Video Indexer** | Pretrained | Speech transcription, OCR, faces, scenes, sentiment — applied to video |

🎯 **Rule of thumb:** *"Does Microsoft already have a model that recognizes this?"* → use pretrained (Vision). *"Do you need to recognize your company's product SKU?"* → use Custom Vision.

---

## 🖼️ Azure AI Vision: Image Analysis 4.0

The unified 4.0 API replaces the old 3.x "Analyze Image" + "Read" + "Tag" endpoints. One client, one method, multiple **visual features**.

### The visual features

| Feature | What it returns |
|---|---|
| `CAPTION` | A single human-readable caption ("A black dog sitting on a chair") |
| `DENSE_CAPTIONS` | Multiple captions for different regions of the image |
| `TAGS` | Keywords ("dog", "indoor", "furniture") |
| `OBJECTS` | Bounding boxes + names for detected objects |
| `PEOPLE` | Bounding boxes for people (no identification) |
| `SMART_CROPS` | Region(s) to crop to focus on key content |
| `READ` | OCR — extract all text with bounding polygons |

### Python (SDK 4.0)

```python
from azure.ai.vision.imageanalysis import ImageAnalysisClient
from azure.ai.vision.imageanalysis.models import VisualFeatures
from azure.core.credentials import AzureKeyCredential

client = ImageAnalysisClient(
    endpoint="https://<resource>.cognitiveservices.azure.com/",
    credential=AzureKeyCredential("<KEY>")
)

result = client.analyze(
    image_url="https://example.com/receipt.jpg",
    visual_features=[VisualFeatures.READ, VisualFeatures.CAPTION, VisualFeatures.TAGS],
    gender_neutral_caption=True,
    language="en"
)

print(result.caption.text, result.caption.confidence)
for line in result.read.blocks[0].lines:
    print(line.text)
```

🚨 **Trap:** `gender_neutral_caption=True` (replaces gendered captions like "a man" with "a person") is a fairness setting — exam loves to test it.

### REST endpoint

```http
POST /computervision/imageanalysis:analyze?api-version=2024-02-01&features=read,caption,tags HTTP/1.1
Host: <resource>.cognitiveservices.azure.com
Ocp-Apim-Subscription-Key: <KEY>
Content-Type: application/json

{ "url": "https://example.com/receipt.jpg" }
```

---

## 📄 OCR — Read API

The **Read** feature inside Image Analysis 4.0 handles printed and handwritten text in 100+ languages.

For **PDF and multi-page TIFF**, you previously used the standalone Read API (also called "Read 3.2"). Microsoft is migrating these workloads to **Document Intelligence** (Module 5), but for pure text extraction (no key-value pairs, no tables), Read is still the right tool.

### What Read returns

```
Read result structure:
  pages → blocks → lines → words
                        ↘ bounding polygon per line/word
```

Confidence comes back per word. Use polygons (8-point) not bounding boxes (4-point) when shapes are skewed.

🎯 **Exam question pattern:**
- "Print receipts, get text + line numbers" → Image Analysis 4.0 with `READ` feature
- "PDF invoices with tables and key-value pairs" → Document Intelligence
- "Handwritten exam papers" → Read (it supports handwriting)
- "Receipt with VENDOR / TOTAL / DATE structure extracted" → Document Intelligence prebuilt **receipt** model

---

## 🎨 Custom Vision

Custom Vision lets you train your own image **classification** or **object detection** model with as few as 50 images per tag.

### Two flavors

| Project type | Output |
|---|---|
| **Classification** | One or more labels for the whole image (Multiclass — one label · Multilabel — many) |
| **Object Detection** | Labels + bounding boxes for each instance in the image |

### Two resources

Custom Vision uses **two** separate resources:
- **Training** resource (`CustomVision.Training`) — manage projects, upload images, train iterations
- **Prediction** resource (`CustomVision.Prediction`) — call the published model from your app

You can also provision **both in one** with the `CognitiveServices` kind, but separate is more common in exam scenarios.

### The training-to-production workflow

```
1. Create a project (classification or detection)
2. Upload images + tags (use the SDK or the customvision.ai portal)
3. Train an iteration (Quick Training or Advanced Training)
4. Evaluate (precision / recall / mean Average Precision)
5. Publish the iteration to your Prediction resource
6. Call the prediction endpoint from your app
```

### Domains

When you create a project, you pick a **domain**:
- **General** — broad, good default
- **General [Compact]** — exportable to ONNX / TensorFlow / CoreML for edge/offline use
- **Food**, **Landmarks**, **Retail** — domain-tuned base models
- **Logo** (classification) — corporate logos

🎯 **Trap on the exam:** "Need to run on a device with no internet" → must pick a **Compact** domain and **export** the model.

### Python (Custom Vision SDK)

```python
from azure.cognitiveservices.vision.customvision.training import CustomVisionTrainingClient
from azure.cognitiveservices.vision.customvision.training.models import ImageFileCreateBatch, ImageFileCreateEntry
from msrest.authentication import ApiKeyCredentials

creds = ApiKeyCredentials(in_headers={"Training-key": "<TRAINING-KEY>"})
trainer = CustomVisionTrainingClient(endpoint, creds)

project = trainer.create_project("expense-receipts", classification_type="Multiclass")
tag_receipt = trainer.create_tag(project.id, "receipt")
# ... upload images, then:
iteration = trainer.train_project(project.id)
trainer.publish_iteration(project.id, iteration.id, "v1", "<PREDICTION-RESOURCE-ID>")
```

### Evaluation metrics

| Metric | Meaning | Good when |
|---|---|---|
| **Precision** | Of predicted positives, how many were correct | Care about false positives |
| **Recall** | Of actual positives, how many were caught | Care about false negatives |
| **mAP** (mean Average Precision) | Object-detection accuracy across thresholds | Object detection projects |

🚨 **MEMORIZE:** Precision + Recall trade off; **mAP** is only for object detection (not classification).

---

## 😀 Face Service

| Capability | What it does | Limited Access? |
|---|---|---|
| **Detect** | Find faces + return bounding boxes, landmarks, attributes (glasses, mask, head pose) | No |
| **Verify** | "Are these two faces the same person?" 1-to-1 | Yes (limited) |
| **Identify** | "Who is this face from my known group?" 1-to-N | Yes (limited) |
| **Find Similar** | Closest face in a list | Generally available |
| **Group** | Cluster similar faces together | Generally available |

### What Microsoft removed (RAI deprecation, 2022)

- ❌ **Emotion** inference (anger, happiness) — retired
- ❌ **Gender, Age, Smile, Facial Hair, Hair, Makeup** attributes — retired
- ✅ **Glasses, Mask, Head Pose, Blur, Exposure, Noise, Occlusion** — still available

🎯 **Exam trap:** A question that says "use Face API to detect a user's emotion" is testing whether you know that capability was retired.

### Person Groups

For identification:

```
PersonGroup (legacy) or DynamicPersonGroup (new)
  └── Person (e.g. "Alice")
        └── persistedFaceId (multiple example photos per person)
```

Workflow:
1. Create a person group
2. Add persons + their face images
3. **Train** the group
4. **Identify** unknown faces against the trained group

### Python

```python
from azure.ai.vision.face import FaceClient
from azure.ai.vision.face.models import FaceDetectionModel, FaceRecognitionModel, FaceAttributeTypeDetection03
from azure.core.credentials import AzureKeyCredential

client = FaceClient(endpoint, AzureKeyCredential(key))

detected = client.detect(
    image_content=image_bytes,
    detection_model=FaceDetectionModel.DETECTION_03,
    recognition_model=FaceRecognitionModel.RECOGNITION_04,
    return_face_attributes=[FaceAttributeTypeDetection03.MASK, FaceAttributeTypeDetection03.HEAD_POSE]
)
for f in detected:
    print(f.face_rectangle, f.face_attributes.mask)
```

🚨 **Detection model 03** is current. **Recognition model 04** is current. Older models exist for back-compat. Don't pick `DETECTION_01` for new code.

---

## 🎬 Azure AI Video Indexer

Treat Video Indexer as **"AI services applied to video"**: it runs Speech-to-Text, OCR, face detection, scene detection, sentiment, named entities, and more — automatically on uploaded videos.

| Insight | Source |
|---|---|
| Transcript | Speech-to-Text |
| OCR | Vision Read |
| Faces | Face (subject to limited-access rules) |
| Topics & Keywords | Language |
| Sentiments | Language |
| Brands | Brand detection |
| Scenes & shots | Vision |
| Translation | Translator |

### Two API surfaces
- **Video Indexer portal** — web UI, drag-and-drop, browse insights
- **Video Indexer API** (REST) — upload, query, embed widgets in your app

### Customization
- **Custom Language model** — improve transcription accuracy on industry jargon
- **Custom Brands** — train it to recognize your brand mentions
- **Custom Person model** — recognize specific people (limited access, like Face)
- **Custom Logo** — recognize your company's logos

### Widgets
Video Indexer offers embeddable HTML widgets — **Player widget**, **Insights widget**, **Range editor** — so you can drop a transcript timeline into your web app with minimal code.

---

## ⚖️ Service Selection Cheat Sheet

| You need to… | Pick |
|---|---|
| Tag, caption, smart-crop an image | Azure AI Vision (Image Analysis 4.0) |
| Read printed text from a photo | Azure AI Vision — READ feature |
| Read text + tables + key/value from a PDF invoice | Document Intelligence (Module 5) |
| Recognize your custom widgets in factory photos | Custom Vision (object detection) |
| Photo classification (cat/dog/other) | Custom Vision (classification) |
| Detect faces + check if someone is wearing a mask | Face — detect with mask attribute |
| Verify "is this the same person?" | Face — verify (limited access) |
| Identify a face from a known team list | Face — identify (limited access) |
| Run vision on a video and get a transcript | Video Indexer |
| Run a classifier offline on a Raspberry Pi | Custom Vision Compact domain → export ONNX |

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---|---|
| "Image Analysis 4.0 needs you to call /analyze for each feature" | One call with `visual_features=[…]` returns all features |
| "Face still detects emotion" | Emotion + age + gender attributes were retired in 2022 |
| "Custom Vision is one resource" | Two: Training + Prediction (or one CognitiveServices) |
| "Read API can do invoice extraction" | Read gives raw text. Use Document Intelligence for structured fields |
| "Custom Vision needs thousands of images" | 50 per tag is the documented minimum |
| "Image Analysis 4.0 works in all Vision regions" | Some 4.0 features are region-restricted — check docs |

---

## 🚨 Exam Traps

1. **Visual features are passed in ONE call** — old code patterns might suggest one call per feature; that's the 3.x style.
2. **Custom Vision Compact domain is required for export** (offline / edge models).
3. **Face emotion is deprecated** — any answer that uses it is wrong.
4. **Identification needs a trained person group**; just having faces doesn't identify anyone.
5. **Read API returns lines + words with bounding polygons (8-point)**; recall the structure.
6. **Video Indexer Custom Person requires Limited Access approval**, same as Face identification.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| **Image Analysis 4.0** | Unified Azure AI Vision API for tags/captions/objects/OCR/people |
| **Visual feature** | A capability flag passed to `analyze()` (e.g. `CAPTION`, `READ`) |
| **Dense Captions** | Multiple captions for different regions of one image |
| **Smart Crop** | Vision returns region(s) ideal for thumbnail cropping |
| **Read** | OCR feature — printed + handwritten, 100+ languages |
| **Custom Vision** | Train your own image classifier or detector |
| **Domain (Custom Vision)** | Base model template: General, Food, Landmarks, Retail, Logo, Compact |
| **Compact domain** | Exportable to ONNX/TensorFlow/CoreML for edge use |
| **mAP** | Mean Average Precision — object-detection accuracy metric |
| **Iteration** | A trained version of a Custom Vision model |
| **Person Group** | Container of known persons used for Face identification |
| **Persisted face** | A face image stored in a person group for matching |
| **Detection model 03** | Current Face detection model |
| **Recognition model 04** | Current Face recognition model |
| **Limited Access** | Microsoft gating program (Face ID, Custom Neural Voice, etc.) |
| **Video Indexer insights** | The bundle of transcript/OCR/faces/scenes/sentiment a video produces |
| **gender_neutral_caption** | Setting that replaces gendered words with "person" |

---

## ✅ Module 3 Summary

You now know:
- 👁️ Four vision services and when to pick each
- 🖼️ Image Analysis 4.0 visual features + the one-call pattern
- 📄 Read OCR vs Document Intelligence boundaries
- 🎨 Custom Vision classification vs detection, two resources, Compact domain for edge
- 😀 Face service — what's still available, what was retired, limited-access gating
- 🎬 Video Indexer insights + customization options
- 📐 Evaluation metrics: precision, recall, mAP
- 🚨 The classic traps (emotion is gone, one call gets all features, Compact for export)

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 4: NLP](../Module-04-Natural-Language-Processing/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Azure AI Vision — Image Analysis](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-tag-images-40)
- 📖 [Read API and OCR](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-ocr)
- 📖 [Custom Vision docs](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/)
- 📖 [Face service overview](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-identity)
- 📖 [Face Limited Access form](https://aka.ms/facerecognition)
- 📖 [Azure AI Video Indexer](https://learn.microsoft.com/en-us/azure/azure-video-indexer/)
