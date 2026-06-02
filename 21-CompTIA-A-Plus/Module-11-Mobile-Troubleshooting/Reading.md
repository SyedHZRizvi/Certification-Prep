# Module 11: Mobile / Application Troubleshooting 📱

> **Why this module matters:** Mobile troubleshooting plus general Software Troubleshooting together make **22% of the 220-1102 exam**. While Module 9 focused on Windows/desktop OS issues, this module zeroes in on mobile-specific failures: battery, connectivity, sync, performance, app installs. Help-desk tickets in 2026 are increasingly mobile-first — every IT pro needs this fluency.

> **Prerequisites for this module.** You need:
> - Module 1 (mobile hardware + MDM)
> - Module 8 (security + malware basics on mobile)
> - Module 9 (general software-troubleshooting mindset)

---

## 📱 A Story: The Sales Team Whose Phones All Died on the Same Day

Meet Felipe. He's the mobile / collaboration tech at a 220-person consumer-goods company. On a Wednesday morning, the sales team manager calls in a panic — **seven** sales reps' company iPhones are showing "No Service" and the company's MDM dashboard says they're all out of compliance. The reps are in the field; they can't access Salesforce, can't call customers, can't check inventory.

Felipe pulls up the **Microsoft Intune** dashboard. All 7 phones are showing the same compliance failure: **"OS version below minimum (iOS 17.7)"**. They're all on iOS 17.5. Yesterday afternoon, the compliance policy was tightened by another admin (without coordination) to require iOS 17.7 as the new minimum. The compliance engine kicked in overnight, disabled the Exchange ActiveSync profile, and the phones lost mail access — but kept showing as "No Service" because the conditional-access engine also blocks cellular (via carrier integration) when out of compliance.

Felipe's playbook:

1. **Temporarily reverts** the compliance policy from iOS 17.7 → iOS 17.5 to restore the reps' phones immediately.
2. Pushes a **forced-update profile** via MDM that requires iOS 17.7 within 7 days.
3. Sends an apology + instructions email to all 7 reps with a one-tap "Update Now" link to Settings.
4. **Documents the incident** for the change-management board: "Policy tightening without staged rollout caused 7-user outage. Future: pilot first."

This is mobile support in 2026. The phones themselves rarely fail — it's the **policies, profiles, accounts, and update streams** that interact in unexpected ways. This module teaches you the diagnostic patterns.

---

## 🔋 Battery & Power Issues

### Battery drains too fast

| Cause | Diagnosis |
|-------|-----------|
| **Background apps** | iOS: Settings → Battery (per-app usage). Android: Settings → Battery → App usage |
| **Location services overused** | Turn off background location for non-critical apps |
| **Cellular signal hunting** | Weak signal forces phone to transmit at max power. Restart phone or enable airplane mode briefly |
| **Aged battery (chemistry degraded)** | iOS: Settings → Battery → Battery Health (capacity %). Android: similar in settings or via third-party app |
| **Push email frequency** | Switch from push to fetch every 15 min |
| **Display brightness / always-on** | Lower brightness, reduce always-on screen |
| **Malware (rare on iOS, possible on Android)** | Run a security scan; check Settings for unknown profiles |

### Battery health metrics

- **Cycle count** — each full charge ≈ 1 cycle. ~500–800 cycles before noticeable degradation
- **Capacity** — % of original. Apple flags <80% on Battery Health
- **Charge time** — slower charging = aging or charger fault
- **Heat during charging** — warm is normal; hot is a red flag

### Phone gets hot

| Cause | Fix |
|-------|-----|
| Running CPU-heavy app (games, AR, video render) | Reduce load, restart |
| Charging in a case in direct sunlight | Remove case, move to cool area |
| Heavy background sync | Pause backup / cloud sync |
| Malware / cryptominer | Scan / reset |
| Failing battery (swollen) | Replace immediately — fire risk |

🚨 **Swollen battery = stop using immediately.** Don't puncture, don't ignore. Lithium-ion fires are violent.

### Won't charge

- Try different cable + charger (eliminate cable failure)
- Clean the charging port — lint/dust is common
- Try wireless charging (if supported) to test charge circuit
- If physical Lightning/USB-C connector is bent or corroded → port replacement

---

## 📶 Connectivity Issues

### Wi-Fi connectivity tree

1. **Airplane mode off?**
2. **Wi-Fi enabled in settings?**
3. **Correct SSID joined?** ("Forget" + rejoin if password changed)
4. **Other devices working on this SSID?** (isolates phone vs network)
5. **Phone IP valid?** (Settings → Wi-Fi → tap (i) → IP)
6. **Captive portal?** (Open browser; force-trigger a non-HTTPS site to see)
7. **MDM Wi-Fi profile current?** (corporate Wi-Fi may need re-pushed cert)
8. **Phone too far from AP?** (signal strength)

### Cellular issues

| Symptom | Fix |
|---------|-----|
| "No Service" | Airplane mode off, SIM seated, network selection auto |
| Calls drop | Signal, carrier issue, device firmware |
| Data slow | Saturated tower, throttled plan, APN settings wrong (rare on iPhone, possible on Android) |
| Roaming charges | Disable data roaming in settings |
| 5G shows but no data | 5G coverage spotty in area; try 4G LTE only mode |

### Bluetooth issues

- **Won't pair** — put accessory in pairing mode; clear paired list on phone; try one-at-a-time pairing
- **Drops mid-use** — interference (microwave, 2.4 GHz Wi-Fi nearby), battery low, range
- **Audio routes to wrong device** — manually select output (Control Center / quick settings)
- **Audio quality bad** — older codec (SBC vs AAC vs LDAC); modern codec needed

### NFC / AirDrop / Quick Share issues

- AirDrop only between Apple devices on same Wi-Fi network or Bluetooth proximity
- Quick Share (Android) similar but cross-vendor
- Both can be disabled by MDM for security; check policy
- NFC requires close proximity (<10 cm) and tap-friendly surface

---

## 🔄 Sync & Email Issues

### Sync failures

| Symptom | Cause |
|---------|-------|
| Email not syncing | Password expired, MFA challenge, MDM compliance lost |
| Calendar events missing | Sync filter (e.g., only "next 30 days"), account corruption |
| Contacts gone | iCloud / Google Sync toggle off |
| Photos not backing up | Cloud account out of space, sync paused for low battery / cellular |
| OneDrive / Dropbox not syncing | Quota, slow internet, account auth |

### Fix patterns

- Remove + re-add the account
- Check storage quota in cloud account
- Verify MFA / app passwords are current
- Verify MDM compliance status

### Push vs Fetch vs Manual (email)

- **Push** — server notifies device of new mail instantly (battery cost)
- **Fetch** — phone polls every N minutes (more battery-friendly)
- **Manual** — only when user opens app

---

## 🏎️ Performance Issues

### Phone slow / freezes

| Cause | Fix |
|-------|-----|
| Low storage (< 1 GB free) | Clear cache, delete apps, offload photos |
| Old OS not updated | OS update (if device supported) |
| App with memory leak | Force-close, check app updates |
| Too many background apps | Restart phone |
| Aged battery / throttling | iOS aggressively throttles when battery aged (≤80%). Replace battery. |

### Cache clearing

- iOS: per-app within Settings; or offload (delete app, keep data)
- Android: Settings → Apps → [App] → Storage → Clear Cache / Clear Data
- WhatsApp / Telegram can use **GBs** of media cache — most common reason for "phone full" tickets

---

## 📲 App Installation & Updates

### Common install issues

| Symptom | Likely cause |
|---------|--------------|
| App rejected by store | Region restriction; iOS App Store has country-specific catalogs |
| "Insufficient storage" | Clear cache or delete unused apps |
| "This app requires iOS 17.0 or later" | Device too old |
| Side-loaded app won't install (Android) | "Install unknown apps" not enabled for source |
| Enterprise app installed but won't launch | Enterprise developer cert not trusted — Settings → General → Profiles & Device Management → trust |
| App removed by MDM | Compliance violation or admin remove |

### Update issues

- iOS auto-updates apps when on Wi-Fi + plugged in
- Android similar; can be configured per app
- Required corporate apps usually pushed via MDM with required version

### Sideloading & enterprise distribution

| Platform | Method |
|----------|--------|
| iOS | App Store, TestFlight (beta), Apple Business Manager + MDM (private apps), Custom Apps via ABM |
| Android | Google Play, Google Play Managed Store, sideload via APK (must enable in settings) |
| Both | EU 2024+ has alternative app marketplaces for iOS |

---

## 🚦 Mobile-Specific Security Issues

### Jailbreak / root detection

- iOS jailbreak removes Apple's sandbox protections; allows any app to read other apps' data
- Android root is similar — bypasses Android's permission model
- MDMs detect jailbreak/root and auto-quarantine
- Most enterprise apps refuse to launch on jailbroken/rooted devices (banking apps especially)

### Lost / stolen phone playbook

1. **Find My iPhone** / **Find My Device** (Google) → locate, lock, or wipe
2. **MDM remote actions** → lock, selective wipe (corporate data), full wipe (if company-owned)
3. **Notify carrier** to suspend service if confirmed stolen
4. **Change passwords** for all accounts that may have been auto-signed-in
5. **Police report** if required for insurance

### Common mobile attacks

| Attack | How |
|--------|-----|
| **Smishing** | SMS with malicious link |
| **Malicious app** | Trojan in Play Store or sideload |
| **Public USB charging** | "Juice jacking" — only charge from your own bricks |
| **Public Wi-Fi MITM** | Use VPN on untrusted networks |
| **SS7 / SIM swap** | Attacker convinces carrier to port phone number → bypasses SMS MFA |

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A user reports their company iPhone won't connect to email, but works for personal Gmail in the Mail app. The phone is enrolled in Intune.

**Walkthrough:**
1. **Identify** — Only corporate email is failing. Personal email (different account, same Mail app) works. So Mail app + iPhone itself are functional.
2. **Theory** — Likely: (a) corporate Exchange ActiveSync profile disabled by MDM compliance; (b) password expired; (c) MFA challenge missed; (d) Conditional Access blocking the sign-in.
3. **Test** — Check Intune compliance dashboard for this device. Check Azure AD sign-in logs for failed corporate-mail sign-ins. Check that the user's password is current.
4. **Plan** — Most common: device fell out of compliance. Show user the Company Portal app's "How to be compliant" steps (usually: install latest iOS update). Once compliant, profile auto-restores.
5. **Verify** — Wait 5-15 min for Conditional Access re-evaluation; user receives mail again.
6. **Document** — KB: "iPhone mail stopped → check Intune compliance first."

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Phone is slow → factory reset" | Almost never the first step. Clear cache, free storage, check battery health. |
| "Battery drain = bad battery" | Often background apps or signal hunting. Check usage before replacing. |
| "Replace charger if won't charge" | Try cable + charger + port cleaning first. |
| "iPhone never gets malware" | Rare but not impossible (esp. with sideload + EU 2024+ alt stores). Jailbreak adds risk. |
| "Find My iPhone always works" | Only if signed in + Find My enabled BEFORE loss. After loss, can't enable. |
| "All apps work on all phones" | OS version + region + chipset matter (esp. Apple Silicon Mac vs iOS app compatibility). |
| "Selective wipe = full reset" | Selective wipe removes only corporate container; personal data untouched. |
| "Charging in any USB port is safe" | Public USB ports may be "juice jacking" stations. Use your own brick. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Compliance policy** | MDM-defined requirements (OS version, encryption, jailbreak status) |
| **Conditional Access** | Identity + compliance gate to corporate resources |
| **Selective wipe** | Remove corporate data only |
| **Full wipe** | Factory reset |
| **Sideloading** | Installing apps outside the official store |
| **Jailbreak / Root** | Bypassing OS security; auto-detected by MDM |
| **Battery cycle** | One full charge equivalent |
| **Push / Fetch / Manual** | Email sync modes |
| **APN** | Access Point Name — cellular data config |
| **VoLTE / VoNR** | Voice over LTE / 5G NR |
| **Captive portal** | Hotel/public Wi-Fi sign-in page |
| **Juice jacking** | Compromised USB charging stations |
| **SIM swap** | Carrier-level number-porting attack |
| **Find My iPhone / Find My Device** | Apple / Google device-tracking services |

### Acronyms cheat-row (Module 11)
| Acronym | Meaning |
|---------|---------|
| MDM | Mobile Device Management |
| EAS | Exchange ActiveSync |
| APN | Access Point Name |
| iOS / Android | Phone operating systems |
| OTA | Over-The-Air (update) |
| VoLTE / VoNR | Voice over LTE / 5G NR |
| SIM / eSIM | Subscriber Identity Module (physical / embedded) |
| IMEI / IMSI | Device / Subscriber identity |
| TestFlight | Apple beta distribution |
| APK | Android Package (sideloadable file) |

---

## 📊 Case Study — The 2023 SIM Swap Attack on a Crypto Influencer

**Situation.** In January 2023, a well-known cryptocurrency commentator (real case redacted by name; the general pattern: many similar attacks have been reported) lost ~$4.2M USD in a single afternoon to a **SIM-swap attack**. The attacker called the victim's mobile carrier's customer-service line, impersonated the victim using public-record personal info, convinced the rep to port the victim's number to a new SIM the attacker controlled. Within minutes, the attacker reset the victim's email password (SMS MFA went to attacker), then drained the victim's crypto exchange accounts (SMS MFA also went to attacker).

**The mobile angle.** SIM swap is purely a *social engineering attack against the carrier* — not the phone, not the OS, not the apps. But its effect is catastrophic because **SMS-based MFA breaks immediately**. Every account that relied on SMS for "second factor" loses that factor in seconds. The carrier's customer-service rep is the weak link.

**Decision and outcome.** The victim noticed his phone showed "No Service" but, by then, the attacker had drained ~$4.2M in 47 minutes. Recovery: very limited — crypto transactions are largely irreversible. Carrier eventually paid a small portion of damages. Major US carriers have since rolled out **"Port-Out Lock" / "Number Lock"** features that require additional auth before any SIM port. iOS and Android have shifted to support **passkeys (FIDO2/WebAuthn)** as a phishing-resistant alternative to SMS MFA.

**Lesson for the exam / for practitioners.**
- **SMS MFA is not phishing-resistant.** Use app-based TOTP (Google Authenticator, Authy) or hardware keys (YubiKey) for high-value accounts.
- **Enable "Port-Out Lock"** with your carrier today (free).
- **Recognize "No Service" as a potential attack indicator** — not just a network issue.

**Discussion (Socratic).**
- **Q1:** A help-desk caller reports their personal phone has "No Service" suddenly. They mention they're getting password-reset emails for their bank account. What's your *immediate* coaching?
- **Q2:** Why has SMS MFA persisted as long as it has, despite being known to be weak? What forces would have to change to retire it from corporate use?
- **Q3:** A 50-person consulting firm uses SMS MFA for everyone. They have a $0 security budget bump. What can they change for free or near-free to dramatically reduce SIM-swap risk?

---

## ✅ Module 11 Summary

You now know:

- 🔋 Battery diagnosis: cycle count, capacity %, background apps, signal hunting
- 📶 Wi-Fi / cellular / Bluetooth triage trees
- 🔄 Sync failures: account, MFA, compliance, quota
- 🏎️ Performance: storage, cache, throttling
- 📲 App install / update issues including enterprise distribution
- 🛡️ Mobile security: jailbreak, lost/stolen, SIM swap

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 12 — Documentation, Change & DR](../Module-12-Documentation-DR/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 12](../Module-12-Documentation-DR/Reading.md) wraps the course with documentation + DR.
> - Cross-course: Microsoft Endpoint Administrator (course 26) is the deep MDM specialization. SC-300 (course 27) covers Conditional Access in depth.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Apple Platform Deployment Guide — comprehensive MDM reference
- 📄 Android Enterprise Documentation — Google's enterprise mobility guide
- 📄 NIST SP 800-124 Rev 2 — Guidelines for Managing the Security of Mobile Devices

**Case-study sources:**
- 📄 FBI IC3 Public Service Announcement (May 2022). *Significant Increase in SIM-Swap Attacks*.
- 📄 FCC Report and Order (October 2023). *Combating SIM-Swap and Port-Out Fraud*.

**Practitioner / exam:**
- 📖 [Professor Messer 220-1102 mobile troubleshooting](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video-training-course/)
- 📖 Have I Been Pwned (haveibeenpwned.com) — check leaks
