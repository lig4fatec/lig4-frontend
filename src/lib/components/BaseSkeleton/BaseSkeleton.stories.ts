import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseSkeleton from './BaseSkeleton.vue'

const meta: Meta<typeof BaseSkeleton> = {
  title: 'Primitives/BaseSkeleton',
  component: BaseSkeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
      description: 'Variante visual do skeleton',
    },
    width: {
      control: 'text',
      description: 'Largura do skeleton',
    },
    height: {
      control: 'text',
      description: 'Altura do skeleton',
    },
    animated: {
      control: 'boolean',
      description: 'Ativa animação de carregamento',
    },
  },
  args: {
    variant: 'text',
    width: '100%',
    height: '1rem',
    animated: true,
  },
}

export default meta
type Story = StoryObj<typeof BaseSkeleton>

export const Text: Story = {
  render: () => ({
    components: { BaseSkeleton },
    template: '<BaseSkeleton variant="text" width="200px" />',
  }),
}

export const Circular: Story = {
  render: () => ({
    components: { BaseSkeleton },
    template: '<BaseSkeleton variant="circular" width="48px" height="48px" />',
  }),
}

export const Rectangular: Story = {
  render: () => ({
    components: { BaseSkeleton },
    template: '<BaseSkeleton variant="rectangular" width="300px" height="200px" />',
  }),
}

export const NotAnimated: Story = {
  render: () => ({
    components: { BaseSkeleton },
    template: '<BaseSkeleton :animated="false" width="200px" />',
  }),
}

export const CardSkeleton: Story = {
  render: () => ({
    components: { BaseSkeleton },
    template: `
      <div style="width: 300px; padding: 16px; border: 1px solid #ccc; border-radius: 8px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <BaseSkeleton variant="circular" width="48px" height="48px" />
          <div style="flex: 1;">
            <BaseSkeleton variant="text" width="120px" height="16px" style="margin-bottom: 8px;" />
            <BaseSkeleton variant="text" width="80px" height="12px" />
          </div>
        </div>
        <BaseSkeleton variant="text" width="100%" height="16px" style="margin-bottom: 8px;" />
        <BaseSkeleton variant="text" width="100%" height="16px" style="margin-bottom: 8px;" />
        <BaseSkeleton variant="text" width="60%" height="16px" />
      </div>
    `,
  }),
}
