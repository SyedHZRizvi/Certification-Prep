# 📋 Module 5 Cheat Sheet: Vulnerabilities & Attacks

> One page. Print it. The most attack-recognition-heavy sheet in the course.

---

## 🦠 Malware Quick-Pick

| Trait → | Malware |
|---|---|
| Self-replicates over network, no user | **Worm** |
| Attaches to file, needs user | **Virus** |
| Disguised legit-looking | **Trojan** |
| Remote control | **RAT** |
| Encrypts + extorts | **Ransomware** (double-ext = +leak) |
| Erases data | **Wiper** |
| Triggered by date/event | **Logic bomb** |
| Hidden in OS kernel | **Rootkit** |
| Hidden in boot/firmware | **Bootkit** |
| Memory/registry only | **Fileless** |
| Steals CPU for crypto | **Cryptominer / jacker** |
| Compromised host in attacker net | **Botnet / zombie** |

---

## 🕷️ OWASP Top 10 (2021) Quick Cards

| # | Name | Tell |
|---|------|------|
| A01 | Broken Access Control | IDOR (`?id=42`) |
| A02 | Cryptographic Failures | Weak cipher, no HTTPS (HTTP Secure), hardcoded key |
| A03 | Injection | `' OR 1=1 --` SQLi, `<script>` XSS |
| A04 | Insecure Design | "We never threat-modeled" |
| A05 | Security Misconfig | Default creds, verbose errors |
| A06 | Vulnerable Components | EOL Log4j, jQuery 1.x |
| A07 | Auth Failures | Weak/no MFA, session fixation |
| A08 | Software/Data Integrity | Unsigned updates, supply chain |
| A09 | Logging/Monitoring Failures | "We didn't notice for 8 months" |
| A10 | SSRF | Server fetches attacker URL |

---

## 🌐 Web Attack Fixes (THE answer to "best mitigation")

| Attack | Best fix |
|--------|----------|
| **SQLi** | Parameterized queries |
| **XSS** | Output encoding + CSP |
| **CSRF** | CSRF tokens + SameSite cookies |
| **SSRF** | Allowlist outbound destinations; block link-local 169.254.x.x |
| **Directory traversal** | Canonicalize paths; jail |
| **Command injection** | Use APIs, never shell+concat |

---

## 🌍 Network Attacks, One-line Tells

| Attack | Tell |
|--------|------|
| **SYN flood** | Half-open connections piling up |
| **DNS (Domain Name System) amplification** | Spoofed src + responses much larger than queries |
| **DNS poisoning/spoof** | Wrong A records returned |
| **ARP poisoning** | Gateway MAC suddenly belongs to a workstation |
| **MAC flooding** | Switch CAM table overflowed |
| **On-path (MITM)** | Attacker intercepts/alters |
| **Replay** | Captured valid msg sent again |
| **Rogue AP / Evil twin** | Same SSID, stronger signal, captures creds |
| **Disassoc** | Clients kicked offline |

---

## 🔑 Credential Attack Decision Tree

```
Many attempts on ONE user        → Brute force / Dictionary
ONE password against MANY users  → Password spraying
Reused breach creds              → Credential stuffing
NTLM hash, no password           → Pass-the-Hash
Stolen Kerberos service ticket   → Kerberoasting (cracked offline)
Stolen TGT                       → Pass-the-Ticket
Forged TGT after KRBTGT compromise → Golden Ticket
```

---

## 🧠 Social Engineering Lookup

| Channel | Name |
|---------|------|
| Email (mass) | Phishing |
| Email (targeted) | Spear phishing |
| Email (exec) | Whaling |
| Voice | Vishing |
| SMS | Smishing |
| Fake story to gain trust | Pretexting |
| Compromise site target visits | Watering hole |
| Misspelled domain | Typosquatting |
| Wire-fraud impersonation | BEC |
| Follow through a door | Tailgating |
| Watch their screen | Shoulder surfing |
| Steal from trash | Dumpster diving |
| Free USB in lobby | Baiting |

### 7 Psychology Principles
**A**uthority, **U**rgency, **S**carcity, **S**ocial proof, **L**iking, **T**rust, **F**ear.

---

## 🏆 Exam Power Phrases

- ✅ "Parameterized queries" / "prepared statements"
- ✅ "Output encoding + CSP" for XSS
- ✅ "Account lockout + MFA + risk-based auth"
- ✅ "Disable NTLM / enable Credential Guard"
- ✅ "Block default-credential devices"
- ❌ "Filter input only"
- ❌ "Hide error messages = security"
- ❌ "Antivirus is enough"

---

## ✏️ Quick Self-Check

1. SQLi best fix? ___
2. XSS, best fix + which sub-type stores on the server? ___
3. Spraying vs stuffing vs brute force, one-line each? ___
4. On-path attack on a LAN (Local Area Network), most likely starts with what protocol abuse? ___
5. Name the malware type that does NOT self-replicate but disguises itself. ___

---

➡️ You finished Modules 1–5. Take **[Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)** before Module 6.
