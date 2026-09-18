import { defineComponent } from 'vue'
import './BaseChip.scss'

export type ChipSize = 'sm' | 'md'

export interface IBaseChipProps {
  id?: string
  dataTestid?: string
  size?: ChipSize
  removable?: boolean
}

export interface IBaseChipEmits {
  remove: []
}

export const baseChipProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  size: { type: String as () => ChipSize, default: 'md' },
  removable: { type: Boolean, default: false },
}

export function useBaseChip(
  props: IBaseChipProps,
  emit: (e: 'remove') => void,
): { sizeClass: string; handleRemove: () => void } {
  const sizeClass = `-${props.size}`

  function handleRemove(): void {
    emit('remove')
  }

  return {
    sizeClass,
    handleRemove,
  }
}

export default defineComponent({
  name: 'BaseChip',
  inheritAttrs: false,
  props: baseChipProps,
  emits: ['remove'],
  setup(props, { emit }) {
    const { sizeClass, handleRemove } = useBaseChip(props as IBaseChipProps, emit as (e: 'remove') => void)

    return {
      sizeClass,
      handleRemove,
    }
  },
})
