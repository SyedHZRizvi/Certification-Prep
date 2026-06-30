# Module 10: Production Patterns & Capstone Case Studies 🏁

> **Why this module matters:** Modules 1–9 gave you the components. This module is the *architect's tour*, five canonical real-world deployments deconstructed end-to-end, the cost-optimization playbook, the security checklist, and a capstone exercise that asks you to design a Google-Cloud-AI architecture for a scenario you have not seen. Pass this module and you can walk into any Fortune 500 boardroom and defend a Vertex AI deployment design.

> **Prerequisites for this module.** Modules 1–9 complete. You should be able to draw the Vertex AI MLOps loop, name the four safety_setting categories, and explain the difference between Vertex AI Search and Vector Search without looking.

---

## 📖 A Story: The Day McDonald's Cancelled, Wendy's Doubled Down

It is June 2024. McDonald's announces it is ending its partnership with IBM on AI-powered drive-thru voice ordering after three years of testing. Press coverage focuses on order-accuracy issues viral TikToks of customers being added orders of dozens of Big Macs, repeatedly. By contrast, six months earlier, Wendy's renewed and expanded its **FreshAI** partnership with Google Cloud same hardware concept (drive-thru voice ordering), different software stack (Vertex AI + Gemini + Conversational Agents + Chirp), better order-accuracy reports, and aggressive rollout.

What did Wendy's and Google do differently? Per Wendy's Q2 2024 investor call + Google Cloud Next 2024 keynote analysis, the difference came down to four architectural choices:

1. **Native audio understanding**, Gemini's native multi-modal processed raw audio directly, eliminating a brittle transcription-then-LLM pipeline (the McDonald's/IBM stack apparently had separate transcription + understanding steps; errors compounded).
2. **Deterministic state machine for order flow**, Conversational Agents owned the menu/customization state; Gemini was confined to disambiguation and synthesis. The result: no model "creativity" on menu items.
3. **Grounded responses**, Vertex AI Search indexed over the actual menu; if a customer asked about an item, the response was grounded against the menu, never hallucinated.
4. **Tight escalation path**, Conversational Agents explicitly defined "if ambiguous, escalate to human." Wendy's measured deflection rate, not just AI completion.

The lesson is not "Google won, IBM lost", IBM still ships great AI for plenty of workloads. The lesson is **architecture matters more than model choice**. The same Gemini model with a worse architecture would fail; a different model with this architecture might also work. The exam tests whether you can identify the *architectural pattern*, not just name the products.

This module deconstructs five such architectures and ends with a capstone that asks you to design one.

---

## 🍔 Case Study 1, Wendy's FreshAI Drive-Thru

**Workload:** Voice-driven drive-thru order taking; replaces or augments human order taker.
**Scale:** 6,000+ restaurants (rollout in progress through 2026); millions of orders/day at scale.
**Constraints:** Sub-2-second latency budget; brand-voice consistency; allergen accuracy; menu changes weekly per region.

### Architecture

```
[Customer voice at drive-thru]
   ↓
[Chirp ASR, real-time speech-to-text + intent confidence]
   ↓
[Vertex AI Agent Builder: Conversational Agent, order flow state machine]
   ├─ Page: Welcome
   ├─ Page: CollectItems (slot: menu_item)
   ├─ Page: Customize (slots: size, sides, drink, customizations)
   ├─ Page: Allergens (if any menu item has allergen flag, prompt)
   ├─ Page: Upsell (Gemini-generated, brand-tuned)
   ├─ Page: Confirm
   └─ Page: Escalate (handoff to human if confidence low)
   ↓
[Function calls to Wendy's POS]
   - menu_lookup(item)
   - get_pricing(items)
   - submit_order(items)
   ↓
[Vertex AI Search, grounding for menu items + allergens + regional variations]
   ↓
[Gemini Flash, disambiguation + upsell synthesis]
   ↓
[Chirp TTS, brand-voice spoken output]
   ↓
[Customer hears response]
```

### Key architectural choices

- **Conversational Agents** owns the order *state*, not Gemini. Gemini only handles language understanding + creative synthesis.
- **Vertex AI Search** grounds against the menu. Hallucinated menu items would be a brand crisis.
- **Flash** for the disambiguation step, sub-second latency budget.
- **Region-pinned** per franchise area; reduces round-trip latency.
- **Cloud Audit Logs** with per-restaurant tagging for compliance + analytics.
- **Kill switch** in the Agent Builder console for any restaurant having quality issues.

### Lessons for the architect

- Mix deterministic + generative. Pure-LLM systems are too creative for tight-script workloads.
- Ground against your truth-of-record (menu, allergens). Never let the model improvise on safety-critical content.
- Measure deflection rate + accuracy, not just task completion.

---

## 🚗 Case Study 2, Mercedes-Benz MBUX Voice Assistant

**Workload:** In-car voice assistant with rich function calling (navigation, climate, media, communication, e-commerce).
**Scale:** Millions of new Mercedes vehicles annually starting model-year 2024+; per-driver session.
**Constraints:** Mixed online/offline (vehicle may be in poor coverage); strict latency; multilingual (German, English, French, etc.); deep car-API integration; brand-voice; safety-critical (no distracting flows while driving).

### Architecture

```
[Driver voice (microphone)]
   ↓
[On-device Gemini Nano, wake word + lightweight intent (no network)]
   ↓ (if needs cloud:)
[Vehicle modem → Vertex AI in driver's region (EU/US/APAC)]
   ↓
[Chirp ASR with vehicle-noise-tuned models]
   ↓
[Vertex AI Agent Builder: Conversational Agent, multi-domain flow]
   ├─ navigation_flow
   ├─ climate_flow
   ├─ media_flow
   ├─ communications_flow
   └─ commerce_flow (restaurants, hotels, charging stations)
   ↓
[Function calls to Mercedes cloud + car APIs]
   - get_location(), set_destination()
   - adjust_climate(zone, temp)
   - play_media(query)
   - send_message(contact, body)
   - search_business(category, near, open_now)
   ↓
[Vertex AI Search grounding, for businesses, points of interest]
[Grounding with Google Search, for real-time data (traffic, weather)]
   ↓
[Gemini Pro, synthesis + contextual personalization]
   ↓
[Chirp TTS, Mercedes brand voice]
   ↓
[Spoken response + in-display UI update]
```

### Key architectural choices

- **Hybrid on-device + cloud:** Nano on-device for wake-word + privacy; full pipeline in cloud for complex requests.
- **Per-region deployment:** EU drivers' data stays in EU; APAC in APAC; etc.
- **Conversational Agents + function calling** combo: structured flow + flexible tool use.
- **Multi-grounding:** Google Search for current info; Vertex AI Search for car-specific knowledge.
- **Strict safety:** flows blocked or simplified when vehicle is in motion above speed threshold.

### Lessons

- Latency is sometimes won at the edge. Nano on-device handles wake-word + simple intents without round-tripping.
- Privacy story matters at scale. Per-region deployment is *the* answer for global automotive.
- Tight integration to existing systems (POS, car APIs, CRM) is more architectural work than the LLM itself.

---

## 🛒 Case Study 3, Shopify Sidekick (Merchant AI Assistant)

**Workload:** AI assistant for Shopify merchants helping with store management, product description writing, marketing copy, sales analytics queries, action automation.
**Scale:** Hundreds of thousands of Shopify merchants.
**Constraints:** Multi-tenant (each merchant's store is isolated); secure tool access (must not leak data across merchants); rich tool surface (50+ Shopify Admin API endpoints).

### Architecture

```
[Merchant types query in Shopify Admin chat panel]
   ↓
[Vertex AI Studio prompt + per-merchant context (cached via context caching)]
   ↓
[Gemini 2.5 Pro on Vertex AI]
   ↓
[ADK multi-step orchestration]
   ↓
[Function calls, Shopify Admin API]
   - get_products(filter)
   - update_product(id, fields)
   - get_orders(date_range, filter)
   - get_analytics(metric, dimension)
   - create_discount_code(rules)
   - send_email_campaign(audience, content)
   ↓
[Vertex AI Search, Shopify help docs grounding]
   ↓
[Conversational Agents, for "guided flow" features ("set up Black Friday campaign")]
   ↓
[Gemini synthesis with cited sources]
   ↓
[Response in Admin chat + suggested actions]
```

### Key architectural choices

- **Multi-tenant isolation:** per-merchant service-account scoping for tool calls; one merchant's tools cannot reach another's data.
- **Context caching** for the Shopify-help-docs grounding context (stable across merchants).
- **ADK** for multi-step ("show me the best-selling product, then draft a promotion email for it"), multi-tool, multi-turn.
- **Conversational Agents** for "wizard"-style flows.
- **Function calling** with strict allow-listed tool surfaces per merchant tier.

### Lessons

- ADK + Conversational Agents are complementary, not substitutes.
- Tool-access security is enforced *outside* the LLM (in your service account / IAM scoping), not by trusting the model.
- Multi-tenant + per-tenant context caching is a real cost-saving pattern.

---

## 📷 Case Study 4, Google Photos with Gemini

**Workload:** Photo organization + semantic search across the user's library.
**Scale:** Billions of users; trillions of photos.
**Constraints:** Per-user privacy (photos are private); on-device + cloud hybrid; semantic search must work over years of photos; sub-second search latency.

### Architecture

```
[Photo uploaded]
   ↓
[Backend pipeline runs per-photo Gemini analysis (batch or near-real-time)]
   ↓ produces JSON:
   {
     "description": "Tony in kitchen, evening dinner, plate of pasta...",
     "entities": ["Tony", "pasta", "kitchen"],
     "scene": "home_cooking",
     "text_in_image": ["2019 Barbera"],
     "embedding": [768 floats],
     "timestamp": "...",
     "location": {…}
   }
   ↓
[Index per-user]:
   - Text fields → search index
   - Embedding → Vector Search (ANN)
   - Entities + scene → keyword + filter index
   ↓
[At query time:]
   user types: "the night I made carbonara with Tony in 2019"
       ↓
   Embedding of query → Vector Search top-K + keyword + date filter
       ↓
   Re-ranked by Gemini for semantic relevance
       ↓
   Return top photos
```

### Key architectural choices

- **Pre-compute per photo** at upload time, search latency is dominated by indexing freshness, not query inference.
- **Hybrid retrieval:** ANN over embeddings + keyword on entities + structured filters on date/location.
- **Per-user index:** strict tenant isolation; one user's photos cannot leak to another.
- **Gemini as analysis pipeline**, not query-time inference (mostly): keeps cost predictable.

### Lessons

- For massive-scale semantic search, *batch-index* with the LLM, *query-time with vectors*. Don't call the LLM on every search.
- Multi-modal native (image → JSON description in one call) collapses the legacy 5-pipeline architecture (face/object/scene/OCR/timestamp).
- Embeddings + ANN are the workhorse; the LLM is for analysis, not retrieval.

---

## 🏥 Case Study 5, Verily Med-PaLM 2 Clinical Decision Support

**Workload:** Clinical-decision support, physician asks a clinical question, gets evidence-based suggestion + citations to literature.
**Scale:** Pilot deployments in three hospital systems (low volume, high stakes).
**Constraints:** HIPAA-compliant; per-patient privacy; clinician-in-the-loop required; every response must cite literature; auditable.

### Architecture

```
[Physician in EHR types or speaks question]
   ↓
[Vertex AI in HIPAA-eligible region]
   ↓
[VPC-SC perimeter]
   ↓
[Med-PaLM 2 via Vertex AI Model Garden]
   ↓
[Grounding with Vertex AI Search over clinical-guidelines corpus]
   ↓
[Response with citations to specific papers/guidelines]
   ↓
[Recitation checker + safety_settings (DANGEROUS_CONTENT loosened to BLOCK_ONLY_HIGH for medical)]
   ↓
[SynthID watermarking enabled]
   ↓
[Clinician-in-the-loop review, no output reaches patient chart unsigned]
   ↓
[Audit log: every call tagged with physician identity, patient ID, response, citations]
```

### Key architectural choices

- **Vertex AI in HIPAA-eligible region + signed BAA + CMEK + VPC-SC**, the minimum HIPAA stack.
- **Specialist model (Med-PaLM 2)** chosen over generic Gemini, domain-tuned matters.
- **Grounding is mandatory**, hallucinated medical advice could kill someone.
- **Clinician-in-the-loop** is the safety net, the model is a tool, not a decision-maker.
- **Audit trail** is regulatory.

### Lessons

- The model is the cheap part. The compliance stack costs more, takes longer, and requires more rigor.
- Specialist models exist on Vertex AI for a reason; pick them when the domain warrants.
- High-stakes deployments need defense in depth, not blind LLM trust.

---

## 💰 Cost Optimization Playbook

Every production Vertex AI deployment should run through this checklist:

### 1. Tier the workload

```
Question → tier
─────────────────
On-device, simple → Nano
High-volume classification / extraction → Flash Lite or Flash
Default production → Pro
Hard reasoning, hardest tasks → Ultra
```

### 2. Cache aggressively
- Explicit context caching for any stable prefix >32K tokens
- Re-use cached prefixes across users where possible

### 3. Batch where you can
- Anything that can wait minutes → Batch API (~50% off)
- Stack with Flash Lite for compound 100×+ savings vs Pro PAYG

### 4. Provisioned Throughput at scale
- Above ~5K RPM sustained → Provisioned Throughput beats PAYG
- Match GSCUs to *peak* with PAYG overflow

### 5. Retrieve, don't stuff
- A 200K-token prompt costs 100× more than a 2K-token prompt with RAG
- RAG when the corpus is large or changes

### 6. Distill for narrow workloads
- Pro/Ultra teacher → Flash student via SFT on a narrow task
- Get Pro-quality at Flash cost

### 7. Monitor cost from day 1
- Cloud Billing budget alerts on Vertex AI line item
- Per-feature labeling so you can attribute costs

### 8. Multi-agent specialists
- Five Flash sub-agents often beat one Pro generalist on cost + quality

---

## 🛡️ Security Best Practices (Production Checklist)

```
□ 1. IAM: least privilege per service account
□ 2. VPC-SC perimeter around Vertex + storage
□ 3. CMEK for all data at rest
□ 4. TLS in transit (default; verify)
□ 5. Cloud Audit Logs enabled with retention policy
□ 6. Secret Manager for any keys / tokens (NOT env vars in code)
□ 7. Service Account key rotation (or use Workload Identity)
□ 8. Training-data opt-out confirmed (default on Vertex AI)
□ 9. Region pinned to residency requirement
□ 10. BAA / DPA signed for regulated workloads
□ 11. safety_settings reviewed; deviations documented
□ 12. Grounding configured to reduce hallucination
□ 13. SynthID for content disclosure (if regulator requires)
□ 14. Authority hierarchy in system prompts (prompt-injection defense)
□ 15. Tool least-privilege (read-only by default; human approval for writes)
□ 16. Output filtering for second-pass moderation
□ 17. Rate limiting + anomaly detection
□ 18. Kill switch on the API key fronting the deployment
```

---

## 🆚 Cross-Cloud Comparison (Exam Favorite)

You will be asked at least one cross-cloud question. Here is the matrix.

| Concern | Google Vertex AI | AWS | Azure |
|---------|------------------|-----|-------|
| Flagship LLM | Gemini (1st-party) | Claude / Llama / Mistral (3rd-party on Bedrock) | Azure OpenAI (GPT, 1st-party) |
| Long context | 2M (Gemini Pro) | 200K (Claude Sonnet/Haiku), 500K (Claude Opus 4.6) | 128K (GPT-4o), 1M (GPT-5) |
| Multi-modal native | Yes (Gemini) | Limited (Claude vision; no audio/video) | Limited (GPT-4o multi-modal) |
| Managed RAG | Vertex AI Search | Knowledge Bases for Bedrock | Azure AI Search |
| ANN index | Vertex AI Vector Search | Vector Engine in OpenSearch | Azure AI Search vector |
| Agent platform | Agent Builder | Bedrock Agents | Copilot Studio |
| ML platform | Vertex AI (consolidated) | SageMaker | Azure ML |
| Watermarking | SynthID (Google) | Provenance metadata (Bedrock) | Content Credentials (Microsoft) |
| BAA for HIPAA | Yes | Yes | Yes |
| EU residency | 8+ EU regions | 4+ EU regions | 8+ EU regions |
| Pricing tier strength | Cheapest at Flash; competitive on Pro | Cheapest at Haiku; competitive on Sonnet | Competitive across |

🎯 **Exam pattern:** *"Why pick Google Cloud over AWS Bedrock for a multi-modal video-understanding workload?"* → **Gemini's native multi-modal (video + audio joint training) vs Bedrock's collection of vision-mostly models.**

---

## 🎓 The Capstone Exercise

You are the architect at a mid-sized US insurance company. The CEO asks: *"I want our claims processing to use AI. Customers upload photos of damage, a recorded voice statement, the police report PDF, and prior claims documents. The AI should triage the claim, draft an initial assessment, and route to a human adjuster. Build me the architecture."*

**Constraints:**
- US data residency (no cross-border data transfer)
- HIPAA-eligible (some claims involve medical records)
- Auditable for state insurance regulators
- Multi-modal input (photo + audio + PDF + prior text claims)
- 50K claims/day at scale
- Sub-30-second triage time (customer waiting)
- Human adjuster signs off on every assessment before payout

### Your design (work through before reading the model answer)

Sketch on paper or in your head:

1. Which Gemini tier(s)?
2. Which Vertex AI sub-products?
3. What region?
4. Grounding strategy?
5. Security stack (CMEK, VPC-SC, BAA, IAM)?
6. MLOps pattern (Pipelines + Registry + Monitoring)?
7. Cost-optimization levers?
8. Safety / responsibility controls?
9. Failure modes + mitigations?

### A model answer (one valid architecture)

```
REGION: us-central1 (HIPAA-eligible + US residency)

SECURITY:
- Vertex AI in us-central1
- Signed BAA with Google Cloud
- CMEK with rotating KMS keys
- VPC Service Controls perimeter
- IAM: per-role service accounts (claims-processor, adjuster, admin)
- Secret Manager for API tokens (not env vars)
- Cloud Audit Logs with 7-year retention (regulatory)

INPUT PIPELINE:
- Customer app uploads photo + audio + PDF to GCS bucket inside perimeter
- Pub/Sub event triggers Cloud Function (also in perimeter)
- Cloud Function dispatches to Gemini 2.5 Pro on Vertex AI

MULTI-MODAL ANALYSIS (single Gemini call):
- Image: damage extent, type, repair-cost estimate range
- Audio: customer description, sentiment, key facts
- PDF police report: liability, parties, incident description
- Prior claims (RAG): customer's history
- Structured output schema enforced (claim_summary JSON)

GROUNDING:
- Vertex AI Search over: company claim-policy docs + state insurance regulations + medical-coding references
- Grounded responses with citations to specific policy pages

ROUTING:
- Conversational Agents flow for "escalation rules" (specific thresholds → senior adjuster)
- Function calling for case-management system writes

ADJUSTER REVIEW:
- Triage result in adjuster UI
- Adjuster reviews + approves/edits/rejects
- Approved triage proceeds to payment workflow

MLOPS:
- Vertex AI Pipelines (weekly retrain of the structured-extraction prompt + eval set)
- Model Registry for any tuned Gemini variants
- Model Monitoring for quality drift on claim accuracy (sampling 5% for human review)
- Auto-rollback on quality regression

OBSERVABILITY:
- Cloud Logging: every call tagged with claim ID + adjuster ID
- Cloud Trace: end-to-end span for the multi-step claim processing
- Cloud Monitoring: dashboards for triage time, accuracy, deflection
- LLM-as-judge eval running nightly on sampled cases

SAFETY:
- safety_settings: DANGEROUS_CONTENT loosened to BLOCK_ONLY_HIGH (medical context)
- Recitation checker enabled (default)
- SynthID enabled on any AI-generated narrative
- Authority hierarchy in system prompt
- Tool least-privilege

COST OPTIMIZATION:
- Context caching for stable system prompt + policy docs (>32K tokens)
- Batch API for backfill processing of historical claims
- Provisioned Throughput once steady-state traffic >5K req/min
- Daily cost-attribution dashboards per business line

FAILURE MODES + MITIGATIONS:
- Customer photo unreadable → fallback prompt for re-upload
- Audio transcription fails → escalate to human adjuster with raw audio
- Model timeout → retry with smaller multi-modal prompt; second retry → human escalation
- Quality drift detected → traffic rolls back to prior model version
- Quota exhausted → graceful degradation to "your claim is being reviewed by a human adjuster"
```

This is the kind of full-system answer the PMLE exam wants from you in scenario questions, and the kind of architecture you can defend in a real boardroom.

---

## ⚠️ Production Exam Traps

| Misconception | Reality |
|---------------|---------|
| "AI Studio is fine for production." | **No.** Vertex AI is the enterprise surface. |
| "Pick the most powerful model always." | **No.** Tier match the task. Pro/Ultra waste money on simple tasks. |
| "Provisioned Throughput is always cheaper." | **No.** Below ~1K RPM, PAYG wins. |
| "RAG eliminates hallucinations." | **No.** Reduces. Still need grounding + citations + human review for high-stakes. |
| "One huge agent is simpler than many small ones." | **No.** Multi-agent on Flash often outperforms one Pro generalist on cost AND quality. |
| "Security is opt-in." | **No.** Default to least-privilege; explicitly enable each capability. |
| "Logging is free." | **No.** Cloud Logging has per-byte cost; set retention + sampling. |
| "Region doesn't matter." | **No.** Region = residency + latency + quota + sometimes pricing. |
| "Just use the consumer Gemini app." | **No.** Production = Vertex AI for IAM/audit/BAA/CMEK. |

---

## 🎓 Key Terms (Module 10, Synthesis)

| Term | Definition |
|------|------------|
| **MBUX** | Mercedes-Benz User Experience (in-car) |
| **Sidekick** | Shopify's AI assistant |
| **FreshAI** | Wendy's drive-thru AI |
| **Med-PaLM 2** | Domain-tuned medical model |
| **Deflection rate** | % of customer interactions handled without human escalation |
| **Provisioned Throughput** | Reserved Vertex AI capacity (GSCUs) |
| **GSCU** | Generative AI Service Capacity Unit |
| **Workload Identity** | Google Cloud's keyless service-account auth |
| **Secret Manager** | Google's managed secret store |
| **Eventarc** | Event routing service on GCP |
| **Pub/Sub** | Asynchronous messaging service |
| **Cloud Scheduler** | Managed cron |
| **Apigee** | API management; rate limits + auth |
| **Cloud Endpoints** | Simple API gateway |
| **HITL** | Human-in-the-loop |
| **Deflection** | Routing to human when AI uncertain |

---

## ✅ Module 10 + Course Summary

You now know:

- 🍔 **Wendy's FreshAI**, deterministic flow + grounded Gemini for drive-thru
- 🚗 **Mercedes MBUX**, hybrid on-device + cloud for in-car
- 🛒 **Shopify Sidekick**, multi-tenant ADK + Conversational Agents for SaaS AI
- 📷 **Google Photos**, batch-index with Gemini + query with vectors
- 🏥 **Verily Med-PaLM 2**, HIPAA-grade clinical decision support
- 💰 **Cost optimization playbook**, 8-step
- 🛡️ **Security checklist**, 18 items
- 🆚 **Cross-cloud comparison**, Google vs AWS vs Azure
- 🎓 **Capstone exercise**, full claims-processing architecture

**Course total: ~90 hours of material, 10 modules, 5 case studies, 1 capstone, 3 practice exams + 120 flashcards waiting.**

### Where this leads

1. ✏️ Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) after Modules 1–5
2. ✏️ Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) after Modules 6–9
3. ✏️ Take the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) 2–3 days before sitting Generative AI Leader
4. 🃏 Drill the [Master Flashcards](../Flashcards.md) daily
5. 🎓 Schedule **Google Cloud Generative AI Leader** ($99, 90 min, online proctored)
6. 🎓 (Later) Schedule **Google Cloud Professional Machine Learning Engineer** ($200, 2 hours, 50–60 questions)

You are now equipped to defend any Google-Cloud-AI architecture decision. Go ship.

---

## 📚 Further Reading

- 📖 [Wendy's FreshAI case study (Google Cloud blog)](https://cloud.google.com/blog/topics/customers/wendys-uses-generative-ai-with-google-cloud)
- 📖 [Mercedes-Benz Google Cloud partnership announcement (CES 2024)](https://www.mercedes-benz.com/en/innovation/digital/google-cloud/)
- 📖 [Shopify Sidekick architecture](https://shopify.engineering/sidekick-ai-architecture)
- 📖 [Google Photos Gemini upgrade (Google I/O 2024)](https://blog.google/products/photos/google-photos-ai-search-google-io-2024/)
- 📖 [Verily Med-PaLM 2 deployment paper (2024)](https://www.verily.com/)
- 📖 [Google Cloud Generative AI Leader exam guide](https://cloud.google.com/learn/certification/generative-ai-leader)
- 📖 [Google Cloud Professional Machine Learning Engineer exam guide](https://cloud.google.com/learn/certification/machine-learning-engineer)
