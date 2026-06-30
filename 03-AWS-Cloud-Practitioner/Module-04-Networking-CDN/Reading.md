# Module 4: Networking & CDN 🌐

> **Why this module matters:** Networking is where most beginners freeze. The good news: CLF-C02 only tests the *concepts*, not the routing tables. Master the 8 services in this module and you'll handle every networking question.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Cloud Fundamentals](../Module-01-Cloud-Fundamentals/Reading.md), Regions, AZs, Edge Locations
> - [Core Storage](../Module-03-Core-Storage/Reading.md), what S3 is (CloudFront often sits in front of it)
> - Basic networking literacy: what an IP address, subnet, and DNS name are
>
> No CCNA needed, CLF-C02 keeps networking conceptual. If you've configured a home router's port forwarding, you know enough about the underlying network model to handle this module.

---

## 🏘️ A Story: Maria's Pizza Empire Goes Global

Maria's pizza shops now serve 50 cities worldwide. Each shop needs:

- A **plot of land** (its own private street with addresses) → **VPC**
- A **front door** for customers (public entrance) → **Internet Gateway**
- A **back door** for staff only (private) → **NAT Gateway**
- A **doorbell** that routes guests to the right shop based on location → **Route 53**
- A **traffic cop** out front that distributes lunch-rush customers across all 4 cashiers → **Elastic Load Balancer**
- A **cache of pizzas** pre-positioned in 400+ cities so customers don't wait → **CloudFront**
- A **dedicated armored truck route** between her warehouse and shops (no public road) → **Direct Connect**
- A **mobile app API** for online orders → **API Gateway**

Each of these maps to one AWS service. Memorize the analogy and you'll never confuse them.

---

## 🏘️ Amazon VPC (Virtual Private Cloud)

**VPC = your own private, isolated network inside AWS.** You define the IP address range (CIDR block, e.g. `10.0.0.0/16`), carve it into subnets, and decide what's public and what's private.

### Anatomy of a VPC

```
   VPC: 10.0.0.0/16
   ├─ Public Subnet  (10.0.1.0/24), has route to Internet Gateway
   │   └─ EC2 web servers (with Elastic IPs or ELB)
   ├─ Private Subnet (10.0.2.0/24), no internet access (or via NAT)
   │   └─ EC2 application servers
   └─ Private Subnet (10.0.3.0/24), for databases
       └─ RDS instance
```

### Key VPC building blocks (CLF-level)

| Component | What it does |
|-----------|--------------|
| **Subnet** | A slice of the VPC, lives in **one AZ** |
| **Internet Gateway (IGW)** | The "public road", gives a VPC access to the internet |
| **NAT Gateway** | Lets private subnet instances reach the internet *outbound only* |
| **Route Table** | Per-subnet rules for where traffic goes |
| **Security Group** | **Stateful** firewall AT the instance, allow rules only |
| **Network ACL (NACL)** | **Stateless** firewall AT the subnet, allow + deny rules |
| **VPC Peering** | Connect 2 VPCs privately |
| **Transit Gateway** | Hub-and-spoke connection for MANY VPCs (and on-prem) |
| **VPC Endpoint** | Private connection from your VPC to AWS services (no internet) |

🔥 **MEMORIZE the SG vs NACL difference**, exam loves this:

| Feature | Security Group | NACL |
|---------|----------------|------|
| Scope | EC2 instance (ENI) | Subnet |
| Stateful? | ✅ Yes (return traffic auto-allowed) | ❌ No (must allow both directions) |
| Rules | Allow only | Allow + Deny |
| Default | Inbound deny all / Outbound allow all | Allow all in/out (default NACL) |

🎯 **Exam shortcut:** "Block one bad IP at the subnet level" → **NACL** (allows DENY rules). "Allow port 80 to a web server" → **Security Group.**

---

## 🌐 Connecting On-Prem to AWS

| Option | What it is | When to use |
|--------|------------|-------------|
| **VPN (Site-to-Site)** | Encrypted IPsec tunnel over the internet | Fast to set up, encrypted, but variable latency |
| **AWS Direct Connect** | Dedicated private fiber from your DC to AWS | High bandwidth (1/10/100 Gbps), low latency, predictable, takes weeks to provision |
| **Direct Connect + VPN** | Use VPN as backup over DX | Belt-and-suspenders for critical workloads |
| **AWS Transit Gateway** | Hub for many VPCs + on-prem | Scale beyond a few VPC peerings |
| **VPC Peering** | 1:1 private link between 2 VPCs | Few VPCs, simple model |

🎯 **Exam pattern:**
- "Highest bandwidth, lowest latency, consistent" → **Direct Connect**
- "Fast to set up, encrypted over internet" → **Site-to-Site VPN**
- "Connect 100 VPCs simply" → **Transit Gateway**

---

## 📡 Amazon Route 53, DNS

**Route 53 = AWS's managed DNS service.** Translates `www.example.com` into IP addresses.

### Routing policies (HIGH-FREQUENCY EXAM TOPIC)

| Policy | What it does | Use case |
|--------|--------------|----------|
| **Simple** | One record, no logic | Basic mapping |
| **Weighted** | Split traffic by % | A/B testing, gradual rollout |
| **Latency-based** | Send users to lowest-latency Region | Global apps |
| **Failover** | Active/standby (primary + secondary) | DR setups |
| **Geolocation** | Route by user's country/region | Compliance, localization |
| **Geoproximity** | Route by geographic distance (with bias) | Traffic shaping |
| **Multivalue Answer** | Return up to 8 healthy records | Simple HA |

Route 53 also does **domain registration** and **health checks**.

🎯 **Exam shortcut:** "Send EU users to the EU region for GDPR" → **Geolocation routing.** "Send users to lowest-latency endpoint" → **Latency-based.**

---

## 📦 Amazon CloudFront, CDN

CloudFront launched in November 2008. The general "CDN" architecture pattern push content out to geographically distributed edge nodes was popularized by Akamai (founded 1998, MIT spinout from Daniel Lewin and Tom Leighton's research) and is described academically in Leighton et al., *"Globally Distributed Content Delivery,"* IEEE Internet Computing 2002. Brewer's CAP theorem (Brewer, PODC keynote 2000; formalized by Gilbert & Lynch, *ACM SIGACT News*, 2002) explains why CDN caches favor availability + partition tolerance over strong consistency.

**CloudFront = AWS's CDN.** Caches your content at **400+ Edge Locations** worldwide for low-latency delivery.

Key concepts:

- **Origin**, where the original content lives (S3 bucket, ELB, EC2, custom HTTP)
- **Distribution**, your CloudFront configuration
- **Edge Location**, global PoP that caches the content
- **OAC (Origin Access Control)**, locks S3 origin so only CloudFront can fetch from it (replaces old OAI)

CloudFront also offers:

- **Field-level encryption** for sensitive fields
- **Signed URLs / Cookies** for paid / private content
- **Lambda@Edge** and **CloudFront Functions**, run code at the edge
- **Integration with AWS WAF and Shield** for DDoS protection

🎯 **Exam pattern:** "Serve a global website with low latency and DDoS protection" → **CloudFront + WAF + Shield**.

---

## ⚖️ Elastic Load Balancing (ELB)

**ELB distributes incoming traffic across multiple targets.** Comes in 4 flavors:

| Type | Layer | Best for | Notes |
|------|-------|----------|-------|
| **Application Load Balancer (ALB)** | Layer 7 (HTTP/HTTPS) | Web apps, microservices, container routing | Path/host-based rules, WebSockets, HTTP/2 |
| **Network Load Balancer (NLB)** | Layer 4 (TCP/UDP) | Ultra-low latency, millions of req/sec, static IP | Preserves source IP |
| **Gateway Load Balancer (GWLB)** | Layer 3 | Insert 3rd-party security appliances (firewalls, IDS) | Operates at IP level |
| **Classic Load Balancer (CLB)** | Layer 4/7 | Legacy only, being deprecated | Don't pick on exam unless asked |

🎯 **Exam shortcut:**
- "HTTP routing by URL path" → **ALB**
- "TCP/UDP, millions of req/sec, static IP" → **NLB**
- "Insert a third-party firewall appliance" → **GWLB**

---

## 🚀 AWS Global Accelerator

**Global Accelerator = uses the AWS global backbone to give your users 2 static anycast IPs and route them to the fastest healthy endpoint.**

Difference from CloudFront:

- **CloudFront** = caches CONTENT at the edge (HTTP-heavy)
- **Global Accelerator** = routes TRAFFIC over the AWS backbone (any TCP/UDP)

🎯 **Exam pattern:** "Non-HTTP TCP/UDP app needing global low-latency endpoints with static IPs" → **Global Accelerator.**

---

## 🛜 Amazon API Gateway

**API Gateway = managed gateway for REST, HTTP, and WebSocket APIs.** Handles auth, throttling, transformations, caching.

Common pattern: **API Gateway → Lambda** = fully serverless backend.

🎯 **Exam shortcut:** "Expose a serverless REST API with auth/throttling" → **API Gateway** in front of Lambda.

---

## 🔌 VPC Endpoints, Private Access To AWS

By default, EC2 → S3 traffic goes out the IGW (over the public internet). **VPC Endpoints keep it inside the AWS network.**

| Type | What it does |
|------|--------------|
| **Gateway Endpoint** | For S3 and DynamoDB only; uses route table |
| **Interface Endpoint (PrivateLink)** | For everything else (KMS, SQS, SNS, etc.); uses ENI with private IP |

🎯 **Exam pattern:** "Access S3 from a private subnet without using the internet" → **VPC Gateway Endpoint for S3.**

---

## 🆚 Compare-and-Contrast Mini-Table

| If you need to... | Use |
|-------------------|-----|
| Route HTTP traffic to many targets by URL | **ALB** |
| Handle millions of TCP req/sec | **NLB** |
| Cache static + dynamic content globally | **CloudFront** |
| Get 2 static anycast IPs + global backbone | **Global Accelerator** |
| Resolve `example.com` to your AWS app | **Route 53** |
| Encrypted tunnel over internet to on-prem | **Site-to-Site VPN** |
| Dedicated fiber to on-prem | **Direct Connect** |
| Connect 50 VPCs together | **Transit Gateway** |
| Private S3 access from VPC | **Gateway Endpoint** |
| Block a bad IP at the subnet boundary | **NACL** |
| Allow port 80 to EC2 | **Security Group** |

---

## 🚨 Exam Traps

1. **Security Groups are stateful** return traffic is auto-allowed. **NACLs are stateless** you must allow both directions explicitly.
2. **Security Groups only have ALLOW rules.** NACLs can DENY (use NACL to block a specific IP).
3. **Internet Gateway gives outbound + inbound.** NAT Gateway is **outbound only** for private subnets.
4. **Direct Connect is NOT encrypted by default.** Pair with a VPN if you need encryption.
5. **CloudFront ≠ Global Accelerator.** CloudFront caches HTTP content; GA routes any TCP/UDP via the AWS backbone.
6. **Route 53's "weighted" vs "latency" vs "geolocation" vs "geoproximity"**, read carefully.
7. **Subnets are AZ-scoped.** A subnet can't span AZs.
8. **One IGW per VPC.** You don't get multiples.
9. **NAT Gateway is per-AZ**, for HA you need one per AZ.
10. **VPC Peering is NON-transitive.** A↔B and B↔C does NOT mean A↔C.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "VPC is a service I pay for" | The VPC itself is free; you pay for things in it (data transfer, NAT, ELB, etc.) |
| "Security Groups block deny" | They don't, they only ALLOW. Use NACLs for DENY. |
| "Direct Connect = encrypted" | Not by default. Pair with VPN for encryption. |
| "CloudFront is only for S3" | It can front S3, ALB, EC2, or any custom HTTP origin |
| "Route 53 is just DNS" | It also does registration, health checks, and traffic routing |
| "NAT Gateway is free" | It's pay-per-hour + per-GB, can be expensive |
| "Edge Locations run EC2" | No, they only cache and run minimal logic (Lambda@Edge, CF Functions) |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **VPC** | Your isolated virtual network inside AWS |
| **Subnet** | AZ-scoped slice of a VPC |
| **CIDR** | IP range notation, e.g., `10.0.0.0/16` |
| **Internet Gateway (IGW)** | Public internet entrance for a VPC |
| **NAT Gateway** | Outbound-only internet for private subnets |
| **Route Table** | Per-subnet routing rules |
| **Security Group (SG)** | Stateful instance-level firewall, allow-only |
| **NACL** | Stateless subnet-level firewall, allow + deny |
| **VPC Peering** | 1:1 private VPC link (non-transitive) |
| **Transit Gateway** | Hub-and-spoke connectivity for many VPCs / on-prem |
| **VPC Endpoint** | Private access to AWS services (Gateway / Interface) |
| **PrivateLink** | Private connectivity to services across VPCs / accounts |
| **Direct Connect** | Dedicated private fiber to AWS |
| **Site-to-Site VPN** | Encrypted IPsec tunnel over internet |
| **Route 53** | Managed DNS + domain registration |
| **CloudFront** | Global CDN at AWS Edge Locations |
| **OAC** | Origin Access Control, locks S3 origin to only CF |
| **Global Accelerator** | Anycast IPs + AWS backbone routing |
| **ALB / NLB / GWLB** | Layer 7 / Layer 4 / Layer 3 load balancers |
| **API Gateway** | Managed REST/HTTP/WebSocket API endpoint |

---

## 🏛️ Case Study, Netflix: AWS + Open Connect (2008–present)

**Situation.** In August 2008 five years before Netflix's "all-in" AWS announcement a corrupted database in Netflix's own Los Gatos data center caused three days of DVD-shipping downtime. CEO Reed Hastings concluded that running their own physical infrastructure was a strategic liability. By 2008, streaming was growing fast and Netflix did not want to be in the data-center business while also reinventing how the world watches TV.

**Decision.** Netflix made two layered architectural bets between 2008 and 2016:

1. **Migrate everything except video delivery to AWS** (2008–2015). The control plane, recommendation engine, encoding pipeline, billing, A/B testing, all on AWS. By January 2016, Netflix announced the on-prem data center was closed. Yury Izrailevsky (then VP Cloud) blogged the milestone (*"Completing the Netflix Cloud Migration,"* Netflix Tech Blog, Feb 2016).
2. **Build their own CDN Open Connect (OCAs) for the actual video bits** (2011 onwards). Rather than pay AWS CloudFront margin on petabytes/hour of streaming, Netflix shipped purpose-built cache appliances to ISPs around the world for free. Comcast, Verizon, Telstra, Liberty Global, KPN, all install Open Connect Appliances in their PoPs. By 2024, Open Connect delivers ~95% of Netflix traffic; CloudFront / AWS is used only for sub-second control-plane responses, fallback, and ramp-up.

**Outcome.** Netflix is the largest video-streaming service in the world (~270M paid subscribers, 2024 Q1). Streaming-quality metrics consistently outperform competitors because Open Connect terminates *inside* the ISP's network, eliminating the "ISP-to-CDN" hop entirely. Compute / control-plane elasticity comes from AWS; bandwidth economics come from Open Connect. Netflix open-sourced major pieces of its AWS-native stack: **Chaos Monkey** (2011), **Hystrix** (2012), **Eureka** (2012), and the entire **Spinnaker** continuous-delivery platform (2014, co-developed with Google).

**Lesson for the exam / for practitioners.** Netflix is the textbook case for *"AWS for what's elastic; build-your-own for what's high-bandwidth and predictable."* On CLF-C02, Netflix is the implicit example whenever the exam mentions "global content delivery" or CloudFront. For practitioners, the lesson is sharper: at high enough scale, **the CDN bill is its own business model**, not a line item, and the same logic that Dropbox applied to S3 (Module 3) Netflix applied to CloudFront. AWS's response was to add the **CloudFront Save Plans / committed-use pricing** that didn't exist when Netflix made its decision.

**Discussion (Socratic).**
- Q1: Netflix could have used 100% CloudFront. Why didn't they? At what subscriber count (1M? 10M? 100M?) does the Open Connect investment break even? What other factors besides cost (e.g., ISP relationships, latency control) tip the answer?
- Q2: AWS reportedly *helped* Netflix design Open Connect, even though it cannibalized AWS CDN revenue. Why would AWS support a customer competing with one of its own products? What does that tell you about Amazon's broader strategic playbook?
- Q3: Netflix's choice (cloud for control plane, owned for bandwidth) is sometimes called the "hourglass" architecture. Where else does this pattern apply? (Hint: think about Spotify's audio streaming, or Twitter / X's image hosting.)

---

## ✅ Module 4 Summary

You now know:

- 🏘️ VPC anatomy: subnets, IGW, NAT, route tables, SGs, NACLs
- 🔥 SG vs NACL (stateful vs stateless, allow-only vs allow+deny)
- 🌐 VPN vs Direct Connect; VPC Peering vs Transit Gateway; VPC Endpoints
- 📡 Route 53 routing policies (simple, weighted, latency, failover, geolocation, geoproximity, multivalue)
- 📦 CloudFront for global caching; OAC for S3 lockdown
- ⚖️ ALB (Layer 7), NLB (Layer 4), GWLB (Layer 3)
- 🚀 Global Accelerator vs CloudFront, when to pick which
- 🛜 API Gateway for serverless APIs
- 🎬 Netflix's AWS-control-plane + Open-Connect-bandwidth split as the canonical hybrid CDN case

**Next steps:**
1. 🎥 [Videos](./Videos.md)
2. ✏️ [Quiz](./Quiz.md)
3. 📋 [Cheat-Sheet](./Cheat-Sheet.md)
4. 🧪 Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), you're halfway through!
5. ➡️ Then [Module 5: Databases](../Module-05-Databases/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 6 (Security) covers WAF, Shield, and OAC for locking down CloudFront origins. Module 8 (Well-Architected) revisits Performance Efficiency through the lens of edge caching and Global Accelerator.
> - Cross-course: `04-AWS-Solutions-Architect-Associate` Module 4 introduces ALB Listener Rules, target groups, sticky sessions, and SAA-specific topics like Network Firewall and AWS PrivateLink for cross-account services.
> - Practice: Practice Exam 1 has 9 networking questions (Qs 12–17, 25, 26, 32). Final Mock Exam has 8 networking questions distributed across the Cloud Tech & Services domain.

---

## 💬 Discussion, Socratic prompts

1. **Security Group vs NACL design.** A new team-mate argues "let's just put all the deny rules in Security Groups." Explain in two sentences why that's impossible. Then walk through the design principle for *when* you actually need NACLs vs when SGs are sufficient, citing a concrete example.
2. **Direct Connect's hidden gotcha.** A finance customer asks "we'll use Direct Connect because it's encrypted." Walk through why that's wrong, what AWS *does* and *doesn't* encrypt by default, and what the customer should actually use (DX + VPN, or MACsec on DX) for end-to-end encryption.
3. **CloudFront vs Global Accelerator design choice.** A WebSocket-based real-time multiplayer game wants global low latency. CloudFront is "the CDN", but is it the right answer here? Walk through why Global Accelerator might be better, and when CloudFront would still win.
4. **Transit Gateway vs many VPC Peerings.** At what number of VPCs does Transit Gateway start being cheaper / simpler than mesh peering? What's the *operational* (not financial) tipping point?
5. **The S3 + CloudFront "private origin" trap.** Beginners often make their S3 bucket public to serve via CloudFront. What's wrong with that, and how does OAC (Origin Access Control, replaced OAI in 2022) fix it? What's the right exam answer?

---

## 📚 Further Reading (Optional)

- 📖 [VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
- 📖 [Route 53 Routing Policies](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)
- 📖 [Choosing Between ALB / NLB / GWLB](https://aws.amazon.com/elasticloadbalancing/features/#Product_comparisons)
- 📖 [CloudFront Developer Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- 📖 [Direct Connect vs VPN](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/introduction.html)

---

## 📚 Further sources (this module)

- 📰 **Izrailevsky, Y. *"Completing the Netflix Cloud Migration"* (Netflix Tech Blog, February 2016)** primary-source disclosure of the 7-year AWS migration. Pair with Adrian Cockcroft's 2013 QCon talk *"How Netflix Uses Cassandra and AWS at Scale."*
- 🎙️ **Netflix Open Connect engineering *"Open Connect Architecture"* (Netflix Tech Blog, 2020 update)** how the CDN appliances integrate with ISP networks. Free PDF.
- 📄 **Leighton, T., et al. *"Globally Distributed Content Delivery"* (IEEE Internet Computing, Sep 2002)** the academic paper that defined modern CDN architecture. Tom Leighton co-founded Akamai based on this research.
- 📄 **Gilbert, S. & Lynch, N. *"Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services"* (ACM SIGACT News, June 2002)** the formal proof of Brewer's CAP theorem. Explains the consistency / availability trade-off every CDN makes.
- 📖 **AWS Builders' Library *"Caching challenges and strategies"* by Matt Brinkley** the canonical AWS-side discussion of cache invalidation, TTL design, and stampede protection. Free, ~25-min read.
- 🎓 **Stanford CS244 *Advanced Topics in Networking* (David Mazières, free on Stanford's site)**, module on CDN architecture covers Akamai, CloudFront, and Open Connect as compare-and-contrast.
