---
title: "Module 11 — Full Quran Reference: Arabic, Translation & Tafseer"
---

<div class="lang-switcher" markdown="0" style="background:linear-gradient(135deg,#064e3b,#065f46);border-radius:12px;padding:1.25rem;margin:0 0 2rem;text-align:center;box-shadow:0 4px 16px rgba(16,185,129,0.3);">
  <p style="color:#d1fae5;font-size:1rem;font-weight:600;margin:0 0 0.85rem;">🌐 Choose your learning language / اپنی زبان منتخب کریں</p>
  <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
    <button id="ls-btn-en" onclick="certHubSetLang('en')" style="padding:0.6rem 1.6rem;border-radius:9px;border:2px solid #34d399;background:#fff;color:#065f46;font-weight:700;font-size:0.95rem;cursor:pointer;">🇬🇧 English</button>
    <button id="ls-btn-ur" onclick="certHubSetLang('ur')" style="padding:0.6rem 1.6rem;border-radius:9px;border:2px solid #34d399;background:#fff;color:#065f46;font-weight:700;font-size:0.95rem;cursor:pointer;">🇵🇰 اردو (Urdu)</button>
  </div>
</div>
<script>
function certHubSetLang(l){try{localStorage.setItem('cert-hub-lang-pref',l);}catch(e){}document.querySelectorAll('.lang-en,.lang-ur').forEach(function(el){el.style.display='none';});document.querySelectorAll('.lang-'+l).forEach(function(el){el.style.display='block';});var be=document.getElementById('ls-btn-en'),bu=document.getElementById('ls-btn-ur');if(be&&bu){be.style.background=l==='en'?'#065f46':'#fff';be.style.color=l==='en'?'#fff':'#065f46';bu.style.background=l==='ur'?'#065f46':'#fff';bu.style.color=l==='ur'?'#fff':'#065f46';}}
(function(){var s='';try{s=localStorage.getItem('cert-hub-lang-pref')||'';}catch(e){}certHubSetLang(s||'en');})();
</script>

<style>
.tf-widget{border:1px solid #d1fae5;border-radius:12px;overflow:hidden;margin:1.5rem 0 2rem;}
.tf-tabs{display:flex;background:#064e3b;}
.tf-tab{flex:1;padding:.65rem 1rem;background:transparent;border:none;color:#a7f3d0;font-weight:700;cursor:pointer;font-size:.9rem;transition:.2s;}
.tf-tab.active{background:#ffffff;color:#064e3b;}
.tf-pane{padding:1.25rem 1.5rem;display:none;background:#fff;line-height:1.75;}
.tf-pane.active{display:block;}
.ayah-arabic{direction:rtl;font-family:'Amiri','Scheherazade New','Traditional Arabic',serif;font-size:2.2em;color:#064e3b;line-height:3;background:#f0fdf4;padding:1rem 1.5rem;border-radius:8px;border-right:4px solid #34d399;margin:.75rem 0;}
.ayah-num{display:inline-block;background:#064e3b;color:#fff;border-radius:50%;min-width:2rem;height:2rem;line-height:2rem;text-align:center;font-size:.85rem;font-weight:700;margin-right:.75rem;font-family:sans-serif;}
.qr-basmala{direction:rtl;text-align:center;font-family:'Amiri','Scheherazade New','Traditional Arabic',serif;font-size:1.9em;color:#065f46;margin:1rem 0;}
.qr-filter{width:100%;padding:.8rem 1.1rem;border:2px solid #a7f3d0;border-radius:10px;font-size:1rem;margin:1rem 0;box-sizing:border-box;}
.qr-index{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:.6rem;margin:0 0 2rem;}
.qr-row{display:flex;align-items:center;gap:.7rem;padding:.7rem .9rem;background:#fff;border:1px solid #d1fae5;border-radius:10px;cursor:pointer;text-align:left;transition:.15s;font-family:inherit;}
.qr-row:hover{border-color:#34d399;box-shadow:0 2px 10px rgba(16,185,129,.18);transform:translateY(-1px);}
.qr-num{background:#064e3b;color:#fff;border-radius:8px;min-width:2.1rem;height:2.1rem;line-height:2.1rem;text-align:center;font-weight:700;font-size:.85rem;flex-shrink:0;}
.qr-names{display:flex;flex-direction:column;min-width:0;flex:1;}
.qr-ar{font-family:'Amiri','Scheherazade New','Traditional Arabic',serif;font-size:1.25rem;color:#064e3b;line-height:1.5;}
.qr-en{font-size:.82rem;color:#475569;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.qr-meta{font-size:.72rem;color:#94a3b8;white-space:nowrap;flex-shrink:0;}
.qr-panel{border:2px solid #a7f3d0;border-radius:14px;padding:1.5rem;margin:1.25rem 0 2rem;background:#fff;min-height:90px;}
.qr-placeholder{color:#64748b;text-align:center;padding:1rem 0;font-size:1.05rem;}
.qr-head{border-bottom:2px solid #f0fdf4;padding-bottom:1rem;margin-bottom:.5rem;}
.qr-head-ar{font-family:'Amiri','Scheherazade New','Traditional Arabic',serif;font-size:2.4em;color:#064e3b;text-align:center;}
.qr-head-meta{text-align:center;color:#64748b;font-size:.95rem;}
.qr-trans-en{margin:.2rem 0 1rem;line-height:1.7;}
.qr-trans-ur{direction:rtl;font-family:'Jameel Noori Nastaleeq','Noto Nastaliq Urdu','Urdu Typesetting',serif;line-height:2.2;font-size:1.1rem;margin:.2rem 0 1rem;}
.qr-links{display:flex;gap:1rem;flex-wrap:wrap;margin-top:1.25rem;}
.qr-links a{display:inline-block;padding:.55rem 1.1rem;border-radius:9px;background:#064e3b;color:#fff;text-decoration:none;font-size:.9rem;font-weight:600;}
.qr-links a:hover{background:#065f46;}
.qr-note{background:#f0fdf4;border-left:4px solid #34d399;border-radius:8px;padding:1rem 1.25rem;margin:1rem 0;line-height:1.75;}
.qr-summary-tag{font-size:.8rem;color:#94a3b8;font-style:italic;margin:.25rem 0 .5rem;}
.qr-loading{text-align:center;color:#065f46;padding:1.5rem 0;font-weight:600;}
.qr-taf-btn{display:inline-flex;align-items:center;gap:.3rem;background:transparent;border:1px solid #a7f3d0;border-radius:6px;padding:3px 10px;font-size:.78rem;color:#064e3b;cursor:pointer;margin-bottom:.4rem;transition:.15s;font-family:inherit;direction:ltr;}
.qr-taf-btn:hover{background:#f0fdf4;border-color:#34d399;}
.qr-taf-drop{display:none;border:1px solid #d1fae5;border-radius:8px;padding:.4rem .5rem;margin-bottom:.6rem;background:#f0fdf4;box-shadow:0 2px 8px rgba(6,95,70,.1);direction:ltr;}
.qr-taf-drop.qr-taf-open{display:block;}
.qr-taf-drop a{display:block;padding:.28rem .5rem;color:#064e3b;text-decoration:none;font-size:.82rem;border-radius:5px;font-weight:600;}
.qr-taf-drop a:hover{background:#d1fae5;}
</style>

<script>
function tf(btn){
  var w=btn.closest('.tf-widget');
  w.querySelectorAll('.tf-tab').forEach(function(t){t.classList.remove('active');});
  w.querySelectorAll('.tf-pane').forEach(function(p){p.classList.remove('active');});
  btn.classList.add('active');
  w.querySelector('.tf-pane[data-pane="'+btn.dataset.tf+'"]').classList.add('active');
}
</script>

<div class="lang-en" markdown="1">

# Module 11 — Full Quran Reference: Arabic, Translation & Tafseer

## 📖 About This Module

This module is the **complete Quran reference** of the course. The clickable index below gives you **all 114 surahs of the Quran** — select any surah and its full text loads instantly:

- Authentic **Arabic text with full harakat** (tashkeel), shown ayah by ayah
- **English translation** by Seyyed Ali Quli Qarai — a phrase-by-phrase rendering widely regarded as one of the most accurate modern scholarly English translations of the Quran
- **Urdu translation** by Maulana Sayyid Zeeshan Haider Jawadi — a renowned scholar of the Indian subcontinent and one of the most respected Urdu translators of the Quran
- An **interactive Tafseer Switcher** (Al-Mizan · Namoona · Tasnim) that appears with the key surahs studied in this course

### How to Use the Reader

1. Scroll to the surah index below (or type in the search box to filter by name or number).
2. Click any surah — the complete Arabic text with translation loads in the reading panel.
3. Use the language buttons at the top of the page to switch the translation between English and Urdu.
4. For the key surahs studied in this course (Al-Fatiha, Ayatul Kursi in Al-Baqarah, Yasin, Al-Mulk, and the short surahs of Juz Amma), the three-tab **Tafseer Switcher** appears below the text — click **Al-Mizan**, **Namoona**, or **Tasnim** to read each scholar's perspective.
5. Every surah also links to its full page on Quran.com for further side-by-side translations.

---

## 🧑‍🏫 About the Translators and Commentators

### English Translation — Seyyed Ali Quli Qarai

Seyyed Ali Quli Qarai produced his phrase-by-phrase English translation of the Quran, published by the Islamic College for Advanced Studies (ICAS Press), London. It preserves the Arabic rhetorical structure wherever English allows and is deeply informed by classical tafseer literature. His rendering of names like **Al-Rahman** as "All-beneficent" and **Al-Rahim** as "All-merciful" reflects careful attention to the theological distinctions in Arabic.

> **📜 Sources, Attribution & Rights.** The Arabic text of the Quran is in the public domain. The English translation on this page is the rendering of **Seyyed Ali Quli Qarai**, and the Urdu translation the rendering of **Maulana Sayyid Zeeshan Haider Jawadi** — reproduced for non-commercial educational study in this free course with full attribution; all rights remain with the respective translators and publishers. The tafseer panels are **original study summaries written for this course**: they condense, in our own words, themes discussed in *Tafsir al-Mizan*, *Tafseer-e-Namoona*, and *Tafsir Tasnim*, and are not verbatim excerpts from those works.

### Urdu Translation — Maulana Sayyid Zeeshan Haider Jawadi

Maulana Sayyid Zeeshan Haider Jawadi was one of the most distinguished Quran scholars of the Indian subcontinent in the twentieth century. His Urdu translation and commentary of the Quran is known for its clarity, precision, and fidelity to classical Arabic. He was deeply versed in the Arabic grammatical and rhetorical sciences and his Urdu rendering has become a standard reference for Urdu-speaking students of the Quran across South Asia.

### The Three Tafseer Sources

| Scholar | Work | Volumes | Approach |
|---------|------|---------|----------|
| Allāmah Sayyid Muhammad Husayn Tabāṭabāī | **Tafsir al-Mizan** (تفسیرالمیزان) | 27 vols | Quranic — interprets the Quran through the Quran; philosophical and mystical depth |
| Allāmah Nāsir Makārem Shīrāzī | **Tafseer-e-Namoona** (تفسیر نمونہ) | 27 vols | Practical, thematic; social and ethical emphasis; accessible to general readers |
| Allāmah ʿAbdullāh Jawādī Āmolī | **Tafsir Tasnim** (تفسیر تسنیم) | 40+ vols | Mystical and philosophical; explores the spiritual station of each verse; the most extensive modern commentary |

</div>

<div class="lang-ur" style="direction:rtl;font-family:'Jameel Noori Nastaleeq','Noto Nastaliq Urdu','Urdu Typesetting',serif;line-height:2.2;font-size:1.1rem" markdown="1">

# ماڈیول ۱۱ — قرآن مجید کا مکمل حوالہ: عربی متن، ترجمہ اور تفسیر

## 📖 اس ماڈیول کے بارے میں

یہ ماڈیول کورس کا **مکمل قرآنی حوالہ** ہے۔ نیچے دی گئی فہرست میں **قرآن مجید کی تمام ۱۱۴ سورتیں** موجود ہیں — کسی بھی سورت پر کلک کریں اور اس کا مکمل متن فوراً سامنے آ جائے گا:

- ہر آیت کا **مکمل تشکیل کے ساتھ** مستند عربی متن
- **اردو ترجمہ**: مولانا سید ذیشان حیدر جوادی — برصغیر کے نامور عالمِ قرآن
- **انگریزی ترجمہ**: سید علی قلی قرائی — جدید علمی انگریزی ترجمہ
- کورس میں پڑھائی گئی اہم سورتوں کے ساتھ **تفسیر سوئچر** (المیزان · نمونہ · تسنیم)

### استعمال کا طریقہ

۱. نیچے سورتوں کی فہرست تک جائیں (یا تلاش کے خانے میں نام یا نمبر لکھیں)۔
۲. کسی بھی سورت پر کلک کریں — مکمل عربی متن مع ترجمہ پڑھنے کے خانے میں آ جائے گا۔
۳. صفحے کے اوپر زبان کے بٹن سے اردو یا انگریزی ترجمہ منتخب کریں۔
۴. کورس کی اہم سورتوں کے نیچے تین ٹیب والا **تفسیر سوئچر** ظاہر ہوگا — **المیزان**، **نمونہ** یا **تسنیم** پر کلک کر کے ہر عالم کی تفسیر پڑھیں۔

---

## 🧑‍🏫 مترجمین اور مفسرین کا تعارف

### اردو ترجمہ — مولانا سید ذیشان حیدر جوادی

مولانا سید ذیشان حیدر جوادی برصغیر پاک و ہند کے بیسویں صدی کے نمایاں ترین عالمِ قرآن تھے۔ ان کا اردو ترجمہ اور تفسیر اپنی وضاحت، دقتِ نظر، اور کلاسیکی عربی سے وفاداری کے لیے مشہور ہے۔

> **📜 مآخذ اور حقوق:** قرآن مجید کا عربی متن عوامی ملکیت ہے۔ اس صفحے پر اردو ترجمہ مولانا سید ذیشان حیدر جوادی کا اور انگریزی ترجمہ سید علی قلی قرائی کا ہے — تمام حقوق متعلقہ مترجمین اور ناشرین کے پاس محفوظ ہیں۔ تفسیری خانے اس کورس کے لیے لکھے گئے اصل مطالعاتی خلاصے ہیں — یہ المیزان، نمونہ اور تسنیم کے مضامین کو اپنے الفاظ میں مختصراً بیان کرتے ہیں اور ان کتابوں کے لفظی اقتباسات نہیں ہیں۔

### انگریزی ترجمہ — سید علی قلی قرائی

سید علی قلی قرائی کا فقرہ بہ فقرہ انگریزی ترجمہ کلاسیکی تفسیری ادب سے گہرا تعلق رکھتا ہے۔

### تین تفسیری مآخذ

| عالم | کتاب | جلدیں | طریقہ کار |
|------|------|--------|-----------|
| علامہ سید محمد حسین طباطبائی | تفسیرالمیزان | ۲۷ | قرآن سے قرآن کی تفسیر؛ فلسفیانہ و عرفانی |
| علامہ ناصر مکارم شیرازی | تفسیر نمونہ | ۲۷ | عملی، موضوعاتی؛ سماجی و اخلاقی تاکید |
| علامہ عبداللہ جوادی آملی | تفسیر تسنیم | ۴۰+ | باطنی و روحانی؛ جدید ترین وسیع تفسیر |

</div>

<div markdown="0">
<h2 style="text-align:center;margin:2.5rem 0 .5rem;">📖 <span class="lang-en" style="display:inline;">The Complete Quran — All 114 Surahs</span><span class="lang-ur" style="display:inline;font-family:'Jameel Noori Nastaleeq','Noto Nastaliq Urdu','Urdu Typesetting',serif;">مکمل قرآن مجید — تمام ۱۱۴ سورتیں</span></h2>
<p style="text-align:center;color:#64748b;margin:0 0 1rem;"><span class="lang-en" style="display:inline;">Click any surah to read its complete Arabic text with translation.</span><span class="lang-ur" style="display:inline;font-family:'Jameel Noori Nastaleeq','Noto Nastaliq Urdu','Urdu Typesetting',serif;">کسی بھی سورت پر کلک کریں — مکمل عربی متن مع ترجمہ پڑھیں۔</span></p>

<div class="qr-panel" id="qr-panel">
  <p class="qr-placeholder">👇 Select a surah from the list below / نیچے فہرست میں سے کوئی سورت منتخب کریں</p>
</div>

<input class="qr-filter" id="qr-filter" type="text" oninput="qrFilter()" placeholder="🔍 Search surah by name or number… / سورت کا نام یا نمبر لکھیں…">

<div class="qr-index" id="qr-index">
<button class="qr-row" type="button" onclick="qrLoad(1)" data-search="1 al-fatiha (the opening) الفاتحة"><span class="qr-num">1</span><span class="qr-names"><span class="qr-ar">الفاتحة</span><span class="qr-en">Al-Fatiha (The Opening)</span></span><span class="qr-meta">7 ayahs · Juz 1</span></button>
<button class="qr-row" type="button" onclick="qrLoad(2)" data-search="2 al-baqarah (the cow) البقرة"><span class="qr-num">2</span><span class="qr-names"><span class="qr-ar">البقرة</span><span class="qr-en">Al-Baqarah (The Cow)</span></span><span class="qr-meta">286 ayahs · Juz 1–3</span></button>
<button class="qr-row" type="button" onclick="qrLoad(3)" data-search="3 al imran (family of imran) آل عمران"><span class="qr-num">3</span><span class="qr-names"><span class="qr-ar">آل عمران</span><span class="qr-en">Al Imran (Family of Imran)</span></span><span class="qr-meta">200 ayahs · Juz 3–4</span></button>
<button class="qr-row" type="button" onclick="qrLoad(4)" data-search="4 an-nisa (the women) النساء"><span class="qr-num">4</span><span class="qr-names"><span class="qr-ar">النساء</span><span class="qr-en">An-Nisa (The Women)</span></span><span class="qr-meta">176 ayahs · Juz 4–6</span></button>
<button class="qr-row" type="button" onclick="qrLoad(5)" data-search="5 al-ma'idah (the table) المائدة"><span class="qr-num">5</span><span class="qr-names"><span class="qr-ar">المائدة</span><span class="qr-en">Al-Ma'idah (The Table)</span></span><span class="qr-meta">120 ayahs · Juz 6–7</span></button>
<button class="qr-row" type="button" onclick="qrLoad(6)" data-search="6 al-an'am (the cattle) الأنعام"><span class="qr-num">6</span><span class="qr-names"><span class="qr-ar">الأنعام</span><span class="qr-en">Al-An'am (The Cattle)</span></span><span class="qr-meta">165 ayahs · Juz 7–8</span></button>
<button class="qr-row" type="button" onclick="qrLoad(7)" data-search="7 al-a'raf (the heights) الأعراف"><span class="qr-num">7</span><span class="qr-names"><span class="qr-ar">الأعراف</span><span class="qr-en">Al-A'raf (The Heights)</span></span><span class="qr-meta">206 ayahs · Juz 8–9</span></button>
<button class="qr-row" type="button" onclick="qrLoad(8)" data-search="8 al-anfal (the spoils) الأنفال"><span class="qr-num">8</span><span class="qr-names"><span class="qr-ar">الأنفال</span><span class="qr-en">Al-Anfal (The Spoils)</span></span><span class="qr-meta">75 ayahs · Juz 9–10</span></button>
<button class="qr-row" type="button" onclick="qrLoad(9)" data-search="9 at-tawbah (repentance) التوبة"><span class="qr-num">9</span><span class="qr-names"><span class="qr-ar">التوبة</span><span class="qr-en">At-Tawbah (Repentance)</span></span><span class="qr-meta">129 ayahs · Juz 10–11</span></button>
<button class="qr-row" type="button" onclick="qrLoad(10)" data-search="10 yunus (jonah) يونس"><span class="qr-num">10</span><span class="qr-names"><span class="qr-ar">يونس</span><span class="qr-en">Yunus (Jonah)</span></span><span class="qr-meta">109 ayahs · Juz 11</span></button>
<button class="qr-row" type="button" onclick="qrLoad(11)" data-search="11 hud هود"><span class="qr-num">11</span><span class="qr-names"><span class="qr-ar">هود</span><span class="qr-en">Hud</span></span><span class="qr-meta">123 ayahs · Juz 11–12</span></button>
<button class="qr-row" type="button" onclick="qrLoad(12)" data-search="12 yusuf (joseph) يوسف"><span class="qr-num">12</span><span class="qr-names"><span class="qr-ar">يوسف</span><span class="qr-en">Yusuf (Joseph)</span></span><span class="qr-meta">111 ayahs · Juz 12–13</span></button>
<button class="qr-row" type="button" onclick="qrLoad(13)" data-search="13 ar-ra'd (the thunder) الرعد"><span class="qr-num">13</span><span class="qr-names"><span class="qr-ar">الرعد</span><span class="qr-en">Ar-Ra'd (The Thunder)</span></span><span class="qr-meta">43 ayahs · Juz 13</span></button>
<button class="qr-row" type="button" onclick="qrLoad(14)" data-search="14 ibrahim (abraham) إبراهيم"><span class="qr-num">14</span><span class="qr-names"><span class="qr-ar">إبراهيم</span><span class="qr-en">Ibrahim (Abraham)</span></span><span class="qr-meta">52 ayahs · Juz 13</span></button>
<button class="qr-row" type="button" onclick="qrLoad(15)" data-search="15 al-hijr (the rock) الحجر"><span class="qr-num">15</span><span class="qr-names"><span class="qr-ar">الحجر</span><span class="qr-en">Al-Hijr (The Rock)</span></span><span class="qr-meta">99 ayahs · Juz 14</span></button>
<button class="qr-row" type="button" onclick="qrLoad(16)" data-search="16 an-nahl (the bee) النحل"><span class="qr-num">16</span><span class="qr-names"><span class="qr-ar">النحل</span><span class="qr-en">An-Nahl (The Bee)</span></span><span class="qr-meta">128 ayahs · Juz 14</span></button>
<button class="qr-row" type="button" onclick="qrLoad(17)" data-search="17 al-isra (the night journey) الإسراء"><span class="qr-num">17</span><span class="qr-names"><span class="qr-ar">الإسراء</span><span class="qr-en">Al-Isra (The Night Journey)</span></span><span class="qr-meta">111 ayahs · Juz 15</span></button>
<button class="qr-row" type="button" onclick="qrLoad(18)" data-search="18 al-kahf (the cave) الكهف"><span class="qr-num">18</span><span class="qr-names"><span class="qr-ar">الكهف</span><span class="qr-en">Al-Kahf (The Cave)</span></span><span class="qr-meta">110 ayahs · Juz 15–16</span></button>
<button class="qr-row" type="button" onclick="qrLoad(19)" data-search="19 maryam (mary) مريم"><span class="qr-num">19</span><span class="qr-names"><span class="qr-ar">مريم</span><span class="qr-en">Maryam (Mary)</span></span><span class="qr-meta">98 ayahs · Juz 16</span></button>
<button class="qr-row" type="button" onclick="qrLoad(20)" data-search="20 ta-ha طه"><span class="qr-num">20</span><span class="qr-names"><span class="qr-ar">طه</span><span class="qr-en">Ta-Ha</span></span><span class="qr-meta">135 ayahs · Juz 16</span></button>
<button class="qr-row" type="button" onclick="qrLoad(21)" data-search="21 al-anbiya (the prophets) الأنبياء"><span class="qr-num">21</span><span class="qr-names"><span class="qr-ar">الأنبياء</span><span class="qr-en">Al-Anbiya (The Prophets)</span></span><span class="qr-meta">112 ayahs · Juz 17</span></button>
<button class="qr-row" type="button" onclick="qrLoad(22)" data-search="22 al-hajj (the pilgrimage) الحج"><span class="qr-num">22</span><span class="qr-names"><span class="qr-ar">الحج</span><span class="qr-en">Al-Hajj (The Pilgrimage)</span></span><span class="qr-meta">78 ayahs · Juz 17</span></button>
<button class="qr-row" type="button" onclick="qrLoad(23)" data-search="23 al-mu'minun (the believers) المؤمنون"><span class="qr-num">23</span><span class="qr-names"><span class="qr-ar">المؤمنون</span><span class="qr-en">Al-Mu'minun (The Believers)</span></span><span class="qr-meta">118 ayahs · Juz 18</span></button>
<button class="qr-row" type="button" onclick="qrLoad(24)" data-search="24 an-nur (the light) النور"><span class="qr-num">24</span><span class="qr-names"><span class="qr-ar">النور</span><span class="qr-en">An-Nur (The Light)</span></span><span class="qr-meta">64 ayahs · Juz 18</span></button>
<button class="qr-row" type="button" onclick="qrLoad(25)" data-search="25 al-furqan (the criterion) الفرقان"><span class="qr-num">25</span><span class="qr-names"><span class="qr-ar">الفرقان</span><span class="qr-en">Al-Furqan (The Criterion)</span></span><span class="qr-meta">77 ayahs · Juz 18–19</span></button>
<button class="qr-row" type="button" onclick="qrLoad(26)" data-search="26 ash-shu'ara (the poets) الشعراء"><span class="qr-num">26</span><span class="qr-names"><span class="qr-ar">الشعراء</span><span class="qr-en">Ash-Shu'ara (The Poets)</span></span><span class="qr-meta">227 ayahs · Juz 19</span></button>
<button class="qr-row" type="button" onclick="qrLoad(27)" data-search="27 an-naml (the ant) النمل"><span class="qr-num">27</span><span class="qr-names"><span class="qr-ar">النمل</span><span class="qr-en">An-Naml (The Ant)</span></span><span class="qr-meta">93 ayahs · Juz 19–20</span></button>
<button class="qr-row" type="button" onclick="qrLoad(28)" data-search="28 al-qasas (the narratives) القصص"><span class="qr-num">28</span><span class="qr-names"><span class="qr-ar">القصص</span><span class="qr-en">Al-Qasas (The Narratives)</span></span><span class="qr-meta">88 ayahs · Juz 20</span></button>
<button class="qr-row" type="button" onclick="qrLoad(29)" data-search="29 al-'ankabut (the spider) العنكبوت"><span class="qr-num">29</span><span class="qr-names"><span class="qr-ar">العنكبوت</span><span class="qr-en">Al-'Ankabut (The Spider)</span></span><span class="qr-meta">69 ayahs · Juz 20–21</span></button>
<button class="qr-row" type="button" onclick="qrLoad(30)" data-search="30 ar-rum (the romans) الروم"><span class="qr-num">30</span><span class="qr-names"><span class="qr-ar">الروم</span><span class="qr-en">Ar-Rum (The Romans)</span></span><span class="qr-meta">60 ayahs · Juz 21</span></button>
<button class="qr-row" type="button" onclick="qrLoad(31)" data-search="31 luqman لقمان"><span class="qr-num">31</span><span class="qr-names"><span class="qr-ar">لقمان</span><span class="qr-en">Luqman</span></span><span class="qr-meta">34 ayahs · Juz 21</span></button>
<button class="qr-row" type="button" onclick="qrLoad(32)" data-search="32 as-sajdah (the prostration) السجدة"><span class="qr-num">32</span><span class="qr-names"><span class="qr-ar">السجدة</span><span class="qr-en">As-Sajdah (The Prostration)</span></span><span class="qr-meta">30 ayahs · Juz 21</span></button>
<button class="qr-row" type="button" onclick="qrLoad(33)" data-search="33 al-ahzab (the confederates) الأحزاب"><span class="qr-num">33</span><span class="qr-names"><span class="qr-ar">الأحزاب</span><span class="qr-en">Al-Ahzab (The Confederates)</span></span><span class="qr-meta">73 ayahs · Juz 21–22</span></button>
<button class="qr-row" type="button" onclick="qrLoad(34)" data-search="34 saba (sheba) سبأ"><span class="qr-num">34</span><span class="qr-names"><span class="qr-ar">سبأ</span><span class="qr-en">Saba (Sheba)</span></span><span class="qr-meta">54 ayahs · Juz 22</span></button>
<button class="qr-row" type="button" onclick="qrLoad(35)" data-search="35 fatir (the originator) فاطر"><span class="qr-num">35</span><span class="qr-names"><span class="qr-ar">فاطر</span><span class="qr-en">Fatir (The Originator)</span></span><span class="qr-meta">45 ayahs · Juz 22</span></button>
<button class="qr-row" type="button" onclick="qrLoad(36)" data-search="36 yasin يس"><span class="qr-num">36</span><span class="qr-names"><span class="qr-ar">يس</span><span class="qr-en">Yasin</span></span><span class="qr-meta">83 ayahs · Juz 22–23</span></button>
<button class="qr-row" type="button" onclick="qrLoad(37)" data-search="37 as-saffat (those ranged in ranks) الصافات"><span class="qr-num">37</span><span class="qr-names"><span class="qr-ar">الصافات</span><span class="qr-en">As-Saffat (Those Ranged in Ranks)</span></span><span class="qr-meta">182 ayahs · Juz 23</span></button>
<button class="qr-row" type="button" onclick="qrLoad(38)" data-search="38 sad ص"><span class="qr-num">38</span><span class="qr-names"><span class="qr-ar">ص</span><span class="qr-en">Sad</span></span><span class="qr-meta">88 ayahs · Juz 23</span></button>
<button class="qr-row" type="button" onclick="qrLoad(39)" data-search="39 az-zumar (the groups) الزمر"><span class="qr-num">39</span><span class="qr-names"><span class="qr-ar">الزمر</span><span class="qr-en">Az-Zumar (The Groups)</span></span><span class="qr-meta">75 ayahs · Juz 23–24</span></button>
<button class="qr-row" type="button" onclick="qrLoad(40)" data-search="40 ghafir (the forgiver) غافر"><span class="qr-num">40</span><span class="qr-names"><span class="qr-ar">غافر</span><span class="qr-en">Ghafir (The Forgiver)</span></span><span class="qr-meta">85 ayahs · Juz 24</span></button>
<button class="qr-row" type="button" onclick="qrLoad(41)" data-search="41 fussilat (explained in detail) فصلت"><span class="qr-num">41</span><span class="qr-names"><span class="qr-ar">فصلت</span><span class="qr-en">Fussilat (Explained in Detail)</span></span><span class="qr-meta">54 ayahs · Juz 24–25</span></button>
<button class="qr-row" type="button" onclick="qrLoad(42)" data-search="42 ash-shura (the consultation) الشورى"><span class="qr-num">42</span><span class="qr-names"><span class="qr-ar">الشورى</span><span class="qr-en">Ash-Shura (The Consultation)</span></span><span class="qr-meta">53 ayahs · Juz 25</span></button>
<button class="qr-row" type="button" onclick="qrLoad(43)" data-search="43 az-zukhruf (the ornaments) الزخرف"><span class="qr-num">43</span><span class="qr-names"><span class="qr-ar">الزخرف</span><span class="qr-en">Az-Zukhruf (The Ornaments)</span></span><span class="qr-meta">89 ayahs · Juz 25</span></button>
<button class="qr-row" type="button" onclick="qrLoad(44)" data-search="44 ad-dukhan (the smoke) الدخان"><span class="qr-num">44</span><span class="qr-names"><span class="qr-ar">الدخان</span><span class="qr-en">Ad-Dukhan (The Smoke)</span></span><span class="qr-meta">59 ayahs · Juz 25</span></button>
<button class="qr-row" type="button" onclick="qrLoad(45)" data-search="45 al-jathiyah (the crouching) الجاثية"><span class="qr-num">45</span><span class="qr-names"><span class="qr-ar">الجاثية</span><span class="qr-en">Al-Jathiyah (The Crouching)</span></span><span class="qr-meta">37 ayahs · Juz 25</span></button>
<button class="qr-row" type="button" onclick="qrLoad(46)" data-search="46 al-ahqaf (the sand dunes) الأحقاف"><span class="qr-num">46</span><span class="qr-names"><span class="qr-ar">الأحقاف</span><span class="qr-en">Al-Ahqaf (The Sand Dunes)</span></span><span class="qr-meta">35 ayahs · Juz 26</span></button>
<button class="qr-row" type="button" onclick="qrLoad(47)" data-search="47 muhammad محمد"><span class="qr-num">47</span><span class="qr-names"><span class="qr-ar">محمد</span><span class="qr-en">Muhammad</span></span><span class="qr-meta">38 ayahs · Juz 26</span></button>
<button class="qr-row" type="button" onclick="qrLoad(48)" data-search="48 al-fath (the victory) الفتح"><span class="qr-num">48</span><span class="qr-names"><span class="qr-ar">الفتح</span><span class="qr-en">Al-Fath (The Victory)</span></span><span class="qr-meta">29 ayahs · Juz 26</span></button>
<button class="qr-row" type="button" onclick="qrLoad(49)" data-search="49 al-hujurat (the chambers) الحجرات"><span class="qr-num">49</span><span class="qr-names"><span class="qr-ar">الحجرات</span><span class="qr-en">Al-Hujurat (The Chambers)</span></span><span class="qr-meta">18 ayahs · Juz 26</span></button>
<button class="qr-row" type="button" onclick="qrLoad(50)" data-search="50 qaf ق"><span class="qr-num">50</span><span class="qr-names"><span class="qr-ar">ق</span><span class="qr-en">Qaf</span></span><span class="qr-meta">45 ayahs · Juz 26</span></button>
<button class="qr-row" type="button" onclick="qrLoad(51)" data-search="51 adh-dhariyat (the winnowing winds) الذاريات"><span class="qr-num">51</span><span class="qr-names"><span class="qr-ar">الذاريات</span><span class="qr-en">Adh-Dhariyat (The Winnowing Winds)</span></span><span class="qr-meta">60 ayahs · Juz 27</span></button>
<button class="qr-row" type="button" onclick="qrLoad(52)" data-search="52 at-tur (the mount) الطور"><span class="qr-num">52</span><span class="qr-names"><span class="qr-ar">الطور</span><span class="qr-en">At-Tur (The Mount)</span></span><span class="qr-meta">49 ayahs · Juz 27</span></button>
<button class="qr-row" type="button" onclick="qrLoad(53)" data-search="53 an-najm (the star) النجم"><span class="qr-num">53</span><span class="qr-names"><span class="qr-ar">النجم</span><span class="qr-en">An-Najm (The Star)</span></span><span class="qr-meta">62 ayahs · Juz 27</span></button>
<button class="qr-row" type="button" onclick="qrLoad(54)" data-search="54 al-qamar (the moon) القمر"><span class="qr-num">54</span><span class="qr-names"><span class="qr-ar">القمر</span><span class="qr-en">Al-Qamar (The Moon)</span></span><span class="qr-meta">55 ayahs · Juz 27</span></button>
<button class="qr-row" type="button" onclick="qrLoad(55)" data-search="55 ar-rahman (the all-beneficent) الرحمن"><span class="qr-num">55</span><span class="qr-names"><span class="qr-ar">الرحمن</span><span class="qr-en">Ar-Rahman (The All-beneficent)</span></span><span class="qr-meta">78 ayahs · Juz 27</span></button>
<button class="qr-row" type="button" onclick="qrLoad(56)" data-search="56 al-waqi'ah (the inevitable) الواقعة"><span class="qr-num">56</span><span class="qr-names"><span class="qr-ar">الواقعة</span><span class="qr-en">Al-Waqi'ah (The Inevitable)</span></span><span class="qr-meta">96 ayahs · Juz 27</span></button>
<button class="qr-row" type="button" onclick="qrLoad(57)" data-search="57 al-hadid (the iron) الحديد"><span class="qr-num">57</span><span class="qr-names"><span class="qr-ar">الحديد</span><span class="qr-en">Al-Hadid (The Iron)</span></span><span class="qr-meta">29 ayahs · Juz 27</span></button>
<button class="qr-row" type="button" onclick="qrLoad(58)" data-search="58 al-mujadilah (the pleading) المجادلة"><span class="qr-num">58</span><span class="qr-names"><span class="qr-ar">المجادلة</span><span class="qr-en">Al-Mujadilah (The Pleading)</span></span><span class="qr-meta">22 ayahs · Juz 28</span></button>
<button class="qr-row" type="button" onclick="qrLoad(59)" data-search="59 al-hashr (the exile) الحشر"><span class="qr-num">59</span><span class="qr-names"><span class="qr-ar">الحشر</span><span class="qr-en">Al-Hashr (The Exile)</span></span><span class="qr-meta">24 ayahs · Juz 28</span></button>
<button class="qr-row" type="button" onclick="qrLoad(60)" data-search="60 al-mumtahanah (the examined woman) الممتحنة"><span class="qr-num">60</span><span class="qr-names"><span class="qr-ar">الممتحنة</span><span class="qr-en">Al-Mumtahanah (The Examined Woman)</span></span><span class="qr-meta">13 ayahs · Juz 28</span></button>
<button class="qr-row" type="button" onclick="qrLoad(61)" data-search="61 as-saff (the ranks) الصف"><span class="qr-num">61</span><span class="qr-names"><span class="qr-ar">الصف</span><span class="qr-en">As-Saff (The Ranks)</span></span><span class="qr-meta">14 ayahs · Juz 28</span></button>
<button class="qr-row" type="button" onclick="qrLoad(62)" data-search="62 al-jumu'ah (the friday) الجمعة"><span class="qr-num">62</span><span class="qr-names"><span class="qr-ar">الجمعة</span><span class="qr-en">Al-Jumu'ah (The Friday)</span></span><span class="qr-meta">11 ayahs · Juz 28</span></button>
<button class="qr-row" type="button" onclick="qrLoad(63)" data-search="63 al-munafiqun (the hypocrites) المنافقون"><span class="qr-num">63</span><span class="qr-names"><span class="qr-ar">المنافقون</span><span class="qr-en">Al-Munafiqun (The Hypocrites)</span></span><span class="qr-meta">11 ayahs · Juz 28</span></button>
<button class="qr-row" type="button" onclick="qrLoad(64)" data-search="64 at-taghabun (mutual disillusion) التغابن"><span class="qr-num">64</span><span class="qr-names"><span class="qr-ar">التغابن</span><span class="qr-en">At-Taghabun (Mutual Disillusion)</span></span><span class="qr-meta">18 ayahs · Juz 28</span></button>
<button class="qr-row" type="button" onclick="qrLoad(65)" data-search="65 at-talaq (the divorce) الطلاق"><span class="qr-num">65</span><span class="qr-names"><span class="qr-ar">الطلاق</span><span class="qr-en">At-Talaq (The Divorce)</span></span><span class="qr-meta">12 ayahs · Juz 28</span></button>
<button class="qr-row" type="button" onclick="qrLoad(66)" data-search="66 at-tahrim (the prohibition) التحريم"><span class="qr-num">66</span><span class="qr-names"><span class="qr-ar">التحريم</span><span class="qr-en">At-Tahrim (The Prohibition)</span></span><span class="qr-meta">12 ayahs · Juz 28</span></button>
<button class="qr-row" type="button" onclick="qrLoad(67)" data-search="67 al-mulk (the sovereignty) الملك"><span class="qr-num">67</span><span class="qr-names"><span class="qr-ar">الملك</span><span class="qr-en">Al-Mulk (The Sovereignty)</span></span><span class="qr-meta">30 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(68)" data-search="68 al-qalam (the pen) القلم"><span class="qr-num">68</span><span class="qr-names"><span class="qr-ar">القلم</span><span class="qr-en">Al-Qalam (The Pen)</span></span><span class="qr-meta">52 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(69)" data-search="69 al-haqqah (the inevitable reality) الحاقة"><span class="qr-num">69</span><span class="qr-names"><span class="qr-ar">الحاقة</span><span class="qr-en">Al-Haqqah (The Inevitable Reality)</span></span><span class="qr-meta">52 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(70)" data-search="70 al-ma'arij (the ascending stairways) المعارج"><span class="qr-num">70</span><span class="qr-names"><span class="qr-ar">المعارج</span><span class="qr-en">Al-Ma'arij (The Ascending Stairways)</span></span><span class="qr-meta">44 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(71)" data-search="71 nuh (noah) نوح"><span class="qr-num">71</span><span class="qr-names"><span class="qr-ar">نوح</span><span class="qr-en">Nuh (Noah)</span></span><span class="qr-meta">28 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(72)" data-search="72 al-jinn (the jinn) الجن"><span class="qr-num">72</span><span class="qr-names"><span class="qr-ar">الجن</span><span class="qr-en">Al-Jinn (The Jinn)</span></span><span class="qr-meta">28 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(73)" data-search="73 al-muzzammil (the enshrouded one) المزمل"><span class="qr-num">73</span><span class="qr-names"><span class="qr-ar">المزمل</span><span class="qr-en">Al-Muzzammil (The Enshrouded One)</span></span><span class="qr-meta">20 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(74)" data-search="74 al-muddaththir (the cloaked one) المدثر"><span class="qr-num">74</span><span class="qr-names"><span class="qr-ar">المدثر</span><span class="qr-en">Al-Muddaththir (The Cloaked One)</span></span><span class="qr-meta">56 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(75)" data-search="75 al-qiyamah (the resurrection) القيامة"><span class="qr-num">75</span><span class="qr-names"><span class="qr-ar">القيامة</span><span class="qr-en">Al-Qiyamah (The Resurrection)</span></span><span class="qr-meta">40 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(76)" data-search="76 al-insan (the human) الإنسان"><span class="qr-num">76</span><span class="qr-names"><span class="qr-ar">الإنسان</span><span class="qr-en">Al-Insan (The Human)</span></span><span class="qr-meta">31 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(77)" data-search="77 al-mursalat (the emissaries) المرسلات"><span class="qr-num">77</span><span class="qr-names"><span class="qr-ar">المرسلات</span><span class="qr-en">Al-Mursalat (The Emissaries)</span></span><span class="qr-meta">50 ayahs · Juz 29</span></button>
<button class="qr-row" type="button" onclick="qrLoad(78)" data-search="78 an-naba (the announcement) النبأ"><span class="qr-num">78</span><span class="qr-names"><span class="qr-ar">النبأ</span><span class="qr-en">An-Naba (The Announcement)</span></span><span class="qr-meta">40 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(79)" data-search="79 an-nazi'at (those who drag forth) النازعات"><span class="qr-num">79</span><span class="qr-names"><span class="qr-ar">النازعات</span><span class="qr-en">An-Nazi'at (Those Who Drag Forth)</span></span><span class="qr-meta">46 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(80)" data-search="80 abasa (he frowned) عبس"><span class="qr-num">80</span><span class="qr-names"><span class="qr-ar">عبس</span><span class="qr-en">Abasa (He Frowned)</span></span><span class="qr-meta">42 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(81)" data-search="81 at-takwir (the folding up) التكوير"><span class="qr-num">81</span><span class="qr-names"><span class="qr-ar">التكوير</span><span class="qr-en">At-Takwir (The Folding Up)</span></span><span class="qr-meta">29 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(82)" data-search="82 al-infitar (the cleaving) الإنفطار"><span class="qr-num">82</span><span class="qr-names"><span class="qr-ar">الإنفطار</span><span class="qr-en">Al-Infitar (The Cleaving)</span></span><span class="qr-meta">19 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(83)" data-search="83 al-mutaffifin (the defrauders) المطففين"><span class="qr-num">83</span><span class="qr-names"><span class="qr-ar">المطففين</span><span class="qr-en">Al-Mutaffifin (The Defrauders)</span></span><span class="qr-meta">36 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(84)" data-search="84 al-inshiqaq (the splitting open) الإنشقاق"><span class="qr-num">84</span><span class="qr-names"><span class="qr-ar">الإنشقاق</span><span class="qr-en">Al-Inshiqaq (The Splitting Open)</span></span><span class="qr-meta">25 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(85)" data-search="85 al-buruj (the constellations) البروج"><span class="qr-num">85</span><span class="qr-names"><span class="qr-ar">البروج</span><span class="qr-en">Al-Buruj (The Constellations)</span></span><span class="qr-meta">22 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(86)" data-search="86 at-tariq (the morning star) الطارق"><span class="qr-num">86</span><span class="qr-names"><span class="qr-ar">الطارق</span><span class="qr-en">At-Tariq (The Morning Star)</span></span><span class="qr-meta">17 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(87)" data-search="87 al-a'la (the most high) الأعلى"><span class="qr-num">87</span><span class="qr-names"><span class="qr-ar">الأعلى</span><span class="qr-en">Al-A'la (The Most High)</span></span><span class="qr-meta">19 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(88)" data-search="88 al-ghashiyah (the overwhelming) الغاشية"><span class="qr-num">88</span><span class="qr-names"><span class="qr-ar">الغاشية</span><span class="qr-en">Al-Ghashiyah (The Overwhelming)</span></span><span class="qr-meta">26 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(89)" data-search="89 al-fajr (the dawn) الفجر"><span class="qr-num">89</span><span class="qr-names"><span class="qr-ar">الفجر</span><span class="qr-en">Al-Fajr (The Dawn)</span></span><span class="qr-meta">30 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(90)" data-search="90 al-balad (the city) البلد"><span class="qr-num">90</span><span class="qr-names"><span class="qr-ar">البلد</span><span class="qr-en">Al-Balad (The City)</span></span><span class="qr-meta">20 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(91)" data-search="91 ash-shams (the sun) الشمس"><span class="qr-num">91</span><span class="qr-names"><span class="qr-ar">الشمس</span><span class="qr-en">Ash-Shams (The Sun)</span></span><span class="qr-meta">15 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(92)" data-search="92 al-layl (the night) الليل"><span class="qr-num">92</span><span class="qr-names"><span class="qr-ar">الليل</span><span class="qr-en">Al-Layl (The Night)</span></span><span class="qr-meta">21 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(93)" data-search="93 ad-duha (the morning brightness) الضحى"><span class="qr-num">93</span><span class="qr-names"><span class="qr-ar">الضحى</span><span class="qr-en">Ad-Duha (The Morning Brightness)</span></span><span class="qr-meta">11 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(94)" data-search="94 ash-sharh (the expansion) الشرح"><span class="qr-num">94</span><span class="qr-names"><span class="qr-ar">الشرح</span><span class="qr-en">Ash-Sharh (The Expansion)</span></span><span class="qr-meta">8 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(95)" data-search="95 at-tin (the fig) التين"><span class="qr-num">95</span><span class="qr-names"><span class="qr-ar">التين</span><span class="qr-en">At-Tin (The Fig)</span></span><span class="qr-meta">8 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(96)" data-search="96 al-'alaq (the clot) العلق"><span class="qr-num">96</span><span class="qr-names"><span class="qr-ar">العلق</span><span class="qr-en">Al-'Alaq (The Clot)</span></span><span class="qr-meta">19 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(97)" data-search="97 al-qadr (the night of power) القدر"><span class="qr-num">97</span><span class="qr-names"><span class="qr-ar">القدر</span><span class="qr-en">Al-Qadr (The Night of Power)</span></span><span class="qr-meta">5 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(98)" data-search="98 al-bayyinah (the clear evidence) البينة"><span class="qr-num">98</span><span class="qr-names"><span class="qr-ar">البينة</span><span class="qr-en">Al-Bayyinah (The Clear Evidence)</span></span><span class="qr-meta">8 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(99)" data-search="99 az-zalzalah (the earthquake) الزلزلة"><span class="qr-num">99</span><span class="qr-names"><span class="qr-ar">الزلزلة</span><span class="qr-en">Az-Zalzalah (The Earthquake)</span></span><span class="qr-meta">8 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(100)" data-search="100 al-'adiyat (the coursers) العاديات"><span class="qr-num">100</span><span class="qr-names"><span class="qr-ar">العاديات</span><span class="qr-en">Al-'Adiyat (The Coursers)</span></span><span class="qr-meta">11 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(101)" data-search="101 al-qari'ah (the striking calamity) القارعة"><span class="qr-num">101</span><span class="qr-names"><span class="qr-ar">القارعة</span><span class="qr-en">Al-Qari'ah (The Striking Calamity)</span></span><span class="qr-meta">11 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(102)" data-search="102 at-takathur (the rivalry) التكاثر"><span class="qr-num">102</span><span class="qr-names"><span class="qr-ar">التكاثر</span><span class="qr-en">At-Takathur (The Rivalry)</span></span><span class="qr-meta">8 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(103)" data-search="103 al-'asr (the time) العصر"><span class="qr-num">103</span><span class="qr-names"><span class="qr-ar">العصر</span><span class="qr-en">Al-'Asr (The Time)</span></span><span class="qr-meta">3 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(104)" data-search="104 al-humazah (the backbiter) الهمزة"><span class="qr-num">104</span><span class="qr-names"><span class="qr-ar">الهمزة</span><span class="qr-en">Al-Humazah (The Backbiter)</span></span><span class="qr-meta">9 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(105)" data-search="105 al-fil (the elephant) الفيل"><span class="qr-num">105</span><span class="qr-names"><span class="qr-ar">الفيل</span><span class="qr-en">Al-Fil (The Elephant)</span></span><span class="qr-meta">5 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(106)" data-search="106 quraysh قريش"><span class="qr-num">106</span><span class="qr-names"><span class="qr-ar">قريش</span><span class="qr-en">Quraysh</span></span><span class="qr-meta">4 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(107)" data-search="107 al-ma'un (the small kindnesses) الماعون"><span class="qr-num">107</span><span class="qr-names"><span class="qr-ar">الماعون</span><span class="qr-en">Al-Ma'un (The Small Kindnesses)</span></span><span class="qr-meta">7 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(108)" data-search="108 al-kawthar (the abundance) الكوثر"><span class="qr-num">108</span><span class="qr-names"><span class="qr-ar">الكوثر</span><span class="qr-en">Al-Kawthar (The Abundance)</span></span><span class="qr-meta">3 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(109)" data-search="109 al-kafirun (the faithless) الكافرون"><span class="qr-num">109</span><span class="qr-names"><span class="qr-ar">الكافرون</span><span class="qr-en">Al-Kafirun (The Faithless)</span></span><span class="qr-meta">6 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(110)" data-search="110 an-nasr (the help) النصر"><span class="qr-num">110</span><span class="qr-names"><span class="qr-ar">النصر</span><span class="qr-en">An-Nasr (The Help)</span></span><span class="qr-meta">3 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(111)" data-search="111 al-masad (the palm fibre) المسد"><span class="qr-num">111</span><span class="qr-names"><span class="qr-ar">المسد</span><span class="qr-en">Al-Masad (The Palm Fibre)</span></span><span class="qr-meta">5 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(112)" data-search="112 al-ikhlas (the sincerity) الإخلاص"><span class="qr-num">112</span><span class="qr-names"><span class="qr-ar">الإخلاص</span><span class="qr-en">Al-Ikhlas (The Sincerity)</span></span><span class="qr-meta">4 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(113)" data-search="113 al-falaq (the daybreak) الفلق"><span class="qr-num">113</span><span class="qr-names"><span class="qr-ar">الفلق</span><span class="qr-en">Al-Falaq (The Daybreak)</span></span><span class="qr-meta">5 ayahs · Juz 30</span></button>
<button class="qr-row" type="button" onclick="qrLoad(114)" data-search="114 an-naas (mankind) الناس"><span class="qr-num">114</span><span class="qr-names"><span class="qr-ar">الناس</span><span class="qr-en">An-Naas (Mankind)</span></span><span class="qr-meta">6 ayahs · Juz 30</span></button>
</div>
</div>

<script>
var QR_SURAHS = [{"n": 1, "ar": "الفاتحة", "en": "Al-Fatiha (The Opening)", "ay": 7, "juz": "1"}, {"n": 2, "ar": "البقرة", "en": "Al-Baqarah (The Cow)", "ay": 286, "juz": "1–3"}, {"n": 3, "ar": "آل عمران", "en": "Al Imran (Family of Imran)", "ay": 200, "juz": "3–4"}, {"n": 4, "ar": "النساء", "en": "An-Nisa (The Women)", "ay": 176, "juz": "4–6"}, {"n": 5, "ar": "المائدة", "en": "Al-Ma'idah (The Table)", "ay": 120, "juz": "6–7"}, {"n": 6, "ar": "الأنعام", "en": "Al-An'am (The Cattle)", "ay": 165, "juz": "7–8"}, {"n": 7, "ar": "الأعراف", "en": "Al-A'raf (The Heights)", "ay": 206, "juz": "8–9"}, {"n": 8, "ar": "الأنفال", "en": "Al-Anfal (The Spoils)", "ay": 75, "juz": "9–10"}, {"n": 9, "ar": "التوبة", "en": "At-Tawbah (Repentance)", "ay": 129, "juz": "10–11"}, {"n": 10, "ar": "يونس", "en": "Yunus (Jonah)", "ay": 109, "juz": "11"}, {"n": 11, "ar": "هود", "en": "Hud", "ay": 123, "juz": "11–12"}, {"n": 12, "ar": "يوسف", "en": "Yusuf (Joseph)", "ay": 111, "juz": "12–13"}, {"n": 13, "ar": "الرعد", "en": "Ar-Ra'd (The Thunder)", "ay": 43, "juz": "13"}, {"n": 14, "ar": "إبراهيم", "en": "Ibrahim (Abraham)", "ay": 52, "juz": "13"}, {"n": 15, "ar": "الحجر", "en": "Al-Hijr (The Rock)", "ay": 99, "juz": "14"}, {"n": 16, "ar": "النحل", "en": "An-Nahl (The Bee)", "ay": 128, "juz": "14"}, {"n": 17, "ar": "الإسراء", "en": "Al-Isra (The Night Journey)", "ay": 111, "juz": "15"}, {"n": 18, "ar": "الكهف", "en": "Al-Kahf (The Cave)", "ay": 110, "juz": "15–16"}, {"n": 19, "ar": "مريم", "en": "Maryam (Mary)", "ay": 98, "juz": "16"}, {"n": 20, "ar": "طه", "en": "Ta-Ha", "ay": 135, "juz": "16"}, {"n": 21, "ar": "الأنبياء", "en": "Al-Anbiya (The Prophets)", "ay": 112, "juz": "17"}, {"n": 22, "ar": "الحج", "en": "Al-Hajj (The Pilgrimage)", "ay": 78, "juz": "17"}, {"n": 23, "ar": "المؤمنون", "en": "Al-Mu'minun (The Believers)", "ay": 118, "juz": "18"}, {"n": 24, "ar": "النور", "en": "An-Nur (The Light)", "ay": 64, "juz": "18"}, {"n": 25, "ar": "الفرقان", "en": "Al-Furqan (The Criterion)", "ay": 77, "juz": "18–19"}, {"n": 26, "ar": "الشعراء", "en": "Ash-Shu'ara (The Poets)", "ay": 227, "juz": "19"}, {"n": 27, "ar": "النمل", "en": "An-Naml (The Ant)", "ay": 93, "juz": "19–20"}, {"n": 28, "ar": "القصص", "en": "Al-Qasas (The Narratives)", "ay": 88, "juz": "20"}, {"n": 29, "ar": "العنكبوت", "en": "Al-'Ankabut (The Spider)", "ay": 69, "juz": "20–21"}, {"n": 30, "ar": "الروم", "en": "Ar-Rum (The Romans)", "ay": 60, "juz": "21"}, {"n": 31, "ar": "لقمان", "en": "Luqman", "ay": 34, "juz": "21"}, {"n": 32, "ar": "السجدة", "en": "As-Sajdah (The Prostration)", "ay": 30, "juz": "21"}, {"n": 33, "ar": "الأحزاب", "en": "Al-Ahzab (The Confederates)", "ay": 73, "juz": "21–22"}, {"n": 34, "ar": "سبأ", "en": "Saba (Sheba)", "ay": 54, "juz": "22"}, {"n": 35, "ar": "فاطر", "en": "Fatir (The Originator)", "ay": 45, "juz": "22"}, {"n": 36, "ar": "يس", "en": "Yasin", "ay": 83, "juz": "22–23"}, {"n": 37, "ar": "الصافات", "en": "As-Saffat (Those Ranged in Ranks)", "ay": 182, "juz": "23"}, {"n": 38, "ar": "ص", "en": "Sad", "ay": 88, "juz": "23"}, {"n": 39, "ar": "الزمر", "en": "Az-Zumar (The Groups)", "ay": 75, "juz": "23–24"}, {"n": 40, "ar": "غافر", "en": "Ghafir (The Forgiver)", "ay": 85, "juz": "24"}, {"n": 41, "ar": "فصلت", "en": "Fussilat (Explained in Detail)", "ay": 54, "juz": "24–25"}, {"n": 42, "ar": "الشورى", "en": "Ash-Shura (The Consultation)", "ay": 53, "juz": "25"}, {"n": 43, "ar": "الزخرف", "en": "Az-Zukhruf (The Ornaments)", "ay": 89, "juz": "25"}, {"n": 44, "ar": "الدخان", "en": "Ad-Dukhan (The Smoke)", "ay": 59, "juz": "25"}, {"n": 45, "ar": "الجاثية", "en": "Al-Jathiyah (The Crouching)", "ay": 37, "juz": "25"}, {"n": 46, "ar": "الأحقاف", "en": "Al-Ahqaf (The Sand Dunes)", "ay": 35, "juz": "26"}, {"n": 47, "ar": "محمد", "en": "Muhammad", "ay": 38, "juz": "26"}, {"n": 48, "ar": "الفتح", "en": "Al-Fath (The Victory)", "ay": 29, "juz": "26"}, {"n": 49, "ar": "الحجرات", "en": "Al-Hujurat (The Chambers)", "ay": 18, "juz": "26"}, {"n": 50, "ar": "ق", "en": "Qaf", "ay": 45, "juz": "26"}, {"n": 51, "ar": "الذاريات", "en": "Adh-Dhariyat (The Winnowing Winds)", "ay": 60, "juz": "27"}, {"n": 52, "ar": "الطور", "en": "At-Tur (The Mount)", "ay": 49, "juz": "27"}, {"n": 53, "ar": "النجم", "en": "An-Najm (The Star)", "ay": 62, "juz": "27"}, {"n": 54, "ar": "القمر", "en": "Al-Qamar (The Moon)", "ay": 55, "juz": "27"}, {"n": 55, "ar": "الرحمن", "en": "Ar-Rahman (The All-beneficent)", "ay": 78, "juz": "27"}, {"n": 56, "ar": "الواقعة", "en": "Al-Waqi'ah (The Inevitable)", "ay": 96, "juz": "27"}, {"n": 57, "ar": "الحديد", "en": "Al-Hadid (The Iron)", "ay": 29, "juz": "27"}, {"n": 58, "ar": "المجادلة", "en": "Al-Mujadilah (The Pleading)", "ay": 22, "juz": "28"}, {"n": 59, "ar": "الحشر", "en": "Al-Hashr (The Exile)", "ay": 24, "juz": "28"}, {"n": 60, "ar": "الممتحنة", "en": "Al-Mumtahanah (The Examined Woman)", "ay": 13, "juz": "28"}, {"n": 61, "ar": "الصف", "en": "As-Saff (The Ranks)", "ay": 14, "juz": "28"}, {"n": 62, "ar": "الجمعة", "en": "Al-Jumu'ah (The Friday)", "ay": 11, "juz": "28"}, {"n": 63, "ar": "المنافقون", "en": "Al-Munafiqun (The Hypocrites)", "ay": 11, "juz": "28"}, {"n": 64, "ar": "التغابن", "en": "At-Taghabun (Mutual Disillusion)", "ay": 18, "juz": "28"}, {"n": 65, "ar": "الطلاق", "en": "At-Talaq (The Divorce)", "ay": 12, "juz": "28"}, {"n": 66, "ar": "التحريم", "en": "At-Tahrim (The Prohibition)", "ay": 12, "juz": "28"}, {"n": 67, "ar": "الملك", "en": "Al-Mulk (The Sovereignty)", "ay": 30, "juz": "29"}, {"n": 68, "ar": "القلم", "en": "Al-Qalam (The Pen)", "ay": 52, "juz": "29"}, {"n": 69, "ar": "الحاقة", "en": "Al-Haqqah (The Inevitable Reality)", "ay": 52, "juz": "29"}, {"n": 70, "ar": "المعارج", "en": "Al-Ma'arij (The Ascending Stairways)", "ay": 44, "juz": "29"}, {"n": 71, "ar": "نوح", "en": "Nuh (Noah)", "ay": 28, "juz": "29"}, {"n": 72, "ar": "الجن", "en": "Al-Jinn (The Jinn)", "ay": 28, "juz": "29"}, {"n": 73, "ar": "المزمل", "en": "Al-Muzzammil (The Enshrouded One)", "ay": 20, "juz": "29"}, {"n": 74, "ar": "المدثر", "en": "Al-Muddaththir (The Cloaked One)", "ay": 56, "juz": "29"}, {"n": 75, "ar": "القيامة", "en": "Al-Qiyamah (The Resurrection)", "ay": 40, "juz": "29"}, {"n": 76, "ar": "الإنسان", "en": "Al-Insan (The Human)", "ay": 31, "juz": "29"}, {"n": 77, "ar": "المرسلات", "en": "Al-Mursalat (The Emissaries)", "ay": 50, "juz": "29"}, {"n": 78, "ar": "النبأ", "en": "An-Naba (The Announcement)", "ay": 40, "juz": "30"}, {"n": 79, "ar": "النازعات", "en": "An-Nazi'at (Those Who Drag Forth)", "ay": 46, "juz": "30"}, {"n": 80, "ar": "عبس", "en": "Abasa (He Frowned)", "ay": 42, "juz": "30"}, {"n": 81, "ar": "التكوير", "en": "At-Takwir (The Folding Up)", "ay": 29, "juz": "30"}, {"n": 82, "ar": "الإنفطار", "en": "Al-Infitar (The Cleaving)", "ay": 19, "juz": "30"}, {"n": 83, "ar": "المطففين", "en": "Al-Mutaffifin (The Defrauders)", "ay": 36, "juz": "30"}, {"n": 84, "ar": "الإنشقاق", "en": "Al-Inshiqaq (The Splitting Open)", "ay": 25, "juz": "30"}, {"n": 85, "ar": "البروج", "en": "Al-Buruj (The Constellations)", "ay": 22, "juz": "30"}, {"n": 86, "ar": "الطارق", "en": "At-Tariq (The Morning Star)", "ay": 17, "juz": "30"}, {"n": 87, "ar": "الأعلى", "en": "Al-A'la (The Most High)", "ay": 19, "juz": "30"}, {"n": 88, "ar": "الغاشية", "en": "Al-Ghashiyah (The Overwhelming)", "ay": 26, "juz": "30"}, {"n": 89, "ar": "الفجر", "en": "Al-Fajr (The Dawn)", "ay": 30, "juz": "30"}, {"n": 90, "ar": "البلد", "en": "Al-Balad (The City)", "ay": 20, "juz": "30"}, {"n": 91, "ar": "الشمس", "en": "Ash-Shams (The Sun)", "ay": 15, "juz": "30"}, {"n": 92, "ar": "الليل", "en": "Al-Layl (The Night)", "ay": 21, "juz": "30"}, {"n": 93, "ar": "الضحى", "en": "Ad-Duha (The Morning Brightness)", "ay": 11, "juz": "30"}, {"n": 94, "ar": "الشرح", "en": "Ash-Sharh (The Expansion)", "ay": 8, "juz": "30"}, {"n": 95, "ar": "التين", "en": "At-Tin (The Fig)", "ay": 8, "juz": "30"}, {"n": 96, "ar": "العلق", "en": "Al-'Alaq (The Clot)", "ay": 19, "juz": "30"}, {"n": 97, "ar": "القدر", "en": "Al-Qadr (The Night of Power)", "ay": 5, "juz": "30"}, {"n": 98, "ar": "البينة", "en": "Al-Bayyinah (The Clear Evidence)", "ay": 8, "juz": "30"}, {"n": 99, "ar": "الزلزلة", "en": "Az-Zalzalah (The Earthquake)", "ay": 8, "juz": "30"}, {"n": 100, "ar": "العاديات", "en": "Al-'Adiyat (The Coursers)", "ay": 11, "juz": "30"}, {"n": 101, "ar": "القارعة", "en": "Al-Qari'ah (The Striking Calamity)", "ay": 11, "juz": "30"}, {"n": 102, "ar": "التكاثر", "en": "At-Takathur (The Rivalry)", "ay": 8, "juz": "30"}, {"n": 103, "ar": "العصر", "en": "Al-'Asr (The Time)", "ay": 3, "juz": "30"}, {"n": 104, "ar": "الهمزة", "en": "Al-Humazah (The Backbiter)", "ay": 9, "juz": "30"}, {"n": 105, "ar": "الفيل", "en": "Al-Fil (The Elephant)", "ay": 5, "juz": "30"}, {"n": 106, "ar": "قريش", "en": "Quraysh", "ay": 4, "juz": "30"}, {"n": 107, "ar": "الماعون", "en": "Al-Ma'un (The Small Kindnesses)", "ay": 7, "juz": "30"}, {"n": 108, "ar": "الكوثر", "en": "Al-Kawthar (The Abundance)", "ay": 3, "juz": "30"}, {"n": 109, "ar": "الكافرون", "en": "Al-Kafirun (The Faithless)", "ay": 6, "juz": "30"}, {"n": 110, "ar": "النصر", "en": "An-Nasr (The Help)", "ay": 3, "juz": "30"}, {"n": 111, "ar": "المسد", "en": "Al-Masad (The Palm Fibre)", "ay": 5, "juz": "30"}, {"n": 112, "ar": "الإخلاص", "en": "Al-Ikhlas (The Sincerity)", "ay": 4, "juz": "30"}, {"n": 113, "ar": "الفلق", "en": "Al-Falaq (The Daybreak)", "ay": 5, "juz": "30"}, {"n": 114, "ar": "الناس", "en": "An-Naas (Mankind)", "ay": 6, "juz": "30"}];
var QR_TAF = {"1": {"mizan": "Al-Fatiha is the \"Umm al-Kitab\" (Mother of the Book) — it contains in essence the whole of the Quran: tawhid (al-Hamd, Rabb), ma'ad (Yawm al-Din), and prophethood (Siraat al-Mustaqeem). \"Al-Rabb\" means the one who nurtures a thing toward its perfection — Allah nurtures all beings toward their existential completion. The transition in ayah 5 from third-person address (the Lord) to second-person (You alone we worship) is a spiritual leap: the worshipper, in the act of praising, achieves direct proximity to God. Siraat al-Mustaqeem is not merely one path but encompasses correct belief, righteous action, and the highest degrees of nearness to Allah. The blessed (al-an'am alayhim) refers to prophets, truthful ones, martyrs, and the righteous (4:69).", "namoona": "The repeated mention of Rahman and Rahim in ayahs 1 and 3 emphasizes that Allah's dominant attribute is mercy, not wrath. \"Rabb al-'Alamin\" answers a deep question: if Allah is merciful, why is there hardship? — because a true nurturing Lord allows growth through challenge. \"Maalik Yawm al-Din\" reminds us that all accountability systems exist because of divine ownership of that Day — a powerful motivator for taqwa. The du'a for guidance (ayah 6) is the most repeated prayer in Islamic practice — every Muslim recites it at least 17 times daily in obligatory prayers — yet most recite it without reflection on what Siraat al-Mustaqeem truly demands of them.", "tasnim": "Al-Hamd is not merely verbal praise but an ontological reality — all creation, by its very existence, praises Allah (17:44). The human who recites Al-Hamd with genuine understanding participates in the cosmic tasbih of all beings. \"Iyyaka na'budu\" in the plural (\"we worship\") signifies that true worship is a communal journey — the believer does not worship alone but as part of the ummah. The Siraat al-Mustaqeem runs through the heart of every soul — it is not an external road but an internal alignment with divine will. The du'a at the end is not a request for an unknown path but a prayer for steadfastness on a path already illuminated by revelation."}, "2": {"mizan": "\"Al-Hayy al-Qayyum\" — these two divine names summarize all of divine perfection. Al-Hayy denotes life in its absolute, unrestricted sense (unlike human life which is borrowed and limited). Al-Qayyum means He subsists by Himself and is the subsistence of all others — all of existence depends on Him for its very being at every moment. Regarding \"Kursi,\" Tabatabai argues this refers to divine knowledge and power encompassing all creation, not a physical throne. The prohibition of intercession without permission (illa bi-idhnhi) demolishes all polytheistic intermediaries while affirming legitimate tawassul through those God has authorized.", "namoona": "Ayatul Kursi has been called \"Sayyid al-Qur'an\" (Master of the Quran) in hadith because it concentrates the most fundamental principles of tawhid in a single verse. The absence of drowsiness (sinah) and sleep (nawm) from Allah refutes any idea of divine weakness or inattention — He is always fully present to every corner of existence simultaneously. The verse destroys every concept of independent divine partners and establishes pure, uncompromising monotheism as the foundation of Islamic theology.", "tasnim": "The Kursi (throne) in some narrations refers to the station of divine will and command — the point from which divine governance descends to all realms. \"Wasi'a Kursiyyuhu\" (His Kursi embraces the heavens and earth) means nothing in existence is outside the scope of divine governance. The final attributes — Al-Aliyy (the Most Exalted) and Al-'Azim (the Most Supreme) — are not merely titles but ontological realities: everything that exists is lower than Allah in being, and everything that exists derives its greatness from Him alone."}, "112": {"mizan": "\"Ahad\" (One) is stronger than \"Wahid\" — it negates not only multiplicity but also the very possibility of a second. \"Al-Samad\" — the being to whom all things turn for all needs, and who is entirely self-sufficient in Himself. This surah's three subsequent ayahs are explanations of what divine Unity demands: He has no issue (negating Christian and pagan beliefs), He was not born (negating ontological limitation), and He has no equal (kuf' — meaning an equivalent in any attribute). This is the pure monotheism against which all other theological concepts are measured.", "namoona": "This surah is said to equal one-third of the Quran because it contains the essence of tawhid — the first third of the Quran's content. Al-Samad in Arabic is used for a master who is obeyed because all needs flow to them — in the divine case, all of creation's needs flow to Allah, making Him the absolute Samad. The verse \"Lam yalid wa lam yulad\" was a direct challenge to the Quraysh who claimed angels were daughters of Allah and to those who attributed parentage or offspring to God.", "tasnim": "\"Qul\" (Say) is not addressed merely to the Prophet (sallallahu alayhi wa aalihi wasallam) but to every believer — we are all commanded to declare divine Unity. This surah is a self-declaration by Allah about His own nature, making it uniquely intimate: God speaks directly about Himself. Al-Samad — Jawadi Amoli comments that this attribute means Allah is the endpoint of all yearning and seeking; there is nothing beyond Him to seek, no higher station, no alternative refuge. The recitation of this surah is an act of theological affirmation."}, "113": {"mizan": "\"Rabb al-Falaq\" is a striking divine title — God is the Lord of the dawn, the one who splits darkness with light. Seeking refuge with Him against darkness (internal and external) is an act of radical trust. The four evils catalogued — created evil in general, the evil of darkness, the evil of sorcery, and the evil of envy — correspond to spiritual threats at different levels of human existence. The Mu'awwidhatayn (Surahs 113 and 114 together) form the complete shield of the believer.", "namoona": "The four specific evils named in this surah are: created evil (general — all harm in existence), darkness (ignorance and moral corruption spreading as night covers), sorcery (manipulation of reality through forbidden means), and envy (the spiritual disease that corrupts human relations at their root). This surah protects against external threats to the believer while Surah Naas protects against internal corruption. Together they form a complete shield covering both dimensions of harm.", "tasnim": "The \"knots\" (uqad) in ayah 4 may refer to the attachments of the heart — the things that tie the soul to other than Allah, binding it so it cannot rise toward God. The greatest protection against all these evils is divine consciousness (dhikr Allah) which dissolves all such knots. Every time a believer sincerely seeks refuge in \"Rabb al-Falaq,\" they invoke the One who has power over all darkness — and in that invocation lies their safety."}, "114": {"mizan": "The threefold description — Rabb (Nurturer), Malik (King), Ilah (God) — covers the three aspects of Allah's relation to humanity: sustaining us, governing us, and deserving our worship. The \"whisperer\" (Waswas Khannas) retreats when Allah is remembered — this describes the mechanism of evil influence: it enters through inattention, retreats when divine consciousness returns, and re-enters when awareness lapses. Seeking refuge with the \"Lord of mankind\" specifically addresses the human vulnerability to internal corruption.", "namoona": "This surah protects against internal corruption (whispers in the breast) while Surah Falaq protects against external harm. Together they form a complete spiritual shield for the believer. The progressive titles Rabb-Malik-Ilah are not redundant — they address three different aspects of the believer's relationship with Allah: the relationship of dependence (Rabb), the relationship of governance (Malik), and the relationship of worship (Ilah).", "tasnim": "The whisperer from \"among jinn AND mankind\" — Jawadi Amoli emphasizes that human whisperers (those who corrupt others through speech, media, culture, and social influence) are sometimes more dangerous than unseen ones, because their methods are visible, normalized, and persistent. The believer must seek protection from both. The Quran ends with this surah as if to remind us: after all guidance has been given, the greatest ongoing threat is the whisper — and the greatest ongoing protection is divine refuge."}, "108": {"mizan": "Al-Kawthar is a river in Paradise but also means \"abundant goodness\" — in this world it refers to the Quran, prophethood, and the continuation of prophetic legacy through spiritual lineage. \"Fanhar\" (sacrifice) connects prayer with service and sacrifice — the worshipper gives back to God and to humanity. The one who called the Prophet (sallallahu alayhi wa aalihi wasallam) \"al-abtar\" (cut off, without offspring) proved himself to be the truly cut-off one — cut off from divine blessing and from lasting legacy.", "namoona": "This is one of the shortest surahs but one of the most powerful in its historical context — revealed as a direct divine response to enemies' mockery of the Prophet (sallallahu alayhi wa aalihi wasallam) when his sons died in infancy. The divine declaration \"We have given you abundance\" is a promise that proved true: the Prophet's (sallallahu alayhi wa aalihi wasallam) legacy has outlasted every one of his enemies by fourteen centuries. The connection between prayer (salah) and sacrifice (nahr) shows that worship and giving are inseparable in Islamic ethics.", "tasnim": "The abundance of kawthar continues through prophetic legacy — through scholars, saints, and believers who carry the message across generations. Every student who learns and teaches the Quran, every parent who raises a child in faith, every community that preserves the tradition — all are inheritors of kawthar. The surah teaches that divine gifts demand active response: prayer (internal connection) and sacrifice (outward giving)."}, "103": {"mizan": "The oath \"by Time\" is an oath by a divine gift of the highest order — time is the medium in which human beings fulfill their purpose. The four conditions for escaping loss are progressive: faith (iman) is the root; righteous deeds (amal salih) are its fruit; commanding the truth (tawasi bil-haqq) extends the good to the community; and commanding patience (tawasi bil-sabr) ensures it endures under difficulty. Each condition is necessary — none alone is sufficient.", "namoona": "Imam al-Shafi'i said: \"If people reflected only on this surah, it would suffice them.\" Its brevity contains a complete program for human success. The word \"khusr\" (loss) refers not merely to worldly loss but to the ultimate loss — spending one's life and arriving at death with nothing of lasting value. The four conditions are individual AND social — two are internal (faith, deeds) and two are communal (enjoining truth, enjoining patience).", "tasnim": "Time (al-asr) is not merely chronological duration — it is the existential medium given to humanity. Every human being is given the same medium (a lifetime) and the same starting condition. What differentiates them is what they do with it. The community dimension — enjoining truth and patience with one another — reflects that human salvation is not a solitary achievement. It is built through relationship and mutual responsibility."}, "110": {"mizan": "This surah contains an implicit signal — the Prophet (sallallahu alayhi wa aalihi wasallam) was told to celebrate praise and seek forgiveness when the mission reached its completion (the conquest of Mecca). The command to seek forgiveness at the moment of greatest triumph is theologically profound: it shows that closeness to God increases awareness of one's own distance from divine perfection. The truly great never take their own greatness as a source of pride — they turn to God with greater humility the higher they rise.", "namoona": "The phrase \"afwajan\" (in multitudes, in waves) describes the mass entry of people into Islam after the conquest of Mecca — a historical event confirmed by all sources. The surah is a reminder that even the greatest worldly achievement is a divine gift, not a human accomplishment. The response to divine favor is not self-congratulation but tasbih (glorification) and istighfar (seeking forgiveness). This is the Islamic model of success.", "tasnim": "This surah was revealed near the end of the Prophet's (sallallahu alayhi wa aalihi wasallam) life, and companions understood it as an indication that his earthly mission was nearing completion. The response commanded — tasbih and istighfar — is the spiritual posture of the returning servant: praising God for what He gave and acknowledging human limitation. \"Innahu kana tawwaba\" (He is All-clement, forever accepting of return) closes the surah with divine generosity — God's willingness to receive us always."}, "109": {"mizan": "The repetition of the denial across four ayahs covers both present and future tense — \"I do not worship\" and \"I will not worship\" — closing every possible opening for compromise. This surah was revealed when the Quraysh proposed a religious exchange: they would worship Allah for one year if the Prophet (sallallahu alayhi wa aalihi wasallam) worshipped their idols for one year. The Quran's response is categorical: worship cannot be shared, partial, or rotated. Monotheism is total. The final ayah is not a concession but a declaration of complete boundary.", "namoona": "\"Lakum dinukum wa liya din\" (To you your religion, to me my religion) is sometimes mistaken as a statement of religious pluralism. Makarem Shirazi clarifies: it is a declaration of theological independence — \"I will not compromise my worship for yours.\" It does not mean all religions are equally valid; it means the Prophet (sallallahu alayhi wa aalihi wasallam) refuses to dilute his monotheism under any social or political pressure. This is the Quran's model of principled firmness in faith.", "tasnim": "This surah is called \"Surah al-Bara'ah al-Sughra\" (the Minor Declaration of Disavowal) — a complete, irrevocable disavowal of false worship. The six ayahs together create a logical and rhetorical wall: no matter how the offer is framed — in the present, in the past, in the future — the answer is the same. True worship demands singularity. The believer who recites this surah in prayer daily renews this covenant of exclusive devotion."}};
var QR_TAF_UR = {"1": {"mizan": "سورۃ الفاتحہ \"اُمُّ الکتاب\" ہے — پورے قرآن کا خلاصہ۔ توحید (الحمد، رب)، معاد (یوم الدین)، اور نبوت (صراط مستقیم) سب اس میں موجود ہیں۔ آیت ۵ میں غائب سے حاضر کی طرف منتقلی — یہ بندے اور خدا کی ملاقات کا لمحہ ہے۔", "namoona": "رحمن اور رحیم کا دو مرتبہ ذکر بتاتا ہے کہ اللہ کی بنیادی صفت رحمت ہے، نہ غضب۔ \"اهدِنَا الصراط\" کی دعا روزانہ ۱۷ مرتبہ کی جاتی ہے — لیکن کیا ہم سوچتے ہیں کہ صراط مستقیم واقعی کیا مانگتا ہے؟", "tasnim": "\"الحمد\" محض زبانی تعریف نہیں — ساری کائنات اپنے وجود سے اللہ کی تسبیح کر رہی ہے (۱۷:۴۴)۔ \"إيَّاكَ نَعبُدُ\" جمع کے صیغے میں ہے — سچی عبادت اجتماعی سفر ہے۔ صراط مستقیم دل کے اندر کی راہ ہے — بیرونی سڑک نہیں۔"}, "2": {"mizan": "\"الحی القیوم\" — یہ دو نام تمام کمالاتِ الہٰی کا خلاصہ ہیں۔ الحی وہ حیات جو مطلق اور غیر محدود ہو۔ القیوم یعنی وہ جو خود سے قائم ہے اور تمام موجودات اس سے قائم ہیں۔ \"کرسی\" الہٰی علم اور قدرت کی وسعت کو ظاہر کرتا ہے، کوئی مادی تخت نہیں۔", "namoona": "آیۃ الکرسی کو \"سید القرآن\" کہا گیا ہے کیونکہ یہ توحید کے بنیادی اصولوں کو ایک آیت میں سمیٹ لیتی ہے۔ اللہ کو اونگھ اور نیند نہیں آتی — وہ ہر لمحے ہر جگہ مکمل طور پر حاضر ہے۔", "tasnim": "\"وسِعَ کُرسِیُّہُ السَّمَاوَاتِ وَالأَرضَ\" — کائنات کی کوئی چیز الہٰی حکومت کے دائرے سے باہر نہیں۔ العلی اور العظیم صرف القاب نہیں — ہر موجود کا وجود اللہ کی عظمت سے مستعار ہے۔"}, "112": {"mizan": "\"احد\" — \"واحد\" سے زیادہ قوی لفظ — تکثیر کا نہیں بلکہ دوسرے کے امکان کا بھی نفی کرتا ہے۔ \"الصمد\" وہ ذات ہے جس کی طرف تمام محتاج رجوع کریں اور جو خود کسی کی محتاج نہ ہو۔", "namoona": "یہ سورت ثُلُثُ القرآن کہلاتی ہے کیونکہ اس میں توحید کا خلاصہ ہے۔ \"لَم یَلِد وَلَم یُولَد\" اُن تمام عقائد کو رد کرتی ہے جو اللہ کے لیے اولاد یا والدین ثابت کریں۔", "tasnim": "\"قُل\" صرف نبی کریم صلی اللہ علیہ وآلہ وسلم سے نہیں، ہر مومن سے خطاب ہے — ہم سب کو توحید کا اعلان کرنا ہے۔ یہ سورت اللہ کی اپنے بارے میں خود اعلانی ہے — اسی لیے خاص قربت کی حامل ہے۔"}};
var QR_NOTES = {"36": "The Huruf al-Muqatta'at (disconnected letters) \"Ya Sin\" open this surah as one of the great mysteries of the Quran. Scholars agree their full meaning belongs to divine knowledge. The surah affirms the Prophet's (sallallahu alayhi wa aalihi wasallam) status as a messenger, the straight path he walks, and that the Quran itself is a revelation from the All-mighty and All-merciful — combining power (Aziz) and mercy (Rahim) in the same phrase to describe the Quran's source.", "67": "The opening of Surah Al-Mulk contains one of the Quran's most important theological statements: death and life are created tests, not random events or punishments. The purpose is to see \"which of you is the better in conduct\" — not the most knowledgeable, the richest, or the strongest, but the best in action. The challenge to \"look again\" at creation and find a flaw is both scientific and spiritual — it invites genuine reflection on the perfection of divine design."};
var QR_BASMALA = "\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650";
var QR_LABELS = {
  mizan: ["Tafsir al-Mizan \u2014 Tabatabai", "\u062a\u0641\u0633\u06cc\u0631 \u0627\u0644\u0645\u06cc\u0632\u0627\u0646 \u2014 \u0637\u0628\u0627\u0637\u0628\u0627\u0626\u06cc"],
  namoona: ["Tafseer-e-Namoona \u2014 Makarem Shirazi", "\u062a\u0641\u0633\u06cc\u0631 \u0646\u0645\u0648\u0646\u06c1 \u2014 \u0645\u06a9\u0627\u0631\u0645 \u0634\u06cc\u0631\u0627\u0632\u06cc"],
  tasnim: ["Tafsir Tasnim \u2014 Jawadi Amoli", "\u062a\u0641\u0633\u06cc\u0631 \u062a\u0633\u0646\u06cc\u0645 \u2014 \u062c\u0648\u0627\u062f\u06cc \u0622\u0645\u0644\u06cc"]
};
var qrCache = {};

function qrFilter() {
  var q = document.getElementById('qr-filter').value.trim().toLowerCase();
  document.querySelectorAll('#qr-index .qr-row').forEach(function(b) {
    b.style.display = (!q || b.dataset.search.indexOf(q) !== -1) ? 'flex' : 'none';
  });
}

function qrEl(tag, cls, text) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

function qrApplyLang() {
  var s = 'en';
  try { s = localStorage.getItem('cert-hub-lang-pref') || 'en'; } catch (e) {}
  if (typeof certHubSetLang === 'function') certHubSetLang(s);
}

function qrToggleTaf(btn) {
  var drop = btn.nextElementSibling;
  var open = drop.classList.contains('qr-taf-open');
  document.querySelectorAll('.qr-taf-drop.qr-taf-open').forEach(function(d) { d.classList.remove('qr-taf-open'); });
  if (!open) drop.classList.add('qr-taf-open');
}

function qrLoad(n) {
  var panel = document.getElementById('qr-panel');
  if (qrCache[n]) { qrRender(n, qrCache[n]); return; }
  panel.innerHTML = '<p class="qr-loading">⏳ Loading Surah ' + n + '\u2026 / \u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u06cc \u06c1\u06d2\u2026</p>';
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  fetch('https://api.alquran.cloud/v1/surah/' + n + '/editions/quran-uthmani,en.qarai,ur.jawadi')
    .then(function(r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function(j) {
      if (!j.data || j.data.length < 3) throw new Error('bad payload');
      qrCache[n] = j.data;
      qrRender(n, j.data);
    })
    .catch(function() {
      panel.innerHTML = '';
      var p = qrEl('p', 'qr-placeholder', '\u26a0\ufe0f Could not load the surah right now. / \u0633\u0648\u0631\u062a \u0627\u0628\u06be\u06cc \u0644\u0648\u0688 \u0646\u06c1\u06cc\u06ba \u06c1\u0648 \u0633\u06a9\u06cc\u06d4');
      var links = qrEl('div', 'qr-links');
      var retry = document.createElement('a');
      retry.href = 'javascript:void(0)';
      retry.textContent = '\u21bb Retry / \u062f\u0648\u0628\u0627\u0631\u06c1 \u06a9\u0648\u0634\u0634';
      retry.onclick = function() { qrLoad(n); };
      var ext = document.createElement('a');
      ext.href = 'https://quran.com/' + n;
      ext.target = '_blank'; ext.rel = 'noopener';
      ext.textContent = 'Read on Quran.com \u2197';
      links.appendChild(retry); links.appendChild(ext);
      panel.appendChild(p); panel.appendChild(links);
    });
}

function qrRender(n, data) {
  var meta = QR_SURAHS[n - 1];
  var ar = data[0].ayahs, en = data[1].ayahs, ur = data[2].ayahs;
  var panel = document.getElementById('qr-panel');
  panel.innerHTML = '';

  var head = qrEl('div', 'qr-head');
  head.appendChild(qrEl('div', 'qr-head-ar', meta.ar));
  head.appendChild(qrEl('div', 'qr-head-meta', 'Surah ' + n + ' \u00b7 ' + meta.en + ' \u00b7 ' + meta.ay + ' ayahs \u00b7 Juz ' + meta.juz + ' \u00b7 ' + (data[0].revelationType || '')));
  panel.appendChild(head);

  var a1 = ar[0].text.replace(/\uFEFF/g, '');
  ar[0] = { text: a1 };
  if (n !== 1 && n !== 9 && a1.indexOf(QR_BASMALA) === 0) {
    panel.appendChild(qrEl('div', 'qr-basmala', QR_BASMALA));
    var basEN = qrEl('p', 'qr-trans-en lang-en', 'In the name of Allah, the All-beneficent, the All-merciful');
    panel.appendChild(basEN);
    var basUR = qrEl('p', 'qr-trans-ur lang-ur', 'اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے');
    panel.appendChild(basUR);
    ar[0] = { text: a1.slice(QR_BASMALA.length).trim() };
  }

  for (var i = 0; i < ar.length; i++) {
    var tafBtn = document.createElement('button');
    tafBtn.className = 'qr-taf-btn';
    tafBtn.type = 'button';
    tafBtn.innerHTML = '&#128214; Tafseer';
    tafBtn.onclick = function() { qrToggleTaf(this); };
    panel.appendChild(tafBtn);
    var tafDrop = qrEl('div', 'qr-taf-drop');
    [
      ['Al-Mizan \u2014 Tabatabai', 'https://www.al-islam.org/tafsir-al-mizan-vol-1-allamah-sayyid-muhammad-husayn-tabatabai'],
      ['Namoona \u2014 Makarem Shirazi', 'https://www.al-islam.org/an-enlightening-commentary-light-holy-quran-vol-1'],
      ['Tasnim \u2014 Jawadi Amoli', 'https://www.al-islam.org/quran']
    ].forEach(function(tl) {
      var a = document.createElement('a');
      a.href = tl[1]; a.target = '_blank'; a.rel = 'noopener';
      a.textContent = tl[0] + ' \u2197';
      tafDrop.appendChild(a);
    });
    panel.appendChild(tafDrop);
    var arDiv = qrEl('div', 'ayah-arabic');
    arDiv.appendChild(document.createTextNode((ar[i].text || '').replace(/\uFEFF/g, '') + ' '));
    arDiv.appendChild(qrEl('span', 'ayah-num', String(i + 1)));
    panel.appendChild(arDiv);
    var enP = qrEl('p', 'qr-trans-en lang-en');
    enP.textContent = en[i] ? en[i].text : '';
    panel.appendChild(enP);
    var urP = qrEl('p', 'qr-trans-ur lang-ur');
    urP.textContent = ur[i] ? ur[i].text : '';
    panel.appendChild(urP);
  }

  var key = String(n);
  if (QR_NOTES[key]) {
    var note = qrEl('div', 'qr-note');
    note.appendChild(qrEl('p', 'qr-summary-tag', 'Course study note \u2014 written for this course.'));
    note.appendChild(qrEl('p', null, QR_NOTES[key]));
    panel.appendChild(note);
  }

  if (QR_TAF[key]) {
    if (n === 2) {
      var kn = qrEl('p', 'qr-summary-tag', 'The commentary below focuses on Ayatul Kursi (2:255), studied in depth in this course. / \u06cc\u06c1 \u062a\u0641\u0633\u06cc\u0631 \u0622\u06cc\u06c3 \u0627\u0644\u06a9\u0631\u0633\u06cc (\u06f2:\u06f2\u06f5\u06f5) \u0633\u06d2 \u0645\u062a\u0639\u0644\u0642 \u06c1\u06d2\u06d4');
      panel.appendChild(kn);
    }
    var w = qrEl('div', 'tf-widget');
    var tabs = qrEl('div', 'tf-tabs');
    var names = ['mizan', 'namoona', 'tasnim'];
    var titles = ['Al-Mizan', 'Namoona', 'Tasnim'];
    for (var t = 0; t < 3; t++) {
      var btn = qrEl('button', 'tf-tab' + (t === 0 ? ' active' : ''), titles[t]);
      btn.dataset.tf = names[t];
      btn.type = 'button';
      btn.onclick = function() { tf(this); };
      tabs.appendChild(btn);
    }
    w.appendChild(tabs);
    for (var p = 0; p < 3; p++) {
      var pane = qrEl('div', 'tf-pane' + (p === 0 ? ' active' : ''));
      pane.dataset.pane = names[p];
      pane.appendChild(qrEl('p', 'qr-summary-tag', 'Course study summary \u2014 not a verbatim excerpt. / \u06a9\u0648\u0631\u0633 \u06a9\u0627 \u0645\u0637\u0627\u0644\u0639\u0627\u062a\u06cc \u062e\u0644\u0627\u0635\u06c1'));
      var lbl = qrEl('p', null, '');
      lbl.appendChild(qrEl('strong', null, QR_LABELS[names[p]][0]));
      pane.appendChild(lbl);
      pane.appendChild(qrEl('p', null, QR_TAF[key][names[p]]));
      if (QR_TAF_UR[key]) {
        var urLbl = qrEl('p', 'qr-trans-ur lang-ur', '');
        urLbl.appendChild(qrEl('strong', null, QR_LABELS[names[p]][1] + ': '));
        urLbl.appendChild(document.createTextNode(QR_TAF_UR[key][names[p]]));
        pane.appendChild(urLbl);
      }
      w.appendChild(pane);
    }
    panel.appendChild(w);
  }

  var links = qrEl('div', 'qr-links');
  var l1 = document.createElement('a');
  l1.href = 'https://quran.com/' + n; l1.target = '_blank'; l1.rel = 'noopener';
  l1.textContent = 'Read Surah ' + n + ' on Quran.com \u2197';
  var l2 = document.createElement('a');
  l2.href = 'https://www.al-islam.org/quran'; l2.target = '_blank'; l2.rel = 'noopener';
  l2.textContent = 'More tafseer resources (Al-Islam.org) \u2197';
  var l3 = document.createElement('a');
  l3.href = 'https://sabeelquran.org'; l3.target = '_blank'; l3.rel = 'noopener';
  l3.textContent = 'Recitation & Learning — Sabeel Quran ↗';
  links.appendChild(l1); links.appendChild(l2); links.appendChild(l3);
  panel.appendChild(links);

  qrApplyLang();
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<div class="lang-en" markdown="1">

## 🌐 Where to Read the Full Translation

- **[Al-Islam.org](https://www.al-islam.org/quran)** — Qarai English translation available in full, with search by surah and ayah
- **[Quran.com](https://quran.com)** — Multiple translations side-by-side; excellent for comparing scholarly renderings
- **[Tanzil.net](https://tanzil.net)** — Download the Arabic text in multiple Unicode formats with full harakat
- **[Sabeel Quran](https://sabeelquran.org)** — Quran recitation and learning resources

---

## 📚 Summary and Further Reading

This module is your permanent reference anchor for the Quran. The clickable index above gives you the **complete Quran — all 114 surahs** — each with authentic Arabic text, the Qarai English translation, and the Zeeshan Haider Jawadi Urdu translation. For the key surahs studied in this course — Al-Fatiha, Ayatul Kursi (in Al-Baqarah), Al-Ikhlas, Al-Falaq, An-Naas, Al-Kawthar, Al-Asr, An-Nasr, Al-Kafirun, Yasin, and Al-Mulk — the in-course Tafseer Switcher provides study summaries from three complementary scholarly perspectives:

- **Al-Mizan** for philosophical and theological depth, and for understanding the Quran through the Quran
- **Namoona** for practical application and social ethics, accessible and clear
- **Tasnim** for mystical and spiritual dimensions, the inner journey of the soul

Return to this module after completing any course session — open any surah you are memorising, read it with translation, and revisit the studied surahs through a different scholarly lens each time.

**Next Steps:** Practice Exams for consolidation of all 11 modules.

</div>

<div class="lang-ur" style="direction:rtl;font-family:'Jameel Noori Nastaleeq','Noto Nastaliq Urdu','Urdu Typesetting',serif;line-height:2.2;font-size:1.1rem" markdown="1">

## 📚 خلاصہ

یہ ماڈیول قرآن مجید کا مستقل حوالہ ہے۔ اوپر دی گئی فہرست سے **مکمل قرآن — تمام ۱۱۴ سورتیں** پڑھی جا سکتی ہیں — ہر سورت مستند عربی متن، اردو ترجمہ (ذیشان حیدر جوادی) اور انگریزی ترجمہ (قرائی) کے ساتھ۔ کورس میں پڑھائی گئی اہم سورتوں کے ساتھ تین تفسیری مآخذ — المیزان، نمونہ اور تسنیم — کے مطالعاتی خلاصے بھی موجود ہیں۔ جو سورت حفظ کر رہے ہوں اسے کھولیں، ترجمے کے ساتھ پڑھیں، اور ہر بار ایک نئے علمی زاویے سے غور کریں۔

</div>
