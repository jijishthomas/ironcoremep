# IronCore MEP Website - Milestone 4

## Milestone Goal

Final launch-readiness polish focused on SEO, schema safety, responsiveness, accessibility, deployment clarity, and replacement readiness.

## What Was Improved

### 1) Site-Wide UX and Consistency

- CTA usage standardized further around `Request a Quote`
- footer contact area improved with quick-action links
- mobile menu width and usability refined for small screens
- homepage wording updated to remove stale milestone references

### 2) Technical SEO Polish

- `SeoHead` enhanced with:
  - `og:site_name`
  - `og:locale`
  - optional `noindex` support
- canonical and OG handling retained consistently through layout
- custom `404` page set to `noindex`
- robots behavior improved:
  - localhost returns disallow rules
  - placeholder production domain (`https://ironcoremep.example`) returns allow + sitemap

### 3) Structured Data Refinement

- LocalBusiness schema remains centralized in `MainLayout`
- schema now uses `src/data/site.ts` values
- schema includes stable placeholder-production fields:
  - name/legal name
  - telephone/email placeholders
  - street/locality/region/country placeholders
  - locality/region/country
  - area served
  - site URL and logo reference

### 4) Accessibility and Responsive Fixes

- global focus-visible ring styles added for interactive controls
- nav links now include `aria-current="page"` on active routes
- mobile menu summary has accessible label
- contact form improved with autocomplete attributes and clearer status messaging

### 5) Browser Identity / Utility Pages

- replaced default favicon with project-aligned placeholder icon
- added `site.webmanifest`
- added custom 404 page matching site design with useful recovery links
- added `theme-color`, manifest, and apple-touch icon references in layout

### 6) Deployment and Launch Readiness

- robots behavior now safer for non-production placeholder domain usage
- replacement map documented in `docs/replacement-map.md`

## What Still Blocks True Production Launch

- final phone, WhatsApp, email, exact address, and map link not yet provided
- final logo assets not yet provided
- approved project visuals/case references not yet provided
- production form handling decision not finalized
- real production domain not yet confirmed for `SITE_URL`

## Launch QA Checklist

- [ ] Replace contact placeholders in `src/data/site.ts`
- [ ] Replace logo and branding image placeholders
- [ ] Add approved project references/visuals
- [ ] Decide and implement final contact form handling
- [ ] Set final `SITE_URL` and optional `BASE_PATH` for deployment
- [ ] Build and verify `sitemap-index.xml` and `robots.txt`
- [ ] Validate social preview and favicon on production domain
- [ ] Run final mobile/tablet/desktop QA pass
- [ ] Run final keyboard navigation and focus-state QA
- [ ] Run final GitHub Pages deployment verification
