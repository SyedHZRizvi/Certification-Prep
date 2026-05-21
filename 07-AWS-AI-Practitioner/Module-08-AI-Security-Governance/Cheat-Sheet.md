# 📋 Module 8 Cheat Sheet: AI Security & Governance

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🤝 Shared Responsibility (for AI)

| AWS | Customer |
|-----|----------|
| Physical infra, hypervisor, networks | Your data classification & location |
| Service availability of Bedrock/SageMaker | IAM permissions to those services |
| Base FM training (by providers) | Custom FM fine-tuning data + safety |
| Guardrails feature availability | **Enabling & configuring Guardrails** |
| Encryption mechanisms (KMS) | Key choice + key policies |

---

## 🪪 IAM Patterns

| Goal | Pattern |
|------|---------|
| Restrict to one provider's models | Resource-level policy on Bedrock model ARNs |
| Per-team Bedrock budgets | SCPs at the Org level + tag-based policies |
| SageMaker job least privilege | Per-job execution role |
| Block public internet egress | VPC mode for jobs/endpoints |

---

## 🌐 Network Privacy

- **PrivateLink VPC Interface Endpoints** for Bedrock Runtime + Agent/KB Runtime
- **S3 Gateway endpoints** for training data and RAG corpora
- **VPC endpoint policies** as a second layer of authorization

---

## 🔐 Encryption Quick Reference

| State | Default | Recommended |
|-------|---------|-------------|
| In transit | TLS 1.2+ everywhere | Yes |
| At rest (S3) | SSE-S3 | **SSE-KMS (CMK)** for sensitive data |
| Custom Bedrock model | AWS-managed KMS | **Customer-managed KMS** for audit |
| In use | n/a | **Nitro Enclaves** for highly sensitive |

---

## 🧾 Audit Stack — Don't Confuse

| Service | Captures |
|---------|----------|
| **CloudTrail** | API call metadata (who/what/when) |
| **Bedrock model invocation logging** | Actual prompt + response content (opt-in) |
| **CloudWatch** | Metrics, errors, latency |
| **AWS Config** | Resource configuration drift |
| **AWS Audit Manager** | Framework-aligned evidence packages |
| **AWS Artifact** | Compliance reports (SOC, ISO, HIPAA, FedRAMP) |

---

## 🪪 PII Handling (3 Layers)

| Layer | Tool |
|-------|------|
| **At rest (discover)** | AWS Macie (S3) |
| **In transit / programmatic** | Amazon Comprehend PII Detection |
| **At inference time** | Bedrock Guardrails — Sensitive Information filter |

---

## 📜 Compliance Frameworks

| Framework | Domain |
|-----------|--------|
| **HIPAA** | Healthcare PHI (BAA required) |
| **GDPR** | EU residents' personal data |
| **CCPA / CPRA** | California residents |
| **PCI DSS** | Payment card data |
| **SOC 2 / ISO 27001** | Org-wide security |
| **FedRAMP** | US federal cloud |
| **NIST AI RMF / ISO 42001 / EU AI Act** | AI-specific |

---

## 🛂 AI-Specific Threats (recognize names)

| Threat | Mitigation |
|--------|------------|
| Prompt injection (direct + indirect) | Guardrails, sanitization, least privilege |
| Data poisoning | Source validation, integrity hashing |
| Model extraction (theft) | Rate limiting, monitoring, watermarking |
| Model inversion | Limit verbose outputs, differential privacy |
| Membership inference | Restrict confidence-score exposure |
| Adversarial examples | Robust training, monitoring |
| Insecure tool use (Agents) | Least-priv action groups, allow-lists, approval gates |
| PII leakage | Guardrails PII filter + curation |
| Supply-chain (tampered weights) | Use Bedrock-curated providers; checksum public models |

---

## 🧱 Reference Secure Bedrock Architecture

```
VPC ─→ App ─→ PrivateLink Bedrock endpoint
              │
              ├── IAM least-privilege (specific model ARN)
              ├── Guardrails attached (PII + denied topics + content)
              ├── KB with KMS-encrypted S3 source (Macie-cleaned)
              ├── Bedrock invocation logging → S3 (SSE-KMS) + CloudWatch
              └── CloudTrail capturing API metadata
```

---

## 🏆 Exam Power Phrases

Usually right:
- ✅ "PrivateLink / VPC endpoint" for private Bedrock traffic
- ✅ "Resource-level IAM" to restrict model invocation
- ✅ "Customer-managed KMS key" for sensitive custom models
- ✅ "Macie" for PII discovery in S3
- ✅ "Bedrock invocation logging" for prompt/response capture
- ✅ "BAA + HIPAA-eligible services" for healthcare
- ✅ "Model Registry + approval workflow" for governance

Usually wrong:
- ❌ "CloudTrail captures full prompts"
- ❌ "Bedrock auto-encrypts everything to satisfy HIPAA — no extra steps"
- ❌ "Guardrails replace IAM"
- ❌ "GDPR doesn't apply to US companies"
- ❌ "Default Bedrock traffic is private"

---

## ⚠️ Anti-Patterns

- ❌ Public Bedrock endpoints for sensitive workloads
- ❌ One shared IAM role for all users
- ❌ No invocation logging → no audit trail
- ❌ Indexing S3 into a KB without Macie / cleansing
- ❌ Agent action groups with wildcard IAM

---

## ✏️ Quick Self-Check

1. CloudTrail vs Bedrock invocation logging? ___
2. How to restrict to specific Bedrock models per team? ___
3. Macie's job? ___
4. HIPAA prerequisite on AWS? ___
5. 3 AI-specific threats + a mitigation each? ___

---

➡️ **[Take Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)** (all modules covered)
➡️ Then the **[Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)** in your last week of prep
