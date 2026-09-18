import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseAvatar from './BaseAvatar.vue'

const meta: Meta<typeof BaseAvatar> = {
  title: 'Primitives/BaseAvatar',
  component: BaseAvatar,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do usuário (usado para iniciais)',
    },
    src: {
      control: 'text',
      description: 'URL da imagem do avatar',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do avatar',
    },
  },
  args: {
    name: 'João Silva',
    src: '',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof BaseAvatar>

export const WithInitials: Story = {
  render: () => ({
    components: { BaseAvatar },
    template: '<BaseAvatar name="João Silva" />',
  }),
}

export const WithImage: Story = {
  render: () => ({
    components: { BaseAvatar },
    template: '<BaseAvatar name="João" src="https://i.pravatar.cc/150?u=joao" />',
  }),
}

export const Small: Story = {
  render: () => ({
    components: { BaseAvatar },
    template: '<BaseAvatar name="Ana Costa" size="sm" />',
  }),
}

export const Medium: Story = {
  render: () => ({
    components: { BaseAvatar },
    template: '<BaseAvatar name="Ana Costa" size="md" />',
  }),
}

export const Large: Story = {
  render: () => ({
    components: { BaseAvatar },
    template: '<BaseAvatar name="Ana Costa" size="lg" />',
  }),
}

export const AllSizes: Story = {
  render: () => ({
    components: { BaseAvatar },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <BaseAvatar name="Pequeno" size="sm" />
        <BaseAvatar name="Médio" size="md" />
        <BaseAvatar name="Grande" size="lg" />
      </div>
    `,
  }),
}
