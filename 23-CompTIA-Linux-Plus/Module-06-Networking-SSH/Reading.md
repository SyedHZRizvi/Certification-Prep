# Module 6: Networking, SSH & Firewalls 🌐

> **Why this module matters:** Domain 4 (Troubleshooting) is 28% of the exam second-biggest and *most* of those questions live here. A server you can't ping, a service you can't reach, a key-based SSH login that prompts for a password, a firewall rule that's in the wrong zone. Linux+ also tests both the modern (`ip`, `ss`, `nftables`, `firewalld`) AND the legacy (`ifconfig`, `netstat`, `iptables`) tooling. You need both. The exam will deliberately mix them.

> **Prerequisites for this module.** You should be comfortable with:
> - Module 1 (systemd), NetworkManager and sshd are systemd services
> - Module 4 (bash), most network troubleshooting is shell pipelines
> - Basic TCP/IP concepts: IP addresses, ports, TCP vs UDP, DNS

---

## 🍕 A Story: The SSH Key That Refused to Work

Meet Diego. He's onboarding a new developer, Priya. He follows the playbook:

1. Priya generates a key on her laptop: `ssh-keygen -t ed25519`.
2. Diego adds Priya's public key to `~/.ssh/authorized_keys` on the bastion host.
3. Priya runs `ssh priya@bastion.corp` and is *still* prompted for a password.

He spends 25 minutes checking the obvious: firewall (port 22 open), sshd_config (`PubkeyAuthentication yes`), `~/.ssh/authorized_keys` exists with the right key. He even SSHs in himself, works fine. Why is just Priya prompted?

He runs:

```bash
ls -ld /home/priya /home/priya/.ssh /home/priya/.ssh/authorized_keys
```

```
drwxr-xr-x 5 priya priya 4096 May 26 09:14 /home/priya
drwxrwxr-x 2 priya priya 4096 May 26 09:14 /home/priya/.ssh
-rw-r--r-- 1 priya priya  395 May 26 09:14 /home/priya/.ssh/authorized_keys
```

There it is. `/home/priya/.ssh` is mode `775` (group-writable) and `authorized_keys` is `644` (also group-readable). OpenSSH's `StrictModes yes` (the default) refuses to use a key if `~/.ssh` is group-writable or `authorized_keys` is world-readable, the security model assumes the keyring is private to the owner.

He fixes it:

```bash
chmod 700 /home/priya/.ssh
chmod 600 /home/priya/.ssh/authorized_keys
chown -R priya:priya /home/priya/.ssh
```

`/var/log/auth.log` would have told the story sooner, there was a line:
```
Authentication refused: bad ownership or modes for directory /home/priya/.ssh
```

This module makes the whole chain reflexive: where to look in logs, how to verify connectivity at each TCP/IP layer, and what every common modern command does.

---

## 🧱 The Layer Model (Linux+ Edition)

Linux+ doesn't quiz the OSI model explicitly, but every troubleshooting PBQ follows it:

| Layer | What you check | Tool |
|-------|----------------|------|
| **L1 Physical** | NIC up? cable connected? | `ip link`, `ethtool eth0` |
| **L2 Data link** | Got an L2 address? ARP working? | `ip neigh`, `arp` |
| **L3 Network** | IP assigned? routes OK? gateway reachable? | `ip addr`, `ip route`, `ping`, `traceroute` |
| **L4 Transport** | Port open? handshake complete? | `ss`, `nc`, `telnet`, `nmap` |
| **L7 Application** | Service responds with expected protocol? | `curl`, `dig`, `ssh -v` |

🎯 **Exam pattern:** When a PBQ asks "where's the problem?", walk the layers. The answer is almost always the first layer where verification fails.

---

## 🌐 The Modern Network Toolkit (iproute2)

### `ip`, the one command for L2/L3

`ip` from the iproute2 suite replaces `ifconfig`, `route`, and `arp`. **MEMORIZE these subcommands.**

```bash
ip addr show                              # all interfaces + IPs (alias: ip a)
ip addr show dev eth0                     # one interface
ip addr add 192.168.1.50/24 dev eth0      # add an IP (NOT persistent)
ip addr del 192.168.1.50/24 dev eth0      # remove

ip link show                              # interfaces, link state (alias: ip l)
ip link set eth0 up                       # bring interface up
ip link set eth0 down                     # bring it down
ip link set eth0 mtu 9000                 # jumbo frames

ip route show                             # routing table (alias: ip r)
ip route add 10.0.0.0/24 via 192.168.1.1  # add a route
ip route del 10.0.0.0/24                  # remove
ip route add default via 192.168.1.1      # default gateway
ip route get 1.1.1.1                      # which route would carry this dest?

ip neigh show                             # ARP table (alias: ip n)
ip neigh flush dev eth0                   # clear ARP for an interface

ip -s link                                # interface counters (rx/tx/errors)
ip -4 a                                   # only IPv4
ip -6 a                                   # only IPv6
ip -br a                                  # BRIEF one-line-per-interface
```

🚨 **Trap on the exam:** `ifconfig` may not be installed by default on modern distros (it's in `net-tools` package). Modern questions use `ip` exclusively. Old questions might still use `ifconfig`, know both syntaxes.

| Old (net-tools) | New (iproute2) |
|-----------------|----------------|
| `ifconfig` | `ip addr` / `ip link` |
| `ifconfig eth0 up` | `ip link set eth0 up` |
| `ifconfig eth0 192.168.1.5` | `ip addr add 192.168.1.5 dev eth0` |
| `route -n` | `ip route` |
| `arp -a` | `ip neigh` |
| `netstat -tulpn` | `ss -tulpn` |
| `netstat -rn` | `ip route` |

### `ss`, socket statistics (replaces netstat)

```bash
ss -tulpn                                 # TCP+UDP, listening, processes, numeric
ss -t -a                                  # all TCP (listening + established)
ss -tn                                    # established TCP only, numeric
ss state established '( dport = :22 )'    # filter expression
ss -lnp sport :80                         # who is listening on :80?
ss -i                                     # internal TCP info (cwnd, retransmits)
ss -s                                     # socket summary stats
```

**Flag mnemonic:** `tulpn` = TCP + UDP + Listening + Processes + Numeric (no DNS lookup, no port→name).

---

## 🗺️ DNS, Hosts, and Name Resolution

Resolution order is set in `/etc/nsswitch.conf`:

```
hosts:    files dns
```

This means: check `/etc/hosts` first, then DNS.

### `/etc/hosts`

```
127.0.0.1    localhost
::1          localhost
192.168.1.10 webserver.corp webserver
```

Static host-to-IP mappings; checked before DNS.

### `/etc/resolv.conf`

```
nameserver 1.1.1.1
nameserver 8.8.8.8
search corp.local
options timeout:2 attempts:3
```

🚨 **Trap on the exam:** On systemd-resolved or NetworkManager systems, `/etc/resolv.conf` is often a symlink to `/run/systemd/resolve/stub-resolv.conf`, your edits will be overwritten. Configure DNS via `nmcli` or systemd-resolved configs.

### DNS query tools

```bash
dig example.com                           # full DNS query, verbose
dig +short example.com                    # just the answer
dig @1.1.1.1 example.com                  # query specific server
dig MX example.com                        # query mail records
dig -x 1.1.1.1                            # reverse (PTR) lookup
nslookup example.com                      # older alternative
host example.com                          # simpler output
getent hosts example.com                  # respects nsswitch (hosts THEN dns)
resolvectl query example.com              # systemd-resolved native
```

🎯 **Exam pattern:** *"`dig example.com` works but `ping example.com` fails."* → Probably an nsswitch problem or /etc/hosts override. Use `getent hosts` to see the actual resolved IP.

---

## 🎛️ NetworkManager & nmcli

Most modern distros (RHEL/Fedora, Ubuntu desktop, Ubuntu server 18.04+) use NetworkManager to manage interfaces. The CLI is `nmcli`.

```bash
nmcli device status                       # interface states (managed?)
nmcli connection show                     # all saved connections
nmcli connection show "Wired connection 1"  # details for one
nmcli device wifi list                    # scan for WiFi
nmcli device wifi connect "SSID" password "secret"

# Add a static IPv4 connection
nmcli connection add con-name lan ifname eth0 type ethernet \
      ipv4.addresses 192.168.1.50/24 \
      ipv4.gateway 192.168.1.1 \
      ipv4.dns "1.1.1.1 8.8.8.8" \
      ipv4.method manual

nmcli connection up lan                   # activate
nmcli connection mod lan ipv4.dns "9.9.9.9"   # modify
nmcli connection down lan
nmcli connection delete lan
```

Connection profiles live in `/etc/NetworkManager/system-connections/<name>.nmconnection` (mode 600, root-owned).

🎯 **Exam pattern:** *"Set a persistent static IP on eth0 on an Ubuntu Server."* → Use `nmcli` (or netplan on older Ubuntu Server). Don't edit `/etc/network/interfaces` on modern Ubuntu unless you've explicitly opted out of NetworkManager.

### Ubuntu Server's netplan (alternative)

Ubuntu Server uses **netplan** by default. Config in `/etc/netplan/*.yaml`:

```yaml
network:
  version: 2
  ethernets:
    eth0:
      addresses: [192.168.1.50/24]
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses: [1.1.1.1, 8.8.8.8]
```

Apply: `sudo netplan apply`. Netplan generates configs for the underlying renderer (NetworkManager on desktop, systemd-networkd on server by default).

---

## 🔌 OpenSSH, Server (sshd)

### `/etc/ssh/sshd_config` essentials

```
Port 22                                    # listen port
ListenAddress 0.0.0.0                      # bind to all v4 interfaces

PermitRootLogin no                         # block direct root SSH
PasswordAuthentication no                  # force key-based auth
PubkeyAuthentication yes
PermitEmptyPasswords no

# Restrict who can SSH
AllowUsers alice bob
AllowGroups developers admins
# (DenyUsers / DenyGroups also available)

MaxAuthTries 3                             # failed attempts per connection
ClientAliveInterval 300                    # keepalive every 5 min
ClientAliveCountMax 2                      # disconnect after 2 missed

X11Forwarding no                           # disable GUI forwarding
PrintMotd no                               # MOTD via PAM, not sshd
UsePAM yes                                 # delegate to /etc/pam.d/sshd
```

After editing: `sshd -t` (test config syntax) then `systemctl reload sshd`.

🚨 **Trap on the exam:** `sshd -t` returns silently on success. ALWAYS test before reload, a typo can lock you out.

### Per-user / per-host overrides

`Match` blocks scope settings:

```
# Force-command for a build-bot account
Match User buildbot
    ForceCommand /usr/local/bin/run-build
    PermitTTY no
    X11Forwarding no
```

### `authorized_keys` permissions (the Priya bug)

| Path | Required mode | Owner |
|------|---------------|-------|
| `~/.ssh/` | `700` | user |
| `~/.ssh/authorized_keys` | `600` | user |
| `~/.ssh/known_hosts` | `644` | user |
| `~/.ssh/id_*` (private) | `600` | user |
| `~/.ssh/id_*.pub` | `644` | user |

`StrictModes yes` (the default) rejects keys if permissions are loose.

---

## 🔑 OpenSSH, Client

### Key generation

```bash
ssh-keygen -t ed25519 -C "alice@laptop"   # modern, preferred
ssh-keygen -t rsa -b 4096                 # legacy compatibility
ssh-keygen -t ecdsa -b 521                # NIST curves (less trusted)

# Specify file (good for per-host keys)
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_github
```

### Copy public key to server

```bash
ssh-copy-id alice@server                  # easiest
# OR manually:
cat ~/.ssh/id_ed25519.pub | ssh alice@server 'mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys'
```

### `~/.ssh/config` (the productivity multiplier)

```
Host bastion
    HostName bastion.corp.com
    User diego
    Port 22
    IdentityFile ~/.ssh/id_ed25519_corp

Host *.corp.com
    User diego
    ProxyJump bastion
    ServerAliveInterval 60
```

Now `ssh internal.corp.com` automatically:

1. Connects to `bastion.corp.com:22` as `diego`
2. From there, connects to `internal.corp.com` as `diego` with the corp key

### Port forwarding

```bash
# Local: my port 8080 reaches db:5432 via jump host
ssh -L 8080:db.internal:5432 jump.corp

# Remote: jump's port 9000 reaches my port 22
ssh -R 9000:localhost:22 jump.corp

# Dynamic SOCKS proxy on port 1080
ssh -D 1080 jump.corp
```

🚨 **Trap on the exam:** Memorize the directions. **L**ocal listens **L**ocally; **R**emote listens **R**emotely. The forwarding spec is always `<listen-port>:<destination-host>:<destination-port>`.

### `ssh-agent` & key forwarding

```bash
eval "$(ssh-agent)"                       # start agent in current shell
ssh-add ~/.ssh/id_ed25519                 # cache key
ssh-add -l                                # list cached keys

ssh -A bastion                            # forward agent (don't put keys on bastion)
```

🚨 **Agent forwarding is risky**, root on the bastion can use your agent socket. Prefer `ProxyJump` over `-A` for jump-host workflows.

---

## 🔥 Firewalls

Linux has had three generations of firewall tooling. **You need all three** for the exam.

### Generation 1: `iptables` (legacy)

iptables organizes rules into **tables**, each with **chains**, each with **rules**.

| Table | Purpose |
|-------|---------|
| `filter` | Allow/deny packets (default; what you usually mean by "firewall") |
| `nat` | Network Address Translation (DNAT, SNAT, MASQUERADE) |
| `mangle` | Modify packet headers (TTL, TOS) |
| `raw` | Bypass connection tracking |

| Chain | Built-in | When it runs |
|-------|----------|--------------|
| `INPUT` | filter | Packets destined for THIS host |
| `OUTPUT` | filter | Packets generated BY this host |
| `FORWARD` | filter | Packets routed THROUGH this host |
| `PREROUTING` | nat | Before routing decision |
| `POSTROUTING` | nat | After routing decision |

```bash
iptables -L -v -n                         # list all filter rules, verbose, numeric
iptables -A INPUT -p tcp --dport 22 -j ACCEPT     # allow SSH
iptables -A INPUT -p tcp --dport 80 -j ACCEPT     # allow HTTP
iptables -A INPUT -i lo -j ACCEPT                 # allow loopback
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -P INPUT DROP                            # default drop policy

iptables-save > /etc/iptables/rules.v4           # persist (depends on distro)
```

### Generation 2: `nftables` (modern replacement)

`nft` is a single unified command replacing iptables, ip6tables, arptables, ebtables.

```bash
nft list ruleset                          # show everything
nft add table inet filter
nft add chain inet filter input '{ type filter hook input priority 0; policy drop; }'
nft add rule inet filter input iif lo accept
nft add rule inet filter input ct state established,related accept
nft add rule inet filter input tcp dport 22 accept

# Persist (RHEL 8+)
nft list ruleset > /etc/nftables.conf
systemctl enable --now nftables
```

🎯 **Exam pattern:** *"On a modern RHEL 9 system, which tool replaces iptables in the kernel?"* → `nftables`. iptables is still available as a compatibility wrapper but the kernel-level packet filter is nftables.

### Generation 3: `firewalld` (high-level on top of nftables)

firewalld is a daemon that manages zone-based firewall rules. It runs on top of nftables (or iptables on older systems).

**Concept: Zones.** Each interface belongs to one zone. Each zone has its own rules.

| Common zones | Trust level |
|--------------|-------------|
| `drop` | Discard all incoming; no replies |
| `block` | Reject all incoming with icmp-host-prohibited |
| `public` | Default for untrusted nets; only selected services allowed |
| `external` | NAT-masquerade outgoing; for routers |
| `dmz` | Limited public services |
| `work` / `home` / `internal` | Increasingly trusted |
| `trusted` | Accept all |

```bash
firewall-cmd --state                                            # is firewalld running?
firewall-cmd --get-default-zone                                 # default zone
firewall-cmd --list-all                                         # rules in default zone
firewall-cmd --list-all --zone=public                           # specific zone
firewall-cmd --get-zones                                        # all zones
firewall-cmd --get-active-zones                                 # zones with active interfaces

# Open a port
firewall-cmd --zone=public --add-port=8080/tcp                  # RUNTIME only
firewall-cmd --zone=public --add-port=8080/tcp --permanent      # PERSIST
firewall-cmd --reload                                           # apply --permanent changes

# Add a service (name from /usr/lib/firewalld/services/)
firewall-cmd --zone=public --add-service=https --permanent
firewall-cmd --reload

# Change zone of an interface
firewall-cmd --zone=internal --change-interface=eth1 --permanent

# Rich rules
firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="10.0.0.0/24" port port="22" protocol="tcp" accept' --permanent
```

🚨 **Trap on the exam:** Without `--permanent`, changes are RUNTIME ONLY and disappear after `firewall-cmd --reload` or service restart. The `--permanent` flag writes to disk; `--reload` then applies them.

### `ufw`, Ubuntu's friendly firewall

Ubuntu's frontend (on top of iptables/nftables):

```bash
ufw status verbose
ufw allow 22/tcp
ufw allow from 10.0.0.0/24 to any port 22
ufw deny 23
ufw enable                                # turn it on
ufw default deny incoming
ufw reload
```

ufw is simpler than firewalld but less powerful. The exam may show either.

---

## 🛠️ Network Troubleshooting Tools

```bash
ping -c4 server                           # basic L3 reachability
ping6 ::1                                 # IPv6 ping
traceroute server                         # path discovery
traceroute -n server                      # numeric (skip DNS)
mtr server                                # combined ping+traceroute (continuous)
tracepath server                          # like traceroute, no root needed

dig +short example.com                    # DNS
host example.com
nslookup example.com

nc -vz host 443                           # is TCP port 443 reachable?
nc -lvnp 8080                             # netcat listener on 8080
nmap -p 22,80,443 server                  # port scan
nmap -sV server                           # service version detection

tcpdump -i eth0 'port 22'                 # capture packets
tcpdump -i any -w capture.pcap 'host 1.1.1.1'   # write to file for Wireshark

ss -tulpn | grep :22                      # what's listening on 22?
lsof -i :22                               # what process owns port 22?

iperf3 -c server                          # bandwidth test (server runs -s)

curl -v http://example.com                # verbose HTTP
curl -I https://example.com               # headers only (HEAD)
wget https://example.com/file.tar.gz      # download
```

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A user reports that `https://api.internal.corp:8443` is unreachable from their workstation, but the API team says the service is up. You SSH to the workstation and run `curl -v https://api.internal.corp:8443/`. It hangs on `Trying 10.0.5.20...`. Walk the troubleshooting steps in order.

**Walkthrough:**

1. **DNS resolution worked** (we got an IP). Confirm: `getent hosts api.internal.corp` → returns `10.0.5.20`. ✅
2. **L3 reachability:** `ping -c2 10.0.5.20`. If this fails:

   - Routing issue → `ip route get 10.0.5.20` shows the route. Wrong gateway? `ip neigh` shows ARP. Missing route → `ip route add ...`.
   - Network segmentation → talk to network team.
3. **L4 reachability:** `nc -vz 10.0.5.20 8443`. If this fails but ping works:

   - **Server-side firewall** (firewalld/iptables on the API host) blocking 8443.
   - **Network firewall** between you and the API blocking 8443.
   - **Server-side service not listening on the expected port**, verify on the API host: `ss -lnp sport :8443`.
4. **TLS handshake:** `openssl s_client -connect 10.0.5.20:8443 -servername api.internal.corp`. If it errors:

   - Cert mismatch / expired / untrusted CA.
   - SNI mismatch (server returns wrong cert).
5. **Application response:** `curl -v https://10.0.5.20:8443 --resolve api.internal.corp:8443:10.0.5.20`. If TLS works but the app returns 500/404, talk to the app team.

The PBQ might show the output of step 2 (ping fails) and ask "what's the next command?" Answer: `ip route get 10.0.5.20` or `traceroute 10.0.5.20`.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "`ifconfig` is the standard" | NO, it's legacy. Modern systems use `ip` from iproute2. ifconfig may not even be installed. |
| "`netstat -an` is the standard" | NO, replaced by `ss`. Same flags work (`-tulpn`). |
| "Editing /etc/resolv.conf persists" | On systemd-resolved/NetworkManager systems, the file is regenerated. Use nmcli or systemd-resolved configs. |
| "firewalld changes are permanent by default" | NO, without `--permanent` they're runtime only. |
| "iptables rules persist across reboots" | NO, must be saved to `/etc/iptables/rules.v4` (Debian) or via `iptables-services` (RHEL). |
| "Public-key auth requires copying private key to server" | NO, you copy the PUBLIC key (`*.pub`). Private key stays on client. |
| "SSH keys grant root access" | The key is added to a specific user's `authorized_keys`. Root access depends on what *that user* can do. |
| "`-L` and `-R` are interchangeable" | NO, `-L` listens locally; `-R` listens remotely. Memorize the direction. |
| "Default sshd port is 22 and can't be changed" | Can be changed in sshd_config. SELinux on RHEL may need `semanage port -a -t ssh_port_t -p tcp 2222`. |
| "ping uses TCP" | ping uses ICMP. Some networks block ICMP. Use `nc -vz` for TCP-port reachability. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **iproute2** | Modern Linux networking toolkit (`ip`, `ss`, `tc`) |
| **`ip addr` / `ip link` / `ip route` / `ip neigh`** | Show IPs / interfaces / routes / ARP |
| **`ss -tulpn`** | TCP+UDP listening sockets with processes, numeric |
| **NetworkManager** | Modern Linux network daemon (`nmcli`, `nmtui`) |
| **netplan** | Ubuntu Server YAML config generator |
| **`/etc/hosts`** | Static name-to-IP map (checked before DNS) |
| **`/etc/resolv.conf`** | DNS resolver config (often auto-managed) |
| **`/etc/nsswitch.conf`** | Name resolution order (files, dns, ldap, ...) |
| **systemd-resolved** | Modern stub resolver |
| **OpenSSH sshd** | The SSH server daemon |
| **`StrictModes`** | sshd default, rejects key auth if perms are loose |
| **`authorized_keys`** | List of public keys allowed to log in as this user |
| **`-L` / `-R` / `-D`** | SSH local / remote / dynamic (SOCKS) port forwarding |
| **`ProxyJump` / `-J`** | Chain through a bastion safely |
| **iptables / nftables / firewalld / ufw** | The four firewall layers you might encounter |
| **firewalld zones** | drop / block / public / external / dmz / work / home / internal / trusted |
| **`--permanent` (firewalld)** | Save to disk; needs `--reload` to apply |

### Acronyms cheat-row (Module 6)
| Acronym | Meaning |
|---------|---------|
| SSH | Secure Shell |
| SSHD | SSH Daemon |
| TCP / UDP | Transmission Control / User Datagram Protocol |
| ICMP | Internet Control Message Protocol (ping) |
| ARP | Address Resolution Protocol (L2/L3 mapping) |
| DNS | Domain Name System |
| DHCP | Dynamic Host Configuration Protocol |
| NAT | Network Address Translation |
| MTU | Maximum Transmission Unit |
| MAC | Media Access Control (L2 address) |
| SOCKS | SOCKets Secure (proxy protocol) |
| TLS | Transport Layer Security |
| CA | Certificate Authority |
| SNI | Server Name Indication |
| RFC | Request For Comments (IETF specs) |

---

## 📊 Case Study, The 2021 Facebook BGP Outage

**Situation.** On 4 October 2021 at 15:39 UTC, Facebook (then including Instagram, WhatsApp, and Oculus) vanished from the global Internet for ~7 hours. A scheduled BGP (Border Gateway Protocol) audit on Facebook's backbone routers ran a routine command that withdrew the BGP routes for Facebook's authoritative DNS prefixes. Without DNS, all of Facebook's domains (facebook.com, fbcdn.net, whatsapp.net) became unresolvable. Worse, the BGP withdrawal also took out the routes used by Facebook's internal tools, the badge-reader systems that opened data-center doors, and the SSH paths engineers used to remotely fix things.

**Decision.** Engineers had to physically travel to remote data centers (some hours away). Even on-site, the broken door-access systems initially refused them entry. The fix was to manually restore BGP announcements from console-attached terminals. By 22:30 UTC, services were back.

**Outcome.** Facebook estimated $60M+ in lost ad revenue. Internet history's largest single-vendor DNS-level outage. Many users couldn't even reset their passwords (those auth flows depended on email/SMS which depended on... Facebook's auth servers, which were DNS-unreachable). Industry-wide lesson: out-of-band management matters, and BGP-level isolation can be catastrophic.

**Lesson for the exam / for practitioners.** XK0-005 doesn't test BGP, but it DOES test the underlying principles:

1. **Always preserve out-of-band access.** If your firewall lockout takes out SSH, you need a console route. (`Match Address 192.168.99.0/24 PermitRootLogin yes` for a single management subnet is one pattern.)
2. **DNS is critical infrastructure, protect it.** Multiple resolvers, multiple subnets, cached zones, hosts-file fallbacks for *your own* infra.
3. **Always test firewall rules with a path that doesn't lose you access.** `firewall-cmd --reload` after `--permanent` change can be the unrecoverable moment. Use `firewall-cmd --runtime-to-permanent` to elevate runtime-tested rules.
4. **Plan for the recovery scenario**, what's your console access? Is your bastion in the affected zone?

These all surface in PBQs as "you locked yourself out, what's the right way?" scenarios.

**Discussion (Socratic).**
- **Q1:** Design a 3-tier firewall change-management process that would have prevented the Facebook-scale outage analog at a smaller company (a single Linux host with `firewall-cmd`). What's the cost of the safety net vs the cost of locking yourself out?
- **Q2:** Should production hosts have direct console access (IPMI, BMC, KVM) as a hardware requirement? What are the security trade-offs?
- **Q3:** A common pattern is to make SSH listen on a non-standard port (e.g., 2222) to reduce noise from drive-by scans. Argue for and against this. Does it help security or just security theater?

---

## ✅ Module 6 Summary

You now know:

- 🌐 The **layer model** for systematic troubleshooting
- 🧱 **iproute2** (`ip`, `ss`) and how it replaces ifconfig/netstat/route/arp
- 🗺️ **DNS resolution** chain (hosts → resolv.conf → nsswitch) and tools (dig, host, getent)
- 🎛️ **NetworkManager / nmcli** for persistent IP config; **netplan** on Ubuntu Server
- 🔌 **OpenSSH sshd**, config hardening (PermitRootLogin no, PasswordAuthentication no)
- 🔑 **OpenSSH client**, keygen, copy-id, `~/.ssh/config`, port forwarding (`-L`, `-R`, `-D`, `-J`)
- 🔥 **The four firewall worlds**: iptables, nftables, firewalld (zones, --permanent), ufw
- 🛠️ The full **troubleshooting toolkit** (ping, traceroute, mtr, nc, nmap, tcpdump, curl)

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 7, Kernel Modules, Devices & LVM](../Module-07-Kernel-Modules/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 7](../Module-07-Kernel-Modules/Reading.md) covers the kernel-level NIC drivers; [Module 8](../Module-08-Security/Reading.md) deepens SSH hardening, fail2ban, and SELinux's effect on networking.
> - Practice: Practice Exam 2 has ~10 questions drawing from this module; the Final Mock has ~14.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 [iproute2 home page](https://wiki.linuxfoundation.org/networking/iproute2), the canonical project page.
- 📄 [OpenSSH project sshd_config(5)](https://man.openbsd.org/sshd_config.5) the man page is the only authoritative reference.
- 📄 [nftables wiki](https://wiki.nftables.org/wiki-nftables/index.php/Main_Page), the upstream documentation.
- 📄 [firewalld documentation](https://firewalld.org/documentation/), official zones/services/rules reference.
- 📄 [systemd-resolved man page (resolved.conf(5))](https://www.freedesktop.org/software/systemd/man/resolved.conf.html).
- 📄 [Cloudflare's BGP/DNS post-mortem of the Facebook outage (5 Oct 2021)](https://blog.cloudflare.com/october-2021-facebook-outage/).

**Practitioner / exam:**
- 📖 Sander van Vugt, *CompTIA Linux+ XK0-005 Cert Guide* (Pearson, 2023), Chapters 13, 15, 18.
- 📖 W. Richard Stevens & Stephen Rago, *Advanced Programming in the UNIX Environment* (Addison-Wesley, 3rd ed., 2013), for the truly curious about sockets.
- 📖 Michael W. Lucas, *SSH Mastery* (2nd ed., 2018), the most readable SSH book.
- 📖 Steve Suehring, *Linux Firewalls* (No Starch Press, 4th ed., 2015), covers iptables to modern nftables transition.
