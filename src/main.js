// --- Styles ---
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/topbar.css'
import './styles/toolbar.css'
import './styles/viewport.css'
import './styles/panels.css'

// --- Modules ---
import { scene, camera, renderer, controls, mountRenderer, resize } from './scene.js'
import { onStatusChange, setLocalUser, onAwarenessChange } from './sync.js'
import { syncFromRemote } from './objects.js'
import {
  initUI,
  renderScenePanel,
  renderPropsPanel,
  renderUsersPanel,
  updateConnectionStatus,
  selectObject,
  showToast,
} from './ui.js'
import { raycasterSetup } from './interaction.js'

// --- Boot ---
mountRenderer()
resize()

// Generate local user identity
const USER_COLORS = ['#00d4ff', '#8b5cf6', '#e879f9', '#84cc16', '#f97316']
const myColor = USER_COLORS[Math.floor(Math.random() * USER_COLORS.length)]
const myName = 'User_' + Math.random().toString(36).slice(2, 6)
const myInitials = myName.slice(0, 2).toUpperCase()

setLocalUser({ name: myName, color: myColor, initials: myInitials })

// --- Connection status ---
onStatusChange((status) => {
  updateConnectionStatus(status)
  if (status === 'connected') {
    showToast('Connected to room', 'success')
  }
})

// --- Awareness (peers online) ---
onAwarenessChange((users) => {
  renderUsersPanel(users)
})

// --- Sync 3D objects from Yjs ---
syncFromRemote(() => {
  renderScenePanel()
  renderPropsPanel()
})

// --- UI init ---
initUI()

// --- Raycaster for object picking ---
raycasterSetup(selectObject)

// --- Render loop ---
function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

animate()

console.log('[VoxelParty] Ready — room: max-academy-3d-room')
