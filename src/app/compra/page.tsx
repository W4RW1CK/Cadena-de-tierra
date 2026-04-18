"use client";

import { useState } from "react";
import { TopNav } from "@/components/top-nav";
import { DEMO_REMAINING_INVENTORY, DEMO_TOTAL_INVENTORY } from "@/components/demo-data";
import { InfoCard, MetricCard, PageIntro, PageShell } from "@/components/ui";

export default function CompraPage() {
  const [buyAmount, setBuyAmount] = useState("100");

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
      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <InfoCard title="Comprar caliche">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-400">Cantidad</label>
              <input
                type="number"
                min="1"
                value={buyAmount}
                onChange={(e) => setBuyAmount(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-lg text-white outline-none"
              />
            </div>
            <button className="w-full rounded-2xl bg-orange-500 px-4 py-4 font-semibold text-slate-950">
              Comprar caliche
            </button>
          </div>
        </InfoCard>
        <InfoCard title="Qué sucede aquí">
          <ol className="space-y-2 list-decimal pl-5">
            <li>La constructora decide cuánto material quiere adquirir.</li>
            <li>La operación representa un derecho de extracción digital.</li>
            <li>Ese saldo queda disponible para redención posterior.</li>
          </ol>
        </InfoCard>
      </section>
    </PageShell>
  );
}
