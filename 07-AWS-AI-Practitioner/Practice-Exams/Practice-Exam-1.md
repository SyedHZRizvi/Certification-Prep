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
