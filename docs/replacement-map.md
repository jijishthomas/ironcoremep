# Replacement Map Before Production Launch

This map lists placeholder-driven items and where to update them.

## 1) Business Contact & Identity Data

Primary source: `src/data/site.ts`

- `company.phone`
- `company.phoneHref`
- `company.whatsapp`
- `company.whatsappHref`
- `company.email`
- `company.emailHref`
- `company.address`
- `company.mapLink`
- `company.siteUrl`
- `company.primaryDomain`
- `company.socialLinkedIn`
- `company.socialFacebook`
- `company.socialInstagram`
- `company.logoPath`
- `company.logoAlt`

## 2) Components Consuming Business Data

- `src/components/Header.astro`
- `src/components/MobileNav.astro`
- `src/components/Footer.astro`
- `src/pages/contact-us.astro`
- `src/layouts/MainLayout.astro` (structured data fields)

## 3) Brand Assets

- Placeholder logo file: `public/images/logo-placeholder.svg`
- Placeholder social image: `public/images/og-placeholder.svg`
- Placeholder favicon: `public/favicon.svg`
- Manifest icon reference: `public/site.webmanifest`

If final logo files change names/paths, update:

- `src/data/site.ts` (`company.logoPath`)
- `public/site.webmanifest` (icons list)

## 4) Projects/Portfolio Content

Representative-only project content currently lives in:

- `src/pages/projects.astro`

Replace representative entries with approved project references only when real data is confirmed.

## 5) Contact Form Handling

Current form is UI-only in:

- `src/components/InquiryForm.astro`

Before launch, choose one production-safe approach:

- backend/API form handling
- approved static submission alternative
- mailto/WhatsApp-first workflow

## 6) Validation Steps After Replacement

- Run `npm run build`
- Verify `dist/sitemap-index.xml` URLs are correct for final `SITE_URL`
- Verify `dist/robots.txt` allows crawling on production domain
- Spot-check header/footer/contact page links and quick actions
- Validate social preview image and browser tab identity
