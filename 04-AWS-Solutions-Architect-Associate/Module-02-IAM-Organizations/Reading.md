# Module 2: IAM (Identity and Access Management), Organizations & Cross-Account Access 🔐

> **Why this module matters:** The "Design Secure Architectures" domain is **30%** of SAA-C03, the largest single domain. Nearly every question in it pivots on IAM. If you don't know the difference between an identity policy and a resource policy, between an SCP and a permissions boundary, or how AssumeRole works, you can't pass this exam.

> **Prerequisites for this module.**
> - [Module 1: Foundations & Well-Architected](../Module-01-Foundations-Well-Architected/Reading.md), especially the Shared Responsibility Model and "Security pillar"
> - Basic understanding of authentication vs authorization, public-key crypto (you'll see KMS asymmetric concepts)
> - Familiarity with JSON, every policy is JSON
> - If you've done **`09-CompTIA-Security-Plus`** Module 06 (Identity & Access Management), you'll recognize ~70% of the conceptual content; AWS just gives it specific names

---

## 🏨 A Story: The Grand Hotel Key System

Picture the Grand Cascade Hotel. The General Manager (Maya) is responsible for *everyone*, guests, housekeeping, vendors, security guards.

- **Guests** get **room keys** that only open *their* room. Their key dies on checkout day.
- **Housekeepers** get keys for *all guest rooms on floors 3-12*, but not the penthouse, and only during their shift.
- A plumber arrives for an hour, instead of cutting a permanent key, the front desk hands them a **temporary credential** that expires at 5 PM.
- The **vault** combination is split between Maya and the finance director. Neither alone can open it.
- A **camera log** records who used which door, when. If money goes missing, Maya pulls the tape.

Now translate:

- **Room key → IAM policy** (says what you can open)
- **Housekeeper's key → IAM group** (shared keys for a job function)
- **Plumber's temp credential → STS AssumeRole** (short-lived, expires)
- **Vault dual-control → MFA (Multi-Factor Authentication) / SCPs** (extra barrier on dangerous actions)
- **Camera log → CloudTrail** (audit of every door swipe / API (Application Programming Interface) call)

Master that hotel and you've mastered AWS IAM. Now let's get specific.

---

## 📜 Theoretical Foundations of IAM

Before the AWS-specific jargon, know that IAM stands on shoulders:

- **The principle of least privilege** comes from Saltzer & Schroeder's seminal paper *"The Protection of Information in Computer Systems"* (Saltzer & Schroeder, **Communications of the ACM, 1975**). Their eight design principles are still cited verbatim in the AWS Security pillar. Least privilege is principle #4: *"Every program and every user of the system should operate using the least set of privileges necessary to complete the job."*
- **The CIA Triad** (Confidentiality, Integrity, Availability) was systematized in the same Saltzer & Schroeder paper and codified in the U.S. NIST Special Publication 800-12 (1995). When the SAA exam asks "which pillar is improved by enabling encryption?" it's asking about Confidentiality.
- **The "confused deputy" problem**, which AWS solves with `ExternalId`, was first described by Norman Hardy in *"The Confused Deputy"* (Hardy, **ACM Operating Systems Review, 1988**). The hotel-valet analogy AWS uses in its docs comes directly from Hardy's paper.
- **Role-based access control (RBAC (Role-Based Access Control))** as a formal model is from Ferraiolo & Kuhn's *"Role-Based Access Controls"* (Ferraiolo & Kuhn, **NIST/NCSC National Computer Security Conference, 1992**). IAM roles are the AWS implementation; attribute-based access control (ABAC (Attribute-Based Access Control)) which AWS calls "tag-based authorization" is the academic descendant codified in NIST SP 800-162 (2014).

These citations are not academic flourish: the exam questions are deliberately written to test whether you can distinguish "authentication" from "authorization," "principle of least privilege" from "defense in depth," and "RBAC" from "ABAC." Knowing the textbook source makes the distinctions reflexive.

---

## 🔑 The IAM Core Vocabulary

### Principal, Action, Resource, Condition (PARC)

Every AWS API call answers four questions:

1. **Principal**, Who's making the request? (a user, role, federated identity, service)
2. **Action**, What are they trying to do? (`s3:GetObject`, `ec2:RunInstances`)
3. **Resource**, Which resource? (`arn:aws:s3:::my-bucket/*`)
4. **Condition**, Under what conditions? (only from specific IP, only with MFA, only on certain tags)

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

## 👥 IAM Identities, Users, Groups, Roles

| Identity | What it is | When to use | Has credentials? |
|----------|------------|-------------|------------------|
| **Root user** | The original account owner | Almost never (only for ~6 root-only tasks) | Yes, guard with MFA |
| **IAM User** | A long-term identity for a *human* (legacy) or a *service that lives outside AWS* | Decreasingly recommended; prefer Identity Center for humans | Yes, password and/or access key |
| **IAM Group** | A bag of users with shared permissions | Organize humans by job function | No, just a container |
| **IAM Role** | An identity that's *assumed* by someone/something for a short time | EC2 (Elastic Compute Cloud) instance access to S3 (Simple Storage Service), cross-account access, federation | No long-term creds, temporary STS tokens |
| **Federated user** | An identity from your corporate IdP (Okta, Active Directory, Google) | SSO (Single Sign-On) into AWS | No AWS credentials, uses STS |

### Roles vs Users, the distinction the exam loves

A **Role**:

- Has no permanent password or access key.
- Is *assumed* via `sts:AssumeRole` returning temporary credentials (typically 15 min – 12 hours).
- Has a **trust policy** that says *who* can assume it.
- Has one or more **permission policies** that say *what* the assumer can then do.

🎯 **Exam pattern:** "An EC2 instance needs to read an S3 bucket. What is the BEST practice?"
- ❌ Store an access key on disk
- ❌ Bake an access key into the AMI
- ✅ **Attach an IAM Role to the EC2 instance via an instance profile**, temporary credentials are auto-rotated by AWS.

---

## 📜 Policy Types, More Than Just "IAM Policies"

There are **7+ kinds** of policy that can apply to a request. Know these cold:

| Policy type | Attached to | Purpose | Identity-based or Resource-based |
|-------------|-------------|---------|----------------------------------|
| **Identity-based (managed or inline)** | User, group, role | What the identity can do | Identity-based |
| **Resource-based** | S3 bucket, SQS queue, KMS key, Lambda function, etc. | Who can access this resource | Resource-based |
| **Permissions Boundary** | A user or role | Caps the *maximum* permissions they can ever have | Identity-based (limit, not grant) |
| **Service Control Policy (SCP)** | Org account / OU | Caps the maximum permissions for *every* identity in those accounts | Org-level guardrail |
| **Session policy** | A specific STS session | Limits a single session inline at AssumeRole time | Session-only |
| **ACL (Access Control List)** | S3 buckets/objects (legacy) | Coarse cross-account access | Legacy, prefer policies |
| **VPC endpoint policy** | A VPC endpoint | What can flow through this endpoint | Resource-based |

### Identity policy AND resource policy, what happens?

In the same account: **Union**, if EITHER allows, access is allowed (and no Deny blocks).
Cross-account: **Intersection**, BOTH the source account's identity policy AND the destination resource policy must allow.

🎯 **Exam pattern:** "Account A's user has full S3 access via identity policy. They try to read Account B's bucket, which has no policy on it. Result?" → **Denied.** Cross-account access requires the bucket policy in Account B to explicitly grant Account A.

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

## 🏢 AWS Organizations, Multi-Account Governance

Real companies don't run one AWS account, they run dozens (one per team, one per env, one for security tooling). **AWS Organizations** lets you group them into a hierarchy and apply policies across the whole tree.

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
| **Service Control Policies (SCPs)** | Org-wide guardrails, e.g., "no account in OU=Prod can disable CloudTrail" |
| **Centralized CloudTrail** | Single trail for all org accounts |
| **Reserved Instance / Savings Plan sharing** | Discounts cover any account in the org |
| **Service-linked features** | Identity Center, GuardDuty, Security Hub, Backup, all org-aware |

### SCPs, what they ARE and ARE NOT

- ✅ SCPs **define the maximum** permissions for member accounts.
- ✅ They affect IAM users, roles, AND the root user of those accounts.
- ❌ SCPs alone **do NOT grant** permissions, they only limit. You still need IAM policies to actually allow actions.
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

- One login (your corporate IdP, Okta, Azure AD (Active Directory), Google, or built-in directory).
- **Permission Sets** = predefined IAM roles that get auto-provisioned in target accounts.
- Users get an AWS access portal with a tile per account/role.
- All access is **federated** (no long-term IAM user creds).

🎯 **Exam pattern:** "What's the BEST way to manage developer access across 30 AWS accounts?"
- ❌ IAM users in each account (drift, key sprawl)
- ❌ Cross-account roles with manual setup per dev
- ✅ **Identity Center with permission sets**, backed by the corporate IdP

---

## 🔄 STS & AssumeRole, Cross-Account Access Pattern

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

If you're a **third-party SaaS (Software as a Service)** (e.g., Datadog) accessing customer AWS accounts, the customer puts an `ExternalId` condition. This prevents the "confused deputy" problem where Datadog gets tricked into reading the wrong customer's account.

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
| "Deny in an SCP overrides explicit Allow in IAM." | Yes, and so does any explicit Deny anywhere. |
| "EC2 needs access keys to call AWS." | Wrong. Use an **IAM Role** via instance profile. |
| "Root user is the only user with full admin." | You can grant any IAM user `AdministratorAccess`. But the root is the only one who can close the account, change support plan, etc. |
| "ACLs are how you control S3 access today." | Mostly legacy. Use **bucket policies** and **S3 Block Public Access**. |
| "Cross-account access works as long as the source has IAM permission." | No, the destination resource policy or role trust policy must ALSO allow it. |

---

## 🚨 Exam Traps

1. **Long-term access keys for EC2 / Lambda / ECS (Elastic Container Service)** → always wrong. The right answer is "use an IAM role."
2. **"Best way to give a 3rd party vendor access"** → IAM role + **ExternalId**, not an IAM user.
3. **Region lockdown** → SCP with `aws:RequestedRegion` condition.
4. **"Disable CloudTrail prevention"** → SCP denying `cloudtrail:Stop*` and `cloudtrail:Delete*`.
5. **MFA enforcement** → IAM policy with `Condition: {"Bool": {"aws:MultiFactorAuthPresent": "true"}}`.
6. **Permissions boundary vs SCP**, boundary applies to one user/role; SCP applies to whole accounts/OUs.
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
| **STS** | Security Token Service, issues short-lived credentials |
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

## 📖 Case Study, Capital One's Serverless Bet and the 2019 Breach (2016–2019)

**Situation.** Capital One Financial Corporation a top-10 U.S. bank with ~$370B in assets announced in 2015 that it would close its last on-premises data center by 2018 and run *everything* on AWS. This was unprecedented for a regulated bank. Then-CIO Rob Alexander spoke at re:Invent 2015 and again in 2016 (keynote, viewable on AWS's YouTube channel) declaring AWS the "safer choice" counter-intuitive in 2015 because of the operational discipline AWS enforces.

**Decision.** Capital One went **serverless-first**:

- New workloads on **Lambda, API Gateway, DynamoDB, Step Functions**, not EC2
- **IAM roles** everywhere, with permissions boundaries to cap blast radius
- **Service Control Policies** to enforce region restrictions, encryption-at-rest, and CloudTrail-must-stay-on
- Open-sourced **Cloud Custodian** (an SCP-and-policy enforcement engine), used by 1,000+ companies today
- Heavy use of **AWS Macie** for PII detection, Capital One was an early design partner

**Outcome, the celebrated part.** Capital One demonstrably moved faster than its competitors: a feature that took 18 months at JPMorgan Chase shipped in 6 weeks at Capital One. Lambda invocations exceeded **2 billion per month** by 2018. Operational cost per transaction dropped roughly 40%. Capital One became the case study in every bank board deck for "cloud done right."

**Outcome the painful part.** In **July 2019**, a former AWS engineer, Paige Thompson (online handle "erratic"), exploited a **misconfigured WAF (Web Application Firewall) on an EC2 instance** to perform a **server-side request forgery (SSRF)** attack against the EC2 instance metadata service (IMDSv1). She obtained the IAM role credentials attached to the instance credentials that had been granted overly broad S3 permissions, and exfiltrated **106 million customer records** (US and Canadian credit-card applicants, including 140,000 SSNs and 80,000 linked bank account numbers).

**The breach was a *configuration* failure, not an AWS failure.** Specifically:

1. The WAF was misconfigured to allow the proxied request
2. The IAM role attached to the EC2 instance had `s3:ListBucket` and `s3:GetObject` on **all** buckets in the account, not just the one the application needed
3. **IMDSv1** (the unauthenticated metadata service) was the default at the time, IMDSv2 (which requires session tokens and largely prevents SSRF attacks) was released by AWS in **November 2019**, four months *after* the breach
4. The over-permissive role violated the **principle of least privilege** (Saltzer & Schroeder, 1975)

Capital One was fined **$80 million** by the OCC and paid **$190 million** in a class-action settlement. Thompson was convicted in 2022.

**Lesson for the exam / for practitioners.** Every concept in this module would have prevented or contained the breach:

- **IAM roles scoped to specific buckets** (not `*`), least privilege
- **Permissions boundary** on the EC2 role, caps what credentials can do even if stolen
- **SCP** denying `s3:*` outside the application's expected resource pattern
- **IMDSv2** (now the default for new EC2 launches since 2024), defeats SSRF-based credential theft
- **VPC endpoint for S3 + bucket policy with `aws:SourceVpce` condition**, bucket only reachable from the *expected* VPC

When the SAA exam asks "which combination provides defense in depth for an EC2 application reading from S3?", every layer above is a legitimate answer. The Capital One breach is *why* exam writers chain them together in questions.

**Discussion (Socratic).**
- **Q1.** The Capital One incident had multiple independent failure points (misconfigured WAF, over-permissive IAM, IMDSv1, no SCP guardrails). Argue: was this primarily a **technology failure**, a **process failure**, or a **culture failure**? Where would each kind of organization invest first to prevent the next breach?
- **Q2.** Capital One's IAM role had `s3:ListBucket` on `*`. The "fix" is to scope to specific bucket ARNs. But in a fast-moving microservices org where new buckets appear weekly, who *owns* updating the role policy as buckets proliferate? Design an architecture or governance pattern that solves this without slowing developers.
- **Q3.** IMDSv1 was widely known to be SSRF-vulnerable for *years* before the breach. AWS published guidance to migrate to IMDSv2 in 2019 but didn't make it mandatory until 2024. Defend AWS's gradual-rollout approach AND attack it. Where does the responsibility line under the Shared Responsibility Model fall when AWS knows about a vulnerability but hasn't made the fix mandatory?

---

## 💬 Discussion, Socratic Prompts

1. **The SCP-vs-permissions-boundary boundary.** Both are "caps" on what an identity can do. At what kind of company / org structure does an SCP do work that boundaries can't, and vice versa? Build a decision tree.
2. **The Identity Center migration debate.** Existing IAM users still work; Identity Center is the new path. A team has 200 IAM users with rotated keys, all working fine. Is migration to Identity Center worth the 3-month engineering investment? Argue both sides with quantified estimates.
3. **The "Deny everything by default" SCP playbook.** Some shops apply a deny-list SCP (deny specific dangerous actions) and others apply an allow-list SCP (deny everything not on a permitted list). Compare from a security, operational, and developer-experience perspective.
4. **MFA on IAM users, when does it make a real-world security difference?** Argue both for and against requiring hardware MFA (YubiKey) for all root and IAM admin users. What's the operational tax, and what attack does it actually defeat?
5. **Cross-account vs single-account-with-OUs.** Some orgs use one AWS account per environment (dev/stage/prod); others use one account per *application*. What's the trade-off matrix on blast radius, cost, IAM complexity, and audit?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 04 (VPC) layers network-level defenses (Security Groups, NACLs) on top of IAM. Module 05 (S3) covers bucket policies the most common IAM mistake on the exam. Module 09 (Monitoring) covers CloudTrail, IAM Access Analyzer, and GuardDuty which would have detected the Capital One breach.
> - **Cross-course:** `09-CompTIA-Security-Plus` Module 06 covers RBAC, ABAC, and DAC at the academic level. `07-AWS-AI-Practitioner` Module 08 covers IAM for AI workloads (Bedrock, SageMaker). `04` and `07` overlap heavily here.
> - **Practice:** Practice Exam 1 has 5 IAM questions; Final Mock Exam has 7.
> - **Real world:** Run an IAM Access Analyzer scan on a personal AWS account, free; surfaces real cross-account exposure. Try AWS's *"Well-Architected Tool"* Security pillar questionnaire.

---

## ✅ Module 2 Summary

You now know:

- 📜 The 1975 Saltzer & Schroeder origins of least privilege (and the "confused deputy" of 1988)
- 🔑 IAM principal/action/resource/condition (PARC) model
- 👥 Users vs Groups vs Roles and when each fits
- 📜 The 7 policy types and how they combine
- 🏢 AWS Organizations + SCPs for multi-account governance
- 🆔 IAM Identity Center for modern human access
- 🔄 STS AssumeRole for cross-account and 3rd-party patterns (with ExternalId)
- 🚨 The 7 most-tested IAM exam traps
- 📖 The Capital One 2019 breach and what every IAM concept would have prevented

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take the [`Quiz.md`](./Quiz.md) (target: 21/26)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 3: EC2 Deep Dive](../Module-03-EC2-Deep-Dive/Reading.md)

---

## 📚 Further Sources (This Module)

**AWS official**
- 📖 **IAM Best Practices**, `docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html`
- 📖 **Policy Evaluation Logic**, `docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html`
- 📖 **AWS Organizations User Guide**, `docs.aws.amazon.com/organizations/latest/userguide/`
- 📖 **IAM Identity Center docs**, `docs.aws.amazon.com/singlesignon/latest/userguide/`
- 📖 **Confused Deputy Problem (AWS docs)**, `docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html`
- 📖 **AWS Security Best Practices whitepaper**, `docs.aws.amazon.com/whitepapers/latest/aws-security-best-practices/`

**re:Invent talks**
- 🎤 **SEC308 (2023): *Beyond IAM access keys: Modern authentication approaches***, Cognito + Identity Center deep-dive.
- 🎤 **SEC405 (2023): *Become an IAM policy ninja***, the canonical IAM-deep-dive talk that returns nearly every year.

**Academic foundations**
- 📄 **Saltzer, Jerome H. & Schroeder, Michael D. (1975).** *The Protection of Information in Computer Systems.* Communications of the ACM. *(The least-privilege paper.)*
- 📄 **Hardy, Norman (1988).** *The Confused Deputy: (or why capabilities might have been invented).* ACM Operating Systems Review 22(4). *(The ExternalId origin story.)*
- 📄 **Ferraiolo, David & Kuhn, D. Richard (1992).** *Role-Based Access Controls.* National Computer Security Conference Proceedings, NIST. *(RBAC paper.)*
- 📖 **NIST SP 800-162 (2014):** *Guide to Attribute Based Access Control (ABAC) Definition and Considerations.* Free PDF, `csrc.nist.gov/publications/detail/sp/800-162/final`.

**Industry / incident analysis**
- 📰 **U.S. Senate report on the Capital One breach (2020)**, public PDF; reads like a textbook chapter on what NOT to do.
- 📰 **Krebs on Security**, multiple long-form posts on the Capital One incident.
- 📰 **AWS Blog (2019).** *"Add defense in depth against open firewalls, reverse proxies, and SSRF vulnerabilities with enhancements to the EC2 Instance Metadata Service"*, AWS's own response paper announcing IMDSv2.
