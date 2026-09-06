import { ref } from 'vue'
import type { IScoreEntry } from '@/types'

export function useLeaderboard(): {
  sortedScores: import('vue').Ref<IScoreEntry[]>
} {
  const scores = ref<IScoreEntry[]>([
    { playerId: '1', playerName: 'Jogador 1', wins: 10, losses: 3, draws: 2 },
    { playerId: '2', playerName: 'Jogador 2', wins: 8, losses: 5, draws: 1 },
    { playerId: '3', playerName: 'Jogador 3', wins: 6, losses: 6, draws: 3 },
  ])

  const sortedScores = ref<IScoreEntry[]>(scores.value)

  return { sortedScores }
}
