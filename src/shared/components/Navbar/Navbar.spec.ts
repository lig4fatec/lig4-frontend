import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Navbar from './Navbar.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/game', component: { template: '<div />' } },
    { path: '/settings', component: { template: '<div />' } },
    { path: '/profile', component: { template: '<div />' } },
    { path: '/leaderboard', component: { template: '<div />' } },
  ],
})

describe('Navbar', () => {
  it('renders brand logo', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(Navbar, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('LIG 4')
  })

  it('renders all navigation links', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(Navbar, {
      global: {
        plugins: [router],
      },
    })

    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThanOrEqual(5)
    expect(links[0]!.text()).toBe('Início')
    expect(links[1]!.text()).toBe('Jogar')
    expect(links[2]!.text()).toBe('Placar')
    expect(links[3]!.text()).toBe('Perfil')
    expect(links[4]!.text()).toBe('Configurações')
  })

  it('renders avatar', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(Navbar, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('[class*="profile"]').exists()).toBe(true)
  })
})
