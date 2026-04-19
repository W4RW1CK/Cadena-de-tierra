import Link from "next/link";
import { ContractStatsGrid } from "@/components/contract-stats";
import { TopNav } from "@/components/top-nav";
import { InfoCard, PageIntro, PageShell } from "@/components/ui";

export default function DashboardPage() {
  return (
    <PageShell>
      <TopNav />
      <PageIntro
        eyebrow="Dashboard"
        title="Vista ejecutiva del sistema"
        description="Resumen general de inventario, material consumido y accesos rápidos a compra y redención."
      />
      <ContractStatsGrid balanceLabel="Mi saldo" balanceHelper="Derecho disponible" />
      <section className="grid gap-6 md:grid-cols-2">
        <InfoCard title="Acciones rápidas">
          <div className="flex flex-wrap gap-3">
            <Link href="/compra" className="rounded-xl bg-orange-500 px-4 py-2 font-semibold text-slate-950">Ir a compra</Link>
            <Link href="/redencion" className="rounded-xl bg-white px-4 py-2 font-semibold text-slate-950">Ir a redención</Link>
            <Link href="/estado" className="rounded-xl border border-white/10 px-4 py-2 font-semibold text-white">Ver estado</Link>
          </div>
        </InfoCard>
        <InfoCard title="Qué demuestra la demo">
          <ul className="space-y-2 list-disc pl-5">
            <li>Compra simplificada de derecho de extracción</li>
            <li>Redención parcial de material</li>
            <li>Burn como prueba de consumo</li>
            <li>Inventario y saldo visibles en tiempo real</li>
          </ul>
        </InfoCard>
      </section>
    </PageShell>
  );
}
