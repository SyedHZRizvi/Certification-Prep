# Module 1: Mobile Devices & BYOD 📱

> **Why this module matters:** Mobile is 15% of the 220-1101 exam — about 14 questions. But its real importance is that this is the *first hardware you touch* in any modern IT job. Half your help-desk tickets in week one will be "my phone won't connect to email." Master this, and you'll resolve them in 90 seconds.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic computing literacy (you've used a smartphone for ≥1 year as a user)
> - General networking terms (Wi-Fi, cellular, Bluetooth — what they do at a conceptual level)
>
> If those are shaky, pause and explore your own phone's Settings app for 20 minutes. This module assumes zero professional support background but does assume you've held a smartphone.

---

## 📞 A Story: The Sales Rep Whose Phone Cost the Company $14,000

Meet Diego. He's a regional sales VP at a mid-sized pharma company. On a Tuesday morning in São Paulo, he opens his laptop, tries to sync his calendar, and gets the spinning beachball. His phone — issued by the company — won't pick up email either. He texts IT: "My stuff is broken. Big presentation in 4 hours."

The help-desk tech, Priya, opens the ticket. Three things she has to figure out, fast:
1. **Is the device the problem, or the account?** (Test her own login from a clean device.)
2. **Has anything *changed*?** (Diego mentions he flew in last night. International roaming. Different cellular network.)
3. **Is this device under MDM control, and can she pull diagnostics remotely?**

Priya pulls up the company's **Mobile Device Management (MDM)** console. She sees Diego's phone has been **out of compliance for 11 days** — a forced security patch hadn't installed because Diego kept dismissing the prompt. The compliance engine quietly blocked his **Exchange ActiveSync** profile at 2 a.m. that morning.

She pushes the patch remotely, the phone reboots, the profile re-enables, and Diego's email rolls in at 8:14 a.m. — 47 minutes before his presentation.

This is what mobile support looks like in 2026. The device, the network, the identity, and the management plane are four separate problems that *look* like one symptom. This module teaches you the vocabulary to separate them.

Had Diego been on a personal phone with **BYOD** instead of company-issued (COBO), Priya would have had no MDM hook, no remote remediation, and a much longer conversation. Bring-your-own-device policies are the most argued-about topic in this entire module — they trade convenience for control, and every org draws the line differently.

---

## 📱 The Modern Mobile Hardware Stack

Sec+ tests *concepts*. A+ tests *parts*. Know these by sight and by what they do.

### Display technologies

| Tech | How it works | Pros | Cons | Where you see it |
|------|--------------|------|------|------------------|
| **LCD (TN)** | Liquid crystal, twisted nematic | Cheap, fast | Poor viewing angles, washed-out color | Low-end laptops, old phones |
| **LCD (IPS)** | Liquid crystal, in-plane switching | Wide viewing angles, accurate color | Slower response than TN, more $ | Mid-range laptops, iPads |
| **OLED / AMOLED** | Self-emissive pixels (no backlight) | True black, thin, flexible, vibrant | Burn-in risk, dimmer at max brightness | iPhones, Samsung Galaxy, premium laptops |
| **Mini-LED** | LCD with thousands of LED zones backing it | Near-OLED contrast, no burn-in, very bright | Halo/blooming around bright objects | MacBook Pro 14/16", high-end iPad Pro |
| **Micro-LED** | Self-emissive inorganic LEDs | All OLED upsides, no burn-in, brighter | Extremely expensive, limited sizes | Apple Watch (Ultra), high-end Samsung TVs |

🎯 **Exam pattern:** *"User reports a 'ghost image' of the home screen visible on a dark background"* → **OLED burn-in**. Fix: change wallpaper, lower brightness, enable always-on screen carefully.

### Touch input types

- **Capacitive** — senses the electrical conductivity of your finger. Used in every modern smartphone/tablet. Won't respond to a gloved hand unless gloves are conductive.
- **Resistive** — two layers pressed together by physical pressure. Used in older PoS terminals, industrial handhelds. Works with any stylus or fingernail.
- **Active stylus** (Apple Pencil, Samsung S-Pen, Surface Pen) — sends a signal back to the digitizer for pressure and tilt sensitivity. Requires a compatible screen.

### Built-in mobile sensors (you'll be asked to identify what each does)

| Sensor | Function |
|--------|----------|
| **Accelerometer** | Detects linear acceleration (tilt, screen rotation, step counting) |
| **Gyroscope** | Detects rotational orientation (more accurate than accelerometer for VR/AR) |
| **Magnetometer** | Acts as a compass for navigation |
| **Proximity sensor** | Turns off the screen during a phone call when held to ear |
| **Ambient light sensor** | Auto-adjusts brightness |
| **GPS** | Geographic positioning (multi-satellite trilateration); A-GPS uses cell towers for faster fix |
| **Barometer** | Altitude (used in fitness/maps for elevation) |
| **Fingerprint / Face ID** | Biometric authentication |
| **NFC** | Short-range (≤10 cm) wireless for Apple Pay / Google Pay / transit cards |

---

## 🔌 Mobile Connectors and Cables

You will be shown pictures on the exam. Know them.

| Connector | Where you see it | Speed/Power |
|-----------|------------------|-------------|
| **USB-C** | Modern Android, all iPhones since 15, every new laptop | 480 Mbps (USB 2.0) to 80 Gbps (USB4 v2). Power up to 240W (USB-PD 3.1). |
| **Lightning** | iPhone 5 through iPhone 14, AirPods cases (legacy) | USB 2.0 speed (480 Mbps). 12W typical. **Phased out** but you'll still support it for years. |
| **Micro-USB** | Older Android, e-readers, accessories | USB 2.0 speed. Easy to bend the port. **Legacy.** |
| **Mini-USB** | Very old cameras, some industrial. | USB 2.0. Almost never seen now. |
| **MagSafe** (Apple) | iPhone 12+, MacBook Pro | Wireless: 15W (iPhone), 25W (iPhone 15 Pro Max with adapter). Magnetic alignment. |
| **3.5mm TRRS** | Headphone jack (where present), wired headsets | Analog audio. TRRS = Tip-Ring-Ring-Sleeve for mic support. |

🚨 **Trap on the exam:** USB-C is a *connector shape*. It can carry many *protocols* — USB 2.0, USB 3.x, USB4, Thunderbolt 3/4, DisplayPort Alt Mode, Power Delivery. The same shape can mean wildly different speeds. Always check the device spec, not the port.

### USB-C: the alphabet soup

| Spec | Max speed | Notes |
|------|-----------|-------|
| USB 2.0 over USB-C | 480 Mbps | Cheap cables; many phone-charger cables are this. |
| USB 3.2 Gen 1 (was USB 3.0) | 5 Gbps | "SuperSpeed" |
| USB 3.2 Gen 2 | 10 Gbps | "SuperSpeed+" |
| USB 3.2 Gen 2×2 | 20 Gbps | Two lanes |
| USB4 / Thunderbolt 3 | 40 Gbps | Backward-compatible with TB3 |
| USB4 v2 / Thunderbolt 5 | 80 Gbps (120 Gbps asymmetric) | Newest, only on premium 2024+ hardware |

---

## 📶 Cellular Standards — A Brisk Tour

| Generation | Era | Real-world speed | Why you should care |
|------------|-----|------------------|---------------------|
| **2G** (GSM/CDMA) | 1991–2000s | ~100 Kbps | Sunset in most countries by 2024. Some IoT still uses it. |
| **3G** (UMTS/EV-DO) | 2001–2010s | 1–10 Mbps | Mostly sunset 2022–2024 in US/EU. |
| **4G LTE** | 2009–present | 5–100 Mbps typical, 1 Gbps peak | The current workhorse. Voice over LTE (VoLTE) replaced circuit-switched calling. |
| **5G NR** (low-band) | 2019–present | Similar to 4G LTE | Wide coverage, modest speed bump. |
| **5G NR** (mid-band C-band) | 2021–present | 100–900 Mbps | Sweet spot — most US/EU 5G is this. |
| **5G NR** (mmWave) | 2019–present | 1–4 Gbps | Tiny coverage (line-of-sight, ~300m), stadium/airport scenarios only. |

🎯 **Exam pattern:** *"User in a rural area cannot get reliable 5G."* → Likely the mmWave deployment isn't there; carrier may only offer 4G LTE or low-band 5G. Solution often: ensure phone supports the right bands; not always a fixable issue.

### PRL and baseband

- **PRL (Preferred Roaming List)** — CDMA-era table of which towers to use when roaming. Mostly historical now (CDMA sunset). LTE/5G use SIM/eSIM profiles and carrier-pushed updates instead.
- **Baseband firmware** — the radio's own operating system. Updated via carrier OTA push. A corrupt baseband can brick cellular while Wi-Fi still works.
- **IMEI** (International Mobile Equipment Identity) — 15-digit unique device ID. Used to blacklist stolen phones.
- **IMSI** (International Mobile Subscriber Identity) — 15-digit unique subscriber ID stored on the SIM.

### SIM vs eSIM

| Type | Form | Provisioning | Use case |
|------|------|--------------|----------|
| **Physical SIM** | Removable plastic card (nano-SIM is the current standard size) | Carrier mails you a SIM, you insert | Most of the world; carrier swap = card swap |
| **eSIM** | Chip embedded in device | Software profile, QR-code or carrier app | iPhone 14+ in US (no physical slot), enterprise convenience, dual-line on one phone |

You can have **5+ eSIMs stored on an iPhone**, two active at once (one for work, one for personal). Same on modern Android.

---

## 📡 Bluetooth, NFC, IR, RFID — Short-Range Wireless

| Tech | Range | Speed | Common uses |
|------|-------|-------|-------------|
| **Bluetooth 5.x** | 10–240m (varies by class & version) | 1–3 Mbps | Headphones, keyboards, file transfer, BLE beacons |
| **NFC** | ≤4 cm (typically ≤10cm) | 424 Kbps | Apple Pay, Google Pay, transit cards, "tap to pair" |
| **IR (Infrared)** | ~5m, line-of-sight | Very slow | TV remotes, mostly legacy |
| **RFID** | Passive: cm; Active: meters | Slow | Inventory, badges, contactless cards (vs NFC: NFC is two-way; basic RFID is one-way readable) |

Bluetooth pairing process:
1. Put accessory into pairing mode (button hold)
2. Phone scans → sees accessory
3. Tap to pair → exchange numeric/PIN if required
4. Bond saved for future quick-reconnect

🚨 **Common confusion:** *NFC and RFID look similar.* NFC is a *subset* of RFID at 13.56 MHz with two-way comms. Apple Pay = NFC. Hotel keycard = RFID.

---

## 📧 Mobile Email Setup — IMAP, POP3, Exchange ActiveSync

You will be asked to pick the right protocol for a scenario.

| Protocol | Type | Stores msgs where | Use case |
|----------|------|-------------------|----------|
| **POP3** | Mail fetch | Downloads to device, often *deletes from server* | One device only, e.g., legacy single-PC setups |
| **IMAP** | Mail sync | Stays on server, synced to device | Multi-device — phone + laptop + tablet all show the same inbox |
| **SMTP** | Mail send | N/A — outbound only | All outgoing mail |
| **Exchange ActiveSync (EAS)** | Microsoft sync | Server-stored | Push email, calendar, contacts, plus policy enforcement (MDM-lite) on M365 |

### Ports to memorize

| Service | Plain | Encrypted |
|---------|-------|-----------|
| POP3 | 110 | 995 (POP3S) |
| IMAP | 143 | 993 (IMAPS) |
| SMTP submission | 25 (server-to-server) / 587 (client submission) | 465 (SMTPS, legacy) |
| Exchange ActiveSync | — | 443 (HTTPS) |

🎯 **Exam pattern:** *"User wants the same inbox across phone and laptop."* → **IMAP** (or Exchange). POP3 is wrong because it removes mail from the server.

---

## 🏢 BYOD vs COBO vs COPE vs CYOD

| Model | Who owns? | Who controls? | Pros | Cons |
|-------|-----------|---------------|------|------|
| **BYOD** (Bring Your Own Device) | User | Limited (MDM container only) | No hardware cost; user gets device they love | Privacy/legal nuance; harder to enforce policy; recovery on departure is messy |
| **COBO** (Corporate-Owned, Business Only) | Company | Full | Maximum control & auditability | Users carry two devices; high cost |
| **COPE** (Corporate-Owned, Personally Enabled) | Company | Full, but personal use permitted | Balance of control + UX; tax/expense simplification | Privacy boundary still requires policy |
| **CYOD** (Choose Your Own Device) | Company (from a curated list) | Full | Better UX than COBO; predictable IT support | Limited choice; still corporate-owned |

🎯 **Exam pattern:** A healthcare scenario where data protection is paramount → **COBO**. A tech startup that wants developer happiness → **BYOD with strong MDM containers**.

---

## 🎛️ Mobile Device Management (MDM)

Modern MDM platforms — Microsoft Intune, Jamf Pro (macOS/iOS), VMware Workspace ONE, Google Endpoint Management, Kandji, Mosyle — let IT do the following remotely, at scale:

| Capability | What it does |
|------------|--------------|
| **Enrollment** | Register a device into the corporate fleet (DEP for Apple Business Manager; Zero-Touch for Android Enterprise) |
| **Policy push** | Force passcode complexity, encryption-on, screen-lock timeout, allowed apps |
| **Wi-Fi / VPN profile push** | Auto-configure the corp Wi-Fi, certificate-based VPN |
| **Email profile push** | Pre-configure Exchange/IMAP credentials |
| **App management** | Push required apps; block prohibited apps; deploy from a private app catalog |
| **Compliance check** | Verify OS version, encryption, jailbreak status; auto-quarantine on failure |
| **Remote wipe** | Full device wipe OR selective (only corporate container) |
| **Remote lock** | Lock device with new PIN if lost |
| **Geofencing** | Allow/block features by location |
| **Conditional access** | Pair with identity provider (Azure AD, Okta) — only compliant devices get email/SharePoint |

### Containerization

The privacy compromise that makes BYOD viable: corporate data lives in an isolated container (Microsoft Outlook + OneDrive + Teams in a managed sandbox; iOS managed apps separated by Apple Business Manager). When the employee leaves, IT wipes the *container* only — personal photos, contacts, banking apps untouched.

---

## 🔐 Mobile Security Basics (deeper in Module 8)

- **Passcode** — minimum 6 digits for biometric-backed; 8+ alphanumeric for high-security roles
- **Biometric** — Face ID (3D depth map), Touch ID, Android fingerprint, Android face unlock (varying strength)
- **Encryption at rest** — default-on for iOS since iPhone 3GS, Android since 6.0 Marshmallow
- **Remote wipe** — via MDM, Find My iPhone, or Google Find My Device
- **Jailbreak (iOS) / Root (Android)** — gives apps unrestricted access; usually breaks MDM compliance and corporate apps

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A user reports their company iPhone won't connect to the corporate Wi-Fi at the new branch office, but their personal laptop on the same network works fine. They can use cellular without issue.

**Walkthrough:**
1. **Identify the problem** — Wi-Fi on the iPhone specifically; not cellular, not other devices. So the issue is iPhone-on-this-Wi-Fi.
2. **Establish a theory** — Possibilities: (a) Wi-Fi password changed; (b) MDM Wi-Fi profile expired/wrong SSID at this branch; (c) certificate not pushed; (d) MAC filtering on the new AP; (e) iPhone has a corrupted network setting.
3. **Test the theory** — Ask the user if they remember "joining" the network. If MDM, the join is automatic — but a *certificate* may not have rotated. Pull device into Intune console; check Wi-Fi profile status.
4. **Plan of action** — Push the correct Wi-Fi profile for this branch (likely a different SSID than HQ). Or, if cert-based: re-enroll the device cert.
5. **Verify** — User can browse a corporate intranet page over Wi-Fi.
6. **Document** — Add to KB: "Branch X uses SSID `CORP-BRANCH-X`; MDM profile must be assigned in the 'Branch X iPhones' group."

This is what an MDM-mediated mobile-support workflow looks like end-to-end.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "5G is always faster than 4G" | Only mmWave 5G is dramatically faster; low-band 5G is barely faster than LTE. |
| "USB-C means USB4" | USB-C is a connector. The protocol varies. A USB-C cable can be USB 2.0 (480 Mbps). |
| "POP3 and IMAP are interchangeable" | POP3 typically removes mail from the server. Multi-device users need IMAP. |
| "BYOD means no control" | Modern MDM containers give IT control over corporate data without touching personal data. |
| "Lightning is dead, ignore it" | iPhones 5–14 still in fleets for years. Adapters and cables still on the exam. |
| "NFC and Bluetooth are the same" | Different ranges, different speeds. NFC is centimeters; Bluetooth is meters. |
| "Remote wipe always wipes everything" | MDM lets you do *selective* wipe — only corporate container. |
| "Jailbreaking is illegal" | Legal in many jurisdictions for personal use; against most corporate policies; auto-quarantined by MDM. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **MDM** | Mobile Device Management — central policy/control of mobile fleet |
| **BYOD / COBO / COPE / CYOD** | Ownership/control models |
| **IMEI** | 15-digit device serial used to blacklist stolen phones |
| **IMSI** | 15-digit subscriber ID stored on SIM |
| **eSIM** | Software-provisioned SIM, multiple profiles per device |
| **PRL** | Preferred Roaming List (CDMA-era) |
| **Baseband** | Radio firmware on a mobile device |
| **OLED / AMOLED** | Self-emissive display tech |
| **Capacitive vs Resistive** | Touch input technologies |
| **NFC** | Near-Field Communication — 13.56 MHz, ≤10 cm |
| **Bluetooth pairing/bonding** | Initial trust + persistent record |
| **EAS** | Exchange ActiveSync — Microsoft mobile sync protocol |
| **IMAP vs POP3** | Server-stored sync vs device-stored fetch |
| **Containerization** | Corporate data isolated from personal data on BYOD device |
| **Remote wipe** | Full or selective deletion |
| **Geofencing** | Location-based policy enforcement |
| **Conditional access** | Identity + compliance gate to corporate resources |

### Acronyms cheat-row (Module 1)
| Acronym | Meaning |
|---------|---------|
| MDM | Mobile Device Management |
| BYOD | Bring Your Own Device |
| COBO/COPE/CYOD | Corporate Ownership Models |
| IMEI | International Mobile Equipment Identity |
| IMSI | International Mobile Subscriber Identity |
| PRL | Preferred Roaming List |
| EAS | Exchange ActiveSync |
| NFC | Near-Field Communication |
| RFID | Radio-Frequency Identification |
| OLED / AMOLED | Organic LED / Active Matrix OLED |
| OTA | Over-The-Air (update delivery) |
| VoLTE | Voice over LTE |
| eSIM | Embedded SIM |

---

## 📊 Case Study — The 2014 Sony Pictures Hack & Mobile-Triggered Pivot

**Situation.** In November 2014 the "Guardians of Peace" group breached Sony Pictures Entertainment, exfiltrating ~100 TB of internal data — unreleased films, executive emails, ~47,000 employee SSNs, and salary data. The breach was *publicly* attributed to North Korea by the FBI in December 2014.

**The mobile dimension.** Forensic analysis (Mandiant final report, March 2015; FireEye whitepaper, January 2016) identified that one initial-access vector was a spear-phishing email opened on an Sony executive's personal iPhone, which then forwarded credentials when the executive subsequently used the same password on a Sony VPN portal from a workstation. The iPhone itself was never compromised by malware, but it was outside MDM scope — the executive used it personally and the corporate email was IMAP-configured manually rather than through Exchange ActiveSync, so no policy enforcement applied.

**Decision and outcome.** Sony Pictures took ~3 weeks to fully restore email and payroll; the incident cost an estimated $35M directly and far more in canceled-film and reputational losses. Sony's CEO, Michael Lynton, later testified the company had no formal BYOD policy at executive level, no MDM enrollment requirement, and no conditional access for corporate mail. A 2015 internal review mandated MDM enrollment for all corporate-mail access, mandatory passcodes ≥8 characters, and a 24-hour remote-wipe SLA.

**Lesson for the exam / for practitioners.**
- **BYOD without MDM is just "you-give-them-corporate-access-and-hope"** — exactly what the practice of this module's BYOD/MDM section is designed to prevent.
- **IMAP without policy enforcement** can't push passcode requirements; **Exchange ActiveSync** can.
- **Identity reuse across personal and corporate** is the silent killer. Conditional access (Azure AD or equivalent) cuts this attack chain at the front door.

**Discussion (Socratic).**
- **Q1:** If you were Sony's CIO in 2013, you knew executives demanded personal devices. Design a 30-day rollout to bring 200 executive iPhones into MDM with minimal disruption. What concessions do you make to keep adoption above 90%?
- **Q2:** A board member says "MDM violates my privacy." Make the *technical* argument that containerization preserves their privacy while protecting corporate data. What can IT *not* see, and how do you prove it?
- **Q3:** The North Korean attribution led to US sanctions and a years-long policy debate. Beyond the technical fix, what mobile-policy *cultural* changes — at the executive level — would have made the breach harder to execute? Argue for or against device choice rationing as a security control.

---

## ✅ Module 1 Summary

You now know:
- 📱 The display, touch, sensor, and connector technologies inside every modern mobile device
- 📶 Cellular generations (2G–5G), the differences between sub-6 GHz and mmWave 5G, and SIM/eSIM provisioning
- 📡 The short-range wireless cousins: Bluetooth, NFC, IR, RFID
- 📧 Mobile email setup — IMAP vs POP3 vs Exchange ActiveSync — and the ports for each
- 🏢 Mobile ownership models (BYOD, COBO, COPE, CYOD) and the trade-offs
- 🎛️ What MDM does and why containerization makes BYOD viable
- 🔐 Mobile security primitives — passcode, biometrics, encryption-at-rest, remote wipe

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 21/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 2 — Networking Fundamentals](../Module-02-Networking/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 2](../Module-02-Networking/Reading.md) goes deeper into Wi-Fi and IP fundamentals you'll need to debug mobile connectivity. [Module 8](../Module-08-Security/Reading.md) returns to mobile security in depth (jailbreak detection, EFS, full-disk encryption). [Module 11](../Module-11-Mobile-Troubleshooting/Reading.md) is the dedicated mobile-troubleshooting module.
> - Cross-course: Azure Administrator (course 06) covers Intune in depth. Microsoft Endpoint Administrator (course 26) is the dedicated MDM certification.
> - Practice: Practice Exam 1 has ~6 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources (the originals):**
- 📄 3GPP TS 36 series — official LTE specifications (the most technical source for cellular)
- 📄 3GPP TS 38 series — official 5G NR specifications
- 📄 IEEE 802.15.1 / Bluetooth Core Specification 5.4 — Bluetooth SIG, 2023
- 📄 ISO/IEC 14443 — RFID/NFC contactless smart-card standard
- 📄 RFC 3501 (IMAP4rev1, Crispin, 2003) and RFC 9051 (IMAP4rev2, 2021)

**Case-study sources:**
- 📄 Mandiant (March 2015). *Sony Pictures Entertainment Incident Report*.
- 📄 US Senate Homeland Security Committee (June 2015). *Hearing on the Sony Pictures Cyber Attack*.

**Practitioner / exam:**
- 📖 [CompTIA A+ 220-1101 Exam Objectives (PDF)](https://www.comptia.org/certifications/a) — read these at least twice
- 📖 [Professor Messer 220-1101 video index](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video-training-course/) — free, comprehensive
- 📖 Apple Platform Deployment Guide — Apple's authoritative MDM reference
- 📖 Microsoft Intune documentation — for the Windows/Android side
