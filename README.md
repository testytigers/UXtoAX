# uxintoax.com

The platform for UX designers transitioning into Agent Experience (AX) design.

## Stack

- **Astro** — static site generator with MDX content
- **Tailwind CSS v3** — utility-first styling
- **D3.js** — skills demand charts (loaded from CDN)
- **Fuse.js** — client-side job board filtering (loaded from CDN)
- **Cloudflare Pages** — hosting and edge deployment

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## Build

```bash
npm run build
```

Output goes to `./dist`. Preview with `npm run preview`.

## Deploy to Cloudflare Pages

### Option 1: Git integration (recommended)

1. Push this repo to GitHub or GitLab.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com), go to **Pages → Create a project → Connect to Git**.
3. Select your repo.
4. Set:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

Cloudflare Pages will auto-deploy on every push to your main branch.

### Option 2: Direct upload via Wrangler CLI

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=uxintoax
```

### Custom domain

1. In Cloudflare Pages, go to your project → **Custom domains**.
2. Add `uxintoax.com` and `www.uxintoax.com`.
3. Cloudflare handles SSL automatically.

## Project structure

```
src/
├── pages/
│   ├── index.astro           ← Homepage
│   ├── what-is-ax.astro      ← AX definition page
│   ├── jobs/index.astro      ← Job board with Fuse.js filtering
│   ├── skills/index.astro    ← Skills demand charts (D3.js)
│   └── blog/
│       ├── index.astro       ← Blog listing
│       └── [slug].astro      ← Blog post template
├── components/
│   ├── Nav.astro             ← Sticky nav with blur-on-scroll
│   ├── Footer.astro
│   ├── JobCard.astro
│   ├── SkillsChart.astro     ← D3 horizontal bar chart
│   ├── BlogCard.astro
│   └── SubscribeForm.astro   ← Email capture (wire to Buttondown/ConvertKit)
├── layouts/
│   ├── Base.astro            ← HTML shell + SEO + JSON-LD
│   └── BlogPost.astro        ← Blog post layout
├── content/
│   ├── blog/                 ← MDX blog posts
│   └── jobs/                 ← JSON job listings
└── data/
    └── skills.json           ← Weekly/monthly/quarterly/yearly skills data
```

## Adding content

### New blog post

Create a file in `src/content/blog/your-slug.mdx`:

```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
description: "150-char description for SEO"
category: "AX Fundamentals"  # or Career / Tools & Workflow / AI & Design / Case Studies
author: "uxintoax"
publishedAt: "2025-06-01"
updatedAt: "2025-06-01"
readTime: 5
featured: false
faqs:
  - q: "Question?"
    a: "Answer."
---

Your content here in MDX.
```

### New job listing

Create a file in `src/content/jobs/job-006.json`:

```json
{
  "id": "job-006",
  "title": "UX Designer",
  "company": "Company Name",
  "location": "City, Country",
  "workType": "remote",       // remote | hybrid | on-site
  "experienceLevel": "mid",   // junior | mid | senior | lead | principal
  "roleType": "ux-designer",  // ux-designer | ux-researcher | ux-writer | product-designer | ax-designer
  "salary": "$X – $Y",
  "skills": ["Figma", "Research"],
  "description": "Short description (2 lines max).",
  "applyUrl": "https://...",
  "postedAt": "2025-06-01",
  "featured": false
}
```

## Subscribe form

The subscribe form outputs email to `console.log` by default. To wire to Buttondown:

1. Get your API key from [buttondown.email](https://buttondown.email).
2. In `src/components/SubscribeForm.astro`, uncomment the `fetch` block and replace `YOUR_API_KEY`.

## Environment

No environment variables required for a static build. All data is local.

## License

MIT
