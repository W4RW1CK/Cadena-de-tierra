# TECH_STACK

## Locked stack for MVP

### Frontend
- Next.js 16.x
- React 19.x
- TypeScript 5.x
- Tailwind CSS 4.x
- ethers 6.x

### Smart contract
- Solidity ^0.8.20

### Blockchain
- Monad testnet
- MetaMask

## Current repository implementation
- Next.js app router project
- Frontend in `src/app/`
- Contract in `contracts/CadenaDeTierra.sol`

## Current contract structure
### State
- `totalSupply`
- `totalInventory`
- `remainingInventory`
- `totalBurned`
- `balanceOf`

### Functions
- `buyTokens(uint256 amount)`
- `redeemAndBurn(uint256 amount)`
- `getRemainingInventory()`

## Dependencies currently assumed by the app
- next
- react
- react-dom
- ethers
- typescript
- tailwindcss
- eslint

## Infrastructure explicitly not required for MVP
- traditional backend server
- database
- oracle service
- IoT integration
- fiat rails

## Future stack, not MVP
- oracle for báscula data
- IoT hardware integration
- embedded wallet
- payment service for fiat entry
