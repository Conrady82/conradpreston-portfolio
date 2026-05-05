---
stakes: low
sensitive_paths: []
---

# conradpreston-portfolio — SPEC

## What & Why
Personal portfolio + showcase site for Conrad Preston (Senior Software Engineer), live in production at `conradpreston.dev` on Vercel. Single-page Next.js 16 (App Router) + Tailwind v4 + Framer Motion site composed of Nav / Hero / About / Projects / Skills / Contact / Footer. The site is the public face for hiring, freelance, and open-source visibility — not a product. This SPEC governs *continuous, small, reversible iteration*: SEO, social-share, observability, accessibility, and content-freshness improvements applied as small slices over time. No redesign. No regulated data. A serverless Vercel function may be introduced later solely to deliver the contact form to the owner's email; otherwise the site stays static.

## Current State (surveyed)
- Stack: Next.js 16.1.6, React 19, Tailwind v4, Framer Motion 12, TypeScript 5
- Routing: App Router; single route `app/page.tsx` composing components
- Components: Nav, Hero, About, Projects, Skills, Contact (non-functional placeholder — no Formspree endpoint, no API route), Footer
- Metadata: partial OpenGraph in `app/layout.tsx` (title/description/url/siteName/type) — missing og:image, twitter card, robots, canonical, sitemap, JSON-LD
- Tests: none (no jest/vitest/playwright config, no `tests/`, no `__tests__`)
- CI: none (no `.github/workflows/`) — OK to add
- Deploy: Vercel (`vercel.json`, `.vercel/`)
- Canonical domain: `conradpreston.dev` (the brief's `.com` was a slip; README + layout already reference `.dev`)
- Lessons file: `LESSONS.md` exists, empty of entries

## Done Means (per-slice; site-level invariants)
- [ ] `npm run build` exits 0 on every slice
- [ ] Every slice is reversible by reverting a single small commit/PR
- [ ] No slice introduces a new runtime backend beyond Vercel-native (static + optional Vercel serverless functions only)
- [ ] Each slice declares its own machine-verifiable check (e.g., curl returns og:image meta tag, Lighthouse CI score ≥ threshold, sitemap.xml served at /sitemap.xml)
- [ ] Visual layout of existing components unchanged unless slice explicitly says so
- [ ] Any new domain references use `conradpreston.dev`

## Roadmap Themes (slices drawn from these; not ordered, not exhaustive)
1. SEO + social — complete OpenGraph (og:image), Twitter card, canonical URL pinned to `conradpreston.dev`, robots.txt, sitemap.xml, JSON-LD Person schema
2. Observability — Lighthouse CI in `.github/workflows/`, performance budget, basic web-vitals reporting
3. Quality gates — minimal CI in `.github/workflows/` (typecheck + build) on PR; optional Playwright smoke for "page renders, all sections present"
4. Content freshness — Projects/About content updates as new work ships (low-friction edit path)
5. Accessibility — alt text audit, keyboard nav check, prefers-reduced-motion respect for Framer Motion
6. Contact deliverability — wire the Contact form to deliver messages to the owner's email; simplest path is a Vercel serverless route (mailto fallback acceptable as an intermediate). Tracked, not slice 1.
7. Domain + canonical hygiene — ensure all references use `conradpreston.dev`; remove any `.com` drift if it appears

Slice 1 is intentionally deferred to the slice-planner; user has hinted at OpenGraph completion or Lighthouse CI as good candidates.
