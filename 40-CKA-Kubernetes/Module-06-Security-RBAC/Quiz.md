# Module 6: Security & RBAC — Quiz

> **26 questions** covering RBAC, ServiceAccounts, SecurityContexts, Pod Security Standards, kubeconfig, admission control, and audit logging.
> Bloom tags: [Remember] [Understand] [Apply] [Analyze]

---

### Q1. [Remember]
Which three sequential gates does every request to the Kubernetes API server pass through?

A) Authentication → Admission Control → Authorization
B) Authorization → Authentication → Admission Control
C) Authentication → Authorization → Admission Control
D) Admission Control → Authentication → Authorization

---

### Q2. [Remember]
A `Role` in Kubernetes is scoped to:

A) The entire cluster, including non-namespaced resources
B) A single namespace only
C) A single node
D) A single Pod

---

### Q3. [Understand]
You create a `ClusterRole` named `pod-watcher` that allows `get`, `list`, `watch` on pods. You then create a `RoleBinding` in the `staging` namespace that binds a user to this ClusterRole. What is the effective scope of the user's permissions?

A) The user can watch pods in every namespace
B) The user can watch pods only in the `staging` namespace
C) The user gets cluster-admin equivalent access
D) The RoleBinding is invalid — you cannot bind a ClusterRole with a RoleBinding

---

### Q4. [Apply]
Which command creates a Role called `secret-reader` in namespace `ops` that allows `get` and `list` on secrets?

A) `kubectl create role secret-reader --verb=get,list --resource=secrets -n ops`
B) `kubectl create clusterrole secret-reader --verb=get,list --resource=secrets -n ops`
C) `kubectl apply role secret-reader --verbs=get,list --resources=secrets --namespace=ops`
D) `kubectl create rolebinding secret-reader --verb=get,list --resource=secrets -n ops`

---

### Q5. [Apply]
You need to verify that the ServiceAccount `monitor` in namespace `infra` can list nodes. Which command is correct?

A) `kubectl auth can-i list nodes --as=monitor --namespace=infra`
B) `kubectl auth can-i list nodes --as=system:serviceaccount:infra:monitor`
C) `kubectl auth can-i list nodes --serviceaccount=infra:monitor`
D) `kubectl rbac check list nodes --sa=infra:monitor`

---

### Q6. [Remember]
Where does Kubernetes automatically mount a ServiceAccount token inside a Pod (default behaviour)?

A) `/etc/kubernetes/sa-token`
B) `/var/run/secrets/kubernetes.io/serviceaccount/token`
C) `/run/sa/token`
D) `/etc/sa/token`

---

### Q7. [Understand]
A security review requires that Pods in the `payments` namespace must NOT have API server access. Which Pod spec field disables the automatic ServiceAccount token mount?

A) `serviceAccountName: none`
B) `automountServiceAccountToken: false`
C) `disableServiceAccount: true`
D) `serviceAccount.mount: false`

---

### Q8. [Apply]
Which command binds the ClusterRole `cluster-monitor` to the group `platform-team` across the entire cluster?

A) `kubectl create rolebinding global-monitor --clusterrole=cluster-monitor --group=platform-team`
B) `kubectl create clusterrolebinding global-monitor --clusterrole=cluster-monitor --group=platform-team`
C) `kubectl create clusterrolebinding global-monitor --role=cluster-monitor --group=platform-team`
D) `kubectl create rolebinding global-monitor --role=cluster-monitor --group=platform-team --all-namespaces`

---

### Q9. [Analyze]
A developer reports that their pod is running as root and can write to the container's filesystem freely. Which two SecurityContext fields, when set correctly, would address both issues?

A) `runAsNonRoot: true` and `readOnlyRootFilesystem: true`
B) `privileged: false` and `fsGroup: 0`
C) `runAsUser: 0` and `readOnlyRootFilesystem: false`
D) `allowPrivilegeEscalation: false` and `runAsGroup: 0`

---

### Q10. [Remember]
Which Pod Security Standards level has NO restrictions and allows full host access — intended only for trusted infrastructure components?

A) restricted
B) baseline
C) privileged
D) permissive

---

### Q11. [Apply]
You want the `production` namespace to reject any Pod that does not meet the `restricted` Pod Security Standard. Which namespace label enforces this?

A) `pod-security.kubernetes.io/audit: restricted`
B) `pod-security.kubernetes.io/warn: restricted`
C) `pod-security.kubernetes.io/enforce: restricted`
D) `pod-security.kubernetes.io/policy: restricted`

---

### Q12. [Understand]
What is the difference between the `audit` and `enforce` modes in Pod Security Standards?

A) `audit` rejects non-compliant pods; `enforce` logs them
B) `enforce` rejects non-compliant pods; `audit` logs violations but allows the pod
C) Both reject the pod, but `audit` sends an email notification
D) They are identical; both reject and log

---

### Q13. [Apply]
Which command switches your active kubeconfig context to `prod-admin`?

A) `kubectl config set-context prod-admin`
B) `kubectl config use-context prod-admin`
C) `kubectl context switch prod-admin`
D) `kubectl config current-context prod-admin`

---

### Q14. [Remember]
In a kubeconfig file, what does a `context` entry define?

A) Only the API server URL and CA certificate
B) Only the user credentials (cert/key/token)
C) A named pairing of a cluster, a user, and an optional namespace
D) The list of available namespaces

---

### Q15. [Analyze]
A cluster admin accidentally grants a `ClusterRoleBinding` for `cluster-admin` to the `default` ServiceAccount in the `default` namespace. What is the security implication?

A) No implication — ServiceAccounts cannot use ClusterRoles
B) Every Pod using the default ServiceAccount in the default namespace gets cluster-admin privileges
C) Only Pods explicitly referencing `serviceAccountName: default` are affected
D) The binding is invalid because `cluster-admin` cannot be bound to a ServiceAccount

---

### Q16. [Apply]
You need a container to bind to port 80 (a privileged port) but otherwise run with no capabilities. Which SecurityContext configuration is correct?

A) `capabilities: { add: ["ALL"] }`
B) `capabilities: { drop: ["ALL"], add: ["NET_BIND_SERVICE"] }`
C) `privileged: true`
D) `capabilities: { add: ["NET_ADMIN"] }`

---

### Q17. [Understand]
Which admission webhook type can modify the incoming request object (e.g., inject a sidecar container) before it is persisted?

A) ValidatingWebhookConfiguration
B) MutatingWebhookConfiguration
C) AdmissionController
D) NetworkWebhookConfiguration

---

### Q18. [Apply]
You need to pull an image from a private registry `registry.internal:5000`. You have created a Secret named `regcred` with the registry credentials. Which Pod spec field references this secret?

A) `spec.pullSecrets`
B) `spec.imagePullSecrets`
C) `spec.registryCredentials`
D) `spec.containers[].pullPolicy`

---

### Q19. [Remember]
Which audit policy level logs only the request metadata (user, verb, resource) without logging the request body?

A) None
B) Request
C) Metadata
D) RequestResponse

---

### Q20. [Analyze]
A webhook server is down. The `ValidatingWebhookConfiguration` has `failurePolicy: Fail`. What happens to incoming Pod creation requests?

A) Pods are created normally with a warning in the logs
B) Pod creation requests are rejected until the webhook server recovers
C) The API server falls back to the previous policy version
D) Pods are queued and retried every 30 seconds

---

### Q21. [Apply]
You need to list all permissions available to user `alice` in namespace `dev`. Which command gives you this?

A) `kubectl auth can-i --all --as=alice -n dev`
B) `kubectl auth can-i --list --as=alice -n dev`
C) `kubectl get rolebindings -n dev --user=alice`
D) `kubectl describe role alice -n dev`

---

### Q22. [Understand]
What is the purpose of the `fsGroup` field in a Pod-level SecurityContext?

A) It sets the UID for the container's main process
B) It sets the GID that owns mounted volumes, allowing the container process to write to them
C) It restricts which filesystem paths the container can access
D) It enables filesystem encryption for the Pod's volumes

---

### Q23. [Remember]
Pod Security Policies (PSP) were removed in which Kubernetes version?

A) 1.21
B) 1.23
C) 1.25
D) 1.27

---

### Q24. [Apply]
A CKA exam task asks you to create a ServiceAccount named `ci-runner` in namespace `ci`, then give it permission to create and delete Pods in that namespace. List the correct sequence of commands.

A) Create SA → create ClusterRole → create ClusterRoleBinding
B) Create SA → create Role with create/delete verbs on pods → create RoleBinding binding the role to the SA in namespace ci
C) Create SA → patch the default ServiceAccount → create RoleBinding
D) Create SA → create ClusterRoleBinding binding cluster-admin to the SA

---

### Q25. [Analyze]
A Pod spec sets `runAsNonRoot: true` at the Pod level. The container image's Dockerfile has `USER 0` (root). What happens when Kubernetes tries to start this container?

A) Kubernetes overrides the image's user and runs as UID 1000
B) The container starts normally; `runAsNonRoot` is advisory only
C) Kubernetes rejects the container with an error before it starts
D) The container starts but is immediately OOMKilled

---

### Q26. [Analyze]
Examine this RoleBinding:

```yaml
subjects:
  - kind: ServiceAccount
    name: webhook-sa
    namespace: kube-system
roleRef:
  kind: ClusterRole
  name: view
  apiGroup: rbac.authorization.k8s.io
metadata:
  namespace: monitoring
```

What permissions does the `webhook-sa` ServiceAccount have?

A) Cluster-wide view permissions on all resources
B) View permissions only within the `monitoring` namespace
C) View permissions only within the `kube-system` namespace
D) No permissions — RoleBindings cannot reference ServiceAccounts from other namespaces

---

## Answers + Explanations

### Q1 — C
**Authentication → Authorization → Admission Control.** This is the fixed pipeline. Authn establishes identity, Authz checks permissions, and Admission Control enforces policy. Requests are rejected at the first failing gate.

### Q2 — B
**A Role is namespaced.** It can only grant permissions within its own namespace. For cluster-wide or non-namespaced resources, use ClusterRole.

### Q3 — B
**The RoleBinding scopes the ClusterRole to the namespace of the binding.** Even though ClusterRole is cluster-scoped as a resource, binding it with a RoleBinding (not ClusterRoleBinding) restricts the subject to the `staging` namespace. This is one of the most common CKA traps.

### Q4 — A
Correct syntax: `kubectl create role <name> --verb=... --resource=... -n <namespace>`. Option B creates a ClusterRole. Options C and D use wrong subcommands.

### Q5 — B
ServiceAccounts must be specified as `system:serviceaccount:<namespace>:<name>`. The `--namespace` flag in option A would be interpreted as the target namespace for the permission check, not the SA's namespace.

### Q6 — B
`/var/run/secrets/kubernetes.io/serviceaccount/token` is the standard mount path. This path also contains `ca.crt` and `namespace` files.

### Q7 — B
`automountServiceAccountToken: false` prevents Kubernetes from mounting the token. This can be set at the ServiceAccount level or at the Pod spec level.

### Q8 — B
`kubectl create clusterrolebinding` creates a ClusterRoleBinding. Using `rolebinding` (option A) would create a namespace-scoped binding and require a `--namespace` flag, not granting cluster-wide access.

### Q9 — A
`runAsNonRoot: true` forces the container to run as a non-root UID. `readOnlyRootFilesystem: true` mounts the container's root filesystem read-only. Both are standard hardening controls.

### Q10 — C
**privileged** is the completely unrestricted level. It is intentionally named to signal that it should only be used for system-level privileged workloads, not general applications.

### Q11 — C
`pod-security.kubernetes.io/enforce: restricted` causes Kubernetes to **reject** non-compliant pods. `audit` and `warn` are softer modes that do not reject pods.

### Q12 — B
**enforce rejects, audit logs.** `audit` allows the pod but records a violation in the audit log. `warn` allows the pod and returns a warning to the user at the CLI. Both are useful during migration before switching to `enforce`.

### Q13 — B
`kubectl config use-context <name>` sets the active context. `set-context` creates or modifies a context definition but does not activate it.

### Q14 — C
A context is a named triple: cluster + user + optional namespace. It lets you switch between different cluster/credential combinations without editing the kubeconfig manually.

### Q15 — B
Every Pod that does not specify `serviceAccountName` uses the `default` SA. If that SA has cluster-admin via ClusterRoleBinding, every such Pod can do anything in the cluster — a critical misconfiguration. This is why the principle of least privilege matters for ServiceAccounts.

### Q16 — B
`drop: ["ALL"]` removes every Linux capability. `add: ["NET_BIND_SERVICE"]` adds back only the capability needed to bind ports below 1024. This is the correct minimal-privilege pattern.

### Q17 — B
**MutatingWebhookConfiguration** can modify (mutate) the request object. ValidatingWebhookConfiguration can only allow or deny — it cannot change the object.

### Q18 — B
`spec.imagePullSecrets` is the correct field, accepting a list of secret names. The secret must be of type `kubernetes.io/dockerconfigjson`.

### Q19 — C
**Metadata** logs the request metadata (user, verb, resource, timestamp) but not the body. `Request` adds the request body. `RequestResponse` adds both request and response bodies.

### Q20 — B
With `failurePolicy: Fail`, if the webhook server is unreachable, all matching requests are **rejected** with a 500 error. This is the safe default for security-critical webhooks but can cause outages if the webhook server is unstable.

### Q21 — B
`kubectl auth can-i --list` prints all permissions for the current user (or `--as=<user>`) in the given namespace. This is the fastest way to audit effective permissions.

### Q22 — B
`fsGroup` sets a supplemental GID applied to all mounted volumes. The kubelet chowns volume files to this GID, allowing the container process to read and write them even if the process runs as a non-root UID.

### Q23 — C
PodSecurityPolicy was deprecated in Kubernetes **1.21** and **removed in 1.25**. The replacement is Pod Security Standards (PSS) enforced via the PodSecurity admission controller.

### Q24 — B
Correct sequence: (1) `kubectl create serviceaccount ci-runner -n ci`, (2) `kubectl create role pod-manager --verb=create,delete --resource=pods -n ci`, (3) `kubectl create rolebinding ci-runner-binding --role=pod-manager --serviceaccount=ci:ci-runner -n ci`. Using ClusterRole/ClusterRoleBinding would grant excess permissions.

### Q25 — C
When `runAsNonRoot: true` is set and the container image specifies UID 0, the kubelet **rejects the container** before it starts. The error message typically reads: `container has runAsNonRoot and image will run as root`. Kubernetes does not silently override the image's user.

### Q26 — B
This is a **RoleBinding** (note `metadata.namespace: monitoring`), so even though it references a ClusterRole, the permissions are scoped to the `monitoring` namespace only. The ServiceAccount from `kube-system` receives view permissions only in `monitoring`. The subject's own namespace does not determine scope — the binding's namespace does.
