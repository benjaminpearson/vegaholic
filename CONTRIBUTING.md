# Contributing

This document will guide you through the contribution process. (based on [node contributing guide](https://github.com/nodejs/node/blob/master/CONTRIBUTING.md))


### Step 1: Clone

Clone the project and check out your copy locally.

```text
$ git clone https://github.com/benjaminpearson/xxxx.git
$ cd xxxx
```

### Step 2: Branch

 - Name the branch according to the type of issue (hotfix|bugfix|feature) including short name (e.x. feature/central-server-config)
 - Do not make two (or more) unrelated changes in the same *Pull Request* (branch).
 - 3 PRs with 100 lines each is **much** better than one with 300 lines. Smaller the better, think atomic.

Create a feature branch and start hacking:

```text
$ git checkout -b feature/central-server-config
```

Try to pick descriptive branch names (but not too long), so other people would immediately understand what are you trying to achieve in it. Examples of good branch names:

 - `set-config-for-api`
 - `fix-incorrect-user-login-error`

Bad:

  - `fix-bug`
  - `tmp`
  - `improve-code`


### Step 3: Commit

Make sure git knows your name and email address:

```text
$ git config --global user.name "Random User"
$ git config --global user.email "random.user@example.com"
```

Writing good commit logs is important. A commit log should describe *what* changed and *why*. Follow these guidelines when writing one:

1. The first line should be 50 characters or less and contain a short
   description of the change.
2. Keep the second line blank.
3. Wrap all other lines at 72 columns.

A good commit log can look something like this:

```
Explaining the commit in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc. etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way `git log` will show things
nicely even when it is indented.
```

The header line should be meaningful; it is what other people see when they run `git shortlog` or `git log --oneline`.

Check the output of `git log --oneline files_that_you_changed` to find out what subsystem (or subsystems) your changes touch.

Aim to make your commits atomic. Think in a way that if specific commit gets reverted system should continue to work fine.

Consider squashing your commits if you have too many of them. Check one of the guides about interactive git rebase [here](https://help.github.com/articles/about-git-rebase/) or [here](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html). Motivation is that it is easier to troubleshoot issues (just revert problematic commit), easier to read history, easier/faster to run `git bisect`. You can also squash your commits using native Github feature as explained here: [Squash your commits](https://github.com/blog/2141-squash-your-commits).


### Step 4: Test

Bug fixes and features **should come with tests**. Add your tests in the `test` directory. Look at other tests to see how they should be structured (mocks, fixtures, common includes, etc.).

```text
$ npm test
```

Make sure the linter is happy and that all tests pass.


### Step 5: Rebase

When developing locally and you haven't yet put your code up as a Pull Request for review then use git rebase (not git merge) to sync your work from time to time. Once your work is in a Pull Request though and has comments from a review don't rebase otherwise it creates a confusing timeline in the PR.

```text
$ git fetch
$ git rebase origin/master
```

### Step 6: Push

```text
$ git push origin my-feature-branch
```

### Step 7: Pull Request

Consider to open a *Pull Request* as soon as you pushed first commit. Put all related information in PR description, such as:

 - *What* you’re doing and *Why*.
 - Leave a reference to related cards or Github Issue.
 - If story should be tested manually, then how.
 - Anything else that you feel worth mentioning.

### Step 8: Code review

Label your PR with `Ready for Review` and ask people to do a code review. All comments from code review should be addressed, so both parties are happy about changes made. When a developer asks for a Code Review it means that all work is finished and he believes it can go into stable master branch.


### Step 9: Merge Pull Request

The person who authored the Pull Request is responsible for merging, after at least one other team member `Approves` the PR.

When merging, ensure you do a `Squash and Merge` to keep the git history of master branch tidy. In Github there is a dropdown arrow on the merge button that allows you to do this.

Remember to delete branch after the merge to keep branches tidy.
