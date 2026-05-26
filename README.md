# VoxelParty — Collaborative 3D Studio

Editor de modelado 3D multi-usuario en tiempo real. Todos editan la misma escena, al mismo tiempo, desde el navegador. Sin servidor, sin costo.

Proyecto del desafio en vivo — **Max Sarlija Academy**.

## Stack

| Capa | Tecnologia |
|------|-----------|
| 3D / Render | [Three.js](https://threejs.org) |
| Estado compartido | [Yjs](https://yjs.dev) (CRDT) |
| Conexion P2P | [y-webrtc](https://github.com/yjs/y-webrtc) |
| UI | Vanilla JS + CSS Grid (Kalil) |
| Sync/Visibility | CSS + JS awareness (Manuel/Igor) |
| Import/Export | Python asset pipeline (Mauricio) |
| 3D Gizmos & Controls | TransformControls & BoxHelper (Facundo) |
| Performance & Red | WebRTC throttling & VRAM cleanup (Facundo) |
| Build | [Vite](https://vitejs.dev) |
| Deploy | GitHub Pages |

## Instalacion

```bash
npm install
npm run dev
```

Abri `http://localhost:5173`. Para probar multi-usuario, abri la misma URL en dos pestanas o navegadores.

## Estructura

```
index.html                 # App shell con layout grid (UI: Kalil)
src/
  main.js                  # Entry point, boot sequence
  scene.js                 # Three.js: escena, camara, luces, OrbitControls
  sync.js                  # Yjs: Y.Doc + WebRTC provider + awareness (MP: Igor/Manuel)
  objects.js               # CRUD de objetos 3D sincronizados via Y.Map
  ui.js                    # Toolbar, paneles, toasts, awareness UI (Kalil)
  interaction.js           # Raycaster para seleccion de objetos
  icons.js                 # Libreria SVG de iconos + tool definitions
  styles/
    tokens.css             # Design tokens (colores, spacing, tipografia)
    base.css               # Reset + globals
    layout.css             # Grid shell del app
    topbar.css             # Header bar
    toolbar.css            # Tool buttons laterales
    viewport.css           # Canvas 3D overlays
    panels.css             # Scene list, properties, users, toasts
asset_exchange.py          # Sistema de import/export extensible (Mauricio)
vite.config.js
package.json
```

## Cómo funciona

1. Cada usuario se une a una sala Yjs única vía WebRTC (generada dinámicamente mediante el parámetro `?room=` en la URL para evitar colisiones).
2. Los objetos viven en un `Y.Map` compartido — CRDT, sin conflictos de fusión.
3. El awareness de Yjs muestra quién está conectado en vivo.
4. Clicks en el toolbar o atajos de teclado crean objetos 3D sincronizados.
5. Selección en 3D vía Raycaster (con resaltado visual BoxHelper) y manipulación directa interactiva usando Gizmos (TransformControls).
6. Tráfico de red optimizado con throttling a 15 Hz para el arrastre y sincronización de propiedades en la barra de propiedades lateral.
7. Todo P2P, sin servidor propio (con fallback al servidor público en caso de caída).

## Asset Exchange (Python)

El sistema de Mauricio permite importar/exportar metadata de assets:

```bash
python asset_exchange.py
```

Soporta JSON y .manifest (key=value). Extensible via Strategy Pattern.

## Deploy a GitHub Pages

```bash
npm run build
```

Settings > Pages > Source: GitHub Actions. O manual:

```bash
npx gh-pages -d dist
```

## Creditos

| Contribucion | Autor |
|-------------|-------|
| UI/UX Interface | Kalil (@kalilfiat) |
| Multiplayer Sync | Igor (@Igor-Streiff) |
| MP Visibility/CSS | Manuel (@manucastellani) |
| Asset Exchange | Mauricio (@ElkronAiken) |
| 3D Gizmos & Performance | Facundo Villarreal (@facu041294) |
| Base/Integration | Max Sarlija |

## Scripts

```bash
npm run dev      # Dev server
npm run build    # Build produccion
npm run preview  # Preview local del build
```
