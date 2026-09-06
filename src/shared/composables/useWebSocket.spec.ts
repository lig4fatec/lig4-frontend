import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useWebSocket } from './useWebSocket'

const instances: Array<{
  onopen: (() => void) | null
  onmessage: ((event: MessageEvent) => void) | null
  onclose: (() => void) | null
  onerror: (() => void) | null
  readyState: number
  send: ReturnType<typeof vi.fn>
  close: ReturnType<typeof vi.fn>
}> = []

class MockWebSocket {
  static readonly CONNECTING = 0
  static readonly OPEN = 1
  static readonly CLOSING = 2
  static readonly CLOSED = 3

  onopen: (() => void) | null = null
  onmessage: ((event: MessageEvent) => void) | null = null
  onclose: (() => void) | null = null
  onerror: (() => void) | null = null
  readyState = MockWebSocket.OPEN
  send = vi.fn()
  close = vi.fn()

  constructor(_url: string) {
    instances.push(this as unknown as typeof instances[0])
  }
}

vi.stubGlobal('WebSocket', MockWebSocket)

describe('useWebSocket', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    instances.length = 0
  })

  it('initializes with disconnected state', () => {
    const { isConnected, lastMessage } = useWebSocket()

    expect(isConnected.value).toBe(false)
    expect(lastMessage.value).toBe('')
  })

  it('connects to a websocket url', () => {
    const { connect, isConnected } = useWebSocket()

    connect('ws://localhost:8080')

    expect(instances).toHaveLength(1)
    expect(isConnected.value).toBe(false)
  })

  it('sets connected to true on open', () => {
    const { connect, isConnected } = useWebSocket()

    connect('ws://localhost:8080')
    instances[0]!.onopen?.()

    expect(isConnected.value).toBe(true)
  })

  it('updates lastMessage on message', () => {
    const { connect, lastMessage } = useWebSocket()

    connect('ws://localhost:8080')
    instances[0]!.onmessage?.({ data: 'hello' } as MessageEvent)

    expect(lastMessage.value).toBe('hello')
  })

  it('sets connected to false on close', () => {
    const { connect, isConnected } = useWebSocket()

    connect('ws://localhost:8080')
    instances[0]!.onopen?.()
    expect(isConnected.value).toBe(true)

    instances[0]!.onclose?.()
    expect(isConnected.value).toBe(false)
  })

  it('sets connected to false on error', () => {
    const { connect, isConnected } = useWebSocket()

    connect('ws://localhost:8080')
    instances[0]!.onerror?.()

    expect(isConnected.value).toBe(false)
  })

  it('sends data when connected', () => {
    const { connect, send } = useWebSocket()

    connect('ws://localhost:8080')
    instances[0]!.readyState = WebSocket.OPEN
    send('test message')

    expect(instances[0]!.send).toHaveBeenCalledWith('test message')
  })

  it('does not send data when not connected', () => {
    const { connect, send } = useWebSocket()

    connect('ws://localhost:8080')
    instances[0]!.readyState = WebSocket.CLOSED
    send('test message')

    expect(instances[0]!.send).not.toHaveBeenCalled()
  })

  it('disconnects and closes socket', () => {
    const { connect, disconnect } = useWebSocket()

    connect('ws://localhost:8080')
    disconnect()

    expect(instances[0]!.close).toHaveBeenCalled()
  })
})
