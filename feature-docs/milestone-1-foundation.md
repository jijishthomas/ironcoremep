# IronCore MEP Website - Milestone 1

## Project Purpose

Build a professional static corporate website for IronCore MEP to:

- present the company credibly in the UAE market
- clearly communicate service categories
- support lead and inquiry generation
- provide a scalable foundation for upcoming service-detail milestones

## Business Facts Used (Source of Truth)

- Brand Name: `IronCore MEP`
- Legal Name: `IRON CORE ELECTROMECHANICAL WORKS AND BUILDING MAINTENANCE - L.L.C`
- Location: `Musafha, Abu Dhabi`
- Working Hours: `8:00 AM to 5:00 PM`
- Service Areas: `Onshore & Offshore`

## Stack

- Astro 4
- Tailwind CSS
- Static output for GitHub Pages
- `@astrojs/sitemap` for sitemap generation

## Milestone 1 Status

Milestone 1 is implemented with:

- project foundation and static setup
- reusable layout/component structure
- responsive global navigation and footer
- production-quality homepage shell
- routable internal page stubs
- SEO base metadata support, OG defaults, robots, and sitemap integration
- GitHub Pages deployment workflow
- project documentation

## Current Page Structure

- `/` Home
- `/about-us`
- `/services`
- `/hvac-services`
- `/fire-alarm-systems`
- `/electromechanical-works`
- `/building-maintenance`
- `/projects`
- `/contact-us`

## How to Run

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment Notes

- Workflow: `.github/workflows/deploy.yml`
- `SITE_URL` and `BASE_PATH` are env-configurable in `astro.config.mjs`
- Replace `SITE_URL` placeholder before production deployment

## Placeholder Items to Replace Later

The following placeholders are intentional and must be replaced in a future milestone:

- Phone number (`+971 XX XXX XXXX`)
- WhatsApp number (`+971 XX XXX XXXX`)
- Email (`info@ironcoremep.example`)
- Exact address and map link
- Final production logo asset
- Real approved project images/content

## Compliance and Claim Constraints Applied

Milestone 1 intentionally avoids unverified claims:

- no authority approvals
- no government registration claims
- no ADCD/Civil Defence approval claims
- no certifications (ISO or otherwise)
- no fabricated years, project counts, or testimonials

## Milestone 2 Backlog

- expand all internal service pages with full production content
- complete projects page with approved data
- complete contact page sections and map integration
- replace all placeholders with final business information
- integrate final logo/brand assets
- add final content polish and conversion optimization
