#!/bin/sh
# Shell Script to add all files, commit them with a commit message from user and then push them to remote GitHub repo
echo "*** Automating Git Add, Commit and Push ***"

git config --global user.email "kazouya44@gmail.com"

git config --global user.name "virgel1995"
#Ask for Username
echo "Enter your GitHub username: "
read username
echo username

#Ask for User Github's personal access token
echo "Enter your GitHub personal access token: "
read token
echo token


echo "Enter commit message"
        read commitMessage
        git add -A
        git commit -am "$commitMessage"
        git push -f origin main
 echo "Files pushed to GitHub"

#End of script