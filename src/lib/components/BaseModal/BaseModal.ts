import { defineComponent } from 'vue'
import type { IBaseModalProps } from './types'
import './BaseModal.scss'

export type { IBaseModalProps, IBaseModalEmits } from './types'

export const baseModalProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  isOpen: { type: Boolean, required: true as const },
  title: { type: String, default: '' },
  size: { type: String as () => IBaseModalProps['size'], default: 'md' },
  closeOnBackdrop: { type: Boolean, default: true },
}

export function useBaseModal(
  props: IBaseModalProps,
  emit: (e: 'close') => void,
): {
  handleBackdropClick: () => void
  handleContentClick: (event: MouseEvent) => void
  handleCloseClick: () => void
} {
  function handleBackdropClick(): void {
    if (props.closeOnBackdrop) {
      emit('close')
    }
  }

  function handleContentClick(event: MouseEvent): void {
    event.stopPropagation()
  }

  function handleCloseClick(): void {
    emit('close')
  }

  return {
    handleBackdropClick,
    handleContentClick,
    handleCloseClick,
  }
}

export default defineComponent({
  name: 'BaseModal',
  inheritAttrs: false,
  props: baseModalProps,
  emits: ['close'],
  setup(props, { emit }) {
    const { handleBackdropClick, handleContentClick, handleCloseClick } = useBaseModal(
      props as IBaseModalProps,
      emit as (e: 'close') => void,
    )

    return {
      handleBackdropClick,
      handleContentClick,
      handleCloseClick,
    }
  },
})
