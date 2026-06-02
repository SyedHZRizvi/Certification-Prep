# Module 6: Identity Governance & PIM 🛂

> **Why this module matters:** Standing privilege is the silent killer of modern security programs. Microsoft's own internal data (RSA 2019, Ignite 2023) found that ~80% of identity-driven breaches involved an account that *didn't need* the privileges it held — privileges granted six months ago for a one-off task and never revoked. SC-300 spends 20–25% of its weight on identity governance because Microsoft (and every CISO who's lived through a breach) believes this layer is the single biggest gap between "MFA on" and "actual zero trust."

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - License tiers (PIM = P2; Lifecycle Workflows = Entra ID Governance) — [Module 1](../Module-01-Entra-ID-Fundamentals/Reading.md).
> - Users, groups, AUs, entitlement management basics — [Module 2](../Module-02-Users-Groups/Reading.md).
> - CA + Identity Protection (so you understand the "MFA on activation" piece) — [Module 4](../Module-04-Conditional-Access/Reading.md).
> - Application app roles — [Module 5](../Module-05-Apps-SSO/Reading.md).

---

## 🪪 A Story: The Standing Owner Who Was Acquired Out Of Existence

It's late 2024. A 1,800-person company is closing its Series E. As part of due diligence, the lead investor's security team runs a Microsoft Entra audit script across the target tenant. They expect to find some hygiene issues. What they find:

- **23 accounts with Global Administrator role permanently assigned.**
- **4 of those accounts** belong to people who left the company between 6 months and 2 years ago. The accounts were "disabled" but the role assignments were never removed.
- **7 of those accounts** belong to **vendors and contractors** with active sign-in activity from IP addresses in countries the company has zero business in.
- **No access reviews** have ever been run.
- **No PIM** is configured — even though the company has Microsoft 365 E5 (which includes P2 + PIM).

The investor's report includes a single line: "Identity governance posture is below acceptable thresholds for our portfolio." The Series E closes at a $40M lower valuation. The CISO is "transitioned." The new CISO's first hire is an IAM lead. The new IAM lead's first deliverable is "all admin privileges in PIM eligible-only by end of next quarter; quarterly access reviews on every privileged role."

This module is how to never be that CISO. By the end you'll know how to make standing privilege the exception, not the default — and how to prove it to an auditor at any moment.

---

## 🛂 Privileged Identity Management (PIM) — The Mental Model

**PIM** turns "always on" privileged role assignments into "**eligible — activate just-in-time, with MFA, optional approval, time-bounded, fully audited.**"

```
TRADITIONAL                          PIM-MANAGED
─────────────                        ────────────
"I'm a Global Admin"                 "I'm ELIGIBLE for Global Admin"
GA assignment is PERMANENT           GA is INACTIVE until I activate it
GA always on (24/7)                  GA active for up to 8 hours after JIT activation
Phished password = full GA           Phished password = no GA without MFA + approval
Audit: "Alice did X at time Y"        Audit: "Alice activated GA for reason 'fix tenant',
                                       approver Bob granted, used GA for 47 minutes"
```

| Concept | What it is |
|---------|------------|
| **Eligible assignment** | The user *can* activate the role, but it's INACTIVE unless they JIT-activate it |
| **Active assignment** | The role is on — same as a regular role assignment (can be time-bound or permanent) |
| **Activation** | The action of moving from eligible → active for a limited time (default 1–8 hours) |
| **Approval workflow** | Optional: a named approver (or group) must grant the activation request |
| **MFA on activation** | Required for most roles by default |
| **Justification** | Free-text reason the user enters when activating (e.g. "Fix CA misconfig, ticket SEC-1234") |
| **Audit** | Every activation, approval, and de-activation is logged in Entra audit logs + PIM history |

🔥 **MEMORIZE:** PIM = **Eligible vs Active** + **JIT activation** + **MFA + approval + justification** + **time-bound** + **audit**.

---

## 🛡️ PIM for Entra Roles vs PIM for Azure Resources vs PIM for Groups

| | **PIM for Entra Roles** | **PIM for Azure Resources** | **PIM for Groups** |
|---|--------------------------|------------------------------|--------------------|
| Manages | Entra ID directory roles (Global Admin, User Admin, …) | Azure RBAC roles (Owner, Contributor, …) | Membership of role-assignable groups |
| Scope | Tenant (or Administrative Unit) | Mgmt group / sub / RG / resource | Group membership (used elsewhere as a privilege source) |
| License | Entra ID P2 | Entra ID P2 | Entra ID P2 |
| Configurable per | Each role | Each role at each scope | Each group |
| Example | "Alice is eligible for Global Admin; JIT activates" | "Alice is eligible for Owner on Prod sub; JIT activates" | "Alice is eligible for the 'PROD-Admins' security group; JIT activates" |

🚨 **Exam trap:** **PIM for Groups requires the group to be marked as "Role-assignable"** at creation time. You can't retroactively make an existing group role-assignable. Role-assignable groups also have stricter management (Privileged Role Admin only).

---

## ⚙️ Configure An Eligible Role (Entra Role)

| Step | Detail |
|------|--------|
| 1. Open Entra portal → Identity governance → PIM → Microsoft Entra roles | The PIM blade for Entra roles |
| 2. Pick the role (e.g. Global Administrator) | Open role's settings |
| 3. Settings → Activation | Max activation duration (default 8h), require MFA, require justification, require ticket info, require approval |
| 4. Settings → Assignment | Permit active vs eligible only, allow permanent active, require justification on assignment |
| 5. Settings → Notifications | Email recipients on assignment + activation events |
| 6. Assignments → Add | Pick user/group, choose **Eligible** + start/end date |

```text
Role: Global Administrator
  Activation settings:
    Max duration: 8 hours
    Require MFA on activation: Yes
    Require justification: Yes
    Require ticket info: Yes (link to ServiceNow ticket)
    Require approval: Yes
      Approvers: GA-Approvers group
  Assignment settings:
    Allow permanent eligible: No (max 6 months)
    Allow permanent active: No
    Require justification on assignment: Yes
```

🎯 **Exam tip:** "**Require ticket information on activation**" is the underrated setting that ties every privileged activation to a JIRA/ServiceNow ticket. Auditors love this.

---

## 🔄 The Activation Flow (User Perspective)

1. User goes to PIM → My roles → Eligible roles → Activate.
2. Enters a justification (and ticket number if required).
3. Completes MFA (Authenticator / FIDO2 — driven by methods policy).
4. **If approval required:** the activation is *pending* until approver acts.
5. Approver clicks Approve in PIM → Approve requests.
6. Role becomes active for the activation duration (e.g. 4 hours).
7. At expiration, role auto-deactivates; user goes back to eligible.

```powershell
# Activate an eligible Entra role via Graph PowerShell
Connect-MgGraph -Scopes "RoleAssignmentSchedule.ReadWrite.Directory"

New-MgRoleManagementDirectoryRoleAssignmentScheduleRequest -BodyParameter @{
    Action            = "selfActivate"
    PrincipalId       = "<user-object-id>"
    RoleDefinitionId  = "<role-def-id>"   # Global Admin = 62e90394-69f5-4237-9190-012177145e10
    DirectoryScopeId  = "/"
    Justification     = "Fix CA misconfiguration. Ticket SEC-1234"
    ScheduleInfo      = @{
        StartDateTime = (Get-Date).ToString("o")
        Expiration    = @{
            Type     = "AfterDuration"
            Duration = "PT4H"   # 4 hours ISO 8601
        }
    }
}
```

🚨 **Exam trap:** **A user cannot self-approve their own activation.** The activator and approver must be different people. Microsoft enforces this server-side.

---

## 🔍 Access Reviews (the GOVERN side of governance)

**Access reviews** periodically ask: "does this user still need this access?" Reviewers can be admins, the user themselves, or the user's manager.

| Target | Examples |
|--------|----------|
| **Group membership** | "Quarterly review of `marketing-admins` group" |
| **App role assignments** | "Annual review of who's a Manager in the Expense app" |
| **Entra role assignments (incl. PIM eligible + active)** | "Quarterly review of Global Admin assignments" |
| **Azure RBAC role assignments** | "Quarterly review of Owners on Prod subscription" |
| **Access package assignments** | "Quarterly review of Project Marlin access package members" |
| **Inactive users (governance feature)** | "Disable users with no sign-ins in 90 days" |

### Configure a quarterly access review

| Setting | Detail |
|---------|--------|
| Frequency | One-time, weekly, monthly, quarterly, annually |
| Duration | How long reviewers have to respond (1 day – 1 year) |
| Reviewers | Self-review, manager, designated user/group, or recommended |
| Auto-apply results | Yes (remove if not approved by deadline) / No (require admin to apply) |
| If reviewers don't respond | Approve / Remove / Take no action |
| Recommendations enabled | ML-based "user hasn't signed in for 90 days → recommend remove" |
| Justification required | Reviewer must enter reason for keep/remove |

```text
Access Review: "Q1 Global Admins Review"
  Target: PIM-eligible Global Administrator
  Frequency: Quarterly
  Duration: 14 days
  Reviewers: Manager of each user
  Recommendations: Enabled (ML-based)
  Auto-apply if no response: Remove
  Justification required: Yes
```

🎯 **Exam tip:** **"Reviewers don't respond → Remove"** is the safe default for privileged roles. For non-privileged group memberships, "Approve" or "Take no action" is more common.

---

## 🎁 Entitlement Management — Deeper Dive

(Introduced in Module 2. Here we go deeper into the governance scenarios.)

| Concept | Detail |
|---------|--------|
| **Catalog** | Container of resources + access packages, with delegated ownership |
| **Access package** | A bundle of resources + assignment policies |
| **Assignment policy** | Rules: who can request, who approves, expiration, access review |
| **Connected organization** | External Entra tenant the packages can grant access to (auto B2B) |
| **Custom extensions** | Logic Apps that fire at activation/expiration (Entra ID Governance SKU) |
| **Verifiable credentials** | New 2025 feature: require a Verified ID credential as a prereq |

### Use case: "Project Marlin"

```text
Catalog: "Marlin Project"
  Owners: Marlin PM + IAM ops

  Resources:
    Security group: marlin-team
    Enterprise app: marlin-dashboard
    SharePoint site: Marlin Docs

  Access Packages:
    "Internal Marlin Engineer"
      Assignment policy:
        Who can request: Engineering group
        Approver: User's manager
        Expiration: 180 days
        Access review: Quarterly
    "External Marlin Partner"
      Assignment policy:
        Who can request: Anyone in connected org "acme.com"
        Approvers: 2 (Marlin PM AND security team)
        Expiration: 90 days
        Access review: Monthly
        Custom extension: On activation, post to Slack ops channel
```

---

## 🔁 Lifecycle Workflows (Entra ID Governance SKU)

(Introduced in Module 2.) The canonical use cases:

| Workflow type | Trigger attribute | Typical tasks |
|---------------|-------------------|---------------|
| **Pre-Hire (early prep)** | `employeeHireDate` is 7 days away | Generate TAP; send welcome email to personal address |
| **New Hire (day of)** | `employeeHireDate` is today | Add to default groups; provision manager; assign training; send first-day instructions |
| **Job Change (mover)** | `employeeOrgData.division` changed | Remove old groups; add new groups; notify manager; trigger access review |
| **Last Day (leaver)** | `employeeLeaveDateTime` today | Block sign-in; revoke sessions; remove app role assignments |
| **Post-Departure** | `employeeLeaveDateTime` was 30 days ago | Remove from all groups; offboard mailbox; delete account |

```text
Workflow: "Pre-Hire — 7 days before start"
  Scope: All users where employeeHireDate <= 7 days from now
  Tasks (run on schedule):
    1. Generate Temporary Access Pass (8 hours)
    2. Send "welcome and setup instructions" email to user's personal email
    3. Add user to "Pre-Hire Onboarding" group
    4. Notify manager to approve laptop order
```

🎯 **Exam tip:** Lifecycle Workflows run on a **schedule** (daily) by default but can also run **on-demand** (admin manually triggers) for testing.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "PIM works in P1" | ❌ Requires P2 |
| "Lifecycle Workflows are P2" | ❌ Requires Entra ID Governance SKU |
| "Eligible role is always active" | ❌ Inactive until JIT-activated |
| "User can self-approve their own activation" | ❌ Microsoft enforces approver ≠ activator |
| "Access reviews work only on groups" | ❌ Groups, apps, roles, RBAC, access packages, inactive users |
| "PIM for Groups works on any group" | ❌ Group must be marked role-assignable at creation |
| "MFA on activation is optional and rarely used" | ❌ Required by default for most roles |
| "Active assignment in PIM = permanent assignment" | ❌ Active can be time-bound too |
| "Lifecycle Workflows trigger in real-time on attribute change" | ❌ Daily schedule (or on-demand) |
| "Access review 'Remove' is final and irrevocable" | ❌ Admin can re-assign manually after the review applies |

---

## 🧪 Task-Sequencing Practice: Convert 23 Permanent Global Admins to PIM-Eligible

**Order these steps correctly.**

The correct order:

1. ✅ **Inventory current Global Admin assignments** via Graph (`Get-MgDirectoryRoleMember`) + tag each as needed / not-needed / vendor.
2. ✅ **Confirm Entra ID P2 license** is available to each admin (P2 is per-user-licensed for PIM).
3. ✅ **Configure PIM settings for Global Admin role:** max duration 4h, require MFA, require justification, require approval (approvers = small group of senior security), require ticket info.
4. ✅ **Create 2 cloud-only break-glass GA accounts** (if not already done); assign Global Admin **active permanent** (NOT in PIM — break-glass is excluded from PIM).
5. ✅ **For each needed admin:** add them as **Eligible** Global Administrator with end date 6 months out (max).
6. ✅ **Remove the active permanent Global Admin assignment** (they no longer have GA until they activate).
7. ✅ **Pilot the activation flow** with 2 admins; validate MFA + approval + audit.
8. ✅ **Roll out to remaining admins**; train on activation flow.
9. ✅ **Configure quarterly access review** on eligible Global Admin assignments — reviewer = each admin's manager, auto-remove if no response.
10. ✅ **Set up a KQL alert** for any Global Admin activation outside business hours.

⚠️ Skipping step 4 (break-glass) means: if PIM has an outage, NO ONE can be Global Admin → tenant lockout.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **PIM** | Privileged Identity Management — JIT role activation (P2) |
| **Eligible assignment** | User can JIT-activate the role; inactive otherwise |
| **Active assignment** | Role is on (time-bound or permanent) |
| **Activation** | The user-initiated eligible → active transition |
| **Approval workflow** | Optional approver gate on activation |
| **Justification** | Free-text reason for activation |
| **MFA on activation** | Default for most roles |
| **Ticket info** | Optional ticket number tied to activation |
| **PIM for Entra Roles** | JIT for directory roles (GA, User Admin, etc.) |
| **PIM for Azure Resources** | JIT for Azure RBAC roles |
| **PIM for Groups** | JIT for role-assignable group membership |
| **Role-assignable group** | Special group that can hold Entra role assignments (set at creation) |
| **Access review** | Periodic "do you still need this access" survey + auto-apply |
| **Recommendation** | ML hint to reviewer (e.g. "user hasn't signed in for 90 days") |
| **Entitlement management** | Self-service access package system (P2) |
| **Connected organization** | External tenant access packages can target (auto B2B) |
| **Custom extension** | Logic App firing at access package events (Governance SKU) |
| **Lifecycle Workflow** | Automated joiner/mover/leaver task flow (Governance SKU) |
| **Inactive user policy** | Disable accounts with no sign-in for N days (Governance feature) |
| **Verifiable credentials** | New 2025 Entra Verified ID prereq option for access packages |

---

## ✅ Module 6 Summary

You now know:

- 🛂 The PIM mental model: Eligible vs Active, JIT activation, MFA + approval + justification + audit
- 🛡️ Three PIM products: Entra Roles, Azure Resources, Groups (all P2)
- 🔍 Access reviews on any privilege source — groups, roles, apps, packages, RBAC
- 🎁 Entitlement management catalogs + access packages + assignment policies + connected orgs
- 🔁 Lifecycle Workflows for joiner/mover/leaver (Entra ID Governance SKU)
- 🚨 The 10 most common traps at this layer

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 7: Hybrid Identity](../Module-07-Hybrid-Identity/Reading.md)

---

## 📊 Case Study — Microsoft's Own Tier-0 Admin Conversion (2018–2024)

**Situation.** Microsoft IT (managing 150,000+ employee identities + ~7,000 admin identities across MSIT, MSFT corp, and product teams) historically operated with hundreds of standing Global Administrator assignments. Post-NotPetya and post-SolarWinds, Microsoft's own security leadership concluded that "standing privilege" was the single largest residual identity risk that MFA + Conditional Access could not fix. Microsoft Digital published a multi-year case study of the conversion.

**Decision.** Microsoft converted the tier-0 admin model in three phases:

1. **PIM Eligible-Only (2018–2020).** All standing GA assignments converted to PIM eligible. Activation required MFA + ticket + senior security approval. Within 18 months: ~98% of GAs were eligible-only; ~6 permanent active GAs remained as break-glass.
2. **Quarterly Access Reviews (2020–2022).** Every GA eligible assignment is reviewed quarterly by the user's manager. Microsoft's own data: ~12% of eligible assignments don't get re-approved each quarter (the user no longer needs the role). Automated removal saves manual cleanup.
3. **Privileged Access Workstations (PAW) for activation (2022–2024).** A Conditional Access policy requires that GA activation happens from a Privileged Access Workstation (a locked-down Windows device with no internet, no email, no productivity apps). This combines PIM (time-bound) + CA (device-bound) into a single hardened path.

**Outcome.** Per Microsoft Digital (2024-09):

- **Mean standing GA count** dropped from ~280 in 2018 to **6** in 2024 (a 98% reduction).
- **Average duration of an active GA session** dropped from 24×7×365 to **47 minutes**.
- **Time from "admin no longer needs role" to "role removed"** dropped from ~9 months (audit-driven) to ~1 week (access-review-driven).
- **Zero successful GA-credential-based attacks** against Microsoft IT after 2022.

**Lesson for the exam / for practitioners.** PIM is not "a nice-to-have." Microsoft uses it on themselves and treats it as foundational. SC-300 scenarios about "reduce standing privilege" almost always answer with: **PIM eligible + JIT activation + MFA + approval + quarterly access reviews + audit alerts**. When you see a question about regulatory or audit pressure on admin role hygiene, the answer involves PIM + Access Reviews + Lifecycle Workflows in combination.

**Discussion (Socratic).**
- **Q1.** Microsoft's 6 permanent active GAs are the break-glass tier. Argue: should those 6 be in PIM as well (eligible-only) — and what failure modes does keeping them permanent active actually defend against?
- **Q2.** A common counter to PIM is "the friction slows down incident response." Build the case for a "PIM emergency" pre-approved path (e.g. on-call GA can self-activate with no approval during a Sev1 incident). What's the trade-off?
- **Q3.** Microsoft's quarterly review removes ~12% of eligible GAs each quarter. Is "remove on no response" too aggressive? What if a manager is on vacation when the review deadline hits?

---

> **Where this leads.**
> - Inside this course: Module 7 covers Hybrid Identity (often the largest PIM-eligibility surface); Module 8 wires PIM activation events to Sentinel for SOC visibility.
> - Cross-course: [`06-Azure-Administrator` Module 2](../../06-Azure-Administrator/Module-02-Entra-ID-RBAC/Reading.md) covers PIM for Azure Resources at AZ-104 depth.
> - Practice: Practice Exam 2 has 8–10 questions from this module.

---

## 💬 Discussion — Socratic prompts

1. **"PIM as audit theater."** A skeptical engineer says: "PIM doesn't actually reduce risk — admins just activate every morning and stay activated all day." How would you instrument PIM (alerting, KQL, access reviews) to prevent this behavior, or detect it when it happens?
2. **Approver design.** Who should approve GA activations? Options: senior security only, peer-to-peer, manager, "two-person rule" with two approvers required. Build the case for each in a 4,000-person company.
3. **Access reviews vs Lifecycle Workflows.** Both clean up access. When does Lifecycle Workflows replace access reviews entirely, and when do you need both?
4. **Custom extensions for entitlement management.** What use cases justify the Entra ID Governance SKU upgrade (custom extensions) over P2 alone? Identify 3 high-ROI integrations (Slack notifications, ServiceNow ticket creation, etc.).
5. **The auditor's lens.** An external SOC 2 auditor asks: "Show me every privileged access change in the last 90 days, who approved it, and why." Walk through what PIM + Access Review history + Sentinel surfaces for them, and what gaps remain.

---

## 📚 Further Reading (Optional)

- 📖 [What is PIM?](https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure)
- 📖 [Access reviews overview](https://learn.microsoft.com/entra/id-governance/access-reviews-overview)
- 📖 [Entitlement management overview](https://learn.microsoft.com/entra/id-governance/entitlement-management-overview)
- 📖 [Lifecycle Workflows overview](https://learn.microsoft.com/entra/id-governance/what-are-lifecycle-workflows)
- 📖 [Securing privileged access strategy](https://learn.microsoft.com/security/privileged-access-workstations/overview)
- 📖 Microsoft Digital, *Securing Microsoft's elevated privileges with PIM and PAW* (case study, 2024)
- 📖 NIST SP 800-207 *Zero Trust Architecture* — frames JIT privilege as a ZTA requirement.
