import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Settings from './Settings.vue'

vi.mock('@/game/EventBus', () => ({
  typedEventBus: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
}))

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/settings', component: Settings },
  ],
})

describe('Settings page', () => {
  it('renders the title', async () => {
    router.push('/settings')
    await router.isReady()

    const wrapper = mount(Settings, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Configurações')
  })

  it('renders sound toggle', async () => {
    router.push('/settings')
    await router.isReady()

    const wrapper = mount(Settings, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Áudio')
    expect(wrapper.text()).toContain('Sons')
    expect(wrapper.text()).toContain('Ativado')
  })

  it('renders notification toggle', async () => {
    router.push('/settings')
    await router.isReady()

    const wrapper = mount(Settings, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Notificações')
  })

  it('renders theme options', async () => {
    router.push('/settings')
    await router.isReady()

    const wrapper = mount(Settings, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Aparência')
    expect(wrapper.text()).toContain('Escuro')
    expect(wrapper.text()).toContain('Claro')
  })
})
