import { defineComponent } from 'vue'
import './ConfirmDialog.scss'
import BaseModal from '../BaseModal/BaseModal.vue'
import BaseButton from '../BaseButton/BaseButton.vue'

export interface IConfirmDialogProps {
  id?: string
  dataTestid?: string
  isOpen: boolean
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
  variant?: 'danger' | 'warning' | 'info'
}

export interface IConfirmDialogEmits {
  confirm: []
  cancel: []
}

export const confirmDialogProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  isOpen: { type: Boolean, required: true as const },
  title: { type: String, default: undefined },
  message: { type: String, default: '' },
  confirmText: { type: String, default: undefined },
  cancelText: { type: String, default: undefined },
  variant: { type: String as () => IConfirmDialogProps['variant'], default: 'danger' },
}

export function useConfirmDialog(
  emit: ((event: 'confirm') => void) & ((event: 'cancel') => void),
): { handleConfirm: () => void; handleCancel: () => void } {
  function handleConfirm(): void {
    emit('confirm')
  }

  function handleCancel(): void {
    emit('cancel')
  }

  return {
    handleConfirm,
    handleCancel,
  }
}

export default defineComponent({
  name: 'ConfirmDialog',
  inheritAttrs: false,
  components: {
    BaseModal,
    BaseButton,
  },
  props: confirmDialogProps,
  emits: ['confirm', 'cancel'],
  setup(_props, { emit }) {
    const { handleConfirm, handleCancel } = useConfirmDialog(emit as ((event: 'confirm') => void) & ((event: 'cancel') => void))

    return {
      handleConfirm,
      handleCancel,
    }
  },
})
