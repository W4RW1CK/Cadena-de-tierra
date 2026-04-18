import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { PageShell } from "@/components/ui";

function VisualBlock({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative overflow-hidden rounded-[34px] bg-white/[0.035] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),transparent_45%,rgba(249,115,22,0.05))]" />
      <div className="relative flex h-full min-h-[260px] flex-col justify-between">
        <div className="h-28 w-28 rounded-full bg-gradient-to-br from-orange-400/40 via-orange-300/10 to-transparent blur-2xl" />
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{subtitle}</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <TopNav />

      <section className="grid gap-12 pt-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-center xl:pt-16">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-300/75">Cadena de Tierra</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] md:text-7xl xl:text-[92px]">
            Compra, redime y visualiza caliche de una forma más clara.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Una experiencia más humana para constructoras que necesitan comprar material,
            retirarlo sin fricción y entender lo que realmente queda disponible.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/dashboard" className="rounded-full bg-white px-7 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
              Ver experiencia
            </Link>
            <Link href="/compra" className="rounded-full px-7 py-3 font-semibold text-white transition hover:bg-white/5">
              Ir a compra
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <VisualBlock title="Compra el derecho de extracción sin pasos innecesarios." subtitle="Compra" />
          <VisualBlock title="Redime solo lo que necesitas y deja trazabilidad visible." subtitle="Redención" />
          <div className="md:col-span-2 relative overflow-hidden rounded-[38px] bg-white/[0.03] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_40%,rgba(59,130,246,0.04))]" />
            <div className="relative grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Estado</p>
                <p className="mt-4 text-5xl font-semibold text-orange-400">10,000</p>
                <p className="mt-3 text-sm text-slate-400">m³ de referencia visibles para la demo</p>
              </div>
              <p className="max-w-xl text-base leading-8 text-slate-300">
                El sistema está pensado para mostrar compra, redención y estado del material sin esconder la información detrás de procesos opacos o paneles complicados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-10 pt-8 md:grid-cols-3 xl:pt-12">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">01</p>
          <h2 className="text-2xl font-semibold">Menos fricción</h2>
          <p className="text-sm leading-7 text-slate-400">
            La experiencia prioriza claridad para compra y retiro sin sentirse como un panel administrativo tradicional.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">02</p>
          <h2 className="text-2xl font-semibold">Más visibilidad</h2>
          <p className="text-sm leading-7 text-slate-400">
            Inventario, saldo y consumo se muestran como parte natural del flujo, no como un reporte escondido.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">03</p>
          <h2 className="text-2xl font-semibold">Una narrativa humana</h2>
          <p className="text-sm leading-7 text-slate-400">
            El objetivo no es mostrar blockchain por blockchain, sino una manera más clara de operar un recurso real.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
