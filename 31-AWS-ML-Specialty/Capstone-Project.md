# 🏆 Capstone Project — Atlas Health: Production-Grade ML Platform for Pre-Authorization Triage

> **Goal:** Synthesise everything you've learned across the 10 modules of this MLS-C01 course into a single, real-world ML systems-design deliverable that a hiring panel at Capital One, Anthem, or AWS Professional Services could grade against the same rubric they use for senior ML candidates.
>
> **Scope:** ~30-45 hours of focused work spread across 2-3 weeks. Drives you from "I can pass MLS-C01" to "I could lead this on Monday at a Series-C health-tech company."
>
> **When to take it:** After completing all 10 modules and at least Practice Exam 2. The Final Mock can wait until the capstone is done — drafting the design exposes weak modules.

---

## 🏥 The Brief

**Atlas Health** is a fictional Series-C utilization-management SaaS company with 14M covered lives across three US payors. Their core product is *pre-authorization (PA) triage*: when a provider submits a request to authorize a procedure (e.g. an MRI, an outpatient surgery), Atlas's system determines in real time whether to **approve**, **deny**, or **escalate** the request for human review. The current process is rule-based, takes 4-12 hours, and has a 22% appeal rate (cases ultimately overturned).

Atlas's CEO has hired you to **lead the build of an ML-driven pre-authorization triage platform on AWS** that meets the following requirements:

### Business requirements

1. **Latency:** Triage decision returned to provider in ≤2 seconds end-to-end (p95).
2. **Throughput:** Support 50,000 PA requests/day at launch, scaling to 500,000/day within 3 years.
3. **Accuracy:** Match or beat the current rule-based system's approval-rate accuracy (~92%) on a held-out test set.
4. **Appeal-rate reduction:** Cut overturned-on-appeal rate from 22% to <12% within 12 months.
5. **Bias / fairness:** Approval rates must NOT differ by more than 5 percentage points across racial, gender, or geographic demographic groups when controlling for clinical features.
6. **Explainability:** Every denial decision must include a SHAP-based explanation provided to the provider AND archived for 7 years for regulatory audit.
7. **Compliance:** HIPAA-eligible architecture; PHI never traverses the public internet; SOC 2 Type 2 readiness; HITRUST CSF aspiration.
8. **Cost:** Annual cloud spend <$1.8M Year 1; <$3.5M Year 3.
9. **Team:** You will hire 6-8 engineers (mix of MLE / MLOps / DE). The current team is 0.
10. **Timeline:** First production traffic in 9 months; full cutover from rule-based system in 14 months.

### Available data

- **18 months of historical PA requests** (~12M records) stored in an on-prem Microsoft SQL Server with PHI
- **4M records of clinical-notes free text** describing reasons for each request (semi-structured)
- **Member benefit data** in a SaaS vendor's database (~2.5M members) accessed via REST API
- **Provider profile data** (NPI registry + Atlas's contracted-provider table)
- **Outcome data** for each historical PA: approved-or-denied, appealed-or-not, appeal-overturned-or-not, time-to-decision

---

## 📋 The 7 Required Deliverables

You will submit a single Google Doc / Markdown document with these 7 sections. Each is graded against the rubric below.

### 1. Architecture diagram + 1-page system narrative

Draw the full end-to-end architecture. Include:
- Data ingestion plane (Module 2)
- Feature engineering plane (Module 3) + Feature Store (online + offline)
- Training plane (Modules 4-8)
- Inference plane (Module 9) — pick from real-time / serverless / async / batch
- MLOps plane (Module 9) — Pipelines, Registry, Projects
- Observability + security plane (Module 10)
- Bias and explainability layer (Module 8) — Clarify SHAP

State which AWS services are core (≤15 services) and justify each. Annotate latency budget per hop.

### 2. Data engineering plan

- **Ingestion:** How does on-prem SQL Server get into AWS continuously? Bound the CDC lag.
- **Storage layout:** Raw zone vs curated zone. File format. Partitioning. Lifecycle policy.
- **Catalogue & governance:** Glue Crawler / Schema Registry choices. Lake Formation grants. Macie scans for PHI.
- **Streaming layer:** When does the team graduate from batch to streaming features? What about call-centre transcripts in real time?
- **DR / replication:** What's the RPO/RTO for the training data? For the feature store?

### 3. EDA + feature engineering plan

- **Initial EDA tool selection:** SageMaker Data Wrangler vs DataBrew vs Studio notebooks. Justify.
- **Missing-data strategy:** Per-column policy table for the top ~30 fields. Identify candidates for "informative missingness" indicators.
- **Class balance:** Approved-vs-denied ratio. Approved-vs-overturned ratio. Bias treatment plan.
- **Feature catalogue:** Propose ~50 candidate features. Identify ~6-10 derived features (e.g. *days since last PA for member*, *provider denial rate over 90 days*).
- **Encoding strategy:** ICD-10 codes (~70K), CPT codes (~10K), NPI IDs (~1.7M). Pick encoding per cardinality.
- **PII / PHI handling:** Macie scan plan, redaction patterns, KMS key strategy.

### 4. Modelling plan

- **Algorithm shortlist:** Top 3 candidates with rationale. (Hint: XGBoost is almost certainly one of them.)
- **Model architecture sketch** for each candidate. Hyperparameter ranges for HPO.
- **HPO strategy:** Bayesian vs Hyperband. Budget (max_jobs / max_parallel_jobs / instance type).
- **Bedrock layer:** When and how do you use Bedrock for clinical-notes summarization, RAG, or explanation generation? Or do you not?
- **A/B test plan:** Three model variants with weighted traffic. Decision criteria.
- **Cold-start plan:** What does the model output before sufficient training data is available for a new payor / region?
- **Bias / fairness:** Clarify pre- and post-training bias metrics. Threshold table.
- **Explainability:** SHAP setup. Latency budget for SHAP computation. Storage of explanations.

### 5. MLOps plan

- **Pipeline DAG sketch:** SageMaker Pipelines step-by-step with conditional registration.
- **Model Registry approval workflow:** Who approves? Under what criteria?
- **Endpoint strategy:** Pick from real-time / serverless / async / multi-model. Justify per use case.
- **Deployment strategy:** Blue/Green vs canary vs shadow. Auto-rollback alarms.
- **Monitoring:** All four Model Monitor types. Drift thresholds. Retraining triggers.
- **Retrain cadence:** Scheduled vs drift-driven vs both.
- **Disaster recovery:** Multi-region or multi-AZ only? Justify cost / RPO / RTO trade-off.
- **CI/CD:** SageMaker Projects template usage. CodePipeline integration with the rest of the company.

### 6. Security, compliance, cost

- **IAM strategy:** Execution roles per environment / team. Least-privilege patterns.
- **Network:** VPC layout, subnets, NAT or VPC endpoints, PrivateLink, Direct Connect to on-prem.
- **Encryption:** KMS key strategy. Customer-managed vs AWS-managed. Per-tenant vs per-environment keys.
- **Compliance:** HIPAA controls mapping. SOC 2 Trust Service Criteria mapping. Audit logging via CloudTrail + Config.
- **Cost model:** Spreadsheet or table for Year 1 and Year 3. Itemise the top 10 cost lines. Identify the 3 highest-leverage cost-optimisation moves.
- **Sustainability:** Graviton + Inferentia + right-sizing plan.

### 7. Hiring + Org plan

- **Initial team composition:** 6-8 roles with title, level, and core skills. Justify each.
- **First 6 hires order** (you cannot hire all 8 day 1).
- **External vendors:** AWS Professional Services? Quantiphi? Slalom? Independent consultants? Justify.
- **Skills-gap mitigation:** How does the team acquire SageMaker / Bedrock / clinical-domain expertise?
- **Risks & mitigations:** Top 5 organisational risks (key-person dependency, audit timing, regulatory surprise, data-quality issues, vendor selection).

---

## 🎓 The Rubric (graded out of 100)

| Section | Weight | Criteria |
|---------|--------|----------|
| 1. Architecture diagram + narrative | 15 | Clear, complete, AWS-service-correct, latency annotated |
| 2. Data engineering plan | 12 | Format/partition decisions defensible; PHI handling explicit |
| 3. EDA + feature engineering plan | 13 | Domain awareness; encoding choices defensible; bias-aware |
| 4. Modelling plan | 18 | Algorithm shortlist defensible; HPO strategy sized correctly; SHAP integrated |
| 5. MLOps plan | 18 | Pipelines DAG complete; Registry + approval clear; all 4 Monitor types present; rollback plan real |
| 6. Security / compliance / cost | 14 | HIPAA mapping concrete; least-priv defensible; cost numbers within reason |
| 7. Hiring + org | 10 | First-6-hires order reasoned; risk register present |
| Overall coherence | — | Discretionary tie-breaker; consistent vocabulary, no gaps |

### Grading bands

| Score | Verdict |
|-------|---------|
| 90+ | 🏆 Hire on Monday — you could lead this. Anthropic / Capital One / AWS ProServe level. |
| 80-89 | ✅ Strong senior engineer. Few rough edges in MLOps OR cost reasoning. |
| 70-79 | ⚠️ Solid associate. Re-read the modules you scored weakest on. |
| 60-69 | 🔁 Junior level; needs another pass through 4–5 of the 10 modules. |
| <60 | 📚 Do not book the MLS-C01 exam yet — the depth gaps will show. |

---

## 🧭 Suggested Schedule

| Week | Deliverable |
|------|-------------|
| Week 1 (Days 1-3) | Re-read Module 1 and skim Modules 2-10. Draft architecture sketch (Section 1). |
| Week 1 (Days 4-7) | Sections 2 + 3 (data engineering + EDA/FE). |
| Week 2 (Days 1-3) | Section 4 (modelling) — the most substantive section. |
| Week 2 (Days 4-7) | Section 5 (MLOps). |
| Week 3 (Days 1-3) | Section 6 (security + compliance + cost). |
| Week 3 (Days 4-5) | Section 7 (hiring + org). |
| Week 3 (Days 6-7) | Iterate; self-grade against rubric; gap-fill weakest section. |

---

## 💡 Tips from the field

1. **Don't over-engineer the architecture.** Senior reviewers penalise diagrams with 50 boxes and unclear data flow. ≤15 core services usually wins.
2. **Be explicit about latency budgets.** "2 seconds end-to-end" needs hop-by-hop math — DNS + ALB + Lambda + SageMaker endpoint + Bedrock + post-processing.
3. **Show your cost math, not just a total.** A reviewer can spot an unrealistic $1.8M budget in 30 seconds if you don't itemise.
4. **Cite Clarify, Model Monitor, A2I by name.** Vague "we will monitor bias" loses points; "we will use Clarify post-training bias (DI, DPPL) and the Bias Drift Monitor with a 5-point DPL threshold and A2I human review for borderline cases" wins.
5. **Make the hire order defensible.** Tied to the architecture — first ML platform engineer enables MLOps, first DE enables data pipeline, etc.
6. **Address the boring stuff.** Logging, CloudTrail data events, KMS key rotation cadence, IAM Access Analyzer review schedule. The graders look for these.
7. **Pick a SHAP latency budget that fits the 2-second SLA.** This is a common trap — full SHAP can add 100-500 ms per prediction.

---

## 🛠️ Optional Add-Ons (Extra Credit)

- **Implement a slice of the system** — e.g. a Pipelines DAG with a simple XGBoost model, real Clarify bias report, and a real-time endpoint. Document with screenshots.
- **Run cost benchmarks** — actually train and deploy on a $100 budget; report real cost numbers.
- **Adversarial review** — pretend you're the AWS Solutions Architect interviewing you and produce 10 hard "why did you choose X over Y?" questions plus answers.
- **Bedrock-only variant** — design a second variant where the primary model is a fine-tuned Claude/Llama on clinical reasoning instead of an XGBoost. Compare cost, latency, explainability.

---

## 📚 Suggested References During The Capstone

- **AWS Well-Architected Machine Learning Lens** — `docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/`
- **HIPAA Eligible Services Reference** — `aws.amazon.com/compliance/hipaa-eligible-services-reference/`
- **SageMaker Best Practices Whitepaper** — published 2023
- **Adrian Cockcroft's blog** — pattern-level architecture essays
- **Marc Brooker's AWS Builders' Library essays** — "Timeouts, retries, backoff", "Static stability"
- **Kleppmann's *Designing Data-Intensive Applications*** — Chapters 5, 7-11 for the platform reasoning
- **Sculley et al. 2015** — *Hidden Technical Debt in ML Systems*; required for the MLOps section

---

## ✅ Submission Checklist

Before considering the capstone complete:

- [ ] All 7 sections present and named
- [ ] Architecture diagram (drawn in any tool — Excalidraw, Whimsical, Lucidchart, hand-sketched)
- [ ] Latency budget annotated per architectural hop
- [ ] Per-column missing-data policy table
- [ ] Feature catalogue with ≥50 features
- [ ] HPO budget defended
- [ ] Pipelines DAG sketch present
- [ ] Endpoint mode chosen per use case
- [ ] All 4 Model Monitor types invoked somewhere
- [ ] KMS key strategy defined
- [ ] HIPAA controls mapping table
- [ ] Year 1 and Year 3 cost itemisation
- [ ] First-6-hire order with justification
- [ ] Top-5 risk register
- [ ] Self-graded against the rubric

When you can tick every box and self-score 75+, you are ready for both the **real MLS-C01 exam** AND the kind of senior ML platform interview where this capstone *is* the interview.

---

## 🚀 What This Capstone Demonstrates

If a candidate can produce a defensible Atlas Health design, they have shown:

- **End-to-end ML systems thinking** (data → model → MLOps → security → cost — every domain on the MLS-C01 blueprint)
- **AWS service depth** (SageMaker, Bedrock, Glue, Athena, IAM, KMS, VPC — at the specificity senior reviewers expect)
- **Real-world judgement** (latency budgets, cost math, hire ordering, compliance mapping)
- **Bias-aware engineering** (Clarify, Model Monitor, A2I, model cards in the right places)
- **Communication discipline** (clear sections, defensible decisions, no hand-waving)

This is what separates "passes the exam" from "is hireable as a senior ML platform engineer". The MLS-C01 cert is a credential. The capstone is the *competence*.

🎓 Good luck. Treat it like a real engineering deliverable. The grading rubric mirrors what hiring managers actually use.
