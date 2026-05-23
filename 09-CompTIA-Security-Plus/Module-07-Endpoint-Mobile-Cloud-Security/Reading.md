# Module 7: Endpoint, Mobile & Cloud Security 💻📱☁️

> **Why this module matters:** SY0-701 added significant cloud, mobile, container, and IoT/ICS content versus the older SY0-601 (released November 2020, retired July 2024). Endpoint + cloud security spans Domain 3 (Architecture, 18%) heavily and overlaps Domain 4 (Operations). About 15% of exam questions live here.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Network zones and segmentation](../Module-06-Network-Security/Reading.md) — the same vocabulary applies in cloud VPCs/VNETs.
> - [Encryption at rest / in transit / in use](../Module-02-Cryptography-PKI/Reading.md) — needed for cloud KMS and confidential-computing questions.
> - [IAM concepts](../Module-03-Identity-Access-Management/Reading.md) — overly-permissive cloud IAM is the #1 cloud-breach pattern.
> - [Threat-actor / supply-chain awareness](../Module-04-Threats-Threat-Actors/Reading.md) — needed for mobile, OT, and SaaS-supply-chain scenarios.

---

## 🍕 A Story: Three Devices in One Coffee Shop

Picture a customer at a coffee shop, juggling three devices:

- **Their laptop** — corporate-issued, full disk encrypted, EDR running, can't install random software (managed by IT). When the laptop tries to talk to anything weird, the EDR sees the process tree and alerts SOC. This is **endpoint security**.
- **Their phone** — personal device, used for work email. IT can wipe just the corporate data (not the family photos) if it's lost. The device must be passcode-locked, with screen lock < 5 minutes, and can't jailbreak. This is **MDM/UEM + BYOD**.
- **Their AWS account** — they're spinning up an S3 bucket from the coffee shop Wi-Fi. AWS handles physical security and the hypervisor; *they* handle the bucket's policies, encryption, IAM, and content. This is **cloud shared responsibility**.

Three very different places where data lives — three very different defenses. Sec+ asks you to keep them straight.

---

## 💻 Endpoint Security

### Endpoint protection evolution

| Generation | Tool | What it does |
|------------|------|--------------|
| 1st | **AV (antivirus)** | Signature-based malware detection |
| 2nd | **EPP (Endpoint Protection Platform)** | AV + host firewall + device control |
| 3rd | **EDR (Endpoint Detection & Response)** | Behavioral telemetry, process trees, threat hunting, rollback |
| 4th | **XDR (Extended Detection & Response)** | EDR + network + cloud + email correlated |
| 4th | **MDR / MSSP** | Managed Detection & Response — outsourced 24/7 EDR ops |

🎯 **Sec+ tells:** EDR records *process behavior*. AV looks for *known signatures*. XDR adds *cross-source correlation*.

### Host-based controls

| Control | What |
|---------|------|
| **HIDS / HIPS** | Host-based intrusion detection / prevention |
| **Host-based firewall** | Windows Firewall, ufw, pf — per-machine rules |
| **DLP agent** | Watches for sensitive data leaving the endpoint |
| **Device control** | USB block-lists, peripheral policies |
| **Application allow-list / deny-list** | Only approved apps may execute (or block known bad) |
| **FIM** (File Integrity Monitoring) | Alerts on changes to critical files (Tripwire, OSSEC) |
| **Tokenization / TPM-backed disk encryption** | BitLocker, FileVault, LUKS |

### Hardening & Secure Baselines

| Task | Why |
|------|-----|
| **Disable unused services / ports** | Reduce attack surface |
| **Remove default accounts** / rename admin | Block default-cred attacks |
| **Patch management** | Vendor fixes for known CVEs |
| **Configuration baselines** | CIS Benchmarks, DISA STIGs, Microsoft Security Baselines |
| **Group Policy / Intune policies** | Push baselines centrally |
| **Disk encryption** | Protect data at rest if device lost |
| **Secure boot / UEFI / measured boot** | Prevent bootkits |
| **Antimalware always-on** | EDR/AV |

### Patch / Vulnerability Management cycle
1. **Inventory** — what do we have?
2. **Scan** — find missing patches & misconfigs
3. **Prioritize** — by CVSS, exploit availability, asset criticality
4. **Test** — non-prod first
5. **Deploy** — production via WSUS, Intune, SCCM, Ansible, MDM
6. **Verify** — confirm closure on next scan

---

## 📱 Mobile & Endpoint Deployment Models

### Device ownership models

| Acronym | Means | Pros | Cons |
|---------|-------|------|------|
| **BYOD** | Bring Your Own Device | Cost savings, employee choice | Mixed personal/corp data; privacy |
| **CYOD** | Choose Your Own Device | IT pre-vets list | Less choice than BYOD |
| **COPE** | Corporate-Owned, Personally Enabled | IT controls; personal use allowed | Privacy concerns |
| **COBO** | Corporate-Owned, Business Only | Max security | No personal use |

### MDM / MAM / UEM

| Tool | Scope |
|------|-------|
| **MDM** (Mobile Device Management) | Manages the whole device (Intune, Jamf, MobileIron) |
| **MAM** (Mobile Application Management) | Just the corporate apps + their data (selective wipe) |
| **UEM** (Unified Endpoint Management) | MDM + laptop + desktop + IoT in one console |
| **EMM** (Enterprise Mobility Management) | Older term combining MDM + MAM + identity |

### Mobile capabilities Sec+ tests

- **Remote wipe** — selective (corp data only) vs full
- **Geofencing** — restrict app/feature based on location
- **Containerization** — separate work profile (Android Work Profile, iOS Managed Apps)
- **Screen lock + biometric** — required passcode, timeout
- **Jailbreak / root detection** — block compromised devices
- **Sideloading** — installing apps outside the official store (Sec+ red flag)
- **Tethering / hotspot policy** — controlled
- **Push security policies** (PIN length, encryption, app allow-list)

### Mobile attacks
- **Jailbreaking / rooting** — bypassing OS sandboxing
- **Sideloading malicious apps**
- **Bluetooth attacks** (bluejacking, bluesnarfing, bluebugging)
- **NFC abuse / RFID skimming**
- **Stalkerware**
- **Malicious profiles / config payloads**
- **SIM swap** — attacker convinces carrier to port number, defeating SMS MFA

---

## ☁️ Cloud Security Fundamentals

The **NIST definition of cloud computing** (SP 800-145, September 2011: Mell & Grance) established the standard model — IaaS, PaaS, SaaS — that Sec+ still tests today. The **shared-responsibility model** was articulated publicly by AWS in early **AWS Well-Architected** materials starting 2012 and standardized via [aws.amazon.com/compliance/shared-responsibility-model](https://aws.amazon.com/compliance/shared-responsibility-model/). Azure ([learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility)) and GCP ([cloud.google.com/security/overview/shared-responsibility](https://cloud.google.com/security/overview/shared-responsibility)) maintain comparable docs. The **Cloud Security Alliance** publishes the *Cloud Controls Matrix (CCM) v4* (2021, current) as the consensus control taxonomy across providers.

### Service models — and the shared responsibility implication

| Model | You manage | Provider manages | Example |
|-------|-----------|------------------|---------|
| **IaaS** | OS, runtime, app, data, network configs | Hypervisor, hardware, facilities | EC2, Azure VM |
| **PaaS** | App + data | Runtime + OS + everything below | App Service, Heroku, Elastic Beanstalk |
| **SaaS** | Data + your IAM config | Everything else | Salesforce, Microsoft 365 |
| **FaaS / Serverless** | Function code + IAM | Even more abstracted than PaaS | AWS Lambda, Azure Functions |

🚨 **The #1 cloud rule:** Even in SaaS, **you are responsible for your data, your access controls, and your configuration.** Cloud provider isn't responsible for misconfigured S3 buckets that you set to public.

### Deployment models
- **Public cloud** — shared infrastructure (AWS, Azure, GCP)
- **Private cloud** — your own dedicated cloud (OpenStack, VMware Cloud Foundation)
- **Hybrid cloud** — mix of on-prem + public cloud, integrated
- **Community cloud** — shared among a community (govt, healthcare)
- **Multi-cloud** — using more than one public provider deliberately

### Cloud security gotchas (Sec+ favorites)

| Risk | Example |
|------|---------|
| **Misconfigured storage** | Public S3 bucket exposing customer data |
| **Overly permissive IAM** | `s3:*` on `*` rather than least privilege |
| **Shadow IT / unauthorized cloud use** | Team spins up its own AWS account |
| **Insecure APIs** | No auth/rate limit on management API |
| **Account hijacking** | Phished cloud root creds |
| **Inadequate logging** | No CloudTrail / no Azure Activity Log |
| **Data sovereignty** | Data ends up in a region with conflicting laws |
| **Insufficient IR planning** | Don't know who handles cloud-side IR (you or provider?) |

### Cloud security tooling

| Tool | What |
|------|------|
| **CASB** (Cloud Access Security Broker) | Sits between users and cloud apps; enforces policy, prevents shadow IT, discovers usage |
| **CSPM** (Cloud Security Posture Mgmt) | Continuously audits cloud configs for drift/misconfig |
| **CWPP** (Cloud Workload Protection) | Runtime protection for VMs/containers |
| **CIEM** (Cloud Infra Entitlements Mgmt) | Inventories + rightsizes IAM permissions |
| **SASE** (Secure Access Service Edge) | Combines SD-WAN + cloud security (FWaaS, SWG, ZTNA, CASB) |
| **SSE** (Security Service Edge) | SASE minus the network/SD-WAN piece |
| **ZTNA** (Zero Trust Network Access) | Replace VPN with identity-aware proxy access |
| **SWG** (Secure Web Gateway) | URL filtering + threat prevention for outbound web |
| **FWaaS** | Firewall delivered as cloud service |

---

## 📦 Container & Serverless Security

### Containers
- **Image security** — scan images for vulns before deploy (Trivy, Snyk, Clair); use minimal base images
- **Runtime security** — Falco, sysdig — detect anomalous container behavior
- **Registry security** — sign images, control who can pull/push
- **Orchestrator** (Kubernetes) — RBAC, network policies, pod security standards, secret management
- **Common pitfalls**: running containers as root, exposed kubelet API, secrets in env vars, image-pulled-from-public

### Serverless
- Less to patch (provider handles runtime), but you still own:
  - Function IAM policies (often too broad)
  - Input validation (functions still process user input)
  - Dependency vulns
  - Logging visibility
- **Cold start data leakage** if function reuses memory

### IaC (Infrastructure as Code)
- Tools: **Terraform**, **CloudFormation**, **ARM/Bicep**, **Pulumi**
- Risks: hardcoded secrets in code, drift from baseline, leaked state files
- Controls: pre-commit secret scanning, IaC linters (Checkov, tfsec), pipeline gates

---

## 🏭 IoT / OT / ICS / SCADA / Embedded

Operational Technology (OT) covers industrial systems. Sec+ wants you to know the categories + their unique risks:

| Term | Means |
|------|-------|
| **IoT** | Internet of Things — consumer connected devices |
| **ICS** | Industrial Control Systems (factories) |
| **SCADA** | Supervisory Control And Data Acquisition (utilities, large geographic systems) |
| **PLC** | Programmable Logic Controller (the actual controller on the factory floor) |
| **HMI** | Human-Machine Interface |
| **DCS** | Distributed Control System |
| **Embedded systems** | Special-purpose computers in devices |
| **RTOS** | Real-Time Operating System |
| **SoC** | System-on-Chip |
| **FPGA** | Field-Programmable Gate Array |

### OT/ICS risks

- **Long lifecycle** — devices in service for 20+ years
- **No / rare patches** — vendor support gone, downtime impossible
- **Legacy / proprietary protocols** — Modbus, DNP3 — designed without security
- **Air-gap myths** — turns out, "air gaps" rarely are
- **Default credentials** — rampant
- **Safety vs Security tradeoff** — locking down a turbine controller too hard can prevent emergency shutdown

### Mitigations for OT
- **Network segmentation** (Purdue Model levels)
- **Compensating controls** (jump servers, deep packet inspection of OT protocols, anomaly baselines)
- **Vendor risk management**
- **Physical security**
- **NO direct internet exposure**

---

## 🔬 Scenario Walkthrough (PBQ-style)

> **Scenario:** A SOC sees an EC2 instance making outbound DNS queries to a known C2 domain. The instance has a public IP, an over-permissive IAM role (S3:*), and CloudTrail logs are NOT enabled in this region.
>
> Identify the controls that failed and what to do FIRST.

**Walkthrough:**

| Failure | Control needed |
|---------|----------------|
| Public IP on a non-public workload | Place behind a private subnet + NAT/ALB |
| `S3:*` role | Least privilege via IAM policy + CIEM |
| No CloudTrail in region | Enable CloudTrail org-wide; multi-region |
| Outbound DNS to C2 | Egress filtering, DNS sinkhole, route through VPC DNS Firewall |
| Detection only after exfil | Add CSPM, GuardDuty/Defender for Cloud, CWPP |

**First action (containment, not eradication):** Isolate the instance — modify its security group to drop egress to all destinations and re-attach a "quarantine" IAM role. *Then* triage. Don't terminate yet — you'll lose forensic state.

PBQ might ask you to drag containment, eradication, and recovery actions into the right order from the IR lifecycle (Module 8).

---

## 📊 Case Study — Capital One AWS Breach (July 2019)

**Situation.** **Capital One Financial** is one of the largest US consumer-credit-card issuers and was an early, public AWS-customer reference — by 2018 Capital One had migrated >70% of its workloads to AWS and shut down legacy data centers. The architecture: a **ModSecurity-based web application firewall** in front of a US-East-region application; behind it, an EC2 instance running on **IAM role permissions that allowed reading S3 buckets** in the same account. Capital One stored credit-application data — names, addresses, DOBs, credit scores, **140,000 SSNs**, **80,000 linked bank-account numbers**, and 1 million Canadian Social Insurance Numbers — in those S3 buckets.

**Decision.** In **March 2019** a former AWS engineer (Paige Thompson, who had left AWS in 2016) discovered the misconfigured ModSecurity WAF. The WAF was configured in a way that, when sent a specially crafted request, would issue **outbound HTTP requests on the attacker's behalf** — a textbook **Server-Side Request Forgery (SSRF)** vulnerability (OWASP A10:2021, covered Module 5). Specifically, the attacker pointed the SSRF at the AWS Instance Metadata Service v1 (**IMDSv1**) endpoint: `http://169.254.169.254/latest/meta-data/iam/security-credentials/<role-name>`. AWS IMDSv1 returned the temporary security credentials for the EC2 instance's IAM role *without any authentication* — that was IMDSv1's design. The attacker then used those credentials to list **700+ S3 buckets** and download **~30 GB** of credit-application data.

**Outcome.** Thompson posted bragging on GitHub Gist and on Slack. A Capital One security researcher (a friend of Thompson's contact) saw the posts and reported it to Capital One on **17 July 2019**. Capital One confirmed the breach within hours, notified the FBI within a day, and patched the SSRF the same week. Public disclosure: **29 July 2019**. **~106 million** Americans and Canadians were affected. Capital One paid **$80M in OCC penalty** (August 2020) and **$190M in a class-action settlement** (December 2021). Internal incident-response cost was estimated at $150M+. Thompson was convicted in 2022 of seven federal counts and sentenced to time served plus probation; the lighter-than-expected sentence triggered intense academic and industry debate about how to charge "researcher-curious" intrusion vs malicious attack. AWS responded by accelerating **IMDSv2** (released November 2019) which requires session-token-based PUT requests (defeating SSRF-style abuse), and in mid-2024 began *defaulting* new instances to IMDSv2-only.

**Lesson for the exam / for practitioners.** This case touches every cloud topic Sec+ tests:
- **Shared responsibility model.** AWS provided IMDSv1 (a service); Capital One **configured it, configured the IAM role with broad S3 access, and configured the WAF that allowed SSRF.** Sec+ tests this exact framing: "A public S3 bucket exposed customer data — who is responsible?" → the customer. "An EC2 instance with an over-permissive IAM role — who is responsible?" → the customer.
- **SSRF (Module 5) + IMDS (Module 7) = cloud-credential theft.** This pattern recurs constantly. The countermeasure is IMDSv2 (network-layer enforcement) **plus** scoped IAM roles **plus** runtime SSRF-prevention (block egress to `169.254.169.254` from anything but the legitimate AWS SDK). Sec+ tests each layer.
- **CSPM would have caught this.** Cloud Security Posture Management tools (Wiz, Orca, Lacework, Prisma Cloud) would have flagged: (a) the S3 buckets accessible to the EC2 instance role; (b) the IAM role's over-broad scope; (c) the WAF being on a public-internet path with outbound metadata-IP access. Sec+ asks: "what tool would have detected this?" → **CSPM** for config drift, **CIEM** for entitlement, **CWPP** for runtime.
- **Logging and detection failure.** Capital One had **CloudTrail** enabled but did not have **alerts** on anomalous IAM activity (one credential, 700 buckets, 30 GB downloaded in hours). Module 8 SIEM/SOAR tuning would have caught the volumetric anomaly.
- **The breach reshaped industry practice.** IMDSv2 is now mandatory by default for new AWS accounts as of 2024; AWS introduced **GuardDuty** anomaly detection and **IAM Access Analyzer** as direct responses; the entire **Cloud Native Application Protection Platform (CNAPP)** product category exists in part because of Capital One.

**Discussion (Socratic).**
- **Q1:** Capital One was a sophisticated AWS-native bank with a security team. The breach happened because of a *configuration* failure, not a missing technology. Argue: is the *organizational* failure (no one inventoried IAM permissions, no anomaly alerts on S3 download volume) more fundamental than the *technical* failure (SSRF in ModSecurity)? Defend one as the "true root cause" with reference to NIST IR process (Module 8).
- **Q2:** AWS designed IMDSv1 in 2008 — pre-SSRF awareness in enterprise IT. The 2019 incident drove IMDSv2. Were AWS's choices *negligent* (they should have foreseen SSRF) or *reasonable for 2008*? Build the case both ways. Reference vendor responsibility doctrine and the FTC's evolving cloud-misconfiguration enforcement.
- **Q3:** Paige Thompson was a former AWS engineer (insider knowledge of IMDSv1 mechanics) but had left 3 years before the attack. Is this best classified as **insider threat** (Module 4 — privileged knowledge) or **external attacker** (no current access)? Defend a position with reference to NIST and FBI threat-actor taxonomy.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Cloud provider is responsible for our S3 bucket settings" | NO — config is YOUR responsibility (shared model) |
| "Serverless removes all attack surface" | Reduces it; you still own IAM + code + deps |
| "MDM = MAM" | MDM manages the whole device; MAM manages just corp apps/data |
| "EDR is just renamed antivirus" | EDR adds behavioral + telemetry + response actions AV doesn't have |
| "Containers run in their own VM" | Containers share host OS kernel; a kernel escape = host compromise |
| "Air-gapped means safe" | USBs, supply chain, insider, and even covert channels still threaten |
| "SaaS = no logging needed" | You still need to ingest tenant logs into your SIEM |
| "BYOD is always cheaper" | TCO often higher due to support + DLP complexity |
| "SIM swap doesn't matter if I have a password" | SIM swap defeats SMS MFA and password resets via SMS |
| "Patching is enough for ICS" | Often can't patch; use compensating controls (segmentation, monitoring) |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **EDR / XDR / MDR** | Endpoint Detection & Response (and Extended / Managed) |
| **HIDS / HIPS** | Host-based IDS / IPS |
| **FIM** | File Integrity Monitoring |
| **Hardening / secure baseline** | Reducing attack surface |
| **CIS Benchmarks / STIGs** | Configuration baselines |
| **BYOD / CYOD / COPE / COBO** | Device ownership models |
| **MDM / MAM / UEM / EMM** | Mobile/endpoint management tools |
| **IaaS / PaaS / SaaS / FaaS** | Cloud service models |
| **Shared responsibility model** | Who owns which security control |
| **CASB / CSPM / CWPP / CIEM / SASE / SSE / ZTNA** | Cloud security tool categories |
| **Container / pod / image / registry / orchestrator** | Container ecosystem |
| **Serverless / FaaS** | No-server cloud compute |
| **IaC** | Infrastructure as Code (Terraform, CloudFormation, Bicep) |
| **IoT / ICS / SCADA / PLC / HMI / RTOS** | OT/embedded vocabulary |
| **Purdue Model** | Reference architecture for OT segmentation |
| **Air gap** | Physical network isolation |

### Acronyms cheat-row (Module 7)
| Acronym | Meaning |
|---------|---------|
| EDR / XDR / MDR | Endpoint Det. Resp. / Extended / Managed |
| EPP | Endpoint Protection Platform |
| MDM / MAM / UEM / EMM | Mobile/endpoint mgmt suite acronyms |
| BYOD / CYOD / COPE / COBO | Device ownership |
| IaaS / PaaS / SaaS / FaaS | Cloud service models |
| CASB / CSPM / CWPP / CIEM | Cloud security tool categories |
| SASE / SSE / ZTNA / SWG / FWaaS | Cloud network security |
| IaC | Infrastructure as Code |
| K8s | Kubernetes |
| RTOS / SoC / FPGA | Embedded systems |
| ICS / SCADA / PLC / HMI / DCS | OT systems |
| OT | Operational Technology |
| HSM / TPM / Secure Enclave | Hardware key storage (covered M2 too) |
| MAM / OEM | App management / device manufacturer |

---

## ✅ Module 7 Summary

You now know:
- 💻 The **endpoint security stack** — AV → EPP → EDR → XDR → MDR — and hardening basics
- 📱 Mobile **device ownership models** (BYOD/CYOD/COPE/COBO) and **MDM/MAM/UEM**
- ☁️ Cloud **shared responsibility** across IaaS/PaaS/SaaS/FaaS and the deployment models
- 🛡️ The **cloud security tool alphabet soup** — CASB, CSPM, CWPP, CIEM, SASE, SSE, ZTNA, SWG, FWaaS
- 📦 **Container** & **serverless** security pitfalls + **IaC** hygiene
- 🏭 **OT/ICS/SCADA** vocabulary and why patching alone doesn't fix industrial systems

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 8 — Security Operations](../Module-08-Security-Operations/Reading.md) (the biggest domain)

> **Where this leads.**
> - Inside this course: [Module 8](../Module-08-Security-Operations/Reading.md) covers SIEM correlation, threat hunting, and IR for the cloud telemetry CSPM/CIEM produce; [Module 9](../Module-09-GRC-Risk-Compliance/Reading.md) covers third-party / SaaS vendor risk; [Module 10](../Module-10-Application-Data-Security/Reading.md) covers SBOM, IaC scanning, and container image signing.
> - Cross-course: AWS courses 03/04/07 are the next step for cloud-native depth. Azure courses 05/06/08 cover the Microsoft equivalents.
> - Practice: Practice Exam 2 has ~12 endpoint/cloud questions; Final Mock has ~13.

---

## 📚 Further Reading (Optional)

**Primary sources / standards:**
- 📄 NIST SP 800-145 (Mell & Grance, 2011). [*The NIST Definition of Cloud Computing*](https://csrc.nist.gov/publications/detail/sp/800-145/final). (The canonical IaaS/PaaS/SaaS/on-demand definitions.)
- 📄 NIST SP 800-82 Rev 3 (2023). [*Guide to Operational Technology Security*](https://csrc.nist.gov/publications/detail/sp/800-82/rev-3/final). (The ICS/SCADA/OT reference.)
- 📄 [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/) (verified 2026-05)
- 📄 [Microsoft Shared Responsibility for Cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) (verified 2026-05)
- 📄 [GCP Shared Responsibility Matrix](https://cloud.google.com/security/overview/shared-responsibility) (verified 2026-05)
- 📄 Cloud Security Alliance (2021). [*Cloud Controls Matrix v4*](https://cloudsecurityalliance.org/research/cloud-controls-matrix/).

**Case-study sources (Capital One):**
- 📄 US v. Paige A. Thompson, 2:19-cr-00159 (W.D. Wash.). Indictment + plea.
- 📄 OCC consent order (August 2020) — $80M penalty.
- 📄 Krebs, B. (2019). "What We Can Learn from the Capital One Hack." [Krebs on Security](https://krebsonsecurity.com/2019/08/what-we-can-learn-from-the-capital-one-hack/), 2 August 2019.
- 📄 AWS (2019-2020). Multiple blog posts on IMDSv2 design and rollout.

**Practitioner:**
- 📖 [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) — platform hardening guides
- 📖 [OWASP Container Security Verification Standard](https://owasp.org/www-project-container-security-verification-standard/)
- 📖 [Cloud Security Alliance — CCSK / CCM](https://cloudsecurityalliance.org/)
- 📖 [HardenedBSD / DISA STIGs](https://public.cyber.mil/stigs/) — DoD-grade hardening
