import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// --- Scene ---
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x090b10)

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

export { scene, camera, renderer, controls, mountRenderer, resize }
