# Course Content Spec — for agents building new certification courses

> **CRITICAL: This is THE authoritative spec. Every new course must match it exactly so the site stays consistent.**
> All work happens under `/Users/syed/Projects/Certification-Prep-Preview/`. Never touch `/Users/syed/Projects/Certification-Prep/` — that is the production clone.

---

## 1. Directory layout per course

```
<NN-Course-Slug>/
  README.md                              # Course overview (mirror 01-Scrum-Master/README.md)
  Flashcards.md                          # Master flashcards (Q:/A: H2-sectioned, see spec §6)
  Module-01-<Slug>/
    Reading.md
    Videos.md
    Quiz.md
    Cheat-Sheet.md
  Module-02-<Slug>/
    Reading.md
    Videos.md
    Quiz.md
    Cheat-Sheet.md
  ... (repeat for all modules)
  Practice-Exams/
    Practice-Exam-1.md
    Practice-Exam-2.md
    Final-Mock-Exam.md
```

Course folder numbering (DO NOT CHANGE):
- `03-AWS-Cloud-Practitioner`
- `04-AWS-Solutions-Architect-Associate`
- `05-Azure-Fundamentals`
- `06-Azure-Administrator`
- `07-AWS-AI-Practitioner`
- `08-Azure-AI-Engineer`
- `09-CompTIA-Security-Plus`

---

## 2. Voice & tone (match existing Scrum/PMP courses)

The existing courses are **story-driven, friendly, exam-pragmatic**. Read these files to internalize the voice:

- `/Users/syed/Projects/Certification-Prep-Preview/01-Scrum-Master/Module-01-Agile-Mindset/Reading.md` ← **gold standard for Reading.md**
- `/Users/syed/Projects/Certification-Prep-Preview/01-Scrum-Master/Module-01-Agile-Mindset/Quiz.md` ← **gold standard for Quiz.md**
- `/Users/syed/Projects/Certification-Prep-Preview/01-Scrum-Master/Module-01-Agile-Mindset/Cheat-Sheet.md` ← **gold standard for Cheat-Sheet.md**
- `/Users/syed/Projects/Certification-Prep-Preview/01-Scrum-Master/Module-01-Agile-Mindset/Videos.md` ← **gold standard for Videos.md (YouTube SEARCH URLs, not direct video URLs)**
- `/Users/syed/Projects/Certification-Prep-Preview/01-Scrum-Master/Practice-Exams/Practice-Exam-1.md` ← **gold standard for Practice-Exam-N.md**
- `/Users/syed/Projects/Certification-Prep-Preview/01-Scrum-Master/Flashcards.md` ← **gold standard for Flashcards.md**

Voice rules:
- Open every module with a **story or analogy** (Tony's pizza shop style)
- Use **emojis as section markers** (🎯 🔬 ⚠️ 📚 ✅) — same density as existing files
- Tables for comparisons, not walls of prose
- **"Trap on the exam:"** callouts where applicable
- Memory hooks ("MEMORIZE THIS") for things that *will* be tested
- End every Reading.md with: Module Summary → Next Steps → Further Reading

---

## 3. Reading.md spec

**Length:** 250–450 lines (Scrum modules ≈ 220 lines; PMP modules ≈ 300; cloud/security can be a bit longer because there's more concrete tech to cover)

**Required structure (in this order):**
1. `# Module N: <Title> 🎯` (h1 with emoji)
2. `> **Why this module matters:** ...` (one-line blockquote)
3. `## 🍕 A Story:` opening story or analogy (1–3 paragraphs)
4. Core content — multiple `##` sections with concrete examples, code/CLI snippets where relevant
5. **Tables** for comparisons (services side-by-side, e.g. EC2 vs Lambda vs ECS)
6. `## ⚠️ Common Misconceptions` or `## 🚨 Exam Traps`
7. `## 🎓 Key Terms To Know (Add to Anki!)` — table of term/definition pairs
8. `## ✅ Module N Summary` — bullet list of what they now know
9. **Next steps** — links to Videos / Quiz / Cheat-Sheet for this module + next module
10. `## 📚 Further Reading (Optional)` — links to official docs (e.g. AWS Well-Architected, NIST CSF)

**Technical accuracy bar:** Cloud and security content MUST be factually correct for the current exam version listed. When in doubt, prefer the official cert guide language.

---

## 4. Videos.md spec

**Critical pattern — YouTube SEARCH URLs not direct video URLs.** Direct video links rot; search URLs always return current results.

Example: `https://www.youtube.com/results?search_query=AWS+EC2+Stephane+Maarek` (not `https://youtube.com/watch?v=XYZ`).

**Required structure:**
1. Inline `<style>` block at the top — **copy verbatim** from `01-Scrum-Master/Module-01-Agile-Mindset/Videos.md` lines 1–19
2. `# 🎥 Module N Videos: <Title>`
3. `> **How to use:**` intro blockquote
4. `## ⭐ Essential watching (~XX min)` — 3–4 video cards in `<div class="vg-grid">`
5. `## 📚 Recommended (~XX min)` — 2–3 cards
6. `## 🍿 Optional deep dives` — 2–3 cards
7. `## 🏆 Best channels to subscribe to` — table
8. `## ✅ After watching` — 5 reflection questions

**Card template (use EXACTLY this HTML):**
```html
<a class="vg-card" href="https://www.youtube.com/results?search_query=<URL-encoded query>" target="_blank" rel="noopener">
  <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>  <!-- or recommended / optional -->
    <p class="vg-title"><Video title></p>
    <p class="vg-creator"><Channel/Creator></p>
    <span class="vg-duration">⏱ X min · <short note></span>
  </div>
</a>
```

**Recommended channels by domain:**
- AWS: Stephane Maarek, freeCodeCamp, AWS Training and Certification, Be A Better Dev, ExamPro, Tutorials Dojo
- Azure: John Savill's Technical Training, Adam Marczak — Azure for Everyone, Microsoft Learn, Tim Warner, NetworkChuck (basics)
- AI/ML: Andrej Karpathy, 3Blue1Brown, Two Minute Papers, Microsoft Reactor, AWS Machine Learning, DeepLearning.AI
- Security: Professor Messer (THE Security+ channel), Dion Training, NetworkChuck, John Hammond, IppSec

---

## 5. Quiz.md spec

**Length:** 24+ questions (current Scrum quizzes have 24)

**Required structure:**
1. `# ✏️ Module N Quiz: <Title>`
2. `> **Instructions:** ...` blockquote with target score (e.g. "Aim for 20/24 minimum")
3. `## Questions`
4. Questions formatted as:
   ```
   ### Q1. <question text>
   A. <option>
   B. <option>
   C. <option>
   D. <option>

   ---
   ```
   (use `### QN.` heading; A/B/C/D each on own line; `---` separator between questions)
5. `## 🎯 Answers + Explanations`
6. For each: `### Q1: **<letter>. <answer text>**` followed by 2–4 lines of explanation
7. `## 📊 Score Yourself` — scoring rubric
8. `## 🃏 Add To Your Flashcards` — short bulleted list
9. Final arrow link to next page

**The quiz engine (in `assets/quiz.js`) auto-detects this format. DO NOT add custom HTML/JS to quizzes.**

---

## 6. Cheat-Sheet.md spec

**Length:** ~100–140 lines, designed to print on 1–2 pages

**Required structure:**
1. `# 📋 Module N Cheat Sheet: <Title>`
2. `> One page. Print it. Tape it to your monitor. Review before the exam.`
3. Tables and code-fenced diagrams (no large paragraphs)
4. Memory mnemonics where useful
5. `## 🏆 Exam Power Phrases` — what's usually right / usually wrong
6. `## ⚠️ Anti-Patterns To Recognize` (where applicable to the domain)
7. `## ✏️ Quick Self-Check` — 5 self-quiz prompts
8. Next-step arrow link

---

## 7. Flashcards.md spec

**Top of file: copy lines 1 through the closing `</script>` (line 267) of `01-Scrum-Master/Flashcards.md` verbatim** (the interactive widget HTML + CSS + JS). Change only:
- `STORAGE_KEY = 'fc-progress-<course-id>'` (e.g. `fc-progress-aws-clf`)

**After the closing `</script>`:** the markdown source of cards, in this format:
```markdown
# 🃏 <Course> Master Flashcards

> **How to use:** ...

---

## 📦 SECTION 1: <SECTION NAME>

**Q:** <question>
**A:** <answer>

**Q:** <question>
**A:** <answer>

---

## 📦 SECTION 2: <NAME>

**Q:** ...
**A:** ...
```

**Target card count:** 60–100 cards organized into 5–9 sections matching module structure.

---

## 8. Practice Exam spec

Each course has THREE files in `Practice-Exams/`:
- `Practice-Exam-1.md` — after first half of modules
- `Practice-Exam-2.md` — after all modules
- `Final-Mock-Exam.md` — full-length, real-exam conditions

**Per-cert mock exam parameters (from the official exam blueprints):**

| Cert | Q count | Time | Pass % |
|---|---|---|---|
| AWS Cloud Practitioner (CLF-C02) | 65 | 90 min | 70% (700/1000) |
| AWS Solutions Architect Associate (SAA-C03) | 65 | 130 min | 72% (720/1000) |
| Azure Fundamentals (AZ-900) | 40–60 | 45 min | 70% (700/1000) |
| Azure Administrator (AZ-104) | 40–60 | 100 min | 70% (700/1000) |
| AWS AI Practitioner (AIF-C01) | 65 | 120 min | 70% (700/1000) |
| Azure AI Engineer (AI-102) | 40–60 | 100 min | 70% (700/1000) |
| CompTIA Security+ (SY0-701) | 90 (incl. PBQs) | 90 min | 750/900 |

**Sizing:**
- Practice-Exam-1: half-length (~half of the final mock count)
- Practice-Exam-2: ~75% of mock length
- Final-Mock-Exam: exact real-exam count

**Format** — match `01-Scrum-Master/Practice-Exams/Practice-Exam-1.md`:
1. `# 🧪 Practice Exam N — <Cert> (<Style>)`
2. `> **Conditions:** Set a XX-minute timer. NN questions. Treat it like the real thing.`
3. `> **Pass mark:** XX/NN (XX%)`
4. `## 📝 Questions` — numbered `### 1.` `### 2.` etc. with A/B/C/D options
5. `## 🎯 Answer Key (No Cheating!)` — packed grid format like Scrum's
6. `## 📊 Scoring` table
7. `## 🔍 Review Process`
8. Arrow link to next exam

**Security+ specifically:** include 2–3 PBQ-style scenario questions per practice exam (e.g. "Match the attack type to the indicator" — present as scenario + multi-part answer).

---

## 9. Course README.md spec

Mirror `01-Scrum-Master/README.md`:
1. Front matter:
   ```
   ---
   permalink: /<NN-Course-Slug>/
   title: <Course Title> Track
   ---
   ```
2. `# <emoji> <Course> Track (<Cert ID>)`
3. Goal / Duration / Cost blockquote
4. `## 🎯 What You'll Learn`
5. `## 📚 The N Modules` — table with module #, title, time, master concept
6. Total study time line
7. `## 🧪 Practice Exams (Located in Practice-Exams/)` — when-to-take table
8. `## 📖 The Single Most Important Resource` — link to official cert guide
9. `## 🎓 What Is The <Cert> Exam?` — table of details
10. `## 🚦 Recommended Path` — 4-week or 8-week study plan
11. `## ⚠️ The 7 Most Common Reasons People Fail`
12. `## 🎬 Start Here` — arrow link to Module 1

---

## 10. Exam blueprints (USE THESE to organize modules)

### AWS Cloud Practitioner (CLF-C02) — 8 modules
Domain weights:
- Cloud Concepts (24%)
- Security & Compliance (30%)
- Cloud Technology & Services (34%)
- Billing, Pricing & Support (12%)

Suggested modules:
1. Cloud & AWS Fundamentals (regions, AZs, edge locations)
2. Core Compute (EC2, Lambda, ECS, Fargate)
3. Core Storage (S3, EBS, EFS, Glacier, Storage Gateway)
4. Networking & CDN (VPC, Route 53, CloudFront, ELB)
5. Databases (RDS, DynamoDB, Aurora, ElastiCache)
6. Security, Identity & Compliance (IAM, KMS, Shield, GuardDuty, shared responsibility)
7. Management, Monitoring & Pricing (CloudWatch, CloudTrail, Trusted Advisor, Cost Explorer)
8. Well-Architected Framework & Migration

### AWS Solutions Architect Associate (SAA-C03) — 10 modules
Domain weights:
- Design Resilient Architectures (26%)
- Design High-Performing Architectures (24%)
- Design Secure Architectures (30%)
- Design Cost-Optimized Architectures (20%)

Suggested modules:
1. AWS Foundations & Well-Architected Framework
2. IAM, Organizations, SCPs, Cross-Account
3. EC2 Deep Dive (instance families, placement groups, ASGs, ELB types)
4. VPC Deep Dive (subnets, NAT, VPC endpoints, Transit Gateway, peering, Direct Connect)
5. S3 Deep Dive (storage classes, lifecycle, encryption, replication, S3 Transfer Acceleration)
6. Databases (RDS Multi-AZ vs Read Replicas, Aurora, DynamoDB, ElastiCache, Redshift)
7. Decoupling & Application Integration (SQS, SNS, EventBridge, Step Functions, Kinesis)
8. Caching, CDN & Edge (CloudFront, Global Accelerator, ElastiCache, DAX)
9. Monitoring, Logging & Cost Optimization (CloudWatch, CloudTrail, X-Ray, Compute Optimizer)
10. Disaster Recovery, Migration & Hybrid (DR strategies, DMS, SMS, Snow family, Storage Gateway)

### Azure Fundamentals (AZ-900) — 6 modules
Domain weights:
- Cloud concepts (25–30%)
- Azure architecture and services (35–40%)
- Azure management and governance (30–35%)

Suggested modules:
1. Cloud Concepts (IaaS/PaaS/SaaS, public/private/hybrid, CapEx vs OpEx, scaling)
2. Core Azure Architecture (regions, AZs, resource groups, subscriptions, mgmt groups)
3. Core Azure Services (compute, networking, storage, databases)
4. Identity, Governance & Compliance (Entra ID, RBAC, Policy, Locks, Defender)
5. Cost Management & SLAs (Pricing calculator, Cost Mgmt, SLAs, service lifecycle)
6. Azure Tools (Portal, CLI, PowerShell, Cloud Shell, ARM/Bicep, Monitor)

### Azure Administrator (AZ-104) — 10 modules
Domain weights:
- Manage Azure identities and governance (20–25%)
- Implement and manage storage (15–20%)
- Deploy and manage Azure compute resources (20–25%)
- Implement and manage virtual networking (15–20%)
- Monitor and maintain Azure resources (10–15%)

Suggested modules:
1. Subscriptions, Management Groups & Resource Hierarchy
2. Microsoft Entra ID & RBAC
3. Storage Accounts & Blob Storage (incl. lifecycle, encryption, immutability)
4. Azure Files & File Sync
5. Virtual Machines (sizing, availability sets/zones, disks, scale sets)
6. App Services & Containers (Web Apps, ACI, AKS basics)
7. Virtual Networks (VNets, subnets, peering, VPN gateway, ExpressRoute)
8. Network Security (NSGs, ASGs, Azure Firewall, App Gateway, Load Balancer)
9. Backup, Recovery & Migration (Backup, Site Recovery, Azure Migrate)
10. Monitoring & Governance (Monitor, Log Analytics, Policy, Tags, Locks)

### AWS AI Practitioner (AIF-C01) — 8 modules
Domain weights:
- Fundamentals of AI/ML (20%)
- Fundamentals of Generative AI (24%)
- Applications of Foundation Models (28%)
- Guidelines for Responsible AI (14%)
- Security, Compliance & Governance for AI (14%)

Suggested modules:
1. AI/ML Fundamentals (supervised, unsupervised, RL, neural nets, common terms)
2. ML Workflow on AWS (data → train → deploy → monitor; SageMaker overview)
3. Generative AI Fundamentals (LLMs, embeddings, tokens, parameters, hallucinations)
4. AWS GenAI Stack (Bedrock, foundation models catalog, Amazon Q, Titan, Nova)
5. Prompt Engineering & RAG (prompting techniques, Knowledge Bases for Bedrock, agents)
6. Fine-Tuning & Customization (RAG vs fine-tuning vs continued pre-training; cost trade-offs)
7. Responsible AI (bias, fairness, transparency, explainability, Guardrails for Bedrock)
8. AI Security & Governance (data privacy, PII, model evaluation, compliance, Bedrock Guardrails)

### Azure AI Engineer (AI-102) — 8 modules
Domain weights (per the latest study guide):
- Plan and manage an Azure AI solution (15–20%)
- Implement decision support solutions (10–15%)
- Implement computer vision solutions (15–20%)
- Implement NLP solutions (15–20%)
- Implement knowledge mining & document intelligence (15–20%)
- Implement generative AI solutions (10–15%)

Suggested modules:
1. Azure AI Services Overview & Provisioning (resources, keys, endpoints, SDKs)
2. Responsible AI on Azure (Content Safety, transparency notes, RAI dashboard)
3. Computer Vision (Image Analysis 4.0, Face, Custom Vision, OCR/Read)
4. Natural Language Processing (Language service, Translator, Speech)
5. Document Intelligence & Knowledge Mining (Form Recognizer, AI Search, vector search)
6. Conversational AI (Bot Service, Language Understanding, QnA Maker successor)
7. Azure OpenAI Service (model catalog, deployments, prompts, embeddings)
8. Build GenAI Apps (Azure AI Studio, prompt flow, RAG, evaluation, monitoring)

### CompTIA Security+ (SY0-701) — 10 modules
Domain weights:
- General Security Concepts (12%)
- Threats, Vulnerabilities & Mitigations (22%)
- Security Architecture (18%)
- Security Operations (28%)
- Security Program Management & Oversight (20%)

Suggested modules:
1. Security Fundamentals (CIA triad, AAA, security controls types/categories, Zero Trust)
2. Cryptography & PKI (symmetric/asymmetric, hashing, digital signatures, PKI, certs)
3. Identity & Access Management (authentication factors, federation, SSO, MFA, password policies)
4. Threats & Threat Actors (APT, insider, nation-state, hacktivists, scripts kiddies, attack vectors)
5. Vulnerabilities & Attacks (OWASP Top 10, malware types, network attacks, social engineering)
6. Network Security (firewalls, IDS/IPS, segmentation, VPNs, secure protocols)
7. Endpoint, Mobile & Cloud Security (EDR, MDM, cloud security models, container/serverless sec)
8. Security Operations (SIEM, SOAR, logging, IR, forensics, threat hunting)
9. Governance, Risk & Compliance (frameworks: NIST CSF/ISO 27001/CIS, risk mgmt, BIA, BCP/DR)
10. Application & Data Security (SDLC, secure coding, DLP, classification, retention, masking)

---

## 11. Quality bar (review checklist before marking a module done)

- [ ] Reading.md opens with a story/analogy
- [ ] Reading.md has at least 3 tables / comparisons
- [ ] Reading.md has at least 1 "Exam Trap" or "Common Misconception" section
- [ ] Reading.md ends with Summary → Next Steps → Further Reading
- [ ] Videos.md uses YouTube SEARCH URLs (not direct video URLs)
- [ ] Videos.md has at least 8 cards (4 essential + 2-3 recommended + 2 optional)
- [ ] Quiz.md has ≥ 24 questions in the exact format the engine expects
- [ ] Every quiz question has an answer + explanation
- [ ] Cheat-Sheet.md fits on 1–2 printed pages
- [ ] No factually incorrect cloud/security claims
- [ ] Internal links use relative paths (e.g. `../Module-02-X/Reading.md`)
- [ ] Final-Mock-Exam.md question count matches the real exam exactly

---

## 12. Anti-rules (DO NOT DO)

- ❌ Do NOT link to direct YouTube videos — use search URLs
- ❌ Do NOT touch `01-Scrum-Master/`, `02-PMP/`, `index.html`, `_data/navigation.yml`, or `_layouts/default.html` — the orchestrator updates those at the end
- ❌ Do NOT use absolute paths in Markdown links (use `./` and `../`)
- ❌ Do NOT invent AWS/Azure services or features
- ❌ Do NOT add custom CSS/JS inside Quiz.md (engine auto-detects format)
- ❌ Do NOT include exam dumps or copyrighted question text
- ❌ Do NOT commit anything — orchestrator handles git after review
