import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseBadge from './BaseBadge.vue'

const meta: Meta<typeof BaseBadge> = {
  title: 'Primitives/BaseBadge',
  component: BaseBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['win', 'loss', 'draw', 'success', 'danger', 'warning', 'neutral'],
      description: 'Variante visual do badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Tamanho do badge',
    },
  },
  args: {
    variant: 'neutral',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof BaseBadge>

export const Default: Story = {
  render: () => ({
    components: { BaseBadge },
    template: '<BaseBadge>Neutral</BaseBadge>',
  }),
}

export const Win: Story = {
  render: () => ({
    components: { BaseBadge },
    template: '<BaseBadge variant="win">Vitória</BaseBadge>',
  }),
}

export const Loss: Story = {
  render: () => ({
    components: { BaseBadge },
    template: '<BaseBadge variant="loss">Derrota</BaseBadge>',
  }),
}

export const Draw: Story = {
  render: () => ({
    components: { BaseBadge },
    template: '<BaseBadge variant="draw">Empate</BaseBadge>',
  }),
}

export const Success: Story = {
  render: () => ({
    components: { BaseBadge },
    template: '<BaseBadge variant="success">Sucesso</BaseBadge>',
  }),
}

export const Danger: Story = {
  render: () => ({
    components: { BaseBadge },
    template: '<BaseBadge variant="danger">Perigo</BaseBadge>',
  }),
}

export const Warning: Story = {
  render: () => ({
    components: { BaseBadge },
    template: '<BaseBadge variant="warning">Aviso</BaseBadge>',
  }),
}

export const Small: Story = {
  render: () => ({
    components: { BaseBadge },
    template: '<BaseBadge size="sm">Pequeno</BaseBadge>',
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { BaseBadge },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <BaseBadge variant="win">Vitória</BaseBadge>
        <BaseBadge variant="loss">Derrota</BaseBadge>
        <BaseBadge variant="draw">Empate</BaseBadge>
        <BaseBadge variant="success">Sucesso</BaseBadge>
        <BaseBadge variant="danger">Perigo</BaseBadge>
        <BaseBadge variant="warning">Aviso</BaseBadge>
        <BaseBadge variant="neutral">Neutro</BaseBadge>
      </div>
    `,
  }),
}
