import { type ComputedRef, computed, defineComponent } from 'vue'
import './BaseButton.scss'
import type { IBaseButtonProps, ButtonVariant, ButtonSize } from './types'

export type { ButtonVariant, ButtonSize, IBaseButtonProps, IBaseButtonEmits } from './types'

export const baseButtonProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  variant: { type: String as () => ButtonVariant, default: 'primary' },
  size: { type: String as () => ButtonSize, default: 'md' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
}

export function useBaseButton(
  props: IBaseButtonProps,
  emit: (e: 'click', event: MouseEvent) => void,
): { classes: ComputedRef<string[]>; handleClick: (event: MouseEvent) => void } {
  const classes = computed(() => [
    `-${props.variant}`,
    `-${props.size}`,
  ])

  function handleClick(event: MouseEvent): void {
    if (!props.disabled && !props.loading) {
      emit('click', event)
    }
  }

  return {
    classes,
    handleClick,
  }
}

export default defineComponent({
  name: 'BaseButton',
  inheritAttrs: false,
  props: baseButtonProps,
  emits: ['click'],
  setup(props, { emit }) {
    const { classes, handleClick } = useBaseButton(props as IBaseButtonProps, emit as (e: 'click', event: MouseEvent) => void)

    return {
      classes,
      handleClick,
    }
  },
})
