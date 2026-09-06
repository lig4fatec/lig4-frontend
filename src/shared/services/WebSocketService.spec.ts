import { describe, it, expect, vi, beforeEach } from 'vitest'
import { websocketService } from './WebSocketService'

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

describe('WebSocketService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    websocketService.disconnect()
    instances.length = 0
  })

  it('connects to a websocket url', () => {
    websocketService.connect('ws://localhost:8080')
    expect(instances).toHaveLength(1)
  })

  it('emits connect event on open', () => {
    const callback = vi.fn()
    websocketService.on('connect', callback)

    websocketService.connect('ws://localhost:8080')
    instances[0]!.onopen?.()

    expect(callback).toHaveBeenCalledWith(null)
  })

  it('emits message event on message', () => {
    const callback = vi.fn()
    websocketService.on('message', callback)

    websocketService.connect('ws://localhost:8080')
    instances[0]!.onmessage?.({ data: 'hello' } as MessageEvent)

    expect(callback).toHaveBeenCalledWith('hello')
  })

  it('emits disconnect event on close', () => {
    const callback = vi.fn()
    websocketService.on('disconnect', callback)

    websocketService.connect('ws://localhost:8080')
    instances[0]!.onclose?.()

    expect(callback).toHaveBeenCalledWith(null)
  })

  it('emits error event on error', () => {
    const callback = vi.fn()
    websocketService.on('error', callback)

    websocketService.connect('ws://localhost:8080')
    instances[0]!.onerror?.()

    expect(callback).toHaveBeenCalledWith(null)
  })

  it('sends data when connected', () => {
    websocketService.connect('ws://localhost:8080')
    instances[0]!.readyState = WebSocket.OPEN
    websocketService.send('test')

    expect(instances[0]!.send).toHaveBeenCalledWith('test')
  })

  it('does not send data when not connected', () => {
    websocketService.connect('ws://localhost:8080')
    instances[0]!.readyState = WebSocket.CLOSED
    websocketService.send('test')

    expect(instances[0]!.send).not.toHaveBeenCalled()
  })

  it('removes listener with off', () => {
    const callback = vi.fn()
    websocketService.on('message', callback)
    websocketService.off('message', callback)

    websocketService.connect('ws://localhost:8080')
    instances[0]!.onmessage?.({ data: 'test' } as MessageEvent)

    expect(callback).not.toHaveBeenCalled()
  })

  it('disconnects and clears listeners', () => {
    websocketService.connect('ws://localhost:8080')
    websocketService.disconnect()

    expect(instances[0]!.close).toHaveBeenCalled()
  })
})
