import { defineComponent } from 'vue'
import './BaseDivider.scss'

export type DividerOrientation = 'horizontal' | 'vertical'

export interface IBaseDividerProps {
  id?: string
  dataTestid?: string
  orientation?: DividerOrientation
}

export const baseDividerProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  orientation: { type: String as () => DividerOrientation, default: 'horizontal' },
}

export function useBaseDivider(props: IBaseDividerProps): { orientationClass: string } {
  const orientationClass = `-${props.orientation}`

  return {
    orientationClass,
  }
}

export default defineComponent({
  name: 'BaseDivider',
  inheritAttrs: false,
  props: baseDividerProps,
  setup(props) {
    const { orientationClass } = useBaseDivider(props as IBaseDividerProps)

    return {
      orientationClass,
    }
  },
})
