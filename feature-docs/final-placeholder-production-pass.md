# Final Placeholder Production Pass

## Purpose

This pass finalizes the site in a placeholder-production-ready state without inventing real business proof, certifications, or client project data.

## Placeholder Values Currently In Use

- Brand: `IronCore MEP`
- Legal Name: `IRON CORE ELECTROMECHANICAL WORKS AND BUILDING MAINTENANCE - L.L.C`
- Location: `Musafha, Abu Dhabi`
- Working Hours: `8:00 AM to 5:00 PM`
- Service Areas: `Onshore & Offshore`
- Phone: `+971 XX XXX XXXX`
- WhatsApp: `+971 XX XXX XXXX`
- Email: `info@ironcoremep.example`
- Address: `Musafha Industrial Area, Abu Dhabi, UAE`
- Maps Link: `https://maps.google.com/`
- Site URL placeholder: `https://ironcoremep.example`
- Social placeholders: LinkedIn/Facebook/Instagram = `#`

## Where Placeholders Are Stored

Primary source:
- `src/data/site.ts`

Consumed by:
- header/footer/navigation
- contact page and quick actions
- structured data in layout
- metadata defaults and links

## Contact Flow Behavior (Current)

- Contact methods (phone/WhatsApp/email) are primary path.
- Inquiry form is UI-only in `src/components/InquiryForm.astro`.
- No fake submission behavior is implemented.
- Form backend integration remains an explicit launch TODO.

## Projects Content Strategy (Current)

- Projects page remains representative/capability-based.
- No fake client names, case studies, or project counts are used.
- Real project visuals/content must be approved before replacement.

## SEO / Domain / Schema State

- `astro.config.mjs` default `site` is set to placeholder production URL:
  - `https://ironcoremep.example`
- Canonical and OG URLs derive from configured site URL.
- Sitemap uses configured site URL at build time.
- `robots.txt` allows crawl for configured production-style placeholder domain and disallows localhost.
- Structured data includes truthful placeholder business/contact fields from centralized data.

## Local Run Summary

1. `npm install`
2. `npm run dev`
3. `npm run build`
4. `npm run preview`

## GitHub Pages Hosting Summary

- Workflow: `.github/workflows/deploy.yml`
- Deploys on `main` push (and manual trigger).
- Uses `SITE_URL` and `BASE_PATH` workflow variables.
- Uploads `dist` and deploys via GitHub Pages actions.

## Replace Before True Public Launch

- final phone number
- final WhatsApp number
- final email
- exact address and map link
- final domain and site URL
- final logo/favicon assets
- approved project visuals/content
- social links
- contact form production handling
- any certifications/approvals only if officially verified
