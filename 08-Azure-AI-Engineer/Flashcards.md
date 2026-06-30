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
  var STORAGE_KEY = 'fc-progress-az-ai102';
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

# 🃏 Azure AI Apps and Agents Developer (AI-103) Master Flashcards

> **How to use:** Each card has a Q on one line and A on the next. Use the interactive widget above (mark "Got it" / "Try again" to track your progress), or copy these into Anki / Quizlet / paper. Aim for daily review until the real exam.

---

## ☁️ SECTION 1: AZURE AI SERVICES OVERVIEW

**Q:** What is the current umbrella brand for Microsoft's pretrained AI APIs?
**A:** Azure AI services (formerly Cognitive Services).

**Q:** Old → new: Form Recognizer → ?
**A:** Document Intelligence.

**Q:** Old → new: LUIS → ?
**A:** Conversational Language Understanding (CLU) in Azure AI Language.

**Q:** Old → new: QnA Maker → ?
**A:** Question Answering in Azure AI Language.

**Q:** Old → new: Azure AI Studio → ?
**A:** Azure AI Foundry.

**Q:** Resource kind for a multi-service Azure AI services resource?
**A:** `AIServices`, one key + endpoint for most services.

**Q:** Is Azure OpenAI included in the multi-service `AIServices` resource?
**A:** No. Azure OpenAI is always a separate `OpenAI` resource kind.

**Q:** REST header used for subscription-key authentication to Azure AI services?
**A:** `Ocp-Apim-Subscription-Key`.

**Q:** What is required on an Azure AI services resource for Microsoft Entra ID authentication to work?
**A:** A custom subdomain endpoint (e.g. `https://maya.cognitiveservices.azure.com/`).

**Q:** Best authentication for code running in Azure App Service that calls an Azure AI service?
**A:** System-assigned managed identity + `Cognitive Services User` role.

**Q:** Python helper that walks env → managed identity → CLI → VS Code credentials?
**A:** `DefaultAzureCredential` from `azure.identity`.

**Q:** Free-tier (F0) resource limit per subscription?
**A:** One F0 resource per service kind per subscription.

**Q:** How many keys does each Azure AI resource have, and why?
**A:** Two (key1, key2), for zero-downtime rotation.

---

## 🛡️ SECTION 2: RESPONSIBLE AI & CONTENT SAFETY

**Q:** Microsoft's six Responsible AI principles?
**A:** Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, Accountability.

**Q:** Difference between Fairness and Inclusiveness?
**A:** Fairness = equitable outcomes across groups. Inclusiveness = usable by people with diverse abilities.

**Q:** The four harm categories detected by Azure AI Content Safety?
**A:** Hate, Sexual, Violence, Self-Harm.

**Q:** What severity values does Content Safety return?
**A:** Discrete: 0, 2, 4, 6 (no odd values).

**Q:** What's a "Transparency Note"?
**A:** Microsoft-published document describing a service's capabilities, intended uses, limits, and recommended evaluations.

**Q:** What catches a user typing "Ignore previous instructions"?
**A:** Prompt Shields, user prompt attack.

**Q:** What catches malicious instructions embedded in a document being summarized?
**A:** Prompt Shields, document (indirect) attack.

**Q:** What does Groundedness Detection compare?
**A:** An LLM's response against the grounding sources you provide.

**Q:** Default Azure OpenAI content filter threshold for new deployments?
**A:** Medium for Hate/Sexual/Violence/Self-Harm in both prompt and completion.

**Q:** The four stages of Microsoft's RAI workflow?
**A:** Identify → Measure → Mitigate → Operate.

**Q:** Microsoft's four mitigation layers?
**A:** Model · Safety system · Metaprompt + grounding · User experience.

**Q:** Capabilities requiring Limited Access approval?
**A:** Face identification + verification, Custom Neural Voice, Speaker Recognition, Custom Person in Video Indexer.

**Q:** Microsoft's open-source GenAI red-teaming framework?
**A:** PyRIT.

---

## 👁️ SECTION 3: COMPUTER VISION

**Q:** Which service for tagging, captioning, OCR on a single image?
**A:** Azure AI Vision (Image Analysis 4.0).

**Q:** Visual feature in Image Analysis 4.0 that returns text?
**A:** `READ`.

**Q:** How do you request multiple visual features in Image Analysis 4.0?
**A:** ONE call with `visual_features=[…]`. Not one call per feature.

**Q:** Custom Vision uses how many resource kinds?
**A:** Two, Training + Prediction (or one unified CognitiveServices).

**Q:** Which Custom Vision domain do you choose to export the model for offline use?
**A:** A "Compact" domain, exports to ONNX, TensorFlow, CoreML, or Docker.

**Q:** Primary metric for Custom Vision object detection?
**A:** mAP (mean Average Precision).

**Q:** Face attributes retired in 2022 for RAI?
**A:** Emotion, Age, Gender, Smile, Facial Hair, Hair, Makeup.

**Q:** Face attributes still available?
**A:** Glasses, Mask, Head Pose, Blur, Exposure, Noise, Occlusion.

**Q:** Current Face detection and recognition model versions?
**A:** Detection_03, Recognition_04.

**Q:** Workflow to identify a face?
**A:** Create PersonGroup → Add persons + faces → TRAIN → Identify.

**Q:** Read OCR hierarchy from largest to smallest?
**A:** Pages → Blocks → Lines → Words.

**Q:** Video Indexer custom model types?
**A:** Custom Language, Custom Brands, Custom Person (Limited Access), Custom Logo.

---

## 🗣️ SECTION 4: NLP, LANGUAGE, TRANSLATOR, SPEECH

**Q:** Python client for Azure AI Language?
**A:** `TextAnalyticsClient` (from `azure.ai.textanalytics`).

**Q:** Method to redact PII?
**A:** `recognize_pii_entities`, returns entities + `.redacted_text`.

**Q:** Difference between extractive and abstractive summarization?
**A:** Extractive picks existing sentences. Abstractive generates new ones (LLM-backed, can hallucinate).

**Q:** Aspect-based sentiment analysis is called?
**A:** Opinion Mining (enable via `show_opinion_mining=True`).

**Q:** Translator requires which additional header for global resources?
**A:** `Ocp-Apim-Subscription-Region`.

**Q:** Document Translation is synchronous or async?
**A:** Async/batch with source + target Azure Storage containers; preserves DOCX/PPTX format.

**Q:** Custom Translator training data format?
**A:** Parallel data, matched sentence pairs (and optional tuning + test sets).

**Q:** Neural voice naming pattern?
**A:** `<locale>-<NameNeural>`, e.g. `en-US-JennyNeural`.

**Q:** SSML lets you control which voice characteristics?
**A:** Rate, pitch, volume, breaks, pronunciation, emphasis, speaking style.

**Q:** Custom Neural Voice gating requirements?
**A:** Limited Access approval AND voice talent consent recording.

**Q:** Best transcription mode for hours of recorded audio?
**A:** Batch transcription via REST + Azure Storage.

**Q:** CLU entity types?
**A:** Learned, List, Prebuilt, Regex.

**Q:** Required step before you can call a custom Language model in production?
**A:** Deploy the trained model to a named deployment slot.

---

## 📄 SECTION 5: DOCUMENT INTELLIGENCE & AI SEARCH

**Q:** Mnemonic for the five Azure AI Search concepts?
**A:** DISKS, Data source · Indexer · Skillset · Knowledge store · Search index.

**Q:** Indexer in Azure AI Search, push or pull?
**A:** Pull. The indexer reads from a data source on a schedule.

**Q:** Custom Template vs Custom Neural, which for varying layouts?
**A:** Custom Neural. Template is for fixed layouts.

**Q:** What does a Custom Classifier model do?
**A:** Categorizes incoming docs (e.g. invoice vs receipt vs statement) before routing them to extraction models.

**Q:** Modern Python client for Document Intelligence?
**A:** `DocumentIntelligenceClient` (from `azure-ai-documentintelligence`).

**Q:** Prebuilt invoice model ID?
**A:** `prebuilt-invoice`.

**Q:** Default vector search algorithm in Azure AI Search?
**A:** HNSW (Hierarchical Navigable Small World).

**Q:** Default vector distance metric?
**A:** Cosine.

**Q:** Dimensions for `text-embedding-3-small`, `text-embedding-3-large`, `ada-002`?
**A:** 1536, 3072, 1536.

**Q:** Minimum Azure AI Search SKU for semantic ranker?
**A:** Standard (S1) or higher.

**Q:** What is "hybrid + semantic" search?
**A:** Keyword + vector merged via Reciprocal Rank Fusion, then semantic re-ranked, Microsoft's RAG gold standard.

**Q:** What is integrated vectorization?
**A:** A built-in Azure OpenAI Embedding skill in your skillset that vectorizes docs during indexing, no glue code.

**Q:** What's a Knowledge Store?
**A:** Optional projection of skillset-enriched data to Azure Storage (tables, objects, files) for downstream analytics.

**Q:** Field attribute that determines whether a field is returned in results?
**A:** `retrievable: true`.

---

## 💬 SECTION 6: CONVERSATIONAL AI

**Q:** What does Azure AI Bot Service provide vs the Bot Framework SDK?
**A:** Bot Service provides managed hosting + channel connectivity. The Bot Framework SDK is the code-first SDK you build your bot with.

**Q:** Channel for embedding a bot in a custom mobile/web app?
**A:** Direct Line.

**Q:** Channel for voice in/out via Speech SDK?
**A:** Direct Line Speech.

**Q:** Production state storage for a Bot Framework bot?
**A:** CosmosDbPartitionedStorage or BlobStorage (MemoryStorage is dev only).

**Q:** Pattern for a bot that handles FAQs AND structured commands?
**A:** Orchestration workflow that routes between CLU and Question Answering child projects.

**Q:** Python base class for a Bot Framework bot?
**A:** `ActivityHandler`, override `on_message_activity`, `on_members_added_activity`, etc.

**Q:** What are Adaptive Cards?
**A:** Channel-portable JSON-defined UI that renders natively across supported channels.

**Q:** Active learning is a feature of which service?
**A:** Question Answering (not CLU).

**Q:** Best auth for a bot calling Azure AI Language in production?
**A:** Managed identity + RBAC role, no keys in code.

---

## 🧠 SECTION 7: AZURE OPENAI SERVICE

**Q:** What does the `model` parameter refer to in an Azure OpenAI chat call?
**A:** Your deployment name (which maps to a base model + version).

**Q:** Python client class for Azure OpenAI?
**A:** `AzureOpenAI` (from the `openai` package).

**Q:** Deployment SKU for reserved capacity + predictable latency?
**A:** PTU, Provisioned Throughput Units.

**Q:** Deployment SKU for cheapest async batch processing?
**A:** Global Batch (~50% cheaper, 24-hour SLA).

**Q:** Whisper does what?
**A:** Speech-to-text (an Azure OpenAI model).

**Q:** DALL-E does what?
**A:** Text-to-image.

**Q:** Fine-tuning data file format?
**A:** JSONL, one `{"messages":[{...},{...},{...}]}` per line.

**Q:** RAG vs fine-tuning, when do you fine-tune?
**A:** For style, tone, or output-format consistency. Use RAG for changing knowledge.

**Q:** What does `in_scope: true` do in On Your Data?
**A:** Refuses to answer outside the retrieved documents.

**Q:** Default Azure OpenAI content filter threshold?
**A:** Medium.

**Q:** First step when Azure OpenAI returns HTTP 429?
**A:** Check the deployment's TPM/RPM quota; add exponential backoff; request quota increase or move to PTU.

**Q:** GPT-4o context window size?
**A:** Approximately 128K tokens.

**Q:** Temperature range for grounded RAG answers?
**A:** 0.0–0.3 (low temperature = less hallucination).

**Q:** Tool / function calling, what does the model return when it decides to call a function?
**A:** A tool call with the function name + JSON arguments. Your code executes and feeds the result back as a `tool` role message.

---

## 🛠️ SECTION 8: BUILD GENAI APPS (FOUNDRY, AGENTS, SK)

**Q:** Azure AI Studio's new name?
**A:** Azure AI Foundry.

**Q:** Foundry's resource hierarchy?
**A:** Hub (shared infra) → Project (app workspace) → Connections, Deployments, Flows, Evals, Indexes, Agents.

**Q:** What's a Foundry Connection?
**A:** A reusable, RBAC-secured handle to an external service (Azure OpenAI, AI Search, Storage, etc.), avoid hardcoding endpoints + keys.

**Q:** MaaS vs MaaP deployments?
**A:** MaaS = serverless pay-per-token. MaaP = managed compute you scale.

**Q:** What is Prompt Flow?
**A:** A visual DAG orchestrator in Foundry, chain LLM, Python, retrieval, and embedding nodes; deploy as a managed endpoint.

**Q:** Prompt variants in Prompt Flow are used for what?
**A:** A/B comparison of multiple prompt versions on the same evaluation set.

**Q:** Built-in Foundry evaluation metrics?
**A:** Groundedness, Relevance, Coherence, Fluency, Similarity, Safety (Hate/Sexual/Violence/Self-Harm), plus custom.

**Q:** Three built-in Agent Service tools?
**A:** File Search (RAG over uploaded files), Code Interpreter, Function Calling. (Browser is preview.)

**Q:** Agent Service primitives?
**A:** Assistant, Thread, Message, Run.

**Q:** What is Semantic Kernel?
**A:** Microsoft's open-source orchestration SDK (C#, Python, Java) for LLM + plugins + planners.

**Q:** Prompt Flow vs Semantic Kernel?
**A:** Prompt Flow = visual DAG inside Foundry. Semantic Kernel = code-first SDK you embed in your app.

**Q:** Microsoft's recommended retrieval pattern for RAG?
**A:** Hybrid (keyword + vector) + semantic re-ranking.

**Q:** Three agent reasoning patterns?
**A:** ReAct, Plan-and-Execute, Reflection (plus multi-agent collaboration).

---

## 📚 STUDY TIPS

- Cards mix concepts AND code shapes, recognize SDK package + class pairs.
- Use the section dropdown above to focus on weak topics.
- After each Quiz.md, add the questions you missed as new cards.
- Aim for ≥ 90% "Got it" before your real exam date.
- Take Microsoft Learn's free AI-103 practice assessment as your gut-check.

---

## 🎯 BEFORE THE EXAM

1. Review every Cheat-Sheet.md (8 modules × ~2 min)
2. Re-read the official AI-103 study guide
3. Run Microsoft Learn's free practice assessment twice
4. Sleep 8 hours
5. Trust your prep. You've got this. 💪
