import { defineComponent } from 'vue'
import './BaseInput.scss'


export type { IBaseInputProps, IBaseInputEmits } from './types'

export const baseInputProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  modelValue: { type: String, required: true as const },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  error: { type: String, default: '' },
  hint: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  type: { type: String, default: 'text' },
}

export function useBaseInput(
  emit: (e: 'update:modelValue', value: string) => void,
): { handleInput: (event: Event) => void } {
  function handleInput(event: Event): void {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
  }

  return {
    handleInput,
  }
}

export default defineComponent({
  name: 'BaseInput',
  inheritAttrs: false,
  props: baseInputProps,
  emits: ['update:modelValue'],
  setup(_props, { emit }) {
    const { handleInput } = useBaseInput(emit as (e: 'update:modelValue', value: string) => void)

    return {
      handleInput,
    }
  },
})
