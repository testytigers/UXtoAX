# uxintoax.com

**The media brand for UX designers transitioning into the Agent Experience (AX) era.**

## Project Structure

```
uxintoax/
├── content-tracker.json      # Task progress tracker (auto-updated by Hermes)
├── docs/                     # Style guides, templates, microcopy, planning docs
│   ├── STYLE_GUIDE.md        # F-01: Editorial style guide
│   ├── CONTENT_BRIEF_TEMPLATE.md   # F-02: Content brief template
│   └── ...                   # X-01 through X-05 outputs
├── src/pages/                # MDX article files
│   ├── what-is-ax.mdx        # F-03: Canonical AX definition page
│   ├── a-01-...mdx           # Phase 1+ articles
│   └── ...
├── content/jobs/             # Job listing JSON files
├── content/skills/           # Skills data JSON files
└── scripts/                  # Automation scripts for the content pipeline
```

## Content Pipeline

Managed by Hermes Agent via `content-tracker.json`. Each task tracks:
- Phase assignment
- Status (pending → in_progress → completed)
- Output file path
- Completion timestamp

## Content Pillars

1. **DEFINE AX** — What is AX, principles, frameworks, history
2. **CAREER** — UX → AX transition, jobs, salaries, interviews
3. **TOOLS** — AI tools, workflows, stack, comparisons
4. **SKILLS** — What to learn, how to learn it, data-driven
5. **CASE STUDIES** — Real AX in the wild, breakdowns, teardowns
6. **INDUSTRY** — News, trends, company moves, research digests

## Content Types

| Type | Length | Freq |
|---|---|---|
| Pillar Post | 2,500–4,000w | 2/mo |
| Quick Answer | 600–900w | 4/mo |
| Tool Review | 1,200–1,800w | 4/mo |
| Data Post | 1,000–1,500w | 2/mo |
| Teardown | 1,500–2,500w | 2/mo |
| Career Guide | 1,500–2,500w | 2/mo |
| News Digest | 400–600w | 4/mo |

## Revenue Model

```
Layer 1: Traffic → SEO + AEO → organic readers
Layer 2: List → Newsletter → owned audience
Layer 3: Trust → Free content → authority + brand
Layer 4: Revenue → Job board + Courses + Sponsorships + Consulting
```

## Running with Hermes

Send prompts to Hermes with task IDs (e.g., `F-01`, `A-01`). The agent reads
`content-tracker.json` to know what's been done and what's next.

## The $10M Blogger's Rules

1. **The list is the business.** Every article's real job is to get an email.
2. **Publish ugly, improve fast.** 70% published beats 100% in draft.
3. **One topic, 10 angles.** Repurpose everything across formats.
4. **Update beats create.** Updated 2-year-old posts rank faster than new ones.
5. **Your best article is your next one.** Don't wait for perfect.
6. **Data is your moat.** Skills charts + job board data = unique authority.
7. **The job board is the engine.** 500 listings = SEO compounding. 1,000 = media brand.
