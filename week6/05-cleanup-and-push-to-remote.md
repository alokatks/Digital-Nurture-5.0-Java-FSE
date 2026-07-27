\# GIT HOL 5 — Clean Up \& Push Back to Remote



\*\*Objective:\*\* sync the local trunk with the remote and push pending changes.



\## Steps \& commands



```bash

cd GitDemo



\# 1. Ensure master is clean

git status



\# 2. List all branches

git branch -a



\# 3. Link a remote (if not already linked) and pull the latest changes

git remote add origin https://github.com/<your-username>/GitDemo.git   # first time only

git pull origin main



\# 4. Push pending local commits to the remote

git push origin main



\# 5. Confirm the remote is updated

git log --oneline origin/main

```



\## Expected outcome



\- `git pull` fast-forwards or merges any remote changes into your local `main`.

\- `git push` uploads your local commits to the remote repository.

\- Refreshing the repository on GitHub shows the latest commits.

\- `git log origin/main` matches your local `main`.

