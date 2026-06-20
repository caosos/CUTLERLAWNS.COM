# Self-Hosting

## Goal

The platform should run on infrastructure controlled by the business owner or operator, with no requirement for Vercel or GitHub Pages.

## Baseline deployment

```bash
npm install
npm run build
PORT=3000 npm run start
```

## Production needs

A production deployment should eventually include:

- Node.js server for Next.js;
- database service;
- persistent upload storage;
- HTTPS reverse proxy;
- environment-variable management;
- backups for database and uploads;
- log retention;
- server-side secrets only.

## Uploads

Local disk is acceptable for early self-hosting, but production must treat customer uploads, worker proof photos, invoices, and AI source images as private records. Keep a storage abstraction so files can move later to S3, Supabase Storage, or Cloudflare R2.

## Payments

Payment credentials must never be exposed client-side. The app should use hosted payment pages or provider SDK flows from Stripe, Square, QuickBooks, or another selected provider. Never store raw card data.
