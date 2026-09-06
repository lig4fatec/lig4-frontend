import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseAvatar from './BaseAvatar.vue'

describe('BaseAvatar', () => {
  it('renders initials when no src is provided', () => {
    const wrapper = mount(BaseAvatar, {
      props: { name: 'João Silva' },
    })

    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.text()).toBe('JS')
  })

  it('renders image when src is provided', () => {
    const wrapper = mount(BaseAvatar, {
      props: { name: 'João Silva', src: '/avatar.jpg' },
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('/avatar.jpg')
    expect(wrapper.find('img').attributes('alt')).toBe('João Silva')
    expect(wrapper.find('span').exists()).toBe(false)
  })

  it('applies size class', () => {
    const wrapper = mount(BaseAvatar, {
      props: { name: 'Test', size: 'lg' },
    })

    expect(wrapper.classes()).toContain('-lg')
  })

  it('defaults to md size', () => {
    const wrapper = mount(BaseAvatar, {
      props: { name: 'Test' },
    })

    expect(wrapper.classes()).toContain('-md')
  })

  it('shows max 2 initials for multi-word names', () => {
    const wrapper = mount(BaseAvatar, {
      props: { name: 'João da Silva' },
    })

    expect(wrapper.text()).toBe('JD')
  })

  it('uppercase initials', () => {
    const wrapper = mount(BaseAvatar, {
      props: { name: 'ana costa' },
    })

    expect(wrapper.text()).toBe('AC')
  })
})
