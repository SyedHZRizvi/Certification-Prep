# Module 6: App Services & Containers 📦

> **Why this module matters:** Not every workload needs a VM. Azure has three "managed compute" tracks: App Service (PaaS web apps), Azure Container Instances (one-off containers), and AKS (managed Kubernetes). The AZ-104 exam tests when to pick which and how to configure plans, slots, scaling, and the basics of node pools.

---

## 🍕 A Story: The Restaurant That Stopped Owning Its Kitchen

Maria's restaurant ("Pasta Pronto") used to own a giant industrial kitchen, two delivery vans, a payroll department, and three IT staff to keep the POS running. Today, Maria's restaurant uses **Uber Eats** for delivery, **a shared commercial kitchen** for prep, and **Square** for the POS — she just makes pasta.

That's PaaS. You provide the pasta (your code). The platform provides everything else. Three sizes of "shared kitchen" in Azure:

- **App Service** — fully managed web hosting. You bring code (or a container) and it runs. The platform handles OS patches, scaling, certificates, slots, deployment.
- **Azure Container Instances (ACI)** — one shipping container that runs your container image and disappears when it's done. No orchestration, no cluster.
- **Azure Kubernetes Service (AKS)** — Microsoft manages your Kubernetes control plane; you bring node pools, deploy YAML, get autoscaling and rolling updates.

Most exam questions are "given X scenario, which compute service fits?" Memorize the differences and you'll nail those.

---

## 🌐 Azure App Service

A **fully managed PaaS** for hosting web apps, REST APIs, mobile back-ends, and Windows/Linux containers.

| Concept | What it is |
|---------|------------|
| **App Service plan (ASP)** | The compute SKU you pay for — VMs are under the hood but invisible to you |
| **App Service** | One web app (one URL like `https://app-x.azurewebsites.net`) running inside a plan |
| **Deployment slot** | A side-by-side copy of an app (e.g. `staging`) you can swap into production |
| **Custom domain** | `www.contoso.com` mapped to the app |
| **SSL/TLS binding** | A managed cert or BYO cert attached to the custom domain |
| **Configuration** | App settings + connection strings (env vars at runtime) |
| **WEBSITE_RUN_FROM_PACKAGE** | App setting that points to a zipped package URL |
| **Easy Auth** | Built-in Entra ID / Google / Facebook sign-in at the platform layer |

### App Service Plan tiers

| Tier | Use case | Notable features |
|------|----------|------------------|
| **F1 (Free)** | Hobby | 60 CPU min/day · no custom domain |
| **D1 (Shared)** | Light dev | Shared VMs · custom domain · no SSL |
| **B1–B3 (Basic)** | Dev/test | Dedicated VM · manual scale · 3 instances max |
| **S1–S3 (Standard)** | Small prod | Auto-scale · deployment slots (5) · daily backups |
| **P0v3–P3v3 (Premium v3)** | Prod | Auto-scale, slots (20), zone redundancy, faster CPUs |
| **I1v2–I3v2 (Isolated v2)** | Regulated prod | Runs inside an **App Service Environment (ASE)** in your VNet |

🔥 **Slots require Standard or higher.** Free/Shared/Basic have NO deployment slots.

🔥 **VNet integration (outbound)** — Standard or higher. **Inbound private endpoint** — Premium v3 / Isolated.

### Create an App Service via CLI

```bash
# Plan first
az appservice plan create \
    --name asp-prod-eus-001 \
    --resource-group rg-app \
    --sku P1v3 \
    --is-linux \
    --location eastus \
    --zone-redundant true

# Then the web app on that plan
az webapp create \
    --name app-contoso-api-001 \
    --resource-group rg-app \
    --plan asp-prod-eus-001 \
    --runtime "PYTHON:3.12"
```

### Deployment Slots Workflow

```
[Production slot]          [Staging slot]
  app-contoso-api-001        app-contoso-api-001/slots/staging
       ▲                            ▲
       │   ─── az webapp deployment slot swap ───┘
       └────  zero-downtime swap (instances warmed in staging first) ────
```

```bash
az webapp deployment slot create \
    --name app-contoso-api-001 \
    --resource-group rg-app \
    --slot staging

# Deploy code to staging, warm it up, then swap
az webapp deployment slot swap \
    --name app-contoso-api-001 \
    --resource-group rg-app \
    --slot staging \
    --target-slot production
```

**Sticky settings** — by default app settings move with the slot during swap. Mark settings as "slot setting" if they must stay with the slot (e.g. connection string for a staging DB).

### Scale Up vs Scale Out

| | What it changes |
|---|----|
| **Scale up (vertical)** | Change the plan tier (more CPU/RAM) — usually some downtime |
| **Scale out (horizontal)** | Add more instances of the same plan (autoscale rules) |

### Autoscale rules (same engine as VMSS)

```bash
az monitor autoscale create \
    --resource-group rg-app \
    --resource asp-prod-eus-001 --resource-type Microsoft.Web/serverfarms \
    --name autoscale-cpu --min-count 2 --max-count 10 --count 2

az monitor autoscale rule create \
    --resource-group rg-app --autoscale-name autoscale-cpu \
    --condition "CpuPercentage > 70 avg 5m" --scale out 1
```

---

## 📦 Azure Container Instances (ACI)

**One container (or a small group) run for as long as needed, with no orchestration.** Pay per second of CPU + RAM consumed.

Best for:
- Build agents that run for 20 minutes a day
- Event-driven processing (a queue trigger spins up a container)
- "Cheap" cron-style batch jobs
- Sidecar / one-off init tasks before deploying to AKS

NOT for:
- Long-running web apps (use App Service or AKS)
- Stateful workloads needing persistent storage (ACI supports Azure Files mount, but it's clunky)

### Create an ACI

```bash
az container create \
    --resource-group rg-batch \
    --name aci-nightly-job \
    --image mcr.microsoft.com/azure-cli:latest \
    --command-line "az login --identity && /bin/bash /tools/etl.sh" \
    --assign-identity \
    --cpu 1 --memory 1.5 \
    --restart-policy OnFailure \
    --location eastus
```

| Feature | Notes |
|---------|-------|
| **Restart policies** | `Always`, `OnFailure`, `Never` |
| **Container group** | Multiple containers sharing network/IP/storage (think pod-lite) |
| **VNet support** | Yes — deploy to a delegated subnet |
| **Mount Azure Files** | `--azure-file-volume-share-name` |
| **Linux & Windows** | Both supported, Linux is the common path |

---

## ☸️ Azure Kubernetes Service (AKS) — Basics

Managed Kubernetes. Microsoft runs the **control plane** for free (you only pay for nodes and load balancers).

### Anatomy

```
Control plane (managed)
      │
   API server  ──────────────────────────────┐
                                              ▼
             ┌──────────── Node Pool: system  ┐
             │   • CoreDNS, kube-proxy        │
             ├──────────── Node Pool: user    ┤
             │   • Your application pods      │
             └──────────── Node Pool: spot    ┘
                  (multiple optional pools)
```

- **System node pool** — runs cluster-critical pods (CoreDNS, etc.). At least 1 is required.
- **User node pools** — for your workloads. Can autoscale, can be Spot, can be Windows.
- **Cluster autoscaler** — scales node *count* in a pool based on pending pods.
- **Horizontal Pod Autoscaler (HPA)** — Kubernetes feature that scales *pods*, not nodes.
- **Karpenter / Node Auto-Provisioning (NAP)** — newer node provisioning engine (preview in many regions).

### Networking modes

| Mode | What it does |
|------|--------------|
| **Kubenet** (legacy) | Nodes get VNet IPs; pods get a separate CIDR. Less efficient. |
| **Azure CNI** | Pods get VNet IPs directly — best for VNet integration |
| **Azure CNI Overlay** | Pods get IPs from an overlay CIDR — saves IPs without losing CNI features |
| **Azure CNI Powered by Cilium** | eBPF-based, Network Policy + observability |

### Ingress options

| Option | Notes |
|--------|-------|
| **Standard Load Balancer + Service of type LoadBalancer** | Basic public exposure |
| **Application Gateway Ingress Controller (AGIC)** | Layer-7 + WAF |
| **Application Gateway for Containers** | Modern replacement for AGIC |
| **NGINX Ingress** | Open-source, widely used |
| **Istio service mesh** | Built-in option for advanced traffic management |

### Storage

- **AzureDisk CSI driver** — RWO (single-pod) volumes
- **AzureFile CSI driver** — RWX (multi-pod) shares
- **Blob CSI driver** — object storage as a volume

### Create an AKS cluster via CLI

```bash
az aks create \
    --resource-group rg-aks \
    --name aks-prod-eus-001 \
    --location eastus \
    --node-count 2 \
    --node-vm-size Standard_D4ds_v5 \
    --enable-managed-identity \
    --network-plugin azure \
    --network-plugin-mode overlay \
    --enable-cluster-autoscaler \
    --min-count 2 --max-count 10 \
    --zones 1 2 3 \
    --generate-ssh-keys
```

### Add a user node pool

```bash
az aks nodepool add \
    --cluster-name aks-prod-eus-001 \
    --resource-group rg-aks \
    --name userpool1 \
    --node-count 2 \
    --node-vm-size Standard_D8ds_v5 \
    --enable-cluster-autoscaler --min-count 2 --max-count 20 \
    --zones 1 2 3
```

### Get kubeconfig

```bash
az aks get-credentials \
    --resource-group rg-aks \
    --name aks-prod-eus-001
```

---

## 🧭 Decision Cheat Sheet — Which Compute?

| Scenario | Best fit |
|----------|----------|
| .NET / Python / Node web app, push code, "just run it" | **App Service** |
| 30 microservices, want Kubernetes APIs, in-VNet | **AKS** |
| 2-minute container job from a queue | **ACI** |
| Long-running stateful DB | **VM (Module 5) or Azure SQL** |
| Event-driven, sub-second cold start | **Azure Functions** (Module 6 mention only — closer to AZ-204) |
| WordPress / commodity LAMP stack | **App Service for Linux** |
| Regulated, fully VNet-private app hosting | **App Service Isolated v2 (ASE)** |

---

## 🧪 Task-Sequencing Practice: Deploy an App Service With Zero-Downtime Releases

**Order these steps:**

1. ✅ Create an **App Service Plan** at `S1` or higher (slots require Standard+).
2. ✅ Create the **production web app** on that plan.
3. ✅ Create a **`staging`** deployment slot.
4. ✅ Configure **slot-specific app settings** (mark "Slot setting" where appropriate).
5. ✅ Set up **CI/CD** to deploy to `staging` (GitHub Actions / Azure DevOps).
6. ✅ Run **smoke tests** against `https://app-x-staging.azurewebsites.net`.
7. ✅ **Auto-swap** or manually `az webapp deployment slot swap` once tests pass.
8. ✅ Watch for issues; if anything breaks, **swap back** to roll back instantly.

⚠️ Skipping step 4 = your staging DB credentials get swapped into prod. Painful.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Slots work on the Free tier" | ❌ Standard+ only |
| "App Service Plan = one web app" | ❌ A plan can host many web apps; they share the underlying compute |
| "VNet integration works on Basic plans" | ❌ Standard+ for outbound integration; Premium v3 for private endpoint |
| "Scale up is the same as scale out" | ❌ Up = bigger SKU, Out = more instances |
| "ACI is good for long-running workloads" | ❌ Use App Service or AKS for those |
| "AKS control plane has a cost" | ❌ Microsoft runs it free; pay for nodes + add-ons |
| "Karpenter / NAP is GA everywhere" | ⚠️ Preview/limited in many regions — check the docs |
| "Sticky settings move with swap" | ❌ "Slot settings" stay with the slot, don't swap |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **App Service Plan (ASP)** | Compute SKU + region for one or more web apps |
| **Deployment Slot** | Side-by-side app instance, swapable |
| **Slot setting** | App setting marked to stay with the slot during swap |
| **Easy Auth** | Built-in platform auth (Entra/Google/etc.) |
| **WEBSITE_RUN_FROM_PACKAGE** | App setting pointing to a zip-package URL |
| **ASE** | App Service Environment — isolated dedicated stamp |
| **ACI** | Azure Container Instances |
| **Container group** | One or more containers sharing IP/storage |
| **AKS** | Azure Kubernetes Service |
| **Node pool** | A group of identical nodes in a cluster |
| **HPA** | Horizontal Pod Autoscaler — scales pod count |
| **Cluster autoscaler** | Scales node count in a pool |
| **AGIC / AGFC** | App Gateway Ingress Controller / App Gateway for Containers |
| **Azure CNI Overlay** | Pod IPs from overlay CIDR — saves VNet IPs |
| **AzureDisk / AzureFile CSI** | K8s storage drivers for Azure disks / files |

---

## ✅ Module 6 Summary

You now know:
- 🌐 App Service tiers + which features unlock at Standard / Premium v3 / Isolated v2
- 🔁 How deployment slots + slot settings + swap work
- 📈 Scale up vs scale out vs autoscale on App Service
- 📦 ACI use cases and container groups
- ☸️ AKS anatomy: control plane (free), system + user node pools, networking modes, ingress, storage
- 🧭 The "which compute?" decision tree

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 7: Virtual Networks](../Module-07-Virtual-Networks/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [App Service plan tiers comparison](https://learn.microsoft.com/azure/app-service/overview-hosting-plans)
- 📖 [Deployment slots](https://learn.microsoft.com/azure/app-service/deploy-staging-slots)
- 📖 [ACI overview](https://learn.microsoft.com/azure/container-instances/container-instances-overview)
- 📖 [AKS concepts](https://learn.microsoft.com/azure/aks/concepts-clusters-workloads)
- 📖 [Azure CNI Overlay networking](https://learn.microsoft.com/azure/aks/azure-cni-overlay)
