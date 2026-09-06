import { onMounted, onUnmounted, ref } from 'vue'
import { useGameStore } from '@/stores/gameStore'
import { typedEventBus } from '@/game/EventBus'
import type { IUseGameReturn } from '@/types'

export function useGame(): IUseGameReturn {
  const store = useGameStore()
  const isRunning = ref(false)

  function start(): void {
    isRunning.value = true
    typedEventBus.emit('game:start')
  }

  function stop(): void {
    isRunning.value = false
    typedEventBus.emit('game:stop')
  }

  function reset(): void {
    isRunning.value = false
    typedEventBus.emit('game:reset')
    store.clear()
  }

  function toggle(): void {
    if (isRunning.value) {
      stop()
    } else {
      start()
    }
  }

  onMounted((): void => {
    typedEventBus.emit('game:mounted')
  })

  onUnmounted((): void => {
    typedEventBus.emit('game:unmounted')
  })

  return { isRunning, start, stop, reset, toggle }
}
