import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Phaser from 'phaser'
import { useGameStore } from '@/stores/gameStore'
import { createGameConfig } from '@/game/scenes/MainScene'
import { GameService } from '@/services/GameService'
import { GAME_CANVAS_PARENT } from '@/utils/constants'

export function useGamePage(): {
  store: ReturnType<typeof useGameStore>
  gameId: import('vue').Ref<string | null>
  resetGame: () => void
} {
  const route = useRoute()
  const store = useGameStore()
  const gameInstance = ref<Phaser.Game | null>(null)
  const gameId = ref<string | null>((route.params.id as string) ?? null)

  function resetGame(): void {
    GameService.resetGame()
  }

  onMounted((): void => {
    gameInstance.value = new Phaser.Game(createGameConfig(GAME_CANVAS_PARENT))
    GameService.startNewGame()
  })

  onUnmounted((): void => {
    gameInstance.value?.destroy(true)
    gameInstance.value = null
  })

  return { store, gameId, resetGame }
}
