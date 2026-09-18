import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseCard from './BaseCard.vue'

const meta: Meta<typeof BaseCard> = {
  title: 'Primitives/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'highlighted'],
      description: 'Variante visual do card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Espaçamento interno',
    },
    bordered: {
      control: 'boolean',
      description: 'Mostra borda mais espessa',
    },
  },
  args: {
    variant: 'default',
    padding: 'md',
    bordered: false,
  },
}

export default meta
type Story = StoryObj<typeof BaseCard>

export const Default: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard>
        <h3 style="margin: 0 0 8px 0;">Título do Card</h3>
        <p style="margin: 0;">Este é um card padrão com conteúdo.</p>
      </BaseCard>
    `,
  }),
}

export const Highlighted: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard variant="highlighted">
        <h3 style="margin: 0 0 8px 0;">Card Destacado</h3>
        <p style="margin: 0;">Este card está destacado.</p>
      </BaseCard>
    `,
  }),
}

export const WithHeader: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard>
        <template #header>
          <h3 style="margin: 0;">Cabeçalho</h3>
        </template>
        <p style="margin: 0;">Conteúdo do card.</p>
      </BaseCard>
    `,
  }),
}

export const WithFooter: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard>
        <p style="margin: 0;">Conteúdo do card.</p>
        <template #footer>
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <button>Cancelar</button>
            <button>Confirmar</button>
          </div>
        </template>
      </BaseCard>
    `,
  }),
}

export const Bordered: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard bordered>
        <h3 style="margin: 0 0 8px 0;">Card com Borda</h3>
        <p style="margin: 0;">Este card tem borda mais espessa.</p>
      </BaseCard>
    `,
  }),
}

export const NoPadding: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard padding="none">
        <div style="padding: 20px; background: #f0f0f0;">
          <p style="margin: 0;">Card sem padding interno.</p>
        </div>
      </BaseCard>
    `,
  }),
}
