# 📋 Module 4 Cheat Sheet: Identity, Governance & Security

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🪪 Identity Stack (Microsoft Entra ID)

| Capability | What |
|------------|------|
| **Entra ID** | Cloud identity (formerly Azure AD) |
| **Entra Connect** | Sync on-prem AD ↔ Entra |
| **SSO** | One login, many apps |
| **MFA** | 2+ proofs (know/have/are) |
| **Passwordless** | Authenticator, FIDO2, Windows Hello |
| **Conditional Access** | Policy: when to require MFA/block/etc. (P1+) |
| **External ID** | B2B (partners) + B2C (customers) |
| **PIM** | Just-in-time admin roles (P2) |

---

## 🔑 RBAC vs Policy vs Locks (THE BIG THREE)

| | RBAC | Azure Policy | Resource Lock |
|---|------|--------------|----------------|
| Question | WHO can do what | WHAT can exist / how | Stop deletion/modification |
| Target | Identity | Resources | Resources |
| Scope | MG / Sub / RG / Resource | MG / Sub / RG / Resource | Sub / RG / Resource |
| Examples | "Bob is Reader on prod sub" | "VMs only in East US" | "Don't delete prod DB" |
| Applies to Owners? | Owner has all rights | Yes | Yes (until removed) |

---

## 👥 4 Fundamental RBAC Roles

| Role | Read | Modify | Grant Access |
|------|------|--------|--------------|
| Owner | ✅ | ✅ | ✅ |
| Contributor | ✅ | ✅ | ❌ |
| Reader | ✅ | ❌ | ❌ |
| User Access Administrator | ❌ (just access) | ❌ | ✅ |

🎯 Inheritance: MG → Sub → RG → Resource (top-down).

---

## 📜 Azure Policy Effects

| Effect | What |
|--------|------|
| Deny | Block creation |
| Audit | Allow + flag |
| Append | Add fields (e.g., tags) |
| Modify | Change existing |
| DeployIfNotExists | Auto-deploy related resource |
| Disabled | Off |

Initiative = bundle of policies.

---

## 🛡️ Security Services

| Service | What |
|---------|------|
| **Defender for Cloud** | CSPM + workload protection + Secure Score |
| **Microsoft Sentinel** | Cloud-native SIEM + SOAR |
| **Key Vault** | Secrets, keys, certs (HSM-backed) |
| **Azure Bastion** | Browser RDP/SSH, no public IPs on VMs |
| **DDoS Protection** | Always-on DDoS mitigation |
| **Private Link / Endpoint** | PaaS into your VNet (no public endpoint) |
| **Azure Firewall** | Managed cloud-scale L3-L7 firewall |
| **WAF** | Web app firewall (on App Gateway or Front Door) |
| **Microsoft Purview** | Data governance + classification |

---

## 🧠 Zero Trust (3 Principles)

1. **Verify explicitly**, authn+authz on every request
2. **Use least-privilege access**, JIT, JEA, risk-based, scoped
3. **Assume breach**, segment, encrypt e2e, monitor

---

## 🛡️ Defense in Depth (Layers)

```
Physical → Identity → Perimeter → Network → Compute → App → Data
```

---

## 🏷️ Tags

- Key:value labels (`Environment:prod`, `CostCenter:1234`)
- For organization + cost reporting
- ⚠️ Don't inherit by default, use Policy to enforce

---

## 🏆 Exam Power Phrases

**Usually CORRECT:**
- ✅ "Microsoft Entra ID" (not "Azure AD")
- ✅ "Use a CanNotDelete lock"
- ✅ "Apply Policy at the management group"
- ✅ "Conditional Access" (when MFA conditions are described)
- ✅ "Defender for Cloud" for posture / Secure Score
- ✅ "Sentinel" for cross-source SIEM/SOAR
- ✅ "Private Endpoint" to remove public access from PaaS

**Usually WRONG:**
- ✅ "Contributor can grant access", NO
- ❌ "RBAC restricts what resources can exist", that's Policy
- ❌ "Defender for Cloud is the SIEM", that's Sentinel
- ❌ "Tags inherit automatically"
- ❌ "Locks can be ignored by Owners"

---

## ⚠️ Anti-Patterns

- ❌ Giving everyone Owner ("just in case")
- ❌ One global RG for entire company
- ❌ No MFA on admin accounts
- ❌ Storing secrets in code or config files (use Key Vault!)
- ❌ Exposing VM management ports to internet (use Bastion)

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. New name for Azure AD? ___
2. RBAC vs Policy vs Lock, one-liner each? ___
3. 4 fundamental RBAC roles + key difference? ___
4. Defender for Cloud vs Sentinel? ___
5. 3 Zero Trust principles? ___

---

➡️ [Module 5: Cost Management & SLAs](../Module-05-Cost-Management-SLAs/Reading.md)
