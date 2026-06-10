<link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&family=Gulzar&display=swap" rel="stylesheet">
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

# Module 3 — Tajweed Rules: Foundations

## 🌟 The Sheet Music of the Quran

When a professional musician reads sheet music, they don't just hit the right notes — they follow tempo markings, dynamics, and articulation instructions. *Forte* means play loudly. *Legato* means connect the notes smoothly. *Staccato* means detach each note.

Tajweed is the "sheet music instructions" for the Quran. The word **تَجْوِيد** literally means "to beautify" or "to do well." It is the science of reciting the Quran exactly as the Prophet Muhammad (sallallahu alayhi wa aalihi wasallam) recited it — with the precise duration, connection, nasalisation, and emphasis that preserve both the beauty and the meaning of the divine text.

> *"And recite the Quran with measured recitation (tarteel)."* — Quran 73:4

---

## 🎵 Section 1 — Madd: The Art of Lengthening

"Madd" (مَد) means lengthening or prolongation. When you see certain letter combinations in the Quran, you hold the vowel for a specific number of beats.

### Unit of Measurement: the Harakah
One **harakah** = the time to open/close a finger = approximately 0.5 seconds in moderate recitation.

### Type 1 — Madd al-Tabee'i (المَدّ الطَبِيعِي) — Natural Madd
**Length:** 2 harakahs (beats)  
**Rule:** When a long vowel letter follows its matching short vowel with no interference.

| Pattern | Letters | Example | Pronunciation |
|---------|---------|---------|---------------|
| Fatha + Alif | ـَا | نَارٌ | nārun (fire) |
| Kasra + Ya | ـِي | دِينٌ | dīnun (religion) |
| Damma + Waw | ـُو | نُورٌ | nūrun (light) |

This Madd appears in **every** Surah of the Quran. **Memorise this rule.**

### Type 2 — Madd al-Muttasil (المَدّ المُتَّصِل) — Connected Madd
**Length:** 4–5 harakahs  
**Rule:** A Madd letter is followed immediately by a Hamza (ء) **in the same word**.

| Example | Word | Meaning |
|---------|------|---------|
| جَاءَ | jā'a | he came |
| جِيءَ | jī'a | it was brought |
| سُوءَ | sū'a | evil |

### Type 3 — Madd al-Munfasil (المَدّ المُنفَصِل) — Separated Madd
**Length:** 4–5 harakahs  
**Rule:** A Madd letter at the end of a word is followed by a Hamza at the **beginning of the next word**.

| Example | Two Words | Meaning |
|---------|-----------|---------|
| إِنَّا أَعطَيْنَاكَ | innā aʻṭaynāka | We gave you |
| هُوَ اللَّهُ | huwa allāhu | He is Allah |

### Type 4 — Madd al-Leen (مَدّ اللِّين) — Ease Madd
**Length:** 2 harakahs (at minimum, more when stopping)  
**Rule:** A Waw (و) or Ya (ي) with Sukoon preceded by a Fatha, **and** the following letter has any harakat (not Sukoon or Madd).

| Example | Pronunciation | 
|---------|---------------|
| خَوْفٌ | khawfun (fear) |
| بَيْتٌ | baytun (house) |

### Type 5 — Madd al-Badal (مَدّ البَدَل) — Substitute Madd

**Length:** 2 harakahs  
**Rule:** A Hamza (ء/أ/إ) appears **before** a Madd letter in the same word. The term "Badal" means substitute — historically, the Madd letter replaced a second Hamza that was lightened out of the word.

**How to identify:** Hamza → then a long vowel letter (Alif/Waw/Ya) following it in the same word.

| Example | Transliteration | Meaning | What to Notice |
|---------|-----------------|---------|----------------|
| آمَنَ | āmana | he believed | Hamza (أ) + Alif Madd → extend 2 beats |
| إِيمَان | īmān | faith | Hamza (إ) + Ya Madd → extend 2 beats |
| أُوتِيَ | ūtiya | he was given | Hamza (أ) + Waw Madd → extend 2 beats |

> 🔑 **Badal vs Muttasil — the critical distinction:** In **Muttasil**, the Madd letter comes *first* then Hamza follows (e.g., جَاءَ — Ya then Hamza). In **Badal**, the Hamza comes *first* then the Madd letter follows (e.g., إِيمَان — Hamza then Ya). Same two elements, opposite order, different Madd type.

---

### Type 6 — Madd al-Arid lil-Sukoon (مَدّ عَارِض لِلسُّكُون) — Contextual Sukoon Madd

**Length:** 2, 4, or 6 harakahs — reciter's choice (but be consistent within a surah)  
**Rule:** A Madd letter (or Leen letter) is followed by a letter that normally carries a harakat — but you **stop** at the end of a verse, which creates a temporary Sukoon on the final letter. That contextual Sukoon triggers this Madd.

This is the most practically common Madd in recitation: virtually every verse-end you pause on creates a Madd Arid.

| Verse-End Example | Surah | What Happens on Stop |
|-------------------|-------|---------------------|
| رَحِيمٌ | Al-Fatiha 1:3 | م gets temporary sukoon → ي before it extends 2-6 beats |
| الْعَالَمِينَ | Al-Fatiha 1:2 | ن gets temporary sukoon → ي before it extends 2-6 beats |
| الضَّالِّينَ | Al-Fatiha 1:7 | ن gets temporary sukoon → ي before it extends 2-6 beats |
| الرَّحِيمِ | Basmala last word | م gets temporary sukoon → ي before it extends 2-6 beats |

> 🎯 **Why 3 length options?** Because the Sukoon is *temporary* (only when stopping, not when continuing), classical scholars permit 2, 4, or 6 beats. Most reciters settle on 4 beats at verse-ends as a balanced default. The rule: once you choose a length, apply it consistently throughout the surah.

> 📌 **Every verse of Al-Fatiha demonstrates this:** Recite Al-Fatiha and stop at the end of each verse — every single verse-end applies Madd Arid lil-Sukoon. The elongation you hear from expert reciters at verse boundaries is this Madd, not stylistic flourish.

---

## 🔤 Section 2 — Noon Sakin and Tanween Rules

When a Noon with Sukoon (نْ) or Tanween (ـً ـٍ ـٌ) appears before certain letters, the recitation rule changes. There are 4 rules — memorise them in order.

### Rule 1 — Izhar (إِظهَار) — Clear Pronunciation
**Meaning:** "To make clear"  
**When:** نْ or Tanween is followed by one of 6 throat letters: **أ ه ع ح غ خ**  
**How:** Pronounce the Noon clearly, no nasalisation, no merging

| Mnemonic | Letters |
|----------|---------|
| Every Throat letter triggers Izhar | أ ه ع ح غ خ |

| Example | Written | Pronounced |
|---------|---------|------------|
| مَنْ أَمَنَ | man amana | Clear Noon before Alif |
| عَلِيمٌ حَكِيمٌ | ʻalīmun ḥakīmun | Clear Noon in Tanween before Ha |

### Rule 2 — Idgham (إِدغَام) — Merging
**Meaning:** "To insert" — the Noon merges into the next letter  
**When:** نْ or Tanween is followed by one of 6 letters: **ي ن م و ل ر**  
**Mnemonic (Arabic):** يَنمُولر (yanmulur)

Two subtypes:
- **Idgham with Ghunnah (nasal sound):** Letters ي ن م و
- **Idgham without Ghunnah:** Letters ل ر

| Example | Rule | How to Recite |
|---------|------|---------------|
| مِن يَقُولُ | min yaqūlu | Noon merges into Ya, held with nasal sound |
| مِن رَّبِّكَ | min rabbika | Noon merges into Ra, no nasal hold |
| هُدًى لِّلمُتَّقِين | hudan lil-muttaqīn | Tanween merges into Lam |

> ⚠️ **Exception:** If نن or نم appear in the **same word**, Idgham does NOT apply. Example: بُنيَان (bun'yān) — the Noon is clear.

### Rule 3 — Iqlab (إِقلَاب) — Conversion
**Meaning:** "To flip/convert"  
**When:** نْ or Tanween is followed by **Ba (ب)** only  
**How:** The Noon converts to a Meem sound, held with Ghunnah (nasal sound)

| Example | Written | Pronounced |
|---------|---------|------------|
| مِن بَعْدِ | min baʻdi | Noon → Meem sound + Ghunnah before Ba |
| سَمِيعٌ بَصِيرٌ | samīʻun baṣīrun | Tanween → Meem before Ba |

**MEMORISE THIS:** Only 1 letter triggers Iqlab: **ب**

### Rule 4 — Ikhfa (إِخفَاء) — Concealment
**Meaning:** "To hide" — between clear and merged  
**When:** نْ or Tanween is followed by **any of the remaining 15 letters**  
**How:** Pronounce with partial nasalisation (Ghunnah), the Noon "hides" but is not fully merged

The 15 Ikhfa letters: **ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك**

| Example | Rule |
|---------|------|
| مِن قَبلُ | Ikhfa before Qaf |
| جَنَّاتٍ تَجرِي | Ikhfa — Tanween before Ta |

---

## 🌙 Section 3 — Ghunnah (الغُنَّة)

**Ghunnah** means nasal resonance — a humming sound produced through the nasal passage.

**Length:** 2 harakahs (beats) — always

**When Ghunnah is required:**
1. Shaddah on Noon (نّ) or Meem (مّ) — always apply Ghunnah
2. Idgham with Ghunnah (ي ن م و letters after نْ/Tanween)
3. Iqlab (ب after نْ/Tanween)
4. Ikhfa (15 letters after نْ/Tanween)
5. Ikhfa Meem Sakin (covered Module 4)

**How to produce Ghunnah:** Close the mouth gently, hum through the nose. The sound comes from the nasal passage, not the throat.

> 🧒 **For kids:** Ghunnah is like humming "Mmmm" when something smells delicious. The nasal hum is the sound of the letter "hiding" in your nose!

---

## Summary Table — Noon Sakin & Tanween Rules

| Rule | Letters That Trigger It | What Happens | Ghunnah? |
|------|------------------------|--------------|----------|
| Izhar | أ ه ع ح غ خ | Clear Noon | No |
| Idgham (with Ghunnah) | ي ن م و | Noon merges, nasal held | Yes |
| Idgham (without Ghunnah) | ل ر | Noon merges cleanly | No |
| Iqlab | ب only | Noon → Meem sound | Yes |
| Ikhfa | ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك | Partial nasal | Yes |

**Total letters covered: 6+6+1+15 = 28 — all Arabic letters!**

---

## 🎯 Common Misconceptions

- **"Tajweed is only for advanced reciters"** — False. The basic Madd rules and Noon rules are essential from day one; they affect almost every single line of the Quran.
- **"Idgham means the Noon disappears completely"** — Not quite. The Noon's sound merges into the next letter, but the nasal quality (Ghunnah) often remains.
- **"You can apply these rules from memory without practice"** — Practice out loud is essential. Knowing the rule intellectually is only 20% of mastery — the other 80% is your mouth learning the muscle memory.
- **"Madd length doesn't matter for meaning"** — It can. Some scholars note that changing the length of a Madd can affect the emotional and spiritual register of the recitation, even if it doesn't change the literal meaning.

---

## 📚 Summary

| Concept | Key Points |
|---------|-----------|
| Madd al-Tabee'i | 2 beats — long vowel with no special following letter |
| Madd al-Muttasil | 4–5 beats — Madd letter then Hamza in the same word |
| Madd al-Munfasil | 4–5 beats — Madd at word-end, Hamza starts next word |
| Madd al-Leen | 2 beats minimum — Waw/Ya with Sukoon after Fatha |
| Madd al-Badal | 2 beats — Hamza BEFORE a Madd letter in the same word (آمَنَ، إِيمَان) |
| Madd al-Arid lil-Sukoon | 2–6 beats (choose one, stay consistent) — Madd letter before a verse-end you stop on |
| Izhar | Clear Noon before throat letters أ ه ع ح غ خ |
| Idgham | Noon merges before ي ن م و ل ر |
| Iqlab | Noon → Meem before ب only |
| Ikhfa | Partial nasal before 15 remaining letters |
| Ghunnah | 2-beat nasal hum with Shaddah on Noon/Meem, and in Idgham/Iqlab/Ikhfa |

*Madd al-Lazim (6 beats, obligatory) → Module 4.*

## 🔭 Next Steps

Move to **Module 4 — Tajweed Advanced** for Qalqalah, Meem Sakin rules, Lam & Ra rules, Waqf, and Madd Lazim.

</div>

<div class="lang-ur" style="direction:rtl;text-align:right;font-family:'Noto Nastaliq Urdu','Gulzar','Urdu Typesetting',serif;line-height:2.2;font-size:1.1rem;" markdown="1">

# ماڈیول ۳ — تجوید کے بنیادی اصول

## 🌟 قرآن کا موسیقی کا نوٹ

تجوید کا مطلب ہے "بہتر بنانا"۔ یہ قرآن کریم کو اسی طرح تلاوت کرنے کا علم ہے جس طرح نبی اکرم صلی اللہ علیہ وآلہ وسلم نے تلاوت فرمائی — صحیح مدّ، ادغام، اخفاء اور غنہ کے ساتھ۔

---

## 🎵 حصہ اول — مَدّ: لمباؤ

"مَد" کا مطلب ہے لمبا کرنا۔

| مَدّ کی قسم | طوالت | اصول |
|------------|-------|-------|
| مَدِّ طَبِیعِی | ۲ حرکات | لمبا حرف + کوئی رکاوٹ نہیں |
| مَدِّ مُتَّصِل | ۴-۵ حرکات | مَدّ حرف + ہمزہ ایک ہی لفظ میں |
| مَدِّ مُنفَصِل | ۴-۵ حرکات | مَدّ حرف آخر میں + ہمزہ اگلے لفظ میں |

---

## 🔤 حصہ دوم — نون ساکن اور تنوین کے احکام

نون ساکن (نْ) یا تنوین کے بعد چار احکام ہیں:

| حکم | حروف | کیا کریں؟ | غنہ؟ |
|-----|-------|-----------|------|
| اِظہَار | أ ه ع ح غ خ | نون واضح پڑھیں | نہیں |
| اِدغَام (غنہ کے ساتھ) | ي ن م و | نون ملا لیں، ناک سے آواز | ہاں |
| اِدغَام (بغیر غنہ) | ل ر | نون ملا لیں، صاف | نہیں |
| اِقلَاب | ب | نون → میم کی آواز | ہاں |
| اِخفَاء | ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك | جزوی ناکی آواز | ہاں |

**یادداشت:** تمام ۲۸ حروف ان ۵ احکام میں آ جاتے ہیں!

---

## 🌙 حصہ سوم — غُنَّہ

غنہ ناک سے نکلنے والی گنگناہٹ کی آواز ہے — ۲ حرکات طویل۔ یہ نون مشدد (نّ) اور میم مشدد (مّ) پر ہمیشہ آتا ہے، اور ادغام، اقلاب، اخفاء میں بھی۔

---

## 📚 خلاصہ

نون ساکن/تنوین کے احکام: اِظہار، اِدغام، اِقلاب، اِخفاء — یہ چاروں قرآن کی ہر سطر میں ملتے ہیں۔

## 🔭 اگلا قدم

**ماڈیول ۴ — تجوید کے اعلیٰ اصول**: قلقلہ، میم ساکن، وقف کے احکام۔

</div>
