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
  var STORAGE_KEY = 'fc-progress-aimkt-strategist';
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

# 🃏 AI Marketing Strategist Master Flashcards

> **How to use:** Each card has a Q on one line and A on the next. Use the widget above for spaced repetition; copy any card into Anki for long-term retention. Aim for daily review until you can answer every card from memory.

---

## 📦 SECTION 1: STRATEGIC FRAMEWORKS & OKRs

**Q:** What does STP stand for?
**A:** Segmentation, Targeting, Positioning. Foundational marketing framework (Smith 1956, Kotler).

**Q:** What are the 5 ISADA criteria for a valid market segment?
**A:** Identifiable, Substantial, Accessible, Differentiable, Actionable.

**Q:** What are the 4 Cs in the marketing mix?
**A:** Customer needs (Product), Cost (Price), Convenience (Place), Communication (Promotion). Lauterborn 1990, customer-side view of McCarthy's 4 Ps.

**Q:** Name the 5 forces in Porter's framework.
**A:** New entrants, Supplier power, Buyer power, Substitutes, Industry rivalry. Porter 1979.

**Q:** What are the 4 quadrants of the Ansoff Matrix?
**A:** Market Penetration (existing product, existing market), Market Development (existing product, new market), Product Development (new product, existing market), Diversification (new product, new market).

**Q:** What does the BCG matrix label as Stars, Cash Cows, Question Marks, and Dogs?
**A:** Stars = high growth + high share. Cash Cows = low growth + high share. Question Marks = high growth + low share. Dogs = low growth + low share.

**Q:** What is JTBD and what are its 4 switching forces?
**A:** Jobs-to-be-Done (Christensen 2003). 4 forces: Push (frustration), Pull (attraction), Anxiety (fear), Habit (inertia). Marketing amplifies Push + Pull; reduces Anxiety + Habit.

**Q:** What's the difference between a Key Result and an Initiative?
**A:** Key Result = quantitative outcome (a number). Initiative = an activity / project that drives the KR. KR is the outcome; Initiative is the work. Confusing them is the #1 OKR failure mode.

**Q:** What is the expected attainment range for well-formed OKRs per Doerr?
**A:** 50–70% (or 60–80% depending on team). Consistent 100% attainment indicates sandbagged targets.

**Q:** What are the 3 criteria for a good North Star metric?
**A:** Measures customer value (not company outcome), is a leading indicator of long-term revenue, is bounded (resistant to gaming).

**Q:** Give one publicly disclosed North Star metric and the company.
**A:** Examples: Spotify — "time spent listening per active user". Airbnb — "nights booked". Facebook (2007) — "friend-7-days". Slack — "teams with 2,000+ messages". Dropbox — "files saved across 3+ devices".

---

## 📦 SECTION 2: CDPs & SERVER-SIDE TRACKING

**Q:** What are the 4 canonical CDP architectural patterns?
**A:** Packaged (Segment, mParticle), Composable / warehouse-native (Hightouch, Census on Snowflake/BigQuery), Self-hosted / OSS (Snowplow, Jitsu, PostHog), Embedded-in-marketing-cloud (Adobe RT-CDP, Salesforce Data Cloud).

**Q:** Difference between a CDP and a DMP?
**A:** CDPs work with first-party PII / named customer data for activation. DMPs work with third-party / anonymized cookie data — historically for media buying. DMPs are sharply declining in 2024–2026.

**Q:** What does Hightouch do?
**A:** Reverse ETL — syncs data from the warehouse (Snowflake, BigQuery, Databricks) to SaaS marketing destinations. The core tool of the "composable CDP" pattern.

**Q:** What is server-side tagging and roughly how much measurement loss does it recover?
**A:** Server-side tagging sends events from your server (not the browser) to ad/analytics platforms. Recovers ~5–25% of measurement loss versus client-side — NOT 100%.

**Q:** What is Stape.io?
**A:** Managed hosting + power-ups for Google Tag Manager Server-Side (GTM-SS). Eliminates DevOps overhead.

**Q:** Difference between deterministic and probabilistic identity resolution?
**A:** Deterministic = known explicit links (login, hashed-email match). Probabilistic = ML inference from behavioral/contextual signals. Deterministic is the 2026 default; probabilistic is increasingly restricted under GDPR/CPRA.

**Q:** When did Apple's ITP (Intelligent Tracking Prevention) first launch?
**A:** 2017 in Safari / WebKit. ITP progressively restricted third-party cookies, then capped first-party cookies set by tracking scripts.

**Q:** When did iOS App Tracking Transparency (ATT) launch and what are typical opt-in rates?
**A:** iOS 14.5 in April 2021. Opt-in rates settled around 25–35%.

**Q:** What are the 4 layers of the 2026 first-party data stack?
**A:** Collection → Server-side → Warehouse → Reverse-ETL activation.

---

## 📦 SECTION 3: GA4 MASTERY

**Q:** In GA4, what is the atomic unit of data?
**A:** An event. Sessions, pageviews, and users are all derived from events.

**Q:** When did Universal Analytics stop collecting data?
**A:** July 1, 2023 (UA standard); July 1, 2024 (UA 360).

**Q:** What are the four GA4 event categories?
**A:** Automatically collected, Enhanced Measurement, Recommended events, Custom events.

**Q:** What is the maximum number of parameters per GA4 event?
**A:** 25 parameters per event.

**Q:** How many custom dimensions can free GA4 hold? And custom metrics?
**A:** 50 custom dimensions + 50 custom metrics in free GA4. 125 of each in GA4 360.

**Q:** What is the maximum number of Key Events (formerly Conversions) per GA4 property?
**A:** 50 Key Events per property (raised from 30 in 2024).

**Q:** Define "engaged session" in GA4.
**A:** A session that lasts >10 seconds OR has a conversion OR has 2+ screen/page views.

**Q:** What is the GA4 identifier priority order?
**A:** User ID > Google Signals > Device ID > Modeled data.

**Q:** What is the volume threshold for GA4's Data-Driven Attribution model?
**A:** 400+ conversions per conversion type within 30 days. Below this, GA4 falls back to last-click.

**Q:** What are GA4's three predictive metrics?
**A:** Purchase probability, Churn probability, Predicted revenue. Each requires ~1,000 returning purchasers + 1,000 returning non-purchasers in the last 28 days.

**Q:** What are the 5 Explorations techniques in GA4?
**A:** Free-form (pivot-table-style), Funnel, Path, Segment overlap, User lifetime. (Cohort is the 6th, separate technique.)

**Q:** Is the GA4 → BigQuery export free?
**A:** Yes — free for both free GA4 and GA4 360 (was 360-only in Universal Analytics).

**Q:** What SQL pattern extracts a parameter from the GA4 BigQuery `event_params` array?
**A:** `SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location'`

**Q:** What is GA4's server-side ingestion endpoint called?
**A:** Measurement Protocol v2 (incompatible with UA's v1).

---

## 📦 SECTION 4: ATTRIBUTION

**Q:** Why is last-click attribution considered dead in 2026?
**A:** It over-credits trackable bottom-funnel channels (paid search, retargeting) by 30–60% and structurally under-credits upper-funnel and brand channels.

**Q:** What is the U-shaped (position-based) attribution allocation?
**A:** 40% first touch + 40% last touch + 20% split among middle touches.

**Q:** What is the W-shaped attribution allocation (common in B2B)?
**A:** 22.5% × 4 to First, Lead-creation, Opportunity-creation, Last touch + 10% spread across middle touches.

**Q:** Define Shapley values in the attribution context.
**A:** A channel's Shapley value is its average marginal contribution to conversions across every possible ordering of the channels in the journey. Computationally factorial — production uses sampling approximations.

**Q:** Define the "removal effect" in Markov-chain attribution.
**A:** (Conversion probability with channel present − Conversion probability with channel removed) / Conversion probability with channel present.

**Q:** What is SHAP and how does it relate to Shapley values?
**A:** SHAP (SHapley Additive exPlanations) is an ML interpretability framework built on Shapley axioms. Generalizes Shapley to non-linear ML models. Used to explain feature importance in modern attribution and ML.

**Q:** What does the acronym SKAN stand for and what does it do?
**A:** SKAdNetwork. Apple's privacy-preserving iOS install attribution framework. Reports noisy, aggregated, delayed conversion-value signals — cannot identify individual users.

**Q:** How many bits is the SKAN conversion value?
**A:** 6 bits (0–63 = 64 possible states). The strategist's job is to map LTV bins or behavioral milestones into these 64 states.

**Q:** Name three Mobile Measurement Partners (MMPs).
**A:** AppsFlyer, Branch, Adjust. They handle postback attribution and SKAN aggregation for mobile-app installs.

**Q:** What is the 2026 measurement triangle?
**A:** MTA + MMM + Incrementality. MTA for click-based tactical decisions; MMM for cross-channel strategic allocation; Incrementality for causal validation.

**Q:** What is the recommended share of media spend reserved for incrementality testing?
**A:** 5–10%. This is the "validation tax" that proves the other 90–95% is allocated correctly.

---

## 📦 SECTION 5: MARKETING MIX MODELING

**Q:** State the canonical MMM equation in plain English.
**A:** Sales_t = Baseline_t + Σ_channels β × AdStock(Spend) (with saturation) + Σ_controls + noise. Channel effects = a coefficient times the ad-stock-then-saturated channel spend, summed.

**Q:** Define ad-stock.
**A:** The decaying carry-over effect of past advertising on current sales. Formally: AdStock_t = Spend_t + λ × AdStock_(t−1). Concept from Broadbent 1979.

**Q:** If λ = 0.5 in geometric ad-stock, what is the half-life?
**A:** 1 week. (half-life = log(0.5)/log(λ) = log(0.5)/log(0.5) = 1.)

**Q:** What's the typical half-life range for paid search ad-stock?
**A:** 1–2 days. Search is intent-driven; very short carry-over.

**Q:** What's the typical half-life range for TV brand-campaign ad-stock?
**A:** 8–12 weeks. TV brand builds memory and decays slowly.

**Q:** Write the Hill saturation function.
**A:** Hill(x) = x^α / (x^α + K^α), where K is the half-saturation point (spend at which output = 50% of max) and α is the shape parameter.

**Q:** What is Meta's open-source MMM library called and what language?
**A:** Robyn. Built in R, with a Python port in development.

**Q:** What is Google's open-source MMM library called and what does it differ in from Robyn?
**A:** Meridian. Built in Python (TensorFlow Probability). Hierarchical Bayesian; native Reach & Frequency inputs (not just spend); geo-level default.

**Q:** What is the typical MMM data requirement?
**A:** 2 years of weekly data minimum. Below this, you can't separate seasonality from channel effects.

**Q:** What does "calibrating" an MMM mean?
**A:** Constraining MMM coefficients using ground-truth incrementality test results. Without calibration, MMM can drift; incrementality tests act as anchors.

**Q:** In an MMM decomposition, what proportion of revenue does "baseline" typically represent?
**A:** 50–80%. The "would have happened anyway" share. Marketers consistently underestimate it.

**Q:** A channel has 1.4× ROAS and a flat response curve at current spend. Recommendation?
**A:** Decrease spend modestly and reallocate. Flat curve = marginal dollar has very low impact.

---

## 📦 SECTION 6: PREDICTIVE ANALYTICS — CLV, CHURN, UPLIFT

**Q:** What does BG/NBD stand for?
**A:** Beta-Geometric / Negative Binomial Distribution. Fader & Hardie 2005. The canonical non-contractual CLV model.

**Q:** What are the four customer inputs for BG/NBD?
**A:** x = repeat transactions, t_x = recency (time of last transaction), T = observation window, monetary_value = avg transaction value.

**Q:** What is the companion model to BG/NBD for monetary value?
**A:** Gamma-Gamma. Together they produce per-customer CLV estimates.

**Q:** What is the canonical Python library for BG/NBD + Gamma-Gamma?
**A:** `lifetimes` (Cameron Davidson-Pilon). `pip install lifetimes`.

**Q:** What is the operationally useful AUC threshold for a marketing churn model?
**A:** >0.80 (>0.85 is great, >0.95 is suspicious / likely data leakage).

**Q:** What is "lift at top decile" and what is the operational bar?
**A:** Top-decile lift = how many times more likely top-decile users are to do the modeled event than the base rate. Bar ≥3×.

**Q:** Name the two production calibration methods for ML probability outputs.
**A:** Isotonic regression and Platt (sigmoid) scaling. CalibratedClassifierCV in scikit-learn implements both.

**Q:** Why is calibration necessary before using a churn model in marketing?
**A:** Raw LightGBM/XGBoost outputs are typically miscalibrated scores, not true probabilities. Marketing decisions ("retain customers above 30% churn probability") require the output to actually mean "30%."

**Q:** Name the 4 uplift modeling segments.
**A:** Persuadables, Sure Things, Lost Causes, Do-Not-Disturbs (Sleeping Dogs).

**Q:** Which uplift segment is the marketing target?
**A:** Persuadables — users who buy only because of the marketing intervention.

**Q:** Why is it usually wrong to target the top decile of propensity scores in paid ads?
**A:** Top-decile users are "Sure Things" who convert without ads. Marketing to them wastes impressions. Middle deciles have higher incremental value.

**Q:** What does RFM stand for and what are the typical score ranges?
**A:** Recency, Frequency, Monetary. Typically scored on a 1–5 quintile scale per dimension. "555" = Champion; "111" = Lost.

**Q:** What is the LTV:CAC sustainability floor?
**A:** 3:1. Below this, customer acquisition is unsustainable. Above 5:1 may indicate under-investment in growth.

---

## 📦 SECTION 7: PERSONALIZATION & RECSYS

**Q:** Name the three canonical multi-armed bandit algorithms.
**A:** ε-greedy, UCB (Upper Confidence Bound), Thompson Sampling. Thompson Sampling is the production default in 2026.

**Q:** What is a contextual bandit?
**A:** A bandit conditioned on user / context features. The Netflix-style production personalization engine.

**Q:** What does matrix factorization decompose?
**A:** The user × item rating matrix R into two lower-dimensional latent-factor matrices: R ≈ U × V^T, where U is users × k and V is items × k.

**Q:** What technique won the Netflix Prize ($1M, 2009)?
**A:** An ensemble dominated by matrix factorization. Winner: BellKor's Pragmatic Chaos.

**Q:** What is the production-default CF algorithm for implicit feedback (clicks/views)?
**A:** ALS (Alternating Least Squares). Hu, Koren & Volinsky 2008. Implemented in `implicit` Python library and Spark MLlib.

**Q:** What is a Two-Tower recsys model?
**A:** Separate neural-network "towers" produce user embeddings and item embeddings, scored by similarity (dot product or cosine) at retrieval. Used by Google, Pinterest, YouTube.

**Q:** What is Meta's open-source production recsys architecture called?
**A:** DLRM (Deep Learning Recommendation Model). Meta 2019. Handles billions of users and items in production.

**Q:** Name 3 ANN search libraries used for serving embeddings.
**A:** FAISS (Meta open-source), ScaNN (Google open-source), Pinecone (managed service).

**Q:** Why is optimizing only for NDCG dangerous?
**A:** It produces filter-bubble pathology and popularity bias — narrowing the catalog over time. Tune for diversity and serendipity too.

**Q:** Define "serendipity" in recsys.
**A:** Recommendations that are relevant *and* unexpected — the discovery quality that drove Spotify's Discover Weekly success.

---

## 📦 SECTION 8: COHORTS & AUDIENCE INTELLIGENCE

**Q:** In a cohort matrix, what is M0?
**A:** The month (or week, depending on granularity) of acquisition. M1 = next period after acquisition, etc.

**Q:** Name the 3 canonical retention curve shapes.
**A:** L-curve (heavy early dropoff + plateau), Smile curve (some users resurrect after dip), Cliff (sharp drop at a specific tenure point — typically a paywall or trial expiry).

**Q:** Write the NRR formula.
**A:** NRR = (start ARR + expansion − contraction − churn) / start ARR. >100% means existing customers grow even ignoring new sales.

**Q:** What's the best-in-class B2B SaaS NRR bar?
**A:** >120%. Snowflake, Datadog, Cloudflare, Twilio have all reported NRR >130% at various points.

**Q:** Difference between NRR and GRR?
**A:** NRR includes expansion; GRR excludes it. GRR = (start − contraction − churn) / start. NRR = GRR + expansion / start.

**Q:** What is Meta's Advantage+ Audience?
**A:** Meta's ML-driven 2024+ audience-targeting approach. Replaces manual Look-alikes for most campaigns. Meta's model chooses targets given your conversion signals.

**Q:** What is the strategist's value-add in paid social targeting in 2026?
**A:** Feeding high-quality conversion signals (e.g., LTV-weighted events) to the platform. Manual lookalike construction is largely obsolete.

**Q:** Define the "death spiral" pre-churn pattern.
**A:** Gradual usage decline in the weeks before a customer churns — e.g., −5% by W-12, −28% by W-4, −51% by W-2. Provides a 2–4 week intervention window for win-back.

**Q:** What is an "activation event" or "activation threshold"?
**A:** A behavior that, once performed, dramatically improves a user's retention probability. Spotify: playlist creation. Stitch Fix: 3rd Fix. Slack: 2,000 messages. Facebook (2007): 7 friends in 10 days.

---

## 📦 SECTION 9: PRIVACY-FIRST MEASUREMENT

**Q:** What are the 4 consent parameters in Google Consent Mode v2?
**A:** ad_storage, ad_user_data, ad_personalization, analytics_storage. Each can be granted, denied, or unset.

**Q:** Difference between Basic and Advanced Consent Mode?
**A:** Basic = tags don't fire when consent is denied (lose 100% of denied-consent measurement). Advanced = tags fire with no cookies + anonymized pings + Google ML modeling of lost conversions (recovers 20–80%).

**Q:** What is Meta's server-side conversion endpoint called?
**A:** Conversions API (CAPI). The equivalent for Google Ads is "Enhanced Conversions" / Measurement Protocol depending on the property.

**Q:** What keys does CAPI use for Pixel + CAPI deduplication?
**A:** event_id + event_name + event_time + fbc/fbp (Meta's first-party cookies). Event Quality Score in Events Manager reports dedup health.

**Q:** Typical recovery from adding CAPI alongside Pixel?
**A:** 15–30% additional attributed conversions within 6 weeks.

**Q:** What is Google's Enhanced Conversions for Leads?
**A:** The B2B variant. Allows hashed lead identifiers from your CRM to be uploaded back to Google Ads, retroactively attributing the lead to its original ad click.

**Q:** Name 3 of the 7 Chrome Privacy Sandbox APIs.
**A:** Examples: Topics API, Protected Audience API (formerly FLEDGE), Attribution Reporting API, Private Aggregation API, Shared Storage API, Private State Tokens, CHIPS.

**Q:** What does the Topics API do?
**A:** Assigns each browser ~3 weekly topics from a ~470-topic taxonomy based on browsing history. Sites call document.browsingTopics() for ad targeting. No sensitive categories included.

**Q:** What is the Protected Audience API (formerly FLEDGE)?
**A:** Browser-side on-device auction for remarketing/look-alike. Sites add users to interest groups; auction runs in the browser without user identity leaving. Replaces 3p-cookie retargeting.

**Q:** What is a Data Clean Room?
**A:** A privacy-preserving multi-party query environment where parties can run queries on combined data without any party seeing the others' raw data. Enforces aggregation thresholds and allowed-query restrictions.

**Q:** Name 4 data clean room platforms.
**A:** AWS Clean Rooms, Google Ads Data Hub (ADH), Snowflake Data Clean Room, Meta Audience Insights. (Also InfoSum, Habu/LiveRamp, LiveRamp Safe Haven.)

**Q:** What is differential privacy and what does ε control?
**A:** Mathematical privacy framework that adds calibrated noise to query results so individual records can't be identified. ε (epsilon) controls the privacy/utility trade-off — lower ε = stronger privacy + more noise.

**Q:** Name the 4 dominant privacy regulations driving 2026 marketing decisions.
**A:** GDPR (EU/EEA/UK), CCPA / CPRA (California, de facto US standard), MHMDA (Washington health data), COPPA (US kids).

**Q:** Why is hashing PII not enough to remove GDPR obligations?
**A:** A SHA-256 hash is one-way obfuscation but still identifies a person (or links to one). Personal data under GDPR — consent + DPA still required.

---

## 📦 SECTION 10: ORG DESIGN & TECH STACK

**Q:** Name the 4 marketing org structures.
**A:** Centralized, Federated (per-BU), Hub-and-Spoke (the 2026 default for $10M–$1B), AI-Augmented Hybrid (hub-spoke + dedicated AI Ops team).

**Q:** What does RACI stand for?
**A:** Responsible, Accountable, Consulted, Informed.

**Q:** In MMM design, which RACI role does Marketing typically hold?
**A:** Accountable. Data Engineering is Responsible for execution; Finance and Product are Consulted.

**Q:** Approximately how many vendors did Scott Brinker's 2024 MarTech Landscape track?
**A:** ~12,000. Strategists know the ~30–50 categories — not every vendor.

**Q:** What is the 30-30-30-10 rule for marketing tech-stack spend?
**A:** 30% Infrastructure (CDP, warehouse, BI), 30% Activation (email/lifecycle/ad tooling), 30% Measurement (MTA, MMM, product analytics, A/B), 10% Experimental (new categories).

**Q:** Name the 5 questions the CFO will ask the marketing strategist every quarter.
**A:** (1) What did we spend and what did it return? (2) Which channels growing/shrinking and why? (3) How do we know it's incremental? (4) Where is the next $X going? (5) What's the leading indicator?

**Q:** Approximately how much does a typical $20M-revenue DTC brand spend annually on its marketing stack?
**A:** ~$360K, or about 1.8% of revenue.

**Q:** Approximate 2026 US compensation for a Director, Marketing Analytics?
**A:** $180K–$280K (base + bonus + equity blended).

**Q:** What does a CMO typically earn in 2026 (US, blended)?
**A:** $400K–$1M+ at public-company scale; >$5M for some Fortune-500 CMOs with equity.

**Q:** What is the typical build-vs-buy break-even horizon?
**A:** 18–24 months. Many "builds" never reach break-even because vendors improve faster.

**Q:** What is the career-killing mistake at the Manager → Director transition?
**A:** Staying purely technical and not transitioning to people leadership. Senior strategists are measured by team output, not personal execution.

**Q:** What is the recommended vendor renewal-negotiation lead time?
**A:** 90 days before contract end. Below 60 days, you've lost negotiating leverage.

---

## ✅ STUDY TIPS

1. **Review daily** — the widget tracks your "Got it" progress in localStorage.
2. **Section-filter** — use the dropdown to drill on weak modules.
3. **Shuffle weekly** — to avoid order-based memorization.
4. **Pair with the cheat sheets** — every card maps to a Cheat-Sheet.md section.
5. **Export to Anki** — if you want long-term retention beyond exam day, copy these into Anki with the same Q:/A: format.

---

## 🎯 BEFORE THE REAL EXAM

- Make sure every card in this deck is marked "Got it" — that's your readiness signal.
- Re-take Final-Mock-Exam.md until you score ≥80% (60/75) consistently.
- For the GA4 Certification specifically, also take the official Skillshop free practice.
- For Meta Marketing Science Professional, complete Meta Blueprint's specific course modules.

Good luck.
