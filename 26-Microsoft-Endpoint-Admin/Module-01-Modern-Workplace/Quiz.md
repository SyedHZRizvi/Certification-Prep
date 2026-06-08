# ✏️ Module 1 Quiz: Modern Workplace & Endpoint Strategy

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. Which Microsoft Entra device join state is correct for a corporate-owned Windows 11 laptop with no on-prem AD dependency? *(Remember)*
A. Entra registered
B. Entra hybrid joined
C. Entra joined
D. AD domain joined

---

### Q2. What is the primary distinction between MDM and MAM? *(Understand)*
A. MDM is for Windows only; MAM is for mobile only
B. MDM enrolls and manages the entire device; MAM protects data inside specific apps
C. MDM is older technology being phased out; MAM is the modern replacement
D. MDM is free; MAM requires Entra ID P2

---

### Q3. Recite the three principles of Zero Trust. *(Remember)*
A. Trust but verify, Defend in depth, Patch always
B. Authenticate, Authorize, Audit
C. Verify explicitly, Least privilege, Assume breach
D. Identify, Protect, Detect

---

### Q4. An employee refuses to enroll their personal iPhone but needs corporate email access. What's the right pattern? *(Apply)*
A. Require MDM enrollment as a condition of employment
B. Block all corporate email access from personal devices
C. MAM without enrollment + app protection policy on Outlook Mobile
D. Hybrid Azure AD join the iPhone

---

### Q5. Which join state is BEST for an organization that needs to keep using Kerberos-authenticated legacy LOB apps on Windows endpoints? *(Apply)*
A. Entra registered only
B. Entra joined (cloud-only)
C. Microsoft Entra hybrid joined
D. Workgroup (no join)

---

### Q6. Which statement about Windows-as-a-Service is TRUE? *(Understand)*
A. Quality updates ship annually; feature updates ship monthly
B. Feature updates ship annually; quality updates ship monthly
C. Both feature and quality updates ship monthly
D. Driver updates are bundled with feature updates only

---

### Q7. Which Conditional Access scenario is correctly modern-aligned? *(Apply)*
A. Trust any request from the corporate IP range
B. Require MFA + compliant device for sensitive apps
C. Allow access from any device joined to AD
D. Bypass CA when the user is on the office Wi-Fi

---

### Q8. Co-management refers to: *(Remember)*
A. Two admins co-owning a device
B. A Windows device managed by both Configuration Manager and Intune simultaneously
C. Microsoft Defender for Endpoint managing Intune
D. Hybrid join's official Microsoft name

---

### Q9. How many co-management workloads can be sliders between ConfigMgr and Intune? *(Remember)*
A. 3
B. 5
C. 7
D. 9

---

### Q10. Which is NOT a co-management workload? *(Remember)*
A. Compliance policies
B. Windows Update policies
C. Office Click-to-Run apps
D. Active Directory replication

---

### Q11. A personally owned Android phone enrolled with Android Enterprise work profile is an example of: *(Understand)*
A. MAM without enrollment
B. MAM with enrollment (MAM-WE)
C. Full MDM (corporate)
D. Workgroup

---

### Q12. The "PRT" issued during Entra-joined sign-in stands for: *(Remember)*
A. Primary Resource Token
B. Primary Refresh Token
C. Public Resource Ticket
D. Persistent Replication Token

---

### Q13. **Order these steps** when planning a new customer's join strategy: *(Apply)*

1. Pilot with one persona before broad rollout
2. Inventory legacy AD-bound dependencies
3. Score each dependency (replaceable / Entra Kerberos / line-of-sight required)
4. Decide cloud-only vs hybrid based on category C count
5. Document persona → join-state matrix

A. 2 → 3 → 4 → 5 → 1
B. 4 → 3 → 2 → 1 → 5
C. 5 → 2 → 3 → 4 → 1
D. 1 → 2 → 3 → 4 → 5

---

### Q14. Which is TRUE about Entra registered devices? *(Understand)*
A. They are corporate-owned and fully managed
B. They are personally owned, with a corporate identity attached for app access
C. They cannot use Conditional Access
D. They are the same as Entra joined

---

### Q15. A frontline worker uses a shared tablet that needs to boot to a single app with no sign-in. The right deployment model is: *(Analyze)*
A. Hybrid Azure AD join + GPO
B. BYOD MAM-only
C. Autopilot self-deploying mode + Intune kiosk policy
D. Configuration Manager image with task sequence

---

### Q16. Which is TRUE about the modern security perimeter? *(Understand)*
A. The corporate firewall is the perimeter
B. Identity is the new perimeter
C. The endpoint OS is the perimeter
D. Only the data classification is the perimeter

---

### Q17. Which Entra ID tier is REQUIRED for Conditional Access? *(Remember)*
A. Free
B. P1
C. P2
D. Office 365 E3

---

### Q18. A traditional GPO that maps a network drive does not apply to an Entra-joined device. The modern equivalent is: *(Apply)*
A. A logon script delivered via Intune
B. An Intune configuration profile or Settings Catalog policy
C. A Conditional Access policy
D. A compliance policy

---

### Q19. Yes/No, For each statement, mark Yes or No. *(Understand)*

**S1:** A device can be both Entra registered and Entra joined simultaneously.
**S2:** A device can be Entra joined and Configuration Manager–managed simultaneously (co-managed).
**S3:** A personally owned Android phone can be MDM-enrolled via Android Enterprise work profile.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / Yes / No
D. No / No / Yes

---

### Q20. Microsoft Defender for Endpoint reports a high-risk device. Which Intune feature consumes that signal to mark the device non-compliant? *(Apply)*
A. The Conditional Access engine
B. The compliance connector / compliance policy with a Defender machine-risk setting
C. The Windows Update for Business ring
D. The Endpoint analytics agent

---

### Q21. Which deployment is BEST for a salesperson who unboxes a new laptop at home and must be productive within an hour, with no IT help? *(Analyze)*
A. Ship the device to IT first for imaging via SCCM
B. Configuration Manager OSD via PXE boot
C. Windows Autopilot user-driven mode with Entra join
D. Provisioning package on USB

---

### Q22. A Zero Trust posture would reject which of the following as a primary access control? *(Analyze)*
A. Conditional Access with device compliance
B. Multi-factor authentication
C. "Trust all devices on the corporate VLAN"
D. Risk-based sign-in policies

---

### Q23. Which describes a hybrid Azure AD joined (Entra hybrid joined) device? *(Understand)*
A. Joined to Entra ID only
B. Joined to on-prem AD only
C. Joined to both on-prem AD and Entra ID, with synced device objects
D. Joined to neither, workgroup

---

### Q24. Yes/No, Choose Yes or No for each statement. *(Evaluate)*

**S1:** MAM-WE requires the device to be enrolled.
**S2:** MAM without enrollment provides full device wipe capability.
**S3:** App protection policies can encrypt corporate data inside Outlook Mobile.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q25. A customer says "we want our endpoint platform to survive an Active Directory outage as Maersk did after NotPetya." The strategic answer is: *(Evaluate)*
A. Better AD backups and warm standby DCs
B. Move endpoint management to Entra joined + Intune + Conditional Access + Defender for Endpoint
C. Air-gap the production AD
D. Switch to Linux endpoints

---

## 🎯 Answers + Explanations

### Q1: **C. Entra joined**
Corporate-owned + no AD dependency = cloud-only. Entra registered is BYOD. Hybrid is for orgs with active AD dependencies. AD-only is the legacy model.

### Q2: **B. MDM enrolls and manages the entire device; MAM protects data inside specific apps**
Memorize this distinction, it underlies dozens of MD-102 questions.

### Q3: **C. Verify explicitly, Least privilege, Assume breach**
The three Zero Trust principles per Microsoft's reference architecture.

### Q4: **C. MAM without enrollment + app protection policy on Outlook Mobile**
The modern BYOD answer when the user won't enroll. Protects the *data*, not the device.

### Q5: **C. Microsoft Entra hybrid joined**
Kerberos to on-prem services needs AD line-of-sight (or Entra Kerberos as a workaround). Hybrid join keeps both.

### Q6: **B. Feature updates ship annually; quality updates ship monthly**
Annual feature uplift (e.g., 24H2), monthly cumulative security/quality patches on Patch Tuesday.

### Q7: **B. Require MFA + compliant device for sensitive apps**
A textbook Zero Trust CA pattern. Network-location-based trust (A, C, D) is the wrong era.

### Q8: **B. A Windows device managed by both Configuration Manager and Intune simultaneously**
Co-management is the Microsoft term for the parallel-management bridge during migration.

### Q9: **C. 7**
Seven workload sliders: compliance, Windows Update, resource access, endpoint protection, device config, Office Click-to-Run, client apps.

### Q10: **D. Active Directory replication**
AD replication is not a co-management workload, it's an AD subsystem entirely.

### Q11: **B. MAM with enrollment (MAM-WE)**
Work profile = the device is enrolled but only the work container is managed. That's the MAM-WE pattern.

### Q12: **B. Primary Refresh Token**
PRT is the SSO token issued by Entra ID to an Entra-joined Windows session.

### Q13: **A. 2 → 3 → 4 → 5 → 1**
Inventory → score → decide → document → pilot. You pilot last after deciding the strategy.

### Q14: **B. They are personally owned, with a corporate identity attached for app access**
Entra registered = BYOD. The device is theirs; the corporate identity rides on top.

### Q15: **C. Autopilot self-deploying mode + Intune kiosk policy**
Self-deploying = no user interaction at first boot. Add an Intune kiosk profile for the single-app lock.

### Q16: **B. Identity is the new perimeter**
The defining Zero Trust principle. Network location stopped being meaningful when work happens from any location.

### Q17: **B. P1**
Conditional Access is a P1 feature. Identity Protection (risk-based CA) is P2.

### Q18: **B. An Intune configuration profile or Settings Catalog policy**
Settings Catalog has parity with most GPOs. Login scripts work but aren't the right primary tool.

### Q19: **B. No / Yes / Yes**
A device can't be both registered and joined. Co-management is real. Android work profile is a real MDM enrollment scenario.

### Q20: **B. The compliance connector / compliance policy with a Defender machine-risk setting**
The compliance policy can include a "Maximum allowed machine risk score" setting that consumes Defender for Endpoint's risk signal. CA then blocks access based on the non-compliant flag.

### Q21: **C. Windows Autopilot user-driven mode with Entra join**
The canonical direct-ship cloud-only flow. Anything that requires IT touch (A, B) defeats the purpose.

### Q22: **C. "Trust all devices on the corporate VLAN"**
Network-based trust is the antithesis of Zero Trust.

### Q23: **C. Joined to both on-prem AD and Entra ID, with synced device objects**
Hybrid = both. Sync is handled by Entra Connect / Cloud Sync.

### Q24: **A. Yes / No / Yes**
MAM-WE requires enrollment (Yes). MAM-only cannot wipe a personal device, only the work data (No). APP can encrypt data inside protected apps (Yes).

### Q25: **B. Move endpoint management to Entra joined + Intune + Conditional Access + Defender for Endpoint**
The Maersk lesson, endpoint resilience to AD outage means decoupling endpoint management from AD.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Strategy locked in.
- 21–23/25 → ✅ Solid. Note your misses; move on.
- 17–20/25 → ⚠️ Re-read the join-state and BYOD sections. Re-quiz tomorrow.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- The 4 endpoint eras + dates
- 3 Entra join states + when each fits
- MDM vs MAM vs MAM-WE (one sentence each)
- 3 Zero Trust principles (verbatim)
- 7 co-management workloads
- "Identity is the new perimeter"
- Compliance signal → CA enforcement flow
- Maersk lesson, endpoint mgmt should survive AD outage

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 2](../Module-02-Windows-11-Deployment/Reading.md)
