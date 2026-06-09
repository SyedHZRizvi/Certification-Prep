<div class="lang-switcher" markdown="0" style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:1.25rem;margin:0 0 2rem;text-align:center;box-shadow:0 4px 16px rgba(99,102,241,0.3);">
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

<div class="lang-en" markdown="1">

# Module 1 — أساسيات اللغة العربية (Foundations)

## Why Learn Arabic?

Arabic is not just a language — it is a gateway to one of the world's great civilisations. Here is why learning Arabic is one of the most rewarding linguistic investments you can make:

- **Scale:** Arabic is spoken by over **160 million native speakers** and understood by hundreds of millions more across 22 countries in the Middle East and North Africa.
- **The Quran:** The Quran was revealed in Arabic. For the 1.8 billion Muslims worldwide, reading and understanding Quranic Arabic is a profound spiritual goal. Modern Standard Arabic (MSA) is directly rooted in Classical Quranic Arabic.
- **Business:** The Arab world sits atop the world's largest oil reserves and is a growing hub for finance (Dubai, Abu Dhabi, Riyadh), logistics, and tech. Arabic fluency opens doors in the Gulf Cooperation Council (GCC) economies.
- **Culture and Literature:** Arabic gave the world algebra, algorithms, and the tales of *One Thousand and One Nights*. Arabic poetry, philosophy, and science shaped the Renaissance.
- **Diplomacy:** Arabic is one of the six official languages of the United Nations. Proficiency provides strategic value in diplomacy, intelligence, and international development.

---

## Key Insight for Urdu Speakers: You Already Know Hundreds of Arabic Words!

> **This is the single biggest advantage Urdu speakers have over English speakers when learning Arabic.**

Urdu has borrowed more than **30% of its vocabulary** from Arabic. This means you already have a massive head start. Many words you use every day in Urdu are pure Arabic words:

| Arabic | Urdu | English |
|--------|------|---------|
| كِتَاب | کتاب | book |
| عِلْم | علم | knowledge |
| وَقْت | وقت | time |
| دُنْيَا | دنیا | world |
| آدَم | آدمی | human / man |
| اَللّٰه | اللہ | God |
| مُسْلِم | مسلمان | Muslim |
| صَبْر | صبر | patience |
| خُوش | خوش | happy |
| دِل | دل | heart |
| فِكْر | فکر | thought / worry |
| سَفَر | سفر | journey |
| خَبَر | خبر | news |
| اِمْتِحَان | امتحان | exam |
| زِنْدَگِي | زندگی | life |

We will see many more cognates throughout this course. Whenever you spot one, it reinforces both languages simultaneously.

---

## The Arabic Alphabet (الأبجدية العربية)

Arabic uses a script of **28 letters**, written and read **right to left** — the same direction as Urdu. If you read Urdu, your brain is already trained for RTL reading, which gives you a huge advantage over English speakers.

### Key Features of Arabic Script

1. **Connected script:** Most Arabic letters connect to the next letter, like cursive writing.
2. **Four forms per letter:** Each letter changes shape depending on its position in a word:
   - **Isolated** (alone)
   - **Initial** (beginning of a word)
   - **Medial** (middle of a word)
   - **Final** (end of a word)

3. **No capital letters** in Arabic.
4. **Vowels are usually not written** in everyday text — they must be inferred from context (this is how Urdu nastaleeq works for many words too).

### The 28 Arabic Letters — All Four Forms

| Letter Name | Isolated | Initial | Medial | Final | Sound |
|-------------|----------|---------|--------|-------|-------|
| Alif | ا | ا | ـا | ـا | aa / glottal stop |
| Baa | ب | بـ | ـبـ | ـب | b |
| Taa | ت | تـ | ـتـ | ـت | t |
| Thaa | ث | ثـ | ـثـ | ـث | th (as in "thing") |
| Jiim | ج | جـ | ـجـ | ـج | j |
| Haa | ح | حـ | ـحـ | ـح | deep h (from throat) |
| Khaa | خ | خـ | ـخـ | ـخ | kh (as in Urdu خ) |
| Daal | د | د | ـد | ـد | d |
| Dhaal | ذ | ذ | ـذ | ـذ | dh (as in "the") |
| Raa | ر | ر | ـر | ـر | r (rolled) |
| Zayn | ز | ز | ـز | ـز | z |
| Siin | س | سـ | ـسـ | ـس | s |
| Shiin | ش | شـ | ـشـ | ـش | sh |
| Saad | ص | صـ | ـصـ | ـص | emphatic s |
| Daad | ض | ضـ | ـضـ | ـض | emphatic d |
| Taa (emphatic) | ط | طـ | ـطـ | ـط | emphatic t |
| Dhaa (emphatic) | ظ | ظـ | ـظـ | ـظ | emphatic dh |
| ʿAyn | ع | عـ | ـعـ | ـع | voiced pharyngeal |
| Ghayn | غ | غـ | ـغـ | ـغ | gh (like French r) |
| Faa | ف | فـ | ـفـ | ـف | f |
| Qaaf | ق | قـ | ـقـ | ـق | deep q (from back of throat) |
| Kaaf | ك | كـ | ـكـ | ـك | k |
| Laam | ل | لـ | ـلـ | ـل | l |
| Miim | م | مـ | ـمـ | ـم | m |
| Nuun | ن | نـ | ـنـ | ـن | n |
| Haa (light) | ه | هـ | ـهـ | ـه | h (light) |
| Waaw | و | و | ـو | ـو | w / oo |
| Yaa | ي | يـ | ـيـ | ـي | y / ee |

> **Note:** Letters marked with a dot below/above the table (د، ذ، ر، ز، و، ا) do **not** connect to the following letter. These are called **non-connecting letters**.

---

## Arabic Sounds Unique to Arabic (and Familiar to Urdu Speakers)

Several Arabic sounds are unfamiliar to English speakers but **already exist in Urdu**:

| Letter | Sound | Arabic Example | Urdu Equivalent |
|--------|-------|----------------|-----------------|
| ع | Deep voiced sound from the pharynx | عَرَبِي (Arabic) | عالم (scholar) |
| غ | Like a gargled "r" (French r) | غَرِيب (strange) | غصہ (anger) |
| خ | Breathy "kh" | خَبَر (news) | خبر (news) ✓ |
| ح | Breathy "h" from the throat | حَمْد (praise) | حمد (praise) ✓ |
| ق | Deep "k" from the back of the throat | قَلَم (pen) | قلم (pen) ✓ |
| ص | Emphatic "s" | صَبْر (patience) | صبر (patience) ✓ |
| ض | Emphatic "d" | ضَرُورَة (necessity) | ضرورت (necessity) ✓ |
| ط | Emphatic "t" | طَالِب (student) | طالب (seeker) ✓ |
| ظ | Emphatic "dh" | ظَالِم (oppressor) | ظالم (oppressor) ✓ |

As a Urdu speaker, most of these sounds are already in your phonological repertoire!

---

## Harakat — Vowel Marks (الحركات)

In beginners' texts, the Quran, and children's books, short vowels are shown using small marks called **harakat (حَرَكَات)**:

| Mark | Name | Sound | Example |
|------|------|-------|---------|
| ـَ | Fatha (فَتْحَة) | short "a" | كَتَبَ (kataba) = he wrote |
| ـِ | Kasra (كَسْرَة) | short "i" | كِتَاب (kitāb) = book |
| ـُ | Damma (ضَمَّة) | short "u" | كُتُب (kutub) = books |
| ـْ | Sukuun (سُكُون) | no vowel | مَكْتَب (maktab) = office |
| ـّ | Shadda (شَدَّة) | double consonant | مُعَلِّم (muʿallim) = teacher |
| ـً | Tanwin fath | "-an" sound | كِتَابًا (kitāban) |
| ـٍ | Tanwin kasr | "-in" sound | كِتَابٍ (kitābin) |
| ـٌ | Tanwin damm | "-un" sound | كِتَابٌ (kitābun) |

**Why harakat matter for beginners:** They show you exactly how to pronounce a word. Adult Arabic texts omit them, so once you build vocabulary, you read from context — exactly like reading Urdu without i'raab.

---

## Numbers 1–20 in Arabic (الأرقام)

| Number | Arabic | Transliteration | Urdu |
|--------|--------|-----------------|------|
| 1 | وَاحِد | wāhid | ایک |
| 2 | اِثْنَان | ithnān | دو |
| 3 | ثَلَاثَة | thalātha | تین |
| 4 | أَرْبَعَة | arbaʿa | چار |
| 5 | خَمْسَة | khamsa | پانچ |
| 6 | سِتَّة | sitta | چھ |
| 7 | سَبْعَة | sabʿa | سات |
| 8 | ثَمَانِيَة | thamāniya | آٹھ |
| 9 | تِسْعَة | tisʿa | نو |
| 10 | عَشَرَة | ʿashara | دس |
| 11 | أَحَدَ عَشَر | aḥada ʿashar | گیارہ |
| 12 | اِثْنَا عَشَر | ithnā ʿashar | بارہ |
| 13 | ثَلَاثَةَ عَشَر | thalāthata ʿashar | تیرہ |
| 14 | أَرْبَعَةَ عَشَر | arbaʿata ʿashar | چودہ |
| 15 | خَمْسَةَ عَشَر | khamsata ʿashar | پندرہ |
| 16 | سِتَّةَ عَشَر | sittata ʿashar | سولہ |
| 17 | سَبْعَةَ عَشَر | sabʿata ʿashar | سترہ |
| 18 | ثَمَانِيَةَ عَشَر | thamāniyata ʿashar | اٹھارہ |
| 19 | تِسْعَةَ عَشَر | tisʿata ʿashar | انیس |
| 20 | عِشْرُون | ʿishrūn | بیس |

> **Interesting fact:** Arabic numerals (١، ٢، ٣...) are used in the Arab world, while the "Arabic numerals" used in the West (1, 2, 3...) were transmitted to Europe via Arab mathematicians from Indian origins.

---

## Basic Greetings (التحيات الأساسية)

| Arabic | Transliteration | Meaning | Urdu |
|--------|-----------------|---------|------|
| السَّلَامُ عَلَيْكُم | as-salāmu ʿalaykum | Peace be upon you | السلام علیکم |
| وَعَلَيْكُمُ السَّلَام | wa ʿalaykumu s-salām | And upon you peace | وعلیکم السلام |
| مَرْحَبًا | marḥaban | Hello / Welcome | مرحبا |
| أَهْلًا وَسَهْلًا | ahlan wa-sahlan | Welcome | خوش آمدید |
| صَبَاحُ الخَيْر | ṣabāḥu l-khayr | Good morning | صبح بخیر |
| صَبَاحُ النُّور | ṣabāḥu n-nūr | Good morning (reply) | صبح نور |
| مَسَاءُ الخَيْر | masāʾu l-khayr | Good evening | شام بخیر |
| كَيْفَ حَالُك؟ | kayfa ḥāluk? | How are you? (m) | آپ کیسے ہیں؟ |
| كَيْفَ حَالُكِ؟ | kayfa ḥāluki? | How are you? (f) | آپ کیسی ہیں؟ |
| بِخَيْر، شُكْرًا | bi-khayr, shukran | Fine, thank you | ٹھیک ہوں، شکریہ |
| شُكْرًا | shukran | Thank you | شکریہ |
| عَفْوًا | ʿafwan | You're welcome / Sorry | معافی |
| مِنْ فَضْلِك | min faḍlik | Please (m) | براہ کرم |
| مِنْ فَضْلِكِ | min faḍliki | Please (f) | براہ کرم |
| مَعَ السَّلَامَة | maʿa s-salāma | Goodbye | خدا حافظ |
| إِلَى اللِّقَاء | ilā l-liqāʾ | Until we meet again | پھر ملیں گے |
| نَعَم | naʿam | Yes | ہاں |
| لَا | lā | No | نہیں |
| تَفَضَّل | tafaḍḍal | Please / go ahead (m) | تشریف لائیں |

---

## MSA vs Dialects: What Every Learner Must Understand

Arabic is a **diglossia** — meaning there are two distinct registers in use simultaneously:

### Modern Standard Arabic (MSA) / الفصحى (al-Fuṣḥā)
- The formal written and broadcast language
- Used in news (Al Jazeera, BBC Arabic), books, official documents, education, and formal speeches
- Based on Classical Quranic Arabic with some modern vocabulary additions
- Understood by educated Arabic speakers across all 22 Arab countries
- **This is what you will learn in this course**

### Colloquial Dialects (العاميات)
- Spoken Arabic used in daily conversation
- Each region has its own dialect, and they can differ substantially
- Major dialect families:
  - **Gulf (خليجي):** Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman
  - **Egyptian (مصري):** Egypt — most widely understood due to Cairo's media dominance
  - **Levantine (شامي):** Syria, Lebanon, Jordan, Palestine
  - **Maghrebi (مغربي):** Morocco, Algeria, Tunisia — most different from MSA

### What This Means for You
- Learn MSA first: it is the foundation and unlocks all dialects
- A speaker of MSA can communicate with any educated Arab
- Dialects are learned by immersion and exposure — we include notes on Gulf, Egyptian, and Levantine throughout this course
- The Quran is in Classical Arabic — MSA is very close to it

---

## Vocabulary Table: 60 Arabic-Urdu Cognates + 30 Basic Words

### Arabic–Urdu Cognates (Arabic → Urdu → English)

| # | Arabic | Transliteration | Urdu | English |
|---|--------|-----------------|------|---------|
| 1 | كِتَاب | kitāb | کتاب | book |
| 2 | عِلْم | ʿilm | علم | knowledge |
| 3 | وَقْت | waqt | وقت | time |
| 4 | دُنْيَا | dunyā | دنیا | world |
| 5 | اِنْسَان | insān | انسان | human being |
| 6 | عَقْل | ʿaql | عقل | reason / intellect |
| 7 | قَلْب | qalb | قلب / دل | heart |
| 8 | رَحْمَة | raḥma | رحمت | mercy |
| 9 | صَبْر | ṣabr | صبر | patience |
| 10 | شُكْر | shukr | شکر | gratitude |
| 11 | حَقّ | ḥaqq | حق | truth / right |
| 12 | خَيْر | khayr | خیر | goodness |
| 13 | عَمَل | ʿamal | عمل | action / deed |
| 14 | أَمَل | amal | امید / آمال | hope |
| 15 | فِكْر | fikr | فکر | thought |
| 16 | سَفَر | safar | سفر | journey |
| 17 | خَبَر | khabar | خبر | news |
| 18 | دَرْس | dars | درس | lesson |
| 19 | مَدْرَسَة | madrasa | مدرسہ | school |
| 20 | مُعَلِّم | muʿallim | معلم | teacher |
| 21 | طَالِب | ṭālib | طالب | student |
| 22 | اِمْتِحَان | imtiḥān | امتحان | exam |
| 23 | جَوَاب | jawāb | جواب | answer |
| 24 | سُؤَال | suʾāl | سوال | question |
| 25 | حُكُومَة | ḥukūma | حکومت | government |
| 26 | قَانُون | qānūn | قانون | law |
| 27 | عَدَالَة | ʿadāla | عدالت | justice / court |
| 28 | مَجْلِس | majlis | مجلس | council / sitting room |
| 29 | اِجْتِمَاع | ijtimāʿ | اجتماع | meeting / gathering |
| 30 | اِتِّفَاق | ittifāq | اتفاق | agreement / coincidence |
| 31 | مُشْكِلَة | mushkila | مشکل | problem |
| 32 | حَلّ | ḥall | حل | solution |
| 33 | رَأْي | raʾy | رائے | opinion |
| 34 | مَعْنَى | maʿnā | معنی | meaning |
| 35 | لَفْظ | lafẓ | لفظ | word |
| 36 | زَمَان | zamān | زمانہ | era / time |
| 37 | مَكَان | makān | مکان | place / house |
| 38 | عَالَم | ʿālam | عالم | world / scholar |
| 39 | اِسْلَام | islām | اسلام | Islam |
| 40 | إِيمَان | īmān | ایمان | faith |
| 41 | صَلَاة | ṣalāh | صلاۃ / نماز | prayer |
| 42 | حَلَال | ḥalāl | حلال | permissible |
| 43 | حَرَام | ḥarām | حرام | forbidden |
| 44 | نِعْمَة | niʿma | نعمت | blessing |
| 45 | جَنَّة | janna | جنت | paradise |
| 46 | مَلَك | malak | فرشتہ / ملک | angel |
| 47 | نَبِيّ | nabī | نبی | prophet |
| 48 | رَسُول | rasūl | رسول | messenger |
| 49 | دُعَاء | duʿāʾ | دعا | supplication |
| 50 | عِبَادَة | ʿibāda | عبادت | worship |
| 51 | حُرِّيَّة | ḥurriyya | آزادی / حریت | freedom |
| 52 | صِحَّة | ṣiḥḥa | صحت | health |
| 53 | طَبِيب | ṭabīb | طبیب | doctor |
| 54 | دَوَاء | dawāʾ | دوا | medicine |
| 55 | جِسْم | jism | جسم | body |
| 56 | قَلَم | qalam | قلم | pen |
| 57 | وَرَقَة | waraqa | ورق | paper / leaf |
| 58 | بَاب | bāb | باب | door / chapter |
| 59 | نُور | nūr | نور | light |
| 60 | قَوْم | qawm | قوم | nation / people |

### 30 Basic Arabic Words (Essential A1)

| Arabic | Transliteration | English |
|--------|-----------------|---------|
| أَنَا | anā | I |
| أَنْتَ / أَنْتِ | anta / anti | you (m/f) |
| هُوَ / هِيَ | huwa / hiya | he / she |
| نَحْنُ | naḥnu | we |
| هَذَا / هَذِه | hādhā / hādhihi | this (m/f) |
| ذَلِكَ / تِلْكَ | dhālika / tilka | that (m/f) |
| فِي | fī | in / at |
| عَلَى | ʿalā | on / upon |
| مِن | min | from |
| إِلَى | ilā | to / towards |
| مَعَ | maʿa | with |
| عِنْد | ʿinda | at / have |
| كَبِير | kabīr | big |
| صَغِير | ṣaghīr | small |
| جَيِّد | jayyid | good |
| سَيِّئ | sayyiʾ | bad |
| جَدِيد | jadīd | new |
| قَدِيم | qadīm | old |
| بَيْت | bayt | house / home |
| مَاء | māʾ | water |
| طَعَام | ṭaʿām | food |
| يَوْم | yawm | day |
| لَيْلَة | layla | night |
| وَلَد | walad | boy / child |
| بِنْت | bint | girl |
| رَجُل | rajul | man |
| مَرْأَة | marʾa | woman |
| كَلْب | kalb | dog |
| قِطَّة | qiṭṭa | cat |
| سَيَّارَة | sayyāra | car |

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;" markdown="1">

# ماڈیول ۱ — أساسيات اللغة العربية (بنیادیات)

## عربی کیوں سیکھیں؟

عربی زبان محض ایک زبان نہیں — یہ دنیا کی عظیم ترین تہذیبوں میں سے ایک کا دروازہ ہے۔ عربی سیکھنا ایک انتہائی قیمتی سرمایہ کاری ہے:

- **وسعت:** عربی **ایک سو ساٹھ ملین سے زیادہ** مادری زبان بولنے والوں کی زبان ہے، اور مشرق وسطیٰ اور شمالی افریقہ کے ۲۲ ممالک میں پھیلی ہے۔
- **قرآن کریم:** قرآن عربی زبان میں نازل ہوا۔ دنیا کے ۱۸۰ کروڑ مسلمانوں کے لیے قرآن کو سمجھنا ایک روحانی مقصد ہے۔
- **تجارت:** خلیجی ممالک دنیا کے سب سے بڑے تیل ذخائر پر بیٹھے ہیں۔ دبئی، ابو ظہبی اور ریاض مالیات اور ٹیکنالوجی کے بڑے مراکز بن رہے ہیں۔
- **ثقافت:** عربوں نے دنیا کو الجبرا، الگورتھم اور الف لیلیٰ دیے۔
- **سفارت کاری:** عربی اقوام متحدہ کی چھ سرکاری زبانوں میں سے ایک ہے۔

---

## اردو بولنے والوں کے لیے خاص بات: آپ پہلے سے سینکڑوں عربی الفاظ جانتے ہیں!

> **یہ اردو بولنے والوں کا سب سے بڑا فائدہ ہے۔ انگریزی بولنے والوں کے مقابلے میں آپ بہت آگے ہیں۔**

اردو نے عربی سے **تیس فیصد سے زیادہ** الفاظ لیے ہیں۔ آپ روزمرہ جو الفاظ بولتے ہیں ان میں سے بہت سے خالص عربی الفاظ ہیں:

| عربی | اردو | انگریزی |
|------|------|---------|
| كِتَاب | کتاب | کتاب |
| عِلْم | علم | علم |
| وَقْت | وقت | وقت |
| دُنْيَا | دنیا | دنیا |
| إِنْسَان | انسان | انسان |

---

## عربی حروف تہجی (الأبجدية العربية)

عربی میں **اٹھائیس حروف** ہیں۔ یہ **دائیں سے بائیں** لکھے اور پڑھے جاتے ہیں — بالکل اردو کی طرح۔ اگر آپ اردو پڑھتے ہیں تو آپ کا دماغ پہلے سے دائیں سے بائیں پڑھنے کا عادی ہے۔

### عربی رسم الخط کی خصوصیات

۱۔ **جڑا ہوا خط:** زیادہ تر حروف اگلے حرف سے جڑتے ہیں۔
۲۔ **ہر حرف کی چار شکلیں:** ابتدائی، درمیانی، آخری، اور علیحدہ۔
۳۔ **کوئی بڑے حروف نہیں**۔
۴۔ **عام تحریر میں حرکات نہیں لکھی جاتیں** — سیاق و سباق سے سمجھی جاتی ہیں، جیسے اردو میں۔

---

## حرکات — اعراب (الحركات)

ابتدائی متون، قرآن اور بچوں کی کتابوں میں مختصر حرکات لکھی جاتی ہیں:

| علامت | نام | آواز | مثال |
|-------|-----|------|------|
| ـَ | فتحہ | مختصر "اَ" | كَتَبَ (اس نے لکھا) |
| ـِ | کسرہ | مختصر "اِ" | كِتَاب (کتاب) |
| ـُ | ضمہ | مختصر "اُ" | كُتُب (کتابیں) |
| ـْ | سکون | کوئی حرکت نہیں | مَكْتَب (دفتر) |
| ـّ | شدہ | دہرا حرف | مُعَلِّم (استاد) |

---

## نمبر ۱ تا ۲۰ (الأرقام)

| نمبر | عربی | تلفظ | اردو |
|------|------|------|------|
| ۱ | وَاحِد | واحد | ایک |
| ۲ | اِثْنَان | اثنان | دو |
| ۳ | ثَلَاثَة | ثلاثہ | تین |
| ۴ | أَرْبَعَة | اربعہ | چار |
| ۵ | خَمْسَة | خمسہ | پانچ |
| ۶ | سِتَّة | ستہ | چھ |
| ۷ | سَبْعَة | سبعہ | سات |
| ۸ | ثَمَانِيَة | ثمانیہ | آٹھ |
| ۹ | تِسْعَة | تسعہ | نو |
| ۱۰ | عَشَرَة | عشرہ | دس |
| ۱۱ | أَحَدَ عَشَر | احد عشر | گیارہ |
| ۱۲ | اِثْنَا عَشَر | اثنا عشر | بارہ |
| ۱۵ | خَمْسَةَ عَشَر | خمستہ عشر | پندرہ |
| ۲۰ | عِشْرُون | عشرون | بیس |

---

## بنیادی سلام و دعا

| عربی | اردو معنی |
|------|-----------|
| السَّلَامُ عَلَيْكُم | آپ پر سلامتی ہو |
| وَعَلَيْكُمُ السَّلَام | اور آپ پر بھی |
| مَرْحَبًا | خوش آمدید |
| صَبَاحُ الخَيْر | صبح بخیر |
| مَسَاءُ الخَيْر | شام بخیر |
| كَيْفَ حَالُك؟ | آپ کیسے ہیں؟ |
| شُكْرًا | شکریہ |
| مِنْ فَضْلِك | براہ کرم |
| مَعَ السَّلَامَة | خدا حافظ |
| نَعَم / لَا | ہاں / نہیں |

---

## فصیح عربی بمقابلہ بولیاں

عربی ایک **دو رجسٹری زبان (diglossia)** ہے — یعنی ایک ہی وقت میں دو الگ انداز استعمال ہوتے ہیں:

### فصیح عربی (MSA)
- رسمی تحریری اور نشریاتی زبان
- الجزیرہ، بی بی سی عربی، کتابوں، سرکاری دستاویزات میں
- ۲۲ عرب ممالک کے پڑھے لکھے لوگ سمجھتے ہیں
- **یہی ہم اس کورس میں سیکھیں گے**

### بولیاں (عامیات)
- روزمرہ کی گفتگو میں استعمال
- اہم بولیاں: خلیجی، مصری (سب سے زیادہ سمجھی جانے والی)، شامی

---

## لغت: ۶۰ عربی-اردو مشترک الفاظ + ۳۰ بنیادی الفاظ

### عربی-اردو مشترک الفاظ

| # | عربی | اردو | انگریزی |
|---|------|------|---------|
| ۱ | كِتَاب | کتاب | کتاب |
| ۲ | عِلْم | علم | علم |
| ۳ | وَقْت | وقت | وقت |
| ۴ | دُنْيَا | دنیا | دنیا |
| ۵ | إِنْسَان | انسان | انسان |
| ۶ | عَقْل | عقل | عقل |
| ۷ | رَحْمَة | رحمت | مہربانی |
| ۸ | صَبْر | صبر | صبر |
| ۹ | شُكْر | شکر | شکریہ |
| ۱۰ | حَقّ | حق | حق |
| ۱۱ | خَيْر | خیر | بھلائی |
| ۱۲ | عَمَل | عمل | عمل |
| ۱۳ | فِكْر | فکر | سوچ |
| ۱۴ | سَفَر | سفر | سفر |
| ۱۵ | خَبَر | خبر | خبر |
| ۱۶ | دَرْس | درس | سبق |
| ۱۷ | مَدْرَسَة | مدرسہ | مدرسہ |
| ۱۸ | مُعَلِّم | معلم | استاد |
| ۱۹ | طَالِب | طالب | طالب علم |
| ۲۰ | اِمْتِحَان | امتحان | امتحان |
| ۲۱ | جَوَاب | جواب | جواب |
| ۲۲ | سُؤَال | سوال | سوال |
| ۲۳ | حُكُومَة | حکومت | حکومت |
| ۲۴ | قَانُون | قانون | قانون |
| ۲۵ | عَدَالَة | عدالت | انصاف |
| ۲۶ | مَجْلِس | مجلس | مجلس |
| ۲۷ | اِجْتِمَاع | اجتماع | اجتماع |
| ۲۸ | اِتِّفَاق | اتفاق | اتفاق |
| ۲۹ | مُشْكِلَة | مشکل | مسئلہ |
| ۳۰ | حَلّ | حل | حل |
| ۳۱ | رَأْي | رائے | رائے |
| ۳۲ | مَعْنَى | معنی | معنی |
| ۳۳ | لَفْظ | لفظ | لفظ |
| ۳۴ | زَمَان | زمانہ | زمانہ |
| ۳۵ | مَكَان | مکان | جگہ |
| ۳۶ | عَالَم | عالم | دنیا |
| ۳۷ | إِيمَان | ایمان | ایمان |
| ۳۸ | صَلَاة | نماز | نماز |
| ۳۹ | حَلَال | حلال | حلال |
| ۴۰ | حَرَام | حرام | حرام |
| ۴۱ | نِعْمَة | نعمت | نعمت |
| ۴۲ | جَنَّة | جنت | جنت |
| ۴۳ | نَبِيّ | نبی | نبی |
| ۴۴ | رَسُول | رسول | رسول |
| ۴۵ | دُعَاء | دعا | دعا |
| ۴۶ | عِبَادَة | عبادت | عبادت |
| ۴۷ | حُرِّيَّة | حریت | آزادی |
| ۴۸ | صِحَّة | صحت | صحت |
| ۴۹ | طَبِيب | طبیب | ڈاکٹر |
| ۵۰ | دَوَاء | دوا | دوا |
| ۵۱ | جِسْم | جسم | جسم |
| ۵۲ | قَلَم | قلم | قلم |
| ۵۳ | بَاب | باب | دروازہ / باب |
| ۵۴ | نُور | نور | روشنی |
| ۵۵ | قَوْم | قوم | قوم |
| ۵۶ | كِتَاب | کتاب | کتاب |
| ۵۷ | اِسْلَام | اسلام | اسلام |
| ۵۸ | مَلَك | فرشتہ | فرشتہ |
| ۵۹ | وَرَقَة | ورق | کاغذ |
| ۶۰ | قَلْب | قلب | دل |

### ۳۰ بنیادی عربی الفاظ

| عربی | تلفظ | اردو |
|------|------|------|
| أَنَا | انا | میں |
| أَنْتَ / أَنْتِ | انت | آپ (مذکر/مؤنث) |
| هُوَ / هِيَ | ہوا / ہیا | وہ |
| نَحْنُ | نحن | ہم |
| هَذَا | ہذا | یہ |
| كَبِير | کبیر | بڑا |
| صَغِير | صغیر | چھوٹا |
| جَيِّد | جید | اچھا |
| بَيْت | بیت | گھر |
| مَاء | ماء | پانی |
| طَعَام | طعام | کھانا |
| يَوْم | یوم | دن |
| لَيْلَة | لیلہ | رات |
| سَيَّارَة | سیارہ | گاڑی |
| نَعَم / لَا | نعم / لا | ہاں / نہیں |

</div>
