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
  var STORAGE_KEY = 'fc-progress-persian';
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    var app = document.getElementById('fc-app');
    if(!app) return;
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
      if(pos & Node.DOCUMENT_POSITION_PRECEDING){ hr.classList.add('fc-source-hidden'); }
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
    try { var raw = localStorage.getItem(STORAGE_KEY); if(raw) known = JSON.parse(raw) || {}; } catch(e){ known = {}; }
    function cardId(c){ return c.section + '||' + c.q; }
    function saveKnown(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(known)); } catch(e){} }
    var deck = cards.slice();
    var idx = 0;
    var sectionFilter = '__all__';
    function applyFilter(){
      if(sectionFilter === '__all__'){ deck = cards.slice(); }
      else { deck = cards.filter(function(c){ return c.section === sectionFilter; }); }
      idx = 0; render();
    }
    function shuffle(){
      for(var i = deck.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
      }
      idx = 0; render();
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
      if(deck.length === 0){ qEl.textContent = 'No cards in this section.'; aEl.textContent = ''; counterEl.textContent = 'Card 0 of 0'; progressBar.style.width = '0%'; knownFront.textContent = ''; knownBack.textContent = ''; return; }
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
    function markKnown(val){ if(deck.length === 0) return; var c = deck[idx]; if(val) known[cardId(c)] = 1; else delete known[cardId(c)]; saveKnown(); next(); }
    function resetProgress(){ if(!confirm('Clear all "Got it" progress for this deck?')) return; known = {}; saveKnown(); render(); }
    cardEl.addEventListener('click', flip);
    cardEl.addEventListener('keydown', function(e){ if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); flip(); } else if(e.key === 'ArrowRight'){ e.preventDefault(); next(); } else if(e.key === 'ArrowLeft'){ e.preventDefault(); prev(); } });
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

# Persian Language Mastery — Flashcards

> **How to use:** Click a card to flip it. Use "Got it" / "Try again" to track your progress. Filter by section to focus on one topic. Shuffle for randomized review. Progress is saved automatically in your browser.

---

## Alphabet & Script

**Q:** What are the 4 letters unique to Persian (not in Arabic)?
**A:** پ (pe — p), چ (che — ch), ژ (zhe — zh), گ (gāf — g)

**Q:** How many letters does the Persian alphabet have?
**A:** 32 letters — the 28 Arabic letters plus the 4 Persian-specific letters

**Q:** In which direction is Persian script written?
**A:** Right to left (راست به چپ — rāst be chap)

**Q:** What are the two main Persian calligraphic styles?
**A:** Nastaliq (نستعلیق — the classic flowing style) and Naskh (نسخ — the more upright, print style)

**Q:** What sound does the letter خ (khe) make?
**A:** A guttural kh sound — like clearing your throat, same as Urdu خ or Spanish j

**Q:** What sound does the letter غ (gheyn) make?
**A:** A guttural gh sound made at the back of the throat, like gargling gently — same as Urdu غ

**Q:** What is the difference between ا (alef) and آ (alef madde)?
**A:** آ (alef with madde) represents the long ā vowel, while ا can represent short a or the consonant

**Q:** What is the Persian word for the alphabet?
**A:** الفبا (alefbā) — named after the first two letters alef and bā

**Q:** Which script do Tajik speakers use for Persian?
**A:** Cyrillic script — a legacy of the Soviet era

**Q:** What is the Persian word for "letter" (of the alphabet)?
**A:** حرف (harf) — same as in Urdu

---

## Core Vocabulary & Cognates

**Q:** What does زندگی (zindagi) mean, and is it the same in Urdu?
**A:** Life/living — yes, identical in Urdu (زندگی)

**Q:** What does دوست (dost) mean?
**A:** Friend — identical in Urdu; comes from Old Persian

**Q:** What does آب (āb) mean?
**A:** Water — same in Urdu آب; related to English "aqua" (both Indo-European)

**Q:** What does خانه (khāne) mean, and how does it compare to Urdu?
**A:** House/home — Urdu has خانہ (khāna) — almost identical

**Q:** What does بازار (bāzār) mean?
**A:** Market — this Persian word entered English as "bazaar" and is identical in Urdu

**Q:** What does عشق (ishq) mean?
**A:** Love/passion — identical in Urdu عشق, and comes from Arabic

**Q:** Translate: کتاب، قلم، کاغذ
**A:** Book (کتاب — ketāb), Pen (قلم — qalam), Paper (کاغذ — kāghaz) — all identical in Urdu

**Q:** What does سفر (safar) mean?
**A:** Journey/travel — identical in Urdu سفر

**Q:** What does استاد (ostād) mean?
**A:** Teacher/master — identical in Urdu استاد

**Q:** What does امتحان (emtehān) mean?
**A:** Exam/test — identical in Urdu امتحان

**Q:** Give the Persian words for: day, night, week, month, year
**A:** روز (ruz), شب (shab), هفته (hafte), ماه (māh), سال (sāl)

**Q:** What does خبر (khabar) mean?
**A:** News — identical in Urdu خبر

---

## Grammar Essentials

**Q:** What is the ezāfe construction in Persian?
**A:** A linking vowel (-e or -ye) connecting nouns and adjectives: کتاب دوست (ketāb-e dust) = friend's book

**Q:** How do you say "I am" in formal vs. colloquial Persian?
**A:** Formal: من هستم (man hastam); Colloquial: منم (manam) or هستم (hastam)

**Q:** What is the direct object marker in Persian?
**A:** را (rā) — placed after the definite/specific direct object: کتاب را خواندم (I read the book)

**Q:** How is the past tense formed in Persian?
**A:** Past stem + personal ending: رفتم (raftam — I went), رفتی (rafti — you went), رفت (raft — he/she went)

**Q:** What is the present tense prefix in Persian?
**A:** می (mi-) is added before the verb: می‌روم (mi-ravam — I go/I am going)

**Q:** How do you form the negative in Persian?
**A:** Add ن (na-) or نمی (nami-) before the verb: نمی‌روم (nami-ravam — I don't go)

**Q:** What is the plural suffix in Persian?
**A:** ها (hā): کتاب‌ها (ketāb-hā — books), دوست‌ها (dust-hā — friends)

**Q:** What is the subjunctive marker in Persian?
**A:** The subjunctive uses the present stem with بـ (be-) prefix instead of می (mi-): برود (boravad — that he goes)

**Q:** What verb triggers the subjunctive in Persian?
**A:** باید (bāyad — must/should), شاید (shāyad — perhaps), می‌خواهم (mi-khāham — I want), امیدوارم (omidvāram — I hope)

**Q:** What is the ezāfe after words ending in vowel?
**A:** Use -ye instead of -e: خانه‌ی دوست (khāne-ye dust — friend's house)

---

## Everyday Conversations

**Q:** How do you say "Good morning" in Persian?
**A:** صبح بخیر (sobh be-kheyr)

**Q:** How do you say "Thank you" formally and informally?
**A:** Formal: متشکرم (moteshakkeram); Informal: ممنونم (mamnunam); also: مرسی (mersi — from French)

**Q:** How do you say "Excuse me / Sorry" in Persian?
**A:** ببخشید (bebakhshid) — used for both excuse me and sorry

**Q:** How do you ask "How are you?" formally?
**A:** حال شما چطور است؟ (hāl-e shomā chetour ast?)

**Q:** How do you ask "What is your name?" colloquially?
**A:** اسمتون چیه؟ (esmetun chiye?) — colloquial / اسم شما چیست؟ (esm-e shomā chist?) — formal

**Q:** What does خوش آمدید (khosh āmadid) mean?
**A:** Welcome — literally "you came pleasantly/well"

**Q:** How do you say "I don't understand" in Persian?
**A:** نمی‌فهمم (nami-fahman) — colloquial; نمی‌فهمم (nami-fahm) also common

**Q:** What is the Persian word for "please"?
**A:** لطفاً (lotfan) — from Arabic لطف (grace/kindness)

**Q:** How do you say "Goodbye" in Persian?
**A:** خداحافظ (khodāhāfez) — "May God be your guardian"; خدانگهدار (khodānegahdār) — more formal

**Q:** What does the Persian greeting "درود" (dorud) mean?
**A:** A formal/literary greeting meaning "salutation/hello" — more elevated than سلام

---

## Advanced Grammar

**Q:** How do you form the present perfect in Persian?
**A:** Past stem + ه + auxiliary (am/i/ast/im/id/and): رفته‌ام (rafte-am — I have gone)

**Q:** How do you form the past perfect in Persian?
**A:** Past stem + ه + بودم/بودی/بود...: رفته بودم (rafte budam — I had gone)

**Q:** Give an example of a Type 2 conditional in Persian.
**A:** اگر پول داشتم، سفر می‌کردم (agar pul dāshtam, safar mi-kardam) — If I had money, I would travel

**Q:** What is the difference between ساخته شد and ساخته شده است?
**A:** ساخته شد = was built/made (completed action); ساخته شده است = has been built (current state/result)

**Q:** How do you form a complex relative clause in Persian?
**A:** Use که (ke): کتابی که خواندم (ketābi ke khāndam — the book that I read)

**Q:** What is the past continuous tense in Persian?
**A:** می + imperfect stem: می‌رفتم (mi-raftam — I was going / I used to go)

**Q:** How do you say "I must go" and "I cannot come" in Persian?
**A:** باید بروم (bāyad beravam — I must go); نمی‌توانم بیایم (nami-tavānam biyāyam — I cannot come)

**Q:** What is the Persian for "perhaps he will come"?
**A:** شاید بیاید (shāyad biyāyad) — شاید is identical to Urdu شاید!

**Q:** What is the passive voice formula in Persian?
**A:** Past participle (ه form) + شدن: درب بسته شد (dar baste shod — the door was closed)

**Q:** In formal written Persian, how does the third-person plural verb differ from colloquial?
**A:** Formal: می‌روند (mi-ravand); Colloquial: می‌رن (mi-ran)

---

## Business Persian

**Q:** How do you begin a very formal Persian letter or email?
**A:** با سلام و احترام (bā salām o ehterām) — With greetings and respect

**Q:** What is the formal Persian address for a male senior official?
**A:** جناب آقای [نام] (janāb-e āqā-ye [nām]) — His Excellency Mr. [Name]

**Q:** What does به استحضار می‌رسانم mean?
**A:** I respectfully bring to your attention — a very formal written Persian phrase

**Q:** What is the Persian word for "contract"?
**A:** قرارداد (qarārdad) — same root as Urdu قرارداد

**Q:** What is the Persian word for "meeting" in a business context?
**A:** جلسه (jalase) — same as Urdu جلسہ

**Q:** What is تعارف (ta'arof) in Iranian business culture?
**A:** The elaborate system of social courtesy — initial offers are declined and must be insisted upon; it is social grace, not dishonesty

**Q:** What does موفق باشید (movaffaq bāshid) mean?
**A:** "Be successful" — a warm closing formula in Persian letters and farewells

**Q:** What is the Persian term for "human resources"?
**A:** منابع انسانی (manābe'-e ensāni) — literally "human resources"

**Q:** What is the Solar Hijri date for 2025 CE approximately?
**A:** 1404 Solar Hijri (Hejri Shamsi — هجری شمسی)

**Q:** What are the working days in Iran?
**A:** Saturday through Wednesday (Thursday afternoon is sometimes half-day; Friday is the weekend)

---

## Poetry & Culture

**Q:** Who wrote the Masnavi (مثنوی) and in which century?
**A:** Mowlana Jalal al-Din Rumi (مولانا جلال‌الدین رومی) — 13th century (1207–1273 CE)

**Q:** What are the opening two words of Rumi's Masnavi?
**A:** بشنو این — "Listen to this" (بشنو این نی — Listen to this reed)

**Q:** Who wrote the Divan (دیوان حافظ) and what city was he from?
**A:** Khwaja Hafiz Shirazi (خواجه حافظ شیرازی) — from Shiraz, ~1325–1390 CE

**Q:** What is a غزل (ghazal) in Persian poetry?
**A:** A lyric poem of 5–12 couplets, where the last line contains the poet's name (takhallus), with a monorhyme

**Q:** What is the Shahnameh (شاهنامه) and who wrote it?
**A:** The "Book of Kings" — a 60,000-couplet epic by Ferdowsi (~940–1020 CE), the national epic of Iran

**Q:** What are the 7 items on the Nowruz Haft-Sin table?
**A:** سبزه (sprouts), سمنو (wheat pudding), سنجد (oleaster), سیر (garlic), سیب (apple), سرکه (vinegar), سکه (coins)

**Q:** When does Nowruz (نوروز) occur each year?
**A:** On the vernal equinox — around March 20–21

**Q:** What is Dari (دری)?
**A:** The official name of Persian in Afghanistan — mutually intelligible with Iranian Persian, with some vocabulary and pronunciation differences

**Q:** What is significant about Allama Iqbal's Persian poetry?
**A:** His most profound philosophical works (Asrār-e Khudi, Jāvidnāme) were written in Persian, continuing the classical Mughal tradition

**Q:** What did Mirza Ghalib say about his Persian vs Urdu poetry?
**A:** Ghalib considered his Persian Divan superior to his Urdu ghazals — Persian was his preferred literary language

---

## Fluency & Mastery

**Q:** What is the Persian term for public speaking / oratory?
**A:** خطابت (khetābat) — from Arabic khutba (sermon)

**Q:** What is the classic Persian storytelling opener?
**A:** یکی بود یکی نبود (yeki bud yeki nabud) — "There was one, there was none" (Once upon a time)

**Q:** What is the most common Urdu speaker error in Persian pronunciation?
**A:** Using retroflex consonants (ٹ، ڈ، ڑ) — Persian has no retroflex sounds

**Q:** How do you say "I take the plunge" as a Persian idiom?
**A:** دل به دریا زدن (del be daryā zadan) — "to throw one's heart into the sea"

**Q:** What is the Persian equivalent of "walls have ears"?
**A:** دیوار موش داره، موش هم گوش داره (divār mush dāre, mush ham gush dāre)

**Q:** What does از ماست که بر ماست mean?
**A:** "It is from us that it falls on us" — we reap what we sow / we are our own problem

**Q:** Name two major Persian news sources accessible online.
**A:** BBC Persian (بی‌بی‌سی فارسی — bbcpersian.com) and Iran International (ایران اینترنشنال — iranintl.com)

**Q:** Which Iranian director won the Academy Award for Best Foreign Film in 2012?
**A:** Asghar Farhadi (اصغر فرهادی) for A Separation (جدایی نادر از سیمین)

**Q:** What does عجله کار شیطان است mean?
**A:** "Haste is the devil's work" — equivalent to "haste makes waste"

**Q:** What is the CEFR level targeted by Module 10 of this course?
**A:** C2 — Mastery level, the highest CEFR designation

