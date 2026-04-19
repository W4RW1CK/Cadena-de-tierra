"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ABI, CONTRACT_ADDRESS, DEMO_BALANCE, DEMO_BURNED, DEMO_REMAINING_INVENTORY, DEMO_TOTAL_INVENTORY } from "@/components/demo-data";
import { MetricCard } from "@/components/ui";

type ContractStats = {
  totalInventory: string;
  remainingInventory: string;
  totalBurned: string;
  balance: string;
};

type EthereumWindow = Window & {
  ethereum?: ethers.Eip1193Provider;
};

function formatValue(value: bigint) {
  return new Intl.NumberFormat("en-US").format(Number(value));
}

function getEthereum() {
  return typeof window !== "undefined" ? (window as EthereumWindow).ethereum : undefined;
}

export function ContractStatsGrid({ balanceLabel = "Mi saldo", balanceHelper = "Derecho disponible" }: { balanceLabel?: string; balanceHelper?: string }) {
  const [stats, setStats] = useState<ContractStats>({
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

        const [totalInventory, remainingInventory, totalBurned] = await Promise.all([
          contract.totalInventory(),
          contract.remainingInventory(),
          contract.totalBurned(),
        ]);

        let balance = BigInt(0);

        if (ethereum) {
          const browserProvider = provider as ethers.BrowserProvider;
          const accounts = await browserProvider.send("eth_accounts", []);
          if (accounts?.[0]) {
            balance = await contract.balanceOf(accounts[0]);
          }
        }

        setStats({
          totalInventory: formatValue(totalInventory),
          remainingInventory: formatValue(remainingInventory),
          totalBurned: formatValue(totalBurned),
          balance: formatValue(balance),
        });
      } catch {
        // keep demo fallback
      }
    }

    loadStats();
  }, []);

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard label="Inventario total" value={stats.totalInventory} helper="Reserva visible del sistema" />
      <MetricCard label="Inventario restante" value={stats.remainingInventory} helper="Disponible para redención" />
      <MetricCard label="Material consumido" value={stats.totalBurned} helper="Burn ejecutado" />
      <MetricCard label={balanceLabel} value={stats.balance} helper={balanceHelper} />
    </section>
  );
}
