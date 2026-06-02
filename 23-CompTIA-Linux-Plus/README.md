---
permalink: /23-CompTIA-Linux-Plus/
title: CompTIA Linux+ Track (XK0-005)
---

# 🐧 CompTIA Linux+ Track (XK0-005)

**🛡️ Systems & Cybersecurity** › CompTIA Linux+ (XK0-005)

> **Goal:** Pass CompTIA Linux+ (XK0-005) on the first attempt with a comfortable margin above 720/900.
> **Duration:** 6–8 weeks part-time (10–12 hrs/week)
> **Cost:** ~$369 USD voucher · 3-year validity, renews with CEUs or higher cert
> **Difficulty:** Intermediate · CompTIA recommends 12+ months hands-on Linux experience

---

## ✨ Why This Certification Matters

### 🎯 The promise

CompTIA Linux+ (XK0-005) is the credential that takes you from someone who *runs commands* to someone who *administers* Linux systems in production. Linux runs **90%+ of the public cloud**, the majority of enterprise servers, every container in Kubernetes, every Android phone, every embedded device, and the supercomputers on the TOP500 list. It is the operating system the modern world actually runs on. Pass Linux+ and you are recognized as a credentialed Linux sysadmin — qualified for any role where "Linux experience" appears in the job description.

### 💼 Career outcomes after passing

- **Linux Systems Administrator** ($80K–$115K) — operating Linux fleets in production
- **DevOps Engineer** ($105K–$145K) — Linux fluency is the foundational requirement; layer on cloud + CI/CD
- **Site Reliability Engineer (SRE)** ($120K–$170K) — Linux deeply, plus observability + automation
- **Cloud Engineer (Linux focus)** ($110K–$155K) — AWS / Azure / GCP plus production Linux skill
- **Cybersecurity Engineer (Linux specialization)** ($110K–$155K) — incident response, forensics, threat hunting on Linux fleets
- **Kubernetes / Container Engineer** ($125K–$175K) — Linux+ floor, layered with CKA / CKAD certs
- **Open-Source Software Engineer** ($120K–$180K) — at Red Hat, SUSE, Canonical, the Linux Foundation member companies

Linux+ pairs cleanly with **Network+ (course 22)** and **Security+ (course 09)** for the infrastructure / security path, and with cloud certs (courses 03–08) for the cloud-engineer path. CompTIA's salary data places Linux+ holders at roughly **$95K average**, with a 15–25% premium over non-certified Linux operators in equivalent roles.

### 🏛️ Why The Cert Hub's version is different

- **Engineered to the Cornell · Harvard · Princeton · Stanford pedagogical standard** — Unix design philosophy taught from named sources (Thompson & Ritchie 1974 on Unix, Stevens 1992 on advanced programming, Kerrisk's *The Linux Programming Interface*, Nemeth et al. on system administration)
- **Story-driven lessons (not flashcard punishment)** — every command introduced through a real ops scenario (a load-balancer fix at 3am, a kernel-panic forensic walkthrough, a systemd unit-file rescue)
- **Original questions only** — every quiz and practice exam written from CompTIA's published XK0-005 exam objectives; no copyrighted dumps
- **Real-world case studies** — the Heartbleed disclosure timeline, the Dirty COW kernel exploit lifecycle, a real outage post-mortem from a SaaS company, systemd vs sysvinit migration battle stories
- **One author, one voice** — coherent vocabulary across all 8 modules
- **Updated for the XK0-005 blueprint** — including systemd-everything, modern containers (Docker, Podman), nftables (not iptables), modern Bash, and the current security-control set (SELinux / AppArmor)

### 🚀 Ready to start?

Six to eight weeks. Spin up an Ubuntu and a RHEL-derivative VM (Rocky or Alma) on day one. Live in the terminal. Pair this with the official LFCS or LPIC-1 practice questions for additional repetitions.

Begin with [Module 1: Boot & systemd →](./Module-01-Boot-Systemd/Reading.md)

---

## 🎯 What You'll Learn

By the end of this track, you'll be able to:

- Boot, recover, and troubleshoot any Linux system from GRUB to systemd targets, across BIOS and UEFI
- Navigate the Filesystem Hierarchy Standard (FHS) and reason about every special directory under `/`
- Manage packages confidently with `apt`, `dnf`, `rpm`, `dpkg`, `snap`, `flatpak`, and from-source compilation
- Write production Bash scripts: variables, conditionals, loops, functions, `sed`/`awk`/`grep` pipelines, error handling
- Create, modify, and audit Linux users, groups, sudoers, PAM modules, and password aging policy
- Configure modern Linux networking with `ip`, `ss`, `nmcli`, NetworkManager, OpenSSH, and `nftables`/`firewalld`
- Load kernel modules, debug hardware with `dmesg`/`lspci`/`lsblk`/`udev`, and design LVM volume groups
- Harden a Linux host: SELinux/AppArmor modes, LUKS disk encryption, GPG, fail2ban, sysctl, auditd

---

## 📚 The 8 Modules

| # | Module | Time | What You'll Master |
|---|--------|------|--------------------|
| 1 | [Linux Boot, Init & systemd](./Module-01-Boot-Systemd/Reading.md) | 3 hrs | BIOS/UEFI, GRUB2, initramfs, SysVinit→systemd, journalctl |
| 2 | [Filesystem Layout & Permissions](./Module-02-Filesystem-Permissions/Reading.md) | 3 hrs | FHS, inodes, ext4/xfs/btrfs, chmod/chown, SUID/SGID/sticky, ACLs |
| 3 | [Package Management (apt/dnf/rpm)](./Module-03-Package-Management/Reading.md) | 2.5 hrs | apt, dnf, rpm, dpkg, repos, snap, flatpak, source builds |
| 4 | [Bash Scripting & Automation](./Module-04-Bash-Scripting/Reading.md) | 3.5 hrs | Variables, loops, sed/awk/grep, cron, at, systemd timers |
| 5 | [Users, Groups & sudo](./Module-05-Users-Groups/Reading.md) | 2.5 hrs | /etc/passwd, useradd, sudoers syntax, PAM, password aging |
| 6 | [Networking, SSH & Firewalls](./Module-06-Networking-SSH/Reading.md) | 3 hrs | `ip`/`ss`, NetworkManager, sshd, iptables vs nftables, firewalld |
| 7 | [Kernel Modules, Devices, LVM](./Module-07-Kernel-Modules/Reading.md) | 2.5 hrs | uname, modprobe, dmesg, /proc, udev, lsblk, LVM PV/VG/LV |
| 8 | [Linux Security & Hardening](./Module-08-Security/Reading.md) | 3 hrs | SELinux/AppArmor, LUKS, GPG, fail2ban, sysctl, auditd, SSH hardening |

**Total study time:** ~23 hrs reading + ~10 hrs videos + ~10 hrs quizzes/exams = **~43 hours**

---

## 🧪 Practice Exams (Located in `Practice-Exams/`)

| Exam | When To Take It | Length | Difficulty |
|------|-----------------|--------|------------|
| [Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md) | After Modules 1–4 | 45 Q / 45 min | ⭐⭐⭐ |
| [Practice-Exam-2](./Practice-Exams/Practice-Exam-2.md) | After Modules 5–8 | 65 Q / 65 min | ⭐⭐⭐⭐ |
| [Final-Mock-Exam](./Practice-Exams/Final-Mock-Exam.md) | 2–3 days before real exam | **90 Q / 90 min** | ⭐⭐⭐⭐⭐ |

**Plus:** Take the free LPIC-1 sample questions (overlap is huge), Sander van Vugt's free trial chapters, and any vendor-neutral practice set you can find. Score 85%+ on the Final Mock before booking the real exam.

---

## 📖 The Single Most Important Resource

🔗 **[Sander van Vugt's CompTIA Linux+ Complete Video Course (Pearson)](https://www.pearson.com/en-us/search.html/?q=Linux%2B+XK0-005)** — the most rigorous video set aligned to XK0-005 objectives. Pair with his book *CompTIA Linux+ XK0-005 Cert Guide*.

Honorable mentions:

- 📘 *CompTIA Linux+ XK0-005 Cert Guide* (Ross Brunson & Sander van Vugt, Pearson) — gold-standard text
- 📘 *Linux Bible* (Christopher Negus, Wiley, 11th ed.) — the most readable comprehensive Linux book
- 📘 *How Linux Works* (Brian Ward, No Starch, 3rd ed.) — the under-the-hood book MIT recommends to its sysadmin TAs
- 📘 *Linux Pocket Guide* (Daniel Barrett, O'Reilly, 4th ed.) — keep it open while practicing
- 🎥 [The Linux Foundation's free "Intro to Linux"](https://training.linuxfoundation.org/training/introduction-to-linux/) on edX — vendor-neutral, perfectly aligned

---

## 🎓 What Is The Linux+ Exam?

| Detail | Specification |
|--------|---------------|
| Provider | CompTIA |
| Exam code | XK0-005 (released July 2022; current version) |
| Cost | $369 USD (vouchers often discount via student/military deals) |
| Time | 90 minutes |
| Questions | **Up to 90** — mix of multiple-choice (single + multi) and **Performance-Based Questions (PBQs)** |
| Pass mark | **720 / 900** (~80%) — scaled, not raw percentage |
| Delivery | Pearson VUE test center OR online proctored |
| Validity | 3 years; renew with CEUs, a higher cert, or by retaking |
| Prerequisites | None official; CompTIA recommends 12+ months hands-on Linux + Network+/Server+ baseline |

### Domain Weights (XK0-005)

| Domain | Weight | Modules |
|--------|--------|---------|
| 1.0 System Management | **32%** | Modules 1, 2, 3, 7 |
| 2.0 Security | **21%** | Modules 5, 8 |
| 3.0 Scripting, Containers & Automation | **19%** | Module 4 |
| 4.0 Troubleshooting | **28%** | Modules 1, 6, 7 (woven throughout) |

System Management is the **biggest domain** — don't shortchange Modules 1–3. Troubleshooting is the second biggest and is tested via PBQs in every domain.

---

## 🚦 Recommended Path

### 6-Week Intensive Plan
```
Week 1: Module 1 (boot/systemd) + Module 2 (filesystem)   → Quizzes
Week 2: Module 3 (packages) + Module 4 (bash)             → Practice Exam 1
Week 3: Module 5 (users/sudo) + Module 6 (networking)     → Quizzes
Week 4: Module 7 (kernel/LVM) + Module 8 (security)       → Practice Exam 2
Week 5: Lab marathon — every Cheat-Sheet command, twice   → Re-take wrong-answer questions
Week 6: Flashcards drill + Final Mock + PBQ practice      → REAL EXAM
```

### 8-Week Relaxed Plan
```
Weeks 1-2: Modules 1-2 + van Vugt domain 1
Weeks 3-4: Modules 3-4 + Practice Exam 1 + Linux Bible Ch. 1-10
Weeks 5-6: Modules 5-6 + Practice Exam 2 + cron/systemd timer lab
Week 7:    Modules 7-8 + LVM + SELinux/AppArmor lab
Week 8:    Final Mock + flashcards + Cheat-Sheets review → REAL EXAM
```

---

## ⚠️ The 7 Most Common Reasons People Fail

1. ❌ **No live Linux system to practice on** — Reading about `ip addr` is nothing like running it. Spin up a VM, a Pi, or WSL on day one.
2. ❌ **Picked one distro and ignored the others** — XK0-005 is vendor-neutral. Know `apt` AND `dnf`, `firewalld` AND `nftables`, `journalctl` AND classic syslog.
3. ❌ **Memorized commands but skipped the *why*** — PBQs ask you to fix a broken system. You need to understand systemd unit ordering, not just `systemctl start`.
4. ❌ **Skipped LVM and SELinux** — they each look like one slide but each gets 4–6 questions. The lab investment pays back hugely.
5. ❌ **Treated Bash as optional** — Domain 3 (Scripting) is 19%. You will read and modify scripts on the exam.
6. ❌ **Confused similar tools** — `ip` vs `ifconfig`, `ss` vs `netstat`, `nftables` vs `iptables`, `journalctl` vs `tail /var/log/messages`. Flashcards fix this.
7. ❌ **No time management** — 90 questions in 90 minutes = 60 seconds each. Mark long PBQs for review and come back to them last.

---

## 🃏 Use the Flashcards

Linux+ has hundreds of commands, flags, and config-file paths. The [Master Flashcards](./Flashcards.md) deck has 120+ cards covering every command, port, filesystem, and signal you must know cold. Drill them daily — even 10 minutes/day for two weeks beats one cram session.

---

## 🎬 Start Here

👉 [**Module 1: Linux Boot, Init Systems & systemd**](./Module-01-Boot-Systemd/Reading.md)

You got this. 🐧
