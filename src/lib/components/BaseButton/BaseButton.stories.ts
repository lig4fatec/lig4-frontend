import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  title: 'Primitives/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost', 'outline'],
      description: 'Variante visual do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão',
    },
    loading: {
      control: 'boolean',
      description: 'Mostra estado de carregamento',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
}

export default meta
type Story = StoryObj<typeof BaseButton>

export const Primary: Story = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton variant="primary">Primary</BaseButton>',
  }),
}

export const Secondary: Story = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton variant="secondary">Secondary</BaseButton>',
  }),
}

export const Danger: Story = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton variant="danger">Danger</BaseButton>',
  }),
}

export const Ghost: Story = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton variant="ghost">Ghost</BaseButton>',
  }),
}

export const Outline: Story = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton variant="outline">Outline</BaseButton>',
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton :loading="true">Carregando</BaseButton>',
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton :disabled="true">Desabilitado</BaseButton>',
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; gap: 8px; align-items: center;">
        <BaseButton size="sm">Small</BaseButton>
        <BaseButton size="md">Medium</BaseButton>
        <BaseButton size="lg">Large</BaseButton>
      </div>
    `,
  }),
}
