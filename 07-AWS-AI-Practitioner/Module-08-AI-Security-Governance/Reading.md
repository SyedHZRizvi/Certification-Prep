# Module 8: AI Security & Governance 🔐

> **Why this module matters:** Domain 5 ("Security, Compliance & Governance for AI Solutions") is the final 14% of the exam. It overlaps significantly with general AWS security, but with an AI twist: IAM for Bedrock and SageMaker, VPC endpoints for Bedrock, KMS keys for custom models, audit trails for AI APIs, shared responsibility *for AI*, and the regulations that bite (HIPAA, GDPR). Strong showing here also gives you confidence for the broader AWS security knowledge most cloud roles need.

---

## 🍕 A Story: When a Helpful Chatbot Leaked the Customer List

A regional insurer rolled out an internal chatbot powered by Bedrock + Knowledge Bases. Day one, sales loved it. Day three, a curious analyst asked: *"List the top 10 customers by total premium paid."* The bot, helpful as always, returned the names, phone numbers, and policy numbers.

The problem wasn't the model. The problem was:

- 🔓 The KB indexed an S3 bucket containing **PII the AI was never meant to expose**.
- 🪪 The chatbot had **one IAM role** that everyone shared — sales reps got the same data view as the CISO.
- 🧾 There were **no audit logs** of which user asked what.
- 🛡️ **Bedrock Guardrails were turned off**.
- 🌐 The Bedrock endpoint was **public**, not via a VPC interface endpoint.

By the end of Module 8, you'll know how to fix all five.

---

## 🤝 The Shared Responsibility Model — For AI

You may have seen the AWS Shared Responsibility Model before. For AI workloads, it splits like this:

| AWS is responsible for | Customer is responsible for |
|------------------------|------------------------------|
| Physical infrastructure, hypervisor, network | The customer's data and how it's classified |
| Underlying SageMaker / Bedrock service availability | IAM permissions to Bedrock / SageMaker resources |
| Encryption mechanisms (KMS) | Choice of which data to encrypt and which keys |
| Base foundation model training (Bedrock providers) | Custom model fine-tuning data quality + safety |
| Service-level security patches | Application-level prompt injection defense |
| Service-level audit (CloudTrail integration) | Reviewing those logs |
| Bedrock Guardrails feature availability | **Configuring and enabling Guardrails** |

🎯 **The two-line summary:** AWS secures the **cloud**. You secure what you put **in** the cloud (the data, the prompts, the IAM, the configs).

---

## 🪪 IAM for Bedrock and SageMaker

You can't pass this exam without recognizing IAM concepts. Here's what's AI-specific.

### Bedrock IAM essentials

- **`bedrock:InvokeModel`** — call any model
- **`bedrock:InvokeModelWithResponseStream`** — call any model in streaming mode
- **`bedrock:Retrieve` / `bedrock:RetrieveAndGenerate`** — call a Knowledge Base
- **`bedrock:CreateAgent` / `InvokeAgent`** — create / invoke Bedrock Agents
- **`bedrock:ApplyGuardrail`** — apply a Guardrail to text

Bedrock supports **resource-level permissions** — you can limit which model ARNs a role can invoke. Pattern:

```json
{
  "Effect": "Allow",
  "Action": "bedrock:InvokeModel",
  "Resource": "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-*"
}
```

### SageMaker IAM essentials

- Roles for **Notebooks**, **Studio**, **Training Jobs**, **Endpoints**, **Pipelines** — each can be its own role with least privilege
- **Execution role** = the role the job/endpoint *assumes* to read S3, write artifacts, etc.
- **VPC mode** — run notebooks and training jobs inside *your* VPC (no public internet)

### Useful patterns

- **Per-team Bedrock roles** — different teams get different model access (Claude only, no image gen, etc.)
- **Service Control Policies (SCPs)** — at the AWS Organizations level, block expensive models or specific Regions
- **PrivateLink / VPC endpoints** — keep Bedrock traffic off the public internet (next section)

🎯 **Trap on the exam:** "Limit which Bedrock models a department can call." → IAM policy with resource-level restriction on the model ARN. Not Guardrails. Not Macie.

---

## 🌐 Network Security: VPC Endpoints for Bedrock & SageMaker

By default, calling Bedrock goes over the public internet (encrypted via TLS, but still public). For sensitive workloads:

- **VPC Interface Endpoint (PrivateLink)** for Bedrock — traffic from your VPC to Bedrock stays on the AWS backbone
- Bedrock has VPC endpoints for the **runtime** (model invocation) and the **agent / KB runtime** services
- SageMaker offers VPC mode for notebooks, training jobs, processing jobs, and endpoints
- Combine with **VPC endpoint policies** to further restrict who/what can use the endpoint
- **S3 Gateway endpoints** for any S3 read/write (training data, prompts, RAG corpus) without internet

### Optional but strong: AWS Network Firewall + Egress controls

- Egress filter to block model inference calls to anything *but* approved endpoints
- DLP at the proxy / WAF layer to filter prompts before they hit Bedrock

---

## 🔐 Encryption — at Rest, in Transit, in Use

| Data state | How AWS handles it |
|------------|---------------------|
| **In transit** | TLS 1.2+ everywhere — Bedrock APIs, SageMaker, S3, Knowledge Bases |
| **At rest — S3** | SSE-S3 (AWS-managed) or **SSE-KMS** (your CMK) — use SSE-KMS for sensitive data |
| **At rest — SageMaker** | Customer-managed KMS keys for notebooks, EBS, model artifacts, endpoints |
| **At rest — Bedrock custom models** | Customer-managed KMS key recommended; default is AWS-managed |
| **At rest — Knowledge Bases vector store** | Encryption controlled by the underlying store (OpenSearch, Aurora, etc.) — typically KMS |
| **In use** (memory) | AWS Nitro Enclaves available for highly sensitive workloads |

🎯 **Trap on the exam:** "Use customer-managed CMKs to encrypt your custom Bedrock model and audit key usage." → KMS + CloudTrail combo. Customer-managed gives you key policies, rotation control, and per-key access logs.

---

## 🧾 Audit & Logging

| Layer | Service / log |
|-------|---------------|
| **API calls to Bedrock / SageMaker** | **AWS CloudTrail** — every `InvokeModel`, `CreateTrainingJob`, etc. |
| **Model invocation request + response** | **Bedrock model invocation logging** to CloudWatch Logs or S3 (you opt in; for replay / audit / fine-tuning sources) |
| **Metrics (latency, errors)** | **Amazon CloudWatch** |
| **Resource configuration drift** | **AWS Config** |
| **Aggregated audit packages** | **AWS Audit Manager** |
| **Compliance reports** | **AWS Artifact** |

🎯 **Exam pattern:** "We need to keep a record of every prompt and response from Bedrock for compliance." → **Enable Bedrock model invocation logging** to S3 or CloudWatch Logs (also helps with future fine-tuning).

---

## 🪪 Data Privacy and PII in AI Workloads

Special care for personal data:

| Tool | Use |
|------|-----|
| **AWS Macie** | Discover PII in S3 (e.g., before ingesting into a KB) |
| **Amazon Comprehend (PII Detection)** | Detect/redact PII in text streams programmatically |
| **Bedrock Guardrails (Sensitive Information filter)** | Block/redact PII at inference time on inputs and outputs |
| **Amazon Comprehend Medical** | PHI extraction in healthcare text |
| **Bedrock does NOT use customer data to train base FMs** | Default behavior; data stays in customer Region/account |
| **Fine-tuning data** | Stored in your S3, encrypted with your KMS key, not shared back to providers |

### Right to be forgotten (GDPR)

If a customer requests deletion under GDPR:
- Remove their docs from your KB (re-index)
- Delete logged inferences containing their data
- If they were in fine-tuning data, you may need to retrain to remove their influence — this is a known LLM compliance pain point

---

## 📜 Compliance Frameworks Often Tested

| Framework | Domain | What it requires (high level) |
|-----------|--------|-------------------------------|
| **HIPAA** (US) | Healthcare PHI | Encryption, access controls, audit logs, BAA with AWS |
| **GDPR** (EU) | Personal data of EU residents | Lawful basis, data subject rights, breach notification, DPIA for high-risk AI |
| **CCPA / CPRA** (California) | Personal data of CA residents | Right to know, delete, opt out |
| **PCI DSS** | Payment cards | Strong cardholder data protection |
| **SOC 2** | Service organization controls | Security, availability, confidentiality, processing integrity, privacy |
| **ISO 27001** | Information security mgmt system | Org-wide ISMS controls |
| **FedRAMP** | US federal cloud | High/moderate/low impact baselines |
| **NIST AI RMF** | AI-specific | Risk management for AI systems |
| **ISO/IEC 42001** | AI management system | AI-specific management standard |
| **EU AI Act** | AI in EU | Risk tiers, transparency, conformity assessment |

AWS provides:
- A **list of HIPAA-eligible services** (most AI services including Bedrock, SageMaker, Comprehend Medical, Textract, HealthLake/HealthScribe)
- **Compliance reports** for nearly all major frameworks via **AWS Artifact**
- A **shared responsibility model** that explicitly clarifies AWS's vs customer's scope

🎯 **Trap on the exam:** "We need a BAA to run a HIPAA workload on Bedrock." → Yes — you must sign AWS's Business Associate Addendum and ensure all services used are HIPAA-eligible.

---

## 🧱 Model Lifecycle Governance

Production-grade AI needs lifecycle controls:

| Practice | Tool |
|----------|------|
| **Version every model** | SageMaker Model Registry |
| **Approve before deploy** | Model Registry approval workflow (`PendingManualApproval` → `Approved`) |
| **Lineage** | SageMaker Experiments + Pipelines |
| **Rollback** | Endpoint configurations / blue-green / canary on SageMaker |
| **Drift detection** | SageMaker Model Monitor |
| **Periodic re-evaluation** | Bedrock Model Evaluation runs on a schedule |
| **Documentation** | SageMaker Model Cards |
| **Audit trail** | CloudTrail + Audit Manager |

---

## 🛂 Specific Threats to AI Systems

The exam guide explicitly references AI-specific threats. Recognize each:

| Threat | What it is | Mitigations |
|--------|------------|-------------|
| **Prompt injection** | Malicious instruction overrides system prompt | Guardrails, sanitization, least privilege, system prompt design |
| **Indirect prompt injection** | Injected via ingested content | Trust-rank corpora, output filtering, sandboxed tool use |
| **Data poisoning** | Attacker pollutes training/RAG data | Source validation, integrity hashing, restricted ingestion |
| **Model theft / extraction** | Attacker queries the model many times to copy it | Rate limiting, watermarking, query monitoring |
| **Model inversion** | Reconstruct training data from model behavior | Limit output verbosity on sensitive predictions, differential privacy |
| **Membership inference** | Determine if a record was in training | Limit confidence-score exposure |
| **Adversarial examples** | Crafted inputs that fool the model | Robust training, monitoring, input validation |
| **Insecure plugin / tool use** | An agent calls dangerous APIs without checks | Least privilege on action groups, allow-lists, approval gates |
| **Supply-chain risks** | Tampered model weights from public sources | Verify checksums, prefer Bedrock-curated providers |
| **PII leakage** | Model surfaces sensitive training/RAG data | Guardrails PII filter, careful data curation, redaction at ingest |

🎯 **Exam pattern:** Match a scenario ("an attacker queries the model thousands of times trying to replicate its behavior") to the threat name ("model extraction / model theft") and the mitigation ("rate limiting + monitoring").

---

## 🧰 Putting It All Together — A Secure Bedrock Architecture

A reference secure pattern (the kind the exam loves):

```
            ┌──── CloudTrail (API audit) ────┐
            │                                 │
User in VPC ─→ App on EC2/ECS ─→ Bedrock VPC interface endpoint
                  │                       │
                  ├── IAM least-priv role (specific model ARN)
                  ├── Guardrail attached to Invoke calls
                  ├── KB / Agent with own role
                  ├── S3 (KMS CMK) for RAG corpus, indexed via KB
                  ├── Macie scanning RAG corpus monthly
                  └── Model invocation logging → S3 (KMS) + CloudWatch
```

This single architecture answers about 60% of Domain 5 scenario questions.

---

## 🚨 Common Exam Misconceptions

| Misconception | Reality |
|---------------|---------|
| "AWS secures my data automatically" | AWS secures the cloud; *you* secure data and IAM. |
| "Bedrock is private by default" | The API is public by default. Add **PrivateLink VPC endpoints** for private traffic. |
| "All AWS services are HIPAA-eligible" | Most are; verify in the AWS HIPAA Eligibility list before promising PHI. |
| "CloudTrail logs prompts and completions" | No — CloudTrail logs the API call metadata. **Bedrock model invocation logging** captures the *content*. |
| "If the data is encrypted, IAM doesn't matter" | False — IAM controls who can decrypt and call services. Always defense in depth. |
| "Guardrails replace IAM" | No — Guardrails filter content, IAM filters identity/authorization. Both are needed. |
| "GDPR doesn't apply to my AI if my company is in the US" | If you process EU residents' data, GDPR applies regardless of where you are. |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Shared Responsibility Model** | AWS vs customer security responsibilities |
| **IAM least privilege** | Grant only the minimum permissions needed |
| **Resource-level permissions (Bedrock)** | Restrict to specific model ARNs |
| **VPC endpoint / PrivateLink** | Keep API traffic off the public internet |
| **KMS CMK (Customer-Managed Key)** | Encryption key you control; auditable in CloudTrail |
| **CloudTrail** | API call audit log |
| **Bedrock model invocation logging** | Logs prompts and completions for audit / fine-tune source |
| **AWS Config** | Resource configuration tracking |
| **AWS Audit Manager** | Aggregated audit packages |
| **AWS Artifact** | Compliance report repository |
| **AWS Macie** | PII discovery in S3 |
| **Bedrock Guardrails (PII filter)** | Runtime PII detection / redaction |
| **HIPAA / GDPR / PCI / SOC 2 / ISO 27001 / FedRAMP** | Compliance frameworks |
| **BAA** | Business Associate Addendum — required for HIPAA workloads |
| **Data poisoning** | Adversarial training data |
| **Model extraction** | Attacker copies your model via queries |
| **Model inversion** | Reconstructing training data from model behavior |
| **Membership inference** | Determining if a record was in training |
| **Nitro Enclaves** | Isolated compute for highly sensitive in-use data |

---

## ✅ Module 8 Summary

You now know:
- 🤝 How the Shared Responsibility Model applies to AI
- 🪪 IAM patterns for Bedrock (resource-level model ARNs) and SageMaker (execution roles, VPC mode)
- 🌐 How to make Bedrock traffic private with VPC interface endpoints (PrivateLink)
- 🔐 Encryption at rest (KMS), in transit (TLS), in use (Nitro Enclaves)
- 🧾 Audit and logging stack — CloudTrail (API), Bedrock invocation logging (content), CloudWatch (metrics), Config, Audit Manager, Artifact
- 🪪 PII handling — Macie, Comprehend PII, Bedrock Guardrails
- 📜 Compliance frameworks (HIPAA, GDPR, PCI, SOC 2, ISO 27001, FedRAMP, NIST AI RMF, ISO 42001, EU AI Act)
- 🧱 Model lifecycle governance (Registry, approvals, lineage, drift, rollback)
- 🛂 The AI-specific threats (prompt injection, data poisoning, model theft/inversion/inference, adversarial, supply chain, PII leakage)

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md) — aim for 20/24
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. 🧪 Take [**Practice Exam 2**](../Practice-Exams/Practice-Exam-2.md) — you've now covered all 5 domains
5. 🧪 Then take the [**Final Mock Exam**](../Practice-Exams/Final-Mock-Exam.md) 2–3 days before the real exam

---

## 📚 Further Reading (Optional)

- 📖 [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- 📖 [Amazon Bedrock — Security & Privacy](https://docs.aws.amazon.com/bedrock/latest/userguide/security.html)
- 📖 [Amazon Bedrock — VPC interface endpoints](https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html)
- 📖 [SageMaker — Security best practices](https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_security-best-practices.html)
- 📖 [AWS HIPAA Eligibility list](https://aws.amazon.com/compliance/hipaa-eligible-services-reference/)
- 📖 [OWASP Top 10 for LLMs](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- 📖 [NIST AI RMF Playbook](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook)
