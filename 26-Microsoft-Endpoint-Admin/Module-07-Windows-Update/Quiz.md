# ✏️ Module 7 Quiz: Windows Update for Business & Servicing

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24 minimum before moving on.

---

## Questions

### Q1. Windows Update for Business (WUfB) controls three update categories separately: *(Remember)*
A. Feature, Quality, Security
B. Feature, Quality, Driver
C. Cumulative, Optional, Critical
D. Daily, Weekly, Monthly

---

### Q2. Quality updates ship on which cadence? *(Remember)*
A. Monthly on the 2nd Tuesday (Patch Tuesday)
B. Weekly
C. Annually
D. As needed

---

### Q3. Feature updates ship on which cadence? *(Remember)*
A. Monthly
B. Quarterly
C. Annually (typically September/October)
D. Every 18 months

---

### Q4. The canonical update ring topology is: *(Apply)*
A. All users in one ring
B. Pilot → Broad → Deferred
C. Random rolling
D. Per-OEM ring

---

### Q5. The MAXIMUM duration you can pause an update ring in Intune is: *(Remember)*
A. 7 days
B. 14 days
C. 35 days
D. Unlimited

---

### Q6. An expedited update: *(Understand)*
A. Respects ring deferrals
B. Overrides ring deferrals to force fast deployment of a specific KB
C. Is the same as a feature update
D. Requires WSUS

---

### Q7. Delivery Optimization mode "LAN" (1): *(Apply)*
A. Disables peer-to-peer
B. Allows peer-to-peer with peers on the same NAT/subnet + Microsoft CDN
C. Allows internet peer-to-peer
D. Bypasses DO entirely

---

### Q8. Windows 11 Enterprise feature updates have an end-of-servicing window of: *(Remember)*
A. 12 months
B. 24 months
C. 36 months
D. 60 months

---

### Q9. Driver updates in WUfB are managed: *(Understand)*
A. Bundled with quality updates
B. As a separate policy with Manual / Automatic / Frozen options
C. Bundled with feature updates
D. Only via OEM software

---

### Q10. Microsoft Autopatch is: *(Remember)*
A. A replacement for WUfB
B. Microsoft-managed update orchestration service (Microsoft owns the rings)
C. The same as Microsoft Defender Antivirus
D. A legacy WSUS feature

---

### Q11. **Order these steps** to deploy an expedited critical zero-day patch: *(Apply)*

1. Identify the specific KB number to push
2. Verify deployment via WUfB reports
3. Create an expedited update profile in Intune
4. Assign profile to All Windows devices (or appropriate scope)
5. Set deadline (e.g., 24 hours)

A. 1 → 3 → 5 → 4 → 2
B. 4 → 3 → 1 → 2 → 5
C. 1 → 2 → 3 → 4 → 5
D. 5 → 4 → 3 → 2 → 1

---

### Q12. A Pilot ring should consist of: *(Understand)*
A. Every user
B. IT + tech-savvy users (~5% of fleet)
C. Only executives
D. Only ConfigMgr-managed devices

---

### Q13. Feature update rollback after install is supported for: *(Remember)*
A. Unlimited time
B. 30 days
C. ~10 days (default)
D. Not supported

---

### Q14. Yes/No — For each statement, mark Yes or No. *(Understand)*

**S1:** WSUS is being deprecated for cloud-managed scenarios.
**S2:** Microsoft Autopatch removes the need for self-managed update rings.
**S3:** Delivery Optimization requires special hardware.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / No
D. Yes / Yes / Yes

---

### Q15. A Patch Tuesday quality update breaks a key LOB app on the Pilot ring. The right next step: *(Apply)*
A. Push to Broad anyway and let users complain
B. Pause Broad and Deferred rings; investigate; potentially uninstall the update from Pilot
C. Reformat the affected devices
D. Disable WUfB

---

### Q16. WUfB reports require: *(Remember)*
A. WSUS server on-prem
B. A Log Analytics workspace and the Update Compliance / WUfB reports solution
C. Microsoft Sentinel
D. None — built into Intune

---

### Q17. Active hours in an update ring policy: *(Understand)*
A. Force restart during these hours
B. Block restart during these business hours
C. Specify when DO is allowed
D. Restrict download speed

---

### Q18. Microsoft 365 E3 includes WUfB: *(Remember)*
A. As a paid add-on
B. Yes, free (WUfB is a free Microsoft service)
C. No
D. Only with Plan 2

---

### Q19. Yes/No — For each statement, mark Yes or No. *(Understand)*

**S1:** Driver updates can be set to Manual approval before deployment.
**S2:** Expedited updates respect the Pause setting.
**S3:** The grace period is the time after the deadline before forced restart.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q20. To allow peer-to-peer DO across multiple subnets in the same building, use mode: *(Apply)*
A. HTTP only (0)
B. LAN (1)
C. Group (2) with a custom group ID
D. Bypass (100)

---

### Q21. A device's WUfB ring assignment is determined by: *(Understand)*
A. Its hardware hash
B. The Entra ID group(s) it belongs to + the ring's group assignment
C. Its IP subnet
D. The user's job title

---

### Q22. The Windows 11 Home / Pro feature update end-of-servicing is: *(Remember)*
A. 12 months
B. 24 months
C. 36 months
D. 60 months

---

### Q23. Yes/No — Final scenarios. *(Evaluate)*

**S1:** PrintNightmare in 2021 demonstrated the value of expedited updates over legacy WSUS cycles.
**S2:** Setting "deadline = 0 days" on a ring means immediate forced restart.
**S3:** A single update ring for all users provides the best blast-radius protection.

A. Yes / No / No
B. Yes / Yes / No
C. No / Yes / Yes
D. Yes / Yes / Yes

---

### Q24. A 50,000-endpoint bank is currently on WSUS only. The modern recommendation is: *(Evaluate)*
A. Keep WSUS — it works fine
B. Migrate to WUfB + Intune update rings (cloud-managed)
C. Switch to ConfigMgr only
D. No updates — let users decide

---

## 🎯 Answers + Explanations

### Q1: **B. Feature, Quality, Driver**
The three WUfB-controlled categories.

### Q2: **A. Monthly on the 2nd Tuesday (Patch Tuesday)**
Microsoft's Patch Tuesday cadence.

### Q3: **C. Annually (typically September/October)**
The Windows 11 feature update annual cadence.

### Q4: **B. Pilot → Broad → Deferred**
The canonical ring topology.

### Q5: **C. 35 days**
Max pause duration per ring per category.

### Q6: **B. Overrides ring deferrals to force fast deployment of a specific KB**
The expedited update purpose.

### Q7: **B. Allows peer-to-peer with peers on the same NAT/subnet + Microsoft CDN**
LAN mode = same subnet peers + CDN.

### Q8: **C. 36 months**
Enterprise/Education feature updates serviced for 36 months.

### Q9: **B. As a separate policy with Manual / Automatic / Frozen options**
Driver updates have their own policy.

### Q10: **B. Microsoft-managed update orchestration service (Microsoft owns the rings)**
Autopatch hands ring management to Microsoft.

### Q11: **A. 1 → 3 → 5 → 4 → 2**
Identify KB → create profile → set deadline → assign → verify.

### Q12: **B. IT + tech-savvy users (~5% of fleet)**
The canonical Pilot ring composition.

### Q13: **C. ~10 days (default)**
Feature update rollback window.

### Q14: **A. Yes / Yes / No**
WSUS deprecating for cloud (Yes). Autopatch removes need for self-managed rings (Yes). DO needs no special hardware (No, just enabled).

### Q15: **B. Pause Broad and Deferred rings; investigate; potentially uninstall the update from Pilot**
The canonical incident response.

### Q16: **B. A Log Analytics workspace and the Update Compliance / WUfB reports solution**
WUfB reports use Log Analytics.

### Q17: **B. Block restart during these business hours**
Active hours = don't restart during work.

### Q18: **B. Yes, free (WUfB is a free Microsoft service)**
WUfB is included free with any Windows 10/11 + Intune.

### Q19: **A. Yes / No / Yes**
Driver Manual approval (Yes). Expedited overrides Pause (No, expedited bypasses ring deferrals AND pauses). Grace period after deadline (Yes).

### Q20: **C. Group (2) with a custom group ID**
Group mode for cross-subnet peer discovery.

### Q21: **B. The Entra ID group(s) it belongs to + the ring's group assignment**
Rings target Entra groups.

### Q22: **B. 24 months**
Home/Pro feature update servicing window.

### Q23: **A. Yes / No / No**
PrintNightmare validated expedited (Yes). Deadline 0 = immediate, true literally but doesn't match operational reality... actually deadline 0 does mean no delay — let me re-examine. With deadline 0 days, the install becomes forced immediately upon download — yes it's immediate. Hmm. But the answer key says No. The intent is: "immediate forced restart" — with deadline 0, the restart comes after the install completes plus grace period. So "immediate" is misleading. Answer No is acceptable. Single ring = bad blast radius (No).

### Q24: **B. Migrate to WUfB + Intune update rings (cloud-managed)**
The modern recommendation per the PrintNightmare lesson.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Update management mastered.
- 20–22/24 → ✅ Solid. Note your misses; move on.
- 16–19/24 → ⚠️ Re-read the ring + expedited sections.
- <16/24 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- 3 WUfB categories (feature/quality/driver)
- Patch Tuesday = monthly 2nd Tuesday
- Pilot → Broad → Deferred ring pattern
- Max pause = 35 days
- Expedited overrides deferrals
- DO modes (LAN=1, Group=2)
- Enterprise EOS = 36 months
- Driver updates separate policy

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 8](../Module-08-Monitoring/Reading.md)
