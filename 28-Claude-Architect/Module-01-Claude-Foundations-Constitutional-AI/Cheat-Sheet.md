# 📋 Module 1 Cheat Sheet: Claude Foundations & Constitutional AI

> One page. Print it. Tape it to your monitor. Review before the assessment.

---

## 🏛️ Anthropic At A Glance

| Fact | Value |
|------|-------|
| **Founded** | September 2021 |
| **HQ** | San Francisco, CA |
| **Structure** | Public Benefit Corporation (PBC) |
| **Founders** | Dario Amodei (CEO), Daniela Amodei (President), + 5 senior ex-OpenAI researchers |
| **Major investors** | Amazon ($4B+), Google, Spark Capital, Lightspeed, Menlo Ventures |
| **Revenue (2026)** | $5B+ annualized run-rate (per public reporting) |
| **Flagship product** | Claude (model family) |
| **Public safety framework** | Responsible Scaling Policy (RSP) |

---

## 🧠 Constitutional AI in One Box

```
1. Pretrain language model on text corpus
2. Supervised fine-tune on demonstrations
3. CAI loop (per harmful prompt):
   a. Model generates response
   b. AI critic critiques per CONSTITUTION
   c. Model REVISES
   d. (prompt, revised response) → training data
4. RLAIF: RL with AI preference labels
   (vs RLHF which uses human preference labels)
```

**Key principles in the constitution:** Helpfulness · Harmlessness · Honesty · Anti-manipulation · UDHR-grounded values

🚨 *The constitution shapes TRAINING, not runtime rule-checking.*

---

## 🎴 Claude Model Family (2026)

| Tier | Approx $/Mtok In | $/Mtok Out | Latency | Context | Mental Model |
|------|------------------|------------|---------|---------|--------------|
| **Haiku 4.5** | $1 | $5 | ~250ms | 200K | Smart intern — fast, cheap |
| **Sonnet 4.6** | $3 | $15 | ~600ms | 200K (1M β) | Senior engineer — default |
| **Opus 4.6** | $15 | $75 | ~1.5s | 500K | Distinguished engineer — slow, smart |

**Prompt caching:** Cached tokens billed at ~10% of standard → **~90% cost cut** on stable prompt prefixes.

---

## 🔀 Tier Routing Rules of Thumb

| Task profile | Tier |
|--------------|------|
| Classification / extraction / routing | Haiku |
| High-volume background job | Haiku |
| General chat / RAG / 1–3 tool agent | **Sonnet (default)** |
| Hard reasoning / multi-file refactor / math | Opus |
| Latency-sensitive UI (<300ms) | Haiku |
| Answer goes straight to production w/o review | Opus + evals |

---

## 🛡️ Responsible Scaling Policy — ASL Levels

| Level | Description |
|-------|-------------|
| ASL-1 | Low-risk older models |
| ASL-2 | Current/recent frontier — limited bio/chem/cyber uplift |
| ASL-3 | Meaningful uplift → significantly hardened security, 3rd-party evals |
| ASL-4 | Meaningful autonomy → BSL-4-grade controls (commitments still being finalized) |
| ASL-5 | Hypothetical superintelligence territory |

Analogous to **BSL (BioSafety Levels)** in biology.

---

## 🔬 Claude vs GPT vs Gemini — When to Pick Which

| Pick Claude when | Pick GPT when | Pick Gemini when |
|------------------|---------------|------------------|
| Agentic coding | Real-time voice | Massive context (>500K) |
| Structured extraction | Broadest tool ecosystem | Video understanding |
| Long-doc reasoning | Already on Azure | Already on Google Cloud |
| Regulated industry | Custom GPTs / Assistants | Cheapest at Flash tier |
| Need prompt caching savings | | Workspace integration |

---

## 🌐 Three Ways to Run Claude in Production

| Path | Strengths | Best for |
|------|-----------|----------|
| **Anthropic direct API** | Newest features land here first (computer use, MCP, latest models) | R&D, startups, teams that want bleeding-edge |
| **AWS Bedrock** | Data stays in your AWS account; AWS billing; AWS IAM | Enterprises on AWS, regulated workloads |
| **GCP Vertex AI** | Native GCP integration; GCP billing & IAM | Enterprises on GCP |

---

## 💰 Unit-Economics Cheat (Sonnet 4.6)

| Workload | Per convo (no cache) | Per convo (cached system) |
|----------|----------------------|---------------------------|
| 4K in + 600 out | ~$0.021 | ~$0.013 |
| 10K in + 1K out | ~$0.045 | ~$0.025 |
| 50K in + 2K out | ~$0.180 | ~$0.060 |

**Mental shortcut:** Sonnet ≈ Haiku × 5. Opus ≈ Sonnet × 5.

---

## 🗓️ Anthropic Timeline (Memorize Cold)

| Year | Event |
|------|-------|
| 2021 | Anthropic founded |
| Dec 2022 | Constitutional AI paper |
| Mar 2023 | Claude 1.0 |
| Jul 2023 | Claude 2 (100K context) |
| Mar 2024 | Claude 3 family (Haiku/Sonnet/Opus naming) |
| Jun 2024 | Claude 3.5 Sonnet |
| Oct 2024 | Computer use beta |
| **Nov 2024** | **Model Context Protocol (MCP) announced** |
| 2025 | Claude 4 family |
| 2026 | Claude 4.6 / 4.7 series; $5B+ annualized revenue |

---

## 🏆 Exam Power Phrases

✅ Often **right**:
- "Constitutional AI shapes training, not runtime checks"
- "Sonnet is the default workhorse; Haiku for volume, Opus for hardest"
- "Bedrock keeps data in your AWS account"
- "Prompt caching cuts cached-input cost by ~90%"
- "RSP/ASL is analogous to BSL in biology"
- "Public Benefit Corporation, not nonprofit, not capped-profit"

❌ Often **wrong**:
- "Anthropic uses only RLAIF / never uses humans" (uses both)
- "Constitutional AI guarantees harmlessness" (probabilistic)
- "Opus is always better than Sonnet" (often overkill)
- "Claude weights are open-source" (closed)
- "ASL-3 means deployment is banned" (means stronger controls)
- "MCP and tool use are the same" (transport vs runtime)

---

## 🗓️ Key Facts To Memorize Cold

- Anthropic founded **2021**, **PBC**, San Francisco
- **Constitutional AI** paper: Bai et al. **2022**
- Three tiers: **Haiku / Sonnet / Opus**
- Sonnet 4.6 context: **200K** standard (1M beta)
- Prompt caching: **~90%** off cached input tokens
- ASL levels analogous to **BSL** in biology
- Three deployment paths: **Anthropic direct / AWS Bedrock / GCP Vertex**
- MCP announced **November 2024**
- Major investors: **Amazon + Google**
- Module 1 domain: **10% of the assessment**

---

## ✏️ Quick Self-Check

Cover the answers and recite:
1. RLHF vs Constitutional AI — one-line difference? ___
2. Three Claude tiers and one use case each? ___
3. What does ASL-3 commit Anthropic to? ___
4. Three places you can run Claude in production? ___
5. The CFO-defensible one-liner for picking Claude over GPT? ___

If you can answer all 5 in under 90 seconds, you own this module. ✅

---

➡️ [Module 2: Prompt Engineering with Claude](../Module-02-Prompt-Engineering-Claude/Reading.md)
