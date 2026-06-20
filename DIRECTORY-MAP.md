# Directory Map

## Current important directories

- `app/` — Next.js routes for the public app and current UI flows.
- `app/api/` — server API routes, including upload and AI scaffold routes.
- `lib/` — shared server/client helpers and MVP data.
- `public/images/` — public image asset guidance.
- `public/uploads/` — current local upload target; not appropriate for unprotected private production uploads without auth/storage changes.
- `scripts/` — utility scripts such as asset harvesting.

## Future recommended directories

- `app/(public)/` — public marketing pages.
- `app/(customer)/` — authenticated customer portal.
- `app/(worker)/` — authenticated worker / crew portal.
- `app/(admin)/` — authenticated admin / owner dashboard.
- `app/api/private/` — private server routes guarded by roles.
- `lib/auth/` — authentication and role checks.
- `lib/db/` — database client, schema, and repositories.
- `lib/storage/` — local/S3/R2/Supabase storage abstraction.
- `lib/payments/` — payment-provider integration adapters.
- `lib/ai/` — AI provider adapters and prompt builders.
- `lib/reporting/` — reporting queries and export helpers.

## Rule of thumb

Public marketing pages can be optimized for presentation. Business operations must be modeled as authenticated, database-backed workflows.
