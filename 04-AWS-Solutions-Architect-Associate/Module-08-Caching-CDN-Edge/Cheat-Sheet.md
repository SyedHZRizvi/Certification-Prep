# 📋 Module 8 Cheat Sheet: Caching, CDN & Edge

> One page. Print it. Tape to your monitor.

---

## 🎯 Pick The Right Edge Tool

| Need | Pick |
|------|------|
| Cache static + dynamic HTTP at edge | **CloudFront** |
| Static IPs + L4 routing to multi-region | **Global Accelerator** |
| DNS routing (latency, failover, geo, weighted, etc.) | **Route 53** |
| L7 firewall (SQLi/XSS, bot) | **AWS WAF** |
| Free DDoS protection | **Shield Standard** (free) |
| Premium DDoS protection + cost protection | **Shield Advanced** ($$$) |
| Org-wide WAF/SG policy | **Firewall Manager** |
| Cache DB queries | **ElastiCache** (Redis if HA needed) |
| Cache DynamoDB hot keys | **DAX** |

---

## ☁️ CloudFront Quick

- **OAC** = lock S3 origin to CF (replaces OAI)
- **Behaviors** = per-path routing rules to origins
- **Cache Policy** = what's in the cache key
- **Signed URL** = 1 file ; **Signed Cookie** = many files
- **Lambda@Edge** = full Lambda, slower, more capable
- **CloudFront Functions** = JS, μs, very cheap, limited
- **Origin Shield** = extra regional cache layer
- **WAF + Shield + Geo restriction** at distribution
- **600+ edge locations**

---

## 🚀 CloudFront vs Global Accelerator

| | CloudFront | Global Accelerator |
|---|------------|---------------------|
| Caches | ✅ | ❌ |
| Layer | L7 HTTP | L4 TCP/UDP |
| IPs | Random | **2 static Anycast IPs** |
| Use | Web/static/dynamic HTTP | Gaming, IoT, voice, APIs needing static IPs |

---

## 🌍 Route 53 Routing Policies

| Policy | Use |
|--------|-----|
| Simple | 1 record |
| Weighted | 90/10 traffic split |
| Latency | Lowest measured latency region |
| Failover | Active-passive DR |
| Geolocation | By country (compliance) |
| Geoproximity | By distance, with bias |
| Multivalue | Up to 8 healthy records |
| IP-based | By client IP range |

---

## 🛡️ Security Stack at the Edge

```
User → Shield (DDoS, free Standard) →
       WAF (L7 SQLi/XSS/bot) →
       CloudFront/Global Accelerator →
       ALB/Origin
```

---

## 🔥 Caching Strategies

| Pattern | When |
|---------|------|
| **Cache-aside (lazy)** | Default, read DB on miss, write to cache |
| **Write-through** | Updates write to cache + DB simultaneously |
| **TTL-based** | Set TTL on all entries |

---

## 🏆 Exam Power Phrases

✅ Usually right:

- "Use CloudFront + OAC + Block Public Access"
- "Use Global Accelerator for static IPs and multi-region L4"
- "Use Route 53 failover routing + health checks for DR"
- "Use latency routing for global multi-region"
- "Use signed URLs for time-limited file access"
- "Use WAF + Shield + CloudFront for DDoS-resilient public app"
- "Use DAX for sub-ms DynamoDB caching"

❌ Usually wrong:

- "Global Accelerator caches content"
- "Lambda@Edge is faster and cheaper than CloudFront Functions"
- "Shield Standard costs $3K/month"
- "Public S3 with CloudFront in front"
- "Route 53 latency routes by geography"

---

## ⚠️ Anti-Patterns

- ❌ Public S3 bucket with CloudFront (use OAC + BPA)
- ❌ No edge protection for public app (add WAF + Shield)
- ❌ Lambda@Edge for simple header rewrites (use CF Functions)
- ❌ Global Accelerator for static images (use CloudFront)
- ❌ ElastiCache for DynamoDB (use DAX)

---

## ✏️ Quick Self-Check

1. CloudFront vs Global Accelerator? ___
2. Lambda@Edge vs CloudFront Functions? ___
3. Signed URL vs Signed Cookie? ___
4. Latency vs Geolocation routing? ___
5. DAX vs ElastiCache? ___

---

➡️ [Module 9: Monitoring & Cost Optimization](../Module-09-Monitoring-Cost-Optimization/Reading.md)
