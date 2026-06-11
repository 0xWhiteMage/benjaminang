# About Page Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite the About page to be narrative-first, replacing the résumé-style layout with editorial content, scannable principles, interests, and collapsible milestones.

**Architecture:** Replace the current hero, timeline, story, and disciplines sections with a new structure: lead paragraph, opening narrative, what I keep returning to, principles list, interests list, collapsible milestones, and skills/experience matrix. Keep existing CSS module patterns and reuse existing styles where possible.

**Tech Stack:** Next.js, React, CSS Modules, TypeScript.

---

### Task 1: Update metadata and imports

**Files:**
- Modify: `src/app/about/page.tsx:1-10`

**Step 1:** Update the metadata description to reflect the new positioning.

**Step 2:** Remove the import of `AboutTimeline` (will not be used).

**Step 3:** Keep other imports (site, styles).

### Task 2: Replace milestones data with simplified array

**Files:**
- Modify: `src/app/about/page.tsx:21-106`

**Step 1:** Replace the existing milestones array with the 5 milestones from the spec (2012 Nanyang Polytechnic, 2012 Blind internship, 2015 Genesis, Since: grew..., etc.). Keep the same shape but remove extra fields (org, focus, expanded). Add a new field `description` for the detail.

### Task 3: Replace disciplines with skills matrix

**Files:**
- Modify: `src/app/about/page.tsx:108-114`

**Step 1:** Replace the `disciplines` array with the 13-item skills matrix from the spec.

### Task 4: Replace story and pullquote with new narrative content

**Files:**
- Modify: `src/app/about/page.tsx:116-127`

**Step 1:** Replace the `story` array with the new opening narrative paragraphs.

**Step 2:** Replace the `pullquote` with the lead "Most introductions start with a job title. Mine has stopped fitting."

### Task 5: Add principles and interests arrays

**Files:**
- Modify: `src/app/about/page.tsx` (add after story/pullquote)

**Step 1:** Add `principles` array with 8 items.

**Step 2:** Add `interests` array with 5 items (each with title and description).

### Task 6: Rewrite the JSX structure

**Files:**
- Modify: `src/app/about/page.tsx:129-217`

**Step 1:** Replace the header section with new lead and opening narrative.

**Step 2:** Add a "What I keep returning to" section.

**Step 3:** Add a "Principles" section with scannable list (use `<ul>` with `<li>`).

**Step 4:** Add a "What I'm paying attention to" section with interests list.

**Step 5:** Add a "Milestones" section using `<details><summary>` for collapsible toggle, listing the simplified milestones.

**Step 6:** Add a "Skills / experience matrix" section with the 13 items in a scannable format (could be a simple list or grid).

**Step 7:** Remove the old timeline, story, and disciplines sections.

### Task 7: Update CSS modules for new sections

**Files:**
- Modify: `src/app/about/page.module.css`

**Step 1:** Add styles for new sections (lead, narrative, principles list, interests list, milestones toggle, skills matrix). Reuse existing typography and spacing variables.

**Step 2:** Ensure responsive design (mobile-first).

**Step 3:** Keep the existing `.head`, `.title`, `.lede`, `.tags` classes but adapt them for the new content (maybe rename or extend).

### Task 8: Verify TypeScript and run typecheck

**Files:** None (run command)

**Step 1:** Run `npm run typecheck` to ensure no type errors.

**Step 2:** If errors, fix them.

### Task 9: Final review and cleanup

**Step 1:** Review the page visually (optional, but ensure structure is correct).

**Step 2:** Remove any unused CSS classes or imports.

**Step 3:** Commit changes.

---

**Notes:**
- The existing `AboutTimeline` component and its CSS module will remain in the codebase but will not be imported in the page. Could be deleted later.
- Keep the breadcrumb structured data (lines 12-19) as is.
- Ensure the page still uses the `container` class for layout.
- Use the existing `eyebrow` class for section labels.
- The milestones toggle should be accessible (use `<details>` and `<summary>` with appropriate aria attributes if needed).

**Execution Handoff:**
Plan complete and saved to `docs/plans/2026-06-11-about-page-rewrite.md`. Two execution options:

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints

**Which approach?**