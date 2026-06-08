# Module 8: AI Security & Governance 🔐

> **Why this module matters:** Domain 5 ("Security, Compliance & Governance for AI Solutions") is the final 14% of the exam. It overlaps significantly with general AWS security, but with an AI twist: IAM for Bedrock and SageMaker, VPC endpoints for Bedrock, KMS keys for custom models, audit trails for AI APIs, shared responsibility *for AI*, and the regulations that bite (HIPAA, GDPR). Strong showing here also gives you confidence for the broader AWS security knowledge most cloud roles need.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 4: AWS GenAI Stack](../Module-04-AWS-GenAI-Stack/Reading.md), Amazon Bedrock, model providers
> - [Module 7: Responsible AI](../Module-07-Responsible-AI/Reading.md), Guardrails, Model Cards, NIST AI RMF, EU AI Act
> - Basic AWS security vocabulary: IAM roles, KMS keys, S3 encryption, VPC, security groups
>
> If [`04-AWS-Solutions-Architect-Associate`](../../../04-AWS-Solutions-Architect-Associate/) Module 5 (IAM) and Module 7 (VPC + PrivateLink) are fresh, you're ready. If not, this module will move quickly through patterns those courses unpack at depth.

---

## 🍕 A Story: When a Helpful Chatbot Leaked the Customer List

A regional insurer rolled out an internal chatbot powered by Bedrock + Knowledge Bases. Day one, sales loved it. Day three, a curious analyst asked: *"List the top 10 customers by total premium paid."* The bot, helpful as always, returned the names, phone numbers, and policy numbers.

The problem wasn't the model. The problem was:

- 🔓 The KB indexed an S3 bucket containing **PII the AI was never meant to expose**.
- 🪪 The chatbot had **one IAM role** that everyone shared, sales reps got the same data view as the CISO.
- 🧾 There were **no audit logs** of which user asked what.
- 🛡️ **Bedrock Guardrails were turned off**.
- 🌐 The Bedrock endpoint was **public**, not via a VPC interface endpoint.

By the end of Module 8, you'll know how to fix all five.

---

## 🤝 The Shared Responsibility Model, For AI

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

- **`bedrock:InvokeModel`**, call any model
- **`bedrock:InvokeModelWithResponseStream`**, call any model in streaming mode
- **`bedrock:Retrieve` / `bedrock:RetrieveAndGenerate`**, call a Knowledge Base
- **`bedrock:CreateAgent` / `InvokeAgent`**, create / invoke Bedrock Agents
- **`bedrock:ApplyGuardrail`**, apply a Guardrail to text

Bedrock supports **resource-level permissions**, you can limit which model ARNs a role can invoke. Pattern:

```json
{
  "Effect": "Allow",
  "Action": "bedrock:InvokeModel",
  "Resource": "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-*"
}
```

### SageMaker IAM essentials

- Roles for **Notebooks**, **Studio**, **Training Jobs**, **Endpoints**, **Pipelines**, each can be its own role with least privilege
- **Execution role** = the role the job/endpoint *assumes* to read S3, write artifacts, etc.
- **VPC mode**, run notebooks and training jobs inside *your* VPC (no public internet)

### Useful patterns

- **Per-team Bedrock roles**, different teams get different model access (Claude only, no image gen, etc.)
- **Service Control Policies (SCPs)**, at the AWS Organizations level, block expensive models or specific Regions
- **PrivateLink / VPC endpoints**, keep Bedrock traffic off the public internet (next section)

🎯 **Trap on the exam:** "Limit which Bedrock models a department can call." → IAM policy with resource-level restriction on the model ARN. Not Guardrails. Not Macie.

---

## 🌐 Network Security: VPC Endpoints for Bedrock & SageMaker

By default, calling Bedrock goes over the public internet (encrypted via TLS, but still public). For sensitive workloads:

- **VPC Interface Endpoint (PrivateLink)** for Bedrock, traffic from your VPC to Bedrock stays on the AWS backbone
- Bedrock has VPC endpoints for the **runtime** (model invocation) and the **agent / KB runtime** services
- SageMaker offers VPC mode for notebooks, training jobs, processing jobs, and endpoints
- Combine with **VPC endpoint policies** to further restrict who/what can use the endpoint
- **S3 Gateway endpoints** for any S3 read/write (training data, prompts, RAG corpus) without internet

### Optional but strong: AWS Network Firewall + Egress controls

- Egress filter to block model inference calls to anything *but* approved endpoints
- DLP at the proxy / WAF layer to filter prompts before they hit Bedrock

---

## 🔐 Encryption, at Rest, in Transit, in Use

| Data state | How AWS handles it |
|------------|---------------------|
| **In transit** | TLS 1.2+ everywhere, Bedrock APIs, SageMaker, S3, Knowledge Bases |
| **At rest S3** | SSE-S3 (AWS-managed) or **SSE-KMS** (your CMK) use SSE-KMS for sensitive data |
| **At rest, SageMaker** | Customer-managed KMS keys for notebooks, EBS, model artifacts, endpoints |
| **At rest, Bedrock custom models** | Customer-managed KMS key recommended; default is AWS-managed |
| **At rest Knowledge Bases vector store** | Encryption controlled by the underlying store (OpenSearch, Aurora, etc.) typically KMS |
| **In use** (memory) | AWS Nitro Enclaves available for highly sensitive workloads |

🎯 **Trap on the exam:** "Use customer-managed CMKs to encrypt your custom Bedrock model and audit key usage." → KMS + CloudTrail combo. Customer-managed gives you key policies, rotation control, and per-key access logs.

---

## 🧾 Audit & Logging

| Layer | Service / log |
|-------|---------------|
| **API calls to Bedrock / SageMaker** | **AWS CloudTrail**, every `InvokeModel`, `CreateTrainingJob`, etc. |
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
- If they were in fine-tuning data, you may need to retrain to remove their influence, this is a known LLM compliance pain point

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

🎯 **Trap on the exam:** "We need a BAA to run a HIPAA workload on Bedrock." → Yes, you must sign AWS's Business Associate Addendum and ensure all services used are HIPAA-eligible.

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

## 🧰 Putting It All Together, A Secure Bedrock Architecture

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
| "CloudTrail logs prompts and completions" | No, CloudTrail logs the API call metadata. **Bedrock model invocation logging** captures the *content*. |
| "If the data is encrypted, IAM doesn't matter" | False, IAM controls who can decrypt and call services. Always defense in depth. |
| "Guardrails replace IAM" | No, Guardrails filter content, IAM filters identity/authorization. Both are needed. |
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
| **BAA** | Business Associate Addendum, required for HIPAA workloads |
| **Data poisoning** | Adversarial training data |
| **Model extraction** | Attacker copies your model via queries |
| **Model inversion** | Reconstructing training data from model behavior |
| **Membership inference** | Determining if a record was in training |
| **Nitro Enclaves** | Isolated compute for highly sensitive in-use data |

---

## 📊 Case Study, Samsung's ChatGPT Source-Code Leak Ban (Apr 2023)

**Situation.** In early 2023, Samsung Electronics' semiconductor division one of the world's most strategically sensitive engineering operations quietly began allowing engineers to use public ChatGPT to help with their work. Within three weeks (March 2023), three separate incidents were documented internally:

1. An engineer pasted proprietary source code from a *new* semiconductor manufacturing program into ChatGPT to ask the model to debug it.
2. Another engineer pasted internal *test sequences for chip yield optimization* into ChatGPT to ask it to make the code more efficient.
3. A third engineer pasted *meeting recording transcripts* from an internal product meeting and asked ChatGPT to summarize them.

In each case, the data went to OpenAI's servers, where (under OpenAI's then-default terms) it could be retained, reviewed, and potentially used to improve the model. The data left Samsung's security perimeter. Once data is in a third-party LLM's training pipeline, *deleting* it is non-trivial, modern LLMs don't have a clean "forget this customer" button.

**Decision.** Samsung's response, announced internally in late March / publicly via Bloomberg and *The Economist Korea* in May 2023:

- **Immediate ban on public-generative-AI use** (ChatGPT, Google Bard at the time, similar tools) on Samsung-owned devices and corporate networks
- Strict policy: any engineer found uploading proprietary information to a third-party AI tool would face *disciplinary action up to and including termination*
- Per-prompt size limit of 1024 bytes for *any* sanctioned external AI use (to prevent code-paste leaks)
- Internal R&D effort to build a *Samsung-internal* generative AI alternative, eventually announced as Samsung Gauss (Nov 2023), usable inside the perimeter
- Procurement direction: prefer enterprise contracts (Microsoft Azure OpenAI, Amazon Bedrock, Anthropic enterprise terms) for *any* business use of LLMs, because they offer contractual no-train-on-customer-data guarantees

**Outcome.** Within 12 months:

- Nearly every Fortune 500 enterprise had a documented "internal AI use policy", many borrowed Samsung's language verbatim
- Public-LLM adoption velocity slowed in regulated industries while enterprise contracts (Bedrock, Azure OpenAI, Anthropic Workspaces) accelerated
- Microsoft and OpenAI rolled out **ChatGPT Enterprise** (Aug 2023) with explicit no-train-on-customer-data terms and SOC 2 Type 2 compliance, directly in response to incidents like Samsung's
- AWS leaned into Bedrock's *default* no-train-on-customer-data posture as a competitive advantage; data residency in customer Region and customer-managed KMS keys became standard talking points
- Cybersecurity vendors built a new product category *AI data loss prevention* to detect and block proprietary data being pasted into public LLM interfaces

**Lesson for the exam / for practitioners.** Five AIF-C01 talking points anchor here:

1. **The biggest GenAI security risk is *not* prompt injection or model extraction it's the well-meaning employee.** The vast majority of incidents are insider-mistake exfiltration via public LLM interfaces. The mitigation isn't algorithmic; it's *policy + enterprise-contracted alternative + DLP at the egress*. The exam tests this through "which architecture prevents data leakage?" scenarios answer: enterprise Bedrock + IAM + PrivateLink + invocation logging + Guardrails PII filter.
2. **Bedrock's *default* contractual posture is the answer to Samsung's class of incident.** AWS publishes that customer prompts and outputs are not used to train base models, data stays in the customer's Region/account, and customer-managed KMS keys are recommended for custom models. The exam tests this verbatim, Q15 of Module 4's quiz, Q9 of Module 8's quiz, plus PE questions.
3. **PrivateLink for Bedrock is the network-layer companion.** TLS-encrypted public-internet traffic was good enough for *most* SaaS, but for sensitive workloads, customers want the additional assurance that traffic *never leaves the AWS backbone*. The exam loves this pattern: "How do you keep Bedrock traffic off the public internet?" → **PrivateLink VPC Interface Endpoint**.
4. **Invocation logging is the audit trail.** Post-Samsung, every regulated industry wants the ability to answer "show me everything every employee sent to and received from a Bedrock model in the last 18 months." That's **Bedrock model invocation logging → S3 (KMS) + CloudWatch Logs**. CloudTrail captures only the API metadata; invocation logging captures the *content*.
5. **The Italian DPA's temporary GDPR ban on ChatGPT (Mar 2023)** preceded Samsung by a month, for related reasons: lack of lawful basis, no age gate, no data subject rights. The Italian regulator's intervention shifted enterprise procurement preferences toward services that *built in* compliance posture (Bedrock, Azure OpenAI). This is the European parallel to Samsung's incident.

**Discussion (Socratic).**
- Q1: Samsung's ban was effective at stopping the leak class of incident but came at a *productivity* cost (their engineers were genuinely getting value from ChatGPT before the ban). Sketch the *better* policy: how would you allow LLM use while preventing the Samsung incident? Use AWS-native primitives in your answer.
- Q2: A startup CISO reads the Samsung case and writes a one-line policy: "No employee may use any AI tool that's not explicitly approved." Six months later, employees are using personal accounts on personal devices, and 40% of the company is doing so. What's the *failure mode* of strict bans, and what's the alternative posture?
- Q3: The Italian DPA's GDPR action on ChatGPT and the Samsung ban happened within a month of each other. Argue that they were *the same incident* (different surface, same root cause) and what AWS-architecture posture addresses both.
- Q4: Imagine Samsung today (2026) decides to standardize on Amazon Bedrock + Claude. Sketch the 5-control rollout: (1) IAM resource-level policies, (2) PrivateLink + VPC endpoint policies, (3) invocation logging, (4) Guardrails (which filters?), (5) something for the human/policy layer. For each, name the specific AWS feature and a concrete configuration choice.
- Q5: The 1024-byte per-prompt limit Samsung initially imposed is comically small, it would block almost any real engineering use. Argue that it was the *right* call as a stopgap, and design the *graduated* relaxation: when do you raise it to 4K, 32K, full context? What evidence would you need before each raise?

---

## ✅ Module 8 Summary

You now know:

- 🤝 How the Shared Responsibility Model applies to AI
- 🪪 IAM patterns for Bedrock (resource-level model ARNs) and SageMaker (execution roles, VPC mode)
- 🌐 How to make Bedrock traffic private with VPC interface endpoints (PrivateLink)
- 🔐 Encryption at rest (KMS), in transit (TLS), in use (Nitro Enclaves)
- 🧾 Audit and logging stack, CloudTrail (API), Bedrock invocation logging (content), CloudWatch (metrics), Config, Audit Manager, Artifact
- 🪪 PII handling, Macie, Comprehend PII, Bedrock Guardrails
- 📜 Compliance frameworks (HIPAA, GDPR, PCI, SOC 2, ISO 27001, FedRAMP, NIST AI RMF, ISO 42001, EU AI Act)
- 🧱 Model lifecycle governance (Registry, approvals, lineage, drift, rollback)
- 🛂 The AI-specific threats (prompt injection, data poisoning, model theft/inversion/inference, adversarial, supply chain, PII leakage)

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md), aim for 20/24
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. 🧪 Take [**Practice Exam 2**](../Practice-Exams/Practice-Exam-2.md), you've now covered all 5 domains
5. 🧪 Then take the [**Final Mock Exam**](../Practice-Exams/Final-Mock-Exam.md) 2–3 days before the real exam

---

> **Where this leads.**
> - Inside this course: This is the final module. From here, your prep is *practice exams + the Capstone Project + the Recommended Readings list*.
> - Cross-course: `04-AWS-Solutions-Architect-Associate` deepens IAM, KMS, PrivateLink, and VPC; `09-CompTIA-Security-Plus` covers the general security frameworks (NIST CSF, ISO 27001, MITRE ATT&CK) that complement AI-specific governance.
> - Practice: Practice Exam 2 has 10+ Domain-5 questions; the Final Mock Exam tests cross-domain integration; the **Capstone Project** at the course root requires you to design a complete secure Bedrock architecture.

---

## 💬 Discussion, Socratic prompts

1. **Shared Responsibility, the AI twist.** AWS's classic Shared Responsibility Model was clear for IaaS. For Bedrock, draw the new lines: what's AWS responsible for, what's the model provider (Anthropic, Meta, Mistral) responsible for, and what's the customer responsible for? Where do the seams create *ambiguity* in practice (e.g., who's responsible when a model hallucinates harmful advice)?
2. **PrivateLink's *cost*.** PrivateLink VPC Interface Endpoints aren't free, they're priced per endpoint-hour plus per GB. At what monthly Bedrock spend does PrivateLink overhead become noise vs material? When is *not* using PrivateLink the right call?
3. **CloudTrail vs invocation logging, the audit-cost debate.** A compliance officer wants "every prompt and response from every Bedrock call logged for 7 years." What's the storage cost (estimated) for a mid-size deployment, and what's the *retention-tiering* strategy? At what point does the cost itself force a more surgical logging policy?
4. **The "we use Bedrock so we're HIPAA-compliant" fallacy.** A Director of Engineering announces: "We're on Bedrock and it's HIPAA-eligible, so we're HIPAA-compliant." What are *three* things they still need that the HIPAA-eligibility checkbox does not provide? Explicitly map each to NIST AI RMF or HIPAA Security Rule sections.
5. **Insecure tool use in Bedrock Agents, the *real* security risk of 2025–2026.** Bedrock Agents (Module 5) execute actions via Lambda or API calls. An over-permissive action group is one prompt injection away from a real-world incident. Walk through the *least-privilege* design for an agent's Lambda execution role, the allow-list pattern for tool calls, and the approval-gate pattern for sensitive actions. How would you red-team your own agent before production?

---

## 📚 Further Reading (Optional)

- 📖 [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- 📖 [Amazon Bedrock, Security & Privacy](https://docs.aws.amazon.com/bedrock/latest/userguide/security.html)
- 📖 [Amazon Bedrock, VPC interface endpoints](https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html)
- 📖 [SageMaker, Security best practices](https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_security-best-practices.html)
- 📖 [AWS HIPAA Eligibility list](https://aws.amazon.com/compliance/hipaa-eligible-services-reference/)
- 📖 [OWASP Top 10 for LLMs](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- 📖 [NIST AI RMF Playbook](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook)
