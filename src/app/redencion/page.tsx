"use client";

import { useState } from "react";
import { TopNav } from "@/components/top-nav";
import { DEMO_BALANCE, DEMO_BURNED } from "@/components/demo-data";
import { InfoCard, MetricCard, PageIntro, PageShell } from "@/components/ui";

export default function RedencionPage() {
  const [redeemAmount, setRedeemAmount] = useState("40");

  return (
    <PageShell>
      <TopNav />
      <PageIntro
        eyebrow="Redención"
        title="Redime material y ejecuta burn"
        description="Al retirar material, la constructora consume parte de su saldo y el sistema registra el material consumido."
      />
      <section className="grid gap-4 md:grid-cols-2">
        <MetricCard label="Mi saldo" value={DEMO_BALANCE} helper="Derecho disponible para retiro" />
        <MetricCard label="Material consumido" value={DEMO_BURNED} helper="Burn ejecutado on-chain" />
      </section>
      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <InfoCard title="Redimir material">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-400">Cantidad a redimir</label>
              <input
                type="number"
                min="1"
                value={redeemAmount}
                onChange={(e) => setRedeemAmount(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-lg text-white outline-none"
              />
            </div>
            <button className="w-full rounded-2xl bg-white px-4 py-4 font-semibold text-slate-950">
              Redimir material
            </button>
          </div>
        </InfoCard>
        <InfoCard title="Qué sucede aquí">
          <ol className="space-y-2 list-decimal pl-5">
            <li>La constructora decide cuánto material retirar.</li>
            <li>La redención ejecuta burn y reduce el saldo disponible.</li>
            <li>El sistema refleja el consumo de inventario.</li>
          </ol>
        </InfoCard>
      </section>
    </PageShell>
  );
}
