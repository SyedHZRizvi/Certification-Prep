# 📋 Module 9 Cheat Sheet: Monitoring & Cost Optimization

> One page. Print it. Tape to your monitor.

---

## 📊 The Audit Triangle

| Service | Answers... |
|---------|------------|
| **CloudTrail** | "Who made this API call?" |
| **CloudWatch Logs** | "What did the app print?" |
| **AWS Config** | "What was this resource's config; is it compliant?" |
| **X-Ray** | "Where's the latency in a distributed request?" |

---

## 🛡️ Detection Stack

| Service | Use |
|---------|-----|
| **GuardDuty** | Threats (CloudTrail/VPC/DNS, ML) |
| **Macie** | PII discovery in S3 |
| **Inspector** | Vulnerabilities (EC2, Lambda, ECR) |
| **Security Hub** | Aggregate findings |
| **Detective** | Investigate incidents (graph) |

---

## 💸 Cost Toolkit

| Tool | Purpose |
|------|---------|
| **Cost Explorer** | Visualize + forecast |
| **Budgets** | Threshold alerts on spend/usage |
| **Cost Anomaly Detection** | ML alerts on weird spend |
| **Compute Optimizer** | Rightsize (free!) |
| **Trusted Advisor** | 5-category best practices |
| **Cost Allocation Tags** | Tag + activate → per-team reporting |

---

## 🔥 Cost Reduction Patterns

| Symptom | Cure |
|---------|------|
| NAT $$ on S3 traffic | **Gateway VPC Endpoint** |
| Idle dev EC2 | Schedule stop / Lambda / Spot |
| Long predictable EC2 | RI / Savings Plan |
| Fault-tolerant batch | Spot Fleet |
| Cold S3 data | Lifecycle → IA → Glacier |
| Over-provisioned EC2 | Compute Optimizer |
| Heavy egress to internet | CloudFront |
| RDS connection storms | RDS Proxy |
| Unattached EBS / EIP | Trusted Advisor / Config rule |
| Lambda over-mem | Compute Optimizer Lambda recs |

---

## 📈 CloudWatch Quick

- **Metrics** — time series, std + custom
- **Logs** — log groups + streams; retention configurable
- **Alarms** — OK / ALARM / INSUFFICIENT_DATA → SNS, ASG, EC2 actions
- **Logs Insights** — query language for logs
- **Dashboards** — custom panels
- **Synthetics / RUM / App Insights** — extras
- ⚠️ **EC2 memory ≠ default. Install CW Agent.**

---

## 🏆 Exam Power Phrases

✅ Usually right:

- "Use CloudTrail for API audit"
- "Use Config for compliance rules"
- "Use X-Ray for distributed tracing"
- "Use Compute Optimizer for rightsizing"
- "Use Gateway Endpoint for S3 to cut NAT cost"
- "Use Cost Anomaly Detection for ML alerts"
- "Use Budgets for spend thresholds"
- "Tagging is the basis of cost allocation"

❌ Usually wrong:

- "CloudWatch tracks EC2 memory by default"
- "CloudTrail is for application logs"
- "GuardDuty requires agents"
- "Compute Optimizer is paid"

---

## ⚠️ Anti-Patterns

- ❌ No CloudTrail
- ❌ Public S3 with no Macie scanning
- ❌ No Budgets / Cost Anomaly Detection
- ❌ Untagged resources (you can't slice cost)
- ❌ Forgotten EBS volumes
- ❌ Over-provisioned RIs in changing workloads

---

## ✏️ Quick Self-Check

1. CloudTrail vs Config? ___
2. EC2 memory metric? ___
3. PII in S3? ___
4. Detect cryptomining in your account? ___
5. NAT for S3 — what's the cheap alternative? ___

---

➡️ [Module 10: DR, Migration & Hybrid](../Module-10-DR-Migration-Hybrid/Reading.md)
