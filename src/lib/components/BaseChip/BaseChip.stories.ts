import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import BaseChip from './BaseChip.vue'

const meta: Meta<typeof BaseChip> = {
  title: 'Primitives/BaseChip',
  component: BaseChip,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Tamanho do chip',
    },
    removable: {
      control: 'boolean',
      description: 'Permite remover o chip',
    },
  },
  args: {
    size: 'md',
    removable: false,
  },
}

export default meta
type Story = StoryObj<typeof BaseChip>

export const Default: Story = {
  render: () => ({
    components: { BaseChip },
    template: '<BaseChip>Tag</BaseChip>',
  }),
}

export const Removable: Story = {
  render: () => ({
    components: { BaseChip },
    setup() {
      const tags = ref(['Vue', 'TypeScript', 'Vite'])
      
      function removeTag(tag: string) {
        tags.value = tags.value.filter(t => t !== tag)
      }
      
      return { tags, removeTag }
    },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <BaseChip
          v-for="tag in tags"
          :key="tag"
          removable
          @remove="removeTag(tag)"
        >
          {{ tag }}
        </BaseChip>
      </div>
    `,
  }),
}

export const Small: Story = {
  render: () => ({
    components: { BaseChip },
    template: '<BaseChip size="sm">Pequeno</BaseChip>',
  }),
}

export const Medium: Story = {
  render: () => ({
    components: { BaseChip },
    template: '<BaseChip size="md">Médio</BaseChip>',
  }),
}

export const AllSizes: Story = {
  render: () => ({
    components: { BaseChip },
    template: `
      <div style="display: flex; gap: 8px; align-items: center;">
        <BaseChip size="sm">Pequeno</BaseChip>
        <BaseChip size="md">Médio</BaseChip>
      </div>
    `,
  }),
}
