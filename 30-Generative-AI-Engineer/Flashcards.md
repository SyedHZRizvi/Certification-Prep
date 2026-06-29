<style>
.fc-app{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI (User Interface)',Roboto,sans-serif;max-width:760px;margin:1.5rem auto 2.5rem;padding:1.25rem;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(99,102,241,.10),0 2px 6px rgba(0,0,0,.04);border:1px solid #eef0fb;color:#1f2937}
.fc-app *{box-sizing:border-box}
.fc-controls{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;justify-content:space-between;margin-bottom:.85rem}
.fc-controls-left,.fc-controls-right{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}
.fc-select,.fc-btn{font-family:inherit;font-size:.9rem;padding:.5rem .85rem;border-radius:8px;border:1px solid #d1d5db;background:#fff;color:#1f2937;cursor:pointer;transition:all .15s ease;line-height:1.2}
.fc-select:hover,.fc-btn:hover{border-color:#6366f1;color:#6366f1}
.fc-btn.fc-primary{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-primary:hover{filter:brightness(1.08);color:#fff;border-color:transparent;box-shadow:0 4px 14px rgba(99,102,241,.35)}
.fc-btn.fc-success{background:#10b981;color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-success:hover{background:#059669;color:#fff;border-color:transparent}
.fc-btn.fc-danger{background:#fff;color:#dc2626;border-color:#fecaca;font-weight:600}
.fc-btn.fc-danger:hover{background:#dc2626;color:#fff;border-color:#dc2626}
.fc-btn.fc-ghost{background:#f3f4f6;border-color:#e5e7eb;font-size:.82rem;color:#6b7280}
.fc-btn.fc-ghost:hover{background:#fee2e2;color:#b91c1c;border-color:#fecaca}
.fc-counter{font-size:.95rem;color:#4b5563;font-weight:600;font-variant-numeric:tabular-nums}
.fc-progress{height:8px;background:#eef0fb;border-radius:99px;overflow:hidden;margin-bottom:1rem}
.fc-progress-bar{height:100%;background:linear-gradient(90deg,#6366f1,#8b5cf6);border-radius:99px;width:0%;transition:width .3s ease}
.fc-card-wrap{perspective:1400px;margin-bottom:1rem}
.fc-card{position:relative;width:100%;min-height:240px;cursor:pointer;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,0,.2,1)}
.fc-card.fc-flipped{transform:rotateY(180deg)}
.fc-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:14px;padding:2rem 1.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:1px solid #e0e7ff;box-shadow:0 4px 18px rgba(99,102,241,.12)}
.fc-front{background:linear-gradient(135deg,#eef2ff 0%,#f5f3ff 100%)}
.fc-back{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border-color:transparent;transform:rotateY(180deg)}
.fc-label{position:absolute;top:.85rem;left:1rem;font-size:.7rem;letter-spacing:.12em;font-weight:700;text-transform:uppercase;opacity:.65}
.fc-known{position:absolute;top:.85rem;right:1rem;font-size:1.1rem;color:#10b981;font-weight:700}
.fc-back .fc-known{color:#86efac}
.fc-text{font-size:1.18rem;line-height:1.55;font-weight:500;max-width:100%;word-wrap:break-word}
.fc-back .fc-text{font-weight:500}
.fc-hint{position:absolute;bottom:.85rem;left:0;right:0;font-size:.75rem;opacity:.55;letter-spacing:.05em}
.fc-actions{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}
.fc-actions .fc-btn{flex:1 1 auto;min-width:108px}
.fc-empty{text-align:center;padding:2rem;color:#6b7280}
.fc-source-hidden{display:none !important}
@media (max-width:640px){
  .fc-app{margin:1rem .5rem 1.5rem;padding:1rem;border-radius:10px}
  .fc-controls{flex-direction:column;align-items:stretch}
  .fc-controls-left,.fc-controls-right{justify-content:space-between}
  .fc-select,.fc-counter{width:100%;text-align:center}
  .fc-card{min-height:220px}
  .fc-face{padding:1.6rem 1rem}
  .fc-text{font-size:1.05rem}
  .fc-actions .fc-btn{flex:1 1 45%;min-width:0;font-size:.85rem;padding:.55rem .4rem}
}
</style>

<div class="fc-app" id="fc-app" role="region" aria-label="Interactive flashcards" markdown="0">
  <div class="fc-controls">
    <div class="fc-controls-left">
      <select class="fc-select" id="fc-section" aria-label="Filter by section"><option value="__all__">All Sections</option></select>
    </div>
    <div class="fc-controls-right">
      <span class="fc-counter" id="fc-counter">Card 0 of 0</span>
      <button class="fc-btn fc-ghost" id="fc-reset" title="Clear known-card progress">Reset progress</button>
    </div>
  </div>
  <div class="fc-progress" aria-hidden="true"><div class="fc-progress-bar" id="fc-progress-bar"></div></div>
  <div class="fc-card-wrap">
    <div class="fc-card" id="fc-card" role="button" tabindex="0" aria-label="Flashcard. Click or press space to flip.">
      <div class="fc-face fc-front">
        <span class="fc-label">Question</span>
        <span class="fc-known" id="fc-known-front" aria-label="Marked as known"></span>
        <div class="fc-text" id="fc-question">Loading flashcards…</div>
        <span class="fc-hint">Click to flip</span>
      </div>
      <div class="fc-face fc-back">
        <span class="fc-label">Answer</span>
        <span class="fc-known" id="fc-known-back" aria-label="Marked as known"></span>
        <div class="fc-text" id="fc-answer"></div>
        <span class="fc-hint">Click to flip back</span>
      </div>
    </div>
  </div>
  <div class="fc-actions">
    <button class="fc-btn" id="fc-prev" aria-label="Previous card">&larr; Previous</button>
    <button class="fc-btn fc-success" id="fc-got" aria-label="Mark as known and advance">&#10003; Got it</button>
    <button class="fc-btn fc-danger" id="fc-tryagain" aria-label="Mark as not known and advance">&#10007; Try again</button>
    <button class="fc-btn" id="fc-shuffle" aria-label="Shuffle cards">&#128256; Shuffle</button>
    <button class="fc-btn fc-primary" id="fc-next" aria-label="Next card">Next &rarr;</button>
  </div>
</div>

<script>
(function(){
  var STORAGE_KEY = 'genai-engineer-cards';
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    var app = document.getElementById('fc-app');
    if(!app) return;
    // Parse Q/A pairs from rendered DOM. Look for <p> tags containing <strong>Q:</strong> / <strong>A:</strong> within the article body.
    // Strategy: scan the document body sequentially, tracking current section as we encounter <h2>.
    var container = app.parentNode;
    // Walk all relevant elements after the widget in document order
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(n){
        var t = n.tagName;
        if(t === 'H2' || t === 'P') return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_SKIP;
      }
    });
    var cards = [], sections = [], seen = {}, currentSection = 'General', pendingQ = null, pendingQEl = null;
    var sourceEls = []; // collect <p> Q/A elements + their <h2> headings to hide later
    var node;
    while((node = walker.nextNode())){
      if(node.tagName === 'H2'){
        var h2text = (node.textContent || '').trim();
        if(h2text){
          currentSection = h2text;
          if(!seen[h2text]){ seen[h2text] = true; sections.push(h2text); }
          sourceEls.push(node);
        }
        pendingQ = null; pendingQEl = null;
        continue;
      }
      // <p> node
      var strong = node.querySelector && node.querySelector('strong');
      if(!strong) continue;
      var marker = (strong.textContent || '').trim().toUpperCase();
      var fullText = (node.textContent || '').trim();
      if(marker.indexOf('Q:') === 0){
        // Strip leading "Q:" from full text
        var qBody = fullText.replace(/^Q:\s*/i, '').trim();
        pendingQ = { section: currentSection, q: qBody };
        pendingQEl = node;
        sourceEls.push(node);
      } else if(marker.indexOf('A:') === 0 && pendingQ){
        var aBody = fullText.replace(/^A:\s*/i, '').trim();
        pendingQ.a = aBody;
        cards.push(pendingQ);
        sourceEls.push(node);
        pendingQ = null; pendingQEl = null;
      }
    }
    if(cards.length === 0){
      document.getElementById('fc-question').textContent = 'No flashcards found. The source content is shown below.';
      return;
    }
    // Hide source markdown now that we have cards. Also hide separating <hr> between sections that follow Q/A blocks.
    sourceEls.forEach(function(el){ el.classList.add('fc-source-hidden'); });
    // Hide the leading H1 + intro blockquote? Keep them. Hide all <hr> within the article body that appear after our widget, they're section separators in the source list.
    var hrs = document.querySelectorAll('hr');
    hrs.forEach(function(hr){
      // Only hide hrs that come after the widget AND are between hidden sections
      var pos = hr.compareDocumentPosition(app);
      if(pos & Node.DOCUMENT_POSITION_PRECEDING){
        hr.classList.add('fc-source-hidden');
      }
    });
    // Also hide ordered/unordered lists and the closing H2s ("STUDY TIPS", "BEFORE THE EXAM") that follow the cards
    var allH2 = document.querySelectorAll('h2');
    allH2.forEach(function(h){ if(!h.classList.contains('fc-source-hidden') && h.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) h.classList.add('fc-source-hidden'); });
    var allOL = document.querySelectorAll('ol, ul');
    allOL.forEach(function(l){ if(l.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) l.classList.add('fc-source-hidden'); });
    var trailingP = document.querySelectorAll('p');
    trailingP.forEach(function(p){
      if(p.classList.contains('fc-source-hidden')) return;
      if(p.closest('.fc-app')) return;
      if(p.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) p.classList.add('fc-source-hidden');
    });
    var trailingBQ = document.querySelectorAll('blockquote');
    trailingBQ.forEach(function(bq){ if(bq.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) bq.classList.add('fc-source-hidden'); });

    // Build section dropdown
    var sectionSel = document.getElementById('fc-section');
    sections.forEach(function(s){
      var opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      sectionSel.appendChild(opt);
    });

    // Load known-card state
    var known = {};
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if(raw) known = JSON.parse(raw) || {};
    } catch(e){ known = {}; }

    function cardId(c){ return c.section + '||' + c.q; }
    function saveKnown(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(known)); } catch(e){} }

    var deck = cards.slice();
    var idx = 0;
    var sectionFilter = '__all__';

    function applyFilter(){
      if(sectionFilter === '__all__'){ deck = cards.slice(); }
      else { deck = cards.filter(function(c){ return c.section === sectionFilter; }); }
      idx = 0;
      render();
    }

    function shuffle(){
      for(var i = deck.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
      }
      idx = 0;
      render();
    }

    var cardEl = document.getElementById('fc-card');
    var qEl = document.getElementById('fc-question');
    var aEl = document.getElementById('fc-answer');
    var counterEl = document.getElementById('fc-counter');
    var progressBar = document.getElementById('fc-progress-bar');
    var knownFront = document.getElementById('fc-known-front');
    var knownBack = document.getElementById('fc-known-back');

    function render(){
      cardEl.classList.remove('fc-flipped');
      if(deck.length === 0){
        qEl.textContent = 'No cards in this section.';
        aEl.textContent = '';
        counterEl.textContent = 'Card 0 of 0';
        progressBar.style.width = '0%';
        knownFront.textContent = ''; knownBack.textContent = '';
        return;
      }
      if(idx < 0) idx = 0;
      if(idx >= deck.length) idx = deck.length - 1;
      var c = deck[idx];
      qEl.textContent = c.q;
      aEl.textContent = c.a;
      counterEl.textContent = 'Card ' + (idx + 1) + ' of ' + deck.length;
      var knownCount = deck.reduce(function(acc, cc){ return acc + (known[cardId(cc)] ? 1 : 0); }, 0);
      var pct = deck.length ? Math.round((knownCount / deck.length) * 100) : 0;
      progressBar.style.width = pct + '%';
      var mark = known[cardId(c)] ? '✓' : '';
      knownFront.textContent = mark; knownBack.textContent = mark;
    }

    function flip(){ cardEl.classList.toggle('fc-flipped'); }
    function next(){ if(deck.length === 0) return; idx = (idx + 1) % deck.length; render(); }
    function prev(){ if(deck.length === 0) return; idx = (idx - 1 + deck.length) % deck.length; render(); }
    function markKnown(val){
      if(deck.length === 0) return;
      var c = deck[idx];
      if(val) known[cardId(c)] = 1;
      else delete known[cardId(c)];
      saveKnown();
      next();
    }
    function resetProgress(){
      if(!confirm('Clear all "Got it" progress for this deck?')) return;
      known = {};
      saveKnown();
      render();
    }

    cardEl.addEventListener('click', flip);
    cardEl.addEventListener('keydown', function(e){
      if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); flip(); }
      else if(e.key === 'ArrowRight'){ e.preventDefault(); next(); }
      else if(e.key === 'ArrowLeft'){ e.preventDefault(); prev(); }
    });
    document.getElementById('fc-next').addEventListener('click', next);
    document.getElementById('fc-prev').addEventListener('click', prev);
    document.getElementById('fc-got').addEventListener('click', function(){ markKnown(true); });
    document.getElementById('fc-tryagain').addEventListener('click', function(){ markKnown(false); });
    document.getElementById('fc-shuffle').addEventListener('click', shuffle);
    document.getElementById('fc-reset').addEventListener('click', resetProgress);
    sectionSel.addEventListener('change', function(){ sectionFilter = sectionSel.value; applyFilter(); });

    render();
  });
})();
</script>

# 🃏 Generative AI Engineer Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Drill 15 minutes/day for two weeks. The GenAI ecosystem is acronym-heavy, repetition wins.

---

## 🧠 SECTION 1: LLM ARCHITECTURE & TOKENIZATION

**Q:** What architecture do all modern generative LLMs (Claude, GPT, LLaMA, Gemini) share?
**A:** Decoder-only transformer with causal self-attention.

**Q:** What is the compute complexity of self-attention in sequence length?
**A:** O(N²), quadratic. This is why long-context is expensive.

**Q:** Write the attention formula.
**A:** Attention(Q,K,V) = softmax(QKᵀ / √dk) · V.

**Q:** What does the causal mask do?
**A:** Zeros out the upper triangle so position i can't attend to j > i, required for decoder-only autoregressive generation.

**Q:** What is GQA and what does it save?
**A:** Grouped-Query Attention, Q has H heads, K/V has G groups. Saves KV-cache memory (G/H × MHA size) with minimal quality loss.

**Q:** What is MQA vs GQA vs MHA?
**A:** MHA = Multi-Head (Q/K/V all H heads). MQA = Multi-Query (Q has H, K/V has 1). GQA = Grouped (Q has H, K/V has G groups). GQA is the modern sweet spot.

**Q:** What is RoPE?
**A:** Rotary Positional Embedding, rotate Q and K by an angle proportional to position; dot product becomes a function of relative position. The 2026 standard.

**Q:** What is YaRN?
**A:** A frequency-rescaling trick that extends RoPE-based context windows beyond the training length without retraining.

**Q:** What is ALiBi?
**A:** Attention with Linear Biases, adds a linear penalty to attention scores by distance; smoother long-context extrapolation.

**Q:** What is the KV cache and why does it dominate inference cost?
**A:** Stored K and V tensors of previous tokens during autoregressive generation. Scales with seqlen × layers × heads × dim, dominates GPU VRAM at long context (84GB for Llama-2-70B at 32K).

**Q:** What is FlashAttention?
**A:** A fused CUDA kernel that computes attention without ever materializing the full N×N matrix. Same math, vastly better memory access. 2-4× speedup.

**Q:** What is PagedAttention?
**A:** vLLM's technique: store KV cache in non-contiguous "pages" like virtual memory. Eliminates fragmentation; 2-4× serving throughput.

**Q:** What is speculative decoding?
**A:** Small draft model proposes K tokens; the big model verifies in parallel. 2-3× latency reduction without quality loss.

**Q:** What is a Mixture of Experts (MoE)?
**A:** N "expert" FFNs per layer with a learned router that picks top-K per token. Sparse activation = much smaller compute than total params. Mixtral 8×7B, DeepSeek-V3 are examples.

**Q:** What is Mamba / SSMs?
**A:** Selective State-Space Models, linear-time alternative to attention with a compressed recurrent state. Mamba, Mamba-2, Jamba. Promising for ultra-long contexts.

**Q:** What does BPE stand for?
**A:** Byte-Pair Encoding, the dominant tokenization algorithm. Iteratively merges most-frequent adjacent pairs.

**Q:** What tokenizer does GPT-4 use?
**A:** cl100k_base (BPE); GPT-4o uses o200k_base.

**Q:** What is SentencePiece, and who uses it?
**A:** Google's BPE-or-unigram tokenizer with whitespace-as-character handling. LLaMA, T5, Gemma, Mistral.

**Q:** Roughly how many characters per token in English BPE?
**A:** ~4 chars/token. Code and non-English can be 2-4× worse.

**Q:** What is tiktoken?
**A:** OpenAI's open-source BPE library, fastest in Python; the de facto standard for cost estimation across providers.

**Q:** What is the "lost in the middle" finding?
**A:** Long-context LLMs attend disproportionately to the start and end of the context; mid-positioned facts are missed (Liu et al. 2023).

**Q:** What is prompt caching (Anthropic / OpenAI)?
**A:** Provider caches the KV state of the prompt prefix; subsequent calls reuse it at 10-25% of normal cost (up to ~90% savings).

**Q:** Sampling defaults: temperature, top-p, top-k typical values?
**A:** Temperature ~0.7 (0 = greedy); top-p 0.9; top-k 40. Tool calling / structured output: temperature 0.

---

## 📐 SECTION 2: EMBEDDINGS & VECTOR DATABASES

**Q:** What is an embedding?
**A:** A dense vector representation of text/image/audio in a high-dim space where semantically similar inputs land near each other.

**Q:** What similarity metric is used in production retrieval?
**A:** Cosine similarity (or equivalently, dot product on L2-normalized vectors).

**Q:** What is HNSW?
**A:** Hierarchical Navigable Small World, multi-layer graph index for approximate nearest neighbor; the default in pgvector/Qdrant/Weaviate/Pinecone/Milvus.

**Q:** What is IVF-PQ?
**A:** Inverted File + Product Quantization. Cluster vectors via k-means; compress with product quantization. Memory-efficient at billion-scale.

**Q:** What does Matryoshka representation enable?
**A:** Truncating a vector to a shorter prefix (e.g., 256 from 3072) while preserving most quality. text-embedding-3, Nomic, Jina.

**Q:** OpenAI's "text-embedding-3-large" embedding dimension?
**A:** 3072 (configurable down to 256 via Matryoshka).

**Q:** Cohere embed-v3 is asymmetric, what does that mean?
**A:** Queries and documents are encoded differently; pass `input_type="search_query"` for queries, `"search_document"` for indexed chunks.

**Q:** What is BM25?
**A:** TF-IDF with length normalization, sparse keyword retrieval. Excellent for exact-term queries (part numbers, names).

**Q:** What is hybrid retrieval?
**A:** Combining dense (embedding) + sparse (BM25) retrieval, then fusing results via RRF or weighted score. Production default.

**Q:** What is RRF (Reciprocal Rank Fusion)?
**A:** Score-free fusion: sum 1/(60 + rank_i) across retrievers. Robust to heterogeneous score distributions.

**Q:** What is a reranker, and why use one?
**A:** Cross-encoder that re-scores (query, doc) pairs together. Closes ~80% of retrieval gap at ~5% latency cost (Cohere Rerank, Voyage rerank, bge-reranker, ColBERT).

**Q:** What is ColBERT?
**A:** Late-interaction retriever, encodes query as N token vectors and doc as M; similarity is MaxSim over token pairs. More expressive than bi-encoder.

**Q:** What is SPLADE?
**A:** Learned-sparse retriever, high-dim vocab-keyed vectors, mostly zero. Pairs nicely with dense via hybrid.

**Q:** Contextual retrieval (Anthropic Sep 2024), what does it do?
**A:** Prepends an LLM-generated 50-100 token contextualization to each chunk before embedding/indexing. ~35% retrieval-failure reduction; ~67% with hybrid + rerank.

**Q:** What is late chunking (Jina 2024)?
**A:** Embed the whole long doc once; pool per-chunk embeddings from the contextualized token vectors. 10-20% retrieval improvement on long docs.

**Q:** Pinecone vs Qdrant vs Weaviate vs pgvector, quick comparison?
**A:** Pinecone = managed, fastest TTM. Qdrant = Rust, strong filters. Weaviate = GraphQL + modules. pgvector = "use what you have" when Postgres is already deployed.

**Q:** When should you choose pgvector?
**A:** Already running Postgres, < ~10M vectors, want SQL metadata filters and one less moving part.

**Q:** Multi-tenant retrieval, pre-filter or post-filter?
**A:** Pre-filter, the ANN index must not consider out-of-tenant vectors.

**Q:** Approximate float32 cost: 1B vectors × 1024 dim?
**A:** 1B × 1024 × 4 = ~4 TB. PQ-quantized: ~100 GB.

---

## 🔍 SECTION 3: RAG ARCHITECTURE

**Q:** Naive vs Advanced vs Modular RAG, define each.
**A:** Naive = one-shot retrieve + generate. Advanced = pre/post-retrieval intelligence (rewriting, hybrid, rerank, citation). Modular = router + multiple retrievers + tools + loops.

**Q:** What is HyDE?
**A:** Hypothetical Document Embeddings, LLM writes a hypothetical answer first; embed that to retrieve. Strong on technical corpora.

**Q:** What is multi-query retrieval?
**A:** Generate K paraphrases of the query with an LLM; retrieve for each; union results.

**Q:** What is query decomposition?
**A:** Split a complex multi-hop query into sub-queries; retrieve for each; synthesize.

**Q:** What is step-back prompting?
**A:** Generate a higher-level abstract version of the query; retrieve for both original and abstract.

**Q:** What is CRAG?
**A:** Corrective RAG, relevance classifier on retrieved chunks; if all weak, fall back to web search.

**Q:** What is Adaptive RAG?
**A:** Complexity classifier routes among "no retrieval", "single-shot", or "iterative" retrieval. Saves cost on easy queries.

**Q:** What is Self-RAG?
**A:** Model trained to emit "retrieve" tokens when it needs lookup. Powerful in research, rare in production (custom training required).

**Q:** What is Graph RAG (Microsoft 2024)?
**A:** Build an LLM-extracted knowledge graph from your corpus; retrieve subgraphs for aggregative queries that vector retrieval can't answer.

**Q:** What is FLARE?
**A:** Forward-Looking Active Retrieval, generate one sentence at a time, retrieve mid-stream when confidence drops.

**Q:** What is citation packing?
**A:** Annotate retrieved chunks with IDs; instruct the LLM to cite by ID; resolve IDs to URLs in post-processing. The Perplexity/Claude/ChatGPT-search pattern.

**Q:** What is the "refusal license" in a RAG system prompt?
**A:** Explicit permission for the model to say "I don't know based on the provided sources." Without it, the model invents.

**Q:** Default chunking baseline if no other constraints?
**A:** Recursive char splitter, ~512 tokens, ~128 overlap, header-aware splitting.

---

## 🦜 SECTION 4: LANGCHAIN, LLAMAINDEX & LANGGRAPH

**Q:** What is LCEL?
**A:** LangChain Expression Language, Unix-pipe-style composition of Runnables: `prompt | model | parser`.

**Q:** Sync vs async LangChain methods?
**A:** `.invoke()`, `.batch()`, `.stream()`; async = `.ainvoke()`, `.abatch()`, `.astream()`.

**Q:** When LangGraph instead of LCEL?
**A:** When you need loops, conditional edges, persistent state, or human-in-the-loop. LCEL is a DAG; LangGraph adds cycles.

**Q:** LangGraph's `Checkpointer` provides what?
**A:** Durable state persistence (SQLite, Postgres, Redis). Resumable graphs.

**Q:** LangGraph HITL primitives?
**A:** `interrupt_before` and `interrupt_after` plus a checkpointer. Pause the graph for human approval; resume from saved state.

**Q:** LlamaIndex index types?
**A:** VectorStoreIndex, DocumentSummaryIndex, TreeIndex, KeywordTableIndex, KnowledgeGraphIndex, PandasIndex, SQLStructStoreIndex.

**Q:** What does LlamaIndex's `SentenceWindowNodeParser` do?
**A:** Embed individual sentences; retrieve sentences; pass surrounding window to the LLM. Precise retrieval + full-context generation.

**Q:** What does `AutoMergingRetriever` do?
**A:** Retrieve small leaf chunks; auto-merge to parent chunks when enough siblings are retrieved.

**Q:** What is `SubQuestionQueryEngine` in LlamaIndex?
**A:** Decomposes the query into sub-questions; routes each to a query engine; synthesizes.

**Q:** Tool calling, 5 universal steps?
**A:** (1) define tool (2) bind to model (3) model emits tool_call (4) execute (5) append ToolMessage and continue.

**Q:** What is MCP and who created it?
**A:** Model Context Protocol, Anthropic, Nov 2024. Standardized server protocol for exposing tools, resources, prompts to LLM clients. Cross-framework.

**Q:** Which legacy LangChain chains should new code avoid?
**A:** `RetrievalQA`, `LLMChain`, `ConversationChain`. Use LCEL composition instead.

---

## 🔧 SECTION 5: FINE-TUNING, PEFT, LoRA

**Q:** The Module 5 ordering: which lever first?
**A:** Prompt → RAG → Fine-tune. In that order. Each step is 10-100× the effort.

**Q:** LoRA's update equation?
**A:** ΔW = B · A, where B is d×r and A is r×d. Train only A and B; freeze the base.

**Q:** Typical LoRA `r` values?
**A:** 8, 16, 32, 64. Higher = more capacity. 16 is the modern default.

**Q:** LoRA `alpha` default?
**A:** alpha = 2·r. Effective LoRA scale = alpha / r.

**Q:** Modern LoRA `target_modules`?
**A:** `"all-linear"` (or Q/K/V/O + MLP projections). Original paper used Q/V only.

**Q:** What is QLoRA?
**A:** 4-bit NF4 quantized base + double quantization + paged optimizer states + LoRA adapters. Lets you fine-tune a 70B model on a single 48GB GPU.

**Q:** QLoRA 8B-model memory vs full fine-tune (LR + activations)?
**A:** ~14 GB total vs ~74 GB. QLoRA enables consumer-GPU fine-tuning.

**Q:** What is DPO?
**A:** Direct Preference Optimization, train on (chosen, rejected) pairs without a reward model. Cheaper than PPO + RLHF (Reinforcement Learning from Human Feedback); widely deployed.

**Q:** What is KTO?
**A:** Kahneman-Tversky Optimization, like DPO but uses thumbs-up/down labels instead of pairs.

**Q:** What is ORPO?
**A:** Combines SFT + preference loss in a single pass (no separate SFT + DPO stages).

**Q:** What is RLHF's full pipeline?
**A:** SFT → train a reward model → PPO (RL) against the reward. Mostly replaced by DPO for industry.

**Q:** LIMA's insight?
**A:** 1,000 carefully-curated examples can produce strong instruction-following models. Quality > quantity past a floor.

**Q:** Catastrophic forgetting, what is it?
**A:** Fine-tuned model loses general capability while gaining narrow target. Mitigations: smaller LR, fewer epochs, mix-in general data.

**Q:** A 70B model full-FT VRAM?
**A:** 600+ GB. Requires multi-GPU sharding (FSDP, DeepSpeed Zero).

**Q:** Why is BloombergGPT-style from-scratch training rarely justified in 2026?
**A:** Base + RAG + light FT matches or exceeds at 1-2 orders of magnitude less cost.

**Q:** Two ways to serve a fine-tuned LoRA?
**A:** (1) Merge into base (W' = W + B·A) zero overhead. (2) Runtime adapter swap (vLLM / TGI) multi-tenant per-customer LoRAs.

---

## 🤖 SECTION 6: MULTI-AGENT SYSTEMS

**Q:** What did the AutoGPT-era teach about autonomous agents?
**A:** Fully autonomous open-ended agents complete ~8% of tasks. Scoped agents with stop conditions are the production answer.

**Q:** LangGraph supervisor pattern?
**A:** One central agent routes between specialized workers and decides when to emit DONE.

**Q:** CrewAI's three primitives?
**A:** Agent (role/goal/backstory), Task (description/expected_output/agent), Crew (agents + tasks + process).

**Q:** AutoGen's defining feature?
**A:** Conversable agents with native sandboxed code execution (Docker, Jupyter).

**Q:** What is Anthropic Computer Use (Oct 2024)?
**A:** Claude controls a virtual desktop via screenshots + mouse + keyboard. Sensorimotor agents, new shape.

**Q:** MUST every production agent system have?
**A:** max_iterations + budget cap + wall-clock cap + HITL on destructive actions + per-agent observability.

**Q:** Anthropic's SWE-bench multi-agent gain?
**A:** Planner + Coder + Reviewer = ~64% vs single-agent ~49% on SWE-bench Verified, at 3-4× cost.

**Q:** What does the "researcher agent" anti-pattern look like?
**A:** An "agent" that just wraps a search-API (Application Programming Interface) call. That's a function, not an agent, no LLM-driven decision-making.

**Q:** Reflection pattern?
**A:** Same model called as "critic" on its own output, then "reviser" to incorporate critique. Often labeled multi-agent.

---

## 📊 SECTION 7: EVALUATION & RAGAS

**Q:** Three layers of LLM eval?
**A:** Capability (public benchmarks) / System (RAGAS, golden) / Production (online signals).

**Q:** RAGAS four core metrics?
**A:** Faithfulness, Answer Relevancy, Context Precision, Context Recall.

**Q:** What is Faithfulness?
**A:** Fraction of claims in the answer supported by the retrieved context. Anti-hallucination metric.

**Q:** What is Context Recall?
**A:** Fraction of ground-truth claims that could be supported by the retrieved context. Did retrieval find what's needed?

**Q:** Five LLM-as-judge biases?
**A:** Position, length, self-enhancement, format, confidence.

**Q:** Standard fix for position bias in pairwise judgment?
**A:** Run both orderings (A vs B AND B vs A); count only agreements.

**Q:** G-Eval, how does it improve LLM-as-judge?
**A:** Structured rubric + chain-of-thought + logprob-weighted scoring.

**Q:** Minimum useful golden dataset size?
**A:** ~30 examples for measurable differences; aim for 100-500.

**Q:** Hard vs soft regression in CI eval?
**A:** Hard (>5% drop on core metric) blocks PR. Soft (<5%) warns and asks reviewer approval.

**Q:** Best eval tool stack for production?
**A:** RAGAS (RAG metrics) + Promptfoo (A/B tests) + LangSmith or Phoenix (tracing). Common 2026 combination.

**Q:** Why is "single-metric optimization" dangerous?
**A:** Pushing one metric up often pushes another down (faithfulness up → relevancy down, etc.). Track all four.

---

## 🛡️ SECTION 8: GUARDRAILS & SAFETY

**Q:** OWASP LLM Top 10 #1?
**A:** Prompt Injection (2024 list).

**Q:** Direct vs Indirect prompt injection?
**A:** Direct = user types attack. Indirect = third-party content (page/PDF/tool output) embeds instructions.

**Q:** Why is "perfect" prompt-injection defense impossible?
**A:** LLMs can't reliably distinguish "data" from "instructions", everything is text. Architecture-level constraint.

**Q:** Defenses that help against prompt injection?
**A:** Strong delimiters, privilege separation, allowlist actions, output classifier, constitutional principles, HITL gates, PromptGuard/Llama Guard.

**Q:** What is Presidio?
**A:** Microsoft's open-source PII detection + anonymization library. ~50 entity types out of the box.

**Q:** Redaction vs Pseudonymization?
**A:** Redaction = `<PII>` (lose signal). Pseudonymization = consistent token per entity (e.g., EMAIL_42), preserves co-reference at higher re-id risk.

**Q:** NeMo Guardrails uses what DSL?
**A:** Colang, NVIDIA's natural-language flow DSL.

**Q:** Guardrails AI `on_fail` actions?
**A:** `exception`, `fix`, `filter`, `refrain`, `reask`.

**Q:** What is Llama Guard?
**A:** Meta's open-weight small (8B) classifier for unsafe inputs/outputs. Self-hostable safety layer.

**Q:** What is Constitutional AI?
**A:** Anthropic training method (Bai 2022). Model critiques + revises its own outputs against a written constitution of principles.

**Q:** Many-shot jailbreak (Anthropic 2024)?
**A:** Long-context attack, fill context with unsafe Q&A examples; model follows pattern. Long context = new attack surface.

**Q:** What is structured output (strict JSON schema) as a guardrail?
**A:** Constrain generation to a typed schema. Model can't say arbitrary harmful text. OpenAI strict mode, Outlines, Guidance.

**Q:** Air Canada chatbot case (2024) precedent?
**A:** Companies are legally responsible for their chatbots' answers, even wrong ones. (Moffatt v Air Canada, BC CRT.)

**Q:** Defense-in-depth layers (7)?
**A:** Input filter → prompt construction → retrieval filter → generation → output filter → action gate → audit log.

---

## 🚀 SECTION 9: DEPLOYMENT, OBSERVABILITY & COST

**Q:** What is vLLM?
**A:** Production-standard serving framework. PagedAttention + continuous batching + FlashAttention + multi-LoRA + OpenAI-compatible API.

**Q:** What is continuous batching?
**A:** New requests join in-flight batches; no waiting for batch boundaries. vLLM/TGI default.

**Q:** What is LiteLLM?
**A:** Provider-agnostic gateway supporting 100+ LLM providers behind one OpenAI-compatible API. Drop-in with fallback.

**Q:** Best observability stack for LangChain apps?
**A:** LangSmith (first-party), Langfuse (OSS), Phoenix (Arize OSS), Helicone (proxy-based).

**Q:** Production latency metrics to monitor?
**A:** p50, p95, p99, TTFT (time-to-first-token), TTLT, throughput.

**Q:** What is TTFT and why does it matter?
**A:** Time to first token. Perceived UX (User Experience) is dominated by TTFT, not total generation time. Stream first token fast.

**Q:** What is semantic caching?
**A:** Embed each query; return cached answer when cosine sim > threshold with a cached query (typ. ≥ 0.97).

**Q:** Cost lever ranked by impact?
**A:** (1) Multi-model routing 5-20× (2) Prompt caching up to 90% (3) Semantic caching 30-70% (4) Context reduction 2-5× (5) Brevity / max_tokens 1.5-3× (6) Self-host at scale (depends).

**Q:** Klarna's cost-per-conversation grind (6 months)?
**A:** $0.30 → $0.04 via multi-model routing + prompt cache + semantic cache + output brevity + streaming early-cancel.

**Q:** Cursor's TTFT secret (combined)?
**A:** Two-model strategy + prompt cache + semantic cache + speculative decoding + streaming + edge serving.

**Q:** Modal Labs is BEST characterized as?
**A:** Serverless GPU inference; "Lambda for GPUs."

**Q:** Groq's LPU is?
**A:** Custom inference hardware optimized for low-latency LLM serving.

**Q:** When self-host break-even?
**A:** Roughly 100M tokens/day for most workloads, depending on model size and provider rates.

---

## 🏢 SECTION 10: PRODUCTION CASE STUDIES

**Q:** GitHub Copilot's primary eval metric historically?
**A:** Acceptance rate, fraction of suggestions developers keep.

**Q:** Cursor's engineering moat?
**A:** Latency engineering: same models as competitors but faster perceived speed via TTFT obsession.

**Q:** Notion AI Q&A v1's bug?
**A:** Chunking split heading from body; top-K too small; no reranker. Fixed by header-aware chunking + hybrid + rerank.

**Q:** Klarna AI assistant numbers (2024)?
**A:** Handled 700 FTEs' workload; $40M projected operating profit improvement; CSAT held flat.

**Q:** Khanmigo's unusual safety twist?
**A:** Designed to PREVENT direct answers (Socratic tutoring), safety means less help; plus minor-protection layers.

**Q:** Stripe Radar's LLM use?
**A:** Augments gradient-boosted-tree classifier with explanations + adjudication + edge cases. HITL for high-value.

**Q:** Anthropic claude.ai's product features?
**A:** Constitutional + MCP tools + Computer Use + web search + cite-required + Projects + Artifacts.

**Q:** The single most-replicated pattern across all 7 case studies?
**A:** Multi-model routing + caching + RAG + eval-in-CI + observability. The boring infrastructure compounds.

**Q:** What does "the AI got it wrong" usually mean in production (Anthropic 2024 finding)?
**A:** ~64% of those tickets are retrieval bugs, not model bugs.

**Q:** Most important transferable skill in this entire course?
**A:** The ability to read a production AI product launch and reverse-engineer the team's architectural decisions.

---

## 🎓 STUDY TIPS

1. Drill 15 min/day for two weeks before any GenAI interview.
2. Combine with the lab work, drill terminology AFTER building, not before.
3. Filter by Section in the dropdown to focus on weak areas.
4. The "Got it / Try again" buttons persist across sessions, your local browser remembers.
5. Don't memorize numbers, memorize *shapes* of trade-offs.

---

## 🏁 BEFORE THE EXAM

- ✅ Read every Cheat-Sheet the night before
- ✅ Run through one lab from each module from memory
- ✅ Skim the Module 10 case studies one more time
- ✅ Sleep. You've earned this.

Good luck. 🚀
