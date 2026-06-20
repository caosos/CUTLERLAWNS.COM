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

## Future platform-level entities

These entities describe the larger reusable platform direction. They do not all need to be implemented immediately.

- `Platform`: global platform configuration, supported verticals, feature flags, providers, and shared defaults.
- `BusinessInstance`: a specific business using the platform, including brand name, legal/display names, colors, logos, location/market, settings, active template, and enabled modules.
- `BusinessTemplate`: reusable industry template containing default services, forms, calculators, statuses, pages, CTAs, estimate fields, invoice fields, checklist templates, and portal recommendations.
- `Vertical`: industry category such as landscaping, handyman, cleaning, pressure washing, painting, HVAC, pest control, pool maintenance, or mobile mechanic.
- `User`: login identity for owners, admins, workers, customers, and other account types.
- `Role`: permissions bundle controlling access to public, customer, worker, admin, and owner features.
- `Customer`: person or company buying services from a business instance.
- `Property`: service location, access notes, customer relationship, and site-specific history.
- `Service`: sellable or requestable service defined by the business instance or inherited from a template.
- `ServiceRequest`: lead/customer request for work, including service category, notes, photos, urgency, property, and status.
- `Job`: scheduled or completed work item with assignment, status, checklist, proof photos, labor/materials, and completion data.
- `JobPhoto`: before, after, issue, source, AI, or proof photo associated with a job or request.
- `Estimate`: proposed scope and pricing, often created from a service request, calculator, project cart, or AI concept.
- `Invoice`: bill issued for completed or scheduled work, tied to customer, property, job, estimate, line items, status, and payment link.
- `Payment`: payment record from Stripe, Square, QuickBooks, manual entry, or another provider.
- `Product`: reusable product/material/plant/equipment item used in catalogs, estimates, jobs, or carts.
- `CatalogItem`: template or instance-specific item presented publicly or internally, such as plants, materials, service packages, or add-ons.
- `Calculator`: modular pricing/planning tool for square footage, mulch, sod, rooms, walls, pressure-washing surfaces, labor, or other vertical needs.
- `WorkflowTemplate`: reusable job/status flow for an industry, service, or business instance.
- `ChecklistTemplate`: reusable task checklist for crews, workers, quality control, cleaning rooms, property maintenance, inspections, or proof workflows.
- `AIConcept`: AI-generated or AI-assisted plan, image, copy draft, design concept, service bundle, or project recommendation.
- `MediaAsset`: uploaded or generated file with ownership, visibility, approval, storage, and usage metadata.
- `Report`: saved or generated reporting view for revenue, invoices, jobs, customers, service categories, recurring work, labor, materials, and performance.

## Data-model guardrail

The first implementation should still serve Cutler. Add platform/template/instance concepts only when they clarify implementation or prevent obvious rework. For example, service and catalog data can be shaped so landscaping works now while still allowing future handyman, cleaning, pressure-washing, painting, and maintenance templates.
