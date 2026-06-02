# Module 7: Windows Update for Business & Servicing 🔄

> **Why this module matters:** Windows servicing is the recurring operational rhythm of every endpoint program. MD-102 tests update rings, feature vs quality vs driver separation, expedited updates, and Delivery Optimization repeatedly. The exam loves "the zero-day Patch Tuesday with a known-exploited vuln" scenarios — get WUfB cold and these become trivial.

> **Prerequisites for this module.** Before starting:
> - Module 1 (Modern Workplace) — Windows-as-a-Service mental model.
> - Module 3 (Intune Fundamentals) — group targeting + Settings Catalog.
> - Awareness of Windows update history — what Patch Tuesday is, what a feature update vs cumulative update means.

---

## 🍕 A Story: Patch Tuesday + Zero-Day

It's Tuesday, May 13th. Microsoft releases the May 2026 Patch Tuesday update at 1pm Eastern. Among the patches is **KB5037890** — a critical Remote Code Execution vuln in the Windows Print Spooler that's already being exploited in the wild. The CISO sends one message:

> *"Maria — every Windows 11 endpoint needs KB5037890 in production within 48 hours. CVSS 9.8. Active exploitation. Go."*

Maria's options:

1. **Wait for the normal update ring cadence.** The Pilot ring would get it Wednesday, Broad on Friday, Deferred on the following Tuesday. Total: 7 days. Unacceptable.
2. **Push an Expedited Update** via Windows Update for Business. The expedited update overrides ring deferrals and forces a fast install within 24 hours. Within 4 hours, 96% of the fleet has the patch.
3. **Manually update every device.** ~1,400 devices × 15 min each = 350 hours of IT labor. Unacceptable.

Maria picks option 2. By 5pm Eastern she's confirmed 99.1% deployment. The remaining 0.9% are mostly devices offline (vacation, business travel) and 8 devices stuck due to free-space issues that her team resolves overnight. **The CISO updates the board Wednesday morning: "Zero exposure to the active exploit within 24 hours."**

This module is everything that made the 4-hour response possible — and the policy machinery that operates the normal cadence the other 51 weeks of the year.

---

## 🔄 Windows Update for Business (WUfB) — The Core (MEMORIZE THIS)

WUfB is Microsoft's free service that lets you defer and manage Windows updates via policy (Intune or Group Policy). No update content servers needed — devices pull from Microsoft's content delivery network with optional peer-to-peer optimization via Delivery Optimization.

| Update category | What | Cadence |
|-----------------|------|---------|
| **Quality updates** | Cumulative security + bug fixes (Patch Tuesday) | Monthly, 2nd Tuesday |
| **Feature updates** | OS version uplift (e.g., 24H2 → 25H2) | Annually, typically September/October |
| **Driver updates** | OEM-provided drivers + firmware via Windows Update | Variable |

Each category can be controlled separately. The exam tests this — feature and quality are NOT the same policy.

---

## 📊 Update Rings — The Canonical Pattern

The standard recommended ring topology:

| Ring | Audience | Quality deferral | Feature deferral |
|------|----------|------------------|------------------|
| **Pilot** | IT + tech-savvy users (~5%) | 0 days | 0 days |
| **Broad** | Most knowledge workers (~80%) | 7 days | 30 days |
| **Deferred** | Sensitive workloads (~10%) | 14–30 days | 90 days |
| **Critical** (optional) | Mission-critical systems (~5%) | 30 days | 180 days |

The deferral is **calendar days from Microsoft release** — not from the previous ring. So a 7-day quality deferral means "wait 7 days after Microsoft's Patch Tuesday to install."

🔥 **MEMORIZE:** The Pilot → Broad → Deferred pattern is the canonical answer to "design an update ring topology." Avoid "everyone in one ring" — that's the wrong answer.

🎯 **Exam tip:** Multiple update rings reduce blast radius. If a Microsoft update breaks something, the Pilot ring discovers it first, and you can pause Broad before users hit the issue.

---

## ⚙️ Building an Update Ring in Intune

Update rings are configured via **Endpoint security → Windows update rings** (or Devices → Windows → Update rings):

| Setting | Notes |
|---------|-------|
| **Update setting** | Choose feature update behavior |
| **Quality update deferral period (days)** | 0–30 days |
| **Feature update deferral period (days)** | 0–365 days |
| **Set deadlines** | Force install + restart deadline (days) |
| **Grace period (days)** | After deadline, user has grace before forced restart |
| **Automatic update behavior** | Auto install + restart, notify download/install, etc. |
| **Active hours start / end** | Block restart during business hours |
| **Pause feature / quality updates** | Emergency pause (up to 35 days for quality, 35 days for feature) |
| **Block user from pausing updates** | Yes for enforcement |
| **Restart checks** | Verify no active sessions before restart |
| **Allow updates to be downloaded over metered connections** | Default No |

🚨 **Trap on the exam:** You can pause an update ring for up to **35 days** in Intune. Beyond that, you must un-pause and re-pause.

---

## 🚀 Expedited Updates

The escalation path when a critical zero-day requires immediate deployment **outside the normal ring cadence**.

| Setting | Notes |
|---------|-------|
| **Expedited update profile** | Created separately in Endpoint Security → Windows update for Business |
| **Target a specific quality update (KB number)** | Specifies which KB to push |
| **Installation deadline** | Hours (default 24) before forced restart |
| **Notification** | User notified before deadline |

When you publish an expedited update:

1. WUfB cloud service pushes the update outside the deferral rules
2. Devices download via Delivery Optimization (peer + cloud)
3. Install within the deadline (default 24 hr)
4. Forced restart after deadline

🔥 **MEMORIZE:** Expedited updates **override** ring deferrals. They're the right answer for "active zero-day must be deployed today."

---

## 🌐 Delivery Optimization (DO)

Microsoft's peer-to-peer content delivery for Windows updates, Intune apps, and Microsoft 365 apps. Devices pull from peers on the same LAN/network before pulling from Microsoft's CDN.

### DO download modes

| Mode | Effect |
|------|--------|
| **HTTP only (0)** | No P2P, direct from Microsoft CDN |
| **LAN (1)** | Peers on same NAT/subnet + Microsoft CDN |
| **Group (2)** | Same as LAN but allows custom group ID (cross-subnet) |
| **Internet (3)** | Allow peers across the internet (less common) |
| **Simple (99)** | Direct Microsoft Update download, no caching |
| **Bypass (100)** | DO disabled entirely |

🎯 **Exam tip:** **LAN mode (1)** is the canonical default for offices. **Group mode (2)** is for organizations with multiple subnets in the same building.

### DO bandwidth settings

| Setting | What |
|---------|------|
| **Max foreground bandwidth (%)** | Cap when user is active |
| **Max background bandwidth (%)** | Cap when user is idle |
| **Max upload bandwidth (KB/s)** | Cap upload to peers |
| **Monthly upload data cap (GB)** | Total monthly upload limit |
| **Min disk size for peer caching (GB)** | Don't cache on small disks |

---

## 📊 Windows Update for Business Reports

A free Azure-hosted report that shows update deployment status across your fleet. Requires:

- Update rings configured in Intune
- A Log Analytics workspace
- The "Update Compliance" or "Windows Update for Business reports" solution attached

### What WUfB reports show

| Report | What |
|--------|------|
| **Update status** | Per-device installation state (success, failed, in progress) |
| **Driver updates** | Driver deployment success per OEM/model |
| **Feature updates** | Annual feature update rollout progress |
| **Quality updates** | Monthly cumulative update rollout |
| **Servicing failure** | Devices that failed to apply servicing stack updates |
| **Deployment status** | Aggregate rollout state across rings |

🎯 **Exam tip:** WUfB reports replace the older Update Compliance reports for cloud-managed devices.

---

## 🚗 Windows Driver Updates via WUfB

Microsoft Intune (with WUfB) can manage **driver updates** as a separate policy — distinct from feature/quality updates. New in 2023+.

| Action | What |
|--------|------|
| **Manual** | Admin reviews + approves each driver before deployment |
| **Automatic** | New driver versions auto-approved when Microsoft publishes |
| **Frozen** | Block specific driver versions (rollback or known-bad) |

🔥 **MEMORIZE:** Driver updates are managed separately from quality + feature updates. The exam will test this.

---

## 📦 Windows Update vs WSUS vs Configuration Manager

| Tool | When |
|------|------|
| **WUfB (cloud)** | Modern default for cloud-managed devices |
| **WSUS (on-prem)** | Legacy on-prem update server — being deprecated for cloud-managed |
| **ConfigMgr software updates** | Used in ConfigMgr-managed environments; can integrate with WSUS |
| **Microsoft Autopatch** | Microsoft-managed update orchestration (covered below) |

🚨 **Trap on the exam:** WSUS still exists but Microsoft has signaled deprecation for cloud-managed scenarios. The modern answer is WUfB for cloud-managed; WSUS only for legacy/on-prem.

---

## 🎯 Microsoft Autopatch

**Microsoft Autopatch** is Microsoft's managed update service — Microsoft operates the ring topology, deferrals, and rollback decisions for you. Available with Microsoft 365 E3/E5 + Intune Plan 1+.

| Feature | What |
|---------|------|
| **Test / First / Fast / Broad rings** | Microsoft-defined ring topology |
| **Auto-rollback on failure** | Microsoft pauses + rolls back on detection |
| **Update reporting** | Built-in reports on update deployment |
| **Covered update types** | Windows quality + Office + Edge + Teams + drivers (some) |

🎯 **Exam tip:** Autopatch is the right answer for "managed update service — Microsoft owns the orchestration." Self-managed WUfB is the right answer for "we want control over our own rings."

---

## 📅 Windows 11 Servicing Channels & End-of-Servicing

Windows 11 ships annually with a new feature update (e.g., 24H2 = October 2024, 25H2 = ~October 2025).

| SKU | End of servicing for a feature update |
|-----|---------------------------------------|
| **Windows 11 Home / Pro** | 24 months from release |
| **Windows 11 Enterprise / Education** | 36 months from release |

So Windows 11 24H2 (October 2024):

- Home/Pro: end of servicing October 2026
- Enterprise/Education: end of servicing October 2027

🔥 **MEMORIZE:** Plan for feature update adoption *before* the previous version reaches end of servicing. Otherwise devices stop getting security updates.

---

## 🛑 Pausing and Rolling Back

| Action | When |
|--------|------|
| **Pause updates** | Newly discovered issue — pause ring for up to 35 days |
| **Uninstall last quality update** | Quality update broke something — roll back |
| **Uninstall last feature update** | Within 10 days of install (default) |
| **Block specific KB** | Stop a specific known-bad update |

🚨 **Trap on the exam:** Feature update rollback is **limited to 10 days** by default after install. Beyond that, you'd need to reimage or in-place reinstall.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Feature and quality updates are the same policy" | ❌ Separate policies, separate deferrals |
| "All users in one ring is fine" | ❌ Multi-ring reduces blast radius |
| "Pause is unlimited" | ❌ Max 35 days |
| "Driver updates ride with quality updates" | ❌ Separate driver update policy |
| "Expedited updates respect ring deferrals" | ❌ They override deferrals |
| "WSUS is the modern answer" | ❌ WUfB is — WSUS deprecating for cloud-managed |
| "Feature update rollback is unlimited" | ❌ ~10 days default |

---

## 🧪 Task-Sequencing Practice: Build a 3-Ring Update Topology

**Order these steps to build Pilot → Broad → Deferred for a new tenant.**

The correct sequence:

1. ✅ **Define ring composition** — name the user groups (e.g., IT-Pilot, All-Knowledge-Workers, Sensitive-Workloads)
2. ✅ **Create Entra ID groups** for each ring
3. ✅ **Create Intune update ring #1: Pilot** (deferrals: 0/0 quality/feature)
4. ✅ **Create Intune update ring #2: Broad** (deferrals: 7/30)
5. ✅ **Create Intune update ring #3: Deferred** (deferrals: 14/90)
6. ✅ **Assign each ring to its group**
7. ✅ **Set up WUfB reports** (Log Analytics workspace + solution)
8. ✅ **Define ring promotion criteria** — "if Pilot stable for 7 days, promote Broad"
9. ✅ **Build a rollback playbook** — what to do if Broad reveals an issue
10. ✅ **Document the topology + rationale**

⚠️ Skipping step 9 means scrambling during a bad update. Skipping step 7 means flying blind on rollout progress.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Windows Update for Business (WUfB)** | Microsoft's free cloud-driven Windows update management service |
| **Quality update** | Monthly cumulative security/bug fix (Patch Tuesday) |
| **Feature update** | Annual OS version uplift (e.g., 24H2) |
| **Driver update** | OEM driver/firmware update via Windows Update |
| **Update ring** | Intune policy grouping devices for staged deployment |
| **Deferral period** | Days from Microsoft release to install (per ring) |
| **Deadline** | Forced install + restart cutoff |
| **Grace period** | User time before forced restart after deadline |
| **Pause updates** | Emergency 35-day suspension of a ring |
| **Active hours** | Block restart during specific business hours |
| **Expedited update** | Override ring deferrals to force fast deployment of a specific KB |
| **Delivery Optimization (DO)** | Peer-to-peer content delivery for updates + Intune apps |
| **Microsoft Autopatch** | Microsoft-managed update orchestration service |
| **WUfB reports** | Azure-hosted update deployment status reports |
| **Servicing stack update (SSU)** | Update to the update engine itself |
| **End of servicing** | Date a Windows feature version stops receiving security updates |
| **Roll back update** | Uninstall a quality or feature update |
| **WSUS** | Legacy on-prem Windows Server Update Services (deprecating for cloud) |

---

## ✅ Module 7 Summary

You now know:

- 🔄 WUfB as the modern Windows update management service
- 📊 The three separate update categories (quality / feature / driver) and their cadences
- 📊 Update ring topology (Pilot → Broad → Deferred) and blast-radius reasoning
- ⚙️ How to build and assign rings in Intune
- 🚀 Expedited updates for zero-day emergencies
- 🌐 Delivery Optimization modes and bandwidth controls
- 📊 WUfB reports for deployment status
- 🚗 Driver updates as a separate policy
- 🎯 Microsoft Autopatch vs self-managed WUfB
- 📅 Windows 11 servicing channels and end-of-servicing dates
- 🛑 Pausing + rolling back patterns
- ⚠️ The 7 most common update traps

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 8: Monitoring, Reporting & Troubleshooting](../Module-08-Monitoring/Reading.md)

---

## 📊 Case Study — The PrintNightmare Patch Cycle (2021–2022)

**Situation.** In late June 2021, Microsoft published CVE-2021-1675 / CVE-2021-34527 — the **PrintNightmare** Print Spooler RCE vulnerability. Within days, working exploits were publicly available. Every Windows endpoint with the Print Spooler service running (effectively every Windows machine) was vulnerable. Microsoft's first patches in June and July were incomplete and required additional out-of-band updates.

For organizations that had not adopted update rings + expedited updates, the response cycle was painful (multiple post-mortem analyses, e.g., SANS Internet Storm Center, July 2021):

- Manual patch testing in lab
- Per-device deployment via WSUS or ConfigMgr software updates
- Many enterprises took 4–8 weeks to reach 90% patched
- Multiple breaches attributed to PrintNightmare during the lag window

**Decision.** For organizations already on WUfB + Intune + expedited updates, the cycle was very different (multiple Microsoft customer stories, e.g., AON, Coca-Cola, various, 2021):

1. **Pilot ring** received the June Patch Tuesday update on day 0 (deferral 0).
2. Microsoft published the **out-of-band emergency update** (KB5004945, etc.) within days as additional fixes.
3. **Expedited update** in Intune targeted the out-of-band KB with a 24-hour deadline.
4. WUfB cloud + Delivery Optimization pushed the update to every device.
5. Within 24–48 hours, 95%+ of Intune-managed devices were patched.
6. WUfB reports verified deployment status; remaining gaps escalated to helpdesk.

**Outcome.** Public post-mortems and Microsoft customer stories indicate:

- Organizations on cloud-managed WUfB averaged **24–72 hours to 95% deployment**.
- Organizations on legacy WSUS / ConfigMgr software updates averaged **2–6 weeks** for the same milestone.
- Breach attribution data (CISA + various private SOCs) suggests organizations with longer patch windows were ~10× more likely to experience PrintNightmare-attributed compromise.
- Microsoft now cites PrintNightmare as a canonical reason for cloud-managed update orchestration in MD-102 study materials and Microsoft Mechanics episodes.

**Lesson for the exam / for practitioners.** This is the textbook case for *why* MD-102 weighs WUfB ring topology + expedited updates so heavily. The economic case is overwhelming: cloud-managed WUfB reduced PrintNightmare exposure from weeks to hours for organizations using it correctly. When the exam describes "actively exploited zero-day, immediate deployment required," the answer is **Expedited Update via WUfB**, every time. When the exam describes the normal monthly cadence, the answer is **Pilot → Broad → Deferred rings**. The PrintNightmare story is why these distinctions matter operationally.

**Discussion (Socratic).**
- **Q1.** PrintNightmare's out-of-band patches caused some printing breakage on certain print servers. Argue both sides: should an admin push the expedited update knowing some printing might break, or test more? What does each choice say about risk tolerance and breach impact?
- **Q2.** Expedited updates override ring deferrals. A risk-averse CISO argues "expedited should still respect deferrals for the Deferred ring." Defend Microsoft's design — why does expedited *override* matter?
- **Q3.** WSUS is deprecating for cloud-managed. A legacy bank with 50,000 endpoints all on WSUS argues for keeping WSUS for control. Defend the migration to WUfB by naming the operational scenario (like PrintNightmare) where WSUS would have failed to meet the response window.

---

> **Where this leads.**
> - Inside this course: Module 8 covers monitoring + reporting, including the dashboards that surface WUfB deployment status.
> - Cross-course: [`06-Azure-Administrator` Module 10](../../06-Azure-Administrator/Module-10-Monitor-Governance/Reading.md) covers Azure Monitor — useful since WUfB reports use Log Analytics.
> - Practice: Practice Exam 2 has roughly 5–7 questions from this module (rings, expedited, DO, WUfB reports). Final Mock Exam revisits with operational scenarios.

---

## 💬 Discussion — Socratic prompts

1. **Pilot ring size.** Microsoft recommends ~5% of fleet for Pilot. A 100-device shop says "5 devices isn't statistically meaningful." Defend the 5% guideline at scale, and identify what additional signals you'd add for a small fleet.
2. **Autopatch vs self-managed WUfB.** Microsoft Autopatch hands ring orchestration to Microsoft. A risk-averse CIO insists "we must own our update decisions." Defend Autopatch by naming the operational benefits and the one scenario where Autopatch is clearly wrong.
3. **Driver updates separation.** Microsoft made driver updates a separate policy in 2023+. Defend the design — why isn't "driver updates ride with quality" the simpler answer?
4. **Delivery Optimization in office vs WFH.** Office WFH has thin home internet but high coordination cost. Office on-site has fat LAN. Defend the DO mode + bandwidth settings you'd pick for each, and identify the surprise gotcha for WFH (hint: home network peer discovery).
5. **End-of-servicing dates.** Microsoft publishes EOS 24 months out for Home/Pro and 36 months for Enterprise. Defend the architectural argument that "always be on N or N-1" is the right operating discipline, citing the security and compatibility trade-offs.

---

## 📚 Further Reading (Optional)

- 📖 [Windows Update for Business documentation](https://learn.microsoft.com/windows/deployment/update/waas-manage-updates-wufb) (Microsoft, current)
- 📖 [Configure expedited Windows quality updates](https://learn.microsoft.com/mem/intune/protect/windows-10-expedite-updates)
- 📖 [Delivery Optimization for Windows updates](https://learn.microsoft.com/windows/deployment/do/waas-delivery-optimization)
- 📖 [Windows Update for Business reports](https://learn.microsoft.com/windows/deployment/update/wufb-reports-overview)
- 📖 [Windows 11 release information + end-of-servicing](https://learn.microsoft.com/windows/release-health/windows11-release-information)
- 📖 [Microsoft Autopatch overview](https://learn.microsoft.com/windows/deployment/windows-autopatch/overview/windows-autopatch-overview)
- 📖 SANS Internet Storm Center, *PrintNightmare timeline* (July 2021) — canonical post-mortem
