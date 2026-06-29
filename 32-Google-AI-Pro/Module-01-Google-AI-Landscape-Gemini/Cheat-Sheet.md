# 📋 Module 1 Cheat Sheet: Google AI Landscape & Gemini Model Family

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🏛️ Google AI At A Glance

| Fact | Value |
|------|-------|
| **Founding paper of Transformer** | Vaswani et al. 2017, "Attention Is All You Need" |
| **Authors** | 8 Google Brain researchers (Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin) |
| **DeepMind acquired** | 2014 (UK lab) |
| **Brain × DeepMind merger** | April 2023 → **Google DeepMind**, CEO (Chief Executive Officer) Demis Hassabis |
| **Gemini 1.0** | December 2023 (Nano, Pro, Ultra) |
| **Gemini 1.5 Pro 1M context** | February 2024; 2M tokens by May 2024 |
| **Gemini 2.5 Pro** | March 2025 (thinking mode, top-tier reasoning) |
| **Google AI Principles** | June 2018, 7 principles + 4 red lines |
| **2026 Google Cloud AI revenue** | $15B+ annualized (per Alphabet disclosures) |
| **Flagship products** | Gemini, Vertex AI, Google AI Studio, Agent Builder |

---

## 🧠 The Gemini Lineage in One Box

```
PageRank (1998)
   ↓
Google Brain founded (2011) ─── DeepMind acquired (2014)
   ↓                                   ↓
Transformer paper (2017), Google Brain
   ↓
BERT (2018) → T5 (2019) → LaMDA (2021)
   ↓
PaLM (2022) → PaLM 2 (2023) → Bard (2023)
   ↓
   ┌── Google Brain × DeepMind MERGE (April 2023)
   ↓
Gemini 1.0 (Dec 2023: Nano/Pro/Ultra)
Gemini 1.5 Pro (Feb 2024: 1M → 2M tokens)
Gemini 2.0 Flash (Dec 2024: native multi-modal output)
Gemini 2.5 Pro (Mar 2025: thinking mode)
Gemini 2.5 Ultra (Oct 2025: top tier)
```

🚨 *The Transformer was invented at Google Brain in 2017, predates GPT-1 by months.*

---

## 🎴 The Gemini Family (2026)

| Tier | Approx $/Mtok In | $/Mtok Out | Latency | Context | Mental Model |
|------|------------------|------------|---------|---------|--------------|
| **Nano** | $0 (on-device) | $0 | depends on device | ~32K | On-device, privacy-first |
| **2.5 Flash Lite** | $0.04 | $0.15 | ~200ms | 1M | Edge / ultra-cheap batch |
| **2.5 Flash** | $0.075 | $0.30 | ~400ms | 1M (2M β) | High-throughput default |
| **2.5 Pro** | $1.25 | $10 | ~1.0s | **2M** | **Default workhorse** |
| **2.5 Ultra** | $5 | $30 | ~3.0s | 2M | Frontier / hardest |

**Context caching:** ~**75%** off cached input tokens for prefixes reused across requests.

---

## 🔀 Tier Routing Rules of Thumb

| Task profile | Tier |
|--------------|------|
| On-device features (Pixel/Android) | Nano |
| Classification / extraction / routing | Flash or Flash Lite |
| High-volume background job | Flash |
| General chat / RAG (Retrieval-Augmented Generation) / 1–3 tool agent | **Pro (default)** |
| Hard reasoning / multi-file refactor / math | Pro w/ thinking mode, or Ultra |
| Latency-sensitive UI (User Interface) (<300ms) | Flash Lite |
| Healthcare / regulated decisions | Ultra + grounding + human review |
| Multi-modal (image + audio + video in one call) | Pro or Ultra |

---

## 🛡️ Google AI Principles (2018), Quick Reference

**Seven principles:**
1. Be socially beneficial
2. Avoid creating or reinforcing unfair bias
3. Be built and tested for safety
4. Be accountable to people
5. Incorporate privacy design principles
6. Uphold high standards of scientific excellence
7. Be made available for uses that accord with these principles

**Four red lines (will NOT pursue):**
1. Tech that causes overall harm
2. Weapons whose principal purpose is to injure
3. Surveillance violating international norms
4. Tech contravening international law / human rights

---

## 🔬 Gemini vs GPT vs Claude, When to Pick Which

| Pick Gemini when | Pick GPT when | Pick Claude when |
|------------------|---------------|------------------|
| Multi-modal native (video/audio) | Real-time voice | Agentic coding |
| 1M–2M context required | Already on Azure | Structured extraction |
| Grounding to Google Search | Custom GPTs / Assistants | Long-doc reasoning |
| Already on GCP (Google Cloud Platform) / Workspace | Broadest tool ecosystem | Constitutional-AI safety story |
| On-device (Nano) | | Prompt-caching economics |
| Cheapest at Flash tier | | |

🎯 Note: **Claude is also available on Vertex AI Model Garden**, Module 3.

---

## 🌐 Two Ways to Run Gemini

| Path | Strengths | Best for |
|------|-----------|----------|
| **Google AI Studio** (aistudio.google.com) | Free, instant, no GCP project needed | Prototyping, hobby projects, learning |
| **Vertex AI** (cloud.google.com/vertex-ai) | IAM (Identity and Access Management), VPC (Virtual Private Cloud)-SC, CMEK, billing, regions, audit, Provisioned Throughput | Enterprise, regulated, scale |

🚨 *AI Studio = consumer-grade. Vertex AI = enterprise-grade. NEVER confuse these on the exam.*

---

## 💰 Unit-Economics Cheat (per conversation: 4K in + 600 out)

| Tier | No cache | With caching (3K cached) |
|------|----------|--------------------------|
| Flash Lite | ~$0.0003 | ~$0.0002 |
| **Flash** | **~$0.0005** | **~$0.0004** |
| Pro | ~$0.011 | ~$0.008 |
| Ultra | ~$0.041 | ~$0.030 |

**Mental shortcut:** Flash ≈ 1/20 of Pro. Pro ≈ 1/4 of Ultra. Cache saves ~25–35% in practice.

---

## 🗓️ Google AI Timeline (Memorize Cold)

| Year | Event |
|------|-------|
| 1998 | Google founded, PageRank |
| 2011 | Google Brain founded |
| 2014 | DeepMind acquired |
| **2017** | **"Attention Is All You Need", Transformer** |
| 2018 | BERT; **Google AI Principles published** |
| 2019 | T5 |
| 2021 | LaMDA internal |
| 2022 | PaLM (540B) |
| Feb 2023 | Bard launch (PaLM-based); famous demo flub |
| **Apr 2023** | **Brain + DeepMind merge → Google DeepMind** |
| May 2023 | PaLM 2 |
| **Dec 2023** | **Gemini 1.0** (Nano, Pro, Ultra) |
| **Feb 2024** | **Gemini 1.5 Pro 1M context** (→ 2M by May 2024) |
| Aug 2024 | Gemini 1.5 Flash |
| Dec 2024 | Gemini 2.0 Flash (native multi-modal output) |
| **Mar 2025** | **Gemini 2.5 Pro** (thinking mode) |
| Jun 2025 | Vertex AI Agent Builder GA |
| Oct 2025 | Gemini 2.5 Ultra |
| 2026 | Gemini 2.5 family current, Cloud AI revenue $15B+ |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Gemini is natively multi-modal, trained on text + image + audio + video jointly"
- "Pro is the default workhorse; Flash for volume, Ultra for hardest"
- "Vertex AI with VPC-SC + CMEK + signed BAA for regulated workloads"
- "Context caching cuts cached-input cost by ~75%"
- "AI Studio for prototyping; Vertex AI for production"
- "Claude is also available on Vertex AI Model Garden"
- "Grounding with Google Search (public) vs Grounding with Vertex AI Search (private)"
- "Gemini Nano runs on-device on Pixel/Android"

❌ Often **wrong**:

- "Gemini's vision is bolted on" (it's native)
- "AI Studio and Vertex AI are the same thing" (they're not)
- "Google AI Search and Vertex AI Vector Search are interchangeable" (different products)
- "Gemini weights are open-source" (closed, Gemma is the open-weight sibling)
- "Constitutional AI is a Google technique" (Anthropic's)
- "All Gemini tiers have 2M context" (only Pro/Ultra; Flash is 1M)
- "The Transformer was invented by OpenAI" (Google Brain, 2017)

---

## 🗓️ Key Facts To Memorize Cold

- Transformer = **Vaswani et al. 2017**, Google Brain
- Brain + DeepMind merger = **April 2023** → Google DeepMind, Demis Hassabis CEO
- Gemini tiers = **Nano / Flash Lite / Flash / Pro / Ultra**
- Pro/Ultra context = **2M tokens**; Flash = 1M
- Context caching = **~75%** off cached input
- Google AI Principles = **2018**, 7 principles + 4 red lines
- Two platforms = **Google AI Studio (consumer)** vs **Vertex AI (enterprise)**
- Open-weight sibling = **Gemma** (not Gemini)
- Claude on Vertex AI Model Garden = **YES**
- 2026 Cloud AI revenue = **$15B+** annualized

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. The Transformer paper title + year + lab? ___
2. Gemini tiers smallest to largest? ___
3. Studio vs Vertex AI, one-line difference? ___
4. Pro context window in tokens? ___
5. What is grounding, and what are the two grounding sources on Vertex AI? ___

If you can answer all 5 in under 90 seconds, you own this module. ✅

---

➡️ [Module 2: Google AI Studio & Gemini API (Application Programming Interface)](../Module-02-AI-Studio-Gemini-API/Reading.md)
