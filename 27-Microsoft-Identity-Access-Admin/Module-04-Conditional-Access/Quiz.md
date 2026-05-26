# ✏️ Module 4 Quiz: Conditional Access & Identity Protection

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. Conditional Access requires which minimum license? *(Remember)*
A. Free
B. P1
C. P2
D. M365 Apps

---

### Q2. Identity Protection requires which minimum license? *(Remember)*
A. Free
B. P1
C. P2
D. External ID

---

### Q3. Which is the highest-leverage single CA policy Microsoft recommends? *(Remember)*
A. Require MFA for all users
B. Require compliant device for everyone
C. Block legacy authentication
D. Block sign-in from anonymous IPs

---

### Q4. Two states a new CA policy can be safely tested in are: *(Remember)*
A. On + Off
B. Report-only + What If tool
C. Disabled + Audit
D. Test-mode + Production

---

### Q5. A CA policy with no Grant control: *(Understand)*
A. Defaults to Block
B. Defaults to Allow without any controls
C. Cannot be saved
D. Cannot apply to users

---

### Q6. A "trusted" named location: *(Understand)*
A. Bypasses all CA policies automatically
B. Lowers Identity Protection risk weighting; can still trigger CA controls
C. Always increases the user risk score
D. Disables MFA for all users in that location

---

### Q7. Break-glass accounts MUST be: *(Apply)*
A. Federated to AD FS for HA
B. Cloud-only, excluded from every CA policy, monitored
C. Created automatically by Microsoft
D. Synced from on-prem

---

### Q8. The What If tool: *(Apply)*
A. Tests connectivity to Entra ID
B. Simulates a sign-in to show which CA policies would apply and the outcome
C. Sends a test MFA prompt
D. Resets a user's MFA

---

### Q9. **User risk** in Identity Protection measures: *(Understand)*
A. The probability THIS specific sign-in is malicious
B. The probability the account itself is compromised
C. The number of devices the user has
D. The MFA registration completeness

---

### Q10. **Sign-in risk** in Identity Protection measures: *(Understand)*
A. The probability the account itself is compromised
B. The probability THIS specific sign-in is malicious
C. Whether the user is in a trusted location
D. Whether the user has completed combined registration

---

### Q11. Continuous Access Evaluation (CAE) reduces token revocation latency from default 1 hour to: *(Remember)*
A. Real-time (sub-second)
B. ~15 minutes
C. 30 minutes
D. 6 hours

---

### Q12. Authentication Context lets you: *(Apply)*
A. Apply CA per app's specific resource (e.g. one SharePoint site URL)
B. Bypass CA for trusted users
C. Combine MFA methods
D. Override Identity Protection risk

---

### Q13. The recommended starting state for any new CA policy is: *(Apply)*
A. On (immediate enforcement)
B. Off
C. Report-only
D. Delete it after creation

---

### Q14. **Yes/No** — Break-glass. *(Understand)*

**S1:** Break-glass accounts should use phone-based MFA for portability.
**S2:** Break-glass accounts must be excluded from EVERY CA policy.
**S3:** Two break-glass accounts is the Microsoft-recommended minimum count.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. No / No / Yes
D. Yes / No / No

---

### Q15. A user risk policy typically configures the Grant control: *(Apply)*
A. Block access only
B. Require password change + MFA
C. Require approved client app
D. Require Hybrid Entra Join

---

### Q16. Risk events in Identity Protection are retained: *(Remember)*
A. 7 days
B. 30 days
C. 90 days
D. 1 year

---

### Q17. The two client-app conditions you'd add to a "block legacy auth" CA policy are: *(Apply)*
A. Browser + Mobile apps & desktop clients
B. Exchange ActiveSync clients + Other clients
C. Modern auth clients + Browser
D. SAML clients + OIDC clients

---

### Q18. A scenario: "Block downloads on unmanaged devices when accessing SharePoint via browser." The right control is: *(Apply)*
A. Block access entirely
B. Require compliant device
C. Session control: app-enforced restrictions OR Defender for Cloud Apps proxy
D. Identity Protection user-risk policy

---

### Q19. The user encounters a sign-in risk MFA challenge and completes it successfully. What happens? *(Understand)*
A. Risk persists; an admin must dismiss it manually
B. The risk is automatically dismissed (Microsoft learns the user is the real owner)
C. The account is permanently flagged
D. A Sentinel alert fires

---

### Q20. **Yes/No** — Policy mechanics. *(Understand)*

**S1:** Security Defaults and Conditional Access can be enabled together.
**S2:** Per-user MFA settings override Conditional Access policies.
**S3:** A single CA policy can include multiple Grant controls combined with AND or OR.

A. Yes / Yes / Yes
B. No / No / Yes
C. No / Yes / Yes
D. Yes / No / Yes

---

### Q21. **Order these steps** to safely roll out a "Require MFA for admins" CA policy. *(Apply)*

1. Build the policy in Report-only mode, excluding break-glass accounts
2. Verify with What If tool using a break-glass UPN
3. Monitor sign-in logs for 1 week
4. Switch policy to On

A. 1 → 2 → 3 → 4
B. 4 → 3 → 2 → 1
C. 2 → 1 → 3 → 4
D. 1 → 4 → 2 → 3

---

### Q22. The right artifact for "require MFA for sign-ins flagged as medium or high sign-in risk" is: *(Apply)*
A. A Conditional Access policy with Sign-in risk condition + Grant: MFA
B. A user risk policy
C. Disable Authentication methods
D. Security Defaults

---

### Q23. Helpdesk gets a flood of "I'm being prompted for MFA every sign-in" tickets after a CA rollout. Most likely cause: *(Apply)*
A. User risk is high
B. Sign-in frequency session control is set to "Every time"
C. The user is in a trusted location
D. Identity Protection requires re-authentication

---

### Q24. CAE is enabled by default for modern M365 apps. To force-extend tokens during an Entra service degradation, an admin can: *(Apply)*
A. Disable Identity Protection
B. Configure "Resilience defaults" — leave enabled (the default) to extend tokens during degradation
C. Increase token TTL manually
D. Move users to Free tier

---

### Q25. **Yes/No** — Identity Protection. *(Evaluate)*

**S1:** Identity Protection automatically blocks compromised accounts without a policy.
**S2:** A user risk policy can require password change.
**S3:** Sign-in risk policy targets a single sign-in event, not the account.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. No / No / Yes
D. Yes / Yes / No

---

## 🎯 Answers + Explanations

### Q1: **B. P1**
Conditional Access is included from Entra ID P1 upward.

### Q2: **C. P2**
Identity Protection (risk-based CA) ships at P2.

### Q3: **C. Block legacy authentication**
~97% of credential-stuffing targets legacy protocols. Highest-leverage single policy.

### Q4: **B. Report-only + What If tool**
The two safe-testing tools. Off doesn't test; On enforces.

### Q5: **B. Defaults to Allow without any controls**
A policy with no Grant control implicitly allows the session — usually a mistake.

### Q6: **B. Lowers Identity Protection risk weighting; can still trigger CA controls**
"Trusted" is a signal, not a bypass.

### Q7: **B. Cloud-only, excluded from every CA policy, monitored**
Federation introduces a dependency that can fail. Cloud-only is the only safe pattern.

### Q8: **B. Simulates a sign-in to show which CA policies would apply and the outcome**
The pre-flight check before saving any new policy.

### Q9: **B. The probability the account itself is compromised**
User risk = the account. Sign-in risk = this event.

### Q10: **B. The probability THIS specific sign-in is malicious**
Sign-in risk = the event in flight.

### Q11: **B. ~15 minutes**
CAE accelerates revocation propagation from the 1-hour default token lifetime.

### Q12: **A. Apply CA per app's specific resource (e.g. one SharePoint site URL)**
Authentication context allows fine-grained per-resource targeting.

### Q13: **C. Report-only**
The right safe-start state for every new policy.

### Q14: **B. No / Yes / Yes**
S1 no (FIDO2/hardware OATH preferred; phone too fragile). S2 yes. S3 yes (two minimum).

### Q15: **B. Require password change + MFA**
User risk = compromised account → force a clean reset.

### Q16: **C. 90 days**
P2 risk events retained 90 days.

### Q17: **B. Exchange ActiveSync clients + Other clients**
Both legacy client-app buckets needed for full legacy-auth block.

### Q18: **C. Session control: app-enforced restrictions OR Defender for Cloud Apps proxy**
Session controls are how you modify download/upload behavior post-sign-in.

### Q19: **B. The risk is automatically dismissed**
Self-remediation: a successful MFA confirms the real owner; risk clears.

### Q20: **B. No / No / Yes**
S1 no (mutually exclusive). S2 no (CA controls MFA; per-user is legacy/deprecated). S3 yes.

### Q21: **A. 1 → 2 → 3 → 4**
Build → simulate → monitor → enforce. The canonical safe rollout.

### Q22: **A. A Conditional Access policy with Sign-in risk condition + Grant: MFA**
Sign-in risk requires P2 + Identity Protection enabled.

### Q23: **B. Sign-in frequency session control is set to "Every time"**
Common misconfig. Lower it (e.g. 7 days) or disable that session control.

### Q24: **B. Configure "Resilience defaults" — leave enabled (the default) to extend tokens during degradation**
Resilience defaults extend token lifetimes during Entra degradation to avoid mass sign-out.

### Q25: **B. No / Yes / Yes**
S1 no (you must build the policy). S2 yes. S3 yes.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 CA mastery.
- 21–23/25 → ✅ Solid. Note misses; move on.
- 17–20/25 → ⚠️ Re-read Three-Part Model + Identity Protection sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- CA = P1; Identity Protection = P2
- User risk = account; Sign-in risk = event
- Report-only + What If = safe testing
- Block legacy auth = highest-leverage single policy
- Break-glass = cloud-only + excluded + monitored
- CAE = ~15 min token revocation
- Risk events retained 90 days

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 5](../Module-05-Apps-SSO/Reading.md)
