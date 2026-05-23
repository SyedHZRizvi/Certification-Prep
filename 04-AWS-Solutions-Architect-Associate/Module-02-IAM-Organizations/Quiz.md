# ✏️ Module 2 Quiz: IAM & Organizations

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Aim for 21/26 minimum. Time limit: 35 minutes.

> **Bloom's distribution.** Remember 5 (19%) · Understand 6 (23%) · Apply 8 (31%) · Analyze/Evaluate 6 (23%) · Create 1 (4%). Heavy scenario weighting — IAM is the most scenario-tested SAA topic.

---

## Questions

### Q1. An EC2 application needs to read objects from an S3 bucket. What is the BEST practice? *(Apply)*
A. Store an IAM user's access key on the instance disk
B. Bake the credentials into the AMI
C. Attach an IAM Role to the instance via an instance profile
D. Pass credentials in user-data at launch

---

### Q2. In IAM policy evaluation, when an explicit Deny and an explicit Allow apply to the same request: *(Understand)*
A. The Allow wins
B. The Deny wins
C. The newer policy wins
D. Both cancel out and the request is processed

---

### Q3. A vendor SaaS needs read-only access to a customer's AWS account. What is the BEST approach? *(Apply)*
A. The customer creates an IAM user for the vendor and shares the access key
B. The customer creates an IAM Role with the vendor's AWS account as principal and an ExternalId condition
C. The customer makes the bucket public
D. The customer shares root credentials over a secure channel

---

### Q4. A Service Control Policy (SCP) in AWS Organizations: *(Understand)*
A. Grants permissions to all member accounts
B. Limits the maximum permissions of identities in member accounts
C. Replaces the need for IAM policies
D. Only applies to the management account

---

### Q5. A company runs 30 AWS accounts. Developers need single sign-on access with role-based permission sets across many accounts. What is the BEST solution? *(Apply)*
A. Create IAM users in each account and rotate keys monthly
B. Use IAM Identity Center federated to the corporate IdP
C. Share one root user between developers
D. Use a single account with many IAM users

---

### Q6. Which statement about IAM Roles is CORRECT? *(Understand)*
A. Roles have long-term passwords and access keys
B. Roles are assumed via STS and return short-lived credentials
C. Roles can be attached to IAM users but not to EC2 instances
D. Only the root user can assume a role

---

### Q7. A bucket in Account B has no resource policy. A user in Account A has an identity policy allowing `s3:GetObject` on Account B's bucket. The user's request will be: *(Analyze)*
A. Allowed — identity policy is sufficient
B. Denied — cross-account access requires the destination's resource policy or role to also allow
C. Allowed only with MFA
D. Allowed only if the bucket is public

---

### Q8. Which condition would enforce that an API call originates from a specific corporate IP range? *(Remember)*
A. `aws:SourceIp`
B. `aws:Region`
C. `aws:Tag`
D. `aws:Principal`

---

### Q9. A permissions boundary: *(Understand)*
A. Grants additional permissions
B. Caps the maximum permissions a user/role can have, regardless of identity policies
C. Applies only to S3 buckets
D. Is the same as an SCP

---

### Q10. To prevent any IAM user in an Organization OU from disabling CloudTrail, you should: *(Apply)*
A. Attach a permissions boundary to every user
B. Apply an SCP denying `cloudtrail:StopLogging` and `cloudtrail:DeleteTrail` to the OU
C. Disable IAM in those accounts
D. Use a bucket policy on the S3 bucket storing logs

---

### Q11. Which AWS service issues temporary credentials? *(Remember)*
A. IAM
B. KMS
C. STS
D. Cognito User Pools

---

### Q12. A mobile app needs each end-user to get temporary AWS credentials to upload to S3. The BEST service is: *(Apply)*
A. IAM Identity Center
B. AWS Cognito Identity Pools
C. AWS Organizations
D. IAM users created in real-time

---

### Q13. The `ExternalId` parameter in a role's trust policy primarily protects against: *(Remember)*
A. Token replay
B. The "confused deputy" problem
C. SQL injection
D. Phishing of the root user

---

### Q14. Which of the following is TRUE about resource-based policies? *(Understand)*
A. They are attached to IAM users
B. They are attached directly to resources like S3 buckets, SQS queues, or KMS keys
C. They override SCPs
D. They are deprecated

---

### Q15. To require MFA before performing privileged actions, you would add to a policy: *(Remember)*
A. `"Condition": {"Bool": {"aws:MultiFactorAuthPresent": "true"}}`
B. `"Action": "iam:RequireMFA"`
C. `"Effect": "Strong"`
D. `"Resource": "MFA"`

---

### Q16. Within the same account, when both an identity policy and a resource policy apply: *(Analyze)*
A. They are intersected — both must allow
B. They are unioned — either allows
C. Resource policy always wins
D. Identity policy always wins

---

### Q17. Cross-account access requires: *(Analyze)*
A. Only the source account's identity policy to allow
B. Only the destination resource policy to allow
C. BOTH the source identity policy AND the destination policy/role to allow
D. Root credentials shared across both

---

### Q18. Which is NOT a benefit of using AWS Organizations? *(Understand)*
A. Consolidated billing across accounts
B. SCPs as guardrails on member accounts
C. Sharing of Reserved Instance / Savings Plan discounts
D. Automatic deletion of unused accounts

---

### Q19. A company wants to enforce that resources can only be created in `us-east-1` and `us-west-2`. The BEST mechanism is: *(Apply)*
A. Permissions boundary on each user
B. SCP using `aws:RequestedRegion` condition with `StringNotEquals`
C. A daily Lambda that deletes resources in other regions
D. A budget alert

---

### Q20. A trust policy is attached to: *(Remember)*
A. An S3 bucket
B. An IAM Role — it defines who can assume the role
C. A VPC
D. An EC2 instance

---

### Q21. Which is the BEST way to grant a Lambda function permission to write to DynamoDB? *(Apply)*
A. Attach an IAM user's access keys via environment variables
B. Hard-code credentials into the function
C. Give the function an execution role with DynamoDB write permissions
D. Disable IAM entirely for the function

---

### Q22. CloudTrail's primary role in a security architecture is to: *(Understand)*
A. Encrypt data at rest
B. Block traffic at the VPC edge
C. Provide an immutable audit log of API calls
D. Replace IAM policies

---

### Q23. A team must rotate access keys regularly. Which tool can detect unused access keys? *(Apply)*
A. AWS Shield
B. IAM Credential Report and IAM Access Analyzer
C. CloudFormation
D. SQS

---

### Q24. A company uses one AWS account per environment (dev, stage, prod) and wants to consolidate billing and apply guardrails. They should adopt: *(Evaluate)*
A. AWS Control Tower / Organizations
B. Multiple root users
C. EC2 Reserved Instances
D. AWS Budgets only

---

### Q25. Which action requires the root user (cannot be delegated to an IAM user)? *(Remember)*
A. Creating S3 buckets
B. Changing the AWS account's email or closing the account
C. Launching EC2 instances
D. Calling AWS APIs

---

### Q26. A developer in Account A needs read-only S3 access in Account B for 1 hour. The MOST secure design is: *(Create)*
A. Create a permanent IAM user in Account B and share keys
B. Create a role in Account B that Account A can assume via STS for a 1-hour session
C. Make the S3 bucket public for an hour
D. Email the developer the bucket contents

---

## 🎯 Answers + Explanations

### Q1: **C. Attach an IAM Role via instance profile**
Roles + instance profiles give EC2 short-lived auto-rotated creds. Never store long-term keys on instances.

### Q2: **B. Deny wins**
Explicit Deny always overrides any Allow. This is the #1 IAM rule.

### Q3: **B. Role with ExternalId**
Third-party access pattern: cross-account role, principal is the vendor's AWS account, condition `sts:ExternalId` prevents confused-deputy attacks.

### Q4: **B. Limits maximum permissions**
SCPs are guardrails — they cap what's possible, never grant.

### Q5: **B. IAM Identity Center federated to corporate IdP**
Permission sets + IdP federation = modern, scalable multi-account access. IAM users in 30 accounts is an operational nightmare.

### Q6: **B. Roles are assumed via STS, return short-lived creds**
Roles have no long-term creds. They're temporarily assumed.

### Q7: **B. Denied — cross-account requires both sides to allow**
For cross-account access, BOTH source identity policy AND destination resource/role policy must allow. No bucket policy = no cross-account access.

### Q8: **A. `aws:SourceIp`**
Use `IpAddress` operator with `aws:SourceIp` for IP-based conditions.

### Q9: **B. Caps maximum permissions of a user/role**
Permissions boundary = per-identity cap. Doesn't grant; just limits.

### Q10: **B. SCP denying CloudTrail stop/delete**
SCPs are the right tool to enforce org-wide rules — including against the root user of member accounts.

### Q11: **C. STS**
Security Token Service issues temp creds for roles, federation, Cognito identity pools, etc.

### Q12: **B. Cognito Identity Pools**
For end-users of mobile/web apps needing temp AWS creds, Cognito Identity Pools is the answer.

### Q13: **B. Confused deputy**
ExternalId ensures the vendor (deputy) acts only on behalf of the right customer, not a tricked-into-other one.

### Q14: **B. Attached to resources**
Resource-based policies live on the resource (bucket, queue, KMS key, Lambda, etc.).

### Q15: **A. `aws:MultiFactorAuthPresent`**
The standard MFA-required condition string.

### Q16: **B. Unioned within same account**
Same account: either policy allowing is sufficient (no explicit Deny). Cross-account is intersected.

### Q17: **C. BOTH must allow**
Cross-account = intersection of permissions.

### Q18: **D. Automatic deletion of unused accounts**
Organizations does consolidated billing, SCPs, RI/Savings Plan sharing — but does not auto-delete accounts.

### Q19: **B. SCP with `aws:RequestedRegion`**
Org-wide region lockdown = SCP. Single user = permissions boundary or IAM policy.

### Q20: **B. IAM Role — defines who can assume it**
Trust policy = "who can AssumeRole me?" Permission policies = "what can the assumer then do?"

### Q21: **C. Execution role with DynamoDB permissions**
Lambda execution roles are the standard pattern. Same logic as EC2 instance profiles.

### Q22: **C. Immutable audit log of API calls**
CloudTrail records the who/what/when/where of every API. Critical for forensics and compliance.

### Q23: **B. IAM Credential Report + Access Analyzer**
Credential Report shows last-used dates. Access Analyzer also flags unused permissions.

### Q24: **A. AWS Control Tower / Organizations**
Control Tower is the multi-account landing zone built on Organizations.

### Q25: **B. Account-level tasks (change email, close account)**
Only ~6 actions require root: change account name/email, change root password, close account, change support plan, restore IAM user permissions, etc.

### Q26: **B. Cross-account role assumed via STS for 1 hour**
Short-lived, principle of least privilege, time-bounded. Don't create permanent users for temporary needs.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 You've mastered IAM. Move to Module 3!
- 21–24/26 → ✅ Solid. Review the wrong ones, then move on.
- 17–20/26 → ⚠️ IAM is huge on the exam. Re-read and re-quiz tomorrow.
- <17/26 → 🔁 Restart Module 2 — IAM gaps WILL cost you exam points.

---

## 🃏 Add To Your Flashcards

- The 5 IAM identity types (root, user, group, role, federated)
- Identity policy vs resource policy union (same account) vs intersection (cross-account)
- The Deny-always-wins rule
- AssumeRole + ExternalId for 3rd-party vendors
- SCP vs permissions boundary
- Region restriction via SCP `aws:RequestedRegion`
- Cognito Identity Pools for end-user app credentials

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3: EC2 Deep Dive](../Module-03-EC2-Deep-Dive/Reading.md)
