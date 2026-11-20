# Module 3 - Refactoring

**Files:** `EmployeeList.messy.tsx` (`EmployeeList.messy.tsx`) - this is the "real,
working" `employee-management-system/src/components/EmployeeList.tsx`, unmodified. It
isn't "buggy" - the point is that working code can still be a refactor target.

## Objective

Practice prompting for **constraint-preserved** refactors - the hardest constraint to get
an AI assistant to respect, because it's easy for it to "improve" things into a different
shape or drop an edge case (the loading row, the empty-state row, the confirm-before-delete).

## Task

1. Identify (on your own, briefly) what's repetitive or mixed-concern about this component
   before prompting - you'll better judge the AI's output if you have your own baseline.

2. Ask an AI assistant to refactor it. You decide the constraint to impose (e.g. "no new
   npm packages", "keep the same Tailwind classes/visual output", "keep it in one file" or
   "you may split into sub-components").

3. Diff the before/after and confirm: same columns, same loading/empty states, same
   add/edit/delete behavior.

## Deliverable

- The prompt(s) you used, including the constraint(s) you chose to impose.
- The resulting diff.
- A short note on how you confirmed behavior was preserved (e.g. ran the app, compared
  rendered output, re-read the diff against the original).