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

## Como funciona

1. Cada usuario se une a la sala Yjs `max-academy-3d-room` via WebRTC
2. Los objetos viven en un `Y.Map` compartido — CRDT, sin conflictos
3. El awareness de Yjs muestra quien esta conectado
4. Clicks en el toolbar crean objetos que se sincronizan a todos los peers
5. Seleccion via raycaster, propiedades editables en panel derecho
6. Todo P2P, sin servidor propio

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
| Base/Integration | Max Sarlija |

## Scripts

```bash
npm run dev      # Dev server
npm run build    # Build produccion
npm run preview  # Preview local del build
```
