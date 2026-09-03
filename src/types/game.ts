export interface IPiece {
  x: number
  y: number
  player: number
}

export interface IGameContext {
  playerId: number
  column: number
  row: number
}

export interface IGameState {
  pieces: IPiece[]
  currentPlayer: number
  gameOver: boolean
  winner: number | null
}
