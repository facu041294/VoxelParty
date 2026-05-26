import { icon, TOOLS } from './icons.js'
import { addObject, removeObject, updateObjectTransform, getAllObjects, getMesh, meshRegistry } from './objects.js'
import { awareness, onStatusChange, setLocalUser, onAwarenessChange } from './sync.js'
import { camera, controls } from './scene.js'

// --- State ---
let activeTool = 'select'
let selectedObjectId = null
const activityLog = []

// --- Toast system ---
export function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container')
  const toast = document.createElement('div')
  toast.className = `toast type-${type}`
  toast.textContent = msg
  container.appendChild(toast)
  setTimeout(() => {
    toast.classList.add('fade-out')
    setTimeout(() => toast.remove(), 250)
  }, 2400)
}

// --- Sync status indicator ---
function showSyncIndicator() {
  const el = document.getElementById('sync-status')
  el.classList.add('visible')
  setTimeout(() => el.classList.remove('visible'), 1500)
}

// --- Activity feed ---
function addActivity(user, action, target, color = '#00d4ff') {
  activityLog.unshift({ user, action, target, color, time: 'just now' })
  if (activityLog.length > 8) activityLog.pop()
  renderActivityFeed()
}

function renderActivityFeed() {
  const el = document.getElementById('activity-feed')
  if (!el) return
  el.innerHTML = activityLog.map(a => `
    <div class="activity-item">
      <div class="activity-dot" style="background:${a.color}"></div>
      <div>
        <div class="activity-text"><strong>${a.user}</strong> ${a.action} <strong>${a.target}</strong></div>
        <div class="activity-time">${a.time}</div>
      </div>
    </div>`).join('')
}

// --- Toolbar ---
export function renderToolbar() {
  const el = document.getElementById('toolbar')
  el.innerHTML = TOOLS.map(t => {
    if (t.type === 'sep') return `<div class="toolbar-sep"></div>`
    const isActive = activeTool === t.id
    const isDanger = t.danger
    return `
      <button class="tool-btn ${isActive ? 'active' : ''} ${isDanger ? 'danger-tool' : ''}"
        data-tool="${t.id}" data-tip="${t.label}" title="${t.label} (${t.key})">
        ${icon(t.icon, 16)}
        <span class="tool-key">${t.key}</span>
      </button>`
  }).join('')

  el.querySelectorAll('.tool-btn[data-tool]').forEach(btn => {
    btn.addEventListener('click', () => handleToolClick(btn.dataset.tool))
  })
}

function handleToolClick(tool) {
  if (['select', 'move', 'rotate', 'scale'].includes(tool)) {
    activeTool = tool
    renderToolbar()
    showToast(`${tool.charAt(0).toUpperCase() + tool.slice(1)} tool active`)
  } else if (tool === 'add-cube') {
    const pos = { x: (Math.random() - 0.5) * 6, y: 0.5, z: (Math.random() - 0.5) * 6 }
    addObject('cube', pos)
    addActivity('You', 'added', 'Cube', '#00d4ff')
    showSyncIndicator()
  } else if (tool === 'add-sphere') {
    const pos = { x: (Math.random() - 0.5) * 6, y: 0.5, z: (Math.random() - 0.5) * 6 }
    addObject('sphere', pos)
    addActivity('You', 'added', 'Sphere', '#8b5cf6')
    showSyncIndicator()
  } else if (tool === 'add-cylinder') {
    const pos = { x: (Math.random() - 0.5) * 6, y: 0.5, z: (Math.random() - 0.5) * 6 }
    addObject('cylinder', pos)
    addActivity('You', 'added', 'Cylinder', '#84cc16')
    showSyncIndicator()
  } else if (tool === 'duplicate' && selectedObjectId) {
    duplicateSelected()
  } else if (tool === 'delete' && selectedObjectId) {
    deleteSelected()
  } else if (tool === 'reset-view') {
    camera.position.set(8, 6, 8)
    camera.lookAt(0, 0, 0)
    controls.target.set(0, 0, 0)
    showToast('View reset')
  }
}

function duplicateSelected() {
  const objects = getAllObjects()
  const src = objects.find(o => o.id === selectedObjectId)
  if (!src) return
  const pos = { x: src.position.x + 1, y: src.position.y, z: src.position.z + 1 }
  addObject(src.type, pos)
  addActivity('You', 'duplicated', src.name, '#e879f9')
  showSyncIndicator()
}

function deleteSelected() {
  const objects = getAllObjects()
  const obj = objects.find(o => o.id === selectedObjectId)
  if (!obj) return
  removeObject(selectedObjectId)
  addActivity('You', 'deleted', obj.name, '#f87171')
  selectedObjectId = null
  renderScenePanel()
  renderPropsPanel()
  showSyncIndicator()
}

// --- Scene panel ---
export function renderScenePanel() {
  const body = document.getElementById('scene-list')
  if (!body) return
  const objects = getAllObjects()

  body.innerHTML = objects.map(obj => {
    const sel = obj.id === selectedObjectId
    return `
      <div class="scene-item ${sel ? 'selected' : ''}" data-id="${obj.id}">
        <span class="scene-item-icon">${icon(obj.type === 'sphere' ? 'sphere' : obj.type === 'cylinder' ? 'cylinder' : 'cube', 13)}</span>
        <span class="scene-color-dot" style="background:${obj.color}"></span>
        <span class="scene-item-name">${obj.name}</span>
        <span class="scene-item-type">${obj.type}</span>
      </div>`
  }).join('')

  body.querySelectorAll('.scene-item').forEach(item => {
    item.addEventListener('click', () => selectObject(item.dataset.id))
  })
}

// --- Properties panel ---
export function renderPropsPanel() {
  const container = document.getElementById('props-content')
  if (!container) return
  const objects = getAllObjects()
  const obj = objects.find(o => o.id === selectedObjectId)

  if (!obj) {
    container.innerHTML = `<div class="panel-section" style="color:var(--text-muted);font-size:var(--text-sm);text-align:center;padding:32px 16px;">No object selected</div>`
    document.getElementById('props-obj-badge').textContent = ''
    return
  }

  document.getElementById('props-obj-badge').textContent = obj.type
  const fmt = n => Number(n).toFixed(2)

  container.innerHTML = `
    <div class="panel-section">
      <div class="prop-object-name">${obj.name}</div>
      <div class="prop-object-type">${obj.type}</div>
    </div>
    <div class="panel-section">
      <div class="prop-label">Position</div>
      <div class="prop-input-group">
        <div class="prop-input-labeled"><div class="axis-label x">X</div><input type="number" step="0.1" value="${fmt(obj.position.x)}" data-axis="px"></div>
        <div class="prop-input-labeled"><div class="axis-label y">Y</div><input type="number" step="0.1" value="${fmt(obj.position.y)}" data-axis="py"></div>
        <div class="prop-input-labeled"><div class="axis-label z">Z</div><input type="number" step="0.1" value="${fmt(obj.position.z)}" data-axis="pz"></div>
      </div>
      <div class="prop-label">Scale</div>
      <div class="prop-input-group">
        <div class="prop-input-labeled"><div class="axis-label x">X</div><input type="number" step="0.1" value="${fmt(obj.scale.x)}" data-axis="sx"></div>
        <div class="prop-input-labeled"><div class="axis-label y">Y</div><input type="number" step="0.1" value="${fmt(obj.scale.y)}" data-axis="sy"></div>
        <div class="prop-input-labeled"><div class="axis-label z">Z</div><input type="number" step="0.1" value="${fmt(obj.scale.z)}" data-axis="sz"></div>
      </div>
      <div class="prop-label">Color</div>
      <div style="display:flex;align-items:center;gap:var(--sp-2)">
        <input type="color" value="${obj.color}" id="prop-color" style="width:32px;height:32px;padding:0;border:1px solid var(--border-strong);border-radius:var(--radius-sm);cursor:pointer">
        <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-muted)">${obj.color}</span>
      </div>
    </div>`

  // Bind property inputs
  container.querySelectorAll('input[data-axis]').forEach(input => {
    input.addEventListener('change', () => {
      const axis = input.dataset.axis
      const val = parseFloat(input.value)
      if (isNaN(val)) return
      const current = getAllObjects().find(o => o.id === selectedObjectId)
      if (!current) return
      const update = {}
      if (axis === 'px') update.position = { ...current.position, x: val }
      if (axis === 'py') update.position = { ...current.position, y: val }
      if (axis === 'pz') update.position = { ...current.position, z: val }
      if (axis === 'sx') update.scale = { ...current.scale, x: val }
      if (axis === 'sy') update.scale = { ...current.scale, y: val }
      if (axis === 'sz') update.scale = { ...current.scale, z: val }

      // Se pasa true en isFinal porque es un cambio definitivo al confirmar el input
      updateObjectTransform(selectedObjectId, update, true)
      showSyncIndicator()
    })
  })

  const colorInput = container.querySelector('#prop-color')
  if (colorInput) {
    // Evento continuo al arrastrar por la paleta (con throttling)
    colorInput.addEventListener('input', () => {
      updateObjectTransform(selectedObjectId, { color: colorInput.value })
      showSyncIndicator()
    })
    // Evento definitivo al soltar el selector de color (inmediato)
    colorInput.addEventListener('change', () => {
      updateObjectTransform(selectedObjectId, { color: colorInput.value }, true)
      showSyncIndicator()
    })
  }
}

// --- Selection ---
export function selectObject(id) {
  selectedObjectId = id
  renderScenePanel()
  renderPropsPanel()
  renderSelectionBar()
}

function renderSelectionBar() {
  const bar = document.getElementById('vp-selection-bar')
  if (!bar) return
  const objects = getAllObjects()
  const obj = objects.find(o => o.id === selectedObjectId)
  if (obj) {
    bar.style.display = 'flex'
    const fmt = n => Number(n).toFixed(2)
    bar.innerHTML = `
      <div class="sel-item"><div class="sel-dot"></div><span style="color:var(--accent-cyan);font-weight:600">${obj.name}</span></div>
      <div class="sel-item" style="color:var(--text-muted)">${obj.type}</div>
      <div class="sel-item" style="color:var(--text-muted);font-family:var(--font-mono)">
        ${fmt(obj.position.x)}, ${fmt(obj.position.y)}, ${fmt(obj.position.z)}
      </div>`
  } else {
    bar.style.display = 'none'
  }
}

// --- Users / Awareness panel ---
export function renderUsersPanel(users) {
  const userList = document.getElementById('users-list')
  const userStack = document.getElementById('user-stack')
  const userCount = document.getElementById('user-count')
  const headerStat = document.getElementById('users-header-stat')

  if (!userList) return

  userList.innerHTML = users.map(u => `
    <div class="user-row">
      <div class="avatar" style="background:${u.color}20;color:${u.color}">${u.initials || '??'}</div>
      <div class="user-info">
        <div class="user-name">${u.name || 'Anonymous'}</div>
      </div>
    </div>`).join('')

  if (userStack) {
    userStack.innerHTML = users.slice(0, 4).map(u =>
      `<div class="avatar" style="background:${u.color}20;color:${u.color};border:2px solid var(--bg-panel)">${u.initials || '??'}</div>`
    ).join('')
  }

  if (userCount) userCount.textContent = `${users.length} online`
  if (headerStat) headerStat.innerHTML = `<strong>${users.length}</strong> editing`
}

// --- Connection status ---
export function updateConnectionStatus(status) {
  const el = document.getElementById('conn-status')
  const label = document.getElementById('conn-label')
  if (!el || !label) return

  el.className = 'conn-status ' + status
  const labels = { connected: 'Connected', syncing: 'Syncing', connecting: 'Connecting…' }
  label.textContent = labels[status] || status
}

// --- Keyboard shortcuts ---
export function setupKeyboard() {
  const keyMap = { q: 'select', w: 'move', e: 'rotate', r: 'scale', c: 'add-cube', s: 'add-sphere', y: 'add-cylinder', d: 'duplicate', x: 'delete', f: 'reset-view' }
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return
    const tool = keyMap[e.key.toLowerCase()]
    if (tool) handleToolClick(tool)
  })
}

// --- Share button ---
export function setupTopbar() {
  document.getElementById('btn-share')?.addEventListener('click', () => {
    const url = window.location.href
    navigator.clipboard?.writeText(url)
    showToast('Room link copied!', 'success')
  })

  document.getElementById('btn-add-from-panel')?.addEventListener('click', () => {
    handleToolClick('add-cube')
  })

  // Collapsible props panel (Manuel)
  document.getElementById('toggle-props')?.addEventListener('click', () => {
    document.getElementById('panel-props')?.classList.toggle('collapsed')
  })
}

// --- Initialize UI ---
export function initUI() {
  renderToolbar()
  renderScenePanel()
  renderPropsPanel()
  renderActivityFeed()
  setupKeyboard()
  setupTopbar()
}

export { selectedObjectId, addActivity, showSyncIndicator }
