# 📋 Module 7 Cheat Sheet: Windows Update for Business & Servicing

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🔄 WUfB, 3 Update Categories

| Category | Cadence |
|----------|---------|
| **Quality** | Monthly (2nd Tuesday) |
| **Feature** | Annually (~Sept/Oct) |
| **Driver** | Variable (separate policy) |

Each controlled separately by ring.

---

## 📊 Canonical Ring Topology

| Ring | Audience | Quality defer | Feature defer |
|------|----------|---------------|---------------|
| **Pilot** | IT (~5%) | 0 | 0 |
| **Broad** | Most users (~80%) | 7 | 30 |
| **Deferred** | Sensitive (~10%) | 14–30 | 90 |
| Critical (opt) | Mission-critical (~5%) | 30 | 180 |

🚨 "Everyone in one ring" = wrong answer.

---

## ⚙️ Ring Settings

| Setting | Note |
|---------|------|
| Quality deferral | 0–30 days |
| Feature deferral | 0–365 days |
| Deadline | Forced install/restart |
| Grace period | Time before forced restart |
| Active hours | Block restart during business |
| **Pause** | Max **35 days** |
| Auto behavior | Auto install + restart |

---

## 🚀 Expedited Updates

When a critical zero-day requires fast deployment:

- **Overrides** ring deferrals
- Target specific KB
- Default deadline 24 hours
- Push to all (or scoped) Windows devices

🔥 The answer for "actively exploited zero-day."

---

## 🌐 Delivery Optimization Modes

| Mode | Effect |
|------|--------|
| 0 (HTTP (Hypertext Transfer Protocol) only) | No P2P, CDN (Content Delivery Network) only |
| **1 (LAN (Local Area Network))** | P2P same NAT (Network Address Translation)/subnet + CDN, **canonical default** |
| **2 (Group)** | P2P across subnets via group ID |
| 3 (Internet) | Internet-wide P2P |
| 99 (Simple) | Direct Microsoft Update only |
| 100 (Bypass) | DO disabled |

Bandwidth caps: max foreground %, max background %, monthly upload GB.

---

## 🚗 Driver Updates

Separate policy with three states:

- **Manual**, admin reviews each
- **Automatic**, new drivers auto-approved
- **Frozen**, block specific version

---

## 📅 Windows 11 End-of-Servicing

| SKU (Stock Keeping Unit) | Servicing window |
|-----|------------------|
| Home / Pro | **24 months** from release |
| Enterprise / Education | **36 months** from release |

🔥 Plan feature update adoption before EOS.

---

## 🎯 Microsoft Autopatch

Microsoft-managed update orchestration:

- Test / First / Fast / Broad rings (Microsoft-defined)
- Auto-rollback on failure detection
- Covers Windows quality + Office + Edge + Teams + (some) drivers

Right answer for "managed update service."

---

## 🛑 Pause / Rollback

| Action | When |
|--------|------|
| Pause ring | Newly discovered issue (max 35 days) |
| Uninstall last quality update | Quality broke something |
| Uninstall last feature update | Within ~10 days of install |
| Block specific KB | Stop known-bad |

---

## 📊 WUfB Reports

Free Azure-hosted reporting:

- Per-device update status
- Driver deployment
- Feature update rollout
- Quality update rollout
- Servicing failures

Requires: Log Analytics workspace + WUfB reports solution.

---

## 📦 Update Service Choices

| Tool | When |
|------|------|
| **WUfB** | Modern cloud-managed default |
| WSUS | Legacy on-prem (deprecating for cloud) |
| ConfigMgr software updates | ConfigMgr-managed environments |
| **Microsoft Autopatch** | Microsoft-managed orchestration |

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Pilot → Broad → Deferred rings"
- ✅ "Expedited update for active zero-day"
- ✅ "Pause ring while investigating"
- ✅ "Delivery Optimization LAN mode"
- ✅ "Driver updates as separate policy"

When you see these, often **wrong**:

- ❌ "All users in one ring"
- ❌ "Expedited respects ring deferrals"
- ❌ "Pause unlimited"
- ❌ "Feature update rollback after 30 days"
- ❌ "WSUS is the modern answer for cloud"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ One ring for everyone (no blast-radius protection)
- ❌ Skipping WUfB reports (flying blind)
- ❌ Manual driver updates with no policy
- ❌ Keeping WSUS for net-new cloud-managed fleet
- ❌ Bypassing expedited updates during zero-days

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. 3 WUfB update categories? ___
2. Canonical ring topology? ___
3. Max pause? ___
4. Expedited overrides what? ___
5. Enterprise feature update EOS? ___

---

➡️ [Module 8: Monitoring, Reporting & Troubleshooting](../Module-08-Monitoring/Reading.md)
