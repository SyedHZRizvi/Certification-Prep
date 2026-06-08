---
permalink: /07-AWS-AI-Practitioner/Capstone-Project/
title: Capstone Project, AWS AI Practitioner
---

# Capstone Project, AWS AI Practitioner (AIF-C01) 🧪

> **Read first:** This capstone is the integrative project for the AWS AI Practitioner track. It synthesizes Modules 1–8 and the three Practice Exams into a single executive-ready deliverable. You are *not* implementing code in AWS; you are producing the documents that a real AI Lead would put in front of a board, a CISO, and a CFO.

---

## 📋 Brief

You have been hired as the **AI Lead** at **Northwind Mutual**, a mid-size US insurance carrier with **~$800 million in annual premium** across personal auto, home, and small-commercial lines. Northwind has ~2,400 employees, an active AWS footprint (running its data warehouse and policy-admin system in `us-east-1`), and a board that is *enthusiastic but nervous* about generative AI. The carrier has been written up twice in the trade press for slow claims handling.

The CEO has given you a **16-week mandate** with a single Phase-1 use case and a 12-month roadmap:

**Phase 1 (weeks 1–16): "FNOL summarizer."** When a customer files a First Notice of Loss (FNOL) by phone, web, or mobile app, today's adjusters spend 12–18 minutes reading transcripts, prior policy history, and prior claims before they can start work. The Phase-1 system uses **Amazon Bedrock + Knowledge Bases + Guardrails** to produce a 1-page adjuster-facing FNOL summary (claim type, key facts, customer history flags, fraud-risk indicators surfaced from the policy file) within 60 seconds of submission. Target: cut average adjuster prep time by 50%.

**Phase 2 (months 5–12): The 5-use-case roadmap.** Propose, prioritize, and sequence the next five use cases. Each must include estimated AWS-spend range, expected business value, and the responsible-AI + security controls that travel with it. Candidate use cases include: (a) coverage-question Q&A bot for agents, (b) AI co-pilot for claim adjusters during the claim lifecycle, (c) underwriting-document summarization, (d) renewal-letter personalization at scale, (e) AI-assisted email triage in the customer-service queue, (f) AI-driven anti-fraud signal aggregation.

You have **6 deliverables** due in 16 weeks. Total budget envelope for Phase 1: **$1.2M** (people + AWS spend + vendor + legal review). Northwind operates in 14 US states and is HIPAA-adjacent (some claims involve medical records) but not a covered entity itself; it has SOC 2 Type 2 already. It also collects personal data of EU citizens who travel in the US and may be exposed under GDPR.

---

## 📦 Deliverables (6 artifacts)

### 1. Foundation-Model Selection Memo (5–7 pages)

Compare **three candidate foundation models** for the FNOL summarizer (e.g., Anthropic Claude on Bedrock, Amazon Nova on Bedrock, Meta Llama on SageMaker JumpStart). For each:

- Cost per 1,000 input + output tokens at expected volume (estimate: ~12,000 FNOLs/month, ~3,500 tokens avg input, ~600 tokens avg output)
- Latency profile (P50, P95) under load
- Context window vs. expected document size
- Customization support (fine-tuning availability)
- Vendor risk (provider stability, AWS partnership, retirement risk)
- 2026-current model IDs (no dead references; verify against AWS docs)

Conclude with a **scored trade-off matrix** (0–5 per dimension, weighted) and a **defended recommendation**.

### 2. RAG Architecture Diagram + Provenance Specification (5–8 pages)

Architecture for the FNOL summarizer's retrieval layer, addressing:

- **Sources to index:** policy admin (Aurora PG), claims history (RDS), state-by-state coverage rules (S3 PDFs), fraud-indicator playbook (Confluence)
- **Chunking strategy** and rationale (size, overlap, hierarchical?)
- **Embedding model choice** (Titan Embeddings v2 vs Cohere Embed) and dimension
- **Vector store choice** (OpenSearch Serverless vs Aurora pgvector) with reasoning
- **Citation provenance:** every fact in the adjuster-facing summary must trace back to a source URL, page, and ingestion timestamp. Specify how this is generated and surfaced
- **Freshness:** how often is the index re-built? How is a stale or removed policy handled?
- **Hybrid search?** Justify yes/no given the claims-vocabulary mix of exact IDs (claim #, policy #) and natural language

Include a labeled architecture diagram (Mermaid, ASCII, or hand-drawn-and-photographed).

### 3. Evaluation Harness with Human-in-the-Loop (4–6 pages)

Define how Northwind will *know* the FNOL summarizer is working. Include:

- **Automated metrics:** ROUGE for summary faithfulness, BERTScore for semantic quality, custom "PII leakage rate" check
- **Bedrock Model Evaluation** configuration: which mode (automatic, KB eval, LLM-as-judge, human worker), on what dataset, at what cadence
- **Human review panel:** who reviews (claim adjusters, claims supervisors, compliance reviewers), how many summaries per week, the scoring rubric (helpfulness, faithfulness, safety, tone)
- **Amazon A2I integration:** which classes of FNOL summaries route to human review *before* reaching the adjuster (low-confidence, fraud flags, suspicious patterns, complex multi-party claims)
- **Production drift monitoring** plan: SageMaker Model Monitor or equivalent for tracking quality over time
- A "what triggers a rollback" runbook

### 4. Responsible-AI Risk Assessment + Mitigations (5–8 pages, NIST AI RMF aligned)

Walk through the **four NIST AI RMF functions** (*Govern, Map, Measure, Manage*) for the FNOL summarizer. For each function, identify Northwind-specific risks and the mitigation. At minimum address:

- **Bias / fairness:** demographic disparities in summary quality or fraud-flag rates by geography, age, or other protected characteristics. How will you measure? (SageMaker Clarify on a curated test set.) What's the threshold for action?
- **Hallucination:** an LLM-invented "prior claim" surfacing in a summary would be a regulatory disaster. How does the contextual grounding check + citation provenance + human review combine to mitigate?
- **PII / privacy:** medical records in some claims; SSN and account numbers throughout. Map to Bedrock Guardrails (Sensitive Information filter), AWS Macie scan of source S3, KMS-customer-managed encryption
- **Air Canada–style hallucination accountability:** what's Northwind's legal posture if the summary misstates coverage? Reference the Feb 2024 BC Civil Resolution Tribunal precedent and design the AI-disclosure language that appears with every adjuster-facing summary
- **EU AI Act considerations:** is this use case "high-risk" under Annex III of Regulation (EU) 2024/1689? Argue both sides and conclude
- **NYC Local Law 144 analogue:** US state bias-audit obligations that may apply
- Produce a **risk register** in tabular form (risk / likelihood / impact / mitigation / owner)

### 5. Security Review for Prompt Injection / Data Leakage (4–6 pages)

The security posture review the CISO will sign before launch. Cover:

- **IAM design:** Bedrock role with resource-level restriction to specific Claude (or chosen FM) model ARNs; SageMaker execution role design if you need fine-tuning; least-privilege Lambda role(s) for any agentic action groups
- **Network:** PrivateLink VPC interface endpoint for Bedrock Runtime + Agent/KB Runtime; S3 Gateway endpoint for KB sources; no public internet egress for inference traffic
- **Encryption:** customer-managed KMS (CMK) for S3 sources, custom-model artifacts, OpenSearch index; TLS 1.2+ in transit; consider Nitro Enclaves for the most-sensitive subset
- **Audit:** CloudTrail for API call metadata + Bedrock model invocation logging to S3 (KMS) for prompts and responses; 7-year retention policy; Athena query patterns for incident response
- **Prompt-injection defenses:** direct user injection via the FNOL form, indirect injection via uploaded customer documents (think PDF medical record with hidden instructions). Layered defense: input sanitization + Guardrails (denied topics, content filters) + system-prompt isolation + output filtering + least-privilege tool use
- **Insider threat:** Samsung-style accidental leak via adjuster pasting transcripts into a public chatbot. How does Northwind's *policy + DLP + enterprise-Bedrock-as-only-approved-tool* posture address this?
- **Compliance mapping:** HIPAA (no covered-entity status but BAA-aligned posture), GDPR (data residency, subject rights, breach notification), SOC 2, state-level insurance regulator notifications

Produce a labeled threat model (STRIDE or similar) and a control-coverage matrix.

### 6. Board-Readable ROI Model (Excel/Google Sheets equivalent + 2-page narrative)

The CFO will not sign without numbers. Build:

- **Investment:** AWS spend (Bedrock token volume, OpenSearch, S3, KMS, PrivateLink endpoints), people cost (ML lead, 2 ML engineers, security review FTE-months, change-management), vendor + legal review
- **Returns:** adjuster productivity recovery (50% prep-time reduction × 12,000 FNOLs/month × adjuster fully-loaded cost), customer-satisfaction lift (translate to retention dollars), claims-cycle compression (NPS + premium retention)
- **Sensitivity analysis:** what happens at 20% reduction (worse than target) and at 70% reduction (better)? At Bedrock pricing 30% higher or lower?
- **Break-even quarter** and **3-year NPV** at a reasonable discount rate
- **12-month roadmap of next 5 use cases**, each with one-paragraph ROI thesis and a "go/no-go" gating criterion
- A 2-page narrative for the board cover memo: 3 charts, 3 risk bullets, 1 decision ask

---

## 📊 Rubric (scored out of 100)

| Criterion | Points | Excellent (90–100% of section) | Acceptable (70–89%) | Below bar (<70%) |
|-----------|--------|-------------------------------|----------------------|-------------------|
| **1. FM Selection Memo** | 15 | Three real models compared on six dimensions with 2026-verified pricing and a defended weighted-scoring recommendation. Cites Anthropic / Amazon / Meta provider documentation. | All three compared, but missing one dimension or one quantitative estimate. Recommendation is plausible but not deeply defended. | Generic comparison, no numbers, no recommendation. |
| **2. RAG Architecture** | 15 | Concrete chunking strategy, embedding model, vector store, citation-provenance mechanism. Hybrid-search decision defended. Diagram is clear and accurate. Addresses freshness, removal, indirect-injection. | All major components addressed, but one or two trade-offs unjustified. Diagram present but unclear. | Generic RAG pipeline, no Northwind-specific reasoning, no provenance mechanism. |
| **3. Evaluation Harness** | 15 | Specific metrics with target values, Bedrock Model Evaluation configuration, named human reviewer panel and SLA, A2I trigger rules, drift-monitoring plan, rollback runbook. | Most components present but one missing (e.g., no rollback runbook). Metrics named but not targeted. | "We'll evaluate it", no specific tooling, no human panel, no thresholds. |
| **4. Responsible AI / NIST AI RMF Risk Register** | 20 | All four NIST functions covered; risk register has ≥ 12 specific risks with mitigations; EU AI Act position defended; Air Canada precedent explicitly addressed in disclosure language; Clarify + Guardrails + A2I integration is named and specified. | All risks covered but mitigations less specific; one or two NIST functions thin; EU AI Act treatment surface-level. | Generic Responsible-AI language, no Northwind-specific risks, no regulatory mapping. |
| **5. Security Review** | 20 | Layered defense across IAM (resource-level), network (PrivateLink), encryption (KMS CMK), audit (CloudTrail + invocation logging), prompt-injection defenses (direct + indirect + insider), HIPAA / GDPR / SOC 2 mapping, threat model. Samsung incident explicitly referenced. | Most layers covered; one or two specific configurations missing. Threat model present but partial. | Generic security checklist; no Bedrock-specific patterns; no threat model. |
| **6. ROI Model + Roadmap** | 15 | Quantified investment, quantified returns, sensitivity analysis on two key variables, NPV calculation, break-even quarter, 5-use-case roadmap with go/no-go gates, 2-page board narrative. | ROI model present but missing sensitivity analysis or NPV. Roadmap present but not gated. | Generic ROI claims, no numbers, no roadmap. |

**Total: 100 points. Passing bar: 70/100.**

---

## 📆 Suggested Timeline (16 weeks)

| Weeks | Focus | Deliverable progress |
|-------|-------|----------------------|
| 1–2 | Discovery: interview adjusters, claims supervisors, fraud team, IT, legal; collect representative FNOL transcripts (sanitized) | Notes for §1 + §2 |
| 3–4 | FM selection memo: vendor calls, pricing analysis, latency tests if possible via PartyRock or Bedrock On-Demand sandbox | §1 draft complete |
| 5–7 | RAG architecture design + indexing pilot on 100 representative FNOL records; provenance mechanism prototype | §2 complete |
| 8–9 | Evaluation harness: define metrics, recruit human review panel, configure Bedrock Model Evaluation against a held-out test set | §3 complete |
| 10–11 | Responsible AI + NIST RMF risk assessment; legal review of Air Canada precedent; EU AI Act counsel sign-off | §4 complete |
| 12–13 | Security review: walk through with CISO; PrivateLink + KMS + IAM design; threat modeling workshop | §5 complete |
| 14 | ROI model + roadmap; CFO sit-down | §6 complete |
| 15 | Board readout dress rehearsal; address feedback | All sections polished |
| 16 | Board presentation + go/no-go decision | Final package shipped |

---

## ✉️ What "submission" looks like

Submit a single zipped folder named `northwind-fnol-capstone.zip` containing:

- `01-fm-selection-memo.pdf`
- `02-rag-architecture.pdf` (with embedded diagram)
- `03-evaluation-harness.pdf`
- `04-responsible-ai-risk-register.pdf` + `risk-register.xlsx`
- `05-security-review.pdf` + `threat-model.png`
- `06-roi-model.xlsx` + `board-cover-memo.pdf`

**Self-grade against the rubric above** before submission. For peer review, swap your zip with a study partner and grade theirs. The differences between your two scores on each section will tell you more than any single grader can.

---

## 🚀 Optional stretch goals

- **Live demo:** stand up a PartyRock or Bedrock sandbox prototype of the FNOL summarizer against synthetic transcripts. Capture screenshots in the appendix.
- **Cost-model interactive:** make the ROI model parameterizable so the board can adjust assumptions in real time.
- **Red-team report:** spend 4 hours actively trying to break your own design (direct + indirect prompt injection, PII exfiltration via crafted FNOL text, hallucinated coverage). Document what worked and what didn't.
- **Comparison with Goldman Sachs Bedrock case (Module 4):** explicitly map each control you proposed to a control Goldman publicly described at re:Invent 2024. What's different about insurance vs banking?
- **Compare with Klarna's AI customer-service deployment (Module 5):** what's different about back-office AI (your FNOL summarizer) vs customer-facing AI (Klarna's chatbot)?

---

## 🔗 Module integration map

| Capstone deliverable | Modules drawn from |
|---------------------|--------------------|
| §1 FM Selection | Modules 3 (FM vocabulary), 4 (Bedrock catalog), 6 (customization options) |
| §2 RAG Architecture | Modules 3 (embeddings, context window), 5 (RAG, KBs, vector stores, chunking) |
| §3 Evaluation Harness | Modules 1 (metrics intuition), 6 (BLEU/ROUGE/BERTScore, Bedrock Model Evaluation), 7 (HITL, A2I) |
| §4 Responsible AI | Modules 7 (pillars, Clarify, Guardrails, NIST/EU AI Act), 1 (bias sources) |
| §5 Security Review | Modules 8 (IAM, PrivateLink, KMS, invocation logging, threats), 7 (Guardrails) |
| §6 ROI Model | Modules 4 (Bedrock pricing modes), 6 (cost-optimization), all (use-case patterns) |

This capstone integrates ≥ 60% of the course material and forces the *argue-your-choice* deliverable Cornell/case-method pedagogy demands.

---

➡️ Done with the capstone? Return to the [course README](./README.md) and continue with the [next track: Azure AI Engineer (AI-102)](../08-Azure-AI-Engineer/README.md).
