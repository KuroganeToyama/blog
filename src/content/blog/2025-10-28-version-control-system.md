---
title: 'About Version Control System'
description: 'About Version Control System'
pubDate: 'October 28 2025'
heroImage: '../../assets/version-control-system.png'
---

Image source: https://git-scm.com/community/logos.

If you have done anything that is remotely related to IT, chances are, you have heard about GitHub. And you might have heard about it as a place where you can safely store your files without ever worrying about losing them (well, nothing is 100% foolproof, but the folks at GitHub do a rather good job at making sure that stays true). And it also helps you keep track of how those files have changed over time. Which is nice, given that in a project, multiple people might be working on the same files and you gotta be able to tell who changed what.

You might have heard people saying that GitHub is a version control system (VCS for short). If I'm being polite, then that's only half true. If I'm being a pedantic prick, then that's just blatantly wrong.

To begin, what is a VCS?

Well, it's simple. It's a piece of software that allows you to track changes to files.

**And that's about it.**

The first proper VCS was Apache Subversion, or SVN for short. I used the word "proper" because SVN was very much not the first VCS, but the predecessors of SVN had a lot of hiccups that were rather undesirable. And even without those hiccups, those predecessors relied on ancient protocols that were more or less obsolete by the 2000s. SVN, while still based on its predecessors, was developed to address all those hiccups, and thus became the first VCS that developers and companies could reliably use. The idea of SVN is straightfoward. You have a central server that stores your repository. Whenever you need to make changes, you ask the central server for a local copy of the files on your own machine, you edit those files, then you commit your changes back to the central server. Simple enough, but also a bunch of shortcomings. 

What happens if the central server is down? No one can commit to update the production code, that's what happens. What happens when you want to make a branch to develop and test some new features? The central server creates a copy of directories in a dedicated directory in the repository, and every time you switch branches, you redownload stuff because branches exist only in the central server. Not only is this slow as heck and prone to the same central server issue mentioned earlier, the repository itself also blows up in size as you make more and more branches. So yeah, that wasn't very ideal.

And then came Git. The VCS that everyone knows and loves (and hates). Git is the very damn thing powering GitHub (a proprietary platform), BitBucket (somehow even more proprietary than GitHub), GitLab (open-source with several asterisks), Gitea (fully open-source) and several other platforms that I might not have heard about. Git addresses several issues with SVN. First issue, single point of failure. In SVN, the only place with the full history of changes is the central server. All you get to have on your local machine are the files themselves. In Git, while there still is a server that contains your repositories, it's not central. It's just there because you do need to start somewhere. Git allows you to make a **clone** of your repositories, which means a full copy of everything (including the full commit history of course). As such, any place with a clone of the repository can serve as a server. No more single point of failure! Second issue, branching. Well, branching was an issue in SVN only because SVN was centralized. Now that we have local clones in Git, branching is pretty much self-resolved. That and Git uses pointers to cleverly create the illusion of branches, which also removes the storage blowup thing.

But Git was also not perfect. In fact, it's quite bloody far from perfect. It all comes down to how Git track changes. You see, every time you make a commit, you think that Git knows what was changed. Well, I hate to break it to you but the truth is, it doesn't. Every time you make a commit, Git takes a snapshot of the entire repository at that moment, and that is what stored in the history. You do not have a history of changes, you have a history of snapshots. To know what has changed, Git compares two snapshots and infers the changes. It was done this way because well, it was bloody simple to implement. But that introduces a problem. Merge conflicts. And there are two aspects to that. First, Git is rather stupid when it comes to determining whether there is **no** conflict. Say you have a file that initially has "Hello World!" in it. Alice adds "Beautiful" after "Hello". Bob adds "!!" after the first "!". Intuitively, this has no conflict, since you're just gonna get "Hello Beautiful World!!!" regardless of who made their change first. But Git compares snapshots, and it sees that there are two different edits on the same line, so there's a conflict. Second, because the only damn thing Git can do is compare snapshots, it is absolutely incapable of resolving any merge conflicts, and thus it falls into your hands to resolve them. This gets waaaaay much worse when you perform operations that affects a chain of commits instead of a single commit.

Enter, patch theory. You can read pretty much everything about patch theory [here](https://en.wikibooks.org/wiki/Understanding_Darcs/Patch_theory). But to explain it in a nutshell, in patch theory, you define changes in a way that allows you to treat them as mathematical operations, like addition and subtraction. You still use the same algorithm as Git to determine what has changed, but now you translate those changes into mathematical objects that you can store in memory and thus play with. We now call each change a *patch*, hence the name *patch theory*. So now, going from version A to version B simply means apply a bunch of operations, like doing the expression `1 + 2 x (3 - 5 / 4)`. Furthermore, because now you're doing math instead of the rudimentary snapshot comparison, you now have acccess to algorithms that can reliably determine:

- Is there a conflict?
- If no, auto merge the patches.
- If yes, what type of conflict?
- Depending on type of conflict, suggest options for conflict resolution.

Let me put it this way by circling back to our example with Alice and Bob. Patch theory can definitively tell you that there are no conflicts whatsoever, and just apply both patches to produce the final version. You can read more about just how powerful patch theory is from the official documentation. 

Unfortunately, patch theory is rather new, while Git-based platforms have entire ecosystems so fleshed out that it would take at least another 10 years before patch-based platforms could begin to catch up. So for the time being, we are still stuck with the heavily flawed VCS that is Git.

There's also another kind of VCS, though I don't recall any official name for it. An issue that SVN, Git and patch theory share is that they use the same algorithm to determine what has changed. And that algorithm works really well, as long as your files are either text-based or small binary files. But, if you have large image files, large audio files and the likes, then that algorithm is gonna work very poorly. So we have a different kind of VCS with a different approach to computing changes, and this kind of VCS is commonly used in professions where digital assets are crucial, like game development and designing stuff.

Though, I think there are plans for patch-based platforms to efficiently support large digital assets. What I know for sure is that Git doesn't give a shit about it.