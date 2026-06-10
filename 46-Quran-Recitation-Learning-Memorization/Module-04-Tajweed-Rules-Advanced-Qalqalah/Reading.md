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

# Module 4 — Tajweed Rules: Advanced — Qalqalah, Meem, and Waqf

## 🌟 The Spring and the Brake

You've learned the "highway" rules of Tajweed — how long to hold vowels, what happens to Noon. Now we tackle three more rule sets that give Quranic recitation its distinctive rhythm and resonance.

Think of **Qalqalah** as a spring under a bouncing ball — certain letters "bounce" after they are pressed. Think of **Waqf** as traffic signals — green (don't stop), yellow (optional stop), red (must stop). And **Meem Sakin** rules are like Noon Sakin's cousin — the same logic, applied to Meem.

---

## 🔔 Section 1 — Qalqalah (القَلقَلَة): The Echo-Bounce

**Qalqalah** means "trembling" or "vibration." When certain consonants appear with a Sukoon — or are stopped upon at the end of a verse — they produce a short echoing bounce, like a ball bouncing once after hitting a hard floor.

### The 5 Qalqalah Letters

**Mnemonic:** قُطُبُ جَد (quṭbujad) — all 5 in two words

| Letter | Name | Qalqalah Strength |
|--------|------|------------------|
| ق | Qaf | Strongest |
| ط | Ta (heavy) | Strong |
| ب | Ba | Medium |
| ج | Jeem | Medium |
| د | Dal | Light |

### Two Levels of Qalqalah

1. **Qalqalah Sughra (Minor)** — when the letter appears mid-word or mid-verse with Sukoon
   - Example: يَقْطِنُونَ — the Qaf has Sukoon mid-word, bounce lightly
   - Example: تَجعَلُوا — the Jeem has Sukoon

2. **Qalqalah Kubra (Major)** — when stopping at the end of a verse on a Qalqalah letter
   - Example: stopping on وَالفَجْرِ — the Ra has no Qalqalah, but if the verse ended on وَالطَّارِقِ, the Qaf has a strong Qalqalah
   - Rule: Major Qalqalah is stronger and more pronounced than minor

> 🎯 **Listen to Sheikh Mishary Al-Afasy** recite any surah containing قُطُب جَد letters at verse-end. The distinctive "bounce" is unmistakable and instantly recognisable.

---

## 👄 Section 2 — Meem Sakin Rules

When a Meem carries a Sukoon (مْ), three rules apply depending on the letter that follows:

### Rule 1 — Ikhfa Shafawi (إِخفَاء شَفوِي) — Lip Concealment
**When:** مْ followed by **Ba (ب)** only  
**How:** Meem with Sukoon is softly concealed before Ba, with Ghunnah (2 beats)  
**Why "Shafawi":** Both Meem and Ba are lip letters (شَفَة = lip)

| Example | Explanation |
|---------|-------------|
| يَعصِمُكُم مِّن | Meem Sakin before Meem — wait, this is next rule |
| أَمبِر | Meem Sakin before Ba |

### Rule 2 — Idgham Shafawi (إِدغَام شَفوِي) — Lip Merging
**When:** مْ followed by **Meem (م)**  
**How:** The Meem with Sukoon fully merges into the following Meem, with Ghunnah (2 beats)  
**Result:** Pronounced as one long Meem

| Example | Explanation |
|---------|-------------|
| لَكُم مَّا لَكُم | The first Meem merges into the second |

### Rule 3 — Izhar Shafawi (إِظهَار شَفوِي) — Lip Clarity
**When:** مْ followed by **any letter except Ba and Meem**  
**How:** Pronounce the Meem clearly — no merging, no concealment, no Ghunnah  
**Note:** Be especially careful when Meem Sakin precedes Waw (و) or Fa (ف) — these are lip letters too, so beginners often accidentally merge

| Example | Explanation |
|---------|-------------|
| قُلتُم فَسَيَقُولُ | Meem before Fa — Izhar (clear) |
| أَنتُم وَمَا | Meem before Waw — Izhar (clear) |

---

## ⚖️ Section 3 — Lam Rules: Thick vs Thin

The letter Lam (ل) can be pronounced "thick" (heavy) or "thin" (light):

### Thin Lam (Lam Tarqeeq) — Almost Always
In most positions, Lam is thin (light). This is the default.

### Thick Lam (Lam Tafkheem) — One Exception Only
The Lam in **اللَّه** (Allah's name) is **thick/heavy** when preceded by a Fatha or Damma:

| Example | Lam | Why |
|---------|-----|-----|
| قَالَ اللَّهُ | Thick | preceded by Fatha |
| يَعبُدُ اللَّهَ | Thick | preceded by Damma |
| بِسمِ اللَّهِ | **Thin** | preceded by Kasra — exception! |

> 🎯 **Key rule:** The Lam of اللَّه is thick UNLESS preceded by a Kasra, in which case it becomes thin.

---

## 🔴 Section 4 — Raa Rules: Thick vs Thin

The letter Ra (ر) also switches between thick (Tafkheem) and thin (Tarqeeq).

| Ra is Thick (heavy) when: | Ra is Thin (light) when: |
|---------------------------|--------------------------|
| Ra has a Fatha | Ra has a Kasra |
| Ra has a Damma | Ra follows a Kasra |
| Ra has a Sukoon + preceded by Fatha/Damma | Ra is in a word with "thin" pattern |
| Ra has a Sukoon + preceded by original Kasra lost (kasra not inherent) | — |

**Most common pattern:**
- رَ / رُ → Thick Ra
- رِ → Thin Ra

Example: الرَّحمَن — the Ra has Shaddah + Fatha → thick. الرَّحِيم — the Ra has Shaddah + Fatha → thick.

---

## 🚦 Section 5 — Waqf: The Art of Stopping

**Waqf** (وَقف) means "stopping" — the rules governing where and how to pause in recitation.

### Types of Waqf

| Symbol | Name | Meaning | Action |
|--------|------|---------|--------|
| م | Lazim | Necessary stop | MUST stop here |
| ط | Mutlaq | Absolute stop | Good to stop |
| ج | Jaiz | Permitted | May stop or continue |
| ز | Mujawwaz | Allowed with preference to continue | Better to continue |
| ص | Murakhkhas | Permitted due to length | Stop only if breath needed |
| لا | La (not) | Prohibited stop | Do NOT stop here |
| ﴾ | End of verse | Verse end | Stopping is Sunnah |

### What Happens When You Stop

When stopping (Waqf) at the end of a word:
1. The last harakat is **dropped** — the final vowel is not pronounced
2. If the last letter is normally a short vowel, it "rests" (becomes Sukoon-like)
3. If the last letter has Tanween, the pronunciation changes based on Tanween type:
   - Fathatan (ـً) → becomes a long "ā" (the Alif is pronounced)
   - Kasratan/Dammatan → both Noon sounds drop

### Wasla (Connection)

**Wasla** means continuing without stopping. When continuing from one word to the next:
- The final harakat of the previous word is pronounced
- The Lam of the definite article (ال) when preceded by a word is pronounced as "al" (or its sound blends with the previous word's final vowel)

---

## 🎯 Common Misconceptions

- **"Qalqalah is an optional stylistic effect"** — It is mandatory for the 5 letters when they carry Sukoon or appear at the end of a verse stop.
- **"Ikhfa Shafawi means Meem becomes Ba"** — No. The Meem is concealed (hidden) before Ba, not converted. The Ghunnah is held but the letter remains Meem.
- **"You should always stop at commas or punctuation marks"** — The Waqf marks in the Quran take precedence over punctuation. Some punctuation follows Waqf; much does not.
- **"The Lam in Bismillah is always thick"** — Wrong. In بِسمِ اللَّهِ, the Lam of اللَّه is thin because it is preceded by a Kasra (on Meem of بِسمِ).

---

## 📚 Summary

| Rule | Letters | Action |
|------|---------|--------|
| Qalqalah Sughra | ق ط ب ج د (with Sukoon mid-word) | Light bounce |
| Qalqalah Kubra | ق ط ب ج د (at verse-end Waqf) | Strong bounce |
| Ikhfa Shafawi | مْ before ب | Meem concealed, Ghunnah 2 beats |
| Idgham Shafawi | مْ before م | Meem merges, Ghunnah 2 beats |
| Izhar Shafawi | مْ before anything else | Meem clear, no Ghunnah |
| Lam Tafkheem | اللَّه after Fatha/Damma | Thick Lam |
| Lam Tarqeeq | All other Lam positions | Thin Lam |
| Waqf Lazim | م | Must stop |
| Waqf prohibited | لا | Must not stop |

## 🔭 Next Steps

With Modules 1–4 complete, you have the full Tajweed toolkit. Now apply everything in **Module 5 — Surah Al-Fatiha: Complete Study** — the most important surah in the Quran.

</div>

<div class="lang-ur" style="direction:rtl;text-align:right;font-family:'Jameel Noori Nastaleeq','Noto Nastaliq Urdu','Urdu Typesetting',serif;line-height:2.2;font-size:1.1rem;" markdown="1">

# ماڈیول ۴ — تجوید کے اعلیٰ اصول: قلقلہ، میم اور وقف

## 🔔 حصہ اول — قَلقَلَہ (گونج)

قلقلہ کا مطلب ہے لرزش یا اچھال۔ جب پانچ خاص حروف پر سکون آئے تو وہ ہلکی سی گونج کے ساتھ ادا ہوتے ہیں۔

**پانچ حروف قلقلہ:** ق ط ب ج د (یاد گاری: قُطُب جَد)

| قسم | وقت | گونج کی طاقت |
|-----|-----|------------|
| قلقلہ صُغریٰ | لفظ کے درمیان سکون | ہلکی |
| قلقلہ کُبریٰ | آیت کے آخر میں وقف | طاقتور |

---

## 👄 حصہ دوم — میم ساکن کے احکام

| حکم | میم کے بعد کا حرف | کیا کریں؟ | غنہ؟ |
|-----|-----------------|-----------|------|
| اخفاء شفوی | ب | میم چھپائیں | ہاں ۲ حرکات |
| ادغام شفوی | م | میم ملائیں | ہاں ۲ حرکات |
| اظہار شفوی | باقی سب | میم واضح | نہیں |

---

## ⚖️ حصہ سوم — لام: موٹی اور پتلی

لام اللہ کے لفظ میں موٹی ہے جب فتحہ یا ضمہ سے پہلے آئے، لیکن کسرہ کے بعد پتلی ہو جاتی ہے۔

---

## 🚦 حصہ چہارم — وَقف (رکنے کے نشانات)

| نشان | نام | حکم |
|------|-----|-----|
| م | لازم | ضرور رکیں |
| ط | مطلق | رکنا بہتر |
| ج | جائز | رک سکتے ہیں |
| لا | لا | مت رکیں |
| آیت کا آخر ﴾ | — | سنت ہے رکنا |

---

## 📚 خلاصہ

تجوید کے بنیادی اور اعلیٰ دونوں قواعد اب آپ نے سیکھ لیے۔ اب ماڈیول ۵ میں سورۃ الفاتحہ پر ان سب کو عملی طور پر لاگو کریں۔

</div>
