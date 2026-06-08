# ✏️ Module 1 Quiz: Container Foundations

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading or cheat sheet.
> Then check your answers below. **Aim for 20/26 minimum** before moving to Module 2.
> For each wrong answer, note the concept and re-read that section.

---

## Questions

### Q1. What is the fundamental mechanism that makes containers lighter than virtual machines? *(Remember)*

A. Containers use a more efficient filesystem format  
B. Containers share the host OS kernel instead of virtualizing hardware  
C. Containers are compressed and decompressed at runtime  
D. Containers skip the bootloader stage of OS initialization  

---

### Q2. Which Linux kernel feature is responsible for *limiting* how much CPU and memory a container can consume? *(Remember)*

A. Namespaces  
B. OverlayFS  
C. cgroups (control groups)  
D. SELinux  

---

### Q3. A developer creates a Docker image. Later, three containers are started from that image. One container writes a new file inside the container. What happens to that file? *(Understand)*

A. The file appears in all three containers because they share the same image layer  
B. The file is written to the image's top layer and persists for future containers  
C. The file is written to that container's writable layer only and does not affect the image or other containers  
D. Docker rejects the write operation because images are immutable  

---

### Q4. You run `docker stop my-container` and then `docker ps`. The container does not appear. What is the most accurate statement? *(Understand)*

A. The container has been permanently deleted  
B. The container is stopped but still exists; use `docker ps -a` to see it  
C. The container is paused and will resume automatically  
D. The container has been sent to Docker Hub's archive  

---

### Q5. Which of the following commands generates a Kubernetes Pod manifest as YAML without creating the pod? *(Apply)*

A. `kubectl run nginx --image=nginx --output=yaml`  
B. `kubectl run nginx --image=nginx --dry-run=client -o yaml`  
C. `kubectl create pod nginx --image=nginx --preview`  
D. `kubectl describe pod nginx --format=yaml`  

---

### Q6. A company currently uses VMs and wants to migrate to containers. The security team is concerned about isolation. Which statement is MOST accurate? *(Analyze)*

A. Containers provide equivalent isolation to VMs because both use the same Linux security model  
B. Containers provide stronger isolation because they have no shared components with the host  
C. VMs provide stronger isolation because each has its own kernel, preventing kernel-level exploits from escaping to the host  
D. VMs provide weaker isolation because they require more code and therefore have a larger attack surface  

---

### Q7. What does the Kubernetes **kube-scheduler** do? *(Remember)*

A. Starts and stops containers on nodes  
B. Watches for new pods without a node assignment and selects the best node for them  
C. Maintains the desired number of pod replicas  
D. Routes network traffic to the correct pod  

---

### Q8. Which component is the single source of truth for all Kubernetes cluster state? *(Remember)*

A. kube-apiserver  
B. kube-controller-manager  
C. etcd  
D. kubelet  

---

### Q9. You are troubleshooting a Kubernetes cluster where new pods are stuck in `Pending` state indefinitely. Existing pods continue to run normally. Which component is MOST likely failing? *(Analyze)*

A. kubelet  
B. kube-proxy  
C. kube-scheduler  
D. etcd  

---

### Q10. Which of the following is the correct port for the Kubernetes API server? *(Remember)*

A. 8080  
B. 2379  
C. 6443  
D. 10250  

---

### Q11. You need to list all pods across every namespace in your cluster. Which command is correct? *(Apply)*

A. `kubectl get pods -n all`  
B. `kubectl get pods --all-namespaces`  
C. `kubectl get pods --namespace=*`  
D. `kubectl list pods --global`  

---

### Q12. What is the role of **namespaces** in the context of Linux containers? *(Understand)*

A. They provide a hierarchical directory structure for container filesystems  
B. They isolate what a container process can *see*, such as its own PID tree and network stack  
C. They limit how much CPU and memory a container can consume  
D. They encrypt inter-container network traffic  

---

### Q13. The **kubelet** is best described as: *(Understand)*

A. The Kubernetes API endpoint that validates and stores object definitions  
B. The node agent that watches for pod assignments and instructs the container runtime to manage containers  
C. The component that selects which node a new pod should run on  
D. The network proxy that forwards Service traffic to pod IPs  

---

### Q14. As of Kubernetes 1.24, which container runtime was removed from the supported list? *(Remember)*

A. containerd  
B. CRI-O  
C. Docker Engine (via dockershim)  
D. runc  

---

### Q15. A Kubernetes Deployment is configured with 5 replicas, but only 3 pods are currently running. Which component detects this discrepancy and takes corrective action? *(Understand)*

A. kube-scheduler  
B. kube-apiserver  
C. kubelet  
D. kube-controller-manager (ReplicaSet controller)  

---

### Q16. On a CKA exam node using containerd as the runtime, you run `docker ps` but see no containers. Meanwhile, `kubectl get pods` shows several running pods. What is the most likely explanation? *(Analyze)*

A. The pods are running on a different node  
B. The Docker daemon is managing the containers, but they are in a different namespace  
C. Docker is not the active container runtime; containerd is. Use `crictl ps` to see the running containers  
D. The pods are Running but their containers have not started yet  

---

### Q17. Which etcd port is used for **client** communication (e.g., from the API server)? *(Remember)*

A. 2380  
B. 6443  
C. 2379  
D. 10256  

---

### Q18. What does **copy-on-write (CoW)** mean in the context of Docker container filesystems? *(Understand)*

A. When a container reads a file, Docker copies it to the host filesystem for caching  
B. When a container modifies a file from an image layer, the file is first copied to the container's writable layer, and the modification is made there  
C. Docker automatically backs up any file a container writes to a named volume  
D. Multiple containers automatically sync file writes to a shared overlay layer  

---

### Q19. You want to open an interactive shell inside a running pod named `web-pod` which has a single container. Which command is correct? *(Apply)*

A. `kubectl attach -it web-pod`  
B. `kubectl exec -it web-pod -- /bin/bash`  
C. `kubectl ssh web-pod`  
D. `kubectl run -it web-pod --shell`  

---

### Q20. Which Kubernetes component implements Service routing on each node by managing iptables or IPVS rules? *(Remember)*

A. CoreDNS  
B. kube-proxy  
C. kubelet  
D. ingress-controller  

---

### Q21. A team asks you to explain the difference between `docker stop` and `docker kill`. Which answer is accurate? *(Understand)*

A. Both commands send SIGKILL immediately; `docker stop` just has a friendlier name  
B. `docker stop` sends SIGTERM to allow graceful shutdown, then SIGKILL after a timeout; `docker kill` sends SIGKILL immediately  
C. `docker stop` deletes the container; `docker kill` only pauses it  
D. `docker kill` is used only for containers with elevated privileges  

---

### Q22. You run `kubectl apply -f deployment.yaml`. Trace the correct sequence of components involved, from command to container running. *(Analyze)*

A. kubectl → kubelet → kube-scheduler → API server → etcd → container runtime  
B. kubectl → API server → etcd (store state) → kube-scheduler (assign node) → kubelet (pull spec) → container runtime (start container)  
C. kubectl → kube-scheduler → API server → kubelet → etcd → container runtime  
D. kubectl → API server → kube-controller-manager → kubelet → etcd  

---

### Q23. You want to quickly see which node each pod is running on. Which kubectl flag do you add to `kubectl get pods`? *(Apply)*

A. `-o node`  
B. `--show-nodes`  
C. `-o wide`  
D. `--format=detailed`  

---

### Q24. An application pod writes critical data to `/app/data/` inside the container. The pod crashes and is restarted. The data is gone. What was missing from the pod configuration? *(Analyze)*

A. A ConfigMap to store the data externally  
B. A PersistentVolumeClaim mounted at `/app/data/` to persist data outside the container lifecycle  
C. A higher memory limit to prevent OOM crashes  
D. A liveness probe to detect and restart the container before data loss  

---

### Q25. The **cloud-controller-manager** is an optional control plane component. When would you use it? *(Understand)*

A. In any Kubernetes cluster to improve performance of the default controller manager  
B. Only when running Kubernetes on a cloud provider (AWS, GCP, Azure) that has cloud-specific integrations, such as load balancer provisioning  
C. When using CRI-O as the container runtime instead of containerd  
D. When you need etcd to replicate across multiple availability zones  

---

### Q26. A pod is in `Pending` state and `kubectl describe pod my-pod` shows the event: `0/3 nodes are available: 3 Insufficient memory`. What is the correct interpretation and next step? *(Analyze)*

A. The pod's image failed to pull; fix the imagePullPolicy  
B. The cluster has no nodes registered; run `kubeadm join` to add nodes  
C. No node has enough free memory to satisfy the pod's resource requests; either reduce the pod's memory request or add more nodes  
D. The kube-scheduler is not running; restart it on the control plane  

---

## 🎯 Answers + Explanations

### A1. **B** — Containers share the host OS kernel instead of virtualizing hardware

Containers use Linux namespaces and cgroups to isolate processes without needing a separate kernel. VMs virtualize hardware and each runs its own full OS kernel. This kernel-sharing is what makes containers start in milliseconds and have megabyte-scale images.

---

### A2. **C** — cgroups (control groups)

cgroups limit *resource usage*: CPU, memory, disk I/O, and network bandwidth. Namespaces handle *visibility isolation* (what a process can see). OverlayFS handles filesystem layering. They are complementary, not interchangeable.

---

### A3. **C** — The file is written to that container's writable layer only

Each container has its own writable layer on top of the shared read-only image layers. Writes by one container never affect the image or other containers. This is copy-on-write: if the container writes to a file from an image layer, that file is first copied to the writable layer.

---

### A4. **B** — The container is stopped but still exists; use `docker ps -a` to see it

`docker stop` stops a container (sends SIGTERM, then SIGKILL after timeout), but does **not** delete it. `docker ps` only shows running containers. `docker ps -a` shows all containers, including stopped ones. To delete, you must run `docker rm`.

---

### A5. **B** — `kubectl run nginx --image=nginx --dry-run=client -o yaml`

`--dry-run=client` tells kubectl to generate the resource definition without sending it to the API server. Combined with `-o yaml`, this outputs the YAML manifest. This is the fastest way to scaffold manifests on the exam.

---

### A6. **C** — VMs provide stronger isolation because each has its own kernel

A container shares the host kernel. A kernel exploit could potentially escape the container and affect the host or other containers. VMs have a hypervisor boundary and separate kernels, making kernel-level escapes much harder. For high-security multi-tenant workloads, VMs (or sandbox runtimes like gVisor/Kata Containers) are preferred.

---

### A7. **B** — Watches for new pods without a node assignment and selects the best node for them

The scheduler's only job is to watch for unscheduled pods and write a node name into their spec. It does NOT start containers (that's the kubelet) and does NOT maintain replica counts (that's the controller manager).

---

### A8. **C** — etcd

etcd is the distributed key-value store that holds all cluster state: every object (pods, services, deployments, RBAC rules, etc.) is stored here. The API server is the interface to that state, but etcd is the authoritative store. Losing etcd without a backup is catastrophic.

---

### A9. **C** — kube-scheduler

When the scheduler fails, new pods cannot be assigned to nodes, so they remain in `Pending` indefinitely. Existing pods are unaffected because they are already running on nodes managed by kubelets. If the kubelet failed on a specific node, only pods on that node would be affected.

---

### A10. **C** — 6443

The kube-apiserver listens on port 6443 (HTTPS). Port 2379 is etcd client port, port 2380 is etcd peer port, port 10250 is the kubelet API port.

---

### A11. **B** — `kubectl get pods --all-namespaces`

`--all-namespaces` (or its short form `-A`) lists resources across all namespaces. `-n all` is not a valid namespace name (there is no namespace named "all"). `--namespace=*` is not valid kubectl syntax.

---

### A12. **B** — They isolate what a container process can see, such as its own PID tree and network stack

Linux namespaces isolate visibility: PID namespace (own process tree), network namespace (own network stack), mount namespace (own filesystem view), UTS namespace (own hostname). cgroups handle resource limits. OverlayFS handles the layered filesystem.

---

### A13. **B** — The node agent that watches for pod assignments and instructs the container runtime to manage containers

The kubelet runs on every worker node as a system process (not a pod). It polls the API server for pods assigned to its node and calls the container runtime (via CRI) to start, stop, and monitor containers. It also reports pod status back to the API server.

---

### A14. **C** — Docker Engine (via dockershim)

Kubernetes 1.24 removed the dockershim, which was the shim that allowed Docker Engine to be used as a CRI runtime. The standard runtime is now containerd (which Docker itself uses internally). CRI-O is also supported. `runc` is an OCI-compatible low-level runtime used by both containerd and Docker.

---

### A15. **D** — kube-controller-manager (ReplicaSet controller)

The ReplicaSet controller (inside kube-controller-manager) continuously reconciles actual pod count against desired replica count. When actual < desired, it creates new pod objects. The scheduler then assigns them to nodes. The kubelet then starts them.

---

### A16. **C** — Docker is not the active container runtime; containerd is. Use `crictl ps` to see the running containers

In Kubernetes clusters that use containerd (all modern clusters), the Docker daemon may not be running, or may not be managing the cluster's containers. `crictl` is the CLI for CRI-compatible runtimes and will show the running containers. This is a direct CKA exam trap.

---

### A17. **C** — 2379

etcd uses port 2379 for client communication (API server to etcd). Port 2380 is for peer communication between etcd cluster members. These are frequently tested in CKA troubleshooting scenarios.

---

### A18. **B** — When a container modifies a file from an image layer, the file is first copied to the container's writable layer, and the modification is made there

Copy-on-write preserves the immutability of image layers. A file in a read-only layer is not modified in place. Instead, it is copied up to the container's writable layer, and only then is the modification applied. The original image layer remains unchanged, which is why the same image can serve multiple containers.

---

### A19. **B** — `kubectl exec -it web-pod -- /bin/bash`

`kubectl exec` runs a command in a running container. `-it` allocates a TTY and keeps stdin open for interactivity. `--` separates kubectl flags from the command being run inside the container. Note: if `/bin/bash` is not available in the image, try `/bin/sh`.

---

### A20. **B** — kube-proxy

kube-proxy runs on every node as a DaemonSet. It watches the API server for Service and Endpoint objects and configures iptables (or IPVS) rules to forward traffic destined for Service ClusterIPs to the correct pod IPs. CoreDNS handles name resolution, not routing.

---

### A21. **B** — `docker stop` sends SIGTERM to allow graceful shutdown, then SIGKILL after a timeout; `docker kill` sends SIGKILL immediately

`docker stop` gives the process a chance to clean up (close connections, flush buffers). After the grace period (default 10 seconds), it sends SIGKILL. `docker kill` skips the graceful phase and sends SIGKILL (or a specified signal) immediately. Always prefer `docker stop` in production unless a container is frozen.

---

### A22. **B** — kubectl → API server → etcd → kube-scheduler → kubelet → container runtime

1. `kubectl apply` sends the manifest to the API server.  
2. API server validates, authenticates, and writes the Deployment + Pod objects to etcd.  
3. kube-scheduler watches the API server, finds the unscheduled pod, picks a node, and writes the node assignment back to the API server (stored in etcd).  
4. kubelet on the target node watches the API server, finds its new pod spec, and calls the container runtime (via CRI) to start the container.

---

### A23. **C** — `-o wide`

`kubectl get pods -o wide` adds columns for IP address, node name, and nominated node. It's the fastest way to see node assignment without running `kubectl describe`. This is a near-daily command for any Kubernetes operator.

---

### A24. **B** — A PersistentVolumeClaim mounted at `/app/data/` to persist data outside the container lifecycle

Data written to a container's writable layer is ephemeral — it is destroyed when the container (or pod) is deleted. PersistentVolumes are backed by durable storage (network disk, NFS, cloud storage) and survive pod restarts and deletions. This is covered in Module 5 (Storage).

---

### A25. **B** — Only when running Kubernetes on a cloud provider (AWS, GCP, Azure) that has cloud-specific integrations

The cloud-controller-manager separates cloud-provider logic from core Kubernetes. It handles node lifecycle (detecting deleted cloud VMs), load balancer provisioning (for `LoadBalancer` type Services), and cloud routing. It is not needed for on-premises or bare-metal clusters.

---

### A26. **C** — No node has enough free memory to satisfy the pod's resource requests; either reduce the pod's memory request or add more nodes

The event message `Insufficient memory` comes from the scheduler — it evaluated all 3 nodes and found none with enough free memory for the pod's `resources.requests.memory`. Solutions: lower the memory request in the pod spec (if appropriate), add more nodes, or free memory by removing other pods. The scheduler is clearly running (it evaluated the nodes), so option D is wrong.
