export interface IApiResponse<T> {
  data: T
  error?: string
}

export interface IGameStateResponse {
  pieces: Array<{ x: number; y: number; player: number }>
  currentPlayer: number
}

export interface IMoveResponse {
  success: boolean
  winner?: number
}
