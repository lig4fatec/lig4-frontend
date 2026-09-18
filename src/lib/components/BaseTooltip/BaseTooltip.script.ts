import { defineComponent } from 'vue'
import './BaseTooltip.scss'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface IBaseTooltipProps {
  id?: string
  dataTestid?: string
  text: string
  position?: TooltipPosition
  delay?: number
}

export const baseTooltipProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  text: { type: String, required: true as const },
  position: { type: String as () => TooltipPosition, default: 'top' },
  delay: { type: Number, default: 200 },
}

export function useBaseTooltip(props: IBaseTooltipProps): { positionClass: string } {
  const positionClass = `-${props.position}`

  return {
    positionClass,
  }
}

export default defineComponent({
  name: 'BaseTooltip',
  inheritAttrs: false,
  props: baseTooltipProps,
  setup(props) {
    const { positionClass } = useBaseTooltip(props as IBaseTooltipProps)

    return {
      positionClass,
    }
  },
})
