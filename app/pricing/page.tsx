'use client'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

type Scenario = { name: string; distributors: number; conversion: number; monthlyPrice: number }
const defaultScenario: Scenario = { name: 'Base case', distributors: 100, conversion: 10, monthlyPrice: 799 }
const money = (n: number) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(n)
const tiers = [
  { name: 'Demo', price: 0, audience: 'Retailers exploring the workflow', features: ['Interactive order confirmation demo', 'Sample order and inventory data', 'No live WhatsApp connection'], note: 'Free product demonstration, not a live ordering service.' },
  { name: 'Starter — proposed', price: 799, audience: 'Small distributors', features: ['Proposed order intake and review workflow', 'Proposed confirmation history', 'Human approval before dispatch'], note: 'Concept price; features beyond the demo require development.' },
  { name: 'Growth — proposed', price: 1499, audience: 'Distributors with higher order volume', features: ['Proposed Starter capabilities', 'Proposed multi-operator controls', 'Proposed operational reporting'], note: 'Concept price; not available for purchase.' },
]
export default function PricingPage() {
  const [scenario, setScenario] = useState<Scenario>(defaultScenario)
  const [saved, setSaved] = useState<Scenario[]>([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { try { const data = JSON.parse(localStorage.getItem('ferrebot-pricing-scenarios') || '[]'); if (Array.isArray(data)) setSaved(data) } catch {} setLoaded(true) }, [])
  const result = useMemo(() => { const paying = scenario.distributors * scenario.conversion / 100; return { paying, monthly: paying * scenario.monthlyPrice, yearly: paying * scenario.monthlyPrice * 12 } }, [scenario])
  function change(key: keyof Scenario, value: string) { setScenario(s => ({ ...s, [key]: key === 'name' ? value : Math.max(0, Number(value) || 0) })) }
  function save() { const next = [...saved.filter(s => s.name !== scenario.name), scenario]; setSaved(next); localStorage.setItem('ferrebot-pricing-scenarios', JSON.stringify(next)) }
  return <main className="mx-auto max-w-5xl px-5 py-12 text-foreground">
    <nav className="mb-8 flex gap-5 text-sm"><Link href="/">← Demo</Link><Link href="/about">10:1 value memo</Link></nav>
    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Week 14 · Money · Pricing hypothesis</p>
    <h1 className="mt-3 text-4xl font-bold">FerreBot pricing</h1>
    <p className="mt-4 max-w-3xl text-muted-foreground">We propose that distributors pay a monthly subscription while hardware stores use the ordering workflow. These prices and features are hypotheses, not market-validated offers. The current product is a client-side demo, not a live WhatsApp ordering service.</p>
    <section className="mt-9 grid gap-4 md:grid-cols-3">{tiers.map(t => <article key={t.name} className="rounded-xl border border-border bg-card p-6"><h2 className="text-xl font-semibold">{t.name}</h2><p className="mt-2 text-3xl font-bold">{money(t.price)}<span className="text-sm font-normal text-muted-foreground"> / month</span></p><p className="mt-3 text-sm text-muted-foreground">{t.audience}</p><ul className="mt-5 space-y-2 text-sm">{t.features.map(f => <li key={f}>✓ {f}</li>)}</ul><p className="mt-5 text-xs text-muted-foreground">{t.note}</p></article>)}</section>
    <section className="mt-12 rounded-xl border border-border bg-card p-6"><h2 className="text-2xl font-bold">Revenue scenario simulator</h2><p className="mt-2 text-sm text-muted-foreground">Illustrative assumptions only. This models gross subscription revenue, not profit, and excludes churn, taxes, fees, and operating costs. Decimal paying-customer estimates are expected values, not actual customers.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-sm">Scenario name<input className="mt-2 w-full rounded border bg-background p-3" value={scenario.name} onChange={e=>change('name',e.target.value)} /></label><label className="text-sm">Potential distributors reached<input type="number" min="0" className="mt-2 w-full rounded border bg-background p-3" value={scenario.distributors} onChange={e=>change('distributors',e.target.value)} /></label><label className="text-sm">Paid conversion rate (%)<input type="number" min="0" max="100" className="mt-2 w-full rounded border bg-background p-3" value={scenario.conversion} onChange={e=>change('conversion',String(Math.min(100,Number(e.target.value)||0)))} /></label><label className="text-sm">Monthly price (MXN)<input type="number" min="0" className="mt-2 w-full rounded border bg-background p-3" value={scenario.monthlyPrice} onChange={e=>change('monthlyPrice',e.target.value)} /></label></div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">{[['Expected paying distributors',result.paying.toFixed(1)],['Gross monthly revenue',money(result.monthly)],['Gross annualized revenue',money(result.yearly)]].map(([label,value])=><div className="rounded-lg bg-muted p-4" key={label}><p className="text-xs text-muted-foreground">{label}</p><p className="mt-2 text-2xl font-bold">{value}</p></div>)}</div>
      <div className="mt-5 flex flex-wrap items-center gap-3"><button onClick={save} className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Save scenario on this device</button><button onClick={()=>setScenario(defaultScenario)} className="rounded-lg border px-5 py-3 text-sm">Reset</button></div>
      {loaded && saved.length>0 && <div className="mt-5"><h3 className="font-semibold">Saved scenarios (this browser only)</h3><div className="mt-2 flex flex-wrap gap-2">{saved.map((s,i)=><button key={i} className="rounded border px-3 py-2 text-sm" onClick={()=>setScenario(s)}>{s.name}</button>)}</div></div>}
    </section><p className="mt-8 text-xs text-muted-foreground">Assumption ledger: proposed payer = distributor; trial = free demo; illustrative Starter = MXN 799/month; Growth = MXN 1,499/month; base scenario = 100 prospects × 10% paid conversion × MXN 799/month. No interviews or actual payments are implied.</p>
  </main>
}
