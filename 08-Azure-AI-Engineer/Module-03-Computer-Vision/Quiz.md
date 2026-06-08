# ✏️ Module 3 Quiz: Computer Vision

> **Instructions:** Answer all 28 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 23/28 minimum.
> Each question carries a **Bloom's-taxonomy** tag.

---

## Questions

### Q1. Which Azure service should you use to extract printed text from a JPEG receipt photo? *(Apply)*
A. Azure AI Document Intelligence
B. Azure AI Vision (Image Analysis 4.0) with the READ feature
C. Custom Vision
D. Face

---

### Q2. Image Analysis 4.0 lets you request multiple visual features in: *(Remember)*
A. Separate calls per feature
B. One call with a list of features
C. Only via the portal, not the SDK
D. A scheduled batch job

---

### Q3. Which feature of Image Analysis 4.0 returns multiple captions for different regions of an image? *(Remember)*
A. CAPTION
B. DENSE_CAPTIONS
C. SMART_CROPS
D. PEOPLE

---

### Q4. What does `gender_neutral_caption=True` do? *(Understand)*
A. Disables face detection
B. Replaces gendered nouns ("man") with "person" in captions
C. Removes PII from images
D. Enables a male voice synthesizer

---

### Q5. Which Python line completes this Image Analysis 4.0 call? *(Apply)*
```python
from azure.ai.vision.imageanalysis import ImageAnalysisClient
from azure.ai.vision.imageanalysis.models import VisualFeatures
client.analyze(
    image_url="https://...",
    visual_features=______
)
```
A. `[VisualFeatures.READ, VisualFeatures.CAPTION]`
B. `"read,caption"`
C. `{"features": "read"}`
D. `VisualFeatures.ALL`

---

### Q6. You need to recognize your company's custom widget in factory photos. Which service? *(Apply)*
A. Image Analysis 4.0
B. Custom Vision (object detection)
C. Face
D. Video Indexer

---

### Q7. Custom Vision uses how many distinct resource kinds? *(Remember)*
A. 1
B. 2 (Training and Prediction)
C. 3
D. 4

---

### Q8. To deploy a Custom Vision model offline on a Raspberry Pi, you must: *(Apply)*
A. Use the General domain
B. Use a Compact domain and export the model
C. Use the Food domain
D. Upgrade to S2 tier

---

### Q9. Which metric is specifically used for object detection model evaluation? *(Remember)*
A. Precision
B. Recall
C. mAP (mean Average Precision)
D. F1 score

---

### Q10. Which Face capability requires Limited Access approval? *(Remember)*
A. Detection of bounding boxes
B. Detection of mask attribute
C. Identification (1-to-N matching against a person group)
D. Detection of head pose

---

### Q11. Which Face attributes were RETIRED in 2022 due to RAI concerns? *(Remember)*
A. Mask, Head Pose
B. Emotion, Age, Gender
C. Glasses, Occlusion
D. Blur, Noise

---

### Q12. To identify a face from a known group of people, the workflow is: *(Understand)*
A. Detect → Identify (no training needed)
B. Create person group → Add persons + faces → **Train** the group → Identify
C. Upload all photos to Custom Vision
D. Use Image Analysis PEOPLE feature

---

### Q13. Which Face detection model is the current (recommended) model? *(Remember)*
A. DETECTION_01
B. DETECTION_02
C. DETECTION_03
D. DETECTION_05

---

### Q14. To extract OCR + key-value pairs + tables from a PDF invoice, which service is BEST? *(Apply)*
A. Image Analysis 4.0
B. Azure AI Document Intelligence
C. Custom Vision
D. Face

---

### Q15. The Read API hierarchy from largest to smallest unit is: *(Remember)*
A. Words → Lines → Blocks → Pages
B. Pages → Blocks → Lines → Words
C. Pages → Paragraphs → Words → Characters
D. Documents → Sections → Sentences

---

### Q16. A Custom Vision classification project supports labels per image as: *(Understand)*
A. Always exactly one (Multiclass only)
B. Multiclass (one label) or Multilabel (many labels)
C. Always many labels (Multilabel only)
D. Up to 3 labels max

---

### Q17. Which feature of Image Analysis 4.0 returns crop regions optimized for thumbnails? *(Remember)*
A. SMART_CROPS
B. OBJECTS
C. PEOPLE
D. TAGS

---

### Q18. To translate spoken English in a video into French text + identify the speakers, the EASIEST service to use is: *(Apply)*
A. Run Speech + Translator + Face manually
B. Azure AI Video Indexer
C. Azure OpenAI Whisper
D. Custom Vision

---

### Q19. A Custom Vision model has high precision but low recall on the "defective product" class. The team is missing many defects. To improve recall they should: *(Analyze)*
A. Add more images of defective products
B. Increase the prediction threshold
C. Switch to classification from object detection
D. Delete some training images

---

### Q20. Which file/export format is NOT supported by Custom Vision Compact export? *(Remember)*
A. ONNX
B. TensorFlow
C. CoreML
D. PowerPoint

---

### Q21. Video Indexer custom models include all EXCEPT: *(Remember)*
A. Custom Language
B. Custom Brands
C. Custom Person
D. Custom Skill

---

### Q22. A team wants to call Face attributes (Mask, Head Pose) on uploaded user photos. They DO NOT need to identify anyone. Do they need Limited Access? *(Understand)*
A. Yes, all Face calls require Limited Access
B. No, detection + non-identifying attributes are generally available
C. Yes, Mask requires Limited Access
D. Only in EU

---

### Q23. Image Analysis 4.0 returns text with bounding shapes as: *(Remember)*
A. 4-point bounding boxes only
B. 8-point bounding polygons (handles skew)
C. Plain text only, no positions
D. Pixel-level masks

---

### Q24. To improve transcription accuracy on technical jargon in Video Indexer, you should: *(Apply)*
A. Train a Custom Language model
B. Train a Custom Brand model
C. Upgrade Video Indexer SKU
D. Use Custom Vision

---

### Q25. Custom Vision iteration deployment is done via: *(Understand)*
A. The `train_project` call
B. The `publish_iteration` call, passing the prediction resource ID
C. The `deploy_model` call
D. ARM template only

---

### Q26. A user uploads a blurry photo of a receipt. Which Face attribute would tell you about image quality? *(Understand)*
A. `mask`
B. `head_pose`
C. `blur`
D. `face_rectangle`

---

### Q27. Mercedes-Benz Connected's factory line uses **Custom Vision Compact + ONNX export** for on-device defect inference. Evaluate this architecture against the alternative ("send every assembly-line frame to Azure AI Vision in the cloud"). At a 60-frames-per-second assembly speed with 20ms per-frame budget and intermittent network, which factor below MOST decisively favors the edge architecture? *(Evaluate)*
A. Edge is always cheaper
B. Cloud round-trip latency violates the per-frame budget under intermittent network; the edge model gives deterministic local inference, with cloud retraining as a separate, asynchronous loop
C. Cloud cannot do object detection
D. Edge models are always more accurate

---

### Q28. **Design task.** You're building a workplace-safety vision pipeline that must flag missing PPE (helmet, safety vest) on construction sites in real time, run in EU jurisdictions, and remain defensible under the EU AI Act (2024) "high-risk biometric" categorisation. Which design below best meets all constraints? *(Create)*
A. Face Identification + Custom Vision classifier + cloud inference + no documentation
B. Custom Vision **object detection** (Compact, ONNX-exported to edge) for PPE classes only, **no biometric / face identification**; precision/recall + mAP measured on a holdout set; documented Impact Assessment per Microsoft RAI Standard v2; per-site DPIA per GDPR; Transparency notice posted on site signage; human-in-the-loop review for all flagged events
C. Use Image Analysis 4.0 PEOPLE feature with FACE attributes
D. Buy a third-party AI service that doesn't disclose its model

---

## 🎯 Answers + Explanations

### Q1: **B. Azure AI Vision (Image Analysis 4.0) with the READ feature**
For raw text from a single image, Image Analysis 4.0's READ feature is the right tool. Document Intelligence is for *structured* extraction (invoices, receipts with vendor/total/date).

### Q2: **B. One call with a list of features**
A 4.0 hallmark, pass `visual_features=[…]` and get everything in one response.

### Q3: **B. DENSE_CAPTIONS**
Returns multiple region-level captions. CAPTION is the single image-level one.

### Q4: **B. Replaces gendered nouns with "person"**
An RAI fairness setting baked into the SDK call.

### Q5: **A. `[VisualFeatures.READ, VisualFeatures.CAPTION]`**
A list of enum values is the correct shape.

### Q6: **B. Custom Vision (object detection)**
Pretrained models won't know your widget. Object detection because you want bounding boxes; classification if you only need yes/no.

### Q7: **B. 2 (Training and Prediction)**
Two distinct resource kinds (or a single CognitiveServices). The exam pattern tests "two resources."

### Q8: **B. Use a Compact domain and export the model**
Only Compact domains can be exported (ONNX, TensorFlow, CoreML, Docker).

### Q9: **C. mAP (mean Average Precision)**
The standard object-detection metric. Classification uses Precision/Recall/F1.

### Q10: **C. Identification (1-to-N)**
Plus Verification and certain higher-risk attributes, these need Limited Access. Basic detection (rectangles) is GA.

### Q11: **B. Emotion, Age, Gender** (and Smile, Facial Hair, Hair, Makeup)
Retired in 2022. Picking any of these on the exam is a wrong answer.

### Q12: **B. Create person group → Add persons + faces → Train → Identify**
Don't forget the training step, many test takers skip it.

### Q13: **C. DETECTION_03**
Newest detection model. Recognition model 04 is current for recognition.

### Q14: **B. Azure AI Document Intelligence**
Structured extraction (key/value, tables, layout) is Document Intelligence's specialty.

### Q15: **B. Pages → Blocks → Lines → Words**
Memorize this hierarchy.

### Q16: **B. Multiclass or Multilabel**
Multiclass = one label per image. Multilabel = many labels per image.

### Q17: **A. SMART_CROPS**
Returns suggested crop regions for thumbnails focused on the salient content.

### Q18: **B. Azure AI Video Indexer**
It runs Speech + Translator + Face (subject to limited access) + more on a single upload.

### Q19: **A. Add more images of defective products**
Low recall on a class usually means insufficient/imbalanced training data for that class.

### Q20: **D. PowerPoint**
Supported exports include ONNX, TensorFlow (SavedModel), CoreML, Docker (Linux/Windows/ARM). Not PowerPoint.

### Q21: **D. Custom Skill**
Custom Skill is an Azure AI Search concept (Module 5), not Video Indexer. Indexer customs: Language, Brand, Person, Logo.

### Q22: **B. No, detection + non-identifying attributes are GA**
You only hit Limited Access when you identify, verify, or use specific attributes Microsoft has gated.

### Q23: **B. 8-point bounding polygons**
Polygons handle text on skewed/curved surfaces better than rectangles.

### Q24: **A. Train a Custom Language model**
Improves the speech model's vocabulary for your domain.

### Q25: **B. The `publish_iteration` call, passing the prediction resource ID**
Training alone doesn't expose the model, you publish to a Prediction resource.

### Q26: **C. `blur`**
Image quality attributes (blur, exposure, noise, occlusion) are still GA.

### Q27: **B. Latency budget + deterministic local inference**
Cloud round-trip is unbounded under intermittent network; deterministic local inference + cloud retraining is the canonical Mercedes-Benz factory pattern (case-study reference 2023–2024). A is wrong (edge can be more expensive at low volume), C is factually wrong (cloud can do detection), D is false (cloud models are often more accurate, but accuracy isn't the binding constraint).

### Q28: **B. Object detection (no face), measurable + documented**
Choice B avoids the EU AI Act high-risk biometric category by *not* identifying individuals; meets Microsoft RAI Standard v2 with documented Impact Assessment; satisfies GDPR with a per-site DPIA; honors Transparency with on-site signage; preserves Accountability with human-in-the-loop. A and C drag in face/biometric features that trigger the high-risk gate. D fails technical-documentation requirements.

---

## 📊 Score Yourself

- 27–28/28 → 🏆 Move on
- 23–26/28 → ✅ Strong
- 18–22/28 → ⚠️ Re-read Custom Vision + Face sections
- <18/28 → 🔁 Re-read everything; re-quiz tomorrow

### Bloom's distribution check
| Level | Count | % | Target |
|---|---|---|---|
| Remember | 13 | 46% | ≤ 25%¹ |
| Understand | 5 | 18% | ~25% |
| Apply | 7 | 25% | ~25% |
| Analyze | 1 | 4% | ~20% |
| Evaluate | 1 | 4% | (combined) |
| Create | 1 | 4% | ~5% |

¹ Vision module is service-name / feature-name heavy; recall remains exam-critical. Apply + design questions stretch into the harder ground.

---

## 🃏 Add To Your Flashcards

- Image Analysis 4.0 visual features list
- One-call pattern (not one call per feature)
- Custom Vision 2-resource model
- Compact domain → required for export
- mAP for object detection
- Retired Face attributes (Emotion, Age, Gender, Smile, Facial Hair, Hair, Makeup)
- Identification = requires Limited Access AND training a person group
- Read hierarchy: Pages → Blocks → Lines → Words
- Service selection rules (Vision READ vs Document Intelligence)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4: NLP](../Module-04-Natural-Language-Processing/Reading.md)
