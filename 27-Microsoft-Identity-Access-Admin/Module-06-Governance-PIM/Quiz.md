# ✏️ Module 6 Quiz: Identity Governance & PIM

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. Privileged Identity Management (PIM) requires: *(Remember)*
A. Entra ID Free
B. Entra ID P1
C. Entra ID P2
D. M365 Apps for business

---

### Q2. Lifecycle Workflows require: *(Remember)*
A. Entra ID Free
B. Entra ID P1
C. Entra ID P2 (alone)
D. Microsoft Entra ID Governance (add-on SKU)

---

### Q3. An "eligible" PIM assignment means: *(Understand)*
A. The role is always active
B. The user CAN activate the role JIT but it is inactive otherwise
C. The user is on a waitlist
D. The role is locked and cannot be used

---

### Q4. A user cannot self-approve their own PIM activation because: *(Apply)*
A. It's a Microsoft policy enforced server-side
B. The user must have written permission from HR
C. PIM only allows self-approval in P1
D. Self-approval is allowed if MFA passes

---

### Q5. Default max PIM activation duration for an Entra role: *(Remember)*
A. 1 hour
B. 8 hours
C. 24 hours
D. 72 hours

---

### Q6. PIM for Groups requires the group to be: *(Apply)*
A. A Microsoft 365 group
B. A dynamic membership group
C. A role-assignable group (set at creation)
D. An administrative unit

---

### Q7. **Yes/No** — PIM. *(Understand)*

**S1:** PIM activation can require MFA, justification, and approval.
**S2:** PIM for Azure Resources covers Azure RBAC roles.
**S3:** PIM can be enabled at any scope: tenant, subscription, RG, individual resource.

A. Yes / Yes / Yes
B. No / Yes / No
C. Yes / Yes / No
D. Yes / No / Yes

---

### Q8. The right artifact for "every quarter, ask managers to confirm each direct report's group membership; auto-remove if no response" is: *(Apply)*
A. PIM activation policy
B. Access review (quarterly, manager as reviewer, auto-apply Remove)
C. Lifecycle Workflow
D. Custom Conditional Access

---

### Q9. Access reviews can target: *(Understand)*
A. Only group memberships
B. Groups, app role assignments, Entra role assignments, Azure RBAC, access packages, inactive users
C. Only PIM-eligible roles
D. Only consumer (External ID) accounts

---

### Q10. The recommended response when a reviewer doesn't respond to an access review on a Global Administrator eligibility: *(Apply)*
A. Approve (keep)
B. Remove
C. Take no action
D. Email reminder forever

---

### Q11. A "connected organization" in entitlement management is: *(Remember)*
A. A federated AD forest
B. An external Entra tenant that access packages can grant access to (auto-provisions guests)
C. A SCIM partner
D. A multi-tenant App Registration

---

### Q12. Lifecycle Workflows typically trigger from: *(Remember)*
A. Real-time attribute change
B. User sign-in
C. Scheduled (daily) attribute evaluation (`employeeHireDate`, `employeeLeaveDateTime`)
D. Conditional Access policy

---

### Q13. A "Pre-Hire" Lifecycle Workflow that fires 7 days before `employeeHireDate` typically: *(Apply)*
A. Disables the account
B. Generates a Temporary Access Pass + sends welcome email to user's personal address + adds to onboarding group
C. Removes all groups
D. Triggers MFA

---

### Q14. Break-glass GA accounts in a PIM-managed tenant should be: *(Apply)*
A. PIM eligible like everyone else
B. Active permanent and EXCLUDED from PIM (separate insurance)
C. Time-bound active for 24h
D. Federated to AD FS

---

### Q15. **Yes/No** — Access reviews. *(Understand)*

**S1:** Access reviews can include ML-based recommendations (e.g. "user inactive 90 days → recommend remove").
**S2:** Access reviews on inactive users is a feature of Entra ID Governance.
**S3:** A user being reviewed can review themselves if "self-review" is selected.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. No / No / No

---

### Q16. The justification field on a PIM activation is: *(Apply)*
A. Optional always
B. Free-text reason the user enters; can be made required by role config
C. Auto-filled by the system
D. Hidden from auditors

---

### Q17. "Require ticket information on activation" is the PIM setting that: *(Apply)*
A. Prevents activation entirely
B. Requires the user to enter a ticket number tying the activation to an external system (JIRA, ServiceNow)
C. Sends an email to the help desk
D. Auto-creates a ticket

---

### Q18. **Order these steps** to convert standing Global Admins to PIM eligible. *(Apply)*

1. Create cloud-only break-glass GA accounts (active permanent, excluded from PIM)
2. Configure PIM settings for GA role (MFA + approval + ticket)
3. Add each admin as Eligible for GA
4. Remove the admin's permanent active GA assignment

A. 1 → 2 → 3 → 4
B. 4 → 3 → 2 → 1
C. 2 → 1 → 3 → 4
D. 1 → 3 → 2 → 4

---

### Q19. Microsoft's recommended max number of standing permanent Global Admins (excluding break-glass): *(Understand)*
A. 0 (use PIM eligible-only)
B. 50
C. 100
D. 250

---

### Q20. **Yes/No** — Entitlement management. *(Understand)*

**S1:** Catalogs contain access packages + resources + delegated ownership.
**S2:** An access package can target both internal users and a connected external org.
**S3:** Custom extensions (Logic Apps on access events) require Entra ID Governance SKU.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / No / Yes
D. Yes / Yes / No

---

### Q21. A PIM "active assignment" can be: *(Understand)*
A. Only permanent
B. Only time-bound
C. Either permanent or time-bound (configurable per role)
D. Always 24 hours

---

### Q22. **Yes/No** — PIM mechanics. *(Understand)*

**S1:** An eligible user must complete MFA before activating most Entra roles.
**S2:** PIM activation events are written to Entra audit logs.
**S3:** PIM for Groups is for managing security group ownership, not membership.

A. Yes / Yes / No
B. No / Yes / No
C. Yes / No / Yes
D. Yes / Yes / Yes

---

### Q23. A scenario: "Vendor employee needs Owner on Prod sub for 4 hours to do a migration." Best fit: *(Apply)*
A. Permanent active Owner
B. PIM for Azure Resources — eligible Owner, JIT activation with 4h max duration, MFA + approval required
C. Custom Azure RBAC role
D. Service principal

---

### Q24. Privileged access auditor asks: "Show me every Global Admin activation in the past 90 days." Right tool: *(Apply)*
A. Identity Protection risk events
B. Microsoft Entra audit logs (filter on PIM-related operations) or PIM activity history
C. Defender for Cloud Apps
D. SSPR registration report

---

### Q25. **Yes/No** — Governance scope. *(Evaluate)*

**S1:** Lifecycle Workflows can run on-demand by an admin for testing, not only on schedule.
**S2:** Access reviews can require a justification from the reviewer.
**S3:** Entitlement management always requires guests to register a Verified ID credential.

A. Yes / Yes / Yes
B. Yes / Yes / No
C. No / Yes / No
D. Yes / No / Yes

---

## 🎯 Answers + Explanations

### Q1: **C. Entra ID P2**
PIM is a P2 feature.

### Q2: **D. Microsoft Entra ID Governance (add-on SKU)**
Lifecycle Workflows ship in the Governance add-on, not standalone P2.

### Q3: **B. The user CAN activate the role JIT but it is inactive otherwise**
Eligible = "can activate"; Active = "is active."

### Q4: **A. It's a Microsoft policy enforced server-side**
Activator must differ from approver — server-side guard.

### Q5: **B. 8 hours**
Default max activation; configurable per role.

### Q6: **C. A role-assignable group (set at creation)**
Cannot retroactively make an existing group role-assignable.

### Q7: **C. Yes / Yes / No**
S1 yes. S2 yes. S3 no (PIM scope follows the role being PIM-enabled; not all scopes work for all role types).

### Q8: **B. Access review (quarterly, manager as reviewer, auto-apply Remove)**
The canonical access review use case.

### Q9: **B. Groups, app role assignments, Entra role assignments, Azure RBAC, access packages, inactive users**
Six target types.

### Q10: **B. Remove**
Safe default for privileged role reviews; "remove if no response" prevents permission rot.

### Q11: **B. An external Entra tenant that access packages can grant access to (auto-provisions guests)**
The B2B bridge that makes entitlement management work cross-tenant.

### Q12: **C. Scheduled (daily) attribute evaluation**
Lifecycle Workflows are scheduled (or on-demand), not real-time.

### Q13: **B. Generates a Temporary Access Pass + sends welcome email to user's personal address + adds to onboarding group**
The canonical pre-hire flow.

### Q14: **B. Active permanent and EXCLUDED from PIM (separate insurance)**
Break-glass must remain outside PIM so a PIM outage doesn't seal the tenant.

### Q15: **A. Yes / Yes / Yes**
All three are true.

### Q16: **B. Free-text reason the user enters; can be made required by role config**
The audit trail tied to every activation.

### Q17: **B. Requires the user to enter a ticket number tying the activation to an external system**
Auditor-friendly setting.

### Q18: **A. 1 → 2 → 3 → 4**
Break-glass FIRST (insurance), then policy, then eligibility, then remove permanent.

### Q19: **A. 0 (use PIM eligible-only)**
Microsoft's published guidance is 0 standing permanent (use PIM); ≤5 break-glass.

### Q20: **A. Yes / Yes / Yes**
All three true.

### Q21: **C. Either permanent or time-bound (configurable per role)**
Both options available per role.

### Q22: **A. Yes / Yes / No**
S1 yes. S2 yes. S3 no (PIM for Groups manages **membership**, not ownership).

### Q23: **B. PIM for Azure Resources — eligible Owner, JIT activation with 4h max duration, MFA + approval required**
Textbook PIM for Azure Resources scenario.

### Q24: **B. Microsoft Entra audit logs (filter on PIM-related operations) or PIM activity history**
Audit logs + PIM history are the auditor's tools.

### Q25: **B. Yes / Yes / No**
S1 yes (on-demand supported). S2 yes (justification can be required). S3 no (Verified ID is optional, not always required).

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Governance mastery.
- 21–23/25 → ✅ Solid. Note misses; move on.
- 17–20/25 → ⚠️ Re-read PIM mental model + Access Reviews sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- PIM = P2; Lifecycle Workflows = Entra ID Governance
- Eligible vs Active
- Max activation default = 8h
- User cannot self-approve (server-side guard)
- PIM for Groups needs role-assignable group (set at creation)
- Access reviews cover groups + apps + roles + RBAC + packages + inactive users
- Break-glass = active permanent, excluded from PIM
- Lifecycle Workflows fire on schedule (daily) or on-demand

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 7](../Module-07-Hybrid-Identity/Reading.md)
