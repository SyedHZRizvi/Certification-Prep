# Recommended Readings — AZ-104 Azure Administrator

> A curated, opinionated list. Read the canonical books once and well; subscribe to the industry channels for ongoing currency; use the free academic resources to deepen the underlying CS.

---

## Canonical textbooks (the four you should own)

1. **Harinath Thangaraj & Aaron Guilmette — *Exam Ref AZ-104 Microsoft Azure Administrator* (Microsoft Press, 3rd edition 2024; ISBN 978-0-13-805572-9).** The Microsoft Press exam-ref series is the closest thing to "the textbook" the certification team writes for. Updated for the post-2024 exam objectives. **When to read it:** alongside this course, one chapter per module. Reread before the exam.

2. **Andrew Bettany & Andrew Warren — *Exam Ref AZ-104 Microsoft Azure Administrator* (Pearson, 2nd ed 2023; ISBN 978-0-13-738152-0).** The Pearson edition. Slightly different exam-focus emphasis from the Microsoft Press; useful as a *second* reference for any topic that didn't click on the first read. **When:** secondary reference; consult on weak topics only.

3. **Microsoft — *Cloud Adoption Framework for Azure* (Microsoft, ongoing publication; current revision checked 2026-05).** Not a book — a living documentation set. The *Ready* section ("Enterprise-Scale landing zone") IS the answer to half the AZ-104 case-study questions. Read it once cover-to-cover; refer back constantly. **When:** Module 1 and again before the capstone.

4. **Satya Nadella — *Hit Refresh: The Quest to Rediscover Microsoft's Soul and Imagine a Better Future for Everyone* (HarperBusiness, 2017; ISBN 978-0-06-265251-2).** Not a technical book — a strategy book. Explains *why* Azure exists in its current form, why CAF was created, why "Azure first, mobile first" was the rallying cry of 2014, and why the company is now "AI everywhere." Useful executive context for any cloud admin who wants to be promoted. **When:** during a study break; ~5 hours total.

---

## Seminal papers, books, and articles (the field's intellectual foundation)

1. **Jerome H. Saltzer & Michael D. Schroeder — "The Protection of Information in Computer Systems" (*Proceedings of the IEEE*, 63(9), 1975).** Origin of *principle of least privilege* and seven other foundational security design principles. Every Conditional Access policy and PIM eligibility decision traces back to this paper. **When:** anytime you're studying Module 2 or wondering why RBAC has the shape it does.

2. **Eric Brewer — "Towards Robust Distributed Systems" (Keynote, *ACM Symposium on Principles of Distributed Computing*, 2000).** The CAP theorem origin. Useful for reasoning about why GRS can't promise zero data loss on regional failover, why ZRS is "consistency + availability within a region," and why every cloud-redundancy decision is a CAP trade-off. **When:** Module 3 (Storage), Module 9 (Backup + DR).

3. **U.S. NIST — *Cybersecurity Framework 2.0* (NIST, February 2024).** The current canonical reference framework: *Identify, Protect, Detect, Respond, Recover, Govern*. Maps cleanly to the Azure security tooling (Defender for Cloud + Sentinel + Azure Policy + Azure Monitor). **When:** alongside Module 8 and Module 10.

4. **U.S. NIST — *Zero Trust Architecture* (SP 800-207, August 2020).** The blueprint behind Microsoft's Conditional Access + Identity Protection + microsegmentation guidance. Read sections 2 and 3 (architecture and deployment) at minimum. **When:** Module 2 (Identity) and Module 8 (Network Security).

5. **Microsoft Press / Brendan Burns et al. — *Kubernetes Up & Running, 3rd ed.* (O'Reilly, 2022; ISBN 978-1-09-811020-6).** Brendan Burns is one of the AKS co-founders. The 3rd edition covers what AZ-104 tests at the level of "you know what a pod, service, and ingress are." **When:** before Module 6 if AKS feels foreign.

6. **AWS / Microsoft — *Well-Architected Frameworks*.** Read at least one (Microsoft's is the natural choice). The 5 pillars (Reliability, Security, Cost Optimization, Operational Excellence, Performance Efficiency) shape every cloud-architecture decision. Microsoft's Well-Architected Tool in the portal is testable. **When:** Modules 1, 3, 5, 7, 9, 10.

7. **Andy Greenberg — *Sandworm: A New Era of Cyberwar and the Hunt for the Kremlin's Most Dangerous Hackers* (Doubleday, 2019; ISBN 978-0-3855-4440-5).** The definitive NotPetya / Maersk narrative. Read the Maersk chapter before reading Module 9; it makes the immutable-backup + MUA features visceral. **When:** Module 9 case study deep-dive.

8. **Mark Russinovich — *Azure CTO blog* (azure.microsoft.com/blog, archived posts 2014–2025).** Mark is Azure's CTO. His "Inside Azure datacenter architecture" series (2022–2024) is the deepest publicly-available explanation of how Azure works under the hood. Optional but career-shaping for anyone going into infrastructure. **When:** anytime; read 1–2 posts per study session.

9. **Microsoft — *Defender for Cloud Threat Matrix* and *Microsoft Threat Intelligence reports* (ongoing publication; Microsoft Threat Intelligence Center, refreshed monthly).** Useful for understanding what Defender alerts *mean*. The 2024 Midnight Blizzard (HAFNIUM) and 2023 Okta breach analyses are required reading. **When:** Module 8 and Module 10.

10. **Microsoft — *AZ-104 Skills Outline* (Microsoft Learn, "Skills Measured" PDF; refreshed every 3–6 months).** Print the current PDF. Tick every bullet as you study. **When:** week 1 and again 2 weeks before exam day.

11. **HBR / MIT Sloan Management Review** — search for "cloud strategy," "digital transformation," and "regulated cloud" articles from 2022–2026. Useful executive context. **When:** anytime; pick 2–3 articles.

---

## Industry resources (the practitioners you should know)

1. **John Savill — *AZ-104 Study Cram* + *Master Class* on YouTube** (channel: John Savill's Technical Training). Microsoft Azure Field CTO; runs free, exam-focused crams (typically 4–6 hours each, refreshed 2024 and 2025) plus weekly deep-dive videos. *Most-watched practitioner walkthrough of these patterns; assigned by Microsoft FastTrack engineers to customers.* **When:** week 1 cram, weeks 4–10 for topic deep-dives, week 13 for the pre-exam review.

2. **Adam Marczak — *Azure for Everyone* on YouTube** (channel: Azure for Everyone). Polish Microsoft MVP. Whiteboard-style 8–15 minute videos on every AZ-104 topic. Especially good for visual learners. **When:** topic-by-topic, when a Reading section needs a second explanation.

3. **Microsoft Mechanics — Microsoft's official YouTube channel.** Product-team-driven; new feature announcements get a 5–10 minute walkthrough usually within a week. Use to stay current on post-2024 feature shifts (Premium SSD v2 expansions, new Entra Kerberos GA, etc.). **When:** monthly during the study program.

4. **Tim Warner — *Azure Cloud Skills Boot Camp* on Pluralsight** (paid). Tim is one of the most-cited Pluralsight authors for Azure. Pluralsight free trial usually lasts 10 days — enough to cram his AZ-104 path. **When:** week 13 if you need a final structured review.

5. **Microsoft Reactor / Ignite / Build session recordings** (free on Microsoft Learn or YouTube). Watch the AZ-104 / Azure infrastructure track sessions from Ignite 2024 and 2025. **When:** weeks 6–10 to learn what's *next* on the roadmap that may show up on the exam.

6. **Microsoft Tech Community blog** (techcommunity.microsoft.com). Engineering-team-authored posts. Subscribe to "Azure Networking," "Azure Storage," "Azure Compute," and "Microsoft Entra" tags. **When:** weekly RSS skim.

7. **Reddit r/AZURE** — community Q&A. Lurk-mode-only is fine; the threads on "what was on my exam" (always abide by Microsoft NDA — never share specific questions) are useful for calibration. **When:** weeks 10–14.

---

## Free academic courses (the underlying CS)

1. **MIT OpenCourseWare — *6.824 Distributed Systems* (free, OCW; recordings of MIT graduate course, Frans Kaashoek & Robert Morris).** The CS course that explains *why* CAP, Raft consensus, replicated state machines, and eventual consistency exist. Heavy material, but the cloud-storage decisions in Module 3 will click in a new way after this. **When:** if you have 40+ hours and want to be a *great* cloud architect, not just a certified one.

2. **Stanford CS-144 — *Introduction to Computer Networking* (Nick McKeown, free on Stanford's website; companion textbook *Computer Networks: A Top-Down Approach*, Kurose & Ross).** The networking course every cloud admin should have. Covers TCP/IP, BGP, DNS, and the OSI model at depth. Will make Modules 7 and 8 feel trivial. **When:** if your networking fundamentals are shaky.

3. **Microsoft Learn — *AZ-104 learning path* (free, Microsoft Learn).** The official Microsoft Learn modules for AZ-104. Includes free Azure sandboxes (no credit card required) for hands-on practice. Tick every module. **When:** in parallel with this course's modules.

4. **Microsoft Learn — *Microsoft Cybersecurity Architect* learning path (free, Microsoft Learn).** SC-100 content, but the architecture lessons reinforce what AZ-104 tests at depth. Especially useful for Modules 8 and 10. **When:** weeks 10–12.

5. **edX — *Foundations of Cybersecurity* by University of Maryland (free audit; certificate paid).** Reinforces the Saltzer & Schroeder principles in a structured 4-week course. **When:** if you're studying for both AZ-104 and Security+ (SY0-701).

6. **Coursera — *Google Cloud Architecture* (free audit, paid certificate).** Yes, AWS-style courses — useful precisely because they force you to compare cloud architecture patterns across providers. The patterns are largely identical; only the names change. **When:** if you're going into multi-cloud (which most senior cloud admins are).

---

## At-a-glance reading schedule by week

| Week | Primary read | Secondary skim | Practice |
|------|--------------|----------------|----------|
| 1 | Exam Ref AZ-104 ch. 1, this course Modules 1–2 | CAF *Ready* section | Microsoft Learn AZ-104 sandbox 1 |
| 2 | Modules 3–4, Exam Ref ch. 2 | Mark Russinovich blog "Storage" series | Sandbox 2 |
| 3 | Module 5, Exam Ref ch. 3 | Adam Marczak VM videos | Sandbox 3, John Savill compute crash |
| 4 | Module 6, Brendan Burns *K8s Up & Running* ch. 1–4 | Heineken case (in Module 6 Reading.md) | Sandbox 4 |
| 5 | Module 7, Exam Ref ch. 4 | Stanford CS-144 networking lecture 1–3 | Sandbox 5 |
| 6 | Module 8 + Andy Greenberg *Sandworm* ch. on Maersk | NIST CSF 2.0 *Protect* function | Sandbox 6 + Practice Exam 1 |
| 7 | Module 9, Exam Ref ch. 5 | NIST CSF 2.0 *Recover* function | Sandbox 7 |
| 8 | Module 10, Exam Ref ch. 6 | NIST SP 800-207 sections 2–3 | Sandbox 8 + Practice Exam 2 |
| 9 | Capstone deliverables 1–3 | Nadella *Hit Refresh* (executive context) | — |
| 10 | Capstone deliverables 4–5 | John Savill networking + storage crams | — |
| 11 | Capstone deliverables 6–7 + cross-cutting consistency | Microsoft Mechanics monthly digest | — |
| 12 | Capstone HITRUST self-assessment | NIST CSF 2.0 *Govern* function | — |
| 13 | Final review of all 10 cheat sheets | Skim weakest 2 modules' Reading.md | Final Mock Exam |
| 14 | Exam day | — | EXAM |

---

> "The bibliography is the most underrated section of any certification course." — adapted from Atul Gawande, *The Checklist Manifesto* (Picador, 2009).
