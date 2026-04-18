import { TopNav } from "@/components/top-nav";
import { DEMO_REMAINING_INVENTORY, DEMO_TOTAL_INVENTORY } from "@/components/demo-data";
import { InfoCard, MetricCard, PageIntro, PageShell } from "@/components/ui";
import { Web3BuyPanel } from "@/components/web3-demo";

export default function CompraPage() {
  return (
    <PageShell>
      <TopNav />
      <PageIntro
        eyebrow="Compra"
        title="Compra derecho de extracción"
        description="La constructora adquiere una cantidad de caliche representada digitalmente para usarla cuando la necesite."
      />
      <section className="grid gap-4 md:grid-cols-2">
        <MetricCard label="Inventario total" value={DEMO_TOTAL_INVENTORY} helper="Reserva total del sistema" />
        <MetricCard label="Disponible para compra" value={DEMO_REMAINING_INVENTORY} helper="Cantidad visible para operación" />
      </section>
      <Web3BuyPanel />
      <section className="grid gap-6 md:grid-cols-2">
        <InfoCard title="Qué sucede aquí">
          <ol className="space-y-2 list-decimal pl-5">
            <li>La constructora decide cuánto material quiere adquirir.</li>
            <li>La operación representa un derecho de extracción digital.</li>
            <li>Ese saldo queda disponible para redención posterior.</li>
          </ol>
        </InfoCard>
        <InfoCard title="Qué necesitas para modo real">
          <ul className="space-y-2 list-disc pl-5">
            <li>Wallet conectada</li>
            <li>Contract address en `.env.local`</li>
            <li>Contrato desplegado en Monad testnet</li>
          </ul>
        </InfoCard>
      </section>
    </PageShell>
  );
}
