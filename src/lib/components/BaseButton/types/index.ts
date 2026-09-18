export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline' | 'warning' | 'info'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface IBaseButtonProps {
  id?: string
  dataTestid?: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
}

export interface IBaseButtonEmits {
  click: [event: MouseEvent]
}
