"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { ABI, CONTRACT_ADDRESS, DEMO_BALANCE, DEMO_BURNED, DEMO_REMAINING_INVENTORY } from "@/components/demo-data";
import { InfoCard, MetricCard } from "@/components/ui";

type EthereumWindow = Window & {
  ethereum?: ethers.Eip1193Provider;
};

function getEthereum() {
  return (window as EthereumWindow).ethereum;
}

export function Web3BuyPanel() {
  const [buyAmount, setBuyAmount] = useState("100");
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState(DEMO_BALANCE);
  const [remaining, setRemaining] = useState(DEMO_REMAINING_INVENTORY);
  const [status, setStatus] = useState("Conecta wallet para operar en vivo. Mientras tanto, esta vista sirve como demo visual.");

  async function connectWallet() {
    try {
      const ethereum = getEthereum();
      if (!ethereum) {
        setStatus("Instala MetaMask para continuar.");
        return;
      }
      if (!CONTRACT_ADDRESS) {
        setStatus("Falta NEXT_PUBLIC_CONTRACT_ADDRESS en .env.local");
        return;
      }
      const provider = new ethers.BrowserProvider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      const currentBalance = await contract.balanceOf(address);
      const currentRemaining = await contract.remainingInventory();
      setWallet(address);
      setBalance(currentBalance.toString());
      setRemaining(currentRemaining.toString());
      setStatus("Wallet conectada. Ya puedes comprar derecho de extracción.");
    } catch {
      setStatus("No se pudo conectar la wallet.");
    }
  }

  async function buyTokens() {
    try {
      const ethereum = getEthereum();
      if (!ethereum || !CONTRACT_ADDRESS) {
        setStatus("Conecta wallet y configura el contrato para operar en vivo.");
        return;
      }
      setStatus("Procesando compra...");
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      const tx = await contract.buyTokens(BigInt(buyAmount));
      await tx.wait();
      const currentBalance = await contract.balanceOf(address);
      const currentRemaining = await contract.remainingInventory();
      setBalance(currentBalance.toString());
      setRemaining(currentRemaining.toString());
      setStatus("Compra completada correctamente.");
    } catch {
      setStatus("Error al comprar. Revisa wallet, red o contrato.");
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <InfoCard title="Comprar caliche">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <button onClick={connectWallet} className="rounded-full bg-white px-5 py-2 font-semibold text-slate-950">
              Conectar wallet
            </button>
            <div className="rounded-full bg-white/[0.06] px-4 py-2 text-xs text-slate-300">
              {wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "Sin wallet conectada"}
            </div>
          </div>
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
          <button onClick={buyTokens} className="w-full rounded-2xl bg-orange-500 px-4 py-4 font-semibold text-slate-950">
            Comprar caliche
          </button>
          <p className="text-sm leading-6 text-orange-100">{status}</p>
        </div>
      </InfoCard>
      <div className="grid gap-4">
        <MetricCard label="Mi saldo" value={balance} helper="Derecho de extracción actual" />
        <MetricCard label="Disponible" value={remaining} helper="Inventario restante visible" />
      </div>
    </div>
  );
}

export function Web3RedeemPanel() {
  const [redeemAmount, setRedeemAmount] = useState("40");
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState(DEMO_BALANCE);
  const [remaining, setRemaining] = useState(DEMO_REMAINING_INVENTORY);
  const [burned, setBurned] = useState(DEMO_BURNED);
  const [status, setStatus] = useState("Conecta wallet para redimir en vivo. Mientras tanto, esta vista sirve como demo visual.");

  async function connectWallet() {
    try {
      const ethereum = getEthereum();
      if (!ethereum) {
        setStatus("Instala MetaMask para continuar.");
        return;
      }
      if (!CONTRACT_ADDRESS) {
        setStatus("Falta NEXT_PUBLIC_CONTRACT_ADDRESS en .env.local");
        return;
      }
      const provider = new ethers.BrowserProvider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      const [currentBalance, currentRemaining, currentBurned] = await Promise.all([
        contract.balanceOf(address),
        contract.remainingInventory(),
        contract.totalBurned(),
      ]);
      setWallet(address);
      setBalance(currentBalance.toString());
      setRemaining(currentRemaining.toString());
      setBurned(currentBurned.toString());
      setStatus("Wallet conectada. Ya puedes redimir material.");
    } catch {
      setStatus("No se pudo conectar la wallet.");
    }
  }

  async function redeemTokens() {
    try {
      const ethereum = getEthereum();
      if (!ethereum || !CONTRACT_ADDRESS) {
        setStatus("Conecta wallet y configura el contrato para operar en vivo.");
        return;
      }
      setStatus("Procesando redención...");
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      const tx = await contract.redeemAndBurn(BigInt(redeemAmount));
      await tx.wait();
      const [currentBalance, currentRemaining, currentBurned] = await Promise.all([
        contract.balanceOf(address),
        contract.remainingInventory(),
        contract.totalBurned(),
      ]);
      setBalance(currentBalance.toString());
      setRemaining(currentRemaining.toString());
      setBurned(currentBurned.toString());
      setStatus("Redención completada correctamente.");
    } catch {
      setStatus("Error al redimir. Revisa saldo, wallet o contrato.");
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <InfoCard title="Redimir material">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <button onClick={connectWallet} className="rounded-full bg-white px-5 py-2 font-semibold text-slate-950">
              Conectar wallet
            </button>
            <div className="rounded-full bg-white/[0.06] px-4 py-2 text-xs text-slate-300">
              {wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "Sin wallet conectada"}
            </div>
          </div>
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
          <button onClick={redeemTokens} className="w-full rounded-2xl bg-white px-4 py-4 font-semibold text-slate-950">
            Redimir material
          </button>
          <p className="text-sm leading-6 text-orange-100">{status}</p>
        </div>
      </InfoCard>
      <div className="grid gap-4">
        <MetricCard label="Mi saldo" value={balance} helper="Derecho restante del usuario" />
        <MetricCard label="Inventario restante" value={remaining} helper="Material aún disponible" />
        <MetricCard label="Material consumido" value={burned} helper="Burn acumulado" />
      </div>
    </div>
  );
}
