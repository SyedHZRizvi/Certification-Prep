# 📋 Module 1 Cheat Sheet: Modern Workplace & Endpoint Strategy

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌐 The 4 Endpoint Eras

| Era | Identity | Join | Mgmt |
|-----|----------|------|------|
| Traditional (pre-2015) | AD | Domain | GPO + SCCM |
| Hybrid (2015–2020) | AD + Entra | Hybrid | SCCM + Intune (co-mgmt) |
| Modern (2020+) | Entra ID | Entra joined | Intune only |
| Cloud-native (2023+) | Entra (passwordless) | Entra joined, no AD | Intune + Autopatch + CA |

🧠 The exam's "right" answer is almost always **Modern** or **Cloud-native**.

---

## 🪪 The 3 Entra Device Join States

| State | What | When |
|-------|------|------|
| **Entra registered** | Personal device, corp identity attached | BYOD |
| **Entra joined** | Corporate device, cloud-only | New corp Windows 11 |
| **Entra hybrid joined** | Both AD + Entra | Legacy AD-bound deps |

🔥 Default modern answer = **Entra joined**.

---

## 📱 BYOD Patterns

| Pattern | Enrollment | Control | When |
|---------|------------|---------|------|
| Full MDM | Device enrolled | Full device | Corporate-only |
| MAM-WE | Device enrolled (work profile) | Work container only | Some corp + some choice |
| MAM only | No enrollment | App data only | True BYOD, no enrollment |

---

## 🛡️ Zero Trust — 3 Principles

1. **Verify explicitly** — every signal, every request
2. **Least privilege** — JIT, JEA, risk-adaptive
3. **Assume breach** — segment, encrypt, minimize blast radius

🚨 If the answer says "trust the corporate network," it's wrong.

---

## ⚙️ Co-Management — 7 Workloads

| Workload | What it controls |
|----------|------------------|
| Compliance policies | Device health rules |
| Windows Update policies | Update rings/deferrals |
| Resource access policies | Wi-Fi/VPN/cert profiles |
| Endpoint Protection | Defender + firewall settings |
| Device configuration | Settings catalog |
| Office Click-to-Run apps | M365 Apps install |
| Client apps | Win32 / LOB apps |

Each slider = ConfigMgr | Pilot Intune | Intune.

---

## 🏗️ Stack Integration

```
Entra ID  ──signals──>  Conditional Access
   │                          │
   ▼                          ▼
Intune  ──telemetry──>  Defender for Endpoint
   │                          │
   ▼                          ▼
Windows Update for Business + Endpoint analytics
```

---

## 🧑‍💻 Persona Defaults

| Persona | Device | Join | Mgmt |
|---------|--------|------|------|
| Knowledge worker | Corp laptop | Entra joined | Intune + MDE |
| Field sales | Corp laptop | Entra joined | Intune + MDE + offline |
| Engineer | Corp workstation | Entra joined | Intune + EPM |
| Frontline | Corp shared tablet | Entra joined (self-deploy) | Intune kiosk |
| Executive | Corp laptop + personal phone | Entra joined + Entra registered | Intune + MAM-WE |
| Contractor | Their device | Entra registered | MAM only |
| BYOD | Personal phone | Entra registered | MAM only |

---

## 🆚 Quick Lookups

| Need | Answer |
|------|--------|
| Conditional Access | Entra ID **P1** |
| Identity Protection (risk-based CA) | Entra ID **P2** |
| Compliant device CA condition | Intune compliance policy + CA grant |
| Modern equivalent of GPO | Intune **Settings Catalog** |
| BYOD without enrollment | MAM + **App Protection Policy** |
| Direct-ship deployment | **Windows Autopilot** user-driven |
| Kiosk single-app device | Autopilot **self-deploying** + kiosk profile |
| Survive AD outage | **Cloud-only** Entra joined + Intune |

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:
- ✅ "Entra joined + Intune + Conditional Access"
- ✅ "MAM without enrollment for BYOD"
- ✅ "Settings Catalog for GPO equivalent"
- ✅ "Compliance policy feeds Conditional Access"
- ✅ "Defender for Endpoint risk signal → Intune"

When you see these, often **wrong**:
- ❌ "Trust the corporate network"
- ❌ "Domain join the BYOD device"
- ❌ "Require GPO on Entra-joined Windows"
- ❌ "Use the corporate IP range as the trust boundary"
- ❌ "MAM without enrollment can wipe the entire phone"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Network-location-based trust (defeats Zero Trust)
- ❌ Forcing MDM on personal devices (privacy + adoption killer)
- ❌ One join strategy for every persona
- ❌ Skipping compliance signal in CA (only does MFA, not health)
- ❌ Keeping AD as the only identity source "for resilience"

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. 3 Entra device join states? ___
2. 3 Zero Trust principles? ___
3. 7 co-management workloads? ___
4. Difference between MAM-WE and MAM-only? ___
5. Which Entra license unlocks Conditional Access? ___ Identity Protection? ___

---

➡️ [Module 2: Windows 11 Deployment & Imaging](../Module-02-Windows-11-Deployment/Reading.md)
