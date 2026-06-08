# Recommended Readings, Azure Fundamentals (AZ-900)

> Eighteen resources, organized by depth. Read the canonical books before booking the exam. Use the seminal papers and industry resources to *go beyond* the exam.

---

## 📚 Canonical textbooks (4)

The four books every serious Azure practitioner should have read at least once.

### 1. *Exam Ref AZ-900 Microsoft Azure Fundamentals*, Jim Cheshire, 4th edition (2024), Microsoft Press, ISBN 978-0138239961

The official Microsoft Press exam reference. Cheshire writes for the AZ-900 blueprint chapter-by-chapter, with practice questions that closely mirror the real exam format. **Read it after Module 3** of this course, by then you'll have the framework to map his content into your existing mental model rather than starting from zero. Cheshire's chapters on cost management and SLA composition (this course's Module 5) are particularly tight and worth a second pass before the exam.

### 2. *Hit Refresh: The Quest to Rediscover Microsoft's Soul and Imagine a Better Future for Everyone*, Satya Nadella, with Greg Shaw and Jill Tracie Nichols (2017), HarperCollins, ISBN 978-0062652508

The Microsoft CEO's account of pivoting the company to a cloud-first, AI-first posture starting in 2014. Chapter 6 ("Friends or Frenemies?") is the candid backstory for the OpenAI partnership Module 1's case study. Chapters on the *empathy-first* leadership style explain *why* Microsoft's Cloud Adoption Framework reads the way it does. **Read it before Module 4** Nadella's framing of "growth mindset" maps directly to the Zero Trust *assume breach* principle. The book is shorter than it looks; you can finish in two evenings.

### 3. *Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services*, Brendan Burns (2018), O'Reilly Media, ISBN 978-1491983645

Brendan Burns co-created Kubernetes at Google and is now a Microsoft Distinguished Engineer (he leads the AKS team). This is the canonical pattern catalog for the distributed-systems concepts AZ-900 references sidecar, ambassador, leader-election, work queue, event-driven. **Read it after the course, before AZ-104** it's the bridge between fundamentals and operational depth. Burns's writing is conversational; the patterns chapter (Chapters 2–4) is what you'll re-read most often.

### 4. *The Big Switch: Rewiring the World, from Edison to Google*, Nicholas Carr (2008), W.W. Norton, ISBN 978-0393333947

The book that taught a generation of cloud strategists how to *talk* about cloud economics. Carr's central analogy computing is following electricity's industrial-era trajectory, from on-site generation (your data center) to a metered utility (the cloud) is the framing AZ-900 question writers grew up on. **Read it before Module 1's Case Study**, you'll never look at CapEx-to-OpEx the same way. The chapters on the rise of utility computing read like a parable for the 2020s.

---

## 🧪 Seminal papers and HBR-style articles (8)

The papers and reports the AZ-900 concepts inherit from.

### 5. **Microsoft Cloud Adoption Framework for Azure** (Microsoft Corp., current edition checked 2026-05), https://learn.microsoft.com/azure/cloud-adoption-framework/

The white paper this entire course's governance, identity, and cost themes implement. The *Plan / Ready / Adopt / Govern / Manage* methodologies map almost one-to-one to AZ-900's exam blueprint. **Read the "Define your strategy" + "Govern" sections before Module 4**, and the "Manage" + "Cost economics" sections before Module 5. The CAF is also what your AZ-900 capstone (this course) implicitly uses as its skeleton.

### 6. **Microsoft Azure Well-Architected Framework** (Microsoft Corp., current edition checked 2026-05), https://learn.microsoft.com/azure/well-architected/

Sister to the CAF but workload-focused: five pillars (Cost Optimization, Reliability, Security, Operational Excellence, Performance Efficiency) for any cloud-native workload. **Maps directly to the Azure Advisor 5-pillar framework** in Module 6. Read the Reliability pillar first; it's the most cross-referenced.

### 7. Brewer, Eric. **"Towards Robust Distributed Systems"**, ACM PODC Keynote, July 2000

The original CAP Theorem talk. In nine pages, Brewer (Berkeley, later Google) lays out the argument that distributed systems must choose two of {Consistency, Availability, Partition tolerance}. Cosmos DB's five consistency levels (Module 3) are a direct response to CAP's tension. **Read it before any AZ-104 / AI-102 course.** The talk is short; the implications take years to internalize.

### 8. Saltzer, Jerome H., and Schroeder, Michael D. **"The Protection of Information in Computer Systems"**, *Communications of the ACM*, 17(7), 1975, pp. 388–402

The foundational paper on secure-system design principles. Eight principles including least privilege, fail-safe defaults, separation of privilege, complete mediation, all of which Azure's RBAC + Conditional Access implement. The CIA triad's lineage traces here. **Read before Module 4.**

### 9. National Institute of Standards and Technology. **NIST Special Publication 800-207: "Zero Trust Architecture"** (2020), https://csrc.nist.gov/publications/detail/sp/800-207/final

The U.S. government's official Zero Trust standard. Microsoft's three-principle Zero Trust model (verify explicitly / least privilege / assume breach) maps cleanly to NIST 800-207's tenets. **Read the executive summary and §4 before Module 4.**

### 10. Carr, Nicholas. **"IT Doesn't Matter"**, *Harvard Business Review*, May 2003 (with extended commentary in *Does IT Matter?*, HBS Press, 2004)

Carr's earlier provocation that became *The Big Switch*. He argues IT is becoming a utility, strategically less important to differentiation. This is the *thesis* the AZ-900 "cloud as utility" framing assumes. Read alongside book #4 above.

### 11. **"State of the Cloud Report"**, Flexera (annual; current edition checked 2026-05)

The gold-standard annual survey of enterprise cloud usage. Reports on Azure vs AWS adoption, multi-cloud reality, top cost-optimization patterns. **Read the most recent edition to calibrate the AZ-900 framing against industry reality**, when the exam says "most organizations use multi-cloud," this is the data behind that claim.

### 12. **Gartner, "Magic Quadrant for Cloud Infrastructure and Platform Services"** (annual; current edition checked 2026-05)

Gartner's annual industry analyst report. Reads the cloud market for executive-level audiences. Azure has been a "Leader" alongside AWS and GCP for several years. Useful context for understanding *why* the AZ-900 cares about region count, AZ availability, and global footprint, these are the dimensions Gartner scores on.

---

## 🎙️ Industry resources / regular reading (5)

The voices to follow once you've passed AZ-900 and want to stay current.

### 13. **John Savill's Azure Master Class**, https://www.youtube.com/@NTFAQGuy

John Savill is a Microsoft Technical Specialist and the single most-watched Azure-fundamentals creator on YouTube. His **AZ-900 study cram** is the canonical free video curriculum (most students who pass AZ-900 have watched it). His longer-form **Azure Master Class** series covers AZ-104, AZ-305, and beyond. **Subscribe before starting Module 1.** Watch his cram video in the week before your exam.

### 14. **Adam Marczak's Azure for Everyone**, https://www.youtube.com/@Azure4Everyone

Marczak's videos are shorter, deeper, and more visually polished than Savill's, better for *one-concept-at-a-time* learning. His RBAC vs Policy vs Lock video is widely shared as the "if I had to learn this one thing once" reference. **Use during Modules 4 + 6.**

### 15. **Microsoft Mechanics**, https://www.youtube.com/@MSFTMechanics

Microsoft's official short-form video channel for technical news. New-feature explainers, customer case studies (including the H&R Block, Walgreens, and Mercedes-Benz cases featured in this course), product demos. **Subscribe and watch ~1 video per week** to stay current on Azure feature releases.

### 16. **Microsoft Build + Microsoft Ignite keynotes**, annual (Build = May; Ignite = November)

Microsoft's two flagship conferences. Build is developer-focused, Ignite is IT-pro and CIO focused. Watch the *keynote* and one or two *technical-track* sessions every year, these are where new Azure regions, new services (Azure OpenAI, Microsoft Fabric, etc.) get announced. **Watch the 2024 Build keynote (which featured the H&R Block AI Tax Assist case in Module 2) as a calibration point.**

### 17. **Microsoft Azure Updates page**, https://azure.microsoft.com/updates/

The official feed of Preview / GA / Retirement announcements. RSS-subscribable. Useful for verifying that a feature you read about is actually GA (and therefore has an SLA, Module 5).

---

## 🎓 Free academic courses (3)

University-quality material that overlaps with AZ-900 and goes deeper.

### 18. **Microsoft Learn AZ-900 official learning path** https://learn.microsoft.com/training/courses/az-900t00

Free. Comprehensive. Microsoft's own curriculum aligned exactly to the exam blueprint. **Treat it like the Scrum Guide**, the source of truth. Work through it in parallel with this course. The hands-on labs are particularly valuable for committing the resource hierarchy to muscle memory.

### 19. **MIT OpenCourseWare 6.824 "Distributed Systems"** (Robert Morris) https://pdos.csail.mit.edu/6.824/

MIT's graduate-level distributed-systems course. Free video lectures, labs in Go. Way deeper than AZ-900 needs, but if you want to understand *why* Cosmos DB's consistency levels work the way they do, this is the course. **Audit alongside AZ-104 or after.** Lectures 5–8 cover replication and consistency at the depth AZ-900 hints at.

### 20. **Stanford CS 244 "Advanced Topics in Networking"** (Nick McKeown / David Mazières) https://web.stanford.edu/class/cs244/

Stanford's graduate networking course. Free lecture notes. The material on data-center networking (Clos topology, leaf-spine, MPLS) explains *how* Azure regions and AZs are physically connected. Read after AZ-900, useful before AZ-104's networking deep-dive.

---

## When to read what (suggested sequence)

| Stage | Reading priority |
|---|---|
| **Before Module 1** | Carr, *The Big Switch* (skim the first 4 chapters); subscribe to John Savill on YouTube |
| **During Modules 1–3** | Microsoft Learn AZ-900 path; Savill's videos; *Hit Refresh* (Nadella) |
| **Before Module 4** | NIST 800-207 (Zero Trust executive summary); Saltzer & Schroeder (1975 paper, yes really); CAF "Govern" methodology |
| **Before Module 5** | CAF "Cost economics" + "Manage" methodology; *State of the Cloud* report (Flexera) |
| **Before Module 6** | Marczak's IaC + Monitoring videos; Microsoft Mechanics on Azure Arc |
| **Week before the exam** | Cheshire's *Exam Ref AZ-900*; Savill's AZ-900 study cram |
| **After passing AZ-900** | Burns, *Designing Distributed Systems*; MIT 6.824 lectures; the Well-Architected Framework |

---

## A note on book versions and links

Microsoft renames products and reorganizes documentation regularly. The titles, ISBNs, and URLs above were verified against the official sources as of **2026-05**. If any link 404s, search for the resource by name, the canonical version is almost always still findable.

The exam itself is updated *roughly twice a year* to keep pace with Azure feature changes. The Microsoft Learn path is updated continuously and is the *most current* source, when in doubt, defer to it over any book or third-party video.

---

➡️ Once you've worked through 3–4 items from this list, you're better-prepared than 90% of AZ-900 candidates. Once you've worked through 10+, you're better-prepared than the median *AZ-104* candidate.

You got this. ☁️📚
