# 📋 Module 7 Cheat Sheet: Management, Monitoring & Pricing

> One page. Print it. Tape it to your monitor.

---

## 👁️ CW vs CT vs Config (THE classic trio)

| Service | What |
|---------|------|
| **CloudWatch** | Metrics + logs + alarms (+ EventBridge) |
| **CloudTrail** | Every AWS API call (audit log) |
| **Config** | Resource configurations + compliance rules |

🎯 "Who did X" = **CloudTrail** · "What's X look like" = **Config** · "Is X healthy" = **CloudWatch**

---

## ⚙️ Systems Manager (SSM)

| Tool | What |
|------|------|
| **Session Manager** | Browser shell to EC2 (no SSH) |
| **Run Command** | Run commands on many EC2 at once |
| **Patch Manager** | Auto-patch OS fleets |
| **Parameter Store** | Free config + secrets |
| **Automation** | Runbooks |

---

## ✅ Trusted Advisor, 5 Categories

```
1. Cost Optimization
2. Performance
3. Security
4. Fault Tolerance
5. Service Limits
```

- Free tier (Basic / Developer) = **limited set** (Service Limits + select Security & Fault Tolerance)
- Business / Enterprise = **ALL checks**

---

## 🩺 AWS Health Dashboards

| Dashboard | Scope |
|-----------|-------|
| **Service Health (public)** | All AWS services status |
| **Your Account Health (Personal Health)** | Events on YOUR resources |

---

## 💵 Pricing Fundamentals

```
Data IN to AWS       →  FREE
Same-AZ private IP   →  FREE
Cross-AZ same Region →  $
Cross-Region         →  $$
Out to internet      →  $$$$
```

**Free services** (pay only for resources): IAM, VPC, CloudFormation, Beanstalk, Organizations, Auto Scaling.

---

## 🧮 Cost Tools

| Tool | When |
|------|------|
| **Pricing Calculator** | BEFORE deploy, estimate |
| **Cost Explorer** | DURING/AFTER, visualize + forecast |
| **Budgets** | Set $/usage thresholds, alert |
| **Cost & Usage Report (CUR)** | Most granular billing CSV/Parquet |
| **Cost Allocation Tags** | Chargeback / showback |
| **Compute Optimizer** | ML right-sizing |

---

## 💼 Support Plans (MEMORIZE)

| Plan | Cost | Response (prod down) | TAM | All TA? |
|------|------|----------------------|-----|---------|
| **Basic** | FREE | N/A | ❌ | 7 core only |
| **Developer** | $29/mo | Business-hours email | ❌ | 7 core only |
| **Business** | $100/mo or 3% usage | **< 1 hr** 24/7 | ❌ | ✅ |
| **Enterprise On-Ramp** | $5,500/mo or 10% | **< 30 min** business-critical | Pool | ✅ |
| **Enterprise** | $15,000+/mo | **< 15 min** business-critical | Dedicated | ✅ + IEM + Concierge |

🔥 Memory hooks:

- < 1 hr = **Business**
- < 30 min = **Enterprise On-Ramp**
- < 15 min = **Enterprise**
- Dedicated TAM = **Enterprise ONLY**

---

## 🏛️ Marketplace + QuickSight

- **Marketplace** = 3rd-party AMIs/SaaS, billed through AWS
- **QuickSight** = serverless BI dashboards (pay per session)

---

## 🏆 Exam Power Phrases

✅ "Use Pricing Calculator to estimate before deployment"
✅ "Use Cost Allocation Tags for chargeback"
✅ "Use CloudWatch Billing Alarm or Budgets for spend alerts"
✅ "Use Session Manager instead of bastion / port 22"
✅ "Use Trusted Advisor + Compute Optimizer to right-size"
✅ "Business Support gives ALL Trusted Advisor checks + 24/7"

Wrong:
❌ "Budgets stop spending automatically"
❌ "Developer Support includes a TAM"
❌ "Trusted Advisor full set is free for everyone"
❌ "Data into AWS is expensive"

---

## ⚠️ Anti-Patterns

- ❌ Leaving idle EC2 instances running
- ❌ Public S3 buckets with sensitive data
- ❌ No billing alarms / budgets
- ❌ Using On-Demand for known steady workloads (use RIs/SP)
- ❌ Cross-Region replication without realizing data transfer cost

---

## 🗓️ Key Facts

- 4 paid support tiers + Basic (5 total)
- Business = "< 1 hour", Enterprise = "< 15 min"
- Free services: IAM, VPC, CloudFormation, EB, Organizations
- Free Tier: 12-Months / Always Free / Trials
- CUR is most granular billing data

---

## ✏️ Quick Self-Check

1. 5 Support plans + headline response times? ___
2. CW vs CT vs Config? ___
3. Trusted Advisor's 5 categories? ___
4. Pricing Calculator vs Cost Explorer? ___
5. What's a TAM and which plan(s) get one? ___

---

➡️ [Module 8: Well-Architected & Migration](../Module-08-Well-Architected-Migration/Reading.md)
