# Module 6: NLP & Computer Vision Workflows 🗣️👁️

> **Why this module matters:** AWS has a dozen *managed AI services* that solve NLP and CV problems with a single API call — no model training, no infrastructure. The MLS-C01 exam tests whether you can recognise when one of these (Comprehend, Rekognition, Textract, Translate, Transcribe, Polly, Lex, Kendra, Personalize, Forecast, Fraud Detector) is the BEST answer and when to instead build a custom SageMaker / Bedrock solution. This module makes you fluent in the "managed vs custom" decision and the specific capabilities of each managed L5 service.

> **Prerequisites for this module.** Modules 1–5 of this course. Helpful background:
> - Basic understanding of NLP tasks (classification, NER, summarisation, translation) — Module 1 covered the families
> - Basic understanding of CV tasks (classification, detection, segmentation) — Module 5 covered the architectures
> - Some Python and Boto3 familiarity

---

## 🍕 A Story: The Insurance Company That Never Trained A Model

Meet Marcus. He runs ML at a mid-size US auto-insurance company. In 2022 the company's claims team handles ~8,000 claims a day. Each claim involves: damage photos, a police report (sometimes), a customer recorded statement, and forms scanned via the company's mobile app. The manual review takes 15-25 minutes per claim and costs the company ~$22M/year in adjuster time.

Marcus is given an 18-month budget to build ML to reduce this cost. He starts by thinking SageMaker: train a damage-detection model on car photos, an NER model on police reports, an audio model on the recorded statements. A 12-person team with $4.5M annual budget.

Then a senior architect rebuilds the plan around AWS's *managed* services:
- **Rekognition Custom Labels** — train damage-class CNN with 200 labelled images (no SageMaker code)
- **Textract** — extract forms, key-value pairs, tables from scanned PDFs
- **Comprehend** — sentiment + entities from policy notes
- **Comprehend Medical** — drug names from medical liability claims
- **Transcribe** — recorded customer statements → text
- **Comprehend Custom Classifier** — categorise transcribed claim type
- **Translate** — Spanish-language statements
- **A2I (Augmented AI)** — human review of low-confidence outputs

The new plan uses **three engineers and $1.2M annual budget**. Time-to-launch falls from 18 months to 4. By 2024 the company runs 11,000 claims/day with 7-minute average automated triage and zero increase in headcount. The reduced manual cost is ~$15M/year.

That is the lesson of this module. **Use the managed service before you train your own model.**

---

## 🗣️ AWS Managed NLP Services — The Six That Matter

| Service | Task | Custom? | Headline use |
|---------|------|---------|--------------|
| **Amazon Comprehend** | Sentiment, entities, key phrases, language detect, syntax, topic modelling | Yes (Custom Classifier, Custom Entity) | Customer-feedback NLP, content moderation |
| **Amazon Comprehend Medical** | Medical NER (drugs, anatomy, conditions, ICD-10, RxNorm) | No (specialised) | Medical record extraction |
| **Amazon Translate** | Machine translation, ~75 languages | Yes (Custom Terminology, Active Custom Translation) | Help-centre / chat translation |
| **Amazon Transcribe** | Speech-to-text, batch & streaming | Yes (Custom Vocabulary, Custom Language Model) | Call-centre, captions, podcasts |
| **Amazon Polly** | Text-to-speech (neural & generative voices, SSML) | Yes (custom lexicons) | Voice apps, accessibility |
| **Amazon Lex** | Conversational bots (intents, slots) — Alexa-tech | Yes (intent / slot definition) | Chatbots, voice IVRs |
| **Amazon Kendra** | Semantic enterprise search | Yes (data sources, FAQs) | Internal knowledge base |

### Amazon Comprehend — The NLP Workhorse

Comprehend has both **pre-trained APIs** and **custom models**.

**Pre-trained APIs (zero training):**

| API | Returns |
|-----|---------|
| `DetectDominantLanguage` | Language code + confidence |
| `DetectSentiment` | Positive / negative / neutral / mixed + scores |
| `DetectEntities` | PERSON, ORG, LOCATION, DATE, QUANTITY, etc. |
| `DetectKeyPhrases` | Noun-phrase chunks |
| `DetectSyntax` | POS tags |
| `DetectPiiEntities` | PII detection (SSN, email, etc.) |
| `DetectTargetedSentiment` | Sentiment per target entity (more granular) |
| `DetectToxicContent` | Toxicity scoring |

**Custom Comprehend:**

| Capability | Use |
|------------|-----|
| **Custom Classifier** | Multi-class or multi-label document classifier (e.g. "billing / shipping / technical" support tickets) |
| **Custom Entity Recognizer** | Domain-specific NER (e.g. "product SKU", "lab test code") |
| **Topic Modelling** | Discover topics across a corpus (LDA under the hood) |

🎯 **Exam pattern.** *"Classify customer-support tickets into 12 categories with minimal MLOps."* → **Comprehend Custom Classifier** (managed AutoML).

🚨 **Trap.** *"Use Comprehend Custom Classifier on a 100-class problem with 5 samples per class."* → Comprehend needs minimum data per class (typically ≥10-50). For tiny data, prefer transfer learning from foundation models via Bedrock.

### Amazon Comprehend Medical

A specialised vertical of Comprehend with built-in vocabularies for healthcare:
- **NER** for medications (RxNorm codes), conditions (ICD-10-CM), anatomy, test procedures
- **Relationship extraction** between entities (e.g. "drug X treats condition Y")
- **HIPAA-eligible** — can process PHI

🎯 **Exam pattern.** *"Extract drug names and dosages from clinical notes."* → **Comprehend Medical**.

### Amazon Translate

| Feature | Purpose |
|---------|---------|
| **Real-time translation** | API call, ~75 language pairs |
| **Batch translation** | Translate large document collections in S3 |
| **Custom Terminology** | Force certain terms to translate a specific way (e.g. product names) |
| **Active Custom Translation (ACT)** | Domain-specific translation using parallel data (legal, medical, etc.) |
| **Profanity filter** | Mask profane content |

🎯 **Exam pattern.** *"Translate product descriptions to 12 languages while keeping brand names intact."* → **Translate with Custom Terminology**.

### Amazon Transcribe

| Mode | Use |
|------|-----|
| **Batch** | Process audio file in S3 |
| **Streaming** | Real-time transcription (HTTP/2 + WebSocket) |
| **Call Analytics** | Specialised for contact-centre calls (sentiment, talk-listen ratio, redaction) |
| **Medical Transcribe** | Specialised for clinician-patient conversations |

**Custom options:**

| Feature | Purpose |
|---------|---------|
| **Custom Vocabulary** | Pronunciation hints for proper nouns / acronyms ("AWS" → "ay double-you ess") |
| **Custom Language Model** | Train on domain text to improve recognition in that domain |
| **Vocabulary Filter** | Block / mask certain words |
| **Speaker diarisation** | Identify "speaker 1 / speaker 2" |
| **PII redaction** | Automatically redact SSN, credit card etc. |

🎯 **Exam pattern.** *"Improve medical-call transcription accuracy."* → **Custom Language Model** trained on clinical text.

### Amazon Polly

| Feature | Purpose |
|---------|---------|
| **Standard voices** | Cheaper, OK quality |
| **Neural voices** | Higher quality |
| **Generative voices (newer, 2024+)** | Most human-like |
| **SSML** | Speech Synthesis Markup Language for control (pauses, pitch, emphasis) |
| **Lexicons** | Custom pronunciation |
| **Speech Marks** | Word/visemes timing for animation |
| **Long-form audio** | Long-content optimised voices |

### Amazon Lex

Lex is the same engine as Alexa, exposed for your own apps. Two versions: V1 (legacy) and V2 (current).

| Concept | Definition |
|---------|------------|
| **Intent** | What the user wants ("BookFlight", "CheckBalance") |
| **Utterance** | A way the user might phrase the intent ("I want to fly to Paris") |
| **Slot** | A parameter for the intent (departure date, destination) |
| **Slot type** | Built-in (AMAZON.City, AMAZON.Date) or custom |
| **Fulfillment** | Lambda function that performs the action |
| **Channels** | Web, mobile, Twilio, Facebook Messenger, Slack, Genesys Cloud |

🎯 **Exam pattern.** *"Build a chatbot that takes restaurant orders."* → **Lex** for intent recognition; Lambda for backend logic; optional Polly for voice.

🎯 **Exam pattern (newer).** *"Build a generative-AI chatbot answering questions about company policies."* → **Bedrock Agent** (Module 7) — Lex is intent-based and brittle for open-ended chat.

### Amazon Kendra — Semantic Enterprise Search

Where Comprehend is per-document NLP, **Kendra** is *across* a document corpus. It is the AWS-native semantic search engine.

| Feature | Detail |
|---------|--------|
| **Connectors** | S3, SharePoint, ServiceNow, Salesforce, Confluence, Jira, OneDrive, Slack, etc. |
| **FAQ ingestion** | Q&A pairs surfaced with highest priority |
| **Query types** | Factoid ("when was X?"), descriptive ("how does Y work?"), keyword |
| **Confidence scoring** | High / Medium / Low / Very Low |
| **Custom synonyms** | Domain-specific terms |
| **Document attributes** | Filter by metadata (date, department, language) |

🎯 **Exam pattern.** *"Build an internal search engine across SharePoint, Confluence, and S3 for a 5,000-person company."* → **Amazon Kendra**.

🚨 **Trap.** Kendra ≠ Bedrock Knowledge Bases. Kendra is search; KBs are RAG-augmented LLM answers (Module 7). They are sometimes combined.

---

## 👁️ AWS Managed Computer Vision — The Three That Matter

| Service | Task | Custom? |
|---------|------|---------|
| **Amazon Rekognition** | Object/scene/face/text/celebrity detection, content moderation, video labels | Yes (Custom Labels) |
| **Amazon Textract** | OCR + form / table / key-value extraction from documents | No (managed) |
| **Amazon Lookout for Vision** | (Recently consolidated under Rekognition) Industrial defect detection | Custom |

### Amazon Rekognition

Pre-trained APIs:

| API | Returns |
|-----|---------|
| `DetectLabels` | Objects, scenes, concepts in the image |
| `DetectFaces` | Bounding boxes + facial attributes (age, smile, emotion) |
| `RecognizeCelebrities` | Celebrity identification |
| `SearchFacesByImage` | Match face against a face collection |
| `DetectModerationLabels` | NSFW / violence / weapons |
| `DetectText` | OCR (simple) |
| `DetectProtectiveEquipment` | PPE compliance |
| `CompareFaces` | Face match between two images |

**Video:**

| API | Returns |
|-----|---------|
| `StartLabelDetection` | Labels per frame range |
| `StartPersonTracking` | Track people through video |
| `StartFaceSearch` | Match faces in video against collection |
| `StartContentModeration` | Moderation labels per frame |

**Custom Labels:**
- Train a custom classifier or detector on as few as **10 labelled images per label**
- AutoML-style: no SageMaker code
- Production-ready; can be hosted as a Rekognition Custom Labels project endpoint

🎯 **Exam pattern.** *"Identify products in customer-uploaded photos against your catalogue."* → **Rekognition Custom Labels** (less than 100 images per class needed).

🎯 **Exam pattern.** *"Detect when employees on a factory floor are NOT wearing helmets."* → **Rekognition DetectProtectiveEquipment** (PPE) or Custom Labels for company-specific PPE.

### Amazon Textract

Textract is OCR + structure-aware extraction.

| Operation | Returns |
|-----------|---------|
| `DetectDocumentText` | Plain text OCR |
| `AnalyzeDocument` | OCR + **forms** (key-value pairs) + **tables** |
| `AnalyzeID` | Extract from driver's licence / passport |
| `AnalyzeExpense` | Receipts / invoices (vendor, line items, totals) |
| `AnalyzeLending` | Mortgage / lending documents (specialised) |
| `StartDocumentAnalysis` | Async for large PDFs |
| `Queries` | Ask natural-language questions about the document |

🎯 **Exam pattern.** *"Extract line items + totals from PDF invoices."* → **Textract AnalyzeExpense**.

🎯 **Exam pattern.** *"Extract form fields from W-2 tax forms."* → **Textract AnalyzeDocument** with `FORMS` and `TABLES`.

---

## 🤝 Augmented AI (A2I) — Human-In-The-Loop

When a managed AI service returns a *low-confidence* prediction, you can route it to a human reviewer using **Amazon A2I**.

| Built-in workflow | For |
|------------------|-----|
| Comprehend custom classifier review | Sentiment / classifier predictions |
| Rekognition image review | Label / moderation labels |
| Textract review | OCR / form extraction |
| Custom workflow | Any model output (SageMaker, etc.) |

| Workforce | Detail |
|-----------|--------|
| **Mechanical Turk** | Public crowd; cheapest |
| **Private** | Your own team |
| **Vendor** | Amazon-vetted ML labelling companies |

🎯 **Exam pattern.** *"Route low-confidence Textract extractions to human reviewers."* → **A2I** with a Textract built-in workflow.

---

## 🎯 Other Managed Services Worth Knowing

| Service | What it does |
|---------|--------------|
| **Amazon Personalize** | Real-time / batch recommendations; based on Amazon.com's recommender |
| **Amazon Forecast** | Time-series forecasting; tries multiple algorithms (DeepAR+, Prophet, ARIMA, ETS) |
| **Amazon Fraud Detector** | Pre-built fraud detection for online accounts / payments |
| **Amazon Q in QuickSight** | Natural-language Q&A on BI data |
| **Amazon Q Business** | Enterprise generative AI for company knowledge |
| **Amazon Q Developer** | Code assistant (formerly CodeWhisperer) |

### Personalize

| Recipe / use | Algorithm under the hood |
|--------------|--------------------------|
| `User-Personalization` | HRNN-Coldstart variant; ranking |
| `SIMS` | Item-to-item recommendations |
| `Personalized-Ranking` | Re-rank a list for a user |
| `Trending-Now` | What's hot right now |
| `Popularity-Count` | Baseline most-popular |

🎯 **Exam pattern.** *"Build a Netflix-style recommender with minimal effort."* → **Amazon Personalize** with `User-Personalization`.

### Forecast

Forecast applies multiple algorithms (DeepAR+, NPTS, Prophet, ARIMA, ETS, CNN-QR) and picks the best. Replaced by **Bedrock** + **Amazon Q** for many use cases since 2024, but still tested.

🎯 **Exam pattern.** *"Forecast 30-day demand for 1,000 SKUs with no ML expertise."* → **Amazon Forecast** (managed AutoML for time series).

### Fraud Detector

Pre-built fraud-detection workflows:

| Use case | Built-in model |
|----------|---------------|
| **Online fraud insights** | New-account / payment fraud |
| **Transaction fraud insights** | Card-present + card-not-present |
| **Account takeover insights** | Login-pattern anomaly |

🎯 **Exam pattern.** *"Detect new-account fraud with little training data."* → **Amazon Fraud Detector**.

---

## 🧭 Managed vs Custom — The Decision Tree

```
                Is there a managed L5 service for this task?
                            ↓
                     YES → Does it meet:
                        ↓     - Accuracy requirement?
                        ↓     - Customisation requirement?
                        ↓     - Data residency / privacy?
                        ↓
                        ↓ YES → ✅ Use managed (L5)
                        ↓
                        ↓ NO  → Need fine-tune / domain-specific?
                        ↓        ↓
                        ↓        YES → Custom L5 (e.g. Comprehend Custom Classifier)
                        ↓        ↓     or Bedrock fine-tune (Module 7)
                        ↓        ↓
                        ↓        NO  → Custom SageMaker (Module 4-5)
                        ↓
                     NO  → Custom SageMaker (Module 4-5)
                              or Bedrock (Module 7)
```

🎯 **Decision factors:**
- **"Minimum operational overhead"** → managed L5
- **"Custom domain vocabulary"** → custom L5 or SageMaker
- **"Frontier-model quality (GPT-4-class)"** → Bedrock
- **"Proprietary model architecture"** → SageMaker BYO container
- **"On-premise deployment required"** → SageMaker BYO container (or Bedrock with PrivateLink)

---

## 📖 Case Study — JPMorgan COiN (Contract Intelligence)

**Situation.** JPMorgan's commercial-loan documents take ~360,000 attorney-hours per year to review for covenants, terms, and conditions. The team built **COiN** (Contract Intelligence) in 2017 — an internal NLP system to triage documents.

**Architecture (publicly described).**
- **Textract-equivalent OCR** to digitise scanned contracts
- **Custom NER** for legal entities (counterparties, covenants, exclusions)
- **Custom classifier** for document type and risk category
- **Rule-based post-processing** to enforce legal-domain constraints
- **A2I-style human-in-loop** for low-confidence outputs

**Outcome.** Review time fell from days to seconds; per-document cost dropped 80%. Importantly, attorneys *kept* their role — they shifted from rote extraction to high-judgment review.

**Lesson for the exam.** If you were rebuilding COiN on AWS today: **Textract** for OCR/extraction + **Comprehend Custom Entity Recognizer** for legal NER + **Comprehend Custom Classifier** for document type + **A2I** for human review. *Zero SageMaker model training.* The managed-service stack does it all.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Comprehend Custom Classifier is worse than a custom BlazingText model" | Often comparable or better, with much less work. |
| "Translate is always cheaper than calling a Bedrock model" | Translate is cheaper per character for bulk; Bedrock Claude can handle domain-specific translation with context. |
| "Polly's standard voices sound robotic" | Standard voices are basic; **Neural** and **Generative** voices are dramatically better. |
| "Kendra is the same as Bedrock Knowledge Bases" | Kendra is enterprise *search*; KBs are *RAG augmentation for LLMs*. Sometimes paired. |
| "Rekognition only works on photos" | Video pipelines exist; faces, labels, moderation per frame. |
| "Lex is the modern way to build chatbots" | For intent-based bots, yes. For open-ended chat in 2026, **Bedrock Agent** is usually better. |
| "Amazon Forecast is deprecated" | Still available; Bedrock and SageMaker DeepAR are stronger choices for new projects. |
| "Fraud Detector is just for transactions" | It has new-account, account-takeover, and transaction variants. |

---

## 🚨 Top Exam Traps (Module 6 Themes)

1. **"Classify customer-support tickets"** → Comprehend Custom Classifier (managed). SageMaker BlazingText is the custom alternative.
2. **"Extract forms and tables from PDFs"** → Textract AnalyzeDocument.
3. **"Real-time call-centre transcription with sentiment"** → Transcribe Call Analytics + Comprehend (or use Call Analytics's built-in sentiment).
4. **"Translate product descriptions, keep brand names"** → Translate + Custom Terminology.
5. **"Identify products in photos with ~50 images per class"** → Rekognition Custom Labels.
6. **"Internal enterprise search across SharePoint, Confluence, S3"** → Amazon Kendra.
7. **"Build a chatbot"** → Lex (intent-based) OR Bedrock Agent (generative).
8. **"Detect drugs and conditions in clinical notes"** → Comprehend Medical (HIPAA).
9. **"Forecast retail demand"** → Forecast (managed AutoML) OR SageMaker DeepAR.
10. **"Detect new-account fraud"** → Fraud Detector.
11. **"Recommend products to users"** → Personalize.
12. **"Route low-confidence model outputs to humans"** → A2I.
13. **"Build voice-enabled accessibility app"** → Polly (neural voice).

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Comprehend** | Managed NLP — pre-trained + custom |
| **Comprehend Medical** | Medical NER (HIPAA-eligible) |
| **Translate** | Managed translation |
| **Custom Terminology / ACT** | Translate customisation features |
| **Transcribe** | Managed STT (speech-to-text) |
| **Custom Vocabulary / Language Model** | Transcribe customisation |
| **Polly** | Managed TTS (text-to-speech) |
| **SSML** | Speech Synthesis Markup Language |
| **Lex** | Conversational bot service |
| **Intent / Utterance / Slot** | Lex building blocks |
| **Kendra** | Semantic enterprise search |
| **Rekognition** | Managed CV (images + video) |
| **Custom Labels** | Rekognition's no-code custom CNN training |
| **Textract** | OCR + structure-aware extraction |
| **A2I** | Augmented AI — human-in-the-loop review |
| **Personalize** | Managed recommender |
| **Forecast** | Managed time-series forecasting AutoML |
| **Fraud Detector** | Managed fraud-detection workflows |

---

## 💬 Discussion — Socratic Prompts

1. **The managed-service vendor-lock question.** All these services produce proprietary models. If a competitor cloud offered the same APIs for 30% less, how easily could you migrate? What is the right time-cost to model this lock-in?
2. **A2I and the "automation paradox".** A2I lets humans review low-confidence outputs. But over time, humans may become rusty at the underlying skill. How do you design the workflow so that human judgment *improves*?
3. **Comprehend Custom vs BlazingText vs Bedrock.** Same task (12-class ticket classifier). Three solutions: Comprehend Custom Classifier ($0.50/hour-model), BlazingText (~$0.20/hour, more code), Bedrock zero-shot Claude ($X per call). At what daily volume does each one win?
4. **Kendra vs Bedrock Knowledge Bases.** Both surface answers from your corpus. Kendra returns a ranked list of passages; Bedrock KB returns an LLM-synthesised answer. When prefer each, and when combine?
5. **Speech and accessibility.** Polly's neural voices are excellent, but generative voices (2024) can be eerily human. Are there ethical limits — e.g. cloning a deceased person's voice? Where should AWS draw lines?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 07 covers Bedrock and Amazon Q for generative AI; Module 08 covers evaluation; Module 09 covers deploying everything in production.
> - **Cross-course:** `07-AWS-AI-Practitioner` Module 04 (AWS GenAI Stack) covers many of these services at a lighter level. `08-Azure-AI-Engineer` has the Azure-equivalent managed services for comparison.
> - **Practice:** Practice Exam 1 has 5 questions, Practice Exam 2 has 6 questions, Final Mock has 9 questions on this material.
> - **Real world:** In your AWS Free Tier account, try Comprehend `DetectSentiment` and Rekognition `DetectLabels` on sample data — each costs ~$0.0001 per call.

---

## ✅ Module 6 Summary

You now know:
- 🗣️ **Comprehend** (sentiment, entities, key phrases, custom classifier/NER), **Comprehend Medical**
- 🌐 **Translate** (real-time + batch + Custom Terminology + ACT)
- 🎙️ **Transcribe** (batch + streaming + Call Analytics + Custom Vocabulary / Language Model)
- 🔊 **Polly** (standard / neural / generative voices + SSML)
- 🤖 **Lex** (intent + utterance + slot + Lambda fulfillment)
- 🔍 **Kendra** (semantic enterprise search across connectors)
- 👁️ **Rekognition** (labels, faces, moderation, PPE, **Custom Labels**, video)
- 📄 **Textract** (OCR + forms + tables + AnalyzeID / Expense / Lending)
- 🤝 **A2I** for human-in-the-loop review
- 🛒 **Personalize** for recommendations, **Forecast** for time series, **Fraud Detector** for fraud
- 🧭 The **managed vs custom decision tree** that wins half the exam's modelling questions
- 📖 The **JPMorgan COiN** reference architecture — pure managed-service stack

**Next:**
1. 🎥 [`Videos.md`](./Videos.md)
2. ✏️ [`Quiz.md`](./Quiz.md)
3. 📋 [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ [Module 7: Bedrock & GenAI Services](../Module-07-Bedrock-GenAI-Services/Reading.md)

---

## 📚 Further Sources

**AWS official**
- 📖 **Comprehend Developer Guide** — `docs.aws.amazon.com/comprehend/`
- 📖 **Rekognition Developer Guide** — `docs.aws.amazon.com/rekognition/`
- 📖 **Textract Developer Guide** — `docs.aws.amazon.com/textract/`
- 📖 **Amazon AI Services** consolidated landing — `aws.amazon.com/machine-learning/ai-services/`

**Industry**
- 📰 **JPMorgan COiN case studies** — Bloomberg / Wired write-ups (2017-2019)
- 📰 **Stripe / Capital One / Amazon Personalize case studies** — AWS ML Blog

---

## 🛠️ Appendix A — Comprehend Custom Classifier Quick Start

```python
import boto3

comprehend = boto3.client("comprehend", region_name="us-east-1")

# 1. Train a multi-class classifier
response = comprehend.create_document_classifier(
    DocumentClassifierName="support-ticket-classifier",
    DataAccessRoleArn=role_arn,
    InputDataConfig={
        "S3Uri": "s3://my-bucket/training.csv",   # CSV: label,text
        "DataFormat": "COMPREHEND_CSV",
        "LabelDelimiter": "|",                    # for multi-label
    },
    LanguageCode="en",
    Mode="MULTI_CLASS",                           # or "MULTI_LABEL"
    VolumeKmsKeyId=kms_key_arn,
)

# 2. Deploy as a real-time endpoint
endpoint_arn = comprehend.create_endpoint(
    EndpointName="support-ticket-endpoint",
    ModelArn=response["DocumentClassifierArn"],
    DesiredInferenceUnits=1,
)["EndpointArn"]

# 3. Classify a new ticket
result = comprehend.classify_document(
    EndpointArn=endpoint_arn,
    Text="My payment was double-charged this morning, please refund.",
)
print(result["Classes"])
# [{'Name': 'billing', 'Score': 0.91}, {'Name': 'shipping', 'Score': 0.05}, ...]
```

🎯 **Exam patterns.**
- `Mode="MULTI_CLASS"` (one label) vs `Mode="MULTI_LABEL"` (multiple labels)
- Minimum recommended training samples: ~10-50 per class
- Endpoints bill per **inference unit per hour**; scale by adjusting `DesiredInferenceUnits`

---

## 🛠️ Appendix B — Rekognition Custom Labels: Train From 10 Images

```python
import boto3
rekog = boto3.client("rekognition")

# 1. Create a project
project_arn = rekog.create_project(ProjectName="defect-detection")["ProjectArn"]

# 2. Create a project version with training and test data
version_arn = rekog.create_project_version(
    ProjectArn=project_arn,
    VersionName="v1",
    OutputConfig={"S3Bucket": "my-bucket", "S3KeyPrefix": "rekognition-output/"},
    TrainingData={"Assets": [{"GroundTruthManifest": {"S3Object": {
        "Bucket": "my-bucket", "Name": "training/manifest.json"}}}]},
    TestingData={"Assets": [{"GroundTruthManifest": {"S3Object": {
        "Bucket": "my-bucket", "Name": "testing/manifest.json"}}}],
        "AutoCreate": False},
)["ProjectVersionArn"]

# 3. Wait for training, then start the model
rekog.start_project_version(ProjectVersionArn=version_arn, MinInferenceUnits=1)

# 4. Detect on a new image
result = rekog.detect_custom_labels(
    Image={"S3Object": {"Bucket": "my-bucket", "Name": "new-photo.jpg"}},
    ProjectVersionArn=version_arn,
    MinConfidence=70,
)
print(result["CustomLabels"])
```

🎯 **Exam patterns.**
- ~10-50 labelled images per class are typically enough
- `MinInferenceUnits` controls hosting capacity (pay per unit-hour)
- Stop the project version when not in use to save cost

---

## 🛠️ Appendix C — Textract `AnalyzeDocument` for Forms + Tables

```python
import boto3
textract = boto3.client("textract")

# Synchronous (≤5 MB, ≤1 page; otherwise use the async StartDocumentAnalysis)
resp = textract.analyze_document(
    Document={"S3Object": {"Bucket": "my-bucket", "Name": "w2-form.pdf"}},
    FeatureTypes=["FORMS", "TABLES", "QUERIES"],
    QueriesConfig={
        "Queries": [
            {"Text": "What is the total wages?", "Alias": "wages"},
            {"Text": "What is the federal income tax withheld?", "Alias": "fed_tax"},
        ]
    },
)

# Extract key-value pairs
kv_blocks = [b for b in resp["Blocks"] if b["BlockType"] == "KEY_VALUE_SET"]
table_blocks = [b for b in resp["Blocks"] if b["BlockType"] == "TABLE"]
query_results = [b for b in resp["Blocks"] if b["BlockType"] == "QUERY_RESULT"]
```

🎯 **Exam patterns.**
- `FORMS` = key-value pairs
- `TABLES` = grid extraction
- `QUERIES` = natural-language Q&A on the doc (2023+ feature)
- For >5 MB docs or multi-page PDFs: use `StartDocumentAnalysis` (async, S3 callback)

---

## 🛠️ Appendix D — Choosing The Right Decision Tree (Cheat Card)

A simple sequential decision tree for picking among Module 6's services on the exam:

```
1) Is the input audio/speech?
   YES → Transcribe (STT) → maybe Comprehend on the transcript → maybe Polly back to audio
   NO → continue

2) Is the input an image?
   YES → Rekognition (labels/faces/moderation/PPE)
        + Custom Labels for company-specific objects
        + Textract for OCR + structure
   NO → continue

3) Is the input a document (PDF / scanned form)?
   YES → Textract (DetectText/AnalyzeDocument/AnalyzeExpense/AnalyzeID/AnalyzeLending/Queries)
   NO → continue

4) Is the input text needing translation?
   YES → Translate (+ Custom Terminology / ACT)
   NO → continue

5) Is the text in a vertical (medical/legal)?
   YES → Comprehend Medical (drugs, conditions, anatomy)
   NO → continue

6) Generic NLP on text?
   → Comprehend pre-trained APIs (sentiment, entities, key phrases, language, PII, toxicity, syntax)
   → Comprehend Custom Classifier / Custom Entity for domain tasks
   → Generative summarisation / Q&A → Bedrock (Module 7)

7) Conversational interface needed?
   - Predetermined intents → Lex
   - Generative open-ended chat → Bedrock Agent (Module 7)

8) Enterprise search needed?
   - Top-k passages → Kendra
   - LLM-synthesised answer → Bedrock Knowledge Base (Module 7)

9) Recommendation system?
   → Amazon Personalize

10) Forecasting?
    → Amazon Forecast (managed) OR SageMaker DeepAR (custom, Module 4)

11) Fraud detection?
    → Amazon Fraud Detector

12) Need human review of low-confidence model outputs?
    → Augmented AI (A2I) — Comprehend / Rekognition / Textract / custom workflows
```

🎯 **Use this on every Module-6 scenario question** — walk top-to-bottom; the first match is usually the right answer.
