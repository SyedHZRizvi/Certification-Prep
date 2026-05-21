# 📋 Module 5 Cheat Sheet: Doc Intelligence + AI Search

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧾 Document Intelligence Model Picker

| Model | Use for |
|---|---|
| **Read** | Plain text (words/lines) from PDFs/TIFFs |
| **Layout** | + tables, paragraphs, selection marks (NO named fields) |
| **Prebuilt-Invoice / -Receipt / -ID / -BusinessCard / -W2 / -1098 / -HealthInsurance / -Contract** | Out-of-the-box named fields for well-known forms |
| **Custom Template** | YOUR form, **fixed layout** |
| **Custom Neural** | YOUR fields, **varying layouts** |
| **Custom Composed** | Routes across multiple custom models |
| **Custom Classifier** | Categorize docs before extraction |

```python
client = DocumentIntelligenceClient(endpoint, AzureKeyCredential(key))
poller = client.begin_analyze_document(
    model_id="prebuilt-invoice",
    body={"urlSource": url}
)
```

🚨 Custom Template = same layout. Custom Neural = varying layouts.

---

## 🧠 Azure AI Search — DISKS Model

```
  ┌──────────────┐  pull   ┌──────────┐ enrich  ┌──────────┐
  │ Data Source  │ ──────▶ │ Indexer  │ ──────▶ │ Skillset │
  └──────────────┘         └──────────┘         └────┬─────┘
                                                     ▼
                              ┌─────────────────────────┐
                              │  Search Index (queries) │
                              └─────────────────────────┘
                                       ▲ optional
                              ┌────────┴───────────┐
                              │ Knowledge Store    │ (Storage)
                              └────────────────────┘
```

**D-I-S-K-S:** Data source · Indexer · Skillset · Knowledge store · Search index.

### Field attributes
`key` · `searchable` · `filterable` · `sortable` · `facetable` · `retrievable` · `analyzer`

---

## 🔎 Query Types

| Type | When |
|---|---|
| **Simple** | Keyword + boolean |
| **Full Lucene** | Fielded, fuzzy, range |
| **Semantic** | LLM-style re-rank → captions + answers (S1+) |
| **Vector** | Embedding similarity (HNSW, cosine default) |
| **Hybrid** | Keyword + vector via Reciprocal Rank Fusion (RRF) |
| **Hybrid + Semantic** ⭐ | Microsoft's RAG gold standard |

---

## 🧮 Vector Search Essentials

```json
{
  "name": "contentVector",
  "type": "Collection(Edm.Single)",
  "dimensions": 1536,
  "vectorSearchProfile": "my-profile"
}
```

| Embedding model | Dimensions |
|---|---|
| `text-embedding-ada-002` | 1536 |
| `text-embedding-3-small` | 1536 |
| `text-embedding-3-large` | 3072 |

**Algorithm:** HNSW (default) or Exact KNN
**Metric:** cosine (default), dotProduct, euclidean

---

## 💰 SKU Reminders

| SKU | Semantic | Notes |
|---|---|---|
| Free | ❌ | 50 MB, dev only |
| Basic | ❌ | 2 GB |
| S1+ | ✅ | Production |
| L-tiers | ✅ | Massive index size |

---

## 🏆 Exam Power Phrases

**Usually right**:
- ✅ "Custom Classifier to route docs"
- ✅ "Custom Neural for varying layouts"
- ✅ "Hybrid + semantic for RAG"
- ✅ "Integrated vectorization via Embedding skill"
- ✅ "Change detection policy on data source"

**Usually wrong**:
- ❌ "Custom Template for variable layouts"
- ❌ "Semantic ranker on Free tier"
- ❌ "Read API for invoice field extraction"
- ❌ "Vector search alone for RAG"
- ❌ "Indexer pushes from your app"

---

## ⚠️ Anti-Patterns

- ❌ Picking Custom Template when layouts vary
- ❌ Using Read for structured-field extraction (use prebuilt or Layout+custom)
- ❌ Manually embedding docs in app code instead of integrated vectorization
- ❌ Free-tier search index for production
- ❌ Forgetting `retrievable:true` and wondering why fields don't return

---

## ✏️ Quick Self-Check

1. DISKS spelled out? ___
2. Custom Template vs Neural — which for varying layouts? ___
3. text-embedding-3-large dimensions? ___
4. Minimum SKU for semantic ranker? ___
5. Default vector algorithm + distance? ___

If you can answer all 5 in 60 seconds, you own Module 5. ✅

---

➡️ [Module 6: Conversational AI](../Module-06-Conversational-AI/Reading.md)
