import { ContractStatsGrid } from "@/components/contract-stats";
import { TopNav } from "@/components/top-nav";
import { InfoCard, PageIntro, PageShell } from "@/components/ui";

export default function EstadoPage() {
  return (
    <PageShell>
      <TopNav />
      <PageIntro
        eyebrow="Estado"
        title="Estado del inventario y del consumo"
        description="Consulta cuánto material existe, cuánto queda por redimir y cuánto ya fue consumido."
      />
      <ContractStatsGrid balanceLabel="Saldo actual" balanceHelper="Derecho del usuario" />
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
