<style>
.fc-app{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:760px;margin:1.5rem auto 2.5rem;padding:1.25rem;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(99,102,241,.10),0 2px 6px rgba(0,0,0,.04);border:1px solid #eef0fb;color:#1f2937}
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
  var STORAGE_KEY = 'google-ai-pro-cards';
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

# 🃏 Google AI Pro Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Drill 10-15 minutes per day for at least 2 weeks before the exam. Use the filter dropdown to focus on a single module at a time.

---

## 🟦 SECTION 1: GOOGLE AI LANDSCAPE & GEMINI FAMILY

**Q:** What paper introduced the Transformer architecture, and who wrote it?
**A:** "Attention Is All You Need", Vaswani et al. at Google Brain, June 2017.

**Q:** When did Google Brain and DeepMind merge?
**A:** April 2023, into Google DeepMind, with Demis Hassabis as CEO.

**Q:** Name the five tiers of the Gemini family.
**A:** Nano (on-device), Flash Lite, Flash, Pro, Ultra, smallest to largest.

**Q:** What is the maximum context window on Gemini 2.5 Pro/Ultra?
**A:** 2 million tokens.

**Q:** What is the typical Gemini 2.5 Flash context window?
**A:** 1 million tokens (2M in beta).

**Q:** Is Gemini natively multi-modal?
**A:** Yes, trained on text + image + audio + video jointly from scratch, with all modalities interleaved.

**Q:** When were Google's AI Principles published?
**A:** June 2018, after the Project Maven backlash.

**Q:** How many principles and red lines does the Google AI Principles document define?
**A:** Seven principles + four "applications we will not pursue."

**Q:** What is Gemma?
**A:** Google's open-weight model family (e.g., 2B, 7B, 9B, 27B) inspired by Gemini research, different from Gemini.

**Q:** Where is Claude available on Google Cloud?
**A:** Vertex AI Model Garden, Claude Sonnet, Haiku, Opus 4.6 alongside Gemini.

**Q:** What does AlphaGo's 2016 win demonstrate about DeepMind?
**A:** It established DeepMind's reputation for reinforcement-learning + planning + tree-search systems; foundational pre-LLM AI work.

**Q:** What is Gemini Nano used for?
**A:** On-device inference on Pixel/Android, wake-words, simple intent, privacy-first features. No network required.

**Q:** When did Gemini 1.5 Pro ship with 1M-token context?
**A:** February 2024; expanded to 2M tokens by May 2024.

**Q:** What is Gemini 2.5 Pro's "thinking mode"?
**A:** Extended reasoning capability launched March 2025, benchmarks ahead of GPT-4o on reasoning tasks.

---

## 🛠️ SECTION 2: AI STUDIO & GEMINI API

**Q:** What is Google AI Studio?
**A:** The free browser-based playground at aistudio.google.com for prototyping with Gemini using API keys.

**Q:** What is the Python SDK for the Gemini API?
**A:** `google-generativeai` (the Gemini API package, distinct from Vertex AI).

**Q:** What is the Python SDK path for Vertex AI Gemini?
**A:** `vertexai.generative_models` inside the `google-cloud-aiplatform` package.

**Q:** What auth does the Gemini API use vs Vertex AI?
**A:** Gemini API uses API keys. Vertex AI uses Application Default Credentials (ADC) / IAM.

**Q:** How do you force JSON-Schema-conformant output from Gemini?
**A:** Set `response_mime_type="application/json"` AND `response_schema=<schema>` in generation_config.

**Q:** What are the four `safety_settings` harm categories?
**A:** HARM_CATEGORY_HARASSMENT, HARM_CATEGORY_HATE_SPEECH, HARM_CATEGORY_SEXUALLY_EXPLICIT, HARM_CATEGORY_DANGEROUS_CONTENT.

**Q:** What are the four `safety_settings` thresholds (strict → permissive)?
**A:** BLOCK_LOW_AND_ABOVE → BLOCK_MEDIUM_AND_ABOVE → BLOCK_ONLY_HIGH → BLOCK_NONE.

**Q:** How do you count tokens before paying for inference?
**A:** `model.count_tokens(prompt)`, free endpoint.

**Q:** What discount does the Batch API give?
**A:** ~50% off input AND output tokens; async with ~24h SLA.

**Q:** What discount does Vertex AI explicit context caching give?
**A:** ~75% off cached input tokens.

**Q:** What does streaming on Gemini reduce?
**A:** Time-to-first-token (TTFT) / perceived latency. Total cost and total tokens unchanged.

**Q:** What is the `finish_reason` for safety_settings blocking output?
**A:** `SAFETY`.

**Q:** What is the `finish_reason` when output is blocked because the model was reciting training data verbatim?
**A:** `RECITATION`.

**Q:** What does `tools="code_execution"` enable?
**A:** Built-in Python sandbox, Gemini writes and executes Python during reasoning.

**Q:** Best temperature for code completion / classification?
**A:** 0.0–0.3 (deterministic, focused).

**Q:** Best temperature for creative writing?
**A:** 0.8–1.0.

---

## 🏢 SECTION 3: VERTEX AI PLATFORM

**Q:** What is Vertex AI?
**A:** Google Cloud's enterprise ML/AI umbrella platform, about 25 sub-products under one roof.

**Q:** What does Vertex AI Model Garden host?
**A:** 200+ models: Gemini, Claude, Llama, Mistral, Cohere, AI21, Gemma, and many more under one IAM/billing surface.

**Q:** What is Vertex AI Studio?
**A:** Enterprise version of AI Studio, same prompting UI but under your GCP project's IAM, audit, billing, region.

**Q:** What is Vertex AI Workbench?
**A:** Managed Jupyter / Colab Enterprise notebooks with IAM-integrated access to BigQuery and Vertex AI.

**Q:** What is Vertex AI Pipelines built on?
**A:** Kubeflow Pipelines v2 (KFP), also supports TFX. DAG of containerized steps with ML metadata + lineage.

**Q:** What is Vertex AI Model Registry?
**A:** Central catalog of trained models with versions, artifacts, metadata, and lineage to pipeline runs.

**Q:** What is the reserved-capacity pricing tier on Vertex AI Gemini?
**A:** Provisioned Throughput, measured in Generative AI Service Capacity Units (GSCUs).

**Q:** When does Provisioned Throughput beat PAYG?
**A:** Sustained workloads above roughly 5K RPM; overflow falls back to PAYG.

**Q:** What does CMEK protect?
**A:** Data at rest, encrypted with your KMS keys (rotate, disable, destroy).

**Q:** What does VPC Service Controls protect?
**A:** Data exfiltration outside a configured perimeter (compromised SA, insider, etc.).

**Q:** What region serves German data residency?
**A:** `europe-west3` (Frankfurt). `europe-west1` is Belgium.

**Q:** What is Vertex AI Search?
**A:** Managed RAG service (formerly Discovery Engine), chunking + embedding + index + retrieval + reranking + grounding.

**Q:** What is Vertex AI Vector Search?
**A:** ANN index primitive (formerly Matching Engine). Brings your own embeddings + chunking.

**Q:** Where do containerized models live for serving?
**A:** Artifact Registry (formerly Container Registry).

**Q:** What is Spotify's MLOps consolidation story on Vertex AI?
**A:** 3,000+ models consolidated onto Vertex AI (Workbench + Pipelines + Registry + Feature Store + Endpoints + Monitoring), one platform replaced bespoke per-team pipelines.

---

## 📸 SECTION 4: MULTI-MODAL GEMINI

**Q:** Approximately how many tokens does a single image consume?
**A:** ~258 tokens per image (more if high-res with tiling).

**Q:** Approximately how many tokens per second of audio?
**A:** ~32 tokens per second.

**Q:** Default video sampling rate on Gemini?
**A:** 1 frame per second + audio track. Tunable via VideoMetadata.

**Q:** Tokens for a 5-minute video at default rate?
**A:** Roughly 87,000 (258 × 300 frames + 32 × 300s of audio).

**Q:** Maximum PDF pages per Gemini prompt?
**A:** 1,000 pages.

**Q:** When use Files API?
**A:** For files >20MB or files used across multiple Gemini calls, upload once, reference URI.

**Q:** How are bounding boxes returned by Gemini?
**A:** Normalized 0-1000 coordinates `[x_min, y_min, x_max, y_max]`.

**Q:** What does diarization mean in audio understanding?
**A:** Identifying and labeling speakers (Speaker 1, Speaker 2) in a multi-speaker recording.

**Q:** Which Gemini tier does NOT support multi-modal?
**A:** Gemini Nano, on-device, text-mostly.

**Q:** What is the Vertex AI SDK class for wrapping a non-text modality?
**A:** `Part`, e.g., `Part.from_uri("gs://b/file.jpg", mime_type="image/jpeg")`.

**Q:** What did Wendy's FreshAI use to eliminate the legacy transcribe-then-LLM pipeline?
**A:** Gemini's native audio understanding, speech-to-intent in one call.

**Q:** What is Chirp?
**A:** Google's speech model family (ASR speech-to-text + TTS text-to-speech).

**Q:** What is Imagen?
**A:** Google's text-to-image model family (3, 4). Complements Gemini in Model Garden.

**Q:** What is Veo?
**A:** Google's text-to-video model.

**Q:** What architectural pattern does Google Photos use for Gemini-powered search?
**A:** Batch-index per photo at upload (Gemini analysis → JSON); ANN + keyword + structured query at search time. Never call LLM per query.

---

## 🔎 SECTION 5: RAG ON GOOGLE CLOUD

**Q:** What does RAG stand for?
**A:** Retrieval-Augmented Generation.

**Q:** Name the five GCP RAG stacks.
**A:** Vertex AI Search · Vertex AI Vector Search · AlloyDB AI + pgvector · Cloud SQL pgvector · BigQuery vector search.

**Q:** When use Vertex AI Search?
**A:** "I have documents and want managed RAG end-to-end fast", chunking + embedding + index + retrieval + reranking + grounding handled.

**Q:** When use Vertex AI Vector Search?
**A:** Custom embeddings (e.g., your own CLIP), extreme scale, custom retrieval orchestration.

**Q:** When use AlloyDB AI?
**A:** SQL data + semantic search + in-DB Gemini calls; hybrid SQL + vector workloads.

**Q:** When use BigQuery vector search?
**A:** Analytics-side semantic over already-in-BigQuery structured data; batch / nightly workloads.

**Q:** What is the most multilingual Google embedding model?
**A:** multilingual-embedding-002 (100+ languages). Used by Mercado Libre.

**Q:** What embedding model matches text against images (CLIP-style)?
**A:** multimodalembedding (1408 dimensions). Used by Wayfair-style visual search.

**Q:** What ANN algorithm powers Vertex AI Vector Search?
**A:** ScaNN (Google's research-grade ANN library).

**Q:** Two native grounding modes on Gemini?
**A:** Grounding with Google Search (public web) and Grounding with Vertex AI Search (your private corpus).

**Q:** What is faithfulness as a RAG metric?
**A:** Whether the answer is supported by retrieved context, no hallucination beyond context.

**Q:** What is recall@K?
**A:** Of test questions, the fraction with the correct doc in top-K retrieval results.

**Q:** What is hybrid retrieval?
**A:** BM25 (keyword) + dense (semantic) merged, often via Reciprocal Rank Fusion (RRF).

**Q:** Are embeddings model-agnostic?
**A:** No. text-embedding-004 vectors are NOT comparable to OpenAI text-embedding-3. Match embedder at index and query.

**Q:** What technique did Anthropic publish in Sept 2024 that improves RAG?
**A:** Contextual Retrieval, LLM generates a 1-2-sentence context per chunk, dramatically reducing retrieval failure (49% reduction; 67% with reranker).

---

## 🔧 SECTION 6: FINE-TUNING

**Q:** Name the five rungs of the customization ladder.
**A:** Better prompt → few-shot prompting → RAG → SFT → RLHF / DPO.

**Q:** What is fine-tuning good at?
**A:** Style/tone, output format, vocabulary, task specialization.

**Q:** What is fine-tuning BAD at?
**A:** Knowledge updates (use RAG), avoiding catastrophic forgetting, cost-efficiency at scale.

**Q:** What does Vertex AI's SFT use under the hood?
**A:** LoRA (Low-Rank Adaptation), parameter-efficient adapter tuning.

**Q:** What is the LoRA rank hyperparameter on Vertex AI?
**A:** `adapter_size` (typical: 4; smaller = less capacity; larger = more capacity).

**Q:** What is catastrophic forgetting?
**A:** A fine-tuned model loses general capabilities (answers "I don't know" to general questions). Solutions: more diverse data, smaller adapter, lower learning rate.

**Q:** What is DPO?
**A:** Direct Preference Optimization (Rafailov 2023). Directly optimizes on (better, worse) preference pairs WITHOUT the RL phase / reward model of RLHF. Simpler.

**Q:** What is distillation?
**A:** Training a small student (e.g. Flash) to mimic a large teacher (e.g. Pro) on a target task. Pro quality at Flash cost on narrow workloads.

**Q:** Best dataset split for SFT?
**A:** 80% train / 10% validation / 10% holdout (untouched until final eval).

**Q:** Minimum dataset size for a style/tone fine-tune?
**A:** ~100 examples minimum; 500–1,000 recommended.

**Q:** What format does Vertex AI accept for tuning datasets?
**A:** JSONL with conversation-shaped examples (`{contents:[{role:user,parts:[...]},{role:model,parts:[...]}]}`).

**Q:** What is MedLM?
**A:** Domain-tuned medical LLM family on Vertex AI Model Garden (Med-PaLM 2 successor).

**Q:** Adore Me's fine-tuning lesson?
**A:** They didn't need to fine-tune. A precise system_instruction + few-shot prompts + RAG over brand guidelines outperformed and cost an order of magnitude less.

**Q:** Vodafone's network-ticket SFT case study?
**A:** SFT on Gemini Flash over 12K labeled tickets across 80 categories yielded 35% accuracy improvement over base Flash with few-shot.

---

## 🤖 SECTION 7: AGENT BUILDER & CONVERSATIONAL AI

**Q:** What is Vertex AI Agent Builder?
**A:** Umbrella over Conversational Agents, Search Agents, Function Calling, ADK, Agent Garden.

**Q:** What was Conversational Agents previously called?
**A:** Dialogflow CX (Dialogflow ES is the older sibling still around).

**Q:** Core abstractions in Conversational Agents?
**A:** Flow, Page, Intent, Slot/Parameter, Fulfillment, Webhook.

**Q:** What is function calling on Gemini?
**A:** Native ability to look at user intent and emit a structured request to call a declared tool. You execute the tool; result returns for synthesis.

**Q:** How to FORCE a specific function call?
**A:** `tool_config` with `function_calling_config.mode=ANY` and `allowed_function_names=["X"]`.

**Q:** What is ADK?
**A:** Agent Development Kit, Google's open-source SDK for multi-step + multi-agent systems with Gemini. Works on both Gemini API and Vertex AI.

**Q:** What is a coordinator agent?
**A:** Top-level ADK agent that decomposes a complex task and dispatches to specialist sub-agents.

**Q:** Mercedes MBUX architecture?
**A:** Nano on-device (wake/intent) + Vertex AI region pinned + Chirp ASR + Conversational Agents (state machine) + function calling (car/cloud APIs) + Gemini Pro (synthesis) + Chirp TTS.

**Q:** Shopify Sidekick architecture?
**A:** Gemini Pro + ADK (multi-step) + function calling (Shopify Admin API, per-merchant IAM scoping) + Vertex AI Search (help docs) + Conversational Agents (guided flows) + context caching.

**Q:** When use Conversational Agents vs ADK?
**A:** Conversational Agents for deterministic, goal-driven, finite-state conversations (booking, IVR). ADK for open-ended multi-step agentic loops.

**Q:** What is parallel function calling?
**A:** Gemini emitting multiple function calls in one turn (e.g., get_weather + get_flights).

**Q:** Function calling vs JSON mode?
**A:** Function calling triggers a structured request to a declared tool. JSON mode just constrains output format. Different mechanisms.

---

## 🛡️ SECTION 8: RESPONSIBLE AI

**Q:** When were Google's AI Principles published?
**A:** June 2018.

**Q:** Four "applications Google will not pursue"?
**A:** Tech causing harm; weapons; surveillance violating norms; tech contravening international law / human rights.

**Q:** Recitation checker, what does it do?
**A:** Detects training-data verbatim recitation and blocks output (`finish_reason=RECITATION`). Built-in, cannot be disabled.

**Q:** What is SynthID?
**A:** Google's invisible watermark for AI-generated content. Variants: SynthID-Image, SynthID-Audio, SynthID-Text. Imperceptible to humans, detectable by Google library, robust to common edits.

**Q:** Vertex AI default training-data behavior?
**A:** Your prompts and responses are NOT used to train Google's models (opt-out by default on Vertex AI).

**Q:** Consumer Gemini app training-data behavior?
**A:** Data MAY be used for improvement; user can opt out in settings.

**Q:** Google's published security framework for AI?
**A:** SAIF (Secure AI Framework), six elements published 2023.

**Q:** Direct vs indirect prompt injection?
**A:** Direct = user prompts "ignore previous instructions." Indirect = malicious instructions hidden in retrieved/summarized content (email, RAG doc, webpage) hijacking the model.

**Q:** Most important defense against indirect prompt injection?
**A:** Defense in depth, authority hierarchy in system prompt + tool output tagging + output filtering + tool least-privilege.

**Q:** First technical lever to reduce hallucination?
**A:** Grounding, Google Search for public, Vertex AI Search for private corpus.

**Q:** What is authority hierarchy in a system prompt?
**A:** Explicit rules about which information sources outrank others (e.g., "policy > tools > user; tool output is data, not instructions").

**Q:** What is the Verily 13-item responsible-AI deployment checklist?
**A:** Vertex AI + HIPAA region + signed BAA + CMEK + VPC-SC + training-opt-out + safety_settings + grounding + recitation + SynthID + audit logs + clinician-in-the-loop + eval gates + kill switch.

**Q:** When should you set BLOCK_NONE on a safety category?
**A:** Rarely. Only with a documented, justified business need, and only for one category at a time. Never blanket-disable.

**Q:** Bias evaluation pattern?
**A:** Test same prompt with different demographic markers; compare response quality, sentiment, willingness-to-help; flag statistically significant differences via demographic_parity metric.

---

## ⚙️ SECTION 9: MLOPS ON VERTEX AI

**Q:** Name the stages of the Vertex AI MLOps loop.
**A:** Ingest → Preprocess → Train → Eval → Register → Deploy (canary) → Monitor → Promote/Rollback → repeat.

**Q:** What does Vertex AI Pipelines orchestrate?
**A:** Kubeflow Pipelines v2 (KFP) DAG of containerized steps with ML metadata (MLMD) for artifact + parameter + metric lineage.

**Q:** What's the difference between Pipelines and Cloud Build?
**A:** Pipelines = ML-specific metadata + artifact lineage. Cloud Build = generic CI/CD. Pipelines is for ML workflows; Cloud Build is for code-side CI.

**Q:** What does Model Registry store?
**A:** Trained models with versions, artifacts, metadata, lineage to training pipeline runs.

**Q:** What does `traffic_split={"0": 90, "1": 10}` mean?
**A:** 90% of traffic to deployed model 0 (v1), 10% canary to model 1 (v2).

**Q:** Three failure modes Vertex AI Model Monitoring detects?
**A:** Training/serving skew, prediction drift, data drift (and quality drift when labels arrive).

**Q:** What does Vertex AI Feature Store solve?
**A:** Training/serving skew, single source of truth for features in both training (offline) and serving (online low-latency).

**Q:** What is Vizier?
**A:** Google's Bayesian hyperparameter-tuning service used by Vertex AI HPT. Far fewer trials than grid search.

**Q:** Which is appropriate: Public, Batch, or Private Endpoint for VPC-SC compliance?
**A:** Private Endpoint (VPC-only; no public internet).

**Q:** Four Continuous Training triggers?
**A:** Scheduled (cron), data-driven (Pub/Sub events), drift-driven (Monitoring alerts), performance-driven (metric below threshold).

**Q:** What is the Vodafone MLOps migration impact?
**A:** Model-update velocity went from ~2/month to ~25/month (12× improvement) with the same headcount, after migrating to Vertex AI Pipelines + Registry + Endpoints + Monitoring.

**Q:** What is MLMD?
**A:** ML Metadata, the backing store for Vertex AI Pipelines that tracks every artifact, parameter, metric, and run lineage.

**Q:** Where do model containers live for Vertex AI serving?
**A:** Artifact Registry.

**Q:** CI/CD pattern for ML on Google Cloud?
**A:** GitHub/Source Repo → Cloud Build (tests + container build) → Artifact Registry → Vertex AI Pipelines (ingest+train+eval+register+canary) → Model Monitoring (auto-rollback).

---

## 🏁 SECTION 10: PRODUCTION PATTERNS & CAPSTONE

**Q:** Wendy's FreshAI architectural wins vs the McDonald's IBM stack?
**A:** Native audio (one model handles speech-to-intent) + Conversational Agents (deterministic order state machine) + grounded against the menu (no hallucinated items) + tight escalation path.

**Q:** Three Mercedes MBUX architectural choices?
**A:** Hybrid on-device + cloud (Nano on-device for wake/intent), per-region deployment (residency), and Conversational Agents + function calling + Gemini synthesis combo.

**Q:** Shopify Sidekick's multi-tenant security pattern?
**A:** Per-merchant service-account scoping on function calls; one merchant's tools cannot reach another's data. Per-tenant context caching for shared stable content.

**Q:** Google Photos with Gemini search pattern?
**A:** Batch-index with Gemini at photo upload (description + entities + embeddings stored); ANN + keyword + structured query at search time. Never call LLM per search.

**Q:** Verily Med-PaLM 2 stack?
**A:** Vertex AI in HIPAA region + signed BAA + CMEK + VPC-SC + Med-PaLM 2 model + grounding (Vertex AI Search) + recitation + SynthID + audit + clinician-in-the-loop.

**Q:** The 8-step cost optimization playbook?
**A:** 1) Tier the workload, 2) Cache stable prefixes, 3) Batch where possible, 4) Provisioned Throughput at scale, 5) Retrieve don't stuff, 6) Distill for narrow tasks, 7) Monitor cost day 1, 8) Multi-agent specialists.

**Q:** What stacks for compound cost savings?
**A:** Batch + Flash Lite + caching can yield 10-100× savings vs Pro PAYG baseline on appropriate workloads.

**Q:** Top 6 security checklist items?
**A:** IAM least privilege · VPC-SC · CMEK · Cloud Audit Logs · Secret Manager (not env vars) · Region pinned + BAA.

**Q:** When pick Google Vertex AI over AWS Bedrock?
**A:** Native multi-modal (especially video), 2M context, EU + workspace integration, cheapest at Flash tier, Gemma open-weight option.

**Q:** When pick AWS Bedrock over Vertex AI?
**A:** Need Claude specifically + AWS-native data residency, or organization is already standardized on AWS.

**Q:** What is deflection rate?
**A:** Percentage of customer interactions handled by the AI without escalation to a human. A key metric for production AI assistants (Wendy's, customer support, IVR).

**Q:** The Google Cloud Generative AI Leader exam format?
**A:** $99 USD, 90 minutes, 50–60 multiple-choice/multi-select questions, online proctored (Kryterion/Webassessor), scaled scoring, 3-year validity.

**Q:** The Google Cloud Professional ML Engineer (PMLE) exam format?
**A:** $200 USD, 2 hours, 50–60 scenario-heavy questions, online or in-person, 2-year validity.

---

## 📚 STUDY TIPS

1. **Drill the flashcards daily**, 10-15 minutes is enough; spaced repetition wins.
2. **Filter by section**, focus on weakest module each session.
3. **Mark "Got it" honestly**, don't mark a card known until you can explain it in one breath.
4. **Cycle the deck weekly**, re-shuffle and re-drill after marking; "got it" cards stay easy.
5. **Cross-link with the Cheat Sheets**, each module's Cheat-Sheet.md is the printable version of these cards in tabular form.

---

## ✅ BEFORE THE EXAM

Run through these acceptance criteria 48 hours before sitting:

1. Can you draw the Vertex AI umbrella from memory? (10 sub-products minimum.)
2. Can you recite the difference between Vertex AI Search and Vertex AI Vector Search?
3. Can you list the four safety_setting categories and four thresholds without checking?
4. Can you explain the customization ladder (5 rungs in order)?
5. Can you sketch the MLOps loop (8 stages)?
6. Can you defend Vertex AI over AWS Bedrock and Azure OpenAI in 30 seconds each?
7. Can you list the 12-item responsible-AI checklist top half?
8. Can you do the unit-economics math for a Flash workload at 10K req/min?

If yes sit the exam. If no on any re-drill that module's cards + Cheat Sheet, sleep on it, re-check tomorrow. 🟦
