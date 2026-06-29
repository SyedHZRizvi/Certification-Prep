# 📋 Module 4 Cheat Sheet: Threats & Threat Actors

> One page. Print it. Tape it to your monitor.

---

## 👥 Actor Matrix

| Actor | Skill | Resources | Motivation |
|-------|-------|-----------|------------|
| **Nation-state (APT)** | 🟢🟢🟢 | Massive | Espionage, war |
| **Organized crime** | 🟢🟢 | Substantial | Financial |
| **Hacktivist** | mixed | Modest | Philosophical |
| **Insider (malicious)** | varies | Already inside | Revenge, financial |
| **Insider (negligent)** | n/a | Already inside | Accidents |
| **Script kiddie** | 🔴 | Low | Curiosity, ego |
| **Shadow IT** | varies | varies | Convenience |

---

## 💰 Motivation Quick-Map

```
Espionage   → Nation-state
Financial   → Organized crime
Political   → Hacktivist
Revenge     → Insider
Ego/learn   → Script kiddie
War/disrupt → Nation-state
```

---

## 🚪 Threat Vectors

| Category | Examples |
|----------|----------|
| **Message-based** | Email phishing, SMS smishing, vishing, IM links |
| **File-based** | Malicious docs, PDFs, installers |
| **Image-based** | Steganography droppers, malicious metadata |
| **Voice** | Vishing |
| **Removable** | USB drops, HID emulation (Rubber Ducky) |
| **Vulnerable sw** | Client (browser/PDF) or server-side |
| **Unsupported / EoL** | No patches available |
| **Unsecure networks** | Open Wi-Fi, evil twin, Bluetooth attacks |
| **Open service ports** | Internet-facing RDP/SMB/Redis/MongoDB |
| **Default credentials** | admin/admin IoT, network gear |
| **Supply chain** | MSP, vendor update, hardware |
| **Human (social engineering)** | Pretexting, BEC, watering hole, typosquatting |

---

## 🌐 Threat Intel Sources

| Source | Free? | Notes |
|--------|-------|-------|
| **OSINT** | ✅ | Shodan, VirusTotal, blogs |
| **Dark web** | varies | Where stolen creds & RaaS live |
| **ISACs** | ✅ (membership) | Industry-specific (FS-, H-, MS-, Auto-) |
| **CISA AIS** | ✅ | US Govt automated feed |
| **Commercial** | 💰 | Recorded Future, Mandiant, CrowdStrike |
| **STIX / TAXII** | standard | Format for sharing IOCs |

---

## 🎯 IOC vs IOA vs TTP

| Term | Means | Example |
|------|-------|---------|
| **IOC** | Indicator of Compromise (artifact) | Bad IP, file hash, malicious domain |
| **IOA** | Indicator of Attack (behavior) | "Process spawned PowerShell with base64" |
| **TTP** | Tactics, Techniques, Procedures | "Spearphishing attachment → macro → C2 over HTTPS (HTTP Secure)" |

**MITRE ATT&CK** = canonical TTP catalog.

---

## 🏆 Exam Power Phrases

- ✅ "Nation-state / APT", for persistent, well-resourced, espionage attacks
- ✅ "Supply-chain attack", when the malicious code comes from a vendor's update
- ✅ "Insider (negligent)" vs "Insider (malicious)", Sec+ distinguishes
- ✅ "Subscribe to industry ISAC"
- ✅ "MITRE ATT&CK for TTPs"
- ❌ "Hacktivists steal money"
- ❌ "Script kiddies aren't a threat"
- ❌ "All threat intel is paid"

---

## ⚠️ Anti-Patterns

- ❌ Confusing actor motivation with skill level
- ❌ Ignoring insider threats because "they're authorized"
- ❌ No vendor risk reviews (supply-chain blind spot)
- ❌ Leaving default credentials anywhere
- ❌ Treating shadow IT as user-error only (it's a visibility problem)

---

## ✏️ Quick Self-Check

1. Match these to actors: BEC, defacement, nuclear-research theft, USB-drop revenge.
2. List 6 threat vectors.
3. What's STIX/TAXII used for?
4. Free + government threat feed = ?
5. Difference between IOC and IOA?

---

➡️ [Module 5: Vulnerabilities & Attacks](../Module-05-Vulnerabilities-Attacks/Reading.md)
