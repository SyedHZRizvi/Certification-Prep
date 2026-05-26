# ✏️ Module 6 Quiz: Hybrid Cloud with Azure Arc

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. The Azure resource type for an Arc-enabled server is: *(Remember)*
A. `Microsoft.Compute/virtualMachines`
B. `Microsoft.HybridCompute/machines`
C. `Microsoft.Web/sites`
D. `Microsoft.Kubernetes/connectedClusters`

---

### Q2. The Azure Connected Machine agent communicates with Azure over: *(Remember)*
A. Outbound HTTPS (443) only
B. Inbound RDP (3389)
C. Outbound SSH (22)
D. Inbound HTTP (80)

---

### Q3. Which Azure Policy effect is used to auto-install AMA on Arc-enabled servers? *(Remember)*
A. Deny
B. Audit
C. DeployIfNotExists (DINE)
D. AddTag

---

### Q4. The LEAST-PRIVILEGE role for a service principal that onboards Arc servers is: *(Remember)*
A. Owner
B. Contributor
C. Reader
D. Azure Connected Machine Onboarding

---

### Q5. Arc-enabled Kubernetes works with: *(Understand)*
A. AKS only
B. Any Kubernetes distribution (AKS, EKS, GKE, OpenShift, K3s, etc.)
C. OpenShift only
D. Docker Swarm only

---

### Q6. Update Management center supports patching for: *(Remember)*
A. Azure VMs only
B. Azure VMs + Arc-enabled servers (Windows + Linux)
C. Arc machines only
D. Windows VMs only

---

### Q7. To pay-as-you-go for ESUs on a Windows Server 2012 R2 system after EOL, the BEST approach is: *(Apply)*
A. Buy traditional ESU keys from a reseller
B. Onboard to Arc and link an ESU license via the Azure portal
C. Migrate to Azure VMs
D. Disable Windows Update

---

### Q8. Arc-enabled K8s GitOps is powered by which open-source engine? *(Remember)*
A. Argo CD
B. Flux v2
C. Jenkins
D. Spinnaker

---

### Q9. **Yes/No** — Mark each statement. *(Evaluate)*

**S1:** The Connected Machine agent requires inbound ports for management.
**S2:** Arc-enabled servers can be governed by Azure Policy assigned at a management group.
**S3:** Arc Private Link enables Arc usage in air-gapped networks.

A. No / Yes / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / No / Yes

---

### Q10. To project an ESXi VM into Azure as an Arc resource, use: *(Apply)*
A. Connected Machine agent
B. The Azure Arc connector for VMware vCenter
C. AWS Migration Service
D. Hyper-V Replica

---

### Q11. Run Command on Arc-enabled servers: *(Understand)*
A. Requires inbound RDP/SSH
B. Uses the Connected Machine agent — no inbound ports needed
C. Is unsupported
D. Replaces Group Policy

---

### Q12. An Azure Policy DINE remediation task is needed to: *(Apply)*
A. Apply the policy to NEW resources only
B. Apply the policy to existing resources that were non-compliant before assignment
C. Delete policy violations
D. Notify the admin only

---

### Q13. The MOST scalable onboarding method for an existing 6,000-server AD-joined Windows fleet is: *(Apply)*
A. Manual portal click-through
B. Group Policy startup script
C. RDP into each server
D. Email script to each admin

---

### Q14. **Yes/No** — Mark each statement. *(Analyze)*

**S1:** Arc-enabled SQL Managed Instance runs in Kubernetes (Arc-enabled K8s as the host).
**S2:** Azure Monitor Agent (AMA) can be installed on Arc machines via Azure Policy.
**S3:** ESU via Arc is included free with Defender for Servers P1.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / No
D. Yes / No / Yes

---

### Q15. Which is TRUE about Arc-enabled servers' identity? *(Remember)*
A. Each gets a system-assigned managed identity at onboarding
B. They use the on-prem AD computer account exclusively
C. They use a shared Azure storage account key
D. They have no identity

---

### Q16. An Arc resource's region is: *(Understand)*
A. The Azure region where the resource record lives (NOT the physical location)
B. Always EastUS
C. Automatically detected from the server's network
D. Cannot be changed

---

### Q17. **Order these steps** to onboard 100 Linux servers to Arc, deploy AMA, and enable Defender for Servers. *(Create)*

1. Enable Defender for Servers P2 on the subscription
2. Create the resource group `rg-arc-linux-prod`
3. Generate at-scale Arc onboarding script in Azure Portal
4. Deploy the script to all 100 servers via Ansible
5. Assign Azure Policy: "Configure machines for logs to LA workspace" + "Enable Defender for Endpoint"
6. Trigger remediation tasks

A. 1 → 2 → 3 → 4 → 5 → 6
B. 2 → 1 → 3 → 4 → 5 → 6
C. 2 → 3 → 4 → 1 → 5 → 6
D. 3 → 2 → 1 → 4 → 5 → 6

---

### Q18. Which Azure governance feature is MOST useful for ensuring every NEW Arc subscription auto-receives the AMA + Defender policies? *(Apply)*
A. Management Group with policies assigned at MG scope
B. Per-subscription tags
C. Resource locks
D. Custom RBAC role

---

### Q19. The Connected Machine agent on a Windows Server runs as which service? *(Remember)*
A. Azure Hybrid Instance Metadata Service (HIMDS)
B. Windows Update
C. Microsoft Entra Connect
D. Azure DevOps Agent

---

### Q20. **Yes/No** — Update Management. *(Apply)*

**S1:** Update Management center supports pre/post scripts via Azure Automation.
**S2:** Maintenance configurations support cron-style recurring schedules.
**S3:** Update Management can patch Arc-enabled servers but not Azure VMs.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / No
D. Yes / Yes / Yes

---

### Q21. To monitor Arc-enabled server health from Azure portal, the FIRST thing to check is: *(Apply)*
A. The Connected Machine agent status (Connected / Offline / Expired)
B. The Azure Monitor alert
C. The Defender recommendation
D. The Network Watcher

---

### Q22. Arc-enabled servers in Azure US Gov cloud: *(Understand)*
A. Are unsupported
B. Must use the `AzureUSGovernment` cloud parameter at onboarding
C. Use the same endpoints as commercial Azure
D. Don't support Defender

---

### Q23. An Azure Policy initiative is: *(Remember)*
A. A single rule
B. A collection of related policies governed as one assignment
C. A custom role
D. A management group

---

### Q24. **Yes/No** — Mark each statement. *(Analyze)*

**S1:** Arc-enabled K8s requires an internet-facing API server.
**S2:** Defender for Containers can scan images in an Arc-enabled K8s cluster.
**S3:** Container Insights uses AMA + DCR (same model as VMs).

A. No / Yes / Yes
B. Yes / Yes / Yes
C. No / Yes / No
D. Yes / No / Yes

---

### Q25. Which is the MOST IMPORTANT tag to apply to Arc resources for cost mgmt and automation? *(Apply)*
A. `Created`
B. `Description`
C. Consistent set: `env`, `owner`, `costcenter` (minimum)
D. `Location`

---

### Q26. To verify outbound connectivity from an Arc candidate server BEFORE onboarding, the CLI tool to use is: *(Apply)*
A. `Test-NetConnection` on Windows / `nc -z` on Linux to the documented endpoints, OR `azcmagent check`
B. `Test-DhcpServer`
C. `dcdiag /v`
D. `Resolve-DnsName`

---

## 🎯 Answers + Explanations

### Q1: **B. `Microsoft.HybridCompute/machines`**
Distinct from Azure VMs (`Microsoft.Compute/virtualMachines`). Both can be governed by Azure Policy.

### Q2: **A. Outbound HTTPS (443) only**
Memorize this — Arc agent has no inbound port requirements. This is the security headline.

### Q3: **C. DeployIfNotExists (DINE)**
DINE auto-installs resources when conditions are met. The standard pattern for Arc automation.

### Q4: **D. Azure Connected Machine Onboarding**
Least-privilege built-in role. Owner/Contributor are too broad; Reader can't create.

### Q5: **B. Any Kubernetes distribution**
Arc-enabled K8s works with any conformant K8s — AKS, EKS, GKE, OpenShift, K3s, RKE, kubeadm clusters.

### Q6: **B. Azure VMs + Arc-enabled servers (Windows + Linux)**
Update Management center is unified across both.

### Q7: **B. Onboard to Arc and link an ESU license**
Arc is the billing channel for ESUs on out-of-support OSes.

### Q8: **B. Flux v2**
Arc K8s GitOps uses Flux v2 (CNCF graduated project).

### Q9: **A. No / Yes / Yes**
S1 wrong (outbound only). S2 and S3 correct.

### Q10: **B. The Azure Arc connector for VMware vCenter**
Native Arc support for VMware projects ESXi VMs into Azure.

### Q11: **B. Uses the Connected Machine agent — no inbound ports needed**
Run Command works over the agent's outbound channel.

### Q12: **B. Apply the policy to existing resources that were non-compliant before assignment**
DINE applies forward-looking automatically; remediation tasks fix existing resources.

### Q13: **B. Group Policy startup script**
GPO scales to thousands of servers with zero manual touch.

### Q14: **A. Yes / Yes / No**
S1 correct (Arc-enabled SQL MI runs on K8s). S2 correct (Azure Policy installs AMA). S3 wrong (ESU is separately billed).

### Q15: **A. Each gets a system-assigned managed identity at onboarding**
Used for the agent's auth to Azure. Cannot be removed (would break the agent).

### Q16: **A. The Azure region where the resource RECORD lives (NOT the physical location)**
This is a control-plane region, not where the actual machine sits.

### Q17: **B. 2 → 1 → 3 → 4 → 5 → 6**
Create RG → enable Defender (sub-level) → generate script → deploy → policies → remediate.

### Q18: **A. Management Group with policies assigned at MG scope**
MG-level policy inheritance is the scale answer.

### Q19: **A. Azure Hybrid Instance Metadata Service (HIMDS)**
The Windows service backing the Connected Machine agent.

### Q20: **A. Yes / Yes / No**
S1 and S2 correct. S3 wrong — Update Management does Azure VMs too.

### Q21: **A. The Connected Machine agent status (Connected / Offline / Expired)**
The first sanity check. Other layers depend on the agent.

### Q22: **B. Must use the `AzureUSGovernment` cloud parameter at onboarding**
Different endpoints; the `--cloud` parameter selects them.

### Q23: **B. A collection of related policies governed as one assignment**
Initiatives bundle policies for easier mgmt at scale.

### Q24: **A. No / Yes / Yes**
S1 wrong (Arc K8s agent runs in-cluster, outbound only — no internet-facing API needed). S2 and S3 correct.

### Q25: **C. Consistent set: `env`, `owner`, `costcenter` (minimum)**
The Microsoft IT-recommended minimum tag set for governance at scale.

### Q26: **A. Test connectivity tools OR `azcmagent check`**
`azcmagent check` is the dedicated pre-flight tool that validates all required endpoints.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Arc domain mastered. Move on.
- 22–24/26 → ✅ Strong. Note misses, then continue.
- 18–21/26 → ⚠️ Re-read onboarding + Policy + Update Management sections.
- <18/26 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- Arc-enabled servers = `Microsoft.HybridCompute/machines`
- Outbound 443 only — no inbound ports
- Connected Machine Onboarding = least-privilege role
- DINE = Deploy-If-Not-Exists; remediation task for existing non-compliant
- ESU via Arc for Windows 2012 R2 past Oct 2026
- Arc-enabled K8s works with ANY K8s (Flux v2 GitOps)
- Run Command via agent — no inbound port
- Onboard at scale via GPO (Windows) or Ansible (Linux)
- HIMDS = Azure Hybrid Instance Metadata Service (Windows service name)
- Apply Policy at MG scope for sub-wide auto-inheritance

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 7](../Module-07-Azure-Monitor/Reading.md)
