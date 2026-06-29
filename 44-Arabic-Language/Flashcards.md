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
  var STORAGE_KEY = 'fc-progress-arabic';
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    var app = document.getElementById('fc-app');
    if(!app) return;
    var container = app.parentNode;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(n){
        var t = n.tagName;
        if(t === 'H2' || t === 'P') return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_SKIP;
      }
    });
    var cards = [], sections = [], seen = {}, currentSection = 'General', pendingQ = null, pendingQEl = null;
    var sourceEls = [];
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
      var strong = node.querySelector && node.querySelector('strong');
      if(!strong) continue;
      var marker = (strong.textContent || '').trim().toUpperCase();
      var fullText = (node.textContent || '').trim();
      if(marker.indexOf('Q:') === 0){
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
    sourceEls.forEach(function(el){ el.classList.add('fc-source-hidden'); });
    var hrs = document.querySelectorAll('hr');
    hrs.forEach(function(hr){
      var pos = hr.compareDocumentPosition(app);
      if(pos & Node.DOCUMENT_POSITION_PRECEDING){
        hr.classList.add('fc-source-hidden');
      }
    });
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
    var sectionSel = document.getElementById('fc-section');
    sections.forEach(function(s){
      var opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      sectionSel.appendChild(opt);
    });
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

# Arabic Language Master Flashcards

## Module 1 — Foundations: Alphabet & Basics

**Q:** What does مرحبا (marḥaban) mean?

**A:** مرحبا (marḥaban)

📖 Hello / Welcome
🇵🇰 اردو: مرحبا (already shared!)

**Q:** What does السلام عليكم (as-salāmu ʻalaykum) mean?

**A:** السلام عليكم (as-salāmu ʻalaykum)

📖 Peace be upon you — the universal Islamic greeting
🇵🇰 اردو: السلام علیکم (already shared!)

**Q:** What does شكراً (shukran) mean?

**A:** شكراً (shukran)

📖 Thank you
🇵🇰 اردو: شکریہ comes from the same root ش-ك-ر

**Q:** What does نعم (naʻam) mean?

**A:** نعم (naʻam)

📖 Yes
🇵🇰 اردو: Different — Urdu uses "ہاں" (hāñ) or "جی" (jī)

**Q:** What does لا (lā) mean?

**A:** لا (lā)

📖 No
🇵🇰 اردو: "نہیں" (nahīñ) — but you know "لا الہ" from Kalima

**Q:** What does كيف حالك؟ (kayfa ḥālak?) mean?

**A:** كيف حالك؟ (kayfa ḥālak?)

📖 How are you? (masculine)
🇵🇰 اردو: آپ کا حال کیسا ہے؟ — حال is shared!

**Q:** What does من فضلك (min faḍlak) mean?

**A:** من فضلك (min faḍlak)

📖 Please (to a man) / Excuse me
🇵🇰 اردو: فضل (grace) is known — فضل سے means "by grace"

**Q:** What is the first letter of the Arabic alphabet and its transliteration?

**A:** أ — Alif (ا)

📖 The first letter; can carry a glottal stop (hamza) or act as a long vowel
🇵🇰 اردو: Same letter exists in Urdu as الف

**Q:** What does ما اسمك؟ (mā ismak?) mean?

**A:** ما اسمك؟ (mā ismak?)

📖 What is your name? (masculine)
🇵🇰 اردو: اسم (ism) = name — آپ کا اسم کیا ہے؟

**Q:** What does إلى اللقاء (ilā al-liqāʼ) mean?

**A:** إلى اللقاء (ilā al-liqāʼ)

📖 Goodbye (until we meet again)
🇵🇰 اردو: خدا حافظ / اللہ حافظ

## Module 2 — Core Vocabulary: Family & Daily Life

**Q:** What does أسرة (usra) mean?

**A:** أسرة (usra)

📖 Family
🇵🇰 اردو: خاندان (khāndān) — different word, same concept

**Q:** What does أب (ab) mean?

**A:** أب (ab)

📖 Father
🇵🇰 اردو: باپ (bāp) or ابو (abbū) — ابو is directly from Arabic أبو

**Q:** What does أم (umm) mean?

**A:** أم (umm)

📖 Mother
🇵🇰 اردو: ماں (māñ) or امی (ammī) — امی is directly from Arabic أمّ

**Q:** What does أخ (akh) mean?

**A:** أخ (akh)

📖 Brother
🇵🇰 اردو: بھائی (bhāʼī) — but اخوت (brotherhood) is shared

**Q:** What does يوم (yawm) mean?

**A:** يوم (yawm)

📖 Day
🇵🇰 اردو: آج (āj) = today — but یوم is used: یوم آزادی (Independence Day)

**Q:** What are the days of the week in Arabic — what is Monday?

**A:** الاثنين (al-ithnayn)

📖 Monday — literally "the two" (second day)
🇵🇰 اردو: پیر (pīr) — different word

**Q:** What does شهر (shahr) mean?

**A:** شهر (shahr)

📖 Month / City
🇵🇰 اردو: شہر (shahr) means CITY in Urdu — same word, different primary meaning in Arabic

**Q:** What does ماء (māʼ) mean?

**A:** ماء (māʼ)

📖 Water
🇵🇰 اردو: پانی (pānī) — but آب (āb) is the Persian/Urdu literary word

**Q:** What does طعام (ṭaʻām) mean?

**A:** طعام (ṭaʻām)

📖 Food
🇵🇰 اردو: کھانا (khānā) — but طعام is used in formal/religious Urdu contexts

**Q:** What does لون (lawn) mean?

**A:** لون (lawn)

📖 Colour
🇵🇰 اردو: رنگ (rang) — different word, same meaning

## Module 3 — Basic Grammar: Verbs & Sentences

**Q:** What does كان (kāna) mean and what is its grammatical role?

**A:** كان (kāna)

📖 "Was / Were" — the most important Arabic verb; it is the past tense of "to be" and heads the group of verbs called "كان وأخواتها" (kāna and its sisters)
🇵🇰 اردو: تھا / تھی / تھے — same concept; كان changes its subject to accusative case

**Q:** What is a الجملة الاسمية (al-jumla al-ismiyya)?

**A:** الجملة الاسمية — the Nominal Sentence

📖 A sentence that begins with a noun (not a verb). It has a subject (مبتدأ — mubtadaʼ) and a predicate (خبر — khabar). Example: البيتُ كبيرٌ (al-baytu kabīrun) = The house is large.
🇵🇰 اردو: Urdu sentences are often nominally structured too — "گھر بڑا ہے"

**Q:** What does أنا (anā) mean?

**A:** أنا (anā)

📖 I (first person singular pronoun)
🇵🇰 اردو: میں (maiñ) — but انا (anā) appears in Urdu in expressions like "اناالحق"

**Q:** What does هو / هي (huwa / hiya) mean?

**A:** هو (huwa) = He / هي (hiya) = She

📖 Third person singular pronouns — Arabic has grammatical gender for all nouns
🇵🇰 اردو: وہ (voh) is gender-neutral — Arabic is strictly gendered

**Q:** What does هذا / هذه (hādhā / hādhihi) mean?

**A:** هذا (hādhā) = This (masculine) / هذه (hādhihi) = This (feminine)

📖 Demonstrative pronouns — the noun following must agree in gender
🇵🇰 اردو: یہ (yih) for both — Arabic requires gender agreement

**Q:** What is the difference between مرفوع (marfūʻ), منصوب (manṣūb), and مجرور (majrūr)?

**A:** Arabic grammatical case endings (الإعراب — al-iʻrāb):

📖 مرفوع (raf') = nominative (subject) — ends in ـُ / ـٌ
منصوب (nasb) = accusative (object/kāna predicate) — ends in ـَ / ـً
مجرور (jarr) = genitive (after prepositions, iḍāfa) — ends in ـِ / ـٍ

**Q:** What does ذهب (dhahaba) mean, and give its past-tense conjugation for "I went"?

**A:** ذهب (dhahaba) = He went

📖 Root: ذ-ه-ب (dhahaba)
I went = ذهبتُ (dhahabtu)
She went = ذهبتْ (dhahābat)
We went = ذهبنا (dhahabnā)
🇵🇰 اردو: گیا / گئی / گئے

**Q:** What is the إضافة (iḍāfa) construction in Arabic?

**A:** إضافة (iḍāfa) — the construct state / possessive construction

📖 Two nouns joined to show possession: بيت المدير (baytu al-mudīr) = the director's house (literally: "house-of the-director"). The first noun loses its tanwīn and takes jarr case. This mirrors Urdu کا/کی/کے (kā/kī/ke).
🇵🇰 اردو: ڈائریکٹر کا گھر — same logic!

**Q:** What does لا يوجد (lā yūjad) mean?

**A:** لا يوجد (lā yūjad)

📖 There is no... / It does not exist
🇵🇰 اردو: موجود نہیں (mawjūd nahīñ) — موجود is from the same Arabic root وجد

**Q:** What does كم (kam) mean, and how is it used?

**A:** كم (kam) = How many? / How much?

📖 Used to ask about quantity: كم الساعة؟ (kam al-sāʻa?) = What time is it?
كم عمرك؟ (kam ʻumrak?) = How old are you?
🇵🇰 اردو: کتنا/کتنی (kitnā/kitnī)

## Module 4 — Conversations: Shopping, Directions & Restaurant

**Q:** How do you say "How much does this cost?" in Arabic?

**A:** بكم هذا؟ (bikam hādhā?)

📖 Literally: "For how much is this?"
Alternative: كم ثمنه؟ (kam thamanuh?) = What is its price?
🇵🇰 اردو: یہ کتنے کا ہے؟

**Q:** How do you say "Where is the market?" in Arabic?

**A:** أين السوق؟ (ayna as-sūq?)

📖 أين (ayna) = where; السوق (as-sūq) = the market/bazaar
🇵🇰 اردو: بازار کہاں ہے؟ — بازار comes from Persian, سوق is Arabic

**Q:** What does على اليمين (ʻalā al-yamīn) mean?

**A:** على اليمين (ʻalā al-yamīn)

📖 On the right / Turn right
🇵🇰 اردو: دائیں طرف — but یمین (right) appears in "یمن" (Yemen) and Arabic calligraphy terms

**Q:** What does على اليسار (ʻalā al-yasār) mean?

**A:** على اليسار (ʻalā al-yasār)

📖 On the left
🇵🇰 اردو: بائیں طرف

**Q:** How do you say "I would like a table for two" in a restaurant?

**A:** أريد طاولة لشخصين (urīdu ṭāwilatan li-shakhṣayn)

📖 أريد (urīdu) = I want/would like; طاولة = table; لشخصين = for two people
🇵🇰 اردو: میں دو افراد کے لیے میز چاہتا ہوں

**Q:** What does الفاتورة من فضلك (al-fātūra min faḍlak) mean?

**A:** الفاتورة من فضلك — The bill, please

📖 فاتورة = bill/invoice; من فضلك = please (to a male)
🇵🇰 اردو: بل لائیں، مہربانی کریں

**Q:** What does غالي (ghālī) mean?

**A:** غالي (ghālī)

📖 Expensive / Dear
🇵🇰 اردو: مہنگا (mahangā) — but غالی (ghālī) meaning "precious" is used in Urdu poetry

**Q:** What does رخيص (rakhīṣ) mean?

**A:** رخيص (rakhīṣ)

📖 Cheap / Inexpensive
🇵🇰 اردو: سستا (sastā)

**Q:** How do you say "I don't understand" in Arabic?

**A:** لا أفهم (lā afhamu)

📖 لا = no/not; أفهم (afhamu) = I understand. Root: ف-ه-م
🇵🇰 اردو: مجھے سمجھ نہیں آتا — but فہم (understanding) is in Urdu

**Q:** How do you say "Repeat that, please" in Arabic?

**A:** أعد من فضلك (aʻid min faḍlak)

📖 أعد (aʻid) = repeat (imperative from root ع-و-د)
🇵🇰 اردو: دوبارہ کہیں، مہربانی کریں

## Module 5 — Intermediate Grammar: Verb Conjugation

**Q:** What is the root system (الجذر — al-jidhr) in Arabic, and why is it important?

**A:** Arabic Root System — الجذر

📖 Most Arabic words derive from a three-letter (trilateral) root. Example: root ع-ل-م (ʻ-l-m) = knowledge/learning generates: عَلِمَ (he knew), عِلم (knowledge/science), عالِم (scholar), مَعلُومات (information), تعليم (education), مُعلِّم (teacher)
🇵🇰 اردو: علم and عالم are already in Urdu

**Q:** Conjugate the verb كتب (kataba = he wrote) in the past tense for all singular persons.

**A:** Past Tense — كتب (to write):

📖 كَتَبتُ (I wrote) — katabt
كَتَبتَ (you wrote, masc.) — katabta
كَتَبتِ (you wrote, fem.) — katabti
كَتَبَ (he wrote) — kataba
كَتَبَتْ (she wrote) — katabat
🇵🇰 اردو: لکھا / لکھی — verb agrees with gender

**Q:** Conjugate the verb يكتب (yaktubu = he writes) in the present tense for "I write" and "she writes."

**A:** Present Tense — كتب:

📖 أكتبُ (I write) — aktubu
تكتبُ (you write, masc.) — taktubu
تكتبينَ (you write, fem.) — taktubīna
يكتبُ (he writes) — yaktubu
تكتبُ (she writes) — taktubu
🇵🇰 اردو: لکھتا ہوں / لکھتی ہے

**Q:** What is a جمع تكسير (jamʻ taksīr) — broken plural?

**A:** Broken Plural — جمع تكسير

📖 Arabic changes the internal vowel pattern (and sometimes adds letters) to form plurals — unlike English's -s ending. Examples:
كتاب (book) → كُتُب (kutub = books)
بيت (house) → بيوت (buyūt = houses)
رجل (man) → رجال (rijāl = men)
🇵🇰 اردو: Urdu borrowed many Arabic broken plurals: کتب، رجال، علما، اولاد

**Q:** What does أكبر من (akbaru min) mean and how is it used?

**A:** أكبر من (akbaru min) = bigger than / older than

📖 Comparative in Arabic: أفعل (afʻal) pattern + من (min = than)
أصغر من = smaller than / younger than
أجمل من = more beautiful than
أسرع من = faster than
🇵🇰 اردو: سے بڑا / سے چھوٹا — same logic, different structure

**Q:** What is the difference between هل (hal) and أ (a) in questions?

**A:** Arabic Question Particles:

📖 Both هل and أ introduce yes/no questions:
هل تتكلم العربية؟ (hal tatakallamu al-ʻarabiyya?) = Do you speak Arabic?
أتتكلم العربية؟ (a-tatakallamu?) = same meaning, more formal/literary
هل is more common in MSA; أ appears in classical texts and poetry
🇵🇰 اردو: کیا آپ عربی بولتے ہیں؟ — کیا serves both functions

**Q:** What does لم (lam) do in Arabic grammar?

**A:** لم (lam) — Negation of past with jussive

📖 لم negates the past tense by using the present-tense verb form in jussive (مجزوم) mood:
لم أذهب (lam adhhab) = I did not go (NOT لم ذهبت)
لم يكتب (lam yaktub) = He did not write
This is one of the most common grammar traps for learners.

**Q:** What does كان + مضارع منصوب (kāna + present subjunctive) construct?

**A:** Past Continuous — كان يفعل

📖 The past continuous in Arabic uses كان + the present tense:
كانَ يكتبُ (kāna yaktubu) = He was writing
كانتْ تدرسُ (kānat tadrusu) = She was studying
🇵🇰 اردو: وہ لکھ رہا تھا / وہ پڑھ رہی تھی — same logic!

**Q:** What is the sound feminine plural (جمع المؤنث السالم)?

**A:** Sound Feminine Plural — جمع المؤنث السالم

📖 Formed by adding ات (āt) to feminine (and some masculine) nouns:
معلمة (teacher, fem.) → معلمات (teachers, fem.)
سيارة (car) → سيارات (cars)
شركة (company) → شركات (companies)
🇵🇰 اردو: معلمات، شرکات are already used in formal Urdu

**Q:** What does إن شاء الله (in shāʼa Allāh) literally mean grammatically?

**A:** إن شاء الله — Grammatical breakdown:

📖 إن = if (conditional particle); شاء = He willed (past tense of شاء, root ش-ي-أ); الله = God
Literal: "If God wills it"
Grammatically: conditional sentence with the apodosis (result clause) implied
🇵🇰 اردو: انشاء اللہ — already in your daily speech!

## Module 6 — Practical Communication: Business Arabic

**Q:** How do you say "I would like to schedule a meeting" in business Arabic?

**A:** أود تحديد موعد لاجتماع (awaddu taḥdīda mawʻidin li-jtimāʻ)

📖 أود (awaddu) = I would like (formal); تحديد (taḥdīd) = setting/scheduling; موعد (mawʻid) = appointment/time; اجتماع (ijtimāʻ) = meeting
🇵🇰 اردو: میں میٹنگ کا وقت مقرر کرنا چاہتا ہوں

**Q:** What does بخصوص (bi-khuṣūṣ) mean in formal Arabic correspondence?

**A:** بخصوص (bi-khuṣūṣ) = Regarding / With respect to

📖 Used to introduce the subject of a letter or email:
بخصوص طلبكم المؤرخ... = Regarding your request dated...
Also: بشأن (bi-shaʼn) = concerning (same usage)
🇵🇰 اردو: بابت / کے بارے میں — بخصوص is also used in formal Urdu letters

**Q:** What does نأمل (naʼmulu) mean in business letters?

**A:** نأمل (naʼmulu) = We hope / We trust

📖 Standard opening in formal Arabic correspondence:
نأمل أن يجد هذا الكتاب سعادتكم بتمام الصحة
= We trust this letter finds you in good health
🇵🇰 اردو: امید ہے کہ — أمل (hope) is shared with Urdu

**Q:** What does برجاء (bi-rajāʼ) mean?

**A:** برجاء (bi-rajāʼ) = Please / We kindly request

📖 رجاء (rajāʼ) = request/hope (root ر-ج-و)
برجاء التكرم بـ... = Please be so kind as to...
🇵🇰 اردو: رجاء مندانہ — رجا (request) appears in formal Urdu

**Q:** What does مدير (mudīr) mean?

**A:** مدير (mudīr) = Director / Manager

📖 Root: د-و-ر (d-w-r) — to rotate/manage
مدير عام = General Manager
مدير تنفيذي = CEO (Chief Executive Officer) (Executive Director)
🇵🇰 اردو: مدیر (mudīr) = editor/director — already in Urdu!

**Q:** What does شركة (sharika) mean?

**A:** شركة (sharika) = Company / Corporation

📖 Root: ش-ر-ك (sh-r-k)
شريك (sharīk) = partner (same root — شریک in Urdu!)
شراكة (shirāka) = partnership
🇵🇰 اردو: شریک (partner) is already in daily Urdu

**Q:** What does عقد (ʻaqd) mean in business Arabic?

**A:** عقد (ʻaqd) = Contract / Agreement

📖 Root: ع-ق-د
عقد العمل = employment contract
توقيع العقد = signing the contract
🇵🇰 اردو: عقد (ʻaqd) in Urdu primarily means marriage contract — same Arabic root

**Q:** What does ميزانية (mīzāniyya) mean?

**A:** ميزانية (mīzāniyya) = Budget

📖 From ميزان (mīzān) = balance/scale (also the zodiac sign Libra ♎)
ميزانية سنوية = annual budget
🇵🇰 اردو: میزان (scales/balance) — میزان is used in Urdu poetry too

**Q:** What does تقرير (taqrīr) mean?

**A:** تقرير (taqrīr) = Report

📖 Root: ق-ر-ر
تقرير سنوي = annual report
تقرير طبي = medical report
🇵🇰 اردو: تقریر (taqrīr) in Urdu means a speech/oration — DIFFERENT meaning, same root!

**Q:** What does فاتورة (fātūra) mean?

**A:** فاتورة (fātūra) = Invoice / Bill

📖 Used in business transactions across the Arab world
فاتورة ضريبية = tax invoice
🇵🇰 اردو: فاتورہ (invoice) — already used in Pakistani business contexts

## Module 7 — Advanced Grammar: Verb Forms & Patterns

**Q:** What is the pattern (وزن) of Arabic verb Form II (فعّل — faʻʻala)?

**A:** Verb Form II — فعّل (faʻʻala)

📖 Formed by doubling the middle root letter. Meanings:
1. Causative: درس (he studied) → درّس (he taught — caused to study)
2. Intensification: كسر (he broke) → كسّر (he smashed repeatedly)
3. Denominative: نظّف (he cleaned, from نظيف = clean)
🇵🇰 اردو: معلّم (teacher) — derived from Form II علّم

**Q:** What is the pattern of Arabic verb Form IV (أفعل — afʻala)?

**A:** Verb Form IV — أفعل (afʻala)

📖 Formed by prefixing أ to the root. Meaning: causative
علم (to know) → أعلم (to inform/cause to know)
خرج (to exit) → أخرج (to take out/produce)
سلم (to be safe) → أسلم (to submit/become Muslim)
🇵🇰 اردو: اسلام, مسلم — both from Form IV أسلم!

**Q:** What is a الفعل الأجوف (al-fiʻl al-ajwaf) — hollow verb?

**A:** Hollow Verb — الفعل الأجوف

📖 A verb whose middle root letter is a long vowel (و or ي). The middle vowel drops or changes in certain conjugations:
قال (qāla = he said, root ق-و-ل): conjugation can show ق-ل- when vowel drops
قام (qāma = he stood, root ق-و-م)
نام (nāma = he slept, root ن-و-م)
🇵🇰 اردو: قال is known from Quran; قام appears in اقامة الصلاة

**Q:** What is الفعل الناقص (al-fiʻl al-nāqiṣ) — defective verb?

**A:** Defective Verb — الفعل الناقص

📖 A verb whose final root letter is و or ي. The ending changes or disappears:
دعا (daʻā = he called/prayed, root د-ع-و)
رجا (rajā = he hoped, root ر-ج-و)
مشى (mashā = he walked, root م-ش-ي)
🇵🇰 اردو: دعا (prayer/supplication) — already in Urdu!

**Q:** What is المثنى (al-muthanná) — the dual form?

**A:** Arabic Dual Form — المثنى

📖 Arabic has a dedicated dual form (unlike English or Urdu). Add ـان (āni, nominative) or ـين (ayni, oblique) to nouns:
كتاب → كتابان (two books, nom.) / كتابين (obj.)
رجل → رجلان (two men) / رجلين
طالب → طالبان (two students) — عمران خان واضح مثال!
🇵🇰 اردو: Urdu has no dual — you must say "دو کتابیں"

**Q:** What does الاسم الموصول (al-ism al-mawṣūl) الذي / التي mean?

**A:** Relative Pronouns — الذي / التي

📖 الذي (alladhī) = who/which/that (masculine)
التي (allatī) = who/which/that (feminine)
الطالب الذي يدرس = the student who studies
المعلمة التي تدرّس = the teacher (female) who teaches
🇵🇰 اردو: جو (jo) — gender-neutral in Urdu

**Q:** What is the شرط (sharṭ) conditional sentence structure in Arabic?

**A:** Conditional Sentences — الجملة الشرطية

📖 Two main conditional particles:
إن/إذا + past verb (condition) + past/jussive verb (result)
إن ذهبتَ، رأيتَ الحقيقة = If you go, you will see the truth
لو (law) = contrary-to-fact: لو ذهبتَ لرأيتَ = If you had gone, you would have seen
🇵🇰 اردو: اگر... تو — same structure

**Q:** What is the difference between أصوات الشمس (Sun letters) and أصوات القمر (Moon letters)?

**A:** Sun and Moon Letters — حروف الشمس والقمر

📖 After the definite article ال (al-):
Moon letters (حروف القمر): the ل of ال is pronounced — al-kitābu (الكتاب), al-bābu (الباب)
Sun letters (حروف الشمس): the ل assimilates to the following letter — ash-shamsu (الشمس), ar-rajulu (الرجل)
Sun letters: ت ث د ذ ر ز س ش ص ض ط ظ ل ن
🇵🇰 اردو: This affects pronunciation of Arabic loanwords in Urdu too

**Q:** What is verb Form VIII (افتعل — iftaʻala) and give an example?

**A:** Verb Form VIII — افتعل (iftaʻala)

📖 Formed by inserting ت after the first root letter, with prefixed ا:
Root ج-م-ع (gather) → اجتمع (ijtamaʻa) = to meet together (the اجتماع meeting!)
Root ش-ر-ك → اشترك (ishtaraka) = to participate/share
Root ع-م-ل → اعتمل — Root ح-ف-ل → احتفل (to celebrate)
🇵🇰 اردو: اجتماع, اشتراک — both Form VIII derivatives, already in Urdu!

**Q:** What is نعت (naʻt) in Arabic grammar?

**A:** نعت (naʻt) = Adjective / Qualifier

📖 An adjective in Arabic must agree with its noun in four ways:
1. Gender (masculine/feminine) 2. Number (singular/dual/plural)
3. Definiteness (definite/indefinite) 4. Case (raf'/nasb/jarr)
Example: الكتابُ الكبيرُ (the big book) — both noun and adjective are definite and nominative
🇵🇰 اردو: صفت (ṣifat) — صفت is itself an Arabic word meaning attribute/adjective!

## Module 8 — Business Arabic: Corporate Vocabulary

**Q:** What does اجتماع مجلس الإدارة (ijtimāʻ majlis al-idāra) mean?

**A:** اجتماع مجلس الإدارة = Board of Directors Meeting

📖 اجتماع = meeting; مجلس (majlis) = council/assembly; الإدارة = administration/management
مجلس الإدارة = Board of Directors
🇵🇰 اردو: مجلس (assembly) is already in Urdu — مجلس قانون ساز (legislature)

**Q:** What does مناقصة (munāqaṣa) mean in procurement Arabic?

**A:** مناقصة (munāqaṣa) = Tender / Bid / Public Procurement

📖 Root: ن-ق-ص (to decrease/reduce — as in competitive bidding down prices)
إصدار مناقصة = issuing a tender
تقديم عرض للمناقصة = submitting a bid
🇵🇰 اردو: ٹینڈر (tender) — Urdu uses English loanword; Arabic uses مناقصة

**Q:** What does صافي الربح (ṣāfī al-ribḥ) mean?

**A:** صافي الربح (ṣāfī al-ribḥ) = Net Profit

📖 صافي = net/clear/pure; الربح = profit (root: ر-ب-ح)
إجمالي الربح = gross profit
خسارة = loss (antonym)
🇵🇰 اردو: منافع (munāfiʻ) = profit — but ربح is the Quranic/formal Arabic term

**Q:** What does تصدير (taṣdīr) mean and what is its opposite?

**A:** تصدير (taṣdīr) = Export

📖 Root: ص-د-ر (to issue/originate)
Opposite: استيراد (istīrād) = Import (root: و-ر-د)
صادرات (ṣādirāt) = exports (plural)
واردات (wāridāt) = imports (plural)
🇵🇰 اردو: صادرات, واردات — already used in Pakistani trade news

**Q:** What does قانون (qānūn) mean?

**A:** قانون (qānūn) = Law / Regulation

📖 Root borrowed into Arabic from Greek/Persian
قانون التجارة = commercial law
قانون العمل = labour law
🇵🇰 اردو: قانون (qānūn) = same meaning and same word — already in Urdu!

**Q:** What does حوكمة (ḥawkama) mean in corporate Arabic?

**A:** حوكمة (ḥawkama) = Corporate Governance

📖 A modern Arabic coinage from the English "governance"
حوكمة الشركات = corporate governance
معايير الحوكمة = governance standards
This is the kind of modern MSA business term used in Gulf boardrooms and Arab media.

**Q:** What does الموارد البشرية (al-mawārid al-bashariyya) mean?

**A:** الموارد البشرية = Human Resources (HR)

📖 الموارد = resources (pl. of مورد)
البشرية = human (from بشر = humans/mankind)
قسم الموارد البشرية = HR Department
🇵🇰 اردو: انسانی وسائل — Urdu translation; Arabic term used in MENA HR departments

**Q:** What does مستدام (mustadām) mean in modern Arabic?

**A:** مستدام (mustadām) = Sustainable

📖 Root: د-و-م (to last/continue)
التنمية المستدامة = Sustainable Development
هدف التنمية المستدامة = SDG (Sustainable Development Goal)
This term is central to Gulf Vision plans (Vision 2030 Saudi Arabia, Vision 2071 UAE).

**Q:** What does تحول رقمي (taḥawwul raqmī) mean?

**A:** تحول رقمي (taḥawwul raqmī) = Digital Transformation

📖 تحول = transformation (Form V verb: تحوّل); رقمي = digital (from رقم = number)
التحول الرقمي is a major theme in all Gulf 2030/2050 national strategies
🇵🇰 اردو: ڈیجیٹل تبدیلی — English loanword; Arabic coined its own term

**Q:** What does ذكاء اصطناعي (dhakāʼ iṣṭināʻī) mean?

**A:** ذكاء اصطناعي (dhakāʼ iṣṭināʻī) = Artificial Intelligence (AI)

📖 ذكاء = intelligence (from ذكي = intelligent)
اصطناعي = artificial (from Form X: اصطنع = to manufacture/fabricate)
الذكاء الاصطناعي is the standard MSA term for AI across all Arab media and tech sectors.

## Module 9 — Culture & Media: Proverbs & Idioms

**Q:** What does the Arabic proverb العقل السليم في الجسم السليم mean?

**A:** العقل السليم في الجسم السليم

📖 "A healthy mind is in a healthy body"
Transliteration: al-ʻaqlu as-salīmu fī al-jismi as-salīm
English equivalent: "A sound mind in a sound body" (from Roman mens sana in corpore sano)
🇵🇰 اردو: تندرستی ہزار نعمت ہے — similar wisdom

**Q:** What does the Arabic proverb العلم نور والجهل ظلام mean?

**A:** العلم نور والجهل ظلام

📖 "Knowledge is light and ignorance is darkness"
علم = knowledge; نور = light; جهل = ignorance; ظلام = darkness
🇵🇰 اردو: علم نور ہے، جہالت اندھیرا ہے — almost identical!

**Q:** What does الصبر مفتاح الفرج mean?

**A:** الصبر مفتاح الفرج

📖 "Patience is the key to relief/salvation"
صبر (ṣabr) = patience; مفتاح (miftāḥ) = key; فرج (faraj) = relief/opening
🇵🇰 اردو: صبر کا پھل میٹھا ہوتا ہے — صبر is shared!

**Q:** What does من جد وجد mean?

**A:** من جد وجد (man jadda wajada)

📖 "Whoever strives, finds [success]"
The most famous Arabic motivational proverb — basis of the book "Aleph" concept
جد = to strive seriously; وجد = to find
🇵🇰 اردو: جو محنت کرے، وہ پائے — same wisdom

**Q:** What does الوقت كالسيف إن لم تقطعه قطعك mean?

**A:** الوقت كالسيف إن لم تقطعه قطعك

📖 "Time is like a sword — if you do not cut it, it cuts you"
وقت (waqt) = time; سيف (sayf) = sword; قطع (qaṭaʻa) = to cut
🇵🇰 اردو: وقت تلوار کی مثل ہے — وقت is shared!

**Q:** What does the idiom على الرحب والسعة (ʻalā ar-raḥbi wa as-saʻa) mean?

**A:** على الرحب والسعة — "Welcome! You are most welcome"

📖 Literally: "Upon spaciousness and amplitude"
رحب = spacious; سعة = abundance/roominess
Used to express a warm, generous welcome — more effusive than مرحبا alone
🇵🇰 اردو: خوش آمدید / آپ کا ہمارے یہاں ہمیشہ خیر مقدم ہے

**Q:** What does the news phrase وفي سياق متصل (wa-fī siyāqin muttaṣil) mean?

**A:** وفي سياق متصل = In a related context / In related news

📖 سياق = context; متصل = connected/related
One of the most common transitional phrases in Al Jazeera Arabic news broadcasts
Other key news phrases: في غضون ذلك = meanwhile; وفقاً للمصادر = according to sources
🇵🇰 اردو: اسی سلسلے میں / اس سے متعلق

**Q:** What is the difference between فصحى (Fuṣḥā) and عامية (ʻāmmiyya)?

**A:** الفصحى vs. العامية — MSA vs. Dialect

📖 الفصحى (Fuṣḥā) = Modern Standard Arabic (MSA): used in news, government, education, literature, and the Quran. Understood by all educated Arabs regardless of country.
العامية (ʻāmmiyya) = colloquial/dialectal Arabic: varies enormously by country (Egyptian, Gulf, Levantine, Moroccan). Mutually partially intelligible.
This course teaches الفصحى — the universal key.
🇵🇰 اردو: فصیح اردو vs. عام اردو — same concept exists

**Q:** What does الله أكبر (Allāhu Akbar) mean grammatically?

**A:** الله أكبر — Grammatical Analysis

📖 Allāhu = God (subject, nominative)
Akbaru = greater/greatest (predicate, nominative, elative adjective أفعل pattern)
Literally: "God is greater" (than everything)
This is a جملة اسمية (nominal sentence) — subject + predicate with no verb
🇵🇰 اردو: اللہ اکبر — you say this daily; now you understand its grammar

**Q:** What is the حال (ḥāl) in Arabic grammar?

**A:** الحال (al-ḥāl) — the Circumstantial Qualifier

📖 The ḥāl describes the state or condition of the subject/object while the action occurs. It is always indefinite, accusative, and usually comes after the verb:
جاء الرجل راكباً (the man came riding)
راكباً = ḥāl (accusative, indefinite)
🇵🇰 اردو: حال (ḥāl) in Urdu means "condition/state" — same Arabic root!

## Module 10 — Mastery: Classical Arabic & Rhetoric

**Q:** What is علم البلاغة (ʻilm al-balāgha)?

**A:** علم البلاغة — Arabic Rhetoric

📖 The science of eloquence and effective expression in Arabic, divided into three branches:
1. علم المعاني (ʻilm al-maʻānī) = meaning/semantics — how sentence structure creates meaning
2. علم البيان (ʻilm al-bayān) = clarity — metaphor (استعارة), simile (تشبيه), metonymy (كناية)
3. علم البديع (ʻilm al-badīʻ) = ornamentation — word play, antithesis, assonance
🇵🇰 اردو: بلاغت is used in Urdu literary criticism — same concept

**Q:** What is a تشبيه (tashbīh) in Arabic rhetoric, and give an example?

**A:** تشبيه (tashbīh) = Simile

📖 Comparing two things using كـ (ka = like) or كأن (kaʼanna = as if):
هو كالأسد في الشجاعة = He is like a lion in bravery
The four elements: المشبَّه (subject), المشبَّه به (comparison), أداة التشبيه (like/as), وجه الشبه (point of similarity)
🇵🇰 اردو: تشبیہ (tashbīh) — same word and concept in Urdu poetry!

**Q:** What is استعارة (istiʻāra) — metaphor in Arabic?

**A:** استعارة (istiʻāra) = Metaphor (Borrowed Expression)

📖 A simile where the comparison word is omitted and the characteristics are "borrowed":
رأيت أسداً يخطب في الناس = I saw a lion speaking to the people (= I saw a brave/eloquent man)
استعارة مكنية = implied metaphor; استعارة تصريحية = explicit metaphor
🇵🇰 اردو: استعارہ (istiʻāra) — identical concept and word in Urdu literary studies!

**Q:** What is the الإعجاز القرآني (al-iʻjāz al-qurʼānī)?

**A:** الإعجاز القرآني = The Inimitability of the Quran

📖 The theological and linguistic doctrine that the Quran's Arabic is miraculously eloquent — beyond human capacity to replicate (تحدّي = challenge). It operates through:
- Perfect rhythmic prose (سجع)
- Unprecedented lexical precision
- Multilayered meaning in single words/phrases
- Grammatical structures that convey depth untranslatable to other languages
🇵🇰 اردو: اعجاز قرآنی — central concept in Islamic studies in Pakistan

**Q:** What is the مقامات (maqāmāt) literary tradition?

**A:** المقامات (al-Maqāmāt) = "Assemblies" — Classical Arabic Prose Genre

📖 A genre of rhymed prose narrative (سجع) featuring a clever protagonist (often named أبو زيد) who travels and displays linguistic wit. The most famous are:
- مقامات الحريري (Al-Harīrī, 12th century) — 50 maqāmāt
- مقامات البديع الهمذاني (Al-Hamadhānī, 10th century)
Classical Arabic at its most ornate — the C2 mastery benchmark.

**Q:** What is the difference between الفصحى التراثية (Classical Arabic) and الفصحى المعاصرة (MSA)?

**A:** Classical vs. Modern Standard Arabic

📖 الفصحى التراثية (al-Fuṣḥā al-Turāthiyya): Pre-modern classical Arabic of the Quran, hadith, and classical literature (7th–17th century). Stricter grammatical rules, more complex morphology, richer poetic vocabulary.
الفصحى المعاصرة (al-Fuṣḥā al-Muʻāṣira): Modern Standard Arabic — simplified from classical, standardised for media and education, avoids archaic vocabulary.
This course primarily teaches MSA with Classical foundations.

**Q:** What is الجناس (al-jinās) in Arabic rhetoric?

**A:** الجناس (al-jinās) = Paronomasia / Wordplay

📖 Using words with similar sounds but different meanings for rhetorical effect:
تام (tāmm) = perfect pun: same letters, different meaning
ناقص (nāqiṣ) = incomplete pun: similar but not identical letters
Example from Quran: وَيَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ الْمُجْرِمُونَ مَا لَبِثُوا غَيْرَ سَاعَةٍ (the two uses of ساعة — hour and the Hour/Judgment Day)
🇵🇰 اردو: جناس (jinās) — identical term in Urdu literary criticism

**Q:** What is the القافية (al-qāfiyya) in Arabic poetry?

**A:** القافية (al-qāfiyya) = Rhyme in Arabic Poetry

📖 Classical Arabic poetry (الشعر العربي) is governed by strict metres (بحر pl. بحور). The rhyme (قافية) is the repeated final sound pattern at the end of each hemistich/line. There are 16 classical metres (البحور الشعرية الستة عشر). The most famous: الطويل (al-ṭawīl), الكامل (al-kāmil), البسيط (al-basīṭ).
🇵🇰 اردو: قافیہ (qāfiya) — same word in Urdu/Persian poetry!

**Q:** What does خطبة (khuṭba) mean and why is it linguistically significant?

**A:** خطبة (khuṭba) = Sermon / Oration

📖 Root: خ-ط-ب
الخطيب (al-khaṭīb) = orator/preacher; خطاب (khiṭāb) = address/speech
Friday sermon (خطبة الجمعة) is a major vehicle for MSA in the Muslim world — the most widely heard formal Arabic in the world, heard by ~1.8 billion Muslims weekly.
🇵🇰 اردو: خطبہ (khuṭba) and خطاب (khiṭāb) — already in daily Urdu usage

**Q:** What is the نحو (naḥw) vs. صرف (ṣarf) distinction in Arabic linguistics?

**A:** النحو والصرف — Syntax and Morphology

📖 علم النحو (naḥw) = Arabic syntax: how words combine in sentences, case endings, sentence types, grammatical roles (subject, predicate, object, circumstantial qualifier). The "grammar" of sentence structure.
علم الصرف (ṣarf) = Arabic morphology: how words are formed from roots, verb patterns (أوزان), noun derivations, pluralisation. The "grammar" of word formation.
Together they form the backbone of classical Arabic scholarship.
🇵🇰 اردو: نحو and صرف — both terms appear in Urdu linguistic and madrasa education
