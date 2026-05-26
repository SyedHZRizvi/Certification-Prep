# Module 4: Bash Scripting & Automation 💻

> **Why this module matters:** Domain 3 (Scripting, Containers, and Automation) is 19% of the exam — about 17 questions. Half of those are bash. You will be asked to *read* a script and identify what it does, to *fix* a broken script, and to compose small one-liners with `sed`, `awk`, `grep`, and pipes. PBQs will give you the full text of a 25-line script and ask you to spot the bug. This module makes that reflexive.

> **Prerequisites for this module.** You should be comfortable with:
> - Module 1 (systemd) — services and timers are how scripts get scheduled
> - Module 2 (filesystem permissions) — your scripts must be executable
> - Running `chmod +x script.sh` and `./script.sh` from a shell

---

## 🍕 A Story: The Cron Job That Almost Took Down the Logs

Meet Marcus. He inherits a Linux server with a cron job that's supposed to gzip old logs nightly:

```bash
#!/bin/bash
cd /var/log
find . -name "*.log" -mtime +7 -exec gzip {} \;
```

Cute. Innocuous. Until the day the server's hostname changes and a stale NFS mount drops, so `cd /var/log` silently fails. The script keeps running — in `$HOME`, which is `/root`. `find . -name "*.log"` matches *every* `.log` in the root user's recursive home (some left there by another admin's experiment). And it gzips them. Including a 12 GB SQL dump someone had saved as `dump.log` because they didn't know any better.

The next morning Marcus opens a ticket queue full of "where is my data" notes. The fix takes 3 hours of `gunzip`-ing and validating files. The root cause is two lines of bash hygiene the original author skipped:

1. `set -euo pipefail` at the top → `cd` failure would have exited the script immediately.
2. `cd /var/log || exit 1` as the explicit guard → defense in depth.

This module will make these reflexes second nature. The exam tests them constantly — `set -e`, quoting `"$@"`, the difference between `$var` and `"$var"`, exit-code checking, here-docs. Get them right and bash will be a tool you trust.

---

## 🥾 The Shebang & Permissions

Every script starts with:

```bash
#!/bin/bash
```

The `#!` (shebang or hashbang) tells the kernel which interpreter to invoke. Without it, the script runs in whatever shell launched it (usually fine, but not portable). Always include the shebang.

Then make it executable:

```bash
chmod +x deploy.sh
./deploy.sh
```

If `./deploy.sh` fails with "Permission denied," check `ls -l deploy.sh` for the execute bit.

🚨 **Trap on the exam:** `bash deploy.sh` (calling the interpreter explicitly) ignores the executable bit AND ignores the shebang. It runs as bash regardless. Useful when debugging, dangerous if your script secretly relies on `#!/usr/bin/env python3`.

---

## 📦 Variables, Quoting, and Substitution

### Defining variables

```bash
NAME="Marcus"           # no spaces around =
COUNT=42
PATH_TO_LOG="/var/log/app.log"
```

**Important rules:**
- No spaces around `=` — `NAME = "x"` is a *command* invocation, not assignment
- Quote strings that contain spaces or expand variables
- Convention: UPPER_SNAKE_CASE for constants, lower_snake_case for locals

### Substitution

```bash
echo "$NAME"            # parameter expansion → Marcus
echo "${NAME}"          # same; braces required if followed by alnum
echo "${NAME}_test"     # → Marcus_test (without braces would seek $NAME_test)
echo "$(date +%F)"      # command substitution → 2025-05-26
echo "`date +%F`"       # legacy backtick form, avoid
```

### Quoting differences (THE most-tested bash fact)

| Form | Variable expansion? | Command sub? | Word splitting? |
|------|--------------------|-----|-----------------|
| `'single'` | NO (literal) | NO | NO |
| `"double"` | YES | YES | NO (single arg) |
| `unquoted` | YES | YES | YES (splits on IFS!) |

```bash
NAME="Alice Bob"
echo "$NAME"             # 'Alice Bob' (one arg)
echo $NAME               # 'Alice' 'Bob' (two args — bug surface!)
echo '$NAME'             # literal: $NAME
```

🎯 **Exam pattern:** *"This script breaks when a file name contains spaces. Why?"* → unquoted `$var` expansion split on whitespace. Fix: always quote `"$var"` and `"$@"`.

### Default values & substitutions

```bash
echo "${NAME:-Anonymous}"        # use Anonymous if NAME unset
echo "${NAME:=Anonymous}"        # like :- but also ASSIGNS to NAME
echo "${NAME:?error msg}"        # print error and exit if NAME unset
echo "${NAME:+set}"              # only expand if NAME IS set
echo "${PATH_TO_LOG%.log}"       # remove shortest suffix matching .log
echo "${PATH_TO_LOG##*/}"        # basename — remove longest prefix up to /
echo "${PATH_TO_LOG%/*}"         # dirname — remove shortest suffix from /
echo "${NAME/Alice/Bob}"         # replace first Alice with Bob
echo "${NAME//Alice/Bob}"        # replace ALL Alices
```

---

## 🧮 Special Variables

| Variable | Meaning |
|----------|---------|
| `$0` | Script name (`./deploy.sh`) |
| `$1`, `$2`, ... | Positional arguments |
| `$#` | Count of positional args |
| `"$@"` | All args as separate quoted words (USE THIS) |
| `"$*"` | All args as one string (joined by IFS first char) |
| `$$` | PID of the current shell/script |
| `$!` | PID of last background command |
| `$?` | Exit code of the last command |
| `$-` | Current shell options |
| `$_` | Last argument of previous command |

🚨 **Trap on the exam:** `"$@"` and `"$*"` look interchangeable but behave very differently when args contain spaces. Default to `"$@"`. Only use `"$*"` when you specifically want one concatenated string.

---

## 🔀 Conditionals: if / elif / else / case

### `if` with `[[ ... ]]` (modern bash)

```bash
if [[ -f /etc/passwd ]]; then
    echo "passwd exists"
elif [[ -d /etc ]]; then
    echo "/etc is a dir"
else
    echo "neither"
fi
```

### Test operators

| File tests | Numeric tests | String tests |
|------------|---------------|--------------|
| `-e file` exists | `-eq` equals | `-z str` empty |
| `-f file` regular file | `-ne` not equal | `-n str` non-empty |
| `-d file` directory | `-lt` less than | `=` (or `==`) equal |
| `-r file` readable | `-le` ≤ | `!=` not equal |
| `-w file` writable | `-gt` greater | `<`, `>` lexicographic (in `[[ ]]`) |
| `-x file` executable | `-ge` ≥ | `=~` regex match (in `[[ ]]`) |
| `-s file` non-empty | | |
| `-L file` symbolic link | | |

```bash
# File checks
[[ -r "$config" ]] || { echo "Cannot read $config"; exit 1; }

# Numeric
if (( $# < 2 )); then
    echo "Usage: $0 <src> <dst>"
    exit 1
fi

# String
if [[ -z "$NAME" ]]; then
    echo "NAME is empty"
fi

# Regex (only inside [[ ]])
if [[ "$EMAIL" =~ ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$ ]]; then
    echo "valid email"
fi
```

🚨 **Trap on the exam:** `[ ... ]` (single brackets) is POSIX `test` — pattern matching limited, regex unsupported, less safe with empty vars. `[[ ... ]]` (double brackets) is a bash builtin with safer parsing, regex, and `&&`/`||` inside. Prefer `[[ ]]` for new bash; `[ ]` for POSIX-portable scripts (use `#!/bin/sh`).

### `case`

```bash
case "$1" in
    start)
        systemctl start myapp
        ;;
    stop)
        systemctl stop myapp
        ;;
    restart|reload)
        systemctl reload myapp || systemctl restart myapp
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|reload}"
        exit 1
        ;;
esac
```

`case` is the right tool when you have one variable to dispatch on with several patterns.

---

## 🔁 Loops

### `for`

```bash
# Iterate over a list
for fruit in apple banana cherry; do
    echo "$fruit"
done

# Iterate over files
for log in /var/log/*.log; do
    gzip "$log"
done

# C-style
for ((i = 0; i < 10; i++)); do
    echo "$i"
done

# Iterate over args
for arg in "$@"; do
    echo "got $arg"
done
```

### `while` / `until`

```bash
# Read a file line by line (the CANONICAL pattern)
while IFS= read -r line; do
    echo "line: $line"
done < /etc/hostname

# Until — opposite of while
until ping -c1 server.example.com >/dev/null 2>&1; do
    echo "waiting for server..."
    sleep 5
done

# Loop until condition
count=0
while (( count < 5 )); do
    echo "$count"
    ((count++))
done
```

🚨 **Trap on the exam:** Reading a file with `for line in $(cat file)` is broken — it word-splits on whitespace, mangling lines with spaces. The correct pattern is `while IFS= read -r line; do ... done < file`.

---

## ↪️ Redirection & Pipes

| Operator | Meaning |
|----------|---------|
| `>` | Redirect stdout (overwrite) |
| `>>` | Redirect stdout (append) |
| `<` | Redirect stdin from file |
| `2>` | Redirect stderr |
| `2>>` | Append stderr |
| `2>&1` | Redirect stderr to wherever stdout is currently going |
| `&>` | Redirect both stdout AND stderr (bash; not POSIX) |
| `<<EOF` | Here-doc — feed a literal block to stdin |
| `<<<` | Here-string — feed a single string to stdin |
| `\|` | Pipe stdout of left → stdin of right |
| `\|&` | Pipe stdout AND stderr |

```bash
# Both stdout and stderr to a file
command > /tmp/log 2>&1

# Same in bash shorthand
command &> /tmp/log

# Append both
command >> /tmp/log 2>&1

# Discard everything
command > /dev/null 2>&1

# Here-doc: paste a multiline string into a command
cat <<EOF > /etc/myapp/config.ini
[server]
port = 8080
debug = false
EOF

# Here-string
grep "pattern" <<< "$INPUT"
```

🚨 **Trap on the exam:** Order matters in redirection. `command 2>&1 > file` redirects stderr to *the original stdout (the terminal)*, then redirects stdout to file. You probably wanted `command > file 2>&1`.

---

## 🔢 Exit Codes

Every command returns an integer exit code: 0 = success, non-zero = error.

```bash
ls /tmp
echo $?              # 0

ls /nonexistent
echo $?              # 2

# Use exit codes in conditionals
if grep -q "ERROR" /var/log/app.log; then
    echo "Found errors"
fi

# Exit with a specific code
[[ -z "$1" ]] && { echo "missing arg"; exit 1; }

# Short-circuit operators
mkdir -p /tmp/work && cd /tmp/work || exit 1
```

| Code | Meaning (convention) |
|------|----------------------|
| 0 | Success |
| 1 | General failure |
| 2 | Misuse of shell builtins / bad args |
| 126 | Command not executable |
| 127 | Command not found |
| 128 + N | Killed by signal N (e.g. 130 = SIGINT/Ctrl-C, 143 = SIGTERM) |

---

## 🛡️ The Defensive-Script Header

Put this at the top of any serious script:

```bash
#!/bin/bash
set -euo pipefail
IFS=$'\n\t'              # safer word splitting
```

- `set -e` — exit on any command failure
- `set -u` — exit on use of undefined variable
- `set -o pipefail` — make a pipeline fail if any command in it fails (not just the last)
- `IFS=$'\n\t'` — split on newlines and tabs only (not spaces), reducing accidental word splits

🎯 **Exam pattern:** *"This script's pipeline `grep ERROR log.txt | wc -l` exits 0 even when `grep` fails. Why?"* → Without `pipefail`, the pipeline returns only the last command's exit code (`wc` always succeeds).

---

## 🧩 Functions

```bash
# Defining
greet() {
    local name="$1"
    echo "Hello, ${name:-stranger}!"
}

# Calling
greet "Marcus"
greet                # uses default "stranger"

# Return value via stdout
get_uid() {
    id -u "$1"
}
uid=$(get_uid alice)

# Return via exit code
is_root() {
    [[ "$EUID" -eq 0 ]]
}
if is_root; then echo "running as root"; fi
```

- `local` keyword scopes a variable to the function (CRITICAL)
- Functions don't take typed args; positional `$1`, `$2`, ... inside the function
- `return N` sets exit code 0–255; `echo` is how you "return" data

---

## 🔧 The Pipeline Toolkit: grep, sed, awk, cut, sort, uniq, tr

### grep — find lines matching a pattern

```bash
grep ERROR /var/log/app.log              # match lines
grep -i "error" log.txt                  # case-insensitive
grep -v "DEBUG" log.txt                  # INVERT (lines NOT matching)
grep -n "TODO" *.py                      # show line numbers
grep -r "API_KEY" /etc                   # recursive
grep -c "ERROR" log.txt                  # count matches
grep -E "ERROR|FATAL" log.txt            # extended regex (alt: egrep)
grep -F "literal[.]text" log.txt         # fixed-string (alt: fgrep)
grep -A 3 "ERROR" log.txt                # 3 lines AFTER match
grep -B 3 "ERROR" log.txt                # 3 lines BEFORE
grep -C 3 "ERROR" log.txt                # 3 lines CONTEXT around
grep -q "ERROR" log.txt && echo "errors!"  # quiet, exit-code only
```

### sed — stream editor

```bash
sed 's/old/new/' file.txt                # substitute FIRST match per line
sed 's/old/new/g' file.txt               # substitute ALL on each line
sed -i 's/old/new/g' file.txt            # IN-PLACE edit
sed -i.bak 's/old/new/g' file.txt        # in-place with .bak backup
sed -n '5p' file.txt                     # print only line 5
sed -n '10,20p' file.txt                 # print lines 10-20
sed '/^#/d' config.conf                  # DELETE comment lines
sed -e 's/foo/bar/' -e 's/baz/qux/'      # multiple expressions
```

### awk — field-based processor

```bash
awk '{ print $1 }' file.txt              # first whitespace-field
awk -F: '{ print $1 }' /etc/passwd       # first field, : separator
awk '{ print $NF }' file.txt             # LAST field (NF = number of fields)
awk 'NR > 1 { print }' file.csv          # skip line 1 (the header)
awk '{ sum += $3 } END { print sum }' f  # sum column 3
awk '$3 > 100 { print $1, $3 }' f        # filter by column value
awk 'BEGIN { OFS="," } { print $1, $2 }' # set output field separator
```

🎯 **Exam pattern:** *"Print only the home directories from `/etc/passwd`."* → `awk -F: '{ print $6 }' /etc/passwd`. (`$6` because the 6th field is the home dir.)

### cut — slice columns

```bash
cut -d: -f1 /etc/passwd                  # first field
cut -d: -f1,3 /etc/passwd                # fields 1 and 3
cut -c1-10 file.txt                      # characters 1-10
```

### sort & uniq

```bash
sort file.txt                            # alphabetical
sort -n file.txt                         # numeric
sort -r file.txt                         # reverse
sort -k2 file.txt                        # sort by column 2
sort -t: -k3 -n /etc/passwd              # by UID (col 3, : separator, numeric)
sort | uniq                              # remove ADJACENT duplicates
sort | uniq -c                           # count occurrences
sort | uniq -d                           # only show duplicates
```

🚨 **Trap on the exam:** `uniq` only removes *adjacent* duplicates. You almost always pipe `sort | uniq`.

### tr — transliterate

```bash
echo "Hello" | tr 'a-z' 'A-Z'            # → HELLO
echo "ab1cd2" | tr -d '0-9'              # delete digits → abcd
cat file.txt | tr ' ' '\n'               # spaces → newlines
```

---

## ⏰ Scheduling: cron, at, systemd timers

### cron — the classic scheduler

Each user has a crontab (`crontab -e` to edit). The format:

```
# m  h  dom mon dow  command
   0  3  *   *   *   /usr/local/bin/backup.sh
   */15 *  *   *   *   /usr/local/bin/healthcheck.sh
   0 22  *   *   1-5  /usr/local/bin/daily-report.sh
```

Five time fields:
1. **minute** (0-59)
2. **hour** (0-23)
3. **day of month** (1-31)
4. **month** (1-12)
5. **day of week** (0-7; 0 and 7 = Sunday)

Special strings: `@reboot`, `@hourly`, `@daily`, `@weekly`, `@monthly`, `@yearly`.

System-wide cron locations:
- `/etc/crontab` — system-wide (has an extra USER field after the time fields)
- `/etc/cron.d/` — drop-in dir for packages
- `/etc/cron.hourly/`, `/etc/cron.daily/`, `/etc/cron.weekly/`, `/etc/cron.monthly/` — scripts run at those intervals

🚨 **Trap on the exam:** cron jobs run with a minimal PATH (`/usr/bin:/bin`). If your script calls `aws` or any non-standard binary, either `export PATH=...` at the top of the script or use absolute paths.

### at — one-shot scheduling

```bash
at 03:00 tomorrow <<EOF
/usr/local/bin/onetime-job.sh
EOF

atq                          # list pending at jobs
atrm 3                       # remove job ID 3
```

`at` is for "run this once at this time" — opposite of cron's repeating schedule.

### systemd timers — the modern cron

A `.timer` unit triggers a `.service` unit on schedule.

```ini
# /etc/systemd/system/backup.timer
[Unit]
Description=Nightly backup

[Timer]
OnCalendar=daily
Persistent=true                          # run missed jobs at boot

[Install]
WantedBy=timers.target
```

```ini
# /etc/systemd/system/backup.service
[Unit]
Description=Backup job

[Service]
Type=oneshot
ExecStart=/usr/local/bin/backup.sh
```

Then:
```bash
systemctl daemon-reload
systemctl enable --now backup.timer
systemctl list-timers                    # see all timers
```

Advantages over cron:
- Dependency-aware (`After=`, `Wants=`)
- Logs go through journald (`journalctl -u backup.service`)
- `Persistent=true` runs missed jobs on next boot
- More flexible time specs (`OnCalendar=Mon..Fri 09:00`)

🎯 **Exam pattern:** *"Run a script every weekday at 9 a.m. with journald logging."* → systemd timer with `OnCalendar=Mon..Fri 09:00`. Cron works too but doesn't auto-log.

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A user's script `daily_check.sh` is supposed to (a) read a list of hostnames from `/etc/hosts.list`, (b) ping each, (c) write success/failure to `/var/log/healthcheck.log` with timestamps, (d) exit with 0 if all succeed, 1 if any fail. Their current draft is:

```bash
#!/bin/bash
for host in $(cat /etc/hosts.list); do
    ping -c1 $host
    echo "checked $host"
done > /var/log/healthcheck.log
```

> Identify at least 4 bugs and propose a fixed version.

**Bugs:**
1. **`for host in $(cat file)`** — word-splits on whitespace. If a hostname has odd whitespace or the file has blank lines, it breaks. Use `while IFS= read -r host; do ... done < file`.
2. **`$host` unquoted** — vulnerable to globbing/word-splitting. Use `"$host"`.
3. **No exit-code tracking** — script always exits 0 regardless of ping failures.
4. **No timestamps in log** — requirement (c) violated.
5. **Single redirect `> log`** — overwrites the log instead of appending.
6. **No defensive header** — no `set -euo pipefail`.
7. **No stderr capture** — ping errors silently lost.

**Fixed:**

```bash
#!/bin/bash
set -euo pipefail

INPUT=/etc/hosts.list
LOG=/var/log/healthcheck.log
overall_status=0

while IFS= read -r host; do
    [[ -z "$host" || "$host" =~ ^# ]] && continue          # skip blank/comment lines
    ts=$(date '+%F %T')
    if ping -c1 -W2 "$host" >/dev/null 2>&1; then
        echo "$ts  OK    $host" >> "$LOG"
    else
        echo "$ts  FAIL  $host" >> "$LOG"
        overall_status=1
    fi
done < "$INPUT"

exit "$overall_status"
```

That's a typical PBQ — 25 lines of buggy bash and 4–7 things to identify or fix.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| `for x in $(cat file)` is fine | NO — word-splits on whitespace. Use `while read -r`. |
| `$var` and `"$var"` are the same | Unquoted, word-splits. ALWAYS quote unless you specifically need splitting. |
| `[ ]` and `[[ ]]` are interchangeable | `[[ ]]` is bash with safer parsing + regex + `&&`/`||`. `[ ]` is POSIX. |
| `2>&1 > file` redirects both to file | No — order matters. Use `> file 2>&1`. |
| cron has the full PATH | NO — minimal PATH. Use absolute paths or export PATH. |
| `uniq` finds all duplicates | Only ADJACENT duplicates. Pipe `sort | uniq`. |
| `sed s/x/y/ file` modifies the file | No — that prints to stdout. Use `-i` for in-place. |
| `set -e` catches all errors | It misses errors in subshells, in `if` test branches, and (without pipefail) in pipes. |
| Functions need `return` | `return N` sets exit code (0–255). Data "returns" via stdout. |
| `&&` and `||` short-circuit just like in C | Yes — chain with care (`mkdir -p x && cd x || exit 1`). |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Shebang** | `#!/bin/bash` — interpreter directive on line 1 |
| **Positional params** | `$1`, `$2`, ..., `"$@"`, `$#` |
| **Exit code** | Integer 0–255 from a command; `$?` reads the last one |
| **set -euo pipefail** | Defensive script header (exit on error, undef var, pipe failure) |
| **`[[ ]]`** | Bash conditional with regex, safer than `[ ]` |
| **Here-doc** | `<<EOF ... EOF` — multiline string to stdin |
| **Here-string** | `<<<` — single string to stdin |
| **`2>&1`** | Redirect stderr to wherever stdout is going |
| **grep -v** | Invert match |
| **sed -i** | In-place edit |
| **awk -F** | Field separator |
| **cron** | Classic time-based scheduler |
| **systemd timer** | Modern cron replacement with journald + dependencies |
| **`@reboot`** | cron special: run once at boot |
| **`OnCalendar=`** | systemd timer time spec |

### Acronyms cheat-row (Module 4)
| Acronym | Meaning |
|---------|---------|
| IFS | Internal Field Separator (default: space, tab, newline) |
| PID | Process ID |
| stdin / stdout / stderr | File descriptors 0 / 1 / 2 |
| TTY | Terminal device |
| EUID | Effective UID (`$EUID` in bash) |
| ENV | Environment variable |
| PWD | Print Working Directory (`$PWD`) |
| HOME | User home directory (`$HOME`) |

---

## 📊 Case Study — Steam's `rm -rf "$STEAMROOT/"*`

**Situation.** In January 2015, GitHub user `Keyvan` reported [Steam Issue #3671](https://github.com/ValveSoftware/steam-for-linux/issues/3671) on Valve's Steam-for-Linux tracker. After moving his Steam installation and following a particular re-install path, Steam's uninstall/cleanup script deleted **every file in his home directory**, plus an external NFS-mounted drive of irreplaceable family photos.

**Decision.** The offending script line was effectively:

```bash
rm -rf "$STEAMROOT/"*
```

If `$STEAMROOT` was somehow empty (which the bug path made possible), the line became `rm -rf "/"*` — recursively deleting everything from `/` down that the user had permission to delete.

**Outcome.** The Internet erupted. The story became the most-shared cautionary bash tale of the decade. Valve patched within days. Bash style guides everywhere added "guard against empty variables in destructive commands" to their first chapters. The "Steam pipe" became a verb in sysadmin slang ("don't steam-pipe your home dir").

**Lesson for the exam / for practitioners.** Two concrete defenses, both directly XK0-005 relevant:

1. **`set -u`** at the top of every script. With `set -u`, the unset `$STEAMROOT` causes immediate exit BEFORE the `rm` runs.
2. **Explicit guards**:
```bash
if [[ -z "${STEAMROOT:-}" ]]; then
    echo "STEAMROOT is unset; refusing to clean" >&2
    exit 1
fi
rm -rf "${STEAMROOT:?}/"*       # the :? form also fails if empty
```

The exam tests these via "what would have prevented the bug" questions and via reading a script and spotting the unsafe pattern. The hard-to-remember fact: `${VAR:?}` causes the expansion to exit with an error if VAR is empty or unset — exactly the safety net `rm` deserves.

**Discussion (Socratic).**
- **Q1:** Beyond `set -u` and `${VAR:?}`, what *third* defensive measure would have prevented this? (Hint: think about least privilege — what could Steam have done with `sudo` or capabilities?)
- **Q2:** Many DevOps tools (Ansible, Terraform, Helm) execute embedded shell snippets where authors can't always control the runtime shell flags. How do you ship safe destructive commands in those contexts?
- **Q3:** Argue for or against the position: "Bash is inherently unsafe for destructive operations and should be replaced with Python/Go for anything that calls `rm -rf` in production." What's the trade-off?

---

## ✅ Module 4 Summary

You now know:
- 💻 The **shebang** and **executable bit** that turn a text file into a runnable script
- 📦 **Variables**, **quoting**, **substitution** — the most-tested set of bash facts
- 🧮 The **special variables** (`$0`, `$@`, `$#`, `$?`, `$$`, `$!`)
- 🔀 **Conditionals** with `[[ ... ]]`, all file/string/numeric tests, and `case`
- 🔁 **Loops** — `for`, `while IFS= read -r`, `until`, C-style
- ↪️ **Redirection** — `>`, `>>`, `2>&1`, `&>`, here-docs, here-strings, pipes
- 🔢 **Exit codes** and the **defensive header** (`set -euo pipefail`)
- 🧩 **Functions** with `local`, return values via stdout
- 🔧 The pipeline toolkit: **grep, sed, awk, cut, sort, uniq, tr**
- ⏰ Scheduling with **cron, at, systemd timers**

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 5 — Users, Groups & sudo](../Module-05-Users-Groups/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 5](../Module-05-Users-Groups/Reading.md) — your scripts will read `/etc/passwd` with `awk -F:`; [Module 6](../Module-06-Networking-SSH/Reading.md) — `ssh user@host 'remote_cmd'` is bash-on-bash; [Module 8](../Module-08-Security/Reading.md) — auditd rules read like little scripts.
> - Practice: Practice Exam 1 has ~8 questions drawing from this module; the Final Mock has ~12.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 GNU Bash Reference Manual — [bash.5 and the manual on gnu.org](https://www.gnu.org/software/bash/manual/) — read the "Shell Expansions" and "Conditional Constructs" sections at least twice.
- 📄 POSIX.1-2017 (IEEE Std 1003.1-2017) — Chapter 2 (Shell Command Language).
- 📄 Mike Mol et al., [*Bash Pitfalls*](https://mywiki.wooledge.org/BashPitfalls). The single most useful bash debugging resource on the Internet.
- 📄 [Google Shell Style Guide](https://google.github.io/styleguide/shellguide.html) — the most-adopted style guide in industry. Read at least once.
- 📄 [ShellCheck](https://www.shellcheck.net/) — install (`apt install shellcheck` / `dnf install ShellCheck`) and run on every script you write.

**Practitioner / exam:**
- 📖 Sander van Vugt, *CompTIA Linux+ XK0-005 Cert Guide* (Pearson, 2023) — Chapter 11.
- 📖 Daniel Robbins's classic [Bash by Example articles on IBM developerWorks (archived)](https://www.ibm.com/developerworks/library/l-bash/) — still gold.
- 📖 Brian Ward, *How Linux Works* (No Starch, 3rd ed., 2021) — Chapter 11 (Shell Scripts).
- 📖 Mendel Cooper, [*Advanced Bash-Scripting Guide*](https://tldp.org/LDP/abs/html/) — the canonical free reference.
