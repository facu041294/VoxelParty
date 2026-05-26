import * as THREE from 'three'
import { camera, renderer } from './scene.js'
import { meshRegistry } from './objects.js'

const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

/**
 * Setup raycaster click detection on the viewport canvas.
 * Calls onSelect(objectId) when a synced mesh is clicked.
 */
export function raycasterSetup(onSelect) {
  renderer.domElement.addEventListener('pointerdown', (event) => {
    // Only left-click
    if (event.button !== 0) return

    const rect = renderer.domElement.getBoundingClientRect()
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

    raycaster.setFromCamera(pointer, camera)

    const meshes = Array.from(meshRegistry.values())
    const intersects = raycaster.intersectObjects(meshes)

    if (intersects.length > 0) {
      const hit = intersects[0].object
      const objectId = hit.userData.objectId
      if (objectId) onSelect(objectId)
    }
  })
}
