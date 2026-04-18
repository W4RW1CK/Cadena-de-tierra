import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { PageShell } from "@/components/ui";

export default function Home() {
  return (
    <PageShell>
      <TopNav />
      <section className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:grid-cols-[1.2fr_0.8fr] md:p-10">
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full border border-orange-400/20 bg-orange-400/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-orange-200/80">
            Demo sobre Monad testnet
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Compra y retira <span className="text-orange-400">caliche</span> con menos fricción.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Cadena de Tierra permite a constructoras comprar derechos de extracción de caliche,
            redimirlos al retirar material y verificar la operación en tiempo real.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/compra" className="rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-orange-400">
              Ir a compra
            </Link>
            <Link href="/redencion" className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Ir a redención
            </Link>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6 shadow-xl">
          <p className="text-sm text-slate-400">Resumen rápido</p>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Compra</p>
              <p className="mt-1">Adquiere derecho de extracción digital.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Redención</p>
              <p className="mt-1">Consume material y ejecuta burn on-chain.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Verificación</p>
              <p className="mt-1">Revisa saldo, consumo e inventario restante.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
