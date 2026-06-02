---
permalink: /27-Microsoft-Identity-Access-Admin/
title: Microsoft Identity & Access Administrator Track (SC-300)
---

# 🪪 Microsoft Identity & Access Administrator Track (SC-300)

**🔐 Security · Identity** › Microsoft Certified: Identity and Access Administrator Associate (SC-300)

> **Goal:** Pass the Microsoft Certified: Identity and Access Administrator Associate (SC-300) exam at 700/1000 or higher on your first attempt.
> **Duration:** 6–8 weeks part-time (10–12 hrs/week)
> **Cost:** ~$165 USD (exam fee) · cert is valid 1 year, renewable free online via Microsoft Learn
> **Difficulty:** Associate · AZ-900 or SC-900 helpful but not required

---

## ✨ Why This Certification Matters

### 🎯 The promise

The Microsoft Certified: Identity and Access Administrator Associate (SC-300) is the credential for the engineer who owns the most important security control in any modern enterprise — **identity**. In a Zero Trust world, the perimeter is gone; identity *is* the perimeter. SC-300 holders are the practitioners trusted with Microsoft Entra ID tenants, Conditional Access policies, MFA / passwordless rollouts, Identity Protection, Privileged Identity Management, and the External ID and B2B / B2C governance that decides who gets into your tenant and what they can do once they're in.

### 💼 Career outcomes after passing

- **Identity & Access Administrator** ($95K–$130K) — owning the Entra ID tenant and Conditional Access policy set
- **IAM Engineer / Identity Engineer** ($110K–$155K) — design and operate identity at enterprise scale
- **Cloud Security Engineer (identity focus)** ($115K–$160K) — Conditional Access, PIM, Identity Protection
- **Senior Identity Architect** ($135K–$185K) — typical 2–4 years post-SC-300
- **Zero Trust Architect** ($140K–$200K) — identity-as-perimeter design at large enterprises
- **Security Consultant (Microsoft Partner — identity practice)** ($120K–$180K + bonus) — Avanade, Insight, Cognizant, Mandiant
- **CISO-track Identity Lead** ($160K–$240K + bonus) — typical at Fortune 500 with multi-tenant footprint

SC-300 pairs cleanly with **MD-102 (course 26)**, **AZ-104 (course 06)**, **AZ-800/801 (course 25)**, and **Security+ (course 09)** for the complete Modern Workplace / Identity engineer profile. Identity engineers are among the **most chronically under-supplied** roles in cybersecurity — Mandiant's 2024 M-Trends report puts identity-related compromises at the #1 initial-access vector by a wide margin, which is why identity-credentialed practitioners command a 20–30% premium over general cybersecurity peers.

### 🏛️ Why The Cert Hub's version is different

- **Engineered to the Cornell · Harvard · Princeton · Stanford pedagogical standard** — identity taught from first principles (Saltzer & Schroeder 1975 on least privilege, the Kerberos 1988 paper, the OAuth 2.0 RFC, OIDC, Microsoft's own Zero Trust architecture papers)
- **Story-driven lessons (not flashcard punishment)** — every Entra feature introduced through a real attack-response scenario (a B2B guest with too much access, a Conditional Access wedge that locks out the admins, a PIM elevation gone wrong, a credential-phishing IR walkthrough)
- **Original questions only** — every quiz and practice exam written from Microsoft's published SC-300 skills-measured outline; no copyrighted dumps
- **Real-world case studies** — the SolarWinds 2020 SAML-token forgery technique (Golden SAML), the Maersk NotPetya AD recovery, an M&A identity-merge scenario, the 2023 Storm-0558 token-signing-key compromise
- **One author, one voice** — coherent vocabulary across all 8 modules
- **Updated for the 2026 SC-300 blueprint** — current Entra terminology (External ID, Workload Identities, Verified ID), the latest Conditional Access authentication strengths, FIDO2 / passkeys, Microsoft Entra Internet/Private Access (Global Secure Access), and the current Identity Protection signal set

### 🚀 Ready to start?

Six to eight weeks. A free Microsoft 365 E5 developer tenant gives you everything (Entra P2, Conditional Access, PIM, Identity Protection) at zero cost. Build real-world policies; deliberately lock yourself out and recover. Test PIM elevation in a side tenant.

Begin with [Module 1: Entra ID Fundamentals →](./Module-01-Entra-ID-Fundamentals/Reading.md)

---

## 🎯 What You'll Learn

By the end of this track, you'll be able to:

- Stand up and brand a Microsoft Entra ID tenant, add custom domains, and pick the right license SKU (Free, P1, P2, External ID)
- Create, manage, and bulk-provision users, security groups, M365 groups, and dynamic groups using attribute-based rules
- Invite, audit, and govern external guests via B2B collaboration and Entra External ID
- Roll out MFA, FIDO2 keys, Windows Hello for Business, and passwordless to a real workforce — without locking everyone out
- Design Conditional Access policies that hit the right users, the right apps, in the right risk states — without becoming a help-desk fire
- Configure Identity Protection user-risk and sign-in-risk policies with automated remediation
- Register applications (OIDC, SAML, WS-Fed), wire up SSO, App Proxy, admin consent workflow, and app role assignments
- Operate Privileged Identity Management (PIM) for Entra roles and Azure resources with eligible/active assignments and access reviews
- Build entitlement-management access packages and Lifecycle Workflows for joiner/mover/leaver
- Pick between Entra Connect (legacy) and Entra Cloud Sync (modern), and configure password hash sync, PTA, federation, seamless SSO, and Hybrid Entra Join
- Investigate sign-in failures with KQL across sign-in/audit/provisioning logs, tune Identity Secure Score, and respond to identity-based threats

---

## 📚 The 8 Modules

| # | Module | Time | What You'll Master |
|---|--------|------|--------------------|
| 1 | [Entra ID Fundamentals](./Module-01-Entra-ID-Fundamentals/Reading.md) | 3 hrs | Tenants, editions (Free/P1/P2/External ID), custom domains, branding, directory vs Entra roles, B2B vs B2C |
| 2 | [Users, Groups & External Identities](./Module-02-Users-Groups/Reading.md) | 4 hrs | User types, bulk import, dynamic groups, group-based licensing, dynamic rules, terms of use, entitlement mgmt |
| 3 | [Authentication: MFA & Passwordless](./Module-03-Authentication/Reading.md) | 4 hrs | Methods policy, FIDO2, Authenticator, Windows Hello, certificate-based, passwordless rollout, security defaults |
| 4 | [Conditional Access & Identity Protection](./Module-04-Conditional-Access/Reading.md) | 4 hrs | CA assignments/conditions/controls, named locations, session controls, report-only, risk policies, auto-remediation |
| 5 | [Application Registration & SSO](./Module-05-Apps-SSO/Reading.md) | 4 hrs | Enterprise apps vs registrations, OIDC/SAML/WS-Fed, App Proxy, user consent, admin consent workflow, app roles |
| 6 | [Identity Governance & PIM](./Module-06-Governance-PIM/Reading.md) | 4 hrs | PIM eligible vs active, JIT activation, access reviews, entitlement mgmt (access packages, catalogs), Lifecycle Workflows |
| 7 | [Hybrid Identity (Connect / Cloud Sync)](./Module-07-Hybrid-Identity/Reading.md) | 3 hrs | Entra Connect vs Cloud Sync, OU/attribute filtering, PHS/PTA/federation, seamless SSO, write-back, Hybrid Entra Join |
| 8 | [Monitoring, Reporting & Threat Response](./Module-08-Monitoring-Threats/Reading.md) | 3 hrs | Sign-in/audit/provisioning logs, Log Analytics + Sentinel, KQL for identity, Secure Score, Defender for Identity, break-glass |

**Total study time:** ~29 hours reading + 9 hours videos + 8 hours labs/quizzes = **~46 hours**

---

## 🧪 Practice Exams (Located in `Practice-Exams/`)

| Exam | When To Take It | Length | Difficulty |
|------|-----------------|--------|------------|
| [Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md) | After Modules 1–4 | 40 Q · 80 min | ⭐⭐⭐ |
| [Practice-Exam-2](./Practice-Exams/Practice-Exam-2.md) | After Modules 5–8 | 50 Q · 95 min | ⭐⭐⭐⭐ |
| [Final-Mock-Exam](./Practice-Exams/Final-Mock-Exam.md) | 2–3 days before exam | 50 Q · 100 min | ⭐⭐⭐⭐⭐ |

**Plus:** spin up a free Microsoft 365 E5 developer tenant (90-day renewable) and **do every Graph PowerShell / portal click yourself**. The exam has drag-drop ordering, case studies, and Yes/No groups — you need finger memory and decision speed.

---

## 📖 The Single Most Important Resource

🔗 **[Microsoft Learn SC-300 study guide](https://learn.microsoft.com/credentials/certifications/resources/study-guides/sc-300)** — the exact, current list of "skills measured." Print it. Tick off every bullet as you study. Microsoft refreshes it every 3–6 months — always trust the latest version over any third-party course.

Also bookmark:

- 🔗 [Microsoft Entra documentation](https://learn.microsoft.com/entra/) — official docs (split into Identity, External ID, Identity Governance, ID Protection)
- 🔗 [Microsoft Graph PowerShell reference](https://learn.microsoft.com/powershell/microsoftgraph/) — every Graph cmdlet you'll need
- 🔗 [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) — free E5 tenant for hands-on
- 🔗 [Identity & access conceptual docs](https://learn.microsoft.com/entra/identity/conceptual-zero-trust) — Zero Trust framing
- 🔗 [Conditional Access design framework](https://learn.microsoft.com/entra/identity/conditional-access/plan-conditional-access)

---

## 🎓 What Is The SC-300 Exam?

| Detail | Specification |
|--------|---------------|
| Provider | Microsoft / Pearson VUE |
| Cost | ~$165 USD (varies by country) |
| Time | 100 minutes |
| Questions | 40–60 (exact count varies per exam form) |
| Pass mark | 700/1000 (≈ 70%) |
| Format | Multiple choice + multi-select + drag-drop ordering + Yes/No groups + 1–2 case studies |
| Delivery | Pearson VUE test center or OnVUE online proctored |
| Retake | Wait 24 hrs after 1st failure, 14 days after 2nd–4th, 1 year after 5th |
| Validity | 1 year — renew free via online assessment on Microsoft Learn |
| Prereq | None required (AZ-900 or SC-900 strongly recommended) |

### Domain Weights (Memorize These)

| Domain | Weight |
|--------|--------|
| Implement & manage user identities | 25–30% |
| Implement authentication & access management | 25–30% |
| Plan & implement workload identities | 20–25% |
| Plan & implement identity governance | 20–25% |

(Microsoft last refreshed the SC-300 objective domains 2024-10; check the live study guide above before exam day — they tweak weights without warning.)

---

## 🚦 Recommended Path (6-Week Plan)

```
Week 1: Module 1 (Entra fundamentals) + Module 2 (users/groups)
        → 10 quiz questions/day, spin up a free M365 E5 dev tenant
Week 2: Module 3 (MFA + passwordless)
        → Enroll yourself in Authenticator + a FIDO2 key
Week 3: Module 4 (Conditional Access + Identity Protection) → Practice-Exam-1
        → Build a CA policy in report-only mode
Week 4: Module 5 (app registration + SSO)
        → Register an OIDC app + a SAML SaaS app from the gallery
Week 5: Module 6 (PIM + governance) + Module 7 (hybrid identity)
        → Activate Global Reader via PIM JIT; install Entra Cloud Sync in a lab
Week 6: Module 8 (monitoring + threats) + Practice-Exam-2 + Final-Mock-Exam
        → KQL drills on sign-in logs → SCHEDULE EXAM
```

8-week pace: stretch Weeks 4–5 across two weeks each. Add a "Conditional Access design week" between weeks 3 and 4 if your background is light on auth.

---

## ⚠️ The 7 Most Common Reasons People Fail

1. ❌ **Confused B2B vs B2C (External ID)** — partners vs consumers; the exam loves a 4-option question that hinges on this single distinction.
2. ❌ **Wrong license tier** — CA = P1, Identity Protection = P2, PIM = P2, Lifecycle Workflows = P2 (Governance add-on in some scenarios). Memorize the table.
3. ❌ **Built CA policies that locked themselves out** — every real admin has done it once. The exam wants you to know *break-glass accounts* + *report-only mode* + the "What If" tool.
4. ❌ **Mixed up directory roles, Entra roles, and Azure RBAC** — three different role systems. They share names but not scopes.
5. ❌ **Skipped App Proxy / SSO mechanics** — OIDC vs SAML vs WS-Fed, redirect URIs, reply URLs, and admin consent are 5–7 exam questions you can lock in cold.
6. ❌ **Underrated PIM** — eligible vs active, JIT, MFA on activation, approval workflow, audit. Every governance scenario funnels through PIM.
7. ❌ **Ignored hybrid identity** — Entra Connect, Cloud Sync, PHS, PTA, federation, write-back, Hybrid Entra Join — Microsoft tests these even though "everyone's all cloud now."

---

## 🎬 Start Here

👉 [**Module 1: Entra ID Fundamentals**](./Module-01-Entra-ID-Fundamentals/Reading.md)

Identity is the new perimeter. Everything you build on top of Azure, M365, or third-party SaaS sits on this layer. Master it and most security problems go away. 🪪
