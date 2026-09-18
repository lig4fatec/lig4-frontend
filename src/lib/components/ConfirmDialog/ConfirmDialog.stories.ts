import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import ConfirmDialog from './ConfirmDialog.vue'
import BaseButton from '../BaseButton/BaseButton.vue'

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Composition/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controla a visibilidade',
    },
    title: {
      control: 'text',
      description: 'Título do diálogo',
    },
    message: {
      control: 'text',
      description: 'Mensagem de confirmação',
    },
    confirmText: {
      control: 'text',
      description: 'Texto do botão de confirmar',
    },
    cancelText: {
      control: 'text',
      description: 'Texto do botão de cancelar',
    },
    variant: {
      control: 'select',
      options: ['danger', 'warning', 'info'],
      description: 'Variante visual',
    },
  },
  args: {
    isOpen: false,
    title: 'Confirmar exclusão',
    message: 'Tem certeza que deseja excluir este item?',
    confirmText: 'Excluir',
    cancelText: 'Cancelar',
    variant: 'danger',
  },
}

export default meta
type Story = StoryObj<typeof ConfirmDialog>

export const Default: Story = {
  render: () => ({
    components: { ConfirmDialog, BaseButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <BaseButton @click="isOpen = true">Excluir Item</BaseButton>
        <ConfirmDialog
          :is-open="isOpen"
          title="Confirmar exclusão"
          message="Tem certeza que deseja excluir este item?"
          @confirm="isOpen = false"
          @cancel="isOpen = false"
        />
      </div>
    `,
  }),
}

export const Warning: Story = {
  render: () => ({
    components: { ConfirmDialog, BaseButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <BaseButton variant="secondary" @click="isOpen = true">Sair do Jogo</BaseButton>
        <ConfirmDialog
          :is-open="isOpen"
          title="Sair do jogo"
          message="Tem certeza que deseja sair? O progresso será perdido."
          confirm-text="Sair"
          cancel-text="Ficar"
          variant="warning"
          @confirm="isOpen = false"
          @cancel="isOpen = false"
        />
      </div>
    `,
  }),
}

export const Info: Story = {
  render: () => ({
    components: { ConfirmDialog, BaseButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <BaseButton variant="ghost" @click="isOpen = true">Ver Regras</BaseButton>
        <ConfirmDialog
          :is-open="isOpen"
          title="Regras do Jogo"
          message="Conecte 4 peças em linha para vencer."
          confirm-text="Entendi"
          cancel-text="Fechar"
          variant="info"
          @confirm="isOpen = false"
          @cancel="isOpen = false"
        />
      </div>
    `,
  }),
}
