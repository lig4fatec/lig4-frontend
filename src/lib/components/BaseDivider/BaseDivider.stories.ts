import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseDivider from './BaseDivider.vue'

const meta: Meta<typeof BaseDivider> = {
  title: 'Primitives/BaseDivider',
  component: BaseDivider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientação do divisor',
    },
  },
  args: {
    orientation: 'horizontal',
  },
}

export default meta
type Story = StoryObj<typeof BaseDivider>

export const Horizontal: Story = {
  render: () => ({
    components: { BaseDivider },
    template: '<BaseDivider />',
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { BaseDivider },
    template: '<div style="height: 100px;"><BaseDivider orientation="vertical" /></div>',
  }),
}

export const InContext: Story = {
  render: () => ({
    components: { BaseDivider },
    template: `
      <div>
        <p>Conteúdo acima</p>
        <BaseDivider />
        <p>Conteúdo abaixo</p>
      </div>
    `,
  }),
}
