# BACKEND_STRUCTURE

## MVP actual
El MVP no depende de un backend tradicional.

## Núcleo actual
- Smart contract como capa principal de estado
- Frontend conectado directamente por ethers.js
- Wallet del usuario como autenticación operativa para demo

## Estructura lógica del sistema
### Capa 1. Frontend
- Interfaz de compra
- Interfaz de redención
- Visualización del estado on-chain

### Capa 2. Smart contract
- Guarda balances
- Registra inventario total
- Registra inventario restante
- Registra burn de material consumido

## Roadmap backend futuro
### Servicio de oráculo
- recibe datos de báscula
- valida pesos
- dispara burn o redención automatizada

### Servicio de permisos
- genera acceso/QR para operador o chofer
- asocia permiso temporal con comprador

### Servicio de pagos
- recibe fiat
- convierte o refleja compra on-chain

## No incluido en MVP
- Base de datos operativa
- Panel de administración completo
- Integración con ERP
- Logs industriales reales
