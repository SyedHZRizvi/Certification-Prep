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

## Detailed answer rationales

**Q1. Answer: B.** AI ⊃ ML ⊃ Deep Learning ⊃ Generative AI. Canonical Russian-doll hierarchy from Module 1. A reverses it; C says ML and AI are unrelated (false); D inverts the containment of DL and AI. **Exam-takeaway:** memorize the four-level hierarchy.

**Q2. Answer: B.** Recall on the churn class (and/or F1). Imbalanced classification (98% no-churn) makes accuracy meaningless. RMSE (C) and R² (D) are regression metrics. **Exam-takeaway:** imbalanced classification → recall/F1, not accuracy.

**Q3. Answer: B.** Unsupervised anomaly detection. No labels available → start unsupervised. Supervised classification (A) needs labels; RL (C) needs reward signals; text summarization (D) is wrong modality. **Exam-takeaway:** no labels + flag unusual → unsupervised anomaly detection.

**Q4. Answer: D.** Learning rate. Controls how big a step the optimizer takes when updating weights. Activation (A), loss (B), and bias (C) are different. **Exam-takeaway:** "step size" hyperparameter = learning rate.

**Q5. Answer: B.** Inference. Using a trained model on new data is inference. Training (A) builds the model; validation (C) tunes hyperparameters; backpropagation (D) is the gradient-update mechanism within training. **Exam-takeaway:** scoring new data = inference.

**Q6. Answer: A.** AutoML on tabular data — explores algorithms + hyperparameters and returns the best model. Autopilot's core function. No-code visual prep (B) is Canvas; vector DB (C) is unrelated; Kubernetes (D) is EKS. **Exam-takeaway:** AutoML for tabular → Autopilot.

**Q7. Answer: B.** Batch transform. Score a static large dataset once with no live API need. Real-time (A) charges idle hours; async (C) is for big payloads with live response; serverless (D) is for spiky API traffic. **Exam-takeaway:** one-off bulk scoring → Batch Transform.

**Q8. Answer: C.** Amazon Transcribe (Call Analytics). Speech-to-text with call-center-specific features. Polly (A) is TTS; Comprehend (B) is NLP on text; Lex (D) is a chatbot. **Exam-takeaway:** voice → text (call center) → Transcribe Call Analytics.

**Q9. Answer: D.** Amazon Kendra. Enterprise NL search across documents. Personalize (A) is recommendations; Translate (B) is language; Glue (C) is ETL. **Exam-takeaway:** enterprise document NL search → Kendra.

**Q10. Answer: B.** SageMaker Clarify. Model Monitor's bias drift uses Clarify under the hood. Config (A) is resource config; Lex (C) is chatbot; WAF (D) is web ACL. **Exam-takeaway:** bias drift in production = Model Monitor backed by Clarify.

**Q11. Answer: C.** A large pre-trained, general-purpose model adaptable to many tasks. Textbook FM definition. The other options miscount or misuse the term. **Exam-takeaway:** four-attribute FM definition: large, pre-trained, general, adaptable.

**Q12. Answer: D.** 1,000 input + output tokens. Bedrock and most LLM APIs price per 1K tokens. CPU-hours (A), storage (B), and network packets (C) are unrelated. **Exam-takeaway:** tokens drive cost.

**Q13. Answer: A.** Lower temperature toward 0. Determinism = low temperature. Top-p (B) widens the candidate pool; max tokens (C) caps length; top-k (D) also widens. **Exam-takeaway:** deterministic = temperature near 0.

**Q14. Answer: A.** Retrieval-Augmented Generation (RAG). Inject real source data into prompts. Fine-tuning (B), Provisioned Throughput (C), and WAF (D) don't ground answers in source data. **Exam-takeaway:** hallucination + needs your data → RAG.

**Q15. Answer: D.** Numerically close in vector space. Embeddings encode meaning geometrically; similar meaning → small cosine distance. **Exam-takeaway:** embeddings = vectors; similar meaning = close vectors.

**Q16. Answer: D.** OpenAI. Not natively on Bedrock as of 2024–2026. Anthropic, Meta, Mistral are all on Bedrock. **Exam-takeaway:** Bedrock providers list (Anthropic, Amazon, Meta, Mistral, Cohere, Stability, AI21) — OpenAI and Google are NOT on it.

**Q17. Answer: A.** AI coding assistant inside IDEs / AWS console. Q Developer is for engineers (was CodeWhisperer). Enterprise RAG (B) is Q Business; image gen (C) and forecasting (D) are different services. **Exam-takeaway:** Q Developer = IDE + console for engineers.

**Q18. Answer: B.** Enterprise chatbot / RAG over company SaaS and file content. Q Business is the business-user RAG over 40+ connectors. **Exam-takeaway:** Q Business = enterprise RAG over company data.

**Q19. Answer: C.** A no-code sandbox on top of Bedrock for prototyping. Free, shareable, perfect for demos. Not production-grade (A), not a vector store (B), not a SageMaker IDE (D). **Exam-takeaway:** PartyRock = Bedrock sandbox.

**Q20. Answer: A.** Applications / Tools / Infrastructure. AWS's 3-layer GenAI stack. **Exam-takeaway:** memorize this verbatim.

**Q21. Answer: A.** Trainium for training, Inferentia for inference. Custom AWS silicon for ML. **Exam-takeaway:** Trainium → training; Inferentia → inference.

**Q22. Answer: D.** Chain-of-Thought prompting. "Let's think step by step" is the canonical CoT phrase (Wei et al., NeurIPS 2022). Few-shot (A) is multiple examples; RAG (B) is retrieval; prompt injection (C) is adversarial. **Exam-takeaway:** "step by step" → CoT.

**Q23. Answer: A.** Malicious instructions hidden in content (PDF, web page) the LLM ingests. Indirect injection is via the *data* the model reads. Direct user input (B) is direct injection. **Exam-takeaway:** indirect = via ingested content.

**Q24. Answer: B.** Bedrock Guardrails — Sensitive Information filter. Inference-time PII filter. Macie (A) is at-rest; Config (C) is resource config; Artifact (D) is compliance reports. **Exam-takeaway:** runtime PII → Guardrails sensitive-info filter.

**Q25. Answer: C.** AWS Macie. ML-powered PII discovery in S3 buckets. Shield (A) is DDoS; Guardrails (B) is runtime; Clarify (D) is bias. **Exam-takeaway:** at-rest PII discovery → Macie.

**Q26. Answer: C.** Amazon OpenSearch Serverless. Bedrock KB default vector store. **Exam-takeaway:** Bedrock KB default → OpenSearch Serverless.

**Q27. Answer: D.** Bedrock Agent with two action groups (Salesforce + Zendesk). Multi-step API orchestration → Agent + action groups. **Exam-takeaway:** multi-system orchestration with LLM reasoning → Bedrock Agent.

**Q28. Answer: A.** Letting the chatbot use this week's product catalog with citations. Fresh data + citations = RAG. Tone/format enforcement (B) is fine-tuning; exact math (C) is the wrong tool; real-time fraud at scale (D) is classical ML. **Exam-takeaway:** RAG for facts.

**Q29. Answer: C.** Enforcing a specific JSON output format and brand tone. Behavior baked in = fine-tuning. Pricing updates (A) are RAG; replacing reviewers (B) is wrong framing; indexing PDFs (D) is RAG/KB. **Exam-takeaway:** fine-tuning for behaviors.

**Q30. Answer: C.** Prompting → RAG → Fine-tuning → Continued pre-training. The customization cost ladder. **Exam-takeaway:** memorize this ordering.

**Q31. Answer: D.** Provisioned Throughput. Required to invoke fine-tuned Bedrock models. Backup (A), Direct Connect (B), Outposts (C) are unrelated. **Exam-takeaway:** custom Bedrock model invocation → Provisioned Throughput.

**Q32. Answer: D.** BLEU. Translation metric. F1 (A) is classification; ROUGE (B) is summarization; R² (C) is regression. **Exam-takeaway:** BLEU = translation.

**Q33. Answer: B.** ROUGE. Summarization metric. **Exam-takeaway:** ROUGE = summarization.

**Q34. Answer: B.** Lower is better (model is less surprised). Perplexity = how surprised the model is by held-out text; lower = better fit. **Exam-takeaway:** lower perplexity = better.

**Q35. Answer: A.** Bias detection + explainability (SHAP). Clarify's two jobs. **Exam-takeaway:** Clarify = bias + explainability.

**Q36. Answer: B.** SageMaker Model Cards. Customer-authored standardized model documentation. **Exam-takeaway:** customer model docs → Model Cards.

**Q37. Answer: C.** AWS-published responsible-AI documentation for AWS AI services. AI Service Cards are AWS-authored for Rekognition, Textract, Q, etc. **Exam-takeaway:** AWS service docs → AI Service Cards.

**Q38. Answer: D.** Detect dataset class imbalance during pre-training. Guardrails don't do this — that's Clarify's pre-training bias detection. **Exam-takeaway:** Guardrails ≠ bias detection.

**Q39. Answer: A.** Build human-in-the-loop review workflows for AI predictions. Amazon A2I supports Textract, Rekognition, Comprehend, and custom models. **Exam-takeaway:** HITL on AWS → A2I.

**Q40. Answer: A.** Fairness across groups. The 80% / four-fifths rule is a fairness metric (disparate impact threshold). **Exam-takeaway:** 80% rule lives in Fairness.

**Q41. Answer: B.** Physical infra, hypervisor, service availability, and base FM training (by providers). AWS's "of the cloud" responsibilities. Customer handles encryption choice (A), IAM (C), and Guardrails configuration (D). **Exam-takeaway:** AWS = of the cloud; customer = in the cloud.

**Q42. Answer: C.** API call metadata (caller, action, time). CloudTrail logs the *who/what/when*, not content. **Exam-takeaway:** CloudTrail = API metadata only.

**Q43. Answer: C.** Enable Bedrock model invocation logging (S3 / CloudWatch Logs). Opt-in capture of prompts + completions. **Exam-takeaway:** prompt+response audit → invocation logging.

**Q44. Answer: C.** PrivateLink VPC interface endpoint for Bedrock. Keeps traffic on AWS backbone. **Exam-takeaway:** private Bedrock traffic → PrivateLink.

**Q45. Answer: A.** `bedrock:InvokeModel`. The IAM action that invokes a Bedrock foundation model. `s3:GetObject` (B), `kms:Decrypt` (C), and `iam:PassRole` (D) are unrelated to Bedrock invocation. **Exam-takeaway:** memorize the `bedrock:InvokeModel` action name.

**Q46. Answer: A.** A signed BAA and HIPAA-eligible services. HIPAA on AWS requires both. **Exam-takeaway:** HIPAA on AWS = BAA + eligible services list.

**Q47. Answer: D.** Model extraction (model theft). Many queries → reconstruct model behavior. **Exam-takeaway:** "querying to copy" → model extraction.

**Q48. Answer: D.** Apply rate limiting, monitor query volume, consider watermarking. Defenses scale with attacker's query budget. **Exam-takeaway:** model extraction defense = rate limit + monitor + watermark.

**Q49. Answer: D.** AWS Audit Manager. Aggregates evidence into framework-aligned packages. Snowball (B) is data transfer; Glue (C) is ETL; Direct Connect (A) is network. **Exam-takeaway:** evidence-aggregation for compliance frameworks → Audit Manager.

**Q50. Answer: A.** SageMaker Model Registry. Version + approval workflow for trained models. **Exam-takeaway:** model versioning + approval gate → Model Registry.

**Q51. Answer: C.** Bedrock Batch inference. ~50% off, async, ≤24h SLA. PartyRock (A) is a sandbox; Provisioned Throughput (B) is for steady high traffic, not cost reduction; SageMaker Spot (D) is training only. **Exam-takeaway:** 50% off offline workload → Bedrock Batch.

**Q52. Answer: C.** Anthropic Claude (text + vision). Claude is multimodal. Polly (A) is TTS only; Glue (B) is ETL; SES (D) is email. **Exam-takeaway:** Claude vision = multimodal on Bedrock.

**Q53. Answer: C.** An Amazon Nova family model that GENERATES short VIDEO from text prompts. Nova Reel = text-to-video. Not storage (A), not an IDE (B), not a SQL database (D). **Exam-takeaway:** Nova Reel = text-to-video.

**Q54. Answer: C.** Cohere Rerank. Reranks the top-K retrieved chunks to a higher-quality top-N. Command (A) is text; Embed (B) is embeddings; "Chat" (D) is not a distinct Cohere product on Bedrock. **Exam-takeaway:** Cohere Rerank = improve RAG retrieval precision.

**Q55. Answer: D.** Use a customer-managed KMS key (CMK) for the custom model and audit usage via CloudTrail. The strong-encryption + audit pattern. The other options (no encryption, root credentials, public S3) are anti-patterns. **Exam-takeaway:** sensitive custom Bedrock model → customer-managed KMS + CloudTrail.

**Q56. Answer: A.** LLM-as-a-judge. One strong LLM grades another's outputs at scale. **Exam-takeaway:** Bedrock Model Evaluation has automatic, human, KB, and LLM-as-judge modes.

**Q57. Answer: B.** Set persistent persona, tone, and policy rules invisible to the end user. The durable place for behavioral instructions. **Exam-takeaway:** system prompt = invisible persistent rules.

**Q58. Answer: B.** Fine-tuning is generally cheaper than RAG for adding new facts each week. **FALSE** — RAG is far cheaper for adding new facts because you just re-index, no retraining required. A, C, D are all TRUE. **Exam-takeaway:** RAG is cheaper for fresh data; fine-tuning is more expensive but enforces behaviors.

**Q59. Answer: A.** Retrieval-Augmented Generation. Chunk + embed + store in a vector DB = RAG's index phase. SageMaker Pipelines (B) is orchestration; Glue (C) is ETL; Backup (D) is data backup. **Exam-takeaway:** chunk → embed → vector store = RAG indexing.

**Q60. Answer: B.** CloudTrail + Bedrock model invocation logging. CloudTrail captures API metadata; invocation logging captures content. Use both for full audit. **Exam-takeaway:** complete Bedrock audit = CloudTrail + invocation logging.

**Q61. Answer: B.** Bedrock Guardrails, input/output filtering, system-prompt isolation, and least-privilege tool access. Defense in depth against prompt injection. **Exam-takeaway:** prompt injection defense = Guardrails + filtering + isolation + least privilege.

**Q62. Answer: A.** Controllability. The Responsible AI pillar covering "ability to override and shut down." Veracity (B) is truthfulness; Profitability (C) isn't a pillar; Accuracy (D) is performance. **Exam-takeaway:** override/shutdown = Controllability pillar.

**Q63. Answer: C.** A set of APIs / Lambda functions the agent can invoke. Action group = the tools an agent can call. **Exam-takeaway:** action group = agent's tool palette.

**Q64. Answer: D.** SageMaker JumpStart. One-click pretrained FMs deployable to a SageMaker endpoint with full fine-tune control. PartyRock (A) is sandbox; Lex (B) is chatbot; Personalize (C) is recommendation. **Exam-takeaway:** VPC + full control + fine-tune → JumpStart.

**Q65. Answer: D.** Computing exact payroll tax owed by formula. Deterministic math is the wrong job for probabilistic GenAI. **Exam-takeaway:** GenAI is the wrong tool for exact deterministic math.

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
