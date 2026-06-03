# Module 5: Virtual Machines 🖥️

> **Why this module matters:** VMs are 20–25% of the AZ-104 exam. Picking the right size, redundancy model, and disk tier — and knowing how to scale, image, and automate them — is the bread and butter of an Azure admin. Expect drag-drop case studies.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1](../Module-01-Subscriptions-Resource-Hierarchy/Reading.md): subscriptions, regions, and quota concepts (VM cores are a per-subscription, per-region quota).
> - [Module 2](../Module-02-Entra-ID-RBAC/Reading.md): Managed Identity (every modern VM should have one).
> - [Module 3](../Module-03-Storage-Accounts-Blobs/Reading.md): managed-disk storage is built on the storage account redundancy model you just learned.
> - Basic Linux *and* Windows admin literacy: at least one of `ssh`, `cloud-init`, PowerShell remoting; or RDP and `sysprep`.
>
> If you have not provisioned an Azure VM via CLI before, do so before tackling the quiz — the drag-drop "task sequencing" exam style rewards finger memory, not just visual memory.

---

## 🍕 A Story: The Pop-Up Donut Shop That Couldn't Handle Fame

Sasha runs "Hole Truth Donuts" out of a single food truck. One night a TikTok video of her maple bacon glaze goes viral and the line stretches around the block. The truck can fry maybe 80 donuts an hour. The line wants 800. By Saturday she's lost half her customers to a faster-but-worse competitor.

Three months later, after listening to a business coach, Sasha rebuilds:

- **Multiple identical trucks** parked at different lots — if one breaks down, the others keep selling. (That's **Availability Zones** — different physical locations in the same metro.)
- **A single base recipe and equipment list**, used to bring up each new truck in 20 minutes. (That's a **VM image**.)
- **Auto-summon**: when the line tops 30 people, she texts a backup truck to roll in. When the crowd dies down, that truck goes home. (That's a **scale set with autoscale rules**.)
- **Standardized add-ons** — every new truck gets the same logo, oven settings, POS install. (That's a **VM extension** like Custom Script Extension.)

That's the VM mental model. The exam will throw you scenarios where the cure is one of these patterns. Recognize the pattern, pick the right service.

---

## 🧮 VM Sizes & Families

| Family prefix | Optimized for | Examples |
|----|----|----|
| **A** | Entry-level / dev test | A-series (legacy) |
| **B** | Burstable (CPU credits) | B2s, B4ms — cheap dev VMs |
| **D** | General purpose | D2s_v5, D8as_v5 |
| **E** | Memory-optimized | E4ds_v5 — big RAM/CPU ratio |
| **F** | Compute-optimized | F4s_v2 — high CPU/RAM ratio |
| **L** | Storage-optimized | L8s_v3 — high local disk IOPS |
| **M / Mv2** | Memory-monster | SAP HANA, very large in-memory DBs |
| **N** | GPU | NC, ND, NV — ML, rendering |
| **H** | HPC | H, HB, HC — InfiniBand, MPI workloads |

🔥 **Suffix decoder:**
- `s` = Premium SSD support (you almost always want this)
- `d` = local NVMe temp disk
- `a` = AMD CPU
- `_v5` = generation 5 (newer = better $/perf)

```bash
az vm list-sizes --location eastus --output table | head -20
```

---

## 🏗️ Availability Patterns (MEMORIZE)

The big-three resilience options:

| Option | What it gives you | SLA |
|--------|-------------------|-----|
| **Single VM with Premium SSD** | None except hardware redundancy | 99.9% |
| **Availability Set (AS)** | Spreads VMs across fault & update domains in the same datacenter | 99.95% |
| **Availability Zone (AZ)** | Spreads VMs across physically separate datacenters in the same region | **99.99%** |
| **Virtual Machine Scale Set (VMSS)** | Identical VMs treated as a unit; can be zonal or regional | up to 99.99% |
| **Regional pair (DR via ASR)** | Cross-region failover | Custom |

🔥 **Fault Domain (FD)** = a rack with shared power/network. **Update Domain (UD)** = a group rebooted together for host patching.

- AS default: 2 FDs × 5 UDs (max 3 FDs × 20 UDs)
- An AS must be specified at VM **creation time** — can't add later.
- Zones (AZs) are mutually exclusive with AS — pick one.

### Create a VM in an Availability Zone via CLI

```bash
az vm create \
    --resource-group rg-app \
    --name vm-web-01 \
    --location eastus \
    --image Ubuntu2204 \
    --size Standard_D2s_v5 \
    --zone 1 \
    --admin-username azureuser \
    --generate-ssh-keys \
    --vnet-name vnet-app \
    --subnet snet-web \
    --public-ip-sku Standard \
    --nsg "" \
    --os-disk-delete-option Delete
```

### PowerShell — VM in an AS

```powershell
$as = New-AzAvailabilitySet `
    -ResourceGroupName "rg-app" -Name "as-web" `
    -Location "eastus" -PlatformFaultDomainCount 3 `
    -PlatformUpdateDomainCount 5 -Sku Aligned   # "Aligned" = supports managed disks

New-AzVM -ResourceGroupName "rg-app" -Name "vm-web-01" `
         -Location "eastus" -Size "Standard_D2s_v5" `
         -Image "UbuntuLTS" -AvailabilitySetId $as.Id `
         -Credential (Get-Credential)
```

---

## 💾 Managed Disks

A managed disk = an Azure-managed storage account behind the scenes. Five SKUs to know:

| SKU | Backing | Use case | Max IOPS |
|-----|---------|----------|----------|
| **Standard HDD** | HDD | Dev/test, low cost | ~500 |
| **Standard SSD** | SSD | Light prod web servers | ~6,000 |
| **Premium SSD** | SSD with high IOPS | Production workloads | ~20,000 |
| **Premium SSD v2** | SSD with **independent** IOPS, throughput, size | Cost-optimized prod, modern | ~80,000 |
| **Ultra Disk** | SSD, sub-ms latency, fully configurable | SAP HANA, top-tier DB | ~160,000 |

🔥 **Premium SSD v2 advantages:** you set IOPS, throughput, and size independently — no more "buy P30 just for the IOPS." Plus 1 GiB increments, not the rigid P-tier ladder.

| Constraint | Premium SSD v2 | Ultra |
|------------|----------------|-------|
| OS disk supported? | ❌ Data disks only | ❌ Data disks only |
| Zone-redundant? | ✅ (LRS or ZRS) | ✅ (LRS or ZRS) |
| Snapshot support | ✅ | Limited |
| AZ availability | Most | Most (check region) |

### Disk encryption layers (Azure-managed disks)

| Layer | What it does | Default |
|-------|--------------|---------|
| **SSE with PMK** (platform-managed key) | Storage-level encryption | On |
| **SSE with CMK** | KV-backed key | Opt-in |
| **Azure Disk Encryption (ADE)** | BitLocker (Win) / dm-crypt (Linux) inside the OS, key in KV | Opt-in, host-level |
| **Encryption at host** | Encrypts temp + cache disks on the physical host | Opt-in (must be enabled on subscription) |
| **Confidential disks** | TEE-backed | Specialized scenarios |

```bash
# Create a Premium SSD v2 data disk
az disk create \
    --resource-group rg-app \
    --name disk-app-data \
    --size-gb 500 \
    --sku PremiumV2_LRS \
    --disk-iops-read-write 5000 \
    --disk-mbps-read-write 200 \
    --zone 1
```

---

## 🖼️ VM Images

| Image type | What it is | Use case |
|------------|------------|----------|
| **Marketplace** | Vendor-published (Microsoft, Canonical, RedHat, etc.) | Standard OS or appliance |
| **Custom / managed image** | Snapshot of a generalized VM | Reproducible golden image |
| **Azure Compute Gallery (formerly Shared Image Gallery)** | Versioned, replicated images across regions | Org-wide standard images |
| **VHD** | Bring-your-own disk | Lift-and-shift |

### Compute Gallery essentials

- Hierarchy: **Gallery → Image Definition → Image Version (e.g. 1.0.0)**
- Replication targets: list of regions where the version is staged for fast deploy
- Replication count: number of cached copies per region (more = faster parallel deploys)
- Versioning lets you `1.0.0 → 1.1.0` without breaking pinned references

```bash
# Generalize a VM (Windows: run sysprep; Linux: waagent -deprovision +user)
az vm deallocate -g rg-app -n vm-gold
az vm generalize -g rg-app -n vm-gold

# Capture as an image
az image create -g rg-app -n img-web-2026 --source vm-gold

# Or publish to Compute Gallery (recommended)
az sig create -g rg-app -n gal_corp_main
az sig image-definition create -g rg-app -r gal_corp_main \
    -i web-ubuntu-2204 --publisher contoso --offer web --sku 2204 \
    --os-type Linux --os-state Generalized --hyper-v-generation V2
az sig image-version create -g rg-app -r gal_corp_main \
    -i web-ubuntu-2204 -e 1.0.0 \
    --managed-image $(az image show -g rg-app -n img-web-2026 --query id -o tsv) \
    --target-regions eastus=2 westus2=1
```

---

## 🛠️ VM Extensions

Code/scripts that Azure injects into the VM at boot or on demand. The big ones:

| Extension | Use |
|-----------|-----|
| **Custom Script Extension (CSE)** | Run a script on VM provision/update |
| **Run Command** | Ad-hoc command from the portal (doesn't need RDP/SSH) |
| **DSC** | PowerShell Desired State Configuration |
| **Azure Monitor Agent (AMA)** | Sends logs/metrics to Log Analytics |
| **Network Watcher Agent** | Enables packet capture & connection monitor |
| **Azure Disk Encryption** | Manages BitLocker / dm-crypt |
| **VM Insights** | Performance + map dependencies in Monitor |

### Install CSE via CLI (Linux example)

```bash
az vm extension set \
    --resource-group rg-app \
    --vm-name vm-web-01 \
    --name customScript \
    --publisher Microsoft.Azure.Extensions \
    --version 2.1 \
    --settings '{"fileUris":["https://example.com/install-nginx.sh"], "commandToExecute":"bash install-nginx.sh"}'
```

---

## 📈 Virtual Machine Scale Sets (VMSS)

A **Scale Set** is a group of identical VMs that scale together. Two orchestration modes:

| Mode | Notes |
|------|-------|
| **Uniform** (classic) | Same SKU/image, tightly managed by VMSS, max 1000 instances |
| **Flexible** (modern, default) | Mix sizes, integrate with AS-style FDs, max 1000 by default |

Flexible orchestration is **recommended for new deployments** — it integrates with AZs and supports mixed instance types.

### Autoscale rules

```bash
# Define an autoscale profile on an existing VMSS
az monitor autoscale create \
    --resource-group rg-app \
    --resource vmss-web \
    --resource-type Microsoft.Compute/virtualMachineScaleSets \
    --name autoscale-cpu \
    --min-count 2 --max-count 10 --count 2

# Scale OUT when avg CPU > 70% for 5 min
az monitor autoscale rule create \
    --resource-group rg-app \
    --autoscale-name autoscale-cpu \
    --condition "Percentage CPU > 70 avg 5m" \
    --scale out 1

# Scale IN when avg CPU < 30% for 5 min
az monitor autoscale rule create \
    --resource-group rg-app \
    --autoscale-name autoscale-cpu \
    --condition "Percentage CPU < 30 avg 5m" \
    --scale in 1
```

| Metric | Common rule |
|--------|-------------|
| Percentage CPU | > 70% → out · < 30% → in |
| Memory % | > 80% → out |
| Inbound flows | > N → out |
| Schedule-based | "Add 5 instances at 7 AM weekdays" |

🔥 **Cooldown** = post-scale wait before next scale event (default 5 min). Prevents flapping.

---

## 🧷 Update Management & Maintenance

| Feature | What it does |
|---------|--------------|
| **Azure Update Manager** | Periodic + on-demand OS patching, replaces "Update Management (legacy)" |
| **Maintenance Configuration** | Schedule reboots/maintenance windows |
| **Scheduled events** | API the VM can poll to learn of upcoming host maintenance |
| **Live migration** | Microsoft moves your VM to another host with minimal disruption |

---

## 🧪 Task-Sequencing Practice: Stand Up a Highly Available Web Tier

**Order these steps** to deploy a 3-instance, zone-redundant web tier behind a public load balancer.

1. ✅ Create the **resource group** + **VNet** with subnets in your target region.
2. ✅ Create a **Standard SKU Public IP** and **Standard Load Balancer** (zonal-redundant frontend).
3. ✅ Create a **Custom Image** in **Azure Compute Gallery** for the web app (or use Marketplace).
4. ✅ Create a **VM Scale Set (Flexible)** with **`--zones 1 2 3`** and the gallery image.
5. ✅ Attach the **LB backend pool** to the VMSS.
6. ✅ Define **autoscale rules** (CPU > 70% scale out, < 30% scale in; min 2, max 10).
7. ✅ Apply **NSGs** on the subnet to allow only 443 inbound from `Internet` + 22/3389 from `MgmtBastion`.
8. ✅ Configure **Azure Backup** + **Azure Monitor agent** via extension.
9. ✅ Optionally add **Azure Front Door** for global routing (Module 8).

⚠️ Skipping zonal LB + zonal VMSS = single-AZ outage takes you down. Skipping autoscale = paying for 10 VMs even at 3 AM.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "AS can be set after VM creation" | ❌ Must specify at create time |
| "AS and AZ can be combined" | ❌ Pick one |
| "Ultra Disk works as OS disk" | ❌ Data disks only (so does Premium SSD v2) |
| "B-series is great for production" | ❌ Bursts on CPU credits — only OK for predictable low-CPU |
| "Spot VMs always run" | ❌ Can be evicted with 30 sec notice |
| "VMSS scale OUT instantly meets demand" | ❌ New VMs need to boot — pre-warm for fast traffic spikes |
| "ADE encrypts at host" | ❌ ADE is in-OS (BitLocker/dm-crypt). Host encryption is a separate feature. |
| "Custom Script Extension runs every boot" | ❌ Runs once per extension; updates trigger re-run |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **VM size family** | Letter prefix indicating workload optimization (D, E, F…) |
| **Suffix `s` / `d` / `a`** | Premium SSD support / NVMe temp / AMD CPU |
| **Availability Set (AS)** | FD + UD spread within one datacenter |
| **Availability Zone (AZ)** | Physically separate datacenters in a region |
| **Fault Domain (FD)** | Group sharing a rack power/network |
| **Update Domain (UD)** | Group rebooted together during host maintenance |
| **Managed disk** | Azure-managed disk SKU |
| **Premium SSD v2** | Modern disk with independent IOPS / throughput / size |
| **Ultra Disk** | Top-tier disk for SAP HANA / heavy DBs |
| **VHD** | Virtual Hard Disk file format |
| **Custom image / managed image** | Generalized VM snapshot |
| **Azure Compute Gallery** | Versioned, multi-region image catalog |
| **VM extension** | Code injected into a VM at boot/runtime |
| **VMSS** | Virtual Machine Scale Set |
| **Orchestration mode** | Uniform (legacy) vs Flexible (modern, default) |
| **Autoscale profile** | Min/max/default + scale rules |
| **Cooldown** | Wait period after a scale event |
| **Spot VM** | Bid for spare capacity, 30s eviction notice |

---

## ✅ Module 5 Summary

You now know:

- 🧮 The 8 VM family prefixes and what each is optimized for
- 🏗️ AS vs AZ — what they protect against, when to use which
- 💾 The 5 managed-disk SKUs and where Premium SSD v2 shines
- 🔐 The 4 encryption layers (SSE / CMK / ADE / Host)
- 🖼️ Compute Gallery hierarchy and how to capture/version images
- 🛠️ Key VM extensions (CSE, Run Command, AMA)
- 📈 VMSS Flexible vs Uniform + autoscale rules
- 🧷 Update Manager + Maintenance Config
- 🚨 The 8 common traps

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. 🧪 **TAKE [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) — you've covered the first half of the cert.**
5. ➡️ Move to [Module 6: App Services & Containers](../Module-06-App-Services-Containers/Reading.md)

---

## 📊 Case Study — Boeing Defense, Space & Security on Azure (2021–2024)

**Situation.** Boeing's commercial aviation business runs one of the most sensitive engineering compute workloads on Earth: CATIA, NX, ANSYS, finite-element analysis, and 787/777X CFD simulations involving designs subject to U.S. **ITAR** (International Traffic in Arms Regulations) and **EAR** (Export Administration Regulations) export controls. In addition, Boeing Defense, Space & Security runs workloads classified up to *Secret* in U.S. and partner-nation networks. Boeing announced a strategic partnership with Microsoft Azure at Microsoft Inspire 2018; the partnership was extended in 2021 to cover production engineering workloads and refreshed again in 2024 for generative-AI engineering copilot pilots (Boeing-Microsoft *Building the Connected Aerospace Enterprise* press releases, 2018-07; 2021-04; 2024-04).

**Decision.** Boeing's Azure footprint reflects a textbook regulated-workload architecture. Three decisions are directly testable on AZ-104:

1. **Sovereignty via region selection + Azure Policy.** Production engineering workloads run in **Azure Government** (`usgovvirginia`, `usgovtexas`) for ITAR-controlled data; commercial workloads run in `eastus`, `eastus2`, `westus3` per the Microsoft Cloud Adoption Framework "Sovereign Landing Zone" pattern (Microsoft, 2023; refreshed 2025). An **Allowed Locations** policy at the management-group root prevents accidental deployment outside the allowed region list.
2. **Compute sizing for engineering simulation.** Boeing uses **H-series VMs (HBv4, HC, HX)** for CFD — InfiniBand-fabric-attached HPC SKUs that publish 200 Gbps low-latency interconnect. For workstation interactive use, **NV-series GPU VMs** (NVv4 with AMD MI-series, NCa-series with NVIDIA A100/H100) running Citrix or Azure Virtual Desktop replace physical workstations for engineers who travel. The exam tests these by family letter — *H = HPC, N = GPU, M = memory monster, D = general* — not by exact SKU.
3. **Image management at scale.** Boeing publishes a hardened "golden image" weekly via **Azure Compute Gallery** with replication to 4 regions × 3 cached copies. Every engineering VM (~tens of thousands of them) is rebuilt from this image; Custom Script Extension + the DSC extension apply per-team licensing and configuration. No engineer ever logs into a VM with admin rights — RBAC is `Virtual Machine User Login` for SSH/RDP only.

Combined with **Azure Disk Encryption (BitLocker)** + **encryption at host** + Customer-Managed Keys in Azure Key Vault, this is the architecture Microsoft Learn AZ-104 chapter 4 effectively asks you to design from scratch in case-study mode.

**Outcome.** Boeing has not published cost numbers, but Microsoft's Inspire 2021 keynote stated Boeing reduced engineering-simulation queue times by **40%** versus on-prem HPC clusters, primarily because Azure HBv3/v4 capacity is elastic — peak design-review weeks can burst to 4× steady-state without waiting on a procurement cycle. As of the 2024 partnership refresh, Boeing is piloting Microsoft Copilot for Engineering on the same Azure footprint, with Azure OpenAI Service in the *Azure Government Top Secret* environment.

**Lesson for the exam / for practitioners.** This case wraps the entire AZ-104 compute domain into one scenario:

- *Right VM family for the workload?* H for CFD, N for GPU rendering, D for the build agents. Memorize the prefixes.
- *Right disk for the workload?* Premium SSD v2 for general data disks; Ultra Disk for the SAP HANA database that Boeing also runs on Azure; Premium SSD for OS disks; **NOT** Premium SSD v2 or Ultra as OS disks.
- *Right availability model?* AS for legacy single-DC apps; AZ for zone redundancy; **VMSS Flexible** with zone spread for stateless workloads.
- *Right sovereignty model?* Allowed Locations policy + Azure Government region for ITAR data.

When AZ-104 shows you a case study with "data subject to U.S. export controls" and asks "which compute architecture meets the requirement?", the answer is: H/N family in Azure Government, Compute Gallery for golden images, ADE + CMK encryption, zone-redundant VMSS, locked down with Azure Policy.

**Discussion (Socratic).**
- **Q1.** Boeing chose Azure Compute Gallery over per-team custom images. What's the trade-off? When does the operational overhead of versioned, multi-region gallery images *not* pay back — e.g., for a 5-engineer team running a one-off ML experiment?
- **Q2.** ITAR data must not transit a non-cleared region. A French Airbus competitor would face the same requirement under EU dual-use regulations. Design the Azure Policy + management-group + role-based segmentation that an *international* engineering company would use to run *both* U.S. ITAR data *and* EU dual-use data simultaneously without cross-contamination. Where does this design get fragile?
- **Q3.** Boeing uses VMSS Flexible across zones 1, 2, 3 for stateless workloads. For their *stateful* engineering license servers (FlexNet, RLM), they use single VMs in a Premium SSD + Availability Set in a *single* zone. Defend why pinning stateful workloads to one zone — accepting lower SLA — is sometimes the *correct* choice over the "always zone-redundant" reflex.

---

> **Where this leads.**
> - Inside this course: Module 6 covers the *managed* compute alternatives (App Service, AKS, ACI) — when a VM is the wrong answer; Module 7 covers the network design VMs sit in; Module 8 secures them; Module 9 backs them up.
> - Cross-course: [`04-AWS-Solutions-Architect-Associate` Module 4](../../04-AWS-Solutions-Architect-Associate/Module-04-VPC-Deep-Dive/Reading.md) covers EC2 / ASG / placement groups — the AWS analogue; [`09-CompTIA-Security-Plus`](../../../09-CompTIA-Security-Plus/) covers VM encryption (ADE) as a control class.
> - Practice: PE-1 has 7 questions from this module; PE-2 + Final Mock combine VMs with networking and backup.

---

## 💬 Discussion — Socratic prompts

1. **AS vs. AZ for legacy apps.** A 15-year-old Java app stores session state on local disk. The team wants HA. AS gives 99.95% SLA within a single datacenter; AZ gives 99.99% across zones but requires session replication. Defend each as the better short-term choice. At what point does the engineering cost of fixing the session-state design exceed the SLA gap?
2. **Spot VMs in production?** Spot VMs are 90% cheaper but evict with 30 sec notice. The conventional wisdom is "Spot is for batch only." Construct the strongest argument for using Spot for *interactive production workloads* — and the strongest argument against. Where's the line? (Hint: VMSS Flexible can mix Spot and on-demand instances.)
3. **Premium SSD v2 vs. Ultra Disk.** Both are modern; both let you tune IOPS/throughput independently. When is Ultra worth the operational cost (per-region restrictions, no snapshot support in some scenarios)? Defend a default-to-Premium-SSD-v2 policy and identify the workload class that actually needs Ultra.
4. **Encryption at host vs. ADE.** Microsoft now recommends "encryption at host" over Azure Disk Encryption (ADE) for new deployments. What does ADE still buy you that host encryption doesn't? When is the BYOK / customer-managed-key story *only* satisfied by ADE?
5. **VMSS autoscale tuning.** Default autoscale rules: scale out at CPU > 70%, scale in at < 30%. For a public web tier, what *specific* additional signals should you autoscale on (HTTP queue depth, custom App Insights metrics)? Design the rule set, and explain why CPU alone often misses load.

---

## 📚 Further Reading (Optional)

- 📖 [VM size families overview](https://learn.microsoft.com/azure/virtual-machines/sizes)
- 📖 [Availability options](https://learn.microsoft.com/azure/virtual-machines/availability)
- 📖 [Managed disk types](https://learn.microsoft.com/azure/virtual-machines/disks-types)
- 📖 [Azure Compute Gallery](https://learn.microsoft.com/azure/virtual-machines/azure-compute-gallery)
- 📖 [VMSS orchestration modes](https://learn.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-orchestration-modes)
- 📖 Microsoft, *Sovereign Landing Zone* reference architecture (Microsoft Cloud Adoption Framework, 2023; checked 2026-05) — the topology Boeing's regulated workloads follow.
- 📖 Microsoft *Well-Architected Framework — Reliability pillar* — the source for the AS/AZ SLA targets.
