# Roadmap

## Phase 1 — Public Website Foundation

- Stronger visual homepage.
- Harvested Cutler images.
- Service sections.
- Commercial-first positioning.
- Residential division.
- Gallery/stories.
- Contact/quote forms.
- Review-source cards.

## Phase 2 — Estimate + Project Tools

- Calculators.
- Plant/product catalog.
- Project cart.
- Quote request flow.
- AI Yard Builder UI scaffold.

## Phase 3 — Customer Portal MVP

- Customer login.
- Customer properties.
- Service requests.
- Customer photo uploads.
- Estimate/invoice visibility.
- Request history.

## Phase 4 — Worker Portal MVP

- Worker login.
- Assigned jobs.
- Before/after photo upload.
- Checklist completion.
- Job notes.
- Job completion proof.

## Phase 5 — Admin Dashboard MVP

- Customers.
- Properties.
- Service requests.
- Jobs.
- Estimates.
- Invoices.
- Photo review.
- Basic status tracking.

## Phase 6 — Payments + Invoicing

- Invoice creation.
- Payment provider integration.
- Invoice statuses.
- Customer payment portal.
- Recurring billing planning.

Candidate providers: Stripe, Square, QuickBooks integration, and manual invoice recording. Do not store raw card data.

## Phase 7 — AI Yard Builder Backend

- Real uploaded image processing.
- AI concept generation.
- Saved concepts.
- Conversion from concept to estimate.

## Phase 8 — Business Reporting / P&L

- Revenue reports.
- Paid/unpaid invoices.
- Service category reporting.
- Job profitability estimates.
- Recurring revenue.
- Materials/labor tracking.


## Platform expansion roadmap

The Cutler roadmap above is the implementation path for the first business instance. See [PRODUCT-ROADMAP.md](PRODUCT-ROADMAP.md) for the larger path from Cutler public site to reusable business templates, multi-business instances, AI onboarding, and voice/chat-based business building.

The key sequencing rule is: prove the operational model in Cutler first, then extract reusable platform pieces into configurable templates. Do not turn the repo vague or generic before Cutler works.

## AI Design Consultation Roadmap Update

- Replace immediate image generation with staged intake, chat, brief approval, and generation gate.
- Connect `/api/design/chat`, `/api/design/brief`, and `/api/design/generate` to the selected provider behind server-only keys.
- Persist `DesignSession` records to customer accounts, properties, uploaded photos, saved concepts, project carts, estimate requests, and admin dashboard queues.
- Add real cost controls: one initial concept, confirmation for multi-image variations, and reuse of approved design briefs.
