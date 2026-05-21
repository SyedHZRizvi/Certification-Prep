# 📋 Module 6 Cheat Sheet: Security, Identity & Compliance

> One page. Print it. Tape it to your monitor. 30% of the exam — review DAILY.

---

## 🛡️ Shared Responsibility Model

```
┌─────────────────────────────────────────────────────┐
│  CUSTOMER  →  Security IN the cloud                 │
│  - Customer data                                    │
│  - IAM users, roles, permissions, MFA               │
│  - OS patching (on EC2)                             │
│  - SG / NACL config                                 │
│  - Encryption (which keys, where)                   │
│  - App code, secrets                                │
├─────────────────────────────────────────────────────┤
│  AWS  →  Security OF the cloud                      │
│  - Physical data centers                            │
│  - Hardware, network                                │
│  - Hypervisor                                       │
│  - Managed-service OS patching (RDS, Lambda, etc.)  │
└─────────────────────────────────────────────────────┘
```

🎯 **EC2 → customer patches the OS. RDS → AWS patches the OS.**

---

## 👤 IAM Quick-Ref

| Entity | Use for |
|--------|---------|
| **Root** | Lock with MFA. Daily tasks NEVER. |
| **User** | Long-lived identity (human or legacy app) |
| **Group** | Bucket of users sharing policies |
| **Role** | Temporary creds — EC2 → S3, cross-account, federation |
| **Policy** | JSON Allow/Deny rules |

Rules:
- **Explicit Deny > Allow** (always)
- **Implicit deny** by default
- IAM is **global** (not regional)
- Use **least privilege**
- Use **groups** to manage perms
- **MFA** on all humans

---

## 🏢 AWS Organizations + SCPs

- Multi-account mgmt + **consolidated billing** + volume discounts
- **SCPs** = guardrails (max permissions) at OU/account level
- **Don't** grant — they constrain

---

## 🔐 Encryption Services

| Service | When |
|---------|------|
| **KMS** | Default managed encryption keys |
| **Customer Managed Key (CMK)** | Full control / rotation / policies |
| **CloudHSM** | FIPS 140-2 Level 3 dedicated HSM |
| **Secrets Manager** | Store + **auto-rotate** secrets |
| **Parameter Store** | Free-tier secrets (no auto-rotate) |
| **ACM** | Free public TLS certs (ELB, CF, API GW) |

---

## 🛡️ Threat Detection / Prevention Stack

| Service | Role | What it does |
|---------|------|--------------|
| **WAF** | Preventive | HTTP-layer filter (SQLi, XSS, geo, rate) |
| **Shield Standard** | Preventive | Free DDoS protection (auto) |
| **Shield Advanced** | Preventive | DDoS + DRT + cost protection (~$3K/mo) |
| **GuardDuty** | Detective | Anomaly detection (logs) |
| **Macie** | Detective | S3 PII discovery |
| **Inspector** | Detective | Vuln scans (EC2, ECR, Lambda) |
| **Detective** | Detective | RCA / graph investigation |
| **Security Hub** | Aggregator | Single dashboard of findings |

---

## 📋 Audit & Compliance

| Service | What |
|---------|------|
| **CloudTrail** | Who did which API call when |
| **Config** | Resource config tracking + rules |
| **Audit Manager** | Automated evidence collection |
| **Artifact** | Download SOC, ISO, PCI, FedRAMP reports |

🎯 CloudTrail = "who did X" · Config = "what's the state of X"

---

## 🌍 Compliance Programs (alphabet soup)

- **SOC 1/2/3** — auditor reports
- **ISO 27001 / 27017 / 27018** — international security
- **PCI DSS** — payment cards
- **HIPAA** — US healthcare
- **FedRAMP** Moderate / High — US federal
- **GDPR** — EU data protection
- **NIST 800-53** — US federal controls

---

## 🏆 Exam Power Phrases

✅ "Enable MFA on root + IAM users"
✅ "Use IAM Roles, not access keys, for EC2"
✅ "Apply least privilege"
✅ "Enable GuardDuty for threat detection"
✅ "Use SCPs to set guardrails across accounts"
✅ "Download compliance reports from Artifact"
✅ "Use Macie to find PII in S3"
✅ "Use Inspector to scan for vulnerabilities"

Wrong:
❌ "Patch RDS OS yourself" (AWS does it)
❌ "Skip patching EC2 OS — AWS handles it" (you do)
❌ "Use root user for daily work"
❌ "Disable MFA on the root user"
❌ "GuardDuty blocks attacks" (it detects; you block)

---

## ⚠️ Anti-Patterns

- ❌ IAM access keys hardcoded into app source
- ❌ Wide-open S3 buckets
- ❌ Multi-AZ as a "security" solution (it's HA, not security)
- ❌ Storing secrets in env vars without rotation
- ❌ Skipping MFA on root

---

## 🗓️ Key Facts

- IAM is GLOBAL
- Explicit Deny always wins
- Shield Standard = FREE; Advanced = $3K/mo + DRT
- ACM public certs = FREE
- Artifact = compliance REPORTS (download)
- Security & Compliance = **30% of exam**

---

## ✏️ Quick Self-Check

1. Shared Responsibility — 3 customer, 3 AWS items? ___
2. IAM Role vs User? ___
3. GuardDuty / Macie / Inspector — one-liner each? ___
4. KMS vs CloudHSM? ___
5. CloudTrail vs Config? ___

---

➡️ [Module 7: Management, Monitoring & Pricing](../Module-07-Management-Monitoring-Pricing/Reading.md)
