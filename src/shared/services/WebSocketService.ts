import { WS_EVENT_CONNECT, WS_EVENT_DISCONNECT, WS_EVENT_MESSAGE, WS_EVENT_ERROR } from '@/utils/constants'

type WSCallback = (data: unknown) => void

class WebSocketService {
  private socket: WebSocket | null = null
  private listeners = new Map<string, WSCallback[]>()

  connect(url: string): void {
    this.socket = new WebSocket(url)

    this.socket.onopen = (): void => {
      this.emit(WS_EVENT_CONNECT, null)
    }

    this.socket.onmessage = (event: MessageEvent): void => {
      this.emit(WS_EVENT_MESSAGE, event.data)
    }

    this.socket.onclose = (): void => {
      this.emit(WS_EVENT_DISCONNECT, null)
    }

    this.socket.onerror = (): void => {
      this.emit(WS_EVENT_ERROR, null)
    }
  }

  send(data: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data)
    }
  }

  on(event: string, callback: WSCallback): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, [])
    }
    this.listeners.get(event)!.push(callback)
  }

  off(event: string, callback: WSCallback): void {
    const callbacks = this.listeners.get(event)
    if (callbacks) {
      const idx = callbacks.indexOf(callback)
      if (idx !== -1) callbacks.splice(idx, 1)
    }
  }

  private emit(event: string, data: unknown): void {
    const callbacks = this.listeners.get(event)
    if (callbacks) {
      callbacks.forEach((cb): void => { cb(data) })
    }
  }

  disconnect(): void {
    this.socket?.close()
    this.socket = null
    this.listeners.clear()
  }
}

export const websocketService = new WebSocketService()
