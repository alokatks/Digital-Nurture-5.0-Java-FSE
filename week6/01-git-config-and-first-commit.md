\# GIT HOL 1 — Configuration \& First Commit



\*\*Objective:\*\* Configure Git, set a default editor, and add a file to a repository.



\## Steps \& Commands



\# 1. Verify Git is installed

git --version



\# 2. Configure user-level identity

git config --global user.name "Alok Tiwari"

git config --global user.email "your-email@example.com"



\# 3. (Optional) Set Notepad++ as the default editor

git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"



\# 4. Verify configuration

git config --list



\# 5. Create a repository and add a file

mkdir GitDemo \&\& cd GitDemo

git init

echo "Hello Git" > welcome.txt



\# 6. Stage and commit

git status              # welcome.txt shows as untracked

git add welcome.txt

git status              # now staged (green)

git commit -m "Initial commit: add welcome.txt"

git log



\## Outcome



Successfully configured Git with user identity, set up a default editor, and created the first local commit in a new repository.

