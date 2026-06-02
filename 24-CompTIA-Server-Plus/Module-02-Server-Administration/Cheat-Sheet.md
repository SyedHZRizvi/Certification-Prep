# 📋 Module 2 Cheat Sheet: Server Administration

> Print. Tape. Review before the exam.

---

## 🪟 Windows Server — Top Roles

| Role | Default port(s) |
|---|---|
| **AD DS** | LDAP 389 / LDAPS 636 / GC 3268-9 / Kerberos 88 / SMB 445 |
| **AD CS** | 80/443 |
| **AD FS** | 443 |
| **DNS** | 53 |
| **DHCP** | 67/68 |
| **File Services (SMB)** | 445 |
| **IIS** | 80/443 |
| **Hyper-V** | (see Module 4) |
| **RDS** | 3389 + 443 (RD Gateway) |
| **WSUS** | 8530/8531 |
| **WDS** | 67/68/4011 |

🧠 **Server Core** = no GUI, fewer patches, smaller attack surface → production default.

---

## 🐧 Linux systemd

| Command | What |
|---|---|
| `systemctl start/stop/restart <unit>` | Service control |
| `systemctl enable --now <unit>` | Enable at boot + start now |
| `systemctl disable <unit>` | Disable at boot |
| `systemctl status <unit>` | State + recent logs |
| `journalctl -u <unit>` | Service-specific logs |
| `journalctl -xe` | Latest + context for failures |

Unit files: `/etc/systemd/system/` (admin) · `/usr/lib/systemd/system/` (package).

---

## 📦 Package Managers

| Distro | Install | Update |
|---|---|---|
| RHEL / Rocky | `dnf install` | `dnf update` |
| Debian / Ubuntu | `apt install` | `apt update && apt upgrade` |
| SUSE / SLES | `zypper install` | `zypper update` |

---

## 🔐 Linux Permissions

`rwx rwx rwx = 7 7 7` (r=4, w=2, x=1). Common: 644 / 750 / 755.

| Special | Octal | Use |
|---|---|---|
| SUID | 4000 | Run as owner (passwd) |
| SGID | 2000 | File: run as group; Dir: inherit group |
| Sticky | 1000 | Dir: only owner can delete (/tmp) |

`find / -perm -4000` → audit SUID binaries.

---

## 💻 Remote Management Ports

| Protocol | Port | Use |
|---|---|---|
| **SSH** | TCP 22 | Linux CLI / tunnel |
| **RDP** | TCP 3389 | Windows desktop |
| **WinRM HTTP** | TCP 5985 | PS remoting (dev only) |
| **WinRM HTTPS** | TCP 5986 | PS remoting (prefer) |
| **Telnet** | TCP 23 | ❌ cleartext — never use |
| **RD Gateway** | TCP 443 | RDP over HTTPS |

---

## 🌐 DNS Records

| Record | Purpose |
|---|---|
| A / AAAA | Name → IPv4 / IPv6 |
| CNAME | Alias |
| MX | Mail |
| NS | Name server |
| PTR | IP → name (reverse) |
| SRV | Service location (AD!) |
| TXT | SPF/DKIM/verification |

🚨 AD breaks badly when SRV or PTR records are missing.

---

## 📡 DHCP Options

| # | Purpose |
|---|---|
| 1 | Subnet mask |
| 3 | Default gateway |
| 6 | DNS servers |
| 15 | Domain name |
| 51 | Lease time |
| 66 | TFTP server (PXE) |
| 67 | Boot file (PXE) |

**DORA** = Discover → Offer → Request → Acknowledge.

---

## 🏰 Active Directory

| Term | One-liner |
|---|---|
| Forest | Top container, shares schema |
| Domain | Replication boundary |
| OU | Logical container, GPO target |
| GPO | Group Policy Object |
| DC | Domain Controller |
| GC | Global Catalog |
| FSMO | 5 single-master roles (PDC, RID, Infrastructure, Schema, Domain Naming) |

🚨 **Kerberos requires ≤ 5 min clock skew.**

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Check time sync first" (Kerberos)
- "Use Server Core for production"
- "Use RD Gateway + MFA instead of exposing 3389"
- "Use WinRM HTTPS"
- "Spread DCs across hosts (anti-affinity)"
- "Tiered administration (Tier 0/1/2)"

❌ Often **wrong**:

- "Telnet"
- "Expose 3389 to internet"
- "Share Domain Admin"
- "Disable NLA"
- "Two DCs on one hypervisor host"
- "Skip patches because they cause reboots"

---

## 🗓️ Facts To Memorize Cold

- SSH 22 · RDP 3389 · WinRM 5985/5986 · DNS 53 · DHCP 67/68 · NTP 123
- systemd command verbs (start/stop/restart/enable/disable/status)
- chmod octals
- Kerberos skew: 5 min
- AD requires DNS + NTP
- 5 FSMO roles exist (PDC, RID, Infrastructure, Schema, Domain Naming)

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. systemctl one-liner to enable nginx + start it now? ___
2. The two AD-critical infrastructure dependencies? ___
3. WinRM HTTPS port? ___
4. SUID bit on `passwd` — why? ___
5. Telnet vs SSH — one-word difference? ___
6. Why two DCs on the same Hyper-V host is bad? ___

If you can answer all 6 in under 60 seconds, you own this module. ✅

---

➡️ [Module 3: Storage — RAID, SAN, NAS](../Module-03-Storage/Reading.md)
