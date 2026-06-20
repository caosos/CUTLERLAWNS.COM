# Start Here

## What this project is

CUTLERLAWNS.COM is becoming a self-hosted business operations platform for Cutler Lawns / Cutler Property Preservation & Landscape Services. Cutler is the first focused implementation and proof-of-concept for a larger configurable business launcher and operations platform for local service companies.

Do not treat it as only a public marketing website. The public site is the lead-generation layer. The bigger goal is an operations platform that tracks customers, properties, service requests, jobs, proof photos, estimates, invoices, payments, recurring maintenance, AI yard concepts, and business performance. Long-term, the same platform patterns should support other service businesses such as handyman, cleaning, pressure washing, painting, mobile mechanic, pest control, pool maintenance, junk removal, moving, and small contractor services.

## Current implementation rule

Do not try to build the entire platform in one commit. Documentation, architecture alignment, data models, authentication, and dashboard shells should come before complex integrations. Keep the immediate implementation grounded in Cutler, but avoid decisions that would make future business templates impossible.

## Recommended next implementation step

Build the database/data model scaffold and authenticated dashboard shell. Do not implement payments or real AI generation until the core structure is stable.

## Key docs

1. [PLATFORM-VISION.md](PLATFORM-VISION.md) — larger reusable platform vision.
2. [MISSION.md](MISSION.md) — product mission and priorities.
3. [BUSINESS-TEMPLATES.md](BUSINESS-TEMPLATES.md) — vertical template model and examples.
4. [VERTICALS.md](VERTICALS.md) — likely future service-business verticals.
5. [PRODUCT-ROADMAP.md](PRODUCT-ROADMAP.md) — platform roadmap from Cutler to reusable templates.
6. [BUSINESS-PLATFORM.md](BUSINESS-PLATFORM.md) — full Cutler platform module plan.
7. [ROADMAP.md](ROADMAP.md) — Cutler implementation roadmap.
8. [ARCHITECTURE.md](ARCHITECTURE.md) — full-stack architecture direction.
9. [DATA-MODEL.md](DATA-MODEL.md) — future entities and high-level fields.
10. [SECURITY-PRIVACY.md](SECURITY-PRIVACY.md) — privacy, access-control, uploads, and payment rules.

## Product boundaries

- Public visitor features can be visible without login.
- Customer, worker, crew, admin, and owner features must be authenticated.
- Private business data must be database-backed.
- Internal notes must remain internal unless explicitly marked customer-visible.
- Payment processing must be handled by a real provider; never store raw credit-card data.
- Public gallery photos must be approved before display.
