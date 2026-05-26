# Informe de Avance y Optimización - Facundo Villarreal (Post-Merge)

Este documento registra mi contribución y conjunto de modificaciones al proyecto **VoxelParty**, adaptadas e integradas sobre la versión final fusionada (`upstream/main`) que incluye la UI de Kalil y el motor de interacción 3D.

---

## 🛠️ Registro de Modificaciones Realizadas

### 1. Enrutamiento Dinámico de Salas P2P
* **Archivo modificado**: [src/sync.js](file:///g:/Github repositories/VoxelParty/src/sync.js)
* **Descripción**: Se reemplazó el canal WebRTC fijo (`max-academy-3d-room`) por un enrutador dinámico.
* **Funcionamiento**:
  * Lee el parámetro `room` de la URL (`?room=id_sala`).
  * Si la URL no contiene sala, genera automáticamente un ID único y aleatorio usando `crypto.randomUUID()` (o fallback) e inyecta la sala en la barra de direcciones del navegador utilizando `window.history.replaceState` sin recargar la pestaña.
* **Beneficio**: Evita que todos los miembros del equipo que prueben la aplicación en paralelo colisionen en la misma escena virtual.

### 2. Gestión de Memoria GPU (Prevención de Memory Leaks)
* **Archivo modificado**: [src/objects.js](file:///g:/Github repositories/VoxelParty/src/objects.js)
* **Descripción**: Se auditaron e integraron las llamadas de liberación en la GPU.
* **Funcionamiento**:
  * Al eliminar o reemplazar meshes de la escena, el observador en `syncFromRemote` ejecuta `.dispose()` tanto en la geometría como en el/los materiales del objeto 3D antes de eliminar la malla.
* **Beneficio**: Previene que la memoria de video consumida por la GPU aumente indefinidamente tras agregar y eliminar objetos, evitando cuelgues del navegador.

### 3. Estrangulación de Red (Throttling de Transformaciones P2P)
* **Archivo modificado**: [src/objects.js](file:///g:/Github repositories/VoxelParty/src/objects.js) y [src/ui.js](file:///g:/Github repositories/VoxelParty/src/ui.js)
* **Descripción**: Se reguló la tasa de transmisión de datos en tiempo real para evitar la saturación del canal WebRTC.
* **Funcionamiento**:
  * Se optimizó `updateObjectTransform(id, transform, isFinal)` limitando la tasa de actualizaciones del mapa de Yjs a un máximo de **15 Hz (~15 actualizaciones por segundo / ~66ms)**.
  * Si el usuario realiza una edición continua (como arrastrar el selector de color en la paleta, evento `'input'`), los datos se transmiten de manera regulada.
  * Al soltar el ratón en la interacción final o al cambiar inputs de la jerarquía (evento `'change'`), se pasa la bandera `isFinal = true` para forzar una sincronización instantánea y asegurar precisión absoluta en la posición y color final.
  * **Optimización Adicional**: Al eliminar un objeto, el observador de la acción `'delete'` en `syncFromRemote` limpia automáticamente los temporizadores activos y remueve las claves del objeto de los tres mapas de throttling (`throttleTimers`, `throttleLastArgs`, `throttleLastRuns`), previniendo fugas de memoria en la caché de red (JS Heap Leak).
* **Beneficio**: Evita la inundación y saturación del canal WebRTC en conexiones peer-to-peer y mantiene estable el consumo de memoria RAM.

---

## 💾 Estado del Commit en la Rama Local

Los cambios fueron comprometidos localmente en la rama `Facu_Branch`:
* **Mensaje**: `perf: implement dynamic room routing and transform throttling`
* **Archivos incluidos**:
  * `src/objects.js`
  * `src/sync.js`
  * `src/ui.js`

El archivo `facundo-villarreal/README.md` ha sido actualizado para reflejar la integración post-merge con la estructura activa del proyecto.
