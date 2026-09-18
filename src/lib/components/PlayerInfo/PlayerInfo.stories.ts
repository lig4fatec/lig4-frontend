import type { Meta, StoryObj } from '@storybook/vue3-vite'
import PlayerInfo from './PlayerInfo.vue'

const meta: Meta<typeof PlayerInfo> = {
  title: 'Composition/PlayerInfo',
  component: PlayerInfo,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do jogador',
    },
    avatar: {
      control: 'text',
      description: 'URL do avatar',
    },
    level: {
      control: 'number',
      description: 'Nível do jogador',
    },
  },
  args: {
    name: 'João Silva',
    avatar: '',
    level: 15,
  },
}

export default meta
type Story = StoryObj<typeof PlayerInfo>

export const Default: Story = {
  render: () => ({
    components: { PlayerInfo },
    template: '<PlayerInfo name="João Silva" :level="15" />',
  }),
}

export const WithAvatar: Story = {
  render: () => ({
    components: { PlayerInfo },
    template: '<PlayerInfo name="Maria Costa" avatar="https://i.pravatar.cc/150?u=maria" :level="22" />',
  }),
}

export const NoLevel: Story = {
  render: () => ({
    components: { PlayerInfo },
    template: '<PlayerInfo name="Ana Santos" />',
  }),
}

export const MultiplePlayers: Story = {
  render: () => ({
    components: { PlayerInfo },
    template: `
      <div style="display: flex; gap: 24px;">
        <PlayerInfo name="Jogador 1" :level="10" />
        <PlayerInfo name="Jogador 2" :level="25" />
      </div>
    `,
  }),
}
