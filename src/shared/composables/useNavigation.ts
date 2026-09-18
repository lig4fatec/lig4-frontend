import { computed } from 'vue'
import type { INavItem } from '@/types'
import { ROUTE_HOME, ROUTE_GAME, ROUTE_SETTINGS, ROUTE_PROFILE, ROUTE_LEADERBOARD } from '@/utils/constants'
import i18n from '@/lib/i18n'

export function useNavigation(): { navItems: import('vue').ComputedRef<INavItem[]> } {
  const navItems = computed<INavItem[]>((): INavItem[] => [
    { label: i18n.global.t('nav.home'), route: ROUTE_HOME },
    { label: i18n.global.t('nav.play'), route: ROUTE_GAME },
    { label: i18n.global.t('nav.leaderboard'), route: ROUTE_LEADERBOARD },
    { label: i18n.global.t('nav.profile'), route: ROUTE_PROFILE },
    { label: i18n.global.t('nav.settings'), route: ROUTE_SETTINGS },
  ])

  return { navItems }
}
