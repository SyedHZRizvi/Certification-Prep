<link href="https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&family=Gulzar&display=swap" rel="stylesheet">
<style>
.lang-ur h1,.lang-ur h2,.lang-ur h3,.lang-ur h4{font-family:'Gulzar','Noto Nastaliq Urdu',serif;font-weight:400;line-height:2.4;}
.lang-ur h1{font-size:1.8em;}
.lang-ur h2{font-size:1.5em;}
.lang-ur h3{font-size:1.25em;}
</style>
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

<div class="lang-en" markdown="1">

# Module 2 — Harakat: Short Vowels & Reading the Quran

## 🌟 The Skeleton and the Flesh

Imagine you receive a text message with only consonants: "TH CTY S BRTFL." You can probably guess "The City is Beautiful" — but you needed context to fill in the vowels. Now imagine reading the same incomplete text in a language you've only just learned. Impossible.

Arabic letters are consonants. Without vowel marks, reading Arabic is like reading a skeleton — you can see the bones, but you don't know exactly what creature you're looking at. **Harakat** are the vowel marks — the flesh on the skeleton — and the Quran has them on every single letter.

This is the miracle of Quranic Arabic for learners: **every sound is written out for you.** No guessing. No context-dependent reading. The harakat tell you exactly how to pronounce each syllable. Once you master these eight marks, you can read *any* page of the Quran aloud.

---

## 📍 The Eight Harakat — Complete Guide

### 1. Fatha (فَتْحَة) — ـَ
**Shape:** A small diagonal stroke above the letter  
**Sound:** Short "a" as in "cat" or "sun"  
**Urdu name:** زَبَر (Zabar)

| Arabic | Pronunciation | Meaning |
|--------|---------------|---------|
| بَ | ba | (syllable) |
| كَتَبَ | kataba | he wrote |
| رَحِمَ | rahima | he was merciful |

### 2. Kasra (كَسْرَة) — ـِ
**Shape:** A small diagonal stroke below the letter  
**Sound:** Short "i" as in "bit" or "sit"  
**Urdu name:** زِيْر (Zair)

| Arabic | Pronunciation | Meaning |
|--------|---------------|---------|
| بِ | bi | with (preposition) |
| بِسْمِ | bismi | in the name of |
| رَحِيمِ | rahīm | merciful |

### 3. Damma (ضَمَّة) — ـُ
**Shape:** A small "u"-shape or "waw" above the letter  
**Sound:** Short "u" as in "put" or "book"  
**Urdu name:** پِيش (Pesh)

| Arabic | Pronunciation | Meaning |
|--------|---------------|---------|
| بُ | bu | (syllable) |
| كُتُبٌ | kutubun | books |
| رَبُّ | rabbu | Lord |

### 4. Sukoon (سُكُون) — ـْ
**Shape:** A small hollow circle above the letter  
**Sound:** NO vowel — the letter is "resting" (no sound follows it)  
**Urdu name:** جَزْم (Jazm)

This is critical for Quran reading. When you see a Sukoon, you pronounce the consonant and stop — no vowel follows.

| Arabic | Pronunciation | Meaning |
|--------|---------------|---------|
| بِسْمِ | bismi | (the "s" has Sukoon — no vowel after it) |
| مَلِكْ | malik | king |

### 5. Shaddah (شَدَّة) — ـّ
**Shape:** A small "w" or "saddle" shape above the letter  
**Sound:** The letter is DOUBLED — pronounce it twice as long  
**Urdu name:** تَشْدِيد (Tashdeed)

The Shaddah represents two identical consonants merged together. The first carries a Sukoon, the second carries whatever vowel comes next.

| Arabic | Pronunciation | Meaning |
|--------|---------------|---------|
| رَبِّ | rabbi | my Lord |
| الرَّحْمَٰنِ | al-rahmāni | the Most Gracious |
| اللَّهِ | allāhi | of Allah |

> 🎯 **Key insight:** The doubled Lam in اللَّهِ (Allah) is written as one letter with a Shaddah. Notice: اللَّـ = Alif + Lam + Lam (with Shaddah) + Ha.

### 6. Tanween (تَنْوِين) — ـً ـٍ ـٌ
**Shape:** Double Fatha, double Kasra, or double Damma  
**Sound:** Add "n" to the vowel sound at the end of a word  
**Urdu name:** تَنوِين

| Type | Mark | Sound | Example |
|------|------|-------|---------|
| Fathatan | ـً | "-an" | كِتَابًا = kitāban |
| Kasratan | ـٍ | "-in" | رَجُلٍ = rajulin |
| Dammatan | ـٌ | "-un" | بَيْتٌ = baytun |

Tanween appears only at the **end** of words and only on nouns/adjectives (not on verbs or pronouns).

### 7. Madd Alif (مَدّ) — Long Vowels
When a Fatha is followed by an Alif (ا), the "a" sound is lengthened:
- Short: بَ (ba) → Long: بَا (bā, held twice as long)
- Similarly: Kasra + Ya (ي) = long "ī" sound | Damma + Waw (و) = long "ū" sound

| Short | Long | Difference |
|-------|------|-----------|
| بَ (ba) | بَا (bā) | 1 beat → 2 beats |
| بِ (bi) | بِي (bī) | 1 beat → 2 beats |
| بُ (bu) | بُو (bū) | 1 beat → 2 beats |

---

## 📖 Reading Bismillah — Step by Step

Let's apply everything above to the most recited phrase in the Quran:

<div style="font-size:2.4em;direction:rtl;text-align:center;line-height:2.5;font-family:'Amiri Quran','Scheherazade New','Traditional Arabic',serif;color:#065f46;padding:1rem;background:#f0fdf4;border-radius:8px;margin:1rem 0;">
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
</div>

**Word-by-word breakdown:**

| Arabic | Harakat on each letter | Pronunciation | Meaning |
|--------|------------------------|---------------|---------|
| بِ | Ba + Kasra | bi | in |
| سْمِ | Seen + Sukoon + Meem + Kasra | smi | name |
| بِسْمِ | | bismi | in the name of |
| اللَّهِ | Alif + double-Lam (Shaddah) + Ha + Kasra | allāhi | of Allah |
| الرَّحْمَٰنِ | Al + Ra (Shaddah) + Ha + Meem + long-ā + Noon + Kasra | al-rahmāni | the Most Gracious |
| الرَّحِيمِ | Al + Ra (Shaddah) + Ha + Kasra + Ya (long ī) + Meem + Kasra | al-rahīmi | the Most Merciful |

**Full pronunciation:** *Bismi Allāhi al-Rahmāni al-Rahīm*

---

## 🔢 Counting Beats — Vowel Length

Think of Arabic vowels like musical notes:

| Vowel Type | Duration | Symbol |
|-----------|----------|--------|
| Short (Fatha/Kasra/Damma) | 1 beat | ـَ ـِ ـُ |
| Long (Madd) | 2 beats | ـَا ـِي ـُو |
| Extra-long (Madd rules) | 4–6 beats | Tajweed Module 3 |

> 🧒 **For kids:** Short vowels are like quarter notes ♩. Long vowels (Madd) are like half notes 𝅗𝅥. When you recite the Quran, you're playing music!

---

## 🚨 Common Mistakes to Avoid

| Mistake | Wrong | Correct | Why It Matters |
|---------|-------|---------|----------------|
| Ignoring Sukoon | ba-si-mi | bis-mi | Sukoon stops the vowel — no "i" after Seen |
| Not doubling Shaddah | rabi | rabbi | The Lam in رَبِّ must be doubled |
| Reading Tanween at word boundary | kutubun + anna → kutubunnanna | kutubun-anna | Tanween merges with next word (Idgham, covered Module 3) |
| Making long vowels too short | al-rahman (fast) | al-rahmān (held 2 beats) | Changes meaning/beauty of recitation |

---

## 📝 Practice Exercises

### Exercise 1: Identify the Harakat
For each letter below, name the harakat and its sound:
- حَ → ?
- لِ → ?
- مُ → ?
- دْ → ?
- بَّ → ?

### Exercise 2: Read these Quranic words
Practice reading with harakat — look up pronunciation after:

<div style="font-size:1.8em;direction:rtl;text-align:center;line-height:2.8;font-family:'Amiri Quran','Scheherazade New','Traditional Arabic',serif;color:#065f46;padding:1rem;background:#f0fdf4;border-radius:8px;margin:1rem 0;">
اَلْحَمْدُ — رَبِّ — اِيَّاكَ — نَعْبُدُ — اِهْدِنَا
</div>

### Exercise 3: Urdu Harakat Names
Match the Arabic term with the Urdu name:
- Fatha → ?
- Kasra → ?
- Damma → ?
- Sukoon → ?
- Shaddah → ?

---

## 🎯 Common Misconceptions

- **"Harakat are only for beginners"** — Wrong. Even advanced reciters use harakated Quran. The full tashkeel (complete vowel marking) is a feature, not a crutch.
- **"Sukoon means stop reciting"** — No. Sukoon means no vowel on that letter, but you continue reciting without a pause (unless also a Waqf mark).
- **"Tanween is the same as a regular Noon"** — Not exactly. Tanween is a nunation on a noun that follows specific pronunciation rules when followed by certain letters (Module 3, Tajweed).
- **"Shaddah doubles the letter visually"** — It only doubles it in sound. The letter is written once but pronounced twice.

---

## 📚 Summary

| Harakat | Shape | Sound | Urdu Name |
|---------|-------|-------|-----------|
| Fatha | ـَ | short "a" | زَبَر |
| Kasra | ـِ | short "i" | زِيْر |
| Damma | ـُ | short "u" | پِيش |
| Sukoon | ـْ | no vowel | جَزْم |
| Shaddah | ـّ | double the letter | تَشْدِيد |
| Fathatan | ـً | "-an" | تَنوِين فَتحَة |
| Kasratan | ـٍ | "-in" | تَنوِين كَسرَة |
| Dammatan | ـٌ | "-un" | تَنوِين ضَمَّة |

---

## 🔭 Next Steps

Move on to **Module 3 — Tajweed Rules: Foundations** to learn what happens at the *joins* between words — how Noon, Tanween, and Meem interact with the letters that follow them.

</div>

<div class="lang-ur" style="direction:rtl;text-align:right;font-family:'Noto Nastaliq Urdu','Gulzar','Urdu Typesetting',serif;line-height:2.2;font-size:1.1rem;" markdown="1">

# ماڈیول ۲ — حرکات: مختصر حروف علت اور قرآن کی قراءت

## 🌟 ڈھانچہ اور جسم

تصور کریں آپ کو صرف حروف مل رہے ہیں: "ک-ت-ب" — کیا یہ "کَتَبَ" (اس نے لکھا)، "کِتَاب" (کتاب) یا "کُتُب" (کتابیں) ہے؟ آپ کو نہیں معلوم۔

عربی حروف صرف ڈھانچہ ہیں — جسم (یعنی آواز) کے بغیر۔ **حرکات** وہ نشانیاں ہیں جو ہر حرف کو مکمل آواز دیتی ہیں۔ قرآن کریم میں ہر حرف پر حرکت لکھی ہوتی ہے — اس لیے قرآن کو پڑھنا سب سے آسان عربی ہے!

---

## 📍 آٹھ حرکات — مکمل رہنما

### ۱. فَتحَہ — ـَ (زَبَر)
**شکل:** حرف کے اوپر چھوٹی ترچھی لکیر  
**آواز:** مختصر "آ" — جیسے "کَب" میں "آ"

### ۲. کَسرَہ — ـِ (زِیر)
**شکل:** حرف کے نیچے چھوٹی ترچھی لکیر  
**آواز:** مختصر "اِ" — جیسے "کِتاب" میں "اِ"

### ۳. ضَمَّہ — ـُ (پِیش)
**شکل:** حرف کے اوپر چھوٹا "واو" جیسا نشان  
**آواز:** مختصر "اُ" — جیسے "گُل" میں "اُ"

### ۴. سُکُون — ـْ (جَزم)
**شکل:** حرف کے اوپر چھوٹا خالی گول  
**آواز:** کوئی حرکت نہیں — حرف خاموش رہتا ہے

### ۵. شَدَّہ — ـّ (تَشدِید)
**شکل:** حرف کے اوپر چھوٹا "و" جیسا نشان  
**آواز:** حرف کو دوگنا پڑھا جاتا ہے

---

## 📖 بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ پڑھنا سیکھیں

<div style="font-size:2.4em;text-align:center;line-height:2.5;font-family:'Amiri Quran','Scheherazade New','Traditional Arabic',serif;color:#065f46;padding:1rem;background:#f0fdf4;border-radius:8px;margin:1rem 0;direction:rtl;">
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
</div>

| عربی | اعراب | تلفظ | مطلب |
|------|-------|-------|------|
| بِ | زیر | bi | میں |
| سْمِ | جزم + زیر | smi | نام |
| اللَّهِ | شددہ + زیر | allāhi | اللہ کے |
| الرَّحْمَٰنِ | شددہ + لمبی آ + زیر | al-rahmāni | رحمان |
| الرَّحِيمِ | شددہ + زیر + لمبی ی + زیر | al-rahīmi | رحیم |

---

## 📚 خلاصہ

| حرکت | نشان | آواز | اردو نام |
|------|-------|-------|----------|
| فتحہ | ـَ | مختصر "آ" | زَبَر |
| کسرہ | ـِ | مختصر "اِ" | زِیر |
| ضمہ | ـُ | مختصر "اُ" | پِیش |
| سکون | ـْ | کوئی آواز نہیں | جَزم |
| شددہ | ـّ | حرف دوگنا | تَشدِید |
| فتحتین | ـً | "-اَن" | تنوین فتحہ |
| کسرتین | ـٍ | "-اِن" | تنوین کسرہ |
| ضمتین | ـٌ | "-اُن" | تنوین ضمہ |

## 🔭 اگلا قدم

**ماڈیول ۳ — تجوید کے بنیادی اصول** کی طرف جائیں جہاں آپ سیکھیں گے کہ الفاظ آپس میں کیسے ملتے ہیں — نون، تنوین، اور میم کے احکام۔

</div>
