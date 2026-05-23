# ✏️ Module 8 Quiz: Caching, CDN & Edge

> **Instructions:** 24 questions, ~30 min. Target 20/24.

> **Bloom's distribution.** Remember 5 (21%) · Understand 6 (25%) · Apply 8 (33%) · Analyze/Evaluate 4 (17%) · Create 1 (4%).

---

## Questions

### Q1. To privately serve a static S3 site behind CloudFront with the bucket NOT publicly reachable: *(Apply)*
A. CloudFront + OAC + Block Public Access on bucket
B. Make the bucket public
C. Use NAT Gateway
D. Use Direct Connect

---

### Q2. CloudFront and Global Accelerator differ in that: *(Understand)*
A. CloudFront caches; Global Accelerator only routes
B. They are identical
C. Only CloudFront uses AWS backbone
D. Only Global Accelerator works in CDN mode

---

### Q3. For a global multiplayer game using UDP needing static IPs and lowest latency between users and regional servers: *(Apply)*
A. CloudFront
B. Global Accelerator
C. Route 53 latency routing alone
D. NAT Gateway

---

### Q4. To rewrite HTTP headers at the edge with sub-millisecond latency and minimal cost: *(Apply)*
A. Lambda@Edge
B. CloudFront Functions
C. API Gateway authorizer
D. ALB Listener Rule

---

### Q5. To run JWT validation against an external IdP at the edge: *(Apply)*
A. CloudFront Functions
B. Lambda@Edge
C. NACL
D. WAF custom rule only

---

### Q6. Active-passive disaster recovery with auto DNS failover based on health checks: *(Apply)*
A. Route 53 Simple routing
B. Route 53 Failover routing with health checks
C. Route 53 Weighted routing
D. Route 53 Geolocation

---

### Q7. Route 53 routing that returns the AWS region closest to the user (by measured latency, not pure geography): *(Remember)*
A. Geolocation
B. Latency-based
C. Geoproximity
D. Multivalue

---

### Q8. Compliance requires that users in Germany are served by the Frankfurt region. Use: *(Apply)*
A. Geolocation routing
B. Latency routing
C. Weighted routing
D. Simple routing

---

### Q9. A blue/green deployment splits 90/10 between two versions. Use: *(Apply)*
A. Failover routing
B. Latency routing
C. Weighted routing
D. Multivalue

---

### Q10. CloudFront Signed URLs are MOST appropriate for: *(Understand)*
A. Granting time-limited access to ONE specific file
B. Granting access to many files for a user session
C. Geo restriction
D. WAF

---

### Q11. CloudFront Signed Cookies are MOST appropriate for: *(Understand)*
A. One-time download of a single file
B. Granting access to many files for a session
C. DDoS protection
D. Caching dynamic content

---

### Q12. To shield against SQL-injection and XSS on a public web app: *(Apply)*
A. AWS Shield Advanced
B. AWS WAF (rules + managed rule groups)
C. Network ACL
D. Direct Connect

---

### Q13. AWS Shield Standard cost: *(Remember)*
A. ~$3,000/month
B. Free for all customers
C. Per-region
D. Pay-per-attack

---

### Q14. DAX provides which of the following? *(Remember)*
A. Sub-millisecond writes to RDS
B. Microsecond reads to DynamoDB
C. Object caching for S3
D. CDN edge caching

---

### Q15. To cache repeated database query results in the app tier with persistence and failover: *(Apply)*
A. ElastiCache Redis
B. ElastiCache Memcached
C. CloudFront
D. DAX

---

### Q16. To distribute incoming HTTPS requests from worldwide users to two regional ALBs by lowest latency: *(Evaluate)*
A. Route 53 latency-based routing OR Global Accelerator
B. NAT Gateway
C. CloudFront alone
D. Site-to-Site VPN

---

### Q17. Multivalue Answer routing in Route 53 is: *(Understand)*
A. A pure load balancer
B. Returns up to 8 healthy records — provides basic load distribution with health checks
C. The same as latency routing
D. A failover-only mode

---

### Q18. The MAIN benefit of Origin Shield is: *(Analyze)*
A. Hosting an origin in the cloud
B. Adding a regional caching layer between edges and origin to reduce origin load
C. DDoS protection
D. SSL termination

---

### Q19. CloudFront edge locations exist in: *(Remember)*
A. Just AWS regions
B. Hundreds of cities globally (600+)
C. Only N. America
D. Same as Availability Zones

---

### Q20. A common pattern for ElastiCache with RDS: *(Understand)*
A. Replace RDS entirely
B. Cache-aside: app checks cache → miss → reads RDS → writes to cache
C. Use as DNS
D. Use as load balancer

---

### Q21. To centrally manage WAF and Shield policies across many accounts in an Organization: *(Apply)*
A. AWS Firewall Manager
B. AWS Config
C. CloudWatch
D. CloudTrail

---

### Q22. Compared to OAI, OAC is: *(Analyze)*
A. Deprecated
B. The newer recommended way to lock CloudFront → S3 (supports SSE-KMS, all regions)
C. The same exact thing
D. Only for video streaming

---

### Q23. To serve private video to authenticated subscribers globally with edge caching: *(Create)*
A. Public S3 with CloudFront
B. CloudFront with signed cookies + private S3 + OAC
C. S3 Transfer Acceleration
D. Lambda@Edge alone

---

### Q24. Route 53 Geoproximity routing (Traffic Flow) lets you: *(Understand)*
A. Route based on physical distance with a bias toward specific resources
B. Route only by country
C. Route to lowest latency only
D. Block users

---

## 🎯 Answers + Explanations

### Q1: **A. CloudFront + OAC + BPA**
OAC makes bucket privately reachable only via CloudFront; BPA keeps the bucket not-public.

### Q2: **A. CloudFront caches; GA only routes**
CloudFront's job is edge caching (HTTP). GA routes (L4) to nearest healthy endpoint via AWS backbone.

### Q3: **B. Global Accelerator**
Static IPs + UDP + low latency to multi-region endpoints = GA.

### Q4: **B. CloudFront Functions**
μs runtime, very cheap. Limited to header/URL manipulation.

### Q5: **B. Lambda@Edge**
Lambda@Edge can call external services and run more complex logic. CF Functions cannot.

### Q6: **B. Failover + health checks**
Classic R53 DR pattern.

### Q7: **B. Latency-based**
Measured latency to AWS regions, not geography.

### Q8: **A. Geolocation routing**
Routes based on country/continent for residency/compliance.

### Q9: **C. Weighted**
Weighted routing distributes traffic by % across records.

### Q10: **A. Time-limited single file access**
Signed URL = one resource. Signed cookie = many.

### Q11: **B. Many files for a session**
Signed cookies attach to the browser session and gate many CloudFront URLs.

### Q12: **B. AWS WAF**
WAF has managed rules for OWASP top 10 including SQLi and XSS.

### Q13: **B. Free**
Shield Standard is included for everyone. Shield Advanced is paid.

### Q14: **B. Microsecond reads for DynamoDB**
DAX is purpose-built for DynamoDB only.

### Q15: **A. ElastiCache Redis**
Persistence + Multi-AZ failover = Redis. Memcached can't.

### Q16: **A. Route 53 latency routing OR Global Accelerator**
Both can route by latency. GA adds static IPs + AWS backbone.

### Q17: **B. Up to 8 healthy records, basic distribution**
Multivalue with health checks gives simple LB-like behavior at the DNS layer.

### Q18: **B. Regional caching layer to reduce origin load**
Origin Shield consolidates requests from many edge locations.

### Q19: **B. 600+ globally**
Across hundreds of cities.

### Q20: **B. Cache-aside**
Classic pattern. App reads through cache, populates on miss.

### Q21: **A. Firewall Manager**
Central WAF/Shield/SG policy across an Organization.

### Q22: **B. Newer, supports KMS, all regions**
OAC replaced OAI (Origin Access Identity) — use OAC for new setups.

### Q23: **B. CloudFront + signed cookies + private S3 + OAC**
Edge caches AND restricts access; bucket stays private.

### Q24: **A. Distance with bias**
Geoproximity (Traffic Flow) is by lat/long with adjustable bias.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Move on
- 20–22/24 → ✅ Solid
- 16–19/24 → ⚠️ Re-read CloudFront + Route 53 sections
- <16/24 → 🔁 Re-watch all 4 essentials

---

## 🃏 Add To Your Flashcards

- CloudFront vs Global Accelerator
- Lambda@Edge vs CloudFront Functions
- Route 53 8 routing policies
- OAC vs OAI
- Signed URL (one) vs Signed Cookie (many)
- WAF vs Shield
- DAX vs ElastiCache

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 9: Monitoring & Cost Optimization](../Module-09-Monitoring-Cost-Optimization/Reading.md)
