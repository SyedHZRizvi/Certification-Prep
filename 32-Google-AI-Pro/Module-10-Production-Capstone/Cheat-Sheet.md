# 📋 Module 10 Cheat Sheet: Production Patterns & Capstone

> Architecture matters more than model choice. Five canonical patterns.

---

## 🍔 Wendy's FreshAI

```
Voice → Chirp ASR → Conversational Agent (order state)
                  → Function calls (POS)
                  → Vertex AI Search (menu grounding)
                  → Gemini Flash (disambiguation + upsell)
                  → Chirp TTS → customer
```

🎯 Win: deterministic state machine + grounded generation; no model improvisation on menu.

---

## 🚗 Mercedes MBUX

```
Voice → Nano on-device (wake + intent)
     → (if cloud) Vertex AI in driver's region
     → Chirp ASR → Conversational Agents → function calls (vehicle/cloud APIs)
     → Gemini Pro → Chirp TTS
```

🎯 Win: hybrid on-device + cloud; per-region residency; safety-gated by vehicle speed.

---

## 🛒 Shopify Sidekick

```
Merchant → Gemini Pro on Vertex AI + ADK (multi-step)
        + function calls (Shopify Admin API, per-merchant scoping)
        + Vertex AI Search (help docs grounding)
        + Conversational Agents (guided flows)
        + context caching
```

🎯 Win: multi-tenant isolation via IAM scoping; ADK + Conversational Agents complementary.

---

## 📷 Google Photos with Gemini

```
Upload → Gemini batch-index (description + entities + scene + OCR + embedding)
      → Per-user index (vector + keyword + structured)
At search → ANN top-K + keyword + date filter → Gemini rerank
```

🎯 Win: batch the LLM, query with vectors; never call the LLM per search.

---

## 🏥 Verily Med-PaLM 2

```
Vertex AI in HIPAA region + signed BAA + CMEK + VPC-SC
   → Med-PaLM 2 (specialist) + grounded against clinical guidelines (Vertex AI Search)
   → safety_settings (DANGEROUS loosened) + recitation + SynthID
   → clinician-in-the-loop + audit log every call
```

🎯 Win: defense in depth; compliance stack > model choice.

---

## 💰 Cost Optimization Playbook

```
1. Tier the workload (Nano/Flash Lite/Flash/Pro/Ultra)
2. Cache stable prefixes (~75% off)
3. Batch where you can (~50% off)
4. Provisioned Throughput >5K RPM steady
5. Retrieve, don't stuff (RAG over long context)
6. Distill Pro → Flash for narrow tasks
7. Monitor cost from day 1 (Cloud Billing budgets)
8. Multi-agent specialists vs one generalist
```

Stacking can yield 10-100× savings.

---

## 🛡️ Production Security Checklist

```
□ IAM least privilege
□ VPC-SC perimeter
□ CMEK
□ TLS (default)
□ Cloud Audit Logs + retention
□ Secret Manager for keys
□ Workload Identity (no SA keys)
□ Training-data opt-out
□ Region pinned
□ BAA / DPA signed
□ safety_settings documented
□ Grounding for facts
□ SynthID for disclosure
□ Authority hierarchy in prompts
□ Tool least-privilege
□ Output filtering
□ Rate limiting
□ Kill switch
```

---

## 🆚 Cross-Cloud Quick Reference

| Concern | Google Vertex AI | AWS Bedrock | Azure OpenAI |
|---------|------------------|-------------|--------------|
| Flagship | Gemini (native multi-modal, 2M) | Claude (200K-500K) | GPT (128K-1M) |
| Managed RAG | Vertex AI Search | Knowledge Bases | Azure AI Search |
| Agent platform | Agent Builder | Bedrock Agents | Copilot Studio |
| Multi-modal native video | ✅ Best | ⚠️ Limited | ⚠️ Limited |
| BAA / HIPAA | ✅ | ✅ | ✅ |
| Cheapest tier | Flash | Haiku | gpt-5-nano |

---

## 🎯 The 4 Architectural Patterns to Memorize

1. **Voice/agent (Wendy's, Mercedes):** Conversational Agents + function calling + Gemini synthesis + Chirp
2. **Multi-tenant SaaS (Shopify):** ADK + function calling + per-tenant IAM + cached shared context
3. **Massive semantic search (Photos):** Batch-index with LLM + ANN query
4. **Regulated decision support (Verily):** Specialist model + grounding + HIPAA stack + human-in-loop

---

## 📋 Capstone Architecture Template

For any GenAI workload, articulate:

1. **Model tier** (Flash / Pro / Ultra / Nano)
2. **Deployment surface** (Vertex AI; almost never AI Studio in production)
3. **Region** (residency + latency)
4. **Grounding strategy** (Google Search / Vertex AI Search / Vector Search / function-calling)
5. **Multi-modal needs** (text only or vision/audio/video)
6. **Agent pattern** (Conversational Agents / ADK / function calling / hybrid)
7. **Security stack** (CMEK / VPC-SC / BAA / IAM)
8. **MLOps loop** (Pipelines / Registry / Monitoring)
9. **Cost levers** (caching / Batch / Provisioned Throughput / tier choice)
10. **Responsible controls** (safety_settings / SynthID / grounding / human-in-loop)
11. **Failure modes + mitigations**
12. **Kill switch**

---

## ✏️ Final Quick Self-Check

1. Three Wendy's architectural wins? ___
2. Why batch-index in Google Photos? ___
3. Top 3 cost levers? ___
4. Top 6 security checklist items? ___
5. When pick Vertex AI over AWS Bedrock? ___

If all 5 in <90s, you own this course. 🎓

---

## 🎓 Course Complete

Take the [Practice Exams](../../../Practice-Exams/) → drill the [Flashcards](../Flashcards.md) → schedule the **Google Cloud Generative AI Leader** exam.

🟦 **You got this.**

---

➡️ [Back to README](../README.md)
