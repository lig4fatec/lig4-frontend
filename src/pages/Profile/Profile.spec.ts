import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Profile from './Profile.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/profile', component: Profile },
  ],
})

describe('Profile page', () => {
  it('renders the title', async () => {
    router.push('/profile')
    await router.isReady()

    const wrapper = mount(Profile, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Perfil')
  })

  it('renders player name', async () => {
    router.push('/profile')
    await router.isReady()

    const wrapper = mount(Profile, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Jogador 1')
  })

  it('renders level', async () => {
    router.push('/profile')
    await router.isReady()

    const wrapper = mount(Profile, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Nível')
  })

  it('renders name input', async () => {
    router.push('/profile')
    await router.isReady()

    const wrapper = mount(Profile, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.text()).toContain('Nome')
  })
})
