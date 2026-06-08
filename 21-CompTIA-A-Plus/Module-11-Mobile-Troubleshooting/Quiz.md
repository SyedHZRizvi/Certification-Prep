# ✏️ Module 11 Quiz: Mobile / Application Troubleshooting

> Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24.
>
> **Bloom distribution:** Remember 6 · Understand 6 · Apply 7 · Analyze/Evaluate 4 · Create 1.

---

## Questions

### Q1. A user's iPhone battery drains 30% per hour in light use. The MOST appropriate first diagnostic step: *(Apply)*
A. Replace the phone
B. Settings → Battery → review per-app usage and Battery Health (capacity %)
C. Reformat
D. Reset the carrier

---

### Q2. An iPhone shows "No Service" but Wi-Fi works. The MOST appropriate first 3 checks (in order): *(Apply)*
A. Replace SIM, replace battery, replace phone
B. Airplane mode off, SIM seated, account active with carrier
C. Reformat phone, then call Apple
D. Disable Wi-Fi to "reset cellular"

---

### Q3. A user reports their company iPhone stopped receiving email overnight; the MDM dashboard shows "out of compliance." Most likely cause: *(Apply)*
A. The phone is broken
B. OS update raised the minimum required version; phone needs to update OR compliance policy needs review
C. The carrier blocked email
D. iCloud is full

---

### Q4. A swollen lithium-ion battery in a phone should be: *(Apply)*
A. Punctured carefully with a pin
B. Stopped using immediately and replaced (fire risk; do not handle aggressively)
C. Recharged hot
D. Microwaved to dry

---

### Q5. A user reports their phone runs hot during normal use. Likely causes EXCEPT: *(Understand)*
A. CPU-heavy background app
B. Charging in a case in direct sunlight
C. Phone running 1990s-era software
D. Failing battery / failing internal component

---

### Q6. Phone won't pair to Bluetooth headphones. The MOST likely first fix: *(Apply)*
A. Reset the phone
B. Put headphones into pairing mode + ensure phone Bluetooth is on + clear any old paired entries
C. Reformat the phone
D. Replace the headphones

---

### Q7. Selective wipe via MDM removes: *(Remember)*
A. Everything on the phone including personal data
B. Only the corporate container (email, managed apps, profiles); personal data untouched
C. Just the OS
D. Nothing

---

### Q8. A user has an Android phone with 32 GB storage, all full. WhatsApp shows 8 GB used. The MOST appropriate first fix: *(Apply)*
A. Buy a bigger phone
B. WhatsApp → Settings → Storage and data → manage media; clear old cache
C. Reformat phone
D. Disable WhatsApp permanently

---

### Q9. Push email (vs Fetch) has what trade-off? *(Understand)*
A. Push uses less battery
B. Push delivers email instantly but costs more battery; Fetch polls every N min, more battery-friendly
C. Push works only on iPhone
D. They are identical

---

### Q10. A user attempting to install an iOS app sees "This app requires iOS 17.0 or later" on a phone running iOS 15. The fix: *(Apply)*
A. Sideload the app from a third-party store
B. Update the iOS device to a supported version, OR if device doesn't support iOS 17+, the app cannot be installed
C. Disable Find My iPhone
D. Reset network settings

---

### Q11. Jailbreak (iOS) / root (Android) detected by MDM typically triggers: *(Understand)*
A. A free upgrade
B. Auto-quarantine, block corporate resources, notify user/admin
C. Increased data plan
D. Nothing

---

### Q12. A lost company-issued iPhone is reported by the user 30 minutes after losing it on a flight. The IMMEDIATE first action via MDM: *(Apply)*
A. Wipe immediately and lose any chance to track
B. Issue remote lock with new PIN, track via Find My / MDM; then wipe per company policy if not recovered in policy timeframe
C. Email the airline
D. Disable the user's account

---

### Q13. A user reports the WiFi at the airport requires a sign-in page that doesn't appear automatically. They should: *(Apply)*
A. Reformat the phone
B. Open a browser to a non-HTTPS site (or `http://captive.apple.com`) to force the captive portal
C. Disable Wi-Fi forever
D. Try Bluetooth instead

---

### Q14. The SIM swap attack works by: *(Analyze)*
A. Physical theft of the SIM
B. Social-engineering the carrier into porting the victim's number to an attacker-controlled SIM, bypassing SMS-based MFA
C. SIM hardware failure
D. iOS update bug

---

### Q15. The PRIMARY defense against SIM swap for everyday users: *(Apply)*
A. Use SMS MFA only
B. Enable Port-Out Lock with carrier; use app-based TOTP (Google Authenticator) or hardware key (YubiKey) for MFA instead of SMS where possible
C. Use a flip phone
D. Disable cellular

---

### Q16. "Juice jacking" refers to: *(Remember)*
A. A drink
B. Malicious USB charging stations that can deliver malware or harvest data
C. A type of battery
D. Wi-Fi attack

---

### Q17. A user reports their Microsoft Authenticator app shows a "Sign-in attempt from Lagos, Nigeria", but they are in Chicago. The CORRECT response: *(Apply)*
A. Approve to dismiss the prompt
B. **Deny** the sign-in; immediately reset password; notify IT
C. Ignore
D. Turn off authenticator

---

### Q18. The MOST common reason a company app refuses to launch on a personal Android phone: *(Analyze)*
A. The phone is too new
B. Phone is rooted, MDM/app detected and blocked launch
C. The phone has too much RAM
D. App was reformatted

---

### Q19. A user complains apps update slowly even on fast Wi-Fi. The MOST appropriate first fix: *(Apply)*
A. Reformat the phone
B. Check available storage (< 1 GB free slows update), restart the store app, ensure not paused
C. Replace the SIM
D. Disable Bluetooth

---

### Q20. iOS automatically updates apps when: *(Understand)*
A. The phone is in airplane mode
B. Connected to Wi-Fi + plugged into power (default behavior)
C. The user shakes the phone
D. Cellular data only

---

### Q21. Bluetooth audio routes to phone speaker instead of paired headphones. Likely cause: *(Apply)*
A. The headphones don't work
B. Output device not selected, pick headphones in Control Center / quick settings
C. Phone has malware
D. Wi-Fi interference

---

### Q22. A user's contacts disappeared from their iPhone. The MOST appropriate first diagnostic: *(Apply)*
A. Reformat
B. Settings → [Apple ID] → iCloud → verify Contacts is enabled and synced; check iCloud.com to see if they exist on the server
C. Replace phone
D. Call carrier

---

### Q23. The PRIMARY reason corporate apps refuse to run on jailbroken phones: *(Evaluate)*
A. Jailbreak makes the phone faster
B. Jailbreak removes OS sandbox protections, corporate data could be read by any app; security risk is unacceptable
C. Jailbreak voids the iOS warranty only
D. Apple disables corporate apps

---

### Q24. Design challenge: A 60-person organization wants to ensure stolen company iPhones don't expose corporate data, but also wants to allow personal use. The MINIMUM viable architecture: *(Create)*

> *Create-level note:* you are picking the *combination* of MDM + policy + user education.
A. Don't issue company phones
B. **COPE model** (company-owned, personally enabled) + MDM enrollment + passcode policy + selective-wipe capability + lost-device tracking via Find My + user training
C. BYOD with no MDM
D. POP3 mail only

---

## 🎯 Answers + Explanations

### Q1: **B. Settings → Battery + Battery Health**
iOS surfaces per-app usage + battery health % built-in. Diagnose before replacing.

### Q2: **B. Airplane mode off, SIM seated, account active**
Cheap-fast checks. Start at the easy stuff.

### Q3: **B. Compliance policy + OS version**
Most common scenario: phone fell out of compliance after a policy change or missed OS update.

### Q4: **B. Stop using + replace; fire risk**
Swollen battery = lithium hazard. Do not puncture, charge, or apply force.

### Q5: **C. Phone running 1990s software**
Phones from 1990s era didn't exist in modern form. The other 3 are all plausible heat causes.

### Q6: **B. Pairing mode + Bluetooth on + clear old entries**
The standard Bluetooth pair flow.

### Q7: **B. Only the corporate container**
The whole point of selective (corporate) wipe. Personal photos/contacts untouched.

### Q8: **B. Clear WhatsApp media cache**
Per-app cache management. WhatsApp is the #1 cache-bloater on most phones.

### Q9: **B. Push is instant + battery-cost; Fetch polls = battery-friendly**
Trade-off the user/admin picks.

### Q10: **B. Update iOS (if supported); else can't install**
Device must meet app's minimum OS version. Older devices may not support the latest iOS.

### Q11: **B. Auto-quarantine**
Standard MDM behavior. The device is untrustworthy until restored to a known-good state.

### Q12: **B. Lock + track first; wipe per policy timing**
Don't wipe immediately, that kills tracking. Lock prevents access while you assess.

### Q13: **B. Open a browser to a non-HTTPS site or captive.apple.com**
Force the captive-portal redirect. The iOS automatic captive-portal helper sometimes fails.

### Q14: **B. Social-engineer the carrier into porting the number**
The attack is at the carrier, not the phone. Most successful via customer-service calls.

### Q15: **B. Port-Out Lock + app/hardware MFA**
Both halves of the defense. SMS MFA is broken once SIM is swapped.

### Q16: **B. Malicious USB charging stations**
Use your own brick + power cable. Or USB-A "data-blocker" adapters that pass power but not data.

### Q17: **B. Deny + reset password + notify IT**
Classic MFA fatigue attack. Never approve a sign-in you didn't initiate.

### Q18: **B. Rooted phone, MDM/app blocked**
Banking apps and corporate MDM consistently refuse rooted/jailbroken devices.

### Q19: **B. Check storage + restart store**
Low storage is the #1 update-slow cause. Then check if updates are paused.

### Q20: **B. Wi-Fi + plugged in**
Default iOS behavior to save cellular and battery.

### Q21: **B. Select headphones as output device**
Common gotcha. Connection succeeded; routing didn't.

### Q22: **B. iCloud sync check**
Most common cause: sync toggle turned off, or new account on phone not signed into iCloud.

### Q23: **B. Sandbox removed → data exposure**
Apple's iOS sandbox is foundational. Jailbreak removes it; no enterprise will trust a jailbroken device.

### Q24: **B. COPE + MDM + passcode + wipe + tracking + training**
The complete corporate mobile architecture. Each layer matters.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Mobile troubleshooting mastered.
- 20–22/24 → ✅ Solid. Drill the connectivity tree.
- 16–19/24 → ⚠️ Re-read battery + sync sections.
- <16/24 → 🔁 Restart with the Reading.md.

---

## 🃏 Add To Your Flashcards

- Battery health: cycle count + capacity %
- Wi-Fi triage tree
- Cellular triage tree
- Selective wipe vs full wipe
- Jailbreak / root → auto-quarantine
- Push vs Fetch trade-off
- SIM swap attack + Port-Out Lock defense
- Juice jacking + your-own-brick rule

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then **[Module 12, Documentation, Change & DR](../Module-12-Documentation-DR/Reading.md)**
