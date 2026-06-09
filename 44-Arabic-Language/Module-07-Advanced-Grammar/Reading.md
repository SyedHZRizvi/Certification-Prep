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

# Module 7 — القواعد المتقدمة (Advanced Grammar)

## Introduction

Advanced Arabic grammar is where many learners plateau. The systems here — dual forms, sound and broken plural verb agreement, all ten verb forms with their derivations, and the irregular "hollow" and "defective" verb classes — separate intermediate speakers from advanced ones. This module provides the full framework needed to read authentic Arabic texts.

---

## 1. The Dual (المُثَنَّى — al-muthannā)

Arabic has a **grammatical dual** for exactly two items. It is formed by adding suffixes to the singular noun.

### Forming the Dual

| Situation | Suffix | Example |
|-----------|--------|---------|
| Masculine noun (nominative) | ـَانِ (-āni) | كِتَابَانِ (two books) |
| Masculine noun (accusative/genitive) | ـَيْنِ (-ayni) | كِتَابَيْنِ (two books) |
| Feminine noun (nominative) | remove ة → add تَانِ | مَدِينَتَانِ (two cities) |
| Feminine noun (acc./gen.) | remove ة → add تَيْنِ | مَدِينَتَيْنِ (two cities) |

### Dual Examples in Context

| Arabic | Transliteration | English |
|--------|-----------------|---------|
| عِنْدِي كِتَابَانِ | ʿindī kitābāni | I have two books |
| رَأَيْتُ وَلَدَيْنِ | raʾaytu waladayni | I saw two boys |
| ذَهَبَ رَجُلَانِ | dhahaba rajulāni | Two men went |
| فِي المَدِينَتَيْنِ | fī l-madīnatayni | In the two cities |
| البَيْتَانِ جَمِيلَانِ | al-baytāni jamīlāni | The two houses are beautiful |

> **Key rule:** The dual marker **drops the نِ** when the noun enters an iḍāfa construction: كِتَابَا الطَّالِب (the two books of the student) — not كِتَابَانِ.

### Dual Pronouns and Verbs

The dual also appears in pronouns and verb conjugation:

| Form | Arabic | Transliteration | Meaning |
|------|--------|-----------------|---------|
| Pronoun | هُمَا | humā | they two (m. or f.) |
| Past verb | كَتَبَا | katabā | they two wrote |
| Present verb | يَكْتُبَانِ | yaktubāni | they two write |

---

## 2. Sound Plural Verb Agreement (المطابقة الفعلية)

One of the most important B2 rules: **verb-subject agreement** when the subject follows the verb differs from when the subject precedes it.

### The Core Rule

| Word order | Rule | Example |
|------------|------|---------|
| Verb BEFORE subject | Verb is **singular** (regardless of plural subject) | ذَهَبَ الطُّلَّابُ — The students went |
| Verb AFTER subject (predicate) | Verb agrees in **gender AND number** | الطُّلَّابُ ذَهَبُوا — The students went |

### Examples

| Arabic | Transliteration | English | Note |
|--------|-----------------|---------|------|
| حَضَرَ الطُّلَّابُ | ḥaḍara ṭ-ṭullābu | The students attended | Verb first — singular verb |
| الطُّلَّابُ حَضَرُوا | aṭ-ṭullābu ḥaḍarū | The students attended | Subject first — plural verb |
| وَصَلَتِ البَنَاتُ | waṣalati l-banātu | The girls arrived | Verb first, f. subj. → f. sing. verb |
| البَنَاتُ وَصَلْنَ | al-banātu waṣalna | The girls arrived | Subject first → f. pl. verb |

---

## 3. Verb Forms II–X — Full Detail

Module 5 introduced the 10 verb forms. Here we examine each with full conjugation patterns and semantic functions.

### Form II — فَعَّلَ (faʿʿala) — Doubled middle radical

**Function:** Intensification, causation, making something happen

| Root | Form I | Form II | Meaning change |
|------|--------|---------|----------------|
| ع-ل-م | عَلِمَ (to know) | عَلَّمَ (to teach) | cause to know |
| خ-ر-ج | خَرَجَ (to exit) | خَرَّجَ (to graduate) | cause to exit |
| ق-د-م | قَدِمَ (to arrive) | قَدَّمَ (to present/introduce) | bring forward |
| ف-ت-ح | فَتَحَ (to open) | فَتَّحَ (to open wide/repeatedly) | intensify |
| ن-ظ-م | نَظَمَ (to arrange) | نَظَّمَ (to organise) | thorough arrangement |

**Form II Present pattern:** يُفَعِّلُ (yufaʿʿilu)
- يُعَلِّمُ — he teaches
- يُقَدِّمُ — he presents / introduces
- يُنَظِّمُ — he organises

### Form III — فَاعَلَ (fāʿala) — Long ā after first radical

**Function:** Reciprocal action between two parties

| Root | Form III | Meaning |
|------|---------|---------|
| ك-ت-ب | كَاتَبَ | to correspond with |
| ق-ا-ت-ل | قَاتَلَ | to fight (with someone) |
| ع-م-ل | عَامَلَ | to treat / deal with |
| س-ع-د | سَاعَدَ | to help / assist |
| ح-ب-ب | حَابَّ | to be friendly with |

### Form IV — أَفْعَلَ (afʿala) — Hamza prefix

**Function:** Causative (making something happen to someone else)

| Root | Form I | Form IV | Meaning |
|------|--------|---------|---------|
| خ-ر-ج | خَرَجَ (to exit) | أَخْرَجَ (to produce / expel) | cause to exit |
| ع-ل-م | عَلِمَ (to know) | أَعْلَمَ (to inform) | cause to know |
| س-ل-م | سَلِمَ (to be safe) | أَسْلَمَ (to submit / become Muslim) | cause to submit |
| ر-س-ل | — | أَرْسَلَ (to send) | send out |
| ج-ل-س | جَلَسَ (to sit) | أَجْلَسَ (to seat someone) | cause to sit |

### Form V — تَفَعَّلَ (tafaʿʿala) — Reflexive of Form II

**Function:** The action reflected back onto the subject; often "learning for oneself"

| Root | Form II | Form V | Meaning |
|------|---------|--------|---------|
| ع-ل-م | عَلَّمَ (to teach) | تَعَلَّمَ (to learn) | learn for oneself |
| ك-ل-م | كَلَّمَ (to speak to) | تَكَلَّمَ (to speak) | speak for oneself |
| ق-د-م | قَدَّمَ (to present) | تَقَدَّمَ (to advance/apply) | move oneself forward |
| ذ-ك-ر | ذَكَّرَ (to remind) | تَذَكَّرَ (to remember) | recall to oneself |

### Form VIII — اِفْتَعَلَ (iftaʿala) — ت inserted after first radical

**Function:** Reflexive or resultative actions; often has passive-ish nuance

| Root | Form I | Form VIII | Meaning |
|------|--------|-----------|---------|
| ج-م-ع | جَمَعَ (to gather/collect) | اِجْتَمَعَ (to convene) | gather together |
| ك-ت-ب | كَتَبَ (to write) | اِكْتَتَبَ (to subscribe) | write for oneself |
| خ-ت-ر | — | اِخْتَارَ (to choose) | choose for oneself |
| ع-م-ل | عَمِلَ (to work) | اِعْتَمَلَ — rarely used | — |
| ف-ق-ر | — | اِفْتَقَرَ (to be in need) | become poor |

### Form X — اِسْتَفْعَلَ (istafʿala) — استـ prefix

**Function:** Seeking, requesting, or deeming

| Root | Basic meaning | Form X | Meaning |
|------|--------------|--------|---------|
| غ-ف-ر | forgiveness | اِسْتَغْفَرَ | to seek forgiveness |
| ع-م-ل | work | اِسْتَعْمَلَ | to use / employ |
| ف-س-ر | explanation | اِسْتَفْسَرَ | to enquire |
| ق-ب-ل | receiving | اِسْتَقْبَلَ | to receive/welcome |
| ط-ع | obedience | اِسْتَطَاعَ | to be able to |

---

## 4. Hollow Verbs (الأفعال الجوفاء)

Hollow verbs have a **long vowel (و or ي) as the middle radical**. This root letter disappears in certain conjugations.

### Type 1: Waw-middle (و) — e.g., قَالَ (to say), كَانَ (to be), نَامَ (to sleep)

| Person | Past | Present |
|--------|------|---------|
| He | قَالَ | يَقُولُ |
| She | قَالَتْ | تَقُولُ |
| I | قُلْتُ | أَقُولُ |
| They (m. pl) | قَالُوا | يَقُولُونَ |
| We | قُلْنَا | نَقُولُ |

> **Pattern:** In the past tense, the و collapses: قُلْتُ (not *قَوَلْتُ). In the present, it becomes و in the stem: يَقُولُ.

### Type 2: Yā-middle (ي) — e.g., بَاعَ (to sell), سَارَ (to travel), جَاءَ (to come)

| Person | Past | Present |
|--------|------|---------|
| He | بَاعَ | يَبِيعُ |
| She | بَاعَتْ | تَبِيعُ |
| I | بِعْتُ | أَبِيعُ |
| They (m. pl) | بَاعُوا | يَبِيعُونَ |

---

## 5. Defective Verbs (الأفعال الناقصة)

Defective verbs have **و or ي as the FINAL radical**. The ending behaves irregularly.

### Common Defective Verbs

| Verb | Transliteration | Meaning | Type |
|------|-----------------|---------|------|
| دَعَا | daʿā | to call / invite | yā-final |
| مَشَى | mashā | to walk | yā-final |
| نَسِيَ | nasiya | to forget | yā-final |
| رَجَا | rajā | to hope | yā-final |
| بَكَى | bakā | to cry | yā-final |

### Conjugation of مَشَى (to walk)

| Person | Past | Present |
|--------|------|---------|
| He | مَشَى | يَمْشِي |
| She | مَشَتْ | تَمْشِي |
| I | مَشَيْتُ | أَمْشِي |
| They (m. pl) | مَشَوْا | يَمْشُونَ |
| We | مَشَيْنَا | نَمْشِي |

---

## 6. The Verb كَانَ (kāna — "was/to be") and Its Sisters

كَانَ and its sister verbs (أَفْعَال النَّاقِصَة — verb-like words) take their predicate in the **accusative case**:

| Verb | Meaning | Example |
|------|---------|---------|
| كَانَ | was | كَانَ طَالِبًا — He was a student |
| أَصْبَحَ | became (morning context) | أَصْبَحَ مُدِيرًا — He became a manager |
| صَارَ | became | صَارَ كَبِيرًا — He became big |
| ظَلَّ | remained | ظَلَّ صَامِتًا — He remained silent |
| بَاتَ | spent the night | بَاتَ حَزِينًا — He spent the night sad |
| مَا زَالَ | still is | مَا زَالَ يَعْمَلُ — He is still working |

---

## 7. Sample Dialogue: Using Advanced Grammar (حوار متقدم)

**Scene:** Two colleagues discuss a delayed project.

---

**حَسَن:** أَيْنَ اجْتَمَعَ المُدِيرَانِ اليَوْم؟

*Ayna ijtamaʿa l-mudīrāni l-yawm?*

**Hassan:** Where did the two managers meet today?

**حسن:** آج دونوں منیجر کہاں ملے؟

---

**لَيْلَى:** اجْتَمَعَا فِي مَكْتَبِ الرَّئِيسِ. تَكَلَّمَا عَنِ المَشْرُوعِ المُؤَجَّل.

*Ijtamaʿā fī maktabi r-raʾīs. Takallamā ʿani l-mashrūʿi l-muʾajjal.*

**Layla:** They two met in the president's office. They discussed the delayed project.

**لیلی:** وہ دونوں صدر کے دفتر میں ملے۔ انہوں نے ملتوی منصوبے کے بارے میں بات کی۔

---

**حَسَن:** هَل تَعَلَّمُوا مِنَ الأَخْطَاءِ السَّابِقَة؟

*Hal taʿallamū min al-akhṭāʾi s-sābiqa?*

**Hassan:** Have they learned from the previous mistakes?

**حسن:** کیا انہوں نے پچھلی غلطیوں سے سیکھا؟

---

**لَيْلَى:** إِنْ شَاءَ اللّٰه. كَانَ المَشْرُوعُ صَعْبًا لَكِنَّهُ صَارَ أَسْهَل.

*In shāʾa llāh. Kāna l-mashrūʿu ṣaʿban lākinnahū ṣāra ashal.*

**Layla:** God willing. The project was difficult but it has become easier.

**لیلی:** ان شاء اللہ۔ منصوبہ مشکل تھا لیکن آسان ہو گیا ہے۔

---

## Summary

In this module you mastered:
- The grammatical dual: formation, pronouns, and verb agreement
- Verb-subject agreement rules based on word order
- Detailed functions and examples for Forms II, III, IV, V, VIII, and X
- Hollow verbs (و and ي as middle radical)
- Defective verbs (و and ي as final radical)
- كَانَ and its sisters — predicate in the accusative

## Next Steps

Proceed to **Module 8 — اللغة المهنية (Business & Professional Arabic)** for corporate vocabulary, formal register, and MSA media language.

## Further Reading

- *A Reference Grammar of Modern Standard Arabic* by Ryding — the definitive MSA grammar
- *Arabic Verbs Made Easy* by Mourad Diouri
- Hans Wehr Arabic-English Dictionary — essential for root-based vocabulary

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;" markdown="1">

# ماڈیول ۷ — القواعد المتقدمة (اعلی قواعد)

## تعارف

یہ ماڈیول اعلی عربی گرامر پر توجہ دیتا ہے — تثنیہ، جمع کے ساتھ فعل کی مطابقت، تمام دس أوزان کی تفصیل، اور ناقص/اجوف افعال۔

---

## ۱. تثنیہ (المُثَنَّى)

دو چیزوں کے لیے عربی میں تثنیہ استعمال ہوتا ہے:

| حالت | لاحقہ | مثال |
|------|-------|------|
| رفع | ـَانِ | كِتَابَانِ (دو کتابیں) |
| نصب/جر | ـَيْنِ | كِتَابَيْنِ |
| مؤنث رفع | تَانِ | مَدِينَتَانِ (دو شہر) |
| مؤنث نصب/جر | تَيْنِ | مَدِينَتَيْنِ |

**اہم قانون:** اضافت میں نون گر جاتا ہے: كِتَابَا الطَّالِب (طالب کی دو کتابیں)

---

## ۲. فعل اور فاعل کی مطابقت

| ترتیب | قانون | مثال |
|-------|-------|------|
| فعل پہلے | فعل واحد ہوگا | ذَهَبَ الطُّلَّابُ |
| فاعل پہلے | فعل کی مطابقت | الطُّلَّابُ ذَهَبُوا |

---

## ۳. باب دوم تا دہم — تفصیل

### باب دوم (فَعَّلَ) — تشدید کے ساتھ

تعلیم/تشدید کا مفہوم:
- عَلَّمَ (سکھایا) = عَلِمَ (جانا) کا متعدی
- قَدَّمَ (پیش کیا) = آگے لانا
- نَظَّمَ (منظم کیا)

### باب سوم (فَاعَلَ) — دو طرفہ

- كَاتَبَ (خط و کتابت کی)
- سَاعَدَ (مدد کی)
- عَامَلَ (معاملہ کیا)

### باب پنجم (تَفَعَّلَ) — دوم کا لازمی

- تَعَلَّمَ (سیکھا — عَلَّمَ کا لازمی)
- تَكَلَّمَ (بولا)
- تَذَكَّرَ (یاد کیا)

### باب ہشتم (اِفْتَعَلَ) — نتیجہ خیز

- اِجْتَمَعَ (اکٹھے ہوئے)
- اِخْتَارَ (چنا)

### باب دہم (اِسْتَفْعَلَ) — طلب کرنا

- اِسْتَغْفَرَ (مغفرت مانگی)
- اِسْتَعْمَلَ (استعمال کیا)
- اِسْتَطَاعَ (طاقت رکھی)

---

## ۴. اجوف افعال (وسط میں و یا ی)

| صیغہ | قَالَ (کہنا) | بَاعَ (بیچنا) |
|------|-------------|--------------|
| وہ (م) | قَالَ / يَقُولُ | بَاعَ / يَبِيعُ |
| میں | قُلْتُ / أَقُولُ | بِعْتُ / أَبِيعُ |
| جمع م | قَالُوا / يَقُولُونَ | بَاعُوا / يَبِيعُونَ |

---

## ۵. ناقص افعال (آخر میں و یا ی)

| صیغہ | مَشَى (چلنا) | دَعَا (بلانا) |
|------|-------------|--------------|
| وہ (م) | مَشَى / يَمْشِي | دَعَا / يَدْعُو |
| میں | مَشَيْتُ / أَمْشِي | دَعَوْتُ / أَدْعُو |
| جمع م | مَشَوْا / يَمْشُونَ | دَعَوْا / يَدْعُونَ |

---

## ۶. كَانَ اور اس کی بہنیں

یہ فعل اپنی خبر کو نصب میں لے آتے ہیں:

| فعل | مطلب | مثال |
|-----|------|------|
| كَانَ | تھا | كَانَ طَالِبًا |
| أَصْبَحَ | ہو گیا | أَصْبَحَ مُدِيرًا |
| صَارَ | بن گیا | صَارَ كَبِيرًا |
| مَا زَالَ | ابھی بھی ہے | مَا زَالَ يَعْمَلُ |

</div>
