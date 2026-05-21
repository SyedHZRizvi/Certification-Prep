# Module 6: Security, Identity & Compliance 🔐

> **Why this module matters:** Security & Compliance is **30% of the exam** — the LARGEST domain. If you only deeply learn one module, make it this one. The Shared Responsibility Model alone will appear in 4–6 questions.

---

## 🏦 A Story: The Bank Vault Analogy

Imagine you rent a safe deposit box at a bank.

- **The bank** secures the building, the vault door, the guards, the cameras, the fire suppression, the power system. They're responsible for *the building*.
- **You** are responsible for what you put in your box, the key to your box, who you give a copy to, and whether you check your box regularly.

If you leave your key in the lobby, that's not the bank's fault. If the bank's vault burns down through their negligence, that's not your fault.

**That's the AWS Shared Responsibility Model.** AWS secures the cloud (the building); you secure what you put in the cloud (your data, identities, configurations).

Memorize this analogy. The exam will test it half a dozen ways.

---

## 🛡️ The Shared Responsibility Model (THE MOST-TESTED CONCEPT)

```
   ┌─────────────────────────────────────────────────┐
   │  CUSTOMER  →  Security IN the cloud             │
   │    • Customer data                              │
   │    • IAM users, roles, permissions              │
   │    • OS patching (on IaaS, e.g. EC2)            │
   │    • Network/firewall config (SG, NACL)         │
   │    • Encryption settings (which keys, where)    │
   │    • Application code & secrets                 │
   ├─────────────────────────────────────────────────┤
   │  AWS  →  Security OF the cloud                  │
   │    • Physical data centers                      │
   │    • Hardware                                   │
   │    • Network infrastructure                     │
   │    • Virtualization layer (hypervisor)          │
   │    • Patching managed services' OS              │
   └─────────────────────────────────────────────────┘
```

🔥 **MEMORIZE:** "AWS = security OF the cloud (infrastructure). Customer = security IN the cloud (your stuff)."

🎯 **Exam patterns:**
- "Patching guest OS on EC2" → **Customer**
- "Patching the hypervisor" → **AWS**
- "Patching the OS underlying RDS or Lambda" → **AWS**
- "Configuring IAM users" → **Customer**
- "Physical security of data centers" → **AWS**
- "S3 bucket access permissions" → **Customer**
- "S3 service availability and durability" → **AWS**

### The boundary shifts with the service type

| Service | Customer manages | AWS manages |
|---------|------------------|-------------|
| EC2 (IaaS) | OS, apps, data, IAM, firewall | Hypervisor, hardware, DC |
| RDS (PaaS) | DB users/perms, schema, data | OS, DB patching, hardware |
| Lambda (FaaS) | Code, IAM, env vars | Entire runtime + OS |
| S3 (managed) | Data, bucket policies, encryption | Everything else |

---

## 👤 AWS IAM (Identity & Access Management)

**IAM = the front door of AWS.** Every API call to AWS must be authenticated and authorized.

### Core IAM entities

| Entity | What it is | Use for |
|--------|------------|---------|
| **Root user** | The account owner — created when you sign up | NOTHING day-to-day (lock it up) |
| **IAM User** | A person or app with long-lived credentials | Humans, legacy apps |
| **IAM Group** | A bucket of users that share permissions | Organize permissions |
| **IAM Role** | Temporary credentials assumed by services or users | EC2 talking to S3, cross-account, federated logins |
| **IAM Policy** | A JSON document of permissions (Allow/Deny) | Attached to users, groups, or roles |

### Best practices (almost direct exam questions)

1. **Lock down the root user** — enable MFA, use only for billing / a couple of account-level tasks
2. **Don't use root for daily work** — create an IAM Admin user
3. **Grant LEAST PRIVILEGE** — only the permissions actually needed
4. **Use roles for EC2 → other AWS services** — never put access keys on an instance
5. **Use IAM Identity Center (formerly AWS SSO)** for federated workforce access
6. **Enable MFA on all human accounts**
7. **Rotate access keys regularly**
8. **Use Groups to manage permissions** (don't attach policies directly to users)

### IAM Policy structure (high-level only for CLF)

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::my-bucket/*"
  }]
}
```

- **Effect**: Allow or Deny (Deny always wins over Allow)
- **Action**: which API calls (`s3:GetObject`, `ec2:RunInstances`, etc.)
- **Resource**: which AWS resources (by ARN)
- (Optional) **Condition**: when the rule applies

### AWS-managed vs Customer-managed vs Inline policies

| Type | Who owns it | Editable |
|------|-------------|----------|
| **AWS-managed** | AWS | No, but updated by AWS |
| **Customer-managed** | You | ✅ |
| **Inline** | Embedded directly in a user/group/role | ✅ but harder to reuse |

🎯 **Exam tip:** Prefer customer-managed policies; avoid inline policies for reusability.

---

## 🏢 AWS Organizations & SCPs

**AWS Organizations = manage multiple AWS accounts as a single org.**

- **Management (root) account** at the top
- **Organizational Units (OUs)** group accounts
- **Service Control Policies (SCPs)** set guardrails — what an account/OU is ALLOWED to do at all
- **Consolidated billing** — one bill, volume discounts pooled across accounts

🎯 **Exam pattern:**
- "Prevent any account in the org from launching EC2 outside us-east-1" → **SCP**
- "Aggregate billing across 50 dev accounts" → **Organizations / Consolidated Billing**
- "Centrally manage tagging policy" → **AWS Organizations Tag Policies**

---

## 🔐 AWS KMS (Key Management Service)

**KMS = managed encryption keys.** Used by ~all AWS services to encrypt your data.

### Key types

| Type | Who creates | Who controls |
|------|-------------|--------------|
| **AWS-owned key** | AWS (default for many services) | AWS |
| **AWS-managed key** | AWS, per service in your account | AWS (you can see but not edit) |
| **Customer-managed key (CMK)** | You | ✅ You — full control, rotation, policy |
| **Imported key material** | You bring the key bytes | You |
| **AWS CloudHSM** | Dedicated hardware security module | You (FIPS 140-2 Level 3) |

🎯 **Exam pattern:**
- "Full control over keys, rotation, policies" → **Customer-managed CMK**
- "Need a dedicated FIPS 140-2 Level 3 HSM" → **AWS CloudHSM**
- "Default encryption with no setup" → **AWS-managed keys**

### Where you'll see KMS
- S3 SSE-KMS encryption
- EBS volume encryption
- RDS, Aurora, DynamoDB encryption at rest
- Secrets Manager / Parameter Store
- Lambda environment variables

---

## 🛡️ AWS Security Services Catalog

Memorize what each service DOES — the exam asks "which service detects X / blocks Y / scans Z?"

| Service | What it does | When to pick |
|---------|--------------|--------------|
| **AWS IAM** | Identity + permissions | Always |
| **AWS Organizations + SCPs** | Multi-account guardrails | Enterprise / multi-team |
| **AWS Identity Center (SSO)** | Federated workforce sign-in | Replace IAM users with SSO |
| **AWS KMS** | Managed encryption keys | Whenever you encrypt |
| **AWS CloudHSM** | Dedicated HSM | FIPS 140-2 Level 3 / sole tenancy |
| **AWS Secrets Manager** | Store + auto-rotate secrets (DB passwords, API keys) | Production secret management |
| **AWS Systems Manager Parameter Store** | Free-tier config / secret store | Lighter, no auto-rotation |
| **AWS Certificate Manager (ACM)** | Free TLS certificates | HTTPS on ELB, CloudFront, API GW |
| **AWS WAF** | Web app firewall (HTTP layer) — block SQLi, XSS, geos | In front of CloudFront / ALB |
| **AWS Shield Standard** | DDoS protection (free, automatic) | Always on for ELB/CloudFront |
| **AWS Shield Advanced** | Enhanced DDoS, 24/7 DRT, cost protection | Mission-critical apps ($3K/mo) |
| **Amazon GuardDuty** | Intelligent threat detection (analyzes logs for anomalies) | Always-on threat alerting |
| **Amazon Macie** | Discovers + classifies PII in S3 | Compliance, GDPR |
| **Amazon Inspector** | Vulnerability scanning of EC2 / ECR images / Lambda | Continuous vuln mgmt |
| **AWS Config** | Track resource configs + compliance vs rules | Compliance / drift detection |
| **AWS CloudTrail** | Records every API call in your account | Audit / forensics |
| **AWS Security Hub** | Aggregates findings from many services | Single pane of glass |
| **AWS Detective** | Investigate root cause of security events | Incident response |
| **AWS Artifact** | Self-service compliance reports (SOC, ISO, PCI) | Auditors need a report |
| **AWS Trusted Advisor** | Best-practice checks (incl. security) | Mod 7 coverage too |

🎯 **Exam shortcuts:**
- "Scan S3 for PII / credit card numbers" → **Macie**
- "Detect anomalous API activity (e.g. crypto-mining)" → **GuardDuty**
- "Scan EC2 / containers for known vulns (CVEs)" → **Inspector**
- "Block SQL injection at the web layer" → **WAF**
- "DDoS protection (free)" → **Shield Standard**
- "DDoS protection with cost protection + DRT" → **Shield Advanced**
- "Centralized findings dashboard" → **Security Hub**
- "Download SOC 2 report" → **Artifact**
- "Track who created this S3 bucket" → **CloudTrail**
- "Track resource config changes over time" → **Config**

---

## 🔥 The "Detective vs Preventive" Mental Model

Group security services by their PURPOSE:

| Category | Examples |
|----------|----------|
| **Preventive** (stop bad things) | IAM, SCP, KMS, WAF, Shield, Security Groups, NACLs |
| **Detective** (find bad things) | GuardDuty, Macie, Inspector, CloudTrail, Config, Detective, Security Hub |
| **Responsive** (act on bad things) | Lambda triggered by GuardDuty findings, EventBridge automation |
| **Compliance reports** | Artifact, Audit Manager |

---

## 📋 AWS Compliance Programs

AWS is audited against ~140+ frameworks. You don't memorize them all — know the categories:

- **SOC 1 / SOC 2 / SOC 3** — auditor reports
- **ISO 27001 / 27017 / 27018** — international security standards
- **PCI DSS** — payment card data
- **HIPAA** — healthcare (US)
- **FedRAMP** (Moderate, High) — US federal
- **GDPR** — EU data protection
- **NIST 800-53** — US federal controls

You download reports from **AWS Artifact** (no fee, self-service).

---

## 🚨 Exam Traps

1. **Customer is responsible for OS patching on EC2.** Not AWS.
2. **AWS is responsible for OS patching of managed services** (RDS, Lambda, Fargate).
3. **Root user should NOT be used for daily work** — even by the account owner.
4. **MFA should be enabled** on root + all human IAM users.
5. **Deny always wins over Allow** in IAM policy evaluation.
6. **IAM is global** (not per-Region).
7. **GuardDuty does NOT prevent attacks** — it detects them. Use WAF / Shield to prevent.
8. **Macie is specifically for S3** (and discovers PII). Not for EC2.
9. **Inspector** scans EC2 / ECR images / Lambda for **vulnerabilities**, not for runtime threats.
10. **CloudTrail vs Config** — CloudTrail = who did what API call; Config = what does the resource configuration look like now and over time.
11. **Shield Standard is free and automatic.** Shield Advanced is ~$3,000/month with DDoS Response Team (DRT) access and cost protection.
12. **AWS Artifact provides COMPLIANCE REPORTS** (SOC 2, ISO, etc.) — it does not perform compliance.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "AWS handles all my security" | AWS handles security OF the cloud; you handle security IN the cloud |
| "S3 is automatically secure" | You must configure bucket policies, encryption, Block Public Access |
| "IAM users are required for every workload" | Prefer IAM Roles (for AWS services) and Identity Center (for humans) |
| "WAF and Shield are the same" | WAF = HTTP-layer rules (SQLi, geos); Shield = DDoS protection |
| "GuardDuty blocks threats" | GuardDuty detects + alerts; remediation is up to you (often via EventBridge → Lambda) |
| "Encryption is on for everything by default" | Many services encrypt by default now (S3, EBS new volumes), but not all |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Shared Responsibility Model** | Security OF the cloud (AWS) vs IN the cloud (you) |
| **Root user** | The account-creator login — protect it, don't use daily |
| **IAM User** | Long-lived identity for a person or app |
| **IAM Group** | Bucket of users sharing permissions |
| **IAM Role** | Temporary credentials assumed by services or users |
| **IAM Policy** | JSON Allow/Deny rules for actions on resources |
| **Least Privilege** | Grant only the permissions needed, nothing more |
| **MFA** | Multi-Factor Authentication |
| **AWS Organizations** | Multi-account management |
| **SCP** | Service Control Policy — guardrails at org/OU level |
| **KMS** | Key Management Service for encryption keys |
| **CloudHSM** | Dedicated FIPS 140-2 Level 3 HSM |
| **Secrets Manager** | Store + auto-rotate secrets |
| **ACM** | AWS Certificate Manager (free TLS certs) |
| **WAF** | Web Application Firewall (Layer 7) |
| **Shield Standard / Advanced** | DDoS protection (free / $3K/mo with DRT) |
| **GuardDuty** | Threat detection from logs (DNS, VPC, CloudTrail) |
| **Macie** | PII discovery in S3 |
| **Inspector** | Vulnerability scanning (EC2, ECR, Lambda) |
| **Config** | Resource config tracking + compliance rules |
| **CloudTrail** | API call audit log |
| **Security Hub** | Aggregated security findings dashboard |
| **Detective** | Investigation/RCA tool for security events |
| **Artifact** | Self-service compliance reports |
| **Identity Center** | Federated SSO across AWS accounts + 3rd party apps |
| **Encryption in transit** | Data encrypted while moving (TLS/SSL) |
| **Encryption at rest** | Data encrypted while stored (KMS, SSE) |

---

## ✅ Module 6 Summary

You now know:
- 🛡️ Shared Responsibility Model (security OF cloud = AWS; IN cloud = you)
- 👤 IAM: Users, Groups, Roles, Policies — least privilege, MFA, no root for daily
- 🏢 Organizations + SCPs for multi-account guardrails
- 🔐 KMS for encryption, CloudHSM for FIPS 140-2 L3
- 🛡️ Security services taxonomy: WAF/Shield (preventive), GuardDuty/Macie/Inspector (detective), Config/CloudTrail (audit), Security Hub (aggregator), Artifact (compliance reports)
- 📋 Compliance: SOC, ISO, PCI, HIPAA, FedRAMP, GDPR — get reports from Artifact

**Next steps:**
1. 🎥 [Videos](./Videos.md)
2. ✏️ [Quiz](./Quiz.md)
3. 📋 [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ [Module 7: Management, Monitoring & Pricing](../Module-07-Management-Monitoring-Pricing/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- 📖 [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- 📖 [AWS Security Whitepaper (Best Practices)](https://docs.aws.amazon.com/whitepapers/latest/aws-security-best-practices/welcome.html)
- 📖 [AWS Compliance Programs](https://aws.amazon.com/compliance/programs/)
- 📖 [AWS Artifact](https://aws.amazon.com/artifact/) — download SOC 2, ISO reports
