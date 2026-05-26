# Nota para PM - PR Sync Multiplayer P2P

## Current Goal

Preparar y entregar el PR de la parte de sincronizacion multiplayer P2P para `VoxelParty`, usando Yjs + `y-webrtc`, sin backend central.

## Workspace / Folder

- Proyecto: `VoxelParty`
- Branch del PR: `feature/sync-multiplayer-p2p`
- Base esperada: `main`
- URL para abrir PR: `https://github.com/Igor-Streiff/VoxelParty/pull/new/feature/sync-multiplayer-p2p`

## Files And Directories Involved

- `package.json`
- `package-lock.json`
- `vite.config.js`
- `index.html`
- `src/main.js`
- `src/sync.js`
- `src/scene.js`
- `src/objects.js`
- `src/ui.js`
- `src/style.css`
- `igor_folder/nota_sync_multiplayer.md`
- `igor_folder/plan_checklist_sync_multiplayer.md`
- `igor_folder/handoff_sync_multiplayer.md`

## Decisions Made

- Como el repositorio local no tenia `src/` ni `package.json`, se creo una base minima local con Vite + Three.js.
- La sincronizacion multiplayer quedo concentrada en `src/sync.js`.
- La sala P2P fija usada es `meshmosh-room`.
- El estado persistente de la escena vive en un `Y.Map` de Yjs.
- `awareness` se usa solo para presencia de usuarios, no para objetos.
- `Add Cube` escribe primero en Yjs; la escena local reacciona al listener del estado compartido.
- Las transformaciones basicas se prueban por botones de UI, no desde el render loop.

## Work Completed

- Se implemento una app minima runnable con Vite.
- Se agrego escena Three.js con grid, camara, luces y OrbitControls.
- Se implemento `src/sync.js` con:
  - `addSharedObject`
  - `updateSharedObject`
  - `deleteSharedObject`
  - `observeSharedObjects`
  - `setLocalUser`
  - `observeUsers`
  - `getSharedObject`
- Se conecto `Add Cube` al estado compartido.
- Se agrego seleccion por click sobre cubos.
- Se agregaron transformaciones basicas de posicion, rotacion y escala.
- Se agrego borrado de objeto seleccionado.
- Se agrego lista simple de usuarios conectados via awareness.
- Se documento handoff tecnico en `igor_folder/handoff_sync_multiplayer.md`.
- Se actualizo checklist en `igor_folder/plan_checklist_sync_multiplayer.md`.
- Se agrego `.gitignore` para evitar versionar `node_modules/` y `dist/`.

## Tests Performed

- `npm install`: correcto, sin vulnerabilidades reportadas.
- `npm run build`: correcto.
- `npm run dev -- --host 127.0.0.1`: arranco correctamente.
- `Invoke-WebRequest http://127.0.0.1:5173/`: respondio HTTP `200`.
- Diagnosticos/lints del IDE: sin errores reportados.

## PR / Conflict Notes

- El PR se preparo desde la branch `feature/sync-multiplayer-p2p`.
- El commit creado fue `012b2d5 Add P2P sync multiplayer prototype`.
- Al intentar abrir el PR en GitHub, GitHub reporto 9 conflictos.
- El usuario entro a la vista de GitHub y presiono `Resolve`.
- En el estado local revisado despues, la branch esta limpia y trackea `origin/feature/sync-multiplayer-p2p`.
- No hay marcadores de conflicto locales (`<<<<<<<`, `=======`, `>>>>>>>`) dentro del workspace.
- No se verificaron los 9 archivos exactos de conflicto desde local porque el conflicto aparecio en GitHub, no como merge conflict local.

## Risks

- Falta prueba manual real con dos pestanas o dos navegadores para confirmar:
  - aparicion remota de cubos,
  - transformaciones remotas,
  - reconexion despues de refresh,
  - actualizacion de lista de usuarios conectados.
- El bundle de produccion supera 500 kB por dependencias como Three.js/Yjs; Vite lo reporta como warning, no como error.
- Si GitHub mantiene conflictos, conviene resolverlos comparando contra `main` actualizado antes del merge final.

## Next Steps

1. Completar la resolucion de conflictos en GitHub si la UI todavia los muestra.
2. Correr prueba manual con dos pestanas en `http://127.0.0.1:5173/`.
3. Revisar que el PR mantenga la logica de red dentro de `src/sync.js`.
4. Pedir review de Max o Merge Master.
5. Si el PR queda verde y sin conflictos, mergear a `main` segun el flujo del equipo.

## Do Not Repeat / Do Not Touch

- No instalar toolkits extra ni modificar PATH desde este contexto.
- No agregar backend, sockets propios ni servicios pagos.
- No guardar objetos Three.js dentro de Yjs; guardar solo JSON serializable.
- No sincronizar transformaciones desde el render loop.
