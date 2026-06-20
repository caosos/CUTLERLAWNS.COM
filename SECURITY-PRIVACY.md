# Security and Privacy

## Access roles

Future roles:

- public visitor;
- customer;
- worker;
- crew lead;
- admin;
- owner/superadmin.

Each role should have different access. Roles must be enforced server-side.

## Privacy rules

- Customer uploads are private.
- Worker proof photos are private by default.
- Public gallery photos must be approved before display.
- Customer addresses must not be exposed publicly.
- Payment data must be handled by a real payment provider.
- API keys must never be exposed client-side.
- AI uploads should be stored securely.
- Worker/customer roles must be enforced server-side.
- Internal notes must stay internal unless explicitly marked customer-visible.

## Financial data

Workers should not see financial reports unless explicitly allowed. Customers should only see their own estimates, invoices, payments, and payment links.

## Uploads

Private uploads should not be stored in a public web path in production unless protected by authorization checks. Storage should support private object keys and signed/authorized retrieval.
