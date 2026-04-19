"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ABI, CONTRACT_ADDRESS, DEMO_BALANCE, DEMO_BURNED, DEMO_REMAINING_INVENTORY, DEMO_TOTAL_INVENTORY } from "@/components/demo-data";
import { MetricCard } from "@/components/ui";

type EthereumWindow = Window & {
  ethereum?: ethers.Eip1193Provider;
};

type LiveStats = {
  totalInventory: string;
  remainingInventory: string;
  totalBurned: string;
  balance: string;
};

function formatValue(value: bigint) {
  return new Intl.NumberFormat("en-US").format(Number(value));
}

function getEthereum() {
  return typeof window !== "undefined" ? (window as EthereumWindow).ethereum : undefined;
}

export function CompraMetrics() {
  const [stats, setStats] = useState<LiveStats>({
    totalInventory: DEMO_TOTAL_INVENTORY,
    remainingInventory: DEMO_REMAINING_INVENTORY,
    totalBurned: DEMO_BURNED,
    balance: DEMO_BALANCE,
  });

  useEffect(() => {
    async function loadStats() {
      if (!CONTRACT_ADDRESS) return;

      try {
        const provider = new ethers.JsonRpcProvider("https://testnet-rpc.monad.xyz");
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
        const [totalInventory, remainingInventory] = await Promise.all([
          contract.totalInventory(),
          contract.remainingInventory(),
        ]);

        setStats((current) => ({
          ...current,
          totalInventory: formatValue(totalInventory),
          remainingInventory: formatValue(remainingInventory),
        }));
      } catch {
        // keep fallback
      }
    }

    loadStats();
  }, []);

  return (
    <section className="grid gap-4 md:grid-cols-2">
      <MetricCard label="Inventario total" value={stats.totalInventory} helper="Reserva total del sistema" />
      <MetricCard label="Disponible para compra" value={stats.remainingInventory} helper="Cantidad visible para operación" />
    </section>
  );
}

export function RedencionMetrics() {
  const [stats, setStats] = useState<LiveStats>({
    totalInventory: DEMO_TOTAL_INVENTORY,
    remainingInventory: DEMO_REMAINING_INVENTORY,
    totalBurned: DEMO_BURNED,
    balance: DEMO_BALANCE,
  });

  useEffect(() => {
    async function loadStats() {
      if (!CONTRACT_ADDRESS) return;

      try {
        const ethereum = getEthereum();
        const provider = ethereum ? new ethers.BrowserProvider(ethereum) : new ethers.JsonRpcProvider("https://testnet-rpc.monad.xyz");
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
        const totalBurned = await contract.totalBurned();

        let balance = BigInt(0);
        if (ethereum) {
          const browserProvider = provider as ethers.BrowserProvider;
          const accounts = await browserProvider.send("eth_accounts", []);
          if (accounts?.[0]) {
            balance = await contract.balanceOf(accounts[0]);
          }
        }

        setStats((current) => ({
          ...current,
          totalBurned: formatValue(totalBurned),
          balance: formatValue(balance),
        }));
      } catch {
        // keep fallback
      }
    }

    loadStats();
  }, []);

  return (
    <section className="grid gap-4 md:grid-cols-2">
      <MetricCard label="Mi saldo" value={stats.balance} helper="Derecho disponible para retiro" />
      <MetricCard label="Material consumido" value={stats.totalBurned} helper="Burn ejecutado on-chain" />
    </section>
  );
}
