# 📋 Module 7 Cheat Sheet: Hybrid Identity

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## ⚖️ Connect vs Cloud Sync

| Feature | **Entra Connect** | **Cloud Sync** |
|---------|:---------------:|:--------------:|
| Install | Heavy WS install | Lightweight agent |
| Config location | On-prem (Sync Service Manager) | Cloud (Entra portal) |
| Multi-forest **with trust** | ✅ | ✅ |
| Multi-forest **without trust** | ❌ (needs separate Connect per forest) | ✅ |
| PHS | ✅ | ✅ |
| **PTA** | ✅ | ❌ |
| **Federation** | ✅ | ❌ |
| Seamless SSO | ✅ | ✅ |
| Password write-back | ✅ | ✅ |
| **Group write-back** | ✅ | ❌ |
| **Device write-back** | ✅ (legacy) | ❌ |
| Attribute write-back | ✅ | Limited |
| Hybrid Entra Join | ✅ | ✅ (with config) |
| Microsoft direction | Maintenance | RECOMMENDED for new |

---

## 🔐 Three Auth Topologies

| Topology | Where password lives | When |
|----------|---------------------|------|
| **PHS** (recommended) | Hash-of-hash in Entra | Default for new + DR backup |
| **PTA** | On-prem only | Policy preventing hash sync |
| **Federation** (deprecated) | On-prem AD via AD FS | Legacy; migrating away |

### PHS hash design
```
NTLM hash → salted → HMAC-SHA256 (1,000 iterations) → sent over HTTPS to Entra
```

### PTA HA
**≥3 agents** for production (one per failure domain).

---

## 🚪 Seamless SSO

- Protocol: **Kerberos**
- Computer account: `AZUREADSSOACC` in on-prem AD
- Rotate password every **30 days** (Microsoft recommendation)
- Works with PHS + PTA (not Federation — Federation handles SSO natively)
- CA + MFA still apply on top

---

## 🔄 Filtering

- **OU filter** — pick OUs in scope
- **Attribute filter** — pick attributes synced
- **Directory extensions** — sync custom AD attributes into Entra

🚨 OU exclusion of in-scope users → **soft-delete** in Entra (30-day window) → permanent loss.

---

## ✍️ Write-Back Matrix

| Write-back | Connect | Cloud Sync |
|------------|:-------:|:----------:|
| Password | ✅ | ✅ |
| Group | ✅ | ❌ |
| Device | ✅ (legacy) | ❌ |
| Attribute | ✅ | Limited |

---

## 🖥️ Hybrid Entra Join (HEJ)

| | **HEJ** | **Entra Joined** |
|---|--------|------------------|
| AD-joined | ✅ | ❌ |
| Entra-registered | ✅ | ✅ |
| CA targeting | "Hybrid Entra Joined" | "Entra Joined" |
| Co-management | ✅ Intune + ConfigMgr | Intune only |

---

## 🚦 Federation → Cloud Auth Migration

```
1. Enable PHS as DR (parallel to AD FS)
2. Migrate domains in waves Federated → Managed
3. Validate per-wave with sign-in logs
4. Decommission AD FS after all domains migrated
5. Migrate smart-card users to Entra-native CBA
```

---

## 🚦 Connect → Cloud Sync Migration

```
1. Inventory features in use (PTA? federation? group write-back?)
2. Block any Connect-only features OR keep on Connect
3. Install Cloud Sync agent on 2+ servers
4. Configure scope to match
5. Test in staging
6. Put Connect in STAGING mode (stops exporting)
7. Activate Cloud Sync as primary
8. Monitor 1 week
9. Decommission Connect
```

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Cloud Sync for multi-forest without trust"
- ✅ "PHS + Seamless SSO" (modern default)
- ✅ "Enable PHS even if federated" (DR backup)
- ✅ "Hybrid Entra Join for AD-joined + cloud CA"
- ✅ "≥3 PTA agents for HA"
- ✅ "Migrate federation to cloud auth"

When you see these, often **wrong**:

- ❌ "Cloud Sync supports federation"
- ❌ "Cloud Sync supports PTA"
- ❌ "Cloud Sync supports group write-back"
- ❌ "PHS sends the plaintext password"
- ❌ "Single PTA agent is sufficient"
- ❌ "Hybrid Entra Joined = Entra Joined"

---

## ⚠️ Anti-Patterns

- ❌ Modifying OU filter without staging-mode validation
- ❌ Federation with no PHS backup (AD FS down = total auth outage)
- ❌ Single PTA agent (SPOF)
- ❌ Cloud Sync chosen when group write-back is needed
- ❌ Never rotating the `AZUREADSSOACC` password

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. Modern sync product: ___
2. Microsoft-recommended auth topology in 2026: ___
3. PTA agent count for HA: ≥ ___
4. PHS sends: ___ (not the plaintext password)
5. Cloud Sync does NOT support: ___, ___, ___, ___
6. Seamless SSO protocol: ___ ; computer account: ___

---

➡️ [Module 8: Monitoring, Reporting & Threat Response](../Module-08-Monitoring-Threats/Reading.md)
