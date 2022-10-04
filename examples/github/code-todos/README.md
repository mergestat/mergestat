# TODO Comments

The examples in this directory show how to use MergeStat to track `TODO` comments across multiple repositories.
A simple text search is applied to all lines of code looking for a match on `TODO` (this can be expanded to match `FIXME`, `BUG`, etc.).
The `git blame` for each line is also included in the results, to retrieve when that `TODO` was "last touched" and by whom.

## TODO

- [ ] Add examples matching other strings (`FIXME`, `BUG` etc.)
- [ ] Parse comments that follow the `TODO(some-assignee)` format to retrieve the assignee
