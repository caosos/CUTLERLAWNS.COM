# Invoicing and Payments

## Planned capabilities

The platform should eventually support:

- estimates;
- invoices;
- invoice statuses;
- online payment links;
- payment history;
- recurring billing;
- partial payments if needed;
- invoice PDFs;
- customer invoice portal.

## Candidate providers

Payment integration should be planned but not hardcoded until chosen. Candidate providers include:

- Stripe;
- Square;
- QuickBooks integration;
- manual invoice recording.

## Rules

- Do not implement fake payment logic.
- Do not store raw credit-card data.
- Payment data must be handled by a real payment provider.
- API keys and payment secrets must never be exposed client-side.
- Invoice/payment statuses should be database records and should reconcile with provider events when integrated.
