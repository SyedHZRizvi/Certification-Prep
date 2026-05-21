# 🧪 Practice Exam 2 — AWS AI Practitioner (AIF-C01 Style) — All Domains

> **Conditions:** Set a 90-minute timer. 50 questions. Treat it like the real thing.
> **Pass mark:** 35/50 (70%)
> Take this AFTER finishing all 8 modules.

---

## 📝 Questions

### 1. A model achieves 50% accuracy on BOTH training and test data. The MOST likely diagnosis is:
A. Overfitting
B. Data leakage
C. Underfitting
D. Drift

### 2. A retailer wants to segment customers into personas WITHOUT predefined categories. The right approach is:
A. Classification
B. Regression
C. Unsupervised clustering
D. Reinforcement learning

### 3. Reinforcement Learning from Human Feedback (RLHF) is MOST commonly used to:
A. Align an LLM's outputs to human preferences
B. Index documents for RAG
C. Train tabular fraud models
D. Generate images

### 4. Which AWS service is purpose-built for time-series forecasting WITHOUT custom ML code?
A. Amazon Personalize
B. Amazon Kendra
C. Amazon Forecast
D. Amazon Polly

### 5. SageMaker Feature Store provides:
A. Hyperparameter optimization
B. A central online + offline store for reusable ML features
C. Container image hosting
D. A vector database

### 6. To label a corpus of confidential MEDICAL images, the BEST Ground Truth workforce is:
A. Private workforce (your own staff)
B. Amazon Mechanical Turk (public)
C. Vendor workforce only
D. Social-media crowdsource

### 7. Which is a SUPERVISED learning task?
A. Predicting next month's sales using past labeled data
B. Detecting anomalies in unlabeled network traffic
C. Grouping customers by behavior without labels
D. Training an agent via rewards

### 8. The MOST common cost driver for a Bedrock workload is:
A. Number of users
B. Tokens (input + output) processed
C. Number of S3 buckets
D. EC2 hours

### 9. A team observes their Bedrock chatbot citing made-up case law. The BEST fix is:
A. Increase temperature
B. Implement RAG with their real case-law corpus, plus Guardrails contextual grounding
C. Switch to a smaller model
D. Disable system prompts

### 10. Bedrock Guardrails CANNOT do which of the following?
A. Detect dataset class imbalance for bias
B. Detect / redact PII
C. Apply content filters by severity
D. Block denied topics

### 11. SageMaker Clarify is BEST used for:
A. Bias detection and explainability (SHAP)
B. Filtering PII in chatbots
C. Speech-to-text
D. Image generation

### 12. The customer-authored, standardized model documentation feature in SageMaker is called:
A. SageMaker Model Cards
B. AI Service Cards
C. Bedrock Studio
D. JumpStart Catalog

### 13. AWS-published responsible-AI documentation for AWS AI services (Rekognition, Textract, etc.) is called:
A. SageMaker Model Cards
B. CloudTrail records
C. AWS Artifact reports
D. AWS AI Service Cards

### 14. The 4 customization approaches ordered from CHEAPEST to MOST EXPENSIVE are:
A. Continued pre-training → Fine-tuning → RAG → Prompting
B. Fine-tuning → Continued pre-training → Prompting → RAG
C. RAG → Prompting → Continued pre-training → Fine-tuning
D. Prompting → RAG → Fine-tuning → Continued pre-training

### 15. The heuristic "RAG for facts, fine-tuning for behaviors" implies:
A. Use RAG to enforce a specific JSON output format
B. Use fine-tuning whenever new data appears
C. Use RAG to access your fresh / private data; use fine-tuning to enforce style / format / niche behaviors
D. Use neither — only prompt engineering works

### 16. Which Bedrock feature returns BOTH retrieved chunks AND the LLM-generated answer with citations in one call?
A. RetrieveAndGenerate
B. CreateAgent
C. InvokeModel
D. ApplyGuardrail

### 17. A team wants their LLM to look up an order in Salesforce, then create a Zendesk ticket — all in one conversation. The BEST pattern is:
A. Direct InvokeModel calls only
B. Amazon Polly + Amazon Translate
C. Bedrock Agent with two action groups (Salesforce + Zendesk)
D. Amazon Personalize

### 18. "Indirect prompt injection" happens when malicious instructions are:
A. Typed by a logged-in admin
B. Encoded in TLS certificates
C. Hidden inside content the LLM ingests (e.g., a PDF / web page)
D. Stored in CloudTrail

### 19. The MOST common DEFAULT vector store for Knowledge Bases for Amazon Bedrock is:
A. Amazon DynamoDB
B. Amazon S3
C. Amazon Redshift
D. Amazon OpenSearch Serverless

### 20. For exact-identifier lookups (e.g., "ticket #1234"), pure semantic search often fails. The BEST remedy is:
A. Increase temperature
B. Use a smaller embedding model
C. Fine-tune the model
D. Hybrid search (semantic + keyword)

### 21. Which alignment method uses preference pairs without explicit reward modeling?
A. PEFT
B. RAG
C. LoRA
D. DPO (Direct Preference Optimization)

### 22. The right metric for SUMMARIZATION quality is typically:
A. BLEU
B. ROUGE
C. R²
D. RMSE

### 23. The right metric for TRANSLATION quality is typically:
A. BLEU
B. ROUGE
C. Perplexity only
D. AUC-ROC

### 24. Lower PERPLEXITY means:
A. The model is more confused
B. The model is less surprised by held-out text (better)
C. The model is overfitting
D. The model is biased

### 25. To use a fine-tuned (custom) Bedrock model for inference, you typically need:
A. AWS Direct Connect
B. Spot Instances
C. AWS Snowball
D. Provisioned Throughput

### 26. Which is TRUE about Bedrock and customer data?
A. AWS uses customer prompts to retrain base FMs by default
B. Customers cannot encrypt their data
C. Customer data is publicly searchable
D. By default, AWS does NOT use customer prompts/outputs to train base FMs; data stays in the customer's account/Region

### 27. A bank's loan-approval model approves Group A at 70% and Group B at 40%. This indicates:
A. A network latency issue
B. Improperly chosen loss function
C. Insufficient training epochs
D. Disparate impact / bias against Group B

### 28. The 80% rule (disparate impact threshold) is associated with which Responsible AI pillar?
A. Privacy
B. Fairness
C. Robustness
D. Veracity

### 29. To FILTER PII in real-time on Bedrock chatbot inputs and outputs, use:
A. AWS Macie
B. AWS Config
C. Bedrock Guardrails — Sensitive Information filter
D. AWS Artifact

### 30. To DISCOVER PII in S3 buckets BEFORE ingesting into a Knowledge Base, use:
A. Bedrock Guardrails
B. AWS Macie
C. AWS Shield
D. CloudWatch Logs

### 31. Human-in-the-loop reviews of AI predictions on AWS are implemented with:
A. Amazon Q Developer
B. AWS Backup
C. Amazon Augmented AI (A2I)
D. SageMaker Edge Manager

### 32. SHAP (SHapley Additive exPlanations) is used to:
A. Replace IAM
B. Train models faster
C. Encrypt KMS keys
D. Provide feature-attribution explanations for individual predictions

### 33. Which compliance framework is required for healthcare PHI workloads in the US (with a signed BAA)?
A. PCI DSS
B. ITIL
C. SOC 2
D. HIPAA

### 34. Under the AWS Shared Responsibility Model for AI, the CUSTOMER is responsible for:
A. Hypervisor patches
B. Physical security of data centers
C. Foundation model pre-training
D. Data classification, IAM least-privilege, Guardrail configuration

### 35. CloudTrail logs:
A. Full prompt and response content from Bedrock by default
B. API call metadata (caller identity, action, time)
C. CPU utilization
D. KMS key material

### 36. To capture the actual PROMPT + RESPONSE content from Bedrock for audit, enable:
A. Bedrock model invocation logging (to S3 or CloudWatch Logs)
B. CloudWatch metrics
C. AWS Config
D. Amazon Polly

### 37. To make Bedrock API traffic stay PRIVATE (off the public internet) within a VPC, use:
A. AWS WAF
B. AWS Shield Advanced
C. PrivateLink VPC interface endpoint for Bedrock
D. CloudFront

### 38. An attacker queries a model thousands of times to copy its behavior. This is:
A. Prompt injection
B. Data poisoning
C. Model extraction (model theft)
D. Membership inference

### 39. To restrict a team's Bedrock IAM role to ONLY call Claude Haiku, use:
A. Disable encryption
B. AWS Macie
C. A resource-level IAM policy on the Claude Haiku model ARN
D. AWS GuardDuty

### 40. The repository for AWS SOC, ISO, HIPAA, and FedRAMP COMPLIANCE REPORTS is:
A. AWS Artifact
B. AWS CloudTrail
C. AWS Trusted Advisor
D. AWS Config

### 41. Which is an example of CHAIN-OF-THOUGHT prompting?
A. Adding "Let's think step by step" to the prompt
B. Showing 5 examples before the new input
C. Setting temperature to 0
D. Increasing max tokens

### 42. Which is an example of FEW-SHOT prompting?
A. Adding step-by-step reasoning instructions
B. Including 3–5 worked examples before the new input
C. Calling external APIs from the model
D. Using top-p sampling

### 43. To AUTOMATE the ML lifecycle as CI/CD on AWS, use:
A. AWS Glue DataBrew
B. SageMaker Pipelines
C. Amazon Polly
D. AWS Snowball

### 44. The lifecycle stage "score new live data with a trained model" is called:
A. Inference
B. Training
C. Hyperparameter tuning
D. Drift

### 45. Which is NOT a typical chunking strategy for RAG?
A. Fixed-size with overlap
B. Convolutional
C. Semantic
D. Sentence / paragraph

### 46. To EVALUATE multiple foundation models on your own data with automatic, human, and LLM-as-judge eval, use:
A. SageMaker Edge Manager
B. Amazon Bedrock Model Evaluation
C. AWS Snowball
D. PartyRock

### 47. A multimodal foundation model on Bedrock that natively handles TEXT and IMAGE input is:
A. Anthropic Claude (vision-capable)
B. Amazon Polly
C. AWS Glue
D. AWS Lex

### 48. The newest AWS frontier foundation model family launched at re:Invent 2024 is:
A. Amazon Comprehend
B. Amazon Lex
C. Amazon Nova (Micro, Lite, Pro, Premier, Canvas, Reel)
D. Amazon Forecast

### 49. To deploy a CUSTOM open-weights Llama model inside your VPC with full instance control, the BEST AWS path is:
A. PartyRock
B. SageMaker JumpStart + SageMaker Endpoint
C. Amazon Bedrock On-Demand only
D. Amazon Q Business

### 50. Which is the MOST complete description of a "secure Bedrock" reference architecture?
A. Public endpoint + root credentials + no logging
B. Spot Instances + AWS Snowball
C. Public endpoint + Guardrails only
D. VPC interface endpoint + least-privilege IAM (resource-level) + KMS encryption + Guardrails + invocation logging + Macie on the source data

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    11. A    21. D    31. C    41. A
2.  C    12. A    22. B    32. D    42. B
3.  A    13. D    23. A    33. D    43. B
4.  C    14. D    24. B    34. D    44. A
5.  B    15. C    25. D    35. B    45. B
6.  A    16. A    26. D    36. A    46. B
7.  A    17. C    27. D    37. C    47. A
8.  B    18. C    28. B    38. C    48. C
9.  B    19. D    29. C    39. C    49. B
10. A    20. D    30. B    40. A    50. D
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 45–50 | 🏆 You're ready for the Final Mock — book the exam in 1–2 weeks |
| 35–44 | ✅ Passing. Review every wrong question and Cheat-Sheet the topics. |
| 28–34 | ⚠️ Marginal. Spend 3+ days on the weakest 2–3 modules. |
| < 28 | 🔁 Re-read the modules you missed; retake in 1 week. |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify the module (questions are grouped by domain — see below).
2. Re-read that module's Cheat-Sheet first; then Reading if needed.
3. Add an Anki flashcard or write the explanation in your own words.
4. Re-attempt the question 2–3 days later.

**Question → Module mapping:**
- Q1–10: Modules 1–2 (AI/ML fundamentals + SageMaker)
- Q11–17: Modules 3–5 (GenAI + Bedrock + Prompting/RAG)
- Q18–26: Modules 5–6 (Prompt security + customization)
- Q27–32: Module 7 (Responsible AI)
- Q33–40: Module 8 (Security & governance)
- Q41–50: Cross-domain integration

---

➡️ When you're hitting 80%+: take the [Final Mock Exam](./Final-Mock-Exam.md)
