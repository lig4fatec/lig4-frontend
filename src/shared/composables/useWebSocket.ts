import { ref, onUnmounted } from 'vue'
import type { Ref } from 'vue'

export interface IUseWebSocketReturn {
  isConnected: Ref<boolean>
  lastMessage: Ref<string>
  connect: (url: string) => void
  send: (data: string) => void
  disconnect: () => void
}

export function useWebSocket(): IUseWebSocketReturn {
  const isConnected = ref<boolean>(false)
  const lastMessage = ref<string>('')
  let socket: WebSocket | null = null

  function connect(url: string): void {
    socket = new WebSocket(url)

    socket.onopen = (): void => {
      isConnected.value = true
    }

    socket.onmessage = (event: MessageEvent): void => {
      lastMessage.value = event.data as string
    }

    socket.onclose = (): void => {
      isConnected.value = false
    }

    socket.onerror = (): void => {
      isConnected.value = false
    }
  }

  function send(data: string): void {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(data)
    }
  }

  function disconnect(): void {
    socket?.close()
    socket = null
  }

  onUnmounted((): void => {
    disconnect()
  })

  return { isConnected, lastMessage, connect, send, disconnect }
}
