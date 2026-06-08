# Module 6: Security & RBAC

> **CKA Domain:** Cluster Architecture, Installation & Configuration — 25% of exam weight
>
> **Story:** You have just been hired as the IT Security lead for Mercy General Hospital. The hospital runs on Kubernetes. Doctors need read-write access to patient records. Nurses can read prescriptions but not modify them. Every staff member carries a hospital ID badge (ServiceAccount) that tells the system *who* they are. Security cameras and locked supply rooms (SecurityContexts) prevent physical tampering. A strict visitor policy (NetworkPolicies + Pod Security Standards) controls who can even walk onto a ward. Today, you are configuring all of that.

---

## 1. The Three Gates: Authentication → Authorization → Admission Control

Every request to the Kubernetes API server passes through three sequential checkpoints. Think of arriving at the hospital:

1. **Authentication** — *"Who are you?"* The receptionist checks your government-issued ID. Kubernetes checks certificates, bearer tokens, OIDC tokens, or kubeconfig credentials.
2. **Authorization** — *"Are you allowed in this area?"* Security checks whether your role permits what you are trying to do. Kubernetes uses RBAC (or ABAC, Node, Webhook modes; RBAC is the default and the one tested on the CKA).
3. **Admission Control** — *"Does your request meet hospital policy?"* Admission controllers inspect (and optionally mutate) the request before it is persisted. Examples: `LimitRanger`, `ResourceQuota`, `PodSecurity`, custom webhook controllers.

```
Client → [TLS] → kube-apiserver
                     │
              ┌──────▼──────┐
              │ Authn (Who?)│  ← certificates, tokens, OIDC
              └──────┬──────┘
              ┌──────▼──────┐
              │ Authz (OK?) │  ← RBAC verbs + resources
              └──────┬──────┘
              ┌──────▼────────────┐
              │ Admission Control │  ← mutating → validating
              └──────┬────────────┘
              ┌──────▼──────┐
              │   etcd       │  ← persisted
              └─────────────┘
```

If any gate denies the request, it is rejected immediately and the subsequent gates are never reached.

---

## 2. RBAC — Role-Based Access Control

RBAC answers: *"Can this identity perform this verb on this resource?"*

Four building blocks:

| Object | Scope | Purpose |
|---|---|---|
| **Role** | Single namespace | Defines a set of permissions within one namespace |
| **ClusterRole** | Cluster-wide | Defines permissions across all namespaces or on non-namespaced resources (nodes, PVs) |
| **RoleBinding** | Single namespace | Binds a Role *or* ClusterRole to a subject within one namespace |
| **ClusterRoleBinding** | Cluster-wide | Binds a ClusterRole to a subject across the entire cluster |

### 2.1 Role

A **Role** lives in one namespace. It lists `apiGroups`, `resources`, and `verbs`.

```yaml
# MEMORIZE THIS TEMPLATE
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: patient-records-reader
  namespace: cardiology
rules:
  - apiGroups: [""]          # "" = core API group (Pods, Services, ConfigMaps…)
    resources: ["pods", "configmaps"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["apps"]
    resources: ["deployments"]
    verbs: ["get", "list"]
```

**Common verbs:** `get`, `list`, `watch`, `create`, `update`, `patch`, `delete`, `deletecollection`

### 2.2 ClusterRole

A **ClusterRole** is identical in structure but cluster-scoped. Use it for:
- Non-namespaced resources (`nodes`, `persistentvolumes`, `storageclasses`, `clusterroles`)
- Resources in *any* namespace (when referenced by a RoleBinding)

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: node-reader           # no namespace field
rules:
  - apiGroups: [""]
    resources: ["nodes"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["persistentvolumes"]
    verbs: ["get", "list", "watch"]
```

### 2.3 RoleBinding

A **RoleBinding** grants a Role (or ClusterRole) to one or more *subjects* in a specific namespace.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: doctor-binding
  namespace: cardiology
subjects:
  - kind: User              # User | Group | ServiceAccount
    name: dr-chen
    apiGroup: rbac.authorization.k8s.io
  - kind: ServiceAccount
    name: ehr-service
    namespace: cardiology   # required when subject is ServiceAccount
roleRef:
  kind: Role                # Role | ClusterRole
  name: patient-records-reader
  apiGroup: rbac.authorization.k8s.io
```

> **Key fact:** A RoleBinding can reference a *ClusterRole* — this scopes the ClusterRole's permissions down to the namespace of the RoleBinding. This is the standard way to reuse a ClusterRole template across many namespaces.

### 2.4 ClusterRoleBinding

A **ClusterRoleBinding** grants a ClusterRole cluster-wide (all namespaces + non-namespaced resources).

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: global-node-reader
subjects:
  - kind: Group
    name: platform-team
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: node-reader
  apiGroup: rbac.authorization.k8s.io
```

### 2.5 RBAC Quick-Create (imperative)

```bash
# Create a Role
kubectl create role pod-reader \
  --verb=get,list,watch \
  --resource=pods \
  --namespace=cardiology

# Create a ClusterRole
kubectl create clusterrole node-reader \
  --verb=get,list,watch \
  --resource=nodes

# Create a RoleBinding
kubectl create rolebinding doctor-binding \
  --role=pod-reader \
  --user=dr-chen \
  --namespace=cardiology

# Create a ClusterRoleBinding
kubectl create clusterrolebinding global-node-reader \
  --clusterrole=node-reader \
  --group=platform-team
```

---

## 🚨 Trap: ClusterRole vs Role Scope

> **Examiners love this trap.** A ClusterRole granted via a *RoleBinding* is namespaced — the subject only gets those permissions in the namespace of the RoleBinding, NOT cluster-wide. Only a *ClusterRoleBinding* gives cluster-wide access. Many candidates confuse "ClusterRole" (the permission template) with "cluster-wide access" (which requires ClusterRoleBinding).
>
> **Memory hook:** The *Binding* determines the scope. ClusterRole = reusable template. ClusterRoleBinding = global reach.

---

## 3. ServiceAccounts

When a Pod makes API calls — e.g., an operator reading Deployments — it needs an identity. That identity is a **ServiceAccount**. Think of it as the hospital's internal staff badge (distinct from the human ID card used at the front gate).

### 3.1 Default behaviour

Every namespace has a `default` ServiceAccount. Unless you disable it, every Pod automatically mounts a token from its assigned ServiceAccount at:
```
/var/run/secrets/kubernetes.io/serviceaccount/token
```

### 3.2 Creating and binding a ServiceAccount

```bash
# Create
kubectl create serviceaccount ehr-service -n cardiology

# Bind to a Role
kubectl create rolebinding ehr-binding \
  --role=patient-records-reader \
  --serviceaccount=cardiology:ehr-service \
  --namespace=cardiology
```

### 3.3 Using a ServiceAccount in a Pod

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: ehr-pod
  namespace: cardiology
spec:
  serviceAccountName: ehr-service       # assign the SA
  automountServiceAccountToken: false   # disable auto-mount if not needed
  containers:
    - name: app
      image: ehr-app:1.0
```

> Set `automountServiceAccountToken: false` when the Pod does not need API access. This reduces attack surface — an important security hardening step the exam sometimes asks about.

### 3.4 Verifying ServiceAccount permissions

```bash
# Can the SA list pods in cardiology?
kubectl auth can-i list pods \
  --namespace=cardiology \
  --as=system:serviceaccount:cardiology:ehr-service
```

---

## 4. `kubectl auth can-i` — Your Exam Verification Tool

```bash
# Basic check: can the current user delete pods in default?
kubectl auth can-i delete pods

# Check as a specific user
kubectl auth can-i create deployments --as=dr-chen --namespace=cardiology

# Check as a ServiceAccount
kubectl auth can-i get secrets \
  --as=system:serviceaccount:cardiology:ehr-service \
  --namespace=cardiology

# List ALL permissions for current user
kubectl auth can-i --list

# List ALL permissions for a specific user in a namespace
kubectl auth can-i --list --as=dr-chen --namespace=cardiology
```

## 🎯 Exam Tip

> Run `kubectl auth can-i --list --as=<subject> -n <namespace>` immediately after creating any RBAC binding to verify the permissions are exactly what you intended. This takes 5 seconds and can save you from submitting a broken answer. Do it every time.

---

## 5. Kubeconfig: Clusters, Users, Contexts

The `~/.kube/config` file (or `$KUBECONFIG`) defines three sections:

| Section | What it stores |
|---|---|
| `clusters` | API server URL + CA certificate |
| `users` | Credentials (client cert/key, token, OIDC config) |
| `contexts` | A named pairing of cluster + user + optional namespace |

### 5.1 Structure

```yaml
apiVersion: v1
kind: Config
current-context: cardiology-admin

clusters:
  - name: mercy-general
    cluster:
      server: https://10.0.0.1:6443
      certificate-authority-data: <base64-CA>

users:
  - name: admin-cert
    user:
      client-certificate-data: <base64-cert>
      client-key-data: <base64-key>

contexts:
  - name: cardiology-admin
    context:
      cluster: mercy-general
      user: admin-cert
      namespace: cardiology
```

### 5.2 Essential kubectl config commands

```bash
# Show full kubeconfig
kubectl config view

# Show current context
kubectl config current-context

# Switch context
kubectl config use-context cardiology-admin

# List all contexts
kubectl config get-contexts

# Set a namespace for the current context
kubectl config set-context --current --namespace=cardiology

# Add a new context
kubectl config set-context dev-context \
  --cluster=mercy-general \
  --user=dev-user \
  --namespace=development

# Use a specific kubeconfig file
KUBECONFIG=/tmp/admin.conf kubectl get nodes
```

---

## 6. Security Contexts

SecurityContexts are the hospital's locked supply rooms and badge-gated doors — they control what a running container process can actually *do* on the host OS.

They apply at two levels: `spec.securityContext` (Pod-level, affects all containers) and `spec.containers[*].securityContext` (container-level, overrides pod-level).

### 6.1 SecurityContext Fields Reference

| Field | Level | Purpose | Exam-relevance |
|---|---|---|---|
| `runAsUser` | Pod / Container | UID the container process runs as | High |
| `runAsGroup` | Pod / Container | GID the container process runs as | Medium |
| `runAsNonRoot` | Pod / Container | Reject if UID = 0 (root) | High |
| `readOnlyRootFilesystem` | Container | Mount root FS as read-only | High |
| `allowPrivilegeEscalation` | Container | Prevent `setuid`/`setgid` escalation | High |
| `privileged` | Container | Give full host capabilities (dangerous) | High (avoid) |
| `capabilities.add` | Container | Add specific Linux capabilities | Medium |
| `capabilities.drop` | Container | Drop specific Linux capabilities | High |
| `fsGroup` | Pod | GID for mounted volumes | Medium |
| `seccompProfile` | Pod / Container | Apply seccomp filter | Medium |
| `seLinuxOptions` | Pod / Container | Apply SELinux labels | Low |

### 6.2 Example — hardened pod

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: hardened-app
  namespace: cardiology
spec:
  securityContext:
    runAsUser: 1000          # run as UID 1000, not root
    runAsGroup: 3000
    fsGroup: 2000            # mounted volumes owned by GID 2000
    runAsNonRoot: true
  containers:
    - name: app
      image: ehr-app:1.0
      securityContext:
        allowPrivilegeEscalation: false
        readOnlyRootFilesystem: true
        capabilities:
          drop: ["ALL"]      # drop every capability
          add: ["NET_BIND_SERVICE"]   # re-add only what is needed
```

---

## 7. Pod Security Standards (PSS)

Pod Security Standards replace the deprecated PodSecurityPolicy (removed in Kubernetes 1.25). PSS is enforced by the **PodSecurity** admission controller, enabled via namespace labels.

### 7.1 The Three Levels

| Level | Who uses it | What it allows |
|---|---|---|
| **privileged** | Trusted platform workloads, infrastructure components | No restrictions — full host access |
| **baseline** | General application workloads | Prevents known privilege escalations; allows most workloads |
| **restricted** | Sensitive or multi-tenant workloads | Hardened policy; requires non-root, drops all caps, read-only root FS encouraged |

### 7.2 The Three Modes

| Mode | Effect |
|---|---|
| `enforce` | Policy violations cause pod to be **rejected** |
| `audit` | Policy violations are logged in audit log but pod is **allowed** |
| `warn` | Policy violations return a **warning** to the user but pod is **allowed** |

### 7.3 Applying PSS via namespace labels

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: cardiology
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/enforce-version: v1.29
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/audit-version: v1.29
    pod-security.kubernetes.io/warn: restricted
    pod-security.kubernetes.io/warn-version: v1.29
```

Or imperatively:

```bash
kubectl label namespace cardiology \
  pod-security.kubernetes.io/enforce=restricted \
  pod-security.kubernetes.io/enforce-version=v1.29
```

### 7.4 Restricted level requirements (key ones)

- `runAsNonRoot: true`
- `allowPrivilegeEscalation: false`
- `capabilities.drop: ["ALL"]`
- `seccompProfile.type: RuntimeDefault` or `Localhost`
- Volume types limited (no `hostPath`)

---

## 8. Admission Webhooks

Admission webhooks extend the API server with custom logic *after* authentication and authorization.

There are two types:

**MutatingWebhookConfiguration** — can *modify* the incoming request object (e.g., auto-inject a sidecar, set default resource limits).

**ValidatingWebhookConfiguration** — can *reject* or *allow* the request but cannot modify it (e.g., enforce naming conventions, block privileged containers).

Webhooks call an HTTPS endpoint you register. If the webhook server is unavailable and `failurePolicy: Fail` is set, the request is rejected. If `failurePolicy: Ignore`, the request is allowed through. This is a critical operational consideration.

```yaml
apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingWebhookConfiguration
metadata:
  name: deny-privileged
webhooks:
  - name: deny-privileged.example.com
    rules:
      - apiGroups: [""]
        apiVersions: ["v1"]
        operations: ["CREATE", "UPDATE"]
        resources: ["pods"]
    clientConfig:
      service:
        name: webhook-service
        namespace: webhook-system
        path: /validate-pods
      caBundle: <base64-CA>
    admissionReviewVersions: ["v1"]
    sideEffects: None
    failurePolicy: Fail
```

---

## 9. Image Security: Private Registry Authentication

Pulling images from a private registry requires a `Secret` of type `kubernetes.io/dockerconfigjson`, then referencing it in the Pod spec.

```bash
# Create the secret
kubectl create secret docker-registry hospital-registry \
  --docker-server=registry.mercy-general.internal \
  --docker-username=svc-k8s \
  --docker-password=S3cr3t! \
  --docker-email=k8s@mercy-general.internal \
  --namespace=cardiology
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-app
  namespace: cardiology
spec:
  imagePullSecrets:
    - name: hospital-registry   # reference the secret
  containers:
    - name: app
      image: registry.mercy-general.internal/ehr-app:1.0
```

Alternatively, attach the secret to a ServiceAccount so all Pods using that SA automatically inherit the pull secret:

```bash
kubectl patch serviceaccount ehr-service \
  -n cardiology \
  -p '{"imagePullSecrets": [{"name": "hospital-registry"}]}'
```

---

## 10. Audit Logging

Audit logging records every request made to the API server — who did what, when, and what the outcome was. It is configured via an **audit policy** file passed to kube-apiserver.

Audit levels per rule:
- `None` — do not log
- `Metadata` — log request metadata (user, verb, resource) but not body
- `Request` — log metadata + request body
- `RequestResponse` — log metadata + request body + response body

```yaml
# /etc/kubernetes/audit-policy.yaml
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
  - level: RequestResponse
    resources:
      - group: ""
        resources: ["secrets"]
  - level: Metadata
    resources:
      - group: ""
        resources: ["pods"]
  - level: None
    users: ["system:kube-proxy"]
```

Pass to the API server:
```
--audit-policy-file=/etc/kubernetes/audit-policy.yaml
--audit-log-path=/var/log/kubernetes/audit.log
--audit-log-maxage=30
--audit-log-maxbackup=10
--audit-log-maxsize=100
```

On exam: audit log questions typically ask you to add or modify the policy file and restart the static pod by updating `/etc/kubernetes/manifests/kube-apiserver.yaml`.

---

## Summary

| Concept | One-liner |
|---|---|
| Authentication | Proves *who* the requester is (certs, tokens, OIDC) |
| RBAC | Grants *what* verbs on *what* resources using Roles + Bindings |
| ServiceAccount | Pod identity; auto-mounted token at `/var/run/secrets/…` |
| `kubectl auth can-i` | Verify RBAC permissions instantly |
| Kubeconfig | Stores clusters, users, contexts for `kubectl` |
| SecurityContext | OS-level controls on container process (UID, caps, rootFS) |
| Pod Security Standards | Namespace-scoped policy levels: privileged / baseline / restricted |
| Admission Webhooks | Mutating (modify) and Validating (allow/deny) custom logic |
| imagePullSecrets | Credentials for private registry pulls |
| Audit Logging | Tamper-evident record of all API server requests |

---

## Next Steps

- **Quiz.md** — 26 scenario-based questions covering every topic in this module
- **Cheat-Sheet.md** — single-page reference for exam day
- **Module 7: Troubleshooting** — debugging real cluster failures

---

## Further Reading

- [Kubernetes RBAC docs](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)
- [Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/)
- [Security Contexts](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)
- [Admission Controllers](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/)
- [Audit Logging](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/)
- [Kubeconfig](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)
