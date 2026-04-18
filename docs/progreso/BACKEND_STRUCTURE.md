# BACKEND_STRUCTURE

## Current MVP reality
No existe un backend implementado en esta etapa.

## Current system architecture
### Layer 1. Frontend
- Next.js UI
- wallet connection
- transaction triggers
- state visualization

### Layer 2. Smart contract
- source of truth for balances
- source of truth for total inventory
- source of truth for remaining inventory
- source of truth for burned material

## Current auth model
- MetaMask wallet acts as demo authentication layer
- no email/password auth
- no server session

## API layer
- none in MVP
- frontend interacts directly with the contract through ethers.js

## Storage layer
- none in MVP outside blockchain state

## Future backend roadmap, not MVP
### Oracle service
- recibe datos de báscula
- valida pesos
- dispara redención y burn automatizados

### Permission service
- genera acceso o QR para operador o chofer
- asocia permiso temporal con comprador

### Payment service
- recibe fiat
- refleja la compra on-chain

## Explicitly not implemented
- database schema
- REST API
- admin dashboard backend
- ERP integration
- industrial event logging service
