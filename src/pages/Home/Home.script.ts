import { useRouter } from 'vue-router'
import type { IGameMode } from '@/types'

export function useHome(): { gameModes: IGameMode[]; selectMode: (mode: IGameMode) => void } {
  const router = useRouter()

  const gameModes: IGameMode[] = [
    { id: 'local', label: 'Local', description: 'Jogue no mesmo dispositivo' },
    { id: 'online', label: 'Online', description: 'Desafie um amigo online' },
    { id: 'ai', label: 'vs. Computador', description: 'Jogue contra a IA' },
  ]

  function selectMode(mode: IGameMode): void {
    router.push({ name: 'game', params: { id: mode.id } })
  }

  return { gameModes, selectMode }
}
