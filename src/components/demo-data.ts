export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

export const ABI = [
  "function buyTokens(uint256 amount) external",
  "function redeemAndBurn(uint256 amount) external",
  "function balanceOf(address owner) view returns (uint256)",
  "function totalInventory() view returns (uint256)",
  "function remainingInventory() view returns (uint256)",
  "function totalBurned() view returns (uint256)",
];

export const DEMO_TOTAL_INVENTORY = "10,000";
export const DEMO_REMAINING_INVENTORY = "10,000";
export const DEMO_BURNED = "0";
export const DEMO_BALANCE = "0";
