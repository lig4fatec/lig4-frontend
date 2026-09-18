import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseTooltip from './BaseTooltip.vue'
import BaseButton from '../BaseButton/BaseButton.vue'

const meta: Meta<typeof BaseTooltip> = {
  title: 'Primitives/BaseTooltip',
  component: BaseTooltip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto do tooltip',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posição do tooltip',
    },
  },
  args: {
    text: 'Texto do tooltip',
    position: 'top',
  },
}

export default meta
type Story = StoryObj<typeof BaseTooltip>

export const Default: Story = {
  render: () => ({
    components: { BaseTooltip, BaseButton },
    template: `
      <BaseTooltip text="Este é um tooltip">
        <BaseButton>Passe o mouse</BaseButton>
      </BaseTooltip>
    `,
  }),
}

export const Top: Story = {
  render: () => ({
    components: { BaseTooltip, BaseButton },
    template: `
      <BaseTooltip text="Tooltip no topo" position="top">
        <BaseButton>Topo</BaseButton>
      </BaseTooltip>
    `,
  }),
}

export const Bottom: Story = {
  render: () => ({
    components: { BaseTooltip, BaseButton },
    template: `
      <BaseTooltip text="Tooltip embaixo" position="bottom">
        <BaseButton>Embaixo</BaseButton>
      </BaseTooltip>
    `,
  }),
}

export const Left: Story = {
  render: () => ({
    components: { BaseTooltip, BaseButton },
    template: `
      <BaseTooltip text="Tooltip à esquerda" position="left">
        <BaseButton>Esquerda</BaseButton>
      </BaseTooltip>
    `,
  }),
}

export const Right: Story = {
  render: () => ({
    components: { BaseTooltip, BaseButton },
    template: `
      <BaseTooltip text="Tooltip à direita" position="right">
        <BaseButton>Direita</BaseButton>
      </BaseTooltip>
    `,
  }),
}

export const AllPositions: Story = {
  render: () => ({
    components: { BaseTooltip, BaseButton },
    template: `
      <div style="display: flex; gap: 16px; padding: 60px;">
        <BaseTooltip text="Topo" position="top">
          <BaseButton size="sm">Topo</BaseButton>
        </BaseTooltip>
        <BaseTooltip text="Embaixo" position="bottom">
          <BaseButton size="sm">Embaixo</BaseButton>
        </BaseTooltip>
        <BaseTooltip text="Esquerda" position="left">
          <BaseButton size="sm">Esquerda</BaseButton>
        </BaseTooltip>
        <BaseTooltip text="Direita" position="right">
          <BaseButton size="sm">Direita</BaseButton>
        </BaseTooltip>
      </div>
    `,
  }),
}
