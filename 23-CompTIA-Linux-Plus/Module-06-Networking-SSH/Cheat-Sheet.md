# 📋 Module 6 Cheat Sheet: Networking, SSH & Firewalls

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌐 iproute2 vs Legacy

| Old (net-tools) | Modern (iproute2) |
|-----------------|-------------------|
| `ifconfig` | `ip addr` / `ip link` |
| `route -n` | `ip route` |
| `arp -a` | `ip neigh` |
| `netstat -tulpn` | `ss -tulpn` |
| `netstat -rn` | `ip route` |

```bash
ip a                          # all IPs (alias for ip addr show)
ip l                          # links
ip r                          # routes
ip n                          # ARP table
ip -br a                      # brief one-liner
ip route get 1.1.1.1          # which route would carry?
ip link set eth0 up           # bring NIC up
ip addr add 10.0.0.5/24 dev eth0
```

---

## 📡 ss (replaces netstat)

```bash
ss -tulpn                     # TCP+UDP, listening, processes, numeric
ss -t -a                      # all TCP
ss -tn state established      # established only
ss -lnp sport :22             # who's listening on 22?
ss -s                         # summary stats
```

---

## 🗺️ DNS / Name Resolution

| File | Use |
|------|-----|
| `/etc/hosts` | Static host-to-IP mappings (checked first) |
| `/etc/resolv.conf` | DNS resolver config (often auto-managed) |
| `/etc/nsswitch.conf` | Resolution order: `hosts: files dns` |

```bash
dig +short example.com
dig @1.1.1.1 example.com MX
dig -x 1.1.1.1                  # reverse PTR
host example.com
getent hosts example.com        # respects nsswitch (full chain)
resolvectl query example.com    # systemd-resolved
```

---

## 🎛️ NetworkManager / nmcli

```bash
nmcli device status
nmcli connection show
nmcli connection add con-name lan ifname eth0 type ethernet \
  ipv4.addresses 192.168.1.50/24 \
  ipv4.gateway 192.168.1.1 \
  ipv4.dns "1.1.1.1 8.8.8.8" \
  ipv4.method manual
nmcli connection up lan
nmcli connection mod lan ipv4.dns "9.9.9.9"
nmcli connection delete lan
```

Profiles in `/etc/NetworkManager/system-connections/*.nmconnection`.

---

## 🔌 sshd (server), `/etc/ssh/sshd_config`

```
Port 22
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AllowGroups sshusers
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2
StrictModes yes
UsePAM yes
```

```bash
sshd -t                       # syntax check (silent on success)
systemctl reload sshd         # apply (DON'T restart while logged in)
```

`Match User <name>` and `Match Group <name>` for per-user/group overrides.

---

## 🔑 SSH client

### Permissions (sshd refuses key auth if wrong)
| Path | Mode |
|------|------|
| `~/.ssh/` | 700 |
| `~/.ssh/authorized_keys` | 600 |
| `~/.ssh/id_*` (private) | 600 |
| `~/.ssh/id_*.pub` | 644 |
| `~/.ssh/known_hosts` | 644 |

### Key + copy
```bash
ssh-keygen -t ed25519 -C "alice@laptop"
ssh-copy-id alice@server
ssh-add ~/.ssh/id_ed25519
ssh-add -l
```

### `~/.ssh/config`
```
Host bastion
    HostName bastion.corp
    User diego
    IdentityFile ~/.ssh/id_corp

Host *.corp
    User diego
    ProxyJump bastion
```

### Port forwarding (memorize the direction)
```bash
ssh -L 8080:db:5432 jump       # MY 8080 → reaches db:5432 via jump (LOCAL listens)
ssh -R 9000:localhost:22 jump  # JUMP's 9000 → reaches MY :22 (REMOTE listens)
ssh -D 1080 jump               # SOCKS proxy on MY 1080
ssh -J bastion target          # ProxyJump shorthand
```

---

## 🔥 Firewall Tools

### firewalld (RHEL family)
```bash
firewall-cmd --state
firewall-cmd --get-default-zone
firewall-cmd --get-active-zones
firewall-cmd --list-all                                # default zone
firewall-cmd --list-all --zone=public

# Open port (PERSIST = two-step)
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd --reload

# Service by name
firewall-cmd --zone=public --add-service=https --permanent
firewall-cmd --reload

# Change interface zone
firewall-cmd --zone=internal --change-interface=eth1 --permanent

# Rich rule
firewall-cmd --zone=public --add-rich-rule='rule family=ipv4 source address=10.0.0.0/24 port port=22 protocol=tcp accept' --permanent
```

🚨 Without `--permanent` = runtime only (lost on `--reload`).

### Zones (trust levels, ↑ trust)
`drop` < `block` < `public` < `external` < `dmz` < `work` < `home` < `internal` < `trusted`

### nftables (modern kernel-level)
```bash
nft list ruleset
nft add table inet filter
nft add chain inet filter input '{ type filter hook input priority 0; policy drop; }'
nft add rule inet filter input ct state established,related accept
nft add rule inet filter input tcp dport 22 accept

# Persist
nft list ruleset > /etc/nftables.conf
systemctl enable --now nftables
```

### iptables (legacy, still tested)
```bash
iptables -L -v -n
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -P INPUT DROP
iptables-save > /etc/iptables/rules.v4
```

### ufw (Ubuntu)
```bash
ufw status
ufw allow 22/tcp
ufw allow from 10.0.0.0/24 to any port 22
ufw default deny incoming
ufw enable
```

---

## 🛠️ Troubleshooting Tools

```bash
ping -c4 host                  # L3 reachability
ping6 ::1
traceroute -n host
mtr host                       # combined ping+traceroute

nc -vz host 443                # TCP port reachable?
nc -lvnp 8080                  # listener
nmap -p 22,80,443 host
nmap -sV host                  # service versions

tcpdump -i eth0 'port 22'
tcpdump -i any -w cap.pcap 'host 1.1.1.1'

ss -tulpn | grep :22
lsof -i :22

iperf3 -c server               # bandwidth (server runs -s)

curl -v http://example.com
curl -I https://example.com    # headers only
wget URL
```

---

## 🏆 Exam Power Phrases

When you see these in answers, they're often **right**:

- ✅ "Use `ip addr show` not `ifconfig`"
- ✅ "Check `/var/log/auth.log` (Debian) or `/var/log/secure` (RHEL)"
- ✅ "Set `~/.ssh` to 700 and `authorized_keys` to 600"
- ✅ "Use `--permanent` then `--reload` for firewalld"
- ✅ "Test sshd config with `sshd -t` before reload"

When you see these, they're often **wrong**:

- ❌ "Edit `/etc/resolv.conf` directly to persist DNS"
- ❌ "`ssh -R` forwards a local port to a remote service"
- ❌ "iptables saves automatically across reboots"
- ❌ "`StrictModes no` is best practice"
- ❌ "ping uses TCP"

---

## 🗓️ Key Facts To Memorize Cold

- `ip a`, `ip r`, `ss -tulpn` are the modern trio
- sshd config: `/etc/ssh/sshd_config`; client config: `~/.ssh/config`
- 700 for `~/.ssh`, 600 for keys
- `-L` = LOCAL listens; `-R` = REMOTE listens; `-D` = SOCKS
- firewalld zones; `--permanent` then `--reload`
- nftables is the kernel-level filter on modern RHEL/Debian
- DNS chain: nsswitch.conf → /etc/hosts → /etc/resolv.conf
- `sshd -t` before `systemctl reload sshd`

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Three `ip` subcommands and what they replace? ___
2. What perms must `~/.ssh` and `~/.ssh/authorized_keys` have? ___
3. SSH forwarding: `-L` vs `-R` direction in plain English? ___
4. firewalld 2-step pattern to open port 8080 in `public`? ___
5. Where does Linux log SSH auth events on RHEL? On Debian? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 7: Kernel Modules, Devices & LVM](../Module-07-Kernel-Modules/Reading.md)
