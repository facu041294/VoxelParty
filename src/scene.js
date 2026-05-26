import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import { TransformControls } from 'three/addons/controls/TransformControls.js'

// --- Scene ---
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x090b10)
scene.fog = new THREE.FogExp2(0x090b10, 0.015)

// --- Camera ---
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
camera.position.set(8, 6, 8)
camera.lookAt(0, 0, 0)

// --- Renderer ---
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)

// --- Controls ---
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05

// --- Transform Controls (3D Gizmo) ---
const transformControls = new TransformControls(camera, renderer.domElement)
transformControls.size = 0.8
scene.add(transformControls)

// Disable OrbitControls while dragging the gizmo to avoid camera conflict
transformControls.addEventListener('dragging-changed', (event) => {
  controls.enabled = !event.value
})

// --- Selection Helper (3D Box Outline) ---
const selectionHelper = new THREE.BoxHelper()
selectionHelper.visible = false
selectionHelper.material.color.set(0x00d4ff) // Cyan color for selection
scene.add(selectionHelper)

// --- Lights ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(5, 10, 7)
scene.add(directionalLight)

// --- Grid ---
const gridHelper = new THREE.GridHelper(20, 20, 0x1a1e29, 0x12151d)
scene.add(gridHelper)

// --- Mount into viewport ---
function mountRenderer() {
  const container = document.getElementById('viewport-canvas')
  if (!container) return
  container.appendChild(renderer.domElement)
  resize()
}

function resize() {
  const container = document.getElementById('viewport-canvas')
  if (!container) return
  const w = container.clientWidth
  const h = container.clientHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

window.addEventListener('resize', resize)

export { scene, camera, renderer, controls, transformControls, selectionHelper, mountRenderer, resize }
