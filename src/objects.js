import * as THREE from 'three'
import { scene } from './scene.js'
import { yObjects } from './sync.js'

// Local registry: id -> THREE.Mesh
const meshRegistry = new Map()

// User colors for random assignment
const COLORS = ['#00d4ff', '#8b5cf6', '#e879f9', '#84cc16', '#f97316', '#f87171', '#fbbf24']

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)]
}

/**
 * Create a Three.js mesh from serialized object data
 */
function createMeshFromData(data) {
  let geometry
  switch (data.type) {
    case 'sphere':
      geometry = new THREE.SphereGeometry(0.5, 32, 32)
      break
    case 'cylinder':
      geometry = new THREE.CylinderGeometry(0.4, 0.4, 1, 32)
      break
    case 'cube':
    default:
      geometry = new THREE.BoxGeometry(1, 1, 1)
  }

  const material = new THREE.MeshStandardMaterial({ color: data.color || '#2a3a5c' })
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.set(data.position.x, data.position.y, data.position.z)
  mesh.rotation.set(data.rotation.x, data.rotation.y, data.rotation.z)
  mesh.scale.set(data.scale.x, data.scale.y, data.scale.z)
  mesh.userData.objectId = data.id
  mesh.userData.objectType = data.type
  mesh.userData.objectName = data.name

  return mesh
}

/**
 * Add a new object to scene and sync via Yjs
 */
export function addObject(type = 'cube', position = { x: 0, y: 0.5, z: 0 }) {
  const id = crypto.randomUUID()
  const color = randomColor()
  const name = `${type.charAt(0).toUpperCase() + type.slice(1)}_${id.slice(0, 4)}`

  const data = {
    id,
    type,
    name,
    color,
    position,
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
  }

  // Write to Yjs (propagates to all peers)
  yObjects.set(id, data)
  return id
}

/**
 * Remove an object from scene and Yjs
 */
export function removeObject(id) {
  yObjects.delete(id)
}

/**
 * Update an object's transform in Yjs
 */
// --- Variables para throttling de transformaciones ---
const throttleTimers = new Map()
const throttleLastArgs = new Map()
const throttleLastRuns = new Map()

/**
 * Update an object's transform in Yjs (Throttled to 15 Hz / ~66ms to prevent network flooding)
 * @param {string} id - Object ID
 * @param {object} transform - Transform updates
 * @param {boolean} isFinal - If true, force immediate update and bypass throttle
 */
export function updateObjectTransform(id, transform, isFinal = false) {
  const now = Date.now()
  const limit = 66 // ~15 FPS
  const lastRun = throttleLastRuns.get(id) || 0

  const performUpdate = () => {
    const existing = yObjects.get(id)
    if (existing) {
      const accumulated = throttleLastArgs.get(id) || {}
      const updated = { ...existing, ...accumulated, ...transform }
      yObjects.set(id, updated)
    }
    throttleLastRuns.set(id, Date.now())
    
    // Limpiar timers
    const timer = throttleTimers.get(id)
    if (timer) {
      clearTimeout(timer)
      throttleTimers.delete(id)
    }
    throttleLastArgs.delete(id)
  }

  if (isFinal) {
    performUpdate()
    return
  }

  if (now - lastRun >= limit) {
    performUpdate()
  } else {
    const prevArgs = throttleLastArgs.get(id) || {}
    throttleLastArgs.set(id, { ...prevArgs, ...transform })

    if (!throttleTimers.has(id)) {
      const timer = setTimeout(() => {
        const lastTransform = throttleLastArgs.get(id)
        if (lastTransform) {
          performUpdate()
        }
      }, limit - (now - lastRun))
      throttleTimers.set(id, timer)
    }
  }
}

/**
 * Get all synced objects as array
 */
export function getAllObjects() {
  const objects = []
  yObjects.forEach((val, key) => {
    objects.push(val)
  })
  return objects
}

/**
 * Get mesh by object ID
 */
export function getMesh(id) {
  return meshRegistry.get(id) || null
}

/**
 * Sync local scene from Yjs state — observe changes and create/update/delete meshes
 */
export function syncFromRemote(onChangeCallback) {
  // Initial sync
  yObjects.forEach((data, id) => {
    if (!meshRegistry.has(id)) {
      const mesh = createMeshFromData(data)
      scene.add(mesh)
      meshRegistry.set(id, mesh)
    }
  })

  // Observe ongoing changes
  yObjects.observe((event) => {
    event.changes.keys.forEach((change, key) => {
      if (change.action === 'add' || change.action === 'update') {
        const data = yObjects.get(key)
        if (!data) return

        let mesh = meshRegistry.get(key)
        if (mesh && change.action === 'update') {
          // Update existing mesh transform
          mesh.position.set(data.position.x, data.position.y, data.position.z)
          mesh.rotation.set(data.rotation.x, data.rotation.y, data.rotation.z)
          mesh.scale.set(data.scale.x, data.scale.y, data.scale.z)
          if (data.color) mesh.material.color.set(data.color)
        } else {
          // Remove old mesh if exists (type changed)
          if (mesh) {
            scene.remove(mesh)
            mesh.geometry.dispose()
            mesh.material.dispose()
          }
          // Create new mesh
          mesh = createMeshFromData(data)
          scene.add(mesh)
          meshRegistry.set(key, mesh)
        }
      } else if (change.action === 'delete') {
        const mesh = meshRegistry.get(key)
        if (mesh) {
          scene.remove(mesh)
          mesh.geometry.dispose()
          mesh.material.dispose()
          meshRegistry.delete(key)
        }
      }
    })

    if (onChangeCallback) onChangeCallback()
  })
}

export { meshRegistry }
