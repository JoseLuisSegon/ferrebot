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

## Week 15 - Final independent browser audit decision (22 November 2026)

- **New failure surfaced after first repair:** Updating the order textarea without sending it still allowed confirmation of the previously submitted fixed fixture. A reviewer could mistakenly think their newly drafted cable request was being confirmed. The relevant invariant is `canConfirm = recognizedSubmittedFixture AND draftMatchesSubmittedRequest`, not just a recognized submitted fixture.
- **Fix and retest:** In commit `d614fa4`, block pending edits, show an explicit unsent warning, and reject an unsynchronized draft in the confirmation callback. READY production browser test verified disabled approval before Send, continued blocking after submitting unknown cable text, and successful confirmation only after explicitly reloading the known fixture.
- **Corrected quantitative label:** Previous `82%` and `64%` were fictional stock counts, not percentages. Displaying 82 bultos and 64 cajas, with bars normalized to starting sample stock, prevents a false quantitative inference. After the sample confirmation, observed 80 bultos and 63 cajas; reset restored both.
- **Arithmetic checked:** Sample total MXN 688 = 2 × 285 + 1 × 118. Base subscription scenario gives MXN 7,990/month and MXN 95,880 annualized; 10:1 customer-value requirement gives MXN 7,990/month, which would be 79.9 hours at *illustrative* MXN 100/hour. All remain modeled or mock, not observed business outcomes.
- **Next move unchanged:** Permission-based outreach to qualified distributor decision-makers with A1/C1, actual response ledger (including zero), original fresh persona and development transcripts, video evidence. Do not claim the technical retest is a customer test.


## Week 15 - Synthetic-persona Round 2, reproduced safety failure and remedy (22 November 2026)

- **Source and scope:** An independent *synthetic* skeptical distributor operations-manager conversation (not a real customer) challenged the apparently complete order because “1 caja de clavos” lacked a defined weight/piece count and unique catalog packaging. Its explicit falsification rule was that one reproducible approval of a materially unresolved SKU/package must stop the next usability experiment until fixed.
- **Reproduced pre-fix failure on public production:** With the default message `Mándame 2 bultos de cemento gris Tolteca de 50 kg y 1 caja de clavo para madera de 2½ pulgadas`, the UI displayed `Confirmar muestra` enabled. Clicking it registered a fictional MXN 688 order, changed four sample rows from three and reduced example inventory from 82→80 cement bags and 64→63 nail boxes. No actual order or stock was affected. This **failed** the persona's packaging-ambiguity test.
- **Cause:** The fixture-recognition check compared the entire message to a hardcoded text string and called it complete even though no nail-box package size was defined. Protecting unknown inputs was insufficient while the recognized input itself remained under-specified.
- **Implemented changes:** GitHub commit [`20f44b2`](https://github.com/JoseLuisSegon/ferrebot/commit/20f44b2e10cbb065a5a1b808a9ad620663b6bf7f) makes the original text start in a STOP state, removes prefilled nail SKU/price for unresolved input, and keeps confirmation disabled. An explicitly **simulated** clarification to a 1 kg nail box produces a separate fixed demonstration string and mock SKU `CLA-MAD-25-1KG`. This is neither an actual customer reply nor a validated commercial catalog match. The previous invented 98%/91% confidence labels were replaced by “predefined fictional mapping.”
- **Test–fix–retest:** READY Vercel production deployment `dpl_88wCYgb5UaoXA9uMYoTC6ZfmvkMv` displayed the original exact message blocked, with a precise box-content warning; the fictional 1 kg clarification enabled only that new fixed fixture; editing `2` to `20` before sending disabled the prior confirmation; sending the changed 20-unit text kept the stop; a rapid double-click on confirmation of the resolved fixture produced one new local log row and changed sample inventory only once (82→80, 64→63); reset restored the STOP state, three seed rows and both original quantities. The fixture arithmetic remains 2×MXN 285 + 1×MXN 118 = MXN 688.
- **Second correction:** Testing the updated build exposed misleading recovery wording: the “Simular aclaración” button also appeared after an *unrelated* unknown cable/20-unit message, although clicking it discarded that draft and loaded the separate fictional fixture. Commit [`0851b9c`](https://github.com/JoseLuisSegon/ferrebot/commit/0851b9c38d781bad7a1ed5a8db9a429ebc6b7dc3) made the action say “Descartar texto y cargar muestra resuelta” for unrelated requests, while retaining “Simular aclaración” only for the precise known nail-box ambiguity. READY production deploy `dpl_7L796pAsLHFhUZTqZePBBPu2K7nE` passed a fresh check: original input blocked; unknown cable order blocked with corrected recovery label; clarified fixture confirmed once at MXN 688; reset returned to blocked defaults.
- **Safety boundary:** These are observed browser state transitions in a client-side fictional demonstration, **not** proof of server-side idempotency, tamper resistance, real-catalog completeness, live WhatsApp processing or independent distributor usability. Refreshing the page resets its local state; no persistent audit trail exists. The persona's third test therefore remains *partially tested at UI level only*, not a production transaction-integrity pass.
- **Decision:** Repair the demonstrated fixture-level safety issue before further user testing. Proceed only to a limited, consent-based concept/usability evaluation against WhatsApp-plus-catalog with real operators, and suspend such testing again if any unresolved package becomes confirmable. Do not claim paid interest, real customer exposure, time savings, ROI, catalog reliability or error-rate statistics.

