# 📋 Module 7 Cheat Sheet: Endpoint, Mobile & Cloud Security

> One page. Print it.

---

## 💻 Endpoint Stack

| | What |
|---|------|
| **AV** | Signature-based malware detection |
| **EPP** | AV + host FW + device ctrl |
| **EDR (Endpoint Detection and Response)** | Behavioral + telemetry + threat hunt + rollback |
| **XDR (Extended Detection and Response)** | EDR + network + cloud + email correlated |
| **MDR** | Managed (outsourced) DR service |
| **HIDS / HIPS** | Host-based IDS / IPS |
| **FIM** | File Integrity Monitoring |

Hardening = **CIS Benchmarks**, **DISA STIGs**, MS Security Baselines.

---

## 📱 Mobile Models & Tools

| BYOD | Bring Your Own |
| CYOD | Choose Your Own |
| **COPE** | Corp-Owned, Personally Enabled |
| **COBO** | Corp-Owned, Business Only |

| MDM (Mobile Device Management) | Whole device |
| MAM | Just corp apps/data (selective wipe) |
| **UEM** | MDM + laptop + desktop + IoT |
| EMM | Older umbrella term |

---

## ☁️ Shared Responsibility (MEMORIZE)

```
                 Provider │ Customer
Physical    ──────  ✅   │
HW / Hyper  ──────  ✅   │
Guest OS    ──────       │ ✅ (IaaS (Infrastructure as a Service))
Runtime     ──────       │ ✅ (IaaS) / ✅(PaaS (Platform as a Service) shared)
App         ──────       │ ✅
Data + IAM  ──────       │ ✅ (ALL models)
```

🚨 Even in SaaS (Software as a Service), data + IAM + config = **your problem.**

---

## ☁️ Cloud Security Tools (the acronym soup)

| Acronym | Function |
|---------|----------|
| **CASB** | User ↔ SaaS broker; shadow-IT discovery |
| **CSPM** | Continuous config audit |
| **CWPP** | Runtime VM (Virtual Machine)/container protection |
| **CIEM** | IAM entitlements right-sizing |
| **SASE** | SD-WAN (Wide Area Network) + cloud sec services |
| **SSE** | SASE minus SD-WAN |
| **ZTNA (Zero Trust Network Access)** | Identity-aware app access (replaces VPN (Virtual Private Network)) |
| **SWG** | Outbound web filtering |
| **FWaaS** | Firewall as a service |

---

## 📦 Container & Serverless Quick Hits

- Containers share host kernel, root container = root host
- Use minimal base images, scan, sign, control registry
- Kubernetes: RBAC (Role-Based Access Control) + NetworkPolicy + Pod Security
- Serverless: function IAM is the #1 risk; secrets out of env vars
- IaC (Infrastructure as Code): pre-commit secret scan; Checkov / tfsec for policy

---

## 🏭 OT / ICS / SCADA Vocabulary

| | What |
|---|------|
| **IoT** | Consumer connected things |
| **ICS** | Industrial Control Systems |
| **SCADA** | Wide-area supervisory + control |
| **PLC** | The actual controller on the floor |
| **HMI** | Human-Machine Interface |
| **DCS** | Distributed Control System |
| **RTOS** | Real-Time OS |
| **Purdue Model** | OT segmentation reference |

OT mitigations: **segmentation, jump servers, monitoring, vendor risk**, NOT just patching.

---

## 🏆 Exam Power Phrases

- ✅ "Least privilege IAM in cloud"
- ✅ "Enable CloudTrail / Activity Log org-wide"
- ✅ "CASB for shadow-IT discovery"
- ✅ "Selective wipe + containerization for BYOD"
- ✅ "Network segmentation + monitoring (OT)"
- ❌ "Public S3 (Simple Storage Service) bucket, provider's fault"
- ❌ "Disable logging to save cost"
- ❌ "Run container as root for convenience"
- ❌ "Connect PLC to the internet"

---

## ✏️ Quick Self-Check

1. EDR vs XDR vs MDR difference?
2. Who configures S3 bucket policy, AWS (Amazon Web Services) or customer?
3. Selective wipe is associated with MDM or MAM?
4. SCADA controllers, first 3 compensating controls when patching is impossible?
5. CASB vs CSPM in one line each?

---

➡️ [Module 8: Security Operations](../Module-08-Security-Operations/Reading.md)
