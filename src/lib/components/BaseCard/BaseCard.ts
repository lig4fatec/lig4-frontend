import { type ComputedRef, computed, defineComponent } from 'vue'
import './BaseCard.scss'
import type { IBaseCardProps } from './types'

export type { IBaseCardProps } from './types'

export const baseCardProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  variant: { type: String as () => IBaseCardProps['variant'], default: 'default' },
  padding: { type: String as () => IBaseCardProps['padding'], default: 'md' },
  bordered: { type: Boolean, default: false },
}

export function useBaseCard(props: IBaseCardProps): { classes: ComputedRef<(string | Record<string, boolean | undefined>)[]> } {
  const classes = computed(() => [
    `-${props.variant}`,
    `-${props.padding}`,
    { '-bordered': props.bordered },
  ])

  return {
    classes,
  }
}

export default defineComponent({
  name: 'BaseCard',
  inheritAttrs: false,
  props: baseCardProps,
  setup(props) {
    const { classes } = useBaseCard(props as IBaseCardProps)

    return {
      classes,
    }
  },
})
