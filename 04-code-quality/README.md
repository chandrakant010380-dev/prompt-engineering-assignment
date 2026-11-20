# Module 4 - Code Quality

**Files:** `employeeSlice.quality.ts` (`employeeSlice.quality.ts`) - a warming-up, simplified
copy of the real `employee-management-system/src/store/employeeSlice.ts`. It still
"works" (compiles, thunks run) but has several code-quality regressions.

## Objective

Practice prompting for a quality pass that explains *why* each change matters, rather than
an AI silently rewriting the file.

## Task

1. Ask an AI assistant to review this slice for type-safety and maintainability-quality
   issues (don't ask it to "clean up" vaguely - specify what counts as "quality" here).

2. Require a short rationale per issue before it suggests a change.

3. Apply the fixes and check they don't change the slice's public shape (action creators,
   state fields) that other files import.