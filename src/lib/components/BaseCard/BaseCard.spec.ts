import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseCard from './BaseCard.vue'

describe('BaseCard', () => {
  it('renders with default props', () => {
    const wrapper = mount(BaseCard, {
      slots: { default: 'Card content' },
    })

    expect(wrapper.text()).toContain('Card content')
    expect(wrapper.classes()).toContain('base-card')
    expect(wrapper.classes()).toContain('-default')
    expect(wrapper.classes()).toContain('-md')
  })

  it('applies variant class', () => {
    const wrapper = mount(BaseCard, {
      props: { variant: 'highlighted' },
    })

    expect(wrapper.classes()).toContain('-highlighted')
  })

  it('applies padding class', () => {
    const wrapper = mount(BaseCard, {
      props: { padding: 'lg' },
    })

    expect(wrapper.classes()).toContain('-lg')
  })

  it('renders header slot', () => {
    const wrapper = mount(BaseCard, {
      slots: { header: 'Card Header' },
    })

    expect(wrapper.find('.base-card > header').exists()).toBe(true)
    expect(wrapper.text()).toContain('Card Header')
  })

  it('renders footer slot', () => {
    const wrapper = mount(BaseCard, {
      slots: { footer: 'Card Footer' },
    })

    expect(wrapper.find('.base-card > footer').exists()).toBe(true)
    expect(wrapper.text()).toContain('Card Footer')
  })

  it('does not render header when not provided', () => {
    const wrapper = mount(BaseCard)

    expect(wrapper.find('.base-card > header').exists()).toBe(false)
  })

  it('does not render footer when not provided', () => {
    const wrapper = mount(BaseCard)

    expect(wrapper.find('.base-card > footer').exists()).toBe(false)
  })
})
