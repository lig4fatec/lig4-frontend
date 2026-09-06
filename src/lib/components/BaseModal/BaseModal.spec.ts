import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseModal from './BaseModal.vue'

describe('BaseModal', () => {
  it('renders nothing when isOpen is false', () => {
    const wrapper = mount(BaseModal, {
      props: { isOpen: false },
    })

    expect(wrapper.find('.base-modal').exists()).toBe(false)
  })

  it('renders when isOpen is true', () => {
    const wrapper = mount(BaseModal, {
      props: { isOpen: true },
      global: {
        stubs: { teleport: true },
      },
    })

    expect(wrapper.find('.base-modal').exists()).toBe(true)
  })

  it('renders title when provided', () => {
    const wrapper = mount(BaseModal, {
      props: { isOpen: true, title: 'My Modal' },
      global: {
        stubs: { teleport: true },
      },
    })

    expect(wrapper.text()).toContain('My Modal')
  })

  it('applies size class', () => {
    const wrapper = mount(BaseModal, {
      props: { isOpen: true, size: 'lg' },
      global: {
        stubs: { teleport: true },
      },
    })

    expect(wrapper.find('[class*="content"]').classes()).toContain('-lg')
  })

  it('emits close on backdrop click', async () => {
    const wrapper = mount(BaseModal, {
      props: { isOpen: true },
      global: {
        stubs: { teleport: true },
      },
    })

    await wrapper.find('.base-modal').trigger('click')

    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  it('does not emit close on content click', async () => {
    const wrapper = mount(BaseModal, {
      props: { isOpen: true },
      global: {
        stubs: { teleport: true },
      },
    })

    await wrapper.find('[class*="content"]').trigger('click')

    expect(wrapper.emitted('close')).toBeUndefined()
  })

  it('emits close on close button click', async () => {
    const wrapper = mount(BaseModal, {
      props: { isOpen: true, title: 'Close Test' },
      global: {
        stubs: { teleport: true },
      },
    })

    const buttons = wrapper.findAll('button')
    const closeBtn = buttons.find((b) => b.text() === '×')
    expect(closeBtn).toBeDefined()
    await closeBtn!.trigger('click')

    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  it('renders default slot', () => {
    const wrapper = mount(BaseModal, {
      props: { isOpen: true },
      slots: { default: 'Modal body' },
      global: {
        stubs: { teleport: true },
      },
    })

    expect(wrapper.text()).toContain('Modal body')
  })

  it('renders footer slot', () => {
    const wrapper = mount(BaseModal, {
      props: { isOpen: true },
      slots: { footer: 'Modal footer' },
      global: {
        stubs: { teleport: true },
      },
    })

    expect(wrapper.text()).toContain('Modal footer')
  })
})
