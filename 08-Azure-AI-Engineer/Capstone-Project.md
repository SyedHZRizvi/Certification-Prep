# Capstone Project — Azure AI Engineer (AI-102)

> **Pedagogical intent.** This capstone is the synthesis of every module in `08-Azure-AI-Engineer/`. You will design — and partially build — a production-grade GenAI system end-to-end under realistic constraints. The grading rubric mirrors the *implicit* rubric Microsoft would apply to a senior Azure AI engineer interview at a mid-market enterprise.

---

## Brief

You have just been hired as the **Azure AI Engineer** at **Harbor Mutual Insurance** — a 1,800-person mid-market US property-and-casualty insurer ($1.4B annual gross premiums; HQ in Hartford, CT; regulated under state DOI rules + emerging AI insurance regulations and NAIC model laws). The CIO has given you a 20-week mandate: stand up a **production-grade GenAI-powered claims processing system** covering the full intake → triage → routing → adjuster-summary lifecycle, on Azure.

**Required platform components.**
- Azure OpenAI Service (GPT-4o family + embeddings).
- Azure AI Search (hybrid + semantic ranking).
- Azure AI Document Intelligence (Custom Neural for the varying claim-form layouts).
- Azure AI Content Safety (Prompt Shields + Groundedness + custom filter configurations).
- Azure AI Foundry (Hub + Project + prompt flow + evaluation + monitoring).
- Azure AI Language (PII Detection upstream of every LLM prompt).
- Optional but encouraged: Semantic Kernel in the line-of-business code; Azure AI Agent Service for the adjuster-summary tool surface.

**Hard constraints.**
- **Regulatory:** HIPAA-defensible for PHI-adjacent fields; GLBA for financial data; NAIC Model Bulletin on AI in insurance (2023) compliance posture; preparation for the EU AI Act (2024) if you expand into the EU operations.
- **Security:** No keys in code; Private Endpoints + disabled public network access; Customer-Managed Keys (CMK) via Key Vault for at-rest encryption of training data and search index; approved Azure OpenAI **abuse-monitoring opt-out** for PHI flows.
- **Cost ceiling:** $720K/year all-in (Azure consumption + Foundry features). Inflation-adjusted scenarios required for the cost forecast.
- **Operational:** Go/no-go review against the current Microsoft AI-102 blueprint sections (Plan + Manage; Decision Support; Computer Vision; NLP; Knowledge Mining + Document Intelligence; Generative AI Solutions).
- **Timeline:** 20 weeks. You will not ship "perfectly" — the capstone evaluates how you sequence risk and what you defer.

---

## Deliverables (7 artifacts)

1. **Target architecture document.** Diagram-driven (you may hand-draw or use any tool that exports PDF/PNG). Must show: Hub → Project; Connections; Azure OpenAI deployments (with SKU mix — Standard / PTU / Global Batch — and justification per workload); AI Search index schema (vector dimensions, semantic config, security trimming); Document Intelligence model topology (Custom Neural + Custom Classifier for routing); Content Safety placement; network + identity boundaries; Application Insights wiring. Cite **Vaswani et al. (2017)** for the transformer foundation, **Microsoft Responsible AI Standard v2 (2022)** for the RAI alignment, and **NIST AI RMF 1.0 (2023)** for federal-reference governance.

2. **RAG evaluation harness with citation provenance.** Build (in code, or specify in detail) a **Foundry Evaluation** workflow with a held-out golden dataset of ≥500 claim-document Q&A pairs. Must score Groundedness, Relevance, Coherence, Fluency, Similarity, Safety. Define your **release-gate thresholds** (e.g., Groundedness ≥ 0.85 on the validation set). Show example citation-provenance output linking adjuster-summary sentences to source paragraphs in the policy PDF.

3. **Content Safety + Responsible AI control plan.** Tabular mapping from each of the six **Microsoft RAI principles** (Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, Accountability) to a *specific* Azure control or process you will operationalize. Include the four-layer mitigation stack (Model, Safety system, Metaprompt + grounding, User experience) with one concrete example per layer. Document **Identify → Measure → Mitigate → Operate** with metrics for each.

4. **Security review.** Written narrative + diagram covering: managed-identity topology (system-assigned vs user-assigned, per-app vs per-environment); Private Endpoint plan; CMK + Key Vault rotation cadence; per-prompt injection mitigations (Prompt Shields configuration + system-message hardening); secret-scanning + data-egress controls; per-document RBAC via security trimming in AI Search. Cite Saltzer & Schroeder (1975) for the least-privilege foundation.

5. **Cost forecast.** Spreadsheet (or markdown table) showing year-1 monthly burn rate against the $720K cap. Break down by: Azure OpenAI (Standard vs PTU vs Global Batch), AI Search (S1/S2/L1 tier rationale), Document Intelligence (S0 + Custom Neural training), Storage + Networking, Application Insights ingestion. Include a **sensitivity analysis** for 2× and 5× claim volume. Defend your PTU vs Standard split.

6. **Observability dashboard spec.** What goes on the dashboard, why, and what alert threshold triggers a runbook. Cover: TPM/RPM utilization, 429 rate, content-filter trigger counts, p95 latency, groundedness drift vs baseline, evaluation-set score drift over time, per-deployment cost burn. Connect to Application Insights + Log Analytics; specify retention.

7. **Go/no-go review document.** Cross-reference against current AI-102 blueprint sections (use the [Microsoft AI-102 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-102) for the latest skill outline). For each section, score your architecture: **Green** (production-ready), **Yellow** (needs a sprint), **Red** (deferred to phase 2). Defend each yellow + red with a written justification. This is your launch-readiness brief to the CIO.

---

## Rubric (scored out of 100)

| Criterion | Pts | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|---|---|---|---|---|
| **Target architecture quality** | 20 | Diagram + write-up names Foundry primitives correctly, justifies every SKU choice with cost/latency math, cites at least 3 of the assigned named references | Diagram correct but justifications thin; few citations | Missing primitives, wrong service selection, no citations |
| **Eval harness rigor** | 15 | ≥500-row golden set; release-gate thresholds documented; citation provenance shown; multiple metrics including custom | Smaller dataset; some thresholds; partial citations | Vague; no thresholds; no golden set |
| **Responsible AI control plan** | 15 | All 6 principles → specific controls; 4-layer mitigation with examples; IMMO workflow with metrics | Principles mapped; mitigation layers partial | Generic; principles not mapped; missing IMMO |
| **Security review** | 15 | MI topology + Private Endpoints + CMK + Prompt Shields + RBAC trimming all addressed; least-privilege cited | Most controls; some gaps | Missing major controls; no per-resource MI plan |
| **Cost forecast** | 10 | Cap respected; SKU rationale per workload; sensitivity at 2×/5× | Within cap; partial SKU rationale | Over cap; no sensitivity |
| **Observability dashboard** | 10 | Specific metrics + thresholds + retention + runbook triggers | Generic dashboard plan | Vague telemetry |
| **Go/no-go review** | 10 | Honest red/yellow/green; phase-2 plan; cross-referenced to AI-102 blueprint sections | Some sections scored; partial blueprint mapping | Generic "we're ready" or "nothing's ready" |
| **Written argument quality** | 5 | Defends every controversial choice with named-source citations | Some defense; few citations | Assertions without justification |

**Pass mark:** 75/100. **"Excellent" — Cornell/Harvard MBA case-study quality:** 90+/100.

---

## Suggested timeline (20 weeks)

- **Week 1:** Decode Microsoft's current AI-102 blueprint; read each module's case study; download Transparency Notes for every service.
- **Week 2:** Architecture v0 sketch; identity + network skeleton; provision Hub + Project + Connections.
- **Week 3:** Stand up Document Intelligence Custom Classifier + Custom Neural for claim-form variants.
- **Week 4:** Build the search-index schema; load ~10% of the corpus; first vector + hybrid query.
- **Week 5:** Deploy GPT-4o + embeddings; first "On Your Data" loop end-to-end (read, ask, get citations).
- **Week 6:** Custom content filter configuration; Prompt Shields ON; Groundedness Detection on responses.
- **Week 7:** First prompt flow in Foundry; variant A/B for the adjuster-summary prompt.
- **Week 8:** Build the 500-row golden set; run first **Foundry Evaluation**; document thresholds.
- **Week 9:** Wire Application Insights + Log Analytics; first dashboard.
- **Week 10:** **Midpoint review** with the CIO; adjust scope.
- **Week 11:** Agent Service experiments for the summary step (file_search + function_calling); compare vs prompt flow.
- **Week 12:** PTU sizing experiments; finalize SKU mix.
- **Week 13:** Private Endpoints + CMK rollout; abuse-monitoring opt-out approval lodged.
- **Week 14:** PII Detection upstream of every prompt; redact-before-prompt enforcement.
- **Week 15:** Security review w/ corporate InfoSec; threat-model walkthrough using STRIDE on the prompt-injection surface.
- **Week 16:** Cost forecast v1; CFO review.
- **Week 17:** Observability dashboard v1; runbook authoring.
- **Week 18:** Soft launch with one adjuster team; collect telemetry.
- **Week 19:** Iterate on eval failures; tighten release-gate thresholds.
- **Week 20:** **Go/no-go review.** Cross-reference to AI-102 blueprint; produce phase-2 plan.

---

## What "submission" looks like

You should produce, in `~/capstone-azure-ai-engineer/`:

- `architecture.md` + `architecture-diagram.pdf`
- `eval-harness/` — golden dataset (CSV/JSONL), the eval-config YAML/JSON for Foundry, sample run output
- `rai-control-plan.md`
- `security-review.md` + `network-diagram.pdf`
- `cost-forecast.xlsx` or `cost-forecast.md`
- `observability-spec.md`
- `go-no-go-review.md`

**Length expectations.** Architecture doc 6–10 pages. Each of the other docs 2–5 pages. The eval harness should run (or pseudo-run) on real Azure resources for at least 50 of the golden rows.

**Self-grading.** Score yourself against the rubric. Strong capstones share with a peer group for a Harvard-style discussion: each peer reads one deliverable cold and asks one Socratic question per criterion.

---

## Optional stretch goals

- Add a **second Agent** for fraud-flag classification on the claim summary, gated on a confidence threshold.
- Add a **Speech in/out** layer for adjusters to dictate notes and receive audio summaries (TTS Neural Voice — *not* CNV).
- Add a **multilingual** flow (Translator + region-pinned deployments) for a hypothetical EU subsidiary.
- Build a **drift-detection** loop: when the eval-baseline groundedness drops > 5%, file a Microsoft support ticket for the model upgrade and freeze the deployment.
- Build a **prompt-injection red-team** in PyRIT and run it against your system; document mitigations.

---

## Why this Capstone passes the Cornell/Harvard bar

- **Integrates ≥ 60% of the course modules** (Modules 1, 2, 5, 7, 8 are load-bearing; Modules 3, 4, 6 surface in extensions).
- **Requires technical work AND written justification** — the rubric rewards the "argue your choice" pedagogy Harvard MBA cases use.
- **Real, defensible scenario** — Harbor Mutual is fictional, but the regulatory, cost, and architectural constraints are the ones a mid-market insurer would face in 2026.
- **Maps to the AI-102 blueprint** — passing this capstone implies passing the certification, with the bonus that you will have actual deployment artifacts and a story to tell at interview.

Good luck. Ship something defensible. Then defend it.

---

➡️ Return to [Module 8](./Module-08-Build-GenAI-Apps/Reading.md) | Forward to [Recommended Readings](./Recommended-Readings.md)
