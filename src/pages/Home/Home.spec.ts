import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Home from './Home.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/game/:id?', component: { template: '<div />' } },
  ],
})

describe('Home page', () => {
  it('renders the title', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(Home, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('LIG 4')
    expect(wrapper.text()).toContain('O clássico jogo da velha')
  })

  it('renders 3 game mode cards', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(Home, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Local')
    expect(wrapper.text()).toContain('Online')
    expect(wrapper.text()).toContain('vs. Computador')
  })
})
