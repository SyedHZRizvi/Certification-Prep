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
  var STORAGE_KEY = 'aws-mls-c01-cards';
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

# 🃏 AWS ML Specialty (MLS-C01) Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Drill daily until your real exam. Aim for 15–20 min/day for 3 weeks before the exam.

---

## 🧠 SECTION 1: ML FOUNDATIONS

**Q:** Name the three families of machine learning.
**A:** Supervised (labels), Unsupervised (no labels), Reinforcement Learning (reward signal).

**Q:** Sub-families of unsupervised learning?
**A:** Clustering, Dimensionality Reduction, Anomaly Detection, Association.

**Q:** Define bias (statistical) in the bias-variance trade-off.
**A:** Error from over-simplifying assumptions; symptom = high training AND high validation error (underfit).

**Q:** Define variance (statistical) in the bias-variance trade-off.
**A:** Error from over-sensitivity to training data; symptom = low training error but high validation error (overfit).

**Q:** The 7-step ML lifecycle?
**A:** Business problem → Data engineering → EDA/Feature engineering → Modeling → Evaluation → Deployment → Monitoring/Retrain.

**Q:** What are the 7 layers of the AWS ML stack?
**A:** L1 Data · L2 Silicon · L3 Frameworks · L4 SageMaker · L5 Managed AI services · L6 Bedrock · L7 Amazon Q applications.

**Q:** What does the Well-Architected ML Lens add to the 6 standard pillars?
**A:** ML-specific guidance per pillar: Pipelines (Ops), IAM+KMS (Sec), Multi-AZ endpoints (Rel), Trainium/Inferentia (Perf), Spot+MME (Cost), Inferentia2+Graviton (Sustain).

**Q:** When is accuracy the WRONG metric?
**A:** On imbalanced classes (e.g. 99.9% negatives). Use PR-AUC, F1, recall, precision instead.

**Q:** Define the 7-step ML lifecycle relevance to MLS-C01 modules.
**A:** Step 2 = Module 2; Step 3 = Module 3; Step 4 = Modules 4-7; Step 5 = Module 8; Steps 6-7 = Modules 9-10.

---

## 🛠️ SECTION 2: DATA ENGINEERING

**Q:** Best S3 storage class for active ML training data?
**A:** S3 Standard (or Intelligent-Tiering for unknown patterns).

**Q:** Max S3 object size?
**A:** 5 TB (single PUT 5 GB; multipart parts 5 MB – 5 GB).

**Q:** Stream JSON to S3 as Parquet with no code, which service?
**A:** Kinesis Data Firehose with format conversion using a Glue table schema.

**Q:** Difference between Kinesis Data Streams and Firehose?
**A:** KDS is low-level, ordered, replayable, sub-second; Firehose is managed delivery with min 60s buffer.

**Q:** What does AWS Glue Crawler do?
**A:** Scans S3/RDS/Redshift, infers schema and partitions, populates the Glue Data Catalogue.

**Q:** What is Athena partition projection?
**A:** Lets Athena compute partitions from key naming without running a crawler.

**Q:** Best file format default for ML training on S3?
**A:** Apache Parquet (columnar + Snappy compression + splittable + schema in footer).

**Q:** When is Pipe mode the right SageMaker input mode?
**A:** Huge datasets where you want to stream RecordIO-protobuf via FIFO without staging to disk.

**Q:** Which service replicates an on-prem DB to S3 continuously with CDC?
**A:** AWS DMS targeting S3 (Parquet).

**Q:** Service to scan S3 buckets for PII?
**A:** Amazon Macie.

**Q:** Which file compression breaks splittability in Spark / Glue?
**A:** Gzip on monolithic files. Use Snappy + Parquet or split before gzip.

**Q:** Service for column-level security on a Glue table?
**A:** Lake Formation column-level grants (LF-Tags).

---

## 🔬 SECTION 3: EDA & FEATURE ENGINEERING

**Q:** Sketch the 5-step EDA workflow.
**A:** Understand → Visualise → Clean (missing/outliers/dupes) → Engineer (encode/scale/derive/reduce) → Split (stratified/CV).

**Q:** When is missingness informative?
**A:** When the fact of being missing correlates with the target (e.g. `last_login_date NULL` for churn). Add indicator column + impute/sentinel.

**Q:** What does the IQR outlier rule say?
**A:** Outlier = below Q1 − 1.5·IQR or above Q3 + 1.5·IQR.

**Q:** Encoding for high-cardinality zip codes in an XGBoost?
**A:** Target encoding (CV-safe) or hashing trick. NOT one-hot (40K cols) or ordinal (false ordering).

**Q:** When is target encoding leakage-prone?
**A:** When computed across full dataset including validation rows. Compute inside CV folds only.

**Q:** Best scaler for sparse data (preserves zeros)?
**A:** MaxAbsScaler.

**Q:** Best scaler for right-skewed numeric?
**A:** log1p / Box-Cox / Yeo-Johnson then StandardScaler, OR RobustScaler.

**Q:** PCA assumes what?
**A:** Linear relationships in the data; preserves variance, not predictive utility.

**Q:** Why are t-SNE / UMAP NOT good as model input features?
**A:** They are stochastic, non-deterministic, designed for visualisation, not feature transforms.

**Q:** Class-imbalance treatments?
**A:** Stratified split/CV; class weights; SMOTE on training fold only; threshold tuning; PR-AUC for evaluation.

**Q:** SageMaker tool for no-code data prep with 300+ transforms?
**A:** SageMaker Data Wrangler (exports to Pipelines / Feature Store).

**Q:** Feature Store online vs offline store roles?
**A:** Online (DynamoDB-backed) for low-latency inference; Offline (S3 + Glue Catalogue) for training and historical replay.

**Q:** Pre-training Clarify bias metrics?
**A:** Class Imbalance (CI), DPL, KL, JS, Lp norm, TVD, CDDL.

**Q:** Cyclical encoding for month_of_year?
**A:** sin(2π·month/12) and cos(2π·month/12), two columns to capture wrap-around.

---

## 🧠 SECTION 4: SAGEMAKER ALGORITHMS

**Q:** Default SageMaker algorithm for tabular classification on 10M rows?
**A:** XGBoost.

**Q:** Top XGBoost hyperparameters to control overfitting?
**A:** max_depth (down), lambda/alpha (up), eta (down) with more num_round + early_stopping, subsample/colsample_bytree (down).

**Q:** SageMaker built-in for sparse high-dim CTR / ad ranking?
**A:** Factorization Machines.

**Q:** Built-in for unsupervised tabular anomaly detection?
**A:** Random Cut Forest (RCF).

**Q:** Built-in for user-IP pair anomaly detection?
**A:** IP Insights.

**Q:** Built-in for probabilistic multi-series forecasting?
**A:** DeepAR (quantile loss, p10/p50/p90 outputs).

**Q:** Built-in for word embeddings + text classification, GPU-fast?
**A:** BlazingText (Word2Vec mode or text-classification mode).

**Q:** Built-in for learned embeddings of any pair (user-item, doc-doc)?
**A:** Object2Vec.

**Q:** Best SageMaker image classification approach with limited data?
**A:** Built-in Image Classification with transfer learning (`use_pretrained_model=1`).

**Q:** No-code ML for business analyst?
**A:** SageMaker Canvas.

**Q:** AutoML with full generated code?
**A:** SageMaker Autopilot.

**Q:** What is pipe mode's preferred input format?
**A:** RecordIO-protobuf.

**Q:** SageMaker cost lever for long fault-tolerant training?
**A:** Spot training with `use_spot_instances=True` and checkpointing to S3.

**Q:** When use script mode vs BYO container?
**A:** Script mode = AWS-managed framework container + your `train.py`. BYO = your own Dockerfile in ECR.

---

## 🧬 SECTION 5: DEEP LEARNING

**Q:** SMDDP vs SMMP, when each?
**A:** SMDDP (data parallel) when model fits on one GPU. SMMP (model parallel) when model is too large for one GPU.

**Q:** AWS chip for cost-optimal LLM inference?
**A:** Inferentia2 (`inf2`) compiled via Neuron SDK.

**Q:** AWS chip for cost-optimal training of large models?
**A:** Trainium (trn1/trn2).

**Q:** What is EFA?
**A:** Elastic Fabric Adapter, HPC-grade networking for fast all-reduce in multi-node DL training.

**Q:** What is FSx for Lustre's role in DL training?
**A:** Sub-millisecond file access; lazy-load from S3; for multi-node distributed training data.

**Q:** Mixed precision options?
**A:** FP16 (Tensor Cores; fast; needs loss scaling), BF16 (same range as FP32; best stability), FP8 (H100+).

**Q:** SageMaker Profiler vs Debugger, when each?
**A:** Profiler = system + framework metrics (GPU util, step time). Debugger = training-internals tensors (vanishing grads, NaN).

**Q:** Default LLM-training optimiser?
**A:** AdamW.

**Q:** Standard transformer training stability move?
**A:** Gradient clipping (norm ≈ 1.0) + linear warmup + cosine decay LR schedule.

**Q:** Cut labelling cost on 1M image project?
**A:** SageMaker Ground Truth + Active Learning (auto-labels easy examples).

**Q:** Quickly deploy Llama-3 on AWS with no training code?
**A:** SageMaker JumpStart one-click deploy.

**Q:** ZeRO / FSDP equivalent in SMMP?
**A:** Sharded-data parallelism, shards optimiser state, gradients, parameters across data-parallel workers.

---

## 🗣️ SECTION 6: MANAGED NLP & CV

**Q:** Detect sentiment, entities, key phrases, managed service?
**A:** Amazon Comprehend.

**Q:** Medical NER (drugs, conditions) HIPAA-eligible?
**A:** Amazon Comprehend Medical.

**Q:** Translate with brand-name preservation?
**A:** Amazon Translate + Custom Terminology.

**Q:** Streaming speech-to-text with custom-domain tuning?
**A:** Amazon Transcribe + Custom Language Model (or Custom Vocabulary for acronyms).

**Q:** Build an intent+slot chatbot?
**A:** Amazon Lex (intents, utterances, slots, Lambda fulfillment).

**Q:** Enterprise semantic search across 40+ source systems?
**A:** Amazon Kendra (or Bedrock KB for RAG-LLM answer style).

**Q:** Train CV with ~10-50 images per class, no SageMaker?
**A:** Rekognition Custom Labels.

**Q:** Form + table extraction from PDFs?
**A:** Textract `AnalyzeDocument` with FORMS + TABLES.

**Q:** Invoice extraction with line items + totals?
**A:** Textract `AnalyzeExpense`.

**Q:** Recommendations system, managed, no code?
**A:** Amazon Personalize.

**Q:** Forecast 1000 SKUs without ML expertise?
**A:** Amazon Forecast (managed AutoML for time series).

**Q:** Pre-built fraud workflows?
**A:** Amazon Fraud Detector.

**Q:** Human-in-the-loop review of low-confidence model outputs?
**A:** Amazon Augmented AI (A2I).

**Q:** PPE compliance camera?
**A:** Rekognition `DetectProtectiveEquipment`.

---

## 🌟 SECTION 7: BEDROCK & GENAI

**Q:** AWS managed foundation-model gateway?
**A:** Amazon Bedrock (Claude, Llama, Mistral, Titan, Nova, Cohere).

**Q:** Reduce LLM hallucination grounded in private docs?
**A:** Bedrock Knowledge Base (RAG with RetrieveAndGenerate).

**Q:** Default vector store for Bedrock KBs?
**A:** Amazon OpenSearch Serverless.

**Q:** Multi-step LLM assistant using tools/APIs?
**A:** Bedrock Agent with Action Groups (Lambda + OpenAPI schemas) + KB.

**Q:** Bedrock guardrail that verifies output is supported by retrieved docs?
**A:** Contextual grounding check.

**Q:** Bedrock guardrail filter categories?
**A:** Content (hate/violence/sexual), Topic, Word, PII, Contextual grounding.

**Q:** Fine-tune for company writing style, RAG or fine-tune?
**A:** Fine-tune (style/format). RAG is for facts.

**Q:** Continued pre-training in Bedrock applies to which model?
**A:** Currently Titan (unsupervised domain adaptation).

**Q:** Cost-optimal mode for offline LLM batch workloads?
**A:** Bedrock Batch Inference (~50% off On-Demand).

**Q:** Cost-optimal mode for steady high-volume LLM?
**A:** Bedrock Provisioned Throughput (dedicated capacity units).

**Q:** Cut Bedrock cost when long shared system prompt repeats?
**A:** Bedrock Prompt Caching.

**Q:** Run a foundation model inside your own VPC?
**A:** SageMaker JumpStart in a VPC OR Bedrock with VPC endpoints (PrivateLink).

**Q:** Enterprise chat over Confluence + SharePoint + ServiceNow?
**A:** Amazon Q Business.

**Q:** Code-assist in IDE (replaces CodeWhisperer)?
**A:** Amazon Q Developer.

**Q:** NL Q&A on BI data?
**A:** Amazon Q in QuickSight.

---

## 🎯 SECTION 8: EVALUATION, TUNING & BIAS

**Q:** Metric for highly imbalanced classification?
**A:** PR-AUC (precision-recall), plus F1, recall, precision. NOT accuracy alone.

**Q:** What is the cardinal sin with the test set?
**A:** Reusing it to tune hyperparameters, contaminates the final metric.

**Q:** Cross-validation method for time series?
**A:** Walk-forward / expanding window. NEVER random K-fold.

**Q:** Cross-validation method for grouped records (per patient)?
**A:** Group K-fold.

**Q:** Default SageMaker HPO strategy?
**A:** Bayesian optimisation.

**Q:** HPO strategy that prunes losing trials early for DL?
**A:** Hyperband.

**Q:** What does SHAP do?
**A:** Per-prediction feature attribution using Shapley values. Local + global explanations.

**Q:** SageMaker tool for per-prediction explanations to regulators?
**A:** SageMaker Clarify (SHAP).

**Q:** Post-training bias metric, Disparate Impact?
**A:** Ratio of positive prediction rates across facets, measures discrimination.

**Q:** Quantile loss is used by which AWS services?
**A:** DeepAR, Amazon Forecast, for probabilistic quantile forecasts (p10/p50/p90).

**Q:** LLM summarisation metric?
**A:** ROUGE (and BERTScore for semantic).

**Q:** LLM translation metric?
**A:** BLEU (and BERTScore / METEOR).

**Q:** Standard model documentation for compliance?
**A:** SageMaker Model Card (in Model Registry).

**Q:** Recall vs Precision, which when FN is costly?
**A:** Recall (or F-beta with β>1). Lower the decision threshold too.

---

## 🚀 SECTION 9: MLOPS & DEPLOYMENT

**Q:** ML-native orchestrator on AWS?
**A:** SageMaker Pipelines (integrates with Registry, Quality steps, ConditionStep).

**Q:** Endpoint mode for sparse traffic, pay-per-use, scale to 0?
**A:** Serverless inference.

**Q:** Endpoint mode for large payloads (≤1 GB) and long jobs (≤1 h)?
**A:** Asynchronous inference.

**Q:** Endpoint mode for offline scoring of large dataset?
**A:** Batch transform.

**Q:** Pattern for hundreds of small models with sparse traffic each?
**A:** Multi-Model Endpoint (MME).

**Q:** Test new model on real traffic with no user impact?
**A:** Shadow variant.

**Q:** Auto-rollback on endpoint update if errors spike?
**A:** Blue/Green deployment with CloudWatch alarm rollback.

**Q:** A/B test two models on weighted traffic?
**A:** Production variants on one endpoint with `InitialVariantWeight`.

**Q:** Model Monitor's four types?
**A:** Data Quality, Model Quality, Bias Drift, Feature Attribution Drift.

**Q:** Detect input feature distribution shift in production?
**A:** Data Quality monitor.

**Q:** Detect SHAP attribution drift in production?
**A:** Feature Attribution Drift monitor.

**Q:** Retrain-on-drift chain?
**A:** Model Monitor → CloudWatch alarm → EventBridge → Lambda → SageMaker Pipeline.

**Q:** Bootstrap templated MLOps repo?
**A:** SageMaker Projects (Service Catalog template).

**Q:** Cost-optimal instance type picker?
**A:** SageMaker Inference Recommender.

**Q:** Distributed trace across Lambda + endpoint + DynamoDB?
**A:** AWS X-Ray.

**Q:** Require human approval before deploying a new model?
**A:** Model Registry approval workflow (`ApprovalStatus = Approved`).

---

## 🔐 SECTION 10: SECURITY, COST & PRODUCTION

**Q:** Restrict SageMaker job to one S3 prefix?
**A:** Custom IAM execution role with `s3:GetObject` on `bucket/prefix/*` + bucket policy as defence in depth.

**Q:** Block ALL outbound network from training container?
**A:** `enable_network_isolation=True` + private subnets with no NAT (use VPC endpoints).

**Q:** Encrypt S3 with audit log per request?
**A:** SSE-KMS with customer-managed KMS key (CMK).

**Q:** Encrypt distributed training inter-node traffic?
**A:** `enable_inter_container_traffic_encryption=True`.

**Q:** Free VPC endpoints?
**A:** Gateway endpoints for S3 and DynamoDB.

**Q:** Paid VPC endpoints (per ENI hour + GB)?
**A:** Interface (PrivateLink) endpoints for SageMaker API/Runtime, ECR API/DKR, KMS, STS, CloudWatch, Bedrock, etc.

**Q:** Expose SageMaker endpoint to on-prem only (no internet)?
**A:** PrivateLink Interface VPC Endpoint + Direct Connect.

**Q:** Compute Savings Plan vs Reserved Instance, flexibility?
**A:** Compute Savings Plan = flexible across families/sizes/Lambda/Fargate. RI = locked to family.

**Q:** Up-to-90%-off cost lever for training?
**A:** Spot training (`use_spot_instances=True`) + S3 checkpointing.

**Q:** Cost-optimal LLM inference chip + toolkit?
**A:** Inferentia2 + AWS Neuron SDK.

**Q:** Stop idle Studio cost?
**A:** Lifecycle Configuration with idle auto-shutdown.

**Q:** Continuous compliance check on endpoint encryption?
**A:** AWS Config rule (managed or custom).

**Q:** Distributed trace for inference latency root cause?
**A:** AWS X-Ray.

**Q:** Reduce Bedrock cost on shared long system prompt?
**A:** Bedrock Prompt Caching.

**Q:** Reduce Bedrock cost on async offline workloads?
**A:** Bedrock Batch Inference (~50% off).

**Q:** Sustainability moves with biggest impact?
**A:** Inferentia2 + Graviton + right-sizing + Multi-Model Endpoints + managed services + distillation.

---

## 📊 SECTION 11: METRICS QUICK RECALL

**Q:** Formula for F1?
**A:** 2 · Precision · Recall / (Precision + Recall), harmonic mean.

**Q:** Formula for Precision?
**A:** TP / (TP + FP).

**Q:** Formula for Recall?
**A:** TP / (TP + FN).

**Q:** ROC AUC vs PR AUC, when each?
**A:** ROC AUC on balanced classes. PR AUC on imbalanced classes (positive class rare).

**Q:** When MAE preferred over RMSE?
**A:** Outlier-robust scenario; equal weight to all errors.

**Q:** Quantile loss outputs?
**A:** Probabilistic quantile forecasts (p10 / p50 / p90).

**Q:** MAPE limitation?
**A:** Blows up when target values are near zero.

**Q:** R² interpretation?
**A:** Fraction of variance in target explained by the model. 1.0 = perfect; 0.0 = no better than mean predictor.

---

## 🎓 SECTION 12: SAGEMAKER SDK QUICK RECALL

**Q:** SageMaker Python SDK 5-step pattern?
**A:** role → estimator → inputs → fit → deploy.

**Q:** Enable Spot training in the SDK?
**A:** `use_spot_instances=True, max_wait=86400, checkpoint_s3_uri="s3://bucket/checkpoints/"`.

**Q:** Enable SMDDP in the SDK?
**A:** `distribution={"smdistributed":{"dataparallel":{"enabled":True}}}` on the Estimator.

**Q:** Enable SMMP in the SDK?
**A:** `distribution={"smdistributed":{"modelparallel":{"enabled":True, ...}}}` with config.

**Q:** SageMaker HPO parameter types?
**A:** `ContinuousParameter`, `IntegerParameter`, `CategoricalParameter`.

**Q:** Pipelines step types?
**A:** Processing, Training, Tuning, CreateModel, RegisterModel, Lambda, Condition, Fail, ClarifyCheck (Quality/Bias/Explainability), EMR, Callback, AutoML.

**Q:** Where does a training job write the model artifact?
**A:** `/opt/ml/model` inside the container → SageMaker tars to `model.tar.gz` in S3.

**Q:** Where are hyperparameters available inside the container?
**A:** `/opt/ml/input/config/hyperparameters.json`.

**Q:** Where are input data channels mounted?
**A:** `/opt/ml/input/data/<channel-name>/`.

---

## 🏷️ STUDY TIPS

1. **Build muscle memory on the 17 built-ins**, name each and one phrase about when to use it.
2. **Drill the four inference modes**, match each to a scenario.
3. **Memorise the Capital One reference architecture** (Kinesis → S3 → Feature Store → SageMaker MME + Clarify + Pipelines).
4. **Memorise the standard 2026 RAG architecture** (Bedrock KB + OpenSearch Serverless + Claude/Llama + Guardrails + Agent).
5. **Practise reading 6-line scenarios** for keywords ("imbalanced", "low operational overhead", "minimum operational effort", "explain to regulator", "sparse traffic", "VPC isolation").
6. **Skim each Cheat-Sheet daily** in the last 5 days before exam, they distil 95% of the testable material.

## 📅 BEFORE THE EXAM

- 🛌 Sleep 8 hours
- ☕ Light breakfast, hydrate
- 🪪 Two forms of ID (in-centre) / clear room + good lighting (online)
- ⏰ Arrive / log in 30 min early
- 🧘 Trust your prep. Identify the keyword in each question. Answer.
