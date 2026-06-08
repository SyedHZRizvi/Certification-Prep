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
  var STORAGE_KEY = 'prompt-engineering-cards';
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

# 🃏 Prompt Engineering Specialist Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Drill daily until you ace the Final Mock. Aim for 10–15 min/day for at least 2 weeks before your declared "done" date.

---

## 🧠 SECTION 1: FOUNDATIONS

**Q:** What is a token in an LLM context?
**A:** The sub-word unit produced by a tokenizer; ~4 characters / 0.75 words for English BPE. The atomic unit the model processes and the unit of billing.

**Q:** Rough English token math: 1 page double-spaced ≈ ? tokens.
**A:** ~600–800 tokens (≈ 500–600 words).

**Q:** Why is `"antidisestablishmentarianism"` not 1 token?
**A:** BPE splits it into 5–6 sub-word pieces. Long uncommon words are tokenized into more pieces.

**Q:** What are the 4 major LLM families to know in 2026?
**A:** Claude (Anthropic), GPT (OpenAI), Gemini (Google), Llama (Meta), plus Mistral / DeepSeek / Qwen as open-source contenders.

**Q:** What are the 3 chat roles and which has highest authority?
**A:** system / user / assistant. **system is highest**, the model is trained (instruction hierarchy) to prefer system over conflicting user instructions.

**Q:** OpenAI's instruction hierarchy (Wallace et al. 2024) ordered priority?
**A:** system > developer > user > tool.

**Q:** What does temperature control?
**A:** Logit scaling. 0 = greedy/deterministic-ish. 0.7 = balanced. >1 = high randomness, often gibberish.

**Q:** What is top-p (nucleus sampling)?
**A:** Sample only from the smallest token set whose cumulative probability ≥ p. Defaults around 0.9–0.95.

**Q:** When should you use temperature=0?
**A:** Extractive/transactional tasks: classification, JSON extraction, code completion, anything where you want the same answer twice.

**Q:** Output tokens cost what multiple of input tokens (typical)?
**A:** 3–5× more expensive on Claude/GPT/Gemini flagships.

**Q:** What does TTFT stand for?
**A:** Time-To-First-Token, the streaming-latency metric that matters most for chat UX. Aim <500ms for "responsive."

**Q:** What is the "Lost in the Middle" finding (Liu et al. 2023)?
**A:** Information placed in the middle of a long context is recalled significantly worse than at the start or end. Defense: put critical instructions at edges.

**Q:** How are "thinking tokens" billed on o1/o3/Claude Extended Thinking?
**A:** As output tokens, often 5–50× more expensive than non-reasoning siblings per visible answer.

**Q:** Where does Anthropic put the `system` parameter?
**A:** As a top-level field on the Messages API, NOT inside `messages[]` (OpenAI's pattern).

**Q:** What is BAA in the LLM context?
**A:** Business Associate Agreement, HIPAA-compliant vendor contract. Anthropic Enterprise, Azure OpenAI, Vertex Gemini are BAA-eligible; public Groq is not.

---

## 📚 SECTION 2: FEW-SHOT & IN-CONTEXT LEARNING

**Q:** What is in-context learning (ICL)?
**A:** The phenomenon where a sufficiently large LLM can perform a new task from a few examples in its prompt, with no parameter updates.

**Q:** Define zero-shot, one-shot, few-shot, many-shot.
**A:** 0 / 1 / 2–32 / 100+ examples in the prompt.

**Q:** Which paper popularized in-context learning at scale?
**A:** Brown et al. 2020, *Language Models are Few-Shot Learners* (the GPT-3 paper). NeurIPS 2020.

**Q:** How much can few-shot example ORDER shift accuracy (Lu et al. 2022)?
**A:** Up to 30+ percentage points. Defense: balance label counts and randomize order.

**Q:** What did Min et al. 2022 surprisingly show about few-shot?
**A:** Even randomly-assigned labels in the examples still help, format/pattern learning matters in addition to content learning.

**Q:** What is kNN few-shot?
**A:** At runtime, embed the new input, retrieve the k most-similar historical examples from a vector index, build the prompt with those examples. Best for production with a labeled corpus.

**Q:** Which formatting convention does Anthropic prefer for few-shot in Claude prompts?
**A:** XML tags, `<example><input>...</input><output>...</output></example>`.

**Q:** What does "majority label bias" mean and how do you defend?
**A:** If 4 of 5 examples are POSITIVE, the model over-predicts POSITIVE. Defense: balance label counts across examples.

**Q:** What is the "anchor and elaborate" example-selection strategy?
**A:** First example is a high-confidence typical case (anchor); subsequent examples show edge cases (elaborate). Stabilizes the model's frame before testing boundaries.

**Q:** When is many-shot (100+ examples) practical?
**A:** With 200K+ context models (Claude 4.7, Gemini 2.5, GPT-5) AND aggressive prompt caching to control cost.

**Q:** What 2024 paper documented many-shot ICL?
**A:** Agarwal et al. 2024 (DeepMind), *Many-Shot In-Context Learning*.

**Q:** Why might adding one "reasoning:" sentence per few-shot example help?
**A:** It often improves accuracy 5–15 points, bridges few-shot to chain-of-thought.

---

## 🧮 SECTION 3: CHAIN-OF-THOUGHT & REASONING

**Q:** Which paper defined chain-of-thought (CoT) prompting?
**A:** Wei et al. 2022, *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*. NeurIPS 2022.

**Q:** What was the famous lift on GSM8K from standard prompting to CoT on PaLM 540B?
**A:** From ~18% to ~57%, a +39 percentage point lift.

**Q:** What is the zero-shot CoT trigger phrase (Kojima et al. 2022)?
**A:** "Let's think step by step."

**Q:** What is self-consistency (Wang et al. 2022)?
**A:** Sample N reasoning paths with non-zero temperature; extract the final answer from each; take the majority vote.

**Q:** Self-consistency at N=40 multiplies cost by approximately?
**A:** 40×. Often N=5 captures most of the lift at much lower cost, eval to find your sweet spot.

**Q:** What does ReAct stand for and what's the loop?
**A:** Reason + Act. Loop: Thought → Action (tool call) → Observation → repeat. Yao et al. 2022.

**Q:** What's Tree-of-Thought best suited for?
**A:** Search-like problems, puzzles, planning, multi-step optimization (e.g., Game of 24, crosswords). Yao et al. 2023.

**Q:** When does CoT NOT help?
**A:** On trivial tasks (sentiment, single-fact lookup, translation), it just adds tokens and latency with no quality gain.

**Q:** What's the "router test" for whether to use a reasoning model?
**A:** "Would a smart human need to deliberate?" If yes → reasoning model. If no → standard model + maybe CoT.

**Q:** Name the four major reasoning-model families in 2026.
**A:** OpenAI o1/o3/o4, Claude 4.7 Extended Thinking, Gemini 2.5 Pro Deep Think, DeepSeek R1 (open-weights).

**Q:** What is Claude Extended Thinking's `budget_tokens`?
**A:** A cap on how many thinking tokens the model is allowed to generate before producing the visible answer.

**Q:** What was the lift on AIME 2024 from GPT-4o to OpenAI o1?
**A:** From ~13.4% to ~56.7%, approximately +43 percentage points.

**Q:** What is DeepSeek R1's significance?
**A:** Released January 2025; first open-weights reasoning model competitive with o1. Reproducible, downloadable, visible thinking traces.

---

## 📦 SECTION 4: STRUCTURED OUTPUTS & JSON

**Q:** What are L0, L1, L2 in structured output guarantees?
**A:** L0 = prompt-only JSON (no guarantee). L1 = JSON Mode (valid JSON guaranteed). L2 = schema-enforced (your JSON Schema guaranteed).

**Q:** How does Anthropic achieve schema-enforced structured outputs?
**A:** Via forced tool use: define a tool with a JSON Schema and call with `tool_choice={"type": "tool", "name": "<your_tool>"}`.

**Q:** What is OpenAI's structured-output activation?
**A:** `response_format=PydanticModel` (beta SDK) or `response_format={"type": "json_schema", ...}` raw.

**Q:** What does Gemini use for schema-enforced JSON?
**A:** `config={"response_mime_type": "application/json", "response_schema": <PydanticModel-or-JSON-Schema>}`.

**Q:** What is the `instructor` library?
**A:** The popular cross-provider Pydantic wrapper around LLM clients. Provides automatic retries on validation failure and a uniform interface.

**Q:** What does `Field(ge=1, le=5)` in Pydantic do?
**A:** Constrains the field to integers between 1 and 5 inclusive. Enforced both at schema-time and validation-time.

**Q:** Why use `Literal["a", "b"]` or `Enum` for categorical fields?
**A:** The model is constrained, it CANNOT output any value other than the listed ones. Hallucinated 6th values become impossible.

**Q:** What does `instructor`'s `max_retries=3` do?
**A:** When a Pydantic validator raises a ValueError, instructor catches it, appends the error to a follow-up prompt, and re-runs, closed-loop self-correction.

**Q:** What's a special requirement of OpenAI's JSON Mode?
**A:** The string "json" must appear somewhere in the prompt (system or user). The API errors otherwise.

**Q:** Why put `reasoning` BEFORE `answer` in a Pydantic schema?
**A:** Pydantic preserves field order and structured outputs respect it. The model generates `reasoning` first, conditioning the answer on its own reasoning (CoT inside the schema).

**Q:** What are Outlines and Guidance?
**A:** Open-source constrained-generation libraries that work on open-source models (Llama, Mistral, etc.). Outlines is from dottxt.ai; Guidance is from Microsoft.

**Q:** Why are tool descriptions a core part of the prompt?
**A:** The model reads `description` (and per-arg descriptions) to decide which tool to call and how. Writing them is prompt engineering.

---

## 🖼️ SECTION 5: MULTI-MODAL PROMPTING

**Q:** Which 2026 model family has the best native VIDEO support?
**A:** Gemini 2.5 Pro / Flash, accepts video files directly (up to ~1 hour).

**Q:** Roughly how many tokens does a high-detail 1024×1024 image cost?
**A:** Approximately 1,500–2,500 tokens, about 2 pages of text equivalent.

**Q:** What is OpenAI's "tile" in vision token billing?
**A:** A 512×512 region the image is split into. Cost formula approximately `170 × tiles + 85` for high-detail mode.

**Q:** Is EXIF rotation metadata reliably honored by vision APIs?
**A:** Often NOT. Pre-rotate the image to upright before sending. One of the most common gotchas.

**Q:** What is "confabulation" in vision LLMs?
**A:** Confidently wrong output, especially on charts, the model pattern-matches the chart style and invents plausible numbers.

**Q:** Two main defenses against chart confabulation?
**A:** (1) Ask for data points individually; (2) run self-consistency (N samples; check agreement).

**Q:** Should you label multi-image prompts?
**A:** Yes, explicitly: "Image 1: before, Image 2: after". Models conflate without labels.

**Q:** When does dedicated OCR (Textract / Document AI) beat vision LLMs?
**A:** Extremely dense legal print, Arabic calligraphy, vertical CJK, heavily-degraded thermal-printed receipts.

**Q:** What is Whisper?
**A:** OpenAI's open-source transcription model, audio-to-text only. Use chat models for understanding.

**Q:** When does direct audio (GPT-5 audio / Gemini) beat the Whisper-then-chat two-step?
**A:** Lower latency, fewer round trips. But you lose the explicit text artifact useful for storage, re-processing, or auditing.

**Q:** Is image text (e.g., a sticky note in a photo) a prompt-injection vector?
**A:** YES. Treat all image text as untrusted input. Covered in Module 7.

---

## 📊 SECTION 6: EVALUATION & A/B TESTING

**Q:** What are the 3 pillars of LLM evaluation?
**A:** Programmatic (exact match, regex, schema) / LLM-as-judge / human review. No single one is sufficient.

**Q:** What is a "golden set"?
**A:** A curated set of input + expected-output pairs used to measure prompt quality. The single most important artifact a prompt engineer owns.

**Q:** Recommended MVP size for a golden set?
**A:** 70–150 examples spanning easy, edge, hard, and adversarial cases.

**Q:** What is G-Eval (Liu et al. 2023)?
**A:** LLM-as-judge with two refinements: chain-of-thought scoring (judge explains before rating) + averaging across N judge samples for stability.

**Q:** Name 4 known biases of LLM-as-judge.
**A:** Position bias (first wins), verbosity bias (longer wins), self-preference (same family wins), sycophancy (agrees with framing).

**Q:** How do you defeat self-preference bias?
**A:** Use a DIFFERENT model family for the judge than the model being judged. GPT judging Claude, etc.

**Q:** What is F1 score?
**A:** Harmonic mean of precision and recall: 2·P·R / (P+R). Useful single number when classes are imbalanced.

**Q:** What does RAGAS measure?
**A:** RAG-specific metrics: faithfulness (no hallucination beyond context), answer relevance, context precision, context recall.

**Q:** Cohen's kappa above ~0.7 means what?
**A:** Substantial inter-annotator agreement between 2 human raters, the task rubric is well-defined.

**Q:** What is "pre-registration" of a success metric?
**A:** Defining the metric and decision rule BEFORE looking at the data, prevents p-hacking and post-hoc rationalization.

**Q:** Sample-size rule of thumb to detect a 5pt accuracy difference at 80% power?
**A:** ~1,500 samples per arm. Smaller effects require quadratically more samples.

**Q:** Name 4 prominent eval frameworks.
**A:** Promptfoo (YAML A/B), DeepEval (pytest-style), RAGAS (RAG-specific), LangSmith / Braintrust / Phoenix / Helicone / Langfuse (hosted or OSS observability+evals).

---

## 🛡️ SECTION 7: ADVERSARIAL DEFENSE

**Q:** What are the 3 categories of prompt injection?
**A:** Direct (in user message), indirect (via document/tool result), multi-modal (via image/audio/video).

**Q:** Which paper is the seminal indirect-prompt-injection work?
**A:** Greshake et al. 2023, *Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection*.

**Q:** What does "DAN" stand for in jailbreak history?
**A:** "Do Anything Now", the famous early role-play jailbreak persona.

**Q:** Name 5 jailbreak families.
**A:** Persona role-play (DAN), encoding (base64/ROT13), multi-turn priming (Crescendo), many-shot, low-resource language translation, authority impersonation, token smuggling (Unicode lookalikes).

**Q:** What's the cardinal rule for tool RESULTS?
**A:** Tool outputs are ALWAYS untrusted input, NEVER instructions. Wrap in explicit delimiters; treat as user-input grade.

**Q:** What is Anthropic's Constitutional AI (Bai et al. 2022)?
**A:** A safety-training paradigm where the model self-critiques outputs against a constitution (list of principles); revisions become training data.

**Q:** What did OpenAI's Wallace et al. 2024 formalize?
**A:** *The Instruction Hierarchy*, training to make models prefer system > developer > user > tool when instructions conflict.

**Q:** What happened with Microsoft Tay in 2016?
**A:** Twitter chatbot launched without a runtime system prompt; manipulated within hours into producing inflammatory content via "repeat after me" + dataset poisoning. Pulled at hour 24.

**Q:** What was the Bing "Sydney" prompt leak in February 2023?
**A:** Users extracted the full GPT-4-based Bing chat system prompt within 72 hours; engineering lesson: assume system prompts will leak.

**Q:** What was the Air Canada chatbot ruling (Feb 2024)?
**A:** A Canadian tribunal held Air Canada liable for refund promises a chatbot made up. Legal precedent for chatbot output liability.

**Q:** What happened with DeepSeek R1 in January 2025?
**A:** Within 48 hours of release, security researchers demonstrated role-play, encoding, and multi-turn jailbreaks producing harmful content. Triggered global tech-news coverage and regulatory inquiries.

**Q:** What is "defense in depth" for LLM apps?
**A:** Multiple independent defense layers (system prompt + input/output filters + sandboxing + judge + red-team) so no single bypass fails everything.

**Q:** Name 3 public adversarial benchmarks.
**A:** HarmBench (CAIS), JailbreakBench, AdvBench. Plus MITRE ATLAS framework and OWASP LLM Top 10.

**Q:** Why use a different model family as the safety-judge LLM?
**A:** Self-preference bias, a family judging itself can be lenient on its own failure modes.

---

## 🚀 SECTION 8: PRODUCTION AT SCALE

**Q:** Two distinct cache types every production LLM system should consider?
**A:** (1) Prompt cache (provider-side, exact-prefix); (2) Semantic cache (yours, embedding-similarity).

**Q:** How do you enable Anthropic prompt caching?
**A:** Tag sections with `cache_control: {"type": "ephemeral"}` (5-min TTL) or `"persistent"` (1hr+). Cached portion bills at ~10% of normal input price.

**Q:** Is OpenAI prompt caching manual or automatic?
**A:** Automatic for prompts ≥1024 tokens. Cached portion gets ~50% discount.

**Q:** Gemini context caching pricing?
**A:** Pay for storage; ~75% discount on cached reads. Explicit cache objects must be created/managed.

**Q:** What is GPTCache?
**A:** The popular open-source semantic-cache library (Zilliz). Pair with a vector DB for application-side response caching.

**Q:** Risk of semantic cache at a 0.95 similarity threshold?
**A:** Serving wrong-but-similar responses (e.g., "transfer to checking" vs "transfer to savings"). Tune threshold per domain; consider freshness allowlists.

**Q:** What does LiteLLM do?
**A:** Normalizes ~100 LLM providers into the OpenAI message format. Adds fallbacks, router, cost tracking, spend caps, retries.

**Q:** Three alternatives to LiteLLM?
**A:** OpenRouter (hosted gateway), Portkey (gateway with caching), AWS Bedrock (first-party multi-provider).

**Q:** Batch APIs (OpenAI, Anthropic), what's the trade-off?
**A:** ~50% discount + relaxed rate limits in exchange for ~24-hour turnaround. Excellent for non-realtime workloads.

**Q:** Sensible TTFT target for a "responsive" chat product?
**A:** Less than 500 milliseconds.

**Q:** Why pin specific model snapshots instead of "latest"?
**A:** Vendor regressions on a new snapshot can silently break your prompts. Pinning forces explicit eval before upgrade.

**Q:** What does OpenTelemetry GenAI semconv standardize?
**A:** Vendor-neutral telemetry conventions for LLM apps, traces, spans, attributes (model, tokens, cost, etc.). Anything that emits OTLP plays well with anything that consumes it.

**Q:** Three Langfuse-class observability platforms?
**A:** Langfuse (OSS), Helicone (proxy + cache), LangSmith (LangChain stack), Braintrust, Phoenix (Arize, OSS).

**Q:** What does a shadow-traffic deploy do?
**A:** Sends real production input through a candidate prompt without serving the output to the user, lets you compare quality offline before turning the canary on.

**Q:** Per-customer spend caps defend against what?
**A:** Buggy customer integrations (e.g., infinite-retry loops) that can burn $50K+ overnight. Daily cap + Slack alert at 80% → block at 100%.

**Q:** Sketch a CI pipeline for prompts.
**A:** PR → regression suite (Module 6) → safety eval (Module 7) → cost projection → block on regressions → shadow traffic → canary 5%→25%→100% → auto-rollback on degradation.

**Q:** Theo's $74K-bill case study fix in one sentence?
**A:** Prompt caching + semantic cache + tier routing (Haiku/GPT-5/o3 by complexity) + LiteLLM fallbacks + Langfuse observability + per-customer spend caps + CI cost projection, November bill dropped to $4,200 for the same traffic.

---

## 📜 SECTION 9: KEY PAPERS & ACRONYMS

**Q:** Brown et al. 2020 = ?
**A:** GPT-3 paper, *Language Models are Few-Shot Learners*. Defined ICL at scale.

**Q:** Wei et al. 2022 = ?
**A:** Chain-of-Thought paper, *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*.

**Q:** Kojima et al. 2022 = ?
**A:** Zero-shot CoT, *Large Language Models are Zero-Shot Reasoners*. The "Let's think step by step" finding.

**Q:** Wang et al. 2022 = ?
**A:** Self-consistency, *Self-Consistency Improves Chain of Thought Reasoning in Language Models*.

**Q:** Yao et al. 2022 = ?
**A:** ReAct, *Synergizing Reasoning and Acting in Language Models*.

**Q:** Yao et al. 2023 = ?
**A:** Tree-of-Thought, *Deliberate Problem Solving with Large Language Models*.

**Q:** Bai et al. 2022 = ?
**A:** Constitutional AI, *Harmlessness from AI Feedback* (Anthropic).

**Q:** Liu et al. 2023 (NeurIPS) = ?
**A:** *Lost in the Middle*, middle-of-context recall is worst.

**Q:** Lu et al. 2022 = ?
**A:** *Fantastically Ordered Prompts and Where to Find Them*, example order matters 30+ points.

**Q:** Min et al. 2022 = ?
**A:** *Rethinking the Role of Demonstrations*, random labels still help; format learning matters.

**Q:** Agarwal et al. 2024 = ?
**A:** *Many-Shot In-Context Learning* (DeepMind).

**Q:** Wallace et al. 2024 = ?
**A:** *The Instruction Hierarchy* (OpenAI), system > developer > user > tool.

**Q:** Greshake et al. 2023 = ?
**A:** Indirect prompt injection paper, *Not what you've signed up for*.

**Q:** Perez & Ribeiro 2022 = ?
**A:** *Ignore Previous Prompt: Attack Techniques For Language Models*, direct prompt injection foundational paper.

**Q:** What does RLHF stand for?
**A:** Reinforcement Learning from Human Feedback.

**Q:** What does DPO stand for?
**A:** Direct Preference Optimization, simpler alternative to PPO-based RLHF.

**Q:** What does TPM / RPM stand for?
**A:** Tokens-Per-Minute / Requests-Per-Minute, common rate-limit units.

**Q:** What does SLO stand for?
**A:** Service Level Objective. Common targets: 99.5% uptime, P95 latency <2s, LLM-judge quality ≥4.2/5, safety violations <0.1%.

**Q:** What does GSM8K stand for?
**A:** Grade School Math 8K problems, the canonical math reasoning benchmark.

**Q:** What does MMLU stand for?
**A:** Massive Multitask Language Understanding, multi-domain benchmark, often used as a general capability scorecard.

**Q:** What is HELM?
**A:** Holistic Evaluation of Language Models, Stanford CRFM's academic-grade benchmark suite.

**Q:** What is OWASP LLM Top 10?
**A:** OWASP's framework of the top LLM-specific security risks (prompt injection, insecure output handling, training data poisoning, excessive agency, etc.).

**Q:** What is MITRE ATLAS?
**A:** Adversarial Threat Landscape for AI Systems, MITRE's enterprise-grade adversarial-ML threat matrix.

---

## STUDY TIPS

1. Drill 15 minutes daily for 14 days before declaring done.
2. Filter by section to focus your weakest areas.
3. After the Final Mock, add a card for EVERY question you missed.
4. Pair flashcards with the cheat sheets, recite the cheat sheet bullets after each card.
5. Teach a friend: if you can't explain it in 30 seconds, you don't know it yet.

## BEFORE THE EXAM

- Run through the deck once more, sections in random order
- Re-read the 8 cheat sheets in one sitting
- Sleep at least 7 hours the night before
- Bring a notebook for capstone portfolio sketches during the Final Mock review

---

🎉 **You're ready.** Now ship the capstone, 12 prompts, version-controlled, eval-tied, multi-provider, jailbreak-tested. Welcome to the field.
