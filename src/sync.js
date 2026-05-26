import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'

// --- Yjs Document ---
const ydoc = new Y.Doc()

// --- WebRTC Provider (P2P sync via signaling) ---
// Deploy your own: see /signaling folder + render.yaml
const SIGNALING_SERVERS = [
  'wss://voxelparty-signaling.onrender.com',
]

const provider = new WebrtcProvider('max-academy-3d-room', ydoc, {
  signaling: SIGNALING_SERVERS,
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
