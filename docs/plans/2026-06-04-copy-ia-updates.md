# BenjaminAng Website Copy + IA Updates Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update all 6 pages to reflect new positioning: creative entrepreneur, storytelling + creative direction + shipping, exploring creative technology/AI/Web3/education. Get hired (innovation/strategy/design management/education).

**Architecture:** Text swaps only — no layout changes. Content lives inline in TSX files and 4 data files (`site.ts`, `projects.ts`, `speaking.ts`, `press.ts`). All edits are string replacements.

**Tech Stack:** Next.js 14, React, TypeScript, CSS Modules

---

## Task 0: Update site.ts identity

**Files:**
- Modify: `src/lib/site.ts`

**Step 1: Update tagline and description**

Replace tagline `"Creative Director · Motion Designer · Singapore"` with `"Creative Entrepreneur · Creative Direction · Storytelling"`

Replace description with: `"Creative entrepreneur working at the intersection of storytelling, creative direction, and emerging tools. 10+ years building studios and shipping campaigns. Now exploring creative technology, human-centred AI workflows, Web3, and education."`

**Step 2: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 1: Home page — Hero block

**Files:**
- Modify: `src/app/page.tsx` (lines 46-71)

**Step 1: Replace eyebrow**

Line 50: Change `"Creative direction & motion design"` to `"Creative direction & creative entrepreneurship"`

**Step 2: Replace H1**

Lines 52-55: Change `"Ideas that move people and performance."` to `"Ideas that move people. And systems."`

**Step 3: Replace lede paragraph**

Lines 56-60: Replace with:
```
Creative entrepreneur working at the intersection of storytelling, creative direction, and emerging tools. 10+ years building studios and shipping campaigns. Now exploring creative technology, human-centred AI workflows, Web3, and education.
```

**Step 4: Replace meta footer**

Lines 66-71: Change year from `2024` to `2026`

**Step 5: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 2: Home page — Beat Bots section

**Files:**
- Modify: `src/lib/projects.ts` (lines 209-270, Beat Bots summary)

**Step 1: Replace Beat Bots summary**

Line 220: Replace summary with: `"A Web3 IP experiment where I owned strategy, brand, and go-to-market. The work wasn't 'content' in isolation. It was narrative, cadence, community systems, and iteration under real-time feedback."`

**Step 2: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 3: Home page — Capabilities section

**Files:**
- Modify: `src/app/page.tsx` (lines 187-211)

**Step 1: Replace capabilities heading**

Lines 189-192:
- Eyebrow: Keep `"03 · Capabilities"`
- Title: Change to `"Creative direction, plus the edge of what's next."`
- Description: Change to `"Story, systems, and experiments. Spanning campaigns, motion, emerging tech, and education."`

**Step 2: Rename capability item**

Line ~198: Find `"Genesis & Balance"` and rename to `"Building Studios"`

**Step 3: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 4: Home page — CTA strip

**Files:**
- Modify: `src/app/page.tsx` (lines 214-239)

**Step 1: Replace H2**

Lines 219-220: Change to `"Open to innovation, strategy planning, design management, and education roles."`

**Step 2: Replace description**

Lines 222-224: Change to `"For hiring conversations, advisory work, speaking invitations, and creative direction projects."`

**Step 3: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 5: Work page — Header

**Files:**
- Modify: `src/app/work/page.tsx` (lines 37-43)

**Step 1: Replace lede paragraph**

Lines 41-43: Replace with: `"Four pillars of my work. Building studios, shipping creative direction, exploring new tech, and teaching what I learn."`

**Step 2: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 6: Work page — Project summaries

**Files:**
- Modify: `src/lib/projects.ts`

**Step 1: Update Genesis summary**

Line ~46: Replace with: `"Founded and grew a motion design studio from scratch to a 15-person team. Led creative direction for campaigns across brand film, motion design, and commercial production. Built the culture, the pipeline, and the client base."`

**Step 2: Update Balance summary**

Line ~112: Replace with: `"A creative studio built on structure and workflows. Focused on production systems, team operations, and delivering creative direction at scale. Not a side project — a deliberate build."`

**Step 3: Update Creative Business Education summary**

Line ~188: Replace with: `"Adjunct lecturer at Nanyang Polytechnic since 2022. Teaching practice-led curriculum in motion design, creative entrepreneurship, and industry-real skills. Bridging education and the creative industry."`

**Step 4: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 7: About page — Hero block

**Files:**
- Modify: `src/app/about/page.tsx` (lines 144-166)

**Step 1: Replace H1**

Lines 148-151: Change to:
```
Designer & animator by training.
Creative entrepreneur by choice.
```

**Step 2: Replace lede**

Lines 152-155: Change to: `"I build stories, teams, and experiments. My foundation is creative direction and storytelling. My current curiosity lives in creative technology, human-centred AI workflows, Web3, and education."`

**Step 3: Replace tags**

Lines 156-166: Change to: `"Singapore-based · Creative direction · Strategy · Creative technology · Education · Founder (Genesis Motion Design, Balance) · Adjunct Lecturer (NYP)"`

**Step 4: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 8: About page — Timeline updates

**Files:**
- Modify: `src/app/about/page.tsx` (lines 21-105)

**Step 1: Update Balance milestone (line 69-78)**

Change title from `"Founded Balance Creative"` to `"Founded Balance Creative — production structure + workflows"`

**Step 2: Update Today milestone (line 97-105)**

Change title to `"Creative entrepreneur — AI workflows + education"`
Change detail to `"Exploring creative technology, human-centred AI workflows, Web3, and education while leading creative direction."`

**Step 3: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 9: About page — Story section

**Files:**
- Modify: `src/app/about/page.tsx` (lines 126-132, 172-194)

**Step 1: Replace story paragraphs**

Lines 126-132: Replace the 5 story paragraphs with:
```
const story = [
  "I started in motion design because I loved the craft. The idea that you could make people feel something through movement, timing, and visual rhythm — that hooked me.",
  "Then I built studios. Genesis Motion Design grew from a one-person operation to a 15-person team. We shipped campaigns for brands across Asia. I learned how to lead creative direction, manage production, and build cultures that deliver.",
  "Balance Creative came next. A deliberate build — focused on production structure, workflows, and the systems that make creative work repeatable. Not just making things look good. Making things work.",
  "Along the way, I started teaching at Nanyang Polytechnic. Practice-led curriculum. Industry-real. AI-aware. I wanted to give students what I wish I had when I started.",
  "Now I'm exploring creative technology, human-centred AI workflows, and Web3. Not as buzzwords. As tools that change how we tell stories, build teams, and ship work."
];
```

**Step 2: Replace story heading**

Line 176-178: Change to `"From craft to company to what's next."`

**Step 3: Replace pullquote**

Lines 187-191: Change to: `"I build stories, teams, and experiments. The foundation is creative direction. The curiosity is what's next."`

**Step 4: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 10: About page — Disciplines section

**Files:**
- Modify: `src/app/about/page.tsx` (lines 108-124, 196-222)

**Step 1: Replace disciplines list**

Lines 108-124: Replace 15 disciplines with 5 pillars:
```
const disciplines = [
  "Narrative & Strategy",
  "Creative Direction",
  "Delivery & Stakeholders",
  "Creative Technology & AI Workflows",
  "Education"
];
```

**Step 2: Replace disciplines heading**

Lines 198-201: Change to: `"Five pillars. From narrative to technology to education."`

**Step 3: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 11: Speaking page — Intro and topics

**Files:**
- Modify: `src/app/speaking/page.tsx` (lines 94-140)
- Modify: `src/lib/speaking.ts` (lines 7-44, 170-175)

**Step 1: Replace lede paragraph**

Lines 103-107: Replace with: `"I speak about creative entrepreneurship, storytelling systems, and emerging tools. From the perspective of someone who built studios, shipped campaigns, and now teaches while exploring what's next."`

**Step 2: Remove kicker**

Line 102: Remove `"Creative Business."` or replace with empty string

**Step 3: Replace topics**

Lines 7-44 in speaking.ts: Replace `speakingTopics` array with:
```
export const speakingTopics = [
  {
    title: "Creative entrepreneurship",
    description: "Craft → company → reinvention",
    tag: "Strategy"
  },
  {
    title: "Narratives that ship",
    description: "Creative direction for complex systems",
    tag: "Creative"
  },
  {
    title: "Creative technology in practice",
    description: "Prototypes, experiences, constraints",
    tag: "Technology"
  },
  {
    title: "Human-centred AI workflows",
    description: "Clarity, tone, adoption, accountability",
    tag: "AI"
  },
  {
    title: "Education for the next creative era",
    description: "Practice-led, industry-real, AI-aware",
    tag: "Education"
  },
  {
    title: "Community + launches",
    description: "Participation loops and momentum — Web3 lessons that transfer",
    tag: "Web3"
  }
];
```

**Step 4: Replace testimonial**

Lines 170-175: Replace testimonial quote with: `"Clear, energising, and specific. Benjamin connects craft, business, and emerging tools without the hype."`

**Step 5: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 12: Credentials page

**Files:**
- Modify: `src/app/credentials/page.tsx` (lines 30-43, 104-126)

**Step 1: Replace opening paragraph**

Lines 37-41: Replace with: `"A selection of recognition and editorial mentions across motion design, creative direction, and building studios. Plus the work I'm doing now at the edge of creative technology, AI workflows, and education."`

**Step 2: Add hiring summary block**

After the Forbes section (after line 98), add a new section:
```tsx
<div className={styles.hiringSummary}>
  <span className="eyebrow">Hiring summary</span>
  <ul>
    <li>10+ years leading creative direction and shipping campaigns</li>
    <li>Founder experience. Teams, operations, budgets, growth</li>
    <li>Education experience. Practice-led curriculum + mentoring</li>
    <li>Current focus. Creative technology and human-centred AI workflows</li>
  </ul>
</div>
```

**Step 3: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 13: Contact page

**Files:**
- Modify: `src/app/contact/page.tsx` (lines 28-38)
- Modify: `src/app/contact/contact-panel.tsx` (lines 8-26, 157-161)

**Step 1: Replace page intro**

Lines 33-38 in page.tsx: Replace with: `"I'm open to conversations across innovation, strategy planning, design management, and education. I also take on selected creative direction and advisory work. If you're hiring, building an innovation function, or shaping how teams adopt new tools, I'd love to hear what you're working on."`

**Step 2: Add form options**

In contact-panel.tsx, add to PROJECT_TYPES array (line 9-17):
- `"Hiring / role opportunity"` (first item)
- `"Advisory / consulting"` (second item)

**Step 3: Update aside disciplines**

Lines 157-161: Change to: `"Innovation · Strategy · Design management · Education"`

**Step 4: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 14: Remove multilingual motif

**Files:**
- Search all files for: `你好`, `안녕하세요`, `Hello/你好/안녕하세요`

**Step 1: Search**

Run grep for multilingual strings across entire src/ directory

**Step 2: Remove any found instances**

**Step 3: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

---

## Task 15: Final QA pass

**Step 1: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`
Expected: PASS

**Step 3: Search for salesy words**

Grep for: `trustworthy`, `reliable`, `dependable`, `proven`, `world-class`, `best-in-class`, `trust me`

**Step 4: Search for SEA/Korea references**

Grep for: `SEA`, `Korea`, `Korean`, `Southeast Asia`, `burnout`, `profitability`

**Step 5: Search for multilingual remnants**

Grep for: `你好`, `안녕하세요`

**Step 6: Build**

Run: `npm run build`
Expected: Static export succeeds, 15 pages generated

**Step 7: Commit all changes**

```bash
git add -A
git commit -m "Update copy and IA across all pages — new positioning"
git push
```
