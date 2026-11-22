'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck,
  Download, ExternalLink, FileText, LockKeyhole, PackageCheck, ShieldAlert,
  ShieldCheck, Sparkles, Workflow,
} from 'lucide-react'

const teal = '#0A4F50'
const concepts = [
  { id: '01', series: 'Antes de confirmar', title: 'Clavos sin medida', status: 'TERMINADA', format: 'Imagen de orientación', summary: 'Un pedido ambiguo y la pregunta concreta que falta antes de aprobarlo.' },
  { id: '02', series: 'Antes de confirmar', title: 'Caja o pieza', status: 'CONCEPTO', format: 'Boceto de comparación', summary: 'Cómo cambia la revisión si la presentación no está especificada.' },
  { id: '03', series: 'Del mensaje al control', title: 'Un pedido, tres decisiones', status: 'TERMINADA', format: 'Recorrido interactivo', summary: 'Mensaje, dato sin resolver y decisión humana para detenerse.' },
  { id: '04', series: 'Del mensaje al control', title: '¿Qué hace realmente la demo?', status: 'CONCEPTO', format: 'Titular y guion', summary: 'Separar claramente muestra fija, decisión humana y capacidades no construidas.' },
  { id: '05', series: 'El costo de la ambigüedad', title: 'El costo debe medirse', status: 'TERMINADA', format: 'Guía PDF imprimible', summary: 'Una plantilla para medir el tiempo y la frecuencia de correcciones reales.' },
  { id: '06', series: 'El costo de la ambigüedad', title: '¿Vale MXN 799?', status: 'CONCEPTO', format: 'Cálculo a validar', summary: 'El precio es una hipótesis; los beneficios tienen que demostrarse.' },
]

const stages = [
  {
    label: '01 · Mensaje de ejemplo',
    title: 'Una frase no es una orden completa',
    description: 'El pedido de muestra menciona cemento y clavos, pero no precisa tamaño ni presentación del clavo. No elegimos un SKU por adivinación.',
  },
  {
    label: '02 · Revisión de campos',
    title: 'Hay una decisión que la pantalla no puede tomar',
    description: 'Antes de cualquier confirmación se necesita preguntar: ¿qué medida de clavo y en qué presentación, caja o pieza?',
  },
  {
    label: '03 · Regla de detención',
    title: 'Sin aclaración, no se confirma',
    description: 'El resultado útil es una pregunta concreta y una pausa explícita. No hay pedido enviado ni inventario reservado.',
  },
]

export default function LaunchPage() {
  const [stage, setStage] = useState(0)
  const [copyMessage, setCopyMessage] = useState('')

  async function copyPage() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopyMessage('Enlace copiado. Compártelo solo con personas que acepten recibirlo.')
    } catch {
      setCopyMessage('Copia la dirección de esta página desde tu navegador.')
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F4EC] text-[#243333]">
      <header className="border-b border-[#DCE6E3] bg-[#F8F4EC]/95 px-5 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-[#0A4F50]">
            <span className="rounded-xl bg-[#0A4F50] p-2 text-white"><PackageCheck className="h-5 w-5" /></span>
            <span className="text-xl">FerreBot</span>
          </Link>
          <nav aria-label="Navegación principal" className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <a href="#piezas" className="hover:underline">Piezas</a>
            <a href="#proceso" className="hover:underline">Método</a>
            <Link href="/pricing" className="hover:underline">Precio hipotético</Link>
            <Link href="/" className="rounded-lg bg-[#0A4F50] px-4 py-2 text-white hover:bg-[#063C3D]">Probar demo <ExternalLink className="ml-1 inline size-3" /></Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B7D5D0] bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.17em] text-[#0A4F50]">
            <ShieldCheck className="size-3.5" /> Simulación académica · sin WhatsApp real
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-[#0A4F50] md:text-[3.65rem]">
            Revisa el pedido antes de confirmarlo.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#445759]">
            Un ejemplo de cómo detectar un dato incompleto en un pedido de ferretería y dejar la última decisión en manos de una persona.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#58696A]">
            Para dueños y responsables de operaciones de distribuidores mexicanos. No procesamos pedidos reales, no conectamos WhatsApp y no hemos demostrado ahorro de tiempo ni precisión de IA.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-[#0A4F50] px-5 py-3 font-semibold text-white shadow-sm hover:bg-[#063C3D]">
              Ver muestra funcional <ArrowRight className="size-4" />
            </Link>
            <a href="#paso-a-paso" className="inline-flex items-center gap-2 rounded-xl border border-[#0A4F50] px-5 py-3 font-semibold text-[#0A4F50] hover:bg-[#E8F1EE]">
              Entender la decisión <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="rounded-[1.7rem] border border-[#C5DAD5] bg-white p-5 shadow-xl shadow-[#0A4F50]/10 md:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-[#E2EBE8] pb-4">
            <span className="text-xs font-bold uppercase tracking-[.16em] text-[#0A4F50]">Caso ficticio · control visible</span>
            <span className="rounded-full bg-[#EDF3F0] px-2.5 py-1 text-[10px] font-bold text-[#0A4F50]">NO ES UN PARSER</span>
          </div>
          <div className="mt-5 rounded-2xl bg-[#F1F5F3] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#6D8581]">Mensaje recibido</p>
            <p className="mt-2 text-lg font-medium leading-7">“Oye, mándame dos bultos de cemento y clavos urgente.”</p>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-[#DFE9E5] p-4 text-sm"><span>Cemento · 2 bultos</span><span className="text-xs text-[#607572]">Muestra parcial</span></div>
            <div className="rounded-xl border border-[#E8A332] bg-[#FFF3D8] p-4 text-sm text-[#6D4A13]">
              <div className="flex items-center gap-2 font-bold"><AlertTriangle className="size-4" /> Clavos: medida y unidad pendientes</div>
              <p className="mt-2 text-xs">Pregunta necesaria: ¿qué medida y en qué presentación?</p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[#D4DFDD] bg-[#F7F9F8] p-4 text-sm"><LockKeyhole className="size-5 shrink-0 text-[#0A4F50]" /><span><strong>Detener confirmación.</strong> La persona debe aclarar el pedido.</span></div>
          </div>
          <p className="mt-4 text-xs text-[#6C7B7A]">Una historia ilustrativa para explicar una regla de seguridad. No es una extracción automática.</p>
        </div>
      </section>

      <section id="piezas" className="border-y border-[#DCE6E3] bg-white/75 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-9 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#0A4F50]">Tres piezas · tres series</p><h2 className="mt-3 text-3xl font-bold text-[#0A4F50]">Contenido que permite juzgar el producto</h2><p className="mt-3 text-[#526565]">Cada pieza muestra una decisión o una limitación concreta. Los ejemplos son ficticios y los resultados de audiencia están pendientes.</p></div>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="overflow-hidden rounded-2xl border border-[#D6E2DE] bg-white shadow-sm">
              <div className="bg-[#EDF4F0] p-3"><img src="/launch/ambiguity-card.png" alt="Tarjeta informativa: clavos sin medida no deben confirmarse; solicita tamaño y presentación" className="mx-auto aspect-[4/5] w-full max-w-[300px] object-contain" /></div>
              <div className="p-5"><p className="text-[10px] font-bold uppercase tracking-widest text-[#0A4F50]">Serie 1 · Imagen</p><h3 className="mt-2 text-xl font-bold">Clavos sin medida</h3><p className="mt-2 text-sm leading-6 text-[#5C6F6D]">Una advertencia práctica al momento de revisar un pedido informal.</p><a href="/launch/ambiguity-card.png" download="FerreBot_Clavos_Sin_Medida.png" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A4F50] underline underline-offset-4"><Download className="size-4" /> Descargar imagen</a></div>
            </article>
            <article id="paso-a-paso" className="rounded-2xl border border-[#D6E2DE] bg-white p-5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A4F50]">Serie 2 · Interactivo</p><h3 className="mt-2 text-xl font-bold">Un pedido, tres decisiones</h3><div className="mt-5 flex gap-1" aria-label="Progreso del recorrido">{stages.map((_, i) => <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= stage ? 'bg-[#0A4F50]' : 'bg-[#E1EAE6]'}`} />)}</div>
              <div aria-live="polite" className="mt-5 min-h-[250px] rounded-xl bg-[#F4F7F5] p-5"><p className="text-[11px] font-bold tracking-widest text-[#0A4F50]">{stages[stage].label}</p><h4 className="mt-3 text-lg font-bold leading-6">{stages[stage].title}</h4><p className="mt-3 text-sm leading-6 text-[#566B69]">{stages[stage].description}</p>{stage === 2 && <div className="mt-5 flex items-center gap-2 rounded-lg border border-[#E8A332] bg-[#FFF3D8] p-3 text-xs font-semibold text-[#755018]"><ShieldAlert className="size-4" /> SIN SKU CONFIRMADO · STOP</div>}</div>
              <div className="mt-5 flex justify-between gap-3"><button onClick={() => setStage(Math.max(0, stage - 1))} disabled={stage === 0} className="rounded-lg border border-[#BFCFCA] px-3 py-2 text-sm font-semibold disabled:opacity-40"><ArrowLeft className="mr-1 inline size-4" /> Anterior</button><button onClick={() => setStage(stage === 2 ? 0 : stage + 1)} className="rounded-lg bg-[#0A4F50] px-3 py-2 text-sm font-semibold text-white">{stage === 2 ? 'Repetir' : 'Siguiente'} <ArrowRight className="ml-1 inline size-4" /></button></div>
            </article>
            <article className="rounded-2xl border border-[#D6E2DE] bg-white p-5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A4F50]">Serie 3 · Guía PDF</p><h3 className="mt-2 text-xl font-bold">El costo debe medirse</h3><div className="mt-5 flex min-h-[300px] flex-col justify-between rounded-xl border border-[#DFE8E3] bg-[#F9F7F1] p-5"><div><FileText className="size-9 text-[#0A4F50]" /><p className="mt-5 text-sm font-bold">Registro de una corrección real</p><ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-[#536966]"><li>¿Qué dato faltó?</li><li>¿Cuánto tardó aclararlo?</li><li>¿Qué sistema ya usan?</li><li>¿Quién autoriza un cambio?</li></ol></div><p className="mt-5 border-t border-[#D7E1DD] pt-3 text-xs text-[#647775]">Sin respuestas prellenadas. El costo de cada empresa debe observarse.</p></div><p className="mt-4 text-sm leading-6 text-[#5C6F6D]">Plantilla imprimible para contrastar el problema con evidencia, no con un ahorro inventado.</p><a href="/launch/order-checklist.pdf" download="FerreBot_Real_Order_Review_Checklist.pdf" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0A4F50] underline underline-offset-4"><Download className="size-4" /> Descargar PDF</a>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#0A4F50]">Plan completo</p><h2 className="mt-3 text-3xl font-bold text-[#0A4F50]">Seis conceptos, tres acabados</h2><div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{concepts.map((c) => <div key={c.id} className="rounded-xl border border-[#D5E0DD] bg-white p-5"><div className="flex justify-between gap-3"><span className="text-xs font-bold text-[#0A4F50]">{c.id} / {c.series}</span><span className={`rounded px-2 py-1 text-[9px] font-bold ${c.status === 'TERMINADA' ? 'bg-[#D9EFE9] text-[#0A4F50]' : 'bg-[#EFF1EF] text-[#697674]'}`}>{c.status}</span></div><h3 className="mt-3 font-bold">{c.title}</h3><p className="mt-1 text-xs text-[#627673]">{c.format}</p><p className="mt-3 text-sm leading-6 text-[#526565]">{c.summary}</p></div>)}</div></section>

      <section id="proceso" className="bg-[#0A4F50] py-16 text-white"><div className="mx-auto max-w-6xl px-5"><div className="flex items-center gap-3"><Workflow className="size-6" /><h2 className="text-3xl font-bold">El método antes que los posts</h2></div><p className="mt-4 max-w-3xl leading-7 text-[#D4E6E2]">Un proceso verificable convierte una duda real en una pieza útil. Ninguna IA publica ni confirma pedidos por sí sola.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{[['01','Investigar','Fuente identificada, fecha y límite de la afirmación.'],['02','Escribir','Una pregunta útil y una acción explícita, en español claro.'],['03','Producir','Imagen, recorrido y guía con la misma señal visual.'],['04','Verificar','Separar dato, ejemplo, hipótesis y ausencia de evidencia.'],['05','Revisar estilo','Legibilidad móvil, voz sobria y lenguaje de ferretería.'],['06','Aprobar y corregir','José Luis revisa antes de compartir; se registran cambios.']].map(([n,title,desc]) => <div className="rounded-xl border border-white/20 bg-white/10 p-5" key={n}><span className="text-xs font-bold text-[#A9D8CC]">{n}</span><h3 className="mt-2 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#D7E9E5]">{desc}</p></div>)}</div></div></section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#0A4F50]">Prueba de distribución</p><h2 className="mt-3 text-3xl font-bold text-[#0A4F50]">La señal valiosa es una respuesta concreta</h2><p className="mt-4 leading-7 text-[#526565]">Las dos piezas están listas para compartirse, con permiso, con responsables de distribuidores. Les preguntaremos qué dato suele faltar y qué harían después. Registraremos únicamente exposiciones y respuestas observadas; nunca inventaremos clics, clientes ni horas ahorradas.</p><p className="mt-4 rounded-lg border border-[#DFE4E0] bg-white p-4 text-sm text-[#526565]"><strong>Estado del experimento:</strong> piezas listas para compartir; exposiciones y resultados de personas reales aún no verificados.</p></div><div className="rounded-2xl border border-[#C8DCD7] bg-white p-6 shadow-sm"><div className="flex gap-3"><ClipboardCheck className="size-6 text-[#0A4F50]" /><h3 className="text-xl font-bold">¿Tú procesas pedidos?</h3></div><p className="mt-3 text-sm leading-6 text-[#526565]">Prueba la muestra y pregúntate: ¿dónde falta información, quién la corrige y qué proceso ya usan en tu empresa? El enlace no te registra ni pide datos personales.</p><div className="mt-5 flex flex-wrap gap-3"><Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-[#0A4F50] px-4 py-3 text-sm font-semibold text-white"><CheckCircle2 className="size-4" /> Probar demo</Link><button onClick={copyPage} className="rounded-lg border border-[#0A4F50] px-4 py-3 text-sm font-semibold text-[#0A4F50]">Copiar enlace</button></div>{copyMessage && <p role="status" className="mt-3 text-xs text-[#0A4F50]">{copyMessage}</p>}<p className="mt-5 text-xs text-[#748582]">Sin formulario de datos personales, sin servicio comercial activo y sin confirmación automática de órdenes.</p></div></section>

      <footer className="border-t border-[#D8E3DF] px-5 py-7"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 text-xs text-[#667B77]"><span>FerreBot · Proyecto académico · Datos de ejemplo</span><span className="flex items-center gap-2"><Sparkles className="size-3" /> Diseño de distribución Semana 15 · Sin resultados inventados</span></div></footer>
    </main>
  )
}
