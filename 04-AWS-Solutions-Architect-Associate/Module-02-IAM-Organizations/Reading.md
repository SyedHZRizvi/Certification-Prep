# Module 2: IAM, Organizations & Cross-Account Access 🔐

> **Why this module matters:** The "Design Secure Architectures" domain is **30%** of SAA-C03 — the largest single domain. Nearly every question in it pivots on IAM. If you don't know the difference between an identity policy and a resource policy, between an SCP and a permissions boundary, or how AssumeRole works, you can't pass this exam.

---

## 🏨 A Story: The Grand Hotel Key System

Picture the Grand Cascade Hotel. The General Manager (Maya) is responsible for *everyone* — guests, housekeeping, vendors, security guards.

- **Guests** get **room keys** that only open *their* room. Their key dies on checkout day.
- **Housekeepers** get keys for *all guest rooms on floors 3-12*, but not the penthouse, and only during their shift.
- A plumber arrives for an hour — instead of cutting a permanent key, the front desk hands them a **temporary credential** that expires at 5 PM.
- The **vault** combination is split between Maya and the finance director. Neither alone can open it.
- A **camera log** records who used which door, when. If money goes missing, Maya pulls the tape.

Now translate:
- **Room key → IAM policy** (says what you can open)
- **Housekeeper's key → IAM group** (shared keys for a job function)
- **Plumber's temp credential → STS AssumeRole** (short-lived, expires)
- **Vault dual-control → MFA / SCPs** (extra barrier on dangerous actions)
- **Camera log → CloudTrail** (audit of every door swipe / API call)

Master that hotel and you've mastered AWS IAM. Now let's get specific.

---

## 🔑 The IAM Core Vocabulary

### Principal, Action, Resource, Condition (PARC)

Every AWS API call answers four questions:
1. **Principal** — Who's making the request? (a user, role, federated identity, service)
2. **Action** — What are they trying to do? (`s3:GetObject`, `ec2:RunInstances`)
3. **Resource** — Which resource? (`arn:aws:s3:::my-bucket/*`)
4. **Condition** — Under what conditions? (only from specific IP, only with MFA, only on certain tags)

An **IAM policy** is a JSON document combining these:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:ListBucket"],
      "Resource": [
        "arn:aws:s3:::reports-prod",
        "arn:aws:s3:::reports-prod/*"
      ],
      "Condition": {
        "IpAddress": { "aws:SourceIp": "203.0.113.0/24" },
        "Bool":      { "aws:MultiFactorAuthPresent": "true" }
      }
    }
  ]
}
```

🎯 **MEMORIZE THIS:** Effect is `Allow` or `Deny`. **Deny ALWAYS wins** in IAM evaluation, even if 100 other policies say Allow.

---

## 👥 IAM Identities — Users, Groups, Roles

| Identity | What it is | When to use | Has credentials? |
|----------|------------|-------------|------------------|
| **Root user** | The original account owner | Almost never (only for ~6 root-only tasks) | Yes — guard with MFA |
| **IAM User** | A long-term identity for a *human* (legacy) or a *service that lives outside AWS* | Decreasingly recommended; prefer Identity Center for humans | Yes — password and/or access key |
| **IAM Group** | A bag of users with shared permissions | Organize humans by job function | No — just a container |
| **IAM Role** | An identity that's *assumed* by someone/something for a short time | EC2 instance access to S3, cross-account access, federation | No long-term creds — temporary STS tokens |
| **Federated user** | An identity from your corporate IdP (Okta, Active Directory, Google) | SSO into AWS | No AWS credentials — uses STS |

### Roles vs Users — the distinction the exam loves

A **Role**:
- Has no permanent password or access key.
- Is *assumed* via `sts:AssumeRole` returning temporary credentials (typically 15 min – 12 hours).
- Has a **trust policy** that says *who* can assume it.
- Has one or more **permission policies** that say *what* the assumer can then do.

🎯 **Exam pattern:** "An EC2 instance needs to read an S3 bucket. What is the BEST practice?"
- ❌ Store an access key on disk
- ❌ Bake an access key into the AMI
- ✅ **Attach an IAM Role to the EC2 instance via an instance profile** — temporary credentials are auto-rotated by AWS.

---

## 📜 Policy Types — More Than Just "IAM Policies"

There are **7+ kinds** of policy that can apply to a request. Know these cold:

| Policy type | Attached to | Purpose | Identity-based or Resource-based |
|-------------|-------------|---------|----------------------------------|
| **Identity-based (managed or inline)** | User, group, role | What the identity can do | Identity-based |
| **Resource-based** | S3 bucket, SQS queue, KMS key, Lambda function, etc. | Who can access this resource | Resource-based |
| **Permissions Boundary** | A user or role | Caps the *maximum* permissions they can ever have | Identity-based (limit, not grant) |
| **Service Control Policy (SCP)** | Org account / OU | Caps the maximum permissions for *every* identity in those accounts | Org-level guardrail |
| **Session policy** | A specific STS session | Limits a single session inline at AssumeRole time | Session-only |
| **ACL (Access Control List)** | S3 buckets/objects (legacy) | Coarse cross-account access | Legacy — prefer policies |
| **VPC endpoint policy** | A VPC endpoint | What can flow through this endpoint | Resource-based |

### Identity policy AND resource policy — what happens?

In the same account: **Union** — if EITHER allows, access is allowed (and no Deny blocks).
Cross-account: **Intersection** — BOTH the source account's identity policy AND the destination resource policy must allow.

🎯 **Exam pattern:** "Account A's user has full S3 access via identity policy. They try to read Account B's bucket — which has no policy on it. Result?" → **Denied.** Cross-account access requires the bucket policy in Account B to explicitly grant Account A.

---

## 🧮 Policy Evaluation Logic (Single Account)

```
        START
          │
   1. Explicit DENY?  ── yes → DENIED (done)
          │ no
   2. SCP allows?     ── no  → DENIED
          │ yes
   3. Permissions boundary allows?  ── no → DENIED
          │ yes
   4. Identity policy or resource policy ALLOW?
          │ yes
       ALLOWED
          │ no
       DENIED (implicit deny)
```

🧠 **Memory hook:** **DENY > Boundary > SCP > Allow.** When in doubt, an explicit Deny anywhere kills the request.

---

## 🏢 AWS Organizations — Multi-Account Governance

Real companies don't run one AWS account — they run dozens (one per team, one per env, one for security tooling). **AWS Organizations** lets you group them into a hierarchy and apply policies across the whole tree.

```
                 Management Account (formerly "master")
                          │
                  ┌───────┴─────────┐
              [OU: Prod]        [OU: Dev]
                  │                  │
       [Acct: Prod-Payments]   [Acct: Dev-Sandbox]
       [Acct: Prod-Web]        [Acct: Dev-Demo]
```

### Why use Organizations?

| Benefit | What it means |
|---------|---------------|
| **Consolidated Billing** | One bill for all accounts; volume discounts pool across accounts |
| **Service Control Policies (SCPs)** | Org-wide guardrails — e.g., "no account in OU=Prod can disable CloudTrail" |
| **Centralized CloudTrail** | Single trail for all org accounts |
| **Reserved Instance / Savings Plan sharing** | Discounts cover any account in the org |
| **Service-linked features** | Identity Center, GuardDuty, Security Hub, Backup — all org-aware |

### SCPs — what they ARE and ARE NOT

- ✅ SCPs **define the maximum** permissions for member accounts.
- ✅ They affect IAM users, roles, AND the root user of those accounts.
- ❌ SCPs alone **do NOT grant** permissions — they only limit. You still need IAM policies to actually allow actions.
- ❌ SCPs **don't affect** the Management account itself.

🎯 **Exam pattern:** "How can you prevent any user in any account in the org from disabling CloudTrail?" → **SCP that Denies `cloudtrail:StopLogging` and `cloudtrail:DeleteTrail`.**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyDisablingCloudTrail",
      "Effect": "Deny",
      "Action": [
        "cloudtrail:StopLogging",
        "cloudtrail:DeleteTrail"
      ],
      "Resource": "*"
    }
  ]
}
```

---

## 🆔 IAM Identity Center (Successor to AWS SSO)

The modern way to give *humans* access to multiple AWS accounts.

- One login (your corporate IdP — Okta, Azure AD, Google, or built-in directory).
- **Permission Sets** = predefined IAM roles that get auto-provisioned in target accounts.
- Users get an AWS access portal with a tile per account/role.
- All access is **federated** (no long-term IAM user creds).

🎯 **Exam pattern:** "What's the BEST way to manage developer access across 30 AWS accounts?"
- ❌ IAM users in each account (drift, key sprawl)
- ❌ Cross-account roles with manual setup per dev
- ✅ **Identity Center with permission sets**, backed by the corporate IdP

---

## 🔄 STS & AssumeRole — Cross-Account Access Pattern

**AWS Security Token Service (STS)** issues temporary credentials. Roles are assumed by calling STS.

### Cross-account read pattern

1. **Account B** creates a role `S3ReaderRole` with:
   - **Permission policy** allowing `s3:GetObject` on its bucket
   - **Trust policy** allowing Account A to assume it
2. **Account A's user/role** calls `sts:AssumeRole` against `arn:aws:iam::222:role/S3ReaderRole`
3. STS returns temporary credentials (`AccessKeyId`, `SecretAccessKey`, `SessionToken`)
4. Account A's user uses those creds to read the bucket in Account B

```bash
# Account A user assumes role in Account B
aws sts assume-role \
  --role-arn arn:aws:iam::222222222222:role/S3ReaderRole \
  --role-session-name my-session
```

### Trust policy on Account B's role
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": { "AWS": "arn:aws:iam::111111111111:root" },
    "Action": "sts:AssumeRole",
    "Condition": {
      "StringEquals": { "sts:ExternalId": "AcmeCorpSecret123" }
    }
  }]
}
```

### What's the `ExternalId` for?

If you're a **third-party SaaS** (e.g., Datadog) accessing customer AWS accounts, the customer puts an `ExternalId` condition. This prevents the "confused deputy" problem where Datadog gets tricked into reading the wrong customer's account.

🎯 **Exam pattern:** Whenever a **3rd party vendor** needs access to a customer's AWS account → answer involves an **IAM Role** with an **ExternalId** condition. *Never* hand out IAM user access keys.

---

## 🔐 MFA, Password Policy, Access Keys

| Control | Best practice |
|---------|---------------|
| **MFA on root** | MANDATORY. Use hardware MFA (YubiKey) for very large accounts. |
| **MFA on IAM users** | Required for anyone with privileged permissions; enforce via `aws:MultiFactorAuthPresent` Condition. |
| **Password policy** | Min 14 chars, mixed case + number + symbol, rotation 90 days, prevent reuse of last 24. |
| **Access keys** | Rotate every 90 days. NEVER commit to Git. Use `git-secrets`, AWS Secrets Manager. |
| **IAM Access Analyzer** | Detects publicly shared resources and unused permissions. |

---

## 🛂 Common IAM Patterns On The Exam

| Scenario | Right answer |
|----------|--------------|
| EC2 needs to talk to S3 | IAM Role attached via instance profile |
| Lambda needs to write to DynamoDB | Execution role on the Lambda with DynamoDB permissions |
| Developer in `dev` account needs read-only on `prod` | Role in prod with trust policy → dev account assumes it |
| Vendor needs read-only access to customer AWS | Cross-account role with `ExternalId` |
| Block all accounts from leaving an AWS region | SCP denying actions where `aws:RequestedRegion` ≠ allowed list |
| Limit a power-user to *at most* admin of one service | Permissions boundary on the user |
| Federate corporate users to AWS | IAM Identity Center + SAML/OIDC IdP |
| Mobile app needs temporary AWS access for users | **Cognito Identity Pools** → STS temporary creds |

### Region restriction SCP example
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Deny",
    "NotAction": ["iam:*", "organizations:*", "support:*"],
    "Resource": "*",
    "Condition": {
      "StringNotEquals": {
        "aws:RequestedRegion": ["us-east-1", "us-west-2"]
      }
    }
  }]
}
```

---

## 🔍 Auditing & Detection Bonus Pack

These four services are part of nearly every "secure architecture" answer:

| Service | Purpose | One-liner |
|---------|---------|-----------|
| **CloudTrail** | Records every AWS API call | "Who did what, when?" |
| **AWS Config** | Tracks configuration changes over time | "Is this resource compliant?" |
| **IAM Access Analyzer** | Identifies public / cross-account access | "Did we leak this bucket?" |
| **AWS Security Hub** | Aggregated security findings | "What's broken across the org?" |

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "An SCP grants permissions." | SCPs only *limit*. You still need IAM identity policies to allow. |
| "Deny in an SCP overrides explicit Allow in IAM." | Yes — and so does any explicit Deny anywhere. |
| "EC2 needs access keys to call AWS." | Wrong. Use an **IAM Role** via instance profile. |
| "Root user is the only user with full admin." | You can grant any IAM user `AdministratorAccess`. But the root is the only one who can close the account, change support plan, etc. |
| "ACLs are how you control S3 access today." | Mostly legacy. Use **bucket policies** and **S3 Block Public Access**. |
| "Cross-account access works as long as the source has IAM permission." | No — the destination resource policy or role trust policy must ALSO allow it. |

---

## 🚨 Exam Traps

1. **Long-term access keys for EC2 / Lambda / ECS** → always wrong. The right answer is "use an IAM role."
2. **"Best way to give a 3rd party vendor access"** → IAM role + **ExternalId**, not an IAM user.
3. **Region lockdown** → SCP with `aws:RequestedRegion` condition.
4. **"Disable CloudTrail prevention"** → SCP denying `cloudtrail:Stop*` and `cloudtrail:Delete*`.
5. **MFA enforcement** → IAM policy with `Condition: {"Bool": {"aws:MultiFactorAuthPresent": "true"}}`.
6. **Permissions boundary vs SCP** — boundary applies to one user/role; SCP applies to whole accounts/OUs.
7. **Customer wants to federate Active Directory** → IAM Identity Center (or older SAML 2.0 federation directly to AWS).

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **IAM Policy** | JSON doc specifying what actions are allowed/denied on what resources |
| **Identity-based policy** | Attached to a user, group, or role |
| **Resource-based policy** | Attached to a resource (S3 bucket, SQS queue, KMS key, etc.) |
| **Role** | An identity assumed temporarily via STS; no long-term creds |
| **Trust policy** | A role's policy that says WHO can assume it |
| **STS** | Security Token Service — issues short-lived credentials |
| **AssumeRole** | The API to take on a role's identity |
| **ExternalId** | A secret string used in trust policies to prevent the "confused deputy" problem |
| **SCP (Service Control Policy)** | Org-level guardrail that caps permissions in member accounts |
| **Permissions Boundary** | Per-user/role cap on max permissions |
| **IAM Identity Center** | Modern SSO for multi-account AWS access |
| **Federated user** | Identity from external IdP (Okta, AD, Google) accessing AWS |
| **MFA** | Multi-Factor Authentication |
| **Confused Deputy** | Attack where a trusted intermediary is tricked into acting on attacker's behalf |
| **Cognito Identity Pools** | Get temporary AWS creds for end-users of an app |

---

## ✅ Module 2 Summary

You now know:
- 🔑 IAM principal/action/resource/condition (PARC) model
- 👥 Users vs Groups vs Roles and when each fits
- 📜 The 7 policy types and how they combine
- 🏢 AWS Organizations + SCPs for multi-account governance
- 🆔 IAM Identity Center for modern human access
- 🔄 STS AssumeRole for cross-account and 3rd-party patterns (with ExternalId)
- 🚨 The 7 most-tested IAM exam traps

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take the [`Quiz.md`](./Quiz.md) (target: 20/24)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 3: EC2 Deep Dive](../Module-03-EC2-Deep-Dive/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 **[IAM Best Practices (official)](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)**
- 📖 **[Policy Evaluation Logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html)**
- 📖 **[AWS Organizations User Guide](https://docs.aws.amazon.com/organizations/latest/userguide/)**
- 📖 **[IAM Identity Center docs](https://docs.aws.amazon.com/singlesignon/latest/userguide/)**
- 📖 **[Confused Deputy Problem](https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html)**
