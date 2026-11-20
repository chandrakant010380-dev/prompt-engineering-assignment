# Module 5 - Feature Work

**Files:** `EmployeeList.tsx` (`EmployeeList.tsx`) - start from the real copy of the
real `employee-management-system/src/components/EmployeeList.tsx`. It still
works. Copy/paste into a new file on your machine and wire your result to the browser.

## Objective

Practice giving an AI assistant enough architectural context to add a new feature that
fits the existing patterns instead of hallucinating a new architecture.

## Task

Add a search box above the employee table that filters rows by name or
email as the user types.

1. Decide (before prompting) where the filter state should live - local component state,
   Redux slice, URL query param, etc.

2. Give the assistant the architectural context it needs:
   - current state shape
   - current add/edit/delete app flow
   - constraints (e.g. "reuse table rows from existing component", styling
     consistency, etc.)

3. Iterate at least once (e.g. ask for a debounce, or
   ensure locally case-insensitive matching if the first pass missed it).

## Deliverable

- The prompt(s) you used, including at least one follow-up/iteration.
- The resulting diff.
- A note on how you verified it (ran the app, tried a few search terms, checked the
  empty-results case).