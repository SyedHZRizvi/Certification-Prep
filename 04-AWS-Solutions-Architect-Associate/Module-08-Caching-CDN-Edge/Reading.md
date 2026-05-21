# Module 8: Caching, CDN & Edge 🌎

> **Why this module matters:** SAA loves "low latency for global users" and "reduce origin load" scenarios. CloudFront and Global Accelerator are the two main weapons. Add ElastiCache and DAX for application-tier caching. Get the decision tree right and 5–7 questions become trivial.

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

## 📚 Further Reading

- 📖 **[CloudFront Developer Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/)**
- 📖 **[Global Accelerator Developer Guide](https://docs.aws.amazon.com/global-accelerator/latest/dg/)**
- 📖 **[Route 53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/)**
- 📖 **[AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/)**
