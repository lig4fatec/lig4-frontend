import { getGameFacade, getGameStore, gameEventBus } from '@/game/container/GameContainer'
import type { IPiece } from '@/types'

export const GameService = {
  startNewGame(): void {
    getGameFacade().registerEvents()
    gameEventBus.emit('game:start')
  },

  placePiece(x: number, y: number): boolean {
    const store = getGameStore()
    const success = store.placePiece(x, y)
    if (success) {
      gameEventBus.emit('game:piece-placed', { column: x, row: y })
    }
    return success
  },

  resetGame(): void {
    gameEventBus.emit('game:reset')
  },

  getState(): IPiece[] {
    return getGameStore().pieces
  },
}
