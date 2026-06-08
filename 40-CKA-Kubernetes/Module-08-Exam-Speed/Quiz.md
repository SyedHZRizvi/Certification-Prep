# Module 8 Quiz — kubectl Speed and CKA Exam Strategy

**26 questions.** Focus: practical recall of imperative commands, exam strategy, YAML patterns, and context management. Set a timer: aim to complete in 15 minutes.

---

### Q1. (Remember)
Which flag generates a YAML manifest without creating the object in the cluster?

A. `--output=yaml`
B. `--dry-run=server -o yaml`
C. `--dry-run=client -o yaml`
D. `--preview -o yaml`

---

### Q2. (Remember)
What is the correct command to set up kubectl autocomplete in bash for the current session?

A. `kubectl completion bash | source`
B. `source <(kubectl completion bash)`
C. `kubectl --autocomplete=bash`
D. `bash <(kubectl completion)`

---

### Q3. (Apply)
You want to create a pod named `web` using the `nginx` image and immediately save its YAML definition to `web.yaml` without creating it. Which command achieves this?

A. `kubectl run web --image=nginx -o yaml > web.yaml`
B. `kubectl run web --image=nginx --dry-run=client -o yaml > web.yaml`
C. `kubectl create pod web --image=nginx --dry-run=client -o yaml > web.yaml`
D. `kubectl generate pod web --image=nginx > web.yaml`

---

### Q4. (Remember)
After setting `alias k=kubectl`, which additional command ensures tab-completion works with the `k` alias?

A. `complete -o default -F __start_kubectl k`
B. `alias k=kubectl --with-completion`
C. `kubectl completion alias k`
D. `source ~/.bash_completion k`

---

### Q5. (Apply)
You need to create a deployment named `api` with image `python:3.10` and 4 replicas imperatively. Which command is correct?

A. `kubectl run api --image=python:3.10 --replicas=4`
B. `kubectl create pod api --image=python:3.10 --replicas=4`
C. `kubectl create deployment api --image=python:3.10 --replicas=4`
D. `kubectl deploy api --image=python:3.10 --count=4`

---

### Q6. (Apply)
A deployment named `frontend` exists. You need to scale it to 6 replicas. Which command is correct?

A. `kubectl set replicas deployment/frontend --count=6`
B. `kubectl scale deployment frontend --replicas=6`
C. `kubectl update deployment frontend --replicas=6`
D. `kubectl edit deployment frontend replicas=6`

---

### Q7. (Apply)
You need to update the container image of a deployment named `web`, container `nginx`, to version `nginx:1.21`. Which command achieves this?

A. `kubectl set image deployment/web container=nginx:1.21`
B. `kubectl update image deployment web nginx=nginx:1.21`
C. `kubectl set image deployment/web nginx=nginx:1.21`
D. `kubectl patch deployment web --image=nginx:1.21`

---

### Q8. (Apply)
You need to expose a pod named `app` on port 8080, creating a service named `app-svc`. Which command is correct?

A. `kubectl service app --port=8080 --name=app-svc`
B. `kubectl expose pod app --port=8080 --name=app-svc`
C. `kubectl create service app --target=app --port=8080`
D. `kubectl expose app --type=service --port=8080 --name=app-svc`

---

### Q9. (Remember)
Which command creates a ConfigMap named `db-config` with a single key-value pair `host=localhost`?

A. `kubectl create configmap db-config --key=host --value=localhost`
B. `kubectl create config db-config --from-literal=host=localhost`
C. `kubectl create configmap db-config --from-literal=host=localhost`
D. `kubectl apply configmap db-config --data=host=localhost`

---

### Q10. (Remember)
Which command creates a generic secret named `db-secret` with key `password` and value `s3cr3t`?

A. `kubectl create secret db-secret --from-literal=password=s3cr3t`
B. `kubectl create secret generic db-secret --from-literal=password=s3cr3t`
C. `kubectl create secret generic db-secret --key=password --value=s3cr3t`
D. `kubectl apply secret db-secret --data=password=s3cr3t`

---

### Q11. (Apply)
You need to add a taint `env=prod:NoSchedule` to `node01`. Which command is correct?

A. `kubectl label node node01 env=prod:NoSchedule`
B. `kubectl taint node node01 env=prod NoSchedule`
C. `kubectl taint node node01 env=prod:NoSchedule`
D. `kubectl cordon node01 --taint=env=prod:NoSchedule`

---

### Q12. (Apply)
You previously added a taint `env=prod:NoSchedule` to `node01` and want to remove it. Which command removes it?

A. `kubectl untaint node node01 env=prod:NoSchedule`
B. `kubectl taint node node01 env=prod:NoSchedule-`
C. `kubectl taint node node01 env=prod:NoSchedule --remove`
D. `kubectl label node node01 env-`

---

### Q13. (Analyze)
The CKA exam has 17 tasks in 120 minutes. A task is worth 4% and you've been working on it for 8 minutes without a solution. What is the best strategy?

A. Keep working — partial credit is always awarded
B. Skip it and move to the next task; return at the end if time allows
C. Submit what you have and ask for a hint from the proctor
D. Flag it and spend the next 10 minutes on it before moving on

---

### Q14. (Remember)
What is the most critical action to take at the START of every CKA exam task?

A. Read the task twice before touching the terminal
B. Run `kubectl get all` to understand the current cluster state
C. Switch to the correct context using `kubectl config use-context`
D. Check the cluster health with `kubectl cluster-info`

---

### Q15. (Remember)
Which command shows all available contexts and identifies the currently active one?

A. `kubectl config list-contexts`
B. `kubectl context get-all`
C. `kubectl config get-contexts`
D. `kubectl config view --contexts`

---

### Q16. (Apply)
You are on context `cluster3` and need to verify which context is currently active before starting a task. Which command gives you this quickly?

A. `kubectl config get-contexts`
B. `kubectl config current-context`
C. `kubectl cluster-info`
D. `kubectl config view | grep current`

---

### Q17. (Apply)
You need to create a ServiceAccount named `deploy-bot` in namespace `ci`. Which command achieves this in one line?

A. `kubectl create serviceaccount deploy-bot -n ci`
B. `kubectl apply serviceaccount --name=deploy-bot --namespace=ci`
C. `kubectl run serviceaccount deploy-bot -n ci`
D. `kubectl create sa ci --name=deploy-bot`

---

### Q18. (Apply)
You need to create a Role named `log-reader` in namespace `monitoring` that allows `get` and `list` on `pods` and `pods/log`. Which command generates the correct YAML scaffold?

A. `kubectl create role log-reader --verb=get,list --resource=pods,pods/log -n monitoring --dry-run=client -o yaml`
B. `kubectl create role log-reader --action=get,list --target=pods -n monitoring --dry-run=client -o yaml`
C. `kubectl create clusterrole log-reader --verb=get,list --resource=pods -n monitoring --dry-run=client -o yaml`
D. `kubectl create role log-reader --permissions=get,list --on=pods -n monitoring --dry-run=client -o yaml`

---

### Q19. (Analyze)
Which `kubectl explain` command shows you the valid fields available under `pod.spec.containers`?

A. `kubectl explain pod.spec.containers --recursive`
B. `kubectl explain pods.spec.containers`
C. `kubectl describe pods --fields=spec.containers`
D. `kubectl api-resources pod containers`

---

### Q20. (Apply)
You need to drain `node02` for maintenance, ignoring DaemonSet pods and allowing deletion of pods using emptyDir volumes. Which command is correct?

A. `kubectl drain node02`
B. `kubectl drain node02 --ignore-daemonsets`
C. `kubectl drain node02 --ignore-daemonsets --delete-emptydir-data`
D. `kubectl cordon node02 --evict-all --ignore-daemonsets`

---

### Q21. (Remember)
Which `kubectl run` flag allows you to specify the command that the container runs?

A. `--exec`
B. `--cmd`
C. `--entrypoint`
D. `--command`

---

### Q22. (Apply)
You want to quickly check whether the ServiceAccount `my-sa` in namespace `default` has permission to list deployments. Which command achieves this?

A. `kubectl get permissions --for=serviceaccount:default:my-sa --resource=deployments`
B. `kubectl auth can-i list deployments --as=system:serviceaccount:default:my-sa`
C. `kubectl check permissions --sa=my-sa --action=list:deployments`
D. `kubectl auth check --subject=sa:my-sa --verb=list --resource=deployments`

---

### Q23. (Remember)
In a CKA exam task, the task shows "13%". What does this percentage indicate?

A. The probability of this task type appearing on a real exam
B. The percentage of time you should budget for this task
C. The point weight of this task toward your total exam score
D. The difficulty rating of the task relative to the full exam

---

### Q24. (Apply)
You need to get the IP addresses and node placement of all pods in namespace `kube-system` in a single command. Which option provides this?

A. `kubectl get pods -n kube-system -o json`
B. `kubectl get pods -n kube-system --show-all`
C. `kubectl get pods -n kube-system -o wide`
D. `kubectl describe pods -n kube-system`

---

### Q25. (Analyze)
A pod is stuck in `Pending` state. Which command gives you the most useful immediate diagnostic information, including scheduling events?

A. `kubectl logs <pod-name>`
B. `kubectl get pod <pod-name> -o yaml`
C. `kubectl describe pod <pod-name>`
D. `kubectl get events --field-selector involvedObject.name=<pod-name>`

---

### Q26. (Evaluate)
You are 5 minutes into a 13% task and have successfully created the required Deployment but realize you missed the required resource limits. You have 4 minutes left before hitting your time budget. What is the best course of action?

A. Abandon the task and move to the next one to save time
B. Edit the deployment to add resource limits — partial completion is worse than abandoning
C. Add the resource limits via `kubectl edit` or `kubectl set resources` — a correctly configured object is worth full marks
D. Delete the deployment and start over from scratch with the correct YAML

---

## Answers + Explanations

### Q1 — C
`--dry-run=client -o yaml` is the standard pattern. `--dry-run=client` prevents the API server from persisting the object; `-o yaml` formats the output. `--dry-run=server` also works but contacts the API server for validation without persisting — fine on exam, but client is more commonly used for YAML generation.

### Q2 — B
`source <(kubectl completion bash)` runs the completion script output in the current shell. The other options either have the syntax backwards or use flags that don't exist.

### Q3 — B
`kubectl run` is the correct command for standalone pods. `kubectl create pod` is not a valid subcommand. The `--dry-run=client -o yaml > web.yaml` portion correctly generates and redirects the YAML.

### Q4 — A
`complete -o default -F __start_kubectl k` wires the kubectl completion function to the `k` alias. Without this, tab-complete fires for the `k` command but uses the default shell completion, not kubectl's.

### Q5 — C
`kubectl create deployment` is the correct imperative command for deployments. `kubectl run` with `--replicas` is deprecated for deployments. Only `create deployment` supports `--replicas`.

### Q6 — B
`kubectl scale deployment <name> --replicas=<n>` is the correct syntax. `set replicas` and `update` are not valid kubectl subcommands for this purpose.

### Q7 — C
The syntax is `kubectl set image deployment/<deploy-name> <container-name>=<new-image>`. The container name is `nginx` (as defined in the deployment spec), not the word "container".

### Q8 — B
`kubectl expose pod <name>` is the correct form. The `expose` subcommand takes the resource type and name as positional arguments, then `--port` and `--name`.

### Q9 — C
`kubectl create configmap <name> --from-literal=key=value` is the correct syntax. `--key/--value` are not valid flags. `kubectl create config` is not a valid subcommand.

### Q10 — B
`kubectl create secret generic <name> --from-literal=key=value` is correct. The `generic` subtype is required — omitting it causes an error. TLS and docker-registry secrets have their own subtypes.

### Q11 — C
The taint syntax is `kubectl taint node <node> key=value:Effect`. The colon separates the key=value pair from the effect. Labels use a different syntax without effects.

### Q12 — B
The trailing dash (`-`) is the removal syntax in kubectl. `kubectl taint node node01 env=prod:NoSchedule-` removes the taint that was previously set. This is a commonly missed trap on the exam.

### Q13 — B
A 4% task that has consumed 8 minutes (already over its time budget) should be skipped. Spending more time on a low-weight task while higher-weight tasks remain unstarted is the most common time management failure. Mark it, note what you attempted, move on.

### Q14 — C
Switching context is the single most critical action at the start of each task. Every task specifies a target cluster. Creating objects in the wrong cluster earns zero marks even if the object is perfectly configured.

### Q15 — C
`kubectl config get-contexts` lists all contexts with the active one marked by an asterisk. `list-contexts` is not a valid subcommand.

### Q16 — B
`kubectl config current-context` outputs just the active context name — fast and unambiguous. `get-contexts` also works but produces more output. On exam, `current-context` is faster to read.

### Q17 — A
`kubectl create serviceaccount <name> -n <namespace>` is correct. `sa` is also a valid abbreviation: `kubectl create sa deploy-bot -n ci`.

### Q18 — A
`--verb` specifies the allowed actions, `--resource` specifies the Kubernetes resource types. Multiple resources are comma-separated. `pods/log` is a sub-resource that must be listed separately to allow log access.

### Q19 — A
`kubectl explain pod.spec.containers` is the correct form for navigating the spec hierarchy. The `--recursive` flag shows all nested fields. Note: `pods` (plural) also works in `explain`.

### Q20 — C
Both flags are required: `--ignore-daemonsets` prevents the drain from failing on DaemonSet-managed pods (which cannot be evicted), and `--delete-emptydir-data` allows eviction of pods using emptyDir volumes (which lose their data). Omitting either flag typically causes the drain to fail.

### Q21 — D
`--command` is the flag, and it must be followed by `--` to separate kubectl flags from the container command. Example: `kubectl run busybox --image=busybox --command -- sleep 3600`.

### Q22 — B
`kubectl auth can-i <verb> <resource> --as=<identity>` is the correct pattern. ServiceAccount identity is expressed as `system:serviceaccount:<namespace>:<name>`. This is a critical exam pattern for verifying RBAC configurations.

### Q23 — C
The percentage shown on each CKA task is its point weight toward the total exam score. A 13% task contributes 13 points (out of 100) to your score. This is your priority signal for time allocation.

### Q24 — C
`-o wide` adds the NODE and IP columns to `kubectl get pods` output. It is the fastest way to see both pod IPs and node assignments without parsing JSON or YAML.

### Q25 — C
`kubectl describe pod` includes the Events section at the bottom, which shows scheduling failures (e.g., "0/3 nodes available: 3 Insufficient memory"), image pull errors, and probe failures. Logs only work for running containers; YAML output requires manual parsing; events by field-selector also works but `describe` is faster.

### Q26 — C
Add the missing resource limits. Partial completion (Deployment created, limits missing) earns partial credit on some tasks. A fully correct object earns full credit. Deleting and starting over wastes the 5 minutes already spent on correct work. The fastest path is `kubectl edit deployment <name>` or `kubectl set resources deployment <name> --limits=cpu=...,memory=...` to add the missing configuration.
