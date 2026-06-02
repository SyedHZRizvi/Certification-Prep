# Module 8: Caching, CDN & Edge 🌎

> **Why this module matters:** SAA loves "low latency for global users" and "reduce origin load" scenarios. CloudFront and Global Accelerator are the two main weapons. Add ElastiCache and DAX for application-tier caching. Get the decision tree right and 5–7 questions become trivial.

> **Prerequisites for this module.**
> - [Module 1](../Module-01-Foundations-Well-Architected/Reading.md) — Edge locations, Route 53 basics
> - [Module 4](../Module-04-VPC-Deep-Dive/Reading.md) — VPC and ALB/NLB topology (origins for CloudFront)
> - [Module 5](../Module-05-S3-Deep-Dive/Reading.md) — S3 is the most common CloudFront origin; Origin Access Control
> - [Module 6](../Module-06-Databases/Reading.md) — DynamoDB is what DAX caches; RDS/Aurora is what ElastiCache caches
> - Basic HTTP knowledge: TTL, Cache-Control headers, request/response cycle, signed URL concept

---

## 🎬 A Story: The Streaming Service That Cracked The Internet

When Netflix first started streaming, they pulled every video from their California data center. Users in London waited 8 seconds for a video to start. Users in Mumbai gave up. The fix wasn't bigger servers — it was **moving content closer to viewers**. They built Open Connect: copies of every popular video on appliances inside ISPs in 200+ cities. London users got Stranger Things from a London cache. Latency dropped from 8 seconds to 50 milliseconds.

That's the core idea of a **CDN** (Content Delivery Network). AWS's CDN is **CloudFront**. For everything that *isn't* cacheable static content — APIs, gaming, real-time apps — AWS gives you **Global Accelerator** instead, which routes traffic over AWS's private backbone to the nearest healthy endpoint.

For your app-tier hot data, you use **ElastiCache** (Redis/Memcached). For your DynamoDB hot keys, you use **DAX**. All four together form the caching stack of a high-performance AWS architecture.

---

## ☁️ CloudFront — The CDN

CloudFront is a global CDN with 600+ edge locations. It caches static and dynamic content close to users.

### Core concepts

| Concept | What |
|---------|------|
| **Distribution** | Your CloudFront deployment (a public URL like `d123.cloudfront.net`) |
| **Origin** | Where the original content lives (S3, ALB, EC2, custom HTTP) |
| **Behavior** | Per-path rule (e.g., `/images/*` → S3 origin, `/api/*` → ALB origin) |
| **Cache Policy** | What headers/query strings/cookies are part of the cache key |
| **Origin Request Policy** | What headers/params are forwarded to the origin |
| **TTL** | How long to cache |
| **OAC** (Origin Access Control) | Locks an S3 origin to be reachable only via CloudFront |
| **Signed URLs / Cookies** | Restrict access to specific users/time |

### Origin types

| Origin | When |
|--------|------|
| **S3 bucket** | Static websites, images, downloads (use OAC) |
| **S3 website endpoint** | Older static site (redirects, index docs) |
| **ALB / EC2 / custom HTTP** | Dynamic content, APIs |
| **MediaStore / MediaPackage** | Video streaming |
| **Lambda function URL** | Serverless origins |

### Lambda@Edge vs CloudFront Functions

| | CloudFront Functions | Lambda@Edge |
|---|----------------------|-------------|
| Language | JavaScript | Node.js / Python |
| Runtime | μs — at edge nodes | ms — at regional edge caches |
| Memory | 2 MB | 128 MB+ |
| Max duration | 1 ms | 5 s viewer, 30 s origin |
| Network access | No | Yes |
| Cost | Cheaper | Pricier |
| Use | Header manipulation, URL rewrites, A/B routing | Auth, dynamic content, image resize |

🎯 **Exam pattern:**
- "Lightweight header manipulation at the edge with sub-ms latency" → **CloudFront Functions**.
- "Authenticate users at the edge with a JWT or call an external service" → **Lambda@Edge**.

### Caching strategies

- **Cache static content aggressively** (longer TTL = more cache hits = less origin load).
- **Cache key**: by default, just the URL path. Add query strings, headers, cookies to the cache key only if responses vary by them.
- **Origin Shield**: an extra layer of caching between edges and origin — useful when many edges hit the same content.

### Security features

- **WAF** (Web Application Firewall) attached to the distribution
- **AWS Shield Standard** included for free (basic DDoS); **Shield Advanced** is paid
- **Geo restriction** — block by country
- **Signed URLs / signed cookies** — restrict access (signed URL: single object; signed cookie: many objects)
- **Field-level encryption** — encrypt specific fields in POST bodies

🎯 **Exam pattern:**
- "Serve private video to authenticated paying users" → **CloudFront with signed URLs / signed cookies + OAC + private S3 bucket**.
- "Reduce origin load + DDoS protection + WAF" → CloudFront + AWS WAF + Shield.

---

## 🚀 Global Accelerator vs CloudFront

| | CloudFront | Global Accelerator |
|---|------------|---------------------|
| Caching | Yes | No |
| Layer | L7 (HTTP) | L4 (TCP/UDP) |
| Use | Static/cacheable web content | Non-cacheable: gaming, IoT, voice, APIs |
| Static IPs | Random (per edge) | **2 static Anycast IPs** |
| Health checks & failover | Edge-level | Regional endpoint health checks; auto-failover |
| Routing | Edge cache hits then origin | Always to nearest healthy endpoint via AWS backbone |

🎯 **Exam pattern:**
- "Need static IPs and route to multi-region endpoints with health checks" → **Global Accelerator**.
- "Low-latency video game traffic to multi-region servers" → **Global Accelerator** (UDP support).
- "Static images and JS for global users" → **CloudFront**.

🧠 *"CloudFront caches. Global Accelerator routes."*

You can use BOTH: CloudFront for static + Accelerator for dynamic APIs.

---

## 🔥 ElastiCache (Recap From Module 6)

In this module we focus on **how to use** ElastiCache for caching, not just on which engine.

### Common caching patterns

| Pattern | How |
|---------|-----|
| **Cache-aside (lazy loading)** | App checks cache → miss → reads DB → writes to cache |
| **Write-through** | App writes to cache AND DB at the same time |
| **TTL-based** | All cache entries expire after N seconds; refresh on miss |

🎯 **Exam pattern:** "Reduce repeated identical RDS queries" → ElastiCache (Redis if persistence/HA; Memcached otherwise).

### Cache invalidation
- Hardest problem in caching. Common: TTL expiry; on-write invalidation; explicit purge.

---

## ⚡ DAX — DynamoDB Accelerator

DAX is a write-through cache **only for DynamoDB**. Lives in a VPC. Single-digit microsecond reads for cached items, 10x improvement for typical workloads. Cluster is fault-tolerant across AZs.

🎯 **DAX vs ElastiCache for DynamoDB:**
- **DAX** is purpose-built; same DynamoDB API; transparent to your code.
- **ElastiCache** is more flexible but requires you to write the cache logic.

🎯 **Exam pattern:** "Repeated reads of same DynamoDB items, want microsecond latency, minimum code change" → **DAX**.

---

## 🗺️ Route 53 — DNS at Global Scale

Route 53 is AWS's authoritative DNS, but it's also a key part of the edge/global story because of **routing policies**.

| Policy | Use |
|--------|-----|
| **Simple** | One record per name |
| **Weighted** | Split traffic by % (e.g., blue/green 90/10) |
| **Latency** | Route user to lowest-latency region |
| **Failover** | Primary + secondary; health-check-based |
| **Geolocation** | Route by user country/continent |
| **Geoproximity** | Route by physical distance with bias (Traffic Flow) |
| **Multivalue Answer** | Return up to 8 healthy records (basic load distribution) |
| **IP-based** | Route by client IP range |

### Health checks
- HTTP/HTTPS/TCP — check endpoint
- Calculated — combine other health checks
- CloudWatch alarm — check a CW alarm state

🎯 **Exam pattern:**
- "Lowest latency for global users to multi-region deployment" → **Latency routing**.
- "Active-passive DR with auto-failover" → **Failover routing + health checks**.
- "Compliance routes EU users to EU endpoint" → **Geolocation routing**.
- "Blue/green deploy 5% to new version" → **Weighted routing**.

### Hosted zones
- **Public hosted zone** — internet-resolvable
- **Private hosted zone** — VPC-scoped DNS (no internet visibility)

---

## 🛡️ AWS WAF, Shield, Firewall Manager (Edge Security)

| Service | What |
|---------|------|
| **AWS WAF** | Layer-7 firewall for HTTP(S). Attaches to ALB, CloudFront, API Gateway, AppSync, Cognito. Rules: IP, geo, rate, regex, managed rule sets (OWASP, bot control). |
| **AWS Shield Standard** | Always-on DDoS protection. FREE. |
| **AWS Shield Advanced** | Paid (~$3,000/mo + bw). DDoS Response Team, cost protection, WAF included, broader resource coverage. |
| **AWS Firewall Manager** | Centralized policy for WAF/Shield/SG across an Org. |
| **AWS Network Firewall** | Stateful network firewall for VPC (L3/4/7 IPS-style). |

🎯 **Exam pattern:**
- "SQL injection / XSS protection on a public site" → **WAF**.
- "DDoS protection at scale with response team" → **Shield Advanced**.
- "Apply WAF rules across many accounts" → **Firewall Manager**.

---

## 🌍 End-To-End Edge Architecture

Putting it together for a global app:

```
                                  Users worldwide
                                       │
                              Route 53 latency policy
                                       │
                ┌───────────────────────┼────────────────────────┐
                ↓                       ↓                        ↓
             us-east-1               eu-west-1               ap-south-1
   CloudFront (static + API edge cache)  +  Global Accelerator (dynamic API)
                ↓                                                ↓
            ALB → ECS                                       ALB → ECS
                ↓                                                ↓
   Aurora Global Database (primary in us-east-1, replicas in others)
   ElastiCache cluster per region · DAX in front of DynamoDB Global Tables
                ↓
   S3 (CRR replicated cross-region)
```

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "CloudFront only caches static content" | It caches anything you let it — including API responses if cache headers allow. |
| "Global Accelerator caches" | NO. Accelerator only routes. CloudFront caches. |
| "WAF works on TCP/UDP" | NO. WAF is L7 HTTP(S). For L3/L4 use Network Firewall or NACLs. |
| "Shield Standard is paid" | Free for all AWS customers. |
| "Lambda@Edge can do everything" | Limits on duration, memory, no support for certain Node modules. CloudFront Functions is faster but very limited. |
| "Route 53 latency = lowest geographic distance" | Latency is measured between users and regions — not pure geography. |

---

## 🚨 Exam Traps

1. **CloudFront vs Global Accelerator:** caches vs routes; HTTP vs TCP/UDP; random IPs vs 2 static.
2. **Lambda@Edge vs CloudFront Functions:** capabilities vs latency/cost.
3. **OAC + Block Public Access** for private S3 behind CloudFront.
4. **Signed URLs (one object) vs Signed Cookies (many objects)** for private content.
5. **Route 53 Failover** routing + health check for active-passive DR.
6. **Geolocation routing** for compliance/residency.
7. **DAX** for sub-ms DynamoDB caching; **ElastiCache** for general app cache.
8. **WAF + Shield Advanced + CloudFront** = standard pattern for DDoS-resilient public app.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **CDN** | Content Delivery Network |
| **CloudFront** | AWS's CDN with edge caching |
| **Distribution** | A CloudFront deployment |
| **Origin** | The source content for CloudFront |
| **OAC** | Origin Access Control — locks S3 origin to CF |
| **Signed URL / Cookie** | Time/permission-bound access tokens |
| **Lambda@Edge / CF Functions** | Code at edge for request manipulation |
| **Global Accelerator** | Static IPs + AWS backbone routing to regional endpoints |
| **Route 53** | DNS + many routing policies |
| **Routing policy** | How DNS decides which IP/region to return |
| **WAF** | L7 firewall |
| **Shield** | DDoS protection (Standard free, Advanced paid) |
| **DAX** | DynamoDB Accelerator (μs cache) |
| **ElastiCache** | In-memory cache (Redis or Memcached) |

---

## ✅ Module 8 Summary

You now know:

- ☁️ CloudFront origins, behaviors, caching, OAC, signed URLs/cookies
- ⚡ Lambda@Edge vs CloudFront Functions
- 🚀 Global Accelerator's static-IP, L4 routing pattern
- 🌎 Route 53 routing policies (simple, weighted, latency, failover, geo, geoproximity, IP)
- 🔥 ElastiCache caching patterns (cache-aside, write-through)
- 🛡️ WAF, Shield Standard vs Advanced, Firewall Manager
- 🚨 The 8 most-tested edge-tier exam traps

**Next steps:**
1. 🎥 [`Videos.md`](./Videos.md)
2. ✏️ [`Quiz.md`](./Quiz.md)
3. 📋 [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ [Module 9: Monitoring & Cost Optimization](../Module-09-Monitoring-Cost-Optimization/Reading.md)

---

## 📖 Case Study — AWS `us-east-1` Outages and the Multi-Region Resilience Lessons (Dec 7, 2021 and June 13, 2023)

**Situation.** Two of the most-discussed AWS production incidents both struck the largest AWS region, **us-east-1 (Northern Virginia)**:

- **December 7, 2021 (~10:30 ET — 18:34 ET):** A network capacity issue in us-east-1 triggered cascading failures across many AWS services (EC2 control plane, ECS, Lambda, EventBridge, the AWS Console itself). Per AWS's official post-event summary (`aws.amazon.com/message/12721/`), the trigger was an automated scaling event that overwhelmed internal services. Effects rippled to Disney+, Netflix (partially), Robinhood, Coinbase, Tinder, McDonald's app, and the AWS Service Health Dashboard itself (irony noted in the post-mortem).
- **June 13, 2023 (~12:11 ET — 16:30 ET):** A Lambda subsystem failure in us-east-1 cascaded to API Gateway, EventBridge, and dozens of customer applications. AWS's post-event summary detailed an internal database issue that affected Lambda's invocation path.

Both incidents shared a pattern: **a single-region outage degraded global services that relied on us-east-1 for control plane operations** — even when their workloads were in other regions. The reason: many AWS *global* services (IAM, Route 53 control plane, CloudFront control plane, Organizations) have **their primary endpoints in us-east-1**.

**Decision.** Companies that came out best had pre-existing multi-region architectures:

- **Netflix** used **Route 53 latency routing** to fail over from us-east-1 to us-west-2 within ~3 minutes (per their tech blog, December 2021 retrospective). Their multi-region active-active stack absorbed the failure
- **Capital One** used **Route 53 failover routing** with health checks on per-region endpoints
- **Shopify** ran active-active across **us-east-1 + us-west-2 + eu-west-1** with DynamoDB Global Tables and Aurora Global Database; storefront traffic was unaffected
- **Many smaller shops** that had picked us-east-1 as "default" because it was cheapest and oldest had **no DR plan** and were down for the full duration

**Outcome.** The 2021 outage cost the broader economy an estimated **$3–5B in productivity and direct service-revenue losses** (per Parametrix Insurance public estimates). The 2023 outage was shorter but still drove a wave of "multi-region by default" mandates at large enterprises.

The architecture-level lessons (and the SAA exam patterns):

- **Route 53 failover routing with health checks** = the canonical active-passive DR pattern
- **CloudFront's multi-origin failover** (Origin Groups) = automatic origin failover at the edge
- **Aurora Global Database** = <1 second cross-region replication; database survives single-region outage
- **DynamoDB Global Tables** = multi-active; writes anywhere replicate everywhere
- **us-east-1 is NOT a safe default** for global services; AWS recommends spreading control-plane-dependent workloads across regions

**Lesson for the exam / for practitioners.** Every "survive a regional outage" question on SAA-C03 is about exactly this scenario. The answer chain is:

- **CloudFront** in front (multi-origin failover, geo distribution)
- **Route 53 health-checked failover routing** for DNS
- **Aurora Global Database** OR **DynamoDB Global Tables** for state
- **Global Accelerator** for non-HTTP traffic with static-IP failover

Note also: **CloudFront caching itself** insulates against origin outages for the duration of TTL. A long TTL on static content (e.g., 1 day) means an origin failure during that window is invisible to users. This is the **"static stability via Availability Zones"** principle from Becky Weiss's AWS Builders' Library article — the same idea applied to regions.

**Discussion (Socratic).**
- **Q1.** AWS's own *Service Health Dashboard* was unreachable during parts of the December 2021 outage because *it also ran in us-east-1*. Defend AWS's choice to centralize. What's the architectural reason AWS would put the SHD in one region, and what's the right pattern?
- **Q2.** A startup CTO argues: "us-east-1 is cheapest and most-feature-complete; multi-region triples our cost. We'll accept the outage risk." For what kinds of business and what SLA does this argument actually hold up?
- **Q3.** The June 2023 outage affected EventBridge and Lambda — which means many "event-driven" architectures stopped processing events. If you'd built a backup path through SQS (which uses a different subsystem), would you have survived? Argue for and against intentionally building redundant async paths.

---

## 💬 Discussion — Socratic Prompts

1. **CloudFront caching vs origin shield.** Origin Shield is an additional regional cache between CloudFront edges and your origin. For what kind of workload and traffic pattern does Origin Shield pay for itself, and when is it a waste?
2. **Lambda@Edge vs CloudFront Functions — modern decision rule.** CloudFront Functions is dramatically cheaper but capability-limited. Lambda@Edge is more flexible. Build a decision tree for picking between them.
3. **Signed URLs vs Cognito-protected CloudFront distributions.** Both restrict access. Signed URLs are simpler but per-object/per-cookie. Cognito-protected is dynamic and identity-aware. When is each the right pattern?
4. **AWS Global Accelerator's $18/month base cost.** GA charges a flat ~$18/month minimum even at zero traffic. At what request volume does that fixed cost become trivial vs prohibitive?
5. **WAF managed rule groups vs custom rules.** Managed rules (AWS WAF Bot Control, OWASP Top 10, etc.) cost monthly per rule group. Custom rules require operational maintenance. What's the trade-off matrix at a 50-engineer startup vs a 5,000-engineer enterprise?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 09 (Monitoring) covers CloudWatch Synthetics canary scripts that proactively test multi-region failover. Module 10 (DR) covers the active-active and active-passive patterns that survived these outages.
> - **Cross-course:** `06-Azure-Administrator` Module 08 covers Azure Front Door — the Azure analog of CloudFront + Global Accelerator combined. `09-CompTIA-Security-Plus` Module 05 covers WAF and DDoS theory at the academic level.
> - **Practice:** Practice Exam 1 has 4 edge/CDN questions; Practice Exam 2 has 5; Final Mock has 6.
> - **Real world:** Set up a personal CloudFront distribution in front of an S3 bucket with OAC. Free tier covers a year of typical hobbyist usage.

---

## 📚 Further Sources (This Module)

**AWS official**
- 📖 **CloudFront Developer Guide** — `docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/`
- 📖 **Global Accelerator Developer Guide** — `docs.aws.amazon.com/global-accelerator/latest/dg/`
- 📖 **Route 53 Developer Guide** — `docs.aws.amazon.com/Route53/latest/DeveloperGuide/`
- 📖 **AWS WAF Developer Guide** — `docs.aws.amazon.com/waf/latest/developerguide/`
- 📖 **AWS Builders' Library — *"Static stability using Availability Zones"* (Becky Weiss)** — the canonical resilience essay; explicitly cited as the basis for multi-AZ design patterns.

**re:Invent talks**
- 🎤 **NET306 (2023): *Deep dive on Amazon CloudFront*** — exam-aligned 60-minute talk.
- 🎤 **NET406 (2023): *AWS edge networking — Global Accelerator, CloudFront, and Route 53 together***
- 🎤 **ARC301 (2023): *Resilience patterns and anti-patterns at AWS scale*** — references the 2021 outage.

**Post-mortems (incident summaries — public)**
- 📄 **AWS Service Event in N. Virginia Region, December 7, 2021** — `aws.amazon.com/message/12721/`
- 📄 **AWS Service Event in Northern Virginia Region, June 13, 2023** — published in AWS message archive.
- 📰 **Parametrix Insurance — *Cloud Outage Cost Report 2022*** — quantifies the 2021 outage's economic impact.

**Academic foundations**
- 📄 **Brewer, Eric (2017).** *Spanner, TrueTime and the CAP Theorem.* Google Research Technical Report. Updated take on global distributed systems trade-offs — directly relevant to Aurora Global vs DynamoDB Global Tables.
