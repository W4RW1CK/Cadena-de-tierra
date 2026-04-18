"use client";

import { useState } from "react";
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

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState("Conecta tu wallet para empezar.");
  const [buyAmount, setBuyAmount] = useState("100");
  const [redeemAmount, setRedeemAmount] = useState("40");
  const [inventory, setInventory] = useState("-");
  const [totalInventory, setTotalInventory] = useState("-");
  const [burned, setBurned] = useState("-");
  const [balance, setBalance] = useState("-");

  const hasEthereum = typeof window !== "undefined" && !!window.ethereum;

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
      setStatus("Wallet conectada.");
      await refreshData(address);
    } catch {
      setStatus("No se pudo conectar la wallet.");
    }
  }

  async function buyTokens() {
    try {
      setStatus("Comprando tokens...");
      const instance = await getContract();
      if (!instance) return;
      const tx = await instance.buyTokens(BigInt(buyAmount));
      await tx.wait();
      setStatus("Compra completada.");
      await refreshData(wallet);
    } catch {
      setStatus("Error al comprar tokens.");
    }
  }

  async function redeemTokens() {
    try {
      setStatus("Redimiendo y quemando...");
      const instance = await getContract();
      if (!instance) return;
      const tx = await instance.redeemAndBurn(BigInt(redeemAmount));
      await tx.wait();
      setStatus("Redención completada.");
      await refreshData(wallet);
    } catch {
      setStatus("Error al redimir tokens.");
    }
  }

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">Cadena de Tierra</p>
          <h1 className="text-4xl font-bold">Inventario tokenizado de caliche sobre Monad</h1>
          <p className="max-w-3xl text-stone-300">
            Compra tokens, redime material y observa cómo el inventario se actualiza en tiempo real.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-800 bg-stone-900 p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-stone-400">Wallet</p>
              <p className="break-all text-sm">{wallet || "No conectada"}</p>
            </div>
            <button
              onClick={connectWallet}
              className="rounded-xl bg-amber-500 px-4 py-2 font-semibold text-stone-950 hover:bg-amber-400"
            >
              Conectar wallet
            </button>
          </div>
          <p className="mt-3 text-sm text-amber-300">{status}</p>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          <MetricCard label="Inventario total" value={totalInventory} />
          <MetricCard label="Inventario restante" value={inventory} />
          <MetricCard label="Tokens quemados" value={burned} />
          <MetricCard label="Mi balance" value={balance} />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <ActionCard
            title="Comprar tokens"
            description="Simula la compra de derecho sobre una cantidad de caliche disponible."
            value={buyAmount}
            onChange={setBuyAmount}
            buttonLabel="Comprar"
            onSubmit={buyTokens}
          />
          <ActionCard
            title="Redimir y quemar"
            description="Simula el retiro físico del material, quemando el token y actualizando el inventario."
            value={redeemAmount}
            onChange={setRedeemAmount}
            buttonLabel="Redimir"
            onSubmit={redeemTokens}
          />
        </section>
      </div>
    </main>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900 p-5">
      <p className="text-sm text-stone-400">{label}</p>
      <p className="mt-2 text-3xl font-bold text-amber-400">{value}</p>
    </div>
  );
}

function ActionCard({
  title,
  description,
  value,
  onChange,
  buttonLabel,
  onSubmit,
}: {
  title: string;
  description: string;
  value: string;
  onChange: (value: string) => void;
  buttonLabel: string;
  onSubmit: () => void;
}) {
  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900 p-5">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-stone-400">{description}</p>
      <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-4 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 outline-none"
      />
      <button
        onClick={onSubmit}
        className="mt-4 w-full rounded-xl bg-stone-100 px-4 py-3 font-semibold text-stone-950 hover:bg-white"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
