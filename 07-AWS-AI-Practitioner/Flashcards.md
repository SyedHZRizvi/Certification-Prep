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

<div class="fc-app" id="fc-app" role="region" aria-label="Interactive flashcards">
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
  var STORAGE_KEY = 'fc-progress-aws-aif';
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
    // Hide the leading H1 + intro blockquote? Keep them. Hide all <hr> within the article body that appear after our widget — they're section separators in the source list.
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

# 🃏 AWS AI Practitioner (AIF-C01) Master Flashcards

> **How to use:** Click any card to flip. Click "Got it" to mark it known. Filter by section above. Aim for daily 10-minute reviews until the exam — the vocabulary should be reflexive.

---

## 📦 SECTION 1: AI / ML FUNDAMENTALS

**Q:** What is the AI / ML / DL / GenAI hierarchy?
**A:** AI ⊃ ML ⊃ Deep Learning ⊃ Generative AI. AI is broadest; GenAI is a subset of deep learning.

**Q:** Define machine learning in one sentence.
**A:** A system that learns patterns from data instead of being explicitly programmed.

**Q:** What are the 3 ML paradigms?
**A:** Supervised (labeled), Unsupervised (no labels), Reinforcement (reward-based trial and error).

**Q:** Classification vs Regression — what's the difference?
**A:** Classification predicts a category; Regression predicts a number.

**Q:** What is unsupervised CLUSTERING used for?
**A:** Grouping similar items without predefined categories (e.g., customer segmentation).

**Q:** What does RLHF stand for and what is it used for?
**A:** Reinforcement Learning from Human Feedback — aligns LLMs with human preferences (used for Claude/GPT-style chat models).

**Q:** What is overfitting?
**A:** When a model memorizes the training data and performs poorly on new (test) data — high training accuracy, low test accuracy.

**Q:** What is underfitting?
**A:** When a model is too simple — poor accuracy on both training and test data.

**Q:** Parameter vs Hyperparameter?
**A:** Parameters are learned during training (weights). Hyperparameters are set before training (learning rate, batch size, epochs).

**Q:** What is one EPOCH?
**A:** One full pass through the entire training dataset.

**Q:** What is INFERENCE?
**A:** Using a trained model to predict on new data (also called prediction or scoring).

**Q:** Why is accuracy a bad metric on imbalanced data?
**A:** A model that always predicts the majority class can be 99% accurate while catching zero of the minority class. Use Recall or F1.

**Q:** When does deep learning beat classical ML?
**A:** Usually on unstructured data (images, audio, text). For tabular data, XGBoost / random forest often beat deep learning.

---

## 📦 SECTION 2: SAGEMAKER & AWS ML SERVICES

**Q:** What is Amazon SageMaker?
**A:** A fully managed end-to-end ML platform with tools for the entire lifecycle (Studio, Data Wrangler, Feature Store, Training, Endpoints, etc.).

**Q:** What is SageMaker Studio?
**A:** The browser-based IDE for ML — notebooks, training, deployment, all in one place.

**Q:** What is SageMaker Canvas?
**A:** No-code visual ML for business analysts working with tabular CSVs.

**Q:** What is SageMaker Autopilot?
**A:** AutoML — explores algorithms and hyperparameters on tabular data and returns the best model plus a notebook.

**Q:** What is SageMaker JumpStart?
**A:** A catalog of pretrained models (including foundation models) and end-to-end solutions you can deploy on a SageMaker endpoint.

**Q:** What is SageMaker Data Wrangler?
**A:** A visual data prep tool with 300+ built-in transformations.

**Q:** What is SageMaker Feature Store?
**A:** A central, versioned store for ML features — online for low-latency inference, offline (S3) for training.

**Q:** What is SageMaker Ground Truth?
**A:** A managed data labeling service with public, private, and vendor workforces (and active learning).

**Q:** Name the 4 inference endpoint modes.
**A:** Real-time, Serverless, Asynchronous, Batch Transform.

**Q:** When to use Batch Transform?
**A:** When scoring a whole dataset offline with no live API needed.

**Q:** When to use Asynchronous Inference?
**A:** Large payloads (up to ~1 GB) and longer processing time (seconds to minutes).

**Q:** What does SageMaker Model Monitor detect?
**A:** Data quality drift, model quality drift, bias drift, and feature attribution drift.

**Q:** What is SageMaker Clarify used for?
**A:** Bias detection (pre/post-training and in production) and explainability via SHAP.

**Q:** What is Amazon Rekognition?
**A:** A managed AWS AI service for image and video analysis — object/face/celebrity detection, content moderation, OCR.

**Q:** What is Amazon Textract?
**A:** A managed service for extracting text plus structured data (tables, forms) from documents — OCR++.

**Q:** What is Amazon Comprehend?
**A:** A managed NLP service for sentiment, entities, key phrases, language detection. Comprehend Medical adds PHI extraction.

**Q:** What is Amazon Polly?
**A:** Managed text-to-speech with lifelike voices.

**Q:** What is Amazon Transcribe?
**A:** Managed speech-to-text (also Medical and Call Analytics variants).

**Q:** What is Amazon Lex?
**A:** Managed conversational chatbots (the engine behind Alexa).

**Q:** What is Amazon Personalize?
**A:** Managed real-time personalized recommendations (Amazon.com's recommendation engine as a service).

**Q:** What is Amazon Forecast?
**A:** Managed time-series forecasting.

**Q:** What is Amazon Kendra?
**A:** Enterprise intelligent search across documents using natural language.

---

## 📦 SECTION 3: GENERATIVE AI FUNDAMENTALS

**Q:** Define a foundation model.
**A:** A large, pre-trained, general-purpose model adaptable to many downstream tasks.

**Q:** What architecture underlies modern LLMs?
**A:** The Transformer (2017, "Attention Is All You Need"), specifically self-attention.

**Q:** What is a token?
**A:** A small chunk of text (~3–4 characters) that the model processes. Pricing is per token.

**Q:** What is the context window?
**A:** The maximum number of tokens (prompt + response) the model can process in a single call.

**Q:** What is an embedding?
**A:** A high-dimensional numerical vector representing the meaning of text/image/audio — similar meanings are close in vector space.

**Q:** What does TEMPERATURE control?
**A:** Randomness / creativity of the output. Lower = more deterministic. Higher = more creative (and more hallucination risk).

**Q:** What does TOP-P (nucleus sampling) do?
**A:** Limits sampling to the smallest set of tokens whose cumulative probability is p (e.g., 0.9 = top 90%).

**Q:** What does MAX TOKENS control?
**A:** The maximum length of the model's response.

**Q:** What is a hallucination in an LLM?
**A:** A confidently wrong / invented output that sounds plausible but isn't factually grounded.

**Q:** Name 3 ways to reduce hallucinations.
**A:** RAG (ground in real data), better prompting (few-shot + system instructions), lower temperature, and using Bedrock Guardrails contextual grounding.

**Q:** What is a multimodal model?
**A:** A model that natively handles more than one input/output modality (e.g., text + image, like Claude vision or Amazon Nova).

**Q:** Roughly how many words is 1,000 tokens of English text?
**A:** About 750 words.

---

## 📦 SECTION 4: AMAZON BEDROCK & THE AWS GENAI STACK

**Q:** What is Amazon Bedrock?
**A:** A fully managed service for accessing multiple foundation models through one API — serverless, pay per token, no infrastructure.

**Q:** Name 6 Bedrock model providers.
**A:** Anthropic (Claude), Amazon (Titan, Nova), Meta (Llama), Mistral, Cohere, Stability AI, AI21 Labs.

**Q:** Are OpenAI's GPT models on Bedrock?
**A:** No — Bedrock providers as of 2024–2025 do NOT include OpenAI or Google Gemini.

**Q:** What is Amazon Nova?
**A:** Amazon's 2024 frontier foundation model family (Nova Micro, Lite, Pro, Premier; Canvas for images; Reel for video).

**Q:** What is the Amazon Titan family?
**A:** Amazon's first-party FM family — Titan Text (Lite/Express), Titan Text Embeddings, Titan Image Generator.

**Q:** Amazon Q Developer vs Amazon Q Business — one line each.
**A:** Q Developer = AI coding assistant in your IDE / AWS console (was CodeWhisperer). Q Business = enterprise RAG chatbot over your company data.

**Q:** What is PartyRock?
**A:** A no-code sandbox on top of Bedrock for prototyping and learning — not for production.

**Q:** What is AWS Trainium?
**A:** Custom AWS chip purpose-built for ML training at lower cost than GPUs.

**Q:** What is AWS Inferentia?
**A:** Custom AWS chip purpose-built for ML inference at lower cost than GPUs.

**Q:** What are the 3 layers of the AWS GenAI stack?
**A:** Applications (Amazon Q, PartyRock) → Tools (Amazon Bedrock) → Infrastructure (SageMaker, Trainium, Inferentia).

**Q:** Bedrock pricing modes?
**A:** On-Demand (per token), Batch (~50% off, async ≤24h), Provisioned Throughput (reserved model units for steady traffic).

**Q:** Does Bedrock use customer prompts/outputs to train base FMs?
**A:** No. By default, customer data stays in their account/Region and is not used to train base FMs.

---

## 📦 SECTION 5: PROMPT ENGINEERING & RAG

**Q:** What are the 5 parts of a prompt?
**A:** System prompt, Instruction, Context, Input data, Output indicator.

**Q:** What is a system prompt?
**A:** The persistent persona / tone / policy instruction that's invisible to the user.

**Q:** Zero-shot vs Few-shot prompting?
**A:** Zero-shot = no examples; Few-shot = several worked examples before the new input.

**Q:** What is Chain-of-Thought (CoT) prompting?
**A:** Asking the model to reason step-by-step ("Let's think step by step") — improves reasoning and math.

**Q:** What is ReAct prompting?
**A:** Reason + Act + Observe loop — interleaves reasoning with calling external tools/APIs. The pattern behind Bedrock Agents.

**Q:** What is prompt injection?
**A:** Malicious user input that overrides the system prompt — the "SQL injection" of LLMs.

**Q:** Direct vs Indirect prompt injection?
**A:** Direct = user types the malicious prompt. Indirect = malicious instructions are hidden in content the LLM ingests (PDF, web page, RAG corpus).

**Q:** What is jailbreaking?
**A:** Tricking the model to bypass its built-in safety guidelines.

**Q:** Define RAG.
**A:** Retrieval-Augmented Generation — fetch relevant chunks from your data at runtime and feed them into the prompt so the LLM grounds its answer.

**Q:** The 2 phases of RAG?
**A:** INDEX (chunk → embed → store in vector DB) and QUERY (embed question → retrieve top-K → feed to LLM → answer).

**Q:** What are Knowledge Bases for Amazon Bedrock?
**A:** A managed RAG service — Bedrock handles chunking, embedding, vector storage, and retrieval orchestration.

**Q:** Default vector store for Bedrock Knowledge Bases?
**A:** Amazon OpenSearch Serverless.

**Q:** Name 4 vector stores supported by Bedrock Knowledge Bases.
**A:** OpenSearch Serverless, Aurora pgvector, Pinecone, Redis Enterprise (also Neptune Analytics, DocumentDB, MemoryDB, MongoDB Atlas).

**Q:** What is a Bedrock Agent action group?
**A:** A set of APIs / Lambda functions the agent can call to perform actions during a conversation.

**Q:** What is hybrid search?
**A:** Combining vector (semantic) search with keyword (BM25) search to handle exact identifiers and meaning together.

**Q:** What is reranking in RAG?
**A:** Re-scoring the initial top-K retrieved chunks to surface a higher-quality top-N (e.g., using Cohere Rerank).

---

## 📦 SECTION 6: FINE-TUNING & CUSTOMIZATION

**Q:** Order the 4 customization approaches by cost (cheapest → most expensive).
**A:** Prompt engineering < RAG < Fine-tuning < Continued pre-training.

**Q:** "RAG for ___, fine-tuning for ___"?
**A:** RAG for facts. Fine-tuning for behaviors (tone, format, specific style).

**Q:** What format is fine-tuning data for Bedrock?
**A:** A JSONL file in S3 with prompt/completion (or chat-style messages) pairs.

**Q:** What's required to invoke a custom (fine-tuned) Bedrock model?
**A:** Provisioned Throughput — you reserve dedicated model units to serve inference.

**Q:** What is continued pre-training?
**A:** Extending a foundation model's pre-training using large amounts of UNLABELED domain text. Used for whole-domain vocabulary shifts.

**Q:** What is instruction tuning?
**A:** Fine-tuning a base model on curated instruction+response pairs to turn it into a chat-style assistant.

**Q:** What does PEFT / LoRA stand for and do?
**A:** Parameter-Efficient Fine-Tuning / Low-Rank Adaptation — train small adapter layers on top of frozen base weights. Cheap, fast modern fine-tuning.

**Q:** What is DPO?
**A:** Direct Preference Optimization — a newer, simpler alignment alternative to RLHF using preference pairs.

**Q:** Which metric is best for MACHINE TRANSLATION?
**A:** BLEU (n-gram overlap).

**Q:** Which metric is best for SUMMARIZATION?
**A:** ROUGE (recall-oriented n-gram overlap).

**Q:** What is PERPLEXITY and is lower better or worse?
**A:** Intrinsic LM metric — how "surprised" the model is by held-out text. **Lower is better.**

**Q:** What is BERTScore?
**A:** A semantic similarity metric using embedding models — closer to human judgment than n-gram metrics.

**Q:** Name the 4 evaluation types in Bedrock Model Evaluation.
**A:** Automatic, Human (worker), Knowledge Base evaluation, and LLM-as-a-judge.

**Q:** What is LLM-as-a-judge?
**A:** Using one strong LLM to grade another LLM's outputs at scale — much cheaper than full human eval.

**Q:** Top 3 ways to cut Bedrock cost?
**A:** Switch to a smaller model (Haiku, Nova Micro); use Bedrock Batch (50% off); shorten prompts and use RAG instead of stuffing big context.

---

## 📦 SECTION 7: RESPONSIBLE AI

**Q:** Name 5 of AWS's Responsible AI pillars.
**A:** Fairness, Explainability, Robustness, Privacy & Security, Transparency (also: Governance, Safety, Controllability, Veracity, Inclusivity).

**Q:** What does SageMaker Clarify do?
**A:** Detects bias (pre/post-training and in production) and provides explainability via SHAP feature attributions.

**Q:** What do Guardrails for Amazon Bedrock do?
**A:** Filter inputs and outputs for content (hate/violence/etc.), denied topics, PII / sensitive info, word filters, and contextual grounding (hallucination flag).

**Q:** Customer-authored model docs in SageMaker are called?
**A:** SageMaker Model Cards.

**Q:** AWS-published responsible-AI documentation for AWS AI services is called?
**A:** AWS AI Service Cards.

**Q:** What is Amazon A2I (Augmented AI)?
**A:** Managed human-in-the-loop review workflows for AI predictions (Textract, Rekognition, Comprehend, custom).

**Q:** What is disparate impact and the "80% rule"?
**A:** A fairness check comparing selection rates across groups — ratio below ~0.8 indicates disparate impact (bias).

**Q:** SHAP — what is it?
**A:** A feature-attribution technique that explains an individual prediction by attributing the output to each input feature.

**Q:** What is the difference between explainability and interpretability?
**A:** Interpretability = directly inspect the model (e.g., decision tree). Explainability = post-hoc explanation of opaque models (e.g., SHAP on neural nets).

**Q:** Name 3 external AI governance frameworks.
**A:** NIST AI RMF (US federal), ISO/IEC 42001 (international), EU AI Act (EU regulation).

**Q:** What is red-teaming in AI?
**A:** Proactive adversarial testing of an AI system to find safety/security failures before attackers do.

**Q:** What is HITL?
**A:** Human-In-The-Loop — a human approves or reviews every AI prediction before it's used (high-stakes scenarios).

---

## 📦 SECTION 8: AI SECURITY & GOVERNANCE

**Q:** Under the AWS Shared Responsibility Model for AI, what is the CUSTOMER responsible for?
**A:** Data classification, IAM least-privilege, Guardrails configuration, fine-tuning data safety, reviewing audit logs — all "in the cloud" choices.

**Q:** What IAM action invokes a Bedrock model?
**A:** `bedrock:InvokeModel` (and `bedrock:InvokeModelWithResponseStream` for streaming).

**Q:** How do you restrict a team to only certain Bedrock models?
**A:** Use a resource-level IAM policy that limits `bedrock:InvokeModel` to specific model ARNs.

**Q:** How do you make Bedrock API traffic stay private off the public internet?
**A:** Use a PrivateLink VPC interface endpoint for Bedrock Runtime (and Agent / KB Runtime).

**Q:** What does AWS CloudTrail log for Bedrock?
**A:** API call METADATA — who called what, when. NOT the prompt/response content.

**Q:** What captures the actual PROMPT + RESPONSE content from Bedrock?
**A:** Bedrock model invocation logging (to S3 or CloudWatch Logs) — opt-in.

**Q:** What does AWS Macie do?
**A:** ML-powered PII / sensitive data discovery and classification in S3 buckets.

**Q:** Macie vs Bedrock Guardrails for PII?
**A:** Macie = discovery at REST in S3 (e.g., before ingesting into a KB). Guardrails = filter/redact at INFERENCE time on prompts/responses.

**Q:** What's in AWS Artifact?
**A:** AWS compliance reports (SOC, ISO, HIPAA, FedRAMP) for download.

**Q:** What does AWS Audit Manager do?
**A:** Aggregates audit evidence into framework-aligned packages (NIST, ISO, PCI, etc.).

**Q:** What is a BAA and when do you need one?
**A:** Business Associate Addendum — required to run HIPAA-regulated workloads on AWS (must also use HIPAA-eligible services).

**Q:** Does GDPR apply to a US-based AI service?
**A:** Yes — if the service processes personal data of EU residents. GDPR is based on data subject location, not company HQ.

**Q:** What is model extraction (model theft)?
**A:** An attacker queries the model thousands of times to copy its behavior. Defense: rate limiting, query monitoring, watermarking.

**Q:** What is model inversion?
**A:** Reconstructing training data from the model's outputs. A privacy attack.

**Q:** What is data poisoning?
**A:** An attacker inserts malicious examples into the training set or RAG corpus to plant a backdoor or skew the model.

**Q:** What is a SageMaker execution role?
**A:** The IAM role a SageMaker job or endpoint assumes to access AWS resources (S3, ECR, KMS).

**Q:** Best encryption-at-rest option for sensitive Bedrock custom models?
**A:** A customer-managed KMS key (CMK) — gives you key rotation, policy control, and audit via CloudTrail.

**Q:** What is the SageMaker Model Registry?
**A:** A central catalog of trained models with versions, lineage, and an approval workflow before deployment.

---

## 🎯 STUDY TIPS

1. Run flashcards 10 minutes/day, every day, until the exam
2. Filter by section when you need to drill the weakest module
3. "Got it" only when you'd nail it cold on the exam
4. Shuffle before each session — recall in context, not order
5. Track wrong answers and turn them into new flashcards

---

## 🏁 BEFORE THE EXAM

- [ ] All sections marked ≥ 90% "Got it"
- [ ] Final Mock Exam ≥ 80%
- [ ] Re-read every Cheat-Sheet once
- [ ] Skim the AIF-C01 Exam Guide PDF
- [ ] Sleep 8 hours
- [ ] Bring ID + water + a calm head

You've trained for this. Go pass it. 💪
