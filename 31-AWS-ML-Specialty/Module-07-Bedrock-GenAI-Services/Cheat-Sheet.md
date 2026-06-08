# 📋 Module 7 Cheat Sheet: Bedrock & GenAI

> Print. Tape. Drill.

---

## 🌟 Bedrock Model Families (2026)

| Provider | Models | Strength |
|----------|--------|----------|
| **Anthropic** | Claude 3.5 Sonnet, Haiku, Claude 3 Opus | Best chat + coding + long ctx |
| **Meta** | Llama 3 / 3.1 / 3.2 (8B, 70B, 405B) | Open weights; fine-tune in Bedrock |
| **Mistral** | Mistral Large, Mixtral 8x7B / 8x22B | EU LLM |
| **Amazon** | Titan Text / Embeddings / Image, Nova Pro/Lite/Micro | AWS-native, HIPAA |
| **Cohere** | Command R+, Embed v3 | Multilingual |
| **Stability** | SDXL, Stable Image | Image gen |

---

## 📚 KB Pipeline

```
Data Sources (S3 / Confluence / SharePoint / Web)
   ↓ chunk (default 300 tok + overlap; or semantic / hierarchical)
   ↓ embed (Titan v2 default; 1024 dims, configurable)
   ↓ store (OpenSearch Serverless default; Aurora pgvector, Pinecone, etc.)
   ↓ Retrieve OR RetrieveAndGenerate (returns citations)
```

---

## 🛠️ Bedrock Agent Anatomy

```
Agent (base prompt + LLM)
  ├─ Action Groups (Lambdas exposing APIs)
  ├─ Knowledge Bases (RAG)
  ├─ Guardrails
  └─ Memory (short + long term)
```

---

## 🛡️ Guardrail Categories

- **Content filters** (hate/insults/sexual/violence/prompt-injection)
- **Topic filters** (block "medical advice", "legal advice", ...)
- **Word filters** (profanity, brand-protection)
- **PII filters** (detect / redact / block)
- **Contextual grounding check** (anti-hallucination)

---

## 🎯 RAG vs Fine-Tune vs Continued Pre-Training

| Need | Pick |
|------|------|
| Ground in **facts** that change | **RAG (KB)** |
| Teach **style / format / persona** | **Fine-tune** |
| Adapt to **domain corpus** (legal/medical) | **Continued pre-training** (Titan) |
| Tiny model from big teacher | **Distillation** |

---

## 💸 Bedrock Cost Modes

| Mode | When |
|------|------|
| **On-Demand** | Bursty / unknown traffic |
| **Provisioned Throughput** | Steady high-volume (cheaper) |
| **Batch Inference** | Offline / async (~50% cheaper) |
| **Prompt Caching** | Long shared system-prompt prefixes |

---

## 🚀 JumpStart vs Bedrock

| | JumpStart | Bedrock |
|-|-----------|---------|
| Hosting | Your endpoint | Serverless |
| Pricing | Per instance-hour | Per token |
| Customisation | Full / VPC | Limited fine-tune |
| Models | 300+ HF / OSS | Curated frontier (Claude/Llama/Titan/Mistral) |
| Best for | Custom networking, deep fine-tune | Quick start, frontier quality |

---

## 🤖 Amazon Q Family

| Product | For |
|---------|-----|
| **Q Business** | Enterprise chat across 40+ data sources |
| **Q Developer** | Code gen / transformation in IDE (was CodeWhisperer) |
| **Q in QuickSight** | NL Q&A on BI data |
| **Q in Connect** | Call-centre agent assist |
| **Q in AWS Console** | "Why is my Lambda timing out?" assist |

---

## 🧱 Standard 2026 RAG Architecture

```
Docs (S3)
   ↓ Bedrock KB (chunk + Titan embed + OpenSearch Serverless)
   ↓
User question → Bedrock Agent + Claude Sonnet
   ↓             ↓
   ↓        Action Groups (Lambda calling internal APIs)
   ↓
Guardrails (topic + PII + grounding)
   ↓
Response with citations
```

---

## 🚨 Module-7 Top Traps

| Phrase | Right answer |
|--------|-------------|
| "Reduce hallucination" | **RAG / KB** |
| "Teach company writing style" | **Fine-tune** |
| "Open-ended chatbot with API calls" | **Bedrock Agent** |
| "Block medical-advice topics" | **Guardrails topic filter** |
| "Verify output grounded in docs" | **Contextual grounding** |
| "Run Llama in your VPC" | **JumpStart in VPC** or **Bedrock + PrivateLink** |
| "Cost cut on offline LLM workload" | **Batch Inference** |
| "Cost cut on steady high-volume LLM" | **Provisioned Throughput** |
| "Cost cut on repeated long system prompts" | **Prompt caching** |
| "Default vector store" | **OpenSearch Serverless** |
| "Enterprise chat over Confluence + S3" | **Amazon Q Business** |
| "Force JSON output" | **Tool use / function calling** |
| "Adapt model to legal corpus" | **Continued pre-training (Titan)** |

---

## ✏️ Self-Check

1. RAG vs fine-tune, when each? ___
2. Tools + APIs + KB orchestration → ___
3. Default KB vector store? ___
4. Block specific topics → ___
5. Run Llama in VPC → ___
6. Cost cut for batch LLM workloads → ___

➡️ [Module 8: Evaluation, Tuning & Bias](../Module-08-Evaluation-Tuning-Bias/Reading.md)
