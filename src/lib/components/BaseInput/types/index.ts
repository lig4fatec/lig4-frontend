export interface IBaseInputProps {
  id?: string
  dataTestid?: string
  modelValue: string
  label?: string
  placeholder?: string
  error?: string
  hint?: string
  disabled?: boolean
  required?: boolean
  type?: 'text' | 'password' | 'email' | 'number'
}

export interface IBaseInputEmits {
  'update:modelValue': [value: string]
}
