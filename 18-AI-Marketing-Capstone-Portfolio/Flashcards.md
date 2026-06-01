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
  var STORAGE_KEY = 'fc-progress-aimkt-capstone';
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

# 🃏 AI Digital Marketing Capstone Portfolio Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Cards focus on terminology, portfolio principles, and interview talking points you'll use 30+ times in real conversations.

---

## 📜 SECTION 1: PORTFOLIO STRATEGY FUNDAMENTALS

**Q:** What does P-C-A-R-L stand for?
**A:** Problem → Constraints → Approach → Result → Lessons. The case-study format used for every capstone.

**Q:** What are the 3 audience paths for a marketing portfolio?
**A:** Job track (hiring managers), Client track (first paid project), Indie track (audience / personal brand).

**Q:** What are the 3 portfolio anti-patterns?
**A:** (1) Tools List trap, (2) Internal Work trap (no artifacts), (3) Polished But Empty trap (site built, no projects).

**Q:** What's the "Show Don't Tell" ratio for a portfolio?
**A:** Aim for 5 shows (screenshots, links, numbers) per 1 tell (claim about what you can do).

**Q:** What's the default portfolio hosting recommendation for this course?
**A:** Notion. Free, fast to ship, professional link previews. Polish to Webflow later if needed.

**Q:** Why pick a real subject over a hypothetical one for capstones?
**A:** Specificity = credibility. Hypothetical subjects produce generic findings hiring managers can smell instantly.

**Q:** What's the rule of thumb for 90-second pitches?
**A:** Context (1 sentence) → Problem (1 sentence) → Approach (3 sentences) → Result (1 sentence with numbers) → Lesson (1 honest sentence).

**Q:** Why is "build first, niche later" the recommended path?
**A:** Most students who try to niche before they have work end up with portfolios that don't match the niche. Build 2-3 capstones first; the natural niche emerges.

---

## 🔍 SECTION 2: SEO + CONTENT AUDIT CAPSTONE

**Q:** What are the 7 sections of a portfolio-grade SEO audit?
**A:** (1) Executive Summary, (2) Keyword Opportunity, (3) Technical SEO Scan, (4) Content Gap Analysis, (5) Top-Page Audit, (6) 90-Day Content Roadmap, (7) Recommendations Summary.

**Q:** Target page length for the SEO audit?
**A:** 15–20 pages. Less = thin. More = unscoped.

**Q:** What are the 4 Ahrefs reports needed for the audit?
**A:** (1) Site Explorer / Overview, (2) Organic Keywords, (3) Content Gap, (4) Top Pages. Plus Site Audit for technical.

**Q:** What's the "quick win" keyword position range?
**A:** Positions 8–20. These can often be moved to top 5 with on-page optimization.

**Q:** What are the 6 Screaming Frog tabs to check first?
**A:** Internal, Response Codes, Page Titles, Meta Description, H1, Images. Then Canonicals + Sitemaps.

**Q:** What's Domain Rating (DR)?
**A:** Ahrefs' 0–100 score of a domain's backlink strength. Higher = harder to outrank.

**Q:** What's Keyword Difficulty (KD)?
**A:** Ahrefs' 0–100 estimate of how hard it is to rank in the top 10 for a keyword.

**Q:** Name 3 of the 5 "trap findings" to NEVER include in an audit.
**A:** Bounce rate (not a ranking factor), "needs more pages" (without specifics), missing meta keywords (deprecated 2009). Also: "needs more backlinks" without specifics, generic "site speed."

**Q:** How many articles in a 90-day content roadmap?
**A:** 8–12 prioritized articles. Each with target keyword, volume, KD, word count, priority (P0/P1/P2), and month.

**Q:** What's a Content Gap report?
**A:** A list of keywords competitors rank for but your subject doesn't. Most valuable Ahrefs report for an audit.

---

## 💰 SECTION 3: PAID CAMPAIGN CAPSTONE

**Q:** Minimum spend for the paid campaign capstone?
**A:** $150 (target $180–$220). Real money makes it real.

**Q:** Minimum runtime?
**A:** 14 consecutive days. Meta needs 7+ to learn; Google needs 10+ for stable CPL.

**Q:** Default budget split for the $200 campaign?
**A:** $100 Google + $100 Meta. Adjust based on subject (B2B = more Google; DTC = more Meta).

**Q:** What's the 3-variant creative test pattern?
**A:** Always launch with 3 creative variants per platform. Tests learning, not just delivery.

**Q:** Why pick Search (not PMax) for first Google campaign?
**A:** PMax hides controls and learning. Search shows you exactly what's working — better for portfolio narrative.

**Q:** What's CPL?
**A:** Cost Per Lead. Total spend / number of leads. Key efficiency metric.

**Q:** What's CTR?
**A:** Click-Through Rate. Clicks / impressions. Healthy varies by channel (search 3-8%; social 0.8-2.5%).

**Q:** What's ROAS?
**A:** Return on Ad Spend. Revenue / spend. 1.0 = break-even. 2.0 = $2 returned per $1 spent.

**Q:** What's a Meta Lookalike Audience?
**A:** A new audience Meta builds based on similar characteristics to your existing customer list. Most powerful Meta targeting feature.

**Q:** Post-mortem word count target?
**A:** 1,500–2,500 words. Less = thin. More = no one reads.

**Q:** Why include failures prominently in the post-mortem?
**A:** Showing what didn't work is the highest-trust signal. Hiding failures reads as fake.

**Q:** LinkedIn carousel slide count for the post-mortem?
**A:** 6–10 slides. Cover → Challenge → Plan → Inflection → Results → What worked/didn't → Lessons → CTA.

---

## ⚙️ SECTION 4: MARKETING AUTOMATION CAPSTONE

**Q:** Minimum number of connected modules in the automation?
**A:** 5+ modules, with at least one branching decision (router/switch/IF).

**Q:** Default tool recommendation for this capstone?
**A:** Make.com. Best visual UI + decent free tier.

**Q:** What's the reference scenario for this capstone?
**A:** Webhook → Enrichment → Scoring → Router (HOT/WARM/COLD) → channel-specific actions (Slack/Klaviyo/CRM/Notion).

**Q:** What's the dev-signal alternative to Make.com?
**A:** n8n (self-hosted). Shows you're comfortable in technical environments.

**Q:** What's a Router in Make.com?
**A:** A module that branches the workflow based on a condition. Equivalent to IF/switch in code.

**Q:** What's a Webhook?
**A:** A custom HTTP endpoint that any service can POST to. Most flexible trigger type.

**Q:** What's an "operation" in Make.com?
**A:** Each module execution = 1 operation. Make's billing unit.

**Q:** Why include enrichment + scoring + routing as 3 separate layers?
**A:** Shows architectural thinking. A single API call doesn't demonstrate systems design.

**Q:** What to remove before publishing JSON / blueprint?
**A:** API keys, OAuth tokens, real customer/lead PII, real Slack workspace IDs, real email addresses.

**Q:** What's an architecture diagram for in this capstone?
**A:** A 1-page visual of the flow. Goes as the hero image on the case study. Built in Excalidraw/Whimsical/FigJam.

---

## 📊 SECTION 5: ATTRIBUTION MODEL CAPSTONE

**Q:** What are the 7 main attribution models?
**A:** Last-Click, First-Click, Linear, Time-Decay, U-Shaped/Position-Based, Markov Chain, Shapley Value.

**Q:** What does Last-Click attribution do?
**A:** Assigns 100% of conversion credit to the final touchpoint. Default in most analytics platforms.

**Q:** What does Linear attribution do?
**A:** Splits credit equally across all touchpoints in the journey.

**Q:** What's Markov Chain attribution?
**A:** Data-driven model using "removal effect" — measures how much conversion probability drops when you remove each channel from the journey.

**Q:** What's "removal effect"?
**A:** The drop in conversion probability when a specific channel is removed from the customer journey. Used to allocate credit in Markov.

**Q:** What's Shapley value attribution?
**A:** Game-theoretic fair-share allocation. Each channel gets its average marginal contribution across all possible orderings.

**Q:** Minimum sample size for stable Markov?
**A:** 100+ customer journeys. Less = noisy.

**Q:** What's the "money shot" of this capstone?
**A:** The clustered bar chart comparing channel credit under all 3 models. Visual proof of ranking changes.

**Q:** Why is Last-Click insufficient for multi-touch businesses?
**A:** It ignores discovery and consideration touchpoints. Massively under-credits awareness channels.

**Q:** What PII must be removed when using real customer data?
**A:** Names, emails, IPs, phone numbers, exact timestamps, fine geographic data, internal campaign codes.

**Q:** What's MMM vs MTA?
**A:** Media Mix Modeling uses aggregate data (statistical inference). Multi-Touch Attribution uses individual-journey data. Different scales.

---

## 🤖 SECTION 6: AI MARKETING AGENT CAPSTONE

**Q:** What separates an "agent" from a "ChatGPT prompt"?
**A:** Multi-step orchestration, structured prompts, possibly tool use. Agent does multiple things autonomously; chat does one.

**Q:** Default API recommendation?
**A:** Claude API. Cleaner SDK + strong structured output. OpenAI Assistants is a viable alt.

**Q:** What's a system prompt?
**A:** Instructions to the model about its role / format. Sent with `system` parameter; persists across user messages.

**Q:** What's tool use / function calling?
**A:** Letting an LLM call external functions during reasoning. Major signal upgrade vs single-call chat.

**Q:** What's the difference between Cursor and Continue.dev?
**A:** Cursor is the polished paid editor ($20/mo). Continue.dev is free open-source. Both AI pair-programmers.

**Q:** What's Replit Agent for?
**A:** End-to-end app generation. Describe what you want; it builds + deploys. Trades control for speed.

**Q:** What goes in .gitignore for an AI agent repo?
**A:** .env (API keys), __pycache__, .venv, any local config with secrets, .DS_Store.

**Q:** What if you accidentally commit an API key?
**A:** Rotate the key immediately. Use git filter-branch (or BFG Repo Cleaner) to scrub history.

**Q:** What goes in the README for an AI agent repo?
**A:** What it does, Loom link, how to run, architecture, cost per run, limitations + v2.

**Q:** Approximate cost for Claude 3.7 Sonnet?
**A:** ~$3 / 1M input tokens, ~$15 / 1M output tokens. Document this in the README.

**Q:** What's a structured output?
**A:** LLM response formatted as JSON or specific schema. Makes downstream code reliable.

---

## 🌐 SECTION 7: PERSONAL BRAND & DISTRIBUTION

**Q:** 3 LinkedIn headline patterns?
**A:** (A) Outcome + Audience, (B) Capstone-Anchored, (C) Honest Vibe + Specific Skill. Pattern B recommended for entry-level.

**Q:** What goes in the LinkedIn About section?
**A:** 3 paragraphs: Story open (specific moment) → Proof (5 capstones listed) → CTA (portfolio link + contact).

**Q:** How many items to pin in Featured?
**A:** 4–6. Each with a custom title (override LinkedIn defaults).

**Q:** Recommended posting cadence?
**A:** Mon long-form + Tue thread + Wed engage + Thu short + Fri carousel/video = ~5 posts/week.

**Q:** Suggested post-type distribution across the first 30 posts?
**A:** 5 capstone deep-dives, 8 lessons learned, 6 BTS, 4 contrarian, 3 resources, 2 questions, 2 milestones.

**Q:** What's "build in public"?
**A:** Sharing work-in-progress publicly, not just polished end results. Builds trust faster than polished portfolios.

**Q:** Why Notion as default portfolio hosting?
**A:** Free, ships in 2 hours, professional link previews, easily migrate to Webflow later.

**Q:** 90-day metric targets for personal brand?
**A:** 30+ posts, 100+ profile views/wk, 5+ inbound connection requests/wk, 50+ portfolio uniques/wk.

**Q:** What's the "polish forever" trap?
**A:** Spending weeks on Webflow design before any capstone is published. Most common stall pattern. Fix: ship Notion immediately.

---

## 🎤 SECTION 8: PITCH & COLD OUTREACH

**Q:** How many slides in the pitch deck?
**A:** 7 slides. Anything more is overengineered.

**Q:** The 7-slide structure?
**A:** (1) Hook+Identity, (2) Capstone Grid, (3) Most-Relevant Capstone (customized), (4) Process, (5) Pricing, (6) Why Me, (7) Next Steps.

**Q:** The 30-min discovery call agenda?
**A:** 5/20/5 rule: 5 min on you (your story + 1 capstone), 20 min on them (discovery questions), 5 min on next steps.

**Q:** Recommended pricing tier structure?
**A:** 3 tiers: Small ($500-$2k), Medium ($2k-$5k), Large ($5k-$15k/mo retainer). Most clients pick the middle.

**Q:** What's the follow-up cadence after no reply?
**A:** Day 0 initial, Day 4 soft check, Day 10 value follow-up, Day 21 final. Post-21: monthly newsletter touchpoints.

**Q:** Why NOT attach the portfolio link in cold message #1?
**A:** First message is connection, not pitch. Save the link for after they reply — it converts higher.

**Q:** What's the recommended cold message length?
**A:** ~80 words. LinkedIn DM should fit in the preview without scrolling.

**Q:** What kills cold outreach?
**A:** Generic openers, massive credentials paragraph, multiple links in msg 1, asking for a call before establishing value.

**Q:** The "Mom Test" rule?
**A:** From Rob Fitzpatrick's book: don't ask leading questions. Ask about their past behavior, not future hypotheticals.

**Q:** What's a 1-page proposal?
**A:** Single-page document: what they want, what you'll do, timeline, investment, next step. Proposals over 2 pages rarely get signed.

**Q:** Realistic cold-outreach response rate?
**A:** 5-15% on message 1; jumps to 15-25% by message 4 (with follow-ups). Most students quit after 1 — don't.

---

## 🛠️ SECTION 9: TOOLS QUICK REFERENCE

**Q:** Where do you find Ahrefs Content Gap?
**A:** Site Explorer → Content Gap. Enter 3-5 competitor URLs. Shows keywords they rank for but you don't.

**Q:** What's Make.com's competitor for self-hosted automation?
**A:** n8n. Open-source. Docker run. Free if self-hosted.

**Q:** Free alternative to Cursor?
**A:** Continue.dev extension in VSCode. Open-source AI assistant.

**Q:** Free alternative to Webflow for portfolio?
**A:** Notion (default). Read.cv (creator-style). Astro + GitHub Pages (dev signal, free hosting via Vercel/Netlify).

**Q:** Free AI image generator (alternative to Midjourney)?
**A:** DALL·E (via ChatGPT Plus, sometimes free credits) or Bing Image Creator (free).

**Q:** What's Hunter.io used for?
**A:** Email finder + verifier. Free tier 25 searches/mo. Used for enrichment in automation scenario.

**Q:** What's the free Loom alternative?
**A:** Tella.tv or QuickTime (Mac built-in). Loom's free tier (5-min cap) is usually enough.

**Q:** What's Excalidraw?
**A:** Free hand-drawn-style diagram tool. Used for architecture diagrams. Sketchy aesthetic is the point.

**Q:** What's a free alternative to ChannelAttribution (R)?
**A:** Build Markov in Python from scratch (~80 lines) or use `pychattr` PyPI package.

---

## 🎯 SECTION 10: INTERVIEW & PITCH TALKING POINTS

**Q:** What's the 60-second cold-open pitch structure?
**A:** Identity → Portfolio hook (5 capstones in one line) → Current state → What interests me → CTA ("happy to walk you through any of them").

**Q:** "Walk me through your strongest case study" — how to answer?
**A:** 90-second P-C-A-R-L. Context → Problem → Approach → Result with numbers → Lesson honest.

**Q:** "Tell me about a marketing failure" — answer pattern?
**A:** Use the paid campaign post-mortem. Specific spend + result + 2 specific things that bombed + the one that worked + what you'd do differently.

**Q:** "What's your weakness?" — answer pattern?
**A:** Honest + specific + paired with how you're addressing it. Not "I work too hard" — that's a junior tell.

**Q:** "Why should we hire you?" — answer pattern?
**A:** Reference 5 shipped portfolio pieces + AI fluency + post-mortem culture. Specific, not list-of-skills.

**Q:** "What questions do you have for me?" — what to bring?
**A:** 3+ thoughtful questions, prepared. About: their current biggest channel challenge, who you'd work with, how they measure success in this role.

**Q:** "Have you used AI in marketing?" — answer pattern?
**A:** Reference the AI agent on GitHub + Claude API + tool use disclosed. NOT "I use ChatGPT" (table stakes).

**Q:** "How do you measure marketing performance?" — answer pattern?
**A:** Reference attribution capstone. Talk about multi-touch reasoning vs last-click. Show analytical depth.

**Q:** Soft-close line for a discovery call?
**A:** "If this fits, I'll send a proposal in 48 hrs. If not, no hard feelings. What questions do you have?"

**Q:** When client says "you're too expensive" — what's the response?
**A:** "I appreciate the honest feedback. Out of curiosity, what would feel right for the scope? I'd rather hear it now than guess." Reframes from defense to dialogue.

---

## ✅ SECTION 11: ANTI-PATTERNS TO AVOID

**Q:** Top portfolio anti-pattern from Module 1?
**A:** "Tools List Trap" — listing software instead of work. Tools without projects = generic.

**Q:** Top SEO audit anti-pattern?
**A:** Including the 5 trap findings (bounce rate, "more pages," etc.). Closes the tab for senior reviewers.

**Q:** Top paid campaign anti-pattern?
**A:** Hiding the failures in the post-mortem. Sanitized writeups read as fake.

**Q:** Top automation anti-pattern?
**A:** Exporting JSON with API keys still in it. Security failure + privacy risk.

**Q:** Top attribution model anti-pattern?
**A:** Importing a library with no explanation of the algorithm. "Junior tell" vs senior who shows math.

**Q:** Top AI agent anti-pattern?
**A:** Building a "ChatGPT wrapper" — single API call, no specific use case, no structured output. Doesn't demonstrate agent thinking.

**Q:** Top personal brand anti-pattern?
**A:** Rebuilding LinkedIn but never posting. Module 7 isn't done at "headline rewritten."

**Q:** Top first-pitch anti-pattern?
**A:** Not sending the 5 cold messages. 95% of work done; the last 5% is what generates income.

---

## 🚀 STUDY TIPS

1. Go through cards once per day for 2 weeks.
2. Use the section filter to focus on weakest area first.
3. Practice the 90-second pitches out loud after reading the talking-point cards.
4. Add your own cards as you finish each capstone (specific numbers, tools, decisions).

---

## 🎓 BEFORE YOU SEND PITCHES

Make sure you can answer these COLD (in 60 seconds, with no notes):

1. What does P-C-A-R-L stand for and why does it matter?
2. Walk me through your paid campaign capstone.
3. What's the difference between Markov and Last-Click attribution?
4. Explain your AI agent architecture in plain English.
5. What's your pricing structure and why?

If you can, you're ready. If not, re-review the talking-point cards.
