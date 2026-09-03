import type { IPiece } from '@/types'

export class GameState {
  private pieces: IPiece[] = []
  private currentPlayer = 1
  private gameOver = false
  private winner: number | null = null

  getPieces(): readonly IPiece[] {
    return this.pieces
  }

  getCurrentPlayer(): number {
    return this.currentPlayer
  }

  isGameOver(): boolean {
    return this.gameOver
  }

  getWinner(): number | null {
    return this.winner
  }

  placePiece(x: number, y: number): boolean {
    this.pieces.push({ x, y, player: this.currentPlayer })
    if (this.checkWin(x, y)) {
      this.gameOver = true
      this.winner = this.currentPlayer
      return true
    }
    this.switchPlayer()
    return false
  }

  private checkWin(x: number, y: number): boolean {
    const player = this.currentPlayer
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
        if (this.pieces.some((p) => p.x === nx && p.y === ny && p.player === player)) {
          count++
        } else {
          break
        }
      }
      for (let i = 1; i < 4; i++) {
        const nx = x - i * dir.dx
        const ny = y - i * dir.dy
        if (this.pieces.some((p) => p.x === nx && p.y === ny && p.player === player)) {
          count++
        } else {
          break
        }
      }
      if (count >= 4) return true
    }
    return false
  }

  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1
  }

  reset(): void {
    this.pieces = []
    this.currentPlayer = 1
    this.gameOver = false
    this.winner = null
  }
}
