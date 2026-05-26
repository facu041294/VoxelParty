import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'

// --- Yjs Document ---
const ydoc = new Y.Doc()

// --- Dynamic Room Enrutamiento ---
let roomName = new URLSearchParams(window.location.search).get('room')
if (!roomName) {
  const randomId = typeof crypto.randomUUID === 'function' 
    ? crypto.randomUUID().slice(0, 8) 
    : Math.random().toString(36).substring(2, 10)
  roomName = `voxel-room-${randomId}`
  const newUrl = new URL(window.location.href)
  newUrl.searchParams.set('room', roomName)
  window.history.replaceState({}, '', newUrl.toString())
}

// --- WebRTC Provider (serverless P2P sync) ---
const provider = new WebrtcProvider(roomName, ydoc, {
  signaling: ['wss://signaling.yjs.dev'],
})

// --- Shared data structures ---
const yObjects = ydoc.getMap('objects')
const awareness = provider.awareness

// --- Connection status helpers ---
function onStatusChange(callback) {
  provider.on('synced', (synced) => {
    callback(synced ? 'connected' : 'syncing')
  })
  // Initial state
  callback(provider.connected ? 'connected' : 'connecting')
}

function setLocalUser(user) {
  awareness.setLocalStateField('user', user)
}

function onAwarenessChange(callback) {
  awareness.on('change', () => {
    const states = []
    awareness.getStates().forEach((state, clientId) => {
      if (state.user) {
        states.push({ clientId, ...state.user })
      }
    })
    callback(states)
  })
}

export { ydoc, yObjects, awareness, provider, onStatusChange, setLocalUser, onAwarenessChange }
