---
permalink: /04-AWS-Solutions-Architect-Associate/Recommended-Readings/
title: Recommended Readings — AWS Solutions Architect Associate (SAA-C03)
---

# Recommended Readings — AWS Solutions Architect Associate (SAA-C03) 📚

> **Why this exists.** Passing SAA-C03 is the floor, not the ceiling. The materials below are what differentiate someone who memorized service names from someone who can defend a design at re:Invent, a Harvard MBA case discussion, or an MIT systems-engineering seminar. Engage with them in the order suggested; not all at once.

---

## 📖 Canonical textbooks (3–5 you will return to for the rest of your career)

1. **Stewart, Ben Piper & David Clinton (2024).** *AWS Certified Solutions Architect Study Guide: Associate (SAA-C03) Exam* (Sybex / Wiley). ISBN: 978-1394157013.
   *Why and when:* The canonical paper textbook for the exam. Read alongside Modules 1–3 of this course as a second voice on the same material. Stewart's worked examples deepen the AWS-specific jargon.

2. **Kleppmann, Martin (2017).** *Designing Data-Intensive Applications* (O'Reilly). ISBN: 978-1449373320.
   *Why and when:* The single best book on distributed systems for any cloud architect. Chapters 5 (Replication), 6 (Partitioning), 7 (Transactions), 8 (Distributed Systems Trouble), and 9 (Consistency & Consensus) directly underpin Module 6 (Databases) and Module 8 (Edge). Even after you pass SAA, you will re-read this every 12 months.

3. **Kim, Gene; Behr, Kevin & Spafford, George (2013).** *The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win* (IT Revolution Press). ISBN: 978-0988262508.
   *Why and when:* Novelized but pedagogically rigorous; the Operational Excellence pillar of Well-Architected without the jargon. Read between Modules 5 and 6 — it'll change how you think about deploy pipelines.

4. **Bass, Len; Weber, Ingo & Zhu, Liming (2015).** *DevOps: A Software Architect's Perspective* (Addison-Wesley). ISBN: 978-0134049847.
   *Why and when:* Academic-tone companion to *The Phoenix Project*. Required reading if you're combining SAA prep with a DevOps role.

5. **Beyer, Betsy et al. (2016 & 2018).** *Site Reliability Engineering* and *The Site Reliability Workbook* (O'Reilly — both free online at `sre.google/books`). ISBN: 978-1491929124 (vol 1).
   *Why and when:* The Google SRE Book. Chapters 6 (Monitoring), 9 (Simplicity), 11 (Being On-Call), 16 (Tracking Outages), 18 (Software Engineering in SRE). Read in parallel with Module 9 (Monitoring).

6. **Limoncelli, Tom; Hogan, Christina & Chalup, Strata (2014).** *The Practice of Cloud System Administration* (Addison-Wesley). ISBN: 978-0321943187.
   *Why and when:* Operational reference for hybrid environments. Particularly useful before Modules 4 (VPC) and 10 (Hybrid).

---

## 📄 Seminal papers and HBR / McKinsey / WSJ analysis (free reading)

### Distributed systems foundations (academic — free PDFs)

7. **Brewer, Eric (2000).** *Towards Robust Distributed Systems.* Keynote at ACM PODC 2000. The CAP theorem origin. *Read after Module 1.*

8. **Gilbert, Seth & Lynch, Nancy (2002).** *Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services.* ACM SIGACT News 33(2). The formal proof. Available at MIT's CSAIL page. *Read after Module 6.*

9. **Lamport, Leslie (1998).** *The Part-Time Parliament.* ACM Transactions on Computer Systems 16(2). The Paxos paper. Underneath every multi-AZ database AWS sells. *Read after Module 6.*

10. **Ongaro, Diego & Ousterhout, John (2014).** *In Search of an Understandable Consensus Algorithm.* USENIX ATC 2014. The Raft paper — Paxos's more readable younger sibling. Used by etcd, Consul, and TiKV. *Read with #9.*

11. **DeCandia, Giuseppe et al. (2007).** *Dynamo: Amazon's Highly Available Key-value Store.* ACM SOSP 2007. The paper that birthed DynamoDB. *Read before Module 6.*

12. **Verbitski, Alexandre et al. (2017).** *Amazon Aurora: Design Considerations for High Throughput Cloud-Native Relational Databases.* ACM SIGMOD 2017. Free PDF on `dl.acm.org`. *Read after Module 6 if you want to understand Aurora's 4-of-6 quorum write.*

13. **Saltzer, Jerome H. & Schroeder, Michael D. (1975).** *The Protection of Information in Computer Systems.* Communications of the ACM. The least-privilege paper. Free PDF on MIT's CSAIL archive. *Read before Module 2.*

14. **Hardy, Norman (1988).** *The Confused Deputy: (or why capabilities might have been invented).* ACM Operating Systems Review 22(4). The ExternalId origin story. *Read with #13.*

### HBR, MIT Sloan, McKinsey (free with library access; some require subscription)

15. **HBR (2024).** *How Companies Are Trying to Bring the Cloud Down to Earth.* Harvard Business Review. The repatriation trend piece — Twitter, 37signals, Dropbox.

16. **HBR (2021).** *Cloud Migration Is About to Get Riskier and More Expensive.* By Vijay Govindarajan and Anup Srivastava. HBR Digital Articles.

17. **McKinsey (2023).** *The state of cloud cost optimization.* McKinsey Cloud & Edge practice. Free PDF on `mckinsey.com`. Quantifies the ~$100B in cloud spend waste.

18. **MIT Sloan Management Review (2024).** *"Cloud Spend Visibility as Strategic Capability."* By Erik Brynjolfsson and Daniel Rock. Connects FinOps discipline to firm-level competitive advantage.

19. **Werner Vogels — *All Things Distributed* blog (`allthingsdistributed.com`).** Werner is AWS CTO. Posts to read: *"Reliability, Constant Work, and a Good Cup of Coffee"* (republished from the Builders' Library); *"Recovery Time and Recovery Point Objectives: Plan, Don't React"*; the annual *"Looking Back, Looking Forward"* posts after each re:Invent.

### Incident post-mortems (free, public, exam-relevant)

20. **AWS Service Event Summary, December 7, 2021** — `aws.amazon.com/message/12721/`. The us-east-1 outage that knocked out Netflix, Disney+, Robinhood, and many more. Read for Module 8's case study.

21. **AWS Service Event Summary, June 13, 2023** — published in AWS message archive. The Lambda subsystem failure that cascaded to EventBridge and API Gateway.

22. **SEC Administrative Proceeding 3-15570 (October 2013).** *In the Matter of Knight Capital Americas LLC.* Free PDF on `sec.gov`. The Module 4 case study source.

23. **Harvard Business School Case #9-114-049 (2014).** Boyd & Cremer. *Knight Capital's August 1, 2012 Algorithmic Trading Disaster.* Available via HBS Publishing (paywalled; ~$8).

24. **U.S. Senate report on the Capital One breach (2020).** Free PDF. The Module 2 case study source.

---

## 🎙️ AWS Builders' Library essays (FREE, online)

The single highest-signal AWS resource on the internet. URL: `aws.amazon.com/builders-library`. Required (in this order):

25. **Becky Weiss — *Static Stability Using Availability Zones*.** The canonical AZ design philosophy.

26. **Marc Brooker — *Avoiding Fallback in Distributed Systems*.** Why retries kill systems; the foundation of Module 7's "exponential backoff with jitter."

27. **Marc Brooker — *Timeouts, Retries, and Backoff with Jitter*.** Sequel to #26; gives you the math.

28. **Colm MacCárthaigh — *Reliability, Constant Work, and a Good Cup of Coffee*.** Designing constant-work systems for network-layer reliability.

29. **Marc Brooker — *Workload Isolation Using Shuffle-Sharding*.** Probabilistic isolation pattern AWS uses internally.

30. **David Yanacek — *Amazon's Approach to Failing Successfully*.** Operational excellence at AWS scale.

31. **The collection on **Caching challenges and strategies** (multiple authors).** Required before Module 8.

---

## 🎤 AWS re:Invent talks (FREE, YouTube)

The post-conference YouTube uploads are the single best free upgrade to your AWS knowledge. Watch list:

32. **ARC203 (2014): Adrian Cockcroft — *Beyond the Goat Rodeo: Netflix on AWS*.** Foundational microservices-at-scale talk. Cited in Module 1.

33. **ARC301 (2023): *Resilience patterns at AWS scale*.** Current best practices for multi-region designs. Recurring series — watch the most recent year's version.

34. **ARC404 (2023+): *Multi-region active-active and its trade-offs*.** When the cost is worth it; when it isn't.

35. **DAT401 (2023): Rick Houlihan — *Advanced design patterns for Amazon DynamoDB*.** Houlihan's DynamoDB philosophy is exam-relevant and career-relevant.

36. **DAT302 (2023): *Deep dive on Amazon Aurora*.** The 4-of-6 quorum write internals.

37. **NET301 / NET306 / NET406 (yearly): *Advanced VPC design* / *Deep dive on CloudFront* / *AWS networking foundations*.** Three concurrent talks each year; watch the most recent of each.

38. **SEC308 (2023): *Beyond IAM access keys: Modern authentication*.** Cognito + Identity Center deep-dive.

39. **SEC405 (2023): *Become an IAM policy ninja*.** Annual classic.

40. **SVS308 / API302 / BIN401 (2023+): *Designing event-driven applications*** trio. Required if you want to deepen Module 7.

41. **CMP404 (2023): *Spot Instances: A deep dive*.** Modern Spot best practices including diversification.

42. **COP201 + COP402 (2023+): *AWS Cost optimization fundamentals* + *Advanced cost optimization at scale*.** The FinOps duo.

43. **Werner Vogels keynotes 2020–2025.** The annual pattern catalogue and architecture vision. Watch all of them in order; the cumulative effect is a complete map of AWS's direction.

---

## 🛠️ Industry blogs and newsletters (subscribe to all of these)

44. **The Pragmatic Engineer — Gergely Orosz** — `pragmaticengineer.com`. Multiple deep-dives on Netflix, Spotify, Stripe, and other architecture stories. Subscription is worth it.

45. **Last Week in AWS — Corey Quinn** — `lastweekinaws.com`. The sharpest cost-and-strategy commentary anywhere. Free newsletter + paid podcast.

46. **The Duckbill Group blog** — `duckbillgroup.com/blog/`. Real customer cost stories.

47. **Yan Cui — *theburningmonk.com***. Production Lambda + EventBridge patterns from a long-time AWS Serverless Hero.

48. **Alex DeBrie — *alexdebrie.com***. DynamoDB and serverless deep-dives from the author of *The DynamoDB Book*.

49. **AWS Heroes blogs (aggregated)** — `aws.amazon.com/developer/community/heroes/`. Filter by Solutions Architect or DevOps Heroes. The 200+ AWS Heroes publish regularly; pick 5 to follow.

50. **AWS Architecture Blog** — `aws.amazon.com/blogs/architecture/`. AWS-authored architecture deep-dives.

51. **Adrian Cockcroft** — `adrianco.medium.com`. First-person account of the Netflix migration with the original principle list, plus modern commentary.

52. **High Scalability** — `highscalability.com`. Aging but still valuable case-study archive.

---

## 🎓 Industry courses (in addition to this hub)

These are the Udemy / A Cloud Guru / Pluralsight references the SAA community recommends most:

53. **Stephane Maarek — *Ultimate AWS Certified Solutions Architect Associate SAA-C03* (Udemy).** ~25 hours; the most-recommended Udemy course for SAA. Excellent voice and pacing.

54. **Adrian Cantrill — *AWS Certified Solutions Architect Associate (SAA-C03)* (`learn.cantrill.io`).** Adrian's diagrams are universally praised; the course is denser and more conceptual than Maarek's.

55. **A Cloud Guru / Pluralsight — *AWS Certified Solutions Architect — Associate (SAA-C03)*.** Multiple authors; mixed reviews — useful as a third voice if you need it.

56. **AWS Skill Builder (free tier + Subscription)** — `skillbuilder.aws`. AWS's own training. Free Cloud Practitioner courses. The Solutions Architect learning plan covers SAA. AWS Workshops (`workshops.aws`) are free hands-on labs.

57. **/r/AWSCertifications and /r/aws** on Reddit — the SAA community. Read the weekly "I passed" threads — invaluable for understanding question patterns.

---

## 🆓 Free academic courses (deeply rigorous; only if you have time)

58. **MIT 6.824 — *Distributed Systems* (Robert Morris).** Free lecture videos on YouTube; full course materials at `pdos.csail.mit.edu/6.824/`. Required reading: Raft, Paxos, MapReduce, Bigtable, Spanner. *Takes ~80 hours over a semester.* Read after Module 6.

59. **Stanford CS245 — *Database Systems* (Peter Bailis or later instructor).** Lecture notes free online. Adds rigor to Module 6's database choices.

60. **CMU 15-721 — *Advanced Database Systems* (Andy Pavlo).** Free lectures on YouTube. The most-watched database course on the internet. *Takes ~60 hours.*

61. **Coursera/edX — *Cloud Computing Specialization (UIUC)*.** Free to audit; pay for cert. Older but academically rigorous.

62. **AWS Workshop catalogue** — `workshops.aws`. Free; hands-on; categorized by service and skill level. Pair with this course's modules.

63. **NIST SP 800-53 Rev 5 (2020).** *Security and Privacy Controls for Information Systems and Organizations.* Free PDF. The control catalogue under FedRAMP, SOC 2, and HIPAA. *Reference, not a read-through.*

64. **NIST SP 800-66 Rev 2 (2024).** *Implementing the HIPAA Security Rule.* Free PDF. Required reading if your career touches healthcare data on AWS.

65. **The FinOps Foundation curriculum** — `finops.org`. Free FinOps Practitioner certification; the canonical body for cloud financial management.

---

## 🧩 How to sequence your reading

If you only have time for one path through this list:

**Weeks 1–2 (during Modules 1–3):** #1 (Stewart textbook chapters 1–6), #7 (Brewer CAP), #13 (Saltzer & Schroeder), #20–24 (the four incident post-mortems), #25–28 (Builders' Library).

**Weeks 3–5 (during Modules 4–6):** #2 (Kleppmann chapters 5, 6, 7), #11 (Dynamo paper), #36, #37, #44–48 (subscribe to the newsletters).

**Weeks 6–8 (during Modules 7–10):** #5 (Google SRE Book chapters 6, 11, 18), #15–17 (HBR + McKinsey), #41–43 (re:Invent talks).

**Capstone phase (Week 9+):** #3 (*The Phoenix Project*), #15 (HBR repatriation piece), #43 (Vogels keynotes), AWS Workshops in your weak areas.

**Career investment (the year after passing):** #58 (MIT 6.824), the cumulative Werner Vogels keynote archive, #19 (*All Things Distributed*).

---

## ⚠️ A note on freshness

AWS services change quarterly. **Verification date for the above list: 2026-05.** Any specific feature you're betting an architectural decision on, **cross-check against the official AWS docs** at the time of decision. The exam itself is updated annually by AWS; expect SAA-C04 within 12–18 months of you reading this.

---

— *Built to the Cornell/Harvard/Stanford pedagogical standard. Spec: `_dev/CORNELL_BAR_SPEC.md`*
