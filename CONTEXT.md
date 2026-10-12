# Project Context — Harsh Aathavale Portfolio

Personal portfolio / resume website for **Harsh Aathavale** (Senior Software Engineer / AI Engineer, Mumbai). Rebuilt from a downloaded preview snapshot (`archive/downloaded-preview/`). Live at **https://www.aiharsh.com** (apex redirects to www). Hosted on Vercel; domain + DNS on Cloudflare. GitHub: `hrshhh09/resume` (branch `master`).

## Stack
- **Next.js 15** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 3** (+ PostCSS/autoprefixer), dark theme only (`<html className="dark">`)
- **lucide-react** icons; `framer-motion` installed
- Fonts: Geist / Geist Mono via `next/font/google` (`--font-geist-sans`, `--font-geist-mono`)
- Path alias: `@/*` → project root

## Commands
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build
```

## Structure
```
app/
  layout.tsx            Root layout, fonts, site metadata/OpenGraph
  page.tsx              Single-page home: sections #about, #experience, #projects, #blog, #contact
  globals.css           Tailwind layers + custom classes (.glass, .glass-strong, .section-shell, .gradient-text)
  icon.png              Favicon
  blog/page.tsx        Blog index (/blog)
  blog/[slug]/page.tsx  Static blog post pages (generateStaticParams from blogPosts)
  api/contact/route.ts  POST: validates {name,email,message}; logs to console (no email/DB yet)
  api/profile/route.ts  GET: returns profile, experiences, skillGroups, projects, blogPosts as JSON
  api/resume/route.ts   GET: streams public/resume.pdf as attachment download (404 JSON if missing)
components/
  Navbar.tsx            Client; section nav
  SectionHeading.tsx    eyebrow/title/description heading
  ContactForm.tsx       Client; posts to /api/contact
  Footer.tsx            Shared footer
lib/data.ts             SINGLE SOURCE OF TRUTH for all content
public/resume.pdf       Resume served by /api/resume
archive/                Original downloaded HTML snapshot (reference only)
.recovered-source/      JS sources recovered from the snapshot (reference only)
.tools/extract-sources.cjs  Script used to extract sources from snapshot
```

## Content (`lib/data.ts`)
Exports: `profile`, `metrics`, `experiences`, `skillGroups`, `projects` (with lucide icon components), `blogPosts` (slug/title/excerpt/content), `services`, `getBlogPost(slug)`.
- Experience: Fulcrum Digital (Senior AI Engineer, Jun 2025–present), Pertsol, Dyma.ai, EY.
- Blog posts: K8s inference serving, agentic RAG, Kafka vs RabbitMQ.
- To change site content, edit `lib/data.ts` — pages and `/api/profile` read from it.

## Styling conventions
- Dark editorial theme (#0a0a0b + subtle grid), single lime-400 accent, mono labels.
- Utility classes in globals.css: `card`, `chip`, `label`, `btn-primary`, `btn-ghost`, `input`, `section-shell`.
- Custom animations in `tailwind.config.ts`: `animate-floatSlow`, `animate-floatReverse`, `animate-fadeUp`.
- Layout container: `section-shell`.

## Known TODOs
- `profile.github` / `profile.linkedin` and project `source` links are placeholders (`https://github.com/`, `https://www.linkedin.com/`).
- Contact form only logs server-side; wire up an email provider/DB if needed.
