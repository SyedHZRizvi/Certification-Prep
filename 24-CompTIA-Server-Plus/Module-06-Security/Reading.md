# Module 6: Server Security & Hardening 🔒

> **Why this module matters:** Security and DR together carry ~24% of SK0-005. Module 5 covered DR; this one covers the *prevention* side. You'll learn the **physical** controls that keep someone from walking out with a server, the **firmware** controls (Secure Boot, UEFI passwords) that keep the boot path trustworthy, the **access** controls (RBAC (Role-Based Access Control), service accounts with least privilege) that keep credentials small and revocable, and the **operational** controls (patch management, CIS baselines, HIDS/HIPS) that keep the running system honest.

> **Prerequisites for this module.** Before starting:
> - Modules 1–5 (especially OOB management from Module 1 and admin from Module 2)
> - Basic IP/firewall concept exposure
> - Recommended: complete or skim the **CompTIA Security+** Module 1 (Security Fundamentals) for shared vocabulary
>
> If those are shaky, pause and review before continuing.

---

## 🏛️ A Story: The After-Hours Cleaner

Meet Maya. She runs IT for a 90-person law firm in a 12-story office building. The firm shares the floor with two other tenants. The server room is a converted broom closet with a *Yale deadbolt that the cleaner has a key to*.

At 11:14 p.m. on a Thursday the cleaning company sends a substitute. The substitute is not a substitute. He enters the server room, unscrews two physical drives from the 2U server, walks out. Backups are intact, but the firm's *primary copy* of every client document is gone, in someone's tote bag. Insurance pays the cleaner's company $0; the breach-notification cost and bar-association investigation cost the firm $830,000 and three partners' bonuses.

The story has a different ending in a world where Maya did the things in this module:

- **Mantrap / access control vestibule** (or at least a biometric door and badge reader) on the server room, cleaner doesn't even reach the rack
- **Locked rack with caged bays**, drives don't come out with a screwdriver
- **Secure Boot + BIOS password + Self-Encrypting Drives (SED) with BitLocker**, even if the drives are stolen, the data is unreadable
- **24×7 motion sensors + intrusion alarm** integrated with the BMS, the cleaner is logged before he reaches the rack
- **Vendor management on the cleaning contract**, background checks, named individuals, badge issued

This is what server security looks like. It is not "install antivirus." It is *layered*: physical, firmware, OS, access, operations, monitoring.

---

## 🏢 Physical Security, The Foundation

Sec+/Server+ ask about physical security constantly. The 4 axes you must know:

| Control | Examples | Purpose |
|---|---|---|
| **Perimeter** | Fences, bollards, security guards, lighting, signage | Deter + delay |
| **Building** | Access badges, mantrap / access control vestibule, biometric scanners, security cameras (recording, monitored), visitor logbook | Authenticate physical access |
| **Server room** | Caged racks, locked cabinets, motion sensors, environmental sensors, fire suppression (FM-200/Novec/inergen, not water) | Protect the racks |
| **Component** | Tamper-evident seals, chassis intrusion sensors (BMC alert), Kensington locks on laptops/desktops in lobbies | Protect individual hardware |

### Specific terms the exam loves

- **Mantrap / access control vestibule**, two-door entry; second door opens only after first closes. Defeats tailgating.
- **Bollard**, short post that prevents vehicle ramming.
- **Faraday cage**, RF-shielded enclosure (used for high-security comms or to prevent emanations).
- **CCTV (recording vs monitored)**, recording = detective; visible = deterrent; monitored = preventive (because someone can respond live).
- **Badge readers**, proximity (RFID (Radio Frequency Identification)), smart card, biometric (fingerprint, iris).
- **Cipher locks / mechanical PIN pads**, common on server-room secondary doors.
- **HSM (Hardware Security Module)**, tamper-resistant device for cryptographic keys; often in its own physical enclosure with seismic + intrusion sensors.

🎯 **Exam pattern:** *"Prevent tailgating into the data hall."* → **Mantrap / access control vestibule**.

🚨 **Trap on the exam:** Water-based sprinklers in a server room are an *anti-pattern*. Use clean-agent gas suppression (FM-200, Novec 1230, NOVEC, or inergen). Pre-action dry-pipe sprinklers as a second-stage backup are acceptable in some codes; never wet-pipe overhead.

---

## 🚪 Firmware Security, UEFI, Secure Boot, TPM

Modern servers boot via **UEFI** (Unified Extensible Firmware Interface), the successor to legacy **BIOS**. UEFI provides:

| Feature | What it does |
|---|---|
| **UEFI / BIOS password** | Prevents unauthorized firmware setup changes (boot order, Secure Boot toggle, virtualization features) |
| **Secure Boot** | Firmware verifies that the bootloader's digital signature chains to a trusted key in the firmware's key store. Blocks bootkits, unsigned/modified bootloaders. |
| **Measured Boot** | Hashes each stage of the boot chain into TPM PCRs; remote attestation servers can verify the host's boot state |
| **TPM** (Trusted Platform Module) | Discrete chip (TPM 2.0) or firmware (fTPM) that stores keys + measurement hashes; used by BitLocker, Windows Hello, attestation |
| **Self-Encrypting Drives (SED)** | Hardware-encrypted SATA/SAS/NVMe drives; key managed by drive controller + ATA password + BitLocker / sedutil |
| **Pre-boot authentication** | BitLocker with PIN/USB key, drive cannot decrypt until user authenticates pre-OS |

### Why UEFI password + Secure Boot together

- UEFI password alone, keeps an attacker from disabling Secure Boot or changing boot order. But if Secure Boot is off, signed-only doesn't matter.
- Secure Boot alone, without a UEFI password, attacker disables Secure Boot in 10 seconds.
- **Together**, attacker can't change firmware settings AND only signed bootloaders run.

🚨 **Trap on the exam:** Vendor firmware (iDRAC, iLO) ships with default credentials that are publicly documented. **Change the default password during commissioning**, and segment the OOB management network.

🎯 **Exam pattern:** *"Server is stolen; drives are taken out and read on another system. How was the data protected?"* → **Self-Encrypting Drives + BitLocker with TPM** mean the keys are tied to the original server.

---

## 🗝️ Identity, Roles, and Access, RBAC and Least Privilege

### Principle of Least Privilege (PoLP)

Each account gets *exactly* the rights needed for its job, no more. Coined formally by Saltzer & Schroeder ("The Protection of Information in Computer Systems," CACM 1975) as one of eight design principles. The exam asks PoLP questions in *every* security context.

### RBAC, Role-Based Access Control

| Concept | Example |
|---|---|
| **Role** | "DB Admin", "Help Desk", "Network Admin" |
| **Permission** | "Can restart MySQL on srv01" |
| **Role assignment** | Alice ∈ DB Admin |
| **Permission mapping** | DB Admin → can restart MySQL |
| **Effective access** | Alice can restart MySQL because she's a DB Admin |

Beats per-user ACLs at scale. Easy to audit ("show me everyone in DB Admin").

### Related models (compare)

| Model | Stands for | One-liner |
|---|---|---|
| **DAC** (Discretionary AC) | Owner sets permissions | Linux file modes, Windows NTFS ACLs |
| **MAC** (Mandatory AC) | System enforces by labels (clearance) | Military / classified systems; Bell-LaPadula |
| **RBAC** | By role | Most enterprise apps |
| **ABAC (Attribute-Based Access Control)** (Attribute-Based AC) | Policy evaluates attributes (user dept, time, device posture, location) | Cloud / dynamic policy (XACML, AWS (Amazon Web Services) IAM (Identity and Access Management) policies) |

🎯 **Exam pattern:** *"Manage access for 5,000 users across 30 applications."* → **RBAC** (or ABAC if attributes drive decisions).

### Service accounts and managed identities

Services (DBs, web apps, agents, scripts) run as accounts. Best practice:

| Practice | Why |
|---|---|
| **One service account per service** | Compromise of one doesn't pivot to others |
| **Least privilege per service account** | Only what the service strictly needs |
| **Long random passwords / managed credentials** | Stop password reuse, prevent brute force |
| **No interactive logon** | Service account shouldn't log on at desktop |
| **No shared between services** | Same blast-radius argument |
| **Group Managed Service Accounts (gMSAs) on Windows** | Auto-rotated by AD (Active Directory), no admin password to know |
| **Cloud: managed identities** (Azure MI, AWS instance roles, GCP (Google Cloud Platform) service accounts) | No long-lived credentials |
| **Vault for secrets** | HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, CyberArk |

🚨 **Trap on the exam:** A "service" account used for interactive logons (admins SSHing in as the service account) is a common audit finding. Lock it down.

### Privileged Access Management (PAM)

PAM tools (BeyondTrust, CyberArk, Delinea, AWS Session Manager, Azure PIM (Product Information Management)) provide:

- **Just-in-time (JIT (Just-In-Time)) elevation**, admin requests rights, approval workflow, time-boxed grant
- **Session recording**, full keystroke / screen capture for privileged sessions
- **Credential vaulting**, admins never see the actual password
- **MFA (Multi-Factor Authentication) on elevation**, extra factor required to invoke privilege
- **Automatic rotation**, passwords rotate after each use

🎯 **Exam pattern:** *"Eliminate standing privileged access while still enabling admins to do their jobs."* → **JIT via PAM**.

---

## 🩹 Patch Management

Unpatched systems are how most organizations are breached. Equifax (EternalBlue / MS17-010 patch ignored), SolarWinds (vendor supply chain), Log4Shell (Log4j), all *patch hygiene* failures at scale.

### The patch lifecycle

1. **Inventory**, know every system (CMDB; Module 2/8). You cannot patch what you don't know exists.
2. **Subscribe to vendor advisories**, Microsoft Patch Tuesday, Red Hat Security Advisories (RHSA), Ubuntu USN, CISA KEV (Known Exploited Vulnerabilities) catalog.
3. **Classify**, critical / high / medium / low. KEV = always urgent.
4. **Test**, staging environment matching production.
5. **Schedule maintenance window**, coordinate with business; backout plan ready.
6. **Deploy**, phased rollout (canary → broader → full).
7. **Verify**, services running, no regressions, vulnerability scan confirms patch applied.
8. **Document**, CMDB updated, change ticket closed.

### Tools

| Tool | Scope |
|---|---|
| **WSUS** | Windows updates centrally distributed |
| **Microsoft Endpoint Configuration Manager (MECM, formerly SCCM)** | Windows + 3rd-party patching |
| **Microsoft Intune** | Cloud-managed patching |
| **Red Hat Satellite / Foreman** | RHEL patching |
| **Spacewalk / Pulp / Katello** | Open-source RPM management |
| **Ansible / Puppet / Chef / Salt** | Cross-platform config + patching |
| **Tanium / BigFix / Qualys / Tenable / Rapid7** | Enterprise patch + vulnerability management |

### Vulnerability vs patch management (related but distinct)

- **Vulnerability scanning** finds the holes (Nessus, Qualys, Rapid7, OpenVAS).
- **Patch management** fixes them.
- Together they form the **vuln management lifecycle**: detect → prioritize → remediate → verify.

🎯 **Exam pattern:** *"How do you ensure all production servers have patches installed within 30 days?"* → **Centralized patch management (WSUS/MECM/Satellite) + vulnerability scanning to verify**.

---

## 📏 Security Baselines, CIS, DISA STIGs, Vendor Guides

A **security baseline** is a documented, agreed-upon configuration that meets a defined security posture.

| Source | What |
|---|---|
| **CIS Benchmarks** | Center for Internet Security, step-by-step hardening recommendations for OSes, browsers, cloud services. Free PDFs; CIS-CAT scanner audits. Most-cited industry baseline. |
| **DISA STIGs** (Security Technical Implementation Guides) | US DoD-mandated hardening guides; required for federal/defense systems |
| **Vendor security guides** | Microsoft Security Compliance Toolkit, Red Hat hardening guides |
| **Microsoft Security Baselines** | Microsoft's official Group Policy templates |

### CIS Benchmark structure

Each benchmark covers an OS/app, organized as:

- **Level 1**, basic hardening; most enterprises can apply
- **Level 2**, defense-in-depth; may break some functionality (acceptable in higher-security envs)
- **Scored items** (auditable) and **not-scored items** (advisory)

🎯 **Exam pattern:** *"Establish a hardened configuration for all Linux servers."* → **Apply the CIS Benchmark for the relevant distro** (RHEL 9, Ubuntu 22.04, etc.), Level 1 + selected Level 2.

---

## 🛡️ HIDS / HIPS / EDR (Endpoint Detection and Response)

| Tool | What |
|---|---|
| **HIDS** (Host Intrusion Detection System) | Monitors a host; alerts on suspicious activity (file changes, registry changes, anomalous processes). Detects only. |
| **HIPS** (Host Intrusion Prevention System) | Same engine class, but can also *block* (kill process, block network connection). |
| **EDR** (Endpoint Detection & Response) | Modern evolution, behavioral analytics, threat intel feed, IR investigation tooling, often cloud-managed (CrowdStrike Falcon, Microsoft Defender for Endpoint, SentinelOne, Carbon Black) |
| **AV** (traditional Antivirus) | Signature-based malware detection. Largely subsumed by EDR. |
| **FIM** (File Integrity Monitoring) | Tripwire/AIDE/OSSEC; detects unauthorized file changes (compliance use, e.g., PCI-DSS req 11.5) |

🎯 **Exam pattern:** *"Detect AND block malicious behavior on a server."* → **HIPS** (or modern **EDR**).

### Network-side counterparts (covered more in Sec+ / Network+)

- **NIDS / NIPS**, Network-side IDS/IPS at network choke points
- **WAF (Web Application Firewall)**, Web Application Firewall for HTTP (Hypertext Transfer Protocol)/HTTPS (HTTP Secure)
- **Firewall**, host firewall (Windows Defender Firewall, firewalld, iptables, pf) + perimeter firewalls

---

## 🔐 Hardening Specifics

A consolidated checklist of what "hardening" actually means in practice on a production server:

### Hardening checklist (cross-platform)

- ✅ Apply CIS/STIG baseline
- ✅ Remove unused roles/features/packages (smaller attack surface)
- ✅ Disable unused services + close unused ports
- ✅ Disable SMB 1.0 (Windows); disable Telnet, FTP (File Transfer Protocol) (use SFTP/FTPS), unencrypted protocols
- ✅ Enforce password policy (length, complexity, history, lockout)
- ✅ Enforce MFA for admin accounts and remote access
- ✅ Disable default accounts (or rename + strong password)
- ✅ Patch within defined SLA (Service Level Agreement) (e.g., critical < 7 days, high < 30 days)
- ✅ Enable host firewall + drop default-deny rule for ingress
- ✅ Encrypt data at rest (BitLocker on Windows, LUKS on Linux, SED drives)
- ✅ Encrypt data in transit (TLS (Transport Layer Security) 1.2/1.3 minimum, SSH (Secure Shell) key auth)
- ✅ Enable detailed audit logging; ship to SIEM (Security Information and Event Management)
- ✅ Install EDR/HIPS + FIM
- ✅ Configure NTP from authoritative source
- ✅ Set UEFI password + Secure Boot + TPM-backed encryption
- ✅ Document configuration in CMDB + runbook
- ✅ Periodically scan with vulnerability scanner + benchmark scanner (CIS-CAT)

### Windows-specific

- ✅ Server Core where possible
- ✅ AppLocker / WDAC application control
- ✅ Group Managed Service Accounts (gMSAs)
- ✅ Tiered Administration (Tier 0 / Tier 1 / Tier 2)
- ✅ Credential Guard (LSA isolation against Pass-the-Hash / Mimikatz)
- ✅ LAPS (Local Administrator Password Solution) for unique per-machine local admin passwords
- ✅ Disable LLMNR / NBT-NS to defeat Responder-style poisoning

### Linux-specific

- ✅ SELinux / AppArmor in enforcing mode (not permissive, not disabled)
- ✅ No password root login over SSH (`PermitRootLogin no`)
- ✅ SSH keys only (`PasswordAuthentication no`)
- ✅ sudo with command restrictions per user
- ✅ Audit SUID/SGID binaries (`find / -perm -4000`)
- ✅ Disable USB autoload, IPv6 if not needed, kernel modules not needed
- ✅ Filesystem mount options (`noexec`, `nosuid`, `nodev` on /tmp, /var/tmp, /home)
- ✅ Auditd configured per CIS

---

## 🧪 Vulnerability Management Cadence

A mature program:

| Cadence | Activity |
|---|---|
| **Continuous** | Asset discovery, automated patch deployment for non-disruptive updates, EDR/SIEM monitoring |
| **Daily** | Review high-severity alerts; CISA KEV check |
| **Weekly** | Vulnerability scan of all production; review WSUS/MECM approvals |
| **Monthly** | Patch Tuesday rollout; CIS-CAT benchmark scan |
| **Quarterly** | Pen test of internet-facing systems; tabletop exercise |
| **Annually** | Full penetration test (internal + external); DR drill; compliance audit |

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario.** Maya's law firm (from the opening story) has rebuilt after the theft. They now have a 5-year contract. Design the hardening posture: physical, firmware, identity, patch, and monitoring controls. Budget is moderate.

**Walkthrough.**

1. **Physical.** Server room behind a **badge-reader + biometric door**; access control vestibule (mantrap) for the data hall corridor. **Caged racks** with key + combination lock. **CCTV** monitored + recorded with 30-day retention. **Motion sensors** wired into the alarm system. **Visitor log** for any non-employee.
2. **Firmware.** Every server: **UEFI password** + **Secure Boot** + **TPM 2.0** + **Self-Encrypting Drives**. **BitLocker** (Windows) / **LUKS** (Linux) with TPM-bound keys. **BMC/iDRAC/iLO** on a **separate management VLAN (Virtual Local Area Network)**, default credentials changed, MFA on the management portal.
3. **Identity.** **RBAC** roles for each function (DB Admin, App Admin, Help Desk). **gMSAs** for Windows services; **systemd dynamic users** + Vault-issued tokens for Linux services. **PAM (BeyondTrust)** for JIT elevation with MFA. **Tiered Administration**, Tier 0 (DCs) accounts never log on to Tier 1/2 hosts.
4. **Patch.** **WSUS + MECM** for Windows. **Red Hat Satellite** for RHEL. SLA: **critical < 7 days, high < 30 days, medium < 90 days**. Monthly vulnerability scan with **Tenable Nessus**.
5. **Baseline.** Apply **CIS Benchmark Level 1** to every host, with selected Level 2 controls. Audited monthly with **CIS-CAT**.
6. **Detection / Prevention.** **CrowdStrike Falcon** EDR on every server. **OSSEC** FIM on critical files (`/etc`, `/bin`, `/usr/bin`, `C:\Windows\System32`). **Auditd** + **Windows Event Forwarding** shipping to **Microsoft Sentinel** (SIEM).
7. **Backups.** Per Module 5, 3-2-1-1-0 with immutability.
8. **Network.** Host firewall **default-deny ingress**, **default-allow egress with logging**. SMB 1 disabled. Telnet disabled. SSH key-only. RDP only via RD Gateway with MFA.
9. **People + process.** Annual security training, phishing simulations, documented IR runbook, quarterly tabletop.

This is the kind of integration question Server+ PBQs ask. Every control maps to a concept in this module.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---|---|
| "Antivirus is enough." | AV is necessary but not sufficient. EDR + HIPS + FIM + patch + baselines = real defense. |
| "Default vendor credentials are 'temporary', we'll change them later." | They become permanent. iDRAC / iLO default creds are top breach vectors. Change at commissioning. |
| "The server room door is locked, so we're safe." | Defense in depth: door + caged rack + tamper sensors + camera. Single layer = single failure. |
| "RBAC is the same as DAC." | RBAC = roles; DAC = owner discretion. Different models. |
| "Service accounts can share if convenient." | One compromise → all services compromised. Never share. |
| "Patches break things, so we don't apply them." | Unpatched systems are the #1 breach vector. The answer is *test* and *staged rollout*, not *skip*. |
| "CIS benchmarks are optional." | They're an industry standard, frequently required by SOC (Security Operations Center) 2 / PCI-DSS / ISO 27001 audits. |
| "Secure Boot only matters on Windows." | Linux distros (RHEL, Ubuntu, SUSE) all support Secure Boot now. Use it. |
| "Disabling logging removes attack evidence." | And makes incident response impossible. Audit logs are non-negotiable; ship them to SIEM. |
| "JIT is too slow for admins to do their jobs." | Modern PAM tools provision in seconds. Speed isn't the bottleneck; culture is. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Mantrap / access control vestibule** | Two-door entry; defeats tailgating |
| **Bollard** | Anti-vehicle barrier |
| **HSM** | Hardware Security Module, tamper-resistant key vault |
| **UEFI / BIOS password** | Firmware setup gate |
| **Secure Boot** | Signed-bootloader enforcement |
| **Measured Boot** | Hash chain stored in TPM PCRs |
| **TPM 2.0** | Trusted Platform Module, key + measurement chip |
| **SED** | Self-Encrypting Drive |
| **BitLocker / LUKS** | Disk encryption (Windows / Linux) |
| **Least privilege (PoLP)** | Minimum necessary rights |
| **RBAC / ABAC / DAC / MAC** | Access control models |
| **Service account** | Non-human account a service runs as |
| **gMSA** | Group Managed Service Account (Windows; auto-rotated) |
| **PAM** | Privileged Access Management |
| **JIT** | Just-in-Time elevation |
| **MFA** | Multi-Factor Authentication |
| **WSUS / MECM / Satellite** | Patch management tools |
| **CIS Benchmark / DISA STIG** | Security baselines |
| **HIDS / HIPS / EDR / FIM** | Host-side detection/prevention/integrity tools |
| **LAPS** | Local Administrator Password Solution (Windows) |
| **Credential Guard** | Windows LSA isolation against Mimikatz |
| **Tiered Administration** | Tier 0 / 1 / 2 segregation |
| **SELinux / AppArmor** | Linux MAC frameworks |

### Acronyms cheat-row (Module 6)
| Acronym | Meaning |
|---|---|
| RBAC / ABAC / DAC / MAC | Role / Attribute / Discretionary / Mandatory Access Control |
| PAM | Privileged Access Management |
| JIT | Just-in-Time |
| MFA | Multi-Factor Authentication |
| HIDS / HIPS | Host Intrusion Detection / Prevention System |
| EDR / XDR (Extended Detection and Response) | Endpoint Detection & Response / Extended DR |
| FIM | File Integrity Monitoring |
| TPM | Trusted Platform Module |
| SED | Self-Encrypting Drive |
| HSM | Hardware Security Module |
| UEFI | Unified Extensible Firmware Interface |
| CIS | Center for Internet Security |
| STIG | Security Technical Implementation Guide |
| LAPS | Local Administrator Password Solution |
| gMSA | Group Managed Service Account |
| WSUS / MECM | Windows Server Update Services / Microsoft Endpoint Configuration Manager |
| KEV | Known Exploited Vulnerabilities (CISA catalog) |
| RHSA / USN | Red Hat / Ubuntu Security Notice |

---

## 📊 Case Study, Target's 2013 HVAC Breach

**Situation.** In late 2013, Target's network was breached by attackers who initially gained access via stolen credentials from **Fazio Mechanical Services**, a third-party HVAC vendor with remote network access for billing and project management. The HVAC vendor's user account had access to Target's vendor portal; once inside, attackers pivoted through the corporate network to reach the Point-of-Sale environment, deployed memory-scraping malware ("Kaptoxa"), and exfiltrated **40 million payment cards + 70 million customer records** during the 2013 holiday shopping season (Krebs on Security, December 2013 to January 2014; US Senate Commerce Committee Majority Staff Report, *A "Kill Chain" Analysis of the 2013 Target Data Breach*, 26 March 2014).

**Outcome.** $292M total cost (Target 10-K filings 2014–2017): $202M in legal/settlement costs, $90M in incident response. CIO + CEO (Chief Executive Officer) both resigned. Brought third-party risk management into board-level discussions across the Fortune 500.

**Lesson for the exam / for practitioners.**

- **Least privilege for service accounts and vendors.** The HVAC vendor needed access to vendor billing, NOT to a network reachable from POS. **Network segmentation** + **role scoping** were absent.
- **Vendor-issued credentials need MFA and monitoring.** A simple username/password for a vendor portal is not enough.
- **Lateral movement is the killer.** Initial compromise is often unremarkable; the *pivot from foothold to crown jewels* is where damage scales. **Microsegmentation** (covered in Sec+) is the mitigating architecture.
- **PCI-DSS network segmentation requirements exist for exactly this scenario.** Target was found to be technically PCI-compliant before the breach (passed audits). Compliance ≠ security.
- **EDR and SIEM matter more than logs.** Target had **FireEye alerts** that fired on the malware install, but the alerts were ignored or not escalated. Tools without operational discipline = no defense.

This is the scenario Server+ tests when asking "how do you limit blast radius of a credential compromise." The answer is **least privilege + segmentation + EDR + actually-monitored SIEM**.

**Discussion (Socratic).**
- **Q1:** A new HVAC vendor needs limited network access for billing integration. List three controls you'd impose, ranked by cost.
- **Q2:** Target's FireEye alerts were valid but ignored. What organizational and tooling changes would you make to prevent that?
- **Q3:** Compliance ≠ security. Argue both sides of "we'll just align with PCI-DSS and be safe enough."

---

## ✅ Module 6 Summary

You now know:

- 🏛️ **Physical controls** perimeter, building, server room, component and the specific terms (mantrap, bollard, HSM, CCTV roles)
- 🚪 **Firmware security**, UEFI password, Secure Boot, Measured Boot, TPM 2.0, SED, BitLocker/LUKS
- 🗝️ **Identity & access**, least privilege, RBAC vs DAC/MAC/ABAC, service accounts, gMSAs, PAM, JIT, MFA
- 🩹 **Patch management** lifecycle and tools (WSUS, MECM, Satellite, Ansible, Tanium)
- 📏 **Security baselines** CIS Benchmarks, DISA STIGs, vendor guides and the L1/L2 distinction
- 🛡️ **Detection / prevention**, HIDS, HIPS, EDR, FIM, antivirus
- 🔐 A consolidated **hardening checklist** (cross-platform + Windows-specific + Linux-specific)
- 🧪 A **vulnerability management cadence** from continuous to annual

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 21/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 7, Networking for Servers](../Module-07-Networking/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 7](../Module-07-Networking/Reading.md) covers network controls (firewalls, VLAN, load balancers) that complement these host controls; [Module 8](../Module-08-Troubleshooting/Reading.md) diagnoses security-relevant failures like locked accounts and broken Kerberos.
> - Cross-course: **CompTIA Security+ (SY0-701)** is the natural depth follow-on, entire course on this material. **AWS / Azure** courses map these patterns to cloud-native equivalents (IAM, KMS, GuardDuty, Defender for Cloud).
> - Practice: Practice Exam 2 has ~10 questions from this module; the Final Mock has ~14.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Saltzer, J. H., & Schroeder, M. D. (1975). "The Protection of Information in Computer Systems." *Proceedings of the IEEE*, 63(9). (The least-privilege paper.)
- 📄 NIST SP 800-53 Rev 5 (2020, updated 2023). *Security and Privacy Controls for Information Systems.* (Giant control catalog.)
- 📄 NIST SP 800-123 (2008). *Guide to General Server Security.* (Server-specific.)
- 📄 NIST SP 800-128 (2011). *Guide for Security-Focused Configuration Management.*
- 📄 CIS Benchmarks `cisecurity.org/cis-benchmarks` free PDFs after registration
- 📄 DISA STIGs, `public.cyber.mil/stigs/`
- 📄 CISA KEV catalog, `cisa.gov/known-exploited-vulnerabilities-catalog`

**Case-study sources:**
- 📄 Krebs on Security, Target breach coverage (December 2013–January 2014)
- 📄 US Senate Commerce Committee Majority Staff (2014). *A "Kill Chain" Analysis of the 2013 Target Data Breach.* 26 March 2014.

**Practitioner / exam:**
- 📖 *CompTIA Server+ SK0-005 Exam Objectives* (free PDF)
- 📖 [Professor Messer SK0-005 videos](https://www.professormesser.com/server-plus/sk0-005/sk0-005-video-training-course/)
- 📖 *Network Security Monitoring* (Richard Bejtlich), Tao of NSM
- 📖 *The Practice of Network Security Monitoring* (Bejtlich, 2013, No Starch)
