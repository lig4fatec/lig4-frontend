import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { IGameMode } from '@/types'
import i18n from '@/lib/i18n'

export function useHome(): { gameModes: import('vue').ComputedRef<IGameMode[]>; selectMode: (mode: IGameMode) => void } {
  const router = useRouter()

  const gameModes = computed<IGameMode[]>((): IGameMode[] => [
    { id: 'local', label: i18n.global.t('home.modes.local.label'), description: i18n.global.t('home.modes.local.description') },
    { id: 'online', label: i18n.global.t('home.modes.online.label'), description: i18n.global.t('home.modes.online.description') },
    { id: 'ai', label: i18n.global.t('home.modes.ai.label'), description: i18n.global.t('home.modes.ai.description') },
  ])

  function selectMode(mode: IGameMode): void {
    router.push({ name: 'game', params: { id: mode.id } })
  }

  return { gameModes, selectMode }
}
