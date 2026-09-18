import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('renders with default props', () => {
    const wrapper = mount(BaseButton, {
      slots: { default: 'Click me' },
    })

    expect(wrapper.text()).toContain('Click me')
    expect(wrapper.classes()).toContain('base-button')
    expect(wrapper.classes()).toContain('-primary')
    expect(wrapper.classes()).toContain('-md')
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('applies variant class', () => {
    const wrapper = mount(BaseButton, {
      props: { variant: 'secondary' },
    })

    expect(wrapper.classes()).toContain('-secondary')
  })

  it('applies size class', () => {
    const wrapper = mount(BaseButton, {
      props: { size: 'lg' },
    })

    expect(wrapper.classes()).toContain('-lg')
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: true },
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('is disabled when loading prop is true', () => {
    const wrapper = mount(BaseButton, {
      props: { loading: true },
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(BaseButton)

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: true },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(BaseButton, {
      props: { loading: true },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
