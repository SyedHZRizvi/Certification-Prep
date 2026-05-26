# ✏️ Module 1 Quiz: Mobile Devices & BYOD

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level** so you can self-diagnose.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. A user wants their email to appear identically on their phone, laptop, and home iPad. The MOST appropriate protocol is: *(Apply)*
A. POP3
B. SMTP
C. IMAP
D. FTP

---

### Q2. Default port for IMAP over TLS (IMAPS)? *(Remember)*
A. 110
B. 143
C. 993
D. 995

---

### Q3. A 15-digit number that uniquely identifies a mobile device (not the subscriber) is the: *(Remember)*
A. IMEI
B. IMSI
C. ICCID
D. UDID

---

### Q4. Which display technology is MOST associated with "burn-in" when a static image is left on screen? *(Understand)*
A. IPS LCD
B. TN LCD
C. OLED
D. Mini-LED

---

### Q5. A user in a stadium gets 2 Gbps on their 5G phone, but at home in the suburbs the same phone gets ~150 Mbps. The MOST likely explanation: *(Analyze)*
A. The phone is faulty at home
B. mmWave 5G covers the stadium; sub-6 GHz is in use at home
C. The carrier throttles home users
D. 4G LTE is faster than 5G in suburbs

---

### Q6. Which short-range wireless technology operates at ~10 cm range and is used for Apple Pay? *(Remember)*
A. Bluetooth Low Energy
B. NFC
C. RFID active tags
D. IR

---

### Q7. A company allows employees to use personal phones for work email, with an isolated corporate app container. This model is: *(Apply)*
A. COBO
B. COPE
C. BYOD with containerization
D. CYOD

---

### Q8. The MOST common reason a phone running EAS (Exchange ActiveSync) suddenly stops syncing email is: *(Analyze)*
A. Cellular outage in the user's area
B. MDM compliance policy was violated (e.g., OS out of date) and the profile was disabled
C. The user's monitor is too dim
D. POP3 server failed

---

### Q9. Which iPhone model first removed the physical SIM slot in the US market? *(Remember)*
A. iPhone 12
B. iPhone 13
C. iPhone 14
D. iPhone X

---

### Q10. What's the practical difference between an active stylus and a passive (capacitive) stylus? *(Understand)*
A. Active styluses are always cheaper
B. Active styluses send a signal back to the digitizer for pressure/tilt sensitivity
C. Passive styluses require batteries
D. Active styluses only work on resistive screens

---

### Q11. A user reports their iPhone's screen will not respond when they wear thick winter gloves. Why? *(Understand)*
A. Capacitive screens require an electrically conductive contact, which most non-conductive gloves block
B. The screen is broken
C. Cold weather damages capacitive screens
D. Apple disables touch in cold weather

---

### Q12. The 7 most common mobile sensors include all of the following EXCEPT: *(Remember)*
A. Accelerometer
B. Gyroscope
C. Hard-disk drive head sensor
D. Magnetometer

---

### Q13. A company-issued phone is reported lost. The FIRST appropriate IT action via MDM is: *(Apply)*
A. Reset all employee passwords
B. Issue a remote lock with new PIN, then track location, then wipe if not recovered in policy timeframe
C. Immediately delete the user's email account
D. Reformat the help-desk laptop

---

### Q14. Which standard powers up to 240W over a USB-C cable? *(Remember)*
A. USB 2.0
B. USB-PD 3.1
C. PoE+
D. Thunderbolt 1

---

### Q15. The PRIMARY reason large enterprises use Exchange ActiveSync (EAS) rather than plain IMAP for mobile email is: *(Analyze)*
A. EAS is faster than IMAP on cellular
B. EAS supports policy enforcement (passcode complexity, remote wipe) in addition to email/calendar/contacts sync
C. EAS uses less data
D. EAS works on iPhone but not Android

---

### Q16. A USB-C cable that came in the box with a budget smartphone usually supports: *(Apply)*
A. USB4 v2 at 80 Gbps
B. USB 2.0 speed (480 Mbps)
C. Thunderbolt 4
D. DisplayPort Alt Mode at 8K

---

### Q17. Which Bluetooth class typically reaches the longest distance? *(Remember)*
A. Class 1 (up to ~100m)
B. Class 2 (~10m)
C. Class 3 (~1m)
D. Class 4 (~30m)

---

### Q18. A user reports their Bluetooth headphones connect, but audio plays through the phone speaker instead. The MOST likely cause: *(Apply)*
A. The headphones are not selected as the audio output in Settings → Sound
B. The phone needs a factory reset
C. Bluetooth is sunset
D. The headphones don't support audio

---

### Q19. The protocol that sends outgoing email from the client to the mail server is: *(Remember)*
A. POP3
B. IMAP
C. SMTP
D. NTP

---

### Q20. A phone has no cellular but Wi-Fi works perfectly. What is the FIRST thing to check? *(Apply)*
A. Reset the phone to factory defaults
B. Whether Airplane Mode is on, and the SIM/eSIM status (Settings → Cellular)
C. The display brightness
D. The phone's case

---

### Q21. A "selective wipe" performed by an MDM removes: *(Understand)*
A. The entire device including personal data
B. Only the corporate container (email, managed apps, profiles) leaving personal data untouched
C. The operating system
D. Nothing — it only marks the device as non-compliant

---

### Q22. Conditional Access (in Azure AD / Entra ID) typically combines which two signals to allow access to corporate mail? *(Evaluate)*
A. Caller ID + screen brightness
B. User identity + device compliance
C. Wallpaper + ringtone
D. SIM model + IMEI only

---

### Q23. A jailbroken iPhone is detected by MDM. The standard policy response is: *(Apply)*
A. Allow it but log the event
B. Auto-quarantine — block access to corporate resources and notify the user/IT
C. Reward the user for technical curiosity
D. Switch the user to a different MDM

---

### Q24. The correct CompTIA troubleshooting first step when a user reports "my phone email is broken" is: *(Understand)*
A. Replace the phone
B. Identify the problem (question the user, identify recent changes, gather symptoms)
C. Document findings
D. Reformat the email server

---

### Q25. Which of the following is NOT typically a capability of modern MDM platforms? *(Analyze)*
A. Push a Wi-Fi profile
B. Force a passcode policy
C. Read every photo in the user's personal camera roll on a containerized BYOD device
D. Remote wipe

---

### Q26. Design challenge: A 1,200-employee consulting firm wants its consultants to use personal smartphones for corporate email AND wants the ability to wipe corporate data on demand without touching the consultant's personal data. The MINIMUM viable architecture is: *(Create)*

> *Create-level note:* you are choosing the *combination* of policies/tools that fits the goal.
A. COBO with corporate-only phones
B. BYOD with MDM-managed containerization (e.g., Intune App Protection Policies + managed Outlook)
C. CYOD with no MDM
D. POP3 mailboxes only

---

## 🎯 Answers + Explanations

### Q1: **C. IMAP**
IMAP keeps mail on the server, so every device sees the same inbox state. POP3 typically downloads and deletes. SMTP only sends. Exchange ActiveSync (not listed) would also work.

### Q2: **C. 993**
POP3S = 995, IMAPS = 993, plain POP3 = 110, plain IMAP = 143. Memorize the pair.

### Q3: **A. IMEI**
IMEI = device ID (used to blacklist stolen phones). IMSI = subscriber ID (on the SIM). ICCID = SIM card serial. UDID = Apple developer device ID.

### Q4: **C. OLED**
Self-emissive pixels age differently when displaying static content, causing the dimmer pixels to appear "ghosted." Mini-LED is LCD backlight-based and immune.

### Q5: **B. mmWave 5G covers the stadium; sub-6 GHz is in use at home**
mmWave gives gigabit speeds but only at very short range with line-of-sight. Stadiums, airports, dense urban deployments. Suburbs typically use sub-6 GHz (low/mid band) — wider coverage, lower speeds.

### Q6: **B. NFC**
NFC operates at 13.56 MHz with effective range under 10 cm and supports two-way comms — exactly what Apple Pay / Google Pay use.

### Q7: **C. BYOD with containerization**
User owns the device (BYOD). The corporate data is isolated (containerized). This is the modern compromise.

### Q8: **B. MDM compliance policy was violated**
Most modern MDM/Conditional Access setups disable EAS profiles when devices fall out of compliance (OS out of date, encryption off, jailbreak detected). The classic "my email just stopped" symptom.

### Q9: **C. iPhone 14**
Specifically iPhone 14 and later in the US market removed the physical SIM slot — they are eSIM-only.

### Q10: **B. Active styluses send a signal back to the digitizer for pressure/tilt sensitivity**
Apple Pencil, S-Pen, Surface Pen. Passive styluses are just conductive tips that emulate a fingertip — no pressure/tilt.

### Q11: **A. Capacitive screens require an electrically conductive contact, which most non-conductive gloves block**
Capacitive screens sense the electrical disturbance of a human finger. Special "touchscreen gloves" have conductive thread at the fingertips.

### Q12: **C. Hard-disk drive head sensor**
Modern phones use SSD/flash. There's no spinning HDD in a phone. All other options are real mobile sensors.

### Q13: **B. Issue a remote lock with new PIN, then track location, then wipe if not recovered**
Standard playbook: lock to prevent immediate access while you assess whether the device is truly lost vs. misplaced. Wiping is a step you take after, not the very first action — once wiped, you can't track. Note: actual policy varies; some orgs wipe immediately for high-sensitivity data.

### Q14: **B. USB-PD 3.1**
USB Power Delivery 3.1 (Extended Power Range) added 28V/36V/48V profiles supporting up to 240W. Used in modern laptop charging over USB-C.

### Q15: **B. EAS supports policy enforcement in addition to sync**
Plain IMAP gives mail sync only. EAS adds passcode policy push, encryption requirements, remote wipe, and per-device compliance — the reason enterprises use it.

### Q16: **B. USB 2.0 speed (480 Mbps)**
Most bundled cables — even from premium phone brands — are USB 2.0 over the USB-C connector. Faster cables cost more and are usually sold separately.

### Q17: **A. Class 1 (up to ~100m)**
Bluetooth Class 1 transmits at higher power and reaches up to 100m. Class 2 (most consumer devices) ~10m. Class 3 ~1m.

### Q18: **A. The headphones are not selected as the audio output in Settings → Sound**
Common gotcha — the connection succeeds but the OS still routes to internal speaker. iOS Control Center / Android Quick Settings let you switch output.

### Q19: **C. SMTP**
SMTP (Simple Mail Transfer Protocol) sends outbound mail. POP3 and IMAP fetch inbound.

### Q20: **B. Airplane Mode + SIM/eSIM status**
The cheap, fast checks first. Toggle Airplane Mode off; confirm SIM is seated and active in Settings → Cellular. Only after that do you go deeper.

### Q21: **B. Only the corporate container, leaving personal data untouched**
Selective wipe (also called "corporate wipe") removes managed apps, email profiles, and any data in the managed container. Personal photos, contacts, and apps stay.

### Q22: **B. User identity + device compliance**
The combo: authenticated user (Azure AD / Entra ID) + a device that's compliant (enrolled, encrypted, up to date) = access granted. Either signal failing = blocked or stepped up.

### Q23: **B. Auto-quarantine — block access to corporate resources**
Jailbreak/root bypasses OS security, making the device untrustworthy for corporate data. MDM detects and blocks access until the device is restored to a clean state.

### Q24: **B. Identify the problem**
Step 1 of the CompTIA 6-step methodology. Question the user, identify changes, gather symptoms — always *before* taking action.

### Q25: **C. Read every photo in the user's personal camera roll on a containerized BYOD device**
The whole *point* of containerization is that IT cannot see personal data. They can manage the corporate container; the personal side is the user's.

### Q26: **B. BYOD with MDM-managed containerization**
The goal — personal devices, selective wipe — maps exactly to BYOD + container. COBO requires company-issued hardware. CYOD without MDM has no enforcement. POP3 has no policy controls and removes mail from the server.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 1 mastered. Onward to networking.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the MDM and cellular standards sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- Email protocols + ports: POP3 (110/995), IMAP (143/993), SMTP (25/587/465), EAS (443)
- Cellular tiers: 2G/3G/4G LTE/5G low-band/5G mid-band/5G mmWave
- Mobile ownership: BYOD / COBO / COPE / CYOD definitions
- MDM core capabilities (push profiles, compliance, selective wipe, conditional access)
- Display tech: TN / IPS / OLED / Mini-LED / Micro-LED — pros/cons
- IMEI vs IMSI

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 2 — Networking Fundamentals](../Module-02-Networking/Reading.md)
