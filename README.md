# Cadena de Tierra

MVP de hackathon para tokenizar inventario de caliche sobre Monad.

## Qué hace

- Muestra inventario total, inventario restante y tokens quemados
- Permite comprar tokens que representan derecho sobre material
- Permite redimir material, quemando tokens y actualizando inventario

## Stack

- Next.js
- ethers.js
- Solidity
- Monad testnet

## Contrato

El contrato base vive en:

`contracts/CadenaDeTierra.sol`

Puedes compilarlo y desplegarlo rápido con Remix.

### Constructor

Recibe un inventario inicial, por ejemplo:

`10000`

## Frontend

1. Instala dependencias:

```bash
npm install
```

2. Crea tu archivo de entorno:

```bash
cp .env.example .env.local
```

3. En `.env.local`, pega la address desplegada:

```bash
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
```

4. Corre el proyecto:

```bash
npm run dev
```

## Demo flow

1. Conectar wallet
2. Ver inventario
3. Comprar tokens
4. Redimir y quemar tokens
5. Ver inventario actualizado en tiempo real
