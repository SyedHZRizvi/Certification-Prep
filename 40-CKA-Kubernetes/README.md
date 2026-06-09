---
permalink: /40-CKA-Kubernetes/
title: Certified Kubernetes Administrator (CKA)
---

# ⎈ Certified Kubernetes Administrator (CKA)

**Governing body:** Linux Foundation / Cloud Native Computing Foundation (CNCF)
**Exam format:** 2-hour hands-on terminal exam · ~17 performance-based tasks · 66% passing score
**Validity:** 3 years
**Exam fee:** $395 USD (includes one free retake)

---

## 🎯 What This Course Covers

| Domain | Weight | Modules |
|--------|--------|---------|
| Troubleshooting | **30%** | Module 7 |
| Cluster Architecture, Installation & Configuration | **25%** | Modules 1, 2 |
| Services & Networking | **20%** | Module 4 |
| Workloads & Scheduling | **15%** | Module 3 |
| Storage | **10%** | Module 5 |
| Security (RBAC, ServiceAccounts) | Part of Arch | Module 6 |
| Exam Speed & Strategy | — | Module 8 |

---

## 📖 Module Map

| Module | Topic | Exam Domains Covered |
|--------|-------|----------------------|
| [Module 1 — Container Foundations](./Module-01-Container-Foundations/) | Docker → Kubernetes rationale, architecture overview | Cluster Architecture |
| [Module 2 — Cluster Architecture](./Module-02-Cluster-Architecture/) | kubeadm, etcd backup/restore, TLS, HA setups | Cluster Architecture (25%) |
| [Module 3 — Workloads & Scheduling](./Module-03-Workloads-Scheduling/) | Pods, Deployments, DaemonSets, StatefulSets, taints | Workloads & Scheduling (15%) |
| [Module 4 — Services & Networking](./Module-04-Services-Networking/) | ClusterIP, NodePort, Ingress, NetworkPolicies, DNS | Services & Networking (20%) |
| [Module 5 — Storage](./Module-05-Storage/) | PV, PVC, StorageClass, ConfigMaps, Secrets | Storage (10%) |
| [Module 6 — Security & RBAC](./Module-06-Security-RBAC/) | Roles, ClusterRoles, ServiceAccounts, SecurityContexts | Cluster Architecture |
| [Module 7 — Troubleshooting](./Module-07-Troubleshooting/) | Pod, cluster, networking, logging — the 30% domain | Troubleshooting (30%) |
| [Module 8 — Exam Speed](./Module-08-Exam-Speed/) | kubectl imperatives, bash aliases, time strategy | All domains |

---

## 🏆 Practice Exams

| File | Questions | Time | Coverage |
|------|-----------|------|---------|
| [Practice Exam 1](./Practice-Exams/Practice-Exam-1.md) | 8 | 60 min | Half-length warm-up |
| [Practice Exam 2](./Practice-Exams/Practice-Exam-2.md) | 12 | 90 min | Three-quarter, all domains |
| [Final Mock Exam](./Practice-Exams/Final-Mock-Exam.md) | **17** | **120 min** | Full CKA format, 66% pass |

---

## 📋 About the CKA Exam

> The CKA is unlike any other certification exam. There are no multiple-choice questions. You get a browser-based terminal with access to a live Kubernetes cluster and must complete real tasks — create a Deployment, fix a broken cluster, restore etcd from backup — under time pressure.

**Key facts:**
- Administered by: Linux Foundation via PSI Bridge
- Environment: browser-based terminal (PSI Secure Browser)
- Allowed resources: `kubernetes.io/docs` and `kubernetes.io/blog` (open in another tab)
- The exam has ~17 tasks, each worth a different percentage (shown in the question)
- Partial credit on some tasks
- One free retake included
- Results: within 24 hours

**Preparation time:** 4–8 weeks for cloud professionals; 8–12 weeks from scratch

---

## 🎓 Who This Is For

| Background | Readiness |
|-----------|-----------|
| AWS / Azure cloud practitioner | Ready to start Module 1 — you know VMs and networking |
| Linux sysadmin | Strong fit — comfort with the terminal is half the battle |
| Developer deploying containers | Good baseline — focus extra time on Modules 2 and 7 |
| Complete beginner | Start with CompTIA Linux+ or AWS Cloud Practitioner first |

---

## ⚡ Suggested Study Path

```
Week 1:  Modules 1 + 2 (container fundamentals + cluster setup)
Week 2:  Module 3 + Practice Exam 1 (workloads + first checkpoint)
Week 3:  Modules 4 + 5 (networking + storage — exam favorites)
Week 4:  Module 6 (security — RBAC is tested in EVERY domain)
Week 5:  Module 7 × 2 passes (troubleshooting = 30% of your grade)
Week 6:  Module 8 + Practice Exam 2 (speed drills + full mock)
Week 7:  Final Mock Exam → review wrongs → retake weak modules
Week 8:  3 days of speed runs (set a 2-hour timer, 17 tasks in scratch terminal)
```

---

## 🔒 License & Copyright

© 2026 Humayun Zafar. All Rights Reserved. This material is for enrolled-student personal study use only.
Kubernetes® is a registered trademark of the Linux Foundation. This course is an independent study resource and is not affiliated with, endorsed by, or authorized by the Linux Foundation, CNCF, or any certification body.
