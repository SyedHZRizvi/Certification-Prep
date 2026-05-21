# Module 7: Decoupling & Application Integration 🔌

> **Why this module matters:** "Resilient architecture" almost always means "decoupled." If a queue can absorb a downstream outage, your app stays up. SAA-C03 hammers SQS vs SNS vs EventBridge, plus Step Functions and Kinesis. Expect 6–10 questions and a few are easy gimmes once you internalize the patterns.

---

## ☕ A Story: The Coffee Shop Order System

Sam runs a coffee shop. When she takes orders by yelling them to the barista (point-to-point coupling), the line backs up the moment the barista falls behind. So she switches to writing tickets on a spike (queue). The barista works through tickets at their own pace. If the barista calls in sick, the tickets just pile up — when a replacement arrives, work resumes without losing a single order.

Now Sam wants three things to happen for every paid order: print a receipt, kick off the barista's ticket, AND log to accounting. She can either copy the order to three different ticket spikes (fan-out via **SNS**), or have one event router (**EventBridge**) dispatch based on rules ("if `total > $20`, also notify the manager").

If the order has 5 steps (pour, milk, foam, art, garnish) and each must happen in a specific order with retries, she needs a flowchart, not a queue — that's **Step Functions**.

If she's analyzing real-time foot-traffic from cameras across 200 stores, she needs a high-throughput streaming pipeline — that's **Kinesis**.

That's this module.

---

## 🎯 Why Decoupling Matters

A **tightly coupled** system fails if any component fails. A **decoupled** system has buffers between components — a queue, a topic, or an event bus — so a downstream failure doesn't take the upstream down.

Three classic patterns:

| Pattern | Service | Use |
|---------|---------|-----|
| **Queue** (1 producer → 1 consumer, work absorbed) | SQS | Background work, smoothing load |
| **Pub/Sub Topic** (1 producer → many consumers) | SNS | Fan-out notifications |
| **Event Bus** (many producers → many consumers with rules) | EventBridge | Loosely coupled microservices, SaaS events |

---

## 📨 Amazon SQS — Simple Queue Service

The OG queue. Two flavors:

| Flavor | Order | Throughput | Duplicates | Use |
|--------|-------|------------|------------|-----|
| **Standard** | Best-effort (mostly in order) | Nearly unlimited | At-least-once (may deliver dupes) | High-volume async work |
| **FIFO** | Strict ordering | 300 msg/s (or 3,000 with batching), up to 70,000 with high throughput mode | Exactly-once delivery | Order matters (e.g. financial txns, inventory) |

### Key concepts
- **Visibility timeout** — when a consumer receives a message, it becomes invisible to others for this period (default 30 s). If not deleted in time, returns to queue.
- **Long polling** (1–20 s) — wait for messages to arrive vs short polling (returns immediately). Use long polling to reduce empty-receive cost.
- **Dead Letter Queue (DLQ)** — after N failed receives, message moves here for investigation.
- **Message retention** — 4 days default; 1 minute to 14 days.
- **Max message size** — 256 KB (use S3 + pointer for larger).
- **Delay queues** — delay first delivery 0–15 minutes.

🎯 **Exam pattern:**
- "Messages must be processed in strict order, exactly once" → **SQS FIFO**.
- "Cheapest decoupling for spiky work" → **SQS Standard**.
- "Auto-scale workers based on queue depth" → ASG with **CloudWatch alarm on `ApproximateNumberOfMessagesVisible`**.

### Lambda + SQS
Lambda polls the queue. Reserve concurrency carefully or the queue will drain too fast and you'll exceed downstream limits.

---

## 📡 Amazon SNS — Simple Notification Service

A **pub/sub** topic. Publishers send messages to a topic; subscribers receive them.

### Subscriber types (memorize!)

| Subscriber | Use |
|------------|-----|
| Email / SMS | Notify humans |
| HTTP/S endpoint | Webhook |
| **SQS queue** | Fan-out to multiple queues |
| **Lambda** | Trigger compute |
| **Kinesis Data Firehose** | Stream to S3/Redshift |
| **Mobile push** (APNs, FCM, etc.) | App notifications |

### Fan-out pattern
1 SNS topic → multiple SQS queues, each consumed by a different worker. Classic "1 event, multiple actions" pattern.

### Filter policies
Each subscription can have a JSON filter so subscribers only get messages they care about (without doing the filtering in their own code).

### FIFO topics
Yes, SNS also has FIFO. Pair with SQS FIFO for end-to-end ordering.

🎯 **Exam pattern:** "One order event must trigger inventory update, receipt email, AND audit log" → **SNS fan-out to multiple SQS queues**.

---

## 🚌 Amazon EventBridge

EventBridge is a **serverless event bus** with rules. Think of it as SNS + filtering + scheduled rules + 3rd-party SaaS integration.

| Feature | Detail |
|---------|--------|
| **Buses** | Default (AWS service events), custom (your app events), partner (SaaS) |
| **Rules** | Match event patterns; route to targets |
| **Schemas** | Registry of event shapes; can autogen code bindings |
| **Pipes** | Connect sources → optional filter/transform → target |
| **Scheduler** | Cron-like one-time or recurring schedules |
| **Archive + Replay** | Save events; replay later for testing/debug |
| **Targets** | 20+ AWS services + HTTPS endpoints + API destinations |

### EventBridge vs SNS — When Each?

| Factor | EventBridge | SNS |
|--------|-------------|-----|
| Routing rules / filtering | Powerful pattern matching | Filter policies (JSON) |
| Throughput | High but lower than SNS | Highest (millions/sec) |
| SaaS partners | Native (Zendesk, Datadog, ...) | No |
| Schema registry | Yes | No |
| Replay | Yes | No |
| Pricing | Per event | Per publish + per delivery |

🧠 *"SNS for raw fan-out at scale. EventBridge for richer event-driven architecture with rules and SaaS."*

🎯 **Exam pattern:**
- "Build event-driven microservices, route by content, integrate with Datadog" → **EventBridge**
- "Send 100M messages to 5 SQS queues" → **SNS**
- "Schedule a Lambda every 5 minutes" → **EventBridge Scheduler** (or older CloudWatch Events rule)

---

## 🔁 AWS Step Functions

Step Functions orchestrate workflows as **state machines**. Each step can call a Lambda, an ECS task, a Glue job, wait, branch, parallel, retry.

Two workflow types:

| Type | Duration | Pricing | Use |
|------|----------|---------|-----|
| **Standard** | Up to 1 year | $/state transition | Long-running, audit-heavy, exactly-once |
| **Express** | Up to 5 minutes | $/invocation + duration | High-volume short workflows (event processing, IoT) |

Patterns supported:
- Sequence, branching, parallel, map (parallel iterate), wait, fail, succeed
- Retries with exponential backoff
- Human approval (Wait for Task Token / callback)
- Direct integrations with 200+ AWS APIs (no Lambda glue needed)

🎯 **Exam pattern:** "Multi-step order processing with retries, human approval, audit trail" → **Step Functions Standard**.
🎯 **Exam pattern:** "Tens of millions of short event-driven workflows daily" → **Express**.

---

## 🌊 Amazon Kinesis — Streaming Data

| Service | What it does |
|---------|--------------|
| **Kinesis Data Streams** | Real-time stream (producer → shards → consumers). You manage shards (provisioned) or use **on-demand** mode. Retention 24 hr–1 yr. |
| **Kinesis Data Firehose** | Fully managed, **near real-time** (~60 s buffering) to S3, Redshift, OpenSearch, Splunk, 3rd parties. No code. Transforms via Lambda. |
| **Kinesis Data Analytics (now "Managed Service for Apache Flink")** | Real-time analytics on streams via SQL or Flink jobs. |
| **Kinesis Video Streams** | Streaming video for ML/analytics. |

### Streams vs Firehose

| Factor | Streams | Firehose |
|--------|---------|----------|
| Latency | ms (real-time) | ~60 s |
| Consumers | Multiple custom apps | Built-in destinations only |
| Replay | Yes (within retention) | No (data lands in destination) |
| Sharding | Yes (you manage) | Auto |
| Use | Real-time analytics, real-time apps | Just dump to S3 / warehouse |

🎯 **Exam pattern:**
- "Ingest clickstream and dump to S3 for batch analysis" → **Firehose**
- "Real-time fraud detection on transaction stream" → **Data Streams** (+ Lambda or Flink)
- "Replay events from 24 hours ago" → **Data Streams** with sufficient retention

### SQS vs Kinesis Data Streams — important distinction

| | SQS | Kinesis Data Streams |
|---|-----|----------------------|
| Model | Queue (read once + delete) | Log (durable, replayable) |
| Multiple independent consumers | No (use SNS fan-out → SQS) | Yes (each consumer at own position) |
| Order | Standard: best-effort; FIFO: strict | Per-shard order |
| Retention | up to 14 days | up to 365 days |
| Use | Async work decoupling | Stream of events, multiple downstream apps |

---

## 🐰 Amazon MQ

Managed **ActiveMQ** or **RabbitMQ**. For lift-and-shift of existing JMS/AMQP/MQTT/STOMP apps. If you're starting fresh on AWS, use SQS/SNS instead — MQ is for compatibility.

🎯 **Exam pattern:** "Existing app uses AMQP protocol, must migrate to AWS with minimal code changes" → **Amazon MQ** (RabbitMQ engine).

---

## 🤖 API Gateway (touched but useful here)

While not strictly "integration," API Gateway often pairs with these patterns. It can:
- Front Lambda functions
- Buffer requests with usage plans + throttling
- Authenticate via IAM, Cognito, Lambda authorizers
- Cache responses
- Convert REST to AWS service calls (e.g., directly write to SQS or DynamoDB)

🎯 **Exam pattern:** "Want HTTPS in front of Lambda with auth and throttling" → **API Gateway → Lambda**.

---

## 🎯 Common Architecture Patterns

### Pattern 1: Async Job Queue
```
Web App → SQS → Workers (EC2/Lambda) → DB
```

### Pattern 2: Fan-Out
```
Producer → SNS → ┬── SQS-A → Worker A
                 ├── SQS-B → Worker B
                 └── Lambda → process now
```

### Pattern 3: Event-Driven Microservices
```
Service A ──event──▶ EventBridge ──rule──▶ Service B
                                  ──rule──▶ Service C
                                  ──rule──▶ Datadog
```

### Pattern 4: Order Processing State Machine
```
Step Functions: Receive → Validate → Charge (parallel: Reserve Inventory, Notify Warehouse) → Wait for Picking → Ship
```

### Pattern 5: Streaming Pipeline
```
IoT devices → Kinesis Data Streams → Lambda/Flink → DynamoDB + S3 via Firehose
```

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "SQS Standard guarantees order" | NO — best-effort. Use FIFO for strict order. |
| "SNS replaces a queue" | NO — SNS is pub/sub. To buffer, subscribe an SQS queue. |
| "EventBridge can do everything SNS does" | True-ish, but SNS has higher throughput and lower per-msg cost. SaaS integrations and rules tilt toward EventBridge. |
| "Kinesis is the same as SQS" | NO — Kinesis is a durable log with multiple consumers. SQS is a delete-after-read queue. |
| "Step Functions only work with Lambda" | NO — they call 200+ AWS APIs directly. |
| "DLQ messages are lost" | NO — DLQ retains them for investigation. |

---

## 🚨 Exam Traps

1. **"Strict order, exactly once"** → SQS FIFO (+ SNS FIFO if fan-out needed).
2. **"Fan out to many queues"** → SNS topic → multiple SQS subscribers.
3. **"Event-driven with rules and SaaS"** → EventBridge.
4. **"Need to replay past events for analytics"** → Kinesis Data Streams (Firehose can't replay).
5. **"Long-running workflow with retries and human approval"** → Step Functions Standard.
6. **"Lift-and-shift AMQP/JMS app"** → Amazon MQ.
7. **"Buffer load between web tier and DB"** → SQS in between.
8. **"Scale workers based on backlog"** → ASG + CloudWatch alarm on queue depth.
9. **"Schedule a Lambda every 10 min"** → EventBridge Scheduler.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Queue / SQS** | Single-consumer message buffer, delete-after-read |
| **Topic / SNS** | Pub/sub fan-out to many subscribers |
| **Event Bus / EventBridge** | Routing by rules; multiple sources/targets |
| **Stream / Kinesis** | Durable log with multiple replayable consumers |
| **State Machine / Step Functions** | Orchestrate steps with retries, branches, parallel |
| **Visibility Timeout** | Period a message is hidden after receive |
| **DLQ** | Dead Letter Queue — failed messages park here |
| **Standard vs FIFO** | Best-effort vs strict-order delivery |
| **Long polling** | Wait up to 20 s for messages — reduces empty cost |
| **Firehose** | Managed near-real-time delivery to S3/Redshift/OS |
| **Express vs Standard Workflows** | Step Functions modes — short vs long |

---

## ✅ Module 7 Summary

You now know:
- 📨 SQS Standard vs FIFO; visibility timeout, DLQ, long polling
- 📡 SNS pub/sub with SQS fan-out pattern
- 🚌 EventBridge for rules-based routing and SaaS integration
- 🔁 Step Functions Standard vs Express
- 🌊 Kinesis Data Streams vs Firehose vs Analytics
- 🐰 Amazon MQ for JMS/AMQP lift-and-shift
- 🎯 The 9 most-tested integration exam traps

**Next steps:**
1. 🎥 [`Videos.md`](./Videos.md)
2. ✏️ [`Quiz.md`](./Quiz.md)
3. 📋 [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ [Module 8: Caching, CDN & Edge](../Module-08-Caching-CDN-Edge/Reading.md)

---

## 📚 Further Reading

- 📖 **[SQS Developer Guide](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/)**
- 📖 **[SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/)**
- 📖 **[EventBridge User Guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/)**
- 📖 **[Step Functions Developer Guide](https://docs.aws.amazon.com/step-functions/latest/dg/)**
- 📖 **[Kinesis Data Streams Developer Guide](https://docs.aws.amazon.com/streams/latest/dev/)**
