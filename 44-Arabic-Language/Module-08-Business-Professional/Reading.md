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

<div class="lang-en" markdown="1">

# Module 8 — اللغة المهنية (Business & Professional Arabic)

## Introduction

Imagine reading Al-Jazeera, drafting a corporate memo in Arabic, or navigating a board meeting in Riyadh or Dubai. This module covers the language of power: **formal register MSA**, the vocabulary of corporations and governance, and the specific style of Arabic media and journalism. By the end, you will be able to read business newspapers, write professional reports, and follow Arabic broadcast news.

---

## 1. Corporate and Governance Vocabulary (المفردات المؤسسية)

### Company Structure Terms

| Arabic | Transliteration | English | اردو |
|--------|-----------------|---------|------|
| مَجْلِس الإِدَارَة | majlisu l-idāra | Board of Directors | بورڈ آف ڈائریکٹرز |
| رَئِيس مَجْلِس الإِدَارَة | raʾīsu majlisi l-idāra | Chairman of the Board | چیئرمین بورڈ |
| الرَّئِيس التَّنْفِيذِي | ar-raʾīs at-tanfīdhī | CEO / Executive Director | سی ای او |
| مُدِير عَام | mudīr ʿāmm | General Manager | جنرل منیجر |
| قِسْم | qism | department | شعبہ |
| إِدَارَة | idāra | administration / management | انتظامیہ / ادارہ |
| مُوَظَّف | muwaẓẓaf | employee | ملازم |
| شَرِيك | sharīk | partner | شریک |
| مُسَاهِم | musāhim | shareholder | حصہ دار |
| رَأْس المَال | raʾsu l-māl | capital / investment | سرمایہ |
| حِصَّة | ḥiṣṣa | share / portion | حصہ |
| سُوق المَال | sūqu l-māl | stock market / capital market | اسٹاک مارکیٹ |

> **Cognate note:** إِدَارَة (idāra — administration) is used directly in Urdu as ادارہ (idāra), meaning organisation or institution. شَرِيك (sharīk — partner) is used in Urdu as شریک (sharīk).

### Finance and Banking (المالية والمصرفية)

| Arabic | Transliteration | English | اردو |
|--------|-----------------|---------|------|
| بَنْك مَرْكَزِي | bank markazī | central bank | مرکزی بینک |
| سِعْر الصَّرْف | siʿru ṣ-ṣarf | exchange rate | تبادلہ شرح |
| فَائِدَة | fāʾida | interest / benefit | سود / فائدہ |
| قَرْض | qarḍ | loan | قرضہ |
| إِيرَاد | īrād | revenue / income | آمدنی |
| مَصْرُوف | maṣrūf | expenditure | اخراجات |
| مِيزَانِيَّة عُمُومِيَّة | mīzāniyya ʿumūmiyya | balance sheet | بیلنس شیٹ |
| تَدَفُّق نَقْدِي | tadaffuq naqdī | cash flow | نقدی بہاؤ |
| دَيْن | dayn | debt | قرض / دَین |
| أَرْبَاح | arbāḥ | profits | منافع |
| خَسَائِر | khasāʾir | losses | نقصانات |
| اسْتِثْمَار | istithmār | investment | سرمایہ کاری |

---

## 2. Formal MSA Register Features

MSA in professional and media contexts uses specific linguistic features that differ from colloquial Arabic and even from textbook MSA.

### Passive Voice (المَبْنِي لِلْمَجْهُول)

The passive voice is extremely common in formal Arabic, especially news and official communications.

**Formation:** Change the vowel pattern of the verb:
- Active: فَعَلَ → Passive: فُعِلَ (past)
- Active: يَفْعَلُ → Passive: يُفْعَلُ (present)

| Active | Passive | English |
|--------|---------|---------|
| كَتَبَ (he wrote) | كُتِبَ (it was written) | written |
| أَرْسَلَ (he sent) | أُرْسِلَ (it was sent) | sent |
| وَقَّعَ (he signed) | وُقِّعَ (it was signed) | signed |
| نَشَرَ (he published) | نُشِرَ (it was published) | published |
| أَعْلَنَ (he announced) | أُعْلِنَ (it was announced) | announced |

### Common Passive Constructions in News Arabic

- وُقِّعَتِ الاتِّفَاقِيَّةُ بَيْنَ البَلَدَيْن — The agreement was signed between the two countries
- أُعْلِنَ عَنْ إِطْلَاقِ المَشْرُوع الجَدِيد — The launch of the new project was announced
- نُشِرَ التَّقْرِيرُ السَّنَوِي — The annual report was published

---

## 3. MSA Media Language (لغة الإعلام)

### News Headlines — Structure

Arabic news headlines often omit the verb entirely, using a nominal sentence pattern:

| Headline | Literal | Meaning |
|---------|---------|---------|
| اجْتِمَاعٌ طَارِئٌ لِمَجْلِسِ الأَمْن | An emergency meeting of the Security Council | Security Council holds emergency meeting |
| ارْتِفَاعٌ فِي أَسْعَارِ النَّفْط | A rise in oil prices | Oil prices rise |
| مُفَاوَضَاتٌ مُكَثَّفَةٌ بَيْنَ الطَّرَفَيْن | Intensive negotiations between the two parties | — |

### Key Journalism Vocabulary

| Arabic | Transliteration | English | اردو |
|--------|-----------------|---------|------|
| خَبَر | khabar | news / report | خبر |
| تَقْرِير | taqrīr | report | رپورٹ / تقریر |
| مُرَاسِل | murāsil | correspondent | نامہ نگار |
| مُذِيع | mudhīʿ | news anchor | نیوز اینکر |
| مَصْدَر | maṣdar | source | ماخذ / مصدر |
| مُؤْتَمَر صَحَفِي | muʾtamar ṣaḥafī | press conference | پریس کانفرنس |
| تَصْرِيح | taṣrīḥ | statement / declaration | بیان |
| حَادِثَة | ḥāditha | incident | حادثہ |
| أَزْمَة | azma | crisis | بحران |
| اتِّفَاقِيَّة | ittifāqiyya | agreement / accord | معاہدہ |
| مُعَاهَدَة | muʿāhada | treaty | معاہدہ |
| قِمَّة | qimma | summit | سربراہی اجلاس |

> **Urdu connection:** خَبَر (khabar — news) is directly used in Urdu as خبر. مَصْدَر (maṣdar — source) is also a grammar term in both Arabic and Urdu (verbal noun). تَصْرِيح (taṣrīḥ) is used in Urdu as تصریح (declaration/statement).

---

## 4. Reading an Arabic News Article

Here is a sample news segment in the style of Al-Jazeera, followed by analysis:

**عَقَدَ مَجْلِسُ الأَمْنِ الدَّوْلِيُّ جَلْسَةً طَارِئَةً أَمْسِ لِمُنَاقَشَةِ الأَزْمَةِ الاقْتِصَادِيَّةِ فِي المِنْطَقَة. وَأَفَادَتْ مَصَادِرُ دِبْلُومَاسِيَّةٌ بِأَنَّ المُفَاوَضَاتِ لَا تَزَالُ جَارِيَة.**

*ʿAqada majlisu l-amni d-duwaliyyu jalsan ṭāriʾatan amsi li-munāqashati l-azmati l-iqtiṣādiyyati fī l-minṭaqa. Wa-afādat maṣādiru diblūmāsiyyatun bi-anna l-mufāwaḍāti lā tazālu jāriya.*

**Translation:** The UN Security Council held an emergency session yesterday to discuss the economic crisis in the region. Diplomatic sources indicated that negotiations are still ongoing.

**Grammar notes:**
- عَقَدَ (held) — Form I verb, verb-first → singular even though مَجْلِس is a collective body
- لِمُنَاقَشَةِ — the لِـ + verbal noun (maṣdar) construction = "in order to discuss"
- لَا تَزَالُ جَارِيَة — "still ongoing" using the kāna-sister لَا تَزَالُ

---

## 5. Corporate Arabic in Action — Sample Memo (مذكرة رسمية)

**بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ**

**مِن:** إِدَارَة الشُّؤُون المَالِيَّة

**إِلَى:** جَمِيع أَقْسَام الشَّرِكَة

**المَوْضُوع:** مِيزَانِيَّة الرُّبْعِ الثَّالِث

---

يَسُرُّنَا إِبْلَاغُكُم بِأَنَّ مِيزَانِيَّةَ الرُّبْعِ الثَّالِثِ قَدْ اعْتُمِدَت مِنْ قِبَلِ مَجْلِسِ الإِدَارَة. وَتُشِيرُ الأَرْقَامُ إِلَى ارْتِفَاعٍ فِي الإِيرَادَاتِ بِنِسْبَةِ خَمْسَةَ عَشَرَ بِالمِائَة مُقَارَنَةً بِالرُّبْعِ السَّابِق.

---

*Translation:*

**From:** Finance Administration Department

**To:** All company departments

**Subject:** Third Quarter Budget

We are pleased to inform you that the third quarter budget has been approved by the Board of Directors. The figures indicate a 15% increase in revenues compared to the previous quarter.

---

## 6. Formal Discourse Connectors (أدوات الربط الرسمية)

| Arabic | Transliteration | Function |
|--------|-----------------|---------|
| وَبِنَاءً عَلَيْه | wa-binʾan ʿalayhi | accordingly / based on this |
| فِيمَا يَتَعَلَّقُ بـ | fīmā yataʿallaqu bi- | regarding / with respect to |
| وَفِي هَذَا السِّيَاق | wa-fī hādhā s-siyāq | in this context |
| وَمِنَ الجَدِيرِ بِالذِّكْرِ | wa-min al-jadīri bidh-dhikr | it is worth noting |
| وَتَجْدُرُ الإِشَارَةُ إِلَى | wa-tajduru l-ishāra ilā | it is worth pointing out |
| وَخُلَاصَةُ القَوْل | wa-khulāṣatu l-qawl | in summary |
| وَفِي المَحْصِلَة | wa-fī l-maḥṣila | ultimately / in the final analysis |

---

## 7. Urdu Speaker Advantage — Arabic-Urdu Professional Terms

Many professional terms used in Urdu/Pakistani English are actually direct Arabic borrowings:

| Arabic | Urdu Usage | Meaning |
|--------|-----------|---------|
| إِدَارَة (idāra) | ادارہ (idāra) | organisation / institution |
| تَقْرِير (taqrīr) | تقریر (taqrīr) | speech / report |
| اجْتِمَاع (ijtimāʿ) | اجتماع (ijtimāʿ) | gathering / meeting |
| مَصْدَر (maṣdar) | مصدر (maṣdar) | source; grammatical verbal noun |
| اعْتِرَاض (iʿtirāḍ) | اعتراض (iʿtirāḍ) | objection |
| اسْتِعْفَاء (istiʿfāʾ) | استعفی (istiʿfā) | resignation |
| تَصْوِيت (taṣwīt) | تصویت (taṣwīt) | voting |
| مُعَارَضَة (muʿāraḍa) | معارضہ (muʿāraḍa) | opposition |

---

## Summary

In this module you covered:
- Corporate vocabulary: board, management, shareholding, capital
- Finance and banking terms in Arabic
- How the passive voice works in formal Arabic
- Reading and analysing Arabic news headlines and articles
- Writing a formal corporate memo
- Formal discourse connectors for professional writing
- Arabic-Urdu professional term cognates

## Next Steps

Proceed to **Module 9 — الثقافة والإعلام (Culture, Media & Literature)** to explore Arabic poetry, proverbs, classical forms, and the full breadth of Arabic cultural expression.

## Further Reading

- Al-Jazeera Arabic: aljazeera.net (read one article daily)
- BBC Arabic Business section
- *Modern Standard Arabic Grammar* by Elsaid M. Badawi et al. — Oxford University Press

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;" markdown="1">

# ماڈیول ۸ — اللغة المهنية (کاروباری اور پیشہ ورانہ عربی)

## تعارف

الجزیرہ پڑھنا، عربی میں کارپوریٹ میمو لکھنا، یا ریاض و دبئی میں بورڈ میٹنگ میں حصہ لینا — یہ ماڈیول آپ کو یہ تمام مہارتیں دے گا۔ رسمی MSA، کارپوریٹ الفاظ، اور عربی میڈیا کی زبان کو سمجھنا اس ماڈیول کا مقصد ہے۔

---

## ۱. کارپوریٹ الفاظ

| عربی | اردو |
|------|------|
| مَجْلِس الإِدَارَة | بورڈ آف ڈائریکٹرز |
| الرَّئِيس التَّنْفِيذِي | سی ای او |
| إِدَارَة | انتظامیہ / ادارہ |
| مُسَاهِم | حصہ دار |
| رَأْس المَال | سرمایہ |
| حِصَّة | حصہ |
| اسْتِثْمَار | سرمایہ کاری |

> **اردو سے فائدہ:** إِدَارَة (idāra) اردو میں ادارہ ہے۔ شَرِيك (sharīk) اردو میں شریک ہے۔ حِصَّة (ḥiṣṣa) اردو میں حصہ ہے — یہ سب عربی سے براہ راست آئے ہیں۔

---

## ۲. بینکاری اور مالیاتی الفاظ

| عربی | اردو |
|------|------|
| بَنْك مَرْكَزِي | مرکزی بینک |
| قَرْض | قرضہ |
| فَائِدَة | سود / فائدہ |
| إِيرَاد | آمدنی |
| مَصْرُوف | اخراجات |
| دَيْن | قرض |
| أَرْبَاح | منافع |

---

## ۳. مجہول (Passive Voice)

رسمی عربی میں مجہول بہت عام ہے:

**ماضی مجہول:** فَعَلَ → فُعِلَ

| معروف | مجہول | اردو |
|-------|-------|------|
| كَتَبَ | كُتِبَ | لکھا گیا |
| أَرْسَلَ | أُرْسِلَ | بھیجا گیا |
| وَقَّعَ | وُقِّعَ | دستخط ہوا |
| نَشَرَ | نُشِرَ | شائع ہوا |

---

## ۴. میڈیا کے الفاظ

| عربی | اردو |
|------|------|
| خَبَر | خبر |
| تَقْرِير | رپورٹ |
| مُرَاسِل | نامہ نگار |
| مَصْدَر | ماخذ / مصدر |
| أَزْمَة | بحران |
| اتِّفَاقِيَّة | معاہدہ |
| قِمَّة | سربراہی اجلاس |

> خَبَر اردو میں بھی خبر ہے! تَقْرِير اردو میں تقریر (speech) — مطلب مختلف ہے لیکن جڑ ایک ہے۔

---

## ۵. رسمی عربی خبر (نمونہ)

**عَقَدَ مَجْلِسُ الأَمْنِ الدَّوْلِيُّ جَلْسَةً طَارِئَةً أَمْسِ.**

سلامتی کونسل نے کل ایک ہنگامی اجلاس منعقد کیا۔

**Grammar:** عَقَدَ فعل پہلے ہے اس لیے واحد — حالانکہ مَجْلِس ایک ادارہ ہے۔

---

## ۶. رسمی ربط کے الفاظ

| عربی | اردو |
|------|------|
| وَبِنَاءً عَلَيْه | اس کی بنیاد پر |
| وَمِنَ الجَدِيرِ بِالذِّكْرِ | قابل ذکر ہے |
| وَخُلَاصَةُ القَوْل | خلاصہ یہ کہ |
| فِيمَا يَتَعَلَّقُ بـ | کے بارے میں |

---

## ۷. اردو-عربی پیشہ ورانہ مشترک الفاظ

| عربی | اردو استعمال |
|------|-------------|
| إِدَارَة | ادارہ |
| اجْتِمَاع | اجتماع |
| اعْتِرَاض | اعتراض |
| اسْتِعْفَاء | استعفی |
| تَصْوِيت | تصویت |
| مُعَارَضَة | معارضہ |

</div>
