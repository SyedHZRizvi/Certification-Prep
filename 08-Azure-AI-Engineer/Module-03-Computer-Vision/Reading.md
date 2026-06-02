# Module 3: Computer Vision 👁️

> **Why this module matters:** Vision is 15–20% of AI-102 and the most code-heavy domain. You need to know FOUR services cold: Azure AI Vision (Image Analysis 4.0 + OCR/Read), Face, Custom Vision, and Video Indexer.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Module 1 (resource model, SDK packages, auth) — [Module 1 Reading](../Module-01-AI-Services-Overview/Reading.md)
> - Module 2 (Responsible AI principles — Face emotion was retired *because* of RAI) — [Module 2 Reading](../Module-02-Responsible-AI-Content-Safety/Reading.md)
> - Basic concept of supervised learning / labels (covered in [`07-AWS-AI-Practitioner` Module 3](../../07-AWS-AI-Practitioner/Module-03-ML-Fundamentals/Reading.md) if you need a refresher)
> - Familiarity with neural-network primitives at the conceptual level — the canonical reference is Vaswani et al. (2017), *"Attention Is All You Need"*, NeurIPS — vision transformers (ViT) descend from that line of work
>
> No prior computer-vision certification is required. If the term "bounding box" is fully new, skim a 5-min YouTube primer before continuing.

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

## 📖 Case Study — Mercedes-Benz Connected on Azure (2020–2024)

**Situation.** Mercedes-Benz, headquartered in Stuttgart, has been a multi-year strategic Azure customer (Mercedes-Benz / Microsoft strategic partnership announced 2020, expanded 2023 at CES with the integration of ChatGPT in the MBUX infotainment system; verified against Microsoft Customer Stories and Mercedes-Benz Group press releases, checked 2026-05). Beyond the headline LLM integration, Mercedes-Benz uses Azure AI Vision + Azure AI Video Indexer + Azure AI Speech across its connected-vehicle and manufacturing-quality pipelines: e.g., visual quality-control on assembly lines (paint defect detection), driver-facing telematics, and dealer-side service-bay documentation.

**Decision.** For the production-quality use case, Mercedes-Benz combined:

- **Azure AI Vision** Image Analysis 4.0 for general factory-floor anomaly detection (tags + dense captions on every line photo).
- **Custom Vision** trained on labeled defect images (paint runs, dent shapes, decal misalignment) — using the **General [Compact]** domain so models could be exported to ONNX and run on edge devices alongside the assembly line, gated by network latency.
- **Azure AI Video Indexer** on dealer-side service-bay video to produce searchable transcripts + OCR (for VIN plate recognition).
- For the in-cabin assistant, Mercedes used a combination of Speech-to-Text + Azure OpenAI behind a custom UX that surfaces the AI badge — explicitly addressing the Responsible AI **Transparency** principle.

Critically, Mercedes did *not* deploy Face identification — the **Limited Access** gate plus their own privacy posture made it a non-starter for customer-facing cabin features (emotion attributes retired in 2022 also closed that door at the platform level).

**Outcome.** Mercedes' 2023 expansion announcements highlighted a "smart factory" model that runs vision inference at the edge with cloud retraining, dramatically reducing the per-vehicle inspection time. The MBUX-integrated voice assistant rolled out across the 2024 model year. No public security incident has been disclosed; the architecture is showcased at Microsoft Ignite 2023 and 2024 as a reference for industrial GenAI deployments.

**Lesson for the exam / for practitioners.** This case demonstrates exactly the exam's "service-selection" pattern at industrial scale: pretrained Vision for general tagging, *Custom Vision Compact for edge*, *Video Indexer for documents+video*, and *Face is gated* — and a Responsible AI overlay determines what features ship in customer-facing cars.

**Discussion (Socratic).**
- Q1: Mercedes-Benz declined to ship Face identification in cabin. Build the strongest commercial argument *for* shipping it (e.g., personalized seat/mirror profiles) and the strongest *against* (privacy + biometric regulation). What's the implicit trade-off they accepted by saying no?
- Q2: The factory pipeline uses **Custom Vision Compact + ONNX export** to run inference on-device. What's the engineering trade-off between "edge inference" and "send every frame to Azure"? Walk through the latency, bandwidth, retraining-cadence, and regulatory dimensions. At what assembly-line speed would you flip the answer?
- Q3: Microsoft retired Face emotion + age + gender attributes in 2022. Argue both sides at a Cornell systems-engineering seminar: should attribute retirement be the responsibility of (a) the cloud provider (Microsoft chose to retire), (b) the customer (Mercedes could have built it themselves), or (c) the regulator (the EU AI Act now categorizes some such attributes as high-risk)? What principle from Module 2 underlies your answer?

---

## 💬 Discussion — Socratic prompts

1. **The Image Analysis 4.0 vs Document Intelligence boundary.** A team gets ~80% accuracy reading printed receipts with Image Analysis 4.0's `READ` feature, but ~99% with Document Intelligence's `prebuilt-receipt`. The 19-point gap costs $10K/month in manual review. Build the principled argument for migrating to Document Intelligence AND for staying on Image Analysis 4.0 (maybe because the receipt mix is changing). What downstream architectural choices does each answer commit you to?
2. **Custom Vision Compact for edge.** Compact domains export to ONNX, TensorFlow, CoreML, Docker. At what point does Azure ML (full lifecycle ML with managed endpoints) beat Custom Vision (low-code, narrower features)? Defend your threshold against a stakeholder who wants "the simpler tool."
3. **Limited Access for Face.** The Face Identification API requires a Microsoft Limited Access application. Argue the case that this gating is *more* useful than purely regulatory gating (e.g., EU AI Act biometric prohibitions). Counter-argue that it's just gatekeeping. Where does the line fall?
4. **Video Indexer vs raw Speech+Vision composition.** Video Indexer bundles STT, OCR, faces, scenes, sentiment, brands. For a startup with one engineer, it's a clear win. For an enterprise that needs to control every chunk of cost, the per-service composition might be cheaper. Walk through the cost-accounting and the "single throat to choke" arguments side by side — which would you defend at a $50M-ARR SaaS?
5. **Evaluation metrics: precision vs recall vs mAP.** Build the strongest argument that *recall* is the most important metric for a Custom Vision model trained to flag safety-vest violations at a construction site. Counter-argue that *precision* is, citing the cost of false alarms. What would mAP add to either argument?

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
- 📖 Mercedes-Benz Connected as a real industrial case across Vision + Video Indexer + Speech

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 4: NLP](../Module-04-Natural-Language-Processing/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 5 covers the Document Intelligence → AI Search side of structured extraction; Module 8 wires Vision into Foundry agents (e.g., GPT-4o vision + custom file-search).
> - Cross-course: [`07-AWS-AI-Practitioner`](../../07-AWS-AI-Practitioner/) Module 4 covers Rekognition + Textract for cross-cloud comparison.
> - Practice: Practice Exam 1 has ~5 questions from this module (visual features, Custom Vision domains, Face retirement); Final Mock Exam includes Vision-vs-Doc-Intelligence service-selection cases.

---

## 📚 Citations & Named References

- **Vaswani et al. (2017).** *"Attention Is All You Need."* In NeurIPS 2017. The transformer architecture that underlies modern vision-language models (GPT-4o vision; CLIP family).
- **Dosovitskiy et al. (2020).** *"An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale."* ICLR 2021 — Vision Transformer (ViT), the basis of many of Azure AI Vision's 4.0 models.
- **Microsoft Mechanics** (2024). *"Azure AI Vision Image Analysis 4.0 deep dive."* (verified 2026-05)
- **Microsoft Responsible AI Standard v2** (June 2022) — the standard under which Face emotion / age / gender attributes were retired in 2022.
- **Mercedes-Benz Group / Microsoft** partnership announcements (2020 initial, 2023 expansion at CES with ChatGPT/MBUX, 2024 production rollouts; verified against Microsoft Customer Stories 2026-05).
- **Microsoft Limited Access** policy for high-risk AI (Face ID, Custom Neural Voice, Speaker Recognition) — published policy, updated 2024.
- **EU AI Act** (Regulation (EU) 2024/1689, June 2024) — biometric categorisation in public spaces is "prohibited use" under Article 5; identification in workplaces is "high-risk" under Annex III.

---

## 📚 Further Reading (Optional)

- 📖 [Azure AI Vision — Image Analysis](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-tag-images-40)
- 📖 [Read API and OCR](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-ocr)
- 📖 [Custom Vision docs](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/)
- 📖 [Face service overview](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-identity)
- 📖 [Face Limited Access form](https://aka.ms/facerecognition)
- 📖 [Azure AI Video Indexer](https://learn.microsoft.com/en-us/azure/azure-video-indexer/)
