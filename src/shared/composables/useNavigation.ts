import { computed } from 'vue'
import type { INavItem } from '@/types'
import { ROUTE_HOME, ROUTE_GAME, ROUTE_SETTINGS, ROUTE_PROFILE, ROUTE_LEADERBOARD } from '@/utils/constants'

export function useNavigation(): { navItems: import('vue').ComputedRef<INavItem[]> } {
  const navItems = computed<INavItem[]>((): INavItem[] => [
    { label: 'Início', route: ROUTE_HOME },
    { label: 'Jogar', route: ROUTE_GAME },
    { label: 'Placar', route: ROUTE_LEADERBOARD },
    { label: 'Perfil', route: ROUTE_PROFILE },
    { label: 'Configurações', route: ROUTE_SETTINGS },
  ])

  return { navItems }
}
