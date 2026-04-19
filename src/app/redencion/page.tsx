import { RedencionMetrics } from "@/components/contract-metrics";
import { TopNav } from "@/components/top-nav";
import { InfoCard, PageIntro, PageShell } from "@/components/ui";
import { Web3RedeemPanel } from "@/components/web3-demo";

export default function RedencionPage() {
  return (
    <PageShell>
      <TopNav />
      <PageIntro
        eyebrow="Redención"
        title="Redime material y ejecuta burn"
        description="Al retirar material, la constructora consume parte de su saldo y el sistema registra el material consumido."
      />
      <RedencionMetrics />
      <Web3RedeemPanel />
      <section className="grid gap-6 md:grid-cols-2">
        <InfoCard title="Qué sucede aquí">
          <ol className="space-y-2 list-decimal pl-5">
            <li>La constructora decide cuánto material retirar.</li>
            <li>La redención ejecuta burn y reduce el saldo disponible.</li>
            <li>El sistema refleja el consumo de inventario.</li>
          </ol>
        </InfoCard>
        <InfoCard title="Qué valida la demo">
          <ul className="space-y-2 list-disc pl-5">
            <li>Redención parcial de material</li>
            <li>Burn como representación del consumo</li>
            <li>Actualización de saldo e inventario</li>
          </ul>
        </InfoCard>
      </section>
    </PageShell>
  );
}
