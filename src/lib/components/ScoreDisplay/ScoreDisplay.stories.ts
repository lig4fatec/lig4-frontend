import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ScoreDisplay from './ScoreDisplay.vue'

const meta: Meta<typeof ScoreDisplay> = {
  title: 'Composition/ScoreDisplay',
  component: ScoreDisplay,
  tags: ['autodocs'],
  argTypes: {
    score: {
      control: 'object',
      description: 'Placar atual',
    },
    player1Label: {
      control: 'text',
      description: 'Rótulo do jogador 1',
    },
    player2Label: {
      control: 'text',
      description: 'Rótulo do jogador 2',
    },
  },
  args: {
    score: { player1: 3, player2: 2 },
    player1Label: 'Jogador 1',
    player2Label: 'Jogador 2',
  },
}

export default meta
type Story = StoryObj<typeof ScoreDisplay>

export const Default: Story = {
  render: () => ({
    components: { ScoreDisplay },
    template: '<ScoreDisplay :score="{ player1: 3, player2: 2 }" />',
  }),
}

export const Tied: Story = {
  render: () => ({
    components: { ScoreDisplay },
    template: '<ScoreDisplay :score="{ player1: 5, player2: 5 }" />',
  }),
}

export const WithNames: Story = {
  render: () => ({
    components: { ScoreDisplay },
    template: '<ScoreDisplay :score="{ player1: 7, player2: 4 }" player1-label="João" player2-label="Maria" />',
  }),
}

export const ZeroScore: Story = {
  render: () => ({
    components: { ScoreDisplay },
    template: '<ScoreDisplay :score="{ player1: 0, player2: 0 }" />',
  }),
}
