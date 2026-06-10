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
.quran-ayah-row{display:flex;flex-direction:column;gap:.5rem;margin:.75rem 0;}
.ayah-arabic{direction:rtl;font-family:'Amiri','Scheherazade New','Traditional Arabic',serif;font-size:2.2em;color:#064e3b;line-height:3;background:#f0fdf4;padding:1rem 1.5rem;border-radius:8px;border-right:4px solid #34d399;}
.ayah-num{display:inline-block;background:#064e3b;color:#fff;border-radius:50%;width:2rem;height:2rem;line-height:2rem;text-align:center;font-size:.85rem;font-weight:700;margin-left:.75rem;}
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

This module is the **complete reference layer** of the Quran Recitation course. It provides:

- Authentic **Arabic text with full harakat** (tashkeel) for key surahs
- **English translation** by Seyyed Ali Quli Qarai (2005) — a phrase-by-phrase rendering widely regarded as the most accurate modern scholarly English translation of the Quran
- **Urdu translation** by Maulana Zeeshan Haider Jawadi — a renowned Pakistani/Indian scholar and the preeminent Urdu Quran translator of the present era
- An **interactive Tafseer Switcher** allowing you to read commentary from three major scholars for each surah

### How to Use the Tafseer Switcher

Each surah section below contains a three-tab widget. Click **Al-Mizan**, **Namoona**, or **Tasnim** to read the commentary from that scholar. The tabs are independent per surah — you can read all three in sequence for maximum depth.

---

## 🧑‍🏫 About the Translators and Commentators

### English Translation — Seyyed Ali Quli Qarai

Seyyed Ali Quli Qarai produced his English translation of the Quran in 2005. It is phrase-by-phrase, preserves the Arabic rhetorical structure wherever English allows, and is deeply informed by classical tafseer literature. His rendering of names like **Al-Rahman** as "All-beneficent" and **Al-Rahim** as "All-merciful" reflects careful attention to the theological distinctions in Arabic. The translation is published by the Islamic College for Advanced Studies (ICAS Press), London.

### Urdu Translation — Maulana Zeeshan Haider Jawadi

Maulana Zeeshan Haider Jawadi (1934–2010) was one of the most distinguished Quran scholars of the Indian subcontinent in the twentieth century. His Urdu translation and commentary of the Quran is known for its clarity, precision, and fidelity to classical Arabic. He was deeply versed in the Arabic grammatical and rhetorical sciences and his Urdu rendering has become a standard reference for Urdu-speaking students of the Quran across South Asia.

### The Three Tafseer Sources

| Scholar | Work | Volumes | Approach |
|---------|------|---------|----------|
| Allāmah Sayyid Muhammad Husayn Tabāṭabāī | **Tafsir al-Mizan** (تفسیرالمیزان) | 27 vols | Quranic — interprets the Quran through the Quran; philosophical and mystical depth |
| Āyatullāh Nāsir Makārem Shīrāzī | **Tafseer-e-Namoona** (تفسیر نمونہ) | 27 vols | Practical, thematic; social and ethical emphasis; accessible to general readers |
| Āyatullāh ʿAbdullāh Jawādī Āmolī | **Tafsir Tasnim** (تفسیر تسنیم) | 40+ vols | Mystical and philosophical; explores the spiritual station of each verse; the most extensive modern commentary |

---

## 1. Surah Al-Fatiha (سورۃ الفاتحة) — Surah 1, Ayahs 1–7

<div class="ayah-arabic">
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾
</div>

**English (Qarai):** "In the Name of Allah, the All-beneficent, the All-merciful. All praise belongs to Allah, Lord of all the worlds, the All-beneficent, the All-merciful, Master of the Day of Retribution. You [alone] do we worship, and to You [alone] do we turn for help. Guide us on the straight path — the path of those whom You have blessed — such as have not incurred Your wrath, nor are astray."

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan" onclick="tf(this)">Al-Mizan</button>
  <button class="tf-tab" data-tf="namoona" onclick="tf(this)">Namoona</button>
  <button class="tf-tab" data-tf="tasnim" onclick="tf(this)">Tasnim</button>
</div>
<div class="tf-pane active" data-pane="mizan">

**Tafsir al-Mizan — Tabatabai:** Al-Fatiha is the "Umm al-Kitab" (Mother of the Book) — it contains in essence the whole of the Quran: tawhid (al-Hamd, Rabb), ma'ad (Yawm al-Din), and prophethood (Siraat al-Mustaqeem). "Al-Rabb" means the one who nurtures a thing toward its perfection — Allah nurtures all beings toward their existential completion. The transition in ayah 5 from third-person address (the Lord) to second-person (You alone we worship) is a spiritual leap: the worshipper, in the act of praising, achieves direct proximity to God. Siraat al-Mustaqeem is not merely one path but encompasses correct belief, righteous action, and the highest degrees of nearness to Allah. The blessed (al-an'am alayhim) refers to prophets, truthful ones, martyrs, and the righteous (4:69).

</div>
<div class="tf-pane" data-pane="namoona">

**Tafseer-e-Namoona — Makarem Shirazi:** The repeated mention of Rahman and Rahim in ayahs 1 and 3 emphasizes that Allah's dominant attribute is mercy, not wrath. "Rabb al-'Alamin" answers a deep question: if Allah is merciful, why is there hardship? — because a true nurturing Lord allows growth through challenge. "Maalik Yawm al-Din" reminds us that all accountability systems exist because of divine ownership of that Day — a powerful motivator for taqwa. The du'a for guidance (ayah 6) is the most repeated prayer in Islamic practice — every Muslim recites it at least 17 times daily in obligatory prayers — yet most recite it without reflection on what Siraat al-Mustaqeem truly demands of them.

</div>
<div class="tf-pane" data-pane="tasnim">

**Tafsir Tasnim — Jawadi Amoli:** Al-Hamd is not merely verbal praise but an ontological reality — all creation, by its very existence, praises Allah (17:44). The human who recites Al-Hamd with genuine understanding participates in the cosmic tasbih of all beings. "Iyyaka na'budu" in the plural ("we worship") signifies that true worship is a communal journey — the believer does not worship alone but as part of the ummah. The Siraat al-Mustaqeem runs through the heart of every soul — it is not an external road but an internal alignment with divine will. The du'a at the end is not a request for an unknown path but a prayer for steadfastness on a path already illuminated by revelation.

</div>
</div>

---

## 2. Ayatul Kursi (آیة الکرسی) — Surah Al-Baqarah 2:255

<div class="ayah-arabic">
اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴿٢٥٥﴾
</div>

**English (Qarai):** "Allah — there is no god except Him — is the Living One, the All-sustainer. Neither drowsiness befalls Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that may intercede with Him except with His permission? He knows what is before them and what is behind them, and they do not encompass anything of His knowledge except what He wills. His throne embraces the heavens and the earth, and He is not wearied by their preservation, and He is the All-exalted, the All-supreme."

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan" onclick="tf(this)">Al-Mizan</button>
  <button class="tf-tab" data-tf="namoona" onclick="tf(this)">Namoona</button>
  <button class="tf-tab" data-tf="tasnim" onclick="tf(this)">Tasnim</button>
</div>
<div class="tf-pane active" data-pane="mizan">

**Tafsir al-Mizan — Tabatabai:** "Al-Hayy al-Qayyum" — these two divine names summarize all of divine perfection. Al-Hayy denotes life in its absolute, unrestricted sense (unlike human life which is borrowed and limited). Al-Qayyum means He subsists by Himself and is the subsistence of all others — all of existence depends on Him for its very being at every moment. Regarding "Kursi," Tabatabai argues this refers to divine knowledge and power encompassing all creation, not a physical throne. The prohibition of intercession without permission (illa bi-idhnhi) demolishes all polytheistic intermediaries while affirming legitimate tawassul through those God has authorized.

</div>
<div class="tf-pane" data-pane="namoona">

**Tafseer-e-Namoona — Makarem Shirazi:** Ayatul Kursi has been called "Sayyid al-Qur'an" (Master of the Quran) in hadith because it concentrates the most fundamental principles of tawhid in a single verse. The absence of drowsiness (sinah) and sleep (nawm) from Allah refutes any idea of divine weakness or inattention — He is always fully present to every corner of existence simultaneously. The verse destroys every concept of independent divine partners and establishes pure, uncompromising monotheism as the foundation of Islamic theology.

</div>
<div class="tf-pane" data-pane="tasnim">

**Tafsir Tasnim — Jawadi Amoli:** The Kursi (throne) in some narrations refers to the station of divine will and command — the point from which divine governance descends to all realms. "Wasi'a Kursiyyuhu" (His Kursi embraces the heavens and earth) means nothing in existence is outside the scope of divine governance. The final attributes — Al-Aliyy (the Most Exalted) and Al-'Azim (the Most Supreme) — are not merely titles but ontological realities: everything that exists is lower than Allah in being, and everything that exists derives its greatness from Him alone.

</div>
</div>

---

## 3. Surah Al-Ikhlas (سورۃ الإخلاص) — Surah 112, Ayahs 1–4

<div class="ayah-arabic">
قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ ﴿٤﴾
</div>

**English (Qarai):** "Say, 'He is Allah, the One. Allah is the All-embracing. He neither begot nor was begotten. Nor has He any equal.'"

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan" onclick="tf(this)">Al-Mizan</button>
  <button class="tf-tab" data-tf="namoona" onclick="tf(this)">Namoona</button>
  <button class="tf-tab" data-tf="tasnim" onclick="tf(this)">Tasnim</button>
</div>
<div class="tf-pane active" data-pane="mizan">

**Tafsir al-Mizan — Tabatabai:** "Ahad" (One) is stronger than "Wahid" — it negates not only multiplicity but also the very possibility of a second. "Al-Samad" — the being to whom all things turn for all needs, and who is entirely self-sufficient in Himself. This surah's three subsequent ayahs are explanations of what divine Unity demands: He has no issue (negating Christian and pagan beliefs), He was not born (negating ontological limitation), and He has no equal (kuf' — meaning an equivalent in any attribute). This is the pure monotheism against which all other theological concepts are measured.

</div>
<div class="tf-pane" data-pane="namoona">

**Tafseer-e-Namoona — Makarem Shirazi:** This surah is said to equal one-third of the Quran because it contains the essence of tawhid — the first third of the Quran's content. Al-Samad in Arabic is used for a master who is obeyed because all needs flow to them — in the divine case, all of creation's needs flow to Allah, making Him the absolute Samad. The verse "Lam yalid wa lam yulad" was a direct challenge to the Quraysh who claimed angels were daughters of Allah and to those who attributed parentage or offspring to God.

</div>
<div class="tf-pane" data-pane="tasnim">

**Tafsir Tasnim — Jawadi Amoli:** "Qul" (Say) is not addressed merely to the Prophet but to every believer — we are all commanded to declare divine Unity. This surah is a self-declaration by Allah about His own nature, making it uniquely intimate: God speaks directly about Himself. Al-Samad — Jawadi Amoli comments that this attribute means Allah is the endpoint of all yearning and seeking; there is nothing beyond Him to seek, no higher station, no alternative refuge. The recitation of this surah is an act of theological affirmation.

</div>
</div>

---

## 4. Surah Al-Falaq (سورۃ الفلق) — Surah 113, Ayahs 1–5

<div class="ayah-arabic">
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِنْ شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾
</div>

**English (Qarai):** "Say, 'I seek the protection of the Lord of the Daybreak, from the evil of what He has created, and from the evil of the dark night when it falls, and from the evil of the witches who blow on knots, and from the evil of an envier when he envies.'"

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan" onclick="tf(this)">Al-Mizan</button>
  <button class="tf-tab" data-tf="namoona" onclick="tf(this)">Namoona</button>
  <button class="tf-tab" data-tf="tasnim" onclick="tf(this)">Tasnim</button>
</div>
<div class="tf-pane active" data-pane="mizan">

**Tafsir al-Mizan — Tabatabai:** "Rabb al-Falaq" is a striking divine title — God is the Lord of the dawn, the one who splits darkness with light. Seeking refuge with Him against darkness (internal and external) is an act of radical trust. The four evils catalogued — created evil in general, the evil of darkness, the evil of sorcery, and the evil of envy — correspond to spiritual threats at different levels of human existence. The Mu'awwidhatayn (Surahs 113 and 114 together) form the complete shield of the believer.

</div>
<div class="tf-pane" data-pane="namoona">

**Tafseer-e-Namoona — Makarem Shirazi:** The four specific evils named in this surah are: created evil (general — all harm in existence), darkness (ignorance and moral corruption spreading as night covers), sorcery (manipulation of reality through forbidden means), and envy (the spiritual disease that corrupts human relations at their root). This surah protects against external threats to the believer while Surah Naas protects against internal corruption. Together they form a complete shield covering both dimensions of harm.

</div>
<div class="tf-pane" data-pane="tasnim">

**Tafsir Tasnim — Jawadi Amoli:** The "knots" (uqad) in ayah 4 may refer to the attachments of the heart — the things that tie the soul to other than Allah, binding it so it cannot rise toward God. The greatest protection against all these evils is divine consciousness (dhikr Allah) which dissolves all such knots. Every time a believer sincerely seeks refuge in "Rabb al-Falaq," they invoke the One who has power over all darkness — and in that invocation lies their safety.

</div>
</div>

---

## 5. Surah An-Naas (سورۃ الناس) — Surah 114, Ayahs 1–6

<div class="ayah-arabic">
قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾
</div>

**English (Qarai):** "Say, 'I seek the protection of the Lord of mankind, the King of mankind, the God of mankind, from the evil of the sneaking whisperer who whispers in the breasts of mankind, whether from among jinn or mankind.'"

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan" onclick="tf(this)">Al-Mizan</button>
  <button class="tf-tab" data-tf="namoona" onclick="tf(this)">Namoona</button>
  <button class="tf-tab" data-tf="tasnim" onclick="tf(this)">Tasnim</button>
</div>
<div class="tf-pane active" data-pane="mizan">

**Tafsir al-Mizan — Tabatabai:** The threefold description — Rabb (Nurturer), Malik (King), Ilah (God) — covers the three aspects of Allah's relation to humanity: sustaining us, governing us, and deserving our worship. The "whisperer" (Waswas Khannas) retreats when Allah is remembered — this describes the mechanism of evil influence: it enters through inattention, retreats when divine consciousness returns, and re-enters when awareness lapses. Seeking refuge with the "Lord of mankind" specifically addresses the human vulnerability to internal corruption.

</div>
<div class="tf-pane" data-pane="namoona">

**Tafseer-e-Namoona — Makarem Shirazi:** This surah protects against internal corruption (whispers in the breast) while Surah Falaq protects against external harm. Together they form a complete spiritual shield for the believer. The progressive titles Rabb-Malik-Ilah are not redundant — they address three different aspects of the believer's relationship with Allah: the relationship of dependence (Rabb), the relationship of governance (Malik), and the relationship of worship (Ilah).

</div>
<div class="tf-pane" data-pane="tasnim">

**Tafsir Tasnim — Jawadi Amoli:** The whisperer from "among jinn AND mankind" — Jawadi Amoli emphasizes that human whisperers (those who corrupt others through speech, media, culture, and social influence) are sometimes more dangerous than unseen ones, because their methods are visible, normalized, and persistent. The believer must seek protection from both. The Quran ends with this surah as if to remind us: after all guidance has been given, the greatest ongoing threat is the whisper — and the greatest ongoing protection is divine refuge.

</div>
</div>

---

## 6. Surah Al-Kawthar (سورۃ الكوثر) — Surah 108, Ayahs 1–3

<div class="ayah-arabic">
إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ﴿١﴾ فَصَلِّ لِرَبِّكَ وَانْحَرْ ﴿٢﴾ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ ﴿٣﴾
</div>

**English (Qarai):** "Indeed We have given you abundance. So pray to your Lord and sacrifice. Indeed it is your enemy who is without posterity."

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan" onclick="tf(this)">Al-Mizan</button>
  <button class="tf-tab" data-tf="namoona" onclick="tf(this)">Namoona</button>
  <button class="tf-tab" data-tf="tasnim" onclick="tf(this)">Tasnim</button>
</div>
<div class="tf-pane active" data-pane="mizan">

**Tafsir al-Mizan — Tabatabai:** Al-Kawthar is a river in Paradise but also means "abundant goodness" — in this world it refers to the Quran, prophethood, and the continuation of prophetic legacy through spiritual lineage. "Fanhar" (sacrifice) connects prayer with service and sacrifice — the worshipper gives back to God and to humanity. The one who called the Prophet "al-abtar" (cut off, without offspring) proved himself to be the truly cut-off one — cut off from divine blessing and from lasting legacy.

</div>
<div class="tf-pane" data-pane="namoona">

**Tafseer-e-Namoona — Makarem Shirazi:** This is one of the shortest surahs but one of the most powerful in its historical context — revealed as a direct divine response to enemies' mockery of the Prophet when his sons died in infancy. The divine declaration "We have given you abundance" is a promise that proved true: the Prophet's legacy has outlasted every one of his enemies by fourteen centuries. The connection between prayer (salah) and sacrifice (nahr) shows that worship and giving are inseparable in Islamic ethics.

</div>
<div class="tf-pane" data-pane="tasnim">

**Tafsir Tasnim — Jawadi Amoli:** The abundance of kawthar continues through prophetic legacy — through scholars, saints, and believers who carry the message across generations. Every student who learns and teaches the Quran, every parent who raises a child in faith, every community that preserves the tradition — all are inheritors of kawthar. The surah teaches that divine gifts demand active response: prayer (internal connection) and sacrifice (outward giving).

</div>
</div>

---

## 7. Surah Al-Asr (سورۃ العصر) — Surah 103, Ayahs 1–3

<div class="ayah-arabic">
وَالْعَصْرِ ﴿١﴾ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ ﴿٢﴾ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ ﴿٣﴾
</div>

**English (Qarai):** "By Time! Indeed man is in loss, except for those who have faith and do righteous deeds, and enjoin one another to [follow] the truth, and enjoin one another to patience."

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan" onclick="tf(this)">Al-Mizan</button>
  <button class="tf-tab" data-tf="namoona" onclick="tf(this)">Namoona</button>
  <button class="tf-tab" data-tf="tasnim" onclick="tf(this)">Tasnim</button>
</div>
<div class="tf-pane active" data-pane="mizan">

**Tafsir al-Mizan — Tabatabai:** The oath "by Time" is an oath by a divine gift of the highest order — time is the medium in which human beings fulfill their purpose. The four conditions for escaping loss are progressive: faith (iman) is the root; righteous deeds (amal salih) are its fruit; commanding the truth (tawasi bil-haqq) extends the good to the community; and commanding patience (tawasi bil-sabr) ensures it endures under difficulty. Each condition is necessary — none alone is sufficient.

</div>
<div class="tf-pane" data-pane="namoona">

**Tafseer-e-Namoona — Makarem Shirazi:** Imam al-Shafi'i said: "If people reflected only on this surah, it would suffice them." Its brevity contains a complete program for human success. The word "khusr" (loss) refers not merely to worldly loss but to the ultimate loss — spending one's life and arriving at death with nothing of lasting value. The four conditions are individual AND social — two are internal (faith, deeds) and two are communal (enjoining truth, enjoining patience).

</div>
<div class="tf-pane" data-pane="tasnim">

**Tafsir Tasnim — Jawadi Amoli:** Time (al-asr) is not merely chronological duration — it is the existential medium given to humanity. Every human being is given the same medium (a lifetime) and the same starting condition. What differentiates them is what they do with it. The community dimension — enjoining truth and patience with one another — reflects that human salvation is not a solitary achievement. It is built through relationship and mutual responsibility.

</div>
</div>

---

## 8. Surah An-Nasr (سورۃ النصر) — Surah 110, Ayahs 1–3

<div class="ayah-arabic">
إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ﴿١﴾ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا ﴿٢﴾ فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا ﴿٣﴾
</div>

**English (Qarai):** "When Allah's help comes and the Victory [arrives], and you see the people entering Allah's religion in multitudes — then celebrate the praise of your Lord and pray for His forgiveness. Indeed He is All-clement."

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan" onclick="tf(this)">Al-Mizan</button>
  <button class="tf-tab" data-tf="namoona" onclick="tf(this)">Namoona</button>
  <button class="tf-tab" data-tf="tasnim" onclick="tf(this)">Tasnim</button>
</div>
<div class="tf-pane active" data-pane="mizan">

**Tafsir al-Mizan — Tabatabai:** This surah contains an implicit signal — the Prophet was told to celebrate praise and seek forgiveness when the mission reached its completion (the conquest of Mecca). The command to seek forgiveness at the moment of greatest triumph is theologically profound: it shows that closeness to God increases awareness of one's own distance from divine perfection. The truly great never take their own greatness as a source of pride — they turn to God with greater humility the higher they rise.

</div>
<div class="tf-pane" data-pane="namoona">

**Tafseer-e-Namoona — Makarem Shirazi:** The phrase "afwajan" (in multitudes, in waves) describes the mass entry of people into Islam after the conquest of Mecca — a historical event confirmed by all sources. The surah is a reminder that even the greatest worldly achievement is a divine gift, not a human accomplishment. The response to divine favor is not self-congratulation but tasbih (glorification) and istighfar (seeking forgiveness). This is the Islamic model of success.

</div>
<div class="tf-pane" data-pane="tasnim">

**Tafsir Tasnim — Jawadi Amoli:** This surah was revealed near the end of the Prophet's life, and companions understood it as an indication that his earthly mission was nearing completion. The response commanded — tasbih and istighfar — is the spiritual posture of the returning servant: praising God for what He gave and acknowledging human limitation. "Innahu kana tawwaba" (He is All-clement, forever accepting of return) closes the surah with divine generosity — God's willingness to receive us always.

</div>
</div>

---

## 9. Surah Al-Kafirun (سورۃ الكافرون) — Surah 109, Ayahs 1–6

<div class="ayah-arabic">
قُلْ يَا أَيُّهَا الْكَافِرُونَ ﴿١﴾ لَا أَعْبُدُ مَا تَعْبُدُونَ ﴿٢﴾ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ﴿٣﴾ وَلَا أَنَا عَابِدٌ مَا عَبَدتُّمْ ﴿٤﴾ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ﴿٥﴾ لَكُمْ دِينُكُمْ وَلِيَ دِينِ ﴿٦﴾
</div>

**English (Qarai):** "Say, 'O faithless ones! I do not worship what you worship, nor do you worship what I worship; nor will I worship what you have worshipped, nor will you worship what I worship. To you your religion, and to me my religion.'"

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan" onclick="tf(this)">Al-Mizan</button>
  <button class="tf-tab" data-tf="namoona" onclick="tf(this)">Namoona</button>
  <button class="tf-tab" data-tf="tasnim" onclick="tf(this)">Tasnim</button>
</div>
<div class="tf-pane active" data-pane="mizan">

**Tafsir al-Mizan — Tabatabai:** The repetition of the denial across four ayahs covers both present and future tense — "I do not worship" and "I will not worship" — closing every possible opening for compromise. This surah was revealed when the Quraysh proposed a religious exchange: they would worship Allah for one year if the Prophet worshipped their idols for one year. The Quran's response is categorical: worship cannot be shared, partial, or rotated. Monotheism is total. The final ayah is not a concession but a declaration of complete boundary.

</div>
<div class="tf-pane" data-pane="namoona">

**Tafseer-e-Namoona — Makarem Shirazi:** "Lakum dinukum wa liya din" (To you your religion, to me my religion) is sometimes mistaken as a statement of religious pluralism. Makarem Shirazi clarifies: it is a declaration of theological independence — "I will not compromise my worship for yours." It does not mean all religions are equally valid; it means the Prophet refuses to dilute his monotheism under any social or political pressure. This is the Quran's model of principled firmness in faith.

</div>
<div class="tf-pane" data-pane="tasnim">

**Tafsir Tasnim — Jawadi Amoli:** This surah is called "Surah al-Bara'ah al-Sughra" (the Minor Declaration of Disavowal) — a complete, irrevocable disavowal of false worship. The six ayahs together create a logical and rhetorical wall: no matter how the offer is framed — in the present, in the past, in the future — the answer is the same. True worship demands singularity. The believer who recites this surah in prayer daily renews this covenant of exclusive devotion.

</div>
</div>

---

## 10. Surah Yasin — Opening (36:1–5)

<div class="ayah-arabic">
يس ﴿١﴾ وَالْقُرْآنِ الْحَكِيمِ ﴿٢﴾ إِنَّكَ لَمِنَ الْمُرْسَلِينَ ﴿٣﴾ عَلَىٰ صِرَاطٍ مُسْتَقِيمٍ ﴿٤﴾ تَنزِيلَ الْعَزِيزِ الرَّحِيمِ ﴿٥﴾
</div>

**English (Qarai):** "Yā Sīn. By the Wise Quran, you are indeed one of the apostles, on a straight path, a sending down of the All-mighty, the All-merciful."

The Huruf al-Muqatta'at (disconnected letters) "Ya Sin" open this surah as one of the great mysteries of the Quran. Scholars agree their full meaning belongs to divine knowledge. The surah affirms the Prophet's status as a messenger, the straight path he walks, and that the Quran itself is a revelation from the All-mighty and All-merciful — combining power (Aziz) and mercy (Rahim) in the same phrase to describe the Quran's source.

---

## 11. Surah Al-Mulk — Opening (67:1–3)

<div class="ayah-arabic">
تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ﴿١﴾ الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ ﴿٢﴾ الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِنْ تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِنْ فُطُورٍ ﴿٣﴾
</div>

**English (Qarai):** "Blessed is He in whose hands is the kingdom, and He has power over all things; who created death and life that He may test you — which of you is the better in conduct. He is the All-mighty, the All-forgiving. He who created the seven heavens in layers. You do not see any inconsistency in the All-beneficent's creation. Look again! Do you see any cracks?"

The opening of Surah Al-Mulk contains one of the Quran's most important theological statements: death and life are created tests, not random events or punishments. The purpose is to see "which of you is the better in conduct" — not the most knowledgeable, the richest, or the strongest, but the best in action. The challenge to "look again" at creation and find a flaw is both scientific and spiritual — it invites genuine reflection on the perfection of divine design.

---

## 📋 Full Quran Reference Table — All 114 Surahs

| No. | Arabic Name | English Name | Ayahs | Juz |
|-----|-------------|--------------|-------|-----|
| 1 | الفاتحة | Al-Fatiha (The Opening) | 7 | 1 |
| 2 | البقرة | Al-Baqarah (The Cow) | 286 | 1–3 |
| 3 | آل عمران | Al Imran (Family of Imran) | 200 | 3–4 |
| 4 | النساء | An-Nisa (The Women) | 176 | 4–6 |
| 5 | المائدة | Al-Ma'idah (The Table) | 120 | 6–7 |
| 6 | الأنعام | Al-An'am (The Cattle) | 165 | 7–8 |
| 7 | الأعراف | Al-A'raf (The Heights) | 206 | 8–9 |
| 8 | الأنفال | Al-Anfal (The Spoils) | 75 | 9–10 |
| 9 | التوبة | At-Tawbah (Repentance) | 129 | 10–11 |
| 10 | يونس | Yunus (Jonah) | 109 | 11 |
| 11 | هود | Hud | 123 | 11–12 |
| 12 | يوسف | Yusuf (Joseph) | 111 | 12–13 |
| 13 | الرعد | Ar-Ra'd (The Thunder) | 43 | 13 |
| 14 | إبراهيم | Ibrahim (Abraham) | 52 | 13 |
| 15 | الحجر | Al-Hijr (The Rock) | 99 | 14 |
| 16 | النحل | An-Nahl (The Bee) | 128 | 14 |
| 17 | الإسراء | Al-Isra (The Night Journey) | 111 | 15 |
| 18 | الكهف | Al-Kahf (The Cave) | 110 | 15–16 |
| 19 | مريم | Maryam (Mary) | 98 | 16 |
| 20 | طه | Ta-Ha | 135 | 16 |
| 21 | الأنبياء | Al-Anbiya (The Prophets) | 112 | 17 |
| 22 | الحج | Al-Hajj (The Pilgrimage) | 78 | 17 |
| 23 | المؤمنون | Al-Mu'minun (The Believers) | 118 | 18 |
| 24 | النور | An-Nur (The Light) | 64 | 18 |
| 25 | الفرقان | Al-Furqan (The Criterion) | 77 | 18–19 |
| 26 | الشعراء | Ash-Shu'ara (The Poets) | 227 | 19 |
| 27 | النمل | An-Naml (The Ant) | 93 | 19–20 |
| 28 | القصص | Al-Qasas (The Narratives) | 88 | 20 |
| 29 | العنكبوت | Al-'Ankabut (The Spider) | 69 | 20–21 |
| 30 | الروم | Ar-Rum (The Romans) | 60 | 21 |
| 31 | لقمان | Luqman | 34 | 21 |
| 32 | السجدة | As-Sajdah (The Prostration) | 30 | 21 |
| 33 | الأحزاب | Al-Ahzab (The Confederates) | 73 | 21–22 |
| 34 | سبأ | Saba (Sheba) | 54 | 22 |
| 35 | فاطر | Fatir (The Originator) | 45 | 22 |
| 36 | يس | Yasin | 83 | 22–23 |
| 37 | الصافات | As-Saffat (Those Ranged in Ranks) | 182 | 23 |
| 38 | ص | Sad | 88 | 23 |
| 39 | الزمر | Az-Zumar (The Groups) | 75 | 23–24 |
| 40 | غافر | Ghafir (The Forgiver) | 85 | 24 |
| 41 | فصلت | Fussilat (Explained in Detail) | 54 | 24–25 |
| 42 | الشورى | Ash-Shura (The Consultation) | 53 | 25 |
| 43 | الزخرف | Az-Zukhruf (The Ornaments) | 89 | 25 |
| 44 | الدخان | Ad-Dukhan (The Smoke) | 59 | 25 |
| 45 | الجاثية | Al-Jathiyah (The Crouching) | 37 | 25 |
| 46 | الأحقاف | Al-Ahqaf (The Sand Dunes) | 35 | 26 |
| 47 | محمد | Muhammad | 38 | 26 |
| 48 | الفتح | Al-Fath (The Victory) | 29 | 26 |
| 49 | الحجرات | Al-Hujurat (The Chambers) | 18 | 26 |
| 50 | ق | Qaf | 45 | 26 |
| 51 | الذاريات | Adh-Dhariyat (The Winnowing Winds) | 60 | 27 |
| 52 | الطور | At-Tur (The Mount) | 49 | 27 |
| 53 | النجم | An-Najm (The Star) | 62 | 27 |
| 54 | القمر | Al-Qamar (The Moon) | 55 | 27 |
| 55 | الرحمن | Ar-Rahman (The All-beneficent) | 78 | 27 |
| 56 | الواقعة | Al-Waqi'ah (The Inevitable) | 96 | 27 |
| 57 | الحديد | Al-Hadid (The Iron) | 29 | 27 |
| 58 | المجادلة | Al-Mujadilah (The Pleading) | 22 | 28 |
| 59 | الحشر | Al-Hashr (The Exile) | 24 | 28 |
| 60 | الممتحنة | Al-Mumtahanah (The Examined Woman) | 13 | 28 |
| 61 | الصف | As-Saff (The Ranks) | 14 | 28 |
| 62 | الجمعة | Al-Jumu'ah (The Friday) | 11 | 28 |
| 63 | المنافقون | Al-Munafiqun (The Hypocrites) | 11 | 28 |
| 64 | التغابن | At-Taghabun (Mutual Disillusion) | 18 | 28 |
| 65 | الطلاق | At-Talaq (The Divorce) | 12 | 28 |
| 66 | التحريم | At-Tahrim (The Prohibition) | 12 | 28 |
| 67 | الملك | Al-Mulk (The Sovereignty) | 30 | 29 |
| 68 | القلم | Al-Qalam (The Pen) | 52 | 29 |
| 69 | الحاقة | Al-Haqqah (The Inevitable Reality) | 52 | 29 |
| 70 | المعارج | Al-Ma'arij (The Ascending Stairways) | 44 | 29 |
| 71 | نوح | Nuh (Noah) | 28 | 29 |
| 72 | الجن | Al-Jinn (The Jinn) | 28 | 29 |
| 73 | المزمل | Al-Muzzammil (The Enshrouded One) | 20 | 29 |
| 74 | المدثر | Al-Muddaththir (The Cloaked One) | 56 | 29 |
| 75 | القيامة | Al-Qiyamah (The Resurrection) | 40 | 29 |
| 76 | الإنسان | Al-Insan (The Human) | 31 | 29 |
| 77 | المرسلات | Al-Mursalat (The Emissaries) | 50 | 29 |
| 78 | النبأ | An-Naba (The Announcement) | 40 | 30 |
| 79 | النازعات | An-Nazi'at (Those Who Drag Forth) | 46 | 30 |
| 80 | عبس | Abasa (He Frowned) | 42 | 30 |
| 81 | التكوير | At-Takwir (The Folding Up) | 29 | 30 |
| 82 | الإنفطار | Al-Infitar (The Cleaving) | 19 | 30 |
| 83 | المطففين | Al-Mutaffifin (The Defrauders) | 36 | 30 |
| 84 | الإنشقاق | Al-Inshiqaq (The Splitting Open) | 25 | 30 |
| 85 | البروج | Al-Buruj (The Constellations) | 22 | 30 |
| 86 | الطارق | At-Tariq (The Morning Star) | 17 | 30 |
| 87 | الأعلى | Al-A'la (The Most High) | 19 | 30 |
| 88 | الغاشية | Al-Ghashiyah (The Overwhelming) | 26 | 30 |
| 89 | الفجر | Al-Fajr (The Dawn) | 30 | 30 |
| 90 | البلد | Al-Balad (The City) | 20 | 30 |
| 91 | الشمس | Ash-Shams (The Sun) | 15 | 30 |
| 92 | الليل | Al-Layl (The Night) | 21 | 30 |
| 93 | الضحى | Ad-Duha (The Morning Brightness) | 11 | 30 |
| 94 | الشرح | Ash-Sharh (The Expansion) | 8 | 30 |
| 95 | التين | At-Tin (The Fig) | 8 | 30 |
| 96 | العلق | Al-'Alaq (The Clot) | 19 | 30 |
| 97 | القدر | Al-Qadr (The Night of Power) | 5 | 30 |
| 98 | البينة | Al-Bayyinah (The Clear Evidence) | 8 | 30 |
| 99 | الزلزلة | Az-Zalzalah (The Earthquake) | 8 | 30 |
| 100 | العاديات | Al-'Adiyat (The Coursers) | 11 | 30 |
| 101 | القارعة | Al-Qari'ah (The Striking Calamity) | 11 | 30 |
| 102 | التكاثر | At-Takathur (The Rivalry) | 8 | 30 |
| 103 | العصر | Al-'Asr (The Time) | 3 | 30 |
| 104 | الهمزة | Al-Humazah (The Backbiter) | 9 | 30 |
| 105 | الفيل | Al-Fil (The Elephant) | 5 | 30 |
| 106 | قريش | Quraysh | 4 | 30 |
| 107 | الماعون | Al-Ma'un (The Small Kindnesses) | 7 | 30 |
| 108 | الكوثر | Al-Kawthar (The Abundance) | 3 | 30 |
| 109 | الكافرون | Al-Kafirun (The Faithless) | 6 | 30 |
| 110 | النصر | An-Nasr (The Help) | 3 | 30 |
| 111 | المسد | Al-Masad (The Palm Fibre) | 5 | 30 |
| 112 | الإخلاص | Al-Ikhlas (The Sincerity) | 4 | 30 |
| 113 | الفلق | Al-Falaq (The Daybreak) | 5 | 30 |
| 114 | الناس | An-Naas (Mankind) | 6 | 30 |

---

## 🌐 Where to Read the Full Translation

- **[Al-Islam.org](https://www.al-islam.org/quran)** — Qarai English translation available in full, with search by surah and ayah
- **[Quran.com](https://quran.com)** — Multiple translations side-by-side; excellent for comparing scholarly renderings
- **[Tanzil.net](https://tanzil.net)** — Download the Arabic text in multiple Unicode formats with full harakat

---

## 📚 Summary and Further Reading

This module serves as your permanent reference anchor for the Quran. The eleven surahs studied in depth here — Fatiha, Ayatul Kursi, Ikhlas, Falaq, Naas, Kawthar, Asr, Nasr, Kafirun, opening of Yasin, and opening of Mulk — represent the theological heart of the Quran: monotheism, divine attributes, guidance, protection, the purpose of life, and the nature of worship.

The three tafseer sources — Al-Mizan, Namoona, and Tasnim — represent three complementary modes of understanding:

- **Al-Mizan** for philosophical and theological depth, and for understanding the Quran through the Quran
- **Namoona** for practical application and social ethics, accessible and clear
- **Tasnim** for mystical and spiritual dimensions, the inner journey of the soul

For deeper study, return to this module after completing any course session. Use the full Surah table as your structural map of the Quran. Use the tafseer switcher to revisit each surah through a different scholarly lens each time.

**Next Steps:** Practice Exams for consolidation of all 11 modules.

</div>

<div class="lang-ur" style="direction:rtl;font-family:'Jameel Noori Nastaleeq','Noto Nastaliq Urdu','Urdu Typesetting',serif;line-height:2.2;font-size:1.1rem" markdown="1">

# ماڈیول ۱۱ — قرآن مجید کا مکمل حوالہ: عربی متن، ترجمہ اور تفسیر

## 📖 اس ماڈیول کے بارے میں

یہ ماڈیول تلاوتِ قرآن کورس کی **مکمل حوالہ پرت** ہے۔ اس میں شامل ہے:

- اہم سورتوں کا **مکمل تشکیل کے ساتھ** مستند عربی متن
- **انگریزی ترجمہ**: سید علی قلی قرائی (۲۰۰۵) — جدید علمی انگریزی ترجمہ
- **اردو ترجمہ**: مولانا ذیشان حیدر جوادی — عصرِ حاضر کے نامور پاکستانی/ہندوستانی عالمِ قرآن
- **تفسیر سوئچر**: المیزان، نمونہ، اور تسنیم میں سے کسی بھی تفسیر کو ٹیب کلک کر کے پڑھیں

### تفسیر سوئچر کا استعمال

ہر سورت کے نیچے تین ٹیب ہیں۔ **المیزان**، **نمونہ**، یا **تسنیم** پر کلک کریں اور اس عالم کی تفسیر پڑھیں۔

---

## 🧑‍🏫 مترجمین اور مفسرین کا تعارف

### اردو ترجمہ — مولانا ذیشان حیدر جوادی

مولانا ذیشان حیدر جوادی (۱۹۳۴–۲۰۱۰) برصغیر پاک و ہند کے بیسویں صدی کے نمایاں ترین عالمِ قرآن تھے۔ ان کا اردو ترجمہ اور تفسیر اپنی وضاحت، دقتِ نظر، اور کلاسیکی عربی سے وفاداری کے لیے مشہور ہے۔

### انگریزی ترجمہ — سید علی قلی قرائی

سید علی قلی قرائی نے اپنا انگریزی ترجمہ ۲۰۰۵ میں شائع کیا۔ یہ فقرہ بہ فقرہ ترجمہ ہے جو کلاسیکی تفسیری ادب سے گہرا تعلق رکھتا ہے۔

### تین تفسیری مآخذ

| عالم | کتاب | جلدیں | طریقہ کار |
|------|------|--------|-----------|
| علامہ سید محمد حسین طباطبائی | تفسیرالمیزان | ۲۷ | قرآن سے قرآن کی تفسیر؛ فلسفیانہ و عرفانی |
| آیت اللہ ناصر مکارم شیرازی | تفسیر نمونہ | ۲۷ | عملی، موضوعاتی؛ سماجی و اخلاقی تاکید |
| آیت اللہ عبداللہ جوادی آملی | تفسیر تسنیم | ۴۰+ | باطنی و روحانی؛ جدید ترین وسیع تفسیر |

---

## ۱. سورۃ الفاتحہ — سورت ۱، آیات ۱–۷

<div class="ayah-arabic">
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾
</div>

**اردو ترجمہ (ذیشان حیدر جوادی):** اللہ کے نام سے جو رحمن اور رحیم ہے۔ سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پروردگار ہے۔ وہ رحمن و رحیم ہے۔ روزِ جزا کا مالک ہے۔ ہم صرف تیری عبادت کرتے ہیں اور صرف تجھ سے مدد مانگتے ہیں۔ ہمیں سیدھے راستے کی ہدایت دے۔ ان لوگوں کے راستے پر جن پر تو نے انعام کیا، نہ ان پر جن پر غضب ہوا اور نہ گمراہوں پر۔

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan2" onclick="tf(this)">المیزان</button>
  <button class="tf-tab" data-tf="namoona2" onclick="tf(this)">نمونہ</button>
  <button class="tf-tab" data-tf="tasnim2" onclick="tf(this)">تسنیم</button>
</div>
<div class="tf-pane active" data-pane="mizan2">

**تفسیرالمیزان — طباطبائی:** سورۃ الفاتحہ "اُمُّ الکتاب" ہے — پورے قرآن کا خلاصہ۔ توحید (الحمد، رب)، معاد (یوم الدین)، اور نبوت (صراط مستقیم) سب اس میں موجود ہیں۔ آیت ۵ میں غائب سے حاضر کی طرف منتقلی — یہ بندے اور خدا کی ملاقات کا لمحہ ہے۔

</div>
<div class="tf-pane" data-pane="namoona2">

**تفسیر نمونہ — مکارم شیرازی:** رحمن اور رحیم کا دو مرتبہ ذکر بتاتا ہے کہ اللہ کی بنیادی صفت رحمت ہے، نہ غضب۔ "اهدِنَا الصراط" کی دعا روزانہ ۱۷ مرتبہ کی جاتی ہے — لیکن کیا ہم سوچتے ہیں کہ صراط مستقیم واقعی کیا مانگتا ہے؟

</div>
<div class="tf-pane" data-pane="tasnim2">

**تفسیر تسنیم — جوادی آملی:** "الحمد" محض زبانی تعریف نہیں — ساری کائنات اپنے وجود سے اللہ کی تسبیح کر رہی ہے (۱۷:۴۴)۔ "إيَّاكَ نَعبُدُ" جمع کے صیغے میں ہے — سچی عبادت اجتماعی سفر ہے۔ صراط مستقیم دل کے اندر کی راہ ہے — بیرونی سڑک نہیں۔

</div>
</div>

---

## ۲. آیۃ الکرسی — سورۃ البقرہ ۲:۲۵۵

<div class="ayah-arabic">
اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴿٢٥٥﴾
</div>

**اردو ترجمہ:** اللہ — اس کے سوا کوئی معبود نہیں — ہمیشہ زندہ ہے، ہر چیز کو قائم رکھنے والا ہے۔ اسے نہ اونگھ آتی ہے اور نہ نیند۔ آسمانوں اور زمین میں جو کچھ ہے سب اسی کا ہے۔ کون ہے جو اس کے حضور بغیر اس کی اجازت کے سفارش کرے؟ وہ جانتا ہے جو ان کے سامنے ہے اور جو ان کے پیچھے ہے، اور وہ اس کے علم میں سے کسی چیز کا احاطہ نہیں کر سکتے مگر جتنا وہ چاہے۔ اس کی کرسی آسمانوں اور زمین کو محیط ہے، اور ان دونوں کی حفاظت اسے گراں نہیں۔ وہ بلند و بزرگ ہے۔

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan3" onclick="tf(this)">المیزان</button>
  <button class="tf-tab" data-tf="namoona3" onclick="tf(this)">نمونہ</button>
  <button class="tf-tab" data-tf="tasnim3" onclick="tf(this)">تسنیم</button>
</div>
<div class="tf-pane active" data-pane="mizan3">

**تفسیرالمیزان:** "الحی القیوم" — یہ دو نام تمام کمالاتِ الہٰی کا خلاصہ ہیں۔ الحی وہ حیات جو مطلق اور غیر محدود ہو۔ القیوم یعنی وہ جو خود سے قائم ہے اور تمام موجودات اس سے قائم ہیں۔ "کرسی" الہٰی علم اور قدرت کی وسعت کو ظاہر کرتا ہے، کوئی مادی تخت نہیں۔

</div>
<div class="tf-pane" data-pane="namoona3">

**تفسیر نمونہ:** آیۃ الکرسی کو "سید القرآن" کہا گیا ہے کیونکہ یہ توحید کے بنیادی اصولوں کو ایک آیت میں سمیٹ لیتی ہے۔ اللہ کو اونگھ اور نیند نہیں آتی — وہ ہر لمحے ہر جگہ مکمل طور پر حاضر ہے۔

</div>
<div class="tf-pane" data-pane="tasnim3">

**تفسیر تسنیم:** "وسِعَ کُرسِیُّہُ السَّمَاوَاتِ وَالأَرضَ" — کائنات کی کوئی چیز الہٰی حکومت کے دائرے سے باہر نہیں۔ العلی اور العظیم صرف القاب نہیں — ہر موجود کا وجود اللہ کی عظمت سے مستعار ہے۔

</div>
</div>

---

## ۳. سورۃ الاخلاص — سورت ۱۱۲، آیات ۱–۴

<div class="ayah-arabic">
قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ ﴿٤﴾
</div>

**اردو ترجمہ:** کہیے وہ اللہ ایک ہے۔ اللہ بے نیاز ہے۔ نہ وہ کسی کا باپ ہے اور نہ کسی کا بیٹا۔ اور نہ اس کا کوئی ہمسر ہے۔

<div class="tf-widget">
<div class="tf-tabs">
  <button class="tf-tab active" data-tf="mizan4" onclick="tf(this)">المیزان</button>
  <button class="tf-tab" data-tf="namoona4" onclick="tf(this)">نمونہ</button>
  <button class="tf-tab" data-tf="tasnim4" onclick="tf(this)">تسنیم</button>
</div>
<div class="tf-pane active" data-pane="mizan4">

**تفسیرالمیزان:** "احد" — "واحد" سے زیادہ قوی لفظ — تکثیر کا نہیں بلکہ دوسرے کے امکان کا بھی نفی کرتا ہے۔ "الصمد" وہ ذات ہے جس کی طرف تمام محتاج رجوع کریں اور جو خود کسی کی محتاج نہ ہو۔

</div>
<div class="tf-pane" data-pane="namoona4">

**تفسیر نمونہ:** یہ سورت ثُلُثُ القرآن کہلاتی ہے کیونکہ اس میں توحید کا خلاصہ ہے۔ "لَم یَلِد وَلَم یُولَد" اُن تمام عقائد کو رد کرتی ہے جو اللہ کے لیے اولاد یا والدین ثابت کریں۔

</div>
<div class="tf-pane" data-pane="tasnim4">

**تفسیر تسنیم:** "قُل" صرف نبیﷺ سے نہیں، ہر مومن سے خطاب ہے — ہم سب کو توحید کا اعلان کرنا ہے۔ یہ سورت اللہ کی اپنے بارے میں خود اعلانی ہے — اسی لیے خاص قربت کی حامل ہے۔

</div>
</div>

---

## ۴. سورۃ الفلق — سورت ۱۱۳، آیات ۱–۵

<div class="ayah-arabic">
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِنْ شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾
</div>

**اردو ترجمہ:** کہیے میں صبح کے پروردگار کی پناہ مانگتا ہوں۔ ہر اس چیز کے شر سے جو اس نے پیدا کی۔ اور اندھیری رات کے شر سے جب اس کی تاریکی چھا جائے۔ اور گرہوں پر پھونکنے والیوں کے شر سے۔ اور حاسد کے شر سے جب وہ حسد کرے۔

---

## ۵. سورۃ الناس — سورت ۱۱۴، آیات ۱–۶

<div class="ayah-arabic">
قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾
</div>

**اردو ترجمہ:** کہیے میں انسانوں کے پروردگار کی پناہ مانگتا ہوں۔ انسانوں کے بادشاہ کی۔ انسانوں کے معبود کی۔ وسواس ڈالنے والے خناس کے شر سے جو انسانوں کے سینوں میں وسوسے ڈالتا ہے۔ خواہ وہ جنوں میں سے ہو یا انسانوں میں سے۔

---

## ۶. سورۃ الکوثر — سورت ۱۰۸، آیات ۱–۳

<div class="ayah-arabic">
إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ﴿١﴾ فَصَلِّ لِرَبِّكَ وَانْحَرْ ﴿٢﴾ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ ﴿٣﴾
</div>

**اردو ترجمہ:** بے شک ہم نے آپ کو کوثر عطا کیا ہے۔ پس اپنے پروردگار کے لیے نماز پڑھیں اور قربانی کریں۔ بے شک آپ کا دشمن ہی بے نسل ہے۔

---

## ۷. سورۃ العصر — سورت ۱۰۳، آیات ۱–۳

<div class="ayah-arabic">
وَالْعَصْرِ ﴿١﴾ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ ﴿٢﴾ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ ﴿٣﴾
</div>

**اردو ترجمہ:** زمانے کی قسم۔ بے شک انسان خسارے میں ہے۔ سوائے ان لوگوں کے جو ایمان لائے اور نیک عمل کیے اور آپس میں حق کی نصیحت کی اور صبر کی تاکید کی۔

---

## ۸. سورۃ النصر — سورت ۱۱۰، آیات ۱–۳

<div class="ayah-arabic">
إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ﴿١﴾ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا ﴿٢﴾ فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا ﴿٣﴾
</div>

**اردو ترجمہ:** جب اللہ کی مدد اور فتح آ جائے۔ اور آپ دیکھیں کہ لوگ اللہ کے دین میں فوج در فوج داخل ہو رہے ہیں۔ تو اپنے پروردگار کی حمد کے ساتھ تسبیح کریں اور اس سے مغفرت مانگیں۔ بے شک وہ بہت توبہ قبول کرنے والا ہے۔

---

## ۹. سورۃ الکافرون — سورت ۱۰۹، آیات ۱–۶

<div class="ayah-arabic">
قُلْ يَا أَيُّهَا الْكَافِرُونَ ﴿١﴾ لَا أَعْبُدُ مَا تَعْبُدُونَ ﴿٢﴾ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ﴿٣﴾ وَلَا أَنَا عَابِدٌ مَا عَبَدتُّمْ ﴿٤﴾ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ﴿٥﴾ لَكُمْ دِينُكُمْ وَلِيَ دِينِ ﴿٦﴾
</div>

**اردو ترجمہ:** کہیے اے کافرو! میں ان کی عبادت نہیں کرتا جن کی تم عبادت کرتے ہو۔ اور نہ تم اس کی عبادت کرتے ہو جس کی میں عبادت کرتا ہوں۔ اور نہ میں ان کی عبادت کرنے والا ہوں جن کی تم عبادت کرتے رہے۔ اور نہ تم اس کی عبادت کرنے والے ہو جس کی میں عبادت کرتا ہوں۔ تمہارا دین تمہارے لیے اور میرا دین میرے لیے۔

---

## ۱۰. سورۃ یس کا آغاز — آیات ۳۶:۱–۵

<div class="ayah-arabic">
يس ﴿١﴾ وَالْقُرْآنِ الْحَكِيمِ ﴿٢﴾ إِنَّكَ لَمِنَ الْمُرْسَلِينَ ﴿٣﴾ عَلَىٰ صِرَاطٍ مُسْتَقِيمٍ ﴿٤﴾ تَنزِيلَ الْعَزِيزِ الرَّحِيمِ ﴿٥﴾
</div>

**اردو ترجمہ:** یس۔ قسم ہے اس حکمت والے قرآن کی۔ بے شک آپ رسولوں میں سے ہیں۔ سیدھے راستے پر۔ یہ عزیز و رحیم کا نازل کردہ ہے۔

---

## ۱۱. سورۃ الملک کا آغاز — آیات ۶۷:۱–۳

<div class="ayah-arabic">
تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ﴿١﴾ الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ ﴿٢﴾ الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَا تَرَىٰ فِي خَلْقِ الْرَّحْمَٰنِ مِنْ تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِنْ فُطُورٍ ﴿٣﴾
</div>

**اردو ترجمہ:** بابرکت ہے وہ جس کے ہاتھ میں بادشاہت ہے اور وہ ہر چیز پر قادر ہے۔ جس نے موت اور زندگی کو پیدا کیا تاکہ تمہیں آزمائے کہ تم میں سے کون بہتر عمل کرتا ہے۔ وہ غالب اور بخشنے والا ہے۔ جس نے سات آسمان تہ بہ تہ بنائے — آپ رحمان کی خلقت میں کوئی بے ترتیبی نہیں دیکھیں گے — نظر دوڑائیے، کیا کوئی شگاف نظر آتا ہے؟

---

## 📚 خلاصہ

اس ماڈیول میں گیارہ سورتوں کا مطالعہ کیا گیا — یہ قرآن مجید کے عقدی مرکز کی نمائندگی کرتی ہیں: توحید، الہٰی صفات، ہدایت، حفاظت، زندگی کا مقصد اور عبادت کی حقیقت۔ تین تفسیری مآخذ — المیزان، نمونہ، اور تسنیم — سمجھنے کے تین مکمل طریقے فراہم کرتے ہیں۔

</div>
