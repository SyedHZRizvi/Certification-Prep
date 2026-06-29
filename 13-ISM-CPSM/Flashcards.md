<style>
.fc-app{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI (User Interface)',Roboto,sans-serif;max-width:760px;margin:1.5rem auto 2.5rem;padding:1.25rem;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(99,102,241,.10),0 2px 6px rgba(0,0,0,.04);border:1px solid #eef0fb;color:#1f2937}
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
  var STORAGE_KEY = 'fc-progress-cpsm';
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

# 🃏 ISM CPSM Master Flashcards

> **How to use:** Each card has a Q on one line and A on the next. The widget above lets you flip, mark known, shuffle, and filter by section. Aim for daily review until all three CPSM exams are passed.

---

## 📜 SECTION 1: FOUNDATIONS & STRATEGY

**Q:** What is the BEST definition of supply management?
**A:** Acquiring goods and services AND managing the supply base to deliver value to internal and external customers, strategic, not transactional.

**Q:** Difference between purchasing, procurement, and supply management?
**A:** Purchasing = transactional act of buying. Procurement = purchasing + selection + contracting. Supply management = strategic end-to-end function including supply-base management for value.

**Q:** Four supply organization models?
**A:** Centralized, Decentralized, Hybrid (Center-Led), Center of Excellence (CoE).

**Q:** When is decentralized supply BEST?
**A:** When business units are highly diverse and unrelated; responsiveness and local knowledge outweigh leverage.

**Q:** What does a Center of Excellence do?
**A:** Provides methodology, tools, training, and analytics across the organization; enables rather than owns spend.

**Q:** The 5 stages of supply maturity?
**A:** 1) Reactive/Clerical, 2) Mechanical, 3) Proactive, 4) Strategic, 5) World-class (value creator).

**Q:** Porter's Five Forces?
**A:** Threat of new entrants, Bargaining power of suppliers, Bargaining power of buyers, Threat of substitutes, Industry rivalry.

**Q:** Porter classified procurement as which type of value chain activity?
**A:** A SUPPORT activity (alongside HR, technology, and firm infrastructure).

**Q:** The classic Five Rights of supply management?
**A:** Right quality, quantity, time, place, price.

**Q:** Factors favoring "make" in make-or-buy?
**A:** Core competence, high IP risk, internal capacity, need for tight quality control, strategic differentiation.

**Q:** 11-step supply management process?
**A:** Need → Spec → Make-or-buy → Market analysis → Strategy → Solicit → Evaluate → Negotiate/Contract → Manage performance → Pay/Close → Improve.

---

## 🗺️ SECTION 2: CATEGORY MANAGEMENT & SOURCING

**Q:** What is spend analysis and why does it matter?
**A:** Systematic classification of historical spend by category, supplier, BU; foundation for category strategy. You cannot strategize blind.

**Q:** Direct vs indirect spend?
**A:** Direct = goes INTO the product (raw materials, components). Indirect = supports operations (IT, MRO, facilities, travel).

**Q:** Kraljic matrix axes?
**A:** Profit impact (x) and Supply risk (y).

**Q:** Kraljic strategy for the LEVERAGE quadrant?
**A:** Exploit buying power via competitive bidding, e-auctions, consolidation.

**Q:** Kraljic strategy for the STRATEGIC quadrant?
**A:** Long-term partnership, joint development, multi-year alliance.

**Q:** Kraljic strategy for the BOTTLENECK quadrant?
**A:** Ensure supply, inventory buffers, alternate sources, long-term contracts.

**Q:** Kraljic strategy for the NON-CRITICAL quadrant?
**A:** Efficient processing, catalogs, P-cards, automation.

**Q:** Single source vs sole source?
**A:** Single source = we chose one of many possible suppliers. Sole source = only one supplier exists in the market.

**Q:** Dual sourcing typically means?
**A:** Two suppliers, often with primary/backup or 70/30 / 80/20 split for risk mitigation.

**Q:** RFI vs RFP (Request for Proposal) vs RFQ (Request for Quotation)?
**A:** RFI = learn about the market (capability). RFP = solve a complex/undefined need (best value). RFQ = get firm price on a defined spec.

**Q:** When do reverse auctions work BEST?
**A:** Leverage-quadrant commoditized items with multiple qualified suppliers and clear specs. NOT for strategic, bottleneck, or innovation-critical categories.

**Q:** Standardization vs rationalization?
**A:** Standardization reduces variety of items. Rationalization reduces the number of suppliers.

**Q:** The bullwhip effect?
**A:** Demand distortion amplifying upstream from end customer (5% becomes 40% at raw materials). Mitigate by sharing POS data, smaller frequent orders, stable pricing.

**Q:** Weighted scoring rule for supplier evaluation?
**A:** Set criteria and weights BEFORE issuing the RFx; award the highest weighted score (not lowest price alone).

---

## ⚖️ SECTION 3: NEGOTIATION & CONTRACTS

**Q:** What does BATNA stand for?
**A:** Best Alternative To a Negotiated Agreement (your fallback if the deal fails).

**Q:** What is ZOPA?
**A:** Zone of Possible Agreement, overlap between buyer's max and seller's min. If no overlap, no deal without expanding the pie.

**Q:** Reservation price?
**A:** Your walk-away point, the number beyond which you'd rather take your BATNA.

**Q:** Distributive vs integrative negotiation?
**A:** Distributive = win-lose fixed pie (commodity, one-off). Integrative = win-win expanded pie (strategic, long-term).

**Q:** 5-phase negotiation process?
**A:** Prepare, Open, Bargain/Explore, Close, Implement. 80% of success is preparation.

**Q:** Who bears cost-overrun risk in a fixed-price contract?
**A:** The SUPPLIER.

**Q:** Who bears cost-overrun risk in a cost-plus-fixed-fee contract?
**A:** The BUYER.

**Q:** BEST contract type for an R&D engagement with uncertain scope?
**A:** Cost-plus or Time & Materials. Forcing fixed-price on undefined scope causes disputes.

**Q:** What does UCC govern?
**A:** Uniform Commercial Code, US sale of goods. Services use common law instead.

**Q:** When does CISG apply?
**A:** International sale of goods between signatory countries, by default, unless contract opts out.

**Q:** What is FAR?
**A:** Federal Acquisition Regulation, governs US federal government contracts. Highly prescriptive.

**Q:** What does force majeure excuse?
**A:** Performance during unforeseeable, unavoidable events (war, disaster, pandemic). Must be in clause AND supplier mitigated.

**Q:** Termination for convenience entitles supplier to?
**A:** Payment for work completed plus reasonable wind-down costs.

**Q:** Statute of Frauds (UCC) threshold for goods?
**A:** $500. Sales of goods at or above this value generally must be in writing.

**Q:** Mediation vs arbitration?
**A:** Mediation = non-binding 3rd-party facilitation. Arbitration = binding 3rd-party decision.

**Q:** Standard dispute resolution ladder?
**A:** Direct negotiation → executive escalation → mediation → arbitration → litigation (last resort).

**Q:** Express vs implied warranties?
**A:** Express = specifically stated by seller. Implied = UCC default (merchantability, fitness for purpose); can be disclaimed.

---

## 🤝 SECTION 4: SUPPLIER RELATIONSHIP MANAGEMENT

**Q:** Supplier tiers and typical % of spend?
**A:** Tier 1 (Strategic) 1–5% of suppliers / 30–50% of spend. Tier 2 (Preferred) 10–20% / 30–40%. Tier 3 (Approved) 30–50% / 15–20%. Tier 4 (Tail) 30–50% / 5–10%.

**Q:** Dimensions of a balanced supplier scorecard?
**A:** Quality, Cost, Delivery, Service (often + Innovation, ESG/sustainability, Risk).

**Q:** When to invest in supplier development?
**A:** Strategic supplier, fixable capability gap, motivated supplier, high switching cost, positive ROI (Return on Investment) on the investment.

**Q:** US recognized diverse-supplier categories?
**A:** MBE, WBE, SDVOSB, VBE, LGBTQ-owned, DOBE, 8(a), HUBZone, SBE.

**Q:** Tier-2 diversity reporting means?
**A:** Tracking diverse spend by your primary (Tier-1) suppliers' subcontractors, required by many US federal customers and large enterprises.

**Q:** Typical SRM escalation ladder?
**A:** Buyer ↔ supplier account manager → Category manager ↔ supplier sales director → Supply VP ↔ Supplier VP → Executive sponsors. Don't skip levels.

**Q:** QBR agenda essentials?
**A:** Scorecard, open issues, cost/innovation pipeline, risk review, forecast, strategic initiatives, action items.

**Q:** What is PPM in supplier quality?
**A:** Parts Per Million defects, standard quality metric.

**Q:** Best exit-management practice for a strategic supplier?
**A:** Structured transition: dual-source 6–12 months, knowledge transfer, IP/data return, lessons learned. Don't drop them cold.

**Q:** What is "vested" sourcing (Vitasek)?
**A:** Outcome-based, win-win arrangements with shared incentives, beyond traditional partnership.

---

## 💰 SECTION 5: COST MANAGEMENT & TCO

**Q:** Three phases of TCO?
**A:** Acquisition + Operating (use) + Disposal (end-of-life).

**Q:** Should-cost analysis?
**A:** Bottom-up estimate of what an item should cost (materials + labor + overhead + tooling + SG&A + reasonable margin) to compare to supplier quote.

**Q:** Target costing formula?
**A:** Target cost = Market selling price - required margin. Design TO this number.

**Q:** Value Analysis vs Value Engineering?
**A:** VA = applied to EXISTING products in production. VE = applied during DESIGN of new products.

**Q:** 80% learning curve meaning?
**A:** Each doubling of cumulative volume reduces unit cost to 80% of prior. Applies to labor-intensive repetitive work.

**Q:** Difference between forwards and futures?
**A:** Forwards = custom OTC. Futures = standardized exchange-traded.

**Q:** What does an option grant?
**A:** Right but not obligation to buy/sell at a strike price, in exchange for a premium.

**Q:** When does hedging make sense?
**A:** Hedge known exposures to reduce risk. Match horizon. Executed by Treasury. Documented policy. NOT for speculation.

**Q:** 2/10 Net 30, annualized return if discount taken?
**A:** ~36.5% (2% × 365/20).

**Q:** Cost savings vs cost avoidance?
**A:** Savings = real reduction vs prior actual spend. Avoidance = avoided increase vs forecast/proposal. Report separately.

**Q:** Quick rules for ROI / NPV / payback investment screening?
**A:** Positive NPV at hurdle rate + payback within ~18 months = green light for most procurement investments.

**Q:** Why use indexed (FP-EPA) contracts on multi-year commodities?
**A:** Protect both parties from price volatility. Pure fixed-price exposes one side; pure variable exposes the other.

---

## 🌍 SECTION 6: INTERNATIONAL SUPPLY

**Q:** How many Incoterms are in the 2020 set?
**A:** 11 total, 7 any-mode + 4 sea/inland-waterway only.

**Q:** EXW means?
**A:** Ex Works, buyer takes from seller's door; seller does the LEAST.

**Q:** DDP means?
**A:** Delivered Duty Paid, seller does the MOST, including import customs and duties.

**Q:** Which Incoterm 2020 replaced DAT?
**A:** DPU (Delivered at Place Unloaded), broader than terminal-only DAT.

**Q:** FOB applies to which mode?
**A:** Sea and inland waterway only (NOT air or trucking).

**Q:** CIP insurance requirement under Incoterms 2020?
**A:** ALL-RISK insurance for buyer's benefit (changed in 2020). CIF still requires only minimum insurance.

**Q:** FCPA prohibits?
**A:** Bribery of foreign government officials by US-issuer companies and their agents. Narrow facilitation-payment exception exists.

**Q:** UK Bribery Act 2010 vs FCPA?
**A:** UK Act is broader: includes private-sector bribery, "failure to prevent" corporate offense; NO facilitation-payment exception.

**Q:** What does OFAC do?
**A:** Office of Foreign Assets Control, US Treasury sanctions on countries, entities, individuals.

**Q:** ITAR regulates?
**A:** International Traffic in Arms Regulations, defense articles/services exports (State Department).

**Q:** USMCA replaced what and when?
**A:** Replaced NAFTA in 2020. Stricter rules of origin (e.g., 75% regional value content for autos).

**Q:** What is RCEP?
**A:** Regional Comprehensive Economic Partnership, 15 Asia-Pacific countries (ASEAN + China, Japan, Korea, Australia, NZ).

**Q:** Certificate of Origin's purpose?
**A:** Proves goods qualify for FTA preferential tariff rates.

**Q:** Three types of FX exposure?
**A:** Transaction (specific contract), Translation (subsidiary financial reporting), Economic (long-term competitiveness).

**Q:** Does invoicing in your home currency eliminate FX risk?
**A:** No, the supplier prices the FX risk in. Risk is shifted, not eliminated.

**Q:** Letter of Credit, what is it?
**A:** Bank-guaranteed payment instrument used in international trade to balance buyer/seller risk.

**Q:** Hofstede's 6 cultural dimensions?
**A:** Power distance, Individualism vs Collectivism, Masculinity vs Femininity, Uncertainty avoidance, Long-term orientation, Indulgence vs Restraint.

**Q:** High-context vs low-context cultures (Hall)?
**A:** High-context (Japan, China, Arab) = implicit, relationship-driven, indirect "no." Low-context (US, Germany, Scandinavia) = explicit, contract-driven, direct.

---

## 🛡️ SECTION 7: RISK, COMPLIANCE & ETHICS

**Q:** The four risk treatment strategies?
**A:** Avoid, Transfer, Mitigate, Accept (A.T.M.A.).

**Q:** When to ACCEPT a risk?
**A:** When treatment cost exceeds expected loss (probability × impact). Document acceptance and monitor.

**Q:** When to AVOID a risk?
**A:** When the risk is too large to bear and treatment costs are excessive.

**Q:** When to TRANSFER a risk?
**A:** When someone else can bear it better, insurance, contractual indemnification, hedging.

**Q:** What is a risk register?
**A:** Living document tracking each risk's category, probability, impact, owner, treatment, mitigation actions, status, and review date.

**Q:** Conflict minerals (3TG)?
**A:** Tin, Tungsten, Tantalum, Gold, covered by US Dodd-Frank §1502 reporting for SEC-listed companies.

**Q:** RTO (Recovery Time Objective), RPO (Recovery Point Objective), MTD definitions?
**A:** RTO = Recovery Time Objective (how fast we restore). RPO = Recovery Point Objective (acceptable data-loss window). MTD = Maximum Tolerable Downtime (business stops past this). Rule: MTD > RTO.

**Q:** UK Modern Slavery Act 2015 threshold?
**A:** Companies with turnover above £36M must publish an annual statement.

**Q:** UFLPA?
**A:** US Uyghur Forced Labor Prevention Act (2022). Rebuttable presumption against goods made in Xinjiang.

**Q:** Scope 1/2/3 emissions?
**A:** Scope 1 = direct (your facilities, fleet). Scope 2 = purchased energy. Scope 3 = all other indirect including supply chain (typically 70–90% of total).

**Q:** ISM 10 principles of Sustainability and Social Responsibility?
**A:** Anti-corruption · Diversity & inclusiveness · Environment · Ethics & business conduct · Financial integrity & transparency · Global citizenship · Health & safety · Human rights · Labor rights · Sustainability.

**Q:** Triple bottom line?
**A:** People · Planet · Profit.

**Q:** ISO 31000 covers?
**A:** Risk management.

**Q:** SA 8000 covers?
**A:** Social accountability, labor practices.

**Q:** AS9100 covers?
**A:** Aerospace quality management.

**Q:** IATF 16949 covers?
**A:** Automotive quality management.

**Q:** The ethics decision framework on CPSM scenarios?
**A:** Decline → Document → Disclose → Escalate. When in doubt, this is almost always the right answer.

**Q:** Response to a "facilitation payment" request under combined US/UK law?
**A:** Refuse + document + escalate. UK Bribery Act prohibits; FCPA narrow exception is risky.

**Q:** Response when an auditor finds child labor at a Tier-1 supplier?
**A:** Engage supplier on remediation, escalate, document, prepare contractual remedies up to termination. Don't quietly switch.

---

## 👥 SECTION 8: LEADERSHIP & PROJECT MANAGEMENT

**Q:** Kotter's 8 steps of change?
**A:** 1) Create urgency, 2) Form coalition, 3) Create vision, 4) Communicate vision, 5) Remove obstacles, 6) Short-term wins, 7) Build on change, 8) Anchor in culture.

**Q:** ADKAR model letters?
**A:** Awareness, Desire, Knowledge, Ability, Reinforcement. Individual-change diagnostic.

**Q:** Tuckman's 5 team stages?
**A:** Forming, Storming, Norming, Performing, Adjourning.

**Q:** Leader's role during Tuckman's Storming stage?
**A:** Coach through conflict; mediate; reinforce purpose. Don't avoid the conflict.

**Q:** Transformational vs servant leadership?
**A:** Transformational = inspires vision and energizes change. Servant = leader serves the team's needs first, removes obstacles.

**Q:** RACI, what does A mean and how many per task?
**A:** Accountable, owns the outcome. ONLY ONE per task. R/C/I can have multiple.

**Q:** Stakeholders with high power AND high interest are?
**A:** Manage closely. (Power/Interest grid quadrant.)

**Q:** Cialdini's 6 principles of influence?
**A:** Reciprocity, Commitment/consistency, Social proof, Authority, Liking, Scarcity.

**Q:** The triple constraint?
**A:** Scope · Time · Cost (with Quality at the center).

**Q:** Critical path?
**A:** Longest sequence of dependent tasks; determines minimum project duration. Crashing the critical path compresses the schedule.

**Q:** PERT three-point estimate formula?
**A:** (Optimistic + 4 × Most likely + Pessimistic) / 6.

**Q:** SMART KPI (Key Performance Indicator)?
**A:** Specific, Measurable, Achievable, Relevant, Time-bound.

**Q:** Spend Under Management (SUM)?
**A:** % of total addressable spend actively managed by procurement (contracted, monitored, negotiated). World-class is 80%+.

**Q:** Lean tools for process improvement?
**A:** 5S, Kaizen, Value Stream Mapping, PDCA, DMAIC, 5 Whys, Fishbone, Pareto, Poka-yoke.

**Q:** 5 Whys?
**A:** Root-cause analysis technique, ask "why?" five times to drill from symptom to root cause.

**Q:** Coaching vs mentoring?
**A:** Coaching = short-term, skill-focused. Mentoring = long-term, career-focused.

**Q:** Most common reason supply transformations fail?
**A:** Poor stakeholder management and change management, not bad strategy.

**Q:** CPSM credential maintenance requirement?
**A:** 60 continuing-education hours every 3 years for recertification.

---

## 🎯 SECTION 9: EXAM-DAY HIGH-VALUE RULES

**Q:** When a CPSM scenario presents an ethics dilemma, what answer pattern usually wins?
**A:** Decline + Document + Disclose + Escalate. Aligned with ISM Principles.

**Q:** When a CPSM scenario presents a stakeholder conflict, what approach usually wins?
**A:** Engage cross-functionally, use data + social proof + relationship, don't unilaterally escalate or dictate.

**Q:** When asked to "smooth over" an audit finding, what's the CPSM answer?
**A:** Decline; report accurately per policy; escalate per governance. Never falsify audit results.

**Q:** When in doubt on a contract-type question, what's the rule?
**A:** Match contract type to scope clarity. Fixed-price = clear scope (supplier risk). Cost-plus / T&M = uncertain scope (buyer risk).

**Q:** When in doubt on a sourcing-strategy question, what's the rule?
**A:** Use Kraljic. Match the tactic to the quadrant. Don't reverse-auction strategic; don't partner with non-critical.

**Q:** When in doubt on a TCO question, what's the rule?
**A:** Compute Acquisition + Operating + Disposal, lowest unit price rarely wins on TCO.

**Q:** When in doubt on an Incoterm question, what's the trend rule?
**A:** Seller's responsibility grows from EXW → DDP. FOB / CFR / CIF / FAS are sea-only.

**Q:** When in doubt on a risk question, what's the rule?
**A:** Match treatment to economics: A.T.M.A. (Avoid / Transfer / Mitigate / Accept).

**Q:** Before sitting any of the three real CPSM exams, what should you do?
**A:** Pass this site's Final-Mock-Exam at 80%+; buy ISM official exam-style practice tests for additional Q-banks; re-study weakest two modules; sleep well.

---

## 📚 STUDY TIPS

1. Drill flashcards 15 minutes per day, every day.
2. Use the section filter to focus on weak areas.
3. Mark cards "Got it" only when you can recite the answer without hesitation.
4. Shuffle weekly so you're not memorizing order.
5. The night before each real exam: review only the Cheat-Sheets, not new material.

---

## ✅ BEFORE THE EXAM

- [ ] Final-Mock-Exam scored ≥ 80%
- [ ] ISM official practice tests completed for the exam you're sitting
- [ ] All 8 module Cheat-Sheets reviewed in last week
- [ ] All red/orange flashcards drilled
- [ ] Identity + Prometric / remote-proctor checks confirmed
- [ ] Test environment quiet, lit, and stable
- [ ] Calculator (allowed type) on hand
- [ ] Sleep, water, snack plan set

Go pass your CPSM. 💪
