# ✏️ Module 6 Quiz: Security, Identity & Compliance

> **Instructions:** 26 questions (Security is the largest domain). Aim for 22/26 minimum. No peeking!

---

## Questions

### Q1. Per the Shared Responsibility Model, who is responsible for patching the guest OS on an EC2 instance?
A. AWS
B. The customer
C. Split 50/50
D. AWS during business hours

---

### Q2. Per the Shared Responsibility Model, who is responsible for the physical security of AWS data centers?
A. AWS
B. The customer
C. The country where the DC is located
D. AWS only for premium customers

---

### Q3. Which IAM best practice is MOST important?
A. Use the root user for daily admin tasks
B. Share IAM credentials across the team
C. Enable MFA and grant least privilege
D. Use a single shared IAM user for everyone

---

### Q4. To allow an EC2 instance to read from an S3 bucket WITHOUT embedding credentials, you should:
A. Create an IAM user, put the access keys on the instance
B. Attach an IAM Role to the EC2 instance with the right S3 permissions
C. Make the S3 bucket public
D. Use the root user's credentials

---

### Q5. In an IAM policy, if a user has both an "Allow s3:GetObject" and a "Deny s3:GetObject":
A. Allow wins
B. Deny wins (explicit deny always wins)
C. Whichever was attached most recently
D. The user gets read-write

---

### Q6. Which service discovers and classifies PII (e.g., credit card numbers, SSNs) inside Amazon S3 buckets?
A. GuardDuty
B. Macie
C. Inspector
D. Trusted Advisor

---

### Q7. Which service detects anomalous behavior in your AWS account (crypto-mining, port scans, unusual API calls) by analyzing logs?
A. GuardDuty
B. Macie
C. WAF
D. Shield

---

### Q8. Which service scans EC2 instances, ECR container images, and Lambda functions for software vulnerabilities (CVEs)?
A. GuardDuty
B. Inspector
C. Macie
D. Config

---

### Q9. To block SQL injection and XSS attacks at the HTTP layer in front of CloudFront or an ALB, use:
A. AWS Shield Standard
B. AWS WAF
C. AWS GuardDuty
D. AWS Network Firewall

---

### Q10. AWS Shield Standard is:
A. A premium subscription costing $3,000/month
B. Free and automatically enabled for ELB, CloudFront, Route 53
C. Only for Enterprise Support customers
D. A vulnerability scanner

---

### Q11. AWS Shield Advanced provides which extra benefit over Shield Standard?
A. Free TLS certificates
B. 24/7 access to the AWS DDoS Response Team + cost protection during attacks
C. Multi-region replication
D. Free S3 storage

---

### Q12. Which service stores secrets (DB passwords, API keys) with built-in automatic rotation?
A. AWS Systems Manager Parameter Store
B. AWS Secrets Manager
C. S3 with KMS
D. IAM roles

---

### Q13. AWS KMS is used to:
A. Manage IAM users
B. Create and manage encryption keys for AWS services and your applications
C. Block DDoS attacks
D. Audit API calls

---

### Q14. For workloads that require a dedicated FIPS 140-2 Level 3 hardware security module, use:
A. KMS Customer Managed Keys
B. AWS CloudHSM
C. Secrets Manager
D. AWS Certificate Manager

---

### Q15. AWS Certificate Manager (ACM) provides:
A. Paid SSL/TLS certificates only
B. Free public TLS certificates for use with ELB, CloudFront, API Gateway
C. Code-signing certificates only
D. Compliance audits

---

### Q16. Which service tracks WHO made WHICH API call in your AWS account?
A. AWS Config
B. AWS CloudTrail
C. CloudWatch
D. Trusted Advisor

---

### Q17. Which service tracks resource CONFIGURATIONS over time and evaluates them against compliance rules?
A. AWS CloudTrail
B. AWS Config
C. GuardDuty
D. CloudWatch

---

### Q18. To centrally aggregate security findings from GuardDuty, Inspector, Macie, and partner tools in a single dashboard, use:
A. AWS Security Hub
B. AWS Artifact
C. CloudWatch Logs
D. AWS Detective

---

### Q19. Where do you go to download SOC 2 / ISO 27001 / PCI DSS compliance reports about AWS?
A. AWS Trusted Advisor
B. AWS Artifact
C. AWS Security Hub
D. AWS Config

---

### Q20. AWS Organizations + Service Control Policies (SCPs) are used to:
A. Encrypt data at rest
B. Apply guardrails across multiple AWS accounts (e.g., "no account can launch EC2 outside us-east-1")
C. Manage IAM users in one account
D. Provide DDoS protection

---

### Q21. The IAM root user should:
A. Be used for all daily tasks
B. Be locked down with MFA and used only for a small set of account-level tasks
C. Be shared with developers
D. Not have MFA enabled

---

### Q22. Which is the BEST approach for federated workforce login across multiple AWS accounts and 3rd-party SaaS apps?
A. Create individual IAM users in every account
B. Use AWS IAM Identity Center (formerly AWS SSO)
C. Use the root user
D. Disable IAM

---

### Q23. Which of the following is a CUSTOMER responsibility for an RDS database?
A. Patching the underlying OS
B. Managing the database engine binaries
C. Granting permissions to database users + securing the data inside
D. Physical hardware maintenance

---

### Q24. AWS Audit Manager is BEST described as:
A. A web app firewall
B. A service that helps continuously audit AWS usage for compliance with frameworks like PCI, HIPAA
C. A DDoS protection layer
D. A migration tool

---

### Q25. To centralize and investigate the root cause of a security event using ML and graph analysis, the BEST service is:
A. AWS Detective
B. GuardDuty
C. Macie
D. Inspector

---

### Q26. Encryption "in transit" refers to:
A. Data encrypted while stored on disk
B. Data encrypted as it moves over the network (TLS/SSL)
C. Data encrypted only in memory
D. Compressed data

---

## 🎯 Answers + Explanations

### Q1: **B. The customer**
On EC2 (IaaS), the customer is responsible for everything ABOVE the hypervisor — including OS patching. AWS only patches the hypervisor and hardware.

### Q2: **A. AWS**
Physical security of data centers is unambiguously AWS's responsibility (security OF the cloud).

### Q3: **C. Enable MFA and grant least privilege**
The two cornerstone IAM best practices. Never share creds, never use root for daily work.

### Q4: **B. Attach an IAM Role to the EC2 instance with the right S3 permissions**
Roles deliver temporary credentials via instance metadata — no long-lived access keys to leak.

### Q5: **B. Deny wins (explicit deny always wins)**
Fundamental IAM rule: explicit Deny overrides any Allow. Implicit deny (no rule) loses to explicit Allow.

### Q6: **B. Macie**
Macie uses ML to discover sensitive data (PII, credit cards) in S3. Specifically S3-focused.

### Q7: **A. GuardDuty**
GuardDuty analyzes CloudTrail, VPC Flow Logs, DNS logs, and EKS audit logs to detect anomalies.

### Q8: **B. Inspector**
Inspector runs vulnerability scans against EC2, container images in ECR, and Lambda functions.

### Q9: **B. AWS WAF**
WAF inspects HTTP requests and blocks SQLi, XSS, geographic, IP-based, and rate-based rules.

### Q10: **B. Free and automatically enabled for ELB, CloudFront, Route 53**
Shield Standard = free, always-on basic DDoS protection. No subscription required.

### Q11: **B. 24/7 access to the AWS DDoS Response Team + cost protection during attacks**
Shield Advanced (~$3K/mo) adds DRT access, enhanced detection, and refunds for autoscaling/data-transfer costs during attacks.

### Q12: **B. AWS Secrets Manager**
Secrets Manager stores secrets and automatically rotates RDS/RedShift/DocumentDB credentials. Parameter Store is similar but no built-in rotation.

### Q13: **B. Create and manage encryption keys for AWS services and your applications**
KMS is the central key management service across all AWS encryption use cases.

### Q14: **B. AWS CloudHSM**
CloudHSM provides dedicated, single-tenant FIPS 140-2 Level 3 hardware security modules.

### Q15: **B. Free public TLS certificates for use with ELB, CloudFront, API Gateway**
ACM-provisioned certs are free for use with AWS services that integrate with ACM. Private CA (separate) is paid.

### Q16: **B. AWS CloudTrail**
CloudTrail = "who called which AWS API when from where." Audit trail of API activity.

### Q17: **B. AWS Config**
Config = "what does this resource look like now and over time, and is it compliant with rules?"

### Q18: **A. AWS Security Hub**
Security Hub aggregates findings from GuardDuty, Inspector, Macie, partner tools, and runs benchmarks (CIS, PCI).

### Q19: **B. AWS Artifact**
Artifact is the self-service portal for downloading AWS compliance reports (SOC, ISO, PCI, FedRAMP, etc.).

### Q20: **B. Apply guardrails across multiple AWS accounts**
SCPs set the maximum permissions for accounts/OUs. They don't grant access — they cap it.

### Q21: **B. Be locked down with MFA and used only for a small set of account-level tasks**
Best practice: MFA on root, no programmatic access keys, used only for tasks like billing or closing the account.

### Q22: **B. Use AWS IAM Identity Center (formerly AWS SSO)**
Identity Center provides federated SSO across multiple AWS accounts + many SaaS apps, integrating with Active Directory / Okta / Entra ID.

### Q23: **C. Granting permissions to database users + securing the data inside**
RDS is PaaS — AWS handles OS / engine binaries / hardware. The customer handles users, schema, and data access.

### Q24: **B. A service that helps continuously audit AWS usage for compliance**
Audit Manager automates evidence collection for compliance frameworks (PCI, HIPAA, SOC, etc.).

### Q25: **A. AWS Detective**
Detective uses ML and graph analysis to help you investigate the root cause of security events surfaced by GuardDuty, etc.

### Q26: **B. Data encrypted as it moves over the network (TLS/SSL)**
"In transit" = on the wire. "At rest" = on disk. Both are important and tested.

---

## 📊 Score Yourself

- 25–26 → 🏆 Security pro. The biggest exam domain is locked in.
- 22–24 → ✅ Solid. Review wrong answers.
- 18–21 → ⚠️ Re-read Shared Responsibility + service catalog table.
- <18 → 🔁 Restart Module 6 — this is 30% of the exam, don't skimp.

---

## 🃏 Add To Your Flashcards

- Shared Responsibility (OF vs IN, with 3 examples each)
- IAM Users/Groups/Roles/Policies (one-line each)
- Explicit Deny always wins
- GuardDuty (anomalies) / Macie (S3 PII) / Inspector (vulns)
- WAF (HTTP layer) / Shield Std (free DDoS) / Shield Adv (DRT + cost protection)
- KMS vs CloudHSM
- CloudTrail (API audit) vs Config (resource config drift)
- Artifact (download reports) vs Audit Manager (collect evidence)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7: Management, Monitoring & Pricing](../Module-07-Management-Monitoring-Pricing/Reading.md)
