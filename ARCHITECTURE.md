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

## Long-term platform separation

Long-term, the architecture should separate three concerns:

1. **Core Platform** — shared reusable system for auth, users, roles, customer portal, worker portal, admin dashboard, service requests, jobs, invoices, payments, media uploads, reporting, notifications, content management, and AI provider abstraction.
2. **Vertical Templates** — industry-specific configuration for landscaping, handyman, cleaning, pressure washing, painting, mobile mechanic, pest control, pool maintenance, junk removal, moving, and other local service businesses.
3. **Business Instance** — each configured customer/business with its own brand name, logo, colors, services, pages, images, employees, customers, invoices, settings, and operating preferences.

## Cutler as the first business instance

Cutler should be modeled as:

- **Vertical template:** landscaping / property services.
- **Business instance:** Cutler Lawns / Cutler Property Preservation & Landscape Services.
- **Market:** Central Arkansas.
- **Positioning:** commercial-first with a residential division.
- **Differentiators:** AI Yard Builder, property maintenance operations, proof photos, project planning, and commercial property support.

## Reuse-oriented architecture guardrails

Avoid hardcoding everything specifically to Cutler when a data-driven structure is practical and does not slow down the first implementation. Examples:

- services should come from data/config;
- calculators should be modular;
- portal features should be role-based;
- public pages should be content-driven where practical;
- product/service catalogs should be reusable;
- job workflows should support industry-specific statuses and checklists;
- AI providers should be abstracted behind server-side interfaces;
- media storage should use an abstraction instead of direct public-file assumptions.

Do not overgeneralize prematurely. Cutler must remain the working first product, and abstractions should be extracted only where they clearly support the Cutler implementation or prevent obvious future lock-in.
