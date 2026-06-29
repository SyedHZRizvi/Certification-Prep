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
  var STORAGE_KEY = 'fc-progress-aimkt-foundations';
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

# 🃏 AI Digital Marketing Foundations Master Flashcards

> **How to use:** Each card has a Q on one line and A on the next. Use the widget above to study; or copy into Anki, Quizlet, or paper. Aim for daily review until the real exam.

---

## 🗺️ SECTION 1: LANDSCAPE & FUNDAMENTALS

**Q:** What does POESM stand for?
**A:** Paid, Owned, Earned, Shared Media, the four channel buckets.

**Q:** Define TOFU / MOFU / BOFU.
**A:** Top of Funnel (awareness, e.g., SEO blog), Middle (consideration, e.g., webinars), Bottom (decision, e.g., free trial / branded paid search).

**Q:** Name the four most-tested funnel frameworks.
**A:** AIDA (Attention/Interest/Desire/Action), AARRR (Acquisition/Activation/Retention/Referral/Revenue), RACE (Reach/Act/Convert/Engage), TOFU/MOFU/BOFU.

**Q:** What is ROAS (Return on Ad Spend)?
**A:** Return on Ad Spend = revenue from ads ÷ ad spend. NOT the same as ROI (Return on Investment).

**Q:** What is the formula for CAC (Customer Acquisition Cost)?
**A:** Total marketing & sales spend ÷ new customers acquired.

**Q:** What's a healthy LTV (Lifetime Value):CAC ratio?
**A:** 3:1 or higher.

**Q:** What is AOV?
**A:** Average Order Value = total revenue ÷ number of orders.

**Q:** Name the four "walled gardens" of digital ads.
**A:** Google, Meta, Amazon, TikTok (~75% of global digital ad spend).

**Q:** Who acquired Mailchimp and for how much?
**A:** Intuit, 2021, $12 billion.

**Q:** What was Coca-Cola's "Create Real Magic" (2023)?
**A:** A consumer co-creation campaign with OpenAI / DALL-E, the canonical first major-brand GenAI marketing case study.

**Q:** What are the 4Cs of marketing (Lauterborn)?
**A:** Customer, Cost, Convenience, Communication, a customer-centric reframing of the 4Ps.

**Q:** What is JTBD and who popularized it?
**A:** Jobs-to-be-Done, Clayton Christensen (Harvard). The frame: what "job" did the customer hire your product to do?

**Q:** What is SOSTAC?
**A:** Situation → Objectives → Strategy → Tactics → Action → Control. PR Smith's planning framework.

**Q:** What did iOS 14.5 do?
**A:** Launched App Tracking Transparency in April 2021; ~75–80% US opt-out broke Meta's deterministic attribution.

**Q:** Approximately what % of US Google searches end without a click?
**A:** ~60% (zero-click search; SparkToro 2024 data).

---

## 🧠 SECTION 2: AI FUNDAMENTALS

**Q:** What does AI stand for, and what sits underneath it?
**A:** Artificial Intelligence. Underneath: ML → Deep Learning → Generative AI → LLM (Large Language Model) → Foundation Model.

**Q:** When was the Transformer paper published?
**A:** 2017, "Attention Is All You Need" (Vaswani et al., Google).

**Q:** When was ChatGPT publicly released?
**A:** November 30, 2022.

**Q:** Roughly how many characters is 1 token?
**A:** About 4 characters of English (~¾ of a word).

**Q:** Define context window.
**A:** The maximum number of tokens a model can "see" at once (your prompt + system + history + output).

**Q:** What is an embedding?
**A:** A numerical vector representation of meaning. Similar concepts → similar vectors. Powers semantic search.

**Q:** What's the difference between training and inference?
**A:** Training is the multi-month, very expensive build of the model. Inference is the cheap, fast query step (you pay for inference).

**Q:** Name 5 foundation-model families.
**A:** GPT (Generative Pre-trained Transformer) (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta), Mistral.

**Q:** What is RAG (Retrieval-Augmented Generation)?
**A:** Retrieval-Augmented Generation, embed your docs, store in vector DB, retrieve relevant ones at query time, feed to LLM.

**Q:** When should you choose RAG over fine-tuning?
**A:** ~80% of "use my data" cases. Cheaper, faster, easier to keep up to date.

**Q:** When does fine-tuning make sense?
**A:** Specialized voice / domain language / output format that needs permanent shifts to the model's weights.

**Q:** What is a hallucination?
**A:** A confident-sounding LLM output that is factually wrong. A feature of next-token prediction; mitigate, don't expect to eliminate.

**Q:** Name 4 hallucination mitigations.
**A:** Verify facts; lower temperature; use RAG to ground in real docs; human review before publishing.

**Q:** What does "temperature" control?
**A:** How random / creative the output is. Higher = more variability + more hallucination risk.

**Q:** What was the famous *Mata v. Avianca* case (June 2023)?
**A:** A NY lawyer was sanctioned for citing 6 fictional court cases generated by ChatGPT.

**Q:** What is Anthropic's safety methodology called?
**A:** Constitutional AI.

**Q:** Recite the ROLE/CONTEXT/TASK prompt template.
**A:** ROLE → CONTEXT → TASK → CONSTRAINTS → EXAMPLES → OUTPUT FORMAT.

---

## 🔍 SECTION 3: SEO IN THE AI ERA

**Q:** Name the three SEO pillars.
**A:** On-page, Technical, Off-page.

**Q:** What does E-E-A-T stand for?
**A:** Experience, Expertise, Authoritativeness, Trustworthiness. Second E (Experience) added December 2022.

**Q:** What is YMYL content?
**A:** "Your Money or Your Life", health, finance, legal, safety topics; held to higher E-E-A-T bar.

**Q:** Name the three 2026 Core Web Vitals.
**A:** LCP (Largest Contentful Paint), INP (Interaction to Next Paint, replaced FID in March 2024), CLS (Cumulative Layout Shift).

**Q:** What is the "good" LCP threshold?
**A:** ≤ 2.5 seconds.

**Q:** What is the "good" INP threshold?
**A:** ≤ 200 ms.

**Q:** What is the "good" CLS threshold?
**A:** ≤ 0.1.

**Q:** What is the pillar/cluster content topology?
**A:** One pillar page (broad authority guide) + many cluster pages (deeper sub-topics) linking back. HubSpot popularized it.

**Q:** What is programmatic SEO?
**A:** Database + template = thousands of unique pages at scale. Canonical case: Airbnb's neighborhood pages.

**Q:** What was Google's March 2024 anti-AI-spam policy called?
**A:** Scaled Content Abuse policy, targets sites publishing AI content "primarily to manipulate rankings."

**Q:** Name 3 high-impact GEO (Generative Engine Optimization) tactics.
**A:** Authoritative citations within content; FAQ sections with question-style H2s; direct declarative answers + statistics.

**Q:** What is schema.org markup added to your page as?
**A:** JSON-LD inside a `<script type="application/ld+json">` tag.

**Q:** What is the canonical tag for?
**A:** Tells Google which version of duplicate/near-duplicate pages is the original (preferred).

**Q:** What's the hreflang tag for?
**A:** Telling Google which language/region version of a page to show to which user (international SEO).

---

## ✍️ SECTION 4: CONTENT MARKETING & GenAI

**Q:** What's the hub-and-spoke repurposing pattern?
**A:** One long-form anchor asset (podcast, video, blog) → many derivative formats (LinkedIn, X, carousels, email, short clips, deck).

**Q:** What did Brynjolfsson, Li & Raymond's 2023 NBER paper find?
**A:** AI assistance produced ~14% average productivity lift in customer support workers; ~35% for novices.

**Q:** What is BuzzFeed's 2023 AI-content episode a case study of?
**A:** A cautionary tale of over-reliance on AI without sufficient human editorial oversight.

**Q:** What is Mailchimp's AI subject-line generator a case study of?
**A:** AI embedded in the marketer's workflow + grounded in proprietary data, the canonical "embedded AI" model.

**Q:** Which AI image tool has the cleanest commercial-licensing story?
**A:** Adobe Firefly, trained primarily on licensed Adobe Stock + public-domain content.

**Q:** Recite the marketing image-prompt order.
**A:** Subject → Setting → Composition → Mood → Lighting → Style → Format.

**Q:** What are Synthesia and HeyGen used for?
**A:** AI avatar talking-head video, corporate training, multilingual, personalized sales.

**Q:** What is Runway used for?
**A:** Text-to-video, video-to-video, generative B-roll and visual effects.

**Q:** What is Sora?
**A:** OpenAI's photorealistic generative video model.

**Q:** What is Descript best at?
**A:** Editing video and audio by editing the transcript, plus AI voice and clip generation.

---

## 📱 SECTION 5: SOCIAL MEDIA & AI TOOLS

**Q:** What ranks content on TikTok in 2026?
**A:** Content-quality signals (completion rate, rewatch, hook strength, niche affiliation), NOT follower count.

**Q:** What does LinkedIn's algorithm actively suppress?
**A:** Posts with outbound links. Workaround: put the link in the first comment.

**Q:** Which influencer tier delivers best ROI for most brands?
**A:** Micro-influencers (10K–100K followers).

**Q:** Who is Lil Miquela?
**A:** The most-cited virtual / AI influencer, a CGI persona with millions of followers and real brand deals.

**Q:** Why is Pinterest unique among social platforms?
**A:** It actively wants to drive outbound clicks to blogs and shops (it's a discovery engine, not just a feed).

**Q:** What is the Wendy's Twitter case study about?
**A:** Brand voice as a competitive advantage. HBR's Quelch (2018) is the canonical write-up.

**Q:** What's Taplio?
**A:** AI ghostwriter and scheduler for LinkedIn.

**Q:** What's Postwise?
**A:** AI ghostwriter for LinkedIn and X.

**Q:** Name 3 enterprise social listening tools.
**A:** Brandwatch, Sprinklr, Talkwalker (Mention and Brand24 are the SMB picks).

**Q:** What is Duolingo's TikTok account a case study of?
**A:** Algorithm-native creative + distinctive brand voice = outsized organic reach (8M+ followers).

---

## 📧 SECTION 6: EMAIL MARKETING

**Q:** What is the DMA's most-cited email ROI?
**A:** $36 per $1 spent.

**Q:** What 3 records authenticate email?
**A:** SPF, DKIM, DMARC.

**Q:** What changed for bulk senders to Gmail and Yahoo on February 1, 2024?
**A:** SPF + DKIM + DMARC required, one-click unsubscribe required, complaint rate must be < 0.3%.

**Q:** Drip vs lifecycle, define each.
**A:** Drip = time-based linear sequences. Lifecycle = behavior-triggered, often multi-channel sequences.

**Q:** Which email sequence has the HIGHEST revenue per email?
**A:** The welcome series.

**Q:** What broke email open-rate reliability in September 2021?
**A:** iOS 15 Mail Privacy Protection (MPP) auto-prefetches images, inflating opens.

**Q:** Which ESP is dominant in Shopify e-commerce?
**A:** Klaviyo.

**Q:** What's the CAN-SPAM (Controlling the Assault of Non-Solicited Pornography and Marketing Act) unsubscribe window?
**A:** 10 business days.

**Q:** What's the GDPR (General Data Protection Regulation) maximum fine?
**A:** 4% of global annual revenue OR €20M, whichever is higher.

**Q:** Best ESPs for creator newsletters?
**A:** ConvertKit / Kit, Beehiiv, Substack.

**Q:** Best ESP for enterprise lifecycle marketing?
**A:** Braze, Iterable, Salesforce Marketing Cloud, Adobe Campaign / Journey Optimizer.

**Q:** What's Phrasee best known for?
**A:** AI subject-line optimization with enterprise case studies (Domino's, eBay, Virgin Holidays).

---

## 💰 SECTION 7: PAID ADVERTISING

**Q:** What determines an ad auction winner?
**A:** Bid × ad quality × user signals (not bid alone).

**Q:** What are the three components of Google's Quality Score?
**A:** Expected CTR (Click-Through Rate), ad relevance, landing page experience.

**Q:** What is Performance Max?
**A:** Google's AI-driven multi-placement campaign type (Search, YouTube, Display, Discover, Gmail, Maps in one).

**Q:** What is Advantage+ Shopping?
**A:** Meta's AI-driven e-commerce campaign type (Facebook, Instagram, Audience Network).

**Q:** What's TikTok's equivalent?
**A:** Smart Performance Campaigns.

**Q:** If gross margin is 40%, what's break-even ROAS (before opex)?
**A:** ~2.5× (since 1 / 0.4 = 2.5).

**Q:** What is Conversions API (Application Programming Interface) (CAPI)?
**A:** Meta's server-side conversion-tracking API, primarily a response to iOS 14.5 ATT.

**Q:** What's Enhanced Conversions?
**A:** Google's equivalent, hashed user data sent server-side to improve attribution.

**Q:** What's the projected 2025 US Retail Media Network spend?
**A:** Over $100 billion (per eMarketer).

**Q:** Name 5 major Retail Media Networks.
**A:** Amazon Ads, Walmart Connect, Target Roundel, Instacart Ads, Kroger Precision Marketing.

**Q:** Why is Google Search Ads strong for BOFU?
**A:** Search captures *existing* demand, the user already typed their need. Meta/TikTok have to create it from interest signals.

**Q:** What does PAS stand for in ad copy?
**A:** Problem, Agitate, Solve.

**Q:** What does HSO stand for in social ad video?
**A:** Hook, Story, Offer.

**Q:** What was the Wayfair Performance Max case study?
**A:** ~13% incremental conversion lift + ~25% CAC improvement, most-cited enterprise PMax case.

---

## 📊 SECTION 8: ANALYTICS & MEASUREMENT

**Q:** When was Universal Analytics sunset?
**A:** July 1, 2023 (GA4 (Google Analytics 4) is the only version since).

**Q:** What's the core measurement unit in GA4?
**A:** The event (everything is an event, including page views).

**Q:** Name the 5 standard UTM parameters.
**A:** utm_source, utm_medium, utm_campaign, utm_content, utm_term.

**Q:** GA4's default attribution model since 2023?
**A:** Data-Driven Attribution (DDA).

**Q:** What was Google Data Studio renamed to in October 2022?
**A:** Looker Studio.

**Q:** When did Consent Mode v2 become mandatory in the EU?
**A:** March 2024 (for ad personalization with Google ads).

**Q:** What is Meta's open-source MMM tool?
**A:** Robyn.

**Q:** What is Google's open-source MMM tool?
**A:** Meridian.

**Q:** Define MMM.
**A:** Marketing Mix Modeling, econometric, aggregate-level attribution. Resilient to cookie loss.

**Q:** What is an "engaged session" in GA4?
**A:** A session lasting ≥10 seconds OR with ≥2 page views OR with a conversion.

**Q:** What's the "New Coke" episode the canonical case study for?
**A:** Measurement error, measuring the wrong variable (taste preference) when the actual driver was brand identity.

**Q:** What's the 2026 best-practice measurement stack?
**A:** Platform-reported + GA4 DDA + MMM + incrementality testing + first-party data, triangulated.

---

## ⚖️ SECTION 9: ETHICS, PRIVACY & COMPLIANCE

**Q:** When did GDPR become enforceable?
**A:** May 25, 2018.

**Q:** GDPR's penalty cap?
**A:** 4% of global annual revenue OR €20M, whichever is higher.

**Q:** When was the EU AI Act passed?
**A:** March 2024.

**Q:** Name the 4 EU AI Act risk tiers.
**A:** Unacceptable (banned), High-risk, Limited risk (disclosure required), Minimal risk.

**Q:** What tier does most marketing AI fall into?
**A:** Limited risk, meaning disclosure is required.

**Q:** What did the Gender Shades study (Buolamwini 2018) show?
**A:** Commercial facial-recognition systems had error rates of 0.8% for light-skinned men and up to 34.7% for dark-skinned women.

**Q:** What is COPPA (Children's Online Privacy Protection Act)?
**A:** US Children's Online Privacy Protection Act (1998, updated 2013); protects under-13s.

**Q:** Brazil's GDPR equivalent?
**A:** LGPD.

**Q:** China's privacy law?
**A:** PIPL (Personal Information Protection Law, 2021).

**Q:** Singapore's privacy law?
**A:** PDPA (Personal Data Protection Act).

**Q:** Define first-party data.
**A:** Data your company collects directly from users, with consent, on your own properties.

**Q:** Define zero-party data.
**A:** Data users explicitly volunteer (preferences, surveys, intent declarations). Coined by Forrester 2018.

**Q:** What's the FTC's "algorithmic disgorgement" remedy?
**A:** Forcing companies to destroy AI models that were trained on improperly-obtained data.

**Q:** What was the Amazon GDPR fine (2021) and Meta GDPR fine (2023)?
**A:** Amazon: €746M (July 2021). Meta: €1.2B (May 2023).

**Q:** Name 5 major CDPs.
**A:** Segment, mParticle, Tealium, BlueConic, Lytics.

---

## 🛠️ SECTION 10: AI MARKETER TOOLKIT

**Q:** Name the 6 stack tiers in this course.
**A:** 1) Foundation (LLM + notes), 2) Content/Creative, 3) Distribution/Channel, 4) Measurement/CRM (Customer Relationship Management), 5) Workflow/Automation, 6) Specialized AI.

**Q:** CDP (Customer Data Platform) vs CRM vs ESP vs MA platform, define each.
**A:** CDP = unifies customer data (Segment). CRM = relationship database (Salesforce). ESP = sends email (Klaviyo). MA platform = automation + often CRM (HubSpot).

**Q:** Zapier vs Make vs n8n, differentiate.
**A:** Zapier = most apps, simplest. Make = visual + complex scenarios. n8n = open-source self-hostable.

**Q:** Which knowledge tool does Stripe famously use as its company hub?
**A:** Notion.

**Q:** Who popularized "second brain"?
**A:** Tiago Forte (*Building a Second Brain*, 2022).

**Q:** What's Microsoft Clarity, and what's its strength?
**A:** Free Microsoft heatmap + session-replay tool. Equivalent functionality to Hotjar's paid tiers.

**Q:** What's ElevenLabs known for?
**A:** AI voice / audio, text-to-speech and voice cloning.

**Q:** What's a "stack audit" cadence?
**A:** Every 6 months, list every paid tool, used in last 30 days? Cancel bottom 20% by ROI.

**Q:** What's a realistic solo marketer monthly stack budget?
**A:** $50–$150 (LLM paid + ESP + scheduler + Notion + Canva + free analytics).

**Q:** Why is documentation discipline a competitive advantage?
**A:** Your AI / RAG / agents are only as good as the documentation they can read. Stripe and HubSpot are explicitly documentation cultures.

---

## 📝 STUDY TIPS FOR FLASHCARDS

1. **Anki recommendation:** Spaced repetition is undefeated.
2. **Daily review:** 10–15 min/day until exam.
3. **Test yourself fairly:** If you guessed, mark it wrong.
4. **Add cards as you find weak spots.**
5. **Interleave sections.** Don't just review one at a time.

---

## 🎯 BEFORE THE EXAM

You should be able to instantly answer:

- The 4 channel buckets (POESM) + funnel frameworks
- The 8 marketing-math acronyms (CAC, LTV, ROAS, ROI, AOV, CPA (Cost Per Acquisition), CPC (Cost Per Click), CPM (Cost Per Mille))
- The 5 foundation-model families
- RAG vs Fine-Tuning trade-offs
- The 3 SEO pillars + E-E-A-T
- Core Web Vitals (LCP, INP, CLS) + 2026 thresholds
- TikTok vs LinkedIn algorithm specifics
- Email's DMA $36 ROI + SPF/DKIM/DMARC
- PMax vs Advantage+ (Google vs Meta)
- GA4 + UTM + DDA + Consent Mode v2
- GDPR + EU AI Act + COPPA + CCPA (California Consumer Privacy Act)/CPRA basics
- CDP vs CRM vs ESP vs MA platform

Good luck! 🚀
