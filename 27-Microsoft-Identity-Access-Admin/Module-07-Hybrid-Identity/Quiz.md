# ✏️ Module 7 Quiz: Hybrid Identity with Entra Connect / Cloud Sync

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. The MODERN, lighter-weight hybrid sync product Microsoft recommends for new deployments is: *(Remember)*
A. Microsoft Entra Connect (Sync)
B. Microsoft Entra Cloud Sync
C. Active Directory Federation Services (AD FS)
D. Microsoft Identity Manager (MIM)

---

### Q2. Which auth topology is Microsoft's preferred recommendation in 2026? *(Remember)*
A. Federation with AD FS
B. Pass-Through Authentication only
C. Password Hash Sync (PHS) + Seamless SSO
D. SAML-only direct federation

---

### Q3. Password Hash Sync (PHS) sends: *(Understand)*
A. The plaintext password to Entra
B. A hash of a hash, salted, iterated 1,000 times (cannot be reversed)
C. An encrypted password with Microsoft's public key
D. Only the password's length

---

### Q4. Pass-Through Authentication (PTA) requires at MINIMUM (for HA): *(Remember)*
A. 1 agent
B. 2 agents
C. 3 agents
D. 5 agents

---

### Q5. Cloud Sync does NOT support: *(Understand)*
A. Password Hash Sync
B. Seamless SSO
C. Federation and Pass-Through Authentication
D. Multi-forest sync without trust

---

### Q6. Seamless SSO uses which protocol against AD? *(Remember)*
A. NTLM
B. Kerberos
C. SAML
D. OIDC

---

### Q7. The computer account created in AD for Seamless SSO is named: *(Remember)*
A. `EntraIDSSO`
B. `AZUREADSSOACC`
C. `SeamlessSSO`
D. `O365SSO`

---

### Q8. **Yes/No** — Sync products. *(Understand)*

**S1:** Both Entra Connect and Cloud Sync support password write-back.
**S2:** Group write-back is supported only in Entra Connect.
**S3:** Cloud Sync supports federation if AD FS is installed.

A. Yes / Yes / No
B. No / Yes / Yes
C. Yes / No / Yes
D. No / No / No

---

### Q9. A scenario: "Multi-forest M&A — newly acquired forest has no trust to existing forest." Best fit: *(Apply)*
A. Entra Connect with forest trust
B. Cloud Sync (supports multi-forest without trust)
C. Federation
D. SCIM

---

### Q10. **Federation** topology in 2026 is being: *(Understand)*
A. Recommended for all new deployments
B. Deprecated; Microsoft is migrating federation customers to cloud auth
C. Now the only option for hybrid
D. Required for FIDO2

---

### Q11. Hybrid Entra Joined (HEJ) device is: *(Understand)*
A. Cloud-only (no AD)
B. AD-joined AND registered in Entra ID
C. AD-joined only
D. Entra-joined only

---

### Q12. Changing Entra Connect OU filter to EXCLUDE an OU that previously included 4,200 users → those users: *(Apply)*
A. Stay synced as before
B. Are marked as deleted (soft-delete) in Entra; permanent loss after 30 days
C. Are converted to Cloud Sync
D. Are converted to guests

---

### Q13. Which write-back is supported by Cloud Sync? *(Remember)*
A. Password write-back only
B. Password + group write-back
C. Password + group + device write-back
D. All four write-back types

---

### Q14. **Yes/No** — Auth topology features. *(Understand)*

**S1:** PHS allows users to sign in to Entra even if the on-prem domain controller is down.
**S2:** PTA validates passwords on-prem; password never leaves the corporate network.
**S3:** Federation pushes the auth signal to AD FS, reducing the signal Entra has for Identity Protection.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / Yes / No
D. No / No / Yes

---

### Q15. Entra Connect "staging mode" lets the server: *(Apply)*
A. Continue exporting changes to Entra
B. Receive sync changes but NOT export them; used for HA + migration
C. Cease all functionality
D. Become a federation server

---

### Q16. Even with Federation enabled, Microsoft recommends enabling PHS as: *(Apply)*
A. Cost optimization
B. Backup auth method (DR if AD FS is down)
C. Replacement for Conditional Access
D. SSO performance booster

---

### Q17. The `AZUREADSSOACC$` computer account password should be rotated: *(Remember)*
A. Never (Microsoft auto-rotates)
B. Every 30 days (Microsoft recommendation)
C. Every 90 days
D. Every 1 year

---

### Q18. **Yes/No** — Hybrid Entra Join. *(Understand)*

**S1:** HEJ devices can be targeted by Conditional Access requiring "Hybrid Entra Joined device."
**S2:** Entra-Joined devices are the same as Hybrid Entra Joined.
**S3:** HEJ supports co-management with Intune + Configuration Manager.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / No / No

---

### Q19. A scenario: "We need to retire AD FS over 18 months." First step: *(Apply)*
A. Decommission AD FS servers immediately
B. Enable PHS in parallel (as backup) while AD FS remains primary
C. Migrate to Cloud Sync
D. Switch to PTA

---

### Q20. Provisioning logs in the Entra portal are most useful for: *(Apply)*
A. Authentication failures
B. Conditional Access policy evaluation
C. Cloud Sync provisioning events + SCIM provisioning to SaaS
D. PIM activation history

---

### Q21. **Order these steps** to migrate from Entra Connect to Cloud Sync. *(Apply)*

1. Install Cloud Sync agent on 2+ servers
2. Inventory features used in Entra Connect (PTA, federation, group write-back)
3. Set Entra Connect to staging mode
4. Activate Cloud Sync as primary

A. 1 → 2 → 3 → 4
B. 2 → 1 → 3 → 4
C. 4 → 3 → 2 → 1
D. 3 → 1 → 2 → 4

---

### Q22. A common attribute used to drive Lifecycle Workflows is: *(Apply)*
A. `displayName`
B. `employeeHireDate` / `employeeLeaveDateTime`
C. `mobilePhone`
D. `givenName`

---

### Q23. Which is NOT a supported Entra Connect feature? *(Understand)*
A. Pass-Through Authentication
B. Federation with AD FS
C. Real-time per-attribute sync triggered by AD change events
D. Group write-back

---

### Q24. Cloud Sync configuration is managed: *(Remember)*
A. Locally on the agent server via Sync Service Manager
B. Centrally from Microsoft Entra portal (cloud-side config)
C. Via Group Policy
D. Via AD FS

---

### Q25. **Yes/No** — Topology decisions. *(Evaluate)*

**S1:** PHS + Seamless SSO is the simplest and most-recommended modern hybrid topology.
**S2:** Federation is being modernized via Entra-native CBA for smart-card scenarios.
**S3:** Cloud Sync supports federation directly without AD FS.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

## 🎯 Answers + Explanations

### Q1: **B. Microsoft Entra Cloud Sync**
Modern, lighter-weight, recommended for new deployments unless you need a Connect-only feature.

### Q2: **C. Password Hash Sync (PHS) + Seamless SSO**
Microsoft's documented recommendation for 2026.

### Q3: **B. A hash of a hash, salted, iterated 1,000 times**
Hash-of-hash design ensures even Microsoft can't reverse to the password.

### Q4: **C. 3 agents**
Microsoft recommends ≥3 PTA agents for HA. Single-agent = SPOF for all sign-ins.

### Q5: **C. Federation and Pass-Through Authentication**
Cloud Sync does NOT support federation or PTA.

### Q6: **B. Kerberos**
Seamless SSO uses Kerberos against the `AZUREADSSOACC` computer account.

### Q7: **B. `AZUREADSSOACC`**
The canonical computer account name.

### Q8: **A. Yes / Yes / No**
S1 yes (password write-back supported in both). S2 yes (group write-back is Connect-only). S3 no (Cloud Sync doesn't support federation).

### Q9: **B. Cloud Sync (supports multi-forest without trust)**
The major architectural win of Cloud Sync vs Connect.

### Q10: **B. Deprecated; Microsoft is migrating federation customers to cloud auth**
Federation pushes auth off-cloud, losing signal. Direction is cloud auth.

### Q11: **B. AD-joined AND registered in Entra ID**
HEJ = both worlds. Pure Entra Joined = cloud-only.

### Q12: **B. Are marked as deleted (soft-delete) in Entra; permanent loss after 30 days**
The classic OU-filter mistake. Soft-delete window is 30 days.

### Q13: **A. Password write-back only**
Cloud Sync supports only password write-back; group/device/attribute write-back is Connect-only.

### Q14: **A. Yes / Yes / Yes**
All three true.

### Q15: **B. Receive sync changes but NOT export them**
Staging mode allows a Connect server to be "ready to take over" without writing.

### Q16: **B. Backup auth method (DR if AD FS is down)**
PHS-as-DR is Microsoft's recommendation even for federation customers.

### Q17: **B. Every 30 days (Microsoft recommendation)**
Microsoft-published guidance; rotate the SSO computer account password regularly.

### Q18: **A. Yes / No / Yes**
S1 yes. S2 no (different — HEJ is both worlds). S3 yes (HEJ supports co-management).

### Q19: **B. Enable PHS in parallel (as backup) while AD FS remains primary**
Lufthansa pattern: PHS as backup BEFORE decommissioning AD FS.

### Q20: **C. Cloud Sync provisioning events + SCIM provisioning to SaaS**
Provisioning logs are for sync + SCIM provisioning, not auth.

### Q21: **B. 2 → 1 → 3 → 4**
Inventory first, install agent, stage Connect, activate Cloud Sync.

### Q22: **B. `employeeHireDate` / `employeeLeaveDateTime`**
The canonical lifecycle workflow trigger attributes.

### Q23: **C. Real-time per-attribute sync triggered by AD change events**
Connect runs on a 30-min schedule (default), not real-time triggered.

### Q24: **B. Centrally from Microsoft Entra portal (cloud-side config)**
Cloud Sync's selling point: config in the cloud, not on the agent.

### Q25: **A. Yes / Yes / No**
S1 yes. S2 yes. S3 no (Cloud Sync doesn't support federation).

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Hybrid identity mastery.
- 21–23/25 → ✅ Solid. Note misses; move on.
- 17–20/25 → ⚠️ Re-read Connect vs Cloud Sync + Auth Topology sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- Connect = legacy / full-featured; Cloud Sync = modern / lighter
- PHS = hash-of-hash, salted, 1,000 iterations
- PTA = ≥3 agents for HA
- Cloud Sync does NOT support: federation, PTA, group write-back, device write-back
- Federation deprecation: migrate to PHS + Seamless SSO
- Seamless SSO = Kerberos, `AZUREADSSOACC` computer account
- HEJ = AD-joined AND Entra-registered (NOT same as Entra Joined)
- OU filter mistake = mass soft-delete

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 8](../Module-08-Monitoring-Threats/Reading.md)
