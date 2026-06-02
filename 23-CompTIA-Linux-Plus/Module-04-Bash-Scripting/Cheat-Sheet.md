# 📋 Module 4 Cheat Sheet: Bash Scripting

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🛡️ Defensive Script Header

```bash
#!/bin/bash
set -euo pipefail
IFS=$'\n\t'
```

- `-e` exit on any error · `-u` exit on undef var · `pipefail` pipe failures bubble · `IFS` safer splitting

---

## 📦 Variables & Quoting

```bash
NAME="Alice"           # no spaces around =
echo "$NAME"           # double quotes: expand vars
echo '$NAME'           # single quotes: literal
echo $NAME             # unquoted: word-split (USUALLY A BUG)
```

| Form | Expansion | Splitting |
|------|-----------|-----------|
| `'literal'` | NO | NO |
| `"$var"` | YES | NO |
| `$var` | YES | YES (danger) |

### Parameter expansion

| Form | Meaning |
|------|---------|
| `${VAR:-X}` | use X if VAR unset/empty |
| `${VAR:=X}` | also assign |
| `${VAR:?msg}` | exit with msg if unset/empty |
| `${VAR:+Y}` | Y if VAR is set |
| `${VAR##*/}` | basename (longest left strip) |
| `${VAR%/*}` | dirname (shortest right strip) |
| `${VAR%.log}` | strip `.log` suffix |
| `${VAR/old/new}` | replace first |
| `${VAR//old/new}` | replace all |

---

## 🧮 Special Variables

| Var | Means |
|-----|-------|
| `$0` | script name |
| `$1`...`$9` | positional args |
| `"$@"` | all args as separate words (USE THIS) |
| `"$*"` | all args as one string |
| `$#` | arg count |
| `$?` | last exit code |
| `$$` | this PID |
| `$!` | last bg PID |

---

## 🔀 Conditionals

```bash
# Modern bash conditional
if [[ -f /etc/passwd ]]; then ...; fi
if [[ "$EMAIL" =~ @ ]]; then ...; fi          # regex inside [[ ]]
if (( $# < 2 )); then ...; fi                # arithmetic

# File tests
-e exists · -f file · -d dir · -r read · -w write · -x exec · -s non-empty · -L symlink

# String tests
-z empty · -n non-empty · = · != · =~ (regex, [[ ]] only)

# Numeric (inside [[ ]] or with (( ))):
-eq -ne -lt -le -gt -ge
```

```bash
case "$1" in
  start)   ... ;;
  stop)    ... ;;
  *)       echo "usage" ; exit 1 ;;
esac
```

---

## 🔁 Loops

```bash
# for-in list
for x in apple banana cherry; do echo "$x"; done

# for-in glob
for f in *.log; do gzip "$f"; done

# C-style
for ((i=0; i<10; i++)); do echo "$i"; done

# Reading lines from a file (CANONICAL)
while IFS= read -r line; do
    process "$line"
done < input.txt

# Until condition
until ping -c1 host >/dev/null; do sleep 1; done
```

🚨 **NEVER:** `for x in $(cat file)` — word-splits on whitespace.

---

## ↪️ Redirection

| Op | Meaning |
|----|---------|
| `>` | stdout (overwrite) |
| `>>` | stdout (append) |
| `2>` | stderr (overwrite) |
| `2>>` | stderr (append) |
| `2>&1` | stderr → wherever stdout goes |
| `&>` | both stdout & stderr |
| `<<EOF ... EOF` | here-doc |
| `<<<` | here-string |

```bash
cmd > file 2>&1        # both to file (order MATTERS)
cmd &> /dev/null       # discard both
cat <<EOF > /etc/x
multi
line
EOF
```

---

## 🔢 Exit Codes

| Code | Means |
|------|-------|
| 0 | success |
| 1 | general failure |
| 2 | misuse |
| 126 | not executable |
| 127 | command not found |
| 130 | Ctrl-C (SIGINT) |
| 143 | SIGTERM |

```bash
cmd && echo "ok" || echo "fail"     # short-circuit
[[ -z "$1" ]] && { echo "missing"; exit 1; }
trap 'rm -f /tmp/lock' EXIT          # cleanup on any exit
```

---

## 🧩 Functions

```bash
greet() {
    local name="$1"
    echo "Hello, ${name:-stranger}!"
}
greet Alice
```

- `local` scopes to the function — ALWAYS use it
- `return N` sets exit code (0–255)
- Data "returns" via stdout: `result=$(myfunc arg)`

---

## 🔧 Pipeline Toolkit

### grep
```bash
grep -i  ignore case        grep -v  invert
grep -n  line numbers       grep -r  recursive
grep -c  count              grep -q  quiet
grep -E  extended regex     grep -F  fixed strings
grep -A3 / -B3 / -C3        # context lines
```

### sed
```bash
sed 's/old/new/' file              # first per line
sed 's/old/new/g' file             # all per line
sed -i 's/old/new/g' file          # IN-PLACE
sed -i.bak 's/old/new/g' file      # in-place + backup
sed -n '10,20p' file               # print lines 10-20
sed '/^#/d' file                   # delete comments
```

### awk
```bash
awk '{ print $1 }' file            # first field
awk -F: '{ print $1 }' /etc/passwd # colon-separated, 1st
awk '{ print $NF }' file           # last field
awk 'NR>1' file.csv                # skip header
awk '{ sum+=$3 } END { print sum }'  # column sum
awk '$3 > 100' file                # filter
```

### Others
```bash
cut -d: -f1 /etc/passwd            # 1st field
sort | uniq -c | sort -rn          # top-N pattern
tr '[:lower:]' '[:upper:]'         # uppercase
tr -d '0-9'                        # delete digits
wc -l file                         # line count
head -n 20 / tail -n 20            # first / last 20
tail -f /var/log/syslog            # follow
```

---

## ⏰ Scheduling

### cron
```
m h dom mon dow  command
0 3 * * *        /usr/local/bin/backup.sh
*/15 * * * *     /usr/local/bin/check.sh
0 22 * * 1-5     /usr/local/bin/report.sh
@reboot          /usr/local/bin/once-at-boot.sh
```

Locations:

- `crontab -e` per-user
- `/etc/crontab` system (extra USER field)
- `/etc/cron.d/*` package drop-ins
- `/etc/cron.{hourly,daily,weekly,monthly}/` scripts

🚨 cron PATH is minimal — use absolute paths.

### at (one-shot)
```bash
at 03:00 tomorrow <<EOF
/usr/local/bin/once.sh
EOF
atq            # list pending
atrm 3         # remove job 3
```

### systemd timer
```ini
# /etc/systemd/system/backup.timer
[Timer]
OnCalendar=daily
Persistent=true             # run missed jobs at boot

[Install]
WantedBy=timers.target
```

```bash
systemctl daemon-reload
systemctl enable --now backup.timer
systemctl list-timers
```

---

## 🏆 Exam Power Phrases

When you see these in answers, they're often **right**:

- ✅ "Add `set -euo pipefail`"
- ✅ "Quote variables: `\"$var\"`"
- ✅ "Use `while IFS= read -r line`"
- ✅ "Use absolute paths in cron scripts"
- ✅ "Use systemd timer with `Persistent=true`"

When you see these, they're often **wrong**:

- ❌ "`for x in $(cat file)`"
- ❌ "`[ ]` and `[[ ]]` are identical"
- ❌ "`2>&1 > file`"
- ❌ "Functions don't need `local`"
- ❌ "cron has the full user PATH"

---

## 🗓️ Key Facts To Memorize Cold

- Shebang `#!/bin/bash` on line 1; `chmod +x script.sh`
- `set -euo pipefail` makes scripts fail loudly
- `"$@"` not `"$*"` for forwarding args
- `[[ ]]` for bash; supports `=~` regex; safer than `[ ]`
- `>` overwrites · `>>` appends · `2>&1` merges streams
- `sed -i` for in-place; `awk -F` for field separator
- cron: `m h dom mon dow` (Mon=1 ... Sun=0 or 7)
- systemd timer needs both `.timer` AND `.service` files
- Exit 0 = success; 127 = not found; 126 = not executable

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. The 3-flag defensive `set` header? ___
2. Difference between `"$@"` and `"$*"`? ___
3. Correct way to read a file line-by-line in bash? ___
4. cron format for "every weekday at 02:30"? ___
5. systemd timer directive for "run missed jobs at boot"? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 5: Users, Groups & sudo](../Module-05-Users-Groups/Reading.md)
