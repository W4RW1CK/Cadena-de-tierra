import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { PageShell } from "@/components/ui";

export default function Home() {
  return (
    <PageShell>
      <TopNav />
      <section className="relative overflow-hidden rounded-[48px] bg-white/[0.03] px-8 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:px-12 md:py-16 xl:px-16 xl:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_30%,transparent_68%,rgba(249,115,22,0.06))]" />
        <div className="absolute -right-20 top-8 h-72 w-72 rounded-full bg-orange-500/16 blur-3xl" />
        <div className="absolute bottom-0 left-8 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative grid gap-14 xl:grid-cols-[1.12fr_0.88fr] xl:items-end">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-orange-400/[0.07] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.26em] text-orange-200/75">
              Inspired visual direction, demo-ready product
            </div>
            <div className="space-y-6">
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] md:text-7xl xl:text-[92px]">
                A cleaner way to buy, redeem and track <span className="text-orange-400">caliche</span>.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg xl:text-xl">
                Cadena de Tierra convierte la compra, redención y verificación del caliche en una experiencia más clara,
                premium y visible en tiempo real para constructoras y operadores.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
                Explorar dashboard
              </Link>
              <Link href="/compra" className="rounded-2xl bg-white/[0.06] px-6 py-3 font-semibold text-white transition hover:bg-white/[0.1]">
                Ir a compra
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[34px] bg-slate-950/42 px-7 py-8 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Why it matters</p>
              <p className="mt-4 text-3xl font-semibold leading-tight">Supply friction is still hidden in manual steps.</p>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                Compra, retiro e inventario suelen depender de procesos lentos y poco visibles. Esta demo propone una experiencia más clara y operable.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[30px] bg-white/[0.04] px-6 py-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.18em] text-orange-300">Compra</p>
                <p className="mt-4 text-xl font-semibold">Derecho de extracción digital</p>
              </div>
              <div className="rounded-[30px] bg-white/[0.04] px-6 py-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.18em] text-sky-300">Redención</p>
                <p className="mt-4 text-xl font-semibold">Consumo visible y verificable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
