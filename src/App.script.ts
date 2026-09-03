import { ref, onMounted, onUnmounted } from 'vue'
import Phaser from 'phaser'
import { useGameStore } from '@/stores/gameStore'
import { createGameConfig } from '@/game/scenes/MainScene'
import { GameService } from '@/services/GameService'

const store = useGameStore()
const gameInstance = ref<Phaser.Game | null>(null)

function resetGame(): void {
  GameService.resetGame()
}

onMounted(() => {
  gameInstance.value = new Phaser.Game(createGameConfig('game-canvas'))
  GameService.startNewGame()
})

onUnmounted(() => {
  gameInstance.value?.destroy(true)
  gameInstance.value = null
})

export { store, resetGame }
