# Roadmap de ejecución

## Etapa 1. Base del proyecto

### Objetivo
Tener repo funcional con frontend base y contrato inicial.

### Pasos
- [x] Crear repo
- [x] Inicializar proyecto Next.js
- [x] Instalar ethers
- [x] Crear contrato base `CadenaDeTierra.sol`
- [x] Crear UI base con inventario, compra y redención
- [x] Subir base a GitHub

### Cómo corroboramos avance
- El repo contiene `contracts/` y `src/app/page.tsx`
- El proyecto compila y pasa lint
- Los archivos están visibles en GitHub

### Estado
**Completada**

---

## Etapa 2. Deploy del contrato

### Objetivo
Tener el contrato desplegado en Monad testnet.

### Pasos
- [ ] Abrir contrato en Remix
- [ ] Compilar correctamente
- [ ] Conectar MetaMask a Monad testnet
- [ ] Deployar con inventario inicial `10000`
- [ ] Guardar contract address

### Cómo corroboramos avance
- Existe una address desplegada
- El contrato responde en Remix
- Se puede consultar `totalInventory` y `remainingInventory`

### Estado
**Pendiente**

---

## Etapa 3. Conexión frontend + contrato

### Objetivo
Conectar el frontend al contrato desplegado.

### Pasos
- [ ] Crear `.env.local`
- [ ] Agregar `NEXT_PUBLIC_CONTRACT_ADDRESS`
- [ ] Ejecutar `npm run dev`
- [ ] Probar conexión de wallet
- [ ] Leer inventario y balance en pantalla

### Cómo corroboramos avance
- La app levanta localmente
- Se conecta MetaMask
- Se muestran métricas del contrato en UI

### Estado
**Pendiente**

---

## Etapa 4. Flujo funcional completo

### Objetivo
Lograr demo real end-to-end.

### Pasos
- [ ] Comprar tokens desde la UI
- [ ] Ver balance actualizado
- [ ] Redimir tokens desde la UI
- [ ] Ver inventario restante actualizado
- [ ] Ver tokens quemados actualizados

### Cómo corroboramos avance
- El flujo compra → redime → burn → inventario funciona
- Las transacciones son confirmadas por wallet

### Estado
**Pendiente**

---

## Etapa 5. Preparación de demo y entrega

### Objetivo
Dejar el proyecto listo para mostrar.

### Pasos
- [ ] Revisar README
- [ ] Validar demo checklist
- [ ] Preparar script corto de pitch
- [ ] Tener links a repo y contrato

### Cómo corroboramos avance
- El flujo demo corre sin errores
- Hay narrativa lista para explicar el proyecto

### Estado
**Pendiente**
