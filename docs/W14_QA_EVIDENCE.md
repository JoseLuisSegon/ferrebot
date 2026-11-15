# Week 14 — QA and Evidence Ledger

## Verified by repository / deployment inspection
- Next.js pages `/`, `/pricing`, `/about` are committed.
- Four Week 14 commits were deployed to Vercel production and reported `READY`.
- User reported that `https://ferrebot.vercel.app` opens when pasted directly in Safari.
- Earlier user screenshots showed /pricing and /about rendered, revenue calculation changed from 100 to 200 prospects, and a saved scenario button appeared.
- **Not yet verified:** mobile responsiveness; accessibility; real buyer interview; actual production integrations.
- **Verified by user report (2026-11-15):** saved scenario named Week 14 Test persisted across refresh and restored 200 prospects, MXN 15,980/month.

## Documented issue and code correction
**Issue:** Previous demo used language implying a live WhatsApp connection, real end-to-end encryption, actual lost sales and dispatch, while the code implements a local sample workflow. A 'weekly lost metric' was calculated from pending sample order value, which cannot establish lost revenue.

**Fix:** Week 14 GitHub commit `9414238abffbc9907bb3708776c0a21bc2885670` changed misleading labels to identify demo/mock data and pending sample order value. Follow-up commit `7f7bbfe266c3e8bc25f6ce1e513fc6f33dc0a80b` added a sample-inventory guard and clarified fixed parser output. This is a documented product-truth bug and code correction; a complete independent regression test is still pending.

**Additional fix:** Commit `8dcf76ab6693e3f346f9f26ba3104cc4dee379dc` validates scenario names and handles browser storage failure. Test still required.

## Manual acceptance tests (record actual result, do not mark PASS in advance)
| ID | Action | Expected | Actual result | Evidence |
| --- | --- | --- | --- | --- |
| T01 | Open / in private Safari | Demo renders, no Vercel login | User reported page opens via pasted URL | User report |
| T02 | Open /pricing | Three tiers and simulator render | Previously shown in screenshot | Screenshot from user |
| T03 | Set prospects=200, conversion=10, price=799 | MXN 15,980 monthly and 191,760 annualized | Previously shown in screenshot | Screenshot from user |
| T04 | Save scenario, reload, click its name | Saved inputs persist and reload | PASS — user reports Week 14 Test restored 200 prospects and MXN 15,980/month | User-reported manual test in chat; screenshot not supplied |
| T05 | Enter blank scenario name and save | Validation error; no blank saved scenario | PENDING | PENDING |
| T06 | Set prospects=0 | Monthly and annual revenue become 0 | PENDING | PENDING |
| T07 | Enter conversion above 100 | Conversion clamps to 100 | PENDING | PENDING |
| T08 | Open /about | Comparison and 10:1 arithmetic display | Previously shown in screenshot | Screenshot from user |
| T09 | Confirm sample order | Explicit human confirmation required; no actual dispatch | PENDING | PENDING |
| T10 | Check small mobile viewport | No overlapping or cut-off essential controls | PENDING | PENDING |

## Evidence still required
1. At least one real conversation with a potential **paying distributor**, with accurate consent and responses. Never invent it.
2. A real persona test and a corresponding observed issue/fix (if course requires this separately from technical bug).
3. Video demonstration of the current deployed app and test results.
4. Final team Blueprint as actually agreed; do not invent missing votes.
5. Capture two real Vercel deployments and 5 real commits from history rather than generating dummy changes.
6. Submit requested raw build chat if the rubric requires it; repository commits are not a substitute.

## Pricing assumptions
Demo: MXN 0; Starter proposed MXN 799/month; Growth proposed MXN 1,499/month. Hypothesized payer: distributor. Base: 100 reached, 10% conversion, MXN 799 => MXN 7,990/month and MXN 95,880 annualized. These are not customer evidence or profit.
