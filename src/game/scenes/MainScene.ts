import Phaser from 'phaser'
import { GameService } from '@/services/GameService'
import { typedEventBus } from '@/game/EventBus'
import { COLUMNS, ROWS, CELL_SIZE, SLOT_RADIUS } from '@/utils/game'

export function createGameConfig(parent: string): Phaser.Types.Core.GameConfig {
  return {
    type: Phaser.AUTO,
    width: COLUMNS * CELL_SIZE,
    height: ROWS * CELL_SIZE,
    parent,
    backgroundColor: '#2c3e50',
    scene: {
      preload,
      create,
      update,
    },
  }
}

function preload(): void {
  // Carregar assets aqui
}

function create(this: Phaser.Scene): void {
  const graphics = this.add.graphics()

  for (let col = 0; col < COLUMNS; col++) {
    for (let row = 0; row < ROWS; row++) {
      const x = col * CELL_SIZE + SLOT_RADIUS
      const y = row * CELL_SIZE + SLOT_RADIUS
      graphics.fillStyle(0xe67e22)
      graphics.fillCircle(x, y, SLOT_RADIUS - 5)
    }
  }

  this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
    const col = Math.floor(pointer.x / CELL_SIZE)
    if (col >= 0 && col < COLUMNS) {
      GameService.placePiece(col, ROWS - 1)
    }
  })

  typedEventBus.on('game:reset', () => {
    graphics.clear()
    for (let col = 0; col < COLUMNS; col++) {
      for (let row = 0; row < ROWS; row++) {
        const x = col * CELL_SIZE + SLOT_RADIUS
        const y = row * CELL_SIZE + SLOT_RADIUS
        graphics.fillStyle(0xe67e22)
        graphics.fillCircle(x, y, SLOT_RADIUS - 5)
      }
    }
  })
}

function update(_time: number, _delta: number): void {
  // Game loop
}
