import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { setActivePinia, createPinia } from 'pinia'
import Game from './Game.vue'

vi.mock('phaser', () => {
  class MockGame {
    destroy = vi.fn()
    constructor(_config: unknown) {
      // simula criação do jogo
    }
  }
  return { default: { Game: MockGame, AUTO: 0 } }
})

vi.mock('@/game/scenes/MainScene', () => ({
  createGameConfig: vi.fn().mockReturnValue({
    type: 0,
    width: 840,
    height: 720,
    parent: 'game-canvas',
    backgroundColor: '#2c3e50',
    scene: {
      preload: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
  }),
}))

vi.mock('@/services/GameService', () => ({
  GameService: {
    startNewGame: vi.fn(),
    resetGame: vi.fn(),
    placePiece: vi.fn(),
  },
}))

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/game/:id?', component: Game },
  ],
})

describe('Game page', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('renders the title', async () => {
    router.push('/game')
    await router.isReady()

    const wrapper = mount(Game, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('LIG 4')
  })

  it('renders game canvas div', async () => {
    router.push('/game')
    await router.isReady()

    const wrapper = mount(Game, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('#game-canvas').exists()).toBe(true)
  })

  it('shows current player', async () => {
    router.push('/game')
    await router.isReady()

    const wrapper = mount(Game, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Vez do jogador')
  })

})
