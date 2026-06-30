# 🎓 Final Mock Exam, Google AI Pro (60 Q / 90 min)

> **Conditions:** Set a 90-minute timer. 60 questions. Sit in one block.
> **Pass mark:** 48/60 (~80%), Google Cloud Generative AI Leader scaled-score equivalent.
> Take this 2–3 days before booking the real exam. Score 48+ before declaring yourself ready.

This exam mirrors the Google Cloud Generative AI Leader format (50–60 questions / 90 minutes) and weights across all 10 modules:

- Module 1 (Google AI Landscape + Gemini Family): ~10% → 6 questions
- Module 2 (AI Studio + Gemini API): ~10% → 6 questions
- Module 3 (Vertex AI Platform): ~12% → 7 questions
- Module 4 (Multi-modal): ~8% → 5 questions
- Module 5 (RAG on Google Cloud): ~10% → 6 questions
- Module 6 (Fine-Tuning): ~8% → 5 questions
- Module 7 (Agent Builder): ~10% → 6 questions
- Module 8 (Responsible AI): ~12% → 7 questions
- Module 9 (MLOps): ~12% → 7 questions
- Module 10 (Production + Capstone): ~8% → 5 questions

---

## 📝 Questions

### 1. The Transformer architecture was introduced by:
A. OpenAI in 2018
B. Vaswani et al. at Google Brain in 2017
C. Anthropic in 2021
D. Meta in 2019

### 2. Google Brain and DeepMind merged into Google DeepMind in:
A. April 2023
B. December 2022
C. June 2024
D. They have not merged

### 3. The five Gemini tiers, smallest to largest:
A. Mini, Standard, Pro, Max, Ultra
B. Bronze, Silver, Gold, Platinum, Diamond
C. Nano, Flash Lite, Flash, Pro, Ultra
D. Light, Medium, Heavy, Heavyweight, Frontier

### 4. The MAXIMUM context window on Gemini 2.5 Pro is:
A. 32K
B. 200K
C. 1M
D. 2M tokens

### 5. Native multi-modal in Gemini means:
A. Vision via CLIP adapter
B. Trained on text + image + audio + video jointly from scratch
C. Three separate models
D. Not available

### 6. Google AI Principles were published in:
A. 2015
B. 2024
C. 2021
D. 2018

### 7. The Python SDK for the Gemini API:
A. `google-generativeai`
B. `vertexai`
C. `openai`
D. `tensorflow`

### 8. To force JSON-Schema-conformant Gemini output:
A. `response_mime_type="application/json"` AND `response_schema=<schema>`
B. Lower temperature
C. "Output JSON"
D. Markdown fences

### 9. The four `safety_settings` harm categories:
A. Harassment, Hate Speech, Sexually Explicit, Dangerous Content
B. Spam, Phishing, Malware, Crime
C. PII, PHI, PCI, IP
D. Bias, Toxicity, Privacy, Copyright

### 10. To count tokens before paying:
A. `model.count_tokens(prompt)`, free endpoint
B. Char count ÷ 4
C. Call with `max_tokens=1`
D. Not possible

### 11. Vertex AI Batch API discount:
A. 10%
B. ~50% on input + output (async ~24h)
C. 90%
D. None

### 12. Vertex AI explicit context caching discount on cached tokens:
A. 25%
B. 50%
C. ~75%
D. 99%

### 13. Google AI Studio vs Vertex AI, the KEY difference:
A. Same product
B. Vertex AI is free
C. AI Studio = consumer playground (API keys); Vertex AI = enterprise (IAM, VPC-SC, BAA, region, audit)
D. AI Studio is enterprise

### 14. Vertex AI is:
A. An umbrella over ~25 sub-products
B. One API
C. The Gemini playground only
D. An open-source framework

### 15. Model Garden hosts:
A. Only Google models
B. Gemini + Claude + Llama + Mistral + Cohere + AI21 + Gemma + …
C. Only OpenAI
D. Only open-weight

### 16. Vertex AI Search vs Vector Search:
A. Same thing
B. Vector Search is deprecated
C. Search is image-only
D. Search = managed RAG (chunk+embed+index+retrieve+rerank); Vector Search = ANN index for custom embeddings

### 17. Reserved-capacity pricing on Vertex AI Gemini:
A. Reserved Instances
B. Spot
C. Provisioned Throughput (GSCUs)
D. Free

### 18. Provisioned Throughput is appropriate when:
A. Unpredictable low-volume
B. Using Claude only
C. Prototyping
D. Steady-state >5K RPM with capacity guarantees

### 19. CMEK on Vertex AI:
A. Encrypts in transit
B. Customer-Managed Encryption Keys for data at rest (rotate/revoke)
C. Free key generation
D. Self-hosting

### 20. VPC Service Controls primarily:
A. Perimeter against exfiltration
B. Encrypt data
C. Allocate CPU
D. Manage cost

### 21. For German data residency, the appropriate region:
A. `us-central1`
B. `europe-west1` (Belgium)
C. `europe-west3` (Frankfurt)
D. `asia-south1`

### 22. Gemini Default video sampling rate:
A. 30 fps
B. 24 fps
C. 1 fps + audio
D. 0 fps

### 23. Image token cost on Gemini:
A. 1 token
B. ~258 tokens per image (more with high-res tiling)
C. 10,000 tokens
D. Free

### 24. Audio billing rate on Gemini:
A. ~1 token/sec
B. Free
C. 1,000 tokens/sec
D. ~32 tokens/sec

### 25. Files API on Gemini:
A. Always required
B. PDF-only
C. Deprecated
D. Use for files >20MB or reused across calls

### 26. PDF page limit on Gemini in one prompt:
A. 10
B. 100
C. 1,000
D. 100,000

### 27. RAG stands for:
A. Retrieval-Augmented Generation
B. Recursive AI Generation
C. Reasoning Action Graph
D. Reinforcement Adversarial Gradient

### 28. The Vertex AI product for managed RAG over 100K PDFs:
A. Vertex AI Vector Search
B. Vertex AI Search
C. BigQuery ML
D. Cloud Functions

### 29. For 30M custom image embeddings:
A. Vertex AI Search
B. Cloud SQL
C. Vertex AI Vector Search
D. AlloyDB

### 30. The MOST multilingual Google embedding model:
A. text-embedding-004
B. OpenAI text-embedding-3
C. Llama embedding
D. multilingual-embedding-002

### 31. Two grounding modes native to Gemini in Vertex AI:
A. None
B. SQL only
C. Same thing
D. Google Search (public) and Vertex AI Search (private)

### 32. Faithfulness as a RAG metric:
A. Latency
B. Whether the answer is supported by retrieved context
C. Cost
D. Speed

### 33. For "new knowledge that changes frequently," the BEST tool:
A. RAG
B. SFT
C. RLHF
D. Distillation

### 34. The 5 customization rungs (simplest → most complex):
A. SFT → RLHF → prompt → RAG → DPO
B. Distillation → SFT → prompt → RAG → RLHF
C. Better prompt → few-shot → RAG → SFT → RLHF/DPO
D. Random

### 35. Vertex AI SFT uses:
A. Full-parameter FT
B. Distillation
C. Random reset
D. LoRA / parameter-efficient adapters

### 36. The LoRA rank hyperparameter:
A. `epochs`
B. `learning_rate_multiplier`
C. `adapter_size`
D. `batch_size`

### 37. Catastrophic forgetting after FT manifests as:
A. Lower train loss
B. Model loses general capabilities; answers "I don't know" to general questions
C. Training crashes
D. Faster inference

### 38. DPO vs RLHF:
A. Same
B. None
C. DPO older
D. DPO directly optimizes on preference pairs WITHOUT RL phase or reward model, simpler

### 39. Distillation:
A. Train small student to mimic large teacher on a target task
B. Compresses base model
C. Removes safety
D. Replaces RAG

### 40. Vertex AI Agent Builder is:
A. One product
B. Same as AI Studio
C. Umbrella over Conversational Agents, Search Agents, Function Calling, ADK, Agent Garden
D. Voice only

### 41. Conversational Agents was formerly known as:
A. Dialogflow ES
B. Dialogflow CX
C. Bard
D. PaLM Chat

### 42. To force a specific function call on Gemini:
A. Lower temperature
B. Not possible
C. Add to user message
D. `tool_config` mode=ANY + allowed_function_names

### 43. ADK is:
A. Closed-source Vertex-only
B. Same as Conversational Agents
C. Proprietary database
D. Open-source agent SDK, works with both Gemini API and Vertex AI

### 44. For an IVR phone bot with strict slot collection:
A. Conversational Agents
B. Pure Gemini function calling
C. ADK
D. Search Agent

### 45. Recitation checker:
A. Can be disabled
B. Detects training-data verbatim; blocks output; cannot disable
C. Opt-in only
D. Doesn't exist

### 46. The FIRST anti-hallucination lever:
A. Lower temperature
B. Bigger model
C. Grounding
D. Disable safety_settings

### 47. SynthID variants:
A. Image only
B. Audio only
C. Text only
D. Image, audio, AND text

### 48. Vertex AI default training-data behavior:
A. Used to train Google's models
B. Publicly indexed
C. Shared with third parties
D. NOT used to train Google's models (opt-out default)

### 49. Google's AI security framework:
A. NIST CSF
B. SAIF
C. OWASP
D. ISO 27001

### 50. Indirect prompt injection:
A. Malicious instructions in retrieved/summarized content hijacking the model
B. Direct user instruction
C. SQL injection
D. Buffer overflow

### 51. The Vertex AI MLOps loop (in order):
A. Ingest → train → register → deploy → monitor → retrain
B. Train → eval → deploy → forget
C. Code → ship → pray
D. SSH → notebook

### 52. Vertex AI Pipelines is built on:
A. Apache Airflow
B. Jenkins
C. Kubeflow Pipelines v2 + TFX
D. Cloud Composer

### 53. Model Registry stores:
A. Predictions
B. Trained models with versions + metadata + lineage
C. Source datasets only
D. API keys

### 54. `traffic_split={"0": 90, "1": 10}`:
A. 90% errors
B. Invalid
C. Resource split
D. 90% to model 0, 10% canary to model 1

### 55. Model Monitoring detects:
A. Auth failures
B. CPU/memory/disk
C. Training/serving skew, prediction drift, data drift, quality drift
D. Cost overruns

### 56. Feature Store solves:
A. Training/serving skew via one source of truth
B. Registration
C. Auth
D. Pricing

### 57. Vertex AI Bayesian HPT service:
A. AutoML
B. Vizier
C. Optuna
D. Hyperopt

### 58. The MAIN architectural choice that helped Wendy's FreshAI succeed:
A. Cheaper hardware
B. Native audio + Conversational Agents state + grounded Gemini
C. More engineers
D. Different LLM

### 59. The MOST IMPORTANT cost optimization for sustained 10K-RPM Gemini Pro:
A. Streaming
B. Disable safety
C. Provisioned Throughput
D. Switch clouds

### 60. Design challenge: Insurance claims processing AI with US data residency, HIPAA-eligible records, 50K/day, multi-modal input, human adjuster review. MINIMUM stack:
A. Just AI Studio
B. Vertex AI in HIPAA-eligible US region + signed BAA + CMEK + VPC-SC + Gemini Pro (multi-modal) + Vertex AI Search grounding over policy + Conversational Agents for escalation + ADK orchestration + Cloud Audit Logs + adjuster human-in-loop + Pipelines for retraining + Monitoring for drift + cost optimization (caching + Provisioned Throughput) + kill switch
C. Self-host
D. ChatGPT Plus

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    13. C    25. D    37. B    49. B
2.  A    14. A    26. C    38. D    50. A
3.  C    15. B    27. A    39. A    51. A
4.  C    16. D    28. B    40. C    52. C
5.  B    17. C    29. C    41. B    53. B
6.  D    18. D    30. D    42. D    54. D
7.  A    19. B    31. D    43. D    55. C
8.  A    20. A    32. B    44. A    56. A
9.  A    21. C    33. A    45. B    57. B
10. A    22. C    34. C    46. C    58. B
11. B    23. B    35. D    47. D    59. C
12. C    24. D    36. C    48. D    60. B
```

---

## 📊 Score Yourself

- **57–60 correct** → 🏆 Schedule the exam with confidence
- **48–56** → ✅ Pass-ready; quick review of weak spots
- **42–47** → ⚠️ Close, but more study needed; re-take in 1 week
- **<42** → 🔁 Re-read the modules that produced the most misses; restart eval cycle

### Topic breakdown, review modules if multiple misses per section

- **Module 1 (Foundations):** Q1–6
- **Module 2 (AI Studio & API):** Q7–12
- **Module 3 (Vertex AI Platform):** Q13–21
- **Module 4 (Multi-modal):** Q22–26
- **Module 5 (RAG):** Q27–32
- **Module 6 (Fine-Tuning):** Q33–39
- **Module 7 (Agent Builder):** Q40–44
- **Module 8 (Responsible AI):** Q45–50
- **Module 9 (MLOps):** Q51–57
- **Module 10 (Capstone):** Q58–60

---

## ✏️ What to Do Now

If you scored **48+**: review your missed questions, drill those flashcards, schedule the **Google Cloud Generative AI Leader exam** for 2–3 days from now. The real exam pattern is very similar to this mock.

If you scored **<48**: don't book yet. Re-read weak-area modules, drill flashcards for those modules, and re-take this mock in 1 week. The biggest mistake students make is booking too early.

🎉 **Good luck.** When you pass, return to the [README](../README.md) to share your win and pick the next track (Professional ML Engineer or one of the related certs).

---

➡️ Next: [Flashcards](../Flashcards.md) for daily drilling
