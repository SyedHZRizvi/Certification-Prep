# Module 1 — اردو کی بنیادیں (Foundations)

<div class="lang-switcher" style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:1.25rem;margin:0 0 2rem;text-align:center;box-shadow:0 4px 16px rgba(99,102,241,0.3);">
  <p style="color:#e0e7ff;font-size:1rem;font-weight:600;margin:0 0 0.85rem;">🌐 Choose your learning language / اپنی زبان منتخب کریں</p>
  <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
    <button id="ls-btn-en" onclick="certHubSetLang('en')" style="padding:0.6rem 1.6rem;border-radius:9px;border:2px solid #818cf8;background:#fff;color:#4338ca;font-weight:700;font-size:0.95rem;cursor:pointer;">🇬🇧 English</button>
    <button id="ls-btn-ur" onclick="certHubSetLang('ur')" style="padding:0.6rem 1.6rem;border-radius:9px;border:2px solid #818cf8;background:#fff;color:#4338ca;font-weight:700;font-size:0.95rem;cursor:pointer;">🇵🇰 اردو (Urdu)</button>
  </div>
</div>
<script>
function certHubSetLang(l){try{localStorage.setItem('cert-hub-lang-pref',l);}catch(e){}document.querySelectorAll('.lang-en,.lang-ur').forEach(function(el){el.style.display='none';});document.querySelectorAll('.lang-'+l).forEach(function(el){el.style.display='block';});var be=document.getElementById('ls-btn-en'),bu=document.getElementById('ls-btn-ur');if(be&&bu){be.style.background=l==='en'?'#4338ca':'#fff';be.style.color=l==='en'?'#fff':'#4338ca';bu.style.background=l==='ur'?'#4338ca':'#fff';bu.style.color=l==='ur'?'#fff':'#4338ca';}}
(function(){var s='';try{s=localStorage.getItem('cert-hub-lang-pref')||'';}catch(e){}certHubSetLang(s||'en');})();
</script>

<div class="lang-en">

## Why Learn Urdu?

Urdu is one of the world's most poetic and expressive languages. With roughly **230 million speakers worldwide** — and Pakistan's 220+ million population — Urdu opens doors that few other languages can. Here is why native English speakers find it uniquely worthwhile:

### Cultural Reasons
Urdu is the language of some of the world's greatest poetry. The **ghazal** tradition — lyrical poems of love, longing, and philosophy — reaches its heights in Urdu. Poets like **Mirza Ghalib**, **Allama Iqbal**, and **Faiz Ahmed Faiz** wrote in a language so musical that even Urdu learners who cannot yet fully understand it are moved by its sound. Learning Urdu gives you access to this literary tradition in its original form.

Pakistani cinema, drama serials, and music are experiencing a global renaissance. Popular drama serials (like Humsafar, Zindagi Gulzar Hai, and Mere Humsafar) are watched across South Asia and by diaspora communities worldwide. Understanding them in their original Urdu rewards you with nuance that subtitles cannot capture.

### Professional Reasons
Pakistan is a country of 240 million people with a fast-growing tech sector, significant textile and manufacturing industries, and a large diaspora in the UK, USA, Canada, and Gulf countries. Speaking Urdu gives professionals a competitive edge in:
- Business dealings with Pakistani partners
- Working with Pakistani engineering, IT, or medical teams
- Development and NGO work in Pakistan and Afghanistan
- Diplomatic and intelligence careers in South Asia

### Spiritual and Religious Reasons
For Muslims of any background, Urdu provides access to an enormous body of Islamic scholarship, lectures (bayans), and devotional poetry (naats and qawwalis) that exists primarily in Urdu. Many of the world's most respected Islamic scholars — from Deoband to Barelvi traditions — taught and wrote in Urdu. Understanding their words in the original language has deep meaning.

### Family and Community Reasons
There are tens of millions of people of Pakistani and Indian heritage living in English-speaking countries. If you have a Pakistani partner, in-laws, or colleagues, learning Urdu is one of the most profound acts of connection you can make. Elders who code-switch into Urdu when discussing important matters will feel seen and respected when you understand.

---

## The Urdu Writing System: Nastaliq Script

Urdu is written in a script called **Nastaliq** (نستعلیق), which is itself a form of the **Perso-Arabic script**. Before you learn a single letter, there are three things to understand:

### 1. Nastaliq Is Calligraphy
Nastaliq is not simply a functional alphabet — it is considered one of the most beautiful calligraphic traditions in the world. The letters flow diagonally downward from right to left, creating an elegant cascading visual effect. When you see Urdu written by a skilled calligrapher (or even in good digital typography), you are looking at art.

The word **Nastaliq** itself comes from **Naskh** (a simpler Arabic script style) and **Ta'liq** (a Persian cursive style). Their combination produced Nastaliq in 15th-century Persia, and it was adopted as the primary script for Urdu poetry and literature.

### 2. Right to Left
Urdu is written and read from **right to left**. This is the single biggest practical adjustment for English speakers. Numbers, however, are written left to right (even within Urdu text). When you open a book, you open it from what an English reader would call "the back."

### 3. Letters Change Shape
Each Urdu letter has up to **four forms** depending on where it appears in a word:
- **Isolated** (alone)
- **Initial** (beginning of a word)
- **Medial** (middle of a word)
- **Final** (end of a word)

This is similar to how English cursive letters connect differently at the start or end of words, but more systematic.

---

## The Urdu Alphabet: 39 Letters

Urdu has **39 letters** in its standard alphabet (some sources count 36–40 depending on treatment of variant letters). They are all consonants or long vowels — short vowels are typically written as small marks above or below letters (called **diacritics** or **harakat**), which are usually omitted in everyday text. Beginners use fully vocalized text (with all marks) to learn pronunciation.

### The Urdu Alphabet (اردو حروفِ تہجی)

| # | Urdu Letter | Name | Transliteration | Approximate English Sound |
|---|-------------|------|-----------------|--------------------------|
| 1 | ا | الف (Alif) | a / ā | "a" as in "father" |
| 2 | ب | بے (Be) | b | "b" as in "boy" |
| 3 | پ | پے (Pe) | p | "p" as in "pen" |
| 4 | ت | تے (Te) | t | soft "t" (tongue behind teeth) |
| 5 | ٹ | ٹے (Ṭe) | ṭ | retroflex "t" (tongue curled back) |
| 6 | ث | ثے (Se) | s | "s" (same sound as سین) |
| 7 | ج | جیم (Jeem) | j | "j" as in "jam" |
| 8 | چ | چے (Che) | ch | "ch" as in "chair" |
| 9 | ح | حے (Ḥe) | h | breathy "h" from throat |
| 10 | خ | خے (Khe) | kh | like Scottish "loch" |
| 11 | د | دال (Dāl) | d | soft "d" (tongue behind teeth) |
| 12 | ڈ | ڈال (Ḍāl) | ḍ | retroflex "d" (tongue curled back) |
| 13 | ذ | ذال (Zāl) | z | "z" sound |
| 14 | ر | رے (Re) | r | rolled/flapped "r" |
| 15 | ڑ | ڑے (Ṛe) | ṛ | retroflex flap "r" |
| 16 | ز | زے (Ze) | z | "z" as in "zero" |
| 17 | ژ | ژے (Zhe) | zh | "zh" as in "measure" |
| 18 | س | سین (Seen) | s | "s" as in "sun" |
| 19 | ش | شین (Sheen) | sh | "sh" as in "show" |
| 20 | ص | صاد (Ṣād) | s | emphatic "s" (Arabic origin) |
| 21 | ض | ضاد (Ẓād) | z | emphatic "z" (Arabic origin) |
| 22 | ط | طوئے (Ṭo'e) | t | emphatic "t" (Arabic origin) |
| 23 | ظ | ظوئے (Ẓo'e) | z | emphatic "z" (Arabic origin) |
| 24 | ع | عین (Ain) | ' | glottal stop / deep throat sound |
| 25 | غ | غین (Ghain) | gh | gargled "r" (French "r") |
| 26 | ف | فے (Fe) | f | "f" as in "fun" |
| 27 | ق | قاف (Qāf) | q | deep "k" from back of throat |
| 28 | ک | کاف (Kāf) | k | "k" as in "king" |
| 29 | گ | گاف (Gāf) | g | "g" as in "go" |
| 30 | ل | لام (Lām) | l | "l" as in "love" |
| 31 | م | میم (Meem) | m | "m" as in "moon" |
| 32 | ن | نون (Noon) | n | "n" as in "noon" |
| 33 | ں | نونِ غنّہ (Noon Ghunna) | ñ | nasalized vowel marker |
| 34 | و | واؤ (Wāo) | w / v / ū | "w", "v", or long "oo" |
| 35 | ہ | ہے (He) | h | "h" as in "hello" |
| 36 | ھ | دو چشمی ہے (Do Chashmi He) | h | aspirated consonant marker |
| 37 | ء | ہمزہ (Hamza) | ' | glottal stop |
| 38 | ی | یے (Ye) | y / ī | "y" as in "yes" or long "ee" |
| 39 | ے | بڑی یے (Baṛī Ye) | e / ai | "e" as in "egg" or "ai" |

### Key Sounds for English Speakers to Master

**Retroflex consonants** (ٹ، ڈ، ڑ، ن): These are sounds made with the tongue curled back against the roof of the mouth. English has no equivalent — listen carefully to native speakers.

**Aspirated consonants** (formed with ھ): بھ، پھ، تھ، ڈھ، کھ، گھ are consonants followed by a puff of air. Think of "p" in "pot" (aspirated) vs "p" in "spot" (unaspirated).

**Velar and uvular sounds** (خ، غ، ق، ع): These are produced deep in the throat and do not exist in standard English. خ (kh) is like clearing your throat gently. غ (gh) is its voiced equivalent.

---

## Right-to-Left Writing: Adapting Your Mindset

For English speakers, right-to-left writing requires a mental shift, but most people adapt surprisingly quickly. Here are practical tips:

1. **Start with tracing**: Before writing letters, trace printed Urdu text with your finger to feel the direction and flow.
2. **Think of it as reading the page backward**: Your eyes start at the right margin and move left across each line.
3. **Numbers go left-to-right**: Even in Urdu text, numbers are written in the same direction as English. So "کمرہ نمبر 5" (Room number 5) has the 5 on the right side of the text but left-to-right numerically.
4. **Books open from the right**: An Urdu book's "front cover" is what an English reader would call the back. Chapter 1 is at what feels like the end.
5. **Digital input**: On phones and computers, enable Urdu keyboard input. On iOS/Android, go to Settings > Keyboard/Language and add Urdu. Text will automatically flow right-to-left.

---

## The Perso-Arabic Connection

Approximately **60% of Urdu vocabulary** derives from Persian and Arabic. This is the single most important fact about Urdu vocabulary for beginners. Understanding why helps you learn faster:

### Historical Background
Urdu developed in the Mughal Empire (16th–19th centuries) as a **contact language** between Persian-speaking Mughal rulers, Arabic-educated Islamic scholars, and local Indian populations speaking various languages. The name "Urdu" itself comes from the Turkic phrase **"Zabān-e-Urdū"** (زبانِ اردو) meaning "Language of the Camp" — urdu being a Turkic word for military camp (the same root as the English "horde").

### What This Means for Learners
- If you know any Arabic or Farsi, you will recognize thousands of Urdu words immediately.
- Many Urdu words related to religion, philosophy, government, and formal discourse come from Arabic: **کتاب** (kitaab — book), **وقت** (waqt — time), **دنیا** (duniya — world), **مسجد** (masjid — mosque).
- Persian words dominate Urdu poetry and courtly language: **دل** (dil — heart), **آنکھ** (aankh — eye), **عشق** (ishq — love), **باغ** (baagh — garden).
- The remaining 40% of Urdu vocabulary comes from **Sanskrit** (through Hindi/Prakrit), **Turkic**, and English loanwords.

### Formal vs Colloquial Urdu
Formal written Urdu uses more Persian/Arabic vocabulary. Colloquial spoken Urdu (especially among younger Pakistanis) mixes in many English words: **موبائل** (mobile), **انٹرنیٹ** (internet), **آفس** (office). Do not be surprised to hear sentences like: "میں آفس جا رہا ہوں" (I am going to the office) where آفس is simply English "office" written in Urdu script.

---

## Urdu vs Hindi: Same Language, Different Scripts

This is one of the most discussed linguistic questions in South Asia. The honest answer is:

**Spoken Urdu and spoken Hindi are mutually intelligible at the colloquial level.** A Pakistani and an Indian can have a basic conversation with little difficulty. The differences increase as formality increases.

| Feature | Urdu | Hindi |
|---------|------|-------|
| Script | Nastaliq (Perso-Arabic) | Devanagari |
| Formal vocabulary | Persian/Arabic-based | Sanskrit-based |
| Associated with | Pakistan, Muslims | India, Hindus |
| Spoken base | Shared (Hindustani) | Shared (Hindustani) |
| Example: "water" | پانی (pānī) | पानी (pānī) |
| Example: "time" | وقت (waqt) [Arabic] | समय (samay) [Sanskrit] |
| Example: "language" | زبان (zabān) [Persian] | भाषा (bhāṣā) [Sanskrit] |

For this course, you are learning **Pakistani standard Urdu** — which means the Urdu used in Pakistan's media, education, and formal communication. This uses more Persian/Arabic vocabulary in formal contexts and is written exclusively in Nastaliq script.

---

## Numbers 1–20 in Urdu

Urdu has its own numeral system (Eastern Arabic numerals) as well as Western Arabic numerals (the ones English uses). Both are used in Pakistan. The script numerals are shown below alongside the words.

| Western | Urdu Numeral | Word | Transliteration |
|---------|-------------|------|-----------------|
| 1 | ۱ | ایک | ek |
| 2 | ۲ | دو | do |
| 3 | ۳ | تین | teen |
| 4 | ۴ | چار | chaar |
| 5 | ۵ | پانچ | paanch |
| 6 | ۶ | چھ | chhe |
| 7 | ۷ | سات | saat |
| 8 | ۸ | آٹھ | aath |
| 9 | ۹ | نو | nau |
| 10 | ۱۰ | دس | das |
| 11 | ۱۱ | گیارہ | gyaarah |
| 12 | ۱۲ | بارہ | baarah |
| 13 | ۱۳ | تیرہ | tairah |
| 14 | ۱۴ | چودہ | chaudah |
| 15 | ۱۵ | پندرہ | pandrah |
| 16 | ۱۶ | سولہ | solah |
| 17 | ۱۷ | سترہ | satrah |
| 18 | ۱۸ | اٹھارہ | atharah |
| 19 | ۱۹ | انیس | unees |
| 20 | ۲۰ | بیس | bees |

**Pronunciation tip**: Urdu numbers above 20 are formed differently from English. For example, 21 is "اکیس" (ik-ees), which sounds like "one-twenty" rather than "twenty-one." This reverse-compounding is a feature you will encounter as you advance.

---

## Basic Greetings

These are the phrases you will use from Day 1. Every interaction in Pakistani society begins with greeting, and using the right greeting immediately marks you as culturally literate.

### السلام علیکم (As-salamu alaykum)
**Meaning**: "Peace be upon you"
**Response**: وعلیکم السلام (Wa alaykum as-salam) — "And upon you peace"
**Usage**: The universal greeting among Muslims. Used morning, afternoon, and evening. When you enter a Pakistani home or meeting, this is the expected greeting. Using it as a non-Muslim is considered respectful, not inappropriate.

### آداب (Adaab)
**Transliteration**: Adaab
**Meaning**: Literally "manners/etiquette" — a secular, poetic greeting
**Gesture**: Often accompanied by touching your hand to your forehead and slightly bowing.
**Usage**: More common in formal, literary, or older/courtly contexts. You will hear it in old films and from older generations. Considered very refined.

### جی (Ji)
**Transliteration**: Ji
**Meaning**: Yes / a respectful acknowledgment
**Usage**: Enormously versatile. It means "yes," but also functions as "I'm listening," "understood," "please go ahead," "excuse me?" (when you didn't hear), and even just as a respectful filler. Adding جی to the end of a sentence makes it polite: "شکریہ جی" (Thank you, ji).

### شکریہ (Shukriya)
**Transliteration**: Shukriya
**Meaning**: Thank you
**Emphatic form**: بہت شکریہ (Bahut shukriya) — Thank you very much
**Note**: Comes from Persian شکر (shukr) meaning gratitude. In very formal contexts you may also hear "ممنون" (mamnoon) which is a more literary "thank you."

### خوش آمدید (Khush Aamdeed)
**Meaning**: Welcome
**Usage**: Said to welcome someone into a home, city, or gathering. Literally means "you came happily" in Persian.

### اللہ حافظ / خدا حافظ (Allah Hafiz / Khuda Hafiz)
**Meaning**: Goodbye (literally "May God protect you")
**Note**: "اللہ حافظ" (Allah Hafiz) is the Pakistani Islamic form. "خدا حافظ" (Khuda Hafiz) uses the Persian word for God (Khuda) and was historically more common. Both are used.

---

## Honorific Culture: آپ، تم، تو

One of the most important cultural and grammatical features of Urdu is its three-tier pronoun system for "you." Using the wrong tier is a social mistake — getting it right shows genuine cultural competence.

### آپ (Aap) — Formal You
- Used for: elders, strangers, teachers, bosses, in-laws, anyone you wish to show respect to
- Verb conjugation: always plural forms
- **Default**: When in doubt, use آپ. You will never offend anyone by being too formal.
- Example: "آپ کا نام کیا ہے؟" (Aap ka naam kya hai?) — What is your name?

### تم (Tum) — Familiar You
- Used for: friends of similar age, younger siblings, close colleagues, people you know well
- Verb conjugation: second-person plural forms
- **Caution**: Do not use with elders or strangers — it can come across as disrespectful.
- Example: "تم کہاں ہو؟" (Tum kahaan ho?) — Where are you?

### تو (Tu) — Intimate/Diminutive You
- Used for: very close friends (intimate use), small children, and in poetry/prayer (addressing God with deep intimacy)
- Verb conjugation: second-person singular forms
- **Important**: Using تو with someone who expects آپ is a serious social slight. However, in religious poetry and prayer, addressing God as تو is considered the ultimate intimacy and devotion.
- Example: "تو کہاں ہے؟" (Tu kahaan hai?) — Where are you? (intimate/poetic)

| Pronoun | Register | English Equivalent | Use With |
|---------|----------|-------------------|----------|
| آپ | Formal | You (honorific) | Elders, strangers, respected persons |
| تم | Familiar | You | Friends, peers, younger people |
| تو | Intimate | Thou | Very close relationships, children, poetry |

---

## 50 Essential First Words

| Urdu Script | Transliteration | Pronunciation Guide | English |
|-------------|-----------------|---------------------|---------|
| ہاں | haan | haan (nasal n) | Yes |
| نہیں | nahin | na-HEEN | No / Not |
| جی | ji | jee | Yes (respectful) / Ji |
| شکریہ | shukriya | shuk-REE-ya | Thank you |
| معاف کریں | maaf karein | maaf ka-RAIN | Excuse me / Sorry |
| براہ کرم | baraah karam | ba-RAH ka-RAM | Please |
| ٹھیک ہے | theek hai | theek HAI | OK / Fine |
| اچھا | achha | ACH-ha | Good / I see |
| بہت | bahut | ba-HUT | Very / Much |
| کم | kam | kum | Less / Few |
| زیادہ | zyaada | zee-YAA-da | More / A lot |
| پانی | paani | PAA-nee | Water |
| کھانا | khaana | KHAA-na | Food / To eat |
| گھر | ghar | ghar (guttural r) | Home / House |
| آدمی | aadmi | AAD-mee | Man / Person |
| عورت | aurat | AU-rat | Woman |
| بچہ | bachcha | BACH-cha | Child |
| دوست | dost | dost | Friend |
| بھائی | bhai | b-HYE | Brother |
| بہن | behen | ba-HEN | Sister |
| ماں | maan | maan | Mother |
| باپ / ابو | baap / abu | baap / a-BOO | Father |
| نام | naam | naam | Name |
| وقت | waqt | waqt | Time |
| دن | din | din | Day |
| رات | raat | raat | Night |
| کل | kal | kul | Yesterday / Tomorrow |
| آج | aaj | aaj | Today |
| ابھی | abhi | ab-HEE | Right now / Just now |
| یہاں | yahaan | ya-HAAN | Here |
| وہاں | wahaan | wa-HAAN | There |
| کیا | kya | kyaa | What / (question marker) |
| کون | kaun | kaun | Who |
| کہاں | kahaan | ka-HAAN | Where |
| کب | kab | kub | When |
| کیوں | kyun | kyoon | Why |
| کیسے | kaise | KAI-say | How |
| کتنا | kitna | KIT-na | How much / How many |
| کمرہ | kamra | KAM-ra | Room |
| راستہ | raasta | RAAS-ta | Road / Way |
| بازار | baazaar | baa-ZAAR | Market / Bazaar |
| مسجد | masjid | MAS-jid | Mosque |
| اسپتال | aspataal | as-pa-TAAL | Hospital |
| ٹیکسی | taxi | TAK-see | Taxi |
| پیسہ | paisa | PAI-sa | Money / Coin |
| روپیہ | rupiya | roo-PEE-ya | Rupee (currency) |
| محبت | mohabbat | mo-HAB-bat | Love |
| خوبصورت | khubsoorat | khub-SOO-rat | Beautiful |
| خوش | khush | khush | Happy |
| تھکا | thaka | THA-ka | Tired |

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.1rem;">

## اردو کیوں سیکھیں؟

اردو دنیا کی سب سے شاعرانہ اور پراثر زبانوں میں سے ایک ہے۔ دنیا بھر میں تقریباً **تیئیس کروڑ بولنے والوں** کے ساتھ — اور پاکستان کی بائیس کروڑ سے زیادہ آبادی — اردو ایسے دروازے کھولتی ہے جو شاید کوئی اور زبان نہ کھول سکے۔

### ثقافتی وجوہات
اردو دنیا کی عظیم ترین شاعری کی زبان ہے۔ **غزل** کی روایت — محبت، درد اور فلسفے کی گیتی نظمیں — اردو میں اپنے عروج پر ہے۔ **مرزا غالب**، **علامہ اقبال**، اور **فیض احمد فیض** جیسے شعرا نے ایسی زبان میں لکھا جو اتنی موسیقی سے بھری ہے کہ جو ابھی اردو سیکھنا شروع ہی کر رہے ہیں وہ بھی اس کی آواز سے متاثر ہو جاتے ہیں۔

پاکستانی سینما، ڈرامہ سیریل، اور موسیقی عالمی سطح پر مقبول ہو رہے ہیں۔ مشہور ڈرامہ سیریلز (جیسے ہم سفر، زندگی گلزار ہے، اور میرے ہم سفر) پوری دنیا میں دیکھے جاتے ہیں۔

### پیشہ ورانہ وجوہات
پاکستان میں تیزی سے بڑھتا ہوا ٹیکنالوجی شعبہ ہے، اور برطانیہ، امریکہ، کینیڈا اور خلیجی ممالک میں بڑی تعداد میں پاکستانی پیشہ ور موجود ہیں۔ اردو بولنا آپ کو مسابقتی برتری دیتا ہے۔

### خاندانی وجوہات
اگر آپ کا پاکستانی ساتھی، سسرال، یا ساتھی کارکن ہیں، تو اردو سیکھنا محبت اور احترام کا ایک گہرا اظہار ہے۔

---

## اردو رسم الخط: نستعلیق

اردو **نستعلیق** رسم الخط میں لکھی جاتی ہے جو فارسی-عربی خط کی ایک شکل ہے۔ شروع کرنے سے پہلے تین باتیں جاننا ضروری ہیں:

**پہلی بات**: نستعلیق محض ایک حروفِ تہجی نہیں — یہ خطاطی کی عظیم روایت ہے۔ حروف دائیں سے بائیں اور اوپر سے نیچے کی طرف بہتے ہیں، جو ایک خوبصورت بصری اثر پیدا کرتا ہے۔

**دوسری بات**: اردو **دائیں سے بائیں** لکھی اور پڑھی جاتی ہے۔ یہ انگریزی بولنے والوں کے لیے سب سے بڑی عملی تبدیلی ہے۔

**تیسری بات**: ہر اردو حرف لفظ میں اپنی جگہ کے مطابق شکل بدلتا ہے — الگ (isolated)، شروع میں (initial)، درمیان میں (medial)، یا آخر میں (final)۔

---

## حروفِ تہجی

اردو میں **انتالیس حروف** ہیں۔ یہ سب حروفِ علت (vowels) یا حروفِ صحیح (consonants) ہیں — مختصر اعراب عموماً روزمرہ تحریر میں نہیں لکھے جاتے۔

| نمبر | حرف | نام | تلفظ |
|------|-----|-----|-------|
| ۱ | ا | الف | "a" جیسے "father" میں |
| ۲ | ب | بے | "b" جیسے "boy" میں |
| ۳ | پ | پے | "p" جیسے "pen" میں |
| ۴ | ت | تے | نرم "t" (زبان دانتوں کے پیچھے) |
| ۵ | ٹ | ٹے | لوٹا ہوا "ٹ" (زبان اندر کی طرف مڑی) |
| ۶ | ث | ثے | "s" کی آواز |
| ۷ | ج | جیم | "j" جیسے "jam" میں |
| ۸ | چ | چے | "ch" جیسے "chair" میں |
| ۹ | ح | حے | گلے سے نکلنے والی "h" |
| ۱۰ | خ | خے | "kh" جیسے اسکاٹش "loch" میں |

---

## دائیں سے بائیں لکھنے کی عادت ڈالنا

انگریزی بولنے والوں کے لیے چند عملی مشورے:

۱۔ **لکھنے سے پہلے نقل کریں**: اردو متن پر انگلی پھیریں تاکہ سمت اور بہاؤ محسوس ہو۔
۲۔ **صفحہ الٹا ہے**: اردو کتاب کا "سرورق" انگریزی پڑھنے والے کی نظر سے پچھلا حصہ ہوتا ہے۔
۳۔ **اعداد بائیں سے دائیں**: اردو متن میں بھی اعداد بائیں سے دائیں لکھے جاتے ہیں۔
۴۔ **ڈیجیٹل ٹائپنگ**: موبائل اور کمپیوٹر میں اردو کی بورڈ ترتیب دیں۔

---

## فارسی-عربی تعلق

اردو ذخیرہ الفاظ کا تقریباً **ساٹھ فیصد** فارسی اور عربی سے ماخوذ ہے۔ اردو کا نام خود ترکی لفظ **"زبانِ اردو"** (لشکر کی زبان) سے آیا ہے۔

مذہب، فلسفے اور حکومت سے متعلق الفاظ عربی سے آئے ہیں: **کتاب**، **وقت**، **دنیا**، **مسجد**۔ شاعری اور دربار کی زبان فارسی سے آئی ہے: **دل**، **آنکھ**، **عشق**، **باغ**۔

---

## اردو بمقابلہ ہندی

| خصوصیت | اردو | ہندی |
|--------|------|------|
| رسم الخط | نستعلیق (فارسی-عربی) | دیوناگری |
| رسمی ذخیرہ الفاظ | فارسی-عربی بنیاد | سنسکرت بنیاد |
| تعلق | پاکستان، مسلمان | بھارت، ہندو |
| بولی ہوئی زبان | مشترک (ہندوستانی) | مشترک (ہندوستانی) |

---

## گنتی ۱ سے ۲۰ تک

| انگریزی | اردو عدد | لفظ | تلفظ |
|---------|---------|-----|-------|
| 1 | ۱ | ایک | ek |
| 2 | ۲ | دو | do |
| 3 | ۳ | تین | teen |
| 4 | ۴ | چار | chaar |
| 5 | ۵ | پانچ | paanch |
| 6 | ۶ | چھ | chhe |
| 7 | ۷ | سات | saat |
| 8 | ۸ | آٹھ | aath |
| 9 | ۹ | نو | nau |
| 10 | ۱۰ | دس | das |
| 11 | ۱۱ | گیارہ | gyaarah |
| 12 | ۱۲ | بارہ | baarah |
| 13 | ۱۳ | تیرہ | tairah |
| 14 | ۱۴ | چودہ | chaudah |
| 15 | ۱۵ | پندرہ | pandrah |
| 16 | ۱۶ | سولہ | solah |
| 17 | ۱۷ | سترہ | satrah |
| 18 | ۱۸ | اٹھارہ | atharah |
| 19 | ۱۹ | انیس | unees |
| 20 | ۲۰ | بیس | bees |

---

## بنیادی سلام دعا

### السلام علیکم
**معنی**: "آپ پر سلامتی ہو"
**جواب**: وعلیکم السلام
**استعمال**: مسلمانوں کے درمیان عالمگیر سلام۔ صبح، دوپہر، شام — ہر وقت استعمال ہوتا ہے۔

### آداب
**تلفظ**: آداب
**معنی**: ادب و احترام کا اظہار
**استعمال**: رسمی، ادبی یا پرانے انداز میں۔ بہت شائستہ انداز۔

### جی
**معنی**: ہاں / احترام کے ساتھ اقرار
**استعمال**: انتہائی متنوع — "ہاں"، "سن رہا/رہی ہوں"، "سمجھ گیا/گئی"، یا "معاف کیجیے؟" (جب سنائی نہ دے) کے معنوں میں بھی آتا ہے۔

### شکریہ
**تلفظ**: شکریہ
**معنی**: شکریہ (Thank you)
**زیادہ تاکید کے ساتھ**: بہت شکریہ

### خوش آمدید
**معنی**: خوش آمدید (فارسی میں "آپ خوشی سے آئے" کے معنی)

### اللہ حافظ / خدا حافظ
**معنی**: خدا حافظ (اللہ آپ کا حافظ ہو)

---

## اعزازی ضمیر: آپ، تم، تو

اردو میں "آپ" کا استعمال ایک انتہائی اہم ثقافتی اور گرامری موضوع ہے۔

| ضمیر | رجسٹر | انگریزی متبادل | کس کے ساتھ |
|------|--------|----------------|------------|
| آپ | رسمی | You (عزت کے ساتھ) | بزرگ، اجنبی، قابلِ احترام |
| تم | غیر رسمی | You | دوست، ہم عمر، چھوٹے |
| تو | قریبی / شاعرانہ | Thou | بہت قریبی تعلق، بچے، شاعری |

**اہم ہدایت**: جب شک ہو تو **آپ** استعمال کریں۔ ضرورت سے زیادہ رسمی ہونے سے کوئی ناراض نہیں ہوتا، لیکن "تم" یا "تو" کا غلط استعمال بے ادبی سمجھا جاتا ہے۔

---

## پچاس ضروری الفاظ

| اردو | تلفظ | انگریزی |
|------|-------|---------|
| ہاں | haan | ہاں (Yes) |
| نہیں | nahin | نہیں (No) |
| جی | ji | جی (Yes/respectful) |
| شکریہ | shukriya | شکریہ (Thank you) |
| معاف کریں | maaf karein | معاف کریں (Excuse me) |
| براہ کرم | baraah karam | مہربانی کریں (Please) |
| ٹھیک ہے | theek hai | ٹھیک ہے (OK) |
| اچھا | achha | اچھا (Good/I see) |
| بہت | bahut | بہت (Very) |
| کم | kam | کم (Less) |
| زیادہ | zyaada | زیادہ (More) |
| پانی | paani | پانی (Water) |
| کھانا | khaana | کھانا (Food) |
| گھر | ghar | گھر (Home) |
| آدمی | aadmi | آدمی (Man) |
| عورت | aurat | عورت (Woman) |
| بچہ | bachcha | بچہ (Child) |
| دوست | dost | دوست (Friend) |
| بھائی | bhai | بھائی (Brother) |
| بہن | behen | بہن (Sister) |
| ماں | maan | ماں (Mother) |
| باپ / ابو | baap / abu | باپ (Father) |
| نام | naam | نام (Name) |
| وقت | waqt | وقت (Time) |
| دن | din | دن (Day) |
| رات | raat | رات (Night) |
| کل | kal | کل (Yesterday/Tomorrow) |
| آج | aaj | آج (Today) |
| ابھی | abhi | ابھی (Right now) |
| یہاں | yahaan | یہاں (Here) |
| وہاں | wahaan | وہاں (There) |
| کیا | kya | کیا (What) |
| کون | kaun | کون (Who) |
| کہاں | kahaan | کہاں (Where) |
| کب | kab | کب (When) |
| کیوں | kyun | کیوں (Why) |
| کیسے | kaise | کیسے (How) |
| کتنا | kitna | کتنا (How much) |
| کمرہ | kamra | کمرہ (Room) |
| راستہ | raasta | راستہ (Road/Way) |
| بازار | baazaar | بازار (Market) |
| مسجد | masjid | مسجد (Mosque) |
| اسپتال | aspataal | اسپتال (Hospital) |
| ٹیکسی | taxi | ٹیکسی (Taxi) |
| پیسہ | paisa | پیسہ (Money) |
| روپیہ | rupiya | روپیہ (Rupee) |
| محبت | mohabbat | محبت (Love) |
| خوبصورت | khubsoorat | خوبصورت (Beautiful) |
| خوش | khush | خوش (Happy) |
| تھکا | thaka | تھکا (Tired) |

</div>
