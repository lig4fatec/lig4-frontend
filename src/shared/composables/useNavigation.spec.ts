import { describe, it, expect } from 'vitest'
import { useNavigation } from './useNavigation'

describe('useNavigation', () => {
  it('returns nav items with correct labels and routes', () => {
    const { navItems } = useNavigation()

    expect(navItems.value).toHaveLength(5)
    expect(navItems.value[0]).toEqual({ label: 'Início', route: '/' })
    expect(navItems.value[1]).toEqual({ label: 'Jogar', route: '/game' })
    expect(navItems.value[2]).toEqual({ label: 'Placar', route: '/leaderboard' })
    expect(navItems.value[3]).toEqual({ label: 'Perfil', route: '/profile' })
    expect(navItems.value[4]).toEqual({ label: 'Configurações', route: '/settings' })
  })
})
