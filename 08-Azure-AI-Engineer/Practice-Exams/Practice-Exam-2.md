# 🧪 Practice Exam 2 — Azure AI Engineer (AI-102 Style)

> **Conditions:** Set an 80-minute timer. 45 questions. Treat it like the real thing — no notes, no Googling.
> **Pass mark:** 32/45 (~70%)
> Take this AFTER finishing all 8 modules.

---

## 📝 Questions

### 1. Form Recognizer's current name is:
A. Azure AI Forms
B. Azure AI Reader
C. Azure AI Document Intelligence
D. Smart Parser

### 2. You have 200 invoice PDFs from one vendor with a consistent layout. Best Document Intelligence model:
A. Read
B. Layout
C. Custom Template
D. Custom Neural

### 3. You have 200 invoices from 30 vendors with widely varying layouts but common fields. Best choice:
A. Custom Neural
B. Custom Template
C. Layout only
D. Read

### 4. To categorize an incoming PDF as "Invoice" / "Receipt" / "Statement" before extraction:
A. Prebuilt-Invoice
B. Custom Composed
C. Layout
D. Custom Classifier

### 5. Memorize: the five concepts of Azure AI Search are:
A. Index, Indexer, Skillset, Knowledge Store, Data Source
B. Cluster, Node, Shard, Replica, Token
C. Account, Workspace, Project, Endpoint, Key
D. Document, Query, Filter, Facet, Score

### 6. An Azure AI Search indexer:
A. Receives pushed documents via REST
B. Is a vector database
C. Builds vector embeddings only
D. Pulls data from a data source on a schedule

### 7. Which is NOT a built-in skill category in a skillset?
A. Cognitive Vision (OCR, image analysis)
B. Storage Backup
C. Utility (split, merge, shaper)
D. Cognitive Language (entity, key phrases, PII)

### 8. To make a search field returnable in results, you set:
A. `searchable: true`
B. `key: true`
C. `retrievable: true`
D. `analyzer: en.microsoft`

### 9. Default vector search algorithm in Azure AI Search:
A. Exact KNN
B. FAISS
C. HNSW
D. ANN-Lite

### 10. Default distance metric for vector search:
A. Euclidean
B. Hamming
C. Manhattan
D. Cosine

### 11. text-embedding-3-large outputs vectors of:
A. 768 dims
B. 1024 dims
C. 1536 dims
D. 3072 dims

### 12. Semantic ranker in Azure AI Search requires:
A. Free tier
B. Standard (S1) or higher
C. Basic tier
D. Premium only

### 13. Hybrid search combines keyword + vector via:
A. Reciprocal Rank Fusion (RRF)
B. SQL joins
C. Manual averaging
D. K-means

### 14. Azure AI Bot Service primarily provides:
A. Hosting + channel connectivity
B. Bot logic
C. NLP
D. Vector storage

### 15. The voice-enabled channel that combines Speech SDK with Bot Service is:
A. Direct Line Speech
B. Direct Line
C. Web Chat
D. SignalR

### 16. To handle FAQ-style answers AND structured commands in one bot, the recommended Azure pattern is:
A. CLU only
B. Question Answering only
C. Hardcoded if/else
D. Orchestration workflow over CLU + Question Answering

### 17. Production state for a Bot Framework bot should be stored in:
A. MemoryStorage
B. Custom in-memory cache
C. Environment variables
D. CosmosDbPartitionedStorage or BlobStorage

### 18. Which is TRUE about LUIS?
A. Recommended for new bots
B. Still on the AI-102 exam as primary
C. Replaced by Bot Service
D. Authoring is retired — use CLU instead

### 19. Azure OpenAI is provisioned as kind:
A. AIServices
B. OpenAI
C. CognitiveServices
D. AzureML

### 20. When calling chat completions, the `model` parameter must be:
A. The base model name (e.g. `gpt-4o`)
B. Your deployment name
C. The API version
D. The region

### 21. Which Python class is for Azure OpenAI from the official OpenAI SDK?
A. `OpenAIClient`
B. `AzureOpenAI`
C. `AzureGPT`
D. `LanguageClient`

### 22. For predictable latency + reserved capacity on Azure OpenAI:
A. Standard
B. Global Standard
C. PTU (Provisioned Throughput Units)
D. Global Batch

### 23. For cheapest async processing of millions of completions:
A. Standard
B. PTU
C. Global Batch
D. Premium

### 24. Default Azure OpenAI content filter threshold is:
A. Off
B. Low
C. High
D. Medium

### 25. "On Your Data" with `in_scope: true` causes the model to:
A. Use the entire internet
B. Refuse to answer outside retrieved sources
C. Ignore content filters
D. Bypass auth

### 26. Fine-tuning is BEST for:
A. Adding rapidly-changing knowledge
B. Replacing RAG
C. Style / tone / output format
D. Reducing token cost

### 27. To update company knowledge in a chatbot daily, you should:
A. Fine-tune nightly
B. Use RAG over an index that you refresh
C. Retrain the base model
D. Hardcode answers

### 28. Fine-tuning data file format is:
A. JSONL with `{"messages":[...]}` per line
B. XML
C. CSV
D. Parquet

### 29. Foundry's resource hierarchy is:
A. Project → Hub → Subscription
B. Subscription → Workspace → Cluster
C. Hub → Project (with Connections, Deployments, Flows, Evals)
D. Account → Region → Project

### 30. A Foundry Connection is:
A. A reusable RBAC-secured handle to an external service
B. A VNet peering
C. A user account
D. A region setting

### 31. Models-as-a-Service deployments are:
A. Managed VMs you scale
B. Azure OpenAI only
C. Free
D. Serverless, pay-per-token

### 32. Prompt flow variants enable:
A. Translation
B. Vector search
C. Content filtering
D. A/B comparison of prompt versions

### 33. Which is NOT a built-in Foundry evaluation metric?
A. Groundedness
B. Relevance
C. Loss
D. Fluency

### 34. Foundry Agent Service tools include:
A. File Search, Code Interpreter, Function Calling
B. Speech-only
C. Custom Vision training
D. Cosmos queries

### 35. Semantic Kernel is:
A. A visual designer
B. The new Bot Framework
C. An open-source orchestration SDK (C#/Python/Java)
D. A vector database

### 36. The "gold standard" RAG retrieval pattern in Azure AI Search is:
A. Hybrid (keyword + vector) + semantic re-ranking
B. Pure vector
C. Pure keyword
D. SQL fulltext

### 37. Microsoft's six Responsible AI principles are:
A. Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, Accountability
B. Speed, Quality, Trust, Honesty, Cost, Compliance
C. Plan, Build, Test, Deploy, Monitor, Improve
D. Fairness, Speed, Honesty, Transparency, Quality, Cost

### 38. Severity values in Azure AI Content Safety:
A. 1–10
B. 0, 2, 4, 6
C. Low/Medium/High
D. 1, 2, 3, 4

### 39. Prompt Shields catches:
A. Direct (user) + indirect (document) prompt injection attacks
B. Network attacks
C. PII
D. Profanity

### 40. The "Measure" step of the RAI workflow:
A. Is optional
B. Quantifies harm rates with test datasets before applying mitigations
C. Is the same as monitoring
D. Is the last step

### 41. **Case study (3 parts).** Maya's startup will launch a multilingual customer-support agent that uses voice, answers from a PDF library, and routes structured commands.

Part A — For voice in/out across web + Teams, choose:
A. Custom Vision
B. Bot Framework bot with Direct Line Speech channel (uses Speech SDK)
C. Azure OpenAI Whisper only
D. CLU only

Part B — For RAG over PDFs with citations:
A. Custom Vision
B. Azure AI Search hybrid+semantic + Azure OpenAI On Your Data
C. Document Intelligence alone
D. CLU

Part C — For multilingual sentiment + PII redaction on incoming chat:
A. Speech + Translator only
B. Azure AI Language (detect_language, sentiment, PII) + Translator
C. CLU
D. Question Answering

### 42. To call Azure AI Language from code running in Azure App Service, the recommended auth is:
A. Managed identity + Cognitive Services User role
B. Hardcoded subscription key in `appsettings.json`
C. Anonymous
D. Service principal with client secret in source

### 43. Speech-to-text 5 hours of recorded audio cost-effectively:
A. Real-time streaming
B. Custom Vision
C. Batch transcription (REST + Azure Storage)
D. Direct Line Speech

### 44. To run a Custom Vision model on a Raspberry Pi without internet:
A. Use General domain
B. Use a Compact domain and export ONNX / TF / CoreML / Docker
C. Upgrade to S1
D. Use Azure ML

### 45. Which is TRUE about Azure OpenAI vs OpenAI.com?
A. They are unrelated services
B. OpenAI.com is cheaper in every case
C. Azure has different models
D. Azure adds RBAC, private networking, region pinning, content filters, residency

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    10. D    19. B    28. A    37. A
2.  C    11. D    20. B    29. C    38. B
3.  A    12. B    21. B    30. A    39. A
4.  D    13. A    22. C    31. D    40. B
5.  A    14. A    23. C    32. D    41A. B
6.  D    15. A    24. D    33. C    41B. B
7.  B    16. D    25. B    34. A    41C. B
8.  C    17. D    26. C    35. C    42. A
9.  C    18. D    27. B    36. A    43. C
                                       44. B
                                       45. D
```

---

## Detailed answer rationales

**Q1. Answer: C (Azure AI Document Intelligence)**

**Why C is correct.** Form Recognizer was rebranded Document Intelligence in 2023; the SDK package is now `azure-ai-documentintelligence`.

**Why the other options are wrong.**
- A (Azure AI Forms): Not a real product name.
- B (Azure AI Reader): Made-up.
- D (Smart Parser): Made-up.

**Exam-takeaway.** Document Intelligence is one of the most-tested renames.

---

**Q2. Answer: C (Custom Template)**

**Why C is correct.** Consistent layout from one vendor → **Custom Template** (one set of fields, fixed positions).

**Why the other options are wrong.**
- A (Read): Returns only raw text, no field structure.
- B (Layout): Tables + paragraphs but no named fields.
- D (Custom Neural): For varying layouts, not consistent.

**Exam-takeaway.** Template = fixed. Neural = varying.

---

**Q3. Answer: A (Custom Neural)**

**Why A is correct.** Varying layouts, common fields → **Custom Neural**.

**Why the other options are wrong.**
- B (Custom Template): Fails on layout variation.
- C (Layout only): No named fields.
- D (Read): No structured extraction.

**Exam-takeaway.** Pair with Q2; the two are intentionally tested back-to-back.

---

**Q4. Answer: D (Custom Classifier)**

**Why D is correct.** Custom Classifier categorizes docs before routing to the right extraction model.

**Why the other options are wrong.**
- A (Prebuilt-Invoice): Only invoices.
- B (Custom Composed): Combines models AFTER classification, but classification itself is the Classifier.
- C (Layout): Returns structure, doesn't categorize.

**Exam-takeaway.** Classify first, then extract.

---

**Q5. Answer: A (Index, Indexer, Skillset, Knowledge Store, Data Source)**

**Why A is correct.** The DISKS mnemonic — these five concepts are the spine of Azure AI Search.

**Why the other options are wrong.**
- B, C, D: Other systems' terminology (Elasticsearch, Solr, S3) — not Azure AI Search.

**Exam-takeaway.** DISKS is a guaranteed exam question.

---

**Q6. Answer: D (Pulls data from a data source on a schedule)**

**Why D is correct.** Indexer is a pull-based crawler.

**Why the other options are wrong.**
- A: Push API exists but the indexer is the pull mechanism.
- B / C: Indexer ≠ vector DB or embedder.

**Exam-takeaway.** Indexer = pull; Index = the store; Skillset = enrichment pipeline.

---

**Q7. Answer: B (Storage Backup)**

**Why B is correct.** Not a real skill category.

**Why the other options are wrong.**
- A, C, D: All real skill categories (Vision, Utility, Language).

**Exam-takeaway.** Real categories include Vision, Language, Utility, Custom, GenAI.

---

**Q8. Answer: C (`retrievable: true`)**

**Why C is correct.** Makes the field return in search results.

**Why the other options are wrong.**
- A (`searchable`): Makes it searchable, not necessarily returnable.
- B (`key`): Uniqueness, one per index.
- D (`analyzer`): Tokenization.

**Exam-takeaway.** Each field attribute has one purpose; memorize the table.

---

**Q9. Answer: C (HNSW)**

**Why C is correct.** Default vector algorithm in Azure AI Search.

**Why the other options are wrong.**
- A (Exact KNN): Available but slower.
- B (FAISS): Different vendor's library.
- D (ANN-Lite): Made-up.

**Exam-takeaway.** HNSW + cosine = defaults.

---

**Q10. Answer: D (Cosine)**

**Why D is correct.** Default distance for vector search.

**Why the other options are wrong.**
- A, B, C: All real metrics but not the default.

**Exam-takeaway.** Pair with Q9.

---

**Q11. Answer: D (3072)**

**Why D is correct.** `text-embedding-3-large` outputs 3072-dim vectors.

**Why the other options are wrong.**
- A (768): BERT-family typical.
- B (1024): Some older embedding models.
- C (1536): `text-embedding-3-small` and `text-embedding-ada-002`.

**Exam-takeaway.** The three you must memorize: ada-002 = 1536, 3-small = 1536, 3-large = 3072.

---

**Q12. Answer: B (Standard S1 or higher)**

**Why B is correct.** Semantic Ranker requires Standard SKU.

**Why the other options are wrong.**
- A, C: Free and Basic don't include semantic.
- D: Premium isn't the threshold (Standard is).

**Exam-takeaway.** Semantic = paid feature.

---

**Q13. Answer: A (Reciprocal Rank Fusion / RRF)**

**Why A is correct.** Hybrid combines keyword + vector via RRF.

**Why the other options are wrong.**
- B / C / D: Not the documented Azure AI Search hybrid fusion algorithm.

**Exam-takeaway.** Hybrid = RRF.

---

**Q14. Answer: A (Hosting + channel connectivity)**

**Why A is correct.** Bot Service hosts and connects channels; the *logic* is in the Bot Framework SDK code.

**Why the other options are wrong.**
- B (Bot logic): That's your code.
- C (NLP): That's Language service.
- D (Vector storage): That's AI Search.

**Exam-takeaway.** Bot Service = hosting; SDK = code; Language services = NLP.

---

**Q15. Answer: A (Direct Line Speech)**

**Why A is correct.** Combines Bot Service + Speech SDK for voice in/out, keyword activation, echo cancellation.

**Why the other options are wrong.**
- B (Direct Line): Text-based custom client.
- C (Web Chat): Iframe text chat.
- D (SignalR): Real-time messaging library, not a Bot Service channel.

**Exam-takeaway.** Voice = Direct Line Speech.

---

**Q16. Answer: D (Orchestration workflow over CLU + Question Answering)**

**Why D is correct.** Microsoft's canonical mixed-bot pattern.

**Why the other options are wrong.**
- A / B: Single-tool answers miss the other use case.
- C (Hardcoded if/else): Brittle, not the recommended Azure pattern.

**Exam-takeaway.** FAQ + commands = Orchestration.

---

**Q17. Answer: D (CosmosDbPartitionedStorage or BlobStorage)**

**Why D is correct.** Both are durable, multi-instance-safe.

**Why the other options are wrong.**
- A (MemoryStorage): Dev only — lost on restart, not multi-instance safe.
- B / C: Not standard Bot Framework patterns.

**Exam-takeaway.** Cosmos or Blob in production.

---

**Q18. Answer: D (Retired — use CLU instead)**

**Why D is correct.** LUIS authoring retired in 2023; CLU is the successor.

**Why the other options are wrong.**
- A / B: LUIS authoring is gone.
- C: Replaced by CLU, not Bot Service.

**Exam-takeaway.** LUIS → CLU.

---

**Q19. Answer: B (OpenAI)**

**Why B is correct.** Azure OpenAI is provisioned as `kind=OpenAI`, separate from the multi-service `AIServices`.

**Why the other options are wrong.**
- A (AIServices): Excludes Azure OpenAI.
- C (CognitiveServices): A different kind.
- D (AzureML): Azure Machine Learning, different service.

**Exam-takeaway.** Azure OpenAI is always its own resource kind.

---

**Q20. Answer: B (Your deployment name)**

**Why B is correct.** The chat completions API targets the deployment, not the base model.

**Why the other options are wrong.**
- A (Base model name): Wrong — deployments are named separately.
- C (API version): Different parameter.
- D (Region): Set via endpoint URL.

**Exam-takeaway.** Deployment name in `model=`.

---

**Q21. Answer: B (`AzureOpenAI`)**

**Why B is correct.** From the official `openai` Python SDK.

**Why the other options are wrong.**
- A (OpenAIClient): Not the class name.
- C (AzureGPT): Made-up.
- D (LanguageClient): Different service.

**Exam-takeaway.** `from openai import AzureOpenAI`.

---

**Q22. Answer: C (PTU)**

**Why C is correct.** Provisioned Throughput Units reserve capacity for predictable latency.

**Why the other options are wrong.**
- A (Standard): PAYG; latency varies.
- B (Global Standard): No regional pin; latency still variable.
- D (Global Batch): Async, not real-time latency-bound.

**Exam-takeaway.** PTU = reserved.

---

**Q23. Answer: C (Global Batch)**

**Why C is correct.** Async, 24-hr SLA, ~50% cheaper than Standard.

**Why the other options are wrong.**
- A / B: Not the cheapest async option.
- D (Premium): Not a real Azure OpenAI deployment SKU.

**Exam-takeaway.** Global Batch = cheapest async.

---

**Q24. Answer: D (Medium)**

**Why D is correct.** Default block threshold for new Azure OpenAI deployments.

**Why the other options are wrong.**
- A / B / C: Other thresholds, but Medium is the default.

**Exam-takeaway.** Default = Medium.

---

**Q25. Answer: B (Refuse to answer outside retrieved sources)**

**Why B is correct.** `in_scope: true` enforces grounded-only answers.

**Why the other options are wrong.**
- A / C / D: Not behaviors of `in_scope`.

**Exam-takeaway.** `in_scope` = stay grounded.

---

**Q26. Answer: C (Style / tone / output format)**

**Why C is correct.** Fine-tuning best suits style, tone, output-format consistency — not adding facts.

**Why the other options are wrong.**
- A: Knowledge → RAG.
- B: RAG and fine-tune are complementary.
- D: Fine-tuning doesn't reduce token cost directly.

**Exam-takeaway.** Knowledge = RAG; style = fine-tune.

---

**Q27. Answer: B (RAG over a refreshable index)**

**Why B is correct.** Re-indexing daily keeps knowledge current without retraining.

**Why the other options are wrong.**
- A: Nightly fine-tuning is slow + costly.
- C: Retraining base models is not customer-side work.
- D: Hardcoding doesn't scale.

**Exam-takeaway.** Knowledge that changes = RAG with indexer refresh.

---

**Q28. Answer: A (JSONL with `{"messages":[...]}` per line)**

**Why A is correct.** Each line is a complete chat example.

**Why the other options are wrong.**
- B / C / D: Other tabular formats not used for fine-tuning.

**Exam-takeaway.** Memorize JSONL.

---

**Q29. Answer: C (Hub → Project)**

**Why C is correct.** Foundry's hierarchy: Hub (shared infra, connections, security) → Project (app workspace with deployments, flows, evaluations).

**Why the other options are wrong.**
- A / B / D: Wrong ordering or wrong terminology.

**Exam-takeaway.** Hub on top, Project under it.

---

**Q30. Answer: A (Reusable, RBAC-secured handle to an external service)**

**Why A is correct.** Connections avoid hardcoding endpoints + keys.

**Why the other options are wrong.**
- B / C / D: Not what a Foundry Connection is.

**Exam-takeaway.** Connections = pre-auth handles.

---

**Q31. Answer: D (Serverless, pay-per-token)**

**Why D is correct.** MaaS = no infra to manage.

**Why the other options are wrong.**
- A: MaaP (Platform) is managed compute.
- B: Both Microsoft and partner models offered as MaaS.
- C: Not free.

**Exam-takeaway.** MaaS = serverless; MaaP = managed compute.

---

**Q32. Answer: D (A/B comparison of prompt versions)**

**Why D is correct.** Variants enable A/B testing prompts.

**Why the other options are wrong.**
- A / B / C: Unrelated features.

**Exam-takeaway.** Variants = A/B for prompts.

---

**Q33. Answer: C (Loss)**

**Why C is correct.** Loss is a *training* metric, not a Foundry built-in eval. Foundry built-ins: Groundedness, Relevance, Coherence, Fluency, Similarity, Safety.

**Why the other options are wrong.**
- A / B / D: All real Foundry eval metrics.

**Exam-takeaway.** Six built-ins + Safety + custom.

---

**Q34. Answer: A (File Search, Code Interpreter, Function Calling)**

**Why A is correct.** Plus Browser (preview).

**Why the other options are wrong.**
- B / C / D: Other Azure features, not Agent Service tools.

**Exam-takeaway.** File_search + code_interpreter + function calling are the three core tools.

---

**Q35. Answer: C (Open-source orchestration SDK)**

**Why C is correct.** Semantic Kernel is Microsoft's open-source LLM orchestration SDK (C# / Python / Java).

**Why the other options are wrong.**
- A: Visual designer is Prompt Flow.
- B: Bot Framework is the bot SDK.
- D: SK is not a vector DB.

**Exam-takeaway.** SK = code; Prompt Flow = visual.

---

**Q36. Answer: A (Hybrid + semantic re-ranking)**

**Why A is correct.** Microsoft's documented RAG retrieval gold standard.

**Why the other options are wrong.**
- B / C: Pure vector or pure keyword is weaker for production RAG.
- D: SQL fulltext isn't Azure AI Search.

**Exam-takeaway.** Hybrid + semantic.

---

**Q37. Answer: A (Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, Accountability)**

**Why A is correct.** The exact six RAI principles per Microsoft Responsible AI Standard v2 (2022).

**Why the other options are wrong.**
- B / C / D: Made-up or different framework lists.

**Exam-takeaway.** Mnemonic: F-R-P-I-T-A.

---

**Q38. Answer: B (0, 2, 4, 6)**

**Why B is correct.** Discrete severity levels in Content Safety.

**Why the other options are wrong.**
- A (1-10): Wrong scale.
- C (Low/Medium/High): Threshold labels, not raw severities.
- D (1-4): Wrong.

**Exam-takeaway.** No odd severities.

---

**Q39. Answer: A (Direct + indirect prompt injection attacks)**

**Why A is correct.** Prompt Shields catches user-attack jailbreaks AND document-attack indirect injection.

**Why the other options are wrong.**
- B (Network attacks): Not Prompt Shields' role.
- C (PII): That's PII Detection.
- D (Profanity): That's content moderation.

**Exam-takeaway.** Two flavors of Prompt Shield.

---

**Q40. Answer: B (Quantifies harm rates with test datasets before applying mitigations)**

**Why B is correct.** Measure is step 2 of Identify → Measure → Mitigate → Operate.

**Why the other options are wrong.**
- A: Not optional.
- C: Measure precedes monitoring.
- D: Not the last step.

**Exam-takeaway.** Measure before mitigating.

---

**Q41A. Answer: B (Bot Framework + Direct Line Speech)**

**Why B is correct.** The voice + Teams + Web Chat composition is exactly what Bot Service is for.

**Why the other options are wrong.**
- A (Custom Vision): Not voice.
- C (Whisper alone): Doesn't include the bot.
- D (CLU alone): Doesn't include voice channels.

**Exam-takeaway.** Bot Service + Direct Line Speech for voice.

---

**Q41B. Answer: B (Azure AI Search hybrid + semantic + On Your Data)**

**Why B is correct.** The canonical RAG stack with citations.

**Why the other options are wrong.**
- A / C / D: None provides hybrid + semantic + grounded RAG.

**Exam-takeaway.** Hybrid+semantic + OYD for citations.

---

**Q41C. Answer: B (Azure AI Language + Translator)**

**Why B is correct.** Detect + sentiment + PII via Language; translation via Translator.

**Why the other options are wrong.**
- A / C / D: Each misses one of the four required features.

**Exam-takeaway.** Composition of purpose-built services.

---

**Q42. Answer: A (Managed identity + Cognitive Services User)**

**Why A is correct.** No secrets in code; auditable per-app identity.

**Why the other options are wrong.**
- B / C / D: Either secret-bearing or unauthenticated.

**Exam-takeaway.** MI everywhere in Azure.

---

**Q43. Answer: C (Batch transcription via REST + Azure Storage)**

**Why C is correct.** Best for hours of audio.

**Why the other options are wrong.**
- A: Real-time tops at ~30 min.
- B: Wrong service.
- D: File-size limit.

**Exam-takeaway.** Long audio = batch.

---

**Q44. Answer: B (Compact domain + export)**

**Why B is correct.** Only Compact domains can be exported for edge.

**Why the other options are wrong.**
- A: General can't export.
- C: SKU doesn't matter; domain does.
- D: Different service.

**Exam-takeaway.** Edge = Compact.

---

**Q45. Answer: D (Azure adds RBAC, private networking, region pinning, content filters, residency)**

**Why D is correct.** Same models, enterprise plumbing.

**Why the other options are wrong.**
- A: Related services.
- B: Pricing depends; OpenAI.com isn't universally cheaper.
- C: Mostly same models.

**Exam-takeaway.** Azure adds enterprise control.

---

## 📊 Scoring

| Score | Verdict |
|---|---|
| 41–45 | 🏆 Ready for the Final Mock and the real exam |
| 32–40 | ✅ Solid; review wrong answers, then attempt the Final Mock |
| 23–31 | ⚠️ Re-study weak modules; retake in 3 days |
| <23 | 🔁 Restart from your weakest modules |

---

## 🔍 Review Process

For EACH wrong answer:
1. Map the question to a module (see Module table below)
2. Re-read that module's Reading.md
3. Add an Anki flashcard for the concept
4. Retry similar questions in 3 days

### Question → Module Map

| Q range | Module |
|---|---|
| 1–13 | Module 5 (Doc Intelligence + AI Search) |
| 14–18 | Module 6 (Conversational AI) |
| 19–28 | Module 7 (Azure OpenAI) |
| 29–36 | Module 8 (Build GenAI Apps) |
| 37–40 | Module 2 (Responsible AI) |
| 41A–C | Case study spans Modules 4, 5, 6 |
| 42–45 | Modules 1, 3, 4, 7 |

---

➡️ When ready: [Final Mock Exam](./Final-Mock-Exam.md)
