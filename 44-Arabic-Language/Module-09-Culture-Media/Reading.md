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

# Module 9 — الثقافة والإعلام (Culture, Media & Literature)

## Introduction

Arabic is not merely a language — it is a civilisation in words. The language that gave humanity algebra (الجَبْر), the zero concept, and the works of Avicenna (ابن سينا) and Averroes (ابن رشد) carries within it one of the world's richest literary traditions. This module introduces you to Arabic **poetry (شِعْر)**, **proverbs (أَمْثَال)**, the language of the **Quran**, classical Arabic literature, and modern media forms.

> **For Urdu speakers:** Urdu poetry, the ghazal tradition, the Masnavi and Sufi literature — all of these draw directly from classical Arabic literary forms. Learning Arabic poetry will deepen your appreciation of Urdu's own poetic heritage.

---

## 1. Arabic Poetry — Foundations (الشِّعْر العَرَبِي)

Arabic poetry is one of the oldest continuous literary traditions. Pre-Islamic poetry (الشِّعْر الجَاهِلِي) from the 5th–6th centuries CE established patterns still used today.

### Key Poetry Terms

| Arabic | Transliteration | English | اردو |
|--------|-----------------|---------|------|
| شِعْر | shiʿr | poetry | شعر |
| قَصِيدَة | qaṣīda | ode / long poem | قصیدہ |
| غَزَل | ghazal | love poem / lyric | غزل |
| مَقْطُوعَة | maqṭūʿa | short poem | مقطوعہ |
| بَيْت | bayt | verse / line (of poetry) | بیت |
| مِصْرَاع | miṣrāʿ | hemistich (half-line) | مصراع |
| قَافِيَة | qāfiya | rhyme | قافیہ |
| وَزْن | wazn | metre / rhythm | وزن |
| شَاعِر | shāʿir | poet | شاعر |
| دِيوَان | dīwān | collected poems | دیوان |

> **Direct Urdu cognates:** قصیدہ (qaṣīda), غزل (ghazal), مصراع (miṣrāʿ), قافیہ (qāfiya), وزن (wazn), شاعر (shāʿir), دیوان (dīwān) — **all of these Urdu poetry terms come directly from Arabic**. Urdu inherited its entire classical poetry vocabulary from Arabic via Persian.

### Famous Classical Poets

| Poet | Arabic | Era | Known for |
|------|--------|-----|-----------|
| Imru' al-Qays | امْرُؤُ القَيْس | Pre-Islamic (~500 CE) | Muʿallaqa — first of the seven hanging odes |
| al-Mutanabbi | المُتَنَبِّي | 915–965 CE | Greatest of all Arab poets; wisdom and pride |
| Abu Nuwas | أَبُو نُوَاس | 756–814 CE | Wit, wine poetry, Abbasid era |
| al-Maʿarri | المَعَرِّي | 973–1057 CE | Philosophical poetry; blind poet of Syria |
| Nizar Qabbani | نِزَار قَبَّانِي | 1923–1998 CE | Modern love poetry; Syria |
| Mahmoud Darwish | مَحْمُود دَرْوِيش | 1941–2008 CE | Palestinian national poet |

---

## 2. A Sample Classical Poem — Ibn Zaydun

Here is a famous line by the Andalusian poet **ابن زَيْدُون** (Ibn Zaydun, 1003–1071 CE), who wrote to Wallada bint al-Mustakfi:

**أَضْحَى التَّنَائِي بَدِيلًا مِنْ تَدَانِينَا**
*Aḍḥā t-tanāʾī badīlan min tadānīnā*
"Separation has replaced our closeness"

**وَنَابَ عَنْ طِيبِ لُقْيَانَا تَجَافِينَا**
*Wa-nāba ʿan ṭībi luqyānā tajāfīnā*
"And our avoidance has substituted for the sweetness of our meetings"

> This poem uses the **basīṭ metre** and a single rhyme (-nā) throughout — characteristic of the Arabic qaṣīda form.

---

## 3. Arabic Proverbs (الأَمْثَال العَرَبِيَّة)

Arabic has one of the richest proverb traditions in the world. Proverbs (أَمْثَال) carry compressed wisdom and are used in everyday speech.

### Essential Arabic Proverbs

| Arabic Proverb | Transliteration | Literal Meaning | Meaning / Lesson | اردو مثل |
|---------------|-----------------|-----------------|-----------------|---------|
| مَنْ صَبَرَ ظَفِرَ | man ṣabara ẓafira | He who is patient wins | Patience brings success | صبر کا پھل میٹھا |
| الوَقْتُ كَالسَّيْف | al-waqtu ka-s-sayf | Time is like a sword | Use time or it will cut you | وقت تلوار کی طرح |
| لِكُلِّ مَقَامٍ مَقَال | li-kulli maqāmin maqāl | Every situation has its word | Speak appropriately to context | ہر جگہ الگ انداز |
| العَقْلُ زِينَةُ الإِنْسَان | al-ʿaqlu zīnatu l-insān | The mind is the ornament of a person | Intelligence is one's true adornment | عقل انسان کا زیور |
| كُلُّ مُجْتَهِدٍ مُصِيب | kullu mujtahidin muṣīb | Every diligent seeker reaches the truth | Effort leads to reward | جدوجہد کامیابی لاتی ہے |
| مَنْ طَلَبَ العُلَى سَهِرَ | man ṭalaba l-ʿulā sahira | He who seeks heights stays awake | Success requires hard work | بلندی کی تلاش میں راتیں جاگنا |
| خَيْرُ الكَلَامِ مَا قَلَّ وَدَلَّ | khayru l-kalāmi mā qalla wa-dalla | Best speech is that which is brief and meaningful | Quality over quantity in words | کم بولو، بہتر بولو |
| الصَّدِيقُ وَقْتَ الضِّيق | aṣ-ṣadīqu waqta ḍ-ḍīq | A friend is (known) in times of difficulty | True friends show in hardship | مصیبت میں دوست پہچانا |

---

## 4. The Quran and Classical Arabic (القرآن والعربية الكلاسيكية)

The Quran is the paramount text of classical Arabic. It was revealed in 7th-century Arabia and remains the benchmark of Arabic eloquence. Al-Fatiha (الفَاتِحَة) — the opening chapter — is the most recited text in human history.

### Al-Fatiha — Complete Text with Analysis

**بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ**
*Bismi llāhi r-raḥmāni r-raḥīm*
In the name of Allah, the Most Gracious, the Most Merciful

**الحَمْدُ لِلّٰهِ رَبِّ العَالَمِين**
*Al-ḥamdu li-llāhi rabbi l-ʿālamīn*
All praise is due to Allah, the Lord of all the worlds

**الرَّحْمٰنِ الرَّحِيم**
*Ar-raḥmāni r-raḥīm*
The Most Gracious, the Most Merciful

**مَالِكِ يَوْمِ الدِّين**
*Māliki yawmi d-dīn*
Master of the Day of Judgment

**إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِين**
*Iyyāka naʿbudu wa-iyyāka nastaʿīn*
It is You we worship and it is You we ask for help

**اهْدِنَا الصِّرَاطَ المُسْتَقِيم**
*Ihdinā ṣ-ṣirāṭa l-mustaqīm*
Guide us to the straight path

**صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِم**
*Ṣirāṭa l-ladhīna anʿamta ʿalayhim*
The path of those You have blessed

**غَيْرِ المَغْضُوبِ عَلَيْهِم وَلَا الضَّالِّين**
*Ghayri l-maghḍūbi ʿalayhim wa-lā ḍ-ḍāllīn*
Not of those who have earned anger, nor of those who have gone astray

---

## 5. Modern Arabic Media — Key Terms

### Television and Radio

| Arabic | Transliteration | English |
|--------|-----------------|---------|
| قَنَاة | qanāt | channel / station |
| بَرْنَامَج | barnāmaj | programme |
| مُذِيع | mudhīʿ | presenter / anchor |
| نَشْرَة الأَخْبَار | nashrat al-akhbār | news bulletin |
| وَثَائِقِي | wathāʾiqī | documentary |
| مُسَلْسَل | musalsal | TV series / soap opera |
| إِعْلَان | iʿlān | advertisement |
| مُقَابَلَة | muqābala | interview |

### Social Media and Internet (وسائل التواصل الاجتماعي)

| Arabic | Transliteration | English | اردو |
|--------|-----------------|---------|------|
| وَسَائِل التَّوَاصُل الاجْتِمَاعِي | wasāʾil at-tawāṣul al-ijtimāʿī | social media | سوشل میڈیا |
| مَوْقِع | mawqiʿ | website | ویب سائٹ |
| تَطْبِيق | taṭbīq | app / application | ایپ |
| مُحْتَوَى | muḥtawā | content | مواد |
| مُتَابِع | mutābiʿ | follower | پیروکار |
| إِعَادَة تَغْرِيد | iʿādat taghrīd | retweet | ری ٹویٹ |
| خُوَارِزْمِيَّة | khuwārizmiyya | algorithm | الگورتھم |

> **Historical note:** The word خُوَارِزْمِيَّة (algorithm) comes from the name of the 9th-century Persian/Arab mathematician al-Khwarizmi (الخُوَارِزْمِي), who worked in Baghdad. The word "algebra" comes from his book title "al-Jabr" (الجَبْر).

---

## 6. Dialogue: Discussing Culture (حوار: الثقافة والأدب)

**سَارَة:** هَل تُحِبُّ الشِّعْرَ العَرَبِي؟

*Hal tuḥibbu sh-shiʿra l-ʿarabī?*

**Sarah:** Do you like Arabic poetry?

**سارہ:** کیا آپ عربی شاعری پسند کرتے ہیں؟

---

**كَرِيم:** نَعَم، أُحِبُّه كَثِيرًا. مَحْمُود دَرْوِيش شَاعِرِي المُفَضَّل. شِعْرُه عَمِيقٌ وَمُؤَثِّر.

*Naʿam, uḥibbuhu kathīran. Maḥmūd Darwīsh shāʿirī l-mufaḍḍal. Shiʿruhu ʿamīqun wa-muʾaththir.*

**Karim:** Yes, I love it a lot. Mahmoud Darwish is my favourite poet. His poetry is deep and moving.

**کریم:** جی، مجھے بہت پسند ہے۔ محمود درویش میرا پسندیدہ شاعر ہے۔ اس کی شاعری گہری اور اثر انگیز ہے۔

---

**سَارَة:** وَأَنَا أُحِبُّ الأَمْثَالَ العَرَبِيَّة. هُنَاكَ مَثَلٌ يَقُول: "مَنْ صَبَرَ ظَفِرَ."

*Wa-anā uḥibbu l-amthāla l-ʿarabiyya. Hunāka mathalun yaqūl: "Man ṣabara ẓafira."*

**Sarah:** And I love Arabic proverbs. There's a proverb that says: "He who is patient succeeds."

**سارہ:** اور میں عربی ضرب الامثال پسند کرتی ہوں۔ ایک مثل ہے: "جس نے صبر کیا، اس نے جیت حاصل کی۔"

---

## 7. Urdu Speaker Advantage — Poetry Vocabulary

The Arabic poetry tradition flowed directly into Persian, and from Persian into Urdu. Here is the full chain:

| Arabic Term | Persian Adaptation | Urdu Usage | Meaning |
|-------------|-------------------|-----------|---------|
| قَصِيدَة (qaṣīda) | قصیده | قصیدہ | Panegyric ode |
| غَزَل (ghazal) | غزل | غزل | Love lyric |
| رُبَاعِي (rubāʿī) | رباعی | رباعی | Quatrain |
| مَثْنَوِي (mathnawī) | مثنوی | مثنوی | Narrative poem |
| دِيوَان (dīwān) | دیوان | دیوان | Collected poems |
| شَاعِر (shāʿir) | شاعر | شاعر | Poet |
| مِصْرَاع (miṣrāʿ) | مصراع | مصراع | Half-verse |

**Key insight:** When you read Allama Iqbal's دیوان or listen to a غزل by Mirza Ghalib, you are experiencing Arabic literary forms filtered through Persian genius into Urdu. Learning Arabic brings you to the **root** of this tradition.

---

## Summary

In this module you explored:
- Arabic poetry: vocabulary, forms, and famous poets from pre-Islamic to modern
- A sample classical poem with analysis
- Twenty essential Arabic proverbs with meanings
- Al-Fatiha: the opening surah with word-by-word analysis
- Modern media vocabulary: television, social media, internet
- The Arabic roots of Urdu poetry tradition

## Next Steps

Proceed to **Module 10 — الإتقان والطلاقة (Mastery & Fluency)** for classical Arabic forms, rhetoric, debate language, and the final push to professional command.

## Further Reading

- *The Penguin Book of Arabic Verse* (translated by Abdullah al-Udhari)
- *A Literary History of the Arabs* by R.A. Nicholson
- Diwan.org — classical Arabic poetry online
- Al-Jazeera documentary section: aljazeera.net/program/wathaeq

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;" markdown="1">

# ماڈیول ۹ — الثقافة والإعلام (ثقافت، میڈیا اور ادب)

## تعارف

عربی صرف ایک زبان نہیں — یہ ایک تہذیب ہے۔ الجَبْر (الجبر — نام جس سے algebra آیا)، ابن سینا، ابن رشد — یہ سب عربی تہذیب کی دین ہیں۔ اس ماڈیول میں آپ عربی شاعری، ضرب الامثال، قرآن کریم کی زبان اور جدید میڈیا کی اصطلاحات سیکھیں گے۔

> **اردو بولنے والوں کے لیے خصوصی فائدہ:** اردو شاعری کی ساری اصطلاحات — غزل، قصیدہ، مصراع، قافیہ، دیوان — عربی سے براہ راست آئی ہیں۔ عربی شاعری سیکھنا آپ کو اردو شاعری کی جڑوں تک لے جائے گا۔

---

## ۱. شاعری کی اصطلاحات

| عربی | اردو |
|------|------|
| شِعْر | شعر |
| قَصِيدَة | قصیدہ |
| غَزَل | غزل |
| بَيْت | بیت |
| مِصْرَاع | مصراع |
| قَافِيَة | قافیہ |
| وَزْن | وزن |
| شَاعِر | شاعر |
| دِيوَان | دیوان |

---

## ۲. مشہور عرب شعراء

| شاعر | عربی | دور | شہرت |
|------|------|-----|------|
| امرؤ القیس | امْرُؤُ القَيْس | اسلام سے پہلے | معلقات میں سرفہرست |
| المتنبی | المُتَنَبِّي | 915-965ء | عربی کے سب سے بڑے شاعر |
| نزار قبانی | نِزَار قَبَّانِي | 1923-1998ء | محبت کی شاعری |
| محمود درویش | مَحْمُود دَرْوِيش | 1941-2008ء | فلسطین کا قومی شاعر |

---

## ۳. عربی ضرب الامثال

| مثل | اردو ترجمہ |
|-----|-----------|
| مَنْ صَبَرَ ظَفِرَ | جس نے صبر کیا جیت حاصل کی |
| الوَقْتُ كَالسَّيْف | وقت تلوار کی طرح ہے |
| العَقْلُ زِينَةُ الإِنْسَان | عقل انسان کا زیور ہے |
| خَيْرُ الكَلَامِ مَا قَلَّ وَدَلَّ | بہترین بات وہ جو کم اور معنی خیز ہو |
| الصَّدِيقُ وَقْتَ الضِّيق | دوست مصیبت میں پہچانا جاتا ہے |
| مَنْ طَلَبَ العُلَى سَهِرَ | بلندی چاہتے ہو تو راتیں جاگو |

---

## ۴. سورہ فاتحہ

| عربی | اردو ترجمہ |
|------|-----------|
| بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ | اللہ کے نام سے جو بڑا مہربان رحم والا ہے |
| الحَمْدُ لِلّٰهِ رَبِّ العَالَمِين | سب تعریف اللہ کے لیے جو تمام جہانوں کا رب ہے |
| مَالِكِ يَوْمِ الدِّين | روز جزا کا مالک |
| إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِين | ہم صرف تیری عبادت کرتے ہیں اور صرف تجھ سے مدد مانگتے ہیں |
| اهْدِنَا الصِّرَاطَ المُسْتَقِيم | ہمیں سیدھا راستہ دکھا |

---

## ۵. میڈیا کی اصطلاحات

| عربی | اردو |
|------|------|
| قَنَاة | چینل |
| بَرْنَامَج | پروگرام |
| نَشْرَة الأَخْبَار | خبرنامہ |
| مُقَابَلَة | انٹرویو |
| وَثَائِقِي | دستاویزی فلم |

### سوشل میڈیا

| عربی | اردو |
|------|------|
| وَسَائِل التَّوَاصُل الاجْتِمَاعِي | سوشل میڈیا |
| مَوْقِع | ویب سائٹ |
| تَطْبِيق | ایپ |
| مُتَابِع | فالوور |
| خُوَارِزْمِيَّة | الگورتھم |

---

## ۶. اردو-عربی شاعری کا تعلق

| عربی اصل | فارسی ذریعے | اردو استعمال |
|----------|------------|-------------|
| غَزَل | غزل | غزل |
| قَصِيدَة | قصیده | قصیدہ |
| مَثْنَوِي | مثنوی | مثنوی |
| دِيوَان | دیوان | دیوان |

**یاد رکھیں:** میر، غالب، اقبال — ان سب نے عربی-فارسی روایت سے سیکھا۔ عربی سیکھ کر آپ اردو ادب کی اصل جڑ تک پہنچتے ہیں۔

</div>
