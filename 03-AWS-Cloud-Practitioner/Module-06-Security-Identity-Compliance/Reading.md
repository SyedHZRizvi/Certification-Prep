# Module 6: Security, Identity & Compliance 🔐

> **Why this module matters:** Security & Compliance is **30% of the exam** — the LARGEST domain. If you only deeply learn one module, make it this one. The Shared Responsibility Model alone will appear in 4–6 questions.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Cloud Fundamentals](../Module-01-Cloud-Fundamentals/Reading.md) — IaaS vs PaaS vs SaaS (the boundary that the Shared Responsibility Model rides on)
> - [Core Storage](../Module-03-Core-Storage/Reading.md) — what an S3 bucket policy is
> - [Networking](../Module-04-Networking-CDN/Reading.md) — Security Groups, NACLs, VPCs
> - The general security mental model: confidentiality, integrity, availability — the **CIA Triad** (Saltzer & Schroeder, *"The Protection of Information in Computer Systems,"* Proceedings of the IEEE, 1975)
> - Authentication vs authorization (CompTIA Security+ chapter 1 level is plenty)
>
> If you're familiar with the term "least privilege" and have ever set up a router firewall, you have enough background.

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

The Shared Responsibility Model is AWS's formal articulation of the security boundary between cloud provider and customer. AWS first published it as a whitepaper in 2011 (*"Amazon Web Services: Overview of Security Processes,"* AWS Whitepapers) and has refreshed it most recently in 2024. The same pattern appears in Microsoft's *Azure Shared Responsibility Model* (Microsoft Docs, 2017) and Google's *GCP Shared Responsibility Matrix* — but AWS's version is the most-tested on the exam.


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

IAM operationalizes the **principle of least privilege** — articulated by Jerome Saltzer and Michael Schroeder in *"The Protection of Information in Computer Systems"* (Proceedings of the IEEE, 1975). Their eight design principles for security (least privilege, fail-safe defaults, complete mediation, open design, separation of privilege, least common mechanism, psychological acceptability, work factor) are the philosophical bedrock of every modern IAM system. CompTIA Security+ tests them by name; CLF-C02 tests them by application.

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

## 🏛️ Case Study — The Capital One Breach (March–July 2019)

**Situation.** Capital One was mid-migration to AWS (see Module 1's case). The bank's web application firewall (WAF) was hosted on EC2 in front of internal services. The WAF instance had an IAM role attached granting it permissions to list and read S3 buckets in the Capital One AWS account. The role was **over-permissioned** — it could read essentially every customer-data bucket, not just the buckets the WAF legitimately needed.

In March 2019, a former AWS engineer named Paige Thompson — who had left AWS in late 2016 — discovered a **Server-Side Request Forgery (SSRF)** vulnerability in Capital One's misconfigured WAF. SSRF lets an attacker trick a web server into making HTTP requests on the attacker's behalf. Thompson used SSRF to query the EC2 Instance Metadata Service (IMDS v1, which doesn't require session tokens) at `http://169.254.169.254/latest/meta-data/iam/security-credentials/[role-name]`, retrieving temporary credentials for the WAF's IAM role.

**Decision (the breach steps).** Once Thompson had the IAM credentials:

1. She used the AWS CLI from her own machine, authenticated as the WAF role, to list all S3 buckets in the Capital One account (`aws s3 ls`).
2. She used `aws s3 sync` to download ~30 GB of S3 data including ~106 million applicant records from a credit-card-application bucket.
3. She posted snippets on GitHub and a public Slack channel, where another security researcher noticed and reported it to Capital One on July 17, 2019.

**Outcome.** Capital One disclosed the breach July 29, 2019. The damage:

- ~106 million customers affected (US + Canada)
- ~140,000 SSN exposures, ~80,000 bank account numbers, ~1M Canadian SIN numbers
- **$80M civil penalty from the OCC** (Office of the Comptroller of the Currency) in 2020
- **~$190M+ in customer settlement** (2021 class-action approval)
- Paige Thompson convicted in 2022 (wire fraud + unauthorized access), sentenced to time served plus 5 years probation
- The breach is now case study #1 in essentially every cloud-security curriculum

**Root cause analysis (what AWS did vs what the customer did).**
- AWS infrastructure was **not** breached. The hypervisor, the underlying EC2 hardware, the AWS network, the AWS IAM service all functioned correctly. They authenticated and authorized exactly what they were told to.
- The customer was responsible for:

  1. The WAF misconfiguration (the SSRF vulnerability)
  2. The over-permissioned IAM role (violated least privilege — Saltzer & Schroeder, 1975)
  3. The choice to use IMDS v1 (which AWS had already announced was being deprecated in favor of IMDS v2's session-token model — released November 2019, three months after the breach)
  4. Insufficient detective controls (GuardDuty was apparently not configured to alert on anomalous S3 listing patterns; CloudTrail logs existed but weren't being monitored in near-real-time)

**Lesson for the exam / for practitioners.** Capital One is *the* canonical illustration of the Shared Responsibility Model. On CLF-C02, expect 3–5 questions where the exam asks "who is responsible for X?" — and the answer is "the customer" because **the breach mechanism (misconfigured WAF + over-permissioned IAM + slow detection) is entirely on the customer side of the boundary**. Practitioners take three operational lessons:

1. **Least privilege isn't a slogan — it's a control**. The WAF role should have been limited to one bucket, not all buckets.
2. **IMDS v2 is now the default**. Force it on; block IMDS v1 at the org level via SCP.
3. **GuardDuty + Macie + automated alerting** would have flagged the bulk-S3-download pattern in hours, not weeks.

**Discussion (Socratic).**
- Q1: Capital One's lawyers argued in court that AWS bore partial responsibility because IMDS v1 was the default at the time. AWS argued the customer chose the WAF configuration and the IAM permissions. Who is right? At what point does "the default" of the platform become the provider's responsibility vs the customer's?
- Q2: Imagine you are the new CISO at Capital One in August 2019. Build a 30-day plan to ensure this exact attack class cannot happen again. What's the *first* thing you change? Defend the ordering.
- Q3: GuardDuty *would* have detected this pattern but Capital One's GuardDuty findings were not being acted on in near-real-time. Is the failure here "Detective controls weren't configured" or "Responsive controls weren't automated"? What's the difference, and which one matters more?

---

## ✅ Module 6 Summary

You now know:

- 🛡️ Shared Responsibility Model (security OF cloud = AWS; IN cloud = you)
- 👤 IAM: Users, Groups, Roles, Policies — least privilege, MFA, no root for daily
- 🏢 Organizations + SCPs for multi-account guardrails
- 🔐 KMS for encryption, CloudHSM for FIPS 140-2 L3
- 🛡️ Security services taxonomy: WAF/Shield (preventive), GuardDuty/Macie/Inspector (detective), Config/CloudTrail (audit), Security Hub (aggregator), Artifact (compliance reports)
- 📋 Compliance: SOC, ISO, PCI, HIPAA, FedRAMP, GDPR — get reports from Artifact
- 🚨 The Capital One breach (2019) as the canonical Shared Responsibility cautionary tale

**Next steps:**
1. 🎥 [Videos](./Videos.md)
2. ✏️ [Quiz](./Quiz.md)
3. 📋 [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ [Module 7: Management, Monitoring & Pricing](../Module-07-Management-Monitoring-Pricing/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 7 (Mgmt/Monitoring) covers CloudTrail and AWS Config in operational depth — the detective controls Capital One under-used. Module 8 (Well-Architected) revisits Security as one of the 6 pillars.
> - Cross-course: `04-AWS-Solutions-Architect-Associate` Module 6 deepens with VPC Flow Logs, Network Firewall, AWS WAF rule design, and the SAA-C03 security-specific scenarios. `09-CompTIA-Security-Plus` (SY0-701) Modules 6, 7, and 9 cover IAM, encryption, and incident response from the vendor-neutral side — every concept transfers.
> - Practice: Practice Exam 2 has 13 security questions (Qs 1–12 + 50). Final Mock Exam has 19 security questions (the largest single domain by question count, ~30% of exam).

---

## 💬 Discussion — Socratic prompts

1. **Root user paradox.** The root user is the most powerful identity in any AWS account, but the official guidance is "almost never use it." If it's that dangerous, why does AWS keep it? Could the root user be eliminated? Argue why AWS keeps it and what the practical workflow looks like.
2. **SCPs vs IAM policies.** Both restrict permissions. When does an SCP belong at the org level vs an IAM policy at the user/role level? Walk through a concrete scenario where you'd use both layered together.
3. **GuardDuty vs Inspector vs Macie.** All three are "AWS security services that detect something." Build the decision tree: when does each one win? Where do they overlap?
4. **Shield Standard vs Shield Advanced economics.** Shield Standard is free. Shield Advanced is ~$3,000/month + traffic. For a typical SaaS doing $10M ARR, when does Shield Advanced become defensible? What's the *threshold event* that justifies the upgrade?
5. **KMS Customer-Managed Keys vs AWS-Managed Keys.** Both encrypt your data. CMKs let you set rotation, restrict who can use them via key policy, and revoke. When does the additional CMK overhead become necessary vs theater?

---

## 📚 Further Reading (Optional)

- 📖 [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- 📖 [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- 📖 [AWS Security Whitepaper (Best Practices)](https://docs.aws.amazon.com/whitepapers/latest/aws-security-best-practices/welcome.html)
- 📖 [AWS Compliance Programs](https://aws.amazon.com/compliance/programs/)
- 📖 [AWS Artifact](https://aws.amazon.com/artifact/) — download SOC 2, ISO reports

---

## 📚 Further sources (this module)

- ⚖️ ***United States v. Paige Thompson* (US District Court, Western District of Washington, 2019)** — primary-source criminal indictment and trial documents. The complaint is public; pages 4–9 walk through the SSRF + IMDS attack in technical detail.
- 📰 **Capital One — *"Information on the Capital One Cyber Incident"* (capitalone.com/facts2019, 2019; updated 2020)** — Capital One's own breach disclosure and remediation summary.
- 📄 **Office of the Comptroller of the Currency — *Consent Order, Capital One, August 2020*** — the OCC's $80M civil penalty and a 17-page list of what Capital One must change. Free PDF on the OCC website.
- 📄 **Saltzer, J. & Schroeder, M. — *"The Protection of Information in Computer Systems"* (Proceedings of the IEEE, September 1975)** — the foundational paper that defined least privilege, separation of privilege, complete mediation, etc. ~30 pages; still tested by name on CompTIA Security+ and CISSP.
- 📖 **AWS — *"Security Pillar — AWS Well-Architected Framework"* whitepaper (2024 refresh)** — AWS's own articulation of the Security pillar. Free PDF; ~80 pages.
- 📖 **AWS Builders' Library — *"My CI/CD pipeline is my release captain"* by Sean Kelly** — explains the deployment-pipeline security controls that, applied to Capital One's stack, would have caught the misconfiguration before production. Free read.
- 🎓 **CIS Controls v8 + CIS AWS Benchmark v3** (Center for Internet Security, 2024) — free, vendor-neutral baseline of controls that map cleanly to AWS services. The benchmark is the most widely-used hardening checklist after Well-Architected.
