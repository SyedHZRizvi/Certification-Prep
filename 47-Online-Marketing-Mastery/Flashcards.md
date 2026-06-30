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
  var STORAGE_KEY = 'fc-progress-online-marketing-mastery';
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

# 🃏 Online Marketing Mastery Master Flashcards

> **How to use:** Each card has a Q on one line and A on the next. Use the widget above to study; or copy into Anki, Quizlet, or paper. Aim for daily review until the real exam.

---

## Module 1: Digital Marketing Strategy Fundamentals

**Q:** What does RACE stand for, and what is its purpose in digital marketing?
**A:** RACE stands for Reach, Act, Convert, Engage. It is a practical planning framework that maps the full customer lifecycle from first awareness through to long-term loyalty, helping marketers allocate budget and set KPIs at each stage.

**Q:** What are the six components of the SOSTAC planning model?
**A:** Situation analysis, Objectives, Strategy, Tactics, Actions, and Control. Created by PR Smith, SOSTAC provides a structured sequence for building any marketing plan, ensuring teams audit the current state before committing to execution.

**Q:** What do TOFU, MOFU, and BOFU represent, and why does content differ at each stage?
**A:** Top of Funnel (awareness), Middle of Funnel (consideration), and Bottom of Funnel (decision). Audience intent and readiness to buy increase as prospects move downward, so content shifts from broad educational material (TOFU) to comparisons and case studies (MOFU) to offers and demos (BOFU).

**Q:** How is CAC (Customer Acquisition Cost) calculated, and what does a rising CAC indicate?
**A:** CAC = Total marketing and sales spend divided by the number of new customers acquired in the same period. A rising CAC signals declining channel efficiency, audience saturation, or increasing competition and warrants a review of targeting, creative, or channel mix.

**Q:** What is LTV (Lifetime Value) and why is the LTV:CAC ratio important?
**A:** LTV is the total net revenue a business expects from a customer over the entire relationship. The LTV:CAC ratio benchmarks sustainability — a ratio below 3:1 often indicates the business is spending too much to acquire customers relative to what they return.

**Q:** How is ROAS (Return on Ad Spend) defined, and how does it differ from ROI (Return on Investment)?
**A:** Return on Ad Spend = Revenue generated by ads divided by ad spend. Unlike ROI, ROAS does not account for cost of goods, margins, or operational costs, making it a channel-efficiency metric rather than a true profitability measure.

**Q:** What is an attribution model, and name three common types?
**A:** An attribution model defines how credit for a conversion is distributed across the touchpoints in a customer journey. Common types include Last Click (all credit to the final touchpoint), First Click (all credit to the first), and Data-Driven (credit distributed algorithmically based on actual conversion paths).

**Q:** Distinguish between owned, earned, and paid media with one example of each.
**A:** Owned media is controlled by the brand (e.g., company website or email list). Earned media is organic third-party exposure (e.g., press coverage or word-of-mouth shares). Paid media involves direct spend to reach audiences (e.g., Google Search Ads or Meta campaigns).

## Module 2: Google Search Ads

**Q:** What three factors determine Google Ads Quality Score, and what score range is used?
**A:** Quality Score is determined by Expected Click-Through Rate, Ad Relevance, and Landing Page Experience, each rated below average, average, or above average. The composite score runs from 1 to 10 and directly influences Ad Rank and cost-per-click.

**Q:** How is Ad Rank calculated in Google Search Ads?
**A:** Ad Rank = Max CPC (Cost Per Click) Bid x Quality Score x expected impact of ad extensions and formats. Google recalculates Ad Rank in every auction, so a high-quality-score advertiser can outrank a higher-bidding competitor while paying less per click.

**Q:** Name the three active Google Ads keyword match types and describe how each controls query matching.
**A:** Broad Match triggers ads on queries Google deems related, including synonyms and related searches. Phrase Match triggers ads when the query contains the keyword's meaning in order. Exact Match triggers ads only when the query matches the keyword meaning closely with little variation.

**Q:** What are negative keywords and why are they critical for Search campaign efficiency?
**A:** Negative keywords are terms added to a campaign or ad group to prevent ads from showing on irrelevant queries. Applying them reduces wasted spend, improves CTR (Click-Through Rate), and raises Quality Score by tightening the relevance between queries, ads, and landing pages.

**Q:** How do Responsive Search Ads work, and what is the maximum number of headlines and descriptions you can provide?
**A:** RSAs allow advertisers to supply up to 15 headlines and 4 descriptions; Google's machine learning tests combinations and serves the mix most likely to convert for each query and user context. Pinning a headline or description to a fixed position overrides automated rotation for that slot.

**Q:** What is Google Ads conversion tracking and what code does it require?
**A:** Conversion tracking records actions users take after clicking an ad — such as purchases, form fills, or calls — and reports them back to Google Ads. It requires placing a global site tag (gtag.js) or using Google Tag Manager, plus an event snippet on the confirmation/thank-you page.

**Q:** What is Smart Bidding and name three Smart Bidding strategies?
**A:** Smart Bidding uses Google's machine learning to set bids automatically at auction time based on signals like device, location, time, and audience. Strategies include Target CPA, Target ROAS, and Maximize Conversions (with or without a target CPA cap).

**Q:** How is CPA calculated and how does it relate to Target CPA bidding?
**A:** CPA = Total ad spend divided by the number of conversions. In Target CPA bidding, Google optimises bids to achieve the advertiser's specified average CPA, spending more on high-probability auctions and less on low-probability ones to hit that target over time.

## Module 3: Google Analytics 4

**Q:** How does GA4's data model differ from Universal Analytics?
**A:** GA4 is built entirely on an event-based model — every user interaction, including page views and sessions, is recorded as an event with associated parameters. Universal Analytics used a hit-type model (pageview, event, transaction) with separate schema, making GA4 more flexible for cross-platform tracking.

**Q:** What are the four event categories in GA4?
**A:** Automatically collected events (fired by default with the GA4 tag), Enhanced Measurement events (scroll, outbound click, file download — enabled in settings), Recommended events (Google-defined names for common actions like  0 ), and Custom events (user-defined for anything not covered by the above).

**Q:** What is Google Consent Mode v2 and why was it required by March 2024 for EEA advertisers?
**A:** Consent Mode v2 is a Google framework that adjusts how tags behave based on a user's consent choices — when consent is denied, tags send cookieless pings that Google uses for modelled conversions and audience modelling. From March 2024, EEA advertisers using Google Ads or GA4 must implement v2 (including the new  1  and  2  parameters) to retain full remarketing and conversion reporting capabilities.

**Q:** What is the default attribution model in GA4 and what did it replace?
**A:** GA4 defaults to Data-Driven Attribution (DDA), which uses machine learning to distribute conversion credit across touchpoints based on each channel's actual contribution. It replaced the previous Last Non-Direct Click default used in Universal Analytics.

**Q:** What is the Explorations section in GA4 and give two report types available there?
**A:** Explorations is GA4's advanced analysis workspace for custom, ad hoc reports beyond the standard reports. Available techniques include Funnel Exploration (visualising step-by-step drop-off) and Path Exploration (showing sequences of events users take before or after a key action).

**Q:** How are GA4 audiences used and what is the minimum membership duration?
**A:** GA4 audiences are segments of users defined by event behaviour, demographics, or predictive signals, which can be published directly to Google Ads for remarketing or used for comparative analysis in reports. The minimum audience membership duration is 1 day and the maximum is 540 days.

**Q:** What does E-E-A-T stand for and how does it relate to SEO (Search Engine Optimization) and GA4 content quality signals?
**A:** E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness — Google's quality rater guidelines criteria for evaluating content quality. While not a direct ranking signal, pages that demonstrate E-E-A-T tend to attract more backlinks, lower bounce rates, and stronger engagement metrics that GA4 surfaces and that correlate with better organic rankings.

**Q:** What is GA4 DebugView used for?
**A:** DebugView is a real-time diagnostic tool in the GA4 interface that shows events firing from a device or browser where `debug_mode` is enabled. It allows tag implementers to verify event names, parameters, and timing before pushing tracking live to production.

## Module 4: Google My Business & Local Marketing

**Q:** What is a Google Business Profile and why is it foundational to local SEO?
**A:** A Google Business Profile (formerly Google My Business) is a free listing that appears in Google Search and Google Maps for local queries. Verified and optimised profiles increase the likelihood of appearing in the Local Pack (the top 3 map results), which captures a significant share of high-intent local clicks.

**Q:** What are the three primary factors Google uses to rank businesses in the Local Pack?
**A:** Relevance (how well the profile matches the search intent), Distance (proximity of the business to the searcher or the searched location), and Prominence (how well-known the business is based on links, reviews, and citations). All three must be addressed in a local SEO strategy.

**Q:** What is NAP consistency and why does it matter for local search rankings?
**A:** NAP stands for Name, Address, and Phone number. Google cross-references a business's NAP data across its website, GBP, and third-party directories (citations); inconsistencies create trust signals that can suppress local rankings and confuse potential customers.

**Q:** How do customer reviews affect local ranking, and what best practice applies to responding to negative reviews?
**A:** Review quantity, recency, and star rating are strong local ranking signals; regular new reviews signal that the business is active and trusted. For negative reviews, best practice is to respond promptly, acknowledge the experience without admitting unverifiable fault, and offer to resolve the issue offline — demonstrating customer care to future readers.

**Q:** What are Google Posts and how long do standard posts remain visible?
**A:** Google Posts are short content updates (offers, events, product highlights) published directly on a Google Business Profile and visible in search results and Maps. Standard What's New posts expire after 7 days; Event posts remain until the event date, and Offer posts remain until the specified offer end date.

**Q:** How do Local Service Ads differ from standard Google Search Ads?
**A:** Local Service Ads appear above Search Ads, show a Google Guaranteed or Google Screened badge, and charge on a per-lead basis rather than per click. Eligibility requires passing background checks, licensing verification, and insurance checks, making them particularly effective for service-based businesses targeting high-intent local queries.

## Module 5: Amazon Sponsored Advertising

**Q:** How is ACoS (Advertising Cost of Sale) calculated and what does a low ACoS indicate?
**A:** ACoS = Ad Spend divided by Ad-Attributed Revenue, expressed as a percentage. A low ACoS means the campaign is generating revenue efficiently relative to spend; whether a specific ACoS is acceptable depends on the product's profit margin — break-even ACoS equals the net margin percentage.

**Q:** How does TACoS (Total Advertising Cost of Sale) differ from ACoS and why is it a more strategic metric?
**A:** TACoS = Total Ad Spend divided by Total Revenue (organic + ad-attributed). Because it factors in organic sales, TACoS reveals the true advertising efficiency of a product; a declining TACoS over time indicates that advertising is building organic rank and reducing dependency on paid spend.

**Q:** What are Amazon Sponsored Products and where do they appear?
**A:** Sponsored Products are keyword- or product-targeted CPC ads that display within search results and on product detail pages. They are the most widely used Amazon ad type and are eligible for automatic targeting (Amazon selects keywords) or manual targeting (advertiser selects keywords or ASINs).

**Q:** What is the minimum creative requirement for a Sponsored Brands campaign?
**A:** Sponsored Brands (formerly Headline Search Ads) require a brand logo, a custom headline, and at least three products. They appear as a banner at the top of search results and can link to a Store, a custom landing page, or a product listing.

**Q:** What is the strategic difference between automatic and manual targeting campaigns on Amazon?
**A:** Automatic campaigns let Amazon's algorithm match ads to relevant queries — useful for discovery and harvesting new search term data. Manual campaigns give advertisers control over specific keywords or ASINs and allow bid adjustment by match type; best practice is to run both simultaneously, mining auto-campaign search term reports to promote top performers to manual campaigns.

**Q:** Name Amazon's three keyword match types and describe the key difference between Phrase and Exact.
**A:** Broad Match includes the keyword in any order plus related terms. Phrase Match requires the keyword words to appear in order but allows terms before or after. Exact Match requires the query to match the keyword exactly (with minor plurals/misspellings), providing the tightest control over which queries trigger the ad.

**Q:** What is ASIN (Amazon Standard Identification Number) targeting in Amazon Sponsored Products and when is it strategically used?
**A:** ASIN (product) targeting allows advertisers to show Sponsored Products on specific competitors' or complementary product detail pages. It is used to capture demand from shoppers browsing similar products, defend a brand's own listings, or cross-sell related items.

**Q:** What is Amazon DSP and how does it differ from Sponsored Ads?
**A:** Amazon Demand-Side Platform (DSP) is a programmatic advertising platform allowing advertisers to buy display and video inventory on Amazon-owned sites and third-party publisher sites. Unlike Sponsored Ads (self-serve, CPC, within Amazon search/product pages), DSP uses CPM (Cost Per Mille) pricing, requires a minimum spend commitment, and can reach audiences both on and off Amazon based on Amazon's first-party shopping data.

## Module 6: Amazon Marketplace Strategy

**Q:** What is the Amazon Buy Box and what factors most influence winning it?
**A:** The Buy Box is the primary "Add to Cart" button on a product detail page; winning it means a seller's offer is selected by default. Key factors include competitive pricing, order defect rate, fulfilment method (FBA advantages), shipping speed, seller feedback score, and inventory availability.

**Q:** What are the main trade-offs between Fulfilment by Amazon (FBA) and Fulfilment by Merchant (FBM)?
**A:** FBA (Fulfillment by Amazon) means Amazon warehouses, picks, packs, and ships inventory, improving Buy Box eligibility and enabling Prime badge, but incurs storage and fulfilment fees. FBM (Fulfillment by Merchant) means the seller handles fulfilment, retaining more margin control and flexibility for low-volume or oversized items, but requires achieving Seller-Fulfilled Prime standards to compete at the same level.

**Q:** What is Pan-European FBA and what is its primary benefit?
**A:** Pan-European FBA allows sellers to send inventory to one Amazon fulfilment centre and have Amazon redistribute stock across EU countries (DE, FR, IT, ES, PL, etc.) automatically. The primary benefit is local Prime eligibility across all enrolled marketplaces without separate inventory shipments, though sellers must be VAT-registered in each country where stock is held.

**Q:** What is A+ Content on Amazon and who is eligible to use it?
**A:** A+ Content (formerly Enhanced Brand Content) allows brand-registered sellers to add rich media modules — enhanced images, comparison charts, narrative text — to product detail page description areas. Eligibility requires Amazon Brand Registry enrollment (requiring a registered trademark). A+ Content can improve conversion rates and reduce returns by providing richer product information.

**Q:** What does Amazon Brand Registry provide and what is the core requirement to enrol?
**A:** Brand Registry grants access to A+ Content, Sponsored Brands, Amazon Stores, Brand Analytics, and enhanced intellectual property protections like proactive fraud alerts. The core requirement is an active registered trademark (or pending application in some regions) that matches the brand name on the products.

**Q:** Name five key elements of an optimised Amazon product listing.
**A:** Title (keyword-rich, within character limits), Bullet Points (benefits-led with secondary keywords), Product Description or A+ Content, Backend Search Terms (hidden keywords), and high-quality Images (minimum 1000px on longest side to enable zoom). Competitive pricing and review count also materially impact conversion rate.

**Q:** What is the Amazon Inventory Performance Index and what score threshold is typically required to avoid storage limits?
**A:** IPI is a score (0-1000) that measures how efficiently a seller manages FBA inventory, factoring in excess inventory, sell-through rate, stranded inventory, and in-stock rate. Amazon typically enforces storage limits on accounts with an IPI below 400, though the threshold can vary by period.

**Q:** What is the Amazon Vine Programme and how does it generate reviews?
**A:** Amazon Vine invites trusted reviewers ("Vine Voices") selected by Amazon to receive free units of enrolled products in exchange for honest reviews. Sellers enrolled in Brand Registry can enrol up to 30 units per parent ASIN (free for products with fewer than 30 existing reviews as of 2023 fee changes); reviews cannot be directed or edited by the seller.

## Module 7: Social Media Strategy

**Q:** What does a social media audit involve and why should it precede strategy development?
**A:** A social media audit catalogues all active brand profiles, assesses follower counts, engagement rates, content performance, and posting consistency, and benchmarks against competitors. Auditing first prevents strategy being built on inaccurate assumptions about what is working and identifies which platforms warrant investment vs. discontinuation.

**Q:** What are content pillars in a social media strategy?
**A:** Content pillars are three to five overarching themes or topic categories that define what a brand consistently publishes — for example, Education, Behind the Scenes, Product Showcase, and User-Generated Content. Pillars ensure variety and strategic coherence, making content planning repeatable and aligned to brand values.

**Q:** How is engagement rate calculated on social media and what makes it more meaningful than follower count?
**A:** Engagement Rate = (Total engagements — likes, comments, shares, saves — divided by Reach or Followers) x 100. It measures how actively an audience interacts with content regardless of account size, making it a better indicator of content quality and audience relevance than raw follower count.

**Q:** What is social proof in a digital marketing context and give three examples?
**A:** Social proof is the psychological principle that people look to others' behaviour as evidence of the correct action. Digital examples include customer reviews and star ratings, user-generated content shared by real buyers, and influencer endorsements, all of which reduce perceived purchase risk.

**Q:** What is UGC (User-Generated Content) and what are its primary marketing benefits?
**A:** User-Generated Content is any content — photos, videos, reviews, testimonials — created by customers or fans rather than the brand. Its primary benefits are authenticity (audiences trust peer content over brand content), cost efficiency (free creative asset), and community building that increases brand loyalty.

**Q:** Define the four common influencer tiers by follower count and describe the strategic trade-off between nano/micro and macro/mega influencers.
**A:** Nano (1K-10K), Micro (10K-100K), Macro (100K-1M), and Mega/Celebrity (1M+). Nano and micro influencers typically have higher engagement rates, stronger niche authority, and lower costs, making them efficient for targeted campaigns; macro and mega influencers offer greater reach but lower engagement rates and significantly higher fees.

## Module 8: Meta Advertising

**Q:** Describe the three levels of the Meta Ads campaign structure and what is set at each level.
**A:** Campaign level sets the objective (e.g., Conversions, Reach, Traffic). Ad Set level sets targeting, budget, schedule, placements, and bidding. Ad level contains the creative — headline, copy, image/video, and call-to-action — and is where multiple creative variations are tested.

**Q:** What is a Lookalike Audience on Meta and what is the source requirement?
**A:** A Lookalike Audience is a targeting option where Meta finds users who share statistical similarities with a source audience (e.g., existing customers, website visitors, email list). The source Custom Audience must contain a minimum of 100 users from the same country; larger, higher-quality source audiences (500-1000+) generally produce better lookalikes.

**Q:** What was the impact of iOS 14.5's App Tracking Transparency (ATT) framework on Meta advertising?
**A:** ATT required apps to ask users for permission to track them across apps and websites; a majority of users opted out. This significantly reduced Meta's ability to track conversions via its pixel, shrinking attributable conversion windows, degrading audience quality for retargeting, and reducing the accuracy of campaign reporting — prompting adoption of Conversions API as a server-side solution.

**Q:** What is the Meta Conversions API and why is it recommended alongside the Meta Pixel?
**A:** The Conversions API sends event data directly from a server to Meta, bypassing browser-based tracking limitations caused by ad blockers, cookie restrictions, and iOS ATT. Running it alongside the Pixel in a "redundant" setup (with Event Match Quality deduplication) improves signal fidelity, enabling better campaign optimisation and more accurate attribution.

**Q:** What are Meta Advantage+ Shopping Campaigns and who are they primarily designed for?
**A:** Advantage+ Shopping Campaigns (ASC) use Meta's machine learning to automate most targeting, placement, and creative decisions for e-commerce advertisers. They consolidate prospecting and retargeting into a single campaign, require a product catalogue, and are optimised for purchase events — designed primarily for direct-to-consumer retailers looking to reduce manual campaign management.

**Q:** What is the Meta Pixel and what are standard events?
**A:** The Meta Pixel is a JavaScript snippet placed on a website that tracks user behaviour and sends event data back to Meta for attribution, optimisation, and audience building. Standard events are predefined event names (e.g.,  4 ,  5 ,  6 ) that Meta's algorithm recognises and can optimise delivery toward.

**Q:** Name three types of Custom Audiences available in Meta Ads Manager.
**A:** Website Custom Audiences (built from Pixel or CAPI events), Customer List Custom Audiences (uploaded email or phone data matched to Meta profiles), and Engagement Custom Audiences (users who interacted with a Facebook Page, Instagram profile, video, lead form, or other Meta asset).

**Q:** How does GDPR (General Data Protection Regulation) affect Meta advertising campaigns targeting EEA users?
**A:** GDPR requires a lawful basis for processing personal data used in ad targeting. For behavioural advertising, the required basis is explicit, informed consent. Advertisers must implement a compliant Consent Management Platform (CMP), use Consent Mode to signal user choices to Meta tags, and avoid retargeting users who have not consented to tracking.

## Module 9: LinkedIn Marketing

**Q:** What are the three objective categories in LinkedIn Campaign Manager?
**A:** Awareness (Brand Awareness), Consideration (Website Visits, Engagement, Video Views), and Conversions (Lead Generation, Website Conversions, Job Applicants). Selecting the correct objective is critical because it determines which bidding strategies and ad formats are available.

**Q:** What are LinkedIn Matched Audiences and name two types?
**A:** Matched Audiences allow advertisers to combine LinkedIn's professional data with their own first-party data for targeting. Types include Contact Targeting (uploading a CRM email list to match against LinkedIn profiles), Account Targeting (uploading a list of company names for ABM campaigns), and Website Retargeting (using the LinkedIn Insight Tag to retarget site visitors).

**Q:** What is a LinkedIn Lead Gen Form and what is its primary conversion advantage?
**A:** Lead Gen Forms are native in-app forms attached to Sponsored Content or Message Ads that pre-populate with a user's LinkedIn profile data (name, email, job title, company). Because users do not leave LinkedIn, friction is reduced significantly, resulting in higher conversion rates compared to landing-page-based lead capture.

**Q:** What does the LinkedIn Insight Tag enable beyond website retargeting?
**A:** The Insight Tag also enables Conversion Tracking (attributing website actions to LinkedIn campaigns), Company-Level Demographics reporting (showing which industries, job functions, and company sizes visit the site), and Account-Based Marketing audiences. It should be placed on all pages of the website.

**Q:** What is the key difference between LinkedIn Sponsored Content and Message Ads (Conversation Ads)?
**A:** Sponsored Content appears natively in the LinkedIn feed as single image, carousel, or video ads and is charged on a CPM or CPC basis, reaching a broad defined audience. Message Ads (Conversation Ads) are delivered directly to a user's LinkedIn inbox and are charged on a cost-per-send basis; they enable 1:1 communication but are subject to LinkedIn frequency caps and require GDPR-compliant messaging consent in EEA.

**Q:** What is ABM and why is LinkedIn considered a premier platform for B2B (Business-to-Business) ABM campaigns?
**A:** Account-Based Marketing is a B2B strategy that targets specific high-value companies rather than broad audiences. LinkedIn is premier for ABM because its professional data (company name, size, industry, seniority, job function) enables precise account and role-level targeting, and Account Targeting via uploaded company lists allows direct campaign focus on named accounts in an ICP.

## Module 10: TikTok & YouTube

**Q:** Name three TikTok ad formats and describe one distinguishing feature of each.
**A:** In-Feed Ads appear natively in the For You Page feed and support CTA (Call to Action) buttons. TopView Ads appear as the first content a user sees upon opening TikTok, offering maximum visibility. Branded Hashtag Challenges invite user participation, creating UGC at scale by encouraging community content creation around a branded theme.

**Q:** What are TikTok Spark Ads and why do they often outperform standard In-Feed Ads?
**A:** Spark Ads allow brands to boost existing organic TikTok posts (from their own account or creator accounts with permission) as paid ads, retaining the original engagement (likes, comments, shares). They outperform standard In-Feed Ads because they appear indistinguishable from organic content, carry authentic social proof, and benefit from any existing virality on the post.

**Q:** What is the difference between TrueView In-Stream Skippable and Non-Skippable ads on YouTube?
**A:** TrueView In-Stream Skippable ads can be skipped after 5 seconds; advertisers pay only when a viewer watches 30 seconds (or the full ad if shorter) or interacts with the ad, making it cost-efficient for longer creative. Non-Skippable In-Stream ads (up to 15 seconds) must be watched in full and are charged on a CPM basis, guaranteeing full message delivery but at higher cost-per-viewer.

**Q:** What are the most impactful on-page factors for ranking a YouTube video in search?
**A:** Title (primary keyword near the start), Description (first 150 characters visible without expanding, including keywords and timestamps), Tags (secondary keywords), and Chapters (timestamp markers that enable rich snippet eligibility). Off-page signals include Click-Through Rate from thumbnails, Watch Time, and engagement velocity in the first 24-48 hours.

**Q:** What role does the TikTok Pixel play and why is the TikTok Events API (server-side) increasingly important?
**A:** The TikTok Pixel is a JavaScript tag that tracks website events (page views, add-to-cart, purchases) for attribution and campaign optimisation. The Events API (server-side) sends the same data directly from the advertiser's server to TikTok, complementing the pixel to recover signal lost to browser restrictions and iOS ATT opt-outs, improving measurement accuracy.

**Q:** What key considerations should a brand evaluate before entering a paid creator partnership on TikTok or YouTube?
**A:** Audience alignment (does the creator's demographic match the brand's ICP?), Engagement authenticity (genuine vs. inflated engagement), Content-brand fit (does the creator's tone match brand values?), Disclosure compliance (FTC/ASA #ad labelling requirements), and Exclusivity clauses (whether the creator can work with competitors). Contractual deliverables, usage rights for repurposing content, and performance benchmarks should also be agreed upfront.

## Module 11: Email Marketing & Automation

**Q:** What is double opt-in and why does it support GDPR compliance?
**A:** Double opt-in requires a new subscriber to confirm their email address by clicking a confirmation link sent to their inbox before being added to the marketing list. It provides an auditable consent trail, reduces spam complaints, and ensures the subscriber genuinely controls the email address — all factors supporting the GDPR lawful basis of consent for email marketing.

**Q:** What do SPF, DKIM, and DMARC each do, and why are all three required for email deliverability?
**A:** SPF (Sender Policy Framework) specifies which mail servers are authorised to send on behalf of a domain. DKIM (DomainKeys Identified Mail) adds a cryptographic signature to emails allowing receivers to verify they were not altered in transit. DMARC (Domain-based Message Authentication, Reporting and Conformance) ties SPF and DKIM together by defining what action receivers should take (none, quarantine, reject) when authentication fails and enables reporting back to the domain owner. All three are required because each addresses a different attack vector and major ISPs (Google, Yahoo) mandated alignment from 2024 for bulk senders.

**Q:** What is list hygiene and what are three practices that maintain a healthy email list?
**A:** List hygiene is the ongoing process of keeping an email database accurate and engaged. Key practices include removing hard bounces immediately after they occur, suppressing unsubscribes and spam complaints, running re-engagement campaigns for subscribers inactive beyond a defined threshold (e.g., 90-180 days), and removing non-re-engaged contacts before they damage sender reputation.

**Q:** Name four high-value email automation flows for an e-commerce business and describe the purpose of each.
**A:** Welcome Series (onboards new subscribers, sets brand expectations, often delivers a discount incentive). Abandoned Cart (recovers near-purchasers who left items in cart without buying). Post-Purchase (delivers order confirmation, cross-sells, and requests a review). Win-Back (targets lapsed customers with an incentive after a period of inactivity, either re-engaging or prompting unsubscribe to maintain list quality).

**Q:** What is Click-to-Open Rate (CTOR) and what does it measure differently from Open Rate?
**A:** CTOR = Unique Clicks divided by Unique Opens, expressed as a percentage. While Open Rate measures subject line effectiveness (how many recipients opened the email), CTOR measures body content effectiveness — how compelling the email was for those who actually opened it. A high Open Rate with a low CTOR indicates the subject line over-promised relative to the content.

**Q:** What is email segmentation and name four segmentation criteria commonly used in e-commerce?
**A:** Segmentation divides an email list into groups to send more relevant messages to each group. Common criteria include Purchase History (past category or product buyers), RFM Score (Recency, Frequency, Monetary value), Geographic Location (for localised offers or events), and Engagement Level (active openers vs. dormant subscribers, enabling different messaging strategies per group).

## Module 12: SEO & Content Marketing

**Q:** What are the three Core Web Vitals metrics and their recommended thresholds?
**A:** Largest Contentful Paint (LCP) measures loading performance — target under 2.5 seconds. Interaction to Next Paint (INP, replacing FID from 2024) measures responsiveness — target under 200 milliseconds. Cumulative Layout Shift (CLS) measures visual stability — target under 0.1. Google uses these as page experience ranking signals.

**Q:** What is the hreflang attribute and when must it be implemented?
**A:** hreflang is an HTML or HTTP header attribute that tells Google which language and regional variant of a page to serve to users in specific locales (e.g.,  7  for British English). It must be implemented whenever a site has multiple versions of content targeting different languages or regional audiences to prevent duplicate content penalties and ensure the correct version ranks in the correct country.

**Q:** What is a content cluster model and what are the roles of pillar pages and cluster content?
**A:** A content cluster is a hub-and-spoke SEO architecture where a Pillar Page provides comprehensive coverage of a broad topic (the hub), and Cluster Pages cover related subtopics in depth (the spokes), all internally linked back to the pillar. This structure signals topical authority to search engines, consolidates link equity to the pillar, and creates clear site architecture.

**Q:** Name five critical on-page SEO elements and what each signals to search engines.
**A:** Title Tag (primary keyword signal and SERP snippet headline), Meta Description (influences CTR though not a direct ranking factor), H1 Tag (main topic of the page, should include primary keyword), Internal Links (distribute PageRank and establish topical relationships), and Image Alt Text (describes images for accessibility and provides keyword context for visual content).

**Q:** Why is backlink quality more important than quantity in modern SEO?
**A:** Google's algorithm evaluates links based on the authority, relevance, and trustworthiness of the linking domain, not just volume. A small number of links from highly authoritative, topically relevant domains passes significantly more PageRank and trust than hundreds of links from low-quality or unrelated sites. Toxic links can also trigger manual or algorithmic penalties.

**Q:** What is the difference between crawlability and indexability, and give one way each can be blocked?
**A:** Crawlability refers to whether Googlebot can access and follow a URL — it can be blocked by `robots.txt` disallow rules or server errors (5xx). Indexability refers to whether a crawled page can be added to the Google index — it can be blocked by a `noindex` meta tag or HTTP header, even if the page is fully crawlable.

**Q:** What is schema markup and give two examples of rich result types it can enable?
**A:** Schema markup is structured data (typically JSON-LD format) added to a webpage's HTML that provides explicit signals about the content's meaning to search engines. It can enable rich results such as Review Stars (for product or service pages with  10  schema) and FAQ dropdowns (with  11  schema), improving SERP (Search Engine Results Page) visibility and CTR.

**Q:** What metrics should be tracked to evaluate content marketing ROI, and what is the core challenge in measuring it?
**A:** Key metrics include Organic Traffic growth, Keyword Rankings, Backlinks Earned, On-page Engagement (time on page, scroll depth via GA4), and Assisted Conversions (content-attributed revenue in multi-touch attribution). The core challenge is that content marketing ROI is typically long-lag — organic content can take 6-18 months to rank and compound, making short-term ROI calculations misleading compared to paid channels with immediate attribution.

---

*End of Flashcards — 86 cards across 12 modules.*
