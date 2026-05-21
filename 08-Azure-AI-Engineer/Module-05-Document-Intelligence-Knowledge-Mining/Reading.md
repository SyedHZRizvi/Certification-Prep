# Module 5: Document Intelligence & Knowledge Mining 📄

> **Why this module matters:** This is the LARGEST single module on the AI-102 exam by surface area. Document Intelligence + Azure AI Search together touch 15–20% of questions and are central to every RAG architecture (Modules 7 & 8). Master the prebuilt vs custom model distinction AND the index/indexer/skillset triangle.

---

## 🍕 A Story: Maya's PDF Avalanche

Maya wins a contract with a hospital. Day 1, she gets 80,000 PDFs: insurance forms, lab reports, medical histories. The hospital needs:
1. **Extract structured fields** from each PDF — patient name, DOB, insurer, diagnosis codes
2. **Search across all of them** with natural-language queries — *"all patients diagnosed with Type 2 diabetes in Q2"*
3. **Power a chatbot** that answers questions citing the source PDF

She uses **Document Intelligence** for #1 (prebuilt models + a custom one for the hospital's intake form), **Azure AI Search** for #2 (index the extracted JSON, enable semantic + vector search), and **OpenAI On Your Data** for #3 (RAG, covered in Module 7). This module owns parts #1 and #2.

---

## 🧾 Azure AI Document Intelligence

Document Intelligence (formerly **Form Recognizer**) extracts text, tables, structure, and key-value pairs from documents.

### The model catalog

| Type | Examples | When to use |
|---|---|---|
| **Read** | OCR — text + lines + words + selection marks | Pure text extraction from PDFs/TIFFs |
| **Layout** | Tables, structure, selection marks, paragraphs | When you need structure but no fields |
| **General Document** (legacy) | KV pairs + entities from any document | Generic forms (now overlaps with Layout 4.0) |
| **Prebuilt: Invoice** | Vendor, items, totals, tax | B2B invoices |
| **Prebuilt: Receipt** | Merchant, items, total, tip, date | Expense receipts |
| **Prebuilt: ID document** | Passport, driver's license — name, DOB, doc #, MRZ | KYC |
| **Prebuilt: Business card** | Names, emails, phones | CRM ingestion |
| **Prebuilt: W-2 / 1098 / 1099** | US tax forms | Tax workflows |
| **Prebuilt: Health Insurance Card** | Member ID, group, payer | Insurance |
| **Prebuilt: Contract / Mortgage / Bank statement** | Domain-specific | Financial workflows |
| **Custom Template** | Forms where layout is consistent (a single template) | Your intake forms |
| **Custom Neural** | Forms with varying layouts but same fields | Real-world variation |
| **Custom Composed** | Combine multiple custom models into one | Routing across templates |
| **Custom Classifier** | Categorize incoming docs before routing | "Is this an invoice or a receipt?" |

🎯 **Exam pattern:** When a question says "documents follow a strict template (same form every time)" → **Custom Template**. When it says "documents have varying layouts but same fields" → **Custom Neural**.

### Python (current SDK)

```python
from azure.ai.documentintelligence import DocumentIntelligenceClient
from azure.core.credentials import AzureKeyCredential

client = DocumentIntelligenceClient(endpoint, AzureKeyCredential(key))

# Prebuilt invoice
poller = client.begin_analyze_document(
    model_id="prebuilt-invoice",
    body={"urlSource": "https://example.com/invoice.pdf"}
)
result = poller.result()

for invoice in result.documents:
    print(invoice.fields["InvoiceTotal"].value_currency)
    print(invoice.fields["VendorName"].content)
```

### Training a custom model

1. Upload labeled documents (5+ minimum for Template, 5+ for Neural too) to **Azure Blob Storage**
2. Use **Document Intelligence Studio** to label fields (or label programmatically with `fields.json`)
3. Train via SDK / REST:

```python
from azure.ai.documentintelligence import DocumentIntelligenceAdministrationClient
from azure.ai.documentintelligence.models import DocumentBuildMode, BuildDocumentModelRequest, AzureBlobContentSource

admin = DocumentIntelligenceAdministrationClient(endpoint, AzureKeyCredential(key))

poller = admin.begin_build_document_model(
    BuildDocumentModelRequest(
        model_id="hospital-intake-v1",
        build_mode=DocumentBuildMode.NEURAL,    # or TEMPLATE
        azure_blob_source=AzureBlobContentSource(
            container_url="https://acct.blob.core.windows.net/training?sv=..."
        )
    )
)
model = poller.result()
```

🚨 **Trap:** Template models need labels in `*.labels.json` and `*.ocr.json` alongside each training file. Neural models can train on labels in a single `labels.json` file. Picking the wrong mode for your data is a frequent exam wrong answer.

### Document Intelligence Studio

Web portal at <https://documentintelligence.ai.azure.com/> (formerly formrecognizer.appliedai.azure.com). Use it to:
- Try prebuilt models on sample documents
- Label custom training data
- Train + test custom models
- Compose / classify models

### Pricing tier note

- **F0 (free)** — limited per-month pages
- **S0 (standard)** — pay per page
- Custom Neural models cost more than Custom Template

---

## 🔍 Azure AI Search

Azure AI Search (formerly **Azure Cognitive Search**) is a **PaaS search service** built around the inverted index, with bolt-ons for **AI enrichment**, **semantic ranking**, and **vector search**.

### The four core concepts (you WILL be tested on these)

| Concept | What it is |
|---|---|
| **Index** | The schema + storage for searchable documents (like a database table) |
| **Indexer** | A pull-based crawler that ingests data from a data source on a schedule |
| **Data Source** | Connection info to where docs live (Blob, Cosmos, SQL, Data Lake, etc.) |
| **Skillset** | A pipeline of cognitive skills that enrich docs during indexing (OCR, KV extraction, entity recognition, custom Web API) |

```
Data Source → Indexer → (Skillset → enriched docs) → Index
                                                 ↓
                                          Search queries
```

🧠 **Memory hook:** **DISKS** — **D**ata source, **I**ndexer, **S**killset, **K**nowledge store, **S**earch index.

### Indexes — what they hold

An index has **fields**, each with attributes:

| Attribute | Effect |
|---|---|
| `key` | Unique ID per doc (one per index) |
| `searchable` | Full-text searchable (tokenized) |
| `filterable` | Use in `$filter` expressions |
| `sortable` | Use in `$orderby` |
| `facetable` | Use as facets in UI |
| `retrievable` | Returned in search results |
| `analyzer` | Tokenizer (language analyzers, custom) |

```http
PUT /indexes/products?api-version=2024-07-01
{
  "name": "products",
  "fields": [
    {"name":"id","type":"Edm.String","key":true,"retrievable":true},
    {"name":"title","type":"Edm.String","searchable":true,"retrievable":true,"analyzer":"en.microsoft"},
    {"name":"price","type":"Edm.Double","filterable":true,"sortable":true,"facetable":true,"retrievable":true},
    {"name":"contentVector","type":"Collection(Edm.Single)","dimensions":1536,"vectorSearchProfile":"my-profile"}
  ],
  "vectorSearch": { "profiles":[{"name":"my-profile","algorithm":"hnsw-algo"}], "algorithms":[{"name":"hnsw-algo","kind":"hnsw"}] }
}
```

### Indexers — pull from data sources

Supported data sources:
- **Azure Blob Storage** (most common)
- **Azure Cosmos DB** (NoSQL, Mongo, Gremlin)
- **Azure SQL Database / SQL on VMs**
- **Azure Data Lake Storage Gen2**
- **Azure Table Storage**
- **SharePoint Online** (preview)
- **OneLake** (Fabric)

Schedule with cron-like expressions. Track **change detection** policies (high watermark, soft delete).

### Skillsets — AI enrichment

A skillset runs **cognitive skills** that augment each document. Built-in skills include:

| Skill category | Examples |
|---|---|
| **Vision** | OCR, ImageAnalysis (tags, captions) |
| **Language** | Entity Recognition, Language Detection, Key Phrase Extraction, PII Detection, Sentiment, Translation |
| **Utility** | Split, Merge, Conditional, Document Extraction, Shaper |
| **Custom** | Web API skill, Azure ML skill — call your own model |
| **GenAI** | **Azure OpenAI Embedding** skill (vectorize text), **Chat Completion** skill |

Skills output enriched data that the indexer maps to your index fields via the **outputFieldMappings**.

### Knowledge Store (optional sink)

A skillset can also write enriched data to a **Knowledge Store** — tables, objects, files in Azure Storage — so downstream apps (Power BI, etc.) can analyze the enrichments.

### Query types

| Query type | Use case |
|---|---|
| **Simple syntax** | `"laptop -refurbished"` — keyword + boolean |
| **Full Lucene** | `title:"AI 102"~3 AND price:[100 TO 200]` — fielded, fuzzy, range |
| **Semantic ranker** | Re-rank top results with an LLM-style ranker; returns answers + captions |
| **Vector search** | Similarity search using an embedding vector |
| **Hybrid search** | Combines keyword + vector with **Reciprocal Rank Fusion (RRF)** |
| **Hybrid + semantic** | Hybrid first, then semantic re-rank — Microsoft's "gold standard" for RAG |

### Semantic ranking explained

You enable it on an index with a **semantic configuration** that names the title field, content fields, and keyword fields. Then queries can pass `queryType=semantic` and get:
- `@search.rerankerScore` — semantic relevance
- `@search.captions` — short excerpt highlighting why the doc matched
- `@search.answers` — extractive answer pulled from the top docs

Pricing tier: requires **Standard** SKU (S1+); Free/Basic tiers don't support semantic ranker.

### Vector search & embeddings

1. Embed text into vectors using an embedding model (typically **Azure OpenAI `text-embedding-3-small` / `-3-large` / `-ada-002`**)
2. Store vectors in fields of type `Collection(Edm.Single)`
3. Search by passing a query vector or by **vector query with text** (server embeds for you when you wire the Embedding skill)

Algorithms:
- **HNSW** (Hierarchical Navigable Small World) — fast, default
- **Exact KNN** — slower, more accurate

Distance metrics: `cosine` (default), `dotProduct`, `euclidean`.

### Integrated vectorization (the easy path)

In recent versions, the Embedding skill in your skillset can call Azure OpenAI directly, vectorize each document chunk, and store the vectors in your index — **zero glue code**. This is how Azure AI Foundry's "On Your Data" feature wires up indexes for you.

### Hybrid search query (Python)

```python
from azure.search.documents import SearchClient
from azure.search.documents.models import VectorizableTextQuery

client = SearchClient(endpoint, "products", AzureKeyCredential(key))

results = client.search(
    search_text="lightweight laptop for travel",
    vector_queries=[VectorizableTextQuery(text="lightweight laptop for travel", k_nearest_neighbors=5, fields="contentVector")],
    query_type="semantic",
    semantic_configuration_name="my-semantic-config",
    top=10
)

for r in results:
    print(r["@search.score"], r["@search.reranker_score"], r["title"])
```

---

## 🧠 Putting It Together: Knowledge Mining for RAG

The canonical RAG pipeline looks like:

```
1. Upload PDFs to Blob Storage
2. Document Intelligence (Layout / prebuilt) extracts text + structure
   OR Indexer Document Extraction skill handles PDFs natively
3. Skillset:
     - Split text into chunks (Split skill)
     - Embed each chunk (Azure OpenAI Embedding skill)
     - (optional) Run NER/PII/Translation
4. Index stores chunks + vectors + metadata
5. App queries index with hybrid + semantic, returns top-k
6. Pass top-k to Azure OpenAI as grounding context (covered in Module 7)
```

🎯 **Exam pattern:** *"Customer has 10K PDFs and wants natural-language Q&A with citations. Which Azure services?"* → Azure AI Search (index + skillset with embedding) + Azure OpenAI On Your Data.

---

## ⚙️ Pricing Tiers For Azure AI Search

| SKU | Replicas / Partitions | Notes |
|---|---|---|
| **Free** | 1 / 1 | 50 MB; no SLA; no semantic ranker; one per subscription |
| **Basic** | up to 3 / 1 | 2 GB; SLA available |
| **Standard S1** | up to 12 / 12 | Semantic ranker available |
| **Standard S2 / S3** | larger | High-density, high-throughput |
| **Storage Optimized L1 / L2** | up to 12 / 12 | Massive index size, slower queries |

🚨 **Trap:** Semantic ranker = **Standard tier or higher**. Free/Basic = no semantic.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---|---|
| "Indexer is the search index" | No — Indexer is a crawler. Index is the schema/store |
| "Skillset is required" | No — many indexes have no skillset, just plain data |
| "Vector search alone is the gold standard" | Hybrid + semantic re-rank beats pure vector for most RAG |
| "Document Intelligence is the same as Read API" | Document Intelligence has STRUCTURE (KV, tables, fields). Read is plain OCR |
| "Custom Template handles varying layouts" | No — varying layouts → Custom Neural |
| "Indexers push from your app" | Pull — indexer reads from data sources |
| "Semantic ranker works on Free tier" | Standard tier or higher only |

---

## 🚨 Exam Traps

1. **DISKS — Data source / Indexer / Skillset / Knowledge store / Search index.** Five distinct things.
2. **Custom Template vs Custom Neural.** Template = fixed layout. Neural = varying layout.
3. **Read vs Layout vs prebuilt-Invoice.** Read = words. Layout = + tables/structure. Invoice = + named fields.
4. **Hybrid + semantic** is Microsoft's "gold standard" for RAG quality.
5. **HNSW** is the default vector algorithm; **cosine** is the default distance.
6. **Embedding model dimensions** must match between index field and embedding model (e.g. ada-002 = 1536, text-embedding-3-small = 1536, text-embedding-3-large = 3072).
7. **Knowledge Store** is OPTIONAL — don't pick it as the answer to "where does my search index live?" (that's the index itself).

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| **Document Intelligence** | Service that extracts text, structure, KV pairs, fields from docs (formerly Form Recognizer) |
| **Prebuilt model** | Out-of-the-box model for invoices, receipts, IDs, etc. |
| **Custom Template model** | For documents with a fixed/known layout |
| **Custom Neural model** | For documents with varying layouts but consistent fields |
| **Custom Composed model** | Combines multiple custom models into one routing model |
| **Custom Classifier** | Categorizes incoming docs before routing |
| **Azure AI Search** | PaaS search service with AI enrichment, vector, semantic |
| **Index** | Schema + storage of searchable docs |
| **Indexer** | Pull-based crawler from a data source |
| **Data Source** | Connection to where source docs live |
| **Skillset** | Pipeline of cognitive skills that enrich docs during indexing |
| **Knowledge Store** | Optional Storage sink for enrichments |
| **Semantic Ranker** | LLM-style re-ranker that produces captions + answers (Standard tier+) |
| **Vector Search** | Similarity search using embeddings |
| **HNSW** | Default vector algorithm |
| **Hybrid search** | Keyword + vector combined via Reciprocal Rank Fusion |
| **Integrated vectorization** | Embedding skill + vector index — no glue code |
| **Embedding model** | text-embedding-3-small/large or ada-002 |
| **RRF** | Reciprocal Rank Fusion — algorithm for combining ranked lists |

---

## ✅ Module 5 Summary

You now know:
- 📄 Document Intelligence model catalog (Read, Layout, prebuilt, Custom Template/Neural/Composed/Classifier)
- 🧠 The DISKS mental model for Azure AI Search
- 🔎 Query types (simple, full Lucene, semantic, vector, hybrid)
- 🧮 Vector search (HNSW, cosine, embedding dimensions)
- 🏗️ Integrated vectorization for zero-code RAG plumbing
- 💰 Tier requirements (semantic = Standard+)
- 🚨 Common service-selection traps

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 6: Conversational AI](../Module-06-Conversational-AI/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Document Intelligence docs](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/)
- 📖 [Document Intelligence Studio](https://documentintelligence.ai.azure.com/)
- 📖 [Azure AI Search docs](https://learn.microsoft.com/en-us/azure/search/)
- 📖 [Vector search in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/vector-search-overview)
- 📖 [Semantic ranker](https://learn.microsoft.com/en-us/azure/search/semantic-search-overview)
- 📖 [RAG with Azure AI Search + OpenAI](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)
