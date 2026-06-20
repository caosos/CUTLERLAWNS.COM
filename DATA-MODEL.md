# Data Model Planning

This is high-level planning. Exact schemas can change during implementation.

## Core entities and expected fields

- `User`: id, name, email, phone, password/session identity, role ids, status, timestamps.
- `Role`: id, name, permissions, description.
- `Customer`: id, user id, contact info, billing info, status, notes.
- `Property`: id, customer id, address, access notes, service notes, map/location metadata, active status.
- `ServiceRequest`: id, customer id, property id, category id, urgency, notes, preferred date/time, uploaded photo ids, status, admin decision.
- `Estimate`: id, customer id, property id, service request id, line items, subtotal, taxes/fees, total, status, expiration, approval timestamp.
- `Invoice`: id, customer id, property id, estimate id, job id, line items, total, balance due, due date, status, pdf path, payment link.
- `Payment`: id, invoice id, provider, provider reference, amount, status, paid at, method summary, notes.
- `Job`: id, customer id, property id, service type/category, scheduled date/time, assigned crew/worker, status, checklist, invoice id, completion timestamp.
- `JobPhoto`: id, job id, uploader id, type before/after/issue/AI/source, storage key, visibility, approved for gallery flag, timestamps.
- `JobNote`: id, job id, author id, body, visibility internal/customer-visible, timestamps.
- `Worker`: id, user id, phone, active status, skills, notes.
- `Crew`: id, name, crew lead id, worker ids, active status.
- `Product`: id, name, category, description, unit, price estimate, active status, image.
- `Plant`: id, name, botanical name, sunlight/water needs, category, zone notes, price estimate, image.
- `ProjectCart`: id, customer/session id, property id, selected products/plants/features, AI concept id, notes, status.
- `AIConcept`: id, customer id, property id, source photo ids, generated image ids, selected items, prompt metadata, status, estimate id.
- `GalleryItem`: id, title, description, media path, source job/photo id, approval status, public visibility, tags.
- `Pamphlet`: id, title, file path, description, category, public visibility.
- `ReviewSource`: id, provider, display name, url, rating summary, active status.
- `ServiceCategory`: id, name, description, public/private visibility, checklist template.
- `MaintenancePlan`: id, name, frequency, included services, pricing notes, active status.
- `RecurringService`: id, customer id, property id, maintenance plan id, schedule, next service date, status.
- `MaterialUsage`: id, job id, product/material id, quantity, unit cost, notes.
- `LaborEntry`: id, job id, worker id, start time, end time, duration, cost rate, notes.

## Reporting data

The reporting module should derive revenue, paid/unpaid invoices, service category revenue, recurring maintenance revenue, one-time project revenue, material cost, labor cost, gross profit estimate, job profitability, customer value, and outstanding balances from these entities.
