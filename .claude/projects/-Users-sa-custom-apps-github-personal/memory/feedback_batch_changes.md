---
name: Batch changes into fewer commits
description: Don't commit and push after every small edit — collect changes and commit when there's a meaningful batch
type: feedback
---

Don't commit after every single edit. Batch related changes together into one meaningful commit and push when the user says to or when a logical unit of work is done.

**Why:** Too many micro-commits clutters the git history. User found it excessive.

**How to apply:** Make edits, wait for the user to confirm they're happy, then commit and push once.
