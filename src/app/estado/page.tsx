import { TopNav } from "@/components/top-nav";
import { DEMO_BALANCE, DEMO_BURNED, DEMO_REMAINING_INVENTORY, DEMO_TOTAL_INVENTORY } from "@/components/demo-data";
import { InfoCard, MetricCard, PageIntro, PageShell } from "@/components/ui";

export default function EstadoPage() {
  return (
    <PageShell>
      <TopNav />
      <PageIntro
        eyebrow="Estado"
        title="Estado del inventario y del consumo"
        description="Consulta cuánto material existe, cuánto queda por redimir y cuánto ya fue consumido."
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Inventario total" value={DEMO_TOTAL_INVENTORY} helper="Reserva visible" />
        <MetricCard label="Inventario restante" value={DEMO_REMAINING_INVENTORY} helper="Disponible" />
        <MetricCard label="Material consumido" value={DEMO_BURNED} helper="Consumo acumulado" />
        <MetricCard label="Saldo actual" value={DEMO_BALANCE} helper="Derecho del usuario" />
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <InfoCard title="Estado operativo">
          <ul className="space-y-2 list-disc pl-5">
            <li>Inventario total visible</li>
            <li>Inventario restante actualizado</li>
            <li>Material consumido registrado</li>
            <li>Saldo disponible del usuario</li>
          </ul>
        </InfoCard>
        <InfoCard title="Lectura del sistema">
          <p>
            Esta vista sirve para mostrar al jurado que el sistema deja trazabilidad clara del material,
            el saldo y el consumo representado por burn.
          </p>
        </InfoCard>
      </section>
    </PageShell>
  );
}
