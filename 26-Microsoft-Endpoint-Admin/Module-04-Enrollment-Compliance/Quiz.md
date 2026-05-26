# ✏️ Module 4 Quiz: Device Enrollment & Compliance

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. Apple Business Manager (ABM) is used to: *(Remember)*
A. Manage Apple Music subscriptions
B. Assign company-purchased Apple devices to your MDM and bulk-buy apps
C. Replace Conditional Access for iOS
D. Manage user Apple IDs only

---

### Q2. Supervised iOS / iPadOS devices unlock additional MDM capabilities. Supervision requires: *(Apply)*
A. Manual enrollment via Company Portal
B. Apple Business Manager + Automated Device Enrollment (ADE)
C. Knox Mobile Enrollment
D. A configuration profile only

---

### Q3. The four Android Enterprise enrollment scenarios are: *(Remember)*
A. BYOD, COPE, Fully Managed, Dedicated
B. AOSP, Knox, BYOD, Carrier
C. Personal, Corporate, Family, Shared
D. Free, Pro, Enterprise, Ultimate

---

### Q4. A barcode-scanner tablet shared across warehouse shifts is BEST enrolled as: *(Apply)*
A. Personally owned with work profile
B. COPE
C. Fully Managed
D. Dedicated (COSU)

---

### Q5. Android Enterprise requires which Google account type? *(Remember)*
A. Google Workspace
B. Managed Google Play
C. Personal Gmail
D. Google Family Link

---

### Q6. Enrollment restrictions in Intune target: *(Apply)*
A. Device groups
B. User groups
C. Subscription IDs
D. Conditional Access policies

---

### Q7. A compliance policy returns: *(Remember)*
A. Allow / Deny
B. Compliant / Not compliant / In grace / Not evaluated
C. Pass / Fail
D. Audit / Block

---

### Q8. Compliance is a *flag*. What actually BLOCKS sign-in based on it? *(Understand)*
A. Microsoft Defender for Endpoint
B. Conditional Access "Require compliant device" grant control
C. Intune RBAC
D. The Company Portal

---

### Q9. A Conditional Access policy in "Report-only" mode: *(Understand)*
A. Blocks access but logs the attempt
B. Logs what the policy would have done without enforcing it
C. Is the same as disabled
D. Sends a daily email to admins

---

### Q10. The "Filter for Devices" Conditional Access condition lets you: *(Apply)*
A. Filter Defender alerts
B. Target or exclude devices by attribute without using groups
C. Block all non-Windows devices
D. Replace dynamic device groups entirely

---

### Q11. **Order these steps** to enforce "compliant device required" for SharePoint Online access: *(Apply)*

1. Test the CA policy in Report-only mode
2. Build the compliance policy (Windows + iOS + Android variants)
3. Verify devices report compliant
4. Switch CA to On after Report-only validation
5. Create the CA policy (apps = SharePoint, grant = require compliant)

A. 2 → 3 → 5 → 1 → 4
B. 5 → 4 → 1 → 2 → 3
C. 1 → 2 → 3 → 4 → 5
D. 3 → 2 → 1 → 5 → 4

---

### Q12. Yes/No — For each statement, mark Yes or No. *(Understand)*

**S1:** Supervised iOS devices can be locked to a single app via kiosk profile.
**S2:** Enrollment restrictions assign to device groups.
**S3:** Android Enterprise Dedicated devices commonly run a single app.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / No
D. Yes / No / No

---

### Q13. A device-affinity (no primary user) enrollment is typical for: *(Apply)*
A. A sales rep's corporate laptop
B. A shared kiosk tablet
C. An executive iPad
D. A consultant's personal phone

---

### Q14. To exclude a single break-glass admin account from all CA enforcement, you'd: *(Apply)*
A. Delete its CA-eligible groups
B. Use the Users → Exclude clause on every CA policy
C. Give it the Global Administrator role only
D. Skip — break-glass should be subject to all policies

---

### Q15. A high-assurance Windows 11 scenario requires verifying boot chain integrity. The right Intune mechanism is: *(Analyze)*
A. BitLocker policy only
B. Defender for Endpoint Plan 1
C. Compliance policy requiring Device Health Attestation + Defender for Endpoint machine risk
D. Conditional Access location restriction

---

### Q16. Apple's Volume Purchase Program (VPP) is used to: *(Remember)*
A. Manage iCloud storage
B. Purchase and license Apple Store apps in bulk and assign device/user tokens
C. Bypass Conditional Access
D. Manage Apple software updates

---

### Q17. Yes/No — Conditional Access. *(Understand)*

**S1:** A CA policy can require both MFA and a compliant device.
**S2:** A CA policy can target a specific cloud app like Salesforce.
**S3:** A CA policy can exclude break-glass accounts.

A. No / Yes / Yes
B. Yes / Yes / Yes
C. Yes / No / Yes
D. Yes / Yes / No

---

### Q18. A 4-year-old Android 9 device needs to enroll. The Intune compliance policy requires Android 11+. Result: *(Apply)*
A. Device enrolls but is marked non-compliant
B. Device blocks enrollment
C. Device enrolls and is compliant
D. Compliance is skipped for older OS

---

### Q19. Knox Mobile Enrollment is specific to: *(Remember)*
A. Apple iOS
B. Samsung Android devices
C. Microsoft Surface devices
D. Linux endpoints

---

### Q20. To enforce "personal phones must use Outlook Mobile, not native Mail, for corporate email," configure: *(Analyze)*
A. A configuration profile
B. CA with "Require approved client app" + "Require app protection policy" + block legacy auth/ActiveSync
C. A compliance policy with email rules
D. Enrollment restrictions

---

### Q21. The flow for ABM-based ADE enrollment is: *(Apply)*
A. User signs in to Company Portal → device enrolls
B. Device powers on → contacts Apple → Apple says "enroll to this MDM" → device auto-enrolls
C. IT runs PowerShell on the device
D. User scans a QR code

---

### Q22. Yes/No — Compliance & CA. *(Evaluate)*

**S1:** Compliance grace period delays action when a device falls out of compliance.
**S2:** A user can be in both a CA Include group and Exclude group; Include wins.
**S3:** Filter for Devices works on Microsoft Entra hybrid joined devices.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / No / No

---

### Q23. To remotely wipe ONLY the work data from a personal Android phone (leaving photos, personal apps intact): *(Apply)*
A. Full device wipe
B. Selective wipe / App selective wipe via APP
C. Factory reset
D. Block sign-in

---

### Q24. A new sensitive app's CA policy goes live on Monday morning. Hundreds of users are blocked because their devices haven't sync'd compliance yet. The right pre-launch step would have been: *(Analyze)*
A. Disable the policy
B. Run the policy in Report-only mode for 3–7 days first
C. Apply to fewer users
D. Skip the compliance check

---

### Q25. The Unilever-style BYOD model uses which combination? *(Evaluate)*
A. Full MDM enrollment for all personal devices
B. App Protection Policy (no enrollment) + CA require approved client app + require app protection policy + block legacy/ActiveSync
C. Trust the corporate network
D. No mobile email access

---

## 🎯 Answers + Explanations

### Q1: **B. Assign company-purchased Apple devices to your MDM and bulk-buy apps**
ABM is Apple's enterprise device + app portal — required for ADE and VPP.

### Q2: **B. Apple Business Manager + Automated Device Enrollment (ADE)**
Supervision only comes via ADE/ABM, not manual enrollment.

### Q3: **A. BYOD, COPE, Fully Managed, Dedicated**
The four Android Enterprise scenarios.

### Q4: **D. Dedicated (COSU)**
Shared single-purpose corporate device = Dedicated.

### Q5: **B. Managed Google Play**
Required for all Android Enterprise scenarios. Google Workspace is unrelated.

### Q6: **B. User groups**
Devices don't exist yet pre-enrollment. Restrictions target users.

### Q7: **B. Compliant / Not compliant / In grace / Not evaluated**
Four canonical states.

### Q8: **B. Conditional Access "Require compliant device" grant control**
Compliance is a signal; CA is the enforcer.

### Q9: **B. Logs what the policy would have done without enforcing it**
Report-only is the safe test mode.

### Q10: **B. Target or exclude devices by attribute without using groups**
Filter for Devices works on device attributes directly.

### Q11: **A. 2 → 3 → 5 → 1 → 4**
Build compliance → verify sync → create CA → report-only → switch on.

### Q12: **A. Yes / No / Yes**
Supervised iOS supports kiosk (Yes). Enrollment restrictions target *user* groups, not device (No). Dedicated = single app (Yes).

### Q13: **B. A shared kiosk tablet**
Device-affinity = no primary user. Kiosk/shared scenarios.

### Q14: **B. Use the Users → Exclude clause on every CA policy**
Standard pattern — exclude break-glass from every CA.

### Q15: **C. Compliance policy requiring Device Health Attestation + Defender for Endpoint machine risk**
Attestation + risk score = high-assurance compliance signal.

### Q16: **B. Purchase and license Apple Store apps in bulk and assign device/user tokens**
VPP is Apple's enterprise app licensing.

### Q17: **B. Yes / Yes / Yes**
All three are standard CA capabilities.

### Q18: **A. Device enrolls but is marked non-compliant**
Compliance is evaluated after enrollment. Enrollment isn't blocked (unless enrollment restrictions specifically do so).

### Q19: **B. Samsung Android devices**
Knox Mobile Enrollment is Samsung-specific.

### Q20: **B. CA with "Require approved client app" + "Require app protection policy" + block legacy auth/ActiveSync**
The canonical Unilever-style answer.

### Q21: **B. Device powers on → contacts Apple → Apple says "enroll to this MDM" → device auto-enrolls**
The zero-touch ADE flow.

### Q22: **A. Yes / No / Yes**
Grace exists (Yes). In CA, Exclude wins (No, not Include). Filter works on hybrid-joined devices (Yes).

### Q23: **B. Selective wipe / App selective wipe via APP**
Removes corporate data from protected apps; personal data untouched.

### Q24: **B. Run the policy in Report-only mode for 3–7 days first**
The textbook pre-launch CA validation step.

### Q25: **B. App Protection Policy (no enrollment) + CA require approved client app + require app protection policy + block legacy/ActiveSync**
The Unilever BYOD model verbatim.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Enrollment + compliance mastered.
- 21–23/25 → ✅ Solid. Note your misses; move on.
- 17–20/25 → ⚠️ Re-read ABM/Android scenarios and the CA section.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- ABM + ADE flow + supervision
- 4 Android Enterprise scenarios + when each fits
- Enrollment restrictions target user groups
- Compliance flag vs CA enforcer
- Report-only mode as pre-launch validator
- Filter for Devices vs dynamic group
- Break-glass exclusion mandatory
- Unilever BYOD = APP + CA require approved client app + block legacy

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 5](../Module-05-App-Deployment/Reading.md)
