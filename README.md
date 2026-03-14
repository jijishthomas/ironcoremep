# IronCore MEP Website

Static Astro + Tailwind corporate website for IronCore MEP with placeholder business data prepared for final replacement before public launch.

## Tech Stack

- Astro 4 (static output)
- Tailwind CSS
- Minimal vanilla JavaScript
- GitHub Pages deployment via GitHub Actions

## Placeholder Production Values In Use

- Site URL placeholder: `https://ironcoremep.example`
- Domain placeholder: `https://ironcoremep.example`
- Phone: `+971 XX XXX XXXX`
- WhatsApp: `+971 XX XXX XXXX`
- Email: `info@ironcoremep.example`
- Address: `Musafha Industrial Area, Abu Dhabi, UAE`
- Map link: `https://maps.google.com/`
- Social placeholders: LinkedIn/Facebook/Instagram = `#`

Primary source for these values:
- [`src/data/site.ts`](/d:/workspace/html/ironcoremep/src/data/site.ts)

## Prerequisites

1. Install Node.js `20+` (recommended: latest Node 20 LTS).
2. Ensure `npm` is available in terminal.

## Local Development (Step-by-Step)

1. Open terminal in project root.
2. Install dependencies:
```bash
npm install
```
3. Start dev server:
```bash
npm run dev
```
4. Open the local URL shown in terminal (Astro default is usually `http://localhost:4321`).

## Production Build

```bash
npm run build
```

Output is generated in `dist/`.

## Preview Built Site

```bash
npm run preview
```

## GitHub Pages Hosting (Step-by-Step)

1. Push this repository to GitHub.
2. Confirm workflow exists at:
   - [`.github/workflows/deploy.yml`](/d:/workspace/html/ironcoremep/.github/workflows/deploy.yml)
3. In GitHub repo settings:
   - open `Settings -> Pages`
   - ensure source is `GitHub Actions`
4. Trigger deployment by pushing to `main` (or run workflow manually via Actions tab).
5. Optional repo variables (`Settings -> Secrets and variables -> Actions -> Variables`):
   - `SITE_URL` (default currently `https://ironcoremep.example`)
   - `BASE_PATH` (default `/`; use `/repo-name/` for project-site path hosting)
6. After workflow completes, verify:
   - site is reachable
   - navigation/routes/404 work
   - `sitemap-index.xml` exists
   - `robots.txt` output is correct for the configured `SITE_URL`

## Custom Domain Later

When a real domain is available:

1. Set `SITE_URL` variable to the real `https://yourdomain`.
2. If needed, configure GitHub Pages custom domain in repository settings.
3. If using path-based hosting, keep/update `BASE_PATH`.
4. Re-run deployment and verify canonical URLs, sitemap, and social previews.

## Replacement Checklist Before True Public Launch

- [ ] Replace phone number
- [ ] Replace WhatsApp number
- [ ] Replace email
- [ ] Replace exact address
- [ ] Replace map link
- [ ] Replace final domain / site URL
- [ ] Replace final logo assets
- [ ] Replace favicon/browser identity assets if needed
- [ ] Replace representative projects with approved real project visuals/content
- [ ] Add certifications/approvals only if officially verified
- [ ] Implement final contact form handling (or approved static method)
- [ ] Replace social placeholders with real URLs
- [ ] Run final mobile/tablet/desktop QA
- [ ] Run final build and deployment verification

## Milestone Documentation

- [Milestone 1](/d:/workspace/html/ironcoremep/feature-docs/milestone-1-foundation.md)
- [Milestone 2](/d:/workspace/html/ironcoremep/feature-docs/milestone-2-core-pages.md)
- [Milestone 3](/d:/workspace/html/ironcoremep/feature-docs/milestone-3-launch-readiness.md)
- [Milestone 4](/d:/workspace/html/ironcoremep/feature-docs/milestone-4-final-polish-and-launch-qa.md)
- [Final Placeholder Production Pass](/d:/workspace/html/ironcoremep/feature-docs/final-placeholder-production-pass.md)
- [Replacement Map](/d:/workspace/html/ironcoremep/docs/replacement-map.md)
