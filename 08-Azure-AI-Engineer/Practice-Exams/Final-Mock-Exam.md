# 🧪 Final Mock Exam — Azure AI Engineer (AI-102, Real-Exam Conditions)

> **Conditions:** Set a **100-minute timer**. **55 questions**. Real-exam conditions: no notes, no Googling, no Slack. Stand up, breathe, then go.
> **Pass mark:** 39/55 (~70.9% — slightly above the real cut of 700/1000)
> Take this **the week before** your real exam.

> The real AI-102 will include drag-and-drop, hot area, and case-study items. This mock simulates that mix in plain text — read each case study **carefully**.

---

## 📝 Questions

### 1. Microsoft's current umbrella brand for pretrained AI APIs is:
A. Azure ML Services
B. Foundation APIs
C. Cognitive Services
D. Azure AI services

### 2. To call Azure AI services from Python with Entra ID auth, the credential class is:
A. `DefaultAzureCredential` (or `ManagedIdentityCredential`)
B. `AzureKeyCredential`
C. `SubscriptionKey`
D. `ApiKeyCredential`

### 3. The REST header for subscription-key authentication is:
A. `Authorization: Bearer ...`
B. `X-API-Key`
C. `Ocp-Apim-Subscription-Key`
D. `Azure-Key`

### 4. The multi-service Azure AI services resource kind is:
A. `CognitiveSearch`
B. `Multi-Service`
C. `OpenAI`
D. `AIServices`

### 5. Azure OpenAI requires:
A. Nothing extra
B. An access-request approval; provisioned as its own `OpenAI` resource kind
C. Custom Vision approval
D. Limited Access form

### 6. Microsoft's six Responsible AI principles include all EXCEPT:
A. Fairness
B. Reliability & Safety
C. Accountability
D. Sustainability

### 7. The four Content Safety harm categories are:
A. Drugs, Hate, Self-Harm, Violence
B. Bias, Toxicity, PII, Spam
C. Fraud, Hate, Malware, Phish
D. Hate, Sexual, Violence, Self-Harm

### 8. Content Safety severity values are:
A. 1–5
B. 1, 2, 3, 4
C. Low / Medium / High
D. 0, 2, 4, 6

### 9. Indirect prompt injection (e.g. malicious text inside a document the model is summarizing) is caught by:
A. Prompt Shields — document attack
B. PII Detection
C. Content moderation
D. Groundedness detection

### 10. Groundedness detection compares an LLM response against:
A. A list of banned words
B. Grounding sources you provide
C. Microsoft's training corpus
D. A vector database

### 11. The default Azure OpenAI content filter severity threshold for new deployments is:
A. Off
B. Low
C. Medium
D. High

### 12. Image Analysis 4.0 with multiple visual features should be invoked:
A. One call with `visual_features=[…]`
B. One feature per call
C. Only via REST
D. Through Document Intelligence

### 13. Which line completes this Python snippet?
```python
from azure.ai.vision.imageanalysis.models import VisualFeatures
result = client.analyze(
    image_url=url,
    visual_features=______
)
```
A. `{"features":"read"}`
B. `"read,caption,tags"`
C. `VisualFeatures.ALL`
D. `[VisualFeatures.READ, VisualFeatures.CAPTION, VisualFeatures.TAGS]`

### 14. The Face attribute that is RETIRED (don't pick this) is:
A. Mask
B. Head Pose
C. Emotion
D. Glasses

### 15. Face identification (1-to-N against a person group) requires:
A. Nothing special
B. Custom Vision
C. Premium subscription
D. Limited Access approval AND a trained person group

### 16. To run a Custom Vision model offline on a Raspberry Pi, you must:
A. Pick the General domain
B. Pick a Compact domain and export the model
C. Upgrade to S2
D. Use Azure ML

### 17. mAP is the primary metric for:
A. Sentiment Analysis
B. Speech recognition
C. PII detection
D. Custom Vision object detection

### 18. LUIS authoring is retired. The replacement is:
A. Question Answering
B. CLU (Conversational Language Understanding)
C. Bot Service
D. Azure OpenAI

### 19. QnA Maker is replaced by:
A. CLU
B. Bot Framework Composer
C. Custom Question Answering
D. Question Answering in Azure AI Language

### 20. To handle FAQs AND structured intents in one bot, the recommended pattern is:
A. CLU only
B. Question Answering only
C. Orchestration workflow routing to CLU + Question Answering
D. Custom code

### 21. To redact SSNs and emails in input text:
A. `recognize_pii_entities` (returns `.redacted_text`)
B. `extract_key_phrases`
C. `analyze_sentiment`
D. `detect_language`

### 22. Translator requires which extra header for a global resource?
A. `X-Translator-Region`
B. `Ocp-Apim-Subscription-Region`
C. `Azure-Region`
D. None

### 23. The recommended approach to translate a 200-page DOCX preserving formatting AND using your legal terminology:
A. Document Translation + Custom Translator (`category` ID)
B. Use only text-translate API
C. Speech translation
D. Manual translation

### 24. Neural voice name format:
A. `voice:jenny@en`
B. `Jenny-en-US`
C. `en-US-JennyNeural`
D. `MS-Jenny`

### 25. SSML lets you control all EXCEPT:
A. Speaking rate
B. Pitch
C. Sentiment polarity
D. Pauses (breaks)

### 26. Custom Neural Voice requires:
A. Limited Access approval AND voice talent consent recording
B. Just S0 tier
C. Custom Vision approval
D. Azure ML

### 27. To transcribe 10 hours of recorded calls cost-effectively, use:
A. Real-time STT
B. Direct Line Speech
C. Whisper limited to 25 MB per file
D. Batch transcription via REST + Azure Storage

### 28. Form Recognizer has been renamed to:
A. Document Intelligence
B. Azure AI Forms
C. Smart Documents
D. Azure AI Reader

### 29. You have 1000 invoices from one vendor, identical layout. Choose:
A. Read
B. Custom Template
C. Layout
D. Custom Neural

### 30. You have invoices from 40 vendors with varying layouts but common fields. Choose:
A. Either B or C is reasonable (and the exam may accept C if "common B2B fields" applies)
B. Custom Neural
C. Prebuilt-Invoice — try this first; varying layouts handled, common B2B fields covered
D. Custom Template

> Tip: For this question, pick **C** if Prebuilt-Invoice covers your fields; pick **B** if it doesn't.

### 31. To route incoming documents to the right model based on document type, use:
A. Custom Composed
B. Custom Classifier
C. Layout
D. Read

### 32. The five Azure AI Search concepts (DISKS):
A. Database, Indexer, Storage, Key, Skill
B. Data source, Indexer, Skillset, Knowledge store, Search index
C. Domain, Index, Search, Key, Schema
D. Document, Index, Search, Skill, Set

### 33. An indexer's role is to:
A. Receive pushed documents
B. Train models
C. Pull data from a data source on a schedule and feed it (optionally through a skillset) into an index
D. Run queries

### 34. To make a field returnable in search results, set:
A. `searchable: true`
B. `analyzer: en.microsoft`
C. `retrievable: true`
D. `key: true`

### 35. Default vector algorithm + distance in Azure AI Search:
A. Exact KNN + Euclidean
B. FAISS + Manhattan
C. HNSW + Cosine
D. Annoy + Hamming

### 36. Semantic ranker tier requirement:
A. Standard (S1) or higher
B. Basic
C. Free
D. Premium only

### 37. The "gold standard" RAG retrieval pattern:
A. Pure keyword
B. Pure vector
C. Hybrid + semantic re-ranking
D. SQL fulltext

### 38. text-embedding-3-large outputs vectors of:
A. 768
B. 1024
C. 1536
D. 3072

### 39. Azure OpenAI deployment names:
A. Equal the base model name
B. Are auto-generated and unchangeable
C. Match the resource ID
D. Are chosen by you and used as the `model` parameter in API calls

### 40. For reserved capacity and predictable latency on Azure OpenAI:
A. PTU (Provisioned Throughput Units)
B. Global Standard
C. Standard
D. Global Batch

### 41. For cheapest async batch completions:
A. Global Batch
B. Standard
C. PTU
D. Premium

### 42. RAG vs Fine-Tuning — fine-tune is BEST for:
A. Adding rapidly changing knowledge
B. Replacing RAG entirely
C. Style / tone / format consistency
D. Reducing token costs automatically

### 43. To force responses to stay within retrieved documents in On Your Data:
A. `temperature: 0`
B. `restricted: yes`
C. `in_scope: true`
D. `mode: strict`

### 44. Fine-tuning data file format is:
A. CSV
B. XML
C. JSONL with `{"messages":[...]}` per line
D. Parquet

### 45. Azure AI Studio has been renamed to:
A. Azure AI Workshop
B. Azure AI Foundry
C. Azure GenAI Hub
D. Azure ML Studio

### 46. Foundry's resource hierarchy:
A. Hub (shared infra) → Project (app workspace) → Connections, Deployments, Flows, Evals
B. Project → Hub → Subscription
C. Workspace → Cluster → Project
D. Subscription → Region → Project

### 47. Foundry Agent Service built-in tools include:
A. Speech-to-text only
B. File Search, Code Interpreter, Function Calling, Browser (preview)
C. Custom Vision training
D. Cosmos DB queries

### 48. Models-as-a-Service (MaaS) deployments are:
A. Managed VMs you scale
B. Serverless, pay-per-token
C. Free
D. Azure OpenAI only

### 49. Semantic Kernel is:
A. An open-source orchestration SDK (C#/Python/Java) for LLM + plugins
B. A visual designer
C. A new Azure AI service
D. The replacement for Prompt Flow

### 50. Foundry **evaluation** for a RAG app would score on:
A. Loss + accuracy
B. Groundedness, Relevance, Coherence, Fluency, Similarity, Safety
C. Speed only
D. Cost only

### 51. **Case Study A (4 parts).** Contoso Health is migrating 50,000 insurance forms into a self-service portal. They want:
- (a) extract patient name, DOB, policy # from each form
- (b) index docs for natural-language search with citations
- (c) translate user queries from Spanish to English
- (d) ensure no PII leaks in responses

Part 51A — Best for field extraction from the forms (consistent layout):
A. Read API
B. Document Intelligence Custom Template
C. Custom Vision
D. Image Analysis 4.0

Part 51B — Best search architecture for natural-language Q&A with citations:
A. SQL fulltext only
B. Azure AI Search (hybrid + semantic) + Azure OpenAI On Your Data
C. Cosmos DB only
D. Translator + Question Answering

Part 51C — Translate user queries:
A. Custom Vision
B. Azure AI Translator (text translation)
C. Speech Translation
D. Document Translation

Part 51D — Prevent PII leakage:
A. Disable Content Safety
B. Azure AI Language PII detection + groundedness check via Content Safety + custom content filter configuration
C. Increase temperature
D. Hardcode block list only

### 52. **Case Study B (3 parts).** Maya is shipping a voice-driven Teams bot that answers from internal SharePoint pages.

Part 52A — The voice channel to use:
A. Direct Line
B. Direct Line Speech
C. Web Chat
D. Telegram

Part 52B — To make the same bot work in Teams AND Web Chat without rewriting:
A. Build two bots
B. Connect both channels in Azure AI Bot Service
C. Direct Line only
D. Skip Bot Service

Part 52C — Index SharePoint pages so the bot can ground answers:
A. Azure SQL fulltext
B. Azure AI Search indexer with SharePoint Online data source (preview) → skillset (embedding) → vector + semantic index
C. Cosmos DB query
D. Custom Vision

### 53. A team gets HTTP 429 from Azure OpenAI. First step:
A. Delete the deployment
B. Switch to public OpenAI.com
C. Check TPM/RPM quota for that deployment; add exponential backoff; request quota increase or move to PTU
D. Lower temperature

### 54. To call Azure OpenAI from code in Azure App Service without storing secrets:
A. Hardcoded subscription key
B. Managed identity + Cognitive Services User role on the Azure OpenAI resource
C. Service principal with secret in source
D. Anonymous

### 55. The RAI workflow stages, in order, are:
A. Detect → Filter → Apply → Audit
B. Measure → Mitigate → Identify → Operate
C. Plan → Build → Test → Release
D. Identify → Measure → Mitigate → Operate

---

## 🎯 Answer Key (No Cheating!)

```
1.  D    12. A    23. A    34. C    45. B
2.  A    13. D    24. C    35. C    46. A
3.  C    14. C    25. C    36. A    47. B
4.  D    15. D    26. A    37. C    48. B
5.  B    16. B    27. D    38. D    49. A
6.  D    17. D    28. A    39. D    50. B
7.  D    18. B    29. B    40. A    51A. B
8.  D    19. D    30. A    41. A    51B. B
9.  A    20. C    31. B    42. C    51C. B
10. B    21. A    32. B    43. C    51D. B
11. C    22. B    33. C    44. C    52A. B
                                       52B. B
                                       52C. B
                                       53. C
                                       54. B
                                       55. D
```

---

## 📊 Scoring (out of 55 base + 7 case-study sub-questions = 62 graded items)

| Score | Verdict |
|---|---|
| 56–62 | 🏆 Book the exam this week |
| 49–55 | ✅ Solid — review wrong answers, take exam in 1–2 weeks |
| 39–48 | ⚠️ Pass mark but not comfortable — re-take with another set in 1 week |
| <39 | 🔁 Re-study weak modules; pivot to specific Quiz.md / Cheat-Sheet review |

(Note: the real AI-102 returns a 700/1000 scaled score. ~70% raw is the practical target.)

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify the module (see Question → Module map below)
2. Re-read that module's Reading.md AND its Cheat-Sheet.md
3. Add an Anki flashcard for the concept
4. Recreate the failing scenario in code (or pseudo-code) — muscle memory beats memorization

### Question → Module Map

| Q | Module |
|---|---|
| 1–5 | M1 (AI Services Overview) |
| 6–11 | M2 (Responsible AI + Content Safety) |
| 12–17 | M3 (Computer Vision) |
| 18–27 | M4 (NLP) |
| 28–38 | M5 (Doc Intelligence + AI Search) |
| 39–44 | M7 (Azure OpenAI) |
| 45–50 | M8 (Build GenAI Apps) |
| 51 | Case spans M2, M4, M5, M7 |
| 52 | Case spans M5, M6 |
| 53–55 | M1/M2/M7 (cross-cutting) |

---

## 🧠 24 Hours Before The Real Exam

- ✅ Re-read every Cheat-Sheet.md (8 modules × ~2 min)
- ✅ Microsoft Learn's free AI-102 practice assessment — take it twice
- ✅ Review the official AI-102 study guide once more
- ✅ Sleep 8 hours
- ✅ For online proctored — test webcam + room scan the night before
- ✅ For in-center — print your confirmation, bring 2 IDs

## 🏆 During The Exam

- Read each question **twice** (case studies — three times)
- Eliminate obviously wrong choices first
- For case studies, **read the scenario once, then answer all parts before moving on**
- Mark and skip if stuck — return at the end
- Trust your gut; don't change answers without a concrete reason

---

➡️ Good luck! When you pass: come back and renew this cert annually (free via Microsoft Learn).
