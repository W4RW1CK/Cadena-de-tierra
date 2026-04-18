"use client";

import { useMemo, useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

const ABI = [
  "function buyTokens(uint256 amount) external",
  "function redeemAndBurn(uint256 amount) external",
  "function balanceOf(address owner) view returns (uint256)",
  "function totalInventory() view returns (uint256)",
  "function remainingInventory() view returns (uint256)",
  "function totalBurned() view returns (uint256)",
];

const DEMO_TOTAL_INVENTORY = "10,000";
const DEMO_REMAINING_INVENTORY = "10,000";
const DEMO_BURNED = "0";
const DEMO_BALANCE = "0";

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState("Conecta tu wallet para empezar la demo.");
  const [buyAmount, setBuyAmount] = useState("100");
  const [redeemAmount, setRedeemAmount] = useState("40");
  const [inventory, setInventory] = useState("-");
  const [totalInventory, setTotalInventory] = useState("-");
  const [burned, setBurned] = useState("-");
  const [balance, setBalance] = useState("-");

  const hasEthereum = typeof window !== "undefined" && !!window.ethereum;
  const isConfigured = useMemo(() => CONTRACT_ADDRESS.length > 0, []);
  const hasLiveData = wallet.length > 0 && totalInventory !== "-";

  async function getContract() {
    if (!hasEthereum || !CONTRACT_ADDRESS) return null;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  }

  async function refreshData(address?: string) {
    if (!hasEthereum || !CONTRACT_ADDRESS) return;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const currentAddress = address || (await signer.getAddress());
    const instance = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const [totalInv, remainingInv, totalBurn, tokenBalance] = await Promise.all([
      instance.totalInventory(),
      instance.remainingInventory(),
      instance.totalBurned(),
      instance.balanceOf(currentAddress),
    ]);

    setTotalInventory(totalInv.toString());
    setInventory(remainingInv.toString());
    setBurned(totalBurn.toString());
    setBalance(tokenBalance.toString());
  }

  async function connectWallet() {
    try {
      if (!hasEthereum) {
        setStatus("Instala MetaMask para continuar.");
        return;
      }
      if (!CONTRACT_ADDRESS) {
        setStatus("Falta NEXT_PUBLIC_CONTRACT_ADDRESS en .env.local");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWallet(address);
      setStatus("Wallet conectada. Ya puedes comprar y redimir material.");
      await refreshData(address);
    } catch {
      setStatus("No se pudo conectar la wallet.");
    }
  }

  async function buyTokens() {
    try {
      setStatus("Procesando compra de derecho de extracción...");
      const instance = await getContract();
      if (!instance) return;
      const tx = await instance.buyTokens(BigInt(buyAmount));
      await tx.wait();
      setStatus("Compra completada. El saldo ya está disponible para redención.");
      await refreshData(wallet);
    } catch {
      setStatus("Error al comprar derecho de extracción.");
    }
  }

  async function redeemTokens() {
    try {
      setStatus("Procesando redención y burn...");
      const instance = await getContract();
      if (!instance) return;
      const tx = await instance.redeemAndBurn(BigInt(redeemAmount));
      await tx.wait();
      setStatus("Redención completada. El material consumido ya fue reflejado.");
      await refreshData(wallet);
    } catch {
      setStatus("Error al redimir material.");
    }
  }

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.16),transparent_25%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 md:px-10 md:py-12">
        <header className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-10 px-6 py-8 md:grid-cols-[1.3fr_0.7fr] md:px-10 md:py-10">
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full border border-orange-400/20 bg-orange-400/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-orange-200/80">
                Demo sobre Monad testnet
              </div>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                  Compra y retira <span className="text-orange-400">caliche</span> con menos fricción.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                  Cadena de Tierra permite a constructoras comprar derechos de extracción de caliche,
                  redimirlos al retirar material y verificar la operación en tiempo real.
                </p>
              </div>
              <div className="grid gap-3 text-sm text-slate-300 md:grid-cols-3">
                <HighlightPill title="Compra" subtitle="Adquiere derecho de extracción" />
                <HighlightPill title="Redención" subtitle="Retira solo lo que necesitas" />
                <HighlightPill title="Verificación" subtitle="Inventario y consumo visibles" />
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Estado de la experiencia</p>
                  <p className="mt-1 text-xl font-semibold">
                    {wallet ? "Lista para redención" : "Lista para compra"}
                  </p>
                </div>
                <div className={`rounded-full px-3 py-1 text-xs font-medium ${isConfigured ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}>
                  {isConfigured ? "Configuración activa" : "Modo visual"}
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Wallet</p>
                <p className="mt-2 break-all text-sm text-slate-200">{wallet || "Conecta una wallet para operar en vivo"}</p>
              </div>
              <button
                onClick={connectWallet}
                className="mt-5 w-full rounded-2xl bg-orange-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-orange-400"
              >
                Conectar wallet
              </button>
              <p className="mt-4 rounded-2xl border border-orange-400/20 bg-orange-400/10 px-4 py-3 text-sm leading-6 text-orange-100">
                {status}
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Inventario total" value={hasLiveData ? totalInventory : DEMO_TOTAL_INVENTORY} accent="orange" helper="Reserva visible del sistema" />
          <MetricCard label="Inventario restante" value={hasLiveData ? inventory : DEMO_REMAINING_INVENTORY} accent="sky" helper="Disponible para redención" />
          <MetricCard label="Material consumido" value={hasLiveData ? burned : DEMO_BURNED} accent="rose" helper="Burn ejecutado on-chain" />
          <MetricCard label="Mi saldo" value={hasLiveData ? balance : DEMO_BALANCE} accent="emerald" helper="Derecho de extracción actual" />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
          <ActionCard
            eyebrow="Paso 1"
            title="Compra de derecho de extracción"
            description="La constructora adquiere una cantidad de caliche representada digitalmente para usarla cuando la necesite."
            value={buyAmount}
            onChange={setBuyAmount}
            buttonLabel="Comprar caliche"
            onSubmit={buyTokens}
          />

          <ActionCard
            eyebrow="Paso 2"
            title="Redención y burn"
            description="Al retirar material, la constructora redime una parte del saldo y el sistema refleja el consumo del inventario."
            value={redeemAmount}
            onChange={setRedeemAmount}
            buttonLabel="Redimir material"
            onSubmit={redeemTokens}
          />

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Cómo se cuenta la historia</p>
            <h2 className="mt-3 text-2xl font-semibold">Demo narrative</h2>
            <ol className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <li><span className="font-semibold text-white">1.</span> La constructora visualiza inventario y conecta su wallet.</li>
              <li><span className="font-semibold text-white">2.</span> Compra una cantidad de caliche como derecho de extracción.</li>
              <li><span className="font-semibold text-white">3.</span> Redime parte del material y ejecuta burn.</li>
              <li><span className="font-semibold text-white">4.</span> El sistema actualiza saldo, inventario restante y material consumido.</li>
            </ol>
            <div className="mt-6 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4 text-sm text-sky-100">
              Monad corre detrás del flujo como infraestructura rápida y barata para registrar redención y consumo.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function HighlightPill({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
      <p className="font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
    </div>
  );
}

function MetricCard({
  label,
  value,
  accent,
  helper,
}: {
  label: string;
  value: string;
  accent: "orange" | "sky" | "rose" | "emerald";
  helper: string;
}) {
  const accentClasses = {
    orange: "text-orange-400 border-orange-400/20 bg-orange-400/10",
    sky: "text-sky-400 border-sky-400/20 bg-sky-400/10",
    rose: "text-rose-400 border-rose-400/20 bg-rose-400/10",
    emerald: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl">
      <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${accentClasses[accent]}`}>
        {label}
      </div>
      <p className={`mt-4 text-4xl font-semibold ${accentClasses[accent].split(" ")[0]}`}>{value}</p>
      <p className="mt-2 text-sm text-slate-400">{helper}</p>
    </div>
  );
}

function ActionCard({
  eyebrow,
  title,
  description,
  value,
  onChange,
  buttonLabel,
  onSubmit,
}: {
  eyebrow: string;
  title: string;
  description: string;
  value: string;
  onChange: (value: string) => void;
  buttonLabel: string;
  onSubmit: () => void;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      <div className="mt-6">
        <label className="text-sm text-slate-400">Cantidad</label>
        <input
          type="number"
          min="1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-lg text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/40"
          placeholder="Ingresa una cantidad"
        />
      </div>
      <button
        onClick={onSubmit}
        className="mt-5 w-full rounded-2xl bg-white px-4 py-4 font-semibold text-slate-950 transition hover:bg-slate-100"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
