# IronCore MEP Website - Milestone 3

## Milestone Focus

Milestone 3 targets launch-readiness improvements with emphasis on:

- full Projects page implementation (without fake portfolio claims)
- full Contact page implementation (with placeholder-ready inquiry UX)
- placeholder business detail consistency cleanup
- logo/brand integration cleanup
- CTA and conversion flow consistency improvements

## Key Pages Completed

- `src/pages/projects.astro`
  - rebuilt with representative project-type cards
  - sector support section
  - delivery approach/process section
  - professional portfolio placeholder notice
  - stronger service and contact CTA paths

- `src/pages/contact-us.astro`
  - expanded contact methods and quick-action cards
  - polished static inquiry form UI (no fake submission behavior)
  - location/service coverage section
  - contact FAQ section
  - conversion-focused CTA and links to services/projects

## Placeholder Data Strategy

Business placeholder data is centralized in `src/data/site.ts` and reused across shared layout/components:

- brand and legal names
- location, working hours, service area
- placeholder phone, WhatsApp, email, address, map
- logo path/alt placeholder metadata
- shared CTA labels

This improves maintainability and makes pre-launch replacement straightforward.

## Logo Handling Status

- Current logo is placeholder-based (`/public/images/logo-placeholder.svg`).
- Header and footer both use centralized logo constants from `src/data/site.ts`.
- Final production logo asset is still pending and can be swapped by updating `logoPath` and related file(s).

## Claims and Safety

Milestone 3 continues to avoid unverified claims:

- no approvals/certifications
- no client names or fake case studies
- no fake project counts/testimonials/awards

Projects content is explicitly framed as representative capability scope, not named project portfolio evidence.

## Content to Replace Before Launch (Checklist)

- [ ] Final phone number
- [ ] Final WhatsApp number
- [ ] Final email address
- [ ] Exact address and map link
- [ ] Approved project photos/case studies
- [ ] Final logo asset (if still placeholder)
- [ ] Any officially approved certifications/approvals (only if provided)
- [ ] Contact form backend or intentional static handling decision for production

## Remaining Scope for Milestone 4

- replace all placeholder business details with final approved values
- integrate final logo and brand image assets
- final SEO/schema/performance refinement pass
- deployment/domain production readiness checks
- launch QA checklist and responsive/device validation
