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
  var STORAGE_KEY = 'fc-progress-cpim';
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

# 🃏 ASCM CPIM Master Flashcards

> **How to use:** Each card has a Q on one line and A on the next. Daily review until exam. Use the section filter to drill weak areas.

---

## 🏭 SECTION 1: MANUFACTURING STRATEGY

**Q:** What are the 4 manufacturing environments?
**A:** Make-to-Stock (MTS), Assemble-to-Order (ATO), Make-to-Order (MTO), Engineer-to-Order (ETO).

**Q:** Where is the customer order decoupling point in MTS?
**A:** At finished goods.

**Q:** Where is the customer order decoupling point in ATO?
**A:** At the sub-assembly / module level.

**Q:** Where is the customer order decoupling point in MTO?
**A:** At raw materials.

**Q:** Where is the customer order decoupling point in ETO?
**A:** At design / engineering — production begins after the contract.

**Q:** Define order qualifier.
**A:** The minimum criteria a product must meet to be considered for purchase.

**Q:** Define order winner.
**A:** The criterion that causes a customer to choose your product over competitors.

**Q:** Terry Hill's principle about qualifiers and winners?
**A:** Today's winner becomes tomorrow's qualifier as competitors catch up.

**Q:** Define postponement.
**A:** Delaying final product differentiation until the customer order is received.

**Q:** What is the canonical postponement example?
**A:** HP printers — generic chassis at factory, country-specific power kit added at regional DC.

**Q:** What is mass customization?
**A:** Combining high-volume production economics with customer-specific customization, usually via ATO + postponement.

**Q:** Name the 5 competitive priorities.
**A:** Cost, Quality, Delivery (speed + reliability), Flexibility, Service / Innovation.

**Q:** The Hayes-Wheelwright product-process matrix recommends what?
**A:** Operate on the diagonal where product variety/volume aligns with process choice.

**Q:** What are the 3 levels of strategy in cascade order?
**A:** Corporate → Business → Functional (Operations).

**Q:** Define Triple Bottom Line.
**A:** People, Planet, Profit (Elkington, 1994) — sustainability as a strategic constraint.

**Q:** What's reshoring?
**A:** Bringing previously offshored production back to the domestic market.

---

## 📈 SECTION 2: DEMAND PLANNING & FORECASTING

**Q:** What are the 4 components of demand (TCSR)?
**A:** Trend, Cyclical, Seasonal, Random.

**Q:** What's the difference between cyclical and seasonal?
**A:** Cyclical repeats over multiple years (business cycle). Seasonal repeats within a year.

**Q:** Simple moving average formula?
**A:** F = (sum of last n periods) / n.

**Q:** Exponential smoothing formula?
**A:** F_(t+1) = α × D_t + (1 − α) × F_t, with 0 < α < 1.

**Q:** What does a high α (e.g., 0.5) do?
**A:** Makes the forecast more responsive to recent demand — but noisier.

**Q:** MAD formula?
**A:** Σ |error| / n.

**Q:** MAPE formula?
**A:** Σ (|error| / D) / n × 100% — error as a percent of demand.

**Q:** MSE formula?
**A:** Σ error² / n — penalizes large misses.

**Q:** Bias (cumulative forecast error)?
**A:** Σ errors — positive = under-forecasting, negative = over-forecasting.

**Q:** Tracking signal formula?
**A:** Bias / MAD. Alarm when |TS| exceeds about 4.

**Q:** What is the Delphi method?
**A:** Anonymous expert rounds with feedback between rounds — used for new products with no history.

**Q:** Forecast aggregation principle?
**A:** Forecasts are more accurate at higher aggregation levels and longer time buckets.

**Q:** What is CPFR?
**A:** Collaborative Planning, Forecasting & Replenishment — a framework for sharing forecasts between trading partners.

**Q:** What is the bullwhip effect?
**A:** Amplification of demand variability as you move upstream in a supply chain.

**Q:** Two main bullwhip cures?
**A:** Share POS data (transparency) and shorten lead times.

---

## 🤝 SECTION 3: S&OP

**Q:** Name the 5 S&OP steps in order.
**A:** Product/Portfolio Review → Demand Review → Supply Review → Pre-S&OP / Reconciliation → Executive S&OP.

**Q:** Who leads the Demand Review (Step 2)?
**A:** Sales / Marketing.

**Q:** Who leads the Supply Review (Step 3)?
**A:** Operations.

**Q:** Who chairs the Executive S&OP (Step 5)?
**A:** The CEO (or top executive).

**Q:** At what aggregation level does S&OP plan?
**A:** Product family level (not SKU).

**Q:** S&OP planning horizon?
**A:** 12–24 months, rolling cadence.

**Q:** S&OP cadence?
**A:** Monthly.

**Q:** Difference between S&OP and IBP?
**A:** IBP is the mature, financially-integrated form of S&OP with a longer horizon (24–36+ months).

**Q:** Define Level aggregate strategy.
**A:** Constant production rate; inventory absorbs demand variation.

**Q:** Define Chase aggregate strategy.
**A:** Production exactly matches demand each period; no inventory build.

**Q:** Define Hybrid aggregate strategy.
**A:** Level base production + chase overflow with overtime/contract.

**Q:** What is an unconstrained demand plan?
**A:** What the company would sell if capacity were unlimited — generated in Step 2 before reconciliation.

**Q:** Resource Planning sits at which capacity layer?
**A:** The longest-range, strategic layer (S&OP-linked).

---

## 🗓️ SECTION 4: MASTER SCHEDULING & MRP

**Q:** MPS plans what type of demand?
**A:** Independent (customer/forecast-driven) — finished goods.

**Q:** MRP plans what type of demand?
**A:** Dependent — calculated from MPS and BOMs.

**Q:** Which is closer in time: DTF or PTF?
**A:** DTF (Demand Time Fence) is closer. PTF is further out.

**Q:** What's the rule for forecast inside the DTF?
**A:** Ignored. Only firm customer orders count toward the projected available balance.

**Q:** ATP formula?
**A:** ATP_period = MPS_period − sum of customer orders before next MPS receipt.

**Q:** MRP net requirement formula?
**A:** Net = Gross − On-hand − Scheduled receipts.

**Q:** Planned order release date formula?
**A:** Release date = Receipt date − Lead time.

**Q:** What is low-level coding in MRP?
**A:** Assigning each item the deepest level it appears in any BOM, so MRP processes it once with all parent demands netted.

**Q:** Define CTP (Capable-to-Promise).
**A:** Like ATP, but considers replanning capacity and materials — not just existing schedule.

**Q:** Name 5 lot-sizing rules.
**A:** Lot-for-Lot (L4L), EOQ, Period Order Quantity (POQ), Fixed Order Quantity (FOQ), Min/Max.

**Q:** What are the 4 MRP action messages?
**A:** Release (now), Reschedule in (earlier), Reschedule out (later), Cancel.

**Q:** What is pegging in MRP?
**A:** Traceability from a component requirement back to the parent demand that caused it.

**Q:** Two-level MPS is for which environment?
**A:** ATO — schedule modules + final assembly separately.

**Q:** What is a firm planned order?
**A:** A planned order that the system cannot modify or reschedule automatically — human-locked.

---

## 🏗️ SECTION 5: CAPACITY PLANNING

**Q:** Name the 4 layers of the capacity hierarchy.
**A:** Resource Planning (RRP), Rough-Cut Capacity Planning (RCCP), Capacity Requirements Planning (CRP), Input/Output Control.

**Q:** Which capacity layer supports MPS?
**A:** RCCP.

**Q:** Which capacity layer supports MRP?
**A:** CRP.

**Q:** Which capacity layer supports PAC?
**A:** Input/Output Control.

**Q:** Difference between design and effective capacity?
**A:** Design = theoretical max under ideal conditions. Effective = realistic max given product mix, scheduling, maintenance.

**Q:** Rated capacity formula?
**A:** Effective × Utilization × Efficiency.

**Q:** Define Utilization.
**A:** Hours actually used ÷ Hours available.

**Q:** Define Efficiency.
**A:** Standard hours earned ÷ Actual hours worked.

**Q:** Define Lead capacity strategy.
**A:** Add capacity BEFORE demand arrives. Risk: idle capacity.

**Q:** Define Lag capacity strategy.
**A:** Add capacity AFTER demand exceeds it. Risk: lost sales.

**Q:** Name the 5 Focusing Steps of TOC.
**A:** Identify, Exploit, Subordinate, Elevate, Repeat.

**Q:** What is the Drum in Drum-Buffer-Rope?
**A:** The bottleneck — its pace sets the rhythm of the plant.

**Q:** What is the Buffer in DBR?
**A:** Inventory placed before the bottleneck to protect it from starvation.

**Q:** What is the Rope in DBR?
**A:** Communication mechanism that ties material release to the drum's pace.

**Q:** TOC definition of Throughput?
**A:** Sales revenue minus truly variable (raw material) cost — dollars, not units.

**Q:** What's the rule about non-bottlenecks in TOC?
**A:** An hour saved at a non-bottleneck is a mirage — it does NOT increase system throughput.

---

## 📦 SECTION 6: INVENTORY MANAGEMENT

**Q:** Name the 6 functions of inventory.
**A:** Cycle (lot-size), Safety, Anticipation, Transit (pipeline), Hedge, Decoupling.

**Q:** EOQ formula?
**A:** EOQ = √(2 × D × S / H).

**Q:** EOQ with D=10,000, S=$50, H=$2 → ?
**A:** √(2 × 10000 × 50 / 2) = √500,000 ≈ 707 units.

**Q:** EPQ vs EOQ relationship?
**A:** EPQ is always LARGER than EOQ; multiplied by √(p/(p−d)).

**Q:** Reorder Point formula?
**A:** ROP = (average daily demand × lead time) + safety stock.

**Q:** σ over lead time (independence) formula?
**A:** σ_LT = σ_daily × √LT.

**Q:** Safety stock formula?
**A:** SS = z × σ_LT.

**Q:** z value for 95% service level?
**A:** 1.65.

**Q:** z value for 99% service level?
**A:** 2.33.

**Q:** ABC classifies inventory by what?
**A:** Annual dollar volume (annual cost × annual usage) — Pareto principle.

**Q:** Typical A-item share?
**A:** ~10–20% of SKUs, ~70–80% of dollar volume.

**Q:** Recommended cycle-count frequency for A items?
**A:** Monthly or more frequently.

**Q:** Inventory Record Accuracy target for A items?
**A:** ≥95% (with 0% tolerance — must be exact).

**Q:** Inventory turnover formula?
**A:** Annual COGS ÷ Average inventory.

**Q:** Days of supply formula?
**A:** 365 ÷ Turnover (they are reciprocals × 365).

**Q:** Define VMI.
**A:** Vendor-managed inventory — supplier monitors and replenishes customer's inventory level; customer usually still owns.

**Q:** Define consignment.
**A:** Supplier OWNS the inventory at the customer site until the customer consumes it.

---

## 🏃 SECTION 7: PRODUCTION ACTIVITY CONTROL

**Q:** Name the 5 elements of manufacturing lead time.
**A:** Queue, Setup, Run, Wait, Move (Q-S-R-W-M).

**Q:** Which element dominates manufacturing lead time?
**A:** Queue — typically 60-80% of total LT.

**Q:** What's the difference between Queue and Wait time?
**A:** Queue = time BEFORE processing. Wait = time AFTER processing (before move).

**Q:** What does SPT (Shortest Processing Time) optimize?
**A:** Mean flow time on a single machine.

**Q:** What does EDD (Earliest Due Date) optimize?
**A:** Maximum tardiness / number tardy.

**Q:** Critical Ratio formula?
**A:** CR = (Due date − Today) / Work days remaining.

**Q:** CR of 0.7 means?
**A:** Behind schedule — process first. (CR < 1 = behind.)

**Q:** Define manufacturing cell.
**A:** Group of dissimilar machines that together produce a family of similar parts.

**Q:** What is Group Technology?
**A:** Classifying parts by shape/feature so cells can dedicate to part families.

**Q:** SMED setup time goal?
**A:** Under 10 minutes (single-digit-minute setup).

**Q:** First step of SMED?
**A:** Separate internal (machine-stopped) vs external (machine-running) setup activities and convert internal to external where possible.

**Q:** Difference between Push and Pull systems?
**A:** Push = schedule (MRP) releases work. Pull = actual downstream demand/consumption triggers release.

---

## 🔧 SECTION 8: QUALITY, LEAN & CONTINUOUS IMPROVEMENT

**Q:** Name the 7 wastes (TIMWOOD).
**A:** Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects.

**Q:** Which waste is considered the worst?
**A:** Overproduction — it creates all the other wastes.

**Q:** What does DOWNTIME add to TIMWOOD?
**A:** N for "Non-utilized talent" (the 8th waste — unused human potential).

**Q:** Name the 5 lean principles (Womack & Jones).
**A:** Value, Value Stream, Flow, Pull, Perfection.

**Q:** Kanban sizing formula?
**A:** N = (D × LT × (1 + SS)) / C, where N = number of kanbans.

**Q:** Takt time formula?
**A:** Takt = Available production time / Customer demand (per period).

**Q:** Takt vs Cycle time?
**A:** Takt = desired pace (per customer demand). Cycle time = actual production rate.

**Q:** The 5 S's in order.
**A:** Sort, Set in order, Shine, Standardize, Sustain.

**Q:** Define Jidoka.
**A:** Autonomation — machine stops automatically when a defect is detected.

**Q:** Define Andon.
**A:** Visual signal (cord, light) used to stop the line or call for help.

**Q:** Define Poka-yoke.
**A:** Mistake-proofing — designing things so errors are impossible.

**Q:** Name the 5 DMAIC phases.
**A:** Define, Measure, Analyze, Improve, Control.

**Q:** What methodology is used for NEW product/process design?
**A:** DMADV (Define, Measure, Analyze, Design, Verify).

**Q:** Six Sigma defect target?
**A:** 3.4 defects per million opportunities (DPMO).

**Q:** Cp vs Cpk?
**A:** Cp = potential capability if process were perfectly centered. Cpk = actual capability accounting for off-center process mean.

**Q:** Cpk thresholds?
**A:** ≥1.33 = capable. ≥2.0 = world-class (Six Sigma).

**Q:** Control chart point outside ±3σ — common or special cause?
**A:** Special cause — investigate.

**Q:** OEE formula?
**A:** OEE = Availability × Performance × Quality.

**Q:** OEE world-class target?
**A:** 85%+.

**Q:** PDCA stands for?
**A:** Plan, Do, Check, Act — the Deming cycle.

**Q:** Six Sigma belts in order of seniority?
**A:** White/Yellow (awareness) → Green (part-time PM) → Black (full-time PM) → Master Black Belt (coach) → Champion (executive sponsor).

**Q:** Most important prerequisite for kaizen?
**A:** Standard work — a documented baseline to improve from.

---

## 🎯 SECTION 9: HIGH-YIELD VOCABULARY & TRAPS

**Q:** ATP, CTP, PTP in one sentence each.
**A:** ATP = uncommitted MPS. CTP = ATP after a what-if reschedule. PTP = the profitable subset of CTP.

**Q:** MPS vs MRP in 5 words?
**A:** MPS = finished goods. MRP = components.

**Q:** What does "rolling horizon" mean?
**A:** The plan is replanned every cycle — never frozen for the full horizon.

**Q:** What's "off-diagonal" on the Hayes-Wheelwright matrix?
**A:** A structural mismatch between product volume/variety and process choice — economically broken.

**Q:** Why are forecasts more accurate at higher aggregation?
**A:** Random noise cancels out when you aggregate; the systematic signal dominates.

**Q:** Why is queue time the highest-leverage LT reduction?
**A:** It's 60-80% of total manufacturing LT; cutting it has the biggest impact.

**Q:** What is the relationship between MRP and Lean kanban?
**A:** They typically coexist — MRP plans materials at the medium-range; kanban executes pull at the cell.

**Q:** Why is sustainability now a strategic constraint?
**A:** ASCM treats Triple Bottom Line as equivalent to cost or quality; modern exams test it.

**Q:** Why does Toyota teach "overproduction is the worst waste"?
**A:** Because it directly creates the other 6 — extra inventory, motion, transport, defects hidden in WIP, etc.

**Q:** The single one-line summary of CPIM?
**A:** Plan at each level (S&OP → MPS → MRP → PAC), align capacity (RRP → RCCP → CRP → I/O), manage inventory (EOQ, ROP, ABC), and continuously improve (Lean, Six Sigma, TOC).

---

## 📝 STUDY TIPS FOR FLASHCARDS

1. **Use Anki for spaced repetition.** 10-15 minutes daily until the exam.
2. **If you guess, mark it wrong.** Honest grading is the only way the algorithm helps you.
3. **Interleave sections.** Don't review one section straight through — mix.
4. **Add cards as you find weak spots.** Wrong quiz answer → new card.
5. **Drill formulas with paper.** EOQ, ROP, SS, OEE — write them out.

---

## 🎯 BEFORE THE EXAM

You should be able to instantly answer:
- The 4 manufacturing environments + decoupling point of each
- The 5 S&OP steps + who leads each
- MPS vs MRP scope
- DTF vs PTF rules
- ATP and MRP net-requirement formulas
- EOQ, EPQ, ROP, SS formulas
- The 4 capacity layers + which planning layer each supports
- The 5 Focusing Steps of TOC
- The 7 wastes (TIMWOOD)
- DMAIC phases + Six Sigma 3.4 DPMO target
- OEE formula

Good luck! 🚀
