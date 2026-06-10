<style>
:root{--fc-primary:#4338ca;--fc-bg:#f8fafc;--fc-card:#fff;--fc-border:#e2e8f0;--fc-correct:#16a34a;--fc-wrong:#dc2626;}
#fc-app{font-family:system-ui,sans-serif;max-width:680px;margin:0 auto;padding:1rem;}
#fc-stats{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:1.2rem;}
.fc-stat{background:#fff;border:1px solid var(--fc-border);border-radius:10px;padding:10px 16px;font-size:13px;font-weight:700;color:#334155;}
.fc-stat span{font-size:22px;display:block;color:var(--fc-primary);}
#fc-section-picker{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:1.2rem;}
.fc-sec-btn{padding:6px 14px;border-radius:8px;border:2px solid var(--fc-border);background:#fff;font-size:12px;font-weight:700;cursor:pointer;color:#475569;transition:all .15s;}
.fc-sec-btn.active{background:var(--fc-primary);color:#fff;border-color:var(--fc-primary);}
#fc-card-wrap{perspective:900px;height:220px;margin-bottom:1rem;cursor:pointer;}
#fc-card{width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform .5s;}
#fc-card.flipped{transform:rotateY(180deg);}
.fc-face{position:absolute;inset:0;backface-visibility:hidden;border-radius:16px;display:flex;align-items:center;justify-content:center;padding:1.5rem;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,.08);}
.fc-front{background:linear-gradient(135deg,#4338ca,#7c3aed);color:#fff;}
.fc-back{background:#fff;border:2px solid var(--fc-border);transform:rotateY(180deg);color:#0f172a;flex-direction:column;gap:8px;}
#fc-q{font-size:1.2rem;font-weight:700;line-height:1.4;}
#fc-a-ur{font-family:'Noto Nastaliq Urdu',Georgia,serif;font-size:1.35rem;direction:rtl;line-height:2.2;color:#4338ca;}
#fc-a-tr{font-size:.95rem;color:#64748b;font-style:italic;}
#fc-a-en{font-size:.9rem;color:#334155;}
#fc-hint{font-size:.8rem;color:rgba(255,255,255,.7);margin-top:.5rem;}
#fc-controls{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:1rem;}
#fc-controls button{flex:1;min-width:120px;padding:.65rem;border-radius:10px;border:none;font-size:.9rem;font-weight:700;cursor:pointer;transition:background .15s;}
#fc-btn-wrong{background:#fee2e2;color:#dc2626;}#fc-btn-wrong:hover{background:#fecaca;}
#fc-btn-correct{background:#dcfce7;color:#16a34a;}#fc-btn-correct:hover{background:#bbf7d0;}
#fc-btn-skip{background:#f1f5f9;color:#64748b;}#fc-btn-skip:hover{background:#e2e8f0;}
#fc-btn-flip{background:var(--fc-primary);color:#fff;width:100%;padding:.7rem;border-radius:10px;border:none;font-size:.95rem;font-weight:700;cursor:pointer;margin-bottom:.5rem;}
#fc-progress-bar{height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;margin-bottom:1rem;}
#fc-progress-fill{height:100%;background:var(--fc-primary);border-radius:3px;transition:width .3s;}
#fc-empty{display:none;text-align:center;padding:2rem;color:#64748b;}
#fc-reset{margin-top:1rem;background:#f1f5f9;border:1px solid var(--fc-border);border-radius:8px;padding:8px 16px;cursor:pointer;font-size:.85rem;font-weight:600;color:#475569;}
</style>

# اردو Flashcards — Urdu Language Mastery

<div id="fc-app" markdown="0">
  <div id="fc-stats">
    <div class="fc-stat"><span id="st-total">0</span>Cards</div>
    <div class="fc-stat"><span id="st-remaining">0</span>Remaining</div>
    <div class="fc-stat" style="color:var(--fc-correct)"><span id="st-correct" style="color:var(--fc-correct)">0</span>Correct</div>
    <div class="fc-stat" style="color:var(--fc-wrong)"><span id="st-wrong" style="color:var(--fc-wrong)">0</span>Review</div>
  </div>
  <div id="fc-progress-bar"><div id="fc-progress-fill" style="width:0%"></div></div>
  <div id="fc-section-picker"></div>
  <div id="fc-card-wrap" onclick="fcFlip()">
    <div id="fc-card">
      <div class="fc-face fc-front"><div><div id="fc-q">Loading…</div><div id="fc-hint">Click to reveal answer</div></div></div>
      <div class="fc-face fc-back">
        <div id="fc-a-ur"></div>
        <div id="fc-a-tr"></div>
        <div id="fc-a-en"></div>
      </div>
    </div>
  </div>
  <button id="fc-btn-flip" onclick="fcFlip()">Flip Card</button>
  <div id="fc-controls">
    <button id="fc-btn-wrong" onclick="fcMark('wrong')">Need Review</button>
    <button id="fc-btn-skip" onclick="fcMark('skip')">Skip</button>
    <button id="fc-btn-correct" onclick="fcMark('correct')">Got It!</button>
  </div>
  <div id="fc-empty">All cards reviewed! <br><button id="fc-reset" onclick="fcReset()">Restart Session</button></div>
  <button id="fc-reset" onclick="fcReset()">Reset Progress</button>
</div>

<script>
const STORAGE_KEY='fc-progress-urdu';
const SECTIONS={
"اردو حروف تہجی اور تلفظ":[
{q:"What is the Urdu alphabet called?",ur:"حروفِ تہجی",tr:"Huruf-e-Tahajji",en:"The Urdu/Arabic alphabet — 39 letters in Urdu"},
{q:"How many letters does the Urdu alphabet have?",ur:"انتیس سے انتالیس",tr:"Untees se Untaalis",en:"Urdu has 39 letters (vs 28 in Arabic)"},
{q:"What is the first letter of the Urdu alphabet?",ur:"الف",tr:"Alif",en:"'Alif' — corresponds to 'a' sound"},
{q:"What are the three main vowel markers (harakat) in Urdu?",ur:"زبر، زیر، پیش",tr:"Zabar, Zer, Pesh",en:"Short vowels: a (ˉ), i (ˍ), u (ˈ)"},
{q:"What is the Urdu writing system called?",ur:"نستعلیق",tr:"Nastaliq",en:"A flowing right-to-left calligraphic script"},
{q:"Which Urdu letter makes a retroflex 't' sound?",ur:"ٹ",tr:"ṭa (retroflex T)",en:"ٹ — tongue curled back; distinct from ت (dental t)"},
{q:"What sound does خ make?",ur:"خ — خے",tr:"khe",en:"Guttural 'kh' — like Scottish 'loch'"},
{q:"What is the Urdu letter for the deep-throat 'q' sound?",ur:"ق",tr:"qaf",en:"Deep Arabic 'q' — قلم (qalam = pen)"},
{q:"What does ع sound like?",ur:"ع — عین",tr:"ain",en:"A guttural stop — Arabic ayin; عزت (izzat = respect)"},
{q:"What is the difference between ذ ز ض ظ?",ur:"چاروں کی آواز 'ز' ہے",tr:"All four sound like 'z' in modern Urdu",en:"Historical Arabic distinction lost in Urdu pronunciation"},
],
"بنیادی الفاظ":[
{q:"How do you say 'book' in Urdu?",ur:"کتاب",tr:"kitaab",en:"Feminine noun — کتاب اچھی ہے (the book is good)"},
{q:"What does پانی mean?",ur:"پانی",tr:"paani",en:"Water — masculine noun"},
{q:"How do you say 'house/home' in Urdu?",ur:"گھر",tr:"ghar",en:"Home — masculine noun — ghar mein (at home)"},
{q:"What does خوبصورت mean?",ur:"خوبصورت",tr:"khoobsurat",en:"Beautiful — adjective; agrees in gender"},
{q:"How do you say 'language' in Urdu?",ur:"زبان",tr:"zubaan",en:"Language — feminine noun — زبان سیکھنا (to learn a language)"},
{q:"What does دوست mean?",ur:"دوست",tr:"dost",en:"Friend — can be m. or f. depending on context"},
{q:"How do you say 'time' in Urdu?",ur:"وقت",tr:"waqt",en:"Time — masculine noun — وقت پر (on time)"},
{q:"What does کام mean?",ur:"کام",tr:"kaam",en:"Work / task — masculine noun"},
{q:"How do you say 'love' in Urdu?",ur:"محبت",tr:"mohabbat",en:"Love — feminine noun — Urdu's most poetic word"},
{q:"What does شکریہ mean?",ur:"شکریہ",tr:"shukriya",en:"Thank you — from Arabic shukr (gratitude)"},
{q:"How do you say 'please' in Urdu?",ur:"مہربانی / برائے کرم",tr:"meherbaani / baraaye karam",en:"Please — مہربانی is warmer, برائے کرم more formal"},
{q:"What does آج mean?",ur:"آج",tr:"aaj",en:"Today"},
{q:"How do you say 'yesterday'?",ur:"کل",tr:"kal",en:"'Kal' means both yesterday AND tomorrow — context determines"},
],
"گرامر کے اصول":[
{q:"What is the Urdu word for 'is' (singular)?",ur:"ہے",tr:"hai",en:"Present tense copula — وہ طالبِ علم ہے (He/she is a student)"},
{q:"What is the Urdu word for 'are' (plural)?",ur:"ہیں",tr:"hain",en:"Plural copula — وہ طالبِ علم ہیں (They are students / polite he/she)"},
{q:"What postposition marks the indirect object (to/for) in Urdu?",ur:"کو",tr:"ko",en:"Dative marker — مجھے/مجھ کو (to me), اسے (to him/her)"},
{q:"What postposition means 'in/inside' in Urdu?",ur:"میں",tr:"mein",en:"In/inside — گھر میں (in the house) — oblique form required"},
{q:"What postposition means 'on/upon' in Urdu?",ur:"پر",tr:"par",en:"On — میز پر (on the table)"},
{q:"What postposition means 'from/of' in Urdu?",ur:"سے",tr:"se",en:"From/with — گھر سے (from home), اس سے (with him/her)"},
{q:"What is the ergative marker in Urdu?",ur:"نے",tr:"ne",en:"Marks subject of transitive verb in past tense — اس نے کہا"},
{q:"How do you make a noun oblique (indirect) in Urdu?",ur:"ا → کا (m) / ی → کی (f)",tr:"a-ending → e; aa-ending → e for masculine oblique",en:"کمرہ → کمرے میں (in the room)"},
{q:"What is the infinitive form of a verb in Urdu?",ur:"فعل + نا",tr:"Verb stem + na",en:"کھانا (to eat), جانا (to go), لکھنا (to write)"},
{q:"How do you form a simple present tense sentence?",ur:"فاعل + فعل + ہوں/ہے/ہیں",tr:"Subject + verb stem + taa/ti/te + hoon/hai/hain",en:"میں جاتا ہوں (I go) — agree with subject gender"},
],
"روزمرہ گفتگو":[
{q:"How do you say 'Hello / Peace be upon you' in Urdu?",ur:"السلام علیکم",tr:"Assalamu Alaikum",en:"Standard Muslim greeting — response: وعلیکم السلام"},
{q:"How do you say 'How are you?' formally?",ur:"آپ کیسے ہیں؟",tr:"Aap kaise hain?",en:"Formal — use آپ for respect; response: بالکل ٹھیک ہوں"},
{q:"How do you say 'My name is...'?",ur:"میرا نام … ہے",tr:"Mera naam … hai",en:"میرا (m.) / میری (f.) — name is masculine so میرا نام"},
{q:"How do you say 'Where is the market?'",ur:"بازار کہاں ہے؟",tr:"Baazaar kahaan hai?",en:"Useful for navigation — کہاں = where"},
{q:"How do you ask 'How much does this cost?'",ur:"یہ کتنے کا ہے؟",tr:"Yeh kitne ka hai?",en:"کتنا/کتنی/کتنے = how much/many"},
{q:"How do you say 'I don't understand'?",ur:"مجھے سمجھ نہیں آیا",tr:"Mujhe samajh nahin aaya",en:"Literally: understanding did not come to me"},
{q:"How do you say 'Please speak slowly'?",ur:"آہستہ بولیں، مہربانی",tr:"Aahista bolein, meherbaani",en:"Polite imperative with meherbaani (please)"},
{q:"How do you say 'I am hungry'?",ur:"مجھے بھوک لگی ہے",tr:"Mujhe bhook lagi hai",en:"Hunger 'attaches' to you — not 'I am hungry' literally"},
{q:"How do you say 'Congratulations'?",ur:"مبارک ہو",tr:"Mubaarak ho",en:"Lit. may it be blessed — used for all celebrations"},
{q:"How do you say 'Goodbye'?",ur:"خدا حافظ / اللہ حافظ",tr:"Khuda Hafiz / Allah Hafiz",en:"May God be your protector — standard Pakistani farewell"},
],
"درمیانی گرامر":[
{q:"What does the compound verb + جانا add to meaning?",ur:"مکمل ہونا / ناقابلِ واپسی",tr:"Completion / irreversibility",en:"وہ مر گیا (He died — irrevocably); دل ٹوٹ گیا (heart broke)"},
{q:"What does + لینا add to a compound verb?",ur:"اپنے فائدے کے لیے",tr:"Action for one's own benefit",en:"میں نے کھانا کھا لیا (I ate — for myself, done deal)"},
{q:"What does + دینا add to a compound verb?",ur:"دوسرے کے فائدے کے لیے",tr:"Action for another's benefit",en:"مجھے بتا دو (Tell me — as a favor to me)"},
{q:"What is the ergative rule for past transitive verbs?",ur:"فاعل پر نے، فعل مفعول کے مطابق",tr:"Subject takes ne; verb agrees with object",en:"اس نے کتاب پڑھی (feminine object → پڑھی)"},
{q:"How do you form the present perfect in Urdu?",ur:"نے + فعل + ہے/ہیں",tr:"ne + verb + hai/hain",en:"میں نے کھانا کھایا ہے (I have eaten)"},
{q:"How do you form the past perfect?",ur:"نے + فعل + تھا/تھی",tr:"ne + verb + tha/thi",en:"میں نے کھایا تھا (I had eaten)"},
{q:"What is a direct causative verb?",ur:"فعل + انا",tr:"Verb stem + aana",en:"پڑھانا (to teach — cause to read); کھلانا (to feed)"},
{q:"What is کاش used for?",ur:"تمنا / آرزو",tr:"Kaash — I wish / if only",en:"Introduces wishful/irrealis: کاش وہ آتی (I wish she would come)"},
{q:"What postposition creates the oblique case trigger?",ur:"میں، پر، سے، کو",tr:"Mein, par, se, ko",en:"All postpositions require the preceding noun in oblique case"},
{q:"How do you say 'so that' (purpose clause)?",ur:"تاکہ",tr:"taake",en:"وہ جلدی آئے تاکہ وقت پر پہنچ سکے (He should come early so that he can arrive on time)"},
],
"کاروباری اردو":[
{q:"What is the formal Urdu opening for a business letter?",ur:"بسلسلہ مذکورہ بالا موضوع عرض ہے کہ",tr:"Ba-silsila mazkora baala mauzoo arz hai ke",en:"In connection with the aforementioned subject, it is humbly stated that…"},
{q:"What is the formal closing in a Urdu business letter?",ur:"آپ کا مخلص / والسلام",tr:"Aap ka mukhlis / wassalaam",en:"Sincerely yours / And peace (formal close)"},
{q:"How do you address a respected male formally?",ur:"محترم جناب / جناب صاحب",tr:"Mohtaram Janaab / Janaab Sahib",en:"Respected Sir — محترم for formal letters, جناب in speech"},
{q:"How do you address a respected female formally?",ur:"محترمہ",tr:"Mohtarima",en:"Respected Madam — used in letters and formal speech"},
{q:"What does گزارش ہے mean in a formal letter?",ur:"گزارش — درخواست",tr:"Guzaarish hai — it is humbly requested",en:"Polite Persian-Urdu formula for making requests"},
{q:"What is the Urdu word for 'ministry'?",ur:"وزارت",tr:"wazaarat",en:"e.g. وزارتِ تعلیم (Ministry of Education)"},
{q:"What is the Urdu for 'Supreme Court'?",ur:"عدالتِ عظمیٰ",tr:"Adaalat-e-Uzma",en:"Lit. the greatest court"},
{q:"What does باخبر ذرائع mean in a news report?",ur:"با خبر ذرائع",tr:"baakhabar zaraa'i'",en:"Informed sources — standard journalistic phrase"},
{q:"What is 'consensus' in formal Urdu?",ur:"اتفاقِ رائے",tr:"ittifaaq-e-raa'e",en:"Lit. agreement of opinion — used in meeting proceedings"},
{q:"What is the Urdu word for an 'affidavit'?",ur:"حلف نامہ",tr:"halaf-naama",en:"Sworn written statement — legal document"},
],
"شاعری اور محاورے":[
{q:"Who wrote 'ہزاروں خواہشیں ایسی'?",ur:"مرزا اسداللہ خان غالب",tr:"Mirza Asadullah Khan Ghalib",en:"1797–1869 — Delhi's greatest Urdu poet"},
{q:"What is the name for an Urdu poetry gathering?",ur:"مشاعرہ",tr:"Mushaira",en:"Formal event where poets recite; audience calls واہ واہ"},
{q:"What does واہ واہ mean?",ur:"واہ واہ — داد",tr:"Waah waah — bravo!",en:"Expression of admiration at a mushaira; equivalent to 'bravo!'"},
{q:"What is a تخلص?",ur:"شاعر کا قلمی نام",tr:"takhallus",en:"Poet's pen name — used in the مقطع (final couplet)"},
{q:"What does the proverb جہاں چاہ وہاں راہ mean?",ur:"جہاں ارادہ ہو وہاں راستہ نکل آتا ہے",tr:"Jahaan chaah wahaan raah",en:"Where there's a will, there's a way"},
{q:"What does نو دو گیارہ ہونا mean?",ur:"بھاگ جانا",tr:"Nau do gyaara hona",en:"To run away — idiom: nine two eleven (escape quickly)"},
{q:"What does آگ بگولہ ہونا mean?",ur:"سخت غصے میں آنا",tr:"Aag bagoola hona",en:"To become furious — lit. to become a whirlwind of fire"},
{q:"What does the proverb صبر کا پھل میٹھا ہوتا ہے mean?",ur:"صبر کا نتیجہ اچھا ہوتا ہے",tr:"Sabr ka phal meetha hota hai",en:"The fruit of patience is sweet / Good things come to those who wait"},
{q:"Which Faiz poem begins 'مجھ سے پہلی سی محبت'?",ur:"یہ فیض احمد فیض کی مشہور نظم ہے",tr:"Mujh se pehli si mohabbat miri mehboob na maang",en:"Do not ask for that earlier love — a political-romantic masterpiece"},
{q:"What is the مطلع in a ghazal?",ur:"غزل کا پہلا شعر",tr:"Matla' — opening couplet",en:"Both lines of the first couplet share the full rhyme pattern"},
],
"روانی اور مہارت":[
{q:"What are the three Urdu pronouns in ascending formality?",ur:"تو / تم / آپ",tr:"tu / tum / aap",en:"tu = intimate/rude; tum = familiar; aap = respectful/formal"},
{q:"Why is using تو with a stranger a social error?",ur:"بے عزتی سمجھا جاتا ہے",tr:"Considered disrespectful",en:"تو implies extreme familiarity OR contempt — always use آپ with strangers"},
{q:"What is the Urdu word for 'rhetoric/oratory'?",ur:"خطابت",tr:"khitaabat",en:"The art of public speaking — classical tradition in Urdu"},
{q:"What is the difference in word order between English and Urdu?",ur:"اردو میں فعل آخر میں آتا ہے",tr:"In Urdu, the verb comes last",en:"S-O-V vs English S-V-O: Main baazaar jaata hoon"},
{q:"What is the Urdu narrative phrase for 'once upon a time'?",ur:"ایک بار کی بات ہے کہ",tr:"Ek baar ki baat hai ke",en:"Standard storytelling opener"},
{q:"What does میرا موقف یہ ہے کہ mean?",ur:"میری رائے/دلیل",tr:"Mera mauqif yeh hai ke",en:"My position/stance is that… — debate opener"},
{q:"What is a تشبیہ in Urdu rhetoric?",ur:"مشابہت — جیسے",tr:"Tashbih — simile",en:"Simile: آواز چاندنی جیسی (voice like moonlight)"},
{q:"What is an استعارہ?",ur:"مجازی استعمال",tr:"Isti'aara — metaphor",en:"Metaphor: وہ علم کا سمندر ہے (He is an ocean of knowledge)"},
{q:"What are the 4 sections of a formal Urdu report?",ur:"خلاصہ، پسِ منظر، نتائج، سفارشات",tr:"Khulaasa, Pas-e-Manzar, Nataa'ij, Sifaarshaat",en:"Summary, Background, Findings, Recommendations"},
{q:"What is the C2 sign that you have truly mastered Urdu?",ur:"ناطق متکلمین آپ کو سیکھنے والا نہ سمجھیں",tr:"Native speakers respond to you as a speaker, not a learner",en:"The ultimate test — native acceptance of your Urdu"},
]
};

let state={deck:[],idx:0,correct:0,wrong:0,skipped:0,flipped:false,activeSection:'ALL',progress:{}};

function saveProgress(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify({correct:state.correct,wrong:state.wrong,skipped:state.skipped,progress:state.progress}));}catch(e){}}
function loadProgress(){try{const d=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');state.correct=d.correct||0;state.wrong=d.wrong||0;state.skipped=d.skipped||0;state.progress=d.progress||{};}catch(e){}}

function buildDeck(){
  const allCards=[];
  Object.entries(SECTIONS).forEach(([sec,cards])=>{
    if(state.activeSection==='ALL'||state.activeSection===sec){
      cards.forEach((c,i)=>allCards.push({...c,sec,id:sec+'_'+i}));
    }
  });
  state.deck=allCards.filter(c=>state.progress[c.id]!=='correct').sort(()=>Math.random()-.5);
  state.idx=0;
}

function renderCard(){
  const d=state.deck;
  if(state.idx>=d.length){
    document.getElementById('fc-card-wrap').style.display='none';
    document.getElementById('fc-btn-flip').style.display='none';
    document.getElementById('fc-controls').style.display='none';
    document.getElementById('fc-empty').style.display='block';
    return;
  }
  const c=d[state.idx];
  state.flipped=false;
  document.getElementById('fc-card').classList.remove('flipped');
  document.getElementById('fc-q').textContent=c.q;
  document.getElementById('fc-a-ur').textContent=c.ur;
  document.getElementById('fc-a-tr').textContent=c.tr;
  document.getElementById('fc-a-en').textContent=c.en;
  document.getElementById('fc-card-wrap').style.display='block';
  document.getElementById('fc-btn-flip').style.display='block';
  document.getElementById('fc-controls').style.display='flex';
  document.getElementById('fc-empty').style.display='none';
  updateStats();
}

function fcFlip(){
  state.flipped=!state.flipped;
  document.getElementById('fc-card').classList.toggle('flipped',state.flipped);
}

function fcMark(result){
  const c=state.deck[state.idx];
  if(result==='correct'){state.correct++;state.progress[c.id]='correct';}
  else if(result==='wrong'){state.wrong++;state.progress[c.id]='wrong';}
  else{state.skipped++;}
  saveProgress();
  state.idx++;
  renderCard();
}

function updateStats(){
  const total=state.deck.length+state.correct;
  document.getElementById('st-total').textContent=total;
  document.getElementById('st-remaining').textContent=state.deck.length-state.idx;
  document.getElementById('st-correct').textContent=state.correct;
  document.getElementById('st-wrong').textContent=state.wrong;
  const pct=total>0?Math.round((state.correct/total)*100):0;
  document.getElementById('fc-progress-fill').style.width=pct+'%';
}

function fcReset(){
  state.correct=0;state.wrong=0;state.skipped=0;state.progress={};
  saveProgress();
  buildDeck();
  renderCard();
}

function buildSectionPicker(){
  const picker=document.getElementById('fc-section-picker');
  picker.innerHTML='';
  const allBtn=document.createElement('button');
  allBtn.className='fc-sec-btn active';allBtn.textContent='All Sections';
  allBtn.onclick=()=>{state.activeSection='ALL';document.querySelectorAll('.fc-sec-btn').forEach(b=>b.classList.remove('active'));allBtn.classList.add('active');buildDeck();renderCard();};
  picker.appendChild(allBtn);
  Object.keys(SECTIONS).forEach(sec=>{
    const btn=document.createElement('button');
    btn.className='fc-sec-btn';btn.textContent=sec;
    btn.onclick=()=>{state.activeSection=sec;document.querySelectorAll('.fc-sec-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');buildDeck();renderCard();};
    picker.appendChild(btn);
  });
}

loadProgress();
buildSectionPicker();
buildDeck();
renderCard();
</script>
