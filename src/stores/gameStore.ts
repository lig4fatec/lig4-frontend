import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IPiece } from '@/types'

export const useGameStore = defineStore('game', () => {
  const pieces = ref<IPiece[]>([])
  const currentPlayer = ref(1)
  const gameOver = ref(false)
  const winner = ref<number | null>(null)

  function placePiece(x: number, y: number): boolean {
    if (gameOver.value) return false

    pieces.value.push({ x, y, player: currentPlayer.value })
    const won = checkWin(x, y)

    if (!won) {
      currentPlayer.value = currentPlayer.value === 1 ? 2 : 1
    }
    return true
  }

  function checkWin(x: number, y: number): boolean {
    const player = currentPlayer.value
    const directions = [
      { dx: 1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 1, dy: 1 },
      { dx: 1, dy: -1 },
    ]

    for (const dir of directions) {
      let count = 1

      for (let i = 1; i < 4; i++) {
        const nx = x + i * dir.dx
        const ny = y + i * dir.dy
        if (pieces.value.some((p) => p.x === nx && p.y === ny && p.player === player)) {
          count++
        } else {
          break
        }
      }

      for (let i = 1; i < 4; i++) {
        const nx = x - i * dir.dx
        const ny = y - i * dir.dy
        if (pieces.value.some((p) => p.x === nx && p.y === ny && p.player === player)) {
          count++
        } else {
          break
        }
      }

      if (count >= 4) {
        gameOver.value = true
        winner.value = player
        return true
      }
    }

    return false
  }

  function clear(): void {
    pieces.value = []
    currentPlayer.value = 1
    gameOver.value = false
    winner.value = null
  }

  return { pieces, currentPlayer, gameOver, winner, placePiece, clear }
})
