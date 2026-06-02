# 📋 Module 4 Cheat Sheet: Virtualization & Cloud

> One page. Print it.

---

## 🏗️ Hypervisor Types

| Type | Runs on | Examples | Use |
|------|---------|----------|-----|
| **Type 1** (bare-metal) | Hardware | ESXi, Hyper-V Server, KVM, Xen, Proxmox | Data centers |
| **Type 2** (hosted) | Host OS | VirtualBox, VMware Workstation, Parallels, UTM | Laptops, labs |

---

## ☁️ NIST Cloud — Memorize Cold

### 5 Essential Characteristics
1. On-demand self-service
2. Broad network access
3. Resource pooling
4. Rapid elasticity
5. Measured service

### 3 Service Models

| Model | You manage | Examples |
|-------|------------|----------|
| **IaaS** | OS + above | AWS EC2, Azure VMs |
| **PaaS** | App + data | App Service, Beanstalk, Heroku |
| **SaaS** | Data + config only | M365, Salesforce, Slack |

### 4 Deployment Models
- **Public** — multi-tenant 3rd-party (AWS, Azure, GCP)
- **Private** — single org (on-prem or hosted)
- **Community** — shared by similar orgs (gov, health)
- **Hybrid** — mix with orchestration

---

## 🛡️ Shared Responsibility

| Layer | IaaS | PaaS | SaaS |
|-------|------|------|------|
| Physical / Hypervisor | Provider | Provider | Provider |
| Network | Customer | Provider | Provider |
| OS patching | **Customer** | Provider | Provider |
| App code | Customer | Customer | Provider |
| Data / Identity | **Customer** | **Customer** | **Customer** |

---

## 📦 VM vs Container Cheat

| | VM | Container |
|--|----|-----------| 
| OS kernel | Full | Shares host |
| Size | GB | MB |
| Boot | seconds-minutes | ms |
| Density | tens/host | hundreds/host |
| Examples | ESXi, Hyper-V | Docker, Podman |

---

## 🖥️ VM Resource Terms

- **vCPU** — virtual core, maps to host core/thread
- **vRAM** — allocated from host RAM
- **vNIC** — attached to vSwitch / vNet
- **Thin provisioning** — disk grows on write
- **Thick provisioning** — full size pre-allocated
- **Snapshot** — point-in-time, NOT a backup
- **Clone** — copy of a VM (linked or full)
- **vMotion / Live Migration** — move running VM, zero downtime

---

## 🖱️ VDI / DaaS

- **VDI** = desktops as VMs in DC (Citrix, Horizon, Azure Virtual Desktop)
- **DaaS** = VDI as a managed cloud service (AVD, Amazon WorkSpaces)
- **Thin client** = stripped-down endpoint that connects to VDI

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Use a template + automated clone"
- "Apply the Shared Responsibility Model"
- "Tag every resource for cost tracking"
- "Use multi-region for production resilience"
- "Snapshots are not backups"

❌ Often **wrong**:

- "Cloud is always cheaper"
- "PaaS requires no maintenance"
- "Snapshot = backup"
- "Containers and VMs are the same"
- "SaaS removes ALL customer responsibility"

---

## 🗓️ Memorize Cold

- 5 NIST characteristics + 3 service models + 4 deployment models
- ESXi/Hyper-V/KVM = Type 1
- VirtualBox/Parallels = Type 2
- IaaS → customer patches OS
- SaaS → customer still owns data + identity
- Snapshot ≠ backup
- Virtualization & Cloud = **11% of 220-1101**

---

## ✏️ Quick Self-Check

1. 3 NIST service models + 1 example each? ___
2. 5 essential cloud characteristics? ___
3. Who patches the OS in IaaS vs SaaS? ___
4. Type 1 vs Type 2 hypervisor — example of each? ___
5. Snapshot vs backup — what's the difference? ___

---

➡️ [Module 5: Troubleshooting](../Module-05-Troubleshooting/Reading.md)
