<style>
.exam-wrap{font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;}
.exam-header{background:linear-gradient(135deg,#1e1b4b,#4338ca);color:#fff;border-radius:14px;padding:1.5rem 2rem;margin-bottom:2rem;}
.exam-header h1{margin:0 0 .4rem;font-size:1.5rem;}
.exam-meta{display:flex;gap:1rem;flex-wrap:wrap;font-size:.875rem;opacity:.85;margin-top:.6rem;}
.exam-meta span{background:rgba(255,255,255,.15);padding:3px 10px;border-radius:6px;}
.q-block{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:1.25rem 1.5rem;margin-bottom:1rem;}
.q-num{font-size:.75rem;font-weight:700;color:#6366f1;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.4rem;}
.q-text{font-weight:600;font-size:1rem;margin-bottom:.85rem;color:#0f172a;}
.q-urdu{font-family:'Noto Nastaliq Urdu',Georgia,serif;font-size:1.2rem;direction:rtl;text-align:right;line-height:2.2;color:#1e1b4b;background:#f5f3ff;padding:.5rem 1rem;border-radius:8px;margin-bottom:.85rem;}
.opt-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;}
.opt-list li label{display:flex;align-items:center;gap:10px;padding:.55rem .85rem;border-radius:8px;border:2px solid #e2e8f0;cursor:pointer;font-size:.95rem;transition:border-color .15s,background .15s;}
.opt-list li label:hover{border-color:#818cf8;background:#f5f3ff;}
.opt-list li input{accent-color:#4338ca;}
.opt-list li label.selected{border-color:#4338ca;background:#eef2ff;}
.opt-list li label.correct{border-color:#16a34a!important;background:#f0fdf4!important;}
.opt-list li label.wrong{border-color:#dc2626!important;background:#fef2f2!important;}
.fill-input{width:100%;padding:.5rem .8rem;border-radius:8px;border:2px solid #e2e8f0;font-size:.95rem;font-family:'Noto Nastaliq Urdu',Georgia,serif;direction:rtl;box-sizing:border-box;}
.fill-input:focus{outline:none;border-color:#4338ca;}
.submit-btn{background:#4338ca;color:#fff;border:none;border-radius:10px;padding:.75rem 2.5rem;font-size:1rem;font-weight:700;cursor:pointer;margin:1.5rem 0;}
.submit-btn:hover{background:#3730a3;}
.result-box{display:none;background:#fff;border:2px solid #4338ca;border-radius:14px;padding:1.5rem 2rem;margin-top:1rem;text-align:center;}
.result-score{font-size:2.5rem;font-weight:900;color:#4338ca;}
.result-msg{font-size:1.1rem;color:#334155;margin:.5rem 0;}
.result-pct{font-size:1rem;color:#64748b;}
.answer-key{margin-top:1.5rem;background:#f8fafc;border-radius:10px;padding:1rem 1.25rem;text-align:left;font-size:.9rem;}
.answer-key summary{font-weight:700;cursor:pointer;color:#4338ca;}
.answer-key table{width:100%;border-collapse:collapse;margin-top:.75rem;}
.answer-key td{padding:5px 10px;border-bottom:1px solid #e2e8f0;}
.answer-key td:first-child{font-weight:700;color:#64748b;width:40px;}
</style>

<div class="exam-wrap">

<div class="exam-header">
  <h1>Practice Exam 1 — بنیادی سطح</h1>
  <p style="margin:.3rem 0 0;opacity:.9;">Urdu Language Mastery — Level A1/A2</p>
  <div class="exam-meta">
    <span>15 Questions</span>
    <span>Pass: 10/15 (67%)</span>
    <span>Topics: Alphabet · Vocabulary · Greetings · Numbers · Honorifics</span>
  </div>
</div>

<form id="exam-form">

<!-- Q1 -->
<div class="q-block">
  <div class="q-num">Question 1</div>
  <div class="q-text">Which Urdu letter makes the retroflex 'T' sound (tongue curled back)?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q1" value="A"> ت (ta)</label></li>
    <li><label><input type="radio" name="q1" value="B"> ٹ (ṭa)</label></li>
    <li><label><input type="radio" name="q1" value="C"> ث (se)</label></li>
    <li><label><input type="radio" name="q1" value="D"> ذ (zal)</label></li>
  </ul>
</div>

<!-- Q2 -->
<div class="q-block">
  <div class="q-num">Question 2</div>
  <div class="q-text">What does this Urdu word mean?</div>
  <div class="q-urdu">کتاب</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q2" value="A"> House</label></li>
    <li><label><input type="radio" name="q2" value="B"> Friend</label></li>
    <li><label><input type="radio" name="q2" value="C"> Book</label></li>
    <li><label><input type="radio" name="q2" value="D"> Water</label></li>
  </ul>
</div>

<!-- Q3 -->
<div class="q-block">
  <div class="q-num">Question 3</div>
  <div class="q-text">What is the standard Muslim greeting in Urdu?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q3" value="A"> مبارک ہو</label></li>
    <li><label><input type="radio" name="q3" value="B"> السلام علیکم</label></li>
    <li><label><input type="radio" name="q3" value="C"> شکریہ</label></li>
    <li><label><input type="radio" name="q3" value="D"> خدا حافظ</label></li>
  </ul>
</div>

<!-- Q4 -->
<div class="q-block">
  <div class="q-num">Question 4</div>
  <div class="q-text">What does شکریہ mean?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q4" value="A"> Hello</label></li>
    <li><label><input type="radio" name="q4" value="B"> Goodbye</label></li>
    <li><label><input type="radio" name="q4" value="C"> Sorry</label></li>
    <li><label><input type="radio" name="q4" value="D"> Thank you</label></li>
  </ul>
</div>

<!-- Q5 -->
<div class="q-block">
  <div class="q-num">Question 5</div>
  <div class="q-text">How do you say 'ten' in Urdu?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q5" value="A"> پانچ</label></li>
    <li><label><input type="radio" name="q5" value="B"> سات</label></li>
    <li><label><input type="radio" name="q5" value="C"> دس</label></li>
    <li><label><input type="radio" name="q5" value="D"> بارہ</label></li>
  </ul>
</div>

<!-- Q6 -->
<div class="q-block">
  <div class="q-num">Question 6</div>
  <div class="q-text">What does this phrase mean?</div>
  <div class="q-urdu">آپ کیسے ہیں؟</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q6" value="A"> What is your name?</label></li>
    <li><label><input type="radio" name="q6" value="B"> How are you? (formal)</label></li>
    <li><label><input type="radio" name="q6" value="C"> Where do you live?</label></li>
    <li><label><input type="radio" name="q6" value="D"> What do you want?</label></li>
  </ul>
</div>

<!-- Q7 -->
<div class="q-block">
  <div class="q-num">Question 7</div>
  <div class="q-text">Which word means 'beautiful' in Urdu?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q7" value="A"> غریب</label></li>
    <li><label><input type="radio" name="q7" value="B"> خوبصورت</label></li>
    <li><label><input type="radio" name="q7" value="C"> مشکل</label></li>
    <li><label><input type="radio" name="q7" value="D"> آسان</label></li>
  </ul>
</div>

<!-- Q8 -->
<div class="q-block">
  <div class="q-num">Question 8</div>
  <div class="q-text">Match: What does پانچ mean?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q8" value="A"> Three</label></li>
    <li><label><input type="radio" name="q8" value="B"> Seven</label></li>
    <li><label><input type="radio" name="q8" value="C"> Five</label></li>
    <li><label><input type="radio" name="q8" value="D"> Nine</label></li>
  </ul>
</div>

<!-- Q9 -->
<div class="q-block">
  <div class="q-num">Question 9</div>
  <div class="q-text">How do you say 'My name is Ahmed' in Urdu?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q9" value="A"> میرا نام احمد ہے</label></li>
    <li><label><input type="radio" name="q9" value="B"> میں احمد کرتا ہوں</label></li>
    <li><label><input type="radio" name="q9" value="C"> احمد میرا ہوں</label></li>
    <li><label><input type="radio" name="q9" value="D"> نام احمد میرا ہے کہ</label></li>
  </ul>
</div>

<!-- Q10 -->
<div class="q-block">
  <div class="q-num">Question 10</div>
  <div class="q-text">What is the correct response to السلام علیکم?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q10" value="A"> خدا حافظ</label></li>
    <li><label><input type="radio" name="q10" value="B"> وعلیکم السلام</label></li>
    <li><label><input type="radio" name="q10" value="C"> بالکل ٹھیک</label></li>
    <li><label><input type="radio" name="q10" value="D"> مبارک ہو</label></li>
  </ul>
</div>

<!-- Q11 -->
<div class="q-block">
  <div class="q-num">Question 11</div>
  <div class="q-text">What does مبارک ہو mean?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q11" value="A"> Goodbye</label></li>
    <li><label><input type="radio" name="q11" value="B"> Congratulations / Blessings</label></li>
    <li><label><input type="radio" name="q11" value="C"> Good morning</label></li>
    <li><label><input type="radio" name="q11" value="D"> I am well</label></li>
  </ul>
</div>

<!-- Q12 -->
<div class="q-block">
  <div class="q-num">Question 12</div>
  <div class="q-text">Which honorific is used for a respected man in a formal letter?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q12" value="A"> محترمہ</label></li>
    <li><label><input type="radio" name="q12" value="B"> صاحبہ</label></li>
    <li><label><input type="radio" name="q12" value="C"> محترم جناب</label></li>
    <li><label><input type="radio" name="q12" value="D"> آپ کا</label></li>
  </ul>
</div>

<!-- Q13 -->
<div class="q-block">
  <div class="q-num">Question 13</div>
  <div class="q-text">How do you write the number ۵ in English numerals?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q13" value="A"> 3</label></li>
    <li><label><input type="radio" name="q13" value="B"> 5</label></li>
    <li><label><input type="radio" name="q13" value="C"> 7</label></li>
    <li><label><input type="radio" name="q13" value="D"> 8</label></li>
  </ul>
</div>

<!-- Q14 -->
<div class="q-block">
  <div class="q-num">Question 14</div>
  <div class="q-text">What does خدا حافظ mean?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q14" value="A"> Good morning</label></li>
    <li><label><input type="radio" name="q14" value="B"> Thank you</label></li>
    <li><label><input type="radio" name="q14" value="C"> Goodbye (May God protect you)</label></li>
    <li><label><input type="radio" name="q14" value="D"> Welcome</label></li>
  </ul>
</div>

<!-- Q15 -->
<div class="q-block">
  <div class="q-num">Question 15</div>
  <div class="q-text">Identify the correct Urdu for 'house/home'.</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q15" value="A"> کتاب</label></li>
    <li><label><input type="radio" name="q15" value="B"> دوست</label></li>
    <li><label><input type="radio" name="q15" value="C"> گھر</label></li>
    <li><label><input type="radio" name="q15" value="D"> وقت</label></li>
  </ul>
</div>

<button type="button" class="submit-btn" onclick="submitExam()">Submit Exam</button>

</form>

<div class="result-box" id="result-box">
  <div class="result-score" id="result-score"></div>
  <div class="result-msg" id="result-msg"></div>
  <div class="result-pct" id="result-pct"></div>


<details class="answer-key">
    <summary>View Answer Key</summary>
    <table>
      <tr><td>Q1</td><td>B — ٹ (retroflex T)</td></tr>
      <tr><td>Q2</td><td>C — Book (کتاب)</td></tr>
      <tr><td>Q3</td><td>B — السلام علیکم</td></tr>
      <tr><td>Q4</td><td>D — Thank you</td></tr>
      <tr><td>Q5</td><td>C — دس (ten)</td></tr>
      <tr><td>Q6</td><td>B — How are you? (formal)</td></tr>
      <tr><td>Q7</td><td>B — خوبصورت (beautiful)</td></tr>
      <tr><td>Q8</td><td>C — Five</td></tr>
      <tr><td>Q9</td><td>A — میرا نام احمد ہے</td></tr>
      <tr><td>Q10</td><td>B — وعلیکم السلام</td></tr>
      <tr><td>Q11</td><td>B — Congratulations/Blessings</td></tr>
      <tr><td>Q12</td><td>C — محترم جناب</td></tr>
      <tr><td>Q13</td><td>B — 5</td></tr>
      <tr><td>Q14</td><td>C — Goodbye (May God protect you)</td></tr>
      <tr><td>Q15</td><td>C — گھر (house/home)</td></tr>
    </table>
  </details>
</div>

</div>

<script>
const ANSWERS_1={q1:'B',q2:'C',q3:'B',q4:'D',q5:'C',q6:'B',q7:'B',q8:'C',q9:'A',q10:'B',q11:'B',q12:'C',q13:'B',q14:'C',q15:'C'};
function submitExam(){
  let score=0,total=Object.keys(ANSWERS_1).length;
  document.querySelectorAll('.opt-list li label').forEach(l=>l.classList.remove('correct','wrong'));
  Object.entries(ANSWERS_1).forEach(([qname,correct])=>{
    const selected=document.querySelector('input[name="'+qname+'"]:checked');
    const allOpts=document.querySelectorAll('input[name="'+qname+'"]');
    allOpts.forEach(o=>{
      if(o.value===correct)o.parentElement.classList.add('correct');
    });
    if(selected){
      if(selected.value===correct)score++;
      else selected.parentElement.classList.add('wrong');
    }
  });
  const pct=Math.round((score/total)*100);
  const passed=score>=10;
  const rb=document.getElementById('result-box');
  rb.style.display='block';rb.style.borderColor=passed?'#16a34a':'#dc2626';
  document.getElementById('result-score').textContent=score+'/'+total;
  document.getElementById('result-score').style.color=passed?'#16a34a':'#dc2626';
  document.getElementById('result-msg').textContent=passed?'Passed! Well done on your A1/A2 foundations.':'Not yet — review Module 1–4 vocabulary and try again.';
  document.getElementById('result-pct').textContent=pct+'% (Pass: 67%)';
  rb.scrollIntoView({behavior:'smooth'});
}
document.querySelectorAll('.opt-list li label').forEach(l=>{
  l.addEventListener('click',()=>{
    const name=l.querySelector('input').name;
    document.querySelectorAll('input[name="'+name+'"]').forEach(i=>i.parentElement.classList.remove('selected'));
    l.classList.add('selected');
  });
});
</script>


## Answer Key

See interactive answer key above — click "View Answer Key" inside the result box.
