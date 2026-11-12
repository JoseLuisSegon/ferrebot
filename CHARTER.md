# FerreBot — Product Charter (Reconstructed, Week 14)

> This document was reconstructed from Week 12 and Week 13 submissions and the current GitHub prototype. It is **not** represented as the original Week 12 charter. Open questions and assumptions are explicitly labeled.

## Product
FerreBot is a human-confirmed B2B ordering workflow for Mexican hardware retailers and their distributors. Its aim is to turn informal order requests into clear, reviewable order summaries before fulfillment.

## User, payer, and problem
- **Primary user:** hardware-store staff who order from suppliers, typically through WhatsApp or informal messages.
- **Provisional paying customer:** distributor receiving orders from multiple stores. This is a **pricing hypothesis**, not validated willingness to pay.
- **Problem hypothesis:** ambiguous units, incomplete order details, and confirmation delays create rework and operational risk.
- **Do not claim:** a measured market-wide loss, proven 10:1 ROI, or verified five-user validation without supporting records.

## Core workflow
1. Merchant submits a free-form order request.
2. System presents structured items, quantities, and units for review.
3. Human explicitly confirms or edits before the order is locked.
4. Distributor views order state and may mark it dispatched.

## Verified current prototype boundaries (GitHub inspection)
- A Next.js client-side demo exists in `app/page.tsx`.
- The demonstration uses predefined items and seeded logs.
- Confirmation changes client-side state and mock inventory.
- No production WhatsApp integration, persistent database, or live LLM parsing has been verified.
- UI mock metrics must not be presented as measured business outcomes.
- The `Weekly lost metric` in the demo is calculated from pending order value, **not** verified lost revenue.

## Historical continuity and pivot
- Week 12 materials selected **AquaRail**, an offline-resilient telemetry-to-dispatch concept.
- Week 13 materials describe **FerreBot**, a WhatsApp-oriented hardware ordering concept.
- This is a **venture pivot** and must be acknowledged rather than depicted as uninterrupted product continuity.
- The reusable principle is the human-legible, auditable operational handoff; the target customer, domain, and workflow changed.
- Team approval and exact pivot date have **not** been independently established.

## Week 14 focus: pricing and evidence
- Test distributor-funded subscription as a hypothesis; retailer-funded or hybrid alternatives remain open.
- Build a transparent pricing page with 2–3 tiers and explicit free/paid boundaries.
- Build a revenue simulator with editable assumptions and saved scenarios.
- Publish a 10:1 comparison memo distinguishing measured data from modeled assumptions.
- Conduct at least one real pricing conversation with a prospective payer; preserve genuine evidence.
- Verify public accessibility of the deployed URLs.

## Decision and evidence rules
- Mark all simulated figures as DEMO and all forecast values as ASSUMPTIONS.
- Never describe mock WhatsApp, mock inventory, or static order parsing as production integrations.
- Never invent interviews, conversion rates, customer quotes, test outcomes, or commits.
- Maintain one shared assumptions ledger across pricing, simulator, and memo.

## Success criteria for Week 14
A publicly accessible /pricing page; working editable simulator; a consistent assumptions ledger; /about with transparent alternative-cost comparison; recorded payer conversation; tested deployment and reproducible evidence.

## Open risks
Unvalidated payer; weak evidence for savings; privacy and data handling; order ambiguity; existing distributor workflows; public deployment protection; persistence and integration gaps.
