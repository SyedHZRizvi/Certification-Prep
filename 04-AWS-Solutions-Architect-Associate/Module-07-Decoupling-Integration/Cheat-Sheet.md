# 📋 Module 7 Cheat Sheet: Decoupling & Integration

> One page. Print it. Tape to your monitor.

---

## 🎯 Pick The Right Tool

| Need | Pick |
|------|------|
| Buffer work for one consumer | **SQS Standard** |
| Strict order + exactly-once | **SQS FIFO (First In, First Out)** |
| Fan-out one event to many subscribers | **SNS** |
| SNS + content-based routing + SaaS (Software as a Service) partners | **EventBridge** |
| Multiple consumers replay events | **Kinesis Data Streams** |
| "Just ship stream to S3 (Simple Storage Service)/Redshift/OS" | **Kinesis Firehose** |
| Multi-step workflow with retries/branches | **Step Functions Standard** |
| High-volume short workflow | **Step Functions Express** |
| Lift-and-shift AMQP/JMS app | **Amazon MQ** |
| Schedule a Lambda | **EventBridge Scheduler** |

---

## 📨 SQS Cheat

| Setting | Value |
|---------|-------|
| Max message size | 256 KB |
| Default retention | 4 days (max 14) |
| Default visibility timeout | 30 s |
| Long polling max wait | 20 s |
| FIFO throughput | 300/s (3,000 batched, 70k high-throughput mode) |
| Standard throughput | Effectively unlimited |
| Dedup window (FIFO) | 5 min |

🧠 *"Use long polling, set visibility ≥ longest job, configure DLQ."*

---

## 📡 SNS Quick

- Pub/Sub topic
- Subscribers: SQS, Lambda, HTTP (Hypertext Transfer Protocol)/S, Email/SMS, Firehose, Mobile push
- Filter policies (JSON) per subscription
- FIFO topics available (pair with FIFO SQS)
- High throughput (millions/sec)

---

## 🚌 EventBridge Quick

- Buses: default, custom, partner
- Rules match event patterns → up to 5 targets each
- Schema registry, archive + replay
- **Pipes** = source → filter/transform → target without Lambda glue
- **Scheduler** = cron-style scheduled invocations

---

## 🌊 Kinesis Cheat

| Service | Latency | Replay | Use |
|---------|---------|--------|-----|
| Data Streams | ms | Yes (up to 365 days) | Real-time apps, fraud, gaming |
| Firehose | ~60 s | No | Land in S3/Redshift/OS/Splunk |
| Managed Flink | ms | n/a | Real-time analytics SQL/Flink |
| Video Streams | streaming | n/a | Video ML |

---

## 🔁 Step Functions

| Type | Duration | Use |
|------|----------|-----|
| **Standard** | up to 1 year | Long, audit, exactly-once, human approval |
| **Express** | up to 5 min | High-volume short event-driven |

Direct integration with 200+ AWS APIs, no Lambda glue needed.

---

## 🏆 Exam Power Phrases

✅ Usually right:

- "Use SQS to absorb load and decouple"
- "Use SQS FIFO for ordered exactly-once"
- "Use SNS to fan-out to many SQS queues"
- "Use EventBridge for content-based routing and SaaS"
- "Use Step Functions Standard for orchestration"
- "Use Kinesis Data Streams for replayable streams"
- "Use Firehose to deliver to S3/Redshift"
- "Use DLQ for failed messages"

❌ Usually wrong:

- "SQS Standard guarantees order"
- "Use SNS as a queue"
- "Firehose can replay events"
- "Always use FIFO" (it's lower throughput)

---

## ⚠️ Anti-Patterns

- ❌ Producer-side fan-out loop (publish to N queues), use SNS
- ❌ FIFO for "just be safe", costs throughput
- ❌ No DLQ on production queues
- ❌ Step Functions Standard for high-volume short workflows (use Express)
- ❌ Kinesis Firehose when you need replay

---

## ✏️ Quick Self-Check

1. SQS FIFO use case? ___
2. SNS → SQS pattern name? ___
3. EventBridge advantage over SNS? ___
4. Streams vs Firehose? ___
5. Step Functions Standard vs Express? ___

---

➡️ [Module 8: Caching, CDN (Content Delivery Network) & Edge](../Module-08-Caching-CDN-Edge/Reading.md)
