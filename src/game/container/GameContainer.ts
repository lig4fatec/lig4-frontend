import { GameFacade } from '@/game/facade/GameFacade'
import { typedEventBus } from '@/game/EventBus'
import { useGameStore } from '@/stores/gameStore'

let facade: GameFacade | null = null

export function getGameFacade(): GameFacade {
  if (!facade) {
    facade = new GameFacade()
  }
  return facade
}

export function getGameStore(): ReturnType<typeof useGameStore> {
  return useGameStore()
}

export const gameEventBus = typedEventBus
