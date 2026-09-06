import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseInput from './BaseInput.vue'

describe('BaseInput', () => {
  it('renders with default props', () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: '' },
    })

    expect(wrapper.find('.base-input').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('label').exists()).toBe(false)
    expect(wrapper.find('span').exists()).toBe(false)
  })

  it('renders label when provided', () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: '', label: 'Username' },
    })

    expect(wrapper.find('label').exists()).toBe(true)
    expect(wrapper.text()).toContain('Username')
  })

  it('renders placeholder when provided', () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: '', placeholder: 'Enter text' },
    })

    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text')
  })

  it('renders error when provided', () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: '', error: 'Required field' },
    })

    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.text()).toContain('Required field')
    expect(wrapper.classes()).toContain('-error')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: '' },
    })

    await wrapper.find('input').setValue('hello')

    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['hello'])
  })

  it('disables input when disabled prop is true', () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: '', disabled: true },
    })

    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('-disabled')
  })

  it('sets input type', () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: '', type: 'password' },
    })

    expect(wrapper.find('input').attributes('type')).toBe('password')
  })
})
