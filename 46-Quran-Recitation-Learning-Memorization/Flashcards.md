<style>
.fc-app{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:760px;margin:1.5rem auto 2.5rem;padding:1.25rem;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(6,95,70,.10),0 2px 6px rgba(0,0,0,.04);border:1px solid #d1fae5;color:#1f2937}
.fc-app *{box-sizing:border-box}
.fc-controls{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;justify-content:space-between;margin-bottom:.85rem}
.fc-controls-left,.fc-controls-right{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}
.fc-select,.fc-btn{font-family:inherit;font-size:.9rem;padding:.5rem .85rem;border-radius:8px;border:1px solid #d1d5db;background:#fff;color:#1f2937;cursor:pointer;transition:all .15s ease;line-height:1.2}
.fc-select:hover,.fc-btn:hover{border-color:#065f46;color:#065f46}
.fc-btn.fc-primary{background:linear-gradient(135deg,#065f46,#064e3b);color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-primary:hover{filter:brightness(1.08);color:#fff;border-color:transparent;box-shadow:0 4px 14px rgba(6,95,70,.35)}
.fc-btn.fc-success{background:#10b981;color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-success:hover{background:#059669;color:#fff;border-color:transparent}
.fc-btn.fc-danger{background:#fff;color:#dc2626;border-color:#fecaca;font-weight:600}
.fc-btn.fc-danger:hover{background:#dc2626;color:#fff;border-color:#dc2626}
.fc-btn.fc-ghost{background:#f3f4f6;border-color:#e5e7eb;font-size:.82rem;color:#6b7280}
.fc-btn.fc-ghost:hover{background:#fee2e2;color:#b91c1c;border-color:#fecaca}
.fc-counter{font-size:.95rem;color:#4b5563;font-weight:600;font-variant-numeric:tabular-nums}
.fc-progress{height:8px;background:#d1fae5;border-radius:99px;overflow:hidden;margin-bottom:1rem}
.fc-progress-bar{height:100%;background:linear-gradient(90deg,#065f46,#34d399);border-radius:99px;width:0%;transition:width .3s ease}
.fc-card-wrap{perspective:1400px;margin-bottom:1rem}
.fc-card{position:relative;width:100%;min-height:240px;cursor:pointer;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,0,.2,1)}
.fc-card.fc-flipped{transform:rotateY(180deg)}
.fc-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:14px;padding:2rem 1.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:1px solid #a7f3d0;box-shadow:0 4px 18px rgba(6,95,70,.12)}
.fc-front{background:linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)}
.fc-back{background:linear-gradient(135deg,#065f46,#064e3b);color:#fff;border-color:transparent;transform:rotateY(180deg)}
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
  var STORAGE_KEY = 'fc-progress-quran';
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

# Quran Recitation & Memorization Flashcards

## Module 1 — Arabic Alphabet & Makhaarij

**Q:** How many letters are in the Arabic alphabet?

**A:** 28 letters. They are written right to left and each can appear in up to 4 forms: isolated, initial, medial, and final.

**Q:** What does Makhaarij (مَخَارِج) mean?

**A:** The plural of Makhraj — the articulation points of Arabic letters. There are 17 primary points across 5 regions: Jawf (hollow), Halq (throat), Lisan (tongue), Shafatan (lips), Khayshum (nasal passage).

**Q:** Which 6 letters do NOT connect to the letter following them?

**A:** ا (Alif), د (Dal), ذ (Dhal), ر (Ra), ز (Zay), و (Waw). These only connect to the letter BEFORE them.

**Q:** What are the 4 emphatic (heavy/thick) letters?

**A:** ص (Sad), ض (Dad), ط (Ta-heavy), ظ (Dha-heavy). They are pronounced with the tongue pressed toward the back/roof of the mouth.

**Q:** What region do Meem (م), Ba (ب), and Waw (و) come from?

**A:** Shafatan (الشَّفَتَان) — the lips region. All three letters are produced using the lips.

**Q:** What is the Jawf (الجَوف) region in Makhaarij?

**A:** The hollow of the mouth and throat — the region from which long vowels emerge: the long Alif (آ), long Waw (و), and long Ya (ي).

**Q:** Name the 5 Makhaarij regions.

**A:** 1. Jawf (hollow of mouth/throat), 2. Halq (throat), 3. Lisan (tongue), 4. Shafatan (lips), 5. Khayshum (nasal passage — source of Ghunnah).

## Module 2 — Harakat & Vowels

**Q:** What are the 8 harakat (vowel marks) in Arabic?

**A:** Fatha (ـَ), Kasra (ـِ), Damma (ـُ), Sukoon (ـْ), Shaddah (ـّ), Fathatan (ـً), Kasratan (ـٍ), Dammatan (ـٌ).

**Q:** What is the difference between a Fatha and a Fathatan?

**A:** Fatha (ـَ) is a single short "a" vowel sound. Fathatan (ـً) is double Fatha — produces the sound "-an" (Tanween) and represents an indefinite ending when NOT stopping.

**Q:** What does Sukoon (ـْ) indicate?

**A:** Sukoon means "silence/stillness" — it indicates that the letter carries NO vowel. The letter is held at its articulation point without a vowel sound.

**Q:** What does Shaddah (ـّ) indicate?

**A:** Shaddah means the letter is doubled — it is pronounced with extra emphasis. The first instance carries Sukoon (unvowelled) and the second carries the visible vowel.

**Q:** What are the three Tanween (nunation) marks?

**A:** Fathatan (ـً = "-an"), Kasratan (ـٍ = "-in"), Dammatan (ـٌ = "-un"). Tanween adds a Noon sound at the end of a word and indicates indefiniteness.

**Q:** What are the three long vowels (Madd letters)?

**A:** Long Alif (ā — 2+ beats), Long Waw (ū — 2+ beats), Long Ya (ī — 2+ beats). They are produced when a short vowel is followed by its corresponding weak letter.

## Module 3 — Tajweed: Madd Rules

**Q:** What is Madd Tabee'i (المَدّ الطَّبِيعِي)?

**A:** Natural elongation — 2 beats. Occurs when a long vowel (ā, ū, ī) is followed by a normal letter (no Hamza, Sukoon, or Shaddah after it).

**Q:** What is Madd Muttasil (المَدّ المُتَّصِل)?

**A:** Connected elongation — 4 to 5 beats. Occurs when a Madd letter is followed by a Hamza (ء/أ) in the SAME word. Example: جَآءَ.

**Q:** What is Madd Munfasil (المَدّ المُنفَصِل)?

**A:** Disconnected elongation — 4 to 5 beats. Occurs when a Madd letter at the END of one word is followed by a Hamza at the START of the NEXT word. Example: إِنَّآ أَعطَينَاك.

**Q:** What is Madd Leen (مَدّ اللِّين)?

**A:** Ease elongation — 2 beats. Occurs when Waw (و) or Ya (ي) with Sukoon is preceded by a Fatha. Example: بَيت (house), خَوف (fear).

**Q:** What is Madd Lazim (المَدّ اللَّازِم)?

**A:** Mandatory elongation — 6 beats. Occurs when a Madd letter is followed immediately by a Shaddah. Example: الضَّآلِّين in Surah Al-Fatiha (6 beats before the Shaddah on Lam).

## Module 3 — Tajweed: Noon Sakin Rules

**Q:** What is Izhar (الإِظهَار) and when does it apply?

**A:** Clear pronunciation — Noon Sakin or Tanween before any of the 6 throat letters: أ ه ع ح غ خ. The Noon is pronounced clearly with no Ghunnah.

**Q:** What is Idgham with Ghunnah and when does it apply?

**A:** Merging with nasal hum — Noon Sakin/Tanween before ي ن م و. The Noon merges into the following letter with a 2-beat nasal sound. Mnemonic: يَنمُو (yanmū).

**Q:** What is Iqlab (الإِقلاب)?

**A:** Conversion — Noon Sakin/Tanween before Ba (ب). The Noon converts to a Meem sound with a 2-beat Ghunnah. A small Meem appears above the Noon in the Mushaf to indicate this.

**Q:** What are the 15 Ikhfa letters?

**A:** ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك — all letters except the 6 Izhar letters (throat), 4 Idgham-with-Ghunnah letters, 2 Idgham-without-Ghunnah letters (ل ر), and Ba (Iqlab).

**Q:** What is Ghunnah (الغُنَّة)?

**A:** Nasal resonance lasting 2 beats — produced in the Khayshum (nasal passage). Required for: Noon/Meem with Shaddah, Idgham with Ghunnah, Iqlab, and Ikhfa.

## Module 4 — Tajweed: Advanced Rules

**Q:** What are the 5 Qalqalah letters and their mnemonic?

**A:** ق ط ب ج د — mnemonic: قُطُب جَد (quṭbujad). They produce an echo-bounce when they carry Sukoon.

**Q:** What is the difference between Qalqalah Sughra and Qalqalah Kubra?

**A:** Sughra (minor) — letter with Sukoon in the middle of a word. Kubra (major) — letter at the end of a verse when you make Waqf (stop). Kubra is stronger and more pronounced.

**Q:** What are the 3 Meem Sakin rules?

**A:** 1. Ikhfa Shafawi: مْ before ب — conceal Meem, Ghunnah 2 beats. 2. Idgham Shafawi: مْ before م — merge Meem, Ghunnah 2 beats. 3. Izhar Shafawi: مْ before anything else — clear Meem, no Ghunnah.

**Q:** When is the Lam of اللَّه thick vs thin?

**A:** THICK after Fatha or Damma (e.g., قَالَ اللَّهُ). THIN after Kasra (e.g., بِسمِ اللَّهِ — the Kasra on Meem makes the Lam thin). Default: thick.

**Q:** What is Waqf Lazim (م) and what does it require?

**A:** The م symbol means a mandatory stop — stopping is REQUIRED here. Continuing would change or harm the meaning of the verse.

**Q:** What is the Waqf symbol لا?

**A:** Do NOT stop here — stopping would distort the meaning or break the grammatical flow. This is a prohibition on stopping.

## Module 5 — Surah Al-Fatiha

**Q:** What is Surah Al-Fatiha called and why?

**A:** Umm al-Quran (Mother of the Quran) and Umm al-Kitab (Mother of the Book). It summarises the Quran's core themes: tawhid, resurrection, guidance, and accountability.

**Q:** How many times is Surah Al-Fatiha recited daily in the 5 prayers?

**A:** Minimum 17 times (2+4+4+3+4 rak'at). Each rak'at requires Al-Fatiha — missing it makes the prayer incomplete (Sahih Bukhari).

**Q:** What does الرَّحمَٰن mean vs الرَّحِيم?

**A:** Ar-Rahmān — vast mercy for ALL creation (believers, disbelievers, animals). Ar-Rahīm — special mercy specifically for believers, fulfilled in the Hereafter.

**Q:** What does رَبّ (Rabb) mean in Al-Fatiha verse 2?

**A:** Three meanings: Creator (who brought into existence), Owner/Master (who has authority), and Nurturer (who continuously sustains and brings to perfection).

**Q:** Why is إِيَّاكَ placed before نَعبُدُ in verse 5 of Al-Fatiha?

**A:** In Arabic, fronting the object creates emphasis. إِيَّاكَ نَعبُدُ means "It is specifically and exclusively YOU — not anyone else — that we worship." Normal order would be نَعبُدُكَ without that exclusive emphasis.

**Q:** What Tajweed rule applies to the Lam in الدِّينِ (verse 4)?

**A:** Shamsiyyah Lam — Dal (د) is a sun letter, so the Lam is absorbed into the Dal, and the Dal receives a Shaddah. Pronounced "ad-dīn" not "al-dīn."

## Module 6 — Juz Amma Part 1

**Q:** What does أَحَد (Ahad) in Surah Al-Ikhlas mean compared to وَاحِد (Wahid)?

**A:** Wahid = "one" as the first in a sequence. Ahad = absolute uniqueness outside any category — Allah is not "the first God" but the ONLY one of His kind, beyond comparison.

**Q:** What is الصَّمَد (As-Samad) in Surah Al-Ikhlas verse 2?

**A:** The Eternal Refuge — all creation depends on Allah; He depends on nothing. He is self-sufficient and the ultimate source of all.

**Q:** How many verses does Surah Al-Ikhlas have, and what fraction of the Quran does it equal?

**A:** 4 verses. It equals one-third of the Quran because it covers one of the Quran's three main themes: the knowledge of Allah's attributes (Sahih Bukhari).

**Q:** What are the three protections sought in Surah Al-Falaq?

**A:** 1. Evil of all creation generally. 2. Evil of darkness when it settles. 3. Evil of those who blow on knots (harmful practices). 4. Evil of an envier when they envy. (4 categories total.)

**Q:** In Surah An-Naas, what three names of Allah are invoked?

**A:** Rabb an-Naas (Lord of mankind), Malik an-Naas (King of mankind), Ilaah an-Naas (God of mankind) — a triple protective invocation.

**Q:** What are the 4 conditions for success in Surah Al-Asr?

**A:** 1. Iman (faith). 2. Amal Salih (righteous deeds). 3. Tawasi bil-Haqq (mutual counsel in truth). 4. Tawasi bis-Sabr (mutual counsel in patience). ALL four required.

**Q:** What is the context behind Surah Al-Kawthar?

**A:** The Quraysh mocked the Prophet ﷺ as "al-abtar" (cut off) when his sons died. Allah replied: "We have given YOU abundance — your enemy is the one who will be cut off." His legacy now has 1.8 billion followers; his mockers are forgotten.

## Module 7 — Juz Amma Part 2

**Q:** Why did Umar ibn al-Khattab weep when Surah An-Nasr was recited?

**A:** He understood it announced that the Prophet's ﷺ mission was complete and his departure was near. It was the last complete surah revealed. The correct response to victory: humility, tasbih, and istighfar — not pride.

**Q:** What did the Quraysh offer that Surah Al-Kafirun was responding to?

**A:** A deal: worship our gods for one year, we'll worship yours for one year. The surah refuses all compromise in the object of worship: "For you is your religion, for me is mine."

**Q:** What does Surah Al-Ma'un (107) say about one who "denies the Day of Judgment"?

**A:** The denier is identified by behavior, not words: they push away orphans and don't encourage feeding the poor. Functional denial = acting as if there is no accountability.

**Q:** What warning does Surah Al-Ma'un give about prayer?

**A:** "Woe to those who pray heedlessly" — people who go through motions without presence, AND those who pray for show (riya). It warns against mindless or performance-based prayer.

**Q:** What is the event described in Surah Al-Fil?

**A:** The Year of the Elephant (~570 CE — the year Prophet ﷺ was born). Abraha, the Abyssinian governor, marched with war elephants to destroy the Kaaba. Allah sent birds with clay stones that destroyed the army.

## Module 8 — Memorization (Hifz)

**Q:** What are the three pillars of the traditional hifz system?

**A:** 1. Sabt (ثَبَات) — consolidation before moving on. 2. Tajweed — accuracy during memorisation. 3. Muraja'ah (مُرَاجَعَة) — systematic ongoing revision.

**Q:** What is the recommended revision-to-new material ratio in hifz?

**A:** 2-3 pages of revision for every 1 page of new material. Neglecting revision is the most common cause of forgetting memorised material.

**Q:** What is spaced repetition and how does it apply to hifz?

**A:** Reviewing at increasing intervals: Day 1, 2, 4, 7, 14, 30. Each review refreshes the memory's "expiry date." This is more effective than cramming.

**Q:** What is Talaqqi (تَلَقِّي)?

**A:** Direct face-to-face transmission from teacher to student — the method by which the Quran has been transmitted unbroken since the Prophet ﷺ. A teacher catches Tajweed errors the student cannot hear themselves.

**Q:** What is an Ijazah (إِجَازَة)?

**A:** A certificate of authorisation given when a teacher has heard the student recite accurately. It includes an isnad (chain) tracing back through teachers to the Prophet ﷺ himself.

## Module 9 — Ayatul Kursi & Selected Surahs

**Q:** Which verse is the greatest in the Quran according to the Prophet ﷺ?

**A:** Ayatul Kursi (Al-Baqarah 2:255). The Prophet ﷺ confirmed this to Abu ibn Ka'b, congratulating him on his knowledge (Sahih Muslim).

**Q:** What are the first two divine attributes in Ayatul Kursi?

**A:** Al-Hayyul (الحَيُّ — the Ever-Living) and Al-Qayyum (القَيُّوم — the Self-Subsisting who sustains all). Together they affirm Allah's absolute, active, eternal existence.

**Q:** What does "His Kursi extends over the heavens and earth" mean?

**A:** Allah's knowledge, authority, and sovereign governance encompass all creation. Not a literal physical object — a metaphor for His all-encompassing power and oversight.

**Q:** Why is Surah Yasin called "the Heart of the Quran"?

**A:** "Everything has a heart, and the heart of the Quran is Yasin" (Prophet ﷺ, Tirmidhi). It contains the Quran's essential pulse: prophethood, signs in creation, resurrection, and divine power (كُن فَيَكُون).

**Q:** What four stories are in Surah Al-Kahf and what trials do they represent?

**A:** People of the Cave (fitnah of religion), Two Gardens (fitnah of wealth), Musa and Khidr (fitnah of knowledge), Dhul-Qarnayn (fitnah of power). Four universal trials of every age.

**Q:** What is the virtue of reciting Surah Al-Kahf on Friday?

**A:** Light illuminates between the reciter and the Kaaba until the next Friday (Al-Bayhaqi). Also: memorising the first 10 verses protects from the Dajjal (Sahih Muslim).

**Q:** What is the virtue of reciting Surah Al-Mulk every night?

**A:** It intercedes for its reciter in the grave, preventing punishment (Abu Dawud, Tirmidhi). The Prophet ﷺ reportedly never slept without reciting it (Ibn Masud).
