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
