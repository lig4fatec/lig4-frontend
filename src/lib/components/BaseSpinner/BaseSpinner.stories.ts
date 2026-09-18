import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseSpinner from './BaseSpinner.vue'

const meta: Meta<typeof BaseSpinner> = {
  title: 'Primitives/BaseSpinner',
  component: BaseSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do spinner',
    },
    label: {
      control: 'text',
      description: 'Rótulo acessível',
    },
  },
  args: {
    size: 'md',
    label: 'Carregando...',
  },
}

export default meta
type Story = StoryObj<typeof BaseSpinner>

export const Default: Story = {
  render: () => ({
    components: { BaseSpinner },
    template: '<BaseSpinner />',
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { BaseSpinner },
    template: '<BaseSpinner label="Carregando dados..." />',
  }),
}

export const Small: Story = {
  render: () => ({
    components: { BaseSpinner },
    template: '<BaseSpinner size="sm" />',
  }),
}

export const Medium: Story = {
  render: () => ({
    components: { BaseSpinner },
    template: '<BaseSpinner size="md" />',
  }),
}

export const Large: Story = {
  render: () => ({
    components: { BaseSpinner },
    template: '<BaseSpinner size="lg" />',
  }),
}

export const AllSizes: Story = {
  render: () => ({
    components: { BaseSpinner },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <BaseSpinner size="sm" />
        <BaseSpinner size="md" />
        <BaseSpinner size="lg" />
      </div>
    `,
  }),
}
