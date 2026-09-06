export interface INavItem {
  label: string
  route: string
  icon?: string
}

export interface IGameMode {
  id: string
  label: string
  description: string
}

export interface IPlayer {
  id: string
  name: string
  avatar?: string
  level: number
}

export interface IScoreEntry {
  playerId: string
  playerName: string
  wins: number
  losses: number
  draws: number
}
