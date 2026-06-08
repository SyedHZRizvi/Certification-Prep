---
permalink: /09-CompTIA-Security-Plus/Recommended-Readings/
title: "Recommended Readings, CompTIA Security+ (SY0-701)"
---

# Recommended Readings, CompTIA Security+ (SY0-701) 🛡️📚

> The Security+ exam is multiple-choice; security as a profession is a literature. This page is curated to take you from "passing the exam" to "able to hold your own at a Stanford CS155 seminar, an MIT 6.5660 office hours session, or a Bruce-Schneier-comments-thread discussion." Read the materials in this order if you want to develop true depth.

---

## 1. Canonical textbooks (the field's spine)

These are the books that working security engineers, MSc students, and PhDs cite. Buy or borrow whichever ones speak to you most; you do not need all of them.

| Book | Author(s) | Edition / Year | Why it's worth your time | When to engage |
|------|-----------|----------------|--------------------------|----------------|
| **CompTIA Security+ SY0-701 Cert Guide** | Omar Santos | 2024, Pearson IT, ISBN 978-0138293055 | The most rigorous SY0-701-specific book, closest to the exam vocabulary, with end-of-chapter labs | During exam prep; pair with Professor Messer |
| **CompTIA Security+ Study Guide (SY0-701) (Sybex)** | Mike Chapple, David Seidl | 2024, Sybex, ISBN 978-1394211418 | Cleaner prose than Santos; the Sybex practice questions are battle-tested | Alternate primary; many students use both |
| **Get Certified Get Ahead: SY0-701** | Darril Gibson | 2024, YCDA LLC, ISBN 978-1939136101 | The "100 Question Pre-Test" alone is gold; reads like an exam coach | Final 2 weeks before the exam |
| **The Web Application Hacker's Handbook (2nd ed.)** | Dafydd Stuttard, Marcus Pinto | 2011, Wiley, ISBN 978-1118026472 | Dated on tools, eternal on principles. Still the canonical web-attack textbook in 2026 | After Module 5; before Module 10 |
| **Practical Cryptography for Developers** | Svetlin Nakov | 2018, free online at [cryptobook.nakov.com](https://cryptobook.nakov.com/) | The cleanest cryptography intro for non-mathematicians; AES, RSA, ECC, key exchange, digital signatures all in working Python | After Module 2 if you want depth |
| **Security Engineering (3rd ed.)** | Ross Anderson | 2020, Wiley, ISBN 978-1119642787; free online at [cl.cam.ac.uk/~rja14/book.html](https://www.cl.cam.ac.uk/~rja14/book.html) | Cambridge's flagship security text; ~1,100 pages of *system-level* security thinking; required at half the world's MSc-in-security programs | After Sec+, as your "next book." Read it for life. |
| **The Art of Deception** | Kevin Mitnick, William L. Simon | 2002, Wiley, ISBN 978-0764542800 | The social-engineering classic, Mitnick recounting his own attacks. Sobering and entertaining | Read in parallel with Module 5 |
| **Secrets and Lies: Digital Security in a Networked World** | Bruce Schneier | 2000, Wiley, ISBN 978-0471253112 | The book that made security pragmatic instead of cryptographic. Coined attack trees | Anytime; aging beautifully |
| **Beyond Fear: Thinking Sensibly About Security in an Uncertain World** | Bruce Schneier | 2003, Copernicus Books, ISBN 978-0387026206 | The 5-step security trade-off framework taught at Harvard Kennedy School | After Module 9 |
| **Click Here to Kill Everybody** | Bruce Schneier | 2018, W. W. Norton, ISBN 978-0393608885 | IoT/critical-infrastructure security from a public-policy lens | After Module 7 |
| **Cyberinsurance Policy** | Josephine Wolff | 2022, MIT Press, ISBN 978-0262047524 | First serious academic treatment of cyber-insurance, directly relevant to risk-transfer questions in Module 9 | Capstone-stretch reading |

---

## 2. Seminal papers, HBR articles, McKinsey reports

The papers you'll see *referenced* in every serious security textbook. Reading the originals once will give you a depth you cannot get from secondary summaries.

| Paper / report | Authors | Year / venue | Why it matters | Direct link / find via |
|----------------|---------|--------------|----------------|------------------------|
| **The Protection of Information in Computer Systems** | Jerome Saltzer, Michael Schroeder | 1975, *Proceedings of the IEEE* 63(9) | Coined the CIA triad's modern formulation + the design principles (least privilege, fail-safe defaults, complete mediation) | Available free via [web.mit.edu/Saltzer/www/publications/protection/](https://web.mit.edu/Saltzer/www/publications/protection/) |
| **New Directions in Cryptography** | Whitfield Diffie, Martin Hellman | 1976, *IEEE Trans. Information Theory* IT-22(6) | The paper that invented public-key crypto. Diffie & Hellman won the 2015 Turing Award for it. | Free via [ee.stanford.edu/~hellman/publications/24.pdf](https://ee.stanford.edu/~hellman/publications/24.pdf) |
| **A Method for Obtaining Digital Signatures and Public-Key Cryptosystems** | Rivest, Shamir, Adleman | 1978, *CACM* 21(2) | RSA. (They later won the 2002 Turing Award.) | Free via [people.csail.mit.edu/rivest/Rsapaper.pdf](https://people.csail.mit.edu/rivest/Rsapaper.pdf) |
| **The Byzantine Generals Problem** | Leslie Lamport, Robert Shostak, Marshall Pease | 1982, *ACM TOPLAS* | Foundational distributed-trust paper; underlies blockchain and modern fault-tolerant design | [microsoft.com/en-us/research/publication/byzantine-generals-problem](https://www.microsoft.com/en-us/research/publication/byzantine-generals-problem/) |
| **Kerberos: An Authentication Service for Open Network Systems** | Steiner, Neuman, Schiller | 1988, USENIX Winter | The Kerberos protocol Sec+ tests on | Free via USENIX archive |
| **Secure Computer Systems: Mathematical Foundations** | David Bell, Leonard LaPadula | 1973, MITRE Corp. | The mathematical model behind MAC and multi-level security | Public via [DTIC](https://apps.dtic.mil/) |
| **Integrity Considerations for Secure Computer Systems** | Kenneth Biba | 1977, MITRE Corp. | The Biba model, Sec+'s integrity-focused counterpart to Bell-LaPadula | Public via DTIC |
| **Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains** | Hutchins, Cloppert, Amin | 2011, Lockheed Martin | The Cyber Kill Chain | [lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html](https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html) |
| **The Diamond Model of Intrusion Analysis** | Caltagirone, Pendergast, Betz | 2013 | The four-vertex (Adversary/Capability/Infrastructure/Victim) intrusion model | [activeresponse.org/wp-content/uploads/2013/07/diamond.pdf](http://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf) |
| **MITRE ATT&CK: Design and Philosophy** | Strom et al., MITRE | 2018 (updated annually) | The paper behind the framework | [attack.mitre.org](https://attack.mitre.org/) |
| **BeyondCorp: A New Approach to Enterprise Security** | Ward, Beyer (Google) | 2014, *;login:* USENIX 39(6) | Google's operational Zero Trust | [research.google/pubs/pub43231](https://research.google/pubs/pub43231/) |
| **NIST SP 800-207: Zero Trust Architecture** | Rose, Borchert, Mitchell, Connelly | 2020 | The reference architecture | [csrc.nist.gov/publications/detail/sp/800-207/final](https://csrc.nist.gov/publications/detail/sp/800-207/final) |
| **NIST Cybersecurity Framework 2.0** | NIST | 2024 | The framework Sec+ Domain 5 builds on | [nist.gov/cyberframework](https://www.nist.gov/cyberframework) |
| **NIST SP 800-61 Rev 2: Computer Security Incident Handling Guide** | Cichonski, Millar, Grance, Scarfone | 2012 (Rev 3 finalized 2024) | The IR lifecycle Sec+ tests | [csrc.nist.gov/publications/detail/sp/800-61/rev-2/final](https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final) |
| **The Equifax Data Breach (House Oversight Report)** | US House Committee on Oversight | Dec 2018, ~96 pp. | Required reading in Harvard, Stanford, Wharton GRC courses | [oversight.house.gov](https://oversight.house.gov/) |
| **Review of the December 2021 Log4j Event** | US Cyber Safety Review Board | Jul 2022, ~50 pp. | The CSRB's first-ever report; an authoritative after-action | [cisa.gov/cybersecurity-advisories/CSRB](https://www.cisa.gov/topics/cybersecurity-best-practices/executive-order-improving-nations-cybersecurity/cyber-safety-review-board) |
| **McKinsey: Cybersecurity Trends 2024-2026** | McKinsey & Company | Annual report | Useful for board-level framing of trends; cited extensively in CISO interviews | [mckinsey.com/capabilities/risk-and-resilience](https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights) |
| **HBR: A Better Way to Manage Cybersecurity Risk** | Sandberg, Falco et al. | 2022, *Harvard Business Review* | Board-level framing of cyber risk | [hbr.org](https://hbr.org/) (search title) |

---

## 3. Industry resources, blogs, podcasts, newsletters worth subscribing to

These are the resources working security professionals actually consume. Subscribe to 3-5; don't drown.

| Resource | Author/host | What it gives you | Cadence |
|----------|-------------|-------------------|---------|
| **Krebs on Security** | Brian Krebs | Best-in-class investigative reporting on real breaches. Krebs broke Equifax, Target, OPM. Required reading | ~3-4 posts/week |
| **Schneier on Security** | Bruce Schneier | Long-form posts; the canonical security pundit; quarterly *Crypto-Gram* newsletter | ~daily; newsletter monthly |
| **Bleeping Computer** | various | Fast breaking news on CVEs, ransomware, breaches; less editorial polish than Krebs but faster | daily |
| **The Record (by Recorded Future)** | various | Geopolitical / nation-state intel angle | daily-ish |
| **Risky Business** podcast | Patrick Gray | Weekly Australian security news + interviews; the conversational tone the industry runs on | weekly |
| **Smashing Security** podcast | Graham Cluley, Carole Theriault | Lighter / accessible; great for the daily commute | weekly |
| **Darknet Diaries** podcast | Jack Rhysider | Long-form storytelling of named attacks (TJX, Stuxnet, Mt. Gox). High production value | every 2 weeks |
| **SANS Reading Room** | SANS Institute | The largest free repository of security white papers, ~3,500 of them | new papers continually |
| **MITRE ATT&CK Navigator** | MITRE | Interactive map of adversary TTPs, explore by group (APT29, Lazarus, FIN7) | always-on tool |
| **Bruce Schneier's *Cryptogram*** newsletter | Bruce Schneier | Monthly long-form posts + curated security news | monthly |
| **CISA Cybersecurity Alerts** | CISA | US-government advisories on emerging threats + KEV updates | as-published |
| **OWASP Project mailing lists** | OWASP | Active development of the Top 10 + ASVS + Cheat Sheets | weekly digests |

---

## 4. Free academic courses (where to deepen)

These are *free*, hosted by elite universities, and overlap heavily with Sec+ material. Treat them as graduate-level extension after Sec+.

| Course | Institution | Modality | Why it's worth your time | When to engage |
|--------|-------------|----------|--------------------------|----------------|
| **MIT 6.5660 Computer Systems Security** (formerly 6.858) | MIT | Free OCW; lecture videos + complete lab assignments | *The* university course on modern computer-systems security; teaches buffer overflows, ROP, kernel exploits, web-app security with rigor. Heavy programming | After Sec+ if you want hands-on offensive depth. [ocw.mit.edu](https://ocw.mit.edu/courses/6-858-computer-systems-security-fall-2014/) (also new iterations) |
| **Stanford CS155 Computer and Network Security** | Stanford | Free lecture videos via Coursera/YouTube + course site | The defensive complement to MIT 6.5660; covers crypto, web security, malware, network security from a research lens | Parallel to Sec+ or after | [crypto.stanford.edu/cs155](https://crypto.stanford.edu/cs155/) |
| **CMU 18-487 Introduction to Computer and Network Security** | Carnegie Mellon | Slides + papers; less video | Practical SOC-engineering tilt | After Sec+ |
| **University of Cambridge Security Engineering** | Cambridge / Ross Anderson | Free book + lecture notes | The textbook chapters are course material at half the world's MSc programs | Anytime |
| **Coursera: IBM Cybersecurity Analyst Professional Certificate** | IBM via Coursera | Paid via Coursera Plus or financial-aid free | More applied / vocational than the elite-university free options; useful if you want a hands-on workflow tour | Pre-Sec+ if you want easier scaffolding |
| **Coursera: Google Cybersecurity Certificate** | Google via Coursera | Paid or financial-aid free | Modern, exam-adjacent, less rigorous than the MIT/Stanford options | Pre-Sec+ if you're brand new |
| **edX: MIT 6.S897 Cryptography and Cryptanalysis** | MIT | Free audit | Rigorous crypto foundations, pair with Nakov for accessibility | After Module 2 if you love crypto |
| **NPTEL: IIT Kharagpur Cryptography and Network Security** | IIT Kharagpur | Free YouTube lectures | Strong global alternative; very rigorous | After Sec+ |

---

## 5. Hands-on labs (where to *do* security)

| Lab platform | What | Cost |
|--------------|------|------|
| **TryHackMe** | Beginner-friendly guided rooms; great for IR/forensics walkthroughs | Free tier + Premium ($14/mo) |
| **HackTheBox** | More-advanced offensive labs; the industry's de-facto pre-OSCP playground | Free tier + Premium |
| **PortSwigger Web Security Academy** | The single best free web-app security training. Covers every OWASP Top 10 hands-on with the Burp Suite community edition | 100% free |
| **PicoCTF** | Beginner CTFs aimed at high-school + university students, but excellent for adults too | Free |
| **OverTheWire** | Classic Linux/networking challenges. Bandit is the canonical beginner ladder | Free |
| **DVWA / WebGoat / Juice Shop** | Self-hosted vulnerable apps for offline lab practice | Free + self-host |
| **AWS Labs / Azure Sandbox** | Cloud-security lab environments; pair with the AWS/Azure courses on this site | Free with cloud account; small costs for resources |
| **CISA RVA / Cyber Tabletop Exercise Materials** | Pre-built tabletop scenarios, useful for the Capstone | Free |

---

## 6. Where to find the case-study sources

Every case study in this course's modules cites a specific public source. The most useful aggregators for finding case-study material:

- **The DFIR Report**, public walkthroughs of real ransomware engagements with IOCs, MITRE mapping, timeline. [thedfirreport.com](https://thedfirreport.com/)
- **Mandiant M-Trends Annual Report**, dwell time, sectoral breach data. Free download.
- **Verizon Data Breach Investigations Report (DBIR)**, the empirical industry case-study reference. Annual. Free.
- **Microsoft Digital Defense Report**, annual; useful threat-actor data. Free.
- **CrowdStrike Global Threat Report**, annual; competitive-but-comparable to Microsoft's. Free.
- **CISA Advisories**, for each major incident from 2020 onward, CISA usually publishes an advisory.
- **US Cyber Safety Review Board reports**, Log4j (2022), Microsoft (2023, Storm-0558), Lapsus$ (2023). Free.
- **DOJ / SEC filings**, for cases like SolarWinds (SEC v. SolarWinds Corp), Twitter/X DPC investigation, Uber CISO trial. Public dockets.
- **University-published case studies**, Harvard Business School, Stanford GSB, Wharton, MIT Sloan all publish security case studies. Pay-per-case (~$8 each) or free via academic library access.

---

## 7. The shortlist (if you only read 5 things)

For someone who wants to be *seriously good* at security and has very limited time, these five resources deliver the most value:

1. **Ross Anderson, *Security Engineering* (3rd ed.).** Free online. Read the chapters relevant to your work; bookmark the rest.
2. **Bruce Schneier, *Secrets and Lies* + *Beyond Fear*.** Two short books that fundamentally reshape how you think.
3. **MIT 6.5660 lecture videos.** Free. The single best universityish exposure you can get.
4. **The annual Verizon DBIR.** Free. The empirical ground truth.
5. **Krebs on Security**, daily, for 6 months. You will recognize every threat the industry is talking about.

That is the syllabus. Do it and you will be the most-informed person in most CISO interviews you walk into.

---

## 8. A note on currency

Security literature ages fast in tools and slow in principles. The principle papers (Saltzer & Schroeder 1975, Diffie & Hellman 1976, the NIST standards) remain authoritative for decades. The tool-and-tactic books age in 3-5 years. When in doubt, prioritize *principles*, they survive longer than your career.

This list was curated as of 2026-05. Verify ISBN editions before purchase; some titles have newer 2025-2026 editions in development. The NIST documents are versioned; always read the *current* revision.

---

🛡️ Onward, passing the exam is the start, not the finish.

[Back to course README](./README.md) · [Capstone Project](./Capstone-Project.md)
