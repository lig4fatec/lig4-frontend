import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import BaseInput from './BaseInput.vue'

const meta: Meta<typeof BaseInput> = {
  title: 'Primitives/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo do input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder do input',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro',
    },
    hint: {
      control: 'text',
      description: 'Dica para o usuário',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input',
    },
    required: {
      control: 'boolean',
      description: 'Marca como obrigatório',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Tipo do input',
    },
  },
  args: {
    label: 'Nome',
    placeholder: 'Digite seu nome',
    error: '',
    hint: '',
    disabled: false,
    required: false,
    type: 'text',
  },
}

export default meta
type Story = StoryObj<typeof BaseInput>

export const Default: Story = {
  render: () => ({
    components: { BaseInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<BaseInput v-model="value" label="Nome" placeholder="Digite seu nome" />',
  }),
}

export const WithError: Story = {
  render: () => ({
    components: { BaseInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<BaseInput v-model="value" label="Email" error="Email inválido" />',
  }),
}

export const WithHint: Story = {
  render: () => ({
    components: { BaseInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<BaseInput v-model="value" label="Senha" hint="Mínimo 8 caracteres" />',
  }),
}

export const Required: Story = {
  render: () => ({
    components: { BaseInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<BaseInput v-model="value" label="Email" required />',
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { BaseInput },
    setup() {
      const value = ref('Valor desabilitado')
      return { value }
    },
    template: '<BaseInput v-model="value" label="Campo" disabled />',
  }),
}
