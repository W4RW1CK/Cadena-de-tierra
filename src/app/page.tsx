import Image from "next/image";
import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { PageShell } from "@/components/ui";

function VisualBlock({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="glass-shimmer animate-fade-up-delay-2 relative overflow-hidden rounded-[34px] bg-white/[0.035] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(249,115,22,0.12)]">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),transparent_45%,rgba(249,115,22,0.05))]" />
      <div className="relative flex h-full min-h-[260px] flex-col justify-between">
        <div className="animate-float-drift h-28 w-28 rounded-full bg-gradient-to-br from-orange-400/40 via-orange-300/10 to-transparent blur-2xl" />
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{subtitle}</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight">{title}</h3>
        </div>
      </div>
    </div>
  );
}

function FeatureMiniCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="glass-shimmer animate-fade-up-delay-2 space-y-3 rounded-[28px] bg-white/[0.02] px-5 py-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.035] hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{number}</p>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-sm leading-7 text-slate-400">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <TopNav />

      <section className="grid gap-12 pt-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center xl:pt-14">
        <div className="animate-fade-up space-y-8">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-24 overflow-hidden rounded-2xl bg-white/5 animate-soft-pulse">
              <Image src="/logo.webp" alt="Cadena de Tierra" fill className="object-contain" priority />
            </div>
            <p className="animate-fade-up-delay-1 text-xs uppercase tracking-[0.3em] text-orange-300/75">Cadena de Tierra</p>
          </div>

          <h1 className="animate-fade-up-delay-1 max-w-5xl text-5xl font-semibold leading-[0.92] md:text-7xl xl:text-[88px]">
            Compra, redime y visualiza caliche de una forma más clara.
          </h1>
          <p className="animate-fade-up-delay-2 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Una experiencia más humana para constructoras que necesitan comprar material,
            retirarlo sin fricción y entender lo que realmente queda disponible.
          </p>
          <div className="animate-fade-up-delay-2 flex flex-wrap gap-4 pt-2">
            <Link href="/dashboard" className="rounded-full bg-white px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-[0_16px_40px_rgba(255,255,255,0.12)]">
              Ver experiencia
            </Link>
            <Link href="/compra" className="rounded-full px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/5">
              Ir a compra
            </Link>
          </div>
        </div>

        <div className="animate-fade-up-delay-1 grid gap-5 md:grid-cols-2">
          <div className="glass-shimmer md:col-span-2 relative overflow-hidden rounded-[40px] bg-white/[0.03] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:shadow-[0_24px_80px_rgba(249,115,22,0.10)]">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),transparent_45%,rgba(249,115,22,0.05))]" />
            <div className="relative grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end">
              <div className="relative h-40 w-full overflow-hidden rounded-[28px] bg-white/5 animate-soft-pulse">
                <Image src="/logo.webp" alt="Logo Cadena de Tierra" fill className="object-contain p-4" priority />
              </div>
              <p className="max-w-xl text-base leading-8 text-slate-300">
                El sistema está pensado para mostrar compra, redención y estado del material sin esconder la información detrás de procesos opacos o paneles complicados.
              </p>
            </div>
          </div>
          <VisualBlock title="Compra el derecho de extracción sin pasos innecesarios." subtitle="Compra" />
          <VisualBlock title="Redime solo lo que necesitas y deja trazabilidad visible." subtitle="Redención" />
        </div>
      </section>

      <section className="animate-fade-up-delay-2 grid gap-10 pt-8 md:grid-cols-3 xl:pt-12">
        <FeatureMiniCard
          number="01"
          title="Menos fricción"
          description="La experiencia prioriza claridad para compra y retiro sin sentirse como un panel administrativo tradicional."
        />
        <FeatureMiniCard
          number="02"
          title="Más visibilidad"
          description="Inventario, saldo y consumo se muestran como parte natural del flujo, no como un reporte escondido."
        />
        <FeatureMiniCard
          number="03"
          title="Marca más humana"
          description="El logo entra como parte central de la identidad visual para que la experiencia se sienta más propia y menos genérica."
        />
      </section>
    </PageShell>
  );
}
