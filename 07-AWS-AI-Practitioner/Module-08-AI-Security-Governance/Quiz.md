# ✏️ Module 8 Quiz: AI Security & Governance

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. Under the AWS Shared Responsibility Model for AI, the CUSTOMER is responsible for: *(Understand)*
A. The physical data center
B. The hypervisor
C. The data they upload, IAM permissions, and configuring Guardrails
D. AWS's base FM training

---

### Q2. To restrict a team's Bedrock IAM role to ONLY invoke Claude models, you would: *(Apply)*
A. Disable Guardrails
B. Use a resource-level IAM policy limiting `bedrock:InvokeModel` to the Claude model ARN(s)
C. Encrypt the model
D. Move to GovCloud

---

### Q3. To keep Bedrock traffic from your VPC OFF the public internet, use: *(Apply)*
A. AWS WAF
B. AWS Shield Advanced
C. A VPC Interface Endpoint (PrivateLink) for Bedrock
D. CloudFront

---

### Q4. CloudTrail logs: *(Remember)*
A. The full prompt and completion content
B. Bedrock API call metadata (who called what, when)
C. CPU utilization
D. KMS key material

---

### Q5. To capture the actual PROMPTS and RESPONSES from Bedrock for audit, enable: *(Apply)*
A. CloudWatch metrics
B. Bedrock model invocation logging (to S3 or CloudWatch Logs)
C. AWS Config
D. SageMaker Model Monitor

---

### Q6. To discover PII in an S3 bucket BEFORE ingesting it into a Knowledge Base, use: *(Apply)*
A. AWS Macie
B. AWS Shield
C. AWS WAF
D. SageMaker Clarify

---

### Q7. Which AWS service is the repository for SOC, ISO, HIPAA, FedRAMP compliance reports? *(Remember)*
A. AWS Artifact
B. AWS CloudTrail
C. AWS Config
D. AWS Trusted Advisor

---

### Q8. To run a HIPAA workload on Bedrock you typically need: *(Evaluate)*
A. Nothing extra, Bedrock auto-complies
B. A signed Business Associate Addendum (BAA) with AWS, plus use of HIPAA-eligible services
C. A separate AWS account in GovCloud
D. To disable encryption

---

### Q9. Which is TRUE about Bedrock and customer data? *(Analyze)*
A. AWS uses customer prompts to retrain base FMs by default
B. By default, customer prompts and outputs are NOT used to train base FMs and stay in the customer's account/Region
C. All Bedrock data is public
D. Bedrock automatically anonymizes everything

---

### Q10. "Data poisoning" is BEST defined as: *(Remember)*
A. PII leakage from outputs
B. An attacker inserting malicious examples into training or RAG data
C. Network packet flooding
D. Token loss

---

### Q11. Which AI threat involves an attacker querying a model thousands of times to copy its behavior? *(Analyze)*
A. Prompt injection
B. Model extraction (model theft)
C. Model inversion
D. Cross-site scripting

---

### Q12. The SageMaker EXECUTION ROLE is: *(Remember)*
A. The IAM role the SageMaker job/endpoint assumes to access AWS resources (S3, ECR, KMS)
B. A KMS key
C. A VPC subnet
D. A network ACL

---

### Q13. Which is NOT a typical encryption-at-rest option for SageMaker resources? *(Analyze)*
A. AWS-managed KMS keys
B. Customer-managed KMS keys (CMK)
C. Plaintext S3 (unencrypted)
D. Default KMS encryption

---

### Q14. A custom (fine-tuned) Bedrock model is: *(Understand)*
A. Public by default
B. Stored encrypted (KMS, customer-managed key recommended) and owned by the customer
C. Trained on other customers' data
D. Hosted by the model provider

---

### Q15. Which AWS service AGGREGATES audit evidence into framework-aligned packages? *(Remember)*
A. AWS Audit Manager
B. AWS Snowball
C. AWS Glue
D. AWS Direct Connect

---

### Q16. To filter PII at INFERENCE TIME on Bedrock prompts and responses, use: *(Apply)*
A. AWS Macie
B. Bedrock Guardrails, Sensitive Information filter
C. AWS Config
D. AWS Artifact

---

### Q17. Which scenario describes MODEL INVERSION? *(Understand)*
A. Reordering layers of a neural network
B. Reconstructing training data from model outputs
C. Reversing a Lambda function
D. Inverting a vector store

---

### Q18. To detect drift in a deployed SageMaker model's accuracy or fairness, use: *(Apply)*
A. SageMaker Model Monitor (with Clarify for bias drift)
B. AWS CloudFront
C. AWS Glue
D. Amazon Athena

---

### Q19. A VPC endpoint POLICY allows you to: *(Understand)*
A. Encrypt data
B. Further restrict which actions / principals / resources can use the endpoint
C. Replace IAM
D. Create new model providers

---

### Q20. Which is a strong defense against MODEL EXTRACTION attacks? *(Evaluate)*
A. Lower the temperature to 0
B. Apply rate limiting, monitoring of query volume, and consider watermarking
C. Remove the system prompt
D. Disable Guardrails

---

### Q21. GDPR applies to a US-based AI service if: *(Understand)*
A. The service has any customers anywhere
B. The service processes personal data of EU residents
C. The service uses GPUs
D. Never, GDPR is US-only

---

### Q22. To version trained models and gate them through an approval workflow before deployment, use: *(Apply)*
A. SageMaker Model Registry
B. Bedrock Knowledge Bases
C. PartyRock
D. Amazon Polly

---

### Q23. Which BEST sequence describes a secure Bedrock architecture for sensitive data? *(Create)*
A. Public internet → no IAM → no encryption → no logging
B. VPC endpoint + least-privilege IAM + KMS encryption + Guardrails + invocation logging + Macie on the source data
C. Run on EC2 with full admin permissions
D. Use root credentials for simplicity

---

### Q24. "Insecure plugin/tool use" by a Bedrock Agent is BEST mitigated by: *(Evaluate)*
A. Removing the FM
B. Least-privilege IAM on action groups, allow-listed APIs, and human approval gates for sensitive actions
C. Increasing context window
D. Deleting CloudTrail

---

## 🎯 Answers + Explanations

### Q1: **C. Customer data, IAM, Guardrails configuration**
AWS handles "of the cloud" (infrastructure). You handle "in the cloud" (data, identity, config).

### Q2: **B. Resource-level IAM policy on the Claude model ARN(s)**
Bedrock supports resource-level permissions on model ARNs, the standard pattern.

### Q3: **C. PrivateLink VPC interface endpoint**
Keeps traffic on the AWS backbone, not the internet. Works for Bedrock Runtime and Agent / KB Runtime.

### Q4: **B. API call metadata**
CloudTrail = who/what/when of API calls. Content is NOT in CloudTrail.

### Q5: **B. Bedrock model invocation logging**
Opt-in capture of prompts + completions to S3 or CloudWatch Logs.

### Q6: **A. AWS Macie**
ML-powered PII discovery and classification in S3.

### Q7: **A. AWS Artifact**
SOC, ISO, HIPAA, FedRAMP, all live in Artifact.

### Q8: **B. Signed BAA + HIPAA-eligible services**
Bedrock is HIPAA-eligible. You still need the BAA and to confirm all dependent services are eligible.

### Q9: **B. Default: not used for base-FM training; stays in account/Region**
A frequent test point.

### Q10: **B. Malicious examples in training / RAG data**
The classic supply-chain or ingestion attack.

### Q11: **B. Model extraction (model theft)**
Copy the model by collecting enough Q→A pairs.

### Q12: **A. The IAM role the job/endpoint assumes**
Standard SageMaker term; least-privilege design starts here.

### Q13: **C. Plaintext (unencrypted) S3**
Encryption is the default; plaintext is an anti-pattern, not an "option" you should pick.

### Q14: **B. Encrypted (KMS CMK recommended), owned by the customer**
Your custom model is private to your account.

### Q15: **A. AWS Audit Manager**
Maps controls to frameworks (NIST, ISO, PCI, etc.) and aggregates evidence.

### Q16: **B. Bedrock Guardrails, Sensitive Information filter**
Inference-time PII filter. Macie is *at rest* in S3.

### Q17: **B. Reconstructing training data from outputs**
A privacy attack, different from extraction (copying behavior).

### Q18: **A. Model Monitor + Clarify**
Model Monitor uses Clarify under the hood for bias-drift detection.

### Q19: **B. Further restrict who / what can use the endpoint**
A second layer of access control on top of IAM.

### Q20: **B. Rate limiting + query monitoring + watermarking**
Defenses scale with the attacker's query budget, limit it.

### Q21: **B. If the service processes personal data of EU residents**
GDPR's reach is based on data subject location, not company HQ.

### Q22: **A. SageMaker Model Registry**
Version + approval workflow for trained models.

### Q23: **B. VPC endpoint + IAM least-priv + KMS + Guardrails + logging + Macie**
The reference secure architecture the exam loves.

### Q24: **B. Least-privilege IAM on action groups + allow-lists + approval gates**
Defense in depth: even if injection succeeds, what *can* the agent actually do?

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Security domain owned.
- 20–22/24 → ✅ Strong, take Practice Exam 2.
- 17–19/24 → ⚠️ Re-read the encryption, IAM, and AI-threats sections.
- <17 → 🔁 Re-do the module, Domain 5 is heavily weighted on AWS basics.

---

## 🃏 Add To Your Flashcards

- Shared Responsibility (cloud vs in-cloud) for AI
- CloudTrail (metadata) vs Bedrock invocation logging (content)
- Macie vs Guardrails (rest vs runtime PII)
- PrivateLink VPC endpoint for Bedrock
- KMS customer-managed keys for custom models
- HIPAA → BAA + eligible services
- AI threats: prompt injection (direct + indirect), data poisoning, model extraction / inversion / membership inference, adversarial examples, insecure tool use, PII leakage
- Compliance frameworks: HIPAA, GDPR, PCI DSS, SOC 2, ISO 27001, FedRAMP, NIST AI RMF, ISO 42001, EU AI Act

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then **[Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)**, then the **[Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)**
