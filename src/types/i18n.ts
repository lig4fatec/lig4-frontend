export interface IMessageSchema {
  common: {
    enabled: string
    disabled: string
    confirm: string
    cancel: string
    remove: string
    level: string
    wins: string
    losses: string
    draws: string
  }
  nav: {
    home: string
    play: string
    leaderboard: string
    profile: string
    settings: string
    player: string
  }
  home: {
    title: string
    subtitle: string
    modes: {
      local: { label: string; description: string }
      online: { label: string; description: string }
      ai: { label: string; description: string }
    }
  }
  game: {
    title: string
    match: string
    turn: string
    restart: string
    winner: string
    sidebarTitle: string
  }
  settings: {
    title: string
    audio: string
    sounds: string
    notifications: string
    appearance: string
    theme: string
    dark: string
    light: string
    language: string
    languagePortuguese: string
    languageEnglish: string
  }
  profile: {
    title: string
    level: string
    nameLabel: string
    namePlaceholder: string
  }
  leaderboard: {
    title: string
    rank: string
    empty: string
  }
  components: {
    confirmDialog: { title: string; confirm: string; cancel: string }
    baseChip: { remove: string }
    scoreDisplay: { player1: string; player2: string }
  }
}

export type ILocale = 'pt-BR' | 'en-US'
