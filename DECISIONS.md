# DECISIONS — FerreBot

## Week 14 — Reconstruction and pricing direction
- **Status:** provisional working decisions, not evidence of team consensus.
- **Venture:** FerreBot (Week 13) following a pivot from AquaRail (Week 12).
- **Primary payer hypothesis:** distributor; merchant is the ordering user.
- **Pricing model hypothesis:** monthly distributor subscription with a free trial.
- **Reason:** a distributor may benefit from processing orders from many merchants, but willingness to pay is untested.
- **Alternative hypotheses:** retailer-paid or hybrid pricing; do not rule these out without payer interviews.
- **Product truth:** existing GitHub app is a client-side demo; no verified live WhatsApp/LLM/database.
- **Measurement rule:** pending order value must not be labeled lost revenue.
- **Next validation:** real payer conversation, pricing page and editable scenario calculator, then compare alternatives transparently.

## Week 15 - Distribution and source-backed positioning (22 November 2026)

- **Decision:** Focus first on Mexican small-distributor operations decision-makers at the moment an incoming order lacks a precise SKU, unit or package; hardware-store staff are users and distributors are the unvalidated payer.
- **Abandoned claim:** WhatsApp-based order automation plus human approval is unique. Yalo, Orderlion and especially Mexican competitor Handl already market adjacent or overlapping functionality.
- **Defended claim:** A truthful, inspectable order-review demonstration with visible human correction can be evaluated today. A business benefit and subscription decision cannot yet be asserted.
- **Brand promise:** "Revisa el pedido antes de confirmarlo" / "See the order before you confirm it." No promises of live WhatsApp, AI accuracy, zero errors, proven labor savings or 10:1 ROI.
- **Creative plan:** six concepts, three recurring series; finish an ambiguity card, interactive clarification story and printable cost-measurement checklist. Research, writing, visual production, claim check, style review, revision and human approval are explicit gates in `docs/PACKET.md`.
- **Product repair target:** the existing free-text input can display fixed unrelated items. Reproduce the mismatch, ensure a non-fixture message cannot display a fabricated SKU or be confirmed, and retest after deployment.
- **Security:** public output remains fictional, without names/emails, live inventory, database or secrets; do not confuse an opt-in CTA with a customer signup record.
- **External evidence still needed:** two real exposures of finished assets to relevant distributor decision-makers; actual interactions/replies, optional pilot decision and one honest pain/cost observation. Zero response must be reported as zero.
- **Owner approval gate:** José Luis reviews customer-facing claims before outreach; the site's published assets are still part of an academic prototype.
- **Outstanding Team/Future evidence:** the team video reportedly exists but its spoken mismatch/consensus have not been reviewed. The Week 15 one-page Blueprint cannot be recast as ratified from the text alone. Personal Future Bending reflection must refer to what actually changed during the week's tests.

## Week 15 - Observed release decision and next proof gate (22 November 2026)

- **Observed failure:** In the pre-fix public demo, entering `Necesito 3 metros de cable eléctrico` kept unrelated cement/nail rows visible and a sample confirmation enabled. This made the broad order-reading impression unsafe.
- **Implemented response:** Commit `9afb3ed` blocks arbitrary messages from inheriting the canned sample; custom text displays an unresolved manual-review state, no unrecognized SKU or price, and no usable confirm button.
- **After-deploy verification:** On READY production deploy `dpl_59BCWVboBiq94aDqUzuY79VUctc2`, re-entering the cable text showed the explicit stop, while loading/confirming the known fictional fixture still worked; `/launch` and both downloads responded 200.
- **Copy audit:** Commit `f5a1f23` changed language falsely implying outreach already happened. The new READY release showed prospective verbs. Avoid “we sent / people clicked” until observed and logged.
- **Decision maintained:** Promote reviewability, honesty and the manual stop as the academic release; do not claim live WhatsApp, arbitrary LLM parsing, time savings, ROI or verified payer interest.
- **Binding constraint / next move:** Contact genuine Mexican hardware distributor operations decision-makers with A1 and C1 (with permission), record actual deliveries/observable views/replies including zero, obtain one real baseline or objection, then revise. Complete separate fresh persona chat, actual original build exchange and student video. **No real audience response has been established at this commit.**
