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
  var STORAGE_KEY = 'fc-progress-aimkt-entrepreneur';
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

# 🃏 AI Digital Marketing Entrepreneur Master Flashcards

> **How to use:** Use the dropdown to filter by section. Click any card to flip. Use "Got it" to mark a card known (persists in your browser). Shuffle when you've gone through the deck once. Pair with the modules and practice exams for spaced repetition.

---

## 📦 SECTION 1: NICHE & POSITIONING

**Q:** What is the 100/10/1 niche test?
**A:** Can you list 100 named companies in your niche? Can you find 10 watering holes where they hang out? Can you name 1 painful, undersolved shared problem? Pass all three = real wedge.

**Q:** Name the three wedge axes.
**A:** Vertical (industry), Channel (delivery medium), Deliverable (productized service). Most high-performers stack two.

**Q:** What is a "stacked wedge"?
**A:** Niching along 2–3 axes simultaneously (e.g., Google Ads + addiction-recovery centers). Typically achieves $700K–$1.5M Year-2 ARR (Annual Recurring Revenue) ceilings.

**Q:** Why does niching multiply your hourly rate?
**A:** Specialists are perceived as solving a specific painful problem and command 3–8x generalist rates.

**Q:** What is Brett Williams's Designjoy?
**A:** A one-person ~$1.5M ARR productized design subscription at ~$4,995/mo and ~70% margin. The patron saint of productized services.

**Q:** Define "ICP."
**A:** Ideal Customer Profile, industry + company size + geography + buyer role + situation.

**Q:** Why is "I help businesses grow" bad positioning?
**A:** It's generic, ungoogleable, un-referrable. The #1 Year-1 mistake.

**Q:** What is the typical Year-2 niched-solo ARR range?
**A:** $180K–$420K gross, $120K–$280K net.

**Q:** What is the typical Year-3–5 productized-agency ARR range?
**A:** $400K–$900K gross, $200K–$520K net, with 2–4 employees.

**Q:** What are the six Year-1 founder mistakes?
**A:** Generic positioning, hourly billing, perfect-website-first, off-niche clients, hiring too early, confusing client work with business-building work.

---

## 📦 SECTION 2: PRODUCTIZED SERVICES

**Q:** What are the 5 Fixed Anchors of a productized service?
**A:** Scope, Price, Process, Time, Outcome. Fail any one and you're back in consulting hell.

**Q:** Why is hourly billing bad for AI-leveraged operators?
**A:** AI makes you faster, so your billable hours drop with the same deliverable, income falls. Productize instead.

**Q:** Name the 10 components of a productized service's anatomy.
**A:** Promise, deliverables, process, intake form, kickoff Loom, deliverable template, walkthrough Loom, implementation handoff, upsell email, testimonial ask.

**Q:** What is "AI leverage"?
**A:** The output multiplier from inserting AI into delivery steps. Audit work + content drafting target 5–8x.

**Q:** What is the audit-as-wedge pattern?
**A:** Selling a cheap productized audit as the entry to a higher-ticket retainer. Workshop Digital reports ~40% audit-to-retainer conversion.

**Q:** What is the "tripled price" exercise?
**A:** Try selling your service at 3x your gut price. Most productized services sell at 2–3x the founder's gut number.

**Q:** What is the target gross margin for a productized service at scale?
**A:** 60–80%.

**Q:** What is the Year-1 effective hourly target for founders?
**A:** $150–$250/hr effective.

**Q:** How many SKUs should you have Year 1?
**A:** 1 SKU (Stock Keeping Unit) Year 1, 2 SKUs Year 2, 3 SKUs Year 3. Resist adding more.

**Q:** What's the rule on revisions in productized services?
**A:** One revision round included. Additional revisions at a flat fee ($250–$500).

---

## 📦 SECTION 3: CLIENT ACQUISITION

**Q:** Name the 7 client-acquisition channels.
**A:** Outbound, Inbound, Referrals, Networks, Partnerships, Events, Paid ads.

**Q:** What's the Year-1 default channel pair?
**A:** Outbound + Inbound. Outbound for near-term cash, Inbound for compounding.

**Q:** What does PVCC stand for in cold email?
**A:** Problem-Value-Credibility-Call. The 4-line cold-email structure under 110 words.

**Q:** Typical cold-email positive reply rate?
**A:** 2.5–5% with a quality list and warm-up.

**Q:** What is the typical 1,000-send outbound math?
**A:** 1,000 sends → 30 positive replies → 13 booked calls → 9 shows → 2 closes. ~$10K at $5K avg ACV.

**Q:** What's the typical Year-1 outbound stack cost?
**A:** ~$235/mo: Apollo $79 + Smartlead $39 + 3 inboxes $18 + LinkedIn SalesNav $99.

**Q:** Minimum ACV for paid ads to make math sense?
**A:** $7,500+. Below that, paid CAC (Customer Acquisition Cost) ($800–$2,500 per booked call) doesn't pay back.

**Q:** What is the Justin Welsh content engine?
**A:** 5 LinkedIn posts/week + weekly newsletter, ~8 hr/week, repurposed across 5 LinkedIn + 5 tweets + 1 video per newsletter.

**Q:** What's the typical LinkedIn DM-to-call conversion rate?
**A:** 6–12%, higher than cold email but at lower volume.

**Q:** Should you join 5 communities at once?
**A:** No. Pick ONE community. Show up consistently for 90 days before asking for anything.

---

## 📦 SECTION 4: PRICING, PROPOSALS, CONTRACTS

**Q:** Name the 5 pricing mindsets.
**A:** Price the outcome not the time; price for buyer's wallet; never quote on the call; anchor first; comfortable with no.

**Q:** What % of buyers pick the middle option in good-better-best pricing?
**A:** 60–70%.

**Q:** How should Option C in good-better-best be priced?
**A:** 2.5–3x Option A, to serve as the anchor that makes Option B feel reasonable.

**Q:** What's a healthy proposal close rate?
**A:** 30–50%. Above 50% often signals underpricing.

**Q:** What are the 7 sections of a proposal that closes?
**A:** Cover + recap, problem, approach, ROI (Return on Investment) projection, investment (3 options), timeline + next steps, logistics + FAQ.

**Q:** What is a kill fee?
**A:** Penalty paid by the client if they cancel mid-engagement. Typically 25–50% of unbilled balance.

**Q:** What's a typical liability cap in service contracts?
**A:** Fees paid in the last 6–12 months.

**Q:** Recommended payment terms for a $5,000 productized audit?
**A:** 100% upfront. Short delivery, no AR risk.

**Q:** What payment terms are standard for a monthly retainer?
**A:** First month due on signature; Net 7 thereafter.

**Q:** What does MSA + SOW mean?
**A:** Master Service Agreement (standing legal terms) + Statement of Work (per-engagement scope). Sign MSA once, new SOW per engagement.

**Q:** What is the AI disclosure clause?
**A:** A 2025+ standard contract clause stating you may use generative AI tools, that you review all final deliverables, and that you won't submit client confidential data without consent.

---

## 📦 SECTION 5: TECH STACK

**Q:** Name the 4-question subscription test.
**A:** (1) Enables billable workflow? (2) No cheaper substitute does 80%? (3) Used 3+ times/week? (4) Pays for itself in 1 client interaction/quarter?

**Q:** What's the Year-1 solo, inbound-led stack cost target?
**A:** ~$200/mo (Tier 1).

**Q:** What's the Year-1 solo with outbound stack cost target?
**A:** ~$430/mo (Tier 2).

**Q:** What's the recommended LLM (Large Language Model) choice for a solo Year-1 founder?
**A:** ChatGPT Plus OR Claude Pro at $20/mo, plus a free secondary.

**Q:** How do Make.com, n8n, and Zapier compare on cost?
**A:** Make.com is the sweet spot. n8n self-hosted wins at high volume (10K+ ops/mo). Zapier is convenient but expensive.

**Q:** Should you subscribe to both Ahrefs and SEMrush?
**A:** No. Pick ONE. They do 90% of the same work.

**Q:** What's in the "sucker stack" to skip Year 1?
**A:** HubSpot Marketing Hub Pro, Salesforce, ZoomInfo (use Apollo), Outreach.io/Salesloft, multiple SEO (Search Engine Optimization) tools simultaneously.

**Q:** Tool spend should target what % of revenue?
**A:** 1–2%.

**Q:** Recommended Year-1 analytics stack cost?
**A:** $0, GA4 (Google Analytics 4) + Search Console + Looker Studio + Microsoft Clarity.

**Q:** What's the day-1 security stack?
**A:** YubiKey 5 NFC ($50 once) + 1Password or Bitwarden ($3–$8/mo). Cheapest insurance you can buy.

---

## 📦 SECTION 6: HIRING & MANAGEMENT

**Q:** Name the 3 legitimate hiring triggers.
**A:** Sustained 50+ hr/wk for 8+ weeks with overflow, specific bottleneck >15 hr/wk, active inbound prospects being turned away.

**Q:** What is the 1.5x hiring rule?
**A:** A new hire should generate 1.5–2x their cost in freed capacity or new revenue within 90 days.

**Q:** Name the 5 AI-native operator traits.
**A:** Daily AI usage, loves shipping fast, self-teaches new tools, async-first communicator, process-oriented.

**Q:** What is the DECIDING step in the interview funnel?
**A:** The PAID work-sample test (real task, 2–4 hours, paid at hourly rate).

**Q:** How much better do work-sample tests predict performance vs behavioral interviews?
**A:** 2–3x better (Schmidt & Hunter; replicated by Google, IDEO, Stripe).

**Q:** Recommended structure for the work-sample rubric?
**A:** Output quality 35%, AI usage 20%, speed 15%, communication 15%, process 15%. Hire on 7.5+ aggregate.

**Q:** What should the 30/60/90 review cover?
**A:** Day 30: execute X workflow independently. Day 60: own Y workflow end-to-end. Day 90: identify 1 process improvement, free 30+ hr/mo.

**Q:** What is an EOR?
**A:** Employer of Record, a service (Deel, Remote.com, Multiplier) that legally employs international workers on your behalf.

**Q:** Target AI-leverage multiplier per hire vs 2020 baseline?
**A:** 3–5x output per person.

**Q:** What is the "AI buddy" model?
**A:** Pairing every new hire with structured AI workflow guides (approved prompts, house-style guides) so they produce in your voice from week 2.

---

## 📦 SECTION 7: FINANCIALS, CASH FLOW, TAXES

**Q:** What is the "tax bucket" rule?
**A:** Immediately transfer ~30% of every business deposit to a business savings account. Pretend it doesn't exist.

**Q:** Minimum number of accounts to open day 1?
**A:** 4, business checking, business savings (tax bucket), personal checking, personal savings.

**Q:** When does the S-corp election typically make sense (US)?
**A:** $80K–$400K profit, paired with a reasonable salary + distributions split, with CPA (Cost Per Acquisition) guidance.

**Q:** US quarterly estimated tax deadlines?
**A:** April 15, June 15, Sept 15, January 15 (next year).

**Q:** What is the safe harbor rule?
**A:** Pay 100% of last year's tax (110% if AGI >$150K) to avoid quarterly penalties.

**Q:** What is the 30-30-40 rule?
**A:** Of every business deposit: 30% to tax bucket, 30% to operating expenses, 40% to owner pay.

**Q:** What is Profit First?
**A:** Mike Michalowicz's method: split revenue into 5 accounts (Income, Profit, Owner Pay, Tax, Operating Expenses), transfer twice/month.

**Q:** Why is HSA "triple-tax-advantaged"?
**A:** Contributions deductible, growth tax-free, qualified medical withdrawals tax-free. After 65, withdraws for any purpose (taxed as income).

**Q:** Solo 401(k) max combined contribution (2024–2025, US)?
**A:** ~$70K (~$77.5K+ if age 50+), verify current IRS tables.

**Q:** Target gross margin for productized services?
**A:** 60–80%.

**Q:** What is cash flow forecasting?
**A:** Weekly 4-week rolling spreadsheet of beginning cash + inflows − outflows = ending cash. Never let ending cash drop below 1.5 months of operating expenses.

**Q:** Self-employed health insurance options in US?
**A:** ACA marketplace, spouse's employer plan, HSA-eligible HDHP, health shares (not insurance), direct primary care + catastrophic.

---

## 📦 SECTION 8: FIRST CLIENT ENGAGEMENT

**Q:** Name the 12-step first-client playbook stages.
**A:** Wedge lock, sample deliverable, one-page site, outbound stack, ICP list, PVCC sequence, send outbound + LinkedIn, book discovery, run discovery, send proposal, review call + close, kickoff + deliver + upsell.

**Q:** What does PACT-O stand for?
**A:** Problem, Authority, Constraints, Target outcome, Other options. The discovery framework.

**Q:** In a 45-min discovery call, what % should the buyer talk?
**A:** 70%.

**Q:** What is the end-of-call recap email?
**A:** Email sent within 30 min of the discovery call summarizing current state, goals, constraints, next steps. Closes 2x more deals.

**Q:** What kills 80% of "where are we?" emails?
**A:** The kickoff Loom, a 15-min recorded video sent BEFORE the kickoff call walking the client through what happens next.

**Q:** When is the Friday weekly status email sent?
**A:** Friday afternoons, even on quiet weeks. Predictability retains clients.

**Q:** When is the upsell window for converting project → retainer?
**A:** The 7-day post-delivery window when the client is happiest.

**Q:** Retainer conversion rate from productized clients?
**A:** 25–45% baseline, 60–80% with measurable outcomes.

**Q:** When should you ask for the testimonial?
**A:** +21 days post-delivery (or +60 days into retainer).

**Q:** What are the 3 testimonial questions?
**A:** (1) What was the situation before? (2) What did we do? (3) What changed? (quantified)

**Q:** What's the Week-12 90-day dashboard revenue target?
**A:** $20,000+ contracted revenue.

**Q:** Overarching principle of the entire course?
**A:** Pick a sharp wedge, productize the offer, build sustainable financial systems, and use AI to deliver like a team of three.

---

## 📦 SECTION 9: REAL FOUNDERS WORTH STUDYING

**Q:** Who is Brett Williams?
**A:** Founder of Designjoy, one-person ~$1.5M ARR productized design subscription, ~70% margin. The productized-service canonical case.

**Q:** Who is Justin Welsh?
**A:** Solo creator/operator with publicly disclosed $5M+ revenue 2023–2024. Sells education products + 1:1 advisory at $25K/quarter. Famous for the LinkedIn Content OS.

**Q:** Who is Codie Sanchez?
**A:** Founder of Contrarian Thinking. Niched into "boring business acquisition" content. Newsletter at ~700K subs by 2025; sponsorships, agency, fund.

**Q:** Who is Anthony Pierri?
**A:** Founder of FletchPMM (positioning advisory for B2B (Business-to-Business) SaaS (Software as a Service)). $1M+ ARR primarily from LinkedIn inbound + content.

**Q:** Who is Sam Parr?
**A:** Founder of The Hustle (sold to HubSpot for ~$27M in 2021). Now runs Hampton, a founders' community. Frequent host of My First Million podcast.

**Q:** Who is Dan Andrews?
**A:** Co-founder of Tropical MBA / Dynamite Circle. Runs the $1M lifestyle-agency survey for a decade. Median founder pay at $1M revenue: $310K.

**Q:** Who is Mike Michalowicz?
**A:** Author of *Profit First*. The 5-account budgeting method for service businesses.

**Q:** Who is Blair Enns?
**A:** Founder of Win Without Pitching. The canonical author on agency pricing + sales (*Pricing Creativity*, *Win Without Pitching Manifesto*).

**Q:** Who is Greg Isenberg?
**A:** Founder of Late Checkout. Public commentator on AI-leveraged agency builds and the AI-native team model.

**Q:** Who is Khe Hy?
**A:** Founder of RadReads. Solopreneur finance + leverage frameworks; "family CFO (Chief Financial Officer)" model.

---

## 📚 STUDY TIPS

1. Filter by section. Master one section before moving on.
2. Shuffle weekly to break order memorization.
3. Pair flashcards with the Reading.md for each module.
4. The "Got it" button persists in your browser, your progress stays.
5. Aim for 100% known on all sections before the Final Mock Exam.

---

## 🧠 BEFORE THE FINAL MOCK EXAM

- Re-read each Module's Cheat-Sheet (8 × 1 page = 8 pages, 30 min)
- Take Practice Exams 1 and 2, review every wrong answer
- Filter flashcards by your weakest section
- Sleep well. Show up rested.
- Pass mark: 38/50 (75%)
