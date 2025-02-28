//1. Git and GitHub

//What is Git?
// Free & Open Source Version Control System(VCS)
// VCS is tools that help to tracks changes in code
//They help to collaborate in group and help in solving issue

 //What is Github?
// Website where we host repositories online

// first we add then commit


//4 Using Git
// • Command Line (Most Popular)
// • IDE I Code Editors (like VSCode)
// • Graphical User Interface (like GitKraken)

//6 Configuring Git
// git config --global user.name "My Name"
// git config --global user.email "someone@email.com"

//7,8  Basic Commands
// • Clone - Cloning a repository on our local machine
// • status - displays the state of the code
// git clone <- some link ->
// git status

//9,10, Basic Commands
// • add - adds new or changed files in your working directory to the Git staging area.
// git add <- file name -> or git add .

// • commit - it is the record of change
// git commit -m "some message"

// • push - upload local repo content to remote repo
// git push origin main
// origin ka matlab wo location jaha mere github ki repo hai
// and main ka matlab branch here branch is master instead


//11. init command
//we can use ls -la to check hidden files like .git is present or not
//Basic Commands
// • init - used to create a new git repo
// git remote add origin <- link ->
// git remote -v (to verify remote)
// git init
// git branch      (to check branch)

// git branch -M main (to rename branch)
// git push origin main  // or we can use
// git push -u origin main  //  -u means upstream ko set karna ki jab hum origin ki baat karre hai to konse origin and main ki baat karre hai
// uppar wali line 53 ek baar likhne ke baad hum uske baad sirf "git push" use kar sakte hai
// baar bar origin main likhna jaruri nahi hai

// git commit -am
// to add and commit simultaneously when we only modify file and havent created any new or untracked file


//13-14 Workflow

//  GitHub
//  code changes can  be directly commited
//used for commiting small changes

//Local Git
// code changes -> "add" also called stage a change -> commit (commit changes)-> "push"
// we can use it for commiting maximum changes
//can create pull request

//15 Branch Commands
// git branch  (to check branch)

// git branch -M main (to rename branch)

// git checkout <- branch name ->   (to navigate)

// git checkout -b <- new branch name ->   (to create new branch)

// git branch -d <- branch name ->   (to delete branch)

//16. Merging Code
// git diff <- branch name->        (to compare commits, branches, files & more)

// git merge <- branch name->        (to merge 2 branches)

// OR
// Create a PR pull request
//Pull Request
// It lets you tell others about changes you've pushed to a branch in a repository on GitHub.
//PR merge is in itself a commit

//17: Pull command // Github page me merge karne ke baad locally wo changes yaani merge dekhne ke liye use hota hai
//Basic Commands

// git pull origin main

// used to fetch and download content from a remote repo and immediately update the local repo
// to match that content.
//so push is from local to Github and pull is for from git hub to local


//18. Merge Conflicts
// An event that takes place when Git is unable to automatically resolve differences in code
// between two commits.

//19. Fixing Mistakes

// Case 1 : staged changes // koi mistake maine git add . kiya ho but commit na hua ho and muje use hatana hai then
// git reset <- file name ->   //agar sirf ek file me mistake karke add kiya hoto
// git reset                    //agar bohot saare file me mistake karne ke baad add . kiya hoto then is wale linke ko use karna


// Case 2 : commited changes (for one commit)  //agar koi mistake ko maine add and commit dono kardiya ho then ise use karna
// git reset HEAD~1                             //yaha HEAD ek pointer hai jo last commit ko point karta hai. ~1 means mera head pointer abb ek commit piche point karega i.e last commit remove hoagaya

// Case 3 : commited changes (for many commits) //muje bohot sare commits ko undo karna hoga then

// git reset <- commit hash ->          //git log  use karne par we et to see all the commit frm 1st commit jis commit pe jaana hai usk hashcode copy kara "q" for quit then  git reset <hashcode copy>
// git reset --hard <- commit hash ->       //uppar wale reset karne par jo we get to the commit but data curr wala unstaged dikhta hai
//                                              to remove that  data we do --hard i.e forcefully remove any data present after the commit we want  is removed



//20 cc
// What is Forking?
// A fork is a new repository that shares code and visibility settings with the original "upstream"
// repository.
// Fork is a rough copy.

