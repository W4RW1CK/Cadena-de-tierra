# APP_FLOW

## Screen inventory

### Screen 1. Compra
**Purpose:** Permitir a la constructora adquirir derecho de extracción.

**Main actions:**
- conectar wallet
- ingresar cantidad
- comprar

### Screen 2. Redención
**Purpose:** Permitir a la constructora redimir parte del material.

**Main actions:**
- ver saldo actual
- ingresar cantidad a redimir
- ejecutar redención y burn

### Shared visible state
- wallet conectada
- inventario total
- inventario restante
- tokens quemados
- balance del usuario
- estado de transacción

## MVP navigation path

### Flow 1. Conectar wallet
1. El usuario abre la app.
2. El usuario presiona conectar wallet.
3. MetaMask solicita autorización.
4. Si acepta, la app muestra la wallet y lee estado del contrato.
5. Si falla, la app muestra error de conexión.

### Flow 2. Compra
1. El usuario entra a la sección de compra.
2. Ingresa la cantidad deseada.
3. Presiona comprar.
4. MetaMask solicita confirmación.
5. Si la transacción confirma, el balance del usuario aumenta.
6. La interfaz actualiza inventario, balance y estado.
7. Si falla, la interfaz muestra error.

### Flow 3. Redención
1. El usuario entra a la sección de redención.
2. Ve su saldo disponible.
3. Ingresa la cantidad a redimir.
4. Presiona redimir.
5. MetaMask solicita confirmación.
6. Si la transacción confirma, ocurre burn.
7. La interfaz actualiza balance, inventario restante y tokens quemados.
8. Si falla, la interfaz muestra error.

## Decision points
- Si no hay wallet, no se puede operar.
- Si no hay contract address configurada, la app debe informar el error.
- Si MetaMask rechaza la transacción, la operación no continúa.
- Si la transacción falla, la UI debe mostrar error sin corromper el estado visible.

## Future operational flow (roadmap, not MVP)
1. La constructora compra derecho de extracción.
2. Se genera un permiso para el operador o chofer.
3. El operador llega al sitio.
4. El material se carga.
5. La báscula reporta salida.
6. Un oráculo dispara redención y burn.
7. El sistema deja registro verificable del consumo.
