# Architecture

## Direction

This project should be built as a self-hosted full-stack app. Do not make architecture decisions that trap it as a static site.

Preferred stack direction:

- Next.js app;
- server-side routes/actions for private operations;
- database-backed business data;
- local storage first for uploads if needed;
- storage abstraction so uploads can later move to S3, Supabase Storage, or Cloudflare R2;
- environment variables for secrets;
- role-based access control;
- future Stripe/Square/QuickBooks integration points;
- future AI image provider integration.

## Application areas

- Public marketing site.
- Customer portal.
- Worker / crew portal.
- Admin / owner dashboard.
- API/server actions for private data mutations.
- Upload pipeline for private and public-approved media.
- Reporting layer for revenue, invoices, labor, materials, and profitability.

## Data persistence

The platform should move from static in-code data toward a real database. Business records such as users, customers, properties, jobs, estimates, invoices, payments, recurring services, uploaded photos, and labor/material entries should be persisted.

## Upload storage

Early self-hosted uploads can use local disk, but the code should keep a storage abstraction. Private uploads must not be served as public assets without authorization. Public gallery media should only be shown after approval.

## Integrations

Plan integration points, but do not overbuild them first:

- Payments: Stripe, Square, QuickBooks, or manual recording.
- AI image generation: provider chosen later and called server-side only.
- Reviews: Birdeye, Google Business Profile, or manual review-source cards.
- Accounting/reporting: exports first, deep accounting later.

## Access control

All private operations must enforce roles server-side. UI hiding is not enough.
