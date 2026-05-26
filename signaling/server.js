import { createServer } from 'http'
import { WebSocketServer } from 'ws'

const PORT = process.env.PORT || 4444
const server = createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('VoxelParty signaling server OK')
})

const wss = new WebSocketServer({ server })

const topics = new Map()

wss.on('connection', (ws) => {
  const subscribedTopics = new Set()
  let closed = false

  ws.on('message', (raw) => {
    let msg
    try {
      msg = JSON.parse(raw)
    } catch { return }

    if (msg.type === 'subscribe') {
      (msg.topics || []).forEach((topic) => {
        if (!topics.has(topic)) topics.set(topic, new Set())
        topics.get(topic).add(ws)
        subscribedTopics.add(topic)
      })
    }

    if (msg.type === 'unsubscribe') {
      (msg.topics || []).forEach((topic) => {
        if (topics.has(topic)) topics.get(topic).delete(ws)
        subscribedTopics.delete(topic)
      })
    }

    if (msg.type === 'publish') {
      const topic = msg.topic
      if (topics.has(topic)) {
        topics.get(topic).forEach((peer) => {
          if (peer !== ws && peer.readyState === 1) {
            peer.send(raw)
          }
        })
      }
    }

    if (msg.type === 'ping') {
      ws.send(JSON.stringify({ type: 'pong' }))
    }
  })

  ws.on('close', () => {
    closed = true
    subscribedTopics.forEach((topic) => {
      if (topics.has(topic)) {
        topics.get(topic).delete(ws)
        if (topics.get(topic).size === 0) topics.delete(topic)
      }
    })
  })
})

server.listen(PORT, () => {
  console.log(`[Signaling] listening on port ${PORT}`)
})
