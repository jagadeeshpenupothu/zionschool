# Zion School Astro Starter

A modern, responsive school website starter built with Astro, reusable components, structured data, and Decap CMS-friendly content organization.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Structure

- `src/components` reusable interface sections
- `src/layouts` page shells and SEO defaults
- `src/pages` routes
- `src/data` structured JSON content for courses, staff, events, gallery, and testimonials
- `src/content` reserved for future Decap CMS collections
- `src/assets` local visual assets
- `src/styles` global CSS and reusable utilities

The repeated content is intentionally stored in `src/data` so it can be moved into Decap CMS collections later with minimal component changes.
