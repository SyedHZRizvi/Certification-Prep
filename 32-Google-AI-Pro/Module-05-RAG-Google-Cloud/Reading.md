# Module 5: RAG on Google Cloud 🔎

> **Why this module matters:** RAG (Retrieval-Augmented Generation) is *the* pattern for keeping LLM outputs accurate, current, and grounded in your own data. Google Cloud has *five different RAG primitives*, and the exam loves to test whether you can pick the right one for a given workload. Worse, the products keep being renamed — Discovery Engine → Vertex AI Search, Matching Engine → Vertex AI Vector Search, GenAI App Builder → Agent Builder. This module is the canonical map.

> **Prerequisites for this module.** Modules 1–4 finished. A Vertex AI project; some test documents (PDFs or text files) in a GCS bucket; basic familiarity with embeddings (a single sentence → a vector of ~768 floats).

---

## 📖 A Story: Mercado Libre's "Either Build It or Buy It" Decision

It is mid-2023. Mercado Libre's ML team is deciding how to ship a seller-assistant feature for the company's 10 million sellers. Sellers ask questions like *"How do I list a fragile item with insured shipping?"* and *"What's the warranty policy if my buyer reports the product never arrived?"* The answers live across (a) Mercado Libre's published seller policies in ~500 PDFs, (b) ~30,000 forum-and-FAQ pages, and (c) ~2 million prior support tickets the company has resolved.

The team builds the first version the "right" way: open-source RAG with Sentence Transformers embeddings, a Pinecone vector index, a custom chunking script, and Gemini Pro for generation. It works in the demo. It does not work in production. Three specific failures emerge:

1. The chunking script splits a paragraph mid-sentence on a numbered list, so a query about "step 3 of returning damaged goods" retrieves a chunk that begins with "you can …" with no preceding context.
2. The Pinecone index is in us-east-1 (Virginia); Mercado Libre serves Brazil and Argentina; round-trip latency from São Paulo is 180ms before Gemini even starts thinking.
3. The hybrid-retrieval logic (semantic + keyword) is in a Python service the team wrote in a hurry; it ranks "cómo cambiar contraseña" (Spanish for "how to change password") below an unrelated English document because the BM25 component is English-tuned.

Mercado Libre's team migrates to **Vertex AI Search** in late 2023. Vertex AI Search handles chunking, embedding (using Google's multi-lingual embedding model), regional deployment in São Paulo, hybrid retrieval (BM25 + dense), reranking, and citation extraction — out of the box. Gemini Pro grounds against the Vertex AI Search retrieval result with a single API call. The team's published case study (Google Cloud Next 2024) reports: less code than the open-source version, lower latency for South American users, better Portuguese + Spanish quality, and the engineering team is no longer responsible for re-tuning chunking when seller policies change.

The lesson: **Vertex AI Search is RAG for teams that do not want to build RAG.** And it is the right choice *most of the time*. But sometimes — when you have a custom embedding model, when you need ANN at extreme scale, when you need a stack you can customize — Vertex AI Vector Search (the lower-level primitive) is the right choice. The exam is testing whether you can tell the difference.

---

## 🧠 RAG Fundamentals (Refresher)

A RAG pipeline has six logical stages:

```
[Ingest] → [Chunk] → [Embed] → [Index] → [Retrieve] → [Generate (grounded)]
```

1. **Ingest:** load source documents (PDFs, HTML, Drive, Confluence, BigQuery).
2. **Chunk:** split into ~500-1,500-token segments with overlap.
3. **Embed:** each chunk → vector (typically 768 or 1,536 dimensions).
4. **Index:** store vectors in an ANN index for fast similarity search.
5. **Retrieve:** at query time, embed the user question, find top-K nearest chunks.
6. **Generate:** pass the retrieved chunks to the LLM as context; LLM answers grounded.

**Why RAG (vs fine-tuning or long-context stuffing):**
- Fresh data — change the source, re-index, no retrain
- Citations — every claim traces to a chunk → a page → a document
- Cost — embedding + retrieval is cheap; only retrieved tokens go to LLM input
- Auditability — you can show *which document* the LLM grounded against

🎯 **Exam pattern:** *"You want Gemini to answer questions about your company's policies, which change quarterly. RAG or fine-tune?"* → **RAG**. Fine-tune is for *behavior* changes (tone, format, output structure) — not knowledge updates.

---

## 🗺️ The Five Google Cloud RAG Stacks

Google offers five distinct RAG building blocks. Pick by workload:

| Stack | What you bring | What Google manages | Best for |
|-------|----------------|---------------------|----------|
| **Vertex AI Search** | Source docs (PDFs, HTML, GCS, BQ, etc.) | Chunking + embedding + index + retrieval + reranking + grounding | "I want RAG fast" — most production workloads |
| **Vertex AI Vector Search** | Embeddings (you compute), data store | Just the ANN index | Custom embedding model, extreme scale, custom retrieval logic |
| **AlloyDB AI + pgvector** | SQL data + embeddings via in-DB function | Postgres-compatible DB with vector indexing | Hybrid SQL + vector workload on existing AlloyDB |
| **Cloud SQL pgvector** | SQL data + embeddings via app code | Postgres / MySQL with the pgvector extension | Small-scale, existing Cloud SQL Postgres |
| **BigQuery vector search** | Structured data + embeddings as a column | Vector index inside BigQuery | Analytics workloads that need semantic over structured data |

The exam loves these distinctions. Memorize what each manages and what it doesn't.

---

## 🥇 Vertex AI Search — The Managed RAG Default

**Vertex AI Search** is the highest-level RAG primitive: you point it at a corpus, it indexes, you query.

### Data sources it supports

- **Websites** (web crawl with sitemap)
- **Cloud Storage** (PDFs, DOCX, HTML, TXT, JSON; structured data in JSONL)
- **BigQuery** tables (structured + unstructured columns)
- **Drive folders**
- **Confluence**
- **GitHub Enterprise** (via connector)
- **Salesforce**, **ServiceNow**, **SharePoint** (enterprise connectors)
- **Direct API ingestion** (push events)

### What it does behind the curtain

1. **Auto-chunking** — semantically aware; respects paragraph boundaries
2. **Embedding** — Google's text-embedding-004 (or multilingual-embedding-002 for non-English)
3. **Index** — managed inverted + vector hybrid
4. **Retrieval** — hybrid BM25 (keyword) + dense (semantic) → fused
5. **Reranking** — secondary model reorders top-K for relevance
6. **Snippet extraction** — returns highlighted snippets + document URIs
7. **Citation linking** — for grounding, returns machine-readable spans

### Connecting to Gemini (grounding)

```python
from vertexai.preview.generative_models import GenerativeModel, Tool, grounding

datastore_path = "projects/my-proj/locations/global/collections/default_collection/dataStores/my-datastore"

grounded_model = GenerativeModel(
    "gemini-2.5-flash",
    tools=[Tool.from_retrieval(grounding.Retrieval(
        source=grounding.VertexAISearch(datastore=datastore_path)
    ))]
)

r = grounded_model.generate_content("What is our return policy for damaged items?")
print(r.text)
for citation in r.candidates[0].grounding_metadata.grounding_chunks:
    print(citation.retrieved_context.uri, citation.retrieved_context.title)
```

One API call → retrieve → ground → generate → citations. This is the Google-recommended pattern.

### Pricing

Per-query pricing + index storage. Roughly $4 per 1,000 search queries on the standard tier; the enterprise tier with reranking is ~$10 per 1,000 (as of 2026-05; verify cloud.google.com).

🎯 **Exam pattern:** *"Build me RAG over 100K PDFs of policy docs that change weekly."* → **Vertex AI Search**. Trap answers: "Vertex AI Vector Search" (too low-level), "Cloud Functions + Pinecone" (you'll re-build everything Search gives you).

---

## 🥈 Vertex AI Vector Search — The ANN Primitive

When you need:

- A *custom* embedding model (e.g., a CLIP fine-tuned on your product images)
- Extreme scale (>100M vectors, low-latency)
- Custom retrieval orchestration (you want to combine multiple indexes, route queries)
- ANN with specific recall/latency trade-offs (HNSW vs ScaNN tuning)

...Vertex AI Vector Search (formerly Matching Engine) is the right pick.

### What you bring vs what Google manages

| You bring | Google manages |
|-----------|----------------|
| Embeddings (computed in your service) | ANN index (ScaNN under the hood) |
| Chunking logic | Auto-scaling endpoint |
| Retrieval orchestration | Region deployment |
| Generation prompt (you pass retrieved chunks) | Encryption (CMEK), VPC-SC compliance |

### Building a Vector Search index

```python
from google.cloud import aiplatform

# 1. Create an index (one-time)
index = aiplatform.MatchingEngineIndex.create_tree_ah_index(
    display_name="product-image-embeddings",
    contents_delta_uri="gs://my-bucket/embeddings/",
    dimensions=512,
    approximate_neighbors_count=20,
    distance_measure_type="DOT_PRODUCT_DISTANCE",
)

# 2. Create an endpoint and deploy the index
endpoint = aiplatform.MatchingEngineIndexEndpoint.create(
    display_name="product-search-endpoint",
    public_endpoint_enabled=True,  # set False for VPC-SC
)
endpoint.deploy_index(index=index, deployed_index_id="prod_v1")

# 3. Query
query_embedding = encode_with_your_model("user query")
response = endpoint.find_neighbors(
    deployed_index_id="prod_v1",
    queries=[query_embedding],
    num_neighbors=10,
)
for neighbor in response[0]:
    print(neighbor.id, neighbor.distance)
```

🎯 **Exam pattern:** *"30M custom product-image embeddings for visual search."* → **Vertex AI Vector Search**. *"100K PDFs of policy text."* → **Vertex AI Search** (different product).

---

## 🐘 AlloyDB AI + pgvector

**AlloyDB** is Google's PostgreSQL-compatible distributed database (a Spanner-Postgres hybrid). **AlloyDB AI** is an extension suite that adds:

1. **`pgvector`** extension for storing + querying vectors in SQL
2. **In-DB embedding generation** — `embedding('text')` SQL function calls Vertex AI behind the scenes
3. **In-DB Gemini calls** — `google_ml.predict_row()` for inference-from-SQL
4. **ScaNN-style indexing** for fast vector queries

```sql
-- AlloyDB AI in action
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  embedding VECTOR(768) GENERATED ALWAYS AS (embedding('text-embedding-004', description)) STORED
);

CREATE INDEX products_embedding_idx ON products
USING SCANN (embedding cosine_distance);

-- Hybrid query: filter by category, then semantic
SELECT name, description
FROM products
WHERE category = 'lighting'
ORDER BY embedding <=> embedding('text-embedding-004', 'warm cozy lamp')
LIMIT 10;
```

**When to pick:** You already have a relational data model in AlloyDB; you want vector search *alongside* relational queries (filter by `customer_id`, `region`, `purchase_date`, then semantic).

🎯 **Exam pattern:** *"E-commerce wants semantic product search filtered by inventory + region + price range."* → **AlloyDB AI** is the cleanest pick (SQL + vectors in one engine).

---

## 🛢️ Cloud SQL pgvector

Cloud SQL for PostgreSQL also supports the `pgvector` extension. Less scalable than AlloyDB; simpler for teams already on Cloud SQL.

```sql
CREATE EXTENSION vector;
ALTER TABLE products ADD COLUMN embedding vector(768);
CREATE INDEX ON products USING ivfflat (embedding vector_cosine_ops);
```

When to pick over AlloyDB:

- You're already on Cloud SQL Postgres and don't want to migrate
- Scale is small (<10M vectors)
- Lower cost

When NOT to pick:

- You need ScaNN-level performance
- You need in-DB Gemini calls (AlloyDB AI exclusive)
- You're at high QPS

---

## 📊 BigQuery Vector Search

BigQuery natively supports vector columns and `VECTOR_SEARCH()`:

```sql
-- Generate embeddings inside BigQuery
CREATE TABLE my_dataset.products AS
SELECT
  id,
  name,
  description,
  ML.GENERATE_EMBEDDING(
    MODEL my_dataset.text_embedding_004,
    description
  ) AS embedding
FROM source_products;

-- Vector index for fast retrieval
CREATE VECTOR INDEX products_idx
ON my_dataset.products(embedding)
OPTIONS(index_type = 'IVF', distance_type = 'COSINE');

-- Search
SELECT *
FROM VECTOR_SEARCH(
  TABLE my_dataset.products,
  'embedding',
  (SELECT ML.GENERATE_EMBEDDING(MODEL my_dataset.text_embedding_004, 'cozy reading lamp')),
  top_k => 10,
  options => '{"fraction_lists_to_search": 0.05}'
);
```

When to pick BigQuery:

- Your data is *already* in BigQuery (data warehouse)
- You need to combine analytic SQL with semantic search ("top 5 products semantically similar to X, sold in last 30 days, by region")
- Batch / nightly analytical workloads

Not for: low-latency (<200ms) online inference; that's what Vertex AI Search or AlloyDB AI is for.

🎯 **Exam pattern:** *"Analytics team needs to find product descriptions similar to a query and join with sales data already in BigQuery."* → **BigQuery vector search**.

---

## 🪡 Choosing the Right RAG Stack — Decision Tree

```
Q1: Is the source structured (SQL/BQ) or unstructured (PDFs/docs)?
    └─ Unstructured →
        Q2: Do you want managed RAG end-to-end?
            └─ Yes → VERTEX AI SEARCH
            └─ No, I have custom embedding model →
                Q3: Scale?
                    └─ <10M vectors, low traffic → CLOUD SQL pgvector
                    └─ 10M–100M, medium → VERTEX AI VECTOR SEARCH
                    └─ Multi-modal images / custom CLIP → VERTEX AI VECTOR SEARCH
    └─ Structured (SQL/BQ) →
        Q2: Where does the data live?
            └─ AlloyDB → ALLOYDB AI + pgvector
            └─ Cloud SQL Postgres → CLOUD SQL pgvector
            └─ BigQuery → BIGQUERY VECTOR SEARCH
            └─ Both relational + heavy semantic → ALLOYDB AI
```

---

## 🧮 Google's Embedding Models

You will pick an embedding model for your vectors. The major options on Vertex AI:

| Model | Dimensions | Languages | Use |
|-------|------------|-----------|-----|
| **text-embedding-004** | 768 | English | General-purpose text RAG |
| **text-embedding-005** | 768 | English | Latest, improved |
| **gemini-embedding-001** | 768 | English + improved | The Gemini-aligned embedding (highest quality) |
| **multilingual-embedding-002** | 768 | 100+ languages | Multilingual content (Mercado Libre's pick) |
| **text-multilingual-embedding-002** | 768 | 100+ languages | Multilingual workloads |
| **multimodalembedding** | 1408 | text + image | CLIP-style — match text against images |

```python
from vertexai.language_models import TextEmbeddingModel

model = TextEmbeddingModel.from_pretrained("text-embedding-004")
embeddings = model.get_embeddings(["product description here"])
print(embeddings[0].values)   # list of 768 floats
```

🎯 **Exam pattern:** *"Spanish + Portuguese e-commerce search."* → **multilingual-embedding-002**. *"Match search queries against product photos."* → **multimodalembedding**.

---

## 🧪 Grounding Modes on Gemini

Gemini supports four grounding patterns:

### 1. Grounding with Google Search (public web)

```python
from vertexai.preview.generative_models import Tool, grounding

model = GenerativeModel("gemini-2.5-flash",
    tools=[Tool.from_google_search_retrieval(grounding.GoogleSearchRetrieval())])

r = model.generate_content("What is the current weather in Buenos Aires?")
```

For real-time public information (weather, news, stock prices, recent events). Returns citations to public URLs.

### 2. Grounding with Vertex AI Search (your private corpus)

```python
tool = Tool.from_retrieval(grounding.Retrieval(
    source=grounding.VertexAISearch(datastore="projects/x/.../dataStores/d")
))
```

For private documents indexed in Vertex AI Search.

### 3. Grounding with Vertex AI Vector Search

Manual retrieve-then-generate; you implement the retrieval, pass the retrieved chunks to the prompt.

### 4. Function-call-driven retrieval (custom)

Define a `retrieve_documents()` function; Gemini's function-calling agent decides when to call it (Module 7).

🎯 **Exam pattern:** *"Travel app needs current flight prices."* → **Grounding with Google Search**. *"Healthcare app needs internal clinical-protocol citations."* → **Grounding with Vertex AI Search**.

---

## 🍔 Wendy's FreshAI RAG Layer

Continuing the Wendy's case study from Module 4: the menu/upsell logic uses Vertex AI Search indexed over:

- Menu items + customizations + prices (structured JSON)
- Upsell rules (e.g., "if customer orders a Frosty, suggest fries")
- Allergen + nutritional info
- Regional menu variations (some markets have unique items)

Gemini grounds against this on every drive-thru turn: "Did you mean a Dave's Single or Double?" gets retrieved-and-grounded against the actual menu, not hallucinated. Re-indexing happens when menus update (weekly to monthly per region).

🎯 **Architectural takeaway:** Even for a "voice assistant," the retrieval layer is the difference between an assistant that takes orders correctly and one that hallucinates menu items.

---

## 🚛 Chunking Strategies (When You Build Your Own)

If you skip Vertex AI Search and roll your own with Vector Search or pgvector, chunking is *the* failure point.

| Strategy | When |
|----------|------|
| **Fixed-size (e.g., 500 tokens)** | Simple text |
| **Sentence-aware** | Preserves grammar |
| **Paragraph-aware** | Preserves logical units |
| **Recursive character splitter** | LangChain default; good for mixed content |
| **Semantic chunking** | Use embeddings to find topic boundaries |
| **Page-aware (PDFs)** | One chunk per page or section |
| **Markdown-aware** | Split on `##` headers |
| **Contextual chunking (Anthropic 2024)** | Add 1-2-sentence context per chunk via LLM call |

**Common pitfall:** chunk size too small → fragment cross-sentence references. Too big → retrieve mostly irrelevant context. Start with 800–1200 tokens + ~100-token overlap; tune from evals.

---

## 🎯 Evaluating RAG Quality

Three metrics to track:

| Metric | How |
|--------|-----|
| **Retrieval recall@K** | Of test questions, what fraction has the right doc in top-K? |
| **Faithfulness** | Does the answer only use retrieved context (LLM-as-judge)? |
| **Answer relevance** | Does the answer address the question (LLM-as-judge)? |

Vertex AI's **Evaluation Service** has built-in RAG metrics:

```python
from vertexai.evaluation import EvalTask
task = EvalTask(dataset=test_set, metrics=["retrieval_recall@5", "faithfulness", "answer_relevance"])
result = task.evaluate(model=grounded_model)
```

---

## ⚠️ RAG Exam Traps

| Misconception | Reality |
|---------------|---------|
| "Vertex AI Search and Vertex AI Vector Search are the same." | **Different products.** Search is managed end-to-end; Vector Search is just the ANN index. |
| "Use fine-tuning for knowledge updates." | **RAG.** Fine-tune for *behavior*; RAG for *knowledge*. |
| "Embeddings are model-agnostic." | **No.** A vector from text-embedding-004 is not comparable to one from OpenAI's text-embedding-3. Match embedder at indexing and querying. |
| "Bigger chunks are always better." | **No.** Larger chunks dilute relevance and increase generation cost. |
| "RAG eliminates hallucinations." | **Reduces, doesn't eliminate.** Faithfulness still requires good prompts + monitoring. |
| "Grounding with Google Search returns the same as a manual Google search." | **Close, with restrictions.** Returns are token-limited and filtered. |
| "BigQuery vector search is for low-latency online inference." | **No.** Use Vertex AI Search / Vector Search for online; BigQuery for batch/analytics. |
| "AlloyDB and Cloud SQL pgvector are identical." | **AlloyDB is much faster** at scale; in-DB Gemini is AlloyDB-exclusive. |

---

## 🎓 Key Terms

| Term | Definition |
|------|------------|
| **RAG** | Retrieval-Augmented Generation |
| **Embedding** | Dense vector representation of text/image |
| **ANN** | Approximate Nearest Neighbor |
| **ScaNN** | Google's ANN library (used internally by Vector Search) |
| **HNSW** | Hierarchical Navigable Small World — popular ANN algorithm |
| **IVF** | Inverted File index |
| **Vertex AI Search** | Managed RAG service |
| **Vertex AI Vector Search** | ANN index primitive |
| **AlloyDB AI** | Postgres + in-DB embedding/Gemini |
| **pgvector** | Postgres extension for vector storage |
| **text-embedding-004** | Google's default text embedding model |
| **multilingual-embedding-002** | Multilingual text embedding |
| **gemini-embedding-001** | Gemini-aligned embedding (high quality) |
| **multimodalembedding** | Text + image embedding (CLIP-style) |
| **Grounding** | LLM citing retrieved sources |
| **Faithfulness** | RAG metric — answer uses only retrieved context |
| **Recall@K** | Retrieval metric — right doc in top-K |
| **Hybrid retrieval** | BM25 (keyword) + dense (semantic) merge |
| **Reranking** | Second-pass model reorders top-K by relevance |
| **Chunk overlap** | Tokens shared between adjacent chunks for context preservation |
| **Contextual chunking** | Anthropic 2024 pattern — LLM adds context to each chunk |

---

## ✅ Module 5 Summary

You now know:

- 🧠 **RAG fundamentals** — ingest → chunk → embed → index → retrieve → generate
- 🗺️ **Five Google Cloud RAG stacks** and how to pick
- 🥇 **Vertex AI Search** as the managed default
- 🥈 **Vertex AI Vector Search** for custom embeddings and extreme scale
- 🐘 **AlloyDB AI + pgvector** for SQL-side vector + in-DB Gemini
- 🛢️ **Cloud SQL pgvector** for simpler relational workloads
- 📊 **BigQuery vector search** for analytics-side semantic
- 🧮 **Google's embedding model family** — 004/005/gemini-001/multilingual-002/multimodal
- 🧪 **Four grounding modes** on Gemini
- 🎯 **RAG evaluation metrics** — recall@K, faithfulness, answer relevance

**Next:** [Module 6 — Fine-Tuning on Vertex AI](../Module-06-Fine-Tuning-Vertex-AI/Reading.md)

---

## 📚 Further Reading

- 📖 [Vertex AI Search docs](https://cloud.google.com/generative-ai-app-builder/docs/introduction)
- 📖 [Vertex AI Vector Search docs](https://cloud.google.com/vertex-ai/docs/vector-search/overview)
- 📖 [Grounding with Vertex AI Search](https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview)
- 📖 [Grounding with Google Search](https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/google-search)
- 📖 [AlloyDB AI](https://cloud.google.com/alloydb/ai)
- 📖 [BigQuery vector search](https://cloud.google.com/bigquery/docs/vector-search-intro)
- 📖 [Text embeddings reference](https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings)
- 📄 [Anthropic Contextual Retrieval (Sept 2024)](https://www.anthropic.com/news/contextual-retrieval) — the chunking technique
