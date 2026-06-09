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
  var STORAGE_KEY = 'fc-progress-french';
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

# 🃏 French Language Master Flashcards

## Module 1 — Alphabet, Numbers, Colors & Greetings

**Q:** How do you say 'Hello / Good day' in French?

**A:** Bonjour (bɔ̃ʒuʁ)

📖 Hello / Good day
🇵🇰 ہیلو / شب بخیر

**Q:** How do you say 'Goodbye' in French?

**A:** Au revoir (o ʁəvwaʁ)

📖 Goodbye
🇵🇰 خدا حافظ

**Q:** How do you say 'Please' in French?

**A:** S'il vous plaît (sil vu plɛ)

📖 Please (formal) / S'il te plaît (informal)
🇵🇰 براہ کرم

**Q:** How do you say 'Thank you' in French?

**A:** Merci (mɛʁsi)

📖 Thank you / Merci beaucoup = Thank you very much
🇵🇰 شکریہ

**Q:** How do you say 'Yes' and 'No' in French?

**A:** Oui (wi) / Non (nɔ̃)

📖 Yes / No
🇵🇰 ہاں / نہیں

**Q:** How do you count 1–10 in French?

**A:** un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix (œ̃, dø, tʁwa, katʁ, sɛ̃k, sis, sɛt, ɥit, nœf, dis)

📖 1–10
🇵🇰 ایک سے دس تک

**Q:** How do you say the colors red, blue, green in French?

**A:** rouge (ʁuʒ), bleu (blø), vert (vɛʁ)

📖 Red, blue, green — colors agree in gender with the noun they modify
🇵🇰 سرخ، نیلا، سبز

**Q:** How do you say 'My name is…' in French?

**A:** Je m'appelle… (ʒə mapɛl)

📖 Literally "I call myself…" — the standard self-introduction
🇵🇰 میرا نام … ہے

**Q:** How do you say 'How are you?' formally in French?

**A:** Comment allez-vous ? (kɔmɑ̃ ale vu)

📖 Formal. Informal: Comment vas-tu? / Comment ça va?
🇵🇰 آپ کیسے ہیں؟ (رسمی)

**Q:** How do you say 'Nice to meet you' in French?

**A:** Enchanté(e) (ɑ̃ʃɑ̃te)

📖 Add -e for feminine speaker. Also: Ravi(e) de vous rencontrer
🇵🇰 آپ سے مل کر خوشی ہوئی

## Module 2 — Family, Body, Days & Months

**Q:** How do you say 'family' in French and name 4 family members?

**A:** la famille (la famij)

📖 Father = père, Mother = mère, Brother = frère, Sister = sœur
🇵🇰 خاندان — باپ، ماں، بھائی، بہن

**Q:** How do you say the days of the week in French?

**A:** lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche

📖 Monday through Sunday — NOT capitalized in French
🇵🇰 پیر، منگل، بدھ، جمعرات، جمعہ، ہفتہ، اتوار

**Q:** How do you say January, February, March in French?

**A:** janvier, février, mars (ʒɑ̃vje, fevʁije, maʁs)

📖 Months are NOT capitalized in French. janvier = January etc.
🇵🇰 جنوری، فروری، مارچ

**Q:** How do you say 'head, hand, foot' in French?

**A:** la tête (tɛt), la main (mɛ̃), le pied (pje)

📖 Head, hand, foot — body vocabulary with definite articles
🇵🇰 سر، ہاتھ، پاؤں

**Q:** How do you say 'I have a brother and two sisters' in French?

**A:** J'ai un frère et deux sœurs. (ʒe œ̃ fʁɛʁ e dø sœʁ)

📖 Using avoir (to have) — j'ai = I have
🇵🇰 میرا ایک بھائی اور دو بہنیں ہیں

**Q:** How do you say the four seasons in French?

**A:** le printemps (spring), l'été (summer), l'automne (autumn), l'hiver (winter)

📖 En été = in summer; en hiver = in winter; au printemps = in spring
🇵🇰 بہار، گرمی، خزاں، سردی

**Q:** How do you say 'Today is Monday' in French?

**A:** Aujourd'hui c'est lundi. (oʒuʁdɥi sɛ lœ̃di)

📖 Aujourd'hui = today. C'est = it is.
🇵🇰 آج پیر ہے

**Q:** How do you say 'my mother' vs. 'your mother' in French?

**A:** ma mère (my mother) / votre mère (your mother, formal) / ta mère (your mother, informal)

📖 Possessive adjectives agree with the noun's gender, not the possessor's
🇵🇰 میری ماں / آپ کی ماں

**Q:** How do you say 'son' and 'daughter' in French?

**A:** un fils (fis) / une fille (fij)

📖 Note: fille also means "girl." Context clarifies. Ma fille = my daughter / my girl
🇵🇰 بیٹا / بیٹی

**Q:** How do you say 'I am 30 years old' in French?

**A:** J'ai trente ans. (ʒe tʁɑ̃t ɑ̃)

📖 French uses avoir (to have) for age — literally "I have 30 years"
🇵🇰 میری عمر تیس سال ہے

## Module 3 — Être, Avoir & Basic Grammar

**Q:** What are all the present tense forms of 'être' (to be) in French?

**A:** je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont

📖 To be — the most important irregular verb in French
🇵🇰 ہونا — فرانسیسی کا سب سے اہم فعل

**Q:** What are all the present tense forms of 'avoir' (to have) in French?

**A:** j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont

📖 To have — also used to form passé composé (past tense)
🇵🇰 رکھنا / ہونا — ماضی کے مرکب جملوں میں بھی استعمال

**Q:** What is the difference between 'tu' and 'vous' in French?

**A:** tu = informal singular (friends, family, children); vous = formal singular OR any plural

📖 Using tu with a stranger can seem rude. When in doubt, use vous.
🇵🇰 tu = غیر رسمی اکیلا؛ vous = رسمی یا جمع

**Q:** How do you make a sentence negative in French?

**A:** Place ne…pas around the conjugated verb: Je ne parle pas. (ʒə nə paʁl pa)

📖 I don't speak. In spoken French, ne is often dropped: Je parle pas.
🇵🇰 نفی بنانے کے لیے ne…pas فعل کے گرد لگائیں

**Q:** What are the French indefinite articles and when do you use them?

**A:** un (masculine singular), une (feminine singular), des (plural)

📖 Un livre = a book; une table = a table; des livres = (some) books
🇵🇰 غیر معین حروف تعریف: ایک (مذکر)، ایک (مونث)، کچھ (جمع)

**Q:** What are the French definite articles?

**A:** le (masculine singular), la (feminine singular), l' (before vowel/h), les (plural)

📖 Le chat = the cat; la maison = the house; l'ami = the friend; les enfants = the children
🇵🇰 معین حروف تعریف — le, la, l', les

**Q:** How do you say 'I speak French' and 'Do you speak English?' in French?

**A:** Je parle français. / Parlez-vous anglais ? (ʒə paʁl fʁɑ̃sɛ / paʁle vu ɑ̃glɛ)

📖 Parler = to speak (regular -er verb). Inversion = question formation
🇵🇰 میں فرانسیسی بولتا ہوں۔ / کیا آپ انگریزی بولتے ہیں؟

**Q:** How do you form the passé composé of 'manger' (to eat) for 'I ate' in French?

**A:** J'ai mangé. (ʒe mɑ̃ʒe)

📖 Passé composé = avoir/être + past participle. Manger → mangé (regular -er verb)
🇵🇰 میں نے کھایا — ماضی مرکب: avoir + past participle

**Q:** What are the French subject pronouns?

**A:** je (I), tu (you-inf.), il/elle (he/she), nous (we), vous (you-formal/pl.), ils/elles (they)

📖 French has gender-specific third-person pronouns. Ils covers mixed-gender groups.
🇵🇰 فرانسیسی ضمائر فاعلی — صنف کے ساتھ بدلتے ہیں

**Q:** How do you say 'I want to go to Paris' in French?

**A:** Je veux aller à Paris. (ʒə vø ale a paʁi)

📖 Vouloir (to want) + infinitive. Je veux = I want. À = to (with cities)
🇵🇰 میں پیرس جانا چاہتا ہوں

## Module 4 — Shopping, Directions & Restaurant

**Q:** How do you say 'How much does this cost?' in French?

**A:** Combien ça coûte ? (kɔ̃bjɛ̃ sa kut)

📖 Literal: How much does that cost? Also: C'est combien?
🇵🇰 یہ کتنے کا ہے؟

**Q:** How do you say 'I would like a coffee, please' in French?

**A:** Je voudrais un café, s'il vous plaît. (ʒə vudʁɛ œ̃ kafe sil vu plɛ)

📖 Voudrais = conditional of vouloir — polite way to order in a restaurant
🇵🇰 مجھے ایک کافی چاہیے، براہ کرم

**Q:** How do you say 'Turn left / Turn right' in French?

**A:** Tournez à gauche / Tournez à droite (tuʁne a goʃ / tuʁne a dʁwat)

📖 Straight ahead = tout droit; Opposite = en face
🇵🇰 بائیں مڑیں / دائیں مڑیں

**Q:** How do you say 'Where is the train station?' in French?

**A:** Où est la gare ? (u ɛ la gaʁ)

📖 Où = where; est = is; la gare = the train station
🇵🇰 ریلوے اسٹیشن کہاں ہے؟

**Q:** How do you ask for the bill in a French restaurant?

**A:** L'addition, s'il vous plaît ! (ladisjɔ̃ sil vu plɛ)

📖 L'addition = the bill. Never say "la facture" in a restaurant — that's for business invoices.
🇵🇰 بل لے آئیں، براہ کرم

**Q:** How do you say 'I am looking for the pharmacy' in French?

**A:** Je cherche la pharmacie. (ʒə ʃɛʁʃ la faʁmasi)

📖 Chercher = to look for / to search
🇵🇰 میں دوائی کی دکان ڈھونڈ رہا ہوں

**Q:** How do you say 'Do you have a table for two?' in French?

**A:** Avez-vous une table pour deux personnes ? (ave vu yn tabl puʁ dø pɛʁsɔn)

📖 Pour deux = for two; pour une personne = for one person
🇵🇰 کیا آپ کے پاس دو لوگوں کی میز ہے؟

**Q:** How do you say 'I am allergic to nuts' in French?

**A:** Je suis allergique aux noix. (ʒə sɥi alɛʁʒik o nwa)

📖 Allergique à = allergic to; aux = à + les (contraction)
🇵🇰 مجھے مغزیات سے الرجی ہے

**Q:** How do you say 'Can you repeat that, please?' in French?

**A:** Pouvez-vous répéter, s'il vous plaît ? (puve vu ʁepete sil vu plɛ)

📖 Répéter = to repeat. Plus lentement = more slowly
🇵🇰 کیا آپ دوبارہ کہہ سکتے ہیں؟

**Q:** How do you say 'I would like to buy a ticket to Lyon' in French?

**A:** Je voudrais acheter un billet pour Lyon. (ʒə vudʁɛ aʃte œ̃ bijɛ puʁ ljɔ̃)

📖 Acheter = to buy; un billet = a ticket; pour + city = to [city]
🇵🇰 میں لیون کا ٹکٹ خریدنا چاہتا ہوں

## Module 5 — Imparfait, Conditionnel & Relative Clauses

**Q:** How do you form the imparfait (imperfect) tense in French?

**A:** Take the nous present-tense stem + endings: -ais, -ais, -ait, -ions, -iez, -aient

📖 Je parlais = I was speaking / I used to speak. Used for habitual past and background description.
🇵🇰 ماضی استمراری: je parlais — میں بولتا تھا / بولتا رہتا تھا

**Q:** How do you say 'When I was a child, I used to play football' in French?

**A:** Quand j'étais enfant, je jouais au football. (kɑ̃ ʒetɛ ɑ̃fɑ̃ ʒə ʒwɛ o futbɔl)

📖 Imparfait for habitual past actions. Étais = was (être), jouais = was playing (jouer)
🇵🇰 جب میں بچہ تھا، میں فٹبال کھیلتا تھا

**Q:** How do you form the conditionnel présent in French?

**A:** Future stem + imperfect endings: -ais, -ais, -ait, -ions, -iez, -aient

📖 Je parlerais = I would speak. Used for polite requests and hypothetical situations.
🇵🇰 مشروط حال: je parlerais — میں بولتا (اگر…)

**Q:** How do you say 'If I had money, I would travel to France' in French?

**A:** Si j'avais de l'argent, je voyagerais en France.

📖 Si + imparfait → conditionnel. This is the standard hypothetical (Type 2 condition).
🇵🇰 اگر میرے پاس پیسے ہوتے، میں فرانس جاتا

**Q:** What do the relative pronouns 'qui' and 'que' mean in French?

**A:** qui = who / which (subject); que = who / which / that (object)

📖 L'homme qui parle = the man who is speaking; Le livre que je lis = the book that I am reading
🇵🇰 qui = جو (فاعل)؛ que = جو / کہ (مفعول)

**Q:** How do you say 'I think that he is right' in French?

**A:** Je pense qu'il a raison. (ʒə pɑ̃s kil a ʁɛzɔ̃)

📖 Que becomes qu' before a vowel. Avoir raison = to be right
🇵🇰 مجھے لگتا ہے کہ وہ سہی ہے

**Q:** How do you use 'dont' as a relative pronoun in French?

**A:** Dont replaces de + noun: Le livre dont je parle = The book (that) I am talking about

📖 Dont replaces de qui, de quoi, duquel. C'est l'homme dont je connais la femme = whose wife I know
🇵🇰 dont = جس کا / جس کے بارے میں (de کا متبادل)

**Q:** How do you say 'although' in French?

**A:** bien que / quoique (+ subjunctive): Bien qu'il soit fatigué, il travaille.

📖 Bien que and quoique require the subjunctive mood — a common exam trap.
🇵🇰 اگرچہ — bien que + subjonctif

**Q:** What is the difference between 'passé composé' and 'imparfait'?

**A:** Passé composé = completed action at a specific moment (I ate); Imparfait = ongoing/habitual past state (I was eating / I used to eat)

📖 PC answers "what happened?" Imparfait answers "what was the situation?"
🇵🇰 PC = مکمل فعل؛ Imparfait = جاری/عادی فعل — اہم فرق

**Q:** How do you express 'I should / ought to' in French?

**A:** Je devrais (+ infinitive) — conditional of devoir

📖 Je devrais partir = I should leave. Tu devrais manger = You should eat.
🇵🇰 مجھے چاہیے — devoir کا conditionnel

## Module 6 — Practical Communication

**Q:** How do you answer a phone call in French?

**A:** Allô ? (alo)

📖 Only used on the phone. De la part de qui ? = Who is calling? Un moment = One moment
🇵🇰 ہیلو؟ — صرف فون پر استعمال ہوتا ہے

**Q:** How do you say 'I would like to make an appointment' in French?

**A:** Je voudrais prendre un rendez-vous. (ʒə vudʁɛ pʁɑ̃dʁ œ̃ ʁɑ̃devu)

📖 Un rendez-vous = an appointment. Prendre = to take/make.
🇵🇰 میں اپوائنٹمنٹ لینا چاہتا ہوں

**Q:** How do you write a formal email opening in French?

**A:** Madame, Monsieur, / À qui de droit, — then: Je me permets de vous contacter au sujet de…

📖 Formal letter closing: Veuillez agréer, Madame/Monsieur, l'expression de mes salutations distinguées.
🇵🇰 رسمی ای میل کا آغاز اور اختتام

**Q:** How do you say 'I don't understand, could you speak more slowly?' in French?

**A:** Je ne comprends pas, pourriez-vous parler plus lentement ?

📖 Plus lentement = more slowly. Je n'ai pas compris = I didn't understand (passé composé).
🇵🇰 میں نہیں سمجھا، کیا آپ آہستہ بول سکتے ہیں؟

**Q:** How do you describe a past event using 'd'abord, ensuite, enfin' in French?

**A:** D'abord = first; ensuite = then / next; enfin = finally

📖 D'abord j'ai mangé, ensuite j'ai travaillé, enfin je suis rentré.
🇵🇰 پہلے، پھر، آخر میں — واقعات بیان کرنے کے لیے

**Q:** How do you express agreement and disagreement in French?

**A:** Agreement: Je suis d'accord / Tout à fait / Exactement. Disagreement: Je ne suis pas d'accord / Pas du tout / Au contraire.

📖 Je suis d'accord = I agree; Pas du tout = Not at all
🇵🇰 اتفاق: je suis d'accord؛ اختلاف: je ne suis pas d'accord

**Q:** How do you say 'in my opinion' in French?

**A:** À mon avis… (a mɔ̃ navi) / Selon moi… / D'après moi…

📖 À mon avis, c'est une bonne idée. = In my opinion, it is a good idea.
🇵🇰 میری رائے میں — À mon avis

**Q:** How do you ask for help politely in French?

**A:** Pourriez-vous m'aider, s'il vous plaît ? / Excusez-moi, pourriez-vous m'aider ?

📖 Pourriez-vous = could you (conditional of pouvoir — very polite)
🇵🇰 کیا آپ میری مدد کر سکتے ہیں؟

**Q:** How do you say 'I have been living in Paris for three years' in French?

**A:** J'habite à Paris depuis trois ans. (ʒabit a paʁi dəpɥi tʁwa ɑ̃)

📖 Depuis + present tense = ongoing action started in the past. Do NOT use past tense with depuis.
🇵🇰 میں تین سال سے پیرس میں رہ رہا ہوں — depuis + present

**Q:** How do you say 'It depends on the situation' in French?

**A:** Ça dépend de la situation. / Cela dépend des circonstances.

📖 Ça dépend = it depends. Common in spoken French.
🇵🇰 یہ حالات پر منحصر ہے

## Module 7 — Advanced Grammar

**Q:** How do you form the passive voice in French?

**A:** Subject + être (conjugated) + past participle (agrees with subject) + par + agent

📖 La lettre est écrite par Marie. = The letter is written by Marie.
🇵🇰 Passive: être + past participle — فعل مجہول

**Q:** How do you report speech in French (indirect speech)?

**A:** Direct: Il dit: "Je suis fatigué." → Indirect: Il dit qu'il est fatigué.

📖 Tense backshift occurs when the reporting verb is in the past: Il a dit qu'il était fatigué.
🇵🇰 بالواسطہ تقریر — que + tense shift

**Q:** What is the French subjunctive and when is it used?

**A:** A mood (not a tense) expressing subjectivity, doubt, necessity, emotion. Triggered by: que + vouloir, douter, être content, bien que, etc.

📖 Je veux qu'il vienne. = I want him to come. (vienne = subjunctive of venir)
🇵🇰 subjonctif = شک، خواہش، جذبات والے جملوں میں استعمال

**Q:** How do you form the future tense (futur simple) in French?

**A:** Infinitive stem + endings: -ai, -as, -a, -ons, -ez, -ont

📖 Je parlerai = I will speak; Il sera = He will be (être is irregular: ser-)
🇵🇰 مستقبل بسیط: infinitive + endings — je parlerai

**Q:** What is a complex conjunction in French and give three examples?

**A:** Multi-word connectors that link clauses — often require subjunctive or indicative

📖 pour que (so that + subj.), afin que (in order that + subj.), bien que (although + subj.), à condition que (provided that + subj.)
🇵🇰 مرکب روابط — pour que, bien que, à condition que

**Q:** How do you say 'the more you work, the more you earn' in French?

**A:** Plus on travaille, plus on gagne. (ply ɔ̃ tʁavaj ply ɔ̃ gɑɲ)

📖 Plus…plus / Moins…moins / Plus…moins — comparative correlatives
🇵🇰 جتنا زیادہ … اتنا زیادہ — Plus…plus

**Q:** What is nominalization in French?

**A:** Converting verbs or adjectives into nouns using suffixes or articles: travailler → le travail; grand → la grandeur

📖 Common in formal writing: La décision de partir = The decision to leave (infinitive as noun)
🇵🇰 Nominalisation — فعل یا صفت کو اسم میں بدلنا

**Q:** How do you use 'dont' vs. 'duquel' as relative pronouns?

**A:** Dont = general replacement for de + noun. Duquel/de laquelle = after prepositions that end with de: à côté duquel, au fond duquel

📖 La table sur laquelle j'écris = The table on which I write (sur → laquelle, not dont)
🇵🇰 dont عام طور پر؛ duquel خاص prepositions کے بعد

**Q:** How do you form the pluperfect (plus-que-parfait) tense in French?

**A:** Imperfect of avoir/être + past participle: j'avais mangé (I had eaten), il était parti (he had left)

📖 Used for an action completed before another past action. Il était parti quand j'ai appelé.
🇵🇰 ماضی بعید: j'avais mangé — کسی اور ماضی عمل سے پہلے مکمل

**Q:** How do you express regret about the past using the conditional in French?

**A:** Conditional perfect: j'aurais dû + infinitive = I should have…

📖 J'aurais dû étudier plus. = I should have studied more. Tu aurais pu me dire = You could have told me.
🇵🇰 ماضی کا افسوس: j'aurais dû — مجھے کرنا چاہیے تھا

## Module 8 — Business & Professional French

**Q:** How do you open a formal business meeting in French?

**A:** Je déclare la séance ouverte. / Permettez-moi d'ouvrir cette réunion.

📖 Common: Nous sommes réunis aujourd'hui pour… = We are gathered today to…
🇵🇰 رسمی اجلاس کا آغاز

**Q:** How do you say 'budget, deadline, and agenda' in French?

**A:** le budget (bydʒɛ), le délai (delɛ), l'ordre du jour (ɔʁdʁ dy ʒuʁ)

📖 Agenda = l'ordre du jour (lit. order of the day). Deadline = délai or date limite.
🇵🇰 بجٹ، ڈیڈلائن، ایجنڈا

**Q:** How do you write a formal letter closing in French?

**A:** Veuillez agréer, Madame/Monsieur, l'expression de mes salutations distinguées.

📖 Equivalent of "Yours sincerely" in formal French correspondence. Always spell out in full.
🇵🇰 رسمی خط کا اختتام — فرانسیسی کاروباری خطوط کا لازمی حصہ

**Q:** How do you say 'I would like to propose a solution' in French?

**A:** Je voudrais proposer une solution. / Je me permets de suggérer une solution.

📖 Je me permets de = I take the liberty of — very polite, professional register
🇵🇰 میں ایک حل پیش کرنا چاہتا ہوں

**Q:** How do you say 'profit, loss, and turnover' in French?

**A:** le bénéfice (profit), la perte (loss), le chiffre d'affaires (turnover/revenue)

📖 Chiffre d'affaires = literally "figure of business" — turnover or gross revenue
🇵🇰 منافع، نقصان، سالانہ آمدنی

**Q:** How do you say 'to negotiate' and 'to sign a contract' in French?

**A:** négocier (negosjePRIMARY) / signer un contrat (siɲe œ̃ kɔ̃tʁa)

📖 Un accord = an agreement; une clause = a clause; une offre = an offer
🇵🇰 مذاکرات کرنا / معاہدے پر دستخط کرنا

**Q:** How do you say 'Human Resources, Marketing, and Sales' in French?

**A:** les Ressources Humaines (RH), le Marketing, les Ventes

📖 Le service des ventes = the sales department; le service RH = the HR department
🇵🇰 انسانی وسائل، مارکیٹنگ، فروخت

**Q:** How do you politely disagree in a business meeting in French?

**A:** Je comprends votre point de vue, cependant… / Permettez-moi de nuancer ce point…

📖 Nuancer = to nuance/qualify. Cependant / toutefois / néanmoins = however/nevertheless
🇵🇰 رسمی اختلاف — Je comprends cependant…

**Q:** How do you say 'in conclusion' and 'to summarize' in French?

**A:** En conclusion… / Pour résumer… / En résumé…

📖 En bref = in short; Pour conclure = to conclude; En définitive = ultimately
🇵🇰 اختتام میں / خلاصہ کرتے ہوئے

**Q:** What does 'le PDG' stand for in French business?

**A:** Président-Directeur Général — equivalent to CEO (Chief Executive Officer)

📖 DRH = Directeur des Ressources Humaines (HR Director); DAF = Directeur Administratif et Financier (CFO)
🇵🇰 PDG = چیف ایگزیکٹو آفیسر کا فرانسیسی متبادل

## Module 9 — Culture, Media & Idioms

**Q:** What does the French idiom 'avoir le cafard' mean?

**A:** Literally "to have the cockroach" — means to feel down / to have the blues

📖 J'ai le cafard aujourd'hui. = I'm feeling blue today. A common colloquial expression.
🇵🇰 اداس ہونا / بلیوز ہونا — حرفی مطلب: تلچٹا ہونا

**Q:** What does 'casser les pieds' mean in French?

**A:** Literally "to break the feet" — means to annoy someone / to be a pain

📖 Tu me casses les pieds ! = You're getting on my nerves! More polite than stronger expressions.
🇵🇰 تنگ کرنا / پریشان کرنا — حرفی مطلب: پاؤں توڑنا

**Q:** What is 'la Francophonie' and name three member countries?

**A:** The international community of French-speaking countries and regions (88 member states)

📖 Key members: France, Belgium, Switzerland, Canada (Québec), Senegal, Morocco, Ivory Coast, Lebanon
🇵🇰 فرانسیسی بولنے والے ممالک کی برادری — 88 رکن ممالک

**Q:** What does 'il pleut des cordes' mean in French?

**A:** Literally "it is raining ropes" — it means it is raining heavily / cats and dogs

📖 Weather idioms: Il fait un froid de canard = It's bitterly cold (duck cold)
🇵🇰 زور کی بارش ہو رہی ہے — حرفی مطلب: رسیاں برس رہی ہیں

**Q:** Who wrote 'Les Misérables' and what literary movement does it represent?

**A:** Victor Hugo (1862) — Romanticism / Social Realism

📖 Other key French authors: Molière (comedy), Voltaire (Enlightenment), Flaubert (Realism), Proust (Modernism)
🇵🇰 وکٹر ہیوگو — رومانوی / سماجی حقیقت نگاری

**Q:** What is the difference between 'le cinéma' as art and 'le cinéma' as industry in French cultural context?

**A:** France treats cinema as the "7th art" (septième art) — the CNC (Centre National du Cinéma) funds and protects French film

📖 Cannes Film Festival (Festival de Cannes) = world's most prestigious film festival, held annually in May
🇵🇰 فرانس میں سنیما کو ساتویں آرٹ کا درجہ حاصل ہے

**Q:** What does 'avoir le beurre et l'argent du beurre' mean?

**A:** Literally "to have the butter and the money for the butter" — to want to have it both ways / to have your cake and eat it too

📖 Common in arguments: Tu ne peux pas avoir le beurre et l'argent du beurre !
🇵🇰 ایک ساتھ دو فائدے چاہنا — اپنا کیک بھی رکھنا اور کھانا بھی

**Q:** What is 'le verlan' in French slang?

**A:** Verlan is a form of French slang where syllables of words are reversed: l'envers (reverse) → verlan; une femme → meuf; un garçon → un gars → zargu

📖 Widely used in suburbs, music, and youth culture. Fou → ouf; merci → icim
🇵🇰 Verlan = فرانسیسی عامیانہ جس میں الفاظ کے حروف الٹ دیے جاتے ہیں

**Q:** What are the five most famous French wines by region?

**A:** Bordeaux (Médoc, Saint-Émilion), Bourgogne (Burgundy), Champagne, Alsace, Côtes du Rhône

📖 Wine is deeply cultural: Appellation d'Origine Contrôlée (AOC) protects regional labels
🇵🇰 بورڈو، بوگوگن، شمپین، الساس، کوٹ دو رون — فرانسیسی شراب علاقے

**Q:** What does 'avoir du pain sur la planche' mean in French?

**A:** Literally "to have bread on the board" — means to have a lot of work to do

📖 On a du pain sur la planche ! = We have a lot on our plate!
🇵🇰 بہت کام باقی ہے — حرفی مطلب: تختے پر روٹی ہونا

## Module 10 — Mastery, Fluency & C2 Precision

**Q:** What is the difference between 'savoir' and 'connaître' in French?

**A:** Savoir = to know a fact / how to do something (Je sais nager); Connaître = to know a person / place through familiarity (Je connais Paris)

📖 Je sais que… (I know that…) vs. Je connais bien Marie (I know Marie well)
🇵🇰 savoir = حقیقت / مہارت جاننا؛ connaître = کسی شخص یا جگہ سے واقف ہونا

**Q:** How do you use the subjunctive after 'bien que' in a C1+ sentence?

**A:** Bien qu'il soit très intelligent, il a échoué à l'examen. (Although he is very intelligent, he failed the exam.)

📖 Soit = subjunctive of être. Bien que, quoique, malgré que → always subjunctive
🇵🇰 bien que + subjonctif — اگرچہ وہ بہت ذہین ہے، پھر بھی ناکام ہوا

**Q:** What is the literary past tense used in French writing (passé simple)?

**A:** A formal/literary tense for completed past actions, used in novels and formal texts: il parla (he spoke), il fut (he was), il vint (he came)

📖 Never used in spoken French. Il alla à Paris = He went to Paris (passé simple of aller)
🇵🇰 passé simple = ادبی ماضی — بولنے میں نہیں، لکھنے میں استعمال

**Q:** How do you express concession at C2 level in French?

**A:** Use: quand bien même + conditionnel, or: si + adj + que + subjonctif: Si intelligent qu'il soit, il peut se tromper.

📖 Quand bien même il travaillerait dur, il ne réussirait pas. = Even if he worked hard, he wouldn't succeed.
🇵🇰 تسلیم کرتے ہوئے استثنیٰ — C2 سطح کا گرامر

**Q:** What is the difference between 'c'est' and 'il est' when describing people?

**A:** C'est + article + noun (C'est un médecin). Il est + adj or noun without article (Il est médecin). C'est + adj for abstract reference (C'est beau).

📖 This distinction is a classic advanced-level exam trap. With professions: il est médecin (no article).
🇵🇰 c'est vs. il est — پیشہ بیان کرتے وقت اہم فرق

**Q:** How do you discuss a philosophical argument in French at C2 level?

**A:** Use: En effet… / Or… / Certes… / Néanmoins… / Force est de constater que…

📖 Force est de constater que = one must acknowledge that. Or = now (logical connector, not "or")
🇵🇰 C2 فلسفیانہ بحث کے روابط

**Q:** What is the 'accord du participe passé' rule in French?

**A:** With être: past participle agrees with subject in gender/number. With avoir: agrees with preceding direct object only.

📖 Elle est partie (agree with elle). Je les ai vus (vus agrees with les = masc. plural DO before verb)
🇵🇰 Past participle کا اتفاق — être کے ساتھ فاعل سے، avoir کے ساتھ مفعول سے

**Q:** How do you use 'ne…que' to express restriction in French?

**A:** Ne…que = only: Je ne lis que des romans. = I only read novels. (lit: I read nothing but novels)

📖 Seulement can replace ne…que: Je lis seulement des romans. But ne…que is more elegant.
🇵🇰 ne…que = صرف — Je ne mange que des légumes = میں صرف سبزیاں کھاتا ہوں

**Q:** What rhetorical device is the triple repetition in French political speech?

**A:** L'anaphore (anaphora) — repeating a word or phrase at the start of successive clauses for emphasis

📖 De Gaulle's "Je vous ai compris" speeches use anaphora extensively. Also: antithèse, métaphore, ellipse.
🇵🇰 Anaphore = تکرار بلاغی — سیاسی تقریروں میں زور دینے کا طریقہ

**Q:** How do you express nuanced disagreement in formal French debate?

**A:** Il convient de nuancer cette affirmation. / Cette analyse mérite d'être approfondie. / Sans nier l'intérêt de cette thèse…

📖 C2 register: avoid blunt contradiction. Qualify, contextualise, then counter.
🇵🇰 رسمی بحث میں نرم اختلاف — C2 سطح کی زبان
