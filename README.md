# Cutler Lawns Business Operations Platform

Cutler Lawns / **Cutler Property Preservation & Landscape Services** is being built as a self-hosted full-stack business operations platform for `cutlerlawns.com`.

The public landscaping website is only one part of the system. The long-term product is a private, database-backed operating tool that helps the owner win leads, convert them into estimates, schedule work, verify completion, invoice customers, accept payments through a real provider, and understand business performance.

## Core mission

Build a complete business tool for a landscaping and property-services company, not just a brochure site. The platform should help the owner:

- get new leads from a premium commercial-first public website;
- convert leads and AI/project-cart ideas into estimates;
- manage customer accounts, properties, recurring maintenance, and service history;
- assign jobs to workers or crews;
- verify job completion with before/after photos, checklists, notes, material usage, labor time, and timestamps;
- respond to customer complaints with documented proof;
- issue invoices, track payment status, and eventually accept online payments;
- track revenue, outstanding balances, job profitability, and basic P&L signals;
- support AI-powered yard design concepts and project planning.

## Public-facing side

The public site should continue to include:

- premium commercial-first homepage;
- residential division pages;
- property preservation and winter services;
- gallery/stories and service pages;
- review-source trust section;
- contact and quote request forms;
- AI Yard Builder marketing section;
- calculators;
- project cart / estimate builder.

## Private platform side

The private side should eventually include:

- customer portal;
- worker / crew portal;
- admin / owner dashboard;
- service request system;
- job and work-order system;
- before/after proof workflow;
- estimates, invoices, payment-provider integration points, and recurring billing planning;
- product / plant / project cart management;
- AI yard design request management;
- P&L / business reporting.

See the dedicated planning docs:

- [START-HERE.md](START-HERE.md)
- [MISSION.md](MISSION.md)
- [BUSINESS-PLATFORM.md](BUSINESS-PLATFORM.md)
- [ROADMAP.md](ROADMAP.md)
- [ARCHITECTURE.md](ARCHITECTURE.md)
- [DATA-MODEL.md](DATA-MODEL.md)
- [SECURITY-PRIVACY.md](SECURITY-PRIVACY.md)

## Architecture direction

Preferred direction:

- Next.js app, not a static-only site;
- server-side routes/actions for private operations;
- database-backed business data;
- local upload storage first, behind a storage abstraction that can later move to S3, Supabase Storage, or Cloudflare R2;
- environment variables for secrets;
- role-based access control for public visitors, customers, workers, crew leads, admins, and owners;
- future Stripe, Square, QuickBooks, and AI image-provider integration points.

Do **not** hardcode fake payment logic. Do **not** store raw credit-card data.

## Self-hosted deployment

This app is designed for a normal Node server you control. It does not depend on GitHub Pages or Vercel.

```bash
npm install
npm run build
PORT=3000 npm run start
```

`next.config.mjs` uses `output: 'standalone'` for server deployment packaging.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local`. Keep all secrets server-side.

- `AI_PROVIDER=mock` by default for placeholder concepts.
- Add future provider keys such as `OPENAI_API_KEY` only on the server.
- Add future payment keys only after a real provider is selected.
- Review credentials can be connected later for Birdeye/Google Business Profile.

## Uploads

The upload API currently stores local files in `/public/uploads/` through `app/api/uploads/route.ts` and `lib/storage.ts`. This is acceptable for early self-hosting, but private customer uploads, worker proof photos, and AI design uploads should move behind authenticated access and a storage abstraction before production use.

## Implemented vs planned

Implemented/scaffolded today:

- Next.js self-hosted app;
- commercial-first homepage;
- AI studio UI and API routes;
- local upload handling;
- product/plant catalog;
- project cart quote form UI;
- estimate calculators;
- gallery/story/video/pamphlet placeholders;
- review-source pages;
- asset documentation.

Planned platform modules:

- authenticated customer portal;
- worker / crew portal;
- admin / owner dashboard;
- database-backed service requests, jobs, estimates, invoices, payments, and reports;
- real payment-provider integration;
- real AI image generation and saved customer concepts.

## AI Yard Planner mock mode

The design page uses a staged AI Design Consultation flow. Set `AI_PROVIDER=mock` to keep chat, brief, and concept generation in scaffold mode. Mock generation returns polished text concept cards with an "Image generation backend pending" label instead of broken image placeholders.
