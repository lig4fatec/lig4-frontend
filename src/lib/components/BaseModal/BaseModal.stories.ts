import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import BaseModal from './BaseModal.vue'
import BaseButton from '../BaseButton/BaseButton.vue'

const meta: Meta<typeof BaseModal> = {
  title: 'Primitives/BaseModal',
  component: BaseModal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controla a visibilidade do modal',
    },
    title: {
      control: 'text',
      description: 'Título do modal',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do modal',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Permite fechar clicando no backdrop',
    },
  },
  args: {
    isOpen: false,
    title: 'Título do Modal',
    size: 'md',
    closeOnBackdrop: true,
  },
}

export default meta
type Story = StoryObj<typeof BaseModal>

export const Default: Story = {
  render: () => ({
    components: { BaseModal, BaseButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <BaseButton @click="isOpen = true">Abrir Modal</BaseButton>
        <BaseModal :is-open="isOpen" title="Modal de Exemplo" @close="isOpen = false">
          <p>Este é o conteúdo do modal.</p>
        </BaseModal>
      </div>
    `,
  }),
}

export const Small: Story = {
  render: () => ({
    components: { BaseModal, BaseButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <BaseButton @click="isOpen = true">Modal Pequeno</BaseButton>
        <BaseModal :is-open="isOpen" title="Pequeno" size="sm" @close="isOpen = false">
          <p>Modal com tamanho pequeno.</p>
        </BaseModal>
      </div>
    `,
  }),
}

export const Large: Story = {
  render: () => ({
    components: { BaseModal, BaseButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <BaseButton @click="isOpen = true">Modal Grande</BaseButton>
        <BaseModal :is-open="isOpen" title="Grande" size="lg" @close="isOpen = false">
          <p>Modal com tamanho grande.</p>
        </BaseModal>
      </div>
    `,
  }),
}

export const WithFooter: Story = {
  render: () => ({
    components: { BaseModal, BaseButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <BaseButton @click="isOpen = true">Modal com Footer</BaseButton>
        <BaseModal :is-open="isOpen" title="Confirmação" @close="isOpen = false">
          <p>Deseja confirmar a ação?</p>
          <template #footer>
            <BaseButton variant="ghost" @click="isOpen = false">Cancelar</BaseButton>
            <BaseButton @click="isOpen = false">Confirmar</BaseButton>
          </template>
        </BaseModal>
      </div>
    `,
  }),
}

export const NoBackdropClose: Story = {
  render: () => ({
    components: { BaseModal, BaseButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <BaseButton @click="isOpen = true">Modal Sem Fechar no Backdrop</BaseButton>
        <BaseModal :is-open="isOpen" title="Importante" :close-on-backdrop="false" @close="isOpen = false">
          <p>Clique no botão X para fechar.</p>
        </BaseModal>
      </div>
    `,
  }),
}
