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
  var STORAGE_KEY = 'fc-progress-aimkt-practitioner';
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

# 🃏 AI Digital Marketing Practitioner Master Flashcards

> **How to use:** Each card has a Q on the front and A on the back. Filter by section or shuffle all. Aim for daily review during the 6-week course and before any real cert exam.

---

## 📦 SECTION 1: Strategy & Brief Writing

**Q:** What are the 5 W's of a campaign brief?
**A:** Who, What, Why, Where, How.

**Q:** What's the difference between a creative brief and a media brief?
**A:** Creative brief is for designers/writers/editors (insight + tone + key message). Media brief is for buyers/analysts (channel mix + budget + KPIs).

**Q:** Maximum recommended brief length?
**A:** 1-2 pages. Longer means you haven't decided yet.

**Q:** What is a Primary KPI?
**A:** The ONE metric that defines success for a campaign. Numeric. Threshold-based.

**Q:** What is a Guardrail KPI?
**A:** The pause-trigger metric. "Stop if CPA > $X for N consecutive days."

**Q:** What is the "Insight" in a brief?
**A:** A non-obvious behavioral truth about the customer. NOT a feature or benefit.

**Q:** What is the proposition in a brief?
**A:** The single message in 12 words or fewer.

**Q:** Name the 3 ICP validation tests.
**A:** 20-Conversation Test, Search Volume Test, Look-Alike Affordability Test.

**Q:** What is PLG?
**A:** Product-Led Growth, growth driven primarily by product usage (Notion, Slack, Figma).

**Q:** What is MSA (in media planning)?
**A:** Metropolitan Statistical Area, preferred geo unit for US targeting.

**Q:** What is DMA?
**A:** Designated Market Area, Nielsen's TV market regions, common in media buys.

**Q:** What are the 4 layers of the AI Briefing Prompt?
**A:** Context, Inputs, Task, Validation. The Validation layer ("list 3 assumptions to verify") makes AI briefs usable.

**Q:** Why is an "Out of Scope" line essential in a brief?
**A:** It prevents scope creep mid-campaign by explicitly documenting what the campaign is NOT trying to do.

---

## 📦 SECTION 2: Google Ads Search

**Q:** In Google Ads, where is the budget set?
**A:** Campaign level. NOT ad group, NOT keyword.

**Q:** What happened to Broad Match Modifier (BMM)?
**A:** Retired in 2021, folded into phrase match. Any answer choice referencing BMM is wrong.

**Q:** What is the 30-conversion rule?
**A:** Smart Bidding strategies (tCPA, tROAS) need 30+ conversions in last 30 days to stabilize. Below that, use Maximize Conversions.

**Q:** Maximum headlines + descriptions on an RSA?
**A:** 15 headlines (30 chars each), 4 descriptions (90 chars each).

**Q:** What's the formula for Ad Rank?
**A:** Max CPC bid × Quality Score + Expected impact of extensions.

**Q:** Three components of Quality Score?
**A:** Expected CTR, Ad Relevance, Landing Page Experience.

**Q:** What's the difference between "Search Terms" and "Keywords"?
**A:** Search Terms are what searchers actually typed. Keywords are what YOU bid on.

**Q:** What default settings should you UNCHECK on every new Google Search campaign?
**A:** "Include Search Partners" and "Include Display Network", both default to ON.

**Q:** What is a SKAG?
**A:** Single Keyword Ad Group, pre-Smart Bidding tactic, mostly obsolete in 2026.

**Q:** When should you NOT use tCPA bidding?
**A:** When you have fewer than 30 conversions per 30 days, the algorithm starves.

---

## 📦 SECTION 3: PMax, Display & YouTube

**Q:** Where does Performance Max serve ads?
**A:** Search, Display, YouTube, Discover, Gmail, and Maps, all simultaneously.

**Q:** What's the most important PMax day-0 setting?
**A:** Brand Exclusions, prevents PMax from cannibalizing your brand search campaign.

**Q:** What is an audience signal in PMax?
**A:** A HINT to the algorithm about who converts, NOT hard targeting. PMax can serve outside the signal.

**Q:** Max headlines per PMax asset group?
**A:** 15 (same as RSAs).

**Q:** Which image aspect ratios should you upload to PMax?
**A:** 1.91:1, 1:1, and 4:5, all three for full reach across surfaces.

**Q:** When are skippable in-stream YouTube ads charged?
**A:** Viewer watches 30 seconds OR full play. Skipping at 5 seconds = no charge.

**Q:** Max length of a non-skippable YouTube in-stream ad?
**A:** 15 seconds.

**Q:** YouTube Shorts ad spec?
**A:** Vertical 9:16, 6-60 seconds, CPM pricing.

**Q:** What pricing model do In-Feed (Discovery) YouTube ads use?
**A:** CPC, you pay only when the user clicks to watch.

**Q:** What is Demand Gen?
**A:** YouTube + Discover + Gmail campaign type (renamed from Discovery in 2024).

---

## 📦 SECTION 4: Meta Ads (FB + IG)

**Q:** Why does iOS 14.5 (ATT) require CAPI?
**A:** ~75% of iOS users opt out of Pixel tracking. CAPI is server-side, bypassing ATT entirely.

**Q:** What is event deduplication?
**A:** A mechanism that prevents Pixel + CAPI from double-counting the same conversion.

**Q:** Default Meta attribution window post-iOS 14?
**A:** 7-day click + 1-day view.

**Q:** What does AEM require?
**A:** Aggregated Event Measurement, rank top 8 conversion events per verified domain.

**Q:** Minimum recommended Lookalike Audience seed size?
**A:** 1,000+ (ideally 5,000+).

**Q:** What does Advantage+ Audience do?
**A:** A HINT to Meta's algorithm; can serve outside the suggestion if better converters are found.

**Q:** When does Advantage+ Shopping Campaigns (ASC) work best?
**A:** 50+ daily purchases, a product catalog, $50+/day budget.

**Q:** What does the Existing Customer Budget cap do in ASC?
**A:** Limits spend on existing customers, forces Meta to prospect new customers.

**Q:** What are DCT's axes?
**A:** Hook × Body × CTA, typically 4 × 4 × 4 = up to 64 variants.

**Q:** Minimum impressions before judging a DCT variant?
**A:** ~1,000 per variant. Killing at 100 impressions is just noise.

**Q:** Meta Reels aspect ratio?
**A:** 9:16 vertical, 1080×1920 minimum.

**Q:** What's the Learning Phase on Meta ad sets?
**A:** The first ~50 conversions in 7 days. Performance is unstable during this period. Don't edit campaigns.

**Q:** ABO vs CBO?
**A:** ABO = Ad-set Budget Optimization (good for testing). CBO = Campaign Budget Optimization (good for scaling winners).

**Q:** Why use Business Manager instead of a personal Facebook ad account?
**A:** Business Manager owns the assets; you can lose access to the person's account but keep the ad account. Personal accounts also get banned more easily.

**Q:** Meta Certified Media Buying Pro exam cost in 2026?
**A:** $150 USD. 75 questions. 105 minutes.

---

## 📦 SECTION 5: TikTok + LinkedIn

**Q:** What's a TikTok Spark Ad?
**A:** A sponsored boost of an existing organic TikTok video (yours or a creator's, via Spark Code).

**Q:** How does a creator give you a Spark Code?
**A:** Settings → Privacy → Authorize Account → Generate code. They share the code; you paste it into Ads Manager.

**Q:** TikTok hook window vs Meta?
**A:** TikTok: 1.5-3 seconds (faster than Meta's 3 seconds).

**Q:** TikTok's server-side conversion API equivalent?
**A:** Events API (their CAPI).

**Q:** Cross-posting Meta Reels to TikTok typical performance?
**A:** ~40% worse than native TikTok content, different visual grammar.

**Q:** What is a Thought-Leadership Ad (TLA)?
**A:** LinkedIn ad format that boosts an individual employee's personal post (looks organic; outperforms brand ads ~2x).

**Q:** What does LinkedIn "Account List Upload" enable?
**A:** Account-Based Marketing (ABM), target specific named companies' employees by job title/function.

**Q:** Minimum LinkedIn Account List size?
**A:** 1,000+ accounts (match rate is ~50-70%).

**Q:** What are Conversation Ads on LinkedIn?
**A:** Interactive multi-step sponsored InMails with buttons that trigger next messages.

**Q:** Why use cost-per-deal (not CPC) to evaluate LinkedIn vs Meta?
**A:** LinkedIn CPCs are 5-10x higher BUT leads convert to closed-won at much higher rates. Compare the right metric.

**Q:** What is Sales Navigator?
**A:** LinkedIn's premium ABM tool for sales teams ($99/seat), builds prospect lists, maps account committees, integrates with CRM.

---

## 📦 SECTION 6: Programmatic + Retargeting

**Q:** What is a DSP?
**A:** Demand-Side Platform, where advertisers buy programmatic ad inventory.

**Q:** What is an SSP?
**A:** Supply-Side Platform, where publishers sell their inventory.

**Q:** What's the largest independent DSP?
**A:** The Trade Desk (TTD).

**Q:** What's DV360?
**A:** Display & Video 360, Google's enterprise programmatic DSP, part of Google Marketing Platform.

**Q:** Which DSP specializes in dynamic product retargeting for DTC?
**A:** Criteo.

**Q:** What does a CDP do?
**A:** Customer Data Platform, unifies customer data and syncs audiences to ad platforms in real time.

**Q:** Recommended frequency cap per user per day?
**A:** 3 impressions.

**Q:** Casper's retargeting funnel runs over how many days?
**A:** 14 days (day 15 = exclude from retargeting).

**Q:** Average DTC customer brand touches before buying (2024 research)?
**A:** 25-30 touches.

**Q:** What is MFA?
**A:** Made-For-Advertising sites, low-quality sites built only to harvest ad spend. ANA 2024: ~20% of open-web display waste.

**Q:** What is IVT?
**A:** Invalid Traffic, bots, fraud, non-human. GIVT = general bots; SIVT = sophisticated bots.

**Q:** What do DoubleVerify and IAS do?
**A:** Industry-standard ad verification, fraud detection, viewability, brand safety.

**Q:** What does CTV stand for?
**A:** Connected TV, programmatic streaming inventory (Hulu, Disney+, Roku, etc.).

---

## 📦 SECTION 7: CRO + Landing Pages

**Q:** What are the 4 stages of the CRO cycle?
**A:** Observe, Hypothesize, Test, Iterate.

**Q:** What does p < 0.05 mean in Frequentist A/B testing?
**A:** Less than 5% probability of seeing this data if there were no real effect. NOT "95% chance treatment is better."

**Q:** What does Bayesian A/B testing output?
**A:** A "probability the treatment is better" statement (e.g., 92% chance).

**Q:** What is MDE in A/B testing?
**A:** Minimum Detectable Effect, the smallest relative lift you want to detect.

**Q:** What is statistical power?
**A:** The probability of detecting an effect IF it exists. Typically 0.80.

**Q:** Mutiny's specialty?
**A:** B2B website personalization via reverse-IP detection, personalizes copy by visitor's company.

**Q:** What does Unbounce Smart Traffic do?
**A:** Uses ML to route each visitor to the variant most likely to convert them.

**Q:** Microsoft Clarity vs Hotjar?
**A:** Clarity is FREE with unlimited sessions; Hotjar's core features are the same but paid above the free tier.

**Q:** Booking.com's reported A/B test outcome split?
**A:** ~10% positive, ~70% neutral, ~20% NEGATIVE (would have hurt the business).

**Q:** Above what form-field count does conversion drop sharply?
**A:** Above 5 fields. Each field after 5 reduces conversion ~5-10%.

**Q:** Realistic conversion lift from moving CTA above the fold?
**A:** 10-30%.

---

## 📦 SECTION 8: AI Content Production

**Q:** What are the 4 stages of the AI content production pipeline?
**A:** Strategy → Generation → Refinement → Distribution.

**Q:** Best AI model for long-form brand content in 2026?
**A:** Claude Sonnet 4.6.

**Q:** Best AI model for multimodal tasks (paste image, get copy)?
**A:** Gemini 2.5 Pro.

**Q:** What does Midjourney's `--cref` parameter do?
**A:** Character reference, maintains consistent person across multiple images.

**Q:** What does Midjourney's `--sref` parameter do?
**A:** Style reference, mimics a reference image's aesthetic without copying its content.

**Q:** Can Midjourney v7 render text well inside images?
**A:** Still no, use Canva/Figma for text overlays.

**Q:** Runway Gen-4 specs?
**A:** Up to 4K resolution, ~10 seconds max, text-to-video and image-to-video.

**Q:** What is HeyGen used for?
**A:** AI avatar talking-head videos, multi-language with lip sync.

**Q:** What is ElevenLabs Multilingual v3 used for?
**A:** Voice generation and cloning in 30+ languages with consistent voice character.

**Q:** Make.com vs Zapier vs n8n, cheapest at 10K+ ops/mo?
**A:** n8n self-hosted (free + compute costs).

**Q:** US Copyright Office's 2024 position on AI-generated work?
**A:** NOT copyrightable on its own. Significant human modifications can be copyrighted.

**Q:** What does the EU AI Act (2026) require for AI ads?
**A:** Disclosure of AI deepfakes / synthetic likeness in advertising.

**Q:** Typical monthly cost of a solo marketer's full AI stack?
**A:** ~$180/month (Claude + ChatGPT + MJ + Runway + HeyGen + ElevenLabs + Make + Canva).

**Q:** Most common AI content production mistake?
**A:** Single-shotting complex outputs instead of staging the pipeline (script → storyboard → animate → voice → stitch).

---

## 📦 SECTION 9: Marketing Automation + AI Agents

**Q:** Universal automation model?
**A:** Trigger → Condition → Action.

**Q:** Best automation platform for DTC ecom Shopify store?
**A:** Klaviyo.

**Q:** Best automation platform for B2B SaaS / content marketing?
**A:** HubSpot.

**Q:** What's HubSpot's automation engine called?
**A:** Workflows.

**Q:** What's Klaviyo's automation engine called?
**A:** Flows.

**Q:** Name the 7 must-have Klaviyo Flows.
**A:** Welcome, Abandoned Cart, Abandoned Browse, Post-Purchase, Win-Back, Birthday, Replenishment.

**Q:** When should the first email of an Abandoned Cart flow fire?
**A:** ~1 hour after cart abandonment.

**Q:** Typical abandoned cart recovery rate with a well-built flow?
**A:** 6-12% (Klaviyo 2024 benchmark).

**Q:** Speed-to-lead impact (HBR research) of contacting within 5 minutes vs hours?
**A:** 3-10x higher conversion rate.

**Q:** What is LLM "tool use"?
**A:** The LLM's ability to call functions/APIs to take actions in the world (vs just generating text).

**Q:** What's a webhook?
**A:** A URL that receives an HTTP POST when an event happens in another app.

**Q:** What are SPF, DKIM, and DMARC?
**A:** Email authentication standards required for good deliverability.

**Q:** What did Gmail/Yahoo's 2024 bulk sender rules require?
**A:** SPF + DKIM + DMARC configured, easy one-click unsubscribe, spam complaint rate < 0.3%.

**Q:** Drift's automation case study showed sales cycle reduction by approximately?
**A:** 38% (from 67 days to ~42 days).

---

## 📦 SECTION 10: Capstone Process

**Q:** Standard capstone budget split?
**A:** $100 Google Search + $100 Meta Reels = $200 total.

**Q:** Minimum capstone runtime?
**A:** 14-21 days. 7 days is not enough.

**Q:** Day 1 of capstone, what do you produce first?
**A:** The campaign brief (creative + media brief).

**Q:** First 5 days post-launch, what's the rule?
**A:** Daily CHECK only. No edits. Smart Bidding and Meta's learning phase need uninterrupted data.

**Q:** What are the 4 capstone deliverables?
**A:** Brief + Daily Log + Final Report + Lessons-Learned Blog Post.

**Q:** Daily ops routine duration?
**A:** 15 minutes, 5 min Google, 5 min Meta, 5 min conversion check.

**Q:** Honest framing if you only have 5 conversions at end of 14 days?
**A:** "I had only 5 conversions; statistical significance is impossible with this sample, numbers have wide error bars."

**Q:** Which real cert exam is the easiest first win after the capstone?
**A:** Google Ads Search Certification, free, 50 questions, 75 minutes, 80% pass mark, on Skillshop.

**Q:** Number of dimensions in the capstone grading rubric?
**A:** 8 (Brief, Tracking, Creative, Structure, Launch, Optimization, Measurement, Post-Mortem).

**Q:** Target rubric score for portfolio-grade capstone?
**A:** 80+ out of 100.

---

## 🎯 STUDY TIPS

- Set up the deck in Anki for spaced repetition
- Filter by section when reviewing a specific module
- Mark cards "Got it" only when you can recite the answer cold
- Reset progress before the Final Mock Exam to re-confirm mastery
- Review the deck again the morning of any real cert exam

---

## ✅ BEFORE THE EXAM

- Confirm you've taken Practice Exam 1, Practice Exam 2, and Final Mock at least once
- Score 75%+ on Final Mock
- Run your real capstone (or have it in progress)
- Schedule the real cert exam ONLY after these are done
