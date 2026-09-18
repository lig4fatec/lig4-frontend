import { defineComponent } from 'vue'
import './FormField.scss'

export interface IFormFieldProps {
  id?: string
  dataTestid?: string
  label?: string
  error?: string
  hint?: string
  required?: boolean
}

export const formFieldProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  label: { type: String, default: '' },
  error: { type: String, default: '' },
  hint: { type: String, default: '' },
  required: { type: Boolean, default: false },
}

export function useFormField(props: IFormFieldProps): { labelId: string | undefined; errorId: string | undefined; hintId: string | undefined } {
  const labelId = props.id ? `${props.id}-label` : undefined
  const errorId = props.id ? `${props.id}-error` : undefined
  const hintId = props.id ? `${props.id}-hint` : undefined

  return {
    labelId,
    errorId,
    hintId,
  }
}

export default defineComponent({
  name: 'FormField',
  inheritAttrs: false,
  props: formFieldProps,
  setup(props) {
    const { labelId, errorId, hintId } = useFormField(props as IFormFieldProps)

    return {
      labelId,
      errorId,
      hintId,
    }
  },
})
