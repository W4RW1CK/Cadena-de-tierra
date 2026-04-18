import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { PageShell } from "@/components/ui";

export default function Home() {
  return (
    <PageShell>
      <TopNav />
      <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-12">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%,transparent_68%,rgba(249,115,22,0.08))]" />
        <div className="absolute -right-12 top-10 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-orange-400/20 bg-orange-400/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.26em] text-orange-200/80">
              Inspired visual direction, demo-ready product
            </div>
            <div className="space-y-5">
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] md:text-7xl">
                The new layer for <span className="text-orange-400">caliche extraction</span> and real-time settlement.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                Cadena de Tierra convierte la compra, redención y verificación del caliche en una experiencia digital premium,
                con menos fricción operativa y trazabilidad visible en tiempo real.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
                Explorar dashboard
              </Link>
              <Link href="/compra" className="rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Ir a compra
              </Link>
            </div>
          </div>

          <div className="grid gap-4 self-end">
            <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Why now</p>
              <p className="mt-3 text-2xl font-semibold">Supply friction is still invisible.</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Compra, retiro e inventario siguen dependiendo de pasos manuales. Esta demo muestra una experiencia mucho más clara y operable.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.18em] text-orange-300">Compra</p>
                <p className="mt-3 text-lg font-semibold">Derecho de extracción digital</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.18em] text-sky-300">Redención</p>
                <p className="mt-3 text-lg font-semibold">Consumo visible y auditable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
