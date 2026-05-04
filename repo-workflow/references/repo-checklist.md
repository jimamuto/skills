# Repo Change Checklist

Use this checklist for larger changes or reviews.

## Before Editing

- Confirm the current working directory.
- Check whether Git is initialized.
- Inspect tracked and untracked changes.
- Identify language, framework, package manager, and test runner.
- Find nearby code that already solves similar problems.

## During Editing

- Keep file ownership clear.
- Avoid broad rewrites unless the request requires them.
- Preserve public APIs unless the user asked for a breaking change.
- Add or update tests when behavior changes.

## Before Finishing

- Run focused verification.
- Review the diff for unrelated changes.
- Check for secrets, hardcoded local paths, or accidental generated output.
- Summarize only the meaningful changes and verification outcome.
