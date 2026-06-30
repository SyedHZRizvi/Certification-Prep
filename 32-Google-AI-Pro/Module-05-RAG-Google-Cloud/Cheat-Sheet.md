# 📋 Module 5 Cheat Sheet: RAG on Google Cloud

> Five RAG stacks. Pick by workload. Memorize the decision tree.

---

## 🗺️ The Five Stacks

| Stack | You bring | Google manages | Best for |
|-------|-----------|-----------------|----------|
| **Vertex AI Search** | Source docs | Chunk + embed + index + retrieve + rerank + ground | Default for managed RAG |
| **Vertex AI Vector Search** | Embeddings | Just the ANN index (ScaNN) | Custom embeddings, scale |
| **AlloyDB AI + pgvector** | SQL data + (optional) embeddings via in-DB function | Postgres + ScaNN-style index + in-DB Gemini | Hybrid SQL + vector |
| **Cloud SQL pgvector** | SQL data + embeddings via app code | Postgres + pgvector extension | Small-scale, existing CSQL |
| **BigQuery vector** | Structured data + embeddings as column | BQ vector index + `ML.GENERATE_EMBEDDING` | Analytics workloads |

---

## 🧭 Decision Tree

```
Q1: Source structured (SQL/BQ) or unstructured (docs)?

UNSTRUCTURED →
  Q2: Want managed RAG end-to-end?
    YES  → VERTEX AI SEARCH
    NO (custom embeddings, custom orchestration) →
      Q3: Scale?
        <10M, low traffic → CLOUD SQL pgvector
        10M–100M+, image embeddings → VERTEX AI VECTOR SEARCH

STRUCTURED →
  AlloyDB → ALLOYDB AI
  Cloud SQL Postgres → CLOUD SQL pgvector
  BigQuery → BIGQUERY VECTOR SEARCH
```

---

## 🧮 Google Embedding Models

| Model | Dim | Languages | Use |
|-------|-----|-----------|-----|
| text-embedding-004 | 768 | English | General RAG |
| text-embedding-005 | 768 | English | Latest |
| **gemini-embedding-001** | 3072 (MRL-truncatable to 1536/768) | English+ | Highest quality |
| **multilingual-embedding-002** | 768 | 100+ | Multilingual (Mercado Libre's pick) |
| **multimodalembedding** | 1408 | text + image | Visual search (Wayfair) |

🚨 *Embeddings are NOT model-agnostic. Match indexer and querier.*

---

## 📡 Grounding Modes

| Mode | Source | Use |
|------|--------|-----|
| Google Search | Public web | Real-time info (weather, news, prices) |
| Vertex AI Search | Your indexed corpus | Private docs |
| Vector Search (DIY) | Your own retrieval | Custom retrieval logic |
| Function-calling | Custom tool | Agent decides when to retrieve |

```python
# Vertex AI Search grounding tool
from vertexai.preview.generative_models import Tool, grounding
tool = Tool.from_retrieval(grounding.Retrieval(
    source=grounding.VertexAISearch(datastore="projects/.../dataStores/d")
))
model = GenerativeModel("gemini-2.5-flash", tools=[tool])
```

---

## 🚛 Chunking

| Strategy | When |
|----------|------|
| Sentence-aware | Grammar-preserving |
| Paragraph-aware | Logical units |
| Recursive splitter | Mixed content default |
| Page-aware | PDFs |
| Markdown-aware | Docs/wikis |
| Contextual (Anthropic 2024) | LLM-added context per chunk |

**Start with:** 800–1,200 tokens + ~100-token overlap.

---

## 🎯 Eval Metrics

| Metric | Question |
|--------|----------|
| Recall@K | Right doc in top-K? |
| Faithfulness | Answer uses only retrieved context? |
| Answer relevance | Answer addresses the question? |

---

## 🎯 Power Phrases

✅ Often **right**:

- "Vertex AI Search = managed RAG; Vector Search = ANN index"
- "RAG for knowledge updates; fine-tune for behavior"
- "multilingual-embedding-002 for multi-language workloads"
- "BM25 + dense + reranker = hybrid retrieval"
- "Vertex AI Search index needs scheduled refresh"
- "Embeddings must match between index and query (same model)"
- "AlloyDB AI for SQL + vector + in-DB Gemini"
- "BigQuery vector for analytics-side semantic"

❌ Often **wrong**:

- "Search and Vector Search are the same"
- "Fine-tune for knowledge updates" (no, RAG)
- "Embeddings are model-agnostic" (no)
- "RAG eliminates hallucinations" (reduces, doesn't eliminate)
- "BigQuery vector is for online low-latency" (no, batch/analytics)

---

## 🍔 Wendy's FreshAI RAG Layer

Vertex AI Search indexed over:

- Menu items + customizations + prices
- Upsell rules
- Allergens
- Regional menu variations

Re-indexed weekly to monthly per region.

---

## ✏️ Quick Self-Check

1. Five GCP RAG stacks? ___
2. Vertex AI Search vs Vector Search? ___
3. Google's multilingual embedder name? ___
4. Two grounding modes? ___
5. Three RAG eval metrics? ___

If all 5 in <90s, you own this module. ✅

---

➡️ [Module 6: Fine-Tuning on Vertex AI](../Module-06-Fine-Tuning-Vertex-AI/Reading.md)
