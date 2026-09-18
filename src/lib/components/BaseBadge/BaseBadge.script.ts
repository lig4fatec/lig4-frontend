import { defineComponent } from 'vue'
import './BaseBadge.scss'

export type BadgeVariant = 'win' | 'loss' | 'draw' | 'success' | 'danger' | 'warning' | 'neutral'

export interface IBaseBadgeProps {
  id?: string
  dataTestid?: string
  variant?: BadgeVariant
  size?: 'sm' | 'md'
}

export const baseBadgeProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  variant: { type: String as () => BadgeVariant, default: 'neutral' },
  size: { type: String as () => IBaseBadgeProps['size'], default: 'md' },
}

export function useBaseBadge(props: IBaseBadgeProps): { variantClass: string; sizeClass: string } {
  const variantClass = `-${props.variant}`
  const sizeClass = `-${props.size}`

  return {
    variantClass,
    sizeClass,
  }
}

export default defineComponent({
  name: 'BaseBadge',
  inheritAttrs: false,
  props: baseBadgeProps,
  setup(props) {
    const { variantClass, sizeClass } = useBaseBadge(props as IBaseBadgeProps)

    return {
      variantClass,
      sizeClass,
    }
  },
})
