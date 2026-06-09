<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #818cf8; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4f46e5, #8b5cf6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
.vg-thumb img { width: 100%; height: 100%; object-fit: cover; }
.vg-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.35); color: #fff; font-size: 48px; opacity: 0; transition: opacity .2s; }
.vg-card:hover .vg-play { opacity: 1; }
.vg-meta { padding: 14px 16px; }
.vg-tag { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
.vg-tag.essential { background: #ddd6fe; color: #5b21b6; }
.vg-tag.recommended { background: #dbeafe; color: #1e40af; }
.vg-tag.optional { background: #fef3c7; color: #92400e; }
.vg-title { font-weight: 700; font-size: 14px; line-height: 1.4; margin: 0 0 4px; color: #0f172a; }
.vg-creator { font-size: 12.5px; color: #64748b; margin: 0 0 6px; }
.vg-duration { font-size: 11px; color: #94a3b8; font-weight: 600; }
.vg-section-title { font-size: 18px; font-weight: 800; margin: 30px 0 8px; color: #0f172a; }
.vg-section-desc { font-size: 14px; color: #64748b; margin: 0 0 4px; }
</style>

# 🎥 Module 8 Videos: Production Patterns & Safety

> **How to use:** Watch in two passes, first the "what" (the patterns), then the "how" (the tools). Simon Willison and Lakera-style adversarial talks are uniquely valuable here.

## ⭐ Essential watching (~70 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Simon+Willison+prompt+injection+LLM+attack+talk" data-video-id="jrHRe9lSqqA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Prompt Injection, Simon Willison</p>
      <p class="vg-creator">Simon Willison</p>
      <span class="vg-duration">⏱ 30 min · The canonical practitioner overview</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="mDiglllKPwg" href="https://www.youtube.com/results?search_query=OWASP+top+10+LLM+applications+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">OWASP Top 10 for LLM Applications</p>
      <p class="vg-creator">OWASP / community</p>
      <span class="vg-duration">⏱ 20 min · The threat taxonomy</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+Claude+prompt+injection+defense+best+practices" data-video-id="L_2BMDM4jMk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Anthropic-Recommended Injection Defenses</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 15 min · The Claude-specific playbook</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Langfuse+production+LLM+observability+tracing+tutorial" data-video-id="OqnfZpxC1KQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Langfuse, Production LLM Observability</p>
      <p class="vg-creator">Langfuse</p>
      <span class="vg-duration">⏱ 18 min · Tracing + evals + alerts</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="aTiz6ocJm4Q" href="https://www.youtube.com/results?search_query=Claude+AWS+Bedrock+HIPAA+regulated+industry+architecture" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Claude on Bedrock, Regulated Industry Setup</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 20 min · BAA, residency, VPC endpoints</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Helicone+LLM+proxy+observability+cost+monitor" data-video-id="YHGrHoV_0PE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Helicone, Drop-in LLM Observability</p>
      <p class="vg-creator">Helicone</p>
      <span class="vg-duration">⏱ 12 min · Cost + latency dashboards</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="npAcymuDmeA" href="https://www.youtube.com/results?search_query=red+team+LLM+adversarial+test+playbook" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Red-Teaming LLM Apps, Playbook</p>
      <p class="vg-creator">Lakera / OpenAI / community</p>
      <span class="vg-duration">⏱ 18 min · Pre-launch adversarial testing</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Klarna+AI+assistant+architecture+talk" data-video-id="f4xwzR1v47s" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Klarna AI Assistant, Architecture & Lessons</p>
      <p class="vg-creator">Klarna / various conferences</p>
      <span class="vg-duration">⏱ 25 min · Production at scale</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Promptfoo+CI+eval+tutorial+LLM" data-video-id="h68HoLrEudc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Promptfoo, CI Evals for Prompts</p>
      <p class="vg-creator">Promptfoo</p>
      <span class="vg-duration">⏱ 25 min · Open-source eval CLI</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Presidio+PII+detection+LLM" data-video-id="9qM_aIniXcE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Microsoft Presidio, PII Detection at Input/Output</p>
      <p class="vg-creator">Microsoft</p>
      <span class="vg-duration">⏱ 15 min · Open-source PII tool</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="-v2zEkKQv2Y" href="https://www.youtube.com/results?search_query=NIST+AI+risk+management+framework+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">NIST AI Risk Management Framework</p>
      <p class="vg-creator">NIST / community</p>
      <span class="vg-duration">⏱ 20 min · Governance for AI teams</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=LLM+kill+switch+blast+radius+rollback+production" data-video-id="xU2M1nfRf0U" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Kill Switches & Blast Radius for LLM Apps</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 18 min · Operational discipline</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Simon Willison** | THE practitioner blog/talks on prompt injection. |
| **Anthropic (official)** | Authoritative safety guidance for Claude specifically. |
| **Langfuse / Helicone** | Observability deep dives. |
| **Lakera AI / Promptfoo** | Adversarial / eval tooling. |
| **AWS / GCP / Azure cloud channels** | Cloud-specific production patterns. |
| **OWASP** | Industry-standard threat models. |
| **AI Engineer Conf** | Production case studies. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Three layers of prompt-injection defense?
2. The 6 production pillars in this module?
3. The right hosting choice for a HIPAA workload + reason?
4. Tools to use for: (a) tracing, (b) cost monitoring, (c) eval CI, (d) PII detection?
5. The "Klarna lesson", what makes the unit economics work?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md) and ultimately for the Practice Exams.
