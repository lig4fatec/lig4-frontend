import type { Meta, StoryObj } from '@storybook/vue3-vite'
import GameCard from './GameCard.vue'

const meta: Meta<typeof GameCard> = {
  title: 'Composition/GameCard',
  component: GameCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do card',
    },
    description: {
      control: 'text',
      description: 'Descrição do card',
    },
    variant: {
      control: 'select',
      options: ['default', 'highlighted'],
      description: 'Variante visual',
    },
  },
  args: {
    title: 'Modo de Jogo',
    description: 'Descrição do modo de jogo',
    variant: 'highlighted',
  },
}

export default meta
type Story = StoryObj<typeof GameCard>

export const Default: Story = {
  render: () => ({
    components: { GameCard },
    template: `
      <GameCard title="Jogo Rápido" description="Partida rápida de 5 minutos" />
    `,
  }),
}

export const Highlighted: Story = {
  render: () => ({
    components: { GameCard },
    template: `
      <GameCard title="Modo Competitivo" description="Jogue ranqueado contra outros jogadores" variant="highlighted" />
    `,
  }),
}

export const WithSlot: Story = {
  render: () => ({
    components: { GameCard },
    template: `
      <GameCard title="Personalizado">
        <p style="margin: 0; color: #666;">Conteúdo customizado via slot.</p>
      </GameCard>
    `,
  }),
}

export const MultipleCards: Story = {
  render: () => ({
    components: { GameCard },
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
        <GameCard title="Jogo Rápido" description="Partida de 5 minutos" />
        <GameCard title="Ranked" description="Modo competitivo" variant="highlighted" />
        <GameCard title="Treino" description="Pratique contra o computador" />
        <GameCard title="Tutorial" description="Aprenda a jogar" variant="highlighted" />
      </div>
    `,
  }),
}
