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

# Module 5 — القواعد المتوسطة (Intermediate Grammar)

## 1. Perfect (Past) Tense — الماضي (al-māḍī)

The perfect tense describes completed actions. The base form is the **third person masculine singular** — this is the dictionary form used in Hans Wehr.

### Pattern: فَعَلَ (faʿala) — basic Form I verb

All Form I verbs follow this conjugation. Using كَتَبَ (kataba) — to write:

| Person | Arabic | Transliteration | English |
|--------|--------|-----------------|---------|
| He (m. sing) | كَتَبَ | kataba | he wrote |
| She (f. sing) | كَتَبَتْ | katabat | she wrote |
| You (m. sing) | كَتَبْتَ | katabta | you wrote (m) |
| You (f. sing) | كَتَبْتِ | katabti | you wrote (f) |
| I | كَتَبْتُ | katabtu | I wrote |
| They (m. pl) | كَتَبُوا | katabū | they wrote (m) |
| They (f. pl) | كَتَبْنَ | katabna | they wrote (f) |
| You (m. pl) | كَتَبْتُم | katabtum | you wrote (m. pl) |
| You (f. pl) | كَتَبْتُنَّ | katabtunna | you wrote (f. pl) |
| We | كَتَبْنَا | katabnā | we wrote |
| They (m. dual) | كَتَبَا | katabā | they two wrote |
| You (dual) | كَتَبْتُمَا | katabtumā | you two wrote |

> **Pattern:** The suffixes are attached to the past stem. The stem vowel pattern فَعَلَ (with fatha on first and second consonant) is the most common. Other patterns: فَعِلَ (e.g., شَرِبَ shariba — to drink) and فَعُلَ (rare).

### More Verbs — Past Tense Examples

| Verb (3rd m.sg) | Past stem | He | She | I |
|-----------------|-----------|-----|-----|---|
| ذَهَبَ (to go) | ذَهَبَ | ذَهَبَ | ذَهَبَتْ | ذَهَبْتُ |
| قَرَأَ (to read) | قَرَأَ | قَرَأَ | قَرَأَتْ | قَرَأْتُ |
| أَكَلَ (to eat) | أَكَلَ | أَكَلَ | أَكَلَتْ | أَكَلْتُ |
| خَرَجَ (to exit) | خَرَجَ | خَرَجَ | خَرَجَتْ | خَرَجْتُ |
| جَلَسَ (to sit) | جَلَسَ | جَلَسَ | جَلَسَتْ | جَلَسْتُ |

---

## 2. Imperfect (Present/Future) Tense — المضارع (al-muḍāriʿ)

The imperfect tense covers both present and future actions. It is formed by adding **prefixes and suffixes** to the verb stem.

### Pattern: يَفْعَلُ (yafʿalu) — using كَتَبَ → يَكْتُبُ

| Person | Arabic | Transliteration | English |
|--------|--------|-----------------|---------|
| He (m. sing) | يَكْتُبُ | yaktubu | he writes / will write |
| She (f. sing) | تَكْتُبُ | taktubu | she writes |
| You (m. sing) | تَكْتُبُ | taktubu | you write (m) |
| You (f. sing) | تَكْتُبِينَ | taktubīna | you write (f) |
| I | أَكْتُبُ | aktubu | I write |
| They (m. pl) | يَكْتُبُونَ | yaktubūna | they write (m) |
| They (f. pl) | يَكْتُبْنَ | yaktubna | they write (f) |
| You (m. pl) | تَكْتُبُونَ | taktubūna | you write (m. pl) |
| We | نَكْتُبُ | naktubu | we write |

### The Prefix System

| Person | Prefix | Suffix (m.pl) |
|--------|--------|---------------|
| He | يَـ | — |
| She | تَـ | — |
| You (m) | تَـ | — |
| You (f) | تَـ | ـِينَ |
| I | أَـ | — |
| We | نَـ | — |
| They (m. pl) | يَـ | ـُونَ |
| You (m. pl) | تَـ | ـُونَ |

### Future Tense

To make the imperfect clearly future, add:
- **سَـ** (sa-) directly before the verb: سَيَكْتُبُ (he will write)
- **سَوْفَ** (sawfa) before the verb: سَوْفَ يَكْتُبُ (he will write — stronger future)

---

## 3. Broken Plural Patterns (أوزان الجموع المكسرة)

Broken plurals are Arabic's most challenging feature. The internal vowels change — sometimes dramatically. Here are the most common patterns:

### Pattern Table

| Pattern (wazn) | Singular example | Plural | English |
|----------------|-----------------|--------|---------|
| فُعُول | بَيْت (house) | بُيُوت | houses |
| فُعُول | قَلْب (heart) | قُلُوب | hearts |
| أَفْعَال | قَلَم (pen) | أَقْلَام | pens |
| أَفْعَال | سَبَب (reason) | أَسْبَاب | reasons |
| أَفْعَال | لَوْن (colour) | أَلْوَان | colours |
| أَفْعَال | وَلَد (boy) | أَوْلَاد | boys |
| أَفْعُل | نَهْر (river) | أَنْهُر | rivers |
| أَفْعِلَة | سِلَاح (weapon) | أَسْلِحَة | weapons |
| فُعَلَاء | طَبِيب (doctor) | أَطِبَّاء | doctors |
| فِعَال | رَجُل (man) | رِجَال | men |
| فِعَال | جَبَل (mountain) | جِبَال | mountains |
| فُعُل | كِتَاب (book) | كُتُب | books |
| فَوَاعِل | مَسْجِد (mosque) | مَسَاجِد | mosques |
| مَفَاعِل | مَكْتَب (office) | مَكَاتِب | offices |
| فُعَلَاء | كَرِيم (generous) | كُرَمَاء | generous ones |
| أَفْعِلَاء | صَدِيق (friend) | أَصْدِقَاء | friends |

### Most Important Plurals to Memorise at B1

| Singular | Plural | English |
|----------|--------|---------|
| كِتَاب | كُتُب | book / books |
| بَيْت | بُيُوت | house / houses |
| قَلْب | قُلُوب | heart / hearts |
| يَوْم | أَيَّام | day / days |
| وَلَد | أَوْلَاد | boy / boys |
| رَجُل | رِجَال | man / men |
| امْرَأَة | نِسَاء | woman / women |
| مَدِينَة | مُدُن | city / cities |
| بَلَد | بُلْدَان | country / countries |
| سَنَة | سِنِين / سَنَوَات | year / years |
| عَيْن | أَعْيُن | eye / eyes |
| يَد | أَيْدٍ | hand / hands |
| مَسْجِد | مَسَاجِد | mosque / mosques |
| صَدِيق | أَصْدِقَاء | friend / friends |
| طَبِيب | أَطِبَّاء | doctor / doctors |
| كَلِمَة | كَلِمَات | word / words |
| شَجَرَة | أَشْجَار | tree / trees |
| جَبَل | جِبَال | mountain / mountains |
| نَهْر | أَنْهُر | river / rivers |
| بَحْر | بِحَار | sea / seas |

---

## 4. Case System (الإعراب) — Brief Introduction

Classical and Modern Standard Arabic have **three grammatical cases**. At B1, you need to recognise them:

| Case | Arabic name | Marker (indefinite) | Use |
|------|------------|---------------------|-----|
| Nominative | الرَّفْع | ـُ (damma) / ـٌ (tanwin damm) | Subject of a sentence |
| Accusative | النَّصْب | ـَ (fatha) / ـً (tanwin fath) | Object; after most prepositions of motion |
| Genitive | الجَرّ | ـِ (kasra) / ـٍ (tanwin kasr) | After prepositions; second noun in iḍāfa |

**Examples:**
- الكِتَابُ جَدِيدٌ — **The book** is new (nominative — subject)
- قَرَأْتُ الكِتَابَ — I read **the book** (accusative — object)
- هَذَا كِتَابُ الطَّالِبِ — This is **the student's book** (genitive — second noun in iḍāfa)

> **Practical note:** In spoken MSA, final case endings are often dropped. Focus on understanding them in reading — production accuracy comes later.

---

## 5. Idaafa Construction (الإضافة — Possession)

The **iḍāfa** (literally "addition") is Arabic's primary way to express possession — equivalent to "of" or "'s" in English.

### Rule: First noun (possessed) + Second noun (possessor, in genitive)

| Arabic | Transliteration | English |
|--------|-----------------|---------|
| كِتَابُ الطَّالِبِ | kitābu ṭ-ṭālibi | the book of the student (the student's book) |
| بَيْتُ الأُسْتَاذِ | baytu l-ustādhi | the professor's house |
| مَدِينَةُ الرِّيَاضِ | madīnatu r-riyāḍi | the city of Riyadh |
| بَابُ المَسْجِدِ | bābu l-masjidi | the door of the mosque |
| كَلَامُ اللّٰهِ | kalāmu llāhi | the speech of God (the Quran) |

### Key Rules for Iḍāfa

1. **The first noun loses its تنوين (nunation)** — no indefinite marker
2. **The first noun is definite if the second noun is definite** — but does NOT take الـ
3. **The second noun takes الجَرّ (genitive case)** — marked by kasra ـِ or ـٍ
4. **Multiple iḍāfa chains are possible:** كِتَابُ طَالِبِ العِلْمِ (the book of the student of knowledge)

### Iḍāfa with Pronouns (Pronominal Suffixes)

Pronouns attach as suffixes to the first noun:

| Suffix | Meaning | Example |
|--------|---------|---------|
| ـِي / ـِيَ | my | كِتَابِي (my book) |
| ـُكَ | your (m) | كِتَابُكَ (your book, m) |
| ـُكِ | your (f) | كِتَابُكِ (your book, f) |
| ـُه | his | كِتَابُه (his book) |
| ـُهَا | her | كِتَابُهَا (her book) |
| ـُنَا | our | كِتَابُنَا (our book) |
| ـُكُم | your (m.pl) | كِتَابُكُم (your book, pl) |
| ـُهُم | their | كِتَابُهُم (their book) |

---

## 6. Adjective Agreement (المطابقة)

Arabic adjectives must agree with their noun in FOUR categories:

1. **Gender** (masculine / feminine)
2. **Number** (singular / dual / plural)
3. **Definiteness** (definite الـ / indefinite)
4. **Case** (nominative / accusative / genitive)

### Singular Agreement

| Noun | Adjective | Transliteration | English |
|------|-----------|-----------------|---------|
| كِتَابٌ جَدِيدٌ | m. indef. | kitābun jadīdun | a new book |
| الكِتَابُ الجَدِيدُ | m. def. | al-kitābu l-jadīdu | the new book |
| مَدِينَةٌ كَبِيرَةٌ | f. indef. | madīnatun kabīratun | a big city |
| المَدِينَةُ الكَبِيرَةُ | f. def. | al-madīnatu l-kabīratu | the big city |

### Plural Agreement

For human plurals, adjectives must agree in gender and number:
- الطُّلَّابُ المُجِدُّونَ — the diligent students (m. pl)
- الطَّالِبَاتُ المُجِدَّاتُ — the diligent students (f. pl)

For non-human plurals, Arabic treats the plural as **feminine singular** for adjective agreement:
- الكُتُبُ الجَدِيدَةُ — the new books (NOT *الكُتُبُ الجُدُد)
- السَّيَّارَاتُ الجَمِيلَةُ — the beautiful cars

> **This rule is critical:** Non-human plural nouns always take feminine singular adjectives. This applies to animals, objects, and concepts.

---

## 7. Negation (النفي)

Arabic has different negation words for different tenses and contexts:

| Negation word | Arabic | Use | Example |
|---------------|--------|-----|---------|
| لَا | lā | Present negation; commands negation | لَا يَذْهَبُ — he doesn't go |
| لَيْسَ | laysa | "is not" (negates nominal sentences) | لَيْسَ كِتَابًا — it is not a book |
| لَم | lam | Past negation (with jussive mood) | لَم يَكْتُبْ — he did not write |
| لَن | lan | Future negation (with subjunctive) | لَن يَذْهَبَ — he will not go |
| مَا | mā | Past negation (alternative; less common in MSA) | مَا كَتَبَ — he did not write |

### Laysa — "Is Not" (لَيْسَ)

Laysa conjugates like a past tense verb but has present meaning:

| Person | Arabic |
|--------|--------|
| He | لَيْسَ |
| She | لَيْسَتْ |
| You (m) | لَسْتَ |
| You (f) | لَسْتِ |
| I | لَسْتُ |
| They (m. pl) | لَيْسُوا |
| We | لَسْنَا |

**Examples:**
- هُوَ لَيْسَ طَبِيبًا — He is not a doctor
- لَسْتُ هُنَا — I am not here
- هَذَا لَيْسَ صَحِيحًا — This is not correct

---

## 8. Conjunctions (حُرُوف العَطْف والرَّبْط)

| Conjunction | Arabic | Use | Example |
|-------------|--------|-----|---------|
| And | وَ | joins nouns, clauses | مُحَمَّدٌ وَأَحْمَدُ — Muhammad and Ahmad |
| But | لَكِن / لَكِنَّ | contrast | صَغِيرٌ لَكِنَّهُ ذَكِيٌّ — small but intelligent |
| Because | لِأَنَّ | reason | أَدْرُسُ لِأَنَّنِي أُرِيدُ أَنْ أَنْجَح — I study because I want to succeed |
| So / Therefore | إِذَنْ / فَـ | result | دَرَسَ فَنَجَحَ — He studied, so he passed |
| If | إِذَا | conditional | إِذَا دَرَسْتَ نَجَحْتَ — If you study, you succeed |
| Or | أَوْ | alternative | قَهْوَة أَوْ شَاي — coffee or tea |
| Then | ثُمَّ | sequence | أَكَلَ ثُمَّ نَامَ — He ate then slept |
| However | غَيْرَ أَنَّ | concession | — |

---

## 9. Verb Forms (أوزان الفعل) — Forms I–X Overview

Arabic verbs are organised into 10 primary patterns (wazn, plural awzān). Each form adds a specific semantic nuance:

| Form | Pattern | Meaning added | Example |
|------|---------|---------------|---------|
| I | فَعَلَ / يَفْعَلُ | Basic action | كَتَبَ — to write |
| II | فَعَّلَ / يُفَعِّلُ | Intensification or causation | عَلَّمَ — to teach (cause to know) |
| III | فَاعَلَ / يُفَاعِلُ | Reciprocal action (between two) | كَاتَبَ — to correspond with |
| IV | أَفْعَلَ / يُفْعِلُ | Causative | أَخْرَجَ — to cause to exit (produce) |
| V | تَفَعَّلَ / يَتَفَعَّلُ | Reflexive of Form II | تَعَلَّمَ — to learn (for oneself) |
| VI | تَفَاعَلَ / يَتَفَاعَلُ | Reciprocal of Form III | تَكَاتَبَ — to correspond with each other |
| VII | اِنْفَعَلَ / يَنْفَعِلُ | Passive/reflexive | اِنْكَسَرَ — to be broken |
| VIII | اِفْتَعَلَ / يَفْتَعِلُ | Reflexive/resultative | اِجْتَمَعَ — to gather (together) |
| IX | اِفْعَلَّ / يَفْعَلُّ | Colours and defects | اِحْمَرَّ — to become red |
| X | اِسْتَفْعَلَ / يَسْتَفْعِلُ | Seeking/requesting | اِسْتَغْفَرَ — to seek forgiveness |

### Form Groups You'll Encounter Most

**Form I → Form II → Form V chain (from root ع-ل-م):**
- Form I: عَلِمَ — he knew
- Form II: عَلَّمَ — he taught (caused to know)
- Form V: تَعَلَّمَ — he learned (learned for himself)

**Form I → Form IV chain (from root خ-ر-ج):**
- Form I: خَرَجَ — he exited
- Form IV: أَخْرَجَ — he produced / made exit

---

## 10. Common Expressions (التعبيرات الشائعة)

| Arabic | Transliteration | English | Urdu |
|--------|-----------------|---------|------|
| بِإِذْنِ اللّٰه | bi-idhni llāh | With God's permission | اللہ کی اجازت سے |
| مَاشَاءَ اللّٰه | māshāʾallāh | What God has willed (admiration) | ماشاء اللہ |
| الحَمْدُ لِلّٰه | al-ḥamdu lillāh | Praise be to God | الحمد للہ |
| إِنْ شَاءَ اللّٰه | in shāʾa llāh | If God wills | ان شاء اللہ |
| تَوَكَّلْتُ عَلَى اللّٰه | tawakkaltu ʿalā llāh | I put my trust in God | میں نے اللہ پر بھروسہ کیا |
| جَزَاكَ اللّٰهُ خَيْرًا | jazāka llāhu khayran | May God reward you | اللہ آپ کو جزا دے |
| بَارَكَ اللّٰهُ فِيكَ | bāraka llāhu fīk | May God bless you | اللہ آپ میں برکت دے |
| اللّٰهُ أَكْبَر | allāhu akbar | God is greatest | اللہ اکبر |
| لَا إِلٰهَ إِلَّا اللّٰه | lā ilāha illā llāh | There is no god but God | لا الٰہ الا اللہ |
| سُبْحَانَ اللّٰه | subḥāna llāh | Glory be to God | سبحان اللہ |

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;" markdown="1">

# ماڈیول ۵ — القواعد المتوسطة (درمیانی قواعد)

## ۱. ماضی کا فعل (الماضي)

ماضی کا فعل مکمل ہو چکے کاموں کو بیان کرتا ہے۔ بنیادی شکل **تیسری مفرد مذکر** ہے — یہی لغت میں ملتی ہے۔

### نمونہ: كَتَبَ (لکھنا)

| صیغہ | عربی | اردو |
|------|------|------|
| وہ (م) | كَتَبَ | اس نے لکھا |
| وہ (ف) | كَتَبَتْ | اس نے لکھا |
| تم (م) | كَتَبْتَ | تم نے لکھا |
| تم (ف) | كَتَبْتِ | تم نے لکھا |
| میں | كَتَبْتُ | میں نے لکھا |
| وہ (جمع م) | كَتَبُوا | انہوں نے لکھا |
| ہم | كَتَبْنَا | ہم نے لکھا |

---

## ۲. مضارع کا فعل — حال/مستقبل (المضارع)

مضارع حال اور مستقبل دونوں کو بیان کرتا ہے۔ **سابقہ اور لاحقہ** لگا کر بناتے ہیں۔

### نمونہ: يَكْتُبُ (لکھنا — حال)

| صیغہ | عربی | اردو |
|------|------|------|
| وہ (م) | يَكْتُبُ | وہ لکھتا ہے |
| وہ (ف) | تَكْتُبُ | وہ لکھتی ہے |
| تم (م) | تَكْتُبُ | تم لکھتے ہو |
| میں | أَكْتُبُ | میں لکھتا ہوں |
| ہم | نَكْتُبُ | ہم لکھتے ہیں |
| وہ (جمع م) | يَكْتُبُونَ | وہ لکھتے ہیں |

### مستقبل

- **سَـ** + فعل: سَيَكْتُبُ = وہ لکھے گا
- **سَوْفَ** + فعل: سَوْفَ يَكْتُبُ = یقیناً لکھے گا

---

## ۳. جمع تکسیر کے نمونے

جمع تکسیر عربی کا سب سے مشکل حصہ ہے — اندرونی حروف بدل جاتے ہیں:

### اہم جمعیں — یاد کریں

| واحد | جمع | اردو |
|------|-----|------|
| كِتَاب | كُتُب | کتابیں |
| بَيْت | بُيُوت | گھر |
| قَلْب | قُلُوب | دل |
| يَوْم | أَيَّام | دن |
| رَجُل | رِجَال | مرد |
| مَسْجِد | مَسَاجِد | مساجد |
| صَدِيق | أَصْدِقَاء | دوست |
| طَبِيب | أَطِبَّاء | ڈاکٹر |
| شَجَرَة | أَشْجَار | درخت |
| جَبَل | جِبَال | پہاڑ |
| بَحْر | بِحَار | سمندر |
| نَهْر | أَنْهُر | دریا |

---

## ۴. اعراب — اختصار

عربی میں تین حالتیں ہیں:

| حالت | نشان | استعمال |
|------|------|---------|
| رفع (nominative) | ـُ (ضمہ) | فاعل / مبتدا |
| نصب (accusative) | ـَ (فتحہ) | مفعول |
| جر (genitive) | ـِ (کسرہ) | حرف جر کے بعد؛ مضاف الیہ |

---

## ۵. اضافت (ملکیت کا اظہار)

**اضافت** عربی میں ملکیت کا بنیادی طریقہ ہے۔

**قانون:** پہلا اسم + دوسرا اسم (مضاف الیہ — جر میں)

| عربی | اردو |
|------|------|
| كِتَابُ الطَّالِبِ | طالب علم کی کتاب |
| بَيْتُ الأُسْتَاذِ | استاد کا گھر |
| بَابُ المَسْجِدِ | مسجد کا دروازہ |
| كَلَامُ اللّٰهِ | اللہ کا کلام |

### ضمائر کے ساتھ اضافت

| لاحقہ | معنی | مثال |
|-------|------|------|
| ـِي | میرا | كِتَابِي (میری کتاب) |
| ـُكَ | تمہارا (م) | كِتَابُكَ |
| ـُه | اس کا (م) | كِتَابُه |
| ـُهَا | اس کی (ف) | كِتَابُهَا |
| ـُنَا | ہمارا | كِتَابُنَا |

---

## ۶. صفت کی مطابقت

عربی صفت چار چیزوں میں اسم کے مطابق ہوتی ہے:
۱۔ جنس ۲۔ تعداد ۳۔ معرفہ/نکرہ ۴۔ اعراب

**غیر انسانی جمع کے ساتھ:** صفت **مفرد مؤنث** ہوتی ہے
- الكُتُبُ الجَدِيدَةُ — نئی کتابیں (جدیدة — مفرد مؤنث، کتب جمع کے ساتھ)
- السَّيَّارَاتُ الجَمِيلَةُ — خوبصورت گاڑیاں

---

## ۷. نفی (انکار)

| نفی | استعمال | مثال |
|-----|---------|------|
| لَا | حال | لَا يَذْهَبُ — وہ نہیں جاتا |
| لَيْسَ | ہے/نہیں | لَيْسَ طَبِيبًا — وہ ڈاکٹر نہیں |
| لَم | ماضی | لَم يَكْتُبْ — اس نے نہیں لکھا |
| لَن | مستقبل | لَن يَذْهَبَ — وہ نہیں جائے گا |

---

## ۸. حروف ربط

| عربی | اردو |
|------|------|
| وَ | اور |
| لَكِن | لیکن |
| لِأَنَّ | کیونکہ |
| إِذَنْ / فَـ | تو / اس لیے |
| إِذَا | اگر |
| أَوْ | یا |
| ثُمَّ | پھر |

---

## ۹. فعل کے دس أوزان

| وزن | نمونہ | اضافی معنی | مثال |
|-----|-------|-----------|------|
| I | فَعَلَ | بنیادی فعل | كَتَبَ (لکھا) |
| II | فَعَّلَ | تشدید/تعلیم | عَلَّمَ (سکھایا) |
| III | فَاعَلَ | دو طرفہ | كَاتَبَ (خط لکھا) |
| IV | أَفْعَلَ | متعدی | أَخْرَجَ (نکالا) |
| V | تَفَعَّلَ | II کا لازمی | تَعَلَّمَ (سیکھا) |
| VI | تَفَاعَلَ | III کا دو طرفہ | تَكَاتَبَ (خط و کتابت کی) |
| VII | اِنْفَعَلَ | مجہول | اِنْكَسَرَ (ٹوٹ گیا) |
| VIII | اِفْتَعَلَ | لازمی/اجتماعی | اِجْتَمَعَ (اکٹھے ہوئے) |
| X | اِسْتَفْعَلَ | طلب کرنا | اِسْتَغْفَرَ (مغفرت مانگی) |

---

## ۱۰. عام دینی تعبیرات

| عربی | اردو |
|------|------|
| بِإِذْنِ اللّٰه | اللہ کی اجازت سے |
| مَاشَاءَ اللّٰه | ماشاء اللہ |
| الحَمْدُ لِلّٰه | الحمد للہ |
| إِنْ شَاءَ اللّٰه | ان شاء اللہ |
| جَزَاكَ اللّٰهُ خَيْرًا | اللہ آپ کو جزا دے |
| اللّٰهُ أَكْبَر | اللہ اکبر |
| سُبْحَانَ اللّٰه | سبحان اللہ |
| لَا إِلٰهَ إِلَّا اللّٰه | لا الٰہ الا اللہ |

</div>
