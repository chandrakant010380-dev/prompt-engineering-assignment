# Module 2 - Bug Fixing

**Files:** `employeeApi.buggy.ts` and `employee-management-system/src/api/employeeApi.ts`
(standalone copy of the real file with two bugs injected. It isn't wired into the build; treat it as a snippet with a reported symptom.)

## Reported Symptom

When I click **"Add Employee"**, the new row shows up blank (missing name/email/etc).
When I click **"Save Changes"** on an existing employee, nothing updates - or I get an error.

## Objective

Practice writing a bug-report-style prompt: describe the symptom, not the fix. Let the assistant find the root cause before accepting a patch.

## Task

1. Without reading the fix yourself first, hand the assistant the symptom above plus the file and ask it to find the root cause(s).
2. Require it to explain **why each bug causes that exact symptom** before applying a fix.
3. Apply the fix and verify your understanding matches the explanation.

## Deliverable

- The prompt(s) you used (including any follow-up asking for root-cause explanation).
- The assistant's explanation diff.
- A one-line note confirming you verified the fix (e.g. re-ran the app, or reasoned through the request/response).