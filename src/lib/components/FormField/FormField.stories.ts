import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import FormField from './FormField.vue'
import BaseInput from '../BaseInput/BaseInput.vue'

const meta: Meta<typeof FormField> = {
  title: 'Composition/FormField',
  component: FormField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo do campo',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro',
    },
    hint: {
      control: 'text',
      description: 'Dica para o usuário',
    },
    required: {
      control: 'boolean',
      description: 'Marca como obrigatório',
    },
  },
  args: {
    label: 'Nome',
    error: '',
    hint: '',
    required: false,
  },
}

export default meta
type Story = StoryObj<typeof FormField>

export const Default: Story = {
  render: () => ({
    components: { FormField, BaseInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <FormField label="Nome">
        <BaseInput v-model="value" placeholder="Digite seu nome" />
      </FormField>
    `,
  }),
}

export const WithError: Story = {
  render: () => ({
    components: { FormField, BaseInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <FormField label="Email" error="Email inválido">
        <BaseInput v-model="value" placeholder="Digite seu email" />
      </FormField>
    `,
  }),
}

export const WithHint: Story = {
  render: () => ({
    components: { FormField, BaseInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <FormField label="Senha" hint="Mínimo 8 caracteres">
        <BaseInput v-model="value" type="password" placeholder="Digite sua senha" />
      </FormField>
    `,
  }),
}

export const Required: Story = {
  render: () => ({
    components: { FormField, BaseInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <FormField label="Email" required>
        <BaseInput v-model="value" placeholder="Digite seu email" />
      </FormField>
    `,
  }),
}

export const AllStates: Story = {
  render: () => ({
    components: { FormField, BaseInput },
    setup() {
      const name = ref('')
      const email = ref('')
      const password = ref('')
      return { name, email, password }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
        <FormField label="Nome" required>
          <BaseInput v-model="name" placeholder="Nome completo" />
        </FormField>
        <FormField label="Email" error="Email já cadastrado">
          <BaseInput v-model="email" placeholder="seu@email.com" />
        </FormField>
        <FormField label="Senha" hint="Mínimo 8 caracteres">
          <BaseInput v-model="password" type="password" placeholder="Sua senha" />
        </FormField>
      </div>
    `,
  }),
}
