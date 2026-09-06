import { ref } from 'vue'
import type { IPlayer } from '@/types'

export function useProfile(): {
  player: import('vue').Ref<IPlayer>
  updateName: (newName: string) => void
} {
  const player = ref<IPlayer>({
    id: crypto.randomUUID(),
    name: 'Jogador 1',
    level: 1,
  })

  function updateName(newName: string): void {
    player.value.name = newName
  }

  return { player, updateName }
}
