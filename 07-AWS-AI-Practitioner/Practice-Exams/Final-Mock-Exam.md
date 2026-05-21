# 🧪 Final Mock Exam — AWS AI Practitioner (AIF-C01) — Full Length

> **Conditions:** Set a 120-minute timer. 65 questions. **Real exam conditions** — no notes, no breaks, no Googling.
> **Pass mark:** 46/65 (~70%). The real exam pass is 700/1000 on a scaled score.
> **Take this 2–3 days before the real exam.** If you score < 80% here, postpone the real exam by a week.

---

## 📝 Questions

### 1. Which statement is TRUE about AI, ML, Deep Learning, and Generative AI?
A. Generative AI is a parent of AI
B. AI ⊃ ML ⊃ Deep Learning ⊃ Generative AI
C. ML and AI are unrelated
D. Deep Learning is broader than AI

### 2. A retailer's churn model gets 99% accuracy because 98% of customers don't churn. The MOST informative metric is:
A. Accuracy
B. Recall on the churn class (and/or F1)
C. RMSE
D. R²

### 3. A team has 10 years of unlabeled MRI images and wants to flag unusual scans. The BEST initial approach is:
A. Supervised classification
B. Unsupervised anomaly detection
C. Reinforcement learning
D. Generative text summarization

### 4. The HYPERPARAMETER that controls how big a step the optimizer takes is the:
A. Activation
B. Loss
C. Bias
D. Learning rate

### 5. The ML stage of "scoring new data with a trained model" is called:
A. Training
B. Inference
C. Validation
D. Backpropagation

### 6. SageMaker Autopilot is BEST described as:
A. AutoML on tabular data — explores algorithms + hyperparameters and returns the best model
B. A no-code visual data prep tool
C. A vector database
D. A managed Kubernetes cluster

### 7. A team needs to score 500 GB once a week, no live API required. Use:
A. Real-time endpoint
B. Batch transform
C. Asynchronous inference
D. Serverless inference

### 8. Which AWS service is BEST for converting recorded customer phone calls to text?
A. Amazon Polly
B. Amazon Comprehend
C. Amazon Transcribe (Call Analytics)
D. Amazon Lex

### 9. Which managed service provides natural-language enterprise search across thousands of documents?
A. Amazon Personalize
B. Amazon Translate
C. AWS Glue
D. Amazon Kendra

### 10. SageMaker Model Monitor's BIAS DRIFT detection is built on top of:
A. AWS Config
B. SageMaker Clarify
C. Amazon Lex
D. AWS WAF

### 11. A "foundation model" is BEST defined as:
A. A small task-specific model
B. A rule-based system
C. A large pre-trained, general-purpose model adaptable to many tasks
D. A vector index

### 12. Pricing for most LLM APIs (including Bedrock) is per:
A. CPU hour
B. Storage GB
C. Network packet
D. 1,000 input + output tokens

### 13. To get DETERMINISTIC responses for the same input, you should:
A. Lower temperature toward 0
B. Increase top-p
C. Increase max tokens
D. Increase top-k

### 14. The architectural pattern that mitigates hallucinations by injecting REAL source data is:
A. Retrieval-Augmented Generation (RAG)
B. Fine-tuning
C. Provisioned Throughput
D. AWS WAF

### 15. Two pieces of text with similar meaning will produce embeddings that are:
A. Identical character strings
B. Always permission-denied
C. Stored in separate buckets
D. Numerically close in vector space

### 16. Which is NOT a Bedrock model provider (as of 2024–2025)?
A. Anthropic
B. Meta
C. Mistral AI
D. OpenAI

### 17. Amazon Q Developer is BEST for:
A. AI coding assistant inside IDEs / AWS console
B. Enterprise RAG chatbot over company data
C. Image generation
D. Time-series forecasting

### 18. Amazon Q Business is BEST for:
A. AI coding assistant inside IDEs
B. Enterprise chatbot / RAG over your company's SaaS and file content
C. Building a video generator
D. Hosting a private Bedrock model

### 19. PartyRock is BEST described as:
A. A production-grade Bedrock alternative
B. A vector store
C. A no-code sandbox on top of Bedrock for prototyping
D. A SageMaker IDE

### 20. The 3 layers of the AWS GenAI stack (top to bottom) are:
A. Applications / Tools / Infrastructure
B. Compute / Network / Storage
C. Frontend / Backend / Database
D. Reasoning / Memory / Tools

### 21. AWS Trainium and Inferentia are:
A. Custom AWS chips — Trainium for training, Inferentia for inference
B. SageMaker tools
C. EC2 storage volumes
D. Cryptographic keys

### 22. Adding "Let's think step by step" is an example of:
A. Few-shot prompting
B. RAG
C. Prompt injection
D. Chain-of-Thought prompting

### 23. Indirect prompt injection happens when:
A. Malicious instructions are hidden in content (PDF, web page) the LLM ingests
B. The user types malicious input directly
C. The Lambda function is misconfigured
D. The S3 bucket is public

### 24. To filter PII at inference time on Bedrock prompts/responses, use:
A. AWS Macie
B. Bedrock Guardrails — Sensitive Information filter
C. AWS Config
D. AWS Artifact

### 25. To discover PII at rest in S3 BEFORE ingesting it into a Knowledge Base, use:
A. AWS Shield
B. Bedrock Guardrails
C. AWS Macie
D. SageMaker Clarify

### 26. Bedrock Knowledge Bases' default supported vector store is:
A. DynamoDB
B. Redshift
C. Amazon OpenSearch Serverless
D. S3 Glacier

### 27. A team's bot must look up an order in Salesforce AND create a Zendesk ticket. The BEST pattern is:
A. Direct InvokeModel only
B. AWS Glue
C. Amazon Polly + Amazon Translate
D. Bedrock Agent with two action groups (Salesforce + Zendesk)

### 28. RAG is BEST for which scenario?
A. Letting the chatbot use this week's product catalog with citations
B. Embedding strict legalese tone across all outputs
C. Computing tax owed exactly
D. Real-time fraud scoring of millions of records

### 29. Fine-tuning is BEST for which scenario?
A. Adding new pricing data weekly
B. Replacing all human reviewers
C. Enforcing a specific JSON output format and brand tone
D. Indexing PDF documents

### 30. The customization-approach cost order (cheapest → most expensive) is:
A. Continued pre-training → RAG → Fine-tuning → Prompting
B. Fine-tuning → Prompting → RAG → Continued pre-training
C. Prompting → RAG → Fine-tuning → Continued pre-training
D. Prompting → Fine-tuning → RAG → Continued pre-training

### 31. To invoke a fine-tuned (custom) Bedrock model in production you generally need:
A. AWS Backup
B. AWS Direct Connect
C. AWS Outposts
D. Provisioned Throughput

### 32. The metric used primarily for MACHINE TRANSLATION quality is:
A. F1
B. ROUGE
C. R²
D. BLEU

### 33. The metric used primarily for SUMMARIZATION quality is:
A. BLEU
B. ROUGE
C. RMSE
D. AUC

### 34. PERPLEXITY in LLM evaluation:
A. Higher is better
B. Lower is better (model is less surprised)
C. Is irrelevant for generative models
D. Is the same as accuracy

### 35. SageMaker Clarify is BEST used for:
A. Bias detection + explainability (SHAP)
B. Vector search
C. Speech synthesis
D. Image generation

### 36. The customer-authored standardized model documentation feature in SageMaker is:
A. AI Service Cards
B. SageMaker Model Cards
C. Bedrock Studio
D. AWS Artifact

### 37. AWS AI Service Cards are:
A. Customer-authored docs for their models
B. A KMS key type
C. AWS-published responsible-AI documentation for AWS AI services (Rekognition, Textract, Q, etc.)
D. An IAM policy

### 38. Bedrock Guardrails CANNOT do which of the following?
A. Block denied topics
B. Detect / redact PII
C. Apply content filters by severity
D. Detect dataset class imbalance during pre-training

### 39. Amazon Augmented AI (A2I) is used to:
A. Build human-in-the-loop review workflows for AI predictions
B. Augment a foundation model
C. Auto-tune hyperparameters
D. Encrypt embeddings

### 40. The 80% rule / disparate impact threshold is a metric for:
A. Fairness across groups
B. Token efficiency
C. Latency
D. Accuracy

### 41. Under the AWS Shared Responsibility Model for AI, AWS is responsible for:
A. Encrypting customer-supplied data automatically
B. Physical infra, hypervisor, service availability, and base FM training (by providers)
C. Building your IAM policies
D. Choosing which Guardrails to apply

### 42. CloudTrail logs:
A. Full prompt and response content from Bedrock
B. CPU utilization
C. API call metadata (caller, action, time)
D. KMS key material

### 43. To capture actual PROMPT + RESPONSE content from Bedrock for audit, you must:
A. Use Amazon Polly
B. Use AWS Config
C. Enable Bedrock model invocation logging (S3 / CloudWatch Logs)
D. Use SageMaker Edge Manager

### 44. To keep Bedrock API traffic private inside a VPC, use:
A. AWS WAF
B. AWS Shield Advanced
C. PrivateLink VPC interface endpoint for Bedrock
D. Internet gateway

### 45. Which IAM action invokes a Bedrock model?
A. `bedrock:InvokeModel`
B. `s3:GetObject`
C. `kms:Decrypt`
D. `iam:PassRole`

### 46. To run HIPAA-regulated AI workloads on AWS you typically need:
A. A signed BAA and HIPAA-eligible services
B. Public buckets
C. To use only the GovCloud Region
D. No special arrangements

### 47. An attacker queries a Bedrock-hosted model thousands of times trying to copy its behavior. This is:
A. Prompt injection
B. Membership inference
C. Data poisoning
D. Model extraction (model theft)

### 48. Which is the BEST defense against model extraction?
A. Disable Guardrails
B. Remove the system prompt
C. Increase context window
D. Apply rate limiting, monitor query volume, consider watermarking

### 49. Which AWS service AGGREGATES audit evidence into framework-aligned packages (NIST, ISO, PCI)?
A. AWS Direct Connect
B. AWS Snowball
C. AWS Glue
D. AWS Audit Manager

### 50. To version trained models with an approval workflow before deployment, use:
A. SageMaker Model Registry
B. Knowledge Bases for Bedrock
C. AWS Backup
D. AWS WAF

### 51. A start-up wants to slash Bedrock cost in HALF for OFFLINE workloads (≤24 h SLA). The right choice is:
A. PartyRock
B. Provisioned Throughput
C. Bedrock Batch inference
D. SageMaker Spot training

### 52. Which is a multimodal foundation model on Bedrock?
A. Amazon Polly
B. AWS Glue
C. Anthropic Claude (text + vision)
D. Amazon SES

### 53. Amazon Nova Reel is BEST described as:
A. A storage service
B. A SageMaker IDE
C. An Amazon Nova family model that GENERATES short VIDEO from text prompts
D. A SQL database

### 54. The Cohere Bedrock offering best known for RERANKING retrieved chunks is:
A. Cohere Command
B. Cohere Embed
C. Cohere Rerank
D. Cohere Chat

### 55. A team wants strong, customer-controlled encryption + audit for a fine-tuned Bedrock model. They should:
A. Disable encryption
B. Use root credentials
C. Store the model in a public S3 bucket
D. Use a customer-managed KMS key (CMK) for the custom model and audit usage via CloudTrail

### 56. Which evaluation type in Bedrock Model Evaluation uses ONE LLM to GRADE another's outputs?
A. LLM-as-a-judge
B. Automatic statistical metric
C. Knowledge Base eval
D. Edge benchmark

### 57. A "system prompt" is BEST used to:
A. Store IAM credentials
B. Set persistent persona, tone, and policy rules invisible to the end user
C. Define the max tokens
D. Hold training data

### 58. Which is FALSE about RAG and fine-tuning?
A. RAG can update instantly when documents change
B. Fine-tuning is generally cheaper than RAG for adding new facts each week
C. RAG provides source citations naturally
D. Fine-tuning is better than RAG at enforcing a specific output format

### 59. A team chunks 50 GB of PDFs at 500-token blocks with overlap, embeds each chunk with Titan Embeddings, and stores them in OpenSearch Serverless. This is the INDEX phase of:
A. Retrieval-Augmented Generation
B. SageMaker Pipelines
C. AWS Glue ETL
D. AWS Backup

### 60. Which AWS feature LOGGING combination gives BOTH API metadata AND prompt/response content for Bedrock audit?
A. CloudTrail only
B. CloudTrail + Bedrock model invocation logging
C. CloudFront + CloudWatch
D. AWS Macie alone

### 61. Which is a primary defense against PROMPT INJECTION?
A. Disable Guardrails
B. Bedrock Guardrails, input/output filtering, system-prompt isolation, and least-privilege tool access
C. Public buckets for logs
D. Open IAM policies

### 62. The exam guide names which RESPONSIBLE AI pillar covering "ability to override and shut down a system"?
A. Controllability
B. Veracity
C. Profitability
D. Accuracy

### 63. A "Bedrock Agent action group" is:
A. A KMS key
B. A vector store
C. A set of APIs / Lambda functions the agent can invoke
D. A SageMaker endpoint

### 64. A retailer wants ONE-CLICK access to a pretrained foundation model that runs inside their VPC on a SageMaker endpoint, with full control to fine-tune. The BEST choice is:
A. PartyRock
B. Amazon Lex
C. Amazon Personalize
D. SageMaker JumpStart

### 65. Generative AI is the WRONG choice when:
A. Writing marketing copy
B. Translating product descriptions
C. Summarizing customer support chats
D. Computing exact payroll tax owed by formula

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    14. A    27. D    40. A    53. C
2.  B    15. D    28. A    41. B    54. C
3.  B    16. D    29. C    42. C    55. D
4.  D    17. A    30. C    43. C    56. A
5.  B    18. B    31. D    44. C    57. B
6.  A    19. C    32. D    45. A    58. B
7.  B    20. A    33. B    46. A    59. A
8.  C    21. A    34. B    47. D    60. B
9.  D    22. D    35. A    48. D    61. B
10. B    23. A    36. B    49. D    62. A
11. C    24. B    37. C    50. A    63. C
12. D    25. C    38. D    51. C    64. D
13. A    26. C    39. A    52. C    65. D
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 58–65 | 🏆 You're ready. Book the exam this week. |
| 52–57 | ✅ Solid. Review every miss; book the exam in 1 week. |
| 46–51 | ⚠️ At the pass line. Spend 3–5 days re-quizzing weak modules; retake this mock. |
| 38–45 | 🔁 Push the exam back 1–2 weeks. Focus on modules where you got <70%. |
| < 38 | 🔁 Substantial gaps. Restart from your weakest 3 modules. |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify which module covered it (the question stem hints).
2. Re-read that module's **Cheat-Sheet first**; if still unclear, re-read the Reading section.
3. Add a flashcard to your Anki / Flashcards.md.
4. Wait 48 h, then re-attempt the question without notes.

**Question → Module mapping:**
- Q1–10: Modules 1–2 (AI/ML + SageMaker)
- Q11–21: Modules 3–4 (GenAI + Bedrock stack)
- Q22–34: Modules 5–6 (Prompting / RAG / Customization / Eval)
- Q35–40: Module 7 (Responsible AI)
- Q41–50: Module 8 (Security / Governance)
- Q51–65: Cross-domain scenarios

---

## 🎯 Day-Before Checklist

- [ ] Mock score ≥ 52/65
- [ ] Re-read every Cheat-Sheet (1 hour total)
- [ ] Re-do the worst Module's Quiz
- [ ] Skim the official AIF-C01 Exam Guide PDF one more time
- [ ] Pin down test logistics (online proctor / test center, ID, environment)
- [ ] Sleep 8 hours. Bring water. You've got this.

---

🎉 **Good luck on the AWS Certified AI Practitioner exam!** When you pass, come back to this folder and update the README with your score. Then sign up for the Azure AI Engineer track in `08-Azure-AI-Engineer/`.
