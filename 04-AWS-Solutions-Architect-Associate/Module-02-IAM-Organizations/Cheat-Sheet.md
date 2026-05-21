# 📋 Module 2 Cheat Sheet: IAM & Organizations

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🔑 IAM Identities

| Identity | Long-term creds? | When to use |
|----------|------------------|-------------|
| **Root** | Yes (lock with MFA) | Account creation, ~6 root-only tasks |
| **IAM User** | Yes | Legacy; external services without IdP |
| **IAM Group** | No (just container) | Bag of users with shared permissions |
| **IAM Role** | No (temp via STS) | EC2, Lambda, cross-account, federated |
| **Federated** | No | SSO via Okta, AD, Google, etc. |

🧠 **"For humans → Identity Center. For workloads → Role. For 3rd parties → Role + ExternalId."**

---

## 📜 Policy Types

| Policy | Attached to | Grant or Limit? |
|--------|-------------|-----------------|
| Identity policy | User/group/role | Grant |
| Resource policy | Bucket, queue, KMS key, etc. | Grant |
| Permissions Boundary | One user/role | Cap (limit) |
| SCP (Org) | Account/OU | Cap (limit) |
| Session policy | A specific session | Cap (limit) |
| VPC endpoint policy | A VPC endpoint | Grant/Cap |

---

## 🧮 Evaluation Logic (MEMORIZE)

```
1. Explicit DENY?           → DENIED
2. SCP allows?              → no → DENIED
3. Permissions boundary OK? → no → DENIED
4. Identity OR resource ALLOW? → yes → ALLOWED
                              no  → DENIED (implicit)
```

🧠 **"Deny > Boundary > SCP > Allow"**

Same account: identity ∪ resource (either allows)
Cross-account: identity ∩ resource/role (both must allow)

---

## 🏢 AWS Organizations

```
   Management Account (no SCP applies here)
            │
       OU: Prod  ── SCP: deny CloudTrail stop
            │
     Acct-Web, Acct-Pay, ...
```

- **SCPs** = guardrails (deny actions org-wide)
- **Consolidated billing** = one invoice; pooled discounts
- **Identity Center** = SSO across all accounts via permission sets

---

## 🔄 STS AssumeRole Cross-Account Pattern

```
[Account A user] ──sts:AssumeRole──▶ [Account B role]
                                       trust: Account A
                                       perm:  s3:GetObject
  ↓ returns temp creds (15min–12hr)
  uses temp creds → S3 in Account B
```

**3rd-party vendor?** Add `Condition: sts:ExternalId = <secret>` to prevent confused-deputy.

---

## 🛂 Common Scenarios → Right Answer

| Scenario | Answer |
|----------|--------|
| EC2 → S3 | IAM Role + instance profile |
| Lambda → DynamoDB | Lambda execution role |
| Dev account → Prod read-only | Cross-account role |
| 3rd-party SaaS access | Role + ExternalId |
| Block users from disabling CloudTrail | SCP deny `cloudtrail:Stop*`, `cloudtrail:DeleteTrail` |
| Allow resources only in 2 regions | SCP with `aws:RequestedRegion` condition |
| Cap one dev to "S3 only no matter what" | Permissions boundary |
| 30 accounts SSO for humans | IAM Identity Center + IdP |
| Mobile app users need temp AWS creds | Cognito Identity Pools |
| Require MFA for delete actions | IAM policy with `aws:MultiFactorAuthPresent` condition |

---

## 🏆 Exam Power Phrases

✅ Usually right:
- "Use an IAM Role attached via instance profile"
- "Use STS AssumeRole for cross-account access"
- "Use IAM Identity Center for human SSO"
- "Apply least privilege"
- "Use SCPs for org-wide guardrails"
- "Encrypt with KMS; audit with CloudTrail"

❌ Usually wrong:
- "Store access keys in source code"
- "Use root user daily"
- "Share IAM user credentials with the vendor"
- "Make the S3 bucket public"
- "Disable IAM for the workload"

---

## ⚠️ Anti-Patterns

- ❌ Long-term access keys on EC2 / Lambda / ECS
- ❌ IAM user for 3rd-party vendor (use role + ExternalId)
- ❌ Wildcard `"*"` on production policies
- ❌ Root access keys (never)
- ❌ MFA on regular users but NOT on root

---

## 🗓️ Key Numbers

| Item | Value |
|------|-------|
| STS token lifetime (AssumeRole) | 15 min – 12 hr |
| STS GetSessionToken (root) | up to 1 hour |
| Permissions boundary | 1 per identity |
| SCP attach limit | 5 per OU/account |
| IAM password policy | Min length up to 128 chars |

---

## ✏️ Quick Self-Check

1. Who wins: Allow vs Deny? ___
2. What's the difference between SCP and permissions boundary? ___
3. What is ExternalId for? ___
4. EC2 → S3, what's the right pattern? ___
5. Cross-account access requires WHAT on both sides? ___

If you can answer all 5 in under 60 seconds, you own IAM. ✅

---

➡️ [Module 3: EC2 Deep Dive](../Module-03-EC2-Deep-Dive/Reading.md)
