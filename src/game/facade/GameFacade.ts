import { typedEventBus } from '@/game/EventBus'
import { useGameStore } from '@/stores/gameStore'

export class GameFacade {
  private store = useGameStore()

  registerEvents(): void {
    typedEventBus.on('game:start', () => {
      this.store.clear()
    })

    typedEventBus.on('game:reset', () => {
      this.store.clear()
    })
  }

  getStore(): ReturnType<typeof useGameStore> {
    return this.store
  }
}
