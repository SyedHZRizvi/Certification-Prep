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

# Module 3 — القواعد الأساسية (Basic Grammar)

## 1. Gender: Masculine and Feminine (التذكير والتأنيث)

Arabic has a **binary gender system**: every single noun is either **masculine (مُذَكَّر)** or **feminine (مُؤَنَّث)**. There is no neutral/neuter gender.

### How to Identify Feminine Nouns

**Rule 1 — Taa Marbuta (ة):** The most reliable marker. Most nouns ending in **ة** (a round ta, called taa marbuta) are feminine:

| Arabic | Transliteration | English |
|--------|-----------------|---------|
| مَدِينَة | madīna | city |
| طَالِبَة | ṭāliba | female student |
| مَدْرَسَة | madrasa | school |
| سَيَّارَة | sayyāra | car |
| غُرْفَة | ghurfa | room |

**Rule 2 — Natural gender:** Words for female beings are feminine regardless of ending:
- أُمّ (umm) — mother
- بِنْت (bint) — girl/daughter
- امْرَأَة (imraʾa) — woman

**Rule 3 — Memorized exceptions:** Some nouns are feminine without taa marbuta. Memorise these:
- شَمْس (shams) — sun (feminine)
- أَرْض (arḍ) — earth/land (feminine)
- نَار (nār) — fire (feminine)
- رِيح (rīḥ) — wind (feminine)
- بِئْر (biʾr) — well (feminine)
- حَرْب (ḥarb) — war (feminine)
- يَد (yad) — hand (feminine)
- عَيْن (ʿayn) — eye (feminine)

**Adjectives must match their noun's gender:**
- كِتَابٌ جَدِيدٌ (a new book — masculine)
- سَيَّارَةٌ جَدِيدَةٌ (a new car — feminine)

---

## 2. The Definite Article: الـ (al-)

Arabic has only ONE definite article: **الـ (al-)** which means "the". Unlike English, Arabic has no indefinite article — an unmarked noun is indefinite:

| Arabic | Meaning |
|--------|---------|
| كِتَاب | a book |
| الكِتَاب | **the** book |
| بَيْت | a house |
| البَيْت | **the** house |

### Sun Letters (الحروف الشمسية) and Moon Letters (الحروف القمرية)

This is one of the most important pronunciation rules in Arabic:

When **الـ** is attached to a noun, the "l" of "al-" may **assimilate** to the first letter of the noun. Letters are divided into two groups:

**Moon Letters (قمرية)** — الـ pronounced fully as "al-":
ء، ب، ج، ح، خ، ع، غ، ف، ق، ك، م، ه، و، ي

**Sun Letters (شمسية)** — the "l" assimilates to the first letter:
ت، ث، د، ذ، ر، ز، س، ش، ص، ض، ط، ظ، ل، ن

**Examples:**
| Word | With الـ | Pronunciation | Letter type |
|------|---------|---------------|-------------|
| قَمَر (moon) | القَمَر | al-qamar | Moon letter (ق) |
| كِتَاب (book) | الكِتَاب | al-kitāb | Moon letter (ك) |
| شَمْس (sun) | الشَّمْس | ash-shams (not al-shams) | Sun letter (ش) |
| نُور (light) | النُّور | an-nūr | Sun letter (ن) |
| رَجُل (man) | الرَّجُل | ar-rajul | Sun letter (ر) |

> **Memory tip:** The sun (الشَّمْس) "shines" over its letter — the l disappears into the shine. The moon (القَمَر) is cool and distant — the l stays intact.

---

## 3. The Dual Form (المُثَنَّى)

To express TWO of something, Arabic adds a special suffix:

- Masculine nouns: add **ـَانِ** (nominative) or **ـَيْنِ** (accusative/genitive)
- Feminine nouns: remove ة first, then add **ـَتَانِ / ـَتَيْنِ**

| Singular | Dual (nominative) | English |
|----------|-------------------|---------|
| كِتَاب | كِتَابَانِ | two books |
| طَالِب | طَالِبَانِ | two students (m) |
| بَيْت | بَيْتَانِ | two houses |
| مَدْرَسَة | مَدْرَسَتَانِ | two schools |
| طَالِبَة | طَالِبَتَانِ | two students (f) |

---

## 4. Plurals — The Broken Plural (جمع التكسير)

Arabic plurals are one of the most challenging aspects of the language. Unlike English (just add -s), Arabic has:

1. **Sound Masculine Plural (جمع المذكر السالم):** Add ـُونَ (nominative) or ـِينَ — used mainly for male persons and some adjectives
2. **Sound Feminine Plural (جمع المؤنث السالم):** Replace ة with ـَات — regular
3. **Broken Plural (جمع التكسير):** The word's internal structure changes — MUST be memorised

### Common Broken Plural Patterns

| Pattern | Singular example | Plural | English |
|---------|-----------------|--------|---------|
| فُعُول | قَلْب (heart) | قُلُوب | hearts |
| فُعُول | بَيْت (house) | بُيُوت | houses |
| أَفْعَال | كِتَاب (book) | كُتُب | books |
| أَفْعِلَة | سِلَاح (weapon) | أَسْلِحَة | weapons |
| فِعَال | رَجُل (man) | رِجَال | men |
| فُعَلَاء | طَبِيب (doctor) | أَطِبَّاء | doctors |
| أَفْعُل | كَبِير (big) | أَكَابِر | seniors |

**Key broken plural pairs to memorise:**

| Singular | Plural | English |
|----------|--------|---------|
| كِتَاب | كُتُب | book / books |
| وَلَد | أَوْلَاد | boy / boys |
| مَدِينَة | مُدُن | city / cities |
| بَلَد | بُلْدَان | country / countries |
| يَوْم | أَيَّام | day / days |
| عَيْن | أَعْيُن | eye / eyes |
| سَنَة | سِنِين / سَنَوَات | year / years |
| رَجُل | رِجَال | man / men |
| اِمْرَأَة | نِسَاء | woman / women |
| طَالِب | طُلَّاب | student / students |

---

## 5. Personal Pronouns (الضَّمَائِر الشَّخْصِيَّة)

Arabic distinguishes gender in second and third person, and has a dual form:

| Pronoun | Arabic | Transliteration | English equivalent |
|---------|--------|-----------------|-------------------|
| I | أَنَا | anā | I |
| You (m. sing) | أَنْتَ | anta | you (m) |
| You (f. sing) | أَنْتِ | anti | you (f) |
| He | هُوَ | huwa | he |
| She | هِيَ | hiya | she |
| We | نَحْنُ | naḥnu | we |
| You (m. dual) | أَنْتُمَا | antumā | you two (m) |
| You (m. pl) | أَنْتُم | antum | you (m. plural) |
| You (f. pl) | أَنْتُنَّ | antunna | you (f. plural) |
| They (m. dual) | هُمَا | humā | they two (m) |
| They (m. pl) | هُم | hum | they (m. plural) |
| They (f. pl) | هُنَّ | hunna | they (f. plural) |

---

## 6. The Verb "To Be" — Not Used in Present Tense!

This is one of the most striking features of Arabic grammar:

**In the present tense, Arabic does NOT use a verb "to be".**

Simply place the subject and predicate next to each other:

| Arabic | Literal gloss | Meaning |
|--------|--------------|---------|
| أَنَا طَالِبٌ | I [am] student | I am a student |
| هُوَ طَبِيبٌ | He [is] doctor | He is a doctor |
| هِيَ جَمِيلَةٌ | She [is] beautiful | She is beautiful |
| البَيْتُ كَبِيرٌ | The house [is] big | The house is big |
| الكِتَابُ جَدِيدٌ | The book [is] new | The book is new |

> **Urdu note:** Urdu uses "ہے / ہیں" for "is/are" — Arabic just omits it in present tense entirely!

---

## 7. Sentence Types

### Nominal Sentence (الجُمْلَة الاسمية — Jumlat Ismiyya)

A sentence that begins with a **noun or pronoun** (no verb):
- **Subject (مُبْتَدَأ) + Predicate (خَبَر)**
- Both must be nominative case (no case markers needed at A2 level)

Examples:
- مُحَمَّدٌ طَالِبٌ — Muhammad is a student
- البَيْتُ كَبِيرٌ — The house is big
- أَنَا مُدَرِّسٌ — I am a teacher

### Verbal Sentence (الجُمْلَة الفعلية — Jumlat Fiʿliyya)

A sentence that begins with a **verb**. The verb comes FIRST:
- **Verb + Subject + Object**

Examples:
- كَتَبَ الطَّالِبُ الدَّرْسَ — The student wrote the lesson (lit: wrote the-student the-lesson)
- ذَهَبَ أَحْمَدُ إِلَى المَدْرَسَةِ — Ahmad went to school
- أَكَلَتِ البِنْتُ الخُبْزَ — The girl ate the bread

> **Important:** When a verbal sentence starts with a verb, the verb is singular even if the subject is plural — the verb agrees in gender but not number when it precedes its subject.

---

## 8. The Root System (نِظَام الجُذُور)

**This is the most revolutionary concept in Arabic — and one of the most beautiful.**

Arabic is built on **trilateral roots (جذور ثلاثية)** — nearly every word derives from a three-consonant root. Once you know the root, you can predict the meaning of dozens of related words.

### The Root ك-ت-ب (K-T-B) — related to writing

| Word | Meaning | Derived from k-t-b |
|------|---------|-------------------|
| كَتَبَ | he wrote | basic verb |
| كِتَابَة | writing | verbal noun |
| كِتَاب | book | instrument of writing |
| كُتُب | books | plural |
| كَاتِب | writer | active participle |
| مَكْتُوب | written / letter | passive participle |
| مَكْتَب | office / desk | place of writing |
| مَكْتَبَة | library / bookshop | place of books |
| اِكْتَتَبَ | to subscribe | Form VIII |

### The Root ع-ل-م (ʿ-L-M) — related to knowledge

| Word | Meaning |
|------|---------|
| عَلِمَ | he knew |
| عِلْم | knowledge |
| عَالِم | scholar / scientist |
| مَعْلُوم | known |
| مَعْلُومَات | information |
| تَعْلِيم | education |
| مُعَلِّم | teacher |
| تَعَلَّمَ | to learn |
| عَلَّمَ | to teach |

### The Root د-ر-س (D-R-S) — related to study

| Word | Meaning |
|------|---------|
| دَرَسَ | he studied |
| دَرْس | lesson |
| دِرَاسَة | study |
| مَدْرَسَة | school |
| مُدَرِّس | teacher |
| مَدْرُوس | studied |

### More Key Roots

| Root | Theme | Examples |
|------|-------|---------|
| ذ-ه-ب | going | ذَهَبَ (went), ذَهَاب (going), مَذْهَب (school of thought) |
| ق-ر-أ | reading | قَرَأَ (read), قِرَاءَة (reading), قُرْآن (Quran) |
| ف-ت-ح | opening | فَتَحَ (opened), فَتْح (opening/conquest), فُتُوح (conquests) |
| خ-ر-ج | exiting | خَرَجَ (exited), خُرُوج (exit), مَخْرَج (exit/way out) |
| س-أ-ل | asking | سَأَلَ (asked), سُؤَال (question), مَسْأَلَة (issue) |

---

## 9. Question Words (أَدَوَات الاسْتِفْهَام)

| Arabic | Transliteration | Meaning | Example |
|--------|-----------------|---------|---------|
| مَا / مَاذَا | mā / mādhā | what | مَاذَا تَكْتُب؟ What are you writing? |
| مَن | man | who | مَن هَذَا؟ Who is this? |
| أَيْن | ayna | where | أَيْن البَيْت؟ Where is the house? |
| مَتَى | matā | when | مَتَى تَذْهَب؟ When do you go? |
| لِمَاذَا | limādhā | why | لِمَاذَا دَرَسْت؟ Why did you study? |
| كَيْف | kayfa | how | كَيْفَ حَالُك؟ How are you? |
| كَم | kam | how many/much | كَم كِتَابًا؟ How many books? |
| هَل | hal | yes/no question marker | هَل أَنْتَ طَالِب؟ Are you a student? |
| أَيّ | ayy | which | أَيّ كِتَاب؟ Which book? |

> **Tip:** هَل is placed at the beginning of a sentence to turn it into a yes/no question — exactly like Urdu "کیا" as a question marker.

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;" markdown="1">

# ماڈیول ۳ — القواعد الأساسية (بنیادی قواعد)

## ۱. جنس: مذکر اور مؤنث

عربی میں ہر اسم یا تو **مذکر** ہے یا **مؤنث** — کوئی غیر جنس نہیں۔

### مؤنث اسم کی پہچان

**قانون ۱ — تاء مربوطہ (ة):** جو اسم ة پر ختم ہو وہ عام طور پر مؤنث ہے:
- مَدِينَة (شہر)، مَدْرَسَة (مدرسہ)، سَيَّارَة (گاڑی)

**قانون ۲ — فطری جنس:** مادہ کے لیے الفاظ مؤنث:
- أُمّ (ماں)، بِنْت (بیٹی)

**قانون ۳ — محفوظ استثناء:** کچھ اسم بغیر ة کے مؤنث ہیں:
- شَمْس (سورج)، أَرْض (زمین)، نَار (آگ)، يَد (ہاتھ)

**صفت اسم کی جنس کے مطابق ہوتی ہے:**
- كِتَابٌ جَدِيدٌ — نئی کتاب (مذکر)
- سَيَّارَةٌ جَدِيدَةٌ — نئی گاڑی (مؤنث)

---

## ۲. معرفہ: الـ (ال)

عربی میں صرف ایک معرفہ حرف ہے: **الـ (ال)** جس کا مطلب ہے "وہ / یہ"۔ نکرہ (indefinite) کے لیے کوئی حرف نہیں:

| عربی | معنی |
|------|------|
| كِتَاب | ایک کتاب |
| الكِتَاب | **وہ** کتاب |

### شمسی اور قمری حروف

جب الـ کسی اسم سے ملتا ہے تو دو صورتیں ہیں:

**قمری حروف:** الـ کا "ل" برقرار رہتا ہے
- القَمَر (چاند)، الكِتَاب (کتاب)

**شمسی حروف:** "ل" پہلے حرف میں مدغم ہو جاتا ہے
- الشَّمْس = اَش-شَمْس (سورج)
- النُّور = اَن-نُور (روشنی)
- الرَّجُل = اَر-رَجُل (مرد)

---

## ۳. تثنیہ (دو کی تعداد)

دو چیزوں کے لیے عربی میں خاص علامت لگتی ہے:
- مذکر: **ـَانِ** لگائیں
- مؤنث: ة ہٹا کر **ـَتَانِ** لگائیں

| واحد | تثنیہ | معنی |
|------|-------|------|
| كِتَاب | كِتَابَانِ | دو کتابیں |
| طَالِب | طَالِبَانِ | دو طالب علم |
| مَدْرَسَة | مَدْرَسَتَانِ | دو مدرسے |

---

## ۴. جمع — جمع تکسیر (ٹوٹی ہوئی جمع)

عربی جمع تین قسم کی ہے:
۱۔ **جمع مذکر سالم:** مردوں کے لیے ـُونَ / ـِينَ
۲۔ **جمع مؤنث سالم:** ة ہٹا کر ـَات
۳۔ **جمع تکسیر:** لفظ کی اندرونی ساخت بدل جاتی ہے — یاد کرنی پڑتی ہے

### یاد رکھنے کی جمعیں

| واحد | جمع | معنی |
|------|-----|------|
| كِتَاب | كُتُب | کتاب / کتابیں |
| وَلَد | أَوْلَاد | بچہ / بچے |
| مَدِينَة | مُدُن | شہر / شہر |
| يَوْم | أَيَّام | دن / دن |
| رَجُل | رِجَال | مرد / مرد |
| طَالِب | طُلَّاب | طالب علم / طالب علمان |

---

## ۵. ضمائر شخصی

| ضمیر | عربی | اردو |
|------|------|------|
| میں | أَنَا | میں |
| تم (م) | أَنْتَ | آپ / تم |
| تم (ف) | أَنْتِ | آپ / تم |
| وہ (م) | هُوَ | وہ |
| وہ (ف) | هِيَ | وہ |
| ہم | نَحْنُ | ہم |
| تم (جمع م) | أَنْتُم | آپ لوگ |
| وہ (جمع م) | هُم | وہ لوگ |

---

## ۶. فعل "ہونا" — حال میں استعمال نہیں!

یہ عربی کی سب سے خاص بات ہے:

**عربی میں حال زمانہ میں "ہے / ہیں" نہیں لگتا!**

| عربی | ترجمہ |
|------|-------|
| أَنَا طَالِبٌ | میں طالب علم ہوں |
| هُوَ طَبِيبٌ | وہ ڈاکٹر ہے |
| البَيْتُ كَبِيرٌ | گھر بڑا ہے |

اردو میں "ہے" لگتا ہے لیکن عربی میں حال میں چھوڑ دیتے ہیں۔

---

## ۷. جملے کی دو قسمیں

### جملہ اسمیہ — اسم سے شروع

- **مبتدا + خبر**
- مُحَمَّدٌ طَالِبٌ — محمد طالب علم ہے

### جملہ فعلیہ — فعل سے شروع

- **فعل + فاعل + مفعول**
- کَتَبَ الطَّالِبُ الدَّرْسَ — طالب علم نے سبق لکھا

**اہم:** فعلیہ جملے میں فعل پہلے آتا ہے!

---

## ۸. جذور کا نظام (Root System)

**یہ عربی کا سب سے انقلابی تصور ہے۔**

تقریباً ہر عربی لفظ تین حروف کے **جذر** سے بنتا ہے۔

### جذر ک-ت-ب (لکھنے سے متعلق)

| لفظ | معنی |
|-----|------|
| كَتَبَ | اس نے لکھا |
| كِتَابَة | لکھائی |
| كِتَاب | کتاب |
| كُتُب | کتابیں |
| كَاتِب | لکھنے والا |
| مَكْتُوب | لکھا ہوا / خط |
| مَكْتَب | دفتر |
| مَكْتَبَة | لائبریری |

### جذر ع-ل-م (علم سے متعلق)

| لفظ | معنی |
|-----|------|
| عَلِمَ | جانا |
| عِلْم | علم ✓ |
| عَالِم | عالم ✓ |
| مَعْلُومَات | معلومات ✓ |
| تَعْلِيم | تعلیم ✓ |
| مُعَلِّم | معلم ✓ |

**نوٹ:** یہ تمام الفاظ اردو میں بھی استعمال ہوتے ہیں!

---

## ۹. سوالیہ الفاظ

| عربی | اردو |
|------|------|
| مَاذَا | کیا |
| مَن | کون |
| أَيْن | کہاں |
| مَتَى | کب |
| لِمَاذَا | کیوں |
| كَيْف | کیسے |
| كَم | کتنا |
| هَل | کیا (ہاں/نہیں سوال) |
| أَيّ | کون سا |

**هَل** اردو کے "کیا" کی طرح جملے کے شروع میں آتا ہے۔

</div>
