# Module 6: Security & RBAC — Cheat Sheet

> Print this page. Take it to the exam (open-book: kubernetes.io only). Every table below maps directly to CKA tasks.

---

## RBAC Object Comparison

| Object | Scope | Binds To | Can Grant Non-namespaced Resources |
|---|---|---|---|
| `Role` | One namespace | Subjects in same namespace | No |
| `ClusterRole` | Cluster-wide (template) | N/A — referenced by a binding | Yes |
| `RoleBinding` | One namespace | Role or ClusterRole — limits to namespace | No |
| `ClusterRoleBinding` | Cluster-wide | ClusterRole only — grants globally | Yes |

**The binding determines scope, not the role.**
A ClusterRole + RoleBinding = namespace-scoped access.
A ClusterRole + ClusterRoleBinding = cluster-wide access.

---

## kubectl RBAC Commands

| Task | Command |
|---|---|
| Create Role | `kubectl create role <name> --verb=get,list --resource=pods -n <ns>` |
| Create ClusterRole | `kubectl create clusterrole <name> --verb=get,list --resource=nodes` |
| Create RoleBinding (user) | `kubectl create rolebinding <name> --role=<role> --user=<user> -n <ns>` |
| Create RoleBinding (SA) | `kubectl create rolebinding <name> --role=<role> --serviceaccount=<ns>:<sa> -n <ns>` |
| Create ClusterRoleBinding | `kubectl create clusterrolebinding <name> --clusterrole=<cr> --group=<grp>` |
| Check permission | `kubectl auth can-i <verb> <resource> -n <ns>` |
| Check permission as user | `kubectl auth can-i <verb> <resource> --as=<user> -n <ns>` |
| Check permission as SA | `kubectl auth can-i <verb> <resource> --as=system:serviceaccount:<ns>:<sa>` |
| List all permissions | `kubectl auth can-i --list -n <ns>` |
| List all permissions as user | `kubectl auth can-i --list --as=<user> -n <ns>` |

---

## ServiceAccount Commands

| Task | Command |
|---|---|
| Create SA | `kubectl create serviceaccount <name> -n <ns>` |
| View SA details | `kubectl describe serviceaccount <name> -n <ns>` |
| Add imagePullSecret to SA | `kubectl patch sa <sa> -n <ns> -p '{"imagePullSecrets":[{"name":"<secret>"}]}'` |
| Disable token mount (Pod spec) | `automountServiceAccountToken: false` |

---

## SecurityContext Fields

| Field | Level | Purpose | Hardened Value |
|---|---|---|---|
| `runAsUser` | Pod / Container | UID the process runs as | Non-zero (e.g., `1000`) |
| `runAsGroup` | Pod / Container | GID the process runs as | Non-zero |
| `runAsNonRoot` | Pod / Container | Reject if UID = 0 | `true` |
| `readOnlyRootFilesystem` | Container | Root FS is read-only | `true` |
| `allowPrivilegeEscalation` | Container | Allow setuid/setgid | `false` |
| `privileged` | Container | Full host capabilities | `false` |
| `capabilities.drop` | Container | Remove Linux capabilities | `["ALL"]` |
| `capabilities.add` | Container | Add specific capability | Minimum needed only |
| `fsGroup` | Pod | GID for mounted volumes | Non-zero |
| `seccompProfile.type` | Pod / Container | Seccomp filter | `RuntimeDefault` |

### Minimal Hardened Container SecurityContext

```yaml
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  allowPrivilegeEscalation: false
  readOnlyRootFilesystem: true
  capabilities:
    drop: ["ALL"]
```

---

## Pod Security Standards Levels

| Level | Allowed Workloads | Key Restrictions |
|---|---|---|
| `privileged` | Infrastructure only (e.g., CNI plugins, log agents) | None — full host access allowed |
| `baseline` | Most general applications | No hostPath, no privileged containers, no host namespaces |
| `restricted` | Sensitive / multi-tenant | Must be non-root, drop ALL caps, no privilege escalation, seccomp required |

### Pod Security Modes

| Mode | Effect on Violations |
|---|---|
| `enforce` | Pod is **rejected** |
| `audit` | Pod is **allowed**, violation logged in audit log |
| `warn` | Pod is **allowed**, warning returned to user |

### Applying PSS to a Namespace

```bash
kubectl label namespace <ns> \
  pod-security.kubernetes.io/enforce=restricted \
  pod-security.kubernetes.io/enforce-version=v1.29 \
  pod-security.kubernetes.io/warn=restricted \
  pod-security.kubernetes.io/warn-version=v1.29
```

---

## Kubeconfig Commands

| Task | Command |
|---|---|
| View full config | `kubectl config view` |
| Current context | `kubectl config current-context` |
| List all contexts | `kubectl config get-contexts` |
| Switch context | `kubectl config use-context <name>` |
| Set namespace for current context | `kubectl config set-context --current --namespace=<ns>` |
| Use alternate kubeconfig | `KUBECONFIG=/path/to/config kubectl get nodes` |

---

## Admission Webhooks

| Type | Can Mutate? | Can Reject? | Use Case |
|---|---|---|---|
| `MutatingWebhookConfiguration` | Yes | Yes | Inject sidecars, set defaults |
| `ValidatingWebhookConfiguration` | No | Yes | Enforce policies, naming rules |

`failurePolicy: Fail` — request rejected if webhook is unreachable (safe default for security).
`failurePolicy: Ignore` — request allowed if webhook is unreachable (use for non-critical webhooks).

---

## Audit Policy Levels

| Level | Logs |
|---|---|
| `None` | Nothing |
| `Metadata` | User, verb, resource, timestamp — no body |
| `Request` | Metadata + request body |
| `RequestResponse` | Metadata + request body + response body |

---

## Private Registry Pull Secret

```bash
kubectl create secret docker-registry <secret-name> \
  --docker-server=<registry> \
  --docker-username=<user> \
  --docker-password=<pass> \
  -n <ns>
```

Reference in Pod: `spec.imagePullSecrets: [{name: <secret-name>}]`

---

## Common RBAC YAML apiGroups Reference

| Resource | apiGroup |
|---|---|
| Pods, Services, ConfigMaps, Secrets, Nodes, PVs, ServiceAccounts | `""` (core) |
| Deployments, ReplicaSets, DaemonSets, StatefulSets | `apps` |
| CronJobs, Jobs | `batch` |
| Ingresses | `networking.k8s.io` |
| Roles, ClusterRoles, RoleBindings, ClusterRoleBindings | `rbac.authorization.k8s.io` |
| HorizontalPodAutoscalers | `autoscaling` |
