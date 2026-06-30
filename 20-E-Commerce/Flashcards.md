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
  var STORAGE_KEY = 'certhub-flashcards-ecommerce';
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

# 🃏 E-Commerce Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Use the widget above to flip, shuffle, mark known, and filter by section. Aim for daily review until the real cert exam.

---

## 📦 SECTION 1: BUSINESS MODELS & UNIT ECONOMICS

**Q:** Define DTC (Direct-to-Consumer) e-commerce.
**A:** A model where the brand sells directly to the end customer through its own digital storefront, owning the customer relationship, data, and margin instead of routing through wholesale or marketplaces.

**Q:** What are the four foundational unit-economics metrics for an e-commerce business?
**A:** AOV (Average Order Value), CAC (Customer Acquisition Cost), Contribution Margin (revenue minus variable cost), and CLV (Customer Lifetime Value).

**Q:** What is the "Bezos 1997 Day-1 doctrine"?
**A:** Jeff Bezos's 1997 Shareholder Letter principle, always operate as a Day-1 startup: customer obsession, high-velocity decision-making, willingness to be misunderstood, and embrace external trends. Codified at Amazon as a permanent operating principle.

**Q:** Peter Fader's *Customer Centricity* (2012), what is the core argument?
**A:** Not all customers are equal; allocate disproportionate marketing investment to the highest-CLV customers ("the heavy half") rather than treating all customers as equal. CLV is the metric, not market share.

**Q:** What is the Long Tail (Anderson 2006, Brynjolfsson 2003)?
**A:** Online retailers can profitably serve niche demand that physical retail can't, because shelf space is effectively unlimited. The aggregated demand of millions of low-volume SKUs can exceed the demand from the top hits.

**Q:** Define CLV and the simplest formula.
**A:** Customer Lifetime Value, the total profit a customer generates over their lifetime with the brand. Simple formula: AOV × Purchase Frequency × Customer Lifespan × Gross Margin %.

**Q:** What is a healthy CLV:CAC ratio for a DTC brand?
**A:** 3:1 is the standard target. Below 1:1 you're losing money on each customer; above 5:1 you may be under-investing in growth.

**Q:** What is "payback period" in DTC?
**A:** The number of months between customer acquisition and recovering the CAC through contribution margin. Healthy DTC: 6-12 months. Subscription/CPG repeat: 1-3 months. Furniture/jewelry: 12-24 months.

**Q:** Define Marketplace (vs DTC).
**A:** A marketplace (Amazon, Etsy, eBay, Walmart) is a platform that aggregates many sellers; the platform owns the customer relationship and takes a fee per transaction.

**Q:** What's the difference between B2C and B2B e-commerce in pricing display?
**A:** B2C shows tax-inclusive (in most regions) and one price for all buyers. B2B shows tax-exclusive, supports negotiated price lists, customer-specific catalogs, and quote-to-cash workflows.

---

## 🏗️ SECTION 2: STOREFRONT PLATFORMS

**Q:** What is the difference between "monolithic" and "headless" commerce?
**A:** Monolithic = one platform owns both the storefront (presentation) and the commerce engine (cart, catalog, checkout). Headless = a decoupled architecture where any frontend can call commerce APIs.

**Q:** What does MACH stand for?
**A:** Microservices, API-first, Cloud-native, Headless, the architectural principles championed by the MACH Alliance for modern composable commerce.

**Q:** Shopify vs Adobe Commerce, when to pick each.
**A:** Shopify: faster time-to-launch, lower TCO, best for D2C up to mid-market, opinionated stack. Adobe Commerce: complex B2B + B2C catalogs, deep customization, multi-store enterprise needs, but higher engineering cost.

**Q:** What is Shopify Hydrogen?
**A:** Shopify's React-based headless storefront framework (launched 2021, GA 2023). Pairs with Oxygen (Shopify's hosting for Hydrogen) and Storefront API.

**Q:** Name three Salesforce B2C Commerce Cloud differentiators.
**A:** Einstein AI personalization, OCAPI/SCAPI APIs, deep Salesforce CRM/Marketing Cloud integration; positioned for enterprise B2C at $100M+ GMV.

**Q:** What is BigCommerce's typical sweet spot?
**A:** Mid-market merchants ($1M-$100M GMV) wanting native multi-storefront, multi-channel feeds, and no transaction fees on top of payments, without Adobe Commerce engineering complexity.

**Q:** What does the Shopify Polaris design system govern?
**A:** Polaris is Shopify's design system covering component library, content guidelines, accessibility, and merchant-facing UX patterns, used by Shopify itself and required for Shopify App Store apps.

---

## 📚 SECTION 3: PIM & CATALOG

**Q:** Define PIM (Product Information Management).
**A:** A central system of record for product data attributes, variants, media, translations, channel-specific overrides that syndicates clean data to storefronts, marketplaces, ads, and print.

**Q:** What is GTIN and why does it matter for Google Shopping?
**A:** Global Trade Item Number, the umbrella term for UPC, EAN, ISBN. Google Merchant Center requires GTIN for branded products; missing GTINs hurt visibility and trigger feed disapprovals.

**Q:** What does Akeneo specialize in?
**A:** Open-source PIM (community edition free) with strong attribute governance, multi-locale support, and a vibrant ecosystem of connectors to Shopify, Magento, Amazon, and Salesforce.

**Q:** What is a "variant" vs a "product" in catalog terms?
**A:** A product is the conceptual SKU group (e.g., "Allbirds Wool Runner"); variants are the orderable SKUs differing on attributes like size and color. Each variant has its own GTIN, price, and inventory.

**Q:** Define GS1 standards.
**A:** GS1 is the global non-profit standards body for product identification (GTIN, GLN, SSCC), maintaining the barcode and digital-link standards used in retail worldwide.

**Q:** What is "merchandising" in e-commerce ops?
**A:** The active curation of which products appear where collection sequencing, "featured" tags, search result ranking, promotional placements to drive both discoverability and margin.

---

## 💳 SECTION 4: PAYMENTS, TAX & FRAUD

**Q:** What is PCI-DSS v4.0?
**A:** Payment Card Industry Data Security Standard, version 4.0 (released 2022, mandatory March 2025). Governs how cardholder data is stored, processed, and transmitted. Levels 1-4 based on annual transaction volume.

**Q:** Define SCA / 3DS2.
**A:** Strong Customer Authentication (PSD2 regulation in EU/UK) requires two-factor verification on most card-not-present transactions. 3DS2 (3-D Secure 2.x) is the protocol that delivers SCA via the card networks.

**Q:** What did South Dakota v. Wayfair (2018) change for US sales tax?
**A:** The US Supreme Court overturned Quill (1992), establishing that states can require remote sellers to collect sales tax based on economic nexus (typically $100K in sales or 200 transactions annually), not just physical presence.

**Q:** What is EU VAT MOSS / IOSS?
**A:** VAT MOSS (now One Stop Shop, OSS, since July 2021) lets sellers register once and remit VAT across all 27 EU states. IOSS (Import One Stop Shop) covers low-value goods (≤€150) imported into the EU.

**Q:** Define "chargeback" and the merchant's exposure.
**A:** When a cardholder disputes a transaction, the issuer reverses funds. The merchant loses the sale, the goods, and a chargeback fee ($15-$25). Chargeback ratios > 1% trigger Visa/Mastercard monitoring programs.

**Q:** Stripe Radar vs Signifyd vs Kount.
**A:** Stripe Radar = native to Stripe, rules + ML, free tier. Signifyd = chargeback guarantee (insurance model). Kount (Equifax) = enterprise rules + device intelligence + multi-acquirer.

**Q:** What is BNPL and which platforms dominate?
**A:** Buy Now Pay Later, installment payments at checkout. Major players: Klarna, Affirm, Afterpay (Square), PayPal Pay-in-4. UK FCA imposed regulatory oversight on Klarna in 2024.

---

## 🚚 SECTION 5: FULFILLMENT & LOGISTICS

**Q:** Define 3PL.
**A:** Third-Party Logistics provider, outsourced fulfillment partner that handles receiving, storage, pick-pack, shipping, and returns. Examples: ShipBob, Shipmonk, Deliverr.

**Q:** FBA vs FBM on Amazon, what's the trade-off?
**A:** FBA (Fulfilled by Amazon) = Amazon stores and ships; Prime-eligible, higher fees (~15% + storage). FBM (Fulfilled by Merchant) = seller ships; lower fees but no Prime badge, harder to win Buy Box.

**Q:** What is Amazon's Buy with Prime?
**A:** Amazon-fulfilled order option for non-Amazon storefronts (launched 2022, opened to Shopify 2024). Shoppers see the Prime badge on the DTC site and Amazon handles delivery.

**Q:** Define WMS vs OMS.
**A:** WMS (Warehouse Management System) controls physical operations inside the warehouse receiving, putaway, picking, packing. OMS (Order Management System) is the upstream brain routing orders to fulfillment centers, splitting orders, managing inventory commits.

**Q:** What is "split shipment" risk in a multi-warehouse network?
**A:** When a single order is shipped from multiple warehouses, costs go up and customer experience suffers. OMS routing logic should optimize to single-location fulfillment when possible.

**Q:** Why is returns a profit center, not just an expense?
**A:** Returns retain customers (lift retention 20-50% per Loop Returns 2024 data), recover inventory value, and surface product-data issues. Brands that invest in returns UX (Happy Returns, Loop) see higher repurchase rates.

---

## 🎯 SECTION 6: CRO & UX

**Q:** What is the standard CRO test cycle?
**A:** Observe (analytics + heatmaps + session replays) → Hypothesize → Design test variant → Calculate sample size → Run test → Analyze with statistical discipline → Ship winner or kill.

**Q:** What is "statistical power" in A/B testing?
**A:** Power (1-β) is the probability of detecting a real effect if it exists. Standard target: 80% power at p < 0.05. Underpowered tests miss real wins; overpowered tests waste traffic.

**Q:** Kohavi/Tang/Xu (2020), what is sample-ratio mismatch (SRM)?
**A:** When the actual traffic split (e.g., 50.4% / 49.6%) deviates from the planned split, indicating a bug in randomization. SRM invalidates the test; never proceed if SRM is detected.

**Q:** What are Core Web Vitals?
**A:** Google's UX metric trio: LCP (Largest Contentful Paint, ≤2.5s), INP (Interaction to Next Paint, ≤200ms, replaced FID March 2024), CLS (Cumulative Layout Shift, ≤0.1). Affect SEO ranking.

**Q:** What is a guard-rail metric in experimentation?
**A:** A metric that, if hurt by the variant, blocks the launch even if the primary metric improves. Common guard-rails: page load time, error rate, customer support tickets.

---

## 📢 SECTION 7: PAID ACQUISITION

**Q:** What is Google Performance Max?
**A:** Google's AI-driven cross-surface campaign type (Search, Display, YouTube, Discover, Gmail, Maps). Replaced Smart Shopping in 2022 for retail; uses asset groups + audience signals.

**Q:** What is Meta Advantage+ Shopping Campaigns (ASC)?
**A:** Meta's AI-driven retail campaign type (launched 2022). Auto-targets across audiences using catalog + Pixel + CAPI signals. ECB (Existing Customer Budget) cap controls new vs returning split.

**Q:** What happened on April 26, 2021 with Apple ATT?
**A:** Apple launched App Tracking Transparency in iOS 14.5. Users had to opt-in to cross-app tracking. ~70-80% opted out, breaking Meta Pixel for iOS and costing Meta $10B+ in 2022 revenue.

**Q:** What is Amazon Sponsored Products vs Sponsored Brands vs Sponsored Display?
**A:** Sponsored Products = keyword/ASIN-targeted CPC ads in search results. Sponsored Brands = banner ads with logo + multi-product carousels. Sponsored Display = audience-based retargeting on/off Amazon.

**Q:** TikTok Shop launched in the US in:
**A:** September 2023, partnering with creators for in-app shopping; ramped significantly through 2024 and ranks among the fastest-growing channels for emerging DTC brands.

---

## 🔍 SECTION 8: SEO, CONTENT & LIFECYCLE

**Q:** What are the three SEO templates that matter most for e-commerce?
**A:** PDP (Product Detail Page), Collection/Category page, and the Buying-Guide / Blog article. Each demands distinct schema (Product, ItemList, Article) and distinct content patterns.

**Q:** Define Klaviyo's seven foundational flows.
**A:** Welcome Series, Abandoned Cart, Browse Abandonment, Post-Purchase, Win-Back, Birthday, and Replenishment (subscription-style).

**Q:** What is a "win-back" flow?
**A:** An automated email/SMS sequence targeting lapsed customers (typically 90-180 days post-last-purchase) with an incentive to return. Typical win-back rates: 10-15% for DTC.

**Q:** What does Yotpo do?
**A:** Yotpo is a unified UGC + reviews + loyalty + SMS platform; acquired Trustpilot competitors and expanded into a full retention stack. Competitors: Okendo, Junip, Stamped, Loox.

**Q:** Brian Dean's "Skyscraper Technique" applied to e-commerce.
**A:** Find a top-ranking buying guide for your keyword, build a 10x better version with more depth, better data, and original imagery, then pitch backlinks. Used heavily by REI and Wirecutter.

---

## 📊 SECTION 9: ANALYTICS & ATTRIBUTION

**Q:** What replaced Universal Analytics in July 2023?
**A:** Google Analytics 4 (GA4). Event-based model, BigQuery export free, but the transition broke historical comparison and triggered widespread attribution chaos (Airbnb famously reported a 17% revenue gap).

**Q:** Define MMM, MTA, and incrementality.
**A:** MMM (Marketing Mix Modeling) = econometric top-down attribution. MTA (Multi-Touch Attribution) = bottom-up user-level path analysis. Incrementality testing = controlled holdouts measuring the lift caused by a channel.

**Q:** Three primary GA4 e-commerce events.
**A:** `view_item`, `add_to_cart`, `purchase`, plus `begin_checkout`, `add_payment_info`, `add_shipping_info`. Each requires the GA4 e-commerce parameters (items, currency, value).

**Q:** Triple Whale vs Northbeam vs Rockerbox.
**A:** Triple Whale = DTC-native, Shopify-first, easiest UI. Northbeam = data-warehouse-grade, custom attribution models. Rockerbox = enterprise, deep MMM + MTA hybrid, owned by Cross Screen Media.

**Q:** What did Walmart announce in 2023-2024 about its measurement stack?
**A:** Walmart revived MMM-led attribution alongside MTA, citing cookie deprecation. The "MMM revival" became an industry-wide pattern (Procter & Gamble, Mondelez, Anheuser-Busch InBev all followed).

---

## 🌍 SECTION 10: CROSS-BORDER & B2B

**Q:** What is IOSS and when did it launch?
**A:** Import One Stop Shop, launched July 1, 2021. Lets non-EU sellers register once to collect EU VAT at checkout on shipments ≤€150, avoiding the customs-clearance friction that crushes conversion.

**Q:** Define DDP vs DAP shipping.
**A:** DDP (Delivered Duty Paid) = seller pays duties + VAT, customer sees one all-in price (better conversion). DAP (Delivered at Place) = customer pays duties on delivery (cheaper for seller, worse conversion).

**Q:** What does "composable commerce" mean per the MACH Alliance?
**A:** An architecture where best-of-breed services (catalog, search, cart, payments, CMS) are composed via APIs into a custom storefront, replacing monolithic suites.

**Q:** Three established composable commerce vendors.
**A:** commercetools (cart/checkout engine), Algolia (search), Contentful or Sanity (CMS), Stripe (payments), Vue Storefront or Hydrogen (frontend).

**Q:** What's the EU Digital Services Act (DSA)?
**A:** Regulation effective February 2024, applies to online marketplaces and "very large online platforms" (>45M EU users). Mandates illegal-content removal, ad transparency, and seller verification.

**Q:** Shein's regulatory pushback in 2024 stemmed from what?
**A:** EU classified Shein as a Very Large Online Platform (DSA tier), launched probes into product safety, hazardous-chemical content, and IP infringement. France passed a "fast-fashion law" specifically targeting Shein and Temu.

**Q:** Procter & Gamble's e-B2B transformation (2020-2024) centered on what?
**A:** A direct-to-retailer B2B portal that gave independent grocers and SMB retailers self-serve ordering, replacing high-friction wholesale distributor relationships and gaining first-party data.

---

## 🎓 STUDY TIPS

- Drill these daily for the final 14 days before any exam.
- Use the **All Sections** filter for full-deck review; switch to a single section when targeting a weak area.
- Mark cards "Got it" only when you can recite the answer from memory in under 5 seconds.
- Practice exams catch what flashcards miss, pair both.

---

## 📅 BEFORE THE EXAM

- Re-read the **MEMORIZE THIS** callouts in every module's Reading.md.
- Skim the per-module Cheat-Sheet.md for the 10 tables you'll need on the day.
- Take the Final-Mock-Exam under timed conditions the day before your real exam.

Good luck. The numbers move when you move them. 🛒
