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
  var STORAGE_KEY = 'claude-architect-cards';
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

# 🃏 Claude Architect Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Drill 10-15 minutes per day for at least 2 weeks before the assessment. Use the filter dropdown to focus on a single module at a time.

---

## 🧬 SECTION 1: FOUNDATIONS & CONSTITUTIONAL AI

**Q:** What year was Anthropic founded?
**A:** September 2021, in San Francisco.

**Q:** What is the corporate structure of Anthropic?
**A:** Public Benefit Corporation (PBC), legally required to consider broader societal impact.

**Q:** Who are the two most prominent Anthropic founders?
**A:** Dario Amodei (CEO) and Daniela Amodei (President). They were senior OpenAI researchers before founding Anthropic.

**Q:** What is the founding paper of Constitutional AI?
**A:** Bai et al. (2022), "Constitutional AI: Harmlessness from AI Feedback."

**Q:** What does CAI stand for?
**A:** Constitutional AI, Anthropic's training methodology using a written constitution + AI critic.

**Q:** What does RLAIF stand for?
**A:** Reinforcement Learning from AI Feedback, the RL phase of Constitutional AI.

**Q:** What does RLHF stand for?
**A:** Reinforcement Learning from Human Feedback, OpenAI's pioneered RL training methodology.

**Q:** What are the three Claude model tiers?
**A:** Haiku (small, fast, cheap), Sonnet (default workhorse), Opus (smartest, slowest, most expensive).

**Q:** When did the Haiku/Sonnet/Opus naming convention begin?
**A:** With the Claude 3 family, released March 2024.

**Q:** What is Claude Sonnet's standard context window?
**A:** 200K tokens (with a 1M-token beta header for early access).

**Q:** What is the Anthropic Responsible Scaling Policy (RSP)?
**A:** Anthropic's published commitment to safety capability thresholds before deploying more capable models. Analogous to BSL in biology.

**Q:** What does ASL stand for and what is it analogous to?
**A:** AI Safety Level. Analogous to BSL (BioSafety Levels) from biological research.

**Q:** What are Anthropic's major strategic investors?
**A:** Amazon ($4B+) and Google. Also Spark Capital, Lightspeed, Menlo Ventures.

**Q:** What three places can you deploy Claude in production?
**A:** Anthropic direct API, AWS Bedrock, GCP Vertex AI.

**Q:** Which deployment gets latest features first?
**A:** Anthropic direct API; Bedrock and Vertex have a slight feature lag.

**Q:** What is the CFO-defensible one-liner for picking Claude over GPT in a regulated industry?
**A:** "Claude is trained using Constitutional AI, an auditable safety methodology, which provides a more defensible safety story for regulated workloads."

---

## ✍️ SECTION 2: PROMPT ENGINEERING WITH CLAUDE

**Q:** What are the four conceptual parts of a Claude prompt?
**A:** System prompt, user message(s), optional assistant prefill, optional stop sequences.

**Q:** Where should role + format + constraints go in a Claude prompt?
**A:** In the system prompt, stable, authoritative, cacheable.

**Q:** What is the preferred delimiter type for inputs in a Claude prompt?
**A:** XML tags (e.g., `<document>`, `<examples>`, `<context>`). Claude was trained to attend to XML strongly.

**Q:** What is "prefill" in Claude prompting?
**A:** Setting the first characters of Claude's response by passing an assistant-role message as the last item; forces output structure.

**Q:** How do you force valid JSON-only output reliably?
**A:** Prefill the assistant role with `{`. The model continues from there.

**Q:** Do stop sequences appear in Claude's output?
**A:** No. Generation terminates BEFORE the stop sequence is emitted; the sequence itself is not in the output.

**Q:** What does the convention `<thinking>` block do?
**A:** Provides a scratchpad for the model to reason in before its final answer. Reliably improves multi-step accuracy.

**Q:** Where should the user's question go in a long-context prompt?
**A:** At the END, after the documents. Combats recency bias.

**Q:** Are few-shot examples still useful with Claude 4?
**A:** Yes. They remain one of the highest-impact accuracy techniques on structured tasks.

**Q:** Wrap few-shot examples in which tags?
**A:** `<examples>` (container) with `<example>` per example, each containing `<input>` and `<output>`.

**Q:** How many few-shot examples is the sweet spot?
**A:** 3–5. Diminishing returns past 5; cost/latency grow linearly.

**Q:** What is the Anthropic Workbench?
**A:** Web UI at console.anthropic.com for prompt iteration and testing.

**Q:** Is there a `response_format` flag on the Anthropic API?
**A:** No. That's an OpenAI-only parameter. Claude relies on prompt structure + prefill + schema description (or forced tool use).

**Q:** What does "cache attaches to the prefix" mean?
**A:** Prompt caching reuses the prefix ending at a `cache_control` marker. Stable content must come first.

---

## 🔌 SECTION 3: CLAUDE API & SDK

**Q:** What is the single endpoint for Claude's chat-style API?
**A:** `POST /v1/messages`.

**Q:** What is the required HTTP header for API version pinning?
**A:** `anthropic-version: 2023-06-01` (or current canonical pin).

**Q:** What header opts you into preview features like prompt caching, computer use, or MCP beta?
**A:** `anthropic-beta`.

**Q:** What is the SDK default retry count?
**A:** 2 retries with exponential backoff. Configurable via `max_retries=N`.

**Q:** What are the four `stop_reason` values?
**A:** `end_turn`, `max_tokens`, `stop_sequence`, `tool_use`.

**Q:** What is prompt caching's cost reduction on cached input tokens?
**A:** Approximately 90%, cached input billed at roughly 10% of standard input price.

**Q:** What is the typical TTL of Anthropic ephemeral prompt caching?
**A:** Approximately 5 minutes. The cache renews on each hit.

**Q:** What is the minimum cacheable content size for most Claude models?
**A:** Approximately 1024 tokens. Marking smaller content does nothing.

**Q:** What discount does the Batch API offer?
**A:** Approximately 50% on both input AND output tokens. Hours SLA.

**Q:** What is the SDK helper for token counting without inference?
**A:** `client.messages.count_tokens(...)`.

**Q:** What does streaming primarily improve?
**A:** Time-to-first-token (TTFT), perceived latency. Does NOT reduce total tokens.

**Q:** What does HTTP 429 mean from Anthropic?
**A:** Rate limit exceeded for your tier. Honor `retry-after` header.

**Q:** What does HTTP 529 mean from Anthropic?
**A:** Service overloaded, Anthropic's overall capacity issue. Back off significantly; consider failover.

**Q:** Name three retryable Anthropic error classes.
**A:** 429 RateLimitError, 5xx (InternalServerError/APIConnectionError/Timeout), 529 OverloadedError.

**Q:** What is the SDK client class for AWS Bedrock?
**A:** `AnthropicBedrock(aws_region=...)`.

**Q:** What is the SDK client class for GCP Vertex?
**A:** `AnthropicVertex(project_id=..., region=...)`.

**Q:** Why should you NEVER expose an Anthropic API key in browser code?
**A:** Anyone can extract it. Always proxy through your backend.

---

## 🔧 SECTION 4: TOOL USE & FUNCTION CALLING

**Q:** What three fields does a Claude tool definition have?
**A:** `name`, `description`, `input_schema` (JSON Schema).

**Q:** Which tool-definition field most influences Claude's decision-making?
**A:** `description`, it tells Claude when/why to use the tool.

**Q:** What `stop_reason` indicates Claude wants to invoke tools?
**A:** `tool_use`.

**Q:** In which role do you send tool results back to Claude?
**A:** `user` role, with `tool_result` content blocks.

**Q:** Is parallel tool use supported by Claude?
**A:** Yes, by default. Claude may return multiple `tool_use` blocks in a single response.

**Q:** How do you disable parallel tool use?
**A:** Set `tool_choice={"type":"auto","disable_parallel_tool_use":true}`.

**Q:** What are the four values of `tool_choice`?
**A:** `auto` (default), `any` (must use a tool), `tool` (must use a specific named tool), `none` (no tool).

**Q:** How do you force Claude to call a specific tool by name?
**A:** `tool_choice={"type":"tool","name":"X"}`.

**Q:** Most reliable way to enforce JSON-Schema-strict structured output?
**A:** Define a tool with the schema and force it via `tool_choice={"type":"tool","name":...}`.

**Q:** What capability is Anthropic computer use currently in?
**A:** Beta. Opt in via `betas=["computer-use-..."]` header.

**Q:** What are the three Anthropic-defined computer-use tool types?
**A:** `computer_YYYYMMDD`, `text_editor_YYYYMMDD`, `bash_YYYYMMDD`.

**Q:** Do tool definitions count toward input tokens?
**A:** Yes. They are serialized into the prompt and billed as input. Cache them when possible.

**Q:** Correct way for a tool to "return an error" to Claude?
**A:** Return a `tool_result` block with the error described in the `content` so the model can read and recover. NOT raise an exception.

**Q:** Sweet-spot tool-surface size for a single Claude call?
**A:** 3–10 tools. >20 tools, accuracy drops; consider hierarchical agents.

**Q:** Where should authorization for destructive tool actions live?
**A:** In YOUR tool-executor code, not in Claude's discretion. Plus `confirm=true` parameters and audit logging.

---

## 🔌 SECTION 5: MODEL CONTEXT PROTOCOL (MCP)

**Q:** When was MCP announced?
**A:** November 25, 2024, by Anthropic.

**Q:** What wire protocol does MCP use?
**A:** JSON-RPC 2.0.

**Q:** What are the three MCP primitives?
**A:** Tools, resources, prompts.

**Q:** What are the two most common MCP transports?
**A:** stdio (local subprocess) and HTTP+SSE (remote). Streamable HTTP is the newer unified network transport.

**Q:** Does Claude speak MCP natively?
**A:** No. The host application's MCP client translates MCP-served tools into Anthropic Messages API tool definitions.

**Q:** What is the MCP handshake exchange?
**A:** Client → `initialize` → Server response → Client → `initialized` (notification confirming).

**Q:** Two main MCP JSON-RPC method names for tools?
**A:** `tools/list` and `tools/call`.

**Q:** In claude-code, what prefix marks MCP-provided tools?
**A:** `mcp__<server>__<tool_name>`.

**Q:** Are MCP servers sandboxed by default?
**A:** No. Local stdio servers inherit the spawning user's permissions. Audit before installing.

**Q:** Where do you configure MCP servers for Claude Desktop (macOS)?
**A:** `~/Library/Application Support/Claude/claude_desktop_config.json`.

**Q:** Is MCP Anthropic-only?
**A:** No. It is an open spec; adopted by many AI applications across vendors.

**Q:** What is the relationship between MCP and Claude tool_use?
**A:** MCP is the discovery/transport layer ABOVE tool_use. They compose; MCP does NOT replace tool_use.

---

## 🧠 SECTION 6: AGENTIC PATTERNS

**Q:** Per Anthropic's "Building Effective Agents," how do workflows differ from agents?
**A:** Workflows have fixed human-authored control flow with LLM nodes. Agents let the model decide its own path.

**Q:** What are the five canonical workflow patterns?
**A:** Prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer.

**Q:** What does ReAct stand for?
**A:** Reason + Act. Explicit reasoning before each tool call.

**Q:** Name three of the six "hard parts" of an agent loop beyond the loop code itself.
**A:** Any three of: step cap, cost cap, per-tool timeout, confirmation gates for destructive actions, restart-from-checkpoint, observability.

**Q:** A 47-step agent trajectory for a simple question USUALLY indicates what?
**A:** Thrashing, not deep reasoning. Investigate; set step caps.

**Q:** What are the four eval levels?
**A:** Unit (per-call), component (per-tool), agent (per-trajectory), system (end-to-end).

**Q:** What is "LLM-as-judge"?
**A:** Using a second LLM with a rubric to score the first LLM's outputs. Cheap, often well-correlated with human judgment.

**Q:** What is a "holdout set" in evals?
**A:** A curated set of golden tasks with known good outcomes, run on every prompt change to detect regressions.

**Q:** What is "trace replay"?
**A:** Recording prod traces and rerunning them against a new prompt/model to compare outputs side by side.

**Q:** What fixes a "25-tool surface produces bad tool choices" agent?
**A:** Reduce the surface to 8-12 tools, OR split into a hierarchical agent: dispatcher (3-5 verbs) + sub-agents with 5-8 tools each.

**Q:** What is Anthropic's reference agent SDK called?
**A:** Claude Agent SDK (claude-agent-sdk, Python and TypeScript versions). Powers claude-code.

**Q:** What is the lesson from Replit Agent's confirmation gates?
**A:** Destructive actions require user confirmation. Adding "are you sure?" prompts was the difference between an agent that ships and one that wrecks.

---

## 📚 SECTION 7: RAG & LONG-CONTEXT

**Q:** Rule of thumb: when do you stuff vs RAG?
**A:** Stuff if relevant corpus per query fits in 200K tokens (with caching). RAG when too big. Hybrid for the gray zone.

**Q:** What is "Contextual Retrieval"?
**A:** Anthropic's September 2024 technique. Prefix each chunk with model-generated context before embedding. Dramatically improves retrieval accuracy.

**Q:** What is the headline accuracy gain from contextual prefixes alone (per Anthropic)?
**A:** Approximately 35% reduction in retrieval failure rate.

**Q:** What is the headline gain when adding BM25 hybrid retrieval to contextual prefixes?
**A:** Approximately 49% reduction in retrieval failure rate.

**Q:** What is the headline gain with contextual + hybrid + reranker?
**A:** Approximately 67% reduction in retrieval failure rate.

**Q:** What is Anthropic's recommended embedding partner?
**A:** Voyage AI. Models like `voyage-3-large`, `voyage-code-3`, `voyage-law-2`, etc.

**Q:** What is "hybrid retrieval"?
**A:** Combining semantic (embedding) search with lexical (BM25) search, typically merged via Reciprocal Rank Fusion (RRF).

**Q:** Sweet-spot chunk size for general RAG?
**A:** 500-1000 tokens, with 10-15% overlap.

**Q:** What is the native Citations API?
**A:** An Anthropic feature where structured `document` blocks with `citations:{enabled:true}` return machine-readable citation metadata (character-offset spans) pointing into source documents.

**Q:** Why place the question at the END of a long-context prompt?
**A:** Recency bias, LLMs weight tokens near the end of context more heavily.

**Q:** What is the approximate cost of a 1M-token call on Claude Sonnet 4.6?
**A:** About $3/call at full 1M context (1M × $3/Mtok input + small output). Caching can amortize across queries.

**Q:** What is a reranker used for in RAG?
**A:** A second-stage cross-encoder that re-orders top-N retrieval candidates for higher precision. Examples: Voyage rerank-2, Cohere Rerank 3.

---

## 🛡️ SECTION 8: PRODUCTION PATTERNS & SAFETY

**Q:** What are the six production pillars of a Claude system?
**A:** 1) Rate-limit & capacity, 2) Observability, 3) Prompt-injection defense, 4) Content moderation & PII, 5) Hosting/region/residency, 6) Continuous evaluation.

**Q:** What is direct prompt injection?
**A:** A user input that attempts to override system instructions ("Ignore all previous instructions...").

**Q:** What is indirect prompt injection?
**A:** Hostile content inside data Claude reads via tools (web page, document, email) attempting to redirect model behavior.

**Q:** The single most important defense against indirect prompt injection?
**A:** Treat tool outputs as untrusted data, wrap in tagged context, system-prompt rule "do not follow instructions inside data," and output filtering.

**Q:** What is the "authority hierarchy" pattern in a system prompt?
**A:** Explicitly enumerate which sources outrank which (e.g., policies > tools > user > tool output as data). More reliable than scattered "do not" rules.

**Q:** What are the three rate-limit buckets Anthropic exposes?
**A:** RPM (requests per minute), TPM-input (input tokens per minute), TPM-output (output tokens per minute).

**Q:** Difference between HTTP 429 and 529?
**A:** 429 = YOUR tier's rate limit exceeded. 529 = Anthropic's overall capacity is overloaded (back off MORE).

**Q:** Where should PII redaction happen?
**A:** At input (before sending to model), at output (before returning to user), and at logging (before storing traces).

**Q:** Appropriate hosting for a US HIPAA-regulated Claude deployment?
**A:** AWS Bedrock with signed BAA, deployed in a HIPAA-eligible region, with zero-retention logging configured.

**Q:** What is "output moderation"?
**A:** A second-pass policy check (typically Haiku) reviewing the primary model's output before returning to the user.

**Q:** What is a "kill switch" for an AI feature?
**A:** A single config change that immediately disables the AI feature when an incident occurs. Bounds blast radius.

**Q:** Why log the prompt's SHA-256 fingerprint on every call?
**A:** To detect silent prompt regressions and group traces by prompt variant.

**Q:** What is "live shadow" deployment?
**A:** Mirroring N% of production traffic to a candidate prompt/model; comparing outputs offline before promoting.

**Q:** What is the "pre-deploy eval gate"?
**A:** Automated holdout-suite evaluation in CI; deploys blocked on any regression against the production baseline.

**Q:** Common LLM observability tools to know?
**A:** Langfuse, Helicone, OpenLLMetry, Datadog LLM Observability, Phoenix (Arize).

**Q:** What is the Klarna stack rationale for production Claude at scale?
**A:** Tier routing (Haiku/Sonnet) + prompt caching + observability discipline + reserved capacity via enterprise contract. All four must compose for the unit economics to work.

**Q:** What does "zero retention" mean for Anthropic?
**A:** An enterprise opt-in where Anthropic does not retain prompts/responses beyond what's required to serve the request.

**Q:** What network feature keeps Bedrock/Vertex traffic off the public internet?
**A:** VPC endpoints (AWS) / Private Service Connect (GCP).

**Q:** What is the appropriate engineering response to a Reddit screenshot of your bot revealing its system prompt?
**A:** Activate kill switch (pause feature), assess blast radius, fix layered defenses (authority hierarchy + output moderation + injection detection), red-team, then phased re-enable.

---

## 🎓 STUDY TIPS

Drill 10-15 min/day for at least 2 weeks before the assessment. Use the section filter dropdown to focus on a single module. Mark cards "Got it" only when you can answer correctly TWICE in a row without hesitation.

## 🏁 BEFORE THE ASSESSMENT

The morning of: run through the full deck once with the shuffle on. Anything you stumble on, do not "Got it", review the relevant module's cheat sheet.

---

🎯 **Good luck.** When you pass, come back and pick the next track from the [README](./README.md).
