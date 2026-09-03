import Phaser from 'phaser'

const COLUMNS = 7
const ROWS = 6
const SLOT_RADIUS = 50
const GAP = 20
const CELL_SIZE = SLOT_RADIUS * 2 + GAP

export { COLUMNS, ROWS, SLOT_RADIUS, GAP, CELL_SIZE }

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

function create(): void {
  // Inicialização da cena
}

function update(_time: number, _delta: number): void {
  // Game loop
}
