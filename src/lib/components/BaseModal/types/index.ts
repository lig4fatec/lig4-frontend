export interface IBaseModalProps {
  id?: string
  dataTestid?: string
  isOpen: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg'
  closeOnBackdrop?: boolean
}

export interface IBaseModalEmits {
  close: []
}
