# 📋 Module 6 Cheat Sheet: Hybrid Cloud with Azure Arc

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌐 Arc Resource Families

| Family | Resource Type | Use |
|--------|---------------|-----|
| **Arc-enabled servers** | `Microsoft.HybridCompute/machines` | RBAC, Policy, Monitor, Defender, Update, ESU |
| **Arc-enabled Kubernetes** | `Microsoft.Kubernetes/connectedClusters` | GitOps, Policy, Defender for Containers, App Services |
| **Arc-enabled data services** | `Microsoft.AzureArcData/...` | SQL Server, SQL MI on K8s, PostgreSQL Hyperscale |

---

## 🪪 Connected Machine Agent (`azcmagent`)

| Property | Detail |
|----------|--------|
| Direction | **Outbound 443 only** — NO inbound |
| Identity | System-assigned managed identity per machine |
| Windows service | **HIMDS** (Azure Hybrid Instance Metadata Service) |
| Tool to validate connectivity | `azcmagent check` |
| Required endpoints | `*.guestconfiguration.azure.com`, `*.his.arc.azure.com`, `*.management.azure.com`, `*.login.microsoftonline.com`, `*.servicebus.windows.net` (for K8s), `*.kubernetesconfiguration.azure.com` (for K8s) |
| Air-gap support | **Arc Private Link** |

### Least-privilege onboarding role

**Azure Connected Machine Onboarding** (built-in)

---

## 🚀 Onboarding at Scale

| Method | Best for |
|--------|----------|
| **Group Policy startup script** | Existing AD-joined Windows fleet |
| **Ansible / Puppet / Chef** | Linux + heterogeneous |
| **SCCM application** | Existing SCCM-managed fleet |
| **VMware vCenter connector** | ESXi VMs (newer) |
| Manual interactive | Small lab/pilot only |

---

## 🏛️ Azure Policy via Arc

| Effect | What it does |
|--------|--------------|
| **DeployIfNotExists (DINE)** | Auto-installs resources when conditions met |
| **AuditIfNotExists** | Reports compliance but doesn't fix |
| **Deny** | Blocks resource creation |
| **AddTag / Modify** | Augments resource properties |

**Pattern:** Assign at **Management Group** scope → DINE auto-installs AMA, Defender, Update Mgmt → trigger **Remediation Task** for existing non-compliant.

---

## 🔄 Update Management Center

| Property | Detail |
|----------|--------|
| Covers | Azure VMs + Arc machines (Windows + Linux) |
| Scheduling | Cron-like via Maintenance Configurations |
| Pre/post scripts | Azure Automation runbooks |
| Reboot | Always / Never / IfRequired / RebootOnly |
| Multiple windows per machine | Yes |

---

## 🛟 ESU via Arc

- Windows Server 2008 R2 ESU through 2023 (Azure-only)
- Windows Server **2012 / 2012 R2 ESU through Oct 2026**
- Per-core ESU SKU billed to Azure sub
- Requires Arc onboarding + license link in portal

---

## 🤖 Run Command via Arc

- Execute PowerShell / Bash on Arc machines
- Goes over the agent's outbound channel — **no inbound port required**
- Output captured in response (ship to LA for audit)

---

## 🐳 Arc-Enabled Kubernetes Quick

| Capability | Detail |
|------------|--------|
| Distributions | **Any conformant K8s** (AKS, EKS, GKE, OpenShift, K3s, RKE, kubeadm) |
| GitOps | Flux v2 (CNCF graduated) |
| Policy | Azure Policy for K8s (OPA/Gatekeeper backend) |
| Monitor | Container Insights (AMA + DCR) |
| Defender | Defender for Containers — image scan + runtime |
| App hosting | App Services / Functions on Arc |

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:
- ✅ "Outbound HTTPS only — no inbound ports"
- ✅ "Use Azure Connected Machine Onboarding role for SP"
- ✅ "Apply policy at the management group scope"
- ✅ "DINE effect with a remediation task for existing resources"
- ✅ "Onboard at scale via Group Policy"
- ✅ "ESU via Arc for Windows Server 2012 R2"
- ✅ "Arc Private Link for air-gapped networks"

Usually **wrong**:
- ❌ "Arc requires inbound RDP/SSH"
- ❌ "Owner role to onboard (least privilege violation)"
- ❌ "Arc K8s only works with AKS"
- ❌ "ESU is free with Arc onboarding"
- ❌ "Manual portal onboarding for 1,000+ servers"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Onboarding without consistent tags (`env`, `owner`, `costcenter`)
- ❌ Policy at subscription scope only (new subs won't inherit)
- ❌ No remediation task after DINE assignment
- ❌ Bypassing the Onboarding role and using Owner SP
- ❌ Air-gapped network without Arc Private Link planning

---

## 📐 One-Line Decision Matrix

| Need | Feature |
|------|---------|
| Project on-prem Windows into Azure for governance | Arc-enabled server + Connected Machine agent |
| Project any K8s cluster into Azure | Arc-enabled Kubernetes + Connect cluster |
| Patch Azure + Arc fleet from one place | Update Management center |
| Keep Win2012R2 patched past Oct 2026 | ESU via Arc |
| Run a script on Arc machine without inbound port | Run Command |
| Auto-install AMA on every Arc machine | Policy DINE at MG + remediation task |
| Govern new subs automatically | Policy at MG scope |
| Onboard 5,000 servers fast | GPO (Windows) / Ansible (Linux) startup script |
| Arc in air-gapped network | Arc Private Link with Private Endpoints |
| Validate connectivity before onboarding | `azcmagent check` |

---

## ✏️ Quick Self-Check

1. Arc resource type for servers? ___
2. Connected Machine agent network direction? ___
3. Least-privilege onboarding role? ___
4. DINE + remediation pattern? ___
5. ESU via Arc — which OSes and through when? ___
6. Arc-enabled K8s — which distributions? ___

---

➡️ [Module 7: Azure Monitor & Hybrid Monitoring](../Module-07-Azure-Monitor/Reading.md)
