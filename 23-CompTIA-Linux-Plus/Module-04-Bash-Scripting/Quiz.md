# ✏️ Module 4 Quiz: Bash Scripting & Automation

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 6 · Apply 8 · Analyze/Evaluate 6 · Create 1.

---

## Questions

### Q1. What does the first line `#!/bin/bash` of a script do? *(Remember)*
A. Sets a comment
B. Imports the bash library
C. Tells the kernel which interpreter to invoke for this script
D. Enables debug mode

---

### Q2. In bash, the difference between `'single'` and `"double"` quotes is: *(Understand)*
A. Single quotes are for filenames, double for strings
B. Single quotes prevent ALL expansion; double quotes allow variable & command substitution
C. They are identical
D. Double quotes word-split; single do not

---

### Q3. Which special variable holds the exit code of the most recent command? *(Remember)*
A. `$!`
B. `$#`
C. `$?`
D. `$$`

---

### Q4. The defensive header `set -euo pipefail` makes a script: *(Understand)*
A. Run faster
B. Exit on any command failure, unset variable use, and pipeline failure
C. Print every command before executing
D. Suppress all errors

---

### Q5. To print the FIRST field of every line in `/etc/passwd` (colon-separated), the correct command is: *(Apply)*
A. `cut -d: -f1 /etc/passwd`
B. `awk -F: '{ print $1 }' /etc/passwd`
C. Both A and B
D. `grep ':' /etc/passwd | head -1`

---

### Q6. Reading a file line-by-line in bash, the canonical safe pattern is: *(Apply)*
A. `for line in $(cat file); do ...; done`
B. `while IFS= read -r line; do ...; done < file`
C. `cat file | for line; do ...; done`
D. `tail -f file | xargs`

---

### Q7. Which redirect sends BOTH stdout and stderr to `/var/log/job.log`? *(Apply)*
A. `cmd > /var/log/job.log`
B. `cmd > /var/log/job.log 2>&1`
C. `cmd 2>&1 > /var/log/job.log`
D. `cmd | tee 2>/var/log/job.log`

---

### Q8. A cron line `*/15 * * * * /opt/run.sh` runs the script: *(Understand)*
A. Once a day
B. Every 15 minutes
C. At 15 past every hour
D. On the 15th of every month

---

### Q9. The `case` keyword's main use is: *(Understand)*
A. Lowercase conversion
B. Pattern-matched dispatch on a single variable
C. Looping
D. Function definition

---

### Q10. Which command lists pending `at` jobs? *(Remember)*
A. `at -l`
B. `atq`
C. `at --list`
D. `crontab -l`

---

### Q11. `sed -i 's/old/new/g' file.txt` does what? *(Apply)*
A. Prints the substitutions
B. Edits the file IN-PLACE, replacing every occurrence of `old` with `new`
C. Replaces only the first occurrence per line
D. Creates `file.txt.bak`

---

### Q12. Which awk invocation prints the HOME directory (6th field) for every user in `/etc/passwd`? *(Apply)*
A. `awk -F: '{ print $1 }' /etc/passwd`
B. `awk '{ print $6 }' /etc/passwd`
C. `awk -F: '{ print $6 }' /etc/passwd`
D. `awk -F"," '{ print $6 }' /etc/passwd`

---

### Q13. The pipeline `sort file.txt | uniq -c | sort -rn | head -5` does what? *(Analyze)*
A. Removes duplicates only
B. Counts occurrences of each line and prints the 5 most frequent
C. Sorts the file by line length
D. Removes blank lines

---

### Q14. In bash, `${VAR:?error}` does what when VAR is unset? *(Understand)*
A. Substitutes "error"
B. Sets VAR to "error"
C. Prints "error" to stderr and exits non-zero
D. Echoes nothing

---

### Q15. To make a script `/opt/deploy.sh` executable by its owner only, use: *(Apply)*
A. `chmod 755 /opt/deploy.sh`
B. `chmod +x /opt/deploy.sh`
C. `chmod 700 /opt/deploy.sh`
D. `chmod 644 /opt/deploy.sh`

---

### Q16. Which exit code conventionally means "command not found"? *(Remember)*
A. 0
B. 1
C. 126
D. 127

---

### Q17. A function declares `local count=0`. What does `local` do? *(Understand)*
A. Marks the variable as read-only
B. Scopes the variable to the function (it does not leak to the caller)
C. Makes the variable persistent across sessions
D. Exports it to subprocesses

---

### Q18. Inside `[[ ... ]]`, the operator that does REGEX matching is: *(Remember)*
A. `==`
B. `=~`
C. `=*`
D. `~~`

---

### Q19. The systemd timer directive that ensures missed jobs run at next boot is: *(Apply)*
A. `OnBoot=true`
B. `Restart=on-failure`
C. `Persistent=true`
D. `RemainAfterExit=yes`

---

### Q20. Why is `for f in $(ls *.log)` discouraged for iterating files? *(Analyze)*
A. `ls` is too slow
B. Filenames with spaces or globs get word-split incorrectly
C. `for` does not support globs
D. `ls` requires sudo

---

### Q21. Without `set -o pipefail`, the exit code of `grep ERROR log | wc -l` is: *(Analyze)*
A. The exit code of `grep`
B. The exit code of `wc` (always 0)
C. A bitwise OR of both
D. 1 if either fails

---

### Q22. A here-doc that writes a config file is: *(Apply)*
A.
```
echo "[server]\nport=8080" > /etc/myapp/config
```
B.
```
cat <<EOF > /etc/myapp/config
[server]
port=8080
EOF
```
C.
```
write -f /etc/myapp/config "[server]\nport=8080"
```
D.
```
config > /etc/myapp/config <<EOF [server] port=8080 EOF
```

---

### Q23. Which cron line runs `/usr/local/bin/backup.sh` once every weekday at 02:30 a.m.? *(Apply)*
A. `30 2 * * 1-5 /usr/local/bin/backup.sh`
B. `2 30 * * 1-5 /usr/local/bin/backup.sh`
C. `30 2 1-5 * * /usr/local/bin/backup.sh`
D. `* */30 * * 1-5 /usr/local/bin/backup.sh`

---

### Q24. A user reports their cron script can't find `aws`. The most likely cause is: *(Evaluate)*
A. AWS CLI isn't installed
B. cron uses a minimal PATH; the script needs an absolute path or `export PATH=...`
C. AWS region isn't set
D. cron only runs on root's behalf

---

### Q25. The bash construct `command1 && command2 || command3` runs `command3` when: *(Evaluate)*
A. command1 fails OR command2 fails
B. command1 succeeds AND command2 fails
C. command1 fails (only)
D. Both command1 and command2 fail

---

### Q26. **(Create-level)** Write the MINIMUM correct bash script (excluding the shebang) that takes one argument `<dir>`, fails-safe if it's empty or missing, and counts the regular files in that directory. *(Create)*

> *Create-level note:* you're composing the defensive header + arg check + count.

A.
```bash
set -euo pipefail
DIR="${1:?usage: $0 <dir>}"
find "$DIR" -type f | wc -l
```
B.
```bash
DIR=$1
ls $DIR | wc -l
```
C.
```bash
[[ $1 ]] && echo $(ls $1 | wc -l)
```
D.
```bash
DIR="$1"; find $DIR/*; echo $?
```

---

## 🎯 Answers + Explanations

### Q1: **C. Tells the kernel which interpreter to invoke**
The shebang `#!` followed by an interpreter path causes the kernel's exec syscall to launch that interpreter with the script as input.

### Q2: **B. Single quotes prevent ALL expansion**
Single quotes are 100% literal — `$VAR` stays as `$VAR`. Double quotes allow variable expansion (`$VAR` substitutes), command substitution (`$(date)`), but suppress word splitting.

### Q3: **C. `$?`**
`$?` is the exit code of the last command. `$!` is the PID of the last background command. `$#` is the count of positional params. `$$` is the script's own PID.

### Q4: **B. Exit on any command failure, unset variable use, and pipeline failure**
`-e` = errexit, `-u` = nounset, `-o pipefail` = pipefail. Together: the script will fail-loudly on any of those.

### Q5: **C. Both A and B**
`cut -d: -f1` and `awk -F: '{ print $1 }'` produce the same output here. awk is more flexible (supports filtering, math), cut is simpler.

### Q6: **B. `while IFS= read -r line; do ...; done < file`**
`IFS=` prevents leading/trailing whitespace stripping; `-r` keeps backslashes literal. The other patterns (especially `for line in $(cat file)`) word-split on whitespace.

### Q7: **B. `cmd > /var/log/job.log 2>&1`**
Redirect stdout first, then duplicate stderr to wherever stdout is now going. Order matters — choice C redirects stderr to the *original* stdout, then stdout to file (stderr still on terminal).

### Q8: **B. Every 15 minutes**
`*/15` in the minute field = "every 15 minutes." `15 * * * *` would be "at minute 15 of every hour" (choice C).

### Q9: **B. Pattern-matched dispatch on a single variable**
`case "$x" in pattern1) ...;; pattern2) ...;; *) ...;; esac` is bash's switch-statement.

### Q10: **B. `atq`**
`atq` lists pending `at` jobs (with job numbers). `atrm <id>` removes one.

### Q11: **B. Edits in-place, replaces every occurrence of `old`**
`-i` = in-place; `g` = global per line. Without `g`, only the first match per line is replaced. Without `-i`, output goes to stdout.

### Q12: **C. `awk -F: '{ print $6 }' /etc/passwd`**
The 6th field of /etc/passwd is the home directory. Field separator must be `:`.

### Q13: **B. Counts occurrences and prints the 5 most frequent**
`sort` groups identical lines, `uniq -c` counts adjacent duplicates with a count prefix, `sort -rn` sorts numerically reverse, `head -5` keeps top 5. The classic "top N" pattern.

### Q14: **C. Prints "error" to stderr and exits non-zero**
`:?` is the explicit-fail substitution. Combine with `set -u` for double safety on unset vars.

### Q15: **C. `chmod 700`**
700 = rwx for owner, nothing for group or other. `+x` (choice B) adds execute for ALL.

### Q16: **D. 127**
127 = command not found. 126 = command found but not executable. 130 = killed by SIGINT (Ctrl-C).

### Q17: **B. Scopes the variable to the function**
Without `local`, every variable in a function is global — silently leaking and polluting the parent scope. ALWAYS use `local` inside functions.

### Q18: **B. `=~`**
`=~` is the bash-only regex match operator (works in `[[ ]]`, not `[ ]`). E.g., `[[ "$email" =~ @ ]] && echo "has at"`.

### Q19: **C. `Persistent=true`**
With `Persistent=true`, systemd remembers the last time a calendar timer fired and runs missed jobs at next boot. Critical for laptops or servers that may have been off.

### Q20: **B. Word-splits on whitespace**
`$(ls *.log)` splits on whitespace, so a file named "my data.log" becomes two args "my" and "data.log". Use `for f in *.log; do ...; done` instead — the shell glob handles spaces correctly.

### Q21: **B. The exit code of `wc` (the last command in the pipe)**
Without `pipefail`, a pipeline's exit code is the LAST command's exit code. `wc` almost always succeeds, masking grep failures. Add `set -o pipefail` to make the pipeline fail if any stage fails.

### Q22: **B. cat <<EOF > file ... EOF**
The here-doc syntax pipes the text between `<<EOF` and the closing `EOF` into the command's stdin. Combined with `> file`, writes a multiline file cleanly. Choice A relies on echo interpreting `\n` (it doesn't by default).

### Q23: **A. `30 2 * * 1-5`**
Fields: minute=30, hour=02, day-of-month=*, month=*, day-of-week=1-5 (Mon-Fri). The minute comes first.

### Q24: **B. cron uses a minimal PATH**
cron's PATH is typically `/usr/bin:/bin`. Fix: use `/usr/local/bin/aws` or set `PATH=$PATH:/usr/local/bin` at the top of the script.

### Q25: **A. command1 fails OR (command1 succeeds AND command2 fails)**
`&&` runs command2 if command1 succeeded. `||` runs command3 if the LEFT side (command1 && command2) failed — which is the case if command1 failed OR if command1 succeeded but command2 failed. This is why `cmd1 && cmd2 || cmd3` isn't a safe "if-else."

### Q26: **A.**
- `set -euo pipefail` is the defensive header
- `DIR="${1:?usage: $0 <dir>}"` requires arg 1; exits with the message if missing or empty
- `find "$DIR" -type f | wc -l` counts regular files including in subdirs
- Choices B, C, D have unquoted vars, no error handling, or wrong behavior.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 4 mastered. Bash bugs will reveal themselves to you.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the quoting, redirection, and pipefail sections.
- <18/26 → 🔁 Restart the Reading.md and re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- Shebang `#!/bin/bash` on line 1
- `set -euo pipefail` + `IFS=$'\n\t'` defensive header
- Special vars: `$0`, `$@`, `$#`, `$?`, `$$`, `$!`, `$_`
- Quoting: single (literal) vs double (expand) vs unquoted (split)
- `[[ ]]` vs `[ ]`; `=~` for regex
- Redirection: `>`, `>>`, `2>&1`, `&>`, `<<EOF`, `<<<`
- Pipeline tools: `grep -i/-v/-n/-r/-c/-q/-A/-B/-C`, `sed -i`, `awk -F`, `cut`, `sort`, `uniq -c`, `tr`
- cron 5 fields; `*/N` for every-N; system locations
- systemd timer + `Persistent=true`
- Exit codes: 0, 1, 126, 127, 128+N

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5 — Users, Groups & sudo](../Module-05-Users-Groups/Reading.md)
