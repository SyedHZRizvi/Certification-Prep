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
  var STORAGE_KEY = 'fc-progress-cltd';
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

# 🃏 ASCM CLTD Master Flashcards

> **How to use:** Each card has a Q on one line and A on the next. Use the widget above for interactive review, or copy these into Anki/Quizlet. Aim for daily review until exam day.

---

## 🗺️ SECTION 1: LOGISTICS STRATEGY & NETWORK

**Q:** The 5 strategic logistics decisions
**A:** Network design, mode strategy, make-or-buy (3PL/4PL), service segmentation, technology stack.

**Q:** Center-of-gravity formula
**A:** X = Σ(Vi·xi)/Σ(Vi); Y = Σ(Vi·yi)/Σ(Vi). Weighted by demand volume Vi.

**Q:** Square-root rule for safety stock
**A:** Total network SS ≈ √N × single-location SS. Centralizing N→1 reduces total SS.

**Q:** Greenfield vs Brownfield
**A:** Greenfield = math-optimal site assuming clean slate. Brownfield = use/expand an existing facility.

**Q:** Hub-and-spoke vs point-to-point
**A:** Hub-and-spoke consolidates many small shipments through a hub (slower per shipment, cheaper total). Point-to-point is direct.

**Q:** 1PL through 5PL
**A:** 1PL shipper handles own; 2PL asset carrier; 3PL outsourced wh+transport; 4PL asset-light orchestrator of LSPs; 5PL = 4PL + e-com + analytics.

**Q:** Cross-dock vs DC
**A:** Cross-dock holds NO inventory (transient, sort inbound→outbound in hours). DC stores and picks orders.

**Q:** Forward stocking location
**A:** Small depot near a key customer, often a JIT OEM. Holds limited inventory close to demand.

**Q:** Free Trade Zone (FTZ)
**A:** US designation; defers customs duty until goods enter US commerce. Enables duty inversion + value-add.

**Q:** Bonded warehouse
**A:** Customs-controlled storage; duty deferred until goods leave for the host country.

**Q:** Total logistics cost components
**A:** Transport + warehouse ops + inventory carrying + admin + service-loss / lost-sales.

**Q:** Customer segmentation lenses
**A:** Velocity, value tier, geography, channel, different SLAs by segment.

**Q:** Nearshoring vs Reshoring vs Friendshoring
**A:** Nearshoring = move to geographically closer country. Reshoring = back to home country. Friendshoring = to allied countries.

**Q:** Optimal number of DCs sits at the
**A:** Minimum of the total-cost curve (outbound transport falls; inventory + facility cost rise).

**Q:** As you add DCs, what 3 costs rise and what 1 cost falls?
**A:** RISE: inventory carrying, facility cost, inbound transport. FALL: outbound transport.

---

## 📈 SECTION 2: CAPACITY & DEMAND

**Q:** Rated capacity formula
**A:** Rated = Theoretical × Utilization × Efficiency.

**Q:** Utilization vs Efficiency
**A:** Utilization = used/available time. Efficiency = actual output / standard output during used time.

**Q:** Capacity cushion
**A:** 1 − utilization. Planned slack that absorbs variability. Above 85% util, queues blow up.

**Q:** Effective capacity
**A:** Theoretical minus planned losses (setups, maintenance, breaks).

**Q:** Lead, Lag, Match capacity strategies
**A:** Lead = ahead of demand (growth markets). Lag = behind (commodity, declining). Match = aligned period-by-period (seasonal). Hybrid common.

**Q:** MAD formula
**A:** Σ|Actual − Forecast|/N. Magnitude of error.

**Q:** Bias formula (ASCM convention)
**A:** Σ(Actual − Forecast)/N. Direction. Negative = chronic over-forecast.

**Q:** Tracking signal alarm threshold
**A:** |TS| > 4 to 6 → forecast model needs retuning.

**Q:** MAPE formula
**A:** Σ|A−F|/|A| × 100/N. % magnitude.

**Q:** Forecast accuracy, aggregate vs detail
**A:** Aggregate forecasts are MORE accurate (lower relative error) due to law of large numbers.

**Q:** Theory of Constraints 5 focusing steps
**A:** 1) Identify the bottleneck, 2) Exploit, 3) Subordinate, 4) Elevate, 5) Repeat.

**Q:** ABC analysis
**A:** ~20% of SKUs = ~80% of value (A-items). Pareto principle.

**Q:** Seasonal capacity tactics
**A:** Temp labor, 3PL overflow, mode shift (ocean→air), pre-build inventory, cross-train, pre-position.

**Q:** Bullwhip cure
**A:** Shared POS / CPFR, smaller batches, EDLP, daily replenishment.

---

## 📦 SECTION 3: ORDER MANAGEMENT & FULFILLMENT

**Q:** OTC cycle ends with
**A:** Cash collection. Not delivery, not invoicing.

**Q:** ATP definition
**A:** Available to Promise = on-hand minus committed orders. Current, conservative.

**Q:** CTP definition
**A:** Capable to Promise = ATP + planned production/receipts. Future-aware.

**Q:** EDI 850
**A:** Purchase Order.

**Q:** EDI 855
**A:** Purchase Order Acknowledgement.

**Q:** EDI 856
**A:** Advance Shipping Notice (ASN).

**Q:** EDI 810
**A:** Invoice.

**Q:** Discrete vs Batch vs Zone vs Wave picking
**A:** Discrete = 1 order at a time. Batch = multiple orders, sort downstream. Zone = each picker a zone. Wave = grouped by shipping cutoff. Cluster = multi-bin cart.

**Q:** Perfect Order formula
**A:** OnTime% × Complete% × Damage-free% × Correct-Invoice%. MULTIPLICATIVE.

**Q:** Perfect Order at 95% per component
**A:** 0.95^4 ≈ 81.5%.

**Q:** OTIF
**A:** On-Time In-Full. Retailer-imposed (Walmart, Target, Kroger) with chargebacks.

**Q:** MABD
**A:** Must Arrive By Date, retailer-enforced delivery window for OTIF.

**Q:** BOPIS
**A:** Buy Online, Pick up In Store.

**Q:** Dark store
**A:** Closed-to-public store dedicated to online fulfillment.

**Q:** Last-mile cost share
**A:** 28–53% of total parcel cost.

**Q:** Pick-to-light vs Voice
**A:** Pick-to-light fastest at the bin but high CapEx. Voice nearly as fast, lower CapEx, hands-free.

**Q:** MFC
**A:** Micro-Fulfillment Center, small, automated DC near urban demand.

---

## 📊 SECTION 4: INVENTORY & DISTRIBUTION

**Q:** DRP vs MRP
**A:** DRP plans distribution-network replenishment (echelons). MRP explodes BOMs in production.

**Q:** Inventory Position
**A:** On-Hand + On-Order − Backorders. Use this (not on-hand) for reorder decisions.

**Q:** Safety stock formula
**A:** SS = Z × σ × √L. Z is service-level z-score, σ is demand stdev, L is lead time.

**Q:** Z-scores
**A:** 90%=1.28, 95%=1.65, 98%=2.05, 99%=2.33, 99.9%=3.09.

**Q:** Reorder Point formula
**A:** ROP = (d × L) + SS.

**Q:** Bullwhip Effect
**A:** Amplification of demand variability as it moves upstream in the supply chain.

**Q:** Postponement types
**A:** Form (config last), place (deploy from hub), time (build-to-order), pull, logistical, manufacturing.

**Q:** Benetton example
**A:** Form postponement, dye sweaters to actual color demand.

**Q:** ABC vs XYZ
**A:** ABC = value classification. XYZ = demand variability classification.

**Q:** FSN
**A:** Fast / Slow / Non-moving inventory classification.

**Q:** VED
**A:** Vital / Essential / Desirable, used for spare parts criticality.

**Q:** IRA target
**A:** Inventory Record Accuracy, 95–99% in a high-quality DC.

**Q:** Cycle counting methods
**A:** ABC-based, random sample, geographic zone, opportunity (bin-zero), control group.

**Q:** P-system vs Q-system
**A:** P (periodic) reviews every T periods, orders up to target. Q (continuous) reorders fixed Q when position ≤ ROP.

**Q:** CPFR
**A:** Collaborative Planning, Forecasting, and Replenishment. Shared retailer-supplier process.

**Q:** MEIO benefit
**A:** Multi-Echelon Inventory Optimization, reduces total network inventory 10–30% vs single-echelon.

**Q:** In a DRP record, planned order RELEASE is offset
**A:** Backward by the lead time from the planned order RECEIPT.

---

## 🏭 SECTION 5: WAREHOUSE OPERATIONS

**Q:** U-shape vs I-shape layout
**A:** U = both docks same side (general DC). I (straight-through) = docks opposite ends (high-volume automated).

**Q:** 7-step warehouse workflow
**A:** Receiving → Putaway → Storage → Replenishment → Picking → Packing → Shipping.

**Q:** Cross-dock variants
**A:** Pre-distribution (supplier pre-labels), post-distribution (allocate at dock), direct transfer, break-bulk.

**Q:** Random putaway
**A:** Any available slot, tracked by WMS, systematic, not chaotic.

**Q:** Drive-in racking
**A:** High density, LIFO, few SKUs deep storage.

**Q:** Selective racking
**A:** Low density, high selectivity, FIFO-friendly, most general DC.

**Q:** Pallet flow / gravity flow racking
**A:** High density, FIFO (load rear, pick front), good for cold storage.

**Q:** AS/RS
**A:** Automated Storage and Retrieval System, cranes in racking aisles.

**Q:** AGV vs AMR
**A:** AGV follows fixed wire/laser paths. AMR maps and routes dynamically (LiDAR/SLAM).

**Q:** Goods-to-Person (GTP)
**A:** Robotic shelves bring inventory to a stationary picker (Kiva, AutoStore, Geek+).

**Q:** Golden zone
**A:** Waist-to-shoulder pick height, ergonomically optimal slotting for fast movers.

**Q:** Cube utilization sweet spot
**A:** 65–85%. Above 85% impedes flow.

**Q:** Pick accuracy world-class
**A:** 99.5%+.

**Q:** Dock-to-stock time
**A:** Receipt to putaway-complete. Target <4 hours.

**Q:** WMS modules
**A:** Inventory, receiving, putaway, replenishment, order, pick/pack/ship, yard, labor (LMS), slotting, returns.

**Q:** OSHA forklift standard
**A:** 29 CFR 1910.178.

**Q:** C-TPAT
**A:** Customs-Trade Partnership Against Terrorism, US trusted-trader program for expedited customs.

**Q:** Cold-chain temperature ranges
**A:** Frozen ≤ -18°C, refrigerated 0–8°C, controlled ambient 15–25°C.

**Q:** VLM
**A:** Vertical Lift Module, vertical-axis storage tower for slow-mover small parts.

---

## 🚛 SECTION 6: TRANSPORTATION MODES

**Q:** Six modes
**A:** Truck, rail, ocean, air, pipeline, intermodal. Plus parcel (hybrid).

**Q:** FTL vs LTL size ranges
**A:** Parcel <150 lb. LTL 150–10,000 lb. FTL fills the trailer (~10+ pallets, 25k+ lb).

**Q:** TEU vs FEU
**A:** TEU = 20' container equivalent. FEU = 40' = 2 TEU.

**Q:** FCL vs LCL
**A:** Full Container Load (one shipper) vs Less-than-Container Load (multiple shippers share).

**Q:** BAF / CAF / GRI
**A:** Bunker Adjustment Factor (fuel) / Currency Adjustment Factor / General Rate Increase. Ocean rate components.

**Q:** COFC vs TOFC
**A:** Container On Flat Car vs Trailer On Flat Car (piggyback, less common today).

**Q:** Doublestack
**A:** Two containers stacked on a well car. North American standard.

**Q:** Drayage
**A:** Short-distance truck moves between rail ramps/ports and origin/destination.

**Q:** Air chargeable weight ratio
**A:** 1 kg per 6,000 cm³ (1:6,000). Chargeable = max(actual, volumetric).

**Q:** US HOS limits
**A:** 11-hr drive, 14-hr duty, 10-hr off, 60/70-hr week. FMCSA.

**Q:** Intermodal vs Multimodal
**A:** Intermodal = multiple modes + standardized equipment. Multimodal = multiple modes + single contract.

**Q:** Last-mile cost share
**A:** 28–53% of total parcel cost.

**Q:** Zone skipping
**A:** Inject parcel deeper into a region via LTL/truckload before handing to the carrier. Saves cost.

**Q:** NMFC class
**A:** National Motor Freight Classification, LTL freight class (50–500) by density, value, stowability, handling.

**Q:** Most reliable mode
**A:** Pipeline (rarely affected by weather, traffic, congestion).

**Q:** Cheapest mode per ton-mile
**A:** Pipeline (fluids); ocean for general cargo.

**Q:** Most expensive mode
**A:** Air freight (5–8× ocean cost, ~1/25th transit time).

**Q:** Rail fuel efficiency vs truck
**A:** ~3–4× more efficient (~480 ton-mi/gal vs ~130).

**Q:** Tender acceptance
**A:** % of loads that carriers accept when offered. >95% preferred.

**Q:** Total Landed Cost
**A:** Product + Freight + Duties/Taxes + Insurance + Handling + Inventory carrying + Brokerage.

---

## 🌐 SECTION 7: GLOBAL LOGISTICS & CUSTOMS

**Q:** Number of Incoterms 2020 rules
**A:** 11. EXW, FCA, CPT, CIP, DAP, DPU, DDP (any mode) + FAS, FOB, CFR, CIF (ocean/inland-waterway).

**Q:** What changed from Incoterms 2010 to 2020?
**A:** DAT renamed to DPU. CIP requires all-risk insurance (Clauses A). FCA allows BOL with on-board notation.

**Q:** FOB use case
**A:** Bulk ocean / inland-waterway where goods are physically loaded ON A VESSEL. NOT for containers.

**Q:** Why FCA, not FOB, for containers?
**A:** FOB transfers risk on board the vessel. Containers handed to carrier before loading, risk gap. FCA transfers risk when seller hands to carrier at origin.

**Q:** Under C-terms (CIF, CFR, CIP, CPT), where does risk transfer?
**A:** At origin (when handed to carrier or on board). Seller pays freight to destination but does not bear in-transit risk.

**Q:** DDP definition
**A:** Delivered Duty Paid, seller delivers door-to-door INCLUDING import duty.

**Q:** DAP vs DPU vs DDP
**A:** DAP = delivered, NOT unloaded, buyer clears customs. DPU = delivered + unloaded by seller. DDP = + import duty paid.

**Q:** CIF vs CIP insurance
**A:** CIF requires minimum cover (Clauses C). CIP requires all-risk cover (Clauses A).

**Q:** EXW seller responsibility
**A:** Minimum, buyer collects from seller's premises. Buyer arranges everything.

**Q:** Incoterms seller-responsibility ladder
**A:** EXW → FCA → FAS → FOB → CFR → CIF → CPT → CIP → DAP → DPU → DDP.

**Q:** HS code digits
**A:** 6 digits global (World Customs Organization standard).

**Q:** US HTS digits
**A:** 10 digits.

**Q:** Importer of Record (IOR)
**A:** Legally responsible party for customs declaration, duties, and compliance.

**Q:** Customs broker vs Freight forwarder
**A:** Broker files customs entries. Forwarder books transport and prepares docs without taking goods possession.

**Q:** NVOCC
**A:** Non-Vessel Operating Common Carrier, issues own BL but does not own ships.

**Q:** USMCA
**A:** US-Mexico-Canada Agreement, effective 2020, replaced NAFTA.

**Q:** Major FTAs
**A:** USMCA, EU Single Market, CPTPP, RCEP, ASEAN FTA, AfCFTA.

**Q:** Rules of origin
**A:** Qualify for FTA preference via wholly-obtained, substantial transformation, or RVC threshold + Certificate of Origin.

**Q:** Ad valorem duty
**A:** Calculated as % of declared customs value (most common).

**Q:** Anti-dumping duty
**A:** Punitive duty when foreign goods sold below normal market value.

**Q:** Letter of Credit (LC) payment trigger
**A:** Documents matching the LC terms. Document-driven, not goods-driven.

**Q:** ATA Carnet
**A:** Temporary Importation under Bond, duty-free temporary import (samples, trade shows, repair).

**Q:** C-TPAT / AEO / PIP
**A:** Trusted-trader supply-chain security programs (US / EU / Canada) granting expedited customs.

**Q:** OFAC SDN list
**A:** US sanctions list, must screen all international shipments.

**Q:** MPF / HMF (US)
**A:** Merchandise Processing Fee / Harbor Maintenance Fee. US import charges.

---

## 🔄 SECTION 8: REVERSE LOGISTICS & SUSTAINABILITY

**Q:** Reverse logistics definition
**A:** Backward flows of goods/info for value recovery and responsible disposal, returns, recalls, repair, EOL, packaging.

**Q:** 5-step returns process
**A:** Authorization (RMA) → Receipt → Gatekeeping → Refurbish/repackage → Recovery (resell/liquidate/recycle/dispose).

**Q:** Gatekeeping
**A:** The disposition decision step in returns, drives value recovery rate.

**Q:** Refurbish vs Remanufacture
**A:** Refurbish = light (clean/test/repackage, limited warranty). Remanufacture = full disassemble + restore, new-equivalent warranty.

**Q:** Caterpillar Reman example
**A:** Closed-loop supply chain, buyers return cores; CAT remanufactures and resells.

**Q:** 7Rs hierarchy
**A:** Refuse, Reduce, Reuse, Refurbish (or Remanufacture/Recycle), Recover, Dispose.

**Q:** Triple Bottom Line
**A:** People, Planet, Profit (3P).

**Q:** Scope 1 emissions
**A:** Direct, your own fleet's tailpipes, your boilers.

**Q:** Scope 2 emissions
**A:** Indirect from purchased energy (grid electricity for warehouse).

**Q:** Scope 3 emissions
**A:** Upstream/downstream value chain, purchased transportation, suppliers, customer use.

**Q:** GHG Protocol
**A:** Global standard for corporate emissions accounting (WRI + WBCSD).

**Q:** GLEC Framework
**A:** Logistics-specific GHG accounting (mode-by-mode emission factors).

**Q:** Air vs Ocean carbon intensity
**A:** Air freight is 50–100× more carbon-intensive per ton-km than ocean.

**Q:** ISO 14001
**A:** Environmental Management System standard.

**Q:** ISO 14064
**A:** GHG quantification and reporting standard.

**Q:** ISO 14067
**A:** Carbon footprint of products.

**Q:** GRI
**A:** Global Reporting Initiative, multi-stakeholder ESG reporting framework.

**Q:** SASB → ISSB
**A:** Sustainability Accounting Standards Board, now incorporated into ISSB / IFRS S1+S2.

**Q:** TCFD
**A:** Task Force on Climate-related Financial Disclosures.

**Q:** EU CSRD
**A:** Corporate Sustainability Reporting Directive, mandatory EU sustainability reporting.

**Q:** WEEE
**A:** EU directive on Waste from Electrical and Electronic Equipment, extended producer responsibility.

**Q:** Closed-loop vs Circular economy
**A:** Closed-loop = firm-level (your products cycle back to you). Circular = systemic, society-wide design principle.

**Q:** Top sustainability lever in transportation
**A:** Mode shift, truck → rail saves ~75% CO₂ per ton-mile.

**Q:** Backhaul
**A:** Loaded return trip after outbound delivery, revenue + emissions saved.

**Q:** Diversion rate
**A:** % of waste diverted from landfill (recycled, reused, composted).

**Q:** Carbon offset
**A:** Last-resort mechanism after internal reductions. Frameworks like SBTi prioritize reductions over offsets.

**Q:** Sustainable packaging principles
**A:** Right-size, returnable/reusable, recyclable mono-material, lightweight, eliminate void fill, modular/nestable.

---

## 🎓 SECTION 9: EXAM-DAY ESSENTIALS

**Q:** CLTD exam length & pass mark
**A:** 150 questions, 3.5 hours (210 minutes), pass at 300+ scaled score (~70% raw).

**Q:** CLTD time per question
**A:** ~84 seconds per question. If stuck >2 min, mark and move on.

**Q:** CLTD highest-weighted domain
**A:** Transportation (~16%).

**Q:** CLTD lowest-weighted domain
**A:** Reverse logistics & sustainability (~9%), but easy points if studied.

**Q:** CLTD certification validity
**A:** 5 years. Maintained via 75 maintenance points.

**Q:** Top exam trap (Incoterms)
**A:** Using FOB for containers (wrong). Use FCA instead.

**Q:** Top exam trap (Risk transfer)
**A:** Under C-terms (CIF/CFR/CIP/CPT), risk transfers at ORIGIN, even though seller pays freight to destination.

**Q:** Top exam trap (Emissions)
**A:** Purchased carrier transportation is Scope 3, NOT Scope 1.

**Q:** Top exam trap (DRP vs MRP)
**A:** They use similar time-phased mechanics but operate in different domains, DRP for distribution networks, MRP for production BOMs.

**Q:** Top exam trap (Square-root rule)
**A:** Centralizing inventory reduces total SS (and decentralizing raises it) by approximately √N.

---

## 📚 STUDY TIPS

1. **Read the Reading.md for each module 2x**, once for understanding, once for memorization.
2. **Print the cheat sheets**, physically tape Module 7 Incoterms matrix above your desk.
3. **Drill Incoterms daily**, it's 8–12 questions on the exam.
4. **Use these flashcards in 2-week spaced-repetition cycles**.
5. **Time-box mock exams**, 84 seconds per question. Don't practice slow.
6. **Pre-position weakness study**, count wrong answers by domain after each practice exam.

---

## 🎯 BEFORE THE EXAM

- Sleep 8 hours the night before
- Arrive 30 min early at testing center / set up OnVUE 30 min early
- Bring 2 forms of ID
- 84 sec/question pacing, if stuck, mark & move on
- Re-read each question TWICE before answering
- Eliminate clearly-wrong answers first
- For Incoterms questions, picture the responsibility ladder
- For DRP/inventory, sketch the timeline on scratch paper

🍀 Pass CLTD. Go get it.
