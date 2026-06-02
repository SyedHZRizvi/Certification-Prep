# 🧪 Practice Exam 1 — AWS AI Practitioner (AIF-C01 Style) — Halftime

> **Conditions:** Set a 60-minute timer. 32 questions. Treat it like the real thing.
> **Pass mark:** 22/32 (70%)
> Take this AFTER finishing Modules 1–4 (AI/ML Fundamentals, SageMaker, GenAI Fundamentals, AWS GenAI Stack).

---

## 📝 Questions

### 1. Which statement correctly orders the AI hierarchy?
A. Machine Learning ⊃ Artificial Intelligence ⊃ Deep Learning
B. Generative AI ⊃ Deep Learning ⊃ Machine Learning ⊃ Artificial Intelligence
C. Deep Learning ⊃ Machine Learning ⊃ Artificial Intelligence
D. Artificial Intelligence ⊃ Machine Learning ⊃ Deep Learning ⊃ Generative AI

### 2. A retailer has labeled "fraud / not fraud" examples and wants to build a classifier. This is:
A. Unsupervised learning
B. Generative AI
C. Reinforcement learning
D. Supervised classification

### 3. A model scores 97% on training data and 64% on the test set. The MOST likely issue is:
A. Underfitting
B. Bad hyperparameters
C. Overfitting
D. Data drift in production

### 4. Which is a HYPERPARAMETER?
A. A neural network weight
B. The learning rate set before training
C. A bias term inside a layer
D. The model's output prediction

### 5. Which evaluation metric is BEST for a fraud detector where 99% of transactions are legitimate?
A. Accuracy
B. Recall on the fraud class
C. RMSE
D. R²

### 6. A business analyst with no Python experience wants to build a churn model on a CSV. The BEST tool is:
A. SageMaker Canvas
B. SageMaker Training Job
C. SageMaker Pipelines
D. AWS Glue

### 7. Which SageMaker inference mode is BEST for one-off scoring of a 200 GB dataset overnight?
A. Real-time endpoint
B. Serverless inference
C. Asynchronous inference
D. Batch transform

### 8. A logistics company wants accurate demand forecasts for thousands of SKUs using a fully managed AWS service. The BEST choice is:
A. SageMaker Canvas
B. Amazon Rekognition
C. Amazon Forecast
D. Amazon Personalize

### 9. A startup wants OCR and table/form extraction from millions of scanned invoices. The BEST service is:
A. Amazon Rekognition
B. Amazon Textract
C. Amazon Comprehend
D. AWS Glue

### 10. SageMaker Model Monitor can detect all EXCEPT:
A. Data quality drift
B. EC2 patch drift
C. Feature attribution drift
D. Bias drift

### 11. A "foundation model" is BEST described as:
A. A small task-specific model
B. A rule-based AI system
C. A SQL database for ML
D. A large pre-trained, general-purpose model adaptable to many tasks

### 12. In an LLM, the role of "tokens" is:
A. To represent small chunks of text the model processes; pricing is per token
B. To authenticate API users
C. To define IAM permissions
D. To store training weights

### 13. The "context window" of an LLM refers to:
A. The chat UI size
B. The number of concurrent users
C. The training dataset size
D. The maximum number of tokens (prompt + response) per call

### 14. To make an LLM produce more DETERMINISTIC answers, you should LOWER which parameter?
A. Temperature
B. Max tokens
C. Top-p
D. Batch size

### 15. A "hallucination" in an LLM is:
A. A model crash
B. An IAM error
C. A confidently wrong / invented output that sounds plausible
D. A latency spike

### 16. Which is the MOST common architectural fix to reduce hallucinations by grounding answers in your data?
A. Lower top-k
B. Quantization
C. Retrieval-Augmented Generation (RAG)
D. AWS Shield

### 17. Embeddings represent text as:
A. JSON strings
B. SQL queries
C. Numerical vectors where similar meanings are close in vector space
D. Image pixels

### 18. Which provider is NOT available natively on Amazon Bedrock?
A. Anthropic
B. OpenAI
C. Stability AI
D. Meta

### 19. A team wants the EASIEST way to invoke Anthropic Claude in production without managing infrastructure. The right choice is:
A. SageMaker JumpStart endpoint
B. Amazon Bedrock
C. EC2 with custom Docker
D. PartyRock

### 20. Amazon Q Developer is BEST for:
A. Enterprise chatbot over company docs
B. Natural-language BI
C. Image generation
D. Code suggestions inside an IDE / AWS console assistant

### 21. A non-technical HR analyst wants to ask plain-English questions of SharePoint and Salesforce data. The right service is:
A. Amazon Q Business
B. Amazon Q Developer
C. SageMaker Canvas
D. Amazon Polly

### 22. Amazon Nova is:
A. A storage service
B. Amazon's 2024 foundation model family (Micro, Lite, Pro, Premier, Canvas, Reel) on Bedrock
C. A SageMaker IDE
D. A vector database

### 23. To process a Bedrock workload at ~50% cost in an OFFLINE async manner, use:
A. Provisioned Throughput
B. PartyRock
C. Bedrock Batch inference
D. SageMaker Spot training

### 24. Which AWS chip is purpose-built for ML INFERENCE at lower cost than GPUs?
A. AWS Inferentia
B. AWS Trainium
C. AWS Graviton
D. AWS Nitro

### 25. Which AWS chip is purpose-built for ML TRAINING at lower cost than GPUs?
A. AWS Graviton
B. AWS Inferentia
C. AWS Trainium
D. AWS Outposts

### 26. The 3 layers of the AWS GenAI stack (from top to bottom) are:
A. Applications / Tools / Infrastructure
B. Database / Compute / Network
C. Reasoning / Memory / Tools
D. Train / Deploy / Monitor

### 27. A company wants 1-click access to a CATALOG of pretrained foundation models that can be DEPLOYED ON A SAGEMAKER ENDPOINT inside their VPC. The right choice is:
A. PartyRock
B. Amazon Connect
C. Amazon Personalize
D. SageMaker JumpStart

### 28. Generative AI is the WRONG tool for:
A. Computing exact financial totals that must reconcile to the cent
B. Summarizing customer support transcripts
C. Drafting marketing copy
D. Translating product descriptions

### 29. A "multimodal" foundation model is one that:
A. Runs on multiple regions
B. Natively handles more than one input/output modality (e.g., text + image)
C. Uses multiple GPUs
D. Is trained on multiple datasets

### 30. The AWS managed AI service for ENTERPRISE INTELLIGENT SEARCH across thousands of internal docs using natural language is:
A. Amazon Kendra
B. Amazon Personalize
C. AWS Glue
D. Amazon Athena

### 31. A bank using Bedrock asks: "Does AWS train its base foundation models on our prompts and outputs?" The CORRECT answer is:
A. Yes — that's how Bedrock works
B. Only if you enable PartyRock
C. No — by default customer prompts/outputs are NOT used to train base FMs and stay in the customer's account/Region
D. Only in the EU region

### 32. A team wants steady, predictable, high-volume Bedrock capacity at a known cost. They should choose:
A. PartyRock
B. SageMaker Endpoint
C. Bedrock Batch
D. Bedrock Provisioned Throughput

---

## 🎯 Answer Key (No Cheating!)

```
1.  D    9.  B    17. C    25. C
2.  D    10. B    18. B    26. A
3.  C    11. D    19. B    27. D
4.  B    12. A    20. D    28. A
5.  B    13. D    21. A    29. B
6.  A    14. A    22. B    30. A
7.  D    15. C    23. C    31. C
8.  C    16. C    24. A    32. D
```

---

## Detailed answer rationales

**Q1. Answer: D.** AI ⊃ ML ⊃ Deep Learning ⊃ Generative AI.

**Why D is correct.** Per Module 1, this is the Russian-doll hierarchy: AI is the broadest umbrella, ML is the subset where systems learn from data, Deep Learning is the ML subset using deep neural networks, and Generative AI is the DL subset that *creates* new content.

**Why the other options are wrong.**
- A: Reverses ML and AI (ML can't contain AI; AI is broader).
- B: Inverts the hierarchy entirely — Generative AI is the *smallest* nested doll, not the largest.
- C: Drops Generative AI from the chain; it's a subset of DL, not an unrelated category.

**Exam-takeaway.** Memorize the four-level hierarchy and the direction of the ⊃ symbol.

---

**Q2. Answer: D.** Supervised classification.

**Why D is correct.** Labels are present ("fraud / not fraud"), the target is categorical, so this is supervised classification.

**Why the other options are wrong.**
- A: Unsupervised has no labels — but labels exist here.
- B: Generative AI creates new content; it doesn't classify discrete categories from labeled examples.
- C: Reinforcement learning uses rewards/actions, not labels.

**Exam-takeaway.** "Labels present" = supervised; "discrete categories" = classification.

---

**Q3. Answer: C.** Overfitting.

**Why C is correct.** Large gap between training (97%) and test (64%) is the textbook overfitting symptom: the model memorized the training data and doesn't generalize.

**Why the other options are wrong.**
- A: Underfitting would show low accuracy on *both* sets (the model is too simple).
- B: "Bad hyperparameters" is too vague; it's a cause, not a diagnosis.
- D: Data drift in production is about distribution shift over *time*, not a train-vs-test gap on a static dataset.

**Exam-takeaway.** Train accuracy >> test accuracy → overfitting.

---

**Q4. Answer: B.** The learning rate set before training.

**Why B is correct.** Hyperparameters are values *you* set before training. Learning rate is the canonical example.

**Why the other options are wrong.**
- A, C: Neural network weights and bias terms are *parameters* (learned during training), not hyperparameters.
- D: The output prediction is the model's runtime output, not a configuration value.

**Exam-takeaway.** Parameter = learned. Hyperparameter = you set it.

---

**Q5. Answer: B.** Recall on the fraud class.

**Why B is correct.** With 99% legitimate transactions, a model that predicts "not fraud" every time scores 99% accuracy but catches zero fraud. Recall on the positive (fraud) class is what reveals this failure.

**Why the other options are wrong.**
- A: Accuracy is the *trap* metric on imbalanced data — it looks great while the model is useless.
- C, D: RMSE and R² are regression metrics; this is a classification problem.

**Exam-takeaway.** Imbalanced classification → recall (and/or F1), not accuracy.

---

**Q6. Answer: A.** SageMaker Canvas.

**Why A is correct.** Canvas is no-code visual ML aimed specifically at business analysts who can't or don't want to write Python.

**Why the other options are wrong.**
- B: Training Jobs are code-driven (Python + SDK).
- C: Pipelines orchestrate ML workflows — still code.
- D: AWS Glue is data ETL, not model training.

**Exam-takeaway.** "No-code business user" → Canvas.

---

**Q7. Answer: D.** Batch transform.

**Why D is correct.** One-off bulk scoring of a static dataset with no live API requirement is exactly the Batch Transform use case.

**Why the other options are wrong.**
- A: Real-time endpoints incur per-instance-hour cost 24/7 and target live API workloads.
- B: Serverless inference targets spiky, lower-volume request patterns, not big bulk jobs.
- C: Asynchronous is for big payloads with seconds-to-minutes latency requirements, not single-shot bulk.

**Exam-takeaway.** Score a whole dataset offline → Batch Transform.

---

**Q8. Answer: C.** Amazon Forecast.

**Why C is correct.** Amazon Forecast is purpose-built for managed time-series forecasting (DeepAR, Prophet, ARIMA, ETS internally), perfect for SKU-level demand.

**Why the other options are wrong.**
- A: Canvas can do forecasting but Forecast is the dedicated managed service the exam favors.
- B: Rekognition is vision — wrong modality.
- D: Personalize is for recommendations.

**Exam-takeaway.** "Forecasts of SKUs / demand / time-series" → Forecast.

---

**Q9. Answer: B.** Amazon Textract.

**Why B is correct.** Textract is the AWS-managed OCR service with built-in form and table extraction. Specifically designed for document workflows.

**Why the other options are wrong.**
- A: Rekognition is general vision (objects, faces, scenes) — not document-aware.
- C: Comprehend is NLP on free-form text.
- D: Glue is ETL.

**Exam-takeaway.** OCR + forms/tables → Textract.

---

**Q10. Answer: B.** EC2 patch drift.

**Why B is correct.** SageMaker Model Monitor detects four drift types: data quality, model quality, bias, and feature attribution. EC2 patch drift is an infrastructure-management concern, not a Model Monitor capability.

**Why the other options are wrong.**
- A, C, D: All three are real Model Monitor capabilities.

**Exam-takeaway.** Memorize the four Model Monitor drift types; anything else is wrong.

---

**Q11. Answer: D.** A large pre-trained, general-purpose model adaptable to many tasks.

**Why D is correct.** This is the textbook foundation-model definition: large, pre-trained on broad data, general-purpose, adaptable.

**Why the other options are wrong.**
- A: Foundation models are explicitly *not* task-specific.
- B: Rule-based systems aren't foundation models (they aren't even ML).
- C: SQL databases have nothing to do with foundation models.

**Exam-takeaway.** Memorize the four-attribute definition: large, pre-trained, general, adaptable.

---

**Q12. Answer: A.** Tokens represent small chunks of text the model processes; pricing is per token.

**Why A is correct.** Tokens are the unit of text the LLM consumes (and produces). Bedrock and most LLM APIs price per 1,000 input + output tokens.

**Why the other options are wrong.**
- B: Tokens aren't authentication credentials (different "token" concept).
- C: IAM permissions are separate.
- D: Weights are stored as parameters, not tokens.

**Exam-takeaway.** Token = unit of text; tokens = cost driver.

---

**Q13. Answer: D.** The maximum number of tokens (prompt + response) per call.

**Why D is correct.** The context window caps the *combined* prompt + response tokens per LLM call.

**Why the other options are wrong.**
- A: The chat UI size is irrelevant.
- B: Concurrent users is a throughput/scaling concern.
- C: Training dataset size is about pre-training, not inference.

**Exam-takeaway.** Context window = prompt tokens + response tokens, total cap per call.

---

**Q14. Answer: A.** Temperature.

**Why A is correct.** Temperature controls randomness/creativity. Lowering it toward 0 produces more deterministic outputs.

**Why the other options are wrong.**
- B: Max tokens caps response length, not randomness.
- C: Top-p shapes token selection; usually adjusted alongside temperature.
- D: Batch size is a training hyperparameter; doesn't apply to inference determinism.

**Exam-takeaway.** Deterministic output → lower temperature.

---

**Q15. Answer: C.** A confidently wrong / invented output that sounds plausible.

**Why C is correct.** A hallucination is when the LLM generates fabricated information that *sounds* right but is factually incorrect.

**Why the other options are wrong.**
- A, B, D: These are different categories of failure (crash, IAM error, latency) — not hallucinations.

**Exam-takeaway.** Hallucination = confidently wrong, plausible-sounding output.

---

**Q16. Answer: C.** Retrieval-Augmented Generation (RAG).

**Why C is correct.** RAG grounds the LLM in real source data at runtime, dramatically reducing hallucination.

**Why the other options are wrong.**
- A: Top-k tuning shapes vocabulary; not the primary hallucination defense.
- B: Quantization is a model compression technique; orthogonal to hallucination.
- D: AWS Shield is DDoS protection.

**Exam-takeaway.** Hallucination + needs your data → RAG.

---

**Q17. Answer: C.** Numerical vectors where similar meanings are close in vector space.

**Why C is correct.** Embeddings encode meaning geometrically — semantically similar text → small cosine distance.

**Why the other options are wrong.**
- A: Embeddings are vectors, not JSON strings.
- B: SQL queries are unrelated.
- D: Image pixels are an unrelated representation.

**Exam-takeaway.** Embedding = vector encoding of meaning.

---

**Q18. Answer: B.** OpenAI.

**Why B is correct.** As of 2024–2026, OpenAI's GPT models are *not* natively available on Amazon Bedrock. Google's Gemini is also not on Bedrock.

**Why the other options are wrong.**
- A, C, D: Anthropic, Stability AI, and Meta are all Bedrock providers.

**Exam-takeaway.** Bedrock providers: Anthropic, Amazon (Titan + Nova), Meta, Mistral, Cohere, Stability, AI21. Not OpenAI, not Google.

---

**Q19. Answer: B.** Amazon Bedrock.

**Why B is correct.** Bedrock is the serverless API for Claude — no infrastructure to manage, pay per token, ready in minutes.

**Why the other options are wrong.**
- A: JumpStart requires you to provision a SageMaker endpoint (instance management).
- C: EC2 + Docker is the maximum-effort path.
- D: PartyRock is a sandbox, not for production.

**Exam-takeaway.** Easiest production Claude → Bedrock.

---

**Q20. Answer: D.** Code suggestions inside an IDE / AWS console assistant.

**Why D is correct.** Amazon Q Developer (formerly CodeWhisperer) lives in VS Code, JetBrains, the AWS Console, the CLI, and GitHub — specifically for engineers.

**Why the other options are wrong.**
- A: Enterprise chatbot over company docs is **Q Business**.
- B: Natural-language BI is **Q in QuickSight**.
- C: Image generation is not a Q feature.

**Exam-takeaway.** Q Developer = engineers / IDE / AWS console.

---

**Q21. Answer: A.** Amazon Q Business.

**Why A is correct.** Q Business connects to 40+ enterprise sources (SharePoint, Salesforce, S3, Confluence, etc.) and answers business-user questions via managed RAG.

**Why the other options are wrong.**
- B: Q Developer is for coders.
- C: Canvas is for tabular ML.
- D: Polly is text-to-speech.

**Exam-takeaway.** Q Business = enterprise RAG over company SaaS + files.

---

**Q22. Answer: B.** Amazon's 2024 foundation-model family (Micro, Lite, Pro, Premier, Canvas, Reel) on Bedrock.

**Why B is correct.** Announced at re:Invent 2024 as Amazon's frontier FM family.

**Why the other options are wrong.**
- A: Not a storage service.
- C: Not an IDE.
- D: Not a vector database.

**Exam-takeaway.** Nova = Amazon's 2024 FM family on Bedrock.

---

**Q23. Answer: C.** Bedrock Batch inference.

**Why C is correct.** Bedrock Batch delivers ~50% off the on-demand token price for asynchronous bulk jobs with a 24-hour SLA.

**Why the other options are wrong.**
- A: Provisioned Throughput is for *steady high-volume* workloads, not offline savings.
- B: PartyRock is a sandbox.
- D: SageMaker Spot training applies to model *training*, not Bedrock inference.

**Exam-takeaway.** Offline 50% cheaper → Bedrock Batch.

---

**Q24. Answer: A.** AWS Inferentia.

**Why A is correct.** Inferentia is purpose-built AWS silicon for ML *inference* at lower cost than GPUs.

**Why the other options are wrong.**
- B: Trainium is for training.
- C: Graviton is an ARM general-purpose CPU.
- D: Nitro is the hypervisor.

**Exam-takeaway.** Inferentia = inference; Trainium = training.

---

**Q25. Answer: C.** AWS Trainium.

**Why C is correct.** Trainium is purpose-built for ML *training* at lower cost than GPUs.

**Why the other options are wrong.**
- A: Graviton is a general-purpose ARM CPU.
- B: Inferentia is for inference.
- D: Outposts is hybrid on-prem hardware.

**Exam-takeaway.** Trainium = training; mirror of Q24.

---

**Q26. Answer: A.** Applications / Tools / Infrastructure.

**Why A is correct.** AWS describes its GenAI stack as Applications (Q, PartyRock) → Tools (Bedrock) → Infrastructure (SageMaker, Trainium, Inferentia, EC2 GPU).

**Why the other options are wrong.**
- B, C, D: All describe other stack frameworks unrelated to AWS GenAI.

**Exam-takeaway.** Memorize Apps / Tools / Infra.

---

**Q27. Answer: D.** SageMaker JumpStart.

**Why D is correct.** JumpStart is the catalog of pretrained models you deploy on your own SageMaker endpoint (with VPC isolation if needed).

**Why the other options are wrong.**
- A: PartyRock is a sandbox.
- B: Amazon Connect is a contact center.
- C: Personalize is recommendation, not an FM catalog.

**Exam-takeaway.** Self-hosted FM on SageMaker endpoint → JumpStart.

---

**Q28. Answer: A.** Computing exact financial totals that must reconcile to the cent.

**Why A is correct.** Generative AI is probabilistic; exact deterministic math must use traditional code.

**Why the other options are wrong.**
- B, C, D: Summarization, marketing drafts, and translation are all classic GenAI strengths.

**Exam-takeaway.** GenAI is the wrong tool for exact deterministic math.

---

**Q29. Answer: B.** Natively handles more than one input/output modality (e.g., text + image).

**Why B is correct.** Multimodal = multiple modalities natively supported (text, image, audio, video).

**Why the other options are wrong.**
- A: Multi-region is a deployment topology.
- C: Multi-GPU is an infrastructure choice.
- D: Multi-dataset is about training.

**Exam-takeaway.** Multimodal = multiple input/output modalities.

---

**Q30. Answer: A.** Amazon Kendra.

**Why A is correct.** Kendra is AWS's managed enterprise intelligent-search service over PDFs and documents using natural language.

**Why the other options are wrong.**
- B: Personalize is recommendations.
- C: Glue is ETL.
- D: Athena is SQL over S3.

**Exam-takeaway.** Enterprise NL search across docs → Kendra.

---

**Q31. Answer: C.** No — by default customer prompts/outputs are NOT used to train base FMs and stay in the customer's account/Region.

**Why C is correct.** This is Bedrock's documented default behavior — central to its enterprise positioning.

**Why the other options are wrong.**
- A: False.
- B: PartyRock doesn't change this policy.
- D: Not region-specific.

**Exam-takeaway.** Bedrock default: no train on customer data; data stays in customer Region/account.

---

**Q32. Answer: D.** Bedrock Provisioned Throughput.

**Why D is correct.** Provisioned Throughput reserves dedicated model-unit (MU) capacity at known hourly cost — for steady, high-volume traffic and for invoking custom (fine-tuned) models.

**Why the other options are wrong.**
- A: PartyRock is a sandbox.
- B: SageMaker Endpoint hosts SageMaker models, not Bedrock models.
- C: Bedrock Batch is for offline workloads, not steady high-volume.

**Exam-takeaway.** Steady high-volume Bedrock workload → Provisioned Throughput.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 29–32 | 🏆 Excellent halftime. Continue to Modules 5–8 confidently. |
| 22–28 | ✅ Passing. Review wrongs, then push into Modules 5–8. |
| 17–21 | ⚠️ Marginal. Re-quiz the weakest module before continuing. |
| < 17 | 🔁 Re-read Modules 1–4 — especially the SageMaker tools table and Bedrock catalog. |

---

## 🔍 Review Process

For EACH wrong answer:

1. Find which module covered it (the question stem hints).
2. Re-read that module's Reading.md *and* Cheat-Sheet.md.
3. Add an Anki card for the concept.
4. Retry the question 2–3 days later.

---

➡️ When ready: continue to [Module 5: Prompt Engineering & RAG](../Module-05-Prompt-Engineering-RAG/Reading.md), then [Practice Exam 2](./Practice-Exam-2.md)
