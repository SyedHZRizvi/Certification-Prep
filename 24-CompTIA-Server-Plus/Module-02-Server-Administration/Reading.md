# Module 2: Server Administration (Windows & Linux) 🪟🐧

> **Why this module matters:** Server administration is the largest single domain on SK0-005 (~30%, alongside virtualization and networking). The exam will not let you specialize in just Windows or just Linux — you must be conversational in both. This module gives you the vocabulary and the muscle memory for the common admin tasks both platforms ask you to perform.

> **Prerequisites for this module.** Before starting you should be comfortable with:
> - Module 1 (server hardware)
> - General command-line literacy (you've used a shell before)
> - Basic IP networking (DNS, DHCP, ports, routing)
>
> If those are shaky, pause and review before continuing.

---

## 🍞 A Story: Two Sysadmins, Two OSes, One Outage

Meet Priya and Jordan. They've co-administered the regional credit union from Module 1's reading for two years. Priya runs the Windows side — Active Directory, DNS, DHCP, file shares, the SharePoint intranet. Jordan runs Linux — the public-facing web servers, the database, the in-house ticketing system, the Jenkins build farm.

At 7:43 a.m. on a Wednesday a critical security patch for the Linux kernel is announced. Jordan starts patching production from his laptop while drinking coffee. At 7:44 a.m. the SharePoint intranet goes offline for everyone — *but only for Windows clients*. Linux users on the wiki are fine.

The cause turns out to be a single config drift: a Linux NTP server (Jordan's) had jumped to a different upstream pool last week and was drifting +3 minutes ahead. Priya's Windows domain controllers, which had been peering to that NTP server via the Domain Time Hierarchy, drifted with it. Once the drift exceeded 5 minutes, **Kerberos** authentication broke on every Windows client — and SharePoint uses Kerberos.

The fix took 4 minutes once they understood it (point both worlds back to `time.cloudflare.com`). The *understanding* took 90 minutes — because Priya had never `systemctl status chrony`'d a Linux box, and Jordan had never run `w32tm /query /status` on Windows.

This module is the antidote. You'll learn:
- The Windows Server **roles** and **features** vocabulary
- The Linux **systemd**, **package manager**, and **daemon** vocabulary
- How to **remote-administer** both worlds: RDP, SSH, WinRM, PowerShell remoting
- The shared concepts: time sync, DNS, DHCP, user/group management, permissions

---

## 🪟 Windows Server — Roles and Features

Microsoft has shipped Windows Server roughly every 2–3 years since NT 3.1 (1993). Currently SK0-005 era candidates encounter **Windows Server 2016 / 2019 / 2022** in the wild and increasingly **Windows Server 2025**. The exam tests concepts that have been stable across all four.

### Roles you must know

A "role" is a major function. You add roles via **Server Manager** (GUI) or **Install-WindowsFeature** (PowerShell).

| Role | What it does | Default ports |
|---|---|---|
| **AD DS** (Active Directory Domain Services) | Directory of users, computers, groups; the identity backbone | LDAP 389, LDAPS 636, GC 3268/3269, Kerberos 88, SMB 445 |
| **AD CS** (Certificate Services) | Internal PKI / enterprise CA | HTTP/HTTPS 80/443 for enrollment |
| **AD FS** (Federation Services) | SAML/WS-Fed identity federation to external apps | HTTPS 443 |
| **DNS Server** | Name resolution for AD and clients | UDP/TCP 53 |
| **DHCP Server** | IP address leasing | UDP 67/68 |
| **File Services** (incl. SMB, DFS, FSRM) | File shares, distributed namespaces, quotas | SMB 445 |
| **Print Services** | Network printing, drivers, queues | LPR 515, IPP 631, RPC ephemeral |
| **IIS** (Web Server) | HTTP/HTTPS hosting, FTP, ASP.NET | 80/443 |
| **Hyper-V** | Type-1 hypervisor for VMs | (see Module 4) |
| **Remote Desktop Services** (RDS) | RDP session hosts, gateway, broker | 3389 (and 443 for RD Gateway) |
| **Windows Deployment Services** (WDS) | Network OS deployment (PXE) | 67/68/4011 |
| **WSUS** | Patch management server for Windows clients | 8530/8531 |
| **Failover Clustering** | High-availability clustering for SQL, file, Hyper-V | varies |

🎯 **Exam pattern:** *"You need name resolution for an internal AD forest."* → DNS Server **role**, not a feature.

### Features

A "feature" supports roles or apps. Examples:

- **.NET Framework 3.5 / 4.x / 4.8** — runtime
- **BitLocker Drive Encryption** — disk encryption
- **PowerShell ISE** — scripting environment
- **Remote Server Administration Tools (RSAT)** — manage AD/DNS/DHCP from another machine
- **Hyper-V Module for Windows PowerShell** — cmdlets to manage Hyper-V
- **Telnet Client** — testing only; never as a server
- **SMB 1.0/CIFS support** — disable in modern deployments (WannaCry, EternalBlue exploited SMB1)

### Installing a role with PowerShell

```powershell
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools
Install-ADDSForest -DomainName corp.local -InstallDNS
Install-WindowsFeature -Name DHCP -IncludeManagementTools
```

### Server Core vs Desktop Experience

| Variant | UI | Best for |
|---|---|---|
| **Desktop Experience** | Full GUI | Familiarity, complex GUI apps |
| **Server Core** | No GUI, only CLI + sconfig + remote tools | Smaller attack surface, less patching, less RAM/disk |
| **Nano Server** (legacy, mostly containers now) | Container-only image | Containers/microservices |

🎯 **Exam tip:** Server Core is **preferred for production** — smaller attack surface, fewer patches per month, lower resource use. Manage it remotely via RSAT, PowerShell remoting, or Windows Admin Center.

---

## 🐧 Linux Server — systemd, Daemons, Distributions

Linux servers come in two main families on the exam:

| Family | Examples | Package manager | Service manager |
|---|---|---|---|
| **Red Hat** | RHEL, CentOS Stream, Rocky, AlmaLinux, Oracle Linux, Fedora | `dnf` (was `yum`) over **RPM** | **systemd** |
| **Debian** | Debian, Ubuntu Server | `apt` over **.deb** | **systemd** |
| **SUSE** | SLES, openSUSE | `zypper` over RPM | **systemd** |

Both major families have used **systemd** as PID 1 since ~2014–2015 (RHEL 7 in 2014, Ubuntu 15.04). Older SysVinit and Upstart appear only on legacy systems.

### systemd 101

systemd is the init system + service manager + logging system + a lot more. You'll be tested on the basics.

| Command | What it does |
|---|---|
| `systemctl start <unit>` | Start a service |
| `systemctl stop <unit>` | Stop a service |
| `systemctl restart <unit>` | Restart |
| `systemctl reload <unit>` | Reload config without restart (if supported) |
| `systemctl enable <unit>` | Enable at boot |
| `systemctl disable <unit>` | Disable at boot |
| `systemctl status <unit>` | Show status + recent log lines |
| `systemctl list-units --type=service` | List loaded service units |
| `systemctl list-unit-files --type=service` | List all service unit files + enabled state |
| `journalctl -u <unit>` | Show logs for a specific unit |
| `journalctl -xe` | Latest log + context for failed units |

**Unit file locations:**
- `/etc/systemd/system/` — administrator-defined (overrides distro defaults)
- `/lib/systemd/system/` or `/usr/lib/systemd/system/` — package-provided

### Common daemons on the exam

| Daemon | Service unit | Port(s) | Purpose |
|---|---|---|---|
| **sshd** | `sshd` (RHEL/Debian) | TCP 22 | SSH server |
| **chronyd** (NTP) | `chronyd` | UDP 123 | Time sync |
| **httpd / nginx** | `httpd` / `nginx` | 80/443 | Web server |
| **mariadb / mysqld** | `mariadb` / `mysqld` | 3306 | Relational DB |
| **postgresql** | `postgresql` | 5432 | Relational DB |
| **bind / named** | `named` | 53 | DNS server |
| **dhcpd / dnsmasq** | `dhcpd` | 67/68 | DHCP server |
| **smbd / nmbd** | `smb` / `nmb` | 445 / 137-139 | Samba (SMB for Linux) |
| **nfs-server** | `nfs-server` | 2049 | NFS |
| **firewalld / iptables / nftables** | `firewalld` | n/a | Host firewall |
| **rsyslog / syslog-ng** | `rsyslog` | UDP/TCP 514 | Syslog daemon |

### Linux package managers

| Distro | Install | Update | Search |
|---|---|---|---|
| **RHEL / Rocky / CentOS Stream** | `dnf install <pkg>` | `dnf update` | `dnf search <pkg>` |
| **Debian / Ubuntu** | `apt install <pkg>` | `apt update && apt upgrade` | `apt search <pkg>` |
| **SUSE / SLES** | `zypper install <pkg>` | `zypper update` | `zypper search <pkg>` |

### Linux user/group basics

| Command | What it does |
|---|---|
| `useradd -m -s /bin/bash alice` | Create user `alice` with home + bash |
| `passwd alice` | Set or change password |
| `usermod -aG wheel alice` | Add alice to the wheel (sudoers) group |
| `groupadd ops` | Create group |
| `id alice` | Show alice's UIDs/GIDs |
| `who` / `w` | Show logged-in users |
| `last` | Show login history |

### Permissions and ownership

```
-rwxr-x---  1 alice ops   1234  May 26 14:02  deploy.sh
```

- File type: `-` = regular file, `d` = dir, `l` = symlink
- Permissions: owner (`rwx`) / group (`r-x`) / others (`---`)
- Numeric: 4 (read) + 2 (write) + 1 (execute) per triplet → `750`

```bash
chmod 755 script.sh         # rwx-rx-rx
chmod u+x,g-w script.sh     # symbolic
chown alice:ops file        # change owner + group
chgrp ops file              # change group only
```

### Special permission bits (exam-worthy)

| Bit | Octal | What it does |
|---|---|---|
| **SUID** | 4000 | Process runs as file owner (e.g., `/usr/bin/passwd`) |
| **SGID** | 2000 | On file: runs as group; on dir: new files inherit dir's group |
| **Sticky bit** | 1000 | On dir: only file owner can delete (e.g., `/tmp`) |

🚨 **Trap on the exam:** SUID binaries are a frequent privilege-escalation vector. Audit them with `find / -perm -4000`.

---

## 🔁 Time Sync — Why It Matters Across Both Platforms

The opening story is real. Kerberos (the auth protocol AD uses) requires clock skew between client and KDC to be **≤ 5 minutes** (configurable, but default). If clocks drift apart, authentication fails everywhere.

| Platform | Service | Default upstream |
|---|---|---|
| Windows | Windows Time service (`w32tm`) | `time.windows.com` (or a domain time hierarchy) |
| Linux (modern) | `chronyd` | distro-default NTP pool |
| Linux (older) | `ntpd` | distro-default NTP pool |

**Universal best practice:** point every server in the environment at the *same* internal NTP source(s), which in turn point at a small set of authoritative upstreams (e.g., `time.cloudflare.com`, `time.google.com`, internal GPS-disciplined appliance).

🎯 **Exam pattern:** *"Users cannot log in via Kerberos after a power outage; ping works, DNS works."* → **Time skew > 5 min** between clients and DCs. Fix NTP.

---

## 🌐 DNS, DHCP, AD — The Shared Core

### DNS

| Record | Purpose |
|---|---|
| **A** | Hostname → IPv4 |
| **AAAA** | Hostname → IPv6 |
| **CNAME** | Alias one name to another |
| **MX** | Mail exchanger |
| **NS** | Authoritative name server |
| **PTR** | IP → hostname (reverse lookup) |
| **SRV** | Service location (AD uses heavily — `_ldap._tcp`, `_kerberos._udp`) |
| **TXT** | Text payload (SPF, DKIM, domain ownership) |

🎯 **Exam pattern:** *"Domain joins fail. `nslookup` works for forward lookups."* → Check **PTR / reverse zone** — AD relies on reverse DNS for many operations.

### DHCP

| Option | Purpose |
|---|---|
| **Option 1** | Subnet mask |
| **Option 3** | Default gateway |
| **Option 6** | DNS servers |
| **Option 15** | Domain name |
| **Option 51** | Lease time |
| **Option 66** | TFTP server (PXE) |
| **Option 67** | Boot file (PXE) |

**DORA** (Discover → Offer → Request → Acknowledge) is the lease handshake.

**DHCP relay (Option 82)** lets a router forward DHCP broadcasts across subnets to a central DHCP server.

### AD DS basics

| Term | One-liner |
|---|---|
| **Forest** | Top-level container; shares schema |
| **Domain** | Replication boundary within a forest |
| **OU** (Organizational Unit) | Logical container for users/computers/groups, target for GPO |
| **GPO** (Group Policy Object) | Policy applied to OU/site/domain |
| **DC** (Domain Controller) | Server hosting AD DS |
| **Global Catalog** (GC) | Searchable subset of forest objects |
| **FSMO roles** | 5 single-master roles (PDC Emulator, RID, Infrastructure, Schema, Domain Naming) |
| **Trust** | Connection between domains/forests |

🚨 **Trap:** Time skew, missing SRV records, and missing PTR records are the top three causes of "AD inexplicably broken."

---

## 💻 Remote Management

### RDP — Remote Desktop Protocol

- Microsoft protocol, **TCP 3389** (and UDP 3389 for low-latency mode)
- Graphical session; the user sees a full desktop
- Encrypted with TLS by default in modern Windows
- **NLA** (Network Level Authentication) authenticates the user *before* establishing a session — defense against pre-auth RDP exploits
- For internet exposure use **RD Gateway** (TCP 443 over HTTPS, tunnels RDP through TLS to internal hosts) — NEVER expose 3389 directly to the internet

### SSH — Secure Shell

- IETF standard (RFC 4250-4256), **TCP 22**
- Encrypted CLI session; underpins almost everything in Linux/Unix admin
- Key-based authentication preferred over passwords:
  ```bash
  ssh-keygen -t ed25519 -C "alice@laptop"      # generate keypair
  ssh-copy-id alice@host.example.com           # install public key on host
  ssh alice@host.example.com                   # log in with key
  ```
- Disable password auth in `/etc/ssh/sshd_config`:
  ```
  PermitRootLogin no
  PasswordAuthentication no
  PubkeyAuthentication yes
  ```
- **SSH tunneling / port forwarding** lets you securely proxy other protocols through the SSH session.

### WinRM and PowerShell Remoting

- WinRM = Microsoft's WS-Management implementation
- HTTP listener: **TCP 5985**; HTTPS listener: **TCP 5986** (preferred)
- Enables PowerShell remoting:
  ```powershell
  Enable-PSRemoting -Force                              # on the target
  Enter-PSSession -ComputerName srv01 -Credential ...   # interactive
  Invoke-Command -ComputerName srv01,srv02 -ScriptBlock { Get-Service }  # fan-out
  ```
- Modern PowerShell 7 also speaks **SSH** as a transport — bridging Windows and Linux.

### Comparison

| Protocol | Layer | Port | Mode | Native to |
|---|---|---|---|---|
| **RDP** | App | TCP 3389 | Graphical desktop | Windows |
| **SSH** | App | TCP 22 | CLI (or tunneling) | Linux/Unix |
| **WinRM HTTP** | App | TCP 5985 | CLI/script | Windows |
| **WinRM HTTPS** | App | TCP 5986 | CLI/script | Windows |
| **Telnet** | App | TCP 23 | CLI, **cleartext** — testing only | Legacy |

🚨 **Trap on the exam:** Never use Telnet for admin. Cleartext credentials. Tested as a "what's wrong with this config?" trap.

---

## 🧮 Automation and Configuration Management

### Windows automation

- **PowerShell** — primary scripting language (.ps1 files, modules)
- **Group Policy** — declarative config for domain-joined machines
- **DSC** (Desired State Configuration) — declarative PowerShell-based config management
- **Windows Admin Center** — modern web GUI replacement for many MMC snap-ins

### Linux automation

- **Bash** — universal scripting (`#!/bin/bash`)
- **Python** — modern admin scripting
- **cron** — time-based job scheduler (`/etc/crontab`, `crontab -e`)
- **systemd timers** — modern alternative to cron, with better logging via journald

### Cross-platform

- **Ansible** — agentless, SSH-based, YAML playbooks; works against Windows via WinRM
- **Puppet, Chef, SaltStack** — agent-based config management
- **Terraform** — infrastructure-as-code for cloud + on-prem
- **Git** — version control for scripts, playbooks, and runbooks

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario.** A 200-person engineering company runs a single Windows Server 2022 with AD DS + DNS + DHCP + IIS + File Services + a SQL Server instance. It's slow and patches take all night. The CIO asks you to redesign the role distribution. You have budget for 4 small VMs on existing Hyper-V. What roles go where?

**Walkthrough.**

1. **DC1, DC2** — Two Windows Server Core VMs running **AD DS + DNS + DHCP**. Two for redundancy. Server Core reduces patch surface. DNS and DHCP are AD-aware and should live with DCs (or be replicated).
2. **Web/App VM** — One VM with **IIS + the application**. Separate from data tier. Pick Desktop Experience only if app management requires the GUI; otherwise Server Core.
3. **SQL VM** — One VM dedicated to **SQL Server**, ideally Server Core / dedicated database compute. Storage on its own LUN with RAID 10 (Module 3). Backups via SQL Agent → DPM or Veeam.
4. **File Server** — Demote to a separate VM later when File Services workload warrants. For now, can co-locate on the app VM if traffic is small.

**Why this layout?**

- AD DS, DNS, DHCP cluster naturally — they share dependencies.
- Tier separation (web → app → DB) localizes the blast radius of a compromise and lets you scale tiers independently.
- Server Core means each VM patches faster and reboots less.
- This is the kind of integration question Server+ PBQs ask.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---|---|
| "Windows and Linux are completely separate worlds." | Both run in the same enterprise. NTP, DNS, LDAP, SMB, monitoring all cross both. Be conversational in both. |
| "systemd is just a fancy init." | systemd is init + service manager + logger + timer + mount manager + more. Know `systemctl` and `journalctl` cold. |
| "Server Core is for advanced admins only." | Server Core is the *default best practice* for production roles. Lower attack surface, fewer patches, less RAM/disk. |
| "Telnet is fine for admin." | Cleartext credentials. Sec+/Server+ flag this constantly. Use SSH (Linux) or WinRM HTTPS / RDP+NLA (Windows). |
| "AD authentication failures must be password problems." | Top causes are time skew (>5 min), missing/broken SRV/PTR DNS, DC replication broken. Check those first. |
| "RDP on 3389 is fine to expose to the internet for road warriors." | No — use an RD Gateway behind 443 with TLS + MFA, or a VPN. Direct 3389 exposure is breach #1 for SMBs (BlueKeep CVE-2019-0708). |
| "WSUS approves patches automatically." | WSUS *downloads* but typically requires an admin to approve patches and target groups. Don't conflate WSUS with auto-update. |
| "Putting both DCs on the same hypervisor host is fine." | Anti-pattern — one host failure takes the directory down. Use anti-affinity rules to keep DCs on different hosts (Module 4). |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Role** | Major Windows Server function (AD DS, DNS, DHCP, IIS, Hyper-V…) |
| **Feature** | Supporting capability (.NET, BitLocker, RSAT…) |
| **AD DS / AD CS / AD FS** | Active Directory Domain / Certificate / Federation Services |
| **FSMO roles** | 5 single-master operations roles |
| **GPO** | Group Policy Object |
| **OU** | Organizational Unit |
| **Server Core** | Headless Windows Server variant |
| **PowerShell remoting** | WinRM-based remote PowerShell execution |
| **systemd** | Modern Linux init + service manager |
| **journalctl** | systemd's log query tool |
| **chronyd / ntpd** | Linux NTP daemons |
| **dnf / apt / zypper** | RPM / .deb / SUSE package managers |
| **SSH** | Secure Shell (TCP 22) |
| **WinRM** | Windows Remote Management (5985/5986) |
| **RDP** | Remote Desktop Protocol (3389) |
| **NLA** | Network Level Authentication (RDP pre-auth) |
| **RD Gateway** | RDP-over-HTTPS gateway |
| **SUID / SGID / sticky bit** | Special Linux permission bits |
| **DORA** | DHCP Discover-Offer-Request-Acknowledge |
| **Kerberos skew** | ≤ 5 minutes between client and KDC |

### Acronyms cheat-row (Module 2)
| Acronym | Meaning |
|---|---|
| AD DS / AD CS / AD FS | Active Directory Domain / Certificate / Federation Services |
| GPO / OU / GC / FSMO | Group Policy Object / Organizational Unit / Global Catalog / Flexible Single Master Operations |
| RDP / SSH / WinRM | Remote Desktop / Secure Shell / Windows Remote Management |
| NLA | Network Level Authentication |
| RSAT | Remote Server Administration Tools |
| WSUS | Windows Server Update Services |
| WDS | Windows Deployment Services |
| DHCP / DNS / NTP | Dynamic Host Config / Domain Name System / Network Time |
| DORA | DHCP Discover/Offer/Request/Ack |
| SUID / SGID | Set User ID / Set Group ID |

---

## 📊 Case Study — NotPetya, Maersk, and the Cost of Patch Discipline (2017)

**Situation.** On 27 June 2017, the **NotPetya** wiper masquerading as ransomware tore through Ukraine — and from there into multinational supply chains via a tax-software auto-update channel (M.E.Doc). It abused the **EternalBlue** SMB v1 exploit (Microsoft MS17-010, patched 14 March 2017) and the **Mimikatz**-based credential dumping technique to move laterally, encrypting MFTs and wiping disks (later analysis: actually a wiper, not ransomware; recovery wasn't possible even with payment).

**What it did to Maersk.** A.P. Møller-Maersk — the world's largest container-shipping company at the time — lost its entire global IT estate in about 7 minutes. 4,000 servers, 45,000 PCs, 2,500 applications offline. Port terminals stopped, ships were stranded, supply chains globally degraded. Maersk's chairman publicly confirmed reinstalling its **entire global Active Directory from a single surviving DC in Ghana** that had been offline during a power outage — the only AD copy not encrypted. Total cost: **$250–300 million** in lost revenue and recovery (Maersk H1 2017 results announcement; *Wired*, "The Untold Story of NotPetya," August 2018).

**Lesson for the exam / for practitioners.**

- **Patch discipline matters.** EternalBlue's patch was 3.5 months old when NotPetya weaponized it. Many sites were unpatched.
- **Disable SMB 1.0.** It is the protocol EternalBlue exploited. The Windows Server feature exists; remove it.
- **AD DR plan.** "We have backups" is not the same as "we have tested backups we can restore *quickly*." Maersk's Ghana DC saved them by accident.
- **Server Core reduces attack surface.** A DC on Server Core has fewer GUI components to exploit and fewer monthly patches.
- **Segment the management plane.** A flat domain admin credential reachable from every workstation = Mimikatz pivot in seconds. Use **Tiered Administration** (Tier 0 / Tier 1 / Tier 2).
- **Anti-affinity for DCs.** Maersk's redundancy was wiped because *every* DC was reachable from the infected network. Air-gap at least one (Ghana, in their case — accidentally).

This is the scenario Server+ tests when asking "design a resilient AD deployment with patch management." The answer is rarely one thing — it's *layered discipline*.

**Discussion (Socratic).**
- **Q1:** If you were Maersk's CISO on 28 March 2017 (two weeks after the EternalBlue patch dropped), what three concrete operational changes would you push to land before 27 June, given limited budget? Defend each.
- **Q2:** Is "test restore your AD forest into an isolated lab every quarter" worth the operational burden? Argue both sides.
- **Q3:** Tiered Administration breaks the convenience of "Domain Admin can do anything anywhere." How would you justify it to a CIO who hears "complexity" and pushes back?

---

## ✅ Module 2 Summary

You now know:
- 🪟 Windows Server **roles** vs **features** + the role catalog (AD DS, DNS, DHCP, IIS, Hyper-V, RDS, WSUS, WDS)
- 🪟 **Server Core** as the production-preferred variant
- 🐧 **systemd** basics: `systemctl`, `journalctl`, unit-file locations
- 🐧 Linux **daemons** + **package managers** (dnf, apt, zypper)
- 🐧 Linux **user/group/permission** model including SUID/SGID/sticky
- 🔁 The **time-sync** problem and Kerberos's 5-minute skew
- 🌐 DNS, DHCP, and AD fundamentals (records, options, OU/GPO/FSMO)
- 💻 Remote management: **RDP, SSH, WinRM** + their ports and modes
- 🧮 Automation entry points: PowerShell, bash/Python, Ansible

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 21/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 3 — Storage: RAID, SAN, NAS](../Module-03-Storage/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 3](../Module-03-Storage/Reading.md) attaches storage to your administered hosts; [Module 4](../Module-04-Virtualization/Reading.md) virtualizes everything you just learned to install bare-metal; [Module 6](../Module-06-Security/Reading.md) hardens these services; [Module 8](../Module-08-Troubleshooting/Reading.md) diagnoses when they break.
> - Cross-course: Windows-heavy candidates should pair this with **Azure Administrator (AZ-104)** for cloud AD/identity (Entra ID). Linux-heavy candidates benefit from **Linux Foundation LFCS / RHCSA**. Both worlds intersect with the **Security+** identity module.
> - Practice: Practice Exam 1 has ~10 questions from this module; the Final Mock has ~14.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Microsoft Learn — *Windows Server documentation* — current authoritative reference
- 📄 Red Hat — *System Administrator's Guide* and *Configuring basic system settings*
- 📄 Lennart Poettering (systemd primary author) — design papers and blog posts on the systemd project site
- 📄 IETF RFC 4250–4256 (2006) — SSH protocol suite
- 📄 IETF RFC 4120 (2005) — Kerberos V5 — for the AD authentication backbone

**Case-study sources:**
- 📄 *Wired*, Andy Greenberg (2018). "The Untold Story of NotPetya, the Most Devastating Cyberattack in History." 22 August 2018.
- 📄 A.P. Møller-Maersk 2017 interim financial results — official statement on NotPetya impact.

**Practitioner / exam:**
- 📖 *CompTIA Server+ SK0-005 Exam Objectives* (free PDF from CompTIA)
- 📖 [Professor Messer SK0-005 videos](https://www.professormesser.com/server-plus/sk0-005/sk0-005-video-training-course/)
- 📖 Mike Meyers, *CompTIA Server+ All-in-One Exam Guide, 5th ed.* — chapter on administration
- 📖 *Active Directory* (O'Reilly, Allen/Lowe-Norris) — the canonical AD book
