import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Leaderboard from './Leaderboard.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/leaderboard', component: Leaderboard },
  ],
})

describe('Leaderboard page', () => {
  it('renders the title', async () => {
    router.push('/leaderboard')
    await router.isReady()

    const wrapper = mount(Leaderboard, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Placar')
  })

  it('renders score entries', async () => {
    router.push('/leaderboard')
    await router.isReady()

    const wrapper = mount(Leaderboard, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Jogador 1')
    expect(wrapper.text()).toContain('Jogador 2')
    expect(wrapper.text()).toContain('Jogador 3')
  })

  it('displays win/loss/draw stats', async () => {
    router.push('/leaderboard')
    await router.isReady()

    const wrapper = mount(Leaderboard, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('10V')
    expect(wrapper.text()).toContain('3D')
    expect(wrapper.text()).toContain('2E')
  })

  it('displays rank numbers', async () => {
    router.push('/leaderboard')
    await router.isReady()

    const wrapper = mount(Leaderboard, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('#1')
    expect(wrapper.text()).toContain('#2')
    expect(wrapper.text()).toContain('#3')
  })
})
