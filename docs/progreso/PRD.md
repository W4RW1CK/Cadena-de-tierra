# PRD - Cadena de Tierra

## Product summary
Cadena de Tierra permite a una constructora comprar derechos de extracción de caliche, redimirlos al retirar material y verificar la operación en tiempo real.

## Problem statement
La compra y retiro de caliche depende hoy de procesos lentos, visibilidad limitada del inventario, validaciones manuales y fricción entre compra, acceso y retiro del material.

## Target user
### Primary user
- Constructora compradora de material.

### Secondary operational user
- Operador o chofer que ejecuta el retiro con permiso derivado del comprador.

## MVP goal
Demostrar que una constructora puede:
1. comprar una cantidad de caliche representada digitalmente,
2. redimir parte de esa cantidad,
3. y verificar en tiempo real cómo el inventario se actualiza mediante burn on-chain en Monad testnet.

## Success criteria
El MVP está completo si:
- la wallet se conecta correctamente,
- la constructora puede comprar derecho de extracción,
- la constructora puede redimir parte del saldo,
- el burn se ejecuta correctamente,
- el inventario restante y los tokens quemados se actualizan en la interfaz.

## In scope
- Conexión de wallet con MetaMask
- Compra simplificada de derecho de extracción
- Redención parcial de material
- Burn como prueba de consumo del inventario
- Visualización de inventario restante
- Visualización de tokens quemados
- Interfaz de compra
- Interfaz de redención
- Contrato desplegado en Monad testnet

## Out of scope
- Integración real con báscula
- Oráculo productivo
- Proof of reserve geológico on-chain completo
- Automatización industrial final
- Pagos fiat reales
- ERP o panel administrativo completo
- Backend tradicional

## Non-goals
- No construir un marketplace completo
- No construir un producto de inversión final
- No construir un sistema IoT industrial real
- No demostrar hardware real en la demo

## Core product hypothesis
Digitalizar el derecho de extracción y su consumo reduce fricción operativa y mejora la trazabilidad del retiro del material.

## Main user story
Como constructora,
quiero comprar y redimir derechos de extracción de caliche,
para retirar material con menor fricción y verificar la operación en tiempo real.

## Feature requirements

### Feature 1. Wallet connection
**Description:** El usuario conecta su wallet para interactuar con el contrato.

**Acceptance criteria:**
- El usuario puede conectar MetaMask
- La interfaz muestra la wallet conectada
- La app puede leer datos del contrato con esa wallet

### Feature 2. Compra
**Description:** El usuario compra una cantidad de derecho de extracción.

**Acceptance criteria:**
- El usuario puede ingresar una cantidad
- La compra ejecuta la función del contrato correspondiente
- El balance del usuario aumenta al confirmar la transacción

### Feature 3. Redención
**Description:** El usuario redime una cantidad de material.

**Acceptance criteria:**
- El usuario puede ingresar una cantidad a redimir
- La redención ejecuta burn on-chain
- El balance del usuario disminuye
- El inventario restante disminuye
- Los tokens quemados aumentan

### Feature 4. Estado visible
**Description:** La interfaz muestra el estado operativo del sistema.

**Acceptance criteria:**
- Se muestra inventario total
- Se muestra inventario restante
- Se muestran tokens quemados
- Se muestra balance del usuario

## Demo message
Compra y redención de caliche con trazabilidad y burn auditable sobre Monad.
