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
  var STORAGE_KEY = 'fc-progress-cscp';
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

# 🃏 ASCM CSCP Master Flashcards

> **How to use:** Each card has a Q on one line and A on the next. Copy into Anki, Quizlet, or paper flashcards. Aim for daily review until the real exam.

---

## 📦 SECTION 1: SCM FOUNDATIONS & STRATEGY

**Q:** What are the three flows of any supply chain?
**A:** Material, information, and cash.

**Q:** Name the 6 SCOR 13.0 processes in order.
**A:** Plan, Source, Make, Deliver, Return, Enable.

**Q:** Which SCOR process category was added in version 11?
**A:** Enable (covers IT, governance, talent, risk, compliance).

**Q:** Name Hau Lee's 4 supply chain strategies and their quadrants.
**A:** Efficient (low/low uncertainty), Responsive (high demand uncertainty), Risk-hedging (high supply uncertainty), Agile (high both).

**Q:** Per Fisher 1997, what SC fits a functional product?
**A:** Efficient / cost-focused supply chain.

**Q:** Per Fisher 1997, what SC fits an innovative product?
**A:** Responsive / market-focused supply chain.

**Q:** What is the Customer Order Decoupling Point (CODP)?
**A:** The location where the supply chain transitions from forecast-driven (push) to order-driven (pull).

**Q:** Where does the CODP sit for MTS, ATO, MTO, and ETO?
**A:** MTS: finished goods. ATO: sub-assemblies. MTO: raw materials. ETO: design phase.

**Q:** Define postponement and give an example.
**A:** Delaying final differentiation until later in the chain. HP installs region-specific power packs for printers at the regional DC.

**Q:** Name the 5 causes of the bullwhip effect.
**A:** Demand forecast updating, order batching, price fluctuations, rationing/shortage gaming, long lead times.

**Q:** What is the best long-term remedy for the bullwhip effect?
**A:** Information sharing across tiers (CPFR, VMI), smaller batches, EDLP pricing, shorter lead times.

**Q:** Define order qualifier vs order winner.
**A:** Qualifier = minimum criterion to be considered. Winner = the reason the customer chooses YOU.

**Q:** Cash-to-cash cycle formula.
**A:** DIO + DSO − DPO. Lower (or negative) is better.

**Q:** Define perfect order.
**A:** Order shipped on-time, in-full, undamaged, and with correct documentation.

**Q:** Difference between supply chain and value chain?
**A:** Supply chain spans multiple firms (raw mat to consumer). Value chain (Porter) is internal to one firm.

---

## 📦 SECTION 2: SUPPLY CHAIN DESIGN

**Q:** When consolidating from N to fewer DCs, what is the safety stock reduction factor?
**A:** Square-root law: safety stock scales with √N.

**Q:** What are the 3 assumptions of center-of-gravity?
**A:** Straight-line distance, single new facility, uniform freight rate per mile per pound.

**Q:** Center-of-gravity formula.
**A:** X = Σ(dᵢ·xᵢ)/Σdᵢ ; Y = Σ(dᵢ·yᵢ)/Σdᵢ where dᵢ = demand and (xᵢ, yᵢ) = coordinates.

**Q:** Define backward vs forward vs horizontal integration.
**A:** Backward = upstream (buy supplier). Forward = downstream (own customer channel). Horizontal = competitor at same stage.

**Q:** Outsourcing vs offshoring, what's the difference?
**A:** Outsourcing = activity to an external firm (could be domestic or foreign). Offshoring = activity to a foreign country (could be in-house or external).

**Q:** Nearshoring vs reshoring?
**A:** Nearshoring = move closer (e.g., China → Mexico for US market). Reshoring = back to home country.

**Q:** Difference between single source and sole source?
**A:** Single = you chose one of many possible suppliers. Sole = only one supplier exists in the market.

**Q:** Name the 4 Kraljic matrix quadrants.
**A:** Routine (low/low), Leverage (low risk/high impact), Bottleneck (high risk/low impact), Strategic (high/high).

**Q:** What is cross-docking?
**A:** Receive inbound and ship outbound same day with minimal storage.

**Q:** What is a milk run in logistics?
**A:** A single truck visiting multiple suppliers or customers in one route to consolidate loads.

---

## 📦 SECTION 3: DEMAND & FORECASTING

**Q:** Which type of demand is forecast?
**A:** Independent demand.

**Q:** Which type of demand is calculated, not forecast?
**A:** Dependent demand, calculated via MRP from the BOM.

**Q:** Simple exponential smoothing formula.
**A:** F(t+1) = α·A(t) + (1−α)·F(t), where 0 ≤ α ≤ 1.

**Q:** How does α affect forecast behavior?
**A:** High α → more responsive but noisier. Low α → stable but slower to react.

**Q:** When do you use Holt-Winters?
**A:** Demand with both trend and seasonality.

**Q:** When do you use Croston's method?
**A:** Intermittent / lumpy demand with many zero periods (spare parts).

**Q:** MAD formula.
**A:** MAD = Σ|A − F| / n.

**Q:** MAPE formula.
**A:** MAPE = Σ|A − F| / ΣA × 100% (breaks down when actuals are near 0).

**Q:** Tracking signal formula and rule of thumb.
**A:** TS = Σ(A − F) / MAD. Investigate when |TS| > 4; replace model when > 6.

**Q:** What is CPFR and what is its primary benefit?
**A:** Collaborative Planning, Forecasting and Replenishment. One shared forecast across partners, dampens bullwhip.

**Q:** Difference between CPFR and VMI?
**A:** CPFR = joint planning by partners. VMI = supplier-executed replenishment using shared POS data.

**Q:** What is demand sensing?
**A:** Short-horizon forecasting (hours/days) using real-time POS, weather, social, and IoT signals, complements statistical forecasts.

**Q:** Describe Delphi technique.
**A:** Anonymous iterative expert rounds with feedback to avoid groupthink.

---

## 📦 SECTION 4: SUPPLY PLANNING & S&OP

**Q:** Recite the 5 steps of Wallace/Stahl S&OP cycle.
**A:** 1. Data Gathering, 2. Demand Review, 3. Supply Review, 4. Pre-S&OP Reconciliation, 5. Executive S&OP Meeting.

**Q:** S&OP plans at what granularity and horizon?
**A:** Family-level, 12–24 months.

**Q:** How does IBP extend S&OP?
**A:** Adds financial, strategic, and NPI (new product introduction) integration. Horizon typically 24–36 months.

**Q:** The 3 main inputs to MRP.
**A:** MPS, BOM, and inventory records.

**Q:** What is the demand time fence (DTF)?
**A:** The horizon inside which only firm customer orders drive the MPS (forecast is frozen out).

**Q:** What is the planning time fence (PTF)?
**A:** The horizon inside which MPS changes require master scheduler intervention; outside PTF the system replans freely.

**Q:** RCCP vs CRP, what's the difference?
**A:** RCCP validates MPS at key work centers; CRP validates MRP at every work center using routings.

**Q:** Name the 3 aggregate planning strategies.
**A:** Chase, Level, Hybrid (mixed).

**Q:** When is chase strategy most appropriate?
**A:** Service industries (cannot inventory output) and businesses with variable labor and low fixed-cost capacity.

**Q:** What is lot-for-lot (L4L) ordering?
**A:** Order exactly the net requirement each period to minimize inventory; suits low-setup-cost JIT environments.

**Q:** Define ATP and CTP.
**A:** ATP (Available-to-Promise) = on-hand + uncommitted future production. CTP (Capable-to-Promise) also considers capacity + material availability.

**Q:** Name TOC's 5 focusing steps.
**A:** Identify the constraint → Exploit it → Subordinate everything else → Elevate → Repeat.

---

## 📦 SECTION 5: INVENTORY & CAPACITY

**Q:** EOQ formula and assumptions.
**A:** EOQ = √(2DS/H). Assumes constant demand, constant lead time, no quantity discounts, instantaneous receipt, no stockouts.

**Q:** Safety stock formula (lead-time demand uncertainty only).
**A:** SS = Z · σ_LT.

**Q:** Reorder point formula.
**A:** ROP = d · LT + SS.

**Q:** Combined formula for σ_LT with variable demand AND variable lead time.
**A:** σ_LT = √(LT · σ_d² + d² · σ_LT²).

**Q:** Z values for 90%, 95%, 99% service levels.
**A:** 90% → 1.28, 95% → 1.65, 97.5% → 1.96, 99% → 2.33.

**Q:** Name the 5 types of inventory.
**A:** Cycle, safety, anticipation, pipeline (in-transit), decoupling/hedge.

**Q:** What are the 4 inventory cost categories?
**A:** Carrying/holding, ordering/setup, stockout/shortage, acquisition/unit cost.

**Q:** Inventory turns formula.
**A:** Turns = COGS / Avg inventory value. DIO = 365 / turns.

**Q:** Newsvendor critical ratio formula.
**A:** Critical Ratio = Cu / (Cu + Co), where Cu = understock cost (lost margin), Co = overstock cost (markdown loss).

**Q:** ABC analysis approximate distribution.
**A:** A items: ~10-20% of SKUs drive 70-80% of $ value. B: ~30% / 15-20%. C: ~50-60% / 5-10%.

**Q:** Capacity utilization vs efficiency formula.
**A:** Utilization = Actual output / Design capacity. Efficiency = Actual output / Effective capacity.

**Q:** Recite TIMWOOD (the 7 lean wastes).
**A:** Transport, Inventory, Motion, Waiting, Overproduction, Over-processing, Defects.

**Q:** What does the 8th waste add to TIMWOOD?
**A:** Skills (employee skills underused).

---

## 📦 SECTION 6: SOURCING & SUPPLIER MANAGEMENT

**Q:** Name the 7 steps of strategic sourcing.
**A:** 1. Analyze spend, 2. Assess supply market, 3. Develop strategy, 4. Solicit & evaluate (RFx), 5. Negotiate & award, 6. Implement & integrate, 7. Manage performance.

**Q:** Difference between RFI, RFP, RFQ.
**A:** RFI = information / capabilities (early discovery). RFP = solution / approach (complex). RFQ = price quote on a defined spec.

**Q:** What does TCO stand for and include?
**A:** Total Cost of Ownership. Includes acquisition + operating + maintenance + disposal + hidden costs.

**Q:** When is a reverse auction inappropriate?
**A:** For strategic / custom items requiring deep collaboration; or when supplier base is small or relationship matters.

**Q:** What does BATNA stand for?
**A:** Best Alternative To a Negotiated Agreement, your walk-away option. Strong BATNA = strong negotiating leverage.

**Q:** Name the 5 levels of SRM maturity.
**A:** Adversarial → Cooperative → Collaborative → Strategic alliance → Vertical integration.

**Q:** Difference between fixed-price and cost-plus contracts.
**A:** Fixed-price = supplier bears risk (use when scope is clear). Cost-plus = buyer bears risk (use when scope is evolving).

**Q:** What does SLA stand for?
**A:** Service-Level Agreement, defines performance commitments and penalties.

**Q:** What does MFN (Most Favored Nation) clause guarantee?
**A:** The buyer receives pricing at least as good as the supplier gives any other customer.

**Q:** Name 3 elements of a supplier scorecard.
**A:** Quality (PPM, FPY), on-time delivery, cost competitiveness. Modern ones add ESG, innovation, responsiveness.

---

## 📦 SECTION 7: LOGISTICS, DISTRIBUTION & WAREHOUSING

**Q:** Rank the 5 transport modes from lowest to highest cost.
**A:** Ocean (lowest) → Rail → Truck → Air (highest); Pipeline is continuous low-cost for liquids/gases.

**Q:** Define intermodal vs multimodal.
**A:** Intermodal = same container moves across modes without rehandling. Multimodal = multiple modes under one contract.

**Q:** Difference between 3PL and 4PL.
**A:** 3PL = multi-function outsourced logistics (typically asset-heavy). 4PL/LLP = asset-light orchestrator of multiple 3PLs.

**Q:** Name the 6 core warehouse operations in order.
**A:** Receiving → Putaway → Storage → Picking → Packing → Shipping.

**Q:** Name 4 picking strategies.
**A:** Discrete (one order at a time), batch (multiple together), zone (workers stay; orders move), wave (time-batched releases).

**Q:** What is goods-to-person (GTP) picking?
**A:** Automation brings inventory to a stationary picker, used in high-throughput e-commerce fulfillment.

**Q:** Define perfect order.
**A:** On-time + in-full + undamaged + correct documentation. The strictest service KPI.

**Q:** What is a TEU?
**A:** Twenty-foot Equivalent Unit, the ocean container standard size.

**Q:** What is a ULD?
**A:** Unit Load Device, air cargo container used inside aircraft.

**Q:** Reverse logistics belongs to which SCOR process?
**A:** Return.

---

## 📦 SECTION 8: INTERNATIONAL TRADE & CUSTOMS

**Q:** How many Incoterms are there in version 2020?
**A:** 11 Incoterms.

**Q:** What was renamed in Incoterms 2020?
**A:** DAT (Delivered at Terminal) renamed to DPU (Delivered at Place Unloaded).

**Q:** List the 4 sea-only Incoterms.
**A:** FAS, FOB, CFR, CIF.

**Q:** List the 7 any-mode Incoterms.
**A:** EXW, FCA, CPT, CIP, DAP, DPU, DDP.

**Q:** Under EXW, what is the seller's responsibility?
**A:** Make goods available at the seller's premises, the absolute minimum. Buyer handles export clearance, freight, and import.

**Q:** Under DDP, what is the seller's responsibility?
**A:** Everything, including import duties, the maximum.

**Q:** Difference between CFR and CIF?
**A:** CIF adds insurance (minimum Institute Cargo Clause C).

**Q:** Difference between CIF and CIP?
**A:** CIP is for any mode; CIF is sea only. CIP requires Clause A insurance (broad), CIF only requires Clause C (basic).

**Q:** Why does ICC recommend FCA over FOB for containers?
**A:** FCA passes risk when goods are handed to the carrier, which is more accurate than FOB's "ship's rail" for containerized cargo.

**Q:** What is the global harmonization level for HS codes?
**A:** 6 digits globally; countries extend to 10 for national tariff lines.

**Q:** What does UCP 600 govern?
**A:** Uniform Customs and Practice for Documentary Credits, ICC rules for letters of credit.

**Q:** Name the parties to a letter of credit.
**A:** Applicant (buyer), beneficiary (seller), issuing bank, advising bank, confirming bank (optional), negotiating bank.

**Q:** Difference between sight and usance LC?
**A:** Sight LC pays on presentation of documents. Usance pays at a future date (e.g., 90 days after sight).

**Q:** What does an ATA Carnet allow?
**A:** Temporary duty-free admission of goods (trade-show samples, professional equipment) for up to 1 year in 80+ countries.

**Q:** What is an FTZ?
**A:** Free Trade Zone, a designated area where goods can be imported, stored, processed without immediate duty.

**Q:** Best FX hedge for a known-date, known-amount foreign payable?
**A:** Forward contract (lock today's rate for the future date).

**Q:** Name a natural hedge against FX exposure.
**A:** Invoice in the currency that matches your cost base, or source inputs in the same currency as revenue.

---

## 📦 SECTION 9: SUSTAINABILITY, RISK & CSR

**Q:** What is the triple bottom line?
**A:** People, Planet, Profit (Elkington 1994).

**Q:** Define Scope 1, 2, 3 emissions.
**A:** Scope 1 = direct (owned sources). Scope 2 = purchased energy. Scope 3 = value-chain emissions (suppliers, commute, end-of-life).

**Q:** Which scope is usually the biggest?
**A:** Scope 3, 70-90% of most companies' footprint.

**Q:** What does ISO 14001 certify?
**A:** Environmental management systems (EMS).

**Q:** What does ISO 31000 cover?
**A:** Risk management, provides a process for identifying, analyzing, evaluating, treating, and monitoring risks.

**Q:** Name the 4 T's of risk treatment.
**A:** Tolerate (accept), Treat (mitigate), Transfer, Terminate (avoid).

**Q:** FMEA RPN formula.
**A:** Risk Priority Number = Severity × Occurrence × Detection (each scored 1-10).

**Q:** Difference between RTO and RPO.
**A:** RTO = Recovery Time Objective (time to restore). RPO = Recovery Point Objective (maximum acceptable data loss).

**Q:** Name Carroll's 4 levels of CSR pyramid.
**A:** Economic → Legal → Ethical → Philanthropic.

**Q:** What do the letters E, S, G stand for in ESG?
**A:** Environmental, Social, Governance.

**Q:** Name 3 major modern slavery regulations.
**A:** UK Modern Slavery Act 2015, US UFLPA (Uyghur Forced Labor Prevention Act), EU CSDDD (Corporate Sustainability Due Diligence Directive).

**Q:** What does the SBTi validate?
**A:** Science-Based Targets initiative, validates net-zero targets aligned with climate science.

**Q:** Name the 5 functions of NIST CSF.
**A:** Identify, Protect, Detect, Respond, Recover.

**Q:** Name the resilience levers for supply chain.
**A:** Redundancy, flexibility, visibility, collaboration, diversification, postponement.

**Q:** Recite the 9 R's of circular economy (high to low).
**A:** Refuse, Rethink, Reduce, Reuse, Repair, Refurbish, Remanufacture, Repurpose, Recycle / Recover.

---

## 📦 SECTION 10: CONTINUOUS IMPROVEMENT

**Q:** Name the 5 phases of DMAIC.
**A:** Define, Measure, Analyze, Improve, Control.

**Q:** Name the 5 phases of DMADV.
**A:** Define, Measure, Analyze, Design, Verify (used for Design for Six Sigma, DFSS).

**Q:** What defect rate does Six Sigma target?
**A:** 3.4 defects per million opportunities (DPMO).

**Q:** Name the 5 levels of Six Sigma belts.
**A:** White/Yellow, Green, Black, Master Black Belt, Champion/Sponsor.

**Q:** Recite TOC's 5 focusing steps.
**A:** 1. Identify the constraint, 2. Exploit it, 3. Subordinate everything else, 4. Elevate, 5. Repeat.

**Q:** Define throughput in TOC.
**A:** The rate at which the system generates money through sales, revenue minus truly variable costs.

**Q:** What does 5S stand for?
**A:** Sort, Set in order, Shine, Standardize, Sustain.

**Q:** OEE formula.
**A:** OEE = Availability × Performance × Quality. World-class ≥ 85%.

**Q:** What does SMED mean?
**A:** Single-Minute Exchange of Die, quick changeover technique.

**Q:** What is Poka-yoke?
**A:** Mistake-proofing, design that prevents errors before they happen.

**Q:** What is Jidoka?
**A:** Autonomation, stop the line automatically when a defect is detected.

**Q:** What is Andon?
**A:** Visual signal (light/board) used at the line to flag problems immediately.

**Q:** Name the 4 perspectives of the Balanced Scorecard.
**A:** Financial, Customer, Internal Process, Learning & Growth.

**Q:** Difference between Kaizen and BPR.
**A:** Kaizen = continuous small improvements driven by frontline staff. BPR = radical, top-down redesign.

**Q:** Name the 4 types of benchmarking.
**A:** Internal, Competitive, Functional (best-in-class outside industry), Generic.

**Q:** What is PDCA / PDSA?
**A:** Plan → Do → Check (or Study) → Act. The Deming continuous-improvement cycle.

**Q:** What is a digital twin?
**A:** A simulated digital model of a physical supply-chain or process, used for what-if analysis.

**Q:** What is a Gemba walk?
**A:** Going to the actual workplace ("Gemba" = real place) to observe actual work and identify improvement opportunities.

---

## 🎓 STUDY TIPS

1. **Daily review**: 15 minutes a day beats 4 hours once a week.
2. **Use the section dropdown** above to drill the area you're weakest in.
3. **Mix study with practice exams**: After each section feels solid, do 25 Q's from the relevant Module Quiz.
4. **Write the formulas by hand** EOQ, SS, OEE, cash-to-cash, RPN, MAD/MAPE/TS repeatedly. Muscle memory wins on the day.
5. **Speak the definitions aloud**, APICS dictionary phrasing appears verbatim on the exam.

## 📚 BEFORE THE EXAM

- Complete this entire deck at least twice
- Take all 3 practice exams
- Re-read each module's Cheat-Sheet.md the day before
- Hydrate, sleep 8 hours, eat balanced, exam day fuel matters
