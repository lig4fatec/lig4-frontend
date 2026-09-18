import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseIcon from './BaseIcon.vue'
import { Check, X, Star, Heart, User, Settings, Home, Search } from '../../icons'

const meta: Meta<typeof BaseIcon> = {
  title: 'Primitives/BaseIcon',
  component: BaseIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do ícone',
    },
    color: {
      control: 'color',
      description: 'Cor do ícone',
    },
  },
  args: {
    size: 'md',
    color: 'currentColor',
  },
}

export default meta
type Story = StoryObj<typeof BaseIcon>

export const Default: Story = {
  render: () => ({
    components: { BaseIcon },
    setup() {
      return { icon: Star }
    },
    template: '<BaseIcon :icon="icon" />',
  }),
}

export const CheckIcon: Story = {
  render: () => ({
    components: { BaseIcon },
    setup() {
      return { icon: Check }
    },
    template: '<BaseIcon :icon="icon" color="#27ae60" />',
  }),
}

export const CloseIcon: Story = {
  render: () => ({
    components: { BaseIcon },
    setup() {
      return { icon: X }
    },
    template: '<BaseIcon :icon="icon" color="#e74c3c" />',
  }),
}

export const HeartIcon: Story = {
  render: () => ({
    components: { BaseIcon },
    setup() {
      return { icon: Heart }
    },
    template: '<BaseIcon :icon="icon" color="#e74c3c" />',
  }),
}

export const AllSizes: Story = {
  render: () => ({
    components: { BaseIcon },
    setup() {
      return { icon: Star }
    },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <BaseIcon :icon="icon" size="xs" />
        <BaseIcon :icon="icon" size="sm" />
        <BaseIcon :icon="icon" size="md" />
        <BaseIcon :icon="icon" size="lg" />
        <BaseIcon :icon="icon" size="xl" />
      </div>
    `,
  }),
}

export const CommonIcons: Story = {
  render: () => ({
    components: { BaseIcon },
    setup() {
      return { icons: [Check, X, Star, Heart, User, Settings, Home, Search] }
    },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <BaseIcon v-for="(icon, index) in icons" :key="index" :icon="icon" />
      </div>
    `,
  }),
}
