# ✏️ Module 7 Quiz: Decoupling & Integration

> **Instructions:** 25 questions, ~30 min. Target 20/25.

---

## Questions

### Q1. A workload requires strict ordering of messages and exactly-once processing. The BEST service is:
A. SQS Standard
B. SQS FIFO
C. SNS Standard
D. Kinesis Firehose

---

### Q2. To send the same event to multiple SQS queues, the recommended pattern is:
A. Loop in the producer and send N times
B. SNS topic → multiple SQS subscriptions (fan-out)
C. Kinesis Streams → multiple consumers
D. Step Functions

---

### Q3. An app must trigger different downstream actions based on event content (e.g., orders > $100 go to fraud service). The BEST tool is:
A. SQS Standard
B. SNS without filters
C. EventBridge with rules
D. Kinesis Firehose

---

### Q4. SQS visibility timeout is:
A. The period a message is hidden from other consumers after being received
B. The time before a message is deleted automatically
C. The maximum age of a message
D. Encryption duration

---

### Q5. A message in SQS keeps failing processing. After N attempts you want to inspect it. Use a:
A. Visibility timeout
B. Dead Letter Queue
C. Filter policy
D. Replay buffer

---

### Q6. Long polling with SQS:
A. Reduces empty receive responses and cost
B. Increases cost
C. Eliminates need for visibility timeout
D. Forces FIFO ordering

---

### Q7. To stream clickstream data straight to S3 and Redshift without managing shards:
A. Kinesis Data Streams
B. Kinesis Data Firehose
C. SQS
D. SNS

---

### Q8. To enable multiple independent consumers to replay the SAME event data within the last 24 hours:
A. SQS Standard
B. SNS topic
C. Kinesis Data Streams
D. SQS FIFO

---

### Q9. A workflow has 6 steps with retries, branching, and a 24-hour wait for human approval. Use:
A. SQS
B. EventBridge
C. Step Functions Standard
D. Kinesis

---

### Q10. Step Functions Express workflows are BEST for:
A. Long-running workflows (>5 minutes)
B. Short, high-volume event-driven workflows (<5 minutes)
C. Human approval workflows
D. Audit-heavy compliance workflows

---

### Q11. A legacy enterprise app uses AMQP protocol. The BEST migration target is:
A. Refactor to SQS
B. Amazon MQ (RabbitMQ engine)
C. Kinesis
D. EventBridge

---

### Q12. Lambda is invoked by SQS. To prevent overwhelming a downstream RDS database, you should:
A. Increase Lambda concurrency
B. Limit Lambda reserved concurrency
C. Disable RDS Multi-AZ
D. Switch to SNS

---

### Q13. To run a Lambda every 5 minutes, the BEST mechanism is:
A. EventBridge Scheduler / scheduled rule
B. SQS delay queue loop
C. CloudFront
D. Step Functions wait state in infinite loop

---

### Q14. SNS supports which subscriber types? (pick all that apply)
A. Email/SMS
B. HTTP/S
C. SQS
D. Lambda
E. All of the above

---

### Q15. To buffer a sudden traffic spike to a slow downstream service:
A. Put SQS in front; have workers process at their own pace
B. Add an ALB
C. Switch to DynamoDB
D. Add a NAT Gateway

---

### Q16. An IoT pipeline ingests 50,000 events/sec and needs to retain them 7 days for replay. Choose:
A. SQS Standard
B. SQS FIFO
C. Kinesis Data Streams with 7-day retention
D. Step Functions

---

### Q17. SNS filter policies allow:
A. Subscribers to receive only messages matching JSON criteria
B. Encryption at rest
C. Replay of past messages
D. Cross-region replication

---

### Q18. To scale SQS consumer EC2 instances when the backlog grows:
A. CloudWatch alarm on `ApproximateNumberOfMessagesVisible` → ASG scale-out
B. Use Spot only
C. Switch to FIFO
D. Disable visibility timeout

---

### Q19. EventBridge advantages over SNS include:
A. Schema registry, archive/replay, native SaaS partner events
B. Higher throughput at lower cost
C. Better at SMS/Email
D. Lower latency than SNS

---

### Q20. SQS messages are retained by default for:
A. 1 minute
B. 4 days (default; configurable 1 min – 14 days)
C. 30 days
D. Forever

---

### Q21. To prevent duplicate processing in SQS FIFO from a producer that may retry, use:
A. Message Deduplication ID (within 5-minute window)
B. Visibility timeout
C. DLQ
D. Encryption

---

### Q22. A microservice publishes events. Many other services (and Datadog) want to consume them with content-based routing. The BEST pattern is:
A. EventBridge custom bus with rules to multiple targets including a Datadog partner integration
B. SQS Standard
C. Kinesis Data Streams
D. SNS to all

---

### Q23. SQS message maximum size is:
A. 256 KB (use S3 + pointer for larger payloads)
B. 1 MB
C. 5 MB
D. 16 KB

---

### Q24. Lambda + EventBridge Pipes lets you:
A. Wire a source (e.g. DynamoDB Streams) → optional filter/transform → target (e.g. SQS or HTTP) with no Lambda glue
B. Replace API Gateway
C. Run scheduled jobs only
D. Encrypt streams

---

### Q25. To synchronously process incoming HTTP requests with rate limiting, throttling, and auth:
A. API Gateway → Lambda
B. SQS only
C. EventBridge only
D. Kinesis Data Streams

---

## 🎯 Answers + Explanations

### Q1: **B. SQS FIFO**
FIFO guarantees strict order + exactly-once within a deduplication window.

### Q2: **B. SNS → multiple SQS (fan-out)**
Standard pattern: one publish, many durable queues each with their own worker.

### Q3: **C. EventBridge with rules**
Content-based routing is EventBridge's superpower. SNS has filter policies but EventBridge's pattern matching is richer.

### Q4: **A. Hidden period after receive**
Default 30 s. If consumer doesn't delete in time, message returns.

### Q5: **B. DLQ**
After N failed receives, message moves to the DLQ for investigation.

### Q6: **A. Reduces empty receives & cost**
Long polling waits up to 20 s for a message before returning empty.

### Q7: **B. Firehose**
Firehose is the zero-management option to ship streams to S3/Redshift/OS/Splunk.

### Q8: **C. Kinesis Data Streams**
Streams retain data and allow multiple consumers at independent positions. SQS deletes after read.

### Q9: **C. Step Functions Standard**
Long-running, branching, retries, human approval (`waitForTaskToken`).

### Q10: **B. Short, high-volume <5 min**
Express is for high-throughput event workflows. Standard is for long, audit-heavy.

### Q11: **B. Amazon MQ**
MQ supports AMQP, JMS, MQTT, STOMP — for lift-and-shift. SQS uses its own API.

### Q12: **B. Limit Lambda reserved concurrency**
Cap concurrent Lambda executions so the DB isn't overwhelmed. Use SQS as the buffer.

### Q13: **A. EventBridge Scheduler / scheduled rule**
Cron-style scheduled targets. Replaces older CloudWatch Events scheduled rules.

### Q14: **E. All of the above**
SNS subscribes Email, SMS, HTTP/S, SQS, Lambda, Mobile push, Firehose.

### Q15: **A. SQS in front, workers at their own pace**
Classic load-smoothing pattern.

### Q16: **C. Kinesis Data Streams w/ 7-day retention**
High-throughput, durable, replayable. SQS retains max 14 days but is single-consumer.

### Q17: **A. Subscribers get only matching messages**
JSON filter policies on subscriptions.

### Q18: **A. CloudWatch alarm on visible messages → ASG**
Standard pattern for queue-driven worker scaling.

### Q19: **A. Schema registry, archive/replay, SaaS events**
EventBridge's differentiators vs SNS.

### Q20: **B. 4 days default, 1 min–14 days configurable**
Plain SQS retention.

### Q21: **A. MessageDeduplicationId (5-min window)**
FIFO deduplication uses this token (or content hash) within a 5-min window.

### Q22: **A. EventBridge custom bus with rules**
SaaS partner integrations + content rules + many targets = EventBridge.

### Q23: **A. 256 KB**
Beyond that, store the payload in S3 and put the pointer in the message.

### Q24: **A. Source → filter/transform → target with no Lambda glue**
EventBridge Pipes added in 2022 to wire sources directly.

### Q25: **A. API Gateway → Lambda**
For synchronous HTTPS request handling with auth/throttling.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Move on
- 20–23/25 → ✅ Solid
- 16–19/25 → ⚠️ Re-read SQS/SNS/EventBridge sections
- <16/25 → 🔁 Re-watch the 4 essentials

---

## 🃏 Add To Your Flashcards

- SQS Standard vs FIFO
- SQS visibility timeout / DLQ / long polling
- SNS fan-out to multiple SQS
- EventBridge rules + SaaS partner integration
- Kinesis Streams vs Firehose
- Step Functions Standard vs Express
- Amazon MQ for AMQP/JMS lift-and-shift

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8: Caching, CDN & Edge](../Module-08-Caching-CDN-Edge/Reading.md)
