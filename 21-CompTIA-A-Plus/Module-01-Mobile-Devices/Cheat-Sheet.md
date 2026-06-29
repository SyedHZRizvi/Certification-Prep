# 📋 Module 1 Cheat Sheet: Mobile Devices & BYOD

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📧 Mobile Email, Protocols + Ports

| Protocol | Plain | Encrypted | Use Case |
|----------|-------|-----------|----------|
| **POP3 (Post Office Protocol 3)** | 110 | 995 | One-device-only; downloads & often deletes |
| **IMAP (Internet Message Access Protocol)** | 143 | 993 | Multi-device sync; mail stays on server |
| **SMTP (Simple Mail Transfer Protocol)** | 25 / 587 | 465 | Outbound only |
| **Exchange ActiveSync (EAS)** |, | 443 | Microsoft sync + policy enforcement |

🚨 *Multi-device user? → IMAP or EAS. NEVER POP3.*

---

## 📶 Cellular Generations

| Gen | Speed (typical) | Status (2026) |
|-----|------|--------|
| 2G/3G | <10 Mbps | Sunset most regions |
| 4G LTE | 5–100 Mbps | Workhorse |
| 5G low-band | 50–250 Mbps | Wide coverage, modest gain |
| 5G mid-band (C-band) | 100–900 Mbps | Sweet spot |
| 5G mmWave | 1–4 Gbps | Tiny range, stadium/airport only |

---

## 🆔 Mobile Identifiers

| ID | Length | What it identifies |
|----|--------|---------------------|
| **IMEI** | 15 digits | Device (used to blacklist stolen phones) |
| **IMSI** | 15 digits | Subscriber (on SIM) |
| **ICCID** | 19–22 digits | SIM card serial |
| **UDID** (Apple) | 40 chars | Apple developer device ID |

---

## 🏢 Ownership Models

| Model | Owner | IT Control |
|-------|-------|------------|
| **BYOD** | User | Container only |
| **CYOD** | Company (from list) | Full |
| **COPE** | Company | Full + personal use allowed |
| **COBO** | Company | Full, business-only |

---

## 🎛️ MDM (Mobile Device Management) Capabilities (Top 10)

1. Enrollment (DEP / Zero-Touch)
2. Passcode + encryption policy push
3. Wi-Fi / VPN (Virtual Private Network) / email profile push
4. App push (required/blocked)
5. Compliance check (OS version, jailbreak)
6. Selective wipe (corporate only)
7. Full wipe
8. Remote lock
9. Geofencing
10. Conditional Access integration

---

## 🔌 Connectors at a Glance

| Connector | Speed | Power |
|-----------|-------|-------|
| USB-C (USB 2.0) | 480 Mbps | ≤100W |
| USB-C (USB4 v2 / TB5) | 80 Gbps | 240W (PD 3.1) |
| Lightning | 480 Mbps | ~12W |
| Micro-USB | 480 Mbps | ~10W |
| MagSafe (iPhone 12+) | wireless | 15–25W |

---

## 📡 Short-Range Wireless

| Tech | Range | Use Case |
|------|-------|----------|
| Bluetooth Class 1 | ~100m | Long-range BT speakers |
| Bluetooth Class 2 | ~10m | Headphones, keyboards |
| NFC | <10 cm | Apple Pay, tap-to-pair |
| RFID (Radio Frequency Identification) (passive) | cm | Badges, hotel keys |
| IR | line-of-sight | TV remote (legacy) |

---

## 🖼️ Display Tech

| Tech | Pros | Cons |
|------|------|------|
| TN LCD | Cheap, fast | Bad angles |
| IPS LCD | Wide angles, accurate | Slower |
| OLED/AMOLED | True black, thin | Burn-in risk |
| Mini-LED | Bright, no burn-in | Blooming |
| Micro-LED | Best of both | $$$$ |

---

## 🛠️ Common Quick Fixes

| Symptom | First check |
|---------|-------------|
| No cellular | Airplane Mode off, SIM seated, plan active |
| No Wi-Fi | Verify SSID, re-enter password, forget+rejoin |
| Hot device + battery drain | Background apps, signal hunting, malware |
| Email won't sync | MDM compliance, password change, profile valid |
| Bluetooth audio routes to speaker | Settings → audio output |
| Email shows on phone but not laptop | Likely POP3, switch to IMAP/EAS |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Verify the device is compliant with MDM policy"
- "Use IMAP (or Exchange ActiveSync) for multi-device sync"
- "Containerization separates corporate from personal data"
- "Enable Conditional Access"
- "Selective wipe, only corporate data"

❌ Often **wrong**:

- "Use POP3 for multi-device access"
- "Wipe the phone immediately on first report of lost"
- "Jailbroken phones are fine for corporate access"
- "MDM can read personal photos on a BYOD container"
- "5G is always faster than 4G"

---

## 🗓️ Key Facts To Memorize Cold

- IMAPS = 993, POP3S = 995, SMTP submission = 587, SMTPS = 465, EAS = 443
- mmWave 5G ≠ low-band 5G (speed and range wildly different)
- iPhone 14+ in US = eSIM only
- USB-C is a *connector*, protocol varies from USB 2.0 to USB4 v2
- 6-step troubleshooting: Identify → Theory → Test → Plan → Verify → Document
- Mobile domain = **15% of 220-1101 exam**

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. IMAP vs POP3, when to use each? ___
2. 4 mobile ownership models and one trade-off each? ___
3. Three MDM actions you can take on a lost BYOD phone? ___
4. Default port for Exchange ActiveSync? ___
5. Difference between mmWave 5G and sub-6 5G, coverage vs speed? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 2: Networking Fundamentals](../Module-02-Networking/Reading.md)
