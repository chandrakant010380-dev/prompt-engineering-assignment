# employee-management-system

A lightweight Employee Management System built using React + TypeScript + Redux Toolkit.
The repository contains several exercises for practicing AI-assisted software
engineering workflows.

Each module gives you a scenario grounded in a real project, tasks, and examples of
weak prompts vs. strong prompts. You submit the prompt(s) you used plus the results.

## Setup

```bash
cd employee-management-system
npm install
npm run dev

Some modules include a standalone copy of a file (suffixed `.review`, `.buggy`, `.messy`,
`.quality`) so you can practice on it without touching the working app. Others ask you to
work directly against the live app's real files.

## Modules

| # | Module | Folder |
|---|--------|--------|
| 1 | Code Review | [01-code-review](01-code-review/README.md) |
| 2 | Bug Fixing | [02-bug-fixing](02-bug-fixing/-refactoring/README.md |
| 4 | Code Quality | 04-code-quality/README.md |
| 5 | Feature Addition | 05-feature-addition/README.md |

> Note: the original request named four factors (code review, refactoring, bug fixing,
> code quality). "Feature Addition" was added as the fifth to round out the five -
> swap it for a different factor (e.g. testing, performance, security audit) if that's
> not what you intended.


## Prompt engineering principles (apply in every module)

- **Show context** - name the exact file/function, paste the relevant snippet, state what
  the code is supposed to do.

- **State constraints** - e.g. "Fix it" is weak; "Edit button saves but the table
  doesn't refresh the change" is the symptom and the suspect file is strong.

- **Respect constraints** - what MUST NOT change (public API, visible behavior, styling),
  what tech/conventions to stick to.

- **Ask for reasoning first** - request the root cause or rationale before/along
  with the fix so you can evaluate it.

- **Iterate** - follow up on the first response instead of accepting it one-shot.

- **Verify** - read the diff, re-run the app/build, and question anything that looks off
  before accepting it.


## Grading Rubric (20 points per module, 100 total)

| Criterion | Points | What it checks |
|------------|---------|----------------|
| Context + Specificity | 6 | Prompt names the right files/symptoms and states explicit constraints |
| Iteration | 4 | Learner refines/follows up rather than accepting a one-shot answer |
| Critical Evaluation | 6 | Learner verifies the AI's output (reads diff, re-tests, challenges anything suspicious) |
| Outcome Quality | 4 | Final result is correct, secure, and consistent with the rest of the codebase |


## Submission

For each module, submit:

1. The prompt(s) you used (in order, including follow-ups).
2. The AI's key response(s) or resulting diff.
3. A short (2-4 sentence) note on what you verified and why you accepted or rejected the result.